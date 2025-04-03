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
    "oEywDfyDd9qxazS7f35NvwNRgCQjGRCTBEtYNnjWr9J8yxRnxS67TpYtgKNZ1sAS5YGVF3kdZ16Wk7x7hFUSow5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QG4G3AqpgqRtNbrLa5zkfe4Lxs7tdNAJBJnVhbkv1p6L9U1ccj1ybmetrrGxX6Djg7F22PR9WpRboSSAYptyFRJ",
  "key1": "5WWotPNeG7zXrceVcVWVfzrNd87WdytcyVNvnmXjSUZfGrk8F5cZE6DpQKgznzgBKRd99eBaUqW2ZjkrUv5eYZBr",
  "key2": "4XZ49aHnCbUJ4Fq3qEMsq9Eiae3bEUcWbwJXUxV5aFTzDWXQJeyoVfceaYcJthUYJ19XYJMNR1u1kDrt824zmaEs",
  "key3": "4PGfyijAjcpN3vBBaANPA3hAbJM7uxNf5w4NHVg6iRGEnr89GGAty6ZuBswgeoXreEU82s3rB6UEumsnQihNTF6F",
  "key4": "5gP9A9eh3c1Wyq6Yjz3HcevH71ATC29S1CDR1HWxeEAFekSCbmnao9FFQsmSeFe5pMqX8MYcp4BZqd9Mx4F3BA7Q",
  "key5": "7i2x4X93qRYbhsjQvNSSwEVWxYzDTdtCCSVxUhZxr8jZC3exxBWJAYb9ecNK9HyAw3BwEkdvdFnGE6KvbB8vVTB",
  "key6": "345ND9eC1i7GPCvuo6goJBm5BPiqKgj8rRZ4zPVJez6GizfL4nsJiePHCnL2BrXXGauVQiyn3qCiLYBmWUiFQMfo",
  "key7": "2WGDqaqfPL9w2EUw6V7opPp6D6Hgk65SDTJmReTZqAienVSu435UJJsCZezfAx82WpKH2TeT3wBqkwMWb6gmpJu1",
  "key8": "3d3DPnc5ALy6wNYpVoNDUiY3A8LaLJ33oPi8uYeDvBifx5Dk66xhb1EUWXD7g6pgFWEXe8Ar92aC2rLNqSpU2mr",
  "key9": "4YJEHbpdCG6jJfgtT4CmWvywXxdvkSQXwRvA3aVRZ1SQiQuvVojNb3DWtWMxfsskrf3smfwrPav4WbRMBDaJqdmc",
  "key10": "34bDFWuEG7xwT74NYnvCVqPGXAk6tpcngRP2ZkfTKQingKquFeDNW7F9etnQzZQenG9RDKdqNj8rWfJ5auGdRbwf",
  "key11": "46boBJUY1rdRVSm9YYskW6eLtUEKysnQG22ksEeM3Yv13fQbvpwUz2Za9G3KcSifSNDnhvK7zmkQHjpGfW6AHjwT",
  "key12": "2fjMtN7jM3Xr1UvxPRkvVFFgbx3Z19BX9D6PHazuraHok8AXpyjV3AeToAE9UYhDCaA5HDvUALMa2CBK8AxbzfXi",
  "key13": "3QP5nTzVz4qvhd7YTqxnPFLYvhmQfwxaVsbUqwRU1HipZqHX7pYmsFRcAUJv9yed2BUJXYk2tUSSjyC4BwMxUfeD",
  "key14": "4Tpie9Li8Dw3W4tQUEMbpx6coE7imgwgPgEvrU7dMobavPkZC8JxyNu3peWpqknL7FAMzbEBYGQ9Zxv7GDRGVRiC",
  "key15": "3YTZz1z4Yu9k5zpwPTBScBXvnUro4bAzjXCzkprAte2wBpq6g3NRR4CD4np7Ms1CC72HK7w7NmfPTFJikYbw2PLi",
  "key16": "gvEpeZxVRYNXMpEAt4oBLWnJ9MM3xfrkbCDsfXUH7zECSbagcG8bKymunpQHDLz1PZYus3s1Q96FvWjhythR3Ai",
  "key17": "4wLJke9vaPX3A25Xxz7DqDmz8FVU3KLe9DXtzDqpZnYYhug92WXdT6BwSevDDxNYJcqSJDy5Vy641aBYPrTgvFHw",
  "key18": "2HkgtNM8cJBbuTNKWnmGRHPfvBUtwgWzp11JqiCUfBLuew7zWzuDdnZK5BGpNDLd5qziT2s5e9e8vyF9PE7Qrgk3",
  "key19": "2qac1vyWoVFFwtyoy4hfoeJYLq22ZEf2cq2xv2XjDRcKWdW5WKWPDuWuWjZvEsuiBqejWX6CLKYXpVYtXFM2WSU3",
  "key20": "3aybpdKVehEVAMwzLbKpLMnvSf2FVoFkqSue9yQPfxvxXJyeNNQDsfBvaSHY9Lme3Hs5AnuLioq1HmWKe8yPaGfi",
  "key21": "46GPmEdn8zw47mfX27PRZbBQ3wkaVWc3HJCLKgJPBuGkBqqtS5PwEoPBpcbvCiDBQ2HgCbEAtwEeRYLtRzSj8HXc",
  "key22": "5buPjPFr77aHV3PFMQGvCPjDpE8ZYKpTYvSdWG3tDmFD7HidAxVpTEfWV33TzY6ofPb7SPeghuXa16pJxomEVSm9",
  "key23": "5WvBrccpAvsWoQMPBM3q8g46c3cx3HP3uT9s2hs9Hc8SrK7xoRJuTEqe4FU5EjMbFZ2WW1Zpn2AskBx4sg1eufUm",
  "key24": "2dcK4u1VALjJnQ9f7QtX9ybcrV2ytH91YqbPaXKNkUBguHa4a44omscHYz5ZrsY46ULWvPhmdQEoSzYA2xmZM3QR",
  "key25": "4xtPH2ByJhkJybD87F1FwzqZoMgNVUwn3wr1ByjwVMGVtjmDTnoRQ6wak8psq4jZACWtcLUMddVYUH5XRzSWEuQm",
  "key26": "4in1b78aiJ7thtLavBwHsdpeZwVBMFCP8W4GukW5kBYMSyKBGyyU5ixgbvhWH5heefHmBYsrgzMH5svvoVeiDibK"
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
