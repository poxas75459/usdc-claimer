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
    "3CQhmbQTRZykGL6Hds4a5jqRATkSF6j2jAHZrR9Tyo2vt5JzcXpn9xqyaWh3hxMzRk6Q64pguhvFoHz8sz2MiZ6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ayWHVsmbvbWTrDBk5FmaJcQnV5a4HTo1KQMH1gzRW42JKeyH5sho6pXUkJj9XwTtU5HBC1KzjF4c6tkBQ3x9atw",
  "key1": "2pmjcc83jzZPwT4WxJZ9Pz9LNAcjnki3E4tXxBvuLjTTW9Ja9T9KLrGbCiHjKLDsvu8fLukekiKa3yXprN4UiCQA",
  "key2": "2Q5AWpWuN1ASA4LAd7kgwVBYxXiZJ49XV2Xf2AMFSyc4S6yVi7QRLnJTK84zAjTC3MKHbfExVbv2NsPQj6jvhGUa",
  "key3": "SDoCJtgBKW4v8Wnu2Df8t8PZyhA2q6jec9mwW87SaDHNJEeTiJvujiJQkrgksie99sDsnudyLpt9d5fuJWCJp3T",
  "key4": "8R6U6jQvmofMrii2obHmm6udDdNM8D2ExP9n3SQNtKJxzBt72TyuD2KNxGheSFrtgHoavcEW972AUiHaimVktGt",
  "key5": "sA8rHYKzP4e6peXBxwtd64jJJUPnHQxrZsA5Bc6R5div7j5bYHGdb4jzLyRAyjyQ5vnkhiQ2UT16ELu3hEhXVpk",
  "key6": "5xsE7bDPEQyDd6PWXkupiswra2ix4XrsQqumC4Ha9ZG7kmy6pk5mV6q6e4yVdmPKRs83akZUXi4d2yfEAQJgvpoA",
  "key7": "8yKVbAxAdMvdDAfuQ2CqYSBWEEJyZjh8cs48NGjn5gzUoyA1c8FQa4isNTJ9N9c1Bz9YnfFQF4YcpBVWr3FVzcG",
  "key8": "4BgxPPcR1m4Eu213WYLozCEwqinoRooEPxedDaVMKBL8yDyu4aFKJQiiXCFDLh4XHvEnS5XxEA6NMZurKtb7HMDF",
  "key9": "2xL8xK9KeuM3MYimdxyUqHNevv3NQBR6sV3RkrrhLvdv7Ww7DuNpTDkdSpqAEE76tWnWdk8kJivqE5faVFA5XoaD",
  "key10": "5wDEBpsv7LGYSc7zARcDdGMh1Eg94mYGTKPeq1BmNSz7XCJd7SMWTuKLbW8NP8zj5oQSeq8wwoZ5WTg5zk1tJSxN",
  "key11": "5ifS69Lk3xSLYWNxb1XwSkyUL6HufW7MRixvS2h1XSthUaJgjmfbs8BPv3DoxBfdgT43BFWzkz7fhnHGfVAa5g6L",
  "key12": "4aCWGbo53twghMdwwqnii97dFyuNckgCMLDkeC2hrzXvqi2E9RLPxGmE2q9t6dVKd1iHwbFLia2KbazcpQNdEWHU",
  "key13": "4KdctPryoSyRc1dCbyfhGMrjRegMy3ZjSjTB5rTiXfM6xT4pVnCBMiyFqrrmRyHEMemiDivsJxr8M9naSSK7HbXU",
  "key14": "EMximtdBCFqe6bYwoyGywNqvEoHcAFMmaJEawhNxpvKfvpnwbGsQbQrjFo6G4qpdzYTZj7ks9XFJx6GCWFi898M",
  "key15": "nYzUDav6h2fGqBroAX8E3yXrmNZQKdxwNEQS17U1qMpe3D93io8nMP9NMCWpqepuLNLGGtFUeiUUXTEEbdsXA3y",
  "key16": "3Egv3pCJ1CQHU64JHUp7XXxGAW2eyabrS9qxnuSF26nziHgtPzVuttZaqXJGVxsUr1knFsyKSKdx2KzuzwqAZ78r",
  "key17": "2MScQaUa6QSeae9izYgEhTbQ2QUE9ht1NUya9hquVJbBkTvMy1Xeyhe9aPkRfpGGh59Pq7uM6z6XmoR7DKEBK3Nz",
  "key18": "4Zu8F33KqAC4AA2ZZdqFCZJxPAWWZtBDfa7fospxxVXaDqmcScHSoyWF5nwpp7q1qZWHPg5D8W8EZ3mryvR3KS9g",
  "key19": "4k11GbFnujD8HZiwvAEBu9KaqdoQe1c8Gj4ma8CBwrpo8ZSw72Yn94JJGkN1nSEpgE6m4nQ6gGhrJwPRsDSvEEQA",
  "key20": "34uPQqpgeMpxghvUqNLrjNfaJq2oAKmqjVnEiv1YKEfBnkyNkQVgqXjD1UAm7jJ1DXWSfp8gx7qnJQzZ2b9jqYHt",
  "key21": "3juMpb298awBtkZuDtxfgC4aiQEGTM3f2NUmpZoBgirKibNCp1ZeEpsmL3iHrYaiYGRqXp2GYb6KPjv95wUVf1rE",
  "key22": "38QAEXv5tF6dobAJuqG2AuRKww25oj4r9qRn79HVRe2HXvt2WYcLG1w68t7iijm9aAsLA5ALQhKsoZhjCoRDHqnj",
  "key23": "3thXDLCdLmVfnscek5kiSzVjxRazJsHn4zeuboa8cW6sUsCQjxdxFNLv2jhNCcTG7MEgkthtLj7myn2zvh9T6yUY",
  "key24": "2YTq2tfNEHcDxZYG9tWR196o9YXefB875e6Md8ZtAotdwVwU949KkCv3bAeTAWAcVxAV6ixjgQTS9DbimwfsdyY9"
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
