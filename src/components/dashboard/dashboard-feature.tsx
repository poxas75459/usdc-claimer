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
    "4ampVKbuSyseNNR5FMhR9z9SGLHVmw9Cm6dxfAaPFNJnsbPLHs6f3HobFCABj6ksgBwwh3wssNQeVGREcuF62SXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NFTsbzNeTisuAmMXKn83iKWA6FpLoKBTQ6QVGPQdNfAiWg6f4VNu8GXaGKwQVe8dc4b9UEsfdqfskmv2D29U25U",
  "key1": "2aVCgrt724zKxgquBgoFpTFvUPPL5d8M6eEQyquZL8E7xSyewW5oU1bVB4Fwfq4ecKSaySRJb7AGBi1VhFidvZ2L",
  "key2": "3MYVECQ7LDtFMTpZd5rAs5LdSXduWK4CRnMf9DjeTrhC36NpCJszugdc3ogD32ERWSHBWWxTWyafXx9rg9YdpAnb",
  "key3": "4MPoSS1VH4Ma7Nk1eRwNRy2JMZiSZKpUYXq7d5D1aw38ucq2dma4YvDgQqwNBPM9QU3RtCXNpiJ9xHnXARNkEb8X",
  "key4": "2X9KPtPgJadPYD4ZKgP4noLPN3wUVrH7xn56uPqd9aNY8TU4ZdSQjQexZfg7jXA4psTDkAcNJVfVATxptuzAgx8w",
  "key5": "3gbNjV81VjDoCUdo71dwgegVRXXYAmtL584DvRCbCKgeMwQfXcvj5UYYohht73BCjvFv1x6Uy519b6Y8L1uma8ar",
  "key6": "zpPVFLRhDqjxL7vvdJLXAmZ2Su9B2jTxwcz9bXW9Yg7qL3zgiv61M2Bgm88t1TA38pGGfRiH4nK2Dr47JP4coWN",
  "key7": "5CQYoSn1nZG4tyAtAe3u9ykFCG68zBXp7bMfXSmfHNYiB88f4CPMd3XSHuYw31QTkgUpquqGoyEWSgRNWuL9K6Nn",
  "key8": "5P1rkz89cjnPrtCxGeKkPSPCcUgpvGcRn2sKYGqRnMwMRNaMntzzj4kvMqdbX4Mrir6zmv85JL4BugFZntuWesHg",
  "key9": "4BFBSNFe5eh28wN3eyepgPyZrjRzsPNvqmVFDWzTTXBEeG5f5yAcNaqoyQd9i9Hs7xHU4HoDMsqsAujBQNqW2mej",
  "key10": "3aKcDRvUNqZt3EcTzrAb8d8jKg5mzRqtgqdVsxrVCwMKDvA5XpTBEKpbvogFaE1ewcofJvdWfZwTuSBrSod5Nkgv",
  "key11": "2kUgpdptSV2uMaMAVkeBvyufdDLzgG4kfGHZhixTnNRJX1R4u8RaRaEb982wG5gZ2aXuZM317n2eYKfm2Wg7Kgxm",
  "key12": "2qM49Gq7P3mGb6Re1r3h3LG4K5fyD5FH3hvApiRx8hxDjiXkKRm37rA8fq6SrKAr8PhgnaKjDGT4AAr5HzcBfPdV",
  "key13": "4DtEuBX3Eb2EtPq9A945cFgrs1yhUGnbYY5qCcy1dYF9C8jVzpDF1gU7dzQiHYfLdVvTSyaKVvgjhtzYAhntZzkA",
  "key14": "61MToGmuc1swUP5XfGg7TxJJ31e4N2MjVJEKCrGsN62LbSES2VTcNPgB6EYQc2Dgkh2zMCNqGSnnGrXjFKdpysMN",
  "key15": "5TH81t41riZE5LYi4rBCMZUWq9N3NNRZqKjnFsdttfrEt9e6tv7389qAgWS5b3b8uau3RMd7uBEsFBKdXNnp7YZU",
  "key16": "4oyRTvbehHpUCiShy8eJtMb57E5AJrYeGCujpfHmdYdzcZWX8yE6yAg19Gk81tNVkwr2HKbZhtxQcVSBB3TRLWyV",
  "key17": "3wi7Zqc7Dj4L8WYCyWrj9BgzEb1DwZW2RQkCWmaxkA8vuEF2Pdjy82pTr51NnhzucGYpT7BuN4WCZysdBaNN5ex8",
  "key18": "3kHJ9qDRSXp6ksmxvWxEmCCRJkEJmEEiksvuiy9geHWDVrGEe9jS3BGtABSotXa6Ey2CBNz5BJ58XiQxo7bC81dY",
  "key19": "qmrUsda3C4LsC54phihaKyRzPTgTBkwgnnVbgYDbeCyqah9V29P9kkzwrwxdUaAS4Z1Bn4emDTYvbKLBvu16cTE",
  "key20": "gLJGN2H25WnpPiZmKYDaDNZmiTk4hFP2qbPd9B9j1vQFSiQGrd5FKvVSkkJQAcRfzzEaQFgE4RU9JjtgGomhZzN",
  "key21": "2F3fcwN2s4BU7JSCRUJqDMEGzcZk3t9jcTxp7airN1Xyt4GJn3vvvzpc7HuvRmXpkgs567Q2zx2LfVthf6ihLwFi",
  "key22": "4iBPAhwkTjs4KsCBmvsiTWVB5JVimDot5tawyEQt7bdvDdftVx7No3G3UisNEEf19xjFhDTx55onkqTQhk4Ge9RW",
  "key23": "5muNnLDDCw1sTMRrVJyfYbM8KLWMfEPVfV84tEBDLipzGSYm1P6ET35Q2nzCWs2hC4gwbChCcNmFyUDeCRYKZVsr",
  "key24": "4tPFByiaVXykZ7QEeBNJsKyTWdxhXPnkhpCELppecjjFMr41kG4z7uvTTvwwFwWQwqe4ymsF5uRwyH7iEBY3kBd2",
  "key25": "5v4cVR8K1YFpJp9mRT69kwy83wwzagPbjj33EMLznkuEeV6YiFA2Yy4f7FGQ9huVhq77L8z1FUZBQRmA5LNt5KQK",
  "key26": "3x2pebFxH4MeGArRb5FLjWVPFCm6qPYuLUZ2WWrP3yukbFVGp4smc5pBQsnVf1Y1aSQ8ZnUuDDFiVZHPG4MivxJ4",
  "key27": "4gzKi2wV2ECMf4uBuyJBax83mdzHXoixCQifRv2wQnjPYpTWF88X9SSV8nb6XNJ2TXNX6bBxyatUbsZqpx5hP9eW",
  "key28": "3QcwFX94gyDvrYjULpF2NyGfMUcGaA5idtjW55sciLxbKjtKfkQ9HPDr7Yi3qfhQEenv2jCvYEpCTVkAKCoHuiyZ",
  "key29": "299MMW3Uo1FJ6CwhXd1fFSSNWr5ALGVmeMtThy19uDtYXXBTyT9pbPzSiWfcCp7ih8LHQ8mXeqvusVwWdmh385pA",
  "key30": "5HU6iLTe88dKYgjcQhajpeufDtbAVmvUpifG5pKJAHt6gr8SGC61NA3GYocRa9AcaML15jrxgtNkcrPEDA2K4BKf",
  "key31": "3eXrkSoZ5JNv36J1uRUHK58VA77UDTHnrvMGgxuMiuUkUg9dkB65jKuLqHsoNz9SFDvc1G6DpokfQHEM4Ej3Mwwn",
  "key32": "3PbYoBvnefCMh3v2YVCgwpJt2gCYPUJ2mzwLC3SMSWmUfJh63yciRVpp5NiPrF6r1QzPn9dE1596YFGUX7CYAgXq",
  "key33": "seUCW14wXFHikt2KgeTQcnxF3tY5wDNW3Njo5KGJAeA7sK6sMhMhEPdLM2DWnrNSTk6zqkpk4FnTq9eiyL2uMdQ",
  "key34": "5zHCad6HPzXWJZK3CEjazkhtrjfxrm2J8N62weZ3GmNkvTVPwPrMftrbjc6EqMk4nef6SGH6zPMGMPgaMiQpdd9o",
  "key35": "2fvA2GBMbPhgXZ5XMwAtndDar1yDyfgNwbgk7Yu4T2RNeYjMDPvBTXVAL2ViPAiQsd8Mb2ZtBBmnYhudioZhojDq",
  "key36": "2yjedGzDV9XjWqD2CFkUDNKDSWzc5ET4LYW4iAfFQU2a4tjPDEdpm9MXTFcSdcqW5Yt8UcqYSppSsRPB2PTJk5W8",
  "key37": "4fhekLfESqoXKZ4eUYi78uobr27Tj3L59df15pDnfCFFZvXR49yQDAynfy17HSj18tsJVb1ZfckPEVQYeLegzFo8",
  "key38": "2E3Cb2CDMSBCdf2nQRU6mZTSG7Shjtu8uDwFtEjNiRWSczAtXKW7vFnYGwjCkvkFsV3LfjthMfS4qpbo1DHoxH6Y",
  "key39": "5i5sKgCXcUpgT61iqndN4erAM54pvQaTKfYDXkURybBrnrYxm2sSMT2exfX5nDxboD6Q5Lvo1xgV8JNdCByNv53Q",
  "key40": "N9BixwXifXRkJm6MqMxDUsYQfatJUVpkjpydk2XYnaDuXwfqqwmgvJUS6c4uHydBb5C4gWQZd96oUH2qUWtY1H6",
  "key41": "2BCkLKFe8TTJk7fKWvfQ7xW6ftEhYUWg8EtCss878pvgtFvz7Ve7PUXyXLNFGyoHynfNGAkdbzqBbo9QuN992zmd",
  "key42": "3BU6xwrEp3SwpHydMJPT2bzU347DJ8w9WuvuyrWjA98cfyDHm1sRURF57fxERf7Hhw23NYkCRD5SjauDdoRni9cr",
  "key43": "5FA2gtcfC2bieaQrt3uUQGT7tFxfH7Ym4pRPVyy5uoE1g4XSgYcNRH5SFjBDircaFWGzyVWTDsC5UURVcWgPkwh8",
  "key44": "2YhP8AM68B9yXZgwjKPeK9Y2vYM3VoiouXzxuovjnNStsz6y7FDP7Bg6g8VBJEzgSc3g3JfR1qz2W3Ydr5gjfBA2"
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
