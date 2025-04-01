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
    "3obEP6zUhTzyE9CPogQC4qa5ZWdsLHEPCmNr4iexzi77tYYTykXWWRWWvcKfyChBtE2DzSBPguNuXDtqJA7tDf5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hh65s1auBEQ9FJfgSq69Zer9gH6WTdZbzik83p3y3kyws37mWsL5W7nkpEPC3RHDmDGE2vwzodeyLhbJryVEMxr",
  "key1": "2K1tspcQeXaJQFNrkquV82xERbUfSioMe1KCSavJhk6SFdJgJi8qHzRtQ57VG4M8iEYu1g5Yb7A41d3u3no7BrGi",
  "key2": "2R3gti3qdxV6VJaeSzPWuHq3LdwHEtJKkk69eDGm1A23quLTBNA7SKVPStLLPkQm7ZgdDXU3sBmKR8oFtfLQvq8x",
  "key3": "a3T4aYXqmxMRFpoymmXqoS7s8WCrzQZEm5vnXgUF5gKpREoC7BaCvdjw65uDwk9AJK5SHtYJr8KTfdB2hekGzAL",
  "key4": "2fwZM3nCDfc51T2QLSVF2WhSWZdpsfy2SiBCN4zh82xrocgCrZrAzLVi3YSRA7FW7eJ1e1Wc6kmvpgHrjXGiqRey",
  "key5": "LFckybFVG66uPUSEzQ9vYpy1WGoTzWbQs4iL27uKQ2o5tj2w2LNfAA8ZHBHcDyuUcHaktSpGPZtjW7r3bEdKU5y",
  "key6": "4FBtKDJCminiRUGuDLh9BA6rQZUmEECsF5nuvzzUAkschRakX3yXPaPnbAH8iSW1qYT6wEnoT6ECN2kbGWDQLH7R",
  "key7": "4utP9EvwcYsjMr6Ymii3JJ5wCVxwsaxgnB26AxFmxRCtwb942yHWPyttBLuY3cMH6fu2yQmsSvM3ST4eXbZLkMT1",
  "key8": "4PFJCghP33vddzg5hjmZkFMkxSYtzKEGpHkvxqxw3D67v7mH1sLk9mUUmVwARR4nyPjchRi5MLFtQdTVy6UYNAPZ",
  "key9": "3ysCdRpocVyxeiPCrQowVqf7purN52KeJZq3ihvYUi546fPhAQS8ZZ8LoCsLTUVUYHzbTbYvyM3vwm8Pb3MgeZDt",
  "key10": "2QVULJBhQNPZ6YJKRbu55fCiAnkpCFqkASBCTtyqDG5JyZjaUftHHiNZHtvPqFnvWnYPrpJX5Nao8oRaUAgo5f2b",
  "key11": "4Hzcgm6kXyTZGXgRfzEvC1r8uZwZPkLL8hNRQmvthF8PgxaeTc6QjtfqrWTxW59tQ34xZvwgLC5gnsXusdB3bUvZ",
  "key12": "2hvzSx5uTstvnF4JYjieaHusnpYucrxwH8hwvekm7Qxao9myrBgdm48gnDeMNKZ9ucCZqnWvJisyErjsshDMzwCp",
  "key13": "4Yng69b9WXE74U8EyMh8MJEfvbXPxSxqJSFhhBAbXusDJUiW2HNVKAsk6bQFhg1Tj2wEU4y3t6akUgGUiE9ABLpR",
  "key14": "GxyUvQtTkpJymTbt8ZRCWdXkQARiMu9hSC3pkyx9QPqiNT9QymZeDmpSbWmT4yg5pnrw6KscrWY54cx9qWNiE1o",
  "key15": "2a6QL6EgZYpqLC8hKfaShVA5YU1yKFghNjG5vj2Z4KEotAtdHza6dibTaKJnrdckyimFHhm4geBapY3vWaLWda5X",
  "key16": "3VoUVzNbeYxagepggj71zxf2JoEjDHnQbsu9AD1hM6m9rzj64Gs5jbYw8J2AyXdkYLypy5R8MfhELQG3rv67sYyi",
  "key17": "47x2V82ZA7aDdVC4L9WXoVpz1WgarU7Ug19ihi112PxgWCnL3ToWbM8UJTsVYSsdgUCfkFuB2H3AwuuP47ycEo1E",
  "key18": "4cSKiSfxGE97CF1Wxi9BmcEsdjfV8dWgq7f3zS4ZhV9i34X3tmSUi4BeRV47B8WXmqj4aoRr4p7H1uwHfmZK5MYs",
  "key19": "eKBUFqTE99SshBhbsBF31sT1FaFbxgh58Jwdjn87AWJUSScthKiryZ5RfETf8A38VTAqbGdExMZeH2NS7aLzWxY",
  "key20": "4eBrCvTHaKubGiYvztSXdEw88UKc4Q2hWcSmqgtHQswWAHTwdkfEBBArDJ7WG1CA4v9sKDkgg6ZkWp8M7ZPxHAVG",
  "key21": "54af675mUqR58fg7s1pZHikeRxJxzeSPEvdf6wPoNAefvo49icVTCv3BtfHkF8pvph5vKNgj2GqFXbiz89u4SExq",
  "key22": "5GfrFnLvM3gNP8nQ9wpgqNsVPLoVHQMinKVEkr32jMhPnnDQmgpMbRfs3meYKAgNFN8s6zwAN3Xr6yT9GPjG9CTy",
  "key23": "5iXiW5822DH6SDaaEsU6CLQTpb8QgY3RoZY9np353j7sgx1ga92Y6sPwmtgnLegSheHqMyMmZewHo1b8uJDrTTJo",
  "key24": "64ByngmzEgKnhQrZ2Uze2PcMheLCfVfaKLFSkZoFyagdievBEm9e342XwuXDYvKznRYPB46HPgLGc5xYjr6PsENW",
  "key25": "2WFuare1aYJ8SgGo5zjgbf6Q8SoVaYAxayxhs3kUifiuVGeGM6RWiki7EceCNgtGF84pNaGSk8fhb2qRsvt79Npz",
  "key26": "228gKvZaUcxfDknPL67QkGgjqn3ocaUDcbZHZWBCKVV1ZBZdFdm1P1TT7o4EVrQNFTKdSd9p3zhPJfk9M6HzkK4T",
  "key27": "5CEiaF1ytVrrdowh1G51wdGXXY9xQWiUaRryGHUVWpbXjA2wdwDFdaixvwMyc1ZCwUVVTnnEtjvWQx3ea6azaQob",
  "key28": "64QqdEKum2MyMQEKD2S69MWFv16q1Cpm3UA1P6JXz6hZyqH7rgDros534vhigXqmz7e28FtoAgK8fBXVpjiqCNB3",
  "key29": "5FPEGdXGKrTbwLZfJtWnirv7vqUS2JtzVjk5Kn1hyxCnQwVGTi372rhchnPFLe9oPdkkWN9zaXqKurET5cc5hCTo",
  "key30": "5f9mHgEhgPtdWqb2r7cZe4kah19zm17UuqCGfhbdvitnwKQBeEbKE6XQBDh1uqafxoZYSu2qoVUYMzHc9RmKBfxd"
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
