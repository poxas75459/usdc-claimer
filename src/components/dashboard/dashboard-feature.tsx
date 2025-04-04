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
    "3cMEUP7HuGhBWmyr1WLNfsaxoZCmP5X6svWGmy5dVxrekFWYmcwBmK6xCdzb7mkWJizn4XdN94jc74yLKzYJbpSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oRKfUaVkfbgjXN8iZTLrcUrKabAcQPvXGe7REe7Q6j7gte4ucc6ZrTSq47Q8yNqaS1uxxbHhwAJDmyu61WXFQkf",
  "key1": "523eDm9L3YgedgQi1Ncoh2cALeFXNZMDMATF1FFDZAarC4UpPzs3ECbNgZK6Tb4jQG4FidqmnvsrctzmcFadC9iS",
  "key2": "4PC9CHA4JaucdX99HCmuvtmbspKv9YDruhGU6dJD2Efgzsx1ABhcsmaKjbG9u6usoy64eBtXoDfVknSXGmheAPD3",
  "key3": "3WLCNSfwMhvx9hQ9bRxUx6e5zbbZLGm76x3Zoi9xF3TL4eDGWqi9CgusBRwYJBzaygeBbHEtQJveqrPGxfa8Wmrq",
  "key4": "BCYJ58PMc3PvEcut81V8ga8E4FZoU2BMoPq7fpXx2casS1NpvAYQKXUbMLf2YDXjmDzyEVGwm1mmE2ivzKoQ4iA",
  "key5": "376LJSBEKW8dyCVDQ2S7iYasri7JXqLr42NofitcZ5QTbW9ShnGAhGufDxXnS1GqaLZipfzFEmdf6a1FBcMY9mRK",
  "key6": "53Vew1NMqWfZey7La1ZtBjT7yoBa8AXTqMPBtRvtVXrB4t5JhRojbYL6jEfPfJh9itHuovpAE7mPBz9SLpvNa4j8",
  "key7": "3AHByLonnA37qCP82iDeQq4fbVfzBi3RaRH3Xo57Cb8mjo9qCxgYPJHx7NEfusAyu6R5fAnnzWUvsKhzQ56E9TGm",
  "key8": "31oH8WkeaHtafX1Co1uNgaK7LQPqMg87safnqV8rzd6n57k1P5phGA9F5HATZgPKupD39wK4hRiN7xdFjjTnk3ST",
  "key9": "f1nTtNqDdN7EDBvng3DkpfEMqadV5JY9wcDB3gkVhzMCbdNdF7MU17dpscYPLcjWTiDt4mBtiote939HDtiCRjL",
  "key10": "5XoQFaVyNYmZDc7aHY9MRDH6L5TsyT3SD7W63GNXEdAKg2ivuwEDsEf78wojtYnpZPawhjoRBPgSUvGvdYhyhuY6",
  "key11": "2bNRngtUse4Quhus1diYKLyU1MvjUUiuvegSLWiTg2fP4zWyx6FM9jS9apCM9jLhBssXc4Mv5z9xT9VmgbLAtUWN",
  "key12": "5QYohMhaJF51img3X4cNX75NBDQoJs2Shb6fJTrhmKRfNd97EDLgxxQD2WBnyXTBnS1aoV9ZbtRRYMWauMjmsFLf",
  "key13": "eNDzKFygNLapGaRLrsdghNuio2qELF8Us2hRJivRRPnJwCe3aY39neNBx9yooikLeCfHGmM4Do9mKnN81UTbCit",
  "key14": "2xLWxNdQfibu81wZ7gN5CBCJk2DEiQkQPfqJUnbgLtfyYhF9LK9ksDW2dzHkbsQBZBmLr5knws9t5mfBg4oeL9Km",
  "key15": "2hKgyFMVUzKdagxDErFBcpiSTX46QZSBbChSuWYqw1UvvnKDekKGr4wGKrMYHMykj2kk2kZmedvBRD5gRY7EpRbM",
  "key16": "3CXLiDVuSRWBt51dPTaYR5RDxdZf5PVfVV1psgKFB3JNQMdx9bAwTnJX5nAszJvFjYVg4vi45LLPbQMcYfcbbjUK",
  "key17": "L6yAR14bdaomyz86wd4hm2gHZ3Py2azxiCcURz98CqNpNjAPyFDxZqhJw9jUFtMppgL5BaJpMBQnbEoj9gJjKV1",
  "key18": "5BZxhiYgW7tAVDvBa7ftfQrFpdwZtAteTkFRvBLLi672y8sRPeDXKACseBA3M185TmUwrCcYWcW2NSGfin5jS5us",
  "key19": "4cxkK8F96ALdrDJbL8sowdsFkyvi1kEfwqp6ZpASRgAh9QemSoTwQgfsh1kvXf5B3YDAsxZk23GUbc3dwTKzuo8G",
  "key20": "52mVFEH3WqufQGEJ2nC6F3F5k78SZQ1ok1irAhzv3K1Xqj756hk52tiE29Nj4ufwQsWXLD7fjaRTwg5aG9Kp1hbA",
  "key21": "2FyaxWeMFZDVcCqEjf4imf34DKD7ecdMeohvLPp9tYzLb3pq69EyHFJQ8g6h2p8uWfGwT7cbqX5NTSckHMknrQS9",
  "key22": "4bu2RRMSdk5Wn5sdiGsWHSKYcwG5jyJtqgwYnhrsc2ZUZcG42kQoDn5VoDhNrrmVmmnkz6JHHoj4KS6gUPktWo2n",
  "key23": "4keti1ohLXpKK1wHZmXBPbRC2AMLWBFmsiZGmpGE2JKn2Sap6huRaWMmn4tMuyDwo5Qh2wXishB3371xyczdSJCN",
  "key24": "kSGCQivTxj2CvReVz5NxXzem9pgPwSXQkfSu8v79nemRfEc7qfDfd9AiBg3exiTejyvo8DoqouiJsgmdch52GX7",
  "key25": "2Vj5ZEsFcaNAkxw114iBvSebiPQd5vE4y6Qqvhv5DUUy3MxSw2782iB33ZCxJxpbL6tTUG2MansvFyav3caf3rtF",
  "key26": "28YTUU7MQYbrU6FSMePfXUZKWjmhNtdrextzHgUn5p7UUAwvdj7EjYabDTmhFeAQ3o4KraRAHSiTTw1tfuh7EkCz",
  "key27": "SNieWKe8CouYgVdF8nvYiLzv1r5m4UMxq1LLb2NJHh5sK8DuAmRkrbQhanNGtXSLuGKbiAsUxYreNK2d9Dd7QrW",
  "key28": "aRgMPWhGRPnhX5V3Jft3PdpHxAKr4gD8Aip45ZriTrVAMs1EgqaVptzkay4hZkR4NjviNosHGV18dHGj9idmVBB",
  "key29": "4gGBfjmooEqFcrWNSmTbAxGFiLpR72UcdrYAbq7mBbneVLW9rpQYPVjzFbEFgTZv97BKxNSqNkrtKm8jFpP7Kn9e",
  "key30": "2Z2mC9ymDHevCWbkgfTLdadH1pkvZqs7vZX85KeMpAq75X7HLwpDsG1HXNtKH9Zo11m5txfeQKCRFoo3THkFkft5",
  "key31": "3CivQgZHqsN31btgFdmAgh5GNk1Wc3a38a9C1G8LuVg6qeFCTqP8e2fNsZMgPQC5PgHTSVHyK2KdzXgSij879XRe",
  "key32": "5UZ7cnpCNdLePP6dtBxQSHUR12uqJzZkCKykgR5HuUT5dA8g8wkw1W6Msfkk1ZKiFDbuDRw4VjJyXxAoLoqYCdtu",
  "key33": "nRKNQjUAtGNyeir9GpeZnBanNtUbdYSmN83mUmCRKYiYs4guzGhi2EMfyrc3CV5qzzovw3TjzQYoaK9ZjXooBiX",
  "key34": "5FeyvDmPN3xEeFFnN91qPSy1BhXmFgKFfUZKZzLX8bc57iJGdvCq5Shcj4Y4bQX44kR5CBLcbc3GCXbo4RRD1UV5",
  "key35": "5JNppVL7of3RtshQijgJnKSbQaeTvSqi44HXUfTkKS52AeFtyVP98ACpQjiBcrkmNhzvBNnLgugi6Jg1V4h7DzWV",
  "key36": "HURoRXUd8ig1MppLq7Dh7FZfKkHFPMrgedYVHN1badQHKvqKJRiJgfVJL5CXHJJXCDB3vaJNLGM4feCakoXvEzE",
  "key37": "31dpj3uvHS7JTrn6sZ2UehEh2UCvSKiYcE6Do1fYGFLxoXsrqNRuczjzcLprbVkVecw3aPrWeksHmpjNWd6ZBY76",
  "key38": "5dC1tCuccUDhtjQ1Lyjedhj9uGNDt9ZkLzbXBzqVfq6X4rWfuaTEbQ84dmEuJq6z3K8iTuBiioR2PpSRtGewaL6G",
  "key39": "5Yqa1GRZ9M9bu5URBef2YQq7a7MJQSN51ZqHGeS2Fue2s9V3PWM5JG6PZV7oooJqUwyaQ98iHHSNu8n9JSjKyApx",
  "key40": "5HkEeQxQwZdaWBwbKRRSnoG6QBTiUCDme3qUAs7pCDjh587wCfc4xBVzDSq2PaahFWdfy4X2CcNEuPXmAVuB9EVu",
  "key41": "4EFhj4xEm1WAPQBm8FpQVNoMneiCEA3W58Lbc1CvYqWjo4VABqXmMkt2nJiEPozg6dkHaaeBMig69RqSaa7RBGwk",
  "key42": "9HECh9VeoZ1n37PYBnhUjddKZzoNr743VUmxpxoCPDt22TTKEmA9rc8DS2wehgYqafZzKD1RSTtJHvXPRCYhYZd",
  "key43": "3JZP4rnL4PLExDymw1JBBUtSqxiHVdfCGWAifCd7SN2udeTm1jDgdwCqCRQgHgfNGjJwKrHKHVjutnWKpRv55bX7",
  "key44": "5QWd2kj7ma2kp6CgkqE5sq59ynXmh3VPUBRSQ3cUkTmqyx4T1npoWfkes4w2Jwu8zxMztZMcfsk1WGJpnQVABXYC"
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
