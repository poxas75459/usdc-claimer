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
    "36KH76DwHHcStta3EZbi8aeWELssnQawCqfftkT22cajKkgpD1Am7RyCCB6SBHcpFVfGg5tXY2BMGwmhPo4GasKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjCjYQQsLNeZXowHU7ZMvns3FQRav4cTAYqYkRwcKKA71aAwz7QRUuzSYgS38mfJBVXyW1h75jfbKnvpvM2PJmi",
  "key1": "4rv4EA3r4Jp9pbWmUxWYHiXZg9g53vkx8S3S8ZZmNVqhZ9RWDsKALqq5ove3M1oH8A94Hg3bhx4kHfiFH49Fo7z1",
  "key2": "5CBFVAyuj6ymcYPMvA4NJNBx5gaL8U6XsfmG9fi9sSqx9RsRzcMD4weAZUuAuyqpCU3hqegYf4TfzqJkSfriqZQS",
  "key3": "47T2RFQtA7FggzFLGzSryQywgPQoiNRUmM8V9d3DhCtbtHChRPVpjsgxDW3fQFFv1a4HkJkNdQMbM3ij457z1Hk6",
  "key4": "4BqnnLtvkSGVLLGQyvgbhUFFXzpBLDx9tDsa95NgALPeXd2LfS4X4eG6P6tcTFmWaPzr731yecLpoM5dTcYasAYW",
  "key5": "pmyyZr9S1yHaC7X5ja6s66gr8oxFEgS56MX1muHiEG7twz117BdPpKmCGbXXkQFtsqcsZh63SKwG5GRCnjGUa9E",
  "key6": "5f2jgEw4v1YaGd5dVNSWRBvoR7jrhaWpYzvRqSs2ngjwKZRFU7djxgaZkXvKzXqdMA6aG4ZqFkKHVpH4Cv6E4JV8",
  "key7": "3zsVxLVHXgdcgvkCJH2nbpowBWnsGm5vWXiy1YGFjcPK31FSmn8m5j3nrf7foUXKpZv47kvheJnzwFKVoJp8Ei8V",
  "key8": "63sMqrTKMeHzWsNNrSWzMdcETjN1C1ztPiTrB4zHxDtpay8Q3ztdVuMhGykTgo2AdHsebwV6QtnDbd5NBx2Fk3K1",
  "key9": "4LtpFwKSUKPVisUED7BHhKqYoTAgsdZHb42VmNc2WMGBvy1K8mfHknU8dztjSE6jjgq61NMVrF7xupt2nBrBgnuh",
  "key10": "2HEDkATi73qUaAFundKE4DpJXoqRSDggPBxrMEaKmDuYZKy8rr86XJkQkWYtSjXgvE1A9qZPub1Z1Rr1S2pdrbCQ",
  "key11": "9utSV7sMKE1E8zLXramZafFanJf9Ra8XbbNxwkQqQEvGUhbvbFfUfjkystpcN4avtFqbLvx2sce9zW8ZMu9yNfp",
  "key12": "5h4tvumsR4EBDLZjdrdfbqGruHYwQEWHZf2mitbtmqf8XHaxKdziWfi3VscLzQAm2nqAGpKr7apdznutf1WPk2XY",
  "key13": "3y2Azux7bUayu2wFohw4RS6NeVseMGX7uUsKFwCo4G8n51FjPG3Lqx35TqAMFyjvWQFwRoMxSwnMo47rtvQZ1Rd1",
  "key14": "5hv1PmBFUC8xhhYVbJApB4WnMiNaHAhZVGjWJjpGYBejtEc2xc9ZxaC34GzUDqtzBTdm48Pneq2fiwbFvZ2Jq9wU",
  "key15": "5Guyn2XqJbjFLMxtJFnxRZseTSTGEBPYvsjgDwNEDZxjsWiR1A35gjY5V9Pq13fR8MN1qBkiivHQHHnxJk5s68wh",
  "key16": "9nwFQWWLAeX5VpDf6bDJtFHcGUiHYZXLe4pveuxNfBUpSagEKxCwRFCSiUKr2gLHnGpeXGDqzo8XQjo8XeBfLKN",
  "key17": "4VkYimkV4vXjN4f6yQxnZQcQr54EmaSZRmNLqRDSwREQhNzJDEFx4D3tiV7T32suayZ5fpQfvT2ixifrJhzC5hqw",
  "key18": "56udRFw3kYLcDq5rmvJFM4BdKqvibVna1VfvGEySVneqnJw44z8Psukw87sb8QkEJz4hUtp8yAi9GT1T7GcHa3Yh",
  "key19": "4gBqwMxXg8587wAWSUPvu3a2SBumEBzeNLfU8P8t7vWsJrkXPcxTsbYasWxMSwoCpQ361fNdU4KqSPLG1HCd4oeS",
  "key20": "59PG2xoZBj7KujskWzRY7tfUnr8uBwDYjuZgBhg2Q7SDHZZM2Ub2ABvcxYq8PZpfJj8XGxN3FXkV5yVSfwhSoZK",
  "key21": "45HoBQqG9HwtQ9nDH4fbJ89g7eq46RTFbz18fYXFNLB5ctPZMpYxwmpJ3H985tTUZJJB6idDNn3bU2jAXc7fjJmW",
  "key22": "3Vk4nbFVazMpwJ9oDvKdubtg1cMTi3P1wk5gUC4RJZPSxmryfFrEAcQ7TU4RapvuUFoQpRatSt3tgeUpH85Yb3RD",
  "key23": "3DWfcnigBTv5YRsH5q3KGS7xFL4kKoKug8uoX4xBx89rGHLDWYJvtgodpMVjugKxwnP2Fgdti8U736LHTQL6aBMc",
  "key24": "2iM4v1tXeRb8edvuRECUT2ePbRGW5aWHwhov8ScUpUMRRPSCK7PoFZtqtzcSXvAMX5wfC5MxKadSQg35NGXEXE3i",
  "key25": "5fca4tDBmFZPBHddsgcMTCWN7c6Ci1AGuwDUk3Dmv9ZvwMRhkJFdAvAEAAkFMxC97BiLeVnt9tpMQ63Xom3n6Gjn",
  "key26": "UCDQ4ExjLogqb6uEtXDd84KpVwxAmfJXmCrqG92hSvitt3Cta7AMgx5KRnVwAZY5eJfhZQ6uGykVmdSGgGgkmgB",
  "key27": "4tZADSJbYFypU8Lt6BseXvCbBHtC9ejfE6kzFRzrSFzVeX6Fd16xvVprVC9WmAq5eq271ucME7yXeSmX9nBEcwgo",
  "key28": "3KcVT2S9QGya8k5c48wA8AqwQYbzjq8QsfV66S84kaGWxSavovGYbHphH2xs68DddJ7dMvwTSquMV3xoGTP3qKQz",
  "key29": "5onzRzbVCYp75vFQLateZkmgDMhGyDEzfKXchcMQ3my6uwem7SZTvjY1uCzwPBohF8y6Yv2BzaEmZ4RgAfw8aBRo"
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
