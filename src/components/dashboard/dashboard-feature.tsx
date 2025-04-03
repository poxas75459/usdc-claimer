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
    "36AEPVZuneaCmvBANKtoA41iuxGKPbGfmrWF43ysBXFTWapVZv34YdqpkaEYuZhfYZ6YL147BQyRxMzZY5m3D7eE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWzMFtQczFYzXqPtdN3sEKn2HCmNXodHefo7ByvGGgo1z81spovVmGiSJ8kaiQkoNGASDJiG1AtW9yTFk8Seizs",
  "key1": "uDbdYaYnXkxiCPmzQbGxPpFRBP44qYhTw6LnZFMuNBDUWNsb4T5LRs3VGsaPwmvBdjScABF64gAkGDCAsEnpVaZ",
  "key2": "uYE55G8pmyPW3xu2wAbzXvEGUgHRsx7LZq3JoCxJVMd6rKJYrd5fMuA7aq9RR4zkyVjDjhxm93cP3rurU1pVKFZ",
  "key3": "58AYQSvWzYG39KMZfan6cZFfhQnSF526sCaSGxpFWa8oa12rtQZa69WzrNdixH9pU3C88hjb8ogHp4JiYmLVmZBt",
  "key4": "4GK7kkrTBSoP7pFeGCKtT81HBVN7PGDcRrhJ1qysEC3cHWL74dH3NDWfGNMemSvDqvywGq58HZwLiTPrDs8f1zW",
  "key5": "P26paR1dPTtSvedgMifWv6cTkGAjxP61ak6k9JQ1cbD43w414c43ybofmfE59YEto48Zzd9sf8wF74HXENoi6GC",
  "key6": "22Zg7Pfk8oTtHDYRNafxD7anb2eSRNM7tVKFRUdQnaLzR9fN1YVPjQAH7rDJBEN2xeRAFvhDrC3DMTGeMcujHAoA",
  "key7": "3XCoauwhMtMFZUtF66MFjsRwKPiB1Rw57325afKRh1CRtS9eVswLnNwtv88SxESpCoDMjsoXWBsT1ZbDwi3KvWHV",
  "key8": "5ehwykSVK8itQqvf4qq8EXGAgi3D1VdxhHe3vccbHxdchDbu5Twzo8nLP8axxnR2y5pdb2HuDtoiXuynnsMi9QT6",
  "key9": "Xx5DMNBHzK3p6k5AofWV8vFpD9L3AZP6zhaRRvKiximXKgu3JBzWeYLd4Ztv7e2csMtNaj79XHv7k8WL6xajSwJ",
  "key10": "3NyeLZj89kNSvTxC7tzL9qRojRvRmFeXbMVgDaZw6ACBZxCzJEucJ3t9nR4qT5xGzCXeNoXNQkdAgD9QCPUbhSN8",
  "key11": "3N2zi2h7aWBzAo8e38NNw5DZVNt8qThpZ9Dg1DqHCuK3nwZeGCkUutcyMicbs7VTadRreYP5tNsxJCP2bn9D1Ktv",
  "key12": "3h6mkpaGvhfXTbw7tkGmqUsiUSnajKEV27n96r85veUeRHHQpbZCjkcZ6yYL9QYWi5ZWjDd94sdJMuGotjcztj4z",
  "key13": "3EL3zxeBYSZ9pZUPVrT4EgXXFWRX6Z9goj2UQBv3TYhrBPLDgCKvmsE46PJi89AKp8pvZRdfKGbuGiyBVHcj7Hqq",
  "key14": "3m6cmwn6TvnJMKqwdeSw3ifkcGtqdSWp7WpmmLRmGqFDLBy6rR6cKdEQsrULxkqHTuGBdh2W3FwLhsLoUreaZC4g",
  "key15": "DN4phybTmPn89tiAAAtYnUBfKNhuD5aBZkefQTUSM8YtLm7jXdLv9635k23qQGSF8c1crj8Joqmz4nc1rEXaAFt",
  "key16": "dLb4c7gmrDymrtMR16GSZMVBPEyPMmCQXWMhkkN1dhhLEcmUqASCD41rpQ6xxBr8BvhFAKCq49vQU32oT2HH499",
  "key17": "3RSEusvQXVuHkL2oPzpfN9Dq7YMuZhV3oS2spxJ6PW7Pysjc2WHhYpAbH1JQwecEny7F4N5BP6n113vn2YoqpMBz",
  "key18": "4QwE38sSB7cXk8ApchASYkR8qvo1rh2yFsETK5miE412UB4j5YbwBFY55EQ9R5axLYYZYQVWVBYhAviTB9qdiVK8",
  "key19": "5Lu9CKCv9HoTspqehkH4waeCzgnbS5LfrbzhD3iiSsWPp8xmvoMwFKLK1dSy327W6Ki58UHn5wqospUvCA8GEmfW",
  "key20": "4tmewvzueCKSAPcEiSMcik7bVQ2rV2YrwrzWdbp3WnMVtkaQnR44Y13jMhKwpZKBGVPNephQvRFxHgaWPyHAYRkh",
  "key21": "28oXgBsgQ54Ft75nmwvsKbrsPmfqMmpAVtHij4v9MMMv3qnLZbfeQmgpUoji7KwDDnT6ABcrpyB7j2cCacqLVyd5",
  "key22": "4rogVV5HsfwoGcdHigxzHQCAeyWP14Lx4r3mXwrNNx3Df7X5FHAKeJANWu4ZBrUvzodFquqbYpRnd4TqwguXqSda",
  "key23": "5LDyAZpMzGnMHAyPcjxAYzpB7Gpd3yBXx74mJ2Rq6dFaGDJxSMjwRia8w5r2LyThvqFUNwb7Zuo5hL4cxXfWvTPd",
  "key24": "35b71hL2EJ9ohgZPEi1zAsMLgzmnXnAUKa7tjKuefpCF4BcGBcKQDE4Dpumux5tRcBgp7c3SCfPXbJPghNyK9bcV",
  "key25": "3Wth3ZbHksm7aqfVDqLuc6BhRECx2SYoQ5G22apGRnjrhwQsn39QhFBvqdyQkUNuTwxCvqbCAHR8UtH7Q7js4biQ",
  "key26": "5rpMqU4dcggkrQPswNdUNwXaWy3JVVR8A6uQVWSHQzW9mWgXtT1Uq35zBpRKBEPS54eFM5KMVNn8aVXbDhZzdMLi"
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
