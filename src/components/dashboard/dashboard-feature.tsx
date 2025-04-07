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
    "5Ls7QJDF4fDEPC7a6S7LotpDnqxuoAgvfE8Nfrj3kvuQPzvgJBNPm92GBYpgZYFUd5UPswdBB1vTLBsq2BhE5teD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fKqSKbBos8r7XogXoKVNwijT2J36N9TkeiC97XdsVKgAjyLMm1y7FZTGaZh2ZsbXFaeLuHyy2T3zkaG2RBo64rC",
  "key1": "66hHf492eE9XULffAvyUjtjc3jzjkhDxNk54sHfcHdWRLgdWenUHiKEfrzPUw424QtYUH8d5FxDhTEbjCDJiwvDB",
  "key2": "Guhr4NUBsXLkeGxRfKY22Ehe9SbeSKCpZ2j8Q6DeUvVdbFXe3BaWNPTNxuFgFwM3U5QVocDiHCfzEJdafpJoaB8",
  "key3": "6dQBKuVLMGbmNHktaYWWsU1TWDyqFESd3dEqtc7ifwbG3ugQpLNKx3dsRyLqzZkepbibKRp77weK19uHZ6yP2ZN",
  "key4": "5bqMAB5fXPPw7CWQuvt8W217xY5QNxQsZzBUDnNQAFXGcuNJVPyun4PmgXF5om4sovbLtKWqg7Luv3vitGHfNq6m",
  "key5": "2LRCKftB9AFsym64dHpXy94aworD6tPiterwfKgS2JVR39owQu3kPD4y81myySqvGGC2K5Ugk7EQqPty8WfyNaxg",
  "key6": "52D66DLqwNjJg7oxKp9Qfyve9i9HeRZFjLt57MdWz5gCWH1dzmNgTbLu8rDQMk8tKAC7NPvtUXz5S8JLMVE6d2EC",
  "key7": "gvoWmUmM25hj3o53QQxqaymn7r9MgWSSRSbi6tjnhJoAdLqG88bPt5e89YDTsLdpHJfMizfCnXRdrbYeBgajy93",
  "key8": "5LiQJkeXrgew8gGy8HYUTygTuwniUu3pYi9gb1khKeBEKxDg9eJq7wQ9gbeHhe9n1syAkaLui4NJ5ZpVRcR8cbZG",
  "key9": "5TimntyG4dGjVzJGKWPurqqFY4bQXRCcZ7C4tnGvtraUmNe9iv9pYyU4ZDZQHGSycJRvLDcHFHsje5grC3KRKoz6",
  "key10": "5JCST2Byx23aEqAn1s4RiDSEBMKzJgEnykkSvjShWN1euU7ERQxoksR4BP9xopgAhZkvxQT9pxbziAJYfpw6cL9R",
  "key11": "ztCD27NBQSgCBHBn4PfnygqWwHAhftGTqkSmmxwvGGkQTwLKwLwsCP2MzfXA9YkrFZfEN9XxHtZrUVYde1xzEHw",
  "key12": "sEMJLUZ1cQqfohxbbhziPm5T4fVa8h2eTMb7LLmRmdNv6ofug28K1jdStQpPSkkfeiHazLCMpvgsNMKVzq8iY93",
  "key13": "zoEm7CvnR1H56CADr1f68dASKnp24AYRJCoL4fjkyeBfbhEHqE3ZgCQJzk6gvZbce67D36wqLQXB2uDJ4StEnU1",
  "key14": "4aczqrFLUHmgFREUnPxq42edu9yKM4V2VniXghkLatrvzypBeWeBLeBF47RxM14eEWaQej5ZoUcNZGucVhnjjz9B",
  "key15": "DBNQ9DCUgRCX9YhRQhADXWVTGdfP9X1CvfNMV8kutpi1jxRSesh4zV2umd4M6ody2SyWHmwCC6NQnB7MhGzsSWm",
  "key16": "3nNpP7zcPQ2Ccesp7oyV5tV5WfaBsXbNAUMNpA5XJb1bfHqPHK94wc4B2TgLmw8gLCbAZ8DL6keYdtgTK2cNBVQ3",
  "key17": "2b4Y3FoXKDX7AQJZ2GpSGPTisY9RBUnjX5kF11oZqZo8o9L4r1ocPyRa4XSnRauTYexM2XC8FBvSg4AieozsbL8n",
  "key18": "oHHAnYHNcDiRAwTMWkNFFCPHz2VsskH2VqFndcKg2JoGvhDxVK2xjneVR2zdGSMSFrp5uxE7HvHMpzCntrw3U7W",
  "key19": "qu3u3iAtUPshpzebxARuTkVAe4GYixpsMNnno9K6LStwiyzLMQM6SbNFsQuf3wmrQC47YU6GEvPfVhpnFA755jH",
  "key20": "qzeq9vZmDkGjq1zHchvbHsLgYNEymLHvg5x58PR41bP4cEtn2GjwquXKBcEcj5SPXCRzQPtCZPxoZFsc1i1jmMz",
  "key21": "4QH7isTDMv87SGKP8tFcucondbG8Y2kqjicKKunQuF8XphTHiMTbGM3ZepDzHXURXxuEK36LEkTbQJYshwRSB7gG",
  "key22": "5bTMBgHNoMFXdpsvPidjihR8fFYqg4oNQvG1VHFSTw3PwCG9eW2dMWMaBA7F8RCSA8nVHa1qJfLPtcy6jSYwyVV7",
  "key23": "4PyopWxgq9ocnNc1JVUwemqViyxp1tLLNtk7Ac9sNgiVR4GwM3gy7ibvBvbJymgkCbM7YSMLyMiFa9j33Zctb7bM",
  "key24": "2wMKDU46zVSywyQi9cH7NCiPphQPp3zEta3W5qKQ2J4EZXX94qrABRkWJbTKEtHTRayNxdr8PAMar6FYFWxuiKNv",
  "key25": "8V1jM3p8RxZidiSdo5ZbWkeTE4nMqEXqf7G4DVeK5ssiS6QMv6jWEiQMhTipJfMZv8teo5CpQrp7ZjqavCReJmJ",
  "key26": "3a491vKgngUWMkyPQWPbNwLu2Bn16sDdaSfYZUPiCX5stxLUEYGLV1X48K8T6Dpn5HkvREu95kruDrRxjnHruHB",
  "key27": "5ioGi3JLAZmGprzm4FGtz8dRLAEkiecAk3hfeg4nMHio33Lt91GrfF6DUkR3iUVQYwibGiCM37yk7TZKKcUPkTDN",
  "key28": "8a3JDh3s3iYQybHLLLKQEcu5KzYGDtiZcbfpiDQLnxmZ6vntfc1BDLQNYhGpMJHKPnEK1QzHZ9JfFycM6JzYzbW",
  "key29": "2TRNDB62UJ3wRLBWwJM3yFqKRdoJSLuVdyoDrTyDqMknKKmYUAUW6bsTtsqLR6854jJuR1Sp3t62BEgf5LNcjgCT",
  "key30": "2ikP3kt8zn1nVUNH5ZNwos1PpJR1rXx7NGwj5ZnJyQcwoddY4eLNp3gpaNnBkMUcnhsCdQvP6AwEazJ6cY1NbueD",
  "key31": "5FeuvUxViVmDhXfPNujmpAhe2VT829tJfecGRyf5KLwMDmAu8Ld96fHV4sQ2ajGL3M4HRLUgS93ErAcbK3jTS8QQ",
  "key32": "ca1ts8wyKWndsbEHfeF5hU6a5E4QfvJfH3iR7fR1eyBNJzCsFedi7yhPGHVpenqaHpMdvaz2jnuSYN9rnXjHCtj",
  "key33": "5EfP1teA24F3poR5Xo5yPSVzV8PAnWgPxiJiLzwVQX221VkATEoDXAGhEFUdRbLczTKYAoDwSxi1E1EAhiQ6Pxo8",
  "key34": "5pXji5tDPcqT9vk96YMCuyzVnnQT1YgVsC6BXJk2JmqLnWkrgwLXoVh2iusqCr3QvxHTmvSR7Ln1k49of95X7nzS",
  "key35": "5Wsn6pDGKcZ54h1QkTfNPCkSEAMoC8e3Jm5nkdVnU7HcVJvoJqZVdt7WYbeQJ7of6gT8szqoK49ciYMUk5dMc7mp",
  "key36": "KxFWcSkpmw9VjVmJhD2Sz4cQwSNDHy1GN3Te4tHbjrwdXAFoHezVQCd89sdm4hxq9P4LHNknZmaP7RABKfVRZTD",
  "key37": "4sTfS7tjc5wHcHEJGA9M4LeMTcC3yuuyS1n2s8G5ES8B5oTsz8dFsU95pHCiLjjKv1YhJmhSGZt3ZrACUCmNKgBR",
  "key38": "4yAHA6f7apmXkZpjKyx21xA1SJ5QhtA9na1qFVM3oz83yT6nrbB52bWuaw5JPJeaJp9jsh33FCnYYKWzx4RsgAEs",
  "key39": "2Fy49J66H1fwRafLZQew9w3YdhYYoH2mBFgQJF7irjUmHiUWWpMNwpjWLKEubWnPZvGwJP1JzEetPTi5s8LYM1xV",
  "key40": "26JxBA7ZnwQ8A3aZNV7CQxa5dvCyUEXKDuZZCu2KFVf3NKWMwyg8xC9Z3RjZ2CbbG3pJJtj7kJBG6vLU4jdRQRoJ"
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
