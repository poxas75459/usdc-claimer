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
    "XocrjNCDawnBP27yyjYKqGEzFk8orfYys38PLUocBBfi2BszARhwgkvi6oK8ZyHGJ2FpSrHajq1QeC7TMxnBehJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFmWariXpfp39CF5vWRrDouU7Lxc2sQGxWukqzzVzKQbSxLeqCnG71MnvzmK739jg5dN6TDHNjbHcx7emEwnYLz",
  "key1": "3U6SYuENt4gSTEKgCxQZnHruFn7P7x8ZrQG6xQyNZUSfmFLGFZWw59Edyhbwe8dHEkjqPoPxohM3A5gWvkWemmYh",
  "key2": "582XgNg3nycwqXZvJtpHaLrCGvH4HtPf88QsdkqoL6Da4g9phrVbHpKoWnpHWhN8rS9sGqX8VF46Ty8ogg4Sk4AF",
  "key3": "5JRPz3LFY4P71v6979WMVWDyKUvPCpbBiixjRmUpHfkM2ztB15s4UtrHkzwcUJPo9XV9rWtrqFUiRuw67EHqZBaQ",
  "key4": "4TCfQiXmArtsqXAnBgBVthb4TrB2D5h4e2oaLjK9BU3jxHTKNgxs43fz4VWtto3QbeB8fMfRXP1knofEg66VvmdG",
  "key5": "3QGAhCNhCzLAiA7sX8QwueuALRaySndrsbEKQhmSXTo3GKP59DDTvH9bJ3XDvJVgE7s2i1H99A8eL2KStD4hnLGu",
  "key6": "2Up6CdaLDZjh5VS2EAAobVPTaPN1uUn7boAcN7kL5NxSEG5GPhTJJeS3be7Szfk7wavYcjeyDtVmDnNpDaYw2AUb",
  "key7": "5E44GDntS8BE7spRzyeDrXEQNgktUXXCyF3B2tgqve8BTjsXRhBbNFDLfZB6QPngpZdSzhd5NvbX7ESS6Tg4D4y9",
  "key8": "4UZLNTstSqa9bRBRRcKPLkLVBxMvWkRbAkXgmQcenLbAKWNc8u39X7sTsVQDfp6E9XRSYQrAsjsmYegNMq6r7LM2",
  "key9": "4AMS262nJyGnxV3AkfdpcxQZKQGciExhhSQAeyEgbwhn9r65jm1WQLUUVNipmnJ5FoEo6hAevLDXY6vK8A3c11CS",
  "key10": "4oLhEJYrGuGVYUSWCNEGwAWguaBE55vJz5Hq9PKxpqG5znNXyKeVTypQ7kNgf3ri9ei4me9SHaicVFe4f4T72EpH",
  "key11": "2AeuL2SCszqmVsFzzW6LveZr3TRbsRaQA5an8KsYCrTsThc1Jhy93Vufru2uwaEdNRd8p2vA1zAYYMWwUEe9xivR",
  "key12": "2udZ8q8yTtvGdXMRo5J3zfLCrdCX3RLTf5unKNHWuHLyCCMfddwHmninQH3XXwRBoDThxj5bc3eoyRt2oET8MtCs",
  "key13": "2AuKjPJr1iBJMJrCYq1EByXaEun5ycCFFPJijsdM97Q3EKjwq5AKg5mip3DJBN5VQm1fkGUJBQV8mHwYCdH7szCy",
  "key14": "PwgUD7sSXYfkS9Rqa9ceAPyqG8u2YxdYnE49VGWtCeLfaycsLwqgYse943oUVemB7eAmLdEHtF4p7Anmss6YjCE",
  "key15": "5ZY5nQeabmUJyT2vAkurDiNPNJ4D3sar5wqjq1Fg6w4Eh84mdHCu4mS8K5ycAnkANFuvBRssRqepsUcKoMdQFYed",
  "key16": "4S97f7MiSwJCrdv6njqkQZm6HgJSm9wi6ik6NG3etXo5utzWNSNqkKtKNHbuGXVRRMbDV7eRohMxadjdrErmVZ7D",
  "key17": "4mBSguYsZ73eVgRbnqiM5gG8Z4ovUdz5p6EdBJhDFpeDyaomYi9vnQSydPA7r5cYZRSNGhH73ezz6L3m74XTKfaa",
  "key18": "3y13hZGJdaLN16kL27zS9WgXo5W1SQ1XfZZXidGXkcr1k3P8EKKtoT3M7imPGYRN4XcfJWSJkXFMWbzKyNmF1XDD",
  "key19": "5Dk3Y89oM4PEuCK9n8M4BFKwdF3FfmpLp4a1oucPNwfH2U5V2ypHEfGdJqbd9hK1qvVUzKCLZF6TQYi6XW6q1Qjk",
  "key20": "2h2bdhFSyyPsMMfS2rHe2hGnRzD5pKz6ecp6rLkWtQhkZzBTCh2qnp4BmSU2d5suYAqP77jha9f6z1T15SAzZ2pu",
  "key21": "sceLp2s6KxfuwiYLXyi1YajzVrfZaDr8Bq4veSzjvJkNmgiy7MSFqWRbkvhZmFfpVquSX6b2CQSG6BDbi4bR7FJ",
  "key22": "5UwoKRWsRdhzyCUAJA23GXrFTssQNHKVgG9XojDfywu4MjWps4X69v7TjzspWzRBVwxZTzaXqcboFKuTTiokSLKB",
  "key23": "4FY2udoCL2kZfxVtGd4Pbyb2w6hDtXgC7kF8gQAgSRUnm6nwtrUqnSsJ9anoWcRpskE4kRV19GQzL2tZ78jVKidP",
  "key24": "5FC8fVcvJ5uHTghUHuQYTB8kHDWWim1Mcq4FLrXtVN1Lzze1bBDha7V5AookiUegpKaHidYKeyTvXnE2vhBMUP7Y",
  "key25": "5QJQ97spZfH2NQAGFRNvrp2Vj358d3DzUUMifmgtx79AL5XUkp8uqkoCrEW7hg4FURVfrw6jkudG3s5v9VryuBAc",
  "key26": "1bYYsLXhj4AwbGTnqGDpevxX7jATnM4TKwG1w76QMKara8g5UYFV8YnHKCWtrY2LvNPRsGm9gMmjy2k1X82ydSX",
  "key27": "2y5D3kwwqeRD9X92duVho7E8kkh16U8BFAY2zxp9tT4h7tq5PsS7FXqvEM6BY8xsy7LRuhB1UfZqpBmjZXe9fp67",
  "key28": "2dsvfcnTAaQw3Gp3L53WSeJJRFH5Kovp45nTk6ASZETmBVCpb8u7o9BUGx4ePRnSBmEwFiSH6QvuqwkPk1NK9rse",
  "key29": "SmSMwuzQnHoi89n1YFK9dKq1QKrmsxJNqWfRipMq2wX3AsGNxZzacmuidrgAc6Qk9NhYTypTPKzN5VXvuJv6r1f",
  "key30": "2KT4LnigtUBxVbJg64urX4miZQFbjEUagTnSoWaGyptEteitJ3nQhmNJLcXRJ8LoGcQNxB3UfpeqUjxhVbRhb1cg",
  "key31": "RrsVK9BNLWAshU3tqHjrEnsntTxSs3gxcvanZuyYZfMgqwZmrZJa9mtMT4ngHRoi3Uo5yftxQwcEhNGhsZQxBwQ",
  "key32": "55HrHqv5E48eAiayuUHtBN35xbmjNb1HnJUJChfjrgwjgSswqYgD7pPzN6au2ztdUsr3xtwjXoFa4XWhiQnUriRF",
  "key33": "nqx536kporYwkXVPqThBBCCJMVswg3magQkkxfqPyUn5CtpbuhWbjjBacHpFErSnLevADCFgFeebv8aQvciXgXU",
  "key34": "46LmruLVuzM67a9mdKDDHVfkSzL6toUi7VpE3BgkL9q5f4ZKpmgMDwdVYBBK31XfRtZwc3ec7b7JAEQ6R31P9iBF",
  "key35": "25uAkUs3hZt93SnwVZLcG1DePufdBQ6oiMXaZpAvzWpDmdzAVa6J5BKK8T8KcPKNFjoiEVVuW6DFPMDsnmCoyTQu",
  "key36": "4rKEbSRuVQ4GeCHCK7SGsuEJv6KfZWoSfTWPuXE84AnDXEoZGNztLPKe8gN3jqFDnptEKPzFYYnwZpNobjCCaS2N",
  "key37": "2GhaR4YCDfYpdH24J6qkxToSsLWPz7VU6WyV7EgQjFAdWwpxCiFtnNHxVXUU7Bn5rAwbPaC9zzM5rsnVkTVrmAxE",
  "key38": "5ZFNSwNJ4KBCxsYTJJf9eucbgXfZqSAL5Lsp8jPkVrMwr6pwmwQ28GdDd59oaFCRnPAAGi1KZsXrDkbGLqnwrg7N",
  "key39": "2CWi1Xyft6pGx4TthepRxH1SYEbxXg7D4UszYZ5e6b7EArVZyjeTwdFdR92UCtMzWrgFhY8wupwVnhUmFrCwXBnK",
  "key40": "3gwnn2hvELeWqVZzbuH5oxUVAxZNXqLQTRuq4jPmL42xcBwzWzGav5FiFqLZCu8URx6DVEUTbpc29NoPWsanroT2",
  "key41": "2rrKdTosFkogAwdfEhktCuArQJaxqBm3cUfm3TFi1YngCQEpzBegAjxeLy13GL9Qh4XR7FDPPb7N1YY8SrGowxCL"
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
