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
    "A5P3PezW9BnhAMFrmYF3cqUh5QkqDqJNa4kpNjmjS3joCYC3kiYcMM4EwiLNWrsiCHNCvRW1eqRbrDxL2g3VpXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dq8XdyTyCmv4F7tZ67tfUxrBAVDi8z7MGPXem44nA2K2Rg2USLGAmEykjFYX9mk96SSZjMcxua2SjntV6YrhScy",
  "key1": "2zNHbjLYUTtcMvVXxnKGv2YbXmHkAe2NKmiJtXcVJWq1TJE3DGTHrxU1aVHdTK4Ksf7KDaD4zAq62YGBazRztzsB",
  "key2": "4NNbgVqUDCce1wyw5xK55MqA1EJi9YCbwxgEhmFCsQMMrorrVs2eTDPaqcaA8pYdivsMJxoHzkqaWf2FcLyADzLL",
  "key3": "2ad7EYUBF6kdfSmEAC4L34zLyxGwsrtokQz3wM9ByVXNDDF9SFaMqP1d3qQYqhxcQYFjsySRgE8j7pChhPMvtbJB",
  "key4": "4DwmJS2DKiMzbGHLAqXTvkQLpRvT4cDn9kuyijLcTVUNLUiZsNJFNMAj6s7EeCexFdxxJ7iRWsinFxQfVAh1GvLj",
  "key5": "gSi5dCphXYzPQbv2EZjzWkauTRYvfEnLiJkPhwXi6q9eHna9s3pt7mSEhdCZwymhCTtBgNRWRNnHndkTymd4wnd",
  "key6": "3eUMRSpaXrdVR4dx6LoCevKtcFdXyL878dFr6eW92Wez7K81Do43knYNq8WR2WfSk9H2GwYuSKxRvCdKSsBG7kov",
  "key7": "2M51Q5RfqeJVZh6zBCAvi3P6H1HodjV4Phcbd3wcMvnkSaPkZ2nvBygvEEqFdancburmrq7JydtqHvJBUXj2Y8eg",
  "key8": "5JoyyDuNtkmwckh31TTX1RP4Cs5NU81JZfNLKf5dDMDbNHRW3VVngZQeUejJ5SdWTUewUd2kdD3x7oZ4hZ1HTSUy",
  "key9": "5uG3nAp2j7jH6Xc4CadV1iiogkyRZpKwneUbd8gsQgtizJyRqK6qHBuBj3nqUYiME5xUJVqnUceiQXqTsLUsdy1k",
  "key10": "65biZZA4tFCUa7vyja9NS7fs4Cn2otocUkzbzE7G7c7usFP85xJGMLD9AsJS5b553PEPbnHmsGYw5ZfFp4DbDrk9",
  "key11": "3d3Xxye1QdfGEzUdy1RYrTUqMJFuBYTLaGsJw5kfz3H3YpbKdAYG2B6qKi43Zy1aSLt5fvC46QUjJT18YZW9Xyts",
  "key12": "33QRNR1oHRQLXLvGr4Jwqt11xh8YR9sCUgxirqw9SVoJzUD98VwoHdHcXBvkMf2JXeTQ4nrhqhx8ARXVdNyb2m5G",
  "key13": "3RGEdQuzEyQnkufEnUoxU47opNts6MSAunZ4DyquP14gWTszpnSGppka3jnmPLymvjU581ASbTfnBBEfDtJrXUfh",
  "key14": "3MpJiLNVszfPLYBhqeNFHaYXWwJkrUaaWdogJKoYFzBdoqCHg9Xn3r8dAsRVvfspiqmTHiMHY2w92ZXqAY4uTmEi",
  "key15": "3tKn14iLfQ6ko1UCp9astbuLvEBWGid8WPrCT1UvF9sixkFqPffyULMMk4fTQW3GE4LSTBtcbFW1TocF6aQmYcdw",
  "key16": "ys81PkmKCPxQ24usUoC9ph1hEELnCdjkCktheqbsYNGq4YQx6sH7ueJfihciET9ibPax8iYsYtp5VSrvDdW7Mf5",
  "key17": "2D1om7JmavtqVUCEStE294BnwFJjjrj8X1kYMisYE8fHwHFatVarZ8fSMp5nRCS7vGw8GNNJjTYqf5oH2hSZ7s9o",
  "key18": "5auzVEqvANZp5yApkVDb2DRdDpx2H2iKaJqgkCghLbDuJCRTStWQunrdiJWk8QDeWTTpsqZpY4Ftp4vgRY88XpDA",
  "key19": "4Fe8AmK8rLQzPewQWSyFHpCKPVoFrZghQWRwfBtek8SYDvVMgga1EswKB4p2Lr5if1eDYyn9FEHLp1t5Rhmsf84a",
  "key20": "5sRss8JLGrPVqzvDKBwDBusXKYJ4CDsLqBbvVwXNVfsuELt1WGa6Ar7Z19kx4Db3wi4ChKDnWdgha2DhMcDPGhp9",
  "key21": "6jD8SphuHtLMr1GiR17f3BuoaEJxG3iDQufT6sCK59TrTggyMXckNWNfqbUFi5BUDVr3VJxYzf1mn5sMJwbjREu",
  "key22": "2KMR3WHYJUkDXoiB93Fju2BbeTs1e4RghiTLwSdoiQ6FhihadcSPh7sM21Dk8Fqy4PbtLi8UHxe8zjbUNVfANVSq",
  "key23": "3w83EThJkP9V4JP84PLwnqXXmRyexeTkruFg26ccXTG6EqwQrHifT2YyVsfrmQLt8Ha7kBX7zM3facjJzNPY51nW",
  "key24": "X3DfEgg4FK6JUZtKar7YmzMu1CD6zus6ams778fKACrHcYnaEofS9dXoL6td5FjvdQGtA16BuFaDqAKNuU5Go7o",
  "key25": "3Vta1dubpnwE9L74NmSoZ6zQC8yQfdJmMfnrWhjwMACrjP8yK7i4epwbL5LTG2qCUtTcJZ88ZQXGHW4b2QzGth6Y",
  "key26": "3VaRwzJLk1dMtvzPBh6Wign5KXp8nnWK929hrWFdc9oZpsi3tqzKee9M8uRJ1jTz2MiYwBcQcU7Jm5ers5UNMN7z",
  "key27": "3gGtP5dCzwhx5Nr4t5dPZTACaFh8w3aD9b3h7pQAZt6KrVmCEHkt4q7YChJcxFn1xbrvj5kibjTFsY3HJoFth8tu",
  "key28": "5uXpFkz2kMT9pjSMmZhNVoH2HwRfM5jnVaRPzFtzycQzmirwcer7cHtLeuEKvxBaTwYhmBhgPWBJdWSoUdYnRSL5",
  "key29": "4MCcQhLiwwNMyn5y2wStdtJ9uEaTrsuy9ccvVaqo7ceh2Fndk7KkfHqxeocFLuTr4g9NUB4UKuA6m4Qx2xMyJWSx"
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
