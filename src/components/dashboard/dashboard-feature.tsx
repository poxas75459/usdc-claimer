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
    "4KzNdqEBnANuZmw1dgMBEnWUtTkYuDREWdPAPp2T75f7F9FsbaztTBvVuGoph1YGC78LyjopXQkamFtgUZZCtp7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39uWuYNMAht1pRyj52XhyhV6kMqGNeietdf2ZPrfHNvL4VpT2KRemyYDwE8718EaFhqKQRKzL2b6C6CkxRcAcedi",
  "key1": "ZuAfcqh6jUCnYKhANHbAgNiQ5FQHb6FbnMfefAAiUkigVofM4pCTo7hDzJK19PoqsgUWEdkFoD3ztb4sNh4QTqC",
  "key2": "4MCxqzjrTiD6qJrFnx21ymweDVtFfV4UmeupzHxMFmGwGt7FxepXiczHb2o5TbBL4NTMexkdndt5xhPAHKoGrN7y",
  "key3": "4q3ZUutgzhF3MU6zLqrY9PYwheP6YgWcUjHCVbBB3HsJH2QStjxRr94D1azNGVRF6oNVCNku8tSn3Ro8VSVkxGMx",
  "key4": "5NWPthjhgM74Ywu5WoVYzcL3f6Bgmnko1i22mfUyX2dif7z14AbzHQfeqfDVWNJGJnFFnvRDdxonAuGgHivpBDPg",
  "key5": "3ox1epor4DpNzShZEFXJyw7KCbFPwNf2xqg8yzoTjNSJY14AsUE8sebmGM7dayxFPMnyUMK4jW6mn7pnE9nKgoUG",
  "key6": "51PsoeYCMntZFjEFbD3sGXAyhW3iX6XJJPHccUUYNJV3nf6i2ik2hceR9HHUWczvT6g3Fjk43porXoyFVNi3Dq4v",
  "key7": "2jvPv7aoBKGbtEUUFBSLRc8bTzBhSoxje3dgp4MqKNg8v9T5RJQYL6QWGWBLgmZqbzpwTJs5ihCCJ1GWazLYV5qV",
  "key8": "44tvwJz7NdhJT41Dg7gC86PLWmjWzYpjdawPNM4D8DLYBFhesffSBMKmgA7Guctq5w9ax8Uh91UQCog2vFaYUCp9",
  "key9": "2MJXzgVfm3o4avzreHtq2pvPgokmojKH8y57XtTX2A6wZXcLzpb5k7cdpzDhZdEbie7NHM13c3MK5x646Q4W48JY",
  "key10": "5tvGq7hi46oKoLGDg9zKjPaaRd8R27bKSkhL7dhiG5gyvXrxysh1ng4SudWY3HHf3W471ZiysgLNWRgtGYyefFn6",
  "key11": "3K711wkYrPPA7Z47RS5CZvrV81Vi6CB4uhqn4mZ76YeGWQdmEi2LbUp5GGfYKxWTZeUJbtGSAjC5bTAyjDbA28AR",
  "key12": "23Y3ZVeY2YV7CQcFxCdWkFDtnANyEL71vBNhtWk7kR7cuSbfowaPAChumc3CEBMYNDbScCzauekXnuGsPDaPiZuH",
  "key13": "4EwQMxzePeFknZA3YDAM47WHPPUNr5bMiGV9a713NjLF769wJXXe5ys6haTiobvuc6ppzDKRGLs6huYSm5v9SYTo",
  "key14": "4RJ6qne2f9x5UUnGePtt2baUgUudnMQHevY7ugQafaEPNz39j9ULKTBSeuEUvDsyuBp6bcs8zBxA2aXSchTZXHmv",
  "key15": "ASfH8ac2ZrxARqBKhZNKXW6AdaawdMeFGuvKRoSqNQJefRLWkVJwiJd78A3KgQALWPuRiKyC9mFYP1U1EpeM5an",
  "key16": "3WtLAVsNCtmhfRKcZyNBNzuQ28x1DWRd1eTRnh64gGL5deF9sGa2QnbUwZCCs2E7KCGNmTprssm3y29j92ACqAxw",
  "key17": "2A2J3dg5JYxGELNFYwtztZoVvJWEvEU23d5qtLjQcLuUvezVfHwEnGkeKCgpsrKnQPBLCtfEoBkhp84iBFqacwj6",
  "key18": "4gk3MrCgfiHNpPJBmNuvHXmGCFpxF4gVRpC1TaA2cnFZKVfEm4xi2Hu7XUg2tbGUaKBNnsV95dsWjFgdCMYxC2W3",
  "key19": "4rDuc4ZAAyiWUdCAKJRUmq99KRMNsgHsNkhTanrwPZZdKf5HJVF4RCK8dU4hejSR6KUc1LjjQitJ2ZkbEZu4mVic",
  "key20": "4WtyZuqokE4abberLjA59HanJHGh9qwV3d8FguBpBGZaFxdLKHnTJdvMmxedN822ENZoZDLNc5LNWHzTaUSx13gg",
  "key21": "4S9ZPAH7vmN3tHm35qbfFq2EdNXtpczuuvaJrx3airGJJWkxnSp2bWgVs33PvSuevHaff3vSw44VHjBoG2S7AfdS",
  "key22": "3ua7BuGidXrr4vWjGSLijQ4HSbrDVKAivks1FhrLspQdCoqowcBJrhzU4tfPFnuDZJbf3Zd9ERsYC7TkFJCAf17H",
  "key23": "4qVc7Ez5T34Y3UfpLGF7VeKf4tG25PwFLMYVAKhA3rj44FH3JUBknVpmEUvBm2upeCJE6qSfSrSQNRFfNPq9UA4M",
  "key24": "4sRfb3cRkv9AEZFKg2rCkmhY7kRQne3hbMKEG6AWu1beJNh2Y5A6xPjj7RZRp7mQFZt9YAuVs5w6t9FDXZzA4bAn",
  "key25": "2QTGJryA4sCZWGAf6rZBvH1Aac6AAaVEmJVe1udi17U8frhfseWGqQSx9R73tWajfpuDXq85AunCDbk6g5f7rnJg",
  "key26": "5DG7e1k1QzT1y2b6CJzeiV8KxrvyVErNCby77nkL4hz2cY9WfT3joHKZstg2zJbJ6MjswwnFtHEjndYF132GfZuV",
  "key27": "4vmNsqZNjABbgmtHBk2y1UfsHe92nwgePBCzXtu3kKfXa4P41rnToAnStwiuATdKs4UonB1DbxWQhKivq9zhVKjp",
  "key28": "2ZYv75VAcsDqytEiFDduE1Pn6giWqGqVCZghhzSmowYDQzZD632wMu1dHYxdpMCkDTL7pm4tZD78TEvxxHXDZeLs",
  "key29": "2qyquitPtTAFz8CpfRHkE5Nds7QBWHPUhKiWZvgMyL2j5K6fmxMYCeEXDCKbMT7937tgwSAp25eiDKd8FfjvvyRZ",
  "key30": "3uXPWHrPXo4j4v8otW2ZgB7znztAXfznBpPXStxXwxUa2XBLZRBrrD6W1U92W9mRcCG6teYkk2jpXJCFkFaBhfUs",
  "key31": "mbCaB1fBnNrmzYxgba3Y9S5KRzppzpnCZ9wp7yFitKLbBdEdMqm5Dj8kGmaKjYx2WVmsEXmu2zzkxnk8jEhoHtw",
  "key32": "2c3VmXDG36PFTH1B4LBLgsF8D5c2VGe62nN9HA5bJMrxSE6X8PLKSG1FmQQVq6ZWLFAXD9GDWvTsk7sk2j6QFXGY",
  "key33": "3SGxi8Em4FQHXeySUCpQFwkZUCwY57hXXdo86AqKjEP3L2Xk6qufe5D5FSeyxpKRJMnffrSaayZeRzK9g2NzBKht"
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
