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
    "4DXgrWRAdNh1F3jyCBVwz1v4hRRnpFWy6Z6FJX94yjYXZM9d4eUAh47SDfNsHUMvPCfCCK8NKtaohdMaR7wPqkwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7zbqSHfzXVS7uGLGL3wqadbKGqU897E824q36XpXzwFPLrxkthTUKLJZ4jHqFHMauwSfNMrZxbe3zcK26PjRQX",
  "key1": "32oP2GPmjfsaYDin2PbC4ir8TnSkfjeNijk1qq4zDuFzgmPbed5XEpWxYFUXYGLDBqmJWMBDZv9YXccKbANMAafU",
  "key2": "53XvY7a853fdfGJHM7X6pQwQHdsamdeoovRFFreVhadCQbCH5oAiQHmQy43Kn9GbJVMsWWbrXDLq5uub9yVW8yn",
  "key3": "zehRTvupS7fKHdebzuKXUui67Nvp72BHcfT6nzJY8P59fASBdf9nGj8LexQZ11721EJUyhdVjTouRbdnSLnBoiz",
  "key4": "5w1HukBY1TYbaaHb3WEZKVV5aZ1gLe3pQwf5BbJiWWY34MV2CyaQoqPEmB6ZAxPWSazFjs6D6Eu5BSkgBu5Xymgj",
  "key5": "47vXDawC6n7DnEX2YmbYUBfWCbbRNeqSn7mZXRYciZ5snQTyqFHoPP9Kf5CCaPE5t3Rdd8vmtQgC4k8DgCBJixM4",
  "key6": "QPH63eqk3DxEJfehpVViDG3NdqUMtiG1goyV9ronZmjzmp5ZV2j98mjJnTS66Nek2Brtrj7UiDjp7xMPSvm6Hxs",
  "key7": "4MwFE9faGgGrN2nombfyTn92AvFU9bEF5iLKjv6i4PfBvQFsYCAzg2q9bs2NskujtiHrYQud47gU3DxzArA7fNQ6",
  "key8": "Wn5JMxcwrwpoo62MtRsFgajufETLLuYtoTeeStraLHY72A9k45iyPCqTwmEc7XbpgBYLgRoGcMwq97uhWWkVCZZ",
  "key9": "eaeNPMtyVtoYduog24TcJH2S5TxRua7aDAmVq3KgQcL4Z3WtoaMVVvfhFoHmtiaYUS4xbAucAWVMd7razSNc4Ww",
  "key10": "E3pNpnjaUibTLKPnwaUpEEqUGjbPKobmCy1CqKuxYa299oWgvCx318oKTakXEDT2Y9UEPZ8U5YX3qMY8ws5DhpZ",
  "key11": "NHxd7baXoTFSGotNpTxiE9ZHc8vwJQveHnt9CdsihcNioMQmhGMHLCSszELzh24QvrTiMpYjZkwXiTZQHPaeyc5",
  "key12": "3R8n6xXimfaBk1Qm8v73Q3HLmDqth2kUnRgb4p4CyggCq4srC7xh971ABs7iLLjUTZj73vM67VonKTQGZwShDggt",
  "key13": "5YVr71P9wDqYzYppZ3QzACq57p4HRqX6bWiDdJdFXoFmBNSdwcZHAHQAtdmW25ufn72nhYda2BHmJTXPaknfqQYd",
  "key14": "2yjzbVWp2PoFXLb6mBaSeSn5fff4wAnurG6HPgsEaDP6Gt75mE2NpXGs3BcEJXcUHmaeU3VmMsTVU9YcMwZxX17R",
  "key15": "5WWohU9oi1JaHYZjih78VkZyq9rHzDUPiVnfUXiZnjJcR6n3Go4gNCvNyFyr9qPtgkwcwxAEveZYzYB84DDkVcof",
  "key16": "2KR5UbGc56H3tmj3xgP37ZwGWUiAfHLDjnCYzkbuXpQe81H68JhkrJXKfk3V9AcfQFDqKbhVkXa7rjVyHUEYiaJn",
  "key17": "5pmPgAJXjpYCaMDNGZedF6Dtzaw2dDKQroyKF5N5NWW1AtFhn2KRf1arwwzwxVDicLMbijWJ8cnmRCivF3U3txUi",
  "key18": "X3nQYHaRfn6SLQa5FSpFvuimH9JggFNnptXhraVjA9UF3Bb2vVHwHggK87Qv9RYMWXtbfM2z8KbsGruRjpyHZH7",
  "key19": "3yAbmBiZbg28ZCBjjs3ikR6eeiX7ZFnYSoftPTuS6DcctAYj4pUYDMzXRMTu8NGte7HDk18h9wcWTFtHcNa6RVv3",
  "key20": "4asfcoq6gmvZJeFcRtjn7JxizRQ4ZWXtwBj3YkuENEXLcAi2ZcszPDJRkoWpJ9X7Cp59JNTezsdVTM6YVfTDRMHB",
  "key21": "5Q641ruegPnuxcgGQsgEWYfEFTuxKyQRTCzU8o1NWsB8NK2TpBeYc2mLguB1jaFFDimStBhiyKvq7mL6koKN1qeg",
  "key22": "2quQ6wn5zFVP7tmspzsfyw47tKhGH8giGCuTyQmuHjFkpDh8ct7ktSRf4fasg9R1XfZNj1ctkps5wMRCpodMAiD",
  "key23": "4eFodQEuHBeWy2QdGFrEHJ8iw2n3pZDiUjNes68Pe5416axZ3nMfhdabE91VXyp8TCBnhYmz14bPVyU4U5c7Kby",
  "key24": "4PWVjbFVvUCYK3h9DaBF4FAqCNzgQ24spxyJHnWaHJC24PowBteUTfmzzkafZVq32gf8GrA5q7ep7HSZBbcsE3yo",
  "key25": "4XyYkPisVv2VZYRFK5M1BAPuPMTwUkeKyg5j9h8GTVpL7ZFzPxKatdnXiZk6uDZBSX8N9pemfj7hEAgnNW65Nx8U",
  "key26": "5X8Hvm2wkix2L2SyqDUmgdYnpbYkTccmhWdoAxtKTCqmctJ6bAhNVQBEwwjAxrzZXBFMDzf8eqR3ctwML9twevaQ"
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
