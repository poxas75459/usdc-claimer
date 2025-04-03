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
    "4qwMys4SNMSQeCvkwvAwheMu9H3Z8sdsKH6UP5hByszJm7JwKQrkiBRHnY4LaY2kD5QMA9sqMamQy8LDbuD7RoC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q79nLnRZXSGjNA5QWFtmACinkZVQwF35jHRgp9fbynDpuBCfrszRCTwznoE4WX6RKNAwz58p2kF688Y56g8sivm",
  "key1": "5ihgSC4Rtgyv9xp3dwr5ZzkRLiXcU9TTaTZPnLxHdMJ93CxMqkN3C8NGNWMjy6UTFMyM4JvVkVUCVfKyBJEHZAZQ",
  "key2": "2eCjbuayw2eQZBDFcLxeYunQZWbEEYw7eQpcEkyNP2ZxK31amAGmPCV3S8swRgm4huo8ExR4XVKQji5KCKgthrdi",
  "key3": "2eM1eBndc2Kp4a3VxrvacZQbVbgtVNfxsTcBWcprB2PazyuAdtiSwohSjvDcXuQzgW4BRMTjiPJ3Cwd5WnGzk1Mc",
  "key4": "5nUtma4xmh74JmbRmPXpwWchcp9vE1XbKmVfy2PoXuWqbYWzEnYc7YHvikAgXpVywTdfdVhjbReJMsjwVMCzwweC",
  "key5": "T8vaVybQGDnB4tpFfmfsk7T5ztfGCw1hifzTJTNrhrKRxMAggH3qdR7nU3ehCHPATrQuTpZLGE842TT5nhFDwVj",
  "key6": "2j2YXNraDQ9546FUAe14mSPMP8bpgACRpNuwguHyp1FozYgUhXngJrXE4GeuuceZbumP6WVu5r2bk4vCD71SK5he",
  "key7": "4qHipEG5x73PrVgW1URD8sTY4YPNhFgy6DW5dmKV6DfH6R5i6GDxwRRBrAaaoCYizyHa6GwLAYdCPPi89WM9rKfP",
  "key8": "5cdGP7JvAnsLvwLwcUytJcSQ2KgojuhPUPs1g4m6SjojnrnXsoxjJsBNKhWEzpwDqyUzP4o34ag7bBrECKotDXVE",
  "key9": "VADgbckaQTXzPaBuEZRJgHoFKwagBPJXnZb1NHwifjkQfozF9SovvLmCyyCRV8vk1Sw6tvvq76TKJH3dsxETRey",
  "key10": "5ugbfLyVUNnAD1EGjRVnFfFnX6cFn9erEjpkew3WUxvrcnjXsRbHbnDBXEjVuuPPTuUojVXEQRfPabQycoo12RAT",
  "key11": "5CBX3xgjQ4ugXsNBd8JpmVj8znY826JhVpWf5s6xbkaSNAsWzvzFe7zKRscLMnctvLuvFTD7njgpd3uxQZMGe9eW",
  "key12": "2FK8KFkw15VEAVCGyZDwvCiikafHKbm4kSTSw8YNcqFqDnpT7kwZVx2RhZ5dhnVoYbD5nT5N9PYMS6WZsmxqFWhG",
  "key13": "5Ud2NvWFczZGgut9WcGjZJLD1XGXq6ZhDa4RipRbMcZxqTL6r4zotwqmf1TF7oRFQpino9UnQCYronjpUEybUiN6",
  "key14": "46X2XgpJ7gpkapZyiKFXmLZJ4Egtfs3rxyzx1eUvR4qCzKFwy2JnghZsg1GLNbh6pLT2BfXBAkZfRSNDvYgDHH7P",
  "key15": "5JWZb3ujnLGtBxCxVcbZxYZrtJv6KuW7aZKyQE3F1ZZ972Lk7sLzGvnyZpThfaXMr8A7hZiiG4HHfvRaXy8DGQL",
  "key16": "2pdDsGrbNX76H76PabUxGMphdGUZGM8J2xpMFCnU4dLRRXghY3Scd1wqGaPEcfLxwSrBCU9CTDUmUfhQ1SehS3Zd",
  "key17": "Bx5V9m9cf7UMYiep4mQG25nScjeoEmZAXA7VACS65UafCbq2iTnXDiRpid8BKNoLq2bDnn5EhnNB59cjuVkth4z",
  "key18": "5zq2gMCHQDgLNFtnr3ado9Rd7XBh2uHMdAmwnF49tczakLQEjAQvpdaJnt8aCpkn6nvNDrWdwors8ePkkEoXw8eG",
  "key19": "3cRoUS9j4N8GVoGe3xJQJMkBfSYJueGerW3Pa9Vckdv1hH5WkPbPhXo6btN7UaFH9ATcbTp53GikaDXjbfb2LwLt",
  "key20": "2PKwEAUi5xgB3pymR4d4u2N3rqd6DRMhzWhu5koQ28pemqNz3FVgeQ4EWuM2oktn571pHHuVSifzBshJpf3v28XA",
  "key21": "g9thEu144oZzvhTP2z3ccUc9f9rckhFgJh7Y8KmeUZAxLRa3kBg4XMNwFkuZ1vX2U6TjTyND6G2mJiDFc2sEj6y",
  "key22": "2DkiiATBRWFvEiq92K2JP3MvnUicpEE47GEJqThFpkaxn6zrxYq8xMUErUwRBBxrVo497giHjZuNQT7m2cWcLXTM",
  "key23": "49X3bezXiG4uL3UEteoq3jGCDvNcoB1WKtS1qh9pCPT6mZ21nc6x5vM2WwzyTu98AHUp8y8aCAdchMAzpkPP7L4e",
  "key24": "3gKNqEVtJvQPk3WtFvJGE71DktLTbKDWCLnkx5wuYDBW9LZwSAJrghZTu46h2NBHAW24R5NcwnefC5Cr33EtTJEH",
  "key25": "4orHSRMc3Dzsj7QrE7BdwD1LkzadfX8RFtU34KrVrwxt3W8WzeGhkwKTpjjEsxrDYJaS1cKTUTTR2tE3pnwWRXHq",
  "key26": "5Xe9zwnJqiwNYU4nSPejCwmwBHko9xQpn8FsthCXKtXcMmzd9CyntHL5ebRkJRTpeE77KLN1GorCkvum6PLMAPFn",
  "key27": "2Q3dU1a8XML1y85Xp6T4qDc9pa97VkwDQe7nEoEBwGya3ND3tYNcFYYswVacHnaLQ2zefcaKu8X62xbiJQeYvyDe",
  "key28": "61NUBoCANd4XX8MvvuTEY8kMUafXqtMFrTGcCtd46BPa9xRVCUnVnWfUreMqx8vezVYzxd8377bbPDGv7VXsjjAa",
  "key29": "28qDmkHjVPnuPqeuNCdVvf2VKfsFWYTUF8mQBfLFQ3UMRn1xBh3MrAHcdzEymfFiWjkS4rYfRWXAr1HjTxJCMqqo",
  "key30": "5vmgmi2uLZp8tMHJWTdp8QSUWdxsoLxu9Z1gPPqhDTomuMfAM15oNBc3QKXbenpR2AxWke8pNf2xeqirq1ezxDLa",
  "key31": "4MKFunTy75p7pm621do9aTdGySCs9otEvzR3bCHZCxtitR6rwb4sDTFDFXMn7kycgJwarzZA8uJwJgjVPyK6s2gr",
  "key32": "3r3Q4sMuTLKFjfAb4NapH5keXDLE6RBwkNVsQobWtHh1tC4vmESAhcx2Vhk4MjneFGsRykq4DwzongkCKJocgkm"
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
