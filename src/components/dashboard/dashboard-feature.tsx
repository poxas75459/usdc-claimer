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
    "4ytqc99sgiZkBpnkYvzXCsCGU1TtTgjbtVLsCSDSYGmAx33PyG31vrwjfwpqkvAsSJjZ4Q8K3gU7TsUSWSuJhtzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L5r6fBN42gt12ktYcYARiL4pEn3f98krBQRx9rre4zuF8rxnSdcPhA5LGzTgDCqJLLVeVZMnLkyrWsghgQEAEB8",
  "key1": "5KbjQHCGKfhQCDCTPdz2JvtDiWj7TBLsnpCMSi1weTVP7SyjPffHYFD4UeCy8gps8KXzMYQDa6e2Hyb7mMv2CDYc",
  "key2": "Uxz2tbbXNXhnF5HmfVhV4o9DUQanynRSAw48b4irmQDsVZNz8NhG1nExKagyU4knwvM6suBcFibff87SW6UmMdJ",
  "key3": "3CyDrUVsXwoeipkWYRHnVJyanDCyN3NB8aTmRGezYfZBkPZRDCDyixxHAaRLVYTSx9qhWZbQYr5NLJ3yQgHaiwbV",
  "key4": "4NbXNfxD48KyLYeEeVF41AUGokRJX5eqbAWce4KRM75bqjyoWLtZQp5vshMYsad5RB2PPfxFUgNanGjX22XKYyYF",
  "key5": "oueFLWxWCf8tKRsFheX8ZVf7HBN2p82TUSeGLqzXVQd1HdZvREU2a5Sa7AoCjbpQaMt31ax6HTHw1Ygv2A7SHBr",
  "key6": "Sh6wpTr7wyECQrvEk65wU2tRbJ88FEFWR76PyWvyGGputyYt6Cz2F9HLbmgijLa3hPTuRnJdKEdaMina6gTufKV",
  "key7": "36khjHnmfoz5rEsHXwdHQRPAweK7u3i8HSkxt3jy3rBaa4Bfn3joJjRciX9K3gYHySCA5CWemEkpeAAi4bfzwtSA",
  "key8": "2gUANYScZ1Sfg86bzeyAZxphh3ZTStEPoSjNcarUeTQp6vEvxxgLCSHnwp8vkdqnc98mYuJNH9QpQSX5Dq4tjgYu",
  "key9": "M6ABGrDwSS9dFT8Q2pbjgYNCb51WPfFfaPQXCaTwSTPwCUXhqr6Q56qtQjA6mGxXB1bk5UXCm3AHoTGeNaMzzbF",
  "key10": "3Qahnbt7VUKWSoQwNbX9Q4i6DjwUqZr62EMEnYYMA4bG1arCRqMLZ2UgNinuinowpjKSQmUPLYDyYjjugJ562oU9",
  "key11": "2rGTR9qESdQrKMcAxJM3rMV57RCe4GrHxQSthLdvYhmesUyiU8RsQ6WF2TukwqyShBU5Dz4xBA89Ff8Y8VK8x7C1",
  "key12": "27xiB2RY6QJ1TLUiXCtNPtYvPAsnX8ZuTxyZRkjsMThnMPnbmmruq6P1pn6B9QWgqJqKghX94SUa85ZV7smsmZ1p",
  "key13": "5jjnQwa49QwqSEMFLHbhgTxgv7ABGdF9G4YroTtdWUUi7s8fzUbnHuw8cJU3NJqwE8ZaDeVHbHdonYuBufPhJQDi",
  "key14": "24bjYPDPq55TUF1izRLAt9JRYQUCbDe6u27Zbnaa7dJFVmH1uh2Z3L6TPwwEYJdT4Vh6E8spcaTBLePsBqJv7FAX",
  "key15": "4k1qPqWogpiNgu7AbZHVt4mHHxWsCSeGpNukxhtrxYdJdRMA2jb4YxhkPW3wsm1oJCkjPdhjQxCwzAsu2Bay3zDT",
  "key16": "3p5rkjQcv99zDHKyDLu3hkooZNahPwp6A5fePamnFPdLLucHSwW9ExY2QVvrMUXLc2ZiW3FssmUxideBu4E6HMF3",
  "key17": "2HqtkCjzeHQ6a8bBe5z7384P8S8cfRdvYBjgWbZp3oVnB3cbe73vP29ixe6jRmsTbn9qcRx9WBZNFohSscMMxHkx",
  "key18": "MwRCMC56mxCA11J1a8x3wmNoLcKLGPqEzwC2C4A4Qosj8RHsrGJpjDYY1F4gazcAydLSjJGC8BW2mdGwGSwn8rs",
  "key19": "5b1aPGaZM6mZdaDWQpnbrZhJ8AQSaoDy7JFtmut6RooENTRt8Sdxwx3i7AZJh1RNuUXBM2QxGAHxsaAsc9u5WJUC",
  "key20": "3J75iw7SjTAo7Tnrk7vHhXARa44xtsFVTU3ptceYr8GqV3buBVYVccVXKCJtgo57QUPYPXdSSdfBpvffzP8uuBmN",
  "key21": "cDAySMGvGTB6mZWruJbELjwSPnsbVYjMPGtzqQsWmNRJX6LpNLaUHfugbvus2h5YWaRGPHnmkByvDAqEi4PSqW5",
  "key22": "4jY1vRipRzgDuruRxSA5kYDGZ7T2czCxUqZMAGs2dV5hD8k1owFJZ2S3Bv6HMp8DYmNG8fD1ouHUBQA3TeoFSw79",
  "key23": "5xSJ6RFoShmvdh2UsJENDCCqdk2X2EJ8xyiVdsHzaTsrrnbzfwPogbBdan4Ff5Uxh8aNTaS2q7xgJ44qBuuq3w8T",
  "key24": "2JuAPCcce95k3sZNMW2LpL9cymnfSNk3YFWmo6NZPxio8XkodyJxXh11MA1znG57mzyyK5UtqqRyV3bXFXiedgwv",
  "key25": "2JrBrpRAaksqLW88sYNGzHiU9bMf3ZVCVvps2VmvXxaTkdcontczW73ZFb8UUndQPjFpTQt1HFCipSGk8gR2r4Vf",
  "key26": "3Cpr87rQzfkSPBxpzEvSNgMCkyrXK6RCBMsRN6SejUi3Y2KAcGS2coNMy8KN3gUPDw6AJWX9BmZiayq1fHad8AdZ",
  "key27": "CftihG5cNyjiDt9b2kv4xgpVJDkXGUPCCtNiDWJGkt3HG88ZscdjwB1ePhjgned8mQuR6uKsWuzivG2XgxUdPGd",
  "key28": "4757RVHgezwgXtDfF9yptvU5ewRMDoBk6H9n1gnxgpYfJdub7PfUcoGJpXPeAehb2JP4E3YCDnsvzkyqaKXUuGE8",
  "key29": "2XUWmEpxgAqR39tgbSVD3snrG9t3qBc9XzV3LXVqDffHAQGKfb1VuxH2x1GrsTj4mjuZoVYNsMj9XJMfDzkJPnCj",
  "key30": "4zWhbLsvm1LUuCBVaWhtZVjuoM6gERXa5SjaMwuv5ux9QPX6StCt8Drc7g6VFfpgpyotLaom6S5Tbv4LUaqHpZ4",
  "key31": "dxEJy99Hz8G5St2j9u2Djiawei6ae9eneNR4Si5cjDW5e4SVpLbsWY6EnbRiUMKu2mEaUhUAS8V3wWZjbUTj7rp",
  "key32": "5qFUS8C9z8QSTZRcocw9BorXuUeaiPzPQ3sUzL5CZvd5EaEpQae24mNCsgczQ5v6o9urTCdNGgah1w6v9ELLgML5",
  "key33": "5y8AiJ2CLjCzLY3QYK5dyT6FwgJ6EcnXS7jaQnjtcChhibuNByc1Nk3KYd3AghqkZT19WnG22i3MrBNoQAZThJ4J",
  "key34": "tQCjQcPh3XPW1rmbFPxg8R9A3TQx1RviEEVnSy3kWv2Dn6ef1RsRXykN46bDkTzusDiqoHhj9FMd3zHvDpFejwo",
  "key35": "4SHoywRoigFVSsTLPS8Wd1iFSupopiByFLp4TTek3w28hms5Yabac6nsg8snuD9VZeyZG1qz6NBVgDoCZpBACZLp",
  "key36": "36bQzfhSHTrmybagLhth1G6NAHJW65WGEpHkWNWmY6o6s8Ehd42ERZ5mBXkFUkkFFHx2mE8qRdF9ecmv3RqP9vkR",
  "key37": "57gM7RAfJsaYyYsrkVW2BJcWtEiv9tVYDLjZjpxsf86NX4jTXzHNEg74aLueTATcp2DRUJtJh4U3jFP9n95bmAYG",
  "key38": "2fHFy8eesvC5GNEnptfnD8pLa3kSJDNaobftZziq3Jg4YXX5CWTH6gmq5vC6bweh57DoEiXYS5nLkckdtKzAytBY",
  "key39": "5wDhFshoYXKp4RUFNhsbHPi9Njqd2FgLkMRLxVnDmzKSwPi2FhSpVL5bwssE12zf482LVerUn4anZBktyTk7V5YW",
  "key40": "4o7E3a3BmSTtXHPFTrRHsStbjUYJz7Cwy1fpS1UapRWJF9psr7YyeXH6TfohHectNw3BVQAo1HMDaV4UW9oCzjwi",
  "key41": "2XQaV5Tjb2FsKSKrPrjhdqEj4Hzr3hXgTkjM7T8YJW5wqcUdoJDHcE5xGYrjNjMjvkEkFowjtUynYpCwi6ufYw3n",
  "key42": "59PrrXNMEg4YySAQ3usFFGDvt8vvYT5jr2ieZJWCcTaw93QEjJY1WA7uHyrwyziv59zPFzmfZZ4NiKTd2hUCAbM5",
  "key43": "443uF5a4YLUfGupg8AUXdf8mZmR6sbFrvrwUra3V1MRxFdviEWbGd6A3dZCMsNSFm6CBP9SNjYEE6EBhCqBr73on"
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
