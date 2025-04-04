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
    "4jHZkMiRNQ2yMqoH6rNwfbhCf7C5g2yPGU67YinBDUwR929QgWGLNPPngoE1zn65HHC1ijUvfrQMdB7V8HNaVG1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "334gbucDqej9ci28XhQEKkdJXKsEbab6ewM44GjRqWj8Yp7Sk74qVAdTEGm2GTKbuZ8mnTLeJBaUTr3HHbb4oYZs",
  "key1": "KaqF9C4oMuWy4Pnv33o4vZoz7Ejg5aJdDPK7gUcXHBa9EGxBaXvU3tSjP5zpgTYog1Wo7ijp7ETYXCUBhBG1TYJ",
  "key2": "5V2pCAmqhXodeZXmcSLYB8EihpocHsWRNBenxPjAFFLHJcWoiHeBYCxxa5yDmpBPB4B1iijBJ4T31Hq1VwtDf7UD",
  "key3": "51iwfkmCgZXs6pnXG2NypFaqK3FZZCnS3eU1FmzTVdwwz75YU89ukKMUDXd4SyUWZQwKA2J5JpkWkLqmUFV7QRJQ",
  "key4": "5VUMnqohkpnyu3BPV9XaCDt8kJYMdUBTKs6wmGqDn7yK8BzLGbwyc1MfYF7dg1AddmR4K2PmbMKNirPvJdiWBpAb",
  "key5": "3JMDJEXKbnhpjZNkfyT5YCcVayKJdMSiFBULakPuiNhMbMjPUqjyrg5Da3brHXjdZknQQrtToLynFHNbbBdC5KTR",
  "key6": "5B115vNgzmTCHcv5tTvQeqyYhKDjQA1uiee3j3vmCnZzUzAZYHPupNDnBBfn6bmfDwN7nf8nZt74RDn4dq9MEzLV",
  "key7": "36dRxmwoAHBrVzFuZDzYm3V1BPQSuYNC1VhrQanjbi8AZG1uN9yEw5DyM8syTygBJ3vVT3Jfgfgp1HbH8QM9z6MG",
  "key8": "41i14e1h3N2QuT4MpoWtAH8XzjjLaC9PKJ8L2NUU2Nr6QDqsmJx4qmuB7rTzvS5oXZ6w5kSA95FCQWsB8oP7LKFD",
  "key9": "3yD4UepiZAJQRMCsvsgYFtcoF8Uk67Vw2x2k4355TTqHZvKpCXGRxpdrcJYFohag6ATGiAipr7v6WJnXhpG8ohRE",
  "key10": "G2gR3MY1Ptdr8zTGQrxQMXdrtwckmkjdc5ijxZzT37e7xDSiiAkGDMF1m5Bba29L11TvMqCCSx4UEZXoVeUXBFU",
  "key11": "qn8haGSsd6LbpxjPyNbqC4MVttMzMAziZBsT5qfPuhAfvQRwZyLG3iWujLbKUHpHEfdnSXKkv5Qg88RozHbVdsk",
  "key12": "5j1FCaoMRFpdfN6E9y6GmcqJsNQ8aF16m5qD1z9oLpdBSBpPD9kJxM71PtsSYudbynFpZQbrK8nsHqUCt2U6totB",
  "key13": "4enj1eXvmoQWPYQK7qVRWUPqhibvNDvoEFXRhDPYvyjwpCQ3X1kXh19J9aTfUjSD9kNpkZJT8wcPTimtmq2XX3Ea",
  "key14": "2xFFBZvYGrCT2iC2SywSPsD8KLQCNXKcf1WSS1BTYmn51aXbTRqsTdDJEb894NUx6okFFGaHUTtNRPsyYeZ6dMuR",
  "key15": "HBRAdUbYPPKnMMaF7ag5x3zLj25DmvYYgAwwMQhDK1qvsxUBnZMpZ5efmLGxeBLQMfEipP8cV6JYThr5TM5ucw7",
  "key16": "2qXmwXgM8BiwmjzkWqirQXqD9xhcqJqHMn2S5T6ojnBDdHCaBee3kq39s4uvPXiELk7ghCd3wFFA9b3fZddVsNfE",
  "key17": "UXk4Kz3CMMktGDWqRrNz3rCFKLeSEpJw3VxMht37sLXEx3hBCqBbuedsKCQzUEGEKhKv2eb3TZCve23PnpyzWmq",
  "key18": "3wkJnmZa5SdnG4HNbe344rZeoHCr3nd2VWvMG1AQRVhAzfHRA6yY8thvM62FtYNqSoFVaAArwAg8EEpqQax1ZNaT",
  "key19": "2TKdqHu5XwzHbDpEkpNQqnDQxje7241hJSy2T2rJbTnn6ztiTr72RC6scrFjiYkqFvKuVkwQcmBXCTYCSwXdX43z",
  "key20": "WGdyEo2GVoG71Yotn83rd5SZMThTeotd4j13kHLN9sfpVy6PzbStyuwHeQS8FTz8gRy2n1YWkegkTKTfAs7jPsM",
  "key21": "3dRVBFAaNQmZheGHG8CsGDhxe2TRm11dnguMv4VmK82TKETPHzJHrFE4i6xaLhD5HNYQPNsE2S6ZXxN2wYKdHebY",
  "key22": "5fSXdzLzGQrwaa8EEXnNF9jzggRmEJWhGtRGDeiVdwqsoVWqnG9dXApiUiPhVxRBNUVFjeiCvSrSjovbbdh8rK2c",
  "key23": "2jS6dvURvWjg8RcwvdfBrMoFTaTntunFesYS21QvyvsujSaxQFmrhczx7krCbMMxT53Unpbst9NLcMJhx3zN7RCn",
  "key24": "2DdmFfKYXdsX5j3fLaUD4QPG95yHQS7td8YidGMHd1xe4aWZcP33LpMBxM2KHJqba8kbo5LgXcktoiJy9gRZn7DR",
  "key25": "2jo84ZdAzmBkjP576oJHvprYfmPcJdvd35pwSgyFsJekU8gwFnnsdjrNcYaHcdtLdQAxBRvjr3PJqvCRgQ7ET1Sk",
  "key26": "3dTZgHpNTLp6NTqFWDnio4vXoewHwwtziS62AYn2fdFRaqcPEN68jDt4bMMGAzKfVAf2ZJymq2BKwqRBdVdH1AGK",
  "key27": "3RRatoJ739d4LQMx5cGaDEN9m3kCNpzjTZVCRK8XZZ9WV52y5QEUmsnjJk5nXpUZsK6f628wdVEE1uUKBxQkQX3E",
  "key28": "kSySPdeccZdJmYGMHiLJqrZgKw4yCgSHobxKWJM6iYnMiFnTuCGX1JoQ4KCemdt5CHdAP8WQvki3JadeqFvgzTo",
  "key29": "5hYuixrp9NNX8Wq78nAPbZe5E1zMYV5Asoum75H44xNJVWofcCMb4WNZyqqWm2eutDpNEGKtLR5AHPtED9UtT6cX",
  "key30": "2GRVfYBcS88uL79SbioHyemQWpMTMU8z6YGeLZB2qghSgK3dKaZYSD4yb6wFwYzAQhUyYDMgM1qJP8dMJmBmJiTJ",
  "key31": "3HVjZeaRk6bS8UwfJoZp9pStXHY412VBziTyk8oTKc7MCBLkc23vjEhf4Qbt4qZDUd3q4zrs6yAEKhyz237JZ9HU",
  "key32": "F2zoaAiLBNPSHSNdSummkf6wCSnHoYa9jZBwRqPS1Vu686ztnZK3pjtsf1vHyMTqNNads5jwTbT9hyTbe7Hi7Rn",
  "key33": "4yqTYFNPCokurgVqfhxTsQRrzH46fWHP4Vz46c882KHC4KMFCjhUzuBm8CCpcEyNRo6ju1CZqMG8zRh2YenFwh85",
  "key34": "GuMxgGwnMokJ8tuz3Lk89a3qQ9rAkn9ELBsajAzb8XKp8yQ9yE1mSgSpS7GdP4QrWEW3yryE8YxJaVWvBeE42uv",
  "key35": "386pQEszzNVb1QLFpHNZagHzPCCgAJ57apiE2b1WzXzmyurFzj4zqQzx85yt1UTYdvnbVR8intqJvKQtNC49vFm8",
  "key36": "2FShTRximupEqAEm6VPgKeHMpFEqGoL6U7WkrAC97WrbF5RB7SkFtXVXP8gfxDzy6eHWvZhZd4GnAx43YC6bPV12",
  "key37": "BxomiWyQgosav1z13ZR4Kd3Ekv4ZkM8mfZUEB6WhvysJ6SgvPkNH8fZrU7u8zGJmPASJrUsMt835353gwFjwCUu",
  "key38": "bzE9Kzq6xNxy8431D9jEjBKEF5wbG4owtLAm2HU1ruVpahYVLaEWm8P4ZUyF8WHuxJStW991JfQFGJhNGsEvdaW",
  "key39": "64JFVT6xq8ZzfJPJ75NNYeEDYc6WW7vA9YJ9qjEKPZofiJwBHQjzA8jnrLYYq9Eitnc9P36QLbrzY2VEwe1pYEaV",
  "key40": "5sBkuCPJgtmsGyM8dMNQoB424e5zMi3Y1kJoMiMBvXPJwGafsuwF5ntVNx2AXUpUnincSiVYmNsMisizturwcZr2",
  "key41": "569xzcJ11nkLY5is9PFVFkJZiNXHsUCEzbAyNYgekeFN4mfHFpitkyzuacnrz1WySVcfFGzwuTMLxYmfbHUgKcvK",
  "key42": "2UMxhkLFydwqAUw2hDAwgq2LgnDsxryvGYtykfvUUeqUyUTgRYp9MQkDFHTiB6rCStGYwTQ6AF2RCVxdB97V8gsS",
  "key43": "3rmBzCEJkheMKxBgFfZSBMpkCMcRd6UYAm23BtTUhyhTDgaEUnRhrxoNEtY1p6nW3RLrrGkwng2UY9wF6rncxYac",
  "key44": "4mX9vmp1j8mqrvEVKkgUB6YzbThBNaDxtKVixL4dFyebThid8Rghg2gp5hDY1VboXnBVJZPJi9AYbzAoRgLpMZeM",
  "key45": "g3yuHfURMJ6CnCdaMZ5v7m1WUKUtj7etzxEJF32sxNy67iKwixkaARZxCUFbCndPgoSdK26cpndkikVJAe479K5"
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
