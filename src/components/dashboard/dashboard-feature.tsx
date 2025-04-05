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
    "53MJet5arcuLC5xKJDTXdJ2LYWbcEHcTxTkHJzWHfY192bxLszjFyNVJ65U9BUGfNuzmXeQxHVpMbwZxKxAHZgf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGZSrAuF7KxDSRLispjFFP1S8ge7mCn8JUZa9zS1nnKFdJvwvWpQEQB7vLaYqArvbzqm6rtBUUMVWcaQk1Rn4Dm",
  "key1": "HVXH2TLyXbSVWUHNTDNYcMmeLY65wexXs6k9W3FabX5YxN4J5GSz6Jhk7NHBrCEVRfVy6anDdeLdKiZ3mFzYhyY",
  "key2": "3s625je4xnVT2yyD8WnxTGLAaVw6QctZZtApNsxM7JLQQLgwNqrsjz1kek8o27P7VSyvLvyVWFXVPEQLqA9hL5Wt",
  "key3": "3ADGTta1oRocaE9imGAUhWN7htcJXDd2XzU8dze1bBPZvdbwYdGaj1B6pme7z4TfndXhoRMZ83QBA52LCsCSc212",
  "key4": "34rtNwJurZJ7TMngVxy9yatrqp9DGVhXQZjgHJPP5ks1bLsYMqQWdqbwHKpMm2k1fbgxyUzcPgFsdygxBV5tiHAA",
  "key5": "2GXycRdDEjpcb7AgmqaxuD2T76inDpFFb1Rw58zzS2snMzZDkRYcqKrbC9GD4kDEJQA6JiHK3dpbkfJE7AmqDNza",
  "key6": "3uFkYhTm9N5T9yhzHYVbDzhm2YCLwjRTK728iGtxG5wmbcn6N1Vh1cjwz91vdAzHBizqokYasmPXpYvZU7neqhpA",
  "key7": "37w3uCd439Vf4hVzkctbrpEWeH5awHa2LpUkQ337sdbpfzWDh4skvrZab8o7BPBiPjEN6ofsBh6WzV7do7rfD71q",
  "key8": "4bYzCy5p8jUtDWKaqjkwRAErB98nNuhRYcifYVCKihyiG5mw9FFFQcYDh7nRYik6Cd5NL2nhi3TiCromd9ebdjs",
  "key9": "5MdRkhgs5SzqZp2mAsEqkxnzWiLDcg77GGEFmdRvTx7gTbddMzpM52UevPWPnuk16HM2hAmyoGUtgUnGeQCea9jq",
  "key10": "5VjTKYwtqrmAXzGoXkKQMeFoqGgWSwLotygbQnP1poqeibwxdpmuTuqk8S6qeiqJ1tU1eMHz13Qz9Mz1bZCDJKnR",
  "key11": "3cjYCYR8HvkmSJGHvm2NBe8WL7yrRMWJKoLY25j2z1j9ekaguvx9tFKw487ZAyCA9mwkryE4hCGc4Xnop9ZEQpjD",
  "key12": "2rgeGFg2qgspL9TGiu1VyHozD7RAxNbg3JGncnRruMbyPPCVDGi3UadYDCNGbNUhFozVA4ma1MMXj98mxiGrbnWw",
  "key13": "44mT86TZx8kHWBcvs2Pb1qmnTnWpMqn5urxAd2DHE3LBpMLciov6iT615HvK6y24Tkyr2HzjPQRYzYYDK51YyprN",
  "key14": "EGcQg4EJHuSKv33whAGhJbn1G1aoBuzUB9JP5buHY8AzK97NRU2sGdimzMKG6V9AYgggDYxMruJuyYgvGv2Moz2",
  "key15": "3vLxcjD5YznypRZLLDgHcHo1V2zedso67fgUgq4acUfoJS1bNwwsBagH6TJ4qC9NZrYKe6voD3tLwxzpeR3PvrRv",
  "key16": "5p18DSmKEYguEBo1Pzt2AKbmrDmw5S9HEb7pXQqnQwxSEDaipnpYgtTue3bbY85UGSjgt2jMC7f4q9MB2VTAv8tW",
  "key17": "H7neUy2tugLz3ARX9MTsHAirzFmhjCaVaE29Etnp9a43dnBLz8rzGD8SeCVLqD6NmFewvNobbzLGWuY1N9SzRup",
  "key18": "5b1n6MNF1s8ZjWRYnfRBep7XJvf7ns5yEnZ9Y8iS8hn2ZkNsjtik8Gu2io6UopjYsEqNa9AH3jvhnwpRNpckkDo5",
  "key19": "2H7UcHkdoASy44Jra2QZJTX8ZnzcKtEoeZA5nE78NGaYniYujwgJDEgGNfGpfunBLG7RjQR3vWemhEur35yEGWom",
  "key20": "4kGm3owdWrRTR8KbbdaNkPfzEeK2fXwAbdAMVWAjq11kpTdDpELPi1WxXQ1w2VVH9eouRH2FaY856K9eswQsB1hs",
  "key21": "5vQL4JwejtVK1LeS3NfSUH5RtQZTpWHqVbq5pvygpStH5qwfBLuxT7gnyzjx6yKwRgyVZVzZEoTRK6wrWZM9z5Jg",
  "key22": "336t2wd89uBiRhUXaEvC8NaM37Y7E8yqy6vB12awCAyWF1Sqa8CMXz4Rdh4tMW6XE1aBSG83vVHL4VdQv1pMi86w",
  "key23": "5tfFNNPrr1VdsL5xongvEofLnpjy7i5MmBDDbK21PGCLw6GheaQrGB52tgSps4XvgBruGQDjvdS75NtbXKB5UMxv",
  "key24": "M37s1nassKXqspppNaPmvpczhBLAAAuCmg3tLEUarVLrHEckBtxbcNaTgnWP324Cg8pvWUFSsi2G2LU3Xo1b9vH",
  "key25": "2vShqhHjGcPWYMvM42cXdD7WaEvsEzKjJgLRC2J9JCkQkoRzvbthwq4B2ee5aYdUpPioHaKGVoymjbUGVnHLDncn",
  "key26": "4wwjjXb7Nv2RstdTMa4BroA2CyPr8kcchcRn9pqMWENEoC7FxFeptNhq3fk3ZjH3KyKhxkdrBDRVTAwuD5DoBpGQ",
  "key27": "MyguPHzQJ1mQq8HYJ3WTNXkvgwXmkpBcRcN5UmSPZTEK14XbHCVuX6DGh4VqBaNPGy4Fja3MK7o2HojTBkMz53j",
  "key28": "4L6CwYTR9WLi22QHFHnZTztEJwKr2moCftNYgV6pJvc7ukbu26soutqxbGo433wyfwGEYokUr8gsJB7kdsyHo88Q",
  "key29": "2h4YGfZFxz8797Mm4TLzdPxSWCxh7U1vPyh8GNS5hihyBRzVQBGXKmB5CutCZU8QbhQt7pQM7XusU6cw3pVv3DSB"
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
