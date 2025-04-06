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
    "4ygcfE2yzRufSt1UmF5p9J3Yg37rMJcUd66R6wYpf67Y5vU7U3PNXVMQDZZp5tBq15DW6XwT8Gs3USNpD3SFJjEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCgzBR2RBGzuDKiNM2EEAycPjcpuxyjvCiGV8tnwWYhvoXFy4eoVe7d6zpZ5S4ZxsbvTY1zSPkhXK6TJe4XS7Kg",
  "key1": "2bRkLkQEg4bqtSbRQ3UiE9hR79rZjtezejQmSXpywA48AWAG5eA1hnPm54hu9yqzwYqPHze8eYioyXsDaZmNSYQu",
  "key2": "4hjzASH8BaMY2tbVtUKSvwsATzzPHe1hDsWs9coXvSBnW8zVp6e9b6V9dFvxxHJcx5XcbTsFTqkYs2sV13bMKdw7",
  "key3": "4odqywgmYsA5QV28wj2N2DibwCLLzGYdSuSJKdU1gAVhoUiAJetmhydu42s8zB1PwoDxuANAVLQwu19mKZTKGBB3",
  "key4": "2LuuN4SfgrFJ7dAeVayo5dmHgKvbHfco8g1rVKAPHQQqWsPVXq5H33pWc91dDUkaGdxQBy76rRMBVYreTr6GU8jZ",
  "key5": "37QR91PHQWDU2RWMuCxbyGuqJSu5rZpMq1eMFAwCKcCAkzZggTnKRtsF5DKj7jEJUhYfAUbQtAVd65gt1ZVURkm2",
  "key6": "3DVLeD3ihjdkRoYX7wz3F68YfhzHzKbjLwr8WtzWtCFwRTqnDsyeMuUaEdLD7zpiHWXgdhRUgNJewoVQb7GFvtpZ",
  "key7": "4PWZ2aUYZXx6EkyyshsobQwfAobSn9c4fkTcL7LBXZJa4cqMZ3qJe6g1tmNY1GMmFQxL1XFyFBqWVKsqbCLpatUe",
  "key8": "211gQ1AVw4XVAHLBh3K6iSvdbifa2rQ9d67ik9hF4ovSFctNyUBCFbVW5NG99EMHcLb9UQD3pVZvgepKwoh6N4T4",
  "key9": "6fmsseNWVT4jPH7axBqkiC19M9VR4nAFBaPhj5XoBjFPWgVMk6foNXNNP8m3JtnAvFDGhTXgikk4YVfWs6NrMdG",
  "key10": "QegurweAkXALdZdR4nKVhKRbRMQAXph3HaQosA8HkE3Jx5V1PdC1niGgQgQaivUi45M13XwdmdnMTHyMeT46Gkv",
  "key11": "3aFsQHPudGhcHS59898ic1rjsp8nrFe2bZXCkpS95CfEFGHZYGeFSuyS49Hg1HwYUVjzxnm9onU5cXuiZv5TsHxp",
  "key12": "4EMDEwMhCBQBTtKTTVtZ6PfBmWLvQEPHxYMwtUtidawjvkKDPEzMrZD1ZZQuR3U4ACu39DkUkijWdD8xP8SjtD2V",
  "key13": "4erKBoKSFfN1xdeuRfZe66qcxe6yjFVffjrq4ZP6L4mBfWnu3sTA6Zea5FAKGmf7ma8iKhD4c5Ex5GHKEQ9hAgkk",
  "key14": "3SHn4WSB7rfJAwq6HJ3SCTtbJnWvbSakRDSi5BWhqBNNnRQpJprX598CHr1q3ffx6JveN4D39mCQtgaHCA1fNvU8",
  "key15": "4qfJJJqC9bkawAAnmqDH7b6jirWcr5hWa4znXz4HFBhFh1meTRKUtxbzESTc6wekzQ53w2N7921KPmRMB7rNKLv5",
  "key16": "2sh8DcageEK3naZAC3nDwijQ6L8Uq51ApafREGdzBkGGQMixQUFaYpoDccwVu7HZNuaU9EBKWno6hs7X9Pek23bv",
  "key17": "67aKJL3DGU3yhRdQTWhtjGcWXHEoHnVnyzsVUKR8J3jFFVWMhPFxhbCoJ19aSWd97oFjTqGQoZkYxRmt5JVbwwfF",
  "key18": "4wY5r1uSKwHeVXWPFESxKHP2bmz5VYDdusP8S5S1Dx6HqL2mYr3SqKSdW5YWKcojBPiZSNc4WcMCGqVhUTzQbvJo",
  "key19": "5UAK8pR6XH49RautEvwsh7rRcAvZvXcVKHA67KcCq3VKfusjXy3MzbKbXE3NRYPx2Cxc4LbAAiQqbYf987DiDLoj",
  "key20": "5rqWpBwCnY524preyF2LNEtejrViuGK5WjXRuuDqq24gq1AYL9ZL5PQsrWbhuCFFH5co6F2RMpVcM5R4RAaCu7QN",
  "key21": "QDDHXAWF7ETKSF2pmeEBqwFGf7qEXZwrdbhy8ycJy2hmf5yuEgsFHnwt5n26XcXjU4XFuR4MHDDTZhtARtRoAwX",
  "key22": "36w9N5R6EY7V8nqdB7UjvxrqhcML6Ru5qGaW7o9xC6KPMZnerSD5AZdDDMJ5pvbdb2g6giUaLQ1fxPvaHfiw8oQ9",
  "key23": "8bRcsXj2iErDY74mmBRYDsaFMrG4V962hH2fCoJDq3ne6HPaA1mPM5NHmf9NUnC5EVvwgQwPiavoLktzQPPoJFm",
  "key24": "4cpmXSuemQbA93d3wMAxn76ZZuM8G7fEfpUaSqkVQg8GsjX5EhUSsAXUfhSybPi8QhTa1dq1b87QsnDQmpceWkgR",
  "key25": "csxj19WkgsS5Ne8CYgStgvwwLW8dyDwWCXUAHdDSyhsTDoTPSGTa8jjvRRyFQKu8YLHBoAtDA1dH13t28zZ2jR6",
  "key26": "3diFiZCfnMe9PWbsiAKwjoqsNy6hXD4mhDSbryA827TePGdwV1Pu66L52AcD3ktcN5d2pNioy3EMpQ8dqV5kiTpC",
  "key27": "3i7FrNm4pn1sHzqZamZxQPeZfbYZFqSjkNuc1AJ8gA6Mf8beEYQoHKSxCC64KKD1ZyGEiqdPoHPtiQMmWMwCwX4e",
  "key28": "38pbJ991Z3WZohUGMN1o8HeA7XbPWTqdXdKfJBsrypogWRauSgDDRkmHwUgQYApBdi4rZKrLa8pnPQSsDLPKNsHn",
  "key29": "4s24ifw7tGKVKw9yqbK1Ad6nn7cDsSMPD9QrQAkiKM1ca4hKg9y31ZtP6CsScM4eKjf37KXSXzSmiVS5CsdYJoWQ"
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
