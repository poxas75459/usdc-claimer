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
    "3XLrsyKDJbGpLAMG81vN7Q4EJdUB2eEJErm1NbrDf4eimuzQtomgurpSWPTkswM4NxpkJykQUV6Q45nti4wFVD34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbXSf1XMiQB2DreYe4g7G6JEu86G8NEBzeaNpTsWZ1Euq14HCBFi5pjpPszijQZDz6pCxsty9HEo9oX1enodRRr",
  "key1": "61uB1G6wQHZWsuHrRr2VKii3upyVY4tAuYnuVstjgBD1PFWU9eBXRnyjwh4yVpVVsBYy4Q4DrsNZQVxEGHsRHLwe",
  "key2": "vHSuu7Fe7cyLUhx1PMRdgA3WgSA7yeo6HK3ZCt9gZpXpXWqG3yV3bjVJvZRafCHQ8DZfEm3unSCXHusyppbwR34",
  "key3": "5bagyfV7DXyAeYPobrr11SKsYnvopjJENcRJV8tAskCujHdoLh43ZnsHEAx82EseZ1zZUN9FNqYX1pogueh8egUU",
  "key4": "5n32eaakaN5KHGyy8aCvFdko53WPpA4SPBu2hVDBjtv4wqwHwFeZXhhgtTfpC9uNnoAxW3c4Xq8F5pBzHy7xRiie",
  "key5": "3oncgMP3C4Kp5Hn9ctSLWn74pN3mvdvvkpNZGaxuiUpoh2E2bvjo4ox6nDYnfmVa77VNpfn1Xc3fSCHfwBDm8pZb",
  "key6": "3eRwffM4Wg6QaN2swcS6Rfr7Fs9rJ8UnFaEdNqDg9qjDG4eXuChDNcvyEumT98t6Snj1vPBhbU1MQ8HHgz2Dt1Aa",
  "key7": "5RcmAfyVmMxqGJzGp49T2kgTK6vDMmDL64z6W4Qj2pXf1HWVxWAGQkFunwgKW9BmvvnEimdfFtL8tTwmPzUdYjmG",
  "key8": "2LBhtMDVwva1ziDQQZAYyML5JsVLo8zVsVrArDZ5h5qL4hu2oNCFkMvPZaENwvddy1f6iUGgBrSJdJrncma3Xzov",
  "key9": "4PsUPtMta4GYq6H1uPHjhLiqz4QR9MKDkCyD7sb7nd1xDmiAnMm37wNGQThx68D1U3wRiKHbw8jsTvd4VguKxg27",
  "key10": "4f1Et6nhyuipmukqNhGLf26ZiraNc2Lww8RueFjKjjDVWULu5rQ3MSrYxQWybgZTaYmtDBGyrGkSqiTrEBZrDLZy",
  "key11": "4AQZbXa1ZtMtxUyVa8jmZT3gHt6XUxcFjwYxxJjc8UUuog7zsiYA5PYEY6reCHwBte6iXcrQKAVDHSoJZqH9eiqV",
  "key12": "23WY8jjE2hoKo4Ad8G7MqqiUWDurwgHsGsAo7KdCZQTje8beUVFJmuGKdJqqonkSE9AfoWhWaR2TQkjWGrsoXiVE",
  "key13": "5HiV9Px3tnTu4LiJyFvsvjYtLyWZQXA9cXUbCXo4PCbxsN6TtptdyV6LHwkPhboMDPXTqXxpUKBTwcNJd3tRSKUc",
  "key14": "5b21g9z5kEiS9wGR8P24BKEJ1qqmmT6d4hjib1nNUN8r37ssyraWY5toktdn6BLqqQyDNBcjwy2FnHFNCXKSFQvZ",
  "key15": "4kvHAx6df9RaVG4YfdfivhmUBDFo7Pbijh3W2jnsvREzccZcWBRXyyi6ZoZnHY6pbdpuXwuti7q4aRuY3djgVMPX",
  "key16": "4jBqNZkFvULJfbzRwxnJiMtqguEtZ1PnKncYtdNC46njPTQ1D7oidK1zmxNH3Hgqncd1tpDV8HesqAznjCBhPoGn",
  "key17": "4vyhTdccnYbVkghYWRwRBf66fUQPDWr1uvJUgfJfzjCiFDiTyVKt71ieSKG6zw3ziPpaBboqXVnKFoY1cbGNFpQT",
  "key18": "sgk8gQqahfHmmXp7WDB6QPHeUV8jywKuy6AcrwrqGUnLH3JPiABoJX7VWYPfLDopMLYLWKN27ZDzE3iBTaq5fBp",
  "key19": "4jWJg53Eiy7BRtqRzHhUZgdQBihWmZny95L9qxoUh7VNu9bdYgUwheyFjA4x6XHW9e3bB6PSrXxWZo5MqnDBbRjD",
  "key20": "4QS9JafgxhSD2QvBF7sbsyQCnvR3GfExietNkQQf1x9vKj4MKLmL3NFCqNrM4uqb3pYhNejLBGerkFSQH5h8t5ub",
  "key21": "CcusPucjogBHxrYF5o3istB8CnfeCGMtMFTLh1ZSHHExSGTgNysPfn11aX4vcefNdqEigbB88yoc5s4UmY95RrR",
  "key22": "2xedUD9B4BYW147Gk9CKGS2vjmdkuFwGnTmzNMnfVoTP1E4ncq3sjgqxXze3GvuDJKk53E8RervgzieRqxnwE4sp",
  "key23": "hEqWm2om3hGcv1p5DxNK17WTfRXCvtVhP1PExKwzVb4XYjJKGCdGA2bpymkH9oSHRveB6NzsNY1sRR5maAPh11m",
  "key24": "5nfx8GnwMBiMfGaVGUyvLBEgXDK3acU1RF1muZgJjKan9W8pP5jMAdBCkKBkmTpzCY2akVpAfNippnkwU7W6AwzF",
  "key25": "4d9R6tQsQDHJw5vGEaFJyeSBZMaaHRxpVryFxgUUpsg57sHwz6DfcDh3LxBbKNKm6aR5nbFb8jtx8LvQeqF4qub8",
  "key26": "3VzfztoEYKzrXavVp5GzBR7hkUtrBdQgDzpHzSMvgNoi5stQomLkuCst6sHKDbYG2WWij2stVdSBFo4N3jMQjku3",
  "key27": "5u4uVwYNSZTgjUCzB2sGEmPCgCoxD8NcJ4Dn3zUZ8unhG5SDzV68BY8F937jGZ3R6BLZcg629VoYn2RtwdcWPjuh",
  "key28": "5fwuWXLcXswZtoEq7u4a2AoZ88GUuhXJYNjvHpvrRWLAnBcicSrx2VqDV9QFoHMebER9WWkieYBaWSoJq2kvpc2B",
  "key29": "2h5j9t1CtoSN4JF14HU5TsA4LdNK6YGasphZRdmJRXkPRmHq4jWBFfo8U1qh75wNyP9rxb7aymJrhE35XQPNHVpB",
  "key30": "5F7ChrWXcFbCgf48TkNg9deqX6DuCjmf5TuEU4D45CL8bDWDEg8EwYqXvAGXgoVdw4HtZvHWzai16t3yx4hEfgym",
  "key31": "5wZmRkFa2dUfdSysjnu3LZh4xMoL2919PLA81T1QhiwQHeBSiN5qsWghDG5GhBzzm87i6C83G6RvRK8KdFz7oUCt",
  "key32": "2CEpw7BWXoa8u2YBV4zMUuURShTHfBJuuQtALNYaLCjDxSBL97XqE47fhvQctUi5g1Z9qYqJy6sUvBifTAUXtssE",
  "key33": "2rei43hnNiF9KFBiXC2Bd4YbLdB57MiSrf8k8BNs4PqnBK32L12Zwz96DaAe8D74eCnxJAwhznPA6g9nydhjdQN8",
  "key34": "4ZK4YaUa7qwDXUNKgfyDY6DG7A3XWh6UitD7V2qqhp5y7kD8dscJNxv5hXeAdRPpBsL8DayJVCjsPs1mNLXviim6",
  "key35": "3BJNfwTr3WyDHJgoFHdEe8Edam8jyXRF6m8Uv2PG88jryeXRWpeJ54AZUG4VGcMAW47Jabb8DQmf1ghHw2AiCrpK",
  "key36": "A2XYf2qjvD4TdqhFcS1mBaXNroHcAsfsnuzXpR4xxQME1z4Higc1oKQAnWnydcykGyPcVcKhvMXvWZ8TiDsndBJ",
  "key37": "3sg5LEbfnEHFrATTX3wctQHLPkDNDvNRa9FnwzHocRi9RW18kUAZ3fMRF1hzXEws9NvLqmWz1sa9NBjADNT8x6YY",
  "key38": "3WTyKT8XsLA28L2Xfzbaj3nA48F1gZynQFcznaLz9J2VQeHF4QEPS3XHKHT7LRSHxucQq36735iMN8uV49CoCkdt",
  "key39": "BHzXbfw4qVvMQs2ugkxagoGsN2BpQJ1oD9L9SHGB2KkMJceiPJdQrMhuPYXzAswb1ApVYdjgzpGmzo4tE3QWi4f",
  "key40": "2Ts8KhGmRF2gCaeVay8asG3HAZ1QVMWrhAU9NLXCguWhLcQSkTsK5idmJabxsjGjjJL2EFHoV7rX63DnDjHRDBxb",
  "key41": "5h2Zn9EPyzLPXxpkTFWQDqtUV7zRwvVte6wZ5bfz2LQ9mvUGBnK1EWyWFEmSRRiYXV9TMKmq7zooQhEWubw8mmXa",
  "key42": "5muyXRn6MgeupD3e2EunfHG4Fz34Mo1RSkn9ChHHYCxqe6tvmYDBGn5vBNhbm74R45L9LSUGwXpttCA5J1pskWoM"
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
