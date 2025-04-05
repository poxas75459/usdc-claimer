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
    "2VnxBW6hatq9z1DyUBXbB57cUosFh5kpCiMg5QwFUDkkEuf1G2zGf9VhhMzYXbDzTmgWt4gkrWdfY2gEwVVTi8ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q219g4bUiwwDUbizWiucA5vSCLmkg49kMz47KwAX97YaVzu7GCV6EmawtxhzGWaRjm2Jv9jxWE9yCLnfV7Avj56",
  "key1": "5Se7Hzi6oFdVx3NfYtccNuDbVVyhAbh98HSRK93xe1djCy5zx31vJtavmuEMbeh3xvC32BQWE6Q3JqZZtLH4aB9a",
  "key2": "4CTLqEDfgzMEvikHLwFDZA4znzrkE4EstQTP7K2QN99Tb4wiD6snousXJPG2qcKHY3sV9KZGHEZxwAC9Tf7qtZz4",
  "key3": "2EvXTn9qC84fCBvWxmgtL9iqDjRXQQNykt4BzUUL5wyr7vjWe3zudjCT6tmPuqnPKrNeefUofnPSx7Z48EYVwoKh",
  "key4": "4JW47eqHMUyTrypj2CyT6wAfHiU7jAmGfzMWJ8SAhqmkmPpmqSi5p3Vo1EiLNFc7buu7LZyTHNWBYe46Uqpn4npn",
  "key5": "2e3JR5XgK9FG2mHrcGHkutK35MA5X1yFRDiSCkFszjsLtBjHqphhPT7fF8vkiUSktg31AW3bJ6kgp4wTjEEGefAN",
  "key6": "4KiyyBPNDWTtRiEhbNzuE58DoqvwjrWcQyF3YgpiB9GFY9Vhff2LgtWZtR8P1Abrnia2J6Yw82cExRnEU4ysY9zU",
  "key7": "3Ubn8LgtYuNR3Y2bMGKLA38e9ZNgwTBVRUGSw5edLBaVXyhBuD1YxUsWRvbtAmMbUkKgk4vBUgsrfHqztjw6dcTf",
  "key8": "biZ4Wr1NrZL7c4mAVFybBHB2FUkLr4hayhtrwr4ZjSnniEfpWv4L1nGvaRTZDhNBLgFhNhi7umc3G7qC4qetUwK",
  "key9": "4Gtsog1NxZWJ2ovWgYfMxqaQggH1EYQZ6sizWBRSyFmYAQNSPKYYmJAFxWyEoBXGC48xRLPMK3bvbCN2nMP5qjuB",
  "key10": "23iKbRTRnafQTviBpTPvrGSjMhp6uTc45NxxVt9b9HLufcKccqA2XVmks7UBJ7KovBiooZT516JMiTcJ5yD7Xdao",
  "key11": "3DtSECNj6ddE3pCfKypRRtbxn1pHttyPrAvsoZm1WLj94QPxc5dh3mxRLRJxdoyse6MUBS9rFWGFN4eHJuwEfgbD",
  "key12": "237woWEbsoj7cbqcWEyhNxyyRjBdUVaXsz6eHrPVHwPYekueT5Npwvpf5Vx6K4w6v2eTpoBZquRbUcytKCrosvWM",
  "key13": "DVejhNDkRzFdNZYnH22s5G4TYyFQyHrHtQBRmdW1RvtEUjTUtoWEr1wd4SceTuPVZYHWVaiZeQ12GviojizLE1b",
  "key14": "4gst2Hq6nsjJmZLfcKFYGYuE1yqanaQvmu7d8vBNQwnG1FU6j4cwBM1BQp4L1X458PzHqxC6roq17nMEFMpdKTmM",
  "key15": "5TNTmHqL8KrcWQY8e8G5DPTinNxJ5hRV9yftSoW4WLp3UxsteMseJEQcLMvuMDujZcfjDuMoHX2kfHzb7sBJ72Qg",
  "key16": "4go52hkZfH51SBKui9VY6u1EqzNcEHiKnAcJzWBDCVx6ZeY9Mah282AtvZJT1t1CL1jBLJZetsV9AG1yW3ompPiL",
  "key17": "2YBPcGwRrjPiK7HbvxXqxMRFpCDGz2gg9L9PTPGVVDNx4xFAjsUncxwB1tQV38xzbka28Xg8DSTf6wpZ5MWsCY2a",
  "key18": "UXvAiQVFkwfPwty4RnYEPTS3ohZDdLrUZUb6Cr9crA9sF1iJC8Yt4Rx3ZerhsX9n1FfXkJ6uoxvgpBtPhHx4V7F",
  "key19": "26KyddmuNqTCVAz3GM2PbPMKyiWKcdkhRCPpTz3m4oe5sp3fWemuDrZ8upUS8UjEjxnRjaqkcCsa2H3ZmZeXqmCL",
  "key20": "5amdzX37bgHzRwCMdBYgfeFJdecvA5E1qEj7CjBzkBijaUSaGd6M5FB6bpyeoKvi75TNPRh19nP4v1UGQVGmuUJG",
  "key21": "47ykBPzYb1TPJ97BwHtAV6tnBUzooqg7BvUHJSwhTgKUmsNG4BAfCW4x318uoWhkVBn6Gr6CYyR1jGZjgnhPh3BX",
  "key22": "4EBtP4HpqjE3pcBFRrS4EcZEvhnACvZmy3FCYyxZeBsGHxrebr7QGStyS6aie4DALR757uTzxWpHz4559NP41CYv",
  "key23": "5TJemUfLpFFZjQbUkro6saUhCp2eMLKTf3nEaKVhvVYPNmEs15gfGKmemL45hDD13NZQ7z82Y8ebV3nuksj2WpqW",
  "key24": "29YAizjeSqMe1k2hbffsdti774bB979bz5Tv4isKvbrwVB1c2gACbSdXbqvKWr8q9r2KpsU5pNjFaJu7EMu9deEa",
  "key25": "65Q4vTGfmExVfngM52WuDYogcWgwbYZhas1TyJB2QQw3Za9MSMQPexpDyppWXaZJejzNBv7wSiyuD3u8jQbRAhrE",
  "key26": "3yjJzAPYrStd9rJFJTGH7K4ctZTY9kJfrUd2HYKkgLgX1aDABdJQBG8QB2oAFiKxg7MpMprwCWC4nzK9trexe6JR",
  "key27": "4YDAwzMVMqezcMNM5DAoaEByuokVo2QFXmtwXBiD4gEYiH3cRmPcUN3kCinnviFwSsujhGg1QescS5qcFy2sBnUw",
  "key28": "2XdRxPTx8NH5JHhFzi74twe9EduY8bcGjrRArJorWtbKi5i22DqfmQbfVd1b1t8YGaeQdY5xAFr6DBFnDPRM7d4m",
  "key29": "2csLUgT1TjG4F9n3FqwLtybqqveozfbMvW5Y7QKqd2R7MuQJMDQBtt2auzjzfELoSpjuq5C39aUsT7dsMF5BQamp",
  "key30": "cJaYzu7rzstQu3hhAgcucxkcTFvfreJJHkTi7BPADW2nH1JEgaX41kwrh6pnA4zjaJ1WEEPSsVzyGWRq58D8Hmn",
  "key31": "4BXao9jjqYMRxQTMBjpXEAkVNSoWfVwjqgfRhw2Xdh38mWuvQBixomzUGXKQ8Lsp4rdZaajikrVzrTVYzmaRFmV9",
  "key32": "4UAXWSEp3tLsjHyXVsEPaBiMMzJprQkuSehwor3AoFAvgTAar2tPzS6wC6vdNJuUoQ3cDWT1poTMK2MzbNifdFv9",
  "key33": "2W3FkhiAPN4dZyNgqfpu7MCUHCbu6Y9mCUwNwP6wLnE9HD5B8nvhoriwToug5oMBLkMcTbaepuF6yzNg65B9Va3E",
  "key34": "5yoy1rmcw6hawG7gULsAN6mEHJAaazVoiy6hEqKMMHTd9M5acZNnZPVXztYhPF3GCc6SGFK14JpfkKgcx4Q7tfaB"
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
