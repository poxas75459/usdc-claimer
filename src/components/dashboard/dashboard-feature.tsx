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
    "4ei6wYaarjdxDgzY1KgVfSTufKuRoRtJX8PFU8bryRkgt9ZRDQY7EsDTs46TB7eb7n5vhK7x1auQkDQXijTHHaRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aWLhwPFmhQRW46EkSXVj8n9NUN6hRe5ZFmePkeq6A14WnDYvqvUKu82eFhx3GnYQfphQv4rfrLqaDGQHAazim2M",
  "key1": "5ibYfa9WrqKGtFbXHCboQuXewqGRir88H2Z8LWrRRrFeepntqUKgcjaofcvLMFGxzFiQ6FuJfWgcGjjXXEAoWHQC",
  "key2": "2n1y9ujfkBXsu1RAaJYypHPwVVwhgZ9WuwpnL1fhAb6oUs9CfhV4ddN3K2vWy3DcLLbKmecJQumaSAXc5MABcAZB",
  "key3": "5WnfejzbauMkcmoBK8vW7UGosCBMbFN3Pft1VUKqxmZFSubWi5VEXRRtGt6aW7atL46CMHHYS8ob6paUr88DMpzC",
  "key4": "4VoBwCqJa6C1i5MFjwRkpe1VbKKXwf14HVTaxsTnq7wRHib98SxVtxjhfpfhcFkMfit6FbqWkrfwb3TsK54eF5cJ",
  "key5": "3rf6exvKgY1VuLYSVidZ3nM5ZaadSCMByRCFHcFusEhahTfU6F49ya6WLMyyUa8Xz8xQqU7JcycDH5P6tchRZ2fM",
  "key6": "53b65tZ3endfva4PzBtX3qN2p4D9536xGdLSohSsN98S8Vo9t5V6oSob8Zg84hhxFm5U1WN126MNnnNyjzNriUMq",
  "key7": "2HinAcsDgwACoJu8FwB5WcYRc6GXUGcE1dNFRoNgLkepiqv24gPkGf6cx12UtTEmxCGyMCngRmGQmQhx8nWNXHoK",
  "key8": "5i7b4iFxGXLiUcVC2thR6aAEAAoP18mDWNAZ8XQLSd71AUDywM9BW2Rd3qfrnkqVTrrR4hNWvVY3gpHyBZsMAwXD",
  "key9": "GEar4CexKnNnETCg5QZbh17guWoSrABBfxDoNGJ6jWK8cRYUkymnS556QrH3RgE8MSJMuRyyHdEfiuuJJt3KLw3",
  "key10": "sG4veA7H47iZscWqS1ZX9AyYxk91cqSwnSxhRws3Z8jbBFpyJXZnFSxVgHpMs8v3MKfQb9DjnGAYfsZQPHPz9Dh",
  "key11": "4W78eRakgr8JZCjTgjfwrGL6oaZBSs5of4M4aZSiECTFtH9BBB9Bg1r3yzJkzreNa3tmPcMzNb7dr8fSd1DFg7oW",
  "key12": "3jC8bVp6GvxYFG5MbCZrFt29T6oJU6LhNVsQgVv75k83BAnPA8zYEN2u75y75ALVbG1heH4WP8aHBUBsztCCbqKQ",
  "key13": "41fMwkbbhgBcpvguFrpTrZgDu4NZxiEcxoDud6dDjCyrvohJ76rZQAGp9oneZrBE4zgURvB9nEUS22eAhf8mZe15",
  "key14": "ra3puKtzfYVzkVPxvzuTLnnLE3d2C1CnUTqn5i2bfp9J1WEAPFev2GPyoCdAp6vwwvKUBUGFFdhjxHqGhxKPSts",
  "key15": "4AdGd9WdaW8wkF6kYKjZ2gvBxMDzjVia8DAEoNiUBRoNZaNsYZyt2murtY6ATcj3cUntJ9Z8zFJPTVuaudYNih5b",
  "key16": "A3Ajnw8iUeD3WpzF2RAEijoZf8bZ82Ww6ohQbeMLzEeJZuNGCPnjSVz5yYQjSNbCNG6Jpw4wS5oRM24rPr9FYUZ",
  "key17": "N3JW19bUXor1N9Zgxi4GrkpxwznSUm8qCY91pAUaX1SQWH8Cv3oxbUrtT2AyXFJZfv5Z4SNbddsZNbeGTDGvMdw",
  "key18": "3mL4oeu7yrd2gdqDiwyPEa9XZaMLbaMZFLeGJ3BHLkAwbTZjLXjmvqYiZ3NzAcebueQYch76uRnTHTUYCm93MXRH",
  "key19": "3UTJibr7jUwo6XwfWD5qZnK7Sbs7ZXBDc31e5eqrpx2uMPWTFgddY85wKNt2V3soTpvEJ4tekSD5EFaDpKcsRwG1",
  "key20": "64kY88vFqn74KpTe1fZAx7xaZAWrCP2SuvZRuzhQ2qMDSEJKb1iD4rkWuVNXD2xu4xjh9GepJTvrDCFUXoLdekU",
  "key21": "ftniFmCM4XKYmG5fzuafDkDNWfFPdSJ235jW3xocNpsDEADo9dysVyiACYEv3GmoqvbTR5xB6A3sStrPB55ywcZ",
  "key22": "2J3VUMiF9ksK5NSpWrPXmXFJWkdG3BajFqeC9QossYSzrZVhSEvDG1ftXxFw29EYACYSktPhx3sjyK9vPkhngS6M",
  "key23": "4WvuMa3bwgkqSswKCGuwCxKshS6VBz9UcjrviEGkseXBUazmpKE5A1f2WRdw2JAfm7iEERwFATe97V5Cw5rxZZ6u",
  "key24": "3NTnWU12SGtALm58GZGZ2WbN2LivoJCa6QgBP9Ja2ybbvB9vykc46F6rrzYQ2ybfXbBYLme5e5wGn9hVkhgixPvA",
  "key25": "2uUcGzgVeQWZe6ZLrLg7jjRkUtcDUnPmviyANhpeUEMbDNFHDfVQQyz1PTtT4nngVGZ3vX7fHXUQUjuhYLpAf9tJ",
  "key26": "4sbCtqKMb95Pm9JoZBhQdNdsRhjPSvKwwjmtJdYpuoid7ng4eMoGafMqHu662Zn9yE563KmM7AMtqwCiDHX2agHc",
  "key27": "W8nhawmqnbZzUoxcSaXE7WaTRYoNkVte8b7VDqXLSrwcryNYuSwxpUCghgy2iTSpxwWaGFVaiF6WoCUVjGHisf5",
  "key28": "49ZRtjyxM2YysrSqxAbkYqcAhNx5BKYiM36UCmq6q6YRXh6KKcxaQHwjnjPQ5D7bQrGhwTo6tVBYTPKM8wHJsTR3",
  "key29": "37kQWwdF6QXSWD2d8Vc3KL5GuuCVxK9hs6Z7DXebByn5cTDtK7vzzgftf3DeMpdzigncDp7q12zdwFNQZZs7nAqt",
  "key30": "5ERyJK2GvSimJxc5f6LiB4d9Usi8ggjuxSXr9qu6gM81h1nE22bKT2e9pW1N4Ye2A9gqD9vsanAuopTk5HxrcbAu",
  "key31": "dai3jTEdGk2pPh6wCuzNCJyXUgXSgfadyMhTNpCtyzZNBvpASe5LjRhAhjgx6gFUNDvVawNJjtra11FFLzEpYQz",
  "key32": "5pYuMosrJQivH7hskFasL9uhoBqi6W8YdbwYtfd4G1NRNw9jRXkXectk6S5Zbb5Eg6UGvQauTyDKjJWUcBoQ1GMK",
  "key33": "5ynka8PtPqRASNgPkryw2sVuMN7FzZYE9WAsrPbYndeU665qjrJK4YHV34xGemwqtkZWyPrsDR2eHKwoqBL3M4tu",
  "key34": "3dA8PgxKrbPde8n31X8WivucxzL7ZFnypRmbM6StJGqVAWfdHeAJFKxZ8CZzTnH6k821CxJWHTQf93BBJZCkvEg5",
  "key35": "32tojmJ14CwnAm2Q4tuQuHsxcZE4dbgz7F9fR9anRhTUcZcYJKKXCGtqb7Zu7n1uYk1GqJDBb8vDoSG4dqJ9kFgQ",
  "key36": "444j6dkVmQJfvEZkfiNHAEusoqoxTcjj8fJ8Q9atp16ATf2URpZbreo6FbN8zKhXCm6T5DmMK2YuhBDmzEqP8KXM",
  "key37": "vxk9GtDtVhsuHrfkRXvYTAVRHwyE6h9xYFBpE6Esix4f3qSBaFXKzbhgQTvLvd2paoKCJzhSA21eh7YxRy1WZNU",
  "key38": "4zLHiVuuDrZH5RC8J78AkLiF7MrFvDhdSVrAWQotGQL2fZ2Wjat3fZM5CNZQcYEd9xRFKzdptMVxXkgMRmdU5JE7",
  "key39": "3t9XwwceQ9jukLDYPgQMkNGPYneM2atbHfguMADGjTBfqMyw4Kmo7BWZFJTzQdcA9uSQFRyxQtXiDpnPNFMsQuTG",
  "key40": "3UKrddrTQYjJH8ST7biMkYNVasEG9a7LjZXVD75cTfpiPcuUs4ysLXDFWcWb4nNBDdPrpW8Ke7Tf4WKJsfpfiQjA"
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
