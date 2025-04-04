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
    "3YWwy12BTqivQXjGaZxkx1cBGVWsdJV1byCnN6AW2GvNuLFawsiSiADccM9ze25qAFLtJwwbGVNuEsAhNmzm7aPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3taJrJgfPKshvSi3sJqWR9KGHAnXph32yVkHeuyUUCKhNASTzQrDgZBn1mEHD3rmJ9DD1QHz9fhRWcWxTw7rGP",
  "key1": "3BtznUYFWjnjxfP2YeEDdBSoQQWgLqRByRL31T972xdnwhWj6TjRyHK87HSo9VD4FsjBDPDjk1BTjXak4GF43QMp",
  "key2": "8cV9qTGTCnucHiJUQyjx8LSNSZzMAQ4zWZ6QGXWgpZaKbx3zJtiCwqhrVGfd6eXK9RS9kRcDGK7iP9JzdxPuSx1",
  "key3": "4QZEVqHsWw9Xofbk7dUqPyP4Gvj91x1CeyzJrXLVwXZVTVEv2rHWTYogKuKGZkeBoKZCDH2GCG4ckaFNLWnp8A2B",
  "key4": "2d4JAjUv4AeXkV4ZbN9kNk3UyFv7uGdUW2ALFXNnE5Qi42zad6UfXr4Wu44gE8Ktg34WxNiwWEkqRhPQEjtKbs8t",
  "key5": "52NC2me7TcCM8AGaRN51t1LQbqMf6zDNm1DgbBBhBwJafFCppT4LQZzmzjBNwLwfjF5t2ZyUAnFdixWARCX5QTng",
  "key6": "5yQ9KgRvhGZbkPNXRgW8Sfrh1MZgqGU77Zz9DDXainocV45kYWHUdV3G3fA1YZLjjQ4CnvX9kkVXjwctZM8MmqHf",
  "key7": "2fZJ3wkNcv9JzSs7RdDcs1PfJSvP4C7fVudDieUSkNveCVsGHhDZTajMFGH5TJYFTwiE1CwyYPKUcKKfRYuYQ9zV",
  "key8": "5J8XyXr3PUbGhDamNo1P54ueRVyv5qM97R2dsBGVcVN1Z9PctVAGp4xPWMdtyFEuWZp8KVBTKmGPWwVMu7HkzoU7",
  "key9": "2E736BqhP7G44nWeky2eHhN65KhTqKEC5GDgcmifMTVPFYoQnK7Ub7UXYgiZ9PpdiDeuFyi1CYKGUrYjGd1xiCR8",
  "key10": "65mzZWHocknar5E6d6KnNoVyqo7cp8b5PSRmTfaCzTbzP676DZJMmLTFWuPixabdbGJPiF4gfrEEBUkMduUmjaEN",
  "key11": "5KcmsRjDXQBekFZ1kBU3o9BPcaaog21gevky8R4ZvE6DjNtbjpGsYMFwMqcFMwBsxUR2xrUiXGBxLoHm7T8dofT5",
  "key12": "3q5KxEu68uazyu6m2Hmq11J8FXfpZb63Fe3xV4Ewjj2eHS3ebQYCGXAytQScGgzTcEnmJWRJm13Fu1yfE6umLc3Y",
  "key13": "5xWwfpQb6GBB6kdnMpYWxBz1HUdD6mUtsqpiwoo6svdVoQY1NnVLubKh9vf7oR81tigWPeL3aTNmRJXJYCsMGJPL",
  "key14": "3u9YAuKPLwUjPWKfHkBPWkVudQynywMBAD5jQeKdALH4cKjbaEw5ySKFt5tB2tu97jMQS2Eee3oq3KxCD53qw7i3",
  "key15": "36aJWGXZ7Y5JAdcX8jqgVuNzWtnjwNyeY5fX9QYr9K4HKfTsdoL6M1fQod6FE1rkK349G8731ZbHf2Xf4db3YX2j",
  "key16": "3GxgcpJEjBfH115jjoMqXhtjVJbqFpqf8CEu3vNangoGKFAR6C5bteNggA61oi3KPFoLWJX5ktJkGb9NpjCDATdx",
  "key17": "FtcPsTUsNzZ15cVkgbPQ4pmK2Yrq7jQwCB36WHGXfovucjWusZqfypo7zcLyUkgdbUrmUXRsb9Y3x78WvgDDAXD",
  "key18": "2g39QDjq75XQ24CxJTL1ny1bcanYHTHDRoS7Fw2T54vLPBRqHCghBVvDthWr1Yt2y9aaUubeA4g95oTkESXVfiZY",
  "key19": "jVuL21mpzFoUBNnA5kAKEhdqhZQfkFY6wXREgZK6JZqaKpo9NkzyDMCc3ApgteZjzSpnp8NDPpHU8AwUC5nj6GG",
  "key20": "41BXdAZxfawE58jN6geTdXpm3YSqvsicnkdhK6JJRv7A3v16S2VgWgoHyarvkyPYSLnieKFR9uGDgSoFYNkdWoaF",
  "key21": "3xiJW6JUsD5WDrb4YDzCHRxyff3SypACvbuNU2Me3fPNsesi849ij6r5PkcEyZbtJjVgbkF7NXWwxAe2M77Rc32s",
  "key22": "YB5kJKaxqvfx5F7Qc5QEyMRyZdj4t9Szbi73r476SrutULteQf5ZEUch66m4rZ8W1e5b3zrdozV4m21TL8gAqdo",
  "key23": "2xewehSunbQB7LmZQ1SaZHCcRimJ5KUypsj1iTZSX1mjt54rgXWSyiwEbP6EUWANwLoTH5T8anMvH24X3jFqh2DG",
  "key24": "2ihf7upxAoKWANfGdtbHZKZa1gPaXuzmrbmbtVMYTLXh1yNFLeo41d9SWnBzt7x14ZbvcFXSgyHp4x9k1jGeb8BE",
  "key25": "4bk6DSf7LkgmaU7kAszQwPRJX4CtKMw11YVj93GUERRR2uiM1YcRxikcLXdMLetFZiQgc6mm21zDN6iKmeLndUtn",
  "key26": "KDEGVh6MQnhsCGAvB41mva4x3oseFcKGZnQsEZRS9WS7a1GepxdDkCoSrz5UEyh1io78A1vt8veeZByiQnPGj8x",
  "key27": "iCQqT1PU4EkrkXoBFDepQ34apW16UpHd54P73EJUuYZUwXKPvTbFMARupGFXdGCiJ7b3AoAF8ne6mUQUwcwWwyG",
  "key28": "VC7cmvnpy9isrS7as4V2ox63giTW7hS1b4Y2ejCNJNwzsPVaTafLVJiKLZkMfZfAAReLbNa1oTeCu1wA2ULRjc4",
  "key29": "4rG3mDHzaterF3L9CKh73nq46kCHWZogvGxaPydpYJqP7bbnvBDrcmmx9M15oj8YmKDpDhutqbsE3PbUR65aUCG8",
  "key30": "1YmJKNF3c1F5ThxQLRpX1eEm5xTbAcxZgyEzbaX557BoPzLbuPcNqCQanJaTCZdYHAncRcHVnCTiBqESNHuKg5b",
  "key31": "4EQVN7p3xbaZLrVuhxkCvn7yxNjLdnDqbzBuCbDtoaX4onMoa4aSb2UvmiKthnxeRSwjQK84J5cu8JbncA94gXiN",
  "key32": "5SPTgcHFa7rPMsopRrHK1g1bWzEfRjsTjTUA66MQi7DdP2qSteHREHszPLcnmxNoqJtja1aUJwnNJaDdjKCVxwbQ",
  "key33": "4YUX3dVoMBD7dsoaERNLZBZsvVwSdCANUtoknen69mXUurk25EgTRw1znt9LSM9e7jTKTauStRnBAPMnhHGA4e3Q",
  "key34": "8vZaMPbKhnVmToMuP4CRv2gTzGjX9gsYNmo285Uf7T9YmXQsi2c9odE626Ya4odzbfAFcNgA3JECnuDrM7ExvCr",
  "key35": "4ZctVfqdFF1WWUeFP7eURQ8rAUcJqLsRnqV3fv5PVf9nFr8P5tjZeyD17BGgDReM122XYZvaXUQe8h5WAxxdeziC",
  "key36": "2rRCs7eKaeR7fYst5J8gzerSCHjfUoaWaLGoGm4XCdthdWaDtEtrPYpzSkSXCHSbhLLa39fExmHoafwueLxEZTt1",
  "key37": "4sM1RwPyvj3vPhCcq797GCB73yrJrjCmwKrJwcuBWErM3Y9J91NBUdzViCvS2JXSh4p87wbbpvW1ra8tdggPFAXm",
  "key38": "mpWxh2a6qBLApPyFuziSmK8z8xyAhowHLqk3vzuoSncQoQhw5s9dvk1D9k6frxiM4WKVFzxwkW1gb5RkTZ8wymC",
  "key39": "2Xefq5vvDMkFdS28px45zW9BVDzdehQDpaMj3k32FRxEfCVXvwyyEJpDWSWZ5YrA3Pa43aB3phxfCrHNV8pJcnuA",
  "key40": "3PrNxLPBTuErFdCAhsoLpn2GMBr9CYtVFmxg2Euz4uJRKxtfUwy1dkMUSj6NfHm8rcZ4KrcmRQHhiKt5M7oiN2g4"
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
