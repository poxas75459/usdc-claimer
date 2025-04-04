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
    "2ozroo3brYWSET7ghJPEuc3LMTqn5ySHirGEQuUp89WxdEEG3yGfKMmhVzdU7KBtWb8jsAcxKTDtCdJe8o28rBHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVqR7KE8ek6bJPrZ11FshT38U6a6SEiLFFLe31qCcXLR5Wq6JYtCzbcY9ExyX4JiKxdJ7dRQmLM2FPNc2LCCM2t",
  "key1": "5mmvAQbfPJLjmzF2EvKnkYAixrWuSMBTy3MUmXr3SkUYC7ATk7Nz9kzxUB1VQ9ozF86rZgfhyGdDFvASPXE3LVY8",
  "key2": "BoCEsD8naXpPdGVVdaGkcjdfTTnq5SAYLZUkpfEc2ExTi88YfxmsKs2sJBiPLDdzdknRNzqYT3Em4o3iMeBejZ1",
  "key3": "4ZaES8AYnJeyrBXy4Rd5HuKA2pMXQwHEaMUGQNNRDUvXyvNSUpX7WCYhjybyuzVPf7vMH9dQdnCDpYmud5jqGruL",
  "key4": "5FTP4y45vG9DoTNq8Qpo6dJdHFfGb5zdWRsK1Kog8Wb9uvc5S9m8PBXtrXdjS33eLfh7tXgCo8j9oEh1DTJvqk4R",
  "key5": "4cZZ1g6u21YEtN433ZkZsvGZ3ubRLWhuaXLj9FTEDtdru3oVprkudGxMm46eu1aB4yiGKGRP45i1YAK1j4euyWT7",
  "key6": "TwvkMRHoC5YSTKazUiYpCerwGyW64TYvsftf4nRUxpe5GdiL4RUwvLmf5r7jYx3XGt5sjoEVDhMex4JVCE4HJ6b",
  "key7": "3QU7mkwJmdPhGoiN6uZT124AJajPwGVsFYQ7brnBc97k2scAzkfMD1FYTqSgGi6k91oubCtrYAaGpGPauXRR4Ec8",
  "key8": "3fbNCYUoYFLTKr4KUUuvEThBA7fVvwmt1xPVoy9va6L6HerMRChkCE7bQrEkDgvfMe8LMND6DK37nFbAT2RNCe3t",
  "key9": "3wJ3nBZX6cZUiYDcsH1YsUHdMZTa4LpSLbks4PpZvyoKVdai9n1pM9P5GaekdXR4urmEMB2SU68cnPNJbVQkjfkj",
  "key10": "2BwVdz8gzjcs8ChmUapGMbRveByeVPLax6MjJj8VNJezVr3V4w6WUmpELCHuZXiXRzWtnHQRx42CWrn43LvoP2cM",
  "key11": "3CmXNMySph1U3gqH3Zz2PpZHuXCyhDNLRo3tJEKwckQ95CNQGLqvs5J6KjYv6cVHkPAu1uJDeoi3de4zKf1vPsns",
  "key12": "doTxStXvjtUdpd8juWb39AxJL2Q7NiR37T26GHqSbJ39n3yjbbDdPQF2BVh7Drr3HPNof5swtDG3uC3ZDz9euCE",
  "key13": "UYWDmyMM5Du2v1zj2QJVCimdXA6oiKZCXgbtC2PPc9CxUpekMR3eTJy6162vrqbYrEDiYQEbQYa2ezfhSajX9tg",
  "key14": "668pgBq3ptp32Q14YsE63r5EucZw9VZsyfFNisujMsgzntHeNojkSh9mzZjqueJdkgswHwHdRN4YoZDeGh4YXuHm",
  "key15": "5xafogwbX2wu5WvV2EQnmfTwwfxpGFwCY2LRgQYSq2CZ2mGogo5XbJzPLrYb5sZtdBWkSey9VpDo7A6gwQYf92Ed",
  "key16": "5dQKvXDJgdg7isfsD5XngGHRoA1kDWNanmBi4ZGVTVVfBAW9wFkVaFhh13kYr7YSXgxiueJ9Wawt58eFeD4vZr4x",
  "key17": "63ms62u6Pj9BxKqpps9fMEmJNHZX1nCfZdyoyjcc7VaB7KbHL9XCxsJtnRzzsAoQKqSfeWnXwmBY5UmrSt3cU8sE",
  "key18": "h4cUApPSVzsC5JunEiCrfGPHJodzR7p7uz7hcReFaBCyZ5KkxsVoPpjCDzrDJTyt527bKcnwHtNPx2u7vSkzcQh",
  "key19": "5jAHsMMXAYS9nspJHTjRFdGs6YXiiEEMKn4DcKjj3BujYVjsjWbrhxKYN4Ushuih7osrq2RjrNJrQ2bRyaUhufCp",
  "key20": "5WzHhBc3Cb1T7GhKtEdYiXpg6fYC5QMZ9yqhxsxkgdKAGDxP2Vgcz6Cdsq7vMtmSLEdFdk2MnLsciufoxGs3WaXK",
  "key21": "XwHCwtAGmcVyQscsmcxrrBN2rZuTdm5jJmJv3SE3o9BAciTtUz2buNJ2C9rwhBBFeFMfpWHtQzR7MisKV9GG8E1",
  "key22": "3PMQXPQm5CmT664ZMRGXCsik259UiepxPZDz7nKmZCaMWXQP5TVJ3neeLM2bMhkvxixYpycE8hDgcWyTLh8vfqAZ",
  "key23": "2Pazd8g3roQb8sSQy1XKaqqLbGNxbLfjeBgWbc4pVyJ3CsQNK97wtFHoWVQoxTAGWvxLDiK7hct3mLAcicUYFqAK",
  "key24": "4gfcSxCJebX4bSdPYxmkw65iCdd4bdVxicUT12sQ7RpCCYHfG2MTdP8szGzcp2qkfJdX3KgbpprPK9oTwJBTiV6r",
  "key25": "5W4DkX6Wsye38K5m57UQo8hXvqXHmYojneeaTtff9U3q87sG1TAunU8VD6pgfvw5UoGYpb5sxLzXJKKayXbudBBU",
  "key26": "5x5Y5Ea5MH36X8QS6uSLqLP2EVMYkKwWyp9uBsttPWjfc8D2e4AkQtJLKMJeUCdGbMVg2jEnjgN89Wt9JwYQm474",
  "key27": "2bycFpnBrETxjdxEMUX7gJtz5r38qZqfY8qrdZmJDYq1grbiS5EZM5jkE9b6Myjsd2pzT44qnuJQDWoHp8Qrh8ip",
  "key28": "2U9yzLc29ipK5ACY3McSdgdnEe4R5vKdxUwe8zaHzDs9aQznrNyUg3vtXGwbfp6MW1vDx2CL7VrjBJQqLrjkosoy",
  "key29": "3RgwvLACHizprSwy1iRcG1A8Ma5RF796SLwGKSdDS2PDBcGH76F3dSgsbPz4RbmrUyEpaFAj7M3AR7qiA24eEr5s",
  "key30": "o3ExJ4LhjvAa54mRKXQH1GfB7PhsmUttfv8PcGCVxcBFQK91a9oGuYghAsXD9NDmivqrsyqUbx9ZH4Cm3RJRBSZ",
  "key31": "63RsWpxidtHG8bik6dxELdKGu9jqKoZAxTFp8eFjp25ZhbciJadqFZFUtVKiWK4xYt926wDhZsvS3Wvv92UnRMoV",
  "key32": "3F5WQByBXVfu2rYnPuNgnu654K5p6aL54dCnYgcUhkBEhAukRpBn3N1T9NunE9kuwpXJpbpeUwZezihD6eDh5S3h",
  "key33": "ppsiLV4M5mPqGXYgbVac8t16wRo5WMTyh3KUg5RvfNjy1wg6LzvHLH5tBF8GA9aPn9T4y6QriNkbyWTZtFNZL4o",
  "key34": "31EDX2q8Qb42gbXdytmDLyWDygLzcX2woPd8Ffzuex1DHNe69tYeXWsj7TfGr5KURACeeiuoizcE5scrr8ZdvWGy",
  "key35": "4zuGKbzA2fSNSiq1aWTCSnfZHN16BWS3rMUYmmUZAr4dM6RkFekfSwxNYxo9uTScWQSUx539xavahuFPQEULu3oC",
  "key36": "5vv3rtgxdvybSXUiW18kSPW9ZvRLdA6itpc3GT3Y8pAUmKT9qdQzw1oTXdYYNK9YkjUuQjYiBtQwPN9ZUnRJa2P9",
  "key37": "3U3XS2nRfzUYosedtMfWBWLgzzMZ5jab3pHM2c96zQn2ZVZQwvSUjD4vn9ZM6fftPzFaLazWMMoiZWYE84HueKhW",
  "key38": "txNhudQ96prTaCAT2XEZ1ch9vbSZYsLDL1hKYwUX3o1HyUmnkM4Ha517tLoASCd84ath7zb4QxpjKeCDTsMbAkD",
  "key39": "45PmAASDSd162x5c9to8tXtr77nax68MDU4inWT5WY34A5MvBvUHBLP2vL4zwksesk81RoxCaB7rcNdhPJoTuyc5"
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
