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
    "4ye6qipnfG1hWPFqCQJ3KxZ1Xvwq9j2aPXcf7TNoyGjRZ1DttHvoh78b6VtfiZgNHFB5dRdPKCf23bZ5f2h876hF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtsL1ZPkoMX5UMvavpDMihzAbkpxgHzTJuRQYXNU834JFicoheBKyh6bPNtyLUUkpXtabHruWuMcmdLFEgskP7U",
  "key1": "YcMVv9wYX8SbjqSPL4SPwg2iR1x1v44bGh4Yywq8btqDc8Az1wZUKbigEKq9DDKyQKyMqcZppF7H5i6zD1EHvLN",
  "key2": "3ACZt7DNWYcbu7p8SqqWCJ4xrBmp2iemAMtDT3vzstAmA7yDpnQxhGZUpGqd8un5GGNYCrNQRfYddMvMvsNyKsYv",
  "key3": "5Sc4DeY8yRPSi1PrNX4Wtsevddx1BRoNMuaXswzRzH3Bzukn9H858ZYX6KW2bA5mDqK11L2ej9U1tjKDXWBTDci2",
  "key4": "6ABYe7Uec5CFWS26wGWh5LoKB5LouyuXQHn9iCdczKfqsgscLQ9FZ7oVAufA13hgGgmhA3jgyeEoNSL6PvPRWhv",
  "key5": "dMo6sxmjTnfsKwJhxGykJdUnJGpdM1wP3V8xDLfQi3KwxyNDoLLYkRS8QS1m84P8RvbNzRQc3Myv1NpfgYFpQ49",
  "key6": "5a8QDkxYhHwMwxNsApENMvNiBTmv8DeJnzE3eXLZ5fdovs8qc3xS91wroRfZ82PpDruNfCFarsMbDg8Ny5GR4m6t",
  "key7": "3o5NZ5Bm87hKkzPB7czHVHiSnhGpuefmZfpdUiZSwnusG559UuEzyEDwjtYS3hTyZtLGYsh89BeQhDQXgowoHpKY",
  "key8": "4T3w2dLGGgYo3h4RGqoUJxzAv2ScQ2pgJh38a49YgTkfBxGtQXCwosBY7J1acsq5PcbKmSAvngbX6S18TUt6buNM",
  "key9": "5E8G48Eco3qkhJjv2zKvkDBApcB3CsfJfQn4wbmkZ3YxKhy8eoQXMRWkApgKeT4xZSJKEw3GmXan1y5wXSPG1Tg4",
  "key10": "5Hn4rQ9vUyxt6cV8AdUSgkPUfKmrnwKkE6NjCKLdDWmm7GTAtPbXBA9HdU9oyYf2NFkTEQ88HWTeah5X5HXWG8n1",
  "key11": "4fd5cmaSCVdj8HfiGoYWDgKATu6RMKctjsMtQFf93Lu3z1ANxZBA1pPG9VfLRtHs1HwJ5nh9xXs4LcFWNJa8piBB",
  "key12": "wtnnDCqFrXJxNYSEwQ1D5QHh1nk2ibNQdgdQGYgiL7kuAf2H8YxDeBHbPzUijTdNfTKZNj3JELaTGFUvY5ch9QA",
  "key13": "3EbcAC2pJgGqUTy6pWJQdH7ShmzKSNNYP2P83iYYNQhpwr6ydtjdCypKV7swbW7g7N6jmqAanMBhwYGLFBfCKap4",
  "key14": "4cfskQw8t3nG9FFdT9nvLzCEVf94KxMR5seXMVtckKsWWHvPC7euyHKocbeV3LoTBM6GUKWzVW4HDAd9FEdAufAU",
  "key15": "2JBt6uyebE3MzdU68wNxyJEH1ZkhUerZAtU2DKZiQTuEi3CbgVMgZDkBeZFAN8sokfkVW53Pt7QQKZd6xxHzUKPT",
  "key16": "5Ttvc88ppZPBYjKpvsYuesx7CxhhqFawPz4bRJHXFw4AGYBNRZXPvmjc9kHxM5SLYsZHKCRwSXEZ4eeKD1w65epG",
  "key17": "2BvJVquSARg68LUjjCEvx9yXodHQhSkYNLvjFhP5YAERpvBKUR1yPFrzY9fchDM3s4L1LYuZPG4icaXemSnz72cb",
  "key18": "qWavVgnrMhHPm9izVhWczzEehfNsP5UKAfNxxhskYsXfQzDxQ8YbGUotHiT1Jg5AJf4VJPkUj1Fe8KG8Z3kvz91",
  "key19": "3e3cFcPYGLWMWqbdHRbFD7DmUhKQCVNTmBsiAb8P6oBHCSB44pjz5RbaZAa4gWfPDMQD9YwsFRzUKhsibm1CngV2",
  "key20": "4MeKH7etFAVEk1TvJgddSHNPf2SbdTudaXH8cHDGqhEvRCAmRzUwMXTyUQpo2vwqfvCruQXC3XGS6QQqjiCUECor",
  "key21": "5KDhD2xEaY2K3675Cti3i8QRvjaFagRMwV63eocLXM79XoB2WYTXgSwVfSpSLjhvqXs284xx8QkCqQZf74Fecc6Q",
  "key22": "5KsLHW9fMuQ9vFF9nDcS3EntjeYMBXR5eErsxJszE2BxPYTUT7BAV74sV6MxX1AghzqPrrDtE7o5XTYhQ4zUcf2r",
  "key23": "5uVXHBHjfAie1rb1FG81tbFbdj6qpu1tsXh2DCA7fqFrpQ5dSFzCqVCvLwq3wPyHqeuTiHB1n6b6aoUL5L7iqBur",
  "key24": "2gXn9DdUZmkAtJqkuDBYZ6opZ6uaLkdyaw1rt37efQSjzhyfeAtZ3hvh4DEqtKrsK1QWpajTaYU9kvgqVAxxrA1D",
  "key25": "4sZ7k6S1SLZpch3r7vAGTP6Kcgst8yG1eEe884zeBQ8Ndn8Z91JXAu6Zxz5EvNq1xbB2o6MK2nvUuZYKSU86opDH",
  "key26": "5CZcfMLzUgx8GBytSvENGFo4nifhZMF6YTHttTfHSuGKf4nNDisrZxNZ5tA7nBPpDGVDEmVuN1Cre5vK3q7nHqZ4",
  "key27": "5QPWjvArZb34BW4aqAUXs7LvbJgShErvzrgFWsbyMZKnHpujeap4QfyGf1B4BVnkcrFpbbrvQHeG944wsvVqzbpy",
  "key28": "5iQZbfB1krZKdC8XeBACcAC9T1msAefUk4SuBMjGcTKX1b5SvMNrRt3PvCf9k19d7sXCoK33ubKYhWzGZRxkAx6w",
  "key29": "FHyEMbfhimTNec2mWGMged1hySdVDg7aqddicrPk1Xb8SDfp5twLC2w8ad9VSiEwtwMfJJYbGZgsjs4uoBtMeut",
  "key30": "3Cgg8FJG7Ghdi6jqjxcEEiPrqFHRtQxuE4iEYrpboHLJZEg2DpP47QxyqGs2AYc5e5MNJgzHGzF73h69GGBeiuft",
  "key31": "5tucnW7DiFgVD4hwK8azvec2dWaPSjGSa5EP8TqfPtSyqYe5STTUmdQkF61LGTuAGZW1JNneKUwUFNYScrVYHRfJ",
  "key32": "3cL2o2yQhY2F2TxefFbojFk9E2NQLVjuQj2ovVX4Y1k2w5YPvibfTvqA8P1tc6WZCf9Cd9rbtr3qEVKCSjoM9LeZ",
  "key33": "5sqiW51BKVPrQ676qYDg7LEFhmic3pQ7NoFqnHhQLh2kK6QJYj4rqpHemHz9BwcGk8xxQQmpzMBUXr5j3vZ7epWk",
  "key34": "49WuCz6TJvx3jWhe1Fbo5eWFrJvAs65Wj6MY9fZMJUeJoBpwoTD8eA9FUMcF47VBdGL8ES9JT37UUfvFKb8fgemY",
  "key35": "NLDJY7MzWTf7iFAgidWJUZyPJzdtXPaLikhnNsxCmYGvLt3GcQS9TYr3eA2PupnBUqdNuuGNDx7aRjSGLEfVQBZ",
  "key36": "4uDV4dGaitqs8tNZNymt9bSmLnmZzfJEuhRcwHgMxGtiE21t7WWM986w6RZ9PDGfNnUow5rirGq11cQWK2JyKYDP",
  "key37": "adwr9KSFW4eCff1J48HcpCTS2BnTUmj8aUoMC6MHpeaAYdk4D6RsqaAJjbSDUPToyxnYXwSPCdTaZNd5nv4HmvK",
  "key38": "5HyZBQAFkPnSptKNnzK8i29cmmMMz52GbpNu9Hf5Mqkd786HGteRX48pPPfknirdrxD9qG9zCKaQLi3jhXFAvqd2",
  "key39": "5oe8FFEEZUFpxUXKHPWEzHiaNvKVLa3HqPtzhP2E6cLgNhdDe8QLbBobHmjLJkgo8BaebbxPwwzeEg9wVxVAKMjh",
  "key40": "5wU9i8SHPt5Qzfw2p7cAA45qhx6MT79MioLwAphedFDgKmwsmkB6LDNt1Xp2kewi8E3NUxP6EZbdTXrhUrBszKJ4",
  "key41": "25NfULVCPZijQCpijzhCiX67hWY5SjfoHuDQWbjprhSELzq75FtLLe7x6hFYmc2xd9kLhukYTUK9CSRg1YNwjfhj",
  "key42": "3RXC4baNo5HHewWzuhV17xsemKYy9fohhMcYt92kLFhrn1fEhz2Zi5V26K9g9Pm8WgN646ZoKcB1NWCmJZt4oYeo",
  "key43": "dFynjhbBABNm54bQ9EspcNsHjabpw41LV5einYCtXUMPATi4sawvhcufs4PZkTpYSUSHcu73ADARhSEHNcH3cXY",
  "key44": "5K2C8aBYY8YccX4QjYzDaV8F3osGmGeBucJFCUemwY1ddECpZVxm1jGbDSgNGaD4Gqqua4SrwJuDbiATK4hqCdv5",
  "key45": "2yfQ5cVkCG6z6aFMs2p2PrZeVMjG968ASP9KhTggowcwU1bz6Z4XBs3kTeZ6FmN5eHFcUPFNBSQSsFL9bZYx2TuT",
  "key46": "49GfrGM8r8KmH1dqmgV9LGYZ8W8ipCCrQsdYKicRoTKcbiYckdCc8PM9qp63pyuFQBsYKwVVk4wFstkYycxDDDfG",
  "key47": "5sEQxCpp3BYZ5oqJ5MuXLkpbhc4k3zzMBJ12fbapJ3XrKJ565abkzbd9rUJz3Tie2GmZBkMSiids3YP8tvYnDVZm"
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
