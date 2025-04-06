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
    "3WHS98SSDcTk9hxXiBz6GYkBi7f2HTJfn1mVvExon4vRd5ZHMofniumfMR7uNriCk3paeGJ1Wks1KZPCkbwmz8FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28HvpYmGRks4xLJQ3ipCtWsHf8CUphRCq5djQbSnGQtURKqRGQta6pkQyPYb6AXJeyyHGedGutgBPK5VwLP9kkY4",
  "key1": "25co1kXzssMN8sRNPGkwKvDVsn9zzXGcNsBcxqV1AizmAkfQbkNSCxA9TdQQnsHKRrk27oKwjfK8CART7e3fYSa6",
  "key2": "4QgMMsQMwL5ZMati7H2LCfwquwCMXxFzfUyLLPv9tvg76Th5kxgGQTuzcWFCah5WacKGpoSmCNMNeV41WQ3WR5SS",
  "key3": "U2mX7He46nMbb3kkxon22sgadjBbjD9ZLdAcNnXj3eNui9NZwuhjvzvGSDT6ndHyReUYQs15SgRP6fF1ekRcF7U",
  "key4": "3oGLrxm9hBSMkLwPRphdtFmJqzNjRuGRTWcR9bqLAcE2vF7znrhRZ4yoHyAHuhAZbUmXabWnYE2godz6939h2cjf",
  "key5": "JayaSknzov7ue2YPrMgGhrvG9utn5vMgLhgHvGbKRtmWPDLtMErNA9tnFEzx8SRtEXH4j4bRtjB2q6h8tHJAE9G",
  "key6": "fX3t2FfzEXYx1AeqpCJtPDLvY9Df23LmFm5JFnH4dKvhKGC7SLALGSJ4vN1zb5noLJrCmaGYGQT3KBbQtCGFMHb",
  "key7": "4F51kUwjUrBkZBqjRTFc2cnezpcKmDvcDXb2aNfRmUZbL4zNemWMYd2fZdDfWLoiRUvvT7ydZg549YiJXFEMrhta",
  "key8": "26qNYWTjJ4iNb6XTSeUg1KYQfpbB6NoLMpG7LJEaemCsznmJgCvGVBVeYinR7EaqQUTwNMhAYS2f3HmDk2i7Fcgz",
  "key9": "55zXyZyD1gEt6F9KgjzHZ8Hgi2EHP48BLa3Y5yAPcbofHRfanckj8pAQA9nrSxesg9TfTi2QH8ghrPWSk8dQHhNs",
  "key10": "kL2fWSkHnsaksPWiSVAWKzx1qQwVMQrfwoA3cWGdZwmWYiJfYMkqYuuiZFjRR3Svhr3KP6QzAT5cMgAGGVvSRgi",
  "key11": "58FxSW5K3owgS2WL4Z9Y6DWiVNRfq2WLV5hMPMcQomW7iX3Ln3ihDa2mQ8i2yu1bJafSMJfJL2xQZMomDWRhp9pb",
  "key12": "4MEfDAXB9BzGGv14S8mwoKq6JxaJu3fzqrncAdKTknfyWdQT6W3HTBpYG71Bv93BKyzT3zGtCeEn9TbCYeSszD4Z",
  "key13": "2GhunpWMKBcs4rd8qpwr6AibAce5JUf2dUZQb52613Em3NikbVZ9JkcKkMPdoVHsVVNdEh9oi5U9snpoUXgNdaNE",
  "key14": "GSigj6FG8buctJfh3VteD1gagCrjtgjZhThBD4CJVrDRm3oJ7y4F64XkPDtZRHBwuxsHR67g3WGjuGWbnw1ygJJ",
  "key15": "3hs9rCtuXidBNuun37QF9gNjCgMtNawSEZ2Q3ee7Wkbe43VZvQfDacjxzu5ZmuxfrXDgSQBNQyzbn4yZswAEdACL",
  "key16": "1kWNMecaNQC8R1npkBrE8dZfL5WUZPHsXiFLqwCtcgtSPQUZwucR3VKPdEB2SPKb6Hx4Fhri2um7DMA8PA9TjXG",
  "key17": "t3sbo2K2wXQBVg1VkHEPtpTNQqDwbXVbvexHNjqUj831DHFihHXW2W1YH6JstwKDVJzwoRU5dRVG2VXoHW59Ahn",
  "key18": "4pEC8ftoCDiBncqXiQKGBAjVGMatxYPGXCCsANp5tn7rXgtTVWpjkiGwLZUjHCB7ArLvJojmJWGcsJSkR6rYsimT",
  "key19": "5qGXd3CgWvDoMmgNNy129YEZA4krAy3CYSrxWaQrReY4u6kPhrVfEJGPZL8PmzdUsyzgvDjMPU6UVEygSzFor4TF",
  "key20": "3Bo5tsf7M6pNQ8xmJMxZdkHcyEMkUAwDUANoXJDBBUeCfyR5dvxp1C8AEoJmdae8DobJFmubvHtm1USgx8v8rwGM",
  "key21": "5ULN61tRGiZfMmB8K49Nehe6ygJKNSW2Vub9361pbhWV3eemQqHs1cLi7AEShqDSb3FRwN5rfRRFhPh4rHYrYpUq",
  "key22": "654AzVDwo74gi7DeUy5n92M62NvhiNGxkVHTCtBFjzRez4FPHS9jysQN56dXRWNkTkUHznCV8thSbb8ouehy3j2P",
  "key23": "qpcXmaWUGLJxSQnX2kbbYpN8abCXAwiHijuDbV5NhYATX3yStfCnAAWo3jqoQE2HDR4sJ8bdxguH8GjNapuTJ8g",
  "key24": "5YChvhkX41MNxU21Eh6AsFEQCXDo3228VbX7EJvxavcXuR1Cm3XhF8okVW7Um6GK5ismZ1huhiXWrTP15kfoJNwL",
  "key25": "2hNd3NCHEtSJeaCxs3cnQxcdK8iDenMaQzzo2HjFNycgJ4WNRtZ8VWFEnz9uBQu1Wuw5VeoivioDME7sDwUgYyNx",
  "key26": "3w1VDR7WKeb5ufxQTXjMLqhg48Ba2MjACetujXNF4NXqbcAJFqYqhHix3CrBKeJQgDdAk6esdYPkHf7vAQXo7rKm"
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
