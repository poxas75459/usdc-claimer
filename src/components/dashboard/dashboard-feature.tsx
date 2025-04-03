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
    "4DrK9e6BXwFwoQ9C2Gb7o9KLTbtCo2gXPZwGwwG5sMvu84n5VJCbzktvP4j6C1jCtkXGC44JFUPX8YNbmTetXdh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Kj3ghfwFQd2AWb3Abhkw3DwtSA7gwesZXU1fQDqiWfgY6GniW1jnuxEyCJRq7accfeHE1FiPLaYibsHYJHcov5",
  "key1": "f9U7RHnRAT74BUDRX12DVpbERnZ9N3AQjaftaqvbfwJynohoRaLUdQWp1ZPQo48MxiQNtRsGUvmQJErjuwhh1C8",
  "key2": "4B1EY3c6YSBuen1MussqSP8HEB4M9gGNpL8PRga9gFhLVENHnF5UyTrTAuRRhFHHvgcKz4RSn4TnAsgKCRzabkMc",
  "key3": "5HkrFhrR2mf7egfrrHp7MFjpBmUZt6exGFZSSvnbyYmQY1Q1kzNFwe9FB42tpQWmsW1BXYhBkfKMKJUCHdrdHpbc",
  "key4": "4nBsFbUdfVxh5efT9sp8ZH6h7tgsxLM9YVF2YZ1V5ZtZK1uYHjPFQAdndVF1qrSBgiwzmetep52NNnmZpu8Z5SZr",
  "key5": "3KPskJbK1zQkSTqw4me8cz3vPv6GJH7AiHz8e4H2zRGKyy9ipKCZKdywJnArbufWM3ELrSXdE1r1ZbjbDB9v3eBP",
  "key6": "5tErewyvdxcJeDbfyh28VJdMPbXwTqsqPkZBWSqJy38y5EFZeRxA4YpeQuis4y9XAbPkFuKEBzEeytzCd7PWSTap",
  "key7": "6m5EKtPo8ZiiBddfWjy4aWytEXVgZt6ja6txoDP6xg6ain4LvoMYYeoBaGweRVhvH3nrnmgfkfxcXgtjN2Wio32",
  "key8": "4ft3E593eSVxqvB84TDG8GMfLioQRvmJa86DxuR5jxwHdB59RQJMb2tMbSeCHBEbAodNj85Lhw2DhPgwbWU7D92A",
  "key9": "GLVA1jBptakmJ4oFqeDKXtXBwDdrX1LBsM7HmcJ66tsbAX9B89Vi6Kg4eBEYgAtKVAwpgcnE1FuU3UzT5h1hXhY",
  "key10": "rEppSMznTtyr21a1wVf7WwwkLR1VMuQmqeZ427KwiJPVg7LAJw31mHVtmaotvGd5gsVM8Chxm961roHp6FnzCtD",
  "key11": "5g1aU1V1JwVncosmNZ5WCrxmuRUiLyAkGyXCdddA9f8wLYxvP2UNRho9svzCGDDYaQXTNTc7fU915C3idNTwwbLg",
  "key12": "2s2ft2ms2UZh5h4EwE2BGWgvSLew1VLpjti4kbdNaN62xvBwrNEcVfq4NxVP8wzkp6Vr5TaXbFFa3RNCY7LTuym",
  "key13": "28B3JpMz8cW5HCj8G8mxxJVGKYhgv852b6D64W4e9qZBqVmi2EDnDs53ms5b5MjVxpbxR8dw6t7oodBmTKMADj6V",
  "key14": "52pdvXLoLWD5RFa7ABeMeFVmefKg94nMBxtiSQzk5EWZLbTDscRpvQFQqxPTTnFBwamAMYhPCF4bDs49XtnXReme",
  "key15": "2bfPXQBq8j53bCu3EAMjxbjynmP9bTo6pm6ZkzyXMZBxr6KXEyPcoHtaRcfrmrgi7sbQjG1G6GoLQMaSh9uQPiRZ",
  "key16": "EVdJrRnYyuYSB4PSX2BS6CUrDFSsPrsmLotKUnCS93wc8jhxpsM6RJeCZgpVYWYyQdMJj7yxjDzYiz4gXAzF72W",
  "key17": "3LGAfeC8zKGFDd72oVtB6TehjsCTh3T3M3ZhUyr51wWWafbswBuNJWHE7u9M58dUy87Z4HgP1JBFVKjYxkx7Jeu2",
  "key18": "ToRoLTGM9sKF6u51mH3iNM1M2QhH6D1LeUwz6Rr9KTxgWb8qbbNUJvUGTuzRx74TgwtEwbX9yWy7Q4qLredWx5J",
  "key19": "629tGtHGxAsAVMoiJJu2RoZuv3jAjq571Z1GYgtSoqvg8KPFW7AoT2CwKF2tWVu3rxx8KGWhZpdU2owhCeYKRTzb",
  "key20": "2RtQUrLrqcgEVvZAkyAEs6BqEf4Vv7iNoECq8Wsz6mbJgP173DNHKv7NTeajyU83QZZmPBJS38V4QFcwGPab14ha",
  "key21": "3YRcXUPa4PfFYg4MojV1Sk6CJ8tQuZTF2hHch9g7eMV6jvo6PPhpoojKB8fP5EpF9wjkDUpPUXmCsvjkXYq9o7rC",
  "key22": "3JvB75zTquDjKjA83KTJTtwhSt8NRpiw2WxCzTYk6KnPaVaxVmZZCMWTtTcZ8CZBkukBXh4fwrAJUZXEn3XwnP8",
  "key23": "44HKiPFovPm1ft1856bRTsYRBkaagaFXbVLPF3xCR8mw9yjumMTvKfRbV95gF6rAm99qaQp2wuGZN3KSqhHHMu5o",
  "key24": "64zbYR4qp7HneYbQHmBig2QZgdunFdYWS8wcCEfgXQk6DFezME5fhGJr3jYsXNkebLn6C6a9bRkPoLkhHVRM5Bww",
  "key25": "2GjRAM35SVhraWvLp4w2TB3SfXitobpPuezz3B837HnsXqvTZHxSzWiMLCdcVebh36sq74doVSrHZMyXhwW2F4kN",
  "key26": "42tyjd8EtNPhNEqJT85wNtFjXXfonDSou7S3VNkPt1y21VqXiUr1B9GyDksoEH9tnfoxda1kkTHxkvJE7WQs3YrJ",
  "key27": "2cv2VBJrzLVmPpcevjXchCekMKiToHV3JGJBCHcAwDhV8nW5CdhjbyVeNgmAdbrp82vcDxGvG8M3899Qq9d5xfrc",
  "key28": "FVFt6waL1xJnrfJRiD3h7inAAayAzzU3zNQfA3nxNovzY2GNsckjGVemZaTTqSesUqujs4RAAv3LD3WSfYhL54x",
  "key29": "dSJ5sJuLwioNJdsm5ZxwFicGNCni25LixFDiwwfUacAgbnZceP4fJZTuiTE1cwCueMY7EdVLs815VNhMRUS61K5"
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
