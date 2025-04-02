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
    "4ny2CQXMj6zdhRCrJWXDqHyb2txj6aDL43iM1LggsZvrK6KQBJwgQWmZTDKUkb3JJpaUY6beiRLka5MvFaKWPSWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LTi42zmpY99feqYwKjTpuPYraJG8YXVNzqqq7xkfjSikjzKbfSMcGMof8XTuRrYznXuWY4MEVFanLPdUQ28MUnq",
  "key1": "4rrPDUdxu72KdyUnsZukDiWtYCaAxPWXkYoBqLSvp87ReXyqSyiBrdWvXBCa335Bza6XZtHKAYdvDn4dPB1Htokm",
  "key2": "2U7WqGJn7SKYizq9VCHTaSzFcmWQECqWjT1yPTKHUvn1SR5bFoMwYEksrqksX124QX2jAvwgP58UHiL4hGVQ28TD",
  "key3": "2WhcwhPAGMkYS6J2GrCyrSBT3UHSbtYSM41bnPPpDHPnEogUAYTdZ68sYHj6bG5HTGe81YYLBEYAZu7SdwxWiZE5",
  "key4": "2CdkVQWoiDEqQ2m3w6eJNJd93G3MJ83KwoHVZoJAk4AokDvSVh7MkzCvLCcbPdcNLX2cX9QFpHEWG3Chmu7bpjXk",
  "key5": "63z4rGyyoGsqhnC2PQFvaUBfKuGGUmXn9nCP7uFkQMjGmWooL3s73QGfaDN31sdZhHNsSTFZATHvWBikSX1rg1oz",
  "key6": "3rc7M8Ua2m9w8T6V9Z6xxYsUNJC1XGRNWJ8JqWEmrXBoEC9a7w5YDg3WX8TakhhYNmHXpBa2tkq8aw7QJwqpZpFM",
  "key7": "3B87HtW7ZsGMWbwzSXdUyUiy6185zATZDm7g9fnjxMk8ohGSWHG9MFU33VtgL6vfhyoKyCarjxHStopZNzKee4hf",
  "key8": "2Hn1TfpKWPgFnwakurpZkGnPTJiCsJnHgzhAMYd8TJ48ZWLLi9M85Pw5LSNzqxwNPQiDbrHdXCQQoMhqMmNVhUF4",
  "key9": "39e5N1rXcAAwBJWxsndx1AdJyZ1vrgWakTnS96Tj5Zmj8b8jiAtQR1rQTg4WSW2jEHZaDKL11S7rVfpZ7Wvb81rB",
  "key10": "48Ugff6RNHwd2yU8r6ZbkqomWGjJy42SWW6WJrzamQ3MKwRDzbzvyb333Y3P1V5VjqgWepfQ5Gq9WZoPrXdHyCh2",
  "key11": "4wggrUTZudP36zqdvezsx65M85eveVAAtFeDuKLCogT8jFLSttpAMuCWEx6qrQjzfXRA8V2Jnoean7sGgDdjEGmB",
  "key12": "A1DjSwTdb93zRguhZtoe6RTTxLF4C6a8BSqru2mGCchgqUcRpwAf8aZBnyeYdzGW67m9DCRB2XvmA9YGKvNJRQx",
  "key13": "5wGM8W2gLCB4GP7yfa4yDhhDf72YqhU6BscneE5LQaKDdWtESb75k6cTS5G9jQUquhoZ28H1hDHLPA1DdH8wyjpv",
  "key14": "43DfAtNWcwEkE8U7ajxo8PUNchoQXETAgVcFFPcSDHAYKvV3q6mPXrucZHTsGj4kjpH218MX17EhDgdzrjEcdzyB",
  "key15": "4pbSWaDB5YsRSigqm3oG1d3bQGAcQna2cMyX4yXyax2xu77zYHEHqyZEPySN7NQdoC8EdTVQ6ZZ1UMPNSt6TyBPm",
  "key16": "4mJDn9XRrqvG7QfPyLrUTszRBaf5xSv5WRuw64WoCKdSV3j2EuFVsTu2bWqK3NZVKQo6kYYWCCNz8U6tEoAGjfb8",
  "key17": "5w1HS2NpAND1scTPtM3HJor4x7QBMf1wCcbuCYHpwiGEXzXBQsKf3peFBrFgudtJhxc94vTn3SWZAR8FwLEnU961",
  "key18": "3pmHkco55NskPE84tCekodGGUzuvmsW7besM174rCkieWABAXyBLfiA71YA5xuJZcTdZsqK2nsGoAMXHp5U9Ludj",
  "key19": "ieUGnLzZThppCqtsqAqRpfgdfvM4gEMHR2q1fjshdUfKypvG31qHx6eZz1urHUdLeqFHbvououhdTRjiYAcVBY2",
  "key20": "tkF6vDcsTvt15PnUUU8a1jDBM7VpKtsxVSvVFhMXHS5d2vYLxYcBwWxkbXACQNHrnwxg7qWSQYGdjoxZkWiG6Ng",
  "key21": "383Kyu8ML3QaGxH1BtSt4sBeszcuuRTXEzGTFDG2YhEpnp4fqnd42Pd2ccW3EHmtrnKErB1jgLXtwF8oSf2BhW5F",
  "key22": "5p7m4cWqV5Z7LkjN5i1K2DSntoVphVicNwPX5G94U5SjEjha377FcZXTjLiLqp81k2p2MM1aXDzCawf5ujntYGwk",
  "key23": "gq2HGCZz5j7jyTXcvqafT8S55Sqs9zvpgrCHNHt3v7M6MsLeZV3YKZwmbrjRB7CDFkSnuFg8xYkHFEw1bnJ6mun",
  "key24": "3nP4ZEKzbpTHqajErS9x1CHnBcYGE3QDXFdmZUqorkEmpvfraFa1za3cResroFK8MVeENurVgJoPnwRWsZP5MGFC",
  "key25": "3YLNVPLbGgmpF6zqRcXvKdpedx6KX3GD5jC2qKQLEHHTpMsWCpqLgbApEzhckmBdBEPE9CkMnRzfcqPjp3H6VJHs",
  "key26": "5jsKnWyFCSECwK2eSEo55uJhggE98DYBxG1tFacnyvPyQWqvLx6cq7fHtBCb365CPg6djfkmN4YwfrSnQGZF6Y6",
  "key27": "4SxM1K3Go7ubegooaug8oPy3wyVJeYSiQ1ec6Nkgj4Kcq9TXH2hDePi6FY1Tfgxx5XqKQm5cf9pFWPFSxQpusKC8",
  "key28": "5sme5Y6LNAkQLrykZVqfF9DckoXJXN2jSfckte8xx3wNtK5J73fzCVmGnKQSydpCXJTEPTqJqVL2E1wp8vVZk8hm",
  "key29": "4c9392kF3jNK5cTBt1icCgMRjE3WM4FUAXQhf1xMPqJ4FVhmUrEkNwd89Z9bmBjS3PPPndPNPiaB1gHqG2MdWehn",
  "key30": "pagbyUVUdFn4D2vTVRJzEwGUYtr9WM4KH4SFMiy3tsbKhNEfJDzkGssywYyp7Uk8eGkVdzbCYHLNiFxPtxyYPyE",
  "key31": "52RXtGvcZovFoqpHaevDdj6jgeNrdSqWbCmawVNfAnEGjrcb9X3588myG555Ui7AyXWL936ENph5WfZ2nqr2nEAA",
  "key32": "frErmKJcTeUtRsdLwLvxF24LbtXVAreqRD1B7BiM1zhJWXDpLBSr8DY7fHHgSpv6ZZUZ2UsMSrNzsp4r4Sk9PpN",
  "key33": "72qVeWXhTcYvMt6JWUZyMdUiD4m3C8Koo5yva3mtmFsBLMiCVQRgsVjPDUvRgyZg3C9tZmct9eoQzK7TdwxdKJT",
  "key34": "UCTAVhqKFKEc3u6dcHA3oB11LkbL45Sq2tj2vKSR5if942BeoSGtH9Cd85Le4AA8DWjnHwjLUZ6ovYYmnEvd85h",
  "key35": "5rmG5ztm2SBdfbcJDoSHdT6R7FqDV1aefUVxfU3skm88NgoNssK4yyXaX1dh9WcBV7dMgTrRxMPupjkFC36vCsFE",
  "key36": "555MVbDdwjBQTs17Pxfp9p8ygCADXb6JEAkmJXK5fbSwCAirDzSx3bGMAZfiiDs3HgAjrkaJLHtdxEmanHgTMQxx",
  "key37": "4WBbVWfj8kjSZ2TZ8oi26ST9vmHnt5dURhmdgdW8WXBL5Em71K2wKrC3HMPgwwoyoFMDB8dDNSV8RELNL1D7MXaq",
  "key38": "3PkQpecECXBs1cvffPRL8rvjKsiQe5RVRzm8PXpihm3GFahmDCYBSTxHmUttyHYDyaqS4fdiuMo7JUWn85Au4FHG",
  "key39": "AgnvBjih6B7cGWwYbLWS7oSXPWHoLbbF1jjyRDG5HBwS8xcdZSsNfxmmUqUgtYsmanAWNqtgvkwnZNsSYKSxMLL",
  "key40": "abDMkiR4h3gNeB9tP7SdoB1V4sKcF8Kd3FR8tGgo3sVAnpBuznVdyJ5zFo2ddKLXFSwKHXvm9AumygNa2SWo6km",
  "key41": "2htcJwi8AKKHde9sKQrDinRLf13e4wiuWyxNRSC484SEKaCugap6nAr2X7dGy6sUuuwqW1fM9wzFSNqByXXvSR96",
  "key42": "KreQ17joE8TPuC7mbG8p3VewtvZQs3RYmnfSwXnntpodKQqaVkKBAJwghPVrjQFo1DZi9gq34VZn3SVpaBKDRkn",
  "key43": "3mjuZ9cpXc2aUbua5gKSGyEkVF4nmtQyD9hfKqQDbtK7YKgsxKB8JnsKvDQWRiexy4hB5YSc6TkPoGDjhjGFjuiu"
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
