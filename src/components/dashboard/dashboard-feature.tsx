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
    "vM3kvgjG7MiL1awS8TwnaLecJAZL8z38hTbwqFVTatsDEn7SqpMXqbWrWoaEjNHqQk7gfCvcjmAavLFLfnVwHYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z6HgbrFoZNFuoBag1eZk3fCKnwtRxphSM1E8ZprmBEA5FdBXiJq1rWK25J4h3hpRtbjQYPfuqraSrdHs5UVWRyv",
  "key1": "5fAM1xqht5EDNYexvt5AX9bZ8Pa8pyXWhVijhqeiU52BQa4SFf3cRbNKq7LLJUwVE37cJo6p9BSaWGmm99VRFoPR",
  "key2": "aG3TzDNRNU3UZNHs3aKgtw43XBZb4GBJhpfEhArpTDoXFhUnqk9xPV6nL8bKZkaBcb8vqzRNYC5qpuWQQyv8WDK",
  "key3": "26xjFfei5WM2Kkk89TFUu1PvbwCWCuQUqV7qNoRg4ao8Utq5ibsjG2zSfQegKnyAQGBGNFSCNgCHwiVjD3m1y46T",
  "key4": "2L7Sgfrq9XdHBzGL5mYJSw3oRRGJM6S64kh8qhdXb3EsUL3gXNKTaE2JA5ofRt8FvrWXaJDpdTLuaZLD28CxxcF9",
  "key5": "RuePZmujdZ6We7RonWM54aSM9Fh4d46ARvqW9pi5xa8xXFTSpRduspJfQPPkxQe1XpmTFKgV4JiMNUhwVhhCdrf",
  "key6": "38x5wLotUXApC3U2G8BQkZXiP6bBLZuoasUvFs8Abgzrn3kSSnrRz4HxXU9XGj22u5rsM8V3cuwSq9UgsU4Pxhh6",
  "key7": "45SH4dE6GWTGLi3LAysCEyGoqdcNKjS5McSYQKRL6xw2mrKPEgxitT9n7Fv2BdtG9hdj9dygD3ZPRsbc6gdGSJuy",
  "key8": "5sY7Q6SUrmxH3vedwzuHhV4fvwzQ3Lp3QFgVGqfDDXFgnn9HY1Ac3HRVH1DPokgaLMNiWkE7UF4j16vVURBYQm8T",
  "key9": "3LeGSdB5pkwutddxcfA4aiRp4JYcqrkQ4sNnQuHgEUjAe7QKSJoEMcoH9ZfSXKasgvRDRT2wJwSM2j3uEmRbGSbZ",
  "key10": "62DzyyRa9dp5kmeBMBirrDxTM7CnY63swNmeTmagfEXKcvk7mCPpUXPmsepYbqRBPdy3WDkFhduoAL3FtCwXeAfm",
  "key11": "3tCtVgQg5wDoXsoKGaUoAxftXQvGxL3WRr66rjdvFTRmhwwc5opbADdJcbxbureDHd6Vwfi6DXCXTcb5xzi6WHsk",
  "key12": "df9ZHRwV2f4P5oNH82JmvzS5rJsVnANMomQTQwV6MoougF4SthnfEJGbN25V5JevGMKtMfh16gBMAh4rh1wB4TZ",
  "key13": "263ZGoL97gkoUbm5Qnqt32FSVkm9urwHDXUeh4r4Nk4NPgutsh17V5SPNothaGbX8b5TwcuDR2CqpmMsLyHAptxC",
  "key14": "2bbfSxdL7S6wd6cmE7kjwYB6oGpUcxHjEzYMNmByaRPL8dLbndJTedWwANzuB2DoMyWTkzDz9pYoUYnZRFr9uVFj",
  "key15": "3jVtwXzimoAQY16ofYHR61R5HXyhgFqhWV4VL6wZfKFQGCobtvnPZ2gXxEzdEnUYo2JZA3NNWojV88kZH6QzeKJK",
  "key16": "3o9J8tHhctaG8WgNPBB5bgVQt4pKihcsJv1gJsLyaqypURewPVKWRPXPPJPJa487NAB5Uhi3j3VCpQisU4oBewmU",
  "key17": "4hBcHmM3QNSE1CCBsaiNBTPKyTj9tJdXsNcuRrnuMwciTWyFUSmDsNoYU99MRmV8a4fhYUdxRFpSr9hMMgu4Lj6",
  "key18": "pGM4F5gVNzQ6rUAU5AgAMHYvqmatKaNTYfX575JYfDoRrBZakbu7DWicvuXHfe8BmUe5CxgBTv2dQWRFDpBRiMv",
  "key19": "4tp6ADjhSdd8zAGmrM1emSRk3GryJm8XpvQNGwTPrevHTHiCdN7FZYbsz4CLzC2Ed9bD2NBJjQ4TzKXVTy93vLgJ",
  "key20": "3hrgZm47aPWnPvwq7nsknigR9tz7sgYePDxa3mEwhtsxc59bXng8p1y2HAKGUhvsKWEdvswhL6Wp7tAQCcuivi4x",
  "key21": "2YVyK3kXuqtkuEjw3a7ygjWaAtTsdA2th4f1G8mZVJEoD4XTsKC4Vu9oSbT5uYP8uktu2dzXTBvPJYrhX2LaoeVt",
  "key22": "4APkF8wWPoerXKhwNmgFkJZ9SGWkDveGE9gMwP2YD998uMALP5BdZcU64LBrXMtYMY9n9e9DSVq5kfJs4DAzGjz1",
  "key23": "5TXR3GhxMUJKmZureJaX76daWV5Bcce93XpacF47gz8kJEhbArNw7TksMVrjmVuK5PNkLtq1R5VnTkjYUXdPgHe7",
  "key24": "2fG3RD3ZhYVDCXc2ahwg3E3nU62wh3yKd189Y7KDk7bkbmpF1e814PXrF2N8M1JHxCZg2rCYhF8mpxwd4uu4WWPP",
  "key25": "JWTxjSoTRmKHKtrddrY56hALSDpUefUpGnfsAEenPhW4hXCtTmjxfYjXQkex4unjtXMS5vNv8LPGGgCtPZJMaCS",
  "key26": "3QNmLRUy8ahfFRNLNfoBiReUCpjQ548GgAzzKAhURxJpXfefbu9KL2XRSymGrRPTovYEc7tSn139WbBQFA71mxtY",
  "key27": "58SN4wHb731Ka9722GHSaHXMtsiQwLMiEbeMnY3Y5QP69Nm7ee8tVWQTk7HbVXp7zBAx2ayrRRCMhpZ8BBViYXZY",
  "key28": "k6GZQepfdaBAEmioNC8bYQUWX4EiCS5ytyBHyG9Gzh1zJ32ovnkRAx6QwPWPHSKzQm2FDtmZMjjMtL8Nf8MHX3w",
  "key29": "4GkMFLQ5RVaiTHSnViqLsPVvrmKVjKWQek5hXbwBcJZkmjA6Sf2tdXeNsYwBvNgCuHZPeLycv3eMAihDmpyR8J2P",
  "key30": "3Tj2hTJAW89W46QuvBC926KL7tzaKgfstdymTrmUxd3t5eJiHoBFuuFUE2gjJRCVB7ShGRLycvzzPUNwq6t7yTen",
  "key31": "5dAfX1iYNLsxDxe6smRNXZydcymJqWZCjMxRsABv776pk2odSRuoshSNhbmQWtrwexdbQRXnfvqV4fdMe1ztFFU9",
  "key32": "5CbmZbRdx2vZPqyWNQsCQJ9CKML9FcTdMzSZ1PwToBTfE3inCrBs7xJQJf9KYdPaRN6CtjKMpLtXvSvXPs9LTQHT",
  "key33": "5azFKLFCk7guVGzGohon21JbteznoGJUMdBPFs8E4JTiMqHrXr1izuieZ1R4DKtPQAdfm8hZMoZPhK8kTGrhpXW2",
  "key34": "5Eh5La7vgbqLiuovaGVoLfb6ggaKsqsZ1dqPNcMFURSpZC3mmENeftfPhU5huyxRDQFeNWhSSQioodoVFbMCeEbW",
  "key35": "56Rksw3KSvkYYKezBLnFz7X6ebFRau7TRH5G8WWnXaHCHEwnGySsLHivsvnL7r3pAMXA69jJcrcAHjnN9tWdS4gA",
  "key36": "3WCsQBV6NkAe3EY48NfcwMCNbSUJtTfDNNCJsnMSdCijAULBn4scLVDRgtpZU53s35sCgCBWirLFgYnE82W17g8g",
  "key37": "sCTYcAMctBcb2qAFojZEdiMLaidTGjNHGo1s1kauP39VNiPwQ9noZzsb5N5YFgfkKs1t7KuDMNMnAW1gWhLw5ns",
  "key38": "4HX6HLPvRsYe8UAtfcpaWdjBUkVNdEbgSpj9BGTfcvdk5y9HXKsbL9uRamKb3nWK6vVyvTbjvkCFMkhStrnBDzgH",
  "key39": "2N9yqUaeecGvKVjrNqVCtKhzW1tGdAMpPPtjiT9UxStLLBWjrp8Dapv1YTCDYCSwf2viXhZMVuMDr6CYG11BFGvg",
  "key40": "MyYNQwgkpDdKgWb95PXDZXEgkspBKaRkcbcSakkGdoEd8NdrUogYxxuQeKawREc2ZGiyerRWYi86aVEDk1jq6wh",
  "key41": "2KK6XKJ64MD1w6Q2gfiJnKgJpz2PZafiNTR1zNesVfs9FzQAomQzWJ2gwuooeK1zemYQn2jQrQzzBCMfVUXbKRzE",
  "key42": "3Z1GX5zENGzNAH5SLj9CqkaZFDv2BuLCXtTk8WZGtNxguDJggi3GvSmFA4jAFbvPksdf1UZcrY9TeQuw6kZS7i1h",
  "key43": "5GZNTdArHzLBpJebt2nQzPhDSnW9gAuiCaCNyFJns9bkeV9k6vsGWkcZCzZeFCnBbxxZkGptK2ggT8RsSZRW9Hn4",
  "key44": "3R8PjUtnc5zULVgvnsnZgaSk8CpTBGMSQ3gG5p3p73oDeiFT4nCK5RbHpzR4zTjDedGqjXsE23FZuKQmvA1gckd9",
  "key45": "3rwB3sPzR7N5J8ZFWsVdfmhPx6EVAJfVkypLRafFLgXJnCdR4goK1sVajZdwnEoVy3cD1fkMteT5Pe5euMJrbDig",
  "key46": "Wr34d5ghyy4VoZHqoyNsmQpMMKAucCMqbMg8rLH9CpkigjA3HBaEHLe2BfBJzJSaaapLmu9i3g5P52GVmBM84aW",
  "key47": "222hYNGzVyofXizVkMhRRDHmqut1hr1bi8r4MtT3n4aS4dLvJ93V9f9H48hcJgZ7dzVzu3q4mwsEnQVt3dXw19ks"
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
