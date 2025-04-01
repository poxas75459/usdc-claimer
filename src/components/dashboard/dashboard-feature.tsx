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
    "QW1QCvcwn9YxSdhSG8Ny6XSt5J94i6PyqG1M7eUSGH1MKRaJjkSS3Pptsf7ZSnaSch2yu8e17omVJLYsFpY6LJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxqR6CG6iKyzjzbP5Lgo5KbXQPwXFywcXFdGqQQ9rXcDEPWYewm3MScnhPgU7JMvppzxA3fQztQL82ZTVFGEBqG",
  "key1": "2gtqPcm6KfKPQRCmja3Hnh57Y5tgZjAVnTqEoWZs4X63B5DXLyWENPoGy744X6ZirBGFpwbMuLeZwTsFeCqRiBPD",
  "key2": "35kUg4RA9vGM6iGHWevo9zPjeKB5zbeCo7t2Xbp9EJeQMfpGkQWYFiwwjNKDP6v1eqkYdQMcQeieo64t1RFmQ8GJ",
  "key3": "39DXfhKqKRSZmb6UFwY5BGhkLbL9xw2xjbSe2sLH8Q3xbrkk3onLFpKbt5EDY8rDJR9sksj4zad6kY2tWqV1d18D",
  "key4": "3qPxcKSq8r2JrGuz8XKNYpgzNP1jrvkYe8ojCxZqWE23sx1MrEraHJsMSZ3j2MJprveAhn6kAfnH3hZYQrQgouwp",
  "key5": "R9Njx17q5MKjf23m5djh1mffBpGhmX9VZpXaYMYNSbEJ6YzfRG9C8twG5FBXEJ3g7T9VSV2hk5FoUrGQpAPeAqG",
  "key6": "rWgN8utKQ53ufjndnYkstbUeiWCexeu76pDTwpfdyrgq9aBJk32Z73uStKMcFghNz2xpyvEcRsLQEEF39VbtyCY",
  "key7": "ruKJbPowX9EfTG951ozpF2vmc4PvXcFwWyLsnkEz3rQ43LehbnDopyuMJ4Hh2rRfJpfaokvCLNz8ALcNqxHTEtP",
  "key8": "5BzMv2DhYhiws47jSWixdoT6MbDAWYgnDsodGRWiBRpz7Y7c1rMrWqJamjDDiZhcuBwaLaEdwjNPX84jkLHoJTg8",
  "key9": "2NNq43Gd2S87A59JsfqQyqcNJvTAoWDZ4yCFBcYJMT8CXnHyWby5wsLXRM18mwWN7M5SwACMSdu2rMKeQsqQJdVL",
  "key10": "4HbTdNaNCLL2kLwgyYhQrFtJMTU9jMxx8NqSbChckYBHVFqdqdqNyKrtxZq1QevLLMtZDMJAK6CGrhQiWFuRUgeE",
  "key11": "2xcWFWw3EsrJUKzSUccPgvVd3BdFhHuzqNyCumi7tGphnPhRC1MZLxhyvbuyUD2ucof3Da2pHeVDV3aSxAzRh1XM",
  "key12": "51gjcSD4qrF6uMgHTtUDJyu4tBV729Zwrif1HTky7skkkM5h6kgS9Bsszym9N35W4kuARGGjBkEnoYC2aLHT8bGd",
  "key13": "5SNMCsmDjfYsEPv3QJtyvesLWCi1Wmxx2HE8rtiKhBuQn9XXNGaHKGCRyNivqMAQJypmCzDcWkCSsNUZo34tpJXj",
  "key14": "QcXFxwabC58GDSde6KL5EEeyvTnm4zfde6E9FzAFyrsYvRszdexFxzWdR3A26bbdieCuZh9g8bNRc7mgwaDk1cW",
  "key15": "43nFrZCXpLXuteFThGdyyZaia99CtbA4CUsQ2QY8nZDfi9Fkd2fUJTErQB9wbSzyU9XoC7dHz1gHoYqQY7pkFcHV",
  "key16": "SwPeBJqpTHy1f4WHjZciuxjUF4oPbwwCPKfi36nq8VpZwzeFTM8UtaJ72MXs91dC34t1jrbXytduKNRuzebv7rW",
  "key17": "4uU6sPuHiAQKPP5MNctmApeip4PXMJXprCPLXBnnNg4NXJUmwfufv9notky7agzhgf7ijKPg4uKYNUoxTbpdpPAN",
  "key18": "4mLRUhjiK2L9qvekxTWXy6WGgkcWFwG64YoK93SwE2VMqdYF13xbqUDs1PRytU98noHBKQpvY3WnH6KnUK5tw4rz",
  "key19": "3QD3sTfP1T57djr2rqRUvC862G5BoC4k4wvcnv6sqggpRN9binCnJtdsnZPWDbfA7Tj52qrRXzFsJyXZv8vKbjm3",
  "key20": "3opfWaq9QS3pFWpaHj3kNKSR2gZDUpnfiE8Y4EfUzMVxD7Q87xqGjKQyHxgm2Wf9L6GsJrvhaFqaS8ny46a1e2bW",
  "key21": "5WmvZ9wThAFKcwtEDy5Msso1nEPeGKP6G4mXNtqUNGyp46mbbehztztGqAPLHxKHsJ1Sc6kvV6KHe8sJu8ZDPNsf",
  "key22": "5amciVDCuNFWuQonLnkVCRBfXCDx2kUMuz7YUSRnjTL8PNuwu5VtUY7gMoYaammSFaqUg8MxxEw4AQCyiBkbuFse",
  "key23": "311eXsdQMrdmJNAcyHTmJNv8SNcJozy6ZPgSor61enCfr5kPVuXyy67cCtpBGGLkmVtL41n9YuzG1bSnqYX5abgN",
  "key24": "5s2FoASM3PCPjugtpKEhUwz4YQTMeTuCGLGodQAcPrt2oqMrpY8RXVWXpSDkEbdVWiynVrTtXxfGvXR9rLoaYCR2",
  "key25": "5Mujcx89ds3qPJYDAARZDriwUFydw5ZpBLU6GwEu7ZwsEuKScvscXT83mRD2SyPKhLS5Jqpyjw9F8FxLqNFcNhke",
  "key26": "gviekC4mtEikE98X3MwmNktzhej3C1sGPruGxPRriEosUht4UzNBKKatUXQTKcLbsXyfxQTHewUZRBqcYAHKu46",
  "key27": "3B571Pf7e1ABBaNU2Fyw1fcaD5xa6eT3aQ8qDNyJP6x8b7THNMsPgSDLhs1qVS4d6sGa7UywfdBFQbX8ym4i11Cm",
  "key28": "5awbnBvHKmw9pmSDtRNtGg6yLNuGh4fy5GSSA3ju8AKcXWHkjwrhPi8nZr1PqEwBgLVR3EwuPi55HQL9cy4uV9cD",
  "key29": "4AyyuG4uWky39x7jHrnyTPutx3xs9vyiR9odeydR4XoUHgryq4X9s2EcFr8HVU1RLSCv8HYGHzaLia79SJPtVJgq",
  "key30": "2ASqfpCYengJ1GavYL8Eb2stGgqcfGLXTTrkJfj3zBgBz6t5hx6u9jKiodcdAzeybghvyw46qtn9CbMHm5q9XLk8",
  "key31": "48gA8B98eLLjkdQwg7HaKwGTZ7x2v5BgrVBSAY2UmCBA3VGEmHFZnnVVjtuA6GQrfeYR4A8wBugS8VZ6jZvxVcn9",
  "key32": "2dkjwFhwYAraZFBR5rBC5JFLAtiQvowiETZzmDerRt9JFeqyTTiMdPQ4J2B3R42ofvLTmyKfJCGbhjr47REC82Uc",
  "key33": "4VarHWTTPUJSEQ3zdrWfEoCqw1FvLJVFRM6xT4YBairBhyVvjXk2c712LHm5CNUQR6PGk4Aa4TjY9r3Gvnp7Hnwi",
  "key34": "5H2msFQk5Lt39k8WXtYgFVEUWrsxtk1NMqHcYQ1ETaViB9nfxuYNkVFWoazKzbQSeqZjZTCpft4B7zFV7WgVWzBZ",
  "key35": "35Pa6RvAoipMMPvveZXUnv3ny824iW2X7GWny7D9f2BvZN2Y4S6yhbqK33mYjghMApNrwQ5jBw91FsSRLSEeLpHD",
  "key36": "3S7WYBXJmpkjcswvbLCcrmgYSV2qXm4BVdDMr2cDZoUHhgsxVnGdU2FNLZgogSC7JK3dMAcsiEfNNCowczLjDZib",
  "key37": "K2LDg9CWQ3r6PZrmSTTwEUGszktX2S1Y7shd2tSLGxu2HrNitPPxFE54W1DM9RsQPdjzadsETFWHtLViTTETsJR",
  "key38": "5WdXfwUg67qQePSZxyzZkWsTpPvemw9B3SPUtpvoBLDBLYNBpd3TVxh5bk6SwfZCZqsTcfH97UUKnYnhLQ3FrqS2",
  "key39": "VHfdyRFer3kCjqHEP5G5zt9pfMjXvMFPmBL9cNTo6KNinZpKTu6N5YEF4DyrCVAuwXHuwytySCpCvNx48ZzJwsj",
  "key40": "44YN59ugKdanDtNhRmjBzcNjBfo26RcX5mMbrTgQ1oyRBG2hVWM87sxNkc3AxR5cYnhXMLAirJ6VkBpQmQKZFsfM",
  "key41": "3RSDsVAQGVjvEXgMGvPSNZmqWEY4ZtEwQYomSzT7FLm32PuFhDcRxp5FxmbWNhsoDchoaENujLBsjE2QVnZ4FFRK"
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
