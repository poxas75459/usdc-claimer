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
    "3Dt9zWw3mwRznQjM24iU72AV2WWnQofFbSjp13ahGqx1faV5unXBrW9UcUYo5guQ1j9HPthDMhm3jnZWGSWgh8d4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDxeBYPgfBP8JTYupYnP7hdrTo73AXhXCswNkihcRjHUaTA3LnBCR9qWmk4vvhouzsCx2kkhaUSWcYcPDQC982W",
  "key1": "5FyqvuhRwE9qrZdC83XjsvVHEZYZxY7rbXhy8VrV5pVT7Qa64S17uJUoX6DXebrhTusHqNNeQDmJqRwvuVVpL2UU",
  "key2": "dzCUas8jbWNBZykuWM1ej4UPMYVZY82eEbKGTfqzommHcNbKAN18c79Rg52334kt27NTGEZN49ivDgjkxe7TAei",
  "key3": "6N6jX7BDkALvdthhmsD9PMuKXSzLLdZHsqLwhJMuu4se8T5EULXCED43Qdi3CLENHTn99icT5w9NAgiosn9bvps",
  "key4": "ir7Jd8CWtLhEfvWzWJW5U21odL7QCsa3MvyYuravNPi8e7wNLWJ4AH4cWFrUYZ7ATf7zFVueSVzqBCrbW35aqYy",
  "key5": "4gY3X7mmbXnGY1RQ9USxmYexfD4joKcKhyc8D1Lv4MV6CAUJS3M4RvdYHbzy6cu7nwFT2CohmYdh8a2LwmHRMtyH",
  "key6": "56zfdqEMEkGoTv1wt6wH9GhBMEpH4QgZEUpJVmfcN2U7QCJCHHpUkvnbn2PfAK76MhYr54tnzjRoLMtvDy8m6hQr",
  "key7": "2qComAaq2SXzYJP9GxgzxkiVibhDHTYrUa12ZCwxNGNt3LBKfUkJXXBFV5c1vMxxLbsY9oGchEL7B1BT9JV8Kpzo",
  "key8": "5iiD6DzXBbM8FnrH1yztEdy627GmbEBybaW8MWdNEXbi8tAT8K1fTspXtb7NfPtiE5mVwcpy1KeHdUi2j4fTcB5m",
  "key9": "5GFScLPxD7nh4B4ZZMfhbSgfWQZSFRhGWiZp9oXgnqikibbw5VQgMTzFyweUFSR39TVJTmpzsjuTLzEKuH4TzRJj",
  "key10": "5a6xGhMRBPtYu6GYk6MnGSodAQY3qUn6Y8K2PaDGBsa9nnqQ2wZ2HyAs9PPyCECJRWk991HhKCS4B3qmqqmZpHpQ",
  "key11": "2TdrEwrhvc6hZ63oh8wAoTdUdPyPfjw3KD6wZkUVoADtxZWdVqfS7UQhbPwtiSBa2K6utrXuXg1BR884ThBeMi33",
  "key12": "ow8AoKHfU6HQwr41zchURCcvGoS3qzvQ4YEjvmwGqPtx3Jxf957GLK89N2WrDyiMwyEExF8PJPVqHYPE98gNomt",
  "key13": "3yuSU1gPCtT6XJbTZPBekmQpYNNKx5moeefp9uQ2UuJmxSH8bGdZRAvvuob5WdhzEHXwcKufKv1QeH5dKbypZsMa",
  "key14": "4RoxAKEdKrcqSmNrJ6aj4iwWcpT91TDnBEYjgBE2iyJiyfksbNX1Qa2iDxhQRszHLa8vZfY4xACj2v313NVcMh37",
  "key15": "4CXopovCchNCrFaNQsUtW1eeAoSg9Zt8NT2dBTR4e5WY95hdKzEnuTLZWuAJDrSwKiurB7nts4KapCsCCAnEFi3U",
  "key16": "2teVi9qV5UMS5pMGePTyxTkJAgEjdee9GsoLU9DxxLn981BDTNCHw1jexVjVKWyfu8y3URs65ZCfgwNqUbtEVz3t",
  "key17": "23R5HG28kDhcZQ6wcUzQUQRTVKiKceeoovwVeT96oTzvFNMi96Spc2G2zHP1KtAaGPh1xdapHaCvLN7CjSyfu1H4",
  "key18": "3VgZCmRbf6jyAsGhsxm7mkdwhBVwH4D8AX1jH8XSFqxAyJWvqKiPqjeey9Czhjeu7SA66LfTmjKkQfnMYnXqoAnq",
  "key19": "4UbhYcfQgk9YFeirmjUJmnX9btKUG3JEJVWDnq28ZBU7PU3X6eh75rvnE8tRbzS7CXRxPoYC334ZyZPs5KDuHazM",
  "key20": "4Hx7FeVV9fgNih4bogJudmAhcUe8MivedKp3JFYs4CGHXoc5CqzNZGABuUfCB1REkyZCbV4TEzGt1VkUGeoDWy8c",
  "key21": "3VDW59GiYKrVVaz7Gs9okWjDJSXBf8kaeD4ReWgmPdysGPWy7Eyv8XkX8xrDJU2eK2c3uVmGM4ZDJ3Nm4xBx3SMj",
  "key22": "BZbmaQRwUiZgzwYEimd5u4WwA1pAzWBQWh6aZd2hHB639kZKtNhocpVFgGGUkok76yyoMAD1sFPFYMy2BjYAVDx",
  "key23": "4BCUKi994yze5xx5mM2KfFWXhN9JvtAQkq28okRTyy1Cya4EmneecS1HXtpwcmNEBYeLc8CovgTocqzoCnb38gPV",
  "key24": "65Ko8SZgj74sWhVwtcEc6xxb7KuZ5CA4UuynuGUBm4opLfcLx98KHma3NWJiqu2698svw4hCMwAxuHqvz74LC6yg",
  "key25": "mjQJTAND25NotUckdhUnJrHXyLfJrr4Mm2vvfx2sS6oCdRdAX3bpr6S6vZUqWamys3gMdUDCahpCJHxHG6yjBw5",
  "key26": "2BbTtmZ5m5VrU8oLyYE7ZfscNUpYE674nTwSMy3Trg16BRouJHF3VrxgwdWgJnemhgC4MMRr7BLufLB51z88FhRf",
  "key27": "5XmLbYRouZ2t9xNZYu6inMZveHUtW8C3ZdMwXJ2EK4pe92tPmxyjsUMMhbUmtGXgZXcrFwzeUEPwYW2N9v4dLZPu",
  "key28": "4pv5HSpiWH6fgqPMDzfeSLquSZWFsrk2vvAX6zcNKBtnmBPk3YXERE4eC9SzeH69VYRZJHyN9Eo1ftEPe6paQQe6",
  "key29": "3e71g6B41dzzkM4fkEU56m8mqGXXUBfXxf7TpF5h1N9Y8ouuhLe8T4fPxMLtUmVT5y6TeZhfS7jCNavBD6PB243B"
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
