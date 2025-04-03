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
    "4EKCx3KwUAkybAPyTzrxLTMUdy15QrFUxLHjoWomqeRKqM2MbGxYvmSyrsRhgEzGfxagJdA8cBFZKYGFWi2MHtRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccE6FCwDtYGG6UjKYH8ZFtEmU5vSoEejcQqbQHmY7k7bB41uwW1twLdqkuXkpue1Sv68rYiE46q785sicZo9MkQ",
  "key1": "BiSzt8Lk5FX71vxeHkyMiqbgdFZD21WJb7AY2hfYNJ9VSczn8J1TJiDSz1JnEZNckSXBJBKkvX8jMN1jmDmuPgg",
  "key2": "63wpWkBTEtNhdTA2tnWmm7u1NEz3gh6rLoxMsYerWndTekDcJnuVuQWBwoZjccp2aXdiYumyF24Sj6En8DqXzxMJ",
  "key3": "2BafW33wSbgRyh2LGsMeLTwpjwAQ3TWgApWwQJtruyJr1pZBWXYtqb79wGLAhae3FGVHr3AXCVNjCqYcyJyxMX3r",
  "key4": "3pAcuuEq2y88386tZuDE1sRTpBJPDma3EoR5vWnkLWapxbVNh98yjyok4HmxVpzeNEB6q7FxndPqWjtXebx5vi4D",
  "key5": "4bkyU5n1AYzQ57qgMhpLmLG4CPhAtz1n9Zr1WinFv6gw5YVZP9UZYHYCLYcPawfkCdkVD1eweFaUiKoGuACQ6Fwb",
  "key6": "4XViNXDHZS45GTt2FEjNfKUJ9vZGA9MfRgFuUQZ8fFGo4JDmQc6cuUwirMXsX9j9LQ4sZhd1cKssrWmRK6ku4kZi",
  "key7": "4m27suvU5iN9u1zrvndcpqnqShtoCwJwHpGnNYAUdGHYSxF1yJL23cmyA9XHQJfaWnBs6aoHgXri4aptmPZCRJiZ",
  "key8": "5frdxFza5p1WgqhgEb2DNC5cSjAidRjiVL8p7kBQftvmrmEaENgBkaZKFTo1Gq24D52hx9DKjkT8F9no9RFWJGfi",
  "key9": "41hYiBXF9jbvXtsxGvYurwwwR6MUiCqDs3wmtPcSPkYZUCy7b5bTJpzdLVtrAJZTXxNjrimCUCCYcPgXZwvZSVQ",
  "key10": "3WDscZxT8Us1B9qS7U2QmfJ4QW7HkSBYerVUGrXabAjitERmzyvySvScnExsKv1FzgSUZwC7L8Fb9a1yzddNBr32",
  "key11": "DfqNzgZrMkutK3TBhQzVEMAu9z96ZrzMJordtrhn7LysNiTQoHvDV82YUZFvRYXuwyAY39hAL5wQRbCNE9MisMZ",
  "key12": "2proWT4Rhyu7AzLh5cWbDgLh9MDTEUTc4cmeEcPYnajNJVhe4UHPk6NbFtWRCaBgvbqwjmoac4PC9ABipKS3y8u5",
  "key13": "rCfRXW5W8ZmSmgBXTSvysNurzRMeTymB7RKTV8AajjD6u1qekfWc5vtvNQur4hr71XJU3Nxs12uVaSS14vRCKZe",
  "key14": "2beqkftib547PCgy3mMKfpk6mnq9UgF5J5hw3ZpCJoJGWFqN136aUzbyPs1rott1yob1Jkpi5F8M41uTuu7EHit3",
  "key15": "4Ma2CZe3GHWbzJnGV7Dr7aguYx2TKQvLkUHY3hPSVStEec7j1qxaqLUkyZuw4Sk7iQWEuFVRSQqrnpo9X7fMj6Gh",
  "key16": "2XaD8V8HEPv4XnA2tx8cKDqgSZnFPUNprmYsV3MBsJ7Z3dVBtS5E7xYJ97RGaXxyMXx5aCSLDQ8WHcQmZfEVTyJG",
  "key17": "67ccpndB3hG1ZXmUT4fP6uMU44zi8SPrAHnA5S4LD4KotC9AhehbzfQQp2u5J2dMf17tudooQySY1sE4K2cLp4SQ",
  "key18": "aVHwkuWJ643Y9hYGCU9cn8nJzmjRurvC5YBuxA6kjKYtNxP9j9BZ9UUhPUy75os7aFqHWVv6pae2eBUnc82mofK",
  "key19": "2ReFeUda9HVdSEHmqoAdy1Um9xcARf16wT6AQRisXZMauB5tA1K2J2Re5R1ELxbnkspQ1L6zM4YUQ5ZMwKBKjAve",
  "key20": "pXeX6cdLUtt6eP21svMJ48fY1poCDD9VWMCqMTNqpqWpdGDT4r4QSWsv4QYffn9ftnytvpYY2t63p4vjLjWdmUi",
  "key21": "5TWiEVkYXfGu5gDt2zEYmGDT4uccbD3zbtVxoMAUz9JQkVSxS8dNv9VR3U8fnxgtBbcFFoMGgR8QKHtLBpAbdAas",
  "key22": "3rGKDji1vQ2VYS7SFHZAZniTsUvopFY7dy6v2m84EYSedSyvtBbTHf7ZHL5uJXB1H4nddgxJtvdLYnwCAyZHrwyZ",
  "key23": "43vKbRodsgonYXkzdkEkwuvPQWK3ccxe62iq1mLgxp32KNPD9HbowS9wSjv3muQXYoW4f8wT6Kr5Ab791djV3bMi",
  "key24": "5mwWnNyMXhLV7RUtgvXmB5asmEFmomGHp3kcTjmFdyU9MsVtE3cRYMmoK8Fq5ZGWfWaMJAzbe4itANnutbwEUvGx",
  "key25": "4gGHF5whuNeWJTwWmuZfUJbwhmi6uMFiZSoJ2gWAFn1X1s7cMuJTfo9BB1QWYswRbE4s43ZkGn6FB9ncB94kaoHv",
  "key26": "4CwVQ3zit8PdusP3uRshHxCHXxeRXgAcVrB6QPonQoCFpVAeSCk1nsvY5FEVUhETNcfesY4hM9Qt43DiGWahwtBQ",
  "key27": "35b2SVd7XiSb6rgjWWJyQKP2HMAgj5d8xeQDvDYKRGyg5eQvSq4JWiPe9Lk1oMcLErpqcsMQUcbkxTVPdKyByEtH"
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
