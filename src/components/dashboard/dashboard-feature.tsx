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
    "3qoH4JLCYt9viPgoxo9QMx1SxY4JTJP79cFoc4csWmEc3DM9edhAW4gTBA92uryK5Esiks2WiAeFKiggZenX1Ff7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9CZ6iERqMNx7botTAbxaYRVJVkzpFrgPy8evdPau3jvaFkyzcVw4VBeFSjKS8AFgdCriWmazmDTRyxpabiPs8U",
  "key1": "4e7SLxz9iEjtnUMThCGDJamQJfvXWtu5GJjfG7NXwubR4kLsfvTNQLq6grtud1XD5PAhLnqDXaNMTEBbeGvHd16",
  "key2": "2DmGYmmiXAjR6J5xa3UhQ84MyiRQfgwwTyL3x88X71CTemcqkhrptP4oKjPtoqET11nPEgmLepdMS2BzgvkCh8KK",
  "key3": "2zrRuMEcJmR7xRbK5F5gKZ2GHvykJKih7kp1gWNfcMVh1yNfGBvgwmK8cukmLLWurf1gpYMrhHfVnQgNyow3xU55",
  "key4": "2af5GUkhw5oxPXApQMYFDf6t3zRygnY9nP3BJQMJwguaJ1DwavrevF8EJpAR5UyaLnSL5g3UHV41YN5xRfMszh1L",
  "key5": "S59vdDKXHWygXHkziCUD31bPnGhMeUpYSqSQAr8wJSBJsNoECAkVRcj5AvvSF9R51nqjUGsB9B1dcqBU3tbTCoB",
  "key6": "4ubA86VKjhzZjvqhpphDvwsAc9Rs3R4aQuMNEjYSQrTRS4Qz2GAg2SmKMGqHh9wy3T45EdBZRN5W8HJdJ6tz8ntQ",
  "key7": "5bLDSNz2etPLeDNyETPxAFVe1napGJMBckQ4MR2zKxqM55TKmaPkVxFPK1uFPMWnJLuaBUwSuHwUubtveiCVS5iG",
  "key8": "2DLS53dQ8a1ggLdFisE5GM5LqycGzA7mYZE9imFrEjHjfoJDAZLE1pWtoYYvnb6igyREgNCWkCu5k1kQ3eEFJx9j",
  "key9": "3g7kZ9126TqZq1UmuEM8xmXtAbkj49id4YC5a6EJouQRAan4bvyRE3QuSA9c2FjhbWZXKKVyzCBkCcxqPDaHvoXR",
  "key10": "2HMR618UVXjDcsMWWitTqYNY9uNCVA7EtL8m7E3bhaeNmhLqtkQ4833ttMvVU3Fdd1sY4ppDwuLvuTahDF9eHHBQ",
  "key11": "271j7fTkq6usaL3zXXer4ZBTpvE84rkqfV47tZcXtTpHhMnoZnC2GzbJtE89ouA7nREbkQw8tb9FP8Af5PS4yDQB",
  "key12": "Zg338r18ymjTybQXCkvxh2xEzBYKucwFA4m9tYC7vYogRU5jeak5vVBPXenHbfpmUEsvjvSZwJQdKFWreZFLmT2",
  "key13": "5oodCGMhMH6Y2xfvHuMhL8DjtWQK3vS1EED3cEZR6xjLwR9868Rz8pA8F4ByLQoj4qNYHav8k1ZhsHGTHtHAZ115",
  "key14": "5Jbt95PUcWjxCqtmD3cs9vT7WqVCvtnX5V4QUZnRhNV1wDzPPUqy1c191DXm14VFkvAu2oJFXpcGuJSPm8UPFJgB",
  "key15": "3JF4B4SUnuxKRw9K1fJHBBMyr5eMmoeozFQSRTrUhQ7A3Jvb3ASWEbMpGDGeTnFxQxdyUra6EffJjUJZPtTcSEfJ",
  "key16": "4PJSohs9QDEscrnhmqEJaiMoXoEjp1rYFRcK9yswsHjEJjaxk9z1Nq9x8bMaE5J4dhck5gcFBfT6mmcM8H7H346y",
  "key17": "PgrQTw8jdnD3MMWQezY9yngQpbKqdseGMusLnTxMUKVCMn8r1skteY7HmNti19HArjJvWcdodBtXcaNaATMHWeZ",
  "key18": "2mdjyDtzwC1cnNt48er4VgmN5cUGVukXg1X4rvRQhgPpUHcPfVbXT9uG6aktrfx2w75yvtmRxgtxzsMAoAWYhnWU",
  "key19": "n6Hi5q8m1o3TQnay9pP8TQmX2MAsgnee9WFjEjyzuBf1fSVkueWPnx4NusiSBoE9dTGSwUsoB551R4ZhbmNNuLu",
  "key20": "5Wh3XobZxQShHXoTWywsEEoq6JVRmYqE1iw6tnhHqyrSBNwRmtyNwtQUUm2Wj7QtAVKwyCKAqjnqFi443xYmjbYi",
  "key21": "3osowbawnjWymmTNthuLm3GrkhWixavbAVQschbvKXugQPwN171fnMruSpT2zibuAM8FQYdCKYLYrZBLAxXaJGNt",
  "key22": "5YsGxi2r4Zc3TbKfNd54K5nV9wSett2GYyyVPTnQUEnZ6QRCLzty2x7txUoziULaYHrPRTNmFuwnPRARV51E7VQW",
  "key23": "4Gp6KdNoebetEdcRSCwuxUyseCmJKUGk7sywMJXE7NfxFrDMhQ9EX9uxMPXiFxsWmB1ccTo8HwS5q547wfuugUj5",
  "key24": "53wE1MSDgz2tdYgRA57zXdMgrqizDbz1VAcakZBD8DdmnFFWBHiCRoRUx9rZYADrN3a38FtLkrWewdgsrocMAQoX",
  "key25": "5onuFXF1h7D6h8sQJFx5NA1Lx8Wzw8eEB7vHPaN6mB7ChcoDvhFnt777v2ATePF2qG1bE3LAVMi88p754r4yR6p7",
  "key26": "4bBLqPDKxg6DGwgTu6JvZsryHfWAsgYrfRMTZ7NcoJ72uwygdkceS2FLdGMaujGnSrPUxfNKKKbYJbqjnugZhKDp",
  "key27": "4dq4w5JdZDMZLamCQGzW8cy8yTvkxf26dPqRcjhK7fgV8ErsPQGDGywndHxSrPHDfriWJ4SXz7FWSB9xUQRTT8j5",
  "key28": "3oSLSqUvGceVZEs7DjYAapD2yeQfVX8v7TsGDEQa9ZAKcXXi6SFyqogG5dviYfkm63XpZgVYfAye3sxf8tzY8hAJ",
  "key29": "2QgYFi7z1rHZdGP4WGiNZQdbhNCJ4D6rwPTnkRismmau1csTQVAmasmVSUHBeYHeNqvLFnEcb2Q8Ss74qtSSz7gu",
  "key30": "44NCHa5PaxQbypGFudv5vgKmxBZeGVd9F3uuWXBNCq1vV5RQ9mJT4JNMZ42VRqUQAvap3FLciPrMokARjrTza9qe",
  "key31": "2gRSukaX4syfhzSWaktpNfE9ZFGJaaCt97e2RgiVbCXqeWZzDU3akknySBn1oRmJDLh4bPfGYfQHFadfLFEVY2q4",
  "key32": "XRqPER2NroH7hjaTGuSUQZWdCAcdXZnHHZurmjYj2rcAQFK3K3nsu6zczrBXkBLa53d8sBxZdZYQHVE5ZXoNEdd",
  "key33": "5GaqzmQGXuJAv8nzijwEkYBCshSHPDboHG2vqks39az7iFm1AqsMi6Qtm3RLh1FSks6mSBUETttie4poe8Q4C3Lm",
  "key34": "RUeSxVyrag1w5Jtnx338TwZmL5VryJrsmcHWuHuEyrAZGNKVNRNbW87CkyZtsuVz6Z3y4qLed3zarmudRWNeJQW",
  "key35": "mnHECjmVUhiPF8sw5F6TLQmyZCCXxdVuaVna5GzQevQHXzX2JwdrtgiJ4CkPr9mxgBXWDBABygVhtmLuSZ2sWDD",
  "key36": "23pTxVNb1FqMiEPNHdDaV5kqJCpbZ2o4XoZfHp6HKiajWHsLXLt63EKgsNjok3phvjPvYvriNJajak5vC3Cqj7Dp",
  "key37": "2EuyNrg7MDoZogEfQ53W6m6B5ToGx3GDPU5TofcmW4kCTCPe2HaJBJdQoaYVKZGTnr5mbwrtX1m4MCXXzg4sThTb",
  "key38": "49nS6PsYLRGELkK7cAmaBYCbUE8DDErssMQe6MLmhfC9HkX2ue9RTPhk6sf4J8Fb1rUVowPVXhEBdL5A1F91YWSm"
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
