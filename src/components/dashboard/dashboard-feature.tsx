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
    "2n8WKdaxbMLPyLkr3ZZwoEXuFaPSyC9e5bLDWnwg5H2dLasJrnCRku2k4KdeGuAPGG9PKGW3ZLi6whkf3988iSiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYao4L1JKz6mZQc8fpqKFpTacT33cRqpKVj5A5ApUooEynYU1GRhUHt5ZWbCqz1unoRs3NqVFY7YfiUPWmmhqid",
  "key1": "14khzrSFMHtYW69VgcPrxqR5TkF8asRUexCc6qGpjL14mQ2kM9mPSSMczsLcMuUxJD1m2ibzKo35LiB1KWHmWEC",
  "key2": "4CuxaEQCHDP6EF8DrFRe7KDhHWrUpXn5kKt4G86VtjBkXQHcxPyUDukkfJjHfRnzLDNCVyNU7a5putbqjpgBVUME",
  "key3": "5Q6Lvpino2eub3L22HSQLTr7gZ79NDuPdPzpJgxYx6ExrzNXWhiPLg5z25TgDkw1yFe3JEwfPTMiQ8oaSQqNveUs",
  "key4": "24MGgwemronofEa1J2LNdJwYUGF4Mv9Mvsc82ZWd5FFnDVLr3ghm64rZ3uy9sAphHpQLZjN4LdcV6YsXRwmRgZWJ",
  "key5": "2X4QpPPfp7SBWKjwXwqFqZWCVy9p3kYqwiLZ6K2bKnvpgpK5tVYAN9pGL4ZZVNcxqwDK6rteaPYxiGBYScFKxiAf",
  "key6": "3T51HkXgFcRdwdt6GXzhtMxyrucHtcXtj8KjaQXSqJiepS7HFhKXhPaURmrG7uPG5Q7qQWwzNmfLPm2X2y1daSyK",
  "key7": "5KjRqpnbpT5zxhTC8RyxdbQ2bUfTcJnoyFw5iJvP8eSKXa3HXcrzPhgie7HWHpyW1nkPzbGRQc4Sx6HBpxtUybxv",
  "key8": "2NtSQ7nMX49QWi9TdizDzKts4psYqYrsq8AT4u9eQy4gKyDDBnSD2XuLLSwAAttv2ggRCwUs7Qno9DepvpmortBk",
  "key9": "Jkg1F8Ei5iQskefAxrsj1sp8QDeBeM9C63SHU3Bwesgfmr1GsEHTC62rzc8R76vdkVirbXZq3QBsCpGMwqdVLtm",
  "key10": "4NVmsU2QashNQ1UbYD6C3KaJq8cUKP6nnbttw1HqQhoXQ3zZprvZbHEvM4iuaUv2sMMGv6fvdrznYJtErHQGy1qd",
  "key11": "7vUyejcyKv7MfWm8ZRmfxQfsijMrk2wTV6GG5TbaVez3fWMjQ1kDCNurJk6LmMatUuBn1BTMRDVQ8vrjB6iJDbx",
  "key12": "3i1KRp4fWpzMBY99C48eYfsfm9zVcHNXC8wE5B3TmubhBHf5K46FvRCfrVwvwvANhW3M7wAWTG1eeKoBitCtbrjL",
  "key13": "22Vi5JyxPVgP63TKz5oHrXz6dENWkCm5vZLs1esdF3Yd8NMtQDB5jcYe2mzYZTeVNo8iT5r6JcmiQtM4Mheh5gWV",
  "key14": "wxqrPSszsq5Ay5gtqMSQ3fTMwcErUxoaLwQXxMLovvmb1dVZg7b9aMnHew2rVsFBznwPHkANDpCcCKEt6o3mB3m",
  "key15": "3d4Htz8HwfWZcKYd5xkAvtLaXdc3YUDmcMnBhJyTDhJ4NDEXrK4rMjvX3FpXjpNon2VnDE6ZzjGaVCXronHK9a94",
  "key16": "5JDScuz5YSqsVPMA59ZjWLDyXMnq1YKRcxomPMMPmbQn3kBBh4dVWJkrNpByEaezUykRh9rjF38ka2hv9fZc8kHa",
  "key17": "3E6D571KrqS9bRCMHDbVua7N5PrGnWjcrA7B3xxD6mqa2tYxvugXiLX6Zuk4eNeExZSeYjUswXJZfCZwGuT81QJK",
  "key18": "4eyLXuHg2ztHGsNYyLFSaKfXSBCsfdtwwcZH2xDehvnBHBCAxiuggAijykmbhyw1U3A47sJwd8D6PDtKxgAqH5u1",
  "key19": "2N35Kh54AaEevyieo9gKrbRomA8d4L67VxZAsg8obqqKosJJspWETtAefKgCJyHern3ByJoDnk7aFcKzJUDqDjhF",
  "key20": "5Gp4gt2vBGKvRCiAWkQKc8ZukQ7FueiLxWDriJHZDaSckwcedp7gct3HiY3mHfQAaAeAVqVt8f7WuLJKDnFigLbX",
  "key21": "4rW3PRgGhCzCteA3T7rhpnxbH3dZ7QbkTs4LMhMxR7svV6Mch9RtFfCxo1wX8EiAbnr7vrmohfRGFbSZuyGHQA2m",
  "key22": "nkkk4iHdZ22fq3X7mCv9BG8tzsAteo4MEWX4upniBomGv8imWt7quZ6aohNp87C7i3KsmYJHyuRheuSDWhwM57F",
  "key23": "2e4sXJFzWKcQGQCPjiYdM2q7P3s3ErNDEwBJtmGqSRAhNvr7B6FPMXeGWaGoG2NMceRjPit4Ghm4cgAgvDKpGk2c",
  "key24": "Jv2tWihZEStmgGGSeyCkbrhdtE79eYt1jgmkgj9CA7xnUt4ZHMnQ2reX7srJKtHLDrshWiMtiC6D7k6xHRJ2ZX1",
  "key25": "2ocdYtRqoUMixFzSVhT65m3tFGz3YW76srGgZRGKSrb7AaiutyzH6AfgW1nvxT8D4B8LoWdeqe5rWyfyeDicPGv2",
  "key26": "ChtCc825h144mEkJD6f1p1CJrJ9Pkbr6QKqEGF7xoKrZTBQ9gD9cenBYZyudwcve8dzv1jJmJbcyp6Wn2XaA7VL",
  "key27": "4RS31aVV3vqQyvuifSxAie1ai3beKeZiu9CRQwKwqhszjPFstBV37HSxmbXtFvvWqAZitu9WAgZDnJJcrjNPn5Xn",
  "key28": "31sZiUzKNSRxhw8owuFmiAcE2z34De3g7Fms8Hu1CJ5WuFMAjAcr6MdCVkgNGKdRNLL67DMxkdDmEcBQaErdQtER",
  "key29": "4u7QjY36xAppBqEtkdoTGeidNohJbqGu2vWory63bVhht7qmxy56Sfa711ZS7Ug225NoWZxAjgDNWoHppGcdSTTu",
  "key30": "4vBg5HxscS7NvHSvS7menS7pYyU7YJ2P5RfnwbtuY5tV7YBmj3pjQTVPx6NqzFCRm8A6TSV1DCJJRvCN1Wsa4czF",
  "key31": "5CbWRj6wGcn1z2fUTimgmH8sqWBMinXhebZxPrYZSFxMhQta6rpKSEAaVd9E5aGWwpTLTCMsWFNdynsQ5TVHuczD",
  "key32": "2grRiwFpY6VTxYhMbyCoFJi8URuJnGFEPAq2gC8sdY571RrbjDHmRZdGbNYbnLbeDtpUEDhRe9oAxco4poGK2fK5",
  "key33": "5L55wywzUXVKa8H1TrXxqgEDQmXFhCnioZUanhzfXusP64d4uutbtYUeJaaV96vtEpXcMDqQdM6RtCTCAPrjtW5K",
  "key34": "oyvGRqxeWfVMkbBbkCdRNQHzVn3hQk4HgBzPAaXQJzji3vgpytD6n4CW3eCX1utmvtauR7LdtCSXMz7vCB1PU7S",
  "key35": "2rF32nGRZVnyHGwyHMQFU5MH1AAYw9ZXdLiygResgEChTpQJVcbKak6Ki8Qhzursv5Eu5Beycq2gnipPniyHW9Pg",
  "key36": "mjyWX2NFHB77dMP1xouKJEyNo4o7baq94WqLgoqDsH1Prf25cRiXJNZTbVLEK5vWQNprQ656XbrF5JVPXzRG91A",
  "key37": "6vzaLHfKLdC6bunHTYzJ6w5wNK9MbhALXiZgLjMmvyf841ajh5tG3jRBrZB6PCoR8CGffuTXUwuzEWwRCF133g7",
  "key38": "2N8V31hfDJkPNtbGNcofmPuQyXPXKoRVCSqu4aKJAE49tsqAETM7bKQxMHhSPsukA17JXWpLJbxyGaq1yKUrTiBL",
  "key39": "3SWZTLUdBrpHdR7x3BEEbu3zPpUnT7rxhr5bkB2fn2a48r7MS17cFgMaaexB2xGjfwNyh86MCkVW5CbGekykSwKF",
  "key40": "TnZb87uwV5Lq2NLjGZonPf5iPHnZsQrvG26TFckTQAZCo57515USuXXwFehpk3dj7Rwv4E98ENCj8YK6nW7B35Y",
  "key41": "2DuQu6aQXWqtv7CYHJhmCqPbbdh2Ky6BUW7MrcLGUzE2pr1kckksmMx3bD7SkywYT4m6TSZ6UQwWGUmS8WR1C5bk",
  "key42": "GgWJ8khjwayNABR4KxkZzktuE54ZUPX5iUwb75FZrPduD4N9oDdyhoNCbWipXgqdEtQU4B7Sny9J2DmmmcsqYVY",
  "key43": "2hQbtXB5Kw9RKtGcLYi7JDvDdWdNzcsWxMM8LacvRsqi4NfJ7J2sBAcBJ8TMD3MjcdMBgE2BRFk4WpR3hsCNVzi1",
  "key44": "44BFGvedwEKiAtZeDxjoRkeZwTV5tnjGnZv5LcMQSsEdS8twJv7AjMfBf4r4bK1jhC8wrvcQEpF1epzzexLWxgtf"
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
