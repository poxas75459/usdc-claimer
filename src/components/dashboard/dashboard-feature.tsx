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
    "8RP7UFHkFncXVr9ajUxGXzygqXgYEkhXRvtro9gvVMfnDxpHRZ7poSw99T7Abxp52dHhpzNwPACpAF8sAo3kn8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szcWtVWJMsHa5T4YnU9iZAZQQVZJ3CVFrZkvNXCCj2hKNrQoPTUbVfL3UoRR9bPQgY2HofKa6Bx2KYNLPHzBsPs",
  "key1": "4okzHevgs2hnXyQc1voLnDgdziJZRJkyQ6f6tuwyQTF7NbuUawAAEiHZjMWBaG7o1d2dsCZDju9YMkdYt8yLCywr",
  "key2": "4cxD7T7gXTcmd9WNjm29RYg3MGALfxAg99PsYokrqy7MEE5VezdY6WabSi4Rz4osDvJQ8GeJYSg1XG8C8oNhcB4E",
  "key3": "36f12gTCMkRT66zVnTCe781ehbimqtmhRc5Zkf5WVaNgUUFnXfgH12n7W1ryP8xUnMVaaC9cWNJGu87bSqiw1Rx2",
  "key4": "2dNdXJTx7cJbRF9rcNof1m38gbtwKE7kpcPQzxebZ3F1tBhQrFjQQdnpcMZegvUgeJYWFrNMHFcihiQ68wgEEuyQ",
  "key5": "2TwSxkmiZq6wHFCfNYjzwDdTjvza6QTtTGvZLf3vKG9BoK9JuEc2hKnzewFUrcHJBqaXvD3ESUKmRXGZ8zQdFStR",
  "key6": "2osxzc25PdYZKuTmKTMheAUz2Agkj8dGLs71vWirCwKWj6895JAMeiqbJwtfdLjYbMDog52itawVSuP1RZikEKUx",
  "key7": "3WuWccjbBWYVFd6PgXRmGoNJJU9WKontrTaLKdy6JyZj4LQwNVBYYUypkeEuWpufB7HapQR8bjbf5vbNQaVbCjqs",
  "key8": "5QFkMp2a2pgHmzTCjLbtTx6AW2rLyVJK6JN8Byy4DecJ4fzQxPhzvBqRJtKW5SmMXTjVFqGr9op5YV7pgL4s94ZB",
  "key9": "e8bq9FULUNaLhfrr7f4LbBbCRgeh6nCiYuBg7vEdySvgSZXmg1mQa3FZNhaoRPhifidFnA7pUAjgfMF7TRFDHhc",
  "key10": "51cUETiioZFaNk9RXNdQJW7aLzc8hZnistEhAm7QbJi16KAUBw6SEWmtFWcy6tgYSLGHVMxN2WaGatNF5NhhgbRh",
  "key11": "3usNn1oWQzmGfKWvm8hB5NoR44TpN998ztibiTBeVSgi9NK68sAxCEM5m9UfAGZL4etUvhYy3ABTUDW746njrbzY",
  "key12": "2Nn4qtaEnKGsASxMxgZkRHSWMtSuzjYACKTTrh5a8u2QMoXGwGfJxRPd5EVrw673TZxjXYYjHigYKoqhz2Fz65x4",
  "key13": "4EmkaHPvUrDc7spsDvFcvpTdGz2bQtJw1izG3HRxYjPixRGxmc6HshezWi7S5td6GMjqFEBudb4rVFmLF92TWchs",
  "key14": "25P17HydkowfgkCQPiNdEnan12rviRCmqrMHQ5Dpn9Yj8HGPeAhxjvsua1xviR7nuiYyLY7ETuc2uaCdNdEZ7Sb8",
  "key15": "2VMjjQSiDqE1jxdHTRqF17auQaZPA7GZotfAh4drvu8Zfj9Uhrs4syenpGqNqzPPHV69dEv3c35UgQ9cDvTHXZi4",
  "key16": "5hBB2QftadqabbMFgDU2mM1EdHJiq1iCu2Xmo4EcWCXCiF3htCc7BSY5We298quKmMdKGiqEHirCPj11zyzgqz9C",
  "key17": "AQ1qiu2CpB9LAhqwNczgwKb3ob9R43NGxdsh1qfhog1SYsWZ3G8uekLeTJ6GxX3yaRhTTGuByGfmKA9fHZDcMv3",
  "key18": "35zUQ9g1yntDCaeT9nJivPc6mJzEqDfeGj3DfR8DNhxFYAQ6q7pLVJu5L1sM5NBf2zVrXSsAAKT2Wc62sn2KGtjS",
  "key19": "4THP1NgtoSzMtZSSAkRdguJ4CHKtwGUM2yUmWKV8hcm2JjGjCVZRX2AQ4NTfZRjKRZyt4RSucuafJLYYqrTirw4v",
  "key20": "SC7uqXzMHnaZKjAo1CrLzapGDK9aQ23a4cQoAo9TiYTYaV9DqkXc3mm6Hwr5GeietdUcQYjtzN22zGjYmn9EfmQ",
  "key21": "55qYKWcrrdhR6hPEXzktEB7MBqC1PLsQoaQBmCdg4aWkzabzK5zTExqVGUkhLiZ3sDiXR5zytLndMDCTXYZZyymz",
  "key22": "673M4FBeuD5rdKFc78wkkCnQ177G2LHuLW75TVD5YStPnjCTskfSiqhhW9cNZjSSfUAqLdmd7KT75oyoARPkBAFh",
  "key23": "23pxHSvMaHXv7aiC4KVZEM51ZkkoCgUkdnTqvrGmr7pr4R4HdiqQKNbpChLgZ54MexdPfgcyW4NjmdJVCwY8o6Aj",
  "key24": "26BMU8yjjCW8UQKc3PCKgkhqYmo2z5wdaBtfWgo94dZbfRLEoAn7csHmjJUaENsebRUzSMg6LX9qD4g56rezVmQ3",
  "key25": "4L4Bo7UzL3BKEi1r8ojmqFx2zpAckbmZQNbupWmyZfZ6MjNtT3qTnyL9Yyz22Ucy126Bn6RQP4D9y3QqLLNwtfzY",
  "key26": "7SwsApRUQR36yLh6QqbZYrRdQchBr5a4f6JywBQoLFDdf3dkJ4srVLjN2eMFEzjExoPAsF2xmmtZb4D7aueopPQ",
  "key27": "66jyyoDvhfaziymWhdQ54wyXAAoksr6LpcN3DRGaJyBcnSiEAkoH5bTTvv8xESmc34x8NkAPDUiNq9VW21tS3R3P",
  "key28": "3GwXtU6d1gbW7ZW1heCKCevDkbYRnEZbNVNz7TycPSxMJ8hWmdV5fTdbndVih998U5MFPBiCr7qqbshXUhEUr5Nj",
  "key29": "53gKC14hzzB8eMHNVFQcjpoXDuq716jgkMqCMvx1DqE8UerECUPY9QyAKffF4fVnrJ9gNhSTydk65W6FeLv2UyVd",
  "key30": "3XdBUg4EHFkzcjTsMfytk6rVoFSUDm8nYC9C7FkpaeTcksy8BFobiKotYn24mWwi81jU4eprUEvNMhaLs5HYWuBh",
  "key31": "46GRmopi8kwYGS3BFshEsfAT4usk329uupDnqQLf2KmLTnC3Jt2ijcv4JsYqLQf3P9F7KzY9jVaTWFa6EGdmPzJ9",
  "key32": "2trNRFyqWv6dKBC9xGTh6y9LkY5ESvLPkVBV9eFeXQT7g1D4M9DxEuYiaqZK8bKMrpqSP9CKDsndxqTx3spmZ7GZ",
  "key33": "5AfqpjL7QtQWjsXCK9b1pbBhYyYdLxN4qADJCTiEMCjbRiC65299Rk2sHcvW5AMaN2JoqwhBkizk9fdDfwzPwPCK",
  "key34": "4bPt8RUqh8GqGmDL5x385CJngqU578payNpTkMFSXTQ9JPy4nULEMWYpapeUvC8qJuY3FvmKpGKcYRThPM52xVMf",
  "key35": "B3yJmFHamCHbpkoRPbWNFfajZjgjYVg6LHKxdCQbr3QTMVDzGv9s8WWd627WfRPMQJ8DYcY4hXg8AAHs3Fhb613",
  "key36": "2c2TXqW2q1b1A4DDJEF7E11VJf3YKicH572KNoK2BLYf2CW2CrWmiNLSgN86J8fBpJRCWBG4ouuS9wYLBAby8A1c",
  "key37": "3wJnPUcSeiMHbDp1zTuxxerYhPnVp3jvx1k3VPjDs22M6Px27TGvzSZiU2FUMARafHKMpTRee4WC7xSxBu25LCb5",
  "key38": "2rDVUV8ynz6JPXyEGfKSMHW3FMTfYU5ubC57KJdHQr34gm3cLrfVZ9GR7Eh7eULYq15wL1nF1V27NcAiRSiwNWhx",
  "key39": "23jbzKRcFWoZhDdHTaHtmZqUSPQm1ak3RUhtQPz4dLYkmJWXKKzkyqkjyCqyMzyt6jy1Se3A4wxAFUfjGgLh3iKK",
  "key40": "4EN8ttqRZ4P6V7tGmHdLu1HSS2TitKpqerBoNdHzHS9F1zpox7RYqAYqZV7WSA2Wo1cNSDhNaHwgPZFdGCVHea9L",
  "key41": "25sJZAHF1hyi4chjY5giFLF6B74DJouvNVLcBcQ5pgUR5UTETRZ7Bnk1xdZg4EgJzg8WyJ4MDZ6Z42yNG6eokEKJ",
  "key42": "D747bkzFDE5SLVVCznysDWmAsn9HJ5AARfavusdZ1qx12SR4T6woBfuVStKJwyWDQj4L5V6aKTVZX8dQq13mX5n",
  "key43": "cJJByeTC6pP1hZhDep717K3GLbX4wQUEx12mtWWAhYS6bWhbTuWLePHVNEskJEGpeH9wzawFBjraMTETqpNuFtD",
  "key44": "3SASx9cbU1KLnmdpbPushyYd1ecRjJuFgdVzqv67nCjKa1JvBNkRESYtZSLkH6qh8c2cgzoz16csZ7GuKdDnUJMq",
  "key45": "3iNF6KgbTM5VreTBrHj13yi3FUXshmAKy3X5CfhCYQgR1M9M8NZynqh9hXHg18cK2ZnLqYbike947iHrU8NadeBa",
  "key46": "3XWBv7BTHKrpRweVr6RC3uWCrEF6aJdaiKzkxRwCHMjMDMi5qyQQN7DnYpHfJwgDKQgPT3CZLbSYqXn3aN6bbMeS",
  "key47": "2BhRHSc2nuDh3neecRsihyyEMgP6TE7Q7f2d5jumLFXpkPC3CYMW8CdBuJZjj1SDRe7xbdVvxCbjteUH9xJzJGid",
  "key48": "4pct3AAYFMK2GspNvR4j7gSDZW5yzRh3GCZLQxXqxCJ2W4LHgtXEZMdERrHSB8n9guAS48X3qaPt3HxnpCASv2ra"
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
