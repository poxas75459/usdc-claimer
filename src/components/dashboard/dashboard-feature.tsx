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
    "HD8Ve9FzgJr8ZDwkY716khk16VDNoFwdSJPvBtbhXz151fztX6r78cAKSkw7GLREXt9BVh1gVkvoevmXBNUzq1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teohvpw5885x1q5jgVdcnWYJdqmVRPZEQQFoh8RgGduzZv5ncAS65FZxsSy7psiyevVV7s8tKumWacMua7CmUSv",
  "key1": "4sdSC9Ze7B3UJXResX6YKLnKg9Go3xTkBBubNRTBumLjjbLSWtqufU2ffMmW7ohm4mBhJK72VdCwDE9pXsmo82k7",
  "key2": "bp9JZTv9zWQzTaVSg5psPtF6zaZb3sDoCnrr1E1T65cxzRF1kGBC68dbHTezwGSezDX8m2Jzuu5cZoa1sJUNtWX",
  "key3": "2fuubKpNCbJWt1WGJksugGuuoDSPCfhVKb6Q6LViRfiaChg8KBDMT8jbiE6ExnCRhetYRAMjKWF9kLeLUrPcnHiC",
  "key4": "FpBzZbMyuGRr5MfuZvCp4J3ot7ZBn8EvwSryEv8oFaNRrTBtFoH5k125aVr3qf7ZZJyPSsGWkfTxmH1GTAz6cmu",
  "key5": "2j3YkGu6ieiVkKULpzHsq6Kpvr4boMLUxAE1XPHEbps8dBb74WDDjErmcxF45UawTqJh8HctmpMGhNQbws7qLmE1",
  "key6": "3nLd2aSzzuS8AJt4dL5LzMzu3oGAqqXNbxxNskvi6u4VDBSQoCM9QajyGuzhXYNRfDX9UsMTCWXsE991AiNw1QZB",
  "key7": "5DbgztyVFz28ZrGmRB1FAJbRLo5sHuKxnyfnV2so55fkqbjCGbzdd2crMLkSsDh97ydp64AKNUn9EgWqnNP7HrSg",
  "key8": "39TZ2tXp6e7bHtrmpuJaCYPTrnyurCbpWwfNoepsktj87mPA9i5FE9Emy7z3qRirGvAHNCVts2Gx9NxiDJ9nFZga",
  "key9": "5DJBpTBtG5ACJz2sYYGwxgutv7vyAsq2PdFyVPsxkicwkfJf16ThtPuc4wwuQbuFJw6z18aeadUqmG8CsyNSNhp9",
  "key10": "PGaP7vbuu9LxhK78Db2FUPuKgqPGQR9eFBNcrv8Yt8KPpxztYkayWjGct8z7GiHidWcQqhtdgPLaM7onczVGYqy",
  "key11": "4UqpD2yTnhcbhUCwFEokLW4GkSuCrrwDiXkoDFph8SNTtfgZQCoLzk4NEgLhXqdVc52JHPhcRZisKb7tA4zHp17t",
  "key12": "55aG7SprUgAnWpe2u6guZDiA3AVnvpDpTBJQPM1XYkkejTCwRjnHuNVngHA5EvumSaskLvnkSE248z9BnpZ9b1An",
  "key13": "TmoLfhcptvDebVRDBrE1JB8sowc8dcBcSHtfhnzxn47NDWbmfPRXTcdFTabqBBFmq9qL9kuRV9ppVercRFVveVb",
  "key14": "3H6HDzSBWVYX78csdkUYW6qozDYKJVSRP9UowXHRMiB1crAcoQ5CU1WoAE1tx85gzi1C6WieMaTVT7rHyrLMr8zU",
  "key15": "4tjc3poFrsDYvHhxEY68GoN7hk6mm6kmBDZjZMXQ9efTie2ViwgN3DnygKrv9dX9CqLYazWZSYBoQCWjnWA6az7v",
  "key16": "uzfiFpKGnDDhtPS19KiRPL56SMvC7r2WmP8wZZZAs8XU4swWYVmaChT4pPXuUmknqmodeZHeLTk7fU5j5vs5YGu",
  "key17": "3CycuYYANwcd7R6FhvGaNNKk9rL5yNqYMcyfNYxZNYevbivH85Rq2ZXsKJntoraz2JKgbs3F3rh8NXMiLeQL4VBm",
  "key18": "55xyYGjGaBScWm6eVKuZMkXXJVqu1Xz4aUuttw72tahqxaCqpE7aU8qsPeiyKS9XYHBPRKQxXFXDZBZWyUrNNe7v",
  "key19": "DvhiDveBqy8bwaMU6r8tNLDVyFxbfK5bML9XrPSByY1XsTQABWSf9paLpkquRaiL4SNqtmeW73VpC6xqAh8Gtov",
  "key20": "4feoHmHtM9nss98DbjzwFCuLCR6gKcB4SuHrqRDV2ovqEg3opuc1RE6WGYULPwExB2QxSA2nv8GP9wCvNDCcb94F",
  "key21": "5WhmAMK6DcmcG5qXDtsCdurXu4fDPmExHcpLoos9TEUaD5p68vBDACRWmZqhT9geqCxfdCNoJ7cgPKGPRxbELs3d",
  "key22": "5e2FuW5TkUswe5YhuV2d3ygpvYGPzaTJyEGvGxVByB3oh4QP5McKkVfy4AoPKrbxGK1PMmedsyV8qfFCjqEmYtvm",
  "key23": "2qygdT9KPQzPUPuiD5NXUMygY2H4Jh6dxadY2mfUhz7U1KLtAzj3Qgua7QVyyZQ95rY52Yve9yjjBvS2C36SHmiS",
  "key24": "2ZiEMhYDi8Z2pJJpESxoLSRp17kt1btUSdDz3jPxEkAhG9m8prh7KsRQ1ycNVCNjSVa1hSaT5eJKmjGbPPXyBTCj",
  "key25": "2LjBBxLJnb3hASdSekn9NXTCYYgGuSS8aHC3EFgpzNaqog822uKoPUy3Wq1tnTPEDH8fhR7nYqrToPc7hc4wg3B2",
  "key26": "31Y8JmdgSo9HwdcLLPbpvgzBvM1ELCvKBGZZxmXYRXA4RNkaKEDRoZHjtjfagyPMnsXJHFxAKK341CoCutdKAbTY",
  "key27": "2wLVVDbnN62pwmaK84RLZHFTEDYhqoJFS4hkHhL1EU7oxHgnAPNeN3GThpMjfPa8CeSnzc4eeXyVqQryZn7uWn9D",
  "key28": "5nuFvCMwA7SS1Tmwsov6SkdC9Qssx6uRaBLtKPsn4nF678v4Qdeoii6B8YpM4isAnqd5G3srq6PRA212mLSgBcby",
  "key29": "61A6qZjHEgLezkj3TKu5ARVZepzGiEopEgDiytYme9YDSYkRtgeSBZ8Wb7uwounJ7UmygbacFkAy7xx7iPGdkpaC",
  "key30": "PEquCEL8dcH1m5ho6XxDYP6bgNu99MNPxrxjcGjs7eFfCAWeDqUW24LHKVa67YBpDyhXw1pFDzVXscN5JdPzGJz",
  "key31": "QSxXXuRY7u2Ak5zzAzHNKdtPCekDQuVMsjgi94spNnH7Wa2RmJKsFHV9Bcp4UFadGjr1ULiSm58JKjgAZvsePJT",
  "key32": "5DwuVC5WnmqUQeZhqeetthZ6c7K8GhjiChDJWqQyaN574x4a1tD1HEjMosfircU8FFx2DNATMPof42uCpi4A6vrL",
  "key33": "QCt2rnr3VXEx9ha56NuuQnfxMamUxZoNkoYxbExFnrpnYiNTUrBkXC9D7csJmfvbbejYNywVsKFZkXMRbxNJzgg",
  "key34": "5J8ZmgBLtAVrDFn1fGN95YQgm7B5NVsNR8g13NUZJYyMtY83E916dgPirwCs34Eq7P2xtLJpZgKzw9Sartwc8mXQ"
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
