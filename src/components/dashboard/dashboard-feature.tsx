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
    "5kTmfNMh3uLxpK5xYtBEiK7T1nHKJYVsX3WwzCSPgAVfgtTsUu9PLtVNsh4JeZN6prW3ixu2aY1XYxrFDLakJQjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwJXFom2JaNzD5hqGb9tSVX64wgHPGB6DKfaCLzqUMMuDRLKCys2XhZ4gakN7LKHAwr7cKKu884Y2zywzBr6Ew7",
  "key1": "4QX3kPvn7mByaqVR7QYp5meC1wuyMxyhbFpFgjb3LztUfD3biMFMB76U8mU8MD2WSFWqSpYor2s1aTjRLUQFMuc7",
  "key2": "3XXPx2KqTT7wUg9UD41biFeyftXixDnCva8GSiuso8tRZTizWU6pL2WwadQTrxwrL9cBUb5ek5kx5JgJtqRYSyru",
  "key3": "4AyeWfT8kdQHZvvjCVkzcVDVwcfSP5kfhTMxHzhcmYWBsvsqoiui1Mf7vWiFAWhSQMTPR4ydaNCDgjx62gUjv8uR",
  "key4": "2pUTx8MFEWSMGK2okmXtAhHUXrutLQzg1MetVscPkaKKcV6cR6cNQcgWZfqfqjLiCuJphQxNp7mCTkX8vDn8eSzk",
  "key5": "BUR2Q52EjnSBCZHupuwkCHah3NhQyg7hhp1UpYqLtV4sMWG9NHuyQMjaLc9qTG7tpPQbUesp9cv58gfcmWG8xP2",
  "key6": "63CEeaZue5fEsUvx2MB1Nuq48w7QdBwS5bWyh9Neo3dSxAMBPAK6cHUJpS2UZV1tJXnBqk7vLSjdMyfPhHDV5CPs",
  "key7": "3zKa6rp4YVNdq3my3b7gqi7xd1s6gEded3Jq4vocfPBD4VmGiPCEwpRrZ4ctkX5pcNQHrAZ4HTWX7AhQeaMKFbzA",
  "key8": "2ERnkcLQA74PpSiR5jUpfJPsMJikZ7m49VqJ31Vx58Y69koVKw1p9oHnHLCEfKqrtdcrgn54PymH27AgvwL15PDR",
  "key9": "3zZC1VW6VBrgD2hbepPptHbScGtjbbxurkULtiyxwCkqjXMk8kmHdHPUpnwZSWSWRKBUpCaJvp4pY17fTGeYPwvh",
  "key10": "Ss88qU1258tgvJEcmY3pn3SUes2du2pHcfSxTNt4fi6dctM9iaYGPMJ11qNz4ApGXzmVdgtbhCHkHUSzrRzScgN",
  "key11": "2a6Y5e4yZjfbGj6dHX9GWoM62AsJpCzhNT4p5Q9WT4zxGdPLbe2Db5Q4SAZANADRksFYg3w91KoJgkwJJzWKcYNH",
  "key12": "teFkHufguVw5RzoUpVNrDbbjd7XSp4UhLxWW1HpBC9pQrYCsUTr2EqEU2Nfa6ZFJVMsQgE1XC75qzSpLrfwLG3G",
  "key13": "5hnS9iRDNTDA5s6TUSaijmSQchJ1MA8zpichkRhjPmPTJpZs9YyrXn4Wax9XbDE2HEGEMj3zQwrtaA9R3p8yn9ci",
  "key14": "4EGBupZdYpG6jvEnLhbVfSYjx6x9c37sV8WWixA4udWFBDN1kzGnDUFTmLxmArLRnR31S7RM3u1gUJ7c9au5e8yV",
  "key15": "23VcF4Zyr6WzSZjjBQGLjV615rE385iJFQSJBeZK9eZSFpdB5B6YXdyshb4pxoLQowojHoe65ij9gFqugy565MMv",
  "key16": "51XDcnEmZEd82DzJjaeJkEN9nSjyQbyf5Tho7k4KrNApDM3nXrYXMcDhWABfmR7Qj3u1si1TsfeToaRDQnGTpmr1",
  "key17": "4td3MGmH3ojHfU4LxtDeVhZKaDnV3AQQ5GLo6M7V8a7zBNZz7PkX47oEx3wPoDYVSC2oye2NEExpwBR4yfEga6E7",
  "key18": "5G6x396eBReu2fvAaS8b9aY8K3zZptjSqXrou8QhwBWMnKUsRCtABJKS5kTCsz6m8BPWjTU69fV4MyBRbDLXEhYH",
  "key19": "ZuxMDHXAS3kA1XJNE7HBzhzmev4CivMix2vpiE4FnLS9CGnYj4D3NQDFTubTgT9z2FyeeMXU7Bd2xshrZ6s8phV",
  "key20": "4r59GdUpcGxnffL4rZPRHuKHXKdGjtwWaSsbcBqxJ5YWX7fxL6pbfdNS3SbKJkYwnjMroYrrVUtU3U3aDqCLiBbA",
  "key21": "52S76cYxfRhit1mWm9bwNGYTyf5XBZqwdUSzFcqwCySAPHPTKPBZoj5G2KvfqJS8JrKu33uGPsAeejMScdmEir3y",
  "key22": "4sE6LUx8GZf6piD9sELeEDcnAokRuBzUefGHVmQsUFhC34wep27qCsgbobWSvESBuw8PtjrwntpSL5dMgDj6Nc2q",
  "key23": "59YmMbMbCveZhBpxAHRpLUpUV4x7icnHxD2feq39Y62BZQuexRMQvUkzNwiquyPEnVdt6SMUC7Ts4TLVozusxWPT",
  "key24": "3VV2JxohaouA9Ro5MREVFRxzwfCaGFiE58ewWHNkCvwUvaJBxSa7ARrXWsjbxY1WC4X9fRsosFRnoZdF8WoN3ybk",
  "key25": "4kPHmMG4AN6HYXEK6x9P15MxPZDyWS7M48L3eFqScuWN5L3xJBS9a2xk8yjrEj2eCP8ixXVSjR7uGcds9Zo54U4p",
  "key26": "AwdLme1vvZSauVZteZYuxKFMXdgZ7ib3aQxZ2yc54Ez6CGWe9NwwnA6WxoqgZwzJ6ioanxbEbANcikYXd9nEtyG",
  "key27": "4YZ3JFKqs9a1eAwmx948He4ufUyuvJzW69o5Jjy1FEisf8iqmj684aNizj6SeGczDfKX1qQZPhYKk2TtALCCEdGr",
  "key28": "54PqLHd6kf34HAQHLdco24Txx3gPfpZkUrQgMLFnAnmw8JkxAHyjGZeKVLrdcjZDkRaaZCk7rddpd2k8VuPxWLAs",
  "key29": "4epVqk7tTeRNec1tySbQq7cRq4yrE8uj5k9gNh9mVUJ6ujSwQEzSTPih47FNUXukmw9VmmcRhaeydBWr9rqfPudL",
  "key30": "3u4rncidyijrTSNVHZPQKnfbfkDws37auk3rWzAPFwmGxoxgW2KLQvg64TmTASHH7J1vpnEvMZ7bjEEB4KYEDrZq",
  "key31": "2Sx2bwJhbk6UDWC3nsG25GmSoK3EUyYv1RYdHLFmh9jDBTaUeZhuwnSgQ8thWNQtZvhSrPJMnHKbAoZWD4pbWtjk"
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
