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
    "2dfhpFMT1Q8mooTkkButBcux1CAA67AQxiNTt7fRDuuybrj8pJKPuzfxTnC7WzTAfPYUwGpcP1jQEBHEz4DVpEbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EH7fnB133eZqPxjw1FnCKZX9B7VS97HizRoZpjNBtBGWCtvJzSpZzHSL8y51evRC6jdQFFMtYdyZmuTwAmPGrFL",
  "key1": "2rv62azKVU1gCwjyyJVJrhBbebmCZGhL1vcsNvPWpVgfCUicTPui3sJSiPMUYxW7ZoVkYsZ1WXtPBRULGrqd2ehq",
  "key2": "Gh1ERmoW5yThr9Snxv3HFHGrxXbFUszdP5yPBgY72ZanNUPfe6q9wZQe9uwy8Nssi7oBHnN2rVkSZ25HeNzxxwL",
  "key3": "4JSSqD9e6hoj9qVuDzRNQkXeozS66FoLTPNMFqB7GpByq8GqWZ4JL5PAXfmuBemm9Ga2SBRB2Y7k4CbjjBt8Jfap",
  "key4": "4YcJAV29V5CaYYgjPc2ABER6a39PXaYPbFQ4JX4ttXTy23eHFfcHPAuMUqLW9o2JYpiAj9NQVxaa8BzCex7WM67A",
  "key5": "5Uc147XRYemCyLn9Aj1uyoirvu2oLbaGvhwkaoB5JpvtMCi26dN3yUA4iCd8y2xw814B3dM9d4kNHQ1CvM1eNeCo",
  "key6": "3fkbgCYe8ngHxaiVADzMApsjvo1PYiN6XTnvNZS87kdXboWTt3UiPqGwQ8VbsAbu8EFexij1UKm5LQxY5y1dJzdA",
  "key7": "5cXJ8MxMPZTd96CVCYKkBzLGJjyaH8WLeWcVDGTLF7N4kMZsbaumKTuqSUgjzZnhjGQg8DhRgSh1WJNiBGH5Sxiu",
  "key8": "5bhzNb7LcnJUZdEkB1i1hqVvgjPco7e8xbzTs5bgD4e81nUjMRMuC7i3XQcKeSfgMRRo8LNBnWjduvTtYNiv8adw",
  "key9": "nQMPL1TotVMcxPognGQwPmM2For6ScxcX8rouj3VZCtiU1XjCapbkcXd6uXX56itCMafErDFAP5uFqY42zM1HPq",
  "key10": "3x1qMZPcfg4PFSuAtzxB1Voa9QWfGmgC1D4zfUtrTQbLhGKfzYMV6rCgiKfVrGzaqprK7yL2ANRhMcwdg8xpTXEr",
  "key11": "uPC18t9m34UTiX92674xo4iBQMNxw51DgpGy1rck9EjBabbE6v7X2RsLHzp9782oYAQw54PVEk8WtT7tN5SygZM",
  "key12": "5pzWeNGZzxy17ydS4zWfTgSR8BvmtY62pEvfjqrXN2uwh769tb8dkcyk6semx4QwFE8Tw5m8wVMEx5W6wVAnX69V",
  "key13": "5AaqjA4DLywDC7mmJoMR1Z1Yy2hnVjYiThSo8xbGVK4JXjiAqBSWyFTFYFPXwCfihFz5WxQXVoZpgyfPF6ogxeU",
  "key14": "47GeHxyyRq7NcR3bEcj8tuPPu15scnmrGZYNMyFVFCQVkvubMe8ZEecCW6Y1BuBtdp7fCxSa3VVT7ZsDdFgxvX84",
  "key15": "4EhBNcypNyjdT72ETra6D8THQrCfxaAnECTm7naqTfvfQXLRrDgE2o5PsLWcecw1xSaznsoWPiQ3Q5FyJXZRS4wv",
  "key16": "37r2TvgpyTeac7ts3nnFidTntQhBgYkn7KVJJVVKA2s5GPd3bh3jWquVLrgSmn4T9evAmvAof8WrGHMQqPSVfPaF",
  "key17": "rYjeWzJDVGfBdnJqz9spVDLnjuHuTd8GfMdR7SMEFFHDUKiEttBC3HuJiG4zuf96BQdaa5EThyyW8knhCSGrVzJ",
  "key18": "63nf49afUoTiF1mQMzvQifBB8THWfrqtbzkGt3gULJkMrJNzGw3aMnPrC8Lnpgp8mJkNBgarWXLF55kn4d9CMV9q",
  "key19": "gmbc5f4dfnKMdeiX15pBtnuRqwCvzGGWrZzi54nQXUUiHfYT32sVyA1zmJkM1JSuGsp15UeU5tk9jjo4UWDHeHa",
  "key20": "5JgaG2WG9EP64C7631khWXJ8HugLjGN5oci7w6akfxMURQFTQVkQzshuKTqZRHTJt2zdYa4e6Cq5DWATuxb6KUZH",
  "key21": "3BqXp7NB8iyspG9KJerQ5BCmxhPeB2Z8dvhK3r7YjanofT2LMxc8d41TbJWwzeKJ9CRx5mWV62L8sUoRHH7gxmcW",
  "key22": "zwpup6JmkweR8VFY4Zv7k4PKhZNWFhcu23ZenkAvpzeRRF9mbScCzYJPeKdyNKjLohjDXgvMBok4J98G5ABnXt7",
  "key23": "5u55xNKX8VpGr4RpBJjBBUthn4iHx6M864kR7vbESFbyfgL2XVEaNdLnjiRb6uowPpWXUibEmkaABQ157M521x9e",
  "key24": "4h7JoeK8SmCbb7PBGxt3W4DZW6q2FCYkbCkycjNzyH1gYFsVDKm3mKFoNDhooUav2H2jtbRHQNNkcHSaezJ24Fmk",
  "key25": "PZFUQJWLNgQ3v19rqouYNveQmoV8o8HPnhxPHvDGvWxjwNdKpQhnLDguhBMgaSrttm6gYp77zYtP9bbKrGCqFuQ",
  "key26": "5kjPcM4Sd8hLr49tqHrcyr9V5rcPsNHz6wJZCT9sLiyq6mQNuXkiBRY363PN3GkRAdxuYvtYX2QwWhZQWXGCNwE6",
  "key27": "29x1js73fvcs1NVQMemZobJWtFXz92qSZWVzLrmPWLLJrpDmA2jAY61uNWRm7HCW3ZDzqt8up4Y346HRKupFe36A",
  "key28": "5CsF19qADseNegjmEvDFyAMPXEjJHJMftS3vcxdd3BYUBaq5p7HHFLQHvQZToRpp1A3MMwzv6wgLPVYhuc3tfYEB"
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
