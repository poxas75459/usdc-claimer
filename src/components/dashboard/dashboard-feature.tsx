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
    "4o5pkYNGZMpmodygTVjsT1C7UTgPGsZyvGJsAL16Su1CbBcir3mVfpbvTNQCNHva66PNCZxsgSm8LUNTJrW4obY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56DDMN1mTDNeNwwuinks77X83oYWMNbasSnxCTcmpG6Xe9i1Xxc2UiSoFJUJx7Wizssp7z4kwAM1Fk6NzxCqkNcS",
  "key1": "4btdakUjneTah6GFQoto4KHDnnNSVhtt9KJpuzNRfWdS7BpVUuPYbPCVqu99XAcDfghhiiP5RST2NPq2vPWi15Zb",
  "key2": "2X8KDUHXS48BFo9e7MhDQiTDFqEtwsc13tbXSGhJXuiAY9nhSfXr1JmFYUeBQ5KjcEnc91zhu3RXteQ37bXTa7PA",
  "key3": "EAEnRRf8JANuEocDgAjYpTm2SjFF9zTbcautYw6kckTtP9fXQEdiv9WGfUaRsdLxSMTfdr6fmgzhzmTKAY9XsLm",
  "key4": "5stk6HAVYSEEsVCiCGR9U8wQSMNSEBs14QEWMkibvav1tRrsQfSvUHqqMHrSU828B2ASXG1w2kEPndB19mFAg4Ek",
  "key5": "qWdb3yTvNh175dMHJirPr8aeCdhCLutcSsveQTtDhzAVKuwz1wo5poxCgAUDqs6d6H3XvWhtsLsvMkHSgVkucLr",
  "key6": "fEHNieeQ8qxCNsSeTrkC6wKCqW1SdtdZe7BLL9NkATxPYUyyUCkRgr7mwXBsuMM8z4c3Fnu1iBe2s8fXoC9Dfdt",
  "key7": "3A2oPMf5K1GgmV5ghhNjJzXYMRL3yMgfFpFc6tPrzEfEgoAnXfsUw68Mk6MNpZEiS1TVeP99TmMabgBZVWg2kNmJ",
  "key8": "1i5NpF1t6pZx6TrJEVp44A4BZyxPSbs7xEt6EaL7RWHRoXzB7pKZBx8N24vo5GQchYowGj1u8pbg1YCBMtRfnZW",
  "key9": "3bwCEhac4dBeTUht9D2cEZQbp376Ko2JAnZQDxCPjGmwnyNfxNPdhmzpeCgBH2u6KuXXStLFZusUYA52eusLsuWV",
  "key10": "2isrVkBuMmEviG223F2CSjdpikAgUHs2jRbUJEXfJtb1GzpaXuLq2z43xh38U2eddhDbXcPPoMJYGc4hv1CgyeEJ",
  "key11": "3ayfFDRZsaXVLKXjZL8F1jHithYLZnbjBF59zm2TxzvQfmvu4vVh9tpkVkecys5R3ikCeqiRs6bEBBBseUuwawfE",
  "key12": "2Hx3RwyRgdJCrRg1p5SL6g4LEiufKe5QogGM5TSLdoBNwoK6scPk1SkXP9obioQ7xFuB3yC8MRx2ppLb2WwF5Uzk",
  "key13": "2xW92jq1A8WpzC2vAV6zeWxrnu3P5AFZp7M3QhR9bMqbtrjUnEeAEFXEtYExGpnU3yTHLzxu9Y7sUzi5hKdqW9CG",
  "key14": "5QPvYYhnrVQCr16nZWXexzFkmXSuKae8cknVy1U4Z8dfPadFVtHd2WghE3r4ff9yak162LoxbgwoM39P2Ya76feL",
  "key15": "4esPkfENWsxxCHmxKpsTaE84X1PLT24UnZE2ALw9bsTkFNEfa4yNnuLWPo3vQeN7Dau6zWqkKR5uavk6qXnqTNXj",
  "key16": "5mpj7kE1AwAg9xuj7pfFm7jMkcrKEu1c8xBDh1pF5qjWGVf7VrQB3pCbeAqgjiznF9YLpy6A21HMG3WY2fjhemRJ",
  "key17": "467duo8wGmYYmhWwSYQFfuM7tNPq5c68Yk1z7MfRX89MNX6MWE4DEmUYwFGtKV4ECJsAKBhPCfLnVJHAYuV4qsx1",
  "key18": "4rTTvTyAPxHvAXjA2Do35RXrype1Rw6vkUBiDVUWyrKLWxvKemaJddsVyfgFzbfiY1hoh3B1oq9waetxgvZhRu82",
  "key19": "5ybFdcUFj2vsJ35ijuRPzSdFPbKSASXPWDjVNs5cpR23XC7Vatt7oXmGCHzmKoc3ZHgcaaGnDhMyM6P8uf6bbNbC",
  "key20": "3zXGQ2pwj58PHBqUkRu8UorfbHzTG42AuHfXgUT5ag5Q9RC8DPYbYheHdSv2vm8EYr553qsWvHx9k4AVEmw2aS4k",
  "key21": "4XKcY8f7XgAGNT5TCPAxXCu8BouqXb4H9gCT91bthXzUMWiF5KCWQapTPjk7z3SQ5AxDgfVJhrZsB2cvUpKGpCFN",
  "key22": "5E6j45QKTBQmnrUKiprHJwE7vhE1AxEbvSCLYjAJHgdGoQuPeQKqWEaM2jgC5SURFXAvnAAZv5uFuNEVw7PwjHWt",
  "key23": "4ksqdjHDZwh3zpE6Kwq27giDdQFR9PbMSHxobDkfvYSWJ1qou5knYi24CgCTvXy7AsosSPNS56yrYNPbRH3taFiC",
  "key24": "3GTFZBYv3xX8jrG2pxmvoaDNENNWT4YATmrQeg8qJzF76zZbmTp4SsVwsaTtAKUpxiKmwdzgNCJ4WDDcfST8Xpr5",
  "key25": "3LU6QWaTL6xCKXjgPzZ4NbNCLC1gqkyFVYbxG41BFVNHJ7WvoKyRUL5bRaZ5xY6uALJfYRzqQraRUDsmvF97zsWp",
  "key26": "6cXCTKyJ3aCNkNYpY4RBYdCmvqPKxNfP4xwSkb17Z32FAJhRq45RVmho7uNbYtQqXLouxNBGRLUWw5U2An7hDP2",
  "key27": "61j1KsuB3xivns2mAdWWQQD1XyxEx56G49ocuzLquKVVGkWVHtj5WWuapD5u9iG3R73vMWdUPdi2mHNZrBpWTq1K"
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
