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
    "CNUrWmgARbBi6MUCzicmY4DBr811Eej47UTjd7vhgtB2VnFQFQmyeJMEnP7jnACkjgL6LTUqL5cYVaxdBBU8bfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4midy1e7neEsRRm3bjBrayScwvrd1MMqE3AU41CnK1D2Qv16gmxA3ft7mt6PiZiK4pWvHVnkBsRXwrdNmZYYdcAZ",
  "key1": "PEebWZ82mhajVzRhtQLVThA7r9k4pC3bUP8nDvYPsrAfeYBY6aPjZ1ddG2VBDdr1PsJUe8goK3NQX1DFGyiPpew",
  "key2": "5G6eix3AxfhLTvotemYiCHtde47Wzvb24xXqfTgsKHjvxiQfdRkaGvrtgZ8aSB8dEVxbh1mUmPKa5nGKq6U26P1z",
  "key3": "57MFjM21Yea7Nm9s8F3AW84MPHT75dwqMaQ9g7rYaBz4KH7XJRFp8TtjQz8jLDQSHZ7UmByQpwnainxQgbiRdcLe",
  "key4": "2gUDg3sFCRwPHnaHaiZzW83QvBrtA2EpQ6o92XuM9kPLjvUr54wnkWXvqaZ1DDZHEgwZvWgsttxJ4TGF5WgjTV8Y",
  "key5": "LQfTceaQz7zZCAoVQcBPj9Lp88SS4NmTgDTp1rc4b8ATUtCtYcPzKps3ErkCQYgi33gLfKNC68dpa22qv6L7X9R",
  "key6": "4KqkqVyG1mhDsPS11eJUjnyueyG7q7hUgyzsBQ1VBq3d8fk82J61dnfFdeURwx1AeLxY1ieo8Nb6SzfhHxq4ki3v",
  "key7": "2PGYX6USuZtqP5ZCSPs1LsoqKdPGp14oaCrCBWJamZkpjkQP44oqRh5VrLxgk9ovqJWQJd2vi8zzf4FR2DFt9YGG",
  "key8": "2zotH3MtnUKoMoMHGvVpwgBDGySb3FLdYfy2Gu6q2cycw94LBJH2oRnWxsEfEAM9tVZLPLNSa1Wbsuh5K7vTxLzm",
  "key9": "4ff55TAET3jdxDc3ZB7atDfT7DGKy8TZ8awx9R5Uebh722CJUzxBFAoe9pfCt3MjZ638ohoKSuadiB9PUUxSfmU3",
  "key10": "29GsZ1eAhRpHQDEPgiBUQYNPH221Hnxw4NMtCRcMYwuYcAu8xhXf6atbBsCYRBmPyJurGMU3JZRhKEFC7qWqMsEi",
  "key11": "29Ath4FVvYV5ts9DtdsC6csaBQqzb1fb4TTFzWSwjELFnAC6pvSCiPDLCA1pWnkx8rCdHmDNxyXe4vfLwGigQXg5",
  "key12": "3HQ55yJvE6B5mMF4Z6YWvegGAK6cMwNvDmNAPRaECKRsY1zeytKBq133pjrnzevgpCxeHPKfCrDRg6QoXauhUe5K",
  "key13": "2UXmKXbPjG6K3YpoV6stAtUJMHLyVuQ665epBgUoM8dBnq8pvuEm28vLuFFmDkexkpGrQHoWr4uv6VUyEUPzReTd",
  "key14": "4185ZsYy72FSbTYK1V4hVxVW7tK8oHtC3HfUqoYBJuwzcToc79E71SnePBcJskSvyGQZMajUfJ56Xn674t18DYaX",
  "key15": "2hZh8ug31bUdkwanEsaXbLjPZVk1s77BszGBos3kmsE64U7DbwoEuThRziUinVw8913KPfEgGX1LNhXJ75BD5PZq",
  "key16": "3oGvjmTjfpgt9Msef3vY4SGPViq98rnZzELTWF88MGDXZHUKBBNFUTxcbYAkQQwtF3aUiJJDmMG2dKPrUdJVNC8U",
  "key17": "qeA9dWGvWkXAiu37KggiMoVtdGWGkwGZFZfZJyyRdMxDARRpSueds2hCrxyBKC7wTsoAs4aRvrqfdgHAysgJtbh",
  "key18": "KrsiDm1xCSyJk39jMQ7b5f1jo5VSrLrsuULyU4GYvnQ8VmGCYBg2cR916fpaAbYU8eNrDBey2Q5nxCWvhYMwWaV",
  "key19": "21zJeR37YCBipgJ4FKZJdsHtBhPUFU45nPyVKQYy4DfLG8cgjCgJcfmwg5fm8ZxdZmXyATrscnEAdLjPJfjK9dhG",
  "key20": "4Ud6meaz5ciFd3dKJaNhDgHTriYcLuG969bwc8e7Q7WD7ZCPpyMtKpCXZdS4hypC66YE8wgQmuK9KEfuutnSYL13",
  "key21": "5KN6btrt1tMabSfNeF9PkWnYdjGupF1VgKNKhaoSveZgHoPSGDG9CXbMUj15LuKVbFML2UNhknghqVT5bBbdd7e6",
  "key22": "5GnS3UAZFwTNcmi9jk4aYj4kGayULnhqjFE9ZPtbfgDmZ4km257EHErMoEZqV7RbscUMCBT1WeYPLSh8EKNSYfFr",
  "key23": "3ZYNufWFPoPGVjdpxosudzGU3ZE7fG4xY4KV4srCLwcigVM1eyT74BdbTQ3Jpvn78LmbKeBHtW9B7a1rn9U6kWQx",
  "key24": "3ycyXaqQYRvCoDXUqjmc77REMP3dTLhKjeV5hyMBAtueUVgB3s41HFuRmTFBVFux6VFtaLagnFyzjdTY69n7Cgig",
  "key25": "5kfHzDesYjHbU8afJ1CBReSnWPbR9ZteCxUjBxmrTruQAs2runQeEnY2rwtyyyZaE5GhGa6HUZm7fwu3uCBkN3p1",
  "key26": "46htErRU1FznztD9ZyAphyn9ZCaLJjPaanHbbX5anAb56Fi5Cdaxmuzaiaquz2EGJx98UzCiyS6nSgQhbW1q4fjy",
  "key27": "5nAZriATf82yu6pGJgaWX4sJv7NVZ8RiLrvJXumvnbP35WTe5ZptK3TzynJPvJM827yentnkw1U4GboV5YkX28WT",
  "key28": "2KYeKRz76RKzWWVM1HenD4xvtWcHjvVAURWbs15zvdz1wMKHWncTWhdRTviMgwYTJaN5KPf2uXZsyrGA9LrwviC3",
  "key29": "3bAFrLPCNgyzff8fMrsu7PNfrXVKFxJhUnZJjYwMzHvEZb9dPGCbMXFx4kizMqoibi2CHzebX7nNji7z2qyxn1KM",
  "key30": "4BYEK3qXks7mK8aeanzVYHRLf8jJArYvVAz79EQjnoSHXXthJJohhtqKkQWrsPY63tT1PYGpHNstCeSaSCXbzTZr",
  "key31": "W35xYrjoA11kVSGBgjXhXALxiFzqxzLFT528s7MFS9KBcqRVNWJxvwnjmzF2M7yYjFFZjx5zCBp2vur9PpeGs46",
  "key32": "591uSziTfG5KXDKjyasridcCHo4wuF4oWZCTyMfAB2hLd8Qphmvx2dnmo8GtPa2aLCjgE5YNsnTskDdrmbA4tAW9",
  "key33": "TAVZFqfVJ3CW9Dex79kPhXXEx7KqX6g4RLj6uJxm1FQ9kLyPbi9kV5rHdYffFXxgEgQocbU573eCwVnzPNEwJYh",
  "key34": "5NgMdtcaYXUqvkY35QEscpFcbctg5kFihvMSzUK2joTRJLo7zZC9je5HtCJJ85BMe3bnpUhy1buvJ72jjmyeRoqh",
  "key35": "5ucGV9VwE3Et1cp67YkwPGCiABTzMkm2Qk1ANhL6YhnCVpDCJdPgub4GiEasYwX8SNsTPCfXSj59t6i1NHs2i2ub",
  "key36": "jJ9m1QpT778UHa9LbWVGuRMVj7sNZrHqqBLxDW67Jh4BpJK1gyZxnqfqpCm3AzHgqyBEDAVs44maRozg31wYdUg",
  "key37": "67VVNSDHy3RznEtbkjhXhYtq3JDPz9psiq1fQsBZZcVReufSrdoCi7Bv1mbDZVubJQZyVjLSdH3hT32cWKLQF6Wu"
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
