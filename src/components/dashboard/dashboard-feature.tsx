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
    "5e8Xik2CByWQ77wySzFDuzjEJGHkZwSeAXMqavCVyFw8xCcGz2x2x1c9H2JQkEsanpApekDNjmo1ZRS3UHvLwbjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KNK3iPbKkoa9zgR1RgrkHhGcQwaswbrKzbKCch5b4LPW6uuriUguqJqpHfXPA88hw6r7UEnkdVHaxuqmUJn57W2",
  "key1": "3bS7ukwDy5ZJTVrfS5CLaDMfFC6qTmEvR9o8vtttvf7cgPjunwEQp8QPcwU8vkeLc5sAmiaKSxogDaJ3MTVMwpRk",
  "key2": "51CFVRZdLeLBfz5Do3CVLje2FsonCP9dqYTpra2TgrDYaDYFNeWvCysTaHNvoGsr8HUF5f88rCzJhTfbpBvS3PNi",
  "key3": "xUMnxsB1zhSzzsZrBPgyogz9iYW1LWketGm4ge9uUTrZAbZhVYSojawFtYZS9UCPvoQCjbvvTZEuSwaYmxd4Trx",
  "key4": "5SkMHuAscZY9t1o7NxJeyPrTb3Wmp2V6fQMeZ2oAGqwugJBYwaiKwVqTwQVN5vpWSPQGnA8UTAxu2wjdMc5k8z9M",
  "key5": "4avUtDsYbYcpeq38GFbYqbsExu6xSHRY9BH8ig1tLGFSaxmhR7Y2FWyYdDr7vd1Dgu5Axyxbbmb9ScYn3qqKBGSK",
  "key6": "24TVhA9uph5ZWaWM4QTpABhWVeoTYn54AMD8JnWSgA9xiRxkJzHTT7oSm5CCCa5n8176K9KQRpqApbQjMSg6qPJc",
  "key7": "347wyibLgt2JkJq2r3mxb7SkMzCijosMWknA68KSdF78L2CmXfbqfF38sgY5XFYCqeTAEmo85KPgTTZd8p8UHXNQ",
  "key8": "2AFr9Dszjfjnw7nuzDVNVJtJHedPmAH4W84R9ij1pf8XyBYAH8pFEcMJSyTeshDcgkpEK3zqMQT74kB1sAe6Y7Yx",
  "key9": "kV2CxAG6rXCUbHpUuvxMKfVb71bkdnwfUh4KWTC9ghdPpTZZwRLPUEUt9bcygvguMa8TWJRWKq2tU5owyWUJtjJ",
  "key10": "5D2em1CDg1tZ6t42tM1s4MmtGhHK7vwAW6Qbz7HYT2Mz43x6AdNHFccerh1zPzMSQsXbpY1nsojkKW3MJW48bmLv",
  "key11": "zDYihM2SjEDooDRNZ9PTdTuNWDqWWhXcF7qqgrEZL5Tp3ZS1aDa4nVRLs2Cc53t69mJ8cAA4ZJkRab2ZwQbrh7r",
  "key12": "btJyr15D5YAWBDHQ5QTT8hLMdoBKjqTa1RKu6ocGJwaFZvzWVo7QDuSFFj6du27JxLPDdSg1UoJjXmLFgLALJAs",
  "key13": "64BMTqHyjuu7tSPfwtNv7DafhrqBoxzmKiytUw7dJSRTs4AWzKd5Lz592WUZF5ZPPTerH6Mx1jQ3yTc2CU3LLSsK",
  "key14": "EHTY4u9q2VeXGKPn8fBSw6JYUDcMwRMQ2XYPdv9AH8UHJCMnuCXxSKstbL1NwLHCTRE1VdJtFBtQBJN5BAF1xJF",
  "key15": "3fQEV8AzxXNBkyJs4fVb6e3MiuNqe6irHrNpxrKMy1E3UGvEjfnqQchzRvvBnQQWPc1QeKdArCUeson9MpJ81P8z",
  "key16": "2ct7jezFh2Akcp3JSZFv781HcXse4BS7afjvz61Hg8punXRmzF7wFCZYrGF7cjaKxHwWxWcNujRawiSG4Jpmmiuh",
  "key17": "57pr9ePL1srKTH1yeJDWtxFuPdzGC7PvhRXK79cPR5Ugxse5e4igxsxC83DdPPqgEPNjtqafDNFroQdbgcmRESbw",
  "key18": "64gnohtDqYYsC3szJKYef1A3LgEwwajbnGy56cntp5kCb5einVA1DPbyunmaM8k7SdQ5AdcNebLCEb8hR5mji7EU",
  "key19": "Zis71mv55bRX5LDGHFes32CuoZ3aHA3kBjPEbc67ie7MSQBxQ9yeYavy1DZYr6WtnFeTuwbUHBozjTDc5mNYJYo",
  "key20": "5wUhid1i8CAD1KKtUqYf74vpXu7DK93x9MqG1YHGJXwuaBBXUFfU2TETE7N49GNPjxaMPimzBkPMRDYUPjH2Sem4",
  "key21": "26E4JSCwU8ZAUKBZ4HAtrEp2Nh6P7JV3bTdbZfmHRxMWt8ssAJ9VekZsvM3A11zBra137sLf6Q24HxDkVYTMpBQ6",
  "key22": "3rJegBNMHQoKD3yKrJkB3MQibnK2wRATaMNMNLS61rJYnNd3jeHH6k1WmCQrppQRM7Pf3D8Y2zYhTkHyDFusBKKw",
  "key23": "EakD9csmrjF9uaC9VpeoqobLDz7nANP7QhGZMnkuu2XN5iEbV2ADsmzKKnyAgBFuB5h2NM47VvahGstrwxmAFBv",
  "key24": "2NiTRjB41kcPd5AjGvStPX5aMUnqonkWGdS1mZH2w24MZoVxztzKnUjWYBM8DP2NstLoWfEGfTYwQ7iimCSctMKi",
  "key25": "3wcnBupMRyJ6SPSqvjr9T6Rzn4ynNvQCC1wdw2V6YWQa62ShiegCoyZZXRgqj6zfuoH8BNUddFpi8zUmuGSf1HB8"
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
