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
    "3WU39F6bCvJ7THEo3tSNmQgTPpZtKoatBkRELpnSHYty9nC7HdSKmTsD4CUgHxAWwq4WG9iBQWJWYeoQqhRWtyWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k3Z6tHJ6354RRYyXCm5D4Fi8chUxXDaC45nrtuMvR36zW47gHKqUcBhRL1CY6UpYGskUZJBDXt17Kyj5zwNFFeG",
  "key1": "4yJEkh4F268BPwuN2tbpNV6VNUJcG5t1C75fw1ExrVZTGaGPkg5RnZytmJqB21jLe9RCfVGf45MHnUmEG9MbEQJj",
  "key2": "WYc4f6VPBSdWBcMdcnkYK7f14ZatcUUjavSa7cJCGudMppocaJjR1rcQwJ7XeaHqSpZUCD8iJUJxzTf1DQza982",
  "key3": "EwzhTdN2CuALHKSotdgGtRdSdtu4ik8SjLSM6XDaRmSx9F4tLLfaehxdKovDCyVV24Z58B2moqcn3DrEWsUPfH5",
  "key4": "2URnNLF2YKBk8FYAcwxUCZxteYM9Tknr2i4DqLDn2wZckodgASHGVC1ReCVE6VZxw2vv7oK3oihia7sTWqS1N2Rd",
  "key5": "5t6TyaQ3nB49J7133gDr91WRzZSBDbhSsdCMTrf4B5is89t9abSwciwcYNjWF88S8wLzAeyABuDyTg6W1s6pe7yr",
  "key6": "4Q9N639AZw8aJV4764WNPfegJBV7TQQipRSbaDepX7LeY4kyzrscV14xRGS2fRqvsHoTzm9rgSKCmQqpH4hGkz7N",
  "key7": "2heXDyVzX9eWMyjKYDeW6T4YpePsuRqm8cG3M2ioScNcowRYVmo5HmRydxvyqe7jR2koXCNsX4nZDPxbdLcMDGgQ",
  "key8": "5qNdEbvNqbewuFw1yAKPc1G4ErzupUhbGW8KeWRPC6uXeota7xFcdNcJQWFrBNphPTcWTP2uTnftFCwnehEYkZFi",
  "key9": "6R1BA7g6cXmjhbBkJmheYt6R5CA46qpjbBuKLwDQeY5nNnLC2REyEUn57Rix7ix9Ryv2SYesdVCQS7PmA2pT8Wm",
  "key10": "5dDSF8EAV2TSwiMhJ8bn5yDfSysM1wwFj3j8c27Kx4epJnfsyWv9b4x6VndcfwJFAsgN7qU47VeoQhHkF8AGRpQ5",
  "key11": "5bLxoAk2V5ZsRpBe9JYZZVx3VqLVeBiEe6vVb35JoEZ3HkPVVvRFRcnyXXVoeBSRKbq8G8jDp4giEVCn8pC1SDBv",
  "key12": "2RMVR7kBBxzrj2Wu8YFNcG17E672Ri5UvgL2T43hEqVMrqnFbqeqn2nkC9kMiWYEqRWb8izYj2WX6t2XQii5Yb9p",
  "key13": "9EcYMApQfxhzbW5VxDfGPrijB4CfTogwxhqtFNU7g1FszbCXHTrN3f9uFQK7hsbfUAPQKJevfig1e43b7yg9kDS",
  "key14": "5bsCmVzuNtFT54t6bhq7iwqrJFyczsfwH5QuBVCghsmEhuamd8SSv8b6jRaeN1vBR5kMEsZcfPez3Gee1vwz7GF3",
  "key15": "m7b2JqMnVWinz6ErWXa4czKs9SznTAKW6Jt6QCj1u7YcdHvTuwB3avr6y3SkhcMDrWhmNWRuuqB2ZWX4n7ndhfH",
  "key16": "4FRUXSPQisL6vAg4b2VsVojBwUnE6t15CJNGhirjEi5zs6He7WMZoqzkukdVTRPRnrmSTKdAbLBoS6XSuucCsYQx",
  "key17": "5jDTfdRzRJ4jDJHNo8PrNmkboUVoejoabCPUA3LimnPvbJtvEnwiLo26ZdEmNyfMu46i3SEqXT38fxFjmZRwFzjj",
  "key18": "5vC4b6qXWLtsaGmQoKdYd3Vr9k8QTEEYYLKvsdVsH5xCMR6LZuXJUu3WmLkuGkz44g5ZQrbLihoWqR6kxZaR3rcH",
  "key19": "34tp1nFhoH8WYL7wmhN9yuXfvgLWAjUbpza7fHsiQpLT4YriQQabiKkvsazbdXLypwyTtxFy4VJyGkERviaGZzPz",
  "key20": "5fFVgadZMwk2MNhPVzq7gtPZwcVtBTgH5WuGJiM8mCnLrbgNH4E6tDEycvcEyxwivo21a9dnUBfFFxNdnBjGnCLR",
  "key21": "3pvMnVzXuwDboaFq3Xk6tmj7Rrv5SNJCXscAZz81NRH78Hj6xPvh58ZxxmRoar7Ky8r1esg8YdBds86hP8Wikzrx",
  "key22": "26dv5wRUPdcvXizX7Mc1DWZECHzXP7Whd4fiTXDnoZSTFbvw3uPB42BuggH9J5S22D6kRojNz4fZjwoLBrvnHFWj",
  "key23": "2j7zigXvzbiiV259LUDs3HvBZw4hpmjP3CXfecKqTUPQRmkx1ooR812dWdEn58pWy2mqbj9G3uBiA75XKxkxG4tE",
  "key24": "vAAJP6M2AHvr5JAXZfRx99ZYRpZmh4uAcYbDnS9PDZGH3F6317h26DWYUyku9xC3Ym6ySxGVctbyVVK2cGqzzmG",
  "key25": "4GHZpn42tD2UfDKCZs3QNyuFDxfK2XWukSHXaHeaT1ANNpU6WT9fSFMHvqJZeyAE3idAc7NNugjj6dcbKNaAXEdt",
  "key26": "3MfisgKffAKKbEn2XNr7N5nE485YRDitrCTS9Sgegcx7XZdetA9xTfStfMZ3xvnrX5Tt2GxJNed817jiS1x31qig",
  "key27": "4Lc4yfvB1QevvwnZiuirb5R5gNBYuVK8BFM3QgXpctZ9xUoTryu3McLkjBxPdXd2pwQWLkdGXe3JVSvNSu9iz5AK",
  "key28": "2iThVYPc1TSWV6LFj8TLTHMHhNJ2jNKrZqyixXgE593N2NqSMejbDA1osccfg5J7RAQRwLqbinMiV8ae5aiNVub7",
  "key29": "46RUZLZu5jUXobZRYwKaMZBDZA6EtVL8e8j7MwNSgwUErGyvrAeVWNuRhaKyaUUGdK6L9ntqQexJgDas3DgZczNh",
  "key30": "WCy6kD4qpJaeL6mEqryyhXEBg6eTGWrzR77HeAiv9JaKSjr6xfhhHoeKfApBDBggQFwFeTeobtU7ANzXk8agg8K",
  "key31": "45o2aXwPAYX1CZ2NmRFJLxgq5KLbHJQgRpZnAPx7rBikaSJLp7depXDpeLY43xhsdnHKu2iHK4DTpSj3tR5tVrvz"
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
