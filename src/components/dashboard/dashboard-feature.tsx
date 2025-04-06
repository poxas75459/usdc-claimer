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
    "71FtLjr9qUy3YJYtcFirHENdkJdFNftcG6quL6MNFzn7eg6z1bAThP1truQcgYTPzbXSZQordxjZ22SzaJpwBX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bofqCSCcqtsqDrigNZFEF1y1Egv8mq2c2CpoDTWobgjTtGSc4HCgicEjWufrdCdFWfQX6yYziLehcKTAMK1Sijm",
  "key1": "AsqADhiCJ6aWaL1XFpGF8PpTE22yVEXwWbDpJL2PdZndoRU9xrAfxz9NGnWyjjJvYEs8ap5xetvdc8sE1on6yKL",
  "key2": "M1T8VzCKKsNjEwoSguRR2yLZRuSWWXUh9g4i4yWmkvGWd2B6imUofmbN2nGewJFLLwxBf3NxQ5za67x5Xin3ZxH",
  "key3": "5HwLryUveQumLg7wx6kreqg5SrztEELVWnw6naAtxSG177HUoCuoJZetsCFMLVNfLNMUiKP35ETwj9WKaqwPgtTq",
  "key4": "4vr4PE1Tkb4iGN6fN74vs1zWRShWGkVsLaFk59btAJGhWpYfm6ZjvE6vJf36hxhwtZmB41pCQshkQW2ZLhUf1km5",
  "key5": "4in5EuEgorMbjv89UcZHc7XBpg7ConjTMf6vo9sPei2hZKuayCFXzQRpyBp4D4XUKDskanzu2umLygPEmg7uyeX7",
  "key6": "4F7BNfsL5dFAM8dF5zwfn7dvn2P43Tfd3iomcccd4nButLQL5yQSpdVHraBKG7mo9BYQVvxEMJeqdCjeHm8ZkTuR",
  "key7": "3BbXDugMRx54c1Ma7779kEtyzr6YwPp4rCVH59wkdwUJNtUYZhyJaeAsMS5yromCesCn6smDvzAa5KxaSbCRsfJ2",
  "key8": "nNPciSvtqrRMgZLqiNQPmwXm4qUqa4xrvXANK7XSBjeYLiAhnPMfroFsyRP93t2sfQkkGYEPrac6UbhXzhPNJVS",
  "key9": "25tG8McpXDd7DY6aGA9UmyR1u998n3AbLxJkR2AdqEjw9r34Qo9KuRT1yj2HMhmYczaHhtBJr5keysEWGGHpepCX",
  "key10": "3zFFr63uF1svBs8ixAHYfQXQ1YHUdocrcwnVuFdcWDiBYVbLNz1VBjEA964bG5qZ46TKEHVEEVTJ5Cse4f5nDawM",
  "key11": "5Tbjt355gpvQQtcSzSD6yjWs7vWHnm7uUhEff7Ap97vMrgspngdq5AYLCmL5hBji4QkyuMtc6Lemtk2NR98d5aE7",
  "key12": "BBRYxhzCWbmbbcUU61LUWaX5smcGb7gzbLffekGGDBUxudfjDYrqtMZkvHL4dxa4x5RiqhrsvjJFmbwJVoVx1yW",
  "key13": "2YiMv8mCtZ1jY1Lp2BfZvu8nzBB6P7KKU5Ji4UxXr6cU7Tqa8pfybCZRaz5L1znt5QiiwkpZgeeqSFxzkJSt4AWm",
  "key14": "dg9ZNAjWcrsTGhKNagapfekSYFvuk3vtzNYogbn5hMPXtmCSxP7jvaQj4ryYYVmiYzDWYH4iQjktmELHLPk6wC1",
  "key15": "49EE4bGvrB7eaRm2DkqGcfVjF6rBXBikT5dbSSfF6RtmXL5z6kcP88hjzqgx5s5SB1VnYfr88D2xzxB6oVDe9AA7",
  "key16": "4NWfqWiwqm7eZTiskVMAZ2EsobHRQRDQTdhBfufne4uxRmpZyEUW8EGLPKbAFz5pgYBGogAYkmhxgpnYHt84LqCJ",
  "key17": "txeHPocMaXfHo1vKHNr7JXQjxFX2T83w11hEKYgdGFYMnAcPvbmzp5Z9EvUGCuNBcydgutF9viXQZeQjZKFrvxD",
  "key18": "5a3zNv5AEfTLYxPTE6MdfgwUC8e1KxxpA1rEwZ5oGEqVTkwXPDo2z5uGeMJakTGreKrcxDeY157wzY4DZFSF5GH6",
  "key19": "4mH7By6dd2htPZdW4o9jq2KdxW6Fax9X2QBfmtPGrHfyxYACAvHqDQkuqRtbCXL6uUE43pwRWcXb9LdoRUzrQh5K",
  "key20": "2CtwVnvQckYcH7FWRKK3oJ4dsjiueoiRfVWhbrUa2wXn2B1Dyk6r8cf4dwvkT78ajm4ZgBUb4F3sv6WmhdiYPVKv",
  "key21": "zgg3T1wK9mHYr3Q18uRGr3Pj5PDBu7zQAXkmqUJTJtSmBmSwYkyTERneZ8xwjrjV2tM7RuBrM96vgMGTTK1ZVay",
  "key22": "64m6xNxkVtnnQLJuuLs8JHtq29tSGbCroZbdrY1dp3SdJGseuHpWmk1EokU6zF9akyE2GSi2wQU9omata4uAXk14",
  "key23": "2XVpqW3hXwQ3S1puiHUwF81MLPu9By1xoCyCNUKvQNxDwbmQzGHuszbZgw41VADH61hENYvm6wBgvbuHrRKByfam",
  "key24": "3RZsQNRFyCwUcqQYYYv8bZY5AdA8WkXrtLUibfjvtugbtZ8r7TnxAJwcceEBpyhFYHoDzy2FR9s7CyFMhm5HX8FX",
  "key25": "3x7o4TmfE2HaQaM74BswU6FY9cc66M7QEVoN2zeTvETBGT9DBzkc6JjWAsHDbFmQKo1LaJmfh9Ht66HotEhmEBv4"
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
