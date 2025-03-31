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
    "2BQog5TqXWsP6xouLkXiMBoQs7f1gSQ7oUAJhiR8R6dRt2frxyGLk331k1vqrsG2DmvgKK4TWNrgkELgvdpXwZAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26LZVTZE4pWXmC2b8i4ecYamxgBG1JV4geH5kmVNreq2TcodwWmFnXFw5J7vCSYCUx9scryrLfSrua9oX6DrQYuz",
  "key1": "63yRosrfdnUBsUQrR5euWhZn2wYJTggjvKvv3azg5yyE66cmTe7kBTtezfTd5KB6L9GxS4JdDBrC781mkQZsiFm3",
  "key2": "2LnWgxyVj7HGNFy9Bv8QPh3v1amnkMUqMTbLdv4HcsNVNefq2s1Y26ba3pkFEkJ1YJCfscNGwZQZK9c5HAWCgkNW",
  "key3": "2YJz85ErPgQykFdhe42yLaN1aVsEpHrSpPUA6hnT82YnHtrJZHYRg1asNFP1WX8T4HQrN1GU7DaYaRNDtoN6kwuM",
  "key4": "2JByHDAFpG2SkX338K3GZUTQ4PUGpwWVuwxDSYkpEAKoKAzgVsqKMJWipzDt28KRFG7y4aLg3QQ1LDFtszhSzbFq",
  "key5": "2qoWAvvrNUfY8HUurwSJqLACMpyCD5Zcj9HUccyedabaugtsHbk33r6Bu8VK9EQAPrhBDWo4xKWb18N4gDTh5VUa",
  "key6": "4smQWZKUmWZGje1MTuMaKvhiF9iN4DYBJLGqa22iHX1xk3vhBgTjU7s2NiQnAeG25MQBKVLfa8hh2BSntKvd4v4s",
  "key7": "pKEBkAE42XtDrLE3SLNg6amUadzhQdiQNJ1Cy3FxAvSq5j147Q3XTybP51SH7baNexWE5uaL3JNy1ohy75USULD",
  "key8": "37Sx5cowxfijhC2zu5QkRKTQWR6LFUvzYCCN3rTPPXJW38bgoQeghkg8sna9UFCDmBrBWdefy88N79dQnYUyjnYk",
  "key9": "3rVimqbFtZQfEXq3uViDmpp7YeEdJnewgnPex4YJrDzAVthiye3Lzebt9jjbNtfa3ipiVwPXMk6yyV3tch3GCwd",
  "key10": "3f9BDwuznQhd9zJmLMgzJhH2QKAji2kZia44EiQspaKASwBTbtkw3UmAYxAe7HG3KXKb3cRRnGicxienCnEgoCGc",
  "key11": "5BFQ3oxjBqbHGteDu1mYGkJmoDhZtofV1Rg54wUfgmVkA9Fq6i5AxGofPkyUnwdby31eFGGMt3XLEs29sqg85AAa",
  "key12": "4rMKX14Tmi9CGskG1MaeV4bcqhzudcoXwMKyj8Bcihmyn1yUDtGZB3mCt1HweimF5JvHAYsnCMkxChprMq8XXWTy",
  "key13": "4jmYu7D7vMWgsJVxx6N89pMBGigbDi6oZUfhiU7AdMrN7wPYnnCeQdxZL4rwKZDcMwsU817mjdjxsnicgZofh93R",
  "key14": "3QGbWFnRy3SUBaC2qYG5PAonanS82yy9mTVytwoPXom9Na83Xf5jb7My3h6Rwg6VasSZJddiKMvf8ej2BJSWR1Qs",
  "key15": "2BoWFSHjvjSWqnSxdtH5cHZQZesVybh9nEAQdNB56Jg4nsH9mLUCkBeDNNQ7qm6RVrBqiKzeb2ArZ8gHMPT9VHmw",
  "key16": "4cZNaesTPfjvtE7xyRvXJ217c3i5j3aA9rEhMKoQBXBpC5UzkDFWeSaXxsYbwoBtghd6MiBrCpAnqmDGRAba3BVv",
  "key17": "3Cxkbts418qvxf4ahYRXcBKWA4YqKtSs7ifoJ4cYddimQwd1onFKCBDipWNTkG7uAP69HbqAQKoW7mtG3pUNBBAn",
  "key18": "3ct7L9nWeEqr7kfuPJcqVb1WXMimVFRPEfLEmoWTAWw55pRSttB5SdrQcyCFvJqtq9Wq3ZvrWMsWbeCNoFC24VJj",
  "key19": "R9sGEo4kngk9CSyit156s7HTuFgGevYeLLQbxifRPni31WNtfvKtAZAtN4sQ6qGguYZySrXbxoRDLWJMvCD8ZnW",
  "key20": "54KQCmKkLSU1o8goVuxw2aGThdB8H12RbdEVpQJU1GkuqnRw66sjLsxHgfY5zdkY5t9ABTi8Zx7p3GcSNqPzN2A6",
  "key21": "5VGAWXceXgxCFqBaVPZdKq1CvuFKof5yBnXoznTNKp5Z62UEdG71mBMpjWNbUYKXNRmHFKVNMyYu9nVUDnyApdzH",
  "key22": "TkgCajBve2iabU435nnDRAue75rdi1NZXNtXHngadoZTwEzk1b1R4s7oYWF9EhgonadfpXmWkshTkuYb7u5gMBt",
  "key23": "4qRyN4rREb3DB9kyx22KBrSGuezRdjiCPTtZU2q9Sbc5Mz1TY76ESP12ZEYN2MZrgs5FRDwL8GxQdjEXTUSVLM9F",
  "key24": "4z2Xw65eiuh2RtXmrqhTw9xWD1VVawert2t6DrJpuAh2xm8D582vKQyETzMv6GYPewqVTJQrHGUrwNAkykT4TdvL",
  "key25": "3Faw8SZKDnvCmFBaPpNaprypFs85H6zBktm13yJytKzhFNwy3iy3PAdPadfLKHbcrZctUp9hzQFxSeQJbCiWJ3j5",
  "key26": "2kqC3e1WrihKcJmHMb2VZvcSANUSSzEUfiaRTze1VLLYAcY8d353uJaCA2r9pTvkochqpz5HLTo36eCRRpBFaDg4",
  "key27": "4UXod1VMSavAVbRxNxfyCsLBgaPH5zB7jzYdpAp24S3BroRyUL1ojBGUXcZrvwf71JRB88KE7Xskoy6Y4cCwZKHw",
  "key28": "5uRWdAP2HkLfrmXckVGCksmWhpRqzeRN6K7maDroDsuzncVHhF6E1mJLPE6888JgYcGbJDLqf3MQVrFQEhPiBctz",
  "key29": "5ZfrimogF3xBJ2yf1nehRXRrP57XtLhZ7BochBxh2pd4ZbvZzEAZuoNHefbBVE8q1bNaspp7gZFjfHbsRanDhUBi",
  "key30": "5H9uVdcM9nRF6UQq4pvHZiw37FaD1AET5J1s6AKgEAJDHQg6dfeD1i1M8BpvmDuTADWh5pbdD7M1sK8GMACKx9Ay",
  "key31": "8UEmVxbukyfs5PdazqkEifUiK2uf5eJJFm9GPnxZFS2NtYP4XPj1QQoGzSYziX6y4SUNVp8S8BrwvGnU381jvx1",
  "key32": "2u5u794PJDQCvi6mApneQDCnBjccR7VPtfDLKmhs2NJor7KmZavr3XmWAsMNQM4ZfV3ZWBUhunhs4hhcpNvegEXV",
  "key33": "4LXxrUjaGzd6m4zSxthZtoeCDZ8JzVEdoKedUvmMy7czfF25SATCEKiw7d8ZPRpgi2BmeeAScT7dXxPEEMjPQFEw",
  "key34": "33Ui8mXswzQWD2B3C33oz3kQvhAY9dTo6qP7fGYsFvSz5aFZrz5jvSRxt6judYzDpAS5PCxkwPvLN5i9TP6p1Kin"
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
