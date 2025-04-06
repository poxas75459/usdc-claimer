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
    "2x9qmWoznJPkVw3bBotvnfgk722wq44x8BFn8UdJXNZ3gfkQoV3Ld7T4JWvhfgKqVmUhquYjMdoRxBg4JeFQrKPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEiW2gT6cJE3twRqhkvrjg8f7JXEzHyXG82g6wKtqW6jSEDzz9LiK4tm3kuug1K5oGN9JioEg9N7A5FUCA9XmzJ",
  "key1": "5umPdYaoknsqJs3JhVm3bX7D1qGGTJkCtqrHDHe7E15yKfmqb3RzUxSZJ2Jh3SxNayCNg1pnmt8EoN6haLBTygwz",
  "key2": "4itS2zgHg4uu1gzoKKoF8DGiead8bbTeP74uXNv3m73Z2Yn3ssbnBBuZYciajhMdngrCFFnZA7Tvb963ERWxmA4p",
  "key3": "tcNHkTsrsJ1SpVbjrNsTXdAYQ4owe93ExrZmr1unzjXU6DJQLgjvTbgmsuhiCY3mHxCv3ibmikZat2TfWEhQe1A",
  "key4": "5Ceb3bLF4cT8XSTKdfq5LeYQbD1M6zX89MFj73Rqyq1b5BVM3PqGziUree3C3Hkj2nPpp6svLbFEXZKcV42DJfCa",
  "key5": "U33TU4rxtpDXcFJkXjoqJh7ShWBPqZr7fy3o91RpbZZYVoCrxsW23kxKDDJNcdhUXKkrdo2rJPWguXmTn5VzYmq",
  "key6": "65mBbpYDdXputzv2d9ki8Pxex9qsr5h7RNFeaQQ6LoSwqxNafEvbs28zCg7UqrjzAEWB5DuXqKjCeyrwE8qrNgbB",
  "key7": "QHEz6smCC3xtqzAw7eaTptjsni5hrAd8svZNJaMYgVd2rFkH7KZzu3aEzQrSV7BPgSr3kGj3PbHFwvURJPF34uZ",
  "key8": "2XriX2AmF35sQTrdtk4XprBAKGyb3d2K5myxWv6QeoP8TYi5quUY5ZaAFyuYTREof2Br6qbxw39Ep5MXrXbXztzY",
  "key9": "1SQw9PPYTcjAESJmfYWGe35TsCu2P7xsy75XvW9RN9mYmbNJGoDCkzbhzN7PWAjRzZGoaUSqrwJug7WeX8aD8H8",
  "key10": "4kNCRXMuTv6YQuRb3A4nHvzB6oRQR9GNZJ4JAiuPEjNUoi2fLwnNwi98zQzJRgH6BdcYEB1dpadqPLsHvkBApLx9",
  "key11": "4dJ3VyojcqakzMyB8H8GFVMCJiVaaswCbxU4HpMVqZG9uNionyMCnTdjGxYGp7k8DwhroXUtuA8W3dymz61ETR2w",
  "key12": "FucSnuKpjmtAHV2L9ffP7w76iVjPdo12k4R51bRgXDL7biGyZLqSpyvo9Bk8be3scceD6N3NWjo7rZRQ5MFYyhc",
  "key13": "MbU5ZZsTuzUtG2HUyXfYDyLPzXCQVKmLfZoFzScQpyXVERknn2CK4FFRF9fZx1T17cbqGpnM2UDnt9uUf57geP9",
  "key14": "jH84uW2KmMHNSwreKyCsuhjqeqy3gEiL2eixEzdSsP5YoHxzS5aYkzqGwAtAU4sr5FwaNv5HBL1ZQ1xF6kbzDnU",
  "key15": "1d2zaha9j1mRvc5tW2KPJYsMrHCHjCM2YezgVjVa8CJBMatsA7iG3f7RaV8gadYxj1x15AQ6mk9SrWPJECPzsEA",
  "key16": "2hmj8XVEvQuDeLzmiGfWCGijZwgtuv7xRNpDR8VkRsF6EuLBRMGy5zWR9CBqbJdB1uGTbbFpTW4zDfiJ8mGLubvt",
  "key17": "2QY7Ust7b6KLpZZhihVcrWLFowC6P3pSkzmhJs7dV28vCB95fXjzhHy8Zo9tpq8uQCL2mu99KNR6PgQqyggRGMAY",
  "key18": "4kWxULF5juuygQhvXD8YJcBY7dkC21deGrC8Z6PcazKr1cViCdUUtk3pZxRcri3cFEMzajfQLLKgNgBwGKohkhpZ",
  "key19": "4L6NukKEBwTxaaRL812hw4rJRty7NQRzrY9PXpAMbgXUM9KvyXCVq6eE8HzgAtyenowyPQncVe2Yq3ECUWzKtTDh",
  "key20": "3swqGwvjcfUieQaFvxr4mhmgSMSeHGwnUG1jq8vzjAxonqp5dJaQkWCVMWy7Dx9ExayJjgRwXqdFipaBerAf1buw",
  "key21": "23cMcFY93Xk5wXdsYqhmnXSAoe7ugc5S9sXMFvZJneL1MwR18fmqUGD93e7aiH4FF7mowdqhrxGuwodBNHbu5hVV",
  "key22": "5zkuxswrqvshk9ZoHh12EUEw21C6Vw1h1tZqAkZCUt1nPFaYF4x9avQ78GwfREcwx2c9xjZ6yKFGdbmy7BdWZikv",
  "key23": "4WHABpQx2eMZ581wEJBgn9RyJBrEkM6GyRsrMGhjL3it4zpau1UegvCxCTPPCEbuZtxm1uNhRSsagWJAmKG22e9A",
  "key24": "WvE5H1kMji8k8ZQchzbALcPU1hjQQG6dhCtZeogSNWgZJTYiRsmTdMPaffZDuYmzuPR42bZJoCNYFyeWyYG46Kx",
  "key25": "54Jno9GiYtp2vtUibyEf4sHzfngDrqpzyuinnvdH6LuUXqZY5oqStWhvM8cwhqwGvm5UM4rDDdmMpBJBmNWXxXgP",
  "key26": "4DY2uZA88sdgnPnratDJPBicZhKhG6jFMxXhD74PDzq7WCeYadXFi9j9UdqZQY1VncpcDtGRt3DhZHwmT2ETsv8r"
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
