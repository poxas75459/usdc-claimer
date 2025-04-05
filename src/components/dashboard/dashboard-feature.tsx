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
    "56Yc8vMRZtuvAXxWrbqyV8FdUFPpGcHRNVtDi3Z7JAErof99aoWug24jVsugzaW9mBoUFNA7XZtg6UFyt9ioKTq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzjYjourhyS8K8ANHnvxuJPdECHqqsPBc6KTV3E6cqvnVMyEkxsv7njXPj8bqyA67CbMtzbe43mGa3DJeMxt465",
  "key1": "2xEV9h9yGoCdVhb73owGgGSCHZ962kjLD6Da2AxU4jLQYnZHi3fLLqjZqkkLtYeJsSerYtTGDgK6yLpmBpia4124",
  "key2": "4TRqfcm6Ra5hUQ4T112iTiZxjTy2q5cJJDRmMJ6FCE9JVpDdBhgdg7gATSbPGgChGgBdftYqBqzwaN5oaaQhRXwD",
  "key3": "2ub8KsFxGSybPj98nzpnPHqnRjKgUoxjvN8e2jcXe85cUFCM5jA5J6Hva5BrijWK5NFtWtXJ44Z1soAHXypm4YMa",
  "key4": "4Yfk71GobM5hWW1DZzLAqtAELuJXhu2a2VsoHWxsE1PzyXq7NVhdBKdFcTSThmHkqyr72BLqcGop2Mj1EKAk9h1C",
  "key5": "31s3tFxXXAUtsfmyapDcS2xeXHmacr6ecBAJ7SjWDA5no6BCaMbBe96QPpSgh9FWkjuUDQDzPpB3zXxrgKtvSP4k",
  "key6": "3L3PHzbJWeEgwCfcZNeNTmu5b6bmyDBuoYpqVnR9BYjUUaSKLmfNXq2UkdWb1ViHYnqvJjekysBHqsgdfjoFSSFi",
  "key7": "fiNiYAfYBwSDYVtNZCtKzRS1n5q4AasPgwnZUubN2DSjhtVdK8xZurFtSZ3LqYPkscKK4Te4njFY6D431CQwDMR",
  "key8": "63hHZYBgXV7WQSwoYJHiWtXpvKuNWCC1VFo8ohxqhPFWQDn9wcRE61bmwRSYCzj6snZvUAhZqi4eau726KVJ2pct",
  "key9": "2M5ugWhJ5wWkdKMb7iEZ5uyLqpkorqZ3FTi6p11T9PPq6ej6AKxtN6jxz9mqh7cC1D9RnfyaR3aAyxaLJdPGfDRm",
  "key10": "5ktbWGvXijHU5ZbaKf4rqTCQzYWnh2UUS6GJ11R2FuPSRDrLofLAqcwbtbWLAqATJoNo8WREyjvDhhK4PH5gu2i7",
  "key11": "4kyhzLqvcx9R6S2VLyoQ94ZpKGT8bVgXE98uT5KkmCtv7Yf7o8hQyvABLn351SMjUXRqLokKRXkzTsoF2JctKyFD",
  "key12": "23nsrghL1rj1FFMjjnFTLDnCNKCx9EX93TyGfMXYueMuqkxUQzuLbio4gB2UsbnKMQVHbnZtCRTTZ1kvF26wuAdw",
  "key13": "47sV7NSUswXDvRRT2gr3GYn8squxmXrcPSkswiVHpMt8JMtiojPdrLdJijBs34aG9n8awgmCrEWWK4AU8qSmnnEW",
  "key14": "3ZWtg5sYZz8eAuh1i6hzut1tNMeEmAME7AnR6CqHMeUrdYNRoLXBFq5rzMEAsgrbgeTHfs1MbRGb83fFhWYXxf2j",
  "key15": "3ymJxXRGDzfNvrk57YjcYFhN2UaguTpbpGH1SaE6rdWix9SpbPSs5r7A9BWsFtkcG6HYZkki6WMKrRYLZRfVPcxB",
  "key16": "dpt8pcb1EaF5eg2tygiaxajRfpjURFDRWhZj7qMqaRCtXrQ1L8GdZxBBc1bWDYChV66S3dDeSM7sg7yyEVp77ok",
  "key17": "67ipkCCDwFrRNoxBP8UueYjJxNvCWGYHDitNJu2nRMuwx68Yyh9Rc6wj7jyXLXQPx5QtXCeBdGgwaHuH8qHpT4qx",
  "key18": "myJA3q2vGYKNVwVLZMDzPQKMtXqxUYfJRou1EkT6zfwgJQUVCfjAyHan8G3aZViPdn1soiiesWAHUcFfCWNjkJq",
  "key19": "2mt4K52g7xpZSdgVo3S1VWMGp7V9HSwiypBDz5ioFTResq9c4Z2WifeaGUeo9jLSvQbaPRzJ6539HfNWY8JcRhsF",
  "key20": "1iDHKz5b57mrCQeUSa5CYCTiGt7zYGwnk6kBdBXECmTE3uBP47MHkdgu7NeSXWvxg3uPxzo5S8L5tBHA9LAXBJP",
  "key21": "TEeBEa4Yt6xvH9mMMVYkDykXUi1etrtdf6NbejQResEAccALBJFpzfaeQViYcbtKX44Y1LYhVQbPMrUvjGbtYr1",
  "key22": "gZidqieS4iMS9GwU1XiCUDkoFNTSEe2VgDRZKzRJjxfwjRdD1SNPxYSyESsqpThneEuj3LrEmqJ77t5Ubt7wdPB",
  "key23": "3HLoCuaBg7H1MqPgNrUqX9QHvVTFDuBq8ScxyR8RTAjeCnxuaduDaiuCqncv47pubmvGz2EPus1B32otLBZeL56Q",
  "key24": "3bCh6jmQYeEQTd93M425HJEPsGKxNhB4kfzVweJRQRNtkPNNAaSTqzKZXJSrcVYhQj1kjXLjJ7XK5eUfbFdagSxY",
  "key25": "5dnZCrGoQeMdm5KCMVZSYz23q65eQPjxewjJ1ScTtmjyjLchtTEnsA8HUiDWfx6uv5ECz5cXh2EMte1WfGwhhvLe"
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
