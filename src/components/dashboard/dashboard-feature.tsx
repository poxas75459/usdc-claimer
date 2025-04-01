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
    "4AQUnq55Z6PUvRyygMuBbexhASRThiAPvL41U2EPNFjcgU9CFR9z6YfLxguVGBuKYuGtpJyQkAPwpE7j6YPoZ7pS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GWQnoSgjQhyHCqb1T1dCnyoBWzZprN1dPVwyFUeoLPEg3qotA85foYJ2hedZJsHBgdHtUmv77USStmd3FaVkBe3",
  "key1": "MYM6q3567U1WjdWmtxDD4Z5VvRXr7Bcbx2b5YrfHynUq382b7x4vwVnsGT9wG7nCkvJgBGyJcEdz5AHqbmo8bK4",
  "key2": "iRN8DDqP2Afmu9G98Ne1FD7j5VkNQxGM6L2r4J4rC2txDCGTCqWKiziE88q88Qp17jEGRXCtKpaez9onP1gBJhX",
  "key3": "59Pz9DR5XCmB4RgrFtR6BK54RTsnLKzLmd5M2RjenGZtNcuqtf9fWUDEWHPV4iGin4corviaoLUDZdCUiLoCXN1k",
  "key4": "MKuBLmeCfVan79aTgJ16bXfGqs84FMKuH6TPPFJdyrh25QfA2DR3jh51jGaQc7dTnAsg3VnjkKpG2sYJ3yqegk4",
  "key5": "5EmVkSr22eYqC1Qs4oGzWAwGaQh69j8KMKx1ER28rcfgdqBinWC4Acyn2CHVLfdHwLvEempEZmezML2VsPZ48sKs",
  "key6": "54y8o5QCEJvMd7kXyuXFecFx4WwBjvjHkK61csVCmBoR3MY9EqS4sZRKRPun8KeiwRvrUPxbWykAKempFrjWi8NG",
  "key7": "4f1wmcWpH88u1dRQrYD5fkqLnyaHP2Z5gvRSViMsPbbutosLt1JC8rtQwKKGF7Bj4jCx99rPgHSkoNm3pzpZwmA3",
  "key8": "4bka1MKhaetmawALiaXhGtHFbvebTc9NSAVyXZU4B4GTQSh4HQGZGy8KQBge4DgrttMcVi9mSj1NDJsg4YquDN4L",
  "key9": "4Sp3R8YKVFRsq1SXHYSvS2h3CddAe5CXY5m5Xxjndehpz58jHEjCESFhHSj2dRtVj2KwJgoN27eBxTNt5QQKLF8w",
  "key10": "5EwFZCHxvGhgqNKom3K7jnWB8F7GcfZX6XhUMN6bQUH4QDipSQXozt5W2hRDnTfGdD3ZodotKpebz9YbSXn2HXK2",
  "key11": "5SKCjA1ZY1RkyKhyNsef2ECpx4XkeP64WEHTuss8Nwy42yU9J5c4CUk71uMrWc2jHrrXjskwevvk1achX1gzbjWD",
  "key12": "659rECULm3WGqtnPWkjvJVgJ3wYHFgUmUhCHPvLfCw4wrNH7h7kyzyfsHas1CHNuFG7zhV2oS1tKR1BhtBohpoPV",
  "key13": "2fnRf62smJHESYfRaVWuDhQe4FRNrkjBLC167hLqk9TRuC9Gr4dEgvdYJH5icVT3d63TNB8mdFaa1kT2roh333mk",
  "key14": "4BYdNYzXZU9BbX9ZNBQCodf4LFjsLMMYHCyYjs8nrWe5c7GBfkdL5krNsVL8W9cba1qw6YjsNQ446JiWuJxVxrty",
  "key15": "27vDZSn4HdfupNHhQP7Kw8i6oDpsTgApbYipEUytAabLYwTCXjN1YTAahcz1jXe5GeX7XrvdA1DJmJvjrchiedf3",
  "key16": "3sqQFhQDyfcMmT2WPFQi2SMUn4Xv2H3FGf5Ys6wtDPFjMvGjWkGreKVardHfoHFBJuLUP7giqLa858t6oEBCE8PG",
  "key17": "3TMuLt17rY9rn7jUVj3BjZQphLqVWmNrxsmPaB2i7L3ggWybuGiaYRAKNdpqLjoscRngWcovKGELHhXMGQ4xYq4y",
  "key18": "3yquwnW9gyJ1L9euV9hDEYjhd8JGfwgQB51vGQBsWeGcJGB7kBLj7Bzc5N7MwXie17ByPPKfykKxJTtmefPFgQA6",
  "key19": "3wTfTH5hKmax7fsLGdWJCfGDTdp7nuK1A3ZTG3muD1QwFVtYveXkiWkdJZquuJhsFpRRNyFASsZBYuoAY6MuhGgK",
  "key20": "5vBo7ZtLkXSHyTh5d32BDzqtRSiNwdMsuJU1wtvkorsjhR7aaRKCEfU6AraeAAyENnDC8o45TtkKe7Hky4KmJyMU",
  "key21": "4SqhB9SjSDuLDA4U5cyLS5CP9XRLd5rFFhZohDYYRuc2dWn6Ma8GU1ppcXx8vrcV5qUZoKYitMvCvJEkgSMU4xDK",
  "key22": "5Ww7ScijDWVoVnFvJP1mvRsNbLNnMZUsmsUjv8QbBZEQEQoENSJcDgZQvwFtpVizH9mYCG5injUSPaJduBiNzPn7",
  "key23": "4bEbCXHTdjeps4R4k8KTxDzDHdYRhaYEJz1iaTsdPvT9bBtG2acWWDfjntnUGrdnxjrjkjtyNzkzD25ZAcemCPTJ",
  "key24": "21weCUCKeGQPPiN51V9TcHu6tDHsoZeRFQpcUcS3Fi4XYoVdSPgXAw8GKrUn3p2d6EGywLAt8THGEhZULe56C26R",
  "key25": "4MZbRz7e3V3VXPULBf113tpAhaaUxUGN4Gr3bcn34Z1kmmN8oG5DhefaJCSKgiSFG8qhcgA4Air2N4DmiKWWqjXX",
  "key26": "ASvmqMkoEBqDV4sEwuFg3vQkqDQVQdxHzEGTSTSFPykse1fkzj61ikKj52m6YBdh4cN7mKfbbCfSV1kPc5BDKQV",
  "key27": "21BAhTcX5oM5Awqu3mURc8RJLnoKh9fdTnC4BFLWL5Ry2sQygqqVTUKDx6cCb5ga2RdyzecEHjhYQxt1qBvwHfNK",
  "key28": "3nU2a6BEZoX814VNDVWaiaKwYaLQkdPF2tc4YmU9khaW8HcoPQmPmtDFVhRLy2rQQVAs1wBiBygocvsci61VXtSY",
  "key29": "4VsnNdM9tHT3RSSUaNoe1tjhAf5cLKzmQDWzyK9iTD14LzUvU12raVUDrXndroTT5mpZKY6svnkYpZrUH6YFCba7",
  "key30": "4N2S91y2nCovy6GjbejYNZTGDQNTsSUdhYovTGd62EpA1WtfnwCjFxggJgYp4GfTfzSCFVGYbERwC4CVSuLX2Ynf",
  "key31": "MXDdZUUzCq74LN9WXfUUQ7VVpfci3RFj4WhqL2299uozWD4pBzKnq4AZRYLFuuwzkDpRqegRZ3aYRbU1Qg6RR7X",
  "key32": "4JuNYFmA118kprzFBPPCdBuQ59ArQtG9MQ8QKvMH4hnF8XBrJ7HUiySJGyrDxzYUvSnZGNTcnSgGtz9Ka5XsfmfJ"
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
