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
    "29bKCnCSeAH7BQUucHQCcpisTEHdDsFv3FBd5FYVohzh3DnqpbCnmmpiTChqneeaAe7QZ6RZMrk5NXSNQKHZabjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hYBMKDzddc3dQonHZr4sNbVx7GyDgLDXFM7W6GtK9MagVvyii8M8Hjd3tLs5seYky9VbqpSzEgBZnqMLLJYPsGs",
  "key1": "5hMdVidoKG1RJxVGUUg84ZdefdBwLoNJN8piyPi4Y6JSCD3DHnbjtPmrCtiWc9RexicntvFRVW5yK4bkyEFARkCn",
  "key2": "5G1hnnmGVom7FHUxDyqFR1FfyBHtN5wRoScCWDgtYSMBLNUnXYXDdn7uVhPafBLsBq3BuetXSXo1sc1b2vo9QhGy",
  "key3": "UuquiuXEvscJnVkVekuSVbH5HGTk62dzcR6mfqPBVx5YiDit3b5VicZyj43ziAnQcyvDnGsKXZrdLBoUSwyuuKK",
  "key4": "eDXYZfJ12KgTy7NPhhkuhatpwtdHbcWW6yNemf42Uo7u1E6pmEHqXVro7DHzbrXjLzJxDDPddoDcJdDhkEk9d4q",
  "key5": "2mkonmXGfPowoSnX5eKG6ujUuJqs3FpUJXHg7JPSowoDA2fiCeU3BRGVwna4BELuFC8iFcVnqEbrbZhHhHF1ua4v",
  "key6": "2AdBciXHJwgx5rznbc1fdkBVqPKqFtTvsgehDv67k5RzBuRiTP7iayMYHwT9JUUa6333Br7rinB74uATKgpc577Y",
  "key7": "2xT2RHYUAUWKnkQ2HRjNvAEjone1MhvfdMDbh9fpzScnUBhjQbWrxuheUgsFUAMMMSSWtvXvHCDxneenK7etNMc8",
  "key8": "2YHDAUn8jjXTKsv89H4DrnWS7B7tXtHXUMDvQryLTvjZWF3Zd2vQZjyFFYCBB3BkNTkHQwhrysPsgoF4qxqLXDso",
  "key9": "5a85LGDzFZFFJQ6syGvDZ6wigvxbnpMzju2wn2CGnqYwBzC9Dk6F1a7gHY64SkjaZCgGUQ1W5zM2FdazShTtLceQ",
  "key10": "3ZgtqEtCm3MYqCvDJDQLGhDKJ7YFs5yxACtDcZNBxSLAXZSVKdJX5A7XPZnSjH46tTCpmCAXSZvGXeWQz161uDPu",
  "key11": "62eLtaLnXXLKqmiwbeaRtHRZBHKtVaM2vzNLaZJhseopDaL4XxxfqsYwUaSEXooVrt58f3q62ms1VhJR55mLKw47",
  "key12": "5vyFR9kVoN5hciiBS6x7umQzwRdYdjiZGqNdQuf3d1jkfmo2LugfcCny4Wfb1HfLarSfLSgp5ihwoWwEvYnqxisS",
  "key13": "LVtMY1phJepyqu9AUWwv3ACCeQ9qzKRcUWYWPvcF6dpdybrYhQJDxk3Mz4nBmjBs4gUN5RmZGRAkKf2PcLkbcPZ",
  "key14": "39ahsbuyN61cqWs8s9EAwTnHF9PfaAVmZTcgybkeYtNgQhr7s2g9uv7hjfYzegXxixzrPkyvcTFosMHMn5mKeADd",
  "key15": "3ogBCccEhJg6ufRWwenBt2ZWuiZxLxr9QR4M96CyekeZRstNNyFwQQRFCNQ3TRppc63ybJ576VQemdVbHU3L8u9F",
  "key16": "yLsH4VLVcJFSz2e34hMS3JXMC8KejffZy2gpzA3HgJYRN1uPJEf5SAV3hNSwBVhJNiuRmoRSWMQkKtM67LP5tDX",
  "key17": "371r5HWGVqwYZbyj5AkjMd2Xp4AKTQbD5x5DoFWzo9Zo4njxxEeFzz4Grzc2YoCKAFJMTUYefAZbz5JbX58k46pr",
  "key18": "LX8jvNA67dDC5xapJd1A31rDmzdu4e2nLV9ZybsPoPiqqqmSfHq6pGeMsKkxb2ECq49T4BEpKbv67emKTruBzcj",
  "key19": "KMLbiBRx8ZbRAPMJN9GzRacohGq9FUQWGvhH2A57d1vim1GnnXm4MiDa8Dp3BvX2t4Yn1ApwdKq36hLzPbWfZTZ",
  "key20": "2KXrjYksfk3JUSGixX9vXy87SmuVBu3pD3ryXbWHXQ2Xu41ujabN5RFoSCKMgCJBtArN5YtnTTwu6qczRmDyK4Gq",
  "key21": "5BFazG1rgGFceaszFutqPej8i1emoddd7HzQFhhz8aTQBLQhztpFxambs3fAmaXRHBVHTNi745vPZEAnTCfTVNcp",
  "key22": "51nSTycog8kn1pP88Uz7zGozKHv7y4F25Z3yCBNzZ7CyAT3faYD6VjcV8u8Rg2iSbDRkgKZ8hqYzDyFikzTa8m44",
  "key23": "fWm8EX4gFFJFCQbyFPzB9hbkNQxn6ToSwCqiqTrqi6cQUw5cqdPgm5dTzdpvVhyHTu6YkPRcm7R7LMXJotzshri",
  "key24": "4xRQAbeBLHQmxnL25mtJVC7UXZrFEuf4jWwFacZdtrAz9qES1Zqz18skf9gNvmxTxhKqJvzzvJqc6kDFSxCBNdvU",
  "key25": "4wQBJf3w6zMrc2VYbLK67EgTkjwBwJmMXH79VMiV5RNR1jwtHCH6UQ9nhKMNg63RE57HRzoFJJxTMMXzj7iKrbmn",
  "key26": "2QMywztkYiTnUaDyovo4e2oqwWiZn7tk5ypnQt5wgcCenQCZQKHfv8kyqZBBuAvm7YAxcTswxwEY4MGJWBF8ptZU",
  "key27": "4WywfwUJdzxox5djrzjFEgBzsWV3u8wiPe4WjcjQfbgKE6Xqqf7t6WFWvMyE2w6JS2rRvyjeFZGuHx11WqkB1T16",
  "key28": "5zxfyWPnc9fLz9Sg2DEjRmrBDVQhch6k58PURm7t5yFGjcJY8wf8APBC379hfM2nBth1y3bYwvcjoRwvzVEjtcRJ",
  "key29": "GC9SLrDfhTxzp62oJiyYqc9kb4Vdyph2bdSZkGPHo24NexVxaCK1RjJNfvtN3XXp4Y8M5Yk4V5QkTid1aKsXPLK",
  "key30": "BgpzZE8ZbEKwcHKJRZZztzs87fJKhKnHA7kMw8e1fYVT8EMsZcxnvYZALp7sjKXibgZaAYVorLddkYgJ8DiWTVk",
  "key31": "52sSC4ZbJE5qBMsWaFFCEa3Z2RvxMXBexNUCzVqTgyAAduNPtNzER1uzs9JoFcJFuWXruDk4JEDx3Sd8uKdsu6DV"
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
