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
    "4nxakucabYnLyUbdHzGjZTboa3tWKiCjxwJSfwHURbaS2H6bfqdqLKZ8b7dtxxxpyuwPjCcPhkoHv5i4SJmGNVSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MkK38zHkZL3mL1dVoXJ4a8vFjN1qvfdzLzSyWDBh6fbujSA64PCjs9UdnsJE77wHH6k1ZrtQ1zq6nqw849HoSvA",
  "key1": "5p9sgBvFwAr5PyoKqht7rLZ4vkztPDiDz2UHqFDfV1DNqMDqhKR525sKSgjdP95XzLmwQSC5wDxV3bkY6hPk7Wef",
  "key2": "5EHvK2psupgSnHRpFa11xCU5yb9mWon41zmPPAB7w2xqBYrjP18ufzpxSk8i8tbQVCUzdqzY65zzXQXSMctHyuDK",
  "key3": "4MMPmHRieMmr6RboTLhhdzUeqEvHSEsNyTMf99EjGaBF6tRbWGGcK4Wwuc3srVW1ecTSnie3CzwU8jDRittCFHi4",
  "key4": "3BbFF95ixtSVXEdAYJoAE6bz9CnGXZxzkLXLojiNXhAUMmpGhVRhfuN9vTzBuBZgqQqe4CNvjSSHJAoU8EtpXa3F",
  "key5": "5JiZHLrtkEkjkVCDqpkozETtWiNUau7MRg4gbtDgsEvVEPqvygkMKy9ZpcdxQYAH1nz64hLcfLSjMcbKVq6g4JZP",
  "key6": "7SNCHJ3sbt1T8TNoKD1ByServCrvjCX1auLfZ3G2SkpqkTqZetsmdVxGWZ6DAHU177jop2w881WUAjdJgx5xL1V",
  "key7": "3C4kQ6ULqd53eguZtDcddPgpSktuJjfJDNkxBdqwfBJdJVAv7hZZSmrRhgXjdsaSeebSgyaqapEnpxbTxEBwJWJs",
  "key8": "3qLaMTwmHm77un4sGnXCcDRh2y3E1s4EC5mVK2CS5vEmW6shTQSQJhptbwmQ6fpccA77CDzg7JJ79wd3u4Nqi2Df",
  "key9": "2wzaka6Ju8adexXChUQcAsAzSTCMjqLpV8bBBPyuJFqqMZsZpVARN5y67fBgrGd4HtSj1GSshCHYcM5J66iakKNN",
  "key10": "63dEaHTKv6Y5o9AYvX5oTP4wLFZQKsgYHQesXvgxWLp3bTmTXTG9MgPRYNp63D43fRBctwdZaQWHSXLbhZjoiX63",
  "key11": "Z6SUhH9Wmwh8yHmefiQwpx9krKMzSnkcHbhK4g2BNJ55oBdUit2L6n8RtZSjownENzqWMeuJEkGLgRpurJPt8Du",
  "key12": "4F37d13BWvyfo9gZvDQfdxw2yGgBgfCRVr8og2dRXYXzRi2zpS6oGUvjzGv4PGAsMjRaAavu6U6T2vYrmkjLaa2d",
  "key13": "4SSPujMgQ3WexQNaXkNKECDX7SH13nHPVjg41ZtU1ok6FhAk6wBJuqyZYscDrXw2BBmbYbjh48s2Rk4fiwqom294",
  "key14": "96pbRb9ZvwSwUGUvA3PVbmbGcixcTkqbzRSN82KmqyNFKr84HjL1osT5GsoHL6Ks7JriA6FBhv71Qsiejp7c8Sx",
  "key15": "3c5nktMn1FJiT9haiM9CP8JTUmRigN4AMFN5waWezHNrDj7qCskBzhukb5YnvvEvkc4Es8FcVPU86dY73CeA9RMs",
  "key16": "4Sncf24x9knueYcQLAmzLwMRTbiknguFTYPrmsRoyNKq4GC6gk3VyeUw5aD7hA1a3QtRMgQMUPRG4DehmhAvxjYo",
  "key17": "VjzYLV1tGW9jXWN7UyL4cQssgcBxbS5sAyVow5BmuALTTTz35LqhAxNxozK2b3EhMiBTpZCVfLwYywuPXCJJBkW",
  "key18": "5gD6CJmBKACK9UuBYDU9DcfthQ7s2dQ7fqXTxYgpooR9BWcawA6bXtxsxFcMFjRNeBv33wCPAx1dMZuS5yWoccSz",
  "key19": "qTptpgGFsF83T2qUQzv9G2HrcZWJsk9aGjPZo4sNfHKSor9EEJWLMjQhJMWvdun4HADzM74KMuETHj2fMjrn7vM",
  "key20": "5LB5r36Nz9Cv97NYq72dfcFApp4fhzkETUskqNWFp5V9uB5idsVCuPE3dEWZUmYpCtKJuGzE5jgAV5FvkRJ43MLZ",
  "key21": "3wgsp9aDv5wrxtFn7iacqqcj8ZaxYCQqqq9Cb2Nu47c5hdLgwnXztmsvhNzQ1gAiFGdTbeKsKz5oZUVx3xABBoQ7",
  "key22": "42vwGZHLsYoDG2a4RkoGQhoVLx13tH4brQyTQkp6NnQ71wLmvsh6DijCp5fVrUPbn2aMYXHkMXHW48Qnu7Yk4azT",
  "key23": "5BXrGyE1fcL9Sh5WH43THwAYCHWRrnZiZb422xohCs91wK3hBNdbetStGvUHZCARmCrhQkASxCxg9VukRJfUd8T5",
  "key24": "4Nui7j7NLDXNCsskyf4gupn3uMX8QSJMEd38z1A3MaYDKCvusW9v8ghFQnpDLmY1JibCN6zxmZwYUX7WKZh1wf9H",
  "key25": "3kHcdxa4N1tetLcpXNLNfyEmpQ4A4pyiEdm2EP6TZ2dqm1FX9aLpQvtxoqAkRreSwoWNPGeLpzPSTiREKig1WkaV",
  "key26": "Z8GgWzw8vjAhThwbKbDRJTFXRPdu1h3S9DzXXjB4f52bbCtAa6utFanyLtjbMVDBN3DfhHbEt4khiFVCcC1iwZ3",
  "key27": "QtdjvyJVKzEo3Yc5oNHyLakajJBB2XaoDvBPCewKcbaAj5Sz3Sii83kVZJh8rc1tn8JA8TnUKXHjuHpBwnmU2vA",
  "key28": "4ySmAAKYbdzGdwpDmSJnuA7WfCvxK31LbfHTJw5XWRkmpFMWZB3mz2wL6y1yaV6YnbMRzBYSyyrv63rYm1v36Lmh",
  "key29": "tCfz1fdavZYEHocwC6kirSoinSV2X2kA3JkFU6Eawf32UCkHqwNayKVJydgETwwH2qA7QKiWsfgbSPBN38zHomP",
  "key30": "PzFK5TvJvQUHT88uZsVctZEWdCSn8gMWMAnV2r2ZTM8DKm83EfCSKEcfJPyyc1hVYL8qntrod8wAnH1cDWGWL3z",
  "key31": "HiDsbguVCBiaQwwus1uuN2frQ1iP9u7WkAab5eySagSTRtkKPBQuqxMvNnuHngxo3Bzz4M3JUhJU9qpskdfHz3h",
  "key32": "2EgL5BZ9DNqSHdnv2Fm7nqvLP8iwop8zzr7GjrLvQnyXLePT88b9wVTvmtBDwMZDndtNWnFimJtjTqTKzj6NoPsW",
  "key33": "2drR7cBeqyhk6eDYG3KPgw7Ndqht2gd7vZVSoKamJVYsDQU17WmEUtmQSriMDrvgZC6ECKkrEsSRb6q3iukqiREV",
  "key34": "2jXiwaFJCE3UnPEy1cmhy7kJH9ZadHfNrisGiCBpRarHByc9x5GbuAQpHZHC6oYRrcLpBGVzJxpq8mbnGMyDiEWm",
  "key35": "4McHhnbrtFsFmtBoJXAKQGKZKH5QGZDFgt1fD1nh1zRFDYdqS37kVgM9WckFVByAppoZUR3YQXKhGuAgL4rhCZrr",
  "key36": "3xbFP1fDD4pQW6x9FwN4wNehNHqCHjcyC9NhCECuNu8dGMGWQCRvXiTzbw8Z3TWsNDAT43R7RhCqAyVaZTHyX9aU",
  "key37": "3Yui5jtGF2A1kfw5Szn4Lsj5yN54YGGGczdrHJpVnyBpSy4ZyA8BkqwaC1FXNTdWUxuj95ZALWUrnizb9P5e49SU",
  "key38": "a2dSCzBsAtMuBDfFmYEuB2VktibpHwhXF5rPSD64c1m7tLpdKrjNUfDNPWrdoCcCpBqoqDZ6uWZLKugzz32giWW"
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
