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
    "2RhAzBAqSvWRRpcEeSfDXgKuZkGE8qx2e4cLC8gcXGb6w94WCuSmwdenxJNVqKg2GtZcUsFwZT5sEXsLfxaF2UfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21UampMh2NwLkM1AmLfRYUkG3Uwm3onY9UPAg9y6NnXseFPiVd1xaVEfWf2SxvDSKxJXdNDqoUGyGaZj69bR7fUC",
  "key1": "ppwiVkjvFC4wZX2U6xHcTFDZn6Jz6cLYSNSkYGqBKxVs17MVFMTpKmtWjZyPSz9PQRqj41w1t4b7pbGV3sWpQSq",
  "key2": "3pHTTqXB5ve6Xa1ubKTH1vHTUPFA48Mkrf9Ub4SzRgwy9Y1ncCi7jFZ869LApWwdoTm3qUj5rqBW4MWLvA75PzkC",
  "key3": "3WVEKLvwG7VwwywYMPJfqeAZ4sDHxk8EkeKe7dTQriHYVwQobp4UdYGdMoG4HphmgL3FsK3cFp5beSt4VBo2S2Yc",
  "key4": "2RnRqhqfheyP4woGk81JQSUVR4iseiKjzNahfMyo9BHrAKgjVdnfdcJ9sgFdK9TYvUnXBhQtWHTaxqeAA9JgQoJ2",
  "key5": "Lrmm2j3KqiNRoPmqE5ZedH9Y6QNjyXBxwzuncqzrJxsV9p54p9Y8zVmk3ekgZxtburRJoWmRbLMsug43HGhSUYd",
  "key6": "2Gqa9CUq5PkptzdDQdrUWqb7FQzpqgp4tzJXDHTw34LxQc6eFWHwjsQLPp9aQj31pz6zjeFZjuD58X9AZX3y8Peg",
  "key7": "476cgSL9WMJNTaaPTFkt7TWPEeNx5r6jMtfx3N3qEgGHL8WiyDf6qnY7uuu4MmXfXLcXyNpobRC4ic8JTjF13tDA",
  "key8": "64CyYvZQC4PxT14YbUDK1ejQ7xN1oALX3zpBUDGaNUDVycVFomLsdmvymtKzLkLwVkVxDhFbFp7v84EdzyoY57SH",
  "key9": "3yWzeNpawzypTmPwRwZu7X9Tb1bVU3iEd4tSyifxuDuQ4eAMV9QMuPDu1ZotmLpfmWV5X9zd2it8eH7WGFCsjXV8",
  "key10": "3g1uYSBUFruLizqKUTD2SGX5Fhi4YZuwxYoMqDUW3ceJrdy9Se84MYSw8quxcAsPLfgEiCVWa2pKHhztCFz7yVH3",
  "key11": "48B5coEAUC9b9Xd22xceU1rdnrP54ewP25kwbc7n5fahfdcWuUeQiswQxqkaKbZPTm9T1jWc9fPStQ86xEgLcwZx",
  "key12": "26w4XgCfkuLq21w1w59rtc3e3xiKAGhM4HHbhWfvWq78J4X1ACgAzNaWcMvvfL3yQED5vfNWyHDbFVdtqabQYTmv",
  "key13": "5x5WES7ETnwhY3hCEyQWA6Mxvecte8ENikMgMR71popiDt1VAhsD5TKrGeJF5yqBvgHFHmR7FkGDpPgBgLKAP7E4",
  "key14": "2ACm8UKoSeyWCUbrntLVirc2dRr48TNr4CdyvboeeT8VdQhB4tDsmLRUC7n3Bp98KyyDKub3MFu1wj5wuJbkEKTU",
  "key15": "4A9w91bzUyiqJXYWbewW45NLvGXMdJ5UbqVe9oBUVMiNmF2zxdzw7vuUAqncwwXa5C9zmYBeYWY1pPzPkN9LdSku",
  "key16": "5FiS9irPNdpu9vo5mmwZWbkZvZn6eHVFJj4Vf62QML8SShfY4SgiAj2etvMwoGKfXsLWwW1qzt7puz2b3z8RvXF7",
  "key17": "3JkRLxLYfeN3it5GFumgfuACJBD8FjWK5P1gFDYB4KLaffAepfznFt34uRgfTsoXAJ7eCM5rkuatB41jptVeuuPa",
  "key18": "2Ebc6WLcCpDiULjnT4UpDeD7XnQtkq436NwnfxYLqyehUgrnhctzsjW8ZyZ9b77pdSMRp5xNeAMyx51KQNbqm5Dm",
  "key19": "56SwMzuG1YymZhn5WHhyZTkMwsB8xmJb7xPahRcrXLR216xoKdxsPTSaPNbdNx5UwuENtWRj2bd8QNG28mGoMh2A",
  "key20": "39nJono7M23Jk1GRkGkBreZy1MtTn7QSYgGvFGbu6AQTFTZm8Bduu53UNgzrTjtmB692q6jioeSQbWf6mSWLFEwR",
  "key21": "2yy9Y5MFaQ1ChgJaW3a9JK88ejVJbwMGP1eZA7AyB5MqGTYZmmhNZHfSKF25uFRNpAmwR3VgwmEb9GkXW2gYDETo",
  "key22": "2ZRT1gA3pf7cprE5QJx5cEEYPWjyzhyzcwd4WeGKbKA2sS3oxBi6B2u3U8KJ6z6wPcjYVQqU6hh4wsgPK4BsraKX",
  "key23": "4MCWVtdEd3NBy7FAMYFdjWYx23e8RG89qQWJ1W1eSff9PouLhSsWzZYtKWPheBCihBC1Nwd9tR1rz3PbHhMpEnky",
  "key24": "2V1zsn2ZZa79bp4WWfA5Hy61GMmhi6mzr1GPgoCRWLooU6kbHmcKmBXGqD27xChD12dyCsYXWGEWyp9tbtxyvczj",
  "key25": "4hP9dzZY6AHyra9Hhx5iBwfw63inLs4jFmr33AaGGu95Z4uhm3GRYVjZoKdpB39GUv8EnHrwn7eQRQwe1USKwPmQ",
  "key26": "4Q1CRnmsmatTA8APWYjvErXceNL1EuxCKYte2ipFBFPaa5md3DMgZ5HUjy5mjhhmHcyLsed1dWUFXMco7JqRAHmw",
  "key27": "4G6fYhESqeFJ4X3ej8nhT9Ann7mEu6UjYEVXfAEQSfNjVoNYh9HHmzSXP9ABFsJ3XZ1UUGoYcsQMANZNngPVccfX",
  "key28": "52Z9JEtJcrnBbbXXU5T6AQqfLqHWd9SktN5XNJiAm52RmvoDxQ8J2p5Aejp4vNiKxAa1eXJVJydJCTQwCSMoAx7D",
  "key29": "h8Mvurt5UKguuQD9vJ8NYfWfZuvwUFV3nGJtTkPEknknRN6H3GAaPzNZ24niwrerYeWwzsQHjAwHqXeeSBMy7xB",
  "key30": "2kSNhpAg1QfeAsw8jyUfSFpFjvU6wh4aMgF9vfH6XHxP4fqE1vu34KCVnCvUHYy53N1PMz5ArNBPmdoYH6ZRZFZA",
  "key31": "4RbzQeAQ2Y78KAg56pucXiSFevktximtm81F98293TX7c98t6T7zL5v1o5Pr1qqgix4GC4mL27LSAkyzRgaxfv9o",
  "key32": "D9RLhrypgYTcnPQZgTMe47FW1ZR8PSKxyVU1ziqo8PSh5kdoobrTa9nGEudctjD7oE69rSREvPGiEx9NqeUYBct",
  "key33": "54vGjE2xsRmV5VouqvXz5d19e9nk9i42gRL4YaNMHCGnZFUGdjB5uyEib5f2mNP1uzZJ3dxcesUnLxdJAxMKvwFm",
  "key34": "5P9ah14FauNtnKik46xQQKPwC6MCWjqBE6wriy1FKWfW6XWG7fZjKWCM7ANXCNMDVtZfYASuMv7fnFz9CxjwXt7X",
  "key35": "4ENBB2RZfrDt9vCoNA7fBXRHZbfZa8NvZLRdK2QfyjP26u33H43Ujqv4RHxS8BwhcsmS8BjaaLScMjm7YQdrGYvo",
  "key36": "5fpNEu882BLEkHWBeiiX6d8vGBJUrBBd7mgR4kdVAYdCyYCEXyWbeUJRbUdXMJsf3h3sTbU1LbPGWTLti6dmrJvX",
  "key37": "5akLBTPYhsBDpgNCme65sswgVBqDFtYHLYvNEakkFJsftsBTEWMp6MUjap27voAbwNcWeAPAyArSPZ9ShLP4cv2b",
  "key38": "U4r6MjHFBV8Ax4FWYrR1tT2gsX9Pktdb6JanVHpTcohY1XnvGXiwnyxX98fsxg3v5LyKEzpKXZwVG4Uo5ReANUH",
  "key39": "2coss5awDHHZsYdgSB6wDj4FphKFFei4oYVEu4tpRczV86hCujeFXkVFXcq58fctgczEAfXiyNHxdy6sEMcZpUAs",
  "key40": "5SZyRgQ9pG4VQkbSib78o38t3t74sNEyYfyjfxDKu8epxYovvDoPaNVwuD2en6ZeADWKJZ5TcL3VTiWt3ZAeEtg",
  "key41": "5FmT8uDRBBHS7ss9feoRsB2quYckQRqBrRf3ANNW3cVEysKATgkTEJf8SmNeDijevDjVkq8NXuhhPoxuFbjs7yQW",
  "key42": "4A9quF2GyYsixi74W9LCwxXiKHPa9C6jcNUZxjwxn6iAd6ZB5m1qES5DKXGXtKp4CzRNzT65UVCvyWxu3abi3ovM",
  "key43": "2NGGbEDvjC8jZZrBmApT4GmSj7hvUUxc7qf7aeLLU2FmBV8Ku8apP1xnaY5cvTKSK3NhyA4G8Ys3UbsjtbZUsFaS",
  "key44": "vrF9DsCtRYdSB4FCqaUeBFMV7C58V9yPpWWoJR85mZgSMQHdP49dnYoV6fd9vQnXh9BnRWBMRb4uDgE41K8gwcL",
  "key45": "35LhQUqZioUzucADXR4TjDbz18nmcFWNfExnLUQdEi9netdNzJQ6qedhdmj5eRMX5M8d6NBm9daP1miFM9TNyyPc",
  "key46": "idvdRYmoMUA3qFFvjpDGGRPukbbyq19NpEoAoZQVbQ5p1uunYC9YrgDRnhmhE228dhNM88hJQRzDJ4mbDDS6rSf"
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
