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
    "5GKZyQ15QjHqz6dboUqomUtDKvX6DJVdcd3BFTU5De8h6Rfc1bC6demB6AF7u2cigBFBKRPxTet3biXbQurHrKB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G1VB5kbNZnTkgoGzXS3YPAcGg21mYsCfqNLCLHcSysvLFB727TJtMPckhCzVwyd5N3MWvwT4HvmnC5cBNgurVXv",
  "key1": "3aFBVG3SgUEkxT1AzWz27hNn2zTKhHF2BccbmmpL3cnFmLWaY8KnVrgQk5UYKqeYjpkAYsaKPSEcWjbJuduBz7TB",
  "key2": "2ggMzxd1oNyPmcVu9pZ16CQ7crARJYE1m5kCFf6XzWZE7A3ArSSGF8XvpRqqHpPG7SWztBfYMNdk8eWTsFFziKnH",
  "key3": "3zbfJAZTpLPQ334G8PzH1hh6aN7VRnYQiLNNfp2b8brP9igYDbSTFanvkX75XpATkSiBLCC2zYJr9rotqhh7LapV",
  "key4": "2uqWKA6n33UWJftAa2ktrrJcPdDCgfuueECzKfhYwrELyp5prBvso1zTxE2qiCQM1mbVu7hmybbnmthaJyE7vDJJ",
  "key5": "3JmStGeqksctt3itYZnMWuoaJAKMDu1ro4UHx7bxjWGQ8CKLVuo5wHi7NEDT8gY2YNJPPACxVRXEnYSw3cZUXG9x",
  "key6": "3q9SksdQj9Di5yZkCdEqkKf58VPf9VNoj9phMYo8aNqeKqEVTgDb3h7htNQBgSK3HeZemrR6nVf4t4mrycJxSDry",
  "key7": "2hPhhCP8KK9CFwS4u7dXCVMWpHhV7Z3bUeNKJ8BvJfQuWCjg2ez7eZnizwYoTeQr88Ljab6odjzQZCDQZFSeGNXf",
  "key8": "2JTTTz9qYH74nFh6e3tbnWXKrRA1c7LcMVHGJxBdRx8paG5iHsmd1fd8Qv3CzdDLUM6bWgnB1PiUpLXZdsPF5WzR",
  "key9": "4FbNCYY9A6fPUfmnhXcX1it6i3AGPYTTEdr4QBkLnGr1SQBXGaYMbCEjozCi97LaUTEavBpZoBFs616mSAhkUFs6",
  "key10": "2ECGtEojP3BAVbGdEAXRG8DczAgWUoRbneZqvPgZsi7gNAZMEDt5ZMutMzPGSsJjqDBKpiKoAVQoG9iQ21jCUQmA",
  "key11": "26KJpKyZpT8PwDyAXrwB97v3yKpbeJ186ufL2HHxQWZRswxFGiA5DZhCU2FSBtgDseVFxLiANoKRgWk5D5nFQUTm",
  "key12": "3hT7Uh1AVZGcMvjhnsVdW5HgLXULYr1ZZP3YjReUuVzwNqq3cGqjKZ8s7XC8KHs833hjD7VctxqDTmNuYNe8Gqcs",
  "key13": "5zsuGHAG1dh3Yz8PsSTb5qzVDUCaj3R5gacfjguqrQJ6raWoyKy4i5TXCveB3rJ6H28SSDPfDnQWQQXKQWk4R4Mg",
  "key14": "4JRgofdpykdTp7FG4kdNggsnoNobdk8eCd2FG35EwVbthbXF3xg6wDuCdEu22fDXsFX38RpRf7TMSoDe5yiptW4F",
  "key15": "2W1CpfYKVHJgFsRYhMW327Uhw9kwWNX1oGEoQXYvNvQ7VRQJxQtJ2EzYrLfD9Y9iohdMC6ZzNLwN4Dk19HRn1b9w",
  "key16": "3YsBooqgB2QTMZ81TPruLM4NA16T3Lsy7bdPoA9GWWyY513ufoacAGhJ6XLYTaDxDLATEoWiKHAxfPPiXpUYHALC",
  "key17": "53PXnfgMHZ7N3uJWSGPyDqZ8jza9mXUXguEh5iRz7uA8yM5JaES5a8YQtk4mr8FyjbY3CiNoPBRVEaXpe8uznFMm",
  "key18": "5iEmSM2s5GYbTaL5GEVB5SZx7NEK1R3y3bi1bzSJENoyqgZZCEJoNhTkd4GyKBz8sYvbL7jK9kuhPNP4i3EeLAtr",
  "key19": "3Jg3ey25Foo1xqCUc523t8oMNRSYuQMktDLpB1RU1s52ECg41uty5zKb6XQp9ns9iSXqHtpNzvZqqgMvp8bkEeqv",
  "key20": "3jsNE3c8GkA1BdctT6x561UrgVi8Z5zfa9bvQ8omBbTt913uWJnTrQYnbnALk29MYzNBgLTQxwuwrzvjJzcVwSTW",
  "key21": "47QDzDkrWnAd1DSgL1xmEzuo4iCs5kahEZBPnNMyr18nRpyTPQj58g9d61U9eZriF8wXvmegLxGN6dvACaC4VyWq",
  "key22": "wGtAX66az8JciJmcP3Xh4ZBu99Q2LduiHoEY8L1tL3w9WeLYXETg5r2gmFxvaYcNkCrvE98YggVdbkmBmj1omk2",
  "key23": "5RMur1ECchhrWpQc5FG7xiRhanGsdb54Krn3r61tMZsQQhcgWpEfXu5WyLK1fu9VNPvk1f5fTnR9iFvEN1zUBQfa",
  "key24": "N8q3b6TjAPAvsvpArf41umYUCxNh4vrn2LLr4nKwVRHe8rKfpFeM5So4y2PEbxP2YboVpSeTJPh7imYCuw75agc",
  "key25": "4HjzcdeYQbUmhSrSmQxZfu3k7QMncL3kAzRChEqhyniNZ83vYiqLFfgZschVQxo5CPeQKLt9QzNjTJRKp6qwsUpG",
  "key26": "vabtYiiXhbEtgj8ZGicPA78WLrFbrcoY5b7DjJd1BLEV5dPo1QHi5GraBgtYwqVrjfdYxMeiYUUjNkX68xghATa",
  "key27": "4WttFMZxu3fkcsVfKku9yzyV1Vcx4gKna6U649E12UdBUwH7yMBRWc3fvSA7BBsb2kBdCDmFj1Vxk5UA8VnkninF",
  "key28": "kS89DXvx59ZcqF9ivALKUP4Pm4tfka5A1pV4mVRKqiPMzqQMkQk6zKBybfKR4ojSpsfgbXKQqJaLa88k6izsWha",
  "key29": "3Mq7ch6pZPERGCBBVHinEh159NNiYCF9kKqp4Xe3oCVcu83dWYGpyPbrs8khYkEPA4xnSCpYToQDNmEj56JCYZuo",
  "key30": "43iZbeqLAv6ethoVa21X3euh5taKpKSihMGbTDQcdepgE5so9fnTgn93sygPqrTk1isT5RZiXhbDM89Bw5NjdT6U",
  "key31": "So5f1fcBApsGaUWZ6hoKMiUXbsjsrHzrTXCqcZ9RtWKqABVw8MEvuZUippb7VRs7VZHy2jPrS612Ft7RnsmwW6C",
  "key32": "4Ec7LCX5yWQtDKoJtHtUeboP148w41N2yme9cTbXtkNRQzkwHRXcqi1Ptw8erZa4ki7o1g72Jc741CeDQyNp9K9C",
  "key33": "5WwJFVYzVNk67FECPnWoRYBt7b2C1r5qb9mXdQHon85MuFTMsGv2kw1E68X9JHkxotBBUz68unxJywaD9xyAJ1bR",
  "key34": "2akUicgkErEz7mQ431SYSZWgzcWSAiMMfTpoMST8PH6fw3XcFoY4FJBvGSFWsiUJ1Sx1RjTavPMR64SwS2fKtfzS",
  "key35": "4HBfZGDePFNL1feEd9taZXCZQzmBvpCaS7fwBfEgNS4B74UrrdRLjMc9iQwd6ZTLUVr79BHbPy3seoiTjQ13WgKJ",
  "key36": "AEyA25ocxBTsjJ4Ncrpk7zhqSihsrn2qaFQFkjcmn1cZjtfyJTWoeEr52HHoEex92rcCD2dFLbeFtWcmEAMuRac",
  "key37": "3SXQDpc5ntHQ31g7fJAWQJHX3Gasx7XT8UhQHkpTBAAJKYs9tSoFbDave9K5xYsp4kS55SjiWKarSbqNs921MtS",
  "key38": "3b4AhihBxyXE9L4DBafUyyh8fNxSxfgDhKtKHiRLawzBoVMhpzzaStC56qHPwDHwuXzSRwk8XjaTZSwEvH9ndMUF",
  "key39": "MZRgJmRjvW7BKTaxBZBfGR9MX1iHB317VZavqhzYzm9MxeHt3nMwYcFZes8P7pSQso4CQbovfkfQ2Wse7wB5xxi",
  "key40": "45bj3bxiko8Pefyy4myBcbXudbhKb5H3v68CF47xPhQn6UNcqxMmdyuTPnUM8ddViV4mDLrLe2SHjqdomY63aER6",
  "key41": "4dFLMvL4P1UQyrXf4KdZxuPhUJ3ihVVds4TmR5xBQdbcE9GoRvnG8BvupbyQ5tzC8eRH2r6oUhM7SfbGppDyQTMp",
  "key42": "2EAmSd6kw4U5kqDKh9wJPin7JCaip3gugs9y9xMgxkg96C4R4UR6ExGsTD5vmppBXC9J8F2cxhJjX834XhXCAZ6x",
  "key43": "4atKEX6tqaoFuM9AkCNYcv24uQhBdPu7jPJMnRyuD4pk7mRmTpQjbrVYzgcuRyU4Q7xbjTcGxWdTqCpxDD5yqdq9",
  "key44": "2S5yvuCRB7sjR9nDqPRF4keUdWtRHVUE1q5dW2zqT2rnDURrGR4qaZ73xjyN2QQBYAsXnPhDgJbQpZY4j54oLSWC",
  "key45": "3nPkNZnjTSrfpV1PgVRZ2FiAEphFeqisxK7VhKqvHcqs3D88DpmRYa2kiyhgtmvqQbsp9fj6edGL8VEUY7TLL1sP",
  "key46": "QGMDUg6woLnoNT8VdEWU5mWL79UaHpRVcJefZfQjb4Uof5e6Z29wRCw8asqT4VqrZjFVGAKU7erX7tRJXa5vr9p",
  "key47": "uwAFeajiXHpUkDjZexwKBFe3zNCGNwfiW6zyAU8BkeBy8g91RJNrA5cut4iNvxP2Nxc75G3qVMu27KYiw7Xo2FS",
  "key48": "2Hs5mfFjkTrwy28NfcPJHPuQh9gmWjaMwGBg2qCtxi58d41k9RYaPnV6JFVk9HtBfj7JKKeB9mtacVKnp83oHtma"
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
