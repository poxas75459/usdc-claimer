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
    "3kYupRb9AhmB7H4ZnuHjN3dJMsoNy25EmUEqYi9MyH4ztNisod2R8cVkbKpg3xK6HrAuiT73D7TXTDgC3yAUFH3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYHMeFvS7Jo61NstW81nwQwqK1AhN1BsKATzpje8So122CxrGqMRcim1L29mzPcn5N1QfpTGp5XuG8X4sGgzFDx",
  "key1": "4u2ejpSsmmNVRnNZyA3HefZnvxwXNCkJZaajkz7SPnjC2J3onXbVXSa5ru3YLmPaUkS49jkiD3NcJ6FpwZoYEJsb",
  "key2": "u3ZEA1kzR8j4HcE91ns4LvwJ2eNJArMBUALJMCZQCsKCpveqgccKRBsTdRqRPikv32tZt2Td1hhYP44UrpJK5Kb",
  "key3": "3EoRZofrc1Xt3QVZHky3yHt9ZJZPCFEhuUNPjyEmSuKKKyNF9imFZhvQxZ1xi82qg8ujvo36vGQ4GkAdNWU8LoaJ",
  "key4": "FhykvxJYnzFZ6tRdL757jUs7Jq9jBovQJUKHpQVds63QL1a7yNyw3HFMeQAkmVemwxqsnzDzeXJ6CS48eyejAcc",
  "key5": "a5arerkYVfjph81pZxjP3ca7X3zapNnXoFRVV9y5XsHo1gcho9YVGbDUL1RvRG7g9UnFD6uEbp8Spj8nXdvKPKy",
  "key6": "3UDxkT7EvewMjW1ov7Ku2VxaFDiEtmBi7Y3tNUG3ymmqJx9Qa2c3VzLqsJkDnvucxTuy4niZqWqic9BUGVu6ZHYC",
  "key7": "5nfRyDFL8uQcnWKhsX88bkc9LTz64KiLgSNU1aHAGNGoYdD1ivnJTwkK4dSs2S8jb4igfBZavgyQWDEv2nqSeQM",
  "key8": "3gVgDz1r3CyAs5Wv69Ft5gkRKuHBjKNZkXR3fGhzq2hiaLoEnWfx8BgVZ1kyqtuYgT4oJUA9FQH4ukXS5DR4BnxA",
  "key9": "3s7J7JnGNfkgP8R2751Ahcn8Y8FraKJ6rGvhYcosDvvNQ6yciDeJhqe8fdRSxUheDPiyNv3BrXV5FJ81DCFwYTPE",
  "key10": "3MG1Xg2gtpvdWq78jNHHqp2UMTfnyTS7L11d3Sc47haDJ6Cxs8oZijDdwuerwF6eXw6g9ubsk7w3yzpR5tdf5JTk",
  "key11": "3WPNworgkQ86MAM9RzfPdDBFveY79SkMFGv8HtEBJ9JomLuBW2MgF4t1z7iTcnZSB7Gx3ZuQ4suUdM3ZkPEDzas8",
  "key12": "4fiabmVz4zcf2BzVL7FJJ3M8AUUbLJkxWGaFrVvRdChWEY6XPXDoDdWZm5Gk6xWgH8EZvhBGNgaBk3RiAoswEWcK",
  "key13": "5HpT8Fqd4KY8rpPMD1ehNeq5Rz8DT88hS1n2A5LXtFRSJzkV6H42cenKHCqsrxQrpttvfXV2MjmtGnYzYZrxA5t4",
  "key14": "5x7mayVYE5DT4voX2bqfbqfiqZgBSWLSMUw7HPh6dfgYZGsxAd3rFTmDy98aMqTLpzBLzMVf7pzsXVbkbGDjiemD",
  "key15": "2beJQ5XkuwY8T2jqapYopKbzdvbbi5W8CCo8yDdYvbju18J2mdBpRiQP47pTHY9B7JC9qQoDUSuRn99n11oDwYE1",
  "key16": "KrZsWMUqADUdqkQoDcKogygDrYTwrZ6dTkhrnpdzySFin3CU8LF2z6a8z1F46K26mSBuaRf3ag5NjvA9sJdbfie",
  "key17": "3o7zVenDMDdTT2av6jE7vkcWkJxEyKi5xUQ3K8RXecHAxpAeovSDLKWCu7y8cNn37s3Tmb8bXXPJ4ffhLxNwXV2L",
  "key18": "64xT9wQSMpCB8HpE7bHYYzBP1hnChD89ottThKqnvdcxwwMqhCYCZpDhCfAUELxfV1n1Yds1diWGU1Ff5QeF9En",
  "key19": "3Xm4argAEXpUWw5Vsjtp1kz6z1bNnXGEGg8pyjdiGV65B9gENJEs8dowTToY5tPVbAei5ciprJocDi9g4hFnXisg",
  "key20": "qxnGS1WA163RobCvAYq3isC13XQY9Srhs7Qnez2soRUnw2GM4GiFRqdGyNUaFstk4a3GbrsaHU2MeNoCzfgUVFd",
  "key21": "JEdqoRj9PubNqWUxwxVAjzCc5P65WR813qFSdsP6Pc2z1gytCsaU4gjy2e64JJzdxGSWixYXLQBE2o7xzrf1g7V",
  "key22": "29roRbwzaXwb6BD8z9wKX8yB5ggjUgg8mPWWAJSihSjRnpsjX1oSW75XuUAcLQesgPYrFkgEz3Rxda3LsuG57Tdf",
  "key23": "26Cu2RWCSD9iyUZ9DZkwBBVfdw8n9L53Typau3sjDvet4wWGVX8knZ4z691memX7XxXJwGYnZnQmvvAxZXaL9VWD",
  "key24": "5ipChELHoegpMHub1hAL3kSHTBmWgM27g2vHuT3nz6ZMjtyDbQ8gWTRQRSHNnLCdiuYa5LBopLqQBh8kiS3nWgQ6",
  "key25": "2H6ypQ1q2VfBSudYRxR39mhsZNjGzwXMmvf7wvkAWVBCtPmMcgaXnEdxN7F45rZyRm1oLEswZruqJGk7Kh4ViNGv",
  "key26": "2F8L1eCSF7pZoM5kghqo2FuVvxzvxT39wuAZJizD655NPaXwQtAiZjM7Ywf8EmMm3RRTPxh3G31Ege41BZQNK4SW",
  "key27": "5EBWusSrvJc2CVCmRmExsFrfuf2yYZy6AiK3UmAUeqywDPTpNsUpGmeSvDbUtJJu1KEoeuKBsNfAMi22bFXN7m7k",
  "key28": "24vrjuUmQBfjzRFs2vfEaeAvpxEJshRGfLU3BFd9Jd7YseKbKvTKKNErQg2R5EQTsrYP6EK1av6dbjE2jedLvVr7",
  "key29": "3ttRF29eSHL4RJNHcip72gS2oo6YC6tQDV2crcSa4U54z9ZGWePCa2KonpeT7R4B1QnrtxcvqkWdoc6wVwfXrXg6",
  "key30": "3ETCZM8KswKUXvJJ4Lj11kwPdUrACVaQP2dP23hFk6NGZUby3QrQq4YtBWjmCQKejsFTtDdbr14pkWy8Wyf3f6un",
  "key31": "5PQUSFNgxvfGo5CXhUVHGyzwWxfyBURMQwwJ2imemiRCmfJ7L5V5R38FxWtvHt6gFh3BuNLLExirnT787oqC8bbF",
  "key32": "2YwVUXRhSLmj6pACohvo3oCBhhjqM6qfyZxGF35uPyJGSzHZrEUxsH24NKpZMtzZoV8cupTXCykkgzXXQGYDkmPX",
  "key33": "4VycLpABPArPMqQ6K4aoBBRFK6T7T9jZAYcwy59Lm8urMkBYFzRLXyL4Ye2gvNgwx4WiDrr7mPA7MpZsMq92ZDWZ",
  "key34": "2sGXj3nTjNiMBvotR8RtjgFchQWuUNsaCw9zsvuRzEzynz9fZXV83UK9PMSsfU5GtESkt9PWEgRuUR6T3fSD3UZU",
  "key35": "5FmgHaR7RyygYbz54DzsLEx24U9fACNAaPFL2sMYXRe2ETCjAhbwpFrcyhwMmzoHMpJMXktMEcBdHih9c8RF13yB",
  "key36": "28i6PgrpuVh9mQav3SLbjMtkRGCkVTmhU6SJRzYUysw4ttTr9EdzHQVf8nTCDUAthw4XedHeNHdBkjn42uUom9ph",
  "key37": "3jQ3fWgz75vzp72jMU5RysHjG14GcRAA2p86CiE1uCVG7UPFNqn6Kv6fHnNEyZT7FBQWyHqLmAEZQZxWQV2Ez8DV",
  "key38": "3xT2kyRdLhLD4PQ66oz8a5REpoiBphCcewqcGVVS7cwMzyCzCK48gasUTmWsn4ZwLHE1YdC51seV2aQ4R94FtxxB",
  "key39": "5TZvnSquoF16C4h5waADBXws25V672N6DBKaJcP1YdhwRYP6Zzc4GDB7SgTQE4AMFmZzG7ErhCwvpJdZ9k7yjpHi",
  "key40": "4dvVqbg4fTDNwpHYC1F5dKTvji2MapTYso4EWjFegQTUiQgT9u8iLtEVb4Swr81pLVKmkXwfdiEXvdWHyZzQy5x7",
  "key41": "4W71Vpvn1z84H9TPaUK1nYgtXN4S5DTUiGLbNaTkXmyAXRr71pcB6vQzibSuZYYJsge9PrE3bnZVuvU25kbMprif",
  "key42": "4UZb8cNMFuW2y1Vrafj1SK1HmghSX8NUuPKRZR4FxFK2kHRaazKbJA7pbGfutjHF86G1LG5xBvE1eM1Nmoo1RS7",
  "key43": "5qYCFdRzoUAc23PLZ92S79qyt1aBd121vJyVyGHcdvbHUsiXFmu3h84mdZ6MnGUaU4gx2xn4Y8uNFdHBXvMhMF9B",
  "key44": "5WEp6r3pxZG2EgTu86Gxmjh3KM1bEy7MfQtTsgMeZ2kRr4qa2QJ2LoHArcyd9hnoNUMee2bP3xG9NcAmRwKFHoyP",
  "key45": "2vnFHrhBW2JvBjekWA5GTEyhKmFYiZ337fv1SveJKdZQmgPpR3YueCNHqhCg1CW52UDkbP2ibxvyNCv9m3eZv4st",
  "key46": "47sSG7fDiNnrLWtK8fKBgcJ8mWrSMdEhHNxhb25JPtML2u4oPfWy31BPanpntxTVxJL8v4ATwcY63DJ1PX2rTBrq",
  "key47": "5AjTwhDzbxf2iMbDZ2KbW8enqySNnSBZt7aALdaKhjchDXRUK24Nf13W4PwymtsfSVvdtb2aRrE857ZayGZtu47q"
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
