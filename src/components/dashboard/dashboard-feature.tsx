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
    "2TamJBmWhKKTW9B4Zs1qju31naFjvYfFiG2nodEQbWVr13G2Vn72dXxz2LHjek1VnuG3UpvewAk4RTSF6CAx9itE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26qFBVPyTKf8jpgQv8MehRNZv6yatJ2DouYP5V4qo9XtD2JCuCyMshYPeyEqcBYGmA5Rd9bkLRpxDEr87Csn8tBm",
  "key1": "4mDCLM3zcibfYHuF2B3QQvMSkCiAgsAXRNQNfWT1zJhL31oA91gdahCQ65kHNe1A9nuH6Up6gmPHAAqmp4C2M71h",
  "key2": "iRJjpmoMNUnvsb2NyVaeGdLQMijLRtAChYrBNC3YHjWgwzYFc3Nsd19dPXdE2wQn9Yswk5VvXiMdXe8GoYxnpRP",
  "key3": "37nNM4q5Z5FvmMigqGN3A2PWNE16MQ2djmmSaPuG2hb4s3YktAzB6nMDDVuWie98bRfrYQaS1pDCNjTqsqnxCaQp",
  "key4": "5w9CSQCHMAGqXHqLUjourx1Dc4z26fPb7SuqdhVjkY9rBrcqwyaM1tq5X3Gfq52ViqmfdhVnDxYJkPfmgLiZwRgX",
  "key5": "2wayeJ5cWdsp4h5aP57LjZAEX16LeZmToyRPU3CXHEktZMnTkvuSyUUXErpu1N58zsgNXty8GLuVTo7KLDfz3JLo",
  "key6": "37W3SLWvkNWSQbYJEKpPyekxWjgVJLt36UjHG2LnaL78pCd7WUf6jwNDDfYbLk2nRCvU96dAB6sFQLk22YRsZ1F",
  "key7": "6xnQSkFLmdtLvpKHfpoGRnaUyUB2ary9TMAK4UiTvMBjtJYtPrZdV8dNiLsjDk97Ab69cYEUcmkHkXFSjwuiiDX",
  "key8": "3gCJpG9H1ffhnHggrmxGbs55vZneQbFacUVHBAesuw9ptHYvDJsT7vNbXevay2dEATbgcED1BabA2um1tj2ZA8Na",
  "key9": "4uk3a1KDV8Y3EvT9jigsKqSEhG6LW5iJPWGJGvXgPJtnqj3jvX1VemwoAx5m2oHJBVnzXubsCYntf8AGm5nvCknp",
  "key10": "5DUXsnkSq7q9MBTJ5Wi7Lk5fRywACb7Cjj86xWhb4V85jzcvmpNm6iZEjPvaoztkTU27jPp3fF1PadKc7NRZkp1K",
  "key11": "iCZysT5xyREDN9DgwLHvR38kXA8TYjJrbVrXLZpRmT3xDoq1mQ6BDsRyETWMSf2hDrc2jSSrssWGEK3AVnZut1s",
  "key12": "3JHaGxdH5GGatyS52tKKubnaiDE3JnyN1YwJQWnMk2XSmNUXRaGpjBou2e3B7Pbiut88yQgQpexS1GjanXhQFsjR",
  "key13": "4Kj2iKZWwQTfLQxpbdHjx1JggJ1SVhsH43jyz7LhGzwxGgmuRBXJDJwymB6LpCBTeB5BTw9dKvKb9f8Rufkkp9b4",
  "key14": "2ZihH1czWKar1KorjopXbEs9rmjpbnGhiLGJWzrTvK6PxRAa6GkM5ZegTMxr6iCQ8sXPLd2qerzn5tzDV53voFej",
  "key15": "3se8pWwS3dfzzzB4prRax8oQ7pdHuzi8HxNwRnBeczaAUcvd77YWAcAJhdfjYcQ7Hc6Sdfb64vFRAoWpyiBxQKcc",
  "key16": "3N1WxiC9Jp7ABsrMxKgrBEc2DBZg9vmwXRc3siUEJAgRCPAK4kPvABZc68op48JktUZT3Lx1jTz7G3wkeedunLG",
  "key17": "2vo7cawxHJPc2Ha1KW4U6LLWRTr9vk6gFYEpS2VME2tAXWbL1M9h719BcHB2npm4E4gdcR3daTsyjR8bizAUJ6Z6",
  "key18": "3p61Hg19TJ1oa85CVUQaRwTc3gPfJqzcgVD1DcAsryJm2Dsjt7MoB84xxn8vb633dqVYWR7NcgrKx8BmeStcowLK",
  "key19": "5t6aK7N13zomgmQh1N3iKttTEm7T4NtyGvKR5iRxQUvv3hUGyap3XT3ywrsX7279PrsN2MDNdo1t3Wzet89CgHyR",
  "key20": "4VcVYCa2QTBXEm6a7RkgP1ibLvtBraahewBSpG1wm8RiaTffMJ6dYzxpH6nev9w9jKgSBHXuEEZEekyGAvf6MKT",
  "key21": "43LdEhmLJTvSP9NzQgjrb2XkbnFi1wfQZTPQRupEGEgV9spqDUP1KAtxZTHztwZAkPTvL6DPJiFipNwHPHD2mNYT",
  "key22": "3x75kSfN4qMWcb7z1m45bYjwahJ4raAKeJQroR9EqxfwaHUvLYRJmAeyAMhxqMZz6zfMtjqeG2zaMq37USTPJdqx",
  "key23": "2wCdboPrgYAkvDAq9DjpQiMaebP6fcTdtvWzPYiZojbSnmkbpGke3CSm9gM8tAUjY8VsFqbh85vvYWBmnGYiLKor",
  "key24": "5vqUy6nWdENj4wJbWHiFLH2yDzMXDN8c2kbbCoSNsQVwx4rjXFudbkW6nhPYNTNwqgjz3mi2padBeZoh1LRBcAr6",
  "key25": "3tnkXx65qm4hTtYtxgFPEQVJC24daSrtEy8QNezg5HeDZYVfvD8QUgW2gLRGNGKPrspmbaPyiSa7mRcMtTaCVuAS",
  "key26": "28iZn4GmHoUw7sSK68hpwTT7xKnnvBoQ7A6DGMVojUq5qPewHmMcb9yutSp2sAPBoQXeZaBYft7MHGwVj5QHLh1G",
  "key27": "3rQbggoZTfXfCgtZtxbLqqYiBfGHaCChM1YiDVdm9GtoMW4dbZTCpma2wAtVsX17pz8UWzwc8USWkUEdx2gm4Eoi",
  "key28": "4u6AuZZnpQa3Njs8gFFGqfAUK3Wu1xARR6GEn8dnQFWu6VLJEJi3WJshyUNxSt3uPWtieYrhTChe6Abjahof7wYc",
  "key29": "2ezQLSxZZiSt8KqU8KY8DcpSfHerxbYRWLviCHsWokyLcYBMRNh8Asd2MVJZV1tqJAMckNsuE8svmbJNMfrvNRPM",
  "key30": "5tpai9vKmqK6aMYAD8az8GZkcnWjUDfsRtJwAGhnmrsFEvUG2NLWN34BiSZYnNrwS1e1L93c83FHzyKYdAkhAfdV",
  "key31": "2x7cH2hBFGmpztbSuqVeEorkEctEy3oxEUjeGxj8HkLuKDC3MGc5esxm2A9cH1y9x5vx27hJtYuHEcrhY7DoHAS6",
  "key32": "2gmoovLcpJ79N41KfuqKBzgefvooAChdiwpo46n1ebZHYDVLNYPgEzjV9qyM4d3SCxK5RAUXVsBBPhAqsLWxVyfS",
  "key33": "5XiWVPFpD7wZ9vfVrebajDktDevZb1ukSDEMzgdCErQ97bzDcTpKacaMnHQfAGTfXAs9ERneXcZpRU6NKzzaD5P4",
  "key34": "5xTsSFsvftLayHpNQ9NfkfsGyn21ReUJf99RC7hLrbeJBuKjZt7dtzz8ukk22xg2xJeLe6mVtHegxUGzDUstnSfS",
  "key35": "353ApARqo94TZbnPKZhGYyWzFtY5p1esPy4B8dLide5BjPdUUXq99kx6J3yEDAGx3VKFt6xP8zma5RcbDgNY3ygr",
  "key36": "4h4t184RpDhxG82of5j3L3JahJT2TfhrXpQBNM8ktpFyCmeKMzXQT2xU4MagjhrkrzM6eE71GEGohsCtgmino7fP",
  "key37": "27t2iAWiU7FXabH5t5HZP15EKGnFt8eziBaruRmQABjsbxrAePAYTedJPMTq2XXM24RRo1QNJAFGHaXeEjsmspTy",
  "key38": "2RZmn7qd2Q3eDm8UpM8vbydx84kbYwY9nTZR3VvFdowLuNtdMGJfZfvVqLE1g3TdpU5mts53WC2TbxMiLABmLDY7",
  "key39": "23gAEPXaRTieCzgraajt19odQfXgfeEUEvon9iFyRsgyKjJcz8sbBqD3VukQQFb2M8oxusZXXgCfMT7tNiRXFrWd"
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
