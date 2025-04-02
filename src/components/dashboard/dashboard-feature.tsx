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
    "z9hMpc1AZqSup4b4kvcCmWsbP4CQJf7ZFkePLYHiXUoiy9USeP7shjukx4ycQfT59McmFUSAFX8xgURxJmBUnUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZJkS5y2BkgaqMgWeuyrVaDkdu3bJWoHxwGJFayNrdJhGXkncab4vj89aBfJJfXDBZAbRnNh2zkrgFWMUHChRsA",
  "key1": "3QNSFwbPBJYhKJJcsv2UN3HUkYZnYynUrRpbRiGizxD7rSHxJqGdxLaYdwNhx7AzmtDcoAjFRYiE8rgWYXRFeB6h",
  "key2": "2PuCFuNVfvCopvKTLTzuGSw5ts5Xpf3SXKbjjHxiYjRixqCT37atwdXtvrMjUmV8Awj6Rb9mSPWrSK2sWLfK45LK",
  "key3": "2F75eqMqRePKpEdK2J3b91zRUcu7Na4bfvFgFTwpBurjRGXcHroPkpHtG9ECQtMCcCuLGT8koU4YSQVFctUbCZsj",
  "key4": "5QGY9cP59YfNya1Z5EU3kV9khMzAmP16uUrNBDxNsrmbtrKvEwjw8Y2Rqvo7DVHGuzwo1ouTpJ5aWKSywPmVAr8o",
  "key5": "2UPPGibCSgVjUwWcBLGjTSQT5iugC7MgHBFEg5nsSiNKvcXXwL1uTptGcLoadLDQqNSAqd3DVW8qUsjKvNkeuBhc",
  "key6": "5zVHAJWE9otBmCuLd5JFf3bBi9m3z1VVz3XKe5J7tFurFv1G6SSt67Bp51tXUnyBUfBtRdrYTcjwdLpLL4Hhuy56",
  "key7": "FpLLz57eJnkK8mzLNKGLKX6q5rBevJ72yPr3Ss2L41abGJ6Z94dhCCgsmikX5efwZEUoVHzxdJHrq54Njdm1Arb",
  "key8": "3rGrxqb24PmkD5QSdHcnVw6grth8GCmQsBfMaagSjF6ZSfUzzCrF8uLoedsJMT3nG7Uai5Em25ZvuYYGcLP92tGH",
  "key9": "3zrDBGG9gAGND96PYbmmtneoVZj2qTNnBEeHoTKM9frg2hNEBe5MMSEJe2yA1ApFbo6Xf3NfE6oXWthJJh4EB438",
  "key10": "4ge1aNBDnusAxXKg4ZPcCKJPjPkeKApDLKe5uyackc6rbip5sE1yYtei7eXeQZxs6wQQLAV9VZS69rbsLFe2jjvj",
  "key11": "2qkVaM7n3c4UYv1nnkoMfNE4UZ4TPJvvvAeigDB2re84iUPCmu7THTePLdrxNBM7zJDNpNqEfgwXj6keyPogFFH8",
  "key12": "42biTCLbsvoptJ5JV3QakeiGAQwxDdkhTQE16Z63vJ7PHZhHwMrACgUM4YspoHGeeUdo2bwyorPYVzq6HPsVuSov",
  "key13": "2SRGjdmE7NKcwborR3FNxKzNMtbxS2MvCmR5Ut89rxbADf1Wed5KAi8v3QMpQx5rRDW7QjqZP1K1W69KzMRxDty2",
  "key14": "581QGgVsDK6DEYGjLaoZphAmRDhgtS7Hknw34XCCCafPNJAiyNsLEuCv4obBxuEvHmx4uscq4zKihkqxrhAkEx7C",
  "key15": "5hQHtdjgAtJz6Q9Lgwca5vwP8a1fy3d8QrqKtgzpuru4aYc66EZEixQHzV5dsKWDPqxoA3xE4x6AAW3bzMy5QHmE",
  "key16": "4ZFQnfnPpZr9MpX2wLXsDv2espbZrSGXGipfUh4wicuVzsUK5aWVJAbR8yCV4VNYTz56PKjLHABxpP4tsniTb5iT",
  "key17": "5KYpdETMXdot2uijbFj7njC8ZVaQ5PPiGpsENTwVosfqSWyk4pjvF2KDNQHVRtmCK67pZQn4FpducZMSGbHKSTF4",
  "key18": "2K5VJcRXR16PbUxdR8gWsYcgAZMukETkyRCu4yzTjyjUvG1WjKZ1ctu2VdhobMFdajCAMbvoo2vqMN8ji5ewbf6",
  "key19": "3WJsZ4jnKRwLYUULAMs1aDHfddfx65A8YTQCdXsHe1nfdNv8toE3QJhCfT9CUGXqiAZB1Kdq2HVnnotQ22Juu9A8",
  "key20": "5YcwhtpsV99niuH893hKic52ZAP7pirpkedmM92HmDsGeziSgAPpzezZrU8b2zNN9XywNs1ok8VTy7R1ayXKwHTF",
  "key21": "byUMHmBjV7vPM3JUuKVevWWYvtArW5KTeciUjgTxSXnrMricUUXjAaqP1rYQ6y2Z7CZZ4qvX2dtQA5ZNXXFDkaY",
  "key22": "5DXYc6TAAugvCirJVCnYyRidNLinYkF1naxyEQ6pUaJFzupMhicKg9HirpGVgsonQew6t1ykhuZAE5Ki3QMbm8kE",
  "key23": "4uBNmZYJyQNuS9na4idmV6fcT98ZGmFEyPCB5J196egtEYsVtVQxvDznzgEFsEtKVH17Rmr2p7dVCBzqga4PQLxa",
  "key24": "3CZ4G234WbSgCztTAhcn5oTL1f2YyDr9vzJvdfRnAbkbRj5xuQ58ptagFQkMC6G9yUMHiJSUBHy3u8M11EMJNV2V",
  "key25": "3znWw7pZ83w8xjdbJFmFjTtBVm8dboaVzSKev6PWhSmJ1dK9fa5YJLjVPaL82rjNvohMEh7CzbC9gzWzq8m9Wars"
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
