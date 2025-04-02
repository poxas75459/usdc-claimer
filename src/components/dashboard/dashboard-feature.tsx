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
    "3RuUJHridr2zvJZGmykzGivLViLb4fNmAULMYDUWHocdsyKRFivwtHZWWDXiwEMMZWLEsoCXHcesxxKrBXE9kst1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Fe8TBwGGRGwQWuSopzTukazWtudBfXgkBEgNZ8EkCUh3JFo2FKCn3Yu8MLJLQdcX1WWw2P1F7X6vX4Kf6pxxz5",
  "key1": "4aQZMWVDJ8hoNrYdMYnXHpu8kG8fSp4DtgtFhbp4xj6omvMmSN1z6rCepsHRw2ybzbhCYp2akJR36WBCdwaHpGJP",
  "key2": "3QYMrBMwJuov6W8brwAdzpyTWQxt1Ziw6KRXs98xrsyfMYPBz8VFcj48Zaht69Qo39RpgFBso5h8nNgCb3BDZE4B",
  "key3": "5Gi4W24ZUSyGWCSmzsviVULmULUCGJoUFnyAK17qkEEQ6gfBrv1rus4WQRX7bCXLJktiQNSQ8E2Xn5sy8hsmhXt7",
  "key4": "4jeoJLYRDtkQTb7qpRo7QG9ej33m3vmihYwLxfXWfYYsMkuMU8kbqdrcx3oCmh1yrNsujTurJTd8rYAMZbkKCcXM",
  "key5": "64TCpn2KmfKMeqLVonQvPR6PnaVoJoh8r229K78bgDsTq9bRW1zGC4AWosugMsrdxq61XJxC8EaCBwJwVTdkCXVD",
  "key6": "7HPkJuF2quNjmXGiTgwkriJPv3Do4JZHnhFar9bTWfMdZKEX1cCqiUjE64afbf9zETguaKkgpLoVpMNqddjxDeB",
  "key7": "56tZJ15HMN3cmTcpBRCwobYQiUiyQ6TrRrrsU9jWibyYxMjX4PxBE4Mo6KGG3oEyQ4iQDDUoozZRn9emCp3sgc3W",
  "key8": "2D4a5Cr6uSP28aw9vbuxpntEYT2RqwuhJmyxy3zdwioiX3B7BLmN2ieQ6vv3FAxYM5d2EwkB6x6dAEpGExT5Nvyq",
  "key9": "45ZWKbPMVkguZeKVpXKjCC6UsviFZvK6gy7WevmTQArb4bBfDEG4JxQCNhsRFAjypWGwjiCimmjTWFQybxQSNCZX",
  "key10": "4E8AUhmMts9jwLijkPstWwjgn8R47ivqWa265tm5xJrJjGErN8Y2YJduTSdSMkffCGicamndCc3UH4F1TjUwriSa",
  "key11": "4SqTYYhV8Nu8t1cjVUKnuuUT4jmx4gvMra5awBBhCkfW52JKEAsBHJKte6LNrCbh8UkixLP38M8DfoFgwCR2nLJG",
  "key12": "5oPL49AzEguYjVhs6GyKk9fm1P4th1TvPG5C9ojw4VZCMECZXJkq16HfsR26aK28DHsp5iM5Sp1YCsq6HVhydzc4",
  "key13": "5nmW69opZcRsqbhjfp6ZWnbFBRSV5GeAEhEd8KczSSxEa7TanPHjQvVZroQkk1JX2cVJeMWCbnEtgPaX4t3DMtoV",
  "key14": "569NQ4Nn3ooEijQtffPXfVa6i9MLeCdS3Mtbn1dJyEMNQD1g2w7HqYpWatE4zTWBQtSMtQ6aps8MjVSdw5842Mo4",
  "key15": "25Pm9EXoqJpa7iuy7bpGzGLSQbsEwSoMGeYZxDEEd1QJq3gUAhXKV6G4pscjs6snKQReQYZn6HceY9eug6QUN8uP",
  "key16": "66Ksr6UdqYbNf4JvjFdM76jizXAkHUpgcrXPgm7VmhW2A1HfffdiEZCxzD45quRCFYSVSvkymQ7H6z5FXDXmP8Z1",
  "key17": "4MBjvkUsajVoh735XgVr9Tr97ggyiSrHBYnXHD2biSRoFgNsunSwZgBn8X7M8AMkCjh9jvTaiLwRuvUGn5dkF1S",
  "key18": "2VbNqcP9SDwT2kZphKtUfm6rXgjXLKcYLYTVbawuDnjtGH4ZNzNLJumh6c4k8256XZ5gEY1zt9c1E8u6YkyCL7s5",
  "key19": "2P82YMxEFB5Ynr8NtgGjX28aDZkmzficajMALx6TxExxdhjeB9qJvAX21LEHTJ7M8hatAiCRiQhyWoGvKkVowdTk",
  "key20": "3u22NMmfG8M6Vb2ktSW5dPs5FtrApQudyPhSZLDSwxYW3eFENpxMHNtaQxJXHoiEjHAPYRprgLDAP9V6cQ9VT5Ec",
  "key21": "3PpTPokLx14vxY6bpLiVq2tCNk2v4EyWgzPUUYzT3vG2vtzbwawuNcrZyDadQLmuer5gGaSqPuz1zJE52kkhX8Z2",
  "key22": "3TKQFd5eh7aoGwCa6B2muLTKYsBD7RQniYYpXLXjSjbCJWX6xbKaDzFbxQAokE9jwGZqLEKYqxWJqQRrEckRZsVb",
  "key23": "4Y6oNMT7fwAJT9RZcTwJWyYaJdDHBSD2wiG7Gu1prnZSiLv7pqUz4K6ke9sABhPm5TWYW6nd8uSmVLLoZoRao8gs",
  "key24": "2Etch7ctjjNeMLiTa6NPXYytwhQjyCXJnnsALECLRfjGoyuwq8Q8yCB5ft4TQ943WUoNbPk4hAyvqdL3dvwhgjpY",
  "key25": "2W474ep5P6vvD4cTV1rFupZHb9Sjn3XkibakoWfzqFgbUnv5cv7spgknWnAgyDQ99d1QsGKUoASQC4GchNg5SwP8",
  "key26": "4FqJSYvA4Cqr4CeFYE1vFTMQSfK9fntPQFWjrAZBNJDtk196fivxxvFbqt9tJqscXn4U72j8a6SkmSUnT5hJV49D",
  "key27": "2rDFDLxrwwAzRddYhLq93gxTBnVpNHVhTjENmd49qAxFHSkoHXjap9Jf25W7ScrYGhwzww9Gxs8udcDMH2W8YCkX",
  "key28": "oF7RurrzGJTpjn7hCfbUuNnLTdjj2ywDqy7hKsNTuyd1inZu8Co9W5B2bTMaLHth9mk7SaQwwYvEEctnbQYDr1C",
  "key29": "2UzoZRmtQaHxSVZXDjeYYu93jDXs2XddHwfytfQFZiJwe8tUD5cFqerEnJA3GXUZP6EGwsSpHJRJmD9D2DpGQsUM",
  "key30": "34TqeBDQhjodCpp6eg82EYePPtFmw583d7cwy9qRBjbuCPpuCwAw8nTiuuhNQmRkdKwjn8iNbcQmuKxhWa3iVBJr",
  "key31": "GbWVjsaC311EL2xkuzK1wJz1sjgAJRtsKYrz9tetYt5HUG1HuGdj2DCDHx22NxEYPE1r873YGcysEFcQ9KzppEm"
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
