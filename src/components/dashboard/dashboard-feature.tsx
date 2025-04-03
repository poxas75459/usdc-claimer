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
    "3gaagk5ivPPn8s2h7qwc7wvVyvih1SHidZziD2VGQjMotdRaM766Ev4mnFH2UFTB1DATgXYmy1BbBzU4KwfH4mRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52z1v3nNLM1PSvn3Wivq8YQFF1aVu1Z3EeVWaZRTfzKyXpw3xZAf2nA7t7GyaHJZmBpHK8PawdqBtZEHtfXeVAqg",
  "key1": "2k7hvWFufxtxkuiZmVjg8C2nw7guSUUKEcznWnbUSe1QYAqf3TeAkYcgYyfAbea7x7gbuH7Kv3X8qUYoNTe29EXt",
  "key2": "5MxUPknHtpNLkFNxgAZnS7W9WdGiiivKJYGEPtygVioYGCW7sVWpP6pTXvC5RyTJ7QBqLypC85axzWPCZAuLzRi3",
  "key3": "3LEGLCqzDS7wkXWyVSoiTXGqLvzyKBSHcXCEFZsRPqwqh2BwnpnK38eT6eAbhwkg3pDd3uVsRNoUH7uwcWdpGrYg",
  "key4": "4kwUyShSrZV989eKUduMD9sbvmkirfmMvxGQbjQ3mWGbJREeWKp9Bv2HjN7gVEM1xM1Q91jAmLCu3ttSkjxq3nTZ",
  "key5": "mWjebkroQiAycmwebm6ACKTrveTVULaqARssFtWVAZxnrVwjBk4L5CssYKxurbruw44regh7Ef8Co3aa1DfX7Vk",
  "key6": "5QCnUyMCQ66VXngj4KS6dVW6QNoMtQjEH8PKr1Kaq9kyGzTSKzTjtNCDoGDRVSeVmgsVakLGLzmDmSg3t88ucVLu",
  "key7": "5yWjKVXsuasBPeCZ1WTYXL39sFXVdWbE8n78H8n3oHENZZmdThPooq3zYGQ4SY8HhAuEDxgahp6qK4EmRWQUXGF5",
  "key8": "33ojL5mcrnKRDDKmL8QyjsstfybSanwSZe2Se88Qe64Vci3the8EcJGu814m4nocHfAoccAsCPjDUe8zBhx4A4cf",
  "key9": "ZNcyQZC2Ei9skkLPNRuuVS1ywsh5c89qTeJRRms6dWrCuT8iwgYTQSMmSHLn1y5pM3oTpdP7J5NSB13KfYGqujw",
  "key10": "FQYCjf6yyZctyvLmKqm7ZPrQHKdFLGvYTKfx3uu7iPnELLTWDc2Dqdty4vYNRWmgLAh1aVWn1jRc8vSsFhwC3NC",
  "key11": "UskC26y4TaM7bXsjWchRh3CfSY9Hha2SNQrzBXcJRRgJhA3EVQLEAip7EBiqHb1e4ScA6MihWCyZj1usVbKhmZy",
  "key12": "3XtkMFzLjrDuTcurwVTy1zrX7giTrakicGsctAvchSSUAeNYRvS2wubtC6GbHkeSkBapwEAD6EamwWaCy1C6SrZV",
  "key13": "4DnX2AtnDQt4VaE4sio1wdxe5Hynex7ukn4zWyJSx46njCHg71sQLcPJu6poKWjQyJTCVMzTbzsapFxhnqiyNe31",
  "key14": "2fejbc4hZ9Z3ykx6qbXuUdB13RkUCRKWre5My3cTcd7TdzJHiTEaJ3q3J1Qz34WiUfotK26WtZKHghidkTqP6jJW",
  "key15": "3cCL1hZMtTAtVpKYpCMDiB16c9ccSTvDXmkUuy3mSWkSHpWaaH1a6R4u5BuvpeuXoGGsXzSwtYdy2TAZNC2eTfLP",
  "key16": "3HHagnLad3boe5KqWEdLQxB548a9juNvkUWgPb7fBV6H16ge9pTJrycnSjnqMBKwwCnZh1ZSAfrr6jA3KogX3YAg",
  "key17": "5FQcogfxKqEUKAK8S1WfEgWpnVoxkrz4bkY9B2Jay3NKxdvSnRE5EXZxAyzmie5nDUJiJK5434ZVnRwPyf5mFPEz",
  "key18": "5AHkGdjHvS84JPtdAVWennQumMnzuVVhVWkqByDPNfCoBU1qqGYSZ6eUrQg2fVRPwMBWFTyf28JbmdRKQJEm1yBs",
  "key19": "3M3rfkH3i9KHkPMKWGgPSGcMBiFAsJTa4KHQ4YfgvTfP3bSXDxRpBVQBhV4ZvjUgDMpR4FdgTeRoX7t33Ub3WecW",
  "key20": "5ni8cfuak4kdsiK9UViVkMdrWQNMEDwLuULEZacGoGqNDJNsjTWtdixEqxL9MzrSafTB5w3yoWLNNkaMyEvpuMfW",
  "key21": "5FSKsqPAfAJcxqnSaz5ZG64JuLEHL5zr8wENpVWHG3c9ySYYNTjnNJc8X6BgQWJ3vmHFHmgo1kMH8G62Yku5BP3L",
  "key22": "55QHCgBMPA7DyFtSGYLziKK3PRavfvwMpnQNhuTJk686wEW2Tg9ACErBVmyefWgbp2yTUoLJCjxaxEnei9Syy1eb",
  "key23": "5X2s9xz3Jin9xDxWrmQa5j1oydkYhXyEThWtgMzYWD5mcsDaCbhs1TH42dMPK9QEnyEPE3bTZYZBRWQwRYZ5tskZ",
  "key24": "2D5Ek37Mcm9Dibw3qvKjS5bTQcac7i8ufW6BDjWfbER3jpiy15BXS4ZHosCWkiCzaNKgK3mgKqNCMVybfwQpKwvc",
  "key25": "5WtG37FKVyP5RrVsj2AM9zFMbkmFqgM6xKp9j68NPtBZ3rNa49UaXieU5P5UzLiJJQmg8NWEwng3khSE4ZEUgPvk",
  "key26": "316mPkkjQnK4Jc8c1V83EahbNqgbyf2pYGZvrHSJW8h8QgvwYKsaK47EWUTUcz5KjF796qMMz72hiptzRNjbdxNi"
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
