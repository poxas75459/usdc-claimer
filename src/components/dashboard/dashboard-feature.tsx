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
    "2R7NQNTJWdtxH5TZLgLfhf8tP3EcYJbJGPiCCtwke4AEwQJzHRgYCKnGvb4NvcXxohkA5upSoaYUzDz7pHNRRVGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gVDyXR6zgPqsB6rp9z7yjpw5gwVawycjd6fqoHk7cH1HTAvGG7w5Spr8FAUYcvcafEeqNLCTPaBexfATkjxAruR",
  "key1": "3wzB3NX1U9eUbVGySuHeGwY2YrfE7SvrYSYUqFL7gkTqZYboDb1NC29rSYm1gd5XtFz4phS6VCtwGVDqwQUUWhCM",
  "key2": "4rS5LC4JjgVogv4WTY9LJwxrJBv33mAfvbXSuBhMuN5oYCCRhS9ykLttd2NGbBuyMSqrazVVPcaXqqsmtzw16VR1",
  "key3": "4x2QxSUieHWwaFvUnuTDLaKXCbxaeSh1SnaYPa3c4xzDxoPybo4ZCo4GKw9qG4xyS6V9XJXXJeoTKELHTiKRxVSA",
  "key4": "5y1u2gjpVGe9dt58SmKhBsNVEiyudE6pjye1ikEzcWrhvVqhquiJyKJvLNZPorJSgHxcHwQq21EtfKaPG1edB42R",
  "key5": "3DSnPCRtLhwfYGaPXzUK2ug5uddp8Jsb48axrf2YEE6KbKU7MNkEmp7uTbCS15e3iFvmjoxtDKERqGSUTLKPZttk",
  "key6": "2uxJNTB8jgQQmVgEgaXkUM1sDFYj16XSufXVPTQJYS3p7kMJmPEBdgTwcri32arLXwivPiR8BziA29ATbd57nWqB",
  "key7": "66Gvs5Zg5i9WWsMF4EQqKhxfaTfCwB8mDs6ctH6y3rjpuAHQFGJN5DMTD3jahfm4zQZomYxW2tDXZetvm3pmvYuC",
  "key8": "3sEstNsuDH2rpQ2uYDCu1FR8VPg8sEX8FGRcnKykuKRgjPENGdbXJKjS7mSi7xqS5CZaa8urma9gdeCera6uw4XG",
  "key9": "3QBKv4Bo33xX7LwMvx2622FUKWLnMwbJ484ND3CTgQFtNvRsJdu9QhXdGHb7ybhrYcEJfh26GhuUaiBwacpjBXRJ",
  "key10": "4HTWtcnzhPGgcQ6dhmndrKGpz2yMULwV4TBhyozaACdmZYWpQWa64n4AnsxWv3PtK2c15EJezU992W5qDChuJfbf",
  "key11": "2AgfhZexoSJZgF29eBdzy2H8hDnN7THmfexn6kSgRXUwWoo86KaTGVFdFfbvEAthWHXmFGKYKcaTykggTAzeohEu",
  "key12": "46aiChmHLzHUUxFzrJBD7xfpJSJLvUKBfJbQ6XU1L7tYf5Ub6uxdKrLSveZWBBKwCrjnJgwtCTrAPxMDrTkJwm4T",
  "key13": "5rtmjLCkp8L4DY4fTfJ5bDe6cRRVLjik79RXmrt7RwJRcQ4C3JwHzwm85BGp9H5HX9LumqF9KtqxfLLNFKACp7h9",
  "key14": "4k4i4XCRgQjkWSSiox74qVogFbLeQFmNxX8DNPHF9y278kq4oC3Bfvn6VcYfQK35wrcoFhQgU9Qce2mB3xq6UQBb",
  "key15": "2p8ALHEK5NyKabgLDoDdV5A29NaYVnjCeVDxrESbcKtey6WyGSEDYtC95nRdNAmm8tNGyv2QnojQWNzDyFbZ971E",
  "key16": "5E8zs4GSfZ1xSUj6fJ2HUkCcbwEirXxxggGor36B6u6B27ECWnD63JZEisrqsYquDGBrTy5AHYHfVfFBHLVTheB6",
  "key17": "5AacsYZdtVUTwJJDBdYzCcoyqKJHBpD43xLoFyV8Qkc2LYY63WNgH4e7ppPtZce9jCs9DiTgCbL2bKE2T8UvnoEE",
  "key18": "4FZvLcLioG8xAN3tYxcrghTB4zsfCkBZzxwvVtGySQSTLHmonTdhBbjHubzG4raVLFby6HiAJLnGd28qVbXsjX5c",
  "key19": "5SxS1VKVHXMUgX1eMxE4ucSDg6i9TqrmPJchUztpwjRibo1oww3ACtUFQCjWJcXQdEhrqT3KBu9MPEWTh3cMSJyN",
  "key20": "5X8Y2PvX31dGYcugCiubbk5NsdbqPFAXBFGCFhEDCFbxYBGoEkgKSvPcQ92wJQnznwV4B3PvpM5sy9TUGV8ddnue",
  "key21": "i646ymJ5PTwQE8yexcVoCdzmsZf2934xTagZTUQzHhDwvM2oCqcaxMRH4qoG6ENvQZjDKd3MbiZikBnKQNHB8JH",
  "key22": "5mcqRLnwYm7zhcm7as3HsxLjQMbb2qMwCBbU6aMUNpYnEQzPCUgjyqLgwWvFZWRjYRj7ZsuqRhn2N8QJJHK6CWM5",
  "key23": "4bkgJAhDF8yigfUum5wnSjSYabBv2aGAA6BihBxRKED8KyjLawcd4iYoQACDqiLFUbUWL1jQk8ALwXa98mfjA96F",
  "key24": "5MqkgosDrbguBordhy9P8CxCm1JMdgUGYffB1xPAtXjyGV1WxzskY3amRSYQdHCwBSPF286Phcqaa9B31SNvDgWB"
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
