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
    "4zKFrwbG96qaGNRij4G1mn1Q6zyGEJL4Cgkk2mB4zQoYtJMpPAjp2oMFivRpqnACbWjX6TXhVuhsLth2qef52DnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AyWq4R6xm8kzaw3vjracrxoqgeyoGkgQzvrFXohoGtzt2UvpVZwuigyMoQ47ydVw9uaETjVYiitMjkNgAYQ7GTa",
  "key1": "4yXYGH9TgAX62MxY8TrTFHDjv4UQJaJDDVSCLFaR4Ti7fr7jgsWRdsoZ7hjaVPUbv2Q7bDeHzUG5Uwz4VhBonXcW",
  "key2": "5zjD2fhxaLf2Ca1aXUz1j9xYY6bqzw18psBtTDyfDzddWRSh5rnxGsPUAiKskusaesWvQNvMmBErhxiJ3cyU3tV1",
  "key3": "Y9822niW4cj3L1Qyhcdr6Pe8uFTpq8mgDYGfepGdzUzuLdLgizL3kGn1PBokbtjAZEz3JdxhkdFDj5Vniuenb2f",
  "key4": "4YhEtpj33TWoeBwVJAHmQzNEmEVcuqaqcJfRcbfXNQp9vaV4YGv34nD2mb8DT9wkwUyAHbz4veh9brbBxFEUsEJZ",
  "key5": "3tgy26nF23wahbf7a9qo5qhUbVwj8edwDwvR35boxfNbwbspxLnbJC3xtsfB3mHVNJ9G4Tksvkc4iDfR9CFYKoPy",
  "key6": "4i8yNVjMgXvzcM31Q341KFsJoZuiiveBYDxqyRsCdoeWEyf484CHwS3fnTw3mAjLfbxKKoBrfjAnGZBC9fAc1PXh",
  "key7": "4eLB4EkBUZVKVTA6Rug5NbniCji9VGaEP6cC7srzdAiNXHzgJxWAX9vFLVVc4nCpwsLDwQdQfE4Dyh5mBQ7Pgqcd",
  "key8": "5hgbwTAJHYir8bazSeBeNKCBJKHMUAwHrsgSsb4BhXSDdCcpWzUfg2rPhBuDaNJPZrDHvqWiurAPcc1PYJ4VQ888",
  "key9": "npeiNSzcyBF2HFYhBq71VHqxPjx6PXn4uLwPRMUgTBrzQr1RHaNvv7GvhhonNDEbqLXWX2ihusKov6zrP8rnwVZ",
  "key10": "2Tyv6Jm5JW6UicVpKa9Jp4hasGBzD4TG5n7pShc3zDCcKAmfBhrRMhRRszyxx5JNizo4NH1E6KPgxaX6iG9TUTah",
  "key11": "4XpZ5eR5uQ3pcurEqCm1BnTPBCYyZwaxRzSoon1CWWdWt3V2tP7paKet9JunTz6pL8FZk9cT2sc12kgSyPeWi2hD",
  "key12": "2gnQqGgt64zWurVXUqXu1vqgAoehgrrWFarQDDaFbSMjGbWJY3ur6cDRPbdhSEmjEbJTfWs9F8gmpTMRe4KCE9cC",
  "key13": "3hS2zSTACmEZu62nChmwHZn1ajswztJ1gEMv9CkAdpVDV4iSKrN92vx7vFm3NVMRW8wMwqNfrd6E747bHvqdrb6t",
  "key14": "5khzrZu4mKfBAtfosMTHih5FJrC5wNpNTjG7B5P2337wG67WGdUzXr2cq9K7fPCmKYZeLS5p1ztcViQqTY2U4usT",
  "key15": "3quF9BCFWqyBUFNMp4ur2C8h29DM5fkMCMgLKqnAiRj28pcWaTTa7GBkBfjjaUzgHEVsKPaGDeVJCVH5P9WXs3Gp",
  "key16": "3YPjrymVd9CgKsYbxMZ4omcmZu1kRfXRx152dMSBRzGR8mhBwdW68fGnRArdR1CnAV2hiLZVpKKra554X3hc6JCP",
  "key17": "25no4QPfjvRBut6UWWyZw8VjNqK4PXnz26qTtCmUn4bPFyaX8kczKAHcViAG9cDVNpzUZchERbWfh2N3xrxw4BhW",
  "key18": "5zyrVXnodTe8CNgcTHEJWHQ3KxzU6v46Sgq5HwstCnDJwpYdCcSK4vKzGo8TVLLy2X9DeyL7sBb7MhaYsoApDpgf",
  "key19": "4YyBXrsNyoTAAJr2f1Pk7rgKP1DBGVbE4xNiTCod8EYXJSRTKyhz7UWSM7CDKrLNVKDxrkhFGWyka1f3tkRyJHqi",
  "key20": "KG46PvmvJhXcZ3gybmWNT2A1i5SFT93WDeHNJUhCv3mznjdtrQxfgTQzedh7GR5abeskEaBi2pxAV7oR1J1yoj5",
  "key21": "33SzewZ9WBCzEQnwUzozZDpBwoNWZRDiatv6ZW42DpyT4BDCp2p2MFmTpzGFYZiy8jTmN7hceEhnscfybPepiawT",
  "key22": "4euWcup8ymXhKhHjLvzXsxMuSrgfUJSUiFt4o2emQ8Pe4MqeUDdBzsSCkWDV6UZ6z1zZcGpXjhGhXLxVsxY3wbC3",
  "key23": "56nbRqN3ibZMDAbd1Uno5c8gxt2zhozUoLAsPT2tV9wVJxKftA6PossaLu264FAWvCehJC8LKGaRqhadDDUB444o",
  "key24": "5wBJVzwJG9XRV8tqYzATNVkZanLNLE2F3eKinGcoKvy2T43As5QdNCWcN97LWQiXdiegn7pgLLjcZ4F427AUby1",
  "key25": "5g4HfyNsY9Yn34rfh6eSiRSV5HiK3Fh8EN3PZi77msk8QgVBPYpMswgLZ2QujQHzUTb6T7Amffa1mVcEigmCHof",
  "key26": "2bmuwd6c2NCqr6Ph9VdwUQsBHRqnjv4dc9Z9fHThUGaMb91RCYQb37VM6FTz4Pz3sYnRHJhBvzbAgSp4npLbXwps",
  "key27": "3xoFivc4WkCYjPAfgM9vY3mUVGpj3xiH2QUypYEq6J1njeR5MiU68Nb7qHssSWLkfKKc98aGu4nZ2d63uAJVAGE1"
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
