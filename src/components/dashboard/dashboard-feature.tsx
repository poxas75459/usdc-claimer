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
    "4ygQ5wAEjE5gygNaskgJfxBisGGxGcY8VHjKCN1S9cNr3NVvupULkzwUQE1J9n3X6M67F8NseWvUV5bkrQ6bkSp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WitgaY9vJh64jpnHp1cNE9k2jepGEBJhBCzBEFUuApci7orBZgqLt5Jew7xkvEXhCGnihW8qQsrv7dNqnn9eS5",
  "key1": "2rTuYCh2gqEKSejEVMKBq6sRnYasaamYgxom9TJF2RKXcx79P2ssMzdQ6F6rbkAhe51LFyX9sYfCGjyQrSXiBjeK",
  "key2": "Z68QxTAB6qQ7Bv1zwv51th9hJ4AwGD6UQFyHMR3qyv8NNN2by2CRYUidKHYK66YPVBMHgoaFjYmiLarsPAEGDrU",
  "key3": "3oYdkFD5acYmLszR9cAKviv2dLbwbqPz27Vp9Fr7gBXbKWm8HhYddhBrYAzrL6V4ZueZ3reRWx6hro67VsxtA4Xb",
  "key4": "2u1qxsx3jNiik5UFYmMVqzKPr7Jto7hVokDZwntin18TLn5d6oM562j61T9Fs4S1kRnVoDtiX7eVvrZn7w1TtFeB",
  "key5": "3iyAQEnckaQ7PWBNCg1iuUZMGQ6ScJxyegPk9EV72dEGULdomMHRgXutEbdx7CPfZqYMekqmeBg4sqNW6hdQqqWW",
  "key6": "5MsuyJHNo1gs5S91q7GbwmcrPyNzViebd8rsuAPeUPXyT4oFpwfMkYJS5UWt5FhazpuBGo5wAwn4xCyaMCPCGHSE",
  "key7": "2mx2qFroL9Mf9dpd7NXeDqqPDwNRtcWxRqA71Ko9hBSZAYiUA6E4btsHfNpgQyXoGt1NVthdisqAzZZ5m8fdbVoJ",
  "key8": "5ey5VPB8FY6yQKeT28kwptLjyuPqkz2dqkFni7N9zPqgWBa4GUqmPDtQwueSoqxoK3FWMPqhd1zTaDtVTJfi1SMR",
  "key9": "3tmMd6GUixLC5R5p7xi9qa4qqGeU3pniVkmCZiRpQREkr3Nv2qGLswfrYALvriCdDwrPV5eC6msViiKr2MPBoNZa",
  "key10": "3EfrLiiuro8B3DHgrBQWk67zQXeQc5S48YFQGKrkasfDTxUtGqb5mxmQpih2qNXBNxErfuuixxyJdd6yMKmr3Ec4",
  "key11": "65tmXtCq9vNATfDAwwsLArgdAHReMSyeKtHNT6PR2gnRWk3qnXTvTuSXAXQsSCmCxaZKqvJ8nm9WcPt9H7FbdreA",
  "key12": "JUXWXEUSijTwWQLbnuqUFXR3XUQrH6xzeE7GWK8fBDC9CNA1ihotDAN1GXRh5dBRZPX3w4cYL7JQ963wCULXfYX",
  "key13": "4mc8kZ8mrYYnyKCKNnRe6mNcKCM5EynWJCMnqpJ5ZZ62sNuNTFZDDzJzbuF2ZsAySP55LKgACuW7WydCnG1afJZa",
  "key14": "2SJKedhQD3DkHXpyp9DbCitRtAQAYc9tXymeVGdbgo1xpQtM8Ey3RH84wVkjQxoQacn5ZdPCTELTPv2o7y8JzZFj",
  "key15": "mj284WeP2uQu1G3e1sDKGjZPeftHLVRZCGqtRS46nC6miXvup6w2tuVdfTtuPMrrJBYdptvArxKwjv7SmwdieM7",
  "key16": "3oZv7t1zSUWyx5AsuKmY2ABdGDzp58x9uhdB5YTPk2pnSVTR1svWgAkCv2wRh4m1QouYpaPnERqn9KBTseobsmZp",
  "key17": "EpQaxxjPeE3LcPW2i2PvxDP5hUdm4ipvGhPAqgKGj21Kaod99kerfu3naR5w3PtSpLecsR6pRipvUof7ZSzaw61",
  "key18": "3ujFXBKFWGcaDAQypCn8DkAjaTsqsEsPPWSaqb4e6d6wexXZtV3L7gnUPpEnsmo4m2AyntALtwT2JkEJrnVZQ5ap",
  "key19": "4EGuN1946hpSTGhgJiZ9PWJC6998YuZA48uPNaSt1MuzwnpnovQbW7ebEGf48tk3jsxE6rr5m7n8e6SB33Ztu38M",
  "key20": "5UYgkTRBeZa7SNGiRSj2rZRwGjJjHEHi7NHVvsdWtkV2AJXjJYhHVKkkiQGARErFrgprr2zGrfDn8he3NKj6j5xQ",
  "key21": "2qckXYU1otUuzaaFXcnEFFEGR9WF5uhjBobspYwfhb6bcXsD7jLKu4qt4ZdcbtFenGgg7VsMuftYFBL2b3tMb7PU",
  "key22": "5PGFtZrMHUhf1WpyrYM6XqsMdWdxo9652kZ6zKZE69PNDVnZy98YLbHv3vDYcSmo3J41AbUDNvCqBTtmLsduUM2w",
  "key23": "5rxqmdPe8KCAFKnc2LuS9A8DR2tKbhjgLXCfNTcNu4cHmGXyiovoTJJMKVnGCRzcMZGcJd2nuhdkFgTmK1DtwmtE",
  "key24": "2o4ru2kwqMVuuevHWsmwbFbgdhN8PvMcmFyYTxfqY9C3PFcSK9TLAev41ZXsooeHUfHSqekWTtkNNSkE5taZ7FTw",
  "key25": "oNQyqFcmBnZJ2Dn8iVjh8yposTYg1izGWQoPiPruwdk9asbGqDCDp4NdjweWAdFZb3FFKeQcj8m9fMKBpCntxdA"
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
