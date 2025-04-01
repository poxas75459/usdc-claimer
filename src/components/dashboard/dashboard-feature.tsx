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
    "41d4tp6rjj9cmW7gWmSLd7oCxA7pgGRAacTBjAxwa4UBU9o7x25ehNxgGsbLk2CTG1w78BwdLGKfX4uCBXWnYq58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UJxWwWUDCxPu9Pro37bXm7rUJvmq2kJfGv5NNqs6bTBtk9of3ysfd6QUHBkDoBoXREpvJ9mRL2TpwoqwhjZzhXB",
  "key1": "BJhquJ871STu1o1rQqpPj9kkd39fTmqFJTf54NKzbDrJ52UohSr8d4EXb9SuxU3YooZx552QqSu4nuVC92zisC2",
  "key2": "UWCjZNQ9f93N2BporccTsVVhhQjc9X7JkHPEhmQYgC5cdQoVfFLpggh6zCXUjXq93xawHKu4npFJv2Jh8TRTspM",
  "key3": "iKuKqNnYJsJJ3mqB4svNw5rqSdwqjR6muKXrhRdA9zXE9bynqYQkP1Fa4zwe8cw7ub4g7YX2EcwPCaP9dFKQ2Hr",
  "key4": "53S8KmdbxEeBzkaQcxvxVLzL2gT3fGHvnf8ZYsu9gpDfFbsk5g7dQdHPzyq9mrCmEy37yQfe83YRfQFwkCNtHysr",
  "key5": "3CyjMCrU4CifQRY93YTsy6CnMVwdPn6ar3h7DoFP1uMBQzSfnc9HTEjgHMhnQVMt5CGFMAWmW9c6JqMXQrry9nTA",
  "key6": "4t6BBSrue6pqxqWcLskFUYbJaLdevA9VoqLcxkELydNQAnjyq8A62FSzpxJ61gnJoM8wZFF4d5yXDCwVQACHvDWW",
  "key7": "RTjQezf9ZATrakcd4TtW7xae4ggJ24zCNZYaTJNzMTszZtW5jMcBJ5J6UL8CBAv7yHctDqQZ7w9FFJMsChrhfPF",
  "key8": "t3zDTUrSomd3g37FSS6wJZ8z1m3EbW2fMsspAHZzizgjSmJrBt9aFFZSnP7JuH5HwCBoWgKY81oTHszem9PfVj6",
  "key9": "STjfBzyB8ssFHcFdCPgzCCzHPg3ECoX9n8aXnbnX1WZAwp8Jvs264d6rxByBTzu3sMmVv16rqvLMnwwDm6HywkU",
  "key10": "4jj44pvv8ejuBKwX143GX1g7Kmb2UvaYpVzxsXvNZCKF9BwJ7R2LBfKpn7mnTz5vAhTpss7EpbYXkA71e3R4mZ9J",
  "key11": "67cjL6aQuJS5hTNs6orArEdLSXsRtdzDgrvhxMDAt4vqY2o685CNxh3dYiBeLsES4KbuW7rLeEXs6db8E5NJDb5H",
  "key12": "5yUgQr6TRUwQLTb9cGT4kbYB2AJj79RxEni8D2U3YuU9GXUCQ1MrqmceZ5wjDWVpUzx92WCsMW61EMmQQWSmzaw8",
  "key13": "3n7iG2t5TSzVtnxMCjsjwr29vQEMRrHwn8yXMc3KVmT7YLocBNpGo1uVy1B1fRFYG1aHBNJiWCw8dJezvrq24FBS",
  "key14": "GQXToPEteHBr33NH12zFKZWTz5pH9wQjAMZ7HjzDtM3KxEs8L3u1RTgyeMQVcMUQXcsTVJyN1Gdq88oj5kexGXj",
  "key15": "5hJXzpMgVC5m1DxCEqjTr2WH6XNrkWQ5wY8RBCFbC3Vt8PX64JoNubn2mFnufD1defUnzWcacQBzsbxmcNqoEnsB",
  "key16": "34srag6eqRYNdL2V1w9Mdj1nQE8RQV6iiFgr2Ep9rkK9NzB8WPjtmcATJpms1bk7pT4dt1dWbyrQRvZ69r6yAEpS",
  "key17": "2M6z6uwiw6qoN3XLfBrH153f2tGVjjAjCeWrZch1CTSP8zdFhTUcJv1HYyups7oFHKvdQueCUTYKaiD1FaTuDwBj",
  "key18": "4VLfhrXwX4v4V9XxrEPFBMPh8s1GyHmAJttCY9wthnQyqyFiX3swc6kUsz2mNoGCMBqLWKWqVUPjKEE1LhQAFdb8",
  "key19": "413hyPhW5vf9ox3QYzCA5Ho3gVtjtS4ZRedECQwMoy22cvLELgbUiXqgLVQuGE19vfuKiu4HcoAjsNgfkZMt9PMK",
  "key20": "3VCbvRT5RbeNswYCBSEQg2EtRCEoZQ4HBAxhNZKjB24332xYyZiTAo6Fie8oVGZ6MKRBYphN1Ai6txrsupyau6yk",
  "key21": "4oBNekoEaJ4cRjyLaDxhsYrVosfxr4abbDVppmZTekKGm2pqAeD3t38ZCXrYyMcZScDiwMN3DU4qvcRer3ZmsBwB",
  "key22": "3ZBz9AwTWU7u7EUYfhHsqJieHuMmjSZAvieSswVa4T58AYorumT9JdcoKumTst61qMhHL6Bwitn6gesxYhdASCiB",
  "key23": "4HtsZU9sXjdP8Y1VcRY2DSHTXwRW8e6Q2jhSnm1xyvXwmhjS8ahccwJqXDg34hhCysov2ivghwy2XFfKBi8AJYFf",
  "key24": "51kqzN8wqmWLGfNu32FqoHMTsU9uvtGTMPUoq4exDw9o21edtKoY2ucg6FeCwKhErdzfcNBhRVJ2GXg7MARAVDXh",
  "key25": "2FqEYpzM4kasSu2xbd8QwCWJhc4UMYwKCnmTQH64SqRrHDYiVz6sRQFCiZYaG6Uh9yBCspUr4LVutreSiu7WKbcG",
  "key26": "FjUEuTa2MLwUSWVJh6LwjHigzkTpCKUjiTVc7DJspCqgUmPwHN4Svx6oNe7UuoEtPgRbW4kWoMnaMBtdhuxQDrz",
  "key27": "377bUGiTnyzeGUq6FGCVmyKrscYuR7xK7hJ3Fo1myotGXmxnVx78WGhyAH4DBTKbsj276bVPMebBYsH5Jmf5FPZW",
  "key28": "2baiEQrQutWPK71j8eKF2hMjJoBhvHhVPLxmhH6X5KVjQHDBSMPXXivV7SjC1G4PwjKuAitxa18E2FDijZn1EMLg",
  "key29": "61kwEebhACACNeKFyRzL95SoMvyHtWC1yjdFj2dgqdEp6MvRkfWtAebjGnSjB21rsMFQGR8cne6YdUKW9s2GTwTG",
  "key30": "5UKsm5Xx865M3ZSW6JYfUCLCLSENzu1PfAo71muYogMh98F4vmt5Fp1yoUsFDjjQq32nDk5dG2DSWj3Uj2oBBJP3",
  "key31": "2PUoT6nFmkGqPhTe5g2TxZpTiXAsiRnnknFBDyuPUeqLHN2DYFZDYGChhWatfko6gq74REnYV6RjcinnqHtmDibc",
  "key32": "3kuEKUXGeFzViN2WRADbYaNZx9jtwxpGbdKBdMAyQiwBJBGivS8SmFA6omQNmqrAaq4yrjqBZuYDjZWRuaKFfDpd",
  "key33": "k82C5QdpXXmLv47XmN8ukd49uoe43h2f7NctodUajbZaAW2SD9G5V5pVNGAByuDjQ4MWHq2Q99eetjtSqDHzgQe",
  "key34": "5MmzxsbPyx1CdELy2w2XqS11hAHBa1drhs92ocRg8WQ9MNrfJXoZV4jdCF7z61s5svzBCi51zySEtqqdgc6HCbkP"
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
