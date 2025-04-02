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
    "45bBwxvaabMnfMVGw5T2kbktC55Ls36XVAzsJZWzwAduzjTfLgu14PTGES9x4gmxjXTeSLk8x2bZyQUpJHHFrXRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCJrpXKjtG7ti6YL4tHN4ENiZZr3p8L67KJew7x9dQ4BAgx8cJieDM1o5z9Mg72t2MtEGNAqRjNZ1542CTVUwB2",
  "key1": "4AgJZgojuKxovm4mUPzCQmp1RR4SwqtdK7HjA1Zoy1tpRBVyyugsYcDZwKnc1VzWxJSuEyde8uHsPane52zwC8bU",
  "key2": "59xfMZe3Zskhx5GV4YV7GmbfbKwiTLZiPTXhnjbq4hJQwGpjLhsgyfDVhA2d9WPdBZuLNxabSg9uPCoGULHNBgCD",
  "key3": "5efbV26rTfGH5KvTyrq1HJpQJYWe2MeD5uba4kWEULxBdWtvtmGA46nmkL2sL1VR9Xrvmh78estdHbHFVcY6Y3X5",
  "key4": "66gZ9UaeYejMjxV3osbRYxW7GguoKQkZ8AGfbhnyRmP41LcaBaw4ffk5wMjrDogUrZKQRiUzfZeBjfymGX9SVFem",
  "key5": "TwpJE6tAQ2Z8msRqDqDPXb6riq5ezk1SHqXMGngPbLBQEPYBAQ3Pdhqr2qXN9uYyswW5iRfTpB8STYCq7mdz7hD",
  "key6": "63QzhidUA9fa3XhKqRQMiABAZ1baDLFtCpFd3i1F388B3G6ZVrU2rBnWci8AdvMPZZJe8f2P4BoBG15dEugu1b6c",
  "key7": "2LbTdw52EwEMekdX4Tw7cgufUpoBg4Mc84jyX1ESW3BukHHx7Gdi2WcFU6sexE1spsH3qifFpbyvi35EKqrTUU4s",
  "key8": "38BnSPeaRcqBord5dRQV3SRK34sPBxNeXDamKRtUs8bzmEM3zfvLqjkwjEKkh75a57LqJb6PuN2tvez3LcQqifNZ",
  "key9": "2KX93G6cPErdu1kTKe3LKNe9YZ4uW4y7pDrtem8t8btypo2DxMuxQvwC8qJXTjX2bH5SbYEaUy7wTtMpm43UbQBA",
  "key10": "5qYoUv8Yy9sKFBWtoGPuSMShYDcaRHaTnMQWvmpvfsFyuRiyQcAzQpSDEGZnXnyPphURVKnCfBpALbAJmRuzGdqw",
  "key11": "37SYLt4D6pqfqGDcAfgtQKWUdc3Y1oYtcrTEbCewFpTb2b8yXxTMzMsrHcgKKaaasABuET4itjovQvbbJ2eifqHE",
  "key12": "2CRxR4ZvKn9AwRkXsCxdxueF6BdpdQYKxSPdWDinfrh6fyK35h9Guv3JsR1vYwQ5XvyQMF3AC6kkpH4K1E1J365R",
  "key13": "3xfwkFYGCbPqtqTwU6WUZtfhY5aRoCWK9GVMeUk6fFz5HSC7aDKNah3tkWvFfad5E5FsGrLQoNrEmZXwn2ACk6Us",
  "key14": "3GnPtimUwSYVnQzbK26PJaDM4RWxsMmQ9LVqH8caqESfJUJL53cT2iBKYKk4vPyN1RLAiniw4RuqKHcwrjS1NgkG",
  "key15": "59CNBngTmAf9aW1hkEDrnx1EwubiEyUSruR8DHT61WMh1DFaad4LQZgV6y4jvdKsnCXjD7b4PdEGxeMU1fkdN8Gc",
  "key16": "2EMYmyjksKGog4rSYhxcL7iW2Z6E5mhAoXJU7y4b2kxZNuqedqg51FX93KYk7yciZgWBXaN2yYAkHSHxQCw6zg8",
  "key17": "sWn9kEKWrDQEmLPDrAUpkrnaYUbAKe7MnmgzLWCvjQ2f3XrUwnXzwYAcpPyxMi66V7F95c5d1r7wVhBteiJyaZH",
  "key18": "5GszJmczpSLyh2RBCNynCfvDWvWaJMDKNynipc5Kwz1iFr2C8rCftpvrChm64b7aquy6w4xSBogS3zakddjiS2Wp",
  "key19": "tVNnaPBYUnoawe1umTYDMKfpHiV2n5HGrtq4Cy41kFegqVptHyA8VtarPEEHU9eoeHmuLZ7ZqscGyd95qTZRt4Y",
  "key20": "7aq7MNLZHs6zWAsiNubayZjtSaedajPff1gfxSzTvJs62cH6UhKhXJ6xRyvWe2Ly32bxRtrYRP7DhnrzJSTR3ai",
  "key21": "jAPaiFnz9NqER1BmwwZBF6DhVL7jWXpJRsd1SqD6g87Fiq661JfVjq1XkvHdDuVFMmqyrN3zEidaRLwmk6o1V6Q",
  "key22": "ngrir9P3kGsATKb9oYvLUDKytQVmx3FMzHnteyedtXWvvYbqC7G7osfHWFzHdhJ7XnzmqhtdUrPJMGxQKyui2eV",
  "key23": "4fZTAAMQqqWUJmrpEpELyKvaCt7sePGBwgWib44P8UrtsriDCxbzMxLtQCDDEvnfpQKuAi8pXTyVoPj69chzz6gV",
  "key24": "3WVEJWr2oSqn9zepahj8aB9hQb6vYw6TU88KttieRzis9ctENN4uKHHyhYSmhhX8ZavQWKqBwKuyFSf3U78bzLxn",
  "key25": "58xyZ9ZewrV1cCtiPYkWVAVZoWHk7brjf98M3FhWw2U7MoxqKKieKMN4GWULvr8XiaTzbVb8ssDofU7bYn78XR8P",
  "key26": "2sbhLDb9jxfh1uWuqr1qFTs51aoRfVyjPPHfM7HHEx6k3a8Hx3qZg1VsfLg27z69QgmuquRtsX2KYDZbEn1S1LqT",
  "key27": "2G9Po29vkrhVDthpKKGFTRCEABLou1WFeziPzuxrQGVJD3danJkPbiCj2xGymXfXqZ2Dhsx8RyZoJFfdigWBHuSp",
  "key28": "bwe6tfRbXgB8dkVa72Y4Nkk6bXXsAztcrG2PfQi5oyZJQ1tq1q1WVMjoYfnSr2kHYYuzAhXHhxwb1NFYSruLhkh",
  "key29": "1BuzWEvNZvUfa2uyTuWuUkXipewrSEpxRpLZbJyz2sDTdYq2ncg5cNMENiN4jn9CeP8QTJmX8bNiwryWipncvdD",
  "key30": "2DRqBWi1Gb4prgT7DfY3zL3MQL7jhjK4u2gdbxhB49piiwgWZeGs8SJb9Mi2EUkPRKvTKhUtsU2biQkE69u4uP4z",
  "key31": "58gEHQc6rp13Dfjf9fth1As3AqVMvRoiUMhoiwQYm1ezBDq8t8TyKM26WY12N9P5W6GZ8hinHC2UoLvK3CyELcns",
  "key32": "5vZFj4aPfii9AhEYGdEUxzV4MeCj3M7EzXzpohki8zKLpV4uPPtvjbQuVvFs1tQSdVSStbMRA63ecsByL3WpzYsw",
  "key33": "5WVrMksYqTStqPXeuLyMWftxRKHVo9ii4SPxcPpKECCw7oUN7y5X23F3VyEwEwAdhuXDnKTDxEF3UyBaPXJjyTSR",
  "key34": "4fA4enLqkUYa6h4rrASv45Wx43Xq5rtJ6GND74CB5ZXLbG3yUW9yCADum9b727Lf5g1XSqGyac2b3tnvzC4AU9Bs",
  "key35": "PK3a4TZg8qUkqJL1nLt5yeJA3YqHVdQ5F6UFQ6rgZYP71vA9mtcTzATgNu85suXanhP8xyMYGzVfQontEd3MgxU",
  "key36": "4EFDwxUiJZJxXjKFxotdGQL2RB5GsM477cYzgBz8iFwKhGJUVjbWh3uP7E3MP266M5Jb3oWdGsjFuSFPSqeCpRqp",
  "key37": "4UnWe2qk1dDvZRFaGvX3xRqKJ5Cvk3njjivFmd97sT98aqv92yKPHtqsQunvNcXqzFPc8eNVCxwDurUdHT3zcEaj",
  "key38": "4i97tSDeZp6kQ9KSvvY275QLbSjDKJqDWKoRBBKH97KDJCRVXiPhST866Z9CHCWYdxGtZRcWx6NnTyB6S2ttp3Vo",
  "key39": "3Tsg11wXja6MHYRzR57PkYNuGadHryeZ1g4wJa2TBtn9z7TqrRtzzmeAmDWH5ETaGmwwUMCQh8Y2GN3Fm6A8nqJ8",
  "key40": "tVFLUAm6mo6oxzVpeTyMvVojbVvwCvKcisMJ4TSWWV54p6tiWUxzw2UEKZqjWoBJ4JWZ4h3LzWuqS9VwyJ18Mqk",
  "key41": "NXS4T3Hmd86oSNSare7oHoPknf8WyyuPPMdWwd3vKKpXzFw8wfp1QpVLXPhz9GRkjsWFkTCfu9DV2a7u2kGQ9gZ",
  "key42": "31nz8f131BZtvt8ozrCxpDAj5J7mnKJ5A4BaWBUZB72i3ss5hro5KsExz6MDwM7ypAJ3N1EV78GU4jFDWcMwvxEb",
  "key43": "3gpm97fqor1SQEv7DpiegrSATyrrtMH5Gt8CEtTpv7ev1WURH1tzCptNWrSWQnxjVXnxAVZw2KPqXwBhPuxD2aPb",
  "key44": "4wCZMv5Z9D7b2ArAQydJwayUirp1815yXSnX7FajySm4AYTNuB8CdKazUYVaGTLiELKHgG1XUzjpSja5CHVrc8fH",
  "key45": "5LpFYNNY7kvkAgUaEumcxaWUXB5y3dbJ1dZv98N6dC21J8bkdFV12yH5nhAcuNrRgVRSVi5koGDekQW5fceG7SPV",
  "key46": "3Z2J41626mfrdaZx5KR4QE1Vu6qf2QRgjTSydmDuED9r1g6cgZatkR9zW4gwibEpKMABSnUjq8ab8ZuHtWEbif41"
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
