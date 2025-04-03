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
    "3VSJURiACrBi6wFe2jM1W9EwVGtAbh7ntkyZyt3V62BHWK8xMNp46dBwBkmHhGywTwwae7n6Zu52nvTt4uWPhnPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hhe2rjhYkkpLc2c8stENYY197S1DyrDV78JQsZC4cQfjig8swZtpu2QE2RoG2jWFCg95zh3N2x3PRBDvGTduKVy",
  "key1": "4KMKMqJPd59mYV1VJoMFtXhcegf7dUGGmEsfnZMeuLbK7xhC3zcvZnX7YK7b54o7hWEyVfwHLpyK8bVexazt8YkP",
  "key2": "2uzZFyen1UyovE8ju1RXCS9rBZjmp4GVELWJwudWXz9wr7vNWkLZdLzBdquZXuRHk5AB5uYJUDUYmGYeUrMWrumd",
  "key3": "4ZcScgas9Kq2Sfq79KiUSZD3GMak3xUkppJTHA8iNZZ7P1tYMAWn4o6dk6vGXV85gsQmXTNKRxwJhaLD13469Dsf",
  "key4": "5Ly2FRYHzRmSkHK29aB1gisdudPCafkGH297oLB78Uwd3GLXded3RDsMpvfu1bqw96uDAEyssohh4g3vxezHEEpu",
  "key5": "28HroRcCpAgHL8JkV6vmcyyEpqkV1fCDdyNqpoShc4sRcjLRGUPGthpx5x3DnAb7S3LtRWM2SiyZkdqvyMxp4193",
  "key6": "2ud3rwvWQpkXSydCoMvydTpLNujcYHRVMA76YnRsHJ15VFmaa49ZgjQFtRjhpuZrkBH8WjCVZFTcFTgawkL9Ua17",
  "key7": "2RSh1SDkh3AEo5TdCwB4Su4WYdgeAVasNjDcKoFyJ279nDWfVHZfEAMhppKtS5nbCoJLkEMw24fTis7jMsAXKVjH",
  "key8": "2WEGZirAZ3K9cNUoWnJmdngBTD681VN9VTcRFT1sVXWyiNDuDs1xMLzJUSK7wUBKJ9xMa379iYY51RAPHr1aVCRN",
  "key9": "3kpSStvVqsUSsvDf7NC8kS2f1F3EExtPpRN7Q49XtYCYdjmwrysPUCXM3Ggmn1C8UkEGYtNPHWZLYpARbrCQ3gEp",
  "key10": "2wmRotm4HDxgo4zJ7yH3LLUBg2gEqXv1f78NnbVtRLfkn5gm1YhGSyXMnYKn591uLFnF3C2pJCdZic4cKTYtVpbW",
  "key11": "4fUkExvcqsHrgYnJvvFBAxUC9B7DyTjYV539RGRc9NGuoH5Q68FJ5bRR8YyP1arduMWEpyhy29bu8scjiTYJ1E4D",
  "key12": "3nsFpRQqRn7KLcNqkE5y1m6yZtWBbz8rUaxRHKDeAjW2jvbVravETY7AP2ZBJ4MRrxJFH5Gtb8bu8q5jMUe7nbzJ",
  "key13": "2zAjZv91yvaGAuEbKcwmVLbW2dCSm5Es5hytvMSDiBembUVcmHvVuZT9rMGfKDSConSWGf8JtxfQ6tFc4JH7j4AY",
  "key14": "3paP7qxkZphWHub7bGRBPWTqbg5u3ZbdsBaMszCiNi4tMTA33FNrxxaJskNXk5UyZnRFcrU8PXFF3BN7knSng1uY",
  "key15": "zwzexYZNQzgK6QAxFmzA4RN7T2MXwzcPMdqxQuG8X3sWgD8yd7hTTHnzy4o7hkJ4RDxPPm2kYvWDqBNCjU3BvRg",
  "key16": "3Q6Nx7JRmYWykShAeC9jUvYWELQpL461hpFsK5BMyN8XuUdV9y3T3Zsz2J5dZvcJoo3TjryjY8ERAfzH1kbKpN9t",
  "key17": "238opcLkUEq1SnQm2FHFNdqxBF5t37fSJ4iN9QdqR8VgaMd7J5uX5o4JNAgYxpVJtMpoc4hzJFPY9SFeRpGYHTnA",
  "key18": "6TiEnmw3FHG1y32UzLHKGPDyXCMakibqMtzaPZ6WPevGMeacCghTpbcMEyNAP2XB9MSRKoRGVUeciA4cLmmmKsW",
  "key19": "2LuSijYf4SGp75KwyS9vVatzKLCMAqoyvAiziUAH36ddYAiAvSCLDfUv7oY8jZa8afg8pPe46hzfcJTm59daB8Ga",
  "key20": "5AbSUG8WzDAHHmgWQ1xsdj33izj4T1P8koyyJs8DxuTsc32xiPa81xErudc81eA7j3G5xuXYL8J3LBUdYz4Ww5Ho",
  "key21": "43fcaabguxANiSQWvrv1NWUSbJg1CMxf4DwwJRjC8ptyzZUEzBxszM5GwxJbyMn9owqh177tCxNap2Sfcr1ovDvC",
  "key22": "3717ZftSVtBB7VZEr4CuiLKfkUGNP4gKsHjui9Z6fTsv5pHfMZzTGJHT1id8xmWyv8MkFWuLPdZvuGtpbrjkrwc4",
  "key23": "4yQxnYYs7QNrqeyE4sk2wwqkZ6UjMWhFBPf4zdBVzuDoRx6tpDR4iQrRQ3QDKjhTYNiYXYBWu16eunqTbDrWm9pP",
  "key24": "4dpqXo8C8muux8JRNbRmTmBmQXXvaWwGdSzPCBSGk5CCra5fzEHG7JiqUV6zR9Ugqd6GujNYU3BgPAkD8o4zCJ7P",
  "key25": "5n3GNHn7oA3v1s6z7dpJN6aga91Kbarz2dS9qbLLr8b8PA42wneAASq3PmekjThF3PK9Mijz4gKK7EMsvL1MjpVH"
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
