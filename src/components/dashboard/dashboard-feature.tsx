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
    "5DTqZiYJ3ZTNTcjGnR27UrmPtKbc6RkYDU2CEbm3p7CFFbgWwN2JJctwRRABFAms7ZW89w37NXfg6kdyeYurPsYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tq1HFwvPqTnUbdQqGqRFnJ9k4TbhKU6fpG4ng1MeJRry4Q7SHnsHuS7GfotfM4xw3SoeyigZN8iUYi7bFzMHKKs",
  "key1": "5FoUrHJ88npQn5bEejfyYhAFohD4cjAgLtaAr9zZF1SxqaCeTK2AWuGgkGhwEvxx1UqXZoTTG5UWrdbi2d61bTd2",
  "key2": "mhjB6YAiHcFmpfcocH5SnV2a4uiCakVnUaQCP1cz4wUVai9WmC2RZZBJvtmSi2YhMt2mL53GfZS9x6uHT36AFv3",
  "key3": "3n9tHgxo3n7Rday6bMvyMMsaohgdL98biCjbi5qTbJcxHcViA6i6YyZ4oZxnCLj33EGsv44jL1BBKybzBDfQccm5",
  "key4": "368Nynv6dNhntwfFenACNwUfof1A3JVwEwykArMPrt4F19NB4G8oDdSmr9BuurbXPU4KxesoagK8hFHkX91ZBY3A",
  "key5": "2bNABVdGmJ2Z5P9D8Y5BWbdSWBGvGrzGujofAbusJtmtk4AYrSHoVd7DTzGumH6oGwLYXxsViCt4K84k5snVXMfP",
  "key6": "4jaxX1gNQE7g3A6p8xAQz6VCChCqw6zr9jytSYrKkMmZdMwqYFXJRvfdN2B42SZK2AzPhsN6Dr7dPz7Y7W4ueV1Q",
  "key7": "34iaU68g26s6rjUtFugBrVKi9hnH1YgPurDJyR44mtJ7nfSAK9iYkrW8R8ke431jY3LPEW8cq6G6Ty1MzGYVJEQk",
  "key8": "3Fy1uAJ52e5envG7KLj8YFUP7GZKGx2f2sjeridibsNWdtH3dy4CUf64wi3xWiADq9xdwFdXgtLDXRdHWQL2Hzab",
  "key9": "2JFLkpgvVqiDL4bn2tutXitpTg1DqW5LVQpmmNBjmHYV1yuuw6jFj3hz969QR47PnY4StbSr337NAVXF9M3SJEN",
  "key10": "5Ea1rskg3xivJBG3MJow66hHHjoLT1gb2XvSTiTNdK6gcs6rp7ShQtdxVwCgVjwLjJDv4ULtFGiySedye1VuKAqv",
  "key11": "4tHqQnEK9vT1AoS1WRnbBWthR1a2FfVhvSEU12K4fU7qEnzq3ZbMwgSVLU9KnSDk1m2zwSXF8y9jtVArgreh6Tw7",
  "key12": "34xVgZKAZG5TzajVWxE29s7ap7JEdXWju7thwhQUT8LYprArKns6CpmNPiWbfCq4hJpipBqaFQVtkK4MuF6zK2XM",
  "key13": "2iXgo1xTbcKauxe5ckaNzG5hXhHxhXry5E52ouVK9b1vDJ9MGRXhGpRbV3pgndBDduCSXawitDyv7TSU2ts7b1H6",
  "key14": "3xKGYFKEeqQMxKaGKghDjgTJprWTjNcnw3RkaoBjAi9PJvPhZMGRrd9CQYCz1wVHuYwbXf7sKEJ9dSPb2EjoW6Yd",
  "key15": "3BhiTgNVZ3mpxiLyZ3aLAPiStFw6tboQVs72dhzfzjgwanvd9WbVRA1DEDUAsvpcrk7puhjaVJwRjh872rdej7kv",
  "key16": "2SpPNsU4LJXfVwY1osC1X7se5ZUoZBJt2ZJKMtMCNwNsDuG3trJLxdZiY5ZqyH3HDZ9Uf5BJ5tDwRnNrjQwTcxZn",
  "key17": "2UMvugBohre9bZ57Z9jBhbFzyrMFV6HVjLEQcAqkwqqgZEjRpoNwGHZDfVZSGDhQSMM6Ery2spVzDSaM86ozLJDf",
  "key18": "3rgioEohoG5WqHCQ98tUZmhgTcCcYnDym7jKCHS8YwfqqJDbTbfxtkDLsa9wDzxyA2QUQKbNRg7czfwiAyd6CcK7",
  "key19": "5vepFPb4r9X65kSHviSHdeYh9nojbyY39EwAGXgXQ68dtLmZpbfnAgcKguwVTaDwhPaFPxMfzL69DbmfbZ5Sxt2S",
  "key20": "yznTVX1SMZyYenGZnjRfyUPE6rH3KaD3DtuHHHABwWgWKgUhGMbqx8U3JqZyBwNikWbPptqYMrkSRVZKFV2a9Nm",
  "key21": "39NKPdCrKkHRjoURNc9WNPyXGDPHUycu7bzkdX3ctfuRCmxJxzxWomxWbsfD4A4GCu1z8AURSFmWzALh8n6szzUn",
  "key22": "5oGtHP3eXnYo8XMi93iUdykjTaz3TAPYCMxUG2f5zAagyD1aUDgYxaif5pi8w7sySFH6vkoQNnC5vtm2MXJBMBLE",
  "key23": "2aBaX3YYd1eaiRGNzuYrFToLyCiVPUwBgAnV3aAAcDCzifcqcN2AnivqRaordGV8ZumvntzHmrwX1LyCvT6DgZev",
  "key24": "449Qbo7WotuTCSEJQfz8d4MfPCbpBci6nYMmRZQPDrPLpnPESrUEimAXJSSG8ctEjoFtQFZyHqoGjFgAdv9wbqo9",
  "key25": "4eYwMc5wEsanWtJ4DzRHRU4k56w1qSM7opsVbzFSpjnuwchcp4S1yjt75qoh9RpTXqiYywwg4EecY1RiRwpywXgg",
  "key26": "23sgNaE5xojEFQwx51g2nG4UW9rRvAPusk1ep7bBNKYTjy5YFS5WxnmvnHDFmW88s8iDMvYDE91sKGRgDRgKZKYo",
  "key27": "5PWi3YBq3DDg97gBM2AjzbPMBBLyPso9Vnk4uhj8VdfjRW2D41VntttFmYYXiLqsqNfsxK54Pz6WQHbaN168pLTn",
  "key28": "3v458zvcE8qRSaazwrGkvkAKsyeBDb8n3vB8w4UaCL2mh7hdzXbbtqF6TudNjvvVUkNzUG9xSPdXKxVEbzxtY9z6",
  "key29": "4ixyqpaXWGKFhgboMFyNWh9BdS9HzEjbTs8wiDy5xQxUDDaufXSbwUzcqMEarrKbdNgbdCAH135qDVsCiZC7gFWQ",
  "key30": "4vYP7Hm2a3AzJYtUZmvbZF43oPsv9isJqtzkP3zWgMYP8G1fjYE92Y7QEGWwe8yWLEtCarq13T7yKhGGwKifQGqW",
  "key31": "2NmTa1bfSTqTiDfUnN366Xg9ES2Nf1D1NpfoTwcAfYT2vyoLZVscHCwn1XKBKkQ2CVgdiFJaCfM86hQoRLtddUiG"
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
