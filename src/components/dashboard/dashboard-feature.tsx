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
    "5gMzWtk4kwXAdj7DDAtW2NLw9VmfFGy3iRT3FXvAxYFuHUrjgnoJMVaB3Aho3hjJ5fpZfp2e1gdykV4nbZEs6VVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rd2MmnqJWpK1i6xc8UxpZwoiWt2PVtRAmaUcz15ipusegohJysL4PuE3SaeUCbF6R6ftaRT5MnGE2Q33JQ5dgea",
  "key1": "3axmVWFFEHqFmHq4XykU59gntWxAK1PhXZpwDG2ECvcavCw2yvfaWRfNQ9xUqmeS4BaxmV4tGxsiz3tDMdBbPD7e",
  "key2": "2n4YLj85MrAgksffFXonF76BMRHXypR7umA8tvg9B68RZbR96xnhzYPVAKdUKFpcoXkSD4yRnCtKKE9jXS3K4qgi",
  "key3": "5SUTRCajVTzBbAtxxoBTgPHgoXo8VLso5BxdQM1cLFh9ptCXiyeJRjKUi4viPpgWbHtx73MeHvr1PuaEhtjoRvhV",
  "key4": "2gLSxz3Gf77yT6wo8wbGcahW2Sw346wpL8rWbzdiuz5HnGiRY15hVbSLVZuxsM9GB1md6z9VNqDjhcajTJQCyD6A",
  "key5": "5ufrLmyrbg3AinDwh6jxKdswo8NJz195bAhhpLCZwDvoxePgM1RH2vDFyjrtGocX5PwGtLpoCafrtTWUES7fdZQX",
  "key6": "4fegm2VtsFVf8zME2fBDaebjUPSXzjLxTKxsMPDq28Zg1hwZ5gsENK7Gq71rYRE4Wbe1tdDTaUooxoJbyFx2Zd47",
  "key7": "4ZmTZk3yUXvdAmb8TUwuRGs9SRyaEisXpyxELHGBtou8FAoxmmNYdo2WVj98kxpwNU81qth4vNqAhYkFWcEjpvaU",
  "key8": "4c5AeoATZRiNh7UgvHrkxZqtVn79V9gB6mMqP43E3ZHLWoyxLXBpLwU3tqp2JHT8SotoQcqv64rRtfnRo7srJdH3",
  "key9": "5Y6jTgN8KEyvvo39BYfcZyp2FgSddn6spJzvkjDXyCn9aDyAsize94XEBVTayjm6qCfjBhQJtqPszgiEbwmYqCTM",
  "key10": "5jHF4PXxNd3UoyKrhH2cBwLd3GpDqW7QSWqqi3QJ2kJDReYTqXFM3hxxdX7mpPwi3yMNxkaTvc9g4BT2EErSCxfU",
  "key11": "3g7tNbCQtdEo83VXCUdy3zFdjetimDftkRLBeTwT1smtTkEo5tv6DA5qCvEb3wuRVfY1GBRivyCH8q8jQEcmkYVq",
  "key12": "2KqxfrdAcj6AwhQSReULacN8X5vF5gNzzX2T3rzStZn6369DqS6zwdcapVpML7R4oY4U6naDw25gcPBKwqEqHjD4",
  "key13": "5wXV7nPZgAaqX1P5FqVqcmKxnBwPisfWLZe2rtmYNJf3zY1yv3SiCsEexVMeBUSHG8BfuuTNRNHf3qqEi2HjpwhF",
  "key14": "EgxVBmKJs7jr1u7ePeNS1EdBCHVS5EPnrZWw3KSQegDfDHya38Tpn1179bQMfXdqoQNX6BgGGgkZKYE9Hh789DQ",
  "key15": "2tLoT7dTcLmpx3Uf7LEuo7QYnFKxcR7DB75XV2NvkCaKhy4HoGN6ZoDSw49sQKr9cYWBgFr45faNNYP4GG3R8eLP",
  "key16": "2DQbrgmyUuDk25UNNbw6teAA7VMmDAWyweN1rXP8b4vPkeTGrGDjpXT9NMpyFWnttLBNduEdK8xek4r5fsVMYHPU",
  "key17": "3bszGuF3tsXeeC3z9u5nHzeUcCTvorBhDLjruXtrabj3qmDP3eC7yyY6Ncwq6avq1oohnS7mNDmo2fh5sUWYjzAo",
  "key18": "SFvMWLUCrUDmpbPsBknMY7QUy1vnYeVW7cmzsQDQd5L56nwHFTb4CvVW7e2Uuo8AAQvcuWqRmVnzPgcy9QCrVNu",
  "key19": "zkvaBoYq6YX1ZGMz17Jb4yRBufKNwvgg3ikyhXt7yT8qvYGzshSivE3NW5TS91FtfVkkGHrQ7yBuagMiyZp4auz",
  "key20": "36x3uC5KMVgBJFMbQdtPjpVpxGfAkMJV1kFFtFRxG3e1jefpX4KqHjg79o3eMroeQ6qZYguF5omQmjwJdcECFh8z",
  "key21": "YNqiyadEh6vxfcgZMS37y1aFwnp67suAhrFLv3nsyuLGuFHJHvsdCL5sXrZSBLb7F3pESbTrUknPAt7Y6Fok7bQ",
  "key22": "5w8DuA1WwQGSyS8xZMgxiWK8gfHZneLD62w8EcxpyMh93JrQRav5s5UjAr3j8MQokoYZLoTa1vkaiiMgwYtnn2Dx",
  "key23": "3nJz66t4YAMFPvS6DUria1G5kaY5a9rw1cZhi3ngca91GkBbxPy9zAGFvhpZX4e6Mf2sHCXZKnfStfAMvvcHPRPJ",
  "key24": "ATKGQh1DL9zdYic9yZPmkdoBLbXuC18squ7nsfLeuxs5u9mn57Bys6kR9DEmQgyZR1jv8TCXd1fc2rZz2xnG69u",
  "key25": "42sBFdqdXrZMosjhXK3o8Qvd8tt4Ci3BJGpE9vJnr7xPMRLBmW8fDv1FWvoJPZJDme5ejBEF9Q4BwoeH97QbwJCV",
  "key26": "4ZKdregAuQzf6HokGjFxChobziacxEkG1Nz2isXM95jccQwZfQZ7fqb8wQEcru4fJXvmLbWakZroMsYdGDdTCvfF",
  "key27": "4SQgKkYP6ZyL9SCTWBc9BgEihMMemFypxSg4APmi8kDry9WFSP2HzZRmgXLvVe2mUW4CeQ3SRkrc1PJJYr1YtdqS",
  "key28": "4JPeo1GuQTkswmNkTVq6uTGZ29qW5U1a92UYZuDpCfLKHkghoSLTvJYtEr9iXCFZcASvpMiSebpWyST6vAEgm2ra",
  "key29": "3TSQkVjDKr5kcTfk3tV75d9LSeiwSH1jrqCJiEC9FHm6WHzQ887Xt2SC22qTF5aepxqkmV5P1HuNGufUbyiYXcHL",
  "key30": "5Pwa6PCt4N1UoMUayGEg14q3nt7U5SQwHpa3sNjNYwYLuwZWG1pqtbDqnRrRNKRmG9iZ5bHW3nEmVynj93HZRiW4",
  "key31": "RYPo3aSBC7FSo3xrCb1URQ8Edbnn57GvFxyUbVgPTLGVTmQ6gnb57J8236L1sX7tpoUxw8PGavgtWCN3N24sYCY",
  "key32": "3bE842GceNJkB5TKmxGskopH8R2xYji1Y82VH7Cxiv6ZUfDSP3Vq89KKBTyLHPiAvRptYgTDbXgcwWB8vFRtWNYH",
  "key33": "5TnZ4Y4mDfxfa6tX62JLbVq5omuzUX3Jp4hx1BmbdoYhR5ZxyMAAWHebMGjXmNvteYagaQXXFZDWqTs8HvmbBjqM",
  "key34": "31aYGajgbUcgbksiYPE7VqXmsNgPswxmu89BcNFvtutkqKNPBPDzgimBFfbHYZ3i5dDcZqbVArvUr18g79Jwueqg",
  "key35": "2bAShZyH36DhGm86e2gZNE255vBxTnnGtNWygN9TCVNPEFRyB7n9cj5o5TMxUCoJGFQNp8N4ahx5choSvbrsMWBx",
  "key36": "3rE3VyT1KK2FBtDJiTfFvtFqVpEbK37vXNcYudW2tv5zFeqnGasr55YxWzzZV7Kag85kF8WcSwZyKZNoF7E9ba5b",
  "key37": "3bePhG1vMdqr1Eaw6LgtJbMZn3WPdoV5vTE7ajSsBgw6FFMLvcA9QrdG45Z8E3DRQ5BuZVg5pzLTbvGdModBEyQs",
  "key38": "3frP1Y8BzjhL5FnjdK4XkunWVSo5JtPnZbWbf4SaxEeHUDRh6h9N7FS1Eynjt7jMSnHJkBETb2Fwy47MK8YBBukL"
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
