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
    "4uh4NfRJQpF7UMNtWLiELYrXkeS4PCkoHdwoPM4gLQFbHHK5GPpp1uaLDHPPvy66NUvpVE8zLV8pLfghq6J99K35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9BkdrfaeqpSDitfnciGHxmoTyYpG4gBwbC4dbnmKVpcw4HD1zVd1npLiuo4aX4PAoQXTki3rSDvpsnonZc9CrtU",
  "key1": "niqoTg8kgAgfMzbj5d81zqcDweACmXMo83cgcGBhLghfiATymF3tiT4D74tuLm8gKjnmgsSRvqhY8fweiV27ZML",
  "key2": "3ipnLa1yCfrPUCKgBR6uYqs5Xi98mCsj7LJ2APrLqWTf2S8VGQ9fmt1hNbCyos1b2xD9sGpBoeoomYkniCJjeD9c",
  "key3": "GZrycPGur2RUXR8uRyZupz8YuJfAb41Qm3Xaay8Y9qjEKLuRKzrFN7LbPJUQD85NhAKAnbfKzKoBFerDDW9Bdon",
  "key4": "5GVEdCeqmoJMS4Lg2bmbXYi62FMaEPtB6JX521fLqn3Rg2b1Hp5dyExTCzh8WLggg3VCizxAHjp6TzwDjy8PQ69k",
  "key5": "4WLusToJ9HP2ujkrW6FY5kTVJnSWTEAePza46dwKZBjcBwZxhQmGs7k4bS4jtv2xygZcjVNEqXLjZZQBeCDxM6o1",
  "key6": "5vLpLfSgXGoAme1CwHtXuQvw2SpgJBav5WhK9nFZB8i7FQTUkc4aUz9YjRwZsiktg6wvNhS3gNodknqeB6rUEnUD",
  "key7": "5yprau4E6ozWZrSsafn2atpUXmVKamf6oyxtCPXenkm4wxSsGKDLjxdWxSacyPWa6abBGnWEttvqxJtoGnGsLCEv",
  "key8": "9fKLcYTRfxyY8sAwwcpNBkCLXyJBKxHUh7nvvcFUMvGn5yNVTT1CCekdzbDYhpU4MNBjGvuFWw5VvkG2zGK2fna",
  "key9": "oiSjLxpnnph5ThE3u9aS7wNFknJr3sJQuHNbGxcht5TXfzrzKhtNcFVeP3ExmRjheuNMHwoUGdRUJLnoX8jGaCv",
  "key10": "21jJdmh4cpaowXLZgCC4jrLzwdkZJFRXD2io4AXRjaNhCGmz5C3fRwCtCFa2iTzWUQyAWYSWys6Zgf75VwCxdVm6",
  "key11": "5GjTDsvr7c3Y7MR9R762seRZMeQpTDMm6PFtQuRrHVhvsaUChPfPVEK17Bt4nDgzFPHUi4FCk5SSiuxhh8EGnj2v",
  "key12": "3wKw8nAn5gnNfEsHY4vn15Kh3mCsPi5SSbMQqLbWz87AHN7e2Fq3Y1yhpMhMCmAyjtqZ6MUTxmarZWgc6AhNHhbx",
  "key13": "nMhA852FngJ8V5N9tdUFPcVr1Pfnww4LJN562bAGMPSCovDUcaoayeivwDMvHi6dV2KftTiNUWzNoyzXcKmu8hV",
  "key14": "2ruFumKAErdSnkorzvTF8werY5LbUFoqgeu4NLRBnEuxrFxPDQQDFRbNJtEEhBAPN7UtvrvhD7yviScqZdXQHUbs",
  "key15": "67YnyizxDgjm1WqTn6fqjuYUJP7F3f4A2rHWhvBYc3mS2DJ7duShcrHma6JK4aN3kcv5CvUcNVomrc2dT6rEx75P",
  "key16": "4tmXRjscRzGo1wqWbCzECe3fK77guWHSfmj15x4Homk7Ugk2CogaDKGZgneYDbhgatiaoNcqctC7dVZ5ydZbF7vy",
  "key17": "2eE1WRnMt41wp6LC1CT4JGW7hBR2uaQJweUiisrNowaXCCcwi8VjbL3jxf48vQi4sRbh4KgfpsXqRThynq92qHbP",
  "key18": "2cPMkDhZv7XgLhNqRGnAJJapw2QhmuyvvJrY4LxtCWnWn26ZrymebaKL9qp7NwJoRhRAbqBGvrpiBnyd15fCjyKp",
  "key19": "2AqdbQ6RUe6y1dfYWtrZy8Xd66TRuMCxsVgBSbFuPFszimi2u9rdeUdCrHTqcVFhxXfgqs39zvQkNKVqHUmLfjtv",
  "key20": "Cchugov5wgMn6UXUgFcBoDeCLBkeMN41WVkjFsoGGvDrD932ioB2XSH31cRe2pHwCFMaJjrekUUtZnA54XguhVb",
  "key21": "4tN6otLwhvj1tqSubYgAbh2M7xvejZaWkrkqcaCGwiEnP3KpxiwsQCAXJkjM5CAro91iGT3PyeWQbDdjtTF9Xoyh",
  "key22": "2vzbeTqgq1LUSz5iKvgWrBurBxWSLZ6kngH9FkoKD1bVi5gpxANq4ahNG5ggD2aDSk9aky8MkxijW5D3uRtshiRk",
  "key23": "5wntU6ubgPcHwqGsFpSig81CY1EuoSWMRSmT3bhsHCHAe6xMjFyDXXYBMjzt2pHEzMYfQ1Df4TCbPRboDeF67EwG",
  "key24": "2ZzGDZgTwXuTFqSxtWoq6qzMiDXcLVsZhNzrt14doLQjmpi37UxMQCNYXUGNQuLh1X9CSfo97v4TiY9Amjosu3fE",
  "key25": "4xsukVSB919wdBpQMXDmnrHaZt5FmmsGc1EGVEqNpbAmyuL1b6P5VS6jkByqoQeoVz7FBVvbSXx5zxQexaFgJH2v",
  "key26": "2RcA1WwDyVANQarTUFTd9fKm3uNfehM5gqhmzovURgCaNmuQkBrCyyBZGQgdaJPymc6PA48nsmH4AKHifdcof5rh",
  "key27": "3UkACwT6cJnMwnZSL4p5X5Hqpuvb4Bc7fk3wkZ8cXVpzdWgggU2UgW6VSsEE7jMvhktTykjx7xPkGCvWxGypsKrU",
  "key28": "fTHr4eRcHhRbqKsYaajNWfTeXx1EYUKopzhFpUdw7f1gHUPDeyenskeFMsNAoRxM7x3rG1VvCRhx1DBs8L2c5vW",
  "key29": "47Z1cnyfR6zZtS3TVBamMwAyjshXiPodC65NxrnW4PAYGU9oYtjf3bEK4qZH6wBPupXracMz6MJrtMkBfn6JLtnM",
  "key30": "3GvrLDRBeYQokdWEwn23FPzdfkSH3BsZmZQmyFxuR8TwvEhCcyuQR2Muz8xKtAr1u4wHxQdoQaygEwGEz3hc7ahu",
  "key31": "cxHRL8Sf9fXA8s9QZF26jQugkFMhcEGaT37KqNcMk5QJdg4PYuziFPhk2WEoCAX8yfSaSTYenZqbfyRMxMeCTqt",
  "key32": "62eWS3hgSLu7Ja9NAJFUcdi8osTpswYhGExh4zpA1rx7Q4cjEzaZjiLWEijyunhprVbygsyGYmJcthzLKmxm2bTx",
  "key33": "3iausgp3bPP21QKNnyqDCaeKX2qSqkjXD7EfUgXNvjo6EXw4d1k564jW9PqmoW5c7JbudMTw4Lr6rUucohyXDH3t",
  "key34": "YKHAMrerEpFitiMuFQvy194MDWUd4F8pEW2nA9ycynhxnYLE9e1wELfimvJ2KviKyRB2UnfNCRkHd1GNR9NDQSc",
  "key35": "4n62opD1ncxYGt1sbFFhj7t9SdUJZd2EGXjex88KC9XsECzs1swjyBkUQeXaoJpqtL7KqZz1qZR5jYsKy7ToEAEv",
  "key36": "3mMYvXToWR6uw7WHauGGLDmyt6WqK3UuctWX8DjaAu7GGcnGV7qjUFo2PMWMk69aPePLwECQvEeg72s3mw3QHVgE",
  "key37": "3BBU9P94Ka2TV5mgaQTd86Sib1aLuVCdEoMK6A7rj2Ry8ubts3CRYJVAEthmrGgk3H5DmPnK81WVKKFUPYaYrMyY",
  "key38": "5HBLE3ThUqNrBALVqnMyyVyYRMoF1z2xdZoahD4qXe2cW1gV8hGrVcfYoJzxfqsdPXS5DVEiZfbXK2khx3Cv77H9",
  "key39": "5dYsTPhYv3cSvfaMdpPj3Mm49DPoc5JXm8kviTnUP9pLFieUMbVMz6wsiYEwVoKDNUFqPZRnJGJjminRGcTEdhra",
  "key40": "3xAiR4FZNHfekx2bQBUA6ncJ6AJjLx6TGWpkWibB6HSqpqMfzZsB1SeGNfST4nk96wuvD54czD9dGCtVwwh3gQYu",
  "key41": "3b9Ey4CvPJMyvo9LwJaUxWo6pgHkkQQwT7rrjx4cqrSf5ZoMSfp3zxAYhad37yGQimtWw8sUJXqpJ4Yxq8NPfC1R",
  "key42": "36nJVzJFm7Sj1NpM6pYxk7PgNjA36ie9d1st3Px1Eqm7mSBphtuQxt4Ch5yeHJoH7ZQ4KM6jFjKSz63NAQ9DUEDR",
  "key43": "emp4BgyhtnPHoC12tNmXa1su8q5Mj27A47gUJmFHH2zYvT6H1t296X6qLpc9a4DRtyXfpmEvYJo8A3jdM5LHWLp",
  "key44": "5YqZmB7SprWW3fDW1a4f8CjyrsZW1CqcdCQLwNuBkTUie8JUJnQgEsML85CGSQxFYEQSaF25tJddhLditqr8FLqt",
  "key45": "32LHZ8gT9Xjfzhjz4XYLVWr3BJ8BmbGBc6eSBwgaoCKY8DA8bLqHdW7nkF1ziizDx1wzzMDvATZiVtKuhjMijWqN"
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
