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
    "5doT3H1AQVvVrxB5uBQC7zzk9asrvMuLPn4p4DpW7XoW2MX1xhdaZc9dVTfNadCnk1Y8aQjU6evSzuw6yoTejNwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McfVMCuX5mBcMEmoeZ19JMo8t2UPZVBK6FA5T4mKXx7auBc1NAqUvsSaWpfBJVFNWKXZ3Udp1WsQF4erEku9KHM",
  "key1": "wx8Q4iqQ4Hqydwek2vD5Lvwc4p3T9XCK2fs7CgC4hP2bdTXGTfG9Vzfk6UEjhr5A7jCu4DgYAEx6QP2jJZc9LYi",
  "key2": "39Vnh7pe3eLp3ybWct4AdLu2zATgxVfscQvQNASCMhq4pgEtNN7MTQ2TAxu1XzyqVwHwbtb3ucGYH2zkAFPSQfP2",
  "key3": "5XJMQHisTjHeKE5m9KnCiyro8pz7Tmr3d4XUR5ThwhdeNs4qQ2YfvQ9B7JVJVyqX1G571PtLx5iRhU49o6mHUryV",
  "key4": "5Jmt2j2g31zTaXAnFGMXFwFgVZ6FsbXE7Q6YhgiMLtGHMgBQ6F4ZjUXrSAZbGcvWYirzh1Cnmj9nHYQzHYdFC47x",
  "key5": "24skrPmWKnEzoJEoRUXNFbgpy5CBY5dUzVU1Lg4NhEdxarD3SfAoacZZ9FbdJxz3fnT4qKjjudk6zsipLLCfrn4n",
  "key6": "2qSrpyGgi8xLPkNvqye2ie4TCWWiS9oDQK9KeHUPDKoi8Py1TzZ2BecRfW2YfeWuG9FGaqZgz3GC3sZU1YXUJ6HP",
  "key7": "3QzM478WydRQeZvpfoiAhCP1CNadFX85mBNrninAEMC1hxpXwFdnpSpetvz2RXJbRX3PV4REXsNFWY58hFfbFmSi",
  "key8": "3WrZA2Bd5AybntbDAxhUvRn3TccdcYXbYknwLebM8Z8cePXBAzyurybeFuVMUhJtQ56aBMfhzxPf32pwyGButLyM",
  "key9": "2F5yY36JYupPHdrfWM21gkrieR56f4BWdNtpuxZ7QNoWq6wwGw39msLEdf34RX39LNVS2a8q6xMXi2u9yWz8KpFJ",
  "key10": "4tNSxKJ9S4Zq1wpSBmKPZgeYwDZHyfq5Us7Yf6pVURb7PNewzdZSFjx7B3rH419SunLGdtQENN9THLw2UVb11n8j",
  "key11": "Mx4bNYjiCRH4gFafypCzfMwzNcSciKVQgf3jZnmfgW7joX1tMUUWDNFeYS94Bjjq7fFg5ZBpcyrDi7MJS61qv4K",
  "key12": "5Bc16u9fLPqSV9ApwY8p7Hxy6AbQ2uahkEqSwzJ1boVTgPP1yWRYbYqGZsBxRMg6iZPkk2sw8cqSv2v846WNjLDs",
  "key13": "4VgkBczaHwyP7kiPSy22ZTLUUvrS2VBeGJVXpHX6tVoV9RUgUfc4dFdHwXEuSgQwb3hqMd9fHivuyrXJALbq9oGE",
  "key14": "3muRTqfwQqL45tb2Afq9q43j4Qsz5qa6TsNat8LVS1B52hhCSxyW3knhs8xnBGeuZoKwRDPoSqhjEdPrk9wLFTnE",
  "key15": "3eDDiV8j8NyJeF2DGsxvgNS7ZFuG1VXoNQpykRvU2jFLw568B2Wk4vyWRoxhg65CsMQZtU5MDDHTqpfXxfNUJA7K",
  "key16": "3TMy2hTRKRefg94JqDqbCMZb8JZa4UpvL8Pq5py5NEmmKdafC46iKFn5pUozSUubqTQXQohiYXKgUTkGpTL2VF9n",
  "key17": "4qSNQkhxkyMXapxLnfjkRuPfYzwENqd3du3287ab56Jk43gfAMQNiExTsi1AsRswUTK2KbjJSnN4xGeSq6dfoioL",
  "key18": "2wxrUVRyEh47tmQFVimFY7bJAHdKzZoyk35p8tbRhGyGW1VXGiejgvE1jha7R1snd9sgLzut2zFWumCS2CCnarnS",
  "key19": "mJj1Lcqsmq33wRGffQoQF4zAqQwKV6DPugPwuzEAD3YRr4rELCx6MmNyvvWEwptLF6QB7QCPJ897uB5cLJxvd65",
  "key20": "4tv8UJPLrLaQCn88Mxand44wcEdm4X12KZpgi4KComJW3LRFtMDmVvufgdpU6Pr8oLbwgjDbigb7BTeAdrpjSodJ",
  "key21": "Xtd3THnBY2nHLyCR7PUrzyM8kWtN6sWPKeHwPJFfE5xymQjLGhvAemcF4U1gxhmWb3g9AhGpGwVkptgQJ1sH7zV",
  "key22": "q7qQBPAQzGn2zArNYP2WUEFNYLze8E26u7i9E9dY95cJYj1wCh5DJp55rYTakbeG76f8aadozFTJYjiaYEjwBvn",
  "key23": "34TSPZSFwH9oAh6WamVj4qb1BeqkMro7UW9qnAuByCMk4mVqbFnPjYvCEiVxnAHhooAPeWRxsarv3mr7HMXLt7jF",
  "key24": "5ZRgMoc4cX9BeH6xXkykNykWPJ76Rc5KbFCZxTKyhvPqH6pr2CuqLHZkq3vtUMntFVfhf8woibBJQSnDspTifAFW",
  "key25": "62frqoPjrdcuvyRVwe7cMypYD1yr1JKRTqnoZFCS5yUNNwFuv59oTwcRZ4j4iFJXg2xGMd1nRmPZAxxKNnnJRTsY",
  "key26": "3aW9GH6s4T5x3WGRzfW3hHEtgs2XyXB3TE1cUZkabyA88vZGDHWf3ANWFyRQrqvmiho3QS96osK6V6FBRxZP9dX5",
  "key27": "37omwNK8f8ef9aafpkLsmAPncza4finrKBRjDgnJC3y7CjESNVN71wZFFmLGdhWaAbpkHwfhDWUMzRyDvkAU5vn8",
  "key28": "52nxjekMHnyogFYeU2VarnDXwsxHHhCEF4CsEfA7qaKqKKvcRr7qNWHMhr4M3JmQgrdirnK33ZhKgK3Y4XMz8chA",
  "key29": "6vbaNB8yMs8KNSrhjbKFwi55iNWEJ7M3NVpm8Ab3nAzMJBoNt3MjZomyGz8iBvVUFqEjx3RMWeu6G32Zz7n3rML",
  "key30": "2MKCzrVjtsLWSqDe1yMConCGftiTRsjYbW9xM6oDQko8ikuAXFQvaHH49opYYfQbMdn144wXp1BvEAEcPDitmJpw",
  "key31": "2qp9jGiQG7cP2NadWCEscoQ1esFHCaZi2dTLzwXRUfLrQMXWBFQNL3pLbxQodcEGEaf1zC3xPsUQZf2yhxK4XWLv",
  "key32": "3sbeLMnJdbeKafYcebiCW8XfVp2sFSRwt8dPfpMxKGqatLNSzNRrttYz31Kv9RXg1J3bDpC6UPtgFbZTpXuYFH4q",
  "key33": "2LKubgSj5ag9Jy6bqRowF8qEdUVUpF7wru8QZEi8rgcBqkRnBDo2PEkivSrVezdJV1QbZGMMq5R7aeYapNZ2Ei6E",
  "key34": "3mxEYDYQRNKnfiPxLZZR9HxwgRkGVoiFVvPgCw5Jg2qjDzG7EeyJTo8UnDCyWmMHwZ8tZeUcYAvSf1ZSSCfpZ8iy",
  "key35": "6UP3ZHjfkC2CXDg7wAHR66hAUpK38kadoaR4mBopC4iZQm79NuAbZjL6np1vDA4QGbWmUzxeiRnrXi8k4ukn9bd",
  "key36": "4ise4bPXEoADDaTzKMGDX5pmZ8dxtrVjZFJjmvvb6daqxisBgvXiVSAWaksvPq6EYkszHHWCYCr16aXB4yDYQZtb",
  "key37": "5jYdytkxzXkMJqheqx8VeFyPX5WjSzG85VdwqGPZZ9jGJWqNniqn59WDx2vygXnnoaVD8pKkYtpTKmq9pCw2w5kW",
  "key38": "4co8w9GwwCgoxAYrkhNKcF7x6NeNL62yMF8nNuBycwyjssfHJJ9hhzXwEE7KPKn8XuPYVYHD46pmqkBL4abYowKw",
  "key39": "5c1DBpEFBPvpSMYqBtRmBpESrd2m18m6BYiuUEkMhzvsFYk4uvgPoPmT8hpoDfsLuqTTETGpYu2eoiFETCH2PmQ4",
  "key40": "26W3WPegHMohpp9BWfb9SZycQHipJPjQo7gL7chRKtsNwoqkXRiGL9CsePhe6hPEaui4wR3aHcVzV37kLUHCm9kt"
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
