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
    "NTGWVsdLBaN16mpMPj1F7Z2pmjjGpgTTw3w1PpHBW2kySPfXdcPfejDV6J27beXGHWXK6u2KVB9G2yGWD2fJLnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vf2vqMhTKSpSdeoWJ4RiDqDHL5SJexeacprUppsu3zHGMfFzLa89crS2kZaroQbNGCqiyFmBrLEZE3piowSH6TS",
  "key1": "5MKyBfS6Scw7hTf7S8fju41VjdBVp4E19w9z1nMTS3BpscGFDHQscSmwFFve8VWNZTgzsmN3MEwWzYuW1i79hJmG",
  "key2": "62bCtGXXRVvyn2rHbiFcqm9Tdoh9yUh7svnXjjNb837wHgbVL5CaL2wyKn3HKWoXdhpEFYuWPRVXYZ6Zxh57bmtN",
  "key3": "AYdNDeMwWTYcQNJZ8HEXjrTMpnXY2reUhuYVsvyxApMoUtsEYySZrM2a4eDDk21ms6bEyKNtBhDtLfsaweqCwag",
  "key4": "3mFE72Y9shDSiuFcThf2ArTb4DqZEaBXLU9LzCxUqaZgvpNqvjqiRyYFbCvLF2jE43JXSxQoHNf6JPbVnLdMCkTv",
  "key5": "2qvHDHPmA6vpiU5vxCSMRjD7Kr6h148A81Un5DcJKRwTidr5GhuZCuGZjpVFSAG33JgqDRmS1cTaGyWxT3TNEN3s",
  "key6": "eWGDeibTQ6uE8py1zKnFDw6uzvFTP5nnvoNaj3JLnXCd34pV6yXZAM3zAGuhQRWfomUa6S8rMM86HwVxWjAmDjN",
  "key7": "qGSoLsbCdBTExQ7QgUHWmepRpXzBGV2BtchVpiooAG2bUiUdgE9wARCc2tkuv4qrGnYtmEVttxxc8Atwmf58y6H",
  "key8": "2z86roWjFUTAAupnaGWrmfcLbSMBYpXb2oRgcvfkzh8VCJy72sK2Ukxw9HvAFEghWuoTTKgrkL2ZhS9xAzBcqG7d",
  "key9": "2BN9iXcd6ZM6qHP2SD7gXdafzRGDXHe5T84vDHh4qwwJoXMrN2m6wUo6Y8Et9g7fbGMMRAJXfAcZu9SYmmNZvKEB",
  "key10": "YR6vsmX482T9gp7zXtG7zWwDfjbiYrTDKbKwAYXf2qrFQFWD36iyMrFaVvxfkYuTwN7hYwkknv8efjKyiLYsAhb",
  "key11": "5UnqCgjomtcdKGtdS5iuWEf6qJFGqc1aoQxyaZZG4mqfoKnkAHfzHV1Coo2Td8eBpFXXHtrRhx6w5iAS6z6FeY15",
  "key12": "2yQSUGcTuaKg4SzNnMEJMzQHp1n4XnCnLUAYq816gqHiJvyHNAAqZu8TkLB2aGZx9xT8Lubj6XSm5BmbogG4AzVS",
  "key13": "2aTUzYNt9kUaLMjUZrHxYr1jET2uY4fmgiYEFxipyxCZvLQZ213mSGuwaNDt1QoTy8hXj8skWtoW18Uo7jdq7Su8",
  "key14": "52E2SkQMDzo7n3CVrLKqYokzTJE6ayRLCTdTEzmkKmYJtTECficxhXZB3yz4nSiWpvZDbbyf1586oV4Rji41mZcu",
  "key15": "54sUzZc2PVgvJb2DUQ5Jevscx149zs5mX242HiQXarQCJsD6qc2rUKGDCT1RckcJ4ukE5uGdQPbcJr2PgS55Uqs7",
  "key16": "5fLGcMSuF8oVe1aGvxpyFdpfwbxkTLQ9NYxYg2tAtuaRWGsXNfkc5zs6ZaCaHdEW25d9fF94MGEKgjYiCnHgG4oQ",
  "key17": "5M4MLAgHdwzuUi6xDmnGLpUbzxgPRsYMkzyC5w6CTLTd8SnZs5FYhULmWetFoHiGTszKGDoYPSigFuRERpryqyCg",
  "key18": "5WEB2172xopuF9qRiUdbBPxiMERCKNPQT25q8YPA8Vi7ZjpDiFkxU9zpU9rKox6nNQafaANa1A1vHPKsNsts528h",
  "key19": "3k8e46QewdgHHqZEHNdZHQLqDTBwvwvWTaUwZJkJ8LSw3VHu5fNtz7yon8g3YAb1Hgr6pjZyiyGVRQ9EyqSXFBkP",
  "key20": "5fmMMFp2S5UJQcNZcbNFpbqKevhnhcbJjY2XVDFmDHgrunCkdbgdS8G2Kxi5h416CsXhm34LqhqzZanpRDF24mAr",
  "key21": "2HmxNcurv7xCFrZxdL4qQBmjjK7UDDDAvw9WE3rB3Den2vpfZBaW5r9V9E17tiPfSCS9r9qx5FVXguKWazxdJgib",
  "key22": "3tdLZJzedA2miC5tp9ZMUjotwd9Z6BdTT7smEZbbKUBf5Wk6MRq2q4NaJhd7aLkVdGHg4MDB8UygoNWcWUphwSnv",
  "key23": "5LfapeDc2DLUmygSsRohanZZBZSoj3uqe1G2bCK8A5pbNxV3nokUz3XuZdqdTnNAJVA9r2X28cs54rXrekHNdnjQ",
  "key24": "FPhv38BWtWxfGVaEbUt3FLFAuMG9ZVQjrHP36z1Qiit7v3DrHJkybt4S3v7XXeesnsn2gfiusL27QR2qrtdV3Lm"
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
