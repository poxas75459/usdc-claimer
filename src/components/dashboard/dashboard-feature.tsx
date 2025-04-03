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
    "3Lqw3BgxNHNpzixc8rZK1c6AonVUvjdfdqibtR7ahMquLiGZL93LJt6naASJDf8uPmMVFV3o3ojwihD9G56GtY7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UDg7CbpHuYJkUZraRDqAuf5k5gwZqb4UTygKZNDC2Zi93FdzqzmP2q8ugSTTi9XHGXvWuA9yFdsRfhHDWhzDdZd",
  "key1": "2EJuLScYYKjUFRzT8dLZk1GAzoDfFV5qMtnTE2wSdrVBS9NDrg7ppskBo8ca64JfkRLynSRgTy8CHMfnARC4u6ED",
  "key2": "2xN8n8qvvLqN3TmKo2dG3ULFbd47THdyTdPjiuzEgxXno2AmQ7UtAcAjHLik6UCJJddifgSCKV3DuW9EgzigefjL",
  "key3": "5DiDz5MKEXsko5AWimEcm8xcoeXU3nrmhAQeezijwvZ6dAo2E4f5HirMGXpLw8omCiA1YF5kqc5jnzA2WcPXbHdz",
  "key4": "4V5UVsp8iMGPC8AXqdVkmocjep3dGt3hQ5BLLp1qT1szKWaVQm4vTpUanMT4G6pJeGuVvbzpz3DtQcc46AU4ywWt",
  "key5": "5nHBPjTWvJCMSgQ6kdSnWk7eV9SfEUckTohmmCfpcox2nyUni7SJw8b7veJASm8y8BKiTTrJCT81CwZc27XWJUvY",
  "key6": "2Gxu5KaFoPPFuvjczxYwBidzgTufvm2QztC1wJ2xJ1SqoRz5ZqsoB1wMyu6Wf2zgiwtwzy9yw5dVeVp4sgyMXZV6",
  "key7": "3oMbz98FyWQroAqdoBwphPwfUe4cpAURwBcUXiAiipzYGEaty7M9wMRuRTVf8A3h4TLeHFSLGrwSai2jxvistGPD",
  "key8": "57QDekyVMDfCkHoTnY5Nsay7kJoMGUszkKiw1eQwnsiCdEDhUaDAUbDXedz8MrR1fLtH6oo5phbJTBhgSLZvk4Qn",
  "key9": "4ZNmTPP6hgj9MSmsuYxCMt23uWumPuw9RyPEmkg5DpaKAJ6EMePKkCJHXHUuyWfdemPLW2sg2nZ94wRPdMzpPupm",
  "key10": "Qq6PwzGM2xxEKvJyo5uoPjkNeY5uHGppqormGnG4RSnWivPdC9VtxXLCfGry7xyx1y4JQSjV675vs6pDJoFFfSR",
  "key11": "5Nj9vGxiNg4vBxtfqs3WEyEJ95ALWpc5PDgR4pC3PbUm4JvgtDjL7sxpq46aUsA5ZjbuTvv4jGNspFSHRHvJdkZm",
  "key12": "38JnQo1VG575H4ZBdJQ5wuAgez92NL6XSfF6MA7hS489ezCXLtZnFpA5ddN1x8RrfMbndsErqxuqxzEBnLCLJnNk",
  "key13": "63bywqzVChdWfE8YhdrCt5F1p9G8XUrLGkXnphiKVNLocKfsZjk4AwKpU28AAFZ62TbfrDTJQhxhJvfCGHMkAWXD",
  "key14": "32ozAeBDTwRG3jC3VKPfQpRafr97tphBBPSjXYKeRmpoDtjHLh2VB2HiDz1LMosbHpMvHqJTb8GTqRwoAd3ujA81",
  "key15": "4kWuyJ64BomZzw37tDRMy6mu7hFpc8gxrgfkjrkAb3v6hznWVStfLFuMbAncaRaBHFk6tvXzgvt9ZtcBWAGfyuZo",
  "key16": "Eow1Pf16fxgU8bvdzXBdu74eiSEVuojSEDFWEfhoZvFuCTqX8pndgYKw3xB1eyZBv2FT3JJfiNTQfdkZG2Kptof",
  "key17": "2kgpugcZSowuExWFb8naQ4nivw3cnQJzpdtsY6oQqpXosZ863b3HEAjUJF2MrytiD8jpThX73x4BgJCPHcDeSzqK",
  "key18": "23Smgf9DdxY5uCwigh7nNzrK3Ajogd6TbSreeYBBpuEsorSDRdW4aMb5rGW3LLVYPArSb5Tb2daVSssGBdJtHMYe",
  "key19": "53kmAoKcsaH9Wc8YM1QGkTzZRczW3BXVmTDJwHrc2abyRDbqxbpmf2J5TmVnuaRvRHVNCFp43FakaYVJLyyh4GCS",
  "key20": "4ei2DBwCmQWJ3C7QbxLX9aJMbdP1D64aS3ruYwChBBeAbJDrwXYHBYJyeRjPmcvZb3Bn9cjDP6MdfJMnZkH6Xn8a",
  "key21": "5msBwcmy51yfsLKbHK8mTyfSYcuxK3vc83B14hPuL1hgDGkJPS1Uz2YdJSRNpjdFNhiPWpxakDAnwpPYV4VxJAVH",
  "key22": "fxs7YEvPrmWMNmFJWt6D7ZGUpvRMNzQgQSQXafKpJmGVrjVkwGLjwVU9NnFsYXhoT4HbtyANHPpjNEtRJjif9h6",
  "key23": "31oPWFEENVLFLh437xqSmLB7jCaHSHENXLWtTE31CjQ6miDSEBJbWwZSWHXi2TEumZYpJpWKUpq1DraVQw9oA3wT",
  "key24": "mjPnnWXrAQGsbi8juV6UcastC5M9c4t2RNRVW6pVQ28gCLHugnEVDKUb5zRgQ8A9GsikdUjVadYJbHmRFsUaAvZ",
  "key25": "3XH6xKCigDbzM5a9K8nHf6zxMVPLnQzkKYjjLKJdMku8HxijkC86nAwKKoFLCVcsqpozfmR2f4TE39TLfTsNnfXR",
  "key26": "T5vvqoy8THxAadrix7bCdP6SASM7yggTZ1iCRFEWvPpCpBhSCwD2aTKpCtmR2iFh5NmXNpSts64X9HEq4Wu4KwD",
  "key27": "3GQ6kAeFj7i24MriNBLSHRbCQ7BDtEwVjc1K4wbinR4sCHpnkYAzZa8AXwoG6dDoXC8Xj5ZcuCKhi2rosqitT9FJ",
  "key28": "2JupFXvLBY3haHm8jgHr5GhT7zpPiMMBXbPajxrBoWNxe3bPHRy4Q2uKPLkQDixv2qrj8HMGC3Tjohz336H8UNvE",
  "key29": "3VxiYEwsQ9WiWNYQ9Gnd1ZzqpV7pkwY9DRDNmPYx3CSbWMitmQpxZpD4dmh6eZkgqAC6881n8rQBB7Co8gHiG268",
  "key30": "5utYS1xJKZz2BaziuGjcxxQBwXhHL4yb34RZGvjCC91pMFy7dC5GZZ12SvwpZCjZZBnKhtSoh29EFFRP7m5tGwSE",
  "key31": "5JEubUTHeuHAV5WrvbeNRCzLawxScCSUMYsVF7rtaXSoNh7xRWwYBzPikZcwNkToWwBVC9g2QtzJesrEAspZjrcD",
  "key32": "2EzSDS8x1rGFtBVHirGxRKJSV5vHmJeobSKzhyzaW7AAAxMPhkzCAatpMGQheQgyRKtDm5jy51aB9bFJiAynd7sJ",
  "key33": "2dCYqa4HR6gJVJTDv5uhXXm545WnUr38mJvK2A7xN52xoNi1eUGoHcR5SxQ3RBHQPDA3eopSU3kooK5nZTKZNiCC",
  "key34": "5H1tP3RxUcVLu3NULyDXR955sYqR5KYo5mZpLMVSWxQiiRt3k4mNGvKEES6nxffsEwWPL87JBC98omx8f2rxp1QY",
  "key35": "5sC7QWXSXraAPLcxQhns9BNhJT2wVPvjnWfpC2MGUhzx7Yy7i4z4f67S69JaJV6c9uwGYV3adNqVMMfrmKSWLuaY",
  "key36": "3QjK5jPSKZjqdETnceFYLyKmYkDpHxkLP3naNbJU1iS6cUbB2jSnYaP6FsSyyVM7CR8nemTJpwUKJG7cZ2GawDbf",
  "key37": "JLHFUbaCxUDXXPUoN5YfHBNGdZ8Em425Kmq95uSPJKyU83KcTcn4xEqCdwm2zLnfcLhN88WfU321rhK9FYCQ4SB",
  "key38": "4nF7Xi9YFoNHqdpkx3jDTgPAgZ1rqShcThjeLdqeiJ6Yvwchontn9dE38kBuL1sCWX7uHoeisb4Cd7t5uduq4257"
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
