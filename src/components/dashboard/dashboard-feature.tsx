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
    "7Ski21kQ6U4DMvAjWDJZGcWtnxNWApD5rPCjV4eqgyowtuVauCpfTxm4NvGv6BdvCxaQcYZS5Fn1N6kvNGeeks1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oLQHiYzDonNUPqukQymHtZwJjfQiBBdD4nwpyoTsom3sRXZf4cRpRqUxJh36GfxjRjAMFfWTc5AzbaoFaHoe1vq",
  "key1": "4FoJcdKKBRV77aJxKcg7u1UFEmwHU7xZ2M5xAPA45oPiK2q7gHKoNKcTDgxXnuuYBAUoLX1AKZtGnCiGVWLQM5S4",
  "key2": "4tyfQsWHk7WLWtcpZkcYRx25XjWtTXMKoPDwuVS8aoDmLpuPEmfby5rmYvbbnnM3N6vAM9WLniV64TBAez2rjAae",
  "key3": "nGffgyFjsnQCsdDM21PJLsHtdGdcDYABbWUvXF5A7PYF1ZHE1D2uFNw7i1UZfV3aAWYxcH7DJP8MEJG4swEWLVS",
  "key4": "48HCK9mvTCAdYG7WNq98fvVUvjGQKeLMLpcYjkKAjQXK3vHHhVvP6J2BYfS2KHucApMd2ikiBmXqKwBmenLjHSht",
  "key5": "29BuBschXub84CsXjiJu19oS7xy4zgfHEKGF2auxQKp8iYteXU5ohzN7tipzxKCmZaUy8moYCEyUJFr4PCJS3sBM",
  "key6": "3DS5tM6VG68faYRuN38kmpwZjrQK168kDjYLcsZHiSVA64GgD549eLgoTNea7y22W5wFyXehFvTAJYKi1vS6aUpE",
  "key7": "5MiywffBF6DbxntyDNuyKXjzArEqFoPs8GEDYToGCscpuZHpUsU3reSzjheyHoMA5CoumsV65WCYPMLLJAzXArqZ",
  "key8": "4qgCTC1whWyTiKGyXPgWDmd2d6eDBRiBF2wnaCuYCSAEJxe5Qeb7dt5A8TnWbxMbyef7j7fwUTEFiP2AKbbp5Y17",
  "key9": "2heS9TWrMMGAUu19pYUFRWshGSNsRDthp27JBry54EYTytUSfVCCcB4kHQaUzGbcLh4fBqeh1MgsDvcfFsb1ZnaS",
  "key10": "5oB6vs4vwma7dXvYT5woBmFSFMUr7zbsUJyJ7ZpjNy1RJru8eTNsbNe287mypB42Z9ZMVUPXEBK3r7zTfLkkZFXG",
  "key11": "4ibZj64zo9zYKmP3Dvr6YNQhsU3oNc5xSN6h9ZQb7KDyYZjLxNk6FCLkeYEkRU1TtjsKtLs82JS24ZZ3U2Fxje5s",
  "key12": "3QCeU5g1dGNAqtWNzNkZ1e1psmh42fpM4MDkrazth9GomvKfH2vKHczezYNr8z8CVaiDNQvwCfpM3YKfihiaXQVY",
  "key13": "38FhTQp8gXB4VtmBL4ayrapKMsFjbpELeui9pZ2t1ch1PWMGo5oGrXW1yJPofbryadsma2MtszNhHs2LPDbuGk1T",
  "key14": "63pfdio8gXfx46iujrjSHaUPrAXRQdm18EXLJbmHzn5FCEmCFbXZfpfhbG6dS1pQhLrcgRqmeEw6Wp41Y8jgw8uG",
  "key15": "58bhKu5HqkPR5VpxqRuuXVKTwZjeFcHCrGpfoXchtrqE665esbC5sKF5xkKqryqpfaHsoeVBcDQ6tysrssn4DfQp",
  "key16": "3M2dPBKN5wsMZMJi9QsjrdHVJrpyaxArbGM4Fph9B4EDX4ED3LnvYf4wFhiEFkbV5iphx2KdrMt1zCwMBzCDxYhQ",
  "key17": "259jbZrzjeLmCS2Yc9dwB2wvBrDwN3etRmA13CPPYNK1nZ7cP2gkJ36N5pv6gno1zXKkPqGNt4UmTP6ALUzYUEmk",
  "key18": "5m4Svo3JxeXjgtBXGaZFrghpaWKu9kRv4pH2nw8UtmWJ32vVQbaL2YGBgnf4Vpdf1bgWo1WedmAJzNLrQHte6noK",
  "key19": "3qHqa7bSn15TgasptQRjGLtmsaFXPPW7wLEH81iocPpzPGhbh2CugYd7UknMN7Hg7Gv7RETpuR79i4kgYMhRQr6w",
  "key20": "3KdQSUTKgrQ28jZ1yoctGJSYVDhFzL41U8SZRkKTjpPGectWAzTDzvYvVz1iZZcf5r7B4M7VrN7tEr6v2hDY8iHe",
  "key21": "61C86skJjFADY2E7MXx3Fgwkz4wkjgcvYrn1DjvDejcK38SjGMkAERLkvvtxFytnqzwNvBb3kLwJxCU6qncG4kCg",
  "key22": "4Twky4CB59cREfrKyMAER3vF1NdYVfkW9PTTq8fsv9Ry1ste4hFjgjefXrdqx3fQu8bEc1ZDn4VY8JWB9wMBBwGJ",
  "key23": "3bTKz314pQNz3nXpLVDnS5FLXnyJpUZUAge6VfehuzDM24oKihqTddisHHNTtth26od32dE1RTq4VZWCBKPfw6ug",
  "key24": "2tUSvfjMzyLaEcA3Xo7Qd3gbgPoEuEeGZAcP24G7u6sCJn9p94yFLTXAL99XVJDeDNEQ94bk2R5CJ81XiySA5eqZ",
  "key25": "5Y1YLfHa2ufqqhybM7z3rDWGu6Y6McR7iavpWEX6U5cmqk99qHcSemwQHcMwH3M1fXqaHCQeyb4jzXGu4xtBJa7f",
  "key26": "5rdCZLyY48ojVmJUC8R9AKvAM785DBYjw3jcZYV1tW4R3brFX5EdyARpKuSKTp1ZWWU2marBvvwEyQJai1Gvfixa",
  "key27": "4JyArjjcf8srRuu2GBhrpTdBUhvGMHVKjCwkSEdM1t4PjgJMjyh6sU993kj5g42y2sLrqAygwmbFQJUqVzeRkXuk",
  "key28": "5fzM198qh4Hm3caRhbb9M1AujUy2BTvqKPKjLJkuFMHCnHianSu3R3gfCqAUgejDhiuhD9GWyn12jpYcPRaC1UKQ",
  "key29": "fnqaMyCRQkHdfyrQRZVW3wtuTCxwz6cJUF3o1meyFz4C5R6feNyv1n2i6FSiqrK2jcmyencuTJreNQKvF7adUbg",
  "key30": "38iFHCVkGKgG46iVtY1wxjsopFZMkeYHZFC4RGBKoW45G3gtBwjnxRdsKbxaxuSe3bf6fr1ep9MKupywqaWDM2Qq",
  "key31": "9FcgYAEKnx3iNLywPJ1pgdFTCVRStb4845uNJXiGwUei2sie1D7MrsPgFNJZC94cFrAx6qRHzsVrdaYWjxAQUWZ",
  "key32": "3hsrx7PB7hqhpE3UGnZvzyPgCmbeCUtA2SSzW4q82dj2vejL2wx3dUNzduUbK97pQQBqTyTBxGySvSfrhMqmLx3g",
  "key33": "39DDJfetfwCUq6afCSqB4xjrBwQzULUzidKHj8ac7p2TUvtTzFQ2rssVw9fwNLtkTCn6RpeEAejQCydsFAKtGXdQ",
  "key34": "2PLuhYYSDSHKMMuFvgZhCog2mFTVFShCThyaqbZYMZrkDZ8qwj2S6Na79qgD6p6MXg4NTAffKb6g64Q2sXbiYhzR",
  "key35": "5dPXr3fwTLbWmvqtFNXhJJMHPbECU2SQhR8rc2SQmaWwE9RTMEDp9rJQGqy3Y5AzcmsK8Q9aJ9Ah5SYMyizvd5p2",
  "key36": "5bxKUhwHPZpQ9Y9EQ713j2ziXmNPaspkLYrJtcrW6jyj84gsqvx171HzEhqodqmtebtd5UWyom79uAUNPPqYsZUf",
  "key37": "5vXqzwwuV38Z7aHqnLyzFkC9i745K6o1d9PGCSekdsDGewDRzGELUCDrh4kRHs7qk7XK5xZBLqGUKRCSu5uircdz",
  "key38": "49xMhktr9rXHNh6drdBtwmRHe6dYr3VfFPDt8k9TXBSYsmtBUphjnvuRG14Bg2yN4AhuhqRpTsbMqjTUHF5TbFs5",
  "key39": "2M4cdjoCqmuq8NjmhLLp4VETumnsjHNeXy6C9A9vw2dZNNBUSd5zr2kS9bt7NcLwsrzADJqieDKjG1tY7tQWaY2z",
  "key40": "3HsZRVtxyPmMg5t6zwFZynDKtsqEdLmxM6QGWvcMog8rroQ2YQaDCcW22dszBka1PDbm8FUZMJMJDbBH7JztBj96"
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
