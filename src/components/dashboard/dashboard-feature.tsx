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
    "3qHqqXA4NMM67TfZyVLfjk3s7XM1B9bCu6YPFPLSwVqNK2vYYG46S55RKqgC6vk5jcwvP7g5cVxpUKLAKoGVrmSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xYZGHaMVLmxGsTqkPQMdD46gbuyf8cHEkQ13DxoW3P8dN68TxWcokCNSLWToqc73oU1NUsxsXMVFrkKUbnj5Xo2",
  "key1": "3gV5j3e8T3uVcmX2tQGqzyid59jiPQa4bUQVs5sttNiyeAjHa4bRSpxVFdrkQTPDwNk6voshwoFdkbTmnaw3LQFZ",
  "key2": "27d11YFXixAhrhSSLgSQKcoBo4uu7pnjrWs19uS3xijyjor6yyaiSm5EBiBJJ38YzTUMaqjMMC7tYw2qRgpbibxc",
  "key3": "66uChC5fTCsei5pzGRgrZPTn9rRoUomTHDBWNUH4ULcBXRBv1TEHGPXqMH12f2PqyUGACjAAGkxmuycogwYWkFxu",
  "key4": "JR2jNQ6hLN18hjigZTtaqRwhR7qLzJw1euaB92UJqzvFfhytZraAjLo9cWCwYdAzWWhx5cMfKtTGEYcHUbk9ksL",
  "key5": "3KyQ15U6hEjUusPKMAxFZbByTJZfu8hTDBQYw7dc41x5jgSAZtz1fe4sgpxSv4fkmQjBMshBzvWWM6s4A5q3DH4D",
  "key6": "5XVPUa1cZnmgL7yP7XgghnWqw5kWLz8axHX3rUSGZqJb5zPVPhBScTAEs3o7QuNLFXPGPHHtshsMjN3MxCANBNgd",
  "key7": "41BirPxhKeKr7dwx6fsMCASqqbdatx76foqwTqHvyuPTV4Lw88PYMWYhXfZuz7gg1m9DysDn7PrGfNaACuD8ujtb",
  "key8": "LwrVUYA1VcTwpvg1MiWU1VWCcR9mcReBMaHPmWfoXsXajWg2epzxaH8t1PPas7DbTq93cQvAMRZZjB23p86oqxK",
  "key9": "4HZjuQjaTCcWKGUPdMYdJwsc9SKSgJ4S2bekZ8PAW62KGbTyjsUromG1Fw4mQ3aUhMY3yYSFJi1juSfDSoYxYsLA",
  "key10": "tkdbZEMdY4HjxQQuSQbzkK1erbcYXFK3qCbfnQNV42VxsxYMJS1fpQhuc2nhZdw2RMAMhQgruKxhHtaanZTTidW",
  "key11": "396shcLp5tRHTWYkVr3jLUwMwF7Brvh6LK8PPE2oNH4yNDuewvBVmd98zfb8kiBn7z6CjDPLHRY9Q3yR3MshY3Qh",
  "key12": "2adDjBofhr5iYbxWgR8ozuzUobx1xD6TAMj6u7thfiAxuirkRBP7BYN16iYeo9yiUXrjULpoCBMt3BZo2CQgzqdy",
  "key13": "5KsBa7jybxR2fw1bYbrM9gG4X8RXyW4oTPSoeHE3EvfepCki96vBZnTjS4vimdr4nJkwZFNmj8M7h2eAAZ9jY6Fd",
  "key14": "jagJFaraAuj2wCBg7cm5NCjo88TmCUCKCQbZDG6xkg6CfeA3sNY7ZjG69nmpNy7YKYrMurw1DwA7JHvAcER8Jxt",
  "key15": "2vbTYMpBDReKVME4rDSaK8JU1pv8vZ9QZrjeK5REWWYHvEDMJ6Tn8dD7i9H4zYhYpgjNJdJxtdc3W8RTRf4qAu9X",
  "key16": "5rvQ3YGJYVKhcLg1xKxkGUcen5vnBzUi6qYYmgUrcRjNEZ5Mc9m5wPrEjedrWMr85evDKpZZUHwa9epBmhtADBTv",
  "key17": "2zUHTiG8MDf2waehSp3HFaXbtYb69skADemUZkUc7fAb318hNjNCUcbHQNZEWASAC9RqqDzjqtM12MRnZuNGrcyu",
  "key18": "59vZKxkDB3U8y5HV3CQXtuKNBDJziqACiryUR7MFGVhDF5jLurpUqCYinGni3quittiXBUwrzv9xf58KoSQorGEY",
  "key19": "jPuYV299CYeQKYrAVsx8y4a7AvqKFCWK5oHeAkgFtKBJ99xFJdRW5U7ewStP9VZk6bbyHZpGHLgtVskpAmjDLAf",
  "key20": "3vYmFyYY6qhvTv3z7U3brT1utSSWdPuXUAUwuqxHk71oh2LQg1DwtTbt4za2Pb5zZRMgjEZm7GB8fQhV6mi9VnoQ",
  "key21": "5d6jaJEP9NaKWXsCnJ8bemN31D8UXWtsQdHsZBx6iQgUyiCp7xmcADP9yo9zs8yBQA4dNbeXwGCJsz2P5mf11B3F",
  "key22": "4pbcv5BY5sQ4bnJRXp5qtvR2s6Pd9hb7eTuaHbtW48VB46Y6ypvA14Cuhq2Q53bX4VWct5vHsXqgXeH4oxSK8Vht",
  "key23": "vC6hGEPX7HRrPsPgXgNLguLnrFPS859pYKJMypd4xnqjaDHiAfzgx3FoBKgYyyyFz3je2DX8LUhFHWw46dRqQCm",
  "key24": "t5gX8F6SES14LSh2KCXPqH2aEiqZPXmVznDvzvWQ9WpRp3Tj4PrQmYg5Larn9n9wVggwQMyqs5iY49mJR5UHihA",
  "key25": "aLvfxNt2Ks1P1EWjmhU9iDpwZUnXeMaFD9DLodH5tfVQGJmjdp2N1fNU1Dn9s3dctuC6MEJ7X6K7H6nMPci1zgW",
  "key26": "56bWoym2JRAjAWJe5JUfMj2r2SJSZhHd7UK2Vo8WuhfadvzVT9V3ZG6LpPEXQ9DE8ymGQ5C7jmQagQKUMS598XzF",
  "key27": "35pQQnmaoLT3jMrDNuGnhDRN7BWsA8DkPTHYgR9X4J8SNtBrCs7zpN43jGnz5KmtzA2uoJ5YzsU6iY1kE8q1LMRh",
  "key28": "2vMqoBTtreAtLXFLRfhs7c9dxLNFgJocLNkr9GsRPSe7GR75o3hF3EUMjV9KThbjeQb7Q3Tvt3pjz8e1k7oznb77",
  "key29": "6xPt3xo4sxuxTgbRKpBfSquc77yqjrH7m5ojjUkHC2C7e1ZYSLwQ7ELzDggL3VJD2AzcwdhyEMCrXMvqjKa6ABD",
  "key30": "5PUkkGyRmuYHHakHwReR5xA1ugTkJuE7HJGccmAT6y9osWDZshW2GVxkJfNjbaPGC9tLq17KoZcwJKfYQixFSptt",
  "key31": "2LRcZrwhwddQWczR3ozn1joRdaWwgLy25igVYN77nKgy5nz1djjwnitgzSRZEjH8DB2CCJM4tkjcRdd8wAFtBGye",
  "key32": "22TDfb8NwzD774wdVH2CBS6ZzB8KWqXXcvwNcQJ9pHK7ryetsC49gEcWzLMAfhFB8EH2vRRgYwMxMcWobUHMk5Hg",
  "key33": "5JsX8gek7i1t4nTFt4yHvNp7WscA5PzRE9PMf8YFEDkLRLpzHuJGULVQFwyheWZvKjQ6QAZYMDKyUipodj4zc4sG",
  "key34": "3xe24NjtmGrZ1vvGjLz8dT5oZuckkhPfzbUgEUafjx4LQ3quiQdisqh7G2GEV3rj6wv2cWGPjfz8VhAn59qiaV9r",
  "key35": "WVaAjzQcVZEU2kiiDF63HEWNgkTgshbBj7brJADWkAySd98M94j4Qb7tJzBhNB5Yi9xMebpWoEV8A64jKmfJVZB",
  "key36": "2MKGu9LLicUrt6VgNn763dzJmwULkhUVm7wpKs2tXpSWFNNC6QAKD2gZySzfRcJ6jC24XP8hPp3ZsdHHJs15y8v4",
  "key37": "5C48ZJK29NmmvsWc8aMwDBKri8ciPZRJcYhZCa3i1WJHkoadhbaaHbmmuRA4t2PwjBdNvcMssJPTo2Q6czb2FGT6",
  "key38": "65ZJNAjk4VtoECir6nmHHjA5ATo2ruTjFFFazFvfSRn71cFfpi7ywV8gia9LnaCCaqeSmUpqVQvEduVJhzPayKVc",
  "key39": "5DdaHydTsrkto8B8w4VNBE2WxB5wbWdFYJQqDr5gPdHii3BBwCBZbP7c2tXmMEt5wsgM4wmWjEPUK26s5c5pJdT2",
  "key40": "3r75osEBcbGdyGN6D6Qs1pL1SfjqXZfXWcKSNP65mYvUkkY7Emv68nH13GbDX227Z2kZFUcLEcK2AUTWc93TMZ5M"
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
