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
    "Km9EQ9ugct9PxPJ28xzVjY2esuGuvebUapFUBuvjwTrf8jYRVaMpQEnPUBBMoKzHxhWygmtd7EpJgq39ouEXQcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Co8PeqE6N52Tf8qd9FsencHHCeFoqKT6og6ze91CbfQyLZ3pMq9C8YvAKm7gY2w75awouCiNDL6Vp995ieYyHvC",
  "key1": "2tjNRuQsSKv5j5u2EoeFLq23GB5TpRdxWLj3RH2JuWk8xbgmCptWttLj3TGRb24rdie8sogLGosc2PXQ3VHwyfgt",
  "key2": "34agZqJhNEMPJQQmCU5K3rkv1hgDe77jHAVWMWFQrs7ZeemG5qjDopsbYkr4RSDjK5ii9uHBWqZfzaTQDHoNThBH",
  "key3": "b5Y8KcjBMUvgojjC1TpxftXwRpsHfMgV3MacNM6vPtuher5aWyFYuF5wacEBUbKH1ZTPuHwCcukHpPGNaBW6uTR",
  "key4": "3pCUtUqD1mE2ZT53gB14797CwL9dDvxatJwaZwxXDWBy5yYbp2eXSZYdn9hZJeceHwNDtyCwJNqN6tHEDtedrz79",
  "key5": "3wtTT6vSzaneqGN2tLdZLZLyuJusqxr9gUswvRsVmEBUrUZxBbJ1rKvyFjazn4u5BBYiSqceS7phgGbtwYTWiU4s",
  "key6": "2cQhnVjL5scSW8NAtue9JVY5aqh86BMrxYtau1coTEVKLVbzF6dXnCQoZ4qro5QUzHEyAyPKYNZvz2Tcnw7wgtFd",
  "key7": "4uTyZne2q3uZnKzxk4aUJMKcfKea3GGRXa8KiRdKuUnmaecLSvJSaXxNjrVmQPbw1YUrvyTQKV9DmhumMM6YV4of",
  "key8": "5D1azUWSqTBgBtTMEaNRsQHEkZnjb8uBJaRxgu5Luciy2wzzcCxa47X5vwd6AcqeKxD8HCzsbYf1Zy4Uxm3EQiVS",
  "key9": "27yErXN2BVvqc9F7yesdCwCbdFQkTsoFC8CQSq2ibtBmFNXJyk45rQsP1HJ7yH6fMCRgS6ueDDPFS7z8hP7FEh4b",
  "key10": "46UAC18CYM1BPRbww6g8JqPFT6kHcMYXC9jtxPrjAsriFNdrUzzL1LnrLxX1fGJ9n4K8zyyGqrPKFYDV2EgB3aJ9",
  "key11": "g1zoj4BvWbHKzcMwsfMnCXnjwFJgtta54ijj44QaZ6AYX7yQSVUu6ndcd4jY4vCvAgqC7nPiAUCpo5LZXAbQ9Wd",
  "key12": "59pSR3hfacZCQQ2w4JRa83wPRcfiKYwRr7yGu9CEvvAGPiFn2XDT5NLMr2oJ2szgmNBsm9yRCeCKzJv47LoqSDfL",
  "key13": "3mPcvWLpicPcNzycgsJycU63Wk3vsskQSARCrTxanWJvHwcwcDcYCfH5KXUUfX9M784fvA9GTGBp1KQU991GMRAd",
  "key14": "2nanN3eBQGQYkgMihzQma1sKHEFEUf92Xm6jV4wKZWqve3jzJfETBe1rR6h7Y7hoPrBMziQgyfdZpb3iZyrr1C5k",
  "key15": "3aVcvAArM2fqdTZvkxXovjrNu24VNyQVLXm4rnkTiFRqs6tbcg9CzPRMkc2r2J8jYKrUky92euCBQEidMfJLamAK",
  "key16": "TWcsTW1hhv7Z3eRiaiF2d2tvHrHbWW1D8LUaB6nhdPvMX1wVycGXRJ76RNn8MdppEMJ87UD1qDUA4J7nq5UFX6F",
  "key17": "2bAuN1cLK3LL7XteyZSD6gXZrrUUwj1d8VSQG6pZmDkbZyE8fsdTRWoJPjywxGRgA1ks8zWJvNXukjd5JPm92J79",
  "key18": "4nWU14fqaPQMKW2JfC6mnPnKMgYAkTVhJoeEXdDzEnDTbwcCXJyR35mmGeTe3VXi9xK7QYbdWJML2CmDptdABCoD",
  "key19": "24uMqVCC6LrZTYajKqo3L5mRtGfbTX9a7ThRiUmWUjaFM9Qevee8d24qJNgHfzmDLQVp7dfoPjbn7nJ12jvco5Pd",
  "key20": "4DEj2NQ9ofmgU5VYgVNAwLBtsnS6B7Hh9zYC8w1QyHdAPNRLSaHehk7NGQ8itL9wDkyUKFawBSKRgJg2kkHrv5bW",
  "key21": "4bRgvMYUVRfFK5q1XRjz138qWZ55r2qtgLdwcLCzXv9ereGiBXNSjYt7tTC71gKDMTkZPauHhqA6gvmFy34gSsF6",
  "key22": "3ws1J6Tvy8zxdnvUkmd81UTCyLpYgYqXxDqizFizZpVjVqoS8B6kuCKnawdHMZ7zrvTUD6MzrHdZ1SJwYEXuhmev",
  "key23": "4tvhxM74NRr87XHtKyWcUGQ8vdDsjZmHcW9XebkfZYRfDiL9GZLqTpTNwBaBJvhciyKxBB79QG8cCqsR7GEeemv4",
  "key24": "3dC5herGJQPL1Qz1hQ1wi4aRnw5RouYyHsN4tVArsxrxSMkRbrbzUnCygrcRuMgn2k7BGMqgFE4WKuSx1e7DnGwW",
  "key25": "3dkTC2Hw2jNKJLTmJtHbndPmUfuLHZCX1n51rCdq6wcBuWBaR1FE4VdjKnS71DovsVbVxUzpu52qudwG3LpHBkMB",
  "key26": "nDZyqVCZuu33ZtPrXmAMvpDM3fVLQUJkNZWoYu5zrT6jcf5qSWJGdRJoJZt8TKKPcckz8zxCuHmypNbcobKpCmM",
  "key27": "4u4CPZidjzE3XZJgzRBtHkLJ3FC7eG1MCbyyUyeBaevyoFt5yM8TkbEb6XRGQq6bxo3rotxSKXuZ3bkpwwB9F1Yx",
  "key28": "mwbyZS27WUSc4LXkCADnjTuG471qHFu9LAabjaE8E3mbES2adaEHbeBCqCD34XzWxXkSSKSiwLYAfV9YdgRtEpw",
  "key29": "5hZgreVJz7AphqLyAUM6k5VxhaoCr1KkhBLcEkrrH73hxnKGk63eufayz7bhiyjiX6rZRcYTGMztE5xzTAuvBtjW",
  "key30": "3FpNxZb96VXyVPynizUqzaWMHmuCujE5VquDjf84mRhAQSpbgNv5JhJWdmVA5qM1hY4CtR9PjRiD21jgUsCiznSs",
  "key31": "4DvAkLfYYkiGMGggvK8qY631hskVyggkwz5R12vGcvDRVLKLsYb6nVu8Vy9p64APsPTCvCdRcDEtrWXV5CCQST5y",
  "key32": "SLLEWwCMrBN4X5V7sTbUi3nKt2T8HhqjJnPoyxDeC8jJcSVHMBG2NX4Lpfyr6psLgviCCr6yqGndpikAmJDATxR",
  "key33": "5zkYaqDbQtpXqoWZ94Vz2EhtUAWgnFofXe6LZrdMA4wxTk8eiMgR48UEE7zJEFKQcNYD93bcAnGXMvsQyXUTTUGv",
  "key34": "5unAf3XxKrMF3Rqa5CMuC4BVqvSC941gBsJk9ZDRQeuJgABQm8oiR9X2HYAnZzWDixsDxyuNUKEt4CUGReCv1i5j",
  "key35": "3fwNoKbzmpkcwExf7AZX9ZKfPDXwAhooNEMoG4Hj1Q1BKKM38xA6oBezxfwyQqqswDGYJbH3ZPacm81gurk1eM3L",
  "key36": "66BrDvFmDeHi9tvGXUxAhcPmhkDcpMyU34ryQAYUBHJCUJx1eseBYWfGwCCmxnzsTiHXHj9GyUxpD3bSjoF3MqV4",
  "key37": "4ng6GSYHGaDQgdtB6VpLc57v32DVQjRBtvsyZr7qqnSP7wvmVkx1ijeYF4RbnNettpxvpzQbSkwcHLUr58wVt2eg"
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
