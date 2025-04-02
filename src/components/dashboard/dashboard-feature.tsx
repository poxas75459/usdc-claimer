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
    "3VDRFhF9ezgycNfEKmEgSg9sghBVRTEmXJ6G75tjMzxg85MWqy6DmqAR7yGSUjVmLuhikLEVB5kDRsjN2z8HGKrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tUbThendPywoAFar2kMqdHTXBroZovSEVWskwcoK436MtfcTmzZ16taHEvxrnrWFY5xNFKm44FvdytPKgfn9pbi",
  "key1": "4uxUnGfSGnospvBu6drxj41rjAwdXNTuGG2tDGVZBqSCGMqWNzweHBYjdxrLuQDPqmnzTcckMZePbngVXYgarJSZ",
  "key2": "5ZNS4F1CB7EXJACg6zKNRXYTzd9owHtuBa4RcnhVZi5BSgxTXca6oyVZn8Kq6yhxLuhXob5jJYbApnDgEH6TgQAq",
  "key3": "2ZsHuG3rCTx1ot2mVzVvL8Y9THaiG6SPHP2bZNEvFVHHHswRCY1ESEbct3kHGa9y8LP7UzqQTTpbKE8xQkrTHHph",
  "key4": "4EjkwRiUehg3Md9DqQzB9TmN3mphsvajJHWRcKBfUyH8g6XfX1jmT8xvLG8vL3JYZy8NmjzFSJmHy2b8PgZD2L81",
  "key5": "5Ta3FaKLQUYqtqa3ruAXmcsoMj6rBEh1ZxeUerHzhQoi59pvYk6g6Qq2UuAetNH1RHEGkrmMBsYUJuz9gp21FDs3",
  "key6": "5iMKbJFXnQtWbmuM9ctzVo8FjsfXTgGtf7Mnazf2nhJmS8cZ5WbJ4JCvefNJsgATWon85RrSb8jWX71dughtez2r",
  "key7": "5moN8tnaabStkduQjqPr8Bph9LfYMNVEkLFxbh7uVHXHeJWTnDrmHBjcyQNAv1Cv9JgfqFXGEtSN3Fn4AKkMCHbB",
  "key8": "2vyvdnNSdE3LuNxXRq5NRbVAnjt5J3emy4fLsw2M8evv9xM8dck2a3SvhygA841VYEjpxD89Fmt5nHrYhcHH7Z1t",
  "key9": "3q33MbRB993QFQS6fMhFDFq9iYnzT4xS37zRqHsebhDiTL5rmaD8DLbDBJBdWjvPBJCpv3kSLTV2sENdtxy3tS36",
  "key10": "2mrVCQxDTkip19pF9TU3aAdAuYErcA7cpSRU3tEXRQSfY2YUpbBA7pbVD115jpvfmNZaFC9Brw8cmkJVLH63zupf",
  "key11": "EcvP4XdbB1KACJRVGBFZhJE8tQS6hkxepQBKREb98G1dTo37DYMfyyMpgfatiYKsznMT1xRBaZUPHg7vTmAuxXh",
  "key12": "2Y3G8a3auYUHo9PX9fdkDDMkzR2FZSsJzg2vR8vM47kirNM78841pD8S9FMP4NWRWAVp9qaXmFxb1q12QxxApAP6",
  "key13": "2zNiNFaPW21VdqDomPm9VzqxGNPGvJua8JW1iadQjSri2c89sRdTtVnB7sY86vpvQKZLC7SXzZCxDr3qAUWKMfQn",
  "key14": "pM7xXaZsyVjS2pBvEnLmA5Rj6WaHPLmvSx56xTWpQxk2nAZsNeFWsqQLfgqSXqqTHbkybYfPadCi6ArAUPQJ5d7",
  "key15": "2TDf55spZGaCvxUzVAPd6vy9LrJ2szt7mm8P3YGKxuxUEokyujG4699zFXBpcMCJNoMKG5jJC8AdxeSdcaAW3SxQ",
  "key16": "5ozP5ESqVpuKy1qiDcqVhFbWCCuoDS7GyfWqNJwtuVTrp3HRFtAJbGtE7HSHMZqAPiHZ6phUe3gfJtkFFXfvQqRy",
  "key17": "5HC4R3Z6xBMiEzM3f7uQ3EPZ8KpqCKAXChHpc372JQcRH8btAKPERra7vkUb51SJfMRRoA7t9939R2FkmChEZtjg",
  "key18": "3R6xK31LtGy6gx2xZ2cTN8Ed3BZ2Fy84KK7tnCchX1DHiFE2QMqnUaXHmFZPPSgZX9sngpuBpZoZ4xcJiccztxEk",
  "key19": "98uwHT6cStKfkn5EeqCZs6b3Jx8qpmcrsR4FD85JzYH99iDdia4maE9vWrWCimo4pPiR3eqE19eCUUuozomGcoc",
  "key20": "t4DoCq7QL9BX9utNPLU2RqCKW77sFexV7YfW58VVZmQdHFm9o42Nh5USyxHk12ji7zq27Cnnp2SbwSUjH3NoXZs",
  "key21": "23FnYc8Fk4ugv154fYHMdCw4peNbRyhMhS2QkJTg8yYcVa5bxZhEj5zZm49p82ro9MQC2P7oVwfQHRx22waCK4qq",
  "key22": "4f3J8wdiFZqP3m14y8NKYfUbGA6hjpEodSz9WZ2xYy8qQdfc9Fd1v5XgUzY6R1foci8iCpKQLQiojgtajzy5xQeK",
  "key23": "2FvvpNSwDVufvcWA4baZtcrUJZzqC3TYPRcYX4R767xzJtmBJ68iLYL2fMH3hVnpmBY9T385BLGWCHXG5EfSyn1N",
  "key24": "5KPP6RU2WCzXyLPiangT9wwfo7v1vKwy8EvB5JkPYa7ik5DS915nDFFsb5UxQg95QryKstf3hHfhsixbzETk8pPL",
  "key25": "4fe11aRfUdvJZ4vVBUFGLJw7iivqNW1d6eBguSTkLzPGergWCDn3ceQAwNBNkd2ZYyhgL2yekc1THGZ4JeSuLKjk",
  "key26": "212FKZxHK3yvuJbGJrw9h3j3QFk6MJRtmfZhyBnhLifCaGmjri8oqGoXvMcKfaXhtxrxZepMUzWVBemXbu8q5mw7",
  "key27": "aCBKZZANWJKCBMiT5sor36SNWMWULL6fdbe8oqat6NxdWoTNV5ZvhDN3GWwcnWdeKga5fFJAjS9YmBecymDFAoe",
  "key28": "39zkyva1Mq1q6M99Rw5gD5AiD1fsZgj9tNeMCdPrstuWZAFxdA1JdG9XJpRhacNepb4sdwfCq6vR5daJ9UPkc437",
  "key29": "2sGStnnV9sGrjhka5ZeVTuUHHuctuTX3KofkKPRsLmhruVdCMSjsYPPF3K8UWkiBr9SsxhWWg5EacbgqYbavXBS7",
  "key30": "FkGjxk2CkZPgFXkFaw1VQaHK9LBvaMhooqWJcgQy84rDPUZeLMdEr8kM2g8jGvPViPiQWohu6YjTtMdXaZkJjVr",
  "key31": "5jnvE3cpbqU1iwMSYU3z8CSCRKyg6Q1YC8Rp95djeLy5pUKUPHgmdaSdvKMRr88CJitY1HD3Ja3qFzFqN6uBx463",
  "key32": "3vr11pNKcPnYhYAfDA8vWmDTvU4YyEpFw8qPPpCGxbdhEZkWhVfHA9W7r1Ns55YZPRj8Mr1TG7gV3G17zGJ47kiV",
  "key33": "sHbhpzqbKJcxnaEZwkTWRU9d65FvSTazBAMj7JgUZrXHe4ZSPLEsBFAtPDZuyUXYo6Lgo8NR7xivTx2SrLPPr3G",
  "key34": "42HncjKJq8HBwb12zyWLogiZQC9khvkg17s4ySVcGdM7Ct4FBiMoGuUC29n1V4Q9tUU1J5CBJ5wr1VurNZUiFFTa",
  "key35": "474BeKoMhcVTuWiJG6A3VEZXJ4FTSD3iPFZHCB8vygsa6aaoFRoD533x7ip6iprt8dAh3fNwwCfu1Vfo4ZhP5iz4",
  "key36": "53C2AHKdrEjcM7DpkfEurC3GEMxLi8GT51rbTvRST5qZFfLNM7Hu7fFQ9yNv1ALw2DTXaDcCogUSbyJw3kRK8He7",
  "key37": "44Bkj17wsA5JR49Wv8ZADaLL8zSoebdUGakNuJuN2bQbaahiwyJJiVc1XAjGi31uFSUPCEdCDMoeRvurrDpLk3fb",
  "key38": "3jpB9WnYVymLBprvrvXzHmDXsUBhnPXXtS2vFc44yRNCNW9G2RDPoZhuhMrPFdMc9BMrHTFrKmyQUtCxy73rmznZ",
  "key39": "4Q5rVfh1c1Xfr8emcgWQpBhLnGSbaKkqi8AKQ6AwZiWvMxHks7sjbwr5GnPwxBeJn5b1MGhhUZb55kXMDet1n9CK",
  "key40": "5MBzdB1kW1AgNdJueaWsmntriXyqCdz5p891ht1LfiHr4cafKKvBtRwKtwz14KaEWh4dCGEY77L4mp3HySkGZxoz",
  "key41": "3iFVxyi4hwqR5g4dTAT1bMRENEcUsmjGJQeVmosm3EY1tzLt9h8JpPhbhGRs2jKxnQh2HgK753ou96XskbySd1nq",
  "key42": "51zaq9E9LaJHcWzatZDJCBuDTVJZYzjjPiwJVKaPVZaSSiyk938T2AhBd1JyxEZQVhkG9SLYvdxXWPMwoLwuhrZW",
  "key43": "2pYNjWxnXFjkrD93KUX8NA9tyZT8ULppY46e3Gcpz9LwYYEsxgpr9kCZoVBc2Egrjn4jazW99q6bJ2GmQ7FZgRDq",
  "key44": "2Ua18EBVd1KCYQ35zYVbjL96PpfpSMRVa35x6ANdYsu7HdjwrDsTvLmmjYBy8AsUC7CqA26iAxgmkpCptBcivgQq"
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
