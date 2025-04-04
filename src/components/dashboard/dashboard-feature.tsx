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
    "2m3LX9tMbAQNnSAfZHQsMFUfpbM1rgkSjQKQHdLGNSdymfqXhHcSG7QtNzSXgj3TQUiajyM7HRgAv1omeS45Dw7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vQm3zjdbeGeB43MrZWUfG1ZGQQNhuPtfRwiSBFgnDJ9CPJ3m3fTs8jhPqLzQorqD1oYLmWSZYzkQRdNuRjbuNir",
  "key1": "5yoqMp38JSWgXtzggt3xnAZ5eATGtLix6XagxpmE9iUgeKoCXtX9JXC1syPKhpawNJXeV8FQGmNYRATzWdDirPLx",
  "key2": "PA1rjSwjoFLuymagpvoTJ6hiohHo7xjqcFXy16PPbEiETFybKsg2jpJ531uKudJpkqv8LiTK9Fnr6nnv4nwrwvQ",
  "key3": "3buAT8oND5Lruw9aXMMwq1zewtimeEBBo7eo2ayVxs1NVwJZ17DY5ETYTU9VW3gcgBiu44k6E4Wia1arZWCLBrEA",
  "key4": "2nWN5EmbMKVNiNfeYgj4f2qUeCrggWQu91xceNxvMGiNRQywMtbpWhSCfeWoGWb5bmRVKQoX5yqvgsvzQhAoXxqe",
  "key5": "4nzLboFznbf4LL2qJ9sPg5BBb8yBzprQtwVHDE6YY9uQXdPLWuY8TM9bqNvb4pXMNBi5uaj4xuUSyak2W4PAW2Ze",
  "key6": "2C9Lb44QuQ4Vx9GX5N5q6UJTkjQEz7DQxQqZKddYeYX6WGCY2z7bbU5qmhsBmKAAy4YqeJg8ZMdP1pXhEyxCf49w",
  "key7": "4dEEgwRqdmjc6QxybMHPMFMyQM4YmzzLcjuxrvVb6QuW7MEjjzggu77zrPmcJNx1hmZGKwJMs6ewfrZRkC1LwY2Z",
  "key8": "3XRFvCx52x6HVemo88pNJqRZgHz9DHCLLpPVXqZN7ZUqWuM2HsqmKqk5XvB91pniorjFeFvbZto1UQAe7qbSCAQd",
  "key9": "3hcjZq3SBKqDRz2PthpqKZG1GWBSwNGyLbvxNJxXNfs6wJrM7V6jvtWQFWLcPPHxBNPwDDcvJpAYgzHgF2e63P8m",
  "key10": "4Gp5KP51hXA34dyQCAFo6ZJ2n1EzBNrhbHRcC8Gyw7xTtmfLi8KrERsgGzUBme3bWdHif4CwyEdc3um7cnAksThE",
  "key11": "5PbbeeGXZjWb74DhLA8PTDXZERbpMaTCsGadKYaEEYX38YykTb2t84vJk564TYDTKKSWaHwQ4dNdXqnjBXcPaKfZ",
  "key12": "KbuR2Q9Hbxseup73eSne1qxJZ3QB58MdiXsZxJ9BuTWXRnJcAarcgRbsMXLiXhh45NouocvAneS4RECPFcyPq5D",
  "key13": "2GqcxCVE9w1MqVoYFuGL3B25stMsJa42dS6h3TgRGoQhW5LGWX1oeWWhwG6xKKvyossrRf41twHBY6oeP3bUbDwE",
  "key14": "5j86qc3bdYGw4NREM614dfVsqjKodN3Qsoe5o1baqAkepHxMafJy6LQCx64zoiodKNgnUHcoDn4xSwjsXmSV3hwE",
  "key15": "V1ZAiUxjRaHftddJhLvoByNEdobwaoiQdUcF5VrqiRjHSWXyqBhK9WTk82bKY1NkyB8ZnfCjfHLqCDwV3Xi87Bk",
  "key16": "48yRQe2vnau3tt6oSaeAkJttaR1da8CHNR99AGRbqfmupqJ6HNkHfP2qEE1s2oNvR8y5Z7HoFiiRrbGBp1XzGdcx",
  "key17": "43EBLFQJDoW89RRZbTEYzQvdpkLfpictBoCa5r2p6BmcRN1jjvosUdGbm4vfkfV1wG6tiLntTDQ82i6HpoeUKLQy",
  "key18": "2ZQSTvKFhAWCk8PDBsYoFZh1MHZ8mbPES7KKEqTKQBUX4a5svZBu5Jtd6FsdPq7WUpcPBjZcmRSs4HcLuns5X4su",
  "key19": "51hNASkFxbEzMoKXqbDb11QeMmHCp6cHPpxBGxNswbG4nmtvpQ2rKJwR5nXoJvubEmwTtBKXqfQgYiBkyfKc1JFJ",
  "key20": "LncP3ofqvfABCzA8iWeTA47EPKePZPxmHdLZyv4C5395K9eijcPKS3gyh2qwan7c4pMjFQ4CzPqBWxsistQKPGp",
  "key21": "s2dz99F5smqDjHFBhmbHvRPHG4rPxEPswUAPKtdMqogjko8sj4CFnEJVuez2Ls6r9umcHBJRzkgEeJ7qWVAytzV",
  "key22": "4Xskk4wYBBVW5isiWRRW1U8X594UTGSrtrCKQnauL5wyTzorqMFCJSWxoPnTJAcaKJR3v3L4JJLs4jZ17Aoi2QjP",
  "key23": "DaQMVCeeb1Wza4YAcJT5EE2kBRxK8H9mCACdoEmm1iyBXjvEDvP1kSyAwwD7osaGkNCwRj7YHzdvTV458QREpZi",
  "key24": "y7KLe9kDf2cRGQ61eZtHGKdxFCwJFriHAWryczc6Gt9J2GYifz1zHBqvUXgGFb9FFPvcao8NqstQmCLdU2GGUkJ",
  "key25": "eaLGN36D2aHVTV2AV1bpgZ8HUzUAS7d8ZgzTj3ceacrsTdcU3Jy7LnKHfMrqk3SewqdCYnNZNGeR3V9gvweii4k",
  "key26": "5Tvn9L5vtevdvqTwYzZdcDZFUQGBssk7td5RpxqCdNeUfsYRVqYhL3PUzvNscXmpWfpeKEejok3ammHaECVtXYrQ",
  "key27": "3mSys8fwmuCJsRCJGHA62Ypf9jLnzmaYKGQKbc4SR9fNEricpmkN7HRuCa3w4i1eYKpcN1UcESCoKt2eyNnfan2C",
  "key28": "3wLXwizH9gJkTovA4AUpz74i6UbqCj6biLMfwS7iByWVmrRyhTr55jmKeEJeid2B77X1hfUensyiWKCab4NoxRbh",
  "key29": "4JZDpi1CURLrFAZs6mdV6NgvkrBajrA4P6HihAx3EifiwEhrX3FHBpsBQoMRicXwjgGECHqefCakvoVN7oFush5x",
  "key30": "5NKMVqo6Hk19UVi7xaExGR2w3Yvjo5QKHzkPwWAtvsqpJq5e6yPuLaXCCbcn8gVzshpdf9hPfwaa3NfMHoUmC7vq",
  "key31": "3rB8UjX3Hg6v5pBhfTvCFfm5BaS3qdJgcfDL8ViqaLgBSpfTEULXj1wYVY249fgUKZAKaiHLtoZLfBqrqNWpnym8",
  "key32": "ZTrVVhBbPieF4sv39w9qrV8fqULWPZ2asMH19E7fRpm2NSHNEVQw2kSzw9phPQYy6MSCn9c7HfzoFeyiFhxVkRW",
  "key33": "2PvTiYsGAaRzANyBVVsvMS1Kg8d89hohAbLidFUBLPqZi4ugniNiDzexnXXZMGmhx4EDvtgHYybtqSkmFJfHQdDU",
  "key34": "bCo4Y2NQVyJpzJtYzAe4ZfcoZBpSo1bAfWkxoPR1SDtLG5t49FRgAZiPWstcH8jDjwWX22C1vePCGq9tLDiFcps",
  "key35": "4d1mZubpmPwwoDXD87LMV1zD6a3ZvcgA66Gc5zLnCDcGtCLc97MVYTF2w7bgTio2YpgUh4LqRCVM8ZjGe24JJKnD",
  "key36": "q6TeenZd6jc5QxVPdXWFv3z4Arw1wpPHe9J75iKNYi1NcnXdtTFUXSbQDV4QWMEvegeZ5ZZtX5cQDPWzRTaV6VW",
  "key37": "3Na5QPwgrMAvLD4yXT7nhRisLX666qkoZakBfsbjnGUs6wCKb6bjsnjDW3J256p31dvU75JxFbK2aoT5tM5zZQwA",
  "key38": "2YjFcUBeZRKUpid59oACqApXt7MkJAuRwwSDveTkXpi9knn5Js8G6y6J2wLiX4zgVFLVTb2JvqHcFqrAXthDUVMu"
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
