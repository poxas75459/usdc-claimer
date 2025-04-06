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
    "5Qw4BjVspdvQ5D11e1h6jrmg8tHQhsdYhp9na1WK5TM4zadQ9xTPxdqsG1N9Jzpetw7HUgPmF5i59YuZLP6PhrR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vUFws6p7n8Rc31ezb2ur8hpeZVafLSwaqhik2e1nzLoePAjMbNCJU4qEb7ipDP837f6bGr9wYxtS9spVvCY2WaR",
  "key1": "3JWXZHowG7WF3bqaFVrTvfQu5AmStMM39tkt5cbY7sGDvpTSZpKRG56L1BRZyWtQP8shykTCfvhfvr2EwbvNi6TU",
  "key2": "3GQZptAw29AJ86LdBVPL7P2nVjHGPfbbVzYjV4NzrA6Tz8CmK1LsucQAxSBfUS1Jievm7v9BfWHZrHFME93vHa4j",
  "key3": "2LHQ3eXeEN2FFToWGE2k5rXf9ZGsRNpdmvtPzZRkvbvxgwGWADgT4iwS87eVVzwz9vATAD3hPFLnvtAVKpEVvgdd",
  "key4": "5BWuNWjXkA88Wevr5SQ3GCgtioDKNSBEDHHghj3ihgYpKvekm4TZJJk2i1yZe892rhHVzvJhS3wUZo5hXSAAFeEr",
  "key5": "5BTUkFZddeshPvkmnHx2mBPCLQXw12rDRznhnrKbJczksDLFDQRbZ2HmFywtHayN2dGSSCdzgzFqJsZ2DVKYfWT2",
  "key6": "4DZisrMbtiU9sq6CXXwVYr2dkkygTxuN4MD6JF4vkWsi2DyHKMtWjuq8vUTGApvUsA3kdDN8VfzBX3t82iVLPCVr",
  "key7": "2eSZDF3N7qykXxi3cew9Qe71hP6x8ZQQXEBqcjCjecAxza4SJU3PPfUhfL6wf8qBV4SzRGZEJSdS3ze38r2A8u1H",
  "key8": "2L9ApTbPiEuHrHfUiQKCax7ZeRq2qAftjiK8d1x7jnPT6KA6e3RN9YuY8Heyhkb343mjz5iMKf2LHm4NYGZr4Mgp",
  "key9": "4ouH6GAjVe3SZHQKdUQfVNqeL2omt5uYUfuc8nL7VF36nEBmd6gN6Hvb7W6yVBpXdT6YSpq3fJtZR4k5MCQA8Yo4",
  "key10": "p6iFApMAFC5Kgx5YiT3SmJeuAafnYdWz2S3dHpvSVtFQLU1gePLY4a797k5vAZtmNUeVBtRLbY9wjcPgDQpjyyj",
  "key11": "AHk5LwQtdDNhqR1r1tM9xjJrWoT5jxMXNbMUnHbjxudyE2uewfibyQgTnhpEJbyth5wRXLDWpSFMFpAFUqQqLZG",
  "key12": "3wGCQ8rHhhp1qaFw6pDVyEr4Fj1nXq27SUKPjC3qQ6Ddo5FTv3f1vYGCmpJbwBnQFcw9UUL7gbDRQ5RQF9pbHahw",
  "key13": "3RhnHmbkp5EDUYRnQs7A6ZduvbRLL6Y7Ro6qeMxLxXbxNmqEzoTJCuMagJ6kXkdG5RJHn1JT869fz1J5k3Nkqtxv",
  "key14": "8cHLiwkwYLDur7zsb9sndRtMeBjsrWk1kg7XffG1kxJ3u9JSTWCAy8KEMaz23uZiw39vx9534jN7fAQpasxyo31",
  "key15": "4fp4iWAp3zEsMBCVeYLLQfi8ZUu7t2m2zAq2snkDSutG3qsfShUuY5xeH7RhWeRXkJGNhqdyh8uyntDp6ujHkBCd",
  "key16": "wmXzdShuaPt7u7pX9HxrzX8XKXJ5gzhbDkwTKZisJ6S2gCTUXQ2dKyyg6vjSAWwtfDz4KzDtX9dCHCFGtPE23wT",
  "key17": "3ZJw5JmFs2E7SkqvNqjmTWDSVhBpfVDD39Tzjbb1rQUXDjVHtfjbfktwN5nH7cavTwbyF9XBqABVvYBdj9oxYj4t",
  "key18": "62AApdduPdhwm4UqevnQie5S7zs2htRbRBpvog6Ahe1yES6m2S1qmZMG18LzF7ZjwjUe7QpY58uYEZ4SwGyaAUj5",
  "key19": "3pRyhFgfFg9FcHtjvScFpgzjVZ5KrWxTjQAcdk4kPXHf7rzhMbiyvBGxpnSnccpyJLJ1e3KxEm19SfPdCW5ZgGG7",
  "key20": "2FMJgHGDQ1A3CyERk26VJz3aYPVhUFBQK4PNVzHbG3awnsqRnSDt3J74fVM2Dts1yAq8AxrQrvjoSYt3kyafSksF",
  "key21": "5G2CFVpujz2MmAHB8wrUNrS4rPkNcPEwrktreUhu88CLPQX4pAwYnCokFUVLdEbHuiyB9r7EDVUJaAvRhYcgKqGU",
  "key22": "4dswXa7NsZPT52NcJVsMwXUhmYrHv9VBVdFj17tnopg24MHpnEkAkzLtE3wR75uwFW2MvD8qV6tL2hXZpC6Mdhqd",
  "key23": "3Vuk9tLaXjSbP2AW73QQs1xhpu7agwVLRizG12Z7rWpViL1ty481kTzpFyUdKwKBzD3tsrCS3au2oogBc9E4m3cC",
  "key24": "464Rjor7fokPLGB4SAhdiZ1tKgMHiei4mSxU6Nfq4DzmvSrndPXNkZBDFixjyrTn9U9cvbSXwUDjxPAjgXVhZ8Bd",
  "key25": "5qRkpqF1icdHiwg7SaBcoyCdJgtfhYUz5CPHVUjRe5Cke2J8YWNKs28QWVUzTF7W4ZesgURwFTwUnWq9WsS5n8LH",
  "key26": "ZMaa6rWm5au9DjDupS35xzxTzyhSgL4hnWGVnQhwJGQJfDgiVhAcMDPyg6JmNtxxToYhcgcrPkyx2uRxpr6khF4",
  "key27": "443Xpe6UdVJ9DH6s8DNG8Qyn8M6xRQ9nA6ypi5bo4MqDGupEyttRXxbe1vzVfpkDNLTjiFeuFyZqCjdnp4MLLWpP",
  "key28": "3CYL3EmdY27amMYwWhk92hjuWookg65v7uRwzLRbqope7gWBFKbw5zpJAczSGqet5bi8VtJoJCEB2T4wuD8Dh82m",
  "key29": "Q9zzwiozNLmGfMbDqWpqv2gouE8vvXCVhf5QaEj78AtJfch7GQxk2aMf1re2DWuC4sqK9A8L8Xq7aQeR9kxDfiG",
  "key30": "8apXte5Eqra2twMUbhvifUZP9c7vbigZFtjfxNrTraqBZo2hrPQa7vpmqpuVYRjPkTjn7j9NTCLeG4EtKBkUWjX",
  "key31": "54TaZD8ZwakUDP8Hr2QcVDbGcjuS11Sk7ojyiH9GtCRWrFBtVAG4NfiKZZR3XLNnHY7TQGmQKNQpkDwn53orBUG",
  "key32": "4bnPv8qbsUA76MzCM64MsiSPitxQQsntjedtM6WmB9fzUWWbn9aZzqcgiQNZCWSMCYtNWNHBmHR4TrQQMz4mccsb",
  "key33": "2msUwWKsxyzxp163Qc6UqzuwSTFNdrYK22NUFvYHUMCrrAGENf6MLfPjdXEEtSCTsGEiVhqp7DQaAjqKXEi67GGD",
  "key34": "63LDRvBmVzbKeVYmtuD4yEu3fgeaexwJnTr6BXhYczK7CfBrQJFZ4tkErEDXzTqpoLdpu4nnZd7JpWZwdaZEsdP6",
  "key35": "HYFHhV62TmJtPJ3Fjt5fyej9Tkdv2yAae5hGo6muunzEVsUfMeyhrJ5qTetGmcheiNA55YKmXKJQKsxazpoJohy",
  "key36": "3ZbvExdU1iLp3FadArezvTCW6D854vbHfoDPTGnz2CLczfh8UTSdsugsvSDcVunQwAf3Bnv2kmHQtntYvnBeixhF"
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
