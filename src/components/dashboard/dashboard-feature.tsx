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
    "JB6iatW4QhLADnkC5jp9tqo812YT6wEY9HVXx81dptQS5Ai71ouAd5QhGsCcXuaZZy3XmMxjdAzVZ3RbL6aCfnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nczkXZbsThDqNBc78HNccFxA6RPkzLPmHgobjGCWiNYvnZwWPG1M2zfWDgoMy2nuNH54anVvBg7s2V3zpgFfPiD",
  "key1": "2T5PsyZeomwqzcy1Yim4pqrNVjfkos9NtnneYHNKotNYkKkuVbP4SscAdacmipGjrzRC2seELCoZfRJ7HRt2aunm",
  "key2": "4e6YcvLb6P7okJXAdagDrZrb65dFjK6fYXQYjJQ1tGZLeKkt3ayQJpdv893Pacp9kmd6RLKLR4Li3XBT48wHykvi",
  "key3": "KRRAccb3dpSidJa9XzTfH1kEX5AjbbvQEEe8BVzQGwbrqituBB8UBMjh3xE3YhvkhygnZGmx158MK6UvmhY2bMi",
  "key4": "2tqDo2XcFCyVbAi4yf3rHJNvnWujqVFgPb7zVrVefJVVRxJmHw1F33g9v4YsF6kqYsbW2V5LezJVRR5Xbg8GjGik",
  "key5": "3zA8SLELZihurpQifxr4n2DaAPAFbVLAAcQWtaz33xcBvwNuqMruF4Vf1kNMqPKpGCXtPBkuHy9YV2hDtjiXmj9U",
  "key6": "4xPMh8HYyuSAASqwSJXtmbDEWZdgm1VHJBDJHMT9GMvmdou3JKf9JcP1hgP12PmZXUu8C6wXFQzsTfUKUBprZC35",
  "key7": "3Ym4t2V1uHjRWUVyD9LPiNv7uo6HtBZfKHbxgSw73NKDvhvzvfYrEQZZdfDboPQo99stNJGRaq6AM2eEXWKpQz4w",
  "key8": "2tTkh9sNsXyRmU3Sk2Wt9wtYTgRhjEevhFWazUSY39CmjT22KAjxEcjWt5B2q1hEfohryiR1k4S1MtCVMYsv1LDx",
  "key9": "38kBEDKoUcBhCTZEojdmq5n9Agzm3UVdCG7KvtTqtHYdkCiixznzX4d626jVsTTdF8VSDrmUmqd2wjGaaDAYF7Na",
  "key10": "2MdTS9BckfuSSnEUijr2ohcKmbVFhqRZBWdejaaPjNW2yi1LeeCmuAGyoDXQfShJjVSXTQ7pyFoeoG5wpA5hv2ZL",
  "key11": "58phaXhH1FoNGASrTz9LrWRjdX6um7fj2eRis7GTarYurkKuhmU62CbCF9h9NeWsKXCBmE6RyZM6os6MXrakrgWH",
  "key12": "Pj7x2tixMb2e3DAZtDDJdw4MD8q7qHkjqsc1eiPidtRSw4pNTZfRtFnj2oitKAQLQ8DcykmS866AzYmpHwQSxji",
  "key13": "2ZCQL1oxNrwEKRP2DWxrsFmyGdQtqu42C71PFSMuR3JpV6XKHnHsTqPFyMQsYcW1PCXPhgQJjzy8x3uXYC9rvt6r",
  "key14": "3K4nBM3eCrzu2PE5uihbhAkSCwVDKMXJicQwwMRqTi6kCrNqK7mb17TdzXCBrVKnnr1xUF7gfysQupZ5hqSHkEq7",
  "key15": "2eLuUoMwuakLJuLuWi1PQyser4m5F28FyfhVTpE8FXd7kSHQt3rpQJgNSSFdqGPSZhRFygBrhUxE5qZMhDDeVe2a",
  "key16": "28pefgBW6w5WocN1W1qmJPeX111N12EtjusVoYhMAsh8idf7DAeVc7D4FmohZJv77aCpibNURcCfW9jxzADR16hB",
  "key17": "5SLq9tTSkviKDvDxFgTJEofGBm4XmA6rwWwuLVJiyi2FyYfEvsjxsrkpzb9NCkUywFGBuaX71gsqGFBp1EHF9tTg",
  "key18": "4UXfVymLUfbYhtiSuMXin5moLMZo4HSfQdbiYUovofV653smoJNKPXvk2xr3Nvmo2sEUnzgFYH59dB9zj5F7qb2D",
  "key19": "261pouYU3RQYS4VAdtCwAbcuKAAPs1ynQiAZiEpHirHe1S5vF1cabDpP1B6wDxGzoUHpwNfecZWby13XiVBLuArS",
  "key20": "Jj5zPHcXKdWxzmJq5mj7KLqShywagZb8r9Chkk66oAFJPmyrdzUP6K7ozceUqoswewCQg3rc2cu63XretyQdYW9",
  "key21": "2TFL3858hGTeG9N9jN9386LgBTUPD7jUQvb2RyZvSX2invasTs1gg2PqMj1WLuRkHbggesqD82vt8h9jmdSSo1wu",
  "key22": "5egr2rsPcNqPXgj4yBjVoVt9sdDZghU8QiBHcHsUhUcNkGAXF9bsVTfVisA4F8BgbkYZo5dPyoubW6izcXwkQs7r",
  "key23": "3VZVp1SGZzpQbfDd5EmJV2ZCKKCQbe5LMFZBASgwtE4873145fd4rwS8r853ZW95KN1dCajBL4YEdTA44ZYkNFZJ",
  "key24": "SgqbQxBom3UUA3KT5Xqq7ZT7LuCsTtBSyoGYuQZRbcZN8K66oMJWt36fRyvUHZov1AMdbr9zxDhtrwpECeULFZH",
  "key25": "phF81NhaWxdzjyPJLoSmmN7c4Vwf5wNBxUJp12DUEj793oqM1tFsB4oaoHSmqn5miTaQs63A99UMn83EUZ1d4NX",
  "key26": "3ZgBbp6fTrXVgXSVoePrVSekFfydtkPFwUmedhgS35G3TDn6hiGzn4SSLckQJAddygR7vgGYMuJ7eboL8jMZcUrN",
  "key27": "2dhEJs284zvRAeLTRiypw33F6Cr7YbucubbRcE7J8HTxMpZdfV4qAiFDjXSm1NNJxKUAsr8LvswqFgDnLynTGByR",
  "key28": "4jQvK4JNunPWryG5TKVRpqYkkv423eis8AwQVikSDJ3EWVbX6q6G7aavs7BBmq3MLGQemvRKNwfAobfamLrp7zyH",
  "key29": "2sNhNFYPaYC3sC7GsiSutJsD9kDG1W7yZ2tHbSKwtneinBdBNeXBHX8j4Yn9KVNEK17XreC81urvnYWd6zJyVNkR",
  "key30": "26Lw3aXgcrkWNmVL1s17QjVo8fDJ9mCoCbSfkQ5yrARAVDBRGGYNK6HDS17YgMvZoicK2xAm21Mghk6re9AcQ73F",
  "key31": "586aRU58G9k3gA7aYwhe2nWaWNYzetdqRoo6U3AHfY9A1A99H4sqeVvvQ56tQeTDhXLJ3EkEmtc72o4PkCSPSowG",
  "key32": "52indEkLK19JSEdixyLihQ4YGgxJGwkaRhX9uhHZqWMF1JbqwTtjYYDnXVB1GpeRQ1JyU5MABws2xenKjce2f9ft",
  "key33": "3AP18GTSjUhwMYBCwnTekLX1ZJF7NN1z6JvJjjLnCfZdVYDQ12opUK2TWuYn5tdEhQi7h8QbLUBRhV76FfrB2ECM",
  "key34": "5Bd41q6iZmHvTaaRxURyt7asroiF3FjHT4MMeSMREBiJCLoTdzp9nMCdUhv91tweBkZktVq6W9U9uXHQ31ikqVue",
  "key35": "3BpocHMkchQJ6HVizp9qVcYA6VwFRuECh2rPC1ryXyCjhnp7TLEXLBg7btyMW7n1BJFRrRcMNrD1LC9SUCHXmHN9",
  "key36": "2DSb46j59aiwW2pu1VLHGr1mgMugYi6s7kLmHFu2PJEZbTkPZNLFxuVtpvaG59idevLhKoREJvtki6eHttuChJH9",
  "key37": "3DJctD1PDeKnK6PndxBeEqAsXbnuEeUB1cFzjmPZahASQsVoYxniEzGYXV9WxPV2MaS9NFGKrr9BpAcNeNu7a3Wg",
  "key38": "3A2tgbGnSd4RsA9eGUEvt8vAZhPBHCcQEanoJXdgQUNKnkNfz2bSPLwiGxwMxckZK6pytmfDvB5f8C22q1jy4pyW",
  "key39": "4pjgof8fwaZWDAJ4jjaVECsLCSW4DUhiEFUm4EtRqCxEytVpwgzG7LrpFXNi7NcMerpFycpuAoZuQ4myC8TdeXSX"
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
