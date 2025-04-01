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
    "5MBA6vZVT2LsTxS2UaFFRouvzJwhH3tcupF1x7dvw1xbWgTeyUmTxts4qxRuuT9ErvjHaRvmEs2SBb9sr9r7btsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LMkCvJSoDE9mzuc48F1pJc3j5X7mdUtjM6jfqfD5MqmaKcG9tPwH3YEFdL13ptXM3oosKohoJJaSknG8poGCy6L",
  "key1": "2R1kjoyrL9i4TZH5KqXnBDQVhdLCedy5c1HEmzTZ9aC68W1WfiVS3FtSpfWVwwzRZSwA3nE9UnYpY9dd9AeDYKyk",
  "key2": "59zc1ikyKFhx3FADWLzXtbYjUydaVErXrVXQPE9jZ522hFtU5pcB95YnFWdQiQ82hLpPUHdshb6zWcLVfECua1gK",
  "key3": "3NVzfB9qjAEYqf8ST9JMU7cVyaCPokhD8LRjHRVEpKVNWp2nHrRKX14Ec2VAhCKhBpYy4UuUArg1Sh9sXVXiv99y",
  "key4": "4onRpd5iGZbjDomTmx4AFfKypTHcoWeSBCtk92Ja2ezXotWK8vBJVFVCFURiRKoBmKQW7oYrK54vvL2HspwoKfPk",
  "key5": "3TRcaGU3SCFiBBwCosvqs5PXdYGQMfs4iMcrpw2WX1DbcZzjcuNs5BWkAmFPFi2DLNdaVBNUqP2iFA48u1H8aNeB",
  "key6": "5W9i83wwKPn6iWBtEiFgSNVd3WSi8myxPo2E3vnWwqeGiKoAqX1nrw1AJr5nFtZtdy1R3KuDLKNGVsJ91JNyxdR4",
  "key7": "PZ6FQfYw1uXmyfwkyih49H2eRj1N9d3mVDzAxLsniLMT6unR9qpkpWscVsoykQob1Cxz87fmkots7f4c1JZvsUQ",
  "key8": "5DwD9YZtT37wuTYbHp5LNmWrQ7DcaLBPWTzjfQFtFSYCVLjb4xLaKr7Cfy181JgeSgiP1Wtg7FLdTEuHryn9Lbc",
  "key9": "3czoexBK1Pt1PvUMK5bdNVCB6Jf1ERPNDWZxrunDtM9KG227n3jNXAApSvJWMs5FthzUT7TKKoNrEMD3NAtXDSUo",
  "key10": "3FAF695xENrnjZPnbDfuNe4QBhPec7b2Qq1ABFfQrQuGX2PxNe7xKtGKj6DjhumTHcRohtYUK2rNrqCkYwqttKMR",
  "key11": "3FZh6jusxMHEzMsBcQcAGAuK82oAtoRqsbCE8NAtsc89NtRK2bMqbyUxqvxSfC1FLu5sHCDxVep3jQfdVXP9QZgk",
  "key12": "2a7UexBQJLE3E1XvvL9bES6HkXtW1u4bXLLLYntwCnnFJLjADrrMkfeci4uD4T9Z51g63m4pYXoamn6ap964T8EJ",
  "key13": "3EAvxP79m9fxmp8HqsvTcsgkgoLV9UkBfEQjP8BH2DB1mNmYxBEvVX3SPK1YXhFmxLYySkvdFxzY6FavHejNCPas",
  "key14": "JegPvPcoCRVpnz4C4xrjh4Wsgsjmxbue5CZXH619GZdKWwUrowicZ2rVZzTTvbjs6LCwbAuQBrDhze85MLxDDbp",
  "key15": "5Ky2o5Y2GminYD8nMnpT1gvpyukE4qh5zvD1p2tvBV45Tu6d58ak6T5bqaBtGW9h1oAe1keKAnoTigSWBc1c7H69",
  "key16": "Hg5ZJ5YoVsoXqZvMCev23zuS2AHrdT2cS1tX2PwAPhQYKeVDq5RAqFAExdcfGUJGxxxDnWE49TKGNWaSoCjNYmj",
  "key17": "4ZbGQSUZ82Hv78y8Zp1fUgHfNuKzE5EzaMBqwcdxUZuuJYnkLtR6aQDYuXyNRDDTZaoUVAJ8enxM3s4Xmts4fer8",
  "key18": "XywH4ybgPYjHjz148MPJMZ4peVMoGATq2rG42c3LPoYDc6mt4goZMFn86QovtJXuXenT1MaV5EThGtGnS3PrS3G",
  "key19": "3zfGVNF27vW4diR7M6FWf8FFWXCBPR9vXGT3E3AUa3PYAfKZnjShrtZHLBFxfgXmLePsfjqAhiD7MwjHUaUEbe5q",
  "key20": "3d2gjzVNR9n7dm5voTJDbsvQLxtAcrEEFWaymEZcApL4M2cR5S1zQajQxVUsiq8Z7bBbQHmVDnV2V7XDwivB99ZH",
  "key21": "dmoTBsYv8nhYFURF9FbBUtPegAWgMzYex33HCcPKnyec5P3YtfdRvtZBRWJriMMdGdWrGiuRpjEtFTiTjdMxBao",
  "key22": "32wSauTgFMYEPtmyKbwcrDQZKe5KBmcuDmfYkjufXFKXcZhDvGfPJgaB8miLGwHoDSJgX1Rzbw51YgFecSKb88LT",
  "key23": "46EhRT85J2zREGC4e5f82Sqx682oXdkqCF3wJoGsfQwr8rkUxmj2EXsi2TmvD5wZsuNGTZU361vbv5m8pZUHzFo7",
  "key24": "5gE8i9DobD1oq8SBoGsb3auRjDDcAhafr76GUogyZtYC3ptjd1LjYjak8Yev6pwUPnyDFvQ2pkZdbwsoQRdmxBhu",
  "key25": "44DHWiWn6qNhURxc4xdTYU7XTTeEWAU89a6j4GXSXgF3C6Y9mo9uXoVDSMu5qKN2eudsezNWiZT7JpHKq3WTGgoZ",
  "key26": "noD5Bz4Y58GH5XeWmZzBUerCeKZU6bdFWsuWYnY1BZ43Sj29dsZpPykiqMVJcoKxRbRGJ75H54oEabvhew41u7j",
  "key27": "5m7KgkueUCQKczmhLfEy5usy4uEK3fxTZ3qxDAaSxE7MD75b2TthGy7Eci3cJvTvWvGkj79TqSU1QKDbU4abkjw7",
  "key28": "2w7axSqiKeF4yBcM5usvvCvcn9whgq4ywonXkNmBPNGWyBHAX37dkg95ZWUv5arLbjvpYo9n848ZBJpLpPTQDGoc",
  "key29": "3B1BZgkSu4azC7T2aW3RGP51MUnUgEg3bZz2aamJhh3epbF5WAJu4LVrgp8YE8s1aWTcZvH7snkq1gzWyyMKyedZ",
  "key30": "5SzeVoYmrhRGptYVGEWUQbtWVhp7SnjoEfhkKFKCcXDU9XHUwiVDyJ6Qmf72wuRJeAfcpGNsXj6UmnaHtbD1fSFE",
  "key31": "24ZXdBdQa5qZm5yXxgBu88NEYq9U45zXk9jH9qJFPjEunsFunGihnNZS2pQ8m7nUVgVBUoNqCApQmi6FdkC7bqHk",
  "key32": "46hsvvx73HnkAkkBe8vCsU4seuV2FyMA8Nrh7JEALT8CmarVvLpauXiUtAHULtAdck2BMtARr4Q72ZLepZ6xeitt",
  "key33": "5zfQSczt2tCp7FkCYiUsqBsHzESthJdgnboxzNUiV9e2iquktzUGe1XFQ99HExXg8HTgHLr3i2kjs7sEJ8wUPu81",
  "key34": "Pr6jPaDHwYuuqi8Xdy23uAQrGf8sMYWQepmjx2sEZHtzsDKVwJc9HA6nzXHuZgVsCb4UTD4LLpyrBmSFKDcdsAv",
  "key35": "MdppWNEbKFAnFvaxgLp1EcCBMG5dc3KKBgp2D2r5FNsk1Z9GommCyiHQRW7qYK1pg2VWzcktdvUagLawf3kkVtA",
  "key36": "22LdQdHcXiRvxnHJgd97VGdttF3tbT1JfKsXL4dbfQZKgSEHykD3x7KuB6hvkiyVrfQZgg5wAmCEE3YYbcsRskMn",
  "key37": "5XyAfSonyA2kcj63jyuwRPkLJC8iMK9FU58H1UGrWyJr3qfAi1hpm2suUBMch9oPeeGDYmQjSyjTbwAcBDw1zMYu",
  "key38": "4kppceks3CAX4aeHNwAj8U2QyU9Px69Xp7w6fxdZfaGts7mZF3HcfQUwj9dQUTDm4Cjj53Ct9krw5ieu7XKb7ntz",
  "key39": "4EMCiNw8uT4xWzokvy5qufMLb6348BPKM7TV8cFmZMTxdiMegZQ8GaJemtF9o3sQmdComCpZsDMFBZpzSoRKQBaC",
  "key40": "4UL8xZi5XwmJE6fgE8YYMmepauwNXK1STq53xsGWSLzoftHujXGJ7WZpanXUHDmwYy6emXA4XpuGXs9g97deq18t",
  "key41": "3tvZkegGv7HVCPNskLhwDzRvogWBa3t8ecxeSoXNJtQPLBLz7uzBate3m1SCraUCBMibLocCC5cQsKX4nicoKqpi",
  "key42": "2mNzSV57AeZay6xwvrjMzJkeuQ3mmpP9QLpZXaeHHjiQBGzWt2LRkJbbitB3pXNcMarn3aPhbgcWLpDdCFA4dHyS",
  "key43": "2Z5vSQJmTYU4y3eae9DGoEkn81acFFafzDqsQxPBSAqWz5Zf4Yzuo4Y89yFMrACHXmcJMnw7PcHBPofiyf2YB4rt",
  "key44": "32NfgviyvjAA8mpw6hnCVufNTiDcGsJdJ9zMUfjxK457GPAS15RbeM7VeviJthc1FscRv3ksphtEBFTVKo9zAzYY",
  "key45": "35ZSeetWwBxufZqHP4qqs9hnsx6Zqrg3p8akabt2Nc3jCUggma5WbXUXwK8zG9iZQxLwoybMXgdNTHhwkgyFG9Rr",
  "key46": "3XoWAknyp639xnycPmQrUezZxrsq5VT3DUb5emyWKqNfE9GQbyw5mDoPZjurtPLJ3XnPpf4xBiHSqeUZXLbHJskq"
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
