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
    "2SUjGKGGtypywnSBhnkYkrfHnrVkq6D8wHf5TAYikBLUqRyAKAhmpC582oQ3rh3oCb2b5ZEipBrrYi3Fru6GqWHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2taSi3TEAXkgB6sEzCtVWA1ZSqcvW5bo937L1awjNnim37THBMycsrSm84nunBGQgrqyptZy5kUCX3aW54jKWyTC",
  "key1": "2RkLx2HE8c1Txju9qTLZhysWXhhoenTeuiZbqPanJPEfto83monjumEeLzdkjwjB56etP66ytTo3kaKMDCeHKuL4",
  "key2": "4A9bhJfQMPHcqK8kUv9qS5UxkT7oA8LNRg7Fjar6R91fdKZVWapHDsQDVsUPd4n4B51B4s2fZv9X9LWgVhBWcuXo",
  "key3": "3A4mXXr2YFfsQUkXCU95PexHKS76RTGcBQTxzQZQhhKzUvhp1qzMDwya58Xmw5V3Yq3okyqXMdsZrXQoThmUqxiL",
  "key4": "4YNtRVgGYYq4LEtGqRbbbTLfJqrAo22D8c4YcqqQm2BC88ddhUsmXEqUPTmhMFy4qaeXoqeN3ehcgNKy9mRQhYaA",
  "key5": "2x6BCRSeVbbuJxHajrmgrG6bcSXDdQahVyNrhwY6NpXh4Sf3UxqK8K9bgvjijBr4HP7WxD45uKRyj1dgjni53sk8",
  "key6": "5FGktNq18JkEtfJurp6NobDjDtwwmdxqYwzAFFvgSoAY7PTr4CioFr71xzJkU6V89dfQYDeVpEQCZSK92yywdq8x",
  "key7": "4eemFsDGzFKxiNu5PX3ac4LRXYD7qFJBdy46pJnZLPemYNJ5WAdJ11i2DHnXWLkg2szXvB5Gcxay5BKuBcR489BK",
  "key8": "5ySAotswsmJak9vgxCt9WZRAtYYJwXYw4FWoav4nzJNP8Ss1Dyk1rTQiTHFCLk2989EpesV2vgaPHCDsbC4Ne7un",
  "key9": "2oRrUZp5hh6V8PAnZVAWsnurFuMwK93dyQrQ6bePAzvBZ5uRm9jgswTinxw9s4qiJhTa8Xt3qB35gTCkacbcEhPM",
  "key10": "HLxgcj1Z5bRjBjmV7X4jyqSFhtNNqiTc21oqx21UyTMAexizoHpCzxEnCBRa89kZntNpwXSwUWTKPrjh2QVNdF1",
  "key11": "2oVGjnML8665m4JF4qpMdriiWaqzPWjCxrqYcc5pQzX4ULeJxECwhvkwXumBi3xDVjm79G6wjp8EAD5dtSmNjyKS",
  "key12": "4rm5t5mYBJduULDP1gJYZ8piZ2LYXL91Q76KxszpUmspQjegXcdCeFJd5XENgs21j83eVjMk6fTQCi6auUaP2ok5",
  "key13": "3DVM3VLGNLw6SWdYvPqBtYd7MdCtUjrTMWnJqJnzqTynrvoJPAp22Dr3L4vMKNQDp7kqRVm6mEaT4v8c2FgMpTmb",
  "key14": "aRNShyakh1zFZ3Ek62zHKFDWXnUwdpGN6i5grQ8dce8J32m91UR9ZMMoCzaBAYosv2NsduLv8PjGsmciYzE6Cqg",
  "key15": "4hFwYLFBPsHK43rCWP8ksjtfGCrRYtzcoPFDMXFJSrgn8W1kGYKiRJuPa8mpyZsyL85aRokd851o2FYzWuz9xejW",
  "key16": "28M9zG1CKuZ42usoYx5RKoLJ1Hhwk3KhD9crUjCh6rtXRzufGVpDxtWrcWbsRHAGYBXkjq9VUg7PwUZa3LFE3W6y",
  "key17": "5hRtfp92fab6tTGTReoEXjwbdzNJ6Uic4SiPNEapnCmwXKXyGYLtuCs6UsjoQPVukDNZyNhSqaEoTxVQWGt1bAxd",
  "key18": "5nBP9aoFDa1jBPN5Fy2VQyNoLbc5hHSJtTA8kvuaW8KBPGr61yGi7Pho6Bvk8pSCo2e9HK3GziLUQccJhFBFhb3h",
  "key19": "26Ry1DuBEPe2ZcG6EAFpfUkdABCXEwejmVmiEEPdFu9yF37k2RESgQFYsaUCkphq745FA661CzHofPCbNP1YmdQr",
  "key20": "3cNe6s6Lgz7R4fhCA4jbeHsQcrtiqCnGHHcqzZtWF1C8cEGMFHM4oURLBzRxNtVYQL6BNDz3izfjJei3xgh74XPM",
  "key21": "32JyXqBwRrN9ND9jhN45vEX4z9bcbSCmvZAkbVChdeLZByVM1tWhfM7joAGrQKuJnCKks6SeiZvcmtdXW9KBo9gs",
  "key22": "4CcYbqzqFbWvaDnd5PVbpc82fdqvPDzCS8V6mGgnkawcayQqXM9bkVc6cN7vHT1FRvpkfh1hYcigjkG9akip3Jg7",
  "key23": "2DRpsUC4GNeB2phVbPrJFsJVi3MmCw1SEQypHcgJ9HP67iT1FXzTqhHP99Mp71XBk9jGABVrT8EW9QXT3VQRzKZR",
  "key24": "4KQPeeB3GwSurYqZvEL1wkHqygvXN542QiKX2mAwuvFgtYkUQUa5wsgrkNRHYaJZuCdsRiWLb4SLHtH6pXXC1etX",
  "key25": "3Aom58es8mPohJrYFakDQrYSQSmbgE1t2yQ4NbKS3fWxx4pLr6dj3F4zzeLvKTfe5qEgbjTLBBuweZpeamdPfUxc",
  "key26": "5MTJ9xZq3933FuU31FqvV1KeKNDLFeT5Py1BCaBphPZoyHgXLnpHF9mhWDHFoENpnk5ZuzLBGwRAhGfyP7cE6qBP",
  "key27": "3TcVaWKtY79DnAQzTXiSwdsb4D2yfC1BSdxTJ6bp5pQ1FDcr1asYKMRfd5pHz2EJSfn5GKKQGEUePotEAx95RcBE",
  "key28": "3PaNnV96axVyr4d9xPYcRaPLmjHS7fCmdpK7evwwzmJ4spxAg8kuu38usfP6LUAv5U75QMdNZVwYRY5JW2orx4Vm",
  "key29": "4heep3uEfYJSzhL31xs189xbHu82tnopkaQ25CQXXjGvQsbhQj8TD2YK3scPERQt7yts2Unf5ixAeRXmyxyZUkAz",
  "key30": "5wwXDMzrHbw3RsBKG7BCDjs1ozKMwKuTDT2wMuYMaxpTB4K1BhbK1n22WgNU4hFqTKpe1n8Xs5dY6s88J3UkszU5",
  "key31": "3asyiamywVSCxVy66agbbPapSGgNxiXnGMwx1ZwwAiY81a36gzT6AmNSgfNHFV8ATYBLDUDpethKAmMFPsN1iKt2",
  "key32": "3MCAMaHWyMTqBexmy8GbPkSFommQFM7RKHWbJBD46PTzWbdZMmb1Tsniq2qdys55XAeSH2HSKQ8EANejLpxr2pzg",
  "key33": "28B2QL44qD2JoCjiHGmhJdGXRBUoZFkvBVipYh8mCbvNuMJ7cUyWSwyXBazYhr1PmPmGyMPH3x2oTsbw5fx1agty",
  "key34": "MziYb9KSFiKrbmLry7m1xfGan356SgU6y7v6z2bgggBij3GZMtXgRJKKhG6hzovKmf9KfHskCyctNvhi6uhYKhr",
  "key35": "4DzAEEBVigVwv1iCUGDrauBpSw7vm74DT1nT7HWxzyxXXXebzYNz3TnfA9oMEijPSW6JwbbT3kKPk5gmBYS5ciME",
  "key36": "5JScUTAa97Wxh157f3G1Bu7L667ZgLDTZFuhiH1Bd1TTudi3rTXJiwd677sm1BqfiXHUYLJppzRS8ykjigxtrFPb",
  "key37": "45doC8RXoH2KkWDYXa64jRHh9K4BPvwtpNNrqZzDzm8VeU5P2BPqFgLPAHVQWkQGMPPbm5mPCK9gxyN51P4xS6Xw",
  "key38": "2KXMS5FnxHNBMSuhr4qKLWBoUcX5ekubyGnz17BB4U8jUyfmYvaQDZAaNNxR8sKmetuNfa7tCzYzPGATe855g6Pt"
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
