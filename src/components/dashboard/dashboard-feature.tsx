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
    "2XaDeWahhTNWhxHyt2jS5rnuNK7p27PfYNzUge83FeSBPQki2RiZGa5VAt6dQ9X7wrknfPU44rNVWwLFSRnAnF9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihKMWJDYcypLEiSUknS8SZP6F4YE4BaDtfGAzQNKrCDYUXkc3jpjiryJaPmoGpYibgkeLjHW1HPgN1n3mtprmeL",
  "key1": "5YtYTVCEfAdjFHQjPphHw1nY7gts9rHvRtPQgmDw7gwRWDDYY66vk85oM89ypvGmtNjbrkbFKKBgx1JvF1CFcSyz",
  "key2": "63kZkNp4C4w4xVXz6hNAJzeCSW33wtv4bVG8kEPio9iQaV6Tgy4AFErXWh7PZA3x4ny7EdnZvRNubZLAWKsjv14v",
  "key3": "5oHEmXvQKFT3sn1gvuQM7SyiRDcfRqvyE988VVXijzqNmhBz3C1qo7fbHKYq2GCfV4Hopjkk7tn8mbXraVXXFbkG",
  "key4": "doeGXAcejfhk75TCeGbPNpKV9xe2i66agZimmJA6uQNt87pq3zwvkLYnJLGBaZPXG3USmPGj1YUaHyySatZx6DJ",
  "key5": "234FAuPRXzUhs1vBoFRjMeziL4bnM1VfWHVfU81ree8Tb2HjKs2GBJa7mV1fzPL4Nvm97NzF33QxpRcgZyA7WEux",
  "key6": "5fWZyjQwoS55JJ6f1T3ShEWuRn3BzirFnmyyhReYL1hRZmxsw1Ao5sfhqZ5dPdZmZMDh3jL7k8QhLVuRgipYU8oa",
  "key7": "3E9hofVZyVdEVD4iKR5uLfVuzd78UruGRhugvY6brLHbQYVvki6ju7iGJkN3sMcufnA541bf5zbxg8f4Y7NxwHPx",
  "key8": "65ATbUFUghFPx43qb6wnoPYFiVuzrV3bdzBn3MrMcatSAtdfihaQmbMHFqez6FMzjoYdKXFRoRYNFDSkw2v5M1Ki",
  "key9": "Mair31SLw5ELaxpmBsaiReXyBBRiZEXNAMf2bqUiG2ugdhybBpHDHFekxiqRVWdMmtcLpuKC9CyAxy6CeBnotcx",
  "key10": "2LEAZFuTahC6FfrUry1WZZc9unjCz9CAiYcaARjoKcbKeRmvZ3qDo7ktwMLWtfKGAQbFJfK7dHGysqX3UY7kA1gs",
  "key11": "5CXePcn5hBR2h99b4nssS18TM4QgXmEfd4zVNK57kxnTCY2k6LJSM1cU4J1gwF5wrDbiWTECGDMTQEAvwq5FZfvd",
  "key12": "3cp5vQrGJFpfDiY4rfY9MP1AMRPvgo5BxgSxNgg7hU4EiFLmrM2GVCRx9H1XNuJV9Jzaw7tzntLtyqYtmW9E9vQY",
  "key13": "3S1dQYBxznfh4xFmoL2k9xqa9ULLaF8uy9FqXeE3nMLxrXT92LdtNMmX5ub6h4RKUDCkunrnCRvwgZ4MMq1rHXTa",
  "key14": "5n8z8kNfxrMdMpMebHe2EYToQiwL2MDquBY2QBLiMYqDNHmiqHEL2b2AmCVxcNW1DBwRgyztoYYiutyn6TrjvkCh",
  "key15": "2BN9Uvb1xqUnGAGJNwX5ddBTrcqJcyC2b3K3YX4kQGmdGrgLBbQPfxGhzDxph6r7VS4pHjYo9bGVAw5eEnJByPxs",
  "key16": "53ihPa2BcmFACPey6XxVDKZ12vvuhvJB9yfE8dqP5WTsquagmFKYczL6TWoqd9ZHy65z2Awk7qpvhMXFWQsah9Xc",
  "key17": "tNbWkeSozokwMaUujhqNrX9s7XGssswaxsaVUYNDTnrWUn2QcoHPhMQdLcZ6LSdQKjJVjdtEQN95xp1XhYH6Wm7",
  "key18": "3XyXQeAxDdWm74B4XLSGTaurvSJDKMy5Z4j992QqMjNBwdbwa7eChNHztUifSD8tGsbdswwfeQGu4p2CRKQ17q5i",
  "key19": "53o7ijJEBpdVbpeY6A8knsHST7ZwoYFNqGU8TZRV93srgAicXsQpJTQwPFw1v2wgMe2xpdhRq81Y3KcRKLzxehYJ",
  "key20": "124fWuB44A1bWnfbsycB1PMGNX6q417E7xvDGUFtRGmijUBAsQDzQWWizBPEsq7NmAyFC8ph11t5RFGzYv2FHiaf",
  "key21": "4A2hcafkmtBieZxsv5J3qe1BiVqmYAs7UiX343BZGG2ixZiLqFceXonYZpJpBCZr2KUjBibArar1zd5JYYAzTJh",
  "key22": "61RTJUgSLqvAwAgsFPiRk9uKySNEzhACuRom1DMJ6X8yAdHJJHs57ueQacfuHoLUxUBX6tWVb3G9kdcPeYw4hnLL",
  "key23": "vv4C8NgtnrPKKB5r41sfauZH6Tpnkkd392w3C34MbAQtAU7ioTBdBpXMry7TKWYqDxTjFRicg9cnBD2jSQFCxCe",
  "key24": "4rT8MBHZHWQ8ZgNehp3Yh7rR7y7cKHL5LCbuWfFSURgSwSAQGD3HkRDGrXNEPEGPuozVnqPXxJpLDBnzioENurLL",
  "key25": "2kbzqJYf48iHbwXcxHMhPtnwYAJafu7BkSAe8PUqyEcFCW3m3HQXEkeZhMAqCcZcopF7J3mi2KPV7gHLbvqQ1Z3g",
  "key26": "PJnsoJxqqWLrS7vxHfyreXUV6dw25mMR4ZPH3aZTDwqry5oucj9fs9NZyC4DqEexYK8TLyZnEgaR5tXE7MfuLNm",
  "key27": "57LttCREyWv9YGgQdA2fmKH8bjihC58xY5g5bYPs38sy1SsQbFDMvfUDJtoFwLHLp1gaV6kPRvg6ZWApZEHd8122",
  "key28": "2HwhgUZju1fjXPgHeWUQhqx9rTe1RmoJu5kymjuTHLpWReAc3uiUo8B94gCoHo2WALHaZv1xZsVE14bKNnQEznHH",
  "key29": "KZwTNWAiaUy5fF6b6yBZmqwbhMLC8DiLNCuQHYSdXNg5ede13hs1hDRqYSmi1L1skKeqH5oT9o8QBUyJCkYajmd",
  "key30": "3q3rFf1uKPUYvikm37fdqsFyn72pdSqvkhV19S66jDpufT9Yf9UdrzVAZ7CukWJMRWR5ZFC4Bru9HV3PpyVmYPDF",
  "key31": "3ypGBFUKNjx8WXZCLdXjJ9TAhzX7ejiLb5scKyrSLzYcDv8fnT6b15fmmT64Bd5WJUn66ZGXfqaozNvTSnSyTNj4",
  "key32": "5LXU7npuKtC7xTS54WRgtjzPyCpcpohxvFJEUZEWXJgqS4sSAWEJccDaTXpdrk1pW5ddkcz9qA9FHQA5MuYdP1wZ",
  "key33": "2BNC9cS6dWwR8DUfrjW7Za4GJySLzqugJH3WrseFJGD6cvMBP2nUbpyYsi2nzWctoXLTLQmfbAJmeik21zq9YcaV",
  "key34": "5YU325pK9u2ZediuQYpHAScXjbR14A1aJ6TZg46niP54MXp9oYYeGCJqYGwWj7fzadZo52DAVg9HzcqbTMPiwZat",
  "key35": "bYr8RrM5LVCh8MDu2UDTnToP6Ytp33sUUPauoY6v3ZUBWkusQVsJ3wRWUPfojkzPDDgz6b2X69xoFJ8LB5cSPPz",
  "key36": "3tX859L1JrB7d1Xn5Z7Hmxc1PAJrDucEoBdwNse9f3L2fp5cEMepoqwfXszz6N3hhUZyHwYbGDpXP6Xw3ZeLhL7J",
  "key37": "5Ym54diqJYj3wLJy8iSRz3w6LQMQnNQyiX2tPAFuoUrX8jq7TszB2rYRHKqMFYkxWtdvVCrcruEwrTA2Y5MxNdP3",
  "key38": "3BN1j51cPkJBrVmpfwj74AjKuWHxPQsxmHfYV9sfjb6BXQ8tmb9EUH2KJMftNToyqiZABeTso2F9zWjVVg5kAnxX",
  "key39": "3NSdpJcgz8F3Mr4FpDRZfbS7NURZWfUaUn1afHQ5GfUjTDnfGnBTTR6RMqZHk3giHK5LVEwqkdcnCVCGSzqnm1yA"
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
