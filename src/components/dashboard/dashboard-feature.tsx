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
    "3UB3n5SsKX17hvdsZ4Tnv4m27ugdJPqgyq7Ex8KH7wbAw99yFnNQjusSQpdRMvq7mgGA71LDPsiHx7viZAqgmFNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjrqHNMdnr7qpJBpYGP7uhcbbmU7VydmM7rGuMtiKr2Zkqv5Q57EfgfpEySSt7jtnq45sjqEQ5FTyMnxLZvzWKW",
  "key1": "47ESRQY12gu4c5c1sJefVUWT2cvaNgAZZQmNMESdNedtsYdYQQfz9N4FjJGSxhjGCXTT5oQFZr4gpnBCAPWo8zGM",
  "key2": "aUMrvJrrHrv2hjXtrEQr5HJWJ9eX6oczkJWrgY3emSAx7zPtQZh27XuZLaRe6RkSLfBsqwXVrTUnG19Bmc9j5JA",
  "key3": "2rpoBgPtQMgQKZS8mha8MQ2RH1cvMLx6FL8E7o4ZbtJsfM7jdTaQcBrDaAKp4bA3pmnG6SqjuTTZVVotMrZLjEKZ",
  "key4": "3sCYrUzJtGTrXbjHBtA5G4hYtoNnmPjwVMWABssM2sJFMZpWrExJDX96XWM91cmRsjdwZhHdJZrM1rJJZ6ERfoaH",
  "key5": "3Y8G5Ff9DZEvULRLVRBqadjZmHfgL1izL2LGLCBgPsKUJRMTvq2KAcCCd2uKBirJB9Sdb7F2pU3YgrDoqomKPM2d",
  "key6": "5YXGakNNvTyLMB8T3H5jjsoBigd99WhQjy2PTed56PyeB5YTyU3zGcEv2hwCYR5jtpuhPVNEV81fpMY7KCDs2vAE",
  "key7": "4zXJPMdhhWsNJXVT13ax5LdSpTnnoxquUvBawUnEzFQiRwhLjv2Z8uW5qLcsnyJJJGWt3h3DcpYzeE7v3humu3F4",
  "key8": "3LhfW6CP88z3qjk6zw2c3vsBC2ERNJ5bdNaAJJPinTkdAjYP9UrypT7gDHzZDuChQx2faNkMwAft7TGd4p42j4nH",
  "key9": "2wwfyXuwWA4CuD4DibJ7mWAkubH7vurwvpkEC6EzaVQiCUGuUQ5GMn6ke4RnLJ3KoXRWEcCKdVzn3ZgH6YVUQTRy",
  "key10": "2gnLWff5dx7FqycsyU1UefCY3yGViwyMJ4aYb4N5q9vppDjiCvhhEVp4RAvnesZpeEftzrjGPJfCBE7qbpBxn17Z",
  "key11": "3EoSXiZCPzuf5sS8E4i2cP1KrYb9hRrnEwKeYPN8PP1ZPvSAMfXCbHaGUcrHJ9GSWVypYU9fqv35gxmWRQjA1aaG",
  "key12": "4iLJBmgFfW4gSCgAV3NiChDrUCPhosDtrPFWPrMg5wje1eu24PaYBuS4j5khUufSMAxxzJqNJXVGMCnKNbg87nr1",
  "key13": "59PHGDrrwYtLVQGPkzKMLU5aycuHPshdztwkzTbSV1XqVAmsJqq6mL31HtYK1w6NTFRTRGZevguXvshYz4oU217r",
  "key14": "46XxxPuyc85P6nRVPPm9cDXmCPo1ijhTARyxbvw4pwZqTXSiVfsJ4z2eeE5qfNJGmA8TLaBbBfUsjYigygS2frhY",
  "key15": "ua3dMCVBG3aJ1rZzACNbTv6GHcNsZXi52oRPwqKpMxDPPs39sJy9wnHmRzjaLm8xnMxpUgXPgJqhiBmmatAnQyu",
  "key16": "4CgmHWx5vkMNUEwCaQ9dqwhPhTmqhZgE1kWP6vJGArh3v6Avz9txeuRNqiTWoLofRbnXLxWHcB7AZnnsVxgKk7Eb",
  "key17": "42GhB3Ras4BgrkMZnHSXZi6J8TMFTkZEnYGVDtcBfFM4Fd4QGYwNJAD7zbucX2r6XLa9nis5jrzBUvRUorZ3XFNH",
  "key18": "5JqHNvBpG9WZK4YWefuutDyk2movUAejWPiCSXRjAPuwPA5Hpp8XRZAfFi2SCPZz6SBArtBdoZ86A5GnKJo5L8H1",
  "key19": "3EvRCq8DaHWjSkfPykU1BC1pdGWvErwhVrysDiCZ9SdtugcLdDLZPvczMYVgynfXY9RHB69a2GoX3oPLw4fgY4PA",
  "key20": "QmmUd4qG1nNp3J1KTgyeKemRXsZToLnGZQE6fQ6pkam8ABwHaZbdXKDmgEeYkUNb2bHwQLhvvQpMTFBmLi9PJsi",
  "key21": "21RTghPg49Yzw1y1puSd1oTDMxMYmQoRj5N7mvedH1WN2WjbtGmkX85r7h6Fo8aBBzaEH3R7KrE2cCbgikMENy72",
  "key22": "32DCuUg3vkQWBNUUvX9hyRppnMrjaErbwYTdSFSTz5CKZZdWG3vHsoZHcGRmFQc4F3e51ENzKNLkSV6pHcqsjoCk",
  "key23": "2dpBraJSgovakeKL7nwRJtadWwVMgzRbs7QKG7vCTAAp4kcNbdQTXtSFTknYaMJEcRHcVzABaXHS6YstAXz1qgVS",
  "key24": "2pTbo9YNt1N1VtJ9XUoVJ1Unyuwgh6c8kESehADRwb6j4NHozuwSp2f97fcso6oSVMA2yGQ6LRZtSV3zi7RL3Qap",
  "key25": "5zRQyLMDHq3jxhCEu5og4WVTBvYDzcbE7UguDYZQJToGWGumCSTpd85QksdhzXigCP3ZDfm4JUF47j6MLRfxVjwJ",
  "key26": "3odJxkbM7ZyTHyLQRPBUCuVVfRsbLj4zcBVkWH6jtaTia8L8wyjHLwF3XHsTRyYrei368QUc1ZMAGNnaeFoWHvcC",
  "key27": "3dtroDi6AxH5syGUuaSfmbhF6WXK5c1JtsNWT7xj5pEDD34ejKeSU3MNpbgpkZ4fmi6KYhdPohcNCeccCQvJ2axG",
  "key28": "4m5AV76d9cGWpL2cb7yeuFQ63v9y4EuWEoaKfXDqgcdhgC7wne7Kxk6ZwheCNgr7UqebmvggWkDqBVKqBMeZycAh",
  "key29": "3AsFxP9jPp93ShaCTnismtwvHqFNZdKAE4uccTgxRYUTn8wFQqVZEjUpuM5spCJMzgyPs85ud2k3nT3EmCMpjRKs",
  "key30": "4qQKVbyim5n7Sg3F2fksbaLdKPu1Efv8CzmZ17EvUKYRoP9XkeUmh4ZfAQsSkmYLgvUJRBR2Ac9QkSvgKnXpVNHb",
  "key31": "3Arfd4yesBLndKWhJuq6ZHk1tZk1rdqax6jE7YWTwAMHqz2wVcDBx73jq6M696b9VP6hyqmB5uHYi9qZUUiHzXVP",
  "key32": "5pM5Grum5cnpdP8G6sGLXsmQxjpz6pbo45aZCKWRL2hnvkUhsscQF2H4Gd2M4MhHZ2RXYCbwpRGGR6iG6QxxP88e",
  "key33": "2xHzWbrwvUYo2qznAcYTDzrTAwZmYurbSQacQ6nAJYqs254vrXQKUNTVSEpkgWeWfE9AWu14QhVT3vw45ETKXj6N",
  "key34": "61ESpZTodHp14ZKWicEthFQX6pFkA6Ko4Y6xBavCodsqqmkjy9zLVjdPehmz3kmTA2V5b37Ldu7GwHzP2BSvCmrM",
  "key35": "5LFxq6rMUZjRpK1zaSTZQWoy4sPkKsQE49XgZLWnVzx91yr1WdDzs5dBnkbuajRYkCa5HaMmYgR384fNWBNcG8gU",
  "key36": "4t4QePyjaNYfw9Jcx1csaJgiGppoJuQh1D9sdrcW9BycSpVkEHXc53sppMCcCzqtkwCNN4JnBFFnnwMwvAhDsk6H",
  "key37": "5taYEWxshiaoXnMZaB3PzFHsAhopv3mrGXXFo5U6oZb2PKmsLhA4MnoT2vSR1fSaoZREK5ZQ2Xc17obBrWavzv15",
  "key38": "2zndwujEU1SECp6L3aWuLc64tYLNKytUf9SVjSvFiVeQ4QqsctbZjm6Mjnr2V2MUCwDoqmHbRs3eMsMuoBx6RUXz",
  "key39": "L7EdfXsonUU6iEtA6aLRt6TbN8FZmsCdaED6HAnZzVRYopuWSeneNSRZKzecMRj2z6mkFxHsaPqxjxQ82y9eBvR",
  "key40": "qFSzhQgJXSDv3KFaGoe8PBwsap582rQBxFoaf7FYC9oooE5mkLDQd1JUaURLVU8zcjgD6JgJPNimr6KJ1GXhG43",
  "key41": "qMit9EQFtJpi4UkGKUzgzLa3DV6bQi6QNkDkA6uuqqPHNrZcVFrui3YUFtjcPaduZY7bM7WsUfd6QYC6HgmexKC",
  "key42": "4S1LebRLDN9Q5BLBG3ozo6jXr5YCM8WLY4ZWSkr7SXtoRLpF6KSUBhUKLrM4RzrkmSwGQVXVzUFmSmYRT6FDiUUZ",
  "key43": "5pczQKCcZPWCFYD1ibRRsTwUwDUAuQu9m1c1SAqakCmzmTWQnYwfVd37S5RbRXPxe2F2HvVoXhr8aypP7UrmswxE",
  "key44": "4x48Co9uMbnjL2V1HNXrptnqTPbTb2LVssxKMy9A7kyF9BgsFxPP6QX2nCGx2Ygpk2LuAGPRSbvZr5XQuKFjk9eT",
  "key45": "2YgAfyVBCarrjMrGm8vjVqgGCVQJ1rzSktHvaydANPrie5pc2nheyFENr71sHbnfkAPia2Hu78TJyxQYW4KhqWvR",
  "key46": "21YzAJjsaAa7335iZbTipZ6Z1pbThQ3WxcUG6sJDMNan4N1Z3cXS2Q5N6adKuG3X9e2MfpiHmgeVfpfTwhuA21gw"
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
