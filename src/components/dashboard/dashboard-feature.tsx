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
    "4jc95cJb78BiEQG3wTMJ9kUwZhLnp2MmTikuWkTLiX7wc9LoUVgUcNyCBg5Y9TwHJPhKwLWufSHsJyaTqNjYKPQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Br23MUKKzedEzvFdLpc9mCck7kS3WDR2zw3BzmDcvsJJvQUvbPYox8hrKjAd52EGovgy3ebqipLWwshDroZH7Tj",
  "key1": "2uLuQeMZJdJtfbUS83uJvPMUyNRqXWNHJ9yS2ABdttkTQpYmGLnjhHvYmGTmsKSJUyHFuguYr6K8bAFUhaxCPYm6",
  "key2": "4gg6Km2yyNv5ugA3FkFBmjP3ahkXN8vzY2ZZ9RFV2Ettf7kS2faJzpomTCv6ATZbY3kqHfppsSLaojR1mrNaFxtp",
  "key3": "5daEWTfFBqtze93o97LvdYMJo7Dg3mnsv8Q46ubQVvDV5qEHJG1vhKoVqHLFXcvArXnX57Tg7hDzaXB4BKYnznHr",
  "key4": "3vBd36Lazut5tqWVKrcdd3E7ArAtnMou1EQLtUTLS6dMaz9cSoATNH4WHqEKwNenyjwN9tfYBdJBevUE3JyQhveU",
  "key5": "328qytcisA85kB2MmuF8yanyQAr4tB1QxanDD6QgihbSKkzYCyPqMKJo9w4uQSzpZ4PbxBSaozbko8VpGWxMBMbn",
  "key6": "5FY9ccaKTESb9dEHDkNjbamrfNYCrWpNV5bjVrdwVpmoRnJnAyBEX6wSSBEaEscLXbFzEq1UBe5he2vWmK9jsodx",
  "key7": "4Fc8AE5wAHGznxYK3gQcYRxWXBB8kdLMMy3YQsq7FYxiFYA1k9YT56oXgdGS6KcfCppHqTj4ysPMJsTXV1kb2buX",
  "key8": "2KApgizyAN7uVT9RzPfkHpWsAjDG7BbG5UXfgXGMEVTbjfDNUiAwTDsaD2vkYQD7YTxZ2QAmYPdHXXrkPfyJDfZV",
  "key9": "57Z5KVk5s8q1ivxcuHKuz835yg77cjw9WcCdxrfZtbCrzYKfu9rat37nNYtkPp5LSgYqUJpXpynLSFyKmGa1aRkX",
  "key10": "5XocwxWwaqZn1yVYS5sbYfJzsCuPYfQirHo3iVLUPzYfisH5ijHSQung9su48RhnUtGSdLQp3Y435yJQ7btxyfMu",
  "key11": "2gG11TRgUzutwNCnLeyuTYN5b76HSmn9G8UpQY79QPdjtKfKWUfZnU4P9PVTC7153wMukyBhdNwn5LPfpEAgGawD",
  "key12": "457Q3t9HpWuwJpsZdfbu7YkUx7tQHaf63n7xdB893i4QyddeyYkJz16noEjp5ctgzXnp7jxir9GV829jU7yW3Wik",
  "key13": "3hhUSNkq7iddC83VwKjnvdEE6HYRUW9mAnGejBGVZnZ2XfFnPGtLzxib8xPNbCUSPRMmbbRGRtRZxEzxZcTZ1kmM",
  "key14": "3RT38fkXWMvm52LouqJ4rxqWdq3aGvx16YPZmQH8RT5hA29cckFwEo8HnogmDkRhv7reTUo2xKbyVMUymgvRWbfp",
  "key15": "64Aq4qpb1iN39dRDAPKFVvP4YSN9ktsyXcwzSCLunRSfGEuhsUSHMwUmqY9VPBXYrxvFTj3T7ru8yz2PbjMtqrv",
  "key16": "5EsN6kxmeGaEv1oAdoy4TWXPGqHK1QKuDTyBbU2sjrvr2AFQxtX2zyXc74thQgXaskCrnwf9QDsLN8LKq5BKTV3E",
  "key17": "4PmJYG5iPchPThcKpgTbffATrUh5juMH8zF51kuWd8XnprYsZGoChwf9PXpQmAMuAiJC4UsCTULpYDC8ZECNo8xm",
  "key18": "2SC3YYtHn9Bnm2mRtRPdSQSYH4X7YGBbvtvgAydopkV2e2yVMf4bvoPSJuS5Dgdooev9ncMe7g1ZG54NXnv5jcbz",
  "key19": "2aNnZNEVa4sySLZ5cfzFgsepAtW9Jj3fn2dEbhAKy35vJGwzHsakUR62q2nDhJ1EgcicSWaqDrcx5eZppCVDC27N",
  "key20": "2e7Mn6pYbCu9cvJnji8WUAbmmQh2kSjxt6YCsRZhZuBeXntGKaWxneM4tu4BaF1GmybLEQVEK748Lxq68mzEtbqY",
  "key21": "stgjMyJw6NtVTMs7oFD7t3NzPUQ9aH9ksA4wzdM6EqdDU8d8ZGKY5kXgzdRiywdU1TaXwwEW2SQTtyPQG1hmaFc",
  "key22": "5UzisqYjRcAgzZsDnwfuign1wwL86tbhc1XngUHi7CQdd6A2vcEbKJ7PBRd8fMvdufXv9Rahjhm3XFZCP87THvyj",
  "key23": "2VUd9HN1jJsZsWWXpsJ5WBJQ8uFh52sXF4Cu26iohGm1pkNABYAD47LsKM6Ti6qz3b9iYBM5TPNYxKNTpVQdPtYW",
  "key24": "4haVZc6h8yeAaTyTntFAmKDGxmoQkbRJ9A6wALPEgpxsEmnc3PHv8tyD82Sq2fHV5pg7dWdVWyTdibnXCPu2KcYm",
  "key25": "i727tWoF7VNovKHtVhrJRVx75DrwBByQqoQ7UP5hwyNF9P9AeoCM1g4Lszwi8coyjPugrgQGNNuDcS4so6gUwwh",
  "key26": "2k4xYPckmPnCb9HW75ZfmkNnVLovkcErfx3CJ1YWRCfWBn4QUKpuDtFLUq4j28f8qjnKfa3YNckSCbDpYXpp7xRB",
  "key27": "3913TRE9E4Ugv5pERwXJ9rbz7cdSMfCbRDJJN9R7dL3aeqH7ct6sdGvjrbQZu9ahXgYvtzv9cw99pCreK1nZq26Q",
  "key28": "X12BbxVi9bruWGM9Fu35S35BgugJbRZpRzBRdKtYKBVGS6bZbe5ywj31HrXKejpxfoWJFYFSf7BPHnBTa9GNhJH",
  "key29": "5CucoaAY76qziEopJ8fEi7m1RQgd1Zq5xpTzDpSJG5UkPYi7sFBqi91aJwyJKv2QN73eTs8V1BApLS4RafrUpJZ2",
  "key30": "5EoMH2RAeRCCBYi1HbTs1BEqkoFDh2TbQXoYXtiW3Wcq8hrEcUCNiVbyv91TuRCxkPBPs4MgXp5inUnTGGK775pL",
  "key31": "3yaY6wUnz59UPQqyKFezfmsGweqn5s2o1cBvGKaqxz2uPFXqggn6a2uQEWzMY45KAPCJBkre1tF5Y6Xx1wFQaft5",
  "key32": "BJH2HJx86sq8HbBKZkmA9tAAP9pVwriKWn61gP3BJivvGbi1eKVR9rzup1QHXm8DYmq49um9ubSR9vQHrtusdHv"
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
