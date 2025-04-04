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
    "5Q7PxvB45rSP9BjUNqVQBaG98K8a4pXWoZ4ekVtg3v87rNX6QJ7ohHLEHn2mupWRorCohd2NjrB4gxq13j1vwR7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rg1x69SbHQvtRbp4FD3w3a5hAv3aoug5miekiGLwXGPucFYYQPuBoTKySqgY3b2hDieAifRSZGwmZzkWTznLTLp",
  "key1": "4bw9xVeBKy996zZSJbmgg6dGncuxnJz1dczrmHbVYKJxeop1FYqZxWq6xvTbS8APFL2E8eiPaBmyRM2RWPEMne4N",
  "key2": "37DzCe1yehVPEbzoY7f38oUjyJqt3AULdF9gCnqz2YcyWoHdp6HCA6XzvTnFAn1351S45JwT7kLzE41Ws2oraehW",
  "key3": "q2krKtMFGWrGaq4u4Ayy2EspahuRaNnUeLjL8Wme46o4jvjjxiuDk5BKY3pzzGnm54FARnuJKgCjS1pjbxQwnuX",
  "key4": "3tCCq267c1rhFtgVNaXTbBwjhi55jWixJXNXuAcYsmCPtLiZmBQGUskdFB5swcMXdwxjQnyMsHzPE8uw99vBMRKX",
  "key5": "2j4geyaWCG1sRGufANwtNuxaMQ5zv4MjBwcAgaogjqgZNCnxBXF88MnpZSLmm6Wv9jhUNPoWT5kGaymN6MoFSjMR",
  "key6": "5sUQUCg2zjhg9Uid99z1N42eSU1CuhWajFhUSeLVB1nz8JCG3E89qBbbB2BSY4A8iSDECW76JdPHCdPKMPdhJD4f",
  "key7": "3tdk8PZ6H74qsh8yJ8TAneEuRj29LS1BsRRUXtiSm4mgKkHm33q2C1uwQg6KdmgQqYkM3JvDpPf6N5egW1JGUq5x",
  "key8": "4H25jjgY3iUtgUzpa7yW1wPrUXvi1qaMjL7eY8W1KcSdn5tE2qkVn3xwB9fSJzb5s2EBbuh26nLkdSWPSxnKpCuj",
  "key9": "AQV1gyArFhx5ajGAebdu8eVqbHFuJmU6oumQDae7v6wYhaWhxDgmNLGkpz4ff5NG2ghGTiA2L4CSttH3Rzrx7HX",
  "key10": "3UhUvuQSm74cskjbPp3sx8STH5SV4fAKTQMMntxkW3eq6gLEAHd5CgUm288VBTmoSBaP9sjBfLh9mFj9fhB7M292",
  "key11": "23UfLKfNY524evrFj2H3iaVhaYGxbnyzo5Gtr884cN2T72yAhFf9zS3Nzic4L19e6hJcSNca6Kx9sy4n7PyrsFLM",
  "key12": "5wkJ8UJfmbi9Z9XQQoMrApanYUCJdAjvbpTRobfrDvgzCGycw8TZwrorrLaKWoBVXwj5PSC4A1GFXW7vqqAJFww8",
  "key13": "2Gp6eLmjb3aMj56yfwohXQk4pMkdvybm6DDR2xpU4Q958iowScWY4AvmrHDuXHqFFo1Aj5yAsJQ2NmaZi8SZdojM",
  "key14": "3K45gmqMzyawDGUw3tiQgbv3iPFo32nyZNLRFoaJ4bGR4YemdR6LxxZc9msp2Qm5pPKXU1nQS2cA9qmgdVaSGo4y",
  "key15": "3EpbMcXvBqUNcbu6FCByUurqLHyxSeT9Z1FNWwb4GqvzvKPe2u5RC1Zue1ZBgZFedwwUEWzsCga3gCZX7hyTd6bs",
  "key16": "4VzdbJHwYSjNoQhYh7CT5J24jafkADef76Yrg6NaeETUFKvkbWM9DuqmEHAmwPgCyKKg4NUQqVpw7wisHRXdQ4sw",
  "key17": "3TgpW7nGSTx1senUBdRHi79XEsPQtibY3BDReeL3m7tKGzewUBt6k3FaHGVCiFLy61zYvtXzDSNYycpEKrDnxEuQ",
  "key18": "5gTJ8bauExg3m4SdxqbbDB7F78FULUo1hY38xd4ectf9oKrDyRqLdkaowAEVFufDu6ML6QF8hEMZgebJAKB3RbWq",
  "key19": "KTzYy24WN1mjf53ErCEGwK5Q2eb7xokHzSSpPjchwxfr2QGoVVLPxwGDrTiacvK3tup9nN3ndBeUqNDe5vn7NWT",
  "key20": "2GRRX7yCp9Yj25oUFWnZpFVa29j8y25T2cCP7gYBAxF9PLD6zavtwoyFCqrCJEf12UvTPZeztF8RKj5z8YPsKqWm",
  "key21": "yBPWDt57YsCvLBfZiitg2EvH3dY7KsWHXZp7yZvrBfhq13o8EU8nSFNMEnN6sMDFhdbdS3U6dhmazAMGtMPQ7VD",
  "key22": "2h4MU6u29NVzE3rzapYXpHaTTAcvKMyLKXD5Rzmyw2TwJw2E4ZvfdVZPQtGhYFUgSsTYFgjarb836tzsXM4xYMbx",
  "key23": "2YXXKJNNKMETuBqdA89SCSRHqHT4q3DDhnsvhF4MYmyTqtNSzQAPQWN9jKNyc11APL6jQTHxcSw7KvEdmsJ3qSfJ",
  "key24": "2iYLcJVTKHehVahCEQyUZ5R49GfhqDUY9UH6Z9Vw6nvWeUAfgb1AaYDaERvjjDfSPB4LxNtfH24xqrYDXA1x2SG",
  "key25": "56RDAvcXK6xAqC7RJ1mtmo72wPhBezd49uJ19da44xZeLx45kBhPCG2kU6FL3NQQk7yQbWzvMQHT1zKcivPiBz88",
  "key26": "33DrUS1hGqRnVPEqfqqXRiHMMFkKZaSmbywFcapJbfQJQfJKPgjvU8n5q7kbc1bWfG6rAPq6GtJuedEnJnF7fUq8",
  "key27": "4vAvXocZycHXbPozcswa9bQN1oSvceKC9iEoEK2VuvuNC7rjJUMUNopiNePLQhw1Kpr8Lj5tAzdyLrGXx19TzvBk",
  "key28": "MmAK2DTw2zdy4rNtHJ6YJk8oa7KVU19epCnCqpYuxXQ6zMfSSSX7YZvJLBUum1aLh4ScuW9fwLDVK5WDEDwJRTm",
  "key29": "66bfRPNJ75ouqLwvDmkGRinMrroGXGw9pRQpvQZpFvEhXjvRFacjAr48csLrkSnKYay1aXbko8ggMgPZtvSiMgXr",
  "key30": "2jgYkGkhKHcobSDXcxVd9r7YEY9Jyd9d9cKo3URWkGA7z6fGJ64dZF7vHXNKa23B8tMQRp6LvFSJd2njTLjFP4mw",
  "key31": "4JWfPTqEPAkgcKMuFqig9G6jCckdgAEmSjPc1RSAFg8McMZbeSea49gMWPHXhTW4uE5vcucurN8bpkjoVnnJtMVv",
  "key32": "2p2KdG5gcaW9ctCARw9eyMcvCEUe7VFTr5DYYqzerxMUUUVQpVuGDZH141if564JnVS3nY9maLn7zfiMxyU7wKwe",
  "key33": "3wqAEZzzTV8SmJg3xo4ZQJuoUt2SDFpS8niozN53HM1whUVJVFP1KoabX8G3hxdTTUPnFLCEDMtdVeqmwfE4pmHq",
  "key34": "6FhsgjUbPue2Pg5KxBbrnp816saVdmVbSPc1GG2n7dEJ7dAy765pKnqDxTsST7qHdkuvQ2du4Wtb7fKKqmTh1GM",
  "key35": "3TkvdaX5LhEgvgbysHHfQTcf6bxnQwcwSp1AFg6tYjC6ayfWrfm2o9MhJjbCPGcPegPGTXhHMcUgR7vAqE6CjGay",
  "key36": "4fmA5P55AEic1yohqhGdK8JzqTGcqdZrFnTxBuo4r3A8KR51BAAK2xud3PojZwDE6Z4dBcGMtQujNoLJjASH9zmE",
  "key37": "5NKM2bSp6fqFZGBX3yg8UgagzMa1ZaMAz6vhjEJXLWcJQJcYKhQt5knResE8dS5QKvEj731Q9PLwyUwVPtV61czc",
  "key38": "2rva6YySkfeZCjap8qoS9nnkuEuz15XY7qPccMNZzEDZbnpgroxU1AAT1UhJb2z2tBb9CJMvSRLbWqBN1ft5RExy",
  "key39": "5kYHRpBHw8MZYupwzBCAXJsiRAig7xydtVGiD6XTtZZ7duUbhapyrMwJ6ZypbghJumQRoT5faeCjbUB5VF2deqAg",
  "key40": "3iTCutm3eSgTnJGsbyRAksjHKTm2imQf1SrmxAoVgzB2CaYCCxGwQDLaZwLKvp3uuW9KszudjzuYnr823F21RGpg"
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
