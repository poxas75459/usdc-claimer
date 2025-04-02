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
    "2ERXVDgu1bTb8ja9HC7Vf4dBEqTBAekkJAVcQnpmBpGuqAoEs75A8WFkT443966PLUnhE14YXVKn18QQuK3Z4YN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjUcVouXtRAnLqb8vv5XThZiPQ2G8thJsT35eX7WSRjzK94xZ2CgDS7SVU1amJo6zoxQrYDd5smEga5qQFgJbbi",
  "key1": "287JQzPE5SDLo7oKXGuwMNFaHWyxekAgMxLVEP9DLnHm74R1212cAMSLvkrT7SA5dmYfcixcRR2p8w1g3rXHNAvw",
  "key2": "4aXdG1G1i31HWHViP12VSpt8qWw5XPn7nP3T7rm5LGX8mh6SjVxpWjqhVahytPu5i2oiZSQoC6v7h5LkQAfm3fN5",
  "key3": "HtyrRuxgskoJurAeB2MUVpzZdQ55qseK4VJYuRv9Z3qh7XSqaTFs5AoSYStMQ2fNMkDGY1UT6F4wojqViaTG1qt",
  "key4": "4xAs4r2ph8J3EqbgHC4PnftQ11CLgjnk5wbKJWRxWQNo21TnsUqZixDXDFQN1KaoKtEBxmmfvEJZK3EQEAQ6zkzP",
  "key5": "4Hv4Bc357xAQ9dMrJCzYmGdZw5Q5QXoKwWD8QJXRfhJ5Rx5uQLeSEqj37TV1tUNYgiSum389Fq9mrGqUaUnUZYu5",
  "key6": "5En1j2QpuzrkncsPF3ByvJihoki14i6WAdNAzqE5XNxaj9ECpc39mTeNpdEjj88uRkPVFV2Jjbn7jAFVG7pmkNpT",
  "key7": "2aUxccs8dzoGeSecfEtgtAYLSy9q2wET9LYves2wF7hkckfybGasq1topSw3t4LZBnZG3eMBsWmzoFGCzSUv1qG5",
  "key8": "doPTzLdhrm8Qw5UxVF9d8J72Xq6JUrysLckAd6B6KPAbKqFjvc9wfywP4bUa3ZmRMHLy1VFip3roKu4eY66SsXu",
  "key9": "3Ei3mToGp2jdLgGLwTurYiP2vDNpuqswyHsA29uDdJMZbFdJqQ3UCSBv5JS2z1xSzq57sCQvMd73Uc56Da5zRRpp",
  "key10": "2mGNqPjYzMf6uc7YvGHEYVpojwMJ8ia5xgU7qdKpTdAfsHeoqQ7Hkoefof5QR5aDKVTNFsCxrPyXroG9mEs74Ena",
  "key11": "zBPhgvQuGBQEF2hbHtvPLi2NkciViRob9xPQj1pKCpSVV8XtsT6YmwZDmMyFQDMfSUoS738zRfQVYC3tA3DdwrZ",
  "key12": "3pGukZrm5REX2KoFrLBZtvYibJkMiRSpbUvRmryLNJeNWQnu3BmfTUvzPqZrwr7nLpaPTYSVQdu81KP29e1PxdDs",
  "key13": "5KidQnLUwAyd2A4FCkdh4NNf2hDrJXhE33wj2d63d7M6MNVwqWvgWovor3UDxvZZqDkuC8AszbtEC4HuMvU8h1Py",
  "key14": "5SsZye3YZoj41W2KXTQvjajyNe6pgLHyvoC5yPgokmyh7P8GXiGrorKHFKeTMp5P5VH2449ZWS478WBRqGPgHpAi",
  "key15": "5k3Ez5htYN1kYUgHEAFYhGXMoccHXPeXoCgnsEqMGUyF7XXYTeVEzGZzPVBsr7wShSpSKfsYiJM5tUZsTLDhSxyD",
  "key16": "2GcpcDdiXm9Bu1F7U7nZ9FcdMLN13s9v5e8xZ3NYKteY2DoQtefRp1RyADmAr4ipQeTsriaE4QMnJLkbes1zb3DW",
  "key17": "hYUHbTUk4MMKeaCuXobaqksa5mv2J6a3ZMdCVufSrpf4DbVRUfzrtuzLSR2Top9K6pYbHRqbu7sfhPF3A9GrXTk",
  "key18": "47qjJiznQs1sFWwvRF6CEHu8oQSynwapoW5RPwM6wJZG1y54TXgCvgqqGrezUDFnGRgurHBcfDPZXmbD3sDSYVjg",
  "key19": "EZ84xAGbdkPBo3PU1uBbYCkPCATpXMF6FLfcfXJ1pCYjsWJ6DaNBuGnRjVYYBnLxUbsSfBgS3Bq21kvADqR31L9",
  "key20": "2WwRBfPKmK1BW8QquFNbTGNZhdAUicirbLQ7PGDcDD6XCpoBJqyqYG5LDVetfDC9xedU1BYpwEZk1FkibtxenqAW",
  "key21": "22F8Uw5fUAe9dujMbQBtM4cCyaVGCeYb1vZgctgBGDs4n8e6ofcg4xYD941sFX5YoQg9knxx2CFTZgzSKWhbqnMd",
  "key22": "3qSSPa7s7nYAd7eVi1bso3RMHwev6aU8hVHJzCktcavChqAcH1e8nj5LRwiEdpbevaugJmqyK3SzdvMRkQSvCnnG",
  "key23": "Y3vghdnf37ScEUTWPhTJthwGNvt16Yvd1kDTkRoc76ozGZtfw6jry6btbhkt5jvPHfKsS2DBdCicz4gzoVYHpBs",
  "key24": "54obAxMgf7DJ4W8y2HFGr4JbD9MZNe7jvF3hrYAJCRFkxjPTKCdEjzaVeXTBs9CURmd6G8ya69mkMZBVufLUiBiD",
  "key25": "iq69XxR3WtV4GPzH4TZUkrWVKRqZswXp2wQXzjMKNNuXwN6PZzzRAKnM2m9kMo7GHWuF1Z9beY85qWGeTmeUJLk",
  "key26": "42FrLmMsd45AbwdMY7Pnox6rJV6TuCsKxaAfVFuLcG55aFFiEKgUUtrjbRu1EJQQ32DjCg9kpWrCqgmC3Z78u1CS",
  "key27": "3ydMA46fcVaMmqbiV8NZk4bjt7qXFYUVqKwEKBivVCzywfGss4kPHq95eHB44gWhJfnBPajcsr1szuZYwczLoJU6",
  "key28": "oxwMUEVeN5EBLni6RiGUzX1Yjtccc8Uz9mT7BvKW34bBbBCTvG7XTVZM9T3tVyRKHpTxJFgNKTPVcpSs1EcJ1XA",
  "key29": "5QurQU4RokPTAXTkH74jTYotxgmVJnb4wYJLwAaWsPFrf2tBSaWWcfTVAoXZXb3FCJRQETeRAchiypTALupqH1je",
  "key30": "3xXmvybH16S7yroQwXN1Lr1fNCQ8WEDdZpYYs3DVquzRJbDvKKbM4KHQP1s7ZkzRF16eL6yVCR7WUkcw7gZstE26",
  "key31": "5xAESvMU9QTo75oTYV9ebVay8Vvw7tP3RrKNsaWtdWdTzoeXemGaQn8iT1WmYnKnH7yYGGBxFM3tgfaDzzpWDQmw",
  "key32": "5Gh6EtdPoeuYrG8K7e83D4gsYgKuzLiBbU7Qg9y4CtWuuNNmsQbjuzi4D9nqM3Tq8m8bFq2Swfdby88xDdpYzirN",
  "key33": "3Ju2YBESNMhfUVVHQvb4JebXcBZXPRCdtrM4HLnL6WZr5Vc4sFBuTVsTDCVGfpV5Qm2QRKyG8WMkgvHdfAjAhsua",
  "key34": "3dUkaqiyyJV21neXyYYbQ5QVnkPLEtScfmWjZLqQkopKRKTdr63bEL2sd8YUU26dXK199dVzFMcLUxMAxSjwGgeM",
  "key35": "4kE7bNbFuHNgmmLnmGqusLUkEAmT1GrCfNXLrNubWRhik6JLDUwntyp8e177XqaQQwiz2J4Sg6SkZZQ8QfVPii3j",
  "key36": "3c82BgKp17FT2VPHc1MHSdhFqHhFgwuTUbHaRn29HTaZFfDeHAwfyQw7TVFFeodqF8ndrgV6nt7qA7cpNpZjKPDb",
  "key37": "5GNMk2ihrYqdXzQt3SmUTicFDZSh2FEpd3MKqRuwQ9SwzzSpEXPyPwhMVAB79ygKdER9Dkfqy2zm9oLQ8Yn3Gktd",
  "key38": "rEB4YX35EVhrSsdQMLuv2cDDYVRjPq4pqbcCsPRkqQ6cxZWtvCHZhEYy8es7pFhNoY5z7iM4FAN6Uhvz3zds1RX",
  "key39": "5zZiHi2rqcGawqx44sEcPPTdXqRbYLXh2kx8WX2c1oqMDGJYhX5VjaR1ErSMyQvp2oaRQinpk55oHUh9TbXUuDMd",
  "key40": "27V287poCGEJLcacPgVNpsAaaNwgJuzUoabPntWasGJHjmksYsdxs9U7hBB4FgnzkaZoGe8XaRp79T4uWw7wXjAT",
  "key41": "26FfSY1dFTq5tNEpLiBjGU6cC5p1Kvq9G4m5SLF6dShVYWZHpCfzMVzNLu7LZnama5kiuwrcFTgJixoU9SHVEsL9"
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
