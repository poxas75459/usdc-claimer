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
    "2VcRBRU11aGuyF9fDHrtDb5277hSGNrtY1z6PHmXv4mHPc8b5eG5YHUwcsh7P1vTbhNukXrx76PMdUBefCZeQktQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wcJXFGh3hAVo3p2r9TNLr7PB3JexQ8Bixq4xnGc9v43XtKKbJexb6KXLV3fkKpv7uTrD1EiDevYd2KpyoftU2LJ",
  "key1": "5sdokU4oq33WXBuPyt4utsd22LsZ5ZYKGquxWZDz223mQZvNU8qRkmf6zt1zmJDeVCc9XWqExeLd6F4ZQmHjk1NL",
  "key2": "5cwUfjsoGEws2oYuZZmau56t9UaF22g1w4WPR15gLk9tLngvZy3dyTEMw8JgEJyAGTYmsR9nZiFSkekuTU9oQBzU",
  "key3": "2CHAAZKXuywe2z8ZiavYz6ndReQaMUYvDWfQksh4BWowgaHHBZbCwCWbwkoSKxSTb2CqfHCXNqAZynDsZTzbBqUz",
  "key4": "2iK65sCUFLrRekYKXeK9X3ztiENjcvTx7mVdMe16A4vJK125LVzxGZXA5F2zcuTQq9beZRT3aWHDuxwb8K9A5xry",
  "key5": "2eadhHViZY1fdU8n1yKCH5WEw6wnWTuiySQ87PpygeutrmW2PwspDevpXVVru79gzuTi2FdQWb9zdZBUBSTjaEkJ",
  "key6": "3Tf24qPv5TgJq8tKaDFpiLhbx5JTqtqHLGJn6pCJqyjuR2gYGxMSiAVjFyfrCH6Y86tzcgS9oWLTNoKJXmCMLnWU",
  "key7": "5dxgwjXorKSyMDG4wG5Kk5yn2ek5EqhYVYYEqyhzojqNEbCdfu3mUCSM9mXFFQxjETbYhACWQR9DksiS2YAJqobM",
  "key8": "5QPTE4Kfqmmwqs2z1wyAdJnBFY2jCbwAAqFn2w9gaHVMLnxF57mwava62gsm4Q4ZGJAMmRWYJDTguE9XMgBRZ26L",
  "key9": "3LNyY7AzvbA3Z4z61yWs5EmQUDF6gN8fWqWAW8hqo1gBdQEJ8y4shDug8Uyzzu2PZgEQ9e14LRFdYUD6QVkVDWct",
  "key10": "23AmoXgKywU3HmSsnUCeB1bB1PMBp8zQpMZcmyHscAYWhUgEGjKqpqXLehf49c2H2PkCVg1k377SsApWyCJPXzY7",
  "key11": "GMNJfDo9PHuGVFVcoBgVdXG3jrYtZAJ1Cf9mmRWQfJc3vQbGR6DUAyCkvbkPhLA2zGxZEhH5kWMC7qS7qYTohxq",
  "key12": "2nV8g9SE3QG5bc26TQWY2w3cbZjvqUZZPpHM9b9zQWhGHYBKsRR1GdCXJDwqTuTaABSZw1h8CVumqjjDjzSwkkbe",
  "key13": "55gpSxn71NXVtAMDwJ2xTMFsGiRnG1PqswzBZ8DdXGr5PfC6FPydg8KL7BLjQzn8sfmttuKQ1adetdxnc3cyqUd8",
  "key14": "FqHboHqkibDRLjKymvQZGbuYR9BBiRnf65yk4dwQG2ync1C3QjJzbNx1Z6PtqCGhKJDiJhRyzAVPRF3s89REsdX",
  "key15": "v22xToVNJA67zusAycJdQdYxqY6GHeE5dxAZbATpumazgXF98TJfxvxhCXPCfz4Z7CFAaybpgZrRTyxKBavfm3q",
  "key16": "tM9AMy6mQ5knNwDvT7nB2XDgpFdBiLnkVydwZfc2Fvjfd2EEdahEQw6MfWa9BK3JNG1v3YJXLLm776RU9jp2uDu",
  "key17": "2cArHq4TejppwCYZGG5oDesoXhJF6M49vGaQXDHbJWy1nj5VzFdDkwcH6deU5XsDsKgEcWKxsZAqoT6pgDS6Qy7M",
  "key18": "2tYLvGVUfe8iQqiqHd54PGZgHzqnKjTLReqZWdAkYq7Erq3iGeatkEUceuNEL637dvo8V1SuFYbTzd9VSAwZv3AT",
  "key19": "3QDHTvP8Baqt2aj71sN7z3SDVcsQF5eNaXABXzocyeuFit9mK9duUb82rcCX7haJgsssL3Ybj9aHaRGrzKGiH6hY",
  "key20": "4GcL1FM2TgJ9cK2c5vRV9AwFZyVMss5G2Hbxfnry4sF4kubzBEHCrrj9yAiE2NicBM7Do2r8yie13me5qHiytSeP",
  "key21": "46QZcazAeqaFtA1tDp42A4VkDpRr43tN9jLjExTsc9xWWZwG1QzrC5Qc7J2As5RoxMFeaGqUMTnEqJ1CyS8d1iHs",
  "key22": "23iVf5A1Dk8agWDGH9oP9KLD3ExewhCrmqaS8YCu3DUaesvFAcx9UPLg3NwuJAhTzbmnP7HFyhe96xCV3mqG6JrP",
  "key23": "4bRfANW3Dn72W63JeD4NbLJ4UBxt7LDrDKMRfLfk9T5cbBc8wqXV5Xma62U7n3swMLYJt29fdUt5TcwNJ14ikLDE",
  "key24": "4CXAqG5cohdctGe5erzXhtC58MX2qADVazGE7dsDqmucex2QBWcWgn7yRsts9nyuU129Y29uqggpkrLZeGJm7r5x",
  "key25": "kzLC2p2janE6yixTKsTqM1moTBNwbz57hCQEtEFWQSxgN3gaAYjSJD1i5SutGey3Db3coRZ6sfHsxQfLHfN9jBt",
  "key26": "2FhL7TYzCuA18ChnyuZJVLkiuXahWkV4ucYprsqB8gwB6u27yMwwWBvN7oJXm5SRKQJFeDUztkaEnaEbpeJR4GR3",
  "key27": "51inpPmNqHYkuUjbJmi6LUstEuDL7fY35rdAJxCsYnHjKCSc8HaGLhSsjAA7KRb3WSMmoTZNzBjnMavfrCCqk65y",
  "key28": "2o687Caqx4fKXCZJtzHCNizhKGv4Ci9nB2Hos9WyCyisFxgfFed4GrSUGoQ9a3HAnxGu4sKMW97Kq2EHHDvjNQaV",
  "key29": "5LjZcMv5BxZdo8TVopXHNwSYZR42aMjo1vWxRJzuBDR1rqJ3ywCCPiBq2bqsMn2m1bBwJkQkLBaQm6Ny3uSVSfsT",
  "key30": "2wiPZb6p3eqZ9NAyHFjUf8XysE8QYMGA2E9iUR7yvWKVoWJCGaFnmipzdtuzHuuRkVLQvWRoY62qCFrGCHA4sKF9",
  "key31": "5S97ywvUneVydENPyN6Lfxjep6W79pEXJAfpjvA9J5yXxjWUdqS6JrYEz4haZqDfkPAQkmgnMWy6Qve8DvSvR5Ba",
  "key32": "AhmAyHaMHwQsWQGBsAJAzN7Vsb88hJdt4mq6n3Ei4WxXXB91YSn9iji1x4Wcrxrqhppv6PFL5fRq5ks6Rp8UXud",
  "key33": "3hdRns5THG31FAP461XpxNDKvgj1kaSLRhwDrqyaWKjSvHFSmssG9SQum4dspAgpref1BmD3YA2sKmVx5koXT2Zz",
  "key34": "V5U2oSw8zQvPPEjFUpyjnyh7oUC8pf2Mvr43pynbSiaAfTAkUcstcMP5HZxKWJWzATF3vmxzo5Lrrux1wWCUhW5",
  "key35": "4WQYjQ3rbVp3Fx6YVowJWjd666RAjyUtoUBnjS7Dc9v9QrBE8dUSkBip51UQSGFdviuszm7FVUhiA1d1gJxNdjXX",
  "key36": "5wFNf72yoV28j4DQqgqbn1GVKYVuzcJ2wTQCNZj2qcsjdD7BbT3bf9V5Rgs7iMhAinezZHM46Zv4xVjEjgbsbP9d",
  "key37": "46rU9s8hXtCTMTTiDDxPdKZx2PTjDqDKZBiUrGmVMUemKG3EahVRw1DioYEF2ae9fiyzjPmMb4eC5wki5FEootDF",
  "key38": "4FLhCrnzeB24F6ewbPcw78832AS6Mka8obD36umJVDFGShcnF7NDZzLREgH4QBA58DS3EMeeK1SQ7Ef6DGafvuuD",
  "key39": "4khzWbWJKvgdBL2H6ZQC3kdKupohJ2b1yCfaQFUgquAJPWod1AvyvUiWVJyQY3NHqJF9kRYhCo3hYagd2FuHfNDF",
  "key40": "4tH72dXtYJtqTfZJJV1muYeQExihsJHWn8rASaPjqqMf7C65aohwV2TLjgagh2jYTRYCH5qz4Nno3kvL5cgFoMXL",
  "key41": "2qkFDDWcLVBjEGMEDrGPCQ8qWy1zZPuZHMZSRtRr19ugPwZ2QdktxjfAnutbTAgK8wdevXopUGgZELV1iDWBCHBK",
  "key42": "9wZUxgqv2E2f7SmEgqEqH2HVHqDYmDPtgKoxuuVAiSDke7u4UUXJLmdvGzBrd4e8YUQeT5fsuipqD5D8Gucv8RJ"
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
