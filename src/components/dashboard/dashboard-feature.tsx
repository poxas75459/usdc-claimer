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
    "Kh5AxgfYxXBz7gXvVxBCNBtjJvrQRJxYu7QHxHF5Tmodna9TpLfEkg7ARiaGnyJcw6YyLR9Jiqi8fcXKHpXCEpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Y1PWRAnHaBm5PQxcjWdf7AfuujwbTJDXHqdSLqavBxs6kUi9ytQth7TvDV1wRbCbBSkw4RxgfcvTNPWgei6Edw",
  "key1": "4VERHceRFeSr93cMS2hRRCKx8R9DXDx9qFqLYLwUdm4VpVYHh1REPL3zeu8KHkJU1N9WrPCDXdGS51QEWVQ9Keo1",
  "key2": "4NuNJ66i8j3APQhiJ2msPtvckZn6r5GhphjcCpcS2xxDDU5yqHUhCLatcK3hGCqfbh7zKxeM4KFL4sYuUoNsrbsk",
  "key3": "61wyFzpASJr4NMKh58gHvhuNErFQ9hRbrPYVzBfdmLB2Vzy2wSWP5654mfXKLNgZ5YSw8Pr7PiqGB6FHCRsqx9Kv",
  "key4": "5WLdpgJYUy5Rt68UEV8ECRxMWPffmcQG7mcC5Xke7h4d6fkjKngQuFVyMnT4eWHVwkcqdpjXgfUN9DXyU2iHGM7A",
  "key5": "5xbd6SrGJ6mX7tawFUU93hmYXqeD2KwyM4dF3VeQVnJyrw3NRGD8XNTYJpfUhrT9eifrfs4itapZk5XYyvGjjuFS",
  "key6": "5HT14XEE2aeE7jLxUvb1tE7igg7TFy3gqxnT5DadQd6CCmRTsd2GqxurpaDPDZJo287mwzCASCuMgncEunXv5hwH",
  "key7": "5sSsaveT1RUSZifiFiC3hFnKMRvzQfr9M5KVe4RrNLFJvi8ENvAwykChGKLhHLDLeYLYyWyMQpFeRQyMRPQLdNeS",
  "key8": "3euFFQrX8GuR43BGa21eT6FU41pusj7pMLKUsWB354Gq5qAyyM7E8w6WVGzmEMU4WPZTWzVKP2CJXfXKrsirhNuS",
  "key9": "4f5oyPDSZGSfjWAeN6qtCQ84wQ2fXWs5bGYe8h2d3gmr7oeDZFd7DX8KWENg1vm3CxFfQAN5fD9qWnDe1oZgrzoS",
  "key10": "yGN6fxxmM1dxs8q52PUSD3hQ1U6u7vPzjto1Z7UvP9w5x2UPCkRouyHq573kVxGurNdfuBdFm1siYRozEGWLjwC",
  "key11": "3ifwRAy7ywovrJtbc2ovrnWiqeMhzX2ngss15zrHXPwxyV4Eup8YRj4o6EGqLZvYzqrQugqHkqKEqagfheDXHWyY",
  "key12": "3trQn5LwsphsthtQW4pfp3SogjtYRw5wyidEGaj6ex2zSzfW3K4SBho7Lb1ThaqCfJwPLqAsAzCBwN7oktmxy5DW",
  "key13": "4Yy5V8sgSS1bDkUgJUWyg5xXHJHRK1YMf9VBMuRrjtsV7WJVRfECJY4Ur6aBxhJUG3X5QG1xmWokedBvDcR41RyC",
  "key14": "52ucC9DYmTqXPBgvoDSUP3zUZpiJ8RnVCNEUmQNkN7E9NrwJ2kYnMxGBLhfTE84hboMD79k319vUKx93Fbr1aYw4",
  "key15": "3rUT8UtgQBoVv45hRrZhkB29dVkoaC7qeisWHFhAxHYuZup8LDYmB4jRGkJTu2fKqbs2h9gte15Yunn6bfK2EE4Z",
  "key16": "4HZvhB98r4CjLPp8NKRanDZpYCZrrTBHae3MErARaZK3CZjt81jcaUuGcX92upqnm4FecS99iPVQpcw35gA5S5L8",
  "key17": "2ymD8Wt3e6KCxV2n6HWkxEqijZ4vBF5PCN3AXH3fmTfy2sddS7zHZWgAvyFFug3LrdDCKFAhBw6BDu9j2ZrtTkrp",
  "key18": "4dsTjinc7wFwwVYTpbn2F1D6aoTx6tYqgL6f1LzxEnZFmLiFw7M1CoDhEAuYz8PqUH41wtf9DbEhvmWCtNt86oob",
  "key19": "gUmpCr2SYo5hxNWsLZ7EkjfvdWgrCANgFiXvzJt84h5w4yJioDFbB6486oKcw1K8hP5sG1p13oxxRQbvirVRCeK",
  "key20": "3qux4piFpG4mTQY1Rb8EmhUzdrn7dC6JqZNfub3o8EsgXvJjqyoyfnZojaGGhUi2wwDLrtEsVFEc2NkSCEfnNjpv",
  "key21": "26nd2unEUBzXnPbCjiYJidMJaoyqbY2vmDUoXmMQp84R4dZPhHw23Y963jgyNXEhpasFumruZvCkpBJKENhUXu8M",
  "key22": "XXRsEm9wgUV3Wz5zJFZWM8YsaDcfw8s2TFeYNnwHv1AzF6kmtXSnPA7f4mh4RGipiizBrBcLbRDuwMGHreYocNh",
  "key23": "5VgZhPBcM5UpVuuGvcnpKpD9vs57cUftE2WAz23vDciSLLguTFxeE5k6VyPqMbKRvngnzHPSVUkrRkBxbTsHhrz7",
  "key24": "28vomHAaWLQAVsb6NZDAZajhqAuhMug6Sf2uFtEnYtGoTFpmRxT4KGhH9RKdRKpAJxTKso9BsTK3ToV8pQatdHNW",
  "key25": "2iCncUZPVwWAjXLhYqhJb1dQqBCQnyHrQwHa5sGoZgUn9ZvUzHPrU5JfTJTLMPMoDCpD4NrcwmkXqzb3XgVpjXmq",
  "key26": "5NUvDBfD3GnQf8fGY4CxZsFxpWuKCgUP5CQGahXkQ81kiZZCJW6wjRAU8eue8SktvZm7JibgTDRHUzafLF6LCULf",
  "key27": "4u4ioq1NopK1jToaPfVrmRG8BmypHzW9mFYv6SabZqGTf9eRw1FpxoY7LxArNsb338rspYJ519q7xJDL7f7xruBQ",
  "key28": "38UZdcT1SxASMop35f2HtSzCRB2AwaaaNky6vaw5svtfZRq5dXh2nsygPqbzWAkw8BnEYEBCNFvoTMRjXxWhWHWV",
  "key29": "4NwoPcWxmn2T8X8B2xTTecdPThJYEKHFL3sLtnJsrCamRXHZ4Fkx1hxmUzAfcymfbXaDMopkCnmGBnYsZxNeooUF",
  "key30": "3MWzyWsrbn6VGx77U9J2Jh83Z5F4h7EYeSizVb5BupQffptbVxenbKrMdZgrondcRa9S4hjynGSSHkHndjkHXuno",
  "key31": "2cLPcQT5ZusTAhsXGYDvpqomzyjH6bRRCEkvsJXxxeNsDP4bocr9WZiFFfcB3ihe19LiBQCNtBbWWycGasYJi4BZ",
  "key32": "2AWtk9cH4L69N9RtW41riP77co5djwpCHPsTfDwB2zg8EpBqGVreQqcrBbGfQgCNz8RmZkJBJfXNSErLEeFVrhsf",
  "key33": "5GhvR1d1KPg83HKvnGWpWkuvN8LAtHLcT3F2WXeirzhcjkqAUEt6h818WyW1GYD3F9jZYP9NS8bSta5qKQs1PLQY",
  "key34": "35wgRY6oUgEVDGurq2bLuoxM2mBYQSo4tXHRpvsw5iYcUzjrBmxrTpq3BmL6RrMptPzJWRWnDmyBLPT7sfgESJYe",
  "key35": "35teFzA92881hpNMUFHw4c3sRsfwbdBW9j4Jd2pJuU4iJ5pqrgogxkeswtRSXzLPpLnMXMZGXE1ziUziKDUHGREm",
  "key36": "36K13FszH6sEevcVMn4Ls84TiJFVEia6GArrjBGY2yEq3yF9QcUYj71eepZVVz5bjVvQpnnRNMc9onj8U5cuvRHY",
  "key37": "sFs1iuqn3qudPRRtyXauq3esQ2nNAwh895oWvkF4U3HYyHu28NVGig3em9CGo6McseareR4qFRqVBGzPMg2RZhu",
  "key38": "4Mu4hhuyqm3aadW1JvW6A5SdFEMhWDj1S9Gfm6AuReLuadT6zDxwo4kZxWQbKWL6nAx7hJ5HHdNu4XiUzrpuerMg",
  "key39": "67KgstXsovNvxZZWMxraKfBcyxM2mWbWaUEvzMxR5FLzm6Cb2iNgge57qroj2xFvMd77TfowpRes8VcoToQGBBBn",
  "key40": "8jd78NPHUSsKcTVxMYRxhKCjVeUxM2WZUTDRkBSkN2FFX6788AdMoZrNzjT6SQdtxwKMsQXJ2jz51FHhttFvJ9f",
  "key41": "2vRnzP9uAb8GYVQfGtWKHLnf8bGtBbUEK5jfzbVfvxhpyUzyyjMR7vDCz1waXCivRpbfWSdtG9HBocSxuh4yeb3Z",
  "key42": "2d9txjMrfjP4CbMiMhrr67u9PzHjTtrJcgKcT9EH666PPCS77WizKcLPPfzof9Eo3eoU59k1isU2GZ5CzhHyPdwb",
  "key43": "5MPFLT2p8MnHsv9zTcAnGsoWeySGedzthveTqChQn4L2EViiy55VmLrpkCZr99Gev1Dnh27nDutS25ZLkwS7ahUj",
  "key44": "4gRuUgwvcXhhSf4dJPivS3Z1n2jUe9aDGw5HqxPcACrGSAp5pb1wCrH7qifZk4vZZPwFd7JdwxfP4SosRXjQ4Bym",
  "key45": "5kF6W9xyV1EXJZVuFYvizvJ9UQGqRrQoGaJAxKxtZRg6A96vhYz6zTvrHZviwJRLYqypZSCT3DNoNZ6zXCsmjzPK",
  "key46": "4WUthg12NrJ213hrW2iNobRxKJskeYFDAX5hGKBH2xEe4VGsYJxMHfVVUfsyxi3nJY51TZVcCHWM7SDhHR1XPMWq",
  "key47": "2B6CdWrs3FdCeZuZqvccps2RH24UdDXDFaWT7HjTSh4Tii26eabqqYkftKYmjZ1tD859Eo7WQsiUWmM3HB1kxPUP"
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
