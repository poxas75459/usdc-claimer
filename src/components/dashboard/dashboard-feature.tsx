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
    "3845bpJUVTAxPz64dXAy2QK2sLjJe7c9syN6R65bYNJQjxwYKWY3edM66GrS3VyMCjfgxRF1DU2UZ3eT3AZu6wyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41fP24wW5FvGmhoAS6JFcb7boAMxNd75qZX27rPfckNKbjDEgxpPxx2Mkxw7azHzSCYNdMF67S4TrKM4ptPQKdwx",
  "key1": "3sJ8VX2YGEDCqAe11gsQaJ4G1hY7jkT23Pc3LURadnxoBU4QxdaM2DViwGcSRQHezJQoLxv1xt6oVaWETsLMHMoS",
  "key2": "3dTW1UndytiAp6zEE6TEVsLact1WsFGU1knmSeb5gAEycTHctuyhA3e16gxjdE8Z5WYh1KRazrvzc6Ubyww6UvfQ",
  "key3": "4m2AM89UbvMNYT2qS4fcAeuKrCrv6Sq9dZDorH56fwwKmJ8bpNNkmQ16nZayMn6isbbocBzjxYgFmrmy6JppLUJA",
  "key4": "4YKMQnaAHZyRsEJoFNv6eZz9dHy8yBLDbzMPU2mZvj9Tq6jzL3RCxZigVKcuWX9zg8Ado5FwzRVauGESDVrKNxmB",
  "key5": "3zsYRAvXuGQx5qkFoMYD2KSiPqN7exFGAgDmdmg74azczXfk9cfqicYbAcwbR96U4YMDgqVGNtsMW4EBLPdCKMsW",
  "key6": "jY8LSUWEhRCx4iZuyfmUgPFX4y23GWYZxyyZAMbPzBVa5Tkgc5wr458yQZTNMkN881LyQiYGjFCJ535KHcMCiUY",
  "key7": "65y9HVAAJHg3TcAPMAXKaWrnSQUqFaTrRzBv1N3574TwT6sPBSHyDVdorp9y3Fxy6b7vshyka2mdG1BV8aKohAg5",
  "key8": "d9p1SWKAkjPVr5ibAdj1DHP3EJwaJXt37WqphdwarMUqm7DGBHazRgtoj6Bmv5BrAyZoAido2SYd9P8LQPQiXCP",
  "key9": "3oWPww7Mf25XXZMipeoUkTsuAh3MvpQ7pnyc6zfrfWK5QWqvDZMDTpxCVdPLgR9mG4w9jFjan5HRr4bBoPPezGt1",
  "key10": "HHKjNJhP1nqPWfKmAyFaKXDVums7nZScmhbmnWVL6Mc6E8i9mDE4oTKsKiKvKkupzxgSrQjR6pwsStCmLgsPTta",
  "key11": "2M5D3Be889XD8wGpBec2hdkvbrESGCWsGRk7YzJgtaXrEDn7RxHuG1kf22KRNpaRvBvwRodFMKm1xmQxwx5dn5hp",
  "key12": "5DBoX6NxQPkGqBtSSAS4D1acWxrXMAtVbMM3AGmNko4D2znHsKAXFJFawmhAiX6T1hZ86XEKSS9BJ7JZx1Gi8xut",
  "key13": "5TZjcfyrrg5Qv3ndGXg38VYTShxbcf15H2YE2LznyThs1GQo3jLHjsU93qeLGUnnbfQ5ehj6YWt74Tpn26rzQXy2",
  "key14": "2tPXSu6h4vzuJEsqxx3ZAG4BHXWCt2tcMYqy1V5MEeTg29xwP3bfGPJr5ZvV7VBwjtFHizDc116UPNwj4hJ8CDuL",
  "key15": "PiVqJpP11VUEiGzsmZQ5Cw5uwqGrUzuvkab5wsnhwYyyRw2HS359e88Vh89d2hVpz3jJbNBvSS9ZZVSCHE89vHb",
  "key16": "2EuLH1Exp3GN9JohzPayV7L8SGWfu8hCUjxtCq4hDZTFdCc2S6wbZAx2ucQ6uV6UkHSXJt3PPFXfjSYG5djmJkQQ",
  "key17": "2PBvKg1cVB3RnZagPct6HToMRhtUJC1Yzb37byt4i8w897NbQU5LCpcmGmMs6j2gUDL5HJHPgNs3SQrdzbbuEEo7",
  "key18": "3qShVi2mbN6PPi6qiwgLDFBQomiuQvUef1ha6wfoxDAB7YeBaDshCSZe5m3kwUcmJrKcGfjwDNrL5iFYezFPNt14",
  "key19": "uqPc8BFFShPaZGzyRhH7jkXnGHkVEL2LESVNPVuRiXBLEk6VJ4297zQebJZkximxn8yhKH4Wp6kE68xSrZ9KKoK",
  "key20": "kUWb5MB6q3ra2ma73HxcGWNVhndWvHge9W7cjZerHaDF6HKqBnW3hTmMoYGBEDUwHd1PJRXXW1DzVbYYL93FBMX",
  "key21": "2YJAvhf1q4bHZKZMJHAVtonnHqQpkAM5ho2GvVaNGRuEN2ijzusVwSgPSjU8Wa98RvvVjP9pGMrTfZZvjXz9qJE5",
  "key22": "5yrJ23DZUXzqbGBVi4XVbYPPdZ3Dm74Hej63WyyoVvTi2YdWLECb4Hr3Dg5eASzu1bYUMsZY1KPQR8BUj38FrnYB",
  "key23": "4hdwNfMwt2MNKa1WZKJLqzY35roUwddfLHASmN6obBcUAQu5pPQdnuDyE43ZhWGZcyx2jtzc1JCUpMUNZ1jNUCFR",
  "key24": "5gqeVd7f2QE22gBQytbtE8akgkbVNRvEUMdMdxaAYFD17WgbKnVrmcmiGDQKCd4SqfpXWsE3pMgnK1vHPAU6ZruF",
  "key25": "2eoKq97YfeytjoMevGUUdFGGeAcqcrRinteeoHzF46Vmr8TtZFiFGppRQQQRvGEQo6jdSRKTPmu8Mx6rFyb4Ku29",
  "key26": "5JySLz9PWnYg5DnRo8DwcHUFukh6DTq9R7X4GtWD23eiG7Pnb5kUE3aGcvKqpVh5tSbJaeCucYwmrRYhDiABdwRG",
  "key27": "2qkUYfUdqkZPszrHF2Cj6JPyYwypc8FoUj4RTBLepJemW5nk6gLihbcw49YvYHUsENPXPuo5BcGhJHcHgqiiCodi",
  "key28": "66pKMhNAC8NgpjYeLHXvcEoyBU6aAFtAwWjCKoiU6CM29Dy5ZRXqgEXKjNNMZ58mpfyjbj6A5PGWP6PcpMa1ZVc4",
  "key29": "3QxBqb6whGGH26nCwvF7bpNRPwLAg9qZn5Ao6zEvUQ8FCnWCNq6a8AVTBwgHY5E3yFHQ81dYRWBSuQbuDUQKNSZ8",
  "key30": "yTS4JNWjTtVWUp6LYJg3hsaQjUCnbram86Vv3bT9nN641xC6gY2wubtxqZKHaRfUD8Rabt8HoZbKX7roJz9Unv4",
  "key31": "aN287h6H6AdnjxVCwm3ftHmofpbSSH6uYxxPcsPdgNMJunBU8ZkP8nkdzzPA2RpYBgx527VUm8j94bU2AWXwmyW",
  "key32": "65k91e9zYYc6h26rfXsnpMXFYnKi877wfjBRrtDvy3SfGsSSnWg7mbcy4V7PKrS4qZLjjysrvq9pq2nE83wgxVRU",
  "key33": "33feAx7Bn4sER4ynvkzqy8wpwLFp4V7kLeHTHKRXCeQk9W6DtJpMpEAsUMYEcR2hKfgKUjKzBNXCjqAgimBfSQ8d",
  "key34": "4H42PKPW4VrsREeRNf8FEi4qYuPHEJnySZUfvF5ACzWyQqi9VKt6f8uKUCVtFwHeW5F3GHYamjoAN8xMfsK2GGXX",
  "key35": "M6LpQhkWeJJLF1hMoGnVkWCWYyJNzjPkZZiySrvcMCrRZeCVwYWPRWchJpJvvvPT9pKAKWz4e5VbAzCsYXE5g6g",
  "key36": "f9jqw31dGwJZhvyRThCkBWJShxokTgELg2DV8JoCeSuNLEGeyQw6edwBvcSHkdi3YnsCdy5pKXGdLBBxDYsjebD",
  "key37": "4oY2EyjJK2a63eTxwChfTXBo1PCnPxysNFmC4Bf9v7Dboqg3ygB8NTi5HSFWJLmhbrGjjwK4f3KQHxguLwb7iSk3",
  "key38": "3ce4XTddUMGfaH6evGbTrL5BNszLushW3NUGKJqsNgEPtDPRwBdUdBkent1iY15BGUthRARXUNJA32VAXeaPVG4o"
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
