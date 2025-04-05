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
    "2N6aF5Lff8kXQ4NK7jij1cD8o3hEUUvQ3zYaHRxZdeEKX3mheiUsY5QiRcRFTEvZtQcAWVqs2Sw3FenJ6BrZZh21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5asHUXtiMJbYs3KhLybwDBcijWEmsMLWpfFAVrPoezHM5n8PfH9Yb79dctaiyaRCexkcUCC5xXQKQFu46Kr1uL4Z",
  "key1": "4DQva5mjBSjSuoxmASTUy6EVvTitwhsbLPTLfnk95ugonytU364MpBLXx3HhWxxJBQ6Ewk9a7g5Ehwy5b5eafPx3",
  "key2": "5wobsv3iMLHumn79qeGWK5VPvgAkb1ULi3Nhqj76mDMg2AywUHFCMRbHnfjthDuaQvqgCvXJEAQyozhtVWqX3Ugc",
  "key3": "65NzaARn83hzQN7dhbj4P4hGRc7HgE6b9f7koNEL5VDqJ8Kpqcca4EomEv6YgbWpyVxPoDMKgXnYig5CMAjaaAd8",
  "key4": "4NmYoZ6ERWNQivuQazc7v2YcpiEHrB9mdK66fCXkNroaGLEkJL8AE713gpRTf1ox5oHdRiZSqBGujTcHBFD2sVHq",
  "key5": "21zgfFyfUeRudhJTtEvM1ibWZPpgzwmvNtMQ88xy1M283QLggcrE4To7duHMn724iZTaruwxpaN9u4pHHZnZpZLL",
  "key6": "4rRnTZLd2BuqBcShw6eSzBkXhyNfnmL789DUzYtSTCSkVRKLF2AKdCA7B6U8szZC9WLedycK3ZEufsgisbXP4vkR",
  "key7": "25S6LzJ918vZrdNLig4BskxysdvnftSzWFahK76dVuzN8tVDTfC7eY785VAPCNGJp7fDpYPEJ3fecMBdndFta63m",
  "key8": "3HRjJ4arQGFC1L3QhiC1u1DFSxZTJZ7tyPSXDdEArQXCg38bqXREoxtVDkYAPzPr4Q9gViakEJiyHZWbEBmNrkr4",
  "key9": "4veGPVu65GgJtFHiFzdDhe2oaqfUxxi7Ya9YVBp4iHb6WweS4JkdEcaLRpKTXhF8R9d1tQiNMJutZptMvMu8AfJH",
  "key10": "3sKreZ7SS2jbWUHPgdjio9yHW3QFTRmLW2u7Go4zXMHhMerB5SNU8bSCcDChDVz2Nd8q4EZcs7hbKQAxSq2psCNE",
  "key11": "64eYsQ2xP7xMtKTKg8YEV1ZxpGRCBv7KHJq1uLLzLgDxuYvEGQTzq8eaiBD2D7UmZKt6M3ah9Aqc8FnrBr4LoNhg",
  "key12": "4EoeCH6u584g4GroR8EAvaBD8bgAj43qiqZ9Hog6KnkDfkyRHviaPuokeSQwV7TW3HjyA8BL8CzJBzTfSgm2ZB6A",
  "key13": "4vdkmH87oXh6HjMdXNC6LdnBE3F4339g1Rc9WTabwizxNwsXbDMS6haGe25BKUD8Th7vMndHCZmmakpsQFXFK9R4",
  "key14": "2BmEV6J2mxkCDZWMFmsdgvcfVLPHguWQ1TNga69b9xP7atkvCX5rU4UyDJEqoToUY4kYY6o51hkY8iVpwXhwAn5b",
  "key15": "2zm44zmAjQnWkjpMqwmJrLh8GMfhYFFZeZAwnPpnjWRym35ddoQeYJJDoASECwEq9BdAJrHY2jxc3ZYLq8DiEmRV",
  "key16": "GhB5DcZZpbUq8eNxGe9TBg64ADkiCunP4wwhR1NrJQ8DQiBEHoK99QWEcv9W313EsFuJSJs7dfJn7rWMagFHsxx",
  "key17": "3Bc3sZ5VcuCevP8k15mmF6dVenAMkr1G4VYZjaC7DdZstkPf55SH864hAj3zT8Sraa8wfaYiFu96WYn2PrTLx3mv",
  "key18": "2RB4pUKaMVR4kxwZ4fK5qmF1MtMfeBNgB6Yyes4zWJZ515BBsvJvkPPAcP4ZCe3xoJc8jzRjM3pFM9RkXzHhBo1g",
  "key19": "5wSC2KRdSMN3snMbCTGAmfK51hMfe9EDGnLcbtrNEuDHY8VwdXZ1mREa5wDTceMFS6JsVdmvJFowCb2PTz48WW6t",
  "key20": "48hk5e6q3sPP99QgwVqQ88J4N3sV3uS2rivMu2wLYkE9Bp7sp3m1zAbwVmvN5TZfX4cDgqiPWMrNkd7pBBtjcUXJ",
  "key21": "5sJ3TZ2Ld8b98YPJnS5GnwGhAsfDt45Wu1vjj1WW3o7sZKSL7cWYsVNAjioCwkKss2JeTAZBpHf68htEEu9LWM5",
  "key22": "22dF2zTWDAXDAVxx5AoJx4Yg6PuNFRhBUD3ybmVDZT7MGtnLmtQK9CsNYcBbBN17FyBj4idD2yt9om33eakgFqTy",
  "key23": "9Gffmv49PECNawyc9d2Wu4Tr5fHgE87pVeRNA1m4GLEbnADCi3Spkvu1ZygcfT8jrAbGKrQPfcPSiGppi6QygEJ",
  "key24": "3CJtt3rAxV7K5iefKZyw1VATNUHwoxL7pfvWDLkLfAfPrUmUQ51WDqDMtNwgfj355EtJ9sujhn7EYcfL6nxDqT41",
  "key25": "4wwPnN6YujS7iCiWpwyMEEbS2TaKL6iBxdkZQ2Tcx1PQLF5qwYY4QwyiaYwLD64kzqYRLkN9br7ZDTWCS7B9TvnG",
  "key26": "2RdeFPGu35BrD8jEtgSnhiCxHiSdpP988BUVe2M83su7SPuHCBSCfw3BKaehvxBWAJqUQH4GMukz2DG4ye8Ziwwq",
  "key27": "2bdzr4s7BQoVFtAW7ik1dNrLw6qFethUWMrSyGkfjcv81gisXPkuiyB9tubmBKvGK1eZ3Yu2mmbhDUGS7BNMimYc",
  "key28": "454omRoGuj488gjriJnC4DnLPysfjZmrFyEEeQKU96pmaBjfCjKcrAU1f8rtdAkwH6oBeiz4dwvXwZME7bZexdS4",
  "key29": "3uQnX5pKQc5XgioG8DtA2P6FcZxq3q4xMwWeR4Np5j37VExSvn1AVPjWupvG7Q1iRAZSveQKifSSejRC16JRuFDs",
  "key30": "qoCLU94HPBygRxfZStvRJhibPBkc4FVRxr8WpbfNey8zb8CPbfB8woxfZw93Cv5kP2G6p6zFduKv593YvfgWiAJ",
  "key31": "4bzszN1GicUEiGyzpekqmi9ZmNj5z3w3P9wxTDKmEi76mDwXRsheyvpxndT5tuLvACxK44FpxcG89MS4qrSQMU38",
  "key32": "edYKa1E5hUP6f5pwCzrfjowLpe8W2YojcJFE9YGN631ghFRX4YWVHS1mPMteygaVMEcczzuGCCp9mVYj4zxWAb1"
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
