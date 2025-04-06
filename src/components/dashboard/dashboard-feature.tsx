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
    "J1fZ4eVkMN9QcVsaxz28jWmpnWsdwK88LkFDJScz9fRAvPSiEdntHFqQFPXy52G89yghkra5Md1cUFFcdSwgRiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PkMNJxZTwd99VM27zA8kKqbBx82SDdraELWXkGWoid4J2Zjq12wzW8vZPxRcuaRmXZxxd7jFb1MKJWdFQEujzp",
  "key1": "4feabUwCzxrkPAKmAGYrx2o1WDfa3hC3WD54a2HWHHdpZQ689XzugAgam6keeeWvGX9ASaganaSb3UA63CVC4Ga3",
  "key2": "5Z6ymrtvtb81K1fvRaJkPZm6hyqyTgF2FMKXZ3wZUSzxU3gVCBbyZ7nhNgYiKsnYE1VFrjSMAccah49b7F6J5FGL",
  "key3": "39VusLUq5q1MobETeEiiBYyFTHUn3iZzt8dwJoyUuVgWZ1cHFvHcCes6VWCE5oKHWPwQDrN1TEcDK8zE8zDb1moa",
  "key4": "5dVX9oaJegMCDkuhRQ24ykgjeaXmLTXooQZDbxtgJBTB4EDmcEK2eYGqP5bMWD57NV8833Ce9dmczzExk84LGvWV",
  "key5": "5e28XbBNLAp1akHPYPguTC3w16tMQPSHpbmSw3qhchyaxhUizkt8WTQmbNjJvJACzxpFg3gi5kiRBhWpvmPqNoeN",
  "key6": "41VEdmJy3SZ4pWuHRsbRcCmU7upfDTFjEw8f8LwnSo3LPJe1b9ciQEosfz41gbhpqdYuYKaahcNf5VNMGVPcjJy5",
  "key7": "4S1SqjUvH5Dao1cQ1PGHnegKhqeNNpQiRhD3MEobSnvtJW1E46KssR3atDEoiaj5LkKrPvKueMKWVa1ajL2dQuWZ",
  "key8": "5Mob1Mo42Pp9bLQtmryyW4xQCTEsQixd4rJxCsvoAktDZ6Ay2heYKArjiX8etX5ZynSXDRN9Tg4ZoeFgGXrwu8p",
  "key9": "5G3LHCdzsTNhZUxJ8L2yNvdXFUudveLLVpheiVKYq4u7phTM31qpvtFWqCbG3jXjLZbfJBik6a2DnxymvGCkiEXN",
  "key10": "44jwQ2u22cWHRk63CXxue7Q8CHmnSjzXzhxPRYc4TjxauUVFUetFPR4bUxh1q5KULUgHZAtNiHonGQnBkjjXNsg7",
  "key11": "i3KeNKzAn4VDJLtDLz3ZfPq3JQsasQoVXtCP2miF86U9phgfcR8pFV9hiRcoeV6ZEMwwwq7mgdiCFT4nbR2uKDE",
  "key12": "3VmAiU2HJMmf5q3jjcsgk4yrjFLxcETqpHTD8YZDR8tNjQVZqrofzAJobEqKccz7c43STZbGhrc2SkuP5xK6js1F",
  "key13": "3iMBH8cryvKvqeABCASDe87xGzGLNZ9D4VtucfaWnHPdFC7fJzQ272ae9EjhEtKbWjnczTWUrT2DxZpM1MdyVN5L",
  "key14": "2DuFy2SJMysLWo6a8YzFauBRgKMwBU9rGWnNDwxYkdAvo8VNG7zQDTgkDKdgPden8vGTRABa83XaRzZGk3EeK6Pf",
  "key15": "3t5Nmyck4jARn3oFb2krosdxLASQKa8epAeLLhNttF9amJp1JXG6nkwM2zdZoBuGyu8jB5ccqH6HWJ2HHWyx3hfF",
  "key16": "5BRyv5eG5vW3FMXhb5KynNjnRhYUJkqhVymwCbrgrQNVtrun4K7PCPxtRsTYAiqd5VCQQ5pjGpZnBcm3YsxLSmET",
  "key17": "3WKs4accN374EHqof51mBZo3TRNdHpVyUhi8NnYaDrBFWmAeLo78AM9FaUj5Z9NtjHNgDrwKZ8R9pUmpvfv7PsUu",
  "key18": "2s1YG9cfRHWJqyGYEcLLdj6Fc1xBizXucDWhCDdHcyE9ozEng9uS9Kicu7GvLZBGSN8EpV25rDUer4BKBdKwrKu6",
  "key19": "5F5owiir1Jrk2gJPJsN6X7mk7nAEwSNXYmvXwWqweiz3CHH41zuLXhHXjiUedPrDX52rjjkA2JEhemuLS8EgLMYF",
  "key20": "7Hvs9GW49JHfuKHcC9EfGeJagAeTSuVmfmjnqz5u1W6ADLLbQDojUzabfpqwZbb8BC23s3ZTQC2KifWwFBXAktM",
  "key21": "Z1pjM74P3xFqpNS8Cz31ZEYEEasGhYABCNTkhJ3ktt8HsSRxAx2KpfkpMHEKDstkVhcPuSyHgQowfeg2K2jzsgT",
  "key22": "462i3KoYsY17Vf5WE2XtN9ZQyUFuhwobZnkwPbYzbzqTkNakjrQAkEWVFXUFZA6nJFwzV8zm9tgLL7yAp88SKmQt",
  "key23": "4F2bqn6eneRydTrum6zg5fcpddU282HY5tBYpppdAnKjkmfyUUCFPtAPSrYrBoB9gLYzpRxEvaRX6NKAhzFXQrHa",
  "key24": "3KG5tuKAewjs4HbhHgZ5t4RXtu7N18PSHK4m3CU2KBk6knAfPUkVce24opw2BNG2ErkV7cg3PRYjDHXuFstFHvjn",
  "key25": "2u4t1yHDirKbqjb2cnnQ5xa6e3U8s2bSfVEGX3Qv5YeKyAjzBLeLQgo5t4PaguLYhsfiz8b9PamtoJiXg8EBhjuc",
  "key26": "3Q4GB9VH8MCfbs5SvH9HedDYELY6zBdAEAqpeN79SS25CuvGiMfcTogAEZzvfUPeUkRBUdAh2UoRZuSi3cnwkhkj",
  "key27": "61KudYsobhZsSXWRm5SGWAZvjHhdHRYjwqNcjzpF2xdmhYcHEiix34aUt27CgSp939bGxiTmYCfchGLDaGJy7QuR",
  "key28": "4divefyTXKPAHdqs9XRY31K1UtBjkEVGNoZd9humxDbLK83MSFAB1fhHqRiiUKjYP5AE5QXbV8NgxoJLh3Mxu7bU",
  "key29": "UdoRmh3C4G5BMN5WT9FasB3uLkYFo1XPK8nv7tM5gyfX7v7H1PY3UipnZft1DLCUwy9m949g5UMYpMFXvy59KAU",
  "key30": "3f4uq9FKxbKtbCagXEiwuCSPJhanoM7kX9fMWTt9fsrb8xoqUJUcBm325YWMdFDm52uoGwWAJrH1jZG3hCPHfZbT",
  "key31": "4nkRgH6auRr5JKmFqWb5fi4QRU92XL1W6GcDbd7AwbWfds8QkwoQ2sjLYf75WC7F2URoLK9cf1R5b4JUSoPBatjw",
  "key32": "5d2njRBhKmg2yfe2LpudoRTjSwACe63zNVjhSf9P5k2gC7jufJ7SSrZZQW2dkx169GzQji7fj5nwreEzyuVLZHvb",
  "key33": "2uvcXEJRCtBWpRCLNWNzExBbFZvnJgkubEuBHzkf7dnLmYjSjDCJ9eTM1vqd9QaQ4XA5PVDcDgmcGppWoKuCSMnJ",
  "key34": "5SJm3WECAf3tbVJHoetg927nN8hnpP9eUydG74RvpJo3hSdSkorHm5Wy1fPXwSUoveiztbxNLxoJkXti5kSrVgZd",
  "key35": "2EuQZvt5nTBztanXsvCqni99md4hVFUzWyJwa2rutgRZ9L321UD2XE24598ZqGcEnv4KdMr3jyAGNGt9oyjqd58P",
  "key36": "4dsejAUPASrKt3KArbFc31hiAwuB72Xgw5q2Sq5GAxRKkRTwU8pFrSjETcCg3unigydn9vrpFFERr9dSL932eK5J",
  "key37": "4kY9QvjM9E7sfGYqUxvky92eT5V7NcHXiKiozPR12vTtiPepSsGN5Z1VLkn2Ky8F2nBsSjQSkmPBp6uafYTLSerM",
  "key38": "3eJp33QNnVAanzoBN4AjMc7WUGAHPF2uqUPNn6uwnFbAnnBYZBaYvhtvNRU3N1HXqcE3fQ9KzQPJBQaek1zYbJ8E",
  "key39": "5mVmcyUshU27wUQT3qd6Ho3HZPk5YGVrHXywkwHWFFbRXrFHVRMwPH2qq2pzwEFF4vtQRyafL1uq6bGsKVidLhNo",
  "key40": "5J2CGSDbMWzUtXXJACPkP3cxLoyzgfwvHcbKDFHAVEbs8EG8pR6D8m9dRdQQP9DSnWainJF2rAzgH1dWz35eaA6X"
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
