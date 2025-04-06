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
    "KZJSs72Y9aHfjb3XVa8dBBet6U8UGQgQhG9GeUY3TmFyW3Amn59XYBSaQVxoFq9MHbKkidF7Mj1nFYqGETpmkow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9U86aEz7ZnbwRsF9rFGDKdnsQSoeVUe94f6gmbauBmqFiCCDS5ev3Nrvy5fbWhydZAAXddGJq4434bdGpdXQCB",
  "key1": "3JEoztNsjiDodrSHzPcb15miTaLYgTAwuExWNQvzvkDrbAPZD9QSnfoMKKnZxixQwkP5YwUbfgtee2QnbDxWQUrP",
  "key2": "5ufbWzjdSs5EwJ58DpvJiftgF8nk9J5e58kbasX7qhXyc42NgoSB9FaUr7xaqamENz6bxpEQPNXfaaPCGpqwwD4n",
  "key3": "3W4t8YfZip8qcia5HiuX39DFpvpcr5oBDYA63tXh3zX8Fsz2BGQhDDMzC84PbZJqHswvTY4WdT8tLNTfHNtECC1B",
  "key4": "2VccMTSLtLsdFPu3fRQki3TJMGgysTjrCHasFMfWAA5naDLEBvWx8V55r4v2k7GCbfAvjertUKADEZUU3ox481gD",
  "key5": "3VLur9SsKMQeZoF5Pad3XmPyKLGkdtkj7xrBdKc9LMkFfsVLSDYtkwnDAg2428YKrUFWqcDwZmM86ivjqyJPiSe7",
  "key6": "XChPdyAwHzMPBuArtRcirwy5LHcQE1eBUCtAByEiYCXiqbasUDds9VTw9J6UKD5fCEyuM4ZpLvHyw9GC3Pxx29V",
  "key7": "5NgqcaXzFfmLAxRYALvrPnMsRkvygYsDTCg3KCsFLXMPmADpr5HDzi3qWB1bXWnevQEeKxKpXZv7EEwzZMGJpkzt",
  "key8": "3ejLVdXsQ4AohrJJ8ppdgdMEeVe9VkFH7qWsoy47JmW8rb5x4DAD6GhKh2hSVLxGyE6xcPpojqS5PSGQ4R5uLL4q",
  "key9": "4VYxDgMcjy59TQSs2i2PpdsADHeK9a9HhYnPVgp63WWJgHNx7A3u3qaKiPLZPnuFWmoHUWvmhTBN3TvNpgXASVg5",
  "key10": "CKA5TErTmtD8Zr3NrMBoaT4vxpR3ZEHf6e1wLcBgKG7tjvxH4kNp3aoqZiDJqFcri8cPtqQ5EqFaxF1iiXH7vnF",
  "key11": "2vgRQLdmvcmUCMSscwj3YaqWyp9SxUwLRGkVmu1Nc4fYmJu3misYyg8pjTn3cSrAZxZpyxt23QGQiQm1boYf97qB",
  "key12": "3upXdak2169dNZyXSR8CSBVF7CYpPrjMpkXuvHDb8A9QyHMr7KrvrbL19WMD9DSE3ZjFXmi6F56Wuosva2Hj2qvi",
  "key13": "ntfju8Z5rneWde21PUBkBH9mSKGqCxrsndQ2xSCrMfjW9H4ny3wW4M58HjFnfmCJQVcQoYTTV5DFsuaaXrpMEpS",
  "key14": "4dsrzkgwm9UQs922DR74EnuDRdo49hqHg8GWUmU8EEAQo9EN2rDUEg2XswzAUm5G1PrgYtsEy3CgtFA2ZsXqXTA7",
  "key15": "nNM97fdPxayxTC4y5HVrTawsxuYH9YrRcqKJcKnNpExk26g8JobkVqHeDV1AMEQmBKmxKpsJJWWQADGVFJkk2jT",
  "key16": "3SV6ZW9wX73wDCZq7s8g7QZAEuV6YFgCBE81ZvFJFDx2XnzPSvEDtpUHjbmAcWJ6you7BxUw3o9YWbd9nRLdUgjz",
  "key17": "3RVSTZmTtDRjFepNrwWktfAKr7SjYsEwd2ppCwX1FT6YH9Dqi9X2MPccUYTPuawJeXjvGLXasrBJEVydey4RWykN",
  "key18": "2f6tQ9v2si7v7Upfxxz8v4XK4M6qCwz6Yr5okguXBfeAQsZiZMscfFT9SUC6rNzZsp1feRe6YA3PtL28hFi7iCFW",
  "key19": "5447rjFFgiC67i5ih8pZYefSH8yYU9K3JeLBeuKWGTvp7NqgNCRYhkezfUNfZph6nwzYicxhMorN5KPHw52AcMd2",
  "key20": "WNttYquhn3ajDmrR9Wpu6ynJUr7xdMA37Az3AStWvimgqQRyXLXYaShosq7mu6ucXe2zg4wHkZ4zW6eLRCbuXN3",
  "key21": "48nAVoU1ukuH82tRNrttMrjDDu32yAqejzjEcGnnGnP4i17gAzKCNLsHPagN92Cfjgg8PKas9CF5f9pT7T8irUZ7",
  "key22": "48RnRuj4AE7RjzfdjLg7MgpkRaRvaB4cHjfgRbXuecsovcHLB9YS5Pxped2AaPhoXgFY4wBik6Wbz4xX8LXsdDn9",
  "key23": "5YPsjTMcAv9oc9FsvvxYHCjj5wPQ2UvYsDPJJsjHXke1iNDRcv9dLFQyuqnguHXsJccN4ov8p1LDu4UMibgjVy7i",
  "key24": "5hALBvzhbG76QTR83Zw7DTKJGsyc2SMqGic4Kiz5kQk7NR2Fvf2JifLYivjNoAciRHmK1MgidLRqrv57RfwiJ9qA",
  "key25": "5yM3gVygt97beRtGAYWPepdFyof3A5aNsi8fv5n1MWUYLpPR6GpnxNK1BcRZb7MFKL9DMTjFHoK5chAMitDJRKwv",
  "key26": "32ivQqDMQ9X7TowTgqVqFqegiEmqXNi6ecRSUaJCNSqBnQr4reAYyTqGmZtUVtYkFKidRU4ziiN4jzeGQnkD8C8R",
  "key27": "2Eco9e6JBrCkC5QMA2iFveHCGRY5qtkDQ6Rsn2oPStwWTQeZR2dv51JHWUi9Lrgkb6xrm4rkAkFs2ed7z1U7DpkY",
  "key28": "57TSefymemuRtZiye8YiuAqSJvGERKdvHiakTXo52hqBU739ysjqkcTcgHTrVYV8qDmbAcHwk8xFMR2PwC2u1azD",
  "key29": "3cJzbNK4S9LDAFzEvebZ8KjFGwMbJovhjGN3YcKQT6X3vduMWdTxHUhYfdAYZgRaDzWuLh9NmkrFpL96XfWsqjxP",
  "key30": "4q2xHJwAW2BeT7gRj2aUfR9YSgmdUqY3T7k3PBN4YiMoJEr6PBNVqTE4xxptJoZB6K7hGyPGSUbYBJZzo1ZpeY8a",
  "key31": "49X4Kj4fzU5WX7bBHm5EozmibNCarn7M5yuftcXszVw6VXfkta1YXKdVo6p69Tfdtcc5VNMh4X1CMVyJtBiYqFP5",
  "key32": "3CdE2CE9LxV5W5UissrDEkAQdeaGsE7Jyp3FL5PqxpJWdB7iB1WS2vWgDR4AXrH3Ghtgy1TxdHLLy9wTa6P6W8bP",
  "key33": "3Uh61Fon2u9dCgogBFBdGZ1SYX1YHa3i1Fob6YYLRTary5bHRRm6GHLLysYZHmDk8CtihiD2TsWBoY2pvbPGXKPF",
  "key34": "5EwnGB3qCpX4hCk3X5HGJG7LLH2DrrAjmQK6VkhWVtwdpnoTNSb9a7cgCfAdXcPc8xAvLfPzddyQqWFRGJQS4vj5",
  "key35": "2cPLHCbsDM3Bis8QvTnANvkMxumyRAHyBtfh2t1Gz3MWid5R6UPRGSkWkjjX2DSveNKEyxw5WBTw6aHmC1twZ3rh",
  "key36": "5Gixd75kfSzeiW7UvBysvf4Sr4aCW6QrogyEe4UaLUcHHnpG4iReHq6RfctAxNsrpULqjJKsf2ahm5AWkwjKXuLa",
  "key37": "r17g1hj3D4rchZcUpqwsZH1KbMTCkwYby1kp9n93v5FmCbpUpoaGRynkjiq7gvNkGTUtyGwxE6RjPsGcveokqGk",
  "key38": "iXwpaW5z9QPVbBXJnuEt2qttQ7saREQymXYm5KZqPUJ2YkAqTySmT9h7BTt4sp5gTA1pFAspP8Ho9UyVvXuEiA9",
  "key39": "3oyv9eCuC72MAHLGNB3UNhE5PfXAAFSDqKDJx6gf45QNWg66RBfDZgrfqxddre87GXgbfjUcd2Q6H4t6Ro2MPa5E",
  "key40": "2YXySs9P9TsiXGAm8186Xo2CDUADZrgnUBGD8iDryyRVCqjXNMC3VZ72juCAcqBh818YZfck6gtbjjSJhKrDWg58",
  "key41": "E1zeG1VEpEavJtqY9vdmuVTXjiFanenbN3cdeGTriHeJnbyQ1n7iG1rQqn6VyE3xH17xF9N5Hu215cV12q7Afrx",
  "key42": "nrmW3t6rDLkQyj3P7nSEr4FBYM6cRdxBe1joqSXMhegD6EzMMuSXSFZn32362nCqfdGMkwm9NL6LCiFamYEX2xZ",
  "key43": "5Bk4xyycpyDvnUuWaPbTJLAviEofKhfRWKpxEBHj6DgqXYwCHQaC3Cnz7Vvg8q44sccEV9idSt25C4Rbtku6ur2c",
  "key44": "5bhb5TNrejRcKsEABdAiU9TE6wi9fWx3rVnBtQdeppQHciMx3vkF1nxfCQT2rcSKNKGsLacNfswdFQPfvp59dPLj",
  "key45": "2Q2veufZBXZPVEe6udBv1Z7GcLYJLL2TWYxbjjE9q9zxLE2qqUkybWp1yzo2XzAPyiLWGpMmn6G2NyL9kEeJDZxL",
  "key46": "2N1vjYUu7YnQf1Fr2pSXbCuTrXes7fmgSzvd8TLEVWQrm2EkSWf2hCmPwBctLiDKwLgiaEamM3EGk6GhbgUiKWdT",
  "key47": "2JxfZa7fEQLbg1bqe5sfqfo3a8wTpdnciY3gsxmi25en339gy2aNSZtLho2F9zX8Jg3xGSM4kXtzmKy8bA4gjSS3"
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
