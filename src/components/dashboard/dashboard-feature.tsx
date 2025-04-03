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
    "5gjQtxxCoMytv8QGubfxbGFG3vJZj6SQUT5UxEukst1i8acwegVZ76Ab1yWiDtNwwbpzWJic4PDzcuTRBgNy7vK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEH15vpum3VqVEtzuPZRnSovxmQRivQDbRqFMLLYNhmfC8GVdEhFPyBH4Fe36ihUtmz5gdxNZGkuQdX9ukza4Go",
  "key1": "3GcdxueTsLTYhYxugvxqQ8NAMdwxAsjaQtUoWLhEM7NuEkBWhxUHyPfqaJki2XDxcukpgAQGyxa1rdYFUQ1Ef7oz",
  "key2": "4iFLnLCoNd42zTQgNjLcHfVMcavdW7UHtnpHT3Vew6vURTSX4PTcxQLDUa6V3MJvZ5zMZERGR1GtxvAnyQSLQbwN",
  "key3": "5KwGem2hCZTSemgJy18NFropxwrMFHmffQwHW1GZFdQRi3qnw9VfU6b7wKXkmwQMjqf7khh5bRuqbSFJ2rJDpJkC",
  "key4": "3kcF2kbAppZAZNqqdeFNi58N7nKb992HUf5jXgrpeujUZj35zejX9yNKkx3sgg3n2HDTHSFNp1dvH7ZEU3KbxoLu",
  "key5": "262XkRZ1RqyGVoEsRSctFwK9rYMxM55eTuhBUiFw5PrDq7CYh3L3fce2dQWimQEyyS882gtY8HDYcrsn74VyEipy",
  "key6": "5qUEuQfCJ5YKZmfhw3qmdNwL79hmVGhtUwff7fqVKnajLoirTrkoV4eKfRXKaS5etXQDdAGDMgndLiKK7qeWKqKF",
  "key7": "5hyMvsL1Nt8jqncpCDaBYb9d7BjporkKXe7Ckb9CPCaUxCRywGZq2u8y3G6kMqTZFhfHRfWLvDDUqHebqzkdWvgF",
  "key8": "4ZVtGAYPG7yW1s8QuwLicjXNj1CrZ7xExcTVGpPFzFRmuwh51VXMvcKXFo7gyYWPx5sSAsDQEdnAYQtUYH4EvsCz",
  "key9": "24ie4GyPsakxVKy3dJSnVtA23tF8h7mLszeQa5F5gdhPhPU8LYpvoMg2BXjdq7vPWR6TqkkAvLmEHs3E8nNu9FY9",
  "key10": "4dBWf6ajaqHRD7j4sAvHbr8BwvM2oTXCBLZaGtJRcaeXnUE7YZNpcmSY9wmTzx2Uqp4uWUYsdhiaygra3VWxfzeU",
  "key11": "Wvijpkmn62CN1F19JKSayQ1GU784y4qXbqZ1t2x5QCJZTLTYP4Cw7XbhcJzgQM6eXKm8KTHjbnK7QpxwWD6ZwUs",
  "key12": "5d26iVLvFmqPCSRSK6cATSiawdCSrhy4BToeW8wrWrKLEDVdexUKGhN2yM6NjRY25iVdwp4AdCgnBxZwdQydNQZm",
  "key13": "4pLiNhL3U5hGe7Jc35HS4y45YQYj3zXMdtRh3pPVuCHasAGB2VLaVLnJnh4MyBnTRJcEfktYabGjRuBDLmYH2qX8",
  "key14": "5apN7wYAb13CtZLF1fcSounKqQoMesNLPvPZu5odaiCrNUe8BgByJwEKYML7ShZ5vxmbpYVo4wdbEcuo9uzuW3Ce",
  "key15": "4e5wuWYjMYJZYrCVyrPjCwtGFxsAPiyAHXvpkvm3Cbs7bRPfLwAF9BYb9gHKBzaiRy1EnqzPpo8XuJRUXiKTnFaW",
  "key16": "4nHn42PtEdjpn2FYgwDayJE8L4WaHHMwC28ZgSFmVyP9Sw3kLoXKkwDnTiurk5owmyPJwhZLDmiH2TRu4d7ukPDd",
  "key17": "RCYUALJjLVZ6FMbqNKBp7PgEBXmfGpTDJSruujeA5NZv7qNsqQuUEQK6njX64TcWybXwtAma9wYKgDLJ2R33ypM",
  "key18": "3qcrpUc6au6ri6PZWB1AQwNBPWmZrKw3BTCQSy33aVU6FCHkyZFqpaMytfdDprbg8Dn2HNQzkNzpAH3RjSuPmNkx",
  "key19": "5Qx7xsKwQ3uymLowUU12vergzzRZjfF4Z8Qk7w2MejrZt24sDhv3ebT7mHqSFFijERbUwARG3xi4xhcbgxfkjVtf",
  "key20": "2pLUnjLAfPiVwuQV4kZxqSBLvhf3wCt1kpUaL7VViLD7NubjgVkq5xq1rRGaE9ZBeDJZTXUxsbUJdTmXXikS5jPv",
  "key21": "3TBjXUZMqnhsH3mwroqHrrQJdx9NgTtHxAbCQnCG3XjfDXhZD4ZeVW5gkRC9pbBWDYWbypnRTRjACY1dzQcKFL1U",
  "key22": "2xXatUK3FUaarvw5UnVX98427YWNRFsaCPpeEQzLoyoLQZzUc9JhpHAf7jWCvpghdaKTGKYBJmWLhMRhgAHfraUX",
  "key23": "2MU6t4hFjjL3DNZso74u1vsHkfZi23mjHKKSN4TahA9DqYSGwxSDm1UAggCCvBuWSiyd3abF74rd8xqThbwZ8WiX",
  "key24": "qpwooacqTyi2kPNQducJi4kZshkc6s9qVSFvLQfAkrzwMSKCT8j5zSAKFsDSodeZ7wbFKhVzCcknJZ9dtMPPcbK",
  "key25": "4wyJDspFm75a31fZa9YeMpRfSAE6fyfvyEcMro1BGYWKzRNSFB2YMzDnT2qWKrFYBEeS7trBpT1mEcnR5KGxk2jg",
  "key26": "2DniwG99tEaa7aQZ62NL9a2nkgdhKzBMq7Qz5pdYynkLzCkoFQNPvVihE95ZrAgh1mjnrbr7VkEMtkqWo8BREC9m"
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
