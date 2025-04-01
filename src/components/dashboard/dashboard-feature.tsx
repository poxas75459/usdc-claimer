/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3ZP5SwiULb13mBThpSrFuP5MyUM6jEkf6MBMqc9MhqiGr7dviQWeW8J6VfmjhMetaYbPYGUJzmLDJZwEjyU7RLJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dP8LjfW2axD2iN9BWkiG4dL93n7gjarKVRH28haZdqyNLTfRpmSsJtsNmrJLh2GfGcpGur1LPLRAHFxLx5yEbTR",
  "key1": "5dbo4jHamvFTMtrrWrUTUPaZcTCzuwFBfUZbW18UEUCWw3N7yaJnYikD2tVukGq5LyRt6pKW2nBdYgZ9rPKASkAV",
  "key2": "5WZMPfVr5HioNiHSFKxoATMx4MWsweHNoMUGzs1oHvBoCZQPeEwcvaYHxJzzf9bvRnx2cm85bGFFddxjTQLxg4nz",
  "key3": "5Gubp7CiAVzyq42smuFyPDmUJugxkMFaAr2xSV4N3ewejkUoquHbEckJexgRHaRU9n9pciVmdgZY9zfJFHZoW5Wb",
  "key4": "5keh4FUPmd1jBTgVn6kxkXq7JgNDHZ8HBNEViRtB9HXKHq1sa9D762uwB9pHMhGF7pXbNeXG5Eg1qzkBsELp93w2",
  "key5": "23micua4Hqh2NFq8ffNEhPZ5WhCYaCKehF2zyNq5qjzaoPsgnUVWebtWyVxJukKQe2fHc6cWuSvu6sYCsiejDQ5H",
  "key6": "3Etqi3mNUEuJqdfa5Bqu9MGq8F2kBNieYQW9N7fdmvPUJrRacnYDZqFqDQWFzmbApZxuTjDW4aWrWx12u6xm9Jfn",
  "key7": "4dD44ScUYa73Z89WgD5bdhhy4VF2SJwvtAABoSuAUYqnAf2jSMY1pFwnsthJZVy6ezXTbceukmxkU4qVuYojTBwu",
  "key8": "5A7VBvHwp4VTXuzKXwpoqgRdD4YowQhsmxymzZR3YgkapRJhGDTivLNAZk9nJ4ABvXbtQPFbn6LBbSbXQ8VEbrn3",
  "key9": "5d7PwGGPqYeWFveYgAaKipCkYB84R7JDvB2PkfAUL8kZdeFA3TjkuunWMRsbheiZo3Kro2ikTP2mhDd1HBCADruz",
  "key10": "34HyR1ALr1rtoQLxoa23tPsUPGF2jxuMEYhwPKpVa7D9k7JLWNKm5vmtCENLKnus27AWnxkT4qTqmRxqtaXZsGkJ",
  "key11": "4DyHKHQioxPRU6UURKLr46XfHLhZFCEqircw2AgpH1k4Bd8RHqoE2B9PoW5TWvJkiUnWEkqxPZF4vWUnCCFWpiaC",
  "key12": "4sbgxJBhppZ22zLDxpgw3MpAZWhvj3cvM4GvddHjPiuSmNm7yVzPVoKs3uMqTFJ1HPbiqbxRXPmvmDoxzQG5YbQ8",
  "key13": "4NzmbebZTxfNZ9Ai6L2XLRUufjZEJEMx3D3FmAHscoGSgQG54BahTgWi96UjKN4qo4GC38RUcM6PLqkaq8b93scn",
  "key14": "34cTcz33zQz66X2rNGi1bFy5C4VFVLs16uRLmBCnjVWcVPG8vvhKCEQKCuLbwnBdaU7iiwuMuEgp8Thgu7Q7s576",
  "key15": "2RmtTuna2RyxT8wGjKZkdFDo4krH5DtpETgpErDaxuoXMSngprWKSfuWDFsqQhvbxbpnLhQeDfgAeu4kuvMsuAmT",
  "key16": "5A1EUYpc8y8uwMJboWLGt7u1EiBQ5t5Q9EVhmSQBmC2YiM8MneZS9CLTVdoDBtpoL76nreT2paFNuSU9i7g7GkaP",
  "key17": "5iWFN1BVx1y5pThXdxWix3ziH3a24PigPDrWk6aEAdzWpxsSxLFtCBw8MQ4uMk6eELgi7CbH19KWMQT1stqJiv5y",
  "key18": "4okdR9crzM45AtcukPd1Ujf1t2pugUTKSkdMU6jUqKsjSao1sVanwpjxhm1iZgQEnDgpaaYNyH1j4d41Jka7cUKd",
  "key19": "551x87FvKGuiwrF5YAKBbSbjjyE85PaXrZGoGmSsyxxh8PnNqcmT1bwN8GkCiHPW3joyvgKM5mM5CJtppxdyMqdr",
  "key20": "3v7hzVhAWj7TDNZ3ZnxyExsCaM22Nb3jBX3Tnse5R4fAUceoPZ4Vn3QNGUuUxx1ppw4aRbQiBYUuppBdroFtGzdX",
  "key21": "3veQLQumqfNUjbMbyy315v7HhF9dqhPnB3U3qsGCGMMXxwEW2rooDp2UHwfXxUmb49q3BKoF7dMnTHLCcmdfBGjK",
  "key22": "336MbixRQ4LctABoEuDF73wd1eYATdvPbnjhqn1gpZ9bDuck1oRzQ614Nar1iCdAP1roYz2aZUzM4GJLfujdwNp5",
  "key23": "4Mccq6cJZYgfKqusCkubJeqbJW5wxkTULZV67jmtGdvenfZJLVgHJhhALkGzaQ5mtUH6yG5gwNQeck5LAmCiyu9S",
  "key24": "RYPzw3bovD8PB9G9A3nby4puUGUweT2g9QrqZxYmdwcqHco4X79jNFo1Zed4XfsJvqgEx6N8NHRHUoBGE5C9RzY",
  "key25": "3vQfhsT42pTaypjqgAFUs2YzpezPGtb9ppdMupHKAHJnXbdcZL7SvKdPbEUFcH6BF6SYqxXsw5BEtb2gmyZZric",
  "key26": "2XuRePUtgb2f2AM1WB8xSN5texRcrpuTT13ss8xu1kbVaNeTjJYx5ieziq7Xo3Q6abFj35vNWSzP8BHPjtvaoNgU",
  "key27": "3Ey2hjoxkgZ3rxyqGxSRiEfj9W3wRdkqzMy1MGtGYUXGzAAsW24MyPqt8SQQ1L7Ttpi5zssK8tSgAy3T1jr2s5DN",
  "key28": "4nwy37UmSjLNtSJDmanBzk8coyWVuzy8T1184wShnCqCJBmZXTXBoCLwaJCTTrUycu5Yyjy4UAVtvGQDufQ6zEDM",
  "key29": "5o5WHi57gZwf9L93DBM77oLsh4TMTX6s36Pu5bF13xPW7FtejP8JC1iXEc6VR9L2baHgmTa6HKzhMm9iBb7n5CHw",
  "key30": "5HFVSs6uMFuE6DFRpYFac4ZpVTgrdn2pbL8QWUMbpj6sQ8gJPPi1gtNAqkrqdr9wM8AUSKEdpbRYGBrHDuoKapWB",
  "key31": "Cv16Zf8Xczx9A1p2Vj11idyChmtSrdag8fMEDWYajsFdrUnx8sXGxeCKRiZaewEHYNmNwWPXRWRF6DDTiD16UFN",
  "key32": "38tc7DqSHAXyhowwx4tervuUUJ7nyw8coUPmtCrDMLFe9h8rytZmE9bfcd8wWghHLinv8cR7XXtZWxgy9NYkEsZP",
  "key33": "57gvCu1PQP3Ert1KzCi3GNCnUxxdfuoMYL3aoTyT57c7Pw77AHk784NiiXFJ97iK6FLCAmkCSi2K1JaoXEr9S2wY",
  "key34": "3ctukvUUm4vGUnXXER2iHug172ndPsXxzh4eeZTGPRauGCoQhYLmjqkaVNqoNoaUEGY6t7Y2BTNqdqiH1xh46rfD",
  "key35": "3uMm8Yhf9zLD78hhm5yy1ShgsWL5p69mEKHAWDqGadKSg6KPamcvF4fcCbvoKWCYgShCmS43zNQ3Cz6jeRA8pHL",
  "key36": "3cT4Jm8i6G9bueDCWe1GpZrpvFvD3pSnVVDyCc9r7UGPr5pL1jK21ypaPmkXHBUbbxLXYMvGotd8G6iz6eAaDmj5"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
