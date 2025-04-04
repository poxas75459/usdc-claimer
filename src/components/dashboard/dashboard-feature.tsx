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
    "3Zzqm2F7nrN1KYm9T9AGuP92sXUr3Eug1ruQXgFhR76R4E5g3v8Py6vXc7b9K3mq98R6ckApyi7Ku6pZ9onzDaT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ko4Ljw5LgPqhUbMkqHA7BFEJk8mm9EaEJqT3ndH3nSVQeJ2riVdMq76rR8376rutd2Nr5dZnioigXDLxwuutmc2",
  "key1": "4HDvGzxrE3EjHGVPcao8XyFmCo2P5RLVSEC3QbA4AjWbKsJeMnccsFvbCmocEaVmkm7bphsd6SduHYRyiPjuPV4D",
  "key2": "59YwbzZ629LQZuQkX5PCZaivRZZduEEtaMGZTLYvdHi2rqH2zJr66xthNoGHdwrUEMTdvEDyGorAtDEWKEKeshj3",
  "key3": "5Q9cFz9TbDUDRLYiyUNuRLQ46B1y6mNcTivckxfwhHg29LgoqhKXacUZG9NweDS9S7qS69bNCS7MPQuMML7embxa",
  "key4": "5kJHUYK2HCWzq8zrRKzuYCV8M19h2NXK6tuM2eeXUtBE4vLe7qeMX3K8KVTFHm6dsEn5S6Wa1RLAfEVaZHNs6KXe",
  "key5": "2yDp5zTbUoE77sdXkguHFrPgHHXwcr29QMH2qWE5bpGDa737TJU2GiySX2qgtZaff9eik3g7Ub6Quy8danUgyeGb",
  "key6": "hbSvqQXf3UJM91Ypomt8e4qPGjsbJRAeY84sdpTpnwwbTLpBW8cvK1mtY6nGf2cjinPcrVhmMLoAmcVu6j2buHU",
  "key7": "4Sq9mcJ25YJWjZH3S3gGoY4UvtxqfhpTLADwFqpivu2QrhJXpvvjmFs5XobggZwCbD1MzhZNKZF7Ghej9FdXnXqc",
  "key8": "3qWMhhWEeF1NniuohwJc36LVBXSq5n4oSdQCBvWMWzWoQLsakv4iReawpB7yFfd52ssJMhKGTETTC59nz7eviaKP",
  "key9": "Dqn8bgmMWNfVa7JCz6PL81wBZycTgurKQuZ2MK2ovr5SQdMCWwa1PrRNrZJecG2BnW7XECRhN6cek1fizQqmGwi",
  "key10": "2ymX9srz1gdWT4VDkxkXCsnM7P482nzSTLf4sg3JhQahrn2cr6T1xGNfo9bnya2GNn5kXZS1kmCof7kq9PdZPwN",
  "key11": "2jrRP6HJqLWRVdkq5ZkDVGLu4JAf4knbXLUjzSdgQBfRHMnF7hHzTAsHZqSHaMXSZqarpDmWCrePdvmYhCADyUKT",
  "key12": "4aymoQq1WhBTNBd6955sDzRrksJfs5uRgAzLCBQef9PdzE4Xan1cNtRL2WpxSXrZJ1QvZEA4tMghxTCwHdiNEYTB",
  "key13": "wX1bk46rqquX4sT2gvfUFt77S8JtPZbXiRUDRpz7wgPj4TpCxYxockgC13avqxdB5dqfqiyf6GUQ5QMALCYvdYC",
  "key14": "3okPCAnWtYYNRw9M5HntLqwqewe8i4TDvi8hDmTi3V9eN4oS8nLfG3opvpAQVHfAFVcTajjHF4EGbQ3JfFpThNPt",
  "key15": "b6oE2rxAZD5UG839pPB5U88ntTioEMbQLmTCUzCGRFXBpmna3Tmy4FbvNoAMd1cnin2nKCGjmhoD2FCEmZbAC1V",
  "key16": "N1rhuZcLRQXSWnpn6w3mvKRkgNe58A8ds2QR7U474JNtjz9zqp1vSKuAuJEJKZhcactNA4DDF8eVf1x4J5JURwM",
  "key17": "2pXhdkbd6t9XCa9oBx8D3mxpExH41iuUuw6UQkpYB151TKxtext6zMhGfUqP1GjcUg9dBxXdFNJNnzUvos9H1RZA",
  "key18": "3Qdpdfx5MPzREJHSikPzcZLUojYpQDsuJXz41V7Wp3i2g9MJrAtbirU9uMEThEcsonwLz4VeoDkGfXwJ1ZEeo6q3",
  "key19": "42h76DsDH8XZXhmR4mBCH5LckKW9YGJmNuWAHFjyyU7GpQMSKiLNzF9QSDtc1sbdAxqecVXJAFEgYsu8uiyh8gTE",
  "key20": "4RGyVo48fhNWYAP9FkzuJKccRNrnzZnTdnDcpoutzjzt1XeNfSPyCGsyAzzuEeuk9fVMbjnukK94xicaUZ2cTs4E",
  "key21": "4kFRn3NoqREmaiw2DeE1UKuQE5iX5tgATUQ1F4DxUF5skHYc6EJYbASCVBzVdo8tco9Vu9cDQh7Btj1k7eSfGZii",
  "key22": "VePWaaAqth2P6guhF9oUKkXMLXDCzG3iTZTjNBeDvoVoiPc6LF9VuipzTvovUWRQGvnkJERBTZZFViT9Sx6FhQq",
  "key23": "3chpSQjjNpd7iGBdHTU8CqpHcd3aAtYHPogJrnWQuaaQBA1edqgjxbVARcijMdADbatCEsSK3HWaDuERRd6ntAid",
  "key24": "54xvALGUBvbU5a5DQnzCgZ7qfMpLcSaut4QX3qTtjNzrzcpCpMywtokukoFmd7sCm4PGtwnATzYTCLv1TymKwtf9",
  "key25": "2HhuXK7v6YAwS5PEUwwCce4yYFiStDTPJruPAw78uBxg1GSY8rtCmXz6VtvsMjm8V7P2asAsaCQQVVFeedadRyiE",
  "key26": "2NYAqUmNUbtLxnBe4ybtqKkSw6LRXt64TyW5wy6eLQ6Uo12f7zFxQjhnH3Z4mUp7SV7G5bmAwpUDcHP5Mh1UDoo",
  "key27": "35isghtf75Nved8JmwtbVdvCZ1EPpomrEf9QdFcnVhcP81goPxccpfJ6fVMp8xeHJrQf5QgRk7dJY6xHBGBKwvP1",
  "key28": "4yRRuQUE2BH7tYMbswMmoXkwHKZsdyr4j4rm96fXmPWyB5cbNd9ZJ9wYykDnMtyPa3F91kyySnpjTDkaKyHnf4yH",
  "key29": "2EHjb576z8HedXEa9jLhqkt24atPLsaJJJzN3gmNdKbMSJ73LMj17yekczoeKQpNcvaZNgf8VW3L2gujoYMcKUHQ",
  "key30": "4S25gwFxkARWUMQ6PKSohcRySGxUd2YCv54kFprCz6zDJZjLSwCKG39XEzwFomuSggNzmpysxVL1L1qaX8RjxqiK",
  "key31": "2yqXs58Ro5YX3EAg9fqyocA3EMertnn32v3CNsipuEmYsYCvUcdrbPxsJfTKFFKaQtZUJoz7AqHkw2TytV7FvVUx",
  "key32": "2NgC6ayFkSe6xem7BDHg8ycjerMaHCQQUjYrF8XNUa41xPnbb2F23pR9jfkoADyCVvb9bPgDjVzU7CiPRoe8FSm1"
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
