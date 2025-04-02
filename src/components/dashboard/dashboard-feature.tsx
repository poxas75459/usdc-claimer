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
    "55xoUxY1vEiZ7PaiJU2QUfnq66A62MDJqYQcpCRWY8cP9ybmCUEU7AoF9uSVqVBeyCfhPHmkqT7uYr3cb68aBAQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58m9qB9R2nS8Yik5srmUm29biEd9wmkv1fZaPuFdU5S4UqL4pa8CeBadPTidbUKn7bU9WdzV7vKgFC3VZYXX4hi",
  "key1": "3FS8tLdomX9T3x6Xqj5jay29myjTSj8QFXA7qh3f2kqcLhwKP6YHcVwSaZztZnWn6Bev7gEpBC3gFMHhVGmbEhw3",
  "key2": "5f9Br7G85GvW6A3CcvJf4TjD7n4oFUD5DE1Y6FnfxbMugQkCAqDo6BFQRoBqXwu3u3bvL8tT6tXauaFLX4aDqc9h",
  "key3": "2fX3EFxQNKW2Z5BPp89wtCNwxWsB8UjiGKbUp6fyGB8c9dvXJEMGkAxPPwH8UP1roKix4UwsX8BmuJH23wztURm2",
  "key4": "5Uh6vyAJ5QfzZ1kCjW2KG2qDC5GEfug4engoUVGcX6upJirz5pngQryZzvUdehkdW8rann8s5Q68zUigY7jK2XBp",
  "key5": "oyGCrnc2bqMQ3eRwaoo1jrmfEzHDjcheiswXJUZX6Hf8K8efdpguYUjCQbCMCyJh2qvPhXXaqLEwZ3nHfrauAZn",
  "key6": "5dp8ivM8f7YcRCm7MVkymJ3jG7jRh7uhebgaa1mTVzdSEKbUc8oYaysRJfCg35nidSjAHGZ9cRCrtMaLL6hvKwCf",
  "key7": "4SCYY4jqLZXF1GuuYSi4UdB3AbA8itp3XUQs18bQzTVMmfFmLzqqkW49uRhpaGusfKaXCTgLgU9x5zkF37qScpbL",
  "key8": "5YocBzx1gxQZ7qcYH74SVrLGYdwwN3AT6pHJnUYV8VYAD7rPWj62YNabZtUiEbMR2Ny7hZ9gPNzXr5NsMyTk34CY",
  "key9": "xLWWoZfp14YCYVfvgK7hFduNTPLMd22aLW53tEVfTgnmrVbS1QWJ5i29boiU9ZzrfsndSQVHB4aAKf6LW4GGp9C",
  "key10": "kFAv3izWqNMbhPEJzfsrguT5oz39UzibPShepByJC6bP3Z1RKCfHLHvhbc62mPk94rhLgvZ1FyWc5w6BBT7ugPZ",
  "key11": "3v8wHjhD3agZAsRA6yPwsDpYm2K3KDD4AUrvhWFD6GWJ72mBZmq85NHEMjXCumGfWpgWoMuu5Bs7xbkKoStqaecp",
  "key12": "2C1TfU8NSpgbHt6TpkLyrAbus75HxkL9LELj1wPuPxAKtWQRnMCSuvBYGxnnstToyGZW6cMvKrij4yKbeiSvLTZ2",
  "key13": "32maTWWQDyBZQnfJVNZVweW92311ttcYTP4P42WP2QZe8Eur6qDEVNhB5g3QYJYcwMvgs7j6bdyyHPtqBTaN5FbV",
  "key14": "4Li7du3yNo9yrohsTmmQxapc5B9rEzSCG7CDYxyJCiM1C23JcTSJ7GaF7m6jb6sWnSpJ8nQGtoahkGaEqXKrV6Un",
  "key15": "eg9V7oXdX7caXS4bVpnaiYcNWQS6vEbpPgDFGnmtHXNzddbUkUXfKbye7FQEkQV5xD9jUF9p8ZrrjMEavdZpAAP",
  "key16": "6Dxze5U8KwUjhJfokLeQE12sf5UdMbcpYx7GQt4yzKBu4fn7vj8dQuzc3feXpZHSEG8X3P7N2rTTQVc25uaR8y6",
  "key17": "hzksVzkxJirGDo2DVfWL2RBgSfdZ6HTDhaJzvSfCrS4yPp2BbqE2H2cafSA7n9LwH3KLbmxQGgaLFpZu4rwAHjQ",
  "key18": "gDiSdKjWgo3u4srVff9qTzTAZ8CUN6fTtTYaRBrmj2dv89FTEFLEq77NjfUexYnCjhuLHegtqEC8bXt9GvL8Fid",
  "key19": "3wh15YLYXb8yTeE4L6K9jVGLkVH6mzBcg8C4ZVKjDZsuRsZKmT9DGmEX4Z5XyHrzgEFFutYDjy5uRFbUHJRiWZj",
  "key20": "56saNmabj93YMZ7Y6cjWkfQ71DVcJ2gS6aUy6pTN6NbQEkWNi2ApCXE1SC2wn6yrPuxJZKkZafuUYWgaHWBVr5rz",
  "key21": "3zkJ1u5wg1Aj5Mxy34XwAMEEZzQJNTjTsmDn1Lggcbc4j5YrBfavL2Jr6RRp5RCCwM6ocy68hdU8VpahVDzxsjPD",
  "key22": "AAUBqkm5tW7tJE9X83wUUHDbSn4bHYegPcHgEe2ATgcUmpzTLZ2JsVorUsuz1i2RuYvZR1kByp4oWtPyhgX2ubA",
  "key23": "4BDuzXeTueawqX5aTrK6fxUDiun2eHegcavnNi3QtB76j8931rmw9tqg3H13L6248qnAQ1UoMuVzAwpShpZmV4WP",
  "key24": "4qhGuwb8V9H9T8VT5WfVJ8xz9NQaX216CrHD7NQbTHqfqrpSqPLP7AKHt1mZz2EjHuwnTc5DJuoaTUWXtuytxvjp",
  "key25": "zSesENwtGAg3xmsQqR3SH6m2CmJNUYCoPoRUnHjVYMciM6xHvqgHo2NjTQkHNbpmB1Q1a9iX4eeJHdcFLGfrAHY",
  "key26": "3oQczJ74QQFwwNNaBiqKwSUjdRDfUsbBGHSV254ph6umJQmvQeupxEfmzWqbMP3nDKdfHyLwNeFAopg445XJxxCY",
  "key27": "N6EX1v5UYoEaS24HLfQPTrE4nGnWvcQcBqV7RKbUfCq7eZbF84aRwJkHwcHB92NeRWDpRpzbeyKsycVgrnqje4P",
  "key28": "5ya9KyVpm5mz8gQFoCEbYZ1ZRMsSCsW9enEZcQ3Xv6TBXhEXYdxkptS5jKfwWG87AomUZH3egLjxvExLVwaAbyad",
  "key29": "8CiYDEVm9mv3wM2hNtycEiBL4fTScnw2DUumS1LJJjxWxUTvCyXQDwgaRekmopUj2YWED35dY7BawH1gNWC4hQc"
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
