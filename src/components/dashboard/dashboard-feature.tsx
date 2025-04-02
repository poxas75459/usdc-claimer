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
    "27Lxs9BiyNh8VNnAv7jLcpERBn3pmeANp25aQeRDy5SooWtU5N13Wyxh7rg4ZG1nmvzeJSt67RjtTuzCn38519PB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49pXbkgPpEMSju1RWWP1GPDQHAf8gNFBJx1SBy48mX6FNCvckGcPaXBxjVorMzuaKsko1tbJxrj4FoDNPqQFwKaw",
  "key1": "3DdnuHWoJ5pKxVof8bkP28tMiP33vtvgK8tw9yBL3jYchfgPvpf6AoKS9umCQxZrNQxmdXJtsSDXFaM9FBvGef95",
  "key2": "3ZrWN5vXgqHxhq4hDLTa5nrPsVM1b6b8zh2ehxsoaKRrDU9N1SuDUw13xaf4NCMumQg3KvLYEKuK3zzF7fsvDcwA",
  "key3": "2hGEqG4fcz9WQgqwiZ7W7Wg3eaKy4Ao21PuZmUzx1v25GT2zS9XprVTR5qiEzvn7ycXfsXUPgovAjAefpCkS8bLD",
  "key4": "YKqjrAaHbFS3bWWDkmj9yJcVZHm2D4fTtGiJgfF6dytJ86VdZTFqJc27qAmnz2bdqHo1jCe7zdT5rnCYDXeCSCd",
  "key5": "5QWihtozhwHUKEY9fv8HMQhqmYceEKGqRL6nsWnP3dwVUwN3woMH7AF8DXfGFjEGwhQb476skWty4iMtNfPUnc2c",
  "key6": "234rQxLF3rsMZgKkA7rtEkoe4QWLzuLJwLE4i51XK2KHNDp5wtCv6ftCUvKYH3NLN6AgRKmxfGMTJUzzxZ9UznYW",
  "key7": "4Zsc4sHHFdqSunm9xpfxLDik1H3Y6aduHh42HhVRDhqc8K8cVsq3NWpKYEzDyohmQVDXMJFUVut6WjJkLdBTrdoA",
  "key8": "66dKDQQTwAQ1xynMpCi2HgHHDTMiZDgg9tPtFTZu3RH9kdZ4RkdbWw4kXFLp8SGLy2PTNPABJCXX7JDEGoAqSHiF",
  "key9": "5v6toSnasZqo6TriAUs4exdAC3LLn7fReGCh4YAZ4FX4VjBxDpxnKpRVWzWEEdZ1mtwtfB7msCSYP2bKFV3TNe2V",
  "key10": "4iyB5RxSHCzCakX7LMVdpfZNkn4JkBwrzjzdQ999VwXtLacz2SirX9knQzxw6f8teJohMArLTBPeLEUWE3veaVVn",
  "key11": "hvCbosk9VrSPgyxUPtVcAnTTxHW9PJ4JPbekvAiKJjjFKje2swAcyz1bnJUXWFpDDKZWZFoe5p1MyPouYFAeU78",
  "key12": "5AcUBPBZKrS7JeZLr9jXWGC9xME6mfJR3zvfMZ8n8yKHEdC6nUQkyTQvp92qvP1fCUZAHFLuMogqi4LSbGV5KFLx",
  "key13": "39g2tCJqBr9wnx8JGSTYzB6rfwhyqiVDSoWbBxW1YYixWz57u3wNgBmN5xmTThKnLE3rjegZM4AKkNaSeucAkT1A",
  "key14": "3e8iJAhgSjhg4T6Qog15XbiP8HDLTC4cTjJb3K89e964GKmCEToP9LbhNh9ahLSBxVcxZPL1MSVY4V6kkGiRMzHA",
  "key15": "5KSMk8jTk5qW9wWmEbAyVVjYpgAH35oAn63Xo2JQbGaFvXFwd4kJ9MLt91X82RJvAuBVZ6dFmLxtZAWa9E4BbFPg",
  "key16": "5ckupwQCpA8fFSPNZRqk88VzrQUomJ5GKMvg4Dh1AJLEWRRFtmhwREtdFvxgFCueoudqeRXb5RgNamygaXjEzWLK",
  "key17": "27BqAw4kn6LR1Ye3pJkZyZB3KnSaM4c3BFfCNZDVkhVZv1EJCDdt4LfcpMgtXuVDtCRZDqYZUf8ejaD81JJwj5ye",
  "key18": "3bTQN3KGe1mySrBzMnAT6CEk6ExrKGBVSaTqydGqFqYw3gaN6S7A2bDsEk8vt7rXjVf9i4oQtg7WCH4U88pCUPq2",
  "key19": "3F4cDzaZYCU6te7vvYjSfg6Beujn9hxSbdzEr3zmy3PK8Xf39S1xjjA2A1th3iK8NRdqvksNhiR4BG8sZDYTqsEV",
  "key20": "42zLpL7HF6eeJ3gM6o5Jstk3vrfYB7cquhykdAyrtUFuRakDg8keFrokxwEb2DEmHGq8XqQPtrgU6aBKFH41Sr2q",
  "key21": "KSwn95Pi1eeiXCnGz3gCCSd9Tmh5DfGwTQpuj8hBxLh76Ytu62DbMQHpgztLUM3BXkX5uRyLJ1kMfRz2ZRvwkRs",
  "key22": "317mYgdF4t36o5HyYn4Nu56NYAu7Hh9AESNRzuafHGqCf9gfF6Q7mLz7K5dJbw78nh8cYfwvuJNs9cAebFsSiZQq",
  "key23": "6LFsCuiZGWqMeiZ6pMPRE83nxtcwynW8Ep7fqcDD5ZgyehhdxruZmhKz3vm4tCbCTrZksdrKPcMK9cJMUxXs1dM",
  "key24": "3NF9zKKnXARx4BNzTSSPXiF3ZfhrNksbL4S1yBb2WKhUcP8Nu3ZTp868qdjh36mSqfHcmTys1QyhS4Q3ZUCFtgxt",
  "key25": "5fuhgH5ZhWP4WJbLo48d5M22WYTvqH8vsu7uAabNGK8Zuvts3ZVQA7jYoVLyCVe2D6P8VYB71dQHdK6LiULYDtak",
  "key26": "2EAkAgPssFJYeYuDH5giq3e55GP5hV7o4RRTWpKm7dWVxi4a2GSkuLNkPy9HjR8ovdpwAMSQxtYE5JXMEyc2oHK9",
  "key27": "4xzaNnKLQsopq5LFsYd7GVuaPAyjGjsAdW8Nk7Zp8Z7MFLZeLmU8r35tnuiqYRvUFGY4DgRU85sDUnYUaEZborFi",
  "key28": "2vzzgTiYagdhNhBwZivVDZFvU4mPRGedCaRPJHevQH7uWi7axuFaUKhbL57rRtqWbA5NsGUgvv7RfpsyxZTBrkeb",
  "key29": "xWutLmxaLNqpWGo3hy5y73254wZkfjVdzxhvztqwBTaHqYnYCskZ8PJo9wurqmxwoAPPAzTttcm1XGMogPdwNMc",
  "key30": "3GCpne2A7Nm5sHmNxvMqK55owXsjpZR1pygbBmeoJCbMWjRdLcu5tNYoBLgtmWoPXmBxeMZMVNUzDPJBxqwQtyNo",
  "key31": "8EUx3yqjpmaKRj195y61TTR3BCVYtueQPXnYCpU3pamSvrJ9oZBSvZEiGMzCDYRtRzJyNPNtbYDpJwFLsWEzwNE",
  "key32": "3hRusXNujT1XBSsVjHD28dLc9CdBD48vnRr1yBf8MNWspPaf4zrvvxto7HySFNsDnEA3S9wZYZEXunZrwqWfPLRE",
  "key33": "L1nSHARoUoPMHJcGWPNKMT8nexJ328qZE8sTQvqbqkKDdiR6Pgrhg2xqwaQBwseZewJpL4QbfyVsHEHVVn3UFNA",
  "key34": "ygNGXQSUij6VEiH9rNgm9qQkDEp8j15PcuwxS2dVEBVxwr8i6xHtptz9ATJc3p4kZ31fHPgaSEWQhQm4iG9cVht"
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
