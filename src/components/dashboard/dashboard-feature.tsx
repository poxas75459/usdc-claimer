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
    "4tgB7kVTcnEx5Nwje6fRrrLp1NaLg4t8zE32bTEiQsmbhrukUU1m15iq66muxNcMqreMuRqij6k5d6Cfqaiarf5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EfMAFE6UrjhznoRfEifH5GM1WkwZHU6YVPveagTJiV7K21ypoqWHAbiXkNnpyWTCfzHYaBmzbFcKzM9mV9tTgwc",
  "key1": "3gRJAghvwGMuJ3KcqGSYvpHyUBGkgZ2932HRHFLPYMR8Vq9MdqdWnubP2wV9ATn4ZLV9b7EE7DbJmRf8CMWu73ET",
  "key2": "4uAYwVTmqzv1TYqKMBvj98NcLZPf74eeK3qic5K6gsUY8R3e2qwDpDb7u8TJNSDiPmY5JicVqJJBySetWzMW7uQU",
  "key3": "38iAceSfsPxSxetfmt6ozVUf3SXqgrHjigYpzJJRtdJspTSHrfS2fQ2Mw7FHh3Zsawr8sF2uELiWKQWtuim4x12Z",
  "key4": "JLdH57Wmj8WWjm7s1G6JpyMsyBmGBRDPfECHhP5k5x9H4FshNgdMAvY5kLVrq3r9ZSFS9A9a1xwT61hJjW3YY7F",
  "key5": "4hCL9DJBesG9gFFdKJv7knGWjEBPsQRJekpvcq6f4QZH9QgbcX8M9pxXK7FqCCck5rGZWtwx5UugoGm6SrKCAbpD",
  "key6": "2M3jXwAc4LqodWq37GYuZnxaA1bJAjBx626DLGyPM1irXaYaxGLBJ2TBCuFYL2m4bawVCLsHBYNY2zYGN2HK6mfq",
  "key7": "rchtCkAkmhPmevj3CALEWG2WTupHfNjAHrUERsRTd8zKvLKuMXJFJsc71BrV9XiqiHr9pVeZaYKynefkfnBufaC",
  "key8": "AQFeKFqc2kNdHhWvCfXMTjqHTXCAg4rSABeB7DkR2AFeCgj59epATFBVhm9wiPKpGnRTaAv7KtPg158UK1L5fNd",
  "key9": "53ome2ZTfHre8Xoo5WVuQeYtGQeursgTYu5DEqohS8KiLCRaRM6foTFwrVVEdMRJur8QAShcuVJ8eTPUhs7bDV7t",
  "key10": "3LRnHu3vRjGhXakLxdNX4G3aQRhmFgEiENfLekAeerASnJeqw4wHr34BTd8nfCHjgBA6S24QueBjuWmzEYs3NeED",
  "key11": "54vpD1B13JyDVBQFuyNr1bQV24Cuu72Q7GYqH5Hr8bR71B3yokqWbAyMLazDSCJ11tU4SmNpqiqQuAkHdWDDXTZV",
  "key12": "4nkbH6YMiScfuKMJbPK3QYBpriyD7n57iFBC596fDMx9zXP34NTu7D2BXS7zAmqTQskAz4mwT2ygJ1WupdqzjMa",
  "key13": "3d84Txn4hynfj1uKwK5uuskudm7Z3RJRsa9Yo83YQx4asiZ3oNiY27ajKYPvpCwG1aXDNngxk1ckbJv96fTRTVL5",
  "key14": "5dLk6crBNpGgvQUi3JWWD5EB4X9E1dK8asGyGUY28b2L2tkRiefnJ6E597Qn2jQVB9jXayXgUW836tknhjMB2zF",
  "key15": "3DYQazBXsrNnkN1mogAzTzBTuRod7DssVrj4P9UjV17SN4AnWjJjJXJDMb83HHRr5vnvSmPBsgZiyHYH5bZDZKKF",
  "key16": "45Vjnzk7wkKzeWS4p5diwdGag3hxXeDaxefUgUTL6QvbuanAM2CA2pBLykED45T6Cf72Xfi7g2R6wcev4ApkLnAT",
  "key17": "2A8URy1mWZ3DHhGiQB6J275q31AkVrhpH1zrTXA1EjdZujrmhfZyYkN4KuMFCRkqJ5tFKbLzeTNfzyujKfG92Q9W",
  "key18": "hzvZPsgoVrwYC2sArnU24iwniPTNM8Ur78FtCTWLqUtvDp3dY7Cnm9QJUUsHVpFz7HgGbhQi3PFGJtUJk9s3RVq",
  "key19": "4UTS3hpb3JkHjJWPj4kevGLvmRBj5ERUJNZVoL9bNzZqfTQ1Jz7xb36Xq3Qs55X36uAoyBE9wss96squ7DCXBDr3",
  "key20": "3GBCCJScYCjPA1Q95j5iqi4r5krYup6C2TUG5eMvoehSSDKH3QjfLhbLYdD9Mmy6JZRgzBVGep3gYmZmPXABogHr",
  "key21": "4Yk6mM7o5thQL4H2vHjzDirpJBuEXyZkhVfcHwzg9BJV3bQYFvVFpTRcq9QedTekTs6EqfSRhCYzUkw2VJuyiZxT",
  "key22": "4eQwM3BAPmGsYH7TTfeEBRaX4rMRhyx5A28N9tH9i3hK3UXsfVSYoUJiSqUg7EZfSUy6yKBHB6ehKatJoZEGgMpu",
  "key23": "2mNnq7Z7QubUgxQMynSVBEigqBSxAqBJAUxHvrjg24vAqSkXs7i8q5a56VkSd3KcaQqU3qeEoR33h28DMkgKt4oF",
  "key24": "3wfWCA2L6oyMkEiTwXdJ6ffcKK93BJBuZuwGtFbYr7Y1CwymtGAn1nhnRdZmGTB2zCAQZwQgymX76D52i2MXChdH",
  "key25": "4Ct5zSamS4mE6YX34M8rmv9rM9mxyF1rdty43FBBmezAQfswAMSs46B2u4E7X1EQKAoSSbdeaZJ3EbJXCTp6FojM",
  "key26": "2k46Synw4LvQ3qaZ8hUo4sCAtVy1bhA1pFxz673EHamTqAtGLuWdy7q51TkYTCQuu18V5bqzbBVEZJi5soXRYSxX",
  "key27": "46RVjYZqwYKydMrYaEN51bvoqipEgXtuMDvWREdFCJ3wpqv7T4mkpXzdpmKkTEqwfZ6a3TTutNobmn7uBdmXQ8WC",
  "key28": "5QFqxMUM867FKENHBgzgnPnDnvXNwMQ76rWb1WiKp9FtX8s6P86YeruTN8mtJhQi4pgECpZUQAiDkyvGC5aMaXFm",
  "key29": "5STzQ17bZbRvPgtyvqaEviQWeQRoho7TcwszA1YyxcQKaPNiZ86JtXTVeo4vMUxGMNbyHbZFkJYH5GepiDAcSkpe",
  "key30": "446wUwNUFC1HBq2zwzTiW31CPNGW8UTJxaArjooVTbHsaLZ9PWWSzdK9Jw43Th93EKcGvg6mZADcVzndr5c7X9Sj",
  "key31": "4DhEqK1BPjTYZ52u8D2sRE2Vt9rruJTBjBUptK2g9FVuCdTarBeGDUXARLSeKpNsBTRbgqvK8BdpW43yeLEfai2g",
  "key32": "3JSSs6oCT7B9TXHuWMQhfhjcLymvdfqiKVhQg9tsp84pR93veVqbLRbQjMtF8MkP7vytCVkmrxc4qfY8hxwhgM2q",
  "key33": "4m98bVLt4PiKfYrYWiomP97RwK5sCKpPxDUzApPdUgVEKDc5tkGXYoAXrQBHPdZ2ND8qMH54fmecdPhLLGAWTy9T",
  "key34": "4pPXWvkN1WKuqPmU8CDhzUwmccz1h7M58CJbVJjSQzXT349f9vFRgZcr5i854HPHw7f4z1M6ghBrWzmd9P3msHN3",
  "key35": "4FSEdM6qswXKFxR4viDZkXtXRgXzhvhi3ga8FTpviEXaPxUJDJekCBoARVuYbfSQUJBRT9AG2tPRJZYmp6pAetRS",
  "key36": "5i1ETSrKzVBY35PhWEG1N6Yhu36fPEBuc4jG7gE4cp7dad4iBwrthwrW1tmo4yzAu9HuFsaSKuPH6VTR8eE8TqL3",
  "key37": "qybJtm3fwtbAA5KsiJEGxRTY3LU6cdvFEy4ukzTMmM26bwsJ4tBzRUHwPgtzuinkAaP4uY9TTy8KjJ5Muo1tM1Q",
  "key38": "2MPdjNJw1G9sKLRgKMYk62cVjny78zSbLuzRS8M9fT5LwL7ARVDAJjahEjY5dJ7qDeFfE1C1d3T1N9V9S7prhSSe",
  "key39": "4VQE61hQxH74j2DALTzQNc69rCgEThWiCLnSepoJQtW4Kj3TyM5nWWJuL3M6xXo3QX8BSS69T4JNd4TaX7vZvaom",
  "key40": "4UVutAMosbmVesu3tVRVuBd2ayjiqz7bd49YaaGj4f8jouvR1CXhm5HmyfxeWHMf9UkUdDBr99TKqT9YzuDs9Qk8",
  "key41": "Y6EzWGQYQ3WZAhHiDmwJEd4oymkD4ixLbnAyBcR6kLrQ9FoKGqyyVftLBGKbfqs3KQsR1Rrk5JHxxr15hQKq1J2"
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
