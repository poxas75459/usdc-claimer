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
    "2EcbH9yg6PhnDqxMHxyYRND9L9Cfw4VVx6eC2QmQZ1RYA1LXf6nWq1tiE1vFkUsi93rm4uZpPVdCDVYgwsW5sXza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uLiY67MvBqc6w2E9Hx9YMs8pnR8bGeozGRW5ymZNwfGbNvMmiFDS9rGHfZw6yeoQx5Qs4RwPRszSNMUH8rihicQ",
  "key1": "4DD1EKWjdH9V5AWT8jW3tT9unEijP7QrvssR4eXqkqrqck1dg6ywuSwDvfSGCoaXnishNe1E9Du2HdF4cr3CksAs",
  "key2": "4JzvpP9jYcU7p68TqiLmFguje12AsFoWCnBw9aX7Jce5ThxjcXh8T1oT5L2XpNbDAg5GDSDzxz3rTv86dFe3cCEb",
  "key3": "4mtYQTLiBYWkSRcrjrg4JUrz9mWSQi41EEK16cguKjcFHY5GvTHaz91Xs6JzkaxTA1s1V8DGz68yUaZX9ynKs8yW",
  "key4": "61rHnc6kduSPJwfJv3zwYkZZCxtreC6yidkg5tE6mE9rSNdrX529vM8ySg7p9z4uRqq9ER4ADQknZ3vTtJNYpzRX",
  "key5": "52Q513vRMxrWCb8DQAogRKD8Vf2kn5rL4Bm6NWZFjzUBEbgsvUzJ3p1iPBi9Pzj9HrafQH27G8ZzhU22QMPnKHfP",
  "key6": "51jHxq1xuzhbE7rqaJdrN6bdsPpmqVi948zLLNmU57RCETSZfpt1zMyvLGtB87arCqbvTC5f2PdzaM8bUUAMKYYS",
  "key7": "4TmuB7ysxC2sVwL6azLT4eNZ3bUsFE2md7DB3w8TpW3TNwdVrVpkw7znvKGfWHkGqVBDoVdwzAqpvjRy1Mcfnf63",
  "key8": "2xeMvY568SrqqhePmB6DCHAc6QcqC51zpzJLYVJhv1rATt6LzhRPMP54QpZYDaeF7q9tmWshVHjwg9wo1Bdpczt2",
  "key9": "5ufQM5jNS7WZ7hwDgWpTwBQtGfEvUkpnToPmptnFqAEMDztCycEbtcNmycnAuSCtJSCg97c6HyQszrieEQrMrwtf",
  "key10": "XzbNyBgcT2j3YVArb8xp5bYvN1cHXRibQVRYQt8RMJFUvmR7BoAYScbNqSajQkpgTdgNyQpvp62g8xTJGj6b1SU",
  "key11": "61AroQqCSaD2q1LLUZu23cV8fjDERL6zPURNWmgMhsGPMZ1z8YA2sSD8BzuMFhrDCfmA4U2MS4cufqvs8DuxKyTp",
  "key12": "2D85XUAd8zZkAM9tpm17MiM1m4KDtGWmm6wQusCJdhdzZBUWxeyt7HvCdFBuNimKvTyHiZDy221MV11BGp2gaBpE",
  "key13": "4FaEi97SkYwHcPgyTEXGxWhUGejReCLJQSk562T1GasBi2Y3d5iAfc9yKFLs5yEbxE6mHehgxuwDCYqiJzpThu8P",
  "key14": "35AJ9SrgJJKHTCx3RK9YKJXNLSGFmAndcXWmvDP8bbxsn43hDUJ4XeGkzc3QNEaoBW2fimNHGYg57uN9PbeSEFAY",
  "key15": "4m4bqT5ntSjB4Mg42HfEVqtannrHPH1bWeYyJJDMzqMZNnw7QoQz3wL5kqUQxpGHpV6DjVjpPZT4ABBxjZmJEKfW",
  "key16": "2LdwQ3DhARfcJ4mG8fLHRT5SbcRYRpjLv6gqAA2CgMs52p59z9KpRJWghjxdAF2F64Vxtk6KLwKbC2EyHYrPYyH1",
  "key17": "3Ho5NSurKg8tJqBcNvUTHEpE8KbjJnhWatU4HEkWJdfQU9prgPuR5y1am5wbcXxsvUYhTf5efv8xjG4tTv3H8SaP",
  "key18": "4gRGxzRcJckiowp9DPJHAuvW86hcjG97z9Xov9XaywHMdujahydRB4TX5vXb1EtKuEVxQtwYEkPX1dxUredS7K6p",
  "key19": "5RNjX1y22ggassHQZKuFvRA3DxwuPs4QfLgQrUu85CbmsQLGe6AgxYhhug5qcAnKDeiB2Lq2wX5VN2nskj3g5sZn",
  "key20": "KibFk1NhJnTQxkbywrZ3EdShRm9UW6CmPbFfqkZsrjXh91tUBTxSoZfgTd6KurvyXtLTCvGCQKAPQQoGLZcm4Q2",
  "key21": "2XvjZERkqBMcN3wT6pyC5DqBEzwqtKefKdyvaddLL1nKxVPo3i94w7j8DuqhrEcXAdbDFFV4H4nhDsXD4UrwmfNc",
  "key22": "5Af5xJuuUwaBUdyGx6wh9t3AqTDHEKNJKK2pqxhYV8aL1raVQMNt3WgbZXuobL9rcdoqg7oKxGEVkceAFP6TXf9G",
  "key23": "dURCAdCrLpFowiH38e2TmHG9tXnt6RRmV8q8J9mRUU4TzJ3Y9exnjnr7XaiprDu8CNmGCGRK51iSkePbVQbkKbS",
  "key24": "5kNFNXqD65b8qhXv1gownhWC6VvhmwqsQBGwEP3KsXHoTMyVN2gwiskD6ct6DBLoQ878u2F3md8Xj7VC4RXh5Lnf"
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
