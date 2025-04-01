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
    "4zqAukeveN7aqHxZV7Cb34TU499cnYBjiG8JAJuor47Y54uviog3v1VYeVkiFFBH4Js9KrXAcM9xmRm2TkqeVQBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Be3d2r3sL8BivSs23T7zQtazmPgxy68N9NaDNkzP2v6MQYPHLqH98h58hxVigG9mxwqwkqL9G6njdq3Yc78oehs",
  "key1": "679PSR7k1aoHpDbv5Hq8NGVttu4ppeMeo7sMQqx6huRkU3bBHQabXJrzev4j5BtJZDq7QAQ1pdNgUV71L1FYrWoB",
  "key2": "3QU9rwhHA3sppbeuD6Dj7dVepLUmwoUGFDSxZNf1uh3dVejh9Cz3pEJ5htpin3CJ4zDjzLDtBeLxkhJDzms6v1Xt",
  "key3": "63NWRzsE6bKMJWuCMGtH1AMgSTnzsMjfdgdKwMoGkMjokdjurdUTU1ScKr33iydv1bfmAiBNPMHn7Lx51D6HLLv8",
  "key4": "SHQZhRyzH7RER8rJ1vzMKvnJBb5hw7xje9wDcjuLfUaeLo4dhkEW5nxwZmqtDZeeGrZXBoaNEwTjVpLdXRVe5Bg",
  "key5": "3mYBYoWrCpggq7U6EAsEXtQBrPXvQ99enU38thhjPxYuTx3NdNgpobjBGTeEY6pd6W1z5iTcwC7PACULMhYQf2Sn",
  "key6": "ZT8MPTYEErfRhzm4bxrDjiAJgGgfafRAeVqJiDsYQrmvFn7D7fvdfPJyaWvx7iLabHwRJjZMhTzfi4sgBNCvvTX",
  "key7": "4TTKZ6YKwvCgZ11Lgy4fNejyhwLJ8bJaMP81phZmAPZANzpQHeD7rYZBDPCjfErL4sZmbpwjZZaH8Hzsxeb9hjym",
  "key8": "4Gakrs2TDRECh1ExGNBbc6t7x2tR8L3WqsZfjP7pbUnQvX6orpwWGvUt4dqXYdm4iZEsZwN9bQam8CmjQbSRWJ6z",
  "key9": "23irnNu8BvdG43krpiv84PGNQkpEpAAKooGmehMcHqqc7ws8ZY3FK2dqmdqciwwDKZt4q3X6a1jR2bRyzbdLpgBa",
  "key10": "3EF7K6wgXp4Lc3zyN2vAzCcV8MS5oLHeAj6etLjnU27MSJeuXWKnvZtw9YAY2QfQpaPUYN9yj1z9UG4Mu5U3NrJ6",
  "key11": "2PMHKFPoBzqi4MknT67h3yAqqPtFnWQ7LFRMJ3zyCLCLQuEX5rrVqngsmqkehEKv7noExBaq7VDP8juakQDvAwLt",
  "key12": "3NUaWZDrVEvbsDLNEMZL7YGzsNtc7Ykm9tDtxT1EuHbaStJHFMQXyY9xy9ujNaT1zZAx4Ca5Vch9xqvAu5AFWACy",
  "key13": "4qCx15BspzYqhq5yCqHkPNcuC2ab6916WMg23SEseRVQcAMUo7JKcSgvSvc3b3YHYxLeUeCxagNdM3hxF581R8Sm",
  "key14": "3HDBnkG85QT8dgLp9hBuW5kt23CRHBiB5Fg4Kjyc1r8XzLqtFhHMMqWMZvqC99o2HJmyZDMYfQboM3ZindenWRn2",
  "key15": "4siYf4zJnEDgiTWsAvadpWfjmjhmqdNMFdem1ub9wFihxD1CEzjBkHJo2mnotQzz5yspZ7sK9vh4WdNyBGmcQEG2",
  "key16": "468ybvvb9CbdsvcR95Z5TNZWcfGW9cx31SQ4anuuKZcTnCFkvtHWQEtnmWv7C3qiV6tRb23E41BjXvxitkzKik7Q",
  "key17": "2dhqLMkkWVLKhwLr4hCtt9tahYf1QtqufYeB8bNPX9ks8UdY7C4DTn4FPN69Dp6zJhArdEYLCzJPuNqd45LnU56a",
  "key18": "5ggBW6mbiu5e5yvCZ9VSc9vqVaeeor1iyMSLCgBEZuPUs8uJkqk23JTT3RnHvphEumhacowqPMJxR2qd6TkBzo3M",
  "key19": "2P1HLeZ98LFfqDWUUAkZNeTvCQfHa4XZYFyJ5gYGqomfRmXQPdq75aTzvnDSvg5smv4auLS7JUDje8onH2M5cQkR",
  "key20": "4yJBjv2vuoQjMmXw6TtEA3MCZX8DePSeQ2BonqDwT4PZKfHwe3aBt3ibXYP6SVnDegojKXMF29i8XSDZ3a3oabb",
  "key21": "2oVUY49ecN2pD4LGRcBepcySUU6VHqACGBtyPBGLagMHmvcwossBninL7AHtZobtujZGNXQ6KYGKZrftiCMeCJep",
  "key22": "3UNpWiefYTB7fZ2pWggPT4ukXysmczNNSnQQm4aVFXYZruNsvM5kB4TxKhcYf31MHbGCRnWDu7UMJBMeh3KSNcAG",
  "key23": "3dqnJVM6gQp44o1fhtLNkKhJiS2N2MDTmWk1H4vvB6UFoLUHYGySdoWBLRKzAgQYiZ6exmhJ6deyQq8cUBTYuT3y",
  "key24": "38cxbNLxNLJjYod92osnSTwb8SYWaqiqCtuKV9wQ7We5bfSWFyRpiynsu2quBWDAngDz3Ax8Zap7jDs9vKacutRa",
  "key25": "cDyfvsW3twGSWssEioYyH6hicsXkYMbZPhCPwnS593SGY4Ah4YnhQBbLw2iZXygaGEGtB6vx5NvsWVz2fhMLf7c"
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
