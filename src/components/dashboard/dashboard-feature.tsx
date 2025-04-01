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
    "2SHaRbb8zZsGMRt9oSb57CmM7CEpeb3KT6hFWjfVrBWjXLH4xN6tjBFkzpmppp6rZKmVKpChQ6xgeV1sdcUZVB3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLvCwhXR4Bc7AuxJV2Ah2f9xXwfCHfHm2TVdZXHpUEV2s8wzoLmFnQxAzghDV81P1gfpva2eNE9p5MgqrGuiBtg",
  "key1": "3jRpEz1j2wyLmveJfZqsizT4DpU1AWoeNPUYx45mV3LMdKBs4dUd1KYnQJQyZKe47rc24U9XwRn6tKnrLVCjgPY7",
  "key2": "2XbdB6sYaVmTyfUfW3iTGJPXpwXKRW6vyUjXNntAPbNjjb5cSAFXEH22DyLzAuHWLhAPgeuCZ9RxYVM6Vd4hXGVP",
  "key3": "3nBCU8FTGQynhWuWJViTChk3is2gzJ25v2uE8wjdeAKbwk1RszZgh1d4336wT5fUuEWgY6CJZyKT87E1ycfWbzwS",
  "key4": "3cENuSwZdVHA7Xnwf7zQikrL9mvf3LuY6ChynxbnZMjyfH4u3ivsqHmEmTnEQhZeJn5cwtba43pEqJEp9pynWasJ",
  "key5": "5JCtUMpjUq5gGRVHj4DuW6ts5U1rjtZaQgiyufekXVM5f9Y5ihPVRXxZja36c9U4oouoGBUcmTy1wDZNrJtayWZk",
  "key6": "4j3u8yajH3rfdnuEZvZCcEjPgCAEprzNuAvW5TmJLhRVRhURsezPojTtefAjX19oqDqU2Kz5oShZp8dGb24bfzTz",
  "key7": "ztYQU8g1V9ZMENfZgaui7ATkBh7HLJQMfTJwbYD7eV58wCriUkFxj4RSDmsuiEgPWcRhQ8FYkk1S7bUqLApDd7B",
  "key8": "4HSoPRHKebDz2cR733Q57WXEmGrArVdDbRr8gE7SdJsLeWqpTLTSFF99o6rBbCcPqHm4KkNnCWDZ4NpaARbaQkGu",
  "key9": "38bjSDmQLDGLERaKrSnCM7awtWDrVeZT9q4VnuXNsGfHdn78eiiZHpFSGMvjTnchoUQQ5HeBDc9nCvHDSm3D6aXi",
  "key10": "3H2S61ffCc3Hu6bZ9JVvuCELeiGnnChVTrK9oyo77FZZhopfgg8Gbj3FpW1PSvt6jWU49vRJNXVCaF7dQXCzQHvY",
  "key11": "2zaBb9P4FiKgyD4Cp9f4w98cxPvH6GJFuBuAbLFC1ovetGju3czndhypChweCi57VpGwzxiqiY9M84xeQW3Y67MF",
  "key12": "49yyfJV3uRPU72JkZm7Epe3vxpWzSf3S9ahxpj7uAVrYctatK8C7PDceQG2RiWMmLasAKnyxCuYBq3GV96pRqrrx",
  "key13": "Wfobazxbt8NDvMahKUrxaMWUNmsUTBVsYnspm8NEhEh6bq2v9VGvbNVuSFd4Z1sscGNrnSASdBLAZnv98b66iU2",
  "key14": "3cf1suLsh5RboM6uJzMnA26WTzdqkmHZmEWXcRJCnhNWAbsAbr9eienep5PUFhYEFAZ98fipXkErN6o3UbPAun4E",
  "key15": "5rhttb344C5cnV1txZzFDrAZpAVhmDrUDeYYTUu91u6UeVnQqSAg9key4AEqap1Cc13hsp4UvVCeMHtwKb2t1xiF",
  "key16": "58xv43co2cQu5dacvVyVXJRkyL1SDApyRZ8ac2JtDPBYtssg7vgt1r2tigTuWaptuG7yLRHrQXvYwX6JRdTb2Fd",
  "key17": "Jye3exrk92tessMGbyfJSrudeBmi8xPohGvNqtCEF1oSALjACiXazXBkAqxb8GdTrtwi62ZovzAD9oJSUGpYff9",
  "key18": "3cHk6wwrVUbt1eeJ4Dh9TDzddWLVRYTAjg5j119R5ynzSbRkx3CEv3s3Zm6MF2t6kAoRzMZHAQgmR1kh833iFoJJ",
  "key19": "22N8LerajpzRm9fDxfT7eANHbd1knf2JCrM7huoaJ7ugF5fjPA9szDqVagCi9YLc2DAsVMyQS3MPiLG5JFydLvnm",
  "key20": "5kykPUsXTwz6fFW4MNNHzjDyWjDdBVtxkWkFmXDaeTTuC5dKiFcsDP1FjiX8W8QqUdxRERQgcBDd23zyCQEeQEiC",
  "key21": "5cb48vafudZ83uh5tCZ2vVjDqRxUNZvyKbZwDo7Q2Gd1uvPmKrdZhEz3o3z4SRFSd9NhDhF5CfPh2qU5UqEvSQBd",
  "key22": "39qt5P3w8oFYMVq3w3ZDDJHuriZRHHQ1X9k3G9RaY6A2orAuCC785DWcHfqtku3ot3KfAaYVEk2AH8HGFNRgNX2M",
  "key23": "4oTCohbD3SQaiZ3mxAzz929G9LD589bPDMq98yZx3EpzhCmbaY6ymo9954ZM468WFohrMPA4WsvfZ4MgMgLJk3Zd",
  "key24": "4qAdMfqhQ3T5JfsXMH8VQ3g3tDX7LYWFu3jK4U1tjNRv9sQ1oQt6u5hzSaDJgJth1p1ZAFemEBVKWZ7NYDo1A82h",
  "key25": "2GA6Qtr2c4PCgSD1upKPMCJxG3UC9HjM77zBLAoQVVA8nyZgbHnXtmHCVVPT4eaAdESznaQ79ipZ7razFXU3RyUK",
  "key26": "4VQuYSe1pZg6zY6q7Lv462BLgiD2qEQKRvLBRx27xVuMh55aPo8UKjTwQUZJ7RXe2wnHJECTbeD1WfJbAiHjbDN9",
  "key27": "5CV4HsD6vdRHBSj4Hi5QG2oiweThq2K3v93dTLPLRhdpG5z2yfDrybJK8RvEZn9dGG7uTfYvY3XZCowLtLQsigyH",
  "key28": "2TWNo5AWv1bsPJG64pwS8Teg9fvd9gVBg2B8wqYsdCwngPNpiTCqz41vWboBk7ViEWhQheY2oExZnPP4NvSwY9TC",
  "key29": "2N2V5TvNphHKCQNTmVc4vrM7QibEMDCgcFG2zTREdbyeQ2VwcKo9nfTRdB4GENQGiCzrdSPx8YpWp5esU7qm1fqd",
  "key30": "5WusQ6ieYZBYW6LwwbBEqn4QVxZV4pn6ZYc81NHkBLQMRc2q9xdTyPpW8wM8yFMzxEqFjhrD5VY4LbK3Mdf2eCkJ",
  "key31": "2Lfw56XjFwf67UxTyyqqKUyudFhrPbjRStSxtwVSi4ZQXWDxi8F6N7iiy8FsSe2xqj13JEK96sH7no1KuCQnXGtz",
  "key32": "5t3pD9NdBzGTAvCQqaZHuuEQCwBhx5WdpG7MkyME6gEJA7qVWhZoR2Sdbro1rUQfjqaNibM8Jh2zB3WAE7FRWoeR",
  "key33": "3XnaDo4UamuoWoJxfse7td4MxusZzEFnEyBKUM78EvbAcro2TzHeDVLTrn9kZdaENXRn6sA8qUcZuy8fRn5MvyJK",
  "key34": "45LWp4rXJqTeoW3kjENx3xZtyd9fEfaeKVcMe1nAc2XbyBtk5edHeZ2veRWuEWuciwd4NyMqnSX4YK4SRgEVGmXU",
  "key35": "4TQ47KXZyDb3dcZ7tV2cXmq2ry18Cvb45ydr8VckdRF22JgfYLjx4xwPVr9EQWfTAegm3X1y2CHM9FbBdFVd91wH",
  "key36": "5TZ4oonUTiwsDxkGNVFonwomFwAXW5eASz9XoLPygHGQHiigZ9uSL54GLMVGLBeRhzCrX4bLFyHZRUvGeV3g1hU7",
  "key37": "63q4iGtUQ56yEqJz6U7Gh5zu8rXtgWcSyXTSzzDS5Cnr3P6QgububhARS7mp9MQBarE8DJ2BsZZNS4hy4nk32o6E",
  "key38": "adip86GT754MjyqZ2GY7GEpkQPJSqmAZ6avTgajjbrPMUJUHe6hzgnxLw8jg4ifQZPdxmtJ1NQAyU9oTh5Zgt6U",
  "key39": "4tzoCP8jR9oZ185sW6EdpaRNSxbBR932WiHXXXfwW3FJouGTYTNetGj6SbRUHwaFXHrqmrSgkmYN6SwgRkHhFcKQ",
  "key40": "2LU9tzS7A1y7QyAMannWdpxYKSPKVtjMgZJvRNgC4eXh8AVywqrUm4fY76BxycYBnvYuXYErpS6nx38CJAAdotEV",
  "key41": "4VAjY9BSqKowFa8fnym7oMNGQHxTRDxniKnhHoRwk4qwVtGnMZb8by4vwhgjnKi4Kd4gqMhHxEYEauybTS9rwMPv",
  "key42": "LBK4GgDWubrLw2aqgYsxmj9hXFMbgDogyVc38AZETRxXiCcvdnN3PojXu2d1LYzxxKCNKQQztsrSsh9M3h3qGnu",
  "key43": "4uiTtd4N1bUzoH4iKqtJww9YdhW2dnfWU8BXBQmsuQu4TAdzeyY3RnnPwStvyxL9GzkETAfkBwDA6Joc44xWaaXz",
  "key44": "2oQ9bq7DshnYNBE9S7gBNS7hQ7GZXNzJ65cmroMwm5HzjdGLnNHdsEA2ALXbGzKZZGBProQewJHtVFTaicDJKxJ1",
  "key45": "3EahSJ6y1SAKadhxs3SXBRpLkYEGBGJAxG7XYnujc1ioYQe4Ef7u8H7muF8Ayk1yno9o8KEoiZWj669UeD4ZFZFs",
  "key46": "2cTERJReGUrb5dCf2ew3EHRqhvR1qgMGVArQvUCJZCgduvT2Tv9vykV9Nh7Ao2VnpyAZCoqr8QeW2dZNPu9ovq1B",
  "key47": "5KKoDFrqzcFDLfQ1FE1FaE6rnnuFxQ56D39h1pUVok5UeDXvxe5ZZabZembg5Hwrevrhs6x7nYfDDoRC2x6zwNsN",
  "key48": "Wcfi3urYvHDeB3ceQSRpVu2uDe6rQCFNAzvvZE1uRTFS9NBE2ejbsBUJHa4Fdz4htjL4mTaCA2UfKWQgvSv36J1"
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
