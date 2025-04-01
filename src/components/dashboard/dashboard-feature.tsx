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
    "VrpcWDQark6YUzRgiiKuFYWww19p78z3PCzdQtD5pSBhBFj9BTRcGSzSGvwhR2s9MncQDBroa3AjTUYMaQSj6JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f2AC3pL8Q7V2TrhrTupG2DT6z5egwJxC2VEM3rMtdrq4KgR4pamwFAfYW9CYDfNnhHVriWg66VvEM8c888HkYjG",
  "key1": "5P8CSPAGoEe33H5tpsXCREWHci4D2znbw89mtbLJ2QKQ48Mqd6qSsQvM4jEBTeaRRxmK6sNykTpqYB8mLz94Gyu",
  "key2": "2sb94h2wu5EbpC2ChC4twREhtyzkcALeZfTwUMXGRtgvZAJd2Cggv5sYcJgxSUcWYA97wn3tJCnkLQLFBoDQ1JVz",
  "key3": "4JzQ76g38jA2Wi4XAfsPndg7EeStLnwBMa4koN7D3o4L7xHvVMwQkudTDck4fkQcfFsGnd5LSqMEKFu2tZsCQ3Kh",
  "key4": "6uGDaFGfUDhbgKFbN4mQWQAZTP2HkxakkA4S82no9DPxQQWYv1GjLHw7sfkfEbue8WXukLG9WVUDd6G8ZrXGPRL",
  "key5": "3Vi73raX4AKBUFo5LkjMtpt8N4ZrkyaPZYyZLd4Pv9mQgecdJmdaiqE7eNyJGVWSWBTDyYb9kNyZmgvnsXN3cgMb",
  "key6": "5WD5owjnovxrVpig4XNu9qZxZCdi8ejVm75uRv1EAovbgefd28ZhrLphH6EE4L2S79WPv8qiia3NYz6npV9QxXGt",
  "key7": "3WYwTy1R6hq9Cfaiio6kW8Fy8cgARRkb5r42zB7ui83pGSbEaDnoJrScxT1wEcvBKBsKakPptTGbcyJE8AUZvzkk",
  "key8": "2h5sZVAwD2AAgLd4VfVzNASHxig1mPEK2arHtPukfMbJgKiaN35FNuKrkWaHF1PY5LAPRYaxAYNgBB3yxPwoTdZg",
  "key9": "2umxpVi8YQx2g34WfFXqZjLygAoigJjv8oHKJKRLNiCPvF4GZp7X1Vuj8uV8KsZZ8YoMM6aVWrMUYtJwUTZmvcT5",
  "key10": "hzdbeJH75SE4coHnGRPzbXePRQnPX71o1PTHrEzbXwtZW5mY6YW5BsNXz5dYaXa9Dp2zyQSdw5HCAYPMP3onb64",
  "key11": "xk3n7F51GfqHYuyXoXG7xdh6h9vC3UVqdQkohxYf1Wry3CjY2ihmkiHqH2QrXpXaQFJb5wizEC2PZoYRZbnMJtz",
  "key12": "2oC3sGC2Y5wTxFo9wzmTzXBCw8ZUB2iST2Wfy9bKWf3ERRHcz7jtV2X7ErLoJAcRrczVgUDrTPE3bYEuXtxgY2sB",
  "key13": "3fY4oBzsHnvYPgXXyLdPMPR4srst5xPPZptQRwN2EehFSFp7ZTHKegnrKrCUzDQtmSJ7LTZu5KSW3Jv1498197gW",
  "key14": "3pSYePNDfspjB3pCE8qdmADtHiEEbiTgPY3nFeZ5A6hhDeHDmedi4y2ep9n6RvoVmwhgqRTo8JVzGh9BcvmsQ79",
  "key15": "2LUTj3oJXDeRdGoXkhUDKiGXUNew9ti48t72bvNRi3m93YswLxmajVX91VbC6JTWJdb6X4Yavpu3Kuk4EVtYmVgE",
  "key16": "3H1ZWj5JQAU94RWvkvfAmCSGovceXV2C5VNCdUMuaJV2tsxmWMQmkT1Zdqjq81EbyCj6NWNJQfTTAz4MRvpPykM4",
  "key17": "3RghcnNdUq6T84PfAJbe2fepUySXK9Qncw96GGqYa18uKj75FLqpdncojeFBfPXpcPaTc4UmmH7d3PtfuPTRh3qq",
  "key18": "2JAVhoq9c88FwhY5ZXD6JzmjdGwtFm5RvFHitEdWodjXcPMfcvbPu8bE9bSYZ8rpMtvASeUoDdq5ZenB3RhDceb2",
  "key19": "2e8DLFJQSH3vMKB15E4xyW32YYs4UHtjo3QJt6gc6iApjCYmXhY66pZj3izoVk7Zyt8V9gPB1KxwEKxdp9j4o2aQ",
  "key20": "5dzA6bsjw6QSzR8gwUt2k1VN7L7NfvxoFYGTEtyAv4X3WS8xHhakG45fCYbxDxNDB4iE1sMHAsyyL1prEepzBdDU",
  "key21": "48s2ggFyP5pMr5kkb97W46phim2KyK57vBePB9oeSNNN3LVP8PSSxPhLKPPhED4mFFwhhUUKBTVuYUA5n9DnarSX",
  "key22": "3WSypKvvXznR1gocgss735XwFgqLreYuD6WBDf5UrrdE6iS8gyuZWyen3FzhvMvXw2zZNTZd2popHzoUC2MGdXnp",
  "key23": "zgvFw1uQCeyMqDUeGZXdGXWTME3amDunRTsPQjPECuTDmrKi2Rnh1aDWyFA8RKDqJJi4h8T8EqiMZjSyGSLjJf7",
  "key24": "5Y3LtvRgcAfEW6SxnEusaD2A9SSHyKT7jHqF67vLH23H4Jt9CazEc5FEZVhekMQBGqYP9uVNkaQJZ51qGo6rhn5T",
  "key25": "4MSotDoXmCa3x6xiGo4QVPMGUfB5g9VT4CEig1ZAHbe51toF5ZpgdnxN1rAEa8wx4McEgizKo53os34fapL4YkHa",
  "key26": "3ydpQS2MCvh1GXk8XKw6d25MgU1Y2NZFexbkohqfE6wWjimHGPgEZfghsXkZMmzdQmzj4aQ7pvVLKhn1GXEzU8ZU",
  "key27": "3GAB2BxkkLUCJXJDSVpi7rgjVTRA8zw7NFifXjmc2KmhdFAbvntCKSvPCkLmwSGJMiroEGiVUrgZnXf3dq9vaynb",
  "key28": "5oC9TR26rM6xe1jSXuTycvtjs14wYLmpQJtsmjCSLALVPnj2U1rG2nsvqtBYBGGoCB6kJCNgtmkaEeepUBu2zv73",
  "key29": "2nmv39fsqwkycAMRDkqmLKCJUsMgLrRKXn5dbvqsEWzcFjoA52WNYLWjdQnFxbro2DgXuu8EqqQjtVcJm3es33w3",
  "key30": "2DVjG32wBtzVdXUfKWoxYsbfn5yy3W3kopdt9ygSeoMdH475hzX2R43QpN7KoWy142yLF5qQj1Ld893NRCqeGYUX",
  "key31": "gTETSHsGjHwLM8moGTj2jZNgbtca9Rw23X7farvMPe4vv5GpV9ow9MS1KfgM2UqbhRs6gQuiDBbjiiTCuFib4pm",
  "key32": "tG67JhwoqawmWnKjN7Km7JjXp1r9uQVhH6kLMJsQ5XdPMjgNZ13tLXu5yfaLoFkjD31L5kyfxACeamU6ZtYaX9e",
  "key33": "2JATMQsG988TWsDaFUrjSe7SCgDyhPELGmhCZzGUQUG9iwyxUMKZxjsMHa3jN8JYfT5YnqKLjUTgEfMW17tgi3KA",
  "key34": "5oxRV3nRKFshuSE8AXC9RbcySgAx3Nb95ScceLt92AZ52sbTw6NoTeK3YQC5QrZbX85fwf8WTPQ3MyJhN5PuBCdn",
  "key35": "BfdYJSd4nDMHU32kUBmUyjhXwKnKhhA989bQcQw3prD3G9gNSrP5hL5qEZECVjJ9gwGmyniwZJ4skiiG1tsYUPe",
  "key36": "2yaHYievNNxs7op9hjoQQtH55crpfRyNSJM2g4QUVc86wWf2bTbc8zi9Hn3jsvXNNeiac5LGuMoYcnzgUjtP81kS",
  "key37": "5bGs3V4zHmjBM65Mx9qFt94dP3vrws39RL5Q81kpi16vDtrAkzPPPSRpsnnfaUNXMi9KNtxqpYRySnpnLEW1vYJP",
  "key38": "4VoR3bfUy8rAPNefkYL5uptqMtBGqGAFH3oPr7GDmtiAX8piBgNZ7xLAmy2gUMBT3TvW8hW9AvkGNya7LtGa6aD",
  "key39": "gUTQeYV2FmQvWDUpgnS5aCVKBssQQr8sSf9oBhLpGjRoWy161j4TaXzLqdPMYrEPiWU578gJtFiyb1h1Lgg9rjN",
  "key40": "cNKjPNrkDWuRzvkSHM94waGjth49hUStGW2ZPnr9heX97qV46QF7VB1x3rsadDUYxbWCBHt9DkKE59wPu2StWaz"
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
