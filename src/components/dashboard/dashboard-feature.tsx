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
    "5Uz8ECyZ9YGAdybzNf8J6QiyUBDUD7uZWvW6mNW3sCNnEh8AeBk5ivRgACzdZcDVmg1RjpcGACmZrYKh2c5R7Mrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVaS4R9oD2tFsNsgmBCQoX61HMtYy7iZDd3U3gzdayWWKFNttx9299mhVV3jQvKadjoyhQmUnxpUHs5ePzZRCuK",
  "key1": "4p3av7fHysLCQJ7tin2RtEJCwhxKRafbh75iaz51r7TD2RMVgqea9nv43q2eWTwfGPj5ueQrSDQ1JPf1inK6UJs8",
  "key2": "2CrQeByMo2JjMm2mYqdEadJeJG78nc1pLyfGEByhP5NPdk9xGN14xt7xLD7FxgeoDduJmMbdhCnv5hEVgdXFp3rT",
  "key3": "3RanXKWABU6nqWpsGwe7jySKERooQ8AoRtASQmwptGTNuZRLgAnYhdMWNY1AQCE6iGg9C359BbuyyvPoKtTF1DMn",
  "key4": "5nQA3JzJGYXpVjKZ5SdCoEs54hdUCttjZvGGYJi9zP4Ljo7fjGRJ7DFot4Hkj53PY7ugGX98ciVcF165tsjGRRaU",
  "key5": "4R8JPX1JKqbZaLCNCHTVhJ4Qk5UeSvUUp4ErASoH1kFfq9a7ppi2PU4e6DDbyjmwiUajQ1MUPwAArs53qyqXkF9E",
  "key6": "3bTemZShsKJSeiAx2iUbemTDRad2Y6PRZE9M6j7zt4WNSUsru9zfxyNnojxcyoAgNfvpz69DvEVKV46yywhQHWw2",
  "key7": "1yDRsnDmJJnsuM6hwbD8BAqQtapSpWjYGktZAQRQCfkZxGd9435sLSEYV6CTsuq9fUcHFdQmjdEqtmGeZ8f33FF",
  "key8": "2YDaG2zsCGmNLwDn3YBDK383ufywUHPfdXrqfA6woQszRX3tGd4GFYpGya5YgAXbbGBbDTdovhRt8BdSEwcyvZTT",
  "key9": "22hgz721m7SpZi8ZRi68TvsAasUznZau955yNkmHgE3n5dzmyaaY1zEfwNWzrNGg86SvpBCtb34PdQpifMMs4pYx",
  "key10": "3ECZc7fadrhCsasri9iwGq86gELpBhUNPZh8ahARR7pnW7wFbgEiQHtrSujhU8CrpzPWNLRR7EqVo77UR2nnTKhM",
  "key11": "2zZtuMCRTZwxBb2fPp8D4MHu82iEbFgX2Srg7wqKAD5t342nCMtvDvd2mpG7Zrm8ZQM9RpaqPufgC84zRD5vGC9e",
  "key12": "sz6rYtcFSixmtfumjoLnwHkq6QLSDDJCK876kL3G8GerV7GgC3En781E35tUq1rgni2aJ5PvH9GMPPwkwtG1CzZ",
  "key13": "5W9BCkHBhCJAWkYTUEa7ZZDSaHtf4REZ2y427DRaHWmYRP3NPF5DAdnVCQFx4rvAH1mQgNnDjtXm3sJBu1LrkRoy",
  "key14": "2d1WisGUJAxBjRTzPRQKdoWGe7TEtNTcBLg86gHbi7HnvzadujxZ9GkXEcRN7Qda4vEsRc6hKdnXmvCuLbmmLCFD",
  "key15": "3yrzxE9RykfaFbgdcQhLca5Qfax5hxxhVNZFao4npUgyA8tqAUqJU2qNL6s4md1KyDUw8Gh4rYeXw9jm2fjzpxKR",
  "key16": "5VB6uhnLvzz39mQbaUkove9b1NgX8RL241xHB4N96PKvykeCsVJRTtSiHTyErda7ydg4e8Refh9qBzzwsAkVHS3F",
  "key17": "36oWpcYc9QrhL3EMGB7YLmMxAu9ZCNMhixuE62piuLght34U2J11cHmEfubRc1tkdbWo5wgLJ4Sq3b4VtauMZShp",
  "key18": "yN9hag1zjnoRSA4MRwXZhvQCHS381WSjrKpCipjN348UT4KFQ4qNqiyr44fJmuQF41XD4fkNQuExyLihfitTZ5d",
  "key19": "4ADtLTJnVHw5TZ8NdThv98M6fLZ2YAZZVdRDvNAxazjxfiivHwsoBp6BLQJEnFZeUqSYrrD5efnuSgUcgbA1Jfzy",
  "key20": "g4yeaVfGF3Gr895c9Z5zM57j7aTFPjAdepdNXiZ7KuWoTfcMMK3ZVcwzoZF8h1v7u5wWbmtG4DwUDNHgQPSLiuA",
  "key21": "3UQJGfJBWb6XU2FZdoqEfexCRL4s5yGxbqb347H189UZD8N4eHjsxfL8nmq9icgyW5gqSpXWsGTDtDafxgdhWCZB",
  "key22": "hV7mvQRKJyc7LpuJSKbcBbCWU4no7UVU8ZWXrJ3y2VCjW48oQRJRKDkJfWroTsHwaqKegHmRb6PmpjN3hhXRYGt",
  "key23": "63g3vyVcJs22Lim5fnJj8ULP4wzkDUhmoEtgbVJCXAAqb6QFMr3qZedg512YZ84NUsuEJMKVpjpeBG4zScFW9ZNd",
  "key24": "4KWpoyeaPy8G31QkPGemPkQo4mGBp3P8pBCevUJ1eKF3y75ZCPAooecEgPm2QZo7vaNVcurqxYyDkCdDpAhEL9C1",
  "key25": "4kmMcVKCGCqU4ofG6QbFbMA9QpwxLfGZh9hRhzS2QhR6Sdumyu7iSgAe3fucnzpZmHVyUY9yyXfQ1kppU8HJiAM9",
  "key26": "4M4eVCmXhbv2whM7tugUPcqhDJSzsNPjm3yYk23J7ZgVQnw8qqfuPM96pK781JfU6UXT3THpptFrt1e2wdeP8uHg",
  "key27": "2jfeYLfCyB8kRmefoDeNTBLo6J3Z1cMbvDXtRpxu9dVxfWQVRbeBg2Gn5gwztxUKcLkTyKYNGAfPvWogXwN4uKLH",
  "key28": "uAJADTx3LQ7bdh2NaLkGUToHs9xDvb1HHAiEgG39MmrvRjqScYTyAJM2nG3oJZsQ7Z3D6aP4iVDbzkw97zoqag3",
  "key29": "4VHgdMEQBnjwBcNtLTi1Z7nbPqCa8ZH8dipD6jkA6NnRDnZsrzCgG7VYAZD6oxk8dRfmHdvPWqorrDaRHuRDtSZS",
  "key30": "2erKFMFrRobzSj32iFa3bqZ5mGoet1tCQ4uS29kyZJPkXVM5HFFryKJRjaqx76mWppnBoM8VkUbt2jkHayZ9RCzS",
  "key31": "2Vxw3g3dxgrgfM1hvXEYseUjS6P7MCqAoHVhKZJMwZtDVW9xXU1MTmoykkDhXsTppWFY3stLcDngkWnBdWK13n2z",
  "key32": "i5UYVRonDcMkhmBhUWKVND6QfkUje7ccGB4nGWaCWh1Wj677RDF6pV5JFeHxqbvDK2oEbsEtR3d3hkehdYS6c2N",
  "key33": "4wQiSB1qSCPhrNafrv4GeMZvy77CaJ1SXJLpKgSHM75HcToSVXqi5oqsRnFC6DWmR5iguFHknE3LXVxjQpVFsQKU",
  "key34": "21mgvPAgB6Q4krTc2ZBDAAd8TmZcpxL3gPNQsjG34iMLA19MviMhGDnD41EFzdojejzg9MpiGoBzwLiXBV5rLEUr"
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
