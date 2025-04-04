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
    "kkpjtNWstzx9VwPFefjs392kmBT6RwMYHG9YLzMhPapPCLVAwcsCii9K3yKVBRtAsQbZfSpkdd67rGXyT8pM4i3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uGMbMjRuLLw4xcFSsUubkVfm5jGHLy7zXE9KcVUmDJuupiUa2iTkSFyctms9dVx5yhntExU4tCH9kW3twDffWgc",
  "key1": "2uqMuNsTNWHGcYpEtJyeVUURxTDyB3fixCTxvRDgQLA6rbkv3VsbN8UoGVyDZ7TY8WRUYshKsPnkTdRBtej7eh2L",
  "key2": "2extzMpEckeL3yiAAJwrg2iy1oCLJ4GvStBRZXNNmtbjkuJt5hFbvD2vx833ULACwHNocAf5ZGM6KYB684FDGUxD",
  "key3": "5tcb6Cho9Hd967kSg42xF6erAhVrUjqoJv128GDYArfCaSseikvGJDpHYJvNtzhkCDrTjCBtYywGY76cTpPjuZz4",
  "key4": "F8yGTPQedCnX4m31RPPYPT8jH4C4NJWFjH7RS9yYS8EERz1qSmnQNbx56By9pcSzF5fZWzSRd1q4Exy4TsGgmBJ",
  "key5": "43sUGgt3RRoV4GHPJ6Z5QUDTdefxiDJBurNvjBwSLvtXM9T3mFKwyFtkEG59djmdki2RxiwN2TkHPtvQ2CmLSCBB",
  "key6": "4URmNn9WxNbgXgV1byAScGUZJ6bbxViWZU2S1azcHxoYZzxKt38SLGm7d4etxvdkDeKHNjZztJveCwVZKpTVvya8",
  "key7": "3GsCKbXAvBf2Rb7J7gJs9x8Xtp5rAMvub7DQiXoLY8LBeLHxFD6SqC5JqkZKToA3tjcRDhHA7QRNbMCZzpCb3Bks",
  "key8": "2HdreAtgYEPTMNM9sHLNbkKoYnP7S9HcKj7JYwcPHtm3jgyURM3wCnVNQScVcVK4bRCfwmeiiNXkqrgmQRwcnwQB",
  "key9": "3p1ZPnJXVfc3eSQuQ9ssVFsRntSyfNr234tdNjc9psXsJ55mz1NtdTE399k9Ays5bsss4GK1nQAdAZQT4NSsbEhW",
  "key10": "53CX8SE7qTXhr4ne8jcqLeXMPcqZPJwwDNmSwz5pJ26PP57jgh75T4p7usaA3h1B4gZKyhpVY68ma6BTZ9pK4xka",
  "key11": "5hsVVrCWngR4ey5xaqUUQc8dbQNwPE6ACuFBHJKTBmH832G2176FLQ9X8CpnCWZmdG2YAAY6pFL9LnXzrvoqCBz2",
  "key12": "qyhGBpT89iMjSLRXX7sfcwQTBTDfUBFn3SpJ8L6CngB4kv7USNEwHeNANbTzqVZwPgGEp7HrejmYSVYc9pU6EtG",
  "key13": "2cJ5fQJdQMNPgetFxdRAn34pYWsg6cWrC4P1rLytbUeaUQtd9196eLCdcqGirn1ZC6LgUdb8pXZvXvsekjp6KnCF",
  "key14": "51ieszV5arpmn3cLmHYoMxZUn86c3LyJBXoGUXdsB3DyNB1TdrFByA8ZKuG7VmpJBdCBFPprQCMcz1gEuLroJN6s",
  "key15": "2tt6zpN2etKhsuRqGi57FS7VSA9sLsw7fNKZ2XnzKByDgYw697Qg7A4mtzdqPfYyKX371PHc62KUbaRr1UnhE5mM",
  "key16": "3kGMgCS9xpWUUY4XWqk4ZqPZSCRke76PF432vhrKdx38E6RT2BX7coqdEFAXgjHXJyBRUHwm4jnsdNQfEhxUVWbG",
  "key17": "cpoS5KPjpX9g3o9cicLxFAdw4a3nfGfpevGRCoUALY7MvZv945rQu5paKMgFsVoGFECJYW87mvwpL6qJcu4DS2r",
  "key18": "5CeTMHn2GKhxaKRiNBkxHvGqdsjbJMio3rR1C6nvQ7UnXytNnogHd6LSF26dE9fsMD2znHm4a7ctxrq16w6aZCwx",
  "key19": "2uUMi8WeXgPTXnWAVuSR4FnSZdri2xYKRUAroL5ScpoZDES5pfCvctJ9UzrJ9ekwwYbMS4g33Q1fYp1E7Hu6SJWw",
  "key20": "2oTuH32J3DmXUAScKew6LcRnWkvHtuA3rjwcRz6CN3sCk4qwpChCeevLs2vRX6DDLNiPGZkGewHH1iPVEqPHVnRf",
  "key21": "4KYFmTqDrWpun3fJkrhQUFmkNHkJquZf34B5xxYUH9sKF3qAPrqp4bTNqWTnfqmneCAktX9G4imsAxx7ddLPXu11",
  "key22": "4t3Nge41vVjGMiVKV7kMspESC7yRwKEdp3Nb6HaXExg2MwTEGWxpxdyz9QFBU9K52YtM8W8kmFMSJjHKQU9MDfRv",
  "key23": "43dQ8m3zTZ2SZYBADAPpm7hnTVnbtrwE3SjHS4qzFRVw8PUEfweDDTmwnkogZeLkdJJka6FtHqSXMkKCF4B8cUF4",
  "key24": "2qzWc7UYSacWeSnJwR9SjHNR6iG728NtvfKcMefYADoFQdx143YYu7YfpKPCfcU9Ansq9ap6sjMZHeHxgPX65J8o",
  "key25": "Ey1YJR3pFtvh7kYeBWRb8WKND42gnWKUzLkoJm2ez1xFcCdKPrSxQwbrWCxQvrVp9AFH1VqfginJrYi852QhgyR",
  "key26": "Zz8AQvfcimswRFz8CSqps5t53JDtndtDgagqdCPNA5cB92LhzYYCJy1RoeBWHajTj1bM4JNc6sJgsskS4ZJmRVn",
  "key27": "5sPerSjuuKR8PvLRXqnQvtcZjvs9Gchkm15UhCdu2RjWXYP3NuY4HtF9Ajt4Fk9a41jUndKpdWykja7Mm7NQWfJ6",
  "key28": "5CCXTajY6NjfNq2iq5AvcaEzCLhRinNRMQMvKyKCqmYNNkisEr6zy3t1F4dezX5sYd64cgQipH9f6XbBPxHwDtX5",
  "key29": "idunrDkRUqtyR8jSnaEDRHeERzhRunzY9CQ9v7UQzuE1gAcWPrZhx8A8gt3mx2xTtoucfgJsmPSnz2vj1HeiSjN",
  "key30": "3dionQT3Euj7PMAcGsAzT3h29b4bL8XeWaz6inEtXdD1WbD4DdAsNZxGvLqmBGvsdwaLGyYgCo38u6PBkSf2ZyLq",
  "key31": "iCqMQoTxEzEXckt2AsKxcfcpqjkqrvA2TiyBFhgmw2CGzXSQcnLJ3cLZr3bg6V4GALW4M15MbGnrdtjxVgc6Wja",
  "key32": "Aq4h2Dh2EN2ygNc4uRwDZ7cKj8EVevbNKbzf2GEUpF65N6QerT3j6EC4MHvquayCYh81bHDFyDYRW1XyJHLCqt1",
  "key33": "48rmjfAzYM2cpSPYqRJyA1dQyz3G51zPP5jqq7VLbznWkEUn3NY2cPEEZtAeh9CivhJv36MP5JYfUyiQKMyTA8Rg",
  "key34": "2ZuhgbuiJ2cw6iwr3KDE49CxKezVTAK1XEnhvgqHVsu1AAncUodSax1RArWbpDQLqhhBya7jKh4GncGkxgq7NL8b"
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
