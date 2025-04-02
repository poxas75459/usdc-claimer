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
    "4yEs1WruvrRHrg6C554pud9hctkE6ygMJVT8jcpiVbwbcAR1gEjA3ixhTuZ9NVM8pHLGaZSDvgZfg8R9WEhhZ1oF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FZz3yaYazC1tCU2EVvmFvwtkhSyjqfL86iU4g54oHCCDd2ks6yqRzUGfd6u5zS5PN1DD9w4rAraEsy4HvM2B7x",
  "key1": "3h2QcwKKX3ofRFhsrAh28wqcQVeivUjjafmLPUagRsLhr4e7pGso8wyShGtN4C1wpvFs3Y8JFpfoAgrSx1JXSVnn",
  "key2": "PrRFAi2kZvV7mqXvtE3g4DEzdRFR1HJBta6xFukW6URQ5zqKZDtF8wN4cJk4JCGt47Ppcq1PExFhtURCLP2r153",
  "key3": "3Rg2FfZrSgQF8tdNiVGgGL9zRUDSX8kkQ6KwuqucaCwwucxKHmUvJi4JoBnqHbTnvzzcUrm5ornCjCD58qrqs9Lp",
  "key4": "3ukHcSZCN7jMcQpyM87LoePaXq3VQ6sK2eMjrfV9if78LrJY5PnjxesEcRACLUKhRNZ9NKbxQv2vvNAzi1rU1gK8",
  "key5": "44X9rkCeEW2y3CVq8vJbj3pZcTWQAv1GGWMcCz6vaghuREajk8fNiv6JWnsX4khV48xETBdtj4rJehM9iGoMQP7G",
  "key6": "3NQyNr2r3aRWQhxyy7DDejsWr1WyREK6Utpn5wYFsp1WXUYYPE32CUvS45GJvPS2hbQHj1P9MVtkDENsi7PpmtF5",
  "key7": "Es7frBiwdYHJqV1zXP3vYZPBib7J1Ad8i94xXFsHQvKRjZjsuGcktdTwXF64W5yY3cFYVPF96fhyYwQG4o8jPKs",
  "key8": "2w2YJFfv34i3XQaJ2SyZL6CDWirHfiKHjvqVt4933ZRog1CoqaReFpprtz14JpQWMtnNHd28Gy5fVcPGrSituJe6",
  "key9": "2MP27YgRASFaVF6HW3rQW2EJ78wt9EmYUKMm1CppF6EtjXhTXieiXuxu8PZuJ5dUAib89R5eEkR4tXmH7zGmcz1q",
  "key10": "3E7fjGwuoAz4ajzRLE7udBh4GStTLZf6s4Q7YiNUNgnTZY7tdqjuN8eQ1eFybaqJe3jxB3CXBF4YVSF5t1pf9U6B",
  "key11": "EeKMX8xAM4fc5A6Ht7yPGbnSVikPTbQB1t2FksAvHa8AparsQFJ7FH2yL4msxLczzfPR1yXvj3pWsuX1jKjtWnQ",
  "key12": "4L196WQ9N8Ddk8SmimkNZ4KQkHugrG9nDMUVoZw1M9sTuQ9zh3TKii4wJNBGLZb8SLnQ9G1FRxh2o8XPMBtwyMCS",
  "key13": "56QTHJuXEv7krpTzd9eLyumUCwZyZ3tMz54Donv3hmXmM2m31y2ZVxdphDMrkxozfHMGnpEkYVz9XxMj4TL2fJG3",
  "key14": "27gznYia8SZ4R5s5cFifkHhT1rRRFgGojtkpj4EJPeVicP8HLymLPdfcpdjYgp1Gw5GEaa2UXAVzdueDy11Rrr9Q",
  "key15": "tBZbWukoezKzvJU8XduLzkLt1n6HSF1kQnZQHhcCYEH2BKTYyjYwwztZeCNzviG2r6841o4KQD54bXZyWyXL9my",
  "key16": "wxDJJZw6mcVFM8CSrxZYGdbXjkvzUgUj1sUu3PwgRXDVgnXfGHvbcbKHCYeDKrx7YW4rygQTxnmZpHiv2SusJHQ",
  "key17": "5jKNQmiEJHpnNgT7Tbsb3vC6BWuZFqu1sqc9jECztys3PcUTp96oAg3z8Eg1Ais3WEtmhnLbwSeqzxLHDZsJrRMc",
  "key18": "22XFH8cEP5LdngSep5sTfJcGMJMx55S2JthN7Tk4ChDjUJjCaboxHFSBieCe1ZPKatjK3A5VXZKUEmC1f4jcfaDR",
  "key19": "5LwK3Z5wcLDQKWxnFMgCWL7b3AYj4dqbTTMHpKRvcDdjGD5hmbnCb4EFyXASqo2WiuCtPdEV7QhCa7fzWkn9Xzef",
  "key20": "5UaF5aSGtsmBGyP2Rc44U8MLoHbEt5fh3piuNq2t7wNPFHEXhozwtmjRECmJP3tYcxyVLKQJe7PAQTyZwFrQwNgN",
  "key21": "4CbwTSQHEwr63APRqBjRdZ7Y1qBez1ppCn8pCgZVbnnSA3HkPFRxYqLT49CGvgZ2knxuaTF77HSriMkv7Hzuz2xG",
  "key22": "5jd3WNp6oEjppqpZY3vK2VcBJxQkCk6ZFqmnZXH6rto98UQrXu8mc2PtHXAaoyQexsY1REY8cxw2kAq69SJ91W5B",
  "key23": "4biHKeFekm8ExGx4e6obgTLaLvJgogciAorLu1pwg8zbLSPYk5WhvK5FqJJkTyg1avnSsPmAuvLb9XCusJaZ6Qre",
  "key24": "4u6qacX41FWBiqwgVRkDJHGWyiqMD7E59cezJKeBCNZV3Hikv9yuFyqr5PX1uBtRF7558nN2P66e34qFuhqAG3q9",
  "key25": "3PTJGSqGmZ7iDs8YxCvcqKfPBUwJJ7jg5VQ5mhScdV4JQ3TjZCmUBsxeGx8XJhRneReCP35gnat6rLfsTBeBnTsf",
  "key26": "4AiX8FA7ZvgpfZiiMEUcXzJM8UXzTbnNjKcnpw5BBZsZDeV8k9Frid2g1k7R2UgYCVio2ZficBbVkhPHnnNz7Xwy",
  "key27": "5JSzhpLixvBqDfA5noqN1e48pMyr1eGbW3v7uhAErFaBHiMs1UXEgEr3wwDnSJ35wszbdd5fbkMgc865hTxvkSGB",
  "key28": "4Nf1oSYLp7orttkDgzEDCLwE6wG7GvoX5ZTDRfnNdyokHYSoJ26yv1YkLGN5cM1m88kfmhj38xfgevZ8VJ8WZqDA",
  "key29": "4BN6Lvx8KLz1Ji5dQF2r5ux1G1SPFP7n5vfLdTfiXsabvrtw3a2n85KzNXoUrZoRt5BQtqDoaQHYYxN1mjAv8hUh",
  "key30": "zDca7offYSULq84zQXF24Dnn6zRpYNUhrD6PKa6jMu9NncR6Q6S7GsxYoJCL5BN8YYtXJHhQLWEHs8QpeTCz22b",
  "key31": "2L5GdRdfUk6wNag7RdNdL6exJ2DvaJvjvvoaoaGGgkgBdRpcuXPy7TBSvDfxbQpZ96zpufhau1gYPNVpGy8k97t8",
  "key32": "5M5MWscLD2xnVoudere71YHRJtXuJGQC128JjWkUGxwGFrNPqtuiwxxWzN3YvF3LK76cJ2GomYsadnEP3AXsHEBu",
  "key33": "5kstGVzQHm2fsz1vcNgKT3Jctb6jaJVmr1H8k5YMVg9gX2G8Ze4a8qWMhKWVwLbpz5U3Ju512v9rW4UC1g3nxHBy",
  "key34": "4poPgVDvfsiYLvAHaP3sFYCQDE824oQxGZES2KF58GfdS5L1v8Zfjuv6YVuPT6EUDjE3gAg2EN4rLmtNnEc27sQ",
  "key35": "3HQvnk6bzq5t8eNj1VHxVejfo3wj4hbGHobcMY9vzn2ei6JLLVeM12ucDnMmpr3cm2xHjS3pJku6zKC4TsfLJi7e",
  "key36": "5C4Pk8uNMnH9UPsMgMHvppLcPHUh8s3rZn6J2wc8zhQcpSQkhK1mDF6aRxEUEDYBsuEFuEYdKEhCmvfB9HmgUkQ4",
  "key37": "2RxEhxhZiJtcZwmddCRx2dTP5koSzvDvSQRQVb3mN5xU7aTA69Hu7QsWoyFEujwq21KfmDpyjBCXhYbTizu5RF6",
  "key38": "38XSunwapDHvo6asLBwUFoqXgfYAqmQBq6QTVpbfyKNvxQ8q7hUaixSzAnQJauv1yAqrMfDArNnfyLkcJ3o9ckoK",
  "key39": "22zCJjzFShhf3QvL5iLb6dNeV5QtnRzkuucNwSSTbc2Jp8P3uYeqP8ZePdSQAAEqUwJrrMaPBGRumHwoduU97o2h",
  "key40": "3bU9ARBwsyynZjk62GRz8N5LbCqHirimco8mTjwvzqupegAAwJePKdvvA8WsEuCnUiaoJcFrPrZE7CKzvWKNj8pq",
  "key41": "2yitAhCx384ud6LZ9tW7cmcqevS9jpLRSGLvktwB8sJioP46Wbia657QfpMhugB62aAhitSuuyMCiW2Q5PqoAqig",
  "key42": "3rDJW8gxdDZiqqhj3XEQH6DFV9qcknGudrokHoYC9zC53GgaFTKgrKqhVdZtmnyfTrCXTq5raBJfMHdU8CBWDekn",
  "key43": "3ErKBXSxZMuVehc4MPK4JJCVQwuHFLcqj5nwPXDev3Xrdz9WMcQL3HGWBCFJDsKoL5Ga5VGQUUuTMf5Ks9yXwRr7"
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
