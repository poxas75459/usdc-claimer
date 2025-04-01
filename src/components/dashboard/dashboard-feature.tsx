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
    "2J1FyRZzt293Q961wjtoEF3LZkhdZHfLMJofXm9w2kMzhb6VG7vhJrRXiLrLVnm6qKWNSqDfAjVpggvaQQgkcNAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDEBJxH9NXJFE6ikUaqLTdqYKZ1Fo3DNWLocJadRZXHAsYdLfRTTFcsUkX4cLWRpLERVao7HnB9RfXV16Joyi5p",
  "key1": "soqiFio6XatrHyNxMGsQbihSafy388T9w2JsgBD21WaadpmkKRi5uBgrbapDuBBqjLvmGA6TkRTCaudKXRwX2AM",
  "key2": "3fbJ87ZjRmU2b4DRVxovW9a8fjLArWwevCSGqmi5WGiLt1MBJofc3XxGQUvHTgM6q6rU6ofE2ixasx8pRhVVb3D3",
  "key3": "3XGBCosxB2ozbZdmpZ1bSUqjChCvT7gj1GqyoLzce3SkcyMoMxS92V1EJqEnt2Eu7hdTvbFFGddJJ3DW2VNkf91s",
  "key4": "AuVbZGrwPM7JEZKFRG1WHn8Kkh81bo7MDQhqZApzecbMVuvz8ez3NuSUF8MfXG5BQ89fBLrNLRpNe34B1sQvffZ",
  "key5": "yyDotUsgEmdng41d4ivCUtsprbAkG6NK5iGcxNDeQeFvyqBM3CGqGoS6NnWTY3A35ZMJzTgFjqSNTrnhfvb8jpC",
  "key6": "RygQLUkLKVWkVr2AAJ66jxY4pNu8sat4DxVrt8AkwCkBXwKu3f4sM2YPdYzXvHRo8YCJV7KEnntFn32iRbZbgjY",
  "key7": "47vSDvX9G56oQNLvokCPtrTUkBvnUgKwSkPjYTqVRC3ZKpfM3kw4LfXKiSTu6HHHAtGurbFywzr1fmuD8TGP6SzX",
  "key8": "2FvRM4VSxCyMjCfoaJm3qxR6ZUuWZamgTDbURgxKdSGvSyWXSjjWvRLjnGqM7mQqaDEAnCBoraPPrt2u1fLpUtib",
  "key9": "4NQBsX3hptz41YsPN7qyHhY9nMkM5xks3mWeW4vf3GiE3BWjrVvqPBywU8kP8yuSKxzavRUuPKbRkQcnHRLHnzrT",
  "key10": "3QnYkxg7qeTzFDefEJanyYoRWuFUsZMQbcpjRNzfF8oHbtCKt8W4uZ2LsokWobJTuygm8MyR4HRT8budLNRm4Fky",
  "key11": "3UsHLgt3du861JE9FrWBVYwisaH6okNxrafEoma5gniwgEGS6TbQBg2k2kU5mhd2JMbrHb2782mH4y2GvSLTBoW",
  "key12": "2d6oDAUoJbLRfRPncRsDCh5Qd6U4zmqHgtuHijrbfrH1qaZx7o6skW1JBcwXiJBFeoHoFrzqEZmWNEjJiHCvGcDV",
  "key13": "64BghYXgfY1oxedNcMqdbxa45ABEag4UXLAvzmn3PaKwvf9gQ93EqFXtrfGhW64zmJm7jgywqdRVuxGywFDSiPVY",
  "key14": "3f9a51m23ixbyLr9rVWMZsLb99XyhB5xCi8X4wUP35KEc1MGdTdnwpKU4PZnrDQfPwcryGLqKkZN81RkpeAtZoe1",
  "key15": "27Q2126bkGuB75pWFEmZtybwU1bghaQbjdCQp6xoULhWiNGTJdRMBeXEBgBELzZDfonpNcEzYDkPYJbCdRUAgXTw",
  "key16": "dDsMjavF5t1ySEUKpjjQ9WrSNGty19ns521ekktEqxvZf9RpgxtRE3CBZeRY6HRH5sxjNhYKhUYw6W3oWqWpTMX",
  "key17": "57jm6nkqn6FxaU7EwJrLq2h5QkTXrDmStL43ibtFJnvnFdcUTzacDUBUpN9nb2QDAXuVBe8yHeDJsshAqxjFafaV",
  "key18": "3ukPcPisNYzfPfgfEEBipgxCxW6rG3Q3YX3UVUS2BjEajdHicjLBBRPMbyjXJNYPMza9SiAc3iaypovD6ULWGFHr",
  "key19": "4pwU3F7zYgddQfGgfjENhU76sDWUJDF8tsjL4sG2acCPYbqjA66MWuT8iJ2YPjYXhvw8GxNtb4rAZaFwj5oEcYvK",
  "key20": "34CcqKPovSZeQCNj3VDVwwvq4xWrDX7hRH1MqPL819nR24qGQLxviqSDPVcydM1sTzr7gf2wCYNS64qKi5PifskG",
  "key21": "5F56aWpgBXypQGbWCT4vkFZu2oLueJ7bkKweAtPGY6NDJM6zRCahX1y6TdMkYQEpJH3T7TJ4NQukTMMQ1kfDTPe6",
  "key22": "5erma14xCWfPz4Hdeoo89s2pTDqoVc57kRvUnwfHxye2w2c3rHHvdwrwhBqP7z8nwXBeosPQBXAonFubCU7DKH1W",
  "key23": "4YUV7vGkqjtuodbFe43c6UfHw5sBPuiVAC1A11UrRHBuUL2yJ9Rboyk6JZE5kJTyDjGs3pkme9dYmDPoi3B9DPzE",
  "key24": "2uYYh2oarLR7DUKQneCT5AZs2a4Akojuf4Q8Nsn5u9SCy5H4jYn25Y3SnAdrD9sui3k2BcZFsHmNNPgrdiAkUT2v"
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
