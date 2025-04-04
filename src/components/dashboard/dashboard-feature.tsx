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
    "5FpUPoXXuFJo8Bk8kkXX1nsCjbVoUc4qmEW4t22VCS1k2QegY1ruzoD86nqkhULv3JhMY2ce66vmnogMckUxDuVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvpmSiUrZ2LjS6H9deQogny99d34TyZgHpXoJCn2SFAtBsv46HPnaCn1XUnP3dPAAzQbYgjdh3Db61gggJ2ib5p",
  "key1": "3XPuNqqnHVnf7DpeKgdNHvE61A6iL9u1rdjEHzzoGDUs2KhYE2eaQ5iH4M7DSaweYtqHiG4U7abCLAYjrfJKht4b",
  "key2": "3VNDd3hWbKK7Yqy1xvT5S1AvC5FJFdXxHFaDNQLyPua6FKxJyBJ7WWXxhrJCHR6mVbeHQxwbmXLhz4js85yqiWYM",
  "key3": "5JCik8LNKVpsgWZSTjtb5MpHeToQC6bDqSkfeiTBBAB18VUQt4cvQuLezZxxv6aQ7VvuiopgjC3Pw1oq6D9XeiMp",
  "key4": "FytMzLcR2ocnYZsXGox2iu3bzmdxWzXhZLGAWcRE33k2dYLk2oyhyKjYWxvrnmUwbQWWS2XeFtvpduoE1eb9iqE",
  "key5": "5gKwv56bK65Ly5BbZqBzPVZPW5u1WhryquSu9cCw61Gb1y3zDyuUdd9ggSaZKkvXvkW9K2VBSvQhJ6hyGQqXBrUE",
  "key6": "K2FnA8mRKAjyxvvNZB559rx72tqq2tpfijamntZKDkRUqLT8ELT64CQHVdt93knjivRHAvDk5pWrREtgVmA5Avg",
  "key7": "5iKtctTauy6Fr56cGr7pZvdavQRgQsJW2JjkgbgKfyYhYjRE2cjwCFcs9yFXtjLA591JffTnxEXJ1GjBvFVqsEWy",
  "key8": "2o4y9WN5EANZRWgLb12ty4AVoEgnQjNZR5FBndNFE4tsfzeeMhz7xCaQE2d6tE6zypYW9YsBbt22jrGRvYW3VR5K",
  "key9": "2JJ1AnA1jLzqvXwpxdyy7CusNeetnj9UWAzsshVxfH6aGVykMP8PHMYMPwCZpBDqxVk3YzoNBiSGT3bAejDCVHbb",
  "key10": "5AtzbS6rMDDxi5zoiNf9jhXwidH4oSzJJGFZveEUySLAjkGWJJKprybVDT4i35tFEq4ysMXQjKdpBAVnrSRBXzXM",
  "key11": "43qEoBrAY5kgCqEJePakpqqhfKmcx2L56Q6hWKGZHip2Nt2uZTCb5cKQFHdqUwNCg6aEz2MgP1tZKM821SGgH6Lj",
  "key12": "4Ch3sywyZpnR9JfCLRqHbzy9Eaago77yWcHsYP9a1kXeSqV94p4VW23U4GiAEFvouhSLLRd6nHKWZSUR4x3QppTg",
  "key13": "2WS94td5kCaFYQBQiWLct5u7ygpjyhbg1kw92Lt4Xr6ewkRmT6yco64zTxYR8cDCpRB1pffszeNWHGRgDbezhcY3",
  "key14": "2WRmDz1tVLFjTsgtYA6Uc1xMNTZGueec3qumZ53zCxVJntzAMkxAFYF7bGETWxeb8wSbunD64XNaebSvy7dFNs1i",
  "key15": "xYZfWN9yBvvk8cPpndD2pcR8vdNVnrT1jfqMdqpuLidhhX55wheXfjg8uFg3qqvNLSMXSWGj9bBjEnK3AfM1wag",
  "key16": "wenCjmfSWNcPTK4qPa98DVLZnTHiWZvTshTSgXczGiVLoqnkBC4ckVQf1KUT3JMCrTJWsriASJstxt1detGQ3vY",
  "key17": "Zg4H7jo8WsqVoGiPqYBgyjdyDMrFSWHTWdmWBdM6zLLy2ABxqeH1H87SczhLZeR2dPsxjzLLjy6znPi5n69FgJS",
  "key18": "4Bnt4WFGVT4LEjrG4tSNPQ1yyYfT17H5nicQ4bJZVoqUWYKdVHnGRmNKMDnrprFM75DeFV1qVX9n2V1Svm455FzY",
  "key19": "5nUtPKYAZuV8U8NP2bBks9QvnMdDG8GewXynCFxk6zCkHRjU1zQtTk5mnYmL86dtpfeNSMvzwksqhdqkr9146X5q",
  "key20": "2TcrgAezUoU1i2HnffnNsjJmGwmPPQzz4Kohy8RCKkuGDXuNbF19Xou8DZ8VcvbjveeYSzs8GYpTw7FLzPZbHXm6",
  "key21": "JXDUmBLtGLYFrhQ6J47Zdetug82CK8SLtiwRax78e672Af6tGhw8nRebB3qKnAyjnEfTquJYsk5Zi6S6491uAFC",
  "key22": "PPWkGWLh81t4qqky88wK4V4DHiyAsnggjNe4WGDHGUaCrE95CcGsxthqei3ZhjtBpe1xD6rf8V7JRuEthcDtJyS",
  "key23": "NqNXGa8bLcjLMVmVbroAeiRoZ2ncPgM9SkQUdWLbYoRRX7CLJcZNKWwggjZ3sUQsqZGbLXJViGWhVCVHqNhTQSk",
  "key24": "49f1YCLFLcBYUqJhqpXwQLRd5JnCFgHGPW8jWCSkrSqmedYLVcXN7NtfaMgHqCKxjWbh1a1poCvugvsQXppgoD5r",
  "key25": "4SN8u3PN6FvpbLgFBnB337kPxoMLKHBXfDN51g1w9CXCrGVLM64ziGNpTtFH9eRhUBAZ3R8Wi7hxm7aguKt2mMiL",
  "key26": "531TS21HsrjJBgBfUdKpzE5Fs2EYMtsps5nzD2ibvfZkF7s9hdFETyswdfDaGfwdoPjXzz4cBdxT4d6E529jb88e",
  "key27": "zPvX7k9otUQXkjT3dR4ZfZvfpqVtDhysGurPPb559A8JrnvPWToxD72epcJcPMeuWgiG2nigiosnkZ6xdu3Wvss",
  "key28": "2ZaAYZvaD3vG4gGY1bpUyLVs7xYMBHvVxwAJLTaFUFudrnVbC7rPtXkjCcsAKH4rFw4L4DcxCKo3aFM2fxoF9J3r",
  "key29": "2bc2dnzD1tS8PYgBMRajaquowd3qo913y2vL5BaXh83rESxEi1o4r3U8Ah6kJ5R2FWG8ffGpZZvL7ao6cYupwNzn"
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
