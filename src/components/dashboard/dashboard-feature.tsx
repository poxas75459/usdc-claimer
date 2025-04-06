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
    "5Whr9eJUhVNXcCGGTWQuetX1TBYsLnTDiJYYWBhvzsnvQUiQijJYJHLTvYYzmJ87fkMzQVPTQtjntURusSucBseT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "349ZgmdVLVnWYTZNZDyxUWq6pZEbhkdXa4VsDM6mewy9VVhamc4xgrMaN2WUWy5bmko1ABshSRrP42M8y1phwhZh",
  "key1": "3RKjVvsHfW9k3f66mK2Un1mspv9ZpgJ5hvZ5j1dN84uZFxvod21RN64uc4UvKaS85dwnmkqcsHmWwTtUzdSRdRc4",
  "key2": "2pvzPhjHrRLqnNkWJi8MrcyF5LsY3qzbNUA3Ejumu8hzha2a8sNHo1JwTz63cbHSpjxfJAEZ8PHrycd4JzkyUV2k",
  "key3": "uGJTC4aXkbrqG1rExYxjcANWvVjMW5Kj4tYJyYWvtLFNn7toM7GHbowZp2i3AjBzsR9mz5LAKo8QLi96wbGmVWH",
  "key4": "5NgxoWFr7RNXi3ibRtyUrN5HspZLwtNTw7sC7FY9g9vQPAoMqggnJtD2GyBdqsqeUU2AQ1KyVLMQ1v2QmBAwtan7",
  "key5": "3YMjP7KKVooRqjey4VwZ6U2gWW4rQoeakKQDdBsVVZoNDVsXu3hcdenQeEFY2HL7CT5DaEXuftijoHszwAri31S6",
  "key6": "4bwbui9HK1qexrHHA92dCixsCRtBbbNNy6oHgbfezzWAeF82hCn1TNwUZKbC5Z9PazqrJF4xRKq3Bme3zdc38yZE",
  "key7": "4E9ZGA3JWBeTYDB5DE9Nmq3MtajCAtzEFKYYkp1Mo6hKLzNhvpVFdSsF59bUqEB8MLwrWi8V8Pv7ZTao8d5r5ZEA",
  "key8": "2bxdmruZaWr4jGGTYFb81zTX7tg8FoekB5mBAMTJUbnSBJMfjVokQSaKYWMmvZQiZFDV174woU6dtRE4v8SfKr1s",
  "key9": "3fBSpXL47MGVAG2nyYqsfaAnNneafHAftfedCYdnA3suuwUJrQdznDbcbJjJZ4ru4JFTQkqbL5MmcbxwRD9aDrw5",
  "key10": "2WjfacFnLmpV17CtiPbjnXZxY7p62h6TxUCWZJpx56eEYwYt7JT9MgDiZ2N9Tyb6rUR6kaEvPpfUkcXp2hAQxFvr",
  "key11": "HcgNi5q4A4VC9wy1wqpWibP8uKMRMujfFsRvBUHechnFbmfXpe4efXmcw6ER4BW7N4QNiWdrtxNoQWPuGywFdrk",
  "key12": "5N22xcjvZEvgAf8AyAzYEkBPW9pYSm6hzmm267BgBpkWvcTh7Kb32mtVXYmsFqME93152ETxrnrKDm3tRZKdRY17",
  "key13": "2txTPffXfrtACjh7ZJBRcftCwCRqUSZAWt6xCDvDWDVrDPsXATMFcoKZiuFVGssFx7bPJ6tR3PCDs8n1ekKohdm7",
  "key14": "2bNt7SnrqgZEm4PYuKKWPUV3Y6zwodCVuocEc3TUesNParyqetouZcTwy1uUhiv45pNGG9zEAME48Bdv6tvdsUzn",
  "key15": "4fQyyZd5GPbr2ASDHreLJd6wqZz2jnjsGqSQvSJHoAqaEZcJVi4WcXpi5nN8bbCHLV3EZsyHNWX8jc9CUGmbjPKy",
  "key16": "MP8bLSkuxoNfJMGun2d3zMnSGXSPk4jex7AbdaeWjPCKSaptdbNY5quCSvn6tVemc8gVxRpisrFTe92tfTETU7R",
  "key17": "ZzkDB8wwkAjGe6NJn6zcoKq2BghJyJbPwCpFQ8JwdihGvUfyfyEa44ZBKYxjFNdRE2AAjZ7MQW9wkp9FEqUALLF",
  "key18": "42vs3QBikZTpk7tE433UPqUGVxwedNByMwb64gjaEBvpFCL5hHN23VAi25LSCY5CtAi4NN9K6GSdoELNBfEjZRb4",
  "key19": "3ddsJ8ViqdxGDpm8hP3BGbu8rzjiNUmAS2Dip3chBsE3GVo3Rh2Uy9fmSGedL7Bh6QCye1DQVkzUByuW8ovdPXVr",
  "key20": "29XW6YqV4ruawSakmY79emZGf84WdiW6DnS4DoGHojbLURRB9sCpKyytNRbuHWAY4KKpM9TVYvTUzQZG4WudmAPm",
  "key21": "4hiXZQxANTPg9ZE8PLDpFfVJd9a8ph9B6oBC1CbnQnVQHfu15npYFD3aQyvzLUjcCUJVoK1bZFtb1EypJyGNuYub",
  "key22": "5HrkBSTu6nnoiDRhqiAJr5xvXMuJiBnq6ksnfhDQ1uTXtkuWuoLfPTjh8ER6D9BQvf15Jhs3S2HsbB5Je8TWBMyh",
  "key23": "4b3ndNLFC2QUYtGZVag5egEPidgHrWzeGyX2JNgoDtdGD6d3bWt5adJAHDoFTTwU1N3D3bQMGqzQpiAfz2GFQot8",
  "key24": "4VVX18vrYCiHSnLV1tsNiz2KYMdRMpzxZDAtJCqTMZkbSEjWSrPPxc2QtQbyXPU5ymZ9wikw2aiWHv8APrVVNdup",
  "key25": "5pNAo2L1n4j1V1NC2wXvvoaVMDYoiqzmJSDQyuBGpyUPnauYWbPL7VUNaNrtKV7UswXL9V9BEdgAsFMSzrfz87vg",
  "key26": "3xTtpNdop4E737vQp6zF9SCrNFcBdiZMqquCcwyZsMERg7CNTxCrtNbJajxZLcsdsxGwcPdKJsgyX6QFn1h7ZaTP",
  "key27": "3T8eKZMj2NG8bj687Vyyn2qZtHgYRUVEXvcR55icXey7GB3C1h1o7ZYw79rtPS91fTPmv3HTBniay8cbVwiPMMca",
  "key28": "3ecrb2Ywg41UwhQSyx4YzTwpr4mkvzLHtKvr48izXupdhFgukNtMT3yE9JzS2XR7rAL9WMN8wqdMn2bBSELxqwta",
  "key29": "jUG33HfmNCsjBzgzTKohEcf8ww9Dvu8Vb59sNHTxfxEEXRcQiaRHJgK9Cs6gBfrAiEAfULstcDeQbStibscFH75",
  "key30": "5x71pv4qXY4AvWuNYwtaYZuTnLzGi6okDESHku1uhTscScfEPWgEmMHxDx8a33Lkg7LRvu3QfWf2tK88c3jTCDPm",
  "key31": "2YDSyaZjLu1QmszLcAvoLbkHqryNTHynkCU4DFA5G8CYANodwvvFowBHF5CBfN9LZ4pnqD3KJkYQLxjbYzocsKru",
  "key32": "3Q1hzgAaY89Aj88tqRRsgKw7w51qXG9jAW7viLrWzzVdGuKKH5Z5AD73YoYGTK3yP7mq3axExUuDjMq8oQBzsEqE",
  "key33": "55k45bnYjhAQzU3iu3WbpzV1bC7qsKbgvzFuiphrK2AmRy7pQvionu7v5TQbTxtPPwsrwfXtoJxhnqDrrwZQ8oMQ",
  "key34": "2eWgZmpbqMAEamsusSjofoYJyMLNUrPdwqj9UjTeYHcP8brcsWH835kmgV69fx1oYgDyP2aXTaxRZqc1pjBmga2H",
  "key35": "4g4Zt5ZYkqgpm6WDC2oLDDTDSoKzeRbfKXkcAUEqbkAQ8XcysnXcPEVVrfy9Gcyogmc69rpiBckLpEpaLKgj1dLN",
  "key36": "4o58toPfKa1zk6i4UsGDKfv3NCJkZjoQ4RAfMYibyjn4eTJy9PXBnF4MMRBFZfysQkF4PE3nvqjnQWZyEzCDguTx",
  "key37": "dVxS3L9A6hER1tvFyebRig4PxcBtba6WC59NUWezALv7PAxAXYMcD9pbVX1F8YsTSwVDzaomu8GNhcLQ73ymwfK",
  "key38": "5oxaKTJqCrHqcXnqPu6X4D4knfvuS7cz5VkCho8vBrpALcskzdXFumdvSEB2SwcK9N3Yocxx2FVDEPsL57KjcPsH",
  "key39": "66gcoLK1AAY4P9C52joVB26FgewHTubzmV8cRp4RdZUrohpoNRoeXusssCDL26F7kj5Gs9sgfLsKGDhiywShoEjV",
  "key40": "2xSS17dZ5zrUq86FcUWHDarpUAkJVcrH2HwrYe2xwKydeHHYtquFRto3HFxWPTUj3LHdCc1RHAcxDx9oomWokb7D",
  "key41": "4tZBsiXbNQ78RAoBZpw3DDnmchCAznfkVivbX4iFAEazh74JCLam9mGqD4ZVohhPjE2pYJHo2wjK6UmHW3BDYwZX",
  "key42": "3hCbK7YVbfSUihciAQv77kKxTWbCMY5T8NCivztFKSFkniCAAq5YfpM5TjQxjQEqg4d34WYR5XiykUVAnMyqzfnc",
  "key43": "nyQvEB6p7pnQ2vxzUXKnk2ZbyXiZcAjDsAJW6ksMJ4kjhMNMRQtit4Vn8RPrZpwB1wCNyUKhgZQUUuf3sQZZs2E",
  "key44": "4XjNNPjffxEwPQJAoqwyh6wRT2bGQV7s6dM1kn8aLnQQEC9L8GGX6uAiTqT6GyRwRbMDPxxM1Le6MkpNtJsyoiSf",
  "key45": "3tTgfSh5VJGgHjs5UXmDbDpshcUhXyb1KExQmJKSpam3HSsrNNFaFUCimg2HYa6xSNutsiamvQFRWgmPBrVNtrva",
  "key46": "5CDUSqXonjni42uKuwQPytr3j1t2rs3nnTcQfGag2PBMySc4i6zW3uSXkrNhJLudjVSPAopv9gYKYGQJgCKUM55S",
  "key47": "4QiDoXmGGc6MUP3hgMxe7LGQ1VqhnEGpWEuPX6HTdDuJHxt8zFDQGZEEFN7x7gBy6avihBde7d5rBY9tK2dy6QjU",
  "key48": "2dNwVCwFw7JmKdMTYWcaBWwV32yepaLgpS13cmTugrh2EajbCQqhVdYeVsRAMybA8g7gYhwWtVYmvxr6Ujr1g4yc"
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
