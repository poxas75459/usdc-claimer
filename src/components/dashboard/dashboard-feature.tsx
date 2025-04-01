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
    "1JhrsckbjTcc8TEZTrmMMHDThvsMpjgUPBsEgUqAhWEYFxN1NqirxdtvjRd2sJBKujFQxGJ7x4CEWsDASK64Jpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFjHt34wpVtJapuvccWuJ2P3dDHHndw5DxkTUshqryzZJUYdTYEVEpp5GFPNwPEgmPqs3wyfKujJuWQfYtX6Hjh",
  "key1": "2k3VUkmaco3mPgjZZYpVdv2SWMqR7cxYA2tN7X4APuxBVCBL9cSDTVXhHX8DdoabWFXKw8XXsU5fLtT9MqC8MufA",
  "key2": "5js5RbTfs5wNc2f4TTcNUvvUiEwsBbkz5zLvmZ3qaYyumQdLRTctiXTKBdrtFacPnue2nxiutnVjyeBwzVYJhTEz",
  "key3": "2XhG747vDpNRTGPhgjfTh2BRtKT4Y6kxPKCDE17FXCBrrx2RTN9qnAdEbjhMoNJs1M7FqQrFv9qtDPevjUsy9XHa",
  "key4": "2Gt3W8aBL9joGqUYJKGLjzQoLvgMgYCDMYPsFYXXya3Zvmm5kfEtiXq1XqzdHgzdKiHc7YRAsHvov3ogJaP4mgVN",
  "key5": "617vWqU4kxz1wmC5RMYzmB1moAc14tWB8SbGBDUJfY62ub25xbnvNt1axY5iLmwY8UpR3Djpub1G5iB6zXF1rp4K",
  "key6": "5Re5317amciGV3BpVS3DhNauvdXcXM99rGYX2WhboM2KSWsJTaerdpA5EJfTyLgef6HHa2CszzpJvA9Edkp8f7bM",
  "key7": "59zUHU2RSbYbddYWpVYRR5X7PJnwK9kiWH6NUgHBdLJ3cfDLX3RKDWhgzy3b77wzTAQ39zRvZ1kib3mRnpQax38t",
  "key8": "42ktFemaUXghtZML7AEXD2w9HS53pfLKYTXHM618xijHAiSBH8qbRh6UjjwUTgMP2YqRMDebb5f5oDSMF8swachY",
  "key9": "4tUZy19nd3rs1npMq8sbfXRKHDKjGj4GMphJ3mVcuwDUUYERZsGtDQPXVLiJG4nPM8zod19BbPV8WvwzavmSZUme",
  "key10": "2D3J6YvXgxk2XGvRHoA4EQnVj4Gdzbrkg9rqTcwVmE75qTAm71dcGPnToBmZ5NraFeRzNctbPU18bGNFLdB3Jjd2",
  "key11": "2A2oo4HYnP9brZ7CBzH1T9ZaBbqVfYmQ8qJAGe3uJ7tY5A7w7VYoBU6ya8sCHuDv4fviLW2SsLExFQbnsdRX94NW",
  "key12": "4b4wY5wyfxswF45AhsSKvG4ct3HVTibAhn71v2hXRELaGcVbbgk4ivPhGUdWHxrfvzD5xDv8CbWYnEZrp7Fdcmwr",
  "key13": "5eYQqLrncXLXEvpdkxxHVJ9twQxaY4fgd3uNpY59Hqc9LEaKqsdNgc17wXnwsQHKmTP9CfRQw8uNbTEdryGdT48u",
  "key14": "3GmJGsm7kDzE7STznqZhgUyMWVPHEzav6XT4cN8wUPFhVZPDZRVXuKbjR2kYjncHGjbaFrhtaXFpU9L82mm7iXLB",
  "key15": "5D22FpLtBiQzYnwNWwiGGhvuHmSCEQaTfTo3A4qi5RKd4rELEEyCSs5XUUu5jbcRY9PXVYvWw5utjdTTbETn3cgb",
  "key16": "JLQMmuEAZwVqrynrds2jWGcYFp4LZdGunrQm9e6JDTG4vAiK38ssch71udXpt71xmxMs3LoC6D9jXFH8LJC9bvD",
  "key17": "3UqLajUdjNswF3ReHEzuZxYcssABfpWmdESwmJLfgyt2DDzy1RF7UMRQ2BVGNyLYwzoeaKuRsjymxX34SrCFaDtX",
  "key18": "67oa5z1N7juB6KbmbzyHPZngmQC8cshADmgs7Yj7C8GfG5g8AtsZwoWW12V98eFJkGnTkKqcW6aLRrsAm3sHcrBV",
  "key19": "3cnvYgd1m6hYNLdYdvABzJuTEjiZZHYTmRj2mrhEpkk6Vy9TfxgUAprzq3wJ4EXPFsKrxrxsxJSsD1iWom9hvP3L",
  "key20": "pRNFGyMMckqdpBNHXDbHdeyuLBQxMpawgmpgvXkESUdVCUgQuA9Tsjn8V7Y7g9KLtu1RVD9xk4q9sUfnwDK9CwJ",
  "key21": "5vq5spP2F9FkHTk2JUBgQezoYZiewNH7avdLPKitCzZYTZ67EBk6959LQjcM8pPNgMQcdZSUnCA6YUGN6GepM2xG",
  "key22": "fK6sx3qKs75crN6nsDB7kguU9boeSeu3n88yxeQMA3LPa6PMwX95HLycsa93YtREn7DSw8DcvvXSjv3NNv1D3iz",
  "key23": "249952jCqdynVTn5MZksH8jS1jF9TabhdPbexEYcZGCLmZWf1hSAKPaPEkTBbKD2HhRgdh6qy1e9EGwd9rTfv7NX",
  "key24": "3D8PufW7HxxcxfmnLAMtcDuaptwq2AB3YwwmdrQWWi3s6FLjksterQy5vh2Jtxy7QHqJDHU6whhEakPXxBux2M4W",
  "key25": "2ckVcCdBYrXaWwJNVLgMeNYJcb37Gr7UGXKYYuyx1L86marfUCFNR7CJrdZjk2mfkEuSCGt7ZhM2TPfzHMfH2nxu",
  "key26": "52Spjp9GfqmC7Ek6YpVpGKHEDodmTVkLKe16h1QEF4cW51yij829FdntG7pdYzMmtfRjPCTLarnnjmp83wdqCdpj",
  "key27": "2bmNqpaFFkRmQH6NpyhHH84fFFa8pZAPNG2YnxAFBuUpBx8U5tShu6Qy6o6APuxCVdWP4pVi68W6Ks2cSrwrw4h4",
  "key28": "45rToPZ2sokuUs5kEkPEGFdgTXg3EBKUMUsdvaoAWM4JRMpxe3KKKzftT9DLXWK9vuHma99nyjWDXFYXT7YeAf77",
  "key29": "2yR1dcEkKisbvqyqembo7Ju2gnVC8XNXhovMwDyf5oLkoJoSvErqu6UaFUa2RqiVoWgvdKsZTKxjJaVLxNTNV4aK",
  "key30": "5MSjKaDkSszXF1pWahneAMb6vEgnhJ9LmJpudUSAsHVNzJJb6Wg19rFpzW2sSZ975MMPvyK2CShD79yoVgh1i1Vf",
  "key31": "297RjQnbS4QMVYk5WzNE8h9yg1vpK2mJsjm6vFSpVekYDJ8t1NFHEA4BueSHweETzYJhV1mKzW4xuU6Y8yLtBU9t",
  "key32": "mgwXvgGX3AAQ5jWdwfLd9nkBNXJqPNmz78SrioyKdyzhnfxNvrvbh7EzmGPrYXDogQPTbAnMTZrStHLhdHx9Bhd",
  "key33": "N8b9CSCZgmdqsAPCKqsBzcXY6BUqzyqZsX4Qwj123nqVFUwq6vEeXJrZU2fCaL8oZhQzbaDiyRKhD6FSePCTA4E",
  "key34": "3uY7ggUYJpXKzGj9TretxSBLuoJ1G5qm22kRDXbp6WXpz28bTZW5AQBrCDxQu1WcwB1nyQYuMFxo8iQwqseuTyVB",
  "key35": "2pCXqsCcqJ8gfjxfStB2aEBE4snBA9apKk3pRwLutez6hqMV4k4dCyFTyszmBgNj8yijxJkdBWZKt5VJsy8br3p3",
  "key36": "5xCZNiaCha2PHCLw9VZGM9yqF4CapHEBreBbJsUzPHcXUrYbHXRDJtgAsHVQwAzFD1XWWEzNGe4eZBYGig5joig7",
  "key37": "5E2dguPD16fJpXUMMzZTpChqqYpzo8d1j1fYnyZ4nH4hoELySitSjjZVfiCZc9zSLogYA1hNbFjjnjSZHnuHR5TC"
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
