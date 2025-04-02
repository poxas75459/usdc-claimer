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
    "34AYb8Q6hddaJLETcAoHS9GbdbAEGZBeG19jtPWnrD3d1rPiSYfPVMGdm5mi9LMqnjQtaPLC8wN4mnJ3PR9A56kD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P4msQso7xPHztpiFJRfkiS4fo3hEx539KVTgNXD4rKWhXxMpuxmWZkSgmFjcqmTbnJMZbLWhWkGmXC2Hhu8RfB4",
  "key1": "52EPkvZT5fSQWR6tgUfP615EEGQBBAGPpsrcvqQ5AMeVkPoRFDJho1JNcLnKC88b7tvXKM78YnkJbvmuqHPVCNPq",
  "key2": "JGh3SHXwqMpV2S68HXS6b6xLUawB8kGjDpmodrHau4twKDpQuckS3pkV1LD8UDu8Abxuy4qEDqxLiQjGqhe7arY",
  "key3": "5BZJYJQ8B4tnCijBqACwjE8CUDcPNrGEteu3YLYprKMwvgSPDRyPnUNnnG6tDWs63Y8k3VTK53U4FZucaMgq7mHk",
  "key4": "4UoNaRrQ8P1wHzjM3MUN2BrFK6BenDrC26WT25xNvAa9LAjy961BDmE7dmEdrMgUYWNf8M2Vk8iDYcJpyNreZAhY",
  "key5": "4L8bAsiC1jpq2XXAUDTSGTdXtRsSwNYxqTRjJ5nCTDzohbtxwQsNLDC9ftGJpskS1QWfhCBp3wqyE65wcRLfdHSb",
  "key6": "3oUfvavYRsS94b24mPkFXPRyFjXYTeAzywCYFCcCoACWfZmXXR3B2vhh6LXJM7fD4jmTRhyEm3eSRqvNouWin5y6",
  "key7": "3XyKh8ghZnKEc4yyCP4iWt3v9vmrce8eRbZJQvJDK2M66ZpwxTgssNhm5a74XhjfZfe1EHPctkB5gbVLaKpUeMvZ",
  "key8": "3FV1ndXCKq2Up5r2kfiKJxbNvHYMBA3bgaGeyvqFt3nzCeRMzPkhLcLAcWHqE8G6LwJSD5DkrqhxLNExVtY5QYU6",
  "key9": "2bNP64YQTfCMEV9Nyy8T9UHmkeRg3yTwv25e5goTENSgbSUKtUgznryEzhJjdGaURNCmmc1WZ1jMMQr8NgtGYYzF",
  "key10": "EMxW1W1U7jaQkJ1LCia2pj6k8ob8irEbzbCn84QSYzkzriKQaoWvTUcrUYwZCz15Loh7LYGjFNW59BycsxyLrFX",
  "key11": "5KeaAr2dE8WcsGVuGV5nXbtasrGVNnNiAvRYnztmrkPcaEzF6qH2EUnVaKYVgw41R4Dtted9cNiGxXsCaTrXnXb8",
  "key12": "3BuPp5skNZ935V3GZTvGQcmjBd6QYXgJypSV4AEavY7JURegiDxAe1ad22EHjRPMyi8ALcW2QTTQmyLNiniRbKng",
  "key13": "6nsUAGnCPKBPXubTfoAt2nA8RuZ1j1rmQ6UMZNN6DGEFqzzqcfWTMibbxbaHkpTASQTbV5Gj29bFJ1rjfnGPrnW",
  "key14": "ckA1tMFffcReP9UvDD72tSt6oBeCyfyS2DvvJW3B7aewLvP1dyyAkAWjuLmuuhRoRHk4g8Th3B9pDT3QPSaK2nz",
  "key15": "5LP2ZnQ2o3E6sJYB42q443Whg9DvcnaUxMf6J6Uy3cTpTnNJVgF1Z3xbfKv2nm38UQWWWi7cauNRqFPEq4TCvrwZ",
  "key16": "64YZweTP8H9vR8sVJyRn2DrooejPSeFz6kinmADfzJj2QePjnrGuaNTyR1vHvorKaNKMAqtWbhaUFm8tH9jrXzwJ",
  "key17": "39axLkKg9Hcq9oZPjhgrXSc44AYKTJ9yXTVNiPx2gFE19s6s8G9oXBfVmYvaHB3c2gNp3CuaFiMZfz3fquoDFCet",
  "key18": "5Cnqt1iJd4RF6vywhWi36sBPfSexyqyDTRuT7fLkj4PJkjnXCJcDU8sdoVuyHr9rM3ByaUaAYUNeQJeqqnzrTJpL",
  "key19": "42iokwWGVVCpqkBo5dhEr4krb8wQ9hG2QfESJePoD6SgESjmZPeQLgDqZVNXegE9yaFCEwrf7PYkb4RF2MKZN1ny",
  "key20": "B1epJXLUSQ4fkyaFfh75PBoufaNYTE6UsnJqK8MLum49VJ2mkWBzrzgDv7j57zJY272PD752neKMMeKZEjtxQjX",
  "key21": "6JMQpduPxAczfCcq7YFmrZvEL2DSdBzyjC2c3cAeSc7jAXZfnGHR6pjvLPCxNeNx8qFjeBy11xUgAxMa26db8eb",
  "key22": "R3oegQDrzB5oUvFntpq5nYxA6GpoJnAwWSpe774eZcnKr7PgSf9AhNPrmhSDBgxUSLfhJ8sywKSVwji1rXZ21fg",
  "key23": "5EL18LLqFCXajFxwj8vJiz5ahjHoTcrSdsYDN9KGTR3qAsa1i8YBtfNyRV47UErmhRNzLppCWmh41Vqi91CsAP2y",
  "key24": "5GjCWShRtAfGrf4jLgFQWofz8MJ36Pxu98L2ThFNEtK17G52U7ZkV7WJ3W6z9r8nB1jcczcxD2rokCpDiknsUTKY",
  "key25": "24vByQa1vGAA2sH587LFYaxwyjinRLkXittActnsaNtQWeg7SCnz5KLvVDxf1WU44UfcsMLdmkLe6on8bQSDVeZV",
  "key26": "5WGdhF8LKr8gbWE1cbeJRG7XJAuMwPMvYBvbXZfm3zAytKA9CGeLpqYx2BnEh9hBoZXuw7QffQHu9uEx2N62hB1F",
  "key27": "5srTMAHj2EWCbEUwvUxYDQqvrbCRwEZhBvCWrAxUXFmZ68S6UssdL6XDGTZm2M5JE6ERJxXtjHqKRe9BMjyXxmfW",
  "key28": "PJXHFdfqswEjZNtA732Eo7EjkSSP2TciHMKeMy5zwVawyyiQU1Pt9cmhczPHHjrytiPB9odTsQHwn8HJyRfayYw"
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
