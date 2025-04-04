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
    "3s8MCqtG16hAuETnLANA8QvUDkDJ98taU79F9wJMYpsuSbnpZAprju5cbtFqSDw56EXjsBKmVvwVgjNpsoyBBCDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQ9k1K2Pg97dMG2Kd8FsUUVVtyywS9MNsDawp4sguvtEGXgEoqX4CxyRuAfPbDWcrQpBVq9bmvL8FUd1wbf5bg7",
  "key1": "5WsFv5ELShD1HfLbTnseEfjqxC6MX91AZianRTaUYsh6AiHCNSnceL5ajQHMwctqNsjXiqyCo7XWuVksGMQQp2hL",
  "key2": "2sZ9enYyyNGuue9XNb8d33dyUhwka1t8vwMS5JWst7V1fD4CgUbd7EUNnfm7JJrnMV5MyWrUGPTyhvByPSsCKDdY",
  "key3": "3gxai4JfoD7sWfF7BCuAFYKhvMQHUqfPtLSsWuDvDg5iFEHaDPYsu2r2egNpbN1Pja2WdT3umHQftHzBC9pJAKR9",
  "key4": "27uwMNqYy1QqaeCrzL5ejc4tgNK94S8XGRGiq2U2BTn7JcMXPuti9P6eUzBF4jXgQQD3YQCWqhpY7ZGR2QnhCeq5",
  "key5": "48pXfK3jBWb1RseogoWHaZQgRpSH3VFSQrx3eMGNCGtF2YfgzCyN9zzagXtiKffDNY8f7P9kdCrD35cvquhYVmbq",
  "key6": "2ZoXXdxJWaVCDKmQCaKQ69YrS6fgVmm18dm9Ay8Q4ZNSPvECxyR8ahfkSrz9T75MwT6FgSweA1j9Kgx3k3TwXwFD",
  "key7": "2hMFsAx9ueNFD1vDG1ocHFSi1YUw5gnmtrs9jv3w4w79E7EwhmaNd9cQz3hyP3uctz4yi86QyH6hLqv8k6jhTzzw",
  "key8": "4SBsaW4cGvWKRugjx8eL5yWJsTEvWGNu5XVvEwPCPQiNMM93ztg3aGEPyhi5bPqsY5rfe45cMCVCeXGoJWRJibQq",
  "key9": "58Wf9w8CxmRruAwHGBvVo66oZd74xM3yCvmQmznbrrBsCZojRCVTaQcBCRzSANjwcA6ApE3aoQD2VgfxR9xwypBE",
  "key10": "3a3ZxW41r7Ywwiu2XQ158STV1u42igR13bNNBEeMXs9SrqTiBp9ur3314VT33rAMceuEvc6BgDS7uXp7gxQfWYq4",
  "key11": "3GbJohjNm6uFe11Dvn2BsAJdBHDFQeaZbTbvu78JCojsceEnT7pJyT8gktymHjoqB5vkaG7sRDyCShZNhLdR4gJy",
  "key12": "3nRU4feQiaiYj3tetPXKtw7e2sMS9SqDZiJjynMmuMchXEnKFuyr3UGgVDWmhDr5CkTkmst1wSsKhy2Ame4nvs1t",
  "key13": "41nG4kaJwMegmmdoyNCui7m8FYY8BBoNhXm6SxK8ekPJVTFT8AEfGc9PhbTyMXLEwzQ9YSGPRoVTH8KKost4FSwi",
  "key14": "4QrJ979ggmxJc5JQEgsPw4TNRSBaYPa2sD5a73JZ39L4ktug1S6QrtGwffmTLQrTUcv1xvVADPyzW3p12XkcZvoU",
  "key15": "5mdcR4FWQ79pGobTThd9szMAwqugMPiZS6icQAnP8vKKGQdWNzQNBD81PRuWbXqSRN5FariKMzKwNrT5AKyycvF",
  "key16": "2EqbX9JcQXxdzxViFGba22Cd3GvAk6WQXm8T9DCCavz9BT5smjwaVinpUTVRiEHJU3VuQ1T1dZq7gsB2e9tSis6h",
  "key17": "2h9mTyEbqgPajxgMG79Cvi8gQM7UYxiikFLux6Wv9BKbUmpsPxsrpAWY3Mg6H1LAYUh9pdriJB937ztp489bKmA9",
  "key18": "jcaTZ9u8HXzSCZgUsUshpKfAdwXnjj9d9hLLc6T3HdHkdyuiAwXaNemzcgy4RDJB8D2JjRdTLiaL77EuiCkZNhx",
  "key19": "4sJsHNG1GkuV6vTRsFvAiFAFTLfutwjD5Hat6BdzLkuwUpbYCoXnBfNtmwMYEQNVQUaH6BUmgj6oxWQ7p3bGWbcF",
  "key20": "nWCegTbgiGJgGbrYoMwc2isF3ZJ3EQznf9k6SzyLtMB5s7ANCWXTsYe9Fk8bYeZWHh6MhXnRaX3LZyFjTf6qnfR",
  "key21": "4FvxUQHRESQ25njhbQre3H8fhm8jBH8XukBwLJvmxK3NdKTRd6sQZJ7sMWqEDQrsJjMZVNNzfePJj3fS4KwBKBim",
  "key22": "crbRehipF34ArAmcnrznFWAqSdtksfC5tK9G1xALrXPQd7zScwGiti5gdGeNvZRygFkDEZLyR9dZrsT5TSAZHPG",
  "key23": "VsLj2o6An6PTaUyDTs13bBdWVXU4AyAtKZqMU95b6PkLBdZq15c5UXYfGx3nsduwJ6KBgZ9WPJn7E57pU9aknWs",
  "key24": "EU8BvZepkBHUChHz8tumBjuoUqCsu9JXmSqdNNa4o3KEDFPec4TJiWH43T6wwk2Vw4HmJqWdHk2cHq2MFA8i4ct",
  "key25": "4WWpHyuFMEeLoqXCs5tEVK2e2dL4THCpti9Wb68dADPsSF7sj4xWhckxSzevpAsJhFbKns2B3fw92rgCzknfYRKY",
  "key26": "5gBLrfyS152GpVg9khJY8EiVhdyFXJdoWhSNutzz48aMCV7jV6rL79W9cnhgVn1rg6gD37sALbuRyAv4cRR4sfsT",
  "key27": "5kykJZAGjUzNcfSM3T9V4V6J6vGn4Wu9tMuztRdUMccMJXNbzRjeyD7nnyaHa1KtjkWZugEo3JeJYCH5A4pcfyRB",
  "key28": "2CYUufPD4m5e4PsUB9Ymwko2e22iDExHkt5nTVDBX4x4WgEWzXrYdP7C1ntdz57XTqofir1veAkvaWVijo7Zb54q",
  "key29": "4zUo3KM7VEwSJD5oNqHPZ3QQJS6ZUVyzwrmAzwszMbGeZkAoGdui8ibVRJMvNyEimTHptTtGjp2SttHg7n2KWsGc",
  "key30": "3nymTogbzEqUKmZAnogrCiS5yT27wgw5Wpwb7ZmDoCQKAh3c1sBLGQzvDW2S3Jjjz86kkTVML2KrBnpgbDKzBZFT",
  "key31": "5pvCKUyiU8DBYBTJGg9VjhEVHyf6ABmuUWEtdrvvbfrRmcpJNTvGbnTRX5viHRGuKBEYAnEaVKJKMrQXFRU1wPy9",
  "key32": "2RY4nXaYJojfYK7muUoPuSYfGsAFkczbYWvXEzqxSmoJVhpShayX164g38g9V3FvtHihAAPVHCA7p9WdcTonqFNF",
  "key33": "3GGuonRnA5iTWrmyV3RKV67Np9YAiT9Wvx8oPuGYzrQ9YtQ2zTaAbNA5EkxoqyNVmx89h6ec1Nm4WZ9UJsYE3Xu3",
  "key34": "5cg64TLdqiCNVUKePQoAqRJD9BHwvpeYofXbuVi5ppFKLF3LXW5geYWLsVCCaX5iBkMG4dv9rmEjBs5u1dgusjt3",
  "key35": "3XZgs1wvNyUKh6Zj23PLUUcWTLXDs9Z7nAutAoBZfie2UzhR1bpEQao1tGNpJTGHpExKKzyB6vandnKEm3kqEgcq",
  "key36": "5WNWEjoC88k4Svm5rtqFp7DN1fBMBUPZY3nvh6kYPpTMQgvtUAXdBcZD6R3zBwszkxmQq57VMSwUoHnSjM45rDwC",
  "key37": "2pu9TFS6LC4KerEu6NUrzMA4w7FnrHTfHQ7vpvdCTanWNuNqrMsWVAsoJNFEe6AjfMuk4r9AMeGAThwh8WCebvE6",
  "key38": "2ohVZh7Ebj81vPDZDgd11YN9mmuTkJSGBK7rWfYLu2yp5VH5M96UKxVspsEVQioC1qsikLJF5rZ9AzQw8Uz7pSdZ",
  "key39": "3tpQxSG4GN49gev75kvyCm7K6QhHBQYMDdWABkyuwMnNNK2mrcZXnnuEgiSVqtC8dqfHcjH3ZnHhoZmyJxeFRvGb",
  "key40": "3KcaUKmu3dgwho4seooURtHzrEcNF7RZNGCxyyV7WYeJQPreySuXXmghXuM5Ft4i8ZbtkYg4cbkcCXCfz5qENjWn"
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
