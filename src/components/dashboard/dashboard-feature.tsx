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
    "2iuVM1ir5mcWaoYjna6r6ERQkwrbxCLD1vroK25NVPjfbSZo2kcHkMWQckjzaWXwP8tWmtz5LmXdCL363D4mxCsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMnJ1kU3csXD1YedTcgu8G7gKCyzuAvDMaEmZvHV4PKFotNrs3o8YQL7dYk7V9Kysodct9fYFBstew8td96TEfe",
  "key1": "2u5L14g2PCwr8CsL7oCvvKK3UkPhE8o1VLFfu9qpVQxnsdCgsLCmAmVbKY97fHhveG4rtrRqZRyV8WKwtdVMrvb8",
  "key2": "5GPJmqbSZtmrxzq8hfoTYuYpTiLREyCDJeaDYVAkGg36kncrknqKGm2JissZUzRp4VrdvmknsEu8VREwQ1VKnnsR",
  "key3": "3XYqRLs6MgvwZVDvdobf2sA2uTxfjZeYuNdmFLRCLPxw8ceKgs3hZQetjJn1mtcWDSVuDp4uwASnyrXedTH8XvR",
  "key4": "2Ph8mYy8LFXmZyC1dzWtdV8jGYgYMZKeStdLhqfqcEPN2UXPa4gzb5zFcnRdYqXKjrrmFShxNWbRKBknQDmRUv6T",
  "key5": "4B96gXBRcTUR6BMbbczxA6v7WxoXBMw59hiJCfipVNjUi9QH9dVHwE9mQPxVZAeEYh22aFLQxL2qSHusjBYKRGyv",
  "key6": "4E7sGFFWVp41PN54bUwUbLurtS6em8J3Tos9VuBEy5TJQJ6giGBHDMMVnqvUwKueXi8jzyTtNFjTPMbtKheUHt5w",
  "key7": "4vom722qDQKxQNWdiFnx8NxGEXk8WibEEMoeifB5JWB3Hn761t3A1n5LeJoHCoo4TQNjEuwgEcZyFAm9V1hz1Jk6",
  "key8": "5KTTMMF6qwpeWe6rXr7YviKwGpuirHA1CfgBBUajxAwgu9ZynGheRs7GRQNP6FtXjagikK8smZaNZk3ND3mhL4ro",
  "key9": "62XRTfAW1uZD9Ldd5CeH8zfEEuES82bjWL545W4YQLDCWfZ7GZa5pxVoSyFk8RnsJZX3isCEXASqzKSCnSe7hNTf",
  "key10": "4M1Dv6h9wBz4yiHWPWpvQx1GqmPH5MyJWDkt8GArZKWKfCvVyqNvuJz8JAPswR7YMqRrFwZfsaxJrixSBLEtGTp",
  "key11": "4wMYG9qYeBna7TUukCfRexbyjM3U2HezYGiEQVB6bi4apwj4cW5LEX6G7V29t98XBt3UTweBbZqv4DH93pFRCmFw",
  "key12": "38myTDUToarNXsBj5NgoDANFMWoSpChb6mxUrtsfXpGHb8tSq2H2T4HhcYnJg7pDu89TZ1gpRgeWzuRpCx53oMgJ",
  "key13": "3uiZovRcUmjaFeTkMDPnut98ftX6ExVRzJGrcBpp7Kfqs7DvquezDX2ZThv8CD8ruXnarTaQgHvTXtXxzYqJEEn6",
  "key14": "NRgbXknEq7pKo7NGHnZYmiEVs5FeigTAWLEqsVbaHiP5az9KrfAy4rnYvoLD8Kiqd1k9NN3crkh3CpBsYrEunc5",
  "key15": "2EyhREbcFNLYQpwAJJgZC4HejtBoJCajr7198tHFohF9fqna81ssb1EsJfhhZLywmciJs2EtjLmMzaGLYsznStU5",
  "key16": "2GAL2YNG5qMHxewvbiqvzJxvn7ShPCnri32K2Rf7XEbHRhz4zEJb738FsnrDmU7VeMZd8C5bhBNtYAHYRqXeEu5r",
  "key17": "2ooyKMGb8dtTe8xDuqKJfxeVsSuFAuKbWSKWQJThYby3pRjs1WjFiPfvDSVdEYdooMA89CY8HyrcTjaoWLA3RFuJ",
  "key18": "45YXwQixzcs91Ps6RJKQVqp9hwvxAJgANJveZbY7rebw3y9RGUNC6LjFvDP9eA8CPVMsYvkEBDGn8AgjVzFDegoo",
  "key19": "5bb6MYh9z95G6sxzEKSaviLD9YJrYvRzzvMezKRBnS6gcCQSri8Cvisv16EsN4VrpJJEcqzA6vPSnz49sJoJBL6a",
  "key20": "2CK1S2VKRh5j6aDThk1WBfYapbKmeqwNu8WamanyCDqx3nGPzYcvzNQVbhcSt5qi33BVpRdnX6zBTQywqtMDXeFQ",
  "key21": "2ANKb7Ukjk8SdaQakSBwgtsutR76ckquogWcrFsBGfUMGqbH8b1VqEPGERAUUq8cqBk53jjJURyARncZH1b7ePMN",
  "key22": "5YnYo5mjhd28K6j1Y5dDTVELmnZuBtCxkcKJU7YBpEHefX8126RYieDz79GEU3dsHg1u1tj4xm4TEPSG4xja5Wsw",
  "key23": "njqBC8oRQEDuTXxy4kiDXEqEg6qMUJo7fwPHf7bynQzF5ruTwQ19LRYQERsBMcQ51g4ff1GwenV6eMr3ddjG9yM",
  "key24": "2av4YhRGqjXZLjA47AzZ1jaKEFvrMX1Cq2LNvYEt9ahNzFyBUuqVmr2gVeLcNnS6z37NBvMBaHGRUW7682F9dcvh",
  "key25": "5CFFYkryRgPyus9CZbNkz1ohSxZWdiUS69KZWG9z4rH8ccMFoPVAM7oPK5nLAt2wGQd7XysM4HSutLY48YwgfWA7",
  "key26": "33TFvHGtJHinTu4PVnnGAeTL516jUjmAfZx3nCwZt8Uhv5r7V7vzFxxj5EomwPCMaa4zK8yjCGDzMdJRsg8snez7",
  "key27": "3u6w2hRaABwHDZ46bMDGAmhPrXCMVASkQTpSiNk1Xd9y2LPuGqBMecyE6imnWrTKEyxozsbPgMCCxaKzyRE3pBG5",
  "key28": "YSASNUQo3jtoZ97WDJno3Xqt8yHURTqWK3aHKtVeUJtfrVdhyEphmchqEy2hQFEqzBhfRXha7wRcfJfcnnYy5bB",
  "key29": "ukiuDKMD1uJxNx8MzwSssy4kU5B3tbvLcgcyrFWVTYUsXMctCDYiYfRo9dLfPTA5HhL4U9WKjRD1XDi1uTFaZ4Z",
  "key30": "5QdZV6gBxdqiVZbtiuDAxPLTu4QH4oUGZXhp8s8TFbj5jJmMhZwh6DPh6wHHgM2LNByEGSeHPP1Cba5LAojqyRTW"
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
