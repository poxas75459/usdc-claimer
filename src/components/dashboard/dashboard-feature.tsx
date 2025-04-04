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
    "4eN8m4movPrKWL7LvAtJJfvGDMkrGRpaTemePgF7g6Z11yGBS83YfTzSqZ94WBziK3w6NGDT9xDDuGjndVYsE9P6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qAxWyQkpaQ3e7b5D7W3f1LvZEJSP53Zed39nDA9mHmu1hSkZhfhXz3SJdnFB43H8cyR7xE3AUKKEL32Jhe95he",
  "key1": "4WjB6rn86q67DbSWe3fDykUUL6RrUxHkfGguczY4D8fGkP5bW2bpERZYSpbkMMj6ejuJontRxi3DTEVp9RHbZpWA",
  "key2": "xCoUyDijxuvDswFgqVsZzgaRSfNEnUytf5q2QvYt4HCDowz9v2C7PfEHXDsFdM75YvUnDnhi6VtNw5ntxaoC42N",
  "key3": "4aciBdWUy6ZVvWL2M8PRnfiR1jS1jDYiuZup9d3RsU6HVTxDu5KJr5bi3AyZH6QU6Z5d1ZJi9eaknm9BySzGQzfx",
  "key4": "VD8hVQuPJtAVwVWcW2TYTGMnkFHD1mFEXzzAB1PCfCdsHvN2DDXyLTRek5NkjHDiMr1jrHK2Tdtkg1nEiSH1JJf",
  "key5": "4eNTpS5BQYYgQnLFNjc1CdXuo639y8sCkYdATVfABXScaJY5fbG3ndmpNDWteJBfTPrM22SRSpiSTsss7qz8x5xX",
  "key6": "59m96agGqr3wi6FW3p38WmGoaPHyZtwRGvPT5psR6AZMPtA328EtqwvrgwTyPa1oym7uTgr6icFn9JkuapWe6nk3",
  "key7": "3tsnwNnNVmWUcSWRSwtDYYk9688VYRgnEiSrWgB4Zzj1L6i7zbBPZCrS5QxAdv6VozSrUT7pTvJmpfU2Eo1LrdUW",
  "key8": "4CgyaEfbVr34mjV7QUmGLf6ne1N4N6eyWUWax5QVKBxv2xq6SCQWbFdCBDNtnWpGaKYBcG5Z7aFxsUTHWcz4qAxz",
  "key9": "3pJkRLQx1pVnGeghLsoR2AfEZLTFWteCgNK6A7KcRjjUJuKJWU935TjBNaKorjHK7hrAjRCN3ZFNKaiR9Z5ymA1h",
  "key10": "4sv1HjCstxm51vrg9D4yh3QsM1ELXuVeBR562NBn1CtbSvtq7Cswa5F46XqC6rWKBPu55xRmaHhyzgMquRudg9wQ",
  "key11": "Ym5wUcN7tgGVyFWWeMwCHVkWHAc93ou4ZjaNcNoe1RbWZkSYuhVTVmkkpQrxM7bAhuWqZ88sZy2v1Rn4WTyAXhf",
  "key12": "5MEbU3C3tBLR5c1bWdD9ZQD1SiNMcfE76Xah32UVizvjrbY2zBLFrgzBFctdwJaoGEF2nHR53XXJwJtprrAhHgB6",
  "key13": "3Y21DueBsM65yjjJKgWwtnDhB2iq1AosyaGSodeUNK2tH22db6rN2zS93Le6Pc2jRKTPm6P8fqQ2trYw8jhtqdwS",
  "key14": "2LYs1x3NdJR2LPb6GWUSdarMtxMmdPJKGJTC2Sd3YpAfuLBKYbn3MMfVR5NpkcRbkw2YxtqtnUR7L7Pxh6HMMEan",
  "key15": "qJ9q9f2vmQRm9D3vBgqMG56HKt5nha7a846wfgdEgXu4FvQtekxkQYNN2tYdmfSrzU9DxkqNdQS1R68v4u2DhBj",
  "key16": "3U2v3nGxbi5isff2HiDE7oxwjGcJt6WwLXhzZHF25cSoDheYDbb1d7uELeW89kpQPxx771hkSGRstiUpcxtwbfDc",
  "key17": "5Ynp1WHGiffxsbnRqX37nbJV8hmMQwtXbrzH9XURKKxGMyuYqWLcUE3WeXEhjibXCr95mxTte9h6yW8dc9Z5JEij",
  "key18": "gNDnLqWYY7Wmn3EfJVdm12Dwj62hpmT87fyL5bb5sDgsMC33iQmodbJqhSGXdogBineCMoUt71UBm7RnH8Gyxgk",
  "key19": "2e9StL1ccn38rLkppKvBvVDBQkQc9AJJFKfioq78g6vcqtyNry7MqQKFktiZy418phKsqjsWv4pbvrgyNRuefnF1",
  "key20": "2D2mnD6utCXiNHrnJimFEhPWZfKvBxTbytaR6cejkAqWPbA9SdvSG1ZwUpLtqAMANKtw4RLaXrkNLCgLwHFecs5B",
  "key21": "4EoaEnsdVB6pTMsrZmrqH4YxRJdHKpmPtSVnf3b7Pr4xjm2nV7g2QNKByLr15ZrxDh5LcidRFw6wcea2YoazbdVh",
  "key22": "4RtYd7Z17KGwX5wxM1BX6U4qqcvBaFekHE86uDoiXFXH7VWJ8DELke9V1ZcvkW5VrjbAvubBztTdKPwqvpy8iftD",
  "key23": "2pxf1dq1WXn7qLj6eTgbANDnTAGyLwVAY8pCMucopvDTR9BCTfvGhTWbcKv1nCSQG9ETg7Wvhf2kFcFMWrrbHHMm",
  "key24": "wtwPVejP3pjjhbqr1dMCLnAA1JjEFwgMjdvRWCgwzMr4nV1tGK4hZxVkjdKsqkZYPULaJWVVyxMNLzmUBMLNDhz",
  "key25": "4qHm9pfjXiDHu4BzRUcv6t92SRMh4UVm2Rw6Ne6JbQqfLgvCZQXNg3VKKwsWKG3SGV9SwN4qdESZyVpghwpBpjDD",
  "key26": "znZNRodfBJyPV9X56qpa8T1PRqNdwSw6uQGtfLVheK3EtThNpZeSgqMgjrid2wV3vMadXW7zyVztciBbi6vGQ7j",
  "key27": "5dP5ho5EqSE6DNMc5jQA3x6ybGtL9JNA2UuMe9YyFx8KNPhyXQuS8QjgrCkyoeFHKPzXtU8GmHkBLce17KUtMv6H",
  "key28": "2GohLiyLy2zJs5QY7fdFejQyxTpHu5WKjsswVPfrt9vyNrSsTJ6kkWpszPjiRvau2RpdQ6UkJkYGDUPuiwRgh4tr",
  "key29": "4Yj158ah41hKfZA1JQZiXQrxYJj7s9FWSezg8rPhBFwfRhM13x5TbyNAAHrfrtfxh69Cdd76XSFazRs3sRV8mv1V",
  "key30": "5qyt3axEnehv88XTfbxLYVrMbXxtpvmzestTnhxMRriYMchg2mN1Av7ajcqbQ6fp7gTbQo55ogvcxTAfGEi7wLFv",
  "key31": "5s1ZDv24B9AgJ72bdNgRnyyrUH31oJmn6m8QQJU85p65ZfcYjwGn4mymfLTK923ke6Jd8p1HH373uCm1xMiui9Uh",
  "key32": "3ZYYxZ2NMCovpzjvdduP159UKYimpgfwwGQ7RdGQeFxDZDZt2waSvqyx3HJc6woSHEfAhPtb3VduZjCtiZn6ZqX",
  "key33": "3JLxhNpisqRi5H2ikbMexWPPH1WZcAPQiDf7Zq3EWN9pLvC1ArrNTuBer7jYPoeLMtq4WCSqoaqyUc1j9AVLW1D3",
  "key34": "3ujuMUgcxmQ6YVwBeEdhiFwHYZwjs4a1xmasff5BPRG3u29brnhWe4kZtZ4WMTo32YfzxfZp6QaBpfNkqPiEDK41",
  "key35": "24wW4f5eDWemn3Fe1kQpfSgFSyVqGL3a7P9eoH9MtqU53Vgm725PV3HfBhfS2NNsCRxwPJLgre88Q5MQjSUszyE1",
  "key36": "3wrJb19oM7a2Pd3FAK1MVeGNR59TQ7qDmxindcdnkhdVP34PGCyK5kBCwcJPBU3GXUwuDsNkV8w6iMVzvJUaVZPn",
  "key37": "4GFkRUYuQXkCKUiQzxAXHDy5yiYhAvQjMnDTtivma5q8R3XKHz9nD6XU1qkU5v5uRNEYoUBtSj3Yehk1atDCEawG",
  "key38": "4BKhMGdXbp6mMbnuM9rEt5SeDaiKPtGBkPtfWwfSPfPKT7e7hwkTSMfwUbSiMRKdBUpYygsbPjvMZhmZTFRygEqP",
  "key39": "ESLLTKNhfMJBN6BtHcrdsrq6fApXH4RuqYSwShyLubaCgGeXxoDpkicba3rTNVWXSidngUVPL8k8fKbgqnB4Jat",
  "key40": "5G1XQSVRYxyQQ4ELLgYHnerF1qLCMnHzSRFubTX4QHrbZYrPx6YiEHf5MfsRojt7DGzt2DSv14UJ2KK5zGg4e5G6",
  "key41": "2ReFPa8KHtZqSpEgoSEeTUu5vuAUe3aNPrT5H6RnurQSzEir4FQSLSFGhtDuAnBGjTD7MJedbgojYqCedLyxYVwv",
  "key42": "Q4Fw9Um4Bmsjme82VyVdXzNEVQ9PMAXLgwU7B7whT7vmMWcPvSHeimhc2DKpLQvjyxvEevT2NyrcQDFKBi29utH",
  "key43": "2HmZ3dY1LiZ1Rsh59hRvLxzxcVBo3EjTrPW3TJ7gTvdiePJbggfZJddXmhr8p4mJHfPbiVKnAk5Re1JRjbinEYE1",
  "key44": "uYiefnYhT8YLJyfcaMP26SYi5dqARYFwQoXFqXMcXvokCrR8kGEMVtT45zTh7VonEcL5KhWi8vaDjDwmQHRbZsh",
  "key45": "mKMw2D8uFWkKrB45xFSQVHEPMq4CF87PCE4NddL1FKMiVvhGxQ5Uf94Xg6nonVSBHoP8iVwCNMUwSbP91z3pXac",
  "key46": "7V2HXhre9aLKCLv7K4zNhzy3nfAM9qfuGp7yqJvM58gymMVx7httu3YD8qjr98KGU2pnLTKBwDiGoW6YtQLRS51",
  "key47": "2TD6SDpanoQsaWbeQEbJAhTgHrLj4y8wvDNQjkmddBhrCZRoLd8MLxcJgnTzVPn5Tb2w2R2r4tTxcDxMuTCggi7u"
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
