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
    "2DPd8qwe81t351kDFQ2Gkz7HytLat7WQJSCQ4BBw663Gk6k5A8bh3mUxoLvWPhQzXWxoURGG4s6ETuxWeGph96Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnhpxKmXrdRu2JFGSCDC8kLewKMX5Suga4gAX4EMBcWarZchB4Umr9kf71XwBR9JJe6EH2XGd48RyX7gdiwQ5wA",
  "key1": "4wzfb3ieeAzCM1kStJzjzq5MysevHLexHHeCTPS9xaReGoMY8QhgiX5zrgRzVHGyssJ2RKprkfB5719dTom2hjye",
  "key2": "2oSvkky6DpLc3JFuC7AEZSewqjvwrB2krov3cgnqZ7ciJGezwskK9BoebfSGXQfL3Nr5TJxeVppf6m5FHT9sgQvR",
  "key3": "3h2sFZXPtA4KrdwxcPsG7PiRW6CgQZT3L21NE3qoNEQs6sG63cWTjoX5JZTS4As5VzDXzKTFKcTjLcFudm9m1mL7",
  "key4": "3zRSbv5eEcbyfFTfp72XnPR1VAd818R6gDccMhkFJbsZNy8m4x8uT4gCmNQ7PSaeg48sHUmEbW9mMoBudZ5ZQe5H",
  "key5": "5WwecboMuUNwAtzDTSwW3cAYzHrPaezMkDYW8iTEciummLVDnJuwGgMEh5UxVYZrn9QoXSdzLZKjKbZEhp8YwBZC",
  "key6": "39f82t6LLa4zbCoN4ueWt66acf4QkN5Q9z8NAEcGWnzHZNjAnkaG6BVnwJzhDbqnga6XhChuUHhdGp7Naqzxf6rh",
  "key7": "3VtiHYqEW4UheSnYywDesnhLdpEGh9k3KyNEcv9ciFeoQcwPjLYQcWFSuhtd69Lw9E7vqWazkjmp8WJDjz4xY6Vk",
  "key8": "rGBkBz58VJieWwCWs3e7V4hQiJdCHcTSaNuTVPgwjGfoQ91kF975sV67avhJqQGZw4yd64Arwwykvy7ymq58Z4G",
  "key9": "2UXXnngq5kj4mQ9vtsLWhmtEjCTRrpTC8fLXqPqryWCPuU7uxaTKgyVj3yhMQJbtxe1LezBh63R1ERkEKyYUKCqs",
  "key10": "4gLFShYPZRvq33fQPwqCtahEDW3BhxRw8TVnVK9ER3fWTpnTuMYnBUMJF8LPVNidF5vfwJFs7Gq9Ve2we9SuKfeB",
  "key11": "whiw1SuwxgZtujXiYz24JesgXc18n9C2bkXAQq3pK8RWeWSLnsetXioasL2vjY21Vyp76kJ8qbfUjetNYnEBukU",
  "key12": "39dV1JbovScF7MTSADm7fLmfKbd68yJ6RXW24SJ1vRNvtYqMvciGW1DD41dDobZjtKc1dNKr2guwjhUxY9GxR2D6",
  "key13": "4eqKm7P4ntTgeeStZ6iGyryDigjpTSPq69EowupBV7VNiwLikvBKAMNub2m2iysEKztxAeGLERZYA1CnEY4hZ8AC",
  "key14": "go9EoaJgziN56xEJQvzFcY5W739GtywZqvsnRZsuW23xTQvhq1VE17zCBck6R68esHXiajxdXLGtzSQQAtttUp8",
  "key15": "ojfrsTBu8xD5ZW1JnNt6vxCTtTTdgNBNgKeihkkuRW9oCxxX7Xkd7QYAc8nyMUxgF37q3uyuryKXQK67P2cb2Yu",
  "key16": "5uy6ieELKKR1GRd4Yzg2UbgPKApg1ipWKuQWDUV9vzCETCtb9zYsFdibqtZSy34MAkR2ZUZHmTeBhuQw821U1ubx",
  "key17": "2KvYeAdWqpr35ZTxfxy5rhsn46vNcZBNdPHUpHxv8cz6qwxvdghWV6upm2MgumkXn292jroWMNH8aT3Mp5p6bZ4j",
  "key18": "3bK4AuVq69gkhq1JPAPxUJbocz9L32LvtmZCifWxfK9M65S1DzQGEosVW5UjGPuwCx8jkoLnvoE7UAxVy2iwGCMi",
  "key19": "4XRsj8oVYtD1T3nAmFdBajVJNcpcj6uAz23zYipH9EiVbmKonMJsFydm34HMZD3gc8buS8vELfjTX2iQWy3YjT9q",
  "key20": "2H3urCyBTHWR5rw9d5x28RBfXjtxEZQ4HeGhvqccRJtpiRUgMCG6D5NadrjtMvX4q6vGPfxRTTQ3AzR8XoEenHko",
  "key21": "3ehrjurVZ3ps5xafD32a41odUjcGfuwYfcvpFod2imPHsaBkHmPhh6TyEKr1THJfjfvZtmk4UTxhDbdUbUdeXFds",
  "key22": "4Vzx5HeQKjS6Kt7BdoW1VXT4Z3LoMuLG15nDzBBxNNwMgeqNgLd5jdSXpAE2jtQhH7hYVkYREAQBvPY2pmr862jW",
  "key23": "34MWv7Ka2837rWX8RVNx3eVaYZZ9SAyQDeYhtEkvKBYkhPcemRuhR3cXaSW9MvaqL5tDw25HVjGJsGzB3g2YgyhP",
  "key24": "5DRcS5fGTtTYydChxsHu9Y7PCNZujG2cQsqkaUqXVrwLBkbS8HxASb2b1XSStGRghKJKs7pJnr9QXzHWkmjNB3vS",
  "key25": "5nMxboCH5khaWGk2CUETfnEemvN7nXw99gTbehY78gKfRyEiuHiCaJC2SVqTrHTf31obsQPiVyZu8gjFJtRonsid",
  "key26": "5FC6o848u2YLaRqnJmBTih5cuBtKvTXxf8sdPa7dyUnnrpmCR1P5Bs4HdfEJuNLKMbQKxnd1VCdPfmuTrf7akCcj",
  "key27": "2rqkduZXyjeuTDynfLECkWwwiofaFQ8tbd9qEkt5kKakYYYTkMQsiJzbPu75LbcLpvirkMB4ujD2u2frD6yvh1j7",
  "key28": "yQy6c2kWBZZEaxWeiZySA15bJSqHQRVFAx2N9pvgSqwBtzrJRiZqrXEea9ruK8yw5fqUHHSsVCDCLrTJu3XywxL",
  "key29": "pUueDF1GbqBofDmdDk61zunmDY5WPyvypa3vhGwjPoSfCcZpSkGyVfXPQq2oQpGGsmKcwGobaPbqfjawJQLdxuH",
  "key30": "5oWqSV2ACjmoWYtsFkZBVEQvYiAPxww3SrMxesMuqM6eisqL3JjoKp5Me7iWnMSkczP5dTscgxLQxc8ApnEbECKT",
  "key31": "2de4bMAWSdA9UJKFBtjiiakuCUasHKeDL4TtGqdd3AMaVEYKbDKa6nRJoq4J53eC89N3ALDHQtYFuoS76YjxDktV"
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
