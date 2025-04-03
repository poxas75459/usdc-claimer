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
    "3rSJxe8N9CfXG6ga1phniqpH7dAQB2TUP3h9pZzsiq7dVJ4S7y2sk7soM7ZQn7tGrzNLgb7MwvKAiLQ7VXJ2k2hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBm3DHEEb1fkKaaHJDQjqwR2csfcKwgsNgxsyD4HEx5ahuNCEiUGL3hSA8CTMQ35tmCHMccAGuuEtgemyPazFvo",
  "key1": "2rAXVrfLHK6fd91vTqcyHA4u8Skf1d9fBc3cBzZMkYBppGSUkERAYjGct3HHFppM5nz48jn5q1ziBbBAu82HhSYC",
  "key2": "3F1hkoTCHpHV6KopjSUAFbM11pWgGKPMrkXzGcfikxaECvsJfzRWAE3jqoEt3JcAx6R2Rn8WxSLnqt4G4Vm1sGg9",
  "key3": "5LMwa9zGqxPAyrBs3RsRiWpXHRweDCuzCRceYHujH44S1K17JAcmjLhNu9kVtdhXezLYng4seMoweJsKBnX8vcKN",
  "key4": "3k8nLgQcS9vbtdPgZPebiw5m5gen3qJ9EmqBkqCLxtKrG9PbwQYbjfXFFHTBKZeGSeLWivTjzHU7EjeW4fXJ7FRf",
  "key5": "5LTWWUZ1dtqTsoY3rH3zFH6E6ct76qtMvBYJmqmfZVMoKusTF4qwkeuyTpw5cCV9GVysDhCoGYTJ3wJ2N9UdTexy",
  "key6": "5yegA6aq91qwfUkUPDR9VuHtZshB4CfkDSijLDAqtEWEJFw3K7S2nrdjMrJ47C84TfKDhwFFJnXxDo1wsuJrRQ2a",
  "key7": "4PgyDmBTpzNyEGwtB73t854YvzYAn9hj6mifwJ2WJvbv9vc64BL2gS3S7Tzh8RPXUDQ9uVzVYnuXXth2v5YTW4UK",
  "key8": "4WufPqDfxTYZFwr5CxipASLAjVbCDWpHBS1xZuSqahTJdTCJngPmBDysmosXVKBRAU9zC4fQh7p5TMw212GDErGc",
  "key9": "226DhLHcQsqHWEmfAt4VkSByN2mgwc1JAMUa3EmEUw3183nAKrK2esKPMCz4Y9S37QT2WiZE5K6wp1am8MmYdyH5",
  "key10": "3Q3zBfcfPYezN2Fcxokc1XnqeFGc25uhhL3m4CvVhxmDB1v4FbdhFpZ8kwQvomthe6kzFZ41SnWQkjRk8hLVrZmo",
  "key11": "5gdeZHZFtZoYtNUSEDDY6PsFRtv93TxCDNaR2NhHY8ahAtpjK569JMUqo1ANntaCKW4NkCX6q6yrFvEGPpvYjY6W",
  "key12": "pHRfJbjZa2CXFvgqLUk9zXfBYXUdpJCWzGXbpcd8j8WCGCcsrt5Re6iLyHeQZ3BK6nWGbYDezdnJaJ5gSemJbYP",
  "key13": "2wg993wTFoRfEtukMJWydmAvmJjFg8NJcipiCNZdJy6XbS1MynAzv8tsaqjeN9rq9YMbe2New6n53HGpGDmhLTNG",
  "key14": "38ri9QxXJo3dwpHGBAueYgVmjoBrH1Fw6nTnXErqYt5fJXDoBiL5nZFvctukzCFwFk8HFMR1VVgEoZzc5M1xpNh",
  "key15": "5twP3TPeXeVa7HZKWpihzof6v2CG5VnVhUDQvicNVDbsnrkEwF75TD1ABGm8AjC7bLJU6zoshtnjUchGzj29uysB",
  "key16": "5utqxu9nEomaE6ggphXKX7sgYZVBDNMoWCvozkKBuV6LP78Ae1vdKkNnH874PNgVJU5XmiXVaPriX6Rgd842wgmL",
  "key17": "gfhxZsmJz6UkgEbJKP6qwPF3hmwyxUSbE9i99WH68u7e96TCFa4rhn4ZxW9eKaWjM8R9VQCteYVxhxnDS9aQbAi",
  "key18": "3DetntCJoyYMfhkMCGSQvkJJsZZ2dTvaGMYcH3BATN5EqKmiAyZGD4ncP1VTV1KSbZe9QegJdkYDTitwb6cJpc4D",
  "key19": "5o33mx3rVC7m2oygijp8EV78hcDLcdRRnaNTwHGsybtPmXiTVb8L5rF67wvsZu5RghbuiVsDKToCXjEXVc24sH6d",
  "key20": "2uyXvkC5eVtiovnx5fdYopEmXPzEzXfuaj9t4a5A6adFz6v79T3jL5xWz3zYHzksw247oUW29K1ovVqMATahVcsV",
  "key21": "miudofDSomtSHiRz3P6rUjAv4gTQDybGYrnovDLYbjcWZDaXRALQ45iuej8EjDpLALQ9oEiveVze1w1a3z8Rc8N",
  "key22": "2HnWTykvcwp4fMuxY8BxQLXY1kNt6TfZAec4CPMVtUETCV7BRYLa1qmZpH5kXtyWTpqqTQidt7yLJUhgd4qar1bv",
  "key23": "5AeiHrHFgprWqK48WEEWdVWt8sXGxdr8xpUArurSC12zkM6ai5zLgxCY1vkULsP2jfCuz2qdsfcFnwdR4BGJiyAX",
  "key24": "2GBEeGHQXgFTvD9hGs9RWZrn2NnGHni8cEvtbmFWVcPBxAJruvEYZ8tas5QEWLdMPN4YiRNue98QC4ci7SWopUiB",
  "key25": "3ZaXBweb583wBh3jorEisiKNxdbMj1KvA6HPvxw7dXgG4kEaEUkyPhTumXEJ9CXXvyCyJXzxcDSY4zkf9rzwdCfm",
  "key26": "2br7Hj8ApfRD7YgsyfPgCnpe5KLuGkQ8K2gtwYkAoqBL7BnY2hr9e9kTMoFeyLLAtw115i6eiaGWVcN6wrtoevhN",
  "key27": "2SQKcdfkVdRiPoDQCBb6S28EH1HYKBGKcgC7EXsqykGLm2JtTiHSJxmwLx2xBUSJGushN4CCGt5stN81dy1YKJfS",
  "key28": "HMyBGiQZWNkFkTANxQXGB4qadMmSscnBwgdAorebYu7jBGmN3htZpgs1haRw34QnCX6JiTJrzTaR7MqDzD8LPT8",
  "key29": "2MxcEeRjHu618ciwRcnqZYUbCE32K46DmDbKpi783vcuTNHdsTkfhCjcZ3kggboMXaP6w9Z4UAaEGrsUhrXD4F2w",
  "key30": "4dqoLzsUMfnPH5g3ANBc5hnHQAEARbEAPQgqL3skoTzX8xYAXo49jdrF9DB2sqQ5Wg2V8hFhpF45KGrafbLjKaQS"
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
