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
    "377MxuJaT1jCyL6iBiL5sWuHsctX9F9YnMQXcA5FiqoS9LbVkdeQskfZH1b1jLiyQwEXfX5yox2xN9txDwj6vmWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AzQMEpkEEwgd3teypmgPPyEqK35pccGF1PYDWvHrHsYjrZtU63nhjpMmyrapKibPRT4EQTzZK7HB5qR8AKdaxe",
  "key1": "4zcb6JQcUNyNZpu4Sa5qm7wfvMmkmydUS117Rw6ezs7UU7axpxHG1J28hpPBs7cWq9crvMxg2iQdhi8WxhixhjxW",
  "key2": "2djo17TtD3JNBcx3ote77qdkddkZ5NWer14q3euYrDuXcZa22vapA3H6o9y4dkiGWVHDiTGLMUfUEXjM5wjQDMn9",
  "key3": "5SUiXfQWuEWDfCdNvoYeqCvuwLcWfCyFJRwa1aumkVWAW3mbMX4ww5Hh2GFED3E5uLJ2FrKrpDTqrk9VHgaUcexf",
  "key4": "472CC98WKMZjaZxqnZDymwuXmhxasNrLUbAN8VnDi2WqeMwHDc1eVJ4YRxqf11g2BpBuLT9E3yXXYsGPvzErt5K7",
  "key5": "HyRhZTNShJeKESrfi2hW6f2qKpYwDzZMNCuLe8Fu62DvvCYX4yVDtRnSjDQMpdxeN5nHgAyQQaHyPUVaPmjT8m7",
  "key6": "4vzaKJMQn6cM8hnWnZf79v6nn8J7XvnUvJV9J98oJYGWYPh9oKRzF1pYyvYGEDqUyeRdr4ttqNnhbUK3EvgRW8B6",
  "key7": "2LeKmmz9hvNZ6QtpywWUAvWMUvNuic7goP9id3Ga9xjR9nb9MGu2Jmn3DQGuEuQWaUnHXr5dGJGysuXKfifMceub",
  "key8": "RBWFwgbEgkeeMXp73yyqPNutybjpcZ8tiZVfku4whSCNSPgKHcTqp1xjRja2b19rEWY5hTX43xDBzPPti8NLUQK",
  "key9": "2XUqqJX72SvQtWTxJ9FRm1UueJZkb7U8vs4tQa3ksDzwoKkyhmsgZ3KuUcNSeiLRTsUrq47nji97nw6LL5XsmHi3",
  "key10": "3vGnDQav8NRed68UJYZ8tikSZGFFQuJBuT7DJoQC3vH9N8WUZPZ7xDpnfjnZfhXHYqzpWiQgRkv5xiQR8YujpTL4",
  "key11": "5CSjdLMij7tKFAb5TsVHoEhnsyTRPybo6FntS95eFcEHq1ezbZu8Fm9d3VPZnqWN9bcnHL8VKucKnoZW8g2ThRc2",
  "key12": "4AEB9eJusL166L77S3emj6mFD8uMAq5atWP36DyUA4y8aa1GQ9MzJoB48iZK4bmAA9dZmwrKbJ3WKAktTt8Ag4zY",
  "key13": "2kCtechqmwVMtdoXqzmzLWBstm6thHc8hkKSbYwyWFvphytk8MmEmRFHgzfpoSqeCyVPqA7CxRYgJR6tUeshDupc",
  "key14": "61g4HqCZou2v8vEPWEwtjBRrDAegpz8UmGbE6mMLB17vNunSVeCW98bAAroyYTJQkicXRGc5eDwgjYQVrFNMpYct",
  "key15": "5PWCKZM6Bj8cD9vo9x3FRVLYpTMzD1sxSiN6cCdw1k3cx2TUD1WkkPzEiWy1d94PpkWkZcrpzVSTiySMDUriUTAz",
  "key16": "BYE9THcJshu6iHDargqAxQYYomCcLsM6BrXTB7EAj3U28Zw8C74jjuctg7YRHx6op7Na8RzsTbMULGxuz65Pnrd",
  "key17": "2sCH3b2gWM5CYt4aTqfyEg7C6x8CojRyHKHiXzGogiUPHMCEHMPdPaWF1PWB2LurJ6jcVtjA4YgEGrj8PcTgGBxN",
  "key18": "5HajsE6gMmxYTiFUJ2yMvquEtmu9seBXykD6k3Tg1nAVqjYwCq2C7jJkkDWmZU9sVrRXULiEZCArPEw5QCLXHZaD",
  "key19": "4TG5TgNRmrKz6zfDQ9f8Q6FM8eDdDpsDxyKsUyBUGFTjXtUTkLor5DL3BYVbBDY57xSj5LxtV9yakEbcbwEFysfw",
  "key20": "2Pq413EzKtvdigryTghuNbVgu3ntiQuTMQea5veoiHAUFkJWHUoEH9xk64wNwXqQnKAvsnfQwZTZwpNP2rvPydiR",
  "key21": "3e4qEkCnHphJRQ43y6nyQsK9ArbBWxynGiWxP4u5mQDMVk69rknnLSQY5rHZH37C5KNV6qkxACbaUSj1FoQ2saQF",
  "key22": "4cMuzwix4h6d8nTfedieSEPuQB6wpTYJti87JVbMB1ubUmTAGxb8E9narXbM3bxGhnDUiiG1siGKZ9rGMp7BtBgt",
  "key23": "2b48GLbjuU3MJELrtXDqUTQLwNQr4sfT6dSqx4Vvrg7eZypuZ2WaZAgA82BH56jK1noouhksVB4A49Dvm1bkVzFs",
  "key24": "5PFbnSoGRh1kyYfG81c2XfkxianvA4DMheyGpS5YMJTXTYdqD23fEhZ1qKgkwjJaNFJks2nLwwmMkV8PtR8HMWkw",
  "key25": "3RA8MsLVPwb4Z8NbAwwexWB7N2yQ9MRt2g1b6g6K7CQu5rJ34VQGZRQmEM883D2FPm41fH6DVfAB76o2WfcYpnE1",
  "key26": "2WVm2ESnaUkJqaDRsAdM73Yax7AXjiQ54ihZQ1MwJvVG9dQB3URy52ApXdsCVoX9GK7URqY7ErMv5BQ8LpGfhfc",
  "key27": "3hLSf9Zra1ZNUBrAhQfrw1aEVzfDWzRro3MBvc1QU4VBbd8YeRFUa8UnjJ6Ae6FNkTYEWuqkg1EYe7vBQ4ebfotU",
  "key28": "3jeQcGmXDWhH9tAZobyWLEeuo5Rc6CgX6tq1EZAsq56ofKyWVSEkbmQeb2Y8DydFetQCZ5DihpfZzeRq85TQ53UY",
  "key29": "2BbXEFXRFV5G1HNwWnfgQ8GWyZEczsKsripS9HfQHncqQTSvfxXFQEsZNvXoygTahALA6m22Tr1jhWi2SVwSPzYQ",
  "key30": "2NNZ4w4o9mwGfoEFsPAhwh1V5jTrMT5LKioodyQAP2MpEX3uPRd42o4khV2pmjfGNoGyZ9QdLr7A1bBBnQApen72",
  "key31": "VpsdYH5HqftvC5ujdvzeMGpxxxaetvVDa11hHFrki1oLuGUsTZdBpLmY6vMVifLaCWVAWjQBXYrdLskHi95i8N9",
  "key32": "2TpNKPT5v1BqbSjnoNxXgQhD1pLUUaBZVqTYSQdnYSAxKtx1XZJ91ZK3aGqq6VWJjTkqH7EK26hMbLCNXpDfmDss"
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
