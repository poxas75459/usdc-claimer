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
    "52FnJMGCZSBHpsPGLqEAuHBEHeoMfUqWXAsUjzVa7qbepGJ5W6gPdU4WnpEdrCfBunvA8SoJuPyPPy6Zwbyc74mR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pg64od59bYZJM2JX4NkV53vw3cXqpMhWqQb1xYJFa4p8EeoSApXgCsuTji9LYnJRCJHQyztncPsc2U3yDmaytcP",
  "key1": "4XFFsdGvAwRXohmxm9ZH9NVxertkhPgk7K6yZptuQCm2JeneSYDSVqziiDASufde9P2jdeugNsUwwTEZkVRUCRNz",
  "key2": "5ckRozqqjBkrJi7P16HrENYz8cCsevVnWG4W4LMV9wDfphwbd2mi54F9cRzBpewwoHfpto2JgpqnwcoQMFstEFkg",
  "key3": "3hd1DaoUFoma2htY8Ns3mNSg3nbM1qELDLME8B4B4kVcpH49UQ4cb55su7xXBLWZ5DriEqfLVeUbhvQCo2cMp1YS",
  "key4": "2bimtMo4gecso6EpWPhKstVQhbYrbDi6vRSSFqNkxGX3rEc1QAJmmVQszZJ9RHgHsWNMmoZF4KcqSW5jX2jpCMkR",
  "key5": "2TSusANPrfcDRNVXT1zR1b9QP3UCNv1ANfiNWpZAyiVnnndvsFvyXs2dGCDrB79Ga2aTodSPFAJdZiFFAf993b63",
  "key6": "4f8zbATuwh26SHs6FysPso2bAxozX52X9DgCuh8pQGCoAB75fWFHj2s7bVXg6fnx6BaPLbG7T3Jw48nnpqtSoTXw",
  "key7": "3ySzGrcJDxRsVsmKrckeZDNahHxsjmkwuTmH3Zu4E22wiUnr5stagQ7cAREtjmj9ykDp68dbkhKp12UECqbxTUSz",
  "key8": "28nHKQEx7qFzfnx6GQazFUtmrEGZGaLAqVrTUKgkYBjqS4h8fmspR1VoCLHZkwbEzh3bdTVGbfcghWTk5kw8UE8A",
  "key9": "4mozAGfKaqCFLa4AjaerRxENCx93PsLuBMtSRnvAzNpDR7W6r2AP2Vpih5h4eiSd14uonv7hVdqrFmKcAXix4d8H",
  "key10": "5vKxftahmLWw3HChpKviNNR6VXDm1hWbM36hq1XSqmJsR6qpoL3T9NDpwfa9xjdSaeGiFw37dHv3JzS6CM5PKWH8",
  "key11": "2mZjncLTU1LWGZdVvKjUhM4F8H3WJLMKHwkxTfPVhtVxBBBd5gYNGpjpJQStdPW2L1P6XALbuEaErbum1tm3PVU7",
  "key12": "KJkETwDWyVfCNFex1c4CnwR3Covu8PPmoMW6r9nzH23Uyp7TeSwEiXN6RSksGGqmHCBSuvWbCDwMBAqqTvuELiX",
  "key13": "rHdb1d7dMsZbb7HucEEmSQPMzQGDPPH8n2STMTzywmke363WTqNtsUJvhcp4bGMHtq1jBgDdPKmsKz2vb26BcbR",
  "key14": "fP1qHQ1ztehcUMRSq6BjuHREtWuJ9wvhhtFi49Jv2ZJREXHCbgHgLK8ytoRXAQSM5jb3btoKKsptX3ou4kyLE5n",
  "key15": "37JBdEm41ksDbMj1jq9irRCVi7XDMFJLrf53iY6s5n7GFEJt1j4Wq5Mwbr4qGRH5DfQk7shtaDiXYfwYipG9rDXx",
  "key16": "3LtvetrGcZfgar48DF1BE4nvv66H1quhvTg8Wep2vW2rvBdnTGHrozSA52pWi4ywEWzPYZ4Qn4EN5jCxp6wnH4kA",
  "key17": "2pyE4eJd4C8mUBZaQvaN2VpBfptTrPSnCTQxeHTrRbVkY7Qvya8GMThQiWLHpTcwmnMUHU6B1rTqyRjn7Ey3Xxpf",
  "key18": "9MKXRh1BmGyRNkp8m5piZbVo4g7yMQQD61PHFx4fubvkbQSTcWMEAF728V5ybkCnSKiptGDGwseqnUdKhAcWPEh",
  "key19": "4ioEZy7sHi6HfS7URAyXVdjgT3kTggjTugNLetYYP7m9Wna5bF8s9p714YyamBSdHUBS1qhiQZ6L6rDHuP69RjEh",
  "key20": "52iPWgXRkTETJQULKRhNVMQbY7qn6fjDghsqEbEmXCwLV58Zjg63vxccob44D685HqyKbwgpwcFDQ6HwZbpKTqTL",
  "key21": "2bbHPmJFaU8HiMaQurdeYj1cqEQJo1mHXDcixL6orvA8j8i4zmxu91xedgqyMSJM8XToZp9YY4GRh9McwxUNky25",
  "key22": "JrmZLkaPwkxTC4kFwd69re7KfVRaXv41sDDwXGFeBvyJLx95Y29tJiNzuqkdFqsTo4dTuwasuooNnqaE23UjAX3",
  "key23": "VsgZBjVacJn79y7hBKpsbBkwUsH7bYMtxjLjUyFdUFQhKPJi2YidpvKT5ga4qXpTPrr16JYHXVEy6faRjHjDn4n",
  "key24": "5SrryPegZJAg6taWCMxjcHmkt7Fan8NGVjzfghYxGiaVuLDez8Vwcegsy3rRrTaEgeoJUzGmsQt39RRWeat7rjcz",
  "key25": "5LA4c7ivkRWCL3ghLiQV5eQLcsa3PFsUgbWPdZyeYxoTx8XeCd9mZfj3CECKwQfLFzTRDfAQqowE2yjX9hhFnLyZ",
  "key26": "5Ex3BPTsHbBnXR6Hye45gfQWXVvUkvtbKSH8FVsUVDw7uJccEs7Wscgnyznb5rrtWCNh1KDyFT9rU9anMhwWZoGy"
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
