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
    "2PUj9EUKE6KSQQqdNk3ZqXwwC4Fun3AGpjfGyNx3DRpSBGaboTFce2E1mGBvbUKWnpHm6ThuA7FiqLXdmMzi7eQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfi4JhGMFgv4pHQ54uQeMEkEvHJPU5iH3Rw6Be1JwL62Ac5mr6sxX79QPPUJ6Jq6uV94sw2A6NJSuVwrgk1ZWd1",
  "key1": "3ifFsDxcZTYZnjiiBHTy5eXbQm9ZSvXbGtnnNwy1XVATGWULYDkmjUsSd3Mvu9ZRuYAmi2r6LmKCR48reaFavSwi",
  "key2": "y8EF6hEKyvvbUWb6ydjLfunjWwnjczSLBWGYDuJk4rZFuPwktwyf5tRMpsxD6FUTyHkv5tMoLisWyrzJ5dnHEmJ",
  "key3": "Hrqx4QK8HYez3qgiwANzyS1X9EtNhwraLFf5qPCkBtDZexTA1xkzmuf4EwAUkdYJbsghSWJDTVTmGReSay81Fa3",
  "key4": "4FmPnQ9CgLGqo3RNbTEaw9JKvDKPVpYzscwUUVKKmQWySqRUDRVvzhK9T2hUVixe7ShRBu3C85L7zdXPrCgeWUgz",
  "key5": "3uYEYjmRbPunQrt5yftNzj1gKzt2RELvj9odqiZd5yVpWEps3Z39hZYehPqMrahVscp6YVGcuYvVB1Rq8sAk2sVT",
  "key6": "2QieziARtrGv8xYMnDMNsthtbxTRvjY2bXVMbN2y9qLFhV8JCKW5Be2Qi34V4dnu56YB8ay4dA3T5FN7tGW766wN",
  "key7": "inQgj6LS7SGGBKt7ehcqUqTaRjT5yqQcifRX4YknMoPzTVCbdgS4uyNESiqRB8455h8AUGZVHTjLyF5hpqVSycV",
  "key8": "jF3ZBFmDzCtmJut4HRc9exBjvt4QK4kAp6pUpRV84ahs8UiiqrR5pm4ZCTAH9196TcjLjxt3T7qvbWbMN9FYtUu",
  "key9": "66R9yVoVC4E6YoPaHY1DzWYMrfX2mkuDgzZX89nyGMmuRyoSDnf4dR2fUmkA6UMBx6JWfcXq5CTYuMqdHgH3jgfS",
  "key10": "4nmXHWospabU7jM4cd2aqU3B2VTLMsWgiqWuCN8Um4E5tYajssxiaEy7pu5QWdve2UskEa8DJntbFbR3cxXicepG",
  "key11": "3Q3BmCQgYv2KRWD9W5MWzW2LgHLrzVyaHrSywozHJRTxogrBQfT38QH3Hyvi6tGztzFB39FfwDXvKEkvhNiX3wiB",
  "key12": "3g1pko7mpCjCWvTbd8EHzf7cryGA4ec5tbWdBn7GhzqWJqi2L87A4eXq89rpMndL8ZLhJrfaitjfc6hcPC6QZCAe",
  "key13": "KwMV2gmtzSUn4CjswZs86H3HH4MHZ5wqQB44jC9ZctbM5xN1HSH97VerZZi8DRDAAobsnxYPGupyH8nKz4pSg4j",
  "key14": "KopL2bhUXLzJxhYKkgFg8ZQqZYtnYYjP4gMu79DTfyuY9TybZNRpnLj9xwppTaXvvFKQNfyHzT1dijXouf6LcN8",
  "key15": "rEM9jq6ZtoDGpUE2QhPDoifyxXQVFPHjLJxzRLetCgV9866f7yaHPoHkkG5dNRJFmpYcm74t4jzroY5dR5yPhX4",
  "key16": "AkhnTaU8HDXVB8F5nVNM5nGJuJSHoXcvTJqw5Tmn6XeRdhhtcE3i6xxDDQMU39H8n3iYYtbEtvgncSLnAynDgqq",
  "key17": "3ibYnusfigteEeovzMr4aTLTY2hc9mhvmCfSiPbTUiss6Q9v8cAxt8u8xjjmbYHQoy6dBN2UnGjStxp9fpbv41iC",
  "key18": "5DMRj2Gvzhzho2pRibntvp1J1srknrmpFRNy5FukCCb4uEFE12oZe3qeBBrvmnEFPEZC1oTfacvUDWg2RvJifNLF",
  "key19": "DSPhSQRSDDjM6yj6k5QMy8uiCu8oBVJjayhbDiJNrFRPadMD7n4vHxhMAQrbppqby71ouTLLtYu55cuDmP46xza",
  "key20": "2HBQcAsR1gkkNZieG1BHLRWc4hHyacaf64Gn2sWUinzDTDz1WaVzeZRUnt59Jsg2V66YY4ojYJndbo9e1HqsiRbA",
  "key21": "345fRbdET6qxnoC5rt3SikPTz6b1KUN6u8JtJE9C38kd5nr7qf4XPigA6JL73ySwXqPQ293mcQUgPjVWFQgMdyKJ",
  "key22": "4bYwcAWtshTHjJ95R8UzEqAwwNTyTJ7L5fveqva21iVtkaedzoQ7StKN9RdqqP8TNub63Xk4o59ApZZkqh2YWmzy",
  "key23": "2r789H5ddz9YhLwgZbosSSSJyMk6Xu4H2pXeZwoBtziLfLZgETMcWQjBQP1fiqisWHAozYneEp81sgKWZQw6Tmnn",
  "key24": "4FoeL5zZGzcDAGufUTuCsjJ3UxwygYiQMxFWu6spyppFFdi9HYsKcmnH2DTK6SxKYxeWHegKkJD5PTJ4H8vD5AQ",
  "key25": "JrH6qWBY5TjfFJXpp9smKkMSdFXYX1pVonizVgxVDXzEW17GUhiwfgZrJsgW6Re7sdxHZ26XTEosYmx6KuSgKYF",
  "key26": "3w7vfcXYP3LEENdpC3rjruueAjpxgexQsMDWnSkiXu7Tkqy17t9bp5nkwEzLDZiqV6FSWW891NuMHyn523bcNDN2",
  "key27": "4vDtWPZoC1NHwSCgb4mLDVn25h8jyGcde73CVBN73vBsgZv7DsaDLBCxRvNCCUL9799KAnv9QUg5QoJ965wH6Fi4",
  "key28": "4XymHJxLSjuJ5UfxxVMQZcGgo66rBaNLqESSuBRjLMrQ3DKH6i2zaieRrbhsLPeY8JLWh9YezFtehbmSMwaMt14r",
  "key29": "5TwpFcv26a761q62BxdZJ7juCj2sKS4YnP9fhwiqDpZWJibZCCmVnhJG78sZuZHKQHAYRrHk9YWqMyxLaURvGRua",
  "key30": "3wRASeD1cM8FXYy68bNvucLKdYnb5WctMa7icGvtU8uWJkNf9C3X8LJmCkPUVbNV4CNCVwnVFei2VsZ69NtjhkGP",
  "key31": "2jSnVfjE9zAcQhFjbhBbR4ZZyLVCWkfkHB9rQs4uNYz78xtJ4NFE4oabxRX6TBKQsEdAf5x8LQH8CDL2skiyDYrJ"
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
