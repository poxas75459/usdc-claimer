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
    "4ePqbBSF67xE2yXBpGFoAehhgvxagcfSBNCp9Mikyv76ThcT5trhP2DRE1kQPkKMgugz5zoeGXQDokdfJNDKpp3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaGKEByAPHMGLQcWErV7EXqajySqZERsnDk75ivoAhCNiBr7sAJX5Vin6kbpDiQj8kLPEFBucCMvzctVnqd7XRN",
  "key1": "3p1KjtncdoMeFREuZFdyFRezbhN7fw69yAq9mqixMUicuTfe3jPKL1QbAwBkQ29VwSpEq2rJxyy4EqLcGSVykp4c",
  "key2": "2ymvRhMox28BRWafUX8Wv7MXTLG2o4SSH7pghP7MB8P7pCT4Ww8BMHcRLtSfmLCF4v9gX2ALMnejgL8XbntZUZuv",
  "key3": "9S7Ye535XdaCiwzUFRB2hd1GPbgyTybpp3WM1aCE9rsPmLzg8zSXYTJ92wxASpkwSJAF9XjY6TGMKJhqucAp2b2",
  "key4": "61jCCXY1FrY85TWQx1khETNo7ceYs17hQnSiwXessZPMi6htQbSSgE74vQs3hhnex4DKWsGXeSjXjHT94165a7Lr",
  "key5": "5q1uDvAfcbYeEE6piLru1BqoS5FiEf98VxfAcVaYqxNQtgMTeH2wd1GiApMtwTB4vipNq14GcAXBWjXsNarPFcka",
  "key6": "43FvBLKGHSguoMXoQJVUDTBTrgE63XEQpzw8PupxqeQyzcwAdBBtjp5hefFHb3fCyn9yrnVBuEZvFfn3zhyPPULk",
  "key7": "4NZetg51cuZ3uJxjbEsBz7EMEHNKN4CFdrEiSv15jHfDEbKEivSdcBWcvGgZ3Cg1i3B7EoFwW4KGgW7STHNgkFrC",
  "key8": "2HYqKxsz6saGqk5vzXykKtFjuUHwERZF4dLAGcrYHJ8Sog8gXArWUtXvakhdvtki6PRJqTr7LX2fQeode3PKU8wz",
  "key9": "47YyymunXPuatBxgbob2iTUYkXb5zaBLUUrXjTcYCicUFHactr11YFiGB8j396antALR3tUDgUPWNxjeFDEtViPt",
  "key10": "3vP7k63Het5Av8dZBD9qCtCSUYWwxwx7gd3kvRzLWZNJ6fDMKwF2RMq8uyqSkkLeeqjkD9kyMv9LvNyc43AMqeDh",
  "key11": "3aLEfcdYjEYmr5ZgtehiU97gzfg8b44hFj55yy1hrDwQ8ukQHEUsvohp2tDyEYY51ZNx37jfQFhcxmauEnNi5UmC",
  "key12": "3sxjRMvuSjACL8UWriQhU6uJ8GDHrqg1B2g81Nr6qAaJWHWQRVtUDXWnJ1EWZrBGbzZEZLXSdaJDL16miMEsXgJ7",
  "key13": "3SeyzKSYH8M562gvifF8qfFRsfWRZeSJqqfjWyd8GQrTxNruL6sqSSoaYUMawmvf9ZYd7LNTYXp5d9NJJLSEAgGS",
  "key14": "3a12fUdFHvwBUHgomUqfTyQ7tSpZopdbeRyHFCaFSQn6SpCNjWGs2wtGfRNYJ29jpxmqreCF79bJ5yzFgwXWU4ZK",
  "key15": "MGHdsniP1wN6g3gAQVNvXVpaYjUzK9MRk3S2ZyB1NLL2JXmijUQ1Uo6XuWkbQqEPewQiYppMG5wnNrkU6tG2VSP",
  "key16": "3A2P6oGRrCtnRFEapDGvSCEKxJRmWzkzaVeaqVRMq9YchDAhbSRr5CaqKwEvpBcLrQE1WLguLHCvWZzTRbCkJCwc",
  "key17": "2c7LJuvuK6NN54G9tNJtAFmdLhPMTo1piiUzoSqcezDgXGpXde7Hd7iF9wzeW1mgpRGC2gpFR91cUWFA6LdBr49T",
  "key18": "TNFmZJvxHUP6uB9DDBySYGwdMadp3sAhm3wq23MrxxrbjMiB9kc9zoJgBNXFvWt6rU2ViYuGSsGPM6vi72V1May",
  "key19": "5hSNki1GiDvSjqS8V4Hy52pc6NyfECygpBUedRAxhwoiacPTZuuFrUhrXk4fqXZWhRxfeUhYUtfRjcrngn8x4fb9",
  "key20": "5sPG6GcJpzSavqMBXKmM32NEWukFHqd2Ud62yKqy7bMJJSjvQABtWqA9DmmNNH95sFtQwxFcd9i8dPa7jHX4UUH2",
  "key21": "51VzV2i152qH38CZRj78aDU6XVFwaGBi1je26vAfucciV8fSeduRD4QXyq78R5Yv9vrfJbeTW9B2UgzKq7BwAR3g",
  "key22": "3x1q9sgQn5gayu7MJ8MuZjmC9Lb3o1thVTgSR7tQFh9nC5sZgZvB6q1wVGiNyBeRj1EyiPpnP186ADv7RZuJVyMv",
  "key23": "4zidAMNJHH7vEW3m8YkRgSy33abb5N6wWP2aT2prgjp4c2BzaAAzKoSJp31x1kZKLH1ivWXTrRo9FHrX41bZxFyJ",
  "key24": "29ahfbPjNcesZa8b9prqhWXLweKEmnmZEgcGNs1DPFFpg92nbHQXebZmMZ1o6Pro747tDza32QCS7aBHb9fiu2J8",
  "key25": "5kap15U6fzNKKaoV2wWrxVTjYJR5SKs7LQpU9cWqqYHFrjEjMKEsC61dMPi5ENKJvismmyTsmbxCfZAkuzYaAcHe",
  "key26": "sXvSyQ6jysWACeYgbxqnZTFadof73iGmgxDgaQSE77ngD9W8Ygf4MB19183ViTBFys3Z9Yabg3MFuCkeMqsLckQ",
  "key27": "4oK1W6cUNqd4pXWQGKi7VYRGGwZGYYyaKPYongf2bmj3KFw1H26z5ZrstZpr6dTq5WWJSRR9pFHT5f6UgTGkeKms"
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
