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
    "5Qas7pwCHwwCfzDvJAaPUnt3PMG9fY3VX54rHghmyMvkKJehejNvY6VjhH8d5XxLso1zApjuHMK6DK1GwMMBe1jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CCCANbwRKzeiS5raGMaEZq3SkmfBFRFWnyH7QVmMqyXpHpMe558X8Z9eiPXZs3gxquaDGhj2ogEdqBvoK7B4KNm",
  "key1": "2Vrgobi45s9tGhphTkGXyKZdKt4zW6C2qMqsbQoaAn1nbiyrpPjJgTMaCqRGoRn3eCD1VaHVNEtn9V6NVfReWGbx",
  "key2": "5i3EEnzhdPNy3S9ZS7GaBJ9CETuKNwYJP4YZex4QgHULHBjYKwX78U4t7Y9Vg6jTTfyfMuqk1NgCCuJYgRtKPjaD",
  "key3": "Qt8pgyusYGaRrYNrLfnxcta48bbzNvdCX6dhUKyyQPMu7sXvMfCSMhkLL5ADNRoo16MFDiDzEachbTHkD5eJ4yU",
  "key4": "Z5qTYHtBaXFmSyf71QUEybxF5qkbroUsoXRtXcNDgvFD1v2sacA8vsPzjeutBmKhMnaaKKusqyYHGbBNrZd7Ba5",
  "key5": "5EXUjmggW82MCkrscuCP1AqoSUyooUv4RMt1cdLxH1vhohkPUYqwkGnNd65msnBAQFWdz1gESE77ecrEi3Xhtv4x",
  "key6": "61dujWaqKgZA1x6o5Jbgdy9UcJyeRTtYrdZ8jkXUTD1ZsQuuThYcWunF3n4C5p3du2PModAjwKga71yPMEAAuEer",
  "key7": "PiGML2SYgoDod85KbUDCREAz7MANg86hAStiacKNjVq2ymcqKGBxgGhNJXrRAJgUHjf2hj7kmrrB2Q6NubtJWuW",
  "key8": "66mXBYpqGZobH2xKZqdyBqWtrHor9UZyQ2XYSVsAqg3e1AgYc8uM88PxKvNmppDLowYEftiFkTwG7MGNeBGEKLWz",
  "key9": "4eabw8o1GVHQb18B6PfJDujaTtgqmiikphoUTAcQUDN22cB2GYYoMmFoqNd7CRJEXQvGcujRGeqy7EBi6qiG8ET3",
  "key10": "47LovRMk34zqm9L9i9voNgYqGbfW2XC3P4qQDrqbM4Wov1ssTeNvDxkfWDbmGDnErNSVHU5xiuxxs5DYb36BZibY",
  "key11": "2CWAWnMq1128a1CVTqaGfp8VzprHEzJzHZnwRhCnN3zXFKHg4GMJppE4Ta4AoovbxGMHQSerAtYbhYtL1Jw4k2eA",
  "key12": "3AkyqhbLoBrsGjXETVKhprsLRaCi7q6JVSV8PmQdUT72jXQkkVYjTyADbcfL5z3GVjLh8ah9FUin6zPWiz9hfC3N",
  "key13": "5UdviRTQDts73JXnHSZ3Xa45METVNWbLK2mojUZH961BQb9eqRYaaZccuTwCA2bDph2FbL4sNF2N49Ai3kzb799A",
  "key14": "3W7Mm7HpkrQGZabiidjSfE3Un7TLyqaNuoBExNmVtaxpYxinYqntMP5huFHvg1xy74MeZuDqd5Y4LWnZPpmPEZtu",
  "key15": "4eXW24EG4G2aBH1abmZGffiGBnvdhbnYnAGpNw9jaxVtSYm8NwLRQxN6o4gKPBbPkStNX2tUDFeYPY38WHyiXq1u",
  "key16": "5nG6jC2cUGrqEVft6fZ4kDXSfwjbMXTZUZiWCbQcMPFTAoPg3JwMArHFrq3p9sC21iBbtjyqL5Ki614gCQDSrmdA",
  "key17": "23VVWUGrjA8JF4sRpCtfjxpDsr5SgKPWLyapaZGDnd6wr5fccoS25SPKcV9o36jUEPHyJvQFsVGUj5MuJD4HepQt",
  "key18": "g9uD5kCwxQDUGr1gLmGE2GvdKpp8QjirTXEB8jk5LkSgKqG9Lm62BHuFfTunxFpM5YG7DBbbDetgFyg3hyTpV8S",
  "key19": "5KBrPGSNc62C5T8UFnZAFGf1WbWE1VahpnD3kFdMjLtBYXEP7ZXbAUJmBt7yDXxyYrR6xj4FcvrRbXa33poaQSnH",
  "key20": "GGjDp6AFHNsvjfkuwaLKZMUbxX9Fi9C1QDGe3kdU5g6tmrhBkwopJ6tL58mr6y4oZuuDsBRwM9fPCUj8NULFUC2",
  "key21": "NvvY37rTvCwymuN7tqxPYpYpXPFeNSvVbMTTwG9FhtBeAWfk3ZB2g9K6YKfp2fENyLKCHbCL5N5RUSRE7sboiY2",
  "key22": "21kuUTaMKt7hMaSHRo9x6eG1WKtde5PpuxAbGWdviRLYLgAVVqjhKKPwZSvthXkkDR3eGqXqB45ghJSmAtUZJgnS",
  "key23": "3xvHqHBvD3Piah6XWV4TRgHpQSc7Qhp7QeWgN74aAZbabEsd8Jxce9DFNtgXnojPFvuY8Y8kQxLiEiHzkBmUFDmE",
  "key24": "2nrES9uy6zznJHA3Po2NqEnBDETrDwYAoPjg6RdDEWSuB1CPu2BafakAhtkLm7of7RWCn3yrpZfqHMf1eVTCMnUQ",
  "key25": "d7if4kzYRkGfcMtosaDGnPH6gyay9jbxU4bFwK5LZwTayYQagKpY9Rtb296zRmbEYqpYtDcETJL9WaPKWGiedFH",
  "key26": "2pLXZgPohG92Cv2yeUAhuZqoC4iL4t3ZvTXPYdvsY1TqLw2mfJVzzLmLR1Z3Nwf9RN7rHruHJz97KQtjC95v7DUB",
  "key27": "2Nd2zKadNBrLoQf52Kcz6xKTyZsdgPqVWPsSMysXLHoRvB3raojbuoQurW9HcdqHjoADt1ZcZAMLF9MXs5qgmyic",
  "key28": "4jd8E8pBXXEPuBrEw8cvv5SfGq6EUPxCvGASiVpsQ2kB3ngBm7ZsX3NwnhdHvFS2fcEDSL2Ayb9yWP1fjc2GSFXb",
  "key29": "4CEQ2PFcJRTRJy2jA9cEQ8Tovhqmx53U4rkWi88LTiGCy9bQt8jjAXkN9fFa57LD5BTeZH1iNSHwNvk2EEKjnNVE",
  "key30": "67hfdqTKHEX1oCDZXZLa57AE8YwLYphqGMSiD2fKzCohPhRuSKRdjqBXDHjLWydq8oJzzyV6NHjeEic95iSpsB8x",
  "key31": "5JSHkcoHYjLYSgWSSSpiQMoECmhFpd9LvZQaanPp38vwv4LkKAjSHfYXWbuscPqwqtaKpx5T8ZdzxUJVtgAh5Ugm",
  "key32": "3xTi8wshu2k6qcK6GaSQZAbfAzoas3kTbNWpXCacgQoRd1s7zNLMuA1CAXk74UEJDUb5NQfayCy12tcvpMy1FBRC",
  "key33": "ZaQiVFhdVd26nNBUa1CdoX4rASKnMtFdmx6Tu82YLJpMWTmqLtbQLcuaKoebJ8BRuXEVYWuv4j8EFNvcVAoczgT",
  "key34": "3nagzqHE5YfWxYoYfdVTELdS5jAYGhDPs7b63UcNmJ5NYLRaEe9NosauTipkdERjrL1ZBgUQifETkfWzt9VcQFbc",
  "key35": "5hkZr51z21V89m9CKgkkrck2R8WdQpARr6gPjLbfF8ECc88kWs1fvW7cZiwNqSCyqiFKNDk6nH7uAqzR7msFwFrw",
  "key36": "3kHdGx4CSkyJcSJZBPQdksjoHuDsEQPkY6Xd6E21JKpyWW25vmELVPBVvhmFFxKjsB4GmGBvtKRfeo3wJH4rxqcm"
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
