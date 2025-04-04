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
    "3FhsP7vjX5WUsgE27jvPaJv92nfKQaNPWztaEW7978MzdQY35LmUkdPi1oqeEdL4ZhqdKEipbCKAoefqqyKvYmKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXqCw87vWr1m39TMD6pgGHVV2jhrMwxCpmhN2nMokyYzQtUCKSTEGZUaWk69WEZZLfWav76uM7zpuoe1Z6Dj3yc",
  "key1": "2nG7AVsdibU4eb5NL2TrzPzocoDkjwjgmEx8eAhTr7NKzZACYtfVURGXHA8Gh8yMXag3UDB4MQ1nqhAAe9svmK2U",
  "key2": "cgP7PFcXY3kW3Yy7oJym7qCjrrsZWbWMvn6F5ttzFfmjuMTXv1BWrwAqUBdt5Y7c6bosywMVeTv3zMSyvtowMb7",
  "key3": "hVANDs8RAztXtFzuyzPjuoyHdJpiZAy719UBSoLGp37uijP4H7VC2Z5A71uiLbq4gsDDDZdrBUnJ3aVC3zpmyyV",
  "key4": "4bVoeYt9XX7Pijp1ENkbsC7rFqZ6m55reNatiLYD1mSqEUBmfSJ4nBFmbzKbqCCgWcz63W15evuFmB6FtUN3dTaj",
  "key5": "3BK43APz6TXwD9sme5AhYWQmT3XaV2TBathB7VGguAg2t5jYGHmaurNsSRE7aWvM41UQvcAwSYtmTbsVoRzq6CgH",
  "key6": "4Tj4AcFyRN2cXMHgx5DwksUooMFZCQa4doRLj6kchwWuNFbXWnocHtKjE77NbDGSbf5Ran7WFyATph4SQhHaU9qN",
  "key7": "31BXBBSMmyJaQ2cXbVhacv963Srq8WnsnNUxu5yWqYhFAyRrSJPpx9XZDA4wMiFhH3w1QN1ZjXSeZvNfwbqbHY4j",
  "key8": "3qbTHMGVd4NDmrHzHtrGQuTeU1VZvaZwNw8axgNmcXrrtoa4HXMTC69tqGnkBSy9D4zhwAFMeLWYkwME87boaWmT",
  "key9": "3DH8UDBtTk79MUHHkCKZoqx3oRtyjw89vvbiB3EXs7NWJMKrYNf23ycfHbCK8qyVWSZXMFPhqCQ6QiRDXT4e6KbE",
  "key10": "57yEjfsNas68X5v2sBt5c2oU5kh7m2UYVoxYrbbXzXhEYCcMB9a8mzGKQ6JrEDi3qTESR4Ln75PGt6mcULYBvHKX",
  "key11": "3EJrreprQivMj8cu9gQQSpL6BzYN6KGyfzmW1sZx6uCo1KVHo9udXdjQTRD1utVRxpNEfoV37wi5ZVMTuh7T39WA",
  "key12": "4nggSFpUqpjkgAM2zZMvb1q1BkTR2V9F7aqiPFVvjLHHD3NB6viCWjreJxZ4gGx96GqZKgxkemfcufCXnreyQm6N",
  "key13": "4VcpKquVHpTyByR67uBj9huqe59WeoMXZZqaMMJ6L1jN1eVYVoHF6SnN5EfDfFUndZegK3W5G9i3mDchXfLAjscL",
  "key14": "2mbytXGgUZ8RPRXeggWzgavoNWeJreVdZZ3241Ep2Ty2dWMpWJRGMgD8nfhUJB8PgjCuQnwiX8pz16Q1AqsWmzi",
  "key15": "8R4NXR189kPe8yvX95bxCvUuPY7RraPUKnPvmquFhYd2NVpY8DEdFsTesYem9mKVQfgGL7NTvH5V3qCTbkz7mXq",
  "key16": "4FTnbV2hAZjHNQhJwuZpKLt83NSKhbAHauty9YUojju9HSDaQ3HXXh9dHzHcLR1VhrhY43tk9aTFAAfExWFnFMEa",
  "key17": "3UMhuDErbJx9SCdQLQN9Dzd23iLct8EM3rdywnYUGoLR6LVVdXUTW9N9RYqMoSsbTAGFEg9e8EFNvaoqFKDBvZ7B",
  "key18": "4d4pS9K9mmmV1fFcgwWpLS6ehg7D6eJVooSz6on7vpoAjwZbDzDs3erqVpAcXrw2LgjsdYRfLBTsYzeEqj9CLPDs",
  "key19": "5Mkop5FbcDRSesGdEfqn9zhwoZT1yPDvWwXorizXKE3uzXuGcPcqmYqNXvEYmFnohJE7VBJiS1sEzeitaCNCrXNf",
  "key20": "47UV6JgAZFXuoCQ6XmrBHDuTP3B7LNPmoDt4TvAef6gfBuXeooG4qtr6YEW3tCcRHzBN6nzpRJ4sMkSNXGAtjmZ5",
  "key21": "3ePne2yFrV5DgZpBA6kLVe1qFen91vpvHYpTog53BPgXJyEf5ixKnqNnLR86qZnNYxHB3GHPsFZrj8okztvkqNhz",
  "key22": "4ufqHbigLJ1HKe1pU9uDWhnSN1qf2T3MGjrsPa8iRhVyHjavqorBJ8wQe5WLZSddBpnHLw6xbWK1irjUutH5TG1D",
  "key23": "63XYXBJENPk9c2AS4o49L9i1YYH64846JnY8wRyZsFt77BMvgErNwyb9RT4PyMJGDGQzYk2TNdruypyWm7fZJ3WY",
  "key24": "4WtYi73tYWuLEjenMZjcVTtChgoXAwycAKmTaSjfGUi2pXXTvw3EL7vjZqD5wE4XdEWL8CKQZXNoLesvehU2mCtL",
  "key25": "4sMMMEbNYhdh7ttsJKAF8gijZ47vNwa7jJU6aAxVpBJfWfLKJZc87QsuELNxmBa6wgnNtDcDpaYtAzEXt891U8L9",
  "key26": "4k8hB7BrJfyMArDLtvvT27Cnryb6ttS8udczqZvKgvexfgNt7omy3x6cWHzyhRcs1PcZA2CeEPwjiFKKSUmBodfz",
  "key27": "5wcuPjVdAT6pJgTEdyKKDtZK1ue7MjLyQbjE8SWaU2tiQk3pb25idBtoEphEHyLh7bjppAaWuvx4frKZUpcBLcuc",
  "key28": "5hnyUKMAwLmBu7hURefdRcz2oaFLTj1hq9hRYKGkeydPkYNMFD7XYbcVJmZe6XPWYLN59DobPEVqjhyeFZrenMBa",
  "key29": "55ZepuocVYKS7cFxDnLcs166FwULJ79LFZSmRvMUzWBovESKrgoP6xRzaW1ogJrazv8Eood1Qg1zxi5RpMZFsyX8",
  "key30": "3tr3zpgXntU1tM4VpruPNktiCLPGkL4VNVMYhh4SUoD8x4zqSto1y1kV8EM833AxwQSv9KcGC9Ez29aWyhFVADfZ",
  "key31": "LghzhbefzfhQicdc1aYYUf339YUcwobAxQTQEFTnQXbsdkmwjgkUFjFxdwzaLzwCtgLXzmtP8bd2j1GbHFuvqC3",
  "key32": "a7bdciysxfLyx9d4udubwvmvtsGTdreC6gCb4vWM1u91JafvVedi3yjFLrxwPsejxvFmCDDdRhYgdF1PbfetuH9",
  "key33": "2vbieSP3tzeT1ha3BoWeKzVXhwYTJnbLGHcpy7q2fs1j2dPjsrsXHp6P5UNC6FJAKk6YBdvcf9EVUsHuXXn4rdrP",
  "key34": "5DmxJ4kYFmpMePxajvF346cy1teDYNA9Jyr17TqtGPqQAfeEruyaU5RnY1tnZCT75M7c285WEZjqD1W1H7VLLWRv",
  "key35": "3HoXfaCzUTrYr2Jun3fdCPyWHLK3VNZPCW2Xy4JDXH9JbfYi4Ha6q2AEBSgD73dbWDcfJaPw7Ayiby2FubRvGzDL",
  "key36": "3Zb231nj3eJwA1WdCt6tyj4kAic5Rcm6xYi55W2pyGcKjEBDGtqtGFRhi8r9p2DUNJDyveYEUT4pMz6YaHQQsaTK",
  "key37": "5455STqXeSgafDZQeUVgbJyDDgjNmPY2RxgvEMh1qdntw48SszSotUWyYKdV1Lmopy3e61jT5fTqPkPX1R8A6Myx",
  "key38": "4M5CCp3tmumJLYwoWvsgdi24chtzRRtZuJE3c1PuDdgc4BqAW59EVwt25QGqAURKSf15PLdaZELha3LDz5ucB73U",
  "key39": "3i7M5xXxAJwxnhdwm8iyQ9NdejQbhSNpVSbugQZxfEahGAAseUFHYs9hJbXGApYRTSHRpNMpD3kXtQ2c6FHfNKB4",
  "key40": "59bsZHAJUurxH92VLhUkbE8sexBcYZwJVq4LWBAjUia9NJ1oKUKYVVWrRycWA7rHCmN5aW5ZSfcWqFqoYrrVYom1",
  "key41": "3M8zAJdZdtZpzvJcAQPMpnd4moPRpxqY6MaMnURwvJLbq49P8WuSUNbeVNXRrEM81mYHo5qLLNkbEmF2jGvHNxYw",
  "key42": "2XsbpsXZ4Zb81PCAbMk1qmTb2TeKe1UdPSdUKHL86XuHhpNSDrM9dT6akxQZobn9FUFWyNkXpg9aCwmnBmHDk4g4"
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
