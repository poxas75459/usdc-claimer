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
    "3gKPmQjgy2KwVU9yp7gQ6xwKgeuWYemFv98ZDZuWKMvsjs2XWqqUVZ5NTDnvnsoUE4x69faaCXK7f9N632H73Qip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SyLVHvUJfpmoeSa7iyfviW2qfnsknUPzSrRXbMxByVDMCUDp8ztGYX3vQuH6krX6uGeDQQbUQApbbxw91zQeChh",
  "key1": "5GtGXG9C26JVhFKESjofCV66WK1Jd9YkdKXx5geGHaBu8XhcDPykhdSLzvbMcN8Zh1AgapwKy4aizZf4JFYt6aDo",
  "key2": "2D62jGXxPruwYGYJXb8njR8YVGJs2TCMNkSAJioxvKanAxjUSD7tetFToxduSjYyAxRNKdYsNvDjgNZLbuFHMPSR",
  "key3": "3rPfvo2xgxp4BQxYXn6KW81DNKn3X7psYiiqfW5TxouJneT4y8rZ3FLqE7R3qpTiJ6jUBFQRA1BkePUtY18G9xku",
  "key4": "26rQRAC9fwtvWQFMKETX3cZcbAzwXBxjnAJDnrbxC6JXHrbjCmCF9etHQHZhsQJma22xTghhKfjyZ5if3edvMGfk",
  "key5": "43bYHNGnbZHHFr9CJp8KAxUGBShepRDr8phQ6Ahmk3kkKKgDhKZDVJ2SKRmRWDidH58NWVbg6nQwfEz9Z62Mkgoq",
  "key6": "uma5sy3G5rF19RMfbJR9GAV7dvk6NMBsR62cVnVqTPuGQDDpCSyF9CryTG2ymc8NWqFUTkZkLKusi7BUHMRDCYz",
  "key7": "3kaGShBXRPhndw1zuugXPF9qpDxDGNKA3qTWjrX4VoFPfXdHBCwq2vsPeyuYjGUWR2ZHbaaQxK2pv4xQPABUqbh2",
  "key8": "oAxeiViDKVrLxfE69Lpbra24aLnj4hgV6d6mkwBTFkQAQTPRb9wweq1bTeNzSQNpcwT2N57ysvzZnWbSkxwkLXo",
  "key9": "3Y66KWV8brcqDRMtNAn5GmGntELJjkjCsaLrj7fw1r8PfYWrc2xyTc5KQfNTcD8wMPYt5AVoMUuv2TaSrbq3ThGe",
  "key10": "5ie8cxhGUy4mCKwYn2zWKVzaUjvmAT9PufKp8mwUQoGz64thEU1pwoxLJBo1HT1PrMvhXxcnqiN65UuwgqckZKz8",
  "key11": "4atu23qTxXvysTNLGqA4E3TrAYCUbK23Mwx7DU1eSBTYAgJEpXcN68cR17RCLFCkVRrjMHs13FBJPyz2FqRJ6MRQ",
  "key12": "5rsDqTEGPoXxceGbmUHL2iKYtuF41h6L7FAQLzvXP7PtyWfk9F92moHNnV1kVn7dgsiUqBNEXoh28GAHqByvNdXM",
  "key13": "4XDKapMtQL6i1CNbcfdqAKFEj2pGg2Hsm4WbsF6SURScVh2eZ2XogBA2iicEZcgjsvzon9G6SYDM7ZbAH3TKH9ko",
  "key14": "NaxqRfVMmZnxKTgoJep94dHiHkA75ChsmgKD25EJKNgNUDfhniJ6WsDYvuuDneHB3ZKERoE9eASgiZ6msk6Tbst",
  "key15": "4YnYS6zVMSz7ofnqTDQmvMX6WoBUNrX2wCkiPvBee2SrgMZFfVs8Yp6yswcKFXqHKzMVRnHmE3aVhxeSHHTTimS",
  "key16": "5sMgYC1NW2R8kxmJt5XBYr9rrwFVRnmga6zWnDkcgMhFbtP97hoJxyXzsHw4m5hBNhTsAH2CZW3ATY1VzVVbQtrM",
  "key17": "afcR6Ukgt8c3h6R1U6zavkoXayvZYXqXQdJRmFdVr3AzDFEUPdZyVCfNd4S4c42MAMdLDMpqpkRgPGb1jf1NWJu",
  "key18": "4BuK7bfGk4QhBTxkM2j6NtxPqcWQsRJp2zJY7twGZA6QT6aE7CBhnRz49psPMhZCHWpKH8Xw34Q3MthjEMcQmbiS",
  "key19": "5EvGTaREwhwRnDjqMnA2HM6SuRnjK6fsHbbmuXShiDDfh3P1TCkawDPkZjg4Rs5MfUGymN2SJCkwYMjEmHA11k2X",
  "key20": "3m4jL36aNjo6tAFUqZnog58SjwYQ2rReApNqBkYDGXZAcqeTWi4bnnN6AsBJwAoYHdz2TwYEED1WWS4Ed7PhMaU1",
  "key21": "3g3oEvLgGNwDWHHv41hZNFo7s9Ufjb4SJ66dcNcEFXxC3pVAgczf1dYkzkR9tgV15cZbpd2K5wWcJgJUeyiCsnhj",
  "key22": "rLY5Z3eqsstrvNzf1EfjK5hWZzJYaJ7vKYntuT44u1EZR6gpeJxADVyXPwKaUQh2eq6nFXG6D8qr4GTAHPb8iZo",
  "key23": "V4gM1LZYKHzXcjxfpqZrEjbkbtHcQsNhcdbimPaCVRtPtY3KGfS1Wymy6QRfLAPnT6Qh6LeoiW9tqNrf1KQo7yH",
  "key24": "5JbYVZMCXooH4DwNgjfy7Pa7995gfiYVU6b8xEqk9qE8dUWAt8g5eAPqFmRprGRsqBH3FgbnkTVGyZRFPHFfVDCu",
  "key25": "4JUGqiYJeqkazdTsThr4q1LTmGzAL1GNaRr98uLa9zLekvqVC36M73DD4fQUsJZ7cCMY14a5QnH7PAsSbTZxSsoa"
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
