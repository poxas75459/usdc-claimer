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
    "PxgHnMxJswoTSqUWhDjaYSwWVW591rVgPF39w8HcFpSEXnfHuV7Y3SBADAXUwx7kbVxcS1XKesVZFT4aozSk8hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nWBBoB6iQ5sDAbpcpELS1d9jAFNhLDUh45NGZ638GuRM1rzbgDZRRzaXESFYziRY4wU3bqNr3vQCcCFQW7YgoDP",
  "key1": "38PvesigN3wAp7XDP9qVX1rQ2SrBWCmTAnSwGBRp6tk1cph44ugQakU5zAtcG6dSGR5Jae5Pr5kcvUsKhWMjk22T",
  "key2": "KWac3xxujveUYsj7Ci8vCqCMTqr8Xs8bAoTxfrKXnvQ4NxVyuCVYJECCkCE1yGVRWfnomBaGaf2NQK6ARrNrV4v",
  "key3": "3zb6fvV7uiZBA93vdGNJBppzYJ5RjTavVL7qgHYjjbpkhrgYBNkaqCW1y1KzZ3zeq8wPuDgCgmAJhre5QA7KRR1h",
  "key4": "kh5MZAGbgVXhzrHn4ChgASECbwXoxKe5eiz6127cpwRhEMfvs31RTDDfSGmudcFDApnDv3D3RugyezWGwvycfb2",
  "key5": "3wGCae7uwsmB555ixALVv9p3vsYmXgT9PU7wdYABEznQiv7N4gTWcBN1N5xWCB1RF4FmRrfJFSs2B2ENhKgsX9MG",
  "key6": "4xSK2MGiaM5Q7NxFTLynGMdALvLbu5J2AgJN4VWW9F5SZqjgtvBSuwiqQH1qD9ES8FVyxNhJxhRH9Fq7bSfpssFT",
  "key7": "4VCdKLk8kUczDa8Fz1SNuoHwaTXnVxDu6Z35X4sDXyNKbZuWSvzs6ZLU8aGvgRfg13328d4mkF6dn55Aa6JDsLL8",
  "key8": "4wmAdMreMsGoervD8gtHJp7vdbnGsAAdXv2UrmvdFDKvNVp3jG45c5FkAkTxhPeoYk2zHesTu9B9jjW1fVzANhLS",
  "key9": "26CjuewAazJSQ2GSxPdytYutwi1xp1e3wZ7KSS8EpSvjhE6s2hCVmc9iXkwgE2EJPD2eqwtVXQJe66ESgfVmQocE",
  "key10": "2zpiygJ3d5RmamPAEtKpsKZm1G3vfPndaPwpC5tBy4533zUA4w9RWq4G2TDLYXK7BrkCtGvS7R1jGsSZCWhjEVow",
  "key11": "4HDHxuHj2qFZAtPNDiHgttXavS2zDSG6F1hcNXdHWkSEdueFaiFcduBofyynLhkJz7vwLDTbRvJFHVhuBDsnQhG7",
  "key12": "3KBqUrFCtioM6QzXzfm63QBjh32MbbbFrCYbBKg7tD17x4gsVYWJsio4YHwHNVNWRU8gKyqiEue5PzeuEPiUdNrx",
  "key13": "3V2AEr3irTBm9vBSeLNVV8SQxgaU97mrAdVDGT3tupFtw2YHELgknunupDoGA9M73r7nZzpxj7r4WyjS3ZotHkww",
  "key14": "2vMcQmNoY3xmSWyK35P9xtuYp5hTHioXL3jXLEvwSGzMLHRfdBVhnGxUJbxbxiewip2khYgdwpDH7oec6XB9Jchb",
  "key15": "5HpsWKcE2yvKgfkp2P5uXhkRiCCpR1LArRCB6DdPmeXELm8XZnCBNZNYMFa6wLgFdDyFLsYb5Q2HciW2HVDnkc2u",
  "key16": "3MdByiawXTFJVXxwwy9PqFnpXXxj996fFqJDo96X7nezYumVTsBLqfJVGazH8C7B3JYALNttHstK6Y23L9hiWZnd",
  "key17": "2UP8E5u7zB1R24SrBKMEW71d5mSJobYxNSFV3akHVK5ejDp13XS8dEBC65v7QYJXBnK6DAgZzp23bGgySAJaY93W",
  "key18": "2q1NkmLYMs6Ai7gbhSUcunszeHdneWdXQbwBiaRHzV3mUomhSs7KaPZcm8Jb7avefV2scEzY15TVwxGMWJ6KyNcX",
  "key19": "3ZMyhgDs95NpzmBDMow35jwAXpp5RpgZbod3FUEGwGdWsXQaQcXpyCJwczVb9yhZEi8BHWtfNuwPWrzjwgaiGnQp",
  "key20": "jUSm1UtTAP6YnTFFdgXW3eHwiEuYtrXVNQgha9d4RY6FYzGLqySH9ScbcZHKbZ3SRYwvUp6xdWK78mitoMTUpBL",
  "key21": "2EEqn3rybgwFXD8mhDq3ZyDBAoyRmtREB6fpbAzS9r6LzFghMebhzGzabiLZCJ8AcvhMkrMgRb3iwZxTiHG6Re1w",
  "key22": "3e9PkLWNsATfaZKVbJpWiF11Z4wunCCSGqCqK1XJ5StM3ewC4c9girYbAxnT5tAA8P3WjGdyzWdj8LEYm6mYMtXF",
  "key23": "mHCd5QzKFbyDbFXgLigdvRbrSvK2KBSHVqPbiRbzDSVQC7QFGMX17jDCZ1jjgy8XbmYjpLejTRjN54SPV6Sru2w",
  "key24": "3oCqE24G8SPVE9xKvFVbBwTL3WTsffHNTYp4d3B2T2aRYZU14AQMB4ykiT9VkS798hFa2bkdkXTCtRqft9a8nxg",
  "key25": "2RpMFPRpsQHDWUsS75E9eLugUYe5DTax3PnuSGNKLw5ZC2uduJQNCJsyvuJK4SenbNz75eGQukfLVBprZm7aUByb",
  "key26": "3QKUSZGeoSbktW8FxPf9hxVQ9iDKRQGjkurMnBqwD9CHg7UU71KMWfYAbmSnffuqEZyyL9MPUSZFkZ9jvCQtXXYg"
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
