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
    "aYCMg5x1VFCJP4kFTMXXdH1CCuRUNk5czWKcDeRA4FS9jpkWhefMzPT4oUob4FtztraQaq4hMEDVFnhhpfQjNa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YyT2e72ijhzZSkfydLgpeWkzXtAdwZegB5N98gREDsbAkmqCZXi8eLkNDVC9LmLnyNwr3jD7FSEPfhGz3hqGyj1",
  "key1": "KamTX4ywUHmcxsbBU6xiPsfgRTefPDuWjCzuhyVRrVwUTLfksCH28snZLciUWQFLTdxEWkycjJch4DPqiWKKx6s",
  "key2": "36puHTw4EYgnBJHt1BiKKCMmdmPzxcC8FqDtMHPW222fECJ6NYNx84pjKP3Q5zeuvPBVj5xtrCm38aUgWVsgG9FP",
  "key3": "3DL45xhScK4vihutpmba5m1xw8wc9kHPb7Y6GbdSEPE3DweXsCxHb8frYe9LqzAGxVB8xRbCdwopy8QzxCRbS1kd",
  "key4": "3hjo2bcyyV3xGRQ35Ei41cssBzSKZpnVwY7wtAe9xZSUUPuh2T1ssDgzVQNm8zDzugUCCJh9BmettNPBMRgAG3gT",
  "key5": "2Peo2McELwsCBLE632UumbeZCJ91WvWvt4VZcuFQP1GMBt1pqGWmxrGUTbggoSBzffFVgGgzSsyXefWk1vof7GMg",
  "key6": "i8gZzCczzfhkmfDw9qK1N3xmjqKypM7Yk5WkfFbKAz4Jdqz2kLNUQdGPz6kPXcyV6vthUmhupxCZibid5YAhhXc",
  "key7": "4M3Jt6HbhCYeg2dWkmcqMJAasqRps8ZyksiQpuwC8PuPED88PDzueSR93ozVgFNPLe2JGY2Mmjgf5aTCGuniiusK",
  "key8": "QPJinstUSWSY7STXeZXeLwyakpeKf9F9ekmdZ7UxV146g3Gb7yG9iddYuFmcVVS88GNzFYRQHMKX9UeHU8SsUen",
  "key9": "3Rw3jLMkZEB6f2ZQaWhMQMqcdwVmJodW8yCZKJ8U14vaRxsuVqogtoQmzKzPh82MQRCGzDiGj7s3AgzRcJVZhzoX",
  "key10": "4bpR8DDRcmbNqH6e5tBTQdgNw7Y5TFHRt1j7kdwVCYWvM3icpxBbp6eA8bRYHbNdm2CiRPkWQxmnqgdgrdgMBbF7",
  "key11": "cPT2qvqqmT1kqszyqN7RWWXby9P4LLMVJ1wnzdnkVzipLCMCZmSncAx3cTcR2fVoUk81eCVNr7qeUaRd9swf2hN",
  "key12": "Fon7vdbyjV9jayeKpfv8ofG9Tj1RUvCLeLwGNR3Vf4GP2wzGyFUKGo31sJYyVbr6wvU7BhQvu6CfhVQyDodK56s",
  "key13": "2mz4pgRFarYUjnFmnhmyZnfMWWPooFY2NcrR8nyPa5WbRPaSfKvJ94kbPmPXbC32iNkmLd8gHjXBi5M9WPwAK9no",
  "key14": "3yEERdr4pdSVwLZJN8Tis94CubJS19LomXMXHp775yxe9BZUDn2AmHygnFkCYRnGLM5ebEqjd2ZN3kiCoaiiYTLB",
  "key15": "JYv9edpRtohAMBpmahDLvcPiccDfzyELps3r8DhJVDKi2zp8zZHmfvXUewdUXeK8QNzhQN93wqiW1iQbguLhPxp",
  "key16": "eGJAxE47XJbReRMw3WuGd2j2LfGuKhrwSLy3mB13b2dJZecM6E5kxo9qbyiZMtx5VizANgkGmMh58Estec4HH5g",
  "key17": "3H4k8A55Fbz9NJTAcspbtsdHTY6mqUmnqmfZVAqy95v9boxThNosscSupt3iUGT9WgujiJE5BLLeJZ9Tzc6h7kPD",
  "key18": "3Zq35et7HvUvEAN1qJ4bqswBMQJFQ64aWvJD8ppFCqNeJtvf9khRo79QvLrn3QDPzoos8g21PMTynCexALZFzYW",
  "key19": "4JvEV2BwrsAeBDv65xbzs4jHzED472u2aoGRbvvzTiHi7Hd6KfockPxJa3XQWpp2aRm2M39K4C1KTT3mGQcVn1KT",
  "key20": "5WzEPn66uJkkeNTmDzAQy23mchHe3nVTRCvJMdKH1XYyYFABFn2bKAC7CzbB2c823Bkh5oC5xasdrYCVx7t6DJBo",
  "key21": "2wjLJ4QMcPN62L7nmJMjVbNQU4k3ri3zcFFPmUKR7jxapX2uc8wFcGdadjzVHm8JD7y5pUK2Bs3uNb1AjcrbcEx4",
  "key22": "3TaP1jMatq3AiKRvy5XT3qguDqdRPSrY6LH2md7xkVTskQBCctZzvkLdFo6JqsTCAkCrWc1udQdBJLLaYJFaRGoY",
  "key23": "5pQ2yVYu27KocWG5CXQsDgBNCxpdj2HJGTRohgSNQ8DehVpfyVhHDn6AAiK5aBcQqcsAgPzcCnjeDqys6sZGgVqU",
  "key24": "4k2gQ7QMnkq7C83koY4rjeJBTWHBFuVoSbJEvxgo6a54LRk2C8GT9otuEHWSrY7uzPc6JXruDx8JchJhbnxRMxzy",
  "key25": "2XZW79nng59gJTZ9NpJUVXX7sj8wyjNJzixBob2Ed8kDv38aHHLmEA4UP8oLBvGnUarsrf9iXir77QBAgSk29Sox",
  "key26": "4dREwsfnY1BYecoaJ2RHLq5J9NUkHNTpd6Phdbo5pKFNcN1xFGgWk1sZE67tKZi9Y78yr58dFbfUDn2AutTNfodn"
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
