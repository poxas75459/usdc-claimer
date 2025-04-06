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
    "FYUVPjH3Je7frfw44iRK383XVRtQxbXXonwvfh1maa4PHaUJ5r4PUsLzFnLvGmQBPsr8XMMmKu4jua53qCBnDN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ncyncaTX2UhjCC2R8W3TJ1ccY76xRdUFVLgiDSjnnL9LqUEoKkjknmaRuXFZ1cuny1mZt1H4xNjjK88ffXzqXd",
  "key1": "2G3HuX9ZS6D5yUR9Y64fnJqZHUvSmxxvwhTWZ3LxoUrkV4jhtxD5SWvbKbn2KNXT7FJCckPeJTxBT5mTU2MXtYrd",
  "key2": "5LMgUb8HnUTZkw5vsH9oeCkXmZ9n3UxuidSe56QuX2kiWhhbSMQhchAbNQpJjAeEMjbsyCg1DmzuGN4Mx2vyzY6H",
  "key3": "2eV8JZpYzdJh3HvfWCVDLR4H6EcXhauhwi3hU7ExNw1DPEnNf7JqFqKWqnD8r3owCnQRc3x1mSV1pT9oijzep9qZ",
  "key4": "PjqSkAxUybEdicxV5nY5PgVdG9ESrzPUxmhKbX4JmdvSLa5CYWYDGnG1D3wEPL65Zi48KSgQm5jGfffgeVEddwD",
  "key5": "VkY4uhoTBDzmJ6dGxjnFaJt6zsRsXq4t6dFHH1THX7v8U5qmHmBDw9Tp6NsWWChZ9dTGJDh5JVAEi6n77yDhzUE",
  "key6": "5sfr4wJ1z1MexBRfXV8JqcLKjAoSGbetroS4WpsufZicgvFoy21si3eW8TWoHPU7UNfj8hQCqiDkPgHj6mSXFoE",
  "key7": "2e1XyVRQXXNNrQEUcYKcbYM4Lnq8CfzqVxXq1pPcwufbWYh3392kjZHH5Ezg4RBo95vRqAssJtytPEDPr6eofPRQ",
  "key8": "4wP4z1mba9s3xkkyQm8g6uTCJLb2YGGxXv1JW7ttwrT9nektk6DrCN8V8qb3gZf4J9Wc4CWtpcFkcy692h1pTn9y",
  "key9": "2chAsj1SoA5pHZ85MRwAVsJK4oB6sjzQHYmufTMX151NCyHJbBAAfS32tshy7597j9vjaofvdVispDqKFZRumCQk",
  "key10": "2HoLZbafy32ZvMg9i37zea8juNfrnduLpXe2fsjrw3gfstwj1MJzx4nTvWm9kdGJfN9yZVTuForgpEFJR2wgMGrG",
  "key11": "2zw5ispjcmTnEvQQyW2jBXx2xabcVyMCRieXVJY2UtB6PdPsAirsyVjUYjV6dtoQAhkHpTJqEamUp41ugiaRkR28",
  "key12": "Tv4KX8HCfG6SrT3c5UDnX6V7NZqrNwNdkNHcTsXWBua94ihQUcnm8KiBwjsRowP3zsaWfUuNLJLTUgqYonJKcJC",
  "key13": "EEYVvvWo1z7DdSt5duPd9dhzPjSFooyVGgMUY2y6oPr2qYkSfYpMdWEC1kM38j3BCbX1uY3Qm4UY7LsGXY4p3Lg",
  "key14": "1wa1jFV35eymmfto98N8buUqZaAPLznF3WEnvsEzV7SJTqin4jAEoESCLGM9S6v5ynPTU9RGfqMoBrFuTTsGuHq",
  "key15": "2sQrMjCM33qzkqhU364WVhLfH71Z2oHxzR4GiPr1ztZVPtHdJcbZZRuMtSfWo5rmNwHzWnqQZUVyb2PVC76VTr65",
  "key16": "3Px5pQTuH9N1EpqgjQoJixvznmGM3BiNtnL7qpMK1qXFW5hZjtHsz2uBeao9vWw5EUH2N3NZAJXNky9oY98bgCPj",
  "key17": "PfPmJ75JxsiUvtRYqJMA7oMGTZbGfYUYDKCVQT5wGqFQGe4gERUJQDeGHkASrVifhPyEgJM3c4cxfiMchzxvGa6",
  "key18": "4uetBwii1fkQer8SUB3PGWdZr6hjNcex4fk3kPE8ds8k9Cuqy8RAHvB4wGjuJ8Mefper1Edcwcsy85Vy8Zg75oe7",
  "key19": "2iXmwCgFkAjNfPMsso2gEeomtjmrfi5GDE71xHieQon39gzNv8cs3XRf3vBh3hpg3qi3p8qNcGtEGZy7CZHavzix",
  "key20": "3e7qbJZpQBA6y7KiuqeifXcmJzVWpEzQeHDVy1WFsMddfAk63KEV7ZpDUo3pbpbvJaEpdZeLoJMGkH7LnT1Ym91c",
  "key21": "2SvbQUxHH2ESYawEBQDEGDyc9JuWu1isihDjoxfmVdBvyUQJ4kbTnm2cTXfZLkUyieFBPMvTuLwHCkNBBqzUNBeq",
  "key22": "54PLdMVgAwBjUk63eqHCMXh6hobdHn7CMy7KYELGZAUFDCREGMwMW49pBFbyAr5EB3njFu59ZApYH8obg4KLAruA",
  "key23": "5sKzqdBgzYLpLnj56pHipyDWodRVsusxy1NdsRxKZxUcfvzZXvV8F1rj92PaitQsB2NMYiWzCv4onZuPDvgXDmb",
  "key24": "nkzfLpi8qJ5HHfaCYzmuPc8Fn16hUC92YBrGFwidT4G1fP2io5kUjQUm9bSix1cpdgkR1a7kGVwBf6djz6nEs7t",
  "key25": "2Maw1LepHts9oy4ZVn9okpwZRAJGuSUodY3nTX8W6L2tMZb5843rRAkYbXAd1qfSP5KN6vcv6587mK5MKY81gqYq",
  "key26": "o7NVtiyTjcvLpiJ7ARqDHe6iTdYMHHW29UcaBmnBgF5WRKgcwG2VQF914hHTdQhDQFjTH4AQ5FgDktwrr9DciUA",
  "key27": "3yE73SyLQuaG8snPnoK1sApNN9wPRbggDiRtmecwN3BE1EVq7HFyngYofgEebv5yYhhCPioxvVskzWNDNxxfcmME",
  "key28": "4byqGwECxxLmifbwzMYd9C3uhzuUZXfmxqrrj76nMi9LgUYof3zffU3XFn8F5ztcU5Ls8AYCUeUjVL5JUVSKNZKQ",
  "key29": "8M4YCwyCUfiQiAGuH4Bs6TMWQxyEsE6beQwxCBDBitLXNMjoEEHxr76fDwxoJvojJJNAU55X53n3oqa3NbiAW5h",
  "key30": "e5j9b865qNbHTG93onXpz7YHo1GzGMr51nsFGPRDs1MoxkXT3ZULsp6V52i8oDkJbCUZCKWg5UDPsT9iFv6GSxp",
  "key31": "2oGH55mnZXEmP3fLT23uKXgDCWu27KCMzXaeJPM6zXySoVHWvmHqWXsfPwFn6SfmUXzXocVdEizwwSHAE9Riv7F7",
  "key32": "4MaHfH8hknrPmDM7iUDW2FKZRhTJ7CahEvcPpX6LFyFbStaB8Gkx5kTsBMhC8H7jz6dZCCPt2qtRVaNDMjgnLeev",
  "key33": "3RBE1Kh2NzYSPeCShy2dR68QxkmnXKPV9fC4HKcBSpFQTA7XdYyFXFXbjNcninDgqyzQHZp2rrx2x41JKgKAYfaR",
  "key34": "4WqLE4Z9bKvtFBqdDp7T3sRnHPyU8GBLuBAd7Z7A5Qwudo6qHB6twoaMi6LYYWSfLdioUdBjhg43XKDKFKYzKDii",
  "key35": "4oCYjv3Djwf46F7AZ3hMkGVmbUiZJGaKmQoaj2cRMUU4zVTSPpWVgw6AY3HSw4F3cBDPmXCeA3h8pd4eDLHMkFfC",
  "key36": "6z3Xtg9Gwvr5HVdV9VePWuToc3jC6P3jZ9frSLgJK2NsMLBfBJyVx4zi1ovKJUrqRbibBsxZZB3rg27Nkfwp3uX",
  "key37": "5FBuBsN5s4bowi19zEFLwncAspCRiV6edtTDHH3aSNnpgeevYZq6vSoCiSzNGeqeiTZEQLYt5QjLGteEpVpMDB7t",
  "key38": "5RxRuGYz5u758yC8es3X6zSBU4NTZGGGHBSckap4pHcdJo4ajuLqJvwUun7W2m5WDwuugHBMEzi9LLB7CzWpLqt8",
  "key39": "3KMmjb5kbj1MX4XpskGeSPamXwxJyBw7mAajGjDZEYLdiYL1osxuuwBgwNdQVkcKAse2fCRks4qmNBSvcyWx4E9J",
  "key40": "KtBPtbrruWnRhcBK5FMH3i3YLcXYvtri8qt57v6KoptZq4dNZWs8maf3orNWsYHbDfXrL5McaKhvRxXh4GXamti",
  "key41": "3BNjQw2ViG5VzNqQnjz7b8R22P8gAvmuuUntuNgzQ81eARu5U6kBkwm6FDRSDgzJV2YmBsA1BPq2xD6jvma8qoxU",
  "key42": "VtshZJkczDxmHsq9pUeVPwKA5RvHtyMSCfaCkwtXSGGVGrCmT4k6MKCpLJQ2Ai3JdLLWX1tHUkLuzMNwYBVgkMr"
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
