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
    "4UHo98gTSU2rNQSKc8fgmEnqJHiSFGvo7B38gqZ7iVpcfkrkjiV6wdZXKBfXoMN5cDRFkkRAqa8EX7wrYspLGBif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2opSYDTqqahjbfvU4WVpdF2abW5zrShHs7Vmmg3KJsW1Dkg3xmbyf6pTz34W6qxSZWvikt7BhezwQuiZGzzdQnxc",
  "key1": "3F3vDF98A99e3YaeJRifbYnzi98BXPRRA66tqK6MaJvMFJKGZGwZnLg2i9cwkusVN58beo4F5b7e1D5C6g8hC8XQ",
  "key2": "KPAup81Z6AYt8vBW7jYey8jvodd3mpEecQhc8xG5kpe44UH8BeUTpxuHNbJqVUTymuRvwDUXipmw5UmnTCmqwZJ",
  "key3": "3MMm2Gno65tbt1LdVJyj9iDbP2QbwhkUziuvBU9Kvf6ytpiMRy6pBAM33jVTbWhMksTwahCk5CnjxfYUd97QzF4D",
  "key4": "2LYTqDZrnZhiniKkA66jrWRg5rMyyzZw7bgf7oZdaM1fBZzfWr7V6LxpEGcoeaTJYsZMgZgjkBVN5yz8dNNjFNMi",
  "key5": "4wnVkwjGgeuRnskq5FU87Zsaai7ojhBUNrv48bSs21bzx4zgHsQemHJcJ4owcPSZSq4No3tQYiTtZgEPtfM8xFzB",
  "key6": "27mtNcHqWAHjCqnQDeLmrYLorndCUDRYYaYQAS3FCmc66aEhi2TM1eNryn31HwesqTRC4vrHyrx5KptkGExsxLsc",
  "key7": "2vEscH3NWM6cJf3nC7zUUCMJfB92j6HeJg4XgFqtSEjdFfJyJyTNtgtUadHXHkX1XkfpJP6uszF3arYt5ce6Wz5U",
  "key8": "5XSiJjU4Ageah9cv5NyKidgLwLktBef75FJKW4uhnjwvtGGi6W2yuQKP16FoKecEqN5aVGBmgSXPN1KSAC1VGzPq",
  "key9": "5o5mpkqLnhL7962DfReCaVXdFkCE2NRwFAAN74YWb29MXitC27fYZFoZzUZhGizs2hxzG7noXQyweYr1ugCZRizz",
  "key10": "5ngNrbYrhKyJLofBPmHj2JzZFPQxrU37JTjQ3DKqfsifACYaYCLcSgdo8jcaDwpTry5W1ZwxfkmiJfftYxXnASRp",
  "key11": "2HHMqkJngzWJX5miDZiv8j3pNd2ign1oA4GpQKtCqJcyt3JzHwvLF8hatYzZnzVqZgXHdtr8GwXeZNb7B4HH5FFL",
  "key12": "4pPHTS8DRZ2k7C2qtcRWmWAGCGp3ijCxPv9NqPqSdk4fxhJXvzJMAnKQaVFAw5yVSAykwyUpnUThKJFuoJUdZH2e",
  "key13": "59Sreur8AcdhgQTpAaE5cS6A9X5WQZwX1rwnKN3b1BVrNfVBksjQCfwszVDnuzn9BNxyEExVexMCSCrQN4FThcqp",
  "key14": "6zhcj2SbvpuZx9gNsTqdWJkHjXQsZxNHynYbn4MbCsbLov2V4n4z3F3N2ynUueZroYNsGA62xC9Sn2ieMkQR6AX",
  "key15": "3cgnjkZaJveggV8irbsQHj2LggQMTvT569dSGis6kbQQB59bzc7WkH5kKegkezZmDtju1LbdfrnbbaUiDCMjwhux",
  "key16": "4Ab2y7VUHLjpQ1r3KCSfFxDU5kGQ8JNWf51ifMK8orJoGTBAX49jWmSaARQHmvAQKLU4wwJFf6mvF3TPRDQJQARW",
  "key17": "4SZsSXDBJwxQs1gH9GzKE2h3io2gz2gjwuUWPER8syUgcFMtM4ziVsczaeq8pa8B1k81pxn7TFepB1xgMdypfFu3",
  "key18": "5n7vo9etETrpbiJFDniMxQWRyEpw4mYPZAZtfY8ej74MjYMxwMz3PzLmx8YMBPiNdciFCLRhRNKMDBGkYQrXrgAR",
  "key19": "4Drq61TBboYQ7Bg5e9DtEdWqMAP4JoJHT3uje7urBiPECxRMbP4wrKKXf4nsBabwCRtNUwJx3fFGkeqwtHNQPKfu",
  "key20": "4DWUKuSuT7MWCJnGYcHDyzCq4uiZE92Twea7ZR9Rhnu57W5B8d46xhTD1gRLtH3a4kJJP5T6HcS2u8jEMzRMW1d9",
  "key21": "5Fmsyyu5Dwk3APwnXy2busw4AsizJBP3FdNUmrhV5PpqHqbWwiBRgKhQMX1ESqMUcDjFRToPcUY4huKzPrL2EKR7",
  "key22": "t1Ev2Qb7vdkK7PfZdjdWi1xEErMTfQQy5Wy6vVdgeX8g8HuNewTax63JDNicANNQqG3D9bUvK7VnwpscARoxGHw",
  "key23": "4ZrATyMLapPrbvHZHYjhUsYj1fqe2x7PG6qCs9RfQAYH213grPponhphDWeB2xgUcNgPUzxXpaHxrHYzpQnMPnaz",
  "key24": "59Xv1aKmwc2tuvvSEcLhnc1a3EbKptS4mF5wK3qwoGSMQQwAhHYHjyPDkU5UhUHemFHh9iZ6abjFBCmNn83dAeGL",
  "key25": "2Y8tCFcMtZawhjpg4Red6VqL2n9TfXiDT5o6rBmjwwPVU4DWdsmmhNriQZLkqj6KZD1UGahXMeN6sYPNAXMFyWe5",
  "key26": "2gzj86W4Vx22MbDhVvh8nhdHXQ8HfY6KoVhc8W76T1FJU99jTt7jWY4UhZhgW836HAfk4GYjKzeBqdrrmsax92Sa",
  "key27": "31offW1BsPi6eNzX1fNByxGR1u6KYu31pH7yCZ6EDXXEuFT73uUe9idzDovJivR4vSNq9ZUaQmnt5BTpQa9x7o8t",
  "key28": "4BtvFEGDpeWwRvKrsbKxh3eYxvPWJbzJUGhSfbC9yeLPzXeFH3rcFAgAhhc1wmCUidhopquBPzmBAWquCHYgs4aU",
  "key29": "3BCPgJRKitjU5eG5Gq2fWdvsjR8SGpfxZ1tL3bS9DT8zfCcqcGUbYJmp7pYF5DVe7hwkBwpFzoDVHw1ov219B9q6",
  "key30": "2JxARrjBzL23ttqEXRtuD8vmwAJioAznj5KZXa3498GcKbhPTn1vTs8GGuYbQ1pc3MiD1nZgREwxJPJUR8wDRdqF",
  "key31": "2ntMfstsS88GDHTQb1gbTedmv63VqoZgog14LBtCXduTibqUSiVXDKtzviQfPa6EhKK29DJ1Q2aoAoMggz3bqyP",
  "key32": "2dwYpTAwSzmxGcyiGtEbhQYCDkq15SqKyUdcMee9E7g2JJayZospcqRmCZNvJpDunZ4iaLVczGn5S3xNbKMdkyGr",
  "key33": "5XhadEQYMxsVjDmbKL8dVjkqy69Q3s7pTVbmF77pgLxAK22yjJe9yRuELwk5CT74fx59U8nWmU7XKgdvvbavGGEU",
  "key34": "U44pYGSktimFh6KdLAfNBUin5a1DrBUXsBh2pfFpEPGBtbczdyxDCv7dafCTQ9BZxARvxxdJtFtPxfdkwhJHfyT",
  "key35": "29GaXc3orebwBNv3Dzq6y2qG4YtgUvHFubULY27KRq37nosz8HeUYN1niHM9fFnxkjcrBsvMTNwuTHPGNoAzAoqo",
  "key36": "2ZoXKVMGdxhyj9EnJRyMpbLv2U8CZNevGJVK9zZUPiiqMA2Lif2ZxX5jcfTBevfDnXJo8oesTzEYTctnwvmAoV7n",
  "key37": "xvK9Hms1RDmynUP2gMSk5Pr9JtUqDMTrz7GyRkPKP57pJuxxJD3BBZ5ffwjRC8JRECQQYx4HM22cf7geCMn9HUA",
  "key38": "5bfLpHUEYivP1cGdMvxataBjJq9bYpqEPGEQNVYZ67DKp7LLTcNKFU2fx37XFGiTsMpqRZCoqtaUsgE8AwBtRNS7",
  "key39": "5Qv6ekns7iaUxHVV5oZRb9PwgHcZy7PT1K4CzzFJDBzhPCWAABhMdtwD564t4L8basxouUQpSSvM62hqrJUxhkWE",
  "key40": "2Bc2vJMgpdZ61xPCDhosG8qaDaFTiCJ5fNYk2D4YV1i6mA5RZybjtEVYgV3J2x5TxkFz5KcMS6dj67o1gNkyFrU6",
  "key41": "PcsbraBJmS5Vtaycitn5qNWXpWPcDJPXv8zCVfMoWrFQuytWUm3DtqL2HerWbR9QzZJub6MTKY9s6gjPh2dUuT2",
  "key42": "2P3EBWFaMMUq6nj4wPb1vdNeGVYgmK6tYP26oFYSatofuRE1ugisieSbdawe359E8tWJPPKP5UiynmB55xseAZMF",
  "key43": "3BKL9koZvYSYXoWE1gZrgvtUV2dLFTmwPs64Y1Lw5hmptHrgRkoRymFv1wq3MrRSxVM95htL2NrsciDHsSQUEi21",
  "key44": "2b193fsVeFsm71HpvWFux5rF7A3YsMoA7W21hNwAGbZwmgCjUtAhurYgv64mYnYpxjAqRYSvB6dRwiPBvFyHLit6",
  "key45": "2dWW29BmZYNJb9mTu3GcvX5Eaie8chZkE8QGcjkjLPPmk5s57DMoyxaHYXoa7bb5hMDysrSKaTpV63HE1PkfNtR",
  "key46": "5myLBNQj2i4R4AyTGrVyoTRJ94amzsP5zJPK8eCmMdSgduY18jrvCxQ2csZ4Udwqvuekqx5KqVjQ9HUhZuXhTeVE",
  "key47": "2GHAjQ5RicrmUcQh1U9kgbKLdXyqSkJx1TYB2aXLeKaxWh4ip2ppWJR7EZ2caeBNrrL8v4NiuDjn4jEo7YPDKrZQ",
  "key48": "27cLhCtfyofHivzLAAAfsuhSKPdY5QVgQKx19vwhVB6Jf3T9zF2iuoFAPycYYEHVtrVr2nKK2krEBK6AbjpjKpS3"
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
