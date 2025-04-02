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
    "xkHML8yURaQfvooh37TboAsQzeb8bEE8iuyZJJBe1ahSdaUwTKtEg7SxBTWvrnLfGQgjv3eS8DsJxYYRb4caciC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PqEVJQFAUBXKgBZaMo5qmCauY82hVyehQizanVvLrgVKndW23vCmkVfEgaESofw1RG4h6YLDVGvWmxmUu5HrCN",
  "key1": "4gRrcxU49cNdwMWy3wHsCFterktUhM2bXBQoQKJUZcBqGQC6CPyBt4u5S3dz6Po5iE2EnCYwGMsHpejXUaTkZY3g",
  "key2": "2ipZdAMr7GYqmSwm2wP6EpHr2y1neAyUG7SjKs9b41sxJvG1kW6VfkuYc6G5afyCsQKPi3Zkh1srHXDqqdJryvB",
  "key3": "59zSTpxHHZ18NZq4T51Fz3WqsP1iFQcUzUbEYMB2twGhR5zou5REQuoYccG59TMro94eKweGt1jJGNN6PXtffhvW",
  "key4": "6fqrxJMKoeTNFTyWwz78qNUymPzQjYTTRv8M12RS45rA8LJFPv19bUP1xxcuRLyeec4WktXENpqe2FgsN6QJSaH",
  "key5": "4DxRpcLr2o1Ev2UwrQEZ5LhE9v6dirAJVRRtMdVbH68uigAvgqQ9bQ5wp1r3eE4n9gD8h5P9Yx4HgFrM4SdWDARs",
  "key6": "127KMX8VuTshH8iVTc98BCyak8JA1hL8tJ1cMudb5WvFthLSQ2qLapK4tEGtPdLUekDoczZDnjcF6zCvFtob61eq",
  "key7": "2oLDzZoSMfG5SbdiWXLfNaTZb2z5K9Gcky6DjYmwxQmdJe843UCvQrdUD8FFVK3221KobXYmr77sVWMbim2iwDHZ",
  "key8": "2S7Gzxvm4TeHLan7aSaWKvw6Q9oTULeGSGQWaaTKUZpZ3j3sgGxJD7oztED5mz6X7ATVLELTi5dNXrQgnB1e1ixS",
  "key9": "2xxBEjdg1cdLUQ1W3QywmY7F4257WKRxYdBFrRKjoxcyCQct2DRnHcouWmU8vQD1HNtZvDXmhhEFMPcPWnv57edR",
  "key10": "2SqPVW7cSwboZANkh5iZ1VCzNGmsA5VyoVisW8RDkjogY61VNfS58Skkixukok3qAFBknKbj8KKfqGWH1BBP7Res",
  "key11": "5zyBqa7afvnmLmnEGmfcB5p4CdhHUDqKd7w3jtCFsgBaKidFxvdHtv5hRDHe86evZMEo5En3fsu61JrK43A3QJ3p",
  "key12": "2a99iRdehLn3zzbpYNmoFgQS6PWwPwNNijvbW561XqJjb6FSNf8Ya56ZxsfG5TaDQNypWPkdKxjwFcbxY56wQZXU",
  "key13": "dvaJhZ7uUt3NBEG3c2vqFKSm1VJxRXg5pBgCH67129ggTuXvecx6MLy4hvgw1qQMp6P8bx3EbCTLkBRF5nWB6Nc",
  "key14": "34dGiG1ZfCpv6Zv12PLPyeH7yn3TD8eTJFQeU4CV9noEn8voW4BGUMWxM7CyTCmfdPRPwUaiwHHeLKmnZ3VwKFZQ",
  "key15": "4mdCc7AN2VRZVwhnZj7DXKw4B6zkDsmADLfyzp5CsGPnhiJMXeW4tejtM81YRxDr5PUzrSxrjeZ9h2xjedRN6x3r",
  "key16": "2kAvSAV7HKKow4D1Rs2EcZ1nGYFgRtFieNBXPqFVZmmSA5VveV7tdvhPNvjAucKUW7ug8UnH1dnudDHyqy21Q5V4",
  "key17": "2xnU8Kp8X4cUAgtX52qyfqvonyj8h8QxQgU2EYh2mdMBaUmki3tv8dWNGxNXUB5S1jgpdmPNCUaVFM8bkiVV2VCA",
  "key18": "3Eiv37DgHYLQYeJegrMKMQb3aJTCwBEct3yXDWzYWYtAvApgXRzgbVjs3SeeX4kmGgCCB1rMajxj9cYftTqVRebf",
  "key19": "3brsiexTFnXR2qoriKnt2dqZFTnMhoQZR3MJQ37uJ346Mu3wbt8c9ab1wVSjaJhQioczgS7fh8db5yhTDUi4uKRR",
  "key20": "9kfjbpbZDjHCVy9p5bgAx8d9eYu79H3JaH2R2YeCXefiixuNnjThNbvmMq8DBugwsdzySyJXZa1FLf25stKX33H",
  "key21": "imXdKLoBKepQCLT7Ken72uGpPKEmBNqNDpJ4dY85bHhtz465p2qwpPhsG1mmDgKKXRQoJs4koQUK7Sf6KASXZUU",
  "key22": "qJwkBRmmPgprzigcLffUKZjVfNAgAKd9UuJ51uNQtuBFpsVds9Ntd3itRYVsgsZ3S1qaq9tX5KZPQefUddacftV",
  "key23": "2ZxmDwPZvwP91Mh8RZbYbjQQyTcKwrZh3fbyEVzpYuKYPanvu5jgQZL1ZdCYYGFneQxzgzoTvWo4XkmmrxHnkM1g",
  "key24": "23t4hHkKtDAmxHP42szDqnYn7FxWPjKaBGsNRZsZPHL4PwurUPhCZyUAT61nMKXWMZPNpNTt4EgLpt7QBzLr1sah",
  "key25": "E29hz4CKvv2p5fVqBvmYuuaTkaMJDPkYMaFKBbtKraou6qfjRAWzZNbY1qauVNzRTZ65XKWMGEBUkTTQzA4A5SL",
  "key26": "46chtHygJEPnVU2tmyoQ9HcMCF5NNJ8bLG3ExAQjnjkAEbJw1fjVMYTkz3Xww8cTDdJxuRro9sxYfipkoWPA4yez",
  "key27": "4xWcddaqa2nq6BoEdbRPEvciajkZj9HfKNwembWkr77fGAZsGF9Ppu7g3kuh82h1ZA5Tyj3Cod6Y8XEZ5e4xaTsa",
  "key28": "45V5QgMJ4HgsDVymFmEJWdQ1jnDCbpjcMTreRncBPwwh4YUEM3RvQ59mCGdckTSb8CxkeUwXvSJA2p8wgqxTJNec",
  "key29": "3bfKX6wpZQARFmifTAsiBDHgqbLB9JXaHViLo15HnLueoXqjR2oAGLWaZs3BBe1o2KCprf1qhtvHgFeVyeCEoMZy",
  "key30": "3U1kXoNqVGtpwCG5whXmcfgT4UznMQAo6CXRkn6rGFMqVdvhiBsP2xN4FvqECD28xwJc5NXZGh7WjDYTd5F9vpJM",
  "key31": "58RXuU9EtE2z5b2RYdcH2Ea8zmtS1hFwbhokHoHjubfL3cSsGELm4gz3y5xKU23ZCbei1szDL16Ws8Dh29tVfc6y",
  "key32": "2j3E1j4g4PbGirUzPfEJAzCwwqJ6FGkk1o9brYYbgdsgsx9iXZi8roVwyRpXGM5HP8oCgBzjm1TkbidkjYgYt3Uf",
  "key33": "5yYw51H7CN9aHTaAdhyRbLzNwUeKGMcoZWdRb2ueDBBMkBhyzVisQZecqj9d5wS4zWQU36gginx2z3oRoSknreY4",
  "key34": "5nxMGxkWMZ7zf9JREnuM7ykbMjdycykWUn6RdTins87bGGSxhn7erJQHfe74YzjDxAYQpcEKPY8ZQ7NBtRjQRCZB",
  "key35": "2wMBUihq9hNG6RqiRGAGFCNtowHHqDkAQdKVbsCMJUoyAcwGRm1XvSM3c8e7iVFMaBD8tyjx7japf73EY51CoVPL",
  "key36": "4Fkdy1NSNfPEdiHVLv5jnT7rwJBTFpD1doxaMLy62fLc5dd5KkDD1ZNWMSvtiw8Ac3ddnY8GCkYbzPa4kxSheZW1",
  "key37": "2bs2eNJYiCPfiN9xZw9j8Y8qj2xq5vEwyHrmbBr5JEqZwPt6RRZDXwgdqfk5nD3VHzUSr5FpEHb5y44tuHacEFpp",
  "key38": "4qLWkbicQerKyafqjRQ5NCC97Y5PjKyk62fgDEvBJwH8qbZAF7qbtPZqgknTKEjZm2E7z6e5goRV68LE81JeV81q",
  "key39": "52kNkMVQMAPrrPa5nVqkUPBMDmpX3m8TsRwGSCjz4JhMLC6JFZQtAAeivBxP8YTjVobhBzbR1r2mMGreSkMPULwA",
  "key40": "bKP8KSDs1kHCgruH1buSf7XhWg2kTfPeXjzqjRTbiQ4HrY2sUKGUL5TSJoELntjkcTxZJXuN7NQGgLAH4Eg3X7A",
  "key41": "5WzUsynjT34fS9BspuFhkPSYCF927kW8ULQuA683bDm7uuEZEy2xxaVtNRW2E2mb8FZdrkK5UDGiGpaZhJTPF4Qc",
  "key42": "2xKNt9MSsxFAwZuqrB6zY6qL8boEag8ys1ngEDwdMfS7FkgubQcWXkSDmBTbdcy2RuTbA7h5PiHmv1Vo24NqFqrc"
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
