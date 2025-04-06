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
    "5qrZuH1Lgo6J3H5Z3atJhiCQqeBPZgsQ2rPmG2cSqh8m1U6wvbmkZ4KZ4eVY8BWTJMN7uZgiCsMnCTETRLb9c4gY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eamfLja8A1ur9uU6aE4DPHp6K8S5D5wN7jSrbXNqShCqG6UdYTnH8k12nNwDf2Y4P698SkeiNPudH3evyXkjrd7",
  "key1": "3JpuNWAcweSisKAhztKsws1XfuDvLzRtAmAC7kkDDeakWLHGsJDVyRPsUFHA9gFXXFCiuUyKM2Ffp5BZvaLXW8Sd",
  "key2": "5BY383Abx3jAjPeEdypK4iuR4NFqdb7TKHEpsSw2qGyCsyLacj39N7nh5Q1Ujb6GcpoHq1Pe5XdWAXbS6T9hLyRF",
  "key3": "4qdmRAUQ2h3ed8DYUXy5wt29Vpft2zzvHAgWT9VEgpWUSKyonXub1Xcrfr1QSxge9f62YvDdazWoWYwxDCxYYHm",
  "key4": "keGE4Ldk3YREh8beDpJSQ8epnwy8tKCf9zMnGDBUfCQcAWTgFUBbrQ9N8kyfpUCuoDpMxR37Td7yo71HxJhRfBw",
  "key5": "22q9JmaNgooA4rmMr9P5sZXad6TnbWY48cr59VMFz3WozGCvfyWCya8UbGiv7WTq9rx962f7VUX7e62ozPo4uJ3M",
  "key6": "3EPsFaiHjoGfEweJVLH5HpXozrV1c3b2AjPr5R5EqcyXpuDuuaL77Pud76mpwLWWJrAxVZY4xq66vCSyb37g2Jci",
  "key7": "4xBcEom7iQCRaNicx1UiwgakzHiiDHsmtD4514Znpyg59ZRLmYW5rWDWvQn1cmMkSKP22EYXY5w17MxJ1TXEDCRf",
  "key8": "JC1y2pikWHK3bs7hrk2ho5gWSqeHtqkTcoRfRQjBBgbP4ciGMcoGqMRbz1twG7SBHPSdcYZm4AdwhSf76EdFXDb",
  "key9": "rrwoz2ekgeGYE9cw1KCWSUVj8veufbmzAQ6uKLJ2X9yDXYWhb1KwBcTMrYYZMkzEoApekaKLSKWqKtvmjfANWvS",
  "key10": "3uhqt83WHzhHZ59Q3DTFQZoSZuDJdAiSTgvvbcujYvXM1RkzSVxUq3wCXBuLu8NnqHmhDjDFJHzt8ybx8h4Hq8Bd",
  "key11": "63mLrMuvRTJzkhVAbBGcrWMVYQFAJSJPMk7gRUwbhxRfrpXbRWnxmbXNZiFGLcgodb8NwbXVY57dMPazu9jKAJ1m",
  "key12": "5LSqAYRBAGmoVTnQGG2ZVoTTmHRax1bzLyns4ueFDmBwVRFKraruFKQxZiweTqR83XsXrm5rUgzGDmV5n8wxQzBt",
  "key13": "5PTLjQoipmLWPsoBdr1S9dJbRNUnVTirjMKCUr9U71eg4epuBpap8hXrwyt5gjDXbwYFqzutZ3aZ3x6v4gk9kqsi",
  "key14": "29ZKEGRqmPLArSiviDcKXKfBzrwJ72LzN9i9CdK8p22hry7ESnjkZvBRvgwMLfNFeVcn6d5wQkWjaFFugSC9PmN6",
  "key15": "662ZUWAUe8WBtPuE4LekPiyrxuZQLj5Q6xdveigHbx8NXdEo4D8JbqYxnCJQF1HZ5hCTbqmHG9cfcyx9GDT94dBb",
  "key16": "2gso34DQmPKgUJfVkzk1dknCghRUjSHnhLbSTpydnJvoJN4dECqkqpfScW56eP4rGTFa2nwqQqvNNhmqAFpXxRxv",
  "key17": "3FHFjX6rAVAHaoW8VGW6cnbBRJGoHphWCADbzc4v2W34s1qZJbCJxadT9r4rGJrDNzJybrPzfMmicDa1u73wpQRM",
  "key18": "4nVvdheYxJA7iKWSHn8vvgT2aPeWQ6sH3KosLKQFzViubZed7rwihPzTV9HtkSdPzmc1sWaeLPTCe7gguvWUURdk",
  "key19": "2TAgUGLsw7UDD9TsDRQGhn8YYweNGGAj4dXiAb42vf8AiFUcuXkHtRpSnsp7YMHaXuwgrd2VphTUF6zAwNXb7Vdz",
  "key20": "5Mjq5QkFApZoPDw5VzzkLFP1G2FSTJTwikHGdj9uRzwQxgYwdNTePmSwBHijERaAqQnCkjrRmsZnh8riwqdtPgwu",
  "key21": "3RdgU53xcUvXqTVZv15wcqsgGmdwpMmTCd4ZEpuAVMemkeLT78dATm4RQDqqSUZFWh3G5sCMVqAMAPBwoqHfHni1",
  "key22": "T5pXFtki6qzvuHrEn9YUQvPvaDhwTvMTCe7FFKmUfarhhxAKSdnosnxyqTJttHwcbTGF9Y3mVYDVqSqf2Ak41qR",
  "key23": "3iuybwpo44tnFA1K9Nc9whAzauNEBfyePXqUdyaKbBxKYM5YWrS8bmJKtLDsPePLzYcnCk85ozo8KJchNnWup4Mb",
  "key24": "2abNy3RYECFDdNKpigqakCgkm1PrWUMiNxWVKTVUapwByDUyDChQa6wN35AHDgHE8KbxSY95FeKahuVQAk8jeh7W",
  "key25": "263AeLYi7hbGK8Wy52ptzLgnJvHAAV6upXgdiY2wrrWJf1wdkPnuwdPxptN8Rp9k5eGM45eeX3rTDjkkwuq7t1cf",
  "key26": "5V4Si5DR5AbPk96BpqAqqFzopwKVLKms2b5VFoW5W4nvghMannHSA4f7kFwzYjVMTRygaib7heuqLStd38Efy4R9",
  "key27": "Rc6CDUXoLRUMH7Cc1Y3DuDW9ougowasRN2xuRGapn5nVRFQNp4QD475TqJ1jZSnkZTyk9Fok3ABgWUDnYFMj5sN",
  "key28": "5LXY48VknEQTu4cA9SkikM69mEMjuPAWJDaWR3M1kNqxPu2pS2jdLaaCS4rHeULAfTJosYqDnAM15wJ9eGPnjNKm",
  "key29": "fsdUGA1PfiCTtw1KdFGA3mfjerVT5q8oUFKHZriqJiGgHciFCGahu8s7UYtzY4Kk5bs4agM46uZygYcZd9afB6j",
  "key30": "61JyvXM1SfDu28yANu6puCtyzkRAuhSsnDXJ2hr9qJPRwzt9fCCsDvpEEwMyZsPvUvPRCASS6XrDd4PxWBcAwW68",
  "key31": "1y7s7usWeDKNYWWNi3rmPwyTCqEhuvan2Qe3X1LJgi6zG4PYzw5VvqzKwLf5LM2WrFP3aM8mUgE4DWnrArJ1JSW",
  "key32": "rA21rhWCaneqDnF8VLQpraPCjwAw7VKkcBCmBSETsAbL1QhL3Km5utrhBdNyks3To9Ew3sKys7o7S8qpR8yWJVZ",
  "key33": "4ise7E8S1eEQyL1TjZ3nrsZspVjQ5UDZRjEe3KQVu6dK7dK9kx9eJyP295gANeG6wtGcWNnSNDQ642xUkqJwgLoc",
  "key34": "4pBTHgg5JqZUssyqbF9xmNdhkw7yg4NNG6Jbv9swabx35sPu2jFLYkZ7eo5nF4SD7i4uPyFPtN4EiFVqtfpKzHEo",
  "key35": "5dJzcquFWrcQjSGF3GoPgtiR9WU27QMaFyjA7iWHMMGo6d6CXof7qXyJtiQq1JNdXuDw8GFVDxBbLtZwm3UUmpWD",
  "key36": "5B2GxDF4u3Ntmpp4wx3eWgAufAzz7RYrFX4QBXLogQxaB7bpKVwLAeEsaNYmjDZagNZN9MsmKcokGn5RvyvNNJta",
  "key37": "2tLmWnB4HcZv24fJDwWxginRAxnraCHMnfcpw6oVazvv9zPdo5FFQbNxiZ7LsqMQjBq8UYhRwCJrrAa9oPUqSq4N",
  "key38": "4S77yk1LnE9Hp9jjY9kjZAPRZCRGw92PnZjr9H9f8ubYJmW4vVVLjBcBYcziYFbjHx7uqPQpZvTVz8k9XUfc9Rr4",
  "key39": "2uh1JPvQ2rRAiHTbBR4fsDqdnodpzLr6PrtXHy2vLGpSJWnZdPtQt1kGvzEtsRxmh9YZzxhfv4Soph2YpQtiUGMF",
  "key40": "3RZyF9udritn75LXgRiBX2CRG1oMhoKLQ4TbsVinJkYMMGaXbBfi2nFRw53doD55NB8CDkpSCaLQ7gY63ytg5xur",
  "key41": "4qxLiLxaHcVJVpNRoUnPnrdZLZ2dHR4M23FBSJP3pbnmoVzQ6ya1LJZxeQnhWAcWV3didWY8bbi9Fz7aK3Rt5S2n",
  "key42": "4uj4MMstWUzDkAZB8tPVptLeseQ4kxZZJ6j5CNaSAXY8ueTKWSxU1DDfja7kU7BMNTTCbQjFrB5BXStfPd4k2zK2",
  "key43": "2bLYnhyXUR5DYAYAg1LoyYcGvsoUoba918viciURDHKrqKLb7iacZDwxSP8S7bZ3rqVKL8bHs6jyjQuV3UhUVTdV",
  "key44": "3B295k1mRFMbeqbyAfm7GA1koziku99q1DAdvC5Nbq9CQEJKUntCPJ6TGxtvkDJMRZBDpBFkgcb544xZLXpSFQbC",
  "key45": "2qRzEv2HDs7X6sr2fUrZJRYc8aVbr8gHnWd973yu9fiVmawHpCU3T9LX4ueHjQENmPZnSJ1kuJ25xtsqVqpecmnu",
  "key46": "5YEoZYZoad1mNdhYFRuHLMocXcrubc3LPdLekPKrYp4UK47VcuRccPSPzRfVTopvUZb9mDQMPTbwaDT9aDkP1rBM",
  "key47": "2wqgLQm5V4K7iUVReDsm9J2r2WGUiPx1bQGh74E8oyT4xTSbs7Ey62D7X2xFHssokWGG116NFxpZsoQGuHvz6nrn",
  "key48": "2xqJLmREw5XM2vmQaaYjXFPM9tQ1wENNQoAPBSQiSYZgZuANQJmN1PTqWZr1wK4EbigpsB13GKbXW8F3px43yVRE"
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
