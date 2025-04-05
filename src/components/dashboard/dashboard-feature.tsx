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
    "5ewENwtR3pBkD2s396h3afBPjBeXkVpUmMUxMT5ZrvE4J9xfzQJ21EeErT8gSyWX4cxKwDRgxfVommRE4pR1V2q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmyvesYfx9wjBoiMmppi2B4CfeKZcbeVpS2fPm5cuLQdZv617UMqsZogy1gn59Ds7ZfyYafMfTc6P6k1wQAsPqs",
  "key1": "5iH9jiC6eyaaE7z62hHL5vSeKw3s7kM6rpoAbiMu7sYxhn1Br3PCzBRoymLaHFoxbw4KnBZVVG7sM7kF9w7PJRre",
  "key2": "4JHWATqym1Uupcvz1BEGyXBfDbikKbb1oQnbVv48s2S3up98feurK7TLMWnTjBQqZSYkidjTDh49zXrsaicFDjZ",
  "key3": "4WwwJoTEShK2TXAjgwSQ6zvrwJevYEamNV2x5TJpiotYFKuYJKRPmXuNoUxtRgvk8G24188vJwJySCfGDi46duhH",
  "key4": "2mDGVbHK25gX92yrLzEWgzo1dVqDY9T5dPAcT3JkKK3e51XH8Yh8Azx3bXjwV9Gg2YSE5c2jMU9Fs7K9ivHZAi3B",
  "key5": "4unVZv36JhmkPmYAdDa2rjt72AgjE96TJ5inoJQ624MPQpuhDCNtSsNYLpy76k3nZvWCSwjbwNPgnmFQDdP1kHJJ",
  "key6": "3AUTgHoSQNj7uiavN4AviasAj18LXVcSqwPxDyyfjR83frt4GYEHgCtHSgM8fAro77FdqujhYHr7bc2pPMQ4pM8Q",
  "key7": "2XqWVGqxr3W8FMQG9zBqdRVawRnrxsj5Q18b7bgYSEUKizYGk4t9JMBYoT8T1F6MhD5MPpwFTLoSbNfWcbFAbPzx",
  "key8": "3sZNQ55FJhEgvbMc68kHkSQNjqFEr5sTKqwy86xNzqeGoERZDpnRTGiZHovfcBHaR8pf8QfpT8ybjh9KV6YsEQ1n",
  "key9": "sXWGBffn3R9Z1GCc8dLpzZ1TPd4KMiUnR7gbENtnUghwivgQYrBMCfWercMKShQEHt2kiNW2btZd6Wyehyod8in",
  "key10": "3Zkb6WgQUeCu9XZtwmrXjeVBr7XAM4YXzPUSkG7fpEviboTrUJNMFPceK6rzh2idM8xRffWj1frSpNmDRed8QhN9",
  "key11": "5Nvu5XmoUrTA3zkLKJa28vN6rP7Y6MbPRQUKBjgVwSbuUBHSKoxGcwVvavDeHbzvEfFUcq72geEAaHCULVrhFwvR",
  "key12": "3qjjhF9LMzeSQZBRJp2ofpaXEEhRhsVLsiZMPoP1x4AY3QtoCsPbej5Pdoa8z5aLcVYpF2CcL4YG4RgccWRenQ2c",
  "key13": "5AWRdqPCzmVXACfQZW9BVsZAosvY287zwaWZdpcHnUgJHRctUx11RehaiZaxa1cGhrv6pWtfbZsFpWariVqU8sDi",
  "key14": "3AeCfYggBU1vTNEsrcpfNFVeocfidWttpcU2aYjonVx4ae1GPiBv7GH1rLtY8y14U4kba3C4Fq51Jwdr6MNKitKy",
  "key15": "5mgMx6Xvxg1kLjWiUmXbm64ckyAYztcUH341kwk9zJoNxqHdrrE9xiM1CBU65XZGXtXBLinFxSWTkg5NUzk3XaLd",
  "key16": "4V3HHvogCf2zSvMo7re5dKF99i92pXCobySQHySgaGFPM7DEBRjuST9yfkhSeri9k9xnUiUjrpDWs5VcviuV9vpc",
  "key17": "3jHqXjzsfBo62xdjq6nRQSamb6DFEh8LbLe8uZNoj5tsxU44pgtd7ATo2ziYU4jsYwaTXHyRyskYdUhhgJQfKFjL",
  "key18": "5rbyHVP8CqzH4akmYK3MJj8a9xuAmuuGGSGrjvPe2DESHRm1cFbaAiDVJbJZ4fnWuSDvVmbw89ZPAuCNhewDsWyR",
  "key19": "phVUQ7iec3qKPbgdJdfSZ47WicbrX3HQzb7szrRTCdbCa4tZhdb3KtT1894ikZdYD7JkAA3CpnCrACNmaLrcrmn",
  "key20": "5i6HxiMP8HotDKfLsQJCTRfhmu6hXHEd8svmsdtq46955Yzgv496ANjJiSEQri1ACGfHFysf16K8gqKAGcrMXGLa",
  "key21": "2PkvGU4jAPMBe1UfcyuP3LaZymoahGPoqCqs4LrT8xhq2kNDwbVRoU2TLtVx89n9HTekjZbXqw5oZQh1xEcnXG93",
  "key22": "PsDb5LdTBiiKKnjc7FS4x55wxV5JzY9nowN67fRied8gC61i5x3yTtSVea62a5tTDUkpaSjBDKdZko57VEUugSG",
  "key23": "2PiNhTDZsMrJ2v45E4s7z6Mo6iE3JEXeimRRTwgYB14AfSFhyQUwD81tZtoNBiu8E3TMsxMzbSaaAumJ5L9YcGen",
  "key24": "7euNKqsRP7ftDhEQWnqSmDgvHosx4aSJdo7ZmmMsYFQasSq4RYJP1Yj9EvHfkRgBgFLLR62u37Nns5e6fi4t9pP",
  "key25": "DEg9yMw8PJKwcaykoJHXpHbgdXmTJqSgkzuPxiBUhwxhodZYYrXpNyzKD5dTVTy2ttyp8e18n4aQBoocG3T7hmu",
  "key26": "3GdGaugHdS9wmZG5nXWHTXmBWye5KZnjENSyzs934hfGMdniJi45d5goNxaqvJ3wK8M4yMiSZxdf2Gs4UsFXiD1k",
  "key27": "3mgQ6CFQ6feH6egUK5ivBnmFhUWWDeEuT1URmBY2dxJmRKivNjAdCp5eneuUBYqmaqBXMBAYJXjUHLwHxydczB2o",
  "key28": "XXo3iFieeQTcZGVnmn643M8wPX5wVU1NXNUhBDrJbz7XzV2ZcxE3ot5Dig9QhL3EDgd3gvKwitHBMXi8a7emQaz",
  "key29": "4cDNjiUc4N9BwtuSHR5TqUPnUoXV3y1NUoFWkmfQg2VVg2nCqtK9jT5fGsRTfTDzpyfWpccjC9i7QrCmFgAN5Dtx",
  "key30": "2pDyC93dxedVFoGPszrjG7WmsgoqsVNu1BDuxqAG3XSfDiSXwBhDiYh18K8LJBydrfhEyVTiAHY6GAhEoWS5jdVU",
  "key31": "3PYPWFBibUb9UUrpctdPDEcsVDNaiYXGyLxWR7MuCSoCrQ9N3nTeQ1peSJgz9AvobEJGQFpa4B1H23L4Co2mRxTp",
  "key32": "4BSeVg6CkSSbe6JTCygkC878TgAaexTxYpkW8uuEyNscLYGSgC58Zz3wmXS3mKJpaY6pDHwssxsWkfdhTSyV2pEi",
  "key33": "qu2wRHZUSLT2eh5r3EuyiDedSpy5ZJCWKYpRQzZrKazXRmB7ezf8uTKASKvzm3EAuTTo3qD1tyKe95Y4C1SWPfT",
  "key34": "3RfCC1PBej3kdMCr4uLLBqSTHyTcEZBVDBDzBCnVLMD5FxVfid8LN2F7LCYBQ1jRzyotwP3rmBGrVgWNKnk895H6",
  "key35": "5GQj1RyX68fW3P1QLZBzpHjFahRr8xSS3QX3rkiASeebkUy2GWpT8URwJoKNDLbr7wDZ8gAwJaXZKVUyvBH4jeC9",
  "key36": "2qKMs1bro38JCeZBTeXTEG3PFqAChyTg8Xkf6uiUhXKGsSUiSBqRapuCR1U8p62He9KJyoD3Y6PvyttXMfB3AmFa",
  "key37": "4Uy2dKMhqqzPrzihbBrGyA4hyZTbDrCRvB4vq4dvEf27nYHyvEAGrGwe2Gy4UfVZny9We46ViYzjA9ggmKtU4M79",
  "key38": "3mnPQMowcKhkGYgMMwhumi1FcGU5XCEogAyyM9ZG8YAqgb5eM3zJjLcRta274aizghrdzs8C69NbTcSJCxV7qpHq",
  "key39": "3MuwvvXHe9JoX2bVYo7fxhy4m1UPriCY7syRUXbKPQ7wrPB4TiCUn8qcnGcyX3FknkPjD2kqgi1XgKXyXRSb4wa"
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
