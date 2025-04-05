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
    "3L1UAvQqKcVYearcW1wbK3FUTnJBkdfFJvFi2SBGogAVjnWjdN6Hs6P8wUKq6TVc65jwUKwY3Ugm2GFfDPDzs5Uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47TtUVSYWb5bF4NJsvTnGjWuzNRBzyeWBmWd12LEmdbS1TPGLDDZ36P9AfBVsXEgxWfojeUCkDGGoLi5LQhjcDpd",
  "key1": "tbQKjijS3Ys3tA9SLtMQdEv7WV6zyQ1UPSGxkhgF4wu1upRejWKGvrfecCceRCeiyzuP4rMSXoemesiJurBrd71",
  "key2": "38mQ9zy9TvnL3xBSYogt8Tand1X5wp8qtAysaRsTQUCY5dkcQrEHmwKaEfjY6XNffdsuWU2VFn6jyLhwB1kLQt1o",
  "key3": "4gheJEL7L6xKuAhY97oGeDcBYMpjufK7NhGWkFKwqn1x76FwYskvhuqTPRFc1T5hXPZmAq1FYrCds4wizSdvcnDP",
  "key4": "3QJ4X1Wjkpd48VG1HTfZYM98AvuM6KFBoj32g3WbvLjLugZytWBD3Zj2FLX9eFUpv9JHiZbqaaqweDWo1b8FARo4",
  "key5": "jBNmyvw2FLMNxUisZwLVSPCVj9eLTikkMSWgNmppVCuzEc3oMKBcc4WnUfbEjTtk7ejcDKi5Kr2CRiyH2kz6MMu",
  "key6": "ryvgGUw1F1GsWYNMkUmzHtn75KCJ7Y3hgYq5EUzevb81nG2xiByMfb3iVSW1NjeNQRFxKJr9fJuUTZRisad7D8s",
  "key7": "4JQashvV92U8rb2Uu6rEkHuhE4t4czs2dJz2gyLKAjGBRFvLjuouSp1A8eAVasZnVychtVitRcrkr1a447NhwQL1",
  "key8": "5rMbDxfEizPegP4TJQm5YyT4vKRhrCJx8WmA5tGNWD2rLrX3MjPLHpCzqmZa3Ty1k2Xjub5dGkZZubmnAhGwYG6A",
  "key9": "2zb7e84crvRjazQ6iqtRvbusdr5cR9M85hVUkXNQtdwara2fgNtbgG3c6e7QVLzCahKzV4TuAKiJQ9Tp4Ln5qMdk",
  "key10": "33kXoVAMTuVy9T9SQhTKvhoDKZrKVEoq56J29W8sVKZvq1NP45UZ4jeLBETE7mRHJeAjdUKvskYe8fACJ3FskkuT",
  "key11": "5Xa8bKRAvAepWsLh1EdHLuQf5oh4KoDWHjoY9Zd6FbijEDHHWAi6jWEokkQCWD5RJTpL3gG7TogQqucEGN26J2fo",
  "key12": "4n6k9xM94Y4FVM2R9U1on7P2fscfyvhuURGvn283BaSfjUNwy7QK6TZzFNU1dufK3LzUQCevf92rWB1JCgBFBwc1",
  "key13": "5JG4HsFyAdmPr8xvR4im8RXyP13K81FgKVDUkKbqj57huFP3gzPyGEAiwxMZGKESEay6RnEqJLDQ1ZMDxMFsUXfQ",
  "key14": "3CWwJD35qyxWsjk3gDaB1dDKLyVYxFb7xLKcA82ZnH3paXJykyMFiaz8rfXnA2DN1N44Sv1hM31jQhWVUCTc7TTJ",
  "key15": "3XL1UUVYm7mX1NpHjhb2cj5UY1aWtUyRGdQpq8GZuybMiwoDmuacfu7auAEf544HunuT9BGKaTMFV1SU6cMdYJ7q",
  "key16": "5zbPzjyhtxhVTmHS8rzYQw8Pv2Ykm76afWb2SWpWJx1bVjwBxBvUTHy1CqD9eMhTKH8PmVNs1uiYSArVBZxgbYMd",
  "key17": "2WHPoHETvqsvcV1yXKnTQjTs276J1c8NbJcpmpC6VrXhgJhtPX4kvTvuNJ8hUpFM69UuFUJDRwQQumryfoYwtxZn",
  "key18": "3vjfJyHcxBWCsziKQYo6PSsw9nXayNf99KnYrU9Aj81gSRYigzqGxU8FJ3gk9byDjxDLWiTAGYaQPrwged42PR6o",
  "key19": "4NjPfNB3ufz9Far264yK7MfZFhHMkmLbJxdorYaT8YCV1LF4uRfjWhDHbKMetjqFyPMtkgU2zFfPS6xiXtibYyLG",
  "key20": "4842qgEhYiLabkiky5fQt6wPaKa6Q1rTvcDgJowekZdnKBYoYQ8hzJsqcTLyjbLqSyg8SaBffRdLDxWTnLHMBeY9",
  "key21": "2dqgQsMH8DD3YzetYphWrQwLUunXsqSg9RjREigfg9V7w2Jn7GUDio2d6KkSar7GiCaVRjs1yW2ZL9b8WTqNFnDJ",
  "key22": "1fDpbvzN4kfnbGFaXXUvuEZobqXF8qWbeY9tiGtqmwSGNLj12yq4FMGkLi9PDgmLZDRa6gHAqjB9hY3Bd7shpG3",
  "key23": "2X8Gx2H4tszPFf47dtKK2uQK4je8ox7ZCZmn9RtMXGiKADRBibEQ7wGLBWweH47FDLPovRCi8FdZNqa4wR8hmmfL",
  "key24": "2Wd6KGTsEHvLjv8uPDMTuWuYA4nZKV7D7fWct5MeYsNeoh8tTGppbuRuShaJ5A7wY2EfquSyBzUHLTR1FddQWtNN",
  "key25": "AUfdghxhzCbK2oajh8MfTyZMmoQ9gfpuGMpu73NSz6EcU6DUYYTJdGmxrAm6QQu44v33jrd4QRKv7TH2cnEa2GC",
  "key26": "2GZu5gsceh1FUboafR7kSBLAzw8TYxjD67FtxYMgFWuCE1bTJyxnYtiVoqMkqGDu8115kH3DEdo3zAD28MYybFBB",
  "key27": "jdEKwKFd5ySR9YhSZFXrTKoZ9iusoSXp7KfSWNTMfwMchW6eVj8j6BnTP4AZumRsPhvgmfSN6WCUkjTqDcwCd78",
  "key28": "52P2hEQicnnrvBnY62ctziVLz4yR1gjqHNRjebw2cFD9oTGiZN1wvC8LRxU8BNtp3LpVN5upmF3Z3iUaag9tZbii",
  "key29": "HTLRuY71VjCEGmk9k8RMx7byvkDHhMaDywBNVo8AtDmYewN4YcWbif5L94QZMjQVRe21VXZXwrhMEkmBBGhmc5J",
  "key30": "5yT5DjnYHr8Ftwravx7dsjZGugXm2nmANDfrdw5EyTk4nn6gzBQodFupu4UC5SZcu4zrb9LeD9ocXyQUBv15rk9",
  "key31": "f4GUjRzYELvr9mhqX9MKCUGrji9T8JzrT1yf2wDpXNt8tftnnVQCCP8dnFez2EftWxHjK12eCY1GtBXCaAceqQs",
  "key32": "nMRaK6CRGkkMLj4SSjU6AhxT4vufXBZwuXEeFocs9pjUeSEQqEyXmFQw3sJqAURJkDmUnUTMCDEZyyQgeP9Q8hD",
  "key33": "3CnCbaAQuKZ3chmZViezJAi4LF218jMc6Bcz2w6bbDDcMXKoP8o5CiM3JXr2DvXKysWYs76AXkNs26wYaLKFtWjU",
  "key34": "3NrptW6svvomdQL9BU5aVhQeQeHrCz1cKMHKKJapH7iMHRQTtHTNe6Y77mxsWpkHRGypkg1mQQcbLYEG9ZdB9mci",
  "key35": "5rjvjiRKxu3oYnE77MFtD6DuYxgjq9v4YBJKkhmdocw4RZNBu7DP6FypuWYyRz31Abt9yHPdxtBroF6icoLUZza3",
  "key36": "4mpp5BSbNbQHDWmTyxQSXDJNuzN9W3pA1eXfpzbMZ89JLsdkRPTF7zRPqn45fVhqqoxLigzcyCcAZNgWpadTu5fY",
  "key37": "27DtaJ8sZrHWEptVEYgFyLS61GhCBwqWNYUwt9ktSaXWDFb6hKRiCHcxBc3EUNJ1qmXUYWE69UVU92yD4QDHzzdK"
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
