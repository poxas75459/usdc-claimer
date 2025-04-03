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
    "5AP7K8LHWF79GhJkATfmjT1c2VurTjAFKc3xV6HpdEeezsanBJbuWwkGWo8W51HKjHCB3BUiPFWEk5C6Nub656RK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fu3WH98iyubQuyfiZ3PnkvbryUHASjpypjU2MWEEMDGPzFcvbaiHQozcefPHgQBdj29Ech2jDP7nr9gtYJkqKhn",
  "key1": "4HwPxB6HJ74qBtTawcdbmPRtUupYvqnYA3PdH5deEfuhDASR5bjTGvmdEqvfCBK83rB831hRQCTySQ2MS3ZEwjmf",
  "key2": "2jacFdyrpgrvexaYoqbXwj7n9nRuwrszz71KbGdQjdwZKgS2db3yPRJNBnQfNAeqZ8eP5699ZBPPyNcHdcSBz9EU",
  "key3": "5r3BCc7HYJzqqw9FgvL9xQ8RyQXCf5p5FGpT22YFAPvAffN9PzttGj3pa7zbQqZ7q6fr4i67dknu2foZaNeiWywV",
  "key4": "4a9FZJNoMurVU9vFg66XKa14id5faAXhEiuNmyxXd4pEZeX5HdNEZAu7JqFw8WPvGcxUGeP6RsbExm25sycBSr7P",
  "key5": "2c9ArpFbtXomWkF3wqGG3ugdkn1MnRyotQs6Gfw4JWLuXKHyvgcA8LLZR7pbh8TynEu7Ukt246HoJtSGfEhSa2bH",
  "key6": "4EC5HBgSxgT1sWAUxHjJXs8HMCeRxW4p2zdVREKVNABgJKCJwsvSGoTrcjf1oNMJ2gR6PwwQs4KFC5JDHTL5zf38",
  "key7": "2Zm687qntFYWw4GqtaAptnDohrrRUFRiayzLmQyp8Q1o3CAjXVseGQNNArsFQD5AFXiNBPDcHRVSUUUcGM3D6S8o",
  "key8": "4xtZN7DVk8m9ffvHKwajy8WQTukZHbYQa2vberoAZRfQAbEggjHquozjiGmg6ci3zU3kvWC4ad8ZUbsaSQjL86TV",
  "key9": "3GnRktuAqn8BwhR9he5swNA1euqVpRYdNXJ2opvnLZkrGBG8emqqfYpxTM6EZYn2KTwW9JwMjvACvigBwMeiFzvw",
  "key10": "5bp3VWMTjmsnBCHcgEWt52BD3DMLHnBHEGKY9h7SSriaHXVVFxRZbL27nXuvLvBnAytqLiVezgVKGRWJ9d71Wvd1",
  "key11": "3vF7PouzUjsWB16q3SKKPWEuRqPKeC4FAUfyCdxdnTc6qfaMXkApcybEmAo3BrBPcLSu7C7Y2RbPNXSt1oiTm6nP",
  "key12": "tHTigJ5MLmUazFrdAtUuobNpatCiWP2gn3GSDJ9LRMLAZeL39cmUqW3ZtfbyJ1ARPV1KcFGfAVzmPRhqeNBK9wa",
  "key13": "3QupU9xj86FoyMYniStoo7k6KjBvvQEPNNuvvCi4r1YoEibd8HcBHd3ePboXfJHdfhyFta61M3MQS8G9JxuoKeco",
  "key14": "u7UaBD5gBNF4biQmrM74vz9waLZWbKJsd5GihE5mjMCTXYoM93yiLqiJYCZuwCeFKefcTQSCSKrSuNJTMUxtW8N",
  "key15": "64gQM4TCfzFmX7Ee5Sk55ajbCwAm6rg5jRKRShXepGs4Q1y3VE8JHwbVQ2ZUXk82CAF7wJ2LserSpqYLZhd5eTfk",
  "key16": "5qZB86AeTqbXdcEpseCjjQBLUAyq3wGXmnH8kASyG4mqCZm4DmJ6XQpHRRAEh1VXoPMMSxQs26UgERsPUEb1e1NB",
  "key17": "2RGKDwWGsrFLw4nqKYf9zy25cV2RDZqte2Nb8SXUiikTrGZQLNhiKYYu4Ck3br1qzh6hBpyRVu1NSMjznuZzZWZT",
  "key18": "2x5fE24hFsCzijfXpyDzG5cJ1CxnZTh6m8VofMKVAUm6CwzquTtnrYdgoBUViTkHnsBVftMeGUSpSCMy7M8jZSvd",
  "key19": "4trobDyE87jcr7DrpNVPMxPuVjARky8BuAmCSf2ZV6roRBcNrohe3ho7RiwCcquCa6AkbJB619HWHaE2Tb35e71E",
  "key20": "4ZkFF9mrB4d4nx9ufjMeR2TKkD82oho6cgGbCjQVPMf7KcZbYnL2QfXas7x46BfJ6ECEDHeb8ekRFas3vzXJiPHD",
  "key21": "4J6pNcj8xo6sB4VwwGjMyUi1XFj9CJy5oL5JYHnTGvDQ6GTyHQhYjcUCZk2Pyaj693g1XrQnBsFrzS5Wt2xff4n7",
  "key22": "48LFGcNhrzF2Skk4CTaUqj49gWDR4vM8PugYB5SQ8mPotdkZixHVACTJaEfTmhEcR4KJDEMAFW8MdfdtqbQu4c28",
  "key23": "2EjWs61QYDggZDgafUthCicfDBtDgEeJa1fexXYLNNVAKWExYVwCkb8QnS5oFRuszyfKNriQzTKm4ZBjHajaiuS9",
  "key24": "c6sDzQTPBFjbAUi4M7Uo2USiKbQKrHTBZqYb9HdzQjYcfM2S1FvSmBF9x1wFFJ8Ge9nHWBrup2jd14BdSkhXVJD",
  "key25": "UugwtkmwqggP8k6HUdtYAbS1QoD5WJWXYg57AimzjFSvszrKfwkovDzFi69AroKhwFZqhLfcUM1nt7VC494YBsd",
  "key26": "3VkHxaAAkJ49ePA17jDjQArqZhPrqpe4kih36x7ZnRKM4fR7uZqdf3s4sBiCGWVbT4cXPdcBtyqWrMK1WBBKvawi",
  "key27": "3WoaVTHqb2C6PWwowahV7pmfwR9f8E7pahRJHdfABzf8qyPEoEqWnHhUByuKdD1tN5dF9rt7pMJdGfvF4cnSgWxU",
  "key28": "5ZW2xYA7RMXaicPXzxqdcCai8ta3kedUJwUmfCVZRGtHwCuXhpwVhPvwTh9fa1QXCL8Z5h5NRpD1PbH1yqYg5xoE",
  "key29": "5k7JFn2FYPkoKH2UiuXbeXhFDxV5UXd6QrxHnqbNKr4cfDRGL5fABWSisfAyBA5oKjQDRMUhdNxaNugLdxPv5czS",
  "key30": "5SwGAQyhdnvjbWatYUYvDaG4w2gEfsb5jUSAL5Q17s3PnuVgHAZ4BuzQS1m6ikBhTiRYHT2wVqjQs8mGqS5N9G33",
  "key31": "4rsssqtpeNufvrw3nxE7RdxQFoDdhWiYrNypRwyuR46snWKtMeA7E6qBC8DThehZk9eYjNcfbFEM5Rt3Um5pKJmp",
  "key32": "4xFUvJeChQFwMfMQoT7UidemoRszrhRbxgaac5WPgc7UV58cbtixojq3yKVz2wK8RhoMRzqJFEUHwFYyYhsUK2QZ",
  "key33": "4vFDN2f6R76b5cJjtrcZHXBL5K9Gm6uc2fDRiPibyEmqi5aGmuDyKabvAeii6o7MjyVDmtsfA6zejwZEE1iSZ9va",
  "key34": "4M6cPUqBpGLuXM6hkZYqbvxVL51fTNF5XsQnPwZJpqw39HCGPUYHjpTZfCxn9xht9b1suMVyzLrjqqQJLnbJfH2k",
  "key35": "SQJbywtMLfMfewuAyT6QBH28KyAKAaKvHrRksfwHvNp5bwcsubBVBj25s6TjSHUZDsnAbR5NWX4ZB9Vyv2o34Jj",
  "key36": "3a9o6NzECFCoSvLrKNLHpq2XckQFzeerNh91pAJhSUeQatwtwC1iKVwnjB1ZPs4DtKhTTHLUcYkuqLdUnasTCPfL",
  "key37": "9rqob8eYWuhnPecv1qmueHUDpgAU6gVsXV5yorN6VD9fp3yKiQQJ9agcijUhxcKPESsUAndi1DBdcRAJRUEtX5c",
  "key38": "5iaDRTWtXNdHA7rHWd4PdQaZadLdQXoSfgtdfBJKsvj3GkTCduu5D3qSJmkRd6iyfZow3cyQ7vNmQhK7VM5BaTpq",
  "key39": "5AY8tJTctpFJhDVpUfoGG2qiynUbSBj1rPE6NqBpUNwz5qry9FyzkjAYMKeSLunA7Y6UmUTDCuv4qmVkxxPRfn5E",
  "key40": "4167r6xxLrUXSwD9J7JWpUgJtVSEhSSJfDFaqJJ28aZ3sgiewCvkxEVp41SFjYBiAdRit8RGr5wHkpcRgogXctsn",
  "key41": "2oiYfoza4jJL2AZuzJAg92SSBzi2LdxUf6Nwyzh5XNYtQQb2e3FAJCdDr3nwi47S4Rfpnm1NXx7hNqKnFG5xgkys",
  "key42": "UhJHqiEbT99Z6mKeGEBSg96CDebYBiFpTqbTXhFcByi3VBRwaLAt6iPSYmNS22TspLS2SDTvtFWnJACvKKKczZC",
  "key43": "5dS5oTtoRJtCmhUFd7EFBtXy7X7cN4hLaLpUEE6h5WKe4NYAqhTzwh4H3crzAujLdic49Dgtt9HZwnS1LLZZTLRg",
  "key44": "5vGtDg6DGe1U338VvZ823HyyByzUNNTAbPaErUaQDbSMmQXEGHYEp8d5YbUPquKGdJnYc9XMzAzTKGLUVdbaZcJe",
  "key45": "2UXC8LJvY6EtRvGPVuTRX9eBb9tKs5RcJPEJxKfrYX3iRJinS86LViX9Mwrkr5mkCkJEHeekKMy4tP8HUYVsZVm1",
  "key46": "3b3N1SRyaNMtCN3hFnYCyJgCt9PtYDXwWCtR4x1rfiD4jujbKgxqnzCaKcaURNeeJmPorrsRqUJ4AfzA3qNWDw5T"
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
