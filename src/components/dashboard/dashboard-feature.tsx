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
    "2KDkR5Vr48QqSRF5Uj9V2AL1knpLyJqKfhJXnCacva3vc26Ut5eNo6RWrCbuSEkfyXPcswKXE2qu7VWnuJyfX1Uj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1usrtPZ7g94GKzFTxnu7Q6qcJrqmWLnabs2mG6Ko673t5zTtH85m8K8aviat5yeDgnw2C4cs8AgHccpdyAsCGy",
  "key1": "39ChFHpYkyxGuzytUF2ZWMzLTEkhiaLTgeokA8KEwPtpLHhes3Wow3pU8Awg3U272DeFb8oF9U8Cx27nHqNsebJ8",
  "key2": "4oBG9dkZLqLsi5Cst5FidmgBFm1FC4JDSf1TxsGLHEX42Bg7suRa1uPYedQFuf851FbeJueC1XS5Z8bG8kkSVuQV",
  "key3": "5iPxAbhCDoZF63A9vyzUydkUNqbpv9dqxxPrmaV3JCBXpLk9Jsxh7AKLNrqcDBofBCiD5XCzPUKxeffTV9xqEruj",
  "key4": "2JhE15nt22GVU7mpaG9G5DMUoVf4yRbUoZJ3gJXQKkUsdcGqY4Atud5JxXJd5Aq3E4w8StnRXmjgp7wUgeERk3UJ",
  "key5": "4fqZ1p2YfUxFQ1b75dJWfCRAJ3kwNxJbgo78vyJm6LavpE4kpiJDc9fzFedEy9mEkcpjqFxdZ23NPrQkYuEktAQd",
  "key6": "5exJddViJvBdnyKS4KvDQmZvWpPwUjAuGQpBVCsvkKcdmVSUcdJW1XCiYGoW8At942upoWXcsXWTmMRoj8C7ZJkV",
  "key7": "4uUiEfWaRPEPxsoKYSPkSoF1krvS6oSd4nBsXe3v19hZsNaS3v3cAcxM87VPh5PcmhuTKm3ZHjfV97iw6cR5c2sb",
  "key8": "67fFDSpTXvzudEhsJ8mRvyoCyryD2HvTtWKiMVSwX2x28tFBpdTS89ydEHJ3xbGddBybbq6ivtFTXAnukjXmuDJ8",
  "key9": "dEs4rZFKfDZyPB1o8uGdpCVwffvPbPerK2gaBaL1hGJ818L8ixUTkKpWYV4Dj6WaUZkWrNDMrhw1niMDH4F5j7L",
  "key10": "2rWK2UXW5H8wEzBnNEvGVKPm9KBhHWV7xfErivXTda621dvMpsek2actRXxjj63ZJqw4eAyTdXWLeRLnZMztgJFS",
  "key11": "3osDbJ1FShVytuoUYqMuP8g1zTAUCVDKjM3qYvUKoRUs2JdYckDmPSaRvzQfsga2rY9uYb9P3cnMhwjVPtL71GNg",
  "key12": "4oYEHuHqQQjF3g8dEyhg93Ux9MXMVbjjfcJH1Sf1D9EMcGfEhbYDkmjY9jzhAyY4NXETpCgehGqbWeCN9taeU2mK",
  "key13": "58zKtBh8LSoPoF7ktnzKR6eT7VQUg4chgxxvwq91Ner1uTdtjN8GMwgWiivhcpvmymgPq1wMoMVLiZxYJsPWtS9e",
  "key14": "3NFDqfSjHPLhgzuLJU98Ma1SVgVHrwxCkEK9E3yVvdccy8zWr4aUg5K4bka3eUdRvCaXXiokpWbHTyzSKH38MC5p",
  "key15": "5zwPygVYEnSQB9xM193899CDpbW8FSX5GwXWpbYs5pE71XAQgR5joqESFYXLhLtTrCSzdZx7UJDtYYDJvZjQauF8",
  "key16": "KTeLLpY79FTusJ7gN2SpSZJPCysBQsX1yFSr21H3uXZFeTzjpQR9xy4cB7CauVLjjnSPpNUW3ZWm58rxqDJypGc",
  "key17": "4G5KbMqYT5rv1pQiFDVwYh1ZGTpqx3TV3jRBoc4HGMQZpKiPLomjVqZs64MrYa5kYRXdxjYF2TkzeZ4LtYTCX8QF",
  "key18": "5mhEnvdXeDjUMCK7qDbpWK1gADmefqugaDkVe4MPuwavup9YCY7qv1EbsaJZFzikJT1bUx9bcuH2R65ySBHzYgTE",
  "key19": "2AtcDesSxw5rzhdGd8xGbpLHsShMt4j8v4hJtH3gBogpb4nicTHfb7KkEe7h4Zdi9WZxwvZdb791b2D4Q4Wq9XVh",
  "key20": "284th5RXF37K389LacC3x8rrJQqsso46pzj91ynHzgKh8G3BY4LfrzFKrUWsXZ1dLiyGa2tiHCnzwvLpKTSVRVP2",
  "key21": "3eT2rkQiwajmnBxvVm8M47CxZNFgcxL9mjC4Eznr8gkEh6eJuokMg6Rvn88J5k6smJ8BFKq9KqnFdTCwZzX87nWf",
  "key22": "5MMEhQiZu2bJ1ZefaDMzRq1QvzBfK9aJ7iynXsgLuz3i6gFfd8tehxfc1heyCWuRRj1bdr7GugB7ruk8xkDdc6VQ",
  "key23": "4AgU8BM2xAHreGNyqSstF7oFTpqinZJzFsWiSE741na3uEwCQx4YuNmGuzcxPVd51UnQGH5GHfjKdKd7cYSQfKxA",
  "key24": "39BnSqGXwnqGRbHaxgxVWSEAz8mCNTrHzpJMJUxBgqGe65iPnR6QosHRSJnS767fUvLsxWHgN6NC8NttwwjKNH8M",
  "key25": "4NuXqv7GnsGNPkduGps6tVKceXHjppcgxwRfPwbYUzRsqLRcTS4jMpXvxKLiE3nX8Bi7NrJNcFs6K8wGMGYjugZD",
  "key26": "4rJYxNjo5x3Vttr52h7Rc5cpTBYYNZR6uYS8Hpwxm18URZDpuSowXRSiqgxhbqjyT81WtSx5U34TZZMRpMWWUPpE",
  "key27": "5ho4jPK7h5NgC7DoN8xuBpgM1kAKvGq7Lx331H1qBAc8W2updVa9Ra7cGcEWmiPeTLzVtSjDvHtU3VRFukjWdpsC",
  "key28": "55FX7kc7Na7f29K4Upjy4ex1WihdivgKxcqiGPyv44FfYiA2EfLsNNgaAKZUNomvJTPr1eUZriDPLEkWH94xRpPe",
  "key29": "5KKJYQESvEcUd5CVje8KkLZffBeer4WHLoS9jUwsSLzRHjK8C8aZjuyeCTVvUCRipZEg9az5HpBkREs5767ovj2M",
  "key30": "x4X8AqnLZy7sQy9kLNJb7g8v61G3JLoHUoi1L1rRSgWDcHEMuz65ruHUtEhThwFYneRchZzsXJqnCUtKTeD6kpM",
  "key31": "5eCHmBJSfXFDZyMDHQ4rWqLnC9G2sY5j6u8YBh89di2uyWkbiGammmHxVM9czPjHTgA4Ry5etzcM3cZwsterB5Pv",
  "key32": "5pmJhz3Sh6HG33ELjSAKcEznCF2wNDahG9MchRyqNtH2mdc3tVBHFrWbWP5fdfPkLPMB2A8WwuyC7CLKfuxDEF5i",
  "key33": "ELYs5cAEfv4w4XMgZuhR1HyU8aBzRzY9bN6RWLTf6L4SszXbuoDYNRKWLStmFf4TVzovZcabdFdewcATX8dwvJj",
  "key34": "3gDpMkmbZBmc4M5xzvBBFb4oftNHQaisDkiAJQBnmrTqesF8HeBStwAPdsAyWvHWbpWS6x67ojbT5fWRWppfCCAi"
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
