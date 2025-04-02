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
    "5VAmkBZrKNC4KzbX32Y9aHZc9TBGpzS14Y6Hey15ebPdXZYePoXwkejc9cWbru42UApBXa1WCxCvRNqhvMzH1u3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXPzzEyzjJ1YX3CUfL76MRUoTyd3CPJrdJxVknoRnJ4uSSKquHV8GjrGux4GGimcFs9tnm4hqL7RSig7S91oPx1",
  "key1": "2ZyMzhGxY5JKFkiYTfGdhMZZGw938EAunPmP5Ju5VouzFXiHTK4QUjPY1iqePtHraM75LHbV76zMXxWkQiLfWbyK",
  "key2": "2ZX5R75hexXLmamTHyZcoeQEvp526YuTaa6Fs1871TKKMqG3Bbb6pxF78CuKMtgrz7b32c4sDxtx2dGr41mUNZHK",
  "key3": "63ESTWqY4j5VWyCFewLiYZt3QnpFc2JfRgVAqzoR5RdUiGP3umXo9dctHPJYaymVq2mCu3xMVqKd8nhq8DeDB3qt",
  "key4": "2E9e21kMKStitUXRzCnsiQB5pjymbZRdn3jnZVGLDq3ZkQoEzFSuoJyug2d1i1eArWT4jocCJ81Ext7pGjho5KGH",
  "key5": "2aLhu72CwjF49HAAtq7HyBomWFw4Wso7rD9mZg1kCrUNbZ9nLwqaNuhqXnF9CqLW5i7tNgafcuCJGJRG8t79RXnu",
  "key6": "4F9k2Nj6tzdMdfRwvPX3cdt8gwGqWfmicyJwLztsGwcgobdDx8RCqutWthYZvUUWZ4f419GdBaFRow1wKmuNuRzX",
  "key7": "tMuGyPDNVsFZwGENSYWded1BmUHgzKyX8yCJCUU8tjpsCpnPj5Cwo9KGfQAcHEapWe91b4p45HMZe3NfUj7tfkq",
  "key8": "2yo16czUE2yWRXBy7rHPmMtSbKcD3X6Dzwb2B37J7jVpycXq9ia1kgy48tBowqU2jmwVWsUpsfWzDtZv52VLyzBp",
  "key9": "2FuZnKJSMufJHwCrTgbYL8ZYnFpN7uiWUurzyM41Wfeb3gZUDQpeFC7G8cvmyyrCkqrqxBA2kdnozxbD511LEJ8x",
  "key10": "4ARZ6D2C16DykoqSR8e3oNsEzksbm14Q4om2z7Zwcf7T7wcgq93cc4WRuZ4tq6Kn4uB34V2ovdc4FvK9ghdVeBUs",
  "key11": "5JKqv5chFbaKsV971QM5t3jGFvE993R39XGGnZi3brGhiTxu4vHWnwMAwTepgn5sZWtWy2WbBSPiDHiWtzbkWM8z",
  "key12": "2GYcBEdsdA2hsh1yr2pi6SugRdJ5yAkd3BnRrLtxyLPf1cJTpvkRvsfj6w9kDac1GbcysbkZkB6skfsP8T7KR8UT",
  "key13": "BHBwnMAvsufQLTWpWoV4LWabfFwoQzkF9V84BwTiCi85yVGPvLVkFjfFgLYRFZ5dNuDffcUceq9AG56crQKxkjt",
  "key14": "41xhXSCnGRgD5eHMH8kxNMqwLqr3NhSu2bGjoN8zrNeYE8mpCqY4svqf2G59TrT8j16RqsjzjcrznT8xMLsY2Swb",
  "key15": "2vMWoag7SchnadUwfHD7fWWTK4sYX8QbJnGrjJKSvvrMUrvy9xY6DaM1diXvyfH3ZLTqeNVipC7BWAC2WScTVWwA",
  "key16": "3XsbwmpFSkR9oHGHSp8Pnvt817BKAniadhq2sp1rxtmXFvnAwaSU43PFRFbVHwvM9B37tAPwWRtS9iYJirCp3K2N",
  "key17": "26W2au2QLqE6wZhTZA43R1NeN6xwtvHUkA7LFQ3rUedrHFuuYdAjDkBgyNfaH5EC9UV5JfumWyevLzsxRGnALGX7",
  "key18": "5Uir4uJVNHQ5d8QBv2ZK2uZ24DiiUzUhddArb9AmcuaHnLPewmGfysqZydUxQZ9RSujbmUMinJod5hjabPKxLZcU",
  "key19": "4hu7kv5XMCPWZ1eiidfHQPVTw5BhP7bBHmcLdYKL5mG8W5gbHhHAFPfsMFgYfNFpBxQCe6TE7RbqD1HkVjbRNC1t",
  "key20": "5yohG8YBhLteGAnC5tTDXyCkXDTjtGTifpBiM98ukd8vF9egC8kgyCTmMNBgPEsnAGuiGCXrmBS1YRP8BoQa7ex3",
  "key21": "2azxKhSXxH8smXj4qNoMJ3WZngk444dtfSt89yZJ1arw2pw73UHmqjxFWGKxqu5zqsp4dgPjov8iP47RNtuPNk3Q",
  "key22": "5nhnNCbrqhEwoetk8vsPcDPLXxb9PSSXFJ5khBWpRaUxSescABHvCPKZyrJGcJHMw7ThvSQeY2gkPL2u8Snoo5jh",
  "key23": "4ARYxi3PjM63Lbvt5mr7W2FhQEqZFvseMKEvJZ7LMeRAT6EgemHgmvXf1ax4ASjtpFKo5xsizBXMx2eNiN8RMpfJ",
  "key24": "xbRvioVwhkoq6xWbvrofHG1eFBrSi4KshjvNnVDaYCEPTmrLtkKojp2214L1NWroSZweG7n1q9ssBHAe8FnVcZu",
  "key25": "2dCANVYDSeXC51Lh6JkQRnMNGcf63RrnWU63HSzpx6NqauQh5nXCguFvfajSbv7W1MCq5Anfccyqeq5iKrhLzRLg",
  "key26": "3zZ6H1kWP6zpJxjEGhdw7xyUzB8pyZzFA7t8n1SEEqA6Acrf3BUhxuL2QUtqHfuPPv3UNVbTUwvm8QDUKqBABLtH",
  "key27": "EHAiZRFe9T6tsbvfcNrpjsjDMpcLaLmAhCumQgU7AoTsQnLsqjPdZmgXDHBAEDRc7rkXegcQSyqoahT4EeMJhKD",
  "key28": "5Dh6NDzLqGmuUKAzPCwHVdYqNyRZQFwhihpE669RbPHw19dvjMDHYdu6Lse6sCxRJfCD9q6zJqPA683yaYdMTFn7",
  "key29": "27J7pJB7SpDzEig33Lbvn5khBGj37GdqEmkUX6qsXRj3WqsG4h4xmMGy34guq8ffCJc2iZhVH2hh3cvmZPgngEAg",
  "key30": "2H1WuNgvF9MzxchpXEw3QHWwMGJgAx4ssjeoKyKzorMVqVQk3cwN82TH5rJNSMm3VdiMXJyKfZWVoSEjpRGY983U",
  "key31": "2S26gALyMsdp5SWkt8ddY4qhch6V5pJvkcaq77Y8VnSJo5CzFAbLRcnKNwbGRbtWCyYYkByw4B7YzbUvimcUsKkq",
  "key32": "GmYBqZxeoGBD44kG2bWbkeJ6HCFcN59YCtj9LyMrVE9RQ4zWivQTBtyeCPS49yzyosQ7P96QrnR8ZfBFtKVvPQr",
  "key33": "3eMRHyV9mvzunjB45URpF3U2Fo4BdPqNfodJnABVwNqDjG7LfLSCXebNU2BAMaVVTWc8xcGseH7yzzR15RjcTSkT",
  "key34": "62qqs4chaxG8kQCvMSm78d4ZZFvjaGNtx2iRDfNUsiuePCgdQABpfsYYdSYwtBuDLSLJN1JFdcmy3qbFxfgovUCH",
  "key35": "3raZdwBDmP4SPKqroTAk7kSbkapebhyKQ5QhHC9f1iSYS4Wkos3cC6wQnvdEhLAVEEgpg8WSLyGyB3GTuXo4SCiT"
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
