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
    "4pBkTyoYw5TuSmZnWVBki62obpGf5fXiMYZC3mqht9tX3mvAjEk3K5dmwt6UAdodY44JYz1Ki2AMqAXepp2MhrDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7zVGbpoayJJir1oSVyas1UYLHELBBGrD5dQ9kFdL2SwVPYMVi62EgyC4zpTz7kg68VJHUkEue1u66NiNBNZybK",
  "key1": "SNREpJCmgpXQCpWooef6vNAjJJxeHjvPLYUefkom9bhDg4TZ8NRNYDA1FEAptcL2u3osDaoLJTVH3YMFrnLPrzW",
  "key2": "3waPkfjdayPhpKzxJ1ey36c6Z5iZXCYneYQnYcjNqXRjpfnAXbH4sEgKrkJCkhQr5FSvj8jLe1JKjp8XFTfnup8",
  "key3": "fxEoU4Man4R8keRTXsgxdZeVrppVUdnUh7Vo8j2JCvP5YKGUEpJipFLHvjQK3V4vST7zCkL6ciqak3cxeW2J4DR",
  "key4": "XCAhQGGf7iahfCiNqnGy44LiZizMt42Bh4BNQUSZMhaCqChAo6pCfErRpTnDHk521WVC4YHVger7Vu1AavTDD6T",
  "key5": "3H2Sh5VtKoFuu3W33rrsSxHjE4VC3ftaPvMV7Y8e6abqceU5CJpLoupcH7Q6uyrpEWGFzwov7BZoCnqfz4UcbBCG",
  "key6": "2Zh6CuGZgpihjh3ZbRB4nQosKDP68sFaG38vyz35zwyXXsGKJjJqdeXUvNZTP5Zsj27L64g2ZbwLVGUZYDZ4ip7h",
  "key7": "4zq8n1kxx47LiRgyW21frYJptMkR1eKM8pEV4TreAJ697AUnfKvLUTkXcsaSQ2hXKD8Uax3dMDK3aHKW8D1XLmqi",
  "key8": "1CxyJD7kdCfmPrYUnm93p6ShGCu851TwxJpnmsCQEn365bAtgaHnhxScLTYWq9AZs4tSQwNLC2EySavnoNWcnod",
  "key9": "3z1zivREiz1BUrJ7kc7TETwpKZrhUdETJAZpjHJmJBbKwKJ6oEhkKJFYaYnVwCo3QQiT1eRkyeyWvmGJEpajFVpe",
  "key10": "5nMco5JQWGrUkkrLY1bsVYPKFfy1y3TDJ8SztVtmNLc8A5VHQzjfhtZisuYxTeUdctX3jYofsUobd9M7J2U2UqCE",
  "key11": "4LCcASxW4F77qzN25FRqTG8wv1CnKVHBZDdt22bkyYxnXBXxcWdDtj8eKayx9eHVchsmqYpsHVAbPNrwUSc1wzYH",
  "key12": "5eYBKAN2aPDqA1Ar3cwB4wc9V8DbWfQGwqiK4n2gQpn8TPoATmuQQ2aE9vTyqsGZyzgozCBhFKApvN6qatjPXgms",
  "key13": "3QJxCA91HdbRAJe5i5e4WHi4HkUNKPYDFbw5kd7wPAvCp6BcSpL2V3p5L7cDyKoWDyTT7MkhbA3g913DHWECVWDt",
  "key14": "3VpUXw8XDW97Qb1xKe8M1TjHTmU53qEuEXW4bWtUvCJt9yJVxbgrf1rs8QzXMhsSip2bqJKgD5AK45A671Haqrvc",
  "key15": "xknsYhNefT6kjfjPWZg9Kx3msaEMMsvpjKiJxqy8DT1UUmv8dwrjE1jezCRZjJ5aDxBhtDVB7Zw3GUBmkCHYMWm",
  "key16": "AVgt3McdaYPppJ4PvkeiRQeUFKkvWLnTx2bsSymJpyYMVArTP9XX569aPZjQwRwrPu16SEHrxaXG7yXAVDmR1tN",
  "key17": "2h8BdXDSscnbyLdvq4dtnTf8RGQraK8ysbNZBh6dnx59nimDNyAXQMXjXCgqLvYJAL6Lf39ao8rSzbvpAD3qgtqt",
  "key18": "2VP6fsDc8xCzjDa5xre5jGahXtzo66Mgfo8Gvmg9zGZFeTrjnHwg2GR3CKiRoVbNJHacP7usfvbfGLyfSeawdRbn",
  "key19": "3c92xDPwM1Z4gXngKkjCF35Fyd2GbLM7FUnP6B91iHzCSNh9f5MqfqxjJf58fyUcq3zXeeY9u8qxwDZwfE66XDiq",
  "key20": "5fFQ59jDsraM35Gu7zZ2a7gUY3R1yoUWMYm5PA5GRdPiLSh6DPS36spuALL1BqatH5fNbDSfsMxCxsLaHNNJyYY",
  "key21": "qkLZtCbyyDNULBvbNhFAE4Rg4xBXDLe7fP57ZaSbSbwff6hrr5tkaw3uWHxrLs4as5HYiqyQSWbgKKyBwjQZunx",
  "key22": "4ZxWMtdqqbSjjZWDLxFpjwaBbZJwUjPauMKHcJU4C6oxVniAewogd7rcmwEgKB8LkSetHbck47xtXa4HzLfYd7Te",
  "key23": "34LkAxWLtpNXb5gdrSMBoTr77xzzPBsEeEgsBkPgxEFitAsSqCaNdRDRLMAUVUFuwETf8M5rF7X5jE5pJM72dzp8",
  "key24": "4NsBytDnKZTUPoU5P2FehQPJ2XoSgipipai1YMFrsjZ1yUhvTCe9tXEu1YpvHkF5WADr5c3j6khnjtcFMWzA9rB5",
  "key25": "3XoCLsFKHtsqDWW9hFzxrDK277PJstLkdGEKTQM1snEgRRN2v36qVprCtnqaRPfNM9jjjrP5gymbgahs9xhntiWQ",
  "key26": "3xC2joEqnip1LaJvPHwnYzK7MJd2BLHzFfnAmaG3VkwmkRZvTpANUUpAnkWQF9a1KZircKV8ksBKWh4u8tHEEMzy",
  "key27": "4NZ5aJQdujQN9AThMJkKTJXUxWD8JhM1EcBFEdzhpqegAom9FEtoDv3ULwTegNhv4AeZ4TLBekDm39L7Bux2DwV2",
  "key28": "3Fjc5fLMs8h6b2GNGQAEUTDP6cBc9JUGpsjqSRDMAw2inRnQc4LYKdFzhitB2fnKfKPZXXhQiHsmqBGZpckevRNf",
  "key29": "2iD1HBtLTfo3qMF4jFSrkF8BRE1D6Nynzj8VDhJ612kNeRYLns6HLBKFFr2vG87JzNvZT1tZfBRmqBXcvmsqhrqX"
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
