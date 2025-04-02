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
    "3EYBUioG3pGHwWDJB3JZXDxczT9n11hSvMWNnVFy3PQ3B23kNFCseRFmJbR5Qo1FRZNCDX1Wr83xqeXPejagHmvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fr6LpWsnqCKxVigvDCHvtFepaFAig1j5qBxe3DVrEe4sJ3eqZvxCEHfxpSr4WHZ72K9S2j3f5xhpgc2QXZGVpjp",
  "key1": "4aaE9L3SsZ44rNHCkMLdKmNYE6JoefeiMNihF6eogc5SzZEdceEs3wDBDbEnfAqp7pMZY9TZoc7LYhKv7jwRZhDv",
  "key2": "4DQfHhzWzdq8nutT8cwue9mHjkoxGm3dR8hc8XmByvCX8cg95Nsm21VJijTgC4PxL2h6ktYsmNkvUKEC6hPqnyGb",
  "key3": "5GVjQJwbNEbcmEeKax3ZA3o9BwhhnKpiTHnFkppiRsr9wK9jPaVng2SixH5kBgKTCPqrTgWPijo3XQj8LVaL2DAC",
  "key4": "jHmUWEr2DafbVmwjBQ6PDNcogwtTLmtY1BEVnYFri34oALKziXC7oC2Z6j76nZZRGYb2yyh7nhFSKBUSmUe7w1d",
  "key5": "63qCQKTFfuYhZXUhkhAHxLoczjNgVdEzyMysJh6Z2yKfjUmBmePgbZZQT29QnWFq1u9tF15cneCgptkKTe4wFc6y",
  "key6": "5stqN69PK8TscDkfjsHXRmzZ4ELEihDhMh18QWo9GpZfAu79fc3SFZvuSUy2YE8wJ2FFeBwHYzRqMFCpj7u2pMcP",
  "key7": "AsHcCdBZatAzs6AVDcqDD8DtWZfCSssqSEi8yHXdw22rVkNit2ysTQ7oyKLec9FZYoMut92BuPCJigDyMhA5J56",
  "key8": "3AhAnsnbh28gvtTsm3WPK6nvz4Dngvku2gvsQ2EPqRW1bmMWkbdcdJCooJJtfH9RVav8aCVeP1pfMqRGkTmMHoBK",
  "key9": "5Evz6Y5DzHAy7wHrpbyggXTmSfjsdBbDLaX99rNvXB2rrD7EdeYrFdbZdqWv9woCrCuMsJ7XPoWqE8u1nt8zH6fV",
  "key10": "BHwHYZbRbH2v7LwA95gyb9hafjYBvktBy9JwQ1Y1qibRKVLQyRwoA2ZCa1r4qcUFpAPqHenhdfWzPq4gUr55wFq",
  "key11": "2NxzeazQnBpAXioaFef1gdLvFL6NXSS6tuan3So4ZGH8hYxAD9ke2ZT6jHZpvf3K3DYzH6BPCV8chWmFFRAdGqq1",
  "key12": "2wRf7B9D37oYXCm69naJcaWag2h61QYVhny1QqK45naA4YkfxqHq9qhAQHJAwPc5GRyPZUich3wrBYprkHeyV4aA",
  "key13": "3deALqBECLMgDAiRUqvpMxmTQagb8PgbJjBvRSk91qLD4uy8YTLXvnz9t5vuVqBaagTgNdZLmZk8QX8vgwUwjQrE",
  "key14": "3MtK6ouBSzUxr7Houh2v8Px8HnhzpwtNjFLE8zuepVdG6zPP2WV1LakHn5GZfiCpEiDraEuPrC7X3kfrwX9UvDTh",
  "key15": "5sYp5dxzRxC1CLQVnFVFytPxgUsv8ewt4cRbSuUjebpZ2JJ4mTfh93bz5QR6qTzuKJujusQUfE4uNDSJKkXk7TXk",
  "key16": "3ddvqpsSrkFdKjdHHP7psbFNenVHge42jCjJLxvmXr1y9wcV65Rsp1GeToHoL5uWJP5wEqKZfvEgEJKy3pjMqMzd",
  "key17": "66M7WScoyfm44PEnkZEiXgmwUgf24eNwDrQdoNgoSgYSKXUSqtcUJEbpY4a4EsL9j5rMvTALYC1q2kBwZPG3NaY3",
  "key18": "5YnRnUGizySBGjDT6akqY8mH8UHrkG5z1SqLYH9HbMyDdZj4DhTqudG1ZyVNVNhr8P2HNr1te6Ki7EwBETRjEtZW",
  "key19": "3XdVxSdhYnx2eEadZFgoNvWsBmz8gTsaqudGM4VPAnWDhkqyoMqd98ivHGqo4x7kYnjVigB6xgmii4dP3rLzFap8",
  "key20": "4fGmMRnMrT7hSRwursAshDiW7k7UDxB5vksm2bGv1MdfEuc5XCDenmvdS4qu5ajqr8R34bSynf4E48CCYSKS6m1N",
  "key21": "4RzR6zx2662p7g5L26niQ9yQgp23Pv73GPNwAqh7Wcv2aGD5yQvVFt9e8gV1jbJopuatZuBtNMpKFXPbg1B47SRw",
  "key22": "3DeJY66jpHExjsocFboqxeEok1g4gdLH1dAAWtUVPnTe9BDQNxU2hNQFCmjS3Ey1X9Z6qQdwGmMduWxTmBQuDfif",
  "key23": "3d3CrkvK13jkV7qtFwBECrJL4aXhMiYhcyTMMujmYsJmuM1m7UjQrVG85HHbtRYRA7AiMQKWCqUszEN7gCwSNbay",
  "key24": "54F68agxr7E42bohrdKceYcJk4qCxKqp49aLVgnK37smH9briUkEPYTJnrRhVQRSXE69L85UymdG9phLE2SCZ5Fc",
  "key25": "4aT6amFwWJpniWs6rVKfZAuy2qV1XqKjqbgTxUxuCbetc58qHydEDMLeAe6ebZyvqqxtJiBsuuKh7rQFTnPv7a67",
  "key26": "dNP3LC7zvKSuthwNZgYEAo7z4FkUWwRn8UVbfrBmBDJnuPhw1A7Wi5RpZkXz5B4uennZggRKgQChGzbbwhxGh17",
  "key27": "4Nv2LucWPLQzUxzmn1UC11KQfBiMW3Vhpvt4kHmvibonWer2s5QGNZDpU1w7UGuVxKi92KaNswadSiZKh2immZFh",
  "key28": "4UJzAXffavUciWPDPh7JnchdtxDdNBPVBoKfZ39mYy4B1KGKi3KdC2TSy4JA3iLXDJR3VDn3Vx9UVUfo9hGSyLso",
  "key29": "5YMYeX5okZg4p6itycz6AenySVAjyMqPAZcQ3JjJWpLdVjj4cP9zaEwby49JuCUQNavZkt3BuRrXzDztBb6oZyUc",
  "key30": "yBZNP3eFMxSmnzV1BMSVg9P3YGmqFpwxaCfgHgSKfzMJAnRQgoNJdeqQdw8rBxdrakFaRcgpdFH3MjiF7hxj4i3",
  "key31": "nv9neS2BFRuFYK6rfkqgCVzcpatA73AQxQzPV9Yi4a6sZDTeYFqRbUhJF4VQzdgnH5A1dDE7E5WrXS24ZNdLbBM",
  "key32": "ruFcRkUvD8PPiu1XGnzUiPhqGUf6MYBLcfzoUUxFeTbmRCpi8j46kUnxYTvNJUUJkZzegHjRprsqDsjtyBhNK9N",
  "key33": "53eSW8CyoRJMNpYFgqGxpW7CcjWgBX2NW5iuKKzPok4H33hGXcQVPTHcUG1jd2NptvoR9HBtFGDggnEreQQtQiCU",
  "key34": "5ZpmJ2xyyrtdH1P1d4GDXtdfjYJKCrunL3jWs7q9QKeM9qsMXA19MCMfBgQD9dj68mJ3dToMnX4UPob3heTDizJw",
  "key35": "4PCLN3oj6nzypCW5RDVrbjirxS4aMZkNQAABwy288oVgCCMG1yVQ6eXYQ7yXE2DToFawDtvYucgVfDuSALQSyn1a",
  "key36": "453euGQsyhwJaJ9AeyZTzS7v7sNbEzQzUivaVZPZxHcMSoxqeNq9TRojVtLb59CnxZW9K2H5ybVkvH5Kd1jWivkR",
  "key37": "2V1ZjU3XrNob6Aqg1VDAqmjTm1Y7mYN5CSD7ZCi9sLMMMcMSvZfv2TxrMUiPvzgEPvQ7pjcVdHgfbWkF7dyL8WuM"
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
