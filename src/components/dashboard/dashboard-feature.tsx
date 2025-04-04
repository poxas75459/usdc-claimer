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
    "4tvcghVJE42d5212ZKCXUm7BGoGNDYLHYFv19hHoyMxLutPNJEnmvyGcJFJocAW4nrt5ddx8wHNTTqLvoMQZRgip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5htzFuCNwe3VZoyJAwK5Z3nZQdLY8YzoPEvfv7JnPnwvUUGGc7izVYLg9eESYitnFCfiym5gVY8HX2anVu7AVjnE",
  "key1": "4mvgpX59kLQfgNEHo5EBevW24kDPs1ABaeYazj467xU1GkDVo9LX1C9MZK2nUpDMBNSc94ycNfWtj2CMsdPZ8tzV",
  "key2": "2FBKcban5SC7ZF3V1WGM5cGqb8LtNFRZZ35XFu9r6kyn8aA5koYZJLebs6q5VGZ6NoGfAwqS8NnveGcRbSxggYTc",
  "key3": "j5oqgEAynqrYqA7dZLybHzMHxcurB8XoqS1Dgbx8UVW9eW1bh7mZgw8bkPVeeS7yC8vm1F1dZzJHTEaNAi9CixU",
  "key4": "3kmx3mjBvKteAdaRDoB994hdKqeJbDqnkJ6BvyckRnYPriK4v32YeEnfiEFSij3NHkj58hwMQkVs2R2xGCHGW6JC",
  "key5": "EsRF2uJP6zyiyeVpAZM6RJXWcatPkbRZ8rMjaWHaveq5oPeqpyPv3uou6GLkH5uh9zp59bgcFzJVMHK9e1twDXe",
  "key6": "4EyG446Q9bu4pC9etJDd6RLLXR57WBUnVgdHZEXn1HbED4yzto9jYCQMHmhhEECXL9EePQhdnzAKgSUCCha5jmid",
  "key7": "278iumkApyiv4gpDmbTJ3u5JbHde5mPHFwNCWvhajzzgqD7dwAYnqHoxtHqNPicXiLTkHtrCRxiNdwyMJwQMNz2k",
  "key8": "atbhuZiAzfBVSJ7Yb1GfaSPbkpT1qUsVKSUmweM2i94N6ETTVAu1wCoRiRLyWf2RRpxPYAwQpLymBD2SH8Q7DA8",
  "key9": "3gV9K7kAUEb816QsTPAX6sK438vULZK9cM14w6bzfQ2gq6atwq36BgweQx8jiyrnLHe8C6WMbprLNxqau7kSUP4j",
  "key10": "4YxCvy9gAtK3Fm9vmN9m1f7YhL4wBoe4RDqKZDp9ssz64eqy8TEXZmtrmwka4c8r5XTX6iZdMjLBzswn8P9PMPnU",
  "key11": "4EUeyFYyoepCua17oqkpbtMe4aMZvzbRuVp9jbGN1n7FEUB7a6mp6FHjJsCB5FcuGQkfo88PCtMKahoB9YLgcpj4",
  "key12": "PgwEpmTymwGjupFqVP9avnCqsvRpq6JSpDX3ZvGSKggPHQLz5nkq7T8mL3Jn9CJmoChiHGeM4WRhbam41z9F3xv",
  "key13": "56XijYfq4mYRGFMWh61rQ5GMUAM5X6g1TrnbDymRSorHEiD2JqVhweAMczEuFaEcbn2jwmFGFuU6C2utydNZmaN8",
  "key14": "5obD5VCc9qr26JYSDJV36F6nuidJePJw6XXYPRXh7N2gZGZnjXkTYarEK2wVKmxLX2m7f8iJW1pnhDfENEmbQw8V",
  "key15": "23MnCSmGjuF4bv4yLFYv1HRxkJmQiQsvYqPu6PXCwVxdy6R1ESkrmgNorgAqsMi5r7178icCrDDc5gvhQjUyZunM",
  "key16": "TxTsc9b1njwCFHa4kL3c1V6nbiVAz7PWF9uyHtAUXHfNtC5Y4EpzEa45odz4gKbFgDgc31QZm9syzP4kqRUm5hR",
  "key17": "Wf7bHEQisv3Uq7ZjepMYSn9hZvgQMX681AthQy3eh6S5HqkWC8WLxHU2jUfXhfL7sZqwM5erd9vdxuFoLRXW1Sy",
  "key18": "3C7LdG51RRAHihjcrRQ1ACQ4ka2aZbdE5ETzgtdC7FpgNNSAAJycCiGJr1NRws4VcyBVFgbHdLm1kauibsAmJZMM",
  "key19": "29EePheWk1P1X5pKy4t8dd2B3qe1bug7RbyBbkywY7AwFb6oMcFBeGm8H5QMnusgPy7rRiCRgqycf6ajXF1jTcew",
  "key20": "36NJuuJCQgEPAEtkx2BPzHw6cGuSpEy3AQ83Gxsk4eLdtrWF3EyUdsjmuZnrrCuMB9dsQuNFkSzEeufzVsCx6ZqC",
  "key21": "5fby6iWwMwiwxvZs4L4yFnmis8tRYPJnn4iU6iAX7Bp7N9mtXLXSdzaqDsd9kT9vUZbTihiXgMFBHLdUvsmHUdqK",
  "key22": "4pvy1oWcbLzhSUguwmg2ay7mdJuTHWU9pmWAsfnJTzscjp463nBHspfoWWpwR2MtKrHUd5ntUceeQJ22GNLkX1dk",
  "key23": "4ZDzSFBPPHFfr2VEGx7FcKQbiUcLW5ccMJbDszA3SiLFy2uTn97Wdah8f5nyu6QBGEzdU2YQuRRmCbPWZcBar1ji",
  "key24": "65T9eX6FocB93xEd92WyfFgVsCaS9raV7NHddiUXFYbDxNeTXJG6JDwZ9QXu33yMnS1UMtZV55TvMpcEWqmW9gmd",
  "key25": "ZG6G1erKcApHoeTxEo6yxgHQGfoFBxJMYku6C5zn3EeGHbWNwG2b9DVdwVDgERExKXF8TWptA4WjuR2uWiTWt3W",
  "key26": "C6MYeUWMwyJ4kzAKctsGhWewFPmu3qcXvnyKvQzaEXu4YmLH4n4deVisX8bN8w9ucRUwxQ7pDiap5uLnfP1C7wS",
  "key27": "2BcezQneakAm5TjhtEyLCfKhSqnUz7WA11F4H7waDMBekqLcvfjVyYyFd6vPrrf72E5Gh8pxu4u7QpdHwBpGKcEA",
  "key28": "3qw3jc1kCFTYQiuSwiLmYtr3SYBJBSFJPceooBV2cJmCfja9FxSYFZBfKi65kXf3Y9K37acK7spm3ahmsA5VKAuQ",
  "key29": "4R374qFVSSbd1FP7cmyq1QFFAnrgC9QRxRgiUAMXfXKdcqn2YNyRUkutSj6hHMXsBBhnosGDsGt8etSvxypmKnmf",
  "key30": "2v9rJL9FhAJ9ZmBX1TTdG1XbL4xadihGrLgn4KKEpJwLbgUffBcHCykGKXdMYy5XK4VhTNXweoQkyGAv9tHPSJzU",
  "key31": "4FKiSCdktnnRSsDJ1LpjP5RnyHvkBczFoAyBdtHiBQx5McVFeRy2naK43ypLroSwaMiT36U2ELMBDKHryyUduMgk",
  "key32": "5BvChBzoj4WrK9thuC29ywj3CcssoGjegnYwhta4LJJmdr6iBeiPRsEG64RLMpiN7zDi2RxLDwK8xHmqU6aNTRMm",
  "key33": "4jdnod19Mf8NGDWnjNfDzkbTfSMw6dxEaVmskDzFr3ojHsx3bopyx3J1iojHxFgySLpgEoMJ7WPPP8CVun7v593M",
  "key34": "5NwYQ7yfpLw2HPTRT2hfkNFZLrcd8jaxU7sAsYn25AueWX2i8sbvgjimbW6BXvVHn2eSd8S1xupzAq8YV8T82LdU",
  "key35": "4YQ84RCH6fKBRziMTeURWzzYz1qsQGgALjTQAG82jGp6zQGJ5YepPypsLRpGpKHnSp99hQkuvJj4pEHFUdqPGfkD",
  "key36": "3sF2MFAhV51dvARNaSSVvL4X7WrFFV6DVjtLkR1XTAvDYFb3RhHLRLuinzpKW717Du6ieE93bRRXXEre7X38yMCb",
  "key37": "4v1ExbCfEpyc74bYd3d6yTePxvL54X2w3cVkY8L7ap1BNjmdMkvufiBsv77JiWsxiZkpD67L22oXjkfJLsdxYHfK",
  "key38": "2L5Yf7LvYKzwFuwqLoDf8FRWeNDoGMfjFWUfp8HHYMuN9uE7MEWULdftJeAey2fRR9E2Y5WEC9saGkwbLbtAXMPk",
  "key39": "5fyzuqTbniU5r5n4Fvc5QM5QzYV5q2aNCzs7MTGp5P9f9BGnkKAHcy3uhxQqseUAUSnSEHVyjTpAtVMkQfWDyeKw"
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
