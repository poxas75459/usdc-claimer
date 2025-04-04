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
    "3TwKhU3VNcqYZYzNWrz2onSuZRYWaqU5RnaairBfREQ4Hy47MPYf4EYofAoq9Q4xMPuwhPfSzTy6aTkYaP8bRFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZzsmtxJJUg8RWnb8Xfk8Z7YsMGhHGdgAnWTsu8gASfwDr2TTedobcinpQfHVdCm77bAhXqtwr47AxKwedeNZPW",
  "key1": "49SgTiy2PwSa2qHQbEnQ1QGfQeLfZPEmdViBT32WQ44qTL5sDgU5Ai8zY5GSZFUrnnDTRAXukszNXD7ybguF896u",
  "key2": "WSit8ZnobF91baqXCSVvCvTgmB1n47KhBZ15WMW7eZouKkADiVxurTbAR4uvk9z8ADMLQP49AVVcqDnBfWn9iUn",
  "key3": "2nFKjXFH6pZY3EZVsrpuyS12piSakDETkWRKHrFVujSNmMLYds1wHxbxy1pWDdy5mG9W4wcN288u2sNejX9pdmPj",
  "key4": "4yJ4TSXH3who8MSKsXWY8iAkiE3KVemYgtp8DYhYwNdSa7hn92Bpf9QNPbDX3WUfPZfjQ8KmTp35BFUamTSUNVDt",
  "key5": "dJYaNEnebs79WnwiSuhHZWotzyt8UTHS2qdZ5kJD9Jfpy7pt7yhRoPysKaSXQbCHYBPyA2AKzcDCp1iUFWaG6wD",
  "key6": "29TiFfqpppF5mPC48H4jAWWh7szdqqxGYFkgTiwrMQ94zpjsYkBJTE7Zb7ddMmS1RVeuRSoeRMWX4vTKxQvYUPWy",
  "key7": "XDvJ8Mc2j9A9pVj5BW9yLP8SaWo5WNdadLKnjF2KS6Yvzsx2BCFT5xEpRPWVmWv9Q6kHfWr6H1UHdhbcqCuwyWM",
  "key8": "55QbNVPdS2KnCg4aPhMjqUpYme7Fa6HJwtie5nJ5DW3SZa83zyGD9T2ysKHytkUYgBANJGEVSU9i5pz4w1534AWg",
  "key9": "2ePdmR7w9yAF5potGy8yac7kQDWtQPzM4SZEEeo2ktrpcCwsDzBmDfcFrjt8QWV5honShmSi6MBhTPcqMCvokqkW",
  "key10": "4cTpq3g7TM9PTKTh3zUeHyZaU3C1JX2EDyh7TSjvFdV8TwRTq26irbBMk5StXJXRMkpEtebvs48EWTQZeyvhUWMh",
  "key11": "2GXALxrQUP9PescUSiSVtDZfi4TMNqMEAJRabfLHm8i1ogtN4dMMCXnJ8VN8yo2ha4iCoaBtroRvWAkwYxVpdbKE",
  "key12": "4BPLACY7HM6AGU3Z7KCiefTDW7PoCjLfzhdfUztDffEyncGRRUtsEhp2Hz8Le9s5JFK28awm2whEnweGvJkFZJUr",
  "key13": "2xWT3do5XibzhzJ9CL3XE9DkD4JcZJvxtwZEuHgHP7MTo7Pk5tHvFaYoDWUfA2ogsW1YubMiz5jN57BCTB7sJ6Q3",
  "key14": "2h772h7sUthyEySjq4Dwwrij194wSHkJCBCPLbELzECuiZ7TBBbY2NUjViNNRRKLDVVfrZR9VmFgoCdxqhm2FgWe",
  "key15": "2hEDMfAkPSXGUH61h3SjgZMGYj5tZ7xrK1p8zW12A53XkxBRkrw3iV8qpXMC9Wuq535iFo5kJ2m4ZRxrT5dz9WUC",
  "key16": "4Pzxb1pX6Qu1UzMc6dA3drUjDDBZaR9N6dujmpu97jc1AaDHpiZNCJBJY5xfD77EdbUbkdoCQQYMokj3SBuoMwLM",
  "key17": "3vniVyxALkhqQjJsjQRvJDe6c2Kmek5mMcM4t543BTfpLxZUpuNFCNbYGrnopoc9DPqVtB8WpSxzsebtTeVKJrAh",
  "key18": "3RQ67MMvDdf3SancRbsQCyAheyhHsSrCZCUrH7C3nBVh63hTJrakdXzDSSMNGSJio25dYxaT7c3CifLkWYCE3Q7g",
  "key19": "3PKoknGW6EoEaw49srpnWHTMvTnk9UoCNutrE3NiLh1gHzrWmJ99EGwWKnMVra6pWcTHUwvC471g55pgpmjyV1wz",
  "key20": "3yHV9LJTLikCQ6ckMy4GxFhYJ2j9knGG2tqYAbn8WcmfkARoAE8t9fAYWWBSnFthdNiV7W4nSBMnvXhPfXhAUV9c",
  "key21": "51cyJuX3UzK3V3La3DvN9jcXQk1R2YhEGwNhPRvL6wecLTmfNUJoMnRrqWw5wNCnLzp9N6AxA2zDFCs81AyNJret",
  "key22": "4QHETp44hdSbAwitoXsc829cMAZDWFrphjnz8Bk8xaDpjcWptd1s1AbSFPx56sRmbBEbCfxaMxHWotQSThUd3MLZ",
  "key23": "3VcGm3HsBdtQW4duf53JFzinwKitVzpZ44FPP9nLVFCj22r93bHsKHQfMJ1pVbJa8rg7wKU6GM64DyZ8UUPFZ6fq",
  "key24": "3QKrRxjK56B9muBkG2d7JA8bhW5L6jZ2CJweZ9mqToog8FQQHKeTQoU3QMnf537nPZGK1X5kT3dKMPR6xf5QmH6s",
  "key25": "5eBqMfUf7wZ1wFcWsJtu8PRKe3CftMbiYmHkXgqjhTw1ndfQev5r7wUGGXtB3axzHGDnuC6eiUNcp8iZd3TyskZr",
  "key26": "f4JcwRvBZqwyZKwrwXjmHkViKdv97RQtdF7HGyR5wopap6FaiP1Qc1uwfhxsDsVAs9FF6pfyhDLJ1yfU85ywvCe",
  "key27": "4MXCJAtdcDY2j7PcibjYBmoHkTb4nuqvokyu2Cm5uvXcLSX9zhZsDmhHr9WdxgivEkHNRTixTXWxiYMW2MD7n6Nn",
  "key28": "4B1cMiSPZXnds9q6b9s3uaPmKH8NVwkxoym5qxsPD1Nq1aP89jwnimcnP2f3gCRGc3tBEJsj55hUdccEXHKiRR1U",
  "key29": "5kEx4rmQxMCWXHEV8yY8nzTpEJaWcmfeFZLZqyqEyegjcMbJVqNzRAqsLRHpVR78gUoKre8j1XRTKvqsH2Kqng1u"
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
