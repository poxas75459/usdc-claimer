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
    "5FmhPyDTDNjbyo1Ty94KBjMyKBZJjVbcL2kmMUngUkGgCto8MTPDaMxbFhs6Goa699ns13dq1rVpCMmbaNpdHD1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2aw2H8ZpbAaiRa6nMyXhrc7DjzX9ifbHAHHk9cTgrJpcLxGHGVZStY693yRiW7Ke9j6kPwe32MDvNBvWHqS9xE",
  "key1": "3meffiwzbmA6WnH5Ec4PGQK23CijrnpSpEKB8GyAvfydWRHxwN2xFJA5NVPjtCWiW7JXQ3mLbKzpGhX9dBnLRE8h",
  "key2": "2RwNgRMV1KYrw18KSmoTTsnVByhxEPfPkN2LZcvg2n7LaJi34KEe6WgbykjwPSXJyHMEDTVRggwDXYnoPj6wfdcs",
  "key3": "29doccmjKKdVESyZWzXNuqxB455xU9F5KxiLaCMwJAbwz2YYnndhuCea3bZJRnr1EJ2AHcrTf8sMfvKSuS18uFga",
  "key4": "56hTFcRgmZqftBZ1RhC8ZHVVXDCbdjnrwHbesAyh4exdkCsU3cQ5pEEWKDFtBszQ21aYM21AoaRrKF2LwqSURmTi",
  "key5": "s7phqtnPGH7F57nYwjgE9G8hEsxQPo65XAVot53rzsACGCNrFfjwAmcnGPMgn55jGAYhaWrWDgSMqKPq8wLNWyF",
  "key6": "4sn75gQ338Qxg6KhxbSSfcpqHdK4tZ6MjKcdr2tg8nEJ1cpnZdxrRYdzEm5GTkcPok2PjV6JZFzvdJiPU9j2RKuy",
  "key7": "2CPm3e3sWXSns7tp9D6D9c6TrXmZUTcVZ7vN4cNDd93hc7yXE8BtN2MMEggnFLi8gpSDgszjAxiN7TXj6b6BXihY",
  "key8": "3VEzTRfKRvvNL9rZe7rrTagmoJYFqGaLsWnDeGBL9XLY54MzZp7QexfBXB2bQEzRem75LNVt4Zrc5AWquAnxCLcR",
  "key9": "23rZPD966J1hbamwtrTP9dG7KsCxWcvfr9HWGKPuTFzdcXPkYztA2uAetSWQFxpzHcXi8MsSNRPEAWQwypzQkzGa",
  "key10": "2kjQ6Nba14QC5QZ13rAedixXDxwtmb6ZEKRk48HNduyAgnKZah4ZGwtrinYLsGy3m8h8EDxd8QNzgHrgTrR6V71",
  "key11": "5CF8oZ8qXZveLFNQGiY8DEKkATQrcY5SqkXTPESPVp8sgNGRWtAZAAYKwwk8kowAtKg8HxtRsx7uYreqcdM6g1p",
  "key12": "3L8ys3qx16fLPZFYDmBzuKJ3npmfyRYrf93ctzTNhbnGVXT5iBQRXP4dyZeW5dBftQaTT63Join9yVPJMMp13gav",
  "key13": "3AKA9PFbW9Uubh1xUucYq7QJ1z8NybHNwsFiyFmhJAQBdiS35aeRmYdnG31kFJDDFDb5zBVGVArPTbKwQ83XeYMX",
  "key14": "2t4RTHMgvXZ9mNqVzKKTWBfUrXdFESkhsJJN2Cs49oJZej5VsH9jxztWMpTwRaeUZWeqeHz9E3bGXe3b1bVxbiB3",
  "key15": "2d33jAfYVj8oPri7PRgjinRKvBEkSUEwQ8f7KYVBcE3iRraaEyb9xdwA2cFr7SyWFR22qmHbediP4p6vzcE5iZ3d",
  "key16": "2SzN2uM9A7Xz9pzcwJ5hBcWXp4PqdhzbrwTCegdCwDEqrSr7YU1YecT85qgTBfH7Gh3k43QA481fRqApCSQYwrk5",
  "key17": "61nkt8SJWQRCXyF633GjHYsEFTBoG1otFpvrHE1dnsLgiu9SQmf2JP4cZwxErj6hHjR5DqsJyephaa3JyfEgFn8B",
  "key18": "5eEZotKFZVhkdSRU5WPk1LxRApAqbanNw1LJfeW2kWz5H5fXa3HDAfKFJtqriQ4u8bdYNG7K1hUgfgdYhA1wt8JY",
  "key19": "554cRMGiVvKcULdFpTCSJ6HDZbtnbPeZszEj8Dpoc3oHSs4citWtFfiqeFj27BTu4GSEeP48YxWxc6SxU9Gn71ct",
  "key20": "3j9f4dpuzGapvhsP2tgg6dv1XSVoYk1DsQbddQXcvjo5P7YDs1HYt1Lwnrpt7UHHSWVEHA5hVcbPicssFqaMLRiC",
  "key21": "cRRL2gAM4BQw3V6896PYZJ6HC16jKWNyfaDBpWuyubz8gGfD6vDp9Fcck1DiWjFJ4tmYVL9431TbnJQxis1vWWb",
  "key22": "5CcKXgKFDPMZXnxp3wCA35JDyXpQ3XDqWTP9mz4n4LcX5aNNwBnzbJJJ1vXa6sNHBg748RBnbhDF2HX3e9FaPzVd",
  "key23": "4ADKCkBH3EVuQZSbCcCz3Mo31APuQ9vDDASMyiaeAoZnzDrdxL44df8KLfjMATatadrgdqNSWyhSd7gsopNbgsRF",
  "key24": "4dRnLuAHyDHXAwCMEDQ7PKudZ7N1GEE5sZoqtRN7PVTqh3YQm3oNYKbpfnqGPt8saN5vmsAhcJUXxkDCZBhWUpK8",
  "key25": "3L6WrkfpDVKNxyCHtT1NNnwdKxLNciKRvUxcQ4pmUVCEPjjZHdDV9wVEFzRTAaRjGeD5RVNbfjZf2xZNnmysdqEh",
  "key26": "3SvWU7rfumK7sw21qbi84MJUdRT9vdX8D5yn3KpP5EP2edf6fUBddxtt55sKGovGUyyQsJC98S8eLfb1HVB9tKow",
  "key27": "wBGfjVVJweCDh64g8dEj2SiNhnpB39LumiHkDdoSX57K1wd3vVrFK6BQgVhLpMYPWGWaBTkJnFNpkw2jHpAdF4Y",
  "key28": "3pR7dJBg3T7jJYMWd9MAeJndcUVTuujpobe5nyBSyJdr7qVUfcC4bN7hYGnaKF3JXYaBHugYdpU3YquzDSmk2SKs",
  "key29": "4ZfCaXc3wHEmyXTzLjcoE8ha5Br6xNrEDiAXyBQM8oKndvSqmjHGDHFEf6zXZ2YTmj7MnKRXXdo2Hi2uKREf8JoE",
  "key30": "poPftiRjyvY77DftJPc4GsmJdPkchEBcxCBSpCQok7RqcLUuZYDbKxhKxeN5BnjzyR4DmheodDgnTcekccVFnKA",
  "key31": "5K7vJei3SUvh9H35yNCP81Sfy8UygwfrFgy7psc8bbxC5hsBqcSMfnHiPhBn2usSXjFANLWvfj7D7qCceZAAYbWF",
  "key32": "ziJBfeGiNzUP5vmGbWy8LnvhWYYgwyexhNiJTr44rUcSXxLHgoHPFJuuEBxmWuatbJ3q1z75gA9UuX2C8jjitxT",
  "key33": "43HD1ai9K5MoR2VtFesqhB9CgCPzj4ireMNdYbYrp5BaA8S9WWpDqxjccpZcutGD5m1fpsB6YWTfi7zAg5hqZ8BY",
  "key34": "LrFtykwTdnGhkyMpvCnNig2w53wQ9w5nf9SoT17Zn2frSEA1VgYP9yrCPDQdw7wKqZi3DgKGyEQfomx3yfYTBou",
  "key35": "3JrdmoPVcsdpmiPLpVNJRHveenNhE3iBheoMPZsUyK77n3eXVmPcgWWNyB4RPmWeAJxAGes93nHBLcmhWyRLXLcq",
  "key36": "pEoCCsNVQ1SysPsDmGiva5Yz7jEx7niuf3P3gkA67dh929qnx7HYqtFCBUKbPe4oMvMkRCLZH8LAJQnDeeMDAmb",
  "key37": "4uGz84woWqAUhKi1hPZV7xahMyxpMzuXMt3eoxa4BMUFSuKcd71x4LKZcZ41iz4uN4D6y5ZcqiG1FaVeHrByRWG2",
  "key38": "3Wh8LwAGncsALtoyWasrs4BXsaZdKDqJg2gCZdBi7dJY6Q7WKSox48nKhoKm8NkZcZTukn6Pbg5HiBJFenri8DbR",
  "key39": "3WUFuPwwACJgAARQWCHwz42agBsvmd32nzVpznAa5YH6jPPgPDN7BwhLf1eNndCPS2UPhXxavsbL9aii49pgEaE8",
  "key40": "22hdmo3YJVmAQRjTLdm1FrvuFVzYMXFZVxxmV13K3ABWfnZsN1k854rKRs3EnEnpMdK4dmKNKJCQpTmXaC9AdKsz",
  "key41": "3RCFMXe45ZoheByTEPrDpxexa66rry9qCu6SkkVE8yPzrP9eLuatiseRpm8zuyeWeGvgd2xcT18DK8VfDdRNcVGA",
  "key42": "56rPLzGhowQEj53gRXWch3buNFxFzvTsJoX5SGUfgvkkrJbQpzTRLEhmG417YXxbhsLCe2tRQUhdyfxFNf6u6afM",
  "key43": "9MWD4c2ka1Z3DKqE7TSKwr8vtbsUh8Tsi565LkoFHqU86smoqiGkW81xpFULXLprvYZ82t9UXWPNtBx3A6qTBZo",
  "key44": "2SDWtaLfwCPFmM5aiM8uCJqugNkjMPvMRfH75Aiy654PAo4RURvu8FFGDU8FkYSZGNvCNTn19AFQSbGBFCzndgFa",
  "key45": "5KNgPBzf8qUQnUUf884gSYw485FgPnVZaDa2Da1zqTHrBdu2AVxKRmLJxMY3EWsTbz5cd34y66Pc6iQq2yosXCzx",
  "key46": "2dAFCPiubg6iPS9duv8DedmWgDykjQQMjn6NivvKtbYSAfgN9EcEZEdYxUBB96xXPSQQ1Ueu1gk7GmedNygxNoNr",
  "key47": "2WrSHRpDThcSwrafNBpqkCVgFb5X1i3cdgTd9Wwp8HujrEejVrJnUzVsHbtmPCaVyxcCJWR26a11cu3p3Kr5RDLA"
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
