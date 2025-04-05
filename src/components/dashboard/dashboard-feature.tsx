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
    "2jiYaXzQgmTHdzzkvTruFwNkPzkQe7bFaRHRfgDKmFypS68Ka5kvH98hmdimjQBCpak8RY5pM2JfHZVp1FRRENLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RMLfRXa7UU5hdjrkD7VBobQxxtLSQvrPbwEgP24q8KxmGi124zn9ZZRRWAkUdSoomqMpZjeuUL21CRotXXTBFnL",
  "key1": "3FEFt6LvJfVq5FSZp99BPhE2mMhbT2h1J6jT3FgC4PCtMNg28mG6fvNcm22eKJrqNgrxwfREh8cB9CxW9t8Ru997",
  "key2": "4TkjM8ahws2CJXyYWtWYGPhJJk9JueXEKE3qjYTWR6hnR9JRrhxeGDbDwTgFJWe7gRQwBdP1j5A9fwnrYG2Xqqih",
  "key3": "Df56K2f9pkRV3nd5az7eAiFZFMGCURgPpgsCCVEpXTE5v7xK7ARbVxJAM989HqJHGFiWp8rrKKkJYs67CWCnunY",
  "key4": "58gQTcQfcqte3mT5aopvbzBN3p5LQ6pBtkKuKyXWwxQ3zCob7AH6dCzTAuLPiKDAhWWxyBDBTsF9q4gk4fJCekaH",
  "key5": "4MGnqQeEVVuR5U8w3BiTbiA347VxN12myS7SgAszgKEK2wpdPp1DrDA9tEAiW484YiKTbXuzVFUWekaLUP9zdtGd",
  "key6": "4iBrrS1EvRZNy6qQ3uLVM89gSLD6gyuP7UECAJggWXLc7BDT8YXA5gUggBhzDiAybbx6n6245dRjkYbHYaGYbD4R",
  "key7": "2YCMNRVLkfNM3umud1JpHViY7jEyKF1Xc9c6y7GMc5R4z5cRVhUcsGraoxs5K4obLhNL3Zaok7kTNxCjXbabTpVz",
  "key8": "4FgkDqiXMgiKF3UgdERyWGzdk6F2ub8ZmmUZQgWR8dm81mcydkAw5dsccHUoSQu5aWPmuSUQAqm1pUcYAAJ2NEqy",
  "key9": "Fdze1LUe5vB1YAb79Y8unMHAkwnoFSjHEaLfnhVm1v9D8EcELpsF3tK5MwBLn6SrHLYTCfge1ETtNjtHdNcFWac",
  "key10": "5QFrQEbwxhMwwP5MgYTLM8NoSQE9oNhxJWvwiavmoSFVibTXQvGJFxyZcuF9hhVqeU868gGQVzW9UKDCQVbpotZB",
  "key11": "2J9Uu8rv1RGKwzRhYtCCFsv7JgA1K4CKpZheoG6EkpsozMi3U32YaCDaP6Sws6w7eXd9BT1YTs3dHz66hZeWq7LB",
  "key12": "2mkPCW4xqoKRuQ8cGASHhX1eYvPMit8ezrJGBdwYVvgqamskjstL1vEgJcZmzY4mDFQgCPCQ7qhz5A8YTVAEKQox",
  "key13": "n3w9i2y47PHqfPbb6AVFVVmuXETgXA1QnPjJZPr8j6urTasPUBr9uebigLPwjabSjULQWuQ9ZyeBx4tHxG3MXW2",
  "key14": "5rCzY1F8Y5Mb5NaGrcZ5rHWvUtaPfvx9PJW2eRsShbL3NzAaN4uPoYfh1unJ83HZa55f4x1sJMHV5RRJEdGQtR85",
  "key15": "4wWdvEQZc6xW7xfEEPxCXWK7wRjqruz3VVJN8ZViKS8gSGpV9ZNfYeWCg13ZRXHh1DnYFv36Zfq7QMoaqXy6RbUU",
  "key16": "fgpvXdPHZuH41sUU7LPY4ft5CTQFanFhsmQb2yGH3MBaAisN2KpXNFdaRm6THvieQZpcUebx1vimDmn5y8YVVG5",
  "key17": "2jRTEkm3CnHoPRmFTuWEHZRuyhs5k6zWNvNsf2yixK94cz7aX7QUUS8MUQYrtJg95R4y5kurncYSijCeG9js1Hjk",
  "key18": "5xKfPGxHNUTC3QwtnmgbSUFdTbhBK6uKM1gjDAxTgfnCdfFKjmVSg7mYhF3BtrPVyPmnzFCL1ufzEWDPFJWR5AyD",
  "key19": "3unvQjve4jAaYKfvGPUoYGDPTx2mgfDZ1rztDyUDxh9dp3LG5DfC6DrYWGvb4MhxBSEGxaAh94zLALj32fGKdDT9",
  "key20": "4dV1S97Mg9SGZypiJMxxPLuaXcMNTXa9i19HM9N54REhsyJDfy2TytdVwaCLLt79ctektr3cmyd71LJEc3i5TjS9",
  "key21": "4Kd6gt8cP9p5wC74sYK2AEDb5CC5pXUJCWbvYjJZCtngwvWp6VqcT2kXALvRabGzrv347iZZt1EVt9q1hxWC22mc",
  "key22": "4yQHSTmiERRC324nKCHDJEoy876NXGbgq1w6kgrhGVDfFqbAsGYdKLFFnQkZCWs7624eRmq9kAX4g22eJj1TitL7",
  "key23": "48twfi3zetn8d6yuVXdYwcpHWFt4gyAaEPjXYmF1LUDbsJVxDjiGFSZ2HLTg3eCBmeqvfN3rHLE4yN1QFD8pRRC1",
  "key24": "CN1pAE1RAeGk9VZoykVuRYDT1A3RYaScVVsBh8gkt2MCkaD5nhmeUGa8xHkpyoQDwoK1Gz5EpACcv8u1kqAVWCu"
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
