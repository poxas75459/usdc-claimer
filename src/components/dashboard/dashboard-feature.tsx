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
    "3PmoxaUXyKh1HEXF5SoPvpoTy8xcknjX4BDM77qzBcJpYXMvT85gczeKEEooymNbeVazmPULmdycLFyiLpmqUFsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4em9Qfm1MmwYtQnfRihAzuHqPCQGdwjP3hd4Fz6E3BJwFvzGEGG6RMJwoy99StEtm5VYiVETxwyfjjwy9XmdkD9e",
  "key1": "HXuogjDfE43q5okx2Gv5U5AaVaHGiXmzf5jgo6HZsnVjY7eSGCGQpFnwk6xvR4a11QuYuwa7NpDAXKsZNdQ4A6F",
  "key2": "3tAbUTsEMY6N83HVB8G3fRBaYb8GdY1NRJv5PSKTrKzHGvaK4qvRkpJy5waKwhW6RVByYhtPYd2jvzmZ8a2QcHPT",
  "key3": "67biYQy3axf7CthB4g45N15xoLBXwRV18ieM911p4zq8cXZZsj4tSvEhuG7afx3xSkKqeXXhfpAjNGo5j4wrgYem",
  "key4": "55qqxkBmBqbT7zEF7mmwVo6D7QxGX5JryVuc1u1zGX9FzrD48DQspcdKfynqmTMe6kjU6ft6rX44dhkTfY48RMYE",
  "key5": "RJYy3ozV67dD7DJYvM5QfEGZeMkLywTCBfv47wDmtMF2brHgShVDoS2eQZrKmks5aUqydq5EJxAaWmD3ni89qcV",
  "key6": "5gWkJFJ3vGVgQs7e6ncSB4EhqHKFQaetj5YzaMbYC8hp9dPnGwRftm7nLKKfpq7yNTqZ4tZLxdwURrXNXdmYgyHb",
  "key7": "tKFetJQxuNL1mj5ACPr9j2y76KqG4qbPFALSE2M7wPn11YpGXMaRt46aQ78yg5z1Jm9a8GYBQnFegiWhkZ2fgyX",
  "key8": "P8CihoiqGCrq4pUPokoev8sPbwVGJMB73KzsJxAjirdnVBg5fRC8QPcsUXiXwSYe7ArQ71rtF7m3p6QoQpKFCUc",
  "key9": "2Q5uyejP56PJvbRLTDwfuXiGULngF1ghAuz8U7eSS2edt845YwVqUsd5BQovawWHN45dphRZfJgWJ3DDs9Qe5Gw6",
  "key10": "5Mk6RwNV6Do5EdpGftMkk3MQgHTvaVEj9jST8fBCMayU6pJ7kSX2CvaEMbd8jVnaoSqNY1EGhwj4RS9DZQBJsL5H",
  "key11": "4q11BM2Uj7objujtfErNG4Ya5jGosdJeYAYcvXSfdVWCPTHHnEuqX6yxahDFgCsjCTvPmor9r2E5AkHLYTcR957r",
  "key12": "2rMSJsySDChiR94G7sobuUTEqQiHb98wn5pTDqfh1Lo8FmSWyJ6mMBjrd1f3ERSmo26RimnQ8EbX429bDHH9dSX2",
  "key13": "2s2qmPyUQm9ds2myH98VTvSW6N3BSwgraWwDvCyAN1Ty4jpgP7ECLBkDjzSiGa9dfUGrc7WV7nbuEuDuFJCVr9SJ",
  "key14": "426asQcXPCbKwPu4jCMZvJ8YsdfQcUhfcCHhjWL8DzxU2t6zvjEr8q8BdiXM3mvkHf3BjMZwo5rkm3QmfowXoshJ",
  "key15": "5KtC82z5rcuFbf6tWCBNLquvgcfcYPKwQYgE1t3Vhdtj3qomBj3r9L3RbgqTjrHxfVUWamee7QAsqcNKjPgvqUGW",
  "key16": "5ZNLhnGkEsYvqf1zJhNNzZUDntG7egs9jPG2AFYxksTjJnP81ws1GJibSH8afbHAHCeKJSnXaJ86JPMWtLdhXX4X",
  "key17": "489mg5p1HbbskysAZNPGgKRfu47LS3KQ6ePsaorAfU8fa8zKfUNF7QYsH4S8oMGx6B1N36D3gfYRBdRbEVHX9bgF",
  "key18": "2JjhpCubmFogMYuNGmgAs3KkTbGcpURyBLGDPxVKH59rJHZLYpefn8UqUZcvR4W4ujUo94heBM7tsF7pWbLcux6B",
  "key19": "Nuc1u8ZQstanVPGdNiRmDia11MRi5knfcG1Po4P5mBaowk4ZDYmGkJD39Q7eX5aWdvAbc8YEwFHz5aKdNfGKDmz",
  "key20": "5QMgYQyvYjZFWtg1HpHbRbeF4eDnw6RoWcL4EGH9i5YUQyc6oo8sjaoMovhaxio7MFRmRYpNPuVQxdmoJihGqAUq",
  "key21": "4WYNianZfcRhwPxfF3AMkq3rFtgvGyz1qKWA8ZNhSvMyRNNtZMRwPk5M3y72FFwhFQ1wsCbvs2ZXhs9PSAkbESwM",
  "key22": "3RFbzFiMo5243MHJoRSo8xG7aY9w7kPoJyzrqmwr7Jssi7zRYNFR1vdtbYSLJfNbyDTxUg3vAdrDjcijuJdz54rt",
  "key23": "YcPzt3KbZUYmcFMuof3ga69K83SMk3z7dKWC1cHsdy7RFP4gFp3E6C3yu5kGtvQgNthKdeiRzcJU89uR6CQLaEc",
  "key24": "3vfEjJLjyQv6XNFDPeL4xN1MpNoJei5REHQ4TMF7vBsCQ9QRD2BpfwdUha8FsqC9AV4Uupg37S7Ht3kKU49CrZAW",
  "key25": "3iqhXC7gffM2zWEcm9eqppaLZhfv2tW2ndC83RJHMHqxsEtxr5nyonNCVMXuL8VX2VYN8hsNqcropLTe8cK55PNr",
  "key26": "2ZKPhQW4b53AYrFy3kbPCbZRakTmzHUSzEU3uuEPmRSiEc3QnjUReebHHEbEzFtKb5r2yMNVCLhZo7KSMgyRrZWF",
  "key27": "2b3iR4atNwP8DcVY5Z7tzvo3dUyfMAignz9D3szBm1Tzfriz5rrP6HffTwUhoHmDPgq7JtnSDSDaTTnekQgzsV4j",
  "key28": "4eY3dEMLiDadjht1RcJjmzg7CZ9BWMD2cuMVGe9EN6kxwmcoF3Hmw1iZycYLYtViJWdab9TzFhm1JHU2vGcTAkSD",
  "key29": "pD5gMjFzQ7yGSwrsRpryuQ4tHJ58kjmTjqWZxsAtSBDuw7YtSWN6LHdsPq4GW5XhsRdyUjFFodAmm1gYWXp4GU6",
  "key30": "4UgrthSBYLxuujZC2qFKCV7UfxW3ETwPbBroSUFZXA1cmTEw3X9T8YLuxc3Rm8ZusiVV6nB7S5yqiX1cfHXMr2MK",
  "key31": "379JGCNRd17Aed42SGEjPCXzNT5YpskzpNRL7DPFf1ZwbkzmFcDXMbLjcTgveKFNDKdCdTGDCHcVRFkVxEN4gohe",
  "key32": "DLi8qzKcyLmTuui6S57zk3SDCPdbHrExJMvHtC4bmzEqz2QZCh6pMfMYupHmGr21QFTjXAvE2aNfSMVShucuUzW",
  "key33": "4h8z3GK4G51Y7gCBqdaKtn5jxCQtqLKq8bpGkLm4Q2HeFTD3PrCv34WPXF46XMM3mVA4jidsbHSKoXExcQ1e3mn6",
  "key34": "5be1U84XGr9aXfzVeuM4d9UuVTYtoqheJtoJSNRLNxExD53wVw56GeTYjahuDqYh8CL1sCo3rjNYQA4v429GtKsG",
  "key35": "3eUzTWkj879cL8cjYxCr5vWpdcPDxNCTWbS3B16hjnPmwHXxaUAu7tYXKZw8L68eNy7zNT8QGGkUz3NSqTxZpjKQ",
  "key36": "4NT2y6nayvqZQkH7EpsD8j2At4LWGSXLowRV8pnVyuPG6PntvQ9V2RhsNtNFmVb7Yz1j6c5B95YoH99iq8G8urTe",
  "key37": "2H13BLa9TATpY8bnZ6FcfHPvkW1rWa2KzX7YeMUhf88yBUGqzca5N46kxypK8GGbtvT3TqtzVg7GfaW9WQu3M7Q",
  "key38": "4Lkn5TAv8a3RcZuLjrjo7uQdL6i68rTyV7WPWLRkQ2AKvkrKzc44jkk57XTYsnukW99VoK7sBgJemZuUJEiWrn95",
  "key39": "63rNTw5F7bV4uAqE4Lmp2AXU8Uaz7jT3h61pgcP9kip7umG7b62d1BTfuQVAZfnkwGY9AhN3fDMURYcLcEaxarsV",
  "key40": "2D53QNWiByY6hKj9xoH7peWwow2aCgKVUNRCkW83YrR3Lciqm2Px27941wQNiGweXwKXD5A3Xz3zM5RbTu3dLNLJ",
  "key41": "4kdCWPJRERtyz8dmeo35GgZRVff5AY5aZYLqXU8peW1MjWnxHnRbPvGL4PtDdCbQDrCrSPULB8YBvm6q2cNngEdq",
  "key42": "k79dCgqMk8LAb2e2BvqkUMnUgrUWjhqj3fkDJiK3yn4UyBejrq1t8SfKbQVBRdptLi5fLzUm73LrkmunMA1sFDV",
  "key43": "4AfDUAG9D9yJUxBdZRKfb1NZnBdhDk3jzVm1UNAw3ruLnRYx2vfZ2F49vW21EtRVoJgjEErvct2EYW4XHnCLDJRL",
  "key44": "46CkX873aCkcnXCgpCDtDYBcj6Ne5a3EnHnPu2VcvThPjj2ReiBzQsbkegSXGPF2fos7DHZ5txSbuLnqTfhszHRe",
  "key45": "4BmNLCet86DWriGkGQ4onLZuHTZUuggCDr1jAx3cF2csw7P3MPnQwXuLHCwsd2WhJ3Y8NraXcscnGJoxwjF1voTn",
  "key46": "27QGRJxQwLAWn1fMAPsapRA73zFA2VLQPoTDzDhsxMJibj4HwLzZ1v39HtFtdxbM6Y8MK4kVJePBaLkSif1ccok8"
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
