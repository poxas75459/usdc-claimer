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
    "43Z8zimLCNLjPYg16uVBWbjPjBeWXva7gCmcU5ckxwoXMTUZtk6Uau27bo3ForPgYtwAZJMHXcCJp1CkZciyg6iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ogrpQEoLgHjHoXGo5NQsCCLV4KzG51EGXomBXhgnGxqBBXAYDbBVD51Gb1CJKFsU5tUEX1GGx8s8XwnnqnivxPS",
  "key1": "65MNQ17FeCdR1hXZfiDDjrEjdduKipFxRMEjrN8WJ9GNxbcgHMM4ExZ4CNQCWxWp8j27qNmmADcKDvSAWmYtvqwd",
  "key2": "4FThYD5RQb7MiJ1ayZjono2Yv7XM3ihDnC633uYnnrfFQchP4b9j9xxgSuus7tjYY6vcfiLa52GxmXNV7ygLrF7S",
  "key3": "5eF8iKWpsrQC5NEDMcuomMRmzcnWL2oeL1ctzbQsQBdby7T4TKC11cqGc6m2Uui7Hs5K2eRxSnBhmRdLGsMpskuu",
  "key4": "4772xXTHh4KjbkzPSnvgvHDfUoTUCL3AF6zs1PHUq8m37S1q6T2cF9Q4seKDjpMrnmW9JpBQu2mojmLv5GE3V7rK",
  "key5": "3afwgaRy11YSkqYRbvJQ2fdH4bRGqXZczUkWypRfi4ZmzzKVpQjmL1xLyTw4tTeFBeCxoz49d13EqEicV6dhMkYF",
  "key6": "3XGLQPoEUgF3oBRo4LusGjnxWak1zDrN5QTHznvDUoncrTTfXkdSqGnSGGvJqmLZS7ZJXXveedY25Wa76nthAxTN",
  "key7": "2JkB5VsczT7UvvR2syG7YikAzSZfyD4Nrp2HioAbswF42pZCVR3EoyooMQdexXJvB9icrJ3MKBBCGn8reLSxcPpY",
  "key8": "5kEE2dcDajZBXcyTY6Avu8z7jt1Pc7A288kHnjnxyVRXxgmgcEbvZXR8TpmBLtELA9HRc5KBoWW8NqkJnNH9WX9z",
  "key9": "3CJf5ZpdSfcQ2ZTtJ4tHi6HsVAXnocG7Psd253RwtTMoUVrF3ojkWxurW7n1Ye8ydzySWC5GX5SdXtdupd2CfWaC",
  "key10": "3aDnxKFLhhw9PSuyswE7n3xJoJ9cvEzJxiHYifjvQ1b4UvAJyd98YFEA5TLeTQYKqG9pz2yubKC2wsDFWihC8Tty",
  "key11": "Wg9UkFR8XvHJjyNjfzTM3o3kfcxvzntGJ8ZGfv3ZPUVBwFqh2HGZf1k7gsgMDh1AwxQvwYTTdZPY3gwmUC3yZSw",
  "key12": "4ksnfitpo2UGkJWoKbNjtRjWQuyZ9RcUofWXYcGUHpH7Z289VYSDtpFmjyXhQfWoyUQPz5DmgNoNCMasH28b46BC",
  "key13": "5jyB7m9782ujs9BQtiAX9zwHUMFEVmVDa4WYt8feTiPVVvAjre2Wex7DWKxRUa1M3hTLFjEbyUvwhokBGGHo9w8m",
  "key14": "3G5a5GpPUjc6hVrEnPYAZHAVbVyRBvM7Qo4XouEqCw46gusxd7pQtLX1SuHyPYNbVMa8CwMeksRMPWy7SCywqzKR",
  "key15": "5SGqeKkJnK79nHBHNjaUxhPypu7zuNdyMakfhZkc5oZv842Ji7rHFmxt1nxE8f2cFKCa8Z2Let6mBUhcLwKz1YsX",
  "key16": "4ioJLcD51A34cpH2Dsqoap4jYGioQUZHh8bv6FixQzVB1VXyfASMUjfgtu3tyj3NuNNKxQYntMjzeLaGB5yeEFuN",
  "key17": "3UFj3uez7s9kZyhLUi7AvWobfv8mGLmazPnKwaJQqPSvje6Zt6SdzTpAdaWwgmVQRM1tjLXCxDuuDT1Rin8x2zQj",
  "key18": "2PM9xgzc85X9VG1VvVNJAaoUmd5EHYmTsvsgrQsJTA4ubpV4U5MrEHDhH42BMq22CTQ162MyBkMSvFrNVVWmfCVH",
  "key19": "YVPX1xPyjcPdf7WT9f32sdiHvpGR2XcerFGfHeB3mm98hRLtWCt9NQejiRde6PRnRrXBz75msJAx78trFaKzN5L",
  "key20": "3DMggSwhgKsBvLzUvskQoVvk3H7P6DkNiGUEmiUbBTkPmMXnnREmc933GbXHjNamLST8eHFM9XpKeVG8XP5gNC8B",
  "key21": "3Co3PtSkH64f6yRZ1YhLyQY4eZhSV6ekGHwUv9UZ1CLk6dpZJiWrXGh5qdae5rKMtMwG7Nvz5MExDmS9EiDBS8vd",
  "key22": "47fvA75oXoWh4ff1MGhc4iLtUt1rmwaFgrkb7oBozqRpSXB1Gyv8V33g9uCvy11oGwBV2Lh5Bon4KwuXse61Xj4D",
  "key23": "3bX8SaU4SgXz1SFNcHYq2ZAKU1BWY8jyUwEybiUFZYeb1X2DyEV9Y4onrxb1vwL2Nbp93KbGQtsR4ZQ7MFQRqVAn",
  "key24": "64vuZHrj3rVQWAi5F1Gf7vBS4XVe61z9rQqk6oigjBaE6s13cVX5QUCeax5wJKMjkGerfXXQCcTTYKH334RNFPaD",
  "key25": "rSGZMoDWrWvYMtiFGK1xLp232fLvyq9Yz5jD8MV6U2cvsS77HGTLNNRhRw6GoHyMyCxLqqfG8bVL7mb2JtdSMJj",
  "key26": "47KrbqXKCaBmR7r2Ae6XAojBZjDMoXJgVU8aUMsXV89TVGsTe2QbjGyeyfhk9S5uBRNeRYR3akgzg5YLhsXVpyE1",
  "key27": "2bWF6PrpiZGXCmcCA7dsKM6m9grS4s5WrDZJDdeCDd5cXvruAForrQE1oLgDurMoveqGRowySh1rs7B7zQmqfVpg",
  "key28": "2vN8c2wHBCvXsN37Zxd7y5SjkaZUmFm7vTMutaocRk2j8RWpGnDdTLSbJ8cQm3EpKwpEre8orY2z288ZKgbvbiLJ",
  "key29": "4YRV6Frm3Gfsj2XbpNFzjMwKh3KFLN3NDBBSSY2rQHRhXdxdXEAeqPMerWWYKXSJ5Q6UT8zhc2zh363dcUkWUWz2",
  "key30": "nFH6f4NUZFmrPmeP7TxA6HHvabk1ToTnZzzKT6SSXLZKFmFY3B3S5GP5K2YN2b4dVsGswzW4Pf2ioSPNwUUPQ6S",
  "key31": "2NRSwEvSeyUcYkbzpxPqvJfvvH8TNpzYEfE3ptAwEN3fdR4YneasvPnmCYHjeqXbygSon8XvEQSiL71AfDU5yGq2"
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
