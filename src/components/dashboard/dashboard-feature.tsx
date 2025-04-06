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
    "3p8uYS7iXCFkWu9mTaoXn35RXaBFFm7mt7HoDCvdvR7CKMPsX95sikiaoSYiGcoD4ibkxpG16FEGz5u7P5kKEK1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L9r1SkRXVzhpqbsXUJEK9L3nnoPNT84eU3iau49HvPqhLcWBEshjUWa4KGy2UFpyYoXFdi978UhqYhrxYmphERg",
  "key1": "5G3fQztF2MSvirxHtZ5pd4SSox74eYEXcBdPmpmh7iZK13EtCQSrXFbNcTzHXfoRz49w7gYJWD1V51TwcaGj3S5j",
  "key2": "4Pjs6eNDhMFbMXQEVgiPaAs219bWVVV2dAiZGL8brjMWuhCQAd1fDW4oSHwUURnDuHF1usWWPmaRa94i77ESdmKN",
  "key3": "3bnSZ97Hw1NTysVEMd1LLFWfkXu2pKvnjqZtR2i7YvGjP2Dmf7gCEeyc4Cy5tq7UKWRFoqQ8gmkqdJ1cbPRz1t3f",
  "key4": "4KAvagezZktNc6Mi9sA7aUQJmbnXexeWznxbR3YV2jjpeUQhekcJEfdwpysBiLaMUTL4gWGqYKD1QwUtWmjyFeEq",
  "key5": "453VK4oMJNJXftXzpfUzxNbed3i9ceZ26jNtjoynHCCCuVioZEHhYHezgoMoh17N4xyhKCtZVyhRgbWUcRKyweZg",
  "key6": "4VikaNpqSwRKy8rs6gtYPg9zkbBqECYJj4vEU9hDzu5SPNq4ZuqVQnHeXnGYJW1eFJpgMNrCnXszR6fLLBZeiLHk",
  "key7": "3uDEv8cSTchPwAbyAcMK7rUH5yq1SdW7QWj14XJengDAnWbkFqvL4t3MoGCyE1bdk6R17b5okurdJsCGthiaspkH",
  "key8": "3pLUkFTBeR8t8zf86mVLfVSorgnCN8iT2dimh8WG1NdHn4k1TZDKx3d1J6Ztr1tMw2TVgWX9PujCLU6DynZzVV4C",
  "key9": "2jd1JjZVi8xXw5aP2aLWHLwVgGu2vcSDLc8ddQru4zmCzHRAxRDk59XASKXxttGjRUfeQDVqFYK6YxfD3ZJV7LPS",
  "key10": "3ZRX8FkijwxY5cksHQYBoRjgt5XzjYGftksuWFiu5iEvJQt5LmeQF41crAGtTHxJcBvk45qsJn19vqvMYi4Qgaag",
  "key11": "2bgbTbjuHTMpE7Yz7nKTRdViuDAwrhEuw1kjHQWiicpnvShmDrGwjB6iJU5WvhmMxNqwR7Eif2jJkJYjwwDbAahd",
  "key12": "49BF4gfntXRUDroYQgzMt4majEugBHt3Tjc7WdV8iMaKCXsAJ8QqAc558qsyUAZfqNkt6XZG8FQss7HCLba7M2R",
  "key13": "5PuvJMsLrdSNuw5Ezuu47i32PchQRN8XNt9BvHcMHX7d832YxT1LedtxwYTrN6pqk7gyL38yzgzHjpMZDERYeZ8M",
  "key14": "4AEKx75VvzCqPdNyRaFBp54h5TvNGWimrGFq5vqt1bdXYuWF3aQwhViMYAqELNTjbq48KCNgnG5x8yHw8am2PZUa",
  "key15": "2nS8HK7UyobgKDC6JNJxUwcmK13i9fzpkRCZj7r1pQFrVSZQh5offinQ5NtWvcR1zEJJHTt69BVeV5BeRtZcvdWM",
  "key16": "69rB7TzzDJhfCpW163FnDL1xCfYB1BoNV6b6wFGpRwDg4EQJbC5czRtRRGDAbmcRq3psZfkWkTBz7tuSFtmRd3H",
  "key17": "4vvP296CE3qo5Hx6tuFnfy1eTZjLGNFFiWdsYD5zivSpBgc7cGEkGpaVB6qoT2BX7E4u8J5jZTb5azBwneocr2AD",
  "key18": "3tGbiiTSD6nHEbm5KV3rGLa1JGeTntXfKHJ3LmaJn3w1HCe45VCKcjSxJwx66K9EBgDLL4EmBVoiBEsowi2KtF45",
  "key19": "45Y4pg8WoX6oE9ZYAnGZ2dbxPKFZqmLHuiTUB3E4W51U5GKdgo4fZdBEDVj4qu7ek8NG5hnrJvtLSTCqdHEj6HGP",
  "key20": "4upA3SPLfmej5uTMRv79srbCQxa1Fi65UyP1CC4Zeos5gzv59EZhCQ3P6ZQFUw2SuCYr6mr6CQqRBCNaM5NQ2peH",
  "key21": "4C2ofAAcGSZHqW2NAmk56Hp5UYmB98yhDH5g3pA3NkwAkazkpjXMk9JgLGGzXNdGzaD3opB9m1JMsgpTRE5jVpEj",
  "key22": "PD4eAyF8ML1RBQrGX2kjRPcMABCPdUReQA4fHPE1dJjYK7SYj6DJh7QT6VyGGGgmZe8WrjXiBeY4vUHwaq7tnyE",
  "key23": "2ZdS5JtmGWtxXZWbu3xtXVZ5PyPn8ts2wgyprdYXQLwEiHjZjLDvK8LcgPjfh9CXdNVudgz212iTvRXH9hMk9r4c",
  "key24": "3ty4F7aQ9qirc9Jzh9MDSgB7Ba3U5qVwYgibnJrKymnWTNWzzW3PTA76EJAkTgNFxwURzGW3RuBVdCpGoWPtdMmx",
  "key25": "45oy3KaaTT5DKoSLGtvbwsVPAtrxtd7K4NkkJJBrmP9D84U9cGpaznFhQ8GTuS2Gj2YFmmcSNm1CaxzzfHw4rarU",
  "key26": "4vT9mvH1grxxqjyN3LQSwp5AqZ5vgy1hbk1Ncd51UREPVqG9a8gF66LYGFSQkXhapPnospD1jeQas1s9jpY3nzSs",
  "key27": "2xHtvNQDke88Lyi4yypT2xpdqfqnVC7FkvLYQCRv6ZYdhh3w3L7FaAQH76r8xFUGc7s7JxkFypp1DRtse3kftMxV",
  "key28": "5i9rRf3BrWy6FTJEqSJVKpA86xUJK51D88vspoiP1m91QABiq4L3ixbtbscFLrh2hp9dXvJ2J9nLujDRmTCbWFyc",
  "key29": "Z5mC55SEnTf5diy5pEEkin1NMnQcNMCGCJjH3mmQmkXyPyCUNBfQrdTRrTcDQRYWcV5CvPWxkG8FxuBaxgnP9KX",
  "key30": "kDsbjQdKkjk8jHjKtbJAJj2FdjrPxpwAau4jQWC71mVPcYBr6kufVGTfc52uZqWbfJz7zMUjr6VpogsTJgEV8dx",
  "key31": "4rL4b9Urg9z8vpGHYK3xP5pFSUE4KxoJsoxfDaRA3ra7mHfxCiLQVzemBsusUSEje7cvsJUwbuJpPMZFPTZYBH3R",
  "key32": "2twP7hd7tJCsToKx377cm1fdBKdZC9AcpnYBMGyTyFPknHfWB8bf9h2uHGrT9EAsRuT21P8JZE4EiXchXyW1hknB",
  "key33": "2e34vQeqYdzkJH2CemXvbnDiEeP1gNfnsSQ4nwdvS8FCxR37x8ArutfxYb97968s5J2cB4XgTFqWBSmHv1GugxxH",
  "key34": "2S1ppptgN6ZuS5FDwp12p9mPA9XzCCAm5dx3jFcKYs2xKd2caNTwbjtPJyXdkEYGzQbReuwu4XsLcLFpP5bYxnaD",
  "key35": "4LDNmTm7v1psK2QSHZsx371a5BsGJbMcJ7hcZZdx44gisHRf9zu1WzAVbRa6C8RbELPoNRGMjkhz6omkuTfcKE7",
  "key36": "627z2sFXnbiNL2AJVf5BK2epVp9dMnupP5KTJKVjRRpRD7CsZwhb9co3vJtDSBjjDdwNJ6UnkBAHpDmyouRAV67C"
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
