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
    "4miuXarcif15DxbY2bz5EykXo4fdLxaZ2zbqWpysirTYLxDKAwP6jJAyiw32RRKc6uBxY5mXYoHu5wtY8NTTw3P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEDvdJABqjhnAhTf1G3pbvGnAf6vjPVb7XbwsUgks8qGCrBRtZdMYBCLAVa1irttjJXENUgTGFEzZoWxLJYD2Ed",
  "key1": "2hMS3rtGGQ2XrrP3LP74RnSXUDuUZBJrQdbLKEH1Y2LnAPa5ZMc31GXjmULS5y15MUXvYeref3FrnEz13SKzedY2",
  "key2": "bA3DoN4MA2FEdhZQFHcmotVpRFmxaD5iQT9RgVAxzC4X9CEW211fwt6xG3b6CCncRpApk4tQ9AyrjEi5pSArnvA",
  "key3": "438kE2vepUfPjxGEAr6UeMNFQ5e7zhaP5gmW6CCw1FRt8K1ho4pEs6eq8cuMsn4R4ratxg75eCHNkfUHdgWzxKFE",
  "key4": "5VP7BXrPKAqY3hZCBaGqA5VFaS2nZZuiP71YxZVrFMfMm2BvkR6a77LG1a3Mk8amV5dTWF7BtaRD6T1utRp1GXcH",
  "key5": "2MsDmfLoQmWfJkjvpJ8XktUsvPKkUjdhmmm8Ubp57surEPMu7eYC1QPLE8UAn21hsUa33RRfcxGQu5PN9xyiDvjs",
  "key6": "2y46aFhZ8AiopFSEWzbokZYH6mJ9rtTsHgnNkAsmyBHYEtvgWDR3hFtWfQXzG8fhbhcE9PrLyzoRgHW7dSa5bbba",
  "key7": "2FRgPhrnAD7bZmsPagwRX153jq1V8h1SxBjBRvAM93C7DfmwMiaJsJqXkn2Z4oN7jQiaKGA545VACvmPAmBdjea",
  "key8": "4brsimdp4cuiYDNixmKGF88XjuGkNRPYVscn2kcEnQ3hqPSdom3DJdUUvRPwX2qpyuaHx5X5R2z3tMyvYBVprh1i",
  "key9": "3vRKziLYGH6UceD3ZKxeBQYg274rQcQGLQzDwpHebVARo1d4HZB5mDc2hEtRQd5X9TBiV4UnKmyc5znTVhT2ynGP",
  "key10": "5m6YWyATiQDvqSe1HC4Cgq3j9Q4CMUXYdE82zLFZ6bWG2p76CKCNgtLVnNjyBwY1qEwxVAbUBGthFrBZpDht6nS8",
  "key11": "5HJfPpXH6w1uSrw6MASz3P8bz3eGhsSDQU6Q1zJoFRwvdvK6ox1ghjQpiALL5YrB9pesjCxWfG25omZbMtWg9maB",
  "key12": "2eJhkoQxEjiThpLZUAFwiMb829A2jjBX8VsxY5x28C7Efy9ZGn3ByTjkP7PsXFheQ3bU7j8LaAwNfouMzEDBL8Ea",
  "key13": "2FscpP3x7fLZ8kSoXPEf6d89U6Pa7yV2fDPtdQwRKYhuz7wiSE5thTNLuNuJ4MCpBQuF754AHgKfKzsEkR4FF1Yt",
  "key14": "5cWq2HE1VL8aY55suhhHxabcTURxZQLas6XBJuQnQo1Th5U7V1UWaSFpQd8h5GH8sLGEtEtJKBxbrR4E9CJo79Yc",
  "key15": "5k7XD1n4xFTQYBW37JSmD47z66Rot2ZoXp3FGn11YuaKyUDUznZhyuLYQqaEhTBrDrQJpkTdg56MqXvuLEhLxxpi",
  "key16": "3NwswGdzhAeBA9S7MKuVTMcMmTevQfZ2qk7sEPNanWg4UqUk1ioxNCvB6UUqri8qmzPfc2HXNEhL1TTodw6XEXAc",
  "key17": "xFPBX84YqT63Ak2tGnKzpiUazo9JUKVkzLZC12ETQUBcDBgPKKXsCNtFCibyGVKq7ZMQMHJwQasEgTrAps2uopy",
  "key18": "4Dds11vf8jbNEV7RyFe7Z5BJphPb8Gz2Xu1VNbXGLMMCPwm1Q29GbPyexVskuutyKVrCU4NNZcWzEnfqiRVfcW5x",
  "key19": "hGr3jHLtGBAbrWaRYFBb1zk2DZccnowAG6zTXPPZdd1SCjCe3Pma8t9idR9fi6CSCkRRNSQSSavtCU7ptzLzYKd",
  "key20": "KaLPV5U1Xmuo1kJi355oh2xVqmcoetHQRk6P6wgyxpjcoaCQZ3wtYvTfqHrgwDhnRcyLvifFd1vECtJgnGBa6E8",
  "key21": "2yBKmt9wAo8q14Tai38q2F65pgXLCVE1DwAoQWMXRPvSzJfCbN64mFfThKbsbKhrmpm2zT7L8GG5nModgnhYcDZb",
  "key22": "2AZnx3J7CzoH8EQr3F1YDEBRAM4kn4B49uuUNe6HzCXMX2BMfEE2NiWq89wkPVyDz6zga7Qt5eVZj9QYckN1Vt4L",
  "key23": "1bpE1hvkSd2r8gkmikF3r9PcvLQE8EQHv9hnLTqdStoQWGEQhpHq1tEEDwhrXbm6kekL3VRmKXKjyNsjDiaANEV",
  "key24": "2tHKpR92R8asTNRkpdP2DRhCqMva17i7nwA2yf2Pq861wPHyMrrprqtmAVCooXyNtVqsAaSBqr8Soj81gwnh43vV",
  "key25": "2zTGTFQh7UvZwbvA1VT3dZsjZm4UU8yfaQcbGmmKQEgdhpCNJPmxPFSvAhCWdJmhscJtjgmrT2AXotSNXpvSVozA",
  "key26": "5C2CKNewy8QFbwkKFmTQy1VHnB3LPQk4m8DFtUkGxjrWDX8eu3iD8kg1V1k2RVkMLArgvFHJ7uvBkZNQkaXHMgwB",
  "key27": "2wpqHXZwteMbf1Ph2ftGwaG4ELYZzskbF9fnG5iAXfNxpD1YUGBMdo5n11ssmPcqUm1n5nYbRFAGVMqcaCnghq36",
  "key28": "XSkTR1Ueunu3y2NbH8JgzauCDSh3iouU5yS7BXY2xvPc5SRFKBN4bMDPauJrN7R55iH898ZYsukXS8zpxGjyMKh",
  "key29": "5BETnJMncSjVjjR9YeBtpnS2LUhGjpcyiFxCdVDZrkExytDzp4Hy3ytBkNUiExzTzJpRxAWoUH5aRgbVYuQpxM2y",
  "key30": "ACtj6tQynNHcVamDAT4vyi2UpP3df8ydyq6RwmnRvwMYGKpAPkVHDC17Yj13xtF2gSr2YFgLxAuF41zVnJmfdHr",
  "key31": "67E2Wmf9XKP57vSEiqJYvxKjexeByGyyw3HAVZptFh5PYLJg1oGx4wzsLNBdo7w5hBoKJgdVu6BNJiKVH15i5CrP",
  "key32": "4CqGE5tfX3o5KTtSrJpzVjXPfrLgp5NZrfQVMja5gLAuMhAVK69WizgnMrcdZAk12o9p3KtbWsrspMMEM3FPU7aa",
  "key33": "rFFUa6PCvrmkxnTM29tonEFBPyu1CgEZxvN27bAQiegHG41y2gducQFpqKqzqtk3L2kEqGXfi8CwfBsrDsZnerW",
  "key34": "4d1T9SvBBxKg2ue1QBsSk5RuDLDWZS68txm6HkEbXZaPMjrf6iruDTSebaH4sheMfaJzbbiYKSQ43U5MQDsi1F8D",
  "key35": "61MoiW94cFE8A2EwjMQQY4Px4LmN31JbXuGerfeRUiyiLuVbp2xaQdpeEZ2rqU2Lg2EL9mhGpbKKQuyJJq4hVSFB",
  "key36": "5njZ7UJ4hyJKHsCadyoegRoCTe5qHnX7BmiiJshCREqM291QzqSkDaUZtz5tCGswWXyzC4qC5rAn6QBQBWNhbVkx",
  "key37": "np2WNavCH3KzQSHxbinnzJEahbKU4mtjKScKJ5Nnwvhuj9j8diojaNewAzsNjFZSqjQp4DedHQxLRC91qjeq6Tc",
  "key38": "5qV2PRwoCo8Wqs977vrXgPt6HXF6fYxVVZtMzfPoNrfuv6SC62QKcdaTdN1QdnuuTBD92CxuSrijJGgYKugKgXW3",
  "key39": "QbrZ9gJwcc2yHM8iBdaLH2PniFuYGgrFgPCKbe2ta8n2SAJSRyrHco9ncD26c2xizSyJqcGkWLvN9w4R6iF8rRU",
  "key40": "3QhqN1vQgbWmyxd74mZHLgrjm6QJgWuS2DY9a5e6kNdNcnJbkg5jNt51SjU9xzo7w2wf7yrdHFXpYy9AjR8LYq18"
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
