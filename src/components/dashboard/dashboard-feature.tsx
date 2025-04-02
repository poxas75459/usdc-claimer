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
    "2JZaKbPDGTEMbmxuoVBUYqS9xTURqJ8QBBEFxPzw5KhD5E3UjdbWzVkBmEZL8zqyKyRYAMba1nK4kiuiGpgCK1e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTRMZc5tm7ANcEif9mKAqSEC8w69NJ8KArYZ7NyhmNf9DN4ZKNXrVuYhYTwAFX9ahR2FG7MtR1oXUaQqL89wSiK",
  "key1": "4YnzaL47KGnRoSqu968vsn9MXb4QJXSf68WSAnc99gq94pmHwMuviLu3PRri4hD2ksyKPHEzJVW1wwQrMThzvmbL",
  "key2": "45TrLLb8tuZja4DtHBLdRUe9R76ao34tqS1hu52HDg2QDC4ZbBdfWJAqRvuXi23Ka3K6uJ3hAmHWskRZCHK8Wdcf",
  "key3": "3xkUmn8n1knsCBKmunrWuJ1DnPozpDrJ3QUVNk3CTojw7oqCKpgn2eoB4VA5b5t52YZZkcdBuJMPcgbNwMESNtgM",
  "key4": "48qTNB8tgHERYPpzrGKyVJMfq1LdknvA6SAYwTtw8Docn9kGrYdAhkfgKP42Fk8LkqU6opyet7CQBAoYgDPN7XQW",
  "key5": "RmjYJNPmsXi7n3trLtboY36KeMxmtLTf9jgW5ioLwDJjiVKCCGTkWhq9MMnRJfsaSGuGeP1tvjcXDPpWVLwEX1m",
  "key6": "4iJ3CrZJcV8vwPGuL7FxaDfEZ6apyzTXvVr2DYMUSD2cErRkJsmA6GpH2EGi1fbmLGZPBRtzqse5XeK5g29VAp4c",
  "key7": "2VC6qzvpRXUdKTeF7CZZ5ZGXJ3FwigA8QdZc1MKGVmReZUoMewpnTAdKTQLcLS7LQzT8GF73AA3nXCdDAh8sP9yN",
  "key8": "2UxCUr7UVwSfydDqw5U3jfuyTQb7F8NtkykdwAR3j8y6TT4PUgbXw2BodG9F5H5EgshMsxionj2oBPuKNEwR7gcd",
  "key9": "2aAFqNvzvGKVATeRgv3bD38us6QumjM32uHoYetnLGwT3AYtq9DYiqGp4o4H3NqUq6BHvyVfFd7CyjgNEbj1RJY6",
  "key10": "23GasvbvSTomRCknKXFGbC3SrnLSqmfMcfPqDsWqk4GpcBwxZsGVSxes2HKCqpSMwqmcQPEGtPyx6gD3sKxW2eYq",
  "key11": "65pHREpoxeSyySivKLAYKpu7EGSzcaztApsnJUqvXa1EcVWRbr4aUWP29G1yLy8UKAJFtqj4SWQjKppGca56D8tF",
  "key12": "51zUAcwLtFDYysRV3HVNA8Za8e4ubfD5X9bfj7qjZ8khR5Hr5ssaVtiVKQ6aW11eniZZr2Tpaq1sa3F8etGTvQN5",
  "key13": "2xzqYbRKPeQ1AGVW6Huybr3trE2AKxuPBeb5shZ3x2czmS5vjTzU9MJop4cDCnHGPMu6owQAfHo6mMhN6ytxZero",
  "key14": "44HSZyeEBDYYzekd6BkSXagSuS2S6ZBwBQ88fYP8oXGC3eysSFvb345BGgY7Mh7yRK4H5mw4t7GuZpUARmHwuE7d",
  "key15": "4xd4FoFbZgcpaeYrPRUXAoZf4cq8gxU3vRtwCQKMrHw1Hjru5wHYKcdaXTxetwj1g8VJygRVLhqgCQ5kPRV4Rwma",
  "key16": "5PgheBqWCYwhqUKTBFDzaEA419BofgUnKcMBxx1ESA7Zg1QnZUYUjkkpGK46VcmiyC1fJZhuQeHiR9NaG3nyfKPJ",
  "key17": "5yubBgEggyPsjtSpkbAMYVH3n2c86DKU4M7LGGRkFHMqYPjCzNWXBqfWDzZpDCGnn6C7UbuXY5n4rWyZbQdKUwbA",
  "key18": "2aXA22BJy9tNcAY64c47iwbFLDbXCqKizTCY8iVK6Vzkz84tQvGwqyF2dEfde7iECetmBNPxYyorT8wEAx7JNHZd",
  "key19": "5TFzSXKKnAW4cRxq5w1BX47oRPTDSaoA6UEnFfyQqB44Czbu3BwkX3GQkqYENYLn2NzNF3ChmEV3eKy6rJkM2qNa",
  "key20": "4tfgzL4nWqfoGCfqXNmw888izpNsU3ccymjtEgZdQ2dsqTgMCTbRoYbmbHDiMYdNdwXcXwUREQ37G8kTEA6Dnzur",
  "key21": "3Lz8XsC4amu6FSVpUgHfNGSRHCWZ5DGwGgm2Byu84nDg5LGSDs4ps1EsziCmgjyDCytVyx2JhcbYGDjawrZ6GSzs",
  "key22": "3NmviGUqNnHPTnHYxVsbY3Kz9qMcSJqkAtW5aV5u6Ae6R9g3w4LDEHN4ZpbYqbusU1EUavnCD5U3pVezQDMy7i7a",
  "key23": "5TTMcA1mtucNKpmQ1YcE9EF7SZsAAYwydsp6VRzaR198FZJYYFEai7XvYUKuCntnu9jPG9WtJnTy45h1zKEA3Qa4",
  "key24": "4t6uf6cJEWEDjHqmawiheERh9Goe5NnVtzADb4Sk5ayrJ5Wm2Lqjfe9iz6ahqBiiTzuQMuQeVgUwnp44144TBPk",
  "key25": "4AqbVHyHRTqVui3syqmGqVAYPaGZLMSbHGHweN5Rr69S8rqU14KeGdPzguhGsiLFmiCVytJBTrroPf4Ab9FZHVeB",
  "key26": "4iPrRpeq9i29KqVbp9pghGDmbv823vZB4DcTHgRYn22wMbePsZn8k1GEU8aLKLZ5y1gn9Vf8dHFVbRnjRAwsiAYc",
  "key27": "46TbEqLLXitdZVL3fRgMCke9Yg15GykMRwbybM2jRJaSAzZ2xsuyRLMf2QrTcRJafyvGeYpZMDvMK3yDuwz7r9PR",
  "key28": "2AwASmK8HWVzaZX7madG3ayVjn154joL3eEFHH7x2di9n28xUSgXf72Ko2KwZVjdHUrALqD8vcX2nuEGmp5QjH3T",
  "key29": "MDjP2oUYaFPHvkdZGLEAFNJjxTk4sokQvF7YPqzDxPd1HkdwJpcPg7oHiHYH4zED4wXCjqznKbnFWjscvNcNVsw",
  "key30": "5K6PFoc5USpuUSprHwxjRwmyRexj2oamrxcXWsJgpGPM6rfkFcmsXjmTEuFWhB3sMsdZFuBGTohQ7MGGiME3uzSt",
  "key31": "3ezpMFBkHz3yr9CD31Z38c3vtLAGYJhEfH6Uu5RvBZZPuVXGvCj2WA5YHp467fEMXMXwGxartwwuU45NfLsquVRt",
  "key32": "4yk6gurB1QtR1DNNz4anZmLrpFJBYAta8t6WeXpwQeeDXayrExuHiTyNrEWx2vpBfYSCDLS78dp8iYfK7DoHHcxc",
  "key33": "zZvYwhjuf8RgYbv12XyRHh1TwFB4YT1SGm5rggZmUd3b6EYBBKMQwJCe9MV8sHubpuWqPyyx1FmB1hMXQsKiiXw",
  "key34": "b8rQsvRhqDSXxZZxovfaedX1i4bEySyqnmb2TWLtAxMGRodNzFUns5HHrckTR9HHQ7rt2PBFjMwFCinSpDkvpzF",
  "key35": "3umxpagJhK1JThtY9utZ6qovfBqwchAiTWXoj2hwApoV8kspygMPJAucFtLYZrqP7CziUbtjFgQ3JgrmgJD4K9K2",
  "key36": "PpyCLu9Txz8mxw5DfHC7cm21nnp45qcvBDh7LgzbtQMAKHApr95NsSoQfvWf67E1Dk2BooXUT8gVz39q49dWx64",
  "key37": "221JTbUmSbt2DQvFgmMYHyPasMpB2yazYWZauNXbNLAovH4YgNXPTyjswXyQCCy3LPt789zWy3b1mZdkRvZzCvPw",
  "key38": "4Q3bTjWo1padvhXtLqcarhB88K6XgtyjpmfNc9UDQL5Uo7rfoeipLS2xAzsFoRhbBWuFHfDR5my7qKkbUNttA5DG",
  "key39": "21nhiBfTvfLKDNuEjs7nop6WXg5nH13kMaoEVWx2dqcWQELRJrqttkuqaGr2Yu7e5diB75Q3aupAK26fvNjSf12L",
  "key40": "4Dzg9VgfKjmuAgJcv745rCJGm4UVeJhXYgpDf2sda5ysRkewGhBZemWjovx3FxcAxMduL2JfH5w9FB7JKrb1enty",
  "key41": "51A713iRDaGamkTxxAEpedWB35iEWEyKKt1s1q9mNH7xTRMr9w2gThGnoUFgR63xrVrtrvTKMSdftjBf4DN7Qihy"
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
