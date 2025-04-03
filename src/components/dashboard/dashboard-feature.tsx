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
    "2XMypsjnf7vfEoFzqtvJhuT3eZ1wGEkNxMiVr18u64Y7QGNJJ3jTkPxuhQribU4EtECrPjyhfmn6VAENMBzdQm87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCchYskjXFaGoY34MBXabNqZaRRusbALpjn2SjiFTmhyQPKm6kdqKma4uJw3EvWLp757iRyotbdt6WbYaGjsZBF",
  "key1": "GMEV4VJRhtPTEmHcLXxzGMx32orqxeyx4bVdoBrydsovpWq5ot8n2J6btEMoXsX4QM4FebusncobwiyhfSRN13E",
  "key2": "812KC9AYa6tx83ifZWzLtvnYy5AXLpdVAZqG6xaSjjqsAVAvdNMEQEDVdPibcT1jxeEQFUUY2fpMvSZZeKD46b9",
  "key3": "47MSeE2drccGKQitbWSArqHHy1oFWUBpwyX3zJAxpZMFcNLvm2xSmtL1ff6fhY8FppX82KRzFUorxSdF4K9PypBH",
  "key4": "2UkLF9XtvLAjs4dMo7dsog6DviVBp6QMzvJrp5YGkYvPyobkqXbuqJwMGn28e7iEoUYRSbggaksgfNDxRPeewAew",
  "key5": "CWxw5gKLJdPhbp2TD679BJeHw4KeTVUhsNXwLBwdx23R2f8abNwF5dx6WSfNq4Rtx7Ws5EsLBygdDkUJMMCDQcZ",
  "key6": "4twcZrk9PQSc2RwoSHgLEnKRYodwrwNoiuAnmx1zzHAVUsE69QjYHa7bAKi7yhQ6kG29D1UgvdiNdWH9RtFPvUwN",
  "key7": "2GBffbMyRoMdSTLaN9pWUrp7ANa9V247RQ7Stj4xCsqwM5i5f7tUpUiJDB1gFbTv6Avijy48WSwH4csMzYoxgS7z",
  "key8": "4mAZPAMzg66Jj19Qcfjq4uK3JFwdkPPVwzmM4qY7pfzaeMtiwD9QyxWL9PGh3Zwe9Hu2ArMceLtxzTs6XfPcvnYZ",
  "key9": "5sqWerjP1K9aHQEd3X3XbbRB6T5E5PBAyRdNxEy5RSgydSLzovApQdTLkec1neEnmWvFoVK9n3WTGyz7Vvwj6B4A",
  "key10": "5e7RWwZrHe9QrieBFL1ptyUoNxfUtGDcWHYpRMvcE8eXfjXJxX2uGqU6ahuYhjG5UBAHdD6WDyDNmEsZV6VcT3K",
  "key11": "3PFVsUTaENLrprB2yAWqSh1739aRzY3qeorMm9RSCxCRZfqg9f84Vdb1v71A3vGgYXHV3tJLh295SuYxmx9QpYEM",
  "key12": "3EzcxGCuC8CMcuQ3dmkDGZ5KXyyWnv4buWk3ESYKBVeJW6qV3H2hVLzg8dEwhRCizdoMm8jnHKGFuwfMGgmKkMc6",
  "key13": "3ESdNjwWhyxsu1rBtLU2Q6dMZ958vm9G88SW85qS4uRocLAfbTZtozSiq2XKMHEuY5swKLQ1oYh4MUJCrTVjMsH6",
  "key14": "61KcZT7TMxprCdmw2szi75Jd4HXc1bPUi8FE3H4nNz73EpyDZEzLH7TmRRpgfHFndY8Q4ixZ82RWq95jkr1AurTs",
  "key15": "2A7cPge7bPFhUk5guRn3KQh5JHV4ueXAgBZGZsKTwiu5sjnFa4AVwMAdaQJEGnNgV7C61KnhQ9KWUKjkuZg1WfSV",
  "key16": "3GzVSVx8mfBMvfjsBTfLj8Ui7eF1SfBmBVY5dnqk5oUANDLdLi7oMikrpavZqUp8p6WUx5mBzjNeyStbYjZH67Kp",
  "key17": "4ABmvb1AXu1UNzDXGrZ3gudYdb7KkwWAYKzP8HEsc2FYQWovjPLsR1G8ixi18t7quYKCx1jseYsHsnUuW8guVkEy",
  "key18": "rQvMHf2jJKXNZ3dLH3qdsYbaBLjvaz66mnXagjszppV54Le8DZhHj2jLc5bNAvu6CNtNSgTPWumjKqrKqo4fiEi",
  "key19": "2SsRq5AysoGBhxZL6R3NuZu4UzzdHwiRAGgL9zV1u7zYon455fwh9D1SKFNRmvBkxq6N1Y8fcWSmHfxubgLYU3QE",
  "key20": "2ToLLx2tyquGjGKcCvh29M91rzTawCMyzN9E9LGBgtqkMmU8mxAcjmZJkWGdfYipPfVScWvNissn3E1h2qRM5uKe",
  "key21": "42kbpSwykeGcyMKMs2hTq4xRoZRjKPuhbTJS25w5bj5gE1R4XD2w7bsQosCsVLraf5yFa8BnsoNV9YkxwPJaAaJG",
  "key22": "nFDGuAfdAir1HECs14Ny6HtTLXWD8vmWZmYjUR9wnAdvmchmsbZGjWVLkbAVjuGRvWteKRBME6pCr879NgkcgxE",
  "key23": "i7pd8bx5UB5o9U8VSxzQxP144of5MmocZcQsedky6oaRHEtBExpbGvGrtbZhA66xs9SsQWbdjZhKq6Gd3h5woBw",
  "key24": "9Un3K3vVtmFeE7AgkvJ3GCo57ZJzCKyjRQKWMLPuRwidwcQcNPte7j4M5BahoDsjWbE4yQg5215MjBm78Cf1QBZ",
  "key25": "3ywEekcNPL6EU5AjyBtvWR4gv3cA8fmbutWTmg6xysnUwfkB9HGBQS7NAqCcjP1W9zCRvPeCWGYjo2m441N9s1ue",
  "key26": "4W4LP4Q2aQK7ospukoCcA6mizuSRMzPzRG7AmpbpwGC1PQCR9o4MCxHvu8HNQNoQ34EWn72WffpnPw3g8ZXoy1bi",
  "key27": "gqyJGbkp3RnhS4FakHTYBbrEu9f5PXda1Kf3yZfRbesUx8uEpwQpeiSP66DtNcwzBRqknKh6Q1qB8p9ii1wnjCU",
  "key28": "5TSU8Rp9JtFmTQVzcHXtxAEfxbUNJwjbiinuWHRq3wZGd9a4mwEF9XZJKj1zxspqiDsYcDgQEg1ew5qmgA6T1vc7",
  "key29": "HX4wkX61mPJ2TeD9i7trjZXJjxBm8uHFVTP8eK6KWEhmQuq4CZ4PJPZvoLMf8VkZrWADfCPDifbVHwyCxzGbuEi",
  "key30": "2qut18VXKm43SfmKFU1VkAk79XxZZCCaq9CV3A7r7MhZQ3AiAu5DZbv9DdE9ENfx9z1iwzTaXHvHoA92MTUSRzhm",
  "key31": "XR96y14KgdGNawCp7nE3LZbBhegQqRnawseeip6r6ChFX3bfTNnqw8GFZhnPjJAiospmRcpqMvuF4PYGRZ2rov4",
  "key32": "5gZd2VVitQxCTzNF8BraEiNtf775Lv8PLaFzGtEVvcHVzwZKyYpgBfQbQhobwUDXFzgw4djmBvxN28RmREgkQxQR",
  "key33": "5y5yehW8WG8TxMS4d8NCRRDPvkUitKeZpFW2QoZMtbjHWx6beHAkZe4PXyTaf9Mzh7egAXRe8v29EkvjyyJszWwR"
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
