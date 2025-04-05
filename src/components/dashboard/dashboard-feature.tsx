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
    "26hYw5C2Q1Vy2a4t93guVeYwRBwQG9n4rrrsLPThchTJVAtVySPfP322vgYcQvoANBGR2QhEsHsrWenzswsbngHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PsQWMsc1jrKrxpMgDAP1eh5pHDdS5RdnQixBBeHKf9NkgxVk99UKTCeEDAndi6NK1y1mFgVpLwcNHVk7crmoXXY",
  "key1": "4ZvZuiVLGbW2yNSTi44z6brTJJCE15wgnResVE8HjT88PiVBzDzgAH6EVGtnsjRdwdRdCWNPKMbW1aa2bdstNkUG",
  "key2": "4gE8X1yCYBPHk83fHaCcextyGTRMhdiDZdwA66UM2djL1CLCTYkS4M1a4TdsPrXBZQsoiX7o2ABnh8qztWoYtVci",
  "key3": "5i9DzHH6BfrRhtBug21LKKWqU3PeNimjEhGx7GU3dXfdhZmRtaPWZBaJJxZpJuVfDTUgE1UaZqvtiPoJ8VQZZBrz",
  "key4": "2sWzY2gFRnEHNUv5YDZnssp4TNyUDsbz7ddmNRKbXksF8MdxR7k1fo8fKQY69GVoxAbn8UhGxEXsKoMW6ek2KyXb",
  "key5": "3zNiUyLUTJXJG39JhyDrj5Lv2wxBGcaJdZeVDTrxnUqvdXZ6ib9fyD1pYeF6GwLgWz2Uj6hNpKcmd7WzT2MRp8uy",
  "key6": "byV36iHTyoQBLRuq25Cpv71ZCLukBs8hyZ8m9nXZnuf6246RQsfPteTTMXCKvU2oRLnp3kNvoAN66o6KEBJkLaE",
  "key7": "27j92PXPVjs6DzPRxxZSUiStkgDbBXZroiBYYif2qBhueY8XDEAUbmsiZ4dHVJcELfK4WgQTzArhUXtLzaY3LYof",
  "key8": "5gNfWbZjW5RY9ZevucP4BnufFrkcnAe3cFiZAMTXkE6g7m7rQjH2dvivThmWzd5Ak9znwyJLgMMwMey2iCfkjcFT",
  "key9": "5TH7tPL6zoBrwK3xpXfyjBV1FTHNT2e5Bh3jgv5QzpdcqPyYinPS4EiTLrH4xLDDFxVRWSVBCCV6nXPQVzeVwwQb",
  "key10": "ssMLn7RqRy8FTd16MmGJWgsx48HA7cb8LTy6TdgQt6qP5jvsNEEcb1x1gir1B8NNKHYFaPdZ6u3M5V83nxLFTvK",
  "key11": "3zgX8TeFJnVjExsLy96D7SpcpY8P3G8pzbzTCg9ymcg1AgNvA8YwQhnR7zPqScjcZ5sc1oPUgHCcDK2wP7zqiYg",
  "key12": "3Lj9gPA8rCE5fHWdDi84xuGnDeCV6dMFQ51xWj5Q9Q5vnsBN5usmsMwjQWB5KwR9s9nCq8xCj6LMMayw51aBLfTX",
  "key13": "5X6ytp7EkArbkrMEcNyREQkWHQwRJEAvgZzkJVRTdaaiSnAKEAqe7M4pK8crnuWfLzTuXZ76FsQD7uCC5iUbyMu7",
  "key14": "541Gcts9ea2s4K5YNJd1gww7f5mtfSpKT7RYsyXCBLcGermFDWwvtY5x897L74dcwqybz5id6Apmz944ErTq9CbL",
  "key15": "3ktzrgFuSxz5SYyL9xu59j78Tvafajc7kaoe1Pz659azLpgZPwpkMg9g3mvGgw2dDXjw9J7xkZGTKfQhJrmogeze",
  "key16": "4BHbN1rYvs6DEBaSDpuEFAPGQtxq5wtqjW8N6iroFFNxHMBT4FtTV5WKWCk16KeXhZAyJXXoDVWzBeSpFBNWAAuV",
  "key17": "29hNB9vePgcDxhBhg6asJgghfUcjaToys9jNC5Hkb2bGmEyR7Cd3ZoMupE5n5PjDkKHFkv7ZQc47ognaa1q9hdtp",
  "key18": "dMf7q5U6YHeAybo3TnbswfTfeqwEHD5VUUNoa3q7bQdwMNF2wiJK27vT8cW13viSwdHgawajurDV869K9eMEpfH",
  "key19": "5pzo29ybvUY4sCd2MjMLNL2EwXXDZHr39oWFRwnAF8XyMxxZWYrZHjXnhhsogQAnsGKmkaLxqDuNzKCQwSL8Xy1L",
  "key20": "38ZnrwHxit3nqBcVypZfr5HbUyGyfE85wKzajL2tpb22rSUnUVpnUrLSXD1FCEHh1sAJdrZteCBj3gmi7TQmQtx1",
  "key21": "5Qfrzz7MiojmCfc2guEmUHs6TiGCLnTJDUfCyHtUhdk5JSEdBDPtnEw8L3D78sjwkrtjYJjr2xrNXnyLKoV2ucpb",
  "key22": "dVM2GAV2j5L5hH9rHHow9dfvELMQSzy75WZCsMC5a7VFY94z9UCqpvwAoZDNhxADgRYRwSJv8YFwUWuUX6h5Mh3",
  "key23": "25CBC959aF3HsMLY7PkefZCDfAWymgf3nRBJVNUpTRHWwRnMFVi9QwDTXgyY2h1YSyGo4oNi88u2C7MWz5e6GNhu",
  "key24": "2SnQ5ivUTYXy7NUpMvWiHBkA7RRsiRVRty6nvB4oG5YEG1xyiXcpx4Di2cRTFzUQgzPo7wvKsHPQ8hu2qdYmmRrG"
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
