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
    "kyTtbk9MskGLK7EAw3wxTCnm1BnmX3BcgZDQFRPeT7TQfJEVRY8gf8R8AMtStzFz4jHaPA6UMwmaYwFwN3dqBr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WkpKNRE95ntEXutKC1jpjSRWGishF7XLn7iw1qHK5Q1oMv1ATKYdDNWw8MA7MGS95tXay8mdRyKds6HrSrTN617",
  "key1": "2SkNquhgcNp4SYDQ47heWqgLgTFjddBo8avLaDBb6H9RYGWr2nVFDDGzRtmmryx5sTv8KvqzDL29zT4fG43t6DkH",
  "key2": "5gyCeethGRnzzByBZEfsUQS7cSPaYUZ2qUpwmSSoeDG9goHn7433umc6etpSCyGwkSCy9d37QxVGMoQxEM6r9ySb",
  "key3": "3ixUw6u7iQ2GxDhdrn2P22dWSCK9JMc3N6PyRTtpfHDZgkffEj8EwMCX3MUovFyZ9Lc1hRvE7PWG3EUkJfhb3UkX",
  "key4": "5QHujo2UUBCvuKKzev877JdCaWjmwqf73TaaPct5VbH2V5wtuGyhQpLCrwntztAzZLQTXqhvPVMVQGt35EF7Eq8n",
  "key5": "XLtJLhy6sbSniWDAJjiidksQMsKvMrq3HeKjABbfhrhWjJzQoA2SJeNu8zs4eRLUnGRdWcQyLDVBp2a5ebsNCVi",
  "key6": "pCSBhg74WyMLNA5kz83nrqNz2PMwpmGGEr7mkDam9QAx5FAarKjHQTPVewtoh8dZkaDbaQeNtZqcdPf1uvRyHKs",
  "key7": "3R8DpajdvKtKrektXvT86YAuZxN1PxZasD9Ccthzet8s6SMkymB8TboykmhG2KfnKmwLpPduBzCGSjFMhF7dgsF7",
  "key8": "259xtGYe5QvDj4jAba69x1HZ96LuB8qk6HnebmQbRFrjUcJCSs9DMczZ81jdfA69UHT1JyTjPd2zWTNc6UZL4JLJ",
  "key9": "vn4gvS8WN7emfMKtyt9SPAp9rKv52R2i5FkaGv4cBEQ51RW81w61p7JW53fY4PhdmgiVouvRwPvCegFqKoPNjWB",
  "key10": "AssxTFieFNWCCFaDXbf1XwcXuApYLCUPbdduACMtLgMUx7Q5wbbaaNoYg3MvBtFhKi1Ek1CjzPS6TPEgmrYvTRu",
  "key11": "3wEtGvto8AwoSsYXJruYmHGqDhvXJwv4eYV2kbR6vXQQjJig63km8T4zV4A8gKtz7vNCsNzePEqmig7N9G5SPLUd",
  "key12": "36ekE68HB82GLXKcdRKVrocjtaN3Z65BVbRUfpn1cseZmA76G86AaHE1VLdR95gkBjvfWZbPspKBs2XGYTkEsKDK",
  "key13": "qDZwJkqXbbr5JaHeUAxeYguhMAZwPtxBmLbd6JGoAho4jAXby3D6kbv6Licw7HYRRUrS6iF79gRdYCsbaqd35Vt",
  "key14": "5YsY2RpKuinaqGYd5MgRkHigrDJzWvZ4ftzhthDJR2w9ejatcKtb5T4YpuUyCHnkGGz4VMgLad6hhBCpXeXF4Ria",
  "key15": "3kBNdrmLCDjMYV5MyKwk9HFxKMeUcg87azhymzhJxJyWHL1KMEPLtzgAZMm7XnvuZDc19vAyid4dcic3zmCQb9uh",
  "key16": "45BHD1AY9iDkRWkepRvcH6Z2WxibhZGc8AtiTTDxwjawPVWuxatMBRKG8vmQsn38d9DAmEswMg9N3KLgk1KHuqK8",
  "key17": "3dnmR2CHtsF4SYXHhc3MsTNHmmxivGSJPvo1Efk6q1ALiSTFBs2sfN7TtdNPAEvheKm6sQLQhgBZn1ypYt8jvZsM",
  "key18": "63WxFfovi8GfBkrZutkReBtbpmqjdYxRNjESUov22NtDo1rYxRE1FoMd31bWZiprxSXVuAhBR3Sg93Ewj1zFEHD3",
  "key19": "2yVxzqZsQQCYtjZUUg4rnoN9VRkQAGkbD7bn3jrLADG5iPM1Vx9urbZLaV8vR21v8WBz2P2K6XzxsDjQiT6wkLbT",
  "key20": "PMHRe4EGxBHHEAiSekbcB4gG9RvixBCVoaCbpiAVPEzer8qTa7BdzheYmo5tKFE4R4gU37D2BdAJNT4kRkPyCFd",
  "key21": "anE6VbUfszomCEw9KxdXaWnvTkgZAHjshaqaiNakJXNCHN3N444E4NWkxwX52fsPgesJFEdYYxMYJG27LK6hQQD",
  "key22": "2PcgFwHWXKpY7A1yJ8TjAukXpBVa3BmqNmtsJevyGiWgASAkLXcSdkMVuWU1dN1xhNRJYudrzz6AHH9cKoRppwh8",
  "key23": "356YocCTQFZJGUpjxJfwviC21vVQfZQZgwUXDcPzZMtvcwAy31LaPfx9Kb7ga4kSDCNTvU4wPZEyhUHhmDqrQu8k",
  "key24": "35FXR6KTRXXtGS4fzAVKWTjtc8rFUacgqd7U3SuuTMBG9a6KRztsekUWAiX34pXZRqdWbtwnyCUqB91YRr8joHLf",
  "key25": "4b1jTAVv2Hh6bANmG2DxMVQF3hyUSUB5xz6HUBaSaqhbFnPaR2XF6GWBTbF7tCCX4pYvznKGsKAoH2iTh5PeH6A9",
  "key26": "38nQ3nntgkXPBsWWByvDCZEpCrsmUW8fcbgXaznpHTNAu1Qr2LuQtpB1owXDU2yneGF9kLt9VZsWijN93f2V3Nvg",
  "key27": "2RXVbvbhTuyX74KSGBq7z7PpqrkhUhEuBMnrF258wLsEYjub43KXmRjB1oJv5jfDRpLrtXd7vMHgLxURpugNvwwP",
  "key28": "4geaGmQ79o2NcrEikTkZdykXBixrgba2WzcNXijopzt5wLewk892jjMBbQTi1EzFFtWUrYWQDytqt8hdSYSxK4gb",
  "key29": "5EqeQAxYh84cJMmzL29WS17sYXzQjikTKnSYPn7BVqg5U8DAdjL82DqFVy324yviCNqzSaPXFXaVm4WzwBvWaFV6",
  "key30": "448upAJqN3p9pyWznXSWHeY2wqATx5WgnUryef6cx8G9qA4tHe5JpZi1TpCuYCSCQwPpVSAePuU5JHxmsSMb84or",
  "key31": "3CZNaTt9seD78T2BWBeTRLTuQVKiAZdiFEqsBCheCrxZ8jpaMkBYSYSgyy1UzMcnrBMQGaMD6pp6M7YBzW1dW4PW",
  "key32": "64e7sCNNXmtgFb6u6xVur9Xm6chQJCLcGPabuTUi5TXyG5AZiZVf4GAEYd48DtSZQp4u8qVaULPuMe7xDRp5WSLM",
  "key33": "2z6SARZkjPJJL89geUJvGe1ziXxewyx7HjMLJGTvaj73RFo5kARZbBTPxga7beasjG4ZWskJAYs1UK87KFgCMscy",
  "key34": "347imTaSe4ULDUY9yqdQHKDPn4WzYtwFwmYBEDUzAxV44KERfzJ6eDLCGiqkQmkRQLEGeuoMoZfVaGWvoepnr2KR",
  "key35": "5YvM6pvnrxc7RQDXnaa8xH1v5BeWpY6spjWhAtFQtnG3wiDPu3ET649XxFo4QaBezNc16YDB5r3Wp77d9fPDSdRe",
  "key36": "JPamX7BaC9fEkVAiq7hye3ZV2rQFzPggajgmUWfX4WtJxSTL6hnhz9dsqYdUfKoZQzquqYgrZyExHzhSvj6pyzM",
  "key37": "373XvLqY3wTJ4zSMgWUCJgKqEZRf8KZEFPhDfkpaocTuSApCfTj46eSUt1KL4B3HQdKAnesVieCXGjSjE8KfJonH",
  "key38": "5N6xGbDkhM9jyp96SrUQJgkQEexuvdGrgF1agPy7YirwfhVkqX8iLfY2asN6JV3M5w2uL8aScxyC7EM321FzLiyk",
  "key39": "65RDANbbJAVXErmtmC6AJiDiSBsYVBGa3pVPhNAZWJpi8yN9HnCT2FeRjnjAuTr5y5EWR7pg2yUuXJphzDii97FY",
  "key40": "2L5uixAGtaddxvmcbRvt3yhKVtEVqdmaV8imkkzdwMrVcUAYAvPBHnXQqBsQZZYvPxNzao16zQgL7gaFZH7nt5uq",
  "key41": "4Yf328cPkWcD7bbXQSwWv5d8cL4H74TcPa1sjvwGmSxH9Cvi5GsBfkEdj52oZQYEebbEJZdhsfNcHPn8TmBF2bp9",
  "key42": "4fSssg8pWCvJwn2Sd3Mih34LR13FfP7pKPVkTNuoCsyg5Yd8LgTpnKvy9HNgAReZtPDnDPnBHuLN5Pg8BxBGJM8P",
  "key43": "2zPTEGZM3apZZqwm4NJHfACruYZS1jghU5SwDRWWZqVxP3p617zSfge5xjHFThW8fYFBsEWdmJBuJ4jn7PPpCYe5",
  "key44": "fjMRs9HjXoCFxw12Gnnb6xroAvZ44HcoskbkvoF2YH4DBcWhs1ak3qPHsh35GXwuWX8LpCrEpTfqW5ex2LWCDXu"
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
