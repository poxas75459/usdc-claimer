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
    "2ZfAcEWRne2ToupPozQkZr9VZh7kBgTokGDPe7KmPVMFt3rGiBTCqA7qgKwZhd1waHRDqJe1CY7hZEcHb4MLbJXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hLuE4cvTG4SV3m49e2iBjYhHtvn5zaVDNh9MWeDVBQ1PT2m4hWYpBXGxUVYU1hnkcf2RU2KsEosHVfjTGyM3Law",
  "key1": "ZWk75Zp5EhPKVF19Fw9G2xoz3dQoDBvBNq4vhUAcMYFr1AAWAigHYJZyYVFdoBmZMvRnBUZzgnyuh3duQK5KXYj",
  "key2": "3XDdPgu6wH2fSoXQqSQSkX5LhicyGKZ3aupgwhHqGtmBXhp7KQYw3jotTxQeqfLLCGbS1yraEjHKkVaKcg2zgsgr",
  "key3": "3tjtTbFEyXfbaRMgxcTZmMXu5w2S7Rfirrh5Pw84nZRfueHcwgeLsNGKtnJCM7up8Beifh5iT1JL7gvLBTck3bYR",
  "key4": "3i4JE68ZsmykhgJ6aYQw6CruCfuQ46R7cZPbqYcPWFVDen5RWgwzUeAQ7kB2WupRvSt1zGVG2iQkhMSqV4AuvkaE",
  "key5": "4ZKV7w8jBXeZGUYFYjiccX3mJ3JNTihN9tB3PJqLA5nnUZjgEyGMAK6Uoc4sM4YEoG9wKX2SVMVfYibZtYU9ed6h",
  "key6": "5tXA86XrN43GoP3rbMtmmHiy9EGjQRKDAdiEexmBAWcNjubRQEv356kg7Vg7TjV22X3CjTvwpqNt63fMgmnD3rA8",
  "key7": "61mfmhKZEfuCSwwvuxBAokgWgMouRsqWfseKjR5TPsYc8G23xwkKWeMHDZSQUYq89GvQh9JoFEo4n1vdtH2kZr4q",
  "key8": "5Hkzeon1UGUQgtvMnzwJ8Eth8zJ7jcxvxszPGyoqA3J18Yd9YJ18woWvPCoYqE1394r5cofJTtKrRh2CjUCAFcwz",
  "key9": "5hiMCjt8JD21qG3WH7QEhWuCooiE1aaR9YUAcaiz5ELA4Ru7ifKL5p9PTkEJFUpXsh5qD4hwWnLpkvn1QT9zr1xV",
  "key10": "u5vyo7F33B88G68hYrDevkFRcVaTBHyqhGXCYAmF5NUTACtaFKNSc5AuSTM4rtgrXgFFEjtffSg8FygAeynaS3K",
  "key11": "b4khgDGJQBH7nTyW7HN6VMM59Em41xUS8UkDTTpirSnpWRYdtDFskzakPoAdyjBBbrZsSjcJKD1mwSmWz9FqzW7",
  "key12": "64JK1aGhhCwz4EWnJcnf1Ez5cCNgLMTpVPapZ4PY9gSK2kLjmCydKRyG8Y68Pcteve3gaAVk6YW2nk25ipdRZmjc",
  "key13": "2hr7RmToMiWw7vqzKer61mELyHyx6e74EnXjuuhEU16hcf2f3bDazphbzLotxiiVAKJR1vg49p1AN8fvTt8ipPvd",
  "key14": "2hL89t6ziQxTfxfS9S1xkcgH4vwVWrf6jBpgX1EeeLSg3u6JmMQgGSDADswDRRMqH1U6WDMgCzZQk1ZEC1xjBkxs",
  "key15": "3SBfVAWJpmLitukcLXu6ENufZnHPSgjAHXD1Yj9mKgkBQSVuggaVJU5Dei39xuipztgHGwb286T5MDNqqUGFCm6D",
  "key16": "5Xar6nER1cwDtoRsjAW8wtG3xNupiWjpZGGMzk1f3KN9Gz5uwXmf7zWbxvtoKco5UxBwqVMrL6Tb6SECvb1psY4k",
  "key17": "2zUuPFjHnyDLgxb6gLRBeyu7Q541dhya17vyyKNUqVUNWnBRfG8CvHDSq5VyELTb7RfsesTFhutbPdqhcRUGy4ik",
  "key18": "2W6etwpkCgDYKpkavGPV8LcEwzLDzA8yZdiX9GQNgyVVL4xFxrkUApTdcs1feUyYtYu36pnYYCc1ndR6Vhjk3MfX",
  "key19": "5jNArotrfMUKPBy9VSc7KnMdVzsggsGeTPwUVQ2skUj2BHej75EU5eb4YD547yqbbTUsebneBUBMN2aoXxq8pWpD",
  "key20": "2vueaKhnPkYw7PRUxjsap6Z6NMmbgMVebHVZVSS2MAHKskC81rycfjTEt99jpb9ronHiWiM7AH7anFn5P574eAKN",
  "key21": "5WDU1S2m1Zn11sCEnHqxp44QoBKtzaaT16xRV8FkJy5x4vfxKVDJ7LeV7E6eCcM1dMvqqVKEQf3nUzNoCaoRHRa",
  "key22": "24MHEfALSJ5uLpWRgzfE2jrvsoDLgpo9WvGSSoE3XZUFrEHQ54zvAPqN9Xirc5j9xsK1oZ2s9jK4uimGgVeUi7EE",
  "key23": "26tZyyMHWE56CCDEbxcQPnfP6L1bi2QpSNehX9yAQgzWD6FZfUDjWadqBiC85u3JxjtU6b1KWRzQAJ6gopZpKxaV",
  "key24": "4uUksM2HCAJndcfrdvyy9rvUofBGsVMn28ZCSEJXKmEt9SbJSBFXASZZ8r9Jski6fX7hgnveKmRSRYWnQ5apo9G6",
  "key25": "WZ5DsGpXCRKUEb5gMrYWwRgaCPZ8yNPxEp7osWnYzGYJofQSHcv2PNG3WBFJvHdmshzhtsUgonVrKzhKbUbKyCm",
  "key26": "2acL2Xyzvj2jkisEg2fEoeVzXpAobxdT8WVKgJrgvRJjJYrV78XqcUb3h7kn8L2y4vYz3gV8gZVUH1r2FB9HVVw3",
  "key27": "4qugN21yRTTSv9RtLD48VcLd9vwG1sEN7HbTeEp2vsXjavbKJ7346J57qke4uVAVuJqbywv9j9yXF1zPbWg2DBdy",
  "key28": "5NLph1WugrcyKKs3bkAVWM83DQrTjotxGxSXyY256Wb6JeWgYzW653YfviLHx9zC5n69mk4dgXLiYRmkDaPCqpuj"
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
