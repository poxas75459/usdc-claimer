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
    "Q2PrzhBh3FuxZJMKzBMuCw8JrL3uT8miE3tzq7tNKtwfLg8gMTiZkCgVYyQben5apWB9EntwWgv7g8GwhvZTLSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WsLyZ2oHRKBh8rV6xBRHLwDUZMxEShpyTzyhyvBHxisCyjfn8XKDEC12tJgRzJ1XXmV84HqJ8uj8LHZ6rhMvCyW",
  "key1": "31Hi1m2B4R1r13YK3TDodBp8YqGpGyPTfy2WyKE2ViNe2zWkRMV5sco15FGHqYvdpyFKVPfa12BMCk2xnwjz86uW",
  "key2": "4F87LVKyMt9K8Xy9Sov2FP83CjKU3WMxpmcxpiVQDc4AVzjkqJ39aSCCtzLXFzFNUd11UwFo78pa64kQn3cHCdiM",
  "key3": "5PKEXVrB96CRchgbubsMH96BfbyNKmwx6rur4tReXbyTpa2LLAQnRXiwMAqadrJY1VCZPYfXdehLNQPrWHwBpEVU",
  "key4": "5MjrbU3bPSgNRet7Z9cbX3WM1rmqAnJNY6DeU7ph9fxVL3PqWss9q7RV4DuzWjzyFFEMKa2mzF8ei9X9f3M5TdWa",
  "key5": "yp4sGgbGjJWuDouHWvzCq23Da5BH7QeAHYXwY2RaCusjJKvzRF71txa9sWxAKEdwgydCj2rMiXAP7uj4RdNmNYY",
  "key6": "4k8nrp4FHdnEtZT8JB4LUwyJQeXeVoD2wxp9H93Q11ZwTYTH449uE2h5cdKF5iQ9o6DNLmTGHYAJCgG725xiTe7A",
  "key7": "jbdVcZPHSMKRW6tNDnngCdgyAGgBcHg3BkLThQy2MRiJTLerMeWqXTDXhyqQB2E7JLrtHk7BV8UK2iUoLUeawHY",
  "key8": "28Qe2qY44qNFMECyC51PMiCoQnuHEW27snU4uCEopxLUxvycZHbx4857bEch15RbGSH747u22PgXL4wZGa5hS5pS",
  "key9": "3ma4etSZ1qo84rzdiG1VN4FUjktrnpsjdiPXsRWoicu78wov4KgWP3v83ZnMcotXWdi2RdzVpkWpK2DaTky6nBLD",
  "key10": "5z3gYG4PNszayH1jFmHWpdHpxmu9spNEiYsnqDCg5jXZJcKytc4eZz32Exm56gNZrFmWFk1Nw2kYpjWKpiwxPEqj",
  "key11": "AsYQ68nnzfny3GJ3rKXEdmPirARpxkb1Gba1d5YLWTpdRjTmU1TBoGnjnhG2hA8Qa3YE8xWQkc2qfHgPxupESZW",
  "key12": "4S5ySZ6hUnoZSajUhxRrktMfVMRufhc2omC8B5FgNVsFjCz65UW2qWtvPizn8fxUKicv3B2wNtRLdgmpqrZ2fgj1",
  "key13": "4GXEZbFN7bvC26JjWPuPeQYzkoWv3zJcpB7bohv3maJ8XD1XHHEm7BbdXzzCi6QcTkkxUHWSiHaXjxE8BCfkbJfB",
  "key14": "42sHGYSoySoLLcw3B3pC1vNQniES4jB23KxXMVXjLAkT9jp5VWKcT6XD249T27xLprimVA4E2xphRNd7Kg1j6Jw",
  "key15": "3ZRLvu8fk9TaQLnHgbwTRkrC5zyNJKmu92BfHUuuYji1djyf89Zv88LxRposU87izGDP9xWJ7XcH8aAk9Nbxk8EK",
  "key16": "2jPhfdmTK8RoT2FFPWaydzGV4XXt3J1Xn5aetcvc84L1akSGdRZq5Xm1yE1mDEjdCBGYFXcGL2e7JTT1qHWAX6hk",
  "key17": "2iUhqkWZ5pEGGrHZS9EYknrJUuvvYaCL5rQ1EcJPTpa9jKvKtj74vmxqodb3AVzUTp9DMvQJtvxiB384Tv1GDiCH",
  "key18": "2DEFCBbecgBcwQ2LZ4WYXQeb6aCfBH6fRfk49Xa1jkiPD5d9xxEKnnGF3GChVZTvTM9Dgs5qbq8CGJpHrL7disUq",
  "key19": "tS28Vc5HaUzs5DcEYSM8ad8eirrsYJRBUQyg7XAgvSUAkMg1iCoYK1p9wKt9RzwSc7QmqVo6gpzqNcL2RtonviH",
  "key20": "4VUg1N1NcByTUmfYXbffNC2PyYTzG2f5ccbqZvu8gSvmnoXyUPGuVNJeArprdkcrV5cgHhhBkBUvF2v5Dpix64Bc",
  "key21": "5M6DYzmoR3TjdWivsjfv3BV5Lk6WN6BLPfqYtjhkUi26n5LBrfqibTPNCtGVJgCdSn5NgyQJnody537gVrJ8PyJ3",
  "key22": "2UYMsKbzHPvcpjVQ9fxuoMWnH2dPbhpfSJmocjx9J5JZEWwRYYWLxKrDZEuUjLT2qiAURPgmKXscY8BA8uZAc253",
  "key23": "3P2SzWjc3LDXAg3TN6awMdcyoqXYRT67aik3L2RT9d6iC5rnUTRH9v9juJD9kGXDV7CcHu8upPxcreq2woQHZQGu",
  "key24": "3vHJU1bQNndBMSdJrRdmr7ekdHh95BCeLYZnKLtpAfDcZo58ikTiX349W7umD8kDHJERQH2bkLJUmy9qXRxc34oi",
  "key25": "2cjRtRXuWVfFSc7L6dyXwbhQTEJDgQAna2BG3FwWsajJaeA4QdjxsEozQ62tpidwy45ZwAmB65QqPpxiroYThLLK",
  "key26": "2ssj2aWqWagZgNWjvkU6nrJdpTapZuJTNKaP5vRETQPSpyCqcUZGKyTgJofhi3Aq7oo2aeBrv1bCnw8chWFyXoQK",
  "key27": "5FSrzWnbgkdZ8AXUttDfiykjnim2HACRMPP4r2LcZqKG6k1inhDgB3Vpx6EroEHY7Jqfc7ZCSR8PEGQ3PyDS8axY",
  "key28": "9ju1MLLVS111uYqEemKXk17huxcbP7jGpAjEeY86y4c4a4jY3PmgVjq1itxZPnQJPa65pa6ugh6LCLLNWRTmbdm",
  "key29": "468zHGx9sA1vYs1WnkHbmPxnB3VUuHpd9NyoZYyh6ZeXARcq4CYT5HtXyw7YMW6GLHD2xmL4oHijMgP5u62MqemW",
  "key30": "4Y3NAk68NdwRQs3NWxkifnYzrhRBxqpcSzYSyEmC9fUk41TNPz7XZUmWMt2Ba66KyfrShnAbkUTz2JjbwyqfYi9G",
  "key31": "4m5wQVsaVBpW8y7gfwhhJ4gvioXbYDj39CgMmTWQSTL48bkFXo2yh4BUmyamXYBBspLms6pYgD7LrcQZnHQhRD3e",
  "key32": "4LRSh5wMccAZtfhoDAtzvgmLCfXMHrHvcSaHfRMD5FYKVeKt1LdiS2sRowt7N5QhytaQwwT7zrc3MtP8DrG4x6GT",
  "key33": "661upmX15g6ih51ggR9P2oL6DmxP1TH42KgdkJQZsazhjV6YV8VqDMswkNoAAthNdPaNZy6Ho9bcmPL3Xm6EVB84",
  "key34": "5j4E3BsuBQ7r8s6AXACfW1GD9UUj2DLoXqL5eBGJh6yLimG5d9v9obHyLMwSrQsxcpBj83FoKDv5supGSWK8nomG",
  "key35": "5NYZ6eq5yfPZmqiD3W9ShfnXDD83uS8RDcUp4Vctr3EET6vnuGXg6JAwStqcA2CY7B3CxsWiiVDcTR3wGffo1EwQ",
  "key36": "2sABpL9Q1TNTEYVa8jGMoJ4vMb7mnmUmMQWqRZYKHuRkeczoHBvjRuZ9otqrDzCkGpPEGJVNs64CA3kphGatCGok",
  "key37": "21XapnArJGCAinShURyqsa55WhaccbPQoaT4mJ5FoVfFaYTHQF4HkaHAhLGxB1HASHQwaWXhg4bpqL8nfygXdo7y",
  "key38": "rhB4RimAu6GrnysiwF1RGpkM2kBx8J8aAhLEYoZR9R93HvADJzu6bekwvGsd7ierrCWiGhGTDnFqoRwhmDH1RBZ",
  "key39": "5rjhrePyzF6BFKuKPPu7yUv9SfmS4x6o6GZmkR9YNZrexKJ2ksK8VRdJB4Zwy498ironcQ6FZojRZfai45ukcv5A"
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
