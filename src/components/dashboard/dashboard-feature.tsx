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
    "3GsKBTcy2qf7Xc8f3TKzgGV1Bs5ocANZWRLSFGf8kJA2fBUzpqQWMibhiFvCVmsXhorfWxBAzxYdD2jGveRPF77m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "orYvDHduRe3TDW9Mkscp7bMfWvAKBgheQxBcoY3qDwRWZGEpZE3qBQRJ6E4ACoFpi1FpNMjdhzoH1nBcbQDjCi8",
  "key1": "34PbXHiSWrvtuNaouRznnrBKnKETQtwCCyTDnYDTr6cVAGE6YZW94rEW5LHAu9A3m3wPfYLzFiyzUYL73TDx4VpX",
  "key2": "33jwgvVSjUdnJ48NyNjtx7F9znMWHTX2MtYxmtUpH3FVaBVUyT8RtdLgUar9wYD9XcDzry97xrJVhV7wG4C29eVL",
  "key3": "oWgsFUXUBHSZa6bo5JRMbPVmb21fnP8jiwZLnW8aDvbVREfZHfsSqU5dgBLhuGaomZoawujPUTi2e89BchuJsZG",
  "key4": "4SvUfgbYRRMNkEScXmVAMj7DoGBF6H1XFLeZZyKnAzxrZoXNwpUQ6nVDcMNjhB9kQN1mNg5dHYwrhHLRmGQX7bup",
  "key5": "5hFGfaMR3D6E4qpC74hhYn4DqCrXFw6XBpeDSrCBiTr5WeBMEWA1eqo8xTEk5U9JjZWfs9R2BG8QdAfKkgyqDLTf",
  "key6": "2wnbtcCNFStFerBS1SmZGEPz8F7urUupWLXhKu9ef68SFMcA89HLNCuy6TWZG728inUoSd5HyRakK2WKgDR3brsf",
  "key7": "56DMjSxNMrUAHrAJapBmUZJD9kLEsG8iCJEAHM7FMtR1kAzJnmuwcbyLoQVZ4spynAXVraWaYg5xBBsRKv3tbApw",
  "key8": "5rkUZWM7xMQNn7h8m2jaAfvqyDAKmRJuX1h9sw12Lmi71rZEqwQTGqDXELRsMJmB5kdwfgXvm94xPSxQP8YYd9eM",
  "key9": "42PMXYECn1GDnwcKQd9DQPusR14p6EfzyKbbePNii9zjrotnbMej7WxZH4qaxpmoyud6TLoEnfPRND7fwMvh2Y7W",
  "key10": "3qPRnNkV2aD9nc2t5G9zi7cETWT8tjtrP3oGTPharriqPygxZev5rRYtkeDfh13AHvhCVio6iVouNotJWswaeyL6",
  "key11": "3BBxvFiH65qMzeTgjFt4rJY9njcSrTBUzUtwPPM6PZXnrcgBQHjvSZPE6Nm4qKVm3peaRmBkbgJuZhQEVVNBS8S",
  "key12": "63T5UEpyLK71UxyK3bAzXtnnoJSM8QZMNEdBezP4ZtiS19nSsCt4ypxiQMQ7duRCquADhYp44kZP3uSTDPiRUGFd",
  "key13": "4zu6ied2P9NuL66Lhm4avM48pWfcDDuJTvHPo8thwVRthdiN4z9w8T6TuQFZJvHFQD6hGsvYakvphU1cjLT5A4aV",
  "key14": "2QgYxX6FqHMkZaerx6dEVsQ8RwBep75z6jyzKGaweFGwxypNQwhEDfcd1FE6J8W8YxiEKBMaA1KzR9rVYeMZJmBG",
  "key15": "3LdTVcrVuo9v5V8FTyS62S9xXktLN3Hb4vvLJn4MGaYkpoUGJyFRB7iDjuqtLDnzKNBhYK5ds21f4n2Vq959BdU4",
  "key16": "2sQr9TEbMoj2Xdap1mb6LNbYxS3xgrdzama9Zvafnem9kX4Dtd6vngvYYm8nZweoi9UxJfFVP3dFhwbckeaUPWYE",
  "key17": "vWcSf7HwhfBt65uW585SGosiZ9bKyiJ8AYnuEZjkT1f2oShrhNJKpcKmdQcFgKA4kqyzrQXcMe9EZoymPuPvvwz",
  "key18": "3uWWP8MTxapsorJAhK6WDWzV3XqV2gUuZPtDFD8cR2RYybY2FtJcewTocmC8Y54PoJbgWio7v4pFH4BffJFxv4xR",
  "key19": "4bx2AmviaGeovneRnRnnfsi71z1YLrbUep7oWAS1h33bQwcgnYcc24EPeD6mgRwf2joj78WTQpGzbahWSD3Y3uMw",
  "key20": "xq6BRGAUU9EG7dBzRW1U5agP7VwW3MJNDmp8WFbydY9Fxqfg5wATwqaQ6w84n8mrWn8v7r2rTtBYbQWm615BYsj",
  "key21": "2JYFX7ob8KJxeHSnsYi3Pg425QDUB3QHcgyfwEXgQLWZy1jaL9Lvtx4wPsToBUPPXwsKYRArWYzbgAPANQz22D9p",
  "key22": "2CeidERJWtPWQ2VVgdic3kb58G1X1wGgJ16QWz2pLW6BXrLqfDKD4kneHPimTknvhYsLStGXNB8p3bTxEMVJuWJ6",
  "key23": "2FDgn3bELJGSChtC5KjmJWhnHZis8R9RLQGaWxVzYSSoDEG5BJAihygR9fBvMpF2UCSutwxmVLgHBgPDw8GZxoNY",
  "key24": "5yqEAcGaRvGK8Dk4vaxgWatMvX248SDaPJ3qSW7vdm3rRiDW8BsV2njuscxuj7b5fCqdZdFbZXFsnSEhDzTZF4uX",
  "key25": "5iSvxNjRnkrjPHVtWfUMAGqzEQvqRdnpq2LesruV94YoisTBTjpk56aRz1LkDhXjZEKdFom3ZjiDLcyjykhUTTc5",
  "key26": "x9vEuzT9nTeakJKQFQcNGcvQwNhtnbH49S1jarZNC6KSimXNpE6WdbmmMdKybTCRosQrM7m1maMykj7JY53ZjmD",
  "key27": "5Qbwx4sjxyDWQfEsxVXd24S3rsZjHTuiY5Lu3gQuR6HV1cF1yr5w87FS4kg9712qQrRmnkwqmjR82qXAcAkPhS27",
  "key28": "4snmzvghJ9WMFDQDE63b5NVpnAeYoK2NSLCwcivuxqsJWGdQnRDs6bcMJEKM4QPA7akgH7w8RW42b8kAY2Nhk17Q",
  "key29": "wmWuVKfzEEMN5iAJpqYbsPhY3vMyHRZF9TJFDVhJumkqeevVbbnAo3eDGCi2pXh4HdheSzzmMvB5b6k6NkbURkT",
  "key30": "62GYEGGv2x1x1F8wL1EQ26tbTAxoqLs8Zt8T7YxXFhX7CeNB3DLndSJaenYgjmsHBeyLwBJF2gM1wECK718k6G88",
  "key31": "3GRNuSnqoxZHCnDbZYaX8zyAQRmXxM8ET3Y6x4W6nH5mspqT3nsnvVDg9BNMmkAy47UvtKxG5Z8QBRyRRA7NbVx6",
  "key32": "2J8NKRRzBHBxHDJB6WStJ1xAsh5TVgq4W1JRpFx4sxYxwJhCajda5ht4R31WBEGB1Pg9Q4vBczx5bqALNn4Nz5yS",
  "key33": "ts8W3qjqHGwiotuXi8NTR22MnLVuxgDcsYVYQJUSyvVJcPWvoqg1FQKbPAh1hLs7mxECZEGveHbcWD5j7CimU9n",
  "key34": "4zz4w479QewZmXsEf3tnshg5RTwm7qVF5jgsCCDzwVW3ZftReqyR4SkcWXynB4aDmmTXLK5JjUivQ4wBkNHoXKZw",
  "key35": "QfPbH99pCobv1EkneQqGdN9VkquqiSJULWeCV6gFZFjDZeJG4LQVkk16o1JBgRcCbe2eF7SpYQ7YkoUaeLgXbTk",
  "key36": "3VUEqv18n8AerGQJuZ5B8nUX3R18Dx261gi6yhHhh6ScPh6R7R6xfDrTBSVXxxUNQkNTkeik2SKDsEK8XYTrS8NZ",
  "key37": "2LY5V6vtJNVNgS36XSL9Bd4LqC8VgVDLVY2TQuA9F3VeThi6LYDLZU6fZe8wCcYEh1d1yzfCCusuH6DdQStHpD7X",
  "key38": "4UdfKhfbsCgTvHqRGgDYqQuPFk7qD5xSss9Y5AnsVhyCUMuLvoDgRMDUwZn53Msdm7uZyH8fPrgWyzRkbCuXPyxU",
  "key39": "5ykd3KLZbCcQh6uDSSFkEDqJxjj5naUvYsmRAPUMLLhTj6trtXfLpWjJHrGEEKJCus8CWYPAW6F2G3SXi7EJyAvb",
  "key40": "4HVTXXF6hemzydfmUU2yufZHUHNxwbig2K2Lf8Z1cfywTYC38jYDPToD5Th8XMRkBVJ7TKQCVsSVmMeFpv9zrMJE"
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
