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
    "sE2mkKfxHmivFvRCzKssZM2286gf4Q2PjQme8Q8rqwuBqcinvNmcBBQSs34238AZQpKxj8gRVp8fA9Zev7PutjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgSsQb6xkHU9FkCE2wYQ6mZyLJN3Fsg94oW6SjQ5CiR9SfD8FWLtyDmsbvU94Xxp9pWmSWX23T4dFMFaeVANzQK",
  "key1": "5cUPNS131c4fi9NBH8Zf21LALGec7qhw2ub21zfs7smvXE1SnpaUdPtsstt8p2J5Kzymwi3keKJfBBi8Yp7RUNkF",
  "key2": "2KzpbmWARTGoNS5qkErnv22XnL32j2TyvS6YVM8ofdYgVNuUeMWFDm9aiN4eozbbCoynR2fKykgtBs4QaXRAXdkK",
  "key3": "5DFS6PwZ3P3wxXFZmNkumn4JUZNURB4HjWJPJYWbXdUb38Ge6UCvpQB7yrF4oSrs2qSfCqJZN37mNVD4GeMjGu2R",
  "key4": "52wojVLWS3QVzgwYMiQqCBw6EcDz65jRY7Mt67RPJ5Vmxd7L6yFD8XnT5X5b1mmTmrKX27L7WvrAttihZ5ptBUzf",
  "key5": "Ut5qBHBFNwJsbht64vEXByMGQcdtHMg5hJghurktFdW91twqvPV3K8X9EVUKAtnyp2Y2bmQnoZc3RHJ1PqsmBjS",
  "key6": "2P6PP1B9YbJ94RDa5F79gQHHDWyLaMCiFuvir84KX5fcu7ok4HL2AABkakZfdPSz89RTk7R5hNNd2SFE9MCYgJSM",
  "key7": "3P3Cb2nPYK24MHscE8cwW26XLY5pdBbWgUd9TvNH9AtV6RBpQ6kgqttH3wCYJnk2tYddxBYEeeCAzLyXFtrkGqgT",
  "key8": "2737J1hp4nsksBErAv2A1bhM3466PryZ2ttHQWWHhNye9QYCtAeCSsVDMc2wQ31nxgSjCn7mgC2bgoDUvBGBtphg",
  "key9": "5oNwefh1vPgMgfqDiY8qm4mNv4XgLPjE41pbBLNpVrGbY6TLgSDxJg7Cy9hhf3SPpgAGmHcPQXKiViYgWEQgt1nC",
  "key10": "5xrJgDN2oTGMb1xW662mphX652NnfUqpWkbCYRZVvaR49hKGrJGJSd84Bkqam6gEyvGTdhrX5soJMCrV9B4bXwBT",
  "key11": "fQfdxKRLEvdtjoBuWgks61aypJPT3KxLhCCvDvb8JLPfCEr9s3bYdASGLjF1mgmazhEt8gE9JMMrAQ5vPMvV2Ad",
  "key12": "57dU1SPDoidGK6uY2zeYFKm6J5dERSvWbCJKFFHeSuMiGb2MQMQEA26274N5NpKdpG2p5hLzj1Yz2ZPNEkR4ee4D",
  "key13": "27QCVXrMi9WtcQhVj8JGvmUS22fctN2TZk7QALx6ofnLJNgNj6BtcAxMTfn1pgc3xmg8cgs3G131dcdn9fUYJKoh",
  "key14": "5Jr2rJuBNA2tia7WDyDvkhyxKrgo4xc6RfnkWB4Jcfs8r2NNGV13Jk8FJkECvFG66VZFAkGSVLofRuAEF9786UJ7",
  "key15": "2BmCwoiJNawHbmGbW5r2n7djqZoABdTCwmetjsgjwbkpTZ7AoVFLLhwFeYWkZiJPS63tndgeYcgWNJaFnFhB5izT",
  "key16": "2BQjszs7v2ru8qVJWccg6fQVNrt7p6HvDTEhE21941HgsHqEok6Ljd3SLdgmeN1yu5LYDR2fxPgpcDyZvHtJ4GoW",
  "key17": "2Ysfv9VVJaThpQXgWdbiSjFUFuoJi18VahBoVVUYEzoyKTZDH8rTt8BGwdn7XriRLwbnmCdMuFmT8YPjyUsfqYpR",
  "key18": "4kU2tbwSHtMk9gttit3auGEoGQFTETQM3WweNEaFEx1KkZaYYraBD3T7zdoypqYBxbgCQ6wLDVe1VvNC7gCpkcsb",
  "key19": "33Z26ta1gQfeeQYxmff2Jj71QcEMViBdsd7N31iC4g7mUVXWf9CGRCk8Dxvkjjvg2cY4wt9TBZfNJpRyrTF32yRx",
  "key20": "24iPrMkyia1GJTTLFN2UAnPDPEnBpnGU9ukzb21FKeuLMZa94wZe63zLXHWRM1RLnz1yVWmNp8CANxZxT9RiAh4t",
  "key21": "28nA2jMBpGocthReEGwmFmDc7c9Vh4VXFBBp2t6Bo9St9jSXi1Nv5efonkXKuB93fQEGwkSprsEdw5qJDB73nMka",
  "key22": "4CBrsenjbd3n69rQoGDEkRwYEp9HcGTJtR9iRH7JqBr5xweE2Ubn2efE5dWReTxCkkRZdCsfs4jicGdAeemtUuDt",
  "key23": "2mPmHkmUe5MDFsGw45ZHmy6A4x7HMWJq4X4F3vs9wzzfKpTDePmhfSn8t9ndPcMAeQmYGW5GnkqsNPCu5AkWzW5h",
  "key24": "nRMpzVmpwnvx2aXQwVzpNxL4uVFtZ8n1WfcLLmhBrRC62DT9fh5Tc7rxPoTG6P3UpN5bVnJB5wM6DEFxVg8Dvg3",
  "key25": "4YybvEZ9NBTx5S7duxZEb4yPwdFxiYmoXi2qtpYissU4ZAAQ5C2MfzgjPwMZ9LwnqtcvrzXUqQ5bqmv6NSLY9YWh",
  "key26": "5xGHffrUFM6hikxzL6yaKaFD3tmHNqMT5TF2CPdzLtePWYWFVsCcS6SZM9TuEtt1eQTeNcX25roo5KJrdyLgJCht",
  "key27": "XVbe3QmccCi4wniUz5T85wCDS9KdSQeMEaWK7YQXqAQpay9pze13ryrcsfcp5hMYbVUKJ2AkrPVECGVYBo7DARh",
  "key28": "4VvSME5U1FrT1ucwoHBJCHabkRtttmBbk8NnV8wAt1zTAKcADMTR2KsWPo3HLP8TsVpRZ5ToAtrTLPrwFaML7sXH",
  "key29": "3RZU2dkLTnLwZPqy35iCSjpJStkjqZgGgUvM5qQyeisuYWnnLGvUNpimiYAQ3M98Dz56wCcjp7NwpGrkA951Lf9s",
  "key30": "4oW9U9DhwnJ7nRgex3seaybyeXRTBS9tyU1jcdMy4kkBmwearfTRezH3LoYBmfoWtWvqDKQPPWQXGo8D7znYM5tw",
  "key31": "4WxUC1GdfnhAg9h3VYQyxLFHx4Th2vhbf9AerYw6V6vT4Uhq1e9MTjXPfAnLEKnfXWZZczBvSefv8e4uottQaTAq",
  "key32": "5X6gVzxpGFfR7fX3cGLHtVfRGVTgHMEA4ao3Ye4Yiif1TYN7XVTcYdD1k2ZsuaafhHaNyaYwrgus3JkPAzNC8LaH",
  "key33": "2H3wMjXz1oxz5b5e3oCRsZJvVWhwWvjBw4tHMZjmWfJtfsQhu13ANDuUjWZhk8rf2Dr71gTnQQWgxCE51gSpaX4o",
  "key34": "SqAh191xsvGsLXfVQn4JJZiSp8S7ay3RfGkFLc4wawd1v66jMyryHuhZbk3Yk52JAwCJcLudUBiUe9sAKzLYtDd",
  "key35": "Qgx4HRkFEEUsZRQTtBcuoqvK59toKdfq5fZvFZr1oQazihPNQpk6trGLhB6AFbWHD9zE2eDeqFtQsx9C3xZLYHX",
  "key36": "2b15xXHdP1wAhGnExNH2DhQt1m2AQW25ygpa3vw89VbJXkXgnkZr8ZSwoCnWeDKDWcnzuHJmj5x8yQhNhJZ8TmBY",
  "key37": "23Tt1HFrfzR1wtnUNbigkGRHG2VLCpXKXkPEnsrEPssx1xKv8fnB9B4xwQmZicWy7eopzckCaXASP9dWw9mx4PUq",
  "key38": "4YHGZPBUk9LrPCQeCwjQ6SZ3j36YsLFU6LLT6LGWA6UGWuDmuhVp4WKzMg27joXKoHFM6g9Ypic4D2TH25nmXYFK",
  "key39": "UcLofQYDsfcjq2oZmAWgjUTqhdq8GZKfuenXxdpNmRGJ5JfEba6StukfpeotpEDo1wXnzzkSHfZiqyZw3tC6vPF",
  "key40": "pxj5ZW3CyqMXFUxNXPrVpNd3LZ2698AkDvAqUTCxE9bJDnbkPe88da9EAzK4FQDG9UE8cfzusFNhWpBaBFpyLZX",
  "key41": "2M4oTa3TuVzfxaSruaTJzyjT2Ky1TQBQzpdDTU8cSyFS4o1VEPUA7rhggTjkEH9C1pS1LNVp4XpgyhKMC21W8FyL",
  "key42": "4VLFhmPsmCf3LBjNDoFTGfCTN8WH9ZrEkeb1upDgZyjhHSSmCGyAKnz2kiFnKFUSRAr7s5ahiJWp3zfEmogGfDNq",
  "key43": "5erepyk31qovq2tMhYZRUGeh5ZkqQnFfU8HFA1uVa29PB7M4yWigp7kUo4D1ty9y1zDMtwZzFM1tqq7g8MHrLaCr",
  "key44": "3JTYwvr7mV5LTVVyvPKnTgeAtBfLc3WMi6vmJdDSbbMHxX1AwamyC2z4GmqjUfiszQwnEtkMPGJnsxBgqNRC3P49",
  "key45": "3Z5n4LTuxucV7knQS94rotaZaQi9eu3Pd3eeqjauSz2juk5o9F3vy5wHUP9khrKPCF3nWGHL6MsKYPh64Cv2yJiN",
  "key46": "4Lt7UdptnfVnqhFZdzn9ycny4cxkrsVtFePovEb3t93Eck41HwQhWZsiSvxJmaYZhqqK5SvJeYRFnUnuBDdipq96",
  "key47": "2xyLEuQFackLyX3ZFRh9YnDukwE6uVq74MvnkmjM4SiJap1fAoEyHF2ea3GcwrHmtnZcukv1HNh4gkhW8Mk3mztp",
  "key48": "54gmb8TQSD1JWx7M5YsijfpBGSVrfqAVsQadsHYcLucFubXC5DYsqa8HuJSuatqQip4bSUeYMju8S5GRRQVnSfZi",
  "key49": "Y6PgMmAwcysaHvTyfsHL43VWxfAaGZ7SfQARYUmWUpBJsapk5bcsm26vxGBijYTjm2aVYS4sziU5CQXUyysttVL"
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
