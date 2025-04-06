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
    "27wM3iKetDVRzXrbpLCcNFyfdvQiLsa87kHbi6WuuByVQysJ56pF5ewuWHktZyT2mEEPgt2uaEfDz8WURpxh6yBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A8Z7iqGPxK4uxjjkYSMiFRvEaHWsuGY1ANPSNWhjY1kS7DACfsDHHUiLQQ8XKHoiw1RkAP3KEonmZohvi8cDN21",
  "key1": "32qd8hSmxViSLCF5YZ2T83kjU3ijWRbcsoiWAextLGueR6DuKujQQkYmPYg1ompvnMqiPGw4G9Wuw1W77Hm8MaH3",
  "key2": "2zjnfNVtojd1GnG7oytPg4TV18vzPVGa5HcnCDVmqBBrD6vNdsh8jtAApLDuTB7YPM2pStECVr35r1brEGApy8s5",
  "key3": "uzoSWpGyGNAQvmF39bToTzWKU6oC88TaXtTKqSsvNPEmwwgAEpLRMJsFapwMtJDNgeQzYMdQ2QxyaaDHDMzBBT5",
  "key4": "5KuwScMBbzmZFAfrWNyWmxfFrxxLD2hCRSjZi9opPBRZrzR2dh7i7uyMaBxyCM5pVtNyhCSEUbsmTdUguPrxAG2b",
  "key5": "5DzU8VgkzRTWwRqnwM15paG8LQVdaFYC4BWDj1WQMNVsNCgAugoFbRsEWkFmkLEPQphjVnCKHjeZa7qquSp5RPQi",
  "key6": "2AQ7ZyiE4ujUU6aMgWK5RepnooQEPdJakZAoMvPVbxZxxYxP8KmkYJcSvnMWiaGqz29aH2Zim4i6rQharqKR3B7Y",
  "key7": "66oD5RELQyZFzqHqvzZLhtPvNqdzScVBQfHPiBZ2jCBoAcoLMqcURzFyPwKFqjvNPkUAmLDLnnRVoyu8fkaZZZ3h",
  "key8": "5dsDtcHBFurcYu33osc8zyK21WacDmJGvNVqwb2g5F5aEtz8PpGJGt6cmQgEWd3ekRKJLx16V9qHSWCa6jVHh8aY",
  "key9": "2JY8Gz6yMkJmQ7JGJ9Ux9gwTgjzdgGDdNtcMCMbNokiPFaRUQn7FXmavmv1p3yeW69xwWvU9MkFB2Ltim9pstjnJ",
  "key10": "fiEMTW1gqyui3L2k6nbnhjVzE2beLArqbHny4AhJCGBBEi96aRddamsg6zeMRARPqDNdyvMwZY9qHqVDLLTPb94",
  "key11": "4BKswwwXJ8MuyYMgjs9nMPTwnR35nLvQAcYz3XzMeF1gMRCzqFxLgBg2m3mFJYctrVmW4Urwh1SYiyYRfFm6Bd3o",
  "key12": "4ceT1bxaWRewJ8QwNUL7RWx5L3TLmKfWd5Ts1B2ea84GoCdggzN4zRrscfvkf1yW1TkYpn2pbkhupcSgf9oCMQqN",
  "key13": "A3iMJNcr11mxYZEwYFDfprh84iMcm8Nw7HVBDc9uxLfHpJibnbgHXQpW5CdzMehnWvD13vQ6VUCiN5ymjqXJkuy",
  "key14": "2UCzfcZHDdmYaH9GpYJWRm4y4NedZpT4QxwG6Fwf3EJFpQm5wKCMZRYhE5Puq4DKyVG7phhTAbqn9LWZmKyssw4x",
  "key15": "Nrdea5dTR9zs4DA3Hz4dECpvPcXVKY1jJg31j48YWjRknmWt1inMB1xw4g2mdjjkjBWPvQyoKxfaGq8XEbLkcat",
  "key16": "2KDvcMjXy6bYMd8MULbjzxHzJzgjCNfpVqknMpKfa7d8zQeCY1hn4HnobBYYdXptSW73UYmVNN4R7Zq989HJmg7e",
  "key17": "3kTEhTJnMAHYCHodYwqiZfHrgBmhARyzZD3So3h39Nh6mymtpygTWCDqXAi6qn1kUDkMCozFM8rt8GXzdwrZQ7HV",
  "key18": "2ADh5ZCUeEdFLCtRiXN6ipjUBbeV9DsHWDxJGrZopxd6kQtJgkNvthpVgkL8T3sNpAnQJutZgRM3WtX3eqHURT8w",
  "key19": "4aNE7Kq93syzWDwjA14dkJEan7YxwzVM8hMR1SrNVub9uBT97voXrkMwB4Tw6hGFPcjkErfcpk45j5oGBypPzmWq",
  "key20": "Dc3dpsTBAKrzqEgbAvVpXzWgn1vqRTSwUwcDaWdSKCY2CPbkVHcJJj82te2PU1ecKsGzxQSbYKDzAU75Ru7419o",
  "key21": "31AMX85tXaspYvx2U86HAZNBjYTkk2u4M4NJsaFtxqiGS2DhXtoiSEm5gRKKsJGPNk5kLEBxN4Hga8QmSvjw6G1k",
  "key22": "4Ch1mTHMDkdbA1wWVhiF2uzwQxPVF7F1Uy5Tx8Upnrb5LFpxu5fwRWYNWWrZ2xQZPnLCnJK7jEK5ybrm9Q4otVDL",
  "key23": "wjMeY22rz4PvYnY5tEPui1NpTGAANGMeFfm77JhHT2amp7a6Dvm1Q8VS1vGkp45i3AWiZaveAEUczb5PbDctKPJ",
  "key24": "ziz5s7Wy2DYVCi8rbbdC1Cn9y7d6q5EnMJwAHQ45dFARimvfLGcwZa2WnjXipTHbUyYRHLF1Q2fXDeeQBUtdjnC",
  "key25": "22KwphssKykrAe8DMHdb6R1D4fp6qxzskmSPLpx5b6Gfhz9y7ck8EzUb9sLN9xghgKxLpGtrTsUibizQtqwbs4BT",
  "key26": "2DZnK51KrMxFToRF8FBVBECRT7W78UnPWjiKSE6TjLz9vYdetVdfX4LtgAUY3fnqHvJciZT68Kf7puxGNCK195dx",
  "key27": "2pjRGn8b7vrNp33PQzjMEGhfrYKx955nkt2sxdUMHFnjM3QwDj9Qz6YyPn3d959wauVWpdo5AtPcW6LV7oaGGgZ3",
  "key28": "54pMgpRxekLyviDcY8KXKwiTXfDaoR3bRrF3A4AdSsC6tnAS77KAeEybxfpyh3gNyrUhWN22RNkeEAdhZLeNSFcp",
  "key29": "21yfmKJ6QZQf5QHAy8d9MP6rrwTWsrRgedWjvujEYQyMEycrV8Qu3TEtQHWvJw7WySzvUdKCGUB5BBGXaRBN7BLo",
  "key30": "3daNYFLCDUjqJbnQacHyq3JKz9QXeUS2CDs9YzfV21SNMLxue1idccc7Un8RFv9NKEkyeFxB9ErEHt4vNwEcweYu",
  "key31": "4sApvaBJhyEuCVNsmMkVc7WWMvUefqyTpG2SrvYwTMRmVgxFwiHhymrG9WLS5YxyFaCY4TTkATUAdMa9wgKuCNF4",
  "key32": "4asZ9YZEXJJxhY8ctvqu1j3W3FNyu2yneLP7KTpPRoGepzkwT5YuFKR6Xun8WmuabfAuvcyWhy8R8CAqDNHaXgpi",
  "key33": "59giW5ZmXQFFwGg1cDbqVAqaKT4ekffNPnyuq4agGYf77Vr9odQLw1AVmg6BNV19D4poTiNWLbQ7hXHAU31exYxJ",
  "key34": "E33b3fcfJ7MvnMedPC7zwFgkiHMxRboGZfJ6bnm4wTHNcgd8gTFKDBxgSJa5PXM3RuEjEzWhniRBmjVv4EuWFc8",
  "key35": "26BTq4xTcBYNxcDY5EFVHHTJoqXq45t4eCWZAkLiQnKLdtFwcSgJRBZGH5o2z18om8mpRocxduNiHQanDY68qL6V",
  "key36": "5fGfqE3vuWBNkF4qspgxdL4MHngVjLqnMYZ6e2fDd4pyF6oymNUxte1WgGS45jA7hQ5HNtf7WjmAEnZrumz8xwpN"
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
