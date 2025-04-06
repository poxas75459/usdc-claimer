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
    "5KpkG2CzfWmK5LLt5kY6YeKN73QEVNf8mPaFCWpo4YyRPDx6TY4hbso3Kz7XHpPRAoeS4H7PvNJnn9RRHUCX1fee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kCEatAvYuCXvwu1dnppJoLHsRcnPfhe5cpoonK52vmtHsyX1MksvassZpNSnBp4cSG3LGy21vaiELnrDooHDhft",
  "key1": "5Q8SYEADpArxZ9S6SjQQxrNZBScQ55szeapGgZXbdYd4QHUqtn7MKcsRb2pJJQn5cRsydwes2UskkXj8K1aFX6ce",
  "key2": "4mX29FQdYYrKPXUP2xSdT3A5qE7ZhacUmhfcmUzE8bPaeHsjZb5orwhtXKC7qDJBHLQzqdohrQ6na5wCZvVhFQLs",
  "key3": "23xVTuyabHh9cgSSvrmJJK5coKuNW79r2vugU994VaCpqpbSCL614q9QBuGXTkeLxcc3ekkDyd9bcVqdSvdccHpj",
  "key4": "2JaCDZ9PvdkNP6KvyXvDKBRpJ11y2jti1Sa7debh1ssPuEjVfzJAMwyAFXmjiEqbmaPYaM2qqhoKQHjAQTN8CJg8",
  "key5": "4VVqHPMNkcHCGpwLSf6pmcWJyVLEdyNzLZ4QZJVoPtcWAJcQ71VSgeFqy2rP141FoodKhMxyHNzdggyKyQ7Myqvf",
  "key6": "3aqdMaMNU2TK22xgyELJFDrEQGg9FeWy2UdiqvhHU4uThCguzX4ZGk5546MyQzfyHbHD5uwpXG27onvoq9MVMr64",
  "key7": "2Gx9Wg98owfMhTwQf3N1iTQcv6Ys1JLcsz6DWx4xUNEcBd5rkrAGRGxofxNMTKsPrufAELug18HUBJtzoWChXW6C",
  "key8": "5gtzFL9Udwpqpq8KK8condQM14pGcypUa8sf42oVKWehkJN91c3n35NqirYpX2MNcxHjeJVsHX2kUNhzCsTYoYL1",
  "key9": "24xZSoPqiDU4Ahk4k8JHpzARpKNn9RsjUNkzGaBZPsKTThReJLnJMY5PZBGpbVJEKZSHcocaFxemdmsKBQQwekcQ",
  "key10": "4j7fTxPxS1dRzaom7QvBzSTnahxJ1UxUoNR2WuRt8JZFmZe2E89jXBm9i6LGy4FSzyMNq3dRx44C2vPsXgSaWDgN",
  "key11": "4tBubZdysPWiS1H9sbL1Mn1yFV5AJmSe1jBxYDgDj3ni58QfinKFy2BW6pcvMWxQ11EbfMmS4B5R2y65vJGXboXZ",
  "key12": "4KzwJ69BruotAQuosmQMikGUU2SPyKrZCsKaEmNWm3CJPrtvf6Rj3SE6xseB6875osgPjAEu3xpKNVMauNPgVFzk",
  "key13": "5XMJNDbTLAHjABZvu6qK8e7Jzx6cZ2mXPomKmAjkH7XWe2wMPayYYZTBVNvopyjhj2QR5ue4hp5prPt4iy9UhR7J",
  "key14": "5uaMhpV8L4MpDivLRhWuFfU2y55Ses2c158FQPijfmob7HVcZJV1tKsxyCLMDEAnrT1u87mPFNTSwVMijK8hAAgx",
  "key15": "2DJpgk8B3qGA24aZEG5Z6ziKyJTWKKPjJkvWzuQkJgTGXEtmV4CJbxNRqPEWhjJwx8cyr5VvuH9Hdaspk8jh8A1o",
  "key16": "2VvcTTtcUnBSqDt7nwhkGFWj9VVpqcNx2GBDMcva1JaTAF4EGugw9Q4zQpGiQknnj8FmqLGJJQB7uRf9v3muKGm2",
  "key17": "4EegJu19AhmGbjHnkHx6g2J5v9zHqph2oTRfRTSNHUve9P4TC4ZimGtwmDwhJ5vPSKScP6iTvhDuX8HZxytv35Ee",
  "key18": "5bqc3dktWmPRC2DQtbo45uLhFbgMqr1W5uxbKSKhSgnsZFeXx4dfPrfxvdZXayK7jSiqr8iZrFUEn5Mksu8Dxd7n",
  "key19": "5xNkvdydgXwP7VA7xtnbbuJJxGHunN7t4uzwxeEPcMEvvDHkagCdnjATrptSXYgvNXrUn65RkHXAcVHkUN6PEo2j",
  "key20": "4TWXQhe5WUNaXARWNSwr1Sjx5FZiDckmhFXJWrNYCx3u4FoSQKyRwxqx6nbE7ed3Rfw4mi645uWYHStxmzESnMYf",
  "key21": "2smVt1YN1ACgUgHPSq5wxs6V8Xi2ojYhXPhySHfxqsMh9QUwzFcfKT98eSmJdfyRLw8iaPpUzSYUrJaw5pg9nWiQ",
  "key22": "2B9mHUS2TCUGqr14kXYYaJGBxLTeiD9KEMY7dd4GpRDJzXfSWLWyAwaxFEzdZTPLAr7bTo3ipCe8TfRq8MBPng44",
  "key23": "3GUFsGy9hH119KXWTj92uoS2Xt46gmVKnTQpAMDS4sdWF1UwBmiQfxh5L4VmHDKjxoH9bJjJ9A7nCywC4MfA4sHQ",
  "key24": "4nBo94t8n49Pwn13zgboL3nScJQniEkFq3wtkZctj9UcRrddPQhDT3ViHe3CFSENTtkxkLHdDdFWPKGSe2nrvokP",
  "key25": "5bPt97hP2wGPpX9i87SroprRGRmzqcPn5to1GFmWJFnsgeH1QjmNHXby15zFxXeBhJqUaRvFxy9xys8ZCrEC6cXT",
  "key26": "4nrAqwzk8uMLmq5b2Z3FrqjnEDQ75r1buuvfDZSNq9hZBsDwCtBLoz6z1qQY6xXxWqggH95X49fhtwy4i6kWKyPT",
  "key27": "3UaAW2Jd8UDThop1L2QRKbXx6YkTRzSWKaCXyCp23GFE4C5RvgYeoBy4C9Wz8tJQ6wbcpVUXttn2ZUCgd5WBtBHi",
  "key28": "2F3WjxiDagbPfrDMNc4cNh2jtiY4m6CXstuG1wVzVu66EQspGq9uXX1fSBdUtczksxF9jZViyxZGCgBmoAz9upsS",
  "key29": "3UMKXACKrpWNdcWZ6nYtSjkgRkUqT3sWFAGbGRcF48wYMDu5CsKgGKnGfbHPVKFVYBEGGAKkVnorCqA5vvBEoY55",
  "key30": "qX16SknHDVqhjyzCJtGYi83R8Eha1skci3xxupqzmiuECh5kAJH7dTW6V9SerzzyMF2sHYozt5KG8rM3dD8c7dp",
  "key31": "NSTs9vrqthX8m9PEhrJWgtonqkU6xQcvJ7zFtmAwTMPGb1LwCDFzUctkJAzeQAju4XZbzNttPDS7PatFkRVrGig",
  "key32": "5BXwiW9JCrz7RHfzgqMdVHzyx9WFdiDgedjPr3jiMnFmvAfLKiNptPwTxoU4d42dCCEmWUuFNNtkG6GgYHe6dX23",
  "key33": "6ooaPmc1hAUE3MojSB2PGw2GuDFd4Vhqu5jJ4LRPYZrToEjfRNG3Gb93yVwFA6aKnNXPYpXEDmpgPeejVCwSPu5",
  "key34": "2zGguzCKovZhZnaw5ua9ADpR6hZrgGK6SHcE5Vt3ozy2q2UgmJMbZeNw3BTwomeNFvTtUJsbU4unRXnBpLcRdFK4",
  "key35": "2UEqnMWVnhuZzCLMJTXVXVTJ6HdWfwpdxx6XtMc2xfTPKXzKwxeRSocG55deix765gqGvyfh15g4NT7L2HUQsqXc",
  "key36": "32FG6sU4APFBXEJPb2StjS7RXXLbaKYz7Wvw8Dy4qeyTkCRQt6euFboudVZm5M6tTofHvMFLkEzeUnV599wGPcBm",
  "key37": "2E8wBuHtdVjTB3nv7oJj94s8wZ4vqe3NQSZuk61ceyzLqhmbZ3edb7F8ghDym6vJ9CwcMcnWgzHHN7yVnPMkVWHp",
  "key38": "2EDXS7YRKCnag5HmXP9gAcCRRU9HSPE8dnXn4VaBTCTSJrzjwvR2BLb7kStQBsRGSuUDr2eueT1CrtuT5n6zSWCu",
  "key39": "HyvS6tRXKY8oA7Tsd2tGn6qYSLpFWvnc8HjBUrGLdBwAKvmkr4Nmco3N1JdzZFd7DHMNVknLPiP3UtHu3bSkH8L",
  "key40": "4VqzrBnhvDWocA1WQ1boBAFFAHVdZoBkd7ehz3DV18En45uzmjpexM4W6Kknu9j1AJNk555rvccTA23jAfosMrC2",
  "key41": "4LUH9vBNZMJZiZECZoVSQKrC22rPKAghDM5K6j332vFFXpvEeTmYP5MZGvZjfz8pQ63WygTdwLfWaG4FqNWveEkv",
  "key42": "21YmBjTorGtfwPnh2MiXsaL2cif2Yct9SLfzP6XR38g56GkrAhFXTgxVzgRmgWPHx8wwy4kjGaHBJqNA8HH49J5j",
  "key43": "2WoGT8ofwGrJziigkjymsd3ANXKWjbbHxngM8WJqSKbdvLRaoD76m3sxBrdvYMzGUu7RBHRNNQahR9TB1aHM1m1Q",
  "key44": "4Aop5mNWxuDzpqgLHHj9UDFDRgf5KxitMV2y4Ce25APvgdBaNoVQb65MYAiYaQDrQgXCqmyLQmQBHmZwbWyXx3AS"
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
