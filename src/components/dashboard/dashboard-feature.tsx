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
    "3r7PLuCFLEnvJCzHQoBH4soKCGjPBsmFHBgqGqQrQArfs7pQ1Nmoy89P68zw1cQPSs38HkhDawjJz2uKXkgeays3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDc2UEDv5mgPRqztsGQsw4JwnnZ5w38ev9W2gT5s2TdnhrSe2cbNUzraLBqR3nVgJtKRvcKM2wCwhTsezuxtmZ1",
  "key1": "3ssJ3w4UkyAjx7nPXNUCC5rSLxeiaGUrNDK7XUa3gxdSpDAFxaZJH7MTxyTKbeB1RNAeBM9GFAnvbqKoQrunJ6Dv",
  "key2": "9ahEDaEubRHTYgrBcHTUQeeErjJuuWtMU1cGVxm5P5A8KDN4xGnJxZSmzM6zPnxSamfkYdXxVmRv6fQeSsnHSMo",
  "key3": "WfJhMzPZM8xGg9pfV2ttnMooNeJxuJj13Zs5USjBW5Qm4ne3j1noPFHzxqHETQsPZ971P36eYKAAB5MAh3vLP52",
  "key4": "3Q1P3Bzz9GJG4TBynazNFQW52x4JVTGdzGKoq4ByqxiSsqZuWzXLfyBoycBjsdt86MZLWWKUhAzXvowY76h7Bzbt",
  "key5": "5PPT6FGaRPK9sx1ptGFyTAZgATbmA6mVh7uKAuJ78EwqnAQ2SSajqJnffsatR4DnT3u5YWuPgaeuPKThytEBdR1i",
  "key6": "4LWUkiLg2vsah8oqFhCyn928UXmeL1At2qSSurQDAFmnuh21sor7eJ9gzXhsy4HGE2TEVoT4hJdsaeTZFvBTY2xg",
  "key7": "51ZZJhVyH4VHSgZJLPrR1dXyWt6yW7PYgN4NFrxy16AnRmi7E51EzaDzZe3KsfqY8nqHKamqyKTmK3Kg8WL9Sexn",
  "key8": "t3tzZjKv9N6XjpxidFJuyY7XUt8oGGDDpJWsmrZTzknRhAaWsJFPtVn54EsC7MunJx2rFuJdePRFcTHDfECiMSx",
  "key9": "52F5NPjEDg9tpZbd5DikUX7vmMeo3ocarpk1rNEUF5VPYXWTCkNLjm4TPxxLANqT2bdEzKd5SoqW9MhtUpdGqtZw",
  "key10": "YMGhmuQDJTmgn9LpvGReSznqw5NB8JBPX1DiYzJTW4e9sUJR59k6kEjXfR7sVZjdfApPoh37tE9k5owHZ6r6fPs",
  "key11": "3KKE2HezdxxPBDSqCt8Vuzduy5bxAJA44MFqmRU9u7NMiBB15BxKbEp6X9ziBZkmjeQ8F2wsyVsPUz5C1p7z8BJ1",
  "key12": "4Pmu6M66txxf7r173ir2ygWatQqwjHkjJPp9RnpfK9FikLxkytvyJkeGTH58NAKdY6F45HzfekjG7SP9yu6uxjX7",
  "key13": "3pRo52MzbGX5QnWV5b5u2wxL1wdyiSND46bPjgHk7spkxGgzw9egJ66VJRJcUom1BLfeEQy2Xbu5Wzn3bWXSZWxt",
  "key14": "K8c2cPjTHykFoE4D3PMqccbQvvRso9T3zpN37JvR3eyqbNoVmVRFqUNaSRoH7uF43bDueNnSBQkhKCSCRX3wo4e",
  "key15": "5MMAhoGLxhaphEpMmuqJDMzWLgsK35Pz3PUyDuoNRZZ5wb5spFzLHzYdwy5TdA28zQvHab5nGTrvnUpfiJCt8ich",
  "key16": "VkjfvrQL5pGsyJLrXXstnYLAfE5DduxWWMpq4y76rTw73DgoLZ9545rR6iP7RqRZ72d8pj4MCyqGK1poG2ND5Yd",
  "key17": "y2iEuqF6Q8q4TFcSQYusHWN2CNu1psCN86tHpuFEXxg2jSebTUVvZoWfbVjTknJBAFwwKtQoWodJWcnKZ6FUE8r",
  "key18": "XJ2ZTBSUB4PQeJu1r86ioC7xwr5YwqyeoyAtW6t1i2Gue9n2ZUkdqfAKaFaiqdE4yiQTCfKeEibtwVj8mh6spuC",
  "key19": "37TPp92xLWwRNFFwZ74NhUf7fzEsYpim8VVJQRSdTnWESitJTveYBSQCTDdEVLM4a6BDQKZLoELMo29Emec4vNiQ",
  "key20": "GkW5wzBBCwib8ewswc5vCgWSGey9EsAacJKWxXkpMKwWHZAV5rf8TiTznAp9p3wRTV4p1WE3DQqhVGq36Rvdi9H",
  "key21": "4ZePC4vqxhWEtUB39mWauSGGGSp1j7Qw1Mr6ZE3XFRGbw7potFMRQbaMQj9VVQviVnRHHDcV9846Bo49nRJqR6No",
  "key22": "4SkYA3dLJJSoP1J82q8T3Pt6dZumebphEMT9WqXkktwcJYQ6Gqc1kS9r3wBJzXpd79MKkXDQehpmtWJfifewtkxB",
  "key23": "3aGXJ6tUqwbNRnQnrSjgS5NMr2frkHdKDh8n2ipchLvdcjoqN8eBmkcNjFsotshCAwmGVbT7ErXznJnXFjChPpMM",
  "key24": "5PSHx5H3nPMftmk9xxfKNuzN4ddSdJ1HWqLmq8rzbRaFAnGZNCWdCq3ZGLiGETpZZMD8eMswpmXUhbz3KRnPCt7t",
  "key25": "5pG5zvqRHotRcVp3ZjHQcViPVzjqpe2DJToMBVEcXR4QkeshWzZwH8FHfB1CptBSsuykvCAmnps1MhmJEgni1Jdx",
  "key26": "2jMbZzMXV65FrnhN9EKx3BF5fxHRiyLa1i1TB6HZfAnMxC7ZkbLSeuT7rDr6sbcYn6icsFBEto2PyuMmHu9tVa1t",
  "key27": "3MB7Y1sPVJhhxZX5cy5oieCLg4qYnCVkZu1yrU1t5PXSz8bdhd23pEkffhWKjCLsGbwywPBJhvQU2iuFe857carz",
  "key28": "cZHsoYMN5ksR72Yi598vxATBoUaeaAg94PnV615Rxw8LwpUjJzu4SJz1K4eArrDvJVA86BB88EYZNg8CNPuptfN",
  "key29": "2xYiMrX7ixU2udwwNH5A4hkxRsAza2d2gzZdGXYtn2TARpuDUXrJKHPmq3N5uMksPxk9MzcyDXfQcYjsGgwHuD2x",
  "key30": "5TZ7Sr5BHeE4po4eCNm16yWwLc88GPEjTdE98EWvNqfZMEYuAhwPiKpjpD934PFTYTuD2yNzFAupctgM22M3xxVz",
  "key31": "5Q2F3is9dzMZZYK2mSgjAPV5LJrozQf3TpfMdFTvBKabmuSFAvT8L7FhZr5L7ahJv6LSf92MAHifCEVQL7qCce2K",
  "key32": "3j3gyXL2LtJ6DhrsdJqrP4C5ABJA6ixz8mMq7upwH5T4niYBqtNLa5my28ERGSfbHQ6nTdxMZhiyS1xg3rujD8e9",
  "key33": "3HuYBQkCjCahj87jHTaNGeQSdcAGSwm4gAzUVYhbQ1qGsY8DRzb5MZdgnzrvKzoMUWiBFz9wHmNo3vxGKYzWb1UU",
  "key34": "cYKihrqx9eMpSGiMJgnSXQBoH4bBxH81VZNjP2sAnXJJAYDHgdBsLA11axHDrvfAbkqEDceJY6xBFfu6hGbEjSz",
  "key35": "FDXVvnDnvhNxuJJXKjWjPZVLyxWoWeW2hMiHnhCH7GcMYaf5c3BvQUyqMDcuk1o6UjjhoVP6FPgbMzLkgWYoJYT",
  "key36": "yP8VTi8CUhBLkXDwGPPB2jL5THK9E8BMm4JQS3GVne8xSeEUGPWqMLqveF3n8f64GyNb1RNsoRfRd7HZnyuVbjj",
  "key37": "3KtRtfu82QQGzP8cTwrUXEjxmsh7KR7enDKneLzQ4nkzZQDF4TVCXqcP3NgTx68caFF9Xp9rytyYVvQxLaYfz3x2",
  "key38": "MsWWbLQEXzWdLkYoQRK6QsPVGhxijHNotKmnzmtH8qnp5sitoRdfcRfUFkMwkzQBbqNdABMXyb2NaS1EWpRqTKF",
  "key39": "5ejxnzh2sMdy9BuQgTcNgWwrqkaB7X5dNaNCcp7xQwT4q4YdhTrar64uEUis9XCAWfot92mefshZv7ybKDBQgFvm",
  "key40": "Gfx1U31bujtza4W61JvFqZawW5x3JciL3ThLTaK8j6UZVLNYfuZgLZCRpmPHJTh6PZs8ZmjrZ2NTxLW5x12Fitw",
  "key41": "2JM8wHPohjvDgFCeJMjDbQ48MAx9aSobBfiEcMJjNHikvcsT1TLUJiidcfUmLP3Ai6k3uZDmGCcCRaGLzk3Tb4kQ"
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
