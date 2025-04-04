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
    "4y2g6vCqUWJZYeRN6KzAioWoTvG6rj58fbogSTZusdMn35sD5oLCzffUHfsUxhWVrkmEdf6DKYrpHj3SjsTBFbuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hqfhtL5eprpQPJbRBYe3jyFTw4cjcrTdXeQdBjcotSQZBUcJaUaP9wBh62Db6NUJ42QAsPymUhkoMVYqX9SBNDt",
  "key1": "5Wj882X85EG17TfceR3sjHjmLai1jxur8T7uNkaBUBwoMNELBs2w8VphtkRC2g2nwAL5sqbPEiYdDUMg7syvS6d",
  "key2": "3jyBauqWSXECMWfuWzkmijLjbXa22rfMFocpqFgUrcGN7oSKTvD6v8h59p9uoPCuWnLqbCVjW2H29JWqJ111dRfG",
  "key3": "3JLpiUhfeG2CFheTschZyjLki4FiZaue8bzb4LYepiiVNHs74uqHTpwCBM7fxpN3e4MKUn863LUxNiioycRWD5up",
  "key4": "2WyWjDzxiBUsvn7vAvFatnr3itj7A67n5XyBBtFPQrRhsTrUkFpdVkgeYZUJtaw5diqG9PEVLfvp2Nc5bSihMcms",
  "key5": "3bfoak2PsN4zqcQWH6AKHNDxqK7C5UJgfxvS35qwUUZ5ZJTXBddQtjYtMRW17rg9MtCnRtJVJwFormUA1MBoeUgZ",
  "key6": "49K1rZAHmrsrzhjFUoNtmMBsow7wsAdCzUY94wQtGpcqUJpwi55U9Yto2eo3YNk6ViJpQAD19x9QM766w5Vfn6by",
  "key7": "5ifVMwSukGhjH9CRdvrcxU75zcPZDMF5ioxGBBgX892Pkzd7PdvZtNDYFwkd1wvHGcGJ881Y4TnPjaRt314AeGFd",
  "key8": "2qvMp29ZgtbihSMeXcShAd1go9o85C4ULZdqcM8ugEiiHTgHnym2Kq1zH8BjtD3PNX9fJiGGRh6XhNccm8qGRZrq",
  "key9": "5wmAegx4rvLNgvAANFJ2B4mAHwjKe1Xwb21bUiMJM1zGrLPbNdtrc43Ywsn7JS5vyMiB79vx873KKL4ypydVbJUC",
  "key10": "3Z3KfbCcbvR9vx4gBWMiLjL6Lb9MmA8GFHdS4AdPLffTFxk8Adk384VCv2rRQNpoidxkjXmVTTjWYNmB7fRY6FbW",
  "key11": "3uhWFkdTnVvV3rsKPHR8ijJsLqKiFBXm5RdjyruKiL4X5EWVriFfWHiK6PSpnZQDMGCdSFAte2hv4h28Mk2qjzDq",
  "key12": "3jZY2vkU2cRWfqsAzrSM7MuoYn2FN9w3VoY311XmSzpGA98APPLsY182WZB9tVir8DxJrZqkq8Jci6Jbih8Uvzy2",
  "key13": "4ViYGat9iVo4MGJYdJ6vf1fiNrmQUvQXaAYFCjvN8qx2yJaHrHiNjXpiwSTfF6TyGpJ2LFatXEsexskpSRzFjKbK",
  "key14": "2fUy2tULFEtKBugCfUTXvbnzKwfd2m9mun8VRJQACEzkq1fMvMoPJugDMp3tbRcReb1gC3eWbterw85xVq1GbGMh",
  "key15": "4Qgs2PtY5GymiyBmWMux3Z8YEwSEmyr7irZq8AFkxWfusbsNczRvEeYb9X52vYkuNBtu2VAxv2sNbN82PTRb5KkN",
  "key16": "2FrckG9g4qZiGvxcaTxVGtm6HzCms8JJUzCKdNs7oMKaSuMJG6WQVQTLDm3katrZy8WTVAvaSPX2Z3ojWkjsLCA3",
  "key17": "3ZG3U5SzsoqPDKAStspT9faC5LkiGoTApkmTrnexc6rn4qoVkyLPnqHgmugd98UgwTZdRNmSbRGxJf4iipfigPPi",
  "key18": "4baHpLXZsGsw6g9ixCXszsuHiWn6YpBiQySUdof4Dk9R5SVrSHpwtSxDa5wp18govm2oKdgEJRDVsheZx6MZop9f",
  "key19": "hEGDAbnNMUXcptWTk2mpQxYDkQkE5iw7UaQbkWmpfnjzc52e4RE6BoQy1jnWuP3SyZgeTeQjzudEa4jQiCsc7n7",
  "key20": "2Fbx4zN4SMUqtGSbCRbNbMqA57PPEBGRG7cv57eiNgXXURy5ux9xWhTR19Nbd2Nda2PSeB38sefda7fER4iQFwLd",
  "key21": "2FukXo7PR3SPZvnq2JfcMJE9Q2f8yz2KEwXDkrwC9t2NBfhWt2ZS7o3sp5awsuwLFhBznWymXgB9B9uMtEBMkehz",
  "key22": "bG58HTWgWnjvmtjjeRUWQKSjzaFtC2G4f5gHuzuxno2ZweuqSMiv26ntzY8FFnMgLjHqcP3TDtRktz3R3dmRCr1",
  "key23": "5LGGn42JThtUHnv7i7KD1dNYXzmwxSWfYZeg5b2psRmwdpXV4QX1fgw7Wq5sYHJTGsSnGDWc3tEBL2sRsmqBifcr",
  "key24": "31DBKCpnuCW4SpvzEGB5VizyD3cVfmJ5Zzrq2HajKMYGpk4qbqDZGBVU8egCEPnA94MNAXVqfTfV68iAmXGqHYF",
  "key25": "3jMAGWXCQ1yk7YLLmvmt43SJeRUdXxKh5hADwPAaYVvhEFoYnoeNHJJtbeYchbeom1taevWqfVAtoF47MUZdzRAo",
  "key26": "1Z5dg7rLJBFLQUsvjwS6EifZKBiNbUzXat8p1J7gECApGPHFXvFvQCrMpfeMvexi8rEHkDmQ3kKfdqhJ5Y8PjzU",
  "key27": "3MMV9DW8EE2Z31ZiXwi9L1FsvfjaJN7itnevai4HvCJ6WpmcPchNs4BdjyuSGiMjvHp4zKJzHm6JXnfvgyojk43E",
  "key28": "5NEBZvL4k3ZSojugqWZFeSdwBzVAyDytXSAeuMScJ25nKCMR3WFZ9FvCUEbvhQvdJ1EnAQ1nCtsFJBAN7A7okCWn",
  "key29": "RTnWkMc5PkF3kHbY1hEEw7dWqsw4uNcHr7E1thwcdaLf3t4XCJkvDc4XXoEWw6YwuA4HyLwuBs31s7AJBQm59cX",
  "key30": "3vJ7ur9XEDK9aLyfijnCFjPxcvZSWQUTnggJ8ewTA58U1gy7utZrHRNd7DxwNGkVN1pbA5XequyWazacVVUohDfL",
  "key31": "28URkSm6ynYxD4bJRu6qW2reRBfk5cjLuqY6uMmPFdNZSmK5jB3xcUBahd4Lxm2igYGUPfCtDQ7vT1EtSYupyKCF",
  "key32": "5zr9dV5jnQxFrmUqHX3L5rMCGp3WLHeHsyLHKAVhx9DzKzatp8S51jSzXf4jvVa8sFCBie3m8j5A8cMYNqidNqzN",
  "key33": "vr7tzCGNJ1NigWXLtunvSJmk2oWs8qx2yKhjK6JmSmSy22Z6hh8UavP5n475YbZkXwinqtSSJQACDByB3nrtx43",
  "key34": "4bwujUV7Xrv8SHGdArGdVPtiY5AmFNLeFsUabPESXfQBt6qHywej8Wb6D8N2o6sxtNReXj42zmGkHbgvuue7y43T",
  "key35": "2eXMoo3sXodK82TdMRNjw3xzJ3qoFW9gomQBXh7MNo3npzicUqvbHK5FciLcqgxXBwrX8NjTuBHXn2ceAQYmt4LL",
  "key36": "5hkaLqBThmxCAsRwe9xYY2wynhUkuysy97omTjV1yzCCkVD7G6ByHRQWRcWAZcfgXWKVHsiVzrX4dipf4whcB7qw",
  "key37": "5mUa4Ux7SPh5gp1PphcXUtNu5JVSDcaeaZ8wkWvzjwSLoMYsRR9SAFvuCp6M4Dgo6v5BMgFcTP6QKYnFiCnHdpqt",
  "key38": "3K8KgME7Ue9GiNXkNs6ybzPbaMsWMuusxmoCUYWSQws9c6JMfdrp3n6DxD5HNuL53mk2N5Cr2y3v11LPtd1i9EUg",
  "key39": "5uUEt1b5uPpSho6Efpoi6t5ayCJDcybh9XiMwfEr7E42iCoeqKpN8b8hmoPMurBYonivhgwwBTYeniBSKQKkJhKB",
  "key40": "3GD3ocTwPM9gGVXj9fTtbKYQgMFxuQRRe2gieSsTCWt2eCxjxqYMSZWwBxh7Xk48paEv1v9D8beisDx4rtKPTfAo",
  "key41": "ngMuRmU1eJaVNisSW1i6aTWLhMAhnSUJBmaKrsE44BZjoHcDUyj7HqJ3zHzGa8hvy4gqiwLVdDRQZTaumS9Q6yu",
  "key42": "o6FTQGTidg6Dj53bnA9LHSiGUFVMoZyMsWqVALtztnTCLuenBiTfPm7fSQuor1gJ9GPwyGKM6hWosKUozwX9Ui6",
  "key43": "Ka8TXCHwWWeCvD6fY4TWFW2uvdVff2VCzo6bJkTUaPhxneT5SY827sDyVYqXN7cniWdYKeYVtC4xAGSRakZcZBw",
  "key44": "5hzDAKP9mktujVKpacjQghpGojtpFpNFx6RTbkRaKkyPE2Ca6qy2Z2MQQBJwwNHxpQvTKRAtTdT3gCFJvQCU1hXU",
  "key45": "QC6629qefz3kCwwtMf9oHpryCu6EPz8Jg43Ca2aSmnQt4yZnLZKibqLvz2PRSpuzmyYvAyEEM6WQqzorwFjaeaC"
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
