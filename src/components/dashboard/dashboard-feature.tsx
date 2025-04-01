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
    "4xiByFtysqJ2UtKD3MCKKU4SemqrA3ypuUufco2BSAWvPEVntSnhmKZcQiMmkdk9vtcm4Rv9Ft3HW2tjCtgSzMyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YosWG4pJ6n4XXgcBuFkshkaqqd5UMbkvYPXYvYYLN6n5vJiefLyUDMe6XmSFTNeL2rXCaad2DBq29KcCCsTLhR",
  "key1": "2FjZGdzm3rgvUvMTJREzU8u8QrwzfUH8zfvi7znfAxRGpYt8fDB9MjhTzBsoVCRKMQeZ7y4n7XYmYSYgfwHZhQvo",
  "key2": "3AdUVVxgncgGMEciNtQk4knU6jc1Yfid7dSQBD6k4KZ2K3iVVqbuAPD4vq6YcaUDM4GRQb4xy6pGhJyT1ykhNNwC",
  "key3": "5qmUJR9EWYfR2GNvyKhbJTpkoStm2JDco3uTSrHr9wvvgQwwrQA1iqcNwY5YKTAt9Wv7qVJ2pVDKgUBaE1XwaKoE",
  "key4": "2gujW2TrucpacspCfrxnihq2JKt7sBSt757dT9rY8Wx7Jd6Ez58mL1ioFqpipsbGfNTyzqD3fQbSwiGw2sh5x356",
  "key5": "4UHvzfkzkTDEzhqSy3CCgNveVuXtXogiNwNiEn3cxSpvTP1eYkEH89WYoHthEPTXts1NqnvQvPTwcAjGsEKxBrE3",
  "key6": "2pPrwMnQFiDa2b17cRViHr1mWbRHYfo7WCUXG6zz27SN1ZWchsJbgUMpB4meybGbDF9kZDFyR2BKD4bvyujtGQxb",
  "key7": "424JiFujJS9QqmTSxdstnb6JDmBMEfqVjZGjEmLuYkMZ9QYLpavhBRqtaij8Ec92JhsTANue6FASqd5FBYAcwhk3",
  "key8": "4dtB5VEd7nNXQkrxSUzyuduW4KTbBDQqpJ7GTExsdxN5GRu1pCoxWx38LYTmB3hszHiFnc2zLoc2jMLjXz5keaaj",
  "key9": "2mhaQBAkfFeW5h1u8Bn5d145kYf9hs8aESATtpL3Lt8bcwdXFYXs8cA5tSBAhDm59KYUFYQLk7pUZBxPqTod2AW",
  "key10": "J59hCY1CXtNWPUJVfKcSTZfbAu9jekN3kegktobvynLgNuecHHnDi33ERhkwMVGJVJyvaxj6SQFqroD2EPDhmyJ",
  "key11": "55QJtMaYWp6tVZEaxW2QaDVrhQ7MEitHuxqDop7pshReP6QiFptDSzjJchjjTiiFawniiLPuRRCws8Q6aKwRgQFu",
  "key12": "2butFEp3yaGPCBQzABn5brLUn9whJsTGoFoWnTiGgg31eSE3mw6XWftzdCi31YdA16S5NzjhmJKsFTXaENuYJfad",
  "key13": "3Ypq22dawdsuAxTJ9rG1vmesWvGMxkkja4pBFFSdWAF4n1xedUKyrEe71ZYFJwHGkXg5biBvoX9ho2SdGGXQAuyD",
  "key14": "4XVKfteCAAxJjT2Db5kcr44YWANQ6i58nXmJxGFH8mS47uzdnVr4wPQVNBQ4TcqRSwcWwUbxJAxhmHmV1kaxr2RR",
  "key15": "2yycbxfP5NosyLsN4PRTB1uiqUNwfLMiTPp91aUmJArxYnDmw2SCwWxzDc8QwPfZmjAQ7Uc3f6DLkmGgDYtifJ4K",
  "key16": "2yfjYAjcXX5ni4RbjESkMT11MJp2XXd17AxXs3oGK7kqBJRspBq7WCSsoJPjN1rPeQvdwX5nTMKBYXtfEZPLK6TC",
  "key17": "9SMU5DgUPYT8NcYn2sRKeS5s719kRjfNSFqoCJ7mcdZdUPf61QLeniGfAfCUqQYTXTeizsYyGwoEkw3Rnjdqgd8",
  "key18": "8gahFPCjsPWmUx1uoAhRYmhxKp3dqE9u85eQc7YZoELPdmgJUCQAifWZnsVmrRQ5sRcLW1iCCDshYU24dqCggiQ",
  "key19": "23JXq9vBYPU4ZnRKM68JcsRYVLvgKbdtP52nWGcsq9kxphgLxYJrffF6ajuchTzqfGkSinN2eZPUsaLCV46XHNVU",
  "key20": "5MyhU3Vyo9NQb21bTfn4DYY8FuEprnM8rJHYNRtoG9CCRYeHNAKwR3HXXLv4xLZTAxQ2mac7VdpYCb4mGSWu3a9P",
  "key21": "4gTQA2h95ZhVkhsBMhNVqsRhpZuccfkbfYFqNxWAU9du9ViHGEdKgioR4YyPy4q7yoJuWemoYTnnrwub2XZG1qEw",
  "key22": "2yQa9aufyXS25z74Nw3StRTm8nCqJi738eRCY66KVd5BBgXuVRje69hqR44W8AwUuhWJthA2jvQzQ6Y5gVit6G6X",
  "key23": "3Ae2WagWaiwfV33ieCJaumLmaSFgoRzThrujpjEMF96zdjX2rWaRiXmyurMBb4seb6nhxaeB9wL6Q2fueoThV9Gx",
  "key24": "67kKzt81q3RgVHkFH23R5o5bRc5wikenQ1mH1BbAqY5WvkpjASivhuQXs8CDywDkPGKjpnTW3Af6SEGvbfcJKc8S",
  "key25": "5Sfyv3VVS7ynvhi6uPMx8viXbE4oTst64eWpybNuehjYqmyEfPhMkvNHETjtb1Xuv1n1gcxNc9WSTUj5Rw4FtkU9",
  "key26": "5vkMdS8zP7NZK16Dhqwjck5vtEK8xxrdaZijJL6Jmpwc7SfgXLAxn2kYrGPzEpZV4c2VeUAuhNwXPidXqGrp8LL4",
  "key27": "2fugMwVUSvb3Gm18wE85NcFodxHwqLBpaBYR8U4qMNxHRaPSPeNGxGtiwHSW2YEGVayHn9etWUGATqJJNoMi6gc3",
  "key28": "928B9iEEJ1rXLnpBWKCA7HYjwNYA7DzVXKy3QUHg9TKPYwp6meNZubCjExDd6C6PSQCMgFmnsa8VBPWV9soG3AG",
  "key29": "rFSXuYhbNgrGKXkCvQdUUd4ckakdv3JMhCG7BBEF8NMWwRVipcvN81BBNpeygrGc73E8F9mSiSRJqwMvGoa23pq",
  "key30": "hyYNUtjtvVEG3WUq6S83g3ojUTFZMvwqZxG1jnorUp4g3dAu4EszdT9RzgLHmTNvGGnMuitdNjBkDrg379HDk7G",
  "key31": "61UPaftoqXenPA5DRM4Kwb4WZTcqHu1xD7vDxuhiticyQ9iLkmTaG9bgPuA9xCJf1Bck4UJpj1nGrETCBUgigXv",
  "key32": "5oHfGsrLvtayBjic7c4A3SKUCL8cniH8skURcSkhR6p1GjAYXh7VzGs7rtnFuNSZPXTWdpy7CqzsmHeyKxqyhnkp",
  "key33": "5kmTY4B7AQHyZnXCHttdQ1ED7fXmkBFWCZkY9oScqVK8PNsKnJETd3meCfaiuNuBkaPYNtWFJ2cXH7t1nWyHST8U",
  "key34": "4tk7BBxPWmzBAtjD7zarMp9SZ2wkHf7xBRDpiniBhwss4N8TSkRHfmPKBbXK2i6toXqZ3yTxo6Vuu7Qr9epYKmLx",
  "key35": "tnFwqmMYPFaiP11XwgSXQkBPgYEFWmw5xLxpgkXaYmpd5krUSfRsk1nd9d3EUfjuiTv9E8zvN7QwwTSsKQ4MvfH",
  "key36": "3RgrGGXvsAcCy6xU3tSmZE8Zvxm3nWTGVevSkTKnTrffsW7h7u8PTYpw1PpZzDP26VnfaFG3izSd1dPBsA1GDYqS",
  "key37": "5bjaaWkkvNRpZt9LkR8A8u1uyj5seqKvZy9pxvSXz6JuJTZ5g3q1zNhN5m7RCAAz7wUVoZ6SxFHxPnJATBY73o2R",
  "key38": "5Q7jxpvrZvkaqptzNtTD47ee7K4MZZM6eTiKuYibVDso2tgUvAmTMXngL8qaSYkdRyW4qcfTDdxGRmKaDWvnWB8q",
  "key39": "3ZKNTDraa463YsYEbYun9q5XcGiBudzqTQfo4zgvFwqyCWzzu5tCZHbwepajoMsjSEk68ooPz1c5kNYgv2MP5VNM",
  "key40": "4Qa9a1mmRZiWLLWbcaVBmBKapSQDknS6p78uG8Naq9aAQ1ZBhudipXSSKKTNJb2wez5Wz94VecrUcKaNoAVZdNFv",
  "key41": "61X3N6JbewDsqr8Tf9Sw2WZrHefZWQ9oBynGNKQpDMzJGPSzVsYW56JcD1yKy8hMwYaTStVoLL3BURET1p1BrKAZ",
  "key42": "3fmjxEbspujpBsrwPtiDcUXoemnBvpXU4aupwGodYbh5FbEfe8nvZnvViQrvqsYBsECArJFgnaFnQRXBUB4s92DL",
  "key43": "5xrLWAGikjzJWrEciBf3cy1a6kegbwPL7ZphYzYA9vkQL848EsyftgBTctgdWwxX9Hob8A2S5jkn6cNgXUVRMQvZ",
  "key44": "63W6m6uJ4SW3yeoZgNJD8WTMewGRogpAS6ytwbzVMtyNiwryN5QwMgFsxfnynhvug14a5D6ZoWV7sttxRfZXKr4u",
  "key45": "5BXAVGTxTaAxiNfrfLm3rPq8MHKtooNTJs14cu3SoX5de9uvytvRibQ8asZgCSJKA1DNtGqdQgFVPTyJaqYSb8a5"
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
