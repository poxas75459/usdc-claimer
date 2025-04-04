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
    "N2dcsCEhBkgWARQzf8yFWzLULWqBq3GSEHuc59prv1XU3ZMtydUfFBix8YfByGTA6pwPk5mzxSS9NVfth8zheP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wptSQVmU1qpKRkRczQdFx5jgVQ5aNzg61yrUjUAD9Sw2i35babgbcsPQX9LyhGQqA2opnmQtZrXFRQ7PdQWqjw",
  "key1": "KvA3P2oRV8MKeVmpwVAC2eGAxfgqv1TV8x2Pycutq5HjcTB1DLJ4rz3kuNvKU7s6gzQCFsZc5Pm252r589GtWf1",
  "key2": "5gD5bFJUTFWWAGDtdmGbDDeKZw4fzCaFQWJdHKuEXer2ciSFWjMELSHRP3sidLznqbRoFFtAjMrnmBAzKKo1opEk",
  "key3": "245mXr1P2noDUen1ea4gVobgxDe2xpWQapV1i4ZEni4qnFhp18VWP7BEsJpCddNtABqVc4bZEafxLJ2abhV94uqU",
  "key4": "2eYsomB4fJRkcqh8NhLBDy6ciuoWKbh5WGr9ZkoHfa8V9vWcNSSYuMnTJxieeWdpd6CTQeVQv5NhKmBV6BcDfQgK",
  "key5": "24h1d3thvK4cWt3qXf9p2NuXPpsVcLwvFZc5ctRPNt55JEKcQYPEHjNzXKY24YEsYR7gsfV4h1apydCevFDEHdiv",
  "key6": "3nc8k4mM8qRHHCPVVUoXQYj8CPFCVvQ1iqFY6j7teC4ew7HzwbbCBk5EyqnvxaqFePUK44j1vbfVxTt2Na4Tg8TQ",
  "key7": "tuWZ7fx9ATbLrow4CooXNqCiXwPb6JoQPnUoT4PPxpGcRML2NdFg6TZ48E228932dpxbp15KkrwcxWmtJe9PDv2",
  "key8": "2S8Ku81dNTwKnfQvp38QDRXrfQipxTo9dFDQiMN47wz2DTo7nSRcjey9RdNsLk8sc9WjFGNWBnvugzfWziG2wxKT",
  "key9": "3xs1b1Fzm4fN9qTohLCyks9FH2Ez528FAKo6rQULvWxkoVXCD7MVxoKXS8GeAGdW8Y2La1pSWNgqrTWwhDp3y2GB",
  "key10": "2s2Dfg7jfyirxm5v6EzqFA5X73uWcu1UeiibH8wgVviuhfn1Edn39bUuDGNP4eZEJV4CsWhSFd9XGKmCfwFxaJZ",
  "key11": "4vYasgsNUUcyJ9WPyg8ms8r5duZwLqdDQmC8y4oeT1RCnTS1VsDL4TjQJn6TVXAuQJgzKoHDy7wne2SvrG7VeyGp",
  "key12": "4Xf7RquVMzaE6oazgCqmK916EgRNdcYwM7XLiLRWFodj2JfjDjXKb8uoEREC4Ap7WrCebmdGysPpA5FDTG2eKnrJ",
  "key13": "2jcQiDe2XajD4T1nbt8XWZ4wvFrQuRhsZiaULUbmZ8hFgwLJt8aG6qLS5hFWohxujqYZrVTECUFWkVovx862LEPe",
  "key14": "5Ek7ibVMYVHkXk9rVa5T6krm1SDzR8CWmdbjEhTt5Z4jRHQKGskJzYsyf1NYyA6uyMbQ7uDQ5FQiGPSStfxKCqEK",
  "key15": "3vU88sSscVTyctxMTcHWh2TQtERgX1qjkycEe8oN3Z8nAH2yXUtLRyXQJgiZyzbgxast4ewqvzCwkoRLjZvRtpLW",
  "key16": "5Wkm37K3bTGRQSb5ahVbjVNAdjtmfh7q9ZvPtyAWZu3oYELFwKvuBFNrJNmcu1eNzcXE7nTb5aTDnWpVvF2UdMz7",
  "key17": "2N1VBRs1sPs4KYeAUpJywxUZpbb2vWkHDxDbNb5o81NDoy84QUKaRNJatkNADWPukRFz6B9VsHJXfjA2LhaRhHYG",
  "key18": "5Qxjhsu493Xqk2RfFV6jvMnnwCyPSAMhLGRmC6ieoagdCtzW1AFPVWKFaG4dSBYXTt7wxPVzvusuhToJ1XYTNiFK",
  "key19": "2BUWJC1ZcCeFujQ7adJxWEfJAHTJUdnjvoAFjcZ39VjLMpK54eFZQfLdDUMzysoGbdgLU6imMTaaAqYdwxoqJnbm",
  "key20": "3ZCYVeUEmnB6zzUBqULb2hwM6ZMxRBAR2KGe68gLbXCu8BrB9azyVV65PdhU9B2jizcN1jFWnvmyj9LzYVFNyroN",
  "key21": "3dSHJVNLRHKU1pcyuvnZz7NbvZkCAbzaAvo6RA7YNr5hYTaKgTThfCXkSNG2D7Y5aRVNVYw3HKWiqxCg8CRMMQZ3",
  "key22": "3XmGePPbXKfHJZ7vmT2iQMKQ3p9u4h6UQNAD4uBdyDiSSxfCjGq7NBmwiv5o7odRqfJ5Q8UoyfFsLUD1iK8AAYzc",
  "key23": "3xX88YybousyArbxK5wztTYJgnocx3nfmVUxoawGv9wokGMtg6psAh3e3adUr8PwLHGw5ePDV3dPdCZiVcYVFaoM",
  "key24": "594VrDpyQQe6YwNA4KMEUNeEohrZ4CwVzvfNJEXfXxXWajhD8ZUVraJZ7eroNFK8MFgUickq71EEx5j1KWDGs7m7",
  "key25": "42TQRqPMMTcDuxoDporeFDKMdx6UBAKo3WNGdptCFeX7j4LWeVdwHeNUBE7s1cdHYU8TnNugf6inyUuQs1vTUCgW",
  "key26": "4iVaks2dtixUzhnN5gd2QWK6KM3J4JJ5cqnCaS2tWsXkyrHnA7ohRVpTR9LUPagw1qwNSZgpU8bXgryxG5QQ99fZ",
  "key27": "2SGT4WWFcGdMf5Et6aANvhYwmyBUCbTgALHBKmLn8yhPv2H9a3e4SxQ1cpEs1MtwvCoZDUkovFC1VmhPuAUpF8RS",
  "key28": "5syTYmWHV6vkGZTauNpoZ5wJEn2d1os5bDFgmCPtNK4RokTpLNn6GUhiE1rSqYLYm5bRVWLQutTxm4Yg9RBd88KQ",
  "key29": "4onntykrYMJmHx1FRskJxQfw76n8nz4u8xttb4XA9qEete5YqrV5wQnVcPi22rX1GSL69WH5iBgeJWAyyV1fndrh",
  "key30": "2rAFuSpTXcKVwmbArhGxuCy3nNjiBHHSc1biTexvzrcgKTcLVjxn7LSGJkuRHe7jnrWNUrLskMw2HhaBpWGmvxxd",
  "key31": "ME7yuuyUhfNyFJFyGTAoPDnhVkWNRVkuQWvewX6hSFcQWowusqPEbXVDRsDojz2pfCwuNZ72U818S8udWhTQ1DN",
  "key32": "2eizUQRUtdXBGBvzmJtS5gDpxnDWZyuFQ6FnBLjb2HvXFLvpkemJ4TWUsNn4eFPoTjxtiJMXBCUMpF2mttPPhsJP",
  "key33": "5Eer8S8oAkduHYGZoCSXTZdDFDTSmYX3QkPN4fBTNBxsa2VDbMBpaM3mfMhTJvQufF63hWFU2BzBnsQHKSoxpesd",
  "key34": "4SnM6TG4rosEuLYeMD6SxFGFkMxyCUKEPX1hwf2PPaXUoKSCyqfUYtsxbww2nnGmSWR1heRiwazdjczbvkJqX6Hg",
  "key35": "2CvuzgDrJsv53bGo3BWxzHuy9hkywGo4PC7PndFxh4hEKmUXcYFuaAs2jwFZbbXjXMZYfts8pzynN4T8VMcHMhSU",
  "key36": "36GAjYT3UxfceTnTCfJNygfjgP9pY2jAQ8aFLkxb58h7sYA3MjoaYLtUd3b5PSQPVTSPqMq2PYP8WgbGjzdA6UU5"
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
