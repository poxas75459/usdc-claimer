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
    "5PNcswHG9ckbd2UmRb3eLjMdC4vsBeikfzhmc3uhSMAXtMg3RQrthVcfkx1DqKWK5AYUsfhU6QW9wipTy3EJcyM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhGKgow43Sb3QtE1FokwmWfxvsxetA2YbxKG4xKnn8ing4MVdYTx8w7Sw8fQkwVgmuZJmuEqHoBMbd3dVcwzmV3",
  "key1": "2JRHBw1FTVnMZk6NDmSMuP5ve8QZ1RHuTDepZJvCTGPmYtRApsDSXNnM7QBREvzPXKgPg8D7dra7BT9e7As3Tnrg",
  "key2": "2RSy8wemwHwN5VLrT7v3eHb7zmNB662AEGZ7dkg2qcmT8tzWiehzpYYmN11nR78jLtxWdP3TR586GqmskpobhbU6",
  "key3": "3xCwai2kBUPWcWBYMCReTE81GJe3cPe1ANh7b2Z8AKguAA4zkW7gcCjgeEYVQrQRCzrgaCpYaS6TbM4Ho7WoYSLx",
  "key4": "ufTGHiWL9WobxMYN34rYwJGGqJNNc2N94RAoKnteoS2NzektKo4v121qgsQRr6eyarxpSN5R3uovkbeTG1wNyjV",
  "key5": "62VTfBEGLiwgHXAZGMwKr4V53BA7mFjGmQn1edEHxxP4NwqK2MaHR9FdeWWAf4Ayku6HHJ4pZHgwJ9L13WAfLjy5",
  "key6": "5cZAuKdrBceeWeaJDGAUbXWFB8jwBP4fr1GkUGxH6f9dsgEWm9ZZhvubFqXAhLQfecbVvwjwvFFenFSxT97njWhQ",
  "key7": "44qJiKAv4nhA3YoAeBw1um48Da3XaHdYvd13zEtzKSgf3Aq3s9X4orbMYKdKw3UsPnC8aMX4Qb7M1nQnvn7FogJF",
  "key8": "rRuyPpwSN58fG3stLjpCPYu4UN4tnhf2qT8nBt5ezUQRoTLnqvxJDwU1e7CWdLhv8PWM9gCz1LkyNm5fmTDo5SM",
  "key9": "4r3tMzFWzjEvN9PKdmhm8eyzvEghuu3jUTrz7XHf3Teb1wC5GjWdBTnizttcNdEe3eT18vUTLntZSc6uZDFx5Brx",
  "key10": "5hMmq8RtufrRJ8gHjDooWagaC7XFde2C8NMAUMKF6nwkRH2bkrveh6VzjPQATmQp6D5WMFAMBddfXi9d421SW3yD",
  "key11": "49dwW3JRKD8FdFQHoHyPWNudph2BepKZJmvXpxbNqCLWxVKLQAmX24MHqA4cB1hnNjN2PhgjJRFwzEEjjbS3mMed",
  "key12": "JQXk4Z3xet4WL6ojgauDTgGu92y3C24bfh2MvbrxTkmuPoWEXYQe1b5EV5LuJAq88Shayx4d5B5xN2iq2RkiJa5",
  "key13": "3m2bkB9KYz69WVYD4gFqb8c679pJ4pck2xGtVpsuTjnBQMFiAHcLGe3ASoHwfL9U5oyzbtrV3f1U5t7m2hjc3Q8D",
  "key14": "5sAoSHzLtMP7cxDjAbTkixCmyHLRbnGYEsGdK9wDWjdLrg4BS5nLVoEui8sLHWrSYKsJe9LHEEzHhX8DWuYRs9Hg",
  "key15": "3iXprVnnbqY4pjhTfq1KUeEFrND1Ti8zGJ8JzZU88iNtLseVNsBU3jz2JPEE2qHxot8d6QTobfeVAmYXf2XLo87",
  "key16": "3cnmesGbapCQrqEztxNbmaw4WQUrJTcJf2pr2twSLSx6qQGhvjHvJCnr1JXroAzjdQ1DW475DaioPWEouA1J6nrw",
  "key17": "2VK3bchQyHr2iTQT6d8cc5EFp8EBThHhbRpc3bBNHPDNjV78pNM4rRVvFnzoJVVTYkJ1PPcRnPpNqm7EpcyMPtvN",
  "key18": "44Nd51rsUo9ytTLWbA4v3vXEigw2x8MAkx7TrvHKBoy3DZvvFCPWLsBg3Kd9W5JeywMToABoUX7ZuErWyGAd9aQd",
  "key19": "zk5QdvCbXpotURobJcUF7wiocCzZ6d24ZLbuJH8k1Df1urBPLw2W4hHCp5isdPun7trMxBfxv7kU6yyc7vfcpof",
  "key20": "2QnWZct7inUqrCt3Mkm3Mn2p9F44hmF5MpbbzhtictWrvS5Zmp3yUb7h1JRzyGegv4CCi7TrbPNgF7zwJXs9c43u",
  "key21": "Dr41uMXtB6NaTFAFPHCaW6gy3nyjCqvmLBLiTLoL5ZWfVoUEGeS8a3GfF3VSV8j54KbACtEnc16iKDR7oFMxhM7",
  "key22": "38zzMTVecQ5aRK7TdQBkpkq5zFikGt6JoCSqivcScEaz4bMmkWjv5BmAHzRW7M1XDmCY3nocDSLWFdTSzZaBiSV4",
  "key23": "4hYYy5wXqw4odC9aFAHvf8CvdpCg53UWkJW9nnTBhjL1ou5M9dKbBG3f6Ze86bw5Xp4Jnpg72R4RbRP4mgysxkeh",
  "key24": "XYM8SR8qVYYTKr5DkXKFuTDeGahoBWUhZqc8X12JNfF6uiHqSnSbMKU1by7HaioK3XF473TtboxSMxCmTVERoft",
  "key25": "DGtocv2vCiCPYUzp93WQK8jJN8nmDUEZJDbe1ApEsLujfHZqh8W5my61YrHqWDqCQnwHfvEQBb7TAdPPMtU19KX",
  "key26": "5oCpWJooJyHiRx2XgdcXDiEcungR6c2d58FXYGxFrMJp7uvH3LBjBse62uxMogZaf5P9gYLXdbxJV7BMcrGDWWwj",
  "key27": "fxKWdcJ4hvkMRqf1QGQkveqKSHzyABvrwyZbVXaN88JnFfFaAM4eMwcAKyg29rd4JiNrRjuPfei9ysEdtutFHdi",
  "key28": "2eqiR3mq7tKKgzJYaMzGxQWswzYbpfux8Q1PvqDCaAMbxB5bNccKkKQbWgCtmqzvouSVDDvf3XhUdvQZw7jmfZAX"
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
