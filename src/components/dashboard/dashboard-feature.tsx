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
    "kfnAmSsvPVq1fjW7HwmzVHvRfYwEbSKW9QqHAWaysrtwqcpuGdGDzR6DnSM1aZYqbFEdTfsSFEF9WmU7YQ2JxT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KSrTn4pSXi2fsDAcQnX1hA5qni8e81PpVnLbQ8wfifS7wYb13mnaLE8ZuA61gTEnUrHxqggFXqvMuXG9Hog48jF",
  "key1": "3imnUmoDVqYqLBD1tieDLVY7ogqujAnF6Pxhp75RcXcLHB7LXy9eoaKvJC9v9UXQzy7H8ih2Lk9vpctgJRVHgQJL",
  "key2": "37BJR5A4mT5PkmRmMxvh6gkttacvLrKdx19rx9KCXZEmJKmGKXixQqcRsGCCdnPgcaEB5m5zdhoK33Gt4xommuuL",
  "key3": "2Ek3UrYCbLQtPzUACcsxUMvqsq5F7QompWtzX7m67M2hA8hhUdptGChAo8cTyHcympbC3jLe3QMJW5kbB7odoE8f",
  "key4": "4vsjf1sLbT9LdEQXxV1XBMEEQdXL1wFTGvj5YG3ofcfFhMMsEQ9vrxMojKxmEZxzsa6oh6rR8uXnAnyygiaChge1",
  "key5": "3g2Fm6qJcbmjxHe1WkvYoQKz4v5eKTRT8WqffU3Lg8VEb3FwiLon4p14uxcyiMH94a6cHncWnB8gJtKN16x5vDAU",
  "key6": "67WUq65fQoUayLnxNrZRfuezyTQX1PDrLaRrM2Jwpayy8w5zrkjASJ4UVZoneAxMX4QCMkuL1e7fw6z2XLiGxzp7",
  "key7": "2WZCdVBiyUBKYYJBGgojBd28DRZP1qKsPWCMVbB4J75gBk5wwCc8gZ3PoKupntf1AZX9bKEsZ5jSR6yPGwqSCy6c",
  "key8": "3uPHWUjYYL3V8hzUxCxcmMSLMDNjMRaAATKBQiCcnc2vdTHzH1Qv64zqwBSN8fbjKWsjfZguDa46XfFdA8uPrc2a",
  "key9": "5MKTFqoapxCQzrJRUSKHdPnTvcCbJg2T616kkq2dGTxWRxcMqL6XSeYcMhDSdH3pUkN7L9zdYbhGNaEGeGUBb7BV",
  "key10": "2LAu7WYfY3kj9KJKig1WHMLzUbXhQBX1s4aYWU8w5oUvoTz1m2GVi7UCz2aiTeXMPXupc5QmyC4cBWgjfobuNsPu",
  "key11": "JQDhrn21ioBbFPJ9LoA28riCF8Kq6pjq29T4nu5QFa2riQPrXfq5tavou5fxU1usDArF6mnLKNs9NTAkYJrW7Hr",
  "key12": "5yQqvSXNeRgWsMyaeVrpb2yPXQ2YDJZjJvwfFVmZmz7Aa5C1pZhAnaq4B6oPV8dzD22HL1SXvTNkLQkcmH1iz7gZ",
  "key13": "3WVehAGBpafwjVC1ZmhBTTHETEZsrUUJJfYMyFXJfWyoGRq4AAMA4XPzJvorLoTgHmfSDnxnVDjzmfNJ2nG8hcT9",
  "key14": "2cz4dkixSsPZ3mVFrZ5mg1tTZNCdMa5nnfJxqYGVhrf8i5ZNizhWuDf2FTemjEx7qmWMAK2Rzow73MqQs6jwXMq3",
  "key15": "661ZwbEjxZSMQLZzWcn1RYQnkYH3z7oMWHivqf5DKFb3rJ3A9c1gERZLq4CnexvE77M8nwbnK8VmKNvcn7GKJG1B",
  "key16": "65cwkVxsYo7man7SWPNn8Js6Y6QJXcL8VD5JfQxmHud8UXd5e4mhYGfVsdNiomerCcJoWRvrxXeA2RxbyuEvhxwa",
  "key17": "2VvVvnWgnrZYASe4h98Rw1mtiHP4dd8otYT55AaLaD6fjngAPpGWs88XXmJqkYBK2rokVk7PxYktMUw9Aq7brfVq",
  "key18": "TnLyRpm6hPUBMBLHx4M7BiANkZi25EM7BpB3Dfi1RBajsV3TXgMMwvTCbv9836N81sqHGqbN7815GpsgHMx2Buh",
  "key19": "3RhS9eejy2mmnsHfQA5pNBPBes9TRoipGci3TNpntvY7Yeoc7VfhKLN7akX7H3jXXmibVBph369EzkH9aPZiLGg5",
  "key20": "35LpZcEu873GcMKy5oBtZ3yFzbPRiRTZHX86PVjhKBbbZwoYdaJzRrSWPDfANJUqgt4eH5bbSFg2Q4QMtAehpxfA",
  "key21": "5Hjto6TfkvaLTAa5bxBDPpoFTLBxibRVj3maiocKtzRmUNu1n3NAiRSTdQkVDFYg2BAZAYExmQ5viC6PMQmPoa5W",
  "key22": "3n3cWbSTBMVnS9wRuGJLVfpaZadNmw54rZBEbBZvrpAUPUqp9ipMQwtucM85gmsTpRL1tyDPy3FoK3kDd8WAUDB4",
  "key23": "LuT7r4684HyTuAqHYQMzXnguFgWqUmP5dQEjuer9qnHH88mTkmhULpG5Ho8811ex3NJ6pJjYQ9C8QS99Kn26TYF",
  "key24": "4fWhPmhpBgzcPETwSQs8Zm8iuKqFEb9p8qCwtf2P57ep3tVUBWKex4TZQwzaRcx68PyDGSad5J4Z395q1gmvCn6r",
  "key25": "526iJY6GpMVfm9ySLXSSr4w3zzQzfLWAZRWZDbnwgosc82Hddhh3jAZ77CaqM5rvgRkGqnH7PuMskrKp7fWtsUhy",
  "key26": "4CfDsPRPvs4hd9Yx8QvTunCejG422ym3WxYmD56LzXVzFTtAaeiHsNaYzTT5M41JYCJjRG2f7wd2gHkv6UidHMWr"
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
