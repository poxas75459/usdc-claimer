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
    "5bYTrbhuvENupU2pDsbtpK2N19N4yitC93ufRpfQZWbpE1JwVSNfywV23LzffSAJbvdPLAyiLa7W62kkQSinJ3E4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48YGCMPGkz4YLRp9hZxsKP6tuGhbw5srsq9zQaYQuX1MTMmpnLqu7BkcqyrevLUJDUGJD5NTe3NDhkC9R1GugrMR",
  "key1": "5VtQdYcBnUKXPpRvTH8yGtq7KavLJHQTtdKsuUNTXeVkrB5dNMiSxucuTyotXfY4RBtyNVYx3NectNuTw8G8n3DS",
  "key2": "66kYKQJiJEqHLyeFLqCoFYKqyPb7BghMjP4aNxX3kbqCaCXgLENWYbr1ry2G9p94TX7fC53hQY2Pu3es9UAQnQpE",
  "key3": "4HiBMo1PW2CcsoozQGzz95h8SCzPauzDPV7V6LsibD9PtzdBFtGwzXcMvpFyGjMRFMmRmjSG52RAPauw1mMiLqAP",
  "key4": "3Dwvu47yXDzaLR5GWKHqt4inJCKohFLYaqQggQ9aD19s2XW4Z74ztGQ2DcjHc4dijeNc5a7bMK1A3wmJs5nCw1xq",
  "key5": "3oMvfwLQYtT28yPMSW3LWh9xdrF74sydM1bHtuXNhaKZZe2KK69YPSyKrqpdAmCKW2jsyDUijqwhqADKAYhD5Rxq",
  "key6": "51A3f2We4huj6VgzLqKNsbwxxdWtPEXPPs61ekuewFvnU5SXTSzm4U4Cee38eZE4JbtMk2gm3y12zJWygfyHxzJH",
  "key7": "3ofdVJZgQc1Ps3pEbEuh5hMS8kPRKktSEtq7e5pTT5LxDssyM4D3BQaFPgdNak2vLW1JEiC6DLowoQY12MnM4uyj",
  "key8": "3brg5vCQP5Dqb4E2gibLoniGydb351mDfmg2dbZvkqgLgodQB6ZCuNr5JKDdYfhHN7nFsDR5d4Uhn8LCvjWbGsJ3",
  "key9": "4KW295ZU4XdgXXpfrMpVsfdsxtrr1vMmwNBc53cKrD9vjecaJu7qcD4R4Evy4cmfEPWcaFJMSj9VWCnn9AjxMy9M",
  "key10": "3sQWKJsaM6PktNZLWxy6sYmhC8Bv7LMsDXNana5C2EBSbxnqRfaRdbUhRfgXbWbDB5n5q2PhH6uvsZvrGKHeB164",
  "key11": "2KQag4i1WBnJnFuhF89YBs8wFNdT3rnUsLe96PUtNM6NmTSg4bRkqf4tmh8HZxJMBVz34vnqcSiEzJo2bVgtWgHt",
  "key12": "4qsvCPFDMPVQvMtosD5BZ7twLH4RDFtJWBT6T2EKs9hfWAcoFUrFZQSmEsQqDwp2m1J6Ai3EeGo2xGKbwyuRdVhL",
  "key13": "4MTpUKHoVExLa1MS2L422paFeJdHh2AaZNGgZtkJzk3tcnocGPU2xfe2NdSu2BRZKoHbNbNKJgDWzedn8z78Thm8",
  "key14": "21FoiSRR9tuavXBfNYgHNZgXceGuk8VUtUTeivDUNST4cfJwMMfJo5Bon2vittc1B3N4fKqfxaYvBf9B2g14mNHE",
  "key15": "36QnFrxRM6X6sQrUXh3hAWpiGntiJS9mCHLsAF6uSSvL5GcPZ6XCWDEhhb9EQjwr4LcZGyHmTPq1KYnoN2Pujkyn",
  "key16": "eBuNnKu6JruKTx5fovLYd1bdFULgTRhYCAa7T66kLfN5RSENCh28hdZA9A7Kb9DhAf3TWUpg8xQk8wXK8a8QmvL",
  "key17": "5wJZFc6EBDgsqmmXEbPgj1QHu6CJJkAdZZgGb1u7M8ukfHppnbDz4oKuLUwTDcfZRwVNz6i9342XUAj7VZKwaiH1",
  "key18": "3gmhgq8kM9LTGdfMBUpZs5ZpLvatyKYEJAf1c1Y98YS4cwYg8pg4USMhZbeJnEoTvWuPcjVbGoGxfcjnhiF6EqXv",
  "key19": "2Z4L3MsMnB3hM7QjFkyyLEhngBTc7cnHbHsoZMLSCz6owdZvyvUAu28p3Qrm2jAGejkoL7ZUaSGKd8rBiL8L4RWi",
  "key20": "129qsX6WWxUynjgeR9txZ4U3p1KSCGfcjg9sZ9V4UaAQNXH8aUyjtX1pLCXmA53Z1nAiUwb5tnVdqbaXa2J7VvW5",
  "key21": "2edfdpZuv9qohjWcFZuoizzpctji4sidEoEMT52FGGTeDP8xdXfZdt5uhyAFgbD31FMJfPXh3ScbsFWs3YScXPt3",
  "key22": "67PhCT6rpFsKiAMsNGhAnN3tZ2ct4b7EXVK2ZbQHf6RFJydgop5CbyYifFjJ6E699V3aBz12fgNCxAPfSVu7KvXr",
  "key23": "3oLZ4aj5RXSP8VnLajJrvQdq73xFCajPjSHn5sM4m7oc3mpchzbbSfyH6or9fJPZMg8TFkMaY5wWAeY5PdF7yZz4",
  "key24": "23aKSP3DRTkZiRXTqdySYWAUkrynFj82g7h35Tgto7Qw6XESfZ5Sd8H82mCa94Wy49F2KNAF9zNbunWqEeWoTxfs",
  "key25": "63VRWWBBX6j1tnfySBuWoAZvDDP7apxHA2h9d2peXFo7vTBqWvFjuwNNzMphNrtWbn7RLgK9p6svkWo5WrSYWKJX",
  "key26": "4GeBiRrc8AzXpPj4gt5DA92bkDhfBUxe6cKfRcjjJ55JBiZXV1jgDc3uhJqfbZA4UTaT92aW4jtB4tTjo8cBwpzt",
  "key27": "WWQd8BG9zdkhRQKtHqJYa4PADdYpmBjVBCVXAMqjf1tticcgpawWkxcTLT6ftkwhzNjMnbdSuqoJV9v1XTjjih9",
  "key28": "4QNZEM85pGNaUiN1RrJu2Lc5qFuc1GE4Ux7XR17YziKmiwKjQWr4SnECG1a57ycKZUeNVtcaT3EqpzgMKKSYVuKU",
  "key29": "3Y1YMYwGvMKZAdMBsah9NQ2rBrDSqWjjUfbRQQWwUfCN3SUirdp5Z46rdffZkxFakZ17ofsE5fN45A77mBjgM12E",
  "key30": "2ZyMiz3Uqc68kYMczDKkaHwgxw2hZQPEYVLCrL4LGHZnUb3qCCMurkvfsGCwBttZXp4poJ2KTWsqtmQJfzgKmGEm",
  "key31": "5YCLCwvwYjgcGHSiJ6uWQwyDPUcUELQJmcD9PmW3dgEMga5eaV3F1y2bJAGsNxpzxVkRXZPm837cmnqqbtsoUpCZ",
  "key32": "3DoBGy9oErB3fdxgiUQpqxmFqMtqpSaktuh3CWeHCcPu2pZQd38aaiC5b1Fq89uSDu9nYxUN9d79mSqtnTi6LpRu",
  "key33": "4XqDV2FSL9LrrAgq1iQFBiijnwKqynSsqv79yWWeZ8H8DNAJn7HX6K96NY2duwpASzKr7KFXTENPe3Wg8X6t5Zz3",
  "key34": "5RgFMaqQgqJFS4vYevYTsrTAyheBVe45iRgSNJk1MwpjxoDuPLQvNDhWjCCoyHiipPXBGHKQAbzwN5XkQbdRZuDG",
  "key35": "3LzLqCjepeeUGKdyvGaT28DVdzvKmL1B4dJtwhF5NFppGMaFtqDvPnEzhFR1qqdds1nrCauNWWZitCbQPhrUL1E1"
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
