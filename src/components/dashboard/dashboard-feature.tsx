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
    "5dJ4Yxb3izXNBzE9eWggMqfupWxZFn3FrcpVswmciDrafjMiifVAQq7C5WJE6DiiE7PTxYGkQQAnAfe7T8Dd2FFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FS4UdvFNFVcj57AUBoaeWnHCZgWbDVUAjpjWwgjcS8rmwHaURSkNAB3rNJZe2Wx8mD4CbJmigoBiWbbpydSoich",
  "key1": "3X41yuG6mfigXqRwqJXiLsnehfBYHVXfSeFXax28doHrarMfLeGPwW9DQFUWY9TAZ5GsW4qPs2e76QGUh4Frru2R",
  "key2": "2Wqn2KcenaBKMrfRycuw6pTtBwevTEbYCTvdGWriVQBk7KDuVqX8xC7qLvf9Tki32Yht9Q3qpF4u8bNiYZTN5Tdv",
  "key3": "CuQPUwweHXG2b6q7i6ZEQZ6MhggkK6rEYsmmydPkwdcBJk3PG33MidwDkLSC318ETpFCzzC2y9Bjn82aZJHWqmJ",
  "key4": "5mMo88qwH5V48M3o5NGPP8TrnpTM2gkKMJJZ42GkUnQ9vP6j4Bfg8sYayxCDkmoK17Pijdo1fvfjpb1Yzy5zzDvp",
  "key5": "5symaY9bjnfZepJBunt5fKRmAvmgkcmw8R2WjJA3XBtv149YasqsmjUzTFyFcMcExdXcxAyw5b7rNs3p55APFCzJ",
  "key6": "4hUZnh8YEcBLYJtUSxF3r9o63ybF18962Tdj4mnHhAWUhDhoH2LDynM3YJQRYSLiNFQ5S65NKn33JgqXkLgWJr1c",
  "key7": "2AJzDNhy8acWqhMN9vcvHg8Ryu2izTyu2kT9YfacaS6cVymFyFPzaiA9ciQjYpL6837uUcVMXXm5Q2zSXxdufktK",
  "key8": "5bidKTe93HuFmMZVazoAJJ7ZNcNPWuPfho3bkNdTDPDc359y19dRRGvsHEKJ3pmaG3RUkTEDaDYccEG2MrVyNzJg",
  "key9": "4MU44GUNPogoX6UnPwpMXcZjU5etD3Fm8UoFJJdAEm649qG6fjLFE4QKTdZfiTXum42Pqth3jG2JSNmEKTKCsMbf",
  "key10": "564VNqi17W2JnXWDNQozxwPKLFgedabptudBhBCHgx4q7Xpte4p1aeiaQEQ64RnQnP3Qq2x4M35d515rx1cQW2YT",
  "key11": "4jgJdpkRFAgAvmb3DS4vjWf3QWcwurZzY25sERxqp2j5y9r5i1maqNsbaA6K6y3kWqfVYV6Z1TWUWKH5ZYDp2h3f",
  "key12": "67NpwwLzEYv8zL7p2WRNha6hDsSJafgJ8b5f2y2yV3KpWYZrKh318A2iCYCw2gbL2ZXkPCE8wWrNXXqp3EFahHiE",
  "key13": "4GVtbpg5AgahEGDybWHah1MtvQoDxjz2Sq5oJ4FhrQVVspvoKngC1Yzrf1s1edaNYQR3Dg3bK9g4rxZ2bouATPRY",
  "key14": "4prENScd1nvBBhMFUWfeTMF6Hk4TeUdXEDf7m1wnxs37dqGEqaiXp441a7EpMFGcEdsaVJLbXL9cd8xgJuEAUgVZ",
  "key15": "381VNga1ppUyU21fVuDRoy5vPxmgJ38zTZmvP3bQQ2zV7dGbZEmrrGj1Ni5q1kpa75tPtnEsGHx1NNYtzRGYt7SK",
  "key16": "2AMQw3Xy8Ft2XiNZRkdCwj8wf2xoM1G9C1SEBFwQNKcakGXT1WEwzhqcFuZFEd5M52ersUU5Vwsxo8C9Fm93ZtaM",
  "key17": "31SQfXHPv7VtEkJpPZGUAJgK8nbuzjiwSSWSDxDda9c9YvJkw3VPKUJvsieZnDC93m14r6ksXDjJTsjfibszW2Zv",
  "key18": "4aQgei8pVqdj66Mw1S9hJ1yHqw7RjNFG2UiMXJHubgzm4e14p9aeJQdZVWZT5AZq1LkiPxNSEfY14bacLL3b7KSW",
  "key19": "2BN91ebo25eWfh6pWaRQmqwkaK6fPhhSLTtWbLkFUWTP5rS89eDgymsx2XoD5YfXaBVupTctsCCLgZkjgRnopFPN",
  "key20": "426CT2iLPw6wVM8pzVpRbPUvkaZ9F8NE1pvART1NB4DvsxqiAcs432DGR6PVrxjhXB64Jp9DPgr1eWdv9gDbEWav",
  "key21": "YL36m2uK9uiDWxFd8jKbaoXdjiFE2Gez9boUdLJPLCR59MNXR53PhjN1o9b8QAg4DybYu4cnSyFoANTzgyzCKGb",
  "key22": "4ax7TgJt9CTfANvrnLhYDpj6aefyNJNa12ax8UUCajRqBhsmYPjCTkifvZxMPvUwyFnq3MSX6MNLxFfQYc7pDxpm",
  "key23": "4guHoAAWA8TmAB51sopdE3BhjZcBk95w3u9j7gfUva7yTnvPSFVkcqUiUKVNrduZeuPkEYvfFwb4vjAzYUhpQwVH",
  "key24": "3Eq2TfGRD2q5rPVMqhNG2GBZYUdPL6GRLxDMjqLYPaSDJbevZN5txWdu3htKWoU7StYBEeeLPGBQGJ353sLuj9Nd",
  "key25": "5UK2LuNYNm339j5Vo7XgtDW6oSwL7aLgYrXmry8z96Ep5dhYmKm2nX8npsmsNTEFUnbD8JHMZ8nRF2JHvfPYpR7B",
  "key26": "4cWycExBBv9ovDR4fkWBmpf2by4uTvJL4nx3wVQ6DYtT8VcHcEJGvdAob7T3mnhaL9VAje5NRx4X47SS7xC2q274",
  "key27": "x5DurgVSML5RDrBqEDG3Tr8ZUpcR6i7RbUbeiv29CtXintt8vqPJvkZoHGE5MEYCowi3pwecoFXJcfacY3XeVtB",
  "key28": "3UvUUwYf3JpgwbSRRwnBCBtmCkrh4AHZAF8hUp55sDd3JUQWZWVaVy6DRGAodTLouh8N9dhykEJBhvX8eUnf2Buh",
  "key29": "59X6K7xHQ2ahV35Q4WQii1RgNo198evJuUTxXRPBEdrbRuDTrHtkwTbpYJKkGRH6dUsWbRUqz4rYxVmHBaEX6N5J",
  "key30": "2mpBbDE9k7BUynLL435qZBme7TJWFuTmdhw9YA5obPcQjJcn9oTf5pH7WnbE52AswNfEoinNLkSxbiksUfai9ARH",
  "key31": "5nmhR57t4jKxo9SDXMgsGJwJEjC3Qzh9zmfLm7PtjDqXgv9N8HwhHyDXW6KXYPqspd1E9PvXtqYxTAeR7xjRyiHT",
  "key32": "2t1MLbf1EEsXCrzWxQ95iVNAag1HH3ZPxXsyPnegZBb1UJvZYCvgsM7w7XUHtPxb7MTwiVmLcoG7bVSrX9GuMBSk",
  "key33": "NPt1a2A2ypBBbHHQ4n8oJ5xACnt7n6EwbnwYxE78iHM7HFp2o2irmUGih9GsS9fvh3JTiA58y43eB3W6dTJsk5f",
  "key34": "4uFWhRDP9F3Mt5YgQVvsPpyHF3VfB22ZnTMxvGjRpD5D63XNkcQAVnf2QZFPAFmhyp1SpsCTsX56a5D6311ALN7o",
  "key35": "3Zed7Jnb5DkVV2LsPucbSjxs3fQ7GNsFL3b9yJwppvgDLfcFkHb5AQEAsbMM8RSgQTpS1smgspb8g6BFeCKpMRJP",
  "key36": "wEkWH1r5jXNMKMqan4Amzw3PeMTxLWvhH4jcFbBDduzgZcvFuYbuQudTHreQDnJypuzqhP9UYnNgF2w2P4QsPz4",
  "key37": "pDeZ7GArdrzXXk5rx5atVS2c7ZDxzw626e1dt9FxCtWBEoGkfP4AR1RgggvAcsAt1LvBmN6AW9zV47LBwF5RLWZ",
  "key38": "2QtyT9n6FZp1DfgtM8NRvJpKnhZMs5YnCnCmkpbCxu1xntj7ncsVyWn7nRmn7EQzirKgLrEPWLgsTsBBsALCyPzK",
  "key39": "HJVS3XFBuweXHU8jJt6ggBmTSy7k84aCkA5GwhqgCBQ4kp6EaYEeimUGtPBVJaPSop7WiG8vEZdiKst29yqz3nv",
  "key40": "5ZR596ppuSUkC28s2Q8QEsYkwEL6jBqxX47LSFZnUaAuQ3yok5fKVBVRnSBwqV3NJMQZamTkSb7rk79tPgegmNqW",
  "key41": "2u47uMgkLoB1NY2Q1rpf4ykgK41BCXZsV4kv1h15U7ZQqJqySuQbZNcTcHP6q4Y5cNXBpmLouJzFJo5NjBWThSQ4",
  "key42": "44YbDjwRp367C34DVPXYvdQ9KknFDfnowYgg4BwSV3ciS1RNfoFGnbxwDWYTdHBJCJUbRBEaNbBMWP14L1tCujtH",
  "key43": "2hmdCWXSadQQs4LPGbQbxEPkxFRiR9uTWfpVvGEbzavDzknwGqECM2G2pgwwYRaxjVgn3XGXVE3d7ZrB36Z5vKpp",
  "key44": "2Qygwj67LwojKTJZNzS3WqPPvr6d5bmQmuqyYp2vh916pAAavdwgjQWrK8GrpfKuLdWD5Z7xQjGCNYfqWcaBKkhX",
  "key45": "sFgC5QFrrrW34e7RLcRf9tCv5p3zZifz9ZScq4AZV2yxHwcdTmzP5pv8n3rLbMe2gboS98s1btGNvqWs86Wn3ht"
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
