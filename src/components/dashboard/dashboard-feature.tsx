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
    "2YK9eQJUXfZ1tPGbqn9aTxJYUHvz61ch2ptLS21SefEUkTsfjbEYnwfWSzCD9c3Ct4gozbaNnzCmTxE6msaPd2wJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495QT1NuGNebUiYcn5NMnqMX3WkdSJD8ue12EByzP6B7dnBz77LTVxKKWEDjd2ubFcUwisUJRqmpvPg4oziaUbLZ",
  "key1": "46BG7PtzqnqedXc3KezSaNcsqhFYFzJiEXzhfsGGKQkaqq8ujMqVgtY2X7Wxc3T4VMe6d8LQz8F2JmAK5HBheQyT",
  "key2": "2xGP197FPvBLLud3vpB4J2ne4xWc8QJi33EBCjXAciJX7hkBgBeN4AcQ7kDun6ocnYyooUSYVweRTZS4g14mYJMU",
  "key3": "2iJ4gpGQuupRsbRT2wBfBB2sCZGDBtLZY7pUMeHP2JGJtb2T5BdRhNzkY56qkqLUREriPRLupvJzaASDvSW1DW4W",
  "key4": "4H7jrGs7d76XntJM6gk4RnnpVaFLYsAK2EG2NFEGbG9vPzB9UXQZfPH6zndkVdpFjHHNHHtFrsYLZV2pdGeRNy25",
  "key5": "5wnqd3Csu3HrFDjPgCe4cZrLKr49CJrSwQKARxtEcrkG5BXsWKLJy3tuyd8FW7tCCZswCRM3hr3TdiuqnFPPVKYw",
  "key6": "4J1MnuBVVGGzvs2qxcJ5NJ9CjHj89YAHGBuTz32wN3dd4hVjNscXrb1Qi8cHQXxmvfaXTpbBAssAKaZUdxV2eJDQ",
  "key7": "5RLkm5vBXDySya5DdrTtUJwBhasg5846TxLU3be6vHZUNqxHHwhsX6ncuBSZVsG6jFSBpSrwcUFgegPo7TExFPvM",
  "key8": "2415BrHkdsWUJiS5TyPtBFYVrRUU9j2VVsBhN9ns4ZytP8sKEnUQuhW2bhtijHZT2JPGhF591JCUz6K17asvJJVA",
  "key9": "CtZ5Zt9gDfiuWWKFjWgtsUXrYSRds8ZubXoA3knGeM9NcU3EkRFbNrqrmL297Con78yRC9Y9gdJ2s95qXxuRz1Q",
  "key10": "v2v5UDaXtChDjFkx6C5Ct8ioKYtkkZ79bRLPypQZWJqxvBb7MDGb5ELE9fXiU3wPuGAaxfkhc3Es9PP2z7tqXAF",
  "key11": "4tuwS2h7VfLgmiZ53KutEfD5D3TBNVoVYEsS4NG665XxGnWneqviKVmrS8Soxr8KzBSmo4GGWSj7hwZ3x2yXwcbW",
  "key12": "5rqsK9fJxyBgU76no2KqtnCgnDBg1Esgi8nPBEefwb1zui2fL3LcNZsa3PGTzRTzWtaRdKecG5C4wCr5TGEDThMU",
  "key13": "tVEaHjgo8toYmPH4y9ZkcssZCfbCrNbqHRy9yFJV2Fid3kMmb9ZXMLE7PxZ7wYctFYgTUHmgqMzMMafKK2sjtfu",
  "key14": "ajcHW1a6ZvXiF7MnaNASuT3SkKnApzCEazqmzd5gLrpyworQC9CNu5Qzmp63tR1BtR4ikNEQvgU3X1dqbGbxsJW",
  "key15": "Ls4WeuMbV2YsLohboETcgvkZ9EX8qRMskAi1BV8hqfQfJJqrNRne3UBHyWpeRJmXZEZC9T4F32pCecUkyCLpQbh",
  "key16": "3pqXsXrHeSWMLZea18sGzCaAHcsNmXkyG2XFvNtUi2yrNAX1851vAyUg4wYWkmVVbx6n3k8AUMnbRWDYHXpDwnyt",
  "key17": "5WSrodTMmg6q2kHbpY9QYwqhgpJgs41yHr2HCsbfNwYAMrVtwSv5wkteku45bSsNANegEo87xgaGpCXHUktuZpDC",
  "key18": "23e6PsVWdBz9U93xpcSuuyzPHk419G1dazhTiu3eXA48JPXpTGgKnuLhT5iFB6tPbzZcRfykwA74oJeXcNqbPSxb",
  "key19": "2ynsBMGx3pB7mgxoKMup44iBLJrWwSmeXt4z3jf69qRDRAezeKXKrRqkFC9BCUbu4sVpWBJCtggHUYypa2P9TGJq",
  "key20": "2aS5upsf7DTAr3uuq8198SaP3A3iBn2BoPwjECNADNGNrkhKY6osNfopgiZ1TgDRfEm6AMxPYwV5hdVyTxWntxii",
  "key21": "2AayeNC3qgEj43PYBsoonRQHLNHupTKSJw53NFXBW5SEpgZYQKU3ibvNUYTu4YtmsiRMQLhmyfCPHiPnvRLCiHyw",
  "key22": "2D3VFdGJNzekejuvHWM5oSdset2ojCYY3neh9aCjHUdJ6mmkf51NpdS7kvWSF8QaAmGUUdfWHzGPQxknk8jPGgL8",
  "key23": "5dx517ncBcVzcC1mcQsU7nZZWsJPFc8A3bK59zF7EHcf8UGkfRPohoFTR1PHUygX2H9NxRb6GdAvngMiK1Z9fFRp",
  "key24": "36rqy4A5cd7cLpjQS9qfQW2ya2svmvHFPZokVXVYfxNA85MwELtZLiDDoujvSBTRCMYXVXzE6RuKGfnVCYzJYsYQ",
  "key25": "2BNirQpPgLbohzrLQr9uqsLQergZfbQz58zdiULGm8f8cbEzkEpN9qxJeVTnS73uesWKiQhtrfhHJkC76FJ5fdQ8",
  "key26": "GmCYmWZpKcMVjYtn3MAeMtqxCsYPG1xiGcZBYya7xDeAR78GAgzG9rspzrrowEF7jwJqX1qTeDHhyb1iBb8wiPS",
  "key27": "53SRUSAmJ8UEAKj74er6cFFVAdeSPAJRqD9VuQiPsKF8WD5EiNjkG16N9WZMpD8vQSyBsV7yxBs6YkkTX9g88H7Z",
  "key28": "3sMp6wCDGryHudqoU6nYoZmJuWzzkjGhP9wfAL6qZGKazqKFDGfx6ajkXNGRiKmR3ZGEqMFLVYrTQosXJte87Ty",
  "key29": "4ebZSTVr2mRG3ge8Q2yLjdt8zn91tv9jb14cUXLqQjLkqSVU1SyNCfbTJaacAxwzYLem6uBmz59FAqex5ZhXd4Vb",
  "key30": "2QNMYDWAeB3fiVLRPCqaatZFJaqT9rYKbA3PSEzETwhADJAfxCFKC2VE1w6t7qAmfZXtgfUfims7Ca8gjzZuf8tB",
  "key31": "2nPC58RiG4s2s5VJ6SUedbmeNbMnGcYv2LTwqQKKuy5h7dVq2nHU1KEtU2E3TKSXJL7dYURrMHe9DDSk1o2b4Vdk",
  "key32": "4qJ5ZLa9p5wdZjkfPTqfbkB5RCcWixAHCzYGAs9BMkt3M89jvaCy9Pf5Bkw5PEtDaKfncdhw4xyJqcjTUM5Sygvs",
  "key33": "m1hm69EiJ6t86P6CQMHasDVd7eS8jPucHzLAJmxEZHHJFqNVMFn61C3etLGjtXZb2jejuWEsg92BukbtxaQ6hhy"
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
