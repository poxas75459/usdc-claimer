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
    "5L2niQnSpwXogiK7WE14wta8bbjgLhMmgAvKKpffRHVEXSTBCtcHhzxeWduKDnxUmBV1vt6vpTndvAEGuWpNeV98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xpUDBqgBeqU3iPyip6LXv57BhbDM4mjnpTajgwvmDD8VRCzLQ8WdrLGjEEvxpaawgmzR8gCNxy8KkPzwphyfUBB",
  "key1": "5RA41RqJ6Ui6Hy1sMHfsM2sfkxpdrUktD7AhwiAz9hyFYKymE82ARXKkQgfKmH7WoHiStk3kKPM3S6ZC6Rh1W9aB",
  "key2": "3weEGTKku3tzuon9oYFzVA98TL4PEdRmnuFEnSXUJYDUhEL9M6kipERva16rEZRF2CEnnUD8tzQaUXqursXUASUN",
  "key3": "2k3HEK2HQC4p2fmwEc6YsVLC6g4NVCadXs4SABJCcfn4m5Jb9Z1ApfLcMdLeBjVc9KYBttVAjmoTGNzg17BhXG11",
  "key4": "4Dg8kVsxfFWxahXcx33wEhHc5LeWWVgeQB4WnMhieKXaqjbngMzKfEn3hkbJokkrza4EbgcQgtkwa5GinHtd93vc",
  "key5": "3jrc595apxvpjwTYewmqEWqgv7kEa5EUTeuCkzVHiQKdahVPoK1xn4Ebo3SL12oyM33qHiQZLyA4jwHhAFrH5QxL",
  "key6": "4ovygsW9T7oqpFzo1HBPHFk7LcsrBrRiUm9UYGx1sAfh1EsvARUQah7FTHexWKnTLahouo6WJvfBBrjHqM1EKEMo",
  "key7": "4XhCXTBE8EKYYU1vbkygG7rwNyi9DuBqAgFUWN1GnhCFMF2zEVNYFhFGU42rAqC1pN7hCYzfY3pzap3CGVrzFu7M",
  "key8": "4Y92L1urA6afizJKxF2ABVrSr1fgrCgoTP3DBbrvysBRnFxQymMSzuZs1ChBZPZBFcaC9qgSAmMCkrPuSLMa9Xh",
  "key9": "4mYGBYfSKwzNoVH9d8mgCubKk6GLqWwoBwBdkMbtD7wG8TaxEX5Kb9p231Y55WPKVhiJ5jSaTdbY1jx1k2q632Z8",
  "key10": "3C3Q5ovFnofdAEHPytLE78Usc9dv5T4QLNqXXWUeJZMA5v7oXFjLyyF14NtgyQXp9WNPmtyAbijKhxYGTHvy5qVe",
  "key11": "4nzVjdS66dAjdyYCkaKFRcugHPdNazY3zTB38z6y8VU9CrVMpteyNkwu9JdWx9Zk4TbP6sv2c3KYWMWZyANpv9im",
  "key12": "4URSisMhWtSMUbMVVyCFE7pmVJTaAmrd8Bq3khY8pHL7goj3yEPxmSvqvKWzeraEPinAku8JJzZV9RGD2wyfzm38",
  "key13": "KdpcMnAfZTN1mP494fZQCG4tfVuYGPd6M5m6YtFkBMBVcJidB4PLKkFzU3wp4dnJ9tT6wsE7J9kgwNwMQtjqRZy",
  "key14": "5LtGRyZ6t3bnsVYojLMYuFJW5YvAT4HJTqqWKmyAbpqig3sVgXWveMMTCdQPM1dYUm7LHYV39S2nU865DQi5Hf1m",
  "key15": "2Qiz3am2eJEXUyrGkMAHzPEvuF3oMqbMrfCZq1mrnRNau8RRBdT64XJLt4p1sZNsTBKuhkoMR7zxSoTHCVRDANfW",
  "key16": "3SmHp3FpeodBwfiw6qTE33Kkz6HpNgoGBFMu3Ne4Z8FPhfU5RJW7KUtpAped1YLh82qNt6C9Sg97igRdsmRDCwk9",
  "key17": "5MgVoqZ3gBQJhd8vpeb2PtfF1nkQgDYy7gbJqo9icjCYjnkbt5TgjnnSQU2gAqLkBr942rfHSUb7oWhMr5spVKWe",
  "key18": "5xnP2rt1A37gFpvC1aXpivb1jUKVAeNohGrbgkuyUQ2jtCm5KmXRNmg7nvntiUQ9h6x6GLXRZQyDmUAnJPr3Xm1L",
  "key19": "3CuBPupMNFuWcYAAjJRfh1r3vLVDujpFnhRLYLWA1Hskw92KELjGrkNfGKG7YQr85RnvWEtGgdWAaBw9APj1VutX",
  "key20": "MeEK3QYaD1UayW1SC1ApDnQrhuZRz6HWN46TwQRyHRDXpr3uxwe7Daky7mHc1AMFofBEPjK5jGtYrMB2ZhTvAEn",
  "key21": "3aL4HBGzzZFryK5kDtm3WmS8LVsJnFdJM752uW5GtP4UN4gzGFJfBiAhvrWeh4fHXwi4t581v1ZT2sCYVpL4Jd7S",
  "key22": "4cn6WamobyHnNacWg1WWfgVkgC3mRjqUfvKMKWVqRgENwVYZEJ92HW6hXKCq9kigSheY21zcBAvoZPftESBZEQCt",
  "key23": "66oGK38iYzGE92xJuJMhhNjU5S1QPXdStHrLB7J2RZnYkdMj8xLAJBXTSRGrsQLZjnSNZzJy81DGdrVNzQvEUNev",
  "key24": "H5T2s2b9siNozKFeZnvMctzL3YAcRAtQk7aSurMYb27KZ4RRB9GTcEaQkQAy83xVPNEgFfh3tZjJks5JkvvrDqv",
  "key25": "5uCSbjusMZ1yb2oYeGqmMVjxeVjsfPtWB1fy97tt4o4c9vTLVqA6XMHJ6yzYgBtPGFw5enG41EptJBjVcdF1NxGu",
  "key26": "Cc6xeKfrGCDuSU9hyfgGJKnDJpQeQZoTkbxZ68DcYZaXgKbXVz5pnjwtd3d7QESCs3fWqyAJH3MFigAGphnrR2o",
  "key27": "3dj7m1LgZta4rv5fqnm3t3mhyao7gcsm2YiGmtdvMggF5qyYbLpKh5VwR1dEGXkAFp32i1Zxw8HTdpDFVUMqwjuV",
  "key28": "64oAivEDDv4yLpNefdoTGu42EPQRYPMqgVxyfVyezEniCoqhtYt92SNaaRZt2hby3qEodKmyeWkEUnxUiBcKVUGM",
  "key29": "55dXtXBY6JkUiMnWoc3gVntscsMnp2eTeG2eRkji4uDVL7YmXpggs1VGpiWPM1YMM6PuLjKetVABxFeHPX3tv1KD",
  "key30": "4fUXmPGqmM38zMjsi7B8Hn5crfX5LfWP4pugdk4JnfzjEwJxBK6WQVwivKxFYS2jUYfSrhvj6s4aGEnFLMxcW2D5",
  "key31": "33KkHRjw6yfvVGRbD936qKXrrwW2Ka2KK1K7o1wjwg9cCJDEYwfCdEYbLiZ9obvGbMyLMqviSi311Nu7MreMcYhm",
  "key32": "4YmikxF2LcVrthUiQCmjqj1629qbyqGR3ng3J2uchuiNSpem7Ab4sA4YvwXdk9LjSzANZ8NCMZ1jxMBeNy1x5Q1A",
  "key33": "jxFNfj8dZq9nGudbnUftPuykW413dN5SVjrXqdtzHU2NTgPcMEmx4SYQQ5JxBawSegEMVQiKzPrmCdRbVisbUz3",
  "key34": "4cjUSQEhoh9UHnL8iR6L4u3gVpkFQZcM9yrEzZ7KenyAu4dAsTaYsn7Yz6dCFG2vc8LNpcyRxH7xYAiX51zDpRwW",
  "key35": "4dynSr1ZFWbXQsRuhkXTZXUS743FnfQF6WdSaYGyw6eRzo5MLxAduTbbbrezG2hZkefnT8VqUHGyw81VputXbdie",
  "key36": "3M7461NEhQWXR1y3nh7QBWHjyq5mciJ6MqUiaFU8myJQRJJrBSQNXMKznPLSFcj1oxxFi3kkfufNFtcpvnsatrpG",
  "key37": "4Kvvru38QEwYxWZnctZ6gSYZaKufbtYjkMNQMwsy4eGHWF6nspahmG8b9tqPAcY62rjTm1d6GY6RyhVGKa6QHLXi",
  "key38": "37bcYQxJFZ1pxPHEbHLNtyBZygAAvTaetekX4waUGvW5gtZu8i2dgXLChtVZNHWuy5hBUsPugfYBcAjyS6oMJVSB",
  "key39": "5Dq7jY85EAZU5G7UTyCPp4Bjf4bzk95javCYExuhVwuNCW5xJ7Hp9N1xa4ZP1H4exg5vmCT7ZnfCTxNNK1yETzts",
  "key40": "5UJmypowQz6VQLXsjbLiJMZ3kbVPbMaVNcer1jHKhKgrKLvskv4Jj6vb9Gsj2QGCB3WmB6inibPDsLgqdEZ3c1HG",
  "key41": "4iMtG2fJHUZTWyTttTuAc65rL4wDcc8byXb5icL1jhiss5js6kdYR2S2ib8V12zATkEPGw5sgjXckziT4fVjqiTn",
  "key42": "533aakjarda3sSkFiuTtG71ntXVsnjPmFQWeYrHGqcNG7YBr3nbYwZx5MihuR4GgC662qcnkpeGFTdomdUxuoUPX",
  "key43": "4QCuLWdicFT6rNQrfNRfjJpWhs3H8sH7ixy2FRDQiZd9RuNDpj9y8B9SEjvfhinbyCf7ESK2jnpExxrYzhd3P63Z",
  "key44": "2WHxmSS3HVfqsMjr95bDvEGMuou4UZoTttatdx1EvBPFD8xirLR2VZ6tbaeGgRkSEZy4rFsVFb278oG8KU8ZrkRj",
  "key45": "3xhH8EVXBE4r8YAN7RbxVeBH8r57o9paRhpe34rfhvYAH2WxX9YxgLXHHMtYhJo8uvJzW5BrLp7DW2U7RLLrLx8M",
  "key46": "414h53MkEurQrk4kQmLjXGVGoSqJBUSemJDTVaesLnTGME1LkAJt5PFvugM51tdYFcrnNeRjzGQjRumDYjkkL4PQ",
  "key47": "4QffvSqaDER9pzk9453zv1hqubLZtzDXdU4tD4fFzmWXfSQo8tFc3AJKMSjxpRBzaZVioNHfTY854iGfYjnZG49N",
  "key48": "2kT9ozQGQeB68SSvQFFSg3pB5hrH4QFZTY75EoQmt4qWo5LfDfLQj1BUAcZpLWTW9e3oj3XX9vYwtBDCxTkTNJMi"
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
