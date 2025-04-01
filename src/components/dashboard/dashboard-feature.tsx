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
    "5eY74kV3Ex89TSpQWc4RmXUmeXT9qmM8KMWYGPH2YW8U8AgnmG55z69T8ENrSzBQTFawAcShZTEh8imnJ9UEARHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2458jq6njAb1ccufZUrfQd4Kgr96ytVRs4dNHFa2w7e9XjkHVqodjYEdQt3CVUN8ET3iapipFDggGo6DxbLqVn42",
  "key1": "ZDfA5W622G7b37DwTCtjiaqG4b44XdXMFFCTRrto7Yyvw3RE4o8JJRUkoSPg15nHF4MVJ4tUxku19PbEn3arUDe",
  "key2": "3eJgz6gEpKermrutYkQQSbUBEeVAcxgUAZbaP6FoVAR6h9YWGg43urMNk6bZeYTBYsLiCBYeQ1M66NSotD4DtbWi",
  "key3": "5b9mXvojvAL8cfekqoZZRuzgZnzkUWW8AddwNT3jrqHKmxZ8z5qe7Nm2H4ApJsW6VRbum1ovqPn11Kqq5PykFE2i",
  "key4": "4jxuMNWCjyhKJN9jsM7jCm3R99yXEcLWpzQRwz6QG9wY7Vp57SGKTRBuW72ZgLGX92fs7o1iVAgTYS76n3nvnN5y",
  "key5": "HV6SkcP3A4poLSx3APHLoNkPKQTTv34wnPHrg2GgWcT5notyntBCNdkBAgeon2RwRAtnDxewUnkoX55ViVmjeXX",
  "key6": "5GR9t1p1PdTD24Y7dpPp6txHCcb24MksVPzLSnWuXUhy4au6Et4srxAUmingPuWUdLg37mBJAwagix1KM85LFW8s",
  "key7": "2RfUauHsHoih1YFo7unJCDcxdiUDzqVF4XvZ2HxnLLXizpo3MZJeQVNDTBQ9HZC53qCnAk9AuqveefUviXHWcbL",
  "key8": "5QBZufwMuAqjMxkRQGuhqKpAuTMQSvDKspz4ucDcvFyxJoroq6PTTpecmdi9ATFeqCsVc9sepxcwBzmARKQihJ2M",
  "key9": "5ai13DUvabKV3hqjEQgJ4AtiPWmVNX5cSAPW8Wpio7L8ktuXdeLntdZXM8i2SaZ5MQq5D2mMXaPTpfZfcpFy69SK",
  "key10": "1AUSrJxynEgtxuTBPWFvem5QkqGrqL3kMeHttKrMAt51DU72ciqWYVy2HGEVA8vP9igEaeLK9CJes5RCs8TkrEz",
  "key11": "5Ma9JJmnHzzmLK3zPuwPBJRYj23Pz3L3ybZtTZPC7Yg3eG2zuFhySWzVK9E25tThMv7uP99LnWCM6bms3b1e6oog",
  "key12": "4kBj5dCwMwp5dTgXcKiuU8DyrnotHfK2zuQDyCksMS5T15eUvPRHPt4jRemBdVaduGxXXjQw4HjgpYnJ2S8AtKpb",
  "key13": "38aPZFxvaqQ23fQCPsf2pn5JyGe4jYmLZGqZYWKqSDCkEqxzs2Fd5xCp1CobfgGZ15rat7vCTH3MW7js4dqg8KuD",
  "key14": "Kn3gDiKMZKYaWwSDQPiEzmn1cFghnNz2mTzCBhDTC633jfUmYXAYcqBYqJKqXwkBa5D1kGeHNZBsi66RH2wfvHp",
  "key15": "5hfriXvTgfLLnYaBHfZSyc3wmviQwrZwycoM8oyCTQgwxHK2JyvXCvgFzDmv4gwWNvDM9arRSjVMS6dpL6MYUtbr",
  "key16": "4yK4yG8SFngQJNX3p7Go2mDKCHtC7qciJFoaW7eZE9cbXQwHfnNkdBBLooWAUkybg9RoSZaBLbJeKStcFtWE96jY",
  "key17": "qGU6og54LMEiiJQoF8cWjyDj7GQApGN9ph16vPjzLKiQTdM5aum3YjGABMcvwWhcS3qfBvh7iZVD6msxMdpQ72p",
  "key18": "2Tuy1NqEZoDSUYY6kCoA8jGHnhy7PhepWPqzEUD7E9nhCAHEcXoJgixo6E8rg1k6iKdHVkt4gDozMvdVAdhMmFJe",
  "key19": "3U4r5ougXL1sUm1gzoESRu6x7dZLvfRqnH3zbA2rgATBm3ZAhJGpyFhD5PzZEm3vyxVNssXdxeem97cdnyEV1DWQ",
  "key20": "2PCJZPZzzoSXBUdkoYciGZ2BeCrSKxmiA5gkWfu76WTqsXdYXfjbHeRaxh9q1AkJ2wDLyQEB9XHMwwZtDtmPAj5d",
  "key21": "5ozbj3rUSuffohSYvLZqrJRDGUVPUWfQcykmj3b7JLNnAHoWPkSZ4J5FfCev7351CbyjjpFD23jJ1vVFgz8jKdGF",
  "key22": "37WDHEoLVoYRjoqUDA137Xk8JgE24AEXEk6SNjKtjbcgd8LiWFBTqHnSHXQ3YPS1dEQcwTGh2ck4yZnjhxPPW972",
  "key23": "61kZFAtHBK481rUkCuacpVbC34AmvK4DTQFKCdxzuzaPQhuVGTaX4Rq6ig1Xxae9VBEspqREM4oG5mCDATTXUptq",
  "key24": "3XbZDpzYURyjJbx9B1TdTXrASmQkJ4b8UNrAPm9A5CbjYWhjd5wph78oHgKZDvQDorVzSXpRwjxi3JKytXcQEA75",
  "key25": "54J1VBFvYeUM66ovbrGxZdLHpeZioCedfGSFf1SFVTWvui1t1WGTpxFsdt4nnsoLKzEPqfHT81e7j4UGKFVMiuxa",
  "key26": "2iTWxmHZUZnoVNHu3cY5ww5CQQWvPjLEidnAffefSdHFJTVxFWMVDZgPx9uVQtvnUyvHLZkmgDzWYaQ1Bi77RQuK",
  "key27": "2NffaRR6r2fxjWKeYCRjC2T3hVwhv3pMwHA7gMkdHJms7grLWuZjfrmtdREHd8Xzbc6PJLJwQoDGZC7bBfYk3s6D",
  "key28": "2qpdekuBdWAfsiyCCtLQmSQYeUN7NbGkHbBruFRBDaUt5Co7JKpeZ5ffN1MJY6FHgvr2UYhXmhVHYa7EPBnoN2iK",
  "key29": "3uU77bSvqyuTNBPbsWym1EtcG3p8ZzD1LuBEvY3VoY6AizZPkGbJhpBLrygbo3kQnJsJwpgp8j3iD6jDwwmEmVim",
  "key30": "nErfj5R257UrUwjUWqNTNAmAPmaHABASvvXh3FvWzW7hpuRzqQiH4MseQk7uDbk6rEKa76tKGsjzr6mTGkKMosK",
  "key31": "2UxyP89aRyh9SZ6ZicTS3G6gaiqn8YskqWgxq54suJhXvLiLCJ8cdcRDNuAdhPmmZoJqr5oUX8BT2qCyQyBGqoRo",
  "key32": "4Fff4FyTUb8JsVMu91Y5nsQFizQdmfwEwKaEcGbD7qmYszRaNLzhNctrRLeAwcMKdYksz7cHjhZ67e5WgY9CjXyo",
  "key33": "FJisT544zB1uDMUzUrG1vmpXEXiBPQ9HLTjj9vdYbSBVnT6y1XewGRypkyRTqkZ2jreWunWqSJDnQdnjymAJbbd",
  "key34": "2TdxURZ133nKFLHd4wminvydNiuk4fZFQSAtbXWakhFrvJov9qnh6n9ZVvdM1HDnDiG9zn32yKWMBEHNBb8cbunQ",
  "key35": "2Zvi3ABFSGijAzDKWAyv9CWYYog62BS1Ee8BbxJcE4FSYbdUwyaPgaDBmeUZJ62BZAddz7uFtgJjNzkGPqYTGP1D",
  "key36": "MEGm8DZxaWAUVRAykZHybm83mFkz8Sd9Ts3ac7mXjWVt8tfe5G4rMyiABax7AwnyMspEawZVKfiuTucijLQnLB9",
  "key37": "3RZ1CGDHGomHxxXwKX1gP4mLXfxCdSD5KjGc3hSfKBDU9vkyfxkGUyBq6ogqaVi6GrcYBS7ujQLSDXvhULgFyRcp",
  "key38": "5V38hCXbgRfJJCdngHdqBn7Df5ikaMDeDXFrSeX57W3Ygbpe5WEo511f8c3ouyFp8HihJQWf81EEea4zgsgvg9F7"
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
