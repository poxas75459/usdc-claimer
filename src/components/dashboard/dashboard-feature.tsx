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
    "2ypbAN91cmY8qjPew1YT5a9AcyUJriRr18eGztjW2pKMDsX1CycPHwhUVjHYCWhHkaVRfLDZ659wyCrJg3187gS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z2R8CDR5EGZBd3i4kvYUP9712FUoEGgvJYMgC2Z9uNWN7mo6Lr4PDT9GAMxHr1vjRexmXTTq5RocTrzhV827vQa",
  "key1": "5vcpiG5BcKfD9xnx5tuYhRECS4zkKDkdQJ1vEsa9xpPpca6STQEh8shcUmYFWTbUydBjdBcyJ9ZeRSMUkzPzhr8P",
  "key2": "2w8CudTngLrBKyLSso8HbKfBxBgknwHx1HEjZVN2kHjvHg2r3ras9WdC9kMitUBvKFApyNkK2EH325ps6KcHBbHc",
  "key3": "5k8d9whqjB52XrQYkwzf1bpVQY46nztmLZjWQKYg75U2nbAwfKxqrLBCHTr6m6T6vkmBtCxVZK7ASxfv1nEkcNbp",
  "key4": "KhTbRuDEiKJJ6w8KaZ7aAw8q5Q7fgEPMTj7Aq2Qgi7JPwYs2rU8kKWEy5huWtukSJ3EDF8YMJ1TXiKncmoPxhgA",
  "key5": "s2g7k6fRKG7m2eVgPmqAiSSFyzhjFccK1RbaoH8i857c6ygbGLv74XEHWr7M5EqBhSJbG4DVtfJhwS3MbeKoyMz",
  "key6": "Jd9NZog8ZSQX5ZXmi1NmVFm4eskfk1kaeqEVpJKVVt3fbRax1CP3BxRGkUJQdksBcwxVegmMMsFFgqWxBhRDswq",
  "key7": "2xDa68A3pJtsoiToCz8ZTZ45axb6bA3hhtcTFVAxQDyp44SL6W1M4jnwAtwyp97GZZ7mWkJukUdzgS2WVzNeAqUM",
  "key8": "2durcR2bw2Kp8KjpGm84WJKmTVi6fvP3J3crVZyH5GinCTH17Wda2td5yhe6PEckYUDXBYvde57p1o3Dk4ycRSKs",
  "key9": "2dToyE7ELyQAUWFf2bGZvYg7kwJ2itqvovouwmjHAZmuSUCUMHxewdn4ebyzNcnTgaR8SdFdUv68KwsemnLakgpE",
  "key10": "323sAHxRDPC6zexKqi9dLsUDAcbD9p2difCeLtPtVYgwzzvjf9h2s8uHG2tA8rXFDKnw1ECwgziD2o5bmVcgRSag",
  "key11": "4X4iEoW14GXQDqSrz4jHXW8U4V7cNx5f2AzzsbmpMMKaFpqo1BthzuyuNDqqG8UGNEd4TyM26uPVmcX4Ac2eiFuK",
  "key12": "52jx694RJx7Z2HRg1qAHSTtegWCmbWmaigcgTRPHKLZkPjv4h9vhhnPHHy3ctb6pMTMe262xH3GHmKZuuTgNjDp5",
  "key13": "32kVXuAmtFukYjWrFx5BaVfRw5FZg494ZYUoE4wqqNdsgAnaLSYFKMrq49gnQRmjzTaabUJzgzLUeBXLRmspdWDJ",
  "key14": "5jMwMHPeiCzmhNAaEnF95BNTR694QhLJijdiDW79T61iA5Sh32KV9bx8xenrPiTXqVxKMcKckHhEkoUfNiJ1CxvC",
  "key15": "52e6kaya7XSrMHsRgwcTkV5XMnHEecWJqbawVa3zaFg9H3eWWvJDtRsuoFYejNfMuocKj4NWBC1vgJmDzahkd6fC",
  "key16": "4JRWQUbaeXyzvsRrrDCRC5EyfkCJxvuY4YkBJF3oB7U6LRoBTKrckf7m3oKcyMvUX4Ka1UyuigWTRbtYvUf6kN9Y",
  "key17": "5yMkdtUkzy6o58pap1W3CDJUbTiM2CVQiTLbHhLfaitKQhUjiVCVBunx2uQS7reXx3gsa6Xx9RPAsiAWnWvsZ8Df",
  "key18": "5Nkq2aDCGUjTrGxYiWZ6pGZS7XTQEMUMFV7mcxHv7johxYp5ewSeHMLQcLNvUxKjmRFnUdeRbPwCkJZ8re2zL8ut",
  "key19": "51K5LaSGL9LL3zj5fTLrXyheJ16v8PnDJw6NspmFBH9KG8PAm7RyLMDvsZ3Dp9fm6QRwoTE3yEzk2H2dfNNRA2WD",
  "key20": "62BJoKnSUuLVoY5PnKA62b4Js8SZKhEQNQotNzx4xtyw3KekyCE6KEWpy498bbjmQz61yoLL6m4NfB8RKhwYvNJr",
  "key21": "4Ey7LRZNmFU3wkkLuPbumwVPbM98rcWim9uTXwdCAP9XJCPVnXMDordYgdgaHV4PFCiaPTYJbZRSyYSJ1XmD7txn",
  "key22": "4FB1SGuibY3aA6KaCruGNfCQJoXJLyz4WnGtGnKqYzFJRzqmmUVJYdLksvs1K5AdTrhD4uXJUBbrnB6AEA2W9YCt",
  "key23": "4sz7okJfsmK6EHx2BbX6aRciWhmsupV1mU8CNQscRej4g4uDS9ihEcT5FTyKJ3o5SgXRdzYkLukvtU9GuKTzorvT",
  "key24": "57fYFbreJXADrvD2xReGUDd5UKDTHTC3DDAsNyvQfexxwYunUhRCKHCCToy4h3WsauVrU6RNxCcNaUTirA9oHp6p",
  "key25": "66AcUpaY3YHLFXa2pyWG6Yjs3Zm51SGPekhmFDAdPoS62WWCS51SLBLc3v37Gyv338bbGsSo6j15AUEkhVQmdEcB",
  "key26": "52D6pYmCCkbQDeQnbP9vv1Ph9Lew1EwsN5AVySLebvMsxuHMKAT7yVjqJxTXLtN64eEcfpDB6tuY8FHmeVgcWig4",
  "key27": "2X4H5dC65Zuvv11BdPubAk9LoZVS1ndKxSXyDMc2GxroPCDKKK9xUztHHbb8piotS5f12seopKncGmb6NoezpXq5",
  "key28": "4BRYguVVJaHYaefrJpa6KRzVH2jfVQH5GmUG3fyQgf1W7K485EArKJDUJo4tRwhvcZTv9DdHd9VxA2Vkp1beMtsG",
  "key29": "2zKkXfVSxF3WNJdAUkvQAX3RXx5W88zMvyi1WXrQPKAmqMTw3C7sB5gykMi5BaH1bQ8Nz5UtgXqqqfPb2WvCsavX",
  "key30": "2v3fp6wrMgi8yUL1AK2NbeLaHthFNUDjfgEUQ9LTGzrGpeQXwd5Lf64CdjiVLaZQer9ZMUNaxXzh23oLgpsysCUP",
  "key31": "3mVRLGynr5qZMMR2riZbvRp3Q4hDxgnp2XG6fY8BZHb35ZvzJhvcQf6fEWK8LfQdsT9v5hpVvvW1hXbWgWtA9Uxw",
  "key32": "4bDXongpmHg39xFfzfi5fb2xDwB43HGoYMMuUzthJtejmTLWP9zNCntdm3nQhPs6HNKf9jVFdrySfLGMsYsyn3rR",
  "key33": "4L7kJjH7ewfWZvEtsneFUN4NVgHcQuXRPZYVxF6ZNFiHurETGrvbTx9cgRNbzzFzXmSpWTX8ewyA7Swf2WKXrV3X",
  "key34": "bkvbq6y1HK328mPvQUgkRAmLpCzvoCP2dFbtKgED72zrAqTf5CvTa2V2ZSxASTf9yhEWwDpqkSXhJWNYmcgTS5S",
  "key35": "2BJAAmycyL6pHv9VhsUEHt2HscDYNDVVXEnXTc3F7iwJPMkCvQgULso8GrpXYsCJM9CSax25xHPnfwsGp7fLHR1o",
  "key36": "2xsmbM6TvxapE4iWhndi3eNJwEHFupK19JroBJS5RerRGyXqcbLSaB6fscuwLms9nrk68mMXThzGxcFFTJttsvDF",
  "key37": "4gVASaZm12NNgQHhgJmNuV1mxp25VhJ2XBpFH5FwDoUS91h3j8mDtwQJsWGeiUrAAQytQNxsB1z8NZ4WhZ3MtRXc",
  "key38": "2qweBj3ZWr2U8LUTWPnMv9BGxwav3613W4Vp4ivkMrzU8tZmL12KNeCTbFoGSA56besuGR8qHVGrA32y2GnVo22e"
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
