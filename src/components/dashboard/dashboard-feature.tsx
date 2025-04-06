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
    "3LmeY8yTG2PVXyVze5mEHtNcmkuD7vtArWEjwDt3wUqbF1Kwg9VeUaoGet4mp61rb3nUKchfMSgQB545nMCCJkGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWhQKvMWojFGuQBFKwGFb1a9m5CNmXQi5GCZTQza8iPMNCU3g3MN82ksk8NWKMEPPgjJxZ5xhTiuWxbDDKSA3EP",
  "key1": "4Cm9nyfbTGTYpGWxipAY2jjZCZrJYhCg3SwTTbGP58uac3BeBthUzqtBSbRtby2gzcQ1iKLtAM48vgesakt8AjWU",
  "key2": "2F76iDaGeuXKAZeGuWBAzNBUbEwsc9Cd7tMSZXyCwz5eQ3ypaoKsBeeDRRPoWPKs1RxaBkf9g8vYcCu1MBFWzcFj",
  "key3": "5h4Zb1GCCCFb9jSLgy7f91FRwuRJ1MpLQVhteUmHmyWm7BaoHPCLH1tmiBY7KeK6LKvxYwaMZewBU4i39tTQ9fEN",
  "key4": "4vsShjvxgHuwivu9Sb3YZm4aUB7WyAyhbu4q7VK2FpCRbYEUuP6sEzrtHKMejwVr6Zp1Hy4fPTHbxzXvWqa59JuW",
  "key5": "6YcpHfsmRU6XukP5R4ZWqAfC9T48bA2e8J9ZVhQeaF6w2Qy6k8AUDhFCYvWFc1qnK5EJPeHckrBS7E8EWpAsAyh",
  "key6": "42V5NTrYAVQKvmozqk5BXZQy1tVdhHDREKTG8DQ4aXZofYF2GMD4Lk5MvAsxnzdRNd6VTVThhZ8YW7CEoXtBjLC4",
  "key7": "4YAnLDiEtqUXAjc3aFCtc7vD8MTXt3YqAjjVKiy7G9XGxappeeTQSZf6K6KmkccLP22vCN2R4EcpZqX8jJBsBxgc",
  "key8": "4Ln8f8oehG12JX4mY2iNQaQsagxEc3GMS9nq3QK3gwVpUJjrJZ1xo2Z3mcuRTsQnJvA5k4XEmiiW7mzTjxM9q7P7",
  "key9": "26m3dz37g4BEe7NfWdg6D92vD537X6onxjEpJ2ccARF5xVqvZYiRDjZE2XLrH4Y4AhxQCn1gLAvE2DmXSDFT4yCP",
  "key10": "5LxfixngR3gtCbFoewwueERDHLUjQpzkV5LMSMPqYpb39mzA6rmEmX4QN9SSHvL8CCrarm9PnQDirSsJyv8wQ21i",
  "key11": "5uJyfXcoEdkjcTCBJAxv4b76BWUhqkGgoDtSjwSuezgwWffq3gyLqGmGYrjCGW53teepfQSZZQ2A3jdE1MTG9qe5",
  "key12": "TEaHiEqV4t1xw3mkSx3cVT1NM2y6TGnQjpybLQsARqcz6mqSweNmW595SH1FDShTnhZgztedkCECMtAEouB8NsZ",
  "key13": "2eDmUkSEsuVwSSmP932dVraieG3phrZx44wTN25eppSPF2ECXhE6Swk8BidQJceyfpZEAoMLLbZwC6xuAFju5yfK",
  "key14": "SMeBSDmYJQYKo8JzEjgH6LjVnmJjkEfqne8Z1gqL6L7NFYXEmiVfr8phML1xvtBGbFpTiQpBPBLeEzfKCqrkhsH",
  "key15": "5btdHdY49suAKgXJDo1vZzk4qi79eq3fGq7TXh1dmisfeMhFD1bYcfisiM1ib36mhMQ35zFNcdwUkokZw1jcmneo",
  "key16": "2hVzVqUV9CEd957tQHbuY555fjuEu5jSWo6CTkf75xKUJCDN8QfrfivcwWcKyHJChNo3VVLmPD9838cToKh5bsvf",
  "key17": "5zLVK93K6upwq2iudsGjkS1oUYbx2fv7THM3P7sSvByYzVauMFQt3wv5XSVLgiVgJSBwQ3PnkGPMwVRpovsC22kb",
  "key18": "5EuZVi5cbWw2QmE6sGHQepGqkhpy6BSuyKhcZv7U2XtHDqK4wwun3xw7EJz5DwHsJfGaE8dXciopRYiYUMpgiQET",
  "key19": "5BvU26UYuWJUoeVHYXgrqGYDfUrB8416vWe746yDFiupK6SMmyNZgUMivh2RBKBJb6LF9d9uDswJ3EyUaM2JkVMT",
  "key20": "kdUYLqcAvpfDeNmoPsGfBteLJnZHDEEEijreBNbQPBbjDAbLiYBETC1CxZZoM1GZa5fQNvjwt26ScEFKY6DKF5L",
  "key21": "4EmM1MPFJuZoDPBLhmQBmQ98AYqQEaoym5SvBp5sSKaJZxuXnsmp4bUwzHZ9pwRYkq9THbQsaEXiQjsoBfsgfLWp",
  "key22": "2ftb9e8Xc1tUMqBPe4RzDPpfdDHvUtb7H7ft3D6NJmPe8wLseLwLZZLMTj46oi9KXKoViSUXuhmftCbgEjbfUF8P",
  "key23": "bo5eYRbujmPdng1rx8xb6etcBBH4HogridfboZ8KwLbUMiby52PUjDn1aw5KmfKocLjDV2iSssDBJrouEHLUBVe",
  "key24": "3C5tbACFhUDgNu5iHvVW3XyMhjGvmTWmvzHXZez29vHm3WnUCzHKCDFJN9F8F7gc3LKzjLqPm6V5mKJjGq24eYj",
  "key25": "EzFk7HErMmQKuUTPpAvnxgYf8Q9G7bkAPRytkZM4s2CRDzaxDzNGJviXWqmYiAJb6iziK4NPJWATXNuse7BiEKo",
  "key26": "m2aEfTjyzJJ9fYKL3fH1vkt3Q76BFYNpGkkkSZks3dhMX6oHeYY1mZx2iCpZP65JKSwahjFYB8yALoUfTggMoTN",
  "key27": "2RZvxsWis66fz17NL4jN1TQa7gSjg3CVHQWvA2yHusWvMj4k2ww5ruxnpiLQBQ4PAvVVZ5vbSfVUvqaJ39ZMy4Mz",
  "key28": "2MsFcFcSgAvmQVL6jnTEyzNyx8qu1E5wH8Pkeynr6sVwsHqeFR6FFoqXvLPhXMjHcYYtyhBxpzL5AknXWqGGoV9y",
  "key29": "2MZEySTXcf5nJLnFR61YBw3tassGNxdedJfSpLJy4TaHtLvAu9NWEiPXLU1EQRfPXiASoQHbMU5DuwqiDPrf3yZ2",
  "key30": "2jYWRjhSPcR7biBUD3CXVrfTYxE8nhRQWTvspm8fegunTNK6s4CmEDMUamRMZfXGPQbMHgMZks95DZxGrbMaU3U8",
  "key31": "5uDXdEpJKXaoo95mjXtPUuvSXgzykUjMeiWQUuirUbwiCQ25Jk3GeA6XjmQbCz68SJ5jZ5ijdB3HYfi2oDdgvDQZ",
  "key32": "37YXygGksLDQE4wZzTpyWpNgasR8bVgnWTNEHnW1UzBCQunXCLjU9261eEq8banLj22RV5dvxTPuHGwqkdtvRiDF",
  "key33": "4wUtGFwmjiuwc8nfsdSobFNaWEhJ7nbFwm7ebj8Fo1f6TBznxvBjhU5K5HM8sJ5F3P9XCzXg3tbFCHoB73som8pc",
  "key34": "3Z28EtNDGtainMQVQ6aUvKfaQukV5BiDmTBnb7KZKGYyWvBunySWvpcFzCvkkB45sXg1XPpyzD7oauX4Nt55ZQaW",
  "key35": "362GJZNwpUcKEJ1uS3S7UTJcpQTz3xfZJcnvTb3HdyjaS8ggfbZjtLhnC6SCViYLorP2NBLtJZtGN5qdWfMEtSYy",
  "key36": "4Y1NCmy7noNpXHdE2YUhjsY9gAmq4Qfvm7PZ74uU6BbBXL1ZRshcCynxRnFiwAfR7aHGUiZEngeXdwag6N7NjU3K"
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
