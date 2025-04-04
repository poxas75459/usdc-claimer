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
    "2PkmYZ62GiUUSpK4a51qjdx5s6aaJpLSmyNVHWsSSJfTUD4mMEYwCCFPZCber7wBqC8rG7tNMjfhC2e9Dt2TByUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SsYcGL4zCv1iPXZnpDw9r78nz3dohieZCemiNt2WQCtuS6bQzhnXdNZ6xVyrui5HQyGAMVeudMdkUNhWnQHvwkB",
  "key1": "4M396KyMxcvyXoYku1VJG7gGVviUEQfKTk1KTVz1zGdR3DLfVpURyNkj9i89fFFzvcBj1P2p5tyytK4ZDj3nZHQ6",
  "key2": "2ZgQ48aBfXQcrKtD5uTQrQwb8JPng5hGgHj78RvPCqctYVPYXewVVLA18g2GAn4Q147GiZEJbDfd5VKQrtoHHuzi",
  "key3": "5T38CtM9St9oFd7edeyXkkaeRHBW8RZsrZaXwor1L6xXh3G4LuEL7UHH8MQXBJPTVwrYvmkbaFUVgG6NRe9dAYTK",
  "key4": "65FNSPxp9qdyHqahuPq4nPwrtmxTYT1rd6oR68BsnwUBarUZi4AnSs89vf6B6LDF96XxZtP52RrCqnwsvTJhjcMz",
  "key5": "3E1M8CiQBGJAMDKcXSTt8C8tCLneVVed5FozXfaMKcUs9aWexNNu4BbM56id7L5g7nkRYookffYXCxtTKHeJMV35",
  "key6": "4ZR1eS6HZfj5xiUrYP9n7MYeP3TZYsts2LUrvwWKr9Cs2Pv6jrMPAhNABHyTNKbnrAAGKDeggSmB2ux7LZ27ug3D",
  "key7": "4mc7npSfH8yDE9qRTt9NP8b6VP9KP3RcdtdjqGeyizw8cL7AvwL38pra9UgMJy9Fk9Uxqe9RLur5S3oNjHbLhYJt",
  "key8": "9MVh9b51rnbcMHoDCMuiNHrvxqCJmrKvw29RPRL7ifPoWesv561HHY5i2Da77rxwv7DjkTFWy3z3M475tXDkYP2",
  "key9": "6745PgeoMWRfRhn9TgXv7Wk7zz78ioFf5j9rH6FnpmA2MXYZ4WRogi4X5hbgbEiJ3UfntjYRe7RMxDgWwZqhV73T",
  "key10": "4m4c2piibtAALPJmKoGvXUurWadyRnfaW3ux4uUaMf3WtFF5zZYCULrRtuchtArDHz6kjwCgE9pXL77No4JFL6aH",
  "key11": "66CWMrrWJsZaEDpNpK4srxbQD2BpfTt5fTLs7qYCwtKVDGT3PGBD5dmwQqK1LbBQEni2KGzt9NYi16L8344Si1qY",
  "key12": "3AKZrPJDdTWBHQzq9QgX3yMrA4qsMSZDcGZc4e41b12K7ugvCgspddv16GWacnsVP61Yk1gbQG2bTvb17pRsrL4u",
  "key13": "3fiBU9BpqBHCnHytAgxxBCP5o5rJqHAZp8SdFqSRK5JZcQusyCnNGv3LqzNgX3jGjnrLHZPmRe5ab6W54cfbhSwE",
  "key14": "4ay2BZNBLdBp6SdSA6d912otd4SbnrXJqUDZ5pRLF2R6J53HtjGqUNvEq3U4nTkG25LE9JvMAoQbTyBWZezLpYsa",
  "key15": "4Z93yqjCeckGV7Sw2xX1nZJpQJCGYd4TcaVJgg5ndEJZ9JeiNt4z5Wxob1oVciwCgMNrBsTFjGAXpLqcgu36nqys",
  "key16": "3VuChyxAvttjrvKMbVd4ZFsna2bDWTB8iKu7BDJxB3YGDDRaWYeTgGRBBnsJ4uidU7i9zUiVKTaD1urBumwM49tt",
  "key17": "3xZsKAues2uTjm9HMvFPoTSY5Y9rxYEfv7LstsyaYXcqVSMgBrYUuT4jkioqpk3iS5wYHetbsCMYNdD44HGWAQEy",
  "key18": "5dtgKnaof9PcoeoehXyyo3viTdLhoBhbDzFYEqJCCL8rqeZ3MMXPa5KDUwBYA4TYgpCBXKoUMSGcXSYCz1C5BHW",
  "key19": "dhxQBXCpFGNXFD7tmqHRsDvznsoS446KujNeoBG1cMVvVQEjuPqYBYXbidRe9mpESUuzy54hXwYbLXWvCYVxGfb",
  "key20": "4fVi7azsvwzAmzRC8bc251sTU2GhKm2GaSxkUkk8BZyWpyYQXm3cPqZ2QqiPKjnV6wnMttbMQdrKLw6Z6xinrHff",
  "key21": "5rb91GufPs7RJ7Ed1w7fe9n6VsWMDzRDe5LQNESMBy9b9Aw1qtWguLAop38jMCuHoxXwPNcRPhUMrVwpGi8gn27s",
  "key22": "3paQMpP9f2QMsU7uZTBDL2fSizhkg6wkPotiUr1zNBCUJcdhtmUxPc3JBrLCN2RRbQs5zg4L89z9jodLN57zn61s",
  "key23": "5oxKHWh9W2zxtaZDaz8vUNZcTiAvteKAJULepS5vq7ixu3XLyKRPfMu4knuXy9iN17mAjfxQEpBFevSFphnhvTLF",
  "key24": "65GR8aArUMmnCcrQm81qxx5fhxCzMJeNTsgTeXbeWajABe17nwmZEHNTMiyVw9EG43oWnbe5NvTz3GKm8Z4zuFpT",
  "key25": "4D7gENFtZjLWocVJ3ycVY2JKqiipyDhuZwSDjv45EYiRXPLEYX3E4VzFg1PnpnTjjgU5YKjseYjhs71Eve1pmfH",
  "key26": "3TZdGe87f7KEfroGJrAjCi15qRbuQFKwiNYK75YsPE4LFw4EBJ6z6YFvQ95pBVG2SLNVzrefqvELU2SKveArsb9E",
  "key27": "3akuQGYQHKp4GAhXBuRDfNVKpMkPWfLysiPgihJsARyQzErRFa5m6z7mLAmGnc6eSRJzg9G93rxfrd5Dcghvy8iv",
  "key28": "4wKFmqWZtpZFK1kRCC16fmu1YdvuLGFLiJNp8eiy1SWDHS8yXSgyfFotwp4V9uL87QYtDou6sDPFQhYc9VPNSLGP",
  "key29": "3s9uufZuc2YRTdBpKrLVJbvDbVxyKUjnXBAMfE32qCCUweVnkNPSkjyaxaXCYVuvEb3aPFqpRg8ExjGmmVobKwmG",
  "key30": "2oibsoWbGWqD9UvU2GenUZRpH8cCcys6bSXq3eikYN91mcLk2DyAjB5FdUy1uuMLiV8MUm58RytHrYGaPyGnMBXL",
  "key31": "4k9y51zwcjFykNs2xJ8Dw1f4sLNLBYdSbcSJ1xUXHU5G4N6WZEN1XECLLNDihByVj6r3KQsSvDgwGma8QUh8xLd3",
  "key32": "b3eeFDjHgEXQJLF4k4RY7X5yTkztAuPT7e2YWQkFR3E4HwhXrVCswHQaCxE3Ft8aBE6YuDMeutuKd9iPD4fMmXe",
  "key33": "x7hE8v4GmjXhmy77tX2yATU5Q7uoEVgGzZaDLdREw3dGpnbrcziHqUDdJ2oKhVQa5sEnDLwJDpMHn5M7LFPwpHw",
  "key34": "4AJ5gUpBkr8TJ1tdUS3MZxpXWgUeU3uzRLvnBhfFuibJSTKVzvo6CPgtZTX9HC2YZNhSnGemLBcdp7FYp8VUEsNG",
  "key35": "3NPBzRTEdfdxQT4Bpj7RcMy47aSKjanRTA8ifYbLM74F568iQGpZNB7HokZeK1TVo28xjqaVEXFVsXcki43xW3Bc",
  "key36": "4FDeo2qQoaK3wW3jiz4DvPH2Spi4qLa2CTxwTHumgBPsTffmFEsMmxLwfcwRSxgzhLsqaJhqughYTRZ3JLwcYcfk",
  "key37": "4G8vqk4Z8zTFqnGi4YbG2WJHFp17YGnzgej43ZwnmGaxbjKPFzdP4yNKxU3amHiBjym7nijSd1XaW1JTNY4by7x7"
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
