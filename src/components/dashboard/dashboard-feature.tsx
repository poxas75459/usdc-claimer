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
    "eEKTRV4afPPRYQeVnbC6X4eFhSnQ3AAyyJavrEx155zT1o71X1uRG476Dbe3v3mhgoVFdZc3QEZwjyrcXvr3ua5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kqJyDU5ensfSh8EujNUWbrYt62wQa8bhyXYSHUHP15RPXUrSJHJyCGaki1WWTPYxs72v5PFzipN2VCNrjSi8qa",
  "key1": "2LcYVKXZF4PsVubgvWMQqz2oJk6Ju4js42XQ9CFFY24ujzC5g2MnAWqs5bvqQrkmj5YgNiw1H49A7MCFmXctyf5D",
  "key2": "2aiC8qDaGcAoTx3DaTUfxyBhjz4Zy2SDHXf7Tjb9czzpXusDRRPyW8UNz1pYVHbmrJh2LPBd2YaD5YeBWbEAeFwy",
  "key3": "3dMF4fv7iDMFdhyFnWatRkteT3zxJa8rXREnYtrLRC8qnsNTgA6jFP8a3kusaExem4VofS9SJXqKfcdPQUNFN7fy",
  "key4": "49bFqGLsvLfF3epub6mRJziF9Zng4HBNS4sJLpmr51CA82TfwRWUDyEktSC4yJ4g1gs92bVaCuAsRc2zPLK7KUjX",
  "key5": "y9UqV3tUT5sdaczbBVDDksqcGg7PsR7ww8UUrpyvSKdQmemfEA351f6Cd7Xim37AvaXkgQ1RFHvFg12u6p2ZQ94",
  "key6": "k6SeHsmN2dzuAvYXApYCWr29Q3bbmLP9RVmgyqqX4nLsKE2R6z6sW9xLDM8WYq2SnxuZyraPvPJ4y4bqoj24J4F",
  "key7": "42yj6LHBaTnmaSyEns63HA6AKnPvNti7mMp6kQok8nkVQxHwW8JG91K1Hr3ZADCzGprprLrWYZ6ThUcSGsbXsjBw",
  "key8": "5GSchXwEEqFKDGnmfekrx1kzTDJbFzfPTY7e2rTCpFktkHBesszt4LcyqmoqZpCf5z8rmH8xg4H71BFqZV45sHzt",
  "key9": "2evf4Qg5utfVDFgaUCFqKiFC6kWVyFxS7PMAiQeY1d9gv14iWYR2wcE4QsCVot6JLsznvhmk43T9EzZBEX5YvAbS",
  "key10": "4ith8uekJGtv8wJq1EMWgZnkBLV2Ja4XETDG9vVXHjcErw6t1YLNrjYDNo1HnMXmySm4k4L2DD8YArqtzmzT4m5g",
  "key11": "2TJTEUCMoYcGSeyo8UAoRNsNRcieiNM5RhiRbJFTiXWxAKeew5x8HwUoddChvsyN6zWxfRzFbVKp25CwAGhh48Zi",
  "key12": "2hRn14tx7qtNH6hnohAAzhmPeKJGBczGax2ywo4hFP7cp8dRpZiAn3e2hdYnSeDyDn1PWkiBuQV6MoDqvijoUFMy",
  "key13": "4czCA9FFS9pVN6kUAeoM4nEPYatKWuJiSwDPXmrRTXwaXis6uocYhedapCM3bJr4dKW3cvyLMYnvFwDXjYJGQfpF",
  "key14": "n5F3oF4jH6NKQSDeSgMDNkvcBeHWPUhsitiv2KWErt7d5Vougq6KYertgwQxKhuVN8H4CN7UqrAz6nfsjZNkXpJ",
  "key15": "5qD9mgrSTPfmpCpB48uun8odUhyQkqZKY3hPVVRW6znbZX7JPFAXRR8C6d3xSoZmbjuGR1Ffyc6691ezm6YEiMWX",
  "key16": "3eftcoHb8ka7ZrD9xPiao1rWYji9zPWmqXFSEzeCRKooAFzoF6Va5bnJmr5cS9CoV2u4RJL5PK7VNXiDKGX9jbfy",
  "key17": "4x6pApcHVBKuSayw7AnWsdX4V4Fs2JcqRXpCA333q9Ny9xYyLMaxhfK5kAxMp4biCjAGjyapVzdCFLs2miiztFmJ",
  "key18": "27owxvS3WTx5Qrfr8RpaU79NhSTysSjUAZ64Q4eH87KDqucxEiFG4T3UAqJ6o51J1RXovaw4x6SgQngrqi17xqXn",
  "key19": "DakFj1Vt4EHkz5jyExumEDoYAEhEWihQ1rtv42dd4Zvss7rrDvVmKesAhbJEz6dYSAVajGPTkz37adAEqNTB29m",
  "key20": "4ybx4NuZwHJCU8v5qAvCCuKoS7e4nafE1Qf4gXYQapqSJeGPAaLrU845t1Mi8JoYSxHHtMcx3GETdgoS8msF3jk1",
  "key21": "2oiN9sbCp1wKN1p5zievUYvrMP7QkddHnPzGQGaDyXp1n7TgGrrS9QZjfULBwU62r3VtQGTvpbDKuVgRNdRNNWEf",
  "key22": "5tcPuEWmV8M5xFi6V3FKbx6dzpAjjkGtgnKRpQ8jceo4heZmLQKjfKZwuA3Y81AT6j1VYFfCNfUjXZLtQwYkUHWS",
  "key23": "4CQTvRiVAXuzonZMHLovgkGD8n6WGocZZxWTdSV9LE6JEhM8z9NpeksEckwLL9vzrZ2FVgD6uL146A3My1QUevMg",
  "key24": "3oGoix5WWCpjXB1djHTEKHMJeXtQwxv8CbSNSPVVBeoDSNLEimMibDjASCNwcghBJtjHtFPpwXdNTBppDesKU877",
  "key25": "2T36gPCgFD4H35BGDgpvsHKjFkozUmpvkAmX8381ZSFLPWPjRTxHs3mHdoPQd3mtARzet3iwssd6wjbdYEvd2zjv",
  "key26": "5LSF3C6mW5PoN7kV3zPM2EETiZDSMCDnxLjwW6AZWeGLFyszw6s5y5ssb1jkFvwDak3bn2tzaA7UFPyeQ1cLKTrB"
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
