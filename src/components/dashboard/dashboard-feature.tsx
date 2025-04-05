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
    "21Xka78x6NDEpG4GCYgsvpJ9wPorGvUT3AyZ3eHomdpvJ56P3aVaj47tNSKPSjj7i1ae8Gw3r6vmEUiGb7tbfJxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WmZCJ44PKCEwiABWeybjfyonvG56tXeSa1XNbNgqyyhYYcuXnANupSefi7e59No2aEN4tqRviSGtvNswgJ7zMzU",
  "key1": "2MLxRXdHAuXyn1b141zBSce7y9P7R55HGxceSv9Ayej3xYkpFJH5RAdSA7s4fUHnsseDCmqoWGq5GnqNpWVxiypy",
  "key2": "MM1Nq9HCj16MgbJN8LRF4oxmLy1R5WBAJF3LrBoi8PeVZYbMCjqCJaA6DyT8MFDWjEwud3AGZ1EjwL4C1cJ3C7b",
  "key3": "3MXjHzUT4rsPMh9ABLB2WT2877PHagKWQxe4R478kTEJckSSe2Nta3n7T3A2bcXM7RQ1H1jGSRG1QexXcqnqd3Yo",
  "key4": "3STRbaLQe3J7pwA5AnzXuJdvV3JDoSSgLcBE2YkaLSAHVM7SCCXLjC3hUcFrD86frJb44DtbACAe6AG2TctR4gWw",
  "key5": "4Z6Vzw5qS7BuswUbEBMAqSyLNtkrWh3eXg56P3ghQkofLgiNua39zVV6eaPwWVzotj8XGF3D42koCSe674JVnkmm",
  "key6": "LqXW5B9RBCQfW7VPAhtKzwqHKcHdxTpnCpV9bujUPFeQwH91kqQxYSASr4MfTedQAZmhNGdgZd12kwHyHtmQr6Z",
  "key7": "5te5vEsVTCEgg6Lfzs4R4TmKcbFcKDwV18D7NqoDh2VXhoAd1v7fp2WAQ4GdYv8H6d1GvYPxjpyGVALGT4gnzRBs",
  "key8": "4Ef69yyv8yh1bZi5drcWH7ejHSG9AY1NKcZNfHLjhAw5qWyZSYpKpKbaa8jCGSLq62LECuvvrcZqXzCdB7N7jp8S",
  "key9": "51gwX62qt7C2cnAbEqyscqUXYWfdaJBuab28TqrF15oiWaYvbCGUTZtVN8yzY2cZB3mdfuPw45hADcy9kmrWGq3b",
  "key10": "4H5BNXZmQAJbeSRfpSTYqLorBT9JEgwGABVYy9WHDm3Nkgzkk5bNV2k19h9h4dot58Gut4rfccgjiE1XEqMbPV6q",
  "key11": "a6tf56ig5JVqiRSUQgEGbESTsaVsbxXU7ox5UcXhSWq2hXWim89LyhYvZNiV3NnbrUB6wvqdZjyJLJZUXEX9JiP",
  "key12": "jSmaYoovch7AFNXrZ6m4QzckTBtzJdmuWX1mFZpcQg95tAkabgtMer3vsQza48d13W2TaxqcHUo6GBFGSkZxw2r",
  "key13": "2vBf7SYGBhbB5ABxEs8CP9bzmj1dTMsK2spNXNHW3c3LjzTxDFS8fnfV2dh2JuaeuBi9HQnu6MZcM4ekzQsgCad7",
  "key14": "4ZipP2eg8YHMmb521vr8op7qa9dQnJgGSr6RDgEjh3pGsUGnNcM8A1PrvRskjsTaYsGhDPQqxFkXYsY34MrxFcCS",
  "key15": "3KDifYNd2Lhwj13J8DiuguQbhZzyXQCWExrmmJCQ4fn6CX9zo1iG5CQhxzqDknHuhpGN4RW6rJRQb6eh99rhBqUF",
  "key16": "cHpsTqHmdK5ZeSYdTxGStFCaPqeQXknLaRCNJoEmtoDrJsZueLULL1A6aSwzAE31TiwfHKkazPyuHdWYrygRVBq",
  "key17": "54qg59Net5g7NZu3VPeDFwpLTEzXtZc1namX2fGgwCsQnCG4BrGknPZ2jgAMFRh2J1XRe2iyBV5Bc9Ti6vnYDPjo",
  "key18": "4VCgUzwUfN1rS8biAwUtPTCUkGrVDCvE9mrPHNT8miF6YuCCDbhbNe6DDyQJpH7mhWmyoTJ9hgjDY1YFKu5CH7pp",
  "key19": "5VtHySsW91Xw5Ci543KtYYcA2WQEk3dLXJVdszXTkFjU94afCQAzimTnRa2parS25AQ7EmXdUMvTZ8z8WCbzrHPf",
  "key20": "36XLyAg7Z4GZUeQG3nupUETNdWcGR1NQTWHab1xTJ1gcGr77oYQ35wTgS8DvVb6UmuDvzkPDTpzEZNbb6csDveNp",
  "key21": "5jAUU7wswpKuAhSaNcx5pxvzHHcZkN6oj9WGdEAsBckpv1HcBQQon9GuuWz26EBa4se3abw4BSfaay7ypQLxTbXz",
  "key22": "5o8Y13U1DBz51CCWXmWyzDCZYg53yP8rdnHEz6DVZeGiVPwHkMb26FrGetp8yGAZEj1TWMjc7mUcJK63ZAo7Hrh3",
  "key23": "3XtLJsajvQhfNuNgGPwpDfkVxXkBopzBRtZFxKFWeD1ozwXfgTJrHbZhfZ8UDC6mysWJrq4esph69qgSirgc5JQL",
  "key24": "D23jVP7ox1FFYs4NrLt1QAGVt1M6Src85wwjqAab5NgN4hWfWQYamQhUGm3DHtnybGhz75ijP8kbYzUiRrd9PkE",
  "key25": "5znhtGLJg4MLKPjqgG4597SsjJCZHKz43bNoD5CaxnmzHmp4UeZfM3yrUXUoJ2XhAkNJg4h3vuHymh2CRyQc3NhX",
  "key26": "4qfcDcN6VMRdyuEbTG5LgYNWQW6fwWa8Am4m8YJeqcqhxmiEU89WbL7H8TtVzbBF2eZ7gqdtjusiKq3D4DmFiuer",
  "key27": "67EE3w8z1uoddRS4oQfByWz1hCz5LtyUW6fy7DbCyNcEi49L5NsYVLLH1T1Bac9JPVfU8DhTk2SavUQCjJ6CzDpM",
  "key28": "5PuT6iAT92kSwnheY2x6vSmigKBnafZTFaXC4HqEHGxGzSM87xhXxMXbzkt4jyMJQvTVm1wnwCGYx1HRvT5XFiqr",
  "key29": "4XrRyd3rmNDS7jWmy9bb6VDWg3qorJAPYD3yQukHAGArUrmrH2Y5vSGxyBF2XW1QpR3n9HjyZu45rwBaSfvP5ohp",
  "key30": "nXNUuqrCmbNEYdXSovYyhUnGeKhfwwVe5sSctrvBpQdJayME9cfKYpeCpC1pGLpCwX8z1mppDyWpkWMc1taFjDZ",
  "key31": "E7geqBCAqvUgJUEpHtc7Gwcn6y4w2BB4YDPyMkXAYp87QpsugmaZrF4ncKa9kdpqdGLRKroGbxTfnPLhSn1bmpF",
  "key32": "2uezBHxuXLKTZ5Z3A7Bs9e5QXwV9h71Gg3imxMfXhwj7PmsmkHJchPZ9qDFXNKFE2Z9U7qwcpKSsgtXtFzqJQFX6",
  "key33": "61ziRmYTxP1HTBeumVTX8Jrok7Y5EHAkKipsSnAnfmAEewzKHjrXA5KktoUZcGwJLndARG3X3ngHRKjCBcqyqA7V",
  "key34": "5xaseqAqH2qEaeVnmZJ5QChNPCxL3vwSF24h4aqEELdQdQt1h1dv83icoFyho5PbwD5Gz1N2qrKRXzseYaJmWB5i",
  "key35": "3uHAQzp1HzL9umQ83AFxvKm92FK1DkjGLzMeP9S7qwBSDvcPUk6FcG5xpFAgzaGHhM5xtyJLLYW2J9TXoYGWEDkW",
  "key36": "5GuEEk25sd3YpX1J2qW3YuEbXmUHYLVfMihVPYY7f7LxEJ8grZ2diT67SvQ9wz2yUru64JkFdZFcmG48RRcyWWis",
  "key37": "VbfA3BPfgAzouGkk6EKKWUHdEPjWBwqnFdUidV5vu38pBLV4Ww7Pirq6fjjQvDjjyKrh2pobw63JrwbYWZaq6oz",
  "key38": "5rf5No7RBFqvbtfA92TkVbFfHfkwcDZwAaBGzKUwUjbT7LQQPNV1V8NjTsX2iXbc6omZ7QMJAvTJLvvK8nLSQkoM",
  "key39": "2pqSbiGuePAGfNpZd8U9QXbPLwW78Xfv99joMan7jAWpU6rfT6NiBfpBSXvsjhk9cmjuqt6QKCNzXjpbAEu3aiYX"
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
