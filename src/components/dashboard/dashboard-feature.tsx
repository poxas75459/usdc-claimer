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
    "uBZQqBJQZXJfg7PWwCfoxJyP7F1RJhG5aXuHUn4DiN8HMDQRE1ytCa8Nt9JUEPGnAU24gVAXVuzU4sEYKoXwpV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dELf7gMTkLRZBX99rVLBH54dQXZ8wMMRmvst1ULsuNdmWgtCbnpEUPSFZcnmwsEvZK43EmMv7UbGFKWTuA31ynX",
  "key1": "5suXZhqMtEFDLe6LzGDuEQG9uFxLk24cnkL8akgauSEJQ59wXNvEKfUtzQCrK8Q59Zm7gF9HaiDRNhNigCsyv1iu",
  "key2": "2Gs6ybKCt6kXZf8fV2BjH5mHPuN29y75aPdzzUn5n7agizMKChtmQa4UJMpv66ZnU4dXTfteuNaFVU7aH2iHP95d",
  "key3": "3S5c8Ctd9bSmGLvA82NRtJwRK7cewYRAtPmNUfWDriEa6h3qY1Ddbk4oNMAT9uZrfN3fL8p59uZacHcghJU2sUvh",
  "key4": "5jrRMWNj3kRE2tUVnJYo4YzTJT7xnGZJ1dT6DgGfVymRjtnUUp5wTAQm7cdRAMknPp9rxvqDuKvzC6TBCeFxBU6X",
  "key5": "52R6cnMgrPRWAnjoX2dQ1qXBJ6gRxV6AkEY5aUXshqdSGi6NYubjU27B6aQmaqNaeqAf4wtmWjFw8Tkb1Fng8XA3",
  "key6": "3quomg8JWgxZBUvjspXUo4UiLPjhLowaDPEJWB6v2XoJ6gmpJngWw7SDuBY9V5y3mntMK8oTuPvRZoi8WBgG4bE5",
  "key7": "5hYMdza74xudYCsf3Uy5TMPR9ZDUWJ73Hk842eiFfANLrGRyLRwvjWtq4eE3QYkbkuid2z26SVu8imeV6gDpfmLG",
  "key8": "2J7FoyLqVA7stwqwaV2tndpvpDZVK3dE9m3E3eAA16E3rHR7F6YvJQWdmfCMQpYMepvfniWnd8rm9RXqh751Z8gt",
  "key9": "4coPPa1AKcmMziM1Y1TF9jtwD6yg7hfmR6AWdgtVcirTsRGD8Zzpbk9tutH4Sgacc33gkNX5itQcUYqrjaxRfy15",
  "key10": "Sve4nvMyo1YwAgLtAenknmF5kLB5eFmuSHmSvPeE5VdU1Vu8fGpwDXbso3TXu7ikk63M8QVbUM2LbzKEu4rgD3R",
  "key11": "59rbjcaNvxLaFv12sYr85nGtXiVRiuH6x8RV3CawVJ6YxpZfahdCwxsp2rJSRZdTEFYsokPA2HxRDrqEK2fUfWwC",
  "key12": "5YyP7tpUY5eu8sqUNLeqLwDAFNDyWwv5XeGijzZ71PEDMx3uvCLRzykN7ghTVxD3g8m6oYpsv7TGryeNS2gJvJNC",
  "key13": "5RPWPyQrZgW2e6SfVQHLacZ5Zkxtzf789MMf54zDa4HmniingFzuw6RCRopMa3xBTAsQTWUk2LGeT17Pgie9Z5JW",
  "key14": "352fSxoXK7VSBf5g371H13Pik9jHDffFtvdesp8ksp3nYaJhQ6JFbH8qL1kpSHMEYvph9Xve4B5Fm1ZjGc4aAfRL",
  "key15": "4SSkgzvRB9E2iskD8mGB68gGZV9dQYKK2hyov27C1cpTmsYv1eUnR1ez1hkjPySfiBK4mfz6Rx2cFxn2rkUdTyq9",
  "key16": "5txGgXZHjHM2k53TjoGDKe5nFqadR4FeBw7xHu36y4EsyCPZk96rBpUCTMatZ3p9DaVbk8Vi83UrRAmW9ZgBWL6J",
  "key17": "5xjWFMsyjWbNKKfZ6Qw2ZSLvCm5JD7EcAH2Yfp958qPGBqhJLohe3V49aVKuHZY4q7XWbMMn7LJk1h75cgFWp3a4",
  "key18": "2YxCLdxhiKZdtoihxTpN3Tqf8rxAa5gszyC1dhjWkoucbRhqYpPmZAH1i5TaiFVhwJecHsezu9oVWZCcXSDUmKw4",
  "key19": "4yYCt4p8XgnsvCpfysvToyUhxMNXQgFhZknXqvR5wvcvS8rApt3RpGE4syMCPCBcwoNkgDzU7XM9UUhkh3YtYsNm",
  "key20": "3gMCfSrGE3sioXXjFMdgSihWt2FMsB5VjvxXdqYydJLyMoKZY7fWPKuYx6SL9tc5iaNfNwtkH2aewrCMpv8wsqPx",
  "key21": "5xBJTCADoPnt9k4trmz7RWwt92ox23SC9kgeDfRepidHBXDefXQSukgbB43dW88ZvPTDkTep1JcbbkMpZhRSzBQH",
  "key22": "J2H4Vgkkbqo4SgxTCKgBxZAdsKpf8CGfxmyJibRNoorpJYoHrLBzcP5ZLLYZaQLHQNMB8SKfo7yrEuUT6Qz3i6v",
  "key23": "2exYZS3finGxCGJz3EXx5PRhumqFx6YbBDN6Ww92BY6GMsYDJaGUSPbneTEvM5cJh14goTuoYqNeXZ7RniBpkA3x",
  "key24": "48Wp7JcoQoamFDApB8MdYMLgibiKAyB42wL9NnbDyzSz4dKNzT5RJVdhTxTiSPFUaJbGB4VZCa4kbC9c8EuuGYPN",
  "key25": "3FToGeTUXCdj8kubbojhHg6yqQx8P9uMV3gASvR2DBCYXt6enqCbMR82qT65bHosvHGVLYG3G6aDfywgTn4DhzyQ",
  "key26": "27NbWZuKLRzVu2Mrxm32FH6nbbd9To4yrhSfnMYa6AtC9dWquggDQ5CE6ewN4bHLq5ZGXKuiyz5ScA5qfeKcKpZV",
  "key27": "AjxZttsftJf9hEjnxwFvy5yztN1PWBAXAfC4jes7eMRycTLLZqrk2SRvYSA61zx5zvsQomiSqesVh1jefP2aWoA",
  "key28": "2KcQKfDyXYAo8RigE69GMHz1WSBUgnHQyTimV7Et4mzjazGKwKsgPNufopbQTPih4oz9cXyUFxakdY8TZKGKKKzz",
  "key29": "5NQvL696g79HmaCq2d5UGtgKnQRoaoJL1JPh76ZPVPGMNCVy3woEpeQ1RkEfrDF4JhB8JLvNWsNqkq9WBTSgZJxv",
  "key30": "pYRSBPbdcByG2FeayBgq9nDmueSKXN3GBLDCXUXNLw75fk7R5wENmMmg5K7J9uNayQGaNdaLjfAZ6bj5Kgz9WDs",
  "key31": "5YvXwQpij1hn1q4ToaLULzPqPd79Y62YykeGju6cdud9tcYiDDVEgqSURMkeEDt596CQqAu76cYXCKrQZwFRJru8",
  "key32": "mvBgomM9ynsideYUW9LotTZjvwpUDLdL5BxZ11XUBujo8FsDzw8DGx5BZopEyStQEoz47Nce8puDE9UypZwWpSD",
  "key33": "5qzA2gjKzR2Fzjb5bT6BwXJeYgUMKWgexcfgZTCeSWJQyASU8fYun1CYeeGYtJdy52LL1FBRMMxsHyWobf5GBUJ6",
  "key34": "3RxMKBfwzTM1R2451JvzuT9sfAusHdmUCuTwhxegeugNoapsM7cWyTxnsH9ceS3k3Un3iK64VLcbEHxRiVQybkkC",
  "key35": "5niAyAv1Zf1NcyvKju9xd13dLPPoUNABVVnNxqhJEMMEf7YyMHy6hNAuGE9PdzcZAq1GJGWCkKpeum6B7DsiDYC4",
  "key36": "65MMXgANpYr15k22ce3eLScFgDic9p6Gtk5Tqukd6jTZ49F415i6BVWHGDt6suy4o5jU7DfST5fUwfLYCc1M9J7K",
  "key37": "2kWEy8vKXMPfimZ2C8hdqnQzjjAXxzrABQ6AnT7FDQ7BUPitMbn6KHQrRuezY11vDuYZNjLUERtWd1orhRU4rbaT",
  "key38": "2rrFw4gkSvA9STK5G3V8hcUgbKJZdv5HrXcVoCyfCQWe78ou21DVXxZTyVSqfXyp3B5MoLVSixwbrspXxbuKST3R",
  "key39": "5y4vnNbKig9X3ANye4FdfWafCZFgq6An5LwnFty1bYAfbKEwcT99aSUZSpuKRybXaZ62D9z5pccoifPsTxz1pyUE",
  "key40": "3KSqU2ZKRSoMqH3MfXsxp7kWFwGd4YqPLUAiXwy6fqnM8HNGv27KjWxusDs59SteTjoKv7EiwhK2w6emtVKekVi5",
  "key41": "4F5gguQ3aSLcc25w9zaafQVqobgJ4QVA3bXuiotpSh5yopCEK7j1yZWWnHqSmhGYwGzwyWMfCpuqMnhu43uEP89Y",
  "key42": "3d38e7dxh7rvhK8wMNo9sJc97iQ18RYhR92yaMHmHjQW8crrf6uoYmBtsffDyTbnTwr1wbw9jLgocwzqnz6JubuX",
  "key43": "hKTMy3sEeoKHnA4PoK4bMQk26Av3s93tAH7DxQ5jjC2oYo6GzZFE2Sv9FwTF4SH71xTo3MtKsPVN6EiE1LQqfvM"
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
