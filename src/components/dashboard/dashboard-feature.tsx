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
    "4HU9PFnGxuNt9Gb4VFqYuN1zSVaHFwjUjPd1ZLiGAvBFKKzpSH1KVwoX5pARQ7Nr2VpfFdADTcy3x8CgYB4DHpKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BhBixWsWZPdUTLgwdgsgwaYpYA27TAvZpnvHhaYsUXdsxTMptPpKZZdYfkSEwWDJnVxyhFfB2XNzcDNxBBxnTpM",
  "key1": "3imiXkMFwJPHN9xpnpk2uazppUdrkxJHLCBF2nd3GXN51e3nzdnywa3dkw9twe6Vx3nqifyFWjR9hCJ9LQ9fL88r",
  "key2": "4BXT1wByoe8KmsRtTC3A5QSPj2hV36qvCUMQ2CDgLwj2VztjHnAnD3SmtGr38YEbAaa98wr4Dr7AQyRwHzKcytGj",
  "key3": "gePFDYa2TfvRMSj9uYa9r1EuSd5wZUcDM4b16XPQ1QgUTEK7QkQ8Au1rZ8DRCh3DywG4Ewj3QtrBWVJow8XT9UZ",
  "key4": "2dnr2dZ6sppMiCuvSG4rkQTfeBYT5M9cT1MFSVKWfbssTG1jjYaV2npmraES7kJscFTFYLrt3qJujBPUY5FHQ33r",
  "key5": "33UinQTAE7wdts2coB26HnfCY2zKrfBZtPHupCbjPXDyebE8NY1bAARU3XCnAibWCsUcFHGWyxBbzUXznkjKVumH",
  "key6": "4EUKCRsSNAEtGiYHFpJ1S2TMDHxWjGqTRjRwquvFWUPvEf5adXsp1UayxTH6Di64q3W7XZGz86bdJ8ZThshTBH7f",
  "key7": "eL3VoVzfA2wnsQdS1QVRHR8PuUiQ7GdfRYXUWqdnUbm4UMF3oVxcK2r8WqxRAamLoZ2hHgGZHSaLpr7B9JnCVJf",
  "key8": "SMHBBzhTeuCpfu8VrydyTbMtB2ThDq3U9VPUK7EDa4FsgkmvdUAyGoK4avsP3KzA3xaskcHKEadKtgKzP3PJcUa",
  "key9": "3JomdbbiNxWEvFZwnVK4P7kh3ZHJNxB7FStJw7RLfdHp4aPnVTT3h8ET1o7LfUPG49p4BwBv7hb44SvJ6QA7twne",
  "key10": "4ZLbGBpjACsQGLhfFcocrwDSAVA6KyXreKLfTEq4Avob1v9QXtvUSqCNxynWKm51MGVvHdfkYnZXmpQh1dZ8KwUQ",
  "key11": "ENmi68xzJ8Zh3a5AU7RH48gAWx8yNSTno2Wk5UbuYp6eunyXjXkTWCopNAc9sscqhSaRHeF5mDyyB5NjRSA93sE",
  "key12": "5UmR1f1e3S1tEYwkn8nWqEzV6gdFDtFs4t41nLWDpEV5AE77XReFyjWGc6d5nryMrkSAci2ewUvfF2msGeZRTFee",
  "key13": "2Rke1ZZhXT1nAFUt58GxhCAQipsfWENfpfNopLu8TQvo3gey9G2t6vaseHD4HCVgkxY89ARNeQXGJs53FYsVK3TZ",
  "key14": "4gedjHBEr43KowDmzphtaVQjyBbGbYX6KsuG4pPPBbgG7UqByBwLXtBvjP6z3zfowizkAP2VDA72zXMDMx63aXpn",
  "key15": "3hXgMtXPUhVcyMh3YFm3Wv8pnx1eRSjke8nTCHG3xwSAorZuJPwzchiemeWKcNTb3rDcoKmnkGPYYUN9zhzaoapu",
  "key16": "5eJqzvkmCNunff4U1yn3NsHufcp29FbbuvnsCtBcSbosoGWDcW5ce7WbR291ZXC6z8HDQjTKgFfSFN64RukR1NQy",
  "key17": "48aN56jMYtd3bxhY2uYCeyLj67VR8RmczeftqFwa4m1snWerpkscBVRCfcHgrKt3bzcQNAx5QWK17Rx4MykqwSpF",
  "key18": "2WDnPiKWwoBWjpkU1BhyJbmSnZzJHStRe2mKp1U72koWfzKK1oNMnQQPDqABqaXL7k2858NgbVaeM8ueNtQgYV46",
  "key19": "5Er5fxSRrAcHvAs96UbgeH8E2Hif94RSBFVtzpwyyfhgQhL95voWyergbWotWuiqadSwG5EZXEmUc5YeHwJLfjrm",
  "key20": "5PrpqvvNGZNgaD9ADDQftYqD2gX1avczL1c5tc61z5uhUShxHskJa9CDFHupKiD9Tv9onodxcUzBeRHX5Qy3ykgH",
  "key21": "3wj4KspfBGAReuPjXAs4BLbkhQZFskVcFXUT7D8fCTqnLeGmkXRCknTtaqdNjBuJiDMCG9KZNEhUWg2jxv7vNRtQ",
  "key22": "5Cmjwn6U7zxMxrWPxsDouGcmm8MAM1i4EsWWnPUbYbG8RCTacVgBKLxEVaA4hMwVknLq8Yw6MGYuyEBz2Wbr98rY",
  "key23": "2cVgtkMXiTd5isabbVmr9DdqfrsLKtUFFrdCUGo9yp7eWmV7SrumycRiwK58aCsoFH5HK3178tHB25RpKE2ur5V5",
  "key24": "2yonfAKqAZ7r7sSnq47oaVZp75oN6noE6qB56R6WyUfDXkH4Cm3tDMFejCShhoSjT4gZRXeFGyqZBa1bx12ixYGn",
  "key25": "2dmr1LfRseDBPZeksNquXnLspxhYhwP9hnYKmAqbfHLmw3HBSktsZoQpUQjRghJRDmK68Z5DLn8UX12fVJxP5SDx",
  "key26": "2Kn7J1uiRfWGLZPRRaFp6LaHKqaZe7nqyCx8dmo6FNrfhqjPi6ppJZMQe91ED1QDGb7jgxkGeXWP84v2chn8iqva",
  "key27": "2rr1c9oS4VNUrMTN8acai3hYbYEDB9iegDqS3yxGofi3sTqFTcMCyRGapWLXMwtk4Jdgc1X2wnqPg6fnhPnZ8vBx",
  "key28": "54fwQiBrTCWQYBFkn6T2aJx2w6V3uTPSFkPcuoijom9Q8vwE1Vsja7Sd1svShqR53UDLfegahWxwtkBuAS2DYF2V",
  "key29": "3bt7BKcX2EYM6BPvjyA59kzKw4f1ikzNLTv53LiRujruDsGxnVnV6uQZqsDnT67z9coFiP7XDdGvLB8JNEAhgfqL",
  "key30": "5CTCYfUvnTBWszDs7kK25mrkbdcimVCxmpzZUprUJU3vF3LzpG3RTz6miAbAPnwL7B3mqu2sNTyzyRkDWoCb5bKr",
  "key31": "2PeDC2e21mRrgbxsNF1kqgJPwUt3N2dfBK79nYoaEx4kghH8FGcPk72gnmrWsTtGCTcpz2UJTKXTXAUqZ7HsncYB",
  "key32": "4JFVwsxXR23pe8tDFDqTRHKzGTgLNKTQawqj8HFcNmrwWeNYa56VBKCPfrgZ6YQ5xDErPSX7m3ASkUvobvLN3EKc",
  "key33": "3jxGhyCoJc7GmxKDG5qVpq7J9x6ar3i7Q6r4cReLhKd8GsMMTm6hdqWeoCUF5sKXeAD7ef1d22wBJUESeY3dNz1q",
  "key34": "5eCFY2fzi3kAyU1LtCLaRBbeL7ohMwTeq5s254fUJQF6HjvgnUzmbmEXTpWKCZbVeHB8DX5MH9WZPTv3jKhga7pC",
  "key35": "UuBddsWnkuY7BrF9WXF8KjjEtksCorZefBqUa8A3Ektqc1qXoi6tP2496R5JgVyRyA9yYfeTcjTWTP4f1onE6mM",
  "key36": "5UdGb9Jyd5KzkvsgN2o9DjHAZ4umdRjQcM7D3qMymaRXvTMEHQFBbNHPrSGQgZ3uK8BoKYbFepUvHWUzTyGDa5X4",
  "key37": "2Xie8wbQBa3YLe8hJHtXEsT5rqKTD1yydZLvoJgppc9vMcUuvyZbR14n9uAAGQoYuteFbQJojZCCnqS3SKBMBrjh",
  "key38": "UeYBBgEoEnUuiCnthr6Zvz1tbREcqGQxdWxF2RKHht6PCaBMNJxvDA2szxT654LmzsvMg2X9ZzNWVmgL7NP5xxW",
  "key39": "2pe6vLV3qrWi3EyaiGsPznD3bGwM5PvVca4WkbjvviQsktN27N5bk6e6VFc9VDyvoxJW4KRr4yXSmhDz1s3hGuwp",
  "key40": "3FoAWwQZKZmfAHF6M1bKwpJusZ4x2pYw1bjnw8HanismP9qa4RWUYC1zdtNARYdrqJCR2S2EzUcLZe61bY6zwVMb",
  "key41": "3BxmqFrg6A9RhwcNni4CqyMdRyJCnNS9ZyD7dWWabjqPKCpi8MAsq7LDzdag1p7Q7u7YAPhAy9x9pxY5hR3V3o3N",
  "key42": "318RfS6CQRat42ZsWKeek1gVkMbt7TLYHFscRGFiGGGnA2Yue4iFRB9XoVjEu2aHepsoQMb4zPfZwSnunTUuetat",
  "key43": "4EewzUNSTYY49iVhMUXkjAfhfzm5wUh5j8hALmXLn43ZUGgx553cL2iuLoAghXjZ7oiCnBgx8p4E8DXag9J4gwdL",
  "key44": "3wPedXGBounpmDErEhpyrVHDrAEnuqWEoo2WvvhPCFFBcJvYEYAxnaKdY1yvkN598yb9mdUik5riY7FPQwo7U99b",
  "key45": "2FT37PixNYH2yMPWRBhVB4DR9qt7yyEjnXjC2RCpTFMUY21BLq6evvg2NMbCoiJwwTffLUdgc6kcSDEDN9nkpAK5",
  "key46": "33tAohceTZKT6dkn9saBaLFvf48sAz5YiXckzGzsFayLw2H11zCKnwZ5pJQAyoo1zazjAQ9zMXo4WHNFDtE1HViq",
  "key47": "2ma5FZ9y7pCPm52zHt78ShXwZzdSs3p5prsoN2SdtcYvUDix5VcgwvkLBBko3tBFBdzgvr2PHUAo5RwU8trGenhw"
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
