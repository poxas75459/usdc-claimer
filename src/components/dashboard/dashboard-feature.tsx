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
    "htQvfV363cYQi8TgKbFnAGCAiy7k3ieZn9taj2qDyA6LDWxgSrGDrSGykN6XXcRtR47w24ouajbrFiZjFmRwCQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gxDEmPfF4PAejAajTtmkSwfy1kepQomrtxT31H4NhXnH8rRFrJeyn4RGzYe2Lo7dG1qzfHquvVcfF8qwzLG2wJr",
  "key1": "3bncgrJqVshfm9MMVS7uLeWuKVUGT23wsQjgdwXGxswo69tyZ22QdcrHhQJG2uuWxsKSReArkHD7BR8HyrnfQCHn",
  "key2": "5F4c6udAxiReRac2sayF55R9z5Qi5rSnsKhE3wEo37nazyMdhGJgKaGMedrnLgy5HUzojddCCyyUz5PPfS1p9yeE",
  "key3": "3SJ1dMoGKzwQuz21NY5WLbEimjtmEmAMQTTiot49tmEvK4zfK22LiktKVMiJEBJ2REUpTzniPGoyJRCFXkRnbaA",
  "key4": "5hh6fvGWJ3UbuqX3qXmqmy7MjLhTywr4aQ3EEGnvsDdxaDVgJji56jEgoZxmwAqKSw4LDj4fXDAJFky7DkxEJ36B",
  "key5": "5NbBsoDT2ESUNfsSR3Xz4MCVSSQx3cZF1B1gqLadTuu5oUNw21qVP1mZGevHSZdgrB1xq9WE1o8QXHqRAp5GJQJA",
  "key6": "4TpVmjNQVdmeniJM5x6z5mj7GWRd37EZ3Mk1yHmFffQFHvVzBQsdTUkRjoKyHFbrtMt2W49wBy2kxKCbs6xbKt32",
  "key7": "3urujKYje4pFoMAjZjehewgmyFDBPwxf2wUqW7hB8sLS96rVAFeCsjrGSKyNh1VbMiPQ1HqNPPa9YZZwZN65xnRm",
  "key8": "TniZTHzUHwLK25bihqVz7ay1r8T5kKRKpYoCuxGK6JgQN3ETT4Yt9sFp2DtxxTLVxBeY3J1PTMH8hENWTTpt6S2",
  "key9": "4WxeYQU1FjxR2nCEYbNsXmoYBSG6dExa7dkTY5QfnwFeVRRqnXoTydCESEa35G6NEckDpNRV187i92rFAoaVCf4o",
  "key10": "5PmVvE5cHkYMpCYRDjmTLuBRC1htEn3amXwG3EzjzferePboAdtEqK58X3zodDmft2ukmzmupHRqaEYFUKWdB1wi",
  "key11": "5HwnnCmQGDXt7j8kWyWYuWvoFNqpxWTogFkPw5YY9gzJVc5ZnMhrqgyFoWM9S5QPHExb4U7tdoAcBQn9Xot5tLtz",
  "key12": "4YWWa42xCeYw1fUzzCzjqJ4VYMs25er1DPqft9ePw4iS5wSPdq3hB7XrYUkdPQwoHG9sQFhJbJwNmeZzACSYq1ap",
  "key13": "32vQF8zybK8dBHrNHe3dFYB7qUFpt78E87y6a3qwQXdho4dwzuj5xdcEq47auSKxZgZBuN4443JM9Y9dknvcpkxs",
  "key14": "27eQbo2LFpWxHA1JjBv9iVL8pmB2ZB4hTH3FuhPYgbQniLTcWPQ8KX5S8noPRJBJt1cY83wV2HZJokRuSr8ZZSbt",
  "key15": "2UsEF3pWYZB97DUNstTKgXpok6rwu5PzZtibqDjsxsH7n2nLTD2H8nF74yoyX2ysZuyDKzPk7uegrKh9GSaEkiPR",
  "key16": "237eyV8wUZKy5AQTqxGTrPrKXmbi5Fnpvo2qBVPsiErZfof2U3XEnoKt8obP9xuiQh2vz3KViLBXNN8i9DjNr9SV",
  "key17": "4aBEK2yyRtuS84WuPaxjRTmut1XwM2QB6wcHE2GYURJxXpszJeFdR2wRGat6SiJPvD5cFvPWkW77CtpgPQJFHXwr",
  "key18": "2pjUr64BGFwknoXFQNjtNT7gCoo2RFyNJSHJ86sFdVQy81j5MK9i5oYt5vNrNwGKVWs7imTrYGj17jmZapgP6qcf",
  "key19": "xkCMPazt59xNSLuGX6MtJgiwBHPcwpP89KD7RZuvs7w4ms37jVYcoEsVeoJjYShsGm65rV12WsLnkvHeK9R3CBB",
  "key20": "3Cgypy6LKBCXQX1pbuKhuBcHdU41zuvAANWxLkiq4GTgqv3JKnFmDawdR4KtDZVVGUsYU8qfaouWFsvzsmkZSJCp",
  "key21": "3cETLUu3ndUQjpyXQQcsKx85WMixHQRwUxSnzZoEj6t7ZebkcckdN51WowDmvobmN9WiLsHhaytBdyxa1dTQ6i29",
  "key22": "3FCAzo9bcC7E3N76qBM6ip12Kywrz4zqPjvEDS4Dx5q4wTSXPFqqKZR3gg8RiH71j7FwxkU1ZoimSyxyDEnUdTqX",
  "key23": "5ooc4fGjHXUc3gL97sM9apuSK5KQ5hzh9NCX4U42TXHE6kAUbQ1N7f8FtWVUksJ41QYdTYPQuRZUTfGX9vVjtCRE",
  "key24": "3fbZE6GVK5mfmXcGUseA39rdzwBA8oaFDv5nHbAMaWF2fYKqtuKvvzZviuNPoHQPiEf9sJhe7dnNeipCnjyeyTnC",
  "key25": "4kVDM4zc97DZt2uk98aJZ3eATwkeuFaos3ZWWirigDV7twycDQxLFpSdmPSPvYyLmPkq9NXtJ9VRp4gaXMB1ycYF",
  "key26": "nbAWWoJAk4fzoFtZ96dkRRV2mdn1sgdDvzySqR1mViR1PQA9frqHsrC949ghu51eWJPtrkrUJ1XrbuZAQnvaT2a",
  "key27": "5wx67xWE44aYgreYvKaAoDLJm8M9KQtYHZzt4B66QHXHp8PPFeogwUzB9r7KSqEdfdRzk85XVDkACcPmFuiaeCmU",
  "key28": "c3GhJ57hQpQWe4nSKjYrZ8XsRK2oG99r7kpKAy77WHUa84Y47XhNojw699pPF9gjddtRzdsXaStywYL2KfYQ3Sv",
  "key29": "5mYyN19y34XpRzAkGWNBkUsyHD7cAc7Ngp3yhfYh1VzFfTFUntN8LMg2kPKuYJwVnnCR8JgfJXZ1fXEMfKGx6kqY",
  "key30": "poznpWBXpVkgyjXEff9uN3BRPJvfRGxjPJmvLDkcruL6F5XmPPDaFc5bsnYfyh1jSXjS5XaFGCbt1XyNM8YkSQt",
  "key31": "4Wmqzz7vYH2rbk55MNVuLMKTk3efHaSgdiiptDd26WeiuvR9msBhcFa15YLVco5eCcTBAeSnmt1kG9iJVK1FwFTM",
  "key32": "2qGeD2YGsFDHhj7RpeTohrJheWQEUWegTNNwNPuBJpMGBUERaPpFQCjz2Pd7oh4JUXeqT6qtrd6HPuqAPwpiA4eD",
  "key33": "67Ct6FwXGfFB7RLZ2VTHiaiworSjqQfqDNTXhv8yfoxDzu8aybAgFXiLwYwbhw78ndozj4VYEB2vcMK5pBpvP2zf",
  "key34": "3hBPmygVpcU7yAU4AyX8AaFXq2wUUSdkLGwMkhAMi2boihpdwpqNXgA35RKpuSgnhAFrdhxxH5k5EjkzWQPqM2dW",
  "key35": "tombZtwuq8kpCgbfSpCJxpZ4wKfDJbKqMd4iEEoPU4ZiM8hPiWZkPFRG2A8SNEZCQX57NT4N9SChFQqw8FxtPxL",
  "key36": "66hVv7BZfDif75DT2nr1x2k3HTxFm3HEFephPN9VKtNXYYvh2cEm9Uv87nC4WLdxVDBHBRjjRsKKKwuKQZ2tutXK",
  "key37": "4SwTxihRMqnXEvSRq3xifke9Tsa3jvvZa5QdmxQPVsw6R2r4jG512Re5MYo7NFHxndFJhPsscBkNyaXzLZE9vax4",
  "key38": "4fpB1gsSMYcn3q72co3sWCVqzaVfxLa2y8vg5H4WpZxNUK7B4XxpHPvcVNzBuDaR16wMfqrL2pxti6xo1yioczPN",
  "key39": "2SohA5ZNeBrZzcneZ68h7oJztu491HYd5YRYokh1nDfaYb3xtF4ng5bAJ3YALSNSh3hXX3aSwHPbW6NpmXZPhX5M",
  "key40": "41kEs2DLuToQJNLcxi4yPeW4Jo7f8ovYc87Xkg9jEfWtkbzxrQdW9aSy39UVyTCRyesongNzjc7AZNpVvLjHNdg6",
  "key41": "3F3oZKaxFXVxF1Z4RWqjYV2NHMrpGq3sCcKDRGVxtFMcevbTfZ385Exdj85U7jUiPij6to1hR8EBQr341m7DSq34",
  "key42": "3Kv4VhUmhwPyTsbjqLhpja9qktrHYnuiCbr6G1CcK1PVpi9cagqTjFftpmGnmroVjmL5cjmZ8q7LT9hPCuomwWYA"
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
