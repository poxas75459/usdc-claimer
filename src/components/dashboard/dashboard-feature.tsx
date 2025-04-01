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
    "5crrtWNXwfZWah48D6qWgZi9aFpxnXCeGJD7VqLu1VA4i1hcDDdxLmq8h6tV3qR6qhxdBEH5bu3ACDNd9J1B4rCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLQqDip1KQBc3ehE8mhRZNS6TRkeXukeRA6uu7UwxPZCXW9rvpbchAYDbW3hXABKstpLjXbRCV4HvWmWnWFYAnF",
  "key1": "2z4E3sQrCGppoMo2iP99DsLTSYVmo7TsjP9DPMjj6QW46EJDxe1tFwfxa7g1dWzbZSpCYW8rKrVnpzmj7pbJkm6e",
  "key2": "5ibbK5LA9RheKTNziQ9ZxEm2i2XaBhUcSTBwWezVqfXo1i8AvgTNTi55LAXTPJBTjkSQkuusxNbZGRoWd3WmnQaV",
  "key3": "2QmnbFJMcKYztr7mxDvuohjtwMNmxzcWLNoXycyfdVwY4MSSjfDG4euMMfGndz3amRtk8j9csLK32QKJjcDidimZ",
  "key4": "2XzXJEE8dciVUFSSww9jaHGebjY2aU8ThnMTW79WAh9TptfuZsDW27cEZfdDJtVSgXTye8W6Uom5U4hhtPJaQAnQ",
  "key5": "25GgUtm9CcYVcyQseyzeYdeN67zCHtmmEbyVZJDrJR9GSg6z82YFxqtyUhZKuzH1W4M4coyay2q8ddafbyS9fsBZ",
  "key6": "4xaMBDDZEiRKe22Qw8bC9SaA7GQvWerJjAN1tdHNQK6BVoxnM1PsLGXqepRw4Yc53ygzzCcPMuVLkjMnDPSPf2RM",
  "key7": "4LMpy2cSnKfnfN3pKyDgUDfThheSNsEDPi2exdyKLLAJ6GQANYt2sswbNEShpYvUXMKSFJhWMDxDAT5kNp4Zicbk",
  "key8": "3t8aSsbfm1JeZ5DFX3p3MNoTauDDWE9SnJcprW5PrEpfCKSaVn6rM5Z7FJHV5Zj6VSRQvq5FyzsBNoqYeTbZVM74",
  "key9": "478n6Y64DFD5aTznmJNDtK66iKvodpB3fvJ9HWjXrzDkfxsKSn3PMY4BXcS214wrGjLSe9waPg6VaD8iscScJUC9",
  "key10": "44MwMsWwm9QoPDwhWPHWuEGRyx7ZGKwNP6f5QZ1eagdoJpPB6eq88vU2vdBhLVQYb5ZN5RYgygWRcxWv2m62AsBF",
  "key11": "bryDzCAHpRzYM5ztoQ2mi14joN1Ak9DVfE8SLs3ce5mqmBqz4GqBDAzA5a3L53jpaj9k44No2xC3kWWTMmsxhYi",
  "key12": "5HeW3RiwBuZJa27zVpusVstB6fnws5JwGLetBh8dpnN8tRBbYZEBYbvWmqemsvj9RKZzVK1q4MWUhbts1p9SawR2",
  "key13": "ov9JzxfNXuASN7LeuAbmnVqyhr7gmpLPcg6P29ibpJqHzw5v1Pei5ZKyRo5fd2jndXvPRWjR2XiMTGJ6vDJ4drL",
  "key14": "3niryVYoSpghUUtxAPNQVpHWdD96jGmybbdvXCnbgjSpYBLnvq77hrhmVTE21LpgraiobMY87MV8WegGE9uXvtUE",
  "key15": "66CkvXsXhpt3v8h11Cp9GeweX6HGzAKH9PQYMAjJWU7w3aYRH2xmMTdgxm88SDfRJ37TRu4YAV4ahqTHUAezJfTG",
  "key16": "ZvNXaRMYqU8mpHQGtQTEoMcDTtGxwUXuJFMXGgwBSkVBr9eDQm1fDWZFjgMvHsKXwkfV7G7synj1EzpHd7eSHSk",
  "key17": "5Xp7ydusLf9aZvD4RoG8nd1MXL4NBrTMXMwQtN2PLS4USP8PDZ7BDffHSNooRk7hZJ289QvDHRk8ZtG6eGxzP2H2",
  "key18": "2pTVgHLzmM9TRwP83DQmYqRvzEycqoDRPPUyAJzCJk9CV2ZXSdXki3XJH4AgmDe2HhbNJ5mXhYq5RBkMou1C5Rdx",
  "key19": "4KEWQMBnyoF9ktpGv2g88ZCAj2szmKUP4zbPhgwMku1yBRzC5TVoLjDKg8nqQQw28ZRX7pja1TMXdr2AjoN9QKUT",
  "key20": "2wuWcX7bucbMLt97T8vfgxSajtF5PhB1w7Q4LdHFBbV7NQx5SQNnUUQXn1NFEmXYcjEHe7JnxzcLMJvZCPQ48p1J",
  "key21": "gtnG7d1SCH1aUZvGpZ3eFgerTsExTcCzoWxtwPJERAwUKFDww6gfgnvKP4BePmrz93rEQ6LCzPfvU3zQj1o64iH",
  "key22": "4cdRoDTptHNDeoLM8EGGtUBes2fgLYjQwwdzADzB5MFo3nJWVdc1Kmq4vsmazSYYYVhvphqrFFGEnMBpasLZmZF2",
  "key23": "4hxMwr6WZXmUYfRvbr5ZXszM5VwX9b5JCpeCzZSm6F3pgCCyBgQsfhMw7X1aU788Qfv8nkcBWcQxxiHPMHEXMEsd",
  "key24": "2VqCjVNNsHaokp6VGTa1CPqQXqk8WM4fbL9tEQZ9wz1nvKHZ2i3iNeDAfCGQkkj83RU4SWoGuHh48YNkHdiiJF2C",
  "key25": "3gakZUjHqCLYoVXi4vFLk3aUAHfM2buJRf6NiApU1Wmu1aLvKj6pFKCRW6DQCQTdjp8sof8GHq9R3L8xYcqyvpVA",
  "key26": "2ctNd2JN8uEdEajxPS8k14wM9cLhCk1BC1kmUWowAVZLTRC25PENsSCTdtTuMxw69xu7PnR9vXrbHnghNrkJTpqi",
  "key27": "1zBJHJrf37fyuiiGhTdyTjXSChna1aPPBX6WnM1sjoHK6BRFMaCJ2HaVpZ3iHkrapj9FyMDpabxRyTiELcr8zba",
  "key28": "5UdgLcX3EiwuQ6EqG6bjnRr17ZS5TZBA5aEPwiPzFws1stWEqy6moJ181iwAHDJtJAgnayyXeEBVXsquXGyCpW2h",
  "key29": "5FyyGjxU1Vrzv18xfBCEN9MLedAtKSQwEzT7YsA53BXBYbRui37rSQdEySZo9gfGmHdvrGXmhHVm37afuhN3zahY",
  "key30": "2uGRBM96tBjV2W1XNNta8smLsTfNqqA14Hb3TRjJECj3iMAiB6hGBesqn5mYYRckKbgWrUhwL9r2vVqaAso92Np8",
  "key31": "2V8tFLR7nbsa3Q4HZpjnM1MdHtzTzNneb5SwZFTXHqsSfqpYsy8DiYMzTKV82DBhNPyZagT92W6C3aV3xNNELXNM",
  "key32": "4vtugAKo8bo9HecKSCv58cv3vWo4icVkE8hBe7za7h8mvbHNtbXo1vxRB6hNuhxJES17dwwajXaRZ7nTkGSSFJwH",
  "key33": "5Mo6PPbCFHtnF5W281Wj5knHqQk7SZDhLZSHzoZtP9S52XdBee2Tzg47555wHKj2TScMM5Tfzp2CHrgNS8a8dpVX",
  "key34": "2zhoadRZ6GTaaAfG3rV72xo8zXXs1Fr8c3EumSJyqRM7dtvPDG9sPUFaoJQXHjYXmFydg8QeZ74FU6npuMkES8pm",
  "key35": "3bFP8mU6dPLsoA4gNiD7aCL3gUwSvG8bLmkDkTg1Yssk8LSoyAWMRyBtpAh8SA7nZfmuMEv7Hthu8USz7Nitonq",
  "key36": "4rDyLk6Vke5XNrnoeHBu3aP7LyFekJ3mcij1aAqkwNuQkrwyNvcc4XZYMTyrEDogwSg7WZaPMa9EsKHMUnk8QDm8",
  "key37": "5PEEFNBaXxmQkok6xEJLioeXV4VnbPoiBi2nuVgNJW5ZvpBmVksox7FWWeLx7PZ3JZ74zeGAHGwzvtoRX84i1khe"
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
