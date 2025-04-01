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
    "3krKcKTMngcauPzwgWwW5QxDBptAmG1djgfV6iaWvQvvfRA6TkC75CGfHQUGZA5ShYAoZFRQGBEApp823tivj8QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JtLSCUiSvHdeSCE2ARkMVtsV6V9yeSwYthbWe6j9M79GLjZRAsTDhSzKT8Vzq7TxoK5eYZAJaAoj1FNY6mppgYQ",
  "key1": "zkiL2Pex12Doz26wqm2wYufSY2EobYwxfroEHUsFZUo93twzEXRZWW9amhQYWif6nrDy8FwYtbKHGQZYxjS832r",
  "key2": "4EM8mydFkLnUNyaoDHTDQp5D2Nfe1fKV1xBMzN4wK3RJFxWmDiCZoDC8cBnRJHp9DNtZuzerJSfPgPdQoUkcGgRk",
  "key3": "4CwQfF8nDPyY1xsJ7xJseKWE7XcyGTU331WHBdY6vZPjBwac2EyjkP8CXDiGc5sfpmQFifSv3JwWnh61UizSUztU",
  "key4": "4iSUKSqnkUkNUExwhq8cwoNDLK42fr2XAoctTVCDvUhSY1zRafgakkCZu2cboeDPw4gSt9gjn3kCC3oMjeGq7kqc",
  "key5": "61URvqSA1pA4kBcGdvUiihLuA4mBycedQpfj6pXdKQcNo9MkdKzqwypmV7w31Qd8XyvZHCaisfD7dGamgbPrALuh",
  "key6": "3nTZ5jZx6z6WdvWL2X6PVsTJ7orMga9YZmZqgsHs4vXFAz3cq5LnrJjPfL5h84n85EtUDVFoFME2vZ5JSYsNn675",
  "key7": "5JAK8uictZxiC69cds497gEbrrV6JFdRp2E8GBewNJXVxd4zQoxRzcEG8z8MDTBcdLA7FiWv8NUCtuHsbNVebkmt",
  "key8": "bob8Z7UULE3ZuTRYDzUMwABvaYJtZ8yZU8RNiK9zYYpYGANQAcB33eM3DTq3ojXMKR6LBpvSTTDU742X3tZFwSy",
  "key9": "51nz1thev7283ruTcJa7cznhhvAJdB2zrB6cGDwhWw5mLAm4zpeTYXcBGbs9B5TBJ96Mf9A5e54iS2VqKz7fRoS7",
  "key10": "3FaPfyKXoc8N4Xw6BXBVmzKU4uGtowQ6mx6JHSzP8fLxoVXM51Znm1zGdJZSFBudRsXSeqymGN7ndNWzRWaep8hB",
  "key11": "43jnaaVMeUJvqt6subbsQnAV4hRcqt8XNPHhRMrxBchZT2W2NZo6wTSFYEvpCAGqmKTgZEqA5Gri2LusRhkvoeag",
  "key12": "2NUfjWDFpv7f7br7DSbHYjA8PX4ny3dDRgJjjHuVszFAhFGNkP4JnEgPoFVmbTYwFK1fJjVNWat1acQb15CBG2E2",
  "key13": "53YWQrJDiH6NQJD3t7fKqzxtGq1FvriGXcUuDNme9QFMgtzdv4e7LZ5bGeJD3WWXK1DcAJPthpBJggxSBjDrJFqe",
  "key14": "iSeV1JJnWDSeWzXCrhzgRTuGx7jyTTLmpMJboNkMwRZEzs6nd4jGDtCfZ8HgTvd7cTsc5ViFoApvJVUXYFNWtzB",
  "key15": "67MqSCvvR7M24GSUkiz9aj36DY3Usb1yZ1FgNA8uDPACfs1sQjYK1hJbSGHygGCpJdpdsyaAeqA2DfypvT6TW9KQ",
  "key16": "4kP7g9N2qVpu8qCfeZmqezghiSVT1qj7t3iX6QaUFUbuRo5h3bFxeQjgQCi7CMW1jK82RFtePw79VBCv9rXxidhY",
  "key17": "4DSRsRCQ99SR4fRaJnBuDAWy8HvBSBzvDDx91dbwsrbuzY5FPTN5cEh1EWDUPP5mGjk9MSvukFPtQY6pd4homCpW",
  "key18": "3pzEhZcQ7Md7Ktvyz1wrbAoBTzZxzuVxCoKJYcgbffALQZQ7Biet3kvNAFWJudr9zpWctdXsVZfkFuoAbUrwEHoM",
  "key19": "3nmXspmGmwoZ5AE7Cn93UX5brpmz8ukFxwf1xYdHih9R4MPPMWcrQt8jPqWxfBm97QciR9HGnES6GJds9qmMUeae",
  "key20": "4Zxyk8aHBTrffPX1aB4Sykqjj2cxUarJ6e48xDFjphQJg2hCZpNioBZ7YT8fNiGcmQvxavWP948zgwQFYS9c4nED",
  "key21": "5FbubmPKWVw3oz6Gta1iTPwiQqDdPT61NWppZrh5RaUeK4dphZ6PKSXZTHLyfJY9dxpRu7P7jr5u5r8LpHpV5drj",
  "key22": "3BhNZyqXUucVa1mfwnPAbqb432M2aXCuAT7FagfmBpWMtZueP8t7NmM4cCtidynfKrh57vvjve6GeaPFCFFw6rjM",
  "key23": "4ATsgRA8yuVeMwU8zHn1grtREmfDN4kHtZrXkhr55m2A7dKrw4woXE9Dj2LBNdfm4hPzRNjyWAdZXZqhL8n3sNbj",
  "key24": "3wgscffW36zwakt6Kwq3xpMNe6FiGGiihhmrSJHh3JbEn1X7QoV3RiVCmrCEro9hsq5i2Du32QvQbAW2XKhQGeoc",
  "key25": "29yDEsuyD6eo7K6kAoyDrSTxqCdnTpevnsh7Kti84R6oGBEZwKCGzo433N1E2tkZshTXsZ1X5Uac3PQuhKvnqmBg",
  "key26": "5aujZuXi4qSR1LQYzKQfU9kP9PDdMNikDzJrvyBRJww96dVq11WsR3p2RF7SF8rtqB5z1AQdH3PyNKkAUG21dGZX",
  "key27": "VxhxC8NvFWWRHxkUznGDgFCMmNLZg87YLjN5FdXD6sk9iBuLGN4Shzgk58FQnUCENJbUVL68vYsvVkXdfUMMm7y",
  "key28": "2cwFMoFUrz3xHBxtS8CcZUB3aQ1bFu1FPdBaLD8un9yasKnBoUDqPKqNgxxktqFeDsjJN79Z8LWmd8nZxvrYWeYT",
  "key29": "5J8jR6mu6w977U7CirjUsnAJGTg7LjhzrFVZwYLtPiJtiv8mnAs5miHMcdEsaqytxw6ATqabMaShtCmDR257avA8",
  "key30": "fqBhLW8irJuygbRrufnuF2CXnSH6UKEZbjhCMJb4hP9heoTkaeCiKEv7x4jfdJTPsbU5W1L33ayLLF5bpRoc39q",
  "key31": "4H1nYnzWMQNyD7ECSqoc2TWMQ66m1fRNMBc2zktdRTu7GQx57Nx3Ryj6AbHJN9TQ495zZXFbQE4fsesB1WZN8RXu",
  "key32": "26Kvu3DEAE56hM86KwZJ9kdw14ac7NrHuYtiw8RoTBmhzTxCTdWDQ1JuyF2aGLdq6d5CJuCKAgQfFhpSaFCQSzTZ",
  "key33": "4DGX9EUG6Ed6cMYLm3q825HMqEMEUFzLRJdAYDxD2CbdaXM6CAdisb5w98EmatyKWjLftyzXZLLY8dZFrzUbBogs",
  "key34": "2UxrPgvNMwRfsQFjz4JHjus6qMcbz6Dxnf9UgJu3JKcGivaAQWJvVKjSHmtXxoir7KdPp8wXRxkk22bSx2Dxw5sk",
  "key35": "2FsM82KaAzUDaHe3vZN77VZyet7dC9fS5p6dvxkGUmSXXz4pLdDMgDde4JFZCqbemHwszDqrPxuUap6eDJkyvtBX"
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
