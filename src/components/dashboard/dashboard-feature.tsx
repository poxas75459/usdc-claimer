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
    "2MyEdwpSkVujKbQC9Toq2xKC6dSBEJAjDNjf6LCSn2QVn8HWUzVcWY72zxa8GfLQGjTpdvDCz26jZJNknf1f4Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52UY1uazw675Wc6Mwp69FDn5KeTVRP8N5EeCYTcVf3aoVhNYTGSFrPc2BhqVdyiLYMWKiBzMP9VJU32Bn4F5f3FP",
  "key1": "623MQFv7AS4EDMDdxnofzMRUmDwE8NpUucSc38DCXjxESD7grmPXG4ZBzd8fyoeMrdXSN94KwTmXzyvosaeH2iJ3",
  "key2": "5Eku4gKpHMxhPuLWaRNWfLbWXfSarDhGksADr8EyaJ3zufpWgNGZYzGy1YJGBbr5Shivb3oyVwNYsFCxDJgTJUq2",
  "key3": "4kkdrByBvnzbeCFsZNEhGQYGiKDSVfGfzxRFPYwZv8CoTvCbzuLnxz2hcsKL8mjBVHX9bYQwydT7j5FbRA4TJmf6",
  "key4": "4SZxxs5m5Hm7ZCmhPLcfDgeyBkjd1QXNzHZTM3Ja875DwtJKu728qEnaWqHhW3Kt5nnorrhKtd14Pz4RctdVfPKE",
  "key5": "3MK56gR7SKsvuTqZ1aPHM76hWRs2ycaHMfKRcE7L3B3Zipx5K6BZKRFSuXkLktsai5iHY7pAFXA9ssXpP9y1UXGi",
  "key6": "RNXbB36SYLJiz6981pSxhwDFwKhdPH7cSvy4f1X7J9Z2bZUVuscxaiHkQU8yqhAT4GHuDjQnMUM5ksXDA16ANG1",
  "key7": "4SeishewSScVtXL2iG99X537XR6T9GuVWyXAMtDRPbzPEXiKq5ZCkpEgFtzmMrjbb3NKJig9vR1X1xj1ZxK2P1Uz",
  "key8": "268Badp3k4ZVagkwuwZvKEiQS9xq1azB51MpC2ZiD3omg176dGJcDYqdiY5E9tcpNMHNeMHTT4wP9FSz3KyJigog",
  "key9": "46LVWoS1tet7CroqKybkrpeSTL45qWzoqUSEsEF6PCvwA4MiqMxhEAwuEpC6vthEdRvsrB9CMUY4YrUYcHsabeYF",
  "key10": "4wFhM2JYEGYiiivg6B6bvuSErBX3Zx6j4mnQpTKRLvLj48Hs8rfiSBYnVTHhpsWM8XdKNtvLUCfiwr9bfrswguos",
  "key11": "4y2K7ej1VoB2LcqZakkgbKCT6XuoxPE8BuNZ6i99Sxf5sXhs7UMPArbysTnnDWAHc7uUbsPFAv8TFynaBxq95wzm",
  "key12": "sx4bHVBSvksEX5aodPNbZc1wWYTRp8fjL5GzbzW4eyqv388wRb4YvK6vosGTN8FbKQ4ZJshbmg7pWdK9mpXteuD",
  "key13": "4TAwMcLyPtS9m6JMBpmWpAXzZShkLXUziTQisRTSocXZVGtPYQ4Jbe3HGx9yFpx2EWiao4126Cgfz3GNUNMAW4mr",
  "key14": "4WgLnmjVoTuKef6vThYwkz2Jr6xnV3g49efUVWrpS8ScG6sPWpr3GfRQ7zYNCiYGL8Ee3KMemnaj4Xf3pj7gWadz",
  "key15": "632sA5WXzjDnCvJSVhKGn8NWaDFyu6FB17JrCwfyY4S9Yrn3bvERMqj5FdWpYjR5VuriJh96LSyFN5Q4ZVFeWvsg",
  "key16": "5ga7DbwcZfbdW5wMqqDPbLcECSz4VapoDSVcnXkVZFD7HsAzJs214LUvEMrCHJAXVRZMphWw7cuKY2ggpfFz3TPs",
  "key17": "3M3qpZpWaeW1sTFt3gRSJbNAsB85iyoSKRSFZNn3PF2fvw6KB1uJMdQL3Vj3WwYJjZjr1jJjvy4t6ikhcaMpGk55",
  "key18": "npaxWuGS6svYkPNmFu7HU5Lv9CwnqDR54zVX6H6YfivPhrh9bZioHJYMQfb88Rm5WMJcYXyHMQLc69wrxk5kPv3",
  "key19": "588iPXBMELRzjqXtBMxJAhoEA6haGHXTnRi3oSH5rBgU6mHM5pFREWjL9DwJifK5fYYjuZnzd1jkz54EZAhRCs3D",
  "key20": "4hCgdUpqz4a5ViZPvTzMJ1YmMZttXEuuK9gdrVttTDLtnpn3zFXB4iDZaVGBAQL3299sjcGCmGb6ZkihzdnsDozg",
  "key21": "4RsThzYwcPyKjZVi9jwN5e1x1XJ3QgA7aqFAVYhm7bh7iw8PQqQnsHa8937aSX9yBNLrCUhoXJMUbjN7U6qqHoep",
  "key22": "KtD5BNTAGEVDruECYgjdZNMp9QFUcWX9MBZe8CyscM2yL17qnw1XgzaMFskEXfwemRSnTW9bqZkwCWj68HVbVAB",
  "key23": "2uoAn9u61kEzPKnFCMjSrsmjf69tVXskviQLNmPKy3NSKx7isxFLPScW22sGm7ndmvG6RGajnYigYWcg5bT1H9MH",
  "key24": "64rQnq8Xm9KvhdSQTKEFeViL7Uym86TXfwt6MD7zfyXmYikqbsvuaxr2L7Zukfrq2fzerAdjyeQVghkZCwjQPa5y",
  "key25": "Sy3RuhnNDEe76K3qfx9Tth7VLxGmcu2wtasADEirEmzjdUTcYQ2frz2Wu2oow46iApYuSNApT5cJnKMLH32JPQc",
  "key26": "3QJW5uKX53bPwpG7udLeQjsMKsNqFkb9bgLsuUx7jWCQ14sVKFniSaoZb7e64BfRUAkjdx1aayAieuFmth5TBQxn"
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
