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
    "5CCbGrp3FJWbpXqY8BcrpuBzRgVh4UrGuZjaFsAPQ2mjCekiJQ34tjpyo7ja3K3VMHykQmSEsfzeFPuSAKQMMX1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPYbZaqLHzN1Fy49bRzaRJu3Hqss13RckZY7DnGzi1MjdMu5GuQj9HWvH1yNxnVE6BLnsRuu8idieN8Mg173LpP",
  "key1": "ggk2xq4nM2X8XXAutBq7to8QoUCWp7FdnMW3fVLa1b1xiPg8JLvCi5Ck4huruGakqKHzodVXPuDTyC3puW1KvAK",
  "key2": "42M5a8EEuR4YwsBBhK3LqHSivVtTAvAqM1w2YWQkGmW3eJXbav16W27rdbj35NRgFBx721EQvhGVQxMt6iNcWSGL",
  "key3": "Dq14cNH63PhMjEn5F56izLkLJuFPSA4U1DJrPWQSiLJgqySAWgchh26M6bWoMRQvyuvZWMAsnTzPB1SzELfuoF1",
  "key4": "3WUpyrnFgUvE5dD7Mnt5kYD1rSFKmqnRJe7ySasDJWvVLdn5T7peawUETgTtZMMVxjFjgV4Waibado5fFUm8SUGV",
  "key5": "59UPUTaco5kajMb28gvgb17S4Pyyc3QbK9gnLcwcAkHXnggmbq7MncBVzr7dm8KZHLg2FqBfzynWEL1aH7k3UaAg",
  "key6": "266RgbmvcjprAioRsxjfcDbCJmkja6eWJE2uf8WB9nZvPx36Lm58dn2uzDYZbNLjMM84LE4i73g9j5KAEVK6nWcG",
  "key7": "3jkAq3kG9BDjP58Xki6F4qPJUHtko9ULbfnZ72XKvzLFSnGHVNBZW5irUNL6eLVBut8FRnwyQyDmHCGD85zNBs4m",
  "key8": "A8SWPmrktuCDGcHXAD8rZAh72jDLSYFKCwZPpKMujET2RvfWsZMgm4PuXUCrycTYtmmbV7BMwcxbgzX8KxTGiRY",
  "key9": "QFqFce62zaxBJNPzThupCRYcbk8paJhdi8xZEpQ7FsV5b3tdzp8FCU1Sb9pekShoUEtrU26SDz5W7WeaotuUvVh",
  "key10": "43VNdcgAVUYFJvgP7vuuTetHVzson1y2379XfuiyHKCvAPr4RhPmm8NkRLZWwr37FKsi1XvUUYWBe2pfwpMLKxQT",
  "key11": "4W9bAXNPaKxQgzauueQMrx3VuH4VjJCu9d3ow8PkSpfqNx38iBYbG4emcui5r3puF44aFJfA4s1W6kdpHi8Zryhh",
  "key12": "3A1Px9i7iS3BqQhrNogK5QhZQrGWPdayWnQAwh9wnPCgxDRJdY6ye8q4acurnhi4itLAX6DYpkA834uravN1FDyX",
  "key13": "5Qb7ZTWqfcpVsP4NWMw7pToeKxJ9nUvViXs8HCNoTn2gufiDNxLduKVkoYFiEMST7PADstYefuZntR5zfTCarUPf",
  "key14": "28Azotd4cGTCPY7Epta1SpY9cQJXM8DvR7nW4xk46LdjhpKd5PoM5sk4MkUHqNmGgQn5CVhUw9VSYhntzaMtTqW3",
  "key15": "4cSTxeBZMDnRXE6MbNKeUj2uWGnwb49bXW5royofGUrNyRT37UpJMMqGvbif632SYxpQEgDfeSS4TdRnsEiSFktZ",
  "key16": "3MYZc7zRUeNi7JW2p1PqCwS4TjufbaJzAZ4SPjjk9wNQRbYsmFQ4VMCQRnRhobi2ouJ6BqDhQMeiGACGHoz7RzxP",
  "key17": "LCdboAT3sJD2Ufp8t65eDqro3Sr2qpAeYVT6HtPN164FWTgK8ku9kCw7nAxktq8vvTvKVTAMdQ6euVBULB9NzzU",
  "key18": "5Cm8Ho1K9xcz9q4ryKoQm9nE1KmpWxC2afESzBSjSAtzUokSJuGgSQCAh4GAfcw9zuW8dUcgy5rztMfUfg3tMPHU",
  "key19": "56a9vfKJo3RoCu3EsTFUV6K8BJL94ifDqN9w8UJMqFvDXqxX4KXY7JJtqKDjcrKx4KN8uYES4pLv4Vye15F5CuRs",
  "key20": "5mDVQugo3HaKMDeXxQM4JGvi9xuysKS9FdhmgRQVbHyMWju1wJUep7bAuxkJhDfomgT4yoQWXMLdXPjoYmYbFMxF",
  "key21": "4a4fvmQupeydLhU478Uz3LxpixxsdbADCbK5fspdPnjhK2smc7LUdxo3eK7FVcgWyVHhGMDtyPVCy2nk8teihQdq",
  "key22": "62SmRim1rd7Dr3VECKP31iPAcSy9eMrSsgYqX6kCJfKaG4rk2xA1fPp9wFhsAM9mWzo7tnuyP2Wkwkcif6Ph7xXF",
  "key23": "ArvuNuDVyjfR8N4hK88aD8yUYkuhX6vGcKtqt2FQKvUNncbeQuZau3ReqsfSzb4i8mEZ5cCgafAXsShfAuj5rTX",
  "key24": "3mjipTvz6z7YSz3zZAMVtTX1UQ1B4khqrPQ3ZvYDG9uaJJ7L53334aRUXPQFsB6QVE68nMppzyFMCeFC4rnQXjT5",
  "key25": "5GcaFgbMqwyJAgGLE5VtKLjmyNJn1CUHcwuH84vLs3AjTC4E3cWhdW3dCfttByp4cefQoKFLAVPyjz3n4K5bhWn2",
  "key26": "5RejFzZR9iJiVhnPWpWFKVrgMQ8aoip4WGKLEPKxZj7piy4p69NuPtvMD56kM1Ry1NMsVRptEiFHWx7VnR5YHviz",
  "key27": "LAjPcsuSxgr5D2MYCBnb2MCSVTDfmwB2V8HGsEc65sLHEo4JvTEKR7qwiLYGjw9EAUTZ1G2d4rYQZB1QXoyTFgb",
  "key28": "hbrcqh9iRcagZPbw3q3ZSG8tbodkctw4RXzC6oZYfwFK2ZsdKHn9hRBxMPYD7vkLGGzZzVbj4jiz1ybnyQqCfEZ",
  "key29": "WaL6ZRgb1C3ptSyZMRRomikbNUh4THoSZbtUQP7VQhuwqcqYDtq77NdzWPKNdpHgTeL5qRGZn5srcHS85p8crYN",
  "key30": "4JmNMGT8JkYQVEHcsLWAX2Y9qfJZoCzKE67nLMa2yRfGZ6z6Pe6DbheWVBxWk6X98PcmaX9SF6AYu6dSJ1d8hzzC",
  "key31": "5oV15iEA4iZNaBbdFAM42C7275z5BVRAoT6nq238o1gMqsdmvMaEpev84gBUPnzkRuFmauitBot2xeCeenAoTmF8",
  "key32": "3doMqzs3b8TLyNCCwmorB32CDKGTa9U54ZTpTrW4dohf4hxi2zeHu7Whdcaasw5jogZTPFpTuCrhYfnHoQA8Yd7C",
  "key33": "8iaXi4hKUnUFo1LLrsKuPQdyNviiaV9TR4eWv5hqYqtp3eki2NSjrYsgnMKB2uutG6htufK126RCFgQZ6dMLvDP",
  "key34": "42NV9KJZSNc4NfnhfRg2ABw2CMq4wdYr9oXzhJpXEUqdH4k4vee9QMubsH1DQpAconwkWZTCbWVEhszqVexTruMT",
  "key35": "5rVg76tA5uBhwzdp5YE81pNfptvTwNKUg5bU7j7x7t6Zkcc1RuXgheu1hYFWQyCQ5nSPhRm9r3WMTa2rFjjDUa9C"
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
