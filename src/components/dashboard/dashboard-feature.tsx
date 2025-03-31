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
    "3jSjGz6qYab23xdzjcGzejLsp38qqNfi46YDZjCgv9Cch2po3v4AmkWxvGpqSaKHFQARcfpTKnENhoffNbD9qqdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gv1h8uXzAGuixQpTEotA63QnT4QZyBAEkhigurDzqpnmQxmJnNk12FnVaaMKUVwqBLvNXtjVvufrK7z79Pe9Tt3",
  "key1": "3H4o5xy5yDVo5cH5RwKzN5zPtdaziqvk2YuR7VJaDf1PHfbbbAQK8SLjVKaZWc2fUbjoCQuWbDpeEU1tDKvekfMW",
  "key2": "2d23ZxG48v5sSymEbmMdCs5qE5MFndMANbFqoWwPNGfrn49teTWo5gTwtNAQJY33GwbMWvmP8tBp1orhqxmr33MX",
  "key3": "67MkAG1BgtTVvCrNuSkNFXGoviQvWWoasLRDzn1YLoQ12QcJEKFXU3trkwmrZGmSLiGb6WnRwbDTzPDLrXamTcvk",
  "key4": "4QHoqpU1CJqh5KyKxwofdtnEZzwM998PcZzYhHW8pkKSQvQhhGBNGw3qVbcinYqkVDEQpSLe2u23p4HFzoazckfZ",
  "key5": "2QHsdkhqZzpJxtMyMUz4BL2BditYP7zvXJ5pCipz4NrcnMGUTvmXkQComTYHynhSNWFRmu7T7L58ToHneewrWeKB",
  "key6": "3UcCexxBMV1TBBfYsCKSAevoQKXAW7C897DPFwkcMeYH5ZMrQ6ne3HAzK5kKV2LmucxuwAFpGSVzf4wKwAogYswN",
  "key7": "2J7pNayHCHK5ZTQNE4p4BgB15gJyEDzU4oFCNjSV5tzhmTKdDviEGTA6aGz9gPaQJyBgHQZLbUF89cCWTwZjrP8Y",
  "key8": "65QdTbNo89rLA3jsfPM14f7gfehvVkhocD58HHWBar9xT4SZdMmSuhiuqPA6bqGmtSpJJKjJ8ygQX4Aov6JUQd7z",
  "key9": "TJ9K1S83ZmiDxfuexdgwSLnxzRXzKXySnYMdhC6U3tbpxe4vksBgsUVQt8FaBkR1bPpqevZWm7hDyZm6i9BLx1s",
  "key10": "55WpL4ZDV8tL3ZUeDekzqYU2fPumvGP1F1LCgUeECgDHB9hpNaRnt6CALvQrphM3bxTsUJikxMABVsK2dg32sxt3",
  "key11": "5jX4RG69mEDg6VHyCcnXJvRSa82SM5N1vBEP1p8YtBRvYGbU27SzPFXHgcA9MbzTyGhsRX65e7JRGZDFAhzX5caT",
  "key12": "2RVCo9aUpEFPJ4rhfdqMKMYKsSstBX8yHKDbRB49nvhbQorF2MUXidPCqwHxEgo9APMihHUvWmoPxoKpuFZ8nRix",
  "key13": "3D9sjH1ti5Y4BgNz1xYE6VPLSjXLh8kWxJkivaw6mpftqYnYZAu8woDN9BwL97Aw7CDuJgv74rMM57toktT4z9FD",
  "key14": "2Rj7xxvd15pAyaYrbxTXPxrcwAFsJgygBgCqFjvDHCnge7wMk67Hmotunf3hygBVKtrCqj1vcqNwdHjFuD3jvT9q",
  "key15": "5gpLWa2YLLwG8wwBQQ1MoGjHNQB5pagP1VXDQWaHHEZVB2jiCgZc7AgbNJtfbqoTFLhh5i7rQvd2jtBM8zi4quaJ",
  "key16": "2K7udqW44XrY5hcWMaWg4uFj7hBz2zxLzmSC5pZEqT1ATwbnGCRBY3weV1Yuwc7ipeVKsMraTshhtQk3nGhGRHnu",
  "key17": "3ngmhgYjRjZEmG6oA5E6AWJxxvMbDLb68FptPSJHF4wgh59jBJdWdvWiqoocYgjnr3k2CUb2G9PnN1oZi4zrqbWZ",
  "key18": "5KJAHNTgckYNhUreNLiKuqvcZw4gM2EYASaB6wtf3n9iFL8KEAYXZBeEbs6BWiLnXx8qYnAN5Vtx9cdiDqRTp1nd",
  "key19": "4EhF2EkrXrh84sspZMsvZy3v3sSPbhsY7P6VZ98Wp2NUfNWV8BggkAqvLTAmW6K3qSVehqGe9ws4SXMYGaGuta3w",
  "key20": "31gzzFiTEPnLEkyYiHZ4ZnV7z4h1LP27GsRWQmEmA5UWHH8kZCPsTUbRBSywfoaUsWXRyccXCPKYK15zFTgihSDT",
  "key21": "668r8nrkMSpgBhFESm3Lb2QVZSvw51Qoxm8tp85gHZCd6Xqoo4vaWpb45jQC27GGYfNUfLjPg4Lq9udWhi9AGrq2",
  "key22": "PptqHbsdekAcm11JDTG4KKDUdXQgXURsLnCzLQbDEor3Md5WpBNJowQonTv8dQT71iFFb7HqmSw4danBP24wEFf",
  "key23": "4uYohsg44a8uQG9i6d7ELWmUnyonijBAG1ZK9yiWUM7FG1nKqUiJ12k1zwzYg5Xi3KMEP6M95FgDbLmUsPGyHEn1",
  "key24": "5HYo7sTGDQpMfzP3RZPgx8uaUhkuFStJQYCWPRJ2N6JLi1ZaHJK1QuwrxhsbEKSeMrkpDBh4v5DpMuWT3ZDC9o1q",
  "key25": "2T4GX33pt7DbnGHkdJ7JaoZAtMpmTCjYm9iF6yPaxNRiNnLpWMq1LB3biAHJD9k5hYfPrt7ECK4csNnZY7Cbdctp",
  "key26": "5nEqyfdHmweXw3MREWgVoT6ujLwRnexrj5xLdKYAt2yxYWLMHzy8ojvJvWmHU3VChjk31TK89Ca2rF9TzrXYTdmv",
  "key27": "2hi48iK8DmH35uGh56w7se62DyJdNzb27XQGjgH9YeN5VYtkS7XMpoh2P7xtdUWwYQNpZRPq6JviPsHnxg3CKdTj",
  "key28": "4RyHc7MxkzV5i8non2Evnv8HVYgnmQWgiN3NVGZ7d1PePDpzbxo6uFXCaGcxiGWS9W5qJGM62vAnJkFpRKejfitY",
  "key29": "5odJgTHPxh6H65UZiJiWsTJ24DKN6ENxPV7JpJjK4eTpWfU7qWtexSv2EGwaKoTCdjUdH4rGHSsfUe6xfcAwmZBc",
  "key30": "PHi9v5DQby6CagZ7uQMj2L5UKfRRXgpoZw4KS9adxsLwhtLsq8vvfgwQixgdtJdycfdEMmgk5pFEv5NkfQ7B1wC",
  "key31": "51tH8N79FwhuXH3Uf5c4zwquMmcxqsnJizDXgCEm2enn4iVbJF2YMfVX1AMDXvsUMbXpc7ddTXSo5bNSdRiRqwa9",
  "key32": "4wP3q2Ae7egZWAzuVoyuaC4wXydvv1VbXZWqbrdJYa3vAM7MxHqqXzxk8b3eK5Pv5nc9tuNxnYMGxQvJw9sgC4zi",
  "key33": "DPFpPxVs1bAjatg5qWT6t9VCtFwS7YiAXr7vBSNSiFX9VaZDz1bqPJ8qQJxxCFuAcCHpn7MfciV3VwzBjvLVz73",
  "key34": "4ppdYU6QB2bdsKwZGDBa8QiGUMRZadam5BaaGH1wAYSpd8KhCVuzvci6a9DavUfisX6RnP2u1szsbi1Amdb7DvVe",
  "key35": "4ZK3rxukwB8QECdwxTb6hHqYHifgPpfFZvXfYdBznr7i3KYeAhRbcRedXQAirhqrVcgWfgddgWQVxbXWdd7HgT5d",
  "key36": "2gTvdBYDEsaVW58AzfMjcFEGFssexr8LWpyfZsaFMzEHk1RU6zQm9YuzrBXTsBvALer3KWWBKLhc7FkMAi9rAQoq",
  "key37": "oz5q72mxgusfgUKwxmRVkuCNUF44mLKkwhcnXzet6qcNgeoDF7S1PwAVeqN98nFuqQP76iW1jskfpww3pCiJrp6",
  "key38": "pXyMF94LtBZJQ5WMBiT54A9AytGi1G2SJZ79MJt4RTqUCwgFm7anH7s6e1dmhxVJACBgEe3SscVbNfht2ivSgWt"
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
