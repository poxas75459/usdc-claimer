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
    "5VK74BoMmo11zC1vLGAGKcoxDWNvtimnYpzEwzTiidEYEKFBDHAnsZDxTA7p9QnNbJuDUvn22X1YR4RJsZSjCvr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "arh5vgzHynkGKNK5o8oQdyhNtwr4WbsNnANzB41oJz6Fzzsbv9xjZimKKCqWrBS7nnqTXVBxddX1CdCQLju5YEg",
  "key1": "3xfoLDtkRt1fEnUyycpSqpe14K1y6abVMsPiTpCJatgufNfRzLYRx4UqWN51tM5vQ68owecJ1euqin12tWqTnn6Z",
  "key2": "2D7fi9gnoRiFxJFh3nytyHJkkkSvQa1oK1JLLYMnZHrhSCGCtA5UZSoeRj87K8ENxvq3mGywEGMTXXPpGqshiDZF",
  "key3": "gVDEEmiSmS9crTtnrWKzvRhjnqKhgNesqRYtk7NbjUPkjdVQ5d5agGQ1G3PdpRkESFP5mkzV8t1EkHWA3Qa3UVd",
  "key4": "4Mw3a1t1dN55gDKJJnnw1Y1revu9U1uVzxGAQvsaARsGgDpuVjcoBg9oQnK2XkNWpXrqoEK2pHbnYcyyigQt2Gfc",
  "key5": "4xM1pxhdQeGU2hDnopoBasUME8dLZmCmBM92z1S563SdtDydnMq4C4RQaoeuT9jgx1dpDnWKfY7jX2WabKDMFNud",
  "key6": "5HWxJbhKws9du9TvaZmegJeQmETNwM5ktgvPoBWKydb89kPLTwFbAhgiGtiVESRiK7M1guya8sHpBgt1z6Z7oRbU",
  "key7": "5skkaoxQZvn3sWKZAY5zdtP1xJ6wKvquf2X71L61CQBgw5RDbLkAGXsobLYLWbLBXs6yXraxNPKeDU58kNdnjWyN",
  "key8": "55nVwze4PXSxk6V7EiDSUccx4o2gRyUPB9YgYyVXNHHarMijVV4xvZJyaMoR8AvdzFAPw9dPj3EZZjYmzRwQDLtb",
  "key9": "3gGXYGuGSHzsfEXehPghiAQo85sCqYHfv5EbaLHZyaYSiKcHDuacEPbwRRppb4tjnrY9RLRM52XdM5i3P6XGTdDp",
  "key10": "34ho1i8XaZXUt1RmXZ7XJdbutgoZTpyjabvZRVo2TKs5fD7mcT4vJtVSynytu6AXZyU8UsxzRLmPeL7LVENoN5rw",
  "key11": "2jZKY8a521AUcsrfAy98r2mwVmGiKnuQKp5xjjppXM1zfneJoh6EkhJkn92KeWRzLVNubXB9MTqvTPr7EV895Vcx",
  "key12": "FVVAtaatX7GHzFmgreWf8KDT8Wd2EQvjySjvVQwWpxtMGjn4AChNCf46PVJhootNYk9Uy32sbNkYY6B3X7ganii",
  "key13": "4SruQq4w1QXYAyuYaQcvc31E46c5anAf4Y4czjibhsfpswV5twL85WNuv4pLLCZQEktmUuAkxgcBoeZRXbgpveZA",
  "key14": "5JswAB2vaHZZHGgvQv993VTyvyqXn4f3PHNtsLVbttqXxCFvvUzEKeyvGY91GDdfwX4TH9BMSmYfpVwtzz7e7aNr",
  "key15": "2jdSez2JJEJMzyYNqMVBmM3djeE7Dac2jMaFuADmQ2Zy4PbLfhCh1q5hiYYk6SgzBT7Axs9Dq2fShy6Fr42ji5TW",
  "key16": "6gshTSF8nrBBdg5fmGVvSz2ewDzVfpNuGDNvtrs18f7YA67vAPsPVtt67BZXLMdWDaM8maXmPB1Sx2ivoPsGYhS",
  "key17": "3ErwgbWEMynwRxddq369oJJQKYCMwyBGXggoZWmqhxS1EKwrqgs1VWC3K6ZLBgX2KXrZjqaduR1WpbWm4wSPXm6g",
  "key18": "4YwrmEh33Vu6V1UoLePpE9Cvngy9wPdoi8Dt3oqhKQDiLUaR6STkwzkaqYCCt6uZvZW14e97zSpNKUtstqXGjggh",
  "key19": "37wAQPLrTpAZ6L2NxbXmyAaTMFVXpBgK75uYFwET15BXm2iLZTtsdjoX82vZ1Mbk8gHumRPBLnnjrTtsGTHaynF9",
  "key20": "2Wzj6gZKybtGdn5Sgf9Wq85sterWVpDPZAwEGaA4LBk2uPg4MQyzJfLdbAVezVwTVPDCDREj1VybMYrG4cS2p4eG",
  "key21": "3snVfqqWqmhCBJhwqXtKzVuMgXRSGoBWoDBzuBswDGnMWPbKqs2cebUw8HVuKnravZwaRA7se2YnszMrT2HvoMn7",
  "key22": "5Cni2SqLC3SMrbb9AgcqZ7Bwv7UdDHXHN2CtM8suMkfDp3wcPTcwEEPbTACAuaR8BCn6knYcuvrbzRq7TkUxA4M",
  "key23": "8YKHqmvECw9fbyvbQEwfdehS32SnY39xqQhdUHccJnViRpJiqfnMRMZXoDfqmJ3cDkJsdhVcq45p6VgFpha8x5R",
  "key24": "23vhZUSPhdwkntRQVxXoXx56s7wkGGaPqwwFAUwBH6NcJrFRQYnwZJs5T9q9gpnKvmiU3YHu2aqbfNY79q7eqovJ",
  "key25": "2UjPd1qbUN49sMNSkarhEm86iiEamS2ww1zaXB2KHnWYXznvPk64F9oQNu1gKbLmZjPf5LLvvFzk8LwRHwiPXdJJ",
  "key26": "nL4XZMadjm26DyJsD18dMWMf7rqpv5yo7t93bR2FEpxPr5o35EWPuvw2tFSu4ZKUba4Uyudf5TYFtE7YWNMXuHe",
  "key27": "3xHdGumNCikHYfki32ZuBP8retQ5oTgVNuY9gaxBGMncAx9YBt2tXvGzzTV7Z31eURCz2Ume5GazwfMqh5rLQUsp",
  "key28": "tG8C8mwpCc6exjnyuPn61vRm5z9SGYeVsT6qC2DbiJWkmuSPEGfzhWGrPW3Y7BRt7DbVcfa1jGVQp5Rg55jmwd7",
  "key29": "45VBzrqX4FjexdyN4iYoAPd1gFd6eQDz165SXGdcwpTukw9UGyfrj8rLZxSe2KN9F79WcGqjyHQctnsSbf2MgYZU",
  "key30": "3ABu5TWbXSSpYKJnnWfa76o5TdD1Ds6zzBAcBm9S3MZ6LTqTBYatsr4gCTjgSsC7Aq2LmztjvtqeRiATedEdLfTM",
  "key31": "3XA9M5XsopXiBsnfScogRoi5Ax7sFau2ntdRo7Q6duvAGAjBeyFknMJGM26S4Ju2AmoBQ4SXFMKyyaqUBYmzUXdH",
  "key32": "8Cj47BJkC2kVfKsUCSTGfjh6oGyqTs6332ZcCvRy7m4n2RCiZsJs8CwiU4dau5F2tuR6mrejo9BUKMfQctwRt4o",
  "key33": "586Puczf9RERojMgUw4Ay9bFF5SXjSWgGrY8v3uAfetUcu99ATY3BxXzSVejbUBqphWLSTxHBj6BA1zBVGgTTru8",
  "key34": "4Mpr3HVYNr5wufbuduJamrQj47xfmbwRGqdDSiowwgmPevr8o8nFRfZCpDMhuWSAUWYT9fSHUTnsrpv9mvivMExd"
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
