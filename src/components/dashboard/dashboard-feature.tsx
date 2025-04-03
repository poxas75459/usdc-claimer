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
    "4bBuWe7bF47L7Yq3g4h275WktqnkNJ3TnHC4yBZGL8rjUBBU1WEHq4smzbSVEm81vdHB4McfvDW41Cz28WzCG5N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEvHgF8gbCu6MR38ek9RMPgVLtRkT4UnaHUP5Z4X88soHBdmaxtggP57W3kan4PYUARm6k5C2gxPp9x5AvbmA7G",
  "key1": "otWRydSuN3f11wap2hSJJNqRGyk6qJAaeoxNCQMURyzTMLgPvYA7fPW9vmt5tJCqWUk6nJsCK4o8HMTfW3GexM1",
  "key2": "4W84CnzxCTUR5P33XHY6E4cxMWyNs7neguTUMvpcFwsMSY4ymhZa1NXE7bVXoj9fvHo7HPzi9RdHXvfC6X6PDg4E",
  "key3": "4gt4U26zM3d7y4P5qBkgVi8FUS68FYKHSADCQeDngDKotYJZ5sURZwttr4CsCFPios3pz7dPewoywobwjbhxFwgj",
  "key4": "3qk3CcfJdNQVyWwnvJgBRHKXKD32D1QazGAgWmtcZ12NfCk8uAecxsPmH8BL85yDGM4SeAHQDadDD2SBvRiUfmsG",
  "key5": "4vqYxi3CaLckLRuDmzuRmVNfpVGn5FeMsmePQRr9zF5qT77AFzsyZwkKH9LbqBu6CeykFxKA2pTdzfGr6PqL2vJt",
  "key6": "Vv5vMcwEWwRgN9zk4UfwQAvqTGsrzodXkWfGMnqz5SpmJXKvTTFjArn4KdHMDY7PKdsoxwQdQimRaDzAJ1cQwMD",
  "key7": "55kTpB8mAMbQA994iLgq79scjRWSPMqJi7WVa31XWTTtaE3x3XxAML6krmi5LxutUdnfB7J7WUDG6QqWSTbPdxEZ",
  "key8": "3oEkQ6jT2W5KtPHzE4BgsmbHoBmkV5faJWaUVMGRQ8DNxHoj8L6AwuJ4utTo3Ead3FQEmi9Fr3cg9WciMQC1DbFt",
  "key9": "457GuVy5mRXWUpUzToHheourkXTYNFsDtpZjAxxqkrGySWpZdgvH2mEfwddoqBbbfmfD9k1dcDFc9yC9SAbpeuTU",
  "key10": "HxNzPmQprT4MYBV3e8Uprte9erfPepzPvYnSuHEXbZ7Mv73ye6X2o5NEcBuz1MFV5LtYTzjxo9EdgBiqrJpVrjf",
  "key11": "QEkbgDcikMC7sV7WAMLDSJDmVngNgZHY3Pjn85Pj7DNXsvKj1jGGbamCkcDi2kfkCud5d7NiRPGPckw2Q9uaKy3",
  "key12": "2kxNTEP6TRhTSfNJKuTrDNR57QMQYeDmxFqLRyUmvp2NZTQDsB6aX5nfunq3goQjJmHqJRXSbXzXVpG36H6v7Zev",
  "key13": "43vo2iQ7btxSVwyog8fZZvXS5EqXeiUy1hoDS3ANYeTCppAawHW5PhqcTkub9u9ERYdjA6ZquNftJwqKo7GnGxeY",
  "key14": "LX8Mt4yFsb7PAvLBQXLSieznrxq1YdkUmbPfTTG7QFQxtqdW6qJc1yBumuwdYfdYLs4pjc1Py9QKYfA6GBEm17e",
  "key15": "3UsJbGSxvRjT5w3rqVCesa3b1WrXRzbyQ8KZsWUcNUytgWvMRrFsir79HYSWkigBgs36XwT8jWC2LSYeVmAZDkCK",
  "key16": "2tDRUNP6suV4Mh64YTov84aiGfATDLuVYhRFxUP3SsApji2NEMhC9t3p5dGuTeqrPkuBnEYRwT8WHuHmMg5MBZoi",
  "key17": "4hJt6M8XcszkzRpJkz4zBo9Wtuyz3mUXePBahBTkEuNN8zhWVXMzhosw4Ubuon2xawhYPt9GafBk7vVWMykpmgjx",
  "key18": "3s2cgQKU2AB5bFuFi7udUHEeyRoksfbshKsmK6eoHtMHZL6hNBy9Vf5eTiyTyUpzDsgPhs5SMNRDZsmnWQY2tUrX",
  "key19": "3DEccd98uihSKgGdCyS8zuQJdacuNniXRhtTjbvVtd9XSoW7BsEyRDV939FoaRawnMLG9MELSyCPbaXfHebuRpbJ",
  "key20": "46b7q9VvqE23QvkNdVkjEGsDwBuGqbedvMU3UcVriMsPL62qjpx7EPL46zf4F51moMBTsZKESwA3oYUBHeofETJd",
  "key21": "4tQks8Qp1tcR6W1qGphCopzPzsxXUZnhmzWczUWdJB5rGWydxPhvPcAF45szKRt7f6QFEe9q59EeQ892AGL748tH",
  "key22": "5xyqnChfgKcznefFb6cnevgotte8LCaNghbva4kV9MiLj9iAzitgzCYaEouHrp2zKwe9jMate1Uma9KpjdSuoEqF",
  "key23": "4xPHsBVvzFX1FE8pV4kvmLsvs7ToW889dhR9mZe3DUdDne614YUeUoPRTLQtn3rG9rNUsMQUZkxzMuMifUZkzzVh",
  "key24": "487YkKSHWq7SQuZjtiepFcFXg7WPfGHs2MpXUCFgxsYJ6d8N9D5C4XmYMGueNFoDJGEy5dLFwkJ9nc178CXtkT64",
  "key25": "5ziQRqhMpCn5HnVWzuUkHRYXS1pdBToZAqXBg4zNcAPs3BymphBofnPjozEfKNWHtFBqJNLdUpZ71jvRSVzgAqCu",
  "key26": "5wYzf3nX3gxPUEwKdojE343oz8XRp62nMwSPDcqhivLU9N3obhgaj2YKD84LmecDqzBixzdkvRRFr4gkXoiFeqHF",
  "key27": "2f1xBoUEb5JMzaGX2bdNqZKWZr7FhVgsnC1T2jk3DoY3ePv7TdFBcToD9nyZNvfc8Efr57fkRxpxbRq3fFYCPawp",
  "key28": "8JNzWNcvcYS6bhM5yxoRyFQKhHC1UmKkVyLDCNkZiVtJYZ8y3UPxh3iWEDYrzfFKviiVteNcjDMDtSgWuTCuw2q",
  "key29": "2mNWGC2rfeGoQDCTu2QE8X1JGibCDfLG5eVdc1h82yrdWs7W7zffynNB9beQrp8N2VuLSQz2r5qiAYCPim5bMJXp",
  "key30": "4EPSDxG53K2XuEZwXHzSJ35wAP7AfFXtgjJK9ugqhLi4QaWdiMWZhWTcSiKdxN85iAaGp8BptCHkMYGS3KSqKTN3",
  "key31": "4muwLJrzeuF4Z9dGQ8x7kvA8DypQ4qXenD5LtB796GdSU5MW9AarQJt5SueMY5DbWsYeDyzkZjemRYTv11VUN5Bt",
  "key32": "anXcyT1B5BnxcGALCCtcFubhVP8DA1eC7BU8GnQKTrkx5q8kpLaWpbRFmgXJqhRNU6QCQFxciNwspooHE2C9BXt",
  "key33": "nxHFQorMAnvKSH3dQfGPBj1UT6PGz2SJyu5iymmvetWpQY3QPpBjbTJW2ySvWrKXbTeMGby2b2UBTeGm2gfUKL1",
  "key34": "4LrJnCdDiXTxPsh4ufNuqaPWQaizaG5LXQkbkWMC9o1M3DaLcAHs3pN8558RxBZgYdQ6fBFYPKVzyDnjFaaayWkx",
  "key35": "35nE9Lfn6Lgr1N5NT2XYF2pL4XCAGSeGAg9gCdM5KjyezDXWCmKBdh1DXirUwhqoAePhQTAbMY6t7Bb8NfTHdLi1",
  "key36": "5qRE87E25eNvUPidnE81Ux3MrYXAkm8XmRpEKCgsP2LAsCmV2RpZSGF7RNeqGPT782KaJk9AWQSo2zyCeTNZJgzX",
  "key37": "4v6q5Bogd2iVRVDM7cyMmGMaLeMpXqqfTVtXv3pdv6j9Pg3NNQRJJWrEpQPxxx1uXTESmqswmD1WPLYwBbuiSbyv",
  "key38": "3nhtMh8PXrCk9bftk5isDDiCmBR2AGha6niN37xPoWQvhRx7h66cru4RCWScZtzgqGJs2VUBeGWLhkYHaqWGVSRT",
  "key39": "3RrpWYTvRsF3doC3fz8L5D5xHJoDsNX36qMeLbmfvc4kP4BoiC2cZu55znVAd5DDWqmLosh7zAYaEAYnQjvumXsB",
  "key40": "37KmKVined33kRicUsPVTUftWqEuJuWc9s2Ahp4GGyzF2NNnB6vUktNAVbNGGDgN4cyETwgktzXS9N6qxpG4qb7Q",
  "key41": "3Ph9b9MFMeSgUSuxcYQKGtv6rWK1ecDJcY95wwSihuSkQH8TY8Uf7wP1AGSrr2pAkvYjf1VjNcvmUJa6jhKfx2Rr",
  "key42": "ADi6F3bEXi8bxjpq1krw4zR6SmjpBTwixkRY5T2Qt5TK1ghYbLYLoBbWFJGYQSt8WNJaoPDmTKoe8Ex1UssFLi4",
  "key43": "3ro5Et4vyUXZsPRFxph86n4iUuyahCt1DprCEumNe9LCUtj1ZaMsgvEG8VN5DNBBJuEhUQoc2fWohPrB27xdwfnC",
  "key44": "5kzqroqJWtSvgYrFTYb5kf4xQnRLPLKZopvzG2S7cupHo5Hfpumh971WSDSq7qd34r7pf9MxgKHivnysQRhtXrjb",
  "key45": "bR74XgbueDWVJDHgA8Jm1MqUiSqHBk2X6C7cmzWBqYqtKttYx1oZUNAZvBrbGXeouSc5Gb11uFtQV6H4uRCKdz6",
  "key46": "3oJXM2haNVYUAF2v7eZsPHwwPVXaBr2Mfdt8o1HEKu2BMaJHRqscH9i3qq13qhS7JdxV6e7nPo3p98DwvfV21Y4q",
  "key47": "47JRGgr9HctVj3ecxNsxa8MKEL831hnEsGCztXHfWWSmWkp1SepqnEoNvsbrEWGDXkA3egY5Jc8wmjwgMFNaHeYq"
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
