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
    "2gPKXL1R1jt8LgSxKSLEJXQp7DDxYRpeCMQDw2YF4qVEt9X6rPYHoZUnZrAkQ4DGE8stG4CzodphwnsShYFgLD9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "em4k7zaYh2VcZt6o3hLA8WMGEaW3GzZ4RCWZEwYNMThY42xMXpv6kPpDB1DvNTPEmHoQBEJuRq9zT5XPqz43iNJ",
  "key1": "5z738Xxy1AWRTqh4kmFucyyxgRXA3uK12FLdDX4dCG1CmRHSvLmrAvKGeskPD2XJxis2SMBWMUwWLR1fSx7qJGke",
  "key2": "56S1PJF7K8FpKgyDPSh3VNWruaaNrq5jLcQwegAj1pwtLAe2eez8eVbNNiC9daTV8zD2z8UwX7ZU67nxDadwWFwX",
  "key3": "3RCPpyp8M4fBZqMjB643nPcwKnP6Chb1LAcj3qCnDJ5VpMQRdwmVDPjvSPunmQy2DinCbjoQjFg9ZanpcE2v3qTa",
  "key4": "2xE1zoW4wg8vp5g8D2RoukUp3vhHykYbfcHGqMk3v5qC8NnetPYdWPbKAnJqVXSCkTqtMzT8F9C87t8AFbwD8fDX",
  "key5": "7ZYoUsxJrC5a3qUQNyRx76Sq3YLJHNRSHXeiwakWfEYQBQUpJdcc7811JoA9cBg6CCdppBjBEXFygaet5xQwKLc",
  "key6": "2ek9fHm3UvR2hQiiRPRUFuZmve5aa1kPD6xBWzzraNpgevz4cyZE2hUXuaDjmwX2zy1unpTFARBb5jKanLq8YzyM",
  "key7": "22e7CsjgF9ayEu2RfSrEUB4oWXwfL4XntHh8zKzRNfJ1K7RJETQogqL3njPW9HosdAhCPesz6xGJTzpmdEHdmwLm",
  "key8": "3tidK3M3zbubVKcjmXRuW45sLfBCtad48GyM9h3zNQCq1Grss3KRU6pM9L3CnyZN4BEDHvVsCywtYjoBN6uiu9iz",
  "key9": "3Cxx8C3tZLnbv9qcrKN7snx96sFfwAcLsFVHmpGEe37cxhsMiiux2cae4k3r68usKAU9VqvfE6Qo2XefvHBXRCNY",
  "key10": "4e2j1ixmm7UEGfynyc3nxbUMJ11BZ5j24XX5pJwYfv4TTzY8X3m51oBYXEYtuPHfbYGWBAhe6doghDLcjG1oYCoi",
  "key11": "5ZMa2vaJ6MxQm9h7SKBw3QB2of25ykZWp4iVMHhkaU5XNkwXq4P9QyepQHZvHZjXhRH83WTQv262CxUCb1GhTQgL",
  "key12": "3b2fG3NwpT17iyftN7xFDQAc45Ema5Me26xtn8q4XZafQA8o51gGz3oChfNmEpmxfWq1nAzyKuTtPKSibE1Zj8co",
  "key13": "T8HKEMCMincRCe3kQmFBARpYodZjh8zbxTbCLDuGitN56chwvS4VbiPBTdJX4391euQBMMnL3fpHwVWnmrQq5FU",
  "key14": "4ThH3hLeopJPKzv3nJMY385hncbsja7vJ75h9rMuEMRuLA2NFePsUFCW9zTJ4rdbERt5GQottif3pkxA3gUoRDcx",
  "key15": "2sqKz1EMLRm2pd8iBym58vcfo2FWxQ9witfEwWhn3Wp9sMLtowKkfTZVvqM8oiRAa3eavwmgtbakAU6qR3T8wbUn",
  "key16": "2rPV2Aw395Tn5gJD7Yo1YCBwCaEc5B5SA25aRhhji7cvK65hz3pQ1CmER88PphetbqFEhJp1E3JAdUdX1EZFcPDL",
  "key17": "378QdE7HUupq5vsjgDPX9mDtMsFxPczibTqrvM8fPKXFS7zKh6TM9FQimNPCMzH3SqiRCQ1JYDyi1YXB2TJJGMjZ",
  "key18": "45LTS7mFFPuqejAvc5eW5MBUu48rz5YVKejUoc2jayz4WjnukdHAChgFDTUWUKTNnoop5n7JPiKuoX1di32KRGCq",
  "key19": "2GV7MddpyiHYi1SV9QdYY2tkUqVD56iyv4YgDLBNoU7yHs5HyqQvhaNvzmitkUX7b27oavzJscWWwEe5cMEtKoYk",
  "key20": "HXWco98gDpt1YpLrPwFGVnrgfJkCbbZZ6cw3N47LzRzJTnat31sybgNWdmYBobzB3nMbxhBv9EnTwbsqVr5DugS",
  "key21": "37PwZBUSsfnmNutRW5yNorZWUobKcKBbVA2XpYe7Apzo5ZrACJnjHjPY9oeytdvKUrEzrS5MLqCqrAgMfCyCvvUd",
  "key22": "2b7KStnYtS9BVDPNVnAQKwZuwRxdCVSFYaTgyv3Xqx7uKN5NJcUoeuwa3pw2k61Bbkpb9hzQAr6CxsVE9kt7Cj95",
  "key23": "5kWPRtNcozQfvYUK9tuU6f8K9fkwLp5tVwSmC46UqKPCnsaUgDNcSJ5rnpYmScsqErgQMCS993XoYPoALam36pYq",
  "key24": "3c8WSZvkeSbTDPngnwgHXfX3Purk38RRXkBBEoWGk5WywicVeFyhttn17YT4EebhEiFA5xWwQoAVXf6tB8JXL6M4",
  "key25": "3Sf8ndhjpNJdgsvwDeeqYxtUup2VH11fZY9BpdjzTZ4v3pjA7HJXbmMpz3hqaFsrPNfNJabk6FkxLnVD4NZ4zV1z",
  "key26": "zU6kuouBPDP4nD9xmQACtHUdCrYpsvjYu28BK95uHYoWbQcPLK2LuhPsMeW6NiC1HqHPGsQrL4eQye5jjGNusXk",
  "key27": "u3NN1C311NyEdP5UZDAkVZQauSv411bqEVfdBYLZNEo7gQgSoRcDZjLXLhBvmQAVxbadceJgM6jqLPS9Cm4n5eD",
  "key28": "3cT6KtQeAt2hxTTA8jQXUaAjvPUPHtqrWWtq2UAqb8fgWkZN81LyBRbmd4A2RPnShS9XpRHkg2PdCSv2dRHskDy4",
  "key29": "3tq3ewBuhLqeBkTTXAXWuPrgPVnXkUkaCUpsR4eT1FJBH4ZSNdvotH297C4eAD8qued2NQrDmSxHjB72nNkEmcf7",
  "key30": "677eo9CRt5QG4qdYFZF54ovUZ3fGpjzgbtX24JQbgLSoKTdife62G7BH3TyiVn6gD9kJBVBvFxytEddjnhkfikfY",
  "key31": "4EpYVbL8b7DJfNTm7iA8HUENuCd23zyaApXMS6efSnoq6pmSGfZ6ZRkL4RW93an4w8tJNZRVSqFo3dKyR8L4NRe3",
  "key32": "hwKjBun9bgZAxi2vuHfFsmtdoQuPRZpZPjeLBaFEVWG9YiDAPyHcMhcyp1TcmP2NDLJPgzZofeDHYfBVYQMszJH",
  "key33": "35kGbiUyAPkNb2pMqAgxvpwxZSzkkU3FTUgghfbDaBhz8KXTP6tZAnHAHiqUMkoLXLt6oK2vw9UNoZvgRcojSA2Y",
  "key34": "46a6823cR7L5TtyQs67vyZ9dMYbcvsgets4JShDFP6BnKhXkrRFSk4zUyRuUWCUf2Syo6LZ7EZMkxcmn3yoWDYND"
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
