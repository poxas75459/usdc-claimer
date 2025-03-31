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
    "3fCFsh3CkdCKAeLun7tRwhohTejcVyWZH86V3ZBd26HnVRvp4RZktH9Kusr4VwmqouSzFTYbb5fhvaeEXEySEDxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AX4SrmrjreEYozZNKiZ15NmfSY6xjYfaiWV5CggrDLAzvkhgNqgEnqUvqt5oEpLjQVq7LiKzQFR5jhVADMnsi4",
  "key1": "4r15yUSbhVz3rKtE7f4Qi4xRxM5KFgxM3L3dEnRgoFJ8mtoEwLxCjoKZCvxM5hZ3Gg7yzDwB3L9s6T4r2pbcVLEa",
  "key2": "5KrxoCSZHMoa5itu5wRPPN5e7RVxzA7xKLxvQiEXhjuyNpfvxGEKVhntUE2fTktT5JSACc9DVY8nGkEA2eTSLAPg",
  "key3": "5FMVTP2poZ39e3BGDXeD9XFB6VDpofKM5N2FjzcNc9suiyJud7EFx5MvAHJup4YqJpeGDZxLCGgXsuWqNHJ3ViE5",
  "key4": "B2NrHbPKNtJVtnEb6hSbijXxKaYZzEGAxCK8Kra1TvwS8JmxNm7WqyVYSYMZhRUXAR2GpVKq6qQcMScw7TWRv47",
  "key5": "4jKxPZvEdCCSgJJs8AqfdNs4xzV5R1pYLGioHX9WREcZPMk4LsZ5PaAqVpRfC696oQ9dWfr8o2wpomrn1LphNVf8",
  "key6": "d1MoRcARAULy3yeib3QkggtUYaFh7wDnMrGnWMy6B48AMzG9a26HKHRNahXkoeuSd8xDGRUvL57xYJB5gj2kd7t",
  "key7": "5DZhJ7XThxkXAUXoqKC5XWq2RyFgio5r2YXYqkiYmEXBw4oKw9jq8GbLKkRiemrYpVGnqGerUQ9WRzom8uStiaFv",
  "key8": "4vDmZpiKSxA3NbBqhxJ81ybeuKXHqpDgPafPx64y7XsASPrwkEoZB3LkQqzsgoncmtCgSKtXKWPnhTvyfpHEfRNj",
  "key9": "4DUUkB4D5EaHWm7S6eKBjazYj9SFj9zC4xYUqRLgpmf7eKCBrbBpWN9uVLhxK43SJjSDkz7cdhHzAoLVC9eguxGE",
  "key10": "2NuEAg7H7tJ4au55m2vudTm5cmAd4NdKY3JsZaw7qCoM4FLqsBBatSqfM4wj1JVXZAzsnKrAVTE6wyWGn69nm2uu",
  "key11": "2yiqHuJKLF3y2QTR8M4Cz797EqE5eWjwqdq5tnK1Rq3dieQcH9QBgwXor87ZvbS6yMpz2DuQR3xiPmDXp79jV3ns",
  "key12": "2JLUYjaN28exxTYL8QhoQWSVLd5csqgWpxoxyPkEHwiQQXQzAYKGqV6cY9XteBxfT9FAPFvkkYj5rdTy3KoTnLDh",
  "key13": "3FchCh2ymurwLhdBrrqihzDRmy8C9XHYv5ZAmpVyD5jYbCPsycKDJpw2Jof9VUgsx4zvWLEotsTfEmHRknC6WrAE",
  "key14": "4bZUjQJ59be3YvfnsXb4R5SQACVKV8qJV9TGqajErszgY2S3W8ctVLZEc7xSK4NcuPCqTnTAut3ijuYRYvL3NK4q",
  "key15": "4FiBDNwU8nySttoFjwdtTTupzZSbDFFNA3jnE86oPk4E1ezdmA7SA8dVhJH4bUeLqwst72YEWydnMeHnaDzTGDeJ",
  "key16": "sUPrTXwmzWSFPNNg8H4YRwcvmnGipV5wj8KERCK7X8hDfMXCnVqa9gL3Wtjprra8kcicU5FG98ep44uEuSZXmWQ",
  "key17": "2Y6FDxucCD2fSnLF4ieyUuv4FveKubYXJsi9yrBJ36Lh9R7JVgtedkRXdjNYfBaTwizjcLTexkDouiosUmwNBvwc",
  "key18": "Xvk59J3YM2EwSt6iAvn7BVv1oRLa6Le8n3BxzcncvZwZD741v3LtuXPnoe1NpN7H2UNWjTDPMo3jEBG9PqzGNCh",
  "key19": "27gwUfjegLWgfrKSC4rjgomT8gzGUaXXhboDNYsoHJ6Jv1L7SzTdJLSxyrGb9rWWtEo42g9AGATP2HntYzDzYSb1",
  "key20": "3y5pxMMxPyWPy59LLMPz4YkSuM79s7foG1t5jkqcoQ6Nm4ZmShZWghoC9afJdNWWrfHjcHi7rdsfEEuQ5w7AvJB8",
  "key21": "EjfzBy5JYxBzDwLgeKipQmrisuoPHgtY2Jdw9xsvXqy3A8qohUPojoa1MLAiVEPDVUkDYsVNXR6BsJf4EUgwyri",
  "key22": "5zcdFQkf9JensrZwsajxN1t9EVERWWy3zw7sWTQA2akFscBWR8FRG4nremarZQGEDRdd6fd9ehFA4bNouZXLVNeQ",
  "key23": "VvLty6xK88s2DTJPEAh7RbtAJtXnMDYt22wKPQYKCPuWSoRiGKUT3c4TpTMtLJgdDHmg2ARK747essUMWcqG2Ax",
  "key24": "5ZPTpoaZNkvBGZjwx6J1KxQkCz4QmQStxvqi8opU3jLw1ndGsA3bwpAqtpmzgyRXF4nWX59kH1H5sLJy3JkkHuDB",
  "key25": "2EKf7h94iv67pdGAJ6T5haRDvEBhXwuPSdbxQivav5NEvJNxkuMfMK8gdkAYmHFzeUqqgEbNHGq3TiKEydEmWckJ",
  "key26": "PaiyGg2TNYW9HovRPqKf4GH92cBEFuz5a4Ny96px7K2w3RUzKBNqiBxnT6a7mkQXajLhVX6S9DimP31KcUTYQKJ",
  "key27": "3GPPRg6s4qj9kkULjskBF2XPwdZw6sRqcSnUbnrw7LPpbExGkz2PgAjAiXTE7WyitJJbHqj4c81FPVR9cVWxQfG2",
  "key28": "5qCfPcL7CNdrACB5VpqViHpMrcaqf9vRpetBd97XHAMRe2b99NGyvdedCugwdLmaTEQx2BSrMxT9f1SRR98rZu9T",
  "key29": "3Wf3qK73m7tcRXm2FTCt3TFb2iUtVrtaSjoEw931V3bH8iaMNtwYRLwpNbfFkV6LhM5TRceat2gfAiTcuC3nJ8wh",
  "key30": "28fmvruXDC8ASNaHX3S5MCWk2NP4tgaqNkEDcqgHQWpho7Md6mHV3RmHkgAXQbXmpYTbTvLMsCRqV4R6RUMJTXK3",
  "key31": "jW9gMY7uvZdEeiXyht2VFMoFVhWaEgQbRio4m3AMyCpc3j1n84suhakUzPmx3CigtfJi9d3Po21wGKxghF3oPr9",
  "key32": "33kRoFfidPqUsmKUCBjdeAnddehxcv13z49HTgAjm8Gi81uLRHBdmKsCRgopCg2RaSQHB7me55n7chmSyyFgJHAK",
  "key33": "3nuUbTUJpwHCJJPL6QbVyBQt5wG7BJZkUr59LZ1CbuSgRYH7X3eQ2gs7oAtTc6Et1a88c34yZU9qhQci79K2T6sc",
  "key34": "3n8TZ18zibjQ5NX4Q3pFNzZiRidYZJaoojiLy6NM56URrbyhnWLL6PxjcnKDmnMEQDutAcsBpMGWcNFUZFu6HSiC",
  "key35": "3yo1SDuSPns7GCrDEa6uTGPHgP26djP3oicBiKF362r6kBE4b2KfGuQ1mCZZcQ2XjykfA3G5k3hqJ6fzq9G8LjCG",
  "key36": "2Ufg4zJcgZPFkG2PoXGCyPVz7GY8L4YRKT3T5MnWLeBU1Ftdzh3f7j3G5gnzWTwMRErWaAPyY5MB8b17VRkvXxGE",
  "key37": "61w7G8heuWxF28EUo1iwVGemyTGEa873E4vk44uouCYvaWJ22SFyVvwe16CHgCuzTgkPD7T9XioP2cafAnYvQr1y",
  "key38": "5ddx8Ywvmkw298KfqYEX1P2nTYQ9BsVAY8mUvWsKrLPoz6MrWnAazkGQ1PJ86Wxi7tNKphG4Rf7aBB3sTcEMZKcN",
  "key39": "2xEXELj7GNfHPbQqHmVjg5KMFaoNXi1sFaSdBiGoVv7qRqygLsGanUZLn3GfnGyuYewZd6jtEZQEJ5VjKpWoFvqe",
  "key40": "3Aw3SWGsWu9yXGvTw1RWRzfiLd9BZ4kjg52SXHmYCsyXZCjwyUHifVz1di5bA6sJUncN29WjxHzZBEpmaD4mFAwA"
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
