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
    "3ovfsP4eGtZrYipxhv5WHdy6pURf2pVMLrsYWogtHx4DEz9Aevy2KPFaMUEVkLxPQN84YjfwUdKtHhSwRRbHaRkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "257P5XrFkoTKE9JzCyGq93Gy1MFNnLm3FYWu31VmNn37cHWLi5fVFDSE4xaxFA5PPxJ25h69jQtovEXNKCVonzBA",
  "key1": "52VMc2ZhQfHTdcaUKzLLkbRc1Q2x8sL9WdgEjLP35aSBwMohSrf6oCkdCG8oJUwHwtJp7rqxmMgBN2Lb37rBXidk",
  "key2": "4RdtB93v6K2t7Ksd1xaMi4jJqts7TcnD883yi7uZr27JxjkAiR6KjQpX7Y9eizoYnycL5w4W3hKbeqXgi4Ka9oac",
  "key3": "2YByRZiSwJyPFZ1icFRcps43PtNLzFeK99ezWctv9xEBvG4MfMR7dRmnh9YM34D9ioB5uEDHBVabvPMFoLdRKUck",
  "key4": "3DV6wQHYKkgdbturUJFaMyRNUo5sPUvnj35cAEV7hQJ5SPfcbSg7mfRSJHNHYokpPojCqzVFpDUHCncMKbSHrmXs",
  "key5": "5y8bNuLUE5oCbDomjw4HQ8cHpcvURKEwDHANWHqUvXeP6S3tTSZYKrKne1W738AzxyPecayrb62aXYQwMVX7b2aa",
  "key6": "5vdb1k3fYYRgPC6z84SbRgJqRks12TrfqSkDGX6fjsCyfWuyh6L1t3xwBheF5cXjGw1xiBh6TeW9yCUPRo9xZQNq",
  "key7": "5okeyY7C1SbM21VNnKH4pcu4jD2M3LuFchRMJdRWWtXW8WDVpum2qKaasKjF5hnnwEUyWmTXch92MPvkMPzHjJGa",
  "key8": "3BDnhRhg5vvHgMtHu1cKdo9TUNg7rudt6foQKdgAwYK1wWtFknW7EfjXnnzwMcE8Z1PDe3uCYUD2Hc47myWqTQac",
  "key9": "4G7RoDzAXmXk1wTorRA3MamuCdMKpDBfUMDEJ9QH3wfuGb3Gn9hynRtac4L8Phvt8Sn1mf7PrrQk4rweptbTAw3z",
  "key10": "2rCvVVos6Pw5hRCcV1ACJGJLFMXMbVc3tM8As84Sb4ff1X8uwHSMBbNXZqQth7V6xmMUSfNNsa2WN3BXhYcNADuf",
  "key11": "z22ba5JuGcLuJd5tXrrVa9TFemhjYjA4NWRGoggA9ii8bDPWE32nQuaGwGy1M6Rxiy5R5Fyr8gphYJ8uq8Q4ZGU",
  "key12": "4FWFmEKjos5P2cXzKjTjMyssCKwqYopczxbf3bpZaa12BZ7FDvnYkJFoVxysFjojj9ARCyRdxbNC8fhU6Vqpwf4h",
  "key13": "2dfTvb3YuXoiKE8G8hJ68ykHhSMK7ot48DvXMLmoV1smiu7xz6c6iQYbYnatDfWLryc7n6kxikaUkMao9moG9vpX",
  "key14": "23wKaULc5CGYjVDqYdjESmc7bZqWnk7vw2JGSTLhVKukxs6NhRBZSEEFc4b1UzNzgD5N28y1w9wmQLqUFsLoTrt4",
  "key15": "2dFLaLxVUcvcXBDhAzkRdfNGXNkTEwPxKpVAQcwkCgBqSzUoRysYoHmc1RGbM3XG6g7bwPiBpB9egM9wUYivvWu7",
  "key16": "4fMEzQFJZioYzfh56J8dxRs6yjhcg15QuetFQJsR6XFay5XeypdHoQ8gnrttqcrsmAnUGeU2TQhZpfWCoHyA2SiY",
  "key17": "52Up3zn3GmPotjnRJYbbtT5tCUrZsNvhMDzSviRVehES31HyHEr3crmU4ds8sZoj91E5adZUqwAWfK4pkVgevShX",
  "key18": "YCMYvWBs8tYJtAU2mFRVUuuygc95cCF6qqBEydxcLkeo2xexGUw7QXdsmDc5YARrth7zTFMpKA4SF7YabGVFwux",
  "key19": "e73QzTtp5emzc4HqS8dfco55aBUtPwXBrBG6fE6eUqZJr1g1vHCNbX2BDf5ypSHj78acPCHrkP9ijAXdLPRSrZ5",
  "key20": "4VJJ6RdR5SdvsRLDTMckijBLMxGupCwJdwDco2W77iLJCcygRbSo8uGxoZW8kY24F4NwZufPLZ6fHRdsihJWDkLA",
  "key21": "2d5DvBU52oMDFxTiWvKBVYCBC9szqemLZBW6UhbcemDHswHic9Xc1wwXpkg9MLMY6BgTJtkrasxQefRre9kftGBT",
  "key22": "2NpZMAYpEPhVLijW5mMbPkHRmnk3ubaqX7A3ECwWwKSt6c3Nyf7cZtWGgCWCWJ2XrAgigxdBiiKP1mq6GnWu41ie",
  "key23": "yBNrf1VcxqkrY9pSfKNn7Eczzxd2ZNi6RiBtsFbpL5sj4C4aHKHFxhdV1CVH2WVaWmGSJdzfb2fevQ9mneyWDb9",
  "key24": "27rEgHaUyWgWypXjD8jTP27ZsqrhQmNcqdwPgZkpA8E7kW8fuaJp9t3dXJyHTZ2Zxv2KWBy7J4ru3DwD83MarUHr",
  "key25": "3dk4fBDP4sb4MwKCuNQDB1wKpnVLGrAqFHMfps1rt56jiAEXzi4SgNATQUgewB9TQRy2yCGZqcryybDxTbHaZfZ",
  "key26": "3FSDvrudmSEKkvAJE9ZzZKfBpfLait3sNwRhafmjixKQu7UyuwWThfLu9kw8cZdFC8a8SRUHD3jjFYDB5APNCtVu",
  "key27": "4QE4bXCRRi7cRzxmybWTW4Zzdhtx78zmGexU5Bd7WKMtFFPckSbj4L6rErXtZWqXwSYS42mQN3LYHrzFfHT6mTdG",
  "key28": "4dhVNynA6Ap5rohTPx9qqjik2BTHQ93uJUKZWCajeYvZ8ega5f2svfb1AMq58sKvcsgw45RAdz7KAhL7otaew29Y",
  "key29": "4qKrUriGmPhwMJyccoznSgiWdZChC6tGyZQkXtNW2WeQgixLuUQA8KyjN1jQdF8FrV66E4zoyZdpsyuXxgUS6eEf",
  "key30": "53c66JMJ6jeypr2JdZLs8FGDoUcMJcRtp3U8b4SeMYrPDaNmMecVETbkZEecHceDFACK1mcZaiKCQDdGDu2t5wmq",
  "key31": "3cLYv2LLqtshRYyejGZXTqWNkPQX3wofv1M7vu3pvL5pC3sXn37287qw6UeqZNJ2tXEHHmabByAECU7DPeSXZUTf",
  "key32": "59un76cQeggqNUxFwcpQzApuiQSYH4rNWwH8LnabwwisGVw8wfZqzb1fCSHSvkpnoXUSNL9ckTFyqp8RvsbrNGJw",
  "key33": "67oF5ttmAUkBwUKEiE6CQrV6UwLYM5JMEzV4bqeieQ83RvpFi1XRgcQqDbnvqYGcHFVbLQrVve7syYnK1ufJ1qtG",
  "key34": "4g4YFWLMNyf2LfoCskLNbTnFvEHRNwb3RQjdY5FE8imEocHtohviBzKDbYk3yeYXmX45kkpz27yvwt1QNYyrrkVY",
  "key35": "fpApoH9UypavWrmYoxStKoPST3YURFvVPckBD2PcKNdP9PUCjwRn2hjGfDM78XHMpGNu4DAbJqMrpBQHagJLhiq",
  "key36": "qJy8KjJdAtfHNAkbVJszPjzV147dUKYMj7cUzxvikMxj6t9TkjFQ91SAEEfcKEuS2c2r9o1jV1z4wj2d9iPg5yi",
  "key37": "3g2TCSoUCMf999Q4jiag8XKSskkWTjMtWxUFjvPH5rwBgcV4iy6NVyuZnrNRLesEkVZ5FNf9Hoo3tb6kQ3vBEg7C",
  "key38": "2ppvxSUh9Stm6TiE9dgMMPszeAQXy9HGeq3DYypwLakAZTLwbob56TujeABvSDdUqZDCMzuAZhxLzwmNjA2eKH3d",
  "key39": "4Nw8EKJFTpNfSXTAUQGnUt5QJBpXWV8LabxSxoXm71cSt3mUEbXxrTPAxW4iQM62L4cyp2j74vHi4dACTUTkmugY",
  "key40": "wAjhX6bi24y7dTZbovq1i63fFFszKyChvFzdW8bzyvgwKkzdh9MfB2DQTzGRqMv3qF9qHQkwdNMXaCFgsT4aMtQ",
  "key41": "5Li4zdHWqqzkTtNdvWeXMRTzWqNmmJNevo5pC2yBPR9AjLtMzVnZGmrfBUX52vDLjcuZgDZBXCqydCfjWLWVj2NL",
  "key42": "3dcagFuFk4HvTnn2eqrx2gXp9uC8YbvMyHBihMzoLLLMGR7r4bGmLKq3WWmtg1oJ1XMYZGzdXn1mhoWNFNKod8KP",
  "key43": "3AnfFEXjYEfeL1ZQxG3Ln3Y4yFiNDTTgHripoJnqWwBZShAjCoWRHMYFs3MqpBgLwzbx5NWb1vLqHEh68T9X7Nu6",
  "key44": "5gXajPfqTZmTdLK6BmSjvCnuSScfHPCXx1hgYGdHUNb2xPVLLwPEZAokX84LWFeo1SMQWwXqDJF7r1MYh9joR47s",
  "key45": "4EePiFMwBs3KwtNyZEPbdHVvawEkkPUWCeNmC124TEVV8TfyFwPVgcTPBr8VNqaWQZuJjogYxhVRYwwmr1TexQB9",
  "key46": "3G3ZTowNSjquRyXbc2nC99CXzVZjJfrkXgNNqjqux7gjnV5x8nJ99P9j7erpJ2BcoVA8xLV3AVeeh74v8bKwRAGt"
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
