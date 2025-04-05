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
    "4GqepmVGfxodY4eefWnAkE5bvBng8cxmPR8q28WWyRAcVbWEMcMU7Gz8NwKawzoTJeamTGRgm94vk1D89bY15ULF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VaSkdxsjsypcKBVrZju3geQnACH2jyDFMQE73FnPKr51S9AKpJkLb1Hyww27kXRENz3cCyFAhoVMqFF45HJWwzq",
  "key1": "2azy1ss8bqPTcZRhG3pK5qmGPS7Pq5CD6D56gNMtjXLD1JYm3aU9mo24UYFFv2KzGgtHSKcnMRVzbhjWqcTDFAx8",
  "key2": "52p78iq9U1ZHhkJ1ZUgkBpGfuzm1ZYpaEBcpTY2pHiLYK6o84nkiza7wv8mVnUtyZocCuVxNZditFQBHSQYkTJgh",
  "key3": "SB5K9zvfXDZ5DrxmLVZoejaTSjUgvb1tSr36QH8dGoEddXuDZmgv1MU8MMmt5V3qGfTeXzVFwNvEjj3ER4PVYSQ",
  "key4": "DDeVGo9zRNMkiiTgTbqkh9Sgqs8b31RruspodG4yqQSFSkcLeEJyjSQQNeDY1UcGVs5ha3MVo67eVbsZ69qKQFZ",
  "key5": "3v6GjpneY6DQXEk9nRcar7myg3dKRfM9oV5H8SLxJiGM7PihVEQ8HKRtRVBCvBdqpWuiy3u6rNEoeiDqDyvssLaN",
  "key6": "5KUqD6tzQVZndmPJxtQTcuyzoGqumqZVYyiCwLmyPG4NKwNAvsNFWV7v3CA4qBKCaMBgmZShX9xAc9cgWajBHWrB",
  "key7": "2HWGcC2gcUPaMu6Xo6SSaS8ZDQ1sxYMA517V6fEj2FS7a8syarSdRq89nC1sfC53NscZjeLv55dweb1bAEqNqCo6",
  "key8": "aREjZ7NNgZrndWCPfcNaZUbMbiykyfvDk7eKvjTGkjZ3gZbmw5b3kz5FhWP2xukzBEh1zpThZU2FV8k9PGj531W",
  "key9": "4KS65gG23fMX6C1Q3Hx2F1WHRr6MEnf7aQtTHb6xSD1AgZ5nxY4teydjDxQdWgQvzK6AYs6AZcQPQS4XBCsLg84c",
  "key10": "4cj5y6k9xHGutWsbGvyRURbuLANUHFggnxmccpP57FrNy8M937sxJLqJuiNQBEr2PQyNDwC9eqErvA6kLzgc4qi2",
  "key11": "5sDQ6XcfVxGZ2ZfDYuHCXxBQY3vww4jULroPN8okVqPwZLC8MhaywJWBtirpeQcU9rxJ6dk8mc1koyTHNkErkwja",
  "key12": "YobKYjk2u7AjTmZ1sPF6oG9rbYw7EdkuBAxodQjJtDkdc6C9QsS45FiaQNrAUJrx4xPyLAP2xdzrKqjs1kybVyM",
  "key13": "4DYjGj9XjhadXG4tC5xXoTy2Y5HUy9oivHzTQAXLjvc8PPmhN8eUSpp5r5DWYn8b8bgwaAgPgLkjw6aWpSwWS6i7",
  "key14": "3d15NMdwTYyNZJdncTG8vcDm5WN1oMRnXR6aCmnJN691BvDuC9quReE7ZCFWgnTpngdkB5Gjn3PukRY9AwQJhiq2",
  "key15": "v3zRNmbakdbyJJPBxhcB3VFQAPyG2xTEefpyx3Y2jkWeupvvhkTXQLxNfXTMxE9E1JPi3en5uyfF9hiurmU9Rvm",
  "key16": "5NfR9A7HCcm8TcWwh81Sf4LSsrjA6r2PywTHCeDTWzS4wYXtGLPbycsGiDjJu7d3rNx2Nn7Nbu8mQ7MVLcW4jhhU",
  "key17": "LpnZfERYEv3uKtsAxGKEgYd4XTBkvfGhK8g5V87WpSST3NkYEUWQR7X4NbKH1SLFQuWUjcFYRSMLgfZw7hP8EdL",
  "key18": "2gobomgmsRV8CiHHvf6wXj2GKSiL2QWK4wvChjqmgtAR5pHU8T8xtKwQyYUQ69geh3Aq2jj1aQngNr7RLxKn5Viq",
  "key19": "2XwEtLLPYGSJoqX6q99oenVsoBdZKmLDCdKbEqHKdPgyYJcZ8VGiyPEP89562BLqftSVpwnz6dTrB9ver16NcixF",
  "key20": "2hvKwF9AxjDVejz7hspUZ9FzrgKzvWXQRBgTbuDFsdV3Vrr9rRihATyiKTroSH1e2aWSfpV3rEripmTBT3XNddNx",
  "key21": "3AaVGQxuKULvLrspnBTQ63RhRNvLVEVokddoWnguRchEjSJS24C12yCVr4HBvnr6CJMViHUCdBuXeAhMZAZUxCne",
  "key22": "4JftNSyRNFBFdcWcKZU3wtTwtXXDmLww6YKEeTW61uC5QHbkZvyzM8dfsft1A8bK62EWMnKXWzu1W9sidZJzjoF",
  "key23": "5iArmcLfp2ybL6NVJhYaHFUBHeUpB57Hwzitw6sdy4af4oY12T3gTb3pL8sXfrFLhbSZWi8ommtSi7Vuy25pkXBT",
  "key24": "5SvRYDNEoXiytxyyowxd2KdsyqERLU9eNq4SLQrZnRoJmo3zBQT9QVEu78jCgjDMcqTyanJGm81vnHMVqqeuArxM",
  "key25": "LZJKWaiLw23dtGvp2EvnDwg2L8tKZqDxqdkZ5Yd1NkKgaZRCa3vbfmLEcqxVuA56vG4bpri3tsB1DxdnyomD3yp",
  "key26": "ry24rFjpeMUo1JCpWSE76BATMt5YZDEa6SBxRXKTgPXy8vvHpGYi7b4PGsZpyMdqoD3WRJf3nVjuLBcEpMWE147",
  "key27": "4wTckpz5XnqWNKRUYwNLSS8RTH2rtTRWA4ARDp74qES11Tw7NpKbeXuKDKKcEsVA7T8hReNQ3wbwgSBhP8x3y3PH",
  "key28": "2nUci8VBC7tNg6MtY72L5ZNCpaBmdScZAqLU2d99LG8HroDYqWM3b86zBUTMq7f58KdETNDREWH4R6wHxZfS9xbr",
  "key29": "KCUR3cw5adq8uCsSqsCyHLHj2bZ6sChsUqVtXPC1SYc5ZCFYiXY6E6rEfsf4kMWnTvs4jFEcLhiKDgxFBxbrLnm",
  "key30": "2NZ47y987gADjKvp6HQwMshAyP64oAqaqjpib1baGScipApKGy3xhe1waoBjPKBAAwKR21J1DaEvicbmK5hs8Hfr",
  "key31": "34JMntWSzdLCKCvoQpVSCMMBDuzHt5SH17GrpmJptTC55ywNkKXm4VXqGiSocLxipkXTeRPviwh73WRcAJ7a4Nht",
  "key32": "2QsZSXjjpShbqWafJygZmxz9q35aDeYUZJW1pG2vobUH1DTtRchVJ4yozxdmQry5PivD3ZFvS2sDBhTykKuhZBD",
  "key33": "48iT6Yu7hJK6XNtv7SD8snft23kmtYaY1no5JFFMsPc9Mpz8UjThmE1VFqGq1A3SC19UfNon33yKNUNUeqV5VWqC",
  "key34": "3cjGLXJHruR2q5YwUPPS4LDjHupeMQNYNCrDyLwMB3MpYmtjv6tXr9j4pzANjZAeBvtCcMuNzUzhvoAByF1Qhwxp",
  "key35": "RuVYUXcvVXWgmoL7WdTH9NPMETkRso5Y8CxTiwCQ8Pb1pXtca4J2ujAZiPwkQwctEUKRFTtBsa1bf9XQCRnDjaA",
  "key36": "CX6kD9MGSgLmYvXWgrb5r8K37Zpnu12kq9tNbC4gkL4ubrv7xmJZqPoNsuQm87B8bT8SHL4Nq2dL1DPS2nuBCQs",
  "key37": "XNuS3DJAHARwjTQYfXTHAT8VAE73eGmRo8xy7YrnnnR28CgzdBW3FiYhAkQauJEzZjonpXh9Sv8mtGeSnkkKpbn",
  "key38": "3L8og8SBy65wspFZiTdMKza5nxjZXmJd3YUkXmjB44mDrt5sKAPsR4QbPFn5hCFpz1mhwVkv254M4R9RZwFNKRuv",
  "key39": "4EZ9Q1TFf499q6bQB79j6LyBNGjBfvWfdbrfmVgWjGzPUuBRizjDto5CWxp5DEfdXHHLJDrRHbsbSaewxHDdCSV1",
  "key40": "5tMhaLDQAMzYM9MfYxNvbgfDjFyoMQTWKE7qoSBBJGtfaeYypVFxhZL8YAc78oySd9a2t3ZRCeVR8udRHt7UDM1C",
  "key41": "3Y9nSwM7e5EGcv3yE77U27SM1LTpAXWrX8LMM4C4T46n7dvG62x3KxptvrQ2srHnR5UR4zdzf8p7qVF7UehRd159",
  "key42": "4cyW2R1mLH4WWDMG4TeUYBEvWWKzxhWhS4tgCWwr3ZVzQPCkvy4QoUQLeymuzvY8q8wUQHoEzbHeK3AkLXUANShm",
  "key43": "5HnrbSAhw2MR3hgiAQSMXohRspere2CgpNgNBrv6vN4YgVH9ffjfrWz1zaBVvGs4QUzRA1WUKSnmwKeXZrwcbYeY",
  "key44": "2VPemNy5kyNaEisiJZoMvwtBtMhwq9w7YsBmh8Yj6xDDnvCfTBWmwajY9auxw1gYr3voiJZtFvx7ZxFfnmYCoFkD",
  "key45": "2wjdr8zwE2nBTrDPSTSvGSBZVktn73LuKgD6LYC4HLEFHnJrRhzqJouQkTjtFMNEwe8igYpmpoqzsSbWDEdn2JCS",
  "key46": "CFxHUqSVhfMgH9xdi2P5ZRcCfwJeEkJjymfw6W1mRte9aabYPEBS93VckY6YjER3DVWZuAgBx6wRxe4Xayvm4vD"
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
