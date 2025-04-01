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
    "3HVx5hHFinrcmW5oBRiF7rdwYRiF3MSQqfCnN6px71HU9Tr3c8v89ap2hXrk1LKWjZV1F2Jc3oCFZ5h9ATU81DSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rV2uHgZtiSGKnxAckzahZyx3yiGCgKb1nD9vutXou7svUETK612UwznSnAmkGffQmCTRHJxPqrb6ZPEcp7Pj98F",
  "key1": "21riMHaq1JY71s6MxR3iYdrQnLumQcUyN3MojzaTdtxyG6rTKHa1MGwURZQ8MqdPKZoRRi1uJk9UT918Vv8gS6yj",
  "key2": "5cuexmS9eSaNXmPTKPLP4YhhJ14mk1xR2Dep7SzimLsEJTxMSnPMUoGQnvPSu6vQ3Ze1qf9tqiAZKX8NrCXZXysz",
  "key3": "3b9zJMWeXPNPgLoAyq3tAuwx5FKVe3pH4kPzX1wgZe3YHt5VXaTEu1Utkaq6SLVxKUCZLVCJ1rXTwXutt2SC6DBz",
  "key4": "TNPnM4NForKysuMjBy76jGWc3Nu44KunYQLRhQPWCuN2tZCEYJQ1f6W8z19G3vXTjSyePS2srQYHfHL9bqqbBKe",
  "key5": "5Mo1SRbKyZRX5Grq77yuSK74qoxogEH8u85MTADpkNEhDRMwKt625MR51b9XmyEycUHa3Bty7ioWpw2DXTbZ9vLa",
  "key6": "2fGscRgJJ6QWPEpjVydvvfDHEkjCvufhf9ezhZ2TJVzE4jyNrMqnVasyaGBvDQJPfLWxP9o1q2AigzPMaNbV3XmH",
  "key7": "2KH8XDLsDFypkS2MewUYxRDxXHgmBTyQ63iWMJqmXqTHbpDWJuTxorwFrBS48jRg4Y9ESSiJye5LD7SB6ZqYMCeP",
  "key8": "514d6x7TkqDFw49drYS3hQf7v7EbWj4WLFbDKdWX9TCeai13SEQw1R2FcPE3gxR2UUxVMKiJhUCNkaToothY6wQA",
  "key9": "2dUsy8EnwMCFa6TD1cXJWiSjZy1HaA8sk7dR8gHA9rATBeU9N8tgSPAPkFbyjmi42nEXDLsK8qCeZfhD69LEtkRh",
  "key10": "3tEbPDNR6Rjhon92XiXryrCDNSSiz2TtgD8BqVjpi4VnJJr6wLeLmhjJh3GdhbARsZCX7W6zgKdTrwb4pQ7HLW9E",
  "key11": "48xyWKRWoQ3XFseugpatEn2NwaUaYRyfY7hEiMWjvnEJhMyzcy8c3YiaHCTeH5hTaB9dRmfqbZGRhwLoGoPf9pn4",
  "key12": "4K53GR2N5FbfL5xzJvybNd8fQfv1jZUepmiNTUa5zm8T6F96ecNjuM27n58iExMPborvwYqWTH1t5Sa79NSd9a49",
  "key13": "5tnSRmR6vqtKPrWBeDEndi2Qe4MeFh2PucnLAADVVvmXXbsPeuvmtkisP9iJBY4vaxPFzW9zjTxyggJn5Lgzytuh",
  "key14": "4iCUvtXd6QAYSUjdpffayp3CpZaNSwHkTYTobMajhe1kapt7YFVaB63sTeC71QAr9QdXUpa4RNq1dSj2P2HJFHzF",
  "key15": "4quQfZygn89P45cDyRKGSL6QX2Fru4DD2gGHLRRCX1pv5PjhEaiZJJgrr4XZCHgp2eKBkPLB8MD5virQF3f4roBh",
  "key16": "4TbDjDnAmK4TjYLEyAByWd42j4KT7YmY6rT199ZWJqvRiwD7WXYXZinZreT3Sm9TYHGjXKMWNsLwfaWhiPkLVAxk",
  "key17": "42SZvJwzKi5dhviCY5xUpVMsqWB5KTKa39bK1Fj1ZKLbxMKieoj2ez4QanFofKRPusENR3BbBNDh5cbdfPtExjJc",
  "key18": "2yM7GaZGQW4HETxVg7n6LpTpigEp34sRmBZkmSRRc8Vzmh1YSpHVYYEnS5JA62PZTRMgLzmve3f6tSPxChbfA3bq",
  "key19": "3qpUWzw5Thm6WFDayoKsPDLk544o2v8FkDVdA7mNgq2aGZmYNBRwHzpkhKgAix13KL8EZWYaJ8wK7MzwWWacJVsN",
  "key20": "5pC26F2YJuBxVU3934yCfmZ2dyQLsarFUoVhtxpL4nkfRZ3VQpTmTBqLrnVutYKGBkQapEoHypgZdobmHbqfhwde",
  "key21": "3TD1ECyyqUt25jNzeFHYSCm7w7dpqT1tChXz311vwPCmcYHaLNFbAbag17h7Af7oxQNmbgE1ssBoQn1EoCKLFpXp",
  "key22": "2Xtwkm8cPe6dZjcV74yfUq4nRqSx8aXamjks6NUsiT6SdFb3omeUrmSyMvmuR7XYtr6vYeXKg1n6L8fqJQQ6yidS",
  "key23": "4UvNDen2S2SajgxV2yA6pxF4M8oDqMy1b9JKm3XAVz5GWjksf71P81PHVX6o2CHbDzB4mdah6WsXH8iKjDhXbMJ4",
  "key24": "4fLFoHHs6A5RWe1jGMcbVsW7eSNK78frQzWbu5FFVTh9jCh3PvGBawBY4mcAJaRaRxt9FAHpiwJHZgBswrN6kGKk",
  "key25": "2yPvqxCL4rFdmVRa13JwG4HJn2VZoeJKe4npd7F3RGkaMcyFc8KtKyZ3PNqqt3njgSAFtEMXMQ9v9KHvunRxR7uJ",
  "key26": "3BfTP7wrKVYHSEjj76q72f1SCvnv7Ytm2nzo7arxfp638XVW5ZeoyuPBrtyNwHSkZtVSF7noEghhqakZmie2zxwc"
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
