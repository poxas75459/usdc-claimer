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
    "2RJdH2ebQPNy8dVJr9Co8VgbJ7di98EnQ3EPA7vZLBE8EAaFQaD8eHXiKRwQuU4giaVFFcxSiw6NjaNb2pdhk1cL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibRLXG6Py4xi2HD7ZrGxn4WCZ1zdTvYsNKY3K4Gxrszr8RmevMGF4L2LJS5hcNn28yNGhGGyJsLJUpkYHGjnXDZ",
  "key1": "5js7MMKRU8FyNdMCuWTvcQWhpT3Rn2sd3cJ71XqQtGztsDnvLAeHqb8Uqq1rvjGqtcrBzMgcVwcsX7JM96hfMzmy",
  "key2": "JQqJCzksvMr1EfziLXjp3aHGc1HX8UGfnWx4W4R8F41Vav2KwHkDPappVgRvoUPDLBdufw7MqfnDgtZHRLkMJ8y",
  "key3": "3jKjUrjj7FWkGzCVwAFaHe1XDN1awwwYtDURCzEnVZStrJiq5zev9kkpikxCqexruEDtqrSH15cW3tbC8Zj8KfmY",
  "key4": "5UkXi5YFJTTcgeTN5cbn4Zr5e63obYkdfQh7CGrdN9y1U75Em6pkUEuqKrP5bHJUkenvUR2gzJVxhkHpEqmtGAhD",
  "key5": "3Ah7FF54Jm8a9D4kXyzzaUXshHH83BNd9TbjeDvQUqtUAZFccVkgUZFEa2xi4VAXJVJy886Ru4zQ47DXwb9ARfw3",
  "key6": "2Ns4RnRB426FKysZ6pXQFPjW8giVGrTa1oshCPoBWubVsZqYFiFTxqw3kvmnUwTdBMURjJiwAsFFSPyCMEhNxkuE",
  "key7": "5UE9jKTX83MbpT48hYvtMA2rMHJzyXW2Q1sb46tuP8XnyPVLkQtutKUpjpNFAcdduwLQk37gnZqk57F1qt5wy8VB",
  "key8": "4kobDq1mR8goEJPTGCJhMQjNuN9HhoHeYKJxZxort8HUxSWv3vBzLp8XpBAj7ybRnBKxJ25sXBDe5hNkNtngUriT",
  "key9": "j6Y3jxCFUEk49QfM7HuwuBFN4UwEKuobY587yLSLx4DbHPmuhidmxK9SkjuNFrbeynF6hJ9oCVoD2XXqaFhcMxF",
  "key10": "3F5fk2YvHvVn3KbGoZNAyhqVPkkPTpcTmkceNX6YPxNDGqwHFZqQpWNqam9rKYCaxQiXfGknv45mJ8kyCvK2KE6s",
  "key11": "2D4Z1Djp9xFsq3jfiK86q7trawbPsyLCTsqseo9y3YAVFNWZ2NAsTwXvKJ8LyMMnCTKSXpJe9N9iX1GaRq8Jxsra",
  "key12": "Xwj5ugzADzZzzM3iXfsgtHc3cyykUYsL8JngZHPtaFPuXjt7LZbobAXtLybHuJcdnaW3MUP6iPFgwQsN4U1gDxU",
  "key13": "354RXNrkuWmHnaToVbtwRp5Hm62HuifUBg2vgCxRKYabv6TfGGBtLwZVqCR1JYy2bhCRYZod7mhDfJWsqnUqWfZ1",
  "key14": "2BKqyV7h18acXaikxeTezdF9TTarEGBcXTLADChbeKkAzE9SvZ55U3uiHiwKXVm8LBG4AtAYbhSmkvGSjmN9vURy",
  "key15": "5SEzGu53oswj2eTmWtoHZJk3XFpvWUPD2rc7Bv2JmNQkRXkoDP2yn1mxD5ZpzPtWdv3tXFEbdziwtSkNkchYrAMS",
  "key16": "2GK1nahigSAR8HVeBxksFtP2KxNP6BfBFpM4VE3urDoAbdMARGP59eSk6PBYrUuEB5b5rUVTmyVmRCs1UR1gbrkd",
  "key17": "3kEaDEZjgFC3FDJfSewxeP1u7iRF7CY37FuNiEhkHD9PtQMuStVF6qEHo6Ss6fYPrvAr23ZvhRAftbCvMgBvvHvQ",
  "key18": "5xeYXKkUcqtPXQqeJNqedHp7443hREpcqiq6uYVH9GJfVwgLP8Yp2611ouXPzLStA6qmfErX7hMjjE5ZtbgKUQh5",
  "key19": "2hdbYXuz764qg85Bf7ewDGdKgmmsxssFLPVybw3i7Z3dXjXUrVe5CaKL2LUHz6MQ6LxhnsGKbWjDGr5ahDC6TApY",
  "key20": "sNFfdHm4XSUdp6bQGuBnR9r7Pry6jK7ELtjVukVrXvJGprEqf34v9f4zrne1vn495dBfVfmiePUmRFNWXrKWBSD",
  "key21": "2a9aUeq57FSzRyUDNE5PtZrZWKCm9UGjRgcLthwCGVaGmoQ23tdJXAVqDsjS5sZGRY86u5fgQsgzirCxmH9PcpoL",
  "key22": "3dWiEktz4yzggm29XQfyGV5cd8cHvgQWH3uVCisMieCXv4jHFwEG36G5AdeggmRqcQenvFKtfofDK6sU7Do7Nbag",
  "key23": "5S9u1Q1pV49kQNhBfuEVj78bfu9MRbucYf6tKn8x7rgk27B7LQRZzy494mssDhxqy4xT9GGmx5hgcawUDWAnb37d",
  "key24": "2ZYjVPqwz6i72eRmhwjZF12m1Mb8y1qqrxdqFQeYFmirPgSPyAtBeWUw4h4Ydho9UXMJ9iDBx7B68tTYfe2eqBvt",
  "key25": "3dEW5h3K4S6372sQ6Aga6e2kLNh7QYVJ93k9UrWF3TdW69V8F59CjXft1M4X7WzDg6tEJgHNJUA95specMdpboDf",
  "key26": "2cZzkddvewL3ShnmjbhfWpQgeCX3wjYjo7uAAG82UaMPhfJSB7DRTbTfoCZgvccTExxAPaTkC8VAmbfDGaTRspJu",
  "key27": "4qJAEKZEJYdnky6dK2BYXEb1PLe4zY2bN7CchxjyzGE3LHTYTAV352GuWJL3LQaq4Yi98HBK1txHHkso87K4ouyt",
  "key28": "2KBLQho8qZMyDeptFVodRCA4bRuvByrWWXMiZwU6qDBjE4ekDogULBvkYpDPTefZFLh7MGcP5dfCeDKT52aGTuog",
  "key29": "3DD7o7B25A2xvbEjmLuCjWSz4SK7J6ZrcMN73JVu1SsQMnznFQZwcHA2C7p9obPhNJ6JM6py5J2qMcjCveYw1Tbb",
  "key30": "sRPKyDJpSKTassN4nJVqEtZeBzhmbGy3ndqDwY4F6HGdCBMoXwKjs2vdrtUXaL6xEut1vjdvcZDU48W8SvYb1Yz",
  "key31": "4qK9DaUXEdotUtKgTBchhDX6oif5B68uFH4MLyZejdWX6t2Atms2sEwELEUc2ELshYqdBw5vGb7c4tujaD96mDuW",
  "key32": "42y1c54teaAqKbD5cbHVTsbxpTV91bxLd1a5oBusVfkpu6xs1kzEmWfVX3evPD1pwNW7PsGYwqrSHBHZBqDKAi71",
  "key33": "2PX5XYx6LNTtKYVFQHJcoRq5J6nyTuo4Jf7VUrzLvFQGdekHaaqtMDvd8FGDVFaPj6hpXmzjs64Y8gBN3yu2gAmh",
  "key34": "3av3Qug59KxLetSdxhj37595ZqdCGxk6SH55qZNUGo7N3stYpWg13exZYfm9fezWVJMUDkn9ePfarvizpxGsUBd1",
  "key35": "QSTc2bP86nRo6wYuevy81CMhFLgQTEdqrjDc2KpZSi9QfHhqaRnKs5764xhwT6B4iaSZcYoUpWBptYfEJgq8TzK"
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
