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
    "2zxKu8B1R3MLVxNRwneHML78GVHsWzUfL7gP4Zj2rU7hxBmZo3y6uzv6u2xe7prtahLXR2cRndevRZHYA1n5vDam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pfHzZYc3YxKQLVwZbfp7so5CMkHHvDYawM1BLJqQEbDBBLm7FdxUUtWKpKkAk5zkSCMQhBMp1oVvrinkM9zcv9N",
  "key1": "2mTWgeoCibu76eBYn6nuLeG6LGWJG4ZuXi18V35eBm66sawrC4Q1fZLoNzg8ptZ24emUwtn9mWszgnzHXQnEZScx",
  "key2": "3Htrnss8GdbxPRvDHvxcCF4HvFKMeLntFivACnduH1V552BwKBKFY7ZzTpgZpGotYrSZYLJMEmCmJXkJQoCgicVx",
  "key3": "UdQTNVri8QBMLRJbtkhfoY7GCV4Vu6xwZPTrbQsmRqMucP5TAiYT6Zqrqrd14BpMkZfZMzbHH6XP9ehsvU4X8Pi",
  "key4": "343o4tKiUujPDy47SQom1VecTRKGM9sX9NEeJVwgCEYYoZiV3FB9iVGjHXjFua5FQ8FjJKW4p6qSB6yUoogx3bfw",
  "key5": "5TYd3q5vnxhyxVocNmMxFDmY7Hk8tc6XGnx3PckKt4MihQRq6KkLWfF88PC75fAiDR7Qym2ZQvrrKPmkL62EbWVn",
  "key6": "xMQR96qdQyB2cVehAuXaNMQHLybXZjwwwaUYvfYPsZ8RLH9U3UjyzAbf5qpueYude5vv3gMnj6veFmCuupDfTSV",
  "key7": "2LymPgciyzhwPjUxqKnx1gbMwybV8mGtuZPZg127B4A5KBhMVr1Bsdvby99GiXS3uy14ycA2edfaVkuw51ovZyrd",
  "key8": "uNiAaj5AgphxeYvhSa33TptM5oBkj4gwA1Let2cLMaabGEmjz4dEGSSCiRR3GL3zfYFxbb6m8ZMYy9MSzPeDEi5",
  "key9": "4PvhVMutGKPUXUqSzBc7dFa7r3QCMwXPk5nsZEDW4RGd2xPa4Z646pYqSjaiy8KnM3JgxsVFz1GA5MC6MA6cQQCd",
  "key10": "3ki98kWihKroCXgVhsGpE18CmuUJ2TtfEEEeGXKm5qkDbj6eMHUD44GKRc4UQWk5qDfBTGHUcnbUKFTUjNkDNFJw",
  "key11": "KMCJcFvAnnzzGMAeW2LZ64QnyzRN3Yy3jABpshubyqPVtVaL9T4VTtZm83dGKSHXNxVLH71JFXbUHK2UFpLPTBX",
  "key12": "LYFwFTX8zUVrCFEiFXYC8gS42r4majvTZ6mXCYUaAeZzK9NLDZTL7Vv6Bzv6o8j2Czh2ZQhY31Yvu2z6Pwynazp",
  "key13": "3Bs9eXchAXjXB4wSy9uhrcMtCzXezQ9MvrKN5AciYjwKsV7EZy7jX6JzYYT8Xqu5jcnMxwfmcNn4TjHSNK6UDMyy",
  "key14": "2Lhsm4qPANQNoNCEyEwV8LyAvUe4Va3r8ZyYD6rQgtHZpWMp75gGKnWQD1GmVrhkEvpbWxUuJfzwwmMaaKVRVhs9",
  "key15": "2u6zb61mvBMEkvxcg88NHkv85tZHRx4TsMPsGPUBb2tcjQ1oudavGeATipme3QQMv3LZ6uH23pUbE6LAi1efJBnL",
  "key16": "5ppcJ8zddBsmDJ7Wz64LD46mAMCxzB2qzQof21Zi24WL8GPLJohgphpAV9kDGcTv741BYDCnzP6DgfF6kavx5mYJ",
  "key17": "3CPGsDFZ8xCAixsHKJ611ugzQM6rGiDfaDA4xPn9tL5rvvPmsXFNKZmYYnHUby1kTdU4HPbdhBbnXFmBS1YmH1Kz",
  "key18": "VPBbLeUKVKDQDQ8eFd8ZgW3KJNz4nanfGTJ8wXEQTnFVQ7JHJp5sUXHH5B9QP6hpYZtkaZ4H57uqJSoNuBsAxN7",
  "key19": "2Ttom4eBuzaSn8uD4rSd8Y3vgsvrxyx5kbsZr6gW6PteiZwQXCaaqmoo23ygsie1SePm9mGxnqYyTcTJ7JYWfxb2",
  "key20": "2XYfyEBXH2EcNx37ExVEGoiS9PD7WKGVH9Q4pYTBTWNGDB6YGsEV9SUaQqrDdgT3vcDEDZHTGmrDjXpVuZ35eoWz",
  "key21": "4yT9QHSZSizdJpfE7xqu14oTaijBw5wqEkFcJEzTHezctLfTrWDNW5z4FWkyY16nHEEaBz9X8VEUxujZqbusF5fS",
  "key22": "2fXPzpoR8pumjuMx83XW1VSR6SpdbC1RU46FQiERYG2zowEUqkSuCQrdQUvxnvragiukMSsoofFFYLGerq3rYFDH",
  "key23": "oUJWi5nRvo2jA3wgZDwHPJfsFxh8xZv3E9SWSNi3uBqqcpoYPp76e9Ht4yRQYgqNAnedrqEhzBxGvchbMiRzj4P",
  "key24": "3p2HJun9u5zhHXuUoBerYBUQUaC8yzVW2QNuK3Cgn4NsHf9AFq79QLeeeEGQWPSuvLX8GkVABDCsR13n71FrnpX1",
  "key25": "5XmZF897jvH8Zab9LwsdV4gUDLfhH4UP3UBkyseuRFK3bVJBcpbsc8X671PU8bnrrwLvQR4sGpcPNYHV1diD5LAH",
  "key26": "RQKtBzLnbRpgth1ZGXhEY9o3gZzqD8uGLm3P9E2wEoQGDCYbt3t7tAoAi63C6gtb76jpBgz1gKwAosK9Tt3j4L4",
  "key27": "34PgkfTEXKaNDf6NVfUsjV8ScyRAD6ULRBu7e36dvWEXw7ddR1Mqdc3EFn2M3Sa3ph1VCWKa4Ji62isDih41CRXE",
  "key28": "5dRoU3wPLSCviSnxK8G2C2e53YPNnCqTSDDKjUvQdxPAQxWKFotrMd1sSkPSj1UTwq5NGA3oSKXG7oWYDKEbvyzs",
  "key29": "38ctaLuiRAsbcvneWBLqGJ3xeeg3fT8PY8F9HQo1H3jA37xiYDWB4fjg65gMGsEc54aV2dyxwutjKyfA9hyCVWGL"
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
