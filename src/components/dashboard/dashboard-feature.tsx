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
    "pucnY4yJFkxDs5UaCjUZqFQATLopJZAMPC5P5tbuECWeCMopGXYZSb62CiRhhBh1qgbZgN5C6gCDDxP9nZhM8ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ypk9A1VSxcpvcsbqzWGSyrRLdyjES5MiwPx1NsnT4NpEq2vWqDJLVdAvaKXxtoUBesBdMSqhRe3GMpv1EEGzqB",
  "key1": "3ad9gTvLfdvvTQ1Z9DgUhcBqf93AJhsgTYTZy5j3DyhDjSUZamEcJBJ4PQNcqJQZ9c4BqetGHgRug1nWJKUsH7zJ",
  "key2": "2dytTTp9J26CnQrbkTokaSuk48AUt2mLwWiS3Ri8ykE9R1UiKDNT5pMNo1HDmeJp4AiPzFpN9QfcDc7uchBEuzJK",
  "key3": "5JZGfQKpCcpUCsDYqSgo2reSZt5QU8TY61La1d9KvYTenARZvCnddf5JbDuGsSkrTYtESRsiuWZYw8urd2BnA8MH",
  "key4": "BF87yi3qwUemU5cVjZt3njek4K22VaWSep1JoUV8bcMAfDXVT18caxi6JWQPeVSXuCZYGsCLtpxbuniebxu2Yfr",
  "key5": "LuWcrEPL1WgdFL7TkKBBw1uBgq7n8ZoBXo2fTWGJWC3x2ghbYmj9qEQXWLa5WrVPFu3c8py4fXw9YWCxwBcUNTc",
  "key6": "2BTZvYUYhXWNuMM2sv8Pqq1tmXme7YZwUcJ6i64vVjpt1QTHHxoZoHEhMupd5GyFNzNkMu33gD15RXqLkk1mo1cY",
  "key7": "4SSv7tkT9key3gCd1B16wMfvTsy5j9iQRPBQEucf8DJiWdsXX9NGFBuDQz2vEKeBmVfZx18f61MFL9pVyM6mZRtF",
  "key8": "4q9uDoisKtqoqbpXtSbZ8cSDwxAT7tANcGFm1f9QT1mYyjV3juG2dZob6pnsH9ve22e7S7yuWJ2pw8PuEz7CUSYD",
  "key9": "DaMmZUJCG1eMKGhkKnWVPgsPrCf5juS65CfdaxPboFPHqApdY3KQynFBtZv6eGE3MFX8bjJFM1dgkZkMAGZTqK4",
  "key10": "KxSbTYwszXX3wjyP8tVQwmQ5LBLSmps4onZF6XExxczHY4M1MxBvySHFYwubHM8uzc7w3shF7GTCNNARYcEg9k9",
  "key11": "4g4VRDWyQDABNsSQZHvrhJXe8X734MUXj8U4dcyf3Caa1Bqr3iS5eBjQHUFdK2ttoSzsTwuik63VN4uVPHRv2xNx",
  "key12": "67MACRFx2XXz8yBeHRUMn7wskusiToHtw1i986RpE1a3EzZrDKNWM8dYZcrCeThX9ZMwc3oe9Gw8mmpzMqwy3NyQ",
  "key13": "5kvyxABeWeTnweEA6vGtQXJSvfA3LwauxJnq4CLxJCJDQKpYxetNPck9hbYH5t2zPpcK9gNxdGRpbLX9Tq6Tr1kh",
  "key14": "2dE4L8kX6jHSuyNXCAf4JZYYckwjK9DHZgNcQYdKRHfBnK8kP86LW7zJsvJRT92Un96wTNoWJSFDRJ99EyuRJ7sA",
  "key15": "KDwyvfBVcW86s71R6xdx5Y2ocBUuP7dMPsPxJrxRKBw5wiuNGtvFTyeGexZV4VEtDp4wqbDvuV2Z3mtutrao1jZ",
  "key16": "5a6ieCa7CHmSg4SguT4jTuJbcU4uLRJybhBg6cwRbDNT4WQS9rKTgPD1yuDKZGGnSKpdVN1GoJkjME7Sr14xYoQT",
  "key17": "5PMC4P8k4c5mstRvMKXdAoZTELZFcsR6xdfib3TnCcGFKxYi6RveKnPZChiWSxP7JngMoT5DgWNxF5EkqDdFqaL1",
  "key18": "44YaGrSdxjeHAhNmCEKjwg3GZeHyjy3CVuD7VqyBpWhgPT541cSbzKimtHLNJerwW1qSSSEaayTk8qL8rKt21tdT",
  "key19": "ttcyBT86jVf2SbyHoUkdPsfGYJ7AnxSyKaxrLQeu4qEuKCKeTM469s72FsjMq1qQYJRCWL1hj3JCLqGxrNzfboa",
  "key20": "4gyf99BK1Y2vCruAauaTzD47k5tS7jELFcYN6aQDYL5osphvuTdRx7fHaqtuwo8YZ9VSgKe5nv9v6pPpFQ7bTmac",
  "key21": "Bz2Bx3LrNwoK6DeXEpdxNmBKe9h2RLRMWmDTZ5g8YKAarxXoYCZEboBtQ5tusRjksdXHTotDqZeCa4Lu96KnEeb",
  "key22": "kUvbYM4RG8B8VRpLaqHALP7GmaHyizoQCgbDJLR68ChpYQuqGea5bg9V1DHKj5xuDpFxjSdZkkTJAScDZMVqXNy",
  "key23": "45VK3qqENdJboCpFQUhxtSL1vWBUfiaKSd5QcwXVUkk97DbwdRY7X7ydk5F2khzJ2ScX3MPVyYj4Vc52rjsyesrZ",
  "key24": "4oEkpwcJuqcVFHxXGbNVZLaqizB9hbrmZfvPB4vy9BCZ8kQjeynn1ZyYDGXdFkPEzKfyV8Qq6wvK8KHmaNNeqw4g"
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
