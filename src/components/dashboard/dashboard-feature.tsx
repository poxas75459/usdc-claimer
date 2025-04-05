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
    "59M2UJDeEBGBXWzMZDFx7qLgy32Yu7TtSWYF3uFdgCViWDE6gEKTVAxRWxZLX1qtucof9bS6zeA14FXNdECAa2Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdwdK9n1xQ38iigB69Y5CLctqsViMa1Ro5EZfk5kBVo6EkRimu4RbHmpyscgNaLbutVKty8EGqEyWyeDz4BJBJK",
  "key1": "58RNrCMUnwjqbtQ86NHZudrRwne2anvEQufowykm91SXb8Z46h1RXJ7oW3kjAUv2X3kSg2mCT5YwJ7f8iARdSPDL",
  "key2": "4KiweJtyyLc2CCSELNdB36XWrn2iG4Y3SL9Y1Jpw7k2ZLfjjXZMKvQwkHRwtGmrX6ug4BMEMAduh98xoYcULUxsN",
  "key3": "Bc1x6XpQKbMoqtgk9bf9nwW8tUnutAEFCMKKeb6UDv584b3sDLoUKJKfcwjSeP6sypaRf3btoLP8YX1RkKVC11C",
  "key4": "5DNfVULcifnZhrmGL4MdMSy33KbuZtfeRX6kvGSAMwGDhar9jRR1tJW5xuVNKcpkg12fwMX815wETSLaaBgkPvzY",
  "key5": "3EMDoFb75vdz9M71GM4qn8dNkjta5tQbbuXZxgtx8L1QYDw2LYDYAvM9q7VR4PQ3juPZg6c74VzPhaWj1ENwNCju",
  "key6": "4Wo386XXh5VrhTXtBhUFytiGbFqaFm5N5xZsT3haSNyjyT1jqbfQbFYWAJuqzdm55VnkZF9NMaeffQAoVekQtgRm",
  "key7": "2p7TF8P2iq1rHpLbAhLRLZpjV7yWd8wFNcZmoUSpx9EdJBFkgdv7QsXtPgEHRULiT8Qs4yeLz82yDLEzPeYiaZQp",
  "key8": "BFRCfFeaRZ4YYWbg77Q7L31XMQy5EzfpWqiXCMVVS96T5b9TZXuKvih8KNUEgvXcBgxtxGBioc54kSjjF3Nz2Py",
  "key9": "3AiWMNQ5R4aui1eZA6H2ekR3FKo5526R7RTuUvAXAPKm1PPrggVnoZ5y4AvmMN4uAFZJJ8agMcViRkNVa89v279s",
  "key10": "23QnakedcuAL7R39Bco2x7oqesY8dGESUVfybVx4VExCWT4ERCWFyRXn6mzS125DaiEpqdG6zLYzQ6GJYM78wf4x",
  "key11": "67a95f1Zjx9dYRtyTJ5JaLwYdbD218jaVmzSDPmAjVCYGV6vu6EWtrArcJaa322uAmKBryWtDen6kb2PPvt2gkxb",
  "key12": "2uAX2SpdcGbfohTBr52C8azoisBzacSqTufrMARX5gKTv6VVzB6sCaSvYkSxrB7rESevADYThVuqP3ksggsQEwFN",
  "key13": "4auQj85UrXhpReghm8t8UUNjNfbeh3S3bHYoYSSwuanzA6yiieuk3ib7y2fCXCVzormaNwPYDu1mV2TY3YWjTDM5",
  "key14": "4tS3DZSMaoTrNkhJjN46tBij1n7VMGyjc45P4n57Ytpq5gfuhY8Yi181kbto74xJNz2mKSnSkYbbaXs2goFc6Kjp",
  "key15": "VMT7Y8ESugwR557sLBF9BBbDbDyBHKjtfzaNuWWo9XCXgikKt96hHhwjgUf1NwbYDSYGYLYL9XYLoJL258DtbJs",
  "key16": "4WGvqZNvn9bqgfxjysmhRZtDUCdB2drAUxouu6V45hrFEi3gUafBSv8H7wsrcY7Vwc238UmYp3B9yhaTC8tBN3zx",
  "key17": "m5rTXPLpt4fWjTUr9qiwt1P7FgzK5fccApg1ZrGdtWRcDFCFo5xuYosvqsGvb3rsYjZskYUk7GiAtGdNasN5DCY",
  "key18": "55Vpgbqd9E6YtxGKEmi2tP7FGFbB3MyxL2KZAPWZZ2Nrg74UVB4ujmmpTSdvG31MJZqUuGRAnaXoQ6XcmTf67maZ",
  "key19": "A3ALdWpNoK9MWXUC48EhbPxxVq3bpHt1Avn94qqSHTMuxpxYjr23WjBDWL6p9gMs7aLj1dMGzTh2rEMtuhPTSQP",
  "key20": "scb6b4X4T59wk2bk3RWyibYBXxsVeacdt15ruVJF6xzKLRavBuF8YFuAHqfVhp4ubkcXDPZz6WqRh4pa2Bw5aHc",
  "key21": "e8wtvQdAwMwUradbmsoJsq1RryBNmrfFZ3B5A72HEY6HVvjEk4VAqShNuoE3Bcv1oR2n5VVn9RiBhfwC3UF1z3K",
  "key22": "2qHyM7EQByAj3Y7eyQrPuV7e4MHi1N7joVRcHbQ6MvVgxV3MaMnFGpq3x5EkSBbaJJkufRHN3VC4HGSPWNscNdgk",
  "key23": "67UHFtmrcCqsv5AT66vXfaJBs7ox4tY1oWMx7CXrrv54gvk98jHAtcdFoqfFgnoDC94ofLZj7WhXcbppyvnxS1pR",
  "key24": "475RQz6rTEfvbDw5kUhX9T6CC91TcwuiDMZ6gDMJeWFwQxKTbNnaPdyuMa8qrQ2ScDnRivxfDBPDEW13gf7n7RoK",
  "key25": "5WeVU5V4j5eTUkAADuC4Q5nPbds9fnCvPdg5k2hy4ZCa4J7QRVEbMBZqs5ZpBWhjGnKnVKXvkPKivvVnPpQ63hSj",
  "key26": "2L75y6uh2TB73oQDujo4HA3H6mRYLPA9ck9A7ommKSuBWt7Si5huSAtPHeu1ubqqNFQavo6R2SJ2ZUHJQdFqufUV",
  "key27": "3C46zMfWjMvmcJG9agpNxezaRBQi7m5As85SByBRxJFbFPKVEsxcQp9UnqihssByScBGR3gvx8MJyV1DiKi9v4du",
  "key28": "Ysq3K44c2dcFK87ZHi5SPAvcWEFM7QAw9oXxiVWHph5WQSocXD2uT5iwjtNwedKQ9T3GrY4bpC3LttY2a8434QW",
  "key29": "2iLLh7HqduGTGCYAWGnmJ5hGRHEExm8LHN5h2AzQNy2TS1QJEnJhGGndqkjhoLt7UDJw6H1wShhts6nzRFhFe53i",
  "key30": "4435HsVL5jtJEztpJn87g8VHYm1RNNMnEwV8RQNbDg3px95sRHH1MCnVSfLWtqX1cSk2TjRCd3jxMqY2UiD1s1az",
  "key31": "4PpxEvSAosy2HaQ3CA2mDmLdPfPDevQiC9wNPanm4zSgyR1YyjVeQTjVfpSAPJKeY7enNBdfRWKFqdEL1joaMCEv",
  "key32": "5qvgYX8vztEns3rQNd6qemuf4KjH9GwjRFXkCXKKRHA3a3jS7pdpmFdwMPQhwmgkvkDpquSVPJfH6q9aKtBwz2D5",
  "key33": "wPJ87hbjUyKTFG3UDKhvNiJ7ydWiLJpoCVqsRJuSiQYDxfdtoPqX8uaVLaWvA4KToqMDj4QQ2MoE1MqJLmBjxGd",
  "key34": "3JTDETHtR2jzg6CmgCqkNvTTjy5CVN7AcT7ippAnWPbNzmKEiWvSJy8xVLoXGGk4NfN97RXvBBzWqMLpyXiZqekE"
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
