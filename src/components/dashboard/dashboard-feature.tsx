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
    "aZE1H1NJSXLTH7mKHiBRALFKJ7yubdPRmdrDC9rniy8S4yP8WFLDvjTjcG1U3BFyeUZrgUWKC7rrLyqHo2CsPDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Du1RrHiupsXgEqquDPm3YsJ7RCu2Jgc41m18k47ZEwNfn7Z4Y83fNt4kmjx3hq89KgGyBK2TKRTFz2TgXyaCb8W",
  "key1": "3TS2Xsx5BzEa7uJtwPYq3urkjmHC2bLctFoVZk7SG51aJTXJr1GybZmEs6fHpYPcYbP2RX8RJ2pHSLgVKnxAEBZU",
  "key2": "3sCTXQJkteWY425EbyHbmJ5UVKUcrNrUgCrEWXGRDRc3SaGg6rXNquFdggw1JGFearVJLpww7i2ERFRxM4tpa2D7",
  "key3": "3ZhAbiAKXWQozBkEDq88V2s3oTKFGwUprHhF7kws2LB3DMWW92c5JdWDjyApsE9t4YQdLnnzJ48gKLgsmt8RSyRd",
  "key4": "3Jy7BB8LzwhSrK5zn5d3P9E9QmX7Jk8bMaH1LtELbTebDe3MXmb4bmHawvrHwh9su3dwV9K5PwVvVpkXFLabFYW2",
  "key5": "PKWe45LJiuCiJRqk3fPvVCxikxSdbDJTn8Y34oEsZgu7VYmCFroG66oXZQpr7ZWTRM9B8kQNt2E7iVX4YNC1fXM",
  "key6": "kTBnkJjCHzwNYgzWrKaufJkZweEhaNN7LLcBQRcfNKvhjzM3CFBQP6VTxPneQo2Nt7wyDNRdpyV4cALdfVJbLBz",
  "key7": "2M2zyrEyAjaEgULVVejqSFG8dbGNLsKNDFWjrEvUTNucHh4d9RpMYB9VvK8j6bQ2qsmZPEtbEohZamNqx55fdY79",
  "key8": "5QN2KEe545fYDFnSAPQRALHnPCfYf6bSoBcJ5n6q9bYhE8Hn6xFonSBP8GvwSAJAeD8DQTZffKE3sCNyvuR5imYm",
  "key9": "2K8umhBBWBCen7HSwbicgWuvNKrqKGK3yZQMt9JcMEXUGSctA3QMrkw623K1q8FPsMw5yeJZJg9rhtmW72PjkKFR",
  "key10": "2RVb7F1XT1n9KTRezGMo7cmskJfhf7QccQhbjCp2HW4y98vM3tD4srQPTmSZZRfkhJuvVFexzcsh7qGrxAaPGHZ9",
  "key11": "En54Zq7P6WjeX42zWHRd4UbaWv1vQRcF911qabEcpxR6BsNBikdFCjgeMRqZ14gjJxNCiNoEnCqfr1xCKukqYnK",
  "key12": "2D61EPNb7Tq9gHytEu6uG8BN5xpVHhw7DWu5Tofvv35W6Hz51kYUxvy876qGZtg6VBtpTipmfsySNg2FWsekzxGW",
  "key13": "2dUBr3pmdwvwuZfnrdy9if4u6mwEA4iBEWiR6igqhBPz2DwZFrjDBanPYrNwaKVxqTGxSetp6tw6hJXKsYfmVNRA",
  "key14": "2JLBnoTvYjT7zfMNga2SKMufQ2uWRrHP3tcBBbHHLykeWpnKujkeR6zH4P6Fc5Sbv1yijRGBmYuYDtskNDK92gS5",
  "key15": "5uGX3a38hUXZkSLmgi9XLnpCm5xeuPfZZBrqPx3JZUd2ZER8ND28VC8cGEysmThgNerConzQzvzMGXrW3BuDxoGV",
  "key16": "4RL96CqXymwgCLjpWYC9cQNrcAkr3FzS6bf9visjaCxbcws29ZqrMu6P73p7spFDDWpYHoG96k1xp3gAS9qGW84",
  "key17": "1yPKkvZn2x8xZrPrp1pHFYngQDY31xM15ieyx5nnKNEAJqkF8N9mQ4NQ7vjyuR9NDaQY66psSKH1eW2Exr58Yot",
  "key18": "53nfAPKGpPpXFy9ur4WSXmBft9E8ftbKbmXm7KQCnjjW1iKPK7qM1iSEmADKZx2mt1ZLDkW3S9gLk17D15Yzrd1x",
  "key19": "WHruyPpqbC7Q5sLuJLNC3smYowa75vAZLwjHDUA9DPVBt7uUz9yLrb654LGFpKvU9fQb74Gsy8TnBLcWALRxoTr",
  "key20": "5ancACUFNJWLFQN43rrVtCGiVU3ipK2SxbPhWvD7ARhAJQYay8mDxjjc7f2o7iuHBdEoZ2SvhSsY6napCdYxSwU4",
  "key21": "43HpHqZPrBmxdmQofBqHkENDfx8aZt2ySPppBgVngZkchuuMRMQY8kpS4DVZb6fftMU9Dm8gVPzEPibRwJqUWTXv",
  "key22": "5vNsnHfgr1qyPntEBMF2bWCHfvuC2dADSUYR5csqdxemnjV4qRWRsgxPPVp8Sw75fwHqgap9KyXbcNLV6zaN7mMS",
  "key23": "5gQgvVpCnwXcepMC3LqE3zNeLuf9DAMrYKfjuRDAP1tJA7mS4CaS3naN6v1zymSEoNGBZjH55fBAaw8C2SxL6T9P",
  "key24": "gWx6MvLLGFGq2exAfPZsaJmcAtwuA3QuExvRsrWHQNrKEv3u9R4xCAZpVqdLQ3LuzY8TTVivW8UW9fjKpYestAf",
  "key25": "mtwgyeAGA7KrpAYPjTdUGZW9wGhHDSFQehrP1hGpxWpe7UC3q2GjSSW3dVYKM8j66F4pEmFM4K39yqzZTxANZpk",
  "key26": "4KUMgfYqoo8VfQsBHd72mDe17eRVVevjJYDb3AQmBrQzdb1ghRDPGCyiVNDMRHN9p2rkDfT9wx9uFq75KkLAWpva",
  "key27": "2TjncjyJQYw8XJngT66PBeKkkyxvzQ8h1aTnZe2ACRo8UwTTzpgedyBLDPpY8AUGCcTUFYCz67E3C8eTfSi7k6Ry",
  "key28": "4Aosim1gidJcSJz43qEY9v2DfH54HtrK7QhVnVB9C3uvY8xXugxcy84QKkYRbBtU7zAY4u7vU5amzm1pLjBBHC9i",
  "key29": "25Y8Z1LzYmuWzV48G1j3sobpRguyLyGpbRQ2SNhbJkTBSjA1RCr6t8BxC9xWb3kBr2y7LL2Cj4EVTxyhawk7kHtF",
  "key30": "2ZVF36SosahWHVWVVZXMhET4y8mHdoUjRzNoERmaXxUMd2QLUdtYKc88N41GVEyBRg5nK7Q9QzTui15xPE3BsCqd",
  "key31": "2WZjq5fMh9HFAPZFmW2VdjgaVPM1pBkYnvzo3B42ZuRwov9WGCdXY3wyeXPe8VZ4ktcLrRBwoFVRjFDY1Hqzt3CQ",
  "key32": "5tDdzKBgWzJmXvoQgo9oTMEBAawvb2sXnuxyvi3giH4mfuaeKm6DhEMLJ7Dnmk6uevahBh7Mi96ic8hcSY3CqYsG",
  "key33": "Rv95r8r7x5Yzi8B6z3yy1iKaKMMbR4iU8pTL68w6pkQ65KKt4haUVbkHt5AJvJgi9SgjyP7hop24FmMHEAGXm8q",
  "key34": "2FWZkhLmPYugZtcE3f1HraoxTnZ4YhPDdUVg9Fo4din5c57FLaStUj9ruuKxJEGf26aTbqv9LQoKEt3edpR32Wiz",
  "key35": "3QtJB52FmdRxSemRjskWFR39nPWoLjqcLukaaQxdhn3uwnr1SWYPx4Uekp29hcVTfzKKA4QRoU1drZTVUbQznHmX"
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
