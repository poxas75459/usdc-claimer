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
    "5CyyqqFeeAQkDLuPq2gGeRP1ged7TEMMi5BYt5sy51AdAR9ns1YRazGhGa2HLus2EYjyaW29CX3a7dEMsP6kpgmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qv4cydDidgtGfLuuidYqN7MchUbCPND7FDpJNNvcTHQ8cioAGusW9gZza8AUbk31w6mw4dBmL45K53pfgio5q7K",
  "key1": "5dUx4saiHYokGWW7fL1ACVJjicLFDQYkYT9T9McJ9EzqXxbLQi64dEYgzs2NxYwy3HTAiLGgV7v8ozt2YZcaS2Sf",
  "key2": "3TTWd5zfg3SFUWjBoTYmXsAQ3VE7CsQTefkJ4QGttNcd8p2xNPZjbqDcerF2yodBzgF5t8ZHbijhFQj1ADLBBsM7",
  "key3": "5ZyidsS6oYt7bq6pbfhQ1fas3tjzAgmTw7bZanyugs7LSrvYLQtr4EUJUSfs7pbqNXT8ubMcvKvXzQLd6x9AiVuR",
  "key4": "2oqYJT9iBmQMx6CQddTfcZo5zkzSB3FkGLyiUzF5uPovnGrhWiATDWvT44SNeuyot73oGNgDT6rgfYr7RdW2R98c",
  "key5": "5MPk2X9taDgXXpMcWFPQkJEr6iKgrutzv94xXdEQMVSM2P9ReoNMpvXhnWE2EQ6mXHURe4nhfUXrEfeAXgxwV4Ep",
  "key6": "3TDvAsrchzdJu6t22cRZwM6gA6ZsRMyjeGf5EbhJgYyqsYiSi5Vw7CJpQNJgPkGPRXYr8DjeJgQqQsVPtXPqdK4k",
  "key7": "35WbgMCinwDg3nGLPh8SD5CtfE5zuNJWduTt4sLDA3gmLTJzRE3bkGASGuRh7Phe8KCzsGT4kwdbUWXgVPqKUyET",
  "key8": "56iauDyc74w244Eu7cYsCFhnbFa9Ky5tfqMYkUq75G9SyUukN2WRGvbvTWaVtyktLLaCxscopdnujSW7JPFC4nwB",
  "key9": "Eg7VR9TfZ3V9CxHCiJMy6BXEa7CK2JWzUBPbdqCYTU1vfzu64B6Ewk1iCVbNr8bMP3LsFiqUrX9WCW4vvqCHbag",
  "key10": "237u1pYmUovgudjgvd4NhSD6d2TLVatT7bgEEjm88p4ceYDRT8Yo93z1mZ6564kPwEcDSM2SYoWqivWmbMB5imas",
  "key11": "kFThBE8FBYe3iVY2dwZYMi6bvBwSyYkNs3YRkqo3HVmUGK6Wbm3EuCgodppYnsGCqtp4ZB7t71b1jbeFycPF7dG",
  "key12": "2jnYiif23oEJfKKAdJYR573qSpKk8ysKpXLjthntpPyJhmihoMduGGymTYmgxPBweEPRww4Sq3A351P2YJGzkeTX",
  "key13": "3rhDhEsT6VvewdojcK3h9xQr2FjPfBjSG2gTsP8SDEmbB74XF81mkX71XeUAPhhp3KgvbYpyd8rdsBAbVuTDDtgM",
  "key14": "PhLBnwgFdnuu5v9T96QtBGWUVitWU2DpNCSAD3YWvBYxmzdiC2kSy8LBCUTjHMWuh7UtUNUtozp8vShoyQcStnW",
  "key15": "3oBsntfHgza11pEyBUtGf2jkDB6faPUoaSqdn3A24XwDWJADhpovXuXd5FQ7AGT2asStm1rpGi9wwxosShJVEjT",
  "key16": "HhLiMax1wKiJJKEYZfnVjWCDZNSRq5KFopmSnsYDo1Rbb6EAbmVUJHpVoYuKhNfSm93YNrpBtMgbswmG4bDW4MF",
  "key17": "26DefhX2RChb4QFAqQwAEkC9RZysjDDHE3Z6L33kFGUEUoVrnez6vy96UmpfFFrAzZmw27zBdnktwktrNn8u5m73",
  "key18": "54cJsjDjJexQgwrFuT9XwrAhUTGsRBPTbepsLJGYAauGh68vvy4GPxEt1KcFoRUq9DV8mEkcpwZzhanXRZnPXc3K",
  "key19": "4ZAKb2C9eYaUuW1v8CJXDba84YUdXZmpTH1kmfBUrLkqzADJVu8rja1gC8YZ7gKSv96qgq9r47b2o9mYx12hXR39",
  "key20": "3wnZQfGUchuY97FUATeZwddV48ZsvtEXbe6sPuDj1gbv3RzSJczLF3kqu12DEve2iDDTRYZyKVAapRSTTGyaWdvu",
  "key21": "2tUCNLuiBzHNf69P7VMtdKjW4PPiLeL1YA6dFEQUeHuSqmmBVhBtiDMuoJoBLaxf3L2L6MY4VYe9yLi2Cjdvpq3R",
  "key22": "4tsLochBi2gKpEB8o7LRxu6Bgnfjty3gGfHLUryiEo4ZuLSqEjv2WzKe77Rtf5YJcj3kQ12GpAtRBPcvP8qHja8Q",
  "key23": "5Fbw9Pr8tePk2QxpopZUvEZcdtLkBzp6xh2UGxHYQ5xmkECP8PGDMRKQcmKiB3KPxyEYu1Jq7NoQKFVrv4vbMJyC",
  "key24": "3FU1ugDb14fpHs5Arm5uQmg6iAxLEENdtV2JaEwCqdfUSr5nqfF34WsbeJUYAVV2VTcJPs8b4rdbMABe7vYLGUTw",
  "key25": "3dY5rMbwF4z3xRmdWNX6UWkTYCq287V6nCyaD7BkMBf7ZjiZrpNwqEw3vhbpmMhzAuTJzrnx5BAFfttUUXmYj196",
  "key26": "6GwTg6jBudQpWP3x7RBKZaVymcZaCFAmBBBDMBYEBnko3fKqZi5aRcHY8Rqtp5gYERZFPmdJKW9tx3UV7aJUAgJ",
  "key27": "ZzKhcMzWWx5CmrqxWhzDT9SxMbWMc61CtTGjPPVsgt93zcM59tr9rTPvMDRk7BxrzNvarEf1RBts7wmLMLhBkm8",
  "key28": "jbeXCWx5jNy9qeU3GzA1Gich89eYntMX6rPmGjUCTbk9UWrsVTQqHQidksyqdy4TJvr5TZCsyoU4NQ5qTkSZboy",
  "key29": "hf2nk384bSSb5CHstvyfHjcHdEdvYLWpHABfPMonRsX68NBAsCA7kzN5joRTz7PoEFRd8V65wipCiawyoNDc5WQ",
  "key30": "66VLngqv1Ms2jWxFVoDky1ihLLCMy4bB3n3nGKWFwSY3dfVGToSJkm6hiDy9f3nrfzBX6mt6cVTzq6UvtmaHpgBF",
  "key31": "5gXtPVYkjJzxs2DL3hd2UuiuEYZvEZzip1tBpgjhi9wncRN9H9ojgRqWyhk6CSc2GGhRZitUBXDQLidySs7Fy3Pp",
  "key32": "3NhLZdJ55pdcMnQ9TbP5JjApeRkNSwu2qhLTg1UF6LkLa8ewfeTGtRkdM6egSu6Gf1iCY3Kwg6x1nMeerZVgDDHG",
  "key33": "3qiNPN4NiMUPnPAgu1gbznWVqkh275XuRbewAsYxs95EQ8mBnRSsCp9a8wDfLvcVqG8xyJ9hxVpVmV6weerAXSpJ",
  "key34": "7bTvPkxcPJq3UDHyHb3CVryNGtn82DBfDuZhBms1q9fbv41yr39xdFxpTm7Z79Z7ghAdH9FCJEdcjuZiiuPZAeX",
  "key35": "5N9xQd5fha6rnHZQ2hpUJUpdGyoNF89dQ29VwTpzkHu4BcJhUeLQFY8J356UEYz5cMTz7jsLBAp81FHRs49E56ho",
  "key36": "5jbJfp2pQB2m4r7HHDXE5FP3dgDHGwBZQWnZtmZ4zNrLnB9uidPXs1Z7sBW2Pf5x2LQ1goD7JLT8UPyjUSCsLGfM",
  "key37": "2UocAXCPEcxbLow92p4B8QuCFyNmT6nsh3ryNrsmxeNf4C9Grrps351ymCssWfpZAZAmbCoCe9g4iVy2CY6LtQe",
  "key38": "4aW2G7U8YzSdszd9xNP8UskdXE66wzggXrQwt18siWyr83FHFgu9Nwov48BTysNgvk4LjzN9FuU6zocT5Bi3TnWr",
  "key39": "4CJuFFMGixdddAymjtourto7t3Me1GY245G1GVH3q3CdaLwpozQzFHUEnCSVMW9HkMah4CDnr7QhYQGhXWNvjFEn"
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
