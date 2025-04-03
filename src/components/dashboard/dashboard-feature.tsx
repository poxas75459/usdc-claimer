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
    "2Pf2zRGGZcMoMhKrDCm16d9K5THPuE7s6Xpsec4zxgXL6RvD2zyDagmzTsSzcVhxuZsLoNTCVY3d45VH25iD1hFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfwZQoCCHP2GzjKqrhAtGenovDBDfr7jrfjxJinfdqqd7etCvSj46DbAw8a8Z5oTJ7cFcDeUxh4N8USk52WTsev",
  "key1": "35Seaeavkbb7D9ynh5dkMRcZs6FszTc8rAGUKeBFsdHgT6MsjdshnJ37HLaVfZwo3ws2KWNFoegyfKGnh6NDxhWC",
  "key2": "3RSiY3CXW7n3f29Je1DsbBRUpNmbwMc7gnAAGFEhzabXGf8f2nbUvzhFKntGpWNhxcKXm6Bd4hYeHG2iDQECtf8W",
  "key3": "3tMTWpu2A6sEsSqwFi5AFB3F9sykjPsJaTRQdd97mLubrueCGwTnHPGoCx5SFEfH8d3H3Sp1eFJ9V9932NVsbnR7",
  "key4": "NistArXQLwwtBM75prMDMMPEFdDyUrNCprZx2csDSYhQ6NoeXQBMWvf19pZT1xAF9W96NKKsXvsqHhM7KXFYVTG",
  "key5": "2SE57UAkSLWuKVEtYs5fpHs5EcT9snwk2KxA3GoX6A6936GYYLxJMhD3fFr6obvbAx5oMno3FziJ2W8WGyvwaT9M",
  "key6": "39Wmz3nUS67VkL7Wjjiza6JeQeZkqeMK8TDsPnG5dWvnTibzTCe4vZUZdx7AMFJYe5o4TkouJws8ELFTTsTPqFvk",
  "key7": "3LH5dPsoUCXKfERxy27bcrBePos4KH538dPY8L6qJXKSZwq75ryWfoGnGvXEcNSBfMQggnnYPjbBFem5trXReyP4",
  "key8": "23mBpcAC3KRErrJU7LTDVVjso8YXtoWus8CUZHi1iEDQ99wsU8GQqTWnSL9AFH5P15zPzTSWBN99LHEVvC8n1j24",
  "key9": "5gKx6Xvj8x4RbzWNHjnZA5CtyJWob6fbHw3xutQrvsAg7MJzFAyZYSDGZsJ13aWryeMkoP7GawKPWnoaQABpkqHb",
  "key10": "4J4yPj24WDM1n15xndttoSQnotsS2Ztk823QciBJUTqFa6jDZSqw2QoWD1C4PKtsDxyUjgcoHYanwsauP5xVdoe7",
  "key11": "5uXEeFGmqeQwK8cZL1UfYsLc75FCNhEASuU275qZdQM7AShbcqEQvAGBjbwg1SbUFirPdLD1xw9yfd9QgMip6CYv",
  "key12": "2SHjgWY2JNax2VLvLXouMFfFuhSRFc54cFtEkwiuVaV5e9t9JsnW94gFrVZGGwiaAkQ4A8jW1tBio5sujboiHGPx",
  "key13": "4xo4FEGE9zwCbFcMGzU1B7SHgPxCpSM8yqEasRMYHBQewnP9CtPQogMCfEC8ywzBZ2dpWDLzWgGvu3GHBWZMBz3r",
  "key14": "4fYz8svQykrFkyuDBxMH2T1Dk6wgw12X7Sbq7FSv83zuVEGtPnDMxzWC8Wf3Zhpdo834roAtCj9b9mDYSKvUeRXT",
  "key15": "oh41qsVzJT4nYndYrFhx6iW3jsC7wHj11ifxq67eUYGRWdJQBNJVdrukf9AjRKb7NaDpLJPuqmTfUo6PodZxc2N",
  "key16": "3poHmgVpbYVzkJKwFkytRUjRuwpCnUYG8dUqVg87hBvpnmR2wbp9KknMgTgwN48jtzesWT7aRjYYvN8DGbLuU5Rs",
  "key17": "3Sm46QcMk3VuQxBX3Z3wY1NZ4wDu2U7815VGNar9u2Q2jKWqZVhFJvm8fNDYw2MgU7thUuPb7MkpLrvWXF5UQMgd",
  "key18": "3R9VpkeXYotTWBi23ajfVAWw4gVQumaZctWWgqZiks3A3LxSTPU1LgeiuFWfAsjzBft7zYwf62pRgBjVptHxKo3R",
  "key19": "2Wg6oZ5JfuJKVumiLbr1gjoMmfHavvGifdEjSYiupVmXA4RzMeVS2LgvL8ohwajNzRoAseNLumVkFkVzcmkWgysU",
  "key20": "5iasAVCosuowQWsyiqx9RJz31yWWzkBo2YeqLT6WXzSV326EnrNimYNUFAuPViaPcoSQfM1MskqvS82VWq87rx5K",
  "key21": "sD8jnhLTsYdVaQK8KixU4niig88jAQB2bbCU6DqQbBcCYXQrf3oK1PUf3qRQcMUyEFNs4xqpxEZFxApAGUeVXe8",
  "key22": "5cMNeQkKhyTL7ctj2wrkbKwT16AJHudR8mQvGcTJUdLAwh9iQ2wrfgpJxJ8Vmx2ieT6v9PV6nawhrp1j3FqHrRrL",
  "key23": "3Boy4VvPwq3N1tvKt1ySaMbJHNp95pf56fbVYszgfpCoopbm8GS8xH9wdAUshfRMWYeDm2FRde1p4qDXiLWTueN9",
  "key24": "3DHDA9aDLEC6vqDaE6rYETaor11HQWYck7uHjaNTukMz265LXMktpTXxTbejcL8hh9gPyf4zY23EFffj2q5XCv1y",
  "key25": "25eWu4qdSdP9ihknruD16iAnRBopgWk1Tzixpc4h569v37czhnwWmDXJsH8CiEVGs8g1D8UTHSPo22Z77wtvvWK1",
  "key26": "2dPELFL1g3QVVvnkSRWqF5nDJTiZG6vpKwGNAEp4xHCt1m81jH2KfqGouMvBz3Lq7wADEGWtANPehDNHuzwt3ALR",
  "key27": "PJtGDfWcJ28rrUHanhsw73SQdLBPj3XiAy8VabeubuoiJLdRzAKZKvB9DghMAr2AG4PnWVTbzpo6WAbsKsPCyU8",
  "key28": "5oK32bFLcL9asLh2JngvSyCkWJYnEuS5ScmNw94Xh5617FLXjwXdTd3DVRDg7x3xiJrGBgDKy5HS51pQc8pW9D6j",
  "key29": "2d1EmXrkhwHAd3AqoQ8g6BrscTyvtg5gAh5WzMdGQy1PFkHrrpCVDWaZ3WkkNKUTKWqtp529BCi9m7fQe5STJke2",
  "key30": "2ijYasnSi3qd9JVP81rCTWHghLczUZoj884YB8ryRhzcCdcVKBRQHiN9i1xcqvKAhRQcXctjhACy26ZnEG5nDwdC",
  "key31": "2cYw58frQS7QmPJuffKcgAZvxURiSNZbJCuTzVYdswMLnUUYWQR3sDtr4i9vxuyPxVRDS86NDrt6mWuftFpxiy2e",
  "key32": "5L5cnsRB2NKAV3G9r4nAkrD66VncJZf8buQjFVg6QBbtE5tvkxAXfUuVBUSk3AyvvMFXgFWHcgfRVc5awzGfaCUJ",
  "key33": "2Y4z81FFDNhhbuv69kMjgxmGZSstPsNN8WZouwpv2ohP1xg2ZNuHeHX54WoqoMogFkFswPe47PQnc6s1Mnd63NZx",
  "key34": "3h2XRvy7dtyQkioXJwo2rA2fcZqAvikxrptSMubW7RYt7g9hmptagcVgbPFT7nEDmZoWkL7uffWjTZZMavsxACEc",
  "key35": "5Lt2ZxTY7FYkC3GTajs3CeAcgKqLSw6bg7P5mQE9PG9R85GP6dm4LnBpAxkkJyjjH8HceHPB5WXfCAj2mPTPEsV",
  "key36": "sUwXTXk2CAT2VbCZVGXYzFVFFf3QVKRQTm8nSi8HtWrNha5F2juoZNFGi49emmWvoRf3WtUBFLMPGmnK3GsQu5T",
  "key37": "2zRBHG3MwiQDDjyT1puqesuuGso7J764bc91TXARiSVyMuAf2NQFzj7FseB4Caah3m9keiLMp6T8MAHi8NriY5qD",
  "key38": "431YTrN8jAMSBoDAYoyntrjxuKudPxWU9ECnnzj92igaW1trEwVu1cF69sh6HD7SUAxLhuXQPaJNrhRvVCtQYZKw",
  "key39": "5qx2fuRkNsR2ZoYK5HY2yfWGUWDZ1owxedwWZt8nppZ5s8VrMgmnkAnJGWYrvdEWZ8qMgD8gji1oEL7athRHmWBi",
  "key40": "2zFhN5A1AJizJTKrQ6arf5GqLXAxaRmYzGsqm3NHBRm4kexADN8jkWP8io1PmZZ4CK5nMuB4qnyUzZ5mLFm9UEQa",
  "key41": "21JpZm7o9T17pCNUUNMnQm3CpoXfpT1J8douQsrQAGaWQkbyXa64mNtDSMV7b4STKPFxaHRndZ8NoZFBHXM4nXRK",
  "key42": "2yp76D3RR1dnUGhj5wCxEiHHGvu7yPpkkbxDS4N4zm71oKS7onyXPdXEW33f7ypJSwMr8DcYSr6wLLmhFRPiW5N6",
  "key43": "2B5sMF6o7KCmJ5FTpakgu79rjXS9gMCBscj1PJiZWtAMNuG8w1S7e3wHkhNPkU1zSTKfytdER141N8JK4hhMwAUx",
  "key44": "5zVdYXAhUSToPrrvyis6Tb3vWt5SAYEtzJDdywffau6T1wg76gQrTD4X5bnkBqRjhPRSKRy1ELSzU7HHWABZR9Ah",
  "key45": "3Apb7gAQof4D332YakKG6NdheBozMYFsC4V3GFPF8n3vN3813Dt6VtJzT5cCio89shPtUm65NWn9PnVKQBCxQoAB",
  "key46": "2YTYhsfWh45hPhwT5w8ZBToZGfWhvjvoG1QEMsQdhm4QfKpU3C7xTXavtJVAFNJLMJuHo2qXdGF4gyxcWtGeWDRc",
  "key47": "3ZKtFLhqVLUAr6LcMGnuCutXGeVct4YSwt5V8NahmTseLohZz64ZXm1w2bzF4NNmBJxfc84DWZZEtyeCJVPSDvGw",
  "key48": "3mdNGU4wpaXkXEK65jpJJPKWxtXcn1LKGP56MRFKBQdp63bpUVMp9zPjtFmD8TWYas7Gmr9sJBR6jBT6VeWsftiq"
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
