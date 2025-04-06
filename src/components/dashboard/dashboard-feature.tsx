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
    "3wBCnpDQjVn15KUW9UAC7isEDhMV8zj876yMhdjYcDxzpVNfofMUHjP1VgZSHFEAj5v5MFE1h4X5w2AbXmHJRWyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZ55HgpEXypBLgDxgxQty3hyDwKvBXSoZkGGWV8YPdRYGEftdzT847jNnZU5afzcSYQ2KrAPLhkKdeZgbPU1PH2",
  "key1": "2Y3H2h7VkS92G7ipErKGdvx1sgT8a4ziLkwRie7zN8ikq8ywTw5G9yiw9KgVF5GkXUVN7kz3PeqzJdf4M2fYMCDS",
  "key2": "5VzmdAADeDEvZYbgRL95CftQLMr4qx7cG2nK12Rb3JLdJBudYKPEnfsVDCwzhPeGT9FUtB6j7bEwKdV7E8whA6n4",
  "key3": "4biaFgMrPYwtQVmHrhieMrfgmiLCMJxcJt2TMPVvBt8CF4VQYQwJqkWDinJK7ppVir2bc6ug5ZnAKmDbuyLTBZYy",
  "key4": "2iKoZCAtk4t6MP7Vc3TBocbqPzdUAL4WKaNMU9vJxoiL58ZyTj55T2EWyX4hiCtod3taJRTZryFtcDuyfSouWpq3",
  "key5": "3J1NAaWDhEWJ1MFfLztea5J7M7JtPCkhNqeqm1kDttjnZfggXb1QetAw8onHmU5DjLzrB52tevVf9Ft4XZCzVBVa",
  "key6": "3KsgHf4hoNDrGNoCnDGQUZutZa6RHd4nZJreQ8ufCrP8TaHxss4CJuR3gHAHuZJQGzg9x62jGiMkbKftNhC3kL9f",
  "key7": "4GXkGFqyZhNPbnLz3oDpniDuq46UosDX2V9QDTHgVVDrdKJrNRUN52VC68vrJ2QCBapPSsVxCUpwpodKKXLNAhyP",
  "key8": "4kevqj9LSVC1rRGK49FrcjTjWyJ8JVy8x5hf4zdE5yaioBHyXt19DSSKhi54gkmdhSaP9GcLk7762YDHA9btXEtW",
  "key9": "2E31c3CXL7c9EUZhpFCURz4G47wRa3D3yLYt5evPmEVczqM9Dtg6qNjhTdZEZuPWYnMcytFnH6ENTpBkSyWwSzhs",
  "key10": "3EvG4j83XDRuFaG8XGsgBtsDPShHhG5kCM4buexkzzrXeeBd249cvs1ey6JQ1jJd9HTnF9kN8TydYzFwtdZKZm9x",
  "key11": "2F2GhG45ZFAcxQGBmHcoo95YUGNEmfZrwSW2jG8ivoZgrRFNN1LQHpf9LrY1o6ByVCjmboz2BnwZ4Ly7gNWRnShB",
  "key12": "57ipAhSHp8wDAx2HQGGL6eNzubSC59macnW59vQ8ZZUzZAT3aKDrpuwtddcxFw9TENrBziRGmK7RxNVoJb4moC8j",
  "key13": "4konsnm9oJApG2S24AMeMr1fDYWbQPt2cpgnKadYxy73zas4SXjh1q4T1Le662LXESvzX2PYd8iorNwN7ewhJRxi",
  "key14": "26TbseAatkNC1k1Jn4cv2yWrAZJzzvYTtvVDGwk3Jw7T8iFjEwYkyznsLVin32XMf3GEHNNKEckNpba41tcanDUt",
  "key15": "3Z1gHzS69ZeXE7HWeC1r8sUfxDDubstTDKHV6nzEHCx2SoD6Dx9FzEX6qsXZAhmyKuDYW5fxnKcukcb2w3Mb6jHj",
  "key16": "2goF5LAC4tDarPNjnHzz41CsHpeRJrtJesN82g3qj8bHLov43DcfeBbPt7icV856X9i85FmBNT4Rb8tFDJtSLNzu",
  "key17": "ZUxkRLWFMiVHKDK1cDgm2T6pxDeCs78rMGgGnqPw2dnTnD24a6gRYzqWsDUS58wcbUyRV4TYgxyjYsZEsiw1GfT",
  "key18": "osx71tdzMBML9mcFiJc3sJPnYENfDRnziTpBFjxu7wvuua8MigP5A7mwYjkYsWEpnF5NyKdRfqnNL22mv5kRkTA",
  "key19": "u299rFCsPywnqwUA5xuepiXN96CGrtCSyPaTSKdN18bMnA4WmM6Gcwmwv8HJPsq3Hx97vjM215ehCYEPBrkociq",
  "key20": "5kwhgs4r7u3uLHN2qoLkW5Kftj5RJUpkPCJg7zF5Q8EnRF1vdpEtWq9VuTaRKQRXhN91M4xvE9d8fKMn9xTDobaA",
  "key21": "fXpHyrxr2dhkogi8Fth9dKLAFcpZJqE9ipUdjEhaezxgU4q37MJ9Zzp3sDwHSrR8mTDGh3hSqu9Esj3SkikLELi",
  "key22": "3VNzN2SjBeXH67huExbhMb62bR4DeuVJxsTWZaxQBakQEgYhAYggZ8A7c2Lb4aghU1bWm5fRMWDjgRie1JVFebrd",
  "key23": "52j1EFttGD5E4FQmyAGV1HYwjLr3szNq3ZYVTNxc48gZVWGip31dtSNQt6LDBygQgXtnVqoRi8HE4vzVTVXRbSFL",
  "key24": "3ChU6Zff5S2u6s1LmRGSYV9o7Wgwr5157PyQfZNG6oaYWYpiQTLCXxbE8DLYHrJ9JXEyKtcLNtRpnLrDsCPmDEt4",
  "key25": "2g1vJZvjZYJYPbqw8sZeycvudFaxYCvRXyNMtAxaaoY5uzAwk1bc1Ws59tQgEBLYyyFBxvshW6MEJGggfnTi4TJB",
  "key26": "61HgzVsiYnJmMJaFmfuFRSiPUmYyhooHgmCwFSRrnQWxW1viFjPE9zfcJSFWHHTRCpbuH9gfVUJYSgeasA1125K2",
  "key27": "5CF7xoLQtLm52x8ou21sypwo2gbziLA6Ypt5bn78NadGd7CkKMcaUg9fA2BqqYvhcjsiozYxMpKht1iuTGe1nvym",
  "key28": "5Y77sDugXRQ8prgAuxLo5edqKmUuReH9oBFkLLJh5nMfT4qJcZQfScZ73TK3fMYQpjuWQ2cYdX4TxHonR7jopVwK",
  "key29": "LsTs54etMmekeMmb7afFCab36LRzHbSeKYruNNY7zKwhDsXKXZKLN5Y5AsaY1NyzpbiAJSdyBAgPqwSJeFnYvzo",
  "key30": "3ueAqt8RhMYVcAkCjrkwm8sBd7Cc9dxGvcxxYYvcyTDWqFfnTn3vEh9NoLAPybd3CJTczq1PdraVqLRQErfr3mmz",
  "key31": "3DGQD6Uv1he2fMKf24F6vwdC7nhFTp7o7qujqBr4Ji2sqCFkErXzDXGydN3NgkgYuFpiepcaSHmE63SSVDMtWw24",
  "key32": "2yyzWj1CmhxYBq4TCFGdDHmrW2Xig5CUXxfuyfmiQcXkFzzqWJp5idUmGX578JYx6vERa9TtyAkZAVP3YUDwB5Mh",
  "key33": "3Cv5fb3EjNYYWYz4oWp1heRNbugAk6cP6PvgfH8Mg6fx8RDL1dWscNdxX47EnfCMxsDbQ8TJanyQ1mHabDUggZCo",
  "key34": "55ENJzWaAxnGfMFcFkMmrsnSMroDhRaPEW8cS8L6iqme16dpLCCs3SxRShYYEq8zc2FjFDeFkSWqwa1gZJfdXCVh",
  "key35": "61MJ9rhqCLr4TFFWM1EaBvFhjx22Jv6Ld44votLb8VbBXFecbxJJWLqCneDSbzXhDtq6EqZndCxMGtcUvo5p82Ma"
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
