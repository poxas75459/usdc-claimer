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
    "2hng5Ue3pLNEZzodrnQYTq5KVWHRcBGK9GhJhLAaDs9vQzNtLwWEcFpoUFEhjBYz6MciNZN5dkrEo75QpeKDL5Jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQqcirhkNhPw57Ng1eGL46T6mgegSuq1ztMSR3TJMJ53xR3RTrMfWLZinSy575xYCC4YkVVxsVmNjF1MUnEqcFB",
  "key1": "4zfJFaJavgpXKDXsbmCBSWCdmkCtQcC7NWtdEq51xv1YM7Ms7rdfBD2WQjZdTVbh2iL4hK8QdMtwMasBBJ5MtKqd",
  "key2": "3bkZn6XnEwTfUR3uwcbwdJsRK8S5ZNXxqjoCEiVrQMytzSZhh6YYzzaRX8VDL9NuGx4wL9ZjhWuEyWvQLFohEgj7",
  "key3": "2UiU15XqDJ1S4Hxg9wFuGnb433z7HJNUec1MGZ1vDmAt9FnrrPVZAjUnyaMDfbS6J7Jc7Qm6qgVRbS8HYTGKzvQ8",
  "key4": "2jVN6VjsoqwLQeHLXG1w942g6Ex6S7a19p5tRrpKAPdbdSczfHHCjL5JWnsjtLT55Tmv6rKKqQpdkGez1wbGRa3A",
  "key5": "4EMDCtWCKg4zGmXZJoVZqk495YfVn5gYMRDKbF86sAxjAvsuJHocjWSX6i28h1CrkggcH6e8YpsFVDRMKCDQ7Sfw",
  "key6": "22Ehnb22TFbWQnihXqEsBUAR2MoF9a8bDz8YZ95pgEaCfi9fnHbm7x69PJutiRQ5aFE7emYDe7HpkH7SmgNmbeHe",
  "key7": "2zLbSderRMbEFaN7tXDLwqeqpiWxg27peuzM2EhWXuqs8sBSChwRyDX1b6gsNuyXJqsQq4hvHgLxwposaHWydzib",
  "key8": "3LwymEsAh5XyPXeSEhmUyy2SinAB6AaXF36gzuLikAy6doaqcniuKTdgTDx7V9gGpmp8qxGc5zQc7ApZNsyBM6WE",
  "key9": "4dHkGvgX9FS9N7NfNPX4qQa6E8xG8HfdbGsSguJThQofBpiqnm4QXJ8dg1J2XxCfgQHzspjqFFMak4jkXoaJ4oDp",
  "key10": "3HneE2TsYVTywS9q1eggtdjsQULeM27v7MVBkTjLTFzSpC2JpEociftygXYJYtADteiKboyZYnZh3tNcM26EJMQG",
  "key11": "66SxWBpkvw8KybREy8u5JxjEQk7RomQRJi6V65Q8f4iZsBs8CEmfdGy1euuwg6mVFrGJxJFNHhahnvUF7hiWvdBg",
  "key12": "2DpfNSRokT2AJwWML8JvytZxPSfPecsuBLgxVqehB3kpVYvRAaNN7vXy7wER6eN3iXoXYaJC1kcTTfwksHBuvjHx",
  "key13": "yXxsm1pL5kADP3dSWjvoyY32LfNsFBZSftnxNn9hLTpyaS4Tt2Qaqi3qw72NnoZo4YQ746CErzyiZxofUBNuo9f",
  "key14": "2FppoAdF8kVhZNQ2SjarGBvVT7Hn3MBBMwcFZXizXyLvxHgt2dKHrsEkHYuh5LuVRJNyNXwsSvYkkksnhu8z1NBV",
  "key15": "53itFU3bF73vRRUGaVDR3bgtHe65Y2yJLkb6U8RQdeMmGm5bdieYbp4X2rdDcHzbj8cJSW1g3EWexbnUH2zF5Wpg",
  "key16": "49JhWrVE8cwrPyH6SDz9a5ucTsCwMkrkMAViYmyHNPR7MTtkiMyE9JYhAjPzxTzmbAzvYiET1QmmTrMZbSBUUk5k",
  "key17": "2NaZC2G3C3QFdTUkeB4Vz8yaPzZingtBvxaVFqucyWT16p4R3KoJuuShLu7yr7jNhM4NmkYrrSpa8yhiKRHRy7wS",
  "key18": "5Wz9nddSaygeT994ctBWM59yCzcc2MMb2LRqXaXJZZuwSGhogxWt76mCdcJR8DdcFeGXEU4GhiG9X4s96KnhSvon",
  "key19": "4ymozQoayyL6Y9FyRKcsjSEjks45wECYwxdFAEt7igMeTD8RVvusp3xQqyytvXvGvpYkNyEH7djwzzW53vH7BdYF",
  "key20": "2xvjncDi2ycNDdFKP7Tm6Sc88DcBaKQrfmvBvZhZuU2paMgL7FxEVbKjcrP1FHzSMSeZtgzsRyTDYhaERmWCUsdA",
  "key21": "2pvtxcL1hP5sWsCjZe3jviK2DvdtibyhKM2JnXu3HidcqjJ4h3qiDQ1vpxkFDWxfa9G9157Vm57ycWmHNRKAKLTY",
  "key22": "4Q6fk2C8zXZU5ozrBuUetExszNJj7MKwo4JZ4QgiDKBJgg3Vjz6dkxpjdrsAK7TkmYZb8jwSNYecFGz6d1rfR4HE",
  "key23": "4LrS7jsAyt81EdufywRDezCZvoUwJ2CUQamRcKYzGUrFvfAZPWNvBXXV8BXus1x11vGYpG6rLi2Ju62KrPhst65W",
  "key24": "4Xc5CGPWKxxoVWHrH5z1D66fkRrJ6iFYhSa3gMPjqePWebSdoWMJVyNNfrokRSGxSw6eE6G1R4yee93eqpPFDcxM",
  "key25": "5y2YUn6ThiNSPa2Sx5NbEDjRi7vE9f6Zz93MGogzBYtvAeLwn1cXztRbfr3nPQJwiqwy1CEZa6B421N56nr4S7cQ",
  "key26": "3hprid977MHpdNMGx8qu45psVeVXp4qQGbYWiimkBhqVgs3GHG6BYE2Xnz9SVNu5iPqwrZHQe7p8qwt7AVu8uGR4"
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
