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
    "2vfNs6fY6H5Gk36TnZj8CrYEzVzhG3R11FSbbFjwdsYBQSyJYfVLjbu12XnmTzv9wp3DPxuXKbaVEmbhWcAxk3q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mB1XGawNQM3o6ioBj5ha1fqwcdF1rV2FupzTyzvBgqm52ymJCoUY5qVDRdR9EYiKdnsyj3P1a6512NmrqzcdA5u",
  "key1": "4NuSq6D3jYmxyoMSvsqPfkUnzM2g4cDxdEY6JSMgwmGPHcEgw1asmtBtsyfebuu3WMQC2Brrx5KaYTjxtMJJmyt1",
  "key2": "4ox9EKJVShrGDe79wYHGLriW1HFrTobsRinRbCvxt2qQ9BRLwSiTUWgHMkmd3EVDf9Hg2DueJJB1XQvTk2Ru2oDV",
  "key3": "4tdy3jz1Q9B28NgwiRmikn7DWUhLWxCNd6eBTGJMuVj275vXmkhNvUP2iihhnyBd6Nzf3LbXvNh8ErzosqEGnZRo",
  "key4": "5crQyhYX6Yy8SWNoZXaoBv5zKsr6Cv9be5g7oah6RAmEgC7bGqmhQa7Gd9Te3gxhZAiHprgvAqJGyns2a4MShnzT",
  "key5": "4XZDdqno2wJKuaRw3bPnvfwJrtotus7n5SjdJF45MVJk7SX1ZujsECAnvs7Ph1XWm6PecGzQSMhE5AyMcBFAMZBh",
  "key6": "4oyiFWkdt66yNvan98TDMcp4hk7yvNjPPvF1nJNmT9ixkMKN66dmXZy4LNh24Rz3Sg66BnqeHsd4vZ4oMLg5HyFF",
  "key7": "aLTKgNMHQxB6dtgSPxmcfLsjVniNFFLSVqCGFewLiDfGuKBdrBv1Up9xxucrV5iKvpMyiZrG2yRdeymseLHSPmA",
  "key8": "5uvLkTGwAwiaBGqwbxcaYAYphcuSfbjQkCLE687PCGEg9AgndTPQV1zmzmyrQXnaScKku8KiYc6ukFq2sxU33fik",
  "key9": "3fx8r4c436aupEMz8rLMut6C1y35Tjkhmz3nWhzR5ugS5b2qvUDCVbvFATYurxZaQBrHJP3q3qHsUeTWNpo6Vy5Z",
  "key10": "4y3FThaKd5Higt8fUev9tXh4f8J3Qha9DyZVm5oYcMB7T5upKWoDrtbZguZkL8MBvMTQYz82G83m5hC22hUciD4h",
  "key11": "WP8QBrDBUmc1AEPtuwBQTWhyYhqy8ED8tq6QLksehVkmwVbB75ygvTUJbo7p1DaiKq8bh1A2kNj6KFESVuRRrPF",
  "key12": "EiJ83hASHxnRxFqrVkB93URdBitUGgvxmH2ey4c9SwEGnjvQb2t3ebcd4RhKvbvCH6DX9FrGDDKFY4SWEuUPPVj",
  "key13": "4ErzK4XXTuqWKSbL5Q7XmKLMfWSNiFRZN1qwokBaR9aLaL1mqMKVkyiBsnVkdkgiCN3Zjh9e1QuziPePfX15o7zL",
  "key14": "32n3GHMeqnzXjja96umnZkhAiLc7H3Z3uJ2LkAPjmD1MTtqMkYw7JoXUX7NP8Tsz6keM9AShPxfVGEreUbtnHsES",
  "key15": "4yxqPVxUe1LaAJAixHAMJwRFHZAcsuVVZgv4nHPwa7tfYqfvZRDNstuHxvNqGFRf5abj9s58XDdqZkAnuuA5HBEA",
  "key16": "5xH4NMHLVmgLE5QLi47BpsJ5SYg2nCqqT5UynY8rJWSisyUeHgX5Pu9kY6hohYzoBJo86a5QYeA4cw98D9v5SGb",
  "key17": "4TQdkn9hhPwU7yz6PjRaQah51VEhCtmoTNcHuCLjBRfkV2163Bucp13hCqDxKqiwabGJ4GP6P3Xt3XBrzPgpeKK8",
  "key18": "3gDhMnxzjrFJGPEg2ryFH7ZKf3wq8ervYCqJKYH7LThZpi1pQBYkEVd7WVqKY7ob1y4RJvkfQu5CpQawqpf86Ks2",
  "key19": "5eChJ8D2xFruNYLvhsMgFAUQKHjMAgWawie6i5JW3RvXXXrexjWLytJ7DzspcoCWrAHpdUSMP5sRnEmvStrTxUTm",
  "key20": "21Gtb2dYNyEea5GBWmiE4BPAQ12SmSbNCESW5KtgTPLi27tgvgs1qgei4gQYanPz27q2uSJRDLLZETVMQC3yXH8a",
  "key21": "59tXwRDMxTZWUbZzV4ZQRPTw9ABF4edFPWX3UUGbHDzYBGgB8dS3SdRCLpKf14sD9qxmS6iZJxSZD68xwHf3xbsc",
  "key22": "2rDYK1SkNqR27yAQFwjctVBaqQLRE8UA58rJYa5qqSNanpfAWzL71aD8syZEM2xAh3wm3ypPaSXznebft9Sahfd2",
  "key23": "64dfvZgNakteh7LhqQTfgJaKE5JnMJdv6yuVVbqMaXzPyqTpivRxC7ndESnFmGNt8JLD3vtQF9F4gj269WjtGWwb",
  "key24": "BKM1ZRgg89P1f2XZA7C3cprHaEXZBRCKCokus9MtFPfBZnAjPKEJCLCQBoKGETjrnYN6HnVMtbLhCUiQ1TBYT5z",
  "key25": "3Prp8ZiJt1QsTvVxT7wsx24MkVAuLzcsZVgADLaSk4DdkZfT5VS8PsWhE5UiZJUKVMXarJp6tXo9USTKzpLr76NM",
  "key26": "2XCBwkr3XcJeGGk8S43DNKCfzLHkmR6x9fzjCNHDLiitkR7tMp9NtBdP4BvMgvCqxX1No2ZFbYDdPgPSsB5N71yw",
  "key27": "3uPARzbcdvsqFEBMm7UkbTvt2tGPey7Ag3HquUPp5ifmxkmcJ8Y4K4ZYHytFEnnWt5Y4Qydbjse8Lc4GZUH2cRGu",
  "key28": "3adafmpEA5L5Nbavzg3Fi6ZsZMmJ9nV3fn5bMgewMVLTEBMtv4BY22KoQaGRAr97EjREPfBHTJ7PYXPNqUYDr1qC",
  "key29": "4ZEJJiD8K7ZRc36ypnichj9cdCjeD1SWgmenJq1A5DXfmRMwH4BrHYsr9i5oBSsMsawvW5G7xmdfHLLeEH4eFrYr",
  "key30": "2j2QjeDCSQYHJhWXCWj6oLn3nhgbkt1wxRK5QzQeDT5iPds8owGkUjqdFLf1oEgwqKiFXgpF5CDuh8SHBUKaESoM",
  "key31": "4ZUNbdKYfqFfDXbAWaQXgL3oqtgNMAUFrCeUGup7yBZ8A6VcEPivNQAkTZ9YGpssBWC9u9RE57noh1FpbnhKhTjk",
  "key32": "61TEy627ttrsUx3K9htBbNt1yWi2Qa1YBwbFashBEYkQ2F1JXfWXxW4ZDWW1GMHDwWFeii3H8GHp4x8rMqxHD7Vg",
  "key33": "5iFR2zcwJuayX3jACnScy67tsZDXUnq3gjdQ9vf7upKBrN5Lih8AbLeFMSfmmr7aM5qcXR3mV27hNySqntgTDS5h"
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
