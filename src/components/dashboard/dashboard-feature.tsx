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
    "3S8oaaYkEA5GApFWp9hvktw7jgcHdgaXgP8JB5nXw44qD71XNzAEu2M4rNkd4zWzNULU9vu6tG22i8KV42A1CsN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqiSJBPL4Y8gvFZxaqejaFFufq8S4fSvTpRxptNgj8GUNhSQtXvZxz1kfTXrjNVBgbUgGs4rGHhabEfgV4xrACS",
  "key1": "4QiRgvhmEV2x6kwRmosSnokr2VmGiiTeVmxbAi2SHHY4C8a1EPQekqn5kJbxFe1y1fKvYiJWtj4qBaAzhFCtzREz",
  "key2": "5rEhiM5KytdkYLHNpk2KQypqdMCPNzdaePwKqe5hj2VY4LQeCMD9wKe676kCBKoBwoQF6JoZhwRW9nLGjMaxDkA1",
  "key3": "KBWtLrWAAUwqw1BujXWziXwutaYiFvNKjuTwKdLa2nyVhs5C5RficYvXaNNYvAtkPhGPDuGJXJjXhQXreMTsMMR",
  "key4": "57jQAhopzappHXd7WE3hPoGpJSvEQdap9RUrT3zqPg7zpywkkyBU3vTcyw4poQYNKAkENoykHXEzL1GGk1jHUwek",
  "key5": "p2LQNa9TQv46xbdU6CsV9UUr8EyhZ1wAfFVHGdNR8ExjVDRhQJV4R9RJR89r5pVKTFUAapWui7HYY7zH1BuKMUA",
  "key6": "5mDrbjujrsF1rczJgcJ6V6YjkdJcMFfAXQZ6RQJTqXaowwDVbD3Jy2VPVgqZk3zvVVVZ5UMtTN4W4rZnxB56z7Kz",
  "key7": "3F2EKhn75fU8RXTxvQhaapRdFanh53okbznxVn6MyDshUyc1QZJ1ecHvCBwzaMe9gRzrUGZviu6Q4r3b6RjNS14H",
  "key8": "2ZvjFnhcpaQdHm1SNtoHtBSYbNRwfFEyxM2VLRhQb4kBkh3Z9wJVdp21thCd4GGi4YfYwJnhSerx7RModaS6xPs2",
  "key9": "toaLU4mCjq8Htad8rHGvP2jfqgtso3ikzDEaWTNkjmftXsaQBNSpySJUG9Y4dCfm4bFJJfo8D8XMQQKXVniUEHh",
  "key10": "5ouyMPn92v1dhiqdxPqofWEVpY1UemTybPVB667CnajqttTGosDRejQTEv2pHtLbnJkZVTUh1DxLhyGeTgVDcy2T",
  "key11": "Ds1HNieJvvWyKSkmf5xYScMgXsAAsXK8R4DkhbMG44bjWp5dNTPmW7KDPsSmFdxqADAWQCgbsSR1pkUnNUSK1aM",
  "key12": "4v72vwQGzB6C3yjJJyHQZmBdpP3xtemAu3vYBfkKt6SCTuCv5UPpAueSf6AF5pvRoWmbrAX4X1YeLXjpxBiXhLHT",
  "key13": "4Kr48EYgL424JDawsC1LCb85uF687Jbu3DuA263mGkVfhZ4D2ivHEicx5kDNFo9S3Z55gwPRXMRuCiGyaBH7ThMQ",
  "key14": "5eMmdqSzSivjakdcRzja3LuZvgBpF9gHuJk7LMfvbmXZ9mFDPLxSxSuZnWZm9hG1Fv9QhYR4C6UBF5vLfZ8CAxtr",
  "key15": "2ZqsZ6h5mR2i6qyD4SUTseatjCK55dc5z6E3nZCxuL6xzGYkh86JEWx3hYWELqxHNk5vYedsy4q5DQkMF2C2z8SC",
  "key16": "K9ffPp7YtbN4gsUAwQKqzUcraREkmYxsCYRiAtQymVRRjaVtsSPhjYGpnnpgpiRJHxMW1rK3q93gqThrbkCAypz",
  "key17": "x5GbP4tig92TSR75dAj9bMs26bs3w91nTgfKYcMe9XLaa7FJcSw7y2qNYQTGxPrYt7XrYa57iEe7HmYkGWeJtDi",
  "key18": "5MXokxBebGRyJJF8wHjsf4RoS7m1ukTV4fwTeFe7wxMpjLausAU2uNsrMJSk4JoexMeR3a3fX5XKdx1ZBSxDQsmo",
  "key19": "4Vo2eDqQqi4p1hGkGidggMcpvp3MjohEWXBaEeMtDVkdKyDfztjjS8qvXNLuAEvYC2xVLWjkZdQDTUfrapTKufBN",
  "key20": "3cycyLcyFEZ3pZeUbDsR8oYfHTmm9Zvsgf9zfs1cqWa5H39dKpS9aWGkXGLWFgn8CF4jYWGyj2Nxc2vKMY515cMR",
  "key21": "mnCt36qu4qTMH6BG3nDftb9pGQG48ooNRQVrUkzVpQDC7NgcMnqfcUv76pCEWFzD2STzcwfRTfjou2p3xfYuDjD",
  "key22": "3DAt1k8UnSfhFBU2uXDzUozL5utTwxE4GqL5J8rezyTubL7bhcQgF217ihUL7rberobPZ77LjLU2insWuEAj8Ycp",
  "key23": "5saTFuZ1Wc5KUqWD23MAjZbQfsM6y88k1ogx9nYeU1bBxWyJwabYxE4rZbhbtoURM3359AManTqcMdGd8sj4QGP2",
  "key24": "2UR4wnTFM9BcHp4JJzQN7ihN9y3XssTFPKBVoWxGwAHK7JFqKgaLtSpiEbtHhw5REc6anhL5UZogKtoQeuFxZqWR",
  "key25": "5uAy4vcpEZHLoSCYjcJ8MuF44Uy7SH7Rk7P8N2qhbuL9Ju5agMFpkGheBRMTPJtWA8RtFwFhT76s2fkzjaYUHv8D",
  "key26": "2DeiNYU3swu5Zrv36WYscvrjyuA8QeGtCiRDA1rVkx6NrZLZtz1Hnygj848B7Y97952NjHZZDhbuJ8Gu5Rz9UUPt",
  "key27": "4rJByyxdzHZfhvKHxWtYyUUnNgLxrkb4CHUNLXbXTVqPqFmVjCf6qBgCHxkrTPFppqHaPm5XpDFDoUergsHRPHoh",
  "key28": "bY4wh2kt6cvQBPGJS5FDb3yhDCzerQUk9CW42NyUTfJBR9xmczKYGbFni9fkWUsKeHMegJ2uyfdquC9NbM6g5FF",
  "key29": "4dNbAj7TzxU1ZDcRoy8f5yT2L5pvWLTWwW54TKLxNySJVK5vEegwd1mUrPBuZMWrkDWacw7e9vuq2ELFyANQJjVF",
  "key30": "a73VLyN1qTjJAqTHvPjtr6gof7n8rWPD8Y4SLu7DkGJhDrhpKvNqA7g8DRhUAeVSoZ9FHu5C95nAJfZWwRLMLKf",
  "key31": "2ztkLwKKVAPfKB7XhQXicnJZdexJDjjaMg93pQTS3h9HTFfSCQURbVtLudx5E9aWnrQYj8sus8dqUN3aMdxaLfa9",
  "key32": "547hzuKB3cneSQTEtJbTcQ3UtJxioJ4qtdzhBS8BhPGAfU6MEppLE4pYHEFK2PYhnSumLvjSmzJ5iGiqWQzwmRza",
  "key33": "3NsSghHTtYJEf4x21vzYibFw41j4pXWmkd3sF4XPk2xtES9uu1dWKYsqYNgmXcHAC9nPZw7Co7g8axjxFmdHxkHm",
  "key34": "3qr82QpTGA9anfwQ7bvufFyAWLefypwzKdkwEHe9DK7iryNLxDB8Jdjom11PgDgXvVVzoH2btBwiCoo1pd5vbZFC"
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
