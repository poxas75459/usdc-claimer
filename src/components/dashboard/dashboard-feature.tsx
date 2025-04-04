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
    "4zUqCHCvdzxib2cPtVmHSyCmap7fahoHD49bU4L5voR5cjDsa8B1Ys6cXX8SfZoNWj9bA75h3KC1vJGRc7L8Trkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UY5PYeWE9jLYXXMcvsxv7KkZi6G9imcoVPanupWXBeapFEKnbdhB34i51M76bE1GQs3KHVTdUz3KixQGPg4pqQY",
  "key1": "3qqDw77KQYidFvwrN9RDdhYdMLWzjVJyTq8DWPHY9QBaBijAnoRyEWuixkrYo7KregjuFtsDBSxynZr9JAL4WLvt",
  "key2": "2q3iJRmtapQa9QK1RANVFAiGQG4C5pM835ML8C28Re2W2avKLeEKgaXcL8kLnfokRcHvCo1T3rxjNDqQ9j1aoDPD",
  "key3": "4iHsC9rmBnuxzgUzPMA2yoa1686sgH62kMVQYP5b8b6XVaXZAnLsRNwRtH1jpFFamuUQo6ycoy1sZbH9T1oigB6d",
  "key4": "21NhzWp9vkzXJQqAy5z4Si9RqpGJYtW1WQfMgZdxA65hjUTPBbHABPdnyD8j8FJXnzJ6jJbpfaiFqePByn9U8h3E",
  "key5": "26XW4t131NK4BWmrH7NJcVU3ZFtvDsE2cVV1UYYanoVEwg5ot4fzUhc4Mg4qMGcTTPNMJQcemGhiytebMtNuWdad",
  "key6": "sJqcGfmZFaoW8XbvCSaoRtS4wyHNr4GSeb1Tri8D2NBtFtrPpj6MVZehr9SBLEaqsTVDSkxYGHsdnVv1Sn9KHUV",
  "key7": "2gZPugbZW369A5oHPbHMbrDeU4SphyZhYmGSLVEdsDe52UoznsRTxpVBAXeDN7oQpak5TZtfTxw9GfBUpjNkKDQn",
  "key8": "4cBuBb4m6dN8CYQhhRq9Yepuwtuue4V4TiVMoHZKyg6LnKVaA7SRe5ppTiVzUbHa4x3KT7brG9eGC8No9KgzjaAY",
  "key9": "uUvvGYhb69Z5g4W1iKiXKQcSKsWaEGYpd9xLopvtxPz8NQxLLavXyjH7Uqr5dnfzJgJyye7GgLQiBxkJySWLg86",
  "key10": "4TNRmm5mgZcrJV43jB94qvdqLL65u5KBoyySE4SjNxds95sr4jsMHtMc1ERtLCsG9K3LLz5Le4sv22Ej8w2WoYaN",
  "key11": "4EqghLz3yhNsPyRZhRsRph6XCchUGmQRCaJ2ABtVPEScp8Xii95ksUuH6hPBVJxR7FpnANE8MDHPYnW2BHJKqEkF",
  "key12": "5GgwjTc3hhMoKyHde53TakybcYxo5Kk954L1o8LNGfJQSvcTq2umWGoGWbe2jqyaA24UXGknS1DQfjJd3Q3r5KoY",
  "key13": "u3Wt4SJQfK1tHivQbbzisBvojsNgK5MJArbfosDeBq55LhTsdPtDWZpEbA9fpKCKZHP3r62JqWtZFSAqRsJbJTX",
  "key14": "2WSPA8mQxvFThaqtk4RtWX8HxzfVu6MNwR6z4zFCmj45XCZwnETJJpNGSo9tvt8mnsZzJHf8KhwcDs1pDgzDZ7H2",
  "key15": "49CKvHA5VPFrrugsJZNEJ4Z143c5yLfz4fPgUQ1DW7NeJNa9e56BRcc6Y4AQ21qc9qCKjZALxAwNvVWm2tR84CBT",
  "key16": "3R3LA6Me3DT6GE9guiLvbtudGu8RmAnBsCFvLoouXPyF1eRkN6MB1fLWZi3Uj6Mg3ufQUzvoUXwHMHnMh681vAi8",
  "key17": "4KGR7A89PpXZnBVjQRgnp5om2HyYCmkkYH2AcHsYHDnAY66avqazP3f9KrY7EK6CfPEuWUvA24ksVPwnvk4gDrxF",
  "key18": "3UT4H2MKPAGrKti6UVvJGavH7U7x4WCoPhsr5h6zhft4GQCPTuhhMK8vVBoLz5kBNq5gfkbyR7p2YP6jbpDa9XJU",
  "key19": "26yRTeBkkD3Lg8Xg6hjopTKgDPbcFLEYuDHaBn46XFvRaSoce1CPQAnc8wLoh86cT19u5FRKCF3FbCoWCcEN3zFA",
  "key20": "3bAKj5ar8jeyUbBBTwJ26PENQYpAso9AYqTApfT8vwbihKtKNH9rfnz6twJd15hT2qW9xURxcBMmkHe1d52WEFU7",
  "key21": "4HoLuJtAQPKKU1zuFAPfSf1WA5zt6gjToGkpCsjo3fVyq2to8sBefQ6UGLUiAUDyriYWtDNTz21iAykssFpoJnfw",
  "key22": "QkVUeYvZGamdmf6qrH54qefBE8Nv784cjApdkUgRMD1EQ1GQ6Kaw112Bm3H48a9pkuTsYxtEeMfVuEmUDESA9cV",
  "key23": "4ggdHHBCiynDPxWtECEAabwj8HBm9P38eLn8gcTnSiyYUsyA4bhQhR8E93URMZzPPnhNDHdAPZJxK4tGBX3exDay",
  "key24": "5d55dbdfyWbacEVhtMTpVXPCLAheLmV8Mni4AYT7iYJcshdfV5HGusN4h4quAUWex9HPLSTdtTcUYf3iVpeWjw2X",
  "key25": "PuxPz3opvZwb3LrXR5PBccg1NxhNzGcEnryYoaWJcd43UjhZrCYSn6aJUgYVkbURmquPGGB4VwmS2sCeeANyH9Z"
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
