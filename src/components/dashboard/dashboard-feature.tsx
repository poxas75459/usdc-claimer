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
    "39u44f1b6yhXHdg4TjhPymiPxXTqPXKPP4w15zBKXHTFYWq88ixaUyfuD1Kb67a1S8yoz8Fx87sw5ZkpQBmVoVQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HkYBftdcVv7A2QE4HcQfkzV3mbsd392t1V2mZYyBdwdanGg4EoCxVdk3QYKzC3zK4kdXW6UG7mxEo6rMsbptjaT",
  "key1": "bjXLvgdPkwQwQ2vGDzYWFcFU6vYYrbm45XCJT7fyqhPCESxoM3PHHSQp7BN2qUcwfoHMoUMGAMpxGJMHfSjr7Bv",
  "key2": "7i5QXyFbyXkYNLYQGStd1RXiGFLi8rfbSCvbTav4iv4MZrMzb4pBQjQx8mV5JeAiqPn7Q2U3MWDTVgUTrofeDVG",
  "key3": "2VuFGeiYx8h3aYKui4txrNoWMUjezKsF9kY65BuVBHdMfF4zQBLffsCMb6Pe2sf4XrRRJY91PDZmD4wXwkS3GdmT",
  "key4": "5PP5bZUv4a8TcGFdFRuGeqgBiZhsuwnpWQ1em6wprD1cpSDubHPQQemy5XX63QoH9sgKcSa9u9H7s6Leb8UqKB2Y",
  "key5": "5RJYM8SkbVqtomgyPbj6EAfboKSbWDzjfQowSYg36aNtCuE1GYWqZrRMLNC42E7UwY8tfN21i3nzoWCGxPfY9C3W",
  "key6": "3918eEQboDmRvm8m8hXiaXj1WoG7rcTBed2d2imPf8YUu774T16yh5CFAQ5bT3a9VBKBC4U1eFYV6vauSGRw2T8c",
  "key7": "5gxyeSw1NYcUsbsE18V3zWPzcvxDsbzxNqTR5rZdDVDANbem9666cSzwWLXNyJEKBwyHTPxPB79X8YdYc22e91KC",
  "key8": "3PqvuQRQozSkhgya8u8xRSojxp62ZweR9MVK9RSTbjxnRAmcmN8nqwQDiH4ySivStYHopeyDkbQ4UmxGKf6X7WMU",
  "key9": "wsezN8i1PQdXhya2D9vbTMueHtasJsmHGM8hFdQfyksQHUSoFMYALpaBuXSBPCnsERf2NDujfafV3ftzj9tvdGR",
  "key10": "4YRR1zattcQ6289xLR8PtVdrTkia2P5hk128yUxc1wZgZzqYp5T4utjWcxivQHE9k3TiEiciMCXffyp619tVpRpL",
  "key11": "2Xzue9R1WSFCAGfGPfBhVtiZZJqBuFezZFHWfASjMxo3pbsZ5sDBhobEPi58cFjgivpYBWXZT37tyw7otCPi9T5s",
  "key12": "j16ZtUc1Jc5NRh8j8g357BaPUyq8hvX1iZ5uU8BFd2uRmDtcJQah73RfvG5ppYFg8Qg8RuHPGLJzmyFwTVQBxpQ",
  "key13": "6234wJsgbRnmjMp8fxSsWCY5tqqj6UBE1eJzKxdeacfAGTWfxw7tGeAJpu4LuDttUmD4QjXRaSUuk3bwDDEgQjm8",
  "key14": "3b4QPrDA3uq4thgGc6mZMQ5yCxLPX2BmKadkgGQvMej2ZYWSqpMDZAVecRJhGFfcLaz4GnvNeTfSgpWk5qwSzk73",
  "key15": "3VqAcj8Ucw1CRoUrCjQnJsjku7zwGd9zCHwwDVYVtSkikY62dhzNxs2F6vY7ekE2UsXBC6Etce2Y2adeeqwygw7r",
  "key16": "5ArCyKSqM4mpndPPHQAj7NBE72BAQ2UBgMiXmL7ehRMeD4NjezKagc1PC1p7GwokPJep66ZzZDJGsZYBy7x85ffR",
  "key17": "phXRLZxoa3feNQGhc8ADsucq4FttEz3HTACwQFdtBA918Mhz2bUL2zLLrR2HrKSPoT15xjZYagNVw2Yob8R1ofK",
  "key18": "4Es8Upr1gwC2Pw9buaVJNc8j6dtvDYVHzJGDrGM7dvne1Hb1FF8RKQestdNN32hFKu5DVe8b6tbUtMmhUHwGqUx5",
  "key19": "4XtSU5SBHNJ18avZJhhTyqunJQTtckGcVJQR9oVDHKqTi1LgZnz6FkpqGjmNpAVSnxRz1kfk7Jm3kQGhUuhdPzgz",
  "key20": "2pdJqmxbNGTsakUBxQRt2dJ126AyXpLHUojjxMAwjqAhWaZyz1rz7xEjzM4K4u6sGG2pyGY6RfuPN3BiCktvkxrR",
  "key21": "3X7rPMtZAPeDUMhdejiYbXPcX92L7NHNqW8kToYCz97i8NwjB1CWvSLpFdfdYcF8yLS5CfuJYJExsz5w1Ryk5jck",
  "key22": "5LiJTRFadKXDpoKGT9GRkUbfQJmCTvEk98b3ooShMDQLTswBhuogVBHRk77AKFZFvm6cpW7DX9KtEcRDSqf8ZEEG",
  "key23": "2SdtSV2K75eHD8N2JF3LvSyB8RyyJ1TYeYeiVEYX8AD1s59MAt2Zz5eSY4ZkHzKaYKSPZs7ZLshHKLP5sxU4Nais",
  "key24": "4bTWRsvaozKQArunD6mBCDmqN1U2iLSQTxFUn7BLudhvt43ANNMBRrXmejfLxPMVp2Ecxpw3kVToqTL2bhzCBonP",
  "key25": "9qXZJoxf2RuZyCUsEeeYVLVoxmEXLRfqpciyJGRwcS1tHCLJkMvxNGVNApYddYYauWxBuAC42PZQFmGsitZeRUB",
  "key26": "66bAQMpBNexQYRqXtU7uGx1ngXWsyo5fiNRqtmFB6YEEFxZiLPorGYNZmVkwTPjJGuF3iVkjB6KPMaoJaT43xtxq",
  "key27": "4pjpKUbCeEt53k6HrA2Qs1Ft2NerCKX4XVGvKvpxVfyYRMXss2FBpbSk2qJ7Dskg1FFyTHdX9FWA4akp6LcEq2uq",
  "key28": "2m4ZByzyLXCZW5Sre5MZxxRkTrjSActgtvz6AH9cXepMhQkGKWxTDytzegfYJ2FvL28j5BS7zAKTg2kMAgXxcuyT",
  "key29": "4r3JyJZmpPjNoPs6ozZSfGqFGsVL5S1x61GDJtW5rrkkMdRGgYa4VUSiYUQxfKnPxU5HSCHG9jZMDR7DeF1xA3g4",
  "key30": "xRfxhvwMqA4e1yWjKPnDYtYVJRPPAV15YvPELCbg4sKghiFj9TbkaV7912BwgJZi5M98X3P1AdXg1oW3YUPyRmF",
  "key31": "5FunERpsS9Az2x7VYu78LPsHdAutFinZG2yZLtHHkkPdr2h44yKYeby99JjW8KYzC2bJLYXWCii655Z1bvALmK5j",
  "key32": "54SsKqjg1mXXygJwy1AG7cFjXRgkm6oYurn1qrhVJZAof7qg64jtHwHEmMCT4ETjhjeAABRiMSiGF6NnpiKgnxrd",
  "key33": "5dW4d5K92iigpjje2Btzi7wFogN8SVa4qYUYsMUKeowcN2eNueFNsbrENPUogMa9BBWc4FAuA5mxYR7EL2BuufME",
  "key34": "3bRarnDpytqEYAXMFa26Y8gEyneNjxyv5XeH7utVMTiyJRtQZED3nb2J515kaNgYzyj76hwwUpxpk2CCjYRZ28V1",
  "key35": "5BeWuUojN4c5HYgDtQrGNWXbFDCBfUDk7wA4zohaYFLtYhiBuLErvxvvfszon3YER82sYFVv7dZLPzN5murxKfeg",
  "key36": "4aybo2UyErSPwT3Z9s3aiwwZanqvgn8SQ5vdQi8j8ibd4ePPQhrAnTXs7spg26S1kTvLgF4YKwRbe43Y4WcEvsQ",
  "key37": "2HzpS2cZMj79qKXRpvXstEfAkbdm6F9VjbDWpsWArxEpcahC4oWka548578PpbnWkmYjZ9bgm9n4nr7isehgjK39",
  "key38": "225FWva9T4xHpZsBNTr1NHgScXHkhcnizVxNoQqu9gDRzpEKhTVvQ6747Rabfpu9nWvvWdNexDxPCrNZyL3ifQXJ",
  "key39": "4V9493oZZkZGWbk5iMZkeizn9dNE3Fm2G1es3Z6uepyf1TAewNJ1sVFfKUzxJLAWnLupsDDPNF39SaeFqxY6jVDZ",
  "key40": "2vF44dnocZLwFKNhsbngy3DCeqzNtB2YpyeDXzrcswCnJbW6cnWyzigTxg2s8AqSRhWYx2w7pUSEAxJWHcBgX86V",
  "key41": "pkgxqPjvahz2U9sGkMizHbzFx9RcGNM9Dfa6V4xFBPv4ck3Dih5hDmcRJuwy6oBc4tMiE9FGbqesoaikgeAvJfh",
  "key42": "K4wwcCgbGbRxRnTTnbQzNe1qaf3KXAPDXHsdvc8bzxmCGbz5i8wzj77oJK7SNv4qCTVG9EPgHFVVcdjVvCyy42j",
  "key43": "4sKhZrbiPW5K8bn7ucN4LZsZbsoDjvuZ4FvHvea63swszRjQ974XM1kF1oxURm2SF1wxSR9KBLudz6FHDxkAj4qd",
  "key44": "4AxqAMzc3PMiJabPrpF8zzLqw7XvtfWGpXkzHeTQoUBhpQbADweJF8zzqMfW2X94Rv2LGr6bNHD3WS5i2EaEYPh7",
  "key45": "3VEc6PR2cZ2HT4s8igZNPHSkUCYMHFvDP9dkcd2g1fTckFTjCq4DJVRY49PDaTeCSyTZqVpSxyqMxeW7aEUvFjwJ",
  "key46": "3Smc4zgXXX95gYMwF8tQqWYcBE5ggKwogfJ5JdbUF3baW45Z1uoJLVAKhQhMv7JNU1EvY3pHHhTN6YvwjF47tETb",
  "key47": "4VnTLABZLMZcSaWGDLKUAJWzStscLTMcrac8yCEoarLW5rbJSG9A23YP5L5KmfRUuqemfkUq2qoHyQLVYRkvnqGM"
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
