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
    "4cJNedC6HkKU5oa1KP4gjAVM8iKzMKFJMqkNL38Xz8tL5ceuRcat9fHBo2cXh8XaaisXE5nC1LsGWzpFpHQgVTYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RnvjxFN6T9GNJczieUw3fNEYNgt3S3caQspuDS1mZWwxt5VMa37HMbZo2WRbNYzS7pVLTyMgyZLjAH9U1kViRPc",
  "key1": "4663iQr9t75p2c8uPsZTT2axtKLEQv78EEsQfuWKdmUFaHutoUzeEutRnky6MykLDCNCNAD6wEcnJiweTv4bbLxN",
  "key2": "4XqR5pJwQtnceqjvjEQxhKGsToKWw5jUU9hesWcgLoVEErhNsFp9xZjUkudVbrguVigaSpMAaABR6bVPfggpnGbr",
  "key3": "5d2aa5ooKBY5j4dfuSqyKEgjt2m5Y1dZA1GW2Lbdbt6zCycAReZFVSvCENXzvqTxdJvLZu2c25ehpcTf1vf53T4X",
  "key4": "3s6UAT2MQyideNBpfNG7wteYyW6WSCpGoFPXx3sa4oLXWzG26QZjJZLiYk5i28LMMtL6FNcauWgPBRhbCy5C7eJT",
  "key5": "2B1F8Eg5HQ3dsSpJRf52SbJHQeyNjaTMahweZS3NvfpbQNe85Nnr21yuNzB4KSxtLtGmHeTMjke9CiAwQ1gbHsnK",
  "key6": "2SbzZmk6oXD8cbavLB14rV72mv62LDmMnCFbPVXN1wBB8Y7b2QnM5DqfEuzxo87VNghZfti3q7tXo1bisa1K1C51",
  "key7": "3j8UaPav2CU3Xq8zH5JHAeUjMzvqLsb4DDkb5twYcvczPozxXa5Bm1wFwL4dcMpm1HZjTxqYFPa18nMnm1XU5ck5",
  "key8": "5fQb9KqczRCn64VgmzBTiwdWdEPHqd72LXwN3P58PnsKyQVYUQ9v1W24Gs5sdw3DmeycNNYiNBKi6egCvBMag3yV",
  "key9": "3e2CfjfxXVLx4xSYwcqFEpioqucXDQJJ52rVbD8F6wWS4GW3cAVm9PMzPcSDuKadF1bngCKh44yYD8jnRBsoRa8P",
  "key10": "5NC71CymUHF7MtYrUKL842g4aB3oC4wd3BKtA2psGDozuPz3b1GnBLaw8y7z1FE8xX17KdGRp2JDQrkKyDmg9AnQ",
  "key11": "53czf5DPa6EqwnixG2kEbFDTydjqp81Uw1mmJ5MHpmBMh43FG5pE1k7rG4MwTDtJGx5Ko6gwMyTkJRzciTHUkXiE",
  "key12": "3E5EGdhKu1JVRLXxb1mMGnj1Q6kjxiKni9WfV1KQMjSsfHVpwT2TSZHKaw4XgQbpCr1JSQkM7Wvw8SQbhmqrrWUk",
  "key13": "2rEkCmqqKXF5eYLcJY99WonewRFJTMLeLWRk7Q5DRHRCJbigAq5Fu39KmUTgbXzJNzZRDeMUYQeFQr73s3U5Ym4n",
  "key14": "jL5izvMHo6YUdSNXQwtn8c1azzkzuukkk1pqH4G7n2kGvCCtaTbiuVm3M51p5scZU2MiuPbLcoN8L5awa48P2Qb",
  "key15": "55i7LR4PJ9V3RY9KdkDU5KV6JGZM6arYLEJu4Nho5eAumRUp2SaFgAkZHp6NPXuu4WN6uLjThp1wNDBnh5FRz9zm",
  "key16": "pTe7fvUZpcVHhB2xGEwJQ8uaHCwRfdnC3q1b4wQRU13JTLyQBfx8cLtBdsHmy3YAH9kSATXpFWqVsNbH4sdXsfs",
  "key17": "5dTXFozN9t2QhurEWQfVBek9nMA3QdkGjNxguzpjQfMtBCCagHdkF6g3yYKEnaB43Ew4Kr78c6LhiWFMEtxsUJxv",
  "key18": "58kfBR8Dj5vduZNU9GKqYPUjVrBLYz9jqi4KyTC9jBdBqBHnMtLgRV4LTmhZkaTNgEC4SzVa3Yk5mwYXnCW1B9bm",
  "key19": "3vHG8Vsf6fU34SyDrEfV4qUsYnoH1mzGNqRArCt5PzDSDrv3WfdxMH74piUDzY8YW97QTyqF7AnoAEmjQMPdpipp",
  "key20": "YutwJPUiu6pZVggZf6rNUCu7B6iKPpkcZJgtnsZeuotBry35ASk58DyCMNvbnHSNUjjuHxxNgZMhnkR7LtCwooh",
  "key21": "5PdQ769AJJDeTArdqwHv3N2s9fuT3U8TyfoQ3hbkZ1aE7UVozjaoUTMwCKQpj51R7mXQ2T2WqAJrL6JsxKxbdnYW",
  "key22": "5SGmYjGrezEqYf29dwfhHd3KT9MZVFNPU4ziTMXxnJWEfyetEcjmZ26rDNquWoHoL5Lr3Pcf1hcHwaEukgUaLNVN",
  "key23": "4btGDRXkwCS8UD3L8S9iUgGb1HvFec37PRvZfkY5ummAXUDTt3JqdZPxv3jZnxn5vktpziovNd73JJh5edSK4yJZ",
  "key24": "3ciS9dify9Q6inN25TysqWL3gb647QcRxYvj27FAYdXjYXoT17SpqnfhbUGWKp2fkr8LD2cYvUm7C8rZR6zweTZh",
  "key25": "4j9bQTpd4GSVwZgiYhx4f8BHwHpmXaWdYoqMY5S9m7Wv3S52ci2W621MtvSZG9chmkQ8jQ7RgR2e51T8gyx1QnXf",
  "key26": "3tkjXiPrMef4wSUdVoB5bjze6tsnx2TGpyPVRdq9JpJJUbzH7KJEtoNqwUHhwwdcLqbApRib1pLotAsRoTFnSGei",
  "key27": "34RKnNxUbvPKygwrmuwgt5MnmyjuaunLghktmVgTKQrcmAmgopq5X9K3B5wgSx4gjwgScEb4SZENS26NTRzjzcSi",
  "key28": "2Y32MNY5tkDqmBzQA75dKsA9h7NFss5pR1fFB5aPbbmPhwi1m8paovscjRjADRABjc5LwmDXDuadekGMwM69G7de",
  "key29": "2R53JCviKN9zM2MHJPJ8pyatiTxoRZcCDbSxENLa8JS2SjePUHudUdiicyUiD5PVcbxcctSiUhoU4zikCHsfdKzm",
  "key30": "37VcZ9WqhwR7nCShceg6mDXuMtfdYj5AtPDZiDNPyrrJGrxQ9Q4xDxhkkzDQnnrxpEMZ9gf5rDrUiWjz5ozXcH8k",
  "key31": "4jsZre5TvTehXCUckJABzf35Yj2EYVAuziJJcGnz6d6iqwKhUhMu2KeSd2iCpRhXs9Z4GdeE8xzySUC8116Fu5Jh",
  "key32": "3FS9nxuQsUxSd6zzxABjT2RK9fZcJNjUsm7kuD7dGfiX1CbFZPA9eeCqTh3SdFz91pCt4bziR8iBpt71RUDBT2pm",
  "key33": "2vrSG9kkVZhJv51qoJzCNucjRHx2kKUDwnboyjJSh37ZUkDmU2M6MVJG5u2mQJnsVMRcnrXMJ2Rge3EYWPg2EmxY",
  "key34": "4NC6iAmyNiChsdXzk7LFUeySRjDT4hg6ooaJFXbxKcgtivrPU7MNApKpgF1VNyMhhkDfMEfPqvLNB1Rikn31QBgB",
  "key35": "oJmRfwaxp9Uw3i4bZrKa9fXVSpg5rG8N9Vj6syfFSxdxFqWBHv67sq5HoN2qJVjpNHWVtjTBuQAQDPnpxxfDCcy"
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
