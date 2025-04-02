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
    "3RRvnzyyKh5WK2Gv7qjbvpjNAozMfwZZ1qiCS4pf45KuBBe4HKib2zQZrazpK8R8WQDgxHXbQx3ytWFBVcGtLugj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N67UGEG5QUfwRWPBvoDSWnzczXKDWW5PefoZJc52v8hgKmJzkJvziLNRgywvKycyP8ZmSRfRvSWi43ty2MZdGmt",
  "key1": "2MNhvWiiB3nj8MEmH4oMZG1qhRCxMytPRLjWvpkErwgvyxoSCuJqSjKtK2fa6UuytuDyTGCFVacE5K4PvvVD2UYH",
  "key2": "VHVc551nMjeSxTuHJ8QwP3nQ9F7LE5VjSgZuiPyQFHBbxfAK275RFRT9yczQ3aPu5DSV7aG9aTcVsLWzksuXhTo",
  "key3": "3ZgduegFPZD1kdhPQJH73WUpa16Aj7t5XEEALSVHeu7TMPUZPdTB3jpsjc5u3cWRMcuf8dCVbySLnLUJWBRdwG88",
  "key4": "2Z29HcKRwz3XB7xbZtQqsx5tHKhNsEW7hPn8Si1PC7qccXubwamyJ9mZ2n6dNTGq29BbeM2jVM5U77hxJj1AEdUX",
  "key5": "Jrx1FQdxspUPWUTemZCqWXPdGYJjerx5MwpxuZV3tKatqibHMnqNFMfc2gwbmiVzTMzwM87eADgFMXC8pdw7mSK",
  "key6": "3paV8DtjqRMszSF2yXyuhZEEzUiur2mcucKmjL41S2btscPYy6qXSGXuAqRDDo2urHk3uhvaet12wCJUfz1uE38W",
  "key7": "5qfDsCfUKsGwpkvQsbGD8x7JqSju8tifym96CYPCfikHMnWtemi8MQbZZd27zWG4mzmhKFUgZ67EUMh8Nozxce3i",
  "key8": "4H5vQ2ijfTyXoezQtEjYGN4iYrpz24xkfiFQP9MPq7KpM6gr2T4LFj2iNhcH9aQ7rtTc6bQNb2BzTY6Uo4SqnLnp",
  "key9": "2z5Z1PzqJ4TeHkRv2XYbUV1qubPcYzd3MFCqTQFDHXDhLq1KZdSujZSDbgEGD1e14AnWhn6H6WFNgzKCnwuShF1R",
  "key10": "4NLjpS2rsCF8Cw32UWVDj8DwqDZy3wVMGsFGnLeVn9gkF1Zb7DWowMaFdprkw46kSBVcugPZCbo55tHmKTr42tev",
  "key11": "22LDpy824kzL1E3ZjWYADKZTXBZwfTBnNuM35BUTsZXxXNvpzqpL6CZxNJpzBQWu1KMeanvcSBopRw6e7dEkqr7Q",
  "key12": "aBXFoFvQYaitr6MrufWihyGdqUDSgRMxFNhBzY3knQ92BQEMLyTYK3poBMTdtWS4PzUBbNWeYLjC3mbCdMWhbZ3",
  "key13": "LuaY4JGUWVeWeojrBHJ8zX3qtNfb85Xhws9xAHSJbWc55zWL5ccvh2vqWSD3VXzeu1sgqB1WQUmPL34i7pzdtbp",
  "key14": "2diUf77unf2doutEQB3G9ZuXFFWwLxPTZRYeFaT1weK29vS1sJTGVEWj8YdaexUziHN673ewZRqDt3jHk3Rys9yo",
  "key15": "4h8eBsvYVx6Hu44otRjBj76nNCb5NsiT2qbtKUsQfW8VPaWZoaaF5pZrCSk8iLokm6v9h9F7xua5ndWVukhRsq2M",
  "key16": "5ekvveQnxq4zquZ7oncLhCpft9uVvJdPjEErd1vQk4qrgLytZdnH18FNNdJEC3FfmbkGe6kEuJP5GVU2ayF2AYom",
  "key17": "5EVr7gcxEem7AEqgKYYtTFFGsYKVCoAmtD4rXSnneDLKu2hRLjaQNRgQgZRJCbe4ti5MoztqX7yLdDt14aWQVYM",
  "key18": "3B54qD5rAwiYjVS8hT6o3PEavMZLSgUZ6F7Y8LtYYBi5VPbTi6Ydddgkzvq5JFzBndXab15gW6Hg8yP1gLyScmFy",
  "key19": "vtqy5bTVpvHhR9s67qY6azj2Zw3zjisr5JQ8L7UuAekACnMv25mvPv2hbHXvetr8rrYhT11RnnCF4YJrpSE1DaC",
  "key20": "LtQSWoe7cD4fkGWczyrG3kE6s5vWpBytUjCQboVvC8LxQcXFwa8PLWDFtaEZrMGGwRKayboAJKxHy2b8gmexC2m",
  "key21": "Vz8VTh9ZuQgu5gcmUWihLkyRqWd7oP4Pd544yUHyQ6KhmV281BxtzSW1UPVtMCtABSh1yGDnPcaV62qFvFzKtuo",
  "key22": "7ckAyY1WJGtMZrr71JrVP5MqfqDtA85UFH2pzLKmdwCgfMmfaHoAtizakNJPEw7X1Myw3zTD6Htysu3H8nrNE2T",
  "key23": "2uTCd4mPKi3ztbGWZ6fiCJbRnrw8QTa8HU6L15XhLzQ5zpb8gqbiBGsT6U2t1pc3WETeXJkEfAJwQuSQ8kuEeodw",
  "key24": "2REWQ1a52uJ5rdJjXNp8S9BZvaXUzoFmxNELH3hhj6f5mN6JdYPrhrNQDq5KgTiJce7poaD6YURnWJqrCT2oSi3C",
  "key25": "2j4FqNyFkQztG581J3VJ6W8TbwHPPhvfAuVpBXbKjfd2S5z2o3R4pby7mJTUdhxCKgWEsoCJtPtEGEtPJQ8CBfn8",
  "key26": "4wjX7me9y9Fv1HtN5KqJ7zVDgpqP3YedbtXHZhQxhZhYmeDU3Dpmne92RFkNimfDooNKpwGqYVHyohc8k18LmSma",
  "key27": "61oFAuxpbPoUdomkJhbgNiRrD4m2uKhaZbZqBTmfP1NrdXMobwjQ4jbshMmn79iK9bYqncXP9JbqQrKWCZuWdhe9",
  "key28": "qBqCnfDFkQF44oJRX5X2Sow927F2GZwB1EpthU7FS8BQxxSBL6V1qCeSFuikQdmRJXoMRXeAPEwvVekGj6A4net",
  "key29": "4NGCDFv2QpAJW2aPgMuvpoxwd7WUoBHF7xvnoh2PCX3X4HQFg3EEQEvUbP6HqRuhYP3wpawBSACehZbgu3mMQDcU",
  "key30": "3f4fnAyc7cEXV3ZrSCkECZYCShhtwdhDFcRhC1BsK6LsZLtAePCbtYPnSci8Q1bt432NcnYJYdeTZXap42R4QuSA",
  "key31": "3U2goF1RUUsr2X4G32ZV94VzjUU7VJxRsEgHmU7Vb5AMyaBc7Ph3KGQyFpuyJ85Nvs79oe9msyD4s1YYk5u7Q5ry",
  "key32": "yLkYsZk5ptLwZH3wR2FYEfDGPUfh2Hv2ovxZvu7UhxbJhSBL4F2iUAVdRTU71BjCmrDwocA78qoSM1rwHCA6diD",
  "key33": "PhTSCGmYqeLqZAi9Giz4SorjKGdwbJkvyXcgoc97m21TuAi99nfB1Nq68mLHk9mNMt53eNxSVJCJgKCUrGLy5ye",
  "key34": "y6LpZVVggMBKa3WpjCfs6DECmZHfpefZjdLCMiy7pdMB8RSS59T1KX8zy1xPbAa4ikUbwG6c9Pd3aZq99dpaCEK",
  "key35": "3vxKQA6EPJe1fkjj9mjWCFV8ujW9WBGVdpyAcYy1urxDT52BpWJAZfZiadEL4SDWASqDnNq3gHdZi5sHgNLYGMZ4",
  "key36": "236hjGYaKkiWGra5mps5CK5Wm8rXjZPAM1VKhYCwC3GycULScDxasHrVVvy6RhM3vhp4CM7v9ScD3rUse7zWvfct",
  "key37": "GYFs7pKywK9xBM4easFoaqzP3f39uGArpUsuRsyv9HjFuoTYHoUQQqJ6LVafGntjhdReEwGKhWeqqvwGB86GQ4K",
  "key38": "4Q4VdwQXeeBkFouTHoVSxT9dJZBP2wAxVg9YDUR2RU3gGYN5QytnK3kshXCq1Q8jcwv9CFridj9A9C2uHbfGctK2",
  "key39": "23PrTecR2ru9jF12MX7AFVvAve3TK84Ahfxj2mP6c5SZjNuUvGYaTBAUpMHLvc3EwNHdwcmHsPuNGZjwfrkf2nMQ",
  "key40": "2UrrTK7Kh6GFYibeseEkspYz2bA6RWKcGeeaXdyLb5Ut7PaKN7dwLNERYVvSgnTUiBL8Er25TWkyU2fJAqmk7tuA",
  "key41": "4ZhFRxBz63AdDfTzhfAADuwMb81Bgd6BZ5zKuERidksVmVJ8eFX8K1zz82Tmra4YxCWXZpeyusp2ZdHesapD5cSb",
  "key42": "UNdwCzummjFuVGn8mJhNHwTkZjqPgh3vvnbCnkxLD5qmxGTQsAfABuo4AptnbsMUvJKs4whwRYPr5UpX3jU5xCf",
  "key43": "3jVzoNH3ShVG1xgyd2yAzamKgmaJBqbRduw1RbgmD2Qurq4inVynqLLTsnyvWdQ5mDHmcYHMmwDZ1474WcD1gkcj",
  "key44": "4hwrwFBFHCPfPX49hG2F1rwd9PSpo6f9QaZnzChsFyga8mRdvGipNu9EwB8y3EuzW5r8xEWggGbjziY9R47NJXiw",
  "key45": "Ko46HURsww4rD55y53kepkEVNRkdyQNVpbQ9mL9SXQwHmppZ1AJY8k7HzfnWWHTAtRYFvt98JTbYfuGmMPAvp9V",
  "key46": "of28gzRvzRwYFeWYcwQZvBiAqMLaMJKJrnU2wwxgedgEHLG1hvVFExfGaq9DN7Am2YfxH5eSHC3isnN5PK326Uf"
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
