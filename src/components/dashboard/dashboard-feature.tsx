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
    "QrRHhZMVTPqFkuMPU3dqkJ3BeCLsmnetgNTXGA4RDif72stojjd3jsFFrcDzoEjLvTWASXpWQty65GQwFzrvgR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477wdjiYFVeL636RsiXz6qM5wnAfpGoY2jxj1TcYLXRPHiwZJu3uphNqfSxJjubXNicsPhrbfnQSM6vp5MzDHNM5",
  "key1": "2pFbyodHHgEadsKxv3bUicXeSVBf1Ag5HAf9u3mc4b1SZX43JEyG2LdBUfxpgU751uDsqteQ9ZnZybWYsuHAunBc",
  "key2": "5KUnvdiD6X3NFa3ZSgUYLuY7YPNp2oR3wRy49gKnkzSwvJQQZY4K4GZDF685E6uBPmP8sgck2K5sDRdpbcVKmX89",
  "key3": "2ZztFehtFTezbXyiyKp7kMp9wxsnKHxjCPBGE4tySe2CvE28CVVvJWgmsSr4YvhVBhWGvqwH4ymWhaNs2w3jiZ2i",
  "key4": "rYZtswZXRRtuqZf2T3GfhQ1mUsZV2p5iTbJheCNe3Js2mPKsmz96Jjrjmr9TbDFALDskDwAUeHM2QmKDoxzNAZm",
  "key5": "2v7GoApnmaTKPae8D6LMyjMzxcUcKqfCGffp2r1jJgQhY4tPYNAze7zxB1vWXaHMaybfaQaEVPcqbm8F6djgafuW",
  "key6": "2rfZDsHQJ6LuRqzL16k1qjPLy3ehBVrPBnmLujzpayJERGLq1NCni62pnMNNnRRwnFJes3EaoSSvRGy4ddpKd2ja",
  "key7": "3RPJVZ8uJJ4CEpUWHh5eMhm7cpKdimSTEr1HKh2XEARw6u9VfeFHFzmhiKsgf8mEKgzTJcNkULHFEtNjR8E2fmJF",
  "key8": "GBZrxm6kF1fVrfxJMrnxrQ1fAViR3x1UbD7PQotnMWp6aNJyRqLdr5bhghFafSRP67pgjH522u5No4boon5fBCh",
  "key9": "5pZ6zk3GS1h28Uod6M2C5hxMaa4V4tuDoZrzqtiGmwdCXkyFSRaLXuEpMGHa7fSmYVyCtW4ZKFaE3i3RKDLKPQCp",
  "key10": "2ahhBwaQKygRWrGMDGCzvr1tG7dtPrUfvtDzUfBXvEjW514uMmHuKTM1gr2hCBfihVA6ndwtL9fFHfN8q4mxPGN9",
  "key11": "3mhVUBAkasYzmM9ePXTdhJgVvtBx4VznfbS5n66M5gqE9P2VLEamdnUNeK42xow9XDqL3NdBRjaayosAo5VUNe8z",
  "key12": "5rKvqCy4LPH5WFsCnJhPVWLHtFTCHzZ3AwHsD6keHuuoQnAfC1gXvhbBazoZ96d1QB91p3PMGWKSLtFf218qaiwQ",
  "key13": "4iyxUWH2pfMiYixgX1ykv62ESR88tbE4FrHsv7Ndfwa6oTZVvnx4j1FKaEKaYaHamBxGFE8ZV7rWoeRwMRRQzwzU",
  "key14": "2Uhfh4B8J9Y6vkHcFJ5UgQVRBok8TxENMc2Adjvz2nNjLhssjGwu5ZQbJFDPmDdAXvJWkEaSSjBSUaLrb852Gt2s",
  "key15": "5jefVuYDUq4uAit8JLm6rWZJbBU7QXaCncvhynN1CWiZiFeG4GY1vw1jCQP1ZgAPt284J7rkEppACYPHiyQ1U1kK",
  "key16": "2MLNwb14Y39BUcVgVFDGJUjgHqm5RhTfJNGPuBVrtbFQHk5dSDo2u9kX2usCs7CPR4HstYNM9Sy5X8j3zJnbHarp",
  "key17": "ChoPo8jzU2pisREeziKHzEgSPsaSo4r4yobEJtiCXqzQ9c9jondac3a39ktnHmDc9sTvgS6kHKiced3YnDmsYv5",
  "key18": "4f1veganwvkzswH46ttzyAHjGMcX39jB38DDRF5joChwjWdtQQyL9Ba2nVhkcLTHpvi3QXi6jiaTqWT1yTYVhFMi",
  "key19": "3cVA7Gjk6EtusbXwwZCJG9QxFZx5dJmDEfE2ueQ9UT5x5fxfnCFzkJi5tgp5tzK9JhYzu9HnGvAJTtveA5qrWMqa",
  "key20": "57FUTxGz5rndXtK71WaPtcjvesFCUTG3jWY9L9cbe2VqR5DsqBugB6jHUEcvUQkR5CXuXgD9kkbFCibicgj5BW69",
  "key21": "rgiEWYhiuU8h8PK8LJFduqNarNbFWWavJ29c29qRqmU6ufeEnP4Mnj8ZHFgQxUbwL8jWW7dsDWxHiWM3TtW2YSY",
  "key22": "3WMWZCYHEAbYx5UeCUR6amJwPj55i1GFD5fPDq3S4dkseDh4KnYzaSgAGkrm5UcamY59R1mt6w2y4GjKaTwENDb5",
  "key23": "2iNaPYTJSDotYAcP22B4v6w9xrh417ZW88fYeAaKZVyGhM9Wiw9THZMwHoEBk8ejj1yoYdt4ni9h7eRxavgNattx",
  "key24": "3m84e4k77tNY7CWdMUYSKz3KHdjoxVRDTQMVr2mwZcpbo1fXeqhFBGdpdP3difLyTYJ1h3dH6WRB4JxrmZy7RcfX",
  "key25": "4eo3QkuVGqycAPfJqcGu5o9UoZtmJKgh5CGWy73oEBJpP7U5ZWLDTqqS6t4wntvntcZChgu6q7v5knooVgdS2aKJ",
  "key26": "4KFbBscANsgaJHVNCzkxFZRfeFMWXhiQgmKRqJfvzRjjLuMnRKnX9BgaJQRC5yA3kenWiKrQ4fATkuE6w1o92QP9",
  "key27": "XzRNa57gk1S14bvg6Bo7kGMS3JSYrwGKsESUryZqh9XhdzHWb8sfgdmbkvEt2pohw9hPqcKy93WbaqpkY9vXJed",
  "key28": "2pufnRkZy3Edr8UisBoVRNfoy6v4UcqT5E6XExs8EkLjWWLEmvjRCQNC51o57MfFR8NSGV1yXz2EjwJLBFCJxtpv",
  "key29": "4F9t9imqGbTN5qb5VGYU6sb5Z3WTCKBwNagRg2bhTYg36hpZpPt1bz78FaDtmxDn6bTN6SLZRN2yYq4s4MLPWz9x",
  "key30": "33rSpqLi8SAfXapCxwnub9iiJWSvYDGQQQrYvhsHaoPSfotqQTC7g6KxwAnJRuT5tdG3qqu4rhoomosxPvQoPZEy",
  "key31": "FgkbMwDyUK2gpFGhZmPrPnEfvt4Sv2qB8PovHAYsSmB5wDbpzyfzGhXhgTkPhdzBCKpuqruvpyrPHpEBNKN2TiV",
  "key32": "3meWvXyBKCH8eecL45jEaAKsCkmAvGdWt9DyrUSxvrNQXxo28VR4UuPg95z74PbEwUm2bKnUeR7zC4S9sL4DskSC",
  "key33": "3eRzA7DzyoFNd5qi28NqDgJGSAzf9Frwp88zYgqWatErWnfVNAvjapVgKMfSofhmhosjz9iZZqizVD4tkQGp1KnR",
  "key34": "4kTPC8BNx2maX8HV1dZGfwsxMBg4r8XfV4PsFCjrRcq3JG9b44NtzdppCCi9mvtaWQiHLwh3GXGd12p6oSzUm8Kb",
  "key35": "3k8fBmoDi89NeQKyWuwYqzTg3juq43riauFicKPw8NdXEhL1m6NmzTENPVR7PWdYRM34mGi5KnaH1CdLiokaABno",
  "key36": "1FAV7df3uTjcMUFqnx5Q5vA4WYxXzUrsAehxeykdxdMwbEAdprMMoHXkcsRCF1TVGeMBdJKNpxUPRYbSW1LsedD",
  "key37": "3xmgBQxSHVmwJ7vSKVPvohEsgBzjVbfyNgnQkEpUvqFuBNvL7nVTp1SNsBWUYiEq3EejsW4YTZMEb4pb8JrQfoty",
  "key38": "4mcJ56Cit1mrFWGDtdrEgya4H2c5DTRYSvvkzswt2SGsJaxy9nrsig7nfMokpVQiGhcYRYKy7Q2mLTFySgcLCdRK",
  "key39": "jmu2G8bUQrtxm9MsU7ByAiTvZuWCgkjwLCpTzmymjPhU7bqKMRujPkbPLj6VBWwR2pho1oLwWoyLNRUbMgPFwkW",
  "key40": "5uX6CeGPJLerngvsDnAYTWndxrnmPZhmtrX6ZoGsYNRMbGogtCLTuaPky9PBkvYa2ATrQ8C1NBuJSY1KhAGecfqW",
  "key41": "4ahp5YT89rcS3Xe4itSwcZDMz3W7WwXWCNTUPdJs8oMdXK46vMdoyrj1yUbZiwcKi1KCdC4SFbnkNdCDx1HgUNrq",
  "key42": "5grWnPNfVWK56gqRpDsxoHTGo1X1PFrzfxNnThdB3teaKpN5PptHuNWbCY9f6owCeHiAxhSikx7mgg4bVX3Nco3V",
  "key43": "tkyhKfV8jc6ANqtL5WHGKYVYGe4e1bYkS3HcTW3A4v8iaeqfMq5tzoE1bfCNv7GgD3J6qrospYLLApipbozKjHj",
  "key44": "5ZG8hvMPCkawmunmYtRKb4UVkvEvGJZois8oFgMRzJLY62k19DLYEnGkz8XUW4k6KsmbTLEPCJ6LXS8yV7fA7WaL",
  "key45": "67XpgPrwtw2Z1iKikx8iarVpBGhJmJqtQ8vNTqpHUDapHUgPZe7KmftrRhtrpHFFCDxtgxJv9jJ6fYgyjoWTQH7g",
  "key46": "2DGT29FgfMC3mXqJA7bwWpdxJvR6dmVWW41vRtQnsjhrhALziLpPMBpt9PwnMfWq9CGZHv3vGCTKDchNwaRYYbYH",
  "key47": "5JT9p9dcewYiMbDn9WBiiwP38bWgLn2923XXK8gbLZcD8gguo6oEWjXQqvqQGrc8XHWYgZKSLvReyBNiit7Cbz2N",
  "key48": "4xLE6AQE4Y4iAAt7412DvYVpErVs76SQ5bhtJo2k14TMMi2PnoM5tNhJgbDUVK4EJL31WBWD3Psqcy5qh5pQsSr7"
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
