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
    "54SQ55vx78JKwEvF5xxTz5cTzWievPwNghqJVpLM3hZdfzW5WTEHegPiZA49wGHZJgioBYA3XQ2Cpvvid7RqPrW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXspbMggyzzsuNbqo9xQFJ836dWJgdMEfKZ7XnGY1VBQLJg8x1QGgm6giwgMqbrgWZyrY2xc1GyUY78DDqG3xVQ",
  "key1": "4ccsL76wAYzfQWyu4kRB6GcfNbJo5D9WSBxmqK4ZU8HnLAyRFo1jrtYxbXtMbosRgQFsLuyiCYsHQVDRdcgFBRev",
  "key2": "WSM385qdzAtfA9SAjBJc75YDkcxB2yiwqrZUHi3pkLue1373qxgosywPmRPdoh8ZmhPwbrmYYXYqiMcUp2ZJo7e",
  "key3": "JVY8KQVwZmaqcM4Eua8KjNjBcaSG6YW73s6pxjnTar68kP1ZhRMPhESkUSF3fztj5r2847RmN1SM2WXvUcALHan",
  "key4": "3N6aTmDNPMH6GqauSNGbx2kynK7VUmNfxxeMiWTbTjZvaUkbKtn69Gp4r4ZfAtBaXhMHYiDhCj1129zFHW6AZXW7",
  "key5": "4CWEdCs9nmpGvfkNB44QQ2CttLJPGSbLAYmRov7LkVFsfMDz16Ditm5qJPtzX3vGoGu5uXT3nKuGQtzs3wQovEbU",
  "key6": "4y7g3g39BmBCpWHcdvRQcUJ4tX62qyUL2QDXJoe1dYGPpZrmJf651eLN4WpGnvG7DTZBz2dq7Zte2j1D6QpaYAtZ",
  "key7": "59WQS3cMsUd3H7ZP5uJGpV5JiYnjcf27tcNzx7mVmgsWBLfJwQRsmEUBaKDtPCsi9Rv9jpfMEtPxPtPuSbHD6yFe",
  "key8": "4QHKksKRz1S9jZ2EWrZszYyd6i14LSsp9hyGNrbN45sSkxSExYKLo4z62tHVFgynC3G6kyZDLFL24GsBtQQ1yUhY",
  "key9": "39qRNf5Vvdh1yGGspo9oNBWEcUJhnRDbdVZhcoM5L4XMrRJjWjT6UvZZNNz9j7TiXhcsRkbNaRiNkikSNSZnPhbV",
  "key10": "23X4S6ZKedRSVW67BawqhU3qxm18BZV3T8cSRdECYcuAnEzXbarYiiQ5J4UD2DqenEiqHNMocby1UbSCpHGa7xbR",
  "key11": "4MQ3C6cEuYikNj1EZ2Uzfonx8hyqxigBX84SEtxsNUB7Mv9fkP1G8L6p6rKFX4nHGJ6n79F8U33zxp27nZp4z1vL",
  "key12": "5Rr84A4gECfHhLBTkr7iA1Y8SnegyogiBTT4fyjg8oH91FxWRHJrnRhAjpTdvxWCchx2SV9P2bQPdKhYvBDKtzfu",
  "key13": "5XyeDhKyjsMMBVxESpXCs8ykLs69n5DzN3djuCD5QQrGYsGPipCkFKLkRa7hoTGys9AQBsGcSYw2t8aJmStNVtgQ",
  "key14": "SdXBi7HgXEfZKcJdiWTQvSZgqiwAFxuBVCkKn6XNkmP1vqFQwYhNM6wxbg4oXfCezkQGkvJ3hgGa86paDVsK1pD",
  "key15": "ixActrtEEhzSr8UPeQ3o5wmafsgr5s9KAbExJ6wuXq9XQx8yiW3DirZK3G3D6kdAuLWrbsDtiaZ35vfZDU1obZB",
  "key16": "4b6JBzxjPe4d4d67ryxpraFgaqk7fpDpdwsetGQeF2qFmsV1GHXcyHSy9CEuAPZ7q26MsVsUAXGw8gXgv9agwcxL",
  "key17": "2Z8WtafNPUrGW4x2CKVZkAEtGawdMKJLyhYHSQ6fb7mSdgxs6LPjUxfG19Km4QQQU33eGdCS73UEZgcKc6xGATZn",
  "key18": "2os7gpAE3wzNJ4E19Rcu7hK5ABTzUchQS68XrZKRZPpeJsLKhuSnjAvm2mxgGcqfkfvfc3Xn66zVZaCetoEa9pXb",
  "key19": "65xQvJRCwqeAFWeJL9QvD4mm8MbsFVdU86fgtd5eTS8MFDH9cVnrF9MGWQZVUasXPHagc6LnfjhcsFsEQdrdFvR2",
  "key20": "4MkBDEGN4sgbZrkWzqw2rr8i2Bovhn9V8Gg2suZiy5TgyFqcZMiaoMvz2nhcidzyH5Ssnsay2EJi642LraurMAzN",
  "key21": "3gjkAEtjjvAy13xMDXXQzv7msuEcAMQ5suvPLpzmtPWrCfw4TyD8F8CbNoamMBLGANJDmPkJpNx9TBCDeQsCcz7S",
  "key22": "2KyTQXtC74rEiTKAuRxZP6iqZ1t5kkrqC7AC1J8yEc6uifsJKRdhXWzZVFThqYhZQGFHiYuzFww8XGmVD6UDgkZm",
  "key23": "kxNDc8B83jesVFgLYZFJYrNQ4ekH6TFwTHNBCMpVfHbGN687qQBE4PKxCLnPnBx87rsQHo5PRwvaA7wHtXSq8ex",
  "key24": "kTZ7WEDrttDDSWREgQEvnyhppRFuFqHwdy3DgXTYpFaKKq8ZMpJRdEBqQjGwx2J9LuQ4AV64EeoShMZtYxXQTdq",
  "key25": "3iF8TkySA9LZ3iy4aR8wytudUuauHEB398eKMQqFA9Z4jSrS6hyR4HvPdEg2HYjFo17ZbRAapNohous5ikT8Karu",
  "key26": "2dUx3LZbpPrmZTtLetc8xivsMoAL6VPRqkyLHMLvYmTUGwcZYenWW6dYKfCpBzFMnsGM965iqPs9PRfm1sH3ySyt",
  "key27": "2tz2XcVNvSH4qzGZFBQq9YPP32Mbp74vB1HsQeg37sZYxwFG3musindv9ogsqLndcG1ujH2oC8TMFwypmodgGTd7",
  "key28": "41QHqtryKh3hAobTRibh1invevxegjkboyMHCNqiSguymXj5f5B8kehnRu8VFGCuQvQai28TmmabSKVsEkfHzk2p",
  "key29": "2RabYDaGdf8d7VJ8UwufaK2PdU5iUFCEuAVeCcCxEDXg9M5W5FVApo1BW9qGEK5qGNWFGSxYmsBj8GowJtMVpoFe",
  "key30": "ot56xoaNhH9vKZ2moFf5hDicrw9QrWrqKAVgPjXMXvFDAmLMBXuy6QxgoCUjmpjE2uNSR4iKhcrm7SYc7aaFAcu",
  "key31": "3w6ogdQc7TyrMKK1vm4nN3jcXjdaDJstfXRa8S7qkRpi3SpXh3zZHzfcLc9X4bTRrJrFHBd113qfAUFNQRVc5o5N",
  "key32": "4nGPeWsydqYJv43Piuf6EoQ6GjhJ2u4fx6Zvkuk7GkooJUg3kucbFAXYjLvW9BkiqwizCHFjnFJ84FFQ1BiRMUcz",
  "key33": "2qauuiZKuKkCYkyARGs26ohd7Hp6t6QwfgdCTYHUir85pkTmmHbmBLQx3A2QdzPPNBsMbiX2Hv2k71fPKbj3geVq",
  "key34": "eSRsB5GgpXux9RUSKjhNWU1UPy9ee5t2BTBcnoifT4sf9Wvg6A7KCs4SjX35tKaM8tDWGmsZiiLe3zKRjHVRpk6",
  "key35": "4sahFmKFA2YTroCRK8TFgrsDfFGXEFaDEkGTXz7AzmfitsGHSZYzWCzZ1W5cHnfVyhNjKCdsAoMSSzEAjnjxLUGD",
  "key36": "bZTzEeBFAsC9GjPrPsTuWWijTuiw685MdFFwJozzKeFPWFpTEjNBu1TAuZ9vq61eT48DZtWgccDU1vEBn8xBsZH",
  "key37": "ydXX3XEJXPpBwMYQqNQW6p53MMu4Pa6NbTq9SVLdv3TZ4a4GnY2i7uZFouYAcZMLKAJeSQVwv2TqqJktqYVEtyT",
  "key38": "zfve9DxYVn91PSq9KYASSkBuKkPaPL9C3QaFrLUgW9YCy4oa6PQr6RXFGhdc1JE68bqYu3QxMDU8gDqfUfVnpam",
  "key39": "63S2N9ePFUUcXdwPVfoCsfSKyad5gcxGRW5XeS9B3FKBLGPz8RhwRk3rZJMvbsgQYzhwZfvg6zuCnQq6atHF7EJK",
  "key40": "22TWQqc4Czer3AdtGSt1N1AkPRVMMgb9WB49jPtzw5swFKCfc9XugD2wudzzz2RtyFT9LTxMgTEVn4KqF6XKYGTU",
  "key41": "4m8jVFKPPoWTBGbVfEnkA1RCDgyF9vL9zPxs1aFsyBffyyRCDbASFnEbRvTCKDTWHTgi5mxJ7BLpSNGXG2CrLvzw",
  "key42": "5pxYeEf23z5KzCf6419sixVErHvaie5zeHZqL5uGnzym9nYSum5S3fe7S4fBD9XBu1knucQYDnesbucfzxbQp8ob",
  "key43": "5C6EydwgjejsFQ5SbJbagShCAhqi1fEE4C31F4NYKcyd82Wj9gvYTPNpHDfE2anJ73enxu31J6rEuUbKBZwJqmkK",
  "key44": "4entAyT7okuzqmCdySyhL7eumqPHELdGscuCExNLphHy2e778xRNLPgu4tbnT9e9oRLVNTrm525UkKXGekt7YRGM"
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
