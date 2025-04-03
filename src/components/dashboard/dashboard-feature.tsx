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
    "4AoKaTKHDmmq7hrLKrmT6zDK8zLfuSvJUDxVkAZsR86WuUz9RyhcdLSRiQhG6PzNcas5RZ9kwqmzHWAMxLstQHVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tBYcvemzkVdXYTVeA4HWbGFKZaLGijaSv1fnMnuBwdX2wzBgWmrMJfeL6zkW3pvqvzGaeBjBNftkjk6enzzAYC1",
  "key1": "QfCxvgBDVqHyX92VQ17QEqNpoFLsNY39odxDd36hVzCAJynzVjGfPKSvgfakLAkvZaKaGLWFZHhJ6ccxzX3NtQE",
  "key2": "snyjAsL69qc74ZsUkPJXZjuk1MPVXXAADSTGKdU8CDYamF36po9sVyPcbPq2rqyuuLiMgGCk9M4qkQGRJG5mSDT",
  "key3": "1Quhj8LFNwSRHk43kXsMFLu3sBzYpP6jn3HcD9naCwivaEPoRyG7b5SQf3s4ikreQ7WkB3WSXasiD2MkR8cAQmu",
  "key4": "2pTEoC8ZaM5Ed96jdcTrUVTr7RXHA8jXf3GLL9goBWqMUZraWkB248YPfZCs9cs334FZQRJkrVr6Cx5jqbwEiMoa",
  "key5": "4o46CchEKvRCMA7J5QnhwYjrkMMFeznpVEebk6gioW9uD8UteMNbf86hZhrs146dkPpAsqYE86Ut81HFNDYcoKHA",
  "key6": "15ZhKLvNy75atSGUkqKq3x1DebYfoQW2q5TBGPWUWrTF9mkPcyAhY36ovDH1gnEXWnwNLPfMosrkBQVDe3rFFpg",
  "key7": "2RU3yPtct8dJGCmdEJKCBPCNyj8BC4KdGv2ftoJUsFUtQ2BePwX7G3tRs9JaCq54P8c4YWNf4PxwUTgDBw6Y7nGf",
  "key8": "25uKKbxjH17o8GpZhj9fvQjmk7GVJqoJnsVMovc1UDhpjECaPprcdAdJhPvmvoVPGK5UGH7YUL3tYGxXuwCGESPx",
  "key9": "5ZswetojuvfUsRnZBQSuoctiWEpaeE7CqKx8dbN1x3PSmjcV8J6ZTcUVCYNBUcHfUU7xh4aRefsBAa3dHg6PfZfz",
  "key10": "22ZshNz9n1gWxK2NrzUALXJMMV9oUYnB777iG87XycTN3AMkQWoNiuSSG8UcPjHthiW84PnHrS63pPzb1zuG83bF",
  "key11": "5pFkVge1JUsDpiK6uLKvpcim5GAXcJ8iFc9nqe27oSwJjd7SzQcJfRsNHkiwbYQ4igSzhw6mqwiqCxngpjk6YMe1",
  "key12": "2hn6P2WS4qc1EQZH6MZVZqEXP2eSietUTTQSRCKFnmmGnDnDnyof5qEsQUokH95pWFJ41NG9r7dEd83WnJvVxLLM",
  "key13": "hxuHH6QA3kS7iHC7Rbjvtrgmdqa3taYs6Cu1vy2yXabMgV1fjrWPjygq5T2Rg5k7J48ytxtGZJXjTX7LHjZxTd8",
  "key14": "373yG9eZCsNZtQa159BeaV2aWiFY6pT8qSaat6BJHgpnBJPYo76v7Duea9tYcc8WEk2NY3tBwNQ2TNMYUSdmBeCN",
  "key15": "v7se2Lpb1zn1aWqYL3Fih7c99qYtgeYVNK7Tbrichijg3ahDcP4SxREf6DHuscxUiMJsWUSKzXyd9D2TwbeuQtT",
  "key16": "65jssm2QZyTUCCPiLBWhE28jRd11vFoZF4ysdpv7rh3bdDLve3CE6osYBUdsbHADEYWMbK4UXSqBbkZRkdrJry3G",
  "key17": "4dJTdFitgZfN8WwNDQtSwomQCthg4P1p6PzixyBvKemWWsf6EMcWVHANXq9vroHqb7vWjD3zrZqtsymDjfgWvwoz",
  "key18": "2YX6FMfsQjdAJropr7B6kA1yqwiaoy32jbUkSs7UaK9xQk8DfMAGjYWZypQ5ZVciYUn9C2D6yuN927cAkW2omgk1",
  "key19": "4GKVNFbkcrmenbjLToR3NSkh7kjpdgEbk8jLyZD6Fndvqx1PGKhwT7akmKftg8BW88yyA6chqjgDtzUThSZ4k23j",
  "key20": "66YGPZdYmbnApwmviJVweUu47KLnTkimCsbY6FNfv7qVES1EYjJzBjK3hCr3ACWuVeVm8ZMjZ5xFuU6LnRgVwr5N",
  "key21": "63EbbQ6t4yLy9LbuW47YqMn7ecdEz68bgFNBuYraMiUMHqFwvZ2mUR1Nx8ivD4sZi7xrAeUj5SqSbgZbjoqQkccH",
  "key22": "ooqAh2YzzHHC2KyVnffEZbgqwBMtAfKTz4by1xBqE7WbBczD8HkAypWwXWwczDM7VF3WwrTu9rjmDStuQSybaUC",
  "key23": "5mWz8zom9kaEXZ3KdRkiQry3EsSshxYcvdR2Doiq2igExfrEnM3VyzainKgiCCAopkr8AyNDuUNbHw2UxstqBrAd",
  "key24": "RypEeS11Ja6UXhvD3mpgGhG3qhekYZ5zfkj3eG3if1XxXc4TeCgvmQFV7T1XJhMjQXuyu2g3AQcfnNpJGPNFsT7",
  "key25": "TrK6FmGjCg3fAaYr1h2vZ2g1HfnrAexEEQEdSc6ZW24TUsLfSVXN1FDrH8exh2t9DrYjy5eGGnCVdsGqymtnLqL",
  "key26": "4eQh2WzM4oKvn3nXJjyLxE39CDQAA9kpfXWNXpZztqAXvUnW4vQBUgeLt64Lcn2U9x235xrboX5KcCW4epPJskSy",
  "key27": "3d2B22TV2WBcdNc7F5HFZLCS1ot1kb38pZgPj4sdGXkMzKqEfhfH6ghMbGJdbBVRDNVP5JSGJ6Q1mLRFmAQZzdeF",
  "key28": "5NQ2foPMbvAzBP6yUbpVQz3so9iUsedEXYJckqdttAZQ1FaxwHWAdgkabVrfvkfxGaVvaWRKB8hArEsYyXVrDH5G",
  "key29": "2gzdRMsGbYaczWYRMMFTjZdSf9bDTBSZD6mSdtrqwCUyDN8DTd8Cb8dGQQNxJk5SqKGc3vDtMg8uduVKsBMLQEuz",
  "key30": "4cwgsCUcF9UU9VRVE8Lhg5XnubNDgyYMoowsQNegZybpCp8QvCDuTKczhRe57CyDeVJCsKE9uwCj44XHtiLphT44",
  "key31": "5oAxXP7yo3dYgB2EgV8e5nr4kP6BKqdk1fyhtaC1VNsyXAao71P2ATM5CRfMoCYNCe25Nrg4dabyYKP1m9UPDZrs",
  "key32": "3yeGN62fo2yL5cpxR2U3oGws5aAmwoczuh2WVPcH4w6EB89nD647SGJbwNSQhepJPnnJBcJk2mLkq9R5Lemiu2u1",
  "key33": "4zSPxnHMpSbv7BhBsf1qkcvmqm8j2a8TwEbsig6zcpx8BkmmUhizCrUZFEmXKDK1gzADq7jgdK63w8mp68rP8Hbp",
  "key34": "5Y9Ty6opqsQshkrqcRMTfnt1NUKuX4WN94jHFqy5HYFxcPFpAgw6ABzFVctcFgNoNKz743BrkcWyUKJuZaWtW8WU",
  "key35": "R7oTZEdssAUy7wJwKvDh1zE3SZgRc6b54f2RSFEofjpbYPktcyxTqcPpEkdaoqjGoN9NZaJFMJwWmxzccjszUPn",
  "key36": "5hujZBS38UbxMfj8CxfxvpT7qznC8tovivqGsGfzKTzL2V7MiTxZTYiXHrPkZpjcqFbMjsr9kRVGbdwEAwg3A6Pf",
  "key37": "63RC79poAnxek9QjfrDZyeXXip6dtg4kEK9X2mgFouGvrr3wQL5yVY6XSDnR1eez5oy2Rt3FxQ7LJR572ALdRnxT",
  "key38": "388AVzca5VGqdCeW1jk1qMSg6fao5YwdZNmSd7VRRYn4zu6U7dqTdWm9vj1CMPYK7KHVJLKFo9cNMVqxJkXCjuCv",
  "key39": "3gREQcEoVXM1L17FaxpuumDdrdt8NNLYSbMQTfV6zjhog1EUJCtyQLNVcs2ez7i2dgKUqTwNP3T8qPsTEru4wdhL",
  "key40": "2Ef92Q1BAfZVsi7ptJ6TwmAmvLzgpZTNeXSYXRvmNpFv3BKD2FkLhHck6cM3BaoXbYmEbEPaGKVmrx7jQLHwxJ9D",
  "key41": "3yH818sV8bkKEWSP3eiXswZYVyneGoEnRma6JaUsFyeqZxG4rezP9fRGt6Rfp2qnaLuiTmju9E6HLDiVqcCzt5Fk",
  "key42": "29AeB9DkhPE459NzdYwZseNDr8NtNhvcVeNafKweh93W8winkNebyR9WJ1vVqHVJgqbbbzkjXT3TWEuRt6QTN9JK",
  "key43": "3Y7qnwt8gWnKpHsBz1txWyHNY4TwpndSL7DLmXYw47sAQLUm29oC48sfA8Mt9NFhmpkLdxfkWUJiuF593PuaAR9P",
  "key44": "9PDWrnrr9K2RDgFh8BfDCq6zX2Deuc5msdZTnc3ZpSmsx3yJ5YRBEQoUra7t69aWcPuVTgzxH99fyKKBY5uwkeL",
  "key45": "TNg9YPWJB192K61PxErgtoWBfagYZLgnSpNNuPecP9VWncfvDs54kyx7Rvdq8yA4RpurL6Er3U183CUwB1nXLcJ",
  "key46": "HKazirbhiw6n9HeGzMapmX2sNUxuVuKCekfvNow3NUCaozToJeiETMSrUg84EUepaqLdpL2qrnNZu2RjB25AjZ9"
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
