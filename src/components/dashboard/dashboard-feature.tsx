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
    "QAN2JY1yxVjUywanG3MtmymjyN9NHebRjaPa2aDN2enLVSpxYqDSpPUG7bru8v5HaSBYB3BHxG3A9zpnHRfUaee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDP2X71XYeN3Xvdan5dNX6K5meAxmSXx1p95FW9xyycSwNRrswMCrbhcAbp9PDgcXtPzrQJ9sFuNfVkAeYbnqMD",
  "key1": "3FG76ZseoeishCBnRLBvAAg2Qg9XuC7Z9R81yLqT2SK57aN3Si5ombuVihF8CZWpWfCFPqXDsPm67nuXBU9SGaWX",
  "key2": "6qMq2hyqhbxHf1MjfvQepvNy6ja9V9cp1jXYw1J8gyu8FrmLi2g8VZVXb73oHGpdBd9vmdprKRtJKLySm1CSvzp",
  "key3": "4rAUqWJ6P4Rdtnca5kuZkDTY8NBRCZxbWfbVuRaQXmojFs7L9KLds1xRwCx8i5JuiTbsYpiVLrypVnFJ5C3ELvZE",
  "key4": "2yhfBiGV6CzdCXRpm6sq9Y6TqpvcoTZnKE8zu8gMG8ZTsVeUTLUGgqfp2GFBQJ5extKRJqEM2LgHidbphM2v5Hzi",
  "key5": "41F65ERsWsCemFkKYWMQGcqgsxdrdmKPKfhpbpnsbjqzEQLjJAp2VPX4mT55MvVxGwUP5SsG5pTn84oXAzWnEXTK",
  "key6": "5b4AzroEieZqrfyfzsAtkzqer1YFR3JQYJbXhtXu1TAoatmHLXj5x9rUYBnHvrtu8xVLkhphoXUyir1GvTLZ3NGZ",
  "key7": "2XtqMBVAtSuwfRTXzwpHGCgDfzTsBatEd7ojAJ4fA4m6ENGyhKyQXfA3fSkXEbvwt7NYZbuSr2nzMD2gUazJwsVN",
  "key8": "3Q1mvYNaA8iCtMyK4TLefBZEteezDc8NDSGegBAJNPPGmg4xzh3fnxLpK3p7i6Xr9Gcmr6v8AWEfYrTGpQ7Kq1G2",
  "key9": "5cZmX9WN5QsQCkTfq2NFm7p8kq2vsuYUkE4cW686cYJDX4Vp8gyDoVM58AAsMs5vk15VqTffEdY6yCSUPdU4QfZK",
  "key10": "5XarRi7cDJNUgGb4fVKvb7P8C3fVXPeBZEEg2Zg5LDop1oLMhg8jhs2tY7YNtd1wnaAdtvh5gZpowLQp7c8c9bkD",
  "key11": "3PFUTuNoFqh3X2pqmE4r43qNzBvge8XtMxckebcvMU6duUp9C8EkxMB3BTj33fSp2bNMChPpGe1ebGJLC3FPTvZS",
  "key12": "4vCdNcjPMz2WbgF86Ww1WENdyRBpXyveMXqbGn8THKWg1rAxBXjt7fQJGcs6iDjZi1xPFqpCaS94JqdZteGFUoyB",
  "key13": "5q8KAbZuHx9ZrRbxYgzQod4oDf6un9weV3pLy4NYUAEqEgmsm1XoKg8ASuNacnTJSNkcL6UsB1efakZfSmHHKADU",
  "key14": "hhyeMeMjfcPuDAXEsueymBshQEiJgx2KqnZ39oCnYHBfo1tFktPXCLzWeV7k3D42scJgzFFtNSc9mgSaf8vxbLC",
  "key15": "5F9Px2inFzHNiRYtNW3cQEpJnJFDqhGpr6HvXeDr7A3SvRjTJmjKtVDJoS3HFHnrKKU9tnfkDkBauDAF2i6EPHcL",
  "key16": "2FvaCMLPftD7jiWRAaTWNw4cdvW1TSxtmCwqzND7i7v6yF4wkYgzDdRkHUjHFTbAR2PPpzP7K5xtuAx2gEBA4ZnX",
  "key17": "KgPzbNVN1BmYQEeQWi5xiUZ8UUBKuNuogcsMGfgWqWWMwpUdaDb7FCtEsPySyfDceoxd9i9HHSM1nbMDNvwHpE8",
  "key18": "5qrvcVJ35HCTcGjTvE1DoxgvXmvE4heujgTSeRro8mThUkgpodXgPkMCM3UTKDb1n9cCtchvQ4MkaoKepKpBbSjh",
  "key19": "VsGFuXQyb1KtKirqQGFfSejahFQtEprYSEcGujQyinQanUF61vZC1vDiFuwicpC6Zg49Y9HCUVayfp8sZ9tTMUG",
  "key20": "4SNCBxssZmwWwkZBCPzkK8k7Agso7dEY487TkQHktpn7RMVnGgnjTs5xQeHApRNqipAyXkuosntvHq2vnjxw5tfE",
  "key21": "4iy8QBiHDJTuLRqoh3RKXTWmerWLX2argTjWnFyXk8Dy9UEmLy8uFtWodQ4jusoH5nUxHD82C5EcppPfdcRTWjxc",
  "key22": "ax5XaPpyvdosJRN9KKU9ffi5Hd6f1jXA1Qzq9qB3Cns2H9nnr6dkmres7bxwYPTTzrcYhhRTRWKcszMCkVhnCYm",
  "key23": "VqPqLU7io8eN8sMRRm6K7JXQkpvRhXcXD7RcMjx7ookmZc5pP8vQ98odNajMm6aAwNfpeQugfUm5ov96awoERU6",
  "key24": "4UCG5tGKtVMc42TQCEa1LAFHXHkDXsqwSznqKK91PghWyAgWSLZ3RgP2eUNQub5CXNtWJbzcZNToq8hU6QwrB3aW",
  "key25": "5TLCcze3F8uD353RGftypXTtMVYbg6MPa5dkWrKCoBA66kmGabjnpva4irKzdESbDPPhbeYjVZ4mqA9spqg5CHEt",
  "key26": "hcwacu2jn5FQDsiV8rnDd7m7bRbQeXXYugR6uijj9HPdGVNSZYfybZWJeVvi8jYpkB8hYmR8hWcY2hfK9XsQjLX",
  "key27": "7jWPtLDZaUfAjheNsw5GdfuKzc5wN78sVeSWwH7KSEQdUMm1A6EXy7wVLTqE6reRWe5o4iSHPPDsU3y9DWNBFEX",
  "key28": "5kK7i3KSDzCukiTgqBQ5ijt1j5NLYkAHLMPHtLev4omGmA9Z3ujSxvyiyRM9FdqvmaaVyj7CG9GRWVHesGrhnnSZ",
  "key29": "3u78Lb2DVH5tsEiJUJXXCxct6GR1wqzezScE5w46KNoehPZ8EBvb2AQMQqRLTgd28JEJiGuG97xtvpZGqYE32mvX",
  "key30": "5539rG2JALUdUKSZRLAVJcHL7r6VY5XdW3QJK539zwYX2s3tg4nPwi8B3X4ZAd5EqatUbR81mWheKFf8QFDoTfsM",
  "key31": "o8ZhhXQyGag8Xj93QgqyLTCgH2iBMR9vJMkNiKGVtaGXM6NcYm141WVajN1LwVkopMgT5RcyEM3SwSr58WEyAPE",
  "key32": "3qx5sjJKufKPhCaFsgxuCaaxK1GnHDLDZFFxhXPGyTgM3bbQ9jVEnqW78Wrf9bBFVeZBYF478knM12SpvvtYiXHy",
  "key33": "3rbVABf47nSAKbMCTswMZNrNBtc96BwhpkJ9YV5rwBbNuiqxm9dNv9HDCHEibhm3sRVset9kNUax9h9FT2C45Kic",
  "key34": "24gi97gZoJnz1DSQcWdEavR1ioyM5XB41rqKe5oV5etEEXAtX1bHDcXhfV1hS8Do2LcUeydncPPAbSxYo1cqVMNn",
  "key35": "5QtnAL6V12XGsRY3ASUnY3Uy9JwB4QbB5qsUGuaKZYepgUW3mMcxQpRdUzjuVLkVWLRiRiXDxtTukGo4E5awJtzQ",
  "key36": "2g6Tafr4wFyzXWkRiQJ81wo7a419upZW38ZdDfn3VaFC2rZ14vJe2C4R54ungvQ4S18zu58Kq2YxYZGrYPj3zEPk",
  "key37": "LRWywgiz832ZNNeJo81TSCdbjLkGB2somocYtT33pDdRQ6C3R593DZZnpFohPqNLBd2S57VjYg8bDAs5b2k4ZTC",
  "key38": "3wgWNyFaNvJwbhXuBTjJaMrYW46vCyjgMNnodP4Jo1iexPbH3tHusWoGqbipFEVT6QGkaAnRKrDMMcRSoWSmqeMp",
  "key39": "GKfPfh7LcmYVxgWBvbyT9HS3R8K449t6qaNjZj7NMfQiNJvtWPUQUTWjYTqtseE1D8eZt7P3MBvaegmvt4SmzVz",
  "key40": "M5FZa9qx1ejYav8wnwwwHsxqWXcjTaNn5sVcqo8tWuPEDucWiYEmomi7hXMN3EH2ySBAQk6fEgdfqZbUjPtCUEp",
  "key41": "3KnF3rLtdDY9HJXzmiPZ6sKa1gXazqTR61PT3QLWLs9yNeZmEjfqZapfNRzo8qKEHdEQ7EtFcbzGjipNqSm6oFHj",
  "key42": "2NS2zMKmQMNoKEMkd3N3vzQqjdB4qR7tpGYzy5vQ6fYXFqaD1iQQvbL3A2AiU7fNnX9z8sCZ7YHUoSPP1rxb7M6n",
  "key43": "4UXneyK6x4gSfFejvv9rWkhh66MXKRSevmo6Ke4gNyBsqyKbVxAPhUiEYQCHUcoDRtfjs2c2MKNvB3aQWfKgj2ZJ",
  "key44": "5o9c718viVx5WkqiDaQ45awyLcSMFxi71NVyHn2Z94hY3vTeBJqzRDNPRxua55eHiDEL29vxFwQU8wMpz7JjpzmU",
  "key45": "4x5WGDDEKHntYD3yJ3ypt85B1QYmDpuWuk9k9sfCbXpiPSALGviWm3x8UydWsvvzFQKGBwBnCikjAPVMUxb6mXv9"
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
