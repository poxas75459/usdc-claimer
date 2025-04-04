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
    "zVuYJ9dzEaFtGiCSLZJX5ihYm6PCrtZpXbLLRDTYwexzRFNfW3HZAFaAxxrZ5syXKi7KNLWTxajcJarwv14EuWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4Aq1m8J8HwXJiEknAUX4ruxtRkSCkcuSWf24tUVbZvExHdr9kfmK4XXMZAaPWMg2HYWH6i9vzWk4HTsshCczsA",
  "key1": "4BrNcmxAMwHJJReqGw2jjejYvGye5dJYwHsnEfSu7wX75C2WU6Vx9YNSLLDPxcpSUsqtE4yJhbxF1sSsCp9U4CV1",
  "key2": "v2Nr9XmcJ2JhwMYJsvnvWynSFZFfDKFi2QCZ5Qx5XxgZHjSTvpLvghP9rg1pmmX41EmK4uJrw48tdD9TP3LXn31",
  "key3": "2dN1XZRtWzWgiLprSYF3Uvbops6D34W3MYNKh5rcdh78yCDmdXaRziTohy5AEEycRy7GWbrWzh7nmnUdcvpZcES3",
  "key4": "4LiDPWb8jgJNMwptTw7y5y8n21kDnLceBJH6CNSKrfn8qQQkhBVzDcK5m3uythxiAKTCfdKKjp5cdSruVnXnwp4V",
  "key5": "5SRoZDAwi54VZmtwGRu8anMwXRGTpbrUKed8p5UmPALobC55ZNSHA5Xj1NdAGxFkA1p5ArbzinePDwpYYmxEREiM",
  "key6": "4zcMbTZGeuNvaGyXyQrJgdRMuGm8wvjY1XjYJCmwrqF5ARBPocV6GY4V7PWAYzLWmXkDVcRTTHvawdBdo7pGqijd",
  "key7": "3rUGNkapvtaPBddNRcbDZ9mTxxu3jCgVL7g3j5W4frrGqkiftsJcsKry8RqbFGnFEdEcrjgT7WsEmGeq5gju44pD",
  "key8": "MjM6oQM5BfFuMD8QeTkGchj5CgPMtFvzLZc9ACTDqmriCVy1sTjrx6HzNGan5Lb4QjKdcMukTnToTBEHg9eXdae",
  "key9": "SRasXCcCqqpxapqnBkNCwTjYnYCGMcyi4wop9hETUjnpL52fYAHQp7jPxRyUjtFf8XVZtvE9wRVvzC6Bw2pkdt7",
  "key10": "Z3aNHgQcTY5AhxEgVXqD9t1N5ZYV8iv9Dqai3kTydhtdQf8FeayM5sJ1wDUp3m9k2GZBtzx3bnFS6bRdtrsH3x6",
  "key11": "4Dzctu1MRQXeSG2Ked9DzkfQvPkSo4CKmgKCeaFC64Q6kgkgRJ2ZNR11ZwhduCJN76umZD8F5AgUdoW4ESqSDe7n",
  "key12": "3QVmB8RG5tUZeSTRAb2vYfmN4LiYdLeMSA6AUHHTHMT6inaBBxvLQmFAYgvy7cJ9X4kaoMXxEogrfQGAAP9v9BhS",
  "key13": "4bz8vwXpva5yv9QQLrMCc4B53wjSNUBoxB9U3W25gaQ5crqST77iasd89CamFV8broJnzDczsjPbFgCykc65VyYa",
  "key14": "3V6HAoafrvC3AVTZnrqS2wAQfJJj58MksAy2xWNPsKxw7ZNsRaUyzeeqStpVP4jvohheaF7W1ZVp17sV3QA7LRWe",
  "key15": "5SXZMJJbhSgaRQHqC1xZTTTo4yuDWzvAruK7U7Fq1xud1UTxRqKxDZ1xq9bw5DUuZygZGhohgat2TKqsGrMha3Xw",
  "key16": "4XRFJmTqy1KMjnSqsdoLGWiPYNR6HiPE3byaEny3pBrQLNsoiwM2k92nbBiCGJRd9cESG1aerjsVsF2iDuKpMJUs",
  "key17": "4vA2Af4Z8wcCQvrSTJpDfBt2BgpLhNJmLv5ULffZwAap3ic2wrVK4Uja6u6f5GVgwTqxHKhJoANk6aU7E2kyfV28",
  "key18": "2f3i811aDUmuiKvTriyyA9sFBNBf6BXaniZu6wp94kktKzzEMg9yNszDfRCLyGh2v53XtSuJqAs4bajBwrtyudLc",
  "key19": "4yEzLPWAP3EsTp7Z89K4vaxTVLrsdVpsp3CZ28gfPnJd3rHqjgRX1opbZjjstSTbVHPJGPnW3LapkuehoimYKriN",
  "key20": "UfK4hcq5JyZ3uk7bZHyGVnghKNm6dx4PtUWn4HTa2NwuGoVGw2d9EBF1ndUYaeMF2cc6YFCoCc7PdQZnqLbAsod",
  "key21": "2EYH57xaWKecmudGLSDoGEFsXE5DG97VsZxHyaPrwC39ceoDxxFz34x97TkDFpxhw2i5FWJepnrvKvfLoJGNYrGj",
  "key22": "3fWAj4FP2pLMpikaBcgxXTGNBr8PmvhfL5tiwZpn4eKzHhVRk64APYpZKDCefSPLC8cuzua4e7cp253DnwDLnrDc",
  "key23": "58ZZMPB23yn11u3FfcGJKYrERc3bg5WhBjA527Pcqtuuk6mtg79rhsHHfVqcxuDwFVMyPN3jqki15azBkM6H96cF",
  "key24": "5Dhqr7LyZSJfSUqL2rthhe2Es3qZXyywzABSEcoyLB2Kq6yhuWYa1yhRz8tRsCnjE4iiEZimikrqXg7tTWeNxzvP",
  "key25": "4DP6G4p7zG4gbMZDdHUrmMKyKZYLDsi3f4HduKdwjyJUb3NEHk8wvhtmaNGVBaYi3rohTzjDrLX8j1g3zjBxy8jV",
  "key26": "2ddMN4fbeUTcP7b9iXKavbo6jGBEuJkSDu3T5mth1RoiNUfDMvqg3g3Xx4NwdfA8LZ8AUTDmAkzQqy3T7z6aYNwR",
  "key27": "3oK94Esq3AkiSduFvKB96q9LiR83ASBSBtFYfxhFdryCQzpV5oFCwyruJCX2aRBfss1rHsBbHwt2ZUsUcV5bVroZ",
  "key28": "TNVbBEyZXDMsd6eapPxBLUXNkfLfzN4oWnkSCNzaRE2epEcne1m8iU5a3eA2mwP2BkeGNT5GUDVHmcM91xd6Qpt",
  "key29": "3BJaaXbSgUGjMbErM3G9y2i3Ndgc9Gcn58nN4VLFhjMgBEmVyhkrVijT2NEkb7LodtuzZisPkeFEeuA2kcYk75Ya",
  "key30": "YNyJ9gBkwLHZ1ifusDtVF4TN6RkcYK7A3bCHcCRvSBDb6hjFBcPg8gyW47DqE3VWZdQZX2bKGiYYqgYSpkzGWbx",
  "key31": "5pqBNCJYngr9575ScZYPk9vHQDnbxBDqFZnRq18yFXtTfs6GjnjxJaqh7tHRCFauhixLUrjsyGWSPN8MhJ4fJedh",
  "key32": "5SdaRTu2iydt82BK8xFkFCyh5GWK7xNgRbpRPinaBajC3RXARy8V9RxfXRfMeKEapD19uyw3NDn3TLAxde2pqZQg",
  "key33": "5hX4tiyCo4ejCgGXmE8B8gmdyxZn1s69669Qd5R2f5jqD6qJ11UxfKjJt6MrPhpkUEmofLvK2Qz7Mk4u3T1PXeDh",
  "key34": "4pSCY16Z5auPFWmoj3HJMLiyFiaSvXS28Hmxe8JBqU2vVQ8DvJkBtL6fvkYmSGd6XoUV1JboQ6ZAQYv9fxEuPgpS",
  "key35": "7jTbuYhRfD1DXhAEGbZSHrP7pvTPVWJvWhad4XDJ4tbuBxk1QNgec41sS533HRfSRP4iYmb8PTB8kwKwTVvVfzZ",
  "key36": "2Wk3PTo1FdtjTWpeK5opyy5Y9USbpmxjBejD2zTe1PFPqUfBoPwEN21azDb9dMPRcfuoRvCTWgpXpJUurUXrennY",
  "key37": "3FtC6NZJG1SX2uVXNVzwtU5ARttH8i1kexsHjW3jstSzBqwmNrefSbyATDAyuxCXaarj4SLAv1NTakRsVVHnMTtB",
  "key38": "5frE6FHuWhUfeQyonSwsafKt31Kf9FTbo4RoyUjopNZBUxSHwb3kriBCHcwv89UNoJmYGdKzY1sdcJ3j8kLuQvdp"
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
