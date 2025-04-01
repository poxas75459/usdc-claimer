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
    "5GZs6FXd8grra9XgquzWc2dpTqxiUktpZSkd4ws6W6h6EQv9X3P5jHT7CxmBdvVMBbc52kKD3V7a1EzgFQFXGuRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwJkeTr36fkjGpgZbu34jo31X4GcTd7qR36ymiB4cTKijxrJzACrDyoyPZiptKfWKUTSxW3wMQ4MaXvqogMxi6F",
  "key1": "3Zx9hBRFsBbLp2gQXb8qdsPJu3qQpWD7vj6KwDvgGFKHxcY1Gjq3ChJXwxUkGLd79AuEuQfBjKQG8XT7ru3dThPe",
  "key2": "mvgTHaZXpuzq6227xouptiDDXnqTUw8SsEq3pe8m3L3Pkbe2dWnHUT4Pu5Q4EnddC3k5rvzS8Ljo4mMM9rFazNn",
  "key3": "3nPKFAgXpeDp4tWb1eAabJJTb9gbMi19ZJtMdSK8pjoGcnofb6KjjgdX1UBHi1NgqECTe4c8CvjCEFDcpNNSMzcg",
  "key4": "2Qz6oTPmoZR9Xk5wTbeVhjFV1xYwt2YmdiWp7dNYesWz8StLvJk5UEjtFAWBpXa9bxXmnTxDuU69rcx7qKLmAw9L",
  "key5": "2aqN3aLCjarszLbwDq3TcBomp7P3rQPAyNQyx6LsWVPckwVtpZuX4dCS1TWNfFUNRK1jj9bXhwjaubyifLmaJu3u",
  "key6": "e2AZBApy7RCQu66W2RUaTBgf71mPzdpeFynCi9ovsSd1CX363Vx6NSK1XeG7cWtoKQriVWzEJKqTeV7QLsLydx1",
  "key7": "4aorPFesY1ZwogwU3iwsV6eN7fQKuLVekFgPuikdvinx1LxMmQQVE3Ly7GzpmfeFoY9wwNEbiurSZnE4hbMYFTE7",
  "key8": "5Xa6UWnWFpUhUSzKqonThbHrU5BmhNwe2ENQWyxVTPAgJEDu1qvJ9HZTEAVqif4bdGtdsaZNNJRaez92sUcY1Yiq",
  "key9": "5uCdBFLb2ENcTyDdj9FJUA7yyo7WwPjdUyAS1WY7R8txLbny1tPPAT6SpgrLw31DCRRuQgaoSYtCDWw6Aj7FxFVy",
  "key10": "67hBJ2MnJxUw4ZH3fpTuvrGLmZcJrwThsjrDmsse3Azm4sNSjQUtffiQ8JvxEFj5g1SBjiPSEryxaUxwyxUzX4qU",
  "key11": "4qXedhf7tWHbbxkbaAXNKRzHqfXcuhgJvd5BLDbFjLJ1xamZKzNGuXwdu9Ymq6iXADtfDQ8QYy5b4PztojUMPwLa",
  "key12": "2nt65H1zkFeNHrpEBVtWZbwu9Nc8VgjwkJqz4z1AWzeAFx7yvixn33mNYxrd95WDPjrrZcP4JpmatJWwe9dddtWG",
  "key13": "2Qop9oGXsMWxqVZz41ACJhgHpaZL5XFHYXmyuhY33oUijcrehQH1xrVm71tZKAKUD5tyrxDvJgGRgUDtfQJZNx46",
  "key14": "4ZUx3PjYoKkbxHA2h9sa51hM5httzNYnvwQUdFudgoEoUH9774ijjU5rLJLtLeEoGq2Luvt5pCKLNN9t2VphiySr",
  "key15": "2ygNV2inDmPBN6dVpbKA9QeDh3NHuxJw1muz4ZebWtN9sxjfdjX7yTBZTJDkQNzsBkb55ETeipfKYtfxoM622SW7",
  "key16": "4yuPWBdJGNpz9JeknsiVExcrZcrjLa8MZPpQkXaiEbKZCKmW4Vs9dZM4eGitk7mNKfnBSwSh9vDvNpkUVygRz2bi",
  "key17": "65VoGqee6yABw156iGtQoJrZK9gGwAB4PVPKsLmMRAzXLGPpRmo8NNaDiU5ezUdd21zXiYA2knZjrREBj7iDNUt7",
  "key18": "3emNvpS3YuXiTydg2YCQXpi26dBheiUGmuteJvNEUaJnQSJyRQ5spGE24RvQPdyNaxXFAEdDP2voT8sY82xtAbJf",
  "key19": "25udGZbSAtxoLHUkzCNzyrDKf8m3FQyVZT6LJtytWKh1AAfPNjkfmYNNKrQpfyUnEcjvjrN37ea872c1X2KbAZ5u",
  "key20": "3v8nYwoqPeebthZ1GHQEMSS4LxJxBUWrnss5HcPLJ3cxE61XZZ8AwQKX38XC9LgGqjgCWWSHzGsaXr4VVq3TNwTL",
  "key21": "2oKUeqZi6Rk9aPXhQcaqadv2SRcunqpBMcGQ28mPKkH6S5uAhBvZG6YxcEBbPGLXo2SdmMpZtjzAJTnMCpmX8KD4",
  "key22": "4nShnkzbQNTtS8nswsdXryc4Lj1kJnaJJABizq468X7u5a79AS5CmQ4cdVfeCyEHeocSh4cnhUEtLy19SNvGjc3f",
  "key23": "biaUotuLDnFouBzxQo48DL6sZ2gcCssgkjeuTCAtHUxQKGNn6QJGoghR6dAsoY4c4treqtRT1MJ3eH9iur2LNqj",
  "key24": "5hC7TyQmdUiuXDsJqftoT8bBgLsDkCHPJ5UDUjV8pMidc5tQVeaR7CxY9DW17L58PXRvcYtXDxXiuGMU32fvGsJN",
  "key25": "5qx5m9G8TRMScA2CDhupTnFfeHiTHoPFJyH7PXicnNSVZ92qQmmW4BkZNHzjZjtDz9xkJ8dNtPReqve4eXuJf1oP",
  "key26": "2bPpnLtaQbFz7htaVzJFFHHhA3oemtoA3L8gLzCfQfgkQMxQS1XggmCBHKz2tRRMwAsHkBAtMkKECjyK1Sn3yFWz"
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
