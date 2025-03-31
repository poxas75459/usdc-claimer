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
    "2cpfunWX9ZkPt7RZBA6j1HKCSswhvxvrmRzz6jqapNdjP9UEevy8tAQt6Zj82V9ijcpxDN1uzFApnrQvbHsqTyim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z54pb7DKVCaJvapw2HNSNNscgXC9FQpZDCMgTPu5wNDi6fCiZJJuZTzKwjpLd2cHmaYuToLCGKEikd2DhkQCyi2",
  "key1": "3ZBuMy7sVfc9Q4QRgY7aP4kkJBiFRUMLWoq1h5ByhhzYBbqfCRwpFoE8Behsft2Ldxj5cjvgw6hKmsWgJZ2W9o9y",
  "key2": "5r1jWGDqG1eojTVTy7B6MDaAyLdz9cgtp2so4JLZ5aBqH7noSaX9qkrZJn7STSQ4JaUdCTjogapeaTyCFYGzFCoL",
  "key3": "4UaavTxgEAxM2Qgq2nbXeg9mMcaPiUQnx4z6MqcUXUdcYvgj4fMrVWhfVEdgyUWWeqaLLDs72BvnqV4ZsTxvc3ZC",
  "key4": "5rn1XXDEwEVpAwcnYFyNxLS3pb3LEw6QC7eSFQYEDQvXTMDvY1MLUQ3jFg5jiQQZxbe8vqWPXASYTWBtt87JvBJd",
  "key5": "2pNngQSb6eQ6ZQzdTYSxoZZ2SFCakYGU6WnijL2y2TbRV5Gmg9HTMJ36AJwwwCbuogNDgBHXbrUxooBVsVQGuJoq",
  "key6": "2ERMSu3CS6LvinYiicYR4WuZ8QdiWmJB3STab2CB9Lh3tv79fxH3c8ZAcGenvSvaEZunDcAU4Z2GBMAM7eDM2pPm",
  "key7": "379M58fEhzi9JpEPYRvGcNGnrcatxaTRhZ5WgveXDZcsfvQ4UnetDEW7Pma9cUtCN6jNkQiLSJmo2fXy1ewTmMmj",
  "key8": "2aUe3kLBAVyUrKbBWCzHDUYfqC87aHz2QBAQ4NXBp2qHzZdcJgk15narjm7cL7ikUrbdYgzgzvtPyCbdjrzB5Jmm",
  "key9": "4MsN1kjRFkpYkLT9DSRQtvHFxD35aVBTQfvKNeVGLDuAD3kbKMXCYt2aE5vt6iCnVK1yvc2JaPRaarLuYzvXnDf8",
  "key10": "NLRCkVZ9W7WVVHNCE8uCyQ7EVhdXGbipbzNJjoiVxpodbRLRQurDMVtUUSb7CKuSMM1mTXJReK7mvMoKZ7YFhp4",
  "key11": "5cbT82GteiMf93FNXctF8RuFBaDXVJrAquF3b5x6Z6cqWcUV7xRLWQUR1UxbymY9MRAFC4PGnuTfYYrwk2regF9U",
  "key12": "59fXYqVTkzzuc9kjQFx9HZi7YqwLwz8Se8J5H7NvbXXkLVZ6QP4ChVo9jBpwYBjBzfeJvm5P18jXbGoYin2frz2W",
  "key13": "4UhJc179xjRJEidNJRsDcNh8pgR8NsspZdp9xLkeSkGeWYtDnbFUFUAb2ox4DXpyC8cjKnyQNFu68NoD6jvukMCq",
  "key14": "5guwfkm3NMX6hQoFk12J3aJ5gofMaAzLzbGtKgmipsXMFB3N6Kn5rqcmv9tZBZp1NyJvuLcs2PcWFq3xA8qaLgkp",
  "key15": "3ZNnMXCRv8xngjjeU78zcFoHsmJXk7itnfFHayxYCehdcA5eYJquNrYvtN7PnHqcXPL7t9KfoNP4zbwRHRKAXhrY",
  "key16": "4tQ3c3yrKEWR3CjcuWynADJfYqxxj9ciE4SZBftpE1C3yiD6WRA7jkHzuvMH77CjMLAWsWeXVPgRa8iNqNAeTNVg",
  "key17": "3oEj7wAy3NZ1sqJ1Kcd9wiXFnq7dZ71MuDnaeH5gzskum5FE1rVuSV73qCS99Bs4k4JgdaoNnx693qdP9HAiwjJH",
  "key18": "2rodNgWZUBcCbvy9ubndWeJs5cXzuTm3QLh3ZpnEntEhWxUeAhshGqddJSXAQdvJKUkjwSq47WhHy1BUAkrTpBpv",
  "key19": "5rsD7QgitATzsKvYtsgA819FwXihCbah1zanSf9AtAwxYapSN1DfFi6RJCiqULCjyRXnpYx928TWjt1Khwn6owAu",
  "key20": "5nVUH23WS3jdwf7iQDV9X6V6Rq5ENw6W99RLKd9bPjVyWeKUmUDG3H9BXbbWYLXWTy2EwQgGetj5AeqqhfnRBw1f",
  "key21": "5TqCR9Jn1Rz4EjTPbrkLh3sdmtmR78MuDQKUsUHzfuoajrq6mAGGZB1MCFaX2ax76kCwmsF5r5JKQ6Vp3sreACCE",
  "key22": "3bVtJvsQGkzX2CzH4E7ScVJ3dS6Rh54h8qbxRHY5J46sE5BghB4YmTdxUDRULcnBCWhHPaUpoxaASirRhwLBrJFF",
  "key23": "5ti3MKEm6Rp2Tb71t6EsyxnGw1rRoUrDSBqZc4gELNtJwSPoJwVqeuyDATRi6EQHHt3rXf7tmA6QZU5hn87FiRT2",
  "key24": "5466QfgAVLpd2Pmg5cHqB5Jd3T953oUSFvqNF7VMJmGtnwbRjS7eck1rLrBKi563X5y4SvUTanwDnBakYHFu8UEe",
  "key25": "WMCeEeKeScQRLop1X7bXbPpnVNF4MZMRHKe8mhQDoSw7RJeu4pwrLR72cysUxoRGaSWHLFAAtAo5nbiuvKTytwD",
  "key26": "63W4xjcKkySphSxuBkKAfeENSgzZn1WrhCSD8bqbCUCvq5sKBeEnNhZGyHE1odVNtTwSZe973Fjb2N3zDiJ97NAR",
  "key27": "5qJW8bBGV3KAXjQ9rsZa1f9k43DMhFChjQZ56MuyzkMQKF7ud3o8qD8Ws8JTxK7syzc7xtabpSsH8ELnGqWLr5xs",
  "key28": "2uvLyr4jYe1zdwFfG9M1FJALcy4n1JL6MWiSgxj4kXxLGv3f5NaDGMLA44TF7iJ2ngMawBjFyhZQr7oU2mCehPSZ",
  "key29": "3MVGZcXkxNs9TrQp4AyxSA9Ar3KHBDHY8RVguivsXuTZ9u3jacJiBqAS6QvDxsRhNtsnE3VA58SPTQBvgPsZMu3N",
  "key30": "2mD9o2aRj49ABF7NykzdoJAkxw9JzMkPMw2bzMLnqsoaV73by4URfDAgRtgvC5qZSaQjaGT8YymfH9qRnPJrPhNp",
  "key31": "2qhqRcd684mteP7jLGfxM8ZFjLH86aBiGGVqC4q2iNKUvDg7vadH1Y42o8CMB81qyNj1o1zbtp2fCcZPKokENMsb",
  "key32": "3PFykpK8mv6rzrPaB9YFcVqiCXbSpS3RtyZmGpYrcEu6duRDEyE28gJkBayEnYwR2ExbDg24GzD1jh4U1td4W5Wa"
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
