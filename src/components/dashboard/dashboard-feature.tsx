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
    "2vTcpbABZwfiRo4H2PEHLvtSbtHBEm7i3jeiCb3PkSjY7Ki5HemYGZ4Bm3ShK1fHo7phtBWpZZdHUJ2ba47PJhfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jh3NVUT6mNdkHm3tyFVt7hmSwu626mqYz8r1Rodarow4hAbHfRPJ7jXgoAVkdNwY5hsFo6431Mnt6pY3vEmByik",
  "key1": "5uJXQcc2UaPrgr8JfG2AfMFA6QbPKZmd7pwWUwEVyL4XgQuXu32BuQJpbhQrS4A2cxcgPWDrSSxc4HQuvo6s4jys",
  "key2": "2gzZyvNptaAt6mwarctvwiPctGQeDstWDzUHNcMijfHzn2BzZhSPHyADE3JdF4xfgTHzLcTD1qFLmv3TdmZBrxjq",
  "key3": "5XJip5fEinDbK3VCcpvd8TzfAhJHS2S8HE7GCYQ6usurg5t3AGtdbSu6XJmWvRyay9jNBS316nALKg7cdcqgwxFe",
  "key4": "4kE6hsZHctve1E6dV1W9RcXQnP8nsfq9EbGVcnG2iVaYW9WhaQPLtbT6B3n3zpCVq5DeHYYYwTzti8ujyPGc9HVf",
  "key5": "3QMCpfvCCmabK2TRy2aLTb5Fp56zUKmVTy44gAFp5YRc1ZSBA6crhXM4CyCj6JPv3TVxqBJYoHuEUUJa1JGBVMk1",
  "key6": "3S5HLBwokZt8X6a4czjUsnJvn1PAJafaUof2jLQdAAw9o3zw3wpjiZScitonwRmrUEsoeKYHkZgqSi31FvokjgMT",
  "key7": "KcWNywJ85sVSWDrK82WbrXKGVZJnJBQyVAhc6SdS1F98CLn1772eAVrbVhw2P2BUTLFSPEC4MLnVB5jzuprvkcX",
  "key8": "3wKC5xW52i7TgjPojEmuJPEn5bQQ7o7VtQg6UBKrDteTXX45ejLQsQomV5eRVPt4W8v72q6m36zHiNR5T1sAfbZH",
  "key9": "3JhCbVD21VFxpwAFZyVTjEnkdLUnDP3prv2wTTfGmf8j13tEYWigwd3Eg3MNdAmggLDfVkUCsHdQJ6KJkVzCMowT",
  "key10": "39msPHHZSbC7ZJ2hYp1fA8CB3pwtn3Jezy44SBffu9WxrpPvokNZLN9yiftQwyXQ88DpPENZnjd8JQ7gNdJtoEvD",
  "key11": "3DTPgwcAykRquFZf1rcSBUJccSK65TY24xxGtkH3apQ1gXnoXJt45DbbSHHzNhEPNjziTnWQQ6wTBJbxqCqVn8FY",
  "key12": "29d93ESZRDggT54z3LD8JzWy5U8bHrvSLm4RwMjGxkiaUtWvPxHmhXtzcXr2KHcyVhnoyWdCxyBuPkzXmHNAv9PV",
  "key13": "9Br1jKT61rmxFEymE43zQpjzdMcjDsP5Hs21dn8uY5LsewTySZex4sVmuy6Sh4uKpU9iwwRcbVAT63TvFp47Qpb",
  "key14": "sY4qKMELKzmUWx5JE9hateD8WqhY4gkyaPSQyBAqyykFoE8bgaaVk8cfDntGabKQDwq76p2uyPLCSoGXVwHFh7v",
  "key15": "3pZsmPiBgk8oohiePMDmGrC7gRcQ9LmVoG2nkJunCCCj7xwZreK5PMSx1BihD5MUxcPtSGqLFBbhfZ1XVXwEHtdE",
  "key16": "4j3bBSfbbdgZsqtCoovpF78CqRR12HEZaY47h1vtVQNmR4FqwsZQfraTnsWTWmj1Gu9LR38gAevc3Fyqo2jBsg9i",
  "key17": "2n2tNRL3C8fCK2YxpYP2SzFEjAURMX5VUPDGJXvjU3J8DCaXhPKAPbtE9ffbwsVKQ7ammtka5K5VAv7Yg2sY97W8",
  "key18": "kGTNbcByHkcRCYjGPbRDsMj75Hk2kmzELjZ8LK3ZVEQdfcYmi4hgLxecZBgyBrEuChp1WMWUtaPmGcqd3gPjSXs",
  "key19": "5MScaHCMZpQT8qxjwm3JuuPbtw4BRF27Voy7nh4TNHLCUvGrUDE85iLUKnZRy3RzLX1FpQtWv5SR4PVYrx3bFt32",
  "key20": "2hjmjhaXqB6ANnrCqMLPucLYGX1p8ykbm8jWRAqH9qH6ocrF5HhxKuxKqZ2ve6yf6C3dsoAuffuAhCWSPbVzVH5V",
  "key21": "FP1sdCnnb7cgwc7GQGHM1xwTRJxXYgqhd9zK7QqPa5SqLp9UEodvNq7mfEeGzaM5v1KqLSLVXtLxexCwXJuBYv3",
  "key22": "3NiYrpEWFewgC7mpzMefW17Re2kKrAEUw8X1sTLuTwvGGXxUwceyNdpT4nfJ3iM8yCzxZEX5Jv2gN5HEVUT59z28",
  "key23": "2unoNG46WsEpnCwP2YUHy1Fo6AWSKZaLEMtEsafoTDrCvkVPrXKKb7Sd2eNkHAweje6vptz3y3tR5KiS6QDKuA8Y",
  "key24": "VbU6EJ1Kfhwf2u9zHPynP9nFvME87AbTA6TVUVE74Jvo9eXG2bTQgcVyFZx352u6qo3QCddwfrvXVJHYfgyJyW8",
  "key25": "53Mgsig3PKp5zFGNLJJhGEW6VeYetkoZMhwz61UQMv6FaMe2aZNMJDC7HGxnxi1GwPtQvW5R6eLz5jnPRmCVjPmp",
  "key26": "4sWJanBDGsDn3Zq8rY5n1YdvRYPAhmAeoJeyr6dfDfA48QM99Jm7tMuXzko8saJZk2WxhiEDxrBRrn6QYShV3Fuy",
  "key27": "2y68kakrVGtYbF3EEXuQ3kaqRCPszPppM2fcQYhBp41rpmyqFSj7CjaoSoSrx6uPyexZ8Fn3yN7z84b7nitVF3Ak",
  "key28": "Dr9jVkxuEke1z9UwiZSPLw8GAD4rvAYd8ESqTfhLG2dnCoo82HyrDkdzTXSAxz2GsDJstBwhUwKVkfmqisHXf3U",
  "key29": "5xA4RTex1Tv3tcrkHdb6bccQ8GUvmmjnTaa3NHbanFwCJ12WXL9H5db3XxMJi4TofAqzpQzp311jmYKzg2T6ymvg",
  "key30": "2RdnoCapw1wMTXkHfnLTsNYgbrG2fTqyefQbXdngTTWEdPixSpBGFn6bMTKc2PrwQTvVmbcGCxJ2eC4hPbs96fLk",
  "key31": "37Ytes9cbCNMBnTn3rQBjq2KDBpBYnuknMszJn2xCczm9oUYFakmTQS48U942TwPTP6BeeJPv1mTCzuLoSiy3wTX",
  "key32": "4XR1zwjY7vvsapgHfk1kAwWRqRBkw9D3ZcoGapphYV1mn2NJZbwPmK6LihgY4DPDy7VzLoRdG88EZY863EbRDqAV",
  "key33": "4sBvZ8ruVpkvCjqhSXqf6zMsZzPWdpWYghhACfaBZP8LGk6qNPqcDqneEz8dcGjwDq2P8CSekUa4aK48ZN5Euj48",
  "key34": "5wCkC3HHhhZstPsGjJ9kHkqVvHdRwhqEXzFK1Rg2j5gAkDRswE5BHUbH24Es3yNpmvoKb33uJhwa4pHMBZVj9mGC",
  "key35": "25LoQQtBuGh6pqDqLbSQivNZQHuZa1b7yfDaT2C981BACxEJgAbZAY8Xx2iviXmjg1vFJgV5oh7XHUKEqTUiRb27",
  "key36": "4EYS8JtzeU2pAwEFmh9pBvTohQCMBu6qQjQcMb4ybeBKqHWdrj1dPKF3qfnfT3oKcptUjSQJpwu11RLYVHyD3XgW",
  "key37": "2cWGKgpGreDS94cKWRYf4MYfRDGfG5CuCyPHxsUfMyvfcQjcf2mR3897Q7kJyAJH4y2cXtbt6kV2qTRCogKQaTH",
  "key38": "2m4s9Dsi9She9L2EKBewjWvRxmtEefG53ZhHUGMgGh1exffn82D68Gcc6s87LyqxssQLLZ6pnWvgu5qxusoSw6B4",
  "key39": "48RyeDRxv565yRdCwMTQ7VfWzZKHgWqr8uJ7gkqhwGXKnnW1iBUfu6jMKpdUq4EWivC6xw6zHx6xKLenkEhS9M1U",
  "key40": "jsHotXwRLg1WcZkKPXjX9uKf9V9JPCokfhmknYAw9nuxVxh6xtfpff4tfUFBfDMDwwwNuMHiwuD8tvoXdshMfUj",
  "key41": "sUXuk3rHdc8FK93R1tP2oSY5QGVo96v6729EE4TFJvtbmWYZsbYdNcxuCqXhQhRNHXuwHX1xUBSCkpDosPGtytX",
  "key42": "2CdVK3agxgSyXNqzPHPphXwrpLEv7vkYLzbmfAziTthvUsQ3TiaiQg6N1vp5eTVyHt4vjzyd7rHpz9HTkNghzSKS",
  "key43": "5qXBi4Vz31mBqedterLfB11ggSTwW3qA8MPyNRnhfBqoMQwjCkSsiwySfRZKVr5gqodWM4LRBr75XjydTXAPVJMM"
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
