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
    "31MrE9FEPjuvqhFtWnuewE21PQjuPoZkxNa4PUKEmikNvyQuJv6s5XYxW55Q7imoBA6b3fjF5xXtbVCpoKyqCfyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4to8PoESMWCyDoTadeTgPFXDVvFPGpxiu9Z2nDdqLUctTigchfGqmixJEiYW56Kf5iVQcJK4WahbFjuguvPnNs7L",
  "key1": "3j7KhG4ivWAKenpawqEUXQQKi8VMahcLu5mtr6BakYsmAHrgFMCNfWmZXYiQPKJWzpkKUCAXNu1F6CJvMU2bDQoo",
  "key2": "3raRsScKgEKi6j8TPbQPPrbAdJCxpKcnjstCCVaJ9WiCreJuebZqiXDjG5XVbkFQo36PNgjp5MmHfm6yQ5rrtMgy",
  "key3": "3Xxo91S3kVYCV4NCVdKQD3xn2jxsVqp87Fu7igFvpigsRQZeARWg3HeVGzxoujshJgEmhXj83zgxg9yFNQYo9b6G",
  "key4": "2dfgS8oPB74d1ei5jAXRZXM1c5jUhfw7c3QNrZm9QFFZi11BPwwhD7PFjBg2A9vowmfoM16fqw4pQK8Wrwb4rLZp",
  "key5": "26EXExWbdMG7FaxYXqdYFp2No1NKHE1LaQMCaD5622iN8htFYDYgXMUSCsTKPzthTN6EABfa9qn18Z698J3GLHZX",
  "key6": "2uEhzTnhCbFkE8ZjNsJcjdMCGJ1KXyrFefa7266TkyumpHnainz3nZMiJ4m1uadRBtjcoH4Xb5xYXagDmNw3BZCM",
  "key7": "2ruu9ADmAkYKDq7SmCU6Zd434x3HpgwhbK66ZFsxUWpQHUTLzDLca6mwzkyQvQTFJCPKaiiYgth9xwvzt7rizSn4",
  "key8": "3GezessCWrA7MeEmQivHzpkaNPdNSGQ24gthKJdtNxN7YJpWPS7Db5kMtB3RHXENd1pysCPhkmibnmZnowC2x4Yn",
  "key9": "24g7ApXGYJDKgHa7557n6SSmu5Fm6CSMdcGnoW9H8u5LRRmBb7fr6Cm4aqbUTDz1DzHSFVKby16FvQjEVuj4V4tu",
  "key10": "uwnNxeCgRNV6yMKTSsfoNxatCYmgpckoXba7fMY9SQYgFFW8FBQmkQXjuNxNLEDUA8YxuHKVgqKgFsGi2JhijLT",
  "key11": "65kdqtHxMPxe5Y6GUeVBcXFyKfS63jHjWgYAAkYYbpyfZ6Lo7eVMdN4noRg6WoJ3aLUdkdDajimpuBUUwbT4REAi",
  "key12": "21zD6RWZ745JkoAHKREgDmNzFyU2jrBLBLHADxHNSRtZufBky4qd4eYnDGN5ny37erNZEGs35nhtgY43E7prWHC2",
  "key13": "2V1RYLoW2zU6Nq6ka8KSSSkxG3B8SN8bgAKXTnkqddFAJwkyUQmTGyt3xAFGxKNfdvvahUTdSRkrwH1kbtqnWoNG",
  "key14": "2MvxhDRuGrj9ZcXm2gRK8e4Dx3A3ut4JA4gavum96ugTGkWZDqLhzAw5gKxaruHmUJ3etkx95vZzDwyh8N5eLDyN",
  "key15": "4uT6PaymAWodLeCcRYzAmjTDBKt6BwTxYF1d9AcSMmibw7rCCe6C4fEkbw34m47QcX7JMYfGnK1hJapjW7uQTH4n",
  "key16": "2JdpZGLMxcf29ExJxWTzvwwoGAvtgCFA7teRkfD9GHmPGQbigCcy2zchD1cSAd9N4UCzzLijXnB66Hrkc5iDmhdz",
  "key17": "4j2dXY7bwZjDsV61deXuLZ5neojsqeZwGVuEdPkMdi4TuoEKFsgdkYyTsrKTdV2LMTo2tvYR2nXWDWua4VJ8JGEC",
  "key18": "3Vz5ss3uiaMFrCemqb9N74i3TJAPzE7QY63T1uTWpE3CWv9Vbt4Fi4cMRs8A24i7eX5QirF92Tqoz49eU6JRYN2N",
  "key19": "3TQYW7HXyBuP4S6iqS6mgwzAdWAixqsMtiHc7oZJWXDFbXzMSGYLijjzCt1beRgjeTmqe29NA4PmBDJULybKVF7b",
  "key20": "3oMUDjLBpU4xu84SAbX3RjA13a2KtcJNmKuugGgCxa82FrNjKGjHafjRPvE9JtK3Pey6azTmRVX9xWVmnVP15Coz",
  "key21": "pZpRv9xfiiSnzuUqL1te2jLAUQ331B5M5TM9AydNydeFkpxxt5RDQE19y8XaCw1tQdY2HouEfSpZxE4cAoLkuA4",
  "key22": "55cbWo5RXhMThDnm34TeXKJ3CVVyokQZWkFs9VYbi33ZWG1c3DKEePG9f3i6eHY2iytxwcEQp89pp4HbeqXbM5Z",
  "key23": "5mh4zo3BvCxG6nhNGP1JtHSMv2u9kLweK99ekG5TM6GmcpMEcGtkcJBX7MKxbScwncKmEoQUC6cD965ts92SMX2z",
  "key24": "2Qef6BmpCwy5QgNDz8szstW13VS1dsDu7nE8z2j9G6qo2y3TYXMdJWLc6XzSjiteP4HmUdCwWXT3ZGwyqYx4aZYQ",
  "key25": "4bhaCNntB84qH3nemszo9fFeuWKC6NV19N8HMaoKGxpoTt47ijnbihe4wLvkw7DZiJQzwYYm43fYwWW8BWemSEoo",
  "key26": "msANRTQrwpmjein8ruvdVF7crLq7kuzR4SorKT8EE1CUgfKiZoRfebdSz5MJ7Hr8jqcAYz8WdN8ZDDk6y8vsDxd",
  "key27": "5hvPCkCAUr5e4P7dUX7UMXDDX6khBz4Ah4Sj2HNegVYJz7UFUxTwH5btnofvR4FRaU7Sab736RTUYNWfowRyX5vb"
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
