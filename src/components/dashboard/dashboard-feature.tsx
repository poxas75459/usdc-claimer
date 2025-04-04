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
    "21dG8EZ97yzS6KkG3uZxqTsw4z5JJJTsVu3gmPTva9qUpT5wpA7ouwMQ6HYji8hgQBNNzJiymSGK12g1ZZBeU8yS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCfSU6FqQU3M42y5RoEhEvH8bgX1rLUQchCi9mUUzDV3eHbcraQ1w2ZjYzL2DmrYDYqgZt2qaPRysPXu4GPGRnw",
  "key1": "5uxmMZBgJJCwAAKJKCDzNt1Vra9WzU8fmb7CniMKL73rUH3kqosVmcEVzTFAgMF8qYsU2ZVcg6XZEMLRMXbbgFkg",
  "key2": "2JavU34CjmgyV7Em18nXFVTv8vKDJcBHAX5c3Lo2pfQrEWkeoNkG81H9Q7T3fxoH1PurjFGmkuEtGRh5QmUeKFbQ",
  "key3": "48oh2j8prSEiPjirSVL8qbPfgpgyXnNKAVzRnJqB5r8PKpMmjBvXUxfdL7cdWXxEQPSa2JcpM4nTMgCvo6rhkQPs",
  "key4": "3uRABcD3YRarj4dKWrG5sJd82haQgtPT4PCh2EhSLbacoUdZepkPsg9LNLgUFtV744VaLUmRhFnmk7fAjLW7jpGy",
  "key5": "sLY5YABXdnAhCc41XnnqPiEsWtobBvD3QB7pkvmLDHtEhDXdxBANBmq9uSUF8Drb9t2vyjnHY6f2RnW41d523ne",
  "key6": "4UzSZN93N2r7MZ78afRNwck3qogZbjRRoq6NnbF9KSCNRdkzfrnVtNDBGknvLdRa6f4ZcWqAgp8Y3M1xyRu9Qzzk",
  "key7": "4NgBvAdfAt2z2KtBAzf9mVJiQins9bAxtvQCSxQ43uLLmBcoZ7J7RqCFMWr3nGQbZL73Myt65Uxh7SXkToS8cBbT",
  "key8": "4XhWfKC571twi11qWFkBjhRWraupzuZmPK5s4hyQQS1sHfDcyJxGKo6BecWwMAPT1DdiCphSMLSRgCVut9ChL1EB",
  "key9": "3VCszekgebNUnTs8c8ESqYXsN3x9X7JzstasR2eS41GddSqTKtcpNm4q3AxV5QCoKu9Ez6zE83uHvGZM3Wkz5PQG",
  "key10": "P8KXrxm1tb3Tts7RTnk5q5QMm9L2aL4no1numg2mQrt4y1kZ4Gtw75LakJHG5EBp33sG8VYQ44EvKAmQHHEVrZC",
  "key11": "4yZqh5mi5EYKqBhr9UnHWN1hhicBEw1MnwmDTwURAGZ4wgRKYwzef7iu5bGAXnFUX4yGoydSC7Mx6anS2stGVBwA",
  "key12": "2GPXUmS76TAzxGyq8nN51owi8Yj2WwkvFYqoC9UVVQ5z1kppenAUnfntrv5cSfDYmExm6NuPgr7x9pCxeXhdtczJ",
  "key13": "2DxqhnDK6LhNdASQBLsNLtMmDNCim9FsrMBBkErGzwt8WtsQNyApvhwZyJwXSdEtwpgST9WB7JNFRVSLt2nP6Xst",
  "key14": "3MRYwxNats1pB7syVtfb3jMees3XZPgoc3doUsHZrio5rNjy94Wstsrcvnu2nNc1wH5ztiJVSYSzrMpwYEBigrST",
  "key15": "3WErV3XXrehNRBEYKrqmanBScwR5mioFPtb7MG3uXChXgJccPkve7VoFfUMjVz4mTmgmt5W4kE4mea3LYC8HdSSd",
  "key16": "4swDQhvParFLVtVVWybh2SMmYJGiEmySMsas4nfrDYVjhwyTuHQLc1PCaAQPWg81ietEuWpuhYd5yhZnQZZYBtBg",
  "key17": "v24D6bkowKnwAnaNK2kPhWPRtKM8ydazNubDrU2cq8gW5S9gPCWyXL15LU6VauEVmshfP6nzdQrLDzRWWiSTXjr",
  "key18": "2SrhibFRsgDrpXG5mYPZogReKEKcqiuQWyifM3Dobkq17uPvhqbAju7b4hRvSCZNiauVBbNc5hLRGDdELYQDfTaG",
  "key19": "3hJoP3TRJxw6Suvs46r6jRUVfk2G7joLmP4G7sT1jK764VcXovG2DwnjVQVMd3a9QaBKyuWM3jbTwF77C3jgUAo6",
  "key20": "5UNwjJkhj6vDCZnLSAjNyGWFXx287jALpqWCqvY5Dwyt9yKWx4tjU5qqqUYTj53ZJhjHV3f3WxqbANFar6SfuHan",
  "key21": "3h6B2njva2goimhnc42AtAm27J6s3qwZrU4SAG5AtPWk3jcptaey5egcPrdmToXtMx3zcjK8DiyNJevZMFnV9F7a",
  "key22": "H1XfdY9WvQ7EGnX2eJmoJ9D1FqZHED18UJXQ6ZGYV8QjVctkvDLqZhHDYWqdotYrkeyQ6s1j3HnjV7CDFV12Ysh",
  "key23": "4cLx84jT6SQoPBjCoeYLj8YhfQGQ8zKZFwxemTRA2PPL1mu1GuWqRN7Kib4589ckxMjZxmM19Bo56NHnTzK1teSM",
  "key24": "5Wq266piw1E5T9xJctsTYrrQk3kfyAVXaVsAPRC9Z2LfUFehS6VosYPnzZ25JVxgaEKGHsW6xrM5VnH9AGkeJaxH",
  "key25": "5GGqvmgjkbgPSqSZcMtrRNDJGNUnkQDByv98VuZqsxzwpNFqdwmTLjZori4aniCzvL72yKR8uyREqshKEX2PKxk9",
  "key26": "xZzW9Gdd4R3ZaNtKN8DoqiPBShoTbdcGhJrX3oDtv2mvQASgNt1KF9rNmf4jb9juJJ1CVm9rg4taRnqmFFwi9m2",
  "key27": "31vBBkeJRNcMzYX3QGdQpUYoDRvVBjR8XegkyfebkMGdjvFVcTJ9W9iStnBRApeRXzBMh8B8Yju9pcUf8G88FBbX",
  "key28": "2ysgGBuUyqfwxTHPCkFT1tDh5wg8iBEtVjcH5ntZaPGt8ywUMfdQeXYHxS2V3dtLgzvLh4CMr7nYHh4riTcTmwcv",
  "key29": "EKDpHidgAwxkL2qvkJbJki73hN25QWhFo1LwJ9D1pDdGb6NRbzvg2EaBTgcVkFSh96n337DbjRouxfLog8M7Usd",
  "key30": "kE3f3ePLc6WptnYNFoPxhnacp5aBV1RYoJv84kReYw12rjUWdAbQMfW7E9ACdaXN5bURC5vnn9KUPQH8XG2SaqF",
  "key31": "2jv7BZrin7378HWaRmSAQSfrxfPKdxa19C54mCzrz6BwGThzqzKMeReQMoMPd2hpje7imSe1Hq4pBdHESA1et3g9",
  "key32": "3egzbUdswZttTUJ5L4jDqAePK2Q37BWBFxndFWZj9478EitjXJkDgMd5LseMuwMbU1DADgKLUk8ek6jphM3wUwku",
  "key33": "YAosmXfZ4KHGWqHYaUdRcGjFAkLQoP8weJJPy5FpKP6RkvDpjDYSy64HXHm1uMkpJv5nERyG7v2wboewKpNMyXh",
  "key34": "Bvmo3hL9nQG6Lf1Agts6uCfMM9Hyg98ocb22XoeJ362qXQkhFXGUbyF9Y7b5Er8Jgq6kQP14tN5Ac7Gudywi3qu",
  "key35": "3cmbbFsVnoctdwg3nkGyJmZtNBn1BKrGm47MV79dHFAaqBUNtZxJPmoqVon2yv8WLVanPDACe1NHdQ7YGrYaEgvj",
  "key36": "3uXDNQ47xMQ2NWcYENTNpFaisLes1Q6CkSNGAd5EtSwam8SthQLbKgunvbJSk2xkPbXPh6VJjYnLpvRYkUQQVW28",
  "key37": "52RHoDb6H5WscmtvdTmbbjdhtEqVouQWvZULiBCSNhKU61aa6w197FwmvVYtoD94y9B7Lh6ZfS2htgaXB7pxs1Lo"
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
