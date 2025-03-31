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
    "cKockjdzx9koj2wpRgUgSgXFkD6vRwdzFdjV3fE71e3D6f6sGFHueMwxzNNzb2L7GHXy23AMQ3gLgeVu6tSHdNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjWtZUSCqpW3b4wQqnyLEYgpME78u9apyAEeWc1e2yetYwtzrhZy5z5jAaeqLEH4tTAp8WvLSL6KEuojc7gRBYQ",
  "key1": "3TRQPcHBeJBH8sMtR2PjCgnZ3q7FqSjyuaCP69q8Dhq5kpvCZUptqA8UCE5iGvPstBvcH3NLdUYZJNJ5RE5uvrSR",
  "key2": "41eNTGcdDuxCqUCo3S4yRuEi1Wy2mHeXVoqfjzK1pt6x426M4QDwx3rEvXHq7o2qGF9TkB7oG7dDUWs9nny3oEmX",
  "key3": "2S4kd8b22P9rBttQ3SXCGnyPV45B7y3jZce8M7NAEY2yEAzojXCdzZAnyz6fagzU1tkqfBmKwUGpzqv2WsQ7CdGZ",
  "key4": "22Tde3NcoC4MB5jAVeTHRLqMCtsF6dZbtc85Jm1nP3z96uR8J9SEgtUpWjCAsXYZCi7AQV9Kar7DLwhAsV1REC1M",
  "key5": "3xfjyeyvKKLzU4cSLS1KnhLi4HfCusGGw5p8xZtNrthLvoxDELso1at8d48bWgt63SMzGsLDSmnMDDuTFonCzEtp",
  "key6": "2FDiRBVr6dE2SFFHJNT54VXfNJVec5XpzeJ7eVTgMjJVTc55BqCs2B3FKG8fchN1dFqrRq5eEeBsTm1Hd2u2FQHA",
  "key7": "2LWpXv3mgdW2vjEG3ARHy1Ubei7DUZCa8KQLum25yHEZoszzAsrVsXJvmwCmXvmWHkJvE7ntqWjjGr3W1VpCg2XJ",
  "key8": "62xjHY7siHywLdaJpAJ8YKUuBXeA4fU1A5XF6RnG4UEFWDwgVV3CztLwJc5gAyS1L7ZmirxXLfWrNkowKXVMrUHh",
  "key9": "3pPE3L8Jc7nQJ4XFL997sohv3RPGRHQgXRMMbDoQQFirSKRLWL4FFe6QkHnrSpX3tXHex768DVfgRou6ZbFmizPM",
  "key10": "ainE5dmZrxKrLVDySaC2LvjJ2fBwA95HsSm4Un1oFp2t3UuLffHaKpwxZTsKyQjQzxFQ9Qv3StE63mAcZiVCR6S",
  "key11": "4x1JAjQicTjVejJvc8bPmbrW3BB6Svj9rsDHMVUZkGGsavmez899RH16bKoH1LGA9gfsoNvqR3sKKERigDLAbaW",
  "key12": "V5sAHDMQfeuvHJUX3G2L51LYC6mtkHRjhdApQN154DHrmJeqGa5jqr2McTDo5ZSRA2TMzbg41MmVKcPvG7Csu1e",
  "key13": "2hdnjCbj2Ro6noDooiUv1VHtVS5hdXHJMWrafsBuAiTiGNhzfuhDpaSX4ESqASXFfJjHU6ScfaxKBKu6YFs4mQWB",
  "key14": "48zCKUfSWYs9fQFAoYLWsyBRVgKb7vc2bcYWuLUgEND1Bhf8MVGXBokBg1yrRtSNdLgQsR5JRF4WgahdcigqFDZ",
  "key15": "5MEi7K7WSyAb6otavPTmHwoesV39GMbkSmh2gTj9srvicyZdJpwymwdc34RxZVxv3UBU9odXWrtMsbMQGTbSGBKD",
  "key16": "471t7nUKHRXLZGyLykadaYdLaUMw4mQWiW6Hxe7K6ipRaYX9XBuB9qeENqYZMuQ2jvuPJV453Vieu9Fk4ffY3BN5",
  "key17": "4b4LqByAJYmWaYtvtgsiVcC72pR3Gs3W6ykVxRC22Ei7NhMdnsdrbiHVBFY6NSDdZUvGDC5H7x1PFDyNbuLNP3mw",
  "key18": "3iNmhZs48FPQArkr4d8K9B6JrdPyJzVf7joYDEPRRJx8xCEmqvzxmAuphWTaGGrP47L5pzNXdzcdnQNY1wmMJQmP",
  "key19": "5VYJdFSofoQrTNw7ydt2UY5aocoFhcgcpRCjn9fhBpdNkWnqp29zBK5J5jYcX7ykop5EyieLAR8ecfB3bZ2tyf83",
  "key20": "Kg8GTU7bkxhBA1amMqsmJ5Q8Sdny9JHHgmc2tYk8qzZbajHcZdjkwewDSiF4CNuyeZcTmZJiJvUSqphAxeiYqtg",
  "key21": "3XyzJjS6GehkM27JaGTxuZvxBsKNQAaS511aof9ypoYRygawGwcQditw3aY5nya6T5wbNEXb5GnJVvNdz5VXiYZ4",
  "key22": "LDz7Jf23KnuWUuMhwxem3srePxE4AcoAf9Qky5mMt25YubtfGTawZDaWraLBXsuVU5cr8A8tjyqhVFD4FoeiWvj",
  "key23": "57ihVX65FsMvy77xvQVD6qQraDJzY5mHMrZvUodtGfKqZ1Q43si9KyacNshPEQT8BKmD28tnCSEfbJjVGgBvZFap",
  "key24": "4CX2DYLKCdwcwHiAHEmJAB1xfoM3P6FK9KsRq7o5fQvuoBhTccQZz2mpUwLKR23sHGcyMv2vDLrJ5zP2sApvA6Xa",
  "key25": "MrCdoNpBvu4r4qZ9sNwZ44Rhs79YXYEwymvW47fehgnyUeP41eE9XxuStFyJoAbfyGZjFBwf6CU49NtPGpPUmz5",
  "key26": "5owcbiQ3xPxVJyD4PDWDee7Z6MQS2dCGXt8o7cjAaVxWNN6GBBo7jHTBH1uf2X168Hs5RUTHScdMZaWzT1iSobmm",
  "key27": "5Wm9s6h2ZCnrtE91X3j7E789wk5mrSheUWwSyujpPhn6HqFaM8Nn9rzh5U9ERRDRJVjeHUQ9B6bHyyuwwFSQ9uPb",
  "key28": "5g8dSBHoe21KJiw9edkwFoyYSA3X762MDVkarpNrmGBaNyNZnBvUAzQmEtwnZLZEw1FWfrMxoGea7HtDVYq91eSu",
  "key29": "2oc2Nfocd52jWKQQk6CMb42HAE3MikwEAY8x6XFAKDM4dGev66MkeiftgQtXGFfDfrzvmCytmRE1o7pz1Lj2TUhT",
  "key30": "GhjEGhAs3vGaigyUbZQsBXroX8YZudRyGFdDYWUs7Ds82o7hnRaDUifq6eXwwCcFE3jfMY22btXCNGtj3Er6QsD",
  "key31": "65ttCkPwqyiW2NBDUUwFrMhGTDCtH8s2mR2G1sev5eskY8zxT37kNpbwJ6e2pXbZNNqcjkx91RfdLKSfSQTGmxoS",
  "key32": "vWc5a3vaWBJS5pnoHJ7QVaaw8d1rVmLSb7REJgTnBoSF1qBkjfm8mLXPpdvaWrtzdVmgCPUSk3iAsTrSc7M55vS",
  "key33": "2VcGoCmfV7pW9ci19d95ooxcLKQNSnkGGbVfoEoYyJ7xeWa64QiXxrrADn14TuogXTWipUbd1rR9H3ob1dACfc4Y",
  "key34": "4wMjuEFTbTJHjnU133ecTresWj9LEV3CsWbtA5JWYjSi4fMCu238Bd5UNqxsx1CeoRTZjJKZGUAkqquxz8HSaP7G",
  "key35": "6Z7jY6VXabWxUSfTckzrDfrXUqwYYiLnjXRQQnZWiAjaHvty626gy7vSKSE4XXqv3pdaioMnLDZRNBD6LZouUzz",
  "key36": "5UA7kHiDZDeG5uN1TN8fXasvXTi3Keznfh7c8giDaTdDcMFCHFCUtdHwZgPpbZmFJp3gKYii4Ub8mGbS3VsLxH9k",
  "key37": "3vaC4We6jFXuiwe9UkqTi5gXabee9tNUQhKqmW2usmdHz5bXDjeWn9sSFfqtckNjp9DFUH8GrBaMZfDTsSkzL4Ld",
  "key38": "24j6HPfVAP7wQWvnnAyDxaJbQz17Wq7WacVD5BRUfzhq7H3qwB17hnfo47e8RLeNAzsUCgyiVoPnqrheDEgJoLzz",
  "key39": "5VEMiPV7GFDeqEJUxnihXMmD9pEGDYAxFE9AD8EDFnHEhnQdGwHDBw8py8wtFuyjqBsQXwHNg3f773gYLfXRk6bL"
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
