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
    "2KpLU8GxLYHMHoob7pLCukXd2vDzJt2QJWEnECB76tVcYzwUnrhEmF6JFPz32MoS7iTzBPKV1scf12SR8XMzbLT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ynXCvZP8qpdj941YfTCdiVJ1ZJ5AoTh6coPfpiBMuaGDoyv6Aoe2AoTFKyCgbDarGFwWs1nBgcP37oGv6vhZu7S",
  "key1": "5Bn3gF2uu6eva5ZvgUwii2wUwc4NULs8g2nMxze6N5ch1Dd6D3s5vELKRZTKMJ1NN9fDZvzeFjJ3x8y1qZJ7z27p",
  "key2": "4yf3nmN57s2Tnbcbe3JqnqqUavsjv7Ms6Ebw7abu1jykRMoHe5QRaHjtFCijfwe7zQttL8jwyjouaAFre6XBMrLo",
  "key3": "uagYkCbqwebzkrUXvWE1VPZ1RLikY8GNP7dsEsGZZHmgYJ9YKR23QrRfmYRZimaMwV5mofndFTb32g8siV5fiq2",
  "key4": "4PmKdLvDnkwHyG1iEiMtRMbNkEhccofnxYt8TzMsVkfyxt7jQNEdZusgvvMnBMfUXiBi4kDaMpDw7BPgeRkHPgoH",
  "key5": "3fhhFKAnjLtDe3ccz8UVt4ky56mVEREyq8DB9LqEvvRYUSN6PbfLYxpp7YcuVnQ6DU44V37fYPEXKkKcHgLpPPxJ",
  "key6": "3wEbFMVDXYNZECa8eH97vzxvDnNw2QonvAERXxqPJoTosbb6E9ThaxGPyd2y9g2YhqWKhDsmsScYnPeF3UB6nFGU",
  "key7": "31UyKdFSdLEtB1uJzcqmxzN5XGz2eX3pXbZtX9HrUq5cLNc8A33sKw9SGnUk2kQrxy2UezhkFnfA71JGM8fK1ikz",
  "key8": "3DYzRcQ7hvafKximtZdHqQzugcavf2UQkD5oNDWfzutMgDUWBPUM1Bs9YKWq63iaGdx1Sb8uB5uLzca9b6wWC3k8",
  "key9": "5gksU18bMEG6YXt6paozQK4E4uoVguvwwL3Lm4HxXnmMGzdCh9H3AAoQdi6P8HUe3j15m4r8ueitevLJSv3NU3di",
  "key10": "9xwkgaAAUvK9zpVi17Yvh9nRPitYP8EkhpEdMPdo5JNeoBZ7qxqtYaQPECrPwmsvxjL963WsRwruKYrBA3qtuzb",
  "key11": "2NNLHDKM91HAVvBynokE8apxvGgiHNRm85nXc3HkYPXW3dRyaRCv5SD2t5wiBe5nHhVuc3cmekK3KXPjP8SmZY9T",
  "key12": "nf7M9N7spBEzPZaa9A7dfETXEWi67aonm5BF9UWHpu4iigGHpJX4M6iLKyorGXKnZWmGVSF6eGtsZqhvZsmWRN3",
  "key13": "3BvrjEVSSazMcXS3cAmaiUtAUL36r68jTqpH7Uy4rb5kFzXEzG8XZ89uLrN5JjNaGiL8UYwXvvVoedeSRRYSXbt3",
  "key14": "KVhiYpZ9cE6T4iSxViok6KSg2o9icuR4qjsaLNKp6JEy8GH6ENoUNKSdRPCecGqrYLZqwnZG8NJwF3DrTSB8ExL",
  "key15": "2aQLNpJeSepAJohJAUXJ3xu7TcHYEnf7Qo7Dq4w4acA614ASREzFu4CtN7yLToE6o8rKBph9iNNkrdazg3GPh6zU",
  "key16": "4iLpvAiiE91cQUJRkjQkKfeJFabxW1YsF3BMucLukiEdrt7v5hi52o9i6jTamq4Ei7rYZyFsVgYWT4bSoSkchVC3",
  "key17": "3vfH6BQMwEHgX5f1LhJnL1NZHbrz7jxmCB2ySq4AdYTfagMXouY9DJ1x1ta2f3mS4KEmjZPbhgdDMQ1b13JnYjcR",
  "key18": "4rQsHfNP5AH2g9EsSgAGLk5Pj7jqvXvLGuoeB5mgXRMoe38diRRBmDSFyugjrn5YMU1raWPGWDVbNA7n6XFzvrHf",
  "key19": "5isJQ5dT5oziK37v1CHiYjZ63Cf8yyPXEAct26AiVoeWWNcL4q667JHwAss5gFAa3VKzFbNPDQdtQzdi8FV6QbW2",
  "key20": "3Cm5kJLT2Jg9aFf4gQ8Xtb3ZRy8Z8YLqxk6LkAnZ98Y6dNdHNRqXaEiA7WRiie38u82CXqC5bbzeCsChomyFJSA7",
  "key21": "4kbLgHDvzuWLxyNR325emYxZoqJeFyFQGHrMLMKCvoSFWXS7kMzzC6A9K8ZBYRvw9NSzDFRDoMbg7BNsXAYkEAmN",
  "key22": "4hq9tawojQUPfrSewjy8HX16HajvcL54bZMqKhSKXJ7gtBP6p7ef9mqxDXfhSz1W6zTsUDmFzL61A37uKvnLyiiv",
  "key23": "4mZYTzeNJdADsK3i5TsZcMhHCgRGRiW4JoyPWgbRVA47s2K2ej2ANyfJeQqjUjXu7XzdAQxAFPwFNXikVhF5hhcX",
  "key24": "34n7JBTFLjZsUdjU4N5K8JZ6j36ysdrFs5v49VwLZsSTqwqu85bdYDGzeVBSku7JR7vbdKEmxkGUcmwWWFgWgdtL",
  "key25": "5852SmhjzVZz6HAdiVjU3RQQT3zyxXgixS3L67ydHHtU8s3yPErmRV5hgwn15oqZC18YwW4PmK8kXsY2jr22HxSc",
  "key26": "3mQT6MeQbjzfceFjTFiUTiWxuvEUtgacA7UiDM84RuegrJhWoz2ZonyXMeSEDjxiyhckL2qVbmdLsSEtnRMmkSM2",
  "key27": "4wE4sHd3YYL2umKmBoywkUSUR5CibShFjbEKXKyKjt18MQw7pP6NT4JkmMUHsygLzzRZxV9CxxFAuWYXVoybGdfF",
  "key28": "4tQQSgeCJSuVbXhPotUFeNj6bSBhWh4i6uUK4kGpbHjo6TqZTxpFi5p3eY8erMHTo8XEJbU2Mckt6CL4T8x8LZYd",
  "key29": "59PtCUXVmMB1HDAsjH2eruRxHFFjfKvL3niW2P2QhZUtdVQCXJGMfHorBu4BbQR58Dd4E4C436QmT29Bvk9cDaoE",
  "key30": "3G5XXb7s9Z2qmuM4W3bePmTAQG13AAyajGgz768FyDscq4YvBX1oKY6mj9eYvmcM68iLUc4hmDhweSvuwVnQ1g3j",
  "key31": "65Umrtgz1PXCe5zpJcJUG4UKCQWiCF7oaUMagq1a9PnMEjhdV3hqm776eCdacJgbhr393praB3r2ociyjezRbTmF",
  "key32": "2X1UYHv9NUxGPXZP56GP1u8buPiBGrrWqnoqUmhVJLkaJeftQKCn4AEXBudEkPftt6DBkpy77NSehfjp2g7AU9J4",
  "key33": "E6RJAY5ag3XRU7HUg4UPXdw2CwV9RnAfy7CWSLQjdcarDW24grybYYs5th3SbEv5xge2xb2XJwiRr99SUFWSLJZ",
  "key34": "2RjQFh8fZwC138cSx3Xe11zGaJPLn6UeyjiuFtZSVrr662qboJPuMX4SnkyFFxbqm9qhGh93hePg7bv2Ja1kcrTH",
  "key35": "4VJWX3dUVN1usAxAWwuea49662vPESFH5h8dA7ieEscZccTwVDD9EodDPf1D8qTW6UQ3BrTfgwDTJxGGv8nsVzAj",
  "key36": "2jzz323kgRJxkqHp4juRMxJrjBZ4WdMkjaafvGFwjqURjYFxynvxZgNo7aHPEH7MgsPoqoDnrawCRUnczfwZcMa6",
  "key37": "3DibtXFDSv4hpLyUDfDHFJN6A3wwNH1QWbs9C8RZsVof6nQTh86PXEth675SK7hhJFwKBWqYRWcx4mPgNZjLwJ6a",
  "key38": "5kP2ZXdtJvP2ErSjoFJZoLqrVkbZJ4bGsFCaQaFc8YVyPPNqoP5meLChbzohMpdERWkaoyMHrJNjwKHbgSKEiEh4",
  "key39": "4T5mJ2uo1Shif7Gdy5ntzZXiwAJUPdaiwaS3Jny6vkC7YyrQ7jL7wzf6EfqKisJoXAeU1n6qRSoY5BcaR9ufojQS",
  "key40": "48zZCLeikWeCPcadhVyFpZrWykYEwkGS88TSY6kfeg37H7kC7HsganYA9r12NnVYywkUVpAajzNMQBniqMdD2rn5",
  "key41": "3KLRQGgSr5v2k9jFRQeugqxKadpa9aT3qV8QDaVbEKhi9CUX6MBa5rKmRBpyCMWYnKZE4yiJ7Du9AefMRVboiXs2",
  "key42": "YgYT2dUrzcDeWFkgAh2FGMFhATKu4dxA78QTkQ6kRGFRwYaNSqjJdBMFkySy5d31zmiMNgBGWLkhAYJhd1B8FNc",
  "key43": "4bG4xZTRELqqARHoGiS9TjtiA8T4Ps4GSxjUA8cJSckKV39fAksumk2jSMthzpBVmK2nKcoR1WBfGoFMPrmkMyoL",
  "key44": "YarKexe6WUDabRVvWa3rW19HwJGb7U5jLjc3Qm5CvAsPgBhy8cwDBmW8GT5a3Lr44Z7hF6f4oTPop4yQjKXpzyv",
  "key45": "2bbqgh1nVA1Lv3mRrDNbvc2CEwGJw5NNoDKbFDBnjew7iQZLU1EWUjP2jNwvHFCqKVum5ZuSunQuovuqdQhzo2Wq",
  "key46": "2NdrKpwxzJMhcUUNnYJbUnSYUZyY6ZXAkU9uitzicYiK7F2bSzQxxbQpMAW86gDRRrRSfRjWVGH2RFHYjVQo8sri",
  "key47": "3L1XFizWcDn2WL2kupthvXksrGgp4X5zUt7VCMkMUmUYbvvpMZRowHtyZ8bLzUwaRa21MWc8BJAMikTbtgf9R6cj",
  "key48": "2hTfq1JKkWka4EbTKmmur8KBXb9cgq7faV4JqUBcHswqs5Lu5YNPTCrq6NFdRczKN4XLBUMReFjgtVFnXM5LYooH"
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
