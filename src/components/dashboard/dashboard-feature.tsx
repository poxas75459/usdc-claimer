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
    "2WwqoWqPwkqLvJG8mJpDVGfuuSUVyruQoCudqSaDprwAfbXBztcchcy9oZaLo1dEQotEuA8NFHbAjnJm93m332pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSRUQEiAx6qqo4zynFhxHXy5aU8CJaSQfQxxKea9XGLvwS2Loj564AcVHCCSj2m63ussjX9CF2dyt8Wg9h8KvPD",
  "key1": "5wuq3ou7Lt8ZD2WcF7Ek2ATABnnNycyRYwqXAt6G6KbYviWBPnoLW871mxV9EmQtMNoXHzWcArWcuF8QpuxWZz82",
  "key2": "4MaPqZzQBnNnCCTL8QUotvRxTGqXvsjrwuVNxANUsRNK92gh5Hj9ns8yqRWAwfDrBNoCRFGX4UysAP2j6sHuYqKu",
  "key3": "2FAnS2JDC4Yqc9PmPweipy8CFfnmLk6tqzGH2RySe3Hv46oFZyQgKQuGJ8hpfqaFpU8kijbhouMv4noRnNj2vRN2",
  "key4": "3eW5XtYVdccxp6sHjPpyVfBiWBg1aUCkPd3Adac73JH97v99mzJv2VA8aibAU3N1SpR9jwMi64sUNWbw7VP2BXJ6",
  "key5": "5sLDFGPxWrLTL4JVUzJLJqAso1MroGpngy2k4ZZN448uEsChbdGFopcjRhVbJne1nNeULN1LKTa8eUFgZziGEsnq",
  "key6": "4gsjUDrh8NXrYMCtgLgiMDVGYTEkcrLzX41Zc3zFXZBrkKF7ZnPPH1VQ8qSLa3ornZhfsXDZ89JauwtrM5NjtGoP",
  "key7": "3rK7nNK1eYb4pvYfS3rfCkPvNPiVeucoy1GvLrYMroRfGZsaGdLK3yuWes7B2SRuWJLAwLrWFXpTGW2LWsnqHU95",
  "key8": "3611X84HErAeep1XYhocsEWBKXvKXjTQHokHyjHy8DZdRaTQQXpth3qc9GARtS7ts1eEENAKxYrhZUFXpkxzi1Va",
  "key9": "3WZc9K3nf5utxV1E56o9K16cnLtaxjdB4pogjSh6T8WebJfQiKv7qbpHvwVWwLGYF8it2QrtUyXXtrGqgKfDhZLx",
  "key10": "QUkWSzJgPHgnvT6EfXSsrH5E4qjeSe3M6evY536SinLrKLgH5Ry3gaHJ9ummPxKn6DSEv5GrBVQ1cMQAjmgM3rC",
  "key11": "5bCBZMWr9zFTyjGMxRYTxs8NQaBYW3rjfYg61VUZ2Zw1QPuU1FpSJqgGCdkRg8ahaDGEGzwtndUF6GSzMbg4ZwfN",
  "key12": "2j9rKq3QafWx3fgAdRNj4NVehTcV7FdJcZLhnnRXVCJ9j8njrvxW6uzetppnC23mMwkso1HiJ4qQzv4zxSLueRUJ",
  "key13": "3rux1kTCoEVaj3N944nbFAbkxPqbLYSnsdqEHGgC1UWGJTy8uTQmLjfxUMfLtvFgjdhUwZMfCSsNvUmLwRLcJJk1",
  "key14": "4bwyBPpGXNZHffGSThTgdw7bUBTUKsHwKgftDQi4sv3DvFWpyNwbvjbMphaHUatcugJpAfYpj8xqS4tS2egqxeLj",
  "key15": "4rpNWpisEjBWj2vYy2oEvfscwMcpRwfp12YS7VgeN4LwmeErkG2bdGAT4AvA8DVoK3HWSYqQK8NDS1tcHAouh2Rd",
  "key16": "gnxne6EU8VxSSpWVdhejvYCVrK3co9yJ3aEQHowW7X1QLu9YfuncTxTmQkoxMS3SEw69hqRFb3kwYmqWXuYvakX",
  "key17": "4kNqE9YhknmGfenC5Fof2wFrUdWb7xusxux7i4ScS4iGca5nbqDwJHeDqss4THLTbbhxoCFLS8hy8xe5pynR7Riw",
  "key18": "5kZwDfzWPMWDqRmJU47Gy5Sh6L76k8xMrER4v5ZVp5d9Mh6TaCyUa31FzceKhjQ1vAqWd48xryAjrHTbUmEh2XdQ",
  "key19": "5V2BprkEwz1LejpW4xakPfsr9YzBym9V9KXV1qJNvNPqfWxC6jN4oZWALcXpPMBeZTkA7mHXpxJjuoUzK81HSzeX",
  "key20": "2tzXTj1VkrpR1FaCyEZUvDbQffcvHhtVG684cfNHnPu7sdF2g7FUGftm42EXvTo2ymcKAE5Yc2kuh1U2C3pyzTHr",
  "key21": "3b3QPkj2HfVcrgVA8mVgnCmTHj7iAfkqBGWd1JpLgCn1JtexME8dzzzDCx7EVWXZhJ1RPMDoL2F4ar4mVwpeAWrz",
  "key22": "2zVkmXeJ1hDiAKaANW2HfEVHHHdvcMKpwNTb7w9dx1ja7w1sBc3fHRHNG4P8DvkjSSCaMXEzzRWTH6GvBeDE9sgp",
  "key23": "2AtXxaTWweQ5oEkBTf59HsvmZv4TSBkC6XKfLJ5cuQftHEZjegUwYT2WynoDzZJwVHP64bcCTRAQFmFn3zoutstF",
  "key24": "4ggLhk9onTCKSYVXa9PesC77QFLBuaLhy1T4wut8s7jbkBMv6i2b75jPWmKmm7LivDVNSRuky4akRFrhMSNNGELN",
  "key25": "63aDGbXUF7pPhYZxnQQsh6Vd91GhvfG4go3znwN719q2UFVvqaYbMVpbUMWyFxD5dPkvCA5xAg3XfJZ9hYqkyEXu",
  "key26": "C4JSCdmcP3fnFgxDLdNzctiRbGzkEMaHgcVJB6eDzeZFQ14xaVN4CfsEhySpavDJEMVKSg6DYk7SXi82Rt3e6zF",
  "key27": "67P4F9g2opF5gkEsS9NWEca5m1C3yKFE5t8CqNPGqQGRLxZmB3p3tLzQT5bLgmHY8ixrm6EvgMZNXmu3ynrcZjoX",
  "key28": "2xArdezTccvfENemNbs6dkJRas4VASSWNJFVs3uHb15hDhLbwbcC3D5ae2C4N6CS5tBEvEzyWCaXcyHxD4ptC28m",
  "key29": "5zCHTho5eof787RRAWa7TFSJScu1rmVu8UgbvXbkqcNhGPqy2LSkNQPcjCi9XfcTRFFmNyFhqd7SDrTUTZsxPRWA",
  "key30": "v8FWXu7JcfcQnNRptxkEWBervCchqKsFfxP1TPgxaxoro1D91RojPiH8WArUzcZq2nVq8B2k5X5ZvTMh1j5y1Jn",
  "key31": "Rmva3JWQNuhAEAXKP6zNkHuA23Y3H9W9YEmG1hhQnekZPMuHKUJi5yQFD2vHKXi1viYykHPwNFAhMNdEcKcrvjA",
  "key32": "p3Y6Q449iDWkCct2B3NbBKSnRW2CvxqZHeN6SVSSbHsveWa28XEpyZ9J4Fk9FCB3MGnBDB4w9DxMrP7Df3ctc3N",
  "key33": "2wYYC1oGMGqHrhSJTBh3D7QQkoZCYxzk2raWy5ACV6pAPtA2nESvrUu5Uw3Sds2UzYHJmcpCcoeTpQcuyXz7QGCk",
  "key34": "54UuXrY49oQsQcZcuvePGgASNrBF5UcGZpPJcsRhKx7TXVmKA1NfLfsiGLTxT9YeXmvnc8ikepspWhNMLPEigxd2",
  "key35": "WnWrNKUkYLkuyqTfThWmRZzLZUUxkTeeFNVQXeTA2eh6sR6dHUMgt3GojSykxAm7eJPSmAbvPWXH6u6ZKMnnC9U",
  "key36": "4bLzMHSpEuh1gzurwv8VVS2hYgXcqFNv8dvw5pTBPDxko1uUuv7VxCqmNYjuuZf4QaqoppjVRDnjbZN16Re2Xnmv",
  "key37": "3xdqjRT8eSm5aor4WwD4f8uTQNAxddV6XoW4x5GdAhcP6EBWBVEnqck2HsmvNXtb7WcHsvEUfqd6xMVv6MgnV4bZ",
  "key38": "3qGWBqsy2t1z4H75jXE2jksy6mf8ghApod8ZUeCzwGrGfT25UKCtNnNpPP9WxA9PioqZ9GhmJKV4kiCPMZHrGjZJ",
  "key39": "5ENdPLLjSKZSwVHePUfsEeM8nmKdkzzMXHD9Ey2faJFsrJPVGyf2cksTsLP6tAic7Eg8EyhP1KJjS2ZTnVX9AEx2",
  "key40": "yDn42SCCxuDGFMaCn6R6bjVEKvpSouc3WXpJCaRM2CEjBuX2DRfjBMgKy5EZxvoaUeYrUFj9mxmzJgyGTdWSmsw",
  "key41": "23zpoCbb7sr6buCC6zGhjVgMBpHkHoYfffS37UPkVyVrMCaDGAEgDnYiUMcwvYTPHp2Y7v6uKGwj2sqYrkU9Bnxg",
  "key42": "4419swA9hcSuFp7Ux7FF5ftEKZa25FBuVEXSTk6sbFhDkiU3ePcH7RawVXpCyS6W78qbUqqYK4RcjaswDs9vGVRo",
  "key43": "4TcsgYm1mjj3VnecSghY5cRKcUXrMenEkcJF5BCPjLMJyQ7xGbDL81B3phGssGHPyBQWvUazVxphJcEeBCghknh8",
  "key44": "39TvCuHTdEaEfiXyFR7YJprjNDpNaUiU7wpeWzWftFACiLud2UYM7fuRUU4Tt6g2idrazmgQi26KLBK9EaZyn3QE",
  "key45": "pTYBnQSWh4Km8tupED1cndZbeFv7rdQpqCmK67NCnKwWENLJkvEJRyW2NH6AjarzGvGGB4sMUYwTg4az8ac1C6T",
  "key46": "4RivjCNrXaLUCa35rvYuXpzR5yMwH4Eu9ALxD6sznrCP65XxJnADDHsLo9Kbnssd85gfELj6rpK6FhfqubjDNTBL",
  "key47": "5nFouQDvgF7XVGGT1mpcHLiBgCCh5NLitrnRFoeWAZQ6XgPtH9nW3VAq1jQ68BUyKfWPHXhk6czkAUkRJ76k8PVs",
  "key48": "3w6D1gqDKGLvDD1VtsLbmqyN9vzMP7P5TxaskAnXdUKJXppKX4Kvq7xBuaTgxyDYMA9CTrPPurf9kD8qieWZwKQr"
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
