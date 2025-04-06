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
    "2HCdgMbBU8i8gBPBHfC7NjoA6SAe3CZjLfnvCg5samKJxTMq3U9LDxzJQhAMDPn2fobosPo5b8RhCLNAPjDQ6JnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YoayjcuSgXRRfDrWAu8jM121hNjwA1nX4HKKGTryDZA5jVmSDNgsgj7rAJcKzvUC8mzp551hUnznrHgPbqAWhcf",
  "key1": "SjD63QfVhMKLziGzCsyVh4VVf61yjPoTJpRzbR2zog1hjZCcnRicZRhEjjdaAth6XSj7en5X3Gqityx6GoTohkq",
  "key2": "4RpaHdte2UNHNt7hRhNvkzjA44BvRoGC7dqaAS2e44fmB9boCU8VGYDx48FUaBMy346r3hJmEcJ3DVLEuwxWS1Yu",
  "key3": "5izhfoEnkSWfyNgF26ke8UAnWP8dK6cQByPnRJQmHzCwF5n4B3XKwoV4twKoxf3f9kmdjmDRzkRt2QNK19L9PKGf",
  "key4": "4ssBiZpqLAx31GrpKsBNB7Ma4PqPgmQLmfXiDDWJx2Sr6WYzX4DQx2ZzagJtfqNqPwgkGHCGcQLtC3eRqY1VGsCX",
  "key5": "4fdC1W7zLgWyU3nhfTA6YmLCnU7WqSPPimp8krjQSbvMupRGXk6AihaEn9VYA9BQEqw4x2C75CmdxZTy5T3so788",
  "key6": "2Eok21ayu53wCw4pK92n7ArTVz9wsFaab9TYtwUmKrWAwGeNDB1o42gQCmEkvvoNegUM8B5aZ9KZznctc1SAoNCz",
  "key7": "62arebtebMypcmgdFCrqKAVGUQf3GuNdJQxJw46YEj4a9K3VmGVY5CKA89JqQEZuJ8aPEGGm2hFXccszK3D9edJz",
  "key8": "23zNcYmQUE1edmreNpSRqZAxZBZBJz6AiKRX45ZprAHDdasuZdu22jr2sf7kc6GwRKMjqH5bSY76AUjbNZsmmPX6",
  "key9": "5H32TiNAJLQ8VvqbjstJZswibKr8FcnG12X9DsdSuJu943iKPonKsZoB4LRhTFrKrSr4ym8DP68zXmeZg4n9XS6U",
  "key10": "GHps8iAgvf7Xua91EhHgV7JERXEUrPHMsH9Xrt81MnWdDuoZUtQTdtYWET98SNmchoeBRc9hH1gJEJ19oFPZnEX",
  "key11": "57EuatvLFceeJuSQHwuthxXC5xes967bSh69ntkTZqUBqPio3UuZBCbton8tMMdcww8H8s9Shcis5zYgHBmw8E7K",
  "key12": "Hb3upDvYhqS5P46eXm7AZB6NPL1KXrBqZsZvWoEhmLEFEW4SdTL43bJfxbC1R4wdSpYMhLb6bszbhLUHULprDaS",
  "key13": "7eD7UgUPLiogCiZ966XiwgU92MuPT7y8AfaGMu4FoN2nrGRhn9BQz5VRL5x8TkSUnqdPpkEXSPkFwW55yNZsi1C",
  "key14": "m3TG8pwi25oUtp6KFN9rPwPiRzfMvBe3cWnKqNhdHFQZ1sSfXcxCQkA82EVno4qkYMzqpGQSX41qqqfP5UYsFJ7",
  "key15": "4ozTiQqM4NjAzbFSwSENwnoVExL1UbyDTRFFjNBQk3Act4Ur8iauBSgUJY3AHbDUTiWQcaTNDk57aj3WqKKL73pC",
  "key16": "3Afeh5Zenww77Hfs4pkZSgZcGjSSw4URBeP1t2Uao5qp4sXtzpdcKE8srNiFhxianjA1LZovjX4aHn2cRzcm51WH",
  "key17": "3kV6koJFpV1wYe85FpD1Zs3jF9nBdeBSuqqEUWWB77MdRbZpHpRKRtx3eLevnzaT4tagM7EtrYD2tdSUkeXzZdEx",
  "key18": "5o85f3Na8uGsGUvcuQZUGttA127wSBD2HE1BJL7SudFCbtG7FGWc9CqTRfjEvujDwokQKb3yy4zc2dZVDKhXZow3",
  "key19": "3R4FGuJdLh8UKxS7N8NTEC9W7gtE9ANiA5NxtkqDVswaVANEdfknxjK7iRPceCLe7NeNnkPPSsq5s7k8MVpZ9Mxp",
  "key20": "3GbZ6AqxoFE4AJc9AazkRq3LnHTEBu1FEHn9744NpTZs3w58YZcQw9GgZdajcE1hEcMpLvtbPdP6kGkazbYWsA3S",
  "key21": "27FANW8yrGF1ERgdFpjv25ueHNkRNuMVZFd9aqdkgJyfGPfqFRN33i4yjTyseABye6xeTgQ3tprQ8xE23gyLhqoE",
  "key22": "2C8ix6AH63DwdJkVXaLXKGV2wwxP3ND3c3hFzJVppv4gTVkjPsDuUrVohKTVRAauAGCyXELNMKuWLYWenKcMg21Z",
  "key23": "ePjUHq4V2m8Bc3CxJcj8DcgZCUUiMiHjYVD2ByPTrhjwXe5th1BuHbUbB8qwBtWjWtwXURefNukWDaCyqs8jBiZ",
  "key24": "4MTmZ7hREpHHXavCAUPDeFaMrQBftz81ExudFRZyLa26CMo5uohP7wiripzwNSG7FBzj8vhYpJzNzTnTwvbeYgkU",
  "key25": "4m9pT5bS1bqAVwA4wXSr4PmAL3LhSEhCAYrP1m5PEZksLqLMrEDTGnbdNGt98KwHBeCq6AoiyENqrKo4z4pDiFy6",
  "key26": "WBjr3Meimybge4LqfPJiCwUGRz39nczv3yXyMDJPm9jXq5BrmjUGYFfyKorErCShAshiAQ8sLh4A2MGyLhnyric",
  "key27": "2UD68mxdo6fAy2b1wupxdCNqcJpwQuAvtxLPu1qK88g93xpowUPSctVnuVDKewQX7skkybNNkqvZZfsy7rjM3AWd",
  "key28": "4Kd5FieFcjaXgSHzwrrwb1QgTKynnhaZXMFv4AyTmDGboinpJ4ddxXTsbntrdVWGS8RK7McZynu6JRdi6JFqerPs",
  "key29": "3qHGNBkzqv9GSvWbwuyvJYmQuieKvLp9HZUvGWhguDzReUqWxNG75dgNAm7QpGthnhyJ5ZqdorBanr88MqmxQoaS",
  "key30": "vYBYPwfwvs9TtjP6W7PYsAQKM6Hka9eDtBhHMekUKHD5Fs9Gi3pf3oKaeDCRz2HoMKn3kHkreC7wgYq9BfEuXtA",
  "key31": "3uqCiE8ZKd73bF5gmiPBjdpGMN6tHQhh4Y242enhzhGn2zWyXEeq7CLZvgymPr3f1FkreLJbe5USKje8mA4U57GF",
  "key32": "4W7Kw2VeKjawWrGbw3w3A5LgHBT4QCsQDCHB5VD3M31MHhtDqoWJS8h5XGMXgE5hiyQyEUyxFnzVLirxc7j179U7",
  "key33": "3gyGRX93HTtTWbwCKPC6RXYdftzPZHXiLueSDdYL4rLYHsLva5pik3hpUdA7XWxrfwHZqKfuZKuP1WdUvtakw7y3",
  "key34": "2C8aj7aqEAhEFL1gh4KU8vnpoQByM18mZKo3FhTtx7Q74YSA5gEpDe9YQ96ehiRumuRqGLqnr557pjQ11AhioePr",
  "key35": "25japycL6QA9ZiWsHQSid1xZvxV6E5aEMUth5Nn8Vs8d2EvNegpxtmWPXxpLVyy2hxMq1rmhFXkFZzJVPPWHhhGm"
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
