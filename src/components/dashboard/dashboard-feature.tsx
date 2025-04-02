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
    "4CRoNgdx5iF4ekjcXJ9cwP2FsbpM7sEkmrBUkzybBKLvNbMgBCDb9gGYfHFKPQi8SBGmsacTBCoARSXymh7ka2k4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41GhBMYNuM2B5h7pHuC1cEhcEAhXps5SMXSEkWC1hWasGznDtLwkScsMQAHR5NTcv5wNccqzVUcbzvsoB8pN5Va9",
  "key1": "3SHVva7VzPXrvJaCahNCrgDmTnfqF6ytn5pCKb5HjUVqoUhwiYmQHLpmmckmkxGT9t1QnNUQuEdHhddK25CwSfSP",
  "key2": "2tTpYCXuv5jfe4Nf2TopHnXWtMHy8mf56fPuohfC1Gk7sYqYkhajtFhk37iu32NYq5ReLBRP6Z1oNW5M1rmSts9p",
  "key3": "4K9rQjcqyGVnpY7eLmeJSeLd2H6pYo56NiBp79GjMDWd5dAvmW7zkyfNqQVJTefNHeYSHhUrR1U8B7CBy1SrXxsH",
  "key4": "2mMnULbEE54ACJEKdaxsYSdamWFWHoA6B1uqKwW7vLnDx7v9QRGTpGcsKAXCHs2CQtGMTev3gnWccZZcNLJWDKPC",
  "key5": "3RZUAgRbQJ8H5rAKsLbbHkkB1B4jBvnuYudGcPMsTJJhonHBFXcdSo6WSt463MiGhThuFYEnZFXrSiX4no2LG4Gc",
  "key6": "4CioRdGuAbqFwbs5Jqp6NqrHQHvxNq21C4UKB8vXVfmN7fJqduKxGTorzh1RQcZiirCDdqVefzusQ9kr4G1THrhZ",
  "key7": "ZFZDHt2Vk46HeYA7bHEyNjP162QsS7EV8fYbHepqtB1Pvsu847Uknu45uaS69GBgzM3TYijEeAy1JrnLm3soK1m",
  "key8": "4Ui5ANwVKkq6bHH4ZESeKhppXqkowJPrUXnikdM81FuLFg8JnQgwGzGPN8XqBFicngavA9BhKbGtuFi5KGieEBpd",
  "key9": "2i7W8XUWbwk3RbqYhJ6feZT3zVkyrKuUPCB8NvPKBEdGb2s7zLkQsR5bZZWfPSF54d6jqWZiNY6GcPPYTDYgSAC9",
  "key10": "eQeb3Wf5tKxm9gHrVKiyZeYHf3wRjVihB32RwnVJeMTkmPacANMxZH4rcJs57W41g7yV7W4Y8vSYn84XiGMxYJX",
  "key11": "4Y6Nh59QCPSrTdPpAaB5eoMnauWUqkSbdtPFCDApVdeoN2Dj9sFxfxYdjSqUgfynXBZ1xJbm72BZo2sjranCFbX1",
  "key12": "66YwLAPZW4C3hvL9hY6xBcNiYqSqqgT2txy79RqDDtdsctuXkdy3KKtD7VAasCQrbyZsGFNNXQvw43e4nUaAWysY",
  "key13": "2SgVpBnEYz1nTxTyEt9FaiVj5xn28paGvLDH7QmQCSbjeMugYFrDTwkTFAmyAbtRXHMho79uDeYWQb8hfXyGDwTG",
  "key14": "PvnLS5CSe181NvDRZPwvRWyVP5wzjvTeV4RJdwJSfsbrGnY8GkL6F1yv95VyYgkqbqkEhxBHGSusXyDinEs2srX",
  "key15": "362dWYUQHr91Y99S8UPKGxM8uiDYuX78feZis8kbcGrMKzGZ4R9e4sR8Pa6eL4eDBVVwX1H7d6ozq2sbsciQM3Vj",
  "key16": "w55ZpJ7EFTUcKgmPYWS547FWEFibCg6Hcv3FgKSV49wkswAieBG9NjApDhr4ZyA7Lw9bapHsXmtV86ftuUdJC3v",
  "key17": "2NjZyFQb6MuMcsRt2kCohShUjc9MsmDP2KrV2dAbC2THV31EoNgREpXhSp11DF8rLuJkjkoFnxxr3hQdDLoxsckK",
  "key18": "236bH5FjKXQWTFziw33NwXqEAnmuRjyGeux5mp3yBGkw1Gdf7gmfpqD6Sftr1a1NF4GC8E4mW2qtQKmBnwwRCqFu",
  "key19": "PUSvVkiaeSRC1hWqWqxQcUq2dbFmWEGiRgu9da32M5e96JkeofFjSRxoQdmuzw7PG2mXhMWRTSb4TjizjchRRQp",
  "key20": "2FjXuqqTXws3LBJuGWm96nQiULc276SxwHzbr4ZKsHs6SkmMPjE9KeHdfomX1LmZGGgrgpDYZwUpRTpGFaVs98yw",
  "key21": "52ahWXbGYRdwP9oPgKMqmR2miQ89oFtpC9XFPkYniCQBbdx12vMYsXRmjLMNtauqMzW65T6CHVeA6Qr1c2hdLGKk",
  "key22": "5KDJvhF94Ywy7aZzr2FMYabmX2nqwg2ThE9DNGBk5KR4EM9T6942X6i1xyeUyxDbFDjnS6iv4hUSdAAQwmPYgCDq",
  "key23": "28kdnUe3SsXU9PMnMLGorxYm3QYoi2ce3yBC4tUftNRCvtzThh4p3fJfg54jv9XQP7eWvQQhjW6ziHiWUJyjd2Ui",
  "key24": "23kZjzty3UAaujh3e9mjKEAFgyyLgT7rdczkvTeChbBiYoGEjJrNYZTQeQBNcSRd4KePycvfhbM81Kqipi6UAhZ9",
  "key25": "Mw5sU7wUd9KUu3Nxn75BDYD1Ba6iquwYxAAmNQRCGG2VhGZ9mtEwjrgSG98hZN54PQgD5wZ37r6bprEbviYMFJH",
  "key26": "5mFd9kfLfiNPC6unsYWUC2uVpJiKu84AtxzEeL4JiSXX7WYWpXdCwcxxX6YbKioWtdCw1eEfk3vghQsRrrTCMWc6",
  "key27": "3AqqPoUL2bRbjf9ALPCyQDYPKjxYyNSPT3NRFe2wSLmf8KBvgAyZPr8pDYJPUFgBk1Awoutg8ag57zZKCtEWmYXb",
  "key28": "sJjLVwPdCU5wJVmvws5vnX1B6NEydyR57ymJTNbqaDmz7pYtfGuFttafpDAQ5WUCcnns469zMPyPufW8uvnCqje",
  "key29": "4v1Vi2gKdGm8w5ZBdZXqssyJZaJVshubnSq8uEFWPn8HiF1kdmBaXopRovxeXg61jy9pwumUKwkJFJcVaRJ3XrpN",
  "key30": "of8zfukLyAUizknHrEcBUn9N1H5gmvuGGeUNVoqbXJ9Tm16inVGQXE8BhnVHebKaD7XN7zeH1aePJh9N7mC4oig",
  "key31": "2G8gazgf7iyMG3jyeMabKdEen98jFq6SWRNPcSZTBf7SNaDCCdYdQV1RfdFRgEdw9tAJLpUubmbEJiAfQWwdSgc4",
  "key32": "VSx3k4auqjcW8AcamanFyKLP2zD9MXn4uMUo5HLcXha1ye972H4gxjCArB3vk7LNz6HfTTvY2HGaKAYvzoCMXc1",
  "key33": "523XFu7EtuF5x4ixrkSzSBzqDAr6xskPXCraUWHnxVxRAdrVd4iEXP3pzw9jjpUap12LXotuC5e8ivQXBDnh3rV6",
  "key34": "4xCGqykfSiymhQMq64g3xwBzBP2wEeFNpHgjaaYPQDRuauhEYCSqRkeiJ5GLyLtCK4DvWmsDt1HatQgVtwuBDLLM",
  "key35": "1ZHKLdC7Wmu2eLpMGmPdTxXe1xQtdgFpwMA32VtGn8BfQ537rMDLPQBZKCszwMmLSFXrKgNYG8W7qt7ZkGAfJUo",
  "key36": "4ABisLvuEihEpX5AXh6Rf3ZDM14mm1Fy9eB8BAMu3Bn5kXvdA5FVkGjx3w3HvjvZS23F48VHLjLoh2VDtRXdMnbP",
  "key37": "4QbNQXp3ASBtLV8uF4CwaabRhY8ngx4Xo1AdihqSLrWz6XuBodNv7ZiJznm1L4qTg5isMiRVgY28Vi7LwGR21brX",
  "key38": "bX9Q1U68iBxt6Nc35xyoZMSqKQUxmqALsjpufayzhgmtMsU7nkD5wMENQ5CWQY2arn8y4Hj8Q3yidXqXXV6CDSh",
  "key39": "2t43VVRxonZS3tSPh8zPfynDbBCxqQ9gyep7bJ9qnBNn36u8NDeQCMiVGoaq7KcKc3kGzEp298Vz1FaBighruzHT",
  "key40": "5J3kpotr8ioUfz1eoRVn3mZYSVXkNQAU1p59AMv3hCPiK7FYWhBNqWuaojCibHxCEXY8gR9FmXLf1uVBnpG8Lc5L",
  "key41": "5Gqfe2sptPdqhtPrt42QwWsRySD1GnLCKVjxF46XPXsgztDscLw7d8LwAWW4Vcc9gGRgGVWd7MmpawCDHfY1TimJ",
  "key42": "SJ25tvgFYukPQLGz2Ei2kDkyi1Seu1RNbrXagHiuoqK7Z7NSj6oXVLGbZ7Jh1vc7dRkWV3qGR578qiAZocAm5v7",
  "key43": "3TbRQwKDftrH8bExyuZS3RAE11KrBTff8ZsD3oxXyP6Kq7aBbxd4Ec24uGGPK9CZJ74cXirLm4fvcwiZQcEavFgh",
  "key44": "48u745Xai3qCd6MvtqU5NFXiCU4ZnkJxhjjzoLvv9Zu9xUKnZDJNhnUF7tqzPufSo3ZhvzrCGzU2qQyBJyQNpGzg",
  "key45": "2qDcuxXP1EnLfZhHfZnQ1jinkkcsoCjwBfUo2us9YokC3Bej5YwMKUh4yRdLW3jXWYA1sEVcbTMDq7zaoG298b2a",
  "key46": "4xLsAxH37SvttPPfKpwXZFLcgZh8r5Qbo1hvta4GKoL8W6NBCJ3HEymmAD3piF59xZZ17BV4eCuopXbUn6smSh3j",
  "key47": "5esNJkCVzBAcD89nXYRaJknQ9hdH6299AHiJvyNCxWTXB8W8WpdfoZxqYcaPn7JvDok7yxrhc7SS1nwbBkCoohZz",
  "key48": "Y5Lyuvt5Hjj8rvAZe7LQX4tmPZvck5GrErqEdTTHwxpE8kqSBeD6ALK5gPVFrf4vQcWu8w2Ekqz3Yvu6Ps4Brdm",
  "key49": "4ADtLgqv23ewgGw24gLeksdNgQRDuRhYMr13K3HYYqMM4gWUauLq8DdTBFxFuWtjsYmz4BxHdbdViGA1xSUEtZyT"
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
