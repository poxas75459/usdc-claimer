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
    "2EqWDDFNxLSLGU4N5ZwEM5wYw5CyLNZUFdFfF8Cap4vuJiyooMk14JM6j3TG5unyjJPg5bda6wAUAtdYQ4131Txe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H3r8vN1Q6Qb5epPsGajqzReXTub5V4nqeX2e8PTMRmPFe25fm5skH63tkhxMJNUwWV29jVEFUAd47Atj6ghFcj8",
  "key1": "39sCsFqrk4Bq4bdGNDPgTCTF5YwUkCjVf8Kcs2tSU5UR9NC9sFJ6qg9vSCFVgJwiZG58t5hi2BqSJFYswnwuNh5p",
  "key2": "3CrpJVmETPriWi8bzoo28jrQ5VUih3Tzd7gJEdSsvA6TRjjaPt8Wj1gsGgyMTvHRKbQrrgyU2RBLdDGRQPwDuFUG",
  "key3": "44AsyhKJQoESSwXA8caatRSTvfDpgghHKuyq9LbmWyWvS3rZsn2i14kaegD1nsK7UKwrrqtaXdYjTre6vsnTbQZa",
  "key4": "5aGXbuJUq36FrUC1XjwvWFYEhP9Wd5FZww7dp4v4K1R4B6Jbt1wsJW5VZSsdKLFu2K9ggHiWEHWn9DRse52hCjZS",
  "key5": "cT7LAYgwo9auSTqxFmc2UQ2XqkfdtuLDpyCvCa6tqrJyFdkrxHgwckfyo3L4kYUySY75jt6MdXAbT5VkyknKxdj",
  "key6": "5PfWNrGowxPZF24hkf7UCFySCNcioZEyAmwJuTKwkpPjv9bof9qxLydJB78QC2DdLuiDWsDXrEk9aVDPrCTvebUd",
  "key7": "2yPMotEtbS9FYCzs8DW4gBHZxpY7ZoKiHuhwhKyvEqzW3ePsapa4E1NYWKHYiTqWoFJJBT311cFWEruzSXtZfYiq",
  "key8": "3s5VLLDeKmUY5SwpDvR9zSXHttEvoRdXZ14qynaycaUQg3reE2LhKC2ATYGEKUCgLMgd5PAwzjGKBhLbzYLAyajC",
  "key9": "2kxipk3yb3e637c8q9zsF7iPCbyEKLse7WqgxJBy5jqLhm6PUXuiKnqPf9VtNZAmPtZRPbdaGMrajNiSA5MjuXcu",
  "key10": "RCVZDSfEWNn2whBiqbt64PWCxaAmMXFkfXMhCEa3uUsETD8JXa3RSGQAqeD8Ecg9E8Mq4nbtUFeozk1vB73RYTM",
  "key11": "2TgnNKG7ADEaTRqaTxPR6kwzYmUvWRvGgJ2fmGYWgtS92addvrQnV3uBXR2Qd2ob6aM7v8xERvrTtdu6iD5Jv7TX",
  "key12": "5r9CG8BpGUGr4sEirCKAfQ31HPcqgmAxqMcY94fd7cYpFBumapjv9XwWxnG6bwyonaFgfLLN2bkBdeG1h219nT8b",
  "key13": "5uccfHHyrYypSVpGeBCxZ7ZvwQuksangAu42YQUs3zLu6jRXPNPTtFQA63Zjpd5BBZL4vDVSMThcuikKSvVJqBdb",
  "key14": "3TcBn96xNqXMiBhfyDp4NmxtYmTD6K5CbCGXNnNkRrmxK7AwpNPS9ZugqZMi1Ji5ufSAE1Yfjodjq4iuKiENBBQG",
  "key15": "34hjcAC8h7CH7iiVjdBynkrLB7r2uSCx1M4hfCEFGAKWJxnWRRWw2T7xKBt7w74eshHuZnrHeGFUYZ6DGu2JHa3X",
  "key16": "3u34eXywGWekUJ5iKeKFasJUWws4ZBspmh2hcBndjzgqSNxPYGKP9Ezqo2PB6VSYU3yLAm1p9shfrEpHBXEvS4aa",
  "key17": "5yuu56krSBpPrxvd7N9VfTAYoDfBameJrJVnpb2ie615p6FPHqXwpMHVs8ZPwqWZeL39HeL98KmqKz4Vd5geomHn",
  "key18": "3hWzEVfLsCUHvvpKTbEqCtHnUDJNiwM7ySgBcECorC9ZDbojTaYD8w1XkUVrmNX3V87PXc3vNaSzVt3pAKiUGe2T",
  "key19": "4wg8K2wqMbREaWsPLLv6sDfpvba7h7KseXyVQjdFA52CKhzDFbDJj8YiGSNn4bgZNy6UUvXRMiq8TvU8GUjgPU4j",
  "key20": "2GN7hade8pDedjXtCgr4D2CBkmkjavmUAJPCKVeeNUqr2fgQkCooCwUfre2R6CqnsZqBpyQwhBLzfvJLCvedxMX2",
  "key21": "66au7vSRn4g7h9EHnXrxPn3JW9oCHfXqA2xLhxVSNmjjpwFSNfEhQtme4bekfNH3nLnMZyVqEArkx8mUkXMiJWck",
  "key22": "4A5NTVTiH7GEFFpBDQ5tZBTiwBQd4CnBMMZ4tRDfEJDwXwykh6awr5PXstVHTGGWmjiM6fsGMrk9hK8M5hMfRu3t",
  "key23": "3RLPY9zP1MGSgkGkyBFf554b1S6fb56vjyK5Z5S8aDxDkq9B1ZpbGTkmxj3rPyhs7cKNutR16h9YqAmfQacJ4gPR",
  "key24": "4HQZKqZ7Jp83Dm4LbzLe5r6fDvRjfFrjFQw1fXQN74mhTEK31pfiJY3y52cM1VPckybzb2ejnvLhwDFqDBfVjpxj",
  "key25": "2Cr42kkPZ216vPwpDttpkeFXXDfQTfN3FFoGp8AEQdejTW9GCD4DJZUqSqr6zNXrtscEg557rfQmGd4FCJmsDsGP",
  "key26": "128r1aU3tYVQ1RSTyR4N8F5w2icvBjhHLdxEDVCNgos8bTwtzSdhJamPiwB2BH8DrgqwE6kF3AsEzeDQ2Hi5rwAn",
  "key27": "4gBdnihgV7MGNSNiDBWTdvFrs6VeX7s8KZqjBc8B8UroBCuoLSXMj2xCYwX1od8gTSi45USeuh95xMPDyFNpHHxx",
  "key28": "2qRizpYtqYKKZHhBDm6mCHopNwihjSQfAm3iJ8m4UAS4LWUVq1doLNuUijHuYg1hV2ZWx8vCFDiGd5gxMHZbdrR2",
  "key29": "3mheV7spmFEQo2c2JokWb99W8AqdANVopdD9kWHmygX5WjwY9j96pxtuNsm1AqjYNCDXTipR3iSfU5yNYQiwVr2V",
  "key30": "btKUZePwTFTDB6JuPoiUEkNfpsw5d8esSuyyE4Ku5xpvQ5L1TDPdKnWfiK8D87tdfNctZYg6fyw7SfjRJ3HSX89",
  "key31": "2GXH4SWEoAhpQtkgtxHvEN2xDh6emz1KSNfmB2y5hR5aWfLuskfu69TRkg8PPjkwB4cjJoCHiFUozvRkdnRwript",
  "key32": "2bJ1SK2rvvEV1LavY3P4obcqfqCD1ChSRrrBgqFWLPLv6BQEwRxbovCyABLY8HJHZ4d532bguqW5AatL2NiiUczX"
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
