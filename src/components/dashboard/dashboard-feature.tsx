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
    "6mArhhpzSpMQptLUUN3iYW16qMb2p1M9THjjmMGbSwPBUGKM8TCXPNk13gHGpmLnxb9zT5SieR3WYDZB9aEg85G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rPkczHauUoDf6eoPogtcYk3aZHTVzrt2JKvwo4iyK3Q1MhbHuSEVmZR8BhX4m5x1JAQiHyEkc8Rw6J2WSCmCdZ5",
  "key1": "4PW468CuaRpHbVC7neTuUhhDpJRZtru7Eict8JxxdENduA563hp18op3x4hYUhPtPCDVzANYNeRN4QGWhhqGVRHp",
  "key2": "5sHFEfXgvM72yP9VxYnQ3eTvKz7ddPiatCHRQ6FFWuH1bihwZZaVTT1Gh1MGTosqPbghkfJbzbtqM6ByyVPsJg3w",
  "key3": "5YuWcpw7BbhxziHAFsh6gVKm3Xda5w7bvkAamQmP91zUyJzA1USmAcsx5FsfZYf2sU38WpU7jrs61unon353ThSV",
  "key4": "2uUMZEo3Yz4n9jfyQfssEyNhCgvHEg7WN7CZ9JJv7bHVCrV6TgJMJf66f6e9SZgzkBmRiJucaGxvkjqkAVYADosp",
  "key5": "3DPYRb3uDLXB1dsf5scgaF35V4rRvumEwpzCcAaHgfBUBYwx19bHsZ9hxmvSmuBUzZrrTdVVBwUESbVgRqhQ3NLk",
  "key6": "3KqkqeNVmFix8sdcbSzZhVrR9nFCeQSXm7gRWbd7LVXccWr4JCS2BNNbjZtP2zHSUKQtBdigug2huKhTK1uVsqup",
  "key7": "2ZxXbx9P9G1WdnU8ZHhCUsRTsNStzVCsKvJpNit3VWZRrsSDNzcxAYV6Ra5XfiArSqBx7v8t4Sm7KxH8AXPpVQoD",
  "key8": "2vGndiFDEJyd8PmXKYYj4W97v6gsembz9bi5Z999GLi6c8W3ze3AFPkvE9QHvGXsD3sYmTPC3EB3t1v1ZVWowqfV",
  "key9": "2XCaqdKCVHxWzjbMxHaMbrr3DoxzD97RBzmXM7z4u4Y2MLYouq5fEMVapJviQaT48hTMSycm5zzZ7VMUYsCbVEGX",
  "key10": "2Nj4bisddvQKXAuWtCAY2x565Vv2oYpomPjBnWdfXU7vbHKETN9ydsDjMouL2mubjKYG23t815d7X4CC7dTcB7ZM",
  "key11": "T7VM1o3xZwc7or4P7RBeYAkx2H91WYTwhBw7rZE4sGommgcnfJSjjjkXYiJZ3AAKpX1ueqDowmxLuP5S77MNMW2",
  "key12": "2W7UxCyiYrmze4KPaFgpBbRvxZEP2EyoezoRohsu2MUuN6uEwuXzaow7rmwczjjXFuumiWnfhs4PnEWtXfSNPBFZ",
  "key13": "5oWfkR7xondi2YuWYGfXqbQP8GcLv7EiaQmSfepB2xDyLuzJ6Tag9T3i9UEY7m2bK18j4xHqne2xh85saMFH9sRT",
  "key14": "5QRtstRV6Xvc85hLAy7WcjDeYrczcbHLqVpMWpD6w41nrFvpFEZ8NevZ7wp8HAYXbrreJXnos8HMTKdHWjRdFb8t",
  "key15": "61XszauUuYyaqm1wxEtoo2VAAkULzRMNjX45c2qMQobu3mnAB5bovUBsaM1E5JxXXZ5SKtJJVnkSDmpDHYFpNTSo",
  "key16": "4B4KL4fpZUuyXAJKWffoa1my8Uk3gBLxxCBiWR7dLPSXhawgfG1Yn8K34hekcoUK8MF3zFAiL5c2pQLHRQ6Ni8rR",
  "key17": "2cCzCytyP4a7VuRk1rQNcvSKXnGebs7EXEzC42PAnNV5YD2WA4EbhjtobDtfmQTtixusJg9d9jXb17eVTm3HcPwp",
  "key18": "2aFCXiCbMimfSFSgknEPnJ5SSLorEiNXpvWUC36N7eMWMKt43Fyy68DsfLUwQKYeKLZYMAKx4bpEwzUxWAh55fu7",
  "key19": "4MR5Tio1v2UWpp7MAa1ptG6SgymTZWUjCtBCmMM4jtDtH4E9CUjJgTTydNXifVhAU4cPZ33vN6Vs2qqCdZLGTQBr",
  "key20": "xuZrYB6efQKQEeNdohMjJ9UvgMuvbfRR4nfytDLjYe3tXME4e4Nbeemy5gWbVchzpkyamKAu3pEFKWyoryzbmmv",
  "key21": "4bjjxUdvatBQRw6QX9Lnhv4d5Zf3DtG2emuxL4uiSkpZ8syWd2upgfCEaL5BxeqHizs5qtwnq8CK3C9j85Q7dn7A",
  "key22": "3SWX8HRQqzeLMaznKoTtwrDoyqcuj47RSCnM44dePzuJXgYyZN3fJDsPjodsPcKDwoFQgAvt2ioskBpuwygC2EaP",
  "key23": "5XNuX43xsUuq8GRATXjXnF1buyeyFXTDZib75LPYMSMHb2qwDt3FXoswuzHTcj5jCn9eu6gHoHXr8EhXpcksBKTm",
  "key24": "5EA5fgPPE2AsUitzt3q94qEoQSieUCwzrAzSuzxbKa5GRPbkYTpzxaLvDJNYShRLiNRZ9itrbCoMZf1MVXni15e5",
  "key25": "5Kk64BQSLgLoqM6Y73NbQfzMyFGX2rnhdp6XFPq54uoTD1uEP5Mg8PtirE6dSXP7fA5cJbTCGishGVY7tMcEu3HE"
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
