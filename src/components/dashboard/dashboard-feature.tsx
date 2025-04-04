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
    "WgrURpsrhmq2Yjkjew8sWD2sqxjxpqEj5SLsZ2C5ERaSm36BKe815onqYKbkp4jXWrcArRShtY7SracZHrRnK1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WXkd2wjWUqTjFzRRBCEdXZngQUKGMjLEi9pykEAS1fqxxPNheNZTM1FXWfrWx3nW6WDdromDcMuQuxYfKGiDRhB",
  "key1": "jXk3LVdeLjuhx1MEf7xAhPsRjA4WWctqZ9BonXk2BaSg8qhEgkgpzsn8vzFsq3EdXZqTkLpZcHNVduckq3WhRuw",
  "key2": "4VSbjCBfpJs2ArcVXQ1Zs2W8hmZhcZjbuq4SMpSDradxwpr894QVaSi1rm7YPdTLVecHY4PtBr1M2MN5msNE2DJL",
  "key3": "4kmVVfEa2M45SfzjqMKdatAuhjz61RPkUgm2jgadKxjLM3iNpcUMg3Azz4tS1MvLcCxXbihW8HkZBJx2a4YTcmxk",
  "key4": "4VmZD2NqDwpUL9KcPenEhS7zA8KvscJEDiZAEKgzanCUz91ZgmQkrgkwjt2z7o5TQvKsz1ECkroDGChuDJJ6Bdrk",
  "key5": "59xac1WEdANKJxWB1yC1LiSdXbnyHEcfMC9gGDPLn3FXqLKbH2RrQnzAVUWZMLEt8aMgX59RnRhCdEYwjKoXjq3T",
  "key6": "2KseLQBACkH9Zuvhcfv9UjCmz3cE2MrJ7vNCVnbhs8ZyKVprTmerCyhoKNDHyU5bBsYifT7fgFdPwobH5xD8Pj26",
  "key7": "5XkY2c8c5yrzGC4abbbWxASnBC8hLvA3VrzHhA3g4Be4Qqu1VUYjJVpRPSpSvRhP5nXv8DLBcrwTYQt3VafyCJeG",
  "key8": "2UVfoo6PT2ETcvXt9TtTwYHB8tMFWerNh1qYy9nhNhKkGUfPwLnReWJL3NGsA2EW9ka53hQ4tyHxSGWaVAKRPi5U",
  "key9": "4DpyjH5MxHPJQcYsS7YUh5aQhmTdM9WDjuKkqT7X9cTzzdbxVAZK2scHxgJEMqM8Vjjago2ej5vC47mgTziD24y8",
  "key10": "4t1kg7q744AAE6XuFX3oSHWFDibGAn8DKYj4VEQ1ya6P8MKtcT26ndYyWJQJRL9L926NYJ63ku832hF9hvTv2cR4",
  "key11": "5ijG11ztPZRyNbDtnUUgbA3unULhdTzuXXmZtk8c9Pg7WdNiKZs9QNJ4jRXTxinpeSsmgtUKTGynuYPVVVVHgtP4",
  "key12": "5NoSD34Y4EcnZRZTpE1z45MraZ3SPWWDtCBAFrxiJEF8NouC1XYeNxvhJGAhne5SN2g1mxWahVpHjLyfq3jGHou6",
  "key13": "3QYjmrzcY2D8CVW6Aukycq3Fc3Gn3vaMycdKK8TCNXi9kGqUx9Z1YEqonZEoesoUjkHbKoM5Y8Lvk2TPqhRi5q8U",
  "key14": "2WbWgH3ngKKHbrxcuZaZFQBYXAyj7myjKXQsyBTWSjwYmviEMEESVrFvnhYPMhh2PcfRH6aJxUBk3PAeQXo9GxyC",
  "key15": "2zogY6b233jYkqHWKRgyCouz2ichZaXTvkTdnpKmZh7BJ72vcAxe6Ap5oBHXpkbMCvXUfiPpK7eEci71VsNX4xjq",
  "key16": "4VHTLA16WNQZWcJrHMS4Govbkh1E1nTqabttC5R4857D8TrKHLs4njiWvZxnsuTkPr5Hsm8qbm7nyrZV1rmnZye4",
  "key17": "63VCEwJAfkcsLi9rqbnXpEmWPSxx9hvVcgPVCQC3emn5nBdi1e9pKJ3sEfa3sUSaca8Uwq5T2h7R46JEErJW3SeG",
  "key18": "3B4atqemuxJeSKWXggDAbbFrajbKTSFYj6X3oqYRoKZJ6z3n11Na4jCfSogKJFufMiMgXSLm86owoQCg1GGU7nvu",
  "key19": "3wCC6bSqi2SFfVjexDZghLk9XxXRynPpp61XZ8Vs1QpNq2WhsTL7NTPAoz5yeSwtiYDhyzpg282pFpKk9kb7rXgK",
  "key20": "45QK17nMMtrJtUoVzD81VF7vkVi2X2n3oo41mpe7xcizNCoE78VFAgH3yTToozC8U1RMLoeBE9y8srirWT7sA9MF",
  "key21": "3tJhdC3BEBeqm632QGDFpoJQUnh5p1Dba8Ag48YEFtvL2VgNLnDp2xgVwRxJW1VMYaEZrYvLmT4DsijqB3JSN5WC",
  "key22": "3mdaLoyqsWDkoSs8ToVYTqcRLv1Qz5VSZxSYebThcDE8F7ZHLhStB3AKMP3NREETH1DfZdYLJb8zLtpFKLJGRQpU",
  "key23": "5HPsisQxWVXsk5xCzCfu4dytvjYTtepKfuMkaD9gjgT9MoJquhFYujK2cVGxKug6twTVAiVigajHQvV9ymiHrhi8",
  "key24": "36SHEW3Fu8gFyT5Ra3wyPThgcaWGogL3MDMznxpQxxLt5KkMEsPYq8p5k3T2v21qkigHp36F3D4p6ZGeibtT8azr",
  "key25": "3ryywZmGmrZRc9qeAsS4fqYwzQvscPdtqrcjAZgWZkVxuJFFPCEnh2kBKAa7wopQhHW1arqauAzJHni1gpeTTUr2",
  "key26": "319E2WkbvqZ8AN5YNPDg2XEiApvKyxmWrJXXuqhVUs8LWpcQi6DrjFHd6Ru6a7mkg5dDUQQjUMeEenR1Ay7Ge991",
  "key27": "4Ki2ndHUdjpR9HqLezDHNgVuGvFYqFxbGzpcFQuKuYSX3TvT9v42J7w7diFKKLba3CBx8nCHvYNhkLXJd8fyNiSg",
  "key28": "e4Kt74Zq3VjioCX2vZ9JbPFn63nTYvttpwMHBMt3JAJ6FL4v9gubNHnA2KqsANu9nn1PeQUnDTdEn5W8ogoaTZB"
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
