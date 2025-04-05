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
    "DSaDi6kt1Lv6FFpSqGzr3htLCYSnq8RWgAUbVBxKMX7TG9v4AYohMeFvDXVv4NYJvTAi7XBvanVVN4TrJXXN6wH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JRvEkc4AMHJoP3tBGVypKuEAj44CBA9gNRW1cHfLQS5WMZcCsT2x7xofHSK9azgmedr21M7s7kxKpJg658Dse9k",
  "key1": "5Zvsrjpyamxwvp6F4p3uExJTACC7TCnutY7K4Sb3yBQBaWxZMibPoZqHtuaoVb5pZzMHoALyLiSUbpHKiSzyRXm9",
  "key2": "3ZFfgcYSNgKZTRvrLpGZufPyVoG8xhaZL2kmGFdFNATBbe6tWm1xQH96mwssugDdmAxgWrk27Qee3zmq31GQ7tdW",
  "key3": "uihSmZsxGq7QwV48wkGdyrq5Lkou5DPG7doBBFkQbirrGqcnseHcUeMfTgreb6pZXV3UU5nX8WWGK9jLEz8rdH8",
  "key4": "2Drq6NqE1YQEjYh9xfjxd9xfAptkMZZmYmZvmPWDPxGBavEgLqZTbeS7Tpo1qJaTLP2NfuattMokCM6JUTe3Zbrs",
  "key5": "39Em8SZ7A6heFmb7BXwVeiHWdbWzjfSBw2Y2bNksE1T6jed6aeEjBsY2uWwBFuWjaY9zWip5hBWwur68LRQFiQF3",
  "key6": "3H2xBxe4DeZ4pHBcFGU4F6yuZEYBtL6EjYDC2BKiUdeLCg99Mj5NG3LQoieKsCTA9PpvuvDhkZBcEzd3jKAbr3xE",
  "key7": "4pdQhvcdWsC6chiSnrXaGtmSp2iYSqeCyGZMhJysXJ2SUqf26davRuNb1QbXMCjZvkmgsRf54id1fwi7i5QMNu1v",
  "key8": "3YMobGNHnFcbbkgsaPHmkHToHCY6tK9dKJTArNhP9Zdd2aFEED5MYw3ZZanHJ6s9HFU8qTgNXwTmokCB9PpLejb2",
  "key9": "2mJEsu3VjQeE87eE1nvSpjZbDGdb2tgJFCsnky7ZJSs39EHurjtvhJUv6srWW3QifGTa7y1KD7LMLv4fEehYwABT",
  "key10": "2y7hjRESVhKQQudbYZskKJGSuMEy3SFS7ReBQKfxW6EAzmmSViKWjHdrQKVX5WLSpu1gY6bqTdpmhGUbi4Zik5MB",
  "key11": "36rhimix7xtbADQ2qPo6YE8UwkhUBYKnnTNXi7xu4wehrTcQrrcZTkZuvU1PmHkLcUdwQ3scxR4Bk3jHHNyTrX53",
  "key12": "5axKjeRcDkHMJ16gKCDo4jFHyJVUkjmojaRKQppdvtnXjdXL36hrd4LuNp8o8wzJ6hQmZAbgmLznHiYM1wEA7ofn",
  "key13": "2zt4Yhog94EYkwsM4fDZH64ZvzkTQQnis6crgkHnmrtVJNphTPSNjJ35Jz1nd8efTF6uUGyKw6s4TXKNvq35oeeG",
  "key14": "2Zug86uJTTWfehUhXjyouwNAST5M35q2q4K1BtkJ8yVPJchBw5db8hte42837wbjGcTw5nZ6Gcb4PwxtD7mUVg66",
  "key15": "meuQokDD8o1fjPzh634Fci22yG3JAKLnVD8L7RyLK7QbmKBY4WHFJB1znBfm7MoB1rbGk2VV7heBCmVVnPzWtyf",
  "key16": "5NAp1KnvEwG44Cxigs58s2x9MwjXkR2esp3WEXntn5U6RVnWHJBLKWr71gJfgVvU3sFNrARqpqT57GkdRJHfUAuU",
  "key17": "63CcuDUDKAMDrfEEAVfPY7FcaJ4wxRbpc7yecdjSEh7e9peTXT195yB2uVHwSpwELWDBQNv9rJqe9pxRqKz5TERw",
  "key18": "2QLxeeMpch7SjxuSaZnufSreVpNwWPmNiWdeyS4cGmvvGkgHdCkc5xLU1zWWBmqvdQegaPMKJ8wwFuRRjVBrfAzY",
  "key19": "mtVeCKg1tGKG4g6tomeuZZTsqiqiP9nL3ZzcVReXNaNzVMqUFi6nS81ZDk4NamK8AnBqCmFxngwpAKrviA2Vuo5",
  "key20": "3XpjUHt1yKHXz3SnuQir9YjUVuak264EC3csQuzuJncRhbhdoTnjpmqcQWMEKFrPsp45u1bdjyPWPN8afzVFS9LZ",
  "key21": "2VKKydgc6ejtJpY44WiscabCv9N3TKMxYWvcz1A1K7fNL9BQg9bLuYBuD3mNYiAu2iyYWc19Yu5CbTjFA4T6jbRj",
  "key22": "2jpJhTrBQp9QELsSVLaCooUoZDe8SXWjBAvkuXdnujr2rCVKbGVJxTA4y4B5YBppBjnBZM2XT82WTPvAAc54xdzK",
  "key23": "2gjHjZyM3ooFDa3MPZSuKsBUKFu29cACYnwme8jHVn2z1b9uNET2HA6RvTRT67ZmK4JAYu8eqjZp2mnaATyYMfDw",
  "key24": "6yvWjXYj7j1NV7NEsg1yLTRBRnGN3x6dcfvdVwDrokqGvALYRz3oW5WnmVDccjYViwH7nQRedjX9Hk9wFLo4Avz",
  "key25": "21REEBi3yBTBH8kPmNYyE7SHEM26awbmCj9nw762eJb2G2Pof5WWygcr4J2YBzSb61AMfqkk5raZoxfkg2KDmDTx",
  "key26": "EBMxExNi3FbbqyJG3sk6WQUPmSoRKHZvHdbyJuUruPuQPfzHVaiRAu7uC6mdyZYVybMWMzS4zqNLMwexMFoA5oP",
  "key27": "3R2noedEZYuvdALwBRsmGCP13gKB9ya413uhRVi2zSfQF5Vri2YLDtTm7hxzFDX7PvNU2duXKCbY3aaroRBEHkgR",
  "key28": "3QNggWsEHo6DrUTASctydgtaoxAduAYM7LHm6BX2fzGSKDZ9zvGRRnKeJH4WqCYtuts4FNq3zMNBkWAjgUUmgEDX",
  "key29": "3nGK6gRHhi3MCAe6MSKuTLt4Q6gYpgK4g4XJmD2xzTWyZyN7CTYYhWcxznVLocrvuL89SzrwGifsQjanUhGBM2LZ",
  "key30": "5unMZnCoitkHMpLjhUNUgtLatr6ig6EtwwHdgkQYphJDa7kS64gSvxxwAMnFZdXiuXXAey5CzR1suww6sexj1TwH",
  "key31": "4PmhB9k1vjti9s9u6qpLk21kj6Ub5e64LikGe44WGBZJwvtn8YZSpP9m2E4DTXdaxBEXJhVTCvvYDgsPazbowgCj",
  "key32": "4txdwLjDyisUhYZUrKeazGrctw3WXmtG6EZ9CVHkFY6pahQipvyNugnerCqQSyDSVVfhCoekvdDVABsuigiHkcEp",
  "key33": "3PCKwbAjHVTvzvBH69HgryhiZS3oDqGYKn8TAjurcqTkoUHNXMNXfEyXEduqT8wq1yhGjPBe4wyzb3fYP4M9cRvP",
  "key34": "3qGDhk2zYhF2n9YGp1PXNTRNe6QeL7LbNn168XtywyEsF3qt2m4p1kLkHLam8zEHxzXmRJVCLnprS3VxGvYxMns2",
  "key35": "2hf9e32hNMZovuHU1fMjcEbyhUv4Q2YyymtygPTVJs29uqgQgG1TZNo8C6F7ZGghney6yebB4K2hkGFXuEchXzLK",
  "key36": "2kQas68dTMBKC8trDGYxZPJ4EwgEzox6LudYTsnyZUX1qxPGsAQxkjVLQWqVRiuTGg9r6VYzrVhAqwBLjAU5cDNq",
  "key37": "5dwkNVrkAH2gnj5niwqKTE9WysrynpM4CZDSXPabwR9K9QYjQU5K1rnHMvMrt76ZYQdEjgvbELVhFCQ7bNMG96hS",
  "key38": "YDhWDKUqbtRJnc66XfF2Jm7ZuU8LvLKsgy4s2RKfsrybrp8BwzaGB1jMVJMSrpDsbNNT8WBCFK6C8PkJp5LQWKg",
  "key39": "gvqzCigfaqp8hU8QrSJDV5ZQNVhLQeZ37CVL2SLob2v7afQisUNetB9mfvnNo5JWwab846GsXeBL7h5Zbcn4aFD",
  "key40": "2taCS2kK1uC91qfzHmophfud35LZP6ebR2vh3mzanyDM6iHKh3sUh3Q9MkudPTXYucGw7tjNvq78tTrWaFCzZDR3",
  "key41": "5wAQ5idS2jNgewojk6H9LUiHf8uNuGk4PVEzygRSNeQMu1dhsW7UfAtQ2D3NLL2HK38GrECTHRfTqDZYStgAMYdv",
  "key42": "56v4sP8qyQAR5BrrvXMYMTUNjmPu9Q8HGCqc52HiDCAn4hCu1CsL2xr61DiX8SFYkXoCzwA4NctCbWBbewjTGb4j",
  "key43": "5LRGZFmYDoyMroswiYRDowVuQWEVirckLrWn6gruq8z1JMbuM2uG9VsCNQqxEerWwQaDdzMBhBf2FbAFWxX4u3fR",
  "key44": "24SHZbBj4VY9Z9FuNskjHqBNeaHz2aryrHxeNiieJLiGddpLihFAs2qWpSAsH36sPaPgequVtbLh3DVuRbH7j1BP",
  "key45": "4amJbjYUwrUuXzACLhEu9BEwfFH4x7QTL9wcQ5kfDrssHYDVAr6T4uJHJb82mGUYCdsBgcshocr18c7Hgzveqc3V",
  "key46": "4CwpzVaUxZZ2ftyxUeV5Youw4Edx3wdKHvPiES57DiQD7bnKtNMfa9XyKPCByv1h1aXCdyQsQoiMrMsHYafYhUhf",
  "key47": "JErdX2PxQ6v6yeK5nmYccLDZ68rPu5EQyCAvDVtVMYAb2wH7jetNW5NuDCATFytisH4FvUvbExJFpVsPw5cLtCq",
  "key48": "4JBWpcJc1pxUevgqwPLii48CJ7JRFvSBSsGJ4j3syNwwe8XaZqdAg8APKuBY5c2j2H5NQ2VGKHjzMG6ARkCbDFNT"
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
