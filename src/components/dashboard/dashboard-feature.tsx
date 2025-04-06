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
    "35dYsJzfeJfCgQ2yMt4tESCa34RjmXVNMDeNPtVNFoeVE6f1hCtCKgniRvKM6NfacY3wdFKLnFtR8hJXGRnXU4oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vUHQQ7xHWXvCfSnmn8KPFVKk2AoiH4iKmtdMUFwSzvQEuxXRTVW3ni8LhncngM7amhpbDFKX18KwiA6WZ78AfU",
  "key1": "2m55HQRdippzc5XfGJHDd8uBGE7ThFZxSzCYsxE4b5CBWJTVAXZQiMsnr4xffNhnXfK2ZwKMLZhnB6YNFbEJGbVS",
  "key2": "66eNw1vZa3Cz2yPMGnBHobtVfDKqxy3c2ckkLWndLk2L5gh4XYcA6JAd5n6auj186DLcxGbroJ7RiSGiZpym7vDZ",
  "key3": "AdxXetdmSmJyntraxze28HQmX9i4CiUNCoT77RG122UtZCq178y9PZXUkFZ6CigaEbptRHVJ8VvTVHWraSGN8nh",
  "key4": "2bc6rZ7cvE7ABPvje3LzJh1TEKuiAf1xuH84hyVd1o12XQ5VRb7Wi5iFwBDFZUXXeFtHV32Uy6b6oyR38TsGXYhp",
  "key5": "3tjqB5ob9nsdVTqHEiFZ7nuDdSUmsHJA1eCNchXuYupCgfJcDVtJkWjWYnTJdXi6JXd7musfbQ1a1mtvsXUytCb7",
  "key6": "2R1ikS11rHfwCA7CAyvvcQLfGncEUq8HZghqSnGu2kEwF1ZRgj5kBvr2bbDRTtm3gt299ZDjCgpuLXLCzNPdoBuB",
  "key7": "9e4tN9mvoGZzdJWNXQHNZgCvwvG8DxR83UprRZPxoPNQBtUq6QryEpVPWyd7UKsmnncgydmzRPMNbTvCqA7RQsr",
  "key8": "5PeWF6BcDc5AoKcCcTEf8kWAKPkr3ZC9Xc5jxDWzTkNUmsHiJQLHKZzHEV2YfrSZwEvTWdXDMZGmT9nUCX4Ghryc",
  "key9": "Qk4JX8Rj9KhCYEmuwnP6V5AvC6AuJdeHjCziFQ8gYarnxuaJvPpA1iVHXCoGgKNJxbuBHdCkwqfL1gqEd81vLz7",
  "key10": "5Bgs3f4BxnpoheT178uih9NM7qkErP2Qb1CktmyHq3vRZCrm9e492angBBKgPh7Upa2d6NbyeKyQc6ooiL6WNafz",
  "key11": "4pBZUTm6JkeyUemQeVzVxN2RWNzMY9CLax5Z1jShEZLwBM3FhyC8a89YLusF6Uqzs7PSg2heB9UUuEZZsYCmahXG",
  "key12": "3At4T7BvEEZSZ8zxXe6e9ggqHxsW87EUhiirddKG5Nbw8jtwAmR5K7xmn9ahFgHU5EHZuXbCepVHY61uNw8xdaEi",
  "key13": "h9vgDPcFJp8xQKuhE4MH5Lc6Pz9wcqfcbdQtkMto5pW4533UvJDeBK7BfPjwsosgZTecyRpKrz1FiKjMByw1Cc7",
  "key14": "3XTC2zEyHBHocGdppUW25rqS4ehFkd4gcU4HPuHcpCq5w5htLHBiSwQRB4h71ExTTbyrkT2nVyXSRyBGJ2YjNM3c",
  "key15": "5mv5MAkjbR1q5HjFUBKZtbkypf6XobX5VB2TX7uCENXj4cxJonF8ChBc2x61wwQDCqiQp9hN7SNniYUm7UGkMD3C",
  "key16": "2HccE9DWTLw2mc4eUgnu5CA3ai8odAhX1h2DvVVkjYTqXgvevu2f4rDFrF5hpj1rL832TDYBYWKVRbzpTY8iPQtP",
  "key17": "5JCuyzQVBVxTVu63obtD3UfnmQVqZLrPtt3Yx7t4j2NEvpDvRz7x8qr7rsLQSC23XRvDSSHDFxC8RiD7vo7r3Ja8",
  "key18": "3ZNTH9rUgkPKca4uCUG6pwdYLTQo5JsABbxMMypGbxWM6DRqSYR2uLF2AKLoGuzzynJM272SaUM44bu1qk78KSrw",
  "key19": "3R7W2aaHZCfFCjY7REXgUeXPrL9f56XrSqbA2jTDwYG2AFGSwmzjeFm5QCcHDkhNNtFUmAV7Bok1KkpNiFbm5QKr",
  "key20": "4SCSZtCMFCJVrqJjEFmw7w36v3n7eipSEXv8YFSftPbBpXhFStRT9xY6UBuUdstQqVUTwxVJ7oDvAtnDiBmJsWTC",
  "key21": "2hm2DVpgWzzMwdv8vky7xfWLyRbKMwQJuWdn7NMq4rzpZTXzwxu1fwc9x8ugNFit8TqvJky5YMEyeyc52L1mMYmL",
  "key22": "4zunY8bmQoigZeJN3n3mAWbXhbZa111FKCuDTn5XVVNU4YLjriqshw35LgQL23NS2Z16EHV4r32PGrNBcLsGPsYh",
  "key23": "5CGCNbNfXbn9iKnR7aGGdhA9ayWpxzFz6KqFSAcKRGb7tbMF9Jrr7BBPRQ9oSrzcfFJywEgvVhuRVigouFGWrdVH",
  "key24": "5MsifNt5UUcDPbhtku9ijQe8PbdbAdjeHt8WLYTD6grhXWVPjdcMmWT2MHduTjWTHg9JGJyPHfJo4JYuNmWoZTYe",
  "key25": "2vegkfwpaxfuWwkSEWFepZHc5Mbphttyfd5h3ktim2aNmJoR2QzCMhuEr4kF9xs3tTmVXHPbKPoha6uRRSV51xdn",
  "key26": "21evNxJkRhZb5SSx9wd1QpTpYSBitVDXPJCEnr3sotuc58HudcjoDBTwzHyNerBAGHQyrdNtsYTrp9rEmFx3Ttvi",
  "key27": "NtFBWPFVG9extdzysQpqAmMP5d7Hu22ZtVmmeDkh5jkGwcmHUiVojAECNobxHHU9iT5B76tdDZgzxoha954rkUW",
  "key28": "66yKuqGQsokPE6zXgJkyZaLaoxCc6rs1oqtoK5RPy4pNLWGM1uFP6wLobnPQrQeV7G9HmSh6H7eMK4E785ZqJHxC",
  "key29": "29DMwqaTwP8G46vS149onx3jtPbchgFWjkfLLkjQEhTSQg8PAm8L8MP2MeECZUq7k6v2ombNsScTXKTDbbA8nh3C",
  "key30": "4tMyM5rhZ8Vf1345X97Cay2dmYnkN2hsyg3E3uMFKFvQLDdsXA7bnUuP1iEYYaCWY45B3PDtkajbgKuEfNYpFL1N",
  "key31": "22TCKaU9XKPUEbwgG2Qy62w4ycG5nhow2c7ruwmsjBTCZ9rJCmtHBBwCvmU8sy5KZCUhc9Ygf77gqoMkjufCtuKD",
  "key32": "63jAmq2T1Je4CgDaHxWjyAXaBWUaQiP8WTKRr87HALkh2AFTU2sG7d1qzLu7wpgy1mLHJP1kXdtbkxFPzJ6Uau7K",
  "key33": "eajW3ZrbduJnhZAw6rRHxyYuZGdE93nqBq7zYMS76e4e5ztL7HNy6EVob5fa8ArDRyPFjsCg6XxcRwkgzfSub1f",
  "key34": "pqtNZNDB39oDo2XtGYTmPWkWy5eT2TvGJVdTdqHRUe5ZidsbYMEBanTJcZEBgdxHQn48Gp5GRFy2jmG6MNmwbyB",
  "key35": "4g7roB2VRVS8K4c6WTbiCszPgsuPA9RpoP5UxhbHBUYEDFd7tPdWKAZBeyiBRsF1yTPxPocTk68Utg6Tr6F13QsM",
  "key36": "2we3MT3R5JWxBuYvqUQybbjbXj1Ceueo2UBJdh9tVSg94VYmWx4vUEE9oGEbuByubA1urzo6cJMGBRwtehaTme9c"
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
