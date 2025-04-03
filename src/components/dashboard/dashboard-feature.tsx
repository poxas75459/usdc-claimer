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
    "4W76PsEQmghjQ2TxKrh4AH8nSXhpaQABUBfSLZKqCnnUNnWtJeebHj4DuZRrjgJx6u6fH6gHYFFxCCauQ1QcXyEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5meFVfYGBoQ4ia7LSgYhvPm5iqGnd9kDDeYaVJwU9Vssh9qJmqzFDU1X4FJjfhA1QMZhg4PAusVan18ZTZrWtcdn",
  "key1": "5S1bWvU5ztY9DhPriU9dY1gQBo28Neeb1gUg8hSJ1fgt3N3ed9c3snCQ7m5gkxAFyshyLDXsTK47zn46zcek5YZQ",
  "key2": "v3DmTsew6bEuB4ScxkhgzSvhkbiuRZiH4ben1UMbphMjeeWSDMD4KsWT3AwryaqZi5Lotzdaro9XKZhi1kwy5kY",
  "key3": "iYbQScEYJv9uNvo8U8nRkdLMJ2EazH9PFGRe9hXBidoD2M8856iKqKdGXNEBSSUbm4tVGTtiVriqLPEmwae58Eg",
  "key4": "F8aZYp6UHDs4zxsZCvnq7un6U4yzSEom58MDLHnFvBFX3xJcRZbNNaCnM99V3AgoSrs485YqJqgjR62696yVRZf",
  "key5": "AB5tydgZxAPghAtPGih16i3GZhR5PLnrxffSFaMtkdZAFY4kaSoJof6GppCpWww65FB5ZJW41PpUg6pY5kUrv7j",
  "key6": "occxdJhhJWJY329TvCit7ucmYg8R7UiqNiip2aKTV1XnKE64wtCaRuDMSqqKH6vk546k3V5UGYEoPeybaMq9hdu",
  "key7": "2rW5Kgf3AJWun1wtuAdqooqBdE4KfqJnRbSaj3bTJrhNYwK1Wn9HaZ6q3rDYMriT6xKct59yirKA3yZ8wKw4tAwe",
  "key8": "3A8V7437QHqdGLqw1zrhQ2RwWGjwcjJ8qMibveiv2twFM5MQ6Sr3RY6PT8CWeXULCTNtN9mmeA1GS7adm5c7nikL",
  "key9": "4QYqyCsHwAtuFot8zJ8G2pgmmgjncqm8eHmC8kDBsC5pmPgkUAtVZTPsxvXJdctzo9U2wYPkGm8W5VwrRvEoKB7e",
  "key10": "xj6MXh2yxVvKbqNuFkxTJdNJkHBLnzWJcw8aaXMvEzT58daRCAMAnb7nPz34KXWYzWf6mEoakggUvFoAcQMtjEX",
  "key11": "2YDhNXpBPk9DeKYJMz4hsnm5Qo36TcXESVhTSd7kSCZnPw8i5sBKQoGj6yYWJzAqJxWusw7Lo5hqZZx4ukzVF4YA",
  "key12": "4QRKcTmMjkrk39yXU4bNysCH8Zg9ZKEs2W33vKQei3CgSWx3gXFtpafW5qJbx2WnD24Bc2rJcmiQhaVQLMYHfhqj",
  "key13": "5XHviskHQa7CekfQRoT2zBuDPJG1yoWUYWW1foBqkk7pziuRYS83yPRqFWYRVuqqbmGCha8ixcj44YrtGCjvzPm2",
  "key14": "5xPwa42CKr8zSyxr36uTVqnbxvNBFuu536qyFur5kN12VzME5xceG2hubwFNnkR5oaPRo1Qym8NLoQtiVEu2weqB",
  "key15": "2CYJauTdv2rVT6LziChBYC1j1qnZBGVdbxqmaTwkoceSPCd31fZr7mFJrBCrX3D7MXS41F5e6PDuRRhgUViUV4KY",
  "key16": "3RqohK4GE4G1BN9cB7z1UbJchVsVqf7G419qkvmhtBtKkLdaSgUjpm5GwivVqvMrKsD8rXFrvcckP7L3DvGjkatw",
  "key17": "4ggPcyLydEGvTLCj9PEJRiaimhcKTRCYDo4cZDir6f4skf8bZsUowbYitDkHgM6fzGk2yTqcJj4H2LqwvkPb3LKs",
  "key18": "3rBEwfLVgkH5CmZJTccsT8KjzYUX1XttbJHbtb5msbEkDxXmV6d1wsY9BAD9GsyedUjCJoArU4mRbvMBvpzsSX44",
  "key19": "Hommj63nPk5S6C3bZvoVcpTNr7crzhGxKrXc7zL34Enihq6GmTDUANmvtcUck82TuZ3A2LLMfRRviJhYVp7uEsy",
  "key20": "3MdEseFZnijDzHWerpEJvWMg2XaeziyerYfw3N1fMzUqnXSadmxY2LgGMaAunjBiMZHX2TZhuNZmBAy64ewEzA63",
  "key21": "2KGTyVQhYRpvV1QDU8E8PH6yyefZUTr7kQfCzQSr26vviEzTTWYHNFuNNjVLsTBjp61mkX1dDW4pmFqSPVMH3YEr",
  "key22": "3DBcEeNo5pwcuDzjeNYjWAq7Dx73Bx2s1fGQZqRWiFar72dTxbFMpATXqFTwVH4A8ZShyX2CG1pdhjUKSXGe9DQ9",
  "key23": "2SepsEjZavRqH4E7ARhgUZqNvTsJgzGVSSpeQ8D2oCM6widJaKnyhCSCK2BwEWTnG7JLEEahFhy6ZJQUgoupBZPB",
  "key24": "5RZDB9X92uLfR6yxvfoxSYv1jfM5nCQkoA4dC1f27G22acYUVKbLguucTqrM13AZJddcE2WgdRWhWqFKdrWseANd",
  "key25": "4uZtLPjpDq8p7Pcyu2cK44qHFCySu68bfPs5gPQqRz4SQDectWneHjcCyyGEuCX8NFjz6CNxjAPCmSpuSnHG7UGo",
  "key26": "4uoeZ7FfuC97qsEENs78hqK2QFVpgBshypRcFgEaZXJW8VgX8cu6XVbuXt5cHZiRNa4bUj4hV5DpQbkcKo8uZLQm",
  "key27": "5ciFfyumMYcBDeqEdkgapHKWeiyJBjusJSbDFtwzwHbQJmvmT9BHv1g2YaCmg256TmPM5u7Lxhkc17q8MDfnH2Fw",
  "key28": "4dwUtkgND6DWsFME3QqRAvFHfSNbUMhrSntpeKrV2SdDJDDsZZLsrdkYRvk9wtumAyb8gKRyGERpGt85D6e7tL3P",
  "key29": "5oZhNjJdtidyQy1CzRNPwbNMaywZQfdnyAJUnS39LoTFFoLRbJVT5NX6v2ZmVhk5xQG2ogxKcukcPbWyj71QZrHG",
  "key30": "62QLbfAHxbpZHkYCLWMN1xnFevBUEaQ2iTBvxsA3weM5mXfUqqZHoi9DDgGYKSq1Znj4FoNk5ov48CLQJtsDB64E",
  "key31": "2Vzj2JpbwRcj3Wm8mD3SLAz6A2kaev6wykBXT5PwJpi7kxzmkaguKE19378v2retMZBz18qTViSxC2yWAyshejb2",
  "key32": "5HnbhxZKLpjAFgUwVpiWBDiFw7gQxwEcesWshNyNLoQjjLjY5m25F3S9do9bWjSgTRQ4oBKX4ciH36pzkSUTzzbX"
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
