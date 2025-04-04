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
    "1ozmekzS2Z7HGcNnQG1zX8xcGNCcYTaMWpQSiJNqzdUJmFv1qxCPJiycuZFqY5bvhyAw72K8PaK6rQ2jLSeEJeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j5AMybRFjyUcgSC6s45wUqBx2gaDEUQ8VmYUfYs8XwfGNDao9vnukcZUsC5qCCRYHXPNt44AppJMfhTRJBLxm5n",
  "key1": "4nfZmen66uV29ZuGGrmWJbCBwT5TuueC7waGK2vQxq5tG3h7JH8pHyrj1XTv7Pj4ibNhHcqqxC1KgKJdTbiLT7Rj",
  "key2": "3kK35TFLQtzyzj89JRo5AYxUz5aj2D1qSU6RawaPW6VuDWQW2UY8DQjSdRsN7SDuAmjrw8tw1MhHxW28Wqd2mnMg",
  "key3": "3SQdiUqTkv51MHrdZS41QH7ymsPwR2ggCh5GGeexK1stowEamNMUiFeVree4SKExAfBWnaeCEm1mUsZ8YYbBAC46",
  "key4": "zPP2ipxphkkzY9guCwB3KZMuLXpQFCgLDLdv6C8LdbLnEzjf3Xpn8At5KHZEnLewNAw2VpF2yhBZDLqetb73XSP",
  "key5": "2fxY27mfDATByrgJtMWRQcXeYDtA33KN8jAz7hXVsv2QaXLmv5KkZv1QfgLKL7XUAj8oAoDpDFvnjB6Xq6AvKihN",
  "key6": "3XUJoMv9nK7cKBHCB6JGVdDRUrof5B9rxRSPfjdnHin3d1zh2uEXE1cvUo1M5JYF7ff45E981fcnR2xP2QWmfLrN",
  "key7": "21ARtWWFiVvqhJWXbuY7uLa2nEbXxxDLmmtEpwxaov9UxFbFUZecbtapg8TEE1CgNanZ5hvMeuuBkFWxa5srvptH",
  "key8": "5yyT9ooMiViUx3ZJTEE5yKmgY1X4eanEuEY9sm5wunR7QtYKWDkabb6YPaeAV7ncMykWyCkGu3YEwDoDS7quxJHA",
  "key9": "YL9JkAq5V62iLCR3ksw7tmgRf1BisuLqeGniZDV4avywssMkKmohtvtNCQz9UHq6qHafPxLdyg1DMQ6vbfiiCnK",
  "key10": "5jQ655jZnsueVrVNrYK35udS1bzaCj2KP6HpZU8c81GkrixVJVzHJDva7t216PdnbpeqvwnLs6BFg18XTjNKQRCG",
  "key11": "4cMToThYzbTYkG9zi1iP8CBPqD3cJfqaZgeP2978jNu65FDYnHA8HatqA7gsdnxuJ6BP7B5KWYNyLKtut8MzdoHM",
  "key12": "5FxV8ducKnTZenz7gW4EYG9Si72SJcZkXH5eThDjMFAJ1AQceTx5eU4Tq5ZDrhih32D2uVW3UanUQprxzgyFkM1f",
  "key13": "2hSGXDp62au7mFdE7ApnY1e6p3Syn56MaJbGHi4tWJoZEvdFBJcaB22QkCrwbx3aX1SN9x5J8wiRW6Rok46ezPyU",
  "key14": "3QN4gf6ziVvdaXD5rMPz5rg9xUBHNBPKvhftzy7xBWhWZhPYTuZpDAm3ZSycpWavE76DS6YRBcwsQ6maq7UZZUj5",
  "key15": "2W4mJeBu67E73xGeJ3rdgx4UazdeoSkMLSTZ9k7mZWpcTBx91EZ4sHx5wrUbnAVCziNahNp4Jh579PFd16XW8mEH",
  "key16": "KyvSX1N2ZqnECA46NHrDmkTpbdJTDmnQwCvmjTG4xdoTKGANRY77V2Y8yA6yLF5eBZRuFwadVMGVmAtqgyoY5GW",
  "key17": "Wm7JPLiXtJE2A7N76WLaa7MY9iYXZA1uBurHjJ4NQQvCQ595tYf5LHwyhN4JKsUuxGwCgS1ka3s28Sa6kiQoQiL",
  "key18": "RNBAMEhoqPznedbUqxi4iaC2xEXS37JkBacpgu69gxRbJ7o3in94rUNwePcWn1jEDwCFQPk1nV5QePTCUD2ytZZ",
  "key19": "44qw4TRWLbS9wM1cRAMeXbhxDJ1HajMqu5Pkzc8ekLmUVvnad688A2xeRyS3sbW6U4FTZwNFiNinyTxSjhRWat1N",
  "key20": "5qnhr9tuAg9Cm3XizXU8GD99BdgMcFuGMDtGM7DT4CmyktEN5s4MEp6b152kUz1cfbNdocHiWKGrpKEdob5evpL8",
  "key21": "5PTLXc7XGzCFD8n8dQU6ktdypfLc2ZfyXrRBt5Ffmys8nuY3aM5w1nm9xQyhyTgatPBhFKzpN4UKhkiKYEsDhRo7",
  "key22": "5K8jRxocTm9Jc47fVmJX6fcvp7BJKrSJJQwW3BSMCy6nYaR3LNzMBkF2M3E8SfnDy1QFr9xokE9DSHnSxCnsnad9",
  "key23": "5UjTD29r6zrKVws83RDAx85wz4APCj4u11t3R4HU2d9uKm79ZQV5w33CUid2pc4AJDA5bo1nLAKDLetDCjy5JHK9",
  "key24": "xh4zdguJrGiCDoC9K54fwsSyRjA7ZBb6r2hRZG8y5j6m2dbZ8rVGqY6CsMD3HTzTLjfp6e6r9ivZ9umpGhEiyyo",
  "key25": "3Jbcod3dSvg6nY45qsq8G9QKVdEK8ttyw6YEGoELwiojFHJxu5rXFrvbP8BSyCYPEw5kEUjbtzJNeZkppws82bmg",
  "key26": "5c1pY6GArpj79NF4oVdLY7XKEJTEAU6qPJT86cDmdyfnuV9kh4u2NrU7fuDeSEq7jFuq8JYKeFm2eHtVfVD2CqBx",
  "key27": "5cj4dpDnqXhUCgZXMcdTxtRjRfUxjUYrXtzDj4eEkjpuKU5PmCJ3iCtheofsgCS8XAoK7CBSGkyDktMhA4QhfkLh",
  "key28": "4gygNqcxuCwxRKjcPRY8pMQ5sK4ouAQbG6obZKJWZdY6xLhbyZmQV84yhFJuGetMrB3XoJS9dTuFaGgSie4e9wFE"
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
