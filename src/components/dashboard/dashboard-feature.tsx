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
    "5NiUH29hE1wdDcs4amgcssR3RyV49poeUyvLWh1P1PKJPmM8FapzK9BQQ1XqEGtGUMGv1ooBaHFxGfjMuBwCVUtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ppNCVKzcbo6M5obz8c6Sq9L1LhQ1DYFV9rmnjaHp5gNF31SidBXVMeDmueKeHHZqvBuquW6kAwGnGNNWBNNanse",
  "key1": "4ied1UdCymu7HwqiBet1HmYSLGtiEyJT7qATsWNJx75KsshqYMCKC9dnpnJSP5gLr1x6d37ENPGgLpeN3kEbRiMX",
  "key2": "3N8iDMYXSbjDTnQRXyqoVPXXPLjQF3xFp89RvJMRAvGQWWii6mFmpqibs6JACwAbcxKKcideAF7jWUHCHqA6Nyap",
  "key3": "2BtQAPufMWLZmcLbUczkknPaUEK8XNPPFPJyH6LmzXi2McCzbcGW7i2WjuF8AjP8wjGrxqwrj6k5x1XwaAjsZo7E",
  "key4": "46u5WR5jhGVgvumKw5SrUcPuvuo4g5oCpEWcgjdYoi2ue7V5VPdqLk9RPYJeS5AA4C2eUc63a6p5Y1cTsDVLDSPW",
  "key5": "2RUN2pyoDxnHqWoTrfiWcRGtBrJB3Cbec7Ko6tisXn6H43yZm5NSq3RYJGd3de1ZzubfcAHe9yKNFhdeWXNyrPKp",
  "key6": "2ziDBP4LnVfEwBwsonfdZ22TK3veM9R2m8cbci6on3YUQWGVmZQXurV1gXbgizcf8kHCMEigh9WJrGjzQCPCLSu1",
  "key7": "2ntn1cXkkyWx41sVKnUeBmucDFN5Dc2dWqEQJQHAusL4DChLwj2ENoTKs3sTHvD1jzjebTdCTWyVaSaHG4freP3",
  "key8": "3pZ7X31UXMhGYD4g7JM4RVca6ZoxrAmEoQXk2gv8zYodhPReMtgw5jGMk7mbnkyH1kdJxABJFix47mY4emx4GzXZ",
  "key9": "2EgB6wB5jvswAv4uVptCmJD4CGDPt1BD67xcC4jUhPmYFbjLEesqrp6zsGXsKgAVdQnnyriLGVD4XXgnJJGrd76C",
  "key10": "5bWwLX45atYtcDnbysEcHCCe4ZBkFEzHee3gcbqQgmSo2hLtfxbS2XCaKvwSfRjnmr3K3cNp4prtcsW8zAX87zGm",
  "key11": "5jCcmJ82XxCZY8fH1kMUQ4rsWfGL7kpyxRHjsmqKvzdsfGdjM9XcprrVsUF6h6qq4mawWcbFSdqHUHsPwWfHkz5u",
  "key12": "67esCjoX5K7P9p7frBmTj69BZbXE88ya4r3axzKQBbaaJVQscxrBeT1jpBMqXQtFXNRZvbAN9Ahb4fCTM1hLri9j",
  "key13": "3bfLd1XpmEvnwzo5eiUDqjXDFHCxvNC82WFdyavoLpvGEFwWSFuts4W8dgsSWiK8h6dxdRpEREB5rDNLWtXz59zq",
  "key14": "2jgNBgBVymUKqvN84KZFHFsZA9F3ibyfE5yiNf4kAqAJqjRG9MeJrnC9jnm92E5RyRHVPRNbbrwo5taXaw6iJ9bv",
  "key15": "4yo5Hzti8tiQwcu9M6CqNnBCpahMZrdK8vQV8CgHimeEV4htudptziaW3iMYav2b2RgA6ByQ3ACtTN7Z5kh2ubP7",
  "key16": "5jDHissgD5azJU2yYQjrECiDYQeFEwCmt64D7gLzMVwgo47QogNsfHWnR3ey6kaqWyg15CWfmaEeDEgBnzFUKusM",
  "key17": "48tHkUPnUXHTvcscqYY5BX2LKBtEAHj2kFEVeGK5yAvd9wQoF5LLxc8wd9LE1BL8DM6QbuQTL77KmFL2ZkzzV1aC",
  "key18": "2i8vwGqXUV58enGSvu6y5knVaF76gbTi1uZTff9r55LFGNCLsB7guqSVMgnfterp2W7CCMoCzH4qPQALkQngYWM5",
  "key19": "31y8DNgpFFMZt46bfLjnpG9VkwvwMXrG8JYyokLGasL61kNhhQHYzFM4PgiicBEqjZrnkiCmJmkaYNvQtLjZpRmJ",
  "key20": "3yhoZVZKdtbxbv7JXU6ehNpXRTaqEL4omk5Tz5r633LnzokyZKk6xJgMp7x8Jo2aRKexCZ9h3xP86pebRn4tqzHb",
  "key21": "3CcAw2Cw8knCy1Lu45Ra9E78d6WkUGKj6n8r8qmM5mTTQ8yFtvNDmgdmtTqRvNTKVneKkS9pYLcNxiRd6yt8Sz1",
  "key22": "5B35NaY4hC7vAv8PBaH9k52XN9FfgNZmmNHFopfpXB2HBBRnUDa5zwKKm8T8SdaUN4gpsmx1fCKwQxgmBxNDLedG",
  "key23": "36ZHMUa4jhq8hEs9i2LaekyigxyWRjwtdhY68qJCq4Z2xTfEAPr8GDNm9oMrsdtv4Ty1U5VKYQeKefnzzVb8iRVh",
  "key24": "2jdbEmKaN7TPDBZDZBXH626NMgJWYKWkLn1jfCoKrf3ywpsp1pRFph4Ce8nQrY1rJWHaGSJSdSPGaqEYw1Zar3nk",
  "key25": "5okUJvt9fXLNGmSRbMS3SumQ8pykKgmHcYk6ReSs6usjXpHEuAQ87rsz7zjciGyvLmB5GfpFrD1xjVoZErrYE6aC",
  "key26": "38hX9aKWojuijbtvre5GcNmpwvzTizCiy3SCCXVJxyn7XfHScRZ6hiSeQtb8TfhhR8PUZ1fJJjcywqem2KTR5tKp",
  "key27": "3JxamLWhiVqxY77Rca7nyV4aqf21vVVDNi9jA85QZBBHuVtR5b93o8sykCJCzstDyHv8gRVcvtCNiDqPjhhWQYti",
  "key28": "5vP4XEWHjFNtyAV14B2a1oEZz99GEjv3Qt3kJQ8oxZD2SnmtxgAsYjv6EPU44wJXfZsdd3K6JctSjAixvAGUzWp9",
  "key29": "2HT9apKA56UWvQtHqCeBvm1PoUyfoaFTA3jJLcn7mZXyNUdhDA662xrptuiJPyVVjDPhh34NpRAdDZo1XQWQjifr",
  "key30": "vX2G5xbEjeaPMLiBr5b1Ah7tX7PxA8SLd1CZxPdy1fc9H2h2DN7kMpc1N6NgnVTUUq3oGPhw9PArR9ygo1eRUGW",
  "key31": "4Q4hbonbe79EWMZKjpaHYCa7S7x5yYgbXkJpVoBJ3FRpzQ3E5XyxUj84SaMbYasBWKunRtyLAeMPdE5dyhpLdeDJ",
  "key32": "2JjeFU2vNrnwbU5nBHnHusKzsN8K75G7kJHqykvbKdM7YKdKqAzCDZ4ghayuXh41uubPwQ8hqYsZG5ELu8ahozGK",
  "key33": "4N86Gb7p7yfuEQoTtU6xTVf1SdYsd55ZQF3tQLcpqtrtAXYnMdTsU79Pr2nDYVfFAGY4MA3XPXMYwJc3Va1mp6e8",
  "key34": "2mQHTKT8UxbHeiLK6VBLaFun77yn8APkT2CCXXUSWv1TG3SeTT1L4MZYdSgjSGPexh8LTC6rYcnvAT54ziRVv23c"
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
