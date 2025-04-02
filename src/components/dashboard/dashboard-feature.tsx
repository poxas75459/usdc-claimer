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
    "5wC5bZCKrVZRk3eeRaa6iTdnwqydVmYMQ864eqFC8WVdVLJVabTbsrSkhvxrtqeJh3Nd5MMN7JnvpQjKzLqtNpKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QwezALeTfKCYC9yqbNHC3pvan7xyZdNMnHvTdiqbRPYmoyXAUqwyFJFMdKCf82hWqhEdTEGjZrdNcUiSBW32gT",
  "key1": "67icWMSZTHWD8mGTXdCAdxb2rVABwGWHoEQSQZ99MgK3iBV9xAMkpDt2wnw8TC6Maeua4mwLsiVce9fs88upkumB",
  "key2": "65ngJ3zwbMRZDmka9ypeEy6J6erAMBCeQ2dwz67JfPVrFigDvMkoAwwdWKMBN18gTeLBUdmsLj83xAe1oQks2wbN",
  "key3": "92zCMrZzeMxQdM6hi2wztVScLziyFNmcbLfQ4HUyaWYC5pYnd9p5QrqCGVsd4YgZ9M2W7DWpnftMRbz2mxxVFZf",
  "key4": "7erHnXWFLiX1s75yAuqb12czAGtjEvCwwV8Y1BR3rbuYgaR9KZ9T4wf3vb71UyRi3ArwvXnc5TuypfiUtErDPNN",
  "key5": "4eJaPdBaNVtfEA88UY8JWQCtjpHEgdBxRgnTAFQ7mhp74dfahezoGQA9uHXd37YzNcQC13iNAfMhNnic5AJTh2zW",
  "key6": "5UHM59vQKPC4mxzWn55Xzy2aAb8EZkyRV82a32W6pGKL5YRGXffC9QVBV7rhLqnmUwGrv3ueEUKpWHjC1TgssLdE",
  "key7": "3WrMLUHX3c1nr9uEtfAAdiHHMedpF89FuC7eK4QXX38QkbF4uRXxJMmazAAgGCnDhFx9tEHW96NAsKexSYFyBFM8",
  "key8": "2EitYopkeKq5Evvjb7Wxvr5bTBFmiro7NZ99EVEyzk4ywLdiEHqJUFGCDHRHK5GtzBEk73RgRiFWaAUumrmfbPZ5",
  "key9": "MfQBqXiEpGskKcLNz1TPGnyoT2cxC8r7e4A7ud5zDUpuy7shLG9s3DzbeithXHDWf8VtVHcVfMZVP86uAipToeX",
  "key10": "4ym7QmVNYVJY3ZtH8bCh9g4AbJQaLEadH89RxxoBuhqvwB8yH9oTwm99Gysy4Qjemc5SM5EBreYWNLb8CNWdJkwC",
  "key11": "3cpPCZKG2f9qGVXtfNef6c2TbAcRqC1sxKmLci8eBVyzLPtzDMkuGoxcr6ixDo2EYCT5q9n98nyQ1dPi42fv6tmK",
  "key12": "48osaPnCc4kTBMhG4as31YN1xKbN394GFGpY3tg9PWLUnz9Stzg8tjFcoAZShZf86x6rpHCYTuNobeNnPP4uWoA3",
  "key13": "3D76XTzM76hAD7wuwfbV8MicR2Et7UAjti3noBG1TCo6AEzpwmghiRxrVMSzDkHwwoBbxK8ybQuM11x8dvXUJNEF",
  "key14": "5egG9UfTHrtsNex4GZEMec2RQAff1uFGDbHAU8xDfoAhadUpWR3Z37MpzXmMsWL2KfryeAXup3QfoGKzjNVBdaZi",
  "key15": "4oBsNEkhYHc9jacCTKt26168LCHixHCeXEiKPhpuiooCgYp3BjwA78agQZgqvAeXijRABFFem8J5M8mfmiwfmnqA",
  "key16": "7RRYywtUYvNHtepUcjviJ9a7kBocWtMvQcaw1BpWy5x2ukVmJ2zyw9NY4UxsghXvRmDnmXEXVTRSTGHzZNoX9Wr",
  "key17": "47rspmcA5apELXUpRGA1eDDtdoMScirpg6pQiic9jiaQXpECAzsk8bGR3msAQjmQ28PS9TgJck2ydq41GupADrkE",
  "key18": "4jqBvx5cafkN96Zhn5gzQktsvzR3bnUrqCSyUXV7tq24kn5FYKuvQVGZXUJyyFn9oLH115MKk7VLh49rhbAasyAD",
  "key19": "kYHvZKZXuBoVNonWVFG6cNqh6DNVryER4qKkgbsK27WgQw127Mba5xL7NFMjMz3s1WFB63PkzABgTJ42TmXssTm",
  "key20": "5ruC5dRc7wmYPcyF3TwJg4uXTZbcmGPXw7ursebhbThU3vjfewohBpfdrRrDJDfKnpGaDaCgXKhPddDKGwuD2Tee",
  "key21": "5bDVchLrd76hpAg1xkkSavz2i88kmDqkrWPWqieVoXemimfwE9NRD9tj6vAT7CrbGgm8o7UVZNznbAdm9jxTEPBN",
  "key22": "4hUzUQmQzbXGfNVvxwVgjZ69eaniyrS8KX1viDeXR1T6bGESuXmXTAHepPxnJdGDezi5NR2LwMkfWQkR5StbyvHD",
  "key23": "5YFN7qguWRJiJdk9S1tqbqXuKR9AWecqjfbmR4oxkFvMTot2qZZK3MfkbRCgFjqi8JiqMHjw7MAy9v6PWL9NDVPE",
  "key24": "2frpFL7Y4UGy1zJCR6AGJxDFcVmnU5H72EAMsFfjs4epSFyn2ezW8VXABitK7xrN7sHigy5SNJVVMrM8EwSPUQzn",
  "key25": "26YrFUdAnosXiYAdtVMZNtASp6ByVeeQqxDK9BKHxEXVifGbUQhh5rkX7t3kNxVLQyKqCnGmakLJdQp7gv6H4oh5",
  "key26": "2Di1VKrW6ELRCEpUBLk2W9SHiuPQbYv7CPNuwjsw5fpJ4KQa8G5CwdiMKbEr9cH4tLMYa95pAufd6WHD4HfFQeYg",
  "key27": "5XAeFFhYYNKkCB84bS6AbRXS62NcPz9y9ggCLJS4ZPhVxhXL6kKX7KdoE4xjJKDELuZPbzBp29Ae4J58FY5Pw5VA",
  "key28": "1vt5jzeuew4vp32Dqvc6jRh4ueWcwnKsivy5y8Y16dEtK1ZVWusrySQKCx2GHJUTiQbSns6zeEyzfCxKEbbFqmA",
  "key29": "915QjJkdMu2FicwGNZBBsYvJa9NuC6LocsBj6SUUg7HQqtchqoqmFYnnNn35i7uUa8Cmd3XTv7AfK9iwV5ysA5o",
  "key30": "pfA21988josikMuA2TtkTZzZ93E6TtZ4rTYWC95iwqwQv2jDw9pMCAbcmoqFjGeRfzeSJNU8fGQtLQrXGy2u7Js",
  "key31": "2KHY686etPUS884K3cE131xvZApi7qD2Kwebs2DXCH6CM4npC6AYkeJDNxUU7UXCXCXYmbhoxApT3vNFjEvVsNeZ"
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
