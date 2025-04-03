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
    "2HMzKgYuW6oT514ZLUEHcgqXmsj21u7LC93x4r3rM35mkFQBNwqofNyhYPTE3LM4cpbWtr4c2pp3hqDtyLD13v6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGQYCKSgx2rpog34BUbNQbAP73mu84zhLHwQFzDWjSt22tZgphTFKTJBV4AwdSsTCBAWewzyvpcH6Co2qbdX6Pt",
  "key1": "51LVBpv67WbPE92NjmbEiT9cxwjKT3znRQVFUJyX7bs4VjdGVAPdau5TMxiNqx9347yB4RZg2cmF6LfEhETKFjut",
  "key2": "2Av2MmcUfFJgHvLrmdrLw3oMmwQTY1b7YLBH8j1dvGUhGiwy7ae3sJ17EP4ZSbuYFDPPYUqfupvnj4KCHAimGXpx",
  "key3": "2LtT2gGRA7ofBzFA5EsPUwaSS2AoBZtYezXDgzQJqpQaqU7xDxqXTqz2NccVbUEpo85W36ByFPYgSeSHHK6tTF5u",
  "key4": "2UKV2jjcB4YL67o6kzBcMny9ML9tJKpK8tQwYwzZnuqGhHWghATY9VUgHvinSRTprn2xVbx3fxM6w29bQ5hv7XX3",
  "key5": "3RW6D4nEd3o4YPpcthPrMTvbjSrdFU98oZH4xoYbCJWffyCfQFDxuNHc6Q3XJAasRpTeunPDCe4s9uJFaFwjdS1W",
  "key6": "5EJngTPEYwecAbDoUVU2WjMmfQrHAjp1NUGT5GdwLHHbxVusJS2q8wtQrNwXGgqLHvbFtgHAhC5vU1EV6knXtDhA",
  "key7": "5Yv65cgqmQZBTBBeCRvL2EUn9LuMq16wts2K878sxt9WRdd2rTEA4aE4qxUUVpTdBUvruKEh4TE2T8h7h157NnYA",
  "key8": "4hWhVZVpFevmzGZt66btpaG2MVFeGUZPAdRxQhY5vwv3Z9KLD8MXvEa85MEQip9go8YQj2Y5gfEvUY6K58NLXZnd",
  "key9": "2iL64KhfzjRm3snTvzWSvvy84sDwnkKiWSzFPC3fiFD2HCeMve9cuP81tf2wxDtNxjsbqB8rPnc6s8HFQULgkuwE",
  "key10": "4EMBMb9pijFBo2svmEurKg2uA1CA1UcPHvCmhWUxrNwt891CgtrZy9HgYAZyqJkR1Uvm7LWxope7y8v4txu38rV5",
  "key11": "5Lqhbn1KzsnR5eddZdrX3EQr2hKNx7JZdKsFgWSQ3R6zASKCxakBivBS4rd6jnkcaM5MaQjFerSbaBcqz1dgMUCJ",
  "key12": "3AGxdqS3yCtvgCG3MZPJKftYWVt4r857YZQV5fmdUQEVdUjaW1sGxmxqybuJMVxDeawppPrcwsBzVRk83U2DqzvR",
  "key13": "3wkxJFt1N98WDESkFrxncmEjwvnzunUfykCYmoMRzPq4a3bKgDrAfbria8WG1e6APArxirCQ2yGJ3zuC4tAUg5q2",
  "key14": "4QJHkf5b5ffRD2BHx444kpnLyncFcquaZ7bEacvhGTy9Rc3rW59EZqo5mnuBEKNRqMSJ5H7JievFsWnYXmxCehyG",
  "key15": "nm5gUe4ZppwHhtmuvwqqsv3kmAGrnc7AysFuhSKuXi3faaHpGRpJEuZRP2c8WJSGAFfyhc34AxcJC69mej8uyGG",
  "key16": "fTHnN2Z8xRZ9tFU58LqwkAYVPX8jHCEZER2BCwYU9XsGrFCURnSjedgnHvd3Si4EgTcTwjHk7yV65QKmtYcouhT",
  "key17": "3NuczYizMqmgr8B11MCXsYAzmyGXv726xLDrZNQDVoyNnMqwgAapULLkcHQJ68c71wVLBVVgtmWEzzpQuKC4uQKv",
  "key18": "3ckdGeD1FC7PpjY11Nsu84GepM86FgsU8tx3oHKTRtW9jp8YEZkQh3EfFk4sJaeJ8sEBmLZkiUfX4SF4JjFJLmUw",
  "key19": "3j17tFwVfJrithmDuW1Bz66VJmR2r3GNw7vSPRmVMTx2B477m6PKGWBaSzVwDw2G9jM86r4RbghwakVCsq6fyyVw",
  "key20": "5RK6c7HvSZDkYCiJYGTVpMfNM7MM9cQWfLUZFF6TYjDbv1aMN2UYmsstrfwcTZd91LyHwJsJwce1R3CocgZkQXQr",
  "key21": "2TptrR6LhTfdAeoGPfA4fQdp3P1BWcBAgv3CMJBUUB9jm4s5pJr8Bmsyj76hD1LHwy2GwjMo8Tpnaqs8xb8zCRPQ",
  "key22": "5pP3dnQYMBsYUb5cNhxJmfPeM86FxtBPvPq46sYogcvLbBLk5vvF8oNCDsjPiWKWduZ1V2auNy4SYycBdHXjTQ4T",
  "key23": "2xFD7AK8g9Edg8jshfN8woS5e9e8FbX9f8nZd3YZjfYkWwd7XuLuSp2aqLxfhq5UC9MMog2S3pbgNkiyoZcHoz2B",
  "key24": "5VaAGsUEZ7aEGmWry8FYXWddwq5UCGPmoocgn9cr7XZrseSXxPMLKFuAotdR78f91157Ua7knYwFFv6HzanN4dN5",
  "key25": "3P7y4cRmVeUoR6gWo2bGRU4nRU6XyMk4Nc2g761t5aDzt19drNQxKHmtE5qkH7Rf1D1HeQZLyEe2NE7W2zSPvmGz",
  "key26": "2FyR2DZgz2ZY8UdBN5srHGJks9bn8GK5qcJzm4V67eubz4xAEFLkwMvuNWpXJoowcDyNFdACysarKsonggpkWobq",
  "key27": "eLx6ZLymAMK6yhqJDrfozkBJt5BQFoxmFosgDnuBV2GHWVLtvkmpGPG7yBJ6aq6PEnbSYMxuvPPpon7zvP4yXay",
  "key28": "597V3iDcnsnVPMWzdXJfjAm8MuJCx6iqnFpfLLAVtghjV2UM4ynzGYLe3KKKBBt8STKzeYLTaUcxdTLLk2Dyn9nK",
  "key29": "2jrGQ1mQqUNynfYNQQtAeTheqSfEdkLbHKaP1ogpSrHRMqXwZRtJmQAwzJP6YPQ8W2vZcfbMtJTD7qkHmimUR53m",
  "key30": "2fxacz2KirtSyzvfJKtuNKiZJjv91BTn77eULsCyEwK3m6yEFJPtN2Q2rchtggRmKjBcDTvprvUarJZwCfUGTE2k",
  "key31": "3zpZCiPf4ZYmPV2BoSDKwD5JNqk6j4QEUQL9WeDWTjTDw7y6f1pDuTmG1hwLEj79fWFynQb5vRRuCUiSvXKZSLLY",
  "key32": "2WE3R1nQXTvuhJXY42TFAP58dwASLuLBqrqPZRFnkTqNHstgfybf8bMVcvoRWRjNHYBG5Shax4msp9aWTwuEm1to",
  "key33": "127yoZDHzYUTsLV4M5bfQhuaMsudgN8P2rFTXwkfK7aZcrPAW6s1RSoY58m8jtSWBUoLW1cPp1kCnTC13SZa8Zeq",
  "key34": "ukRks9maffz5PK7gChCCPNkN6wtLdP5TuyydEk1t8ejUMRBQBJ7rPTNAt1mL9CiLpKkHhjxP7Bx155rxdV23DBU",
  "key35": "2di1t1iCa6A7Stpn23LsBqoSBjJ1htQQxTg4rrrQ261uzFGkMTwJGrpVbaaSvDvJXd6n4hPoRzUYDrp7Zux33QDv",
  "key36": "2AuunwV2h7sr8ypQXjAHB38Lfa7ET8Mq9iYJ92tZHSPyt1FwAVNYT6sSwTcHiAkdG5fjfG7drSqYn7DTZoYGFubj",
  "key37": "WJr9ijZcxDHKeDWHGiNjB3vkpYx4WvTpfcsEAX29R9Mgp3bRNoZawpsfe2L161RY9KVpYbo1pkeXEyfFg57GaJG",
  "key38": "5sxQ8TZj3nYE8PFu2B2twTrE91EsidxKFp1C1iXw56H8h2JfvaE2RrWQmAzNwLpqjZMB8nGXs9GL8advw18Ue5c3",
  "key39": "5jxi1zcoDL6WJvufFQBKa4tBkeiKZQxQpu4iwNxKGDrCaCzA7uQaDvHNYhTF46Mi2jti1tjC7i2HfyBWgfEsXXZ1",
  "key40": "21P3Mo6AwErcuBJNTmhWECXQRsqmxzDUJa9LqfKqSknjLtsGDajdCTZhbh6oBzNRsWSBFE47nUerJdDg9poacDYQ",
  "key41": "2Ne3GvB63NoNwcrCGdyWzCrJa94611JGAhRVWHJmSXUgYp2eXP574eoBDN4r3Ubjwp8ggvzqQAkZg1nzr3mMW67e",
  "key42": "kMo5nZpxRJU7mfmZYymvML5Tc2sKbucwwYq8ytAbNHjEgFCmjNBc742QKmgQzwgdrRZvq87ikwuy1VrCwbvVtVY",
  "key43": "4VPBX5SK4LvWu5RN6Pv7RnzMfGbGnzEneYH4mAApV9mDNrsJ8LsDiVLmsA5su7xyhLJgnXujb3Rz2CSxZyDyg4r",
  "key44": "2u9J5RXy5c22FkP3a3XqDowM4GTdx53AtkRpzmyeZEB6QQDTJzckbEQ8Tkrc6ybARaQtadS8BDV6BUxoV6fG9TE2"
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
