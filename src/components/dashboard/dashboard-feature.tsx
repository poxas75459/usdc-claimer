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
    "cvCoeeh92AZE7rwzq9HEs2MFxrBUHVRjEEAic8h9Em1gv8TxRfGDpZ9sV6cP52CJ5RGDBZ3y9t7QCig8XaeQnUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tn4y7qcuzv4ZCEGHsL7NtGzpTYRJnJiEUvGsLojCfg3BfM3cZrU7Yh1rqYv4S8QYKmtsbfwUzvAbJiNvoqh67HT",
  "key1": "5hJWdcVc5aeyd2dYC7hbsnkCVY9v6cJLZe6Kkf13VDHFs6BuPG147oobxi3uur6361v3hykiFyfoMLYdkZmPbBV5",
  "key2": "hT78Ma5L5GDmVzJV8HUNbSaZ72cBM6f3yTSDvffACW3Z4Vzu478UrAe6pCgXfsWhLzrPqUi3DwvDAW3Hx8RnZv2",
  "key3": "4Dy8LhjH5tb3qf9xZgfJiCuUWXh1cZpXYfayNa2zc6hNEdDa1sMxiZGLt2PDHiqoF9MuErHAJysx6Uq4aqov5TXC",
  "key4": "4BfHo19gFETEUVzCNFfPLCikrDGdRaS8mgUPEdBSASPRjHzK6XLCpJhNMg2bSCmDEHknWrfY6Es6vf3Er72qAUPk",
  "key5": "34P5x52QcjK3gs4fZTi6YWk4CWr9srqWsAkQAXogvvs5ju9sf6FBPqHwscoPVPVpSK8RhRBgnSujKvDt7pPsYHwd",
  "key6": "4YsdJxyYy8wkpfxP66qThuoizUCdAoPajpf9uEfAtUnUA19NRv7zrgkE4QTdEeEMDAhZKSEX64brbqPFj69wkcve",
  "key7": "3myDTqd1tibNwDSoKbW1aATU37tUKY7xKLSbcJPcojVeEvemDH5h89R2ZN6uUicMkK27mQBwB5NE9QGFrMVdoU9c",
  "key8": "ATmuBNtaJEcQi1S6H969Efib7yWHFYs3sJsKX1yaaT1xhALYm6Lpx4qdBTTRPAofV7o865Q3H8FFYoqkc5m6dH5",
  "key9": "5wmUWGFpVKDPqHZLXArSSUt8td1qmjhTSanNUHVcshxSq41tpPmnowBftb9jo4yrvJpTpBRkCmu2NW626huL4kGf",
  "key10": "4CQV1XGYRfhMMTngce9UdpoGHoheZXhXGCgkTjKKm7U7J5AdTQeS11RVrCkvAQGLjiMy8BkvqDCBu5rsC2RSANGL",
  "key11": "2psFyrSa9EaGKj3xvmYHV8T8DLdkZowaiX4mNAhCgSTrZm1rEpegB64NxUZHgz6D4kt2PZRtxZxLyKihvKnzXN68",
  "key12": "3qsoGKrVWzVxiZN77NaTd2fnH67Q5vZLBaDG6xBE678FQuB2wDG7ThD8WyCQnAuXDDEyWMrkhxrgC3Yk5wEhoNVD",
  "key13": "4H4Pwd9rhLC94qFsgjktMSyozUjDCPvfJeq6MGh9XHp7mpWL7QGEHLBFJMQAMERp41LWKcFSGZVDV8tJ77bnaP41",
  "key14": "48ckj7SEGvybGQVfiMyBDRUdQYZXcLo8umrYDFQoHWXCLMpxbYbmAYUEkunM8cPULzJfH3DRsajBDJkftmrBDqbr",
  "key15": "33ypMrA26vnUkCSR8MsiHAXN9a7s7BcGzrAgWGFd4MAJ43FqGz9g3BDniVHXNZYXmYqpzKmnGTnvzdorajJ6aTEp",
  "key16": "5FVzZG7KEdEvLzEgZsLHxrN6KLnb38jfNUkm8TWEhSqp5LNrpHXaAeQoGNYFDJYVERXkw2gRfeKdNifPwh5LxsHK",
  "key17": "gqi3xqea7xS1fuBBYKLvJrZ6pajV1zoyiLUvcCBoQ3qZWna4uWD921LugcX1bJwfTmVxcX48WPXoz3VDcAQCesL",
  "key18": "tShsqQYhkTDiKmX1hp5XbnLBBq9vgxC2txULrptbq4bukkELPrn5ZBnafXRyDguprU27AcfaVtQ8J4SUNnjXWk5",
  "key19": "2ss8vtPp9udVFfWFzGWw3S5dqYHfCSS6uiJoJDNGdqigqbBvVppHvWqaTutnvPdk9rpBmVqT5EEgjBF58rnrkPC9",
  "key20": "4MtkjVCXCRie6c2srodiXQ7eCSnaEm1SCFimPt3t22wbvzDxcBQ5kwQymhvCAYkiBFuK2bvk87bQHgipaGYqXwaa",
  "key21": "4RRdpVrfsJpHvo2hTPtML6T9VZWLieQzQMgxeiC5LYWkWeEsLrTT2U8ddcUt5pU95J5G5H9Pq5Bm2FxyN182te4F",
  "key22": "3Zc4gJui6eh6edCxPax1EREPvkJWSQ1phpoaD24eBcV75noz5W7uEG3JmY66ZwoosTGHdwenpSHCXR9uDrjitEQj",
  "key23": "4WdTVViWDf7kiSGCdyCvBp1oYgKQpnDqwH5Vo9kot8FNrS1u9nfk9ody6NDirXKkFtU1rKGZJtLoQhXHYe2VHaCQ",
  "key24": "4NqvQD5mXoCFMsu4yo4YeL75uhBH7NNDzbLgQQssSBR7HFzKKu6SxBmZYme6u891kcDPAMUSiEkSqJKoU1uN98oY",
  "key25": "QSMoG7MBN4hHKRHSpVe9vToiGpaxeBMm2YJRN7c99Yu5EYBzemQ4EmTVXpbMHtAymZcqD7KM4tVchULdeuAA3HB",
  "key26": "5yKx2mSrKtXCjqVUXXKMyYtayjCjgor5y11UQ3dXbVmTnQTxFuxyEJn5QneHS5WTLBH3s6Koq6vqUihNy4nrAcvQ",
  "key27": "4uFkCkqxyQtMamtbZGykTNBSj3fzHceDyWNNFUwH3HE4H7LMAm1UNJsyvLbaKr6CeQ9FMzXxq8jAu1vT4E2geGZ",
  "key28": "J7RhUsq3GL1i7WPFe3tQ54tMrTpXM8PntrEo4jijwUhnCN4mHYGoSxjKJHrqJpA8M8QPiZ99yGkYdBrHPqC3b7t",
  "key29": "4FqjacBtggCJEaXfuKjis15xS2Zzj3vJFPy2898jKTdpGqbRtwnuF5gg2TzDNHZydBoz9cum7ckA7zgAXcqSMKuC",
  "key30": "4rQwAgxmgNHad1yYr7py8dJD67cM5EEYEvXhnLL7usxTETst3NjvZyTE6aEK7nVjEEGHwG8L8eRqKJF4xHu7MH8q",
  "key31": "54boHgA56SCaJdHoKgirauUi2eUzR7CnNFYoqRF1HEBi1cSgdizUCstmgBnC7qY2oQyeyhVQARFCuVoSSsUAVJTa",
  "key32": "2ay9x6F2AgJzXQtxrX2fx4dqdBo86633cSHGs67SX7edHumvewNRhRvB2JLBAHszGsnU8XumAYvChu2mLLabV7o1",
  "key33": "3fxFxtZ8hXYc69oVabHWiTcNXLtxSX4b9sq4iixuVg7iZBRhygh9LoF3nnzj6weg4MAAYbhqvH7nxsBnQg5Qq7Vw",
  "key34": "4Xhp5Weoftc2VCVftLcm8ibxgwZPxnua4zZbd1SEMGg7cTWuSf2t4QdfXpkyYEsyF56RBDDFbJAhTSn3g81vUsTw",
  "key35": "39uBE85npufT8dZZ7c9q7Agt9rLehQ4MbTWcSGE2agJgc1YF8qCwszoXZwgXLX7LXdJvgYJQ13yaMt7V2xy8RgDH",
  "key36": "4oMZdN7gsd6LrVYBHgnwLysPuGCPjy6awYUjtiQ8UuQeCXZQoTipDuzPgyY9YmtvqcSAC6wFKW2dy2VksncVJn4S",
  "key37": "2ZHtp9hy1pHvyS8RsBQxEQujPMAP1FBokx2kFBTstWvRvdXn1YiZRpWJRchFwfHNLBQVADpSEsgSBz494Qmp9sGp",
  "key38": "2shbbYUF4epdFYvVpTzhsaCpyugv3NvX697d9zPbpfH72jKqVWBJL4vW64KRJUxtqQD9s3n4ciqBgWpHpHWSCma9",
  "key39": "egZt2MXLQV82utZK36oPjxXG3nkKTD2QvUkVnn3aNoBjQrzfb4z9sHYJiECjSph7gjgQZuXNCbDpNsXuQuWgCv8"
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
