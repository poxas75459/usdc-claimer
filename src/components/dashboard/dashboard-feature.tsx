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
    "F9vSwrnaQ6xXR5ZfMKpnR8EW7je1dEzb7TzrujqM5CzhPbYvFGQT3nA6mWXoaytUiPNDwULbjzdTkySZqaxLG8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gErLfyjPEMXvuyX8MXUEtrGr2Lk5u9XqRz2oUB8ce2tFgxtBwUnjRafuzgj4Ha4PMEmn7BK4LMWmtbiHcSrhWiH",
  "key1": "5Ge8LjDq5ZPeWrsKBzW7LRUS4HW2JRPrGNhpjQ8EdLtoEFRjzvifyHWWe44U56XZdF7uKZGjd4BtwYeiUE9Uqn2f",
  "key2": "617mPU1YZt7ss4xn2UNT23f1bXbki5TDB6wdMPckt216SeJ2PjBK2Kzf6fgAjYP4gukadC3WQvyvBjKQfRePUAD9",
  "key3": "39dPwp3v8aDYzHZCKJbHSAxtB8hhZAQCZVMGXUup3WgVxmdQkJQw8q1yLdN32Wct216GZeeVxd87uKHokdr2mgpp",
  "key4": "2sSR8dexoQ6s3sRFwq8fWhkfVKPpyzSMPj2fAMgetSn9JF6X9h7oYFdsSD9xcNaJf82SbRaKXcp95UPeRgDvdg6k",
  "key5": "4f6ArejPpE3yy3wa5kLYiVuJFe1LZPvmWy92ayKvMckVQ9TgLUzQaorAiF5CiJBFVjG2ArC89GsLCgh9Xj38Fwpg",
  "key6": "3NCH9g8AYNmrFXr9MgsncrnpfqxFn52Ft3xMgTbvufUsmDdTc6GuFcmyEe1GJGnrYtsowvBHUQJwe5qjAmj7p4oM",
  "key7": "618mZg2rfP3TqtV1d9RjGrWCivJtxXLFUQYf55i599dtTT9nX42DrgMZEu1TAretSgoXs16jgrUbVZAfSLwCnuxv",
  "key8": "SgpwHsbZxu26NmeYwqCGPZmR3KxbqnwJu9LCUTcFanpU2ktJCBuv9rR5eBpyWEmaks65daqsmWj2MWbnYh2iK87",
  "key9": "9evep3f2HQguGzboMUAmcs7G1yijcUu4QtLhsjQU4AjgSCXr1o7q2sAmoe5RjyGdiLok7nXDTQrjmV4ARuAMTUQ",
  "key10": "3HfSb7UPEJRfo6f9Wqbeb5XpcLcwg9JNDmYE9pmgeUE9jbks9ccDw79b4XyHSFJftZTrpn3DgYyAETrEv7bWidmR",
  "key11": "2YLTF8WvF65eLTB9QjSe1sLeprmEgM32uH7CyE9TPmmKhLtZPRPSXgNMpiYZBwbDCmgVAynpJHeLu7JMBfpfWEhU",
  "key12": "2RjnnA9Zsew3MoFiqrXmFCRJzMXHZSrZnZ6HY9B2MgYaNQVuRfUb6rL7mXbFVSqnbTBy9SFczoEFT5XY5sjMwvTz",
  "key13": "5hDt8jernvg9Eb9ry7H9ZhbxnRnBpXS3Ln2cDpQS7hEw98TatD3xgGgfn3AXGrgM5Uam2U1Rk4VmdkunaFkN9qpD",
  "key14": "4KXyRRXbuFfnhJNM47Vz5aAyXwmd5ViETW4LWsdJ2ua91jRqHykh57SXkUQojb9zyQzzXs7k5cmdtNfsXihF7Po8",
  "key15": "4TJJGmBhkgxwyv8b6ZArpWDkcZ5FE5FH9aVjff6k7L3HESBBgTygG5W7vKbme5SdFUvsz8naHJuZhLjGRHBxALUA",
  "key16": "2VYNdWztSmA6GV5LfTy3cmNiNLLSzVos9b9WDze1JneqnVQfuTSR6NApoFynPhQiL8UWuukvfE3ah8crrwrwZ936",
  "key17": "dXthwxNitekwtbwHiajy8Um6MDHqKKUGJhg3bqRVp9UsKsdjB75jsp7ofQ6oMhM2fw3gnu6n99C29BbTZRhRkMD",
  "key18": "37xw8PcsAC7f5uJTCt3N5SJy2poccqMAyPdStoABdC83Gns5Q73qV1BqmoB7npJ3abgLzsyv5XvMDEdAcMMJQeZa",
  "key19": "34NERquhJWhLLDq8ENQqnw6n17QL6dvUHgC3GDSW6KnK4zjNPE9WZv5RTLqXvzwNku1jJ1kQu25PMq1VBBdzrxjV",
  "key20": "f66Lg5pK6n42DBt8i1bgvVqHPYF8hSdLoKDuBvngLkUKLqMcgEhT5qrDcaDJwePF4oAP9NAqjhmosQkSdSrqSDS",
  "key21": "4rR99VZCHqb5SrZGqszWaaUE3L7HJbEs2fAMs2KhV71JR1gRzqrGrovLnTJ6vCS45HspNeZ5iuUspBwBz3GuFAMr",
  "key22": "35wmTuokXHCXTrv3J5uff5rKFZhrPNx33JRzas8gM6nALvGASDQXhY9CTvPE5fG7uuMVRce4jqVeftwepRwdnMp4",
  "key23": "2h7wu3UwUwVxht9h3eT23PB3PvWqHDpw5gGFTnZhp6vBkJ3Cqg3TtJJTw7XRFzByrJrBu7BBFGPf6TqsEHuR6KC9",
  "key24": "igasqFuXVxTktxJLhCwWiamWiTJM1bGjWKE1x7AZdLSDeHP3YBZxpnwcyQAdjpvjMYydCh9WSY1EN8t3iTkwwUH",
  "key25": "2RNKY5HQ5XtG9JfTiF2caYYFYZn9FtxtChimd3jbFen7YQWM4J8VdVCQP1ZvLZHDH3nwfLQhjCpE3evynvQJv7Qz",
  "key26": "3aZeVKAcbuZiB17opgiKVau24MVd6kgHkMgSHkFFvmJduAu2XxkkXCaRwxqud2u4tYnrR5ZmakZttF9fgxXHfoLz",
  "key27": "3VJw6dUy53KWdMNL5X18aq5exDAJ5UJDYoPXGvmsTURm43hdaAuYCZPCj1p3pnqYtmLuvqpEe1YPBYqp35ELNRjk",
  "key28": "zifmFMEYqDhJBpUroJjftSeKrYpBK6DCiG7eydkxppdgcBybztUHwgqihykrtCtGaKA4AZxtTvr1ZNWnou9jbJc",
  "key29": "VTgwsMhjHxhXefE8iu7pX2JMjsVia45oHkQALjB5YnmjMyBhT2tmyR6N3DYnfAakd2FGvENE9wmcDxugjq29utc",
  "key30": "5xQu4T2aDFbxhpuLSwLLJtCaxxFcSvJnaDRVceoaEwYFzgKJs46GJgEfih8J8d9gWXWG51DXJCWkCyiT3Ey8QWEg",
  "key31": "4MqyMC9oUfKtRUUNcbcmRETKGtTSi3SnvUAXvVfEdZtaiaT7BXizn1aG8i6qcDCK2QyDtxxPP7afoDdAVBq4dorC",
  "key32": "3NZDS2LjY9BgpFm2NhsEMF1zaoynMKN3nDuAacD3ePbkNLVZuV8NfBzY14Znnqj4sv42oGcP5E6vLNQLrrspoSPn"
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
