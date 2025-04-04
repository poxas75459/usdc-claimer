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
    "4qA1SGrgPFsanwZyySH52W6AvH1eWW9Jockqyb7TgfrBJerqzCvdQehc2AyhfVepYPDayUAy7k9uDZof5xCmkL1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hmn8MrhF5XDyXD2csg664Ze3aQKTorn1bUpbFrBfaJdA7vSoW9eNVkrtWkWRVHaEFUHRhZ69Y6g3NPWdjTh3WYv",
  "key1": "5N9s6aBeQEQZ41BgBrtaTVRKfWTYpHffCuB3D9YXno7c17iyCTWA1Px5twx1yccwdkeVp3r1g1vTq8RXM77yMHTv",
  "key2": "3uLtd8QpYXWt7eMGPDd7JYoKM2gygDVwDA9QpNRjiFQ1w2PKDn5bud9hNBFX9LLUgVdW2ipeuwmwmHFsGY247aKz",
  "key3": "41C5VXDpqL1YS3oaWKohB1hYgdeaGJQycQpcgRwsum8AEnvjjgbwd7VQFQ7WWP1mpKKjLkRdmC63jqnuuKQ9JDCa",
  "key4": "2ZkS4kX5vmuUKbDyAVpKevfWjSRQV9LkCxDFS2bgdnWxmVhn8yZVyHGG5rfwe9Lj42aswdGY6ongc9sseLPo1S7m",
  "key5": "4cyaqo46JazxSK5B8bS24Yc4h3h8KVHvu8p93irjXtY5EmP1UHj8MUBSQV2DbLAwk1qWMLHeLUcsEGBEL7YXH7tF",
  "key6": "3ySwpHMwEfk3XiQXZdcqi9kpzHrxAaQ8UUTX9oaX8BieVoADnfWu6rh24ZLgd9Cqodjfik2WNV4ER3vsnWWDCiWK",
  "key7": "7NjPjRhDDcbQR76Lq1FZMVLP256uKhdHW258uyHbW5Q48Qf48PAaDkHhvR84mDKcryjewADM4C6CEtAE6rzXScU",
  "key8": "3C4GzZuU7Fwz1drXSUg2FcqmLX2VKQsCvyfyWn2SrDEedqJiK8SPLH7wtea6BBLF1Kq9pquCdqzQDFXeyZ5S4oYz",
  "key9": "64mEHbaTxvX9mnbJXBV3xYrxXsDcrATBiU4Nrk5VN4WCscrppiUeTkoD38UFXYmmSv7pbXbjg2RnFF5sXRAnt7hG",
  "key10": "t9ALrUC9baG5MWJjaThtq7v13VW42j8aUaUh4mJVmJhqo8jy9vHhubobx7hv1cvk5YiazRiXEkByzyuHTZwtTso",
  "key11": "2LZdVr2Wr4pfgvMZu8FDUgJt1ATZwapV4Q3H5bgFyfC5KAH1ipLvY4rVAUHcZZaijYq2jqDYKKNFALH8XA2LQKkA",
  "key12": "5Tim8T3978Kjk1972PQXYoWFPYGZV8qGFaRvc59zzNHKiZ7T9XzVdCQtb19gCksjHwBDrdrs2Km96Xgkr7Rngh8U",
  "key13": "4SfWbrPwakk4tK4yZ7P1YXoCjptKqPJH4GYbxocJSwD5ebjkzvm6NKpRXWkvWxfFhy8TwykDR9rLNNNhAZk6ra1z",
  "key14": "4GytMiNxHPrGdfu7o6NG7CZGH64mMpj2TJZ8gqZUxcLeaimNMBsdeiRsvA2DxdgfmVbNmyfmMLJtX2F85irLwgJW",
  "key15": "5ossXHT5psofUNW6byDPDa4K6Hz5XhZkPsPBJRB7YCcqBMncUqQ35ChRhB5YfvB1aTJEwnLC5GGNe5T4ZBptnrua",
  "key16": "364AWzHXxKEiNMmbyxcK5FxusjvZEC1TS7ie6YrbCa9vaE2J2PpRWwD6Ad1pGjyaLzZnMvSpBeAGYVv7229sRda1",
  "key17": "4dmPCAPAAZJsFz5ote4nDoRvHTMoLkmWmXBbPkSBiVUFZRvg6oVa6um7WULbT9jYarT3hoDxDqmqYU5X1a2trrnu",
  "key18": "4M7iJcc8x4XfuA3V8HEWxTdC8BYxkrT8YAX1MXetELA1R2QehhFWREkiY4iiswdgQvWRm2zLAD2KgXdtFsh9VYQo",
  "key19": "4iHAn6GZ4uvCbquS18NoLDQz7XQHJn99pBVwAmh84hwH1DpfM5aiZty45Z3RADdKztzaDVNfWMUpjCFehuQQQ54k",
  "key20": "3Ep2niUcmgZYwdqw5t4kD6RUuo9291rBBu5XVo3bCABqwqrh77X8CZ9vRjnwcMMtFfTdtCp25ALB6hKtUoSTbS3w",
  "key21": "iNVJcmUy8t1WbcgBJQDeVRVG37geAewMigSSRXjLZXK43BoUJgaqGypKPBnZNHsXxu473tjRWzEGNJXCoYpszhv",
  "key22": "32niJvFycJ6YxV1UhEU72cZSxidtvVoueiy1DfWTanku53926JurUawKdNSQhdbTjB2a9uMcCCc94jKr4ta67w1j",
  "key23": "3bfBvfzwvQgvwP3mYgxw99ETdH2jjNuGGszrGUevXFUZ4PxjUypRcHnjG64W28KYVKrrpHKDhj9NsCTYP5Uq42HY",
  "key24": "2KbrffpNCSQZwAXvxgQmELpgDxXRhgG13gsw4U1doMrmJQgWi5GwMVDgwej2XHZAE5KutpKxHfBByiXiKmbUtEFw",
  "key25": "3bLut5KXuhpcSqtz2ozHWqzTADWd33cxx9ZGSouEUC9734mVfDjLqK4RyfZpTXVuRR4b8BJnuDFGi8bAPhLi6Pdt",
  "key26": "3V52urWfP9dyLH4aAYkqPeLwhoLph7usBRqbhK7mpUWymvgTzu2vwmvs31yMDiNMBn2Hs8hFkZZUmf3rT9eaTu63",
  "key27": "2bWMuykufwgJE68x3qVi5xyaYou6TXVPZ2sPeFR7vtEwwqDAWpD6pf9ERmTXmSvAtWsZD4TUiSNV68bNjZRBjetM",
  "key28": "5dx4ivpmqxNBzmSXpB2Q3uuZwtCzXV8gXVWsAgG9JHNFf78uCDW1GL5PLFZZSAQGXHEyV7qpqXN4Yp7ocxn3LdVG",
  "key29": "3GtvhgPBpovUcUooF3ykwafupBLJSjdUMmxxAEg4ajBywTPyTFXNVkmqwEu6wtA12oiGKgPfPjzhRD228ua5dyqP",
  "key30": "3FxBGZtSfESJ1vDpQk8jFaYHHETi7rBSJ8Yb7qyEoSg5erF2aKtBWs2GJGGJDtbKzRxWtdo47Cmy7wcRjuy21RXj",
  "key31": "3Zibk1vNzUDN6EZUYfCRccJSZifTFBhEyGgKNZizNdwEwNzykMwHJtMJynkoiS8bBoDs6eHhvhz4JhGeM79zdCPA",
  "key32": "2VhJ3S5Xa97BtWZ1Pmo595caWrsciCyY6SgmdvkSTDRGXYk8PSBktnZwzABGC1buvievxs5V8Emki8v5hqREyRrx",
  "key33": "4Uk145WdfpsDxAMeub629Pbx2ureimkoLiCeznfqbyM9fY57iKKsh3js7CwFgYFGmWEytXNkSpEhubiKj1mcPULb"
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
