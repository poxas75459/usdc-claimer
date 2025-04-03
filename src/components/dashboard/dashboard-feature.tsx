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
    "41MJCX8puo5hK3zvqbczUgU7QPNEf7AQnH9E3twGujNR3TaWdaYowEEhSf93JHJEXXVEuLpBBVgMa6ZvbM4MPvYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rhELztdVnhbHPrqi7XLiTgTWJh9S6bsXFxw5i3SuZbAB4GBEULs48QKb1CiuHqDCf2P2Dc9CbKAiTtwP7ejprUG",
  "key1": "5YZNz7B52JSXfLYGPg6LKHNQvjmW6axEeDMaKEvE2ZyFaWvJ4D5N3Z21H9P9vi2iUgJxFY7VGGB8orD67a3GbxMe",
  "key2": "2Csk4EXiwYzkdLTy3d1oAMxbJvXBjkNHghqKLSsekryUYXgmbe53M72RbtpCoMhRMtGWUgU1AEWgAdxZVcokA3fP",
  "key3": "25dcujDhPSWtjZdGjeFzWFFrr5jPswFiwjNSrfZUreG61NrubN9z7F8H1R8K52duq3742TZK5WQYgzHYHxcTYWZT",
  "key4": "5oR8y8CWEnaFLeLLEo4BK1WNJBTwdkx6v6Yi9LXveACimxDAAFcAiWhCkrhWVykMvGaixFJZMd4GGifWbKqApHu",
  "key5": "mYzW71gqvkETg3BVvRtim4sVLYznDhAB6Xf9WFiuRrbxixxWoMmvsL6FsoS81EmGFoXC3oCzbguCE3HfXtU7Ri1",
  "key6": "5mhsn5ytV3ECvpyj3Td8WFnuiACpxYd4fZoRTZa3fquAWCg4SKtN9eVtHQXNiRej7KngECJemkiySvtXxRF5Eftw",
  "key7": "4qGBZmn6Z9NESXC2sTbAxVACXyPrGqMPSQWsBzDwjxdbfxMCTUKtKv4RevBgmTE4MzEcZCdMLFuDEmBBvEw8Lt7Q",
  "key8": "YgWCf6VsKjcLRv4RY38Av33WRP4L4rdrkjEhVMr5tvKxQDpMXKC9SZen5D8KEFZE3yCkSNZ99mhqVqhJzbU9xJD",
  "key9": "3hxy8AJB1CsTLYTnLjgVFfnxviBcfnuU1nPSipe6rSV9ZeSrH1QVxP8RZ1bMtirDY5rgxN65Z6gfuVNNuqEovLYp",
  "key10": "4KRT2z9BYHhjCmx4Fj2gKcn3ozP2gPAwxGoVXj1SoUnG4rJYi6HkSmcdiEqVF42LS8Rsyx4dFKVTFTXKgwFQKnuf",
  "key11": "5DbHRDP41wTa9VNWi4pvJCX7kR68sfBKpqxYmSHqw5UXWvw7FwRmjZWkCGWoUWYX8GcFqWviUtEd3Ru5oApn9hCT",
  "key12": "2KqAucyv8N4n8oaB6zEemmS4jG3oNpswyV4MRsPVpirR37H3SE1NpvqPtTcPLN1frJ7vbgMZWsjG4cciZWC36Cp3",
  "key13": "4YLdV3gqSjE5pSKDpcRuu4agf9txkPHTuQMoVPC4VSKsJM6VPJP46i9bNi1rQY4XZZiGRRLsFjS3Jqw7Qafmg172",
  "key14": "3k48UqGKpAFCR2rHkA65XWo4LZaoN7b8ywvQAcFLEoXWPJf38znJGVjT1AvjDZgBWPZU8hCDQ5Gg84F8vryfkooM",
  "key15": "VHneP2VhehrrHbcSEjyqBwg6YBFPouYptTstHkfr3dUzGeycL5t7DaJFugNatQuPTTiTo9WYrKnKCWpTZomVcUP",
  "key16": "2zUo7TzQGmAjMWJibbjYEaNvXKQF5EFLHZCFNEZZxe1MY9Xv8Vxqc12oVWy6amrYJm6B26BKJmT5LWZgXmVtbnb4",
  "key17": "4e4bEDgxPB4UnwoU2B14W5YLLhCi9aMjb9XNL1J44bGxuKD25nGQd3MhyanwzaGzxaFVyeoKXFeBp3i5yCAPmYFZ",
  "key18": "JMJRT8R84B5jqqRPrQXDUJtdicVXd4AnojZGJhBhKoc22k2g3cwkVwYxpDjbtMQ1vDPPzsPbWtXhXjND3gqzsS1",
  "key19": "4FUci7QM1nd7a4dai9xbYa3ssu429gG1EVjg8HMXntJLWsWb8cfLsAhBBVxtfjiiNNnSzpNEWH6qaLLG2CiPAty9",
  "key20": "3oftDvaY7GWyA4LKYoUAcfreFNT8houjsU98j17i3oTraWdGTzASr1pWkSvoqdr8zCGbWUtUYiLh6ymbRF1o1qMC",
  "key21": "tdaeEU6Z9PNyxTju7hX4vWxzTFmeNDvQjvRADvCzWBPX3NfYccX7ihm1kqxzFeHeiELMz4r6eqzcPRnDgeJRve3",
  "key22": "5SNYgwGpo65gGvTKidTFV46rzNfbPQhyNtoLKM4MJy6e6UaP94zrtBPK4b1KcoDjkN1h92b4fP5d5weL7BXxN2UP",
  "key23": "3MgRCheGJejxqdzWjr6ReQtSzZqFCFXjXtpLi4N3um9XwVgjJQ3YbE6g4BymmjXtGYfonxtB7Sgj9uY5jkNkV2Eb",
  "key24": "34Vp6Kiisz1Qgv4dn56kMDAcT6uFMxaXHhFBgajMzmjjuLFKT1evht2n6zwQTA8XHTi8SDB6DgMt7NYLXqAw5t3n",
  "key25": "2xitxCyYgR2mWnBSF2aG7heHYyR1Ay3WxVsMMPrmnsZbPZpWA15oKZLmcAMjuHFMwmVki3wF2jfw98TtBf2g5CyP",
  "key26": "48qQTQbbKqWUn4hTTrEkRkTptbUqQaVVf5wqcpyt8vpLkd86ZMbZacT9scHwXYSF7TXJ73gjhQZcqL97EYYRLvJZ"
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
