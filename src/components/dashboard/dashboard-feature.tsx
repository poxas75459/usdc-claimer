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
    "o1exmJV5tHEsTrUGJSZ9AUhuEqGCXLYeLgmmveLD3mGQuwkxAxcfvv2DrSWrYyvHFFraCkWPrMHc7e4dS5H7WhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xKNkXuLhZH98YTKHYexNt4SkH1kZrxkPcWsjNEfX9229A4xVrswui1ZhJF2ErCaFCmypYHvCA9btEDtcRcR7Zzx",
  "key1": "4ker3y2SyMRZkL5cwZmkYAbeu8DZitTcRmfw6hCJYCX42PBSmQyx22a68NvhkiHfrhPwb62sNB37mWftZZBaXPNF",
  "key2": "437c5CafbNk5UNjDSsFJMpQHkwkBJt3Q2x9AhH6zw7vWmhbLDS2ig5uQ7vgiF93P35Vrugn8aEp9AkkmLsuKjn7A",
  "key3": "3Cwj3AyNKJ4Mw6vFDaeuH64a7tn8rBQiJR5qS5whDNBi43KgALofgejavrPk4ga8i8zHoHsWL26VAejyZ6gFDsfU",
  "key4": "642CAQwA16cKaTpsxFuKSf1Yk2iVh8wucSkLSQbbyCMGVvN8a81mmNChhD57d1YYdVpdDERaJDCmdmdvnyxSTqz",
  "key5": "49qZyTmqaAKedpCgJnW9d3EckrdE9JZjc7cynVinAuTgbwCocUCJK8Kd9MiE4m8noTrHgFetHDp8yMkmD7PiANdk",
  "key6": "5LgCNRj6MAVgGz1Dh6dzAMRU7mX544NEmd3T8vEp17yGnSjJPhBFSoi1764U2exhRKUdbGjNCUQW7NHoqyns43sD",
  "key7": "Zkzr2UqRDAAssq3fHxvHQHFCrYEmidhiuB6Ze4wUhpQ5DyPBsAJDt9J1EUAD6YevgweuASQnBbrphuY1aBYPb53",
  "key8": "3HYP1WRgzPtdSX1dyUKnThMz12eoFRNn73AKNrYoGhWq9t7JmmqnGPevULGvetN8Y4RoKrKAPEch8LB3tKyQLdTt",
  "key9": "5seBUkHXYaodcKsjSrSN29ddEVU8dxLsqsY5iUxDG9A7ggRv3vkCWjNU5vPEW3nGDkAnE4mED19nBogPHAHXqpFn",
  "key10": "62WnQfh14BhxSdLwpXZKNxRTBPqPopJetahx5eQPLsaQbXWgrWMZkZqv1FQr16Z4XrSYcFbWVzopbXmaF6gkpf7P",
  "key11": "2KcYdg5PwkM12N9MCo9tkhJNqDS2fHpiFMFC91E4PezNp6ZKJy5BfGtY897aRDtwtZgDkzdRctL4t3xqGQg7zVft",
  "key12": "5xkiy2ZxwRrEsQZw3gH89YMR2ykSxazAwT5jKC8BFsVSUC41NcsYjsnof5nkM8Cj5hXS7cYNiaU2zCkHdFaGKRuZ",
  "key13": "4EkPPgFg9KXPs33xpgokLDT7r4ZRhzx46zGfmijDtJS6qHjbJFHq1ggbiihTz8AsDNR6144FJTeqWThPEdyBY9yx",
  "key14": "4gNwukTKvGRycETvpRcsUdeNg2NYhQLoPe2KNDwDma9E6TfYFAvfdRJ3qSqokqk21csnYSzh6PQvoJFeghgMQwsz",
  "key15": "41ipXUsV5bRLdC2zpXRMnGHKSd9VcHHZtyPwMv22cfRQLC5EB8h4YnruSERcWWwkoLtMuZ5TCTF8ChC9YEm2VPAV",
  "key16": "5ucBeVHa1vebD7TtWvxvuhutnk9iMgWmp5g78JjKo3axWEeukp8p9WtX18ztJL1QWk4sXx2hcruvUwXvsU4TTHc2",
  "key17": "5nGkWxqakX2AxhKcAeCSS2pmFjsneGdDbdFBRUm9en2sBihD5ZYK3PWfxxWsYVXDcAmFMXjZ85NFydSBKzd3U3wa",
  "key18": "VftAhxjpHetDy8UoprapTuEtAzgGpwCndu6TvBGthpafiVc2g3Du2cGQ4bGH6gRcLxBoWz9MKmbzRNCRmRQhjG3",
  "key19": "5fFR43wmCUEURUQopctg4M2DLEJe5mqHPtsjsguqSJeDL42hhciuRAdJoDHdbbCG6cSaE57LMiUUDMFYNYpouWfc",
  "key20": "5RThhRJtvmUA8fiQUQyVRZhbpsC6VoB52SX1kcAC6dQopBfhMjxN3tWKFvQPBq2tNo6aonSecGmLmmx8izvP86y8",
  "key21": "25r1LJ4p9r9ZsU8Sa1Wed5aGwmWqkKAfnCufvQ53RKbKUTdcKgNssMTREXHddRvxwwHSAi44N871RGwovaamGaVC",
  "key22": "2u3pw7jWvmUhLSujj5Fk2yD23NJKcgd5mRiQ4SEXEPGWGADLYfNht9kcawUDBRS89ZJ5JK3UYYbZBmeALS5LGUtF",
  "key23": "3qs6PeWp2sCgZbVvPaAovSxQJEksbYhiFBkyk6NKC2HDmiB2HAoKPNuXCAuk3GeN7wLhgUirP2US8nLXnvbNNmn2",
  "key24": "sNSGqe6hgkJFbxuDyUiDJCNkSFZpJTM63uyruVsiTNVmigQtREBJKyGA9He5mnRSAHcSPEzwasqnKAcJDapTeAq",
  "key25": "bxRgP9woFkWKr39Y2zbhywvemCidj3F8jvAnnRDbqmTREkvgY3wCmAXSzp9ESSffGbJE1Hj5JVjquz71rjXQgbk",
  "key26": "5Fhd8jHpF93JaAobQrGMuff3dYsELYRwaXtksm6bhQre85WZLHf7jfCrz1vmx2Ter9UZ68xwkJBUkGT45KpPyFDT",
  "key27": "3D6sWPW4DDF5CEstiE4BziDP8yrhhETkPZc19G7AtKhqV22p5txNDvJXFwFnm3Jh2CVLWzL9tn9K6rYGWhen6Cqm",
  "key28": "4pZHaeNGaxMAz9tgS2S7cwL2co5LeEttVcuDwszPkfhhBpZ39yejLP2YFHVTrsv4GcSkNf4Xrr9ZKG2DeRo3pijn"
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
