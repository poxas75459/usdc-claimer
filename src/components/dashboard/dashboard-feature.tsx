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
    "3S1Wa5GHR2KKPzJRbwmbrA69S7Myzqn4vhqtLXApkoU85Z42zgwjvAumpthikgWZLv9dYKjvbeDYZp86gmamCiVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwEFU5iRTFCcRnNPVd3oA4FLszUAHa5ccfgZZkDfg7es9wX3GxXRumMqDQBYzf54eoP53KPYcxJW2VZN5JY2Gg1",
  "key1": "31NmpTDUHXSc89GsqLDLTVNa77qyw8nUb87uYzfkceTDkE5s2fjam39AiYoGz7BiVfwNF7hQ95612CDSDZ9uUpmp",
  "key2": "6cRnvJKa1DDHc738y1LFaD4RQc3ghyfkUqEAiH4shJdrUA5STs2HGg13Uj4f9NWvU3wPynhGDfKn2HmeNaCTDyW",
  "key3": "3pBuZWmJkvf56zfeJEadLSxSVrifr12TxvVh59CejT4We9XRZPvyfi6rffsyWU3fmbgJtf9uyopxZLFBDVWrtdBe",
  "key4": "2PaH7xZrKivfxtiyLse1dYfMJQi2QSzyVkFMALamsP2U7Zw2fQn6robm5TRq7EyARwKhxtNogjSizXP55Rt2RueM",
  "key5": "nRYRdfzbb9tiSQi3ihFiGHruD3rj49ZZQv33McFZgSQGKZpPJfsMx5qqiWMjE18ni369on3aP2rK3Yz61HTFejv",
  "key6": "2ti7tyARaxwAuRTDZhBLr5xXAUD2WNjKpxwJEeTpipQBac9BqQbwzhfN6scX7fVbE8jDZ4DkWHbqC9TsHBfByXNN",
  "key7": "4cRvX2HNwV5JD3ATLCAS7e3wpkA22spg9cPQSqjQDdGQTnnKHqYpMzcJvbNRaK4T3GWUnRbdpTuvsu8rqsUkvUFH",
  "key8": "2Ea7qbwf1KLuZUnQjwQvnQQ8Nz3enrHTsivsvgaeWuU2bwaeHLyg4dTzjLyPKAPVYTUE4uRHJhHXriDkzXaU9Etj",
  "key9": "3SBTSsupua2FXYZiK9K8c1Xrf3HTMiKkbKfSnfJ4htzzMCDo8173CjAUufADHaFQW6q2dScf4j6sWNFLXC5dnTx1",
  "key10": "33dCweixYnjC6JxacgXjYT84ghoFKY4VdY9mEbqWvYGmRsRjNVsjshvQFKpJ8heqTmKTWEQBCqtUGGHA9vG12E1A",
  "key11": "4t1H5qxPrgPs5CjbBVY2FqFMgwoZzEJGv8KR56XaL8UChQtmuQetVmbXRSFDPRdy8Dh5nHDGYzrb9tBtD6q1mRzy",
  "key12": "36BAC3HbeMRLVvGuuwGtGemSZZxKVtLG4xSDctZiFd41u4KnkPCCC2RncTMotFSQ3SRQBPUsJYBfika693C1FUVr",
  "key13": "5nhFGQRfuhM1sVKt9XQwvCGHSbsYve667EhWCvgy9xhHk2FdcYKN6jckQGqQvLbpVtoYGCR4fXNjq2G7rGPVDsmW",
  "key14": "2JRdGFvoGCEKwwSMsWF7RbdmDSsHVKKYi4ZUYMot4vhs2P7JLV82W1QSg9SnJWvC4GpmqR8UvkPJV9g2fVHXjacd",
  "key15": "4z4589d1kMToDegQsRZjVRwKFN74Q7QQT1jYwab96WFxfcS9WBZ9tDwEsF2PXx9bBYX8RM8GjK9sCcDLzbJGrYLz",
  "key16": "2ZJQJhvUmchwJE4EGeq2PhfctYeqGCmGdf4L4ka4ASSh1Ax2nxYASxEwrVsd14JTbQ4ZM1AqWPs77S4BjTgagywE",
  "key17": "3Z1JXX9PCVLYwK46Skp27wcrHqoqUUPeo22MMoSwuwKgRX9fjPAz33Ean1Jmy6Vfu94F7mcbwKk4TL5A4ys9rDEM",
  "key18": "3njvvYa5PS5ZVyRBAVA9jeK1E48C6qFksip5s5F2u8U7XcZfw7CucvEiFdT7otDGXXTuBRnKF9LVdGGoQrCzUkFi",
  "key19": "5UKXrdyWrGVAvztSQ7bDYcDoeKjTouD5ZicsfVdX21TJwdsU6N35APrsFoLTBGaBXsmNd4RMLoxDm7x8hSbrEDiw",
  "key20": "4KyHs7LFkK5HuXTsZUuW33EnsypNTzHZMe1mYjNSzMyqwDfqJfFeGaBk3Qs4SzkXK92Raw6YHEA2BKiK7JuSjKD1",
  "key21": "51q479zHybA2NtHhsZmATHxtXiQDT7yNZnmYqr2j3vK76eHmKhQJd83wNyhZyWjhy4zVHbzDR2fctjoQQ1C2Gchh",
  "key22": "51Z5f7zy4WRYbUEWsUCycuQHRC7VmrLfKt8qvUw7fYz4K3Uie8eN8HxsrBEPfGoyrLdh6DwyPyHCXDGXxDnaaSAD",
  "key23": "ejV3AzcSjpoHDyzaXADUZrAn9ZusLWDDAK9rdx2m3qdNQaNR148ZXjWvxdMgupgqDx3yEa2pyh7GMYkF7who2sn",
  "key24": "2dXthnnt26L18u6rE3pZbiLxbLSVooQSZSiy23i74rFNA8F1pkzu9VpDgfA1oxMTa4sPaEXagrjhuAbXLW34uVYC",
  "key25": "2xuatW87QiFD4RpYK6FwPmbBbdVXk9uUb6kY6sA82FLmyW59DbUKQgwYjyECnfjW4RppmFRGfRfTxogwkNr8kBEn",
  "key26": "298sw5rb8ezpKSztghiZWTjhLpfik5HNN7rRsg219H9hh6qKhT3CSjKkYyJBmgtx7gdcakQGrQ4KcC6oQyAC24V8",
  "key27": "2d5QpoGpkRs9NLmAStcm1ZHG3NJBw5VToh4k6ngWisxW4Kk68J3NeygH9uSFXwDMn5qZA1oZ29eHfhyzoJVMmxjD",
  "key28": "2ih1FcAXpXH5ehZjXJ4cGMwUqFQKtokVV7ivMGXAefEXiVLr24RicxPwVVQNFfBHk8bcYuTu3Zrtuqux8nY5L7eL",
  "key29": "2EqvZ19xneHPYnpJjkFWXmqCJCvmP7tG3HYcNc3i8nBogCtf4LFjBCSrwEhJ8EA98JkYjnKYFa3GRgKZ1D9i7Jbg",
  "key30": "4DgvaupRgJ243kh6kxqCLcV5RskD6u2nJT6bcrgrCtGB6gZQpH6Bv6L4rfJtGdDJi8YEiV35TJw9t6XkiECBdVNy",
  "key31": "2DRBwGmLsZTNohhFqWj9tNo6ycfYQdqdyqmNJieC22xhkL5VF5e4MSL21zpbt3Zavbfq1q1C76EfFMaHBPAx34MK",
  "key32": "3DBSPPNNgy4b7Y6UuvPjhzgtzLuaUZb3KWDGnGJWcc74F9Y8kMLQMgdpD958QZfXxKBcGQ4q15sRLDHSjM95gd3K",
  "key33": "j7o3kDKuTVyvnJXxfPBrH3URrxaYT6jA3NHKMNRqu7JMRyd4dJzeGa4pV4UF4m2EFujLWBaTAURBasswuo8NEbi",
  "key34": "39RoXHALXSGTyhr2kN9zzSgJRdzt7WtZU6KyHHUAXrWbmYZZ8NLXLL1jnDA4nyEXbhrdyRnQf1FsH7E518L92gSg",
  "key35": "58gmg1YMpJar3wckCeqpiKAKGDd3beM1xSUeRsvHKp7Y73q9rg1T7f2GqzMtHHyHj1YJfN26XYLNG7uDBbgdJTdB",
  "key36": "32CPibgcEKqZarc7YwN8YcHYxNiakfe8gXzj59VViT238sZkkawnRtmEe6WTS5KzQECjyaQS94wpFqv1eCx4mhrc",
  "key37": "epc8bV5ZUt5y9GwTdN43h2HFeT6vXCNXYe8BSWGKCi2zbpUGTeY5CDVgQfmtyiQfbQ3NGvdYc7Vvbfbt5WuvJ2Q"
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
