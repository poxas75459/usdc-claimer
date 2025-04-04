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
    "61VdRmJb1dGQhFNvEteb7XW1KUp7i4re5Nfwhj47E7CovgsyxhQqLsWNY9SsVGZM6SK63J6o7RQmkZ4xm9HSXjN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBVcnUWeGPqGnQgmWyDE7i4MhKiVcSQWXQmxPtHzzjYMuRKTDtXXhBTSCwaJD7fYAY2NwTRqRQfn7u6dGDf4o68",
  "key1": "3GpoAjLRAYNPBfZgxt3oV8NMpYVtsPT18YVBRVya9kq2C4tf2rLU5h6yAYPM6LjU2NjsZRLq97ED2x5BgQhtz1Gy",
  "key2": "4VTL1ZSvop6iNtbhP7mnjKHfbcKanyWvctEXi6ZjD92DPpeevSfWA9mEqNgjLbup1HEKiYmCzNNmVd2HRYooVPrG",
  "key3": "46GwEhASEBkvs3Y6AtvLJApuCt4bfvbQTZxzv15UCe9tVfjLNRVJDFqCK1sYwVFnvaJBRHc5hmwGV2vyxubWK4JH",
  "key4": "2nD8akznF7vZUrCeNGbtKeyZS74G3gs5qDsH6GfXBFPF2ef7dYzJJDfAHn4xM4SFCDGta7qQxKWoDcHrTWP5o1kn",
  "key5": "4omZnfR92FFunfN5vEBrzpGAbHYWNazWqKxxeKUURTyTfwtTEEns6JHBEGjKQm8bm52QSLeBuJMFNd15WJDP4LPX",
  "key6": "2JirCnddmedT4mWpZATvYnLgHcgguC34BhNuNGYhQrE1tDhSKyVUXBYBUNB51x33KcmGLNBudiPdN9tekL1mxaRt",
  "key7": "27iJ6aUJRgDfc3yUeiqhb36u4PAs1PANQsHGnZDtbT2HNoJEaiZaz1doqxaufT1dCXMnXYRT3kcFfHiuLeGNh5Y7",
  "key8": "2cuzvP9cQSMHJ2nNDWBtvqabt3Amg5yyZLBaEcp14Uj3vwg1opntirdtdDj7CGvoRbpkdFpKGFWpUt636tEuaumA",
  "key9": "5KE8FWw3hR1EPQbs1qBcuBGosMnChUFnET8Uw7nFcujEZ2JMDiwNEq68YV6erU2pVfTFv5K2KamEnYcvYo1FToK1",
  "key10": "4kFPTPcKezUbZQNri7Z5iWeqdAVPzVcuUTfvgDd6xYkVzKDRrVzVLE9jPYU9tNidH8Jxgb95CUDYyiuYBGnCm33g",
  "key11": "2ELUcFUJUUtnePDVqVm95bASyt6U6JXeGjYg9q8FMweqRg79yLPYSy3ZAgfnZA5hshaepWQRb3AtKcHJ4MfJSa2F",
  "key12": "4zwsGrQYqmkQ5Exje2KF557xtA3KnecnfbL1qTMC7BLve624MHTKHjZWmFEuHzmB9xhxnkkwxRSBy88X88Su36Wr",
  "key13": "4LRkYx8uDPwcKYRhmhjV9hkfBNYyqCFZmKHmx4LjxAitYFADt4X6jT4egQkAofZPBhBSSKYNyjkkWs4tCkpqFYWp",
  "key14": "2tZe8x5v5ad1hXoDYpHDFFtWVj413YHNqTx2ZRKjiH9mBNM2uBqbrHZPc1MtH1rRGwCYyXH7h8uCi6mP6UnpgSkR",
  "key15": "3KAePkJjcQbnb1iRsGszpuWwiSEuehvPYZ2KFdoZGHkZpGhe9MxVoEyuwBHkgj3k4nPiLM5KMZDDAv4Vr8gQmr8k",
  "key16": "HhiFaaAGdPp5LW8SSTXiikU4mRs8rso9v4ntUHnSRDS7BizahNvU8c1KkS2Quop88taVyq7p8iVe4YVPdVR58y1",
  "key17": "fSHwU4h8qrCFVm1AuzSk5eCZodavfDWksZKgFcBAj7Kc4oXpgnEx6Ad9pZH8pNfanoTmY4vxbU668reXT2jKWRp",
  "key18": "3GhhGBZQy5G9GpTaNZvwMGfJDmJA3vpKtabeQUNRdLN3JMVteRUiRM5HvQbyuzEMhJnnzNmTbipkqT6rvsYTruQg",
  "key19": "2jsDvkpEiFcYRPSDa2KqBtDYTV4FEviYCZm73g66tRzxwC26VX4vrZFBQftLiNd4ESLKthXLuwhconot7NrwGbS6",
  "key20": "4yZv7iXLGKrGAa7dUvGWzg5S1GS9ZoFwQm7twj7NdaMNQbHZgF6Pj95JojV4aR7MaW2HWgjwEHHn4HHjUqWteWAF",
  "key21": "4teiQseSVDMGNki2GncZFfaHq4RiirKCBVvyVaB71XJmboedJPdnNQDQ1FBwExnhFNf9i8YqcLHPQwaXku15iLiZ",
  "key22": "2K2hq9Gv11W3gG6uznRAa7sQ3UMKsVXknYthxoRt2VjpTBU6ByDUauJ7n8BKYbbokJBnRouzs5x6Sr6TXqwDyPAs",
  "key23": "3QGgoUjgZwnjGPVgvVAqA8qh7B15VaYjMeUvXh3GzLKUenbLdyxK8vLs6wYksQmjaVsfk9dswvRMs4orCowkUGE3",
  "key24": "3d8HicMrn85BqQujEhEXn9XgJaVFFPvgXzJFDjHqFDxQy84RHPyVemCikmWxwBd6T46WUxGzHiXX6x1LV3wBAFbb",
  "key25": "3tMYuJRAJcNGMskSKSg2fVqaFzsV8hYVhpoaMNB2uWKbTy21dRL6gkXoMUwkC4o848XLrdkTuND1mejsWmJ5Dxc9",
  "key26": "4KRdE69jyDUp5EoJVX2SM4s4Mw3xCzGWoEjGMyBHbxVXZ4cFynkGJdJ42FXgodMYJFqbYUZaBTB9Z4as6QozkFdk",
  "key27": "qV3H16jMj1CqbJauRGq8deNU3nqcELNzYrMxpCFqqvse6jBdSpUg55UTH97LRTGQL2gwesJDLYChfKqHuf6tGAo",
  "key28": "2VpsnnCZkL76BLhGz8PdGLYk143ZtQ3Q76uYSfH1xHf2eJoSUjHkzKX4QN17tn3AGJ7qjidnVeZ2VAwvhtzAA6Ki",
  "key29": "5jDU5r4HfLXCpevjPAWzE72mSGBxcRDAWRreyUSAqBjbP9c3PLDzJbDJt6FcCXbMVtQh3PFjdcEzZrmP2XzpUY9D"
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
