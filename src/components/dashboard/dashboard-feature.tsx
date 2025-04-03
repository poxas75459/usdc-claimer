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
    "5MNRFSfjdd5TYgJzsAJpUTqS6zabFADqjNhkMJELtayTdyrgspvwbfZAozJ5iQBvZGmXdLLsLAjxNjMLEs1XLMxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TFRoG6WqU3gkB2jUqFm4UBrX2m1ZbXo5vxMTuiMHh9nrqHGyBVKwtGxd9LcRnLS4em5QAFnfdp4HuBk1K8JtVb",
  "key1": "3F6dzyycTQ44qCHYhAMesJNDnCv3fYf4b1jshYfo5a4pHWxAso6maKr9BsxBZdJG3gwM25UrrxKT86xyyP2gYnPZ",
  "key2": "3ahNHEgw2XXkvZFCeBtwk4k2vMSwjVXVucKuyUPnE5tc8exguH8sMznZ7PrVcbWKHfEb7zRq8XwqZ3k2nYwCDkss",
  "key3": "413BVwyb4YB19pHmo4r4rELqfCJfCHqK6P8U1zTb2yKETqxVxsPSJgQnt9SnkG931XJCQNnBfanq3KBE9t6vwAgw",
  "key4": "pa12iz6DahdshMDH7tu8nzjc7LHUuhUzxMkUv6xkzYXRvncQR18HPem58SPWTASzrPYGJdoJ6oVQNVRHW1weRGs",
  "key5": "3XmwXP4enJk1Dd3H54Yy9Jv7tbtm69LX71bvYxEdBVNoxvogD5nz5gZan1jbXWmGWRVC5zNnKU8UaLNpPk8NcgF5",
  "key6": "5XG1rtTZhdbjeXuUJvgN2VqjPxbBsc8NtuZ69D54S2F8noFrj2TYZZ2AGChAEHKkyhqcuCwmEKrQD9JucQ7Pmq54",
  "key7": "4u3v67FobBMEkfyySTtWe4rk7aeqs3PM5xhjZ5Tp67MZEXwkNzjZHaKgoWQXiDWmRLqxCVrrTSuvZT2PMU8696Gt",
  "key8": "2cyv9Po2Aw85ig5AkAWBNBL5uGLWvTTYauvvQ39VwXDP2Q8fmfnjGkdd7SNS13d3itndEgu1WeFzxi6c11Y5xUWd",
  "key9": "4VizjG71F8QryrrYmNXdYdYBFNefUneWpbHsk8HZePTCDvvMswtPq6fsNdorALGnEFostJ4kGcraYne2SLQNj8Ve",
  "key10": "f3mcxpfFWCoZxD8D1SaofKyZNFU5MQkf9ACSeScGWKPHzA9hKcomauq9DvqjvHuo1tLXukSkc9id8pnFDJ6pbNN",
  "key11": "3th1bZ72QN9bRWHnZXmeTRHVLpEPV7HgTsy2oE6iiyQKG7Pt6KtQBft8LDJv1fg2jyihgFQ3Gi6Vu9Lkt9fHsvJA",
  "key12": "5RA2EMc9P5f5JzUiX7fcMwV9d5KQMHabHoaZcJrv46bY7szBJvEBA8RB38MNf4ngH8UcJKGdhRTFpaQvkCmfWwjh",
  "key13": "5z2umQs1Cq8wX58Gg3vezE9RgMPx6DC4XBbnwj1zknaCTM3kNSDy8tbSgcCiyZn7ik77scGfzWaNbc3E5DNyDmqS",
  "key14": "2J8x9KJNv4zsPF18vXaGx2NPMrScjK5nwZVuLtJLM4edBfyqigdyJyqMuQZBLjwwUbDxozLSLdyeH3h1hgArataG",
  "key15": "21XYFRxq6NpyqNowvupDyinwsoGyqnqhYKedVcEbpstHJtrvrfkxPP5Loa3toF1aMRUukqqG7dtyCxfo3GfDioxP",
  "key16": "32kAUEPgQiaGMfKK9R93HGmdmT8s3WgHMMNHqcG7VSPttHSe3zvWBYNxMaWzpQw1T6g4N63wEygADUG7eX9UxP8Q",
  "key17": "3HNZfTCQA2btixsUG4mXY9tj6hvn7H7RaPXhSeunPsvNMiVXhcKEGLVeaBBts5DcHXfNbuL3Lkb5vJMYNqFX6t57",
  "key18": "4rGPNKkgxnmCy4ZUHTnhuTsRcYy2c3L9RWgnUbzJr5X3sCVm9e8tzq3YjA2N7HDfoAqrQuDkvKmNJCB9GUcyS3PH",
  "key19": "7bHxNVuVkMgC6q6bEy9TJ88yXTp4goYJeqPphUGf5bbrBUrRo9BWK6FbFggAwCPRpR7rSRw53nQMvKktLwQ2VPh",
  "key20": "xctXNZZH33S5h1iL8MT6GejJGDcfUCxY18hENu4q7foh53veuroR9EiyD145YKmW9XYQGb93hEGGieoeMgpB1mG",
  "key21": "4HPuzqTYAHXCibreaWjW61UWksbLhw2KgC9oaYWyYKK7gLcL91nfZhnbSTdGMguGR7FoYpbddkLg6dGJhrtgnUks",
  "key22": "2VzVdFttpQc4vUjJYhSCWuZsd7Gu3WD3Vq9gkAmAwdfSzAfA4k9YtyWTGAtVnLEKqvdTQFa1EGsugpSTQK4X2fmb",
  "key23": "4nfL9YjG2LQXCG1tExEopiwirnLrnJCfJ68FU6EjZbFdCXjFWZiLkzBpdNJmbuNdWPQQGXnw3UytqUVH5vfEc9Gy",
  "key24": "5gfboDyRmgadzanEYq4jqQPoNuGTWd1KPJuUdkSGCRmw7ZdejAV98GPCjMRhSLcr6jZhuP3bp135VvTe7qNfKexf",
  "key25": "3c6Bjx6mkL3r3zy1V4HAXwkeHAD2WYQ4sUTizYVu7Vhy2yjUeUeek1TxuPrzh66G9BxLSJnCFmKPN9gAjQUarSMV",
  "key26": "5EmhYvigMifLt8gCc74ZvCJkkmZggzC3kKTJ8WaVfergHZaCjGfd2uHf81P1MQz3XQahjp1BtznMQbChdTqARLzR",
  "key27": "tr9MjP9YD2xXqbQ26mKVJ2KFFrMnCyoRgbPza988vzQuhWMTNuJbuKpgcfd6jrY4jg7yh73pQTSVyMrTYDn5MrV",
  "key28": "2CMucCVvVbT5TqstR357NZLTXucsjjBEFJA5qgQiUtKwmAUBNrySS86yy4yPZ61DhGfB3qyjhjFwB2iMxiPVkdKg",
  "key29": "wEx229G9SCMvzANoHcL5xRyk3axb81SHJMTuNk7Kd1DYGQuzsQVAs5nnzQipnfoyc5CDEPZ5pdFBYBhLG5hGVYQ",
  "key30": "4Y4T4xECrmQW1yTF6avLgrqUG9d8rEvaH1XDtatHPYAmKpyDotFn6rGofa6DoX51x3qkUswQ8zNkoMBopmfH8XoN",
  "key31": "5BXP9yFcXwsTM2hdLb6tWex4sEUF4BpyTrvTM85Ybdguw28wB2G5kMVCHy5TuAuZTiR3Ko4TrFAydGdtfmXbHyjg",
  "key32": "4iAdoS7AKKpnLynaJLbAeN2h8qdqKvTWue9NhmHxyKWptpDKBy3f1SKP189S2cmB9s249BiB3pnU6QYAVXTPQnBT",
  "key33": "24F6DrFuLmUyqRfXycgauqbcAhx9uWjCxhFVUBFVTxMN1FNtDWtErb1QbmNPWNrPPXJE5tC2WK1cgv6FAgVKro5f",
  "key34": "2K9ZDamGdKyTFeok4tBnLUVJNm7miLBDHwkZqLwneepLbSunDtV2xna5gxzyEARXEuvHRnq42mzwfzKbdCDy6MD2",
  "key35": "37vNCgmKUaVtyYXe75F4595mFC3p3s5E8dydAwPP6JU26ch8QJwTrM6eJabe7MG8Sgney94SnF34Bt2tZCh3Lo1L",
  "key36": "2BCcabNRhuvCGfaFuxiZXWgFgaH7aeHq6Y1maRjYPRRQULiNfKJA8zZdvz4Fjjb5hu2S87PqKGEMDPxGNUdMbwA3",
  "key37": "3J7wWXLBUP3Fwkqz6Z24AAsibFqQSdTdsGMS3aFHKPQfEqN2aqCTAakNS9gVn8jEPEz8aQocpGNFyhge8nBTKLou",
  "key38": "4eqqyTRrYoWUAmAJjY4hj2BioiumxCQqnmqgDTcqYKcntecNQN1uEH6WAkMFTvdnm2DGWCFWvHx8pVsPWjvYuEGh",
  "key39": "bNbpSDnxrJpQGhCXbv8DCJ9H31AbeEvzoTMg1ueTwSEc9HWGz5tPh6vPp27jHVr2WyYQqv44b3JGgJfWrPm4C5t"
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
