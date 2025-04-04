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
    "61U4P6EPF8YtcU8K63rjN5hgPhrMDa8WkGhE7tsYYCKmQc9CtP75tLZ6cw21RMX41LnkgWE4Tv7b2aRqdgPA9DfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3spEFEGFaFoJ79P6f6Ap2JqTRSjBNASN1p6L2Yocsj4ZwYJUXgCAhMCJgCmz633qYkaShbmqhBw8rco2sNguhc9M",
  "key1": "2Cd5MnMKYhw8y4ngsHGNYGn5qVGhLbifpGm1SsjYNBkv7xhsrSLnVMSmZ4sxGJsyKJ3DpVmvfsDgERknuw448W1y",
  "key2": "31tCuSu9XiNumHNrokC42vQMwxtjPUV6qM1iRn45p3Yjy5md69skqjzobNirkHstQyUGXeSX58TSVP2Ejfg6i7JV",
  "key3": "4kHoT8NSZLccExPcUSpkzWnp8oW1omJKWy5HckXw9qrLM3aQQksK6a8Ze3NBxQFsYoWTo2V8JEMHwtbKnThVE69N",
  "key4": "2sSaaDqv2jVxZ3qCLCWJj4zAM4bZyFav3fzVjK4YRB3TtffY3d1mn2hAfifvhoUY9GB7RDJ1bC9u7kmXq3Zjy5S7",
  "key5": "JBBjZRPhubzWSZVBeAJY5yA378RBL5TKY9A7MqbcSeGwrL5vDPWzAJeiqb3oZ58nM62qkbz4U3WsuBZ5pSXDgQk",
  "key6": "Z9iEThB3xAJrW25wQ8iqvhpucXp2YLyqjHzB4bpB4ZCFnibtpYk1gnXYMcVsxgySQSs8R3kJRyyiNqf6gyfTfrm",
  "key7": "5ukSBnADnK4DDruNYgdBxLjpAvVnyGS2VFykEmKoqE4Hyeuhv3Fj8FySYTg3koJGeRU53WMfVpqFGG9E6TXbcJDc",
  "key8": "2tcAQoqvY5iYDqQLSiKqSykqUXTbASG1iXE3eV5XZXRy7G9ZJSaFVBctipbjtHKBch5iJEtKCRkuRPCFBK4NPDPW",
  "key9": "4Np9BGQLpbQPyvnY95svkfCEKcyJvu2zgyE9hZ3k23LLfM7Vd5Cf5yjAAQVRGkoGfZKxvhZq6KkVA7G78CqVfkoD",
  "key10": "5WJpMHyvsynPtUkG9AY97SWDGHJQYjMH8z7Vu3qpAyxiCFSwwNZBFTvFbn2K3VmTDdh6LNS6sRvS8ZZNUmzmUpcX",
  "key11": "GJSXiPdJ6sd8PtAYYxZWvBte1L9PiWF1yv13uz5JvDRZwruxrpvbKLGGohoeZVMEbqN3q2vNHJ1p7DAu17Wfoqt",
  "key12": "67ZdeWMaGtCo6F7PMytCrYpYtEJQn9EzVaK3jVf4j27ekMVgogw6yNjWt5J2a2Ag8aXvjAxia72348X6rbnaPPi2",
  "key13": "4Veugwb7dGbCs46CJ3fvsamXdwqrJgZ9YGkKjPkb7uebYc6K1JKzv5JN5HVXSodR3gAm5E3xSyVCm4XMiXUgdquC",
  "key14": "4FxbFfsZ2wjFFeJoDN8Cv85ZzsNSMDA7aHicFkCqoRawmxWxcwCrKjziJSyZBqqNrn8zp5LNehGKXq531m2V1Lq4",
  "key15": "25aMSWqYgWsA2P6av1otEUDnuMxTsPC2TUYGmxeAFiQG2SQUGXSCzUJrfB6HsZqp58uRqS1nJzRNy6MeZrUpkezV",
  "key16": "4tVmL5x7P7EqkuWERGK4SeyhNXfYqofK6kkzARAepj6yi7HNFccdNbQMYjhqaRxaJDdZKkBPNSs5rBfpTrwL4KNp",
  "key17": "3mRWSdCQWQ7uKjs4YJHXafw9fiuJSVWC9tMygUrKNvCN6ToXHbGN3Amsogqk1uya9mSfDkUVZAzDtiwwPeK3fDnP",
  "key18": "4LEFhC2nN84QNt2DyBYfvDC4djpmM1enzcNMK1zr8R9gvBF2sNUnFaFLAqmyrueMXnSgW67oB1rT8Cna9XvXvFEy",
  "key19": "6o2TCjPAwG9bD2xNVfsoGKi4wBDm8E6sqpNJQ6Z1deFXn3h7e54mV3nJBJ5n5x66Y6wqg7NSG3dtmVzqRUiJ6h3",
  "key20": "2TiNKudiCLPD7WXgswH1MAePkcET7RuG5dhv6jqcUg9PZLtrDkVAFi5Hw1N4pWTDNZJVR6FPTzPu8biArQnXZqN9",
  "key21": "uCKc3ZHXsvRuJchwGCz1JceNVpGqkgvvwiehPQWM5HeF9WwFPtGH2XhhsZxYNEjFLxm52ZC6zQbf9KAhL3hCrk2",
  "key22": "phUaexTEsamzXh1najer7yry5cqfcakQZTqDYb1Xs1Dp71EW2a54gqM2VB2Z2piKkGCxwbmfKsqum2tZvZF9kFL",
  "key23": "2f8Cwn5jut7zWSuyttoYjqQZTfaZhybfyD6UY7hFjGo2fpaHiYf7d8pBYWMskphncVLnHWdqGAbq4T4HGJtmq6rP",
  "key24": "29ereqbxazn9dmiAUNaHPp1wASkGS9zgAvLBvj49FbK6TPtXbz1S1z99bUCHXJXntzbcwueAJsDXikeyiBRfBJ1n",
  "key25": "LtmpVHz4DFJFzQEtYvexBetyJqg2TqSi4uBsGsEv2mzBeiBS2LVCVAWVne5ExdH4wJQUgpbFKaEBZQow4mqSyVS",
  "key26": "4gibAVrUkZ7dAbu43WiyC5FY6ovdw5BB1DoBHh1w5r7r2pLjLCAXdbkDbJ9Vic7WcGtLJHM4UiGRFm2ctKEzGdBm",
  "key27": "4eXeGvbrkXw3Kw2tLTLVRS7JGBJinoBhiPH55NdTGCzJ4sUgRAqGWUYHQ5vgVC5TUe71Y86bRcNb5bkwv6wCs3iQ",
  "key28": "29CkbjY9Qou1UvS7qweEqX4pNtpstZKZWGpKB5SmU4Gfg9QEoR2huXAvcoUdiBefSkvVGKTdhQkUFAAZq4YTLa56",
  "key29": "23edhNN5ZHPg76w5hRWB5TVCGqvU9Zxh3qHXxd5uLSft4XtJVt1msXvtFJsEKc8BM88QV8wDs5RP4yVsdtWgfonD",
  "key30": "55yiPLBaZfJYWZZgPNGyT1Lm3k73raiJVVwUNf78JurGC9GphnnFn4TYEcCe1kzqnDq5MoYXjfmZ1h552uuTEsfr",
  "key31": "5xXxWhvCS8a8YW6s3HkGw37CLZBKnzcyGLESmYh67C4pSGwjQvMa8YsRrCXdJMS1GUNH3h4AQJpWuR5BBSyh524f"
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
