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
    "3XJvVVkBBNwDZL1AkmFQk1kTXjNEBPq31Bd1hykXZksYMp8sXsp5byniM7EYL1TvKFUixBbg6xKADG3kDh8Mmr3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NLg5jbPrNFNApksiMiHAvsgvmAV8Hzwgq3sXXXi6q6BxMwpmgPWEh65FejtTDHrM4ap3VxLGGdpC65B46SZxWbp",
  "key1": "3VPjhMP6GMXAq76NSok7WN24Q3YTxxmwCJs27y6LJv6sCZ27Ph4kYSD5LH6g5K8hTZPn4K6VzNnWFntrVjUbw3Ua",
  "key2": "2J7gkuxT6vGBHGPjmRd3ALJ9AkpfTFJr7UAo56dc1sSSLJKGi3BkQekuoa3oJwUAmcjByXyKSbsWDyPaebA2j1QP",
  "key3": "cpDVEwGCY5AU3sJNa1CXg1bXc7kc6JAFB6cGUyYSbW7tHUL1DfsgTfDVNtQNP53XLvpa4CyHaydhfwWNRXh1QdK",
  "key4": "3VpdXAPshVPsdUCTWRQiK92EazmBDQh9PQWkLcGFsAFHMe4Ur5nGdCoDc8VM4MtqcigLE3EsfXqTfrVWuxWcPWNc",
  "key5": "4dek52ixxQtaEZPb6QA3vD57ZUxGGwXgCHkeZga6S2Ps7xgmfmJTtxp4tjkKMVtBJhG8mvqqSkpQJXy4a37fkDQt",
  "key6": "5HrqZWGJbF6dUfCMQXuYmZTjfq3YWYxjvpPdUuNNNP9hvNyjxo3o4qXAUGmVmtW24hEmUYLnV1wkHJ5dFFMzcoeQ",
  "key7": "5AqFR6sAFpec4n2znNFSvyBiWCpQokPaPS4A8tbrgD8KLaqW8P27usVKZWNEGFYjWdC72RXXS4ygc1NK1s1fF7Qu",
  "key8": "5R7pdhYe7RTZ3zmt4oacL9wCsbCZLsYuWPRYobqVUmVgvrb2CyyXQPmvcdGu3EEch7PAmcUKX5vA25examyYiLp4",
  "key9": "2MvCnBtTUDpscY174Ahad4QvLV4GN3W97CbxMGN5KseH83fyvFURcfziq6E1fWvgC2fNnpwFqmoeJGmEUc94iQRK",
  "key10": "2QKoUThq9WMHrKmkv3FdxsDb8jfLDM8wK4VpBBgkT1VgeotLLBbWiPh76vmc27xgKq38XcZWhmX5kj29cChjQf6H",
  "key11": "j1th2dMfMT32X8yGkfTJBAnFphnnExpqicNEFVMff1HAA1VXppYTQjZ1MGAgCdyEQMs94kLi2ponvBKeoX4ai46",
  "key12": "2UzuR6xahUaUZNXJBemjPRuZ65Eh16bZjVpz6TQ2Yqa39ZFxfww1bZW4SSfW2Ej7V4PNDuAV3DbeBVqbzjtBFRHv",
  "key13": "DShXZx19gm1YBZWMKfYHPmrJfQrN4birphN2YLdr9Qri4fPKHtmX3D5PDYJP2hTZxiVvMF4a1qYFHjdmP7iV5JH",
  "key14": "3rGrfH1Taq5FXE9ePcEG9sqxTuVM54fKf898RpbHeKYpugyTMbiKSDmX8ZpChLqbF9sQGAR2PvLLjVRj81To7p1B",
  "key15": "A1dZqGbkFxLVXE1AJK2tHHvJVHXoYrvFg2Uhcctz1K3pCp6UcJ95VcvM9KPhbtWA9GAxvCHmVA4LqHoJKoeVT67",
  "key16": "3A2xCU5LTxTFw4yoKpYVLvkpSXgmNckDrPdPtcTFYFwr1iGya86wzo37at16UFomeAfSRUkYyXFj9VBnC5BpomCX",
  "key17": "5tdmRqLksVnugopgaA6n1bPTZFrXeAx5Pd7GCrRe6W4aHuBq6LHzd4ooC4RfQchTEoQ1srCes8gcQ4U8vchbR8hc",
  "key18": "2dpnDiwvvFDHcxg8Ed9uqbFRbDSq8m8k5dToU6cMEjS9JyvxCTqSDS9bo95anTFQJPKbwAdhUfqec52aukyNdSsA",
  "key19": "3S7z2Py9T7g7XZTrUtuz256GYwK9x1t1hqKpjPkXLPmwNRgdMbsYzidmycbfYfvCj7ctvybo1CXP7FgJY7jDQEVV",
  "key20": "299itr2t7trowNTQ2JSsBJLMyeq1tF2D1caGvwcUDkttmuhcrsjUscjSFNxaN9EZs3snYf9LU74CWazjKzuWrwGw",
  "key21": "NymqZ34xfHJuT7CcrtMz8R99VwMPaMfauxwPfSBSvksD663vEiAeiVHgZCA2benL2w2C318wd5YBS3igfNtnzkk",
  "key22": "24ZNfVhy7FC2LKevvwTgUNCJFCSWRXsu3V8qnUFCy3F9NkxPeRmLZtGD4ZnnVc9SHniF73aaoCuZek6BxyPjgfQU",
  "key23": "x9VWpQ6sdDU86nzAaA5wru1rquPR9R98hmaeypGUDD9ok4N9L5JvTjgmkPWEBQDLpoPTrNjxfu4gtNCpuspzsoY",
  "key24": "2EQk1nNxWCf2LBZwFEE2rof9dWN7Q9HeErJdNxoFv8TpMQRP1pTaL9HS758KGc3aASFxMA32N7G8g29dP4soM4q4",
  "key25": "UNDyW9UX5DKJNcVHCpqXJyXRNTrSGVsb1j6jq8gM2Bj64yGLgCg3SxSXNgvr1yV9mmrzJh2jPHHMLayF78rqWze",
  "key26": "3X9APJ4eJL9vUiti1vJhJusLYKDj6BNvk5WQ43bU6zoftYCUqRyZYWKeLo9HTQPgsHV5ck9ZGmw823mSV5vsaHaG",
  "key27": "3mEYaazfAZC7yd3nupzjGKa5XoT6udC3yfedngR5UZ9aqWZj3t3DugjcVBQNEETCgSGk5kE3dgw8Kg1G8c8VjRZF",
  "key28": "5PDWJixxajAeMYU4PVgj65qj8aYTshme3LcERXL6yx6umTwyJWy2VBMhHqP62p8Zzz97M2BoEKH38mU1qx72zvpB",
  "key29": "2dTRrwWmuTCUgSecvqy9MMUNRBxbap1ZgWdedXDTfkxHQeLgtKmzf4jouArEFgMQGqgegWjGVU1yXwwbxdfxh3oJ",
  "key30": "49q7x8ovf2N5r6zBPk9rzP5ZNX7ChmFxtBXhZH67qu9uuAHGnXfG912YicXemYmAP16ucT3djy5sTQLgBaqvA6J4",
  "key31": "2Qtv4yThtoAi2P5CQygk6eL9aBWxjRPRzUQzbwtA8Ce4vK5YJ17UzinWAEnN9vLM4gy8hjnaMaLT31FicqrmJBVx",
  "key32": "3R5itBYzDwo79zqVFv6JacKKButAQogpXEu1ArcFotYnoXfSgGgAGT9Wn5yDko8aWRY9D5Y897cnecmNYKy2qoqQ",
  "key33": "2TGMtNdNUvTJQAuxpos2NkNzGSu2XLcH9avP3ZikXrnQquz76C9DRyj2CbDrMh6iRFD5RRqm9SYmHp617fL95228",
  "key34": "vXZXhF83F2pkmtEtJjXUYXquokoJkifQz4ocNfr51MkXevWPjBwrCSk5BZjJR4aQKGYSJg6wqYaY9QJwVHUNFLU",
  "key35": "nKAzDuaQjQWhFzCcug7NQ1k5bAf4rbsCHBx4zpUQ7mhTQbjAGAhZ8evT1wHo9FiJZrU1bjJrRmYocDh5JeCELoJ",
  "key36": "5BBbD56SJJ5ZCUmFCUpQjdquWVLM3XzZcsjLUjnj4RywavfafPdauRixNDD3eNogb1hFfqLSdsRPtkNQyy3eskfC"
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
