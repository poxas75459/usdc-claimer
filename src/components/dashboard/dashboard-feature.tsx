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
    "3Uz325ECYaVvc25jC41TB2B3xkxQzFSiR7YiGsuvxA8rjiVjBre4oTATuoobgucBiGTdRGdRfnbpNqANSepAeoi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCq9DuKNSeyPzGy2zopJcFyEsTpqoQgMtDNQ8FbnCa1H365MK1tDVKk6RGnHckzEeT4iUvG2Yq1sWBkH2uwDPWK",
  "key1": "4Bb72tminD5VEkiNzP6X2egS2ZWPSQdDJD9EyF3CQaQdfoiEja5jA4EayUhCEtqd3JiQArS7KXV4g1jVrsc4LBDN",
  "key2": "iffAsM2eaMYiRzuQJPgSZCYn1F5sJvogZVEmUi2hpYqzmHByboo4LZkp4AitQcsTy98gKRvCX35W5QY5FVgGq82",
  "key3": "4Rf1omcbEF856WDvCo3FZGZ9GCybMmqBQv1HEsyi39cxVqNTXYxUFKU6dKTqPzFMVB4CHNqPraWiYsTc3RoLJwGH",
  "key4": "BW9PtwVd8UPB1uV3GBbEm7JTFH1ZAwBGDuJCNY9LuRUCbMjoACT55sVRxW2DZJQ3BkuLzXi7qr7NJxMGnXyft8n",
  "key5": "2prsWJBP1m7gwXZhSeRe7sHWBqyMtrEM7s93ZyehB1wjtLNJ9F9goBaaxCWueqQKVcsuT1SRr6fg5AFF4eZ5NKfq",
  "key6": "5UhX4M6w18AMyAvNZTCUqmZ9iDBXHGSJC1ZKwyptu8GNjnjnxjAU9ieKR1pn1ViFRU6B5hZL7afnTXz6vP5SUbpG",
  "key7": "5vqAdq8tws7uQcUQpGTLEyHFvZpuu4eKZ6ZehMdDnF9pks5TukPd3iAMtsq2WDt1eYYuFZv9UAELdEicAF61LPwA",
  "key8": "hrqXhKxWTQhdY1ZaxvyRZNGASxNoAc5o3SrewnH7m7795WLf6SGpBkLRvAHsW7eGCdDebsVgjLeWZrHcpriwYYS",
  "key9": "3TxUgAy196b5wRvem9E7cmCCrmB99aktdyqY1MtkPCoeE5mkZiP8UbkxNZgg7iV57jzrUkrNkGcKoEDVdYFBrTD6",
  "key10": "22maXZvHS9bEN61bfiNnbp7Q4JoQGzf84S1FJPNwgQkr5TZAJ3NPaa9ZNwPFiKFgJzsMtS7uRsbdpxa33jcRo8eG",
  "key11": "4GSoCeX1R7niufz7teVdBiSUCF8KLJjUjJDTFK4LEZmjKPAC1YgfrEjMnsccMB6jJTcibE3hJK6A2o7HAhpv8EN8",
  "key12": "5cCrM4qc6WPHpSvPNDTdtzVnEy5Fvhy253rqfJKHE7BXY1vtzbsknBxy95wzh15ZxSgbH2n9QUnuScP9ux63b8Yx",
  "key13": "2S3iKta3za7FkWDAwDExfF5HaLumrRKCSeAXHxLguB7c1MVUyxjZdKD1mNvfijnzH89wqURawcURaa2TykP85L2C",
  "key14": "PkCETZrQpScPgbaBoJ7dxwhmqxnqCwR5Kq6nXQpBa8nkbpTTDZHzkBxCEJ78EiP1d2GnWe2HomUzcCk7RHMBSWG",
  "key15": "fyKjtdXh1vXVdnM9XfzoqxDRV35PPzerrCksBh5dT47NmJis1QYC9a3uYj5Lh7sunxMQdzaJQo92LGQbzfghScT",
  "key16": "5rfMhLHaebYpGuTwVYjcU4Bv7Ztv59Mqw8hothwwMW2HNE4ti34LrwuL7sDyqoeGc5aFHaWc26vdRyyW5YkVUvLi",
  "key17": "5TEzvR1kJH8VWaD7ByHtPGhykrG2H4PPbaw9qevuviyFV7MAp5jpQi1TneDPsrH5geQbMToVTJxHWPwr2vQYLAid",
  "key18": "3NMD1vtM4ko32B7DxLJTL5gP8tCdWjPy5tCuWRynWMQ2f4LiNatjc6LddpBjb2QcbLKN7QbQB8W6ykJPR8K8Z3j8",
  "key19": "3C1MbQbKUpqoM3fxApvztzZLS19xhFDycQh74X2vhEhjNVxNfbu98mk8YPJpck74BUugiDbuJA5ARD5xTkSPPR6w",
  "key20": "42dvVhLUKTVEy1ijT2yaMe2FWJzUJwUo7NwAgNqFjVmLKtcJdVQQKe2PYBQMZceAYqpQBUcr2fkKgBWP2QpZFRd8",
  "key21": "2CBGcuKZDsxPRTHXGcN4WT7L6VV2DrmCbwhMCs4Kdd1Xk1H4zgzgeLiuzoFJM7QzMMYrjDRefvMttparXBohx6w4",
  "key22": "5XJkcXzzgLn34ijWf11534QY1dA96dpDcPufHeX1VmzUSMXx4VvDG23mjg3UnAWyV5VwLWtLcAbqmN5cVJmgNzS8",
  "key23": "54gT7ydzXdkEGEanmNE6CNkFqus2wHDQDzW53NHQDk95AqPKQrLBCSuLZrgga69PQTPUrftJKdTbNd8UtzHhENxM",
  "key24": "54Wx9qN1wGB9LJ18NqwFAjdGUgZNVHpwc8sHjXSwR8aRfLmQhM2LCx78UpE7EZsCmoUeyEwegfJy2k1Me9UxXTyi",
  "key25": "5rwfXsJC7ycmUUL9qMZbsBcQrnh4YbT9fYuycsv3vjrkVsW6W5sAadoj4SKPT7wV6YCUEiP9MkB5buZE33mQ4wNc",
  "key26": "24SLJFNLDFoEwVUiWdCurQajnr5pAEiB2Br2wZAMZcTfdtRydvDSPYpoAhqPntFMgYpJqiq3XcTdr7qnu2BqVwBJ",
  "key27": "63o1U7Jsi9sAvhGSD5BRaSykgkQx2cykWykPbJCoQaFmfaRAtWQk24vF4HbpnDMvV2F6s86c99DRJHcPYAZXfLCG",
  "key28": "4j4f45sgKMxiawLdPFUuuUBsnfhxdzambWKeHHM3a8ih3dFmHUQ4LXaT4k6hei4A69qqejWVp4S491GMWTzBSjfz",
  "key29": "21fBZUbQBMUBLjC7HhHSC9sAysWLVKqRc1f6Tamz5DKBFaYpcu8wkztnAZULQVKfjJkm2JfEA31KXwqhro2RNb1H",
  "key30": "4S3vtYcF8GJSHQSrMKTA53yXwwAdJveeabUftD7JUyZQ5bPp2qj7cxd4joKAuYAeUZyhXtgt2xuAkiREUdwTo3Bm",
  "key31": "2SHtpgN5Xs75Q5cR5Bh9nmVshgNiodPJKkv8iff1zEKYEKYm8xjPnSxKpBLGCdpHua9Uxm3oMaeFTEwTvy2TKEov",
  "key32": "63YGzZAeH1f3bZTCrsRmiHCARHK5fb1PJUVYdYNnrjhDoHR1bWygsvbyV5jJWsRw91aPiYNWVz83nSkjpXRMcbh6",
  "key33": "5UomHJZ8f7krULoGXzeerNZAXNa3r4uQEjx3fXvcorqbppb6GWBPL2q1MFgZToyNeRLBM5E6KHDGt1xNYVHSQj4L",
  "key34": "5TwdajyY7YjdnQ8DPuPL6sg7uRxWtrkQMYjZAaajmoZuXU4cg7CWhA4DtihmsY9VAgewh6vuQiJ5X8ytwAMk2k47",
  "key35": "4NqMMxCcyX1rNRfLgbdrMifV219TzmcT8gSw5g2r1J56YcZvkAH4dcNpYuSuzGzFqaoF683iHmuTUkYuyhw1jCxH",
  "key36": "3zxrNSpwciQDkL99VyRwnCYVQaAxyRNr9qMYcXQ39gRJSFeMenzDdLRUN3PF6GckdbcgrofXgKnpzxGuzRbNJoph",
  "key37": "U4r7Nz8cKZKSMatPsGW2hTLnKxbvzV6WxNDQwSVJwp2AnJeZW1oYMWup2cPwQ5Pp1XeNgyiB7xggvvBx4nQJ8rX",
  "key38": "3UBzgm3yndSC7bvXiEn1UJsEe5UdRMAGYX3nQ4FJixCx9gPsnPXsWKxWtd1GzE49dW42ZRWtM3KbXSMmgtrdSX9G",
  "key39": "YaokcPsNCKazWAuTXo2zQcRYBdMk6BHBuGApHPkv5UmMGb765XQpYypx4iCKks2cvUbBDp9KEPZAh9FdgJTRTrb",
  "key40": "tLsLWwz55vJKFqXccDQjFiDKNbzGLtEJxizKJqfqHDZeLH9LdHLgfMWGD2yC3csVAGMFxGken5PFtt53SuvJks4",
  "key41": "5REihYxShFc4a4vjw3ahCcsoStqVnzN3PVK4nkJmDq44VPFDvTJ6cyRV7P7hDSHKN91ck91em5WF8B9GGRjyQzcK",
  "key42": "5nfXUPR679H8NLWsMzWbdJtCGht1mvJRmdLpnXhdGjHCBDPppdea2iLuC4uh9kVzzkiHp31CNQ6AqzNvXK82Zc4s",
  "key43": "563sfDXhpAAT439Z8M4mxCbYPrMY7mugwKDgk68VJVjQdeGjaAypMP5ZX3XmYcFBQwd79dG536TN1ayU6H2BoGfL",
  "key44": "5gU6rbjbSx9cYtnjQ3FidWXCqKT5XFXdkiubRvmWn3PXJTHju9kjdYiaL51o3WnbPQGo6nvkXGZvNSn9aYkuDYsv",
  "key45": "5Rjij8FuZx4cYq3LbSp8BJP1C4AThJwZW3eRsK29vj4iLRHxS2oeQBPdLsH6TBwn3VNeiJZK5K9T7JkqZcJubyco",
  "key46": "4CSx1rtRQqysmTZpZumRRRQmQWvYQoiu8mydxvy3jCZidhsCKKUUorASKTXWqhsVXUc7PkUT5qaqWboFdtbQWaYg",
  "key47": "4gYy7z74Tp1ijasiUGqHmVw3MXttVppsiSjP3RnCokxsNAU9jnbtopcCDPAfRdGTFB2JEzKpAq7vPbcrwsfoLAoX",
  "key48": "4bZd7afRAdd5P6wvJQFM6eThpSA1JdwazWym3PA3CPTUbd8yAFGBJzC7owPmED3jqK7U3iHQn9viRT8yVy2Rhg94"
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
