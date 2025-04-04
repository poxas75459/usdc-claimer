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
    "cB1Cq6HzLu1etcM4uWPnR5NU7Vj3oh5nN52NwZEMDFNhbgtk3SAWxHWmxudmXXgbMMKf1N4EYaL1nMPoA9APuDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zq4WyyLzPst2tKZSsrsX1aAyEs26NZj9ZHrMb2GrogMBAT2FMKnQvfBp83ipFJ5Kifp84ncW4KaVwd3pjdeCk9T",
  "key1": "2mMUyBvW58wb7sTCskb7jAxsMWXVTgVWmggx4xrwAz7xeLg3iKbfoboA8kMcH4MXtKX4Pjmy2suKA69LHZxVPoM1",
  "key2": "4qQMKHPHLcsL1gU1B4MHEaoDkemjUnB42588zmWaRZsvu9FVjsVJEVNZEz4qF6mLxjuYMZa5FTDWQw1t1bGSbR6G",
  "key3": "45uHQrQ28uAHpDWr5r2AtwDjyqALdkcbAnXAkMkXeZEN38QFtiAeyCnQWV8PUEsz6FCq9XHk8Y4vUn24GLkp3YPe",
  "key4": "2CW5A7WybejvbnK85Jqto4dMhFFywhn1Fgobz2ThWqd71uU6dMaS5eVCq522butYvWFySw4bD2vXwRjLucAdtaWp",
  "key5": "rKGqPCAtGqaKuujV8eCKerts1tzTdhsYDDaMXvwA3cSfDYaVt2C6r1Sk7EKUv8FL84frpL8FfmNnPh86DL2bSEL",
  "key6": "5SxnkMKJpmKTNjppqArdc2gviqfQkJCEuGLCYjYSKjvZYax6feHSo6Xi49ft7cTn9grGtvTwLTYR8t1BvCpYN9Wy",
  "key7": "4iJL8JGPVAsbSTxnwCbPtEf1XepvHWENmCWWHsXbgLs7ooaNApUtNspJRLXzR5z5dbCsqxr3wTkcv53TrZvop3dB",
  "key8": "36Y8jSLgtp4oz4pTiF5wtccc1GRQuoMuvc1D5oRDppJo9JaDjQEFdxwGMx9P5XrMKBcm4SmDE3k4t2LWas1JGn5e",
  "key9": "24rNe9sG4ALdnP5uAvpnbcfRvqfUhR7LuXStQkq4uDDZuPXEjdneP3cAKVyLE38jU7f5TEC3f5kDG3zdm6JVEsM4",
  "key10": "3PDLGdKXGYy9X4KdJ7SZJc5ch988af3cfnxNmxzoDwYvMoGpM6pNRkKscEHFDRTYjD672jzowrSf7WjQLbCz1TiL",
  "key11": "A4mTobMgDqTi8HeV2Kpy4Yk3z1ygR6XYvVEpCgLx1yNtvcpV116SEZjn5L4MBoutmLt8LqAjzbfvMygcivyb6it",
  "key12": "3WgN6R4QDFWJa2YXULpzEPGjWaCFvfT4ESQKYten1vrsXaPvxzHdsKxsf5b13WCSbccs3QpNo6KXJhq5cniKqeeZ",
  "key13": "5VLnWEQh8HN6NJA2LN9DwC28BJa78fS4EmXzHW2yGGifSecCbRyMp9YJy58nhxs4ENfvMGpCnYrWWUBt3cM6AiHV",
  "key14": "64Grt33myeV2fzqqXy75ncmVbJvmK3jToh8P6wtecQdbUXjJuNxDdQg2TUk97eeV1ECa2ZsEcgC8Fd4zh3PFfwej",
  "key15": "4hRVYKi5JKdPfXGZLbYXgEgBWMRYdof5CSdJ81hFfWTFbZhw7y44agZWCjmSQmBbNDLBUBFJCF4GdqsU1XyfhDRh",
  "key16": "3DMUvZYu7iRgMz9EKyqN62yDycmR6evReVWcqDLmDN6ZepqaA4rwDBWvKYnfsM12zxMpKGiE2hVo4EefkrGYsAEk",
  "key17": "4pjhrXJt6gbsJYGGxA6cekBwVEnGckzfBXGSEzFKDxQHXoeRZfJ39m3KsD2NppBNq9BVQ51YJJYeeoc1MYZwXy9a",
  "key18": "41rXCXQmkvsk4t4vexkdqTh61B2HWAzeq4v8z9DtsJwpseM3qHc6m6ArApyvsRLg3CsG5kZiLCNgkWKnYB6XkPAf",
  "key19": "24orYK3VXfoH8UirBR3KHKUyVka2gdcWpiJNTHSFsHJ1E9D8pk4Uxz7wiQiNs7E66GUQkgWXnqMJjt4ChtaXKnik",
  "key20": "zAanT1xsr4tnoNATVxusPbuusepZe1BJ16mvmss2HufoceAhU6uE9BH2caoyTwcYKzrvbC8Kyy5mjgTdrbUG6Rn",
  "key21": "5PTPPNmrC3PKvTuTz8orUZ2TFeXvT2iZJuUhfSJAXUm7p1gtkYqPSq8oTYeYEJeuSuKDMaCKwe7ojUXdPbKa7Ecq",
  "key22": "5uBMZQrDQNtCaThYhvpc4Ak31kcHUsZJD3vzpVZRkPdeR5ytq1EHUJMdYizHj65pWv39H45DXDBnxPwcVtdJS7X4",
  "key23": "67kePzi293UDe3UTheGdEYvKi7P62F613wPHcvr4pp4PVSYB2LwQ5BQnh4WvE1w99sWsKY36a1HzWtSxVig6yNFM",
  "key24": "BWMiiXGcy3VAzZCy14EqkiC9Poq2RBZvJpYStZRDu67Cz9r8NeUfRjcj65nZAGdTqfVDv8wEGvC3fW2hUq9CGh9",
  "key25": "3x6n6BDTD6bKgC7N8tFotwScPGmEfNHnRvQuBVv8XqfW7yyxtmEMVTh1sHeZvECvoFzNZMZPytVrT49dZonHbXhP",
  "key26": "DQ3VqSSR4MpovEe8mRys8PShkF5eeCD61ZTrSboNABUiwg3pcDEHbu2mQLoxQVGxX63bAsApMf52GBaNUg97d1r",
  "key27": "3mvgqqCowwxXb3Yv88xYzYiS1CezwYfjwH791eVcNPPv3BykhQJ2AYNBNM8boZYj2zBPub56AVS5Bx2V6Dzthjfd",
  "key28": "CsYdY25pnTg8vWRLGTB3fyzk9BVbqH4tD4MydqUoAiDguxHa5YCUyLzLSfiKRihGQzEppuY4VRyUMCBPskwck5R",
  "key29": "2GrxtXCKqak9zia1NYxHE7mF3SfW6W9f63XSVKNCPrNpL7tS64UZhQrRLYn4Zbpfnk6RYNWczNicfxyB7XHU5Gg1",
  "key30": "FcMFJ2rxDkKJ5q7XERQ2DsnFsu1KrWPg2YS6JRN77QKJWEMRSHcYh5gqhjoRxD4Ggk67Zbza4keMcMJk78RpxFf",
  "key31": "4YWBVGkdVACP14bLN4T4jyz2cbDufgBtEnqPerx2vBFAREQsKRd9ESZpitBb9HVN2AjuqLMcpGnesARS1z5gaVvx",
  "key32": "4zYG9FhWiA52GDbUES3WUN5oD1Ts8cAVQkMb4GxWiS1pYSCRjvgeTL1rEr8YB5nMofaCvBJxxrWJEDYGmVNdMC34",
  "key33": "5KW5ohSB6dkG8EWgcH9BBKXHbLuf1qhx1SNH9AoUxCNwvEirRHC5anqZyfkMJq1MYuGkxtTY3H4Do2Ldt9np7c2G",
  "key34": "6dNt1Rq3smACc3du9Ydyka2g1yxZVsXQ3ATvLYUVtj8NozPnxoquvgMQpXvmLNVKmnFdGopqtR4Wrv6LuGE1Hci",
  "key35": "3xHNKzFzXhtfqdbRV4ZGx9XkKaPiH6CD4WT4EskiP27HBGrUFEKgL6RQeB5RgZHoqa8ytKtWgXrwerThJbVnFWRu"
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
