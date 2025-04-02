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
    "3yij3c1foJyVjzSQbsLqCrx95rcTCTw7vuTeikcx34EdjS5NM8hoERBytSTykiyk3KDaQYMujwgJprH7oPhXspHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDYDQvKTviKxd5cj6JYUzHGRe2nGLFBV1E3g2vs82E69ALuKPerhH3VRgxbt5JEWqKjcBGGPLxvCnX6yaAL4rSV",
  "key1": "3oGNMXQhhn8NDbQ7XBQZYFGdQWe3riARQD7bsUoFQtyex2UZa85PiWdyTtupPCyaHGomw97B4qo8wqZX7uM4271L",
  "key2": "2bWEENy8arAnYx7QkfsAqtLBpPKYfZRqBsaeTS348kppTXbPJFwGSxr8mmRQbLnxzdaD3U4xbAGhCAVSuSeb3eqj",
  "key3": "2FcfkxVtt2gcJnnR4m8wdefmoJ8GCWvwwjb5ayzaRUFrSALWTxK53kGCqgoGNhQzghhcyWKKgnrGrqG3NHYD8Sjh",
  "key4": "5RdQpcNyDpYMjTcyeYtsWYpjbTqcwJoGsL7PXrpW8dXb228jNBP8sELNHjPdHHHMFn1PuS8oZFjUukPVudzGLuLH",
  "key5": "9Ac9CMj7F2mmtHb5xiFLJgDJdBeK7kQr6EtFD53ir2jyYfC3iLVN5XrUnVXYSUg6Q6GWVaQ84b42mtxKMdiTtdV",
  "key6": "3oPrmevvW7frZvJ1nSeWzP7GEG79w4SGiwCP55TrsDRVzo74X9odfrRWhP2sKwtDGmDqUWaGs8yvR5fHyKy9p4hg",
  "key7": "U587MRLE1GRvDrfXrwJZwEmonqJijCSALXhivtgGh2wfPyTYaVSShULadTMa9UwCBUBLH3VD9jTS1iMSDmBuniy",
  "key8": "5p1WQWusbAbqBSuSs2HCjsuhy9mzPnSTP4YzxzHTyhgK55S7T14DDBnm5sBvstp1NgZa9x4dgs7JBMotwsTfDGVY",
  "key9": "4NvoLKgtjv3W8jE9xjPekoHsrS6bjitBc9tFHrGpMhYHkAJaZG7vLT33jeBP2tiujPyqL72jpvuT1oBpQ4vcv5u4",
  "key10": "41TAxvsX4SEuEocXhtJGVjiUPXZ1CCnRT6ahZMEExULxB6pmJ28moPwHLoXDTF5C9kGYTPKkdUYtdY4jURZRr7os",
  "key11": "4hxLQ9VSZWKbeAhRC6kArEpsUhuCpLnyBpDHCiqcNJ2WSdW6Rba8PtHDDEpHGQ8utogWAdYNKxviRq1MjiWSdhxw",
  "key12": "Mt5qMcLnn5F6CXfFuj4pdPXpGZxGWskkTehFQfjuMNrPGqYTdqWK8U5RyKJrCeuvN74StNfFtY1Z6nNKuiTMRhR",
  "key13": "5gHom86sjPKni5sGv15HXtgwi22wAc9xhf4tE4Uo1ccZ86vuaChVNwW8KDTcVKN2Zy1kThXcBV2P1fkVM5MsysV3",
  "key14": "5BRGh4SFf4wzo1chFf2WmGXRQYc1KPio6eXb8MPeGRV65dueP1pJJqoHtiQauNiz9iDxrHmVsPZ53CHWmFEBCwAs",
  "key15": "5bBrRfc25C9H4N9vhcs2dx47Zk2B92TMPKwsrLMSwvCDb9Zr9bXWYCzVMEbq6g1s87XX51Ex4cpCetFcYqfE3MLH",
  "key16": "3yaGcooUmvFQ5E9qhgDEKC5wKB7vfvxPQDmYkHhv38SWGrQMKTKMEgmS5kdm9GDtwEwKUdyV9KcP97Av87eYCU9e",
  "key17": "44pQ1Bz6mjy9RGmmTY4NtFFLNJrLFjDJGjC46iCXz24aeNGZDzj9JQCvggnx4dq3TKKb5gg3XBaNczahnniEvXS8",
  "key18": "57iVVeN5qfX1KvxrVaiTny3NkR7KdFNWEsBaUBZMv4FpWwEvX3yXpDJWfqtnts83fGogko9zBReUr3AVAZSbXD6Z",
  "key19": "4BKgZpy1qNqUT1QGGLUDL39R9DBjRRpNhUdh265VsUi34gLnLo1TucZxCMK2FGzevZXCwtfyRqy8XLPkvFBU7z5s",
  "key20": "5obku23oPkc5cg6CxPBM5KuZMgQ7dDn6UmsEDZN835XYsGzCFwjjAp1PestT6JJgYtEe2bEZhheGhDASaMBnB5jW",
  "key21": "453s3KeGU2PBvyHKMksCBPj5LTYKfHxjHiU8zEfQGjNs4QxrYyNv3XVdj1tcidaUSzAB1RYdXQJvvtwG58JHVwjL",
  "key22": "3ypf5gaduzBTF2PasjE5VuTX42CjjhYaUyyAtA517aLNvmpjG7a5C1gTsWFAX4KmH2gQP8zSQiV1Lr65AjkinoAR",
  "key23": "34u9U8jY8FWR83DsKvzm7h5qBsf8jMyvLfMB2bH89a71f8z4S4mA4boEWjfFCKnnSAK4cRn4apVjktkrfLJXkVhQ",
  "key24": "4iW8ejFqqbAH7VF8JhgjtwRe5bqXZQe1EU4iarax9dp7egGhKC7AAs7cGYgazRmvjLugBNp8dfKUZf1icTncap7G",
  "key25": "5ycZQSapf8gUoP5TUivWgZBvrBe8DbBZhCQhcHwuawz4HUwZkHR945888rGBojAYTb8xCfRWowwpk1X4qBo5hCbZ",
  "key26": "4emLGxQL9vrD6yZFFs8pkqXuA1KZF2nAQ2hQWNPouRLMqxpBP4esAvvQ2PpSru66yV2NywRr6SL4M6yYq5mHrdVD",
  "key27": "5HJXTXdCPU9mVPCrP1QcqnTJrFyP62vSTzmHvmJycJhTCvZzEo8DRoGXhN1Wro61S6X32RP5TNpsZdcUV3c628kh",
  "key28": "4bENy6vwCvJK75pqkAC3LrS6wLdJF1mkgbmiQEo27NRhGZfsFCDJe98pXmThRoN1QpQpKFvKkg4L3S9wqwvVGdMX",
  "key29": "BEpsCe7PwaUWh56aVpAgpgDkvq339zu9xF3aUrQqZinsYJ1uRtTMEkE2wWNrKXxYojqEms32qZJjbbh8FaUL7wv",
  "key30": "rt6knPWAaCiD25moG9jEbCW9X2up7nquVGZB8XPW46HweFxCH6XuF7v2k9S91Bvacma2GCxJ3zDTB8UKLoWJGHL",
  "key31": "5kQiGG8oNNXn5oGj8UEb5CzFECbPpT9T4VLnrgayDFUL3Pj4WYA5TQTCRN6JVttNMYQyQeFS4EwkbxARXSZbbraR",
  "key32": "3w9igAa3fzFkGeqvorYgtYJ9rjkKugvdkacQr1pZUT5FqzKziqhhpBTGeRwNfn7esbpNghNkyGY9hkN5SxSAqbxG",
  "key33": "Tp4ZhmHbw4VRft5JD35CfUrgviynhT7YuSwhxURUg2yLjJJ4qcExk8Kf6meTKsrB6mRuGtpb2a6SbALoTPjqrhU",
  "key34": "4eo4bXeUQ8QJ4BqdHHQThwc3RHNqTy1MZ8PSsKhRDNffAuq1vbkKeq69P5YTZDxWv6bLJ9C3jVCZt2BJ2rbQQCCc",
  "key35": "56U8fJUtxa9Nr6RdjMbutgtzAUyeCriEKFSKkiKzkxdNodJ6YN2HjrYZrdvCJb1akP5QapHd6Ghb79UQmFbTpaFd",
  "key36": "3FXvZntjizvY9R3uHbbSctBCiGt2FmCfv6Yv3tikbEExKcQp4FTZVp4gN1fS7GsxRwf9E6Te5SDkDucWywzvcbbf",
  "key37": "4jZNt5N4xFET5EjkFZTgMuZyhyjYKrc6U4QFJZxFauGM2RTh1Xxpmo5R8uvsTXHX1obvAxz6JpYZ3TQ3TyW36KQp",
  "key38": "5S2HaRM1YmAzQV2Z9J24Au6k5dtQM8uvToyVCMatAktTEhoNXdtFk5jLg2bSH71ZSgLMku471kkFp48R3RqtXF3r"
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
