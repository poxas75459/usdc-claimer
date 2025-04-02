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
    "3BeGcReA9P12rs7iP6VuYYaqptj2ACjJ8A2jp2e1pCVXdWfUFzNn6EbRbBBuQnXQfETgfS8rA8tnDC4Q87t5VRaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U9jfAsVsVivKpe98ap6niDutfqSLRNkJiBE2GJtJC4KSMroDQLQCbpdzRHBSzyxddAU7bY6u3rfLjHEfjrhKDYG",
  "key1": "3WdHeTk8ThSJgATJQWoJ97z9fEX5VEjQXimktfqL8F5fnEY3Rraiu7DMfteU8PahTDfaVWmxkR9eoNc3MUNQhsjp",
  "key2": "5ePc8ycCmbqdonaTTX5Vn4dZ7x9qn6yBW52qSMKfnxJNLtTGXGyKtgYjzBc4sdDzCZE8HHCt4E7ux2uNSgVK4ndf",
  "key3": "2W38qnvsADz5nRbcaFqgV1MJmW2HYLbPGH7Rdk1CvEZF8XSaA8rxfR8H9mXrDAxQHKFJEA3764X38WcoBfccY2ne",
  "key4": "49LwAt36TNMvChkNJqv6uGdxivDpN4uDLwnHAP161u6cpx86JWphQMaugxpEY4SoJu4JxQdPy1uC4dgLohobJh41",
  "key5": "nD6AZYUS24hXRqKBJsFNCEBtf4W1Tkc1LgqAc8p4vbQx7cfvoNit19YPipVTWZq1rJ8af1NtboV84jy4UsQLnee",
  "key6": "3prf7RZmoTc2MGsU5N7P5JWpFfhxJy5S1y4JWUEiYZV6uvybWtUy51eRkHtjHUNbTqmg7VftYFMPSHMtZnB6r9ZU",
  "key7": "5ZtkA3JNcAsfAWgATxjzJT6Aoz5x8xbmxriPPUs3ZKGeeeWrNn9joznvH9RzyYoodLrHyFntyusXssGcuCVSEfM4",
  "key8": "3w3wWH4JDGtftfju5SLPKSJnJTxki87KuH9iaXwE1jpEmqbkMzpXxmmrqppDikQaW6i9RQQHK2ixSfF8nHYZ726A",
  "key9": "47Qi9qUWq9txG8o5eVFFjnfWjDMJo2TRmdAKpVWB4zS7iY4sU1jEacfX3BC8Ug9KfHp2m1A5esoz8sQWL6HepbiK",
  "key10": "5AT8tTwLnhimsSdarburrqx4UnNBurLJQekvoC8QmE1RvYFnVoTmQvGEGaK2fZM5BzjsF6Pd6hxB2w18Hc3jBJSh",
  "key11": "3YJgqhVAdUn8gMBzzzPMrMzJVt4byZGDZpjMyqiCm3RDxF3k8qThwQGrxPCAxdkh38SmUnEZurEYZ663dPLSvAEo",
  "key12": "4tR1FGEPFCdArWkTPYwr7KUzABs8icAMhRA8giQDBtXv7kwiZPDY7KiCKFbmsscTdf9YSC5PkZ6nsTrjo6V487eJ",
  "key13": "27PHcwkQ7Ggx6tL1am2iJfACqAXS7kyWMZJwL9xXMgsKSF89cK5j8wHoNhn82BUF4iNErr8ig3wFL9m2WxqULDKV",
  "key14": "9dU3Vn7cWyNcJpuZc99TZfpDqLWUvK3B95BSqonWZgEpiEM31i3Y8RdvVTreWYcmGSwsqNugLtpp98TJWUZgJ7d",
  "key15": "5sfsxMw5Ejxsa2ngMFEW32coJAmP9RECufbfi65PivVCw7F8LrxXqdV9BwUcDJNDXcN4RWnR92mcA7Mq5ADg5mV1",
  "key16": "3Xqw5Wwh6UhPsgSU8kN1Frsq7MqcNK545zKz68TXoXkXdadEe6hGAmyZdaF5rFzxAkyGdeMRum9VsfyCd7HFXg1w",
  "key17": "3bWysS1aphyub5ut2xuUuWN7fjLshus9nDUV2pJsCzcB7EXHX4ZJHbKfXf1j8cJyc2ed82cMJdZa3XoV94F8ZZeC",
  "key18": "4s2EtoQutnzxF9i24QSN7vrw1kqjpdWafC5pjF9eqEJao75JLcmRkPEgaZtBdoqRutGn4gXyNWKMzKMhMv46J5qR",
  "key19": "3GNr7QCvL328H63DEqsuJoPwDM7z1xGZN4WccWDkYCoPGThndhRRT2UpG6DkVw4Cgm9icLrP3thaPmShohL8Bu3t",
  "key20": "PNgAzuoaDzZzbj66hik6G5qSQqQkwZYvP9XmyTqPsVyN46f7KuU3DdSYY3qZeAZ9oBJdWGK1tdPgwtHZvVnsmfA",
  "key21": "3GUB2E4e2KtMNk51ito1gZujMp8oFZpKsHxi4bsznzi43Nab22r5P1EQrwxLrVb3cp4LGxj7n8W1BJBJDaeezbwM",
  "key22": "5cboLK2Mb8xdwT3mHvkR67yobPmXxQMm5tWrrMax8Z8qRw1rKYZsmzewtjBd37QuMaqEHhxX3dNnj5riUWqQb8hU",
  "key23": "4vkwgh4CH5WxmuToBTPQ6J2YLAgw1j1PAjSt62Q9vBTCvJ1yTo2PJzAnuja6PsWh1MKyZac1zfupnrqGiQvXNoQB",
  "key24": "5KEUYL93tUbz3J53QULuWrMPjVu3JSoRkszdrBCUFGgEWqYKmS9KU146aguULfCYEJzX85bnNq5iePbV8XR1f2oM",
  "key25": "4bfPgn1vxns7ExSqTLRWTT6bbTs9Xr2idoE6WDRWqnLyPnnFQdQeFQCxy5ewjDnq9yC6dgKVXcaHdGudUtG2XJnM",
  "key26": "5FnJPKNSjXPCe14GUEZoAypSogdGZ5kDEgDCW8WQHb5RqtBmUWzHx3LJ5UNPhn7xPW4LAJ4CE8o3kmQgnSqBHAfJ",
  "key27": "21M1kVEfSPVjB3XpS8evZstkJEqpMfPjbhppZm9KjwY76i1Z8G92HVDdJScPk95VTo6ZHDmcrUrGYdt7Fre6j31x",
  "key28": "kKcrxV9jwr1vTqMumxG1bgd4B96NxDuGT1ppHrmuJ586YHywTmTJbvCexne27vRXFA9paxvZFnaUNQKVJfYvw94",
  "key29": "JbwYZcyK1npquADjbAW7QXm7q3X5tXfQnP94js2oxgL5EzZCxr7gMCErMtWeUWzbcPft1A9zLpjqge3mENdTmmw",
  "key30": "8khvQQnnRpvTWznDtPpggMjMYBUuCrGjnzrQHfH7xxUmMR3qPtwTGSYmq1gpb4qWSTscAs4fVRJqP5nV9p2WLEg",
  "key31": "5YhoPQPHuXY8dRmfSnZjtkjddAeDF1KNTQyLocfaKQf4eEPYzCSh2ngi7ezdqWkDLr9BX7kWh16jBpU12sRZ9uoZ"
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
