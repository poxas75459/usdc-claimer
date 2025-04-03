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
    "2qWKPye4MuWVNKdgFGj669aMMzeeGtDDd4iFPR6riZts2Ac84wZF28uAgygGZ1sACS8q7oPZtvRFqsdqGfT8K7nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceNzKdhkUuvDP37U9zBguEDzCVKe1W3s5U2BXA2DgmFp3EPd2tJ8ZHXxE8FoUHoTVkXg8XA4w6P2xQ1K1zgb4Cf",
  "key1": "5LSwsiabuTkmHfv1dq1GsCty9624jV7Pih549hPP92gFC6vau7Yws4aaBro8W2rYHDRPB8NLE3PVKHFujKViR5Kf",
  "key2": "5H5MWG9kPvsS4ohT1vUG2P6yTr89KPQ6ppp3MgDJFTE65kKNXYdoQ9ecrX4QQAUPSQS7C532M5Dx1JijJ86GyiLK",
  "key3": "2SjeMsabekPgxpUnxvSigmA2PMVPe4o5hR3AZuAFcxA7gnGe1CF81R3HtvXZBGDeMKZXM4BgSDkCYu2fswqAto4D",
  "key4": "3oqNX71GjkQ8KrbsvpUYrUgXhXCmAJ9mZGtgX6FD7HsDoRqNH3jx2qDfsm1Ykszks3A9Gp66i1vKkgT9AbXrWHxp",
  "key5": "24pF2fp9UydmdCxoo6yeoKGoHBvBe9jNbN2osBNucGvztBSXbwR3EouVWDaPCLNEqsi8yAWvTkb3uNFKsPp9oM9i",
  "key6": "296RJGUa2VumqUnijrNit1R3X7dzJrE77gvesLYD1tzWqj3jUfbZi3WotyzB7uLNmLdtxNCtLz3Nw2LkBpyKrKNH",
  "key7": "2mtyRux8wmQMKcZgdbuCnkkphJ6K5coEanKbxbu3m56g795C8SZPh7ssMtrLTeKYbXzkSNV6yq4PUcqyQsFJLzsB",
  "key8": "2pr5RkQvUkV7X4BR4aVsrUXk3J3uQoRbSo6ahubgyMJy85m53rCpAXHWgV7mHsk3FbpGnJpijDHuY7Ywk148KGhn",
  "key9": "56mNVgmBmydiTTwi6c6gCSRAakqVdiGiPHVZW2QEb3m6DhYovy9ecscjYRZyq5v8QzdNZpk8f3i3aPQDahQSEkKL",
  "key10": "4G6pJTXdGtHADABPZbTBP1QwRWWbyS8gqwUpgr4s9ebZrFZtXF4TcWUnS3tLECwCNWYoiGX8MGQNjaH8vcWC4zKC",
  "key11": "sJNgUgDvF5MsroVoNjyML7KiSgiQSJMJbefSoTGLyxRgxYscmurbuobiXQ9Rm6LjzzBCibhAdBz3vPKBd2sHPCv",
  "key12": "fhUGKa1V36e62YtTWp4UtProsLnzqKv5rjzBWaTZv392givvsZmVFgLvoQRP6RCaedjtEGtaCP1YQjSFfBBWSQU",
  "key13": "3CinxBaX31TmoTAS7nTN94NPWSyk7wtz3UoPzPvSipXQe3HtMU4iPg6fj9cK5dT4wBUhq6ZbDTs8VrsjEzatccp",
  "key14": "4XMbp7k76ifKT8jAY93SUrphVQZxzepAMdJvifyC4vjxxgjoRB5iH76HvsL9BfECfPYCCm1QQrXPjVvZ7u3vPynY",
  "key15": "2Xv7oYoVxxw1kSoJ7PLqjzbGSX8QfvZ5ofzHjiMhtoekW2nZuTNW5PTWYaaWG3oHESFRjqkbf8BtmBnK14LrSqxC",
  "key16": "64b2tDcfAUbKEVb9yxNZn8YgJ4wVrN4LH7Sohwkn9SyQCVfpPB9f4x7psK6dVTfYCkampK8LRyxFSjBLVQBvLLA4",
  "key17": "211ixksJEfkhj8X5aDXoAgWiAC9fdfeED1t7BNRv7MQ5JPfyQ9sHZQKCj85KLHSNSB4rApP6dsquo6gxg3vA9FVB",
  "key18": "5LAsJ261zAVUjg3Fd5sC2CM9Ev7oD2ophyoWVLYJqdF3M37yj21wDTzBYHM3Exo8crFAhrQkGRjHzJjQQB4djKpe",
  "key19": "4Acyb1YB84rRQd3REq9VLn9qeYE4pmD99jboDxD3HcTs5hC53yfSmpMS2o1vybWtrJa4iwYtjZATPpMN5S7evTSH",
  "key20": "44YwV22db5iYiiS2JiDhJSLi78TVFUnc1FK4A173xGB17bn2Sk1bTKCHMjFkPC1b8d1u8mJU4r52RFNogBYCabGv",
  "key21": "3y7hswtuvhTCQN5aSVfTKGLK4nA8WbsrD3TfHmXt5W2pt9wrEjXBn53fhiVcfQJd1kqExar1uWnQjeM6hR13SQb4",
  "key22": "2VZMpkQKN9feUWGgJFknGZnEsKpJLWewTcAUE1LJpuTxNKSH4GMruJdbQtP26dfxhVMaftnN3kwJbETgmFCYMbYF",
  "key23": "5VjpabbtTPpS9BneaGqWycReKisoMajV5XQg697gLuYiDRanZ57y39CboBsndS1hw4h1e3niZfRSRjBCUyeMfQqc",
  "key24": "4XbpYLrBGufjmFcqAnduPfiTNyNoRSB3XSBvS5FikgdRzdUvPJGtdoMNRQtQBmegtxsb9P2FDp3Q9qmMGGBbybKy",
  "key25": "4QS7ddBKHDkmvWdvRRF7EJJUNceTBo3euUptB1TAPxFVzRAUYViRbFCWctXCTv5HfCARxAaHQ1rSi5GWm4NxEiZR",
  "key26": "5NCRLi6viiXt3RhSgPwpRY1amZLeXKJEXkkLS8k6o9NeUZSyt1LcCfiRcDnbf3poJaheoBHF8iikAp5k67dZatUx",
  "key27": "4mdKUhNRRk6audNbkJXdnkNwMrRqoPQK2Xyou9JXyEWZjbPuCcX6oGj3MWvjiKLz4Bkj5tgcDBtwLSH23nGWuNn",
  "key28": "317JmDUafvZ3msrxA5124QSkHVK9fYWiGquRVf8RNnd7CiJv7R2HY2SSCMPX6CfNZNpukYhbEHHCfMjHtK2Q8odd",
  "key29": "2H25M6vCrsZWEAkLBxBZNA15hykMgCF8pu4wFJpdZ6HmS1euN76KT9p2Pc3ccDeB1NdUdVziVi471pEKviVvq5cK",
  "key30": "4Am5EEmNDa9jfXwWYP18ppGCpaX7emBK4i8QfKj6L1nPzoQ9yMuJjSoy1yJnhy2ECWqCgV5CemHNtv5BRdJrmkh3",
  "key31": "2o5XMmLSBPaRkbue2iGV353nZtFU57fwVEMhvpQCCaFVUQdU1KcYTeuGqv2Ef5miaoPFZCgeeEn8BM6wt62DPbg7",
  "key32": "4vgJCYhz9eeqn4G9uG22GFZ8U7vg1T8ZUME2DHgrhYxxewYX3p2YjNk6Eq3Dhav1zxmp4yv4LvzqRPD5ZnEGtX8Y",
  "key33": "4BqjYFsCXjNfvbXMFYVWNe2TmAGLcGJaPSYAJEjMvpPAeMmfKqrNBvEA7PqRTtYegeajN3k2VLWbw9bBi2WT9r3D",
  "key34": "5v5iMyq1pYrUZQHooRA6ZArFTezNjAjT28xGCMp5GhXa9TWfx5XFyz8sy6LzPVT1QNsfQHhiteq9jCd4cjNK3nTt",
  "key35": "622uh9AtNuY13oeMo8oU23s9nsXQM8nvF6ZDSQmDgsxwGYicybMu2bZa5TKRBS7dQBJFxgUwcEneDZHEX2KTFjVr",
  "key36": "4ExyF6xcyL1Hao8kgDsH3VGKw6pqP2m9YSU1zmoMDV96Yo5XAXJYu7H9oMFQA6LfsdTZTjxkkm4W3i5CQvGnmGtU",
  "key37": "5TnEws3bWoN1inwQ4Tdkfa45Z1DKDb8w4cEVq9Cqwt6FzVQ9fZwbxLk6gYM1c9BZp4DwenUdXAeQHLTCWaNY25ZV",
  "key38": "J35zK5tpaZP2tfmxoZdGUwYzLoBPSPQyhmd2ejcgfj1cQPYhHJMq2RDWKAR2p4D3vK8KmJUdPDoSfYBtbaN3ZVr",
  "key39": "4o3CmnEfB4csQk8UxEFU989hJUceARyQi2RhkcTvHmpnEfRTVpdzbZGbk3t4gwceNzWz1xqHVgXSkRNFkVUe2HnC"
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
