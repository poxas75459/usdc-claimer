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
    "4tVFX37rTZbshane4tRRkanrni7t6jbHohiChKCB259pTEUwzD1xxxPQUw2XjVbtRq6uSuZWY4TTQMMc4vPLCRna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9gaeaWfm69A8DT4g3GQgfoJ3WmA8N76csymEhiKeCMLPpyEJmr7EXmgzD1Do3bYsprhccCDZAghMjzBMzQUwGh",
  "key1": "2GbbPei9Xhaz3Dk65m6AVRYjW8Ymwmb8eZDSRiaQbr3YgebtMgfas3KwojkzTYFCJLEztDvQHDHSb29D2Hdu7xPC",
  "key2": "4pGFWDM1aKASTHWi8cXCBkt6RjhH2mRa9v9vqG16dxSngQ3tHvpUMynY4vSHLHVk92DuHvstGzy8QaSiGWZR2Dpp",
  "key3": "25PkXrjH7rgZxYknwf3bMoX4SKRpbv5f2TMwY54us5ACwDBLxgkpa7MCqSB6m59iZx5oDvBs8eNnTr6N2vMV63Fy",
  "key4": "66MYHJh9Wuc7Rk3XDr9H8ghWfuQY5GGh2Hos8CjwkrHD2zU8eTcc8arb5oh7KQLaGnoNq9CPpcj3d4utAyF8ovJ6",
  "key5": "5z5QwhJwCNZfXm4ZmTPcYzsnvy4SwyUNbQ3my7xCThBHVy6zn811ywz1taGfrx5ytTrMGWWU1VKe8f5eDjiHCCSr",
  "key6": "4g1oehfJ52BvqpBoJ5ub8UbSRV1kHLcwzs5b3aa9eimeCPDhrwr8V6zbBTVfj6xbpsPuqv3LUvGXVDHK5LZcCmmY",
  "key7": "43jq6ZiCFzV1Ba5WffjMzw4wdq9c5DavCbzzbX3qZ9tioNj7N4k6nNcPB2Ui5zUHAGCrRECkd8fctdYwSim81odd",
  "key8": "4ivfNhWkGyZVj55hjTTZRfZb1Lmdd4kDZo5zYXmMXJ1Yf3LUYb8Y9svpme1JHUhjR33bJtt4JPDWAsoNuZESBaUQ",
  "key9": "eDTSgcHTYzpx73boSRC74ALGs3qAidbFEqqg9vVB7dMBawrVoKkX5UjU2eJiCiGDk3NCUxNRDrmqR3RVunCH5iK",
  "key10": "2Cc6goDeJWgdyA38731DcEYS6EGi88ggTszpbuvh6GNb8dRJu3jQoubwHa5mxMczfs1h6qCHKmMzMUgmN5QTJgDG",
  "key11": "4dwC4FGJR956vhYjHqmyK13sEugjUBHckHzPfypx7XWyCoe6aA2PsWzHyvdmKHx5RaiLpL3ZpHsvnWkS9xdh6Q3P",
  "key12": "4x9pzjEphFNhCDAvzAoxRVDpAasChMfX7HW6Chcj5oKzGyNiiKa39BcUdL11PzsWr6HVJQE3KNoouz8RwRKiWsEz",
  "key13": "2Cof6vtZ3fhEkTCbKkTDCgRXC8nwRnY9iW9bZQKnqsiuDm4ZFxmpF1bBVP91A397RPAmwFmuKmyd9G3kbU7pkJ4",
  "key14": "3rQwR1eEimH7hRZYw4ZBWwrhVeLeDeeQVuBWPZt59pKZabensyoR76GYuAeKtj5qwvpTkcj3sci7r4Get61WNP7Z",
  "key15": "2P2SqAVcnppsEnxxJrbDmsU5pAu5nuDvvKzV5mCyn5Qtb2Z8eWADa6oL63T8GZ8Cq4V6ybbKyKVBsaN1Korw4vuu",
  "key16": "4KdbM7Kncu29ja8EGKv5ETsVdTzvVihwHLqzqaasKAwiZqBCuCWu7UrKjSo1XNnvVysUZTjFknA3tmaHsDtbRhmJ",
  "key17": "5gwyao7TBxUa2BRq2gEeZvFRMFhTqTsU4K3tPTw3DTj1K75WzZeTwWPxjTSWSxDyH7AtGJDoUd7jJ8TFSXwt6fXo",
  "key18": "2GA2yTaLC5pHetygcJMLVhAwfqNn5Axw9WpdzNxLk5gyn1xyHYYj13WjRD5dHdTbJrKZ9hXKWNw5RefBf9qmNdKP",
  "key19": "5bdboyWQdR9BRj3fmzjU1hy7zQGdp8DN2CyjABqNE58nFycR2ioBeHcnW1VHjjpFZ4Hm133gzX6C45XnoEWYUi4t",
  "key20": "2WR8gQ69SL1i13yyA28bYhVYfxkD4edWReLd25t5e1ewYFnd8imAd6ZdKenEYqkZFiP5TwCVyunbDZssSrFPZaRv",
  "key21": "4nRwUih4WKq8iiixZxuoxyppxLNRbyiDxXFUKd6tPXVqgFuAbsjAcjX3Y14eGoREaKzM1xQFgcrEPo4WGbnP3pj7",
  "key22": "4F9KjkJp7MKCRaDP6Soigbuiczy6FiGvD1kjKzpw2X27CnzFucbzH8JyoYfiQZnf1mHY3voUZWiNEHzT8vzBjExg",
  "key23": "6SPcWey5F59Pc3U8W33em2GiB9mjw7jrqS7iHMFkCnfabFWzpyExH6k63JM9iAHw3Q8M5EHi46UzzBiAiVw5Abc",
  "key24": "2A1niRDYEKqavDozgWMrofLQkSDcEziS8Tvk95Yz2SFdNr3CTNfcQHbcnzkNXbiRVSPTvM3CKVnhxLJP54PEZGRR",
  "key25": "4ozfWn8eeaoudCu8gBuRyJuYrZdU8FMCbcetZmPypNEqeutCWQPprAoGPV4C7FFPrGYzzAkKQz9hSakbbRmEJnG7",
  "key26": "3NFuskjzpmWMVvz8PfS9EkeJ4S5tPPdEkeGXCVfFdWeTthkCqXxAAo5orDUhPuDgzSPdUJn1nvseCiVwfh299zDw",
  "key27": "ao1aW9p9VodZKEx3Ub6ntFZcN6hZSJdkzV1thJpaepDU2jzVNzG8wXteKwkZcJzZZCzmZCwwKEsDXHscq1eQ3vC",
  "key28": "M3rSRBvEPfo7yUn3dXse85Edj94vVMb8S4C4qsF9NjoXTRg2emqujAVuNmjvzqBhBq2Eg1FWXeeoc5xzgLf39se"
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
