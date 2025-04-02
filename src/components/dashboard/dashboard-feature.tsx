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
    "eQ7nUwopcsXgHsDEsZFfMYEoec6myRKt2uUW1iq1gDcwpuzSc8Na5v5qJFCmQ9WrU57guuFQGHmc86H1LeYVhCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JiFrzw6WueKnDbDXspV9r8THVpo4kybcdsoUuqRRotBuwNHuXwpwdAKYhg51Aew22KVppLUG3rKquqE6P87x9kF",
  "key1": "4rUoAeeq2D19UXLESAwGTkoqppmZxYrv9vxmqqMYFH2FavY74qcXzdfUmYqMQhbWtKtWqf2wDr8duz7qkNaFL2gH",
  "key2": "2EsWcqtxjuvYAuxm7z6c4EaRCUzo9v7BqTZgv6ZTgNUL1pdDWDQ8sfhu8TWNV8HJrKhX3gPdWgMrGCVaCivXK6Df",
  "key3": "5KSsePaumcmjudFCzBJKG95geomZUB4SUXgLKyKu26CuDvX5F8zFmtNb92AFiUcMRTci561WRZJJxicS39QEaqK9",
  "key4": "3bdKMafeSrXqrrrB8Mvh2JgeXZKxjW3iCs3KneZSAqNhjs3SJbNhKwZWch4wTRrVJvh9zTiGxnBHd17PDGGirNHF",
  "key5": "nLJ1FfE9iT5XrwUoG1DxreBYFEUbCk6z5xKu5mKhZdBofiyAHUwJZDYUrwMDUN1CEdFKkTUk4Um7qkHcpn8rt9u",
  "key6": "5xrJUQuDQUXK6F1X71o3GGX4FrohBEQpM9z8bVFKkkT4K4aeXrCW4j9GGKmS2r2TvHs71qpMfYsjGrmaW3shHUYZ",
  "key7": "2EqNbkG9wt8dQGNRNm7rcLX5Ak1ZWevYZYKsosPcAZDr3tZgT1eNuhSyq9SU33DcHMUzzYRjRkqdXHUEUJUpBPVD",
  "key8": "2CJnUBMC1HM2ESjPTMogrSz1ovexN5RMWj9xbHrcWUBQL64Wcy7hpaqUhSj28tvGTwG3XsZ3Jc2wcjKXnWDSmuao",
  "key9": "3YEiFTHkbLga2zBebqMEFNNNTAq1qLYJ7mMteMkLbAfERZMk3Nk7WkMjC94HETHuhQY7vnH5bsRvRBuPzfZsWo4j",
  "key10": "3HDpx2QyjgdVVCnD7CURgyADAY31jk9meEjxiBKbjXyN1x63MkLMnxNZjxnyKDsDccuFHii5YrTko8be1SLX55Jw",
  "key11": "2Ufg4J5i2SZjdVgPB9wpqiiAJT8Hf51pebMQg47EfEyxJzF4spHsP9qzkCZNmb63S7CQnej2tfUaHDpWfSSadoNK",
  "key12": "4Xt8aDGWBWtqnFmR8em3cQxe9gxZ5Yv7C9PK3V3YajuVe4PsufjEkHEJxJaxcJTtuYfWukgBqXdCHyi86jhv7kd9",
  "key13": "5sTiQWAWG2nXuiBQL3zUHDFTve39Z9YoRt2sfVVr33ABrgCB64arUJrNxUDHPtDgdfp6wjBKa2CGvV6Zj8mNR23e",
  "key14": "2EWzx3gPj4Vfg7E72tTKh5x6bTpsozQ1MsHkdCBa8oVS1qC6gMptG1Edp23YdtdqYVdYnqF29SoTUJgqi3msxHgH",
  "key15": "3RcerCKAwPNYDzpU3DDzVYpjdFobag9nQjGRpVathvrf5ZVBh2oiVoAYNqdDcypMccLuYCk4QnfMaJWmrxoR8H4R",
  "key16": "4k4hWRBovpKqdbdHxrdNiXH2inV7bHN88gnjZp7Cy5gLLMRtyZnWasYPUj47DTv4CmQqsJvhNX1XwZWAF7odaJ58",
  "key17": "Hmm1TNovuweipBdwjKPK5FfAdv5PPaRPPtwy4sAyfgy8P3WaV9Krjorc7qQWkze7vYvEtibL18kMKzL9G8JokSo",
  "key18": "47gMgsoBLxFxQw9PsSdPu64a82PNDxXxRmRDM8JyjDmVAvLhVdQcCwmzFMusBWeAZscYLTuuzAz54ZzbXYxwLNkY",
  "key19": "3uXeT7Ggb9JTBxayK9s2d591qS6zNjUBp4epvn3TMq5SnB2A2X2sD5RWNBTmPmTNLDoNu6HF3eofx59bvCcJ61UV",
  "key20": "FNbwGfcchE5PvryehjgbVFgxiohmWCpMoG6fdojiA3tFqUjLbeTW8xNBbyvNm3jZ4bgB3HKz3ocW2SnB1LK5Fxc",
  "key21": "2ED9SbRyAEQMe2FNMMNWQGSjTPGSsEUuw29xrjNv99s3X5Natz9nfa3WJXr8pfmh7Todab1ZyuYXvPw5QPP2wixh",
  "key22": "7QcoqWUwfEkqbfbog1iLoFkxLAQ6jBytH4txvo2tU5mr4tJmY8QRByip6baWevXnm8Y1qpsKjMUfkcAHmUjmcyX",
  "key23": "29CXqLa6s9QRsR3AeSzqqeJJQVdDn7aPXsanMZdzNA2rXM2oBDSNbUJdLhzCjYck7uwyVChe1wKH4id2z6QpJHKv",
  "key24": "3rV2oj6TMFSfTRVNr8GwaKVRSMXphmDgb6VdCbHWzLw5hAZd58pyLvpwsX52oHV7Zss1qCCwzq6Uga9NQrKTDHrW",
  "key25": "3xq2Gbz4KXZuh48jJKWZ2TzMfuKvvKhktnw3X7WmegPPoJRf4vum1my7LHUUmx1C2gBxVfHSHHo8LyAomSWuo165",
  "key26": "2Vs7DLVvfU5p4Q35bKY1J33jWnGQHn7VxvKm9D38rm7nbcu915FUSax1vawucMe3ngkSZRz6zFocfeugvyXYUPVd",
  "key27": "2qQdT1SyUv8fzHu4znJ9X2GD32jLhvYsSh6o4CTDi9UTD2jgr97BaAHH4MsuomFtnDyLQQAvkioSDqQkf4zRkVJd",
  "key28": "5fDWgZ95s98zyo2XJTFDxxQYdh1k6ui2qRUx9yueDiJapWt5QZtNYGcKaihu612NDojpQHhwiSMobmXat4874DpC",
  "key29": "RfzVaXWR4DfEQKm5Cc6zkVnhvYa8PpWoZhAnEd1ftikK8ycFc5i9jhZByKUr5eLaXBtL2UaucoX5qFtSnpv78Fd",
  "key30": "22doiWVDSDom52gxaY4VKo12oXhHprSsZq7twKBY64d88P3SytHhLVwRcraSy9SERyzYSeS4zzbdTb3BwwSqEcxa",
  "key31": "qDLVUkboCb6NtMwgCiraVeuNyzhYruT6xsQmakQpgRoXSBcDHiBQoXGH6HMY2qKkKCsZsmzxdGG3iTMniu5dvKF",
  "key32": "4k1mtYjAE8Fbx6nGkgoPBEAyDGcUyvt78nmPbwrMwYNqeUNDt5hcWjUYZDNFUJLrCGDSVk7cMHXYMGrVen4QPXr7",
  "key33": "wBUCkWoCNyyYtqsfxAXp3GQUpyx3L8G4o8JfYiEp4TCqAvV9gkne6Zbrr8MB4Hrzui6YooPJHMTdLjxn9W1nqoh",
  "key34": "5ie3gixYLEctrYigEf4H1rzUb9Cxzpsx9AWZxU4twCiFjhgSth9xZTuTV6cdRBE1Z6ccLd5Fnvozu7Cov3sdqiY4",
  "key35": "2jUi7CTDQtsPJTz3ff34zYqWEbCFrSeLuWvKHyCbZETBnYthsWux1U8dz3ohdNoXsXo2zNBHYmL3vJudbDD4xe6n",
  "key36": "25AJgtc9sTtoKY16eLiDh7cXqGvKY2s6UkcT7BvmaEf66j5ydAbW4WrmDhJnQ4SB8uahtEQzFRoxrLCHJLz4f69a",
  "key37": "4JXu2ERxxLh5CsKLX1S9tGfZD65fP34w5r8Nb6QBXrWjkjsn4dnaiQkYhPdRGBtgwJQBxp5zFXhWdw6qHxVQB81D",
  "key38": "4mVHL9nW8PJThaoEqeUTiUpWUSwQ1fjTUpUmzN8b3ZyvGjybSmdt47uuv5okZpYJ3eYfk7NHaidhvRyhNQoFCrzh",
  "key39": "3Bb9MeGhda24BUepGCnJhLdZsoBBsaLSAz686xYM6HxoN2txoj1Lbn7QZPKydapp2i75HC3EUwy31G6jwmyJN9ws",
  "key40": "mqxkGDuZZbQLLwkVV4b5aUsN74HTMkDcGJkp9gsfDNpVrU43jnydEsGyaRho5uY4tzRygh7P8XXLnoGKzRZcTWa",
  "key41": "3ZUESZPv3W5zEtqbSasSb34jsrkyuUS5ZmVfi2NKzKWcZhYWxVErgcyoWXswXC6zHpbBsfNRLEbcuLAkCxVTCuBq",
  "key42": "rm2HNYsCXXSmP3HSCASizVCBSsiLBie6Daevr9y2QkCiM8F4nPsXjEHKezhKH6B7BgFXFysaFBKTzTseDqYkRay",
  "key43": "2kdhggb1Lxuhp2o9ntjJDCxicq8JgFd2tREhrwPkCzbPEwEW88ygSiJTUwJ1ax7dHQbh38aujGxwkSwMrFSriyXf"
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
