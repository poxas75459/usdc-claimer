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
    "2zpF31KJJWqPGM1aowqVfscEDyWnngtBPbJ7U4tn7x49UNaCV49didPDEuRYxBGJKgXQ9myDnU89Fzt3ggtmok7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJc9NCabuNMMrncvryMiw3CTWf2fip8M8rKrJxJ9M7bbH9FMKsoxtgUj5iUqYkZiJedv1EowgNDzjjGhj7QnPar",
  "key1": "4Xm8Y7wiy3s5x3FP4w6X7ABtnXTUHWaLAskeNzqn6p2xmCJC5Hif63CLeHyPc2emQPnZ3jSoNm6PHnxKJqnj6Mj4",
  "key2": "id9tqsu9a4UcHgrNtRPHrX6L5LCDGfVXWWf2itBs6U3d3Dr4sh1BdTRcviR4fD4EJeEbrSgbhXHNPR5qVvbXL6Z",
  "key3": "qsHus5nURjJSx9LCahCgtF2hMP1fjLB3ZZaajWEZauuUXXhVtwtcK5WDUFTuMDFx9fYXgo4mFcs5ZALJLd9PVc3",
  "key4": "2hPLy3zWtLzXs9Kt2Uq4Q3nYgCULE9pvSoK47nrSws2j28dmwExsSVZcxQGdUWWeKc2qP2jxyGB8oJe1Y4ow1srh",
  "key5": "2MQdU7dXWmuxHMoipbra3PgukjFbt6bffj8Vqfia5swf3pEbv1GDmPwCHbS7sD1KsJN4b9ka7GrsAdSb7RWE5hFW",
  "key6": "2AawL3BXLYMQD95EQDvwm2VwTo8YSR8p3F69gc7xuBaGkgPLfewZujAn26Fi6tgyiF1JbxUFTXtC7i1FUoHbEumv",
  "key7": "DY9zyshMFKCq14JcEsqdY7kgFeBBT4vJ8im5aYKTmBAdk4YTvy8RmZtGsu27mg7V87HYrxPJBeeju1ae4BCG92N",
  "key8": "2aRCXq3YgJicGFFkHYP92G4oUdixbk8BVXxMR95uMy3CFGDXMV12kfmS1rq4JwD7NDfx2VoDV47vBDH3Fw19cpFV",
  "key9": "2q5fn3hFoGewawbC2gVbU52WEJ4sa7oqx6SbiYBWVmeG37g5Q5bt4oVpwMLHLbreGTAXnhbTLtotnsU2QMM8Yjys",
  "key10": "22UfKGuLXtpXBUKYXXvvzGym1dh5ysuaTRPiL4KbYD4g4XQGv5sWrntrsBvG6woR2413cWvg16v1hdqzs8HeAiux",
  "key11": "5avEFd5rfDj3sbnWkQEa69jBg2dem5p3tFt8WGjDifV1H7UywMXX1UKBFW21HRNxfp1rrtgtsrzvvoA13hbzTncc",
  "key12": "VHasYyna5adRAp16E8jC9teBsLqqiaZurELp3optmaeB3dNvfJxMRov4z5jY4iDBVGz3oB91Ph2sc8fwyAyxgNC",
  "key13": "4scEhw2pdTVPNaizeyNzyo32JxmpyRSySabQykkqBwTKJkZiKCLTULcHBTg2u1N8afG6VcfqUt3fug61fBkQj9tP",
  "key14": "2j8E6Kh7eHhJhfRsYTu5j4GmWCX8BgWonND6H9fouQZbe3LYbpdzesKyuWMVdk7EoESoK6B4E2JXfzEpnDA1thWQ",
  "key15": "4wgNDufnaxSznRUdwZWmx261gakBQQ1or9VJ5KKTjxFcfLs1HLbaojnCcq6cVdnD6vaBiT4Rogzb7H8z4gSanmdD",
  "key16": "33HKAfxBL9NgZ7vGRnHgSsPZndsct3BujQSvKvSqYNuB5wahLqhnEL8GmiNikmYv9RBqrxtAidd7kqpJfbu2bsRq",
  "key17": "47sqM4gRu6aQbXgUc8zhT5XnQMXtTQiuY83j4UoboGYomyNS6V5zpAHtGbRffAXDKQeRfuz2CF2x3NGvehdw7Z6m",
  "key18": "2gQ8X27K1amyJhiUoRmkhUmhUaycBX4pU9HVV7VtvGXfB35ahSsHq7hNYnNQkbbnVdH54gojk95mbDUDwYPhhegd",
  "key19": "43EkF4m2zcPy1t4mYGc41kFv6gpDpLfM41MoC9keUBZV6PgMTkrE3nWmoyG3qmnze3w6Xaj5dt3igqD1SSTLkb5c",
  "key20": "2q92agHjKJ3tgbzmGW56zdPbi9SVPx5NxKk1ZyMV6fjjhWqjpY7jmVooZbBAEmpAwrtUDmVu6XUhaiXVwTXoNcbh",
  "key21": "5rS7k7t3hjLjYW99tgoLqYWzVenzw5sC5BsYoKPUFs5u3MQMdkCALcYCRUb9S53eUW1eu4GrwrGL2N7maZNZh9Ro",
  "key22": "5YpYYEYYTWiPdFoeDqzDmMMQ7augZoPh3fAu3CJSRwT3k1Cdz6UauqCWPNZCSroZbsUEXtqgFrJxWfwoECz9ErDE",
  "key23": "VMx7tJzBnmZqvjCJCDXuQs9GbjKQ2BzioUjF75dX2nz4hvZGZDtawF8HHwt1eCg1M2wtHd7z8yU9xq64sh2Egue",
  "key24": "QZeNWkcJFMyqb5XZHA7e7VYEwBTTkQRz2qVRtru3L5FwW7xs3YQ9gZFCjmxNqzfcufbxT2j2VXeB2G7JfRRGwYo",
  "key25": "3baPWcZPJo8yvemfZCMzCM84bsmJ1hZmN2V3q8yuUKRyS1npmnqmQSwqjVZqWdTMq6paKsytwhp9BDoFTtaKMnzs",
  "key26": "49ZXyftct4GHy4PLowWXazCcoPDJm49nQch5nD5bHWeqGoHNjnLwmHFrCAzMuqYKPmtj8xLmDBiY5nquxKFqGZzT",
  "key27": "xu7GteaTKiEJaGZoWx3KFizp4fHhssKjDQNGXEhRi9JN5g9a3GytwCHX4sqy7JhodgFLHB29cpberA91qZ6Cumf",
  "key28": "65MsRFrxoVByTX9PMreLv4DQQX3k9ibJrCBc83mowEZw5pEhBaFLovTUMczv5NdbAKwoWFDGyN2Gg3NeenNqFpq",
  "key29": "3qXtJXKVLKKNAwpsgYMZahAHt2pYjoNWgkjRiSBkUnsU4LSsEZrxHtuybxeuA6qBczJkKT91PwLExNSteZ6qgGpL",
  "key30": "5vck4sXVo2RRU91CfHpi4YKLwhX5fL7YaE1UTuvVK7LPyfEH3PcKHijFQXh2hg8ckbwg5CC2enYWdwggGdtMJj7S",
  "key31": "2MhwTzoE1KaUYjbrHXmXjbsPFyfbMtCfNGY6wGMUQDyKsrHUTERtZezR4omjmv54NKb9JLmUTtQHKmhGnDBbATJJ",
  "key32": "haG6rSdhJ3viQqW9PnVW6zDL9Hh1gUQ4v9vdBapz9CJP8riDdsY1c7HdAYpKWgcFy3tw9HLg4SDxfJinG3es4p9",
  "key33": "3LGynV2h53JKFjGGoYdxoiX7jrUi7RrZqpKx1mzKQWRV5K6rKJHWfQSxPaL9B4Jwgm3Nk4gxojVn1qUfAsTMFKbt"
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
