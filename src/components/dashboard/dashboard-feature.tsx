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
    "2hLHiAv1dSq8LMHVgqxxSCopPSAFJC95gK9pMheyEdXibst5kHbHNUNoP6MRyQ8CAyvMN8toizfVY4ENx84j5hNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29yMzyMhf44kmh6bZkkUJLwKL6W729bbn8ptQzMo77CYKrs8vuUuW5m4ECe5Pmfc24NB3SL1NsxdfFK43UPB652a",
  "key1": "4oykVHq2E9NyqmMHJRo3SZYCfTDf9JnfXLq5yxaoGLBL7PnNfKoFUiiC96ER7khACFhRLBPMgbWaaML8cxuNhrbz",
  "key2": "2TFTYz5QXm8K4AjM7sFi86kTqVt5wRiRg42QAhrifpENcNDD1dXB5uThPPxEtdLqcXmXcDT2dasVNaKnrWYdBjbR",
  "key3": "5Xqb47GhmAMifCM6EYA5MV6TnoBwYvZXR3M3aYPPUdyz32cuDJJ8ZrnD6AYk9aPGDLjxzq6U4pLEnpnooG6Tva7B",
  "key4": "3ox2PtmzVzdhgvDRpy3Gt971xLgVR3rug3tBqqN5xp4UW8fpYiBVN3LzgqKeKEMLYavFUCN9A6qobDHYLAnEs8i6",
  "key5": "2Mxdpnyv1N9iqj2sPbNR6pYNTW58NGGrNveCBm5U1RToexS5ADBgKVZL8GoqqftVACD6f7JVCbsosckKrEgBGEfG",
  "key6": "2ZBVe6eDSAgSJd3xUBkMaYxS6zvgM7K7iW2xnf2ZnBB8V4Lvo65TQ2YCBfrgPmfKQ8bPeDTXzfSQHiKUtcoaFCig",
  "key7": "66nwBWyxSajQ8MhpQ4bVvoj5h6xrrZg8xZmFoJXJZtBRaMVq9sGuGVAHoC3V2tmdM4FSMUVNvU9PRKjMnKsqrrW1",
  "key8": "3QDQjXYiQoYbmDoNnStcCWJknRsg8NoD9ZiRQForHnivBS7bew2eRR8QK3BmsdTVmgZcfH6HbY5dhGVpwqY5CjQn",
  "key9": "2GVPtPL5ZfQTq71edWDU7kVmDqxK65r4u21eD7iHUuBXJ3cYp8LjJrX6VN84rVJvgs4SnWNLf8s4Ppm6s88Km6rc",
  "key10": "4YXbyQ6Kn1Hor23jarSsqJoeL7AzmvucYACU1coUUVoTRAG9ZzpLAcSKqNRwTRA9BmjAV69Fm6Z7UE4FZL85Nn4g",
  "key11": "48xryTkfbu5m79EWNKH2ZK3A9qzp9p8cDYYkYrkTneWLL4z6musuRHi8ZP3X3cFKpmKqTWQoMfaDaAW23zjJheMK",
  "key12": "2crXGaQBD554h5TqJyHwLiZ7KGkxK7aSUmqg2MUUfaBv8XhTbzV9QBBCY4UiWqECN2BxeMiaYKzLVLUgFSE8SNq",
  "key13": "55cuhFcUhrjqiReaBSwsk7cH7wAu2P7xZLvJ55yeXMQQ7SG6nCSMJT1o69QPag6qiNprQWy7UEm6ow3w5pGHkyxe",
  "key14": "umogGj9LE3oxx18a9DrYZeq2CWzQNqeZmWf5vAU24k1QSv8XoA181unxoxzAu2aqL8HD4o6Tug7pDUKrRoSSC6L",
  "key15": "B36pcWc3Btt4EYKSgWrBckgko8UDVPZ6wy7m6mBprcdVc8BNLzzc1BaxeMvwJPNXutiMhnH9mJQMh9a5hrWdnqH",
  "key16": "3bbgSZRDNovgFJEE6QsbPm9f3mAfcGMVBZpYNUW2WUs4g8isKwxdHb8qx2CTNt2aRcDTTJT1pzMMk28FHebbPKqy",
  "key17": "3JjUakmiPQXnCPtJUWXuCMMMGUhtaVHNAGcZtpLpCf4Q7nX1bb7Eys3EhPTcx8Yf482RD2HYdM78VU7eiP9MHZhC",
  "key18": "4UQyh9Cqd9DTziYfNnw2qgiD11rgD9PNx8gdobm8ywKEBSiMEcgF4pirTB8v73Dx73KFyyYczHDog9mZN3r4yJ2y",
  "key19": "5CQ3JcV9wK33jZ5vXRZLopp2dMEz4gnqbFG1BNLdpSZHoBJtw5R8poMZmVcpY2Ay1PvxdZxdQ7miXusbhGapi8MQ",
  "key20": "3v1KnyKCLxwJQ6niwwe6PnYLE2Yt5qyZGriNk1DGVWf8ecfMTV2pDT8UZs2KZScbfdLAvvpW1YXxj79BBwM62omC",
  "key21": "5rzjbc3MF7ewk9yoLRC5woQvuin829Qbc3aG8rr7at7ULo9NHKJ5kDCxVM42a6SBdPW8E6Rc52oaRubbJi96S82f",
  "key22": "i2K1CdjuRt65giNQEgNXqVfru168UmKrhzHmYqQEZE9XxFSqRd6saY9NcCdXu7y89WmxGpA45vovGfqmo72fXtA",
  "key23": "3gRKfbdfUnaBTEiguhWue1vUusGRiAuVSDuhZuptqvjg6NJV9zQqwU5BkGXzhpgcPUU8gacMUSEVyR17VoenBPU1",
  "key24": "5t1HtQrX518p53L7caZqSB7UZfZk7Dc7YoGsTLdGV71aLkLRHwhAnPrCAt4RqR3vVzwRUbR7XPGoviKNqJ7GiGMY",
  "key25": "61KY7mcBVSevsJREuKNMwWy83HKYtJEP3t62vdqEvm7fcEUWn5WQuQ5QzNDwhU8SKPCkNBYxQ9djdkrCv9iKcmHX",
  "key26": "3g1ASmjmCpC9AKqWZz5R2DbZpQY4Asqqa8JYdtCNakx5r1jPLB3zsCgVEQ9Zs71SjsFhfHDECCNmL5QqDtqrVQLN",
  "key27": "5Nmt16cdQnxQWtAFb2NLWF3aDeZrGfjYCHe73xwLti7WUNBBwKauQ2hFdyW7tCT2mpbeQoukQ4MveF3sXRme6KaB",
  "key28": "fidAYMGQ64Hgx1N99f3csiRfNbq8Q1nc3EdbUd3gpJ7Ton25zycsBahze33wQcYTPMSaFHcfkQ9GzxGpvrs3zv3",
  "key29": "4LkeCnBqqrdLB157eE6ra2337iAszW8dW2qJc4RmrVrh19feTP3GMjiqSTE9wT6SgavveucjwVGpfKUqv48wYkMX",
  "key30": "4uxM1FmwHw2aM2C6kzzzBy4ywQVNLLstmSmEKgxqhNzKCA6gXCvQxukMvaHCbpuapwekWrJ65zb6gWcaJvTgpAvY",
  "key31": "5M3GfU6hpwER7MZWEU12J5uwanjtRVVhAYxg86WRsSPLf4d1CJZzUeKWowXM4ZikNYahRT6QFMY5C36Ve6orbLS2",
  "key32": "2E3JnYdW69GGYF6zqprXDbob5NZCrTo6sHr7xQWfzE3aBpKPc1T7MVPTyrqZPTBj4DMe61zGxKQkthPm9DiDRpG3",
  "key33": "2QDftfCH6xSAhYuugtK1YqKbYW2oTzcuSUcPkoetqv2JqWKDBzhywnnMvKXxSdwMTx4yCLjKdkFUACRRQhbybiHm",
  "key34": "MWDSdE2UAJ6ggdgTQEj3Gh1dwkSRoeWLowq5gLLJeqoGP7N9273znxpsb4mnUsoeSSd2dBQX769Uj8FPU8gBXjq",
  "key35": "5n1oH2kVnKNNTmqp5NqPzNSZ8x282dof3DeRHH4jjP9nXd3YrTsymATsoFhkHx2KQivRup7bJn4r7Mz69xUGJKBH",
  "key36": "3nEBkiEsD1T9joxrnnZnuboSuvjgorrPcPVm2ozwKLibQ8W1K6tXajANoVD5NCq2DfrFEAqu7DWGHuSsjyNMVS8E",
  "key37": "4Ewm3bxt65Hr77N5tw9Azwp55KqnwjVRrHzqdt43dCVcoW33pzxL81sPhZXvWP6CeiJjW881Sj3CZzk6ya3wqYQF",
  "key38": "5HVGnLu79bvKuX7H5La9nbA28D65tvrreeW4FF5hwDerLSYdQ5okSvaWZvkMLx7LZTZC453D9q4Gx3D5tf7opF8n",
  "key39": "4QhFmMwXTRH1mK5s4cG5wzvrsSXMKjXoHWFacX9W1DWNCnCASX6KUw9FdVBZeZ3ooHkuEtvy3oaqtyniG5MHuQBV",
  "key40": "3gcg3Jy54nKAMxieo8aqKcnUMXWRAwvSnDvTJTe48KMyeXRm5FSWXtJB5pisoqkNVCm8xy8d58HuUZy6gvmo5BpW",
  "key41": "HWDb6AHYXGa1GEFptxpzWmsJzuz53zf7ygYLHifM5Hn9Wi1Yqu9WtiBwKCw5JcCzf56ytoz6ScwjrsKzmH7g34i",
  "key42": "4gfM8jX3LsshD2A8fiLCrbSVZKXdCsfCAzxTs5YoVmV59qbKisD4QxMvJfdchAQQt7iqjToe8Y7Uxd2bY5m2jgK9",
  "key43": "H3o4nfUUZyB7XQ7MwZVskxnsLQtwvYL56Riu5wofT7mXWQttnNR4vfQwT7S98gNo4FyhLc33Hf3Buu5ZSmXFDqr",
  "key44": "3aW6QX3xrR1WopuGNhpuoFVzU1XgeimUZBCt2nSD4q5YTLKqGuXjLRR6FqvRpSvHcw7opsHw3mzobTX5H5UYnTdp",
  "key45": "368ceKMXJMHTYAqFeQti5MyzKEJozp3hBZq8ZMfVoLPa7vPoabnpFhFGhy2E75FTTfU5AdGHLcdeSZ77T9FrG8dH",
  "key46": "J5ijBHZvv4FxPyyh2VFEap41DDz1YgpcMm9jkFAnNWmvnExuTvqNbAf1sDttgcjZz143bxGHnKtwVKSKFAqcQHJ",
  "key47": "2PaZH79qzLXYxL7SmZwycZbUiWWeTHNqbQWC5dyjAfWzSGGweJWVnqwBDzUYcwbafFkDWZYgvUhx4kwvMPfm2Jps",
  "key48": "41kqugfDKf2o1muvWk8BpMghVCtnNcKSJaS5F9Pnk6u6vNsxk9RCzU9b2R6B2JN6BGEs7jrBm4mbhaWahbXmKBSE",
  "key49": "fXkFwBjCWsN1rif153EmQQDNaMwW93NcHjLzfis7EvEbNy7n8GXx6NdedZU2u3sMP4mBsZHFCCT4Pn29g8X9MML"
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
