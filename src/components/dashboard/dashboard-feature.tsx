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
    "5yRmCA9HLvD26obBdJzvsyooEinyKyYcARmz9pU2SHoYW1Px3sx1pkWCTQthJrNSzokuiJwaNNo7vmW3KtmdC9nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65S4s8vx9eRd2TN1p4UNUi2oZHXj6Cy1hzJSfzXHcYprQ6UabpvaJFsVeEE4z9LhVdXfNJmFj4eHh6dS4s7rG1W3",
  "key1": "2WNPV59LbfAYMmSjJRFixMmu17k9Zhuh2mg6bKk2ANz61f9GEgFH3DrNsmpdpkpJA8VaVSPVZozEh1n3St12xAj2",
  "key2": "63sNetY6eAsZzXgnDKVRoE3d2PrVuwRLpzvAxWmgTZPBLwVBytRrKviHr3g66xWvrntCKnu59zEzu8mNc5dgyMWW",
  "key3": "3ngPvQ4GKDqgBgJw5ZHRVe1rnNjfwgbVTUdsx6VcXRHAPL5zSenh94D7GddrKKnvUrtyvq9HHxLkUV6r64MYz1f1",
  "key4": "YJYGWuBPnhpMhRWGLbQWnYcW1XWGSLNouTEDwx5RJxs3WtNksXafaMExBMo4zEqwTvYMF9HXn6f3CBw8c4BHaJE",
  "key5": "Z1Kj3nCDd5o59ZjMbSJfk14pAaS1ZDMuPmorsjHQFuGtkKDAsoD4tQnfn5rSzWz9P72QL6UpRdtsBHUT77pfm6j",
  "key6": "fxbzo7aKUuofuJHx36koBeqsf4spjz7dzN4UcJubi1cmPDH5EP2sfFXT4y9ee25RbvZdn7rvfPP5m8mtsgKvVig",
  "key7": "a3uqdWrRMWrJZ3CV3s9sqPixFn9WPhfJhhdMTNNu1f3bmP1iY37Ak98k6W3YuBjwqdKqwb6ck3cA5mJhLQeBes6",
  "key8": "ZPeFDXhzGzSi9Am6ayDFNRLSKGoX8EFVqE5DzBUgvFcTgiZ1SJgcT2BPFqpKucNjYFPek83ccSyf2NuLKfnSTqj",
  "key9": "2BVTTEvc2n6Z1eZ3YkRRNbAqGeGqfcwacvvCaPEGAgFJJGxdw5cxK2us1gj4ERPvQE9G2paJdRgd5E6ZoV464rVr",
  "key10": "2ypzDquavqmRiPTZ24pkwEGcsmWkDWFeYQPvpqJTfYJ3zPcPNMEc4nSJhVXSAT1FwDR4jTSe1Psp13Duny3Tjofd",
  "key11": "vaYi67A6odzJje28zQSB8JYQnjbiDPoEiMWS57tqJhUv73rdtntCydb1RKi8Zadu4cCj5zESJTLs3e4FC1tdZNb",
  "key12": "2pnvw26nHK2GpGf35c6je8kpUrRsBPjSyFXSVu6RW7fu5wSciqMVu75ouDKyCoT1rp7akMKAveiPpTDNStsAt3Zi",
  "key13": "hu22Fd6V4997r52D7uVM354kyRow5MFZJTUxJRCMdHqBo8gCVdENWv9Uww3d52E9GmPsxQNRsQ1rURLHLS512aV",
  "key14": "5X2LzZXMaHHeh5XWxPLxqtbuCrKx6MFC1nvX4wWDJazpHvMHRJ2A67y17NzGzeXz8er6AB1NHTBqrwHo6ix6uKy1",
  "key15": "3bStnJv7VWG4KiqAWZ8PohWniPAQjWNqACW1Mdie4yG758nH8bejnrSKzzLFY65AH1SB3PUZRc4rNtZ9hK1WDrii",
  "key16": "3ip2u6h6CnyRpz6qowdUn3677j3e1LBzLb8gGNCfJsNH74e6AeLjm8W7DnPukpm4hrvTNMnEs5W3QMAZ85LZtj22",
  "key17": "36b4xAQf57tZeRtGmzKdzpuq2p5EAfeXJRS5Avy3hjkE74u17Jc7Qfmzu8iE2g6RQUSXEhGzuhKo1EPD2PJv76sY",
  "key18": "3BmPBdKN24BQUrPGBjWMCRoCwsUisPK9ibCHJCXEB5G6xn3hEoXoW8jtbAfZ5sksFn5ewZjCG8xgut7bYQE3Jzqq",
  "key19": "5UZURPnHbEuiJWtFGYzL8qmP47WtgwamkPDTbGDKrfpKgawkKmwCfArWaLdwCMdB1urVDC7fSP4htT8dZynYVVNw",
  "key20": "3mpQboCdXu8K26MjKshTBNmebTfyxUxA9gQhf7wQn6JBm1njLq9qeuB776yq51KdTyiV8rSFKz3vaoj4aQBxGA42",
  "key21": "3qfa6Piw7oLhdQW5395XuewxQLiRiMGM9ACHZCZSAUWrmDewfkN3Aiirugh17CXmW1giQLJiA2EbtKn11usNM5dt",
  "key22": "3czbhqXLbHm9zTAnT14sExsgh8Xs6KnmxdcXMyNF2ybvoQwvA1BQcqG1oSFA3vgSjY7WF67jVcw95DYETnu2Qwtn",
  "key23": "3k2CbTVuiHcEA79S9Ltm4NQmrHPzgXP9Dp4iKhL9Q6XTVgTXnsDDfjHdWZ4t9kkWBGXuJgZdvwjJWHztM93NLTaR",
  "key24": "476JGfC73Nt7kNdwJoE7eX2hbXe59H1qhUoLHKxj8BjjYbcTxTccKvDuav1A7G77fTiBzG9jZZVmdUoDWxGtAupV",
  "key25": "4cCp1CHALU9kRgkBBpCbm8812dmuFm3nxJgMsLvm6yEBNGVq5VkGjoBQ2htgsrgJfLrpU1FBy2XD7T7YQcPT88aR",
  "key26": "2wYaDPvSJdwXDokqwo2j3eGMzWEajaiWhRB29jKe1sbz6fYXpwnboFuWehiCU7rQ66KNUHJeJ2UpG3E4RRriGVtH",
  "key27": "5MGHoJT2WiHxAtNtqDCpWkK1NkopaD2potibHUwRZEcgeUr2S1V3PpWwhrG43hgJSqNKPwfY7yhRCSGJ4htbtqNL",
  "key28": "3wQWccPZCKQMrsXCbNxdMrRyccpshYFbwRqr4DVRVYMaUH2cRtysPczhZFMLCDHqSUZfqU1mvv4L6rJ8rsy6YG6U",
  "key29": "3JkK79N3ph7ihGRyYyN6SNre4gRqHGo5v6pwd4uUAj295R4QECoFRyZ4T7vczTyr8ptrqnM3yEAoG5N7FpTvPfPp",
  "key30": "3kZCoHZJAkCn3K7gotiJxjuY1wgRUZrdaZaV92dAKG3FRmLftdCdpm4ktha5bbY4EjwCwJ58G5MFbdEsj5JC1zp7",
  "key31": "FJfYMGUnBSbPYCssdyvb1AQFNoPu7E8ekFEdKfJRBPsnR3ovkR4ZZVmhWn1B64uqSUwtdXUveeaNenQkJrRUeRe",
  "key32": "3c5ihVqsitno5SF87cX7TTh1bjX5agj9rftjn1EG4kQWrpH6cB5ypDgy2JxmvcuR1Ssw67swbBGZsvp9T1iRBZd",
  "key33": "34WbvZej5YH1t2LpPn5Upo5dmJTFDDbD9tgdLRqA9ESYKB2cE9yV7DTEbzxH2kUs3fi45TrWZS2H6izKYa4e7sNK",
  "key34": "4he2XpYEiTfWXmcsacgf7JL26CwtpJg8hEBGoCz58VsRDDgwEtgZA63cNqPchdRjLN8LiK6JsNENinVyugoKjjcE",
  "key35": "J7HhHNikGYDrcEMoaHf5e27JekJTZ5gcvAHV4W89WafZTqmcdH6bSFvheR6jcsyWSVgNechcAYPv5AGseMLZRah"
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
