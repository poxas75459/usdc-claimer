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
    "4DjYbsRE6nZ7z9zU3kPmSKsbjz2EHX9npMPMZ2EQgu3RVpP7bKbCTQrJDjybz4zjiqyPwiFpjvJygFZ7TYxNvaCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "352QpvgmvEP1eztb1proH1bSrUN9jzkFzsAJaVNVywAy9voATSHHSArwQp8WhppRPvHdq9bVQYVbMPyjRLubhs8b",
  "key1": "k43CXL2gpeEqjCdQbxzXd2u8tg7cprsePcRCMhMR5zzNPSZUqqUN6QLsn9GYZp6BGurvUrFVSf4AuoiF4Tqoneo",
  "key2": "5YvqwJUwiX2ReTc7DZX4eacxUCvdf3PCRiuF3bww1eeS6XCxoYTXqDjNUxVWaVtapi1QJwawtxBBC8XtKUctwutN",
  "key3": "5bsGjj1zmdRewQDgivqMdM37cbEVi76jiPCkTPmfUWqyEx4HMaGAiRKCuQVKSWZbnrXzofDo5bwBNdfJgD6w7Vjy",
  "key4": "vex46uSWMoBmx26jR4fpdJc9pWW3yC8Q5ZJUyk8M9hj6uoVHQVGHqbmsQX7bot5uu3MJQvhBJqLZzDPniBZizR5",
  "key5": "4wXxoSAkwW9N1dk8TTGcV2Rt98VrnEcacVeD262Yw9EY3KVMLQnvXSHzBGpaeVx4jEf8AAyezaeR5mSFepeRN9um",
  "key6": "2vE64xdLPiCVn6N9ZkHSwHY4ShxsH2SKSurtjPX9JDQ7qc2swYLdRM3RXKgsF6DWcJyamyYs8E8EiENnMfdP8KFE",
  "key7": "58GZKSQHeJ6qL3V5JYVh39paoPGtvomKgDDJ6sYNaD6SCovcD9tZtbBjrt9L9HpU792j9TW2L1TueZVyJMxsvyoT",
  "key8": "5SQu68JzYByt5qK29W2aPXQWbp14tvi2bVTPWxakDgxGxqaFzDcBVoycb5SMVbzrHM7J2mW4e2fEcXG78EH5BtH",
  "key9": "54MrBa6rsXVniw2UbAidWMhKWti6DEUTgEWtniyxPPEgkyU7EKUCBYCyCB47GPFXL9dPtm1MaDqcpeE1HoYY8Twc",
  "key10": "2ZThwbcD8uRrznPZmDtvCsEjgVtgWHKxyEzYEm1cXHNfGt1JCfvXmNbyoY1guZ2ATBD99pknfmWSBPqdMaVnEUr",
  "key11": "4sQ2LfAnxJZfEdnY5eR1q9iizR9yvSaoLR3LJCzhyxMmTgiHXhXo5YXtfWwhmHNPJCBZS5WF9jPz8rf18Ynt5yox",
  "key12": "3AYgDWnCrTWi2xgtxJypWQXTiGwqfEPwYUr4uTkn8rkewLpBLCgAMbLFS1UfopRvTk5BQQenBPxWGxRfRmn65HHd",
  "key13": "4kpCCu2yWUBamv6z78JmgHY4i6kQUQcF9iSHq6d2pRE6WGYZR4EHqw7v5n7y9CjhTsbXY3GxmNgNMsXBKDigUou2",
  "key14": "58kc21wpfpjGjAGDEHU6tqghkNiijEzdpT8FdMSNbR6FAFKxY1LVjHtYRmi1TWDBs5PpiSes3kTpHPcbxxzGbHUG",
  "key15": "TFetqRnRT7Lx5MdCHpQ5FstkQbb4X22Gia7CXV7zxDtjEpCYH7qe14J9qq1DHC4TXeoCApzXbNhL45YhXsfDcqk",
  "key16": "2YwyojN7wGPVPfRyNfF67dUiw8tdgCWUn3XZsGBRWcw1BhUin9JLz1hu47uyohiDrX3g4NtswV1BKavF6hborYhW",
  "key17": "GT3fMjkxnojTVRz6F1LoUvWCYst22ShDKm8u5opTqLmY5BtspG8Eyf1hP1XxPkBirDicdRNNbTQ9HY3GsDQCKNp",
  "key18": "2bp8D1aSorBd4q3t19PS7KEGpZxKENuRDCjKdD9VD52B6emRnpYaxted5xktEi8mFumFNbbBDbtLMijM1631oDXY",
  "key19": "5gyfxp6StrqmKRWpB1jEtP2dchnncXgrmbxDdDJatYQyUKycBAwgSvBfN5D3Dgi8NH6oa2nTCcKRJ4qTQtuyj33a",
  "key20": "5SWU1HkNAS6J9eLYvGy6qoCjkuAxW2XAz5TbXr2ABURsJTvcYv8tMZQ1UAxqAD31WDCuUCDLaYgkmfi8K5uXhnWq",
  "key21": "5Y1Y9yyi3NsQEhYKvPcJoKqtB6jzun9tp4QKygFqFZrdHNaqAAFEgsDY8Y2pS5q4DnqjDkoiGp2utoTqiLsmEAz5",
  "key22": "3dBMbDvyfVcAGtM8a3jAn9K9VRUxYYWS7tBzbCL22PVx9YVegmwJ2upbYc8dUzsEhodVZVjbstJ6TScvJHcUJFJ6",
  "key23": "2cdZJSnLD7hzdXRhCfmWV6YbnRVde5dZvxvzaqRLApDooyMsJmoVXCRQu76oDn9zCRY43cT6iSeTd9madhXxJvbw",
  "key24": "5RhkKNjfTT6MQ25b7hen9K5fwaUN5ES6Pp6ePoatYP8E6ncBremMHaXfKsw7Jd4vo1dmuFjVuuV7n7wMa15wBF4B",
  "key25": "RHRUUdVnX9nJMw7diS53Gt2v65UunHDitmbcmvGNdHcsrJyBtUZUCXDSiWtaZdbCiYNKsgo5krjdxenStxWiysj",
  "key26": "3vs8PRv1SBE17dyodHU3LNPbGcMYy3XHkpyeW7HRZAF5iS7SFDncxqRGQEAgqGFH51o9TNsQVt7ANuQqQybtutm1",
  "key27": "puF9FrbaefwzdUgDWAPExWS3qNhUnooY1NFLmJdTbXptVBqKAdxN64m9sWXAcQJVURtcpmHqRBv6FosHQ9M26kY",
  "key28": "5ZoP9KhUp6YLV7oJmEimrVPW6JmN2ZVh58s9qbBnqqoAWoSDJbiKis1fZ1ZnxgGzH4RXb5vPJCBcm9WGzrUeMkR1",
  "key29": "5ViCqVwenVoP3vC2kArFGxZjYCTJvCVnqWM4EVAFhLorrvbQJX3E3CaCrTusCYhgUk3te5jTu3dHjJoGr1fqgLd4",
  "key30": "2sZdW8tRxVzm9Bg3tm2zDao8HeqbEikMuVHRbnwYkkQxgHPfo7CUgCMDebmwmSBQLXUggbX1vH8ZZhc9qH5gj1aC",
  "key31": "5D5Ec1vHe8sD2hxoDsYYgVqnt94isPrj395kCAVg69komonSQvQ7KtUnrG4kRRkJAQc6LLftGdmSjaP54pAYppmi",
  "key32": "52hXi816TpMenFsZrfZmvzLoorvNMifdqTHK9zQvrAb1iRLAzbRG5fhiYhHLKN5bh66kXkwXn7uvpgjb181F2NFs",
  "key33": "3m6CTWNWao7sAiAQK8bKKujevW6K21UCqMkjjAsJve3Xeu7hH6qeS1kepSvwSpws3gDQU251Xj6iAg85KSmfNqVC",
  "key34": "23BTBYrczQpSx89Qsy9sSU7BhpanW1nhDRNzGSNxJimx6rDpiYEDLXnXQKDo4LjTDFdsy79WcaUaRsBN2A5cx1mG"
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
