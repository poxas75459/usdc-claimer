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
    "2gbbMMkFjC3dds9KGZ6V6QGPU9ysqq9jgjUjndUDeETBFrq1UWagGsTiaH46YmFUyZwow7xqT9jGStMfZ7iuayE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49EeyGC5SdGTDn7M99n9r7bgaFzxnAby7Am9RXjHvrtn4MiNCUvUAPZ1JNLAyLmEnwicXbmf7PaTMBLuXPvvsttm",
  "key1": "2AQ2qmnqLqjkym4DHKfKJt5W2JwD3YyiaYMvHL3KtpJXwLT7rSHhtWXwWgs8HWnScz4nkJrxpSCoArNwrx3qudt3",
  "key2": "5HcG4ocftSPSMQZj4z1xLL9jXGzFYU7arLCJMtZrAByMStjV3D561f6Ccitr5XebrNyaWW1rXKSAvVv4c1WQA4Kw",
  "key3": "39KXoyYLNTcxha9MNmGVCiUQFkKLu8XDMsr6xMcgpQYCjD6ydXeh41igYDXFVDuVAaUjo9YzTcNTSwcxD3tueP1A",
  "key4": "4TqrWXBx1ufKNRmM1xCbUcAStiADkSiU6SMvz3da1x4RkZaTsRmYZYYDyYA4djoj8taYode8LZZLgvFNFQXhwE3P",
  "key5": "42wqTfQtV1L1mZ5s6wE6vTBait9UA2HV71PeTNbF1J7SvqsVKCrRtMX67qFBswSksYrKeKzhWLSznYUbUavTneJZ",
  "key6": "8mLEJRVaG5JK6JL4qCeLuz7hRvJxBCArmcQuzjMncCWWqbx8f3TZKB9KnYPoMuByV67VKV1shuA81ypgCHByvJ9",
  "key7": "2SwviQoufSojrApwJVRTrPtMJZbqbH19MNbU6eLJWrciYrHRm2Nb5767KPpNjoBjymw2Y3NqVYW1Mho9REgnCFnd",
  "key8": "25Mrtz9gQvvV3K2jz4CkVRb8iCEBtjFFLdYz8DEPkeiDdvFyGXtiPJEFzdsTEDvSdrzJDavtVFKjcv2pyH6swpyx",
  "key9": "2Y2Yx8avXLCBGDyp5iCKfkKAoTdweV4GCfmhzP1xmwq4oaiWS5Wr78ZSgcchybQqMtC4fCMLTZQqxs5wUfa2M4jS",
  "key10": "4rYRXTiENMjoQmwRYqS9Cc9U4G8KAXdxoJXH9tRHP6tTZEXgTXr7TRW454kCHDMSyvT8Qwb74dTweGH4JQH2PM4t",
  "key11": "55HXtYSJZNZ8JZjYQJFYQUNRWDzaVP1VY7VqsFULkEAHhQpb4MJtCfABksNmjGE4sU7YjYEwJPZDPALg5kWyG5Jg",
  "key12": "5PqH4pXo9HarApoUhj6jQabHnLYEsJao5t81ytqceEuMGDy9kx9nU9e8EdxfipRK6ojHDje2L24UM64QEzwpGDox",
  "key13": "4mCvaEYHc5pzKirdoKAGiY4rpDvCrHWRKeoqx23fwGawpPa9HF56jBBirhLF6Sk8ehD9spS3PUygt5SQXh279EqU",
  "key14": "3i1nKhkGx8pzprpvzSxLmxqvXWggWuZoQYieVk6H8k8b1LwbW8cbDGMr7Xrse64X2Zhtf7F2nWE92b5hmLX3i8fj",
  "key15": "5ijELZrG1pzg6GXt7thC8taZF8nHCeAGQXnsgZH4Awo7pihx3ap23JxNY5FsY2xNk23k2D4bcifDZQjK3oPbtFjc",
  "key16": "2E6kN4ZUhzCv8bAr5qnk7UaYxNjYt1Cs9xoBDYDNqQYQaWpEVSvgQYtnMCQum8czyq4kJQ48CFj96eeJwaR8yxoL",
  "key17": "5QER6ENzdRdeXbH8DeMzDoa5XNabunxAb2HnTvhF7W6PSZZpNvXLWcW6R6Zm33Wo4banZDygnjrEbHD66WXjs8WL",
  "key18": "2BKM5QS22TT9e2obwYt5n1CcYBjUgoUmf8y4RRXkZnRRZsVuAuAzajAuo5hHYh8E5XLQCovdLCYLPAwYfYitk2pi",
  "key19": "GGj3odgs8tEcrgB5quqH9f9aV4QoMubfaRHnVV4wHLBajxCkBdrTTMkYieH1rx9LfP5s8MkU3vk9sTGrP4TEb3u",
  "key20": "jfpK2QPqrC4tYUTiwYQ1x3Ve76TbBZ6hqbsuxvBmWgEGjUoa25t8rgvRLPym5LVU8iYdesBLJ9usMF7fAfCrJUJ",
  "key21": "4iCjjYCVQu91VaP8BRTC3qTzgUAzpPHyY6nEhxwZhBP1CVnuYmqVD7SgjgKKpFQwaSQNfBK6vizaHeEZmgStKAgS",
  "key22": "4vyvRLxKrkSAfj7UcQgAdjd9Z3wmDiSif1pD3UFwXevqKepxB4yH1GFSXSDJ4JmV1ZTFgcowgDqkkMBZvChqqEVE",
  "key23": "2xcixqHP3pue52LSTSb3tdbXfCvJ7p8CZibzFxvP6JkfdZYdKd4DV3kB7KT1j5jiHa7CRFkSMRe6FK33aD8p3pvq",
  "key24": "FonyF3WixeDspScRmT5aNiCXSjfUzXmZE4rRE4uQ1gEutvEcE77iNNxzWEWZBq4SzVuJttYzzPdacy9QuWfBGmA",
  "key25": "49Wz7xrToJXK8XcQthL3euvYLQYn4J4QRecaQkqSxfWfBrpPysfQLsFNLuZnePhyfNa494xHgvsJYeLR1E73EyRQ",
  "key26": "CWpYzekUDahxgqrKWeRpfgEqpdgcSH2TSBMktcRFgKVAGpZsh7XFPYmY5hdzY49Vvw7R4kaZLvP9V6hGhjPygLc",
  "key27": "5DvVan3h2GBCSCLeHkcFHhdtoZKYqjjtvKZBN4VBWzKbEmLDYUp3ZqRrdKL3Nbt1BCyuQWqgYHCmL6iKjtFjQLRz",
  "key28": "MFbpuNovXYNjY71874V4UnpVE99M3ccXLtmNdosv7Z7Kx1WvkkAubzwkcYY8obB3JaP9aKfwMUz49P61J8ak75r",
  "key29": "62W7qDXrFRRVWa5hiG6shtfwVFnUVNPVcAfKZV5ChcmVuYCMszZdW376DXQSstBH8n4ibWcTjWbo3ALv7YGvzgfx",
  "key30": "3YCk92Emky3jDUtJR9C37pr5TDCw9tDqyFdis9pdXrd7y3R5HQjw2fNdu9p9417KsfDQCuoq1x4SUNk2xpJj2rK6",
  "key31": "2n4EuPTAqijEJLaeAEND4bTTD94qmMjbjhJW6DkVebxQzV1dbbte1LtoUTYuMNoUxFqPtq3podXsVyyytjqQAUiB",
  "key32": "4oJZfSY9qc7WccppoZsGmyxv4AG9QpmsUxursityGZXjK4SNVGcWn6H1McvbE2ETjxBicaM5Mifv8ajrza6wTk5y",
  "key33": "RZK3pdsB1AummE3mMYYwzi6rijKMoTx6Z8eghcsMKpZuqvQ2tdBQ2H23thaNNgSWHRgoPcM555RigDPABJoVYJd",
  "key34": "5yJao62wbGTiAYa6Bx6HxxfvH2J1vMhuiFFw67EiPoSeWbzhp9g6vvFWySG5LDHHG1AC7jrRxRgZTQj4GxUTA7RC",
  "key35": "3QKoRU9ichjQcfxLHq9oVM9z3XWJGwepyJLJ1KJAHGR6h3GVYM4h7nEuNusdNMFgC44r7XJMWBRCURkmpW4x4Pb6",
  "key36": "4hin255oXRUyt2RFfP6n6nvzbHX2trbMaZVRZ4rKkigrwVTNd2kGRd7FyCT8qKV1EDDzUeLYvJo4XhTNZK479JpX",
  "key37": "37Gwo2b2kgi7Ld7Htt9AJsDM2X2ugUuksjkN8Ewuvq3mMqQ1kmhNCGqAfWw4ZvNX5ZNn4fmfUGuH4H2GfQ6viotz",
  "key38": "2zZ3SRPCFdMdzzZeq5nMeHYiQdNmBwwEgGroo2ms7CpNAn7LbCou7kijndB8RDSgddUs78Dd2Hu7TVPVWfiYXPc",
  "key39": "4tvGqbczZEiAYUbqwS9ffARrqsyHWmN6zpef4QQ8r7sqHzQifDbcL4CymtNZm3FfKNeRdhdG9rRP11BHMSrxWY6N",
  "key40": "5kN4umRmnct599dPwJFysYsu27Y2QVFag6zSroT2hHsRJX7hPnBBFfSisWnSEeb1GPeGtAdKPUpcYKrxWPZjvmnK"
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
