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
    "5SpUbuxDAVoDzUXLMVZZTTq4RnjbMKSD8vm2Cm3EUXwnbQKZbHPZMerxQYtquW3YUVMJ7DMgXBYSMp4MJvMLStW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49x9RTV9vDM1Guqet5fxWrSBpTpGGU4N53PCu9mqNtf17rRTZX2T8XXioc13TJrcpTqQutnBN95Kb44A7P5zwuwF",
  "key1": "4ivrJJ99hdnHtAcTur8pyrkePSbuEsXjhf6oRdQapTvNQ9dhxFSPTPzwuPztaw279r1uWWuorRzKMbhAxpRzSJQa",
  "key2": "5QqvtUqRYiXVYERFJCi6PXUwoddgt2TXqWi4kikg2Ly3Y1dvg3oH5zy6iWeGuSQz1zcA8adZnQyqtu7a4UiZQVQY",
  "key3": "4xZhBqc29kECjBjjeNH83ne3DYsiZy3Khkic2YeeyiUjLdHPDSEbP39Ph15Vj88qFrAAtDHdPWGgrxK6boRBmRWt",
  "key4": "q64qfh5KZhge2MndKFABttjNweQ489aKy2PwqCWEbCp5YpYqc5sqYXhpn48QzUSjYjtVs8vMuDj3XSecVayWcY8",
  "key5": "5F4ngaQZtcQLQwmdzHsyEYrfNqdMeQbyYWZ2dc8GAQqGdSur9eBbF8dKnwsk8dnkoo14FNzKRLaW8X9i1J5HvJoJ",
  "key6": "4WuVeuoZ1TjZrqtA3TsNsBBkMrTQ8zsYvjhoKztX3LiJoezLqeHPsF16gnKVnv4nM71R8EAhmtshbahpv8GAmdm5",
  "key7": "fRdT9HTcDv2Y3xjWWJdJtVxBc1gurWzLRcUUJDknKGJvBJNLUN6LKVmHzkp7EGCZqScaXHrA4shE2GjdQZnfLhq",
  "key8": "3fkDh5oZvJ7psZgMsqB9dBokMvocasD3xtZmGyxJN1hih614Kha4scgEPdzhfZygr86Lt5JajNU4wrxmnrYeTKXx",
  "key9": "QJoHaZ1br9YtciUmwYeTADts9eDtqQ3JnTdDcL2WjF2L3UrbbGhTnSRZLwXX51SEBeL3wPnt4hGdALMaaTrrYBc",
  "key10": "5Z393DGYxkBZwuCCNJzKc1NTZBkshs8o4sRGRQc8K2zKGsqyZHgmgQg73Fq5cTu9AC3b3HeLRp9uEaTkVBR2zAia",
  "key11": "5qZ1rMiEBvRHQh3mi76fZkJNpPWK1xPsfi5ZndBr6WnmaG5GRvvuyGi87sEqrgMWY87xZ1gCkZqGoPQkZC12rsJw",
  "key12": "1LKZtBLjEjZ91GHUC4c3NXxpk4X1WGdaNnEizkdT4VtDywvt7zJ6LKbFSbSVfHacgWjoJppTQcsaG4m2PXKCx6r",
  "key13": "44KzkpJQxvcg58Er9VWyoTyGnSgNsmq3zeTEuJiJH4sd3wdiKnjwhVy8QHUpf8hnBcc9GYdPZs6vjLDvVcZrDagx",
  "key14": "4JEfzuZqwwZW9fA39LLziebPVWfFaVmv8a8eyu6RHoMA93nV8FKfQLGg293Sq5jSagmzR5ZR1QL5qiMi5PnsLtjj",
  "key15": "3ZdrrvQW3PGPvxzp48hcxAtjVoeaum8wG1tXeFUARPWdv49peVHSvj4XhDsoxvCz2GQonfD2i37fsLHiuJJEXE6Q",
  "key16": "3VYa7EdHib1CiUrv5pwH7mJYR9VmsE9ecmWCvwB3beQdoNG1MMmrspawTPJLbv5umBqHpNQxtR1UAGgbsH7tVN28",
  "key17": "85qm635eF9jE5JMHAJ87B6Udhzoe3miFDHFNNprGXVrXTJAFbrghAdwPHUt32kgpD8H8uZkJiTCdoWmPC7it5vC",
  "key18": "1DV83sDWcHrPSecazeRSnM5eEn6d1t2prXwtjDGpi7pnLtZbe2zXytPbXVFdjxXN8Di835NvBzkhrTx2YVpbGxe",
  "key19": "3DeEqiUKevL6tzoCbYSf2Kf5rdCkVWwugBZkxNnVCMxQ1DmqfummWYWaeEicKP4UrZHrbMJdUEPDmMbnRjHsbt4G",
  "key20": "5hAvBodw2nYoDYBa8ud2ojSyXg8oBESnpd7et1DPoPsaq4WzxuLfyR55W6WAPyGiQ7YMwqYJPRuKeiJ927QbJSdL",
  "key21": "5A4HdrkrBJE14wQh9i7dXuDxF9UGHuFkfi46B2RzNqhF158eXe27GeNFKjafZyR1E9YUrxvB2VS8hmPRkV1GoJXb",
  "key22": "4oYe5rCmyv9Ahn1ksVhMT4GL6Cn5FLVGNPEXjv3cTyaeKiWWpkLHYMaxeWWBcYkyPSMw1hLdfHUU9dV1Db3VN6F",
  "key23": "3BbkSfhF19fbDeEhDUy9XoBkjXE8fRFdz3AWe8S87GGhuuxTouRyWoTdrD6YHVwjh1V3QwikXcTqCoUsbyLbZq9e",
  "key24": "5bHuKQRmJDE76kyA9vJd1AWd87pdw8xqweG3Enqx733FP8KaggKsADAzST48SvHDE56Bjo18cTy4TGuKbv7KrwBh",
  "key25": "2P2T2hwjM6bNmRTxc7hpxZNL6GTdowLgXF3FxZKSLRSTb3MXHjTCrWJ6AS5WzbP7rMaeGWzQomJ5ZYH2k6edym1Z",
  "key26": "PgdMUDdk7vQukHJuKcs8GNe1zf1BZifBED8JdEkvmy6Jnfb8eAroiZ3A5HUQosC4A9JHBVfvG7nxPnVLBUxMosj",
  "key27": "4ePD9wFL1cbDXfV1wReFtqRXuLg98PSQBqBqvzeUfJpMucxKtZEapQisnGbvjS5kz5i6bdQukLs3rL3G1Tv8PjH"
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
