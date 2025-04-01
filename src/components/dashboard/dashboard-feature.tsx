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
    "56ATVuKHDhop2NcJNug4fDtNy8vnLPpEG5vPiyrQp3wPij9d2WqbLxJBe6Tpee2Q3PcvYsZi8X5fU2ZDnHs4cAq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbsYTKDhgFcpHce9gKjiHq7rLdgM9pJQJFPkGhe3nJi95nQKyhcWf4w8c3XHRvtf26vh5acRtHnYRBq178kkXat",
  "key1": "3yBQyfFC9Bk3oU6xukYmad3v1XvcgvmcjDYajLusuX1eoYrGLMgXfRBe4uypzbe19ccxK4cJaynEzC4tFf3EuWa7",
  "key2": "5ujzcjj6V2sAXXvoxGTx3Ci4xSpksazkNfhy61zq2hMieoKB6BwEJfjBtqeBVaEh1xipYuTYEmPY8TRWn4tMVcNC",
  "key3": "3o582kjjuEg6GUB5ot7vzGVneuHLQn8W1kMH53Mr8wT3Y9eyN593A5hjr7gQC8auD1JqpYakTDLexbCHXFsK1Y8b",
  "key4": "3egRd6b4gTeVGJSHgJvy1tPB8Uk3QTfMDgw8NzghWkDjBM45QAU4DJq8s5WN2uJPxyk6QLfrY5qYirPW4U38u4sr",
  "key5": "PeBZDvggauFJzuDYjgq7k9ihWo9gere7dYFzgepXoywHJtQjWn2odnFYmowDLPfQT1YCzsYtDEUFajaXaFBk1vn",
  "key6": "45un8ikNNLjDJjMvQSfLifsAegNX2BDM9w3S6dKDcVh2r9Q3u2qUbXZJCRnXgotxNiXJgy7aLWvkZKtqgzX4u8SR",
  "key7": "5vjQDyZcg8kyCt4WCGhtRy4GvCXR9ox9YRwhN2hH2HbATa1pABnT7DjVmX1RdnQuHdAZRzGuAeCwPxgkNVXi77fA",
  "key8": "3Rz48ad4szeu5sJrTEKKF242Rdo1ZSDmuPguEbewt91niwFLaUQsw19tZmuF2tinJLYTE3qz9Wb9ACfNx9TeLX9G",
  "key9": "4VjzHgB7PhcpwcMLhrAaEjWfojTaSbK979KjHrf59f5vxD4ehj9TWkcd3wdyxVHW8QESDeFoobTK1UkfkDchGSp5",
  "key10": "26GaWxPp9fkLm6NQzwujzJoDUXqEcNHrb5xLJjWFrfqBmgm6PzaxnwHv1m76Si141tfbwctM4FHNtd9SHEnNFos7",
  "key11": "2jbVjDWRb3Uq5okp8SHN1FhVz1Ucc57gMNpk4S3Dc7cNkrijLmpazXwLAqTFfGMDZAhj413oGvh1wP3BUh8oKU9V",
  "key12": "5kUrJnmkwoHH72H82TVGnvYZnexmCULjJDd2ygSayCf54sX63i5A52MiymEVrPwZ1XWArXi7oW72MV4tpJW1sHF1",
  "key13": "3uiGcn9viiMSbNYdpEPVz6WbrzvZR1FtEwDuEasgcXxJJpHm3Ud5sYGVCm2Xm58BBEQs6uQCEJwB71cMhdetY6bw",
  "key14": "4qPVpwDi7AMf5VMfarsRJGcF4VaF4cFUCPfp4skEU2kwJScLpK9Ttj3XhxYTF7bLeGBEnN6s3vMhTn9Q4SYn3euL",
  "key15": "3vMBwXnUU1FM5Gwn7sGruYqaCwFD8krqvnps7PKsw2RwPQtm9b8skedBV38KhngqV82XEKPMLgrTtDWEcqWWngsi",
  "key16": "5ajJGh89Mvor8qEbWFDCn3tKDW9Vtx3EVQ9TZU68fsiD4tZzst7Rsh4Xbscx2xJVU77PXh5x7vmyPpyczoPqgDfN",
  "key17": "2ipmMLgR2q7nzNST3CMdgNV6TJAszSYcjzpJpFRZwtRqxEY9PSvqRT8RHVR1PgMyjkWKVR7SaSRgjmihDZ4Fobsv",
  "key18": "2cRDHqDeaaaHVQSZCRQqNzkZe8Z49nwQJcrkmonYXpsi67DE2p8q1ZRx2xLJ5iJL6Tn1N6HRmdfnGAqeqAH7eevL",
  "key19": "2zGith7s6yRjYwnV5r3krMo5VH1BcEFQT3qcDKCvfk3QCSguZSUMNcfdY6x7egZf2QKEXp3xjT431PfZCvyrGboK",
  "key20": "4wpr4S5FZK4nnHvknN7ri2dQhhPxZzUxJBJY3E1uQsBSJ8UaMRXn53BU6JUs5iA3jjPw6q8nHHdZ8b1EhcHCWNVc",
  "key21": "3gbWf6APdMViZjjVaVwFQzX1zPT4Ubr4U2qEYdhtZYRZVzQgroBXcrQdGXrYMh2x3B3e52NNsjeSPZkdaUeVQcm6",
  "key22": "3zAdC4CJgwTBZWPVvVr1VSRndEJkE4FNMSzxiPcQ2XfAV6PAwtcrTTYTwG1ZJU8Eb1MgkDU7aWfjpmCHQcbDi7xN",
  "key23": "4LjpLnfNyKodndFiimHHXo6sPYcYvDtZC2tScjaeR4q2VVkYugQZZgD5tCxxicvZQoGe4ReoNh5kaz3dyL2ziq2b",
  "key24": "5d6SJsBg8JijYueqXnfuHHionKrXRBUkYnLD8rF7jdhRov3c2XVryMwCijG4ChZzqjPAQDeHj6zHm2We8LD5QkYn",
  "key25": "AH7ERZBwiU7MGNhLTQVuMxv5fZ4KnQaHPgbEa424dvgwWHHT2rKEtsHb9FaJiqR3BMvUfUEwikmLCoD29pmhGnh",
  "key26": "4WaAUZnpv32hBnDZJvuhfJpVKNHgcKmG9i5Nj26gkCmRReGSsVBMVRYaviL7hw6G6qs73oErt7LmZAsAdgpJgoQ1",
  "key27": "2Go3AaTDV9Vfbz6kc9X4xLFMRsFQ7AW8AwJYVUTpcRBbqyyKkeby2b1hYDvhHSCGJCVvMLQxXU9kN7GntsWAEbLb",
  "key28": "4hzNhDJ8LJBTYMGLeSA3yhowAPbxX5RucD18Pt6p7qZJyn824Ry7U9uWQASiYQyz4VJnE9j6T7B3uuT1owX3Vsgf",
  "key29": "4D9pjFQNBAJKx8ngjuREdDVqjZxSQkZJ2YBgwHfvBrwN9TzTNhpKz58SakLCSoxHwQpJ5awxRx2HzMqsMJy97qc3",
  "key30": "4YBcKiEBDHe7juvhoBNgfU2eGyfsnUfW1vT2vm33Siz5SEt5dY3BYs4MNPSzaxGe3AZ3p4EjBbuy8BxzTEZvBKLx",
  "key31": "62MEqUsqXcCtr5iXBPobpiRUh6MWyJRSk4QBMUMUNUiXB5MmeVuxDQRjUArHU7sia3r79tLWSBNJ8jJedcV64WkK",
  "key32": "5B2JaNaapYCbVzX8Y96EK9uW2AubwguAjmz2NpJcpK9w3Sw236VrDWpYvJ8BAsXasR6P1PNjNS5jFe42QahDcobt",
  "key33": "2TuvjhtdsLDGNsEGLbo2t77FCgNv56R6BFr3P2T2m7QA3Z4QnjVX5CkdDjngsvmJtDdvzkWNYjbpLb2ZsrDLbC66",
  "key34": "3gM2mP2m5F1agocvUFDvqKgNZvH5bYkJAS14bJXRTe1bwv8pKa3PfpafUNNm49eCCnZYDKnfzXTM7gkTNDKf8eSD",
  "key35": "STVNxav94LsViEDybXEawaNwuhyu77j78PZbFBKV5i2i9uqCQgT2fRZjSNY5PTZbrYbCmQw8zATY2iHbEw7h1Rh",
  "key36": "2M6ymM63oK1fMMm6twk9YAnz22Zv9w31ttrhVCSMbzbEtS6KtMumoteJoPqjVuDo9puUChLip3MmDhhfuCCt9o1W",
  "key37": "2MWze1tUmEbL8orfdsNpviPRca8rAbMzjFgUxdwWGgWPjs8CxdmnGQmX8oTFARmwn79UK1KiVrTct1ZXfxvzpeQr",
  "key38": "5NwsLjZiRGa4AL8jksEVUe1mwug6swvpi2MuyQ8QPSFHkuBF8FQbHoN95TTznW9morf2NGL4d6EUN7XUBEqvtn4M",
  "key39": "dWSusNar2QdaW2mDfGjanLwcB5hcz9hZy8qkqn4b7zJMThrprNhVVcRU72Gan2i6pXSEPBdQYQQMGFZdSi3s2c4"
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
