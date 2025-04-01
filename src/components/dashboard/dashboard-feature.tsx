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
    "5NXyVNmDCy2gJfHk1oseb6Y3sAuDQdimasio75o1RgtiYf4cpmegD8uYpDPHGcSdFNKg1aG461uYL7GeEfEEUMpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1Go8VxAxB336cuq5LcGzhEvTPNkPhitZi79uvYQkdCY7DNAGvWSt1wS9nKF2rShVuMvomTYiRXLYa8wWah1jxE",
  "key1": "3bxcXDm8uQdBs9XnXZziqwr84EMpmJTfafXdAGbJmk1UxhBZXPSqZb8ZS5kMe8XJowXe4qwfRDQ5PJhHhJe2dc8h",
  "key2": "3v7wbatszcskL7wBvp6wPe5vcVW8TjB9Frmz1QKQxiL75WShTEmgzVzqMAbWpixrFyPjLgnGuCDiT69pBfkVUWCf",
  "key3": "4WdUGsCUAxjv92kPhMzVdvtLbWX9JzxjprF8guz3fEAdF6mya9aC9iQw9nPJuQu5A3LA6KyVpG5qaNXEzWjLYACF",
  "key4": "2kmkyuLUFMohCBZLGg4pWY6jLv5RTj9KBBFUQWGhwM2xfLiv7CwYTxhm9Mjja2fQ1DQQcqkvMFAZ9sYSXhFNWUyf",
  "key5": "51782Yyo4s36xTQv31Q9ki23CKzUkbgf28FeUe46kefZRadHVnuKyxGtQtzKN4ej7ae39Eb3XDCsF3QbMhVDXahg",
  "key6": "HRfvtWjg7RnqrGF7CHwRD1qbS5idNhSKLZhnMGJ1G6MKPTFpmJwu2hzUQ7JuJKqw7A8wRg3QBah9ccLAZt7jjMo",
  "key7": "396W3jsdTV5v35Ab4yEZDSCa5mkfzZX1XR5gd3tNq7oiqJz24inm45usRF1AFQ5XqYH4yGgupPLYRf5PdFYNA9pQ",
  "key8": "5pZj4WvGd5FsfJEtdsZbrTaDfNrvhi9BCmXjW7ms5Y7JJcwLqAGrDsoShnPmvSvtyYan2N1DKs58S1Hjea7ucZbo",
  "key9": "3YTz3feiwUaN5HaornXob8PA9v6csbyfY2U3NSxnDTb2swH4neC5U9XeoLjng24uML15cgHKUPRsXmQU3XZuztL9",
  "key10": "5V7eaiKMA9CTzJkhkGGQncybR38TTJckH3UaBjqAbuATfrD8etoTE49mz1yqMFMn3EuBVDkiUhzJ5wfkvuCn3Q3x",
  "key11": "5PNvmsGWDmwzjC2dxwrvNMs3qvFEyCpWhDjr1t13gVaxPsYVY1BS9AhsMsyR94YsyKfe81TQwVnY2EYAFepUXi7x",
  "key12": "4uBiWeW5ViQ3Xxo4GEam1jcdzS3tUrad9GtimJGVBi95PnkUn214U4jc7sU3rosrjgVAf8MHhggUi392P9BBGr8b",
  "key13": "5F2vw87HqSTuJ5uo8auWeZpcKhf9GgWoeKvv6FhEUQ6No2Z8HQGRSQMXoGA7UnwWs41EbZK786c2siRzEc9gUG2m",
  "key14": "5DUUx5Rb2Rzwhyba2YZVtmM3StPJqsJuKa8nfwacDihGKuaUH7PAmGcCTVdCmvi3QxKTHRgpckWJUX3pzV91hgPH",
  "key15": "3JK2jAoVnW4ecQUk1oGjHUYJKWsqCpggaDtdFhdY1x3W4P9yiCQLpujGqoa2qt37aNrK2WyYGn44h2aPGC1yWYUZ",
  "key16": "5CLn6YjEEuv75A65JFB8CTYhujJD3ATNgCbUy8bcbh6TBr6n5LhLEEetYgX1AZedK1RNWNo38MKiEzHHHnWmRU6V",
  "key17": "38qE4PCzPNvUBGyjddHf89cYfPVrSSoANnS13RDifUQUe4wmyn9m19aWA2UGKcPHfziUTJuNWGjM7tTbg5YbZ6ji",
  "key18": "48RSg9Jc4k9jD1qmue38rAqF6nRginu8CTY78bZfpFdqBanQ24aVypzD4caXdskDzaY3G5RAyC5vrkJQs7jbNkDo",
  "key19": "4Cn7J5Evc5oWhuXbdFWtTPGmt6T5VCBdmwyaD6qR5jdku4GN5MF6h9jUwD1gXgzKG2o78UYpai1HXyK8JD8Gskvt",
  "key20": "3526hFRaVByeu8UXYxkjaRMzbAEruzJ6ZTB3Ws39FLKFqEMUQPJYmhJNFh297j9K6BUNVSVPh2CnUteTGFg67ZZg",
  "key21": "mVFsJFDJ8q3pyRAYTJtbuKG1xuAVdhhCVmdSEdERHbWcRFCfUvWtX5QLj2G8xEE14EwaPLnZ4pheDX3SaYsPXTP",
  "key22": "Cuxh91nRTzPLh1dQTrd43DkrPiepHU9q1HW6Jf1sU8WqqAfhsanqpeV9PBVuVdDGkodzmCqfKHPceyBz3jd9d7q",
  "key23": "5o5mNWsu7Wvgsavpt2eSjYFVXDTeKruuonkrr23ZZHNUueJqsriSrxugFioBSMaDbpfbXq4dyUu8ekdVDZi4Nngq",
  "key24": "4xSH5emGk1ZAzSMaAFGcMWP3phAGu6J9Q3cTmtQpteJuTZoNQaf5yf9rH3nWxeqZdgowQNqmwtoptPD5Pkf7CAfp",
  "key25": "2AYBgyCcGtfMk4yJSM9RH7Mge9GTYY7UHCUKwAcpexxQ61UQJcaDy1e7eFXxAyrYvXLuwrqPks37Qr9qqdXTJh33",
  "key26": "3ngZXfPLnrAdd2C22W447KPFuxBDzrMkvNq17JABsU41S4rzMSP5MVYSJ5zSvERFezq8PZtaung81shteJXhbRvv",
  "key27": "3EfKXkNxETZAAJPFnC1WJia4fxueUnae2VhuNtzNXNg34dKguzAKpjzc8t6QtLZjM8VV6BCVf6Jt7G3MHnb7B6HR",
  "key28": "2m2G6V5koLhk7Qmk4a2cwefV9nnjV4fqFnytvZ3QSmgUkD44Can3wf1fnr8qE4bs4FrxjFX72pTnAnnctPUnwDav",
  "key29": "2zbUbtbNhT7WRysQon9HTCad63guJbMLhVqpS8n5sGaVMKPkQuiKMK5MWm6BTMEAWHiM84wXnNGb5eoLYFyZfGPa",
  "key30": "2VQ1tpcb6KqYFYyvAhTBinUeX32TG9grJZQtbkA1J7P2sEN34DhZFH9tJpyEJDy4w7VxvBg8qi61SkobwTMcNuvB",
  "key31": "VAXXTJyhnCxwNJ21hhmZxthrAsF3YCyyXtCxSJFXkhZXkUutRh6wdTP4cWK7EqiAaPtH6gz3epshvmBgWR1dkBy",
  "key32": "2oMNSdTWSiJoEwcPjGAheUFtQhuv8Z7mDWiwGqCxD3jJSsudEAkVmPXFkcPYt2m2NfNFxDrdnG9gxyAjcUcTRS6y",
  "key33": "3sSP9kK8M8WQyMzYFqt4rqNYAXJ96ZUti2xScVFH4cv936qztVjeFfa45BJCsjxUtxwD7JAoNeHD8hdhc9TuUgxg",
  "key34": "2CvNnHSbCgonYHHbU38jT9JHn5WVURJx6QBKrWcQY6WuNAnZGesGVSTKFQWPpncsQx46bUgsSZDQSPdz5iqnjw5L",
  "key35": "5AVB7ik5qVf9HvFh4f68A9VqaqsMYwiAuVNAkmTGXDVSEDA1Z6QHyrepJAZdbuQBzg6kMHb4bbb58BgfJveVQUqe",
  "key36": "5cjZw72ApWaRcyphmBRJDGvMrRp4cbFHioxWmUNYy7nbCAtQrRrcjV4nfdcbqJFuwZvus2psfiPwkAifMYyTGVaX",
  "key37": "F4k8GfdSnQ3oHCGYoeTHAyAdcgsr7uBo2PM9zmFct6WY7ktipsjx5J4LisH5TTkEdhc5AL86XUVwFWsxBYqeH84",
  "key38": "2wY8KhNfW5GhVpj8J8NT8G71D8gqLJWHJXwFiV71UWfNQqm4poirW6LtqJRTaVQeC78EngjSZQ2xaaZiBhrt2qEK",
  "key39": "2t7f9yXoBRxkVkC1BheUZqJcivksyUmEmw1bNAhWM7eLsCM534pgUMWa1z8gmyQvizZyZ7RgaUfWZdYX3x2sTQyk",
  "key40": "21tchcy6FAiaUvZJDDcRVKoi4dNKDuVDhMcDuvtH9b35hSZsJeRWhbRaueNpu6h7SPe6GrfJroD8VY4mMsZQXq6W",
  "key41": "34rYWzGYweTtYotaFQVsBdQULeTZ8eggCAScN2gTpi6kNouTE8SjMscaG9uKuJXCyGMNP1iepqaMafhnNkqWtipN",
  "key42": "2XMxbTye9nSLvvdUu8xsePpDLYmA4Ao55Kr9WE7gY99g2SRR4mGMwb37wfdXWFagSwCEpgYnw3K67HMPG8UFW3y",
  "key43": "2tCGnchmb3445Rz4NsG2Nr9enfBRYDThdFnaeRHm9EmQjmW7yfJxuyN63yyt3qo1r6zGqiKZ9StQ8Sqp2LrZknFG",
  "key44": "4TBSuXm4ZCpVMRXhA9sXBCbA2v3gUuVNuSKPip6h5kJ5SdLJpWT2YKQ1wL9T1tc3kRomT3GYSYn7PthcVTXyYhCa",
  "key45": "3qw43Za5CbcDAjZNTfvoxYHzEydRgnsAr67dqubCKfXqiQfSaQuDAy2s4fSM3ELQSRGNUJTqG9X1rs1ETdTHj9zy",
  "key46": "361TVLx6QamHDhwwMXg57gKH2tQDiZH2rDTi8jHdChFoAuN1XmBL4DanBNK5qqhPyEL8NSA6SQhzxjscV97zGVNU",
  "key47": "3VApCENzhPyd5m5EakzhUXBPZnoW6Gb9PGYfMP7nWKAkUHodRk5KMKnx9f9k2j8sJy5hjdVrpt6Wy9iHrfwcftyD",
  "key48": "2cB9yxVPtZ3dVASMTauzPxrPNAN79d1E5XgSwbtX3WxX6mR1ySBye91jm497J1kN8gfLmZALZi3s7JMPx1j6At65",
  "key49": "4iwnLrhYEZNjheXipM15pCJmj1xq5cvxD3pJ8caEbM97bUewsXDoPcKDfkjuE7ms564mceE8iLJs6MxiehKp94VC"
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
