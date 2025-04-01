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
    "3zvaPZ5e4MdQU5UNM9sY3yPbVEUMZKLccqMsEcxunHvkt4nowD6eQJUXg4jrgXQM7v19ATd5ybFicEgaqDh4A829"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZjGy1r8o9kAxgVRUEY84k21tu67nKHfjJh5Rd4oqy9819MjWj8bC9Cp3yuDZBkw3SfZuEEmkjcPjeddVqnzYLg",
  "key1": "3vjVE4p5uVX29wMXXkYoyezXt7U54wVQdLqjZPfiZRsGdi6A43CZH1Ar3fdmp6ot4NBWgTiLCX8FjyNaBVxmGB5b",
  "key2": "5VDZQBqRYCnS8vn7WSpYWDGCVBp4FxhAbhHTxgWpsQHmsPio9XdZtqLUXerSgRzQW462QV3ouR91LjbG3Qmr2ms5",
  "key3": "39mcSV5XbCufAYGZTaCDY6z57jwCaLeMuzxB346dvzQDHN1D4nEFLahDexx8iqK8FLA3bCRXQ8yRzBXTa2VqFPvT",
  "key4": "KYv9DCCN5946tHxjJSoSwbhkZxdeWJwWYPYm72eD1ZsQi4bxGSZHeT88JQuJQu5v5WmaiwVw5XAhXZAphVYi6Bg",
  "key5": "65mrESWCs15zBi7VwWibmjZcUkDWrk7FoTmiyLU2ThmYfKGqkgVckmqnBMt7fcf4Hg2w7qsaabEZc8HcC1vmzBVQ",
  "key6": "21VrUxoEaEo6RW3TtrjK8mFYeyb8hY4VipTBfcvnFQXY6wt4KWVZbjB9GTKQLQxxpfmLGCFiAV2BGCQqGkZdaRH4",
  "key7": "4cWwD7331DNz9xDrFf6wcbKQds8wyXi6zCSadD2fcEUBxeBvagfNs2tBG7AfMBzU9iJ5BLgxB8Pis3ukBd4YVkBM",
  "key8": "ARy4RzKAKsuXhZaSW5ghAgDxrLpv8CbEWEc9nWkx7P6SoEJiMSdDUFtU5w8h4VPrx5UM7nV9otdv2KPHa1yfYsq",
  "key9": "5UqxP5vzPZYzxvTfDsU3GokMFuF2VkUH1fgzJAmwbuZNs51bfFFRJV8UEJtkFonsDkNsq5PzDXC1KbfEUQn2mwRg",
  "key10": "42MqHR8UVaWWKNh38G5ir6vywvqbm6rB8wMyEYAZR8Jds34CqGaQFBL1tTZ75gpDfCq4yJfgPBcgT46PTH5Dpmno",
  "key11": "5CTehXUp5Ys14HwU1Jab36LYwbx4jQ8KRJzt5sPfePfr6taTBnVQbEoW4oxBJqhnQ5eQJGY36jQiEQ23AXoWcUQo",
  "key12": "29nkNbbKcCRLQEHGnx2GjAZrVMTZH6o32KV1vSR7VjeCEMY6HwCfrFzfnrPazW74hQy3ZYiHLeNhJWZEk2DizEPK",
  "key13": "5k2H1pad9uaENghRgVi9qiSRC12VaGRX6afQcWzhLQb2sg7nQ1UYyb21Wgz8yTAHWhpTfHxCV1eXXVwhVp97kBGF",
  "key14": "5AjQbCqBnaX8So2qN24518zd3AB8jpHw2MkjbXz2nTsZY4DLKz6NMPKf4FLYvFFzKJ75SqoZwn3iEVJhBSKtLJRr",
  "key15": "2Np37g8s92C7Fu85GBqzjdfgiaLZnDYb1MurAPdbGeeVHXSBZq7g5zoAnQc4oTfhK3WHkeDwBjVESPGjmvFzJwro",
  "key16": "5sdX9spNU3tWiiYckjHR1HMZpzdbZgvf1vJ1K21RG8R6UVbRWFDFysJE5PwqcgC1QZVCURTedXNBcq85EWzNR68K",
  "key17": "3pA7KPmhe76PszRMpthCWC2p4jmweThUdtDXSCdpzoYUC2Verfb9XvMn71yQgn7x2ZMNhxG3XiWsXtewik2UDvvV",
  "key18": "4VYm2nQpW5zx25UWexHNoHAo13per5bKBfiznx2ZKE2QSr2xm5sBW9aBnZNdujqDtKxd8i68AwK7LFr3dJNLZCqY",
  "key19": "4vzqG1MhSfAyd6wfMRj6YstSthDj9Tntfy7WZRTBp6fT7gksiwfBBGZ6w1EtsT8frc8WdnzAroXQji35vHYcHhqF",
  "key20": "4sjjcjpSUbxknSrRQ3aRq7RucyiqHBS1zcAL33eE7KTohZ5kfKpHcAPikgxK4CyFT6EcmDuNSynwxhNHKoRnZsSW",
  "key21": "3N63hWr2Vs38bSZKhSf2NNJp32qz6omfGFd3LdHotCcxvVGK6zaLnDjV6KAuP299gDgN9iGtLeFKqughJNxtoZcY",
  "key22": "pAQNzF8TucJ1pwDsYEYaMCbN331PS4B7STvUahJPqYRMiP4WvNSwHWsLRds6qvCyEPLmKRNb4Z1VCPtGpVfypjQ",
  "key23": "2HAsut1XwrZALAbpaSb1LaMw4LwvX5smSR9ES8K1mDAh2D9LBtcw3hVox3JFZAsw4rDhHvUr9tjxQwvVaheagceZ",
  "key24": "PNxTojPXc5z1rwC5ciSUhbWxoH6Cj6rmuz1adJjHNVaMWgQRPLG58N5XLKSQC6S4APNtQx3XY8MP88ZpC5etWkm",
  "key25": "2LyWpD8sq7fqDo1HdS8ri2NdfWr1TM2x75Ubj27KAEDkqgsQSWKYDfBL2d6YCVQrY5z4ED2HZcazja4spyeidTK9",
  "key26": "2GbZs4pkywHpiK82jsfkfTXZFex3PhR5o9q8M4zWFq7F8biwZqA7m3Lyi4jB8jABAgRLD6G9HaKw8gVozr1FoXnC",
  "key27": "478scPg7xYe4F8YA3YXkkpP1adEutLyHP8XVqbjErF7WcWrMZM2nYDQVvhoYRNnpVhtUrR5q4hJDjPwn2WcDAQ2A",
  "key28": "y2AeFFBhRtydmcRR4XtFFALjcKGNWqGkE2YyeK7HhHfyxrDsJwiYoRQbwnEyKVtaTLbgKojutTG54zut1fh34Zo",
  "key29": "b5aM8a1Lhcwq6s69ub5oWJ8czUo81LUfw7vdPPTJZywpndUpdH9H2nuhA8DTnpSczAh9z9LUoFqGCntZgynqBq2",
  "key30": "5Mt8higdnHwVRQYbnnFDJToeq5Mss69kbNUM7aebeqEynvGk2h2snr8pZdNYdknjEfbvEnuf63duhjDQexFgpPnk",
  "key31": "WhEedo6vhiygNaKRJaQrrcQnEqt7mojoQSqMNzCyxgBLZAFUKmjTrhpXDso1RcaVHjfsLbRFp3DesmeLsVknXCH",
  "key32": "3G5bha3ZQkyvjZqDkn9uvVH3HewXr2cXiQeJ883GA8UTmpNjer3DLDYFEXyVZfht7mREX6GxBrfSadUv83AU1V6c",
  "key33": "4rTTT8TqkFB4tVa1H36gj9KtEMSKiosNA5pwqJco8udsJBJfykXyx9bs1GvkJeeetMnQtzYSLjcxo3UiapiQrdRF",
  "key34": "23xie1qTqtjwdvhTRaNvUDuxwYSr5ukBgradQiot25QWuF77GFr6b3eq8HcV8wnJoPiQGXbJRQMZw16dSDpsoyTn",
  "key35": "4D8SqZcAArNSTkknETrSptmoxQfN58bkCxjhKtr1frYVu8rdE2nKfgDEduSor1ZHjaHLeBk5KxkmaXizLdTQrsXk",
  "key36": "GnLPqrUomXRYvBxn6JzCNtHEzhGaKL1NhLW3Tm9DmQcTWCZek1xTwSqQ3iS7FnoX3ymS5c1sXmq27n15ehYYhfb",
  "key37": "61DjUx2uE3YwCuCWG3g2JPTfHTYFC62KhB3c5aSBzH1YYmNN4xUcnGNBVNtKBSLfNeryzXJP1zFTdKAtpAqfHYqb",
  "key38": "31mrgbxWvSgy1MMW6ts8ArHyJmhBnmi7L636VMcBXEftBNFMGtJxNyjAhBA83RtQK1zB9GPFdwC7CX75oQVqyE2n",
  "key39": "5udCL8rjmzDTfKaw1U6EfNKaybLhePrFfhFvgHWhdWitxheyEN26HGeghC6MwD6ojHXcDgUKCnw8qa8XEvtUfSHq",
  "key40": "XWoZ6WAwmQBsmQiqUqS2KStdxywwBu1HMAuAfHpznUfR9JHMgkze4BxgPRSZxSAuMe5BCEbs7h6h6UuSgabt7Lj"
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
