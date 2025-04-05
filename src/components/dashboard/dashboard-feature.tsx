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
    "5Y9APm1ho6ioPiM6qnwa3Lo3NLhhuQNH9KWYBaBvArwRSQhFU7i6mcM7rJRASpEenNXpaTo7aEqhgeLjRoxzX29u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BF5ccnNnG6x47idtmx8gxaW71r31US56Tyg5nwCnKULRhm1e4k6kn327eL68u61pPyKu5vAjU3pZkauHRGn8T1D",
  "key1": "34z3hzdknA7Hd4WMCQkL3reKCimMojnjeXGDeXzErjMMcEyWCXCFZyNGhhpfGa5axwD1WGEZodLftHUm94TFn89F",
  "key2": "5RxfKdVqM1rRnWa74h6vPhCcepwJZmn9dZjeyJX43247F5vTKdJDDmis4vL7eygBFo6dNYJLATe1JNCK1M1X7KRP",
  "key3": "4MpkRH9kHiWeTxYJXkMQQLK26bayLvBTCzsTADJUq2otozACsCYHrfWzGGad4xQHWctHwxyH4VrPe9GpKwzUPCnZ",
  "key4": "3XcBircV6fathAMyv6Kzn4gpSMDsJwiV3UbSp9mBjUfQRiuTvGdRXezkHJE9vLa1h6fk457t8G6kwCc3hdpUnRyv",
  "key5": "GimnWoUhd7nCsCWYetBpp6VuamuPu3nYEeUPvo44hA8u2CrSfEPSsyxukrsz3dgviYYaU1NQ21rtsDKQZMDyr5s",
  "key6": "4CU4zJBSD59njDDoHhXgxp1uCrJDEG5Zw15XpuBSLPfcKYRMdoEi8SCj6fxyus54764kJK3VZFz5i8yjNjkyprsR",
  "key7": "29j6nNc1cD3946sAm4BWNG7fjycYQu5DLQvM5JtVUCF7M6anwSaeJgbAmUPZP4uYo2QXgzi3b3vQ3HTbQz4obM9E",
  "key8": "5WCD8qUmsRCzuprwaF8MEnNYfB9WepBqkcbXMxLRdQ3Aze9ErbmR5WkrWRRCptSnaV8Q8AmozK3m6rhC4WmuMeTU",
  "key9": "4MBTsDwgMmrcsmE2Db6pstJaFMeX4fSQmr3kMMeaAuLDxGLku6hFcjYYRnv9aAkD2Qbp54Xg3v1wyisJcsAGCciM",
  "key10": "3BXANC2gceULq8U4UTYv8BWD4jsmp5A14hiaGvYtYZKgW4cCjNQM7CBYPewPyV2YJ7ygcDtC67TQUHGeVaJZT9jt",
  "key11": "2VA7MCe5H74Ruus4wLudyq6kaz9XGzbivUwTzHzwbuxd6F5848LETg4F8S3WsSWT3uawmxbMBqaxmmG3xSrcQh9N",
  "key12": "GvAZ3oDtvj653yoF5GpwBvsaEZRrZrDeRghnG1Mg7mEE4HBMkQBGSzLZEATtLR4wgc1Aw1B5ZTzczvTLox9BKgJ",
  "key13": "5UXj7ZMaFohES76qNVRPqBq9fNQYJgnosGPHcSK3LtY2g1CFGjYmnzc8boGyNX9v84xFN3ZKkkNgiBKZqaDrbHt9",
  "key14": "65mdwB4vZfnjzuWb2bmde3LVCJwyX65i8jvu2CdcFuB7LQ6TwbAabhEosooKMtCnzz8mAdkn6VRyJudXJYGZ8YzQ",
  "key15": "CaSFPhUtEfx7pdCy4dvDLDQwPC2ZeXs6Q5sntMwL1BEaoQ1tRzjGEuc4fRpW3epkiG7EMPwLmKcbNdYRzJs4vet",
  "key16": "4mHWQ8xwqrG1G2xGbKDdxsgMwAsM5UeksQ5enagMLcKYivjswyPddCK3vsjZtCvkLHA2FufizoGgdtDLDXCBpcBF",
  "key17": "AdkqNRjqfqKNyktqxY9mxq5GjZ7JBARrgBaosFhAdm7HTM3FW3Vb8CPv5Wsuc2S9qPqgDGWmDJqJt8LdTqHhvgW",
  "key18": "dWcXoqtY6S6PSUcXqQRSddvupQKHd3WuGhGvvxmjUbTBTbru7rh6Vz2KMy8tyUb4UoWtBdrs3HnNsMA8e2H65Mv",
  "key19": "5MhvULe1abAXokYBeWXdmvAwQN7U2wtVQYNPha3A6BqB8NgXY239j17Xq7jZzRAncWEk2RPZqjNYNWHJpup6HeqF",
  "key20": "7J1j1tnkXzcwPVWQ66TAntpkimmt7RZmC2t9ZkYJTXwVPRpeJJQw8QRwCmzhHWnx1BkinBdJvtMmR3NY3ignKki",
  "key21": "onYqCtg8Qa5tznW5ZNA9PQ5XK4WXvUbezzSBmWAj5ezxXxKgrEskwYLZft2KxeJ5tSbJP6cxKtWGL78Ns5Q5SDm",
  "key22": "5fxTv6cXQFn4XThVEY2HRsEhT9SJxvGpEtKAtLb5ooCLa1yrMhctB3rm2P1WDk4EXHpJFjaobGecwdzxvBZoZHgw",
  "key23": "23PswYB24Eb6hbyhfwMWkfcEAt7J5w9ws6bA2jRS3QwhGKRKbP29mWnyWH6d1npn6gdZtgtskC9gT5VbUYtuuq3U",
  "key24": "3wqKBhLM79oJugRD5Up8f7TaKJ6PJKFWQ24oFZ17EPrgYYXYyX7QaKRANQ4oCtc4v8h2ffecuL4NzVfywjxFtSqQ",
  "key25": "3uiELFuZhAZ86Q8KUsFQDyBXF7cLao9mZ6eVKZcU8mX2w24d9Bz5yN9RyCoqHhq8uwmJ9Tfg1qC1CkrFfpBVHxyL",
  "key26": "5gs1VXXtyu1QXG2scXGhEQuPZs6UJcx7AHWFAgA2XbucE35zd9t8xLNcgGDR13Qg9fSFy9sTa8Rq45qookPjUY1Y"
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
