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
    "5xbp1HRps5kXV2CcUBPtbuqBMs5zDMQUUirW597y2vpusTxSmC6jHhw7FCE3X3f68uKYpdUh4JdfyhSsmCEZ4p1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVYc1PTaoyW6jRyjt2xH4NDnYpVS9ueyRRn5o1eTfSJD9gsE3TdhaMTPp1bd4f9xXghByX3qGAKwtu8tHTSxoSX",
  "key1": "2i5fWHFXbtDT5QCfWop419ETFHrM2t5wpzbiecG41RQFt5TKcBuSDhMjFeE5ck9KC3kswKJ7KXL5JE5D1PZhAcab",
  "key2": "6BQSuvkZbpHmwrgc8m3Qhv6pPPpWpUwxrWi2Q5jfhWgVUBgJHUNKhAHW421MDnzAwZuLkkDgutyzyf6npRX5J3C",
  "key3": "4EAtmELw5PKt89q2QcUUX38vPFPM96DSbc8UNCxP9DcrUjAjwmQdPKq7eLUV2CsgvRBCE8sCVYHyd2hH1DRUpN5L",
  "key4": "ro8X6mmwJgDmKghZJ9ZJrXeDjTGzNKWUqvRdu1QhXE3m8dfzbwe12hSMbLJK2wbyYr5cC6brQTiZ2ntKHb8vBK8",
  "key5": "3xRytrv6jwSoLTgM8E5TAoUbqRt2oYzRFR6ANYffkRrFniutU3iZUSAWGvDBd5dUTcUNsFdGY2949wVKPSgLys7X",
  "key6": "3wJfvNguR3mGyNCH5srgnBSxuRyLtS6wa2MLE9qoZnoEck5FAem3qLBnYoHrju73bkLDCe6PnnEbV2HwPL5neB4X",
  "key7": "2amzdRtgBjKwrSorTXDqFgkcYT1bWRdqRfrC4JhphnKhRuMjnYDj3RNxDkSeGzigEpbmVuFNnjh8r45WBZSHxPB2",
  "key8": "a5PEEv1syioQEMmW5o8aUJkN2rWN2wKHdxsBdiDgzzWv74Wt1ZyyDfviyViS4ZKVxEeKXJiNFYeBQs6qcUXn4Q1",
  "key9": "3uYmvEiZhfGEUsKVyYgA2qYmW6jyEJLLeTsjpGxxjBh6mFY67CxvkP1jd8vNrntjqXesSSvQt7oM1Zg1x37z21fr",
  "key10": "4NuAz9ZiFJSNsLq3qoPYpaS4SMKKpWYd6n1fq8oie7EmfgAFPfBPFvaSs1vkRSa5apREkQ8XaY57ahaLBQN5AvnS",
  "key11": "5Z37LwQ7uHoqVBt4kJuHNZ8o2zc3cbPaLsW45mAfbHiNRnYuUvWsCXaHfKVADRMJwAHDb2hBjr6yL5Zg5RM5juko",
  "key12": "4kvAuDepePZhrxm8ur4FCeVJsDfPFBBETX2QeG7pHG9AQXaDm89kUkhpRHxgujsUJadV2REdE3dFohfRiW1rQsF",
  "key13": "4nQyEBqfRVrv3TeTJ5xjhDJrZHEjHUiUAQDGQde1teaWKbuEko8GJuRJJ55DJ4PWr9C5aAwe7Un1tVRYPiWvovVK",
  "key14": "2xysbvjjMDkcetgojG3WTz4dsP3QQ4yksrvMAQ8FdHf86MBNCHHqDS1Ya5V3i8RTKzj9U1QoEP5NQ4nsGXR2c5hs",
  "key15": "3UNW7U1e8e6N2dQdNnvrD1fdwK29RshP1snM7oiQLp7ByET2i5WhVsWQhEUhxWz998m7VEWXVBwMXYYbNo6YMibA",
  "key16": "4bZNFcUaeNGXH8wynWzCSDVZYeELg85oXnrSgqvnD72nw3GNfmNJjAJC5im7fbbXoYVyKb19uUhuT3Lamo9bBvKF",
  "key17": "3TfSg3vLw6bD5iwQqBytsvRodf4ebGrnmGfxvTMs2tR7eop68MGTYtuK6hbjy9BXHnvVCq6WwmczFK8oxeCRBuPq",
  "key18": "4mjjrgtiAJrCBWuQSr9Zh4aZVpzoaXNzEFwjaQdFm4TH1efBoeKgsb7pzC2EtEb9BSS33JAgP9o7w4N4gJN64aJs",
  "key19": "3g1ypgYC44pi1Khfzywq1gA5z6uBTHyUrBzsNFusgjg5Gsg4wB2uyQSk7KiKpryhp6CvCuMYHknuN7MfduNLdBTp",
  "key20": "56Z4Aks5q1Kz3Jpp8TVRBw6MgtuUejCpMED557RssBp4fSi8QF2HxJjsCo2Qrdrq7NSEmy5LffiLdSaZ3YTE6wXh",
  "key21": "2pqz84zMttSepFtjMK4sTeZsYd1F5aBKSr3RBnAsoYeRkwmcrnqwRFLDjMUn6UWNtgVyZoKdSr78QVgC66joKGxX",
  "key22": "3bewYmq75AwkxbH46CcBk8zrPt4koC3cYYEoEinLUXhStbYvMgz5BCsjeGENxQpKV5XzQf9GTWaCrAf65WUx3W6W",
  "key23": "25P195fS2r788JTfwXTDU2CqvBp23dCEgAakL9thu5DbidmKzactPfBJon32eEy9VX1qguoFkfx6yQsXZWR8WbNE",
  "key24": "28sb5zDLFnRe1gMJoM9RT64vrMwe57HME16Nc2iJjhDeVwSm6JqGaarpEgpLKjoBoX8zk2ZLgqMuV57DFMLXmxzL",
  "key25": "GvZuLeX5oR4RGvdUg3GzYfph8TkCza8XaimH958inRyQgjRSDKKzPppmCjWj6D8zyQssYmBDWvSmn6Z2NGazpE5"
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
