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
    "5SP49tZUjke9z9bRkAWY6d4k8UPxvadqjEU2rJu1TR2hAfsnHYdZc1nwikmUgA1prr7BAsx4w5f3FAwg72kZQWtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633VKygeyzreqJBBEvRSkkDEbWt7u89Nw6JpdV2UAJjP32cENqd28bCJP27teejPdFopQrAphiEA4jHdLSmEpKSP",
  "key1": "5DBtbPAUN2zixDSTJmqb2R7booYLs3gSSaQfWmp3AnkPdMkaSvJSdzU1eQC8a1DLzmfPNBhyFdYAJrVKBdBbsEFv",
  "key2": "36FhG5xqTWN9hj4q7UnKhwTZy6Znm7NVUmu2kXdGphqYStEHDFnM8zEmyrYEGRMSnGkSmEmjXdPzzRgs5mBA6KsZ",
  "key3": "35hPLvzc1vrsW6dnvwwUEHWc6pEvzBtSXcYoYZLj8zTG84rGwpG17HfYAM9my6hnRiqAuyGpJutUvzm8RgLbN6kL",
  "key4": "2XAotXDmCrR1Gu5Uczzjt3xgJjxGFU4Xgvu5in8ZBGgtPZSYF24rLrcWuhGgV22NUHuXQ8nfuSvMu2QzYDU36sqd",
  "key5": "3dwa3sMiczZDGK33q2DQXUTA6UKdUZgQyE5WHzygUAjtaTMZTWBSpT5SbrXEXAVi9QT4UkHsgaM9DAcPPvipKyqd",
  "key6": "5iw8nmxu7Z4AtCXtHN2yzWjVcWxg52TifE5feJUJg3vJoS5USxYzbvNfLFf9W3AwXctSZdJ81gwvjBh73KzEfEAu",
  "key7": "2krrWnfhnvyfzLTqyREFhU3hruUk87otRNCbHdDvnuHJ5ogetwx2p83n5eu28SPwyy3kpKP5BRzgXepqMQjK3KNG",
  "key8": "64sm6LCwD7XkBeqo9KLgyKQV1JCrQn2hTaNdvGCPaUMBeMh9MH31Fcbx5JcLnNqqJ5wHZcTgq4TiAyV8VBCHr3gX",
  "key9": "5kr3BjyRD6qZGNWRcaYxAvkDR1mFDXGGDbRyS6w1SmuBvw8kn4RC2aFJczSjj7KX6JFQ1KFihXhkjfVek4njJLjt",
  "key10": "5P3mwL169zhxWwpSPDj4FciHLXZjePg58hjtUdjqkmBtRGDno29YFpo58TcZqoJNiyidAieZoSoef4kBxw4UbRQh",
  "key11": "5wyB7DEZpeQ4oX5YS7nEGnBkrrHTAmmEqottoyXY5QUi4QobHLwSFQ4ytyUixBFkymYcDoeVX1BGAK5GS2PzRqSz",
  "key12": "4c7aGy9zdrL3wvN8sbgVQpjhgyZGBmXpHtUeYAqanf2ZGNEoEHtSgEMyqqhpae9gw2sLBMFDgRMLFRsfbaGfH5Mj",
  "key13": "3RQQfLX36JuuBiys8kmzG4o14imarHYeLw8R7FC7qiT2Bdr2JQ3qNowWRLmGtZCcWcxXqoBy9KhJPwdyGUsckyYF",
  "key14": "3md1qCcwiqz9BapTqtkPXqKeEkkEnQduerREyFmmYMcgaYMHvDy7QvmkHnJwyAWPC6zEm3x6RQ8bQiZ8sPz6ZhE3",
  "key15": "pLe6ZbCsCz5sKNxcP4n4zwB4gum27W1RVvFAzmvzb89wL71dGpowovzxpSg8HDrUe718abRfRuPbVHUQDTGaoEH",
  "key16": "3KoDj458fVChqYyzC8xymujyGqYSkdc6NQk7UwuE5Dy3EVBQmFYCkQToNrBdsqrJEuXt6vc2G99SWJz6pDVajjAr",
  "key17": "y2kCAAuuZnJckB7PF4QKJYjzGYQdCtCopnxdDJija5VxP7pJMFUHVFEydMfURe4YEGitTWCRQG1vScRmntu24qH",
  "key18": "2eXFjJXH98DqbntMxCtrbkVHKR6C8gtV7NB8WpuRiRs3HkK2ei8RuKq77trHHiaXtcE6czVxxRRgy6ad3cHSry14",
  "key19": "5EF5BrFiS6m16tVFcRBbQrVBFhMCQsSFEkL4GRFZ23KfvANWzscsaatQ9DGasvPBw7bJsWEEVak5TKtEKetJxv49",
  "key20": "3rattjdj8iMrewQqUDc34q8enQiaSQp9Bc3iKVt3mAR9wRyQu4jgWiJ5p1UH8kLNC3tQFQ689sHeKdT9Q789gcZw",
  "key21": "2BXgsgTLuq7D3tU6VwauRRBJqQmMiRZHDbtkx7xjC5pnQfnUxkvoj9ykurSAND6WmRHFWoUQoKaHX6gRxVDy1PhM",
  "key22": "2jchEd7oWZdRYxr5ctpJx5UYfrpr2aGBfCDQu4GLH9Y475UCfLUouy1Y2RPfcLk3YptWUQC2Y6hpVJaDECX3QkMy",
  "key23": "DAh1RbiJDM2HtJ9BcB4bbupeTFHwP8gK9nMpn6fGswSzuVKZgid9ti3ZJD69h9jtdtYNeD5MgNGW5ULv2BQo3R4",
  "key24": "5EaSUkML2WbxgWhCaxFu9ra42bcaFYi91cNKL1N7UvNKw8AiJrchGMZ9yWNjMu2oZsAVKUPXL6vU4ii7G82cSRvU",
  "key25": "55s1Ye4oArmZpVUbgtZPZv5jHCGzrDy7CYSXTyH9n5BZnrVdwmbUTSE3tesLQpYLKM3rvYRAwLDzdftkQi81LsUU",
  "key26": "sBYrL1kDUjvWgSyWD4XbuckDNqeSHy25224zucKpA9NvaczFWwFKkwZ23mKSmLDT6uDK1CpVrgiTPrN2fmWveTP",
  "key27": "5DVATrwJSsFuyrKevnxT5hGAvgvN4RorCND9sBQqQEeLjohHMBWsPcCjy4LuYTHKsHNEKCLPzDgZYeF3x8Ykzjv1",
  "key28": "5SPxDn2ZKbRxtiRY4RA5mPPd92SG6CsWAAjG3sPyhd4z3fbLAuuvAY99BvBxe6PgCt54Z8DE9zNpoeJc3CQkFUsy",
  "key29": "5fajr8rq3Ge8rKRV13JuyuRfReetYzE5gKrnNtudoJPJ56yAhEA7my8oME8sxjecVaVUsgrxphGgfx4gse8RMrSk",
  "key30": "2Szus6dmgsGbkchv24aT8msUsJk72uJLq6DCNJ4SR1xgoL39ToJKAjBphgdisRpBkdjydX36oM7kNQpBRnjDpXtW",
  "key31": "2K55LWEz8NMzv8vneRjUkHED43572hxZwjU6m33YeDDBSmgVYVV9bt5h546pWGWE6MQX7yNoiq2ffY9WGQAKrub7",
  "key32": "5RgGJYyQ1LZb93YFa9F3SPbLb3VnCW9MCaofeLTMAicFLxN79efxkhiHbJkmrbt5SbKYZCr1ZksBUipj4sYBsDbA",
  "key33": "2AEtbR9vnRYyGeYkU6epv8Bess28xcAow8PhDJReGtU9RXz62x4KhKgJD1e4S5SnZYdCWhz3AbgskEL3YWTCPnNc"
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
