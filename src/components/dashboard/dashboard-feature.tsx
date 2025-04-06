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
    "2LyXPs5yjtqQ7Qw8rpeA2AF9tccY8JoE5UK9JjnoUKpvpSeMW9y4EJDoRwRDQdEdVjVQucvVo43fvoKgCsvxzeJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YGhVwLoiD4mCqC7fvvDZWy2qDkEmXUxndBpkgadENrCvfTKNiq1eUXa5RjhRxKzWwqNgByRMB4g5pqiQrpejgEW",
  "key1": "2FxeWEF6ecNEPvcjbVySLBNafmp1kKZbMYetgLasobYvhdUhoTK4Aq63vCzyhZYvBg5MAd2b36ceYeonLXwsJjrb",
  "key2": "yLZd5zWDCWZNo4eBATDaPjBuWEEdcSRS4AwyMY6D2zZfFtgn8kYcMgXgUnDWCodQh43b9293P83x64gHUVnkcQf",
  "key3": "CPjz6P2HHDpEn6Aoj1sF52vVJD6Esf6nkp491N6AdTzP6BgcjYzy4oNRtyQzLwuD5yL65mXE2FbK5GSwvfMkaQs",
  "key4": "4dS4NvAAqbTvdVCRRiK9Hit9LviKVRiSVRfAFiGKwF8kpb9mHVNUtiALT454vXNfhTLfaKMyNFauUCe819E8dnu",
  "key5": "56mq2C2ipsLwwarnC2A3eGS43mN3Hmje58Tqhp6M4ub6XZjMDDErjT8WXhfny5aXGH53ZNHr2ouDiEmNDk6uDtzC",
  "key6": "ZVJoRissZMWY5xME5aZRcPdo4FBTA7gPzupVtvtrAJVx3Zmkb6LeokYQZ9v4H6AxBuYzrZKvzYGyArWQqSgfwZy",
  "key7": "oAh47YkwngwQw9Y3FVWQfZWiVA6bUgL747xcHUHyVcwJBrfdhjVbBYKcjiw32gDsYryiqjabAp6U7LtF5sKdx6H",
  "key8": "i2r3NwY7kEnnTFGN6jWPJtohno38BQQKUeBGqNcXZfoRPa2HuzWAm6sCynia71ebHo17An3hwaspTSbUvpUjk1z",
  "key9": "3eRDjrMAx9CEFvEuLHxmG7U8BpzSMtsk5CKYN7tvPuXTRVXxh9DefRZ8Pm7tqZ8ewfYKWHhyKSkfe5mF1bTCwARx",
  "key10": "3MSDN6AAwvGzAeYG6dsRXNatwoYSuPFMZ6NLqT8sHKde97QqVcyDYQLYbqGHDXLxt84za4SgkgtCcwZoiEbQLeKb",
  "key11": "2JqtXMjdncGahfGtagCbKrcBaRMhxF19Qjc2xXNRxGa4q9niuG3Z4y7RM5Y5hdu5qNbjD3rkmEZYW9HqLkhf9DF6",
  "key12": "544847ycXP2nPNcQabdVvPUbJL6kq2jRcmzpyHBqauC6xHCAMvQ6SU2HK7My23HhEDNCD49iJ6HUGzmKAQB5jQ8C",
  "key13": "412weSvSRcJrs8MDnabVue1AJXnCPgpY8txGFnQQFMKmkSsoRSBnJLtXSKuA3Xak5aWVzriFkjzxougjsYGvxRrA",
  "key14": "5BXA2SnJVLKbwkNdWx8xj9kvBd8sJTs22xdV6Czxz9AMyExYdbdzoHYTQrg3GfZCNdoXV1ExoNhWWVvf4jaVa8i2",
  "key15": "3C1A3tkftefdMLWXeTd2xvJMosg7FzzWee5j9ktARFj2JV2urJxxB7UeJyKE1bxHmJJZzebTq9gsCCq39Y54dxaP",
  "key16": "2fTM4zXqNWp3DLV1jRBwfwkWVVMBzSm1eBWdQS5uvR7fqojx7JpLLTd8RufE31taRsW5Yf93C4h1Z7D1yuVuyNWE",
  "key17": "4zgm1BJHyBsJQ8krjj9K6Z972hCS5GTthAh3FXpyifkMghYWtERy357wZYHkt9EXCM3u5v9dRHb5vHMfnedHeL22",
  "key18": "2TKmKRwFDS78YZgGk1ULKPDjwdn5Lk6xknTWnsnYixdDAwV7Ldx4V2pYcgkL4JkVGvZNntZ7nkS69YVvyKCEq6Xr",
  "key19": "3PmgBnenvgiNJaVrYdXfSRsA9LCgypLqoTg9BrkyjtBLnN6xTe2bFwjjRYiGioVzBxXuo9AFYYzx77aH5LGNwLut",
  "key20": "2RhzEeYfJq9fpxDEcgbUdRj5LeH6kYcrbRv3KdfzDMC4mwpH2Adfzys92NTP1YrAHXYNeVsuojhpMtrXqHEyR8C7",
  "key21": "dZiYtuzg8g6quthkVcM623dgYDgpH9GyaxQFgptxxN9QQtuotuoxeDiCy2X2VoM2qZLwVUubnQDv6wHNHcMEgXf",
  "key22": "5JaoeEah8pr4TsaNC2U4UNZEWUQ5SR1XyiY8ZPRwbGbkubzaaB3jiangK5w4KxHmC5FPAuHfWBvVPHER5PFbsdDq",
  "key23": "3HowwtYpKc2fELAEk7Gufh1kotuSAUpBRGNPyJXuJPDLhEChBMy4fdAUjos7p47zXcLKTN2TQkDZL1bSYxhd9biX",
  "key24": "2dFEgTXENQoqep1wKkeXQHzixV4418ZV8QWyTttB1kybMGTTBVer4r8vVaKuU8HqKxxsVWnSCgTDAyPx7gzpekdN",
  "key25": "3DfP6BoohFoTJYmtjvrZZFAjGM19oXbuPPUtE4Voiid58SswnzAsb4x9E9Gz6cF4uc7UD8mERBBb9snmjaTjakmZ",
  "key26": "4EQdz3V6hSC7Sk8aSQUSdJq2NXEU55yh2CYsLbB7gGBWbENFBQGU2CVzfSWPC8k1r7HTqWmjxpGGi7YGhXt1UuVG",
  "key27": "5vfvRRUMPxg5LdiRYwwDirhtLFRYU7S1pHeZgZrt6qhkpgWR2VqVsH96sK4ffdL1upT1So9F4Hs1Kq3a13betwbg",
  "key28": "5jYHosBtxZxaueRfiTC4PWjGo9eVaPzEi7WuqExjM1JXS34gNnzEPdwGoXYcadH6o1EbCkmCwMndzyVZDaX6WXJi",
  "key29": "jFXQEBA9T5wuhSuy2cSa3nD38h1Tduu2SMKBmvDmrVY52UxCSUN4PbPu9wwMh5GCoUv66xz2DcmTYkjAu29qYuY",
  "key30": "5Sm6eTT9nzXg9rre7yDcV7EqFoHVFgRFMWV3Gg2dd6NdRz2DezwDKr7dwaBKWq9fdqiTzmrd57sDEBnCoJuQvdoa",
  "key31": "4DGfVVobGDqtaZJV539VHM7TDoz6GNLuTVw5cFq5fBHU8m6p8Kz1LDBcyf4k9tpScLmKv3sH3GGy1DVmKDRmgcrp",
  "key32": "3x8xJTohdu7bDDvM3ZE4D64BuoD3UYe46MBVMp3Xb2B21YinUionAoaUmK3VN8PXSMvcedJVBEToU73EAYSjtLee",
  "key33": "2iZ1jSd18yxWgTHbco5Up1T4FXSS9C2dQt6tk6489GyxwxJnM5g2kicp2iaSSUUJ4KTfM8i2z6sTwyWX9qdm5Yey"
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
