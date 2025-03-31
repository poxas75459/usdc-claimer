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
    "4DRVwjFSccE7BGNn421RVHkNr14LXc6VnneNdwkMztbeSy1DYcJhUDuydkhZdJugBYoeVZXUT1Lv4LgSCeWDd1BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxmtgYvJkGJjLwWimQbRStECH5KvLJmcxnPiFkwR1wH9njN7WxxGZEGTBw4pxCB8cES5dDegELx5GuQXFW4X5uJ",
  "key1": "2WYg9PFd1uY8wDMYAgCYF9W5c7uFAzwCgXCYbDQPcxMMraAsuaTZ97XMEFRqtL6VFd8RvCjwsXCQ6FLj5aTDk64L",
  "key2": "2ejAFHU19AZtDU8d5mpApvKtZLUjE4HcTtsD4uUP5Z7UDKxu33buWXC9SfcSq19rrcdSZAFc82C6FQZJMyYSD5wL",
  "key3": "2fuQCCaeVXnXHxAoJb68WGpZYH8xfQBMrzBKXEMrPrTCW4WpRM2V77vL8vyQrCkRfwtpGgHngYpeBTPcdbr5kbTe",
  "key4": "3KXGZ5pP2QWURA3yH57MTyMdvx9ox3cgVDM89k6FL3ZuSWHxWFjZbP49sD5tz85VhaAH7T9LkTZfwKiTajYe5nDX",
  "key5": "NSfWQGSBsUiVuaNAXrhuafZQDJvxdqWuHdPEy3kvMK24Eew15A4XanC2pb6NHS1g2uLvX8Gtyiq7R8ffoXy6NGE",
  "key6": "N49tLTP9jEtsUGRj85uuwUqPCNSX7u1P6J5YsUqrzVYyiYT18vyuSMzTytm42sJZjfLBSX9bcGak7aWRsiE25DE",
  "key7": "4ovNH2EV2WtqE2xdwTCRvJVPSpebTAvLUGSrn2P4eAPwGs34HbiLkfYU5CPUprvNYqvhBS8Kqv13DkgCAf5mCnQP",
  "key8": "QQDS3pvTLEzLT1zWEDDqLue7qqkPdkqM1z9txbBq6VEENtcXZLCAM6TbPXig5GBu5LtWvnVGP6vM9ZGcTYxau7U",
  "key9": "5AVhQy8gQ8jpDmFsRxvc5eC23DfbTm9c2y4qq81Y7AbmsPGLfnwB3YnU3FJ41fmyRdWjFeSCCTJe1FJ7Y1Vbt2dc",
  "key10": "4GYzbm54h5Ttzt5W1rnA3HdE2aaGaV4xCd3xAySHXLqJGWGoqY6tDzioQdvD3wFCCdPVVPe3dRiV3TLUaRrxC2Ti",
  "key11": "4ujVXKpQTik6PZaf98WZJ9Gr3JSrNxstc2JKTEmN5Gdn2Z8uv1v12vpkkM3NPdfYvsTntYKQrY9njPVz8wzD6xre",
  "key12": "2q2Jh8gVtWige6WSkoGbf9a9kwmHzAX16PThZy4upwsXFRysc6PV5VGQyWtBLZ9zp1GbftrjYqT4ZkqWDYgfboHo",
  "key13": "4W5e9n9PTAMvjXZ9dH5k9krMAxfEXAwatcnu45qyoy8y5U6QGVHc8uJfATX3o9juU32kxevK2hCLF2HrNthKAqNL",
  "key14": "5iXuzw7ND3Bc1WLsvytzMQDKyUB3BD7vE3SWwfRnmwLub6Yw3tuE3un2chctbRMTCAJGp7xhJ5hL6JjbZ4CjfP4v",
  "key15": "3Py5m5673HpkkCj4iaYUEV8NS2Ys17PBaiePCBJUVjqgfcXHUk25SXP4MyG86Bb4s4KAYpqL4pZCkTqGFVdb2eNh",
  "key16": "3yx6SY5A3mygcBZmaiveAHPZ8RZj6de2MBXEWbd3wbaddhKtuRt4379eyX43uaK2FjxE9858JzXvJECcH23R4z2P",
  "key17": "2dQCge81frukfSmTZeJRtouKr2p9b4Cv3itBHiewqQFv6j6kw7BhRN7VQ1PWLuKCy3warg3jF4RaoGJGwqPtGtYR",
  "key18": "4XnPZoNf1bp2i97KXXxcGUkRBvqr6y3nfaTRATzRwa6HXLe1MNUzgba9sLe7r3ub1oMFnp3apZDBodCX2fXPaBro",
  "key19": "JsTq9ovy8mJEzb9EHSGFdgETk39ktaUhYh7zGQtjpKTTdN2NwgFQFSSCEVA7oHFcPtNf9A3rmDN8EEN4evugay1",
  "key20": "eQ1afKuJXywx2MAUu48RWaHL1ENh8zsecjkE376AynZ6gduAeogkQiwSiztnn6KVxwbunzbtL3g7SSKJRH4kXyd",
  "key21": "4kHmp6vuioPFgq24rVzNsRYtWHF5JSdT3JcPPLk9rJS1mSjZeM6FanRyVGnxa2e1ggKB7qz6pqMZzewLbsGKHZun",
  "key22": "58kjzoSutJ6kcvdYsWa6TTSA9s12572mjNXPDoq3HNDCiBqCiFPRsgrjFpwsJVRW424Nd17Fkoh83RU18QGUpfUP",
  "key23": "5gB4fCAXnQJDkUXxTGtwHSt62UrabAgFMAcaz6oee5RnSrtCEDTRQgVR494tksqrRHnqu2X4Bif7JZzSWKYJyEAN",
  "key24": "4WyiJ2Hocz62HADL79UrvWe5RSe67zvVRhLbTLpPR9gdT5toofCwGGt7nsUoZyAAcYoHbdRghF5em8mCAi5LaQTL",
  "key25": "rgTU9dNXT2TT4Zx2rfD1VQn7MQFkd8XrzenqGdtvt9Gfxu2971UP7FUtiNPPosnSXtaymbhUkXwgxPcpuFXCHN2",
  "key26": "pDWVFoVMgbqf1y55cNh6Ygozsgsok48RZ4DTsMw67jURoVy6dJUjKJCg18q73qmX2tVWehcjTefxuayobmEG6m8",
  "key27": "iyBZZ5zYjrchogjLPexfTmz5uCUq3AzrxdTzxPKUrhvk35rsedTQ6UFL4tRT3wUDXThAn8qFksHN2tCPWUiZLj9",
  "key28": "uoUG9aLc1gXbUZ1SYbQUGZXHWLBupNVEQ87bBdfFXo2Y7Z17oM3J5iViMGvvzK9LZG6kjodngv9TdGnPNUTRB69",
  "key29": "33vXRkVcWLtvxrT2i2r5RoqxAdwaZfCPr5Ww6U8AATpxn1irdgJoExW8baicHE9hAuB8Tw7K9KrevTdMZKfqwwLT",
  "key30": "4rAu9AjDHTUaCDi7M1eLSRMmS2pbQCC5Km71KSg18Xk6fAoPkZbrZsoeuAoWV5ginvbZsBA2LBnrAQQrRDp7yu81",
  "key31": "4WwDEnM1K8dW1TRFDKQzvpUQxfJzGLbakMc5ojMPmosT2P5CiFfbQuPrnqv6VSqGCfSNZjBfc4B5UCihG53tgt5h",
  "key32": "3ib8Juzm54i5oBqmV415o2p5ndkzWb4vAA2JLTzQaZR2Utyvm7VRwG4ArU7o2pY6ZsQE89BxzBsP5Yf7XxzNV2AK",
  "key33": "EWW1R8p48heEBAE243JpBMWmnWDYrUt7ytbbLoowK5jcjy457CVJucapxx863SEDTPDPRYoKfBoK4zMBA5sZ8b8",
  "key34": "5ZRtfHi6bcQ6UUZiTqhZLZtjCqThQ5miscTLdXxSRTSptdb6B9H2scWpV93AodGPff7K6tiQqkKDRgGLfXrmLxSv",
  "key35": "4K7Wda8bxsc9TNhCbLb6mgHWJTc85kkAGARa19pLYts6YP3qnLQNPAdpd1ryeHHayAuZy2HYRTR9RHwCZhUAFn4x",
  "key36": "4wuVdJEaToedRijmTW4gp9oDHaaHzHepGg5AiBA1tjhSThKoqUu6Bn71BvTHBrY1dkg7ctNm6JEf5H7p18Nxxi3b",
  "key37": "47TFL4vpLkfB5HxevomnjGDy8YWh5eyXmKyrabPeRzLQJzQQFXza3EBtRZvse33rdrDDqoURtFHxk42DJctxn3aD",
  "key38": "2zNEjA3X5jsgWxop3Ma5fTrMSV6WcoLMZQERHJtkWZ3iq6Gny61QiG7tokEQRdxznC3v589qNNvw2eRgY6zqn3jd",
  "key39": "hqnESv6Qj3ThcHHk2HDRP341MVpmzY6vuvrnWeizJD1xHobMDQKEsLbr7TYk7dg8EoArwZ6gPkEw8J62uYJTXi3",
  "key40": "5fEGHojjQpujfSMEiAB3QUEjtRcsuGpChqG2bVTZj5dRstNyN8TJNKjKp86cF37G2pxrL4QnrQ67hQfZpCtRckMk",
  "key41": "4iqfDQHeAkH62dii4k6d8XnicQPoFxjm2PsgLERvcZDwnmW4nwHXd7YyhqnD7QQqe5XSZbk4DZbNpg7kwgZZrE8D",
  "key42": "LxiGovYdn5g8VjYY8NaDxdFynQxqFfeJo1DbnhFCCXg8AzyTuBmQtkqyqzpgnExZ2LzUd1xny5R8L2bmKc6D8Tg",
  "key43": "5Si6HvEH8YFhp64dG3R63RThrZ5U4vDZjue3KjVbGaXvfrXJBvKdGBqrFsk85U9SMC6YgGsm9T8ah8N23o2mdnxh",
  "key44": "445LtTYfAD8LV2Pu3repCDH6prTQhyA1br39QSrNZx1vAsmcyEVBzcnjPu89iz8UXWnshr9uBxhNm3nHhwkQV6AB",
  "key45": "4c74zPd739iGb1waJzXnowXp2QkDnUcZL7ZjCVjU3FHHMgzvaQ6x7v4yuhQewsQHJVvaqDFSAtMw4Wv1MRNNTtYN"
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
