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
    "r2Hd8kbqxfoEABbo5UpPfjkvST9RQzCwDNo365638oPSCm4Vdv4qZrN4NVpy3KWAbe8hvcijo4TNrgUzj7NtSMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AG7P43YJnJd9Ftmw7opj7rcMapxgGAYqND8hXqqyWMtwrtFnnL5WNTSGUHk7LCnTPSbXaH41cYSzAYPnmYwgpnq",
  "key1": "4CvWDdQEGtrawgehuRQeaRCK6gtJkgsCAU5FLCxAWQNd7zxKvncHxKYjHBSFUxrmNkY1kgy2bDEZwsJWPMBGwdMF",
  "key2": "5MMnLYkwe6kEZy3ppcmG6L1NKM2NtZM9hhCan57vmzhkfPwbsLK7eq8kqSiZsxUTBE72LNEFwGz5Mp4kjFxoX8hf",
  "key3": "5j5MBmnpjZNAnEk1WqNtPYyNA6R4u85D7j353Wgf1JfeWHC7nfEq9EdZx9AF7XtWjBnX1RGQUXXHGBX2SruQVu8C",
  "key4": "3DySexWDJc334QtqGoWFuvqtuf5LjP37srspcnEFyHRbUkrL9M1C99DXAVTwcxh6eoGwU8D9xzV3jJMoSGm2VtMU",
  "key5": "4WeHBGqCG66oJuz88CSK1y6EFCU3sYE2ErpG38HZnhQfj8CVS1ksXzfadnqrU4wpHKc2j4Js77P8heGzpRCiixvk",
  "key6": "3rdMPFuYeXY7Nx3QnHQsK9a7SVUzNf9bhzWTHLPqBVASh56U8tSiPkC2GxFKonjaoU6L8xpZLQ2qVf8G5NhSoK1j",
  "key7": "5kFnodByrP7MB7vmtZzQmeKzyP9Vp5gmgYAQq6CRWJiREPSoxG7mdujh1Vwt7p7FWYyfuusZMbTQ8Ztp5Y7ZRDUZ",
  "key8": "31c7XrKn7pWbJUwFDrLXyvtGv9b2kNCgovkaJt8zdb4Hzbz2SsWB2AkjhNFzCs9cGCLwjW2GSQgWiPt9ywfE3R5B",
  "key9": "5imtmtcJLAEUDnFmzbMEXKm4FFmGTT8kTBcEBxtDo85w5McbKyWRAeueeXHvwkfaSqejw9bueLri8o3JVX3G1ZRT",
  "key10": "3AmmFEEH1kkeKSbVAWSJYogmJrVkjQpy4raNQZii2WKEiD7MWBqT86vYCuo5yQPWZyGYB16isEht8FdKEBdWD9qn",
  "key11": "2AD2SoUqnCHVETEDSnPUzie9VfpDgZPG5Ro9SgfjNaL31NN4P2rWR6fp8pWq8kWmm2kSVBZPsJMC87f1UaSrUwT9",
  "key12": "4Y8e3ugS5KQXKgqAGqH9172Jv8SRhFdcvdRV4SeWsaepvJL8rjidUTcMwZrJnUZBo19DvtMbtrj2LkHvMz863fuh",
  "key13": "3Bc3AEThXg2xuA4SJaxys1vsg8M5hAF5kw27VPeHivd6PmbWdzkmqwMXD3ZAKftVVXfm6UvA8kKKUtBuj7tTbjmG",
  "key14": "5N32ZnQRNy5YzMTvhg3BMxSCDN8T36LsAPHrYjhpQ41T6XzAEGbTbdT28JYM2q2V786YBc8owZCBvFeDks6XnGRQ",
  "key15": "486nRBuu5tb9H1WWMeRn9nfprsJQ8t8t6dLnC7Upij1afxLumGYooTLdtVF1vskFfXUoEiWLoLjeDQ9YasqMX5KS",
  "key16": "PRg6SvZWQEcAyGApVpdtBNCwpbuUbk3ChGwv1jFcM35Eu9jrQwj3JgPimW4nDdtiWzm88EGPoqdhvdXGZ46bRJb",
  "key17": "2YEWQSovT2d9XDigpokLF6Ro8tsPMgJYffs8sBCMkwd7emEhEW78HQ6zvvMCjx2JNTfWySGzWYXHopeviTqt1sGC",
  "key18": "3jPsUWJVNxXN3XPK485uSyudxEjom9ihH6dwq8GnMFDug6N1FHwRY6ty5Xm9Gg6rCYCG7fynmsKXo213HCvC6KAn",
  "key19": "VpY8Py4ocCrkuH6SRziCSEGXN8V7p3vECMMGwVwMYwG4hpHXKg9cEdBBk6Kz9z32mSQvfsC7s7PscLkoCdZfVNm",
  "key20": "2Swf8Em2TYvXv4fesVnzcCqT1RmU4aTMrMZDgt4iLAUH6bremu5CFmsGCoTBTdtmjfoYQ8JaLhoU7zWZFscL1eKZ",
  "key21": "3eWES1Gun4MbcKz3cCr4Wc99Yq8Uu7wpC8zNKNYupULhSkN79RYq5ih71KX6BW5yWoF8EFiZf4zkjmcp2M6D2N1Q",
  "key22": "22yyrmy8zAAM6wtvX1rkM9MVSzwmaUDNWjtjD7cx5eZJqsapVeHXKUtM3ECaPFPgqSUUsxyCzQB46oq4gA4VVFzV",
  "key23": "55ubKXuFFpKXLp65ugivWbTZZrRapxT5nmdwB3psdnCGBGxAbZjbZxQfZitniyqeEPW6dJLKJPHSkBn6eMxp8yUM",
  "key24": "HG8QR1Cg23PeGzJrZkNCqhRpUir7VDACwURZ4b8WStqPf9h8DjEY7Vp7fuHZxbhF92iW5BrbzCt67gENwGa6AAb",
  "key25": "2AmFWLMFFbQHSdgKeVwE8oBaM7fLG5nW8gg94Fwhkq1Je3D46f5pppimoZ5apDFGRSYWS3LMNm8vqGERKxFtZvKi",
  "key26": "5DqpFSX45XgXg3G6QVuS4tEfNrQSjS49a8wwW2gUoSZACBppsGaG8iRZRwTGDwouPacxxGwXAjUMCw1vFuAuefHh",
  "key27": "5K1TkULXJLi9GNGdW3i93rAsAkbYxJ82HfDXJ7HGAuXAsBEDNUBf9BpfjByyyDzDQMJCvJUq3u9EQTjbPyjYsVb9",
  "key28": "5FouVFRR264JwvPoFJNLQo47GhQ4PQEGj8njfcfYf1rDk493rpA6FDdax98T8PnCTSBFWmzinSMNzKMqFvcxqg6Q",
  "key29": "4xHQaAqNptKMLqamt31cvYAkGaF4yUdkWVeRbiudA7EvAEVtfdeXb8vksPwre9NJQ3MdRogvMBwxkMoX6LRxXDBs",
  "key30": "5b8LJbgYrJiRW1i4bQg9M6wG2wtipYXms7M1RqxGjMAmuECWMhKq2jrFSyMnbmc7xh191LjJomZMh52othy1ajvK",
  "key31": "vgUzRpkRxGqgEoV4D6zxLxK18KPZd7iC1M2MXKMLrcr4NXEqFYSixSzbfspWnrqas3i5MgpsVHAhFQywDfrpBjm",
  "key32": "3A2QJn2r6Po2r4f2AHgAzK53ZkpStDkWQ2Lrd3nPsrZe3x6rogHbLDLAuRuHJZN98P4NmAWF712Tsiyzr7sNYEkA",
  "key33": "iimnhkvNMkR9D1hHuYGQP3hXozcrR35cdpX8C56zh1ifxQuhqHPfv1LN7DQSQUTgNFWzV6EEjcWVT9Y9XtG4iso",
  "key34": "2CPDQLQQgxhvLqtX7XBZxW9GoyfFP4MTkefdCDNTa3P4mUBmM9ZyhpmbriakW1pS2gwJ41zVTyGktp699Xbq4ryh",
  "key35": "66oKACo5QfVpMssVr1hhf6Qjw5xpNCrNRtsgwLBbVboNeQviemd85xUvGXdVgjBEWiCTjErhhwhYLtf14QNwx5kh",
  "key36": "444tzhzGr61WPCPCAoRDP6o3DBREjyyRkJ6F9b3KUD1BCFmYxpNwXqwSvprXvF6eymAizZmqVNXtSpFGyNAGFS86",
  "key37": "DgzKUfHYoWvw6EWaHLJDVRXEooKXasrnJ3r4gmNMYaTgNsLqLvxgok6Gef1rVC7vYThSaDDC7Tnt9CVM1pWnrAN",
  "key38": "S9E1qUC1bTMVxsnXTCYFLv9UgMEuFRK9WNubxhJMbGZoVo2GBqDr7aGufsTitK8gjeiPftX83dKANKpEGUa6Cit"
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
