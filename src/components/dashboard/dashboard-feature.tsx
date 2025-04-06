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
    "4mnp5MTPiDLcbEXSzapJAmL6yTPEuqhUPhB4srf9UzkKtwthSZcqwzAhvsej1RkSHEjXrgxZx5LWUwuqqyYsgyoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFuVEDaQztvpbHroej4a2P9s1a1hN8a6BoE4LTH5RupTpo3FLFaH2Hx1MWYPYF6hdGw4rLQDRU9edxgQxptc1iC",
  "key1": "2dsr4GERRdHX9cyt8HF4ti92Q8eVVsbgccVhCte4sApNjD7tJBmEa1eXPFAvD25S6NiM6gxLDx2oycpYRwkLj6wt",
  "key2": "4dwfykQGcS3hq4BVtmtXoPMShAxo4rMTz4QP5vu8mwC43QWDA6MGX73aR3WGEtg7guxMo2s57T4YvBpkhXjjG9cn",
  "key3": "43Z2HW1c113uRfJZhGDjBMFkfgMKz8h4iQbLMcgGu8y2AQAn5EU7zLprphSFBbVXHFfUdfDv1fHcDbTnEsHMFxYF",
  "key4": "Th7nRKNteihcUrLzU45rLLMrLqGF9p3UhPaF3zcL2Z98ivLPMgtDB4nK52izU18BSyWp5CanbZLDtMkVfGThYER",
  "key5": "37BCNe2H3Fz16PtX4kbX4zVYf7zjV7qo9N4da3iYcjwYj92BUD1NyGvD83JkuMBEaQgrnDmeELwPynT4THLmTjon",
  "key6": "hhRxfFvB1HTpFJmETA7JKYCgBczvPRKsYSztAkNdFKLqhX7sQVuYVPtp5qxd8BqyXFD9NRQRr97crRpbESqiWfq",
  "key7": "5ZpMCmENxDJ7CGyoZkTXPG3KAeK168eo81C1YRDLvcc1ndzQLekhTWb13hrykPuDHjTndFd3jsxgBeX99xzu8ZRk",
  "key8": "4rZGd1czK35ZQVRMmG3SzdvFwetkH1EYCx3x1WWrXyQDC8yffv7GDyiGZLYqgXGPmZVhhC437cXL21zwsystXQUA",
  "key9": "4QnevSUxszBy6sGV5NAJfy8d6FhTmeWCwrp58pCCqDCJH12oMdqn4RNRWBiXirNdXLy1DdGiQPBpZV9vAgTCheZu",
  "key10": "43HrHwyPm5XKzdDjfGp5ZX7NKXkK2FPWMEKa6kTXCVAtuozgmELyPGRvrfX8R2CRKSfVaBaFfAuYbgeYcyUGBd17",
  "key11": "5tvRuHFeUPe3B1j39ziiRjgGm8HwcfDgmbWT9pQGbgiUHYSmwm9DM2zpKUGwAFyYk7GJfTZSraJ12hxBtQz8ZPPk",
  "key12": "riicRjKze3RMXMpxzGTUvWZJ5rj5nKVAxJ4s83giZAtCLWi4hXRbnWnUje6K1xbLqfb84vmz857nHqEvbpmrALN",
  "key13": "2eKd32aphevaCxGBKJwazBgL3xbwykc4GAd2VvSzAHo2ov1R1gAENLcY6qVbjAXmNLnrP4Z7ATRJvNbKEx3gLvdu",
  "key14": "25XFvvnrCW8Emwhbk95JUYinpuTNnFneHAFk1aKRKyzbbaAfk3Jw12VTUvSbRKwSxMRsFmunFy715Cr4H33W9Xei",
  "key15": "b8c83zTXDD3pYFwuoBnuASVHu4kCGoRzosJVBwLExFnLkZkvn9xs2H9Gq95d1BNNCjPYPokAQKVBY8ov6tQjHtm",
  "key16": "wd13yvYvd5EqvgbPzu1nfxDEuoUWp45cVJ6CDFysHSjem9twtToZnTdiYQ7AYfJwBtPkx57wMXqDJ1ocSWcmwcG",
  "key17": "VLALi34EGBaRT2MjV3ASPZx7QRgvgCktiY3hUzrVwZYidRwBeoYUUKHA8ksGjfY3DzVbk1UYJ28iSBfhA5WL2pS",
  "key18": "4xdXGxSZEAqzn7d1wvGyT4svk9zyLJyQpEcGbqVkDirEYZ1ETVThxCdQWunUHCzZW9jR793EMZNCxVUAsbqjMm7w",
  "key19": "55HnRs5fZQwCppoejyrPD3MsELdjQ8K822o1XAkihCXFztfW1vpxbi9ybHHJD1ymerTtNPUHqwT9MZdAgLorvU4t",
  "key20": "DNa6DbZu9LMS9sSdTSqUGkbTJwUGWt4vTqQSaJEEBvLUw9WMpizjvQAPpMQrcLmJQrHFQhLgpWBMqkFpya3GvzK",
  "key21": "3j2TnDoU33qegUvSGq4eLUP5grWWNNFuZrZnZjHVt3DGG62KwqdjC2h93TmvE1VhTM5Yrb2nVheWiXMv37PzAvye",
  "key22": "2Zw3vYfBiWQJfkdpZppFn1gVTN7wbvjGKy5Yc77tkayQhb9AZ7AnfjCA9GfsKE2ZKU75nkTNxRMh47gYBi5LdmB",
  "key23": "53ikxgZ9umd5oVV59R3ZaSe39GSzmr3rby3PRm8B1nGjuvgdiQyk1ojuW6uBJrrUrqVieKQbZhPhZAm4joN7qKzG",
  "key24": "2wZZh74bUF6V1KyJG3VQuiyJX2LHBQoWggy8dye4p9eDAQL2qfXhFQ2RFwcEMGGxbUbJfiFKjnCB8nwZTnss3LiX",
  "key25": "4pXU9nFRjxxaG7ch5kY68ordozpj5SJ399oascsBEr8quCnX3QtktY2rb3VQvLdS8TcGYAnkwEvZZN2WMqT16x65",
  "key26": "7bi4g8NmrQWmMDnQM2YB8WEyMJmskrRNYTZPzdydX4sggRybjknkdLqsRPzBfTHsUzrxkXJ6tGKMVfmGQU9HxRC",
  "key27": "2afrqDzd9STtFHMX1uPZRfU9vvakesxhibX2kwBwmL1ZbZmQ9tCpZNBJ5F7tYuayGJ3mcUK85buYc2Fz6dfFj7gH",
  "key28": "4W25rJxbJSHapeSPgSiw1f4PGk2Z7iCgEeecHZn7Y2E1cUdkerAjefNMZxs3qWXDozet9VtYDfn71HJs9BjpKXaW",
  "key29": "3R5SmKjQaFoVRFbzYeB7tXXHW3FhQ2VkzTDJjYmgcJas1b3ZUpaLkfpcGAKgH8ERWgm4tw1SiaTomjCVSD9ZMsfM",
  "key30": "2RxNYHW1ebDDxu4Y5HdJwK2aS2iQ7xYr9fLJSv1pVw8yEfUsZtXVzg5GBr9cVdruBUBFFye8HMDP2BLsJmXGx7tE",
  "key31": "2qLcJWNeY6T3G2gWzrWAWpZ8oLdVJMRUvHREZpEqGdoMELisubksgwZsx4gDLGyQHMCCMqpExqSJf2T7NBkPqmAJ",
  "key32": "3vknfPE86nnLN1bk7VM7KtfJatYbTfY8ckQwDPNzdmaUKHmKXcHp38MKN7fhqY46SWV5ZrbxrUwATrS43MZs8Hze",
  "key33": "2pxZ3xQk5XYMYxGWEJKn6R3KGgy2nDH9jUxMp3uG4gbjteD1p3T1aDC38qS9c8obsP9hgeFo2RMoV9WpAnsdQZxF",
  "key34": "2XBGPYCCNrnYczBbpm1BeNkQ489frjQTMhYcyK2zNYosxVu4dqmDKaLbc55PhpFHNiyEYmbe7zsafX9gEKmS3UHC",
  "key35": "41eTkhMkVs5w4GCxKh1YkUTZky4sA4pu588ZJdy5vMoxZBDvdAL9VC4NS4PoPX8wtM4nnChbfFpNPnmixTMXYHEw",
  "key36": "2v4HDwYxGCfgSfR6bc9M5woENcVK6GS188jP5xA4kgPzffJFSn4ybA2ewt3XArqSsepYe9wP8EkH88DK8rJU4ZaQ",
  "key37": "4FiaVXZ1mBbLjoEzMCrAMBC79g1NMzNgavTqhmKtGF45CijhT11yK32Vz4GzosyzPus7m7FvCXEojYtA3bMeG6Fj",
  "key38": "3C4PbTvWqNCEfKP9S1akHFttBG3VRXrLmDLhTeD5WAknFCtgRasXFnQCxdaDA77pr7FJtcgRJAB447ALr3vTcaNN",
  "key39": "2yXTFMs431NWMav1ErTNPEDWJmsWnKodYnyV7GG8tFajHhxJ6AGfrGKea8wTYPRriRjqN2ULDYyUNwK8A3mihXr8",
  "key40": "FVra8XrgZ1xTwpznLVzM1d7PWon39yNrhtoQaPgnfHhKfrvrbFz1ca19cfySoYXRmw7JktcwJU71WPocxmnbpwj",
  "key41": "o2ie2Th2wodf3UXoi6E95PfDS8FaX8qhqWeMsc1TL3DBv2ZzkaxEnGGYDSVf7LnoxgbRuACBh8EushDgsZ7uBcm",
  "key42": "SKXsFe6KrY4F4m4Wbi8cV7YT4E1uY7esf45AqK9MomtmcZank6VD25tNxFm7FCabWggdkQz7NY3f4X64Rq4CUUd",
  "key43": "5vDLaY6kTVQKLy21FWyVrSrJkn33hrP7NES5bJiKvTHXimS569Qe5SCzxWihJuFG2nGkztjm98sJieboydbu8CLa",
  "key44": "26sGM6miQ8AqSrM46rT4DB5xFWfeWXnDc655ie92zeJmbVj8AkjMMh6xZrz4mtM6DjZg1pb1J9zqvs7DoyjkAEFa",
  "key45": "4GtihS5f7ZfPDS2k7fqpTjbJ448WGcGbPLvFEqbvqoqn6nSKe1factERMc2YSgGWCwE7nwcsrdguka4UpTTiQmQc",
  "key46": "b5qndTNQfAB3NifEmANvoGFHxd89BEtrVZiYESfFuZbZ15LrFUFiJZkiyFe7cGX75sTcJsXaH6FZArBQLrGRYbW",
  "key47": "5iAwLTo8h9zW7MTj3e5fVJpu7nKTm8LqUjMDf6fTTb1wvPkQmaB6izNpRSbiZsp2dQxrcR1WehYicYTa1cNZdRyY",
  "key48": "4wsQifoUqB1WA5Gqp4sW7Tmiz2Gk8CTnFYPVyH2KDiPVARU9BuffU11DceDP8TSTnLn9iVGVG1eNm422agVf7G11"
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
