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
    "2P1iuEtwRE6PgCpozsFazXtWKNepyrDReEhKsMQ5c9tMVkLRYBwb1N7cr51HGRviS7H4pJbk7KuncfLCBozezKcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2icN6XTr4uwA8vBGtoDmVorfQEcLkQRevcv59Wafxo6mC727pcj5KDBAWZqYqXi1sNpFK7xEABTxHS5zNK9LKmes",
  "key1": "2qtigZAG3U2MxJb1dPLsvGABpdHdcnz1efCa1xHaX8GwUnD1Jg3n81eZMSE9hELH3vV755nFvYxTtDqaAB2ZLz8G",
  "key2": "2hMRgfjaHFi6VdhPzEaEhUWW4jEg2SqSqVR526uJRJo7RCGFB9dbU9WppBrLk8LLHJc43cVgWSH8e9fju7fcdTWD",
  "key3": "3GtCyqxjzoU4sHp4g5YPDZShv4DhHFXGdUpcxWsTefmzxMS4YKAnY3eKnwQdPhn7XX9ySQMUxwwac5BwruiXs6bS",
  "key4": "oHVWYQpZJRgRPzMa31uzgCJZT9iTk37JSB4pTcxGCVqPEmR7ybFbMcUqhKFfzCJQettpfiNiUs2paTfyDQ3brvy",
  "key5": "45nucVmxr1R4Ltni4Hz9xA2VSgxd592ffgw2m33yL4PzmEaYP3mK51hbm44ZKDhv1gSXgXFZ3AvYwBzeiE3B5Ss6",
  "key6": "3huXUfy9WSih5eFU5WaGCY1XdFK3LxXXns2yBeB4ursLCwij2KKVCYQeD2kAoWmfgC1TnSf1NsFX6tUtozmxGXeP",
  "key7": "4WQeofgMK5jXcAtojzpoZTFDV87XzqJa2f4FTVtykZhJAmxN1cvekDNpEaAppbiEn1o3SorP4gJj5z6hfUq42HWy",
  "key8": "2LYJphgSiRiYwhwUAxi4qYMDpipo52mv2B5jsEgE4YkDtfSkjk64Rwp7BiyFV1C6ZagwWc7HKfqGBFRiHu1pAWSs",
  "key9": "5a84kSeiyda4k8FmVwHV5FGfU9b2qxtjQ25KBN5axh8SVgDT7xNsp1V92GhdE8SvfAw6nbyuYtVxWfE3n7X79fUq",
  "key10": "QF6PywXVScr8yuJpz3V9RuQV36wtW359SmY99y7f1f4qbVm3yF5vU27wA76gPdTdyPCRmAy2etgf2feWcUGie32",
  "key11": "22mzSHy4yNuMwpKsDZbvFPiwD9AQ8gcgaSWLk36VSoz2K6yV6H3xgM9AQp55MUGjkHu4Dw21Z9dCB9V5FtVa6nSG",
  "key12": "3JZ9q1qBjyMMFqytKp2VB9FAiABgEGgCq4Q1rd2AMmTA4Znkadd7TSRdWpyT4aq1dcFcLTsqpZKbeMUqkbrEigV9",
  "key13": "29WZM7RLtm1EKAfiiYpWEcSvpFbScya4eNshku3rB2CnqaaTeCoXYm1Qose1toJt7KpcRWCCHGCcfkrwqXKwd3vY",
  "key14": "3pCMtrFQZzkzi5GaL9sDLWjqBkdrWGTzaTjnYWJoPzbZRbMVY3TdqzR9Dchk4jwA7KvhCfBkdxCRW9ZJ1f5B8x5m",
  "key15": "2RxqmeAoGtP8NZdqCJJYiWMFhtp5BbfoSCZYjZrucnr9DcreWihLsHGLLpFGDDm1nXPaT2QtNoRyBxdficrVrFBq",
  "key16": "3affKH8JFTyYXbNga59QViWUr5gN419wa81aa4mPcKc9a5b7SZaxbn2XJZQoYTtABfEtMtGmwp53XF5d7kbW5Cik",
  "key17": "4DZSCqPryXTJGJ8BQrhDcXnbHp57WYCvqnMJFuSsEBtJm7Skr4CzkSDiDKghfcngRbxBhUPiB7CcGx5ytCNj5TLt",
  "key18": "2rM15aqsuFQaXpyei34sHpdkMsZMpgkuNy7MGRYokFTNXJSfSvuRsVtH3CcqjzzvA5bEoYj2Mj4EauhrykaZ2vgE",
  "key19": "2p17YnTd6rg5Knd7GzHMF4cHqAgQsmZcZVvJnpzoKdgUcfthXPcinQ46kHpAVw476BXtwF1vhsXQiqxKtS82gZnZ",
  "key20": "5oyvUHxyyPRV7sDUnkRGTqrBB9d9k2cUaVEXB6hcx88uwNrhKV9oqMDf1EVSRub86Nk4x4GhM4aqhSfsY6HEHBpx",
  "key21": "4dUySy38urvkXa3rXnqHdfphmEkZXhATPzD57RiLBzxHT9GFk5BMUawXxahqWANR4pNLRCs1Howu8Tf64mEk5jD9",
  "key22": "5uw46MeumPn719AjrnoDUg1BbL11fUWpDxmWQ5V9VH4zoFRo9e2TdhudFUuYWE7qcdv7Av99GnTyXXcgonDTz3eE",
  "key23": "43nF7X83uwwvVf6a4NpHamdM7JSKUmiVyyfa6d8yn5mVSovRtppyEjyAcmBq5MN8YqvuiGhkS1XbDM5qzbRmPnWD",
  "key24": "3kU9Zyt6BxiJfZcNbDfN6PWfM2VvCjtbCp3YusvsybZNuU2wHbNHZyZMgGiGXzp57C9iNPSQRuhEQMUZ13JuVPz9",
  "key25": "5cPYgHNA3DcYRZryry4JXHMyNP24i23BGR4h5NM3pZ98CoQaswBPyzdJLJmusrmav1cj3KwaKHhJXjE2pC6mF2Rc",
  "key26": "4HmV43QHH3D6PYEeidZSVVtxFMXTTYZh7kdEkyC12StZuRZ6MD4ynezNcDz1pe2se16aPzgBLSxksVmRwVVnHfxN",
  "key27": "2BScKt9o5F2XXHFMJKCxefjTrnidrRCien1oxtdqEXsrUSaJkqnZ9PJxXy8y6or9LUJDW1bkHP898zW9arPnontC",
  "key28": "4JmK2LRSBQGpGguW58SWRfyEDVgoQnB7zELQodMzYJ2XXhcEnaKTkobiGTC2TSPX5NaF1mszzKdMbdaACrvWQF8v",
  "key29": "3tmSvy81LyxEthvzwyXJTViQL656g8JyysKSUqqtJSPCQmN66Fc5LpDBr5FECPSWXDUjivDiFAjiWqS6g3NaGdcg",
  "key30": "5AS4qm8yAKgYEfbSezyQYU3ykYzzJUhX38Q48CMbgJ6gTVy2jV7ATDhKnPFWdBm7mtGBMjkSeF58eFmXAsLd99F7",
  "key31": "5T6qVoAcvVbk8u5Z41tDEqTF81TvHDTxakngYRpodGaDNxAaGrFfUDDb8i6PvjsfWBQpF9AyKjaVo3EnQPBXBsx6",
  "key32": "38Low34KmuBHmPdFdDetAEFFVpPGVjABgS624yoJ4NhMpegio9M5nRRN1QZeipkotzFfX4j8jCkVcsCtrjhn9pcZ",
  "key33": "5nVdXBi5vF7YZCdLZZjEUHYcgDuRmTdHUTazTrvNF7sKi3D8mPyouhZjqRbw6CMDWyJkBjJU9XXM5S5a63quzsFN",
  "key34": "2vJxmURk1wPxeMgWJmQoiD1fUrswSi9XXUQLScAnMMm5ZA12q4rkNuUyhDdUZuWiYuCHCivt3GEhGrcjTkF79YwP",
  "key35": "3BP2CmVMHJ4d2TSzv5Vx1n24ZfarUN8qfohzAPpqZnpxDEHSMtLjfVu4fAbpMmfZdgKx98Zo44QczmvmMzKZuTpo",
  "key36": "D1McVXzrFivyaXicYdR4EG61pFLPmfSaPzwfTF5zrupdg9iY7qoBW27m27XjYE3EjPmbuhKV8DrsXzmmosjHu1s",
  "key37": "F8xzPUDubrzUUrNCAam1XRM6GyVrwQSX7yomWDeWh5sHTuNuHxtRkVjDT2CpeFUesRMjKsYmc7bGqcz1Mfstbs9",
  "key38": "AiAETFTGqXUkbWL1FQSvZPRjXXe7ymaq18v5diAT5SE4SpQkajF9PW5uyiYRx8ao8SCX1v1dMQa69bePwoNmUfU",
  "key39": "3WVrmNjpCyigX4N6cZk3hbWwHeFHe67MYCeEd1Uwue56BnG3MwT6BgSx6P4icgS3R6vTcPJNYKLC7H8y5Sdab1Ky"
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
