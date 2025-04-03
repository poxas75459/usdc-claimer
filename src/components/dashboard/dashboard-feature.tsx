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
    "5hJ5rN9nQNw444Tb8WNAeGZcLJbAQZZH19N5mxsq13S9xtTco8Kh3AFtNTxo5XDrrv7LXuXn1vdmpzeZCxD6wQHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCBbyvHC3W3b9eH9mQj67GesUpa2jncLtzRmLgTmt3msFgtHjBMuscoyzhSqEiM6d6GL7Nq7mhSKAemZC7bwxq",
  "key1": "4pbXgVTDR6uHq3Hp6sdZ6idZfKKDcBn5wfvqvrKknKKjDftdrkHbovxNXk8p1Kg4TmXod41Uxb5bNqLhm8wMEVoC",
  "key2": "2LkufRBDXj6qTxScHPsWupQWDNHtNsYw8R8xL9pzuHjNUjVi9sEdoApTvUNcad85XikLsXJ6XhrH4x7PdGTsreZ6",
  "key3": "3wzmtSsTGkuug5NhANZLbX4Z1FE8ortn7FkNfDnUrjbYjdonVAtyTgepo2NbjUHrZUSdoQuq7Ng1KSSYBjhidnB9",
  "key4": "6523PhTnaq5wdLsUhSPceANCZTwcPYvvcSrKadKXvZHiEVbQng6AHbYZn2e6VjthEtHZmWJCXgYbzefZCC1pVLqK",
  "key5": "46hGAeya8L9S2YQk5Pc15d8bcZUZ15YUguFZVFYqsz9fxzwCLaU1KWsoFWh92VPzYSPGKaQayh8AxbFZUTi89pDM",
  "key6": "5oUzMEvGXcgJUyKRRCTy8jocsogS4CBtCciCCCDLRZbNxubuHpKhcww2zUvTHiCxEigzXrirHAFfZga7YYWS7NBC",
  "key7": "29QidZEzbHBhw5veUKgWReTe9bKEz54t4HTVwo91T6J9pn5JCzdQMyxGqHq2Sss5J8XRJkGM1mTmC9xxhnwSPnfT",
  "key8": "3pb6KkhJ61huiXqAMMVivXzvPtESSKmsap4Jc62e6YJSzZmbtFXM387zdjUUQoHpWU6KAraJJgLoeDZY7iTygYhS",
  "key9": "HMoHA7noVjDERqNuxJhCXDFDQKwDcGw2ptF5aSzGtjLv3LZJd1RiauxK88SbAQtd2GqgVc2zH54ynnbihXou2mg",
  "key10": "MEtSuA4hZrRcvcdM8NPPnikHAtxZAmL9sJrxmDHrLMkMdhN3ho5PXFy3ECmTJs6fipTjcSuDGRvRKa5Mrm9nrH8",
  "key11": "4j2CaWyTNr399b4knM6oQ1AvwxzmQoE4JHRQD22wJtUu3iRQvo4xev3Sj5GSbWKyRkH9YhjNRevsosv261t1fmjp",
  "key12": "AX17rh8WQg5f84DdEdg7WLFwNwPyjvoHD8wkofBCsg2W4hodhZzFcJUSwrT3vWoy19ehZbrTdEKaq1auFD8nijc",
  "key13": "21Cm3qxPdb5r8zCsH1uxK8qrCg5AVoRAFFUyfq8HC9mw8nnKA5J7vvMCgF8AzJVqYaZF5vxh7dNNfxCcGFbf3gYg",
  "key14": "31uEEExqz232efwwAxA5xYzJRg5QZiBNvfnqLf9nRx5bueYM4vFqW4cfdgkskRSCkAPwC29BtTKXwpzqmRzo915y",
  "key15": "xD9jwJLFKzpn5J2p8kLqAYC4WDf4XecDiKcLqeFCKDPa6zarxcj1TLp3FRLvuwMNBiRRAbM9i5q8bkL6hXJ7ZjZ",
  "key16": "56aaqmgnm8xeQVqy31Q5mXWXWW27WA54GaaAFvipoo4w9ktJdcgk1dW6dAPSvREKQQqbvY68d24LCsucxDFtAdAF",
  "key17": "3B6USZsUqN2SdpSnbJa5P2Zud4yw1JpdqaNnF4zhnGx4mFg1pzubtbf9QJqMJbpuun1TYhCkVWXJdJiRrSTMoRpi",
  "key18": "5up8iAEdfkxMbJ4KRtJboispXvm966aMp5jQGxQtd1WEfkcu2YEEMEJ87ENGWLU1NepwwcJ89xrjsmL5QmtMKxek",
  "key19": "5jTMftyUz5b7esTxMQkMQrhanpQ11CoBhQSht71Ucgwppj7Pz73Cx72GmVaYdBkyD1WqvYME3moo7sbSSZ1huVZS",
  "key20": "4JfguBmXWC5FKk5ZZL2xiYUBQTkRdL5XStcLNCNYMeF9PzGF8nCc5s6U8QZnF5yDpvo9eDFPqx1XphLtJ5J1nLAm",
  "key21": "21GdT2FR4A8eBVSpzbg74kAJFzquV6oBu3fH4MFGZVPrZJoLhNKdZroHAhTL26NaMEza6SA1k8xj4Z88vWaf6LXT",
  "key22": "2H7sC3MxtFamPtDFLXf2A8HrD6N6F97BHfg8Pc2qrR6qwsm5UvDJpt4ukoEyUG7YJp2VrokNLwTuWmE2qW93LHGz",
  "key23": "5Bde1oiySnGK6nkMuwCG52Kku84Je1jLEjsXMV4g3Cv1ApRRJzwob6JWCsqJZBfGnERnYPHr8M2sVGkf3xZzoWsa",
  "key24": "2ndy7iE7EzoY3gUN1kAFVX1iFfmC6zoLrbULnVf6w5KX53Uc5RtA4vYvagnFN6tUhJdM2jWpk9DjSLBYdzdMJMhD",
  "key25": "TKyLMStkwG8BGLSspQw9Ppe7CewVhPBBMmdNB757EH7UQC4fE4okq4xccxvE6g1RfMrE7sZgs2wJACfDpS8vvcM",
  "key26": "5CA3iJhhQMUxVMPbNFNvnLXcteDCo6qnyDXPeEZJMntvddQxQaAK6dJErXZEjdTsC2Cy7GKxmvZCeXvPUuV8ZrB6",
  "key27": "3rAeY6hRYuwkdh5uPkMMmPThv8JtiX9ZW86PUrpfEKT8N4J7ZixxuF7mmwmqY6ozoHz4J1qNAGKkiGJiaqzyc9KP",
  "key28": "3GsK6StsPQLCMVZVxpwRZzCStrTCz5oN4p4CQLR4D9EoXbx673HXqpV4PjqZaxD7im6JTmktjJW9PWd4hjuYX7PL",
  "key29": "356JiALiN2pR5CShgamGqrM8gFxkWgqa2cd2Aw3nyQ2GufDBrQkeRNn8xU4rVpSWyXs8ur4j6TBdxRcDCeNUoA7H",
  "key30": "oh3tVnoXG46emmJpHJQEiQ4SF8Xb8F3kgJUd74d1AosyDr5be3bPDwyP9YTRTQupiXsZKfSf7y55eXcyNJsqyeb",
  "key31": "5twSAPd9NMzs1xztCxPyZeFUb7Th4zKXXFEwM6pFbZP3CHksczHchooT2vgbsg2C8zXELN4fNfCYkCietCnybzKQ",
  "key32": "STU13zuT97Vyw85bp4btrHJ7JRjvmGjDUAvtCo7MmVkZWj7ZSa3H5c6n9U92imDV6AGXo2QqbYPWoWXhTDn7PKB",
  "key33": "4SWUKAZJB7N4jSWBDYsNPqroG2gAq9NwgKMsoXckrrfedYvfq9piJ2SF4UwjGpBdKJfX3dgaVA9BSb7Frntb9MS2",
  "key34": "5eUbSargWvdu5TyR1XKAk3TkveJirAadb3HdvFWhftbxZR2uUAkgH1iwzUp2ws7p8hCZuZ97DydF2wk3XXy5bTP9",
  "key35": "5hGrirWVs514yF63LQffvcPGxZdMGvh6QQrHL4mUp2Sc25yn7meG9nuEdQnxNdtGJZjYJeVjD8kPHgj85XFZuZrX",
  "key36": "2TsLsV6MktU6LET76WXeAVNx5FtCFBc4awnxFTG7WZsDdbvL64soQUH1hy6htBuqs1tXRpqx4XDM6r6kREsVEV2a",
  "key37": "4EXFFMQFS8AN1mfVLL2TxMWRj6MfGXC5gVGTAEfKaEuYS86AHHEjgGzUjZF5u6KReoAJELQFz8erGNo29iPMCRHL",
  "key38": "3az14mC2RjkXPoJF1nXUxLn3Pu91mPJTFcKvX5z8sK2hS1y23BLJu1c6DmUhhYCXUakstTWYtG4qBs86MYjmc5wq",
  "key39": "3bcNn7t2syh5mjiFXRn1XqpJ6DwvTCGTxkeUWnjJjWWxCo7QFvQTRH5ULFksejRMy6sVL9jDYHqLkPe2eh2JNw8n",
  "key40": "2VjTagWkPvEXZa3UAtwte5yUZPzXije1yxbbnGYYU2DUPC2yXapnfLdodSHkNGiMDXNdnUEi7sMD8sdL7EGMjBmG",
  "key41": "24mdTs8jLqjLfnsHA8aEuN3HAkWQErqdeZGfkbJCHUbb3ZJHPuu7gNYHacbkGLkRVkZW6gQbKE9xC93Zrr1NWrhJ"
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
