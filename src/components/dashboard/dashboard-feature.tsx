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
    "3dEFdLi1yP5j2sJnTvp1RGfGUUdADmHRkuUzxDNR4yV1mRw3Gyda5RFSC3rFKENMdzy24y9qPwfBk8QddBmSNN2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3GzD1oRriLSF7FJEL5f7775Deg2M6Fss8v1763QdmhFjHSr1JhUccHkLLgxkagzXap1WhoSFpMtY2y5xrshNeM",
  "key1": "2fxJBKjmp9j5U25LrdR9UHx1W4hq3Zzze4pv17pMYSDZJzdCvCaR4Zayhucruz8imcgxqXJ3HdnnZZuqDrgMWecp",
  "key2": "rXG1MJy754w2zwUjqbrCRZgSUdqtTW9afQyi1nnZv9c6ZKYMHEkpYMvEryv1SXyQ9UbzctRYr4WVci41Xw9YHwG",
  "key3": "4895CJLCf8ENTWc8afWqG84wX5gtAhgVuSEPCfezbKKkaeCzmaJXEXofsZmDB5VfGpYMNkskztZmyou5iwfASLku",
  "key4": "2TrzqkR4Ci8v7sVMEbJPnexY8z4QbtyHDTW9ib9YvC13a2Zk2m4iFbYLXRDUKQzeHDhHbCKTvBHHjmh8r67yZZSt",
  "key5": "4nqdD7LAm2ySd29HJ8UEqrbm89pbRbenfuBRZF7BLBnELHdPkudMs9Gj5B833ywdjwPDzoL3fFiTgBD7yHxmduRZ",
  "key6": "2atsiDmhKh84Hed8uRuFxxaQqxLwQzNaz66RpDoj1ieCXUQWoVQ9dcgpnKjLBmQce1B8bWQMD8iHZrz1JwPAW16p",
  "key7": "3ek6aXwP3cA64ZJHDVgXpyMrNVfnYk56dJCk3G4qQa34bt2XBwcbQMeHPHHHHXHxjQLxqfMWbYhgmukj8UMzWgSS",
  "key8": "4jkQ4j8pdTRrQryw1MCGjNXendqL77HbYqq6LQXejoanEMjSnSdSxvPgLtSrgbsh7TT6Geie6YU8mcEwNEAaaeme",
  "key9": "5tWfZbBw3Wrv35Zw8v1cX42dTP5Usk1Cu5GEEEYkNree336cKzr6FZiht7hijTpJeNDBHEyBAVFbsH8DvErDBxQH",
  "key10": "49mcKLgmd7bfimiEE7PNhhxKPMY2AVZFWUyJVQrfvr6i25sxykcxzpSQs76xkMaJRseWXtvkCRH8j5QNXN3bt7wZ",
  "key11": "2vrVbQhpJocs6KUaBfxEXSrGJRDNxD9Rkjsb7tCSaL4iBzL1G59knj7mxe9sqjDGsXfSwxyzzEnxb2STWWSJjWyX",
  "key12": "4Kbk7y2cmqE9bLiK1FCW3NHAnF7ZjrGdKW7HxVMi3pi2sirAS3YyGeiRTK7kNLFNfQBfSZaHTjfPPhJQfsNiDbF8",
  "key13": "65vyEL5yYw3aenTANqMGnLrWHu4KHsFUTZoT6i1kBxp8KnAGmA9DDXXpZVXQYQEmdG75E4j66U9MjhNmy9yxfyn3",
  "key14": "2zZbdAbXLvepcFPqJMq57Af9xRJEeudvsEmohzXmWLXBSiH7zvpABVzfivBe1mTUGkuP717H7HvoaxwGzSeZGMvA",
  "key15": "4S7CY3oTLEp5eDCrSfFAeXWvEJvZ2sGmRrN75L3AjHcZGHiBzGxLCVJe1DP35mUv8jAiPGxJkmsHLb9xoP4Zrwsf",
  "key16": "2cwPV8wqc2GQRngBkJ5gCEGMpwDta39CjEq1aqfHkPPcuk9XHh1emkUuGAA2PtS9mkybT4EVdhnhfhy36kbGwMMc",
  "key17": "2a5xkga7r8wU1QxW9942j5RGccgc4MXqu8M4jdWmqmQKQJfi2TVwfzEDw319jpVU5TjdLDqYnhhVrYMunpuTJ4L2",
  "key18": "4QCgn2M7weNmP31dxnx4emhzcUXcbiWB3tGMh1ZB1vVQNGW3198b8NWrhpgnT77KK8RsybMrnGVQc3nFjkWJfC9Y",
  "key19": "5udkWH3RQP5cHMhpoYK1YF3VLWY9nciHQMBQmKia8wNcgSJbiPka9JVc4dd5SxJ4GezaA8r1aoKHAKwf2A7u3Xrh",
  "key20": "4kgo1jkSnGo1YHE9p69jw9Xo4f8akHnDK7ErjedBCnsMyHpAbgTbnLaipgK4w1rPn43zsa6jpFmG8tHbiFvNtGQG",
  "key21": "53H3RWdz5NruBeMU1bdfA12Kgq9kYkxnDFYC8cN1ZiKBNRPqoDwWXZCRFJ2YzwSMSTS9vBGyQ2ST7aE2rg1Zh4qz",
  "key22": "2oUYWDp3ngpV5xdNB9PQ3zjnesTaKRJ6nwMYSG82v6jTJV1Zou5QRXq2uWDcTnWkefYZBSNAgypgchWkJ2pq5nt4",
  "key23": "2fc672ZvZQrsUoFNVSkq7nHJrmEveVnTTjq7arnKdAaxGLRkkYr7pdNe8yZY5EvXeX8fjvM9n9KiZjekiDSgftsR",
  "key24": "SPdwruiNG1tPF2DJaDMxghDVQQFUYFR9dehBovn8dA4VwSvLGz77uH9XLna3RgQvs6ymHWihc5QN51VPwqskTSh",
  "key25": "355QkbFzRP9qXB3CdpYC5Xw7rDrT2BZCAvH5siy2itfce7dBgUB5w1a1PvA9CZhqvM7KNX2r8utRvbUzNK1Auytv",
  "key26": "3ynEZmTYdhFgeFcSsdxL4Ru2AKZ73jATfoK1WDPCtaneuWTuKa3hn2rdxuJ5QYgUc6oXZSBsoViYtpesnZGv5CuL",
  "key27": "2zz64UV7qEuaHdq2xAdvLd1KKQCQijWstFP8H2cjFJQyAvu9c6nqDFKC2VozVGvfG4PLZ25BKykxb2SxkgUVWinB",
  "key28": "2KJ3fPWhwUpqAdizxc5MP3z5hFG97CwQez68Cv86QpWMKg4KoJgRkT5G9GFw3kp4QixZuoFCic9Lmxy16wB44Szj"
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
