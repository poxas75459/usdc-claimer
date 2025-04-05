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
    "4TnaxJX88BmDLDFeAjmpitm53Sxcr6fC6f9qXndu1Uzhcjr7SmZZmvRoN4Hows6BrGMw9VzhtKkwmKggMhedvfeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qYs6Tno6hnuMukEuch6W1PUeFYo914QC7zwfeKUwreqXMTtKDXQt49i3Mi2bqUgbuBHi8KBXN2pW7FFQaaDj9ta",
  "key1": "3aud66sm47BVavsweNFTzQWU45CzPcFWwGY4qG9pYrT7ZLPNittCFbwQ5yZ5ruQ1ySM9oPdPuzPXhLqkQxd3Jzbq",
  "key2": "245DWa2pYCfVyQMPNWmeHUG2yd8J5F5kDSFc47NF9zdH8FEFzuW8VSYrcfoNNpVuDxs6a62oKywRm6nNop3q2Ymp",
  "key3": "5tdskYWqQr4yCjrcihWi2P55bNGj9KML4BDxozfENLyoVZharxGM9xYLGmu31VNigv5ASL6ACxJHimuDBpmswVRw",
  "key4": "4uy8RSYCykXD4uenYXdjHE7XnTbZr6dgvRsCgdQVwUhuzteoziQBFvjv7zKzyk6a2vZrxwXCatWYJpkyfSAnwpTD",
  "key5": "2jAFq8WGoQPCmmoegeedasip8mfpsS2QJDRzsupWpZ4Q7Xk1z2CaEc36hDXqQjbm9rCbQksHEWCmBFXmF4bKndmb",
  "key6": "VNqYiFdSaMyLsQdRauPhvtJ24dsWzfp8UdXdykbarTTAtDrhjp33Jx2WrbY42gfiQwHCWAgCg6F3mNfSDW3Ujkr",
  "key7": "raZ5hGSsPxryq1biM4XBfN2ZUReya33jXHXgHPQc8dxtnP8dZKEEXDcFexuvZmraGQLq6ysVqTeQLy81rrYN2Vc",
  "key8": "NFJaoRrMhTS66DFhu8u25Rxsj2VkWN9LDda9ssa9WLGaMamehh2d61jw2FLKHRUNmJTCuvVEm92fN6J3Hmrw8FK",
  "key9": "62jzCPKTn9fVeD1uv8mFgpVjFX7PbL3A6mLYMRADjPqb1sAERbDAN9Rvz5kacHgMCPHWJsgATktNtqFjXHn5rzyy",
  "key10": "3PbGbUHV2HKNuW5hgkLa642DbzejSUSxgNfxdZ2fbTLtVXgEhX3ECNbm3mwdQwfUGJG8gLsQE4JzfNtzd2wRctsW",
  "key11": "5nH8hngNuRqt6Ft24acEZV9udytAAfzsNccoTfJopnYzfBzoXVBzQrxcNN6mRpTDQELiJ9JoRMrep7kpaPrR6xSi",
  "key12": "2mJgYZzYCnR4j65qs26Nnq3NFYvMaEPyAYoNzJEk5NHr9QFF6jKqsYjHDZwkCNRJC3ZffaXYEFU1YQmHsjVbMu6y",
  "key13": "4WTmDK3Fz8zR2iYetbm59nmcS5ZNFzRmYRyh1dzSmF1boaMn9U2tdK6zLPWrw3S6HwGKsPzExvpy3g4P5KGn9B4m",
  "key14": "4yitQz8FdGckzPxd49rhv2nebZVR6BPr6qnLkpKgbAMZvMHKk24T8XMw6jXWN7dY1zxvGQG2TDATtRgoLoWur6b4",
  "key15": "37QgHWGP53H6rgjKhgF1CvJvhGZMfVWyeCTZKrGSG63dpuXDcicvorWVXF4yRwMBru2SCYpfJFMwSBfXvegYg1oQ",
  "key16": "5WLSLzKVv8CuG5M4oTacJfckBQzv5WUoAmuevBn5zdXR19E21gmFPpb5FKDJc7oprKa4NnfgR3oer2W6xW8KdvRn",
  "key17": "JGdUkgkQGtFdbj2nk9pYwfkJdkkAp4znAmyE9PSv3UXxexWWWEkQ3fc1nYPvsVJQRcdgPAwaxqWMYYAtH6sWm4o",
  "key18": "4g2kMnLLWiipVz8iHMocV92vz9Zh8UnXGyRtUeoCLmez4K53JsSjBfnzt8t8kvymyYj9cubqtz47uRuW8G8JfePK",
  "key19": "2yqS7REmbAo9EsWD5iFxJojuQ4naUS9aWJRUv58B4A9kVUVWbiHLY9jZ5FMX4KfAt3ZwKe3QetxHzvByKtCB461v",
  "key20": "5od2nrsvScrvbbfL5mVtVn4Jmp5D1t5ESVcsGo3WPR5jxxsMgafqDjQLUUEuzF6ffzZD5Ms3w9oYJKCs2LPDz7Fu",
  "key21": "24R8VVMztQF4BznJfAcWoNmgEjznaU9u33xv58Now8RsxH7KW29NRkAoN9PPtqT7R3aN3dxmRA9CupFXb6Sf9mK6",
  "key22": "5h1YyP7cuVcDJ7tuASNXZsgUx6PyTCMwKmvnPQ3hjCpyaeEhgJ8WKNKgwTkKjm57trWTPnE2AtVwVDJEAvRfNPJs",
  "key23": "2mJRxY3FG67uZ2UmbrxJQ5yfpjWGZAm5bquFXCc3C7xqs4XtKDH2bkK53U5j8S2upw3EfV4fnZqtFtn6cFZCvjmr",
  "key24": "pKbr63KNzW5PJC8F13CeS2ZMxa5sU3o4zLuPLkBCYuw3gJxK51kQfvJpcGKamHaN8vktC7Cx7fQD3CpFaSunTEf",
  "key25": "4FR3ydqmsETJvmkPMtWb3LY2DbqFZNeRv79ZYGTB8JmCS97tLsUHQYA2tTfmFnoAexChd3hLU4MP7iwxAENLeUxi",
  "key26": "2F3oY56BZjqVCaw8VLqSg2KXQjqYu3Khtrm9yE7tCKDBcKnjSn7SZKzkXfrBuG3aBXnKrP63zM3hAAr7Cms2akk1",
  "key27": "2P2ZnTNXXcCR2VMY3kYtbJ72XARHrpDtdMJGNmcExjZ6bjQ31akeTLegf3qqnhB4dK7rmZ69ajvZtoGC3ZYXsmhm",
  "key28": "28Q2TU6vSh7P82LaaNm2tkaMHz63r3HHzMTyEq4uujiJW7FUukwz5cRnxKiAPxF1kKirnYwikVSxSPb2ta7drJE6",
  "key29": "afAYhbMtCoqseKxu4dGBakQLq1ThRR1CnD5oT5xvY5r5xPARPMNxEuCy3XcSqP9C33uxV7LWdtndpZk5hCbzhn7",
  "key30": "RFbbCBTeB6kkHg2pmVeCUeAmLfkH6yJ4oYF8bEjkYh9ZdNZsjLPrFBnyCzbTgVu953y7Dg6ue3PR9pxbor39nJw",
  "key31": "2WiDdgVPjJaeZDLzVxkhjmUkEsqwn2RTPQP6bxzxXT7W4tTzYeR6MrqJwNs8QfUupykWRuSEeJ1QbHtSbpdrRyTz",
  "key32": "3uCASSkh7agJTSxxeSC9FPtkFN6NkdVqufnfd35doKJHp8xVvV25fwExaK5xYZRKYBtjsWm3APLXyEADCL4hUVKZ",
  "key33": "5FApdFBdp7LQoFZ4RjC9nCWmHhK6QaubxXJmmM69qu4GXut3PBEwDb52tzg2rApgB5S1NzVir2pibZCfyp6WGfa2",
  "key34": "5TqKDfwrzQruxBZi48X42iw2VWq3eqvSU1BDMekAB2PWEz1TP4ZNxiXuqsKtnH4ibCafruKXoUPFHVeDKBBTB1ma",
  "key35": "5p5MyvmsksCJhp39pTdLUkY6nrYYRk4HpR5ckgdVrNry4BSjPhaz4pSmxX37J11rqYRbvQ7bebwwYh4wPrGEJNJz",
  "key36": "2F3mLuYL7jPr3cipbpWmJTmrbHSTkcBehfYPAP8NS725mYhmYEn4Jj4SGusgVEvusYkR3emEVWsLuhdtephkU36S",
  "key37": "2MHYgRvT8k9x4M592SArYcMxkUy4k2GjCKfuPSEyvE3zzsnejjHWSoSsjPRVVSWw2WFTdoofB6MTsAP6aGkZ3m2t",
  "key38": "PMSWyoR4J7txPULQRU6SoC4kN66Eni2ejF5VWKmN1fi3SS7D4u4hryBMoNkaarDtgs5x9oNbWaJvMVLt4roLhHv"
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
