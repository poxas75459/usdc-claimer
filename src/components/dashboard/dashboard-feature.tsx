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
    "45Zk1jYo9tZYHewnCDDMQzmBw4xEibmQgKLf17CXJvoARHZrnTjWEXbrBDtHhQNaLFBvgffqu6W7Bji1ENxZV1Qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vSukTzg8it86mmfFsTgEH4iBjxzNQAx9xFYGJYj5sN3dTvMmoGhWdjCQQKEH11qHUjaLExr9H93VGxxjYYatDQH",
  "key1": "2MLfFaR9CvyUNvULMuT9mFkCYSdt9fnJV6aptJB5WQbP6Mk6p1Ccr2L4Q3uEGuokDNHqk2L1jmZtfF3atK5PLnhj",
  "key2": "5BZNJVxoSKeoz2wZubj9xzJVcNYWueSukXiiDiCgCN3jUjasYFGbsQBCzLrUxFXYmsdjehjmNM9o2nTgwtrs7w8y",
  "key3": "4S8qn2Lp1KfjSnSrFs7MmfEL1ew26noW8pVWep45FUGUPfZ3dYurnm1WwAN4d6naTv9Fyq8xmbaynGnSPGLsHomo",
  "key4": "2vjr7WPBDMJFSgcGPM62F7uDv7L9mTATmfoECuoCPfX9BrvF7y9d9WH2mPGtKwcw5bS6NkJHExrHJp9wU8zXWdfd",
  "key5": "zmouRxXoYNCBaZEj9v1wScf7Vp4SMRozpV9nigx2Ex8PXqWD4PwhuX1oP9YwVYG3rzu6KxciLBSj7Tn2j84cZzu",
  "key6": "3enZmhxaRR4syB3Bw9eavKCFTETqarYQSFb8Fv8KoeRuez3Q1czyZ8J7tQzpHG7AGStZRM2PsNm1VyBNUBZdWqmT",
  "key7": "htoSs7K2ioh3P3XhD9mTHNC6kGtnmvb3qFQmGrGdtwTzTajTeKVfU2TP4LaV2PqLknx1GmZmFUMTnD1UCtLBP9u",
  "key8": "4vxMDkX1R6q8VVvVqQ8cGQWmkY8YPbynrjgDGiD227iJ5cRhV37w4LwmfLAcbbP8qAmV6XKCC21uRbt1AKEyN1xo",
  "key9": "2fswpV6AAAWJhaMnStKbTwB59r5RHscubakHqUnojyjo5RpBfpz7QnirD9wMWE23WRS1T6XsCV1nRhyK1bbtKaYa",
  "key10": "daCighVpD1dz3Qyi1zMRsWFrSxrAkeWUt1BLcs9rjaoo9As9oYLJuVfdLsAjnGXDobW7GeXdAPQFtN9VzaxGeMp",
  "key11": "2FY7LbeA3bdC95ktg7taif9Nu2yaH3BUSeVetEzhUJ3vuo4tpCHEZM29Rbg6r5C82cies4bhXFSxbzd5g1cur3Vr",
  "key12": "2w3nrQCdUFwKpkmCRyaPBLm5Yjvks8Auy1Pqh7bqhJpceRByveJgY5B9hVMz9yzVBABFCbdSXAAhp7cJoi4NiTRp",
  "key13": "Tcv8s9wkPv7UwfqQdPiAgh4BG87zYvZW7EHCKDCA4vay6K31QGuyfmRvM1D28pRvhgx1VUeMVCeSGheEhdh4Szg",
  "key14": "5rEpAiYsQ6JFmMfPAGgDHYjnhTzntjWZksk6X78HA6DjZGsrpsYuoZYJnvZ3siP8K36pS19dY9aK4ZPaKmufoSGz",
  "key15": "4kVAXx97eYKxWy7rMaimpHuv7R6Yn2cPYqH1cv45yecjRToTXJvbSvc8Bp1SXLNtXsn2cYWXmtn6m2CnXp7GTfir",
  "key16": "3Akyz4MXxqgrPcrurcEuqoVMMPurR2rEZ2MakDdBhJjGdhd9E2WgbW8yGJZbZxfe8xZHTH8PHN26xszN6a2LbxxP",
  "key17": "2z18RbyyPkRSS4LQVnunJaQTsu4U8PDZ2hM2Kv98HPE5ZiaX7w9yTimf3Z4USRR42oqjbHcRLoX2RqAwt8u6onaH",
  "key18": "6nu6i2LWNZod4ohm7QDSU1gMZdgQBxCx3ouamkmMrKegyLAcDs9QyjPeQuv9e77yvSJM8DemStURxF5ST6xkPSX",
  "key19": "4b1JsAmopMg4oQXyPBH3E3Hp4SyHWGQiL5giFod4gRVvAJsGPUHAbKe8rHLeEPMBGqaHhPn8ZBDd8gtoHBgQGYAG",
  "key20": "2s9SzDCetpJBgRMnzGChGR9F4b2ioZoLwXwZpF371NwtKKpjm98g3x68gRJ1fscQYS1q5XiPqZsbANc3tkbUJdf",
  "key21": "65qnNDj1rCUBboBBqsVjtUmNX5B7AWjeA8m85M88hFE5cWJuA8qE9ZeB5EKCLgpZn5uEHHKnwz2qufoDAGfHe7Bb",
  "key22": "GG4xWYU44tPMAjUQ5U11GCdQdX8c2N2NWMs8JVpPAhRvdGEqimAH34tjcwVvKM3ixm7j65SwX5rNpakN8vteXrP",
  "key23": "4tcDjKYLDc3sG1AFaCcsxwLwWwi2DYmbdrRgvUqRYVEQFbrYymHsQgq4FCWyiqtGNb8ZXRRtH4v5NQRVU6KcT991",
  "key24": "4SEfqbL2CQ9J4iDhWMb4MgTPKDSp2uE8HfHAFYVt1Dg2woXz714vEZB5ep7dSJhJNBt4F2keCQmxDRJb2VdC9pQN",
  "key25": "h1pj1JnipHpHFrcrrDhEf9F1eEJehpEuG3LhXSvxwjyCjV4d7Y5VS6r2VZ9fqqrbWFDzjTme56sfZt64gDqQaFi",
  "key26": "55c1pUxHeZNvyKKfhnF9Mkd2zonfy7xpM526W5bTfUHfSDxype9vSwssx52rzWUUaTzH6YAFyj2XGVidSTLAx162",
  "key27": "5X9y7CJXD1xW28EKf1PMF7gr7TVpBuUKZoSa4hq9rgBMBeymyAAnrVeeRgqi3bb1C44aKBMtMcf4BuUCu34UYbn6",
  "key28": "2qN2Dh8vvucUjHJQhvg3HtFKH8zCc59kL13DxrM85LmL5VWA6CP34fLt66Q6NVxneREg3wUy8mbEagZbk8WwV9Hw",
  "key29": "2LmmCHVDiw5sQ7dtjhaQgpSTjFJARHUQ6zxjFuBtQgcEVcUiuRtMv2bHJXn2uDgkhbMpi1t11a6iz1ycJsp4GkNN",
  "key30": "5Ew6jXywbLydM6hPop1qcy6x3Ftx3GJN9KvJAnP9TfLvKGPEwW8iYbZkc4maM9F9AhXdaWUo1YwnZkcMUuNVLHQA",
  "key31": "2F1Kniq7du2B8JmWTarvKxGxHaRajXYRCxbzQZrHs2yVKwXLz67VMPpGidUxRUpQFZTNfzpxyX1npiVDr3KFzJp9",
  "key32": "39cVB89oQEtgYP4wM269ZVD9BczsahxkQYFN3RQTuRR5KNhx5J823aSVjMfkj2Dc4GDBkmV36AJHYxZUd7L4zZs7",
  "key33": "c1eeVyZJgeqqEk16CguAhUPcQX6cKLw1zJQCCkmyomBGcU38eMr2e5G5fHtKqzdTLQAA3sKWParhN9Lskm81JEb"
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
