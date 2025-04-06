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
    "3QBdah3NUapkGUuoQd1tUy53tMJKKYe8KgmJpYVudmwg5t1ru5KgSULrcHudLtSSdZaHMfTucamAJYFBryTsdduu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sq4DiRhsDzXDwQ1LRcsnePa1cLtwM2WnnpRMBvX98bemBXYZFN8sKnacwc4wzcCFRyefzzCvXjJeT74kmdYPxhs",
  "key1": "5RAHZVCaeZ3B8CXRAEuY4DPY1L3K5i1jGkNgx6CP71QWsodWDGZ7fKYRqriALWzciVbwVEuqU2EYiBcEUcWEMWbW",
  "key2": "5Vdy5kMZnb72Vs8ckASkDasx3ZBvYZ8B8LMCCJSMopZrqBFap6AnJxtGYNdNMYk9ufZwVtReCSoj9LTJcbrwkNqi",
  "key3": "2AQc5Ny3su9xvXbLUJxvxydYfGJ9sgCvAAbnwcZxduBC88ZX4owJMNxjT8zo3zxSa78PRsgTqtG1W8AXaKSj6YC6",
  "key4": "3dT3Rw7p19V5VPGjCgvaf4gW9GWie8sVVdmctwCB4pf5gLRmKfBDWYS4yu1U3UuYG3KbtqABxeFTrGcVRfnii19k",
  "key5": "3xi4rVmTnckG4DSLj5WHHEbp2Xp9KvQFBQwhuVWdgygJjUStqSGPCQcvHdXHFgYyyiiWccRRFJA6f8nQHDNSsr3f",
  "key6": "3X1m6iqooe9nqPFcqHhG5yR41nUVp23Bbr1mrmbyHYb9hLjFq7ZiwbKg6v4Ta36FyBCZLbc59S5kijmgwPFGE4M7",
  "key7": "2YDdmU2W2ebe8rGtZetjWCfne6VKaUwNdN6nr4FL6ZheoN1VgR5XzFhTF29wXY9CvdvTWMsa6CXqyCm1ZDKBPs5B",
  "key8": "mgwzs3q6xMimAatLBYPPw3h7qBFXTEWYVR5PcK38CUCzkjiMdjVK3zyaWY6GbDpyEsCjAMeVNde1ed2dTpASXnv",
  "key9": "6uuwj2aYLLsna6h8J7ntSWoioJ9rmMhm5WTJzKefYnvNNcznxW7GfEDFTGQ95risZjXZSzpNpSxBxxSeNRu6FaA",
  "key10": "5WPvHfN88QusRfaru83boj3KmMiCUFu6foqKndb4mSaQAbWNzcQxHp51K2vmbU1WUUUkeKir68RxLivY1QfJCvfM",
  "key11": "5ADp4jxDKyZ5jKm1WeBzVDRwpdBt4C3k9dUw1F8mLveuqMrddakwqFrN3Jw4DDKhR3G1GVXK9YrMoyLPCzzUXhsC",
  "key12": "5sM88Y4wKVc5fPn3wGYU56RuNVEyDqzkaYWqYXVUisuacTrwwESnPjU2HAaQMQJBfcMD3k72yoF7s36JdGdazcoy",
  "key13": "icrSCZtp2HAz9RiVhdCDwEY2RZRhgb5fLggirgkHXn1shFziTJMzkonKLYkoCCgoxjEjvC8kCZLjC5QwYEQqSW4",
  "key14": "4FcCdqkAa6D4P3rSPwZDygenooixPRH9de3HajGx75tVcaQDwu9LfX4AS7tdLfxMxciKqERsTJL6vbmVJcpGLer3",
  "key15": "55PDKhnDfsCcFCEbCFASJArHtA21M8PsuncWngyb7KTbUdKpyzKrDuPqjKupTeXoY7ci6Y87msy5jZQmEXiJv31k",
  "key16": "2WfPU9BP7Yem9WSiMjmjXdZ3Kk84zggmNbLUU8bQbQPd9U4mmRvLyscBc3tGwjezWtjykQQf7cLAHJdMFFJcFkaH",
  "key17": "5cmx6kjDxNt9AuHQHSvX6Y2tpKAY3VMaCsTYbyq2UsNG5usBWQMH1dC1yy5mQEwiq8L1DW39htTr4RKKz5J93Wrg",
  "key18": "cWn22t6UtXWX7WPpZDgb4vCgGogzQy3HybNRaff3kPhFzRMhYKJJBuULvS3xxDe75LrJ6eGyC7KGMTX9L5Qrc6p",
  "key19": "47Goitgdo5CZGqjsiYMvHYYuzfwtpL1FE4Te8vBfe3ES8hknitfYcDpMQGN2ZzQfwNmbTMGBMv6bmXbwyAPPyyZu",
  "key20": "5oMuaPY7ZjBMXvSx6wjegMjJ9XaqEZxvSzq5vbeykRWFjkUv3h1ovUeHgePCWMBrys28cQrvBtWM7bNFdqtKeAEf",
  "key21": "enUgnZsAZxu96aWM4rPzTN9WWyYiHX8TSsEx5jVYTi21FbLWkpho7cQBkNsyWfAipchYj72evq8Kq8ctEXQhm3W",
  "key22": "2C1UBMyE64FFTWZ39MtRK1YvMxstEvLEX3FC1PjaAK2VjEhgJiQZwAP5VL7K6Lc1oQdwkaFK4jfqmK2FvNbp4qYP",
  "key23": "wRcLL3S26PQAujXbn37V5dTHaaWsYTUp8q3DLsvYq4mcubGEh7VjBykgaowGKwRxgyrYv5Qtsaa6eYAB3CLCvPg",
  "key24": "sR3Efm5MJiTUsTtRTkLrsMaWcKg6AXGcCXfd9uE8gJPGxcGcAUGvzoPAT5v5TT5waqWWmTA9ReNaLqNRrbD3N7W",
  "key25": "2t9vwwSCao5HC8xMTK86D54uuwYhZPb237RdR8hxFN9tLFBspzjVizuYyKbbfHydzRAwWPTtfcf7PNCrYbTTT9aY",
  "key26": "4VenPErJXNeDEk5aButZZJKbaadJFZpHkARHT2bkxrwaj7o9qhZdd6g1KoXGSUbFJsASEAE2bB7sEtcTsvUcsFEf",
  "key27": "2h285LNa1GQxPBfM1eCQmK41KNHRQh7aPEsJYRNMCvUiGgo2a1MHzMh58VPqnoqjYHnzUGAgcPNapF946fKN32N8",
  "key28": "2oyA2AcVjggf3fzZ2a3st6JyTV7W5oMHPgwgmkyz4KyLsG1dd1jQrf5VmTnQ7ThU2qDAVsB9SDbUTEx4wV2F9isW",
  "key29": "3nD2t4y1TKxte3ghArRgDabE68SjUfLApgrHypn1CgwwyNgXKcK158qSyLdmZAdXJTuzVwDNpSwDJ8cAcFA4YYTw",
  "key30": "4Y7ktH3qAQ4nJQ9jAw8ubpKKapkNXP9yf8MFVX6BmynVruC5yptA4CXwyu2MKLwZWeohieezzLEWdr3XAHxbseo8",
  "key31": "5Ti8kWaD5J2cEP6rimzsNH4nH5quZdMciWP7dtRsYE4ci6QzoWzRDo22y1jVGkfzPxxUj21BggHY6gTujHrDT4Sg",
  "key32": "nf8guxmdZKzyKvcE2R9h3pNA6MLYtY3J7sZkvt1NdVY1csr6SaBFpa4iwUCygAheBCr6etWaAHm5E3Zp78hAjhV",
  "key33": "RATYr5f8CVDvPqgnBfDZdoWpUxuSFVLQ6BjxJvHWHL2gzKAHr6np6BchmAoUyyq2iDVUFaAfXuUddsWJWzxaA6g"
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
