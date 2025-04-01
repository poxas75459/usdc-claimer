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
    "T556EuDTz5HnDx5GRJNtZAM1LA237zunfdVmHfSBvWXbqvBZxRewEUzT9zx7S633KEtEzSi5e9MKCmZhxiqiGZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDjdfWgKwyV9RqcvcC3LmnBGZj9awTAT2DDsVsMDwTw3ZffGbNZ8Wh7PEAHTA2WmxvfxcZStmqGCqNmXw7jjKeM",
  "key1": "S9Fjy2yUyzspGG2Zp8Vzc8Sd96j1oanq46yi3pEpuMcSf3qN7oYZpbwgpykcesaK9iDUeMsv1PnqLXyv6ErqsH5",
  "key2": "2nQGNyCWrmP4qXuuRQ9QzeH3APp6DRidWTMboe2swiKvhv6ZJoXqjePT6HSJNkhrT7iT9KzPZEQ6aBt79L1rdAFd",
  "key3": "4FRj7RXpnw5fW9Mb45ZWaYntCig3z4qP4F5xJ3yec1pk24m3pHyQdqqmhMZRs2AuRxGodPtXvkRzm4zRD4NCZx8P",
  "key4": "2hP9HAMxK4Epu45jdp4dcqBXb2dgdoBPrPSce87rbVAzH9UtzePtAmyUX1YatNwVh9CEuaxkYiHh82k2LHQ9msq8",
  "key5": "26FCTiMJwn8tP3YxKVDyiXSoDW55p26uc79V4XABWymAoBv75UhsCgLDBVk74KpMbH8yxqr4KiE3v1hKSxifHV81",
  "key6": "62wLsr2auEG5ya5nutVfweyfPhzQHK2DQSPj4d3GGK1tHfHUn4ASvqeRydwMNT29aH5bzG3syfiLiASKK3U1X6uo",
  "key7": "56NS8HMAX8Q7Ba8aqVRkRni8pBZ64UUQcgThYePHFc1AnfT4Mq1z9q7ETgkDNAqF2WdekbWpD6qaWKviQnihjNwJ",
  "key8": "3mCUCwDX1ThnGmXk1GfAspJz3f9xQUH1JdZwxEzzkhZWnQUaTktX1wgBetode4HEna6VGQhSEJC8CupqAGw5MeCy",
  "key9": "2BkyVjG9PFHHyCrBfY1vy41NBF6rucvUK4WWNUGN4iMVkTvWpjA89mv7yDjFmY367Z7vwwNvePXWc5aXX9mCZDLm",
  "key10": "3mikyqv22uDF96jY5XCk7LPtg2a8M95Qccr78T7e79M6wZj2xDQ5d5PvBjtaeTCJmhEbkYoNi6mEFrfCA5Esa2uA",
  "key11": "2nL5j6S1mNkqtQC6cLtF2QebDb2VRTUzge8XhkoAwLnujWrNeFLYRMHkApZiSA8qdecpsRoW3HiU1binHFacmW1r",
  "key12": "3zmR8Nkd7g23ajbTPQu4Lhenmpo1DVTMdWh7B5aNUqUJySQqY6pwWaRSPti3DKXCH13oKomu8WZo416MUEqkzrNc",
  "key13": "3NPK6g5Ah2Rch6x8GJR6xZoahfzuStRe4MSN3Em2D36cKJELN51BtxMPk5w1ZjusLYUcXQF4perC79mKpx2ib9Y1",
  "key14": "5Z9B5V3kN6BTHyxQx4ePj156BHSHRND5Jg4YQtippLS4dj551CgqnovSmxJpwkhVxmwEC7Be3LPYFA4RNtZCGER1",
  "key15": "39uEzftdRWTzzXNfMNic94UmCHZSFzATXoju8s5ozo22joVtNzac8T2qSzVZz6MsVEeFy3EMBhbYWSLUvfPGB8yL",
  "key16": "4iXPo4f571MiSmE47VkWFTUyC1EMZ4iRDDQP7EKLUk5SB2PNRS9jRwvuMpEbwJ1Vm2gLqE5beegMbv8xhnB3Rc5S",
  "key17": "2KoUM2K9YqBd8G6gWs2DHyHhqadV4DPknDhJLGJFd6eApDJ23u8Y41mDcBVmW3E6tsbhvkvpC7rEXFWepuZiNw9R",
  "key18": "2CNoSgAS2GmhwUQKafjXBQbZnUWe6kCC4segjW2ykUuxuu7XC7yTq1U3Y35rNLUfsLRrYE8KsHTQ3qtquC1Eepcx",
  "key19": "286akcR1FoxWkFRYX7XEyYuZ962Gr4fbdp3sRAn5dXwhm6bHW2VbXGZD1oxor6tZUgAJRpykHjgTE4NVQqwxB1Fe",
  "key20": "3nQjobELiibJRfGJDMgphNUXBZqmNo7KG8cMvDR6Kmxn7PnmvwgFrjT9it7HTmAQs6CYEaGcgLbnTR6E43ftACLf",
  "key21": "36WvWhX4gYMfLbGcQX9FCHcYxTCDKNCysMHkAGr44rQdHM49bTAez1g4Qg2e4fRZDJT1EQc9AhRxXNmBu5cnkd33",
  "key22": "2SQTXiNfZvCDMzX3SagUDP4wKcKQ6i2uU1F8kiwQxcHuu6Rea4AFiq9z5V2c6M3ZRpsJ3fEsDJ3VuWSW32yVfF3C",
  "key23": "2J2WP5vYYjN4nQnpHSj9KfGdCtUbDNkesJnwqGC11aYRTYCCuxFeCN3CVg1aq9dhwkFSM7X5Hsj2jR6boLFBwCKn",
  "key24": "3Go7ewgsNvi88fZcjbptybxYbSfyK43YVeXVRQ1azJepunZijC7Q6EjH5XEWhkG1eUsDxpGBU4jAt38EipwhcC1H",
  "key25": "22ZrgNnSi2c9zhM4Z5PVGdmfi7m4iy5q26kjkQiPRxKqQQ7eph7U8UGMujvmASkHn4sgeecvhWZ5VwLWLCZiGtkJ",
  "key26": "3ioBsQPRMETKamG8ARjTQedXYL27LTJb2EErAZiyx2LgMSW2QFAeskmF1MKpq8SAAkM1R2hPqVMHSU7mj7bfdCe7",
  "key27": "2UbNygdQEtYiHZMB4jukSY5dV2tWZ4p3RoTnxtkRKPwjFrCC2vbrRZ6CM3kUBvoE1z6rPnXbhwUGvVudNmuGak9U",
  "key28": "5BiUez9yEgTtSpeuf8PAZTmYyWFfgNnDbBk7GHwiajhfzT4qyPNpAdstcG5q7VZkYh2HQWsNjX3n4szCAk54cRCa",
  "key29": "5kU7kS1pAtUh23VE4VXxbz9Co5dbNbYBzyYFubsxnxSP9H4foXforLY7KtQgZ6thNWrxUDtCBSFunTh7X2t1CL8F",
  "key30": "2LxmYcuma6nwWs1L5LwNXHbvt1Km8h5SB2dE1WAwo7QeArzqJXDLjmcKuCqbcEj9Xf5PNBrURJXyrRE93HecBVFJ",
  "key31": "5nBPfXN8fxMucfBkDtrTei6q8uawGDvHP6pFydX1cB6zSZJXsdyJCcxDZKdqYbhjbsVeU7Jse7TMm2AmHqfSNQHZ",
  "key32": "1DTzd9GZb1x7JvoVFrFviGU2ndktxvF9QCtE5sKcBUVi3jcXS9zs3tkGVkuUvgUAvBFReeV2mdsU77QjqGdZ3uy",
  "key33": "K7n59hstEA8YFPhT3P9VmeDp5GPwFXM87XPZyii8hH4EEaM3UgxYg9jtChJQNBLVMoWc2UEoehGPtgo42uxwB42",
  "key34": "4KcU6k44Kuwk6sMDtS2kEfFdCWhmYhu2ZAU15C59nfY1EKjkRkTAYrPAMAGohGHBKD6uHe4a9vpgsXRQ7eDjH2HM"
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
