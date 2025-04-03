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
    "42BZXhpFRX12QgDY5yqEEXkAbSgzve4Ey9NaG8cqBPg27PGkCMjxD3D775RiYLmfcV3UM9GSircFVSNPLjK9wicX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "557cYFU8G7QjAfsViGP9hVJnmWMPsfAheAFHdLeAK6gBcnNkEk8eMNbcTizvK8ATBXJ1LMgeTM2HxRZdTiq2BBkU",
  "key1": "5jP99de9CfNpLNaDEAHjfrgGc4g7ZwCbmPG8FNE3D9weY8hQ8ZSJQQ8vcg8yc1EFK63U7rWZtaQmiifemFNnoj9E",
  "key2": "3KX6k8vFjvka18GFTz8fMjEWxmwgr8nJoYVRfoW7TPqBk5rHDumNQ1oMipxP4sasygAgQigzemESV4y91PZdpBp2",
  "key3": "5FR3unfpT1DHd41tWKeSRpGLA3wv9hKZmQGT3iJs8iDLWWn75vxZtJKYnGQ1z3t48AkmBoWbUCP6Lh3VchiVeGEp",
  "key4": "oJNMkeiQqUQn7Np9ePoENC4LoiFoJQEq6CKg2i72nm8kKJyPiqcn3kKEqVLnBjpNDwMDhJGUbdnPcacd24D42gu",
  "key5": "5wzsGabir55euEfTJ439Vxu7SJJ62mHSeAomxJgmLuvMDPTncjYxo8fMfSFBg6RneBtutFk4rF6n7V4u6rfVs7TR",
  "key6": "NkvdZuy2AT3a2a1gk6EaxJYSKiGBsmVN4fbfuQUNUrMK7EpP5g6SR9FqaCUep4rNTgR2KxJxaAgAFyGLKmhTLY9",
  "key7": "4okm9duvksEGE4f92ypPTPw8cHtYmFcugp2CaFBJrmjkG9iRPqkJHKtnq59mZqKMbdvqJmXjdptQiUyfwFFjdej6",
  "key8": "58tDUmDKtYka6m2ueqfnBZbjffNys6BPB2HhsYt1dXB5fQDVgUhc3kTbLWj6iyks9tNzy113MDQGJ8cqxTCRmoDr",
  "key9": "rMF32o7pykuYoRx47iDi6bighjhqc3uWV8kKSJtAHcpAnnG1RH76hWqgvwnCVc8Mo2UbSUPEHZrhdweiYowCmbE",
  "key10": "5BE5EwJFRxDLR6g79mxEcpuuUotCbfVtUG2NwfqFrMkS5qQRFMFyA4N5GtbzGgE5U3mS7BMVU81jMiD6JfBwJmHC",
  "key11": "5BpDcpxijDQaYMSaAWbnNDFPzWBBJ7H2onahQx8QHandFo3gS85arKawPZCaL3ovJ4JY3jKCEPhxY933NXCJkF7c",
  "key12": "eUKPg1Xc4KvLdSZdFfE6avrAYWaARo97Cs1bzQFbBC7mHxbK7KcvNWq4Xtyj4VEWpMTwra3TUKukNGWtx7BTUQu",
  "key13": "3AMxq95FxwyXxoMbiP6cgJ4JDmHJcVdYEcVqGSzo3cEFUFpezSdNtAVwpGw4rWsSvsPp6vPn1yWALBHzAnTt3tQh",
  "key14": "2RLDiLkThFNHEa8QRugPrmZCkEuVQsYWTnpgqBrafMxSPpmsxLaVRZCEQLDfewyxTcZRvproZt6mkpFmKmLAaq5U",
  "key15": "UYkoB4DCDC3romawc7dtmh9mLRp3rToaRBNoYRpoSmxsZmzwSWJc5wxQSUbT2jqpd3JiWaij6iLhYQqtvKCqWXU",
  "key16": "57dAdF9PSWD3Kn4H7xxxYvWKR2He4rs7whx3wyy65jEXyX8NeLiTmLp2e81r5JyNTBdhebwfxDpwEbfFAF4XRV1p",
  "key17": "3L7K8X6X2xNeebudquAQcmQ3qwSDLZHLZFDoceau8LHq64hp11EtEcSFrXQcfeUEBTFC4uqsQDuJZFb7md46QQr2",
  "key18": "2uwWDJLrJiJPYSrhrtF9jo64d7p1wmr6UWNesWWAq1Gabawc5w5iGqAkob8vkqkGHy8kkDSnrpYjugnj1hUdEEhS",
  "key19": "5FCmmr7qFgddCkZXg43pLHL9fhhqHmm5BExvhhNSidPpdV54Sx8oJ83BpUAVM4RJoLnbXz7jGFgzbi9U8R5Wgba6",
  "key20": "5kyUdqZQ2aQ8hti3mKqqYUaMSvhCx3P1sNFht531x3tCip68dgcfesso9jqD7RqfJpbwbCo8CAtr1SYZExhmMWeD",
  "key21": "28jDprgBuBWmKxY9bKASFhHBesiiJSdgZWUL2w9m4zjVsbbyzthTQUTtvefJ6TdJt34n9KZBLsbsSHFbWoFqhjYo",
  "key22": "2EPgfjLF2wqS25YrDw2oYfbfAqK4QMYmXxxDhEBV4eXbiLvsRKxWax4ybrSvb4dXY2b29tk8vLW7YnRF15WxpoxN",
  "key23": "XzFcBEfYf4cJkR3eKQVZzfxQaBtkD82yXQ1MKCopRR8osSapwfU2tkozeS6EH5JSFDDr4PfrZAbEkjkN7hKRzgB",
  "key24": "3TgTF93Ucfmp8PYX4st2UoFiRPnyoiBheMV6VnCM1Bwwpk69GbMQzLhABpMQurkGevmu799w58KtPZhy4WgcQs7b",
  "key25": "4dGg2PkuQxnosXyGV6gL4rCh6KVnm43ZRHefxLhsHeGzrDDVjNtnG41f78S6U5VerDnqxsy1ZWXVTuDpYq2X1aRz",
  "key26": "3MVdy7zGJ6vvJputKNG5uy829DbgbnTx5XTtj8gmap9zoU8oiAaSHZR1eH8QKEtxVBmCtpz1TmDpw58RWJkHuX3m",
  "key27": "28Gg7CjoJ2v5Pohdx9JXKgArjAsH1YhpGEMAhyceg7g5Ck782kSFk2UyogwoK7ujkrfEzGcvpSKGuWkCv2mPGPWu",
  "key28": "oPk8ZbmLfFnEiUabGrtBLB3iauYmpHqpK3XZGW7LpsHDFWVZk5be2qw1HNESiLvsSfxP8GUKxPqoWar2ca4WdSH",
  "key29": "2wfSzjSNxr69pwrz2f8cDDezhoDx9dYuCEVgDQKJJyveKEzwRjyWiP7aRudaGkAWmLYfyC5URc8kXu1oagRwpxwM",
  "key30": "3h3LwPyFpRn8kRz7Qvz2Q6eGFNpeHoTh5LBw5GAU7DAS2AqUnVPpxMDrXR4c419z7sYYbX2GCYUzzsxLUWJfVCfw",
  "key31": "3k1RwW6G1vEVQipukD88eNQPvr6fDi7feoa6bS5Tuk1Jmme9NWrGt9HtoxnteFfbjEmEffHpxFPFiwQAyWkZDtHs",
  "key32": "5BY73wZCnEvt7HhdzFLSbQcFU4yzSbnSUCWM9F6jQBhdMBkSUqodfWUBa9ARsgjmeb4yLnSZPYk7zMEJhBN135YE",
  "key33": "4LCpCqot55ViMKba5EVSinJGrS8MJWQvdtMDVxyVD5MZdQPf5V3yRzVGZZDPd6bD4MWfkFinTjutAdSLKgzpBAvx",
  "key34": "5GBrV1baH7LaQHLvxKaRjXs6qs2ad5UqzXz719UqV4vJWYvshRydFE7EJSKqREffHTEhyL1jVU9Ti1HywReZTduQ"
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
