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
    "4nJkgeaqT7GfUAEXgcFmJx1pi9FEM4BDPBoTzhBGVogwKcEKMZazaLaT411b4x3cGQpao24iHMuCRthBfEHBi6EL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "394wS5q4mpZ64zLJAXtKq4ytcyjSUZoJJk9Do5LG2hk7Fd3xbfEGYZ6xGPcPrGotinJWtcZhLMzGLRdudEadXstG",
  "key1": "3A1ap4uLVNKDpGESssKACVUTuPFa6BKL7rmUdP2McB1jEqsszi8AaVeNwu5xx192NwdrrXX8t779sbLBDB2T6Qbb",
  "key2": "3Z5RTKucAxyoHE73Y2Bg4uUv6pHsK2KMPLgFMH8w97t8fUFbKeeAC33Y8WS1K4cryswnF7mjTqvdKyTLKsy6sPG1",
  "key3": "5gUfWo9jQcWKeGgvz2EEJGEfW9V7FTYLz7NCsfAL2j8UXrrM35Yhu2KDd4LdKmVo972ewbrLx6YpzMKTZNpqDMA4",
  "key4": "24m7g7MxytHaD3VHnxhWMrpQMUzTueQNpGQttUtPVHN9Vm6r2HsdvukfhBaqRDeo9Z5jYaAduhTEi6CqGDdMie8i",
  "key5": "4q1HuW3NUDxs44mCemsQigVoDxWdZmvCpwATWipKrwD2g5rqGgDXTKQeRbTmfhd7e2VBdvRmmUYxpm84twUKt78D",
  "key6": "65Yi4m3vEdXpwsoNVm2mzfQYxTsDVn8zxygn7jxC6MYTZajVX7tJzBKeymPTZsaMELJWgd2PfMoEESuMkyS8H5xN",
  "key7": "5tJkgzGbr11VHwc49fESrurXhiz3nM7gBAxqCR1XFGL9QYoD8ELZnJxXUFJTAFC7YXVVWhykmKFyUTu4DUZPQ1JK",
  "key8": "ZNGiZCcgZqf3czgdJZ14BEfkzJBxEsDYcew1aAY4khGbVREJuYvtnfAmjd3cr3R3257vBdph4HjVu2vSD5Svpdd",
  "key9": "jVmCfwYwmKzjnoN8ifdDi6gGQgYpgpXyW2a38PS5rV157yf6iqXW9WADkGP63ykY9wWjyXc3gxz5JqnENrJA8Rz",
  "key10": "2tz7rs5iyu2hi9YyNM1LKTFFwMzpMSXnkdXoEY3xrMpkSXpUNab794jimLGjaDhJEQeYLEi2c6pWBR27C6XhAMpn",
  "key11": "3ZWa8fxaX99vNUEFcpp44znM6S6zKiJwitf9DC1DGoPXgW2deMfPXgvWwfKoHi53z9FjwStbgF3F6oyW3mFXvVTX",
  "key12": "3gBV4yUE6vU9oLgXCegkFfb4A75wLf5gN7MbNQ99iFKCD1ByBVfEXHn5Fb3vHJfPxsHnCzG5LtXMhMJw8tcJExUZ",
  "key13": "cDDAsKqiw4dLmD6QNoV2VHpcbfLFm7GVTgLiyKWUu261dtYsA7PSVei7nAQZupDANJo1qCNnQFo87wqS8cUXHfn",
  "key14": "5x28hTxAkp6EwD2oiVyok5XJbfi6WmXHFURvBwP7D9tYX6g9XjvLN4i3THFBXrVGxwrAKQAjekXqVpZaoMVC1siE",
  "key15": "35YMwkM7Y6WA1Pj8pgNgjEM5F4oyy4sYVMTEVLAhBQQgioYMNNcWfum72ydKybsLkrYnHMyv5LpyKrYmCrMxJ4fy",
  "key16": "41XWV71TNbKN2Dph3qUsL4brVmCSQ42eWUbXog2hocfc8N1EDW5Wwp1mftgGQX2ZYkD7sesY7qSj1U9SWbpEvr6K",
  "key17": "2LQAoZS7uti7sajjWpxx8jVWLdkqqSMhd8ASH8GzWJivLRaPmjBugyLQw3yZjiv7UxrnV4UJioXgUgZyLRfgtA1",
  "key18": "p9VG95vMBQBtDJTeVwVFNSgRiD5UUxnob9y2N6416NFeXfdeMASPyUocHehrA8mq5AT6e7UiCqgDcpbgTwFSRYG",
  "key19": "4pNjXNHgUBpsHs6qCUjeCo3DXYKDUXaqiD8g2S2NsV2yfR7Tv5KQpuocCPy6KrEHayLGRBmr322SDyG4rWtY6F8H",
  "key20": "5Yv2XmmfyUEeRt3f427VLxBtmT9bz9fqhkeKWFqWTDw3izT2DmFSwdbbKMDZzXYnGi1XapPAtTmiJiztbs3FVwTM",
  "key21": "5eDiqFP4oJjJTwsGqyyPvx3Pg9YftRzWD5cvaxFmDKKqjCAiB3itx8ir5uYNAB6N1se8imBTCEcseDjCVxkFA1cj",
  "key22": "bnAcN91pKkT7hT37y3h7wVuFiGxYdQvqdSKWMW11RzEBKB2KfaJiL6dJPtpUcKwAKCDqoyXcVwaFoCXFCdt5zdp",
  "key23": "4NqKeTbHNjFvNkRFYZajYLJmAn98sy2bDbsATNT9dkEcb5BoDdRqn1MEWFUJWaX76tcJ8wSiFbsxyhzQzpx24kdQ",
  "key24": "W9ZETLasrfLwbsj6dvgoYtFcFQPtjahuSgZ9wKtAU5QqYozmSBv8iZMayQg7fB7U5K2rUHHV7Cks3yMzDsHtmGq",
  "key25": "4KEJe1sT3gPobQWuiG8US7WsNycnjELUDzv2PUnyecVFPGVABVp5tA66WdQgCFixJTZx2G8Zgt1fdk5Fnigm5JGg",
  "key26": "4j7MvgWicNY3QJxCGbZxvPDJxcfXvLZruYBHpzE6uarFnbJQvi4qJm8QRVzgW6NAf2vSLL9nNXEJaM1HbYBX4cMJ",
  "key27": "44B9iFZAXwPPSXWR23v7wKK4PcFEtxn6mZoHjU2UGbTXjDWP4NsRFwAiv1ExyQD4CvRTpZDq9qRZGQ6r2W545im1",
  "key28": "2X6Tzzoqwucrt6tY7qopH7Tf7Lq3pEyHN1dbmcvc44wQ63mkEZTLCQdrJsEWiCRzGXFkMwZJMcBNwN8o57bEVfrp",
  "key29": "hwaghNWJb2eUFf3KEJD4jYaoUwZnoPuhwN9kpyHz6stAC2GjWgHJmtxqFQpJzVBuQZRvNxYQt9RvAdjLsjnf6Zb",
  "key30": "3zL6hdVDF9d8pUHNbAK43h4enegLohpLc1gJt2z7zKhAHSMVBYDS21NsJPXtKa7nLLS8ADmetxAPq4k6i4qAXmfY",
  "key31": "3KcGB8RjDyyJki8Qfm1KdwyVX71N5JyGA1bgwrwcXpFesUe6EQnpcEwDRmy6UQsuE8HhHwXiwjbxtNffmZGaXA1A",
  "key32": "4tS4Vyy2xCVvsPnkKhjSZ332oaycE7xDAtuAP7TAoPpuqgJCahrqwdcaXcirmym3xeVLFvFjz4F21bwM1BswsoBy",
  "key33": "28qn24UPvXQbeYy3xSsBusm9bCwjsx7KMtcEUiHXy7FZo53xcPiH5rnFWu2A7mApLgiuUG9rHjBTvrQyqeo1zR2k",
  "key34": "4fdH6BXp9v9AYsSARvJWswdqymzo7P7XydmumSiBytDH1S5ceTwCUPvnaysd5TdJM3FHZwdLszFCpt5k3mLZQtKh",
  "key35": "61DRmGqEdb9AUnHTkn2u7u4GJSDuA4emAuinEWQEJwQeciggszdrD4wBr5JFimrnpLfHMP3imbCiJn15vD24mh7E",
  "key36": "hSVktAtpcCQVeFENU8gwn1UQnYukDNFDx3tRYrS6y5yBWf7XHw7656wkYkFbFcPpfJzqsGxYyfEK2Ng587CHdf1",
  "key37": "3bepbhHC3LM8GW6eVT3G3G7FTejDk9oeta2wztGQPfjb39eTN5oAJasNPKhmVq3UmyJKWYWuMHYx9PZGxYsRRkbK",
  "key38": "5PuQnmeTkMjRYVXtv2muCsZHhfidLXUaycMbRKckauT3D92dg1Hu3GBeiAyZ1maTbeovLHfnY4o1fESqCGQK8jgU",
  "key39": "5UQPo2Noq8DFKkk1syjbzBE8GGhj5qUDBw25k28afhogd5HMUuZC55gUcdb7nyScgdspv1LW6JPU8G6JMYXuyer8",
  "key40": "4v4Hwi69gUmgj7SnE9j7D2C9RRvr7QnEe7hdpcfR3D8mqRfqqZQnj15ND5TVsZBxMhfmaNudvJ12TopLdgVRB7C8",
  "key41": "4U3FFVCDvJzFMQNxDbBhrpv1XsQi9Y3sPHsphK1Va9eUTzE5VqcTkVPh75EVrJJGmoBRPBvyfm9XiZwdHHMJXc9Y",
  "key42": "2P572J3t9fErGN3e1haj64suuT7TgG9Asw85Ju2G1ffJ3jnBoSVbvWBSFhKPiPjnBNEoKdbLKY4TQ8L7ctH7Cnxw",
  "key43": "5NbVepukHFRpApFYZAtKjXEPUKxW5uTyx19bcW5VMfyaSSxrgrJXo8B4Diqz8enfvwif7RD7SZnMTWi3Q6aiRQgF",
  "key44": "4PdJTR8tjpurYw7spKMDy18CmGpPA3LM7z4zaTeb1ZpMwo3Th6Kd4HEmQaHnig2PRDFac7M7rTizsZiP8byzyG7V",
  "key45": "UUu1kF1hVRhfKpspchkeMFmoX6bnsyguUvUrZBTtGjg66Dvp541zSCPfTdzoSQWNrEnqbDyWsYfzjQLkFUxATCA"
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
