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
    "5oz2TX7n2LWArawcxfQ795cWJs26p5U1DEGjRHLDLFvWhGbfxgZVn2MDPPf5BqcCPmf3buiF8HDAySgoNpWsJA7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LJSqpXZP8UEc14j4vaXYVyjTfwuMojFYQyswJAcjkcoEjFeddzDtAorQ4eAaHYKyM5avqUF9MgkaVyYqK862H1Z",
  "key1": "3WfhjHqhbASM6iW8P9sRE8BzYjhhetiZENSFQYTz2nt9gNVJhTyVAQsaoaeGCjDCCufoW3VWfBXHsTi3pynjFNGh",
  "key2": "3g6uWozQ5j65AU8sB9Hgy8gUjrxB8sYK6Ls1EvFTiCZZ6B8aKY3gYfM3FcLRgZB1cqVYVvj6nGi2WC3zuVVdDX3e",
  "key3": "5HiFexjnRQDiutm8QNZYpkwgomji8m9kW3unyy79WUuHQynugdztfiURoanZDDgjUUMoCzQxaRnxbUHSDtQoThKn",
  "key4": "3aHvA9Mxe9UVvZSXJ4kXCDjydUUASahYQbUdBdADYKRZn4ScKpWh9atcwdHJS9jmG1KUxdqPHi2EhU27D1GL9yZj",
  "key5": "2i19NBymxmYLd24kwTGWBJ9tpn2jNoR1mLYPuHp4hthjZtD1HsFfhbEuH3HcyekaNu6vo9dU8YPUPegpH6Nv6UzU",
  "key6": "2U2tXVnDAbGtJhmwRzEKrsAqjG4kJv1vpfAMjhW4PRwdAetCaXFwHCyRoXRoFRGzgcK4vmZfggMmgvpV5BwSpSyb",
  "key7": "4yNvzu3FZ67r1k1EJhk4tJtdcwjdXpPzTHkwqS9sA2Zfb51Fd9YEXUQMrL9SgqEGKRvNYQrcMDY8aJx1fUDDo2x1",
  "key8": "4DCAuW7Ru1jBqxWdpE2omtAFDY3T5aTV2MA651d9JDcfFUqV6F1FEf1NPGQyR9e1wCSpTzuZYy3pjah9PsYRJCaM",
  "key9": "2Qdpbwz7qPVeauM9ptqUfQCRAgks9CGUs3DaivYgamj6fwjZ4mNwreYNW1cHvxAupYPRsadaLzrfgvvFt9R185in",
  "key10": "4YAeDXgURzhbFsviA9u91iz5XJUoP52iVuHecR222yzomstf29JwRyXJQZStMaSTgytx3bacvgiWejP46agDtXjm",
  "key11": "4CjegPHsFF3SefW4TsV8jMnxNLVfneSpB81QjQ3XVbfFzTDoA3wKALkikZYeew5PjFpFwwMXCvva3TN8RESZKgkB",
  "key12": "Htns4Q5v19XqSX3E8ib927Ts4Einabe4eiheD7PZVCqSRxChPLg1qhNnRRxQ2CBA8MPMnyxd55wz454BqePDDKa",
  "key13": "5GAomyZWGY3r7iaZqBJiDjbAwK7pKfhDc3WA6RrtqLkSv6hM5zsF2vpNm2mpd9D92SoWY4Uke8ovFpRG3WTDEU7D",
  "key14": "HDwyhEp6hqyStJJWW6dUiuCjjrD5SoP6mJhen1EwvPYEd6T7Cx29U2njTobESoy8CW1MEHy32GnVFRMgXj6K5tY",
  "key15": "5m1eoxTp6fgScrNRwuwPSdoderyRBkL9RzzUhVk8KEiUQt2KcunaeA75QTrBZkyKZctGctKntNS19hoB4FhPPXvn",
  "key16": "5gTqE3zhp5HXsWsrVfNthEweWxZ7fxpjRpqYNENA9FEZVAPunTvx3cj5Noi8uRCnh1ihcve5SQd9doiGpswBAZtj",
  "key17": "2vhRe1ig5URH7JiYyLKn7UKeYcydhkn3YaNTVGLoM83dmtf2vs8ue9LjFfTpWLVu6QykS4CDYtngEUN7E7n5jZ4J",
  "key18": "2pseRzfyMvk5zmyi8cwgPXDLj2V4QY2k7A7bGpCbtrM9VG5AmNMNYN5rB7G9o6nuA6QXo7xstArpcNKgym1jT8a2",
  "key19": "2femzkntsrW6HQWDHGgFESHS5CG1166bMwUfqQyaKZsk4erLe9mseMw1d9JFvMEdxygcoXWXkni7V4vZ9LTyvxYw",
  "key20": "3jV97SUKbccRhfToenRcDHKSd9PcMLMBtmuBCoYa8rouGjWazEgEq9cfXPSPior2NKt74HU74DyHDeVJ6CzNNwHN",
  "key21": "4m31WmzNtzfhSmhzXXRbAcoDTcW7Hk5azz31jcceCKdihaiQEjbiznqLHAXKa7YsvNX4b8qoB12PNXjYNKFbbiWr",
  "key22": "iZ7iS3HKRkGPXGGSpYH3CUGjkJ9dKZAPUjfwki84p7kqACsD6xesNWjpmUPHrPFvGgBXSNUA8MSGgf798MfVw9E",
  "key23": "3UUb3XTe6QmndB9nJb7KdCjTTMwhF4U4WFjBKycytPGQzLktZ49E7gi1RRJx6Y4eJA8evboLcVcoEjmVP25DEKp4",
  "key24": "12U8164aCXK7TFGzMNZsseZ1iZNMdD5HeN9w6PivX19KuYhav3tCKeMmfYcJYz4dhhz9pTfw6uFdsgS1fNes7eS",
  "key25": "JfmcQNB3ChDLy2bLTqS3zWtRJiwPq77qEwqYSHJig2FXeAyfuzT1LNHv1JGddruiKkNWswyAi9oph9zS8RBEF6n",
  "key26": "36hetiEuCXNYDrPKdutGfVomxRxNJKhRiNgiEBZmTij3mVwzafbQP57rBFtvWXGQDC4o1ZzFN3HYM26ZcDY5CG1M",
  "key27": "2hnjvsTBed2PQeGS1EYPpwMNCmN4vzRqFg8ucEohDAokp1yLRS62gjfC5WmH18RtqJvkTtTmrk94kBWU1G2E4UYM",
  "key28": "57zXifspSBHzL3dopPMAsYRS1aZ3wnpJSQbnMcLKFr8p5cipQw7zPWoTDBc95fjqbudymqgdrfsJL9CBtcvecEim",
  "key29": "aPvRtJSR95ofWCPxHnNKmbVcRyTmgvVzTbCdpt73pEeFiiRNLh9Taxxcd2D3f2PnRU5jvrMWmWJXnyJ52aKG58E",
  "key30": "5smB5W5JrbH918YncjLdWrZbbqPSQ5dAEsKqdFPeivo15zRExgBUedqSdSMP2o6Ux7GGFotZH3b94DekyFVdbqh4",
  "key31": "5sbiyUTycTxeL26JL11E2V8prkknem1mYTwKxH9BKK8QuKxWbmyeighyF6HECUKrmEEURXocQwRakXM9CvxARE6F",
  "key32": "3FH8G1cvvj5RsmkRpMrwqUHxBF6Dy8hyGBc9g7MbVBULT9ZCRDe1FT7a76eASTeRwKU1H4bz1k8CQ8ejGeNj2AnW",
  "key33": "5JApuYmxrrubXetzb6pnM44WX4nJNpqDnU7qg3yxFuNfx3cMjUsihQX5W2fEyFYeAwsF66NiT43HU5Kih2mKEZTD",
  "key34": "uDGFhUL2uRKnPVDnHZAtLSLq7mcDC3KdLubSCRmxeXAuWSMTW2H7wzWMQNxrffzWFxfq8YB9pefcTpobujmqDLk",
  "key35": "P3CWCdWtpTyGRcMupA94wQKHkLFGzCJEP39wuYf52GdNjrY9kaojpNLvJBdaSfcnXrbEBKqyKiDcMxba3J5JhKQ",
  "key36": "2qEA1CfMzvxQQTiE7ZGiZCzQcQ2gA3WiNRqeGBVdh5VqwCnVcyVseEYYwqAC2wDNqqj4jzYUMwuvSdEAEc4VVm9q",
  "key37": "2gkX7DGAyXmAct1raJWbgMHJWMsnWrv1EpiVxujGC5y5roxYoDWiYza1o5JA1kRxnfaj5wNmGNekRVKWigSg9RzN",
  "key38": "4e7nAN9pSV8jVZmYrtLiE6cDFEHXrproc4ScYv3RtESL8uPLMunioKaYHREyZ6unWHb6yX6pFFtcugSHvQGA8624",
  "key39": "5zzvH7Sew1YNYjrxgoQTiUXDLoanRf2oCnN5XW3tXM9Bwqi1eMdgERT8UowvhVjgKx1RP5nohJycfQuUyxHaHPsN"
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
