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
    "49UgVXBv81DaigEJddRsWZCMLiYSnkUtmHYUij8BPwuSzMWT9HQi2HVk3mny3MuQazFikKHQkUmTFFzdqZoD1Xn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KvZRMZF5SMXjcgxHrssFkT5sYgYubwmbyqZPdhTCM42XQ2zDbeefEBL1EdRmHXkanRt3U7StBHq1fEDcbnksesF",
  "key1": "9N5STEwdz9d7L38doCTA3dYEQ9wGWgKMYT2UKaHCYyS6mY6vT1Ji79rQAmk8bD526yeuxWc9RzU99rRnmRRcbXN",
  "key2": "ES8udmdWioZqNm6XbhzjUSfPiWLFNMegS5NEEeDw2iarYUjqWwep6HCbo6HaC2JhYsjDf2Mr6ALTaT5eVkKhxrp",
  "key3": "47ZQNUJd9G3isNgqzGXfAxdJaDAKnodd6tKp7Cappzj4ht9WaSUHFgfWTyE486951PKjv5STxqSx2emn62zT5VrG",
  "key4": "3KDrSi3UTY8sKM1tcMn8YTSSPXd68zsADk1ivcciprKhMBePCeTPn5ioz5n7HZVgoJwmPRKXVF3uUvCyEdtBCSdU",
  "key5": "5zUiWLMojQ8uDq2Jp8jMs1PaoV3VSK9LNgeg8GUznQ7jkhdwMXY15YPPwhZqRDExso9JbVNHmEunRY6PsgNSXwsg",
  "key6": "zCQkT7sKXfvZi5UMfLg43hUee5GD8yz6xZJJK9aoPmPwgtQq3aWEdwgzRXMVFeiZKpXsrtGHGpQboUmWo83RjeL",
  "key7": "3ivjpvNLgMNLmau3xALJhSt8G3BgGo4KwLLAhNAysnctrgNvkaMrhrK9wofZa1et9rRudJkQKcWzvChFiU5NzygS",
  "key8": "5ru4KyGAWf6JAudxaN1f12BYsRCWRBhqw9uEqKY2g5GyxbzkFFxCS3obaqNh5WXyNdiF9pzLbkFEC71bpcqGJrDF",
  "key9": "1HCKL2YSQA5wbmTxFAnMkdQw7YV6vTvd3w414LkdKf2WeJ5h3KZiSsmu7vXSFUcCizwZivW95J38dmdA885KQby",
  "key10": "J1TAvokA9ezW71pYs4abAfpqzMQfsb94fikUaaaLKZzMn9SoEYMUrnmviTTLwSzys6WNu2WPMSX3Mz17xM6d5Zv",
  "key11": "5B9XAm9LnaNMhZmrrAfQTBWGcwoQpzQs3BMZJLjuaciJSwtAg7vuPJyLjk2KEEWhAEWa3hxxXzfLKyiKSEot3hge",
  "key12": "4W3c3yrLsQvGw7LWyXUu2iMMejMK5zZTwVTUcj16z4aUfXadys9B7LzpNQMHrXQcXadh4vumachhW1DPsaQutWQh",
  "key13": "vpDCFQxBpAZAf2eVmAx3YPs7x4Vdy567opVnFAZgcP6GSok2baqpeM1VpoJA5KLb9uaCeqkFaREQrYifGB39b1k",
  "key14": "2LMRydivbBoxCD24WQUZYzrxEP78t9Kdonk4XD6sJ2JVgPnbGuYSnMSgtfQWoDiMgXcJLQtTNeozHes3rs2n9Pwu",
  "key15": "HhbaUQbcjS5Q2ehmDBFxnBtSXXqgawWqPnKxkasCdBtssEQN9TEZDzinzW37EW98MRSB5DWUBLyScA78ebx31up",
  "key16": "3dVb6px7rCmgvqVss8sVZRH3xw1rUJM4N73SxUS3EqfQg3XmG39yohqG4MmHhwjZ7mt2XPcb9vMHVDyPNWUpnx8c",
  "key17": "2X3ws6pWDe3xV1cFXv3XtnUW9e8543nUkbhJx9CXQEUXTj7229K5MZkCEQ7EJTiAHrp6AhiG3cHK9D15XpLRBDYH",
  "key18": "62kSPPB3pfawVWQoPtRwzwz9vdNC26hzqSq8zhycVkkdVm8Jb7g1YZCJKBhncz8SGPzVqZ3xM6fydCaX5rzJaKom",
  "key19": "3jrykQQb85htW5C4Tz2cxMK5o9SPTJd1tk4iKCEY1aGW3jApHFFNA9q49YSGbErpLYNHq6AAtnV5DkNFKvayjJtL",
  "key20": "5yKtoLCXp7dwovJzNUYFi7wZ4UducUpDTfaHyJQRZSd5QinTcSXA339GbYhdCek47XwUEo64N6hUs9JZphexJP1k",
  "key21": "4Vv6q6S9RgPDRKa3FwVRJqJ6KeBCxUbceSGSVcUM8DswUptzSx9aFv2pysFJP5xeAocyWJ7tndnYsjmjnvexxE3w",
  "key22": "3V1cd855vERJdCC3ctZvYGsCP5WNddVaoED6xm93GbDbf4kKx6pb3NhabuoALJKirmQ1xMvrviEn3rQCNDDETFW4",
  "key23": "4bsdMKJRuMXB2J88dzDNwpiZhpXomjeyRXTqSMAKAJG6AKcsGWRG5riSrw8sdfDyKJiY6keB6QKTCtZM87K1wF6m",
  "key24": "29gQbkM8a9XwyPjHrh1JtEn4oPouKnpxKhAvnLNHmursjUaMGXoi8UHwd1cWfwEMwq6Vi3nLaKqBYKYm2VfA6Q99",
  "key25": "oFgBpKB3C29YPHu4Q7M38g2Kyv1FBXF54yFtDHmNSM3n4geHTfEwhooYX9uBm2kwkCyMJstypuKazVWxYwLYBZp",
  "key26": "4J5CByRuM8Ck8djVMFF3YExcCUfJZcUKWKBPMq58eqaUjiamdA1dyE2BcZuM87GfRWQhKkw6bvQW3oZNY9zer6yE",
  "key27": "5d1Sh7oiNbLTYGSGCwTfCofwXHFXqM61K5ML1KN1HXuzARTxeKnWSmveZX4jURaUzcMovQsVQRPkHzweSSaoyxob",
  "key28": "4LaYgbAabWzCSuLPPKmXHkgJWwSa7zk596yEm3jPX2Q4Uow9Twbb1eLhP5gwg2K8hmohYc1miaGQV5EaYTCy5pKJ",
  "key29": "5yALvqMCPpnXfKdUyg6s6PQvaZZwMoEqbQCdjK6sXNE5w2Dvun1XEHjkUAKs8YSEv7UDaRuEDX2rqUnP29eYpXSD",
  "key30": "3votFB3CwxCDt7on5pcfauXUF78LZtWf6rwPjyMZsTpERuLa1DwReqk3SgNuo1uNebXTLFBhZvTQdRjDoKiNQzy6",
  "key31": "5FoQt82fSMGK2EoAcJ6bweAaueTD2eqEjcf7avMAMFj2X8TsQ7u1HWv1XThnL7NaSKyQ9sd27a3h4L9va3fUHkjn",
  "key32": "eWD9Fo5jnZtYzgwpDqgwXNBJJWQxkuzcgPtpqgirypFpHGKHeus59NvNSHGK3VmjirDevJceTsuGHkFnTxoAGeX",
  "key33": "55438rxPLgB3YrUQqaMcekYJ31qU3hqzACYUBZxntY4FXu4ZJLeweYdmckZQGK2E1797Y2EWKa6JCMT44bL1WDvz",
  "key34": "UUMDaKU7LhgnF3aQiY9HFAcQ3UwqfGb64sf22TXPoYU7iegThmfyaWWTZjNmKc35h1CCzTX8i3418U7o7KReB2b",
  "key35": "22dWnimHNnaMUh7MXoDsHFN6zzimNZnVZH4iXLeF26G19ehZEDeCtSUgwp6QRb7asW9Augu3yPirjSH76xyybgzf",
  "key36": "3h6qHJ4UoE91D6KrFrQedqvWb2bJanaf5pL3KtKBoeQ8q3NAWibyY81vEEyosGHSJeLrn3ByXJK6b9BJr5LSLXbh",
  "key37": "38kfRqeGud7U63Eq2BeBFNYr6iuja4NJYWBkA9eEfSJsEc1bMz5ytY834NujC7CDdMpWoANwVxzi2ioejQaC9sQe",
  "key38": "3rRJeDPekBBTQq4ApGS9qDGaaoMg2KFuWXwsyyYd8RCoCsC4Qe3iycVjHvNiRFj3jbL2DGRB7oMobAbzng6pYwQu"
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
