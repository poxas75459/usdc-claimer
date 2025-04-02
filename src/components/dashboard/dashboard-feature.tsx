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
    "gEWvPrfDmGxcEFe6neeDjSVAeyv79zsnfu8Lh6wF9jwxrULWWAS4wAuL2fRejmRBbWEphfd7ta6AG9pRNPakerB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FLq63EtDP66MvrWf2qWUo8fqWkfZVGqMYMv9UoAxDrQw3McZVGnEhaAJ3nawjSfcNYPfr7bxaF47vjewcqgpvPo",
  "key1": "2ADyZ9WaGfwzMuB92ZpzpysuwN8jn9BtcgR9K1SywgSSbh2RiAvSef56SsisW2Yq2wKT4DtKNcyfnWQSDrP1CHAw",
  "key2": "5BZsPusRUn2VZxR51nRiCVc8Ko5AQPA9haUbsuFrNPQ4JEEqyDA9xAb29D4P6ZCXARAVwTvJAPetBWJMe17AFR7c",
  "key3": "64NpbX7ZM7eYnnXYdhPfHsLcpRhhHrw2D5gmTWemfgNFCmQ6tGYrWfaDHycqZqvMaudWGYeE59ttC2tHt3bdczVe",
  "key4": "3N7VM97zd9tHjRTx9Smf6t7uth4LPwYRgJ5LBU7uVH5KK6QM6ndGeqC1a8JTEHQibVJgr6Qp4oZCpR2bnsmQ1NCp",
  "key5": "2Duk86i1ztmMLfKvHBB2139iP586EgeHqb2edR8iDc4EomRBJedgoxN8Bfv8YoWjfpKidU79gupg8AtrQtpr49qW",
  "key6": "5KisFVmdZ77usbaVFW898o3S3kd7UGR7VhNCv8QjiwD1BunDFqai4fZGVB2WPc2R9kXsfHpU3HCSpi2Mh21htM3C",
  "key7": "4y7BBG6ud9m6m74gtquo8NqeDAj1MDNdEREWQGXBZfuw7zsogJd1mE5UyPDps6uRy22ahwj4bCpuFq5NVahXJsdU",
  "key8": "2Z3gYvJ9ouv8qGEa28vaNLeBN82YXDXeRt8npBwAndF7w8W3oYTcmjxgLy9mDBqpgNfeGVkfPAnbKr1J7Yh5ANZM",
  "key9": "3eUnoNSWZC8v3kHcM8P36M3HwT7Lp7hQRTQx8iBLciss4KPEr8hK1dByYeyQUCANZYAfdrmPDR7GFpE5QxUsxEyd",
  "key10": "4JhSK5o8mewxSTCYDyhZEFkPzYfsMmJY1XnoKfhQwyGzvqbEeP5uvAyChTUaoWFNuR1oDrv6JoHUtYEecpT7tEnm",
  "key11": "3inzHzV9RWJTsRpxr7nzYBoJ7xJmH81vNvxQGuytPmU6TZMDgwgD6JnZPMVZbJVG246kD8Gb2YMM3enAtv12V52h",
  "key12": "HzAaeupDjy4EYcPRrPDEA5HS2EMJ8UFkqgnMB4X9XrbAHrkFVN2oP9GWharyZC3qJgJkm1RFN3SSwjihn66towJ",
  "key13": "gAiaoEV7SLYAV7VWW41gh21gV3TseV3BhbJijKG113NuY8DcYSBcy7rYVtT8djGU2vFnWiVTBsime81MLumU4r5",
  "key14": "22HfZ8dvzCb6TTp9nDWzr2mF4J4P2ZSbrNA41Tq4UPCZdxZbELkyS1Sg6TMQvLukWQKLbYKCJFWP9vTtHfBFh4do",
  "key15": "37stSaLAYKp2RvNAZr6STbWHnLTHJjN91JXqFh4v4Hcff2T6W2G8GrXr61Sw2zVsZMC5m4fB64WF6Cx9uLEJCVoS",
  "key16": "4nCSuktJhBCQfW44mDsepnzukbZ238zjg3Y6fc84x1yFfKVjzhQbHeXuUuFvT7Q9Tabkhu2PUD2N9K9kRFNGjo96",
  "key17": "Yt6hd4ZSt3rmcQAuoJryiKg9i6qXP7GZu8njLeftSiC1CewyDxfrTvC9H9RfH53jwHN1V5rkFM7QMArcvV17u1z",
  "key18": "3ZfANemv8v83W4FVoRB8UHeoJNYqFconazAsEbkb5J6Z8vNgGcPddKUqbGVa2Bkogfcmhfc2sWHvJ9Qrvz1KJcQY",
  "key19": "43Fjz5CyGKMBjQo2QksPGaSx3h8E6Z9sWGtF5xJ8LniwQPXYwnvgnW9DH4aqYasJkX27kcged672aXcGugFSvs7Z",
  "key20": "59uYQ8Rn6MQB6EbuCT2ozsd7zVCgSTcKKZ2vRhJVfJEJx7TMiG4LCa1zwMGsT7v9aPp1i3iEP1YSwofmuxe5j6Jm",
  "key21": "4amkWcT3Z5BLe35Tn9NJB7JNZD8evSBovDKMsdY9AmFYkcfm2fMFfXrK3PRFDa7hvhGnNeV3aPH7VnvSvxcJzfhy",
  "key22": "5QsuJmpgZvTz678eTKWiJ4fEdoziUDmYexydhVAXvGw68DoPPGSqyWQUnAegkLd8sUes3CvTsZBfJPbLppFp8VkH",
  "key23": "43NDUoCjSUozK4xaZ4ZcCFLJZkhiAaTyZAjTdxFnoq7qCcF1vqyyjaE3W6zrjvaoRKC68Edte3Nx2sH6MsiB3D2W",
  "key24": "4TsEbKGPwrUFyi5cX6yywRxKqNtGpJpu7qhgtVPFPW1xAWcLCU8tt4o9QRXprhAZ19os6QFvQ54mRdfKGFwZ41SU",
  "key25": "5s8hahmtFFdpZaaMxufZLxQ6QYZCBRE2aH4mjfY5Cajc1DFsGaK7x6fFktz1isbpNnSsSxwK51fieP66NhFHZPpS",
  "key26": "3PbwDk9bc1ztGXR96NH6mQodnYmu6pHhNyqzfi3hBEmimE2vDntqEPQ4XHpwzA2HaR4GpvPHR6Wn7RyU6VgZ9Kzo",
  "key27": "4yN1EJ4p7HGfWtzcUmBr6xZZJFrLjy6cx3hcRNovJsD1ojeQNfUzWBoayW6vyZvSPYbjyyU3BUXWEkwxyneLZKDS",
  "key28": "3MMKp7sdhCkf4EEChxpBQUJUy4U2AK8xuXm1n97Mh1HGQb5ejgUb7QDM26MQmcjGqAYP8wXZn2G2FXUSSffoN98A",
  "key29": "5QXPvKTv5Kayrsak4Hn1RNCcjoN4z7CoRFXD7vwy7faiTkQK8iKPoGj8RWWBWkaPtr5T7THTAuFaek9mVL1vGoVo",
  "key30": "4VAojYD2FQhSz12QdoektDd7UvytqhE4RTyZxXH2MKq4D9hL8eS3hckPzRgrW8zoe8ahj6V2jeASdeXPzwgaMU1m",
  "key31": "4orGAmBHbvBHBihjoHSmXxnWtWcSxpwUMP7f5zZAqR2aksyyoXokRCPvxzFwdEm9SLrRCAWcV5giPdskLc4jpiU8",
  "key32": "2JpFjVsHw2pWBSHe1QwngSaRKtq3GdyQyrLwDnoDEFnxQCKdZ5ZrzzpqG3kJ4Axi2NGpsS5EeGxU6kAQC2JGyXtr",
  "key33": "2bRgPZDUKLmPRJv2Qy32UfEvibPRApxf8XFf6KrTVvCU9eZEuHLeWXFV3inaNVxaiUuBqXPWuctcsk4UrESCHZ8L",
  "key34": "5juocLvJEU7YypWHV3ZJ8v7MUDdQbRrxnDE7tk8JTRFphrcPfU1YRh4aG1CVCm2WC1N9guvBWUz1aRL1XLzAayhm",
  "key35": "3wKTsZyt3b45iQqn7Ax1UA7bdF7JoJm5fsQWN9bxuNeGRa5uPXB3zKajkM6RihDo3LxQfJQ1tvMoUhyo5wgSGGdd",
  "key36": "5J539NTgYyu5AydKyzh41W6L4b5TzqbQPHFpo61KFZEmaonMDc2vPLqszhopriP9XBVg7FEEboC6sajxfcRcpbt4",
  "key37": "3wcZE1jawyhLqPvVxSkke6gNFA6M6HFbq3fmxDsmdr9ZkcQNanvsY5V8fNvPp9b2rpj3VYsGTGbmiaUKhPv1zH7c",
  "key38": "28amsoA6F199bJQk9M2V7WCFcVU7tqgw8REdfkJZapWoYSu79WKP9VicEKU72QLoNrkazfj8rneCFiEqgiuhFt4w",
  "key39": "RfZXvWqRAPFZHzHSfUzXcikRxM16DiiZUxdevK6fbd3BTVKhbEbxqUsbUUcipsTwbeedMZ8uvM1yZXq69nYwGCH",
  "key40": "FjEjfQ6ogmJRB5Lv21mmwTKHYeYcn5YizJXM4t9hkp1DkKm2h4YgnW6wCUsKgcNfmSN9NF39wrP9Rqc11vKorkt",
  "key41": "2sGZzyRUqsUPQAsHegMJekFXASh1vG8CigN9v32AQX1Hsgqd47tvVechcB4nKwmvBsv9NTZwcNS2MtnwEFYyjonJ",
  "key42": "4DNBA5YwFD6672Nj8sNMJ5DMHRucei4MrYBp6t3fZ7XJibr7FgmJSHQXi5gmTdLrVLJ4nnHtRP3JF4jSvmnSbfTL",
  "key43": "4qoMASN2HqwqoPCDz2dQm6hLb8Cp63qH1tZEKNatHtnAY1GoS41npqZu4EzZ9kUjgNZZd2dhyzMtDFqz7Mxf9R6T",
  "key44": "2CNu587Emd64YVd5QmdP3ii4rdFHnaZTCpcv9Dr7xaWMtE1dpfTchjVqw2BoTx2oqTe1xQzvWq6eJMn5tKyZK8jo",
  "key45": "4j4HtfFA6tHJ2BAg7XLKTjFZ8ajiTF2oBgZKKmZ4CLB3bmwarSUEFnEUDNoaa9Xqi6sRZ5FLLBrAzSRwuRD8w5Kn",
  "key46": "4bLTAB2otScQn4qUFwv5ZPqP4DXvWrTnEKqxnbLUjXZJ54b7Y63QtsDAC8H2j2A8CV6buncpLQ5RjWUJNjttUh5D"
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
