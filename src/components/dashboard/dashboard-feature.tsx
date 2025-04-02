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
    "yuxfoPQEvUKTocRT5b1M75hCaA1UWyzC4b7zZj13RieWG5RDX6Zp11URFjMbxTdu1boANTZ6VvndAHF1KvZmZzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ds14ycWX2yjeBMGyzTV9vRhQYhR9tE6h8JwEmHgxrFcjJe1AQdhyjr79vCrgngwDvFL3fCRn4cgReMx9b1FsoWD",
  "key1": "3TSULXRrJcV67zdPwc9enTncwxJqeguPanWatLsoDceizh8rCh2Y7Br2UHWwnm85qtZYF8x8nVGT6PENN2rwqGVS",
  "key2": "4tgA7jQ2H2vHjtTNwSsGo8ogwGVzBAhh1kQa9m7uUYiLx7QKUgwgK18oZETVbFagcaTQopXDDaTiEbbJZmBTdknT",
  "key3": "5XHHkvXcHbreaoyhurwoVvHtd4jrBcaNfTiWjPa8ifABPrd8qL8dUDRZt5ZiE27rb82Q3qPQiCda9yqA1482DzAj",
  "key4": "efcpVvQJtv8YbDYpwVcEtmzzirRwcHHTMY7KqRpSDTJ6zTr4n1MHyNa3sw7L6hqyTa7q79G2mj8T4pdzSeAzCKP",
  "key5": "JSQEvD9wT2L45d9DMtDTk2C5oL6JcgYiRbhMuFKTr36WFb1khp7u9bhJBNkTKV3w3C35LhsXPNtXovLVCA9qYEa",
  "key6": "55MGV6c5KoQVzPCwpWTYtZQrFNqtjzx3GBJLUTaDoHVBaXjfoT8kZDvBNjzwddH5Ss6eyKBb1LR1MFKzhrc2uK4i",
  "key7": "2VmEcvkmrigJj2zEQZgzKnqNCmoz121ZvNvtGJcirXJPzjnmpEVQHAQrhUKyuDDgoiGgqHZbCTw9LDL8rJ7eJ6Qd",
  "key8": "tMew4wH8ge1kgf143MGYPsUo4tqNwbMsd3M3p1tGx1rNQWEgMx13CU5YZGJ5zAv439zb6XGFZBkMT8zThPZ1Rw1",
  "key9": "2PKswi7iXGLeQz7ZeGbvqdj4U6YZHGKQPbGwBoNL8VCT1jomDEwNJu1SwddVN8DBSUVBEYVurC5E3geyWNHndtDp",
  "key10": "3tTBDcemhL4NTanFBTCMAvYHnjfwgihpGbgv3U8QQ6GkTkV4MHNnBCNfRLgjaTZYe2HwkWXkU8RUoeUsxN7fsv9d",
  "key11": "2CsYRHKaF4hLaqhkDiyReWYjbfbksNzUT3EGhMATd4GQqoFqvp7bAQutCuB93kXHsw81UxqvgkpqougFtyKxk62G",
  "key12": "2dT6KbXJQCmUejwb1YFK9hgbiKCSB4b8wnYX6iq8QgTtTFz1jiD1ErfTTnZzUrGwtca5Q5n89uUbsBavxzKaEbiY",
  "key13": "3yCgGSxET7c9nVmtofLVfqNfS1tQJzxDQR4AjkbBrJm6Cjyv8ZByxvKMfWFWrNup64f4yrieV1t47CDpx6YkhBAz",
  "key14": "3Qibw1Wsmzt8kmY6Lrh1TvaHAvwRbDeVNh8xU54eXVeaWaXcXTJiKC8tENTWC6jZjQovkxJYXaheQm9WJsNDz3Db",
  "key15": "GNTD3zv9iDoMXNiW9UTn8YfrzvjaBWzdvFYWt4fbWUs8QN3sP9WyTNk7VcDbnsGjhDqPQKWW9cw7DMfha5zZbU6",
  "key16": "m62yicthnPU8pErbqNUn1zR2VUhEhnBvwuyozZiqB3VDqB1kFyYD7fAZkePdR4E5pUBhLjicjsapnfMuK1RWvvj",
  "key17": "66x2jWaeVDyHPwdPH6YTq6s3yTHaT6umyNY5q9ZhyoMJKKbPBGfjDFoZCZHa2vEvueqKBqgJthrGVSbQmCeDRxFZ",
  "key18": "3q1mGGdR6z78QYcHf8oYoAyCBhb4HMhdSfgCMvTw4A8rJe4qNQBhyc2onz8E7LjB7WtdNP9DVFXi9eai3RnRm9v",
  "key19": "c6nCycPtkp1LVMxgA58Q4EYZWkiBCyTqYb8sHzxKR2QUJ3HuJDQisZKt1MUtHCiAs5dz97bnsZEch1QXCkgv4RC",
  "key20": "qPS6dBWSz8ZeKWf9p7MmAxfqhLfXMWiEcSUtqSuxJwbTAwM9CJ9eWzoYATsFEZJcoMkYgBPX5YdEaMVdwo5hK4t",
  "key21": "4Ku8Uz2Df4K7bNMkRQUgGj52JSoehxBiQ9fTwg6BcPbsbXU8qqKUc3NyPFPDQV5aPVqFuMLiYcNgx1xUpPcpPeQ1",
  "key22": "38fFSpZJPRRKjuLctesDqsepZSX83b9snJjVYNrzV3Uo5UiF9qHs9aSn7TuMzCu71P59qTAGfnMnH9BvpcvzqxEU",
  "key23": "2P3PUrytdqny4EXED7CGHdfpZavkJghW4EWKncLCEqegSeLVKoVh6pGfFKH3Q3cbjJgd3PNchkBL4cXuswPKNJQk",
  "key24": "51kKYywPiaye9eCNCNTKCDxZCMBwdr4T5t3wGJagkZ2BoSbPRTp5xbrieL7Rg4B9msffJjHZyUUR9v4ZCHuJcpMi",
  "key25": "4LciwunYFRZsVZ3vRkSb69ZJhRbzz5yF1iaiwvPok3ZhyRLgaRUhy27Np9t1Bx5qz8Aqaqmcpv1rm2TaVoDm7ikN",
  "key26": "2MSaesu9vGd3Nz2krfWR7WQ5A5paiEDWAuiupW1w77yT1AT7nYcejgw4tLuct16LxXDS7xC7uFqgXDDa6Sx3H131",
  "key27": "2pt2pY3EErG1me2ehFyUNhBXqTMfLfhc29UHbrb9ybMyQA5aV7DKfuCViDq7HgfzqS8EnKVWfAqopoxo1NMT7ewc",
  "key28": "4MLj81QQXS6vhitYrdKudJ7HJBhEcAsm7uYeVrHmnCZMRFMayuAFdBkrsKU6VyMLk43XkB2SjvetizKnLP2PeyWA",
  "key29": "5p2bKesJzJPE6GrzYpRC1wEyJyNxj2uYwah5NVeSyHmJTDMMvtvqPTpQR4k77C18fQw7YvfS8u7XyecgfmEBqVrq",
  "key30": "28xPCY8WeRSAK3RgUBwXSuKc5LeBoNGaFsp5xP6gzdeJkQ1D5RQgzqLQwCzpmxL4zStTfTdRa9haWCk7x7pfS8LK"
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
