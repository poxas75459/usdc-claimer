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
    "4rS39Mgn6dsvaYCKeyWJnzgSic1ZY8HixYYMuHKupNi83hSsCN5SAHWbsskGpJGv6iAXyT3BUvYJS6SfTaQcdo6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UT9nyjyHWJmRgzeNz8BBtcJtnfXGbUz4wczVEmSddRyv4hxzkXsDR4i8qJtjFcaBH15np1WVLEqA6FARWvwm7S2",
  "key1": "5dZzgycarnk4uDi9X8vr13TwRr71tdHL1iMxXmT7rdfonDcJCAjW4wYaWtcuadX6rAgm7zfNF5sJUmPckXy8LEFA",
  "key2": "526Eq14116RMuCvPGk99FyPxA7dK9q1Kz3GY4LmNCKrBqfzjqyi7pfg5zsHWwzDCR4V97enWJVhjnpezu92EBhfz",
  "key3": "4Q7vfZoUcSLMiuPXD8f7HAayHshhQ95akT3cMBxmh5oYs3JNiqWzbJaghPeQji1uLxi5xBz8NcnV2ApAb5UYW9nj",
  "key4": "3JNGfAuPtqFH3LSbw6YzWgGWHsnCyACnHrNR2p1KkdRe5Co92XH2HWsso3TaiWSPSy8YGSQt2gix57LWR48TUCQw",
  "key5": "3W9jEpSbwFK291enkNzL9jZiZv3r3DnYqo1NTTtAq3EXRokRD6exqjWGgAT4UoGRt5WPodqh7ofFS6XPrfpCqiEh",
  "key6": "3XF5a7jHfwvb2pcP2jSQXRjTTk9LsbuZxzqTXQzJd54Z9VEz6vkg62w8RnJC4rFhLQ2zvfqfuRoxvTq9GJVRyMA5",
  "key7": "ubZF9fDPD1t8Tun8rM7RWG8arcFB97nHd8ouT99P94doGvPMPtWfdx3ZEBdzEDC3Xu5twGPmLXr29wtvdwqKgpW",
  "key8": "5U4hW1BWQ8grJKqtJN8EaPyRzshekEvUPz6hPzXKd7kgFeaMaZgoGvAuj5HSEs5wEb7pKrnKrnhfDdH6DcYpfR27",
  "key9": "2EhJv7Mze9in6br3HYgNXZasi9fpxN6vbsB4NuKU58Z6w1AtdXe6k1k9kT2xbvkKij8hkvo2gHpEQeajdR34Ep9L",
  "key10": "4N1YTqD6rW7FnTNQxdQdgMwWY6yiLATLMPmzuz57h3ehbxdA3AcneXrHmkYbMQBSFfa3jhdSV67kZHEG2oyTmref",
  "key11": "QubAj1sMrcVwjeA9KxYBXSsSQBhxtGTTtdRXXZxM2UoRoE3foxmaVue2iggRzbdYwqYCzxZNYqBnLYukHz1dbpY",
  "key12": "svMpvbVUzLyDodpz9ToZxG1wWCibQmYFQPf6ZDE4ouAT7sq9KkY4MFfiMi2XwwB4ALRzNbQ1p6bxTZ3MSZwQgPw",
  "key13": "yH5Li6QWq6VchX8URqrUdFSFKGgn1aRnuYXWqnCRYeZ8UuqC7imY6stmEKCffaDxEZH1VHYwUhA3pvrSj9fzjZd",
  "key14": "64h9NZNLobSViQ7fvMh7SGTUsLyNMDAHi3ULTgJydi95vPgP47PVr1E79Y88WG5rwjJPAEwB1W6kK9yos1wAb9yQ",
  "key15": "3ruxj2YUS6rFTQey4SFpprmF6DvjEVscQzG5ZCPKmrTk7Aza6R6iM4CdxMcp1sEnYnw9rBaKCuqCLRKEmyU21nja",
  "key16": "2j35MumR4qU1RTwSqTg2tmQkuxvhwTGYcxy58CPwAADu2aRp6PrWs724AQPGsYdHFHNdRgnmeLMmabsAt7t2GQi1",
  "key17": "2UZL1vqrUvy2p7SQQJtBAGNc1Eb8FkFhoEFALkDZWxJ373nqiQB5wN9Ncqa3un8hvQHAZduPYyepQZzYL92HaT7x",
  "key18": "5d9upQsVrniCAmqNKijLFUF5ofcrVi8kPhTe1kPwJ5utqF71KThwF1moRyj3a6ccAm6ffzMDPMQyz3PTV8PHpxJu",
  "key19": "4hD1hCZbw2Wq3y1QMgcMe3HCh1SgM3PcUQjDE6LJchbiuYGWKwNcSXV22SFd3XgPpgWcqWi64YEPcZKGAAgVJZ5y",
  "key20": "2Q9YnszQ2L4H8NBzAUnK6Ax23Nv2LUUQyyFqgYCMvUvmjuZLnKbuaGXZFeZEAmgXPVzeShkduE9twLBNuzngrL6h",
  "key21": "5KWESEJgy2BJhJTM5Vk9JnnHyLhT2fWnqaJmQeLsFunrnVNbmepoM738SB3AmdCuEAbh3ApPHFrgbbKyJzHxdq8z",
  "key22": "2oTdkU29pcm5rV5dUVWcPtaRwN4BCdQNictcax6WxAbUqx4boFCcCLSFaGoegX8PLeUGKmveLDcmaX5Rw1k9LXNv",
  "key23": "2kAaJghGz5RcVEs4XEgDpSAxb6kuKqvgmeQeZgUxdH9zsUmQqnEjh2uDWazmB2JW1AFSucnp4s3ExWVuGfS9qxoY",
  "key24": "3hVTHAbFdDJpvR3rQXoMYE1Jx18eQHACUoHF7pP14WDVn58twjLi5WSDp6UieBHhVC5XTHVvc4vXM6gQ8QGdsiyL",
  "key25": "2rb2KyR64f1V2TFFt2cCTthQV867Tgei3Q6KkDBRRHQNw2QNGwp97ikT6m2xgJvV51FBWunHVTwPqeFwUtuVmHx7",
  "key26": "4cBTcfk6WHNSsTpYUmPCxiBmUiZTNQ7CPCxTssoUsQxwtXu4tvyEk9G6GmpyqpPbYsEQDwNbciaAKSYy2ZYJ7cPY",
  "key27": "4UKrxSfwMvKyoY4BG5n9dkhTPw7YdrbZJaBfLyQ7CDKP5a8gcVW3tNrw6NvbJb688FbZzwrpRHHhyNDBxcwYSxkv",
  "key28": "3eh3hZrfr9R5b3X32wRec4hcaLihv1w6obUKhA5MYaFFX4neo2b7pF3j8n7Bc7Pu84mBfas9eFiEhT3hpmta8s9S",
  "key29": "3irkc6ziKadu8NDtMzMdJwv278VbzPckeCXJLAifRx95LjWA7X7Tz5rthFmzs9J4FoBM8aZ8niewkFChSoCBm8p",
  "key30": "4vLsPGEcm8vhydWbXSvrAPCYgg9BX3qbhpbi9FxgmEn1XFkqihKUXv2WcTNFuaz79ABTDGV8NmmeyzkeeN8a87Dg",
  "key31": "3gzxhjyELyU1B5YCYEUcEjTB24UniCtgeEeHuUUj455L947vQdFPinWmhs1C4hk6zMDFHZPb4a6RYcTgkTx8SKot",
  "key32": "55tJkrNiL9kXxLMSb2QbvWbhhgFksLj9HLTn8QExBDUEVmTgEc9GQj76buTTcbTYebZg9mqptBfPhs9j5EHnBgqe",
  "key33": "4xBb7jbuaMsEH1CQLXSZ7Kz77ve7n2ouReihjeysigUBUm72q7G5sdSLjfzsFXj1QtLC6CaUXNfdHP3SYbxnVn5k",
  "key34": "5pnoCEXGPNz8bynTR9QcnhY9QddNLBJAQFiGayPQogn9DePufBMYgL8iP2bpyhH7KTuyGap7oG4GPkRyzKxKXZX1",
  "key35": "5cneZ1HerqykJ1GWHL5yK57mkQCWJw6ZyRzFegro7a2vTJpYqb5U3iin4xaiMnkodmMewzQxa6StJfL4S5zmUQZV",
  "key36": "5mpSGtmVGVNtzaCRmJE2c3B2qhrmM1fwFGKUvHR7JgHw2BRbtUnUC3PtTjpRgj15gH9FcSkTiKwprMNUc1n1xyUU",
  "key37": "poW1H2mpoJBA1da6FWsXmoxUoyAVkTYRCpsrTe8up8zwG9G1Usqa3mTwWn8FhF5zYsv42EGkiHq8mD9ZBtXFFB4",
  "key38": "C2GQKdnZFi8iMqNTjt1S65fKdVtaUtDDDiUkd1VjaMHeRHk8R3jdLann7Q4YLJtERZrMAbgA4h26wEYAjsgsBUZ",
  "key39": "2MSyMewDxZfUBqLGLNkSY1ZkYJ9y8DWhF3uFJjGovqdJJHe7T6bqAm4JhAHquProoFwe1EiETkD2E1Sn6yYShRTt",
  "key40": "ix7dsj5QBeNFRw5VbFcXqKq3uwGQZK91MhgK67jTNXxwLHTxTL6qAuNXjjdLmr8BXKvHqvoENVfXW79uNDFUpvf",
  "key41": "2phDFt3NRrRZtKEJXjLeDHp1ENadQxNPzuBYzQkcTTt8fZzVoY61diQM78bX9z6vyqWb24F82fBt9iBpm4R8UV7d",
  "key42": "4Ezbhd6GGLXdWxwuSWc1ibsVEtVxbzSSwLSq6YfEKRnm5QUD2vzREGxeG7zeyQCMAKNjbkc2dyf97JjR3QG7bavD",
  "key43": "29ibUNTYTpddpzkkkpomGSqsZfBDyEimmZhqyLEXnzSR46jmqvKXbowoohUBj3Vg6eX7iFycLqrwLKEKd4cAabck",
  "key44": "4iBLWCZXMFW3cG5Ak2oGormkvk4RYSefPit8LyzKwECDULEKiRdQbKhM9BKN9uUnXEFhoujog2DiuezUDE8qsnUj",
  "key45": "3xGEWeNsnSvL5Bkbz49FK4ifH4iq4thGKhorA5WsNoHLygFMQRDWVih1kjLvoL81tAg5dezsz6GZtNi4v7ARNWZV",
  "key46": "4kJjgSPGJYVBmYZagkWuakQQgXuBaUv6h5DDKLb9hdnmGFEDstwGc71ucHpHQMMa4w7VoGUMbbnhd7vTPqYC6DFk",
  "key47": "3WWVEBwpxwnrSPGruqmissV9zjkjDVLVMmaUMhpnWFAnCp21pLUxdcbW3rQ6c1KFyyKzA4xcQ8BH6SQrJbGR5ACT",
  "key48": "5zaSkRddPjyqDQjgaUSB8v4KQFj7gnmFrYa77PU5EFncbAwoJk71TsGZSHJdy4cm77Ysh3wAcjv8Pu1Toq9QMbw2",
  "key49": "2pYGUH9uQRazyLDgKi2phrryFMxV8RnGHdq1MCgCDr2XGZeQCpGZsaNUEvHVcSUkyPQqbHTSrrhrhXA6H5apwmrq"
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
