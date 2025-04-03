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
    "28SDFoa8YLsGkompTkmkrfzUaes8x4Zc836isjmBSVx2CW1uqLjaEw2AzsnXKrE6SD5dDpjtgT3hq2fLyA5cZcE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRyo83RndPKhcqfeTGJUH6FQQ5C1HbPFVczS3nzyEc9qQ9w7Cf8kRCakepxE7WGWwyAZwn51y6NGTmSi5DGLM6Q",
  "key1": "2Pbr9mEHX5Urd7UQk6vmJ6YAYHeZLKpVPsv3Tih9MHzXkV2gXk97mQXVwmH2Qk2hxv1YLVnbnbSi8fSC4jVKJBF1",
  "key2": "5u4uA1kcFevUhsfWXkpLDcgQ36BqMUPzp4CEVutLv2A55jYogJgPDbuDBhQ2rCqgyuVBzDLHbT6eqaL1JaxfcdKe",
  "key3": "r8ahYQ7XHAPWc1srvVadwyycLo5UEgm9yGMsX2wvnu1ZtEzGYHt54VxWCZYJKnH8tj2eUprnDSiXMvMiooXhfG2",
  "key4": "KXTS4b8J77UokgzfU1pUnGBzhs4DzEWR9uo9mDdirsPXyNztNFDiwT68W1RkhbybY1zhYRtnU9ANg1GZytkjQb4",
  "key5": "3CzKvRd7idt9HszBLoeCh2baigheLrfT5uymufzyRtSfbwq2pnmJFJseTCxF4bW1qd6kg5uzFR9F2bxamRF4CgSQ",
  "key6": "F15gweHhctN6PZ7SwrfS7kQbLe4kQWxtb7CAAvsRDiUibvyRGA1f9A9ehnuRJ2oUEF6s2ewBQj2YdtsjcTXB7zD",
  "key7": "22gvrcAZiTKh1Mp79pDWafPx6eA6GjzgXLiSDiu55Q7DrSfS6iLp7q1oJFTN8kXheTsKPmWDohhdApJngsG4SBPR",
  "key8": "5jMAwkAPyPKsNHh8MwEFxQswEhdM6SAipemDyNWn3URJAFyvwDLsvVhYk2WHZrQKurdpXRHRszbe5bbpjtmtn9Ua",
  "key9": "2qyKLQQi3DSeC9LoiMqE4jQ5pjdbx15X1dCzdXq5VdSYiJVDZ8vS5yVrsoUAUaaCu6cdmNkmXuhkF74HX8367cgc",
  "key10": "2steztkAGaYVksYp5e4Ym9JMF2CkzsyULtrYYAYRTFyBD9xJdcomQE7ggMPBtn3vRdBtbQgDStesiNy3Scxepggc",
  "key11": "UGjoZcmxgHa4pafdm3mxuQuosz6j9tWGzezWmw9Rge4335XAucE5U3nBTvsMqYwyFJnL8f4j8EWraHxr5KTqXRk",
  "key12": "5vNpz9uCg6Pen21F8uqT4b1uLWaL4mGFCjpUnDNmam1Q61zJhJwPMRwfX3aEbSeXhG1a2ouw1W1jtcvQuvgVdAYx",
  "key13": "28EW4WYuJv1f8vHHgEbtEMwauntiSp3mEbmnBYvRjNWpLAqYBjbbbRCxRLeZF4zxJHTAj4pUehDGavEmSK4KtrMg",
  "key14": "5EDpjFNC5AYMUxY5FNNC4E2SRedecDPawpiHRUuFSxwVd46NyZf26AySPqgGxXqN3Y7yTvf5EuWTsy7FR59UkjGk",
  "key15": "4mAhLwKySXAxLVJC7Ez9vLustb7KotRr4oryYfKgjYBwEtMMj7V6oaEXBatq7BdA35Ydznpu9J1piPeNnA28cD3t",
  "key16": "5ZeSCwXi2qj5cYEEZ9Z5MRxr72vDZ343MAwTjeeTNCuBu44QcCyqvrFt32aEXxG3MM12UEgbMeNTkViGZcQCZbsV",
  "key17": "2twVGQVbzZSyTz3EETswi2JNKDRpafdfxKRgj1xkDpoj4s7wNaPE6DftnVeY9aHhzkbn7yHjWfkoCQHBaYVs152N",
  "key18": "7izeALNvh4dY6GPWkbhdpmgGjLnEoG53LD1YbQmmw6YdBXAid5FMNof5gCjhma2PourvzCCfYBMCmYqPuBz4PYE",
  "key19": "5LFQ9M7f8XiRJ4FFBV5szoHL5Ks4LCjW4PkDHuL8s2Gs3zJrSxq9ACwpZak3sEmj4HuUhu6xp7NdZUtZm9tJiDU3",
  "key20": "4F4dWtuErhcSUXWSicafuiyjbfZHt2aeQnCTm3H6sNucDBAhCybL8aBE2uvg15dmUkYF45oz13EL7a2YUZ1HGyXG",
  "key21": "5LRGDhyJvUoxt5URaro3oPvSsJ3cyUvLcPJNQSoEZo2cqPuKkodju3oqM7WznY85RkqGLnsEdRBVxpURZQL9HM7L",
  "key22": "5LcNPz5iEkysiTiTcn9TYWHz3j9YMiEJfbuZauRW8wJc5hd4j37XQHH6G4rLfB8yBos1pAcAb7ro6yAv7tLwndJd",
  "key23": "5Gej4C9BEDUxBvR3UByWTkAy5NWKupqB2dAvu7W3zXEHktBXSBdrAphGbKHZvqmhw4Cy7nPWrcHPLr1NXTkY1pDd",
  "key24": "2jNZrNL91CDjb45nSoac7Z6GHtHpnVhJduzePYfH39DUr5dCrM2ygyVKX1wzYCYu4hTphvAhx5XYNqpgHnAWRUNq",
  "key25": "5udVfx9UgKU4SRqWERASRG4WYUq4g1ZUKKhNKvqLYXmUvcnE1EdA3HYvEAHYhofTh5DYrpip3WjySuLtXkF6YD3d",
  "key26": "2xJG7XR7h5EKy3Tr3SRnMg6GLZNic5nTT1QhZnuLBVVLZPYTETsF1qcAtTM7t6xcRf5RLA31oaN7r3pDdGsBFhk4",
  "key27": "55jgkbtoRSwAQW6dDKVbqvvzc7UdfMZtqS3KsHqaRRECWXWNizkg2FaQ4e6JzhoAnJnQoRmtZffhKSWFHMKMjtPa",
  "key28": "23gezED4AZKivMg1UefjcUbTZkHTZ85uDiu7c4Xy5QGBC72s75fYfwJQwn7QgnvZuCbQ3HEHyasp1UrSbHnRu9c4",
  "key29": "5j7AT6eMnzxSm5A42YtHZkDw7wfMCjNzM5AEH23ygJLkDfwAMDerGd7YDJgwYPHb8B4vnoQMwGHVBeEhCdKgigUf",
  "key30": "2KhtXxwGQHjCqQQewZBaJM1Q5J3ifQRbLuZA3tYu1CH66gHA1Ze94GRkorEeyjY43yJntA5v9NKrYhJzwmmZi2Yk",
  "key31": "4o5b9o82owudEeMBFkFs9Hqa1wrGhixaRprB8Zxxx6XTN76X3NsTCZvCj22JHzzuvw64jYYjH5ECyGp4vu1BcpsA",
  "key32": "4rDQE7DDmLesA51yexmsGAVLWYLBhcJH8xuTzuLExSGQzHaZu6jNdgSrEy5mCvA1S1aaXhKY1WjDMeRSaFjagUid",
  "key33": "2F1i8r87XgDkMsfiX9iC9qxEqZFtmfbqaJSsa5PSTzi5wfCmpqUS52TcfRmBpAH5L1JP1sGUKRcueYPp64HHoPPw",
  "key34": "5kfUJyvEx6zaGD5ruw3wE2f29edApPfsGwshFDEcUPkubpEiLgmdRy5xRmoSHqGKZqanExURD9CX3mt3q1TcTRye",
  "key35": "3dPqg4fBzfTk5gyh39vwqvHJ8Xo2Naih6ao8kGsVT3WXzyV8uN7oQVbKAHshkUH2UypgRUb9VngLTw295aoh188r"
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
