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
    "3asgMSVLKwR6RHoELwDNfCURqjZ4PUMkontLk8BUe5wdejZNUBXxg7TFRZWBkwTeLg9RQ1AT76WzcQC6MiiCK4Nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7y7NGF9EdgCmQy8tpwU5bsxwHZRu3W8GdgCyYNkSNFxX6VWNV2kKnefE3YMZNbKeQDTAf8CUwCG2bMS5KJNKb",
  "key1": "3uWNh6QZMYRsNhwqSh92wnX6MZ1ckyvHeNz7AZmZSDXqSm3eMf41ffrtaZDt7PEX3nuQ9FaUXdytbjx9LVrN8h1B",
  "key2": "5Bhdx3fFhydQ1MyWT9nNuWkrkwQa4QtthPQvEaRhwQskEMAToZjiseW3oPBJT8oXXeeocVEoW4GdE1EQ5xLpw7sQ",
  "key3": "5XEnn4L1SC3tsBtmiPMyPKqkjPkpYWPYh7EQRQ63txa5iGMRPny2dokf92k5Yree5e9UHYm8G4t1qAfJ8PL2Q3Yh",
  "key4": "4Wt2G5hrRBouu8EFWCcYTEfDUSVr2cfoLxoFEQfUKFYMv6JmaudFnM66XTXxA2G2rZbYjxy6co9EqZRixJDGmV71",
  "key5": "3yJRa7qPynUndwBwM789gpR2wLkHDSkHbbsae4SXK2UQAexWfdqsPbXeZp7f4oQfnfoJffHwTNnfhkuKPoHSZoGs",
  "key6": "4DsAWnY5SNGEdmvFpWo7X6Lfe6fBrQJ5ECyXc229nz6ybraNhFu24QD2gkJ5AwUatiB3TUdJgoipN371AJuQMBva",
  "key7": "4CsW38VbBm3APf8vdnmD56phRS9u66nxgi5E6ZckAko7UxmGkbVLe97UQTYDzvooANE9hh3qqBJ2TZnCfHThYPmM",
  "key8": "FRbRApdaHfidcRkxgYyqn3jnmmZ6cGAsfRkn9WV21MKaoGjBs51eh4TjrreoGThNSTGMQT3m8CSS7RtWGxPhrWv",
  "key9": "4ToioqJyeAGb9jtRXsQHbieyNp9YA1CZ8JiqCH8R8dK6o2rRZ7erSkhfvNhDVe9iSUYpCRhsGNWW2fWDbQHTQ8oA",
  "key10": "43irz9ULDUPaWPp5xUxrDVRsTkNutjx7FwUkhJLKf5BKnkQyBFeqjD4RWVdp97QNFncK82qGCnwbd8FZDoTGPhnz",
  "key11": "KadP8foY74nifmVZhv6FfyuDpBAAzdeWrRFvaFSxgZZEJSrzRT1CVwNz5Axq3EWAC6xbzJLADFuiP8wLZbEXUVq",
  "key12": "PbC78QNQDz14GMzmbvVmufkjZ4LuimqQfcv8WbBPLbSZsoTjAnRqnVJVnL3Ga2TTG6cL8afLDMJKwSECi8oePwa",
  "key13": "3LWhE4tkAZJoxQV7p31QwVqdhttyrr9xChAevmQKSpH1kYipANonAevyGpTSHNE2sjgrpQJkHwX9nh12tqjoYNMj",
  "key14": "4jTD3p9m29YyFcU4fGhLjBFyM6oBJEYfsdiTu4GMGBRtQvTidh1aPyDE4drb1Z6RVg6n81RXWeK4gXLa7L6CjQv4",
  "key15": "4JEaF4ezZnZvjSYuoQv1bSMVg7YsEuDzbdwdNGa4BCcYr2PWf5LmH93xX6ZEeAHj8TUTNThQBdqtWMojxL2sUzPK",
  "key16": "3f64NXJ7US7guWo87pU5VSCDDwwjryb5VeP8eVSg4YYNniidRAu6wUEiqEodz96fpGyeVAD9Q2pFFMACnbbWueSB",
  "key17": "35r7Crf57NHwM7cHp5RmHJuNBPoJ2adhQQyemSq8GDQsVnDtwY14Bw3mtLudsqi6WgyyZ9kTVwDg78xq4Tzpxpsr",
  "key18": "55PM7Q7ZEFkeKRvoEnKq9Qhmmsoy94ydKHVQ2MKvAkqufQ4ZMGpn3CV2uHyYa3weppEscGfN1qVrkxLKCzYH3BqV",
  "key19": "4ryMiYwiD4KaAVGc7LeC8zuBewguTwowAdocDVywKtSZF5ZCV1uJUnddco1tbQfH9PNGXo2BivGyo8A5FZdzi4Tk",
  "key20": "7Kh1tuwe9jBNWgimGfaSJMu39UVGRZok2byBXG761tYMsgUdFqttx2c6v7db77qyKEAWTtViqKMT6sdUMraoA4f",
  "key21": "5yAtrcKYrLtc6fEZm7Ehk5FUeXiXQjZmpEHTEVvkPB97YmouigrUzba3Jk2Vn5m9gMQt8wozVM7NDXxzWYmeHHti",
  "key22": "2yUatPVZAKy5twJ1aPhVdPZzf5UHQUM59x9ZA5wkKyZUEHp8qSFAemJUQr3y7Lt9RLAqf5cCRTtPUymU1kaqK8E2",
  "key23": "YMgpdu5CVFqWXPdDDToxx7ZCd3AnsMm7ZngisubLDgg5tb9XNAwgzC8QHpzdk6jkN6w4h9GpAc38vPPrXBnFB94",
  "key24": "mfiCrFzcKAWH6C8VtYGPoMN3zFUXMbBk5JFgewaiHkVYCKN1A16a1rZJtcvyC9PvBntTqCUA2NqDHg8ZJguHGbt",
  "key25": "3nHqzoTZF6rTMMVvWnqeC7dbegD6far5qKT7twujes1cP9Maf4fSBuHxPMo5itD2JmBzNLxs7XMgzV1cdWpVdHaf",
  "key26": "2tsEBABJ1e3ckVDUN8WSos69DqvMWp6NdLeVuy7rfPnqTyhzDeXU6dqAv1tNFBKmYeD5CaHBYgmAXcgnMYDYRWkP",
  "key27": "5raJoGic1uVpcxizVgsxAQoXrUrd1UyC3X9JaerJYtq46UQKdEh6vpmrcLgEoDYZWmDX5gQi18T2iEf9vFWMFfb6",
  "key28": "5KW1cHFnGmjtH7jDmxvfTVHdchm1XcAF5k9Psz3GeP9tXLgioPAPpQWKNDSn8RGtzj8pYLMvkA9nByksr5EuuJLr",
  "key29": "2Vrocw3zAow33V2ufMV3xQx45rRYYoKmcaeFAjrfy2aHmLKEviRhBhQrWebzhvmooAqfpZXHhjAsVgaUXG5pseun",
  "key30": "2hyevAUVABLaS1oGryo4N4SoA8q8bnWzkPFbi6T1guorWA8PMnwhumY4qtmo3n7wM9gmThXK4ZTZ3nE3wtBruQQY",
  "key31": "3gUsEAvwDu2EYbdDrwNrVabUXPQi4uRCqJtREMmNNEjQyFkQGcTdz81oYefBDDLWyuqANUejKAit69dHAECQQM7y",
  "key32": "5dbZu1LErnsvqFAD3sG7UH4fHnnxmAuMrLK26XQsEir32wHgL93ai1JcJjy1gdfcxG2sDyryF3Yz6qVGfH4DPAAc",
  "key33": "3hf7rq3YkyJcPtGd5w2emHWJdi9kkZ8dHjoAmx4CMehbAg14RGFacaKpkrNejhkKzVFpcCBrxDvEYyvVAGRYqfgH",
  "key34": "81vPLe2K7LqH5joxPhu5mZ4NCpaJv5TANKPWbz2fHuEBso3Gcqa7fNhhbMSESTyhBymczTTzMsXRVSo41yD5qib"
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
