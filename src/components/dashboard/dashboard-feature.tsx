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
    "2YEsxbFnuy5RBSosS7wF9et9eUpZ4aFioxsig8vDB1CRJuYZvCZtUSg155RwjdqosbZ7UVKkWBuBRnEdyk8so6PP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCtBCPRYBKVZZ2fSA6o4iDEUfTq45dMckga7miWvuCPJeBD86nHpvsKTuafEdU7xqSGbmGQ5yMa7w4XM4u8gtdf",
  "key1": "4VZLkkh4JSDAnzDzhpb8H2TeK75iZsmT5BWDscVkgpNLT64LCUFeyFKdi1XsHZRgBUij7cfR1fEEvF5hkTZC5MB8",
  "key2": "4YUgfvufAzatbjyoF5VaXvffpwdWDcigkaEs6rZv4zzVnLeWD1nJkEQMCPDiyWBt9NUVKfyKoZ9xh7U5Fj9imU7f",
  "key3": "UMKEb2ebjqsaVJY3XKz3sd9QU6SDdnpe332dPUfRVebEER2xAEqiBhyEMxXvmGHZSDNSQzLifs4dLYj2y5azb3n",
  "key4": "dUuKS7f7Xy5WGuaqPmkRuWf9C2euMBv3jS29FaXY38CaTtTVA6nSNE48pqyXgETCVmeDWRptcTMDgxAgjo18yPB",
  "key5": "5Pzt46vmrsertg6kEsjtw8U5wGptRA81btbpzRqUdvb3BWKpsyrZaesSmeDPCmui931ymU3kbGSCnmQSgVnuiVPr",
  "key6": "3e2jd422wjmuYBq3yE1Pyj5j2S5cv1Dw6iUjLqtxd5xE2MwjA3QKQGRpk3icBq8v76ZfbfZF5DAFmcCsfWeP4Rkt",
  "key7": "3f547zYS7b7ucZDdRCJpW4sxvg1R2NtyuY5GkcjLEghKN5gdo8TXiR9f95dnio4G29k4AxjrnTB5VQMc2x82NScn",
  "key8": "tUwj8zCB8EhFMfRtWS7qb8m2FUdb3g7sA4Wmv4D5BXCZhRwqGTR2vqXo2j9kdZRyAX9Y29JACciHBvhHdeBk3iB",
  "key9": "3JYFLuuR4qXo2P7vvYJyNfyygSHHcUAp2thAdQFZHyV77JMbcnBoCRPcYisjVacJkuVQPeNm1EqxEJQ7wSWdfpGU",
  "key10": "AJzC2xDzDmQv3EuxN5BpVSonW8omYgEVL2ToLGuyKP9tUqn1LrQPQRxVN3fCthJLGqbUnfPTYXUEhcRpDwkCsdp",
  "key11": "665r4Nn59otcajZWtjCemE9L51nQABbpmNjnsbkizM6PLtj4YBgp35oeJX6pYqqwqG6vi5XBrrPP3xrfehADp29E",
  "key12": "4JsfRTFh4MiwDwVY6g8s47o3eKCXgG8zJNuDXXX1xsjkDrZqowgPHHTksgBvJ1HHVScR7Z6wVSEm2xUNMHNCkDFh",
  "key13": "2zfL2JuV3MzkW1CQUe3v9Uy1Wg7HJRwF1cUKGicwqYdswuiU7bjqJVpYhCng9vgfuHbjbCATbLFzv4hJaKRxYtJd",
  "key14": "4LuJvggtJG8xY5wYzovGLeMG9n8nr2YQq7yQmof5ff5NCa1E2XJjmEhRtgGqNfoaKU1xAudLVwANwpR28LL6QZfz",
  "key15": "5UVBQCHfqFpSHDcRmkdLkxpHzV9Hg4XegaJhG42HNoNw3hsQbokPnEsKtucw3TSqmzHtz5s5TSYFBTDGHVdiNh9F",
  "key16": "4FqPErYgXD4DTR4Kv523A89ZTTK2pdPe4oVDGinJsyHuUSDKfL9LCrBg2T8RGTULk74fNqa5DG45sznNzGzwT98W",
  "key17": "37RKy67SffCRb3pmhA471z8jHWD12uKKzGAJtFJsozXjx7qXeek2u8t53MWSG1fZHZ28siV2ughnjpYnC3XwWkzi",
  "key18": "4fFxPkwd3J8njQPkMhvUdzBHLaJAkvEu83F8SZJFXmPGCaV3hf5LnVFGERuRgom6RU1vw28b2Jj3Hqt9umCj3DMM",
  "key19": "2gtkjiVLt6bV1psM9o5mBA2VyK5sD9i8QnrkNvSpXNMXDVkXzLYNSEiQm9E2yTwNFnCNo8jnsRqtp92W55KGba4j",
  "key20": "4wafiQ6XGrBQGmcKLUA5w6TLhq3Tis3YVJwqke68sumbH5XntJrRUJ43oqYXLRRCrBDEcVvT7kfPe1RwmN2ccvqr",
  "key21": "4BB2qaNZT32tooxXjS2SQwzx49hB2kdM2kZ5EPFXw9khjmDZjacmV8gHwgKpsw4h9RQ9RaPrLJE1aDdcwwEJHVkV",
  "key22": "4TqePAM67FWKUkjGGkjrx4Y9MDok4k3UfXvchNjixXxZRjewbwrr6VEHqvDbqrUkZUxBz7RsYgdKW7Zb3huGz3uy",
  "key23": "53khm43LS3gvabcA3GVRQLJsUQmgJxTsz1YTCP7Dig9dsXKDv61cD17maJJREWec7VUSd6p6H4an6YnEZzDGmwmU",
  "key24": "2m3EcscxHinBsDksQTzw9odutaDMWtrTZQ1sfsxMoo1GwWiU5GMDnMaTQhwqsTkbM9mamxGTNnF8vnjhsxH87xxz",
  "key25": "wzezh2fudcLJwGkQXxmD5APU7G9TRtgeJYXHdovTTFjGqxTSyQDkoEf43UA7NYrGxBrCoMkUv1FC7yhboWejmTp",
  "key26": "43y2A4HDofLuqX9yjSkXgEC8Jv3BUM1zEzQLscHfQrLRG8QeNensupvDAuHxhr2N1Wi6yE46VRyUBVoLz8jccYq3",
  "key27": "5b9EGnG3UurqamYm4K6mvSjgm4ng6XL5N89aZBLP8XJ9arcoerha71LomUoCJUZ47mFhfiUxxD3jGnUM4xCVYXSL",
  "key28": "2jF1KLC81eW4uLu2yAqcVyhcDtS9R2Zv7jVexSe9qUShPa9NfkGj3qJjUN4VREWneSmVgRoGpHmjQUPX1Zr6j7To",
  "key29": "5nncJPYmsHTNVHRt7ZAr72rcgLSiUqZy27QWtw8My4QeSLe7c9M1PzCBH7BgxEVm4jLCAwevY4V6dj2zz7jyppTv",
  "key30": "2WNH9e43pimgLRDCdnpfm1h3qJqvXWwnwJzvJLPB869s6h78i9J4MeAmyKuubd2S6CGePb6cUV5GJuxh9Eefi2h3"
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
