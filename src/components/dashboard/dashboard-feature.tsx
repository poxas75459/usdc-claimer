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
    "32LR6uHTZk4btCpgy7HEKCouPxfTAfsKkxDwzxy1j6nPP8Ckamn2xescPs4fxiaJr6pBNimfdR8x9F4Bqr75qzLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLYWLzV74DRSLdNmfMt1MXkCPP7uBsbanxCvJshdXv9f1Rf1forBxBzWuounmxBLVpG8d9QkpoPzHAfanu8gi75",
  "key1": "5DhvGpvjnGFJV2rgVxapRn6G1AGuvQo2zP2k2wQjsuvKP1rdYXqm3AxJvqQAdBES8xN4fQEoC8WkJXr7V6uTMZ8e",
  "key2": "3koe5RZcXmvM4RSyMmxww2mmbwEYmXm9FVRdJiPxgkBLANZAhnZVVokTrunsPWjhKt1bSshRBxv5FwJ3uqvdgQkW",
  "key3": "hvrUeq2ozGbr4PzTGm4sCuwgqYMpL9KWNtybZan32N1mi6fMRkZpnR9iRrHKV38qGg1FB6RJWxgziv8DBbCFXoy",
  "key4": "5QkyTqMH8FNa1DWKSfovYHUbBfnBSGDbUktoEQ93gC8nEjHz2QyypRD1P9cLu6wxfaLp5zR6sjfHyyiBd8U7n96z",
  "key5": "57bcYaFmrE37m2VYqAbs3PMNCaLPNWuLdYrNETr2gVAeUPFdYhwRv4ciFvy2Xco2w16BRjhnJvpng7HmMAJAMMd6",
  "key6": "8W38iKupJUt1L6R3oF9XXa88NXoX4FRdQi7aXLg2orP17dYM1BdAS7DAv9Tnp63H69En1AUt4wMYNwhUFdwfqic",
  "key7": "bFyziMMbgCdzNtuMppSAKfy555FuxAS1zNYERX2zn9yjQTgmArj4r3EauZ5nauLgSahritp5HF2fQfAWMPaWV8i",
  "key8": "3WdiuUiGmioVprL1Gw7ECie1JfsrVEHvQPHFPgwrMS5qv4XgJrtFr3txmmCB6HEdnPPAbqBiGE9Mk8NkkGauiyYi",
  "key9": "2QG2Cw1Q8UoQfJDsNm7K2AS7qsfd4SqdvWe8FMzQ4bvdDmhbSwT9a4CZe22ajHWF18wuzrPzWApqRGgNtAryqwrM",
  "key10": "2f6XtratqRCHAgmFAXmoQfDkuzVfzgVo48pky1YjTTctn5pJ7RxqHzwp5aBXYPjh6Z8NXteDjH2WDac9o1yommG",
  "key11": "236xVPuc8w9GAswQKbgfUyqWtQK3c68Cu8JzBuAjj32YVAyFsSSBo8u9LBXu3KNoqvmfyhh8W6cHpSZUZKvqTwAf",
  "key12": "32DLwEz2YYihEphaB3dAizqPF7vnC2JubEfNdEg7TR9HTd2pxaBZuL9Ph9tJkgMHPS7jGKyFUsVCgerPyQBvyx2o",
  "key13": "4WwRWyKUjjUwN7HRS2c7Lhm1iCNAMVsdTiD7QH3ugkJHtnVjbx1WUoR8y7WUraEa4Y353LNgbB18kVeWJJnKhhPm",
  "key14": "YFaCNySTVv2GSfA7rtK9Ppw5vmmcMC69hyTJsesfDojWRrmy82Va969yU99Gvf3RPRMVCzot3CgeunMvCdFjXAu",
  "key15": "4M4KHSAsSruC8BiJpXqy9Bvzy5HwmtQVtC46Kj5BMEWnB4VSU58pfoqPVNUoTJZCLCuF4wqMtvJ68iyaMfUyTbXY",
  "key16": "67DTMC2pzCZJnha1wnxnCEqqteaEPoSbxDVCmt3gCxVYLei6QNqpgBoddtPYKeDFpDcSzGd5YZMk2VCuFR3zwGS6",
  "key17": "4NLxdj1bMsbvCdX8xLX1WjADXZPnK8atCUycScQvV4e8CBrwi6Vncqu31pRXmwrp5JeU4vJHi3tb8d9rT3P4TQPn",
  "key18": "453xUaBqtiKedQARFf1CZkAhuLDjovkoNHyXwTfbUB5oGjJjWe58VEoHqBHCo75Yh5WfzaAhsaqZ5kyBjBG8pW9Q",
  "key19": "zdoaqssU6x6DwA16161V1SeBZV6V2bjLVoEqL9KphrP6XT7Qip95Dfis4cZRKHXCA8rpSu1BjJJ3RVG77McmDux",
  "key20": "28t6FDqhzhBaruWt8pDv6irnTkicAjKkqaMMCHwSpQzkekm7xS8x5WZreo53zQK1YrrG4iqfA9WUoxsrz6RNEqXG",
  "key21": "ozzjS9UWv3LagMnu4LWKBmURwSV4YQ7xdmwGdAWFc7wfPVp8tM6ZLMGGXcYdvFLpkZzfZkAwoZecka4MDkV7qB1",
  "key22": "3qcxmPg9QBfonviWTUdsErNymvBtNmorCJkTTdsasupxRm37F5sJRVs4ae94hfxjnwGFDUnYt66WsnPHKHYF2JXZ",
  "key23": "65xZjrLZAtqM572MTxT8wW96wHRUCHZWRk9hpDvYEd3He4vfHmDxuVUJH5WBHrmyv5jZs8ANHKx8faXGNhANBbe6",
  "key24": "5fV1ruZd38Bqx8VnhLWA1Bk4zuM6Tsu5XxWWermsQPvSs8mAy2wVEtAQgTRdUZ4uDgjgyKswNXToVccDvsf3FwoU",
  "key25": "7JkzHyRnzkWRYo9Vu74uTfd7ARXvL9yW6VnA25nVQcnJqygv7pYb9ujUHCFVjLXSk3E5J8CoH9Y4mdEiaVJmVXm",
  "key26": "5KuJrC7X9d4FhT2pwL4AJ2cE3MvGzVJAmhfAkedaQd4RVbMqPfgr2ZXqxTob9x7CtUE33HeLUuoVRwZ3mPaKqGK2",
  "key27": "3awNbevEccW9ct7UbHyhJigLye2MMfGmcbnFggoMg9edxPF26XCaajMEArnKhaR88XfbJ6bi8d99F8yN2wUUqu8q",
  "key28": "5oeu7XXjrEWWZnW1HpuhNDhSq7iSas8eyAFgeGPQ6n7KrdWUfMZkrPF2VZECu1YpzkbXcMaerKAuDck3vy5r1xAv",
  "key29": "xjD4ofqtZaDpCvRwzGQ4jP75UAiLGz6wqRtcwUMFZDX6pGfaSWY5rKsBCSRoSpPQF2CQ4JFFWdUocCvJKZryqwV",
  "key30": "4vmx9WE1k9MfeKMwLRSW9VTaa1aXYWN9uiUsdutjvwxhBmcu3QuKDqfnW2HGpDivf9HPmm1zyrWr5WU34s5zrzdv",
  "key31": "2a9LPMv8HF4zrW1UNLhmZXnPveCVDFqAtrAf5YYfjZdaWHV2hem5Dxpbk4GJSxALvpMPoxqmXZ3wfcfkQuE4nz3C",
  "key32": "2GDWT7TGmpy56swzELhbfduYLQCu88Koj2C2mvToL2w8curzLDUwcSYfy1vzvg2bYGunHTKprsmKJhXH3TBZw8Po",
  "key33": "ArRCjJ3YKAkUdpwPKFKRSVUg92zK4YZ5nzejiKiDcPVYr3hfQ87FD8uHDZsMLhshRJ4dLyjXwZrS11B5Jx4bT6r",
  "key34": "2rXZXFEoGGomHXmtQhCjkqVa3DnbTqfAVVcNfK6cURG2jDfQvcYPUD6amq4BhRw81Bx821uMYKzSmMeEy4EdeeWH",
  "key35": "LBdmUwF7nJHeTBS12Sd4jX2fq9DcrnHvVtk6rCqJkQefhumCCjk7DNaUYBPH1cy7f1KjXvMjbK6Rqtz1biYRiWS",
  "key36": "21vUrr44rJPRvBtcRBQ9vDsNTtJXibfCqXMgLyaUALt6GubX7dXWvr2Z1A9WFEhaHXqLEH8uBqvoEqkMoiGWs8uK",
  "key37": "5EEtcvmDnYHPcRgMujBSe6qotWiUGtdWu2P4D3JYaf4xK1VSD5SrLu95kLKhF8StGGUzmya5RQrbr3y11m5Cieff",
  "key38": "4qxEdHQdLLwPDACzN7iFShuscZKgBqsiATb1WFt2AYuwMPuG9tMJpqCgzrNe47qUDuUEiFcotVkRqfaByxBuKK2o",
  "key39": "42cUK4e7GQ59yNNfMBKec4tKbpi6K9zZT1jizDwg43R3BRrXo9aptzCuq9nxcNDUoHucEngsEA5HGMJjQQT8iTbZ",
  "key40": "fKjPhzbC2TSydHFpZRZmQnDGB8qvYZWzBE1dW2L4rgE3vsLW5au8jWRd9kWTG6DmGFY94JPVFx4ypMmHgHKaQX6",
  "key41": "9a7wQMt8MGoarMkiovGRFqUsEworZgCEFgR1Zz89rcEMMGQg2jdyrWbCos4V1qxEhYfvifRJNYKFgbTZxTnTGqX",
  "key42": "4A265GuG2E6JoFvgcmUEbjxWzMnJmMzasYQscrueVTinQHBRTXTgahySapeTsg5Etkw6tNnA3rmk2SNMY5szWDNH",
  "key43": "27gYbzUiAVgPzWZs5GhNKLisq5EHMsCytLDw8ts8z8vwatU3RTPYt6HuV7mNJ57gqcw7t8Be5USLoAvT5aP9irX7"
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
