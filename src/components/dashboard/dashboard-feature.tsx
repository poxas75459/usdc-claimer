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
    "3tbffyqD6CR88RCYPMRsYwp2zgMmHfQrgmCSZsE5hx3awApcrVznsCKb7FouzrAkJjLyEB9cPfDTZDt4z21aT74x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FC4cwSb2yPMotqQpj5w2dH5rpoLaLivu8roZ92GRLQV92Gs5HGMJeixxnq1Fifpa1Q8dH41zQa5xGx415dxcyJZ",
  "key1": "5u1yz7Baa7o9svdyQQYMNVLxNH3PfLwNsFLf2qAszHSCFwisu82LCLataLNRfUoUJeckDf5t5sHmTUgsQLB1uzF7",
  "key2": "E4yn66ix2JoyAeta6e56pTG55LXtfa4wdmUdSL65oXkKHw98KGmXUKXB7uvEDeGLq4jvCW8tcF8UUV7iv6EgWFH",
  "key3": "3BYkCbDENFWk4FCx8pP3so7HskGiq2JXJTG6SujVvPJ67gemTMRPrRDEjhXqPL131nPj4cYTqYASXZ5LNxwx1mFi",
  "key4": "2gBiZAhhKFMhJE7WeKE2PDwwkqTMgpTztFzrTNbKXzmNiBX3WaN1XVXmWT46a8gCY7DasqbQuUjjn4gCSaobjDvG",
  "key5": "5xfSqZAzhg8wbqUYdCA1165xxFsNeQYwPnWkm9GSkH8fTP2KRn1NrWyYWrZXCcVtLYgEfZ26asqyqfwn5R4k8Qta",
  "key6": "PiWrNA7VBd4gGmKkdMfm8TjPMByUq9GGsL3xhh1TUHERLp92pLT8ei1zwBDUWDdwHUcRaNBDEmMMLJnSv2ecF9p",
  "key7": "2KxmYhgHPhWNphrQa7P3w4QsVC6SaAQgDrDsyFYgskG5cE2EB21wM8Nd8mF4B7FvhW7q42ypQcaupwpkkVLQq9Yz",
  "key8": "2q3UrWCApBS4mbpDCWhMWMH5WKTE5WXUxYbjSqvcXHLgZADH93B5ZYKstx1zYaKHJcgFP8Ru2nhkX5Swvq1kirJe",
  "key9": "43UJ8AMpJqdnmRGQXncVaj7nohXMnjZoBNQnLwaEAnGycY4Wt6WY4frVECEgoRsBj7X3JkEMs4T1mfVX7kr7rnKg",
  "key10": "4Q9Ef2cRstxjeW1oszsseCcYWkuFuqCCG1JD2NU3qFpeohhqpnjVBC18bbhoGJBhHpkq3xgq7SoryAWGNEXqoj83",
  "key11": "4MLmRSiP1z3ama31aheNptnqaSRXrMrhdEK5uBqgnzQoTpTAe3TLH4nvGZy74WRjibrCDHmt7KBnjGTZq7ZrTYUj",
  "key12": "5d2WzJfKRsRy8VDGqiBQJHVmTHmWdFNGp8eoMkf9b3TXhCb2dYSt9PXxqSyGSGqojMaahHjXbciwyAJ7dbLRRdJi",
  "key13": "8WR3wYjfnDYJdSehKDUMgi9dxxanimK2sTfiVjfipkj9NTLEvcXMCZK4H81PcnVM3KktFJ6qvKY4J6thxtyDk73",
  "key14": "4XFYAJcnrMyXmFPXbWTScTojZKQEetWnu9AisuJ2PG9NcetL79tPRMSv35F6LWBkwG1ZQT7hEeYwy1gT8tbVh21C",
  "key15": "3ZkZHPnMcptz5QUHPiSdWDV9FA5RXXkr9g8fSETxhG2mp44r2Q3BnzHtj2WJC6mNait8q8VF8N6KfGsSjg6cBCU7",
  "key16": "5DmjWnmaW2P1JoAphEWM9xkjPeJydLmAPrpUeev53QHmkQNU6PkyKzEqaxPULFM6Aa73cupGeKnLUSgv4QBn9Jwj",
  "key17": "2Dw8LStrVio3wtA58D6UyAJwsJLYTTyGatWL912YKvB24UvkfbeRdobmBNVCz8Qi46zaBqPFSgXhZPCC9HgSNwm6",
  "key18": "5BnfnJEM3mUZYTDtMX4n6pjbdPz7RfN8wjgVREM9h46fA9nR5BSLhhisgTTajjKPmn9pZb8pqB3rGTBw7zVomc8J",
  "key19": "2bSFSWzUsR5ndxjmgSA8M2DnHDmMVeiN9vUxDKaCyb3j4aAZ4Mzi7B8GytU7nYDNbzWVLqqYn3BJh5BzVMHMosqg",
  "key20": "61o6t3uCnTDnSDyvmdAAqUMFqtXz18MMDjBAXHy4g6tsMdYw8m8GdS13NT9AUMaM3UZXyhFmhr2YwvmY4XWqS2nL",
  "key21": "39o6TUgPJY9jDSisgBsafa3oGFWxiWoA4XH5UkokZtNXySHJnPBWdRN89dRTk5YEdCYL8nFPhYF5No9A98P1qBAw",
  "key22": "4mwz3q6idZDCatYf1bfCVW6fu9EqNeTicz87oLx6wWTgPA3qaZAHpVYMD6t2rL9LZUK49joZnbxGtqvemXCdm5Yt",
  "key23": "47nVsa7vXxAiRvFjxtsGhQe9Stca4T7RKRKtAmGqrLpktEaL1AcePyATCx1DAkWUpnhbFHxq5ycR1uJ5kpe5dfqJ",
  "key24": "24u5KVf8jTduCPmC2U7Ev6GNzMmYbWukXwUmVTub1ek4rE8iE8xTRR9fUw26jWAKDFWQfbmWuwCqmHb4Pi9v1XNu"
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
