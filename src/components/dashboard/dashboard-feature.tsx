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
    "5GG7FLMMqkqZdYarQo8XmkKYiKB3gnR8QpRwWgssTpzYENKxVWBMsLsdU4fZaZQFSGRANXDVcA9MXqgPRZvmuoQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HhWU9rV9adrzFDEJWkcajjv4uGWWs3DYqkGG9wa4mEWQmjd5mAbCZsyFfpC5bmYRxpecWjZsC4sGKv5kyS9rYyV",
  "key1": "3ofsf8WVz1sMrPe2oWaUi6EJnATqKrh31bxZTm6wnfT6JzrZKzho6z92jzgiALYrAArzb3cyjE9obNnb7JC4sVws",
  "key2": "4NsJuWBWGjo7CBDH5hE8nRbVAbskYCzR6WtzV75tqh4G2ze9pEDEAtJsjqJ6FtWTsgq8RzUwARfTXocKoK1YFSam",
  "key3": "2gz23V9YWqRD6Rv5BBS2J6iXszmvo2QAUp2kaRDqzoyNiJm7wmRemRBMX6zryY7HdKiWEw3GvT2sUBihfL1ra4rL",
  "key4": "ycmoiHFvKoxLb3QAAgESP2KazaMh4RNcc7H3jWd9TVrwGwfXPFiYkWs1U6NGwFtrz5GMBWRwK6js9qS7H4koC8R",
  "key5": "55emozVfevr5zgvX4ZzFwH89FFoJZVPgweo2hZFrghhEG3zqJtBYHcxZ55tdf2wu1MVepqXA1oUZ6qsyg1zidtjq",
  "key6": "Mp5CnyneZDv2E8AR4V2VKHGtGzUdrx7vY1k1UGs3a79JQPZncJ6pvWhd9PSvkiCLEzWh1TELHrvXtzeUVVfPtny",
  "key7": "4ypTCWeiUnAt3kEgA9kLLbr9EWzHEAZ4ZGVpcgULAQGUXEqsZx64diHWyEyCzsLEA7JzBUeLmymXS8ZLEEByX1Q1",
  "key8": "4prY75EFDiv2cJLerwpsYCjZjfvdjSyTz6Yi5mGY3TasuuGPcNQL4pR13UvedHr1gNom1hczNiY8BrB8yVTWNaYY",
  "key9": "2t8bitUPNVztAMRKrHTYqtxiFXXipY7r9hUskEQjyv7w8HxxErPU1sLevkR7kR6DSXmFCZR7U4uwpA35WvL8nTbW",
  "key10": "AF1KNMgruoVuVHv13CPiMyvcRqnR5Q846hUvWXE77Ao9NDKeTUnAWurpkk3ctyd2V2UXE3MYV1fnkCD48q7V1gy",
  "key11": "23W34xfkvchCSwVPDX48Wn6BXgeQ4wTSmgXu15eezGvziDsLhPQ4NySv7YKnwtr9kRQp4ZWd1egHY5K2JdB2h7W9",
  "key12": "2g5XmLu1vxNHw1155jVhRFTQntT7BZKiffUE82fmCcJQL3quZU8oLBfCuuEpxA3ZVGMTsttgvxcWb97UkuTgVitE",
  "key13": "2zD1Kz6V47xoeyM5SLga2AggqsEmhqLbqLr7b5epVSdUddNzjrYCHzH5wfYNZAvpvL4C3TMKriFLXitXYXvci92L",
  "key14": "3CqTfnviornwf3mg2GA1Ls1Pp4frBtDEaRHDE3MCPPNrqgqSrqTPXvMb277H3duwS8tsTcRp1czzkfwv7whPBj3h",
  "key15": "2hmsv4PcsPsqHmsUmnmGYoWNAkyJcZjVU7Mu8uoncP68qvPELGhL2Do5mrPMb4WbAi7cXpDvZX4yHJCdfpAHzvzc",
  "key16": "39UWWbuPAvLdE19F96WaoacA8Lefcc4TaojfNYKLMeigrT4zSoJWG7HHMMyeMrbGzYjWnFuQKub9LvBocR9sAFKp",
  "key17": "t6TFcVvgh8EpkphELjYU1V6nTxHtdAaZx21PZeCHca73ViomwXddmVWTn2pULVRUnxgmYZ7fyDetPKMuVssQ2dY",
  "key18": "31Zq67tkT6e7XfGyHx3tUURmK1cHj12UC2m5PykK5pyMyV92iP2VvBSM1f5jjQd2RPebPJ4zWMG6WDCDvzM9NyzU",
  "key19": "3j73FTLiHX8rnmnZnz3VxcurYiakwkpefLqrVQBFLdFp9YFzEJQz1i1XYAW3Di4TXcUCn9nm6qaT2j7y8hsCuiBw",
  "key20": "X7mRit1jYv4wgXgU2ncEm7ugKRCu6A57Nn7fXrkbwSUJnJvGoWBTR7Q148RQ69Rip87q7NaqQmjXT8NuHZ3ZmQY",
  "key21": "2DQvNvDwVu1LTxvzf33zSbZKWX5h2txuX5QJjgm1PzweYrXmnw7iDHmAcoDRNEkQb9Qas5Q22EgxzdUgxkYP2tE",
  "key22": "2YjzvPip72TGBZ2oUoj7vib7NnetpNw7UzVAHkKtVBAh3KPREhL6fdY5hYy8vy3ZzYPtTpaMzN6K6cSNaHZyu7sG",
  "key23": "2kC82CYEJ1xQvjMXyNG9msAshEskpok2H4848kJpB6EE6G9PvDQUeUfsemVm9JNZSpvC7ZTE8QUf9kRNAzCoFQPN",
  "key24": "3Yu82ZnLiF3K9DXSDczk5CSKyEgHeeo18PLCgHkyjpxndGnUg3EKHR4Mg8QrX9AXrduKx28Exbr5weNyzc4VfnPT",
  "key25": "5gNQy68m6jKfV9EDL5aKdFuGjrXreCBSNJ3PZX2PmcezLFYgPRHUuBq9AQS5gYYp3pX28eoCRQyYmq6XQd8Qi6uT",
  "key26": "4331tEQ921dvmo2n9BHEJWqoi4wNjGAXjwpgUCMnCidZ8Km9HM6UdKeQbHeYRPPn9mUXUhCerWSs4H5aFUWSZXE6",
  "key27": "29pcu9fn4VWAHc5LH1ASc3Bgpg1B1XkBaPp2xhvtMFQVAPbqPsPV8YtGEJb7YowtCiLCiaQkxXego8RKBCHA1o7w",
  "key28": "L9c7iHcPHufRTqy5GXuBeGgrEsCFxShgoZdRMe7iRU55eUnFSQ8y8SEceaBeJGaAZQxxNSfsx2jY1QuNM2szzZp",
  "key29": "2Hjyyx3wt7aNc9QPmpXYDG85D7ZNqMdHrYRYNP2B1BDX7JUAUNgEvPYGWjhEozX5fiaNVoywA29Mx4iTUN3aKxZU"
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
