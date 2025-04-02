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
    "pTvNMS59fEQPgNJaRLW3ArktwjKfJ5ezcwYhFemZ8FrArYCg2tbo4VSVkRKbX8w9ZujaDDiRKR6imbHXUcR3ZeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cdSnqDnsEVGu7H2QXUFQcNhVJyckZjkvn4MKXDsxbi1pXfyQ8etyxq6ogHB159Gpo9f8CoWCiybC2cNXt1yQtfe",
  "key1": "4S7NkQTEr2sXDKTr8t6PMksThedWg1DY1mkJFXDP1BsyVN35i1H1hh9CvchcmoJzAYBDM4fyyUmcBFjFgN9S91DU",
  "key2": "5qKJLh5hMPpn7Ja3s6dm3gagMZgNjsC5RuLqvuw7RSuq7ASBgEkntLh1ampgr8z182mP41SgGAjktFZd3eKGkGpX",
  "key3": "3u9Ya4XU1kJCY9RC5P4NLYs4qm12sRdBQgxJKmcGDuNEYLC2epnXNgwy4fgMWe2pwHpZRxxLUwXLA3XLKyBUMHWz",
  "key4": "3YwSfsAcdiiph3rb8hTJZa6THzoaPLoq3EzuLyeWPMyguxWt7F1A4fnusXmZeLAEDxBGoypRPcSWE2R6BbzVZTsL",
  "key5": "3Jt7VenTYjT9kXntX9uYaFUPXsDSyG1YMTstehU6QZxS55cEDPJm6MZG47HEJxDYGhR2eWfcsAhdC29EMRT8Yxu",
  "key6": "m7bUbed47VTHrDY6wBD9JhjKHit8Sng9wr7itbbwempG3gCmfjtSkk6pJPCBgNVAd6HBgowqANUM2tVbZmiPqgn",
  "key7": "4hhpZwacwCjADBp3umDtv5eUkf9sLSpEZLCRKXjZsFky2FPpYgkW9zgaWZKusBwLHx5mitcbNsUUWr7Dyrtah7NL",
  "key8": "564nfX3uv5JWTkvZwopc7kQw8V4zoR53tYu6nGsHPiNSYLJxxaYaCoeJ4v6imTDKBnnofuzXLZp4gTYBcnJWtYU7",
  "key9": "257TuCjgtH5c5YYSmTDvT2m2ZsA2Ag3Dmr1TiX5fnHKYFcrx2BH2J5AAfkmf4GprzipNvc7Ev8CgzjGapVUBpFeC",
  "key10": "2eiG4v87jQfEDHyiuWjGtupdRGnC3sE6CEQDmw4GhcUPHTjtBsrVCSJM5xjzN2ijWpT6QtUTqEdMo2kN8mQHFpQt",
  "key11": "yWzwgW5ay8VVEW2PD85NUU3RfmqqHYocud1HiMTj1ZvcNgZQB2c6U3KbBvU3qg9wr5y6m9gbMjQAfWbMZxjSf5B",
  "key12": "c8qkDP5Gpz3JFiuYe18TxknTSSD9y88jzpHLRZGU8N2pTGVtLrGBsF7zf2BsbkWacxMmpudbW3zw3QnUKWMfXSJ",
  "key13": "PYYsnbUf6Wkkj4MayocjQEh9PsEekbSnmVc9UNu2p1rXdLb6wjR6HC1hMdTGdpCCFKd4R9rkrUeWh3rXkemxRD2",
  "key14": "wVMsfJoQkLpZVhrEWVwg2kq3ThU1EtuJ7Xh1oP3dfKkkLZ5tmVAkA1vMGixxSWjZkmW7Jqr99mDqmp5gRE6ZCzx",
  "key15": "n1iRC9KVU777z4vtuAm1tkNesrD3V4DR2VHg1U3HjdQPFiFLLyq7DD7bMH6hm16oX7AQSaPZ2uJtGF9wTLZtVMZ",
  "key16": "5zBz8VwtTr8y8vMjgBb6V7uDoe1WvSixwJSQu2vvAvNGL5t1tZgX4ZHQVSQYc1TrUXcFTCyMMYqYTBx7uT1ffDmc",
  "key17": "5PUwBpBpNQcDJHzVYYD6QjvL3oMrsv2A6usDuU7263mgVagQARKkgWbyphazSFtJZWv6JnuqpPKyZCt1UQ1ZoPqF",
  "key18": "632Atf5TvwGhrjLY5S8eZjEW2HqAiaZnw3c7vA9jmd3Rbk1aj655MRtyKyHy9QiLkqbPrznevXjXVt7wgJB6AL7C",
  "key19": "3oTnb8WAnKkKMnRS2eKBZBZbgcQvuLXmbMzdwCVon2mFNrSCRjatp88Wx8tBSNW7FLkodeejXy1hd9a9fEP1wbk3",
  "key20": "5uwS8SFDwRBYAvUY688sH4M8Rwrvyp3KE7vM6f3QPFRNFoCvzDgzYTDo1b9Wyi1xKubA97yJMyCPjsUYtgH1XYy9",
  "key21": "61C9212RkbtubRtSi9irqHNoX7RE7BpGgPkYrvjm3rAkLE3PdCA6PENDYKjdJ1qS8d6oywmzZkZhG5b7ev7n6ihU",
  "key22": "xj4XqN41ZfFM2g4VGwmpEznXKYZhYytjhfN3Jh9C32PxqSdrdFEkfJ7xyaq4nMkjxxdfsg5wLs4s6vhupSoFXSu",
  "key23": "avHnL3rDzKTxk9mSJPQ5W1bD3nB1x9Xa4kg7UoQdn2Jj1hS8yia3fXg1iqgA37nNpeddRp8G9oBRXDsEZCsvC3B",
  "key24": "2BGyeQBJGntturAydzQzQuMTwBeB9mUAPjieaaCEcckJDQ9AWAt9wmyYt4SLAz6vLHy75XgrSMdypJS6XHMZC49K",
  "key25": "3u3u37m7YvaE9fAYYAxBbLPfzuHm85dr8wHHXgC6984CwrsJfTS3TbbRtrFheRChdY9CjoDb3xmivgv4rj5gKFV1",
  "key26": "4ABvCsCFAxHN2MLxBWokBeVdHQ9TgGg6tzsRwgwphsdC5Ksn6PjMz6uXhBJ47AMXoL6nvyUe8nWZ2VGUrPZsMuNS",
  "key27": "45qLZdqehBdAMUw7ZfQpwnCGEBYZeFtXr1fxL3qzU4rDmNBri4xVULraAdjyKVPoUUngWe4oKJ1Pp1vvPzHXCqBF",
  "key28": "3iFmeJ92JRTWWrJVTWr7g3Etb4FDLnQ2G2yKZmV15syGvZ5U4kbZfGrPpXASR4A2bJ5WfHuZdyhqDSuxAVqjyYLZ",
  "key29": "3qPWhUQKJNoVXXcQJ8cCV6iG4XvEoh7Yq6RbvJFFrEPCTbhsbZ8CZ4BfeGRix2pkrrT8K557A4XpovAMRAfJVeif",
  "key30": "3TzXrjsBX9gozfEKCs55AEBHkhB4mMtgdnFDfUZ7KfW7LcPQKKUwf9wCM3YaD3j4ZyHG68VqMsUyG8gh5TvPDmqs",
  "key31": "56m2eqgR4mSY8XE2bsXLszn6exVUQ6T5HReKYwUABUJkodGKWwXZk9UEQP8zVeBtCB2XroH9wpjjGzXrkfzKRYea",
  "key32": "32T5qY67se5usv7w3FhWv1eg2vG12PyPkuF1t4REFVqf97UM1fDUqEToe1nsdbtEmYty92wFhHruPBuLHbk65wC",
  "key33": "HUMeNRNqs5C4ooD4gPfEuNGfJjuYCnGrrrjYa2JL3JqgBzNPBrnV9Fs2aeqT2LrzHVgda8bfbJcCufqWrJSqPNn",
  "key34": "AJCXJxVNXGzjsLzWti8HE7VV46eHqCCcjdyddV4ZfBACipxmphTPr8H39WznohidQAfcCtEp4oBMa2ZSgiqBKBu",
  "key35": "5J4m3NY9K3VLgibz2vk7rDWA7S9YE37whzzc6mEdPW4PCgQFa1x88czHYa5cWhgGjp6peaezaR43C7DJDm8DeYDh",
  "key36": "2VXwapymED2XhpKASuMK9nPDSJbKgsFTmoGKnbjKaDbdeciwAE5vMDCu1uhYFs1EBPrEMpWvRv1k98xMXEcb2qnZ",
  "key37": "3sUoJ88KiaNYGty4s3aG2G3XHzFCi3TfUopY7MJ4KvCoxKy2iy3FLu4Z2dKR5Ym1CUyc4R9m819BuP9LFQK5Pi7e",
  "key38": "2i7CaLpxPkWT8pHHF3mQQH3xBpw4L2WRFijpt6wwYwZGQJccstWiH8yH4Yw1XmEt5RE6TXVStmCyGt5zf2ku7KS6",
  "key39": "5LVAh1oL13P2mVLjVG9AfRAPvj1aW2tmRLLaeE7XwMmgr7a9wshXgdZuSZ5xjSC7MZjuEqHpqpCYS9aHy4dd9diT",
  "key40": "5fAHCjCofr7qZsRtZcJftVhzve2oo7t3ohM51XiMDkHd3HYe4tFFVhGNUwkiqs4RiivGPrmF4GrhhwzQwr2nNFMG",
  "key41": "4eH3LW4TS23J3u1oaXG5ydEpL63dpJ376rB7L6tAsSwMaRCVceuvzykTEXknNyTgLL1Gz6cmdRrow6TQ4G8BL772",
  "key42": "3SFBxd62e7zKhWCdLzzhAEqy9x2HPQ7GakMmTtcrzWvpAiDGHziNCWDoqCrpXGYgUDZt5F4PeUG1hGQhzNsYGHso",
  "key43": "2BcGCn2FpNgfVk57ntV3J1mLbeP2oFGdkz2NGAo1oh1qiGeY7wVpBYJBubQ1dM6VwgqzKy4fcsNUwpWsg7kjY8TE",
  "key44": "4ZnR3NdAQgtZdwBUT64kwZCDpE4maE8skQjmVuZcyHvr8Ha3WXxWggLoT53eFHM31hP6YR7K7DnuHcyqG7UBYE9y",
  "key45": "4Z1pf6fYy3yWhjLw59iqfvKbEeC4HcYYaU4MVh8d4GvwARaXoqX7TkwtssejxCqfWDKoECAUENNqitXC2oRKwt4E",
  "key46": "3XBt3aM9H2K1byTto6SMhiCT5afFPXf16og57B6piFn6d73UEdUwoNDcriFxsxHkFXRbX1Jsvb8EKWMPxYwXeK7C",
  "key47": "2KFrBBcitHkDcCEZZPDbeHh7GPuoxZ9hXsCEimeRSscF6amU93ykdActuK43om7NWTJzc9KvpJSSPAU1Ko1UuNMQ"
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
