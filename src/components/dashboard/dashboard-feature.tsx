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
    "531oPweF56wPVuaaajTznYZMr1ya4KCxM9B6hrVA5i4kG38DtzPvE7BmUkTxsk5pjRX8tV6TaNUzzRdACrg6maGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BtNv1FAe9Tqt1xRHHCAcmXtj1MBHg8wqeVSB9ya1L3vTknkuECo7iNC4fjcAZ9Rc9GNVo5STn7Lt2wjSvvqHWXW",
  "key1": "5U34vo4G5MCnSMXVXpAd25bYiwVNqK5apTmY5wnhoVhKtbqcfSyRW1ZmvzQ3suJRPQ1jFFsfpDzsofbLLX5S6G4q",
  "key2": "2tJWgmSQrraFueBKivo8zuWXG2TT1skjki1ZTRe88jWjBkHZr4qPuTmMAcFwxcH5nANcR8MvgdWt5yCpyH2RiMob",
  "key3": "2tGqCdMmg3C8zF6D1Y6reireddH1gZDtmzSknBApYLwRZBCoqnQsacsv1ELLBzQZhqhiMegYLvugmBfRCjQ2FaJM",
  "key4": "2AvduVV7XMYcYTegfmFyCZr3rPvQo47Uw68dbsKFkPyWsf77fmqAueNKkge9w4ooW9LEiLpjFRxnwNHDkciLRTny",
  "key5": "5MtkcZhb4i1kRSAduEQG7kEgiv91SU2m5AtfrsDjHisNWpT1QKNTquw86v8rJJ93krfNXW32kqwLc9VC65W482di",
  "key6": "4hSz9V11DSVmLLzuuD6TAzVjzp2UhjDhUzh5mnhxRnNNazXiXTYfW62GHipeR56hS6rhSmDTdZYNGUgRGfMqyLjQ",
  "key7": "5XDU4tPtRHT1x9m17fAuBMkwUAZpdLijKs7MHY1niyw8cV6dZv6HWTqC7rcEmtzFqDjQLrPxhdwjySr979oRpmyJ",
  "key8": "3mjRpwA3qVDH12n3bettHf97XefXodXZx4BJiEkSYeb91j3ujBpBqfeRCpHgQhefgj1eaeLTnjLpRGGJe5sNqpn9",
  "key9": "bZ3he7sW6uiyjQ1SXrpw3JSub6yDZ3tW5X1SYLTW2NzpDmMnBPrx7eVeGWyEWM86v8xjodoxznVbCFfNmWb3P4p",
  "key10": "53yErLcMXVJgTjczttJxLKbDizsAP2Dj2dNifJEYnvDRjEFANTA45PELfKiv4AhyQKmcxyx5dGHxGG6Lpp1A8wAs",
  "key11": "5qCMyeS519rfk6Arws1WVmJ1p7UmCWPZuPmD1K8Vp4hMb5ipmTYaT1Hcxticc3SJa9n735uWYvCSu5uuxxYejC7n",
  "key12": "5Cd8pSNZEPz6WYgyPeCJmtsHkte9bvf2avH16hJC5bxGNneoiGNv2mAcUqPd3NkDCuKQWqJCxVBvpBnr9c8ib9wD",
  "key13": "Qt23EoKQjVCCVg4BcrfSsV2J7SsJ1gfUWRwwc1fRXo7oL18SU2VAV5gfbkouc3e1oDxLCCp5JEMVuzv5vTo45TK",
  "key14": "4tmjyys8e52WSeqn969bYYVCYKDFrvAcwBPFsiX8oMS4aak42gQr7Hbxg3438zxLArEVXvstv2EYgfDv5WsorJ9c",
  "key15": "4YavWqnLAgSPD1WwPGeHiRCPqc8TmCmXrkD2jtmV5GRhqpM2PqS7Uevji7h9YZUmqLbF9QeQ33g35MsDK8wSBJHr",
  "key16": "3xh1upd8ypm2QbFD4yyDHk5tWzVVDzN2Eu5HYMNiysN8yBpoSnXFdMFnfH1Z9daBXx53MUK6vTLRGdBGLa4mgcDa",
  "key17": "5L2LJD91Zs9GQqQ2mZfQrZ6qkoUuW1FsHKzHy6jRtW2B1DwsDuXntLbh19i2EY2HkEgrUcHdTPAhMAKr29VYJ4jy",
  "key18": "64BWzcE1DTiCvzBbbuZTa3jPiwKWr8RDXZ5qCroTHGXSt8zkGc5hnFFxQrEeX7NTSwEDE5XwpmkgF7D4HCVvbGVb",
  "key19": "3CPr8T56P5iNcgnrGPg7bXjRc3uk6nSFpU9P2aSzSU7Daqbkvm8WhyLoBP5tsCWL47sqGdR3zAeGJYfujmaB5dxX",
  "key20": "Us8ZZxQRWmBSAXMMRF5Ue1Qi48iuy4KdvLfBckHUhTDFkPbSLdrxGLKRtyPdn4WCYUurDbwdfvzD6pDUv7yLEwn",
  "key21": "43wJEP456FWKP4MThrhcMuxVRsmGc6NrXsXYxup2hvxhzXeBoy1Kd2WGnQoJX1HMKabDkKL9cVNCQDME7eL6xryV",
  "key22": "5riPZP8qpgQn3fGvPUWe8Fuj5V9gQYDz7pXHXkkeb9jXzTuuaxunGP1fbgSK4kMdYeUpNWdfHYFBUTApxNPvFLip",
  "key23": "2wmYwSQYhDKjfaFpu56bnVFX4RttyHwqeiTQPNwrqGumj996VooVs4DU2368iHBfTkU3GqbhfKRFYHHBLcuFzgnx",
  "key24": "5fGccLbnuPQyRXLf7fxYEMguSXyKMsm1huf7AwbneykTquvMDaW4nu2GnjNEW3c3cDFTN5AAh2Jg98ZU82ADNGtn",
  "key25": "3ySoskuZ8D6TBjdFPVpZDPMhiPJKVE8UPD5HWYeq7pjcxBpasq2xkJkZ1BzZ3ND98dz9gDZbJ2xdi7h5b434ujXm",
  "key26": "4mWgAQzASZEpyU8nopFcpPrgggT7ihEiv937DjKzas5QkFF8eGFtLYhkYb2Rapf6c1vBiwgPcADMZKzQHY1ZUdGm",
  "key27": "4rCVB4n9QLoADPBHVVaGEwGsvgZL1DFMwHsuzXhAuXp3YTi14eXvbSeN3jj3Ct4ZfnnWKqUuprLyNWmE5xu3BaWU",
  "key28": "3QpsdkKracu1wwFRdx2ZWiuyqPdGVPm9Lyer3p2gS15CJLdQWLWDtAGqiaW47FcTEgw5MggMMKDJK8EEoiJBb15n",
  "key29": "4y2eyGthRTVm8qn9Re8HqikGdsmRe1aEGdujPsiLqzyk1n4jKTTjygXM2hG2rGMBCEaHvkANbF9SBkvqxhK3U7WX",
  "key30": "K6AqbUtVfoBNUC8fb1MzvTdt5qnPYxCuVMQcyFmdxU3gYfkMcyvZq9iY2ajM5W9qsN4uEpikTE33sfS5Rs2Gge7",
  "key31": "2n16sfvNaieNHbaxPJqS3k9y8h7K5F6fda9UcoCTVziJMN1PrWTtiKDjX1nspKAfLfT5rf758RBvEqt2cVEe4kWC",
  "key32": "29dQK8XNX1QsGk3SoAYkZ6D5yC463HcLJdyFpTKKMjrHUTwCytUrfGnTYdXagpYkTH1gxTmB6KV4v1WAzBjMU2iW",
  "key33": "4ceZmFbw1HMHTYxcS8cEx9k6gtLEeZUdd7e4wpT9RAPWxnh85oALLduS9uXYi8L1tdnGBAN6ah1G4Z738MtYqpNL",
  "key34": "wXqRpFRci2GdDREjjY4QDwqagBZXV3uxt16MUNv6bnEb3Xp8Qc7SdYN8jKQD7k6Sv5jXyPxyN77ZztEPyR6c96i",
  "key35": "4Ls5sBSv8brM5cpRar9Q9UYXF4UaJp2RLHDeLYep1iUhvxH3LriyLwgLsP69RJTT1qngyVVHyjYX8iEndRgSxJq3",
  "key36": "59AhvaZ6LbKuuxPUwLKA1poXadMMBHoxDPNZvz86op4Kf3j3V38CiKwhXdRjYAvZHZiPL5iNKbnxr7N2cSWz8ddp",
  "key37": "61b6YFdprWVTt4TyW9PTUgsdsRG8WeWLEzWzxYbDjV6RDCkqrmj5QTAojvLNKc5sPL7GdpmnDJXhMazTEVA8fVWC",
  "key38": "3PSYia6iJfPmeGeHD6Lamhyr1pk4xZn6p9ESLs17f3tDHTY27hYBUdNKzrAqXjKaqBaYhQPdmy9wgyDX5M2rXFKC",
  "key39": "4qHB8yZuycXJu9vJ1WeLytGNyTXSiQgPz1ZZU14tjmXGvjPYmZbTgJbhCL59b9VTEuXZjHteAuoWtJpKrrg8AG9W"
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
