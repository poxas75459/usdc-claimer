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
    "5FB4dLVg5cZVJjQMmA3o9UR4jL5YxxGjhqyyPo2cT5QR2Gpz5S3AXg3FdVp4dS4qrx6RLr9ugc85xPXCukgQm2H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vqGpMRkjwmW6WYwCJQgn1PSZp5AS6gjLMxToMSVsba6RrcWK3cve8FcSdjKnuJvvtBet9jPM9G6KaFevtBGmiYC",
  "key1": "2yagsdSxYrGWrAigH2GDRRYTYD1pTDs894aqMjJxBkcULfXSXhsJ829qdm8acbir3k831XKMXKF3SmFcXR9hPtQE",
  "key2": "597EtLCSmDR1HrbDs8G6bNMpgXrCpYvt4bTw5FLR6XH9n7PLPg5gnnEgCh7kcom7biWcvWtnYrdV59ttSeMiProe",
  "key3": "4AjqHnxhqtqpUoHsyJdYVSHeXzaLSJoSMvN3k2MU4jGJnbLHP3SLogLtW84iwgub5EqFZDp52ZgEuDnRxdcmAkDU",
  "key4": "2oMdfR2cNfe4v2aXSv1Nzp2rwsp2tTy98vZ9sfA7nW7cHoPsHKkE8GSsWcuuCtmCtSJUDyz31c2atKor8JiaMX2f",
  "key5": "HCkP62e7KoTss6dZEQkAQ254tVk7gMkS5AZhW6mho2FHqLxd9EU2obTVm2NPk4ykRz9YurV9JsKgVbYvshT9T4d",
  "key6": "3QgoNbTnpmfzUoab39KLwKJdvk6bYAJ8LXbZVCdVfbqZ6fgtmHEtVC3duSMiy8CLSmSm7uHLAZdY51o5qbwgjLtT",
  "key7": "378WuJ4aVRpULVFsZxyjUuo1hsz8w2bnJj2Kw849NyWrXUN2uBZj221mvzo7Vco1SfwDKcE7qBwP6j1Kj4VELmKf",
  "key8": "3tgpJHpWeBMm3Cw8s6NjVDHU13Rf3HzKkfFWtBbtdA3ib2RwnCXSrK5vXuPNya87AasYLj4MDwEUbFxe2RQCnj9M",
  "key9": "4tw7oV1E85DDcEva735VD1oQMxRGXaKTgHf4rNNUkXjJgPeXov8pjd8ui13c7NTFw9ick5F2ZCbXMjTJqgsk9KvA",
  "key10": "pceGBQPJ9g2fyERwkAjnp8phZHser7tM2ja7D7HcrjqPJHTzGdJf3NeQyECDMXRLSGn2Nhr2ZPrNXjNdsuj4Cm5",
  "key11": "2tGXEzKvSDjCVey7Tu7eE4kRHE2vqjbGjppCwoEWGc2M6ayWtv8ZwdrciSekCkrd4GBPax4nD9syP7UgSUHqRPZ8",
  "key12": "3RfeuAuxkJpeeBGUKW7E2ms8rVaHtSthEukWjhiJZ4yidst7iCZoUJQARh4MThWQ2rX8PXPq7pANyaGff5SqCQTs",
  "key13": "2566u8P1n6zzeui2hyPTGw8U2YSamjhUhpP1kCy5fPsgur8KW4PfXrWPDQpWFZG2HU5mH67BD2muQZFeZiD6eNHV",
  "key14": "4HEZCarcun1fwYdwgK4o4pLjsBuaaJ4M8SST9QgKyDErZrqf1JdPtb1pE3aBiAHXSgP47jXs1rWZksae6nTpHegp",
  "key15": "2JLpZdw629NsfRXgrssz483tcmKK35aSrTSdtyvckyUPvuTvAzypat4b67vD39bcuQMTsx7wkPTHXaPYrBAdfsMg",
  "key16": "HTRtVmnoYqzkJ5ijKXvoxBemqDQhNGM2jxkHCwVtyqoExbuL2Ci3ZUro6xxuSSUDcwqkedua73wv3M3bffqUMcX",
  "key17": "2yMAtjXAchHU6YF82JPiAXa3kxR4ja9Yu3PCprc8gxm326rBZHdc6GsZphMLveGtSeJNrfEL2sxN4V4Q5P4hSx7a",
  "key18": "3PJg7aBtygxfb2hB4KbsBzKK2RDnSuvnTRHbhUoJAzsqWeP9QFeN838y7c5yWLbFyzZAfU3sDsUEq8FprjcmTPNZ",
  "key19": "5UApPCQF6aErgkgMy2TRHEyV9WdoYndcxmDTui7eQbW8NdhDt96LgcVa1AWRHm9mYKsAAhm1izmfPAGvxztEZ2oB",
  "key20": "2ofsMXaZeXnjCjMaxWgAsFpt5hEqd59uHZShxAwjdSonmY1z7xm5KTJXjFrBr2y4GSVk6Ja89Bavo8nXswq3DvFF",
  "key21": "4zjx9aTMDRKoMJDvCCagXSgaHTKHuK1RXXCXETUCyByLv1Afj1ka6NnYvqZALrLNjt8ij9zGz6cfFY8ipXHcS9SX",
  "key22": "4U9mnembNoynTc9WYMsKZxufC48dZowDkT2ofjfzAZjoNX6AqFkaM3GzUpc25gPtmbefpQzCzeKeaovh2VzVpoW6",
  "key23": "4Gv7YoutGfXGeEC5wANsujbTazR5rqE7yVDVDTkM4cT2ooFXDdo1Yv4eG792aHXF8R8YWqPQwzeBRwbULD6xcijC",
  "key24": "4mLSvwYd3uei6FkaPg1txFzSQESBR6LWwjivbsCDDccWCoxagkv275XSFfgpZnZmhiAHbtcqmA5fCFrmKkpbbnzx",
  "key25": "3QvtAyAfqWEozgHgYZDamuEnKNisJmQwWffgrrsqAd2RZwVMNh484vRoubMK1bwm5sr5ob3FHQhg4Af5H5w6WsTb",
  "key26": "3U7ybjMEWYwyozQ4quG2FJYz3eLiCgpPdCgS176K8nwzSUvFbVLHkgcm38JeVy7N7P7bz5a4ninmTsb4xhVPqMKj",
  "key27": "65hp9x4ebEbGnxGE7JUR4dwqUpWm5AKh2BC4W4e8kfFRTkNmqrFz7jgLaejgWxaKqZwbq9NW8RZvRfQFcpLriXoG",
  "key28": "5yE4qbkhhX1iTWRk8e7LuiRnPahpWxgijcJzwHeR5sHzQUaeNLpZEdWqRxT1mdM1zbGWBCTZYBy73dBGuXntPxsP",
  "key29": "2o8gBWNjPuHGubqnsFQu91vN9F86ZPysgcmqCJL49zmdYir14eLzoPrnPs9WikKDBud5CqGPGDkywruqHMSHrEHm",
  "key30": "5ggjeFTNasMz4V6KTAzmDKCD9pDJwU1SjVKUefZUDk5zWWabv6zdRGhrzsAW2AWkHDZqFkNvtEUmnE7YeZ9hYkgb",
  "key31": "3Jmg6R92dshqU7rcD6cZzHYEDjSU5Z3autgVhcTPxbvDV8bxAQ4GhLF96R2WzSyd6RYF1VsebGEAopjLuGV3B4jS",
  "key32": "4jGZKzC93QyoSdVabYheuEFZhZHxeSw3WdT8j1j3qriCzAsUESdyPsHDH93Up4oNL5ufVzyGCzjbA7TkW6Cd7FnG",
  "key33": "5FZRWrzNtujCKLxREy62atsXPqyS17HDsn5GL5FHpoe4VQgXf6rohVkJsBTTxgLkdYPfsccJsNxFvhYLbFfTnLXF",
  "key34": "2piEXbebj83pbR8UwNz6Gg1qGEY7Nrf8x68qA2aiGEzMCN41Qu9UCsUQZNPxq5rDSu5kZ2FmRM3EYwm91uQ4a625",
  "key35": "FGNGFZWM2rrtu218BfeCz8dQ3UZxSZgPdEXYF9SeZSBDA3HUqTFLrBMSNZMhyR35hWRgJBRnZG3gRL7P7xQkhz8",
  "key36": "51iKc4JspRsaQcFcfxXt7yWuV7Adj7YCSq3v2nk4Rgs5852XxJLHEfMrbibVj1uZTv37V4szUhSMMjqE5Bnaf43A",
  "key37": "gh4K6KsSm7Nhia28pSSyGi4specNepUddySLtT8unXu1T3t9nfvtUjysvGUwMaDcq1DCByra9tckM35vTDKYhk7",
  "key38": "5pYhPHCwPvHWP7Z1PxhqnxRFuNobrmxUPek6kiahJ3UckhcTwiSBJkX1iqLRqa1D83RPVHGnGooJSTfxjhWcyR4P",
  "key39": "4k7py5hFB1HkMXxEAK2gLcj6T8ruvz1doFNzwqfVHMaGzz9dnCWf7qzdwtCGyjjuhhPf5QVhNQpehX948QbALL16"
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
