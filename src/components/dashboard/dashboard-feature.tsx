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
    "2V6nuzqQXTbtQNwhfF1MSoFKXv1yfVVWQB4JpcnZFrco6K5iqDcKP694DMpYBGUxzzqyACvEVzWxKjJje3uCkQJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297w3UHjAucgSUq2gD8s7NjJZjCKgsZDgFb9SqyfKQ3KP5o4YQc7xkMFXowWM7cak6uUVZtJS9TWmrkgw3nejKYZ",
  "key1": "2n6nAd7LVfhpEunxgo9VXXXMqprNLF5rq1wteFUSbd6MfUJaniNBgBAiZv1bh77taCzrxhziQMrhicaq3j8pow5Z",
  "key2": "cjqpELmX8KJQVmnbBtWzvcsLrQ6Cfez3uNFYKWjX7zvJKuzcBrH3UusLFAWMv4JmCDKdB4f1G2zDSC2pKNnf9nQ",
  "key3": "4jGdSgC7fMwxihq86K2TSVWmRjGuomZX2egHoFRWQHzh3RuPZyHEz6QmDzDvCkYRKyrbDKqjR2CdFArb8BL9t5G9",
  "key4": "5RTc2nV6KkeqoSGdnbbEnGpw478Ybiki4dZoZoBUCrp1JgNWFjXFjwzPEfv7oLzMrLKujTyHNYsDq1Qo7NXfBPe2",
  "key5": "4Re23NcXCkRyQLPnJp92aqYKidjzWMh4Vhg33XL4HMTRSCdPACgcd3nmNo3ZjgDm6CCyLkdJ7i4onaWZ3WDf6E6p",
  "key6": "2LvtVXZN1etFn9kRfAA7B9B8TvosYqNtGejArjSoAQvHqTQpsgMoewZ2EB1KZKAjr2APJmrFuurH7e48Sozha9Ug",
  "key7": "5htAFvPX1fMN5FXWJWqTtvyHcz32XjcW1ojgJzX3wtL3sBCSdi9bsm7C7PgiirLJwXehAhVGZfdbW4ef4KHbv3MY",
  "key8": "ZQhuJZRjYgB51G3QxyBHys6frNYkTBi8JtKpfkU7qyutnLGETzhmdoajnwz8dL6EhbJWqVKy3pnQf7rb6k9om88",
  "key9": "7hajKTSvGdhWByKRg82ULVpXWjueEGFmNEZ3vheuYZ2ruQz5UT9KFow7M5MdpxVy5x3mLCmD1a6oN77d1VqGoJ4",
  "key10": "5WWY7LPHNexkXoXdUrP22kqG3K2dPjX5PiY3jENgj6PP2NuTJYPRfBoZQ7n46jv7rT71uFBKAWDNFFM4gJTTj6bB",
  "key11": "3fXLACh8F6Eqn3FcxmfiZnRoSZRYZA4WY241WtRfTiqPRSG5s3sPzi8Br3T1S5mVJ9Wpysr3sCFrNk1kKtNew3J3",
  "key12": "9Des3rmfQtXx9VNk2bEjFBNoERRWx7FWbnc1gTTtxF6CdB1CV3tGL3Knghjj5BUFecZsZhXhidpz6fCpBCb9QGQ",
  "key13": "2PpyE3gZpUGK5MyRHLgFTtg37htPkadN3KWBq3mVuLKovSUZ6b6cm1SwHHGpKACcNm4PLqTRuC1PvEX1BJ5CaVYD",
  "key14": "3Gq6WXnmforRdiLk5g5BHgccXYoTQPLi4PY8VEDxJhczhgJ6HeAmudfqJHUAaK3GDyMHXuRwG9EDaHEB944Brtp",
  "key15": "3u8ugp81oq5ZuvRFsbHF3xjPdgnBfRTf6djqVfpxB3mTyJLL2LQkPNtr3DvCjyy5n1oVXGtVJFbh8G9oGXGdcEwk",
  "key16": "FZv38mKpyKJbHr9V4PZF28MNXm2LKwZUNg8S4SUtto8dfLidqbqZwJdXfRhgU3Cx4snF58v79qbxdJfBjaj6EFa",
  "key17": "5hfsSAnmaEyTHc5SAjjBSje1odx6tPyYXYoCgXedGVSwYc62d9kiNUWbr1Ms2FfEGpuS3zagRCyKUdG22MK4V64g",
  "key18": "43cDvspcSBokn3jPwxHq5SjrVPJoXjC4SXcGbHUbyNHdmy8K4bCZZiXY21H6JER6WnnpeTXMAUnZZkJJGu8XVmVB",
  "key19": "4UM7qy3ep7SWQEL4uCNDHhGzwHbZ8apzzhdZGdEVsVa7K4CqbraM36KxB3pXNXXHuJsrErtvWjZDkGeW2kWDvvCA",
  "key20": "3vXZv47hzYdYU9By6TssqHfjXb8jjJLZvya7UCwDX1AgyP6T77RTVWpgczY8tvZMhKQDfRiMGYQJLpiXd61yKDp1",
  "key21": "2ao4AbymNromH5c2MoQaJKQ7EgfwTFQYh1m5vaCh47Pu97xyg1sa6hfPoLoditRXBXDo71kZy2TygHuHZMNVBw6L",
  "key22": "3qFwZDD7Y8dC1GD9WY4asbkZWS1K2UcXac7NM1TBqYAnopExkz9QrwVbxTSDx1dG5am512V71yatadwZDWnvYQ4C",
  "key23": "65pxGMK3sGuTUpRnBNA29RxEYBMKbrUU9yZMZ1vHAEN7jFDCC2LEqSJNQN8HLEMiTtxiPb7kvdcmLfZkdmFdWDXL",
  "key24": "2UhhPa5cFqMygNxWi8Xe4KsTnJL73o1Y1mfUAx8aPsCvTk6j81NDcPDidK76p1yYXpyRTN8jry6afuv3uB9xRvdE",
  "key25": "25UrgwczrQWnd12SiEVx1u1t85PoRAKwUGMYanjvUQyHE7g8GQ54vBpxh5tC1E7tyPT2ZY9gUJw39AjVscXyeLyQ",
  "key26": "5funksEP3wWYCh4Fcz5J6WjRahgF6a5HYizwd548d5yqQsbQvTVAYJKmwUv7dUwyEYwUAe8cCZtvKicryfx6ehFe",
  "key27": "q9qTmn7NAaD5gEv3nfmx2eRV7ktiMcN2WsNNXFvGaG8moCZpS2r76QAtbk3cXzJ7mJUTiynqRoXPAPbPdj4ffpT",
  "key28": "582CncHfRJxvKEwveLTQnyaPYYNzQT1ArdZa3n4H4pT8NbAHQvs72H42eFco1VTPzgrFmreJUgLD44dZDqQFHAWC",
  "key29": "4BBJ9Kr3QZ7LB5cz427RXBguGD2KaQm4VssGhfNiqg4js6XmvCguRysZw4P21Rcdmk7eVd4ZTXv1SEmVi8xZhArr",
  "key30": "32Cf82gXe8uPeBqpN2BYPxTxzV9PPHLTKfwGA1M3zYzWy4T3F757aRVAaFcgRFqo5kAC2ExnQimJN6yJkaBbR76J",
  "key31": "2YG5YH2dZBpGHwf6LtQeyF3pN8fVgU5Cxv7EByP43NEAE44XC6uN9fRBnXKzc15GDvaWk4gXhx7wqqBr6nqXT24u",
  "key32": "2ZxvEEeCxvhobxqopbXTTVND5ZoyrCTdgWc6W96ynZ98A4bpsHPW6SzjDSpK9mZCRFGA8p99ASJ2pcC2Z6uV7hpH",
  "key33": "bSRDUe5MKXakJCTHiK9cJePomJV8HPxPXDvJjZG9KfSLVGCddh9HQCGUphWbcuc1Lw1CkeqnY52WUnYaujuwmxd",
  "key34": "24d743j3RXxrEQHhL3nsjp8dJdGbCWwfLYDdHSa3fUr6J6SRQvbDMxAdcrUf1xaSd2HxLPFuRyVBAUfotdhMCnog",
  "key35": "3BgoM7b34DRYpK3pptdNhpmiQWJawSYQaU6GawBr3QCuVBDHeNCFEPuZnzsuuwPeNsrHSnS3UREyuBiT4msRte2X",
  "key36": "CpdxLYeXTPHuSd1UGcTKunTccnrxiu7vV5tyPXNFGPseqNqSMntLdYVF3FksPzB4mJfKG3UwK7DG9UHgvHCBXuJ",
  "key37": "32eNzKWtwjH3ZePvnWKsrLmSwQK3WC7Y4tM7hcRNXhU7GnVsP5DdUr2F42rSNgfpqXdpoeb6TSPTuJp4gbHS1y1a",
  "key38": "5vzmHdpV3fzJ9BkYs9QLV7t5hVun8Qkd9crWBnQusdZBGVNbAhCYnBuucTWq8s7zsj2qbcrCK7YSstTnx35b99pP",
  "key39": "nKnZFTiGzoZ24MDgzJeo51Tbo2bk8wynLMnajrnzuSgawy57v1hrzucdTegxFjHn2QKoBUw9Np6KdficzzPXjtN",
  "key40": "atqrYiBUhYTSLck9cmj84yGoUtdpyr8mDSadoGxTqg7DiPqfr1UGFUutt72s7DyCRj7m7g2ZvpjWcLoVRHxo4md",
  "key41": "4UHT39ADgLeiKAfWNaUDdpuZg5NPAxemfq3s6gJzvR9VoHvx6WVkG1L49CsMh9YkPeQgU9ru8nVp2HPsLMDQcRRs",
  "key42": "4it7KTssRRgSzgyJBiRBEqa3bHX3ueDEC1FyqVicYFhtUQGZUKmXZbbtNYguEbwopUKeqUXCVhQYkCGTf2ZBcbEU",
  "key43": "5BSrd1hSNaGAoTyuquNwShjxbBbcxStvJzBz1x4wv3niBTpm7BRZ2GDhttfyAYYQtffykoJLpAvsQBqAYjM28bgn"
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
