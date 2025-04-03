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
    "22wAGKN9sZAAidzDEV89mavd6jPwhYFhMmWoxRHSoAchUxkCex6Q256g1MmbedN2dDs4j1Kt4LdSrudzcECQsHSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9hftWumJ6D3xprdMEDAMN4GENWe9vB97NFzBef1bzdkUBxFbeAPXrfzM1zKWAp7oCMKk25yebd8zuuA3hPxfhz",
  "key1": "4eSzHgmCrf9Z2y3nJBAKzQRuELJaDx9pVZf4mZmdvx2wv4CuxxMFeEpEMh7TYtm5rgDcK3M6ruwZcadH3UxnqiPX",
  "key2": "5oU2myTGrTAv1s9WskhAy2xdGfvmxjzWgeFcGxzX6W8VMDCgfjiR2QzoiuPiuRLU5VSdCSc7fhgECPgAVJ2DUeQG",
  "key3": "5eVooAobGPbBgtJgL9ibCGRe2LvzswULrvNVMkjU4SbaFxgKhFJJ2QcEb6od5Ldk97Azw8k7qeqxCDFcR9umADQM",
  "key4": "3SVymgyZG6B1zoMgZam3wfUkMNdqQYSKVyTDP9g7SdmYDvRzvzChVAcXAhJjgXyYtjyEUaeaQVrCCxfJ58yQRBj",
  "key5": "2FNVANim6VtRirJBLX8Dop2bXvY2niMTxXphzXY91ucrUD3vX4p8fgxAzAioVtLE9SadJFdfpNGKn59AWeVg8V6i",
  "key6": "3suoa7soJRrYuZo4yyjJanYddvkzRpECiK7cbY5CwMEGZS9X2WUPCFy9sDJYy9PbKfUrD8etgUcLvK4voekZrQEV",
  "key7": "57cLZCucdaiYJeBXeNWajJW3U3mKkSKqFUr61Tu6d96KWFY3jbGgEHB3kR4jPqkTDMqiDbkgBRnUtM8GMoNtbTGb",
  "key8": "4HxViipSpUhWfBcayHR2t5A8o9ndY21CJ7AXizsUPe9PMT9ViUNuiioNZh3ms9GdrjvJGezoxPpFFz4EosQp1tqB",
  "key9": "5dRvQr7mS4SUhvjAkiGN73c4ZPJSp83HyyX2qbf1HneNFPBLAhvUia4cwVhRsb7JWtuJ9GCnSkjVcPVFGV9HmRxj",
  "key10": "4KLk4apJp9WfV59cWsevXynqv4grTu1AEmz39BaqC1VYJyUMaHvNfGTm9dwuHYgiqh7qgM87UtG6ZpfmsaifHRES",
  "key11": "5eMwpKmUAWNrM4j7XfXcGWogSQUAg6MpqtonL8oJbcupw1vLuQMfTmvMYQx1dL9huVcHnHtbBxWcfrSpsdXHbFvk",
  "key12": "4uwELsD52Jf3duWLRfJ8Du8jNEW4GjNBhmB58zF9JVV11fmBW1MMGh4UqEPCyRpjFMS2vgHboS7Ze1HAkexT4Upv",
  "key13": "61TH4qSqjcCDfpyKCAhn1f96wnSbAFZknb2qYEa66UwAKjUtqXVgtLF3KNwwWJV7eC5L5W9PyZEe5cgFdhHH1yRJ",
  "key14": "2bKUUEQ1BN1VLPa3SoqaTiTmZF1KeiUjfBdX1U3NGeC6FG9KbtVRoUjsVUpMMbxrsu4yPVDzHz7x4YutafiTP7gC",
  "key15": "t1Kgb45xhrX3WZK3VEYQ1CJyTED8A8hrMnNBQYNhG88BXVw8uQj8B69Uxtq37TuWcVB1wdhtg2J9jYYMBrQQsSK",
  "key16": "4UDdeiHK7AAgTFmYDWYWKRmw3Nm9ekCAQnFtMfXZ9BR8Ta8EBEE4WkwYcNnH9bvKXtaVcvznHCEiz7acqN4D17LP",
  "key17": "2t15NUNpXzJJkPoBnvgTQKh5B9uwQZrW98KvEf9y4oYaQBwKdSS2mMRi4MP2dDpNksb8cFVKhDrt8QgZgjHc2Kf2",
  "key18": "39h5PX6w19cgiHDCXQhPopns2MrGrVXhFACQ6FD5SxoT4Jkf51hLXHZdDQxBnc8tmpenTujeQRJvB1ZQ986CCQUW",
  "key19": "24HFMc9neZVNqYyVQXZSxWcpzJhCQyHKNPMrvy7NYMUK51JkXhXMuL4huanXRErJj1sbpkwi7dHpyqikGJsxEVD5",
  "key20": "3R2sM4uavp7MyC2Y79X56JQBnG4ioCHtu2JN1ke3VGaG9wBZm1NxEy5D8qTAjSFzeKftjr46QEnFKX4d1WQtqkmq",
  "key21": "HNPzmZ8mM9n93Ea8qx21UBpnHqbhexrpSgVQQK1gbmi9F9864Y4AWW8UWg8JvHCWiCUZYESgxHffpfKaBAuZGAv",
  "key22": "4CTwv4VzKdjTDGGckYvniBNCRRxypFPww4TA2awYRL75RpF2dumF77XpeGykek7oBGrjuCiP2UUAcccMyxWreMfL",
  "key23": "29uXzCFejg2nWhZRfrfwn5ZW3YQjC5fCaSasJaA625YgjhcSe9U4UgfGGYoLpnFR8uBNz44Yxt5evYZ3G4RYzgek",
  "key24": "4RxPApmGfYZkzLhWYafo7iDQtkSpJ86jdzXTosdtE6kMC3RiEESU7Gsa2ZsX63JRA69NWaxsVFWqFPj1iQkQVYu1",
  "key25": "5hUFPujXu3QX8VmhgmRPuxmfMTxmiGpS8S4bBB9JFc92vYPzEz2ao9JWizVYoZig1c2fU9pxWYGCtBnuKARGmrej",
  "key26": "4QEoqVacdJ5v3zkk7GJHSxVV86wKgufQ5NfwHQGJbBVPPBrn8F8zgg3qNJDwz58JhGA7kUjRf3wGuYy5nUpPX9XC",
  "key27": "5niu4dGhqVbikqHBxJepSe6YZUjZemZuJEZUw2kZmAAhhhCGmd4X1kxm5GRTQcpY9RUZbV3uHnWRft1AgwVP1CZN"
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
