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
    "5MU8vDPd7KB16EuJNtmN4CMVZ8NqSkrEP34rT9Cj2ejjJcqDSVD5oi7TWejvdAnMkMsdMoB4rZMhZiruGneGjiKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WyVJxAWpeabqejk6X2FooCLA2XddWzNm3Fpjv7XuHjiTcY85JCcsqKwUVaDLMc71QnRsqPRxVf575Trg6ZRP8cm",
  "key1": "4iHGJ6188dgmEAAsT5W45qXrUpkCQDW4sDtoacdvH4JiDqtj9MACXdy1gJcxzmKLwiJKkUnDCJBshgdJimRqoxHC",
  "key2": "5HEAkfUZT9nh7L98TxnN2SYhiKAestynnHU3LjmjFzbTFbkoJUVMmzES6qBHZbGEf277UFN9yi4HHN7M1wgg7V5R",
  "key3": "4EUPh9NBqF6J3DoeYPimTNu5qrL4WzMsdEDFEWbZkKrkyiAm1UbMtqd5s8XsN618E3Mgwmkog1ytmdoZYyhkauqW",
  "key4": "4QrxNDKkwSUc6W1tiAUNFYgdz2SKLdKC466BNFwDad6FdBtexAzvi3vR6YCsUX542c5MZC3qZkBGT39CRGic12wE",
  "key5": "2KtH2EDLyNm9cXCsT6eMjBbdx6g8sd4ES9UneFdz9ugWBzFDRAJdbL77zsdB5JJ6gMJDKSAgiE8jDfmaQwv6owpM",
  "key6": "51f8XdvkRJa3hz7R4YCNuPJVY4AcixSgenCYH469nzGkgznxuasw3Y5TWkD31WBZNLin682seTpDpzJRdX6fGxbp",
  "key7": "2568ouAYbcrVzBhRDK4FFVQEcV5Kfgi3DXvL8VQ46C55puPkomo8hsurgBC3sm4zcCQ9e44idUN4knP2V1XyEk9p",
  "key8": "cXUuTNho5Yo5Jaq5qiBasu3ifokJB2XrS1t9io4P5v41UmutSgTMLKymcAUzatKHECNksBvdDDndafCXEfMRqHX",
  "key9": "29uY9wcZrkqRkeDwir7XMoJfEah6Jv3JD3psghiw3H5HYYfGPiU2pj9MKEswbnh27Zv9aFrYRNsEY43jWmNfa7B4",
  "key10": "2tXs8ZDMQwAocXD3HaGz7JuBPSAPKwJMByvLGJiFc46q4LCmuVjAAaSEM24KtjiJhcZjZ1o5fjy5PsnTtQEHYFok",
  "key11": "5y3VYNy9eYrtxu8FFXKmHqYW9JmdCmWmdQaojMunrWMMSUQQ7289BZxYhs3eE9CHCX4a1LrDiBEU8TjLAtjKXcwV",
  "key12": "52e93ywZA54pbHvpJWbG59ct88aSevptNB6R9vSNL9KVYa5HTNsaWYXJFcQ1G48K9PJXxTvfsuQCAUp7dEPcBaCW",
  "key13": "4qsHFWBZqJdoHKt2BUv9VyNa1YkuSRxXjiKTJNzu8BW6Du75LPBT6bfvkieTCUvz7aQer8bvK5suMsQxyMfGJHmm",
  "key14": "5f6W1tnNpgyVKNYTjmrgYttZ6rdRV2DougKoaLaatb6XuVekGXyconDUA2stjwWcpiFH66ZTuPSDQTUWoqdqEiVQ",
  "key15": "MJGtSwR7HeffyD5wTUxk2sjU1kChe9D3tfhbZT4pPX4f6SYLonMTdQk63Fie7KDd5163ZXvtZ8skxFMAyVHPziZ",
  "key16": "4PaFV1cTmVZGDWDD3w7wyC2dAk5HnHEkmkyPySPi8YgNKWqcGTVnsUt8yMiYZd2HWtxoXezbzBRtJFe7TVf7Fa7m",
  "key17": "5Q3JwUr1k31GDpXLSU84tpStPWZZ4BrvR3GQGbEHNvASUHyZNFrEFpyJXVdQbf6b1NZvwL7KcFLYUdk2rXvJBWHj",
  "key18": "3s152DQbFFhwy9ZHbqAyBMo4fxa3ZiAjwJE91hkWjEbAPACJmNLdg1iuGCKZ4rEhwUKaRGtG8FSoPu2JF5wzvXsg",
  "key19": "4PxEGFcce4MjrwZj6ktyojquqjaEhuLpRoZYFLGsY5s91tZJ4aa4Es4uUcHeiT6CzMJTiCLLrQtnYbL1cXm3WKiW",
  "key20": "4kqCDY6GL6894ELLudEbr1CPLbLKR3Zh1sm7QbjfNCw9pRsv8cRvBhVaZRjGwi97VkRqsYXa27a3x7m93ajNX78S",
  "key21": "mUFkgGGq843ZxQUF7NivHBdCyPzNYuhuaa8zfreuMKsJzV2Ax3Mo2rbhzmaXLb4t4MtbK2m1JHzT1cBy5Vz1oYJ",
  "key22": "3q6vfucVCBWqLJoLp2ZwPGi9ScMeSfj6SYrXf6DVE7ZXnuf2w4p6rPwhcDoGQw9SfoywTj3z6LqHNVBzfRDGDXnv",
  "key23": "i2pySF9eggJLsE77Hphktqpyi5ewVJDs7H5UysJrBPJAFDjtmAiK7Rjf8ZjB2WTnni6pK1wyvcQwDY6migL36pU",
  "key24": "3E7tmw94FirBwfEqa2r5jwqLZt9p9MLtuzBSw3aNnfAGcXJ9DoKp5PWn8NWBsr3VwrCVXEbp18WJB8diBkLAwQQx",
  "key25": "3moFkbbfJokvogXiN9Bgi7mE2YarCBJGW8kwdppXLzu9vQdsHRmL54FKPWPrLospSSzWaLDwR35bYb6tpXSrH9pn",
  "key26": "5FyZpz9PwXc9ZzuEdsy95gP1Ngu3iBXjvmbGhgvw4MLmxpBHvQVgfae5yiq51pBcxPkctPaAeE6LJP9XhBvjaWfX",
  "key27": "2UoYKV8HkFMa4StaQefQPxSWbtJiRWavRpp9MvWdKoBbeg7A6tSiDYVDYdJjhLz2d59yo7zG65FQkStG3vJ87yTQ",
  "key28": "4tacTeXMWg1u7VwvXt8gFmx3mjjRHk57H23KRyDAUpD93nvHbGipvpJWgEQQFjzHmLbtz6FwJbHjHzRoXJ1kBirX",
  "key29": "mFjzkV6KYqGTdsrHUFKwrBK5fda1oX4dwsBE7zjg8YF3ZTHBXaM2qiTaWim5TbKrTfdvGpmsG5RM33eFiqZrE2e",
  "key30": "3gqjdyuBTAti52xjgYbAbQ8p18jQYDFgrcERUVcABkV8CTthbuQRKp1cdqKaA7FBTvhC9pqF18vGWrPLtwPtcQry",
  "key31": "3Efve36FhMwydhF1P9Kb7muw67GwyP9AYnZpaPWb8KRH77iReoFvemGki8x4ij9CBsFNP9d73X5ivpTVUYbuh4zY",
  "key32": "3QNHRaKKGbdBQFBtwWBtUZXMWeaErNZoRxojDR5DAbqaVkxwzV2pFBkwSHYookPLpFwtaeNSfe5g7KnwJmumYheH",
  "key33": "3rQN6DEY7nsM17qtH3nfwWmWVz8yt38LndEuR99dEvvgokFCs7GEUWJZNgrsRHPNkbBmvfMcDQ9Dmbnmt3NnRoaV",
  "key34": "5gQhPpLy8FuUPzuwcTjvNXLbGYR59k1Uh5NhXC4j7EYvFgAkENqvcYBtA4GJZJkF7VL9mrBeed65ftFbNeBLWrM7",
  "key35": "4hB9Ph97aEbQ9m23r68PgTurbqiUV3zCy1qrUeXqY5xBDAtR3m4b4cV4R4srVsCa6QqULiMuZLnMqUyVUdBPsdwa",
  "key36": "3dgQBA2PYALeKHHuuysgDB7AeybFw9xLcoX86w1HAB8ntvf4hN7zp18m3DbrJyshXovE4skmXdt2CFa2pCAT23ay",
  "key37": "2iFhbKNenGh36Npnr562e3AP7XGGFLok7DJFTNmXHPG7KP854phL6JZh4QxUeKXTrozyQUDXC1kwLLcpfUfuPLm3",
  "key38": "26pdyCZ1XtwxajnYZhJMJLTV77X9kthJGhW7FC4M7wH5HWvsnvx6VgFWr6JTD9hH6vLvxqoMVgZw2ojKGCNfASVc",
  "key39": "tZGrxp4YM69mWbjbgvCHEMDEUJSRBwbaF3Cf1FW6H5eJcScLxs49QLdTnqTpcvKuskw55SyrAv8ft74X8Kqrknj",
  "key40": "4pja3EcS1F9ARF3mfJG9pX8NphPyMXfp65q31k8cKDtaaBXj7uJCTRHZf3HdqFm1AvzpLJjboaWUC7HQnK8gLQge",
  "key41": "vYpZkziTqQV59bYznYgWVFVF11BRqmQML8N2SPJTmkUi38S6A3aaYG1JzC25FThrvSoo16rBR1kF5XPSbm5bRmb",
  "key42": "3ShwEqj8qH6h6CW6Mjxttc9cWmpUriHNpmBzHK6SVQFCUrDNemmQapHTpY61wQmeJ2kMtUCgvpUiEcsgtRtYoZzP"
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
