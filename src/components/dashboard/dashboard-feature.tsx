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
    "2dqkHuG9ekRZHaQNxoozkZCnyUeuTktRL2gj493r4aiM71YVQBq8Kz58d6Mf6QixCVc83ShhCKDprwD9e8e6fMWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FfR4e5NrGcHrHwrM3cFmAhaD9BYWH5X4Ya1HXXjkpKo2bw2jnQu3ZXxZf3iELmGnn5KA2LJ4qR6DMk8FkaaoE5x",
  "key1": "2nwAZ2rimEREA7Y9vxrT4N6Kcox5KP4QukkuEsFhVQCpEzg4o3upT6Zr25B8ZqaKu5WHY7XrGa3rm8YESh1Yzske",
  "key2": "4c7sywUN1z9t4YRdHs817oFsCe27CmRSwz2LP5sJUvtn9CtWzxpyrWtx3Waw8UAWUygrdxqfWJiD1aTVQeP2unDE",
  "key3": "4EdmD77kZSmfokewvpsQrEp6MRivtoyPCQqgFyDJpvHXM8dPWi764GgxUY6oJ2xT9FWGQHVpr3R8aE7nm8Z7PKGV",
  "key4": "5symHckWGoWnaCYr2JpvXZnuvv3rUi5agtMULV1GTHX243784eQeMiwH9LJ7xiQyq1ezJacmRusDUvbz3wWkEfRw",
  "key5": "2niWUkUy2yTr4oKtE429jbYS4JwLNr4CxEXiZeQoTYdR7XCq7PFPQG3nBLrmPWYSkLNSovFKDmPeDa824JnGXWXE",
  "key6": "Ju8nAhimFYe62Gk1TgRu6D831xhNFDTpEnYYuVJCkCMoMEBqCZiVCjpbu7ph3X3aCerjs6A2cFDFqWvRtgcaNkE",
  "key7": "4im1s5j6KcwQ9gZKiyjjar7tdibQ7T5bVJ21shdGvSaeHdN2A6CvTe41UYfWe62PxkfSxhrMLAQqvBUAAwrfpe7v",
  "key8": "4Dk7B1kZ9QmqxRp5732LLqJiaKGGCt5TMvZwf8hgZ8p1tWQ2eoUd8GEqeYsUHWFHHpF1vVT7AzaY7VSbkXixWtCt",
  "key9": "3tDjJfmMv1oJLr4pPy5KCmREz9eMHJvgmDYkb33H3ddhrxxyDAU3DjqA96Z8nuWsnpnvNBozDiGpTSzDYuhS4htU",
  "key10": "3d96zSJTRmx52SZuEWBijx3yEoGUEiE9hDNFv1gUNAh3skditje4vvKcqp19ALwNoV9N7Mh7Qw7QqR1zwzpHBaca",
  "key11": "BXDumXnkx5Upm6PVGtKVWMgLP8iESbNVm7815Z2k8E3uohJiG3mXT5uoc4pbDSu2ACRyjjceriBUTLjSoGMEK3j",
  "key12": "3EJtVT5NNhmu7TnHhsKZtP3NpSzMWhWGdQ86HFjKhjnL5giaoc9Egro4HoZj1Nmx2f7hZ67a3bP9BWyPe7Lka7wg",
  "key13": "4RUzADMFkCW4SYazeE6WAnJ5JSrhgxmAyw1GaNjTR1QtepY26H8CNSqSyCSQtFQMkJeq2eagNdVX1s1oksHFPnAW",
  "key14": "43RRC5qaEUYKZxEhbYmqwyThLDEcJY7qYPdL1kYaBWSJyX8ZPsD2AE5nsGdtzV4PtVNZ6685F75ZFLXdgkye9fHR",
  "key15": "2zo2CuJx5Gz5WgtjyPV7TqV3jub3tTStf1Ww1XVkorHYuVWVfNKiGhQ3qPkJEuzTUTZPksPcNCnxr9TzosHJwj7z",
  "key16": "3zzMKxEEbPkTGJ2wU1JwVTwREXjRr3pALaAff1wRttgjNaqJFLivzJdeU1ByKS1qcVba4Tk67bTkDBfxHv53ZWEY",
  "key17": "B9MG6sFNKnksT81DB4rguSBjNZhpJkdMe6SPN9BEDHbjx5cAVqEFqKiM3a4ejBLxHi15eFKcossv4tf7bJTK1TK",
  "key18": "CokZW5baDEscE4z1gSimXkGi2gc6tqrTT6Vdtqcz168Ni9eqYahxEMdAG913fVpcZSgenfFDj6hMc61jiZaA4Yh",
  "key19": "5UYS95pxcxS2YHMnRp7zWwd3kxJGPnMQxmjVPgTKZTJDk4Up1q2xf2J64KATaiZosJFkQezt3rWYgHiPZUxPZDd7",
  "key20": "4z6ZGs5QW2cWGnSEwKraZHaUZcc6F67b7ndU6JPgYzJ8aZU39s3b1QqkPprcG4Qdx6ASZAu1LwLz2A4mWMXotSSg",
  "key21": "5s3sHbssptLg3bweBTtebZjftHtJwMZ7pNMUaHsFkj6gno4VebVtPGMcnR9dQMDrpC64LH7q2epKBB3R769zpccE",
  "key22": "57vKtYKyL4K5wWLWGyfVwiz6YwKpLKstL8kGQkk5gKeDaRB68q6WSLzbYqDycBotFdvQa65Nr9NBEoqrcFENE8RX",
  "key23": "4vUwrVE7HnX3hBakLo5KUBCpJnc5qeXGeZD88L22r34wYoqdvwCnNpr6HidXCA4463U7yszhhrDyqpzKHL5893YJ",
  "key24": "4Fs5i6BWFX2RUomp7cLbkU3LcyHniqqDFox5fM1cRMcdNWKewDpWYDsw9iPU99RPFvJEdCES9B6TBUQSRv2EHo6A",
  "key25": "T9RP8zHbuQTADrH3WYZkWqCDQyCbT6SDFkLQfoS7ydZopQ5W8oeWVgij38PS1dRBxRscQMx7q9C1ZPD2MgouU8A",
  "key26": "2mLpELEAaaz9v11xq1jthTjthaaLfwa4ABHefrKG9AGeJq9LrgukgUjsfZfo95kG4NnQ7HYzjtoQMJEPQJfZABDi",
  "key27": "54oYse1RfbEg1dQLreLNv3CTRwfTt1NUkfe84fHm42R5c3KNokiD7afaBEUb2HDaLoLQVYUPXnLFswRzk916uXgy",
  "key28": "4LnC2LYN9N3QnWYgNZE3WvEBqDfxQPAALUgrvqz4Q9nvknxg5R5ES28FRr9WV5CERSzjqvjDVEPe9Vxup9xmaU46",
  "key29": "2VeesQRXDpZnZ95wy9o24aqSneShggjkSAXCoFRRC2CbdpRcEVAcE4NYj5fa7sz8j6k1KoDLUjbcf3dcdHf6GCrJ",
  "key30": "EVxJVaMU5684b2quKXCq4skagzr6FEUpH4d39ibaCwvhZg3hbgmYGAQsU86GqHckqrvwP9dgGmWQcb9VKSNeQQJ",
  "key31": "k6KX8UwDYvCwMRSvwEJGJT8Wbth3PFLy7Wtu7RZR37rDM955xsHCrYz3bnZq44ugegbdmjVWE5YPP8vD59Nc3Gn",
  "key32": "4WoiUAzWWi5jkyC8nyLAoBLrGP366xHf6rmrNDB3E5NsYvKCN9erouCFYpTsXXmdyoM1EMNeoHHF2UzovjYLHESL",
  "key33": "3fVnNLx4iFDjoQjcb7DV4iRgwLc3z7Bdb3ofCQvF9GcydTw8JzYagRJQrz7Cms94sGYxZ9NynGg2Bx1QSzsomHnF",
  "key34": "4ty8TaoPV3iJipc9fZJU18R4uqTn2CfTonZfeXymRZEMwct7cEFVg9243mm2eATWVtnDy5Nj8uiaCG4xUoXxFSLr",
  "key35": "3oPVSKhDRpwddNtTYGW2uMxCX3ryHm34bJxHWrUbBovRwn5GCjVEvzerD2rtWidKBRY1pYgbvvMb22K6hoBkrdDs",
  "key36": "3W14GRKCtrXDPatYu6bCWszjvpUKdkZwTXz9s4sGUx1mvdaushTsyUdS5VHX9M9p5gqoTm6QGbQzFLVYTV8B3UFj",
  "key37": "23qoFfS5Co21QmCRqXQ3xBQ57ESp1SXi8MM2ZqcWFmEomMDLsnAQGyrwBkZxJ1tumwp51mmmTLPLqHusigt52D9H",
  "key38": "3yTf7xPXrZuHcnpZjKTWgJLovwKpt6D8aQrjnkB7Wstuo4sTWbBCzaLd5bYECPCSQXSvDU2McEaP6PTQhmoBNUxJ",
  "key39": "4CBoRUoSghcEjhQGvUvMSRRHwRTcp491uYmjW8k9f7NkJVSqQTteAkX2vLCLGADZzh2bLrULukV34YAVFammDVNa",
  "key40": "49HPpcXRmfziSnQ93GuhZXd5iTxKKsrCBkQAQgf4cZv2UcRmBZnmsZ4mVUQsvC2BMqRwBgGr4KNCopQXcoZ12GvY",
  "key41": "2KR8RQMbMYEJqHoYnaZEdkQVfbWbvJ8YBF6yS9fR6cPJCS3DKue7nTDzemEwnbyroZbQCVxU7oSGHWfrRj6xa3eu",
  "key42": "3LDcpqsNp4r1LU9E9WpJaNMZFwXKVTfCKzGHKfUg75S6Jksfc2oFRuDWkJtbXRkfH79ffbGz4gS85cQtPF8SciL7"
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
