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
    "4GqR4yK28MMVhoQjEHh7UNWaMD7hRLdganivBseRt5UWdmm4SvV6VCEXjQXp9VZ1k69T6GPyp18Lm5hN42JxxC1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4drFnTDA2kFY7dhVZfRfTfrMz8GjRa4pTka3XWq1zDr1en4cF8zwsM8FqH2h5GxtCdJetjZGK5Mcdfm7MHMksWgp",
  "key1": "5v2Cnq4hrEmKWdPrmvMYUHqz2o6t6sEmKWqCccwFUFKKHFsPB6Z3xEkhhHs2nreyjdPztuk4d5FnekffzmFU6ouR",
  "key2": "2i6ZcJYZGoL2Lsp2F4QHgGq3HLUXm1PiBc1jnw15FDnt3saZVxnTE1wbpmRpBEz6etGx5ZhgGvaam2sPjjoRK9VA",
  "key3": "3zdvXMo5qF88Pq3GPGgXFYX5YERUrMxpxvuLJDta6PESKet73V3pkd991nR4Rp42U66z7VuiWhddzPHVnFHXmZkG",
  "key4": "5fW6Ts4igSzovPkbh4B4KHMaJHcu9FpYZ21ECfWoWMJQ2U5zJ3vtLNXZ4XAEP4jGNtWF59gVKjSuJTbHK3Jeincs",
  "key5": "KJo9MCvNmMtpzi4u8re6Ur2BwuU8xipcdrMTxbqSgmZmSxvZGhhQPRcYndU8pm82AjBSCD3TYWy71E6mX4ueFTa",
  "key6": "3dgLxov2U18KAdb6g3c5uFNCfwUSAbvhkQqQHuCa91BEVkYRxX92wjA6VUrfi6HRbyqEiQZessFAr86cxNgCZ79X",
  "key7": "2yvPr3nedp95Fwxv7quPUv51gHo92xkdQyBxVqPxAZxBxEus33id5cs7hYeBbqyLPQQbetWEtpePf9YKCN9A3oCs",
  "key8": "5tG18sGfnab8ht1GpyqYiqndPHHt8rokWD3tskRcXPzrTJ7J3cwjYud44BmtJTjcbBW9EcpH7tUhhg5HW9kVC1HQ",
  "key9": "6U3C8oMr8ptVqeC2gF8uYJP367Ycu8LBApr98UwZScgMZnquLzs168ntuxEEPvxGZcGEthrtc7qSn6gNGyWggVU",
  "key10": "4PQsr7c3dMon32Xq8bSTnenX35JgZ8XcmP7NWYj8nsJchi83VTE6twWqQez2efunSqqRUAAFXpRBr9zjDo4Qcwhv",
  "key11": "3MA8mBsiDW43TnAh1fXfRE3396z46AVpLR5kQ9vCap7ehKDfCi6qyBFDzgJc7qeHj7HHTnB6tzEMUjGYs11o6WnL",
  "key12": "4pRmLqVLWhFyrCSZMmnTo5AUKbKSDx2mvbozQzTpgKNNM3ULyz3vxe28phUrZteyJYHaJiewDYau4HcJxAKfRitG",
  "key13": "NcjTTRLeL6sidRxhuSbZMh6r6ZD3cEQRffiKvRfGsCNgRg4dComAZ1KyhBkvEzyJZvkrQSnc5rCz6Rut3VojqEf",
  "key14": "4jC4PWvrj1rve6MPjUiwE7C4f8ovQTZq6XjA9kkGHtLajCQvXW79UvZhBt6xuavrZfCgbr31hLfDbyaYc6ieGwEL",
  "key15": "28sXjLirCpK2xCXbkXMLaCeQUwmDk3QkCE9268Y2PfY2UDEkMo41c9VPZcUR4kuu6zH49d6EuGDdoeYYWo4Tg5s9",
  "key16": "4KSuUrbbCtVYd26RyUddQDR948e9wxHfBMdEtXYRexBrbjXoqjUaZ5z8XZmTic4B86pMbAoUW4ianUQR6GR1A77k",
  "key17": "4dqQHKumYTYQFwSJjPYvrgSAkvyZ2T25dWPXTmUzzD1b1XDW27BNskSdf3sgRiryj7AN2FYtzL7xWttPGMPsppDK",
  "key18": "8H91yZo84Bnm3wknvRWpHktkaq2xjCvpgRdxQo6C1vGVwWD4au9zQJovVDu6mvqW5WJKJZTSxcu4LwQUSj7NTtS",
  "key19": "3va6UcaVG9yE23AZu7JAnQiuwxuQBqtz3NjVVevJm6DrxeDCzE5bJCDg5bii3pX5pnzjofv4c9rhrt5EGpnQmAKw",
  "key20": "s92jpNpPgFaugB9xEi4jApxDnZbXqQexWMRVvoUW1xhwEHELVauaqA2PJ9ESoB2zuPniqKpQd2xip9VE5a1ycFn",
  "key21": "GomKbGrt9ELTmXWEYeTj5Uyj3VZW6ZMxcFyhnUFUjkaWs5SZQgbv5cjZEq3cW3ruhG3dBq2HdVNmuQHuyQ6qqLV",
  "key22": "2soAd7NXH5ABS9xZMVns8cxYHEZkf3F1Dn7Lk2cJiQaGr2o3iRtFCfrVdLC1CJhvjLo91GFJBQZC9J9Y8UnBTtFe",
  "key23": "3LbzxiAUzgreMirptpcW2RwM4SL1exj4rRQrXVzVP8Hjh8KjQsR4Q9UGvvrzjekRmfjmWBfHBG6ysVoLgqs4uwS9",
  "key24": "4cpUz5mPwYhrVczEgXnA9ZuKxewYbf45Dv8u8eLud14P2is1qnhDzRiv3p7gaD84tbiLaJYuzZ9XXhRmEuALEEZZ",
  "key25": "4jKJupuqJFGw3eM1pbzbPR2KzeZdcH94gwMs3K3T3B8wJb5TjsP6t83qHycqNAWkqS4RKAjB8ja96m2NfudoVJFu",
  "key26": "5hmAa3AMDfpnTqZTYBoG2uhUp7kajo5pqNr2s5c5ZMfsQEfMxc9uuqKaQMdC5E4kDCC1M6T3tZozjgvmtreuHqhz",
  "key27": "44FubB4TV7QRzAtc9JyepxKHTVcuT1E1THgEFht3Cdg4qPAYwTQjbHUPCpTfHZkQMA7ZrCmruNpVT1kZfsEyyFVf",
  "key28": "5zFUSsMdqY7DdQfege3eqUgpAV7r66LgpqmqnDWw3TFRxnM84C7J6S2NnAUokxjpNUTxiR1gdCDMMcxKpE9TPwE8",
  "key29": "35SybuZ3n4xbN6238KmYL6nYVyCq5jwXXfEZJELkFf6v3Cc6XsMhGGQZT8fokVVbEB84AXRUfwLECaDX5W36ZfeN",
  "key30": "4jSnKHK5VUpvwtcSKrc6XXp2eYxaQseKMz1CVuysVPmFBKMJC6zn6qxSeAYLZ3GXi38ckZYtnB8Cb76t1bw3XTLq",
  "key31": "371gzdeueCungpdZMqNe1UH8GGwDvyyvNNFod1kZJ1rVxTNc1Eq4DZ9cHmsktbajPzXUDytLE6HMsVxCaaxuaczw",
  "key32": "7m7jNBhrRTX1LxpuHMxwqopF47jc9Q3sH9Qc4btLyR36vsyFHxAKJF9tb1ijVyUCzbQeukwjSKCdZxj33AAH5NN",
  "key33": "anzrYkpGuVWkuhce13M41zAzDBRdVPb6siyo4mH7DKBGncQSgrLdHH2AtEhC6zHsAuYRa6VDCYNmUyHfbg3oqsd",
  "key34": "23Svbu9SzmBwbWnrRHXaz64GZniu2S4iHLyoiNorRzU1d1XNjPy8NYbWoVNriJWT9TC4DT1axfQRfohV3NW9K71p",
  "key35": "4gu2qfgmKebDEs8bxg5vZffaXMo7e6VLZ6QL44doAdtjHBUq1TZpvhZUj3kcUPdr1Eb5jxa4qPcxwbwVx4A4sD1g",
  "key36": "2zjTcNDSFb8Uri7TN7ovisYAj8Fk63eNa7cmD8vT4uVFEVkGKn4vRXgKBdnAdfTGWCyLDYDo2N6esSie8Ayi14ed",
  "key37": "4tWeaPov9evmNG6sjsQ4hMNXeF9JUHJ1eaB7bx48wyDLFzCA7Fp883xCXwypRLUxcWhxzv1zeMpM16eekzdycxqw",
  "key38": "HtBXRGPgy3nNySeXJazHMoBrGmSRuNCiPk4xjm4UEZcdRbiTmAoroNGVRneK4jkPE92E1X8qxGTyKe3ZFFXtoVD",
  "key39": "5dbNTQXMHqWX5QqtGhRA8VUgGezBjnDJQnRioAS8GAkMDf9pMWHUdLZCRPq6ASYM8Y5oNRwuD4u8jEEsoF8nrJDX",
  "key40": "2i8K5eh4ACpK33k9Sd6k9BGM2RRuT6jUJCHzewS3sNncQ4dy2XpT49DDNkpqqTX9RBvS4SFTR3TQp82T5zBp7eNj",
  "key41": "3y5k6isNDYqnmLR4cXoQaajHHrbeEvr9xf2PoPRoVtkzWiBJG9jCeFi4EpS1kRYsrBwQtBAzdgo2jWvZbpVifXSv",
  "key42": "2iPcEz3KiWb9KWzipBq9pxBkDKyP6PQEM4Yb2tan5cQhP6Pr2WZKkopRNZCJPQasY3DE6XT95htf99NnTnpqW53b",
  "key43": "39D2QRbuFvHBXMkC69v7e68RSVRHmkuZJ9jf5kruUC3VbifofMxN91xsntWK2PoHgWCht3Yn8HzH42fUwSuLxyeL",
  "key44": "KHd5gKSR79xmxWjU1rnRaykBtVST8XEogSbVsZHFvG4sMSxgtePqPBsYbn9Qgy9F4JgdJgS8tR8yeQ4n5KEP1nc",
  "key45": "5BpC1MbybjUzeDkBD3JN9mbW74rhyJ7bbfmaYa99rUMp8Zqyx5b5BmVVfXbFwoRG2useKrYR8GP6uHDuHADA6sqa",
  "key46": "ewuFhb3EvNYvx7z8GQsWhT3RHwkne3s2CbgWcvsF4mmSjzF5Z6Ab4NAtaQvniDcUKCxmmjHEVr7kRZ3rFBTpDd8",
  "key47": "5A4jtzpLRzArb38bAfB9fTx6xWN8eDiytQJyvjsL9HeNhMYc1hpE1VkysvJEJfWQ36dXjCsgmR4mmrTTpZcoCPic",
  "key48": "41KRYQ4oeuCZSV7U6KkLsGNTe6Bqneq8ApDZc3UxJCqGdhrm1mEpyGprB6kk9matmyuBfU3sV4SWvsm3Dh9kLTu8"
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
