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
    "TjoKZ1EcPhxrdhs4yYxvWBDaEjYeQFRjd7RCiP6KaT8ZJjFXKmihzFUy7q433nc6EaScJKk7ufs8M5LxQpSTZGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K5AGEpur9LEubZtfp9UrhmaWtZQbxcAFdjFbWm32487WUn6DmehUjgqyTGQZpzCAJXGUwT3wkvy4C5WoMkxdMo8",
  "key1": "26X77yy65jpyx8FhtsW2r5YpdbKSdsnpmebFDBHXcgmPrKGEjjzjZRYAvmqj8pE4cBeW2afuGWA3Kk9Lw9anxMC8",
  "key2": "2k2hU54EWPwmrYKGGdPgRzvmVcgiRALjL53E5XfkcuuWLHq8TWeWUq4YucJrrcb1onu29uso9x7pQ2xgk3x7W6ke",
  "key3": "4x11kxTTPbRAky3gkz5p8Jnbx7u7tp1T59U61as6472jwKBt6va9E9bqXGjRbgRzFUiyHKethYdzfS5vwQdzkdXx",
  "key4": "FQP3ZJZvKbQh4yHtcproJ7VmAgTZeTP84TtaDG89ob1EqzxxSMw5mPSHSoguuGEnn8N1MEMK7dptvmp1CYqMFN9",
  "key5": "3wp2ACDDjqHkdU5wtc6kSAFgnb49xkXmmTJsXBwhTu98hiSfhcQavqnZFAEMG8egpJVrmohdnPvvPMx9aPGBAqCk",
  "key6": "2c9rP5fSE3nPSssC3nKYfa9zcMwGBpWjV8CqANuT6Ed5hSLrTAUNdfbePWd9HEqh3D3x8TicPxJJoqGzxZy9hnfm",
  "key7": "1bxQPGjkG2YgAm3cxjmkobkVbBynFWaFc23PLdqgHArMz34VJqJnB7cnLLAt2qXRPim1qGYJ3gAhWWoEDGfDiDx",
  "key8": "VtE5NBGpTjNUfwXDheenA6vQmXHYjDX3gZQ4DgTmrKzhRMhpFZwA6HjLvwnQJiQMWh7Ytim2XGspY3KEigSSkqk",
  "key9": "63zk4P1VvzdDX9NcQ7mKS44r6Pr7bRS6YV8QCVgkjbmSFziW4VpYDzgs21jcyautyfvoKFeZKmp12S5Wo4q9yaFB",
  "key10": "44aG1RuiVtwUf4nyprF8SdefSHjt6RGKv3XZ2KLMNunuZUxawHEy4YFNH2139RdFLbVLcXEup7gUjQot2LmM76gt",
  "key11": "27r1gHWXFpwxGd9CCmoEvRJixZMfWMwTkFMzywH3XQLZ2iDYzRDvjBL3BVhSyDkVyuCHBLJLnMc5ZUtgnnji7RCC",
  "key12": "V7WVmhjuDHiYVnnrtL6NvJwmguEAHf3hTaKYj1nsTAW2S77dR2zrwMqyqTgvqhUzpQpVmtggoY5MuHuc7pbRzuT",
  "key13": "3njcYpbghUUqFtqe5X3AcY5PHfrYu1nztZBq9EJUrXwZiNLjH5KM3kYusdudnp1L3wVAbxwXRL98YNJtkqnhsLNG",
  "key14": "5tUatb7JGc9mLxNRTJeLuWJHgsJNYXqkqBbcgWqCymjCf4uEMofXoEyRF1xdSi8gBzAi896v6EfYh1SQNznXnQtg",
  "key15": "bDyYuzdkaoDRGYqCPYB6nGZv1k5V5YYe6NSK3nCb2UDAMpdwnQUVHofrWWKgpWv52JN8SWNFZcXSg7qnztAES5S",
  "key16": "4zEKHEzNNdhJ19kHfabFA52wKfuVS28c1BQEu24XxUFhH3npZDd2pVNbfMagY2RJNFNUeMd23BRRTPHrHwc8ZLjP",
  "key17": "46ktVRhdUsSyB2ykRk8i4UAn1YDQyr41kWuBH3DysyAmKBvauuhH6xmTg9GtkzyKcpm3diT8tYuvcY2ZNRmHkNJj",
  "key18": "edX398nRqpVnsyn4xYGXKXdaoRSpvg4yjoWiBZgsoA6beh5Hb7FCtUaxBvwbASKvb9UrBeDmqmPWfVgZ3fwnUXq",
  "key19": "3kMFVvEycUGiN65aC9kfe92HaoLXpoBuQGJgxzsfz7xz2VrLkFTm6n2Zm6TrsVkpYQLHiEK3X2oheqSF2XUddS5M",
  "key20": "2RMMmxPhrJoztQwEAEwq6N2nbnNz8GvQ6U7FjtaWHF2RAAHzwtqyU4V54b1gH5JknXsV6tCMZhdnV1Mf1d9EE2F8",
  "key21": "3fuMMCudgng9n5xjTkPwv2dXZbG9ocHv74wwqPWaH33cpCCcPCLdMBzdNkFG5xFguKJSEov7Yior4599C9sZ8UAr",
  "key22": "5mFyBqq6YwQNn9TeNk13zAF1STDe7iVhTHoCGb3fMVRWoM1vBdrw9861Un3nguMXrsJQFnLmosjr7RyRodHTnDXt",
  "key23": "23Cup6qAeAic8s3XCds5DKUms2bJ58kE9KFJXjavsCZnMDkP2bo1Uwq9a5byiLJSioCEApja9RSQuZf6uhGpB4aH",
  "key24": "S1sWfNRpHDyrjDuBZmnogTuswnJnJEq6L5noBHpmMTzWJdET6wpyJYjsqEYiTkowi2HHWFo7LErmrLGyRADeWxo",
  "key25": "66ppc8C8VYnpq4GsFLHQZY3FdUzd5TFyXikHpsaaC72ERFS6LKvEBJLBhArFYv26BmiYmerpAu3KUUu4ghf1wpgK",
  "key26": "4ajE6GHXELtzSm6qPLSnoZV6qEqepbUyFPrc1e87zv52AsZYjoQ5GKBWxkwK1QfYh6rLGtvdixb5DDLfyNgq1XHR",
  "key27": "sFMyJTATK8FXBGRFzrPBaoFF2Bv7U4vTXLxdepeL2djGKTgA1M7NqGzUw3ZrzTFKFFtxKLqCC4j4r6cungNRbVC",
  "key28": "PipW9JEeg31gAeSVMUkvEWGDjW7GVk2LgD6NhNK2osCMmPwckVd4v8ndf68UoWTtv56mrndquYsysWB2H22WoRN",
  "key29": "55z2Lqh9h21UE6i91eust2xwx8cWApSFGCtoqp1qq9X8Hx4Pu6yuPzcbvc9C5rkJ9ob56wqbNYtKYz9CmPHYWxkR",
  "key30": "P2RFMDYQv5CWSCuFbmfVQckGT3hWm93U4zyrSWJyNUqPEU4mvMywHKGvo6JcvkmopwX2egapuCPqFh7Mf1gsWKY"
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
