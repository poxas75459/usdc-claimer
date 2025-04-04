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
    "2T3e3WE9hz7scZAr17yLRm4BbEYPUz7UvfRcN1qkR6qreSE1K36AghcVi8UtoZi9MRn5gjexCyZyoUgmhBc3c2mV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8YdfpFAXCU2dr5xGTXwSyNB3CUfPyJunBVVuu5VHXUSWo1C7Aqf4j8zyL9jaL1GjdM7oMikAYcvX4tDekAY3Pi",
  "key1": "3r35sYiHboJ2vcN3U6NjmkzNAcnLTJFa3GZak8bXWtb5wPkXhXbZPmKcJzmVHUCwKTH4BYcagqH1Jexdy9nLiwfb",
  "key2": "3xgJRbNKB7Z7bMW2j39sAFviGsdXnz3CrbHNCyc5AJnhm2MPpKF8oGuFv85NNDgha56UhnaL37yAoUR1JebMAoT4",
  "key3": "476FNPgwZU9TZwV1Qgd65HFurQRCibrtbCNvKTjpgPCBNGapTkGYPSpd2RrY32Eq63W4GQ6VQ8PAdp1jNQf8MEmo",
  "key4": "41ksxVLEDJxNzFuX1bcQKpXcVvCKpjyBCJ9w1PQXwADfPHk4EFWtzTgqcVizM5cbuzYwwQrMo4j8b2n9Dym9SVyW",
  "key5": "up2XR92QhFzc1RCwz3RcjCkAW5KjKZN4fF7xPbkSuC66q4FVSNoJQaFysACi2yRdWyiuhYkCmdkjjEaXhifofPo",
  "key6": "2yu46gVxEAKNSYAcssAxr1A94CBDEa94eWGqJ6Hr3oH9BmC17Yhw3HgHkV4mSgEVBtNY34fJ9LYfnCPaG6srVVRL",
  "key7": "4DQEZERBCW7Syv1SAJCoJk1U38B9Z9WjPW6EuVqMokMFkEi3ytkvzkWanYNp69nNGMA4VAX2yXhqn9vZvhR36Pmz",
  "key8": "2idehrkw4fs6amEprXm1BGuegF8aHPMwNEywiCMVd5bHC86W1ynqUgEcSSLJpkjFgozKg6zpodDqE55CrdKV7C14",
  "key9": "3ivEMap94YKxhu1agY1so1TsgjekQr8rZsRHRAA62oi2FQ7FzD6pc2W66nJ6BrAKsUDQQVh4j58Z2e245rHQVvuu",
  "key10": "5xyN3ujNERnpd17fEXDBsLGt1nEdttR1BJcitbCUHwK2SQRUnj96cHxydB5ouBZF4cPCreU2WznL21xrR5ioGuPx",
  "key11": "5tQSRLRg3juGR6xDXhovHazH5vKC4m2jAqYjaW6ZgBwtVdQpFDaMQuQG2tT9n88P1tC41DbxypcnDpphmTmBbqKZ",
  "key12": "3ri9xsbvAgdwwhDgkkkoXnzfi8FfAXZ2BQVnSFN9jGppwi4wkq7avT45FtqEdb8j3XNRNzhdpXWTF5wcxYTBjCFK",
  "key13": "4EGVFbkisu3MyNAmDW5cmFQchHYZs4jHHgjWqJuemEL25fNUUrJbuVQJ6aNvcSYTivjymstCup6SALCPkt7wj3e",
  "key14": "3vBzr24PhAQqf86onsuvrwbUpDHABCXu7zBsjt3A4kao62vqgcpjbsmerU6d5H8zs9dx8hbPoJxhsDHfhQZQHnE1",
  "key15": "7ksBKoZfLpbyRPcXzNeeWa2CiLXTcAvkFUSg6VNCiLqy8wvsgY7pKaHj2ykeGCdbXuWsrWJrbvVfM95AbBwu5E9",
  "key16": "4s9VbXcdzDyrwESye1nzhBctwpNU8Ui23pitjhVJCxEpyJdZshAX6eLrzsQUYCN9r1nN6kXDzZtdNw7xfRxzEc4T",
  "key17": "2SmjNrFxnssbLvMbNH6iFg9gvrWUinCq9MkvLGbYGRgFhGxpS1gLvqQx9zZpaxaQMPfJ2vnBFKhFzvZLbJnfZk3Q",
  "key18": "3bvjK2EjYr1f1nLNQhXHsd87x8RxRr74NQxKBXpDyZWWJaGzvaLQeyZJaHkc4aBPQeg8GBAmyFSqKJ6sDMtCWuvf",
  "key19": "5jDqQD5rp9ZfCQUcnP62S22T6P4Q5Kqo4V7NmSdLPL187sVMJe8HFDFqXFNjw3c4rB5kAv8DGp8oK8kccnEQNSAy",
  "key20": "52kTRrF9vHPojoaeWb49hLBQXasXRB4KrEjw9ws9XCSitXs6Hr5PiJaMYVJgLt4V6z8nTnttA8XAPjPVQcTMQxvP",
  "key21": "3rRLia8P7BhRWvvf4ybyxeevK7N5ZHtkws9Nci1xeg1WweiPGRtpeP4jBqBVdYaRnNoGdLtvVVeNC9DXwTHeUfxA",
  "key22": "26M7bJaeK71y8ybveVCSjMqWNnRoUZF7TeHgvvGPsDMWgZWzJvoAdpobUB7Xsq6oMGASx79dPUQjymsAigC7vSQ3",
  "key23": "ir5mDDSc4S4vbc3SkExk6NdqtUifv87fncHJWrVcZ1vcJmTkVGLRvaJVaCWqzE457Z87Avznavfn42EKFduv4gR",
  "key24": "488Qk2wm9hmSkMVRCk5jeZQmLeUeQEgDZRc1hY9zMgtb8Ve2tHB223ZmMn4fG4zWHBA5aJ3J4Ft1SWPxutVfBTvh",
  "key25": "BsDi18EegN2PeBmogBhyUFuc63edJWXZgGYVGxwFA33vdfAhwxW4Fg5v1tDq5c9cHznnVZfFJ7q2wGhj5tCwv6S",
  "key26": "33p9MZHn8vVk7Pdd3ksukFWKCnjqXNbrAzyXa4JJSeeuqrFHN7CgPgynTxQSXihpjdtoVvCB6iMLmNkizTQsFUtK",
  "key27": "5ibEg2RLBbZSEnTqYCwNVZffBTmxPd4F1jTEJLDQTiatVjeZ16X6nKUXRb7obMXSbVyg7zrrMWEp9FZXBbNGBjMi"
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
