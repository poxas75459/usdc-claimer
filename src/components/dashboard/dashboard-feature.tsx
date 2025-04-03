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
    "3a8NEdJp4VY98CVsa6DnxRoz3e2RpwcYBtvMvbkGJuG4yeAyWzdNhsKo92cXw1aAvFvARts4V32er8suseE3ZmqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eE2AzCkscRr6jeNpNbt3gXULCzDJsPRpZ59kF938eQxRqWk7RGwsUvPxyiDHD6hxGqS5qiUMzGxhX5SoN4PugVG",
  "key1": "2WUhCbJ8HaLr6Ao5CmhCif72kQV8ujhFXzQUgC3gYUDgNrGAfz98BzF5vzzN8DBVoW3iE6tsXxFHp4mGNpUYAA9m",
  "key2": "52ygGRpF2VuRTGkywu91VQv6JVt63DbMVuvdLxcSjNuqdy2Y6U9HgQJWiqhFyGH2HJTrXg3c57X3oT9Y7TvPjkD1",
  "key3": "4pHiNcBCBzRGttznLyRPBn6msjUbbZhiLTmAtKotkk4qRSd9JUuUSqcbehrrJRsAM8bimzPhqhZ44PokX7UaYjMp",
  "key4": "3NcAyGzynSoiwp81GZPWPi25X8cY2oBvuurKwwzPacgWdimCzWRsC19iUFjHG8opQa6cskNs7TC3CMfDyizSpBcn",
  "key5": "3vDDTCeL6HhZVtFEv654fiqrTCKRHmFR9hmAUJz6t29aVxRRNc5QANkJ4aimcskPjVgUNvvWiMiSaFF9ojemdbSD",
  "key6": "5JJ92hQoxVrfzFUfBhCN9AUJG6ghGjSpbhD1bhrrcqc4NG2jwbyvUEsU1vDboqrs6fF2TrUPXF4bSTxB7yDFvTHs",
  "key7": "3qBjo7LR35Yn8MVnsYBdr5zPmUD9PRuTSnWDZxDm7oLuZUyjJSgWDWokSwdhqXTKZon7wxvHMB3yAgreX8Yt3g2k",
  "key8": "2dxaJsojRu3ThbBzNunmTH6Cw4AXWXetBWNjHDhjpw82KkjdWLGYQF8mhievhhvGasuiGMP2eFtRyfDpsf42k954",
  "key9": "2kqfXmqDPJXHadHD56Cws9VTs84KpzqSwKMyUT5h5mMmMeuw7CFMCxydzfMDT5wUfgcvZocyi8EDVW2PVzjQtGjx",
  "key10": "5PrvfymhG2WeLnUbVP4mQ5hBGkwdcXyuCkxTHHtikBa89eBaG86B72GhcKZTENep1LrVVkR4xTFLPHnWJWrqCJXG",
  "key11": "DdcBkDT6tqPHmb8kfX1WcShfuRXh5XEmQKbNroBBW27xbC1rJ7dxQiSTY9NACu1h4e4F3KxQPDkzDJ9FtRo6xbp",
  "key12": "RyLAmdMmJ7mbwcTnKkNistj62yaBmmBMH6dnF2ywvUYbSxCGDAMcNLJRhZF7ma8C3jLzK9gTFjR9cbR5RCcFcWq",
  "key13": "3nsgoCfCnVbz1dw9rryqZF45Ge2wzNN7T7fz6udsL797dAGRMeiUUQhbDPBbHVUa89NTQCKg6mmo3yDDUKvwRLbK",
  "key14": "58CZxrkTFD3cdaAHbMVTduF2Hj5ma2nuiQR2mCwHjrGRLSod1Y5oRuQWqdEWHsAbaBcJLDe6EbtPUtdeiU7Dm9kH",
  "key15": "4k5Cme6oA6ynFgkZ4uBP87g1yz554dMkSH5mFyBLAdUpzCJsR5wdm2gTNi8zy6EpJP7GdQ86uKuz7WUCiK1Hs6S4",
  "key16": "4tYa635H4JXVpwmrTDzPQDW9vGaaSBx2XG7CHyB7xnERwnz1H8V2qXKMDo76TmejiXYc7DmQKiPyhYoVimUmjzR1",
  "key17": "63G2BjNLCptwvxRQSNcyJapnDRLFhzZcPhb36N4WffQ3PG7ewewznTFmoR8VM2GSfrb2CTFqCcjiWCSYUPjWnXvW",
  "key18": "LXdWBuQG3epL3y1MdT7kpytYmbK6fBc8dd4WTsiFrmwnh95p4cqFTHEZpLm9HqBnuNjHey9anQbxpQzeoTYCcmX",
  "key19": "4DuSKGUZPPksEPrZytf5sH1p5yp1QJzUvNwiniETqYCYZmGAtmkF3K1QkMhivDq3PsfvReTmMTZ1S4i9Ma2wzCkc",
  "key20": "3dDnuH8iUxe1Do4BWFfy3VopNRPAQzjJt2ZtxkWQqDSrq3HqPirbdJMEYksCTBkxub697RyFZxQjbkHW9kaQwHY2",
  "key21": "n77CfnpeS4a4dBfQYfz9MUAFEnTf5YQkyiRfBdwAkC1dBhyYz9E1ofxs3ZCkKVDMb2xpux3aLkNX2PxwfWCywKB",
  "key22": "gseizbBr4n7r15QfjF6i6h3ABP7Ec7GsThiPKdmQUnA7hu5dLJGU18HYhZNm7yXt48Px1kZ1RPRAyyyufvwPZwd",
  "key23": "4UKa5Wn8b6F8Jv5vzVfg5KgS3xUi1nGjtm3b3bmTU4QeFoHJL3H7uqAbYmady4BEqB2RNXcYr2B78g9sK5W29Zg8",
  "key24": "64EiV3S935oWZLqVxn3mwvGF5AkGyYHhrXmJEHdkYNuPpTy9E1gXAQq8dxGwixgZbtzZHQ7t2zmhJpSpBVeBMtmk",
  "key25": "25EWFfy8qcs1jYBbVTPpAgNiPfTYB9ENqBauLTDAvDenPBrEeUoXku2UuzE1WgEXUwKvYjPQZLEudRGY76JjSYhb",
  "key26": "5A9vTXwfJyrRXFf5mqPMUZTYpc2CZyPUh11F23BUfZvNhyMYyiioR3YzAxZJWHSVn64jvdepTWeAWsqHuuuUsWxG",
  "key27": "3WkN8r3NKrojZJuDHdJt4uGqG4Xzni84maRgYZhZX9ossnjUfTcZoYekgDUDRZQqenNRco7s87p3ouztXV16yTMG",
  "key28": "h6S5uwirMiHZWiJLGhasFPLouDbgKNB9FMSBzxiBvvVKzKyEdaTVZfPiSXd6Httuu3xepXYdJRXHMx6wDXv7NTx",
  "key29": "d7gPMDKUtbEnfsbPMemXE58erTXWg9MHRtKdmfPXDdih1SXNnrSogDQ1kD9PUKreg8u5ven98nbvznHyhmm5bjv",
  "key30": "326bGuSbFg7JJRvJ6yuXg5bCR85jzsz4wYNsYnepLkjKmY5TJ8J6vTiUCZSvDYTkfQPpuUAZthnCMciDExBGCyiA",
  "key31": "2LTayeApdjhPgQsz3j8HhnGcs1PZKd2KC3XGfaXesBowoB56f1NRdzZzgpq6kSnwQ2RMebDzpUwf5M9nDFshdu1e",
  "key32": "44AdzL7dohq684QseRtDFn4n76a3AMfGXD5WRPigaXLkgnnyZBJAeTwWy1tMAECG1pWnJS5Dt3aeUFyCCKf8mMsP",
  "key33": "23bfRnTKJrmvLsPcPrCMPkNqtSGhsu2Rzo5nM6QdcdMGTZCgMj7Zunk1ErtRMuTe8S81CE8aXbrtd5vmYascXhSm",
  "key34": "5f5rUi2oTAEWZb3nqEsqqJ7mBhGCnHDrTTbo2zB556NexiAiwoEycg3dyKYwmBLDW5jBgFRGYxZQUs4TusjssP23",
  "key35": "3dT1WgKMrWgPrc2GENtJ7U6dqBsNyxqSCDgmkpVCuvdo7YM76KgJZSiMKEZ5ru6vDNmwGpnRf3JGXuXwEaDVLNWy",
  "key36": "462EpkA4FufoJwU3CVaMfm6ya2v2xgprtBj2jcFQrU5yvbYYENEDaJXP1DmEjcRF978fD8Hh4LJiW6EemtLsuMKF",
  "key37": "5tSEp3ZDvQ4su3xrdLtkwJmNCmkzSmXDpnNuSo7Z3Nfii1QUaPm2pQTp8myBNmHeyoi5wfuHtufpGVpXsWADK9Kc",
  "key38": "4ARedCkysLnQrE8MABTy5wsssHDKiPnRoN1iJaqa78y7GYksiHiNfCsY4oLEYybrRQSCp4rNnh2kV841qrcxrK3T",
  "key39": "3NJBSivqkCXSo9xKVpXBzySWF26eAXtEdymZmCj4BPujBrpWeSsFED7jx87ynbuY5pxC1TqRQqxqr9oneEGZZp47"
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
