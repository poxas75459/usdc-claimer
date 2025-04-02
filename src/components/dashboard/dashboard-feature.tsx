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
    "4BmrwG9P8BmMTxCg86AnH5nsuq3Dbqf6d7zBH6ctNkFQ8CEjFmHLPLbXGSnMSTKgjzHDsGuqr6aJrBA99PHHrsE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pw1nxWUcFn6CKhUTz4Etb7wz9eGmBrk4q5TM8idNhqD1u9snEx7m5drhibsqZMCwgJvzrEHaD3XGDAqKQTQthVf",
  "key1": "58vFezi3BQ3tcdvxN8aFsVtmZpaSiazmwhmx3U2DAin9v5Quugomp8qA9uiuoZHJU6mrjzg33N48pJhywfjji3oP",
  "key2": "46pvZnP8Mb889GP2P198p25c3ufVrgN2GBu6N2x1hv8Ej11uTnVgRvKYNQbEPzSD4uM1FWqaFejiS5nKzEwd8P7y",
  "key3": "3rrTKw5HSyzSgXpUA6jYCoFaw4QyUyCmyJj7qiBLkukykidfm9zqD8ZdNdWt63HpPxJeVbzcyxnMV58qYa4wL5eg",
  "key4": "27iz4H4AipLw9CHvkeyyCANS5B9bHK4UX6BUxXDyfXhvrpZ72HjH3SUVJ9H6rh4EKPRk2nsRZW2jDEd1GqARAj7y",
  "key5": "N1tSWXisSsmtadvJpas4gPomXKR3rnopJn6oJK2JJFKbfCFuy4fcQJohmZQ4FAhMYC6Sb65hZpRBVePb9KofDnZ",
  "key6": "35C2Pj2KKGd5Prx6gt5inmZcXYHcsHrWp2arD5b3d3ahpsQz41UizZdC4rV6mSfBfY3YVuYpSoCPobGzs6EAKvDQ",
  "key7": "3tXmsUYSdztNChkXRRiatcgPKs8oFXMCPsuJMzjpmk1gp7tX1q9MTkyPwBqqnekXxmAznp6wPZpKn8Ax8mHg7Pfz",
  "key8": "2DmAJuhRfFb81FLnytbar6gMPDgg26jQixNK6HP633TEAGhGovdbzoGrLanxMLWZ1pUiAgEyDcaYMQHDDeQ9gP5o",
  "key9": "3bxgGVW4dEzgC3VpownSB1TC9qdkWiLRF5qYTrR8unDeyWRWrnJFiXfdrXH2shA8pSbU9Gctn8mnJbrb6eF54Luz",
  "key10": "5BbMdF2p4kkBZcASJ4ejUTXLi777uV2ac3FBemsWrBHCoZYzcuQvHo9a59U4r51yfYDbMycZ8ZKVzkYkLcuXzEC6",
  "key11": "2wsfsLHMSTRJi537SVYo5HN95fe18aaFUYRs7scET7udMw7QJNKkfaqoEaBC7XrhserMvsvqHpY55Ky4GRfuxSdw",
  "key12": "51ta1shfX97Dg3Gd367WwWXvDEeFEV8DUBcnEVC7qsK1JF7DvV2D1ctvMiF2BohRmvzwK1tzKFchep83QQMGBNmb",
  "key13": "3N4yo7ELP5od3G562gP3e2QBmdbobKhWhUHQJf9kJ3LL9SmHrJw7yg4pu3dtucwY9P7vEFTYxCh1wT1YLgTYvyhT",
  "key14": "3PinxTBGMox3f3a54NM4nREqjnCWM9aSTx8ciCJunYovnneG4n3qVr3VzUaW51MnkrJWgZPqdM3PwpYR4C8kgpBT",
  "key15": "21j22r77CirVR5oA5QNz5XrJ9d7yDXdtt5J4XspNLNZoftNPMDFWUXHZacCe8QmpJ4pJsVgQ2HkcfKWabnpHSF2i",
  "key16": "4tDB4nKeBcRPiq1zrsMqkJYJM1k2Ae1hfRoXDtgJcG9Mg8tBAd42Lt4yn9meWDwXtGrGch9p8rpT8UurwpUSKWyD",
  "key17": "5amJcY8KgVnSFTyRxrnxLKzfdUQrsSQpKMQF8PtxYGWvGTRHfcB7Rok6m8P6dJpbCtw2HZ2163CkZXpDBQ7CZWTM",
  "key18": "2NH4zacAdtoeda1ms73RKbB7zUu6YzkGqqakyhqZ18NAbXbsJh8CVegArnpjQyThS2GwEtwMvJrP2ru8s2R1K2zi",
  "key19": "5p8a7zmyzxucamuMX9jPAu8GzcxPHGR8ejJKoM2QNmaYPktF5zp8iPhXjCbijCTe6Mj8Ru7QxvDuEEMxeVCgMdMx",
  "key20": "4hmny3ScuZYVnhRcYBedtat5WeRSuVnhTQ9vUEdxxzdVsschSet1LMf2B8tFqLVc5hgD3RR1chP8W6Wkuo949hp1",
  "key21": "42unyuJWjcQxj4hJkge6KeaACdySvFBCoBverTnAbPkQUG3uRKCnBLZftuRCaT4AFRZ3JckWXRqybYqSPbfuh9EU",
  "key22": "2YLWVuwt37Nszm2hCDh1A5ogkH4gpERDtE3encSdfEzbosNFZtBTER9dVHXdWzJpqUEsSQxBVmBh8T88t35eT4H8",
  "key23": "3N6RzheQbUcQhTRFqTKMStCDyCJkMjBqcZmXpDUqaxy4TNVVwEwDYKiQ95tcUY6ZeuBbvwCnWNggvUtLyqXAJkw7",
  "key24": "57e7Qz78kvqjGSqhaGzyaCuDya9ouXX6U86HbvjJFHzLJiTUVTR7QwaXdNJjpPmjz4R11nmDn2xha4eHwnJiC6E3",
  "key25": "nNbTTF6DGcNnezRjCyTFUsxv14VjE1eVQCKUouWZ9DnaFMyzgx44HzZzqS6xz2tS81U9bbuTWLxT4cEwUoMratj",
  "key26": "4k7qfehpQu6FFnL49mwb12dxSsf4j5fYUVtMwpu43x6ignHS58XR45eBMgDCTgcces5957LSRn7GoUzE6LztZjL7",
  "key27": "64Gzpy8ibfQx1nA5V4Ch31mKp8J9DN28Xq6wKFp4qxBVS2X5j4UF92SBiEtCXKsfdtwYkZ4iV1sg9mHxYuMuQovX",
  "key28": "5UAVQrMnqhCeYDKNnNKBeXJVr5BXsv9bkx8JJGfWY5YABrzUxEwF9Y1hcPyC9FQrj2ZLn4Uo1x8U95bRFDdkaJot",
  "key29": "5HJRtWBj1JPL7jZ6d7TV6638LuX4j9bPaVLDjc8kkqBpzoDZ8XyrK3g4bhVWLawYwmjXBZar6E1Gu44tGfTQCjx4",
  "key30": "2CPvMNQXafKSCHe5jVGaFf4wdJG7Kka8JoT3c493A5uVvUcFUhuHw2ArwKvkmt94BR3Xqz6mYRVVoFqJ7zzkjq97",
  "key31": "5Xk6urh6EfnBEaJsQn4vMaCfAMGcn1vGGiiP8XAdZov6scjfiZFjWZfRHgVKbqEkmSGXqYg2N9HXxGrVFrsNZc8G",
  "key32": "4PJFJ97PimWaMe3VbDfzb1BnZWcnMMZHMiYreantszF4M3pdUXxzRxWuuGY8uk51Jxgg1KTmFCA9LyFw3mprfYXC",
  "key33": "4LEAzVLmqGfcHiks8AKtuSH2zujFADDVxeJnEyHo7Ne9ggh5EZmqCrhDb7mYxRHh8h6BQmb4WdDN7S8bymWNaXix",
  "key34": "4VfTHhLXYG5MSeq3CerCv6FbDB3PsP2MaNZvmhKdEVfaFP94aK2s18UoFhqvtxTT42ysiRKz6JoHDmbgqUVnGdYy",
  "key35": "2kRR7hAqWJp67MSY1DsLvbxbVjo5xSGV9Bp9rVsjwXQpkYGfSx8mGTkdk976vweFf46FdkiJaW2zssQtDqWibxwo",
  "key36": "w6Cz6qzhhdt8HmBksXgyYQkD7K1wmVYQQEddpx9suAkKGQakCWa6V1KCpcN3tnXoBnHSmGrRbf7TwDnwfPUsR11",
  "key37": "5Su7oqiGcQgip14qHC7S5iQyZFaTMhg16viQDKpYF9q1y9nLXyoyeo2jtVjEns4648zkMLnDRNQjMZxKc12uJheZ",
  "key38": "5hBuH2aNGXVvpSJ3ZF2HU3QFewDBqkiz9zjJVBq4nuQkq6HYqzFeTttxSvxNQSxTKF7frngzXz8HPSyDhGfSCXDf",
  "key39": "3FNBYhAUca2GnBGiAtZbTb9MGz3un3H1NkiqKyfRfMVajkmpir5Zbdu6DwB8YAKniQH8FM8Brw6rVjsDAw83tMwt",
  "key40": "4yYKHcjU87gdNr8LvePgxXeVei3tHgCRb6b5ikvuhXGzqh582K7qUBbbEpgZ9XotiQRz8sjw5aXR9VryMRfKwUWq"
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
