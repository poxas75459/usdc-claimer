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
    "S5LnseXuuibP5WWuRSMZu5x9UsgpGUshLuwfKcvqe1vjtKqE4tR31njfzsMptAoqjnWttv65jhs7zwwoEbwLYwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hN5e4VqM5S58kw97TcJvYFQMRM5BEYUQhTrss7rTe6PQMX1uQe9EhXh6cTsdyFTFXmXzyiBsSbrpo2T8AX8mgeP",
  "key1": "3ha1kQWim7FpM7PR7umVfCqNJ8aW649dervAwCJ2oUAhGpB1isoZHvkMqGsxRPnt2UyXypUYty3m5UX2DxAjKKiK",
  "key2": "3LNFWVzMrCm149gtMQCgRzNKjBpL3yPj3uLR3vCh9NFhLFUQ7UQoBuKJf5LkENhuVVoMWhw7vK71Jcg2uFyfeoAB",
  "key3": "2izk3qJBvUysU13fvsjBjbUwQDM736FGU8acei1ZEbqytGw3BdkBPeNMRAzbkt2SKVwzxzvv3U9xhS72EVoKKyPL",
  "key4": "FC8XTkXWidZHcz7ksh6o1kRLv9XoZs1DeKPg7pboystNgaQQze69nduPmCbKJ7cvf9qjnAUnEqFyEE7NBtCbFZd",
  "key5": "5mR5iBUtUxoHr4hvD99NMWKfdXbTNUUJvKUN6e9wGma4fnpGBdBuExUxBzbE6dVytv53uN3yAwxEiGwGSmZKzN4W",
  "key6": "5kiZnGgAZxTpEa4uf4HQEzx2v8AfgkZYNsgtN5ohsfVeDdWWyq4VM9S2H281rFSUG8ggqrbodUJ3zHcQmtR6WDCT",
  "key7": "4NpXPebVa1XudFXcKjU9sTmMb6DwaT7DLomeFNghjJPpENezu6rpa6ELxyEep99r8ouAxMV4QGkZgMY3FuXPDDgM",
  "key8": "PR7C48uPpCwt92ou383Q5iP8SRMksbm8wcbvYijGAMGCkJMvWAqSDF8sWwPQqfViMN3J7o18AwrtSc5N1dr4yGs",
  "key9": "5jiwr9Z3Vi1VqUUTeVUoJFGa4V1eyuhGjo6KAgcydmQKXZxYDgoCQNHT7AwTUSCFBDZVn8SQwsf7wzJfTtxfSArJ",
  "key10": "4z4vhrv2QLGB9c52KzQ1vyjn1PG6tGDhazuaKQTXTKAnxtLbcxFgerVqyYuaSJ4GtNutjfDSo1quWD93wHysuiJW",
  "key11": "1BLtC7LMk6FdzYVs8uV7e6whuPLnqej7BCt2ydo4wKsxv4E7Zp24ieBEFGeEd7z5P4KJV4vr9cMSaZLZPhnhHXF",
  "key12": "4zNVRL8s1YodCKvXfPRRiWZTMeBGFmuCXr2k6CC2S9iHgfWLsKmqFsgDLkJbECWUtTS6Hhba9k41kJSjTtsGAGNa",
  "key13": "4aqZoRgs6QKraDNLD8xoZNKo5kcWJF4Jwjgm3DHfJmVusth4veZpnssro3ABVV6XPSBEfWLYb4cWaH4hZ2VuH2Ej",
  "key14": "giyNeYWWEiEVz2tuBJZhTwBauY1qmtmMs7ydR9xmqWiMpXVL5VrGEjEdPMApM1TvibvqzdVhy9FwPkTs6Pu96mX",
  "key15": "47vNkbwRbGGYvyBeC6dvPeEL7H86ZwU6LqLrSGSVUStnaR7dPYGC9M4grqfsdGFmTxCapSKDQcW8Q2mB48JQrywN",
  "key16": "2cnJfkgzCxqPnfwKqAfQYyzgkzwYP9vFp6CoDxhjDFQVYPVXtfukm5UBcBmngnkuQX4Hh5gyfcUrYZkVA9d8vzeL",
  "key17": "3tQui4nxBWTvrKpRvEMrgfvwENF4P5qnQ3sa9xXvKyfQn8CpKsMsFBekuChM1qfihMnKmq3Uymvcc85ZsfNfxChR",
  "key18": "2ZUG49fnH4sRbNNsP2GceLmihhbfwUnwnXiPx6u4wXmGb86uD46q1VcrY3CfHVhRQn6KtMmoNhp6YxhMEfWdkrg2",
  "key19": "21LHgupNawVckMquRFdTD3hmHzADn7UsxyXeRQkXvhznK9ntg2RLv2m714KyD2VHQmqp6u5gU99Z621n4FGHkhZF",
  "key20": "3EXbMLEbjjW4hj5XYdjASvQLbqcdPRx7QYHpZ9GrTmew2akcurMd6AWCp7kJphEGTH6ThJiJpBFfwmBvDMRyk2yk",
  "key21": "4BGHgWBosHsJiZUwww8FqYARrZVDiSr2u7bp7WU8wLTm8Dh12zb7d548jaUZ3fYMQyNUbyqeh6yXmxeAGJHFNMJw",
  "key22": "4NNLyVHLknSEYQocEJANJkJQzwyLM7GUt8WyeVsrdfCMWTod579VywdToJYnk2ACUmxzkApN5FEpfGpqzK26Zbj4",
  "key23": "3gQE9Xow8dGprPELfLhrq6zD8HrD2nPhsgpHv7Yx5BeneGsbDajcFzBHVk24SwBcGcaM3JJ7gviNiCknxstHo573",
  "key24": "431ZYnra1dTSQAwj14uKp2Vm1Wuz85oQNb4gPfi8JEj78S33Gcb2whuFNyMVLouD38xxz2efwnjTg1EmAd4ovqPj",
  "key25": "jTL5DApwT3bP3z3KZo9JU4KzW1gN3D4ADNf1MvRLULWuju8kVHU99C7UY7Jbv9FofNUsKn97BC9fLLUe7pAF5ut",
  "key26": "39Xm4J9vhWYfVGncguL1cLL6S3HBRKZfSQvXaAU6Rr2KDiUSHRqMh6t7DeZHYe27HSUwkSm6SG9nDXPGu7Tmr1Gn",
  "key27": "3sxXgAyAK56WXttaQS36i6A71FB4xiK5KP8N9uvkrMadZjCuTrTciytYFju4ygjgqTZeiQGpCedzcGu8fSkLHdEx",
  "key28": "5khVCKobDBXq8pTDSBh7Uc1Nck6xoBzynchwA5Jc6cfhQka2kjXRKqbxn2bk5FNZZzqdLe5uCTGNgcPWdwgpkbeH",
  "key29": "wbjkZEjKspzP4psmDAKnJU3vBMK7RreMJPxiqy9XHJAArWt6x4tjrsZP9ZTHdzffmnAekUGRpDtS31h9iSdcaW3",
  "key30": "4xdHUD193kosSn7S8pKUW1rfKbgXN8HGdUXWLKFhZu6uC5Hm3zN8AtssqbH9WtMCyqzH8TvoYUvymfDgAE5CrBSJ",
  "key31": "36Ffzoc355k5xUFX6RsUK4FP1vsoQzsSHoXWSU5w58G6fNr8kLtsqQhw8LdRaW1peGDszLs5kWSz9AvRGWEazMRd",
  "key32": "3aZet9qz4o4928kVFaPsDYeRCEuuHRr4bQCRMEdqZiKeYSEdNCE5bUN8oQQYeCUCj3MA46mToq6uuSse3r151RAv",
  "key33": "boimfFtTNwTFumZHsZjXjCvn5ApnHwnZ4aiJsrVsLBvDSs46YzeLzMG9MA7N69Mq4a58pxfLyxSMkQWRdV2MaMR",
  "key34": "644iUfUWrgtMNyxn6HqCT2vn6E4MrFKqWgSJDkS5LfmR87eYCFwchBYH3vaR5PGGMqFAn9QQfrdWPn9gqEuVZtyv",
  "key35": "3Hgj9xBDfTcYKLtXBMZsWGbdsTYdhRVzvHtYtpzw1r2BfaokDDNeFiNm5n5FJq7Pyqf88UdTG8ayG4ZHznzq3cc9",
  "key36": "5mx1Y3XX4Cn54Fuyp1tusyR2NWDFbichbJ9DpEtAhGTRuhhseNHBQZzSPGz5CyCPAREiNAVFawx3DGgxX3ib1wWp",
  "key37": "M9B9AJegmja1qY4whdiDNUoF98BRyxJVW5WEf37kGmUGjbRyeG9oNh9Z2aVebnXxWmdSSvrJQS9ob17tmnSZ5QQ",
  "key38": "aqYAUz239Nysmm9ckojeWdk3JmiZi2Z5yHSPoZ58jnoBszoMP4tPEVwBzxPfcjAMnAgNnsazKcrr8G4P5zLfLAA",
  "key39": "24kC6yE5U4NmdEw7axQ6mZXtaPxJjrbLcF5MGRx59tJA7q6FmeVBnCSAkXUNY7vPqLZQG17UqznxUxTUe9tRuhqj",
  "key40": "2R3jXFmoMmdCa737rq1UHToHqLPMXAPYW2dMgu9gMr4R1voUQeC1tGXZ5pXstLYPa82DgV24s42UscYfUp9sAdEK",
  "key41": "2v9ToToi2HEw6N5F1Y2JGfZKUKf9FCPsVusoenursTB3ExHJ5zEWtWSWzF79WZgDam1mhqJ1bHY9GAaQbYyhjxbs",
  "key42": "5tzjjQGuageKsXVddYogGUpr7r6bUvSgvwXXJ7Z9QSum3xy9jwzhgqsPC1DgTZisf3KWTGnzNSSWVSnYs45ydMUN"
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
