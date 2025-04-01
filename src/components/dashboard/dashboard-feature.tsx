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
    "5Y6zxp9gcMpL3guA7F7M1XVo5yW7dwUD1s1aNttebAKrHR76jdYqNftkciXrRninqrBHQhE1ZJXGBD3GxHBFVMDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5b2xY7mBfvUB11gMqaDXS48VMPoZGMVGtrJiBLkkyMsQWAkgDUXyur6MRQqdi4dDeU6fnEpUTNdieKQ3KQWLCw",
  "key1": "Np8FXZFDYFKmAbiAeN74whtXQUy6FLHmRweBbmxZsGFawFSyYKvYWkir5Ln4htK5CfwLnKTy8KM2o4UzmzWW5uc",
  "key2": "34MszMY7qZU3hedSYYa5dU6xMvoqwshKdebiCdh4mLCgrCbK9gGJf2idkPqAZ9ZYXGHdKzFApWcjBSRw2vb7qCEb",
  "key3": "3WL5fymDbFSJwDAmX6z6ZEjrkiYocVYd2q8vH8j3J1KWuuWCF3nnQWDJWTi7G8yULpykScY1QJ1NZ4e9FFRg5hTZ",
  "key4": "46LwV1hrZsxed8QLfQpPbUgS5ttF43bPVGiixLijTmjUeUUjZxXyjdE2uFQp3fjF6kwVYsFvXLE1v8BSUYbtuVWn",
  "key5": "2MLXPgoomBruoVJiMJ7xWr3HQPvpF7Pgffdo4oehAmEXEk3PwCBmF8R8JqysoZfW9xXy3phiDNDJaMR7K12CtTG",
  "key6": "mv41e6KSVVaxtd48d5i3nG7B2mBh4Pwr7E6a2qWhp4vUCH5Lxy92RYjQ62JWJ2nEPecFhbZeBP1nomBX1xmnrqu",
  "key7": "CW9j1RA7MuXw7YCsPAU1ijqyo1Z37DkyE8acAmC4Q4GbWyhVrjfARaVk7JKiNYc3389FNUpbWMCjHEnhNwagczY",
  "key8": "f2eB6Yj1YvGtUsWgqrtS5srY4JmAWpW7sPpLGbaibeiAtbwkm1iDpCHsRSUek4S11zfEymh5H9yB9zjzhcHAfem",
  "key9": "5EAyYtHhvQy1BudpnduygqMqsFc3Rek2dS4gdm5Y4nhfa2u9SjeoiRkmB13qbjbKzLkXD533mEdbW8qTU7ts1sWw",
  "key10": "4iQBH6oWUiXeox4QRsGaMdNXWaEBEaABW5kHUa4DzkdtoEf7g5fvQXvJ3EWCuyh9ww2GHEVHmuUAcNDh6dy2eHdq",
  "key11": "KjyMpTN5RUDs9DSu5TehAddoAvfXrHjaz1oGbubFUu2SSD3xiNYhAyJ6oHwzwuhRg4MwU8S13HGV6C6XiunYETf",
  "key12": "HLk4PpEyB39ud2sMMi7ymiCeuqF6qZyRwsFb3zvcAkEtE99tSNyHrRN3hsuNmiCiHkyMTCiimtPupeQVkbut2Rm",
  "key13": "4ZPqz6BdrbCmVxgHszL4N6JCX9bEfgyYRSNzsdyoERxq5W828mgCBwzJBqT4Up6wPseHZH83mCykyrVLfwSUvfSN",
  "key14": "3hDGK9u94EoZU5GAvsemPn8sQq9ekMGpWRwSgQyPFFaeSAeuywNucK1vNktbdpxsWW1yAd5sCGEW1qFiFWCpPeeE",
  "key15": "2VebbfFd759wr2SaRLBeDfP1K7BwSqKgHg4BmvTM5MzxQir3MozTn2drn6QTpdYmXLUEa9Z6aJJSPeAw6Dd1xQsp",
  "key16": "4HMeC3vRMiHCkNyR47TxJoJWacSR9RkBWJimvj8BL7KjRNkMEyfycRxWGT97vqmuUfJXkfutVB9dsRe2CyUf1W29",
  "key17": "4mCWfzmA3utLRg8vSEh4KtaoAbT5gXHUQnybhXTQGGAEusQD3SrDQAkzbrp927J9gQ5Xms72FYbPCzQWXJSXL8YG",
  "key18": "52ZAmUNEYWU9t5aBGcH2xYhAKFPbhVUciD36XEPQaxNCUeLGFx2jsYhcqm73C7whp6A6YWUmh3uAoqUr5sbBHSGu",
  "key19": "4idjL7CR2yrGttaj5Ff8V8cpwp7G4m3bjtYHzhUUVZz4Aksqbdjw7d4HhQSjftfjyavmfEqeP3TjXs9h4UdQSxBC",
  "key20": "2LkDim5piH2cfmaBxR67UF28rGkZ48ykW1A6pK9GGEa24Gi92qtM36QyjyKqeASNSfoiTjjj3hsXRD7xJu8gg16K",
  "key21": "5WV16oDH2fpxDKXLJcahumqfLG1c8FnT35ML6NfPmF7uVN8ng8ZsaMHSGBwQQbEaEaRX6cM7ajjXDePBd3VQPbZU",
  "key22": "1Mw6rEyU7k7rQBLQfJVMvYAiphqkFZh5WePJeSzFAVL1J4de3T9s6Fjgn69AVZuAxraT62eiHDuCNjitqqefhmU",
  "key23": "2qb3cEfgSEGSgEu2Uu4wgEnivCpvGkXQjpfP338Hzmeji9NBy4M4oz2F73u62LTNSMXvNKr1doXAM7CAD8MPtR4H",
  "key24": "3QNXr4MJypsjKUfE5JShJzJ7mhMeiLvC7Am3gnEBJJz7xpkH3MTsJsVD8tWTxxiDHDvHHPDHgUCVhpw4Y21RRQjq",
  "key25": "65rYSgEbNKzeWRf2V7e9LmKWL2MP3a8APnm9HJxCWcfsQKFzMj4biLV87wLmRi1fZcnH5z8wnro8U8MYHDLoNzPj",
  "key26": "3hHjAShTjjzZLni2rZq4fDyPsyEGKpcXwHD97WNK5KjYFFkGaD8qmkuNdZH12FNqjuPqmGS685Ag3mTYjNJsoLmc",
  "key27": "2gCs2Gm8GvtsfafpmroH4UyQJ1RioXxTmJT2adZfF92T3Gfrjto7DnL1owX9gMYWQLBuzgcZqDbEtht3Z1H5EofL",
  "key28": "2EWU438YK5ZB7zV3XFgwk8uZoDqaaSxmQLbiTxA5hmiwcnSvCJLYiuhjAz53R2QJYMjhx7zkmwMNuS4fm6zTjYQr",
  "key29": "5HKhXsfwePuk9zJQaGDzSvNvNoCVmciEdJEv5wrBMHn3EAWb96hiYomanSbPDDZZ46aT3Wco7B3PoUHzVKgeBt6V",
  "key30": "oJwbo1dSrYVCHahNbXiQFEZhfvHhvB8XHFLUnpX4Si7dY2rQZALdmVsGcbXzVENQvK5A7tb92X4ZrTfdD79YFCn",
  "key31": "3L1E6gBrRriv6z9qSnX8dHgMZ63MeB5rRwkU6MFX93TSzqUY7cFUtabv5E7mNBgTddrtjWuGj28Qt7U6zr68mptX",
  "key32": "2fiCvQdXK3ienvH4qvpz8BfUZXdSE52nXv5dF9nLYbVzbBMiFkHDSje8Jixh5zmtnt7UUV84ZjLPiFmBAnsUfzC9",
  "key33": "5nkpjCWpvSGru5jE4Xsu4vtyJh8XH4qRuufxBcBN2yW8hcBTFXmBuGXzavWnRU6NsKWpBernirHEz21WJZfa91ka",
  "key34": "3pE811BJwEAUDVwsMY89vsj1mEWKUjMc4VoZbk5pgBoGF3nwCj2sz3hNrrYzBiqP31X6eBFpureKQ2PQsTjiaHpz",
  "key35": "4H7HrGAzseyT6MWwscsdgmtYAHsxtgHxW9K78Fd1zkPAwa2SktLo9Ds1QkU5DQMvEXX4WxYywdq8Z24QkUGYuWXq",
  "key36": "3hdy1v7UAC9rxsZo3oWRiPMeR1Cpc7gHmiN5QHMEa5MP5wMeC63x4ce656Cx4Rfdg3MzFQcuZbAna3yvQoYwU6MY",
  "key37": "43ir7EMPTeYn9ANSFJ33JLzWUYZh68Y3A5jdTGENhTbrzp6dZ3UxZmcAyMuUqHWVhgVB1U9TGD5Rb9n9vPutmHBS",
  "key38": "3BJHX8rs6ss6FFKdG72BBaa1LHWrBsndpDAvNDAmybcCgs3q5M37pctQMj3b5CHvc4T6uL9WzTQND4FM1KNXfpzY",
  "key39": "2PkBXVvDNfFNpdJZpFceia2qV745YCUK3RTfNHvUfHoXRBXVbMLPHXFH7fN8MHCru74nas2DwREw8fhoUgwhvgHD",
  "key40": "3mTokGbPDG8wX2euatCsUVcMdHSn1gCCi8F9eFGbwCcJNN7PhtLApjcRsScheVeBN6JqfxmoD5Bvx1uEwjTVrUiS",
  "key41": "3BuvKL27ydScuLimHpspyCeopPdcCAc62yFgbY5LECXjKU1SMVp2YUsqdzAyaTD6gFH1f68Vf6ZhiYwXGLv8ibCB",
  "key42": "3Q1D8U4LhiYuJKQK4B3cJXGx4bYUzz7XVHzhP35HyenSrWeoE5Em4qQdByyc7hSH9osrzUcCLgutGMYTorhLJM7S",
  "key43": "4HJv41BhkVH2ddfQCo3GfpAt27PTTrdNA9VZg8dw3Bs9Jir8hKvFcsszcfa5WnrYSh4QrFejVcaapDXkvnsP6zuL",
  "key44": "4sVnNrvt2D8CaVZMHowdeqd9ZvW3kaky4c2tvkQUYacENV6GbdfKFPQX5ijEDsMpRsEv9TA5wGDgSwqvKdwcPS8r",
  "key45": "5SPqt1B3CTFYrfZLQMkxyUv5NoS6Z7AUhjCFsnfnfNgbW99N6GX4YsfzsWH3eAvoe2ckUjwW2am8SF4WPZ33bDCr",
  "key46": "5p6G2FvTQZsSqhYCgAGFWmF1suRb8ojWRvnZ7sTR6GDZpbBjF8sHCH6gUSkDaV4TmbYo8AjAs8CtfQdExBBEJJek",
  "key47": "2CVyNnpjvU5413SJmYRgo7fN9WoSw11nh1QPHYjNsvDwNkpMiP4im92gG4iKMXDN6BejUK4Kh4yweHxHCMvbaN1n"
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
