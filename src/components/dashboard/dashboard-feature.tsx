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
    "2VZapGfCysqrDbsaA8LDXH6NcCy3nrPQacUV78eckmzb4wFb1ANL4ZpHqMY1FAqgUezhnYqwipx5GVDedoy9gwdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzV8CPxyvRtujywSXv6CMeQQ1CLMkCeSJBidbb3EGb8xmqpmdzcLJvrsm1DpnWv52D5yJwCLfdj9xydyVsGvwbm",
  "key1": "4WfKe8iWxn2J7ULzWTnqrLTdbKpjBJKnqHucJ1QL6qh6H7sBLqFzgDYhvTbEixZHeNUqd6mgPJx94gpVUgzi92Lf",
  "key2": "5UPoSWsEaLVmgE9iusGsPehFy5n7pFXZyBJt225BZps1CnwLUqSJ59RJCJ2sN4hDBPf29PZwtkGaT913PTdEEXFW",
  "key3": "5eiYzvzxsHR3xh6Wrj8SsANEFGqaioRv1LfLhfnZuVjQVbAwYARuA9oLUbCKFtXyrTAyTBNToz9Fc5gRcb6vhWfV",
  "key4": "4NUQoJqK16YE7Tc7Yu71t3Y3K6KWNe7ysK26andN3vGsytP4hk13wgijE9BiNDDMWCGZ19o1CngYzeeprTqkiQBc",
  "key5": "5QnWHtE4yuH1JbfJiQMfq5vD2WLZAEP1VfQxBndWpMPXN2euqyPdL3gGJACMYHqxN8dAVjKTfjQNKmT9E3p8SFSK",
  "key6": "5W8Ho5MGSoZTmaceZ8YtCmBGeCDPEYxfKnMdeJFWbtAiUWnUKtzCSZ3SzgSbjnDUBtzDGsgX1zMudSdGeW7Jyv4s",
  "key7": "2d95JxHANCpK4qKbxARyXTyadR3acigTnCHrbp1RXy6sHpXPZ2MXaM93bitAvCMrKLkAGWcVKBbrTPpNZxHozf6B",
  "key8": "5RBZvmDPBKmmapdAdjy6iyGdXMkHBm34P2p3L8BsxDeDg5advCzkwYuV2Lj9dEapC3UyPtepgHNsNUP7sWpYz5bv",
  "key9": "2HmLgoH2jPHPoApdZUret6rASBY6aDGs1ctrNzRXsETsuwpmiYCTgXqAFPUwt644YjAAZ3gm7raA9NkMryiLR4Fw",
  "key10": "4T97EYjcY4nywQoZ2PiyPvNavQi3Y6ZVXENtrjCKN1pNFmgpcdMHDYfqufpX1thoP7PkVL9wLxvnT56Y9wgYLT5p",
  "key11": "3LK2cX5VAQUW7LdrDgSd5YtaCavAf486HE4Pn3jpXaR7di9A4fDL14KdnnEPSVF1H4yxaS47X41Szcd2U29czGkU",
  "key12": "4YfKPVNCEU12KMG77UgSGP3ihgUttUcTFws651eHJxhLUhrbdyKJhs8CxVy2TetfmjRUKsohQeREBd4B7RFPFZVX",
  "key13": "5vYDK7MC7k6QYAKwYvvqrH9FvCR37YXEpNg68DKhm6irwR6gWdmp868Sy8aNVN52uN6Adr1tEqbYNcqFrVdBoXgu",
  "key14": "SDq2N7kykRY1erRpdxjjmQ2TXvwUfLquTFwAQQa6y42iJFAsTReZB27vLRp2b45gTyY3SSgR8MNkGRDC94GaYZR",
  "key15": "61v235MkJG2U7p2z1d1iKBnVFLo4hT12WmSbtPXty3TNq74sBpgJKhhwgc483eeEdzUZxjGBrfccEcK6smUaj7qv",
  "key16": "2UgtRaAnYxtNcGQdNUpJ9bd5fqpUoMd9ap3Ezrm8gRLDsfoVQ4h2JAPUbcahQiNuYYVczJCM17BbPhY3b8mooMbe",
  "key17": "575KkyaaLMLvjQs53C7Y4fFc9a6YnKzGegquM5QLwAExT8E8jizY6iqhrHfWjBazPhyqcd3pRSnBGuKdAE2pYRQm",
  "key18": "yL3bQVKwhZS7zRJFCD4Nrk9Mw3e3exhavmAgob5wFJ2b1BkG86E4dMZKPPD6fpeaM8wvYUE389TeFPESw6MfVNG",
  "key19": "3DT5grat8VGxVX3g5iKJWvReqNVemfaqodLZ9KvT4CxdCfZRn7LJmMyiDPstxw657ZBEuhhLXYM5mtTfjqSnMPjU",
  "key20": "4wCUzv7dxWkXHn6oXh2FAhxN8LL6vE69R1ZWfkupjDu1AxkM9HPKFAuiBHd3hwhASjb7KrQ2s591NAuCuCwjwKBS",
  "key21": "3NZeb6QRei3BZVo8a4UJLj6AkQUiukb4odhxidFjUkJSeAStfHk6kCAzDN9GmjpR5JehzY3v9U97vyoj3dtFfJkJ",
  "key22": "2zjhTDYtvUi6ByHz7KbesmxCi7yipwopvrbrJ4gnNKqkYnkktsCHUbWbCwzdSnNqTPswpfCJqgjcYZNA1gFM6GUf",
  "key23": "4B2RPznHfXTGz7U6B6t4tMg4A4DtnF4RkNmmaVbxKbm1jnJHDJzBpzoM2TwKXnYPn1fNJKeUvotMrFa91ovg4WwK",
  "key24": "56bX3WVCohzX9cPGJZyYpdVCNTCwKnaBYd8oW55GoTsLL1s6nxyBufvsYMMy17Bit6Tt2CzjFtsZ1aGQjZ6vjGS5",
  "key25": "m3EmNN4ro43Purt1n5pJJtbHoJMgFB8W2EYZJHV6YjMrJ9porHUG1F9y1h7ogxNwZYAnbRsM5eXP3F9zaiBsNwv",
  "key26": "5SwKeRDngFbrU58EBq47GV8w9US2rAfSNh2n4yGNrhkFKRPuThoMspJEJWhybUVxMjkWTmxMUSkKTestRzRqPgpj",
  "key27": "kDYR4TitCpUjimeMRYWgEzbfKyY1P5bUca4AvbRAJBvTtVEC6B3JgLbmMbtmg8wsD3PU4mkQT64icHSmzH7LDd5",
  "key28": "3ptuLaXptd57cUY18MG8njD2Ba1pQPgUwrrqdbm7mZqJyFV1oVxotJb1GKC6HvPsnEEDLZe7hT2UVqQemjoUtFFH",
  "key29": "JyMFSjoSJ5fSUJjyLJSNUUXWUcCMReUnZyQBecDTQ6Nx7h2ctrGMysJyukJxdb3tnAgCWSZvkRCc1P86EWRZHQL",
  "key30": "36yfgCnLkmPhSpq5uEuoL4qciSGZcVRMB8S91RzDZ84VmUoxMVJgan9bq64RTrLcn6jpWsdnMCDjynznL5Xgprsq",
  "key31": "eKWNGtHLAfF4udwQAR4tFNHnMrYLj6c5uC49v8QnB8ZBWDmdw1Kv9WNPYHBowZAmjZ9318MhZVhwiLtGB9WJHKj",
  "key32": "2D8yLKyJNAgEH4jy3gvDu4wG7YcY2P74t3Tt1bZ4LC4KZDcycn3VbWNQqUyEkK9HUSV36tFoxTxUEFC8NVtLWUDd",
  "key33": "5gUHeL9tKM4GrLtiUCSUJR5RsNpSBjiNAP15SjoGYRu73GLw4qq7wAD6i7ojVDy2F2TqZJf6CJ5syS2SMWxEzx5Y",
  "key34": "44mkPiEojQ8NBRWpyevpMPW1k4fWf8GxS6u6aSP7hzZWjjUXYQFJzDyqGApxSmm7g4yEsTfjwLxG64tFXr766FzE",
  "key35": "2GmFWbGnVDFGnXu46NVwaa865cGM9biJdSYDiP9JDo1FwuHitSJNivFDAopmaRhswREGgEmUTMvoybn7LiZjk7Nu",
  "key36": "2qJcK21tR7cZ3dGD5VJhcSDQx4wUBqd5vQgfJx1XUJvGr5JFY3gd2DSpaoVcjPkKs8cj4CNS1Tjnrxo38rVLiBKR",
  "key37": "22dR1cPWLAtBiBVPW79GZoSisDPrQhSSMskWz2Byjsfmz9676c33irvx4zRD5BvYMF4PWfzCk7SsGMyNoVCKHcJg",
  "key38": "NtFb9mzqcF57jSDJqXYuiye1MaXawAxGrq7rTJ1qoMjFhGihrDyjEttkkZ8zQ5JrUhSnUCizCGG6bHxVM4XrBq3",
  "key39": "4R84dTDc9NuBVX6NnNrgETJyLWR9mUZQEfJFtqMpuBj5swRkYdbVyS4Kf9u6bMq9khRK1W8KjNx6BLdYX7VJpmQ5",
  "key40": "ipzUXzuXSB4XTAkULLXP4M9dfzzg9MY5tQpwWbssaUyCT7QYpXxzH8BeRkGmz8mreEf2VGcjtW4dsVenavQRqyq",
  "key41": "4qp4mqTRHEUb58ttkzVvUMSPfjwQhrU3uQHtVqVxzJyn9zC3NCAxqypHvuYnTc4vji31vTKpadh95qNc1y92Kjwz",
  "key42": "2SQ8qYfXX68q77FCoCVWiniy4583ksvX3LGxkvNNm8vpCdMwy42DdUXB54oqVT2MCfRUd4sBK5oPvNehFnUKDWmj",
  "key43": "3nXYbX7MNcqCgj5xrVJToSRroZFTG8PVL6PgMoArVCEJs3pMgvUVKjAbhRhLYag86BakHuATy2kPVfiedpn6d8BT",
  "key44": "129QH7X2phZEoyj3dH4fmCc9PrDTBJVC38YejhKuntfLRUkuA6mypFDGHqk6qWSFwMmWf1Abr9sbZYeCMoScVAAC"
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
