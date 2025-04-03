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
    "4kKFpy3mK4se4nfSCo1opw92axYyyTNHxcmh376763w8ufsm4zpkvxdvbptDDHmyQ6oKwSyooVu4quLg1JGgVu9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHqPkfxGrpzDFkzorX3SinKfbdBN1G2vBJv6zd31gN57LW9XK47YPVire2VpM9DUob7y71dQueVqAmaumzoW2WN",
  "key1": "65h36tj4UGE9Mk9K6sZPBPwRjYemX7xZxyuJRWRFNdjVfSzEipj5HR3Ho4gufYYxjFeaq69xcA2Mb4sEX3YMEpzc",
  "key2": "4T1kEiXZN6TnJvfqXNo6eXnx3fvwaf4pNAcoj9TresE7qNFirZ98oUst9XGJmL4HvtmnVQfj3kwt8NqX5bn6DRwf",
  "key3": "3zEjCyHLrqQkYiissxXjhFrpvXHdQBKUnS7bT8k6pW83jnsmyhZbPvqR776jnTNAobCy4qnvW8mzJpEiQWe9QdMB",
  "key4": "4He2gPnrpN6NCfiKEijhoijyFsJwp54hM5XF7BTNc9HTcibJGTL8NdwncHSevTJ7V8imGRg2gmwY7dqGkEABEcJS",
  "key5": "3NQiJ9BnAZPDyG5G876oGo4du8j7Nzy32LpEDQ6R6YSmjG4GnDX24bJsT5YiJzfYAjLgihkLEk1WPwwFYTdZFPqT",
  "key6": "5fi39JAaV5NQjjDTtnYLqXZWZS5cUMv8GWwbECq4BsPsihsxi58aBCCeKGBJvNyQcCKczGiwFykiQciBp81iPaJn",
  "key7": "3bFAdftCXyEbYjPMbDYL4W737bCXf93omqxKbmfDWT2LzBSr6vSzPwBEbKkknJPrhnhoLvd51dv4FU3veBr6kj1J",
  "key8": "T4XrNQ8BYPYBFhinbS4rSw7MPWEGPFm7bAfdSiWzsnBr9cFsDPUXQBNc1d3i5QKHUQ9SiJoCxM7kRNQdE5t9uYL",
  "key9": "3zetuNFD9KRuCMzeAmfBsRBsTWE3P37K4C4wP9ENt6Nzy8q7U2fa5AQRhmDaH5VduxuvdFPW1ETFQE5QXGSZLXBJ",
  "key10": "CBZ33Fwjqgfc5W679srCGjF7FQjWgZsCmUPcf67DUnxQqJsVJjEGGkTD2Lu6qWu3inmK4GVikGGwWjyoLh48qmZ",
  "key11": "4Zs57zbxmS6jUC1KbAgrrSYj1efbtTrEHGVCVNGng5P2UByyWkeNQ5dr7UnjQUpGXXkbWakpb1Bvf3WobZwxFktx",
  "key12": "4XQGLn5X1J4ZTxVWcQPjutkcy9K3qorexiHhPjc4gB9V5Ysyq1PEmXZGSPWdU9dKVrrCo7YQM2ikLDoyZjnPRk9o",
  "key13": "2qMQ397JdgXEYyr2MiuUwe3hgdCsKLztF8gcR6iPDEpVcqoPzzhf9WdovB7Xz9iK7x96kLz1kE5pheiha9uBtFZd",
  "key14": "gzWxWdSvSAGiNyDjYGhibyb6tbZZJr4Cz1FQGiYqAGt1rELWW1yHjvNxkK4kTgXXFDmeFgfEsNXL6xPLGeynUa7",
  "key15": "rLwJPxxNBrYyEd78kS7CLTAJ9rXqSuekgHJRXnYjjEJKcYiNYk7nwoDrV9ib8ccVC3L6tgRuj8eJBjTQgfW8w7V",
  "key16": "3tR8BcZ2fzbeKZJozz9xwAx5VqEhzo1z9PRvQbF8BAAdY6Dc1wCGdbLX2s6WuHiUB3YqsV33EY8rbf7dHQVqJLRu",
  "key17": "3SbQY6b4bETvsHQZBA55jgV9jtbHTfJkzBMkF8tvtBMKZGdnPxCWSfy1s2facJeYm1F3V3psoRR2r5AfjTnRCq4i",
  "key18": "3Vtzb3Srk9Q7CPEaGADDWfNnzMqTw1xsQiQzx5Kbk5MVqa2tQo9WCZqecs4N4Hx926WBdUdUKTfFYX3Ffbvi2Xde",
  "key19": "5eB45ibjDiPxvYpiVeCEr4BYnumM66HM3K2JGPZxpNS7PJVrH8wiKgYEMNwGS6va5LUQX9BE89iZZhXLwqNYgPw",
  "key20": "URYACYsssSNp723ehxBxdZQLEw18Y7QUxUf378cn8mqvhDiL2qTNQDpc3ENJapKejDLgJkzbFu2NUNz5JcF4ouQ",
  "key21": "3D9V4JJuQJyTgSTVyavcraa63MYicVLcnvzJNXy4AtTrPjgnPwLjEwMi27QgTZzhwHZ585cSAhNRpmCYvYQ6AvWs",
  "key22": "5SsXdZ1xbbe2JdT7cbWMF9sRmuSRDtvxFUJGhxbGUneaCRCpzPxsLJxxrm1iacEGy6KheUWFsirSLWhFfwQJUMi1",
  "key23": "42M6crtoEqNCa3PWakWXjPaS1TKGfmJkgUvketbTcMf1gofiAC7qrE3SYL3egVC5d8vcgZfhx4VWpJfqFUg96RpW",
  "key24": "2UgK8tbNUknCUTy9o1VDNrshs6JLTigmS6oW26zFceRGNy9FtMGjjfcpCmm13gdnDP5fer8jXTLXAB1Jraz8xcyv",
  "key25": "KhtxcTpzY5iemge46yJT9j21FSH52opDv2xdmD7mNoZWC3kxaKYtBC5MaEjELvXmoiPXDHzfU21fGdjKMztapmd",
  "key26": "27ZfEXSsSg8qTEGyXK25vjzvktHa7ffRZZGgxbbqzeKoB44yrKkmyoPXTfadiS1JphR3K8zBx3tnaUfqZbk9u9zM",
  "key27": "C1HQ9XuwkgHJx5CrxbHQzo5vXaUazxWJP1xu7m4CRX7zTZXsNsmJeXJ3NjZRuGhRFgQEjpzX9tkxc5De9ZEsnMp",
  "key28": "33UFFg3VJvwrbi4TxaB9ndcFEF2a2NagNERB1pm3p6dhjKAJXcxJ4ia8pURRqtaWyeRRwgwS4XSZhYK2Xx6GbaSU",
  "key29": "fqfJBFaZeSFergpozff5qP4ThuNr7r1oikT4UTrfaVmCSkbjA3i7QDmspNTh1k4k2tjAx6ez3dQx4VmmzyWgKfC",
  "key30": "61AcnLZYU2h6C4EfmUAWfZ5cnGsGYJLs61HrkDXj7jB2mdXwXCr6wHoNBw9NHkzPRAMDx1G5MHBZDbPLNfHeuDKe",
  "key31": "5AHpwFayt4Yf7YdfDJP5pBYmQggPiJNELHUarMu3r9RaBCkPb2buYek52DLKm3b5em8xxA7bN7X52EcrC1WEVJbP",
  "key32": "3F4rHAjWmt8QcBBFZRmdqx24D3y5WQNzcinMGzE9AuPwG1Bj4aby6ERWwtcqTWdHaz8TgnX2gZZ14kr58yQHzpRv",
  "key33": "ZxmVwhaFtTNfL1QMB8q8M8E53iryu4ywbApKrVcVBF23bXUavucKxHBPi9LpYCKe6bLRMvoVbTuQqnwMS2DCx49",
  "key34": "3xoPpboujaqu4sQUFJEQroXnNWZNp12nQUxh3uDD6ZDKp6SZwYpecnccsUi5ekyMr5MC8AVEk9HQczeLwGVPrfT7",
  "key35": "56bCzVVLaYAMeACxcSAGjYcdFfDwvWEkLE889zRBH6fsGcmUopmioKcsBpUZKBmA5i7LxUHdMzR6w1UTQ2zxaVsz",
  "key36": "3itytu6GYX3bDy4sqWMqUHU73tKoSDFrVQRmSFq3ta8Nx3BgTCNKptHUeUd7hZcXMmTBK9ThfTiCrwGjG6pVGF8k",
  "key37": "4LgsC9hVtSGkVkqbRtCYN9wHWec5fTqfHJ7xMg6iEHSSRe6XgCgbw3HNnGRkxSuaGasK96bvaZtq6P4ATJZnPfLN",
  "key38": "4HXQV924ovqJ56hNvr6bguDegEh5o5hj1mf2pLQP8MvP2xbx4youFTUq57K4VLa6pV1R3MtFNPWyicttMJFBjuEQ"
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
