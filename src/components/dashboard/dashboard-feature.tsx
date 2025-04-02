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
    "e5sF8CiqRUMUqKWqam8MT2bP4KMuonKwNxpW7jzjCmZrtL7vPni1dQCnSKoprW2aaBq5fM3PexK8AW7kNh5yE7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ikSNgQJrxiQosxqwXUY9xkuasoVTP37omeSQt5hsmYpjeeq2SUztVniLzkjVk4FdK5RGwtDkgisze815phRbNa",
  "key1": "26NnforrzSn2e4RP3odGBXpd1A3iCWC1VKQEn7xmrsYNryB6fJbMcLgA6obU6oNg7iK5k7GUMqQuVjCHKKxTWpKj",
  "key2": "GKCcHyd6amwgmKvpjCUtDDi4sFmX2kfU9mU4TwhnYLzfVcYcyQ63QjAjDQpmcyZFxeFkqhBYDTGE8MPHt6gyFc6",
  "key3": "2xa1goWszTb5cbqnTu5YowiFk9CvhVZak29daYCWG3MDGQKDkg9jfYrAtcyF9f7AA7o3aPkmG11bHp9w9j1Pvb6a",
  "key4": "2XcmNpT6yrK4BYhj5UHr5KpNPAxpNKgWoGEGK2Yr6527ETY9rhkgv2Gajb14krVfAMj8dnL5hnqALkzxcLeiiyUK",
  "key5": "3jRXcy4DfETNXEmRoaLUujrUiua6y4jS84g4LCZnuYms2Snh8N5W7VABXeZEUgbFmtfcZMiJP33BfyFBGzE2LU33",
  "key6": "4WtyQDwrws8gPTNxD3LiRUA2ru3ixP1u9RUTquAz5qFpfuWLagkKQi16HCeXn6NTSyXCaAEpYswQkohqihpca1og",
  "key7": "4Set3NWhZMCQ1QQkw2dc5gKgqze7Luk3Q1HEaoVf5g35R6eSxNhtFuUSovZ8ydyM3aMKj6MiXZWbCxE4i2fchkLj",
  "key8": "FW7eX5DpdEx7zUkjXZc4MYuajzGoH53AV3rdXjCw4ptSRwdoUhKT7uxhNE1XxAFFoYkiGWG3LNT6Kwoo3KrXpPa",
  "key9": "2PdfLCQW2HU55jVrEUEb3ShtNnRq1kMwS91GreeqpAER8uhUchujyeALGUP38dFbqd3HKyhhiQqYQeQeikc6EBEd",
  "key10": "i6vEaAD44Lm7mUEr4YAxcWD4t5aFCrTanF7C7LE1Z9L8Wfb3X52UFWsoyaX66yDZSoqL7XXwcwSc3FxQ1DCQrvJ",
  "key11": "29fnjPvrJe5jg69bR6jcJoigvZkEZZ4v8aWHq1CRmxiLLnfsjapcYKe7HKsgXwZ2eptWC9MVgCj8YzzQFLq6vfNv",
  "key12": "3CuT2ygaPSZG61VHphGK3mtK4wgXm8jHeW9u6sdkwfcM6buKaujcMQjB3jbNvwt1TAf2mgQno36hstfXRdZTuSwo",
  "key13": "LgM6AYc5MXZ4fCuqT1wm6RZapB4pBnnwSLNLv5aatipEShRE9ahvMMLxmTUQhHRdAjmu6ZUUfzqrsnhfSXB6Sf5",
  "key14": "4eAk9ZVpqhkYCMQEmbqAcESjpTVDsxK9nkJYLWX2PdAyBai6LuokzcmFxtLZsPsr3Qy54m5cgBNJBBuS2JAFKVo5",
  "key15": "V17Jpw6H35MDeZam22JU4EJBGgcte5cFcSKiX4hhLtK28T8F8bbJugtHGnSr673ZL78zhTTpk98SdVetvwbeSgz",
  "key16": "5VpukVqr9DMYom97Hd7byec54QBQ4AwZkvMDkuSehXKM7PPXfr51Ry5GNpQKc3zwkQqhQir5KFAZMSTH6T2gLF8K",
  "key17": "64qG8vdFAA24JMaLyDkupsCs193PyP7cUy4NLDCkXtwafc9A2P3TrnsZwpPwJmzanstR2ompxo7tZmB9T7EZ8T6E",
  "key18": "5bmMXuWXuMLJ51SADJAjTsLHArUE6ZDT5J4jcmwfenz2zWuCoy7RjGhybp9441jSUqWEyzmr3Xb5WMZSwpQHHxuV",
  "key19": "4XmKVSLxpCs4EmZAWucAY7s2xGZarTu74RkucoL6KY9yFzUCYYv5DV55t2JPjP5uDWVun5aG8vYAHCmCfcUkWrhU",
  "key20": "EPC6DGrZxxU4rahMPSnUDcigkaGEduG1fNTXk21v3Kmw7NaP9aZbHpWG9Bp22qeJiPVYz6wqcCQFQZK6zEyV8kR",
  "key21": "2NwKQwDQxVtG2NZci1Yq5pzyEoazqD9JTXD4bVuencMsftRANctqE8nPzh9LaAdUqsj9pLK41KgADpBokKQcpFoP",
  "key22": "2L2tURsxhdStdt2GiDZcMEi6C9zo1PYAtLKnLHQGkzVoLkrHg2YsAy8s2gEKTqY1jgtinWNzCzEXo9dZyD64313g",
  "key23": "5QDzm3tfVNCE8fydyncZQ2rnM4WSnzaU8yDcMW6ueB9JxruTNARDA3m1gD52JfVMTDU96NSjyr9bXMRPf1osyZCZ",
  "key24": "2p4Z1AJ2eYZLixAm4c8qwFyxNs999zZ7jFrkChd6AoJTg8adhb2Gykk9CZTXYCfQMiXAf4wAYrxkiKwZDCw78vt",
  "key25": "5RRfeA3mU8nSvoATmhdMcy8ZWhJrYJW7sFgnyHB9WkrkeXenPC9PKHhNk69Qy6rMLmd3U19C59GqaRRbYnk3Ziux",
  "key26": "2gvC14Ldov6iaCT3owCK7hRUPFqEdTcPbUJHwZk5jrLQfU55tL6RTD3GAs8xyv95PTdYU19p9CmWZrU8abpcw3dH",
  "key27": "5AcubZLJwgY1baQGEWTu5Bran3KSMDdEFpp4orjqkEfwyG7LiabPgGZ8CToUEp4diMzcDYWpQNqhZAkJaMns5yFu",
  "key28": "36NLaemaaV52xo6BMKQ72zkpcagFq5EaGmD1o3Go8v1TV2J88m9ZEArGyuPwndK4GxfB7NmCJZjAmJ7Y3bKYidwG",
  "key29": "2Q3PCavjtxJJkrEHnJGyZ9Y3EvxtAjetRBFveSRrUGtMvUJoebXDvxEjdBQ7BDi9RZKGvxXeDiGBDgEFs742cEqu",
  "key30": "2jfrXZ7tTRHavri7H62ro8jCRb6TqcKXoizBHrGEu6R51C7dePaqHNqyyGcna8tvmWSbV92hHsGQHKDLBhM1Nup1"
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
