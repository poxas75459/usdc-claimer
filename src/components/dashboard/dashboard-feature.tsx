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
    "5CeAFqp4wyXPAejege3nns7NcYKDPfF8eo8bhqrXVboWeeqXiZ8wx2w5Mi3LtYjcAmRQuxF86eR4e9mYTMeQm4Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eYUiVTE8UcWavmVgVVr4v3ePqTte49VYqQ2U1ky1iedzLG9zMi6uKoaCsvdZyrqrrucMbXfN1oaJmvNtLWpMTSn",
  "key1": "2C24ws4NrwZe22nxJx6SF8GP3PHNkJWiBuWAouMaJWb1GX6inKbygFtECD562dqPRKagwPuYsU28KcTqPxnzQ5MX",
  "key2": "4kPLU9ikNZApEqC8DUeH4gcNYDzQLC2F3DToXDDQLthnSVftGF83sBFTmGwBrJGEMnenauRA8EXHGwB5XNs7XNrm",
  "key3": "6TMRG2HaSAemRu64ecfRfQ3yrohLheCJyeX2i8vtXrNsNQzEco29Rm5jkMKM9sWhxQyMvvEs9rtrYFypPVDsJaa",
  "key4": "4cwPDAVjbCm7zVwHhB5vrNuA8f3psUZGfdQGMnRGZeU7FhjVXjrbnuEJQ4K63TodMq331hKtPMSTX74W4aQBEdJE",
  "key5": "uWniSFWY9XV2W7fZYz2treAMTdyM1pzc5YREscEsb8udLbM9V1s1MociMiqRp5CGCCKDuPACFUn5Q3gH7Eyvozu",
  "key6": "2f9rDdJL3Fibv9MFDRQP5kVhJhsUb6tBw9en9rVPR9BrttHcbf24aGQqQEcymntdFCahYGhzdSKMXyf7rUvCntgd",
  "key7": "4tp6dBpdSFytE2C5F2fqapoCfTqBTQW5qmeLhE23SMjoePeW8HmDJejQ6bcVDGL1tbwoyFyRHMdj2p4SiYJoXXyM",
  "key8": "2Mqs4p3FJmU3oaZjxTN2eWNp1qyyeCH8XLeLgTNFY88gkKnvyjytcxn69JeCC5aB579yv3Hxvg1HyxxrMa8gw4jt",
  "key9": "5xezoaJsBQKcUCu6uV7AHXcEUVnrJGUtaENkxRGvDSPEWAwMV9x1E8hzFVWyKiauzwgJWU3sWXzXdGS2BPPtV3y8",
  "key10": "uKCZwk9tpdqbkK8R2teB5AKHqYi4nxJcLbdKB9HJFNqPmGt6am8wBQcEpMkHRqxK4ZX1Am5fb2RmdkHsxsPo2QJ",
  "key11": "2RyZoSXKRbCVw6e539VP6KtQdghmeXSkfH1YbnhrqDjxuoJShKEJv1wNtgEn5gHbQQJ2d8S6VnDnWzHaam5CfDid",
  "key12": "3KFzCrSLX5SxkSF8xGFbSHrxEpRM8RZ5uEAuuY9FTExdmsgJfiDCFBZghqQVHv6a5xSiyAviRjuELdMDLcv84zvu",
  "key13": "3mEHpux5xwzEtSTi58cHsqnGkQjfAGt2KMN33JAY3WaqxwTNBtUiKj3Q1UVE8KPFEKE7PGBHE6k4Eg9mdgcVN1bd",
  "key14": "HL3e2w1J1q9szAFPJN9BsEXEinarDnXqX1zFmDnRN1dLPc95dwL5XWYf18oDosxnDi5ozNoK9YNEuWSQiB658No",
  "key15": "45kieo7sRWx71w4Pa9v7Ahm9yQUf5BJBrKe4A5LSj4ePaNZuuqpfUb8e4ajjFpVYEfn2RwWs1sAaTvjdS5CjNV1",
  "key16": "4ePD7nq7J9bbT77b9SXmhMky1cVbyPZGcMUKK6PdKqhP2J2RDsDyntjCbk9wVZCnC3jrKpB7ZAfsHVCYfF1r3TnH",
  "key17": "4AoXDXFDUHcytKwtpSGkxUjocwco7c94vb1SQ1ADCYqrgoaoXE9JJvSGLepNMEakWMx2qvX1iDJLNNN1esHDcD9G",
  "key18": "2FMcHBHLVtw3VYwZC7jkvPTRybGkpfyKweyTP3eUKCTL4pTDrSvevDgqt4ajc3NTDQtX7GfjFHTs6tHZWfuq2kNS",
  "key19": "2R6jSegQuoGimsAZYDN3fwVgKyEaasrUJ1J96zSZ9p2BqaxqwygtZ576JX2oYt73wmcK6g9czU74V9A8RYGMuxv7",
  "key20": "3s85Um88yzYzRBpibq2WgppAtmtwFd4HhTQp78NbqbGVdAV54Ybpz4yFNVuvejCtWVCYeGQLGa1puDamQEzd1gk4",
  "key21": "aD2RNxedHhBvw7AC4zB12gazx7pHVAPbxGkP4x9nJTrHd5XEufd1deS8wqVqjVHVFJ5bEhiXHbt1HqPN9c58VmN",
  "key22": "5UDqoF3LcJdZjXhFSWK6nvPLy1wgiWcd4qrABSXP97xAfGbB62ynZHjKq6h5UesM875xuum3CxZ8L524QQCYKvyK",
  "key23": "53RBXdDGbCBKqW4sU2WP9fWsR9eoeUJrhmsfy4YGnbfX7VVPvejdkpZ1MPDXcH8eMPt1iLirJ85Z2b7kMmC6V7x6",
  "key24": "3754NHDda1yGZTnQ47tdqY8V1JvLQ5wXUcyGvPPmFyB5k73qs2mf5qELh1zijEcWwtbTVj2L2qUyLM1vnQEFVVa8",
  "key25": "57VeLDmTdeV1Vwvz7mCLaBpE7MruBTVD2CtnKAV6PnqHenJLzKSRf2r6dKwRpBgtkPwvjf7YPa1MqYqFnxUmUF4n",
  "key26": "5SivWwW5B1wukHkA5oab78z4YpMwmUaXrGkqjbgB4eD2YcHTBLdtk3KyoC7WvGnXhvvehG4J91cwXRGdJ9DHH4CM",
  "key27": "2ZzZa2f3daQMp2dYmDB9cX9UJt5CWJ683RcJNpJVxRrUNdd6UkduggLun9bpQ15MWJCyBHmRDhpZC6PudiyL1RYJ",
  "key28": "QXSX4J55QFpVdfDSb2DpWSjiftMQ8YMBQsUxrgbSrKK2dfa69kUaiEvy2gyPRaCaa73m6X71aXY7ni25xxrAisy",
  "key29": "57Qkm4SggHkzPa3pL9cfMdHCQePrC4xw4aaD2SSLPfvoHHAf1TKp5g5Lf42muz2tJzTFSKSsz12bTLaa35kDTNnA",
  "key30": "5mBVeGvzjCwp1nfD6yuY2EEpe5VJ2QTr6Nc4o1nEmNuKn2E8zwgZtC5hiPRMyAyJXDiyfobCx45gYx8paX796rpD",
  "key31": "3SZ7MJPYXvJASrnaFLbpHDD6ApNUYZujvHmhTzjywzYTBvRR3vLoNU1FXL5VTxCTPogHTDW9nV6sZ2aGmVhHot3s",
  "key32": "5HCPe3ARoA7x7BgCykfgiu6qkjvsqab13xu4963S4oTZkvZBNiHn9dzAs1ueXc5yXaqJA9UJfdayb8hEBFcpTLBv",
  "key33": "AwQHEMbNZTWYm9qGMooaRdBnhGczmqTYSabQ4Pmkc2BhPojq7YgJ35TV3orEg8cT9qKFiTTh1NzUX685s8wUi6e",
  "key34": "kVGRXh57HD7cmzLqzcc4EEjh5uHXhWvQKuCH6GY4V2epDhAq8JEeFSgwHJSrLHTMKfmYjq6TdTrkgqvWSUJ5LZi",
  "key35": "3K9DCBB4LVsASaCquMtpjQWC3NnU3NedbHvyTpDuahyVaDKR9nsznLXZ9LYR5thdTfUpjp3ddqrUDaeCNZkXEnhN",
  "key36": "48DNoDBWDnTiWcaiQwn1gYbYyYbkmQFQi5HsfmgNUmFPYRKRk6rM6fUXu5Txy4sZ6HQExnWoScMGpdgEz4bDzPRs",
  "key37": "4sVwvzyYcWQpQEb9LNwsVzTX15iXEPNM4hkdaArj6rhtmdq1X99Z9nEtj4GuRrQiC1dyGoYHLMUofXMs3BUDoM6B",
  "key38": "4MA2cYYNmomVerbg6n9wTFvfDbyFt9h87rJYkq1vhdLUFMEb8dFPgjoeuGZeQHdMcd54YXjB1Je3wMuj7TrztTo6",
  "key39": "2ThzKipv76kTf7rF8wLHdzH2ReRrjAKPBcQ5Sdkcyms1LPG19aJDrxW6dppbyaKUNkDiujC9pZt7KXXXDFeuUmdy"
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
