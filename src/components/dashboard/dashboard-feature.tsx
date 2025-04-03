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
    "vsj5XDJZ9ca4d4tGt8sYCmbzp37fd9iQikhpQeNG5tryCQ3AuKGTZhYcvYa5Jg8ukpn4A6LqrdjjbvuE4CFSKdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXvk6GDkrDw9z2sEUnWFLcRtcHQRvL9bkmMv6WZkr5N2ACn2faHTDKyde54xJLv3qcJum56eAzy9m7JiAzqyPXx",
  "key1": "5GuEtTdXxjiHLyNHeMGKbn7ZvYRPnZQpdL6mER6BZ31dLy1ds4cUFh6VGFkHUgUNv8AQTFd6n7kmawKaTrdVsatq",
  "key2": "26eW7eUDFLXt1ibUzccVY7P22QxxqPfGTrJ2Zv2cqucoNEYhTUuMNwbsBS2BwbNKujrJNx2dDzQpBM79724vCXkq",
  "key3": "5situ3pDampsEPxkdpPoNxrA7wmwsF8za6TM3g965GpVnaxJDL7CGFVmMicxdvnccRTb7HzdnGhnFce7F2Udz6D7",
  "key4": "4wamj9HD4ifXRQ7zHoTx3r3W2NkTvedLL1CELXjtrHCAuS4nKxTD2ozR4b653upePowNZ2ymuhYb6UnK182TjXcb",
  "key5": "EHL5BRx1DvtNeV2VA6vEDwdmGEi4MythkieTs7eWwbdySkWDgBGzdAixm3D65i48VEMVfXGuCTNLWUbX4Qt14mx",
  "key6": "4b255TP5GzLk4QHPcprBEDWguPSdJtcasSynbKjjhWNUugPaphVmBhGGToak2gdAUkFfAtnvfD96cokqXfGRL2pE",
  "key7": "3FYx9g5B1K9CJhgPcGbU8yEDbCLUYiTPM4oBxYWeuo3123ajKQCz8Bxwqa4LqjSRbnSy1QnTcZYg5uD3d32sgPwe",
  "key8": "5w8zxDHt1HEoL46bRKSAojddXncxVvKnXjerSuH82oFv9UMgoUydvsNJ8TsNUHdPJnTuVVkNrbR3LBfDbckxJsUd",
  "key9": "4fMX84S2QkENuEWF3cQU6AHt2pBCFbAP5auzmdtTfifrZwnipgXe7jQD1zNQ7HgxEBfH8nv92oxHukJkFocZhzeo",
  "key10": "DpHWi6ZQUjLyeAAp74E3WhYt5ZgRqBoM2AbkbwKkm6XW64Nmgr1LuSWnwqgsyCpftBEhNcheswrXYG8bKFfqpZi",
  "key11": "Zbwe6UF2TP6Fq3EDFcHTTLmZFv279DLbx6SFBQvbiqmD5r5jzH69xNiGAKrvNYm7dHxF5i72HLkcfWPNKP5ix23",
  "key12": "3T6VCxuV7yLmrvnbEsbYCMNQohQeeigQw1X4zQ4sgoMz8hFBiEELWfTNVhgNCCxTz6MPkFm2eNs7X7RkgzRNmAsN",
  "key13": "3kNmebuKU6fwrZvMzmQE31dD7qv4h6jVSCzZJLDvRWu2vzcQQ2EQWaoMBaQYUpmWH8zeP5RYtLVDG8vAz7nK22QP",
  "key14": "oFV5jDUPZaxneruyHqbybiX1dUXtPLe3Qur5dpW5fTMMzaux98BNJAodmaLvXz79qCtio4frdLqWWFVWGCo5249",
  "key15": "2CGVZiwXRJ8Qf1irCTygBAMigACV6iT84sLBRrKF4pMdFAeTjZbKKbHE2r1Qh9mbwFibXxkmY4dHYDoDftb84T7m",
  "key16": "2SB9Uko8omw5T8Ds9m6XwTUxwjqvW646XaEPVnNokGDSbjjC28BJbNqmvvsJbT2RaLvii4DisjbVgXvJN4EAGHD4",
  "key17": "fcgSexymBSa6LJKT4Pxpn5SHFSXnw3Z6GVgsjSfUp9PqLoori9iwnN1abUdMhdw3CrrH9GFHXFKTMxactkCKzMk",
  "key18": "9tMYv6qn9CP6VASBLsR6x7qVeXszA1WLVTRAmncgpZ6MMjUTEr3rWKbtUoEyQcwYY9VvQG1Ur7jcMEynrKiRyc7",
  "key19": "NjgwgU4jbVL59fowqweZKuWxtp5zt86XswE5FEkWu3A2xBybvVRr8SHSwwtwjUDTu398TjMMom1DGj733qEooXE",
  "key20": "Ngi38SH65pU3ZfhhSvjfykx6m997Qm3zmQL9Eh9Fe8svFhqw1vMXDznQnxbS34YZiNDnkXbYskoijJc7PBKrEWa",
  "key21": "2iRbRKZzdGtTFq7PQDKCcp995qBPBAuCb5r71fC2zRUuWtas3igvMxFR87UBhGwhiHRXWLDpSgqiD3aXFBipimPQ",
  "key22": "26g59caNs8PdDCGmfHGuFGAY7TwuKkXwDuTT4yrJMiwJWRZrw9x7Y8eN6zxuhBjyn38GBXyHaRWiYUpfAx53Cpea",
  "key23": "2CZM99bRot8xjjuwNw3MX8e2bUuELMo6zdS4x3g6fKoRAaVKdHfbDRY8X4e4ZxFPH6EufB7TT2NWw5NE7zo2Xxh9",
  "key24": "3Q8A4qHeiAtE8iXc5udutXAx5jGEm4EPGxBNtNSfpM3qAqVak36pDAFPkAm3nWQXHnDCPw1L3g6muS7dSgKfhYns",
  "key25": "iegpckA67NMJoJ9dv9irvZwfqihMdr87J7PB6KuaXoGvBRVgGXU7FBUCoFeSp5CRRCBv9mS6VJ7i3LxpLWJ8Jzw",
  "key26": "3pbDLcTg7ix8ta9CtYdsQ9LNuaJieuKZ2Zj73BZN6rfoiH4p8wvmP66NvNLVntiYqWxUiQgr1dDBP7yv9RaANezZ"
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
