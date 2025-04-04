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
    "2K8bxbpaeBLYEpu4JzUTJb315es2fdHyFJp7RCF3XUYcy7dfvNpFvyJ6VGPNcEKLVRUTqKSBGGRWksGN2tFZm4bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MpzbCtYKGNHKKSMc3PwmR8rAMUec5gi2HXRoUAC57XAtFevomvrmJUoSWAwrhucTpXY8YQuyBqyASbWwKMT5SeJ",
  "key1": "2LY2QJyw57nKVvZQNUPRQ6jATx8ZPSBTG7zM2qJE9nFKVaaghQK4EuzH6gP1Ua7tCm5t73Hpzp2GzSu5BySQCPj3",
  "key2": "31jwMsR9ndSmzuwxvkRXyfv6AbLmxVMUfDXNZe3LxBeyWJRtLJMgcEHSCDE2656zcmT7MwguLZt1xUoT3CGuY2x2",
  "key3": "64MTqXP1C3HYvWq3cqnzy9XoXtTU8j6fq5vUCWGGo3vnK8HKxD3zyKqz6FGSShNVXHYTLyoBtjBpSgsiaMC6L2TM",
  "key4": "4JgEGZqv3AV5PTPUcdW9n9mbpHykEuvEjyT821GeQCdejTkQEfNoJZpChmKK61phLjUoxETMmit1KMMoBkkhtzJX",
  "key5": "4qV2JfXh7mSpSt9z5XpQGuAtJcuxaM96cJGr2Rr6D4kYe96Gn96yr5deEvhn6EnE4cQDu2Dx6rHe8sKzgqQvtnfc",
  "key6": "5SnZ7Awsr7nV3NkFF1u6Fu1a8NfCsC9fq8x8JoFzUu6JQnQ2pKG58vqJtbPr8btQRzyqxueM2ZZaHENi9vDkyQdB",
  "key7": "3mk4MutUwjb6adwvmJZjuW4479p3JhZmV2d6hoxTb46XKDStNiiaZCW9tJMnqZDK1qHhd8hj79JLdGMgYFaVk4e3",
  "key8": "641e4Xvrd9k8wxtXqYSSEtxUjZ3FFUut2xZKNHmfNwKxHXXnpRpFqbjovcifJZxbBiM7SZUyduSw9dCt7fhJRKVt",
  "key9": "5QpXniWreykCPfnjk2YFynwJecnpLL9dszqC17wwMF9T9S8FypRSkotyKNYL3G2kdraxBBAEj1oGSHjpdbheZ5hp",
  "key10": "57YYCtePRatYRt291hPGs33x1YnNrqrZnupBdHkhtchgDjx2ar8V4M6VVJp1nvEBwNMnBKz6hN4fVNBFE7Dix72W",
  "key11": "yA62RSuRv3MgLnXesJAiuV6bG5TaCoZCwueNq1oYag9MLGg91guh8BPnsUnsnruDarTSDqUM4xJ9TbHbgrnVgmR",
  "key12": "2WBiv7rUziYnJHWWfT2PG6XVEARyo3PmJvetQPmuAy7hQTZAy6vGjavZgK5ix63q3zGkjTbUMyR8yPZ4kg6pdagk",
  "key13": "3G3X6SyL5ZM9FjJuyFhZUp3MoJ6ADXSP8xWbMFUNMusisrfX6JgWV3mK2hDwQ4pjafRcQEZp88gnEzzoKBTU394m",
  "key14": "424w3fZhm3hGaSXduCyJWX9zsu7vqVTEjQDW9gp4jGEc1fSkR4rtpQWu1qTbPr5SGwjPHoV2TGEE7YNHSPfNWNn1",
  "key15": "4Y9NxPYk1k2YyLc8n839owvmWonZRCHaH1psFn6vuai9vG6RTP7ag5ueAw2ShVULGAizRnHr6n5DrwvC39piKeed",
  "key16": "By9qQEfgPPUkghZNszjqzgEk2gsHzHCD8YWn2Wp5nZw7GbxVHjXRp4a5WhrS9Rebfd1c3PRMyEFRMTWFzrbxxWc",
  "key17": "22BJtvh8jtAMoYS6T8iT83WS82bCpEoLmPEyxXaCtQzLmGVHmNb79jBUi8BKmTVkVVV8QFUagaShAbUy3DhKNUDV",
  "key18": "58EgXhWPxxtiKqdBsL1hmdhAucruMSmacX6Cm5aAowkJ7vQRyMAm8AhoR76BTSvcCkps4vaxn7HcAmP7c4zinzFP",
  "key19": "3K4K3moVY5ocQMMJHFqzG4zB73JqiDLVa19HMTpbYCAjcsft2CUJPfxyJu7a75JJ5hgkVr6CRMkVRDJnWQ6JsaRd",
  "key20": "TpRivDewoSUBp3GrhDLzVdSD66suBkE2mwaZXeQbzXxNMUfDQGdU6USSCzgBejVJLjNRA2JQVAuKYaZJuejnBZV",
  "key21": "3FeUvAvJ2X5az2Ty4gUTqAW7Z8bYGpphnMDrs5U6eKU3RqcSJ1LyNPopi4e1vFK6kg2YTo7pKACsYDAzawVCSBdZ",
  "key22": "WRw2MYt9bd8LkfFcvnAw9zXcB53t5UfRZxwZkvCfPkKLW1Y8AiNjhsbiAX29Pi7QRiLhXTxR3SxxaHo3Jg13Mp1",
  "key23": "5MKvtD4roGYdn5AEQHDFrFjo1SSYsdgmdnXEb5opQFq5thauP8qhAyNf3KGXecZq6fd2KAGr6VWs3kvU4RRaDndy",
  "key24": "5bgXiWttpAMspb5Bz7LbXivtxuzMoCRutNzPwQ3BtyG48wiAqUasEoy3v2NKB5N3rPbF5zuiRRFHBYQhFGCz7rTe",
  "key25": "3izhinN2PbqQFTgih6nqEuVbYghvW95CFwPhaC5jzAjbxdEgHR3tmjKGqYgm59dismgHzNuMnb2TXYjf6xKmNmjf",
  "key26": "5p2aymFPCo4dftf6AATeZ1BWajf6rCQA3uBe8jHy4J9tJkaJrAzuJkbcsHAfKgDCn1PdZpAoV9uZah1WJhKc7JHq"
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
