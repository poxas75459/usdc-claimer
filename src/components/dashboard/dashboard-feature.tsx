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
    "4xgadVgi2o2BqQffunbu9WaopEh8bHgvQxgCeuiVwra79sevNvX6Yu7U6RLtpc6C7xKcdve9r3b7zVdZfNFf2NvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3auvASEeGk37GF2RSWZbGxBhiciSnEPeGgbqQvV3FHd1nowoqmqXFNxEZ2uNqJJv9ETenUcA6PYgtoeKqgDgjAg2",
  "key1": "4phrPupqCb7h5smbYCFBxYjxVvp29BiUzHvFnXuSKjJgiQ7XbTJJarGi7rCVXk32y6c3x3NpbGbYHm6fkHbjVgVw",
  "key2": "4nH8FHfmzYtxnTFQ5nVRgVz22Z5JHEzXp7P3GUobq5EmvKkqtnHUGa2y3xc2FreB8cWRBs6xz82YVrwaqBB1c2a7",
  "key3": "4eo7xkQdh2qZ9XQptf9WqsLqkP2WWmRS7QoC289vAgWqViHwarZB89K416zE4Zp9Guc3Zyajt5THgxDSe8BhUyCB",
  "key4": "5E3S1mgnsSB8nS1kS2TGLaXcAow86gHU5vX5AeuL1ooJDX7zLwE1b9z7nwo9uyDztiY4CBePfHTjHHNSNPnPJUkg",
  "key5": "mJ7VRp96gKSRTWsUG7Zssz3Y3eQi46mDfySVFksMjtVVwRSQZEcnGVCtXWQvwSf13FjfEEWKGs5V5acKSXx8FhP",
  "key6": "67KPEQDGqAd7rCDLQXWjRDefKjRUJNH48DzF1a24SMdPofKThQN8P1rTV4sKT25d64MHMW3q3pSFmBR5PnndeFVV",
  "key7": "3acWTseRKZgkzXWw823eRh5afoBb3PUQFas6pbQUsP4pZ2j8GUHEqvNdDVaJeZXHze97CXwohSPtiSvnX83BS1V3",
  "key8": "4ZdpZizgtKRoroJJkKYAe4STntpeYC4Y6v55ngGEFU1HC9KqHojPexAPWGCSMjXrA28jsjehrfzyFcj7veAM6wTD",
  "key9": "4s3C7obWu1VBZPPYxzUmUpiZUypLaxmPsByLmxijHb5kntHpcM1bqpEpqUqYPRWhR7nPamRSVDWFt2pmdGF6iVkf",
  "key10": "4Bg9YZN8SN3aqD6jHEDHD3L3UmgLxrD6DBFXHA4AbNEqE3DmudH3AYk6gPfKRZ6xzxoUitAksr87AQk8KmCfF2yh",
  "key11": "2TdRYSKkefiu13g9NHGXWuvhNNjVchdpdemuUA83CuoXNGuh2VcnBoPAgotd2yzqQxYboHGe7c7so9jtKJZ4yXky",
  "key12": "2cRHnph1QVfLWX9cimRTKf2tmi1xyNtMNbkJ3iQGFLwyLnHXksGnnGu2S2KDRVzm269AKgHZSiYSpctqS9nK1EhZ",
  "key13": "3JVhv8EdGyS9WhERtUG3VLo9k1H7y95zMfyKfqVpNkTVftYnWZ96P3v5svfNYEx7uTq5Nazq9jDsBQqfZbpzGNqQ",
  "key14": "56M2EZSvxpwChoux1FxZoPj9ALLVdjMXqcqqJawCLRGQnfFGvBbFijN1GxQ7gVXMQ99eyruxBGPAfZmjTy5xJxYZ",
  "key15": "3TSM77Skgj7JnSjoqPn9davvmB8tAftd6Vv6hP8x7WEpvkqSe7ChXD87BtRoeC26SEMk91zZyqjFKFMYcDytdzBh",
  "key16": "46RXunSBnQAVPUW6P79HLXnzgbdfyBmbrA1FNgHjKJamaYEfQDEaGosUBh1Nveq4BQovW3TbaSokFpFCPo62DWe3",
  "key17": "3w1JRQK7LjWzConRnZAwmWuSo5pLr7PNb4KEjb7M6utQvotFd5CFSCJgAzeFfwK9vas1DXxKxjMRUyeaLAzAhLfX",
  "key18": "HPvQV8m2TiQci19LQyDNM9vJPM5PZd9VdE3B4aaaZ1ZXbk5c6BXA6ciFBXeoF9Zz5D4sZC7os8ycAcB9Rzo5Kf2",
  "key19": "58JCEpPbvQ94wYxFyCyf1q5v7gqvi3aGouKnezkWECTJLHmCixm1eXGtt9wJymPxQiz2ggLFo5M2vA9YMmcaRt5Q",
  "key20": "8RezzkRnaTq9a2pRW8qhkerwcCcYnyUMfw7Ejwy4KpYt1Ueg8bVoXkuf78MHVp15c6rRB6URTxWJt1AXoxusbiV",
  "key21": "jryntbQWSuqYZhzPvK4UtkaGyF8SCdAmQoVNMK4B3cbYDrqNKxFinA4AS97m1oXdU8XeBV7HSDXckeDhQ7tk4d6",
  "key22": "6581WQ7BoqAQD242C5KaGEYh8EkwV2zGK6fVLPvBTBtE5DTvv7aXZ6pysd1gFxfj4Un3f4iyEgx1qHfn6HP8ArgE",
  "key23": "ZNTjMa8iF1q45CfXcwx3k9fPLFSmpMQuksB6iAjEFfybSwvJMNuYuT1ZWd2P5usMQ2vtzTgq56MVEBF4GJGF7hg",
  "key24": "3wkx6ADSZh9pB9oz22pcufvESzjGqAtLSqh8PKoSyDmqetjBzFWa1ZTPPyWHFumVdSpeg5r9fRSsCu82A2er6mHj",
  "key25": "37hw4dG5sHfqMp1RqbzZ3nhrjASuL72ScCj7PinveJjdgkeSKcHPgpGpA3fW9DkmNqHfeW4kSC7kSZ1C2FKy91sV",
  "key26": "3fsUc74t2fDHcKXnRgobkWXr8iHdc29vGL6hdZB7SjE5YKntDDhkoiadihkPvXzAr2xPFuyS3VPngY6PzjXC4rJM",
  "key27": "5PeW7JDBf983sFdCyjxwmyKCMeoxRQd6ZMySvjF5LdHyMvQfURhbp5mjDtWZ14J4c6CNv2uxzqpszFmP7hYnuKYW",
  "key28": "31CNn2SBknmLVpk7xBZwdkteWJToVUn4SEfGozyr9ggjDb5ghKE1eotrve4TR8KwwVevPiS3HVKmtLNJfpdHdrqb",
  "key29": "3dyCDEYhkzeLdPtjvY65vxpVGCePKagvLMDkYbA7FiKixceBJNqN59KjWtXaFpmFzppaPwMmVDq4hJ4kb3KAxwe9",
  "key30": "3ZYrhhWchnzAvwUHFb8Jjo7UReZWJ9hmUzqrqwK3KYfbhjz6otVMKf2cpazNFD8yZW4sbinkTcHtqejc2ZLzz3hp",
  "key31": "4Z4NpBMsLMtV4Y92cQ2FstAoZ3TF8cTGLHNXNenn23adSXGXYTZk8r3q5vxzUXx9WMfVKM4mg5xEe26WcEqySN1m",
  "key32": "49zsrTUC4giUWTDzzPad8zJmZ63noXzMWBe9Z9KfA3xFbMuweb453Eze55JncWMEStGYBePgvtsBtRmgTSEEoaht",
  "key33": "5oSbbLBLpADn4LvyckePCeUGSheHdfAef8ivf819jAu5HMBkGCpwABCdhGXykP6Bvd8EwLExyUxQmkcwuDNBLNGB",
  "key34": "3w3skCrp887jj3Gj4fqnV8LkEFctbyEzPnVKmPdeo3YoExsVJsYZU58Hgf7RXkD9avXZYuym3iMf7RnfLRSjAYcW",
  "key35": "2XJT9VGGjoLVVcZcSESeW2JtS6PyPE9wv4qYpNwz9EzoWBjGHn3oShRujNedkngodTiYsatBhhoMhi3LWgCcriaz",
  "key36": "2YRhLm6TrDAeYtBcudMhYrD3gUwi4xwWxE3HrvkVUX5RsHoWjQGrgRVn28cZ3PDnPvhvvXD95A7woKdvYVDtxW7Q",
  "key37": "3aCkebpMyiibQnpXqTAnWhdk48yz8kCHHBrMXCkvyxEUDEngJVjGRreiF8nRYRDTEN7MDZgiMDhFFeCRjhy99z4c",
  "key38": "4JisURVYwxdGH4zZgiFf2F3f4K7qVhoSZqMm6mhMuzjAuexKFEcK7thG2rfTJBp3nsgbvVeHtmy2jtzoY8RdQjcy",
  "key39": "DQordEeag3kwtLLEn7aHdZkHfBmGioxAr9ETX5qQe6BZDmoPPX4w2BsmcgRn63RpMZ5qTzEkS2U7jo4vaB64sBH",
  "key40": "de5ucDYH3rND43pPsh9sAM7Li4Jisbxzubp7K1SE96q9oyBvmWqt23KBR4e456vTzcHLibRQpgt67mmEBsFmDU7",
  "key41": "22P8QiHyDaXKAq7CmppbkWE9R7VMYaD5NoepPJPMCqiB3PBAx6PdaQfyh2nsJMU6NsQ3HKBNHtPFGcNEwThGntij",
  "key42": "B8JHekWFbHAoEeUZ4EMQaY3gJALyb9fqU9LNhHgp96wfrzjdDpbiVBF5N7j9g7hx7WJmFrTY3rMe11ShhWpsyvD"
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
