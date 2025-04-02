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
    "2iTL7SbidJXgitDpRUiGcmLFxpHgcxHmWEkXmDJEdYuh9CSwuLFsACGkD48JUgoit3MfYuhzvcxpn31pR7ikybBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65eib1LxzTuzP26wN8FqnN6Yn1vea9kC849gLh2ZoUkcMrU7oEWGbQvHTMBiaBdCPFyPmbUJocX8d99bJcCFPeLu",
  "key1": "4Por1ycV99oDyh6EgdAkeKx273Dn8LqbDZs6CjYQ24GeGiwXy4a9CnU2oR8hC2H9Ddbsx6cayZShL8fPwXEgAkn",
  "key2": "4k2yLsTeiE6vg1SFZ6pewDSX62esQZe5XwUEDVZgC9kx9pNEsTuehHU6z7n3EcPztrTwjatXzojbEUV8t9zkRCfa",
  "key3": "3c7FYhUW9pPS4NFQpcFrfB92eTmtbEKRb71Vd3ZRXDN4xCCgYV6HQrLeGEYfjkpxZu7y6jiSmS4S3996MG7zFM4R",
  "key4": "3nDyUN1hcaRumvK8fL7phzgjBJaUtUQ5RfujCaBgrZUWVdYtqTdbidtA7BtPn2BZu7Xv2Xg6uAUDNdKnJrMkyVrM",
  "key5": "DZaazWnr1ppfNyPfyqzyZssgkiGKuV74fmLgaiAoc4Qd4emQHtXjXTqxzT6ndtwjsPZbb43bAbxAg7egKRzAvQW",
  "key6": "5KGESWhCm9J1jkajb81YQEC7eGemLRMU3WfLfdxBY9YexsQtwqvrGT1Vos2qMXT8CHmN3c6wFaS64S5tVLUqFyXS",
  "key7": "37yR32CuqnYGfEPXubTUnUcijeCEd9PCfx162AkwsJaRuDxmV6MujSFY3hYpsYq2iKgE6zCFzq84G4wtXvF5Sdv1",
  "key8": "EHDm233rHUMxw4Bc3oSY9Ahfvz8SCVQiJC8NVJBC3ZuXmuAuGZTf11v9Ff9xuGzdntcb8kBFEFZwumUwwrqbEcJ",
  "key9": "GxPaQAaQmiGkUhfjseonG4zusTZAcPrkR3N1wceY7ePg1nK5L3c8HtytEVdfWSHU4XjYEbauHS84SWEnkhj4UFx",
  "key10": "GAQHAXUnFMt8Myh1Av3posGjXRUnJTfd7NPyfivbSNYCmFFwd7aG6LnMDShre9bnFQVKjzs72GvxidhbFg1hxRA",
  "key11": "4Qoca2aYea9tmpk8V7eAcPgFDE5iABEMTAkxBBxaXNRirTn7SAha5s9rN5vGW4DhTXHvCfoJR65xJkdwdHN1aUw7",
  "key12": "4WucEvQyCBE1npKDmrr74PrjWwQaFbmsgtMu7YFqSEdYfT5YQUzorAscFyQzDvve4nz15tjNkoCsAtufMnNafNQ5",
  "key13": "3eEUHYDAewjw6oZyGrmLcgKa5QspmPDubtaLV7vHWq9vU3d6WzTU8uJa6G7QzTzPVwdcVDgisukzG9hp1etEA8wG",
  "key14": "j9RtzBEJPwKej84e6YE4T5dR14e1x8L84mZAq179oZQawrmSnwfcEoUFReBuo2jUfAWnvNZ5Yf8wbMVmoPvdyCh",
  "key15": "48ZDhsXaKpYNiFjpZK86zrJ1x48jDe7ggReXQe8zuCXEkYpSmTEESX1popR3RwxPdKgWL54rerVyZb19Ud8orscs",
  "key16": "z2EowbUak3m5QzFmrGA2zunnxyWtmmfQf7sMJH3w6pRqiWanQHW3EBDeu8cvVxYGVKMF4uYpMvxAwtKhE9sB5mY",
  "key17": "4LhMtxtSjQtNaxWoMrMqpgx3PMdAuYi5rz8HpYG1dK6Tt9bBsDrcom3ksd2DHjkGhGUSMsR6K5qpPGAFAie3JZ8g",
  "key18": "FdbPwBMpSN3Mo4HQyF7H9NFKX5JmdBWehbbvAccwyixfPNJGjq1USLgoXJ2ccybncUJokDn5w8D9pEbJr5Eo8G7",
  "key19": "4X6eVNw87hoQHJizJZDgpS5fPiCNdfNCiXoY5K5o1y5oiAqpYigpffETtqjB2YazAH3syWuBCQ6y3ZSvtKQB3K5A",
  "key20": "tE7Y1DvRepSfXhp2CcN5wPoVmbM2sf7AoKsJKZDoo7g1F48eEChxDzj9qb7DSn8vw7WYq42wuRPSwSdMEHPwoxY",
  "key21": "4FYFp28QsyzSZ2kxdPuC7DHBJpXmGtUTvBF2hE49wVEvFmXZDspV7NzFbek3gZjWtvgHW7yd85aaULAFKZ4fE57t",
  "key22": "fYgaxE237UFdAsBR5upVmxGWbZaVahttNjBeo23XxUZLUeWVKoYcNV3hL62iuH4K7Ho5j9yr2W9cyZYo7g47LCJ",
  "key23": "NxYuJofkMV9zpfpiZXSJqm1CaW9QAFZ2w1s2gsU5DxpAdWuk7SQdBhXXufQQaKjYFgtMn5raTX6LZDjKWthsG3q",
  "key24": "4Zp2Pi8RuPsfxfDp95jQCxLjrhUwNhok9mjDV8gzNksLdpHqLBi4z6YHpbzGRP4qfgq4txw66vBs1DCACToPytor",
  "key25": "4cZnQYh3PGFxdJxVPg7FxSmqJFWLR7FjoEnj5zxjPtWEVAkkAzps8QHJUJFb55MrNhFm6EJiov81mrhAQuR4PUNj",
  "key26": "5euZVbRHwFAQno7fWaQXG8jhLL5cqCfgm6VpCD7JDiXWjf7s4jTmhDxJMeGkqLRcKVrzsxuAtAQ4J1nCsx3RGnbX",
  "key27": "58ae217zV6qAQuPA8AsguQieFmnCqijVYL8zvxyCdSRvqKL1YwofJ86Nc2jyhb21GJXRW6p8fs2PaLEJT66TtqJ",
  "key28": "3K1kwMvF8sLqg2LcbWktFYrc9Xh7H8jawBZiZH2LHgZqiajZq7uAkSHPKG5HHjnTPgKrAEeDFL25m5mME8W3c6fs",
  "key29": "wnsTx6WFCQoeCgT3CX6UiXosgXQVjcXmAYdbQBb6hRYiMGFsC1Q6hMLHsEceDmkMugtTCZsNNYXRn64QdARoQ1Q",
  "key30": "5C1G8GuN9x6Pq6V53GvC4px6j5ZY9TJ6YT7dJC54ijBM6xJacVWiw7SSrBvsEGA6V42shQpUk7tCBPWtJtDXexyZ",
  "key31": "2WEY8dx2oXNNWVvDd2wT2LsbkjvZrSVetyCUYNCxo4svKB8Qx2MzLb8H6Ai8tiNv2dpiZdt93Z2AAJpEJr1Dk2ag",
  "key32": "2YLSmc3pyXGykoej4N6DDHXMsgMGSrKEBd6QuZ65K4vNFjDGngiVdiUE6ZqQssEgae4wymYSiDBbRugQnHPfa4gB"
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
