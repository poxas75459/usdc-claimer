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
    "3aUTWwdsxy6ZZLXbJuSBoFY5u5RdVgT2EQBBShZ3jwPtqimjaJBvwaSQCncK743S7sAkj3oyV8jgqJJhVq7EP5N6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EjHKMd1ZgUZgEfmbekrsSAHXwNbAQzXrA31Wv1mBB4Pz5v9JMNohpXyHVDXThyngJBvB5zaJYkTrwrTD43U9D3k",
  "key1": "sHdd9wTAPm2YavHEhHcpJhgyZG4WUmqgC1JTcEmjqGuxNS6Uesc4u4zn1DJfS2Zoe1x4n1xyEaXZwgoEdEXucmP",
  "key2": "1YsPKfeh7UZKEczEjMfKSMSMA8JopfiFu81NidiFzSiCQYHHr1WAfHNn5HeLZDMXfebksGjGkYq9ossbVY3gUsC",
  "key3": "2z5BLsajTyyDamCJ5xMeQa2qbWmhgt53WVRZGJn4XMRKHZBqgm6aqFGDociJTK9nmmnQyf5J7E1ouqCoGjYNct3t",
  "key4": "HgTxiyKrTUq7yChhgUmeD4DrQMTwfY4t5SMXxDiJHEZqzhnnBP18FhBAnj3F2F79cyXAx9m99TkCKCfV9t3aShb",
  "key5": "3aYLc9rb8fg7xWPnhhcuKHyfRBxKkJPooZhqpoJ45R5DWUSEF7zftD1Psx7MYZT2YJBSHUFRVr4NQUaP5Ss843a5",
  "key6": "hXCK39kzuYwSXJwppf6DwAPQiWQbxAYaeHKkWzVfxMgRmQ9uNbfB4M8qbjy21QVmeZERoEFKhoznWwfirf6Fpnf",
  "key7": "u5ZQ5g3RRpQhLMKdLmHs2fZCoKFGkjCJobUzCKiWPUm2kWtDhviHmbdLanCZbGqjkM3LEZkYBxvQxQsCeSkQH3U",
  "key8": "x7Fu9RZ8LtHjbjHHfBVs6Dx1rhQPSNgqYHvGEc56QzFbR3VZB18u7Y5idk7RorhwNEFE8Wh9RBNWkZsv96M2HDd",
  "key9": "3ucJJFkF1TEhYc2tofa7xGfbhkRFEhqSg93tDo8WGtE1gwjUnxRCPZ8SrP3EuXKwzZoCMujfAm17ekH3UtNFDLbn",
  "key10": "61xQbyivRNSmigLKzEh71CjdTAfSUUanyWER5ahQKBxXEumVmVmRkywB8xkZKp2rh2NqXFmn2fD61BypViuV5kdw",
  "key11": "4iyjUQw7VG2CtSahizu1P6KVkUfa7JsmgFKHwXUU7r8N2AUFHo63GqP5PL4uW2YZ1PWwat2VCMVyDZbUSUua6jDn",
  "key12": "127gSnzoHbbMgLQsVfHVUN5QBSWZ93TCPJdLS5Ck4cHZzyC7M4SGJquVUuFezpqoJpd3qiguD8y7hXdfu4kFgNRD",
  "key13": "8M4jLpFgrDu1Z4yTjKdG8djJ8fbHjAjYPiZSATGaPdBWCnVtiNrFnRPLg8oCRLXWFJFzNgZkCLKpLYrCX7nDzD5",
  "key14": "62M2obqeJx1NNcXbF4jDNdcVE7UhGFQmgz5ZqKqvoSXotFqAmAYyBGe8Bb2qW42KyZ2BFMFSKmd7xeQJH8N3BHoY",
  "key15": "rjcdcHgR6oSgJF21DUr5mgMyZpJpGCuRtucpArQLX53docgp1Au4XFY2yd6hpAFQt9iJeXZrZzY9A5P5LXy8soe",
  "key16": "5k99SwcPsthf4XKQs4mgsiqFTJJKCZBvfiEDYEUPpaSZB4CXTUmRNP3jqVzjVA6mDYYhr4RAcSvkpCH1pjmRLshZ",
  "key17": "3nLpTv7ATdDXuL2VeVZPmKELk5Gyb4ab73y3BWCSHU3VLJ7EQB9h15eEpHZcuWAAJgKpkBoizyb3mN719t5PzE5G",
  "key18": "3Z8rjYYaE73cmFNy5PCHSsMiVMPmv2kiVwPC7b6TYwZW91LUeVvkVwmD5xTbBpDAmc6MehVPrhxJpT9CkeGgRsT1",
  "key19": "4j1zpTCDbtoQ2cH9YuYDqDpBpA1so4jJnb2x2PAsHSpZrUaHK7PZN5CY1mERmocWf725incNLT5Cu6GwxynY3jij",
  "key20": "p3D1zgsRAbZkCTEYTeqAuWiwkHr5AdyUBaLBrRSF2z23XKRETXPBWeibLfWxxgY73RVX7UBtofPd1Jv9XPKR2f7",
  "key21": "2F1Au6YE5JBZxF89SKbtm3zjsYR9rwyqqqfvGHaMf7w4HfaCff5M6LtB8bLvfT6bVz1nHAAeQjhaBnz6MY3LtqnM",
  "key22": "4nF69Xz7heQ1GBegdARoehAcNNNvCET7KNqjZ4dszDypgyH5KUMV1tLd2HQwrcxEhHT5dUd4WtKsjjqneKgSzdDZ",
  "key23": "57xqxkBcDpTbYvpjSTKe3Tvt7gYxxXcuaDP3f983o5MacvgzegZqi7UtFX2jgtvsinzMtx8GVFKMmvziLgMeRgP9",
  "key24": "VESe8AGskzw574HaXNLNM6ChPds81ehQxbTvfk5vSTdEd5U5Gph4xQq73eBv3mxY7JVD4d9fj5HcvDy2o4o4xji",
  "key25": "39yL7Npzxx8HNVniti2sswTud5GAceEd5azD7GcPMd9roLix1FbXT3jR1FRRKruyJpjm44aLA32QKXGnzhM2ZNKY",
  "key26": "4mf5UzkJjxtKRhAuXzvWE91niWtySKbzUVowcoZbb92BLYDuTnJPPqtiXBrWyQYppyne3RPrq7F9MzmV1nEahtGx",
  "key27": "4hA9gGKRX2iH6hzFW8YZhYknGpw7cR9r4FR7xtY94fjtbwu1t2oU78yWL5ng6Qay35RS8r32kY6X7ptj4wViyvKt",
  "key28": "4eimePtYaEpNznMtTV7bKhn9nTRpFE1rftzjcsGLtSWNApdjNEHhEytviByVWp3ATPiXHdfJYpwDUUPozGB4xJ5n",
  "key29": "4aFiJmQX7qh2B8aSzHdZbj57PpT6EGo7YP9Z3j6W4G89VwVDYZVYu6nXDFSRU1Y3A3UAHFMUjByyJoNfq5RfCXLE",
  "key30": "5J1J7Du1e4Ut4Csg9rirAdSB8UmXWZsDGcNU9g9hEuaeeAp6Xa2LTBNWC3nkoKogVQeHbzR3Gcepbqpiimfh33tn",
  "key31": "Ysp71xjGucQ2av6E1Y8uvJWgCDEGwtiWAXxo6TT3Mueggu51gXctReShG7WYciTREfMwEM6kDecheusE2gqRPB8",
  "key32": "4xdwrG4NvDet6aRkihH9aCDAeYVPp7JaGGCQRB5qmH2nr2K27LPdo1YQ4Dj6sfA4wSrHVqwX4YiavCzqNqMK36nT",
  "key33": "61mPSpUcxdXL1cHy7DpsvLHwVE7ZjkNubiZR6iYKNXp7GkkHYhv2UzVVfPYUFVj9Ke1eAiJEeQbR9qeD6Efr2Bwm",
  "key34": "5p3Wf1Gv45HwcD5iy5zjeWZH7ro9CBCNM9NKiSq2unCBqimA6ro8AjhtiN8JWaKT9XfSD7Vo8fFmrXrXShryQWAW",
  "key35": "5T3QZHd4kafpydKtVADUdaXwTES5hGX6BbSpKU5yuuNhkC2rumRmNK9UGZHJPwUaPUZBQG7xuQjCW2RkQzczMeDp"
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
