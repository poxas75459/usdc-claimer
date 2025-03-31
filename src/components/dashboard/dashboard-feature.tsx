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
    "2wsDPojmaKqW5wZXsbByaGFZfhbrSQzGfD7yJkMAMXFmzbz3ZfAKS58NM2Foame2PQ5FBQDvxJsUwLG87UEL4PGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7ATe1uH4PVNEv8yApwxB3kzvKdBdL3eL7zaqcDu7mJcTSFb8HWoyYWbChUvbDkYPGHEuvh8pjFHwEbLCX5ma63",
  "key1": "EMFCmeYPiwG7mkxyMGZyL9JsLgGCq8Wf7GPudgwaxbCei7SZFyXTh5LoLPaR9FB48cDeFe85gfrmrfPB1oNxsQy",
  "key2": "2oAr7aCD8fs45ECEY3HEruJbhaTJuaXQ9BkcTsvETJL7euuavcAjmpp2i9uA77Yjfqmkrm5kdTFAcBcNLche2h4z",
  "key3": "4tt8o6kgjCRZR7oXS38MqaaHoNAk6QbS7jMkNGGt5u81vLUBPvpbSYuTt4LvCxd2b1ajsNn4j1xJnY29Uf4BToKK",
  "key4": "4AYdvsjLFs7im6A7VCY5A9Uj5FfWf6tNYHvNR9miesKjxHBR16FRXUK8j5j469YovTt3Ev2LTXTYeLAusfjyyoZ2",
  "key5": "TmtDpTxpfzBBjcsNcZJi2fc4f4EMU7dTHea4AZ4YvHRdnujaWmuLxhCsV5XrVPzAAgtUrz4r7J4MCQedtntUfuw",
  "key6": "4LmRSifYtwbKXMZz1qQNCNCBaAM7NnzPhN2mPTb623Dy2MofUcnFDeDAXrkXhQ8qRK5KCTYdEyhhkg8igQiNhyLN",
  "key7": "5zJ29Ke1VY3biPNtqG6xwYpjfgQ3HH4e2goDavaJPki1U7QzRT9s5dEBF8D5uGVwLFyvdUxBmU2NCP9vPFu1fjxg",
  "key8": "5qR26f2WcbuFQWDJaNZz2dcx5yH7pSrrX4KxuACyhU9goZ6sMrdDMEqkiKfts1EqPRcjKUMnkw6kDnzYSFXvmtAG",
  "key9": "3zEXkezH4EdL83TyfJgyjtHZS3XAjdYVde8q2vEsdkB35nRHsFdcqAy8a1XegUABKVbDbe4H1uom8pnqawdWjp7V",
  "key10": "5o7M4EZGHnhZtjormEh9TQYpeTB7v9fZyU6kwfDH77LbngwAAqHBDpDJdYZ8jVq2PKZrwrYUB8koeaaSvszVTnXA",
  "key11": "2L2ozUEBrU9XNXedhNihXBd6EEQX8BCTQBZRWe4nzLPgdeHdnVybqx2Nydw6Pwhtt7FxNvgEncm8qAj62PCkCjyN",
  "key12": "W6R7LS8zktHjwRxDJXqTKNiLkGkUTXYrUQhiRBa9q9P5rKm5twqrc5uRCFqnx3gfmVbt4yE8FJfpnHaSUp6K7we",
  "key13": "rbKw3Tu4q6ZUxNxpnAn4XtWQ7JiejLyCxsCAGwf9aFwCfFyNJ8UwNgnSUmBPLMGz4F7t8R7mRWbkWJYEFzJhhWP",
  "key14": "5AXWvq1Z1WC1J3DrwE5ZPAL7Bcz7hLZnEGAAsmQBnpfWd26B18nfTgNr6NjcsZZUQCUrE98MHyATX6cLpNoKQFKM",
  "key15": "5hwe3yi5GzLjMzWV5W4DkmeUh1rsVCtCKoM4YJfcgn8MAdEHEPopyKRx2SysavWXoRtDdcx72UoFJpoXgv2XYHgW",
  "key16": "46mHfJDARoVy7WbBDxmpuEYSEpsg59qXWamFqCD8uCbWi8tt5qUAmgxiRJEh43s7P64saqXjsvzykLi8AD613oRv",
  "key17": "4baW9hDkECCV3Sm4LhKbvnfLGE9NY6M7ziHWbn3ugWfng4Pu58ApkvzXvk1MKm1wSUJifNv7YdbhSzhLnxrz4awA",
  "key18": "nNhxRJdqZo9TvqDPqLspiSmmpUbqmzvv7pzKw93kB1c8Uo9MUU7hJ3ZGpqoZCjPm98eEQbds4jPBHzUDeru5jBu",
  "key19": "ptJ4isSLcqnskM42iYyEBNbLDTbA51q7EbyaTwjFjSnTPYVHmk9MR9c8ocCnnXxMXB7RHvtoct9s9rWyzMWBGQZ",
  "key20": "3LQw7frw6M5F6KBN73ThX1G31aHM7qeZcJ12bf7cT4UHUVkpztRTvx1Rs82wWVWfNrCRJrarnev5BBA3Py2tDNuE",
  "key21": "2LAx3GnhwJxfojBx7MyvYr3KPGfSXwEVSMam8PWX7WvvfQLNeg39rYacHU2tV9Wzp2JERkYaZxjSaLd316hS8okg",
  "key22": "2mxmtsBfprpFYnTskRJCc166B5BQCBKVZfgdSgonj3ZdZyKguN3G7qvK2x8U9U4t3ihdWQuFv9ft6dBK8NpNbqzS",
  "key23": "5NMQTi4U2NBSu4He4Rxd9KfK3Zj15K9nUf7NzYpijSEhUJxWmBbo9RxJbhKMNRdW4boGYh3yH1wAHPVk4AhgcPka",
  "key24": "2fxPpAZnFxeT2er4aMXikuVEZ4F6uiZ3EcQU2Gm793NTYfgVw685GQ25V3QS83uKn4hAKy92q1ViRxscBTH8S7DL",
  "key25": "4Ed4JACgZJ9u6pfk4aWWg6oQdbMvU7HQRVKEyDu2ZUtwt6QNMt5Y3vjytiDnENY3FEeBhZhSohYArq3KHDMXTFEz",
  "key26": "32ndNjrvjc8FugqN1jrrKUGQqWcTdg7KVQbEZB7m57PNgrQtduibbaM7SDtecAVKJ1zUzGDUAzB9PuRc8GgFqifY",
  "key27": "38difCbWjXZuZJs13Yq8TU2qXT3wbTgeUMn4QkPvZkh4CaU2TskmQpQWkFtwRQz1AMnhxVSV44f2kjTyxdbprRbW",
  "key28": "qWZBgp4rkQGLVYfL9YqpSTJTcNrGYJxaQymsDWSVDbu9PWXzXQrWJ7ceE7vouXF5vct5c95cFGB3p56mFMtYS9h",
  "key29": "5n5jVBqyiAD2hKMySJq4CvxUMn5mDg4jxJWeqmryQsFUTqXiAyTCHEFMGhKLorpNYeJQtcSstWf5ZcJvrtAT384T",
  "key30": "VB14jyYQk3xWXZwMtJNFAdamZXyj5J8tY6oEtEkPxhSC21dzH5fn6WTMNDrLcWKFLQE5gV71NtfXMGgqVs9aFXz",
  "key31": "5MuqAs1YjZkK8xcZsQKyCpNLnGojWFQdGeuyop45eacv4aDTPkpnRUB3619WiXRL85QagtyNAYGYgAavTW988wAr"
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
