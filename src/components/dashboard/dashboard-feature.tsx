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
    "N5YAWpNbARNa2PR7ejtS7LEBw7ihzkEmyGjxJEFbr16PSvf7tXmPBzWQ8VMUAjKKmzcrEW6VewWn7RF65A6vkQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aAiVBhCZmNTETmQbQ117wjM1esL6ibRhAY34U4xUAitjFUqEb7CMvWaXFgM2QM1vUCsdTNwMnSGGEgCwSmeLPNS",
  "key1": "3cezSsx5JrSkRKT9mfdQn9n1jayHUMTLcPcmEdUSoxKEDVg6zRdRWpc9sEwkWJg8ciTKMiysuF1ae6KDvnb5j1s5",
  "key2": "3XUS7XuKmRDtMJ6ZDvGgN3Tc6vPVMB3Cxb3WzY9rnDUHMY4ParDpn3sQB4dfGQehbmAmUFAc5zj9smMr5Q3whKM7",
  "key3": "47qjFn39Uckams5gycc5weQesbHLDk7M3p2GAP434inhYxpYgpcAy2Bpw2CknSEDZ3wc2megMCCb7VdVqg4LD3nD",
  "key4": "2CUEmE8g1pNhJcxoYmGknt8mzzKVb4S6CdwuQbEv27zM4y8oCSbPyYHRu4H2Ad2LY4BwfbwNaZW8jWrQqUL8uBPN",
  "key5": "4sLBdgFKFXduXmr88YXZM7XHScZQRgp1LLQ34KRjFL8ta81cVvr61y5AJyYGJfAuipMZceWj2XieHTkK8F3wWr7c",
  "key6": "4ZRL5TkMnVojgmc3vaHaCTt1L5DPxu4e3agPQapozT5W1mGwGeGgAM2shKZpxuCfCeSwhmi2Yv24JjqoB1cr6QDr",
  "key7": "7pxxxg2T4LCNz8foJJFMpxWbASAErx5CwX4X7ykog92HfzH2Ycs5MBxFfBGQDAS4Ppb5EwdaK1DX6eZZHvueu65",
  "key8": "KsgbeMoALE3muMsjaL8oiEUN6Sq8fT1E7wwDTAuDVApS8KK2YG8yKoLhJH5oL5g2gH7xyoVFVDfHWogrNycW5z5",
  "key9": "2oAn3PGUjezgNgKHTeDczc8GYbFZSRZHDfhmfDLvDuP5s71HAGU4PWTVWVnbeF44CbRnrDoKhf5DL1SviH572EUB",
  "key10": "4AqA9G1wKwobTeN95tNaNxJoGsDxiWv2r973nGURvAWXnTLSVmgoe2A2C2dFUUSTRVHxyPGXkWq3L4bdhReDqjfV",
  "key11": "5jPPzFp3btCngzaQzFtgC55gknkjmkytgWdtDwynnhciFX658vb5jJTs8rq6vP4iYxs6XnHPGVjsJ9QmPKEB6KpR",
  "key12": "XuAd9ucxBwg4YbJGvNtjytYP5Zx5YA2VMJsLtmcoaHrq4G3sq4xpQV9Ni82T9Y5mnymRzf8x2jEmk9RkuTzGy1C",
  "key13": "cDDJYBPdJJJd9gTQ3sLa1PcJPZVaMbtJovcLksTvVJRHP5pfKyspwHSQGU75xiStLGVmCGvard69AHsrTtax3Lo",
  "key14": "2HTZs7jNDNv3YdkX722GavxtC2ZKcy4uCbF6yRDWfiHEjbSN49GdkRDCKYHPraf9VviV4YwMaWtVJeGJYuH2roje",
  "key15": "iycm8f4EQBFfEojmMJV8wBrmY33r7NXqPouH4gc21pi9UrMVQDv5crn2n6onzog3wLrdyjMdhXeowxLXHWiYfcL",
  "key16": "2hZzsDq75TVNrea395yVBXsieP7ba7HGAxFy79qwSQ2SAT3aUYoCyQVen8pXgSkYFhAMu9wW1bNXJrbv155Hv1v",
  "key17": "5amJFkfB57U1hWmLcvsyLTHGwwVQZppaPDXYxCuK4eCz3qZnuptCYeCkj9q6YKbUy24vQoFndYGUT3zTDZgTu3Df",
  "key18": "5gLeXNE9DZFqEqyCYHMkQULYiRjoV5txX4fxoUHd42hLtUKDTYpnpfk629vqnicc6j8gJMnQCLt7TiqGBRNdFJCt",
  "key19": "5zJXXKgZh243GA696Z41FdJxNBCeq6Se1iMZNC3UMAp5ABfEcKiFyrYETLzQm49Rg9K244LAytBzz6ixpzArd1Sb",
  "key20": "2qwaWmUmAUHfPKqemUq1CmuLXXSXA4auhXYQpnBLjNrA5tZaqFUWyMFtsgdp2GWXZHmM52odnJsQibJKcDdLsXub",
  "key21": "4Ga5LeRgPLC2tEs5zmFFFtkrwdCfzBECztmwXfFUoX9EjuqqLv9LaBsY5qr1uhfHjHdkddrhjZXnAx89eWH8e7ua",
  "key22": "61MKTEweJigJ9hnzj2bEp2FoihTYgy2Ug6PQAYJdf1FBcXP18AupxxsYzypyF4WSPUpafggPWkGoPxChibCxFKRV",
  "key23": "2VkrdW5Yu6xwzvb7VsLQo5Sua8n9p2Nv2hVGYNZE3FzmB8UkwWUhU428N3gbpN4YVHWx43z3cqyRvCHuoRxDxkqx",
  "key24": "3rTv9ySb5sHKSZh3EZkYkqGqDieQ8TMj9bRh48oDtbh2GYsEWWY96BonbrqL1D8mABRKEZp5T6y18rib2i9GYdCu",
  "key25": "38KJDdug7FkdBtwrwi3EVwCSPLYdGXbm213Sf1nqkNdwwfw8aqKhTP3UnXARLRZ2AeMGphdP6KA7EgxFhcYfSrCp",
  "key26": "42PZMCK4AB3ixfAqx4ZAR9NPDcLfnsKQQjneaQb1PnTmYez8Pz13UbQfDgV5YE68xPebz6a7SQzCUMzGu28coihA",
  "key27": "3WjovjEodPgTd4o25nqn5XLU88MMne4gysEKETCnUHeG4BB4sGfKSSVQfJsfDTZmB4BKEfM71y7P4JHb8UdVtmgL",
  "key28": "51rQi6yEcmDmgX9hJVrLQAtJVSptzUKReYjZw4NDU9WXoaqqymhm3WzEh2t7onaJjWErRPFA7yg5nSBvjubqgPBg",
  "key29": "8yfqRk76aiHDP1CWR2cGa1cvrnYVg4pvsFXyur4H83sjQYqo3xbz2NvoqJ3KjLWef5v462ftW5dJXUJeP7AfgTb",
  "key30": "64mA9FdduutdRGMzAGWHBPSu3P5xPafhxyc4trFj8bx3FRXzkri3FiZpSZQU3ELqFZKuYAJNSuj9VCNkM3hGFMzh",
  "key31": "3Vi7GAaVKdzKWR58k9zSs4c36MWuMjEyNyCvHh9BfkBneAbp8hpyZ5oSanKj9Jq4TpDxaBULWNjLF9B2yShs7K6F",
  "key32": "KzLUapPiNEFuAfvXwPy8VnTpik9WfUpCEYksWTtje9GPAeuTcJDx9o7Sj5yotX85zXxo4VZTyPauz6ub5a25CBu",
  "key33": "2F9aeJprZFodRkotSYaAzQRyQpi13GsHVaTZ7W7vqLS3787kzCVXEoLx11PjK5rs5sENBwWyVg2PRLWDW28oKPrt"
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
