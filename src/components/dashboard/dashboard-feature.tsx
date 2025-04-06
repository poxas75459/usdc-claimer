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
    "2yQ5fpmubtUDgAY5ZqTAVEjGyPgWJgFf56tnSwgZURfihxhnzJzjUyf8wbFiELfv9BeSVFthPzxwTrY9afaXcfvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mfn4s6mtrv73FthWQv8tESPfNUWouSM2i8osdPumZ76LccUn4hQJGnoRMfmJxYYmkkzWgG3AhWf2s8K5ZXfzGqF",
  "key1": "66S29LbfnMuZuG8EzL36NSd7NTApWrmrXQdmMkMeqYoEvuU5gQr733sMG17Xzk4xsGGpsUdZ8AmkTKY79HMnxeEh",
  "key2": "2bnEW1sB21hMqUvQi4rz8DQ78w697jUdDvbHVPGQtXMkCUXqUdt15SCixTTVVmjAyeaPiGV6qiJYri6CJYyXxRsk",
  "key3": "3ymbJ2cJRZv8ZkkGYrSv5RscttDmCwTbFALJzpRF18iBwc5cbWK11CdRsZ2jQGEsXjyvf2uHJt98GmnGWpFJ2yP5",
  "key4": "XTYzC2DjkSZnCBcsLU9Wv3CXqfFpK7Vjmuy8Cw55gwP9YrcbFMZyZYf9LoJKbBpTsyr9kx8YfcRpcJXrtQZgzrY",
  "key5": "2rguMBojpiyjtSuZ3sgftK7GjPHgw7RdJQYU4gdSCz61rXYcfVBnHuNTNGx4bP3sebLLPF18cfs9n8wemSJEyXhJ",
  "key6": "39DA52K12AGXCQw3LnssA5bnXxTGnoX56sd1devbv7DtFn1u33jBQYAquhn7viRjzazNFW4sAU4EdkMvgAzX41Uz",
  "key7": "5KCffaTwNB5SUhWdVq9LkJZebn4F623Lt2RdjsuLtAC1XTWZAXMQqaVeocatpUwJQnMjWHnPWMUqc7EQcb5oZKgj",
  "key8": "3XDRwLVSePGDSDrgu7dFgh6cNZScpUqZD8szCxiLDKApgXQXBZvRQNgUb8QopaLf6r2oRKY69BdwzmcMPQaQgAT4",
  "key9": "3ZuHsk2GzCs8tVMV4ZS7bkczpXzXH9cAzfNzWWBWyNsZz5cXCFJvZo76L2ruMZmW6PPhutUtUGnRCVS9pD76yGuh",
  "key10": "49VyrNL4vqg7zUtrVQ6SLbeRZ3NMA5ykDLnSUsJF97Qi8V23CrJ1ku7qyH9jA6g3vaQyENQi9TmE2JgTaUPDvZGH",
  "key11": "4nqiYBUNdCydKVWpq6kdxuQzGK34U15DXmMKX7xPS9DMStkKfpvNyrSeLbXcTHUcqMvBq6Fbk4DdYNoSLEbTrAGr",
  "key12": "65RvEAqDiH3R2VVFj3aMVkWCT9azc49F2P664cRfVGaLtzjahuGDqs58pJSkJthQZcoXf8goBg2RTX2Fpimdsm8t",
  "key13": "37EUgN5s6VxVq8dzMa9p3VFhZWqGPGAd6gbrm74yDTC2eDRd5ssBB4DC7L54gVJc5n1bx9A2LzEMNzLdwvVFooC3",
  "key14": "Fn92EdX4oZ6hNqrRtC3pwezuU5rjZdF5T65m8YC2q3fw9Tt9zjqbT2zdxmeSrd4TnBCf1dnMp8rfNUZ3QyWfV2J",
  "key15": "3ew9ZWMhTGfoknZbJdQyrgQsfusedcVPn43yemV9GCFMoFVMBhTbusgcJuQHd1CoWWwFYw2WvshmgexfFGSRm2er",
  "key16": "4z1iH1BQ9AdtEPZzReRKJmuit3xZoocbXPS2HwAHij1WMLmZ8gjUmyCkxb9UxyfEp2Jzorw766B2oSV9Lbp73b5J",
  "key17": "3qgm1o7BRtTXFugAussCDaDky9RpcumjwPs2W2zT5yJJJz9Tj4ivTs48MDPvnEXuVbf9gUW2EMDKWXSiB3rUA63v",
  "key18": "5MJ3aMNGqZ7uLyi2cjZbvZcMKuafAxadsSmWpb6MsAWDsm9it2vB6tNAwqx7BvNRkehh4jhQx39dRZiySDc7WtAW",
  "key19": "3cq8ddkhRsXmpXXjRrioihPFXcw1kcGWvrtkcfMWZAwifGNkxokVP4zKb3WhQudAKn3vfRciK6x8wdJ4HaufKT2X",
  "key20": "21bU4yYBVNBHjuu2eJvtwpBid23NCJaykxdYzQqTfzyKcWXGjVFq7iee6rTRrSdxcw6YAcTXj38kcVBmBSmC7fFj",
  "key21": "5QFtP1L5dD2MZLQwDj8sCWDSkFTH95jCqBAkPnLDFpDX7xDwbSYCMS8ovBYV1U1wCb69qS66YYaioXXcLF7bT7tw",
  "key22": "4ca7qdz6fSVvwtxPk8UpkjB5Zx8p2vayg3m6zjuVthbbi6tLb6bscndGvbHEmnjFBPAXdurPK26azyAj5QxUNGb9",
  "key23": "2Er5RwQ6dysGedeaLTU8dAQpwXDHmiEkuKstEDW9bkikEVfuzpD5qHKK9DczJ2FygAxxD7578psATxZqn4Vs88f3",
  "key24": "2zK15Txzkhk1jEQPF3ZRDnAEmN7Z1gBspDmaFMuMmLBRV9Z2ikoNTS4dM15sYLi3Sdia3tC9mTkczB9qYKNCcks3",
  "key25": "idPJ1YPJiJkWkTQecwQQSg3A1pDs2ZV1xxcfWJ97dadkrz4QJWwq61neWJ34RH99ydQpREVeQjcuZtaXxiXcoD1",
  "key26": "5568Tm36FVFXtSz5mjrDUArnjmJBCz78K32bEjVsMeaCv8Vq5WuzCq3vDbv4UkKVm3v9LpnEoSTSFh3a33YDewB",
  "key27": "43pv96uE1YG8sX6MFPsd9FgHP6kjTW9MPcH71p18LNrGY9wWCkfJC7en7q71yhVEHiGQmhs9GoPdrL1QHqgj6Udo",
  "key28": "46L8pYqw8JegaHRsUgMCUsL55XYXNtWDn5QYw7xNbugSaLHTbwr8jqe93915L3zDrQir4eUtAw37vvP9TWNiRyXj",
  "key29": "27xcXfGBpETRZ6HFXKQB5AHC9gYgaRoY8fVwxRrrgEPTPTybyqbYdS8CcfjBRe2pV9zWom99LKwGUz3jpQDBDFCf",
  "key30": "VHgzZvwC5CS61NmuDnjm6oEaGdCB7iUKHZ5fQH4uhE814VMq9SpHhzFPoea7QUAfrC8XttdnncnzWywTbAVpRUH",
  "key31": "32MeSdT5aoSnVAfgtNeyRYQ8RD5LKhcWJ1K2uQ3aDFhxdHAmSpCoH2bwCfs2eoo6HgWZe7pp1FxfRdBYWedkdJ98",
  "key32": "CjuW65ckJ3965fkNSYreR7qxgJQLjPr5pe2FpDJPaPTRycvVwvCrWLMKAmNcD6fpMc2yRwJL1wKy7uHLTkMKb8r",
  "key33": "56tKqN5dA7WXku8pU9qGhaHkBGfbP7qfeKQuN8vNHfrBv2yvGTVNFq9hy9WDo1PF4BrupLhLRBfbdjS49FQ1m2Pw",
  "key34": "34NgcEdKJQyyW3TDoDiNLmUJ2jJosBSS6Z9hWUFjLwmfsNY1nBs3pizcarCmksvN9y8XUnaMQey25gKxec7MPJTW",
  "key35": "2N6VLqhPDEJX6Huzsupe6K1uvi4mKq4qehnUug5FnLLzwHkaCejbm7e68Q1jkcvMZX8Zdg3tFM6m6NvViYqZN2GY",
  "key36": "4g91yBqxwHmMWYGMBjNzpnWLBWNu7Fp3LQG61mEju4Hrhze846ebKSHfbms57YRheCCDzzpsBM4352Trb5bQtuz8",
  "key37": "5URTgzenypjSfVc3ZfYwS7tBqkLA9youwSnaygrWJ6dyTfWnPjzMaemZeg8YtCMEP2F9fcC9TakNqQoKmHfzVpzD",
  "key38": "4XH3X72ifXvgZusFQ2KaCLPJuTq8oJb4PcZbfTgE6Ft26J4HBeTnR9o1KnmSoXfhDUvWFxj4Aq4GQsPa7ze9nwX6",
  "key39": "2XSPiV8nvgXBrVPRSPdLieif4iK7zspAER7Dvh8kL9suKEeoE6eonaJgmiunwynWeJAxVJWyg6Qu4dmFrthF4Ycu",
  "key40": "2jU24p1NfunWoz7ajqXU9TjMbZ9o965zT2nid1RJqUNpX56cibq8yEr58EjMXfcafvidgxQNHtsHJJC6kettSf9J",
  "key41": "4NwvrQRCX5KExFurvaH2XfmR1iafuSvQX5mZnvVVokgjpWg9FDYYW5nmxcMTeje8f3xFXTggBfCDunFgfrFdocSF",
  "key42": "JS1qAC2M9kSKAapAFVqU43Cf1K2FZehUZ4QMRcEEhZJUEF6tJH2njMECwtmxHrAdLhCY9aMpPRnPzvUSY1ayVQz",
  "key43": "54AkARwpAiPNj3Sum6GSCnLNP36QgPUixTfuTTaukyexy8SHjZ3a8bnFCkZVdMXHRXqxwdH6f42GWzP168fzDTy",
  "key44": "3fADRmXx5hkQKJwcZJ8xuoixHHoKoRamVFs3vY79BRkrTnZufrzZyq2vfVyeNtzr262NHs97DjgWv7g4LFkbyp66",
  "key45": "4PFWZZgvvSZVxZCmdYgXsoT8GBTwTMW1omEUy5HJFeYvXtKAPKFyja3PzW4DXrf9D7jXwnSvQ6ALmohU3GyUabbZ"
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
