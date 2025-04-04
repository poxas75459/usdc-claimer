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
    "2MGfhRaThyhUZ3yj3E9ZRzYHqsR2bM2fdkSu6XsyRAZe5dbuFduLHSSjTiij4tipepro5vERwiqswtBZUaf8PcLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTtGyq8yD6SL3K6pdC7QMtyHWkWrc1L12im5Njoj9ku9KuPd45XjxQdrTTBrtWyrZgRtaptm8voeFZcYQJ3fPk",
  "key1": "575PfaezieGxHLTTe2EP8TXmLDV3HiDbBx2XAdSN13zPN7LLXXxde3jv1ECRHCGZPbMQgDmcpbg8mj5Ap9hKSuHf",
  "key2": "Kf6kfApwPFWmNxwu4Z5aG8YXTg4yRP3Jq6cvWDyZAULXKm3uzvcX33ofpsgmbpRcx6rLj7awpZVRs1ASXpFYMqK",
  "key3": "KH4YZFaMRZcjuzs7Jfn9WwsXYK46ChgzoXkKG7KuHwNX59bZC6PKS4MaKQcT9LuQ11Qme9CLKsz5ZnmK5kn5zMs",
  "key4": "5Yy7ziwJWKdJfGEyksxB1dfM7NGY622uKwWgJSn1Agye8FQrrPjqHSYnxbXEDZYSRTQTGGGF6sUZteGke5dH4nKz",
  "key5": "wHqubBco7D2PpcyiEDmjvQzyc71DVetj3PCbsoQWT4UaYTmX1U6guXFMB47LxFceXBQjexCn6UF6ttPr5wS3RgB",
  "key6": "hto8RM7wS8uvFcFFSRjwAUjfU7hCSVAm7YzhUBrMRgrzYfdttk6Bznh7oWhJGY1MFgFSb1b3oXmYGwhHSLxSVpx",
  "key7": "65NoqQinrSjVsSzzfsG6yXKgsZLZ5UoC83nEgnCQSKdZZWnLzzaRUdvrxuCDkaiY8hCftuarDphDCUrcWyDXkd6v",
  "key8": "3DvvWzx31Bbw3Lk8fhtnWvuRXayJd2kFyCTdeGSLs1CbCM3oij2YVVfEietvgw8tq8roJEAodkqumufArR8euHzL",
  "key9": "XhUowYqnkBt57ZJ2z4nFdCXi2EyenKTHQT1nZacW3rNp4DA7YW3WjZpeqMBbwmAZ5xxJqmYX1YknwQXVPUgcGWK",
  "key10": "3q1EufG4Gy84nNTLfoC5gnwjxHozvqFVXqzepdGosNqdsuL9d9Y2xibTEaEbf1Gpsox1wyi4CJ4Q9beqCnyuNa3i",
  "key11": "3q2FAA39rUS2xaM1XyA4tQkZVGhfCcVUyJ6acDh7Ax3bSQQC1UezgLpCMHtKPEWcrRTo4VogBBjjEWBWJypFSY1t",
  "key12": "4ATuQ18r2vEhWiQEXVx7394CKdAxZnqqdd7b9kWBX2AAE1caRCQ2Tg8irSjAuLpWA6CL6RM6ej7FcMA6z8XW7qyy",
  "key13": "aM7VBxNVfZQkcYXTefXkSts16rVo1UCT4rPJ5wFPScAiH9wdP43wUfvhufrpAGK4d8BZqQmm9oUTYRqcetYL2eN",
  "key14": "391LbcSopcmRHf9znTpZTBCywFdYF7Ewy6T8wcWwzMusTrZVV9y1sQhJZnYysDyEGU3pnxBWduc5wVHMCvyws2bP",
  "key15": "5YkhoaVWVmSgN5oYRE8iU9eQmKENq7FGujMdjJekLnPxTAKCktUWkma5VAMpiQTaQqUhUS3UKHDU9tiBx5q5LmJc",
  "key16": "3Ymu7nGKheHN2VhE5BEsr2pBvTmbBwoaBPUgVBHyV6MaqFan1g3EtFeKRfY2Fiy3S4XptxiUqWK4LJsyv8urCRqq",
  "key17": "m7jUcTpx8fhzJCxMRCswFi5TeZJHSBKPox2qKRmkaSEzEHjG1S22tPDL3LSbGcDEStSNw5NDrmhSia161i6jWog",
  "key18": "2LigYM6Vh6qCFppxQHGSpaPRjhpfYW6wobSvavvhagn6kPmwT5FZzeGnkoK3QY2tqmPj69tHP3atmRC6CgH5DGEt",
  "key19": "4X6dWF8b4SZ5TFYTUtcsNCfajPpjR3kRDaihqQ93NZyWkEUuQdKQZLNcCPnJrvUfhPEudBQ3MELfnvaHDFaBDDLB",
  "key20": "42YgLBeEsheE583rKn2KEWxcT3sTp748c9GCUgzVKJHhc3BpDhDLn9DJoaqgXgNnMukNyGBgQo3ossWQ1q8gMeiF",
  "key21": "3R59eK1q9ScaseMczdCEuuwxsBGfSXwn8pPHa4wbu24LaZoAHxsbMLZyAdFz9fAjFi5DeF1Lag3UBH7rSuvdE57",
  "key22": "3kYAf91VuYNs8roJpMEdHPG65GustLvLn4ioPx6dZKnuffvYnnEF8ojkacKumBoqBBwvZPBsWD3aVqsHyZteGmZB",
  "key23": "5VtXDa3LZE9NfnvYHgaXRqRuHkpu2zFtUdnanewGUcpw52CS2WLGXFhzSkAtRogPb57CURLPLk8bTPaPHk9GYaW7",
  "key24": "sdYqosQyyN6ZSsJMF2TPEQs6ZZA7XeyyZTfFksKSgwtsHBECbRLGMDwCYiJRZ696mcSaQ1prnu4X4W41kiyBbdS",
  "key25": "2JeNekcS7sLeh9zBMgmfyUeFRpNs3P6yKNpqNnpzWEVboq8MkTqQ1Pc56CwVJrbtT8yHNQUJ3SYy6c7qrkZwV9C4",
  "key26": "3isjvFQVbyMjzDqq9mM3L62CDeyy9yDZxQYi9SfcoZVPvx7NACpFswjGEzJJeNii5Fnzrj9cF2juViCHCGbAAbDP",
  "key27": "FKH9XhR2wj8uFvXRshhiHEHrLXkp5XhQ4Z1ggPqkSMBna5xw5T3ayPbToJPyZVxtkXqSb8cX3HnLrPVG9c9qtPH",
  "key28": "3eKmcf42Z74kTmVVFP85LvrMocM9vkjjJeT1ioXqAc7BJSLyo1FqTTZXRurGwk7FjfKTSTZaf4kDCJ7MKqrkLKyy",
  "key29": "3JBpAVDeBdiM7Xik9mKwfH2qqeQxu1TDccNMz9bvhrdupSrYo913v9qbet34cqvfcSHRrAcH2ht85noP1sdUx3JM",
  "key30": "2tZDoB3wMQ6SyH6kxf42dLyiTmzx1ZTYrb9D7P6dvVq5b1RTnE2fBXahBFNVMGZh1zmUS7LF4f4EM3FEsPQjeafK",
  "key31": "2b1qCoXk4xH1qHWNeKaPHz5hwM2Zcr6MkKHvc84kiJYmQPgW7Jyi2W1rtZW9hw4qdupdePyvXCW96qePcPexiifJ",
  "key32": "27tgzUrhKMwsCKMvwQzrCbdphVAFPtNTAK6F2dr3apdfKGJ54WEz6KtsiNLmwF3UmrbGNHDSENZWMRhF9Xdfuiyk",
  "key33": "2DEpe8XDwr9ikkjDBJDHqi524i8gBzKSBfmbQdYnr63pTUb3R6vTxVEwKtUg33jucGQk3wrDkeo88auKJFERJAhT",
  "key34": "25PvDpvpbxjCwthyRkQUDgUj7NjJaowK143saftvTe5UNVuB1E7uDTnfyfMsUX5pkZfwG78hqtNX9YV3ykqkfhMY",
  "key35": "3Xzv924oWdNCoBikNteio9U1SRnR2CRFUk8GeSrpMWdCi8FTwM3tLh41cAmiU8RNV3H87qegjhG1EZjrAKnaRPCb"
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
