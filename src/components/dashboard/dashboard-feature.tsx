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
    "63tmtAK2skMZZMcm7hkrWZcPzWGtr9VeaihszXLCjQBVJMuiabPwRsb7QmSHDh3KutR1vnUQCZs79okKDsnPKHRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MFHddYWPZTVF3AqSjERFLPiMgMVV74w2imxUVepRjbAkXhCpLkABodN8PRt9euExXvUKrcy4xBdMVE2yjC7jdn4",
  "key1": "3pGPH1mucTfBC9ZsxrQGRi78WU3iyLoWnanwivoCCP4fPrD1eGZHD36oEmWhdaDVUYi51TqYvE1TfSt1bGUV51Ks",
  "key2": "5UEbXQbSTE9BzmVUFCqRtqEEeSWTXsQaFW4TRkBx4NAYRzGSun4WjCnWUJQRJjdTDDv7judmUzcNjw3LZnPLHo1s",
  "key3": "3xss8JpodhHtHuTK3z6CXwE2nLX5RLomw5ZpHiYRJwtmBMU7JUCXvrZrGU2rhQejEQ2M4h9cptmAFe5KcUDPspR5",
  "key4": "6VBrKguUAGBS4SFNJtcs7tGkifbnQDd6q8bdqHVGNEKeCNmTCCfBcV9HCZbRSGYhQ3bZLwgZkks65tPFx8JQjXP",
  "key5": "33sa3KfA6JByXcVfaqvsgrYD3bXsfyGnQ2RuBipvE76DmyrD5c6sw2iNLdGBd82GoumTxgC8hH6CGZrRpqveNwVZ",
  "key6": "2oaFzFH3K2fuLd4cZNDZDBBjhUrQq9zmrKgXKn23GkQLWQGstpKhrbDibms6zAW3LmAf9Ek3SLg85E8JqEcSjNKb",
  "key7": "44HiBER6YoYYSexBXavr2NwpZc7tFjTJZ6Ptw1mPhBj7iXwoMZKvVhAaYGmoAte8QJGtVaCrygKZJsn6XSMvzrTo",
  "key8": "5dacR6HjjXi1YUZMESAATSLppPC5JQEsafki6gGBFGsUrRDvTBd8gisPMYr6LdswGNEkzCTyaYDGDf7ZDy7kg2en",
  "key9": "66iEdVGwug1ivQnZqooZzMxkJddDRkAc44j4GyZWBYcjRripNbCcHLigjKWoycy8QiCxko9ZqEbiPdBgXJHAiBif",
  "key10": "62rtkdvp9GqerHk8NAZ9P6r7zAnsDcu7KWqwjoWju1wfTvb3vcZKRTSKDuRnsE2AmGPxBkvoLevPuuicp5Agz31k",
  "key11": "4e5mV6nVim8vNdJqwJY6rYtwtwtDaX2Ku7ZVgqMAZNkYmpjoUeL16n3aeazLYWdbJz2airzC1n3ga58DcqAFhbt9",
  "key12": "1nu5G5FbWWVEb9WQtcGfZx2YKws1MPBa8Ga5Ciw1EJc4otf1uF5HdpLfMbbNVbUdpbQLCoH5JZtF6Z8UsHjbrXn",
  "key13": "5JbA6mH1J6wmJqnKjroTn6q7zurEE1VQjue8ZinszX7wuxUdh6Wt62JUYdjnVS6rEXvDRSLmHdMiFFribp5kMfxc",
  "key14": "4rzDDWQW2uYB94g9iPgtJuUHXYppuruzuXxSbiwvtJGUjhEjk6u7UUqVV1LwB9GZaibhc8Fzq9Mp4gtJw4E6ccsA",
  "key15": "4QTdnhVFCLqrZPFcWgTXy9dHC1eFWGZNfgqKeKCiz4gYk1LDv6hJMJboZUbZ9Hz1xBeAwiQZDg212WWV6afA75Gk",
  "key16": "trcicYHA4Cpozwc9gnBo5azPLwzDMtbwbW2vmixdqAnsTU8wp6Rv4wu7jbmbpSc6jBU8HreYtUsAVeHrfZ2CdQW",
  "key17": "25dLi551P3rtBNeJrpy4oR8bDYBVM4RutmFAPDiP6c4iF7ztatHBPAP9cp51s3raLtRhoNhNGKbBEkRXJKRL6FZg",
  "key18": "57QdspZuFv2kE9X8qKJUDh3uGiPpRLYBYTGGywmEkMuRBxpj2DE7QFYWUYZhZghLDVK5DMeWL2NatreveAjoCYj4",
  "key19": "qX1zzmgCs6LVp8HE5XhjvtpfhZnodW5JhCo6zzV585KVYpKARvihC7nkWq1bTg7PQTPvz996VYH74WACHgnjRi6",
  "key20": "5Uj6cVHPXSE2hXxzfvcC5KxaGwAk6UahZa9chLrQSqGkcRjKPk4Na5pyTzoUcKSPxFc1n9hs3cLmkcruHTdtUePf",
  "key21": "3oY8mXduaTv9ui6JTDG5Dphfsi9pZmJYaUVASk4i8k6dTXHdNASdn4Pa47fZ7GvkyJXkrTqjFLZdXoheubneS4aE",
  "key22": "5pRPaiATJVKyJYnTFECdiDn7VX6LDRbELemocW7VFob39q7wjtFjnKAxEvpFbmL7m81aEfGSyxzMN2MmFV14wHu9",
  "key23": "4rY7WUCG8DkpTo6P2reuJja2xTdSgmE8cnaa8VD8orqgRtVVJph3bGBqbceDxGS1pnnmNnjWxKaM35yRerkucdxG",
  "key24": "5zQUaSFxqCFSHNmiFXZK8mSnvKwVfREdqzTbiXhf1bKsPacy2TKwdW8hmNEVikuCpfwFy7su913Ywa9eFc8MsG6J",
  "key25": "3fAesmgSctFAfsFWp2E3vfivvGQr1F3RpLvhGQ4HsA5VTSJJwYKsJ7cVpQiPfFEs13jNLDyuqeELJCPdxZqrMJLV",
  "key26": "2rJPJBQqTcBxU22QZBdqonFs17oUBo8mm4rMyFxfTAekDL9GBe4YwNiKeRC4jHBTqkx4FaWiLyPEqeuPb9Gc1RsZ",
  "key27": "48KJsD5Z76EoFaE3CoodyFVUFZjn7AddHwGNmXz3iCPCFSTWY9Z1nwZKSCZMPHV1qifvsdyV4mHgWXfffXJnT26N",
  "key28": "bVQo2QfUoPpxPy9XqLRdQFDMWAVM4JU9vsTb4YUxj4FbpsV72Rtj3hzhRsxK7LVHSyu4r2JbpWYEPx7tVfGAwPH",
  "key29": "5HEuKqUwcSztRBggZEGsAEdTnWN9g1GMqR7eMLoo2HB9QJPMyb1rycYM9V7j8WH64LySygXi7hNU5qBPC1QRntJ8",
  "key30": "3sVGsABBtmteY8p5Ba1LmdCNo76yRhwaEGDVBunsxD26TpZo4bmX2wTocVHrG6s7NHu3tNBfMt8RsmMjeoLp2pXh",
  "key31": "YJrBSJ79SRC94gMiDtiPeE576KuLyxzDY8N5E3RuRNwGDQqHLgfedCUioXFEJ8Rx7CiGHnjf2K1XYedjBwXBNVp",
  "key32": "2Yv4mE3Gd9NLgvDn9TENgrz9G1UuLHhZWfumiP2nFTPb8jx8pig339VQEyWhoXGPeeoqUCpYyLi42jqKyydiHLT8",
  "key33": "y78Se868hRsZk879chtCMDhBZkGgoNidaPiWZUHXnwLx3KwFkr64PPgopSPBULSEKR4RxtqeAnBFTTK2nd89U1d",
  "key34": "66mWSUFqH1TsGP3agzTS84L49pmMLqkbkjWLYKStu73G7xxFHLwzEBN1qCFjtFWhWduHniyb9RSqCv2yYovcuC6z",
  "key35": "3WPZqU9HU7Sv4LxdMQoXE13FXJhQRMHtf535b82ytn7hBTNAyuzAE9PhKBmJQWpJnsnRmnBH783151ELWzSBrBZ6",
  "key36": "4Jfmh9sqgTqTNzSmu5qNMsUF3QzQ5EEpPWTnCtEmHxgQ6ZUCJxez21DwZ4QhDdFbqAyWZmeeB9aYqsZe9raS5YN",
  "key37": "2LgUpna1Ry3hGgGQtnnRQWcr2PF8zus61SuDYRUQLcvXRNKK5MtmViXvxJfYUM9aX2o2yxWtjUjH7WviBXa4j5LZ",
  "key38": "eeHvKvWfLU2sTYv6cHj9aQA3ERmYXCsAMSJMyCsBXwRfbx3he6yEgTp72eEi5doPnhSMVkFeoSvqJibsZJYhYP6"
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
