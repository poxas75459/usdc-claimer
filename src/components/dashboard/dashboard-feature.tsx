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
    "1rP42RsV5JQVndeYYp9v1fGGYfCuRqy2r6vuegfu5oAguLH8WgtaNZNbaFPscY6V5nYf2v3P1QFK3t79Be5Hpwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27kCk4LCjHriAJnfyQZrhN2rpc1k1qyjQ3ucB6d1TgLhXjtNcRCqn2Ume5yFU1ayNSrRAQwi5gBksaoXfengZaNd",
  "key1": "5p4MjkzzHiv9gLytPoozkwuzHJCPBYLc1isftf1LworsXxWNejpyMCLxMnb9oe7pqnrEmT3ePLZXgQgnsdzFmcSY",
  "key2": "2BLcga7cUfbwvYWXbi2ZSGJNqTPZm1QmTELJieEk28dnZuCTWtZKeMPGThLhctKEbQ9n74f6eejLjap9ajbzACpW",
  "key3": "2hZVjSzDzJVipLsFP9RKq4FiSy2fCN5tKBz3dqxe6JieK4hwsQzBgT5w4xLFertf3EfCZL56j6YQqLdgsmZ8Cpr1",
  "key4": "3C8SQiVpQgLw8YRbeX1fj8n8V1GUDxSwaRYUrHi1ezNemVNujjrFRaFYF26udbsAFcqkdyTX7iCLoP4WUrffYV3C",
  "key5": "5M5pfsgficrJrid692WtaQrPDuEai2JWpsfqoWdNVNPHLWha7gxgt174Tta9qnwJrUFt5JH1qzhsbJgD9MPTqbKG",
  "key6": "3QngTCjMqvScLmoJXJkwUoa8moLPY1smZcFYmTzjcTPU3VQTfs7ersXUj9DbkYQuC8kr8HzynhLrGzS8wHw7R717",
  "key7": "5ZTA79C1YJQka1wFrmayiLcgCbP2UP9jsJ9CDKNC32dDLxvDU29LGezZbH4bCMTGsMohfJ1Dcd7MM7ixBU7qF8F9",
  "key8": "3o9GjGUYj9Qf72umAKbW2q4KMLvPbLgFaEzEc6uTnaGeaFjzGKe7HE6NbA8cWzgzHi1v4sByhbmrif9Lh9ZLz4Ge",
  "key9": "c42YzAaWd49MrdFkyYw74QdWGrorhHhE9GnsFNBFXFvoaS5mDwDiHGbXaHuBEnFD44z2wJG4xDgHePrpiWav2Cf",
  "key10": "2JeZtkQRqUfySgLAUaeU7S3Vjbhh8oLew1yBJqyeU66RDd5opeK7n6HTkf9y1BMUYHxRpHrQUi8Sw93PekB9uCbe",
  "key11": "xErJRSJJb5tiP1cCErHkDHzM3CAgZQauZiTrgdg5cjS43E1bNCbP1VNDNpJjsX4eYbctb1tK4CKHNAWr1hjHF4t",
  "key12": "5qsaYYyUEGjd9Q6GRg8LpmpCeUSnE2ohPX1WwkhF1g6Z2TPZtvWra9owoEWYKLkaoTrWsxAeXhMDUQvGcPsn4ni5",
  "key13": "5QSNCEAV3KxiJADpKFBPH9BQ5KQ6LnXfNQpPjtA2vW29KNPDDRamNooNTu4Qj24vTD6LkakWiGijf8PQsqea1VL7",
  "key14": "48jj8dEMAV6Uza6ADt42V5s9N3FS2hZbnXs343NJ5S9d9D7dfUEnJJGgkVtb57ii83ybZRNXFCGCD3MRqqReCw4F",
  "key15": "5KNP34WbvjVKsUKTfgfa7Zp5Y2bGFqVPk1HTyekqDocjmHUzgWNBxgjXWhPqDHQcPCzvxkkse4BznFVQvkpyV1gD",
  "key16": "2KX8KBCUUzq5WdU1BXkWXmgYN8nLAC1MGojmZ1BtJcLkvpN1TGbsCGcT1DVoY4X47zqfciQJWCNjpXy1JTAUXdmr",
  "key17": "emvPA9YhUk8rsRCCnFYzKYYdDdu4JM4tTeE1n2QUQzvYrA5s1H8qUY9GNguTygNJwacRroLCYJtfLvVv2Phj39U",
  "key18": "3iM41fXxH4gN1C1do2XeEK72ebUU6HANj9iZpwZ7qKYLAS6pWMz3L2wfifhBQ19Zdc9AHcjXfssEwEmPDk39EMCS",
  "key19": "2hqRzPwoX6a6wSqP7Y9cSV3NYqzfost1mV7nZc8dZcKTENSuXKb9wfYCXteg68SGQLd5pwkgvJNTNFmVKkYCy1dZ",
  "key20": "3fmsqFTu4XVp71pY7y9Z5FHyEv2SP5jDSN3qLsR6KDcqwD1ArRAB8kfBF6aj4PFaAf1HcDdc8v9CTKoGZDoKqVdF",
  "key21": "2MhcwtNmhE54ABWREuB7CCwn5UTph1kuodu5u9kFzx5a1YDuwiScwuxvAu3bNA77Zn5SoWVHaMX9sqwLLsnxZYrC",
  "key22": "5kDosF5PUdieaDGayDtgbWjyYR1wkKe9RrrMXLmH8tnRrRFG8ZJ97NmrSfVhC6TG6gMKwCHkj4m6xsU66Nr5AeC",
  "key23": "5Dsy44X2YTuiaQ22Ec8bZCeK16CvRC7JTD28myWeXL14s8x9GhSiQmNTTf9aqoE9Ce7PYHLVmzkTaPakMotvyXpo",
  "key24": "4TrHjALKZRFW6rdpuUHMGtVU8VeTVmyaTwopoUsFKs7yHMnrNCLfJGDpikK7B93cVeJxg5YXie5YJhXzGB2oVMF1",
  "key25": "48xEgYEHus64hLVhHX61Geue1atq2Xf9wo4ksDdwuFWNY8pirkGf3GXrgUapmxFY7FTsZAWkVmFA4mK48xfFZtGj",
  "key26": "t5frS1xUcVHJ2wuGKTYTBnFVkj2f39SGkAzfMTQWSt8FKfrAAimDANSqjYhejJoda5G1hExqovWr295bLZj1QFL",
  "key27": "4WjiJt5VepM4AydRkXPfPGWqbvD9rVY1DyR7Z6pe5wrjcn6K9XxvLQm8SyKGq3oNaGB7KY8anS8DTAburNmtT3M6",
  "key28": "kLtHkyxdBNPkjbiC8zKfJgHspZ4KPruBcd2ixdP1vGSHRn6VNYCu3akGxwE63nVcu6sV2epg4TKEMSSuPtbrFcW",
  "key29": "AaGHEJuq6Ha1vYd6HPHtD27FMDuThXLxLG7mBdwv34ErUroD8Rpv722XooGvq84246aK5rqzBy4a2CrrBoMZw8Z",
  "key30": "izLzzyUxZsThikL2oq4Auj78FaAzy9VumcFetuco2PZSorDRs1LhewJZRvJTZ5e3B5bm4nggcH18B174uStb8dF",
  "key31": "L4Qh5fwKLXHuWNKsPYJaTDiVsGN9Jb4hDo7kRQ5BvvT1nxb5yQ9zA9VvMVHWryJWtXpiABdBXRadFSUanLFRF3T",
  "key32": "3Q9S1vmnMbr6aDKDtg9x5u2XZfwVreqJuhq3t65kvDGq7brtk25ZQHpszUjQzMF1JRxmJGxr6ryvL4Lfaawcqa9N",
  "key33": "2gTYqKgK5tcKXzH3ThBH8VJjvPuWy1kQN97n6dHJfXUh3Ct3fa8pVU4B3Qo3MBU8p4NDCMAbmBS8iiPzbytTxxQR",
  "key34": "2BqCnQnDXQpQdFKrKq5LMVxR7TvoVj71Aqk8MqucwwirAfaTgDLnFD4H9rdF7akrAUyEKHBzfswzLNtqZnzZ3xos",
  "key35": "22W1FLcuAb93FeERuSqD8K9PZ9iS2c8xEBJHXJckXHyPAmW3eMP4jmWQVnoxvDQNXQL6CT3idMif29brxTKpeSKo",
  "key36": "67dCkzs4CmcsL2TWpK2hhyj44Zhh41KVL6ZJj8rFW74nz1trsroG34rQMF4KV5yMsQ3y3WjTbKXCbcaCYrNqpUzQ",
  "key37": "u3SGr3LPhejyMd1NEwsR2MMvM8GetJnrrDD8pQ7qnkG2L1YgdGUrQjVG2FoKF47pidVjwaGwLeqExWQYaFR2KYb",
  "key38": "5vic3MDERMnwypgBGr25seX25eQy53bLg7d2VuJDgm5VUaLAtdUHMbTiFEJLwFJ3iJaaB2HiFopitexzirpeFxaB",
  "key39": "4VFYJXGDWQwEoGR9RwFmCVW56jCZQ8G8voMrqqGPjya946aeew7wiR5og9LHgatmAupa2mcwmaJm7BUHDXKogbof",
  "key40": "5chWbEQYSseSamBhWXF7wcfF2oBMLNyCZDthwZiwtj3UdpBHCtfwVkQPcAaLf67gv2vW7uYu3kJnoW5dZFE89Kfp",
  "key41": "oJcptddZWLpCoQrGTk6t5Vpfho3dM9Z6QyAYCtZBdwmHQRyYhk6i2uQSdYACiEt4H83WamWB4W3qGUekngKZrE9",
  "key42": "3aqK4qgLrCsheWyzV9arSswH2c779UEQFS7Ci3RqqUd7Db8FzN2xScgzJTsCQHEbh3BdpYwsjtPe8dPYVCRcSjV3",
  "key43": "5uYm5SaeZTy9LBdJGxkyH479V8Yerv1wCZTxPmFfdPYq75mgc1W7Z9xGiLj8Fv2SAUf5wVE5oky8UQ25EW2QoYjZ",
  "key44": "4XttNidR1C3KZ8R8KT7FaoDDb9QgJsKKtEQigQ2RRVgz6VCBU3vXEDumZJH13YkyHH56SGC4CWpxjMBfmuwCtKmK",
  "key45": "5n6XR1ufCHpC9rCcRnpjSvqEGr8ucCptgr1a5u56fCNKyyaczVCvVmTo6FCGDqs1Rdwnmj3Wx1jzCY1Rf5sXEHe",
  "key46": "5bKhaf1m1bRqKsGGgcNsYr9ZV2rokcsDdBKkWGmsvTaAQUr2eveyehyfbA4fMxVPccygLSBVuzNZiEwabXeRhv3v",
  "key47": "5fmFcwaawfY2GNZysgBZDWJyU5NKatWhhnMKPNG3rBGpCq9ZNiMvt4nxwTHRSrpFXVpXrScEkw2LhyKKGmL2h8oG",
  "key48": "4VT5R8exS8qWZqtdYKScyQ7xJo8Yp6nHCpeNQG6KJpzqnok6YJYBWpz7iujXWqg8PCom92ZxcbWXMrP2VXURPbHV"
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
