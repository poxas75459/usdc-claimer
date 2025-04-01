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
    "2QqmMbcWqK2ugbVGYndYdw9qZZUcGhNmFQKWEcZuXDKvLhDXB1yyY9w6NpMjdZDNeQoFE74SdkJp7YawDcxX9KPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXvrPDwgXJhrfDqQWYvpUpZZR18fUdvZA7hDPzSLmeSPaaVdcNtPUkaor1TcixgtMrFZQuyU96SixUBDj6cRu99",
  "key1": "Dz1a1ixSHiVVvVKpKzi6MUSQX9FFwbHq5YRKiErvseANkzwahvvKUkhBPqoXZArtiwva1betDiEd1CLK16TNrF9",
  "key2": "4YFB2ZPQ57B6eR3w46bNd1cWqujgqQWNqWZdVyPhPKqQpra84FFuAt8Rc6ubtSsp7t8bTmJzPaKnGJzGMRfZasns",
  "key3": "2svXF1PjnToBHL199dpZ1iVwYN142KCoU5ZRRFKQzr2FbueesBxR3c8LQNm2tZrndAYxEUmcp9FvAYQUBgP9rNoF",
  "key4": "5ZA3RzJnHbJfoheQ7r5P3de2BugsBW7c5TwwrVehepoqSfcsc3Nf5PFmBtTDR3zApLgKBtqzEfbnnurmKTpDyEfv",
  "key5": "4jNDmtNoM3TrdAW8W5isyS7Ywz3i6inzRL6J88ftdigCNAiiu2XPYyAhpxB4Q3HAFkPtqMTm56TB1fFUhwaRYVWF",
  "key6": "3xReVk3fECQ8nAjSHME2aaVn7gYuV7CgfnGoLar3A2F1zjCA43g9meWuixVuR3vb3ar79uBzZgZTKCm9j9JBcEjN",
  "key7": "62NgcFfJPQAhtqJzXa8ZEhVu8JzoX5dPVhPvUyxwgcKP6tdzpescMpTnonF349rLQaiGDFCQuUPPunHnaSkD4FWj",
  "key8": "5hPD2sAKPL1JNmtnnRYxUViULYVSd8jEiQCRRwxCqcyZQGLPBAAGiV1yGfpgYkWCxyZo3kKTpoLsNfQsoH7QfCT9",
  "key9": "5rxA8Gxcn5BsFueNJ5L63y1Jkvoe6bS1JCtQ8v7DTkMZRkMB8cvdcPtxMozFab88NmrnpY5MLCi8pLrP24ksLuAm",
  "key10": "4Un6fDhNZLSBVwEhH7MkHvNHBFw6eveMzFtiEyoSsY53uwP3NP43jjV7rvzrL99qSGsDT2xfFzjrZDnmUF84uYy8",
  "key11": "3avmveNzFWuHN74PT9gTJdsmtJaMrxDGRBfKLggLbBUGubKRDKFNdaJyt45XBEvMiPy82KC3YM5eJ5ddurosZVCe",
  "key12": "KYYzsUkTg2xKXQj9fbi5uirk3jR7jfVYbZLqSBDHeXQNT3iTiuKxnpnFwd5y9QvB1FWA8AQMwpraek3PUnAQ6zq",
  "key13": "71Q8hqADskGEdJvjUQm1bLsd2dCzKxMPH2y7fD5Yf1pKjJV7cHko3vm6ZUcXrf9Xoybh7pHuAPGFG4kp4DwV6mt",
  "key14": "2d2VEnYf4Sk2AbKHViMWLY2bnV5h7gStNEWue3EFwGTkeD4vNJnS8NJTcuStbRndjtg17RBw7zG5rwaCg4h2kGEZ",
  "key15": "4kYmMNkVuEHYRmM6KCbKBDUCffZouH4erzkD4E8QvTa5Kq5L5gknZkWbTv9WUGuUgQWWtBMGqRfSmRVbBAQkkYCq",
  "key16": "VNPsuSXCPn8jVR3cAM5zc6ryRZNLqhge4Jidc7ssUV7UQLr6ZQ9kMdLVKc5NtzQDWNfjFDGgd7YWEF56S2u9ZzN",
  "key17": "45gNstZqvFoqd42HAzw12vqZJdP7zAJLoPZKJeffnCtTRC455KnFaLiaGi7AHzLwme8LvpAqmSM42BCHajruC9bG",
  "key18": "GypzppHBGtqzXw1ZZSzxyKaPMWSRiggFXnj1FQ1JwNwSmsjKosWjuv2XzWC2XrTDfBcBqrRKuLtrA13vcBGRnq6",
  "key19": "2wLsStQSrS7ybVHwmhMVotNeREyWianSRrHUedUQ16Ru7JAjbux65f5u5y96q4pRd4pSNG5bNqc564ve9cKnL9mU",
  "key20": "21eZs9EC3fn5AmVHz66AP1d6mqZXjpenfyYeJWsvrgw9zNEx9Pq8922XWFtp54zjxTkgYqfhGp3Lc98JgRyMzYZw",
  "key21": "5YUtHH62oZpmUCMmDaYHDseCxxCuJfN3R7r81SALuu6CVnH8uScktMoCvARNnwLncSuE4YgD7CoArS8PovpdTKiM",
  "key22": "2bPurtPMF3eW5bHFuPbxZYYx7ZgiMMNT4HkbasC8569AiNekoK6yLFiphpijoQhYZUw2JwGA5s1yiZoaSpEggh3E",
  "key23": "5XZHDFCJRtEZj5wRMFhgREULAr3nasuAg7CXuPu9Ws12oVUqyD1RHjuUAUbLYcDtMNB2QoSM3EqxXEMuDxwK8A4z",
  "key24": "5DSwDQV2WgyhqupLpCeMrHbYTLVyYisthGtfsZfUanUvzPb6Rdr8if4aQDTyuGwJVSWDgTbEv2cFAEQkgKy2kKMZ",
  "key25": "4riD7ZmU1LjuojEGfpEq8737C82X8GJaS7h9Ye5a2iaAcwR1KEEmEYpkdCEKAJvUkLh7mEdxv2MMyYqzAffcazdP",
  "key26": "2CjHQbYozu8ihCW1GiZZQtJmESsa4tVUdXBbvfjEmMP4BhukmpwnwTL88CHp8pLHLsrnaFs72D6n5vu8G9VPAewy",
  "key27": "3475rNYjvFHsqE9VL4WgnvcoxMwg8JcN8nLbCcUxVeHoKCvq1rBKZpjFVFoy2PLixyCekjRvqtSpqnhDcDdGk69U",
  "key28": "XqYRXU1qKJBUQon9K9CyKBdeccqKXcJY9iFuv9qkAVQCC7925UZQG3xPCjmWbmoYx8bjYDVhKAR1JjL1md2TL9J",
  "key29": "4FXiCb1damERiyVuTfh2E932Yfx16g3QcUR2HNBgkQNLfjLGxrYVzPFG5DGVLjaeBzUJhmwk6Qruhx9rmBWAPv28",
  "key30": "4YixFjuSCgCTZZUvwJw4ocNGB7BNBUipziDVVCw1btERk2zYn3QSBh76hPmo7vL8D3A3xHDafaKrgqw63FB6ERzK",
  "key31": "32h4RAqCDDCDR4aJhAjXonPKfMHcFsfCy3rroeRensU1Bc41k4m1XEv9L26B39Jmwnaksr1XMFyahQZQm2ucNykR",
  "key32": "22Gpqc6Zao1sRSap99dXZEvG8C7a9eBA5nympAcZwD3jnfyb5V2metVobGafLfC6nQ1HpoxruuWye54zVm8nDbbm",
  "key33": "4xqNGE8Zf5EDXqdZLACAULx5YQ6WpHq9XZgUgB7LSBtuBmpLH3GfWMdekDo41MTiigWg6DyreCAmafk2FHF7dgDm",
  "key34": "4n9c6ygw4CxcYKFinpQPdFMzAzsqLeZi6FXCwr8GwnqQyYZh55y7j6zf7C4zUzeTs5SYWX1iS6h3t9hBHZ43n1Jf",
  "key35": "5rQM93mPP5NhNjWtdz1Vmsr1MTiwQ6veJK1vkodqTr6e9iARRB7ujscuh82kWP1Vh6xkwuHSpT4tXyMxtGREV3H9",
  "key36": "4yQnecXscL6Esyi8PXvuvKshET58MZwkQAXLuDXiBK2LAnV3hKY6JZECiYMkSayut9RSrE16T4YmDeNCyPZYzuqe",
  "key37": "5aumExqCQTb3v1awvH1qfQBDo8vEj2h9CJoX4M383NuyNphbSVQYvvjHSViUUMw9XwHTE1q2gDUdmxHK1asMDgMK",
  "key38": "5TAfmKBcvXXuANd3YUAFQXX2kJ1RQtKuhHUnpTnMNnzR6Jah8mQ5vnp9CquL5hWCLMMKCCHY9n5cq4839wA386E4",
  "key39": "33mwV27radAecPwHMR6UyBXZyAXgj6V1FTNjB5AoA9RfSYKjsvq7ifSHkd7UpmspZf9RAVWc7oCeNjfGWArqYSb1",
  "key40": "2zJNuS8cTN3n63AVRKw8KAKU5NvvPa5rATf1VTzWaKfm2nSxWbwFUqXSNTeYb4YAiG6hjMcuh6KTM1Qt1jBu8yv",
  "key41": "2jYFtikL4j55AbNhcrzm7cabA3LUppvQv17zxPABXVdQbqEiT6vbg4ELGGGf4C7h4FtToK37nPyGFqQkgyaJvXUw",
  "key42": "5KSiTotcm6LtACqLMBWCHUBSp6Sw5hs35US16BteuL7P1Fr7UJLzuKDHgAm8oSnv3CP8GmzVWrMkfq8ykeEtftqF",
  "key43": "2DDZMTi6DesAivzb37a6uznYe71BRqvbhgGjBwb9BXUnDLCbtNsnKKwF4LPQJ1ZzLEu8XsgFAzWMJzP7UsCEE2HR",
  "key44": "5SDo2euB7hw6sfAwJgz4g5Rea4JYPJHstYqhRnDJPtK8L1UWmLfyzVC3Q5aZhXYXqcG5zsh6VGxbiQw6KgKxAajj",
  "key45": "3aJ3ug976TRpVoLnPEbPqKuecZYKTEmoviX7c4TCmpr66mxzHoiXoUVZDE5guEPVbQsRv8aUjpvuNaFRdAvFTvRW",
  "key46": "4gNp5W7xv7YbzhZayaH7JVMTdiFj2XygHGsWNjLfiSr5AYnKfa4CEGnLe2b7etVWp2xjo8sozEugNq9vAGfsSJNi",
  "key47": "2GkNHdzfrarCbyCdd28imjnMnwM5yQYt9HG84ir9VZ9VQWSFLvFxdjNShuJRwgt6gzBUXcB9w6d8vgPgDfQYPR9B",
  "key48": "29EkuwJqWTADD1PGb5xmJBwe6zA7PUJPhXKh8DPQvZdSJptrpsfYQbffi2Nwn9rBeNfrxxJ6udC7y99Z61jvKVMD",
  "key49": "2Nhnm5gEDhTcKSxpAQ677P5X5caDnFCZRwQodrDu94k6ekouhQs3cDEVZxj5FyPqL274x444kodMr2azdJdNkuUq"
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
