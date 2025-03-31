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
    "4rzrnWE7tbJNCDw32zdNbpyZj4GVMfbwH6LLgCbG1T4Q79sPezgwKiLjLVuuACPt9DDA2ttm8Ym5dxCZb1sX7iMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P3DkEHN5e34SK8vjPjHpM7TVtvByTj8uWkHWXiVdzzbwfqBeD5ZmfzQZitGxGGNcVxJFas9jLVd4eT7fkUXgiYf",
  "key1": "3VB26NXPrjdPEpWzYoZsb3fnCg47xke1BPsQjmQbCmbLt48ot7Zy49uPf6GvKCaBJhWcLJjDYndDBeNcHQjPFDzJ",
  "key2": "2aQB7qQkwc58QFB9JWLdnUmYTdJ4nbZCZfvwsZdwpXFScPJhVVhAWS5dyjZ9ux5zqP8UBuo1JiE1gMMnvwoJ4WwS",
  "key3": "4GeM5s9NpyTod8LJsEi8E2NEv34RYRJQMfJLWPyc5FB71eH6DZ6BShiaAJMe6nrbGqrRQt2GHux23eCEe56HudMv",
  "key4": "4THzLac9JHN2V5PYbU4TFshmPPoj7RgY7ZpRFAxRr9po9FJpuk9t2QoniNWN97KiDvY9WBvYvKpofMANcTDG1WaF",
  "key5": "4TDoUceEYZ8mJEjvMaau7xFgp3UHZiaMYjmGL148AjHusNRbCh9bdDPLHMSxRqTMe6srwBgWsACuJW7aZcbverSL",
  "key6": "X1pKiEyH1aMrju1QnT7bJE4tZBKCX4RQ6Ek6WvsuYaj3W93KN1vQFYQSyB3zwczXvRQT6mZ3x4akuwvaqdPghKy",
  "key7": "3D11e2XcCWYU4BCwmQP63bVfUH2rT4En8VQtfLjgpmeCyd45r3RzW5eF5EVNuWomgzGhxTh2oCtCR1Js9hoJrwMS",
  "key8": "58i3Fh27paZi2271hAJbxhXqtbn9j4k1516NdJWvnpw8J9tQ5RR5LrYZo9UHLT8Jx9H8NBSfaAJkeiBRpqghQhZU",
  "key9": "47k46b7D6bewTStVsKTFM9qBs8FJ56Qb5K6ZpoeJauVY6gRBtnAyyyUJWPxkwJ3ovLJrtzQMvEZpktwWmxdUSYvq",
  "key10": "5VSX4zATNoKQjgTuQajHTTzQjTFC2DaazBF53FNT1VBFbXru6U8rT1S6kvz5hwpE4MS7tgGmp7sgVx2aB7S7UsZR",
  "key11": "4ZxZiuapPHK9Up6sQoMpS2fqkPTXjvnH62D7nvGzRCESre5TTmZbjw1hVdWZmJ6c7d7VWhxjugxuznhppKeZ8L9G",
  "key12": "3mQJALVWU9WJhUw4oXCV9CdDMbXB7Q7Edk4HWNGhpJcp4hmUqD7dMTk2aaXvoUySEr9pyFtZnoPHY1bjo2xk6jUE",
  "key13": "4gKPFymqSTPwiXUtakxR8DwVemTr1fbxRxm8g9iWhRFawnVtVbQAzUFKqZ4V42GDi9bGjryTy1kq27Yd449cPvXZ",
  "key14": "4zu2uKFepmf6LeSxo7w7G7TqT5FWtKXGWneuDXbjBxYQjvCczNQ6UViWPVsJLUZXdzNC9JcDWSY31yEVG4gk2HLM",
  "key15": "48ajgE1e24q6fVqrznu9Nop5E7uWJzMq51E8knZGuP2GJFpbpgQxbJ4Y3eVGh5odN3pKfNpuYk4UisYcnkgc8ET2",
  "key16": "2se4d94rB1dBmmvV9LdezUVToBTucEWYzwH39zG7iEt4JpSGEHtRCJx6KMZCKaiq5fSPiKMP6MwzPu3sUHw8dnGK",
  "key17": "4FDnqMKMcGAfSHVvcrWpM9dcnBho776k1JSB7T1Ag2BMzycN9M3t4SeKwPXRSsojkyNQSyfMRw4o17VBuijAe93j",
  "key18": "4TS1Zew2dYUgQfcesxdjAcP3UxjEz3EJSPa2K2LzJBEA5TUuwEM8GkqDvbnLtBzDVyFysHs9XMgVSQWGwrHQV6Wy",
  "key19": "N7JodAKH2RVp2wPZZzrAfrw53fbyuJroWeCfr56MUVBFNee6sTxe2Wndnt7uqMxz3Sv8f6wZJH1JgLykyGYPPCm",
  "key20": "5EWvty9o33xm46xNq1re6dbL7u3i23R7BAYK8WYXwVoFfwTb6qXhTRnPs3xpDZ6nLdM8An98hnvSjHXqv6PZY4bR",
  "key21": "2JyX5T57U8uXbnHK8cYvn22o36HVoALbEueBNrq2JoLU967Adj2pFGXupB9s3raS6r7ft7o58ekNVCgJU97Zmnvo",
  "key22": "5dTDPhQqKfq7j4dcxXVW7mCE133L5oy8qTsnycmjG1QEWW2dC22S5GwJtk3JdneR4WjNBnxczCphbSJktbk5cqkG",
  "key23": "WcwbxDsM6nkyBfUcXzzUZfn1YMVUFtz8XZd3vNghBMSVv8Wa66ssnDEyxDcLvMC5wS6X6URPUyrXi6XagEaZQrY",
  "key24": "wxjpFNMQzrYVCZ1JApmHa3ftTr1NnZAZpDFmQG8smsDz5nAoZoXzch6UbBsjeFmLrJUv5h7UUshm4kV8LS3umhF",
  "key25": "49YJiowTSGqpAvbFK5TgzPWgTK4DSquGziMsJiBmdF9m6XYsDdE7yCTRNuMSnyd7vo81fWSt6SKJRhHcSWgiMp5H",
  "key26": "3Jt4HukZLw2Yp52VAxRhYHXvKRbUT3GA6brsCLZtun7FKEQXG8KgxWw7wdYoDm9bLi7HbD1Q88xB72goSChYP85f",
  "key27": "4AZLvCfuZfAYCyCsbu9cZzz9aR2ZJU7gkJDuGP7MRXXZQE3RKRN1k3cNiFG3GwGNmZKdaNLfy3nfauHi9QNSec8K",
  "key28": "34ZupQtgNAP3GASximTgUYWrTuxzqzAuwA4zo664gqKx6b6acjTQeS3nqrw9eWqP3hQsYTRNYQnUnpP2H55xCdaQ",
  "key29": "2YEpzvV3YqcUCa3Qx41hDwzyQFuSwMr8CR5xkrA2Q7AW2mm9ZQoBTyJwPd6Hh4TwVzKujBiMJojGSPWScvwNVfmy",
  "key30": "64SUZNexeQ6u8hMUhoWnoqMDwHbrqaFcTiqrohFWHj7fVFMGEBd5t4C6uze6pTozoMagsjMWF4noqtfoNzeZCKHq",
  "key31": "3hnyWBeKL344DE31wr8VCL1d8e2Vh76tQ36pMLRq9WN4EtwSvvZTsrNoY5utPHqSwPhwymfUeJjT6DJUweBhrjtY",
  "key32": "5obhkR2FBrFLypSCD7m8iUW5YGrcqEQyyu2U31DHEfp7vnweeefdGAnWPUs5ncrSP9gMjKrzqD7yysxdRW5oLjJJ",
  "key33": "2dAU2Rq4StpJSt7C7WnuLufzTsUo7JA4raakeCqRg4sbw55XAsJVThDAo9XHyjhNaQDKkrsRyBEvbGE69afhs825",
  "key34": "52UzB72whwm2ZmqicfqpGPCzyanMmCUmiNpthiEJLfSNoP3oEmD66jN3MBXSCujCDpg5rb3nWjfK1ETjpRbU37Y4",
  "key35": "5tDpY3pBC61smoUhfigimdR986G3RVLTmb9HFVBQSxZQnAUwxDFPfJA2toEDUzG4UqDqoXVjkJt3ZxV4N8deBKzc",
  "key36": "4pBkZNV886RDtarU7CnUzDF9iasERa5hKWFVus62gtNte72mCjUfbwyUb6eAN4MYVZsqK1oL9DWwiovoYtMGnMmC",
  "key37": "2MEWVrXq1KHpZmgviDgXigv1gZAFe9UNQR5EkneKRmy1AJzKgZfTdTuHkqvcUSWdpMdYpLBFrtjXTmM2ssqcvbrA",
  "key38": "4NWnGoi4KP7c475LErnneGoYtpxVP1Ha5pgmTk6xduZz1sWPjyStpJXKbvhG1Xz5DfGRDw8jyPF1z2P3UD5xxWPt",
  "key39": "2c5hgBsEoNefwYjyuia81UUz9q4DnrmChvcAJJiguwMcAtay1cxvXCQsUutJR6MrkxKfyGVvERcHmKf19pF2sHAM",
  "key40": "3oYQcPiyLUQenNPcrmaMxiyAGtKSDb4etV3mv1Y5moXtTAtRkiCZXCQt2cxWQnNhuVGzdDxkSzVTYjTzZqov5KM5",
  "key41": "56moCqcqZ8LzQwNtR6WoRHwEhjNQDTvscroKXkNdb8hgJGiCsEhkcs6J2e8SM6oAaXucE1gq2D8UeNrbDu8VQ52N",
  "key42": "4BgixjP6dCvQHRGLxsL1eGLhv6ZKf81MiV6MDrnbp1xPAhE8wtWFNisW8wLcwUiLQ5eZwoG82EbNvDDYZiNngxHb",
  "key43": "3UTpMGt7mEds3eR6tyA735Fr63bDunxCiZuA7UGbMfcpHr9w3eZHxqHj6SMF4y9SJr17cScMxz72rQCsFiqbaXLy",
  "key44": "5ztPCYyNnAFeRzMbHbiyXMZ2yBmbQ3zoVZmpvgBkQju6nk955A6j7Fav3Ncu61a7rNpQsEuzNpyLGYhou3j2rXWb",
  "key45": "4e9xBroTMtztakYiSG47uKqjuX4PA32AC7JW8HDFXiGUK5a1wpXSxEJq5QzUJZSZi8dfpzXqn85cqFah9pwrtkw2",
  "key46": "3RtsYV5V1YvQtWJo5B6oLtFQQBNyspjuLwfddnXNsU3DhMxmLgkcFgUqwCeDKm8Do3kPWsnKWZhY1dfvKBFWh6cy",
  "key47": "5Lt6FCgFLSM3ScTdovV3ZyWDTygRoDHkPMyEmQcyJqptMsLgLWRuqdQ9do4GLnCqpP6oP5KKdFZrmxa9fdGCtYbF"
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
