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
    "348NkJ6jFSZKyaToZuWJ9YzNN9SXk48yD1RDQbWXorQ5n8ze2w6BoHF84hXuVisNfkdLe9e6R43D3ionBzixZmi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuopK33qKwv3QmrXc9yviXDi1yMY8hUqtAj3g54kkTQM9B8ZzuANDAjb3h9UkW6Cct4J5SgpTKB4cQzgLEbfuoQ",
  "key1": "2igcf6eqAJo83sWdhRh8zFq1k2RYs8CqmAHv8AM8yZzAXJabzSujrjVyLk6rQCwYy91mKwKyJVhThvn17YabnKMR",
  "key2": "34Re9uDXVrXvHn1rgdz2wi5gNQQvvBfigd9nL7Hy9fXr2voAQ4QQWDaeQPf8mbzcz8dyKrd2rUzWDj7jbsfzv8j9",
  "key3": "3uadj3cr78v9FR2RYtUyMF3BbL6FsiwBUcjJpiyqHH3TvMYS7pcAgFLNa5BvPC5Wifaw6s88Bzx6qdJpMnadstB2",
  "key4": "4mxLgemyR5Wrf7tzdYqva4NEiu1sBZKeq54jK7SmQ827t2bFuvaR64SJr9qnEwwK1387fJVN7qCwaJUe5j3zu7Kz",
  "key5": "4UhHVidUtsQGmVTyAC3CJdCP4VmaLBPJtbvMwenSgau9iM4pVoEZ8zMj9sY148ezCRwcnDyMixTrbMJF7FpvLBEc",
  "key6": "5MDAA4eVHNg8r8rsYDCUhy2XcGcegyJ9CH9QduBTRreXMvWLYvBTiRGAV1QH6LiRk88m7VBwhHgXGJDZCjZTPpD",
  "key7": "5nVCHHf9die7g1YfHzuvwxGEDhj2nAMfuyJbxmWwawV9n4SJoLFZTZRN3jYLv2tsyAJBt8mu6PJrdRKXMd9pkq9Q",
  "key8": "5vSiv2zusL8CcJaYJbWxoFanUmmuBhTPNAaArQuyUDjiyHBoVfupvG3ovczUgP2v119mGc2ESN8RtvRZBF18YwSn",
  "key9": "2NxYjRproDyGx6dRU8CRRwVFvw61hRzNKrR3i6k8E3RWZPkKEzcpSPSiethNGpFB5btJjt2kbio8nnpoUnd2RgrU",
  "key10": "5ihDApUKzcxH5QQ71pVXBmsTGD9mgFjsg4QxMZ2qpt1FxkbZ8Wx6sujtebrTsuLr7n65Ngqsaap8AVbw32xduwiQ",
  "key11": "ZWYeWjmRqjPxn25omPvCPv3nY8QmaLA3kqKQiuvcpCbmN9qnqvCk23pjsbD86HB7iB7QwhbxwW6tpeLNNf1CQp6",
  "key12": "Ks3xsnsJvtW2gE9ijetqbPfQMcE79Gbbp6A9F8nvqnvwqHkRFD7LgURji6JfCgCkiK4smx45PFiRkTvfnRjgAzX",
  "key13": "2PGxAP7yfzqfVjbCRPSJJJatUpeAxD2MQ9CBRUbr4mS7HNHTk3VvWciLCSkZuHP5HWBhygkSoZ8eUfrazy8wwWZi",
  "key14": "cGqkpp7LnaUgremXEzeJPRxWibWAnf4PJUKitETcFUUtFoPn9fs2g2PPobiRhGHDdg2as4AzUGNGkDHJLEzqR6G",
  "key15": "37hdk4YaXXsx5bZsYcWWJBaXoBt4yg6ya5npW7Qf8ydSePAyxE82hCMDnpQ1BquQAmDQ2p5BXm6CakDzAKgpbG9o",
  "key16": "2xNJ5dqyrHjqm1k2kY6vZgJdwmUWZdJCTQVv7uBMruBgSJef7BMQ7k5TzhUoHNvJFvcksKCXTbF68rYbYziZs6CY",
  "key17": "4Q4ea2SNFuyPLi3QPKjD7z3oxAtpTnLDrtHjmxEeiWmrWVy9tyVFYW5DpJJ6FfaCmL4RakumjyeZWj3PbZmsHTqx",
  "key18": "5GKVDaC88temYxhMiUSz2TBqoUN77KoG2JC9Udcv5CA744CDN8CNqmhoxkvQHxwZ3KMSpV61DT9WN1YKJFJd1hqX",
  "key19": "5RRtiSG5Xs4NuiEQNU8vpg4ZuRd2nKGcPQtZ1qocYxN5Djvpp2yfswZxJjEHaVG6nfT5NtBVZRSdCj1ELyMnqfEJ",
  "key20": "56LzVw2gSey11Cc2cvpisKQ4hEKZyUtD7KKjgDtV2RBTPobtWJ6xu8o2yzVeSS37PfhLNoKDTNnQcx7CnutYK9rq",
  "key21": "5hptv7MFNBq34MySAgrc6YZQ1A5mYSvs5EQs8zkbpGG4PRkszqGKXvar4noWzVF18hE2twxo69Hpey1eAdGAYDx6",
  "key22": "Foj87TWxHk6WDLFky2HiTwGhfK3xBN4W3p5gQPtA6mdhinU14KQYEux1DJXzVG3kdnwz6Q6FV8tPS6fdw43pAFS",
  "key23": "446UtkbvzU2j6ikCaawGZYDfNRL8tCsybieXrWEPhxJT4kYvqMn1uBqxgZqYn5diBGza2ZgLPggzBxtEaLcKoiHQ",
  "key24": "5qzX64c2VWYXs9kTWUJFGnbYuEb5nkgeQYRj2kSCUSzw9ZoJMoZLoRG3hku3ufSVQ6NrYfkZmC9RGrfsmGDh2uxt",
  "key25": "3N73JuuGrYKtbM79QXenAK8NYjRA5LSB95qEntfyxE1B8KES1nhto3ErRByV2Xc4GjJyQvSonuJ8BGrD9dhAwYoV",
  "key26": "3QDoMvWrzaN97YfHrXwrGe6okpPjMnPugAWC75WxtsPRfH8iJg2JvB7PAD8C2MPJrwGpsWy7zJZNHML9v7wJCxou",
  "key27": "44GrdnBXmZG8uYkgiTiyzrnaKiPgBfnoUX4h8T9EZVMVHvHdnwng8QGCagGjKkzrzGkU8bXVED9ZbYTBEZmAiC8t",
  "key28": "27ydTByA1ZeKVym7cHWXGVNmYTcymv8mxH3HNfhrgHTJ5eg7svG38n5U19TPMWiM258GhtfEGxXGRFj3xeGnubvk",
  "key29": "9geHQHvkRj4ta8wQhEXNHrQ71YX9zyBCBt6ZbB8tNugs7tuQ8FC5KnccnVGzNUGGQRub4PAvzcyutfi5i23zQJn",
  "key30": "4yQZJaDpt1Fj9d1RPNCfkZx9DRmUbpxEi1Wh9u5eSf4qZVvDwnGC1m1DqxawxMzQMudAo496Mp1P741CMfPwgQzj",
  "key31": "2iX4m93Rdphy6tcMEv3N7xcdTCaLGMphz2F33yrifWnktVYpWUCwJb3NGAPRNF15o9jNZTpoUYkc7ifsLZKn4yjN",
  "key32": "2EkYfvnYb5GYBQ8rZjVnoDGYhyRoB8XLF4hnRSW2rFgbqDoHJVFeTxdtNL7aYM2gjZ1cAdSxMLBjxmNNtkkL7AJH",
  "key33": "3YFLQ3fK14xnFebxadNj1r5tpWtJgNkCaqiUCHz8zWYeiEmia4qZ7YMM4eg19dWKgHCqjUSqXLYUZ4fDiAgFpkXb",
  "key34": "24WNaK4xRLyz9LnFnwGzoRQ3UFTLD8SSBukuAT2hDqZDkcecGF8Ro7EdNfFcQvnc1hf5MSeerQnb8h9ZhmCg6puP",
  "key35": "4HiaidT2YbNXNEhyLuVKRKoisiBkRnFWKC1VkkMuSWsk88S1SxzMNMwmnua5Gf3fLUt4K9MTQj8rbnFrtqgkiAUy",
  "key36": "612sdAYtgpoXovfDhiWoowhztPMHRm7YrdAx77dJtWPwhk16v2mtTwDSMWXxYz4FvUpCRWZZ8Wxoarx3wE72unoo"
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
