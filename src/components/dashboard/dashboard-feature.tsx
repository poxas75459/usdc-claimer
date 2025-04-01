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
    "4khWxmJNY8LV6o82mdtXWpwXK4nYeZsnTz2ken8EFFMDhr9UX5iii7EALWrXH7JnrS5H7bzSNRMCVM8aXSabRGFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZeyseRNbuQBDHhdWdXs9UQA58ccCo6Emcv6aNvgf4p9mZmgmr6c3m2JUczURZxhooQ1XSV8gVY5virwjwAidja3",
  "key1": "3qKq5wvbUynbNpnYnxgNNwSo8PR45U9jNU4fkvP7JH6865HRosyCAVYTExoTaQ87Zuu2kM69M2npjcnHv4eopd8F",
  "key2": "2tHLH76nfHQHC1QeetDCguxXnfwEd3Mpap3gazM2BHoXKy98Kuz68ynCukv458Cny6fg9tisHuZBZ3Wnt6d12wDw",
  "key3": "3D5G3xEdNbGzKonfC98NwJcnB9DCUgVBq9JaMysxASsZnLnPngLC6gQ72d48Q7XpH85nU4bLiehdFGo2W1vJ62U7",
  "key4": "343uEkynSnvHZY8iCdrvbx8qs4iJuYceoCrGoVVsXSebJxj3m3ufoXvfwXtLutPW1WXegdbwM8z1vtugEKiG9XGc",
  "key5": "4kckTzVcWzEt8gmPByJtHm2pewwun4ZE9LoCAfiEYNatsidys3kd9zcGJZKUkWzasKRCASHW6JDNyTzv6R5rKYZq",
  "key6": "4sbDA3kqyVMKr4mdMH3bbdeZTNuvymT3tND2DcTSvv3Lo8kTEwstEjopDgxcGXdrntnMrRqVkmTgsrtzs4sqtPxv",
  "key7": "4VohSoDrqC5tDLHntRRbw1XNMJKU6wWfdqEfUoQUtJW7dfDvD9XaSc2GjkR1vWBr9gCpP3qinxa6GiMeBE6SRhsz",
  "key8": "nGtAQG4BrFyHuNx84BEfZ4uA2zHWrc7K1zyE3VZVrQUcRHj5yeFgWHxVW6BLJAsVugwuUaaeJ8bPwqv6eySdkgu",
  "key9": "36WpqHZoxKti6UL4jcP8p6wvAjcwtNdKvzWqqnt4FHSedLexaoYxk9LrgryWoEXqwD774Nek66JacSuMtvBuE4qH",
  "key10": "gdh4FnL1oMobcf3K5TtFAHJWCZynwXfoFQWo6Zota79z9zCYh6vnAmT7VkKdAR5sa36Y9nyiW8H1s5MLjv29EMG",
  "key11": "3pYnJCXNAAGPe59eHmzfM1v793sJ34cC9eznS2biCnjzBwjDu6xwd6P3EaVX8dxJLcWHym1xKHjyWqYoPKprJRTC",
  "key12": "CoNXpZPCjDqTa5A9zenoPuHYSxWnQK1tjpDxDBGb1xBMKmBZbCag7KimNusnoAkKkgFKgPj36fHszsE1CEygEUX",
  "key13": "4oBV83HkZsePWJuXGhTyY73aMhnzf4fykNmYYRNaj1KT9rgD61dx57nTP282KDHhTkAP5TUB4KVj3wjPn7vfDJAR",
  "key14": "3g5WjxK2Vu7XR15vzqyMLZGWbCgtG9gRisE6tSkymeWLK6tF34LaHpwT3wJidSebt2S3wWVUQQQ4Hdunrb7qoBwX",
  "key15": "3sYLJCzDutD2RuupbZEgBx87a18hHgiT2VCifN28EyzjbbvQqxL67wgzzu9RSbzDrm1PCmCeB8pc1hHMowJuZkPA",
  "key16": "4rPbw94uuXZBreBGBpkEBcdg17iY4PxCWFjh6ZXUCX6x2J5dFeY8NFcKeKN8iCE2g15yKrZrxq2xgkQtZz5YjugT",
  "key17": "eoxdWw5uWKEyyG5ERzVny117h6GGy2ykPBXqJbqqKKx2Azn7qDPg5tn9FtVDorjqrEzMKgztemZc2dqDKWTAwnc",
  "key18": "yjifYQUd8C4Qp8WWKSksrcicrXLSuUYivoxZMXngTgJVocAkbP1DHj7KfqJHoyrMS5AbfJCNwRYpdwLY79kiWkW",
  "key19": "4WyiYRTRm283v4XKjE28cRYjL1MFGFRHyFmuaLmzDinDsRkBq6XT7fipkrnMbDiuGnAG1dVS6iotffUaq1b5ULqH",
  "key20": "55GGdw9F5ZEN2okKeHjX2JqmynULeRmxuXjq6TXSFaki1iFTED7D4dJ9KvboaVszDq1WSnEkUoAZbPAe43BswfXY",
  "key21": "2PgCH8ddn2QL4tZQ6McFnxLPaHGwik3E1TaAtuW6aE3Eoy3o15HsND2JTDc6EKEWaMJHLVDGfVGCUKjLd3SubXvU",
  "key22": "2t1koKRjy1go6spKsYsEvnRTTJ1vorGqe18XBU5yyhuNXk1m73XZ35QuFQNdBsbL6sx9nzS5Tzdd9LQwCsV92Bj9",
  "key23": "3gEefwSenECmv4izbx2pyYHnj6D7tFLFxB2zjrgnoeyKra2ZNoj4ak2a1UYYarpQUMD14ycKhSxGwpnejaQjVmVg",
  "key24": "5hKd2it2Gzuz3sfncK32QRWpJTWZpgtzQtYyVJirEdxAwr8UcHbwgGwJZ4a3F5jpptFxVZ7hmHnDNJYRSpyV8TDm",
  "key25": "2FcKc7P158v1eRAY8u84cDZjqaZEWrj8hpmccvFsnSEAG2XGU5SXq1gkARSVu2Ss9LnYmYaphSSHK7ErbXMNRZFW",
  "key26": "P5y33WuNHTDMS2PuiQT5LgdYBGsMRGB7juCRrRZTVGvrjqaX4KN9pvbmtYKKhk4MctVskVaHGXRk9GZdy3qe8v2",
  "key27": "4viFVJPDAXayne2fiq88ygWYWFNKi2FEUNnu9S1x8EJp7smYdPrbGBQdhLxaWgBT8wQL36GzQRhDoPV5W1qfdHJH",
  "key28": "2pVNAKFvmHTEB4SjCdaiF1GWQ2ouC7Jf8Bq25sedjGZSGTopCNQq5RK67u5cxDoAC9a3n9QhHL7Xvvg1oeTQJyCx",
  "key29": "6281EU4wkMSyuonXe2zQCFLVZkSdwqiTydpK63QBztzMwzRAd4MMm3Y18tJDqTWZDegvaWXLDepxY4TjcsZMXt5A",
  "key30": "2NkW1X33ao3Ye4j12iTJJLsCV7gKP955UVK3zQ9Tc33mkwRJBwVpo15NMbF5gwG81ip7JottyQuUVgtdBYJ5iLLu",
  "key31": "3xDHyYZayzXeLwF8Af35YjGnwFYxhmtBrnxhtov1AjaJZDbTMSEdE8fyRi5RNaY7wasn1fFyk6W1RVxVqUxV4vwf",
  "key32": "X6QLDzGqbgsMdti74vBBFLBhUrahpFnEP3wcv7Rg5GHNTG5eKyJZzuw4HBbcGBdwMvkfJsiWKqpPDKmVAZuoVyi",
  "key33": "4zDpX2Txm95p6B5QJWtbfeJk5jmVwmTrRcqfPgmt3cUigxXdo8zgnaeuct2g9EwFDnrJpnNGbpAaCiRPW6RNQJeY",
  "key34": "dTjnZAjfUBTu32bzbmzjF6C7hyjnwTFEZHuZqymgQ13o1DQEzgG5gAWem27LnfcZvnzSUc3kYcsseJAyLPEXpkH",
  "key35": "4DAp7DshcetggtMWegbyhnfRNrrAcT4t7AsJJHYBZTgPzjauaz4VB8ZKzW3yoGKLjXypPXYhBFLYGJVxNDyYuKFr"
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
