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
    "2CzpdAgfB4YGyuP3fUqGQgLYE5Y1qYNEU5w3ez7eQv5G7TKiVJZCSgyNqCntzTcqNGoxjodDQs2GYXhYQCZMATSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kR9LRy2oYzt3iFLb4gryZRK4TQLampxrg51qnEckSqRBcHLMk5BbQbJKVdQmKzhPGZVLEskUN9eszzNY8sr2Wnt",
  "key1": "5SCftZDjBRRouesr22frPXtLJRseej9GHZWHFKunWREUxEP1vTnRddev7HwRbLQgTQwCBDG4iN42wu2sPYuC6bPF",
  "key2": "5EGBUnNHgCkZiv6GdKE9LDWXA1GYGfq18BSxzuDP5RoNex1JzN8T1UDTUVMWDtqsTC5GU9wsTdH4dSHF3mskMjqn",
  "key3": "VC6GA7RzDn15WpzeQW6WEHQW5x7wa6ETmhYcwCA4H9PZ4enb2MCwDMQuAncycSbJjyHopTgKdGHwDGG2dfNXsGH",
  "key4": "32ULB895B6UmNFYvJsmyKEx2W6ojixFxpzXSdHvRTyb9LtyfQ6xcc4vUL9xr5ppVB6rs91qjNFsQ2QHJyUVEC6XB",
  "key5": "2jXcSfP53Y3xRUFYRo9s9jYzZximrFvPoyUSXH9z2b3wKWPAwwLe9jAzMpujESNdsfk9yyFY3yZFN96BwqEnp7Js",
  "key6": "87B5C1JBRvszC8gs1ycnen4DVXPLgzMQJXobfcaTMYVp3Rq3N9Nh2xnYN1aUsm7juEkuTWR4xcwZwmxkTmuPPGL",
  "key7": "4xrhcrVF7gcV96P46MBsPZ8ysjSAr4MRt8ntBznuR7icRawFXRFyJZerzWsyb88c4HKB6mEup4et55VXjkCWVHfR",
  "key8": "NWBVGe6furCd5FRqRQi7NrMz7t3jKYLAipwi8LhA5mhLP7RVmVhqRx8ojkPZVwrLs1i47125vAUeRehZxiBwMkH",
  "key9": "y3ENSEjHxBMwprPS1RTxCz5X4sxt2Hic1fGo6FfaBCwuYdkqphM2NHqzxqvShuTQWHbcD4Gb9MsN5Pzg6q4vS2D",
  "key10": "5uwHqcjrBEmf8G3wZRvamYeBMJLr22KnRXXnssao4vBKXySQ9uYzm4r8sg7TmqWUcCmUMT6kSrGgm48L9csRrseu",
  "key11": "54WTkoTGjNvG7mwTGYxSBEequD1xdPmhMcDsy7qMM43pfGDHeRo7Y9AxVQKDWHTLdfbFhVJhniMNdktBpoCzxdah",
  "key12": "5Gv3hQk8rHX94f97qxNAhTNbsnKTcpGELx4X5VxENTSbWU1uwGxdQSkfnupmvLk4hdN9StztNnt5xdjnibN6scWy",
  "key13": "3fAL4E4GM81tRqVbL1RrhH4EM7WiX4dc5J2TDeKBHgb6FCbNmZoL5MQFdeKkcRotATVbddwhsvVhBmT2WCoBR7HD",
  "key14": "b5MWApk1Fgiap3wLVRELhtV4bWU9KLgNrDZC5vhm3jsR5TbKgh8Utf7q43PToJteWi4GpEnbSGJYemRCevZAABx",
  "key15": "3juhkfsZpd7xuTemeJvQaeRnSjYZhxdvAt4YR1Jfx9kXVkATnkg5xVDoyFGYXbDG5r5hGr8bBDM4Kh7TLNzruvmN",
  "key16": "3CDKriPCK26j1XYcFMUY2SSNzmyR6YwMebEHCYqyxAezDAn8GRsiM5WP1qtkFiHn3M5mVzz4oBkHaDyj8PqLvy1N",
  "key17": "85xHKuBMfHqGLGagaMtHsKXt8p2KNhXBp88qfpriKq483AqBumMecGQoHhT1y4xvnEfFtctvKzszzf7c3FAXrb4",
  "key18": "4hYYb3rU6caxx6kxbNw9yFbAhJTVxE7BUt8DhYJAX4SBejphuU3CfwLAcG4zUaRiDcPe6URyqoTZQRdzuYc94vJW",
  "key19": "4bf9pBJieT545QPe6Nn98Xt4i6QjtrZ4DFZte8c9kLCyepB2YWQTdjQ2tYwaMes8HvEZV914eshe1LfzjTc67vm8",
  "key20": "2gj73W5k9enQfQi9R4GefS9WwXyEsbZWDzHLTgsqmQ7BsADXJMp7cgq1q865XydRbX99zsFRQ8hHZzQYygWvFEin",
  "key21": "5EMfpuA9XSFgKurq74FEfpmaqZ4GUDzPKXzWFj4yPPnwz184nupV34untJyeXVCoFF5mZEqFy3uVE5G5fjyxrq5Z",
  "key22": "65HKXt5bmZ2TkKbNwt3b52DggPAqiiio38fTWyZCTdPbZQEGLGEhos8Zh5jiBzjHGPrib8FZgDupBmduNcirYYRr",
  "key23": "Mjpftwzj2KNS17FQnak9sAvTw7KWhghrPiSGGWn3AK1GkHbfVUFGX17RF2bycdk3PH9Lx5i7HtdwtmNJQQL5Z9t",
  "key24": "5CJQ62GrM8av9imWNn3c7eAzkvDGLmY1EmRzKcYNqnDa3Ax59XQNd1EZ1TuVv4bBQFgKPz1tX46iwct4sGFsUpFS",
  "key25": "48h2CLotWEgNRr17Cz2qZsy3v2GuY674gRF8fNjZo4UvrSX1sNCFrkM8VHqjsVPqVSpu1eJM5pUgoT8KiVEn3SAD",
  "key26": "242hpAvoQgPL4zMY8181ddtUX3SxVCHAVhKKx1GzDKF3js7oYbFbNLdCGe1eRtpVYmYfnwebtUiNjW6BB4B77U6P",
  "key27": "4iqrDNna9i8gRUEfdzYceFHHWp6hbN6nqi7BkWvG2Ce1iPeJUuxJkrShVMpoxcBpxe6iHFaFrFiVuVKiif8r41mG",
  "key28": "4sF6GhsREp9rSYabh85AsbVTgDFSk8hrSTHVUAk6y9xBxwitdR6TZVRBXdZ1Kse5r3zEk6egvpzj5dwCMUnkUkRe",
  "key29": "4YJQQoc2Cidp3Sicp7wFi28E2XoajcACaq3VCsHjQfEXLRPdELXhJwX64tTF2qWjTLTM3wgviu4bXjQPfBpXAg7F",
  "key30": "tJZRcmUkraHeyZRTFTvWwAt8XktUZdEkhdi38PXyjE6kYLFkVWWsRezb429ZpUS3bJD9gaghh59UAq4B6XiKXqy",
  "key31": "5ZfK8KjuuCUMiy5CV1yTvX6J3JHLjfQoEEp8i6x5YtSCDv6XijSdzHM1u3NGzJGtF43Yt5ejr5eo1GocebMzJTUg",
  "key32": "5Z5SyMDvi6oMM8GV6Gu8c7GkD4dz6UgdABpVCED1dFfQDqHoW7gXUEVSbpmr4FvyiBPXH9FsdK7wR2uB83ZotD1X",
  "key33": "2kHM1JuZHRqQbTVFih1kP3fhkMWB1QhJv9uoznkn9mMWLpzg7YspaMH5xxkdSERkAkKxFPzTusHubLvJeypcYHPj",
  "key34": "5cZnQ1jjMnLFCKn9PYbM3cqhjTLtuwNmjh8HubtyJCeqR2EHe8SMqkUSQpXTY3kxzaJTwiDGaNbrw8KfgQkw4Lcm",
  "key35": "3Y61BEi7LvMN6tgqNAcXzJabVUNqGxYPtg752UC4vppXk9hbvCfj8fGfMXysAqaN1aEjhspFMmJLHPUnb1DzWmip",
  "key36": "mzNsLz3UBkYoWQMFUsMCpSCczWujyW3mLVZfF3k5UaMVNE7wjzrYedo6AaUhjCnpwvY42okm45yJ3SdFFz7Etqn",
  "key37": "36t3UKcYD4rLR4KfjwDtfMsksgCNE1ymAL6gZHQrgocDg2hwxoU7ASrLdbSWh1NF41b95tjfyC9uBnTNWBpxS1Ss",
  "key38": "5pthv1e11orLrXAqB1YaBFAFBZQx2Wm2dTwvsxjufB4X5ob8fBe4MZF2xpeyAuwYFcvfhPwT1dW7m92iTee3jgQV",
  "key39": "3frxJNhmeV7oufNXxvCKprUeCo1EfLtGkcXmLmBJUEie5rZK9uSkmrDUR4tc9SaGkM4cd7qQXYtyrmTDSVo9hBmB",
  "key40": "fu6BHPXt4SpJcMW68DBFKt8uTgTH1SVFcksnUtdfbSRhs2TRQuYx8kGzYsGwN8oid2utZPaAs8fGHty3yRRhQ2n",
  "key41": "2LVdg3awweHmTza7pLNt4BXdzDigAp86dfXzHSgaqVSNnVe9vYB2GgkDZPxnAmpRAU9PA5gJk8wQj3qGzw1cj93B",
  "key42": "4DiD3Cz8fUcgVnNrLza7R8yr5g5Rw7EgxcxrZytbAFtuv6iQbtGcrYT7N48DhHwQ5UcK2EbBfL1cVWthLm3P7gSm",
  "key43": "4EyR1ewZ8L2NvThYoAgMxVEQbfoJpQfbrBYqBHShCWGB7tLxgeZDUUPnEXneyWvbZi5o3utVL3QYYDb2EEWTeVBV",
  "key44": "3iVL3fgeb8JuuY8BnGtaqAsko7f2aRbGk1jj2CZJYJT86gzShr2tnBHccKQ12izVaA9qHW1jAfDKAPYcthcoog6",
  "key45": "3d8ERQ4cNE37inHb7vvbGwBakftpb6D1wP2DfM3AtpDBpvpLT4Pi91GGkuqpxNVGtyEvYp8M1pQvNBU7XpSy2dVn",
  "key46": "N9o5MhmKSvDSp22aKp1NAcE7BmEMdwRzky4J8NwJxGDSUkrbGw6vNTzHCsGa4RmemFsQSZGyur4hADJ7TzZwFSc"
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
