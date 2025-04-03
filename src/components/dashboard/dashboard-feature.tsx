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
    "5hw1SxBXPoeMtHL8oWU42YTN3wsQ2R2mdNkKVXB3Wkf7w7wdo73N6ybWKyW9wrkiQS2MhDEKEBp1ydw4XqCFDtWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNQTJPvqB6XUrzbBGebA8AE786xi4mTKYwNhV2xr3y4GZYACNMRKjyhg4UDRfUEXNynaLf6UgKT4qZCeunUdBeG",
  "key1": "5cvm7hHC8Sq8FPRLvybY4GE2jNyu299b4iwzMizxetAQWi8HMQFr27kPEUqtHpWNRVJ5sPCFfx22Wz92CEGCV1JG",
  "key2": "66kTwQ3fTfiAT6doBnFYDD3pi3Cf9FiGaLdW5JQ2ppHh7JDXakwJVs4HN4J9fEjBC7PGQZETwxDKnVzP1snXwKZz",
  "key3": "Em6XPfWz4TDrVqQ3uXZX8PFNRmoLNLxT6769CkXHmpLhyFscDPpAKtbFBGLezozNAmTbMFfRHCPPSDndZVVFs73",
  "key4": "sLUj3Bj9Gom5tFLSJ53R4NpQgragiJ2eaLU9WRPbGDAYgvemkkEoshSZXy1kee3VmBxqhrgpz9o3DYVjuf7stsj",
  "key5": "38SuRzvDK3UBMWcZAAc4vhbbgDBLq29ukY7xo3xxkngTNveWdrxBVaNYC9J41GrtpVvJiV9V2KjkNzdrmNZBndP1",
  "key6": "4Q3VKNNSxKCDR5RVztFsrgP6JDhRKEFPFF8FHZNGY4hp3Yqjs7SvjQ61tEAUDm8sw7esdfUu7mWqPsm8GieCmuBu",
  "key7": "2PGHMQyYhqNoVvLQC8oYZsJejf2TJ4fMTC6wBGZzQVkd42WtjVvku6nNKzvsnQuyT99KroUEWWnyqUxEYWGM1wnD",
  "key8": "2X329vxQ8qB58Pp6ZrGX9jeFGAh3RUgnQUKDcGMrSiD5WQUqPoY5aShFJ2aa11ts2c5cgvvb4KkY6S8ucDTUqwXs",
  "key9": "3kGbV65vfRaKWzoFnRW76FHTQMHU9mFT5KV83Veyr585sLZRbnqW7NQGSTDLbbsRL9eyswwxCoCmoVPw4p1Gzzk7",
  "key10": "Wb4Lek6wDqhHwSTG91ovuRBTssNFGAfRBKPSVDWk5PR3DRgDQP2iQ1HjuiUzP8v2ba8ijTL3RbLTtHVxNNoGDS9",
  "key11": "kJ4xDB6KT9yfmXtDkrN5edGN7sHrY7DkBvhZRL13TcbiLiGqC7NxSZQk5xRU934hJSUXSYF1SmsuWjXX7FV2W3G",
  "key12": "5WM1Y8JpFLKxsQnpx615ErAnVBQmVkrRka7DsvNtBqPQ7cCCJCyFsohhVKGF8WMkHDVFj4aCHnjRCJ5p2r2p3dkA",
  "key13": "4Kj9RWVLWFLupyqGXYfyEGdKkEULUF7iQc83icc3y721VdVPmyPqkwiWA1SCPsTdobJSEgcZYoKB2mPNqNCTTHZ6",
  "key14": "3rJ3EY2h49Dt8x2TRj6c3BLcMPSC6A4tGiezX5YekguF7PJnCBVgcgAEwSEXYzB1GMud55dybf6Ys1Rux6wfKeWk",
  "key15": "3XGx4MmUKgA2KK7pwD6RJUUSFzZSZRKxd65R32bH54nvnFW6BKQrsBUH736DnfuRduw6S75MVda6cv9WuZp6anzR",
  "key16": "2EiyyyphbxBtHFx4mgXKussVFQVKqEsDSaPVgrnpYPgugGCSfLCixausjujHhuVTEPASZcVexq2AgT6G5vNbTeKh",
  "key17": "5TA9eTmNqjNFhUXzfkMFbvFRbdZqnVG3sdkGi4KhkYcteoNozuiVSvAn7Hwg59obRjg7WiAP32dwMNHKuTUGouQo",
  "key18": "42jKLSAxuNhu4D2odJNLEK4nvyffM2zGU7Ronnc86Nc5DPZoURjJSaSvmk6monr3jSDy1CJnaff7Bw49PUgSEQeA",
  "key19": "55uguaaPiUm9i8NzaCud4LfNkAkrr3jD6XZnFBmRtfb5TvLzadhhQZ1Xa1eubZNQn785AV6UDeTh8VJnzs6T3mqW",
  "key20": "5kTsGrZWjDmj31eNWH4oiuSSFT118YezmZAvzNgXJUDH2Aerb4nqkdGt21VUsymLrajcgXR2nTKxdMX8tp4WYaTo",
  "key21": "G7ZyiM5wo6krFJkNnSB7TguL1tcFi7rpa3dCB8WpHDrfMGBogucbtanW37oSMSHhiXjeQeesxD4v9wf3ebfPU47",
  "key22": "3pkt7X65WVF3zxn2gzbqqVD324K1LpA2h7ZVQM28PJJ77mCosPtvzJRQFP9LGcyCZrQmUDeKg4GmXhhLrcmAu2z1",
  "key23": "56h5kHh4izogHa8si92tnMXoGSAd9XkBH4XYnxMd25TwQsdqu8uBGXQi7hF7NPanJVqeDpc9R4YYTd8GUGyZG4aT",
  "key24": "2XJrX2V6CHbvpnTfTGs3txQE1ZVXjRNDcCn4sxfqtWVt54p1aA7PwVbV5qKrivfdj91atPp6cFcwnPaT7SzqjEB5",
  "key25": "74BkDXT7NwyG6Drd9Rx8px7R1xqkCWi9JtG3GifMq6tgHj45HmbeVATpPBtVx8c8SEJ8be2A2Le7eDFZnfdfuJz",
  "key26": "3GrxcLegxvdg8uWS6W15Eiez8dZJTo2BtzeXa28tiLVdng4KesuBZ6eMkvn8q9vUmhREYkWxa9rEpPxAxvhraR6p",
  "key27": "3qbzoVvkF2fpnpo2fwMPTtmqXKDu29Co1FJdCnooGw6FTE1dYojKFipCpF4GBudosxcjNmjT2u8UZxoYtkppq1Fa",
  "key28": "2H3a2zq6gWWpeafckiPk9NrWLNP1N6DMKtQRAHVXUxN6jTDCYVKabyzxRKcDVXYFqvgtGj1WGXtEhAs9WbSLVEEZ",
  "key29": "2cSEYUVv9LFpJzTfVtkrMr79Z1VnXpXXxNYsXqM218w6SteV3Qbx9Ycg3FaUQ7JnAYVbX6Ht8Grv6h6CiSMEQoPa",
  "key30": "h9gCpEEMDJDE2DpxiQYWCFkS2G693XstMJtxyET5PNsfMCmfbUq4bWqU7hTmVNpUsQsFqzkn6FLH5QanPbpetBs",
  "key31": "5eDxBAKzg6xBCBjHVsTSAnUGMAnjX1k25ipVzj416cWQjUmneREXZTHnKu7YEfpTdEhy36uNQFukhET537R4YwXM",
  "key32": "qsk5793W8zqvx6B7ZMrhbZxQtyZxmkEmNqFCHr7mv7EfKjzbPKn2hYFJLcXbNrLfuhbU3Sv1tgRBEoRrYfCHftp",
  "key33": "2c9TgctK1SF3t8w8DWpGHDxqsTeFPUEEBh1N6hWm8iGHY4wjG1rn94Ci7qQmwDciy5qeJfppbBWtPBuxpyckFQ8E",
  "key34": "Hr8nRVZJzDb2TBLhvjTwYiqiLtTKtFdhSHbtqnkN6oXvtf6tQPvxCCSL9pEumuBm4ASJ38TqL3SpNrD5fhpatuw",
  "key35": "4DZu11PDTTswfo47nu937fDLsTTonT8jYUVBLs79tH4AYFrpt8DHd7KxTqpqinwF9QttTKARUbHbrAzqhyqAknjw",
  "key36": "2KSNgcJwDY3bFapvyASHkTQ4LE6SEaSKWPs4eeEd6LJZ9ug46gf6K64ZyJDL3G1q9B9DUTaWc5oGQtSYM7uASM14",
  "key37": "5DLt4s5d6wYLDJDzG5owVDXVrt3MrYar1vKPeWnzZatQ9DgDYqFedAc8EjKPJHRGtdnHoz7CQmGw15YEjEUTQPj1",
  "key38": "2Rg3V28rDUyovMSd8DgUFD7BSnXoaSr1jTgim84GWJCk1ToAitAurVbaPCw9DubNEjr7g9D7gTFFhMUoud1DDzzT",
  "key39": "5QuGAJeFSAbjLLJzrSmC5MZEZ31hnb5zo5UEMLw2LXn5nqP9ST8SJf633nCNT38UwUXUMcKA5ZdDJEtUZK8Z3qiJ"
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
