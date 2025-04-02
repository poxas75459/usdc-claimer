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
    "3fbst2EGjvLAgcNp6qTZ368osUEZn6R7Yirqjc9kFVnx5ZC5vkmYrdg6owa4QMw6dyxx3HSAqyiU9dUwsvVcyR8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DMwggLf5DSLf5jKn4dkD4nsBRN9LZLsS8DSeNpwVQjGTcmrJtoapvipUW6r8HNBJfVLTrbX7tzT4QMnohjMh9Md",
  "key1": "3gxigiHXNKQ4fPwu28SKdJDdZnkEKoDvqprmrHEUB1FwXCirJCwRDeQdk94u34oMGLssmbeDm1SGaG74S2hwSEJt",
  "key2": "3VAongJgaJnEHhspAZGBSdMjMMTwc5TLfBoTYiEKTnWqdS5ooL5DMrH7d86tnyCPfkevmXiZGNBzw2cBy7c8hvm8",
  "key3": "65sRcWowJSk8j1vmmXNWYi15P9JVMxKe8AEqaRP6LHRxSSumw4H1URPLnnDGeGJ174d1Zi324nY8FzQTfpY1GapS",
  "key4": "2UNgLhGvKraA8DXCKRhQV9pCSSye1vANHLhY3EqceTEBXeETgcNoxsdjAdCFoFSqpgfpAJ9gfShFtNu6c3BQWFqo",
  "key5": "32WLEPVV5DVHnuJyWajvxGp7mCCqQiAdDapaBWYzhtcTEFfdhAuu3XDBPC8HKyzJ3oyhDV4i2ZZTLARYzMQRibkA",
  "key6": "XsbiUHU5o28FqLZvRbzTUUCT93EHSFUZMhwy2VPXNJFo4uLw8VYBFmrcx55EC6HU8RMp5tH4x2Wg2FuC6YdzyhY",
  "key7": "4Zi7EUEopVd5FVh3ccpEXuf7fchgvdLwA29v4RtiEUJBWaQj2XKUKh3YoMnaTicQFUJ56gCuJDxkoeWXgqH2m3RG",
  "key8": "4ieCkKk8BNL9VYbvrzi4Yab8rCKdcijYaSvjTTcZUP8ymk3vnKQWqZPP65ccA889eiqZ7tTaPPsz7UUcS43h9NdY",
  "key9": "2enrTZS7dC7aZt2nTaCxubF8A7ddJ25snXT6bw2oAEpRFPTELcT57x7ews4nfRJA8xxTwE3i3GutjeBiRSnuMtTa",
  "key10": "5goHQQ5Axc6symEbKgYa9LdKoqTU46bovSnjQVTDeabGw7Kg65EmAL2jK8gev5S5QjP5Vo2HVuhecgkmwpb6x8nh",
  "key11": "2anDusJUFSWrJYnmnDc4GAAktxvZBFaB4UbVKDHCXKSb5j8J1aSuMwbA4BP1fqtdFfAL69na3QsvQEt119tC3dLx",
  "key12": "3LFTwoRKWqYLQ3HGTx1b9ZjAn6o4j5CE76v1csPCsMr8kkYTuvXrkBTe1uvDocd7KWNmcg6pHmmCgtnDMJkHjSgB",
  "key13": "2b26g9D1kUp1VBotNb4ub7Fp6mUJJMqNDQEndigdrC1NHCyC6fM326iGRX6y7MgXAwenBgcdxzQ7MNKL91n1sbgc",
  "key14": "4xQJnHoeqUALb4X3ZyuwCsKm9Y8jQ5Hvvy8Q13pYwyLm8UC7ZHm9PBTo9XvJJ756eSvBhhF7himXFrKCNv6TgarJ",
  "key15": "2v69tBPB1atfHhgGAKGRzvRTBVRzGBqorrgcSShurLQvfU7ymAkkPJjy5wJNsU845kMHtL1Mvpc2ih81NdDUvwEN",
  "key16": "3vUXEoTaseWAbBcDLFRfVNb24XHJxri6HYnzHqoQA8zAzjVAE2heM65988eit5PQdazNTu2hczdy49ZSkuusEAaC",
  "key17": "329mPbnxNXKQ1VBaFLVdy7afFpG4xHKnJV8sE9jopHcKajvH4E8V9n2QS5qpPZyFf9orhXJt4aXLb4AwhyyVjCSn",
  "key18": "4uTHjP1FyQHJxZMJb84eVSBKrMgKTuawKmpLPxnUzHC4bDfjxfMgKx4yXSzdNpSkrdr44avrRz4uEPsQFARrxny6",
  "key19": "5HYh7D6gg9XWz6a6BsFThb9z2CBcnvuhLrzHqtpa1MpeZVUK9pVwYu9gE2FSCuhLuspMz6GcnnWB98DikJv9768g",
  "key20": "2EFPxZk5VzP1H5ic9tHUF7MtomzkNytvWUMekx9f23Au3UGqrXYSXD1bNrtjFYP8njuqcmzps9uPGL3ncmDfP5Nr",
  "key21": "4bGMADd5a9LT8nUQtjkGvSVW6qDdQJxmmygHnTFbTEeWaf4sFDNqHURABnTKSZJD2YaZosFhjUiMPMo44xJFzpfi",
  "key22": "2fmXKsb2bwFjPjqjKygk14mYPaMZHcrpSn9mAH4cyjvVdjSh9y3KcUPeVW24XnQ1AoTuoPNJtaaGs7RE8NYAw4rA",
  "key23": "2VosuWEim7tyV8KXLwTDpSXx84sDcPQsDofhmU9EyhjgWAWsj2uCzr7Y5LU7Xhw6UBu5u3YZ7FHBhpr6gbMzrL3o",
  "key24": "dnjEhMeqwVCEArr33igP8fsTUjUxyAhYYmHH2wzLmfRCdXRwJeqL9JSm8Tvegusge7hcbZ3e5YBHSjacY1R83mU",
  "key25": "38nycVWmm4nCC5bmuudPknWCvpo8DdrjjC1FQLjYCYnotumhRaG5LYeLyHLA47ZvocywdqxsG67Z4JYZ2kp5d2pH"
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
