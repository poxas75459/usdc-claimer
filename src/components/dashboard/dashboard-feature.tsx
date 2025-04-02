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
    "ipFDd3r9dTooY16nUkyNuzMGAPUeNJQcuKRGUMWX2LoWNXNQEdPhvdFRbj55mBgMTLcGeABKoqMGDDZeXkwJkpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7M5HQQSZJ3mQs4hziLkKxQMgGeJAovyNWiUug4vVadArfbX6M3qRiZYWV7Cv6nJzPqNcZaxsvF8CNxpQKDWvPYg",
  "key1": "4jCWqzh9vHUEZ61ptBkNAksEWQRWY8GAZQAACSpX8UKgBwmo2PgwhHbVZ6Y9ZMbH6CWi5qzPdaSBro879wBEo3F7",
  "key2": "5bVYFTmXiPhEjKZ4tn4mA7bhJ5J2w8Rp3UVZKakUPhhuqr3RXLd9XLUPyJ2ugf7UPn5B1Nj5ySRnUtFEbw3hYUca",
  "key3": "37PCH6tYwRpMRcSYFFs1UBVFHgra253d4YD49Po38HZGD6CmjMv724KZxAcBKWCJ6WZo95Ga8CvfeXibY6XAV8sg",
  "key4": "23VwX47S7i9STqUoRZ2aKcAnSYhyF5zKjob8dWEh34YNzjr8fdisihtfMQ224oXrE31XhZvavLw8Jc7kYWy1R2gb",
  "key5": "4nsd4AmU9wnnzKrSs9VCvy9V33kpKUCLRdmR2PEed6uhohK11ctnmzZs214MYe7swaudjf1dg4kARnUG8mvWxUuo",
  "key6": "abHZ2VuAKrzAJAfWaN5guQLCXt8pUy7Qjc1QihurRGcjTjPvHhqGngwNxhHeXrQUbvNLax9Lcs58J57Z5wzQudD",
  "key7": "2g66HvchfAk5ecMUn1f7bjqv8dxma2uh8k9khU3jCthjoe5d8C8wJgbESmnHkcYfsA7vQG2oNbx4xZwfGXDNj3Dd",
  "key8": "4SuSFP18SQdev73TvhhUG6XhvMk7yBMZneJtHXCnu4bGd9KnALFhFvupkFZUquJUYwc3mjq2em5SSKwSx2wXW5JK",
  "key9": "2u3N9YGLocAg5dwEN5GY2bxqTPRxvyMXt2G3d1SvGyBoaPfi5Mp6RqVH8d4keDbPM5TUHYCHQiLdp27rFFHwtfw",
  "key10": "2uQDMMnXiu4a3rmZj1upiGmhwhX7zYoVnDWzRq115yoPbxtYxpWf9Ucu51Zwvq4P1UBAb7Kj7VSzAjKLR6NFcWk7",
  "key11": "4TwKFmgFuCmCHdPttfAX912ZCU4J5KUU9a2RjPJr3ntaAvCd4vcKxnMYLaftNSfXbJNuCZK2ST2AMP4X4waX6Vaf",
  "key12": "2vtvQ2PKNeFDnrR4bouRnQ7iB7oeTYmHMQgkYbu18qmAn92C7e6e7Q5aY77EfYW8khAzr76qVorsTQBAdLXYRnpd",
  "key13": "4NnPuNSqAsgjNUFEyaUCLqtd15UrY34iMwk4MnynRapvvKNzsDeuLbYkDqBS3872ETKuYxHGkVuZNW4qawGv88Xi",
  "key14": "3cgMoaU3y684XHqKm8HfcWyBHYeqUtmwCrUiC9r4FSHKsZ29w71awh8BkmZ2PfRHU5ExU3vwBYXxdeBN3YcxU3Qk",
  "key15": "3EhjDWx3oQZiP7gJUdn6z5HFhiKJvExuhLSKrC6BQHYrgEgD2Y8UNMzpSmeEUWwhsLXAJynUZVbw5UysRATdZGYE",
  "key16": "58AhmNXwCLq74TJrc6uHCq8rhuFqzN3NexRNrt9p3xSeGuZzKZX4oDtjytoGSWo7mj5cSwWL1ZQ1yeGSktW56Vwe",
  "key17": "5wrFJEtfCGDfK1f2jfTfFFBhYJpn8cmekeGYFWNZu9kiPYej5wtaMWAsjXsGZUTCbtAWtBjSsymiZqfkyzPYvGRi",
  "key18": "5x9coDezzDEtT3GY9Z84DRANFxQ5YM718UnaqiyGSZHAzwndKRVba7gYNwejC9BCfT8XCLeBtuehLJBWHCQD4sZt",
  "key19": "36ao7gu2LmZfv3qcALgRxHY7enWW1oYcLZ549uwHVxrAi9VNV2D51EWX9cmwYpwwnjyNUDTpnrcThqrKanEDpbSP",
  "key20": "45ktQ1BmCETcChGJcLcwAZwspq8Gv1xcczkhu6ACAXgA9iaeZnJWzP3Q7iZiWzbqEnxESdLQH7GoaKYQQK3nQUkV",
  "key21": "7GdPScMeJA1aKW7ZVZWBkQGid8MLkQYfDunJfy8tVSTnET3PpZ3f9r6ptUKFHxHzDhy1YCHPurL7UGtGBDkDN2S",
  "key22": "7MLvrhceoqHjmfkEsVTjLqkFCkW13WumyLLKJXWzP7x7mApJFUAmpd2eyzbzFB4WaGvDD5hhpxFcg3j15sNbsUU",
  "key23": "4aiogCJajyvTaScejNqaUcjH37YLupb2UBxeECeQSphNv51k28eGWTh575JBwkn2MHFi8HkxGiNuyiPGCxEepozN",
  "key24": "3UVfMVy1j58R4fV5crpPp4vqsGRRqbVUc6Sookbo1genK2vkDaAqRFcTMBXGoyiV5gJchd9qY7eAk7R4y2tRdUT3",
  "key25": "2j1yEwh9JqQKoSVot9suAnUosvsGC5itUYjMduoyPcTT6sLYaoKkbaLz2FAfhmLvrsxVmn32hhh8huUcZnWe72m1"
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
