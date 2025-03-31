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
    "5BYyLWcRtvr88PRBYMfhM8zukZzfPQpK4ht2vstgWVu7LvPsvyabwjM5G4utCHTpu1V7EwkGoBhwbYG6ie87s6xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m74YqroK8S6B1EXFXRrW4f2eekiRGJLFuWhm47kTL7z9engTpyD5mprF3gbA5gE5rTAF9PWfFpZyKcSerx5o8kU",
  "key1": "4fdeFwsksBsEbrLWq1ZSmuX15etbENM64zgnMALE3tK28NPbPDD7gdn8t7yYztUreyNgcTpbrjTS2GSjVwJhPzE1",
  "key2": "2onwaHygnJjJJXSxXb59VjGTco1Mj2HS8dTPdUp32cat6rTsPq2ysGiopvfSmPNgqZxsJeZ95DKyDPgEbtuSmebS",
  "key3": "2GafYqPw2mGqpqNJqXD34jGudomvGyVhJoiYbfkPg6ZBJkdbHh8RoU9R9SYnCpwBjTAawv7BVFTECkrfAs9WR8ec",
  "key4": "5LnVqQNK5XwZXS6P7WZ3krxyaLPygHGNriEyCCTC4NmVcTHMF8Hu33hWt34b1Hi8QUD4EjLQGZuaSnRx1kBdnm6F",
  "key5": "5UjGszGjmRUPwqyXgC6iTj3E7xy3QUtYbuBi8RBFYZh5jXgP3fvf6JCHq5GbDZkGyinHi5JFCCRfR9Dd4YnQ9aVd",
  "key6": "NrjhMqnpCwK1i8t9RQw697myUQ19B6xfKDvDx9xweNjuKug1ZtBqpReSGh1Nu8CyziEHCWot9qobN8wqaC3bPcB",
  "key7": "5QAoJQkRtumDShwUyCbVRLB3ahVFFR4WqjLLXFaJkzP7YzgG9sQho3jWVnzAXvFGfsbaHrpKQUq3vhhtThJ5xJc8",
  "key8": "mFH26Mg69WXf5Px2U1WYyvmyNpzucs3kQiWLU8ACjiyMq7JsN21AkJWxbiij21K2rkupMz3bKuF3xJcPj2rxz4Z",
  "key9": "xt3SFumo2mc4R5UeDWjEdeM9XHHWq3RMNwSvnofYTYaekdsFe4yKsc7xE5fM7Frskv3kZ1MZj8qbEGMEhVURczh",
  "key10": "4it2sNei7Yegdi2YNvtWQoZa6o8evyKvfsFMWhnZUUkdyFRG97cnM56aSNcwtGSJbnzvbc7nEmFxhEW3KPTjAMUS",
  "key11": "u7bWKMP2aEvTpwL2KzWew4wKkzozMRV45U19EwLZWgFCEWHFgH4Te1Ftxa3B6Br9cXRZ66bN2XxuYoAQcmcRbxU",
  "key12": "4ZcxPehqPr9NzHabQxayxFiZBnanuFXDT4N57eGNNTPrPLLtvcZgBssxhWrpThXJqr8ggY1TuoVJfQvvdHFugk25",
  "key13": "2JR5836asK5DbngerkRSMY9kqPc4oLxEi1RLvM6fnqv1c1fi7CPESNPt9dR1GaX9ak5C5jR35KqQiUKXMMW7MmP7",
  "key14": "dc7f1eWhwV5uKLvPeF3YCjDARB1arxtdY4Uau2hrJE14Kq4az87tX2cKAj2uoDpVD8nzKjTVcre5ZatUgW58hkQ",
  "key15": "hKjLpEa9ARbMdqWo4ekfZeqPDpEjgT3jLEsEtNRqr5ctkL59XTV1UEiRa8i2ZnoJzb8y5Ui3CYWWbdhJa6ASDWS",
  "key16": "2niHL8vYaX215pR38eAemsJzjCbenoKckekjhqWDDEswoJNJLdHW5u5shyWMFoQRVZZ8H1EApJt5XfHiBpdEUSJG",
  "key17": "4UWYfWGShAQmqYKBLGwhAnTAwpwrwSrUswuU9Bifz8hGju8Vpeh1DSRzSAiynHcUsTh9wNqR52xuCUHTEWbkbz3x",
  "key18": "c58cQShygnmvT69jip7ZiA1fVVaJdZjoa4UhY5VpDqYEofR5we46fSKP2gVq8LtXs5PTMt3Vm3hBsTBnu9HgxxZ",
  "key19": "XG1q8FShJsS9DSA5Nq1Ww7Ev27QTPRd7Axx9wsuHyejDcveVewaCXpjNfxT17z8PvjzeZM8ZDZib81wdXJXDqqW",
  "key20": "9LEX2RWu8fBSWPGBGCk9mv49m8832kCC8KDQYBnK8vGYJc9zBu4R43qwjYScDPYHZsJtFZkGEYpHCwfbKxXg4SG",
  "key21": "3P7JgtmNStDHDKkFiQzyBpFo2jtoVsNbFhzaGVgzuMmYgbBne3GBc9d9yxci1VLkW7jsdjgLhwFC1Ko7bEFJ5cK1",
  "key22": "3s6peDC1zjUXW4DUcrVhU5fcjk7fCpNDCK28ZJgFaNgoQWsAMtfy7cBjyxTBm5hLMMn1FnAJi5H6DXKG3G8nALPh",
  "key23": "616TCdfYKNj521XCvaVkVkibnrQEpTNQK3DN1fBCeW5sdZNRZvuuLCwrB521VYKj8FNjsm7XzBU5ak1iCvzAdWBC",
  "key24": "45Q9Z6GeXwhxSGkg4YjZH5iwcKL4PSZBadwTM2Ccdki8bicxa9oDbAekejNLF9WVXeAdcVYLhgmY1JtS7zXggGRj",
  "key25": "n77bN8tM6iRY4nGcPy68buW49XYRJ6QpjeTp5L52GsUt7KsYcxU6P25MDG1GvFc7sCy7kjJqtArXmyTpH8oqMcG",
  "key26": "5d1k8D9fCajL4w4bsNt4BAthZzUZoDAgPqvYjv4tvK1ro6aSZTvSUpZuku6MkzmMgNFU5ozufp41vjMDdx7kQJNr",
  "key27": "tpYyXN4P2Wr7xrxbFDZSGTD5mTe1vexzCJ2JDgXEHPGtL64oeTWWbNxHbnZRQsqphuvH9g6L4UFuPVri2gvk4z8"
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
