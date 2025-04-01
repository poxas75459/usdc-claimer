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
    "2Uov9szwWibo8sBgZM8hkGfCySW8xr16bqC1GmJxDQqHomWcgnofvxYzq8wpRyQgZASNHeaWfhCmxrgVzufsGeW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o7PQYhePBbk7hGmLYQGkjxdMkr9A8x6tjJvkzT9Ytzx59ybF23exv1Ht5GypD7YDrnpurbNsSJZU4pkNpuoGYMq",
  "key1": "xAwBTBEHnXBMou5KLFssKk2g8Vnwcybt9VZ2faPpgkBBhBsqAeumRxG4HT1ZnjjhUCbp5fmX7tcqZ7Ue7Hbx9qa",
  "key2": "Xkk7PeEcx8KAJtkngEV9aVzszprXiyEmiz2J3J37D9vPxbPQgUrFtmgjYgkSPpMxjKHtuxTmX6tnZ6AB7wCHdN4",
  "key3": "34yDfdaXice1ra2GggmgBEPKaM7tcUKucLNFheFyb3e5LRwbzGTSRYAFZ8tzH14SnGNSXsWprPTZtrKPwyqv7ipn",
  "key4": "5aoraSsdffteRJcTTrp8Anz5Pu6bzVykqv1jdHA1GXGxqGZN6qip7zPcmu5XAkF3zh3TycDy653czHjgH8J2FZjk",
  "key5": "3J7AxfE2g91ZMVP2qeqV2x66Sqq39ENLoKy3jmwP19VDZPrxjFvYz3Q5S5ngR2rn1Jrpx1YFx1H3F3A1x7Stw3Ca",
  "key6": "4WfUfwcDyQncFbShbtLpBMg5WYEukUKJPHN4MJ9X1Wo9hbzspcbUxmdEAQBz4Q9TX9CG4PXYiKNyCf9zL1b2ot3C",
  "key7": "xFpjF3T7qqLJL8BR4DRGGNhbfPsuAhUaJDMSqK4LjFE7W4757N8pPXuCLmY3k5nCm78gCDzvuBfQhLSNhAbLjgi",
  "key8": "Luas9d6gZkDJJsFr9wXHGXG9HpbmSfQpTJZw6Yn1fn4Q5wrEqrwV8uJVfZaehwVBSf3hqmoCAxAM78sv6fJ81qi",
  "key9": "8pCJtinkyCZPTQtCa67TBTYVHKyCSqfseJjegRC3t2YAci9S3gtWMBoS4opAtqLwX37ZoX77LZ2FFHVgJefLtqM",
  "key10": "27n1HXTK5Jtb8edK8RYiqNjWS8Sw2HwZ58vN3X4WpFSEW5wZXBvNXHKrcnCx6VuKZAYro1utSwMeRRtrJbFK9kN8",
  "key11": "29VBjdHxDS2nVjETXxqDPFTj9MThZ33DbPVjjnTqGU26A3SYGE8qPh9H9KhZjk1Hgcr6DZYktRYMa2YUsyQD2dCn",
  "key12": "2aD422oFwT4ANfbfcuxgYReYfbLmZm9GquEUwyBFH2Qu3DvvUURJMaCEB8xSrsqyNXSiKnUqeqLyuVHRnCFmD9BC",
  "key13": "3npTWHU72jzAmBZiH5YtWkSd9xxhNiFAzDuShNcittJZrM9mZQzpT6RUXLTyUF7k7KjoEB3xs3dNGJ9x4MxCUXr7",
  "key14": "3K7Kb3heB6ujPTfHcbPJPq37Y5QTaoTtTFW9SZdQpyVChouep1mMGNxvautGQsrJ3bhivZAyEUgqZALFfWtfczHT",
  "key15": "2TCqPYv3ddaA868iNHiHF9QvaZA9PnrsJGbVRGw6ZShsMMvgMNHJFt8bCHDtCYQzn5qr6cq92EDHhqXkLwhgAC4F",
  "key16": "3ATx6BqSHrmYRU37dD4viYjfj5PwD1aYcbgdMrWBwiKosAzQ54GMPBx682YNbxQJYzK97Fhu4t3p3SFXgNw6jbTd",
  "key17": "xELTRWV1e18671W5Pnd4eFqfPREVV1eRJERx2fy4LjUa9HQ8VVXihoy1bj9bMAoL3FUzfXTiVLsduCsnPTy4qDT",
  "key18": "2MYL9h4FuvLL7VBpzq5Nz1PofdKG6JF67gzmLdadPhLhZ3s97FznJH3xv3oXh8DVMezNGfQnLKgY4Q3KB7B9z25A",
  "key19": "4WmBSYbwhiiFnX2PnCDmgNvj7dWxMdt1VPohrDGKoTbpxHaCNaJjgZ1oWftzV44y8M2ywuZxXq4mNq2t4EGdosL6",
  "key20": "5QyuKKX8HcF59jyumuW8TddpZgTtFF6mauk3rG99A1UbWaQ2EB1h8mrYDZh2qc5TmqTmeRXy35ED5eKZ2EmhW61D",
  "key21": "3HvJTdyQA4Qfd6dDZQbDAutHhxiPN8nFhWLzr4DAwDnY6HrXj8mrXSg3QvWf4ooWRdw28kBqrEtod5DKHJC8hEZ9",
  "key22": "5g9cnPqxhicNiCXzm8i4yCZQRM2Cqev2E2s12U4WjECgmC2rpCthtEZ6hoTJSEneLMX4heFdgtddUVoktQYd1R6",
  "key23": "4TwP4v5EddcaPjaTS91pyzZzoU2uKtV8HbUNZ9b6iK6pKtSssscNaduzAM1YrUKyFNY1UdGnjJgpQEX2eSrPcMvo",
  "key24": "5z3UGdvbioHYZ9JiXcR7Me9VWqzYjHniN2mh3FSWexM11FqqvptHuf2RRMk7xFBsuwpSeTjMiidQw8GdBK6EdkeC"
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
