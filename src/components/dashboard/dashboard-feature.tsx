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
    "2SJZjGe6bMSaLymEvK3DvoekYqSd15TysNmf81ERP6FJCcThhFPzNDHuiByks8LRifXKMTmBwXqXq38Sdz916HHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBr9bwqkzxVNi11R5TsGo8aURvSy3hswC1U7nuYdGJcXGLDGkNr6e9bsMNrXquihFcfchyY8EF9Qa3QDL5NtwXo",
  "key1": "4jbyTdkttcNmJ2PTiRoBky2BKymbnuUkcrmiL6qa6U9cLaYHSQMS9A2rF5S6LcggytKQPtGXwQZJpYLvKyx1psH2",
  "key2": "2HgSCSfCMWt2SBCcbVv3uPKJfdqsxQjTnAHG9mh2qUeDBmC8cPjpqDMjSaM4fQL1wfFWvzHnQ1nJj1T1GesPWbBt",
  "key3": "31i2SrMhtb98ZoRorhrafiXHbTwbHBfyTReHDGkfHhBQ256rAAcdKGJfGJ2E5MJm6Eq2dzJ8VcoL5GHwvU7UuWKR",
  "key4": "5kJbp3Y8xiLaaz46GcLPbh7uhW1Rci9zaEJHdApUVqd4tGYCCSNZFCHJ7kP1fBNdj5uMHtq5cB8DpiGNabDyTGZh",
  "key5": "3SxVjWz1KL3hdp56xw6G5qiX8XxYmctXAJUMKkteWcorZmHQoHPKo3CS9U12c4cYQVgbEAKfVst2oNwBWXcAyhaj",
  "key6": "34kcGeV61NSzXhi8tTfSaTbTRSe2Nnn2qTLYx7t8FNk5M21CAA7FyGdayz7xBbQfJzJFBCtG7MxJeoAc1fPD4ZGN",
  "key7": "qfkusvC5ESKog7Nph2vQdzRfseiqrmt66VNnSfuHqNbMYsCaSAeouevyQXPN4cjDfA7g3CNMQg8SU5n5LrTcEQa",
  "key8": "4sUu9sGNb3DBsMkSmNXRvKL4XXw9DRGQCp9t62eKecH3k7qFb33rhavJQidfFG2cdgt4RsyyR8zcZf3b9MvxhzKQ",
  "key9": "6179f8JLpcJpNq51Kk2qD7XZkmjVM1VJXrefiGo8GDr5ZfKKB1mNazAibRPcUQwygPimGWQBAYVayPbP6k5yVtzH",
  "key10": "5N1LQEZ9Yr4KZb5N5agindnptfqQLjQGRWqeiJApFxhWhuSRUmJzghwV2dXRo3oSViH3qPojGdYuGJtKTLTZ1cng",
  "key11": "3khLBNuM1hu7twMDcMnizQotDcx8CeprLr83Qh7JYvmvjo2fDX88nbUVRa99Y2X7R1wVHTmCLDmJRPNRpzwS8u45",
  "key12": "2gu2Yy3CFjn9kwTA2Jhi7Bho3JcUuEkLJ3g3TTCk9n4nffigGay2XjDs5nHyYfrKUgxypCVRDuAHymE1s5V4JYa1",
  "key13": "63iRuzFxKcm5uxJngTcLhxL6ufEBeNfw8C6ddPNDB3NTHsZ45xUZENmRQpwNDp72em5Nbyu1sYC6aJnVX58W9bGn",
  "key14": "2EXCwonVft497iqshDEJxSxZ1zcdtcLVtPsxhH3gMLaSDwDobvWK67ikJm2TNDRAdoyoWGW3yhFT2mkMx2z6NQ9z",
  "key15": "4Z84eMxsroLmPJm7bmjnPkgdeEwqVEw4r3ZQg2AGYLRAK2nbN3p7WcYADJEneHVDWm3KBNL2gtpKPLPCkZ1D7cTC",
  "key16": "Ztwn6rybTm88Hu2xr3bSqW1HJJmi2dPGc1cVXwBuKdZErhfFs2Hu3C5DrgUQmdXqKYzFSy8k4Ugw95Mvn16A8z1",
  "key17": "CwEDuSCsMnN6VMnsxAgW4XEtgRMx8b4x5ENHyXQfyssrayq3QCFJ3GW8b8cU21gpydd9ZijDAex6wvyGD224uPG",
  "key18": "211DyBB3HWkEaqn51n282ZsbuBWfqqHVFWPTrvgJHhTYdyjEjj6aayBMSZAECxqZ9TRXTwVcSpYJaouyqD61rSdj",
  "key19": "5JN3sVUWohzzQVExp5AJc57rZooZULgR8wXbPnuEQHw2bvPCAWRhgCA6hYmudphvo2CLVr9R8U6FsXxeRQ3bs98i",
  "key20": "3f4A2CxdSNEBDnrE72gybNJhpuxXm36yLvjTwFHQZKvmARUHmh5bipGodf2mtR7iZkqX4Kt1qZymWrE8eyEACgiQ",
  "key21": "4xWuPgdKbmtr3LRUAp1opjwvxSiDMK1QGE32d6wQ6EgTSx8Nid2sy7jqZbhwcdY8TqfeiQAu7GQK1jph7RaAHkAS",
  "key22": "4DfEVS3Hv6PfStF1Cv42z4T11NdVwTfHKe3MKiKiDc9Tu7zpe4Lh5bPKJ99G2FMxcsUEhJhh4YY6ST1RDbhPHk6L",
  "key23": "SxURGTDsVzG8wkvnsjxaidrXWBqyduvKD3MdTSprr75xvgEA8sNVHmV5WW7yL6UEcyudk3fuanWBhTcNUwuQy6L",
  "key24": "e4cqp9pz91pSNVyAc8ojvnKBbjmBq7ApvtBp5mRkPVGYZBp24gySjanpDUTs5ZmbTRPpvTb5s4zEqQ8Py7vxfoq",
  "key25": "2Zn8dENWwjSzV26tTW4DTZhCJACNcGyWsvyaX18DfXN9XrTjmWNamXmw1N6RYhcUajpUmFHdrcUeQQhSUkuNgfSN",
  "key26": "UUE7Za6rhb5QUebFY8Y4rKZKzhbNedS8VmCxo3c5snDqB11ZLdLXymNPf1r4HWod7rSa6ftE5QdFFXBK3N4w32S",
  "key27": "5gde7DpcxbvXjBzGCJJosEz2TtqMn3JnmmewMRxGhLK2myzYe6QzpRnZWJzGW3zNQyik4Yoq7dYNaK9TcpDiEAsE",
  "key28": "3P6MWHYhrwJ16QinB6vR6MdxNPtBYbMrxcDKHj4LYRgoD197EPPKzYkZBpXtYHvPCtfJNKb2qLi9ND1FdqxkaFMk",
  "key29": "4dQcAFpN2neuP5543Yy4wpYDd29pbRjMrPzwoTEXp6gWpcESxGGjgX9wvMQum5Zgjoi7JjMUHW3UoLz7k9r9fwEc",
  "key30": "27CEskmGYorT59r8TiuWVzf5cKpc2DcwPg5oy9mDmrqtoHCQKF5AHpzY9BpGPSANraPGzywhJFCEXTiCPaHGCmfM",
  "key31": "c2NtkiCCpNDw8aaLC9GSn93zZBiPQqCvUsSgMv4DzBmR588ZRsVPDngWRmxXmqY7bqqkSwk5DuVJsFz8ynhyMT1",
  "key32": "2e3e8rsVwxgdmhwtPNWc1vV4KN3kFZMB8GQ6v13UmfbrGPeMvgqBitQXhZAQf4CXi3WYEvgqHbvS8pKu6uFwhLoT",
  "key33": "3sEaJb65xVvFAdhEBq66ZX1TtKQDv5KGP65t3WJVyg1xE35oX3W3ZgVg4zyigrj1QWES89xy7tYkP4213TaC5XX4",
  "key34": "22YQ22cdvf1FVujxzcZorFrNAACpyGWkMNzyVoG2ynW58AfEjQfjS9m7dmALRH6A5zqDxiS7z7pLqnoTW2PtDN7P",
  "key35": "5tzweLCct68awErE3npq6qSDeCK6ykHZULwvbx9QZMFxzXUaX8t1JiahJLXW31br6vaEeMMXeAvjsGGVw32sYYgq",
  "key36": "4GZ7uCmw6PgRUdn9DyV2CypaxYHRs5Uvp6ZikRpKWweq36apMoNZktGHrVUnxRruYUCVTgyU5w2AyhoJJqaSbDCK",
  "key37": "3xYHXzAqsFL327bZiFL6kGDhzhqAWsBhfta5cKdN3MBhCbUbEgm3mx5J9DyYyqyLQLxGCcbgEtPjFASmUowqrWzK",
  "key38": "4apsR6cxtYczQHKJmJM1eSbMoVCRqrVyCFc9nCmbksYdpVKZ7JnrXALWVGL7bc9rSgTE2iyTS9Z21WzAN2iMWG7U",
  "key39": "4sLf7GPz59hWWK6hP1N6EFgRufeiCqFUqhZFwcP3EMY4V1oxidoTDfAXARqHzUxpSCHKEoDztyFyQgfYcEUdW5kZ"
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
