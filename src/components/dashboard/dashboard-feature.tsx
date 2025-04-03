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
    "5QTgxyQv2UGD5coeubaqScW2SQxfyHmBW9f2jgLGqgnT5y1tvkiKP6MVpxZmAmBWApEvZpWxpwQo6iiY3m2Gi4eX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PCLRUqtUahDgSHoDbXxVN4rPqrfL67C5oP2gRsKTfJCLhG4UZauscBFoa3CJufrzzY4m9xvYHeutDyWKBnUMKyn",
  "key1": "F5mBcvt27d9G8ioeLcQoP5rFopfqM7RRFcgHv4DT3Q5CqRSWrKGJV7CUZmcngqFe7vRDvD1gv7GysDxRPvGyy5w",
  "key2": "BJw76tZ8aZuUbNhT3Gf6DK7VLDTKgWhExJhYWUxKkLe5id3CJLRD3rs2pDXxT7TC1XM7QmqvNCJXHWSMLXZ96UY",
  "key3": "4fmbZRNDkwywmr6m4F1eEF3c9MYTLQjt7L2q7erMFS8ePyhHZZqkf6z63UR2WssWXKM5fpRKd27fsCSYCKjMuzPY",
  "key4": "ECF7DT4AhnruF65uhZf3niuRcp119ZC4bcZyFM8BYsSTzk2fXLq5NWPqfWFVCoimn5drDYawiytHiLRCXPEMK4E",
  "key5": "2eA7khQzDBTDgfyYUbvbLJhFVHmM4cgBGfC8b86pEp2jsinYicLLJkpTKHD69gt2HQecmZBEhMi6PLVkojj1snjb",
  "key6": "5uQUrpHqVumpWTCxKUj8EtE3xpAi4582nEXQk4exU8Tc5MyZSuisiV2G8T5hTidchWeVWkcApporK7osUWz14Ti3",
  "key7": "UCVEVpviFCmKXNJz6ob2jrw2xcXiAAV5fVhuremYdcHWT4RY4DqeviTNbE2nvavFYi268esUoq9cpT4e2NuQkqC",
  "key8": "5kurfhLS3e7spbV1hdNjujWQpzcfFrnFgnx4KndgxorH1KjfuEvFEAP7WMxnWKbQn93U7zDEsmXkcZLgeh2rqaLb",
  "key9": "33i6K4qmJQ2CMR7GUAm7R65oUqybnMkyz5SWCHEVc87Bc5ejBg2zGZQy4r39U4tVzpFmZZVr9xyAbNxgftu4XR4e",
  "key10": "2CgBdWcJfmCFzmKpi4KduTMcUdz4FxBn1DwN3avgEYZMW6nME3hiDQxg8EPiM7mGddsEb7udbXrmcCeTKJgopzds",
  "key11": "2wedUZ7vKAS6Vg5Kk4A25kZkKRgWAHQRM7wmNRm5csR1ARaheYbVfgYF4rU4cNnrD8T1NZShRTWUWsWt7Uhwj3aE",
  "key12": "44hBVuAyyjArtGvZMKPHApyxzV6xmcKdCNLfZhg9chxFj3RWSreGipgrq8GgPk1q22Zr9jJ62kDxmdftnVcaXRqD",
  "key13": "3StNPrvUi7HuirudhKXJPR1jgzXRteHGLxmk97AMxVshF5oRxVAwDVzZN8e6xd9kNcEL46wEkcPwfn7RDNZ5N1Xi",
  "key14": "4Ldsx6K8XLzKtqMGa8o6LuKb2b4Ws8t63NYuAunet5wVd6QdX3HxybJjFAmBHW6J2mHUwRGdLM73N2Nbsd8v2oFT",
  "key15": "2uT3KGTNF2vaAzehnjFFdyT8bWmaL2Zhj7XAEb3UizJPKPdCT71dckVsSgYf73AMd5gJTgsXgTDWH2K6v82r82dk",
  "key16": "4DzVruqUr6PcE2tJWbAvXn2rjcemNNKdPBKvKdeTNJdz1Avv7V5MWnEhML7hqcRjdSBY2zQgLgdToZNbkqNPq7WU",
  "key17": "2Dhca1jXRKqVXui4GB3DMZvuj26ZNnAph918zo1sdL1cnKPrEzeT1PZjXDBxNxzZUvMcEGiKAeXYzhNKcXT2nRMC",
  "key18": "5uuXkJKHftkdvtsRcdFRYJxoVapUgdbzs2UE5ipb8aWrSuMRKL3QUn2gzpqySiaVZxGWWtAawz5GLxXa8BC4BrHy",
  "key19": "5cXcC31iBDLo1UaN1wtRgsG2y63oit4QGFDLhnFdLb8XcUPQ9WbmUyKvVeLgG7HgknQ64TQLR1ASn3JrHyz5gFcF",
  "key20": "2yNEdF2zSakKHiX5CDn3sYQLFpq8sbysUxLtMbE4mVZUHZQMP5svxdzfjejgXbjdHoBrkonnx9FdeBzmSs5zXuix",
  "key21": "2fPM4tyx5i7FBxrN8yuNMrBMkhqB5ifp4QmHCUzVorqVnZM6SK4utsCYWC18ssoWsBUUAH1zjMpXWtrZkRXWrboj",
  "key22": "2udMrhQ5MVtFUi1uL7SrBtMPQPA7bRhSR4uFE32SMe4DM8aFwTpA2a7CkHuN2cYqWT7NV81yWZxhFptoPkZqvSHQ",
  "key23": "3wpEApYeAii3KwZ4JvA6wHAkqQ2yS6JTEwd3eYWE6VGf5g8ehjtc21k2swjhspTDchNvRA7W6hP27P8qswp8pxKC",
  "key24": "38eH6QKdTMKZdRSpr5WCjaimkoresyiGUk8q1KST4Hqh9ZM7x4997EXygNCHyg7TfDGPpsf5DQDjjRzXRagXFpmy",
  "key25": "5KCjYePSw8FVgiJRk5hLigu6sgFrnPRjc6twk5b64mhTVyF4CZqoAZKfngCnKTFLRQoTpyYsMec8HMBk9z5Gx58i",
  "key26": "2Xb2JTvZ179BnBJY7qk6qFwQCeBD8LvZiMhgFWgJBgdP41dKhkLySX6hMVdzBaY9DFfe7UruEprYHMsJdmtSqcXb",
  "key27": "5KeRLx8xqSbWSDWeKjjXv9b9c6V9B26xBpM8x9oiqjr9k4g35cEWxpKkU9GDUL6wmgwdnVQRGx5wzTMGCLw9buFa",
  "key28": "2fh51afrb2aUoozUPkVjfExr6eLw2xentNwn67TskiokXdYmrQBbNvs3bJJzcmJSXo811NLSzYncPuiatqN9VfbS",
  "key29": "2r718cm7HV6fq4XSrYHstDkWWdQkS8C5xPbqWb7iWK1JTWeFgZPo163D1HZB1CEHq8vtvPHY5Bj3doZGW52GGnUN",
  "key30": "4WhinvznwY9aRxegXz8WXJ8sEm9FTqQ3wmJ5gvqUML4L97UgNQjWVNUmmJFAMW6H46CztvesCUfU11iqSpEdcs17",
  "key31": "5gVqvjJfL4M5FTMeFSeZZJcCSUUR6V83swagUA9HQ6KcerwFFoEhidZwzgj2FMt5chVbNUpEUY8RckwrEZMQNkjC",
  "key32": "agfYPBnhypcoFG47DxYFnbuebKHKBsSNjqHoYeseNLvpWzAEeZj4FbRu6Zkei3fLevNSeYWTbQWskP6LbrfHHTx",
  "key33": "5M4BZ2gJxNRSAPQ3v8YuA2yjZN2ibMwcDbExaFu4nABFKLrRWWSBVJu158Po3YuCVM5gXpEZwxAgjrd1SnKJLXHh",
  "key34": "4uTxe54uMU8wQV9xniHevcH2C4buH8DssVdNQVtC1wSJbrdsNQcU1ghiDGrEAmwpC9eHS77vR32Z8PJBpXXoHv7K",
  "key35": "Nv5hjD9PhwjF9k3hhe7EpNQJEVopCEqaenACzVGEATQ9JqNtQLCdqKNe1wj3rM6pCMEuqDbhxMPASHmJTbfqpmz",
  "key36": "2jYbpJUuxCDD3b49zABG2VZ76wzNMYa8bAuKLuh6anZpYvuLj8ZzcEYUNtwF18TAc9kR2TWzabNY6fDg1W5na4v6",
  "key37": "48wAMez4ex8dMKGiXTHnwrRhbs7ht14qvwq1H7ReqqoiXF9fS12SDHJjmEku9ksjaGM2y7X3X7wWKBAHJkvFt9Bc",
  "key38": "3KTGj37Nuini2fLgvwPAUGch1oHbvPJAs35fs7JvgkJddxN57QhxhEM1As7JW9zmJ4NRZ76eDLVqzP8kmVgXo13P",
  "key39": "4fE81WwwtEb1gjodB2SPh4eUsbVM61QvWoKDJi6pRLjSFfXgHR263YQVdbkWMbTDPGTXet6CaGv2fSHUPUYomugr",
  "key40": "5Z2RnMGToCbGkkh7fgftM2z3Scph9TEoDLy8tnBdScZqpfnH1ADzrTVNuvypgdyh6tisf3VJb6HeSwU23mANzkQk",
  "key41": "4DpxCgPRtrJ5ZjxnxHXsd6ZLfEq9o9JsjHHER2r9eCFUzA5hJFCu2xPJt6JKtSNTPsh2e6NPxbxczgsmksgMd5Bh",
  "key42": "ckgLLTsYodKeT1RqXDkR7NYi1yrYAdL5rCgfCa4qhV3VN2SmmQTmEFwJUFUeK6Lzhty41GAPWugdrZztagSWrdS",
  "key43": "39XAwDiR3sWbr3Urdgvi5EhuXbCaMLbRij6n7ZdyqhHnGZLrA1RPphUBtub2XaxNfgA63m5SoVDX3XGasQiY7qkZ",
  "key44": "2h5agst2denYKhdimaLrYZnGmtDSPrwmdyUb2Xa52ZshPDb1Q3bRZWrd9PCakrUJ3UzBtWNvEM1eENATLN7U9co6",
  "key45": "wGbar8vcTpyz1y1ewzewAKGGd1w3DFFj1RFEdJLb7jCnoDYtWtcy9itNRGgdzDa6EadUpqJxPxx96iah1KZima5",
  "key46": "5ZGTPXig8xDEyVMSAqexX5HUN1Ei5ADEB4Fry9VM5kg6a351e5R65i947nV7gz4mJfFN9dAknHwhoK1fkZwMtZeG",
  "key47": "5C4t1H28cfqf9G2taUFTMkZ4mh23xw2CJYjR6xfC6dNTFxjw6wJrRzjx1BDBHvxYPcQjq6LfuNhAYA1KvWLbrzdL"
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
