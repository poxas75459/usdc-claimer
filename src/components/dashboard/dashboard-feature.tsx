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
    "seKWG185H4CixYofh1a6hneE4BYKoC3fPvpFa1hwNpnEEhaTP4NusosK23NMjvCsXMgzZCCDSgC1FeZx9QYQiFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7yMtr8CGatbpysMSJxs4G6QA7mXxG3GKQkFn4t494yDbhP8u9mHp78k3HP1yp1NF8Mv5VEeWHE2XjZ6EdZikbC",
  "key1": "2sUTH5WH44ju2dBxHCvEHDuu4X9Cmbt8iSXK9S1Gfv3pkQzMmTRQE7Jz5tjWxEb5Dyn289a1gDHXnr8rVxxPtxhf",
  "key2": "66gkZbXQhx81gNeydp11oXZZiTMsrcTdB3ikCpSqacpMhwFciCHU4W523XhR5MVYrBtpx7Z5QJWAj1Yrxo8r5v58",
  "key3": "yPSiYX1prhusR4iQ7xnNYYzaXKPxqK12TAUR1bRkJ5CrNSHNKQnNiR7YVGEZMLETAy3csQBXypw9XqwiyvMUJhv",
  "key4": "4id7DaiHFz5cQg7ufo29ZuJvXxj5dyN56bLdMXAjjasEWPeUZGAvHttFTZzBM9N7yfDvE3q4ZzLdF4zhEEaBTor8",
  "key5": "5HhB21iu4nxjBQa8VQVoBrATWz597iz8B5U1FbvRyJdEYxHeUb8RNz7QVsyVKswAAmYxXVivy6oaT8qpDiiWV21X",
  "key6": "2uT9wYGm4Fzov5caXQFp5hSbdhpGqbvui7FhRitRvT3haQATw3h7pUPXqYThwHEssfKuUwABFs6QNuTw8c5Eis2x",
  "key7": "4EsypZ6K3ytZfdMLegQRxDjJAX3U3GTKbJiYLj5qV7TdarDkntac8DTKzLAQ4pkyuENVVBWECZabman9i3gPRWyE",
  "key8": "39nmAQTDvS2zBrXsmYt5RR2FVL9phgrEyiyECEZgH2fqLxbzYLaDsz9TTSuPjbydj27RQwdY2ouEcQ9zDtaviMKo",
  "key9": "5oAdituRtxKRJsDMPojqBBvKyHPLQrZdfz4FoHSR9QENcj2qqshUin5LEXG26nAYxemSNb4kFJZwgd6iQ9hQvQTG",
  "key10": "2Up4rp5XELSEycLYFMAj9kqrgEdKqjaecMRZYwkKiz7F82xT2H2LnXv2Wz5z2ddE9aKVV22rMF9eJCEr11F115m1",
  "key11": "8HxY5YazseAbAE2CzaTUEcH9AqYhqs4vvwJHuK38qp5eUFLcyZrMJyrGRikzGHSXRk5YGgw67tgppZsAThpFxQf",
  "key12": "KXN7H9V2TAoYb1o5qSphPaRak9HotgfPv8AMFnMQPwZyHT6W2mmWW5p6xaE7aXjBZzNecMMtEn19xf3p6t7muEu",
  "key13": "3S772P56hM1ZrpFqfzfBaFZS7n3eMPHb1zTY5VYeWRhnftxGS8EHHrdTb9dmGCy5afCYBktMT7gmzCAMpZ1vUqdf",
  "key14": "EvHqzWkMGVtV84VjMz4L7yhjSo6o5Ysn8vR7qCipoAbewM7KtbqXsvjWLQWc2jdfCgUZMKjCW4NmmCf1HSALZN3",
  "key15": "3UCL4pyh3jQMntCWJcFX5YSGLFHzVP8zLStGqDoNm8FzEBa8HTMAbWt3oPzDHC1mawWiaMicyMeZRHD747c7pxep",
  "key16": "5fbmHik2kFubsY9c9V7qzP4stkjPKWHNBkpTHSVXoJrxHPPLphrRDCusgvpGgZ6pWFCNNJViUvNqJD7uSd7rh3tY",
  "key17": "4vf1aCTPGunnonC7mn7UZc6jR1m25CSEZX913MSYJ8xvnh4pnVjtAZDhqNQCB3y19VZft3rDHRaYp1goA5VUM7mT",
  "key18": "2HAPVmZaGFj64VMcdiZNtmPVvfxWG6mtUecZaXZC58PjUVYsQfHTUwkAbcZ9EhSmr2GDHe3QMpXzhvVpJ2JJoaTb",
  "key19": "51Fyq51ZsvtbWdRsNDmg7EGU9FdSUsV4UXwoccKoms6kWQfSbDcboq3owS6Psq7qb69n2DfwSwpc72mMSiWpqZsw",
  "key20": "2NENEnaDBZZVEsDmWrZ1ANhr4S7RTZRjpGMNFLEHLndRvmpuF7j1dGsMnijPcdawwD2A2kRsraCNT1UToMVkXuSD",
  "key21": "5okb4LyARfzU2ECNu2JvYCJsi62n6TDKVxkYkp7wMadK93xEwC7chUyYimLeTDUujdDV9sJmRKuhVcBqUv2eVsBa",
  "key22": "gUya493BGDmNX2k74xzMN3oMhQ6YKB8Yed4jqu8JyZcVwXsYkaCZeVFsu1ck8LTJcH6frsLeNDKxaizhgdZL6rZ",
  "key23": "32GxcqbqZmHtaaQ5fTdZAjWjjJPkDJMsRHpipZDDfBfqFRctnRpuRCYdQhiC7p45YHUKxvpVyxvipthFC1XDmyu1",
  "key24": "4va74HtkU7KNNGct9WrJyDyaFiRTGdFxSvwT22K3iGfdn13W6aexXq3oegmgRNVznXm7HZ1AmmhVcJjPFopmuDQj",
  "key25": "evSuSkQ4bugA53rkNBxwFs7ng6vAG5XZb2p7soYcqyHREVx8M4phFGdJ7RSD4fPSLCY9vwGBiks8HHmQ4zK5Apc",
  "key26": "dbpzBwwraGJkVNijqH9BCprbZ7cD7cDBXQfgcDfvN55UW99ueqKDe5j1qwo8aCLDReYSQbDRsMonyCNZx1svSCK",
  "key27": "dKQAwWZWATJbrPMoQ9RatYgNa4uSRrgWGS2vFzqUuBURVUEgNWwKt5pLpZiT7cohyVyZ7Uf1X9MLZsbUkDM7PCK",
  "key28": "4Bmaq2NKGGoHrwAtfDao7Qce9wzq1nsTCZGsvz9Vnw1QDyXvd7Mmf2NQqfEB4dm2omriw9eHqwTq2fJN4kkavstu",
  "key29": "2xcEuymb3ca3Fi4aNcSyKgiJgxa5Yx5tRtRNjECvfvaY5z6vfeMU77KV4jEviDh3eGgDxD7Rk3LNSv8M6h4GqRmL",
  "key30": "zesrhwnv47aTNuy5GYZjSnwYrdmwMsd2RKMqocX55j7xkWHdX7QS6L69jBKveBQwXZ1HSFMgh2Da292gsGsacuZ",
  "key31": "5yBqS1qWUPrcsVSxMHtdXYNFXGLzK4EuvYoiwn7bcZFVuvSeAfyaA8DCio6WWNwKfPjf6WbRDGtBA9aqh3D66uSU",
  "key32": "5MjnuNq9XHBY6oSRP7FjgSaC1Qk2MjQbmYftDfTD9kb7P1xm9qnNGkbXvbhjCx5aNKvHRL3q2YxBmgT6ZssvdD1R",
  "key33": "2R85TqLW6Wa6xmvJpj82QvByW3ztktUbxyk4xPnL4CH3WdQCEki4Cwmx9HJSGLs9q1pvPiwmKDqKe9ZMsB1TQzMm",
  "key34": "4mGj1J3TEkcYFBRB2okspArA3PQCTyVHyFWQZKqTNFXsL3ewYJBBcK5ezzPEQTMF8ZQc2PrVQ44rSxMi5FCLVA7T",
  "key35": "5bmPXQpFgNC2itMaBWSts5eZ4C56VPMN6ZgKaVoUn1QoTv8Abp3tNPfzfpx2WhJkP3LcUUN4akDkW97zeN9u8oF5",
  "key36": "5ukVHsdmwDbHb8GLThbzmkHQvybjtGwaLgxQCxmFEWpUU4oQxNAupyDon43ntiaAbn1eLyNW75AEzLiWfqZHn4ii",
  "key37": "esopcUhiExmDcLn3FFzsorcMUhomB2xjU1scBhKv2ob6BBfuRrrU16F2oXx9843ZESziqbwDpB6bzfFWyReW1eP",
  "key38": "3RyHmL462Vj2o5z8ha7mqtmNupF9AN12ksBSzpUyhNuT3z8ogCrva47B36Yoq2gnYoU5kC99ZKXtjDyZ3sXGLxg"
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
