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
    "21jM2rgvZNtwtSnpFpTs9sEyT2nSB9JcUW6H88Fh4nQuzSYqoKsATxW4YV8iCsRW1DnQb74Y9fiSXVF7WDLmab5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58d6AeyCf7QJiY9E2Lpuo5gmqp1d9zUZiGHHVx5E2zhX4RaWTSwYbenURp4tq5Vz5C9rWKYyb1jW3ZyHzhZDpn2Q",
  "key1": "nVbWhXnJHrnP6vmg9nLYTmLyATPdvbPmarjivcaEeMnUcq3rWSUx7PL3VoKfuqGyg6qrtHA9sb4E1q1poJNXRWZ",
  "key2": "Wanj8WBMdNCoBWDHL4vJBVY2hA2STWoy4wFR5hfyU51hasX5P5GbxGh1CGGease9q7uPxN29syV82YBtffzBkai",
  "key3": "5NNyQDQn5EiGAoumw7s786nmVzNtd5a9HA3dHPFzLB2ATkzcT8PMHUm84SpaVTqmMTX55X7M4Grr4ihA2WDFgnZ3",
  "key4": "5ua1U1THUoMDrmEX95TDW299KALAgnwrof3U2vzHRdbV1Nvadfe1bj4dw8s37R25YWKgXsYMvbxfYkEtttCJiNEb",
  "key5": "3hU5qkny1rRBwDQX39mtrijceaX9wEMd1E9NKxswGmj8LMs5UfbGZUki6Q7v4cGe2Dgk7tnkLjQfNiKys9RJ9CEo",
  "key6": "5L4NpGeYbiBiCrPQ4p1GJmsMqsSYxXtxy4ERH6parYESb3cUwEWX1aNDDpPEshUehsnrJg383c27FwdAnTkgjxov",
  "key7": "2YwE8GhPEmuaFf496Cam65cWUGvGghH7kjFDzcN8oPye4itJNKwgWEmKdcqgFPFtvbY6N9nQuq8qJ2rq2QN6Kudf",
  "key8": "wsHKEFnroH7Jj338VoCgvjhS96NjJim4QS2GMGS1PhU1N9htGPEGEsPufjqoSK7ZLnJiKyUy5YuaRxT1A5Quyer",
  "key9": "PY9gL2U9ufnUCXgqLPdcEjF32y38ui8mSiAV1uuLNLF2ARRoKYJmk51DAEMNguM5CqypFZT7UsiM7bizSkpTwNJ",
  "key10": "4CFa7sHQqreR5nuRWkkLv9ZF5BZ9TzFCNwm82JFe1dJjkgQCiRFJ5o4D1PsYGMs4zcjDWiRtGfpLbT7o6UgEw5xe",
  "key11": "46u6QsFicPEvHN9zCXHCcwzC6TnVd6sUfvzJuGAzA5GD8Lq9U7WmmJWHAe4JY2RnvZC9e1z99xzpggGTRvMBbHwv",
  "key12": "4rrkS7dwu2NS15zZaUE9RB7RL3xReEJkieKzwUzuMtJDct64BccEsJSspaMpJ8VVzQncAVXjh3Lu2zBkNnch8sk4",
  "key13": "2mPPsQaBYwAmNxxq5Gnf4ra9o3iS24CL1zLJeNERscCsmHJt1uBTbPLsvJmkDE71UoABPqNgDtieyKE261RbZto",
  "key14": "3cpfbu8F57uMatxUHJPykJsbSFdUW98ttxMFUJpRZ2hJYFdwNnqbbhMkn1S7u9cavbw5fmT2J58kQaSd2hSjEK9J",
  "key15": "4NKPzWU7fuUcdcD2ugJ2WNvmtVVpm3GDvVZ1aXqxzaqJmQ5Faqy36175eVwjJ2NTQfAFiKa1mkBGvdZb6xQhnBaE",
  "key16": "UK45Dzbk2Ej4mF9Pvk6xRwSRVeTGG5hHjSHJk4YNVWfAEP5vwgU7oHgYpwRrbQErebXNkGZCD8PRazEPPpdnGNb",
  "key17": "BvF1oTrSQ79gFYn1j8fGbiDt81uLQk5EeWL2RhqYf94TmbWna5n48bYueUmkbHGrZBsDFVSSDpSyqGuneeLKsNB",
  "key18": "2QAxmJEW69173A1zz8hQJMgsY638eGWM1MMnHMSFQCDCrUsPvknmdepqhyxvusiWHx6cKPZ562XNYu7XZ8pgdnD8",
  "key19": "4n6A8HMaDqajvBuwoAfFPbZFpoZJoM8u8337HWD7TZhp2MsXGBRAqPZtCQsVpg9AuCYSXLkNzX9k9jovvkAKAdKr",
  "key20": "c32Uz5er2trhmrsSHENxrPCvVsvTLGVxCykTeMta57c39yAq2QQvJrHYmFELS6MkWPgDgJ3V4Ko1h5zBrk6cnEM",
  "key21": "2cJQRffhTwdNN8q4E7LBMeRQ9Dkgz9zUnSD3RGk2g8ueiLy8cSzf5RoehG1GM51G6Muk2ME7xrthR6kDXStPUNXS",
  "key22": "664D1DLavPHVjeHgZJZThyZRw4oTBKFrdNHnXRE7NwwjaSWrNXuYNXy9RE9EArBhWyefjsjaWXAjErC1p2Zvtgwo",
  "key23": "5eqsN3T4oApyinMegMSAUoSzeJm6jqa6FQGkPYA6SXidBTfFfSMFR2YW78GDVzG1Jz2orYnyN6oaUKVs7kBQPzgF",
  "key24": "3sPJyeJ5tPz4cGiscEvbspJAGVMTysxUtZnRtcAyhqAu3rX6Ky1oW3b87c59zhFY34yzKus5wWWncvJ8dTd1kYdm",
  "key25": "wYUag2ZamuFUexhvZ9Q5hsKPcP3f6XJgUffYMdarQKuAeLcwxY8sBG7jBGExX7ZY4yJkT3NFCAV8DAiDPhikfxu",
  "key26": "e4grg6wM1DpQAA66oAuLPgPqKPMsg4kFTsvR9ce64poTrEX3STf69rrEnUYWMRjYNtpZ4XWRNAjJuLrWUraD5c8",
  "key27": "wQDwzdUv1ZjyKqiSV5tPNVHwCxyK5R8bua7mmznkLR7VGSKmYR1r69aEqEvYJEqZWppNeZYQ7ZwW3uoPBYZw1iT",
  "key28": "4MnnraXQzh1ZxvDVkBKdLKPMUY7YYHDQgAB5TAC5VdbVo5iWK3QRS2dktYdYzi95T55wRmh4H6NiNLq5XQCbqXGh",
  "key29": "2uVLBDxT9eLnVMcbmShTBkePyTfJ3rh9wYui3kYzKCrFPGnSturaZpUy45mBHTa9RKsgXMe4VXPgV8EUfmfMqMxr",
  "key30": "5TKtiSLk5TGGWbmfXB4umEycqiBxjx9EeMJ9PrJNKxVdLcKjCXvigLAPdkkHc887NPuHHsaVu11511j7XnDFhA8j",
  "key31": "EAHrUzPAcx7QJW58Pmq1CtNgpFWTa6Cos1D1Hvw9dZqL3kbH5CSCtX9Tdp4azgUBVGFvQbfpT8SVWkEvraZ5aY5",
  "key32": "5X5dkwiPS8rhkgiQVRyYju4pTDRw13sZ5jBPpq6WpkfMwnTgxAe7gSRFbihDBmGi4ev8K8jDd4iexTitDgWRu33f",
  "key33": "554wPzrQWvXwqc3Wn97rATD48M1zbmLBfgvEUYDPxdaEepZXUPjxtpSmay5Zbg1Cqxs3W3tV8MJuic9ZVzi5iGvm",
  "key34": "5LEd7HTe3NMkQn3uua1z4tTCg6pRdRKGFXMt3V2sU863tpZbsyhBk4qrYk9LsEmbK1MK88eNTLdRbDUbAukWRKkt",
  "key35": "26xJrBMopLEk37P7aRMHve9chu5uT4csR7J9SBvMh7MP5thU6KvoMA6dhWqGTVUn3EpDLTaCKZWpHkvUAKJ6pcbr",
  "key36": "whB2PV2PyNyXM8BpfRjbk8G3KPTGj6thNX5oNhkXas2Enz8GcLh8F5zbtZRxXtr6q88DZ8XiPAwSFtdNbVf8Rpc",
  "key37": "4q9vsnc5n2CJJRAbXcUxNNtQzENkW3md9gD9sWbhaLa2Z9jPuD4cvZVvb5erxxeHs7aZ2q21bSJrvLVAFz7SCaNA",
  "key38": "4eH6ZRmxcBUjwunNyzB6S5XmybW3Rnh41UNLkxdV22MNyWbuSuyYXf8xrh3TRy69xwwqmWSJen7h1eY2LcAKZ5E5",
  "key39": "5d8gWWRRSAW2ETwuZAnUFTo9ybS1Q816ZPURJ6d324RsQgtUjCcRSyK231outy3NFg982rrGTuxEK44P85HR85as",
  "key40": "DJC8G6nycLGAWr4haGZ4jTjUK6JWHKGMqqfdTfmPS8CD27z69EgYzTEjJ5UUWhFrVCbY6x3QTYupz3LCLnmtAUh",
  "key41": "3zT8SD3ocdT2YCWW9oLcKdkUsQHhGwVm6iU6cYjBKYFrfgNSttm7YmLUCb4hmbiriZ7JHBYMBW3Y97iBVv5Kxcq3",
  "key42": "5CZ1SJNN4QSDaeLTkv5iKhVcrWdQ7ddPRQEQe4nRgowpAPZxbiszRxYCc2ZtMpG8YgJ7Z8z3eugtni6SKyL7sQPG",
  "key43": "2Zb93NEZ1W2zXQXzMezsqs4QUp4aSgR7mWXam2uL7opQff2FxZGC9dPV28dqzPPM2WbFPwUaWLnJ9uZMw6BfuNbv",
  "key44": "v1Ugz8PXEgU4YRmkBcUzwGzRo1LvVNUABuQSzXpkkhrbcyb9hVE5FeEvyTHtUgScn41DkYiN2KtQSTPMZccyRZE",
  "key45": "AefZkVAX4rjGS95VGUvbvPEKZcqUYNFuzbQQ3LG8TawMia22u8JoFDSrnwB8tq5JL62DZCgZip4J6TN9tLzUik6",
  "key46": "4kSdY8owdhuPrL3tG7Xr9cJZRXrVGt5HZVbGzAXTWGE33KY9631uSyJjBQTVfnN48jphrAAK2pui2kWhED24FvMF",
  "key47": "2NhqtEVkEH2otshBVEqHjHeynU7fy3Pu5s9rkUMiFhAg2yUPpoSnVvGUivqN9pwqgLdP5CGu1EhkX9sn4URc32ET",
  "key48": "51BBEJ7yoKXQ4eaQ7yDQrx2F8vHejUcQbAusKoFX5bt6aKwYmhZT9yz3pLn5vuikktc6VScYkKvjFaH4ChXaFPGR"
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
