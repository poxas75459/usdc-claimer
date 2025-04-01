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
    "2vXAGYkhZk9ydFLngo9t315T3WGgnSk9EVuxvfgh29KzJS7Q7Etbmyc3FmWjqA3VHEXLhY5BP2X5p4pc9b9wGn5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GaesnuGUv649fbZNTawxNW8wyh9W3eZis7dNpnQaWS8jndhP1YqfUSoEBqeVDPzhMXypWjhoGMG7yE8LwAFMsKA",
  "key1": "3te8QBHYpYUvxXVpDVFZuZFbNCP3HJUhGoBFqgXZHqDt3aVgvRJbtjMJJgTKFERgPza82ykAr3t1KSnCPQRoWbqc",
  "key2": "4XmC3Cq7t6Lkr6T4XbGgzVqT95H6h1mcXZCY1QNuJZX9mqNH2iNWYJJXutcqqUHcXXpPD8eGW5Z3KRh8vJUhFeB7",
  "key3": "2bP2FUXXbSfYTPW5vxGgrzGfTpPhzm2JSjaZ75tcqgKKcHeBeBe6mMoRyxf952kMBcVDnLRmNmFFgnQcuHo1vkfd",
  "key4": "5CsLWabpmeJxpRDksNZazrJD4r6Tj17LBshJVj91y9f6UK36RtePbF5eq9qHUbuWS1hym6TPWjUxi4TBCbPqYTub",
  "key5": "3kxVHuEPfy25G47pXyUkWP6HaL95PfRNhQMEzKUen97RDYFjcmskiqJy8qmtJGP2xgkTKkG4BEEiUFPkCpUdiQ4t",
  "key6": "2NWTnqmagg3uDkqv3mbw9GsjyCiq5WMwdvTXGMqxMau5aWnovy7txaN3UadPExTncCDJw8trwrsHDEyYAv2aGsJ2",
  "key7": "5wTozHZHu6bnLbj1HjW455DBCTcjQB5z9LF6twmn4RbNrGS5LmLGeiLYV6iVXpQc5XAA5Rj7QUzUocN36suHUXTG",
  "key8": "fnE6d7GkDWYtXZuyMaeLdPYPfPq8Jri12sFBYnLxgX4CaTTdgojoJKBzCMEEL2ZgTEuW2XZyRERvxvNHqT4bqs2",
  "key9": "2KXXquvZdHBALzDXGX2e6uBtJ1PSaU67wWCavbn7oPRxzcYkFr3M2f4GjMYnVTkhrjNNEYENtk3tCm5F2ChHdzBw",
  "key10": "5BmB9SZE2sGf9uL1pUvnhsZuXPMrbNuLe8eLG1VcHjkUHCuBi15XCtuRJp5RNEXeuaQ3Hn16a3wBoTLCfx3c2bec",
  "key11": "28DsWQ3LEjPaHiSrFnBpWq6hfWCVRFAB1bp2AUvcTQtkKcCJoyqVwCfuYyuUqAF5uwDEzn1njaH8Y7CQE7QHwBBh",
  "key12": "49Lzsv4Ffuwr9RjEMQ4zYnCcZfF6z2mHKPCtbEoPHnAGaqMRcBYZgP3fr5MHhRMGmRAiMjfq5BfGWG5C3vHSyrfv",
  "key13": "5MWCRqkki2rPm7Vcu2fUAaPjDkeREpcvyDWxSdYBeSEoYMHAc5rkL5SCbwbrdouLnbJ27cxVKrU9bwnTwgeoVcaR",
  "key14": "4TyBFZxz3pNVuuJEiWZmykjnVkNSJ9MjowWChU4BZjhAjevFYgKCdm91z8pfVxYuiet1bk6gjBpPYbuBJG8DG4Hz",
  "key15": "4xcrqUfUDHjm7LYXggaXftWCzYbS2LfUnEMxRC5PQLRW7oV6ZGLSLGCzPgSWs4gqEEtxL3JQQULQquesJbT31qkt",
  "key16": "5fdGZyrGK74x87ab6KaZe5UvGiSupZ6RRR8pb1MWu8gVn6Fh4b4oMDL8dHWSC4JddnrfhpQ42ej7FTxSfPojMq46",
  "key17": "3voqDQryjbGhB48QZzdVWpgYXzXVcLPohWC7ay4qmY5U15BmDUfhCBQvghZjybKnaqJw6pzVFWcJjMyJymeXnw5W",
  "key18": "2EspMGkCeqwgMyh8dUJJFZvAWDzNcB9Ypctk2jSegjukhw3cZLxQs6dDvVD4UrwSJqEfWWStcEKZZjHTy13pkTg2",
  "key19": "5BW9vmQv1PsJBn6U2F4JeeJVgyD5er2uW7BpHfpJ1zajjLeqrEWWhTapznSLXfx4NGakTUYGiRFLt5eLCfM5xJ8L",
  "key20": "3LnYvquiigzAwpwwgwc2YN7gFwrD8T4gueaAiXptmzKoYT5uMSG4nPh2BmriF4tPLseMCW9euHt6GM9PGQ3wApk8",
  "key21": "BMDWUe3fmoSZEgvuYMvGG3JaCm1nNKXj6t6rvCGwu5Vqt94vF9j7cCBtjKqZHHkrMvkKjETbQmDoGj6zCwMDkKU",
  "key22": "5pexJii63Xn7btMZywMQZB7q7HeRgLabknd6LTQj8pXLHCPQsMLyK8mk1efiwRVpjdX3x8JdxUrrRr1wyPEQLYf",
  "key23": "2CRyRMxn2NL8s7mKAGqG9nm19XphMstwqJQnETxAUjcwvtTLKFvFUWKkge1PwXhwrfKELmhQGazcjopfoCumvowt",
  "key24": "5Zp5PQEbeDtS3FECQXS5miKYbFKCeLRf7SsZ91awTb4qfQmDKBU5r5ck16RHq2ijqJJ5MSXLtryv1YdtdUFJV6n4",
  "key25": "3nzYdNujBJxApg91fk4bkamKmSsmGhvSyp2wGjNVMVckCgQW6XdgWeCwLSZiNu445XT12R6sFVGS5duhQRsnvKEr",
  "key26": "2GznqZ3Ew3N2VffigUwpinKFpDQVszS7uDTqxfxSr8K7YnigMRGq6GPqAXuGx77dNhAWzWo5DurLvZ4gXTVondwq",
  "key27": "2rzGBVKVLmgksSTQWQdgv6vviB3zWkdDysABj44csRSc6YusyGd24dqjcxE7P6Nm4K1zouMaSzhopy7QeqkG4a9b",
  "key28": "xiHcgMhZYCJVZJ4vgu1sWWnsTbZGrf3QgqDygdrXSMNFA6Tc2x7S4otSREDw8fFtW2uuPWbcHYsggs3gGPiCNBD",
  "key29": "Zy3CR9NzbY9UQs5u7YtqpeQGSFV6wbrCw5yS5s29hv6HjJib6fsK3J6QiZenmdu5i2PyH5iLFShDroakE5jw4dh",
  "key30": "2KwMoQseQr9kNQgeRDRXpCuQGccZPxKoYaRrRBN76sNAhTQoya8VKo5cTMkYeu3eBBAAaWeY9F3yYW1nsYRCFE9f",
  "key31": "5u9EXnFKsNFsKEoWCjYNEHCEhoejd5tN787hqiZtDyCf3DJnFWMWz3CPo39D74bSR7uyWSApZZGJJnhCeurDoKH9",
  "key32": "2AW7zVcjxQRm6n654canWD9fqWNTHaZN2ZQS5tccVDE9mbDHo7P42amZUvgGxpW1bWJ6D3yfyi8t1GSHwznwXGuz",
  "key33": "2YhJ96j6XXB3JB5LyAXZ2fFEEa6yuyrjayotYmez5mYyvTf62K4Y4yUCmVihGJhjRzfxZJu7foreyrcb97oGeMCr",
  "key34": "5b4C3GatE6LXF22sf31pnCNHaLn2K6FWGbmsfWajuB5Q7ukJixVzi48NMBkaqwthHcdWQ3usoA8fSvG5jfnRznHM",
  "key35": "YoeQCMwiruuXyPQSpTsBGv3FhMXTCfpmVJx8bnyRzXS1BjiCRXT55jveMsLVGwksvxCXp1Dpi12afJo9CFF3zsq"
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
