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
    "3YRkuHw5vnp3cENtgJNFa1hptXMtEctQ2BmidcDyBPnNxetD6GyoeAXvGPbbh5HCwXQnxgzVsTZQA16r18TXfc2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBT7tsmmejGDtpYtcByz7sAo1YZMSYHQeaXLmf7SnBRgGuF22jVuDZRay9MAKeAqTZSXoUrxUeJqCAywwxVseJm",
  "key1": "2nPbEKmTfWV8xwBSC6NPkLYL9XfZYySsyyCvEfYjHhaFRMR3bPiRXZVTovkJubHLX4yGf6b3QnM2LLi7LGwT2y2m",
  "key2": "2kTkFfTTwfC7ikP8Z6rWh65u5i4J1GPQ6DmwAzMLPzXPShRYQDPXb1Cqt6wWDPH9iE856Qn28K3BcbXbyyanuzhT",
  "key3": "24bqo2Qt89DuzSb2zDgTvwSne2yeGTjeHnxteTbyWocvBtUzyRWSuQMiHGigNK4zpQCzXGCkg4i2uxcpgU5oaHkp",
  "key4": "36WLoPuvc5cmxVzijjYa1SaNYWpZHmmznVtnGB5vKTBb1rY25NADjaACn5Xeq8Xark32LaBGp55GmcHTm2FUL61u",
  "key5": "5xbpe4w1ECNfNJof1k4oizPYr9CaW59Dnk72JQhadbjUhERywESvDjrYZCPeHQku68fGcAF3k1eiQX9HDFDt1X4p",
  "key6": "3VTU9njeBgfFfd4HBXCFuHJLN3ELmcjrkns2JKzR7Bjc7y1ueWTKbdR7ij6NyoCGhqoiRSzDUPjyG9Cjbkn4EVvz",
  "key7": "5on8ahriSvgpPML95i1KWfYQxrSRNADe68iApD2FfBfcQ5HvAVb9gK9zi3pR4Bgxwd3d9VceaGTzRvVYQfeYzVaB",
  "key8": "5dXbEJd8W62BxDN7dHEocadYS6XfyfCwCJFMTjPowz6vAxsV8ZN4TcZvYow1CfiCRQRmajtGXiAJqVWJNfAwNcJd",
  "key9": "2UQLRAvGXEEWkVHo9XZTgb7u3jepcW3JGfR658frii789EPwHxhEb5bQU7Uk9kN9SKojdiQ1zVo4wGU21hHmpio8",
  "key10": "27PkEQPjSGMy1xRnN15sWMsLsvxfq8gh7CdaxcxYtWUgnRyKrbXre14DcV8QrcZ2wHv3hSkHUxhDCA28Kd7Gugen",
  "key11": "TKEoAsDhYiw34TKDL8QVJcLTo6DxPXuGM2WBKqgJL5aPngd7q2gxN1gSsddySmBZtHJ7tLPbbQGRjSXDFhqEQwj",
  "key12": "4W8mQ766HBTAWDH82GZJC6VnKqWgy5fQXKQnTnT2Lu7KrGGpYvj9pRimhvwLxGNcGnVgyar3BVpjSgS7nHzxgTTC",
  "key13": "23rBp5AmndbdzAa86kbaRd73mqQxTpupbhPGxpknneonQ69e8CgANZyiij1rH5hpWbtQ2ZhUBxajhwMq9Pa9dVC1",
  "key14": "3KKXRotdBWHcc7h57XNKnqMyMzztteeRSQnB1ftkUStFvotfnDohgWKj73hoyPz7TrqmruqjpiCc3zANGfn6sFwH",
  "key15": "5Ni9jJHg4chS8CuVw3sgNtePjiNvz8r3rHyCto9pfhzh8jYNPZYQ7WEJY4D4KGVZwxXiC8GeUys4FMDLJLTiE7wS",
  "key16": "4Zchm2o4yFQX4wgNcLBFQsRx6MjYo4gpCnsZcrqqwvJynVcQfwXCa85dhMZ6wwM7NPwXxqhwfPYqke3bxPxJWEH8",
  "key17": "2Zs2Dy64wUXNqiAhDNZ3otqo4HD8Z2xKLrdXyQi19p7cdgW9WECT72eXSV7XATYCHRJbQhC8BPbVUKeRcwVUuV85",
  "key18": "5mCoG1tSPxE3PeLUEprGarbfUoAZXVpgU7spiJDS2wkcjQUBickkQ4xgKd1h7dmW2QqokLFm6Fyz5fB4WhChvszY",
  "key19": "5M6C4HVTxGeRrgYZjDKisdvcvXcpfjt645qdp3akEz8okf5X4LTPx8SCn4Kq1CqV9Fs9Uydt7JG5MHoZGuAygtKQ",
  "key20": "29H14bhce7ZTyFT85BEssRc7VwUc7We2nQ2hfypTyv4kbcd7XPb7h1Nm8mS3T2iibC29ws7vSYrUQLRJrjcrRMWj",
  "key21": "2xJMiY5BbGXUTv34pMDPoNVWp772xawtjEqJxDg8WdCW791xkX54jdQbpHYtC5VgfdAqFAE1aDN3gpGCSfQcLmEr",
  "key22": "313sDrrggRW3GEj9bRkbVRvazF7LH4STEtnwXTtJkZidtsnc5FwtL7BEKAwRNyNCvoGzdHYeoNNqoV45QYTC1Zk8",
  "key23": "3ZreezL2AdA7D9hEjjAhVcnhStUxLyuf4HEUupWuXfxu18cY6TQvozwZVpgUHEw6fgPi25hdkMDfDBuV8wtWG6yn",
  "key24": "34WHqd7hZFZRQdUcJQWVhiqt3aE72YMJAFG1rBjEmkjk8ByD5A8LbtwYwnD9WvDcKnjSEQnb6sVQgXuseLvFT9iy",
  "key25": "5UfmCvu2u2M31WNFQD1itmm958ooPQb9WHn2mHv3hjvtcAVArJE8p1TzDiK2afG4Mebu8VP81EwS1EZBNvtu3bTq",
  "key26": "616yA1KC3Cdetvrn1gGRqyr4jfwwq7AGNMmMER4RnsNmhZ9YBvipmDbLL5Qnj9tEkq1zSLJs1tjsXzfC5BVJCqvN",
  "key27": "4KY7tC5uo19DGK6h4kzGbiWkWqgwtQtVZgrpvWK3ccpWxK5SZRymFZ8CJN3mJfB8tQGma2onbBXrToNi4fNaPgNt",
  "key28": "5qQ2CYBZwybNDpnNRTRg9LQK63nTnUBP49TwAsKDFSTovB9DunDgapqK1D3QAGvSQAhEJNQhg3ytEarR1EcUzxnR",
  "key29": "2yiGnwJEPoc3ZqbKDeYedxe7o8Ack49ZkDY3deXvmFCx1579DGunfB2Q5EAMEGf23d75f6vSVmBX5PJZDhc6BpCk",
  "key30": "h21eToBdGntHwNfbL8oGGZsoyJafs7j88HQtUWV1UGKB3YzkUfzqN1FfbNJp1HoocmeBEWjD6nJeCqDZzt9y1Kb",
  "key31": "6u6AC49Rc9o3jdJan8rezHNgDCwpPXh8Lt6oVXkW5UQgXD8DbrFjz5GLnMaibt7GaKfomvHZMNsWwikNqzT3M7h",
  "key32": "4nrCEuPBKhvP7jUP9y8XdnDhMMW1XF5Rg1EPafvX6tuVHAVEWSx26oaVwLrn5HAdrvFsyYE2r4YURb6t91Ecf9ns",
  "key33": "mWuJJnxSeAVUpEmLDvTMxQ4kJuGzSoJHZcqA9uCCFW8CTf3S2DegLjQfZtWvLrdQRbeemFeRrCD4DvNCVFzQ4R9",
  "key34": "36q55rcbbQAZDJ4ok94EEfzKgrRssryFSY2jxmjavmj3LUF6G8M8GGd71XoAzzLhHNiewYdQS9dk7r62aGMekksf",
  "key35": "3n41AsGadY1caVdmBJ2A35ob5jYftFreJX6FZf7JoKL6KiFjT6S1xLRdFoktX5bZFY689BiV2QvTAy5WwMCLoCfX",
  "key36": "ygv2ttZsxFN7d9mjkFgqEAsqADAXq5vvrU9ZH5BU9dZGPDLzvKKRzshg8a1S7DqZd6bxGQvR5cTVG9e6ptBNzsc",
  "key37": "2rRNEB4srT8v2DLThXJwtMp1BnX5eXpjZQjeVFBRHVX7hCnBjpsibhCYCgtXXazpRZoc7RA1fqFSezuQo2eDjFLj",
  "key38": "2BZmk9dAJ8chPeRkR71LrBKfh7RQHzNVs4UeqJhMHGc9K27kBBAQQ4MVm1Ka9v8v6B7CxMKihxbpwJ4CkgdsdqzX",
  "key39": "5LYAnGFDQ8k8tqTcc6s7JSxz7LgS8Caq79wh4WVeg4tmhWo1TMFnf1SqjpgWaNWjkLYn14y71qv2vx4CTTxUaR1b",
  "key40": "3Wx5PrDz6w9zHDSB1rHEv2x3VcZr4UVzGjK6GY5BFRhC6R8XCuCNyVLF67A63SiTCyweGdDbQEGGKsjsbKEewgpV",
  "key41": "4eQrkGL1gWAsi1orrr962B2XuASZtGvHVENB2GVjG5P26UpEBJGntC8RsRe78ozN2w7dcXR7XzfCb62c4rUgNUKk",
  "key42": "2vr95HCpVSDHK5pJe8dENUCeo1n9DKxSGqnA6GegccmgXjMJacEcZhkEaLBHycxn45CGSo4SC9nf78eamCs354Jc",
  "key43": "5RyghSPGkgoHg7gRUCLSMxELfWA8V8jGdtaxUsScadrLr1hEKJkCXPGMzb97u5GjY3mfFuPrRV1B9dz9iUsn5F1e",
  "key44": "3BbCwvcw4qKCBYu2crzEV1SuHLHp49FM9aUYSaGvXHcHxHku9tyhXWY4SwBoFo7akX9rw1TnuZm8Qvv8suoxt987",
  "key45": "2ZhEFt9b5hK8n8kKCCR3GTEUiquUoQL9qWCuoFmheSDPpS5e9RmRDJuCiSxScc7jJfKv2BRYEtHLVxWA3ZLMt76F"
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
