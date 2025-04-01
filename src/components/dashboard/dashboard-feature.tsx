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
    "5nibgoFEEapJnCcUvRsZtM4vzfWE2aMeK5caJBpBHiwFy6arNXH9ct4Gehz5AJQuKbgCeog589U3KFC3qd3kRULo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUX8rbyW2mdvvps4k8Gs1P9Y1VU4aBrRQ17QMd2fSNfuTd6vShPorKe8rQGVWq5feV14jnNHThAHgSUoQgKPX6P",
  "key1": "RD8LEN4sLYiNimtEVvtneRxi2GewBYLsAvF8Dg6XooEwiCXeS5hB48RxnHD4iUMrXeAFSTgGnTj7Xw7j2ByaZM4",
  "key2": "3H9PVP3NPT2TXPG4qSQd6m6xhUHHJNcUjKVomsijE9MGQhM1Ci71BY99zJt8hTbe4bRoK1GYhK93bUhdTYyEhXEN",
  "key3": "2D8FbhVhzcgWn63iSoV1m1kXXoj6wUTFG5L9FBYFFAPB9pmxNbevQnveXmaGiCsWtoHxVvSi64Gtdfn5aAHCvCLo",
  "key4": "4sQKZYrJEXSHzsb7qhxhXvVtN99uq3jmMfNZn5HDsK6FKocvd3oFEqd7RnNQHxAwAPZ8SFcCW3RBSqJtYDrcuD8R",
  "key5": "5WAxkuWXK9h5LbJV96rpEb1eySWr4CJ6jeKRrh3Q4sY9s7ojGCDSxoqdr1ANnS2i9MKg3enyqBo7YJBJRorKZgJn",
  "key6": "2dGJ3XCnxvX3cL7hwxQ8eLZN4wuJLT7CutTK3L2GhqCiZFk5x324GUibL8nc9sREQMQVYFZhyNjVwacUxsFr3CUS",
  "key7": "52y8hbRKXsNaY86CcFSisep1heVTWyiW2n3dg3LjndkKy9yLbaUzcs6ReDU5xLMoMa3nMQYJpEmghEuNUMbGeRaP",
  "key8": "63t2vZPccCX51Jd8kQ12fPAQmhHj85c8MufbkqgYWkTtDKhP4wPKuoUkNqhKh3oCNaLXC4hzyxKpCGvJaY1XTaAP",
  "key9": "3sLfMeawKd3qqL4B8LFXKCyik5Z9vG9atrh9uF1Vhio5FQHUvPMZgN8xisWmyiaDs5oe2mQV73qr1VLRbQZEzma4",
  "key10": "32CAUyFv3hHr3vmFaN46JwsrvTXt6AJzifLg2gwED7t4ULTdrMjjmw1Drx6HXyGd4ALjnvTkcidgNEWEJttJ1BTG",
  "key11": "2C1eEG5vna44R52RJjFZneqF987Bqhyw3vY6vudb1Dpcbc5pSpD6NyiL432bsty5opTk3z7mqGUzu9SkjHQEWYkT",
  "key12": "5UcGP6g1uqcs2Yfns8GGyCWjox9upi3rCTJDL1hPw3Stw4k1okWgYazypZ93DtApTkCmE3AFKmRYa7gGMBuGzM4o",
  "key13": "PPbg7pWEVVtCiUVXVebANoCHeAW9pucsd5LNAaNbo5K49htMohqE2sTj9HfysePDXuzeS33U1CX13hzNnbnc8Kg",
  "key14": "aMbUS3d1Dc2ALujDB8Dy2T6XsL2Ko66yRFnhJc4c9EzQCtpKkeNbpVew1fzFp6qwF7dKA6ZupDDet28dDqVx2zS",
  "key15": "4mY6wK5TiTRyMimwqcVc2tSb6hGEfB3L1QnrXod3ZAisM9HDP7cxVtBkPUFkr8MawPPKB5H8MzXsaEzwtzuoXkWN",
  "key16": "66EGWrGnUN5CCt4YiYh4VgLcrDnkAnsYyWZbUWLrLNfpKMwbnL99Cm7iCTqNpM7XXqcWrfqZ6pefikmSjUToFsg5",
  "key17": "678LWMhQ45U17cxqZFFsMoXWqCYMozEErEifYGbezvZce4jsKUzx5TK6fzuk5xxTLkxuLvaXyX4pwMfrWcyWQYy6",
  "key18": "vCBz4UNnzGKyMESzD2c4xLXV76Jd8MhQffncFzbkVHAuXAeucMg1Zzx4iUj6UcVTsANju6Z5x8wPCLQu71RJwku",
  "key19": "4b22rV3a3SYVdrzp1wMRkNEibVUXEKN5pnyJXfpSW5Ghyni69mc6PnkY4Py7hEip7A5jdwqxdQZq6gdnfevWBzmM",
  "key20": "2MDciszUqTnMq5KdqYPLe7qMmK9t4wvph25RoP5kdci1RbGdeSCuqnT6BCWwNUDxoNQJdLguNPnbfDqxU87E5qsV",
  "key21": "RcrhAwk38dH9t5LTHv1RdbUj7Vi479oU8vWyeYAVUm2d6iB82TiPt1zViSn9pi9sN7Y5TFy9STWko7BFJ1zTrgf",
  "key22": "qhzKhD8p5L4jgDPFKnNKLmjDVNXWA5j18detGoH45qJUJtR24XWqiTwFy7aveVubRND9MBzdvQZrcVVGzQ9XzQj",
  "key23": "fqR4xozQraNdM6rpVZ3pCv7DMTnK18GM8NLboasrbBTU9yGyxGm2wgc7UvUymSciQagfpuzAMXp26Lf6xGixquE",
  "key24": "5Fdud2yg6E3Gxf4eaD1fLQLxvJYd9X2R6kZR73FgFyJ2ZuY7hZEKhotH7mdEoxAAQLC6pDAbhJnAa5LoZwTRbWJn",
  "key25": "5gfVqx5ap2KkffkBQg4436jQN4HsQzgCGwpk6aomzHhEQDCpgn2XVyVWvp38T2UPfK74UdhnrjUWeksxpgZjC6zk",
  "key26": "2ejv1ZYfP3b9vRYAF1rHJZH2ueawtubLMqJxDwqJSgoMMdv62PkdySiAiw6gB6GdFbWKgKUsHwNhKsvwHjPAxmVf",
  "key27": "oEkofWMsn2FyH9HyzQK8VikLFAa9Fq33jV6VWTdSt3qwLYHEhyx2xwBEDFDWdmuf2wNQ97gAmR36Tbucm8NjUJe",
  "key28": "2ga5dPWwPW6FZWeUGVGtiSmPH8PTmJr7AfJRM7w8UbQxVF9FdvW8vrc92TiW2FsbuNV1Ar9gApaAuu2D2ebXPfrP",
  "key29": "2LNru6jcndvZyrNXdnfg5nnoCPq5WpcZRaWBQEFVxeHGw8R5xaoV6xqzrkjyXFGzAJepVRLgTWSNAVtoV7iSiyNT",
  "key30": "2VY5VmAEFPECokaikWAqedwnTAAPKqWviVrfaUT6LmNJSL9faJVLJCPKfSsVzSTZWwGK5Gz5Xw8RNdZxB6WMwXhN"
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
