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
    "37WBrxrFGLmgYc3wy2LZ5TWbPZNiAkfPyshZjVQQoZS63B2cb38vS6L44D5shRAmtjA7AFA1M3dqaJQ29P639WQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmABv1FcFVjaNaELctjMh2Xo7vdQwxXa8e6o4dsLWZsWV2UXfHKeKyvbye5NLBv4GR8TeNnemaCcMrzPCMuRQLe",
  "key1": "5kC8Nratv9v1nHgWAgfwqA4CdoCM2vELErEtevDt8trLapKum8DnfDhvABSgvzaQV2Vup919MgrSEkqZtE1zV3Pm",
  "key2": "3VUpT9qtNtWDN2CsACxaqXbyP8vrWjgSDRznv6XvjDP9qFiV7BqtsggwewDUfhtGrgyXmgCeSWnG2xK5fjUzxwD",
  "key3": "35pqAGxFnqLLEeGvwsLFkehgxVMWhUMcC71LGhwRGNNHdy7t2PA1MGmy32Qxy948ixdcvg6xNnoRdrGHFmAFENBk",
  "key4": "3y5RcALYkuCmaV6u1Kd8dKfCAoPMiDimYsGkBmJpzrbLgyUySBg2enkRp8NuSMZN2QcpWuLy9vtoyv4W1V5kBMY1",
  "key5": "3gaTgVNPZosrfL56cR6iWXi4T3MYspYhZ8TMvYf5VjNva2RCq43F5sBNd2FXxcD18ARSEwrs3B2qJrKuinNjeSPh",
  "key6": "2qb8fvPrcXVtZRiBE2HVybGMtDLbTerJ9XpiaMqL4y6CRcRbbXWqLrzT3fNk5czpjQDxe9WavQxTDxfZFKUYGuBn",
  "key7": "5AHwmttpdUjh9D48VoyYwdBP1gWKBzy6fEMda5pFug6ZUDbT85MPLe7HqUFQwuR1JeKuHo9XAGoha3amxa246ZG8",
  "key8": "5Yv5bZ6iQBrjbSpM7bmaP1RKnjbTpFU8Rzr5yPH8WBchDKLoToYvCQQQtih88XKMT9nPaEV91fTvXQy9FN9tWAqA",
  "key9": "3Lb9MP9J7WjaQJHNZtoJHQyegmeimyBWhqvGZxJaszbrfB8NCdMUvLQ2AR1JwbXHHUyUTFkJUX2Rbe4s9Tov7kd6",
  "key10": "3vz6abpSJnGURYaDvgonkf5QAo6JoQYVKB34yi4fgZGr1HpdP8hRmEsMWvjoqE5HmRSeJLMUg97YxGBzZGbVJJaW",
  "key11": "4EJEGTrKMVLKxYwjjM41UQvAxSpdEx6HGzLwuuARnmN1hMT7Cut89bRvPCQmcXhvyDd26TgXVJEKZTBsGq9nuM1W",
  "key12": "now4TrNk12c3C2YG3wGmzkB4tTfSSy64cZssGSqbxvgadKK2WXFdJX95ZvhGsfm6VDQktTarmdazmD3keQtEqsJ",
  "key13": "4k4K5gHcHMtsSLKaDet7fzWgtUxHvsqfZoRWLmQx7nhbXtpju29QvhTxGSvcnkQykstebXqQ2xN3n2HckJRDN1z",
  "key14": "5y5SDvDsZBw46J4wxM5UpNExJfPQbD8VK6JTyzE7RAK3ygfmBpbnaWbMC9J4LWt8FY6LmR6gikevzzQAf7QWKcvq",
  "key15": "35ScNWzGkAiroDm2aLwfLJqGsHMb23yCvRDQoSK35ZMkw8ykmENyPdmcuTNsbizdBRWmeSntQWBfx2sfVW6n5dsg",
  "key16": "5DyTkp6jFXUEMsHnqt7kynG4YpJpcY7JtwvnLEnaCxucns6JarWifQ8bdJ5mE2fXkNULi5nruaCLVWF6d7baUKft",
  "key17": "4EsPJ5PkK4yMwqptKsQLMWqhzXvSnF22eSQRmTxLp4R12bYV7PRi6o75Zh6YgYnsPn9U4iFd9az5775BhdfYqG76",
  "key18": "5iegpGPcfQZwjQCWXRGbjR2xVkU5G76otPx8evfsAfRCoRVfqkSYoEdyuGfZ3Bye841GtGrQcVbgwSqmFuSTWjmb",
  "key19": "5Ggcf2wUh4FeGmye5ryGGJHgFaVNSdFMg86rDL7Nux8WCT49vf4pEYFqXErdXMQPE76HTUTPXR3a66Ztmc81iDKK",
  "key20": "34iCDTxEXw2UC1QdQga7qS3prwHA6ZtJnZhKKQnsncHqa2sAAFPcBqCtTsFzwkro9whjzdm9DdAYoNt3XM8Vd5Gu",
  "key21": "bNSStNYKGPkmHyDRB5Bvjf8q2j8J13MurCREh4vuTq6CHbjwttK2CRtmdWmvJULRjJyJ9RtqCfiGDxgkJT6Q1zv",
  "key22": "128hyojqdkiW79U5iFDpeUzJP5TXibUBUDTh9C8vZpc4hEqZknD59ZhPHDAsJpGQWvBDVCsGvoq2L3UM4ZsdQdLM",
  "key23": "4ftdPQHFQFkKcBHpuGfXdMs2613rjUmrZYe2SZGHyTYV4yHBfGzYjjp6P6n2w2Zr9juduceUP8pu8homsk1bR7kw",
  "key24": "4cUKkGBoecVuzpnhWwKJ1BgXxJzjRCqcgNKuMerJpKuLT6z44QVqP6XiniMpsXMQNCear5WiupfipLbmWq4efs5b",
  "key25": "2YDjeMCWURKe7eEganRnSokfGnCUdAADar42LjDZQxtRMvJ7fYswGP42mKXHymWSQTnyvBWDRRZCg8tKgki9wC2B",
  "key26": "65cVuvkQ1NmwRRVMYd2fmxuhYqSgJMDjGgcba2ihuCo1VZCJHjqkkhASJapEFeurckmgXDssPDdqsa3dBVX8hAhu",
  "key27": "3T8cwtDadsespdRmnNossiv2dsixMAdmJN3NiU1DsU6JeS3gsdBDdBMeZqwjKMSaBPBAgMdEKskNibJKUuWTV7Lw",
  "key28": "5SAsum4x31XPMJhfJ51mnYe6NWeiafPPvCEMCLTbefn9JRpwPhvMbFACK7wH3LuciEJL546hgvWDUD17rJxQeBnU",
  "key29": "2RcieSY5eGQ5GCwAVjQXgYhwYwL2B9bDj4Yx65FuFFk3363wHD9EPft9j5Mrc8vyQXUKrbFhMPh7c49kDGtDWuuZ",
  "key30": "2v619XBvzKdxnFsBhipe7dozi3ttMEjG3XQMMA1Hg6wPTfVEPepbhr3MKVJBd7uEad3FUsNuMVb71yeMjPEsgZV1",
  "key31": "4iCK1Wyj9kxBtc9f8PfmEPgLKdz6tMryWmHXJL9o5RqAgDqncRa1kKA6P6MLfMBG7ets8MBhh5sRsQ87PmWsiAe9",
  "key32": "5RXzwDyXtjeqpVACZNUxnaVD7hNPiAfHAnuWdYLwkef4zuLSWS1hKV26vjWUKrNsrRdKAJmZ3bgGxihqbjCZBwvm",
  "key33": "5JR9SZ8HNPuBvkVAfHYNnxn1hnEBjhHKgzVPRJk55Tf8pux17WtYkh1BVeKN88N9HCrtD4qHnsYTQn9puifYrYB6",
  "key34": "51yCLn81s3h88ReztQd9jX1mtePqUkBhePqbSok2zMJa3Ua3tUsHHSCUwCeF3fCFEHGFEt4Kgt8p3n4nBisWCBhs"
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
