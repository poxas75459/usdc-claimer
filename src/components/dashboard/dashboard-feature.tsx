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
    "3R8SpyTfz5bD68poTcu8hfji9kQ75AJ1H3iynUHmrKdaejVHtSPxWyCLaJVtRpVEAvkgaozosU1ms86sxyywfWYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNQXkDfWSLe97eR3K6QoSLf8XZDjrWRWJyQKZWan1cNGdgXKXun13QUbwvFHD3cqFodxGixhbg6q6ZCKp7dnzao",
  "key1": "uFTPLGLo12rJA2DkrtGRsqt56HDnE9q2K2tonYSD3qMpgvENPoUpSgn6YGH9hLE8CAFoCD3cUP9Jdo2FLKmTG6G",
  "key2": "2appRW6Y1n7EvB99XAvTbjJbPQRJ9522qNX5ANuAtdB9Wq23CRpNWkyT8ZCQkWpg5sHtaviAaPogZW6m94NfpjNS",
  "key3": "26WwuBXEDNQQXoJ3Sw8kqFaXXyQ5jrVUTnsgjV22cTi74vA1QjeGMhs8S5kj9c912younrm6vex7ehct34c3MCkd",
  "key4": "5j9bEUnpJcHUDBfntdpMmFRnkuEbdqEAqxoV52Rsw9roRupawMY8Ywi5T115xqzxDmJpoPhrbLZxQmHv3RCJUtVZ",
  "key5": "5j6s72fWkdC59h7nmkjmuQ6iqQBABqkZR8jQbXp8PynEJrLSrcCPcTuRenfbfi3pGFu6W6imDN5buJaGouxtkjCy",
  "key6": "4No8SFcysLZ23LPfkkeD1R1TU8Gu41aWWuuZ2kArpPqrRB1fyLjT9nZNgPEF7NCB7KumfcaZYiWq48vPDSbc8mKV",
  "key7": "5mRMzswE6w7K5D7b8kvYAtKcrP23iVPFACxReXNWWrRvmh78rJXvNg2yb2ZEZboGQP7uX4KNP8Xh6uzt2DDbYRPx",
  "key8": "3aSwDu5dKPuCXzG9GK1WGkX8fPY2f7pfchdespL3iJQM4ijcH4xM9Nii5S1JTkz8WVNYYp3xbKKi4EfP5YPaK5Ed",
  "key9": "4Dqa8BUXqLg23fmCJgPHVtPX8dSkJrw6ajWGUuucbEsRg6pfVMQVLtR6YCTFEFUbhJbjfzE6wJZryUCe687hKWw1",
  "key10": "ceVwyBBmDWzxoS3ugUCeNnP4TrDatRFnhN5SGkFhrssiegAiAHU2siiwQMMLYfgf2KoeMrsDhUDDtckUVsZi1QS",
  "key11": "5EPswm3y89tcTtyntLB3og2mLpsQW3QFmkkabhSYrGPwi5CdWhNYNyFZqs7XXHvg3o1298MvRZidKusWg4JytaoB",
  "key12": "3HfAr5UveD3PJUwWkFtJkfjVroq1SFRyBYSByYFW9HmpaiAcaTiW4EJHeHiVbGx7BRJKPPeJrFTVUmyDFpj2Exbi",
  "key13": "2hhQV3tvmsG9otrqxGys2oXhmTczx33RTSqzXqTK3k3DTrFpK3UffbDJCrEbDwf8a9dXtLL5gNCGNoMQ7hGPsCQw",
  "key14": "27TxyPdMt8Gek3MviVkrCNKjbgCbpfTofBdAaMneQTgJcb1b3XkCmZ7gpVJ1ujJYuYWrVhqhuWUhkpMmnAyoAk8z",
  "key15": "5vsVGHEWGBfTiAqLnbvx73CqiMfW2uNptuDq5AcmmvQc2hsia1f4JPE19v3AAdY7VNhzY9XcPV8vzT8ko5AnM2eC",
  "key16": "4az2e3Xs5ZmQrYiaHUu1A29noRm8BBHXzUiGskKZkcw1eSNVEJk5zKghBTXBPtxFrQ9Nfx8terX7zAf2VUpmaZMD",
  "key17": "2Hg5nYW4HmfzKXjrx231Pu45LoJ3YSJCErEdnjFs6rDjBiBLsZtXtZCqWjK3xJCPgJx7jkCecuVBiBtNmLvEDLNH",
  "key18": "5AkNfWckMbLk3usmoM8sFdYt5XbBFWZvuowkmyisWhetoAL8vnWsA3YLmnhTBXtHBceoNCkb5LFSCD3UTssGe39d",
  "key19": "2VG3FHQNJXNprxETWXp9XPUdW7MToxrPtrzmCNxH711nmSA5gM73fUmML8LBrW8vGsbpkxRPNYZPqMg8KBVFHZAY",
  "key20": "NtpT4Arhe2LJiKy3A2QrXcPUZJQg7Fhh8fYxSnLWE8wdgX7chQYWbjxVQHSnXHUfrVYgoB7MgEpcs3NdSay2qG9",
  "key21": "21dzuoooiu7PTekg4JFemrxVRSF2FcvdcTDdwUD44B4kCWnGKpAwWUHGwFGXWm3afdbZXAFeJHuH9fBdysqLhPsP",
  "key22": "3nCnEaNgr8ipzjDqPDVbxZyXjLWg5fDamjnmqD8dtFibgg82h8Tw6fCdB2HoUU2w6quqyJkme3oYMA2xwLCZ2JbD",
  "key23": "2YUgsKEFKAGeypRiAYTz5pTeWf4GctpEd5EYsfAhcNX9awRSTmfpATAEvwePkLsvszyW5tcFe4EMgb8Ka74XLPMu",
  "key24": "2hJXKWTrdhME4wHDWoueHqccnQThve3LeTgDF1ZPxRNNpHnrjzMpLi2ffeuZfx6PLgEE8t8VmLPjXXsNt4XeEzpp",
  "key25": "2s8HyUxiytZsADmfDCPmPSXXKftAjFYoNY1A3YkbbxRJsfxDCdtVXYjs9h6zdKvY2eWj1PZJVyR7gQFWyZeXhz3z",
  "key26": "JYME7XK9GjFiJaFFLs1RLryJZ5d7HW4u9g3DUTxE23nebfTBtXnkHe7cxdXKyjTuygB7p7GSECHB3JmSQBgAkuP",
  "key27": "3KSiPLmtoux9uNKDepcHa9ihXmZQRhTPj4PpgCLx4BFVBUhow6C5DqCe4YT3m9nARDCVKddus1uFeCSxfYwMdxab",
  "key28": "5iYYwcZTjxxa4fikdWYbpU1hdXHhQz3gNhePCWTXDu29nasMCeREMHZqzG5VNZ7Zf47H7b4gLvYCdP2ewsotoUzg",
  "key29": "47TmULNQhdduJQUmyWSwXEvYhgXTpn1qMCw6MhYbMHv5eP1UWrXfDC12xH9SNkFfEvvPJmXQMTRFJX1oCykvvU4W",
  "key30": "38zv8zWVvQiSLXsM7avJHL39f9UkvwmPT755eotLKJurhNxc7FhhzY4mW4DwcHANeagpwXZSZZqgaR49Lgt5vNmA",
  "key31": "3o8a5E48baijEQSmJWWRr9s2rmJL8taZLXZtgGVQYjXnwRKyPZeXsb8FkH63XM3SVvxPcEzvA5nqcXNDhhQV9Y6J"
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
