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
    "2TgjGRqNEjJ3WHVwAVuzkR9yDs18hKbyFaA6QTxTqo6pgzE1LHYnmK4nziCtYrY6vzGgUsQhcohMKj8s77vmbEta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkaPAw4q26sE6jNfJQWTKc9KR4nVsrYnhKMgzFngMKY2kYZ7GKv9gUtJTreqGS2aszDsjUA7giEkqsFqhUpJPy4",
  "key1": "2ZgzppQ1QuG69zgT3DhBEG7zwp6ZjnZCnZWc6tNgBauUNNvbDv5q1Nba3Pim1bjk1zqLduEw9aQjnSwzkF9u6BNt",
  "key2": "2YrwWyL9RHxSsFHFGBGzhtC6gDb3nwy9c8yjxxSkkNLEMkrLD7PGXQQMxLZQsU5QPDURWoKzqHjLTiuS3NfrqA3c",
  "key3": "52E4eCHFY667w2kbAM6T9tGeNKYQKGQjkVvygXK6obzyuwqvLyB7cssusbrCRr2HWx3QFjnwK7pJcnRkZjH6W69q",
  "key4": "4LgN8ofQdS6VW8EoAM8gTTAQXVGWeo81jG6aQxWLuuTjQJKdS9NcsfQhktBsFtRe3szRfxwit38mgTPg3gK7G8jy",
  "key5": "24PLpH9CdcVJ9VAxu3a5nRM5QcSLyVAgZerpAjswN2eYktrsjMXhF2azsB46AWMPExR9rYyCd4RL5RHEcaNn4TK8",
  "key6": "5CjeV3M28d8XHq9zqsmntkatjNjXCH6fWqsYSBdfx7sT515RJNY3sGix4YMFfof7ouqoZTeppBBzeJz2VcocoPxJ",
  "key7": "3wpePr7z7p1BFGQNSXmMizuLC7fAm2YHTWtijeP1Wu1gLXHF3nxWZv916SJ34f7eGUEcVf67exqVQ5BxMfphASEQ",
  "key8": "2wtzT3LXkwnM2DufcQJrWM3QD8FGdkCqSmK9DxbdLRkwJmEf4F4nhGvRAi2EojJepCBX7wGVTGyzQKvHcMC3yjt7",
  "key9": "51S3VLpCwwRRhJoYM59g4mTu6L9wNFRgHdFENLqDSBTQisXaMWYhuGQq7seB9f8WuKP3C3BfiGaRhAA4ryfPSdxM",
  "key10": "9jAbUVa5ivTTV3T1Z3fWsa79eM3VXiXY1myY5ZT4rsKwGG1JQGwsyKqqPifEMGDqG5raepEmHph3iwnbZ8xYGtt",
  "key11": "46m1zSXheQmKBnUH5dExJjxnzFyjNcYRsdc1T4GvVnzn8zX7W5Sj2ns1wd8Ba3gq9S8GeDdJY9BMxFjgQGw3gPfZ",
  "key12": "5aBRt7cV5yyyVxjfK56d812UmpjrWnETc4HJKB6euSBGKE1kApWWCPm8csh1dEsNYAeKKUR3mvFedU8sZk6k9izp",
  "key13": "2av4c4Qw82KkPQCCDKJunUR3c3rzGusTUMWe2bT7UkKjRoZtrZ7mJxvoihRcu7fZ4QQKyhT3UEC6fuEajKdF9ozD",
  "key14": "YNNLgFabHQfPugPty6zQXmX8SBvcdB2svSQs5ZVTKcyqLCRvcydr1WDeLJrUCVEMhBSboNMt7cCNEhn7wryg8pQ",
  "key15": "2BMTjLmjZtTisiEifz6JX1e7XkMB36nxEQyVrc1M4H38z2CY5MJb3bcLxLMUNrcWcc2TfwTcyH5mTgdWjco6hmzC",
  "key16": "4TBaMLLp3bFMhR4XVccyzaKQ1Y6esPstdYDMSmpGKCj1JuFeSFnC6sJdsmofxWNP1FiAMMGWY6XrkLcqCg89TQaH",
  "key17": "4n5ZFFq79FZKpt6aRstTpVyEGpgzJxbgDZwCquYoEqcXjRJZw8uqjVwGerngGHRPvcMXAhXAhzJj1rXsMCcCAgn9",
  "key18": "59TrmF5LNeY8A5GdVJPpwPMNmMo4Qm1NASedm9V1t84QpjRMKGfVno1b56hSVURGa6c6wBWwYhHfa55srYca3w9E",
  "key19": "2DB2hRBawoM1yLWiuAzJFiMZ897sUDaX3JzZogm9yCRAuLMwuxRSkbuy6gQryMCmfgRN4bNDPLqgJa8bhv6YqBb8",
  "key20": "5VxSbHzKdJBuX9Y44goX6vwKEqhCaEVy36yuLVNxDxyvP8Zsiem2xjM7PwhYokUcJnnYyQzQhonNPSUZ4vJRTYpZ",
  "key21": "5h2xdcUbnRBxvsrwU7xQNHyURZcJ1qh48FCaYnTijDSZdP5cRu3j4qmTr9dHjAvG22eRR3Dv8zwrxbmNikPX5usy",
  "key22": "4MiyooXJ7QM9q93b1fouoGngYJzvPF9xcEKZc7QFA8sWwU4ADguJLCJi2jy8a3Twu3giJ9htaJc9Ut5SUWdTLwV7",
  "key23": "2jw4TLwV8RekxAcjYWDgaur4eVutYUSS5df7mWTPrfsnqTKpHYVDYqHaZcVwwUC5zJHxqzPUo14ckTVVWXdf6Rre",
  "key24": "4ntT66ymp6cRZ3Yc4DX6WgDBUrzJD9hPbrks89vDGsc6RggnGCSAj8WiJ79wGsdPLdz6ejby94EbeBQ7gdT78eWk"
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
