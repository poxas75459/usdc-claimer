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
    "DE8aGFC7vEVS74q7RpWcrLRczaSWkHreAYLfF7bR5Hy8fmqNAmFnpvWaw68WdtN88e4bBrxko7b2uhWYyzAcDuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a54mJt8J5VrbjVo6gKwMQQdvL4WrhgnuRmm9qRygHUmg185br6rbAFQ5LcCvYb7ffegb6Afqn6kQyeyK2eGhmn6",
  "key1": "3HRtJTpfDF7AuitmqdzhQJ3Wus8MV2Pa2NhmZYkDoHZL9HqwkbAGapiutJoAziLzBej2JgYgtqgbECL2d88gqANB",
  "key2": "2r4NVAYCZuKQVsiyPEgSFNKRgMdyZfcfKyPQDXz7xbeijA2ok6R7ho5xwcMmrahCoq8VsWt2f6LYqSHCuWUMnSkK",
  "key3": "bkCmyqiraGooToRXCZYtYbB97wwbRFKgd7jNYziRK3SEuxP6PJWjQwKeAdL6RrroKAF25Hd4TmQemv4xg8EyQyU",
  "key4": "sdcM75exGqVvNGmT2Hg19mTuXfDCRie8mHCLTmDsPutBNFoTQgREYw5GUADovjW9eMqeAqhzTbJJswYWiDmBCwc",
  "key5": "4Txk1cvRbpA5xswURrMNm8rZZBWRsFAnjqaEwVS4mMMc4cEuVL6xEzvcQzcP3erfACKxchVV1wcCSQFXLhu4Xhvn",
  "key6": "2FJ1EoEaru4RWgiqH6m8uxrmbA8tJPvJWMBmwKRywu68PSPt9XPZhQA7YVX92fcDxqVA4uYnC4mXGM1GxZ6RFtHR",
  "key7": "3se1MrMMHStUssvkY2VSr2KSf1jatpHfAsXpLTF6foPGsNYe8r5EeqtkjBn2UEKaVBHcBVjRJchsyu4iug9FeBMk",
  "key8": "bknwQ1RrDGnmHemHxtUgt7puvhLjyzT36m2Whj8GvXRs8BTJMzyc6vogxr6TqZGbuZKpA1dPGJNc7uedPmSgBBZ",
  "key9": "2UwhVyw35f2inckpqF1mGxVmp4sPV6uzZXbccTQQ7S744BAXtzYumAXXRTzFSMW4q4jzcaPscXxm9z5PWJNwfwBY",
  "key10": "2sW4KCmEM2QU57h4rJLqC4hqCgvJEXHWJz8ypmpeMrFCPCjS6YnVkajBnzqNTrg8spMYQBYk6eYgmtMyfHuVXtz",
  "key11": "54aF6BktekHtC2pakJLK6K9LkGNPbGT529ZZA2mG55o2YWsJgwVZyHWm4d7YYK6jfpwrwfvm9d1kjwPXP61aRLph",
  "key12": "3q9PShB2N3RupbMBwCJmZA3kgKkkH7yzqquC9XMZzShNQ9BSKPGJ2grf5YcKFAp2AsE4dhSG1o2YCDhKbRByHKWK",
  "key13": "67K2ZeXbLZsojk8H3sCLpvE6UVBybpxvSEokPBRV7Qc3jj435HmygEbgz6NSLT7TvT52LgmcPyj4jPncjStzQEbe",
  "key14": "2sWXuquWsaWY6zXDG78KsnPQMTfU1ydA2RtfmqbJdhqUC1fp85pMzi6cHudNtYoLTJ11Avqx9YW7TcFkfrZpaWtj",
  "key15": "3tvELJ7FWRHT1JCZkLGUtLquK6rAc47sjDBnoq6eoacKQbj8RGchG2uqTcwbtMFkxsbxUd8Ubxb5aM5RqCBdUgVL",
  "key16": "349xJfb2wphuojzkPuztEFrEbdVM5NFGUzZiZ72kCKhn9HxGzVhwK5zRrYUcSgzGCPde2tVZ9CQ2qEbP3L3oHJce",
  "key17": "2gtpTkkjXBbSXFuNv4mht2i6iG52yEpvi2UsGbPjDMZaaXnXLcuwTuTdbHjceFZAihXsE57qMHekEAy6K7UekFUX",
  "key18": "3fG6zTaUmXpFzTv35KhpztWGueQksfehTqWJHoGjyBoDn7rJpTR6QccXuWb41bbG8yzZqSFXG2SFWdDh7zKvR6pJ",
  "key19": "5k36FyuxvYyNxrP5w8TzBdD7nwtsuvb98mSBoWrgH7spHCASLLybJrWh2DERcarSn1wUmV97Q6J91SwPQWfTVek8",
  "key20": "4GjZgnwCkdsRT2X1ZvUusfeb47TpHsm4iHGW1kY2TUPoT4QywqPQHUKegzPzR9MvZBX5WiZ3j4sEmz19qWEeUKcN",
  "key21": "4RCAFL6s4KZV248hDuCpgGVdt39d1gvLKAML98VdBZ1cnYQFAytKyJeMEP85EttVmmzwXreM8k7ABQvaEWq7TcxB",
  "key22": "3PkJyYRDRXztwwGCHaabkoywkaEKZZ5PXEcS4kediVydasyrA8PdkXEPUL5oECwogm8qgx6H1trYN9tTdG7oLooa",
  "key23": "5T4NjSk4P27tCxw4xFcPiZQNgbhkQJFAdu645mDNPX9JGChHcSRgSYPEbUfkimee3a9RzxKn7Jx5zoViJgixeE9K",
  "key24": "2RRSVtwcDkwzqYdMaWujpw45NQbdKAUMsXHcXa7dmLKwezhgFiburuVVPYw1fjnmWXVZwkfNPs3Yr2dhQdAwwPd1",
  "key25": "3naVzPcLnhHYE1uNkGgoUoa31AZgxbNJ7kq2Y8cXG3QkBbguJq9BhMUMPdRwdMZ3eUTLNAzs7Aupkp71FQ5823qM",
  "key26": "dF7mp6PJYTpM5pdyVRAExNGkYFv3tESXXv1cRhX5u1UCZ7KtxDDEQ9jiKkDakJXKxD49DquuESZzn4WyALeGkzX",
  "key27": "3imgL2q9ycpznC2aS1LCqWxCuHhXgJKGFqZDRGAfhbFnhGL2cju1gke78pFE94ixdDSrHeaR55vLUjETxd9jfDVJ",
  "key28": "5f5CyYfqq5SsaM3XmXVAp1vesbFTgdb4U9VoaxhL3AyjVoAWWGk4fDyZbisfcbkZQeZak3vbT87HN4d2MjS9raSR",
  "key29": "QEY5whJS6Xe4BtLhqFsrMV5h3FFc6jVZyCnWk9aiPcrcJmvHLeeiT2rbu3cRtng8oLwK1T6fiS4kNEop6RTSZjr",
  "key30": "56AKB1RZu1jqzEZAXFR59Y3UQc6PHXowLarcMrk76uRn4mAMT3gxjiZTHDSqHKKmJXXNoSR4gWdhyojKYK1iMaAU",
  "key31": "4NG4DTTgTyNZQLVSwUuKXGSnLYSVSo1tbnAK7GJ8ApzYyzyJ855onggKfLLgZBRGzqZpqpDEYbbsBuZEyxy4GwPo",
  "key32": "3dwmUTBss9fdFWK4AHTLBA2rG89vMzCtL82NHwuaRABZD4S4hEnZMbdjmhZ9ARv2B9qztmBiLYnayff5SocDP231",
  "key33": "4gbDJ2J9cLVns3EVXEvBsJvyCzFwe7u8rNCgJus92ma1cNSG2oiKhSeUysM4mZEWcwqU7TuiAS7qFC66LPvdsqp9",
  "key34": "Zxbf8vwQ7DLqPmdyiU2Fy3XpshaeRa5UQPkojfVXptwAczWYEgJjsyf7Y1Um2Wd53R5o9jyoHzKNJdhmmtDm11t",
  "key35": "4DMs7EasFUQHwaDNtoLbch4bh6ehitMTFUXs46n8fXyc51abxBeG1ytZGWgEjbfBdPDXj7VE2uh5mYo9X7y2SVcK",
  "key36": "3L1yb8UBpMhJJBgvtnkGiHPESVVVSyUfZwtamdQuMRAi7TprzLn8jXdDfQ5RHVYjYWYhv3qxWyqfEfnBj8MWiTZn",
  "key37": "2jHfhNzZfG5Yx9F3XPGcSuXcDuiRsMdaaQ3YqcW3gZY4wtCN939pZ9rfd4dRczvkFX49op2HkbTS28iTKtnJcR15",
  "key38": "5vkaeZrPQEYZWC6FLuvh5vXW8Wq49biRDJpqX73tddFATCUELaeSuCXtrZRRAkYUHBLjoFWr2Y5uzkgCqxvTRfum",
  "key39": "3ukWwjDkAw5Qh2aq32vRxMw5xUZb3pXFf2na673kkwEDuYS67FCdSyjNwmP2yw5z215M2yrBtU3wPT7ZXrG7KFbv",
  "key40": "fPMm9vS11T5uYBJdfheSv1ssKjrbZRPmXhUmY82ofhsAXRfhstzHrWaMAUfD9twMmTjTuAXbAqXs6ytCHvKEiTf",
  "key41": "2MSjBGWJWxu8K6Y8CLXPtRaaKRftFqWMTWwum4AtFAYf6rcY85JSVoXH2itRP5Ajjn32fVjEVaa8N7sgZ4BohE5Q",
  "key42": "33dXL9yrn6kevfQhUrnFF6eyVrsUvt1MVar9PiyVT7KZ1UR5YdggHG1JtvrwpNyHJJoQ4zBwv69dEVu5AjECimVy",
  "key43": "5iNYGqPESMt7zqvBPbLDeMnxmpCqm2Kkm6HDfHY47XSxPVspvYSTiAj9VGun3yCRageENdptSfui3z4hGwEcLqfh",
  "key44": "3wu3t8UrmTRCg69YEcjbE4taWd98Jkfpa9LUcCyvi9N12PSAmnHnX3k99Cf2Zb1v2GLLhAgpHLfMQHg4xeKKMb6D",
  "key45": "4Z59t5wS4UQCoMoy2oAnhjk8GKx4oLWhBiYUU97Qq3iQH3noYaPP5LPWcbSJgrcEFyMetaGtcfzbsvAxuq5X64oS",
  "key46": "9UMa5qasfgdPdPA83Uip3Qix7d5MCkbtDfuDxB7pfPhrLu3Ny1PYGmdSRYG7t6LyZHQfTqrussvAQPjXHRvaSmn"
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
