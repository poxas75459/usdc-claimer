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
    "2azNwrhwFLjBcbU5zikkVPvfuKDEFQ6kBwEJ968suHXqGhFcnAW8rMPU3YWqwgDYACpbpzEGdnfej4b4J1miUv5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TW3wHoJ6bU5csifEFQ2JNYLAL47HCK15Ytz3YYVjXCMkWisfvXBu8LYcj2vMCrhSFs3RiBcssyE3YFrzbHvbqph",
  "key1": "8jDGgmwAon3poQyQZagQvoy4SoYWik9cGAEhG1xXso4KTDbGjqfeLYDfQyLXcceWk1kzKBZWPNaczVfoiQFEoMv",
  "key2": "59wfzQAn9rRYMkmcK2t4dZckmMnYimF5zmupmdoHQhaVStURMcJqj7c5fyXvvw7fqsyqguY3Hp9sAdoqJTewbNAg",
  "key3": "2MGd4vLTpk31JcrxJGatPz4X3eBS9RXaUe7pbWRM25UWyesL89fP8zn8Lk53vzvzAHu7Yprii55oziC82UxXDWYH",
  "key4": "2PLcfi6BcN2jospUzB1cnzTPBP4QeiqAMRuEu4gMp3NB5SRFJWvzsaKxo1iJ8ZfLPvAezvTWgRfMfd41FpzUEkQf",
  "key5": "3tZ16bNsd6LX8ycsbbBnnMF8UmGM2abhK7CFMBD57YpBohePRBp2UQAYWU4kse2NVafLCNJQuEvP3sUJc3nsnyMQ",
  "key6": "5YeBdsU9hu8J2jqLBKxEZUyfg2rUxkiEqtCBHqQZppFiPuMeog5B4PcmZxs6SbTnPtPA1BZAYgQ93uTTRYqhbS44",
  "key7": "4vZRemdYNGqpBcRPySN25T51Tdx2oEDigEordvJL2FWCUxSeeaDwjQjnNWNGhuFQJquBi9KvUa7WprSPZzr4T9VC",
  "key8": "3x8wszVJCX3jB5EyiSBGYmWS2jFMgw6F88tUJ2xgdpvBQZDuRBkzxdYhHDSa913BQ79KPVEWVY1EdDAAbETvaiKA",
  "key9": "58HkSs7Q95cP1hSzezdH62uLrU55f7hkXtWd6CTrdSo9qyU5gzt2ywE27aHaVjXWzkoVxfgXaeTfh342MDxd145N",
  "key10": "3eLXYcBjvqfDB94GjgmJpYQtSshUoCMUG7YbMd1BU9bT8rqTySzKeYJyQLcjigXFvRgaKVvXaEartGvfnjURjW6y",
  "key11": "5i7cPcDpBhBd6qgKhdhmnc8af1rSJCNTZqpbCUfPtnNsvbgNkPv8kbXpDguJ3pPscRahHrq4GSs2SDVArb8M3Uri",
  "key12": "34vGp2BVsLTaAbCD7GGkFopHS65wwHGyMkHoXoBdvQDy3uB5esy7dDhrZgt7NH3CPQUqKbw9ssdervNHpoU22wHk",
  "key13": "2MsZszq5Zn4derkYai8EU1CpcoYSJHvMZxckhR3shTo87CZp7thzoxuNzvp565xDiWCw59KPtscdPHXahjmvhQPy",
  "key14": "2Xcox1quGZyW8m3ZuyMfMrCpr3dp3M4UyrCJHVAgHapcB3mUw4M1wiWc8YxmvLuvuXvLMMWh46gfFCNrLucxHJ5Y",
  "key15": "3Rp8NfUcwie9nWzEenGK3uurTYuMw9NvWXtiFgQC2qs1kTB6hYiRvxA6gwJ5Am2DaBHwyhSW4Rrb9JpyGQYFM6oB",
  "key16": "3jTc8oHYiu4ZZC11mGMm22bRYDJyH6XAgtssvDVAwM83ub1PcpLGnaVjFWPYAcMPzFP5nEjj3ruiPJdRic4Rm9pi",
  "key17": "3fPcVKanFSikKpUngEB3qMPAg5vRdezSazAxC1nNdm8L9EnDTWfjju1mK7qe7RyknANNKhVCHUZmQcQj5cYjJQgb",
  "key18": "5P7YNrch8gqa9zwqNioCwMQJ3m5nEU4mttnkSTJRKf2d2Gumxiwg31sMvmfDEMrqNBEjJixAjYy5ympmCBBV5t9K",
  "key19": "2nG9F92ztL3TMDs5Um81tHCm8itrNdHkVGNRmRmX6t1uXTMDAFmtxQw6xypGgvSFPWEoirRqdB9ZoMksvFTfctZy",
  "key20": "5vtHDHJqNEKqkqQBrxHngEGGTPXGrhyHAifo7SmXJihFW5rGMZHrEPNVNJ18xSx8DijzhuNgto3gQzGLTbWF3TsV",
  "key21": "2XnPHx9kmraxh6yjkggBg6FMKehe2c2cJ3yAEJEaV7jvnNabmRvPgbUCAQUYCFqta4JZU2KrUEdykzEmcRrrQneZ",
  "key22": "2cLorsACFTrSuuyjAyezVBiWK25HJfGeyCjU5kA2KT9mxCijWcsD1CogtoaUV5dSkWtLTt6x4URMVcThgptVsqZD",
  "key23": "3CZvhxF1GNXY8iNU4m1rJXYntRdtwFQ36D2iUgvTvBAAPkFsa3Foaaf7YJL9hkUBSPfAxXTVEaogjEFa7tdcARcu",
  "key24": "3sMCktWezbTDH6txK1WYt4K5ejhyVdjEr4y3Bk6sTGboPBsTuQz667CCteMBt2gUCVT5bD7PtZVrhZ7jnMoDorbY",
  "key25": "5aywtzEqBTErwg75d8ugBW7J2chMBmFTiJSbsUD2UcdXEutBMPF2LauoxtqDnmBjmvvj4V5L2By16RmqAfh43PcD",
  "key26": "2qwCiDdgR38Ai9b8PGufVQ8g4pFgb91nUomWfDomNUXma1BAztfoe3LbCgJayWbkaW2DRi2s4gkWurLdjyA7ajXb",
  "key27": "2QTz7M6ypQZ7VWV4qZ4VhcTvW22Z36BRs725Tzw24cDKqhAwm8MWgv2MywDt7Jb2LHmiVhKbBzgCLUr9hJFkB5En",
  "key28": "2N76BVwFChiF3oEuU4q4t6gDGtQF1XC7Xq849a9RbpQfKZLc4bf7mbz4y8G25TvsvjRb8Qi3pDjBaiZmFo5nqph",
  "key29": "4LDJoDGZTcEfMxrPbvtcZjpynf1qhmgarDg2LDnM3oGZvGrUyt5Td7aGVinsKpfDsTMsCUHhB8eX78VbGT9tXi4g",
  "key30": "2jNS4KmDAMRVz43vUvSBAWxhYQKWybXPFnYevmu11TqQnEyuvE2KYZn73VMHbYAT1kEjXoju9gxChf1Ut3ufqEbo",
  "key31": "ALz17o3vDPZ7uQzWL8VGntJe6aFY1cwCCm3KsAJvKxRLDbsUsiattubn1Ta5bDA2cY1kZWXPfjp5KXAfSmytu3G",
  "key32": "3Zk6H5gHdQ5hWr59u7W1PmrefC8H9rboxmNZJSpSQdwdZiddtMAHtbW1K9acLReQVFPNzxwfA82YWg3jRXFWgYfJ",
  "key33": "2VKchnQxFpSQ1Xmt82NpTQnc8BZ9S1F7wcEE5ghLbUSgaQ4NsYFFQLfcAsPxLU7CSS6WNzW43wr6qNnMRwHYpKpK",
  "key34": "5X6MGrCHaxs8kVkgHhfG21vGnYTVoYrCGJ3Wtk9PARLYciDztJWPHzaUu2Be7vF7B1iaaLjGL5akXo6yTQzeFEJk",
  "key35": "2adUJtpzdU1oJiHuvs7HktZpPSFcpTTahZNzBU6WPRnxpMnduvdeM4ecAyXChj1ebKYCPCZqQydMJfQeYBi3Lmsv"
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
