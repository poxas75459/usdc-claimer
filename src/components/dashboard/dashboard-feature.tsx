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
    "4Ms9rEhdvuNj3xZknVmyZGYRpjYsqHNhr6BR8fx1hSTY1mYDssFUmazysQMwAAr4bsbS6F7kGEeFWfBP76JAjzPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkc3ngkNrCwiCEq3JWUNsfYY9vuNoJiUyaSMkiPp2orFGWytcV6Gh5vFJqRLU66T9EojuqDDGMP8EvwAi57BgC1",
  "key1": "2ezweoR83YWVXkzuAyJZWD46UedcLpNjp17yhoe1jELQtVSiebCumYoMzKFV2rq7gwuToEehVke6fYb83khXXPiC",
  "key2": "2fp1vP32N5PFNH3J9Q92J1STxi8cDgb42fMjy7cFnF1NbqCdS9gtqMrP3JTUWztDvhkFam3BMmT2netruuswhYpg",
  "key3": "5uaJgVTA69TkhmciJBGdj5Qrsyf5UgWXrj9k4ECRJWhi4Dwhk5WoFinCwQWA5ammxHegMtjhxbrTTjFLeGc1mktt",
  "key4": "4hSWZ3EjRJ5Xvo9Dbn6QV2pXxZZo5PtPzHcskMs4TAPvaR8M9HSXNjZwqaeTvCTY7BsGd8bvxNHcVWvscq57f1pv",
  "key5": "4YZkmPSxskRi6bBY3EbCBJJttdLTCEMsJ9Uep1MBm6XBmW6Nojdhf8Jrm4pGExtxuXuVkJoEARjjhsm832ZKqJ31",
  "key6": "MLh7PwUBDjMpFb1gYAbvbpuiZkuPNRQ8uj9u34e6zVKrVAcnVd67qp1e14FamZYdhEZ9BwEpBGuqvAVFWWA4pfv",
  "key7": "3zRCQU7W4KZeKtoXDaaBcJb8wmiKi9Ab8pVgSv9Y3RFE9jmsMgvyZ4FnxKBNGRj7HHUi1QwGSTxikJPQdHryoUqm",
  "key8": "2qcEzQxSp3skC5n1vjPsFopxtmBpqjWMMCZ7k86hq2i8Y2ZQ9rK5PhropTUC5eBcfYKbJBXYE5dspUmrSQTDDDGF",
  "key9": "5ruTWWqobEce2ndP5oEZfhGYnsUJgyXEJGX3zXRNAWTPB1EA5QJ7QWsTKmYNdSk8ERDNZc2heCtAjneaKGrMJtec",
  "key10": "4U6CofA4v8FB5Wmhyi8dT6f2brx2spYCZfTHi3Y49essFj4rrvtekaTcqGkrFm4YRmfyCBNjhbhxha79vbNEhXss",
  "key11": "65xT3HJrcZvKGTW73dw4QkHLw53fV6zphHKqKxgYHCCRJsjykGPZ5A1UmnqPvZoCuGpkpohJaePTLJVSvxKiFusX",
  "key12": "bpESibYg7EHrLGSXMLXgzwPdZpL4pR5NkUnLAL3XLBES7bvwt75mpGrnaT7xzRBGqDrSFpsRKkLGHrja6rR7V8a",
  "key13": "4JrfsZyFkk9m83fq2pLLJpCGdQPJgZh9kjDLM8tL7Husji9NAg1itHufYUEYCjTPFWtBhzfAymWwzpmWqjveLT6R",
  "key14": "5pX7GvgDcqCHzLfYbYuBp6hP532dpeTWrBwHcrj2cRndA96wV93uzET5E1JU8HNzwXsR8zy5Q99m3XXxQRaj8aSU",
  "key15": "423LhMLPnemMvLZz8WACihyrh5HuBs9BDGAiFuvaYWK2krALvGhn6vHWCEu4DvS1E9DxFiRanzpM3MDEiM16JQU3",
  "key16": "4UFhBwKeZKc1LhhxUosGjRTCh8XciHgA9xueP5r44aMLHNtyNpARUqQ91r6zEKCTE6jhJTLTVb9YSvqhJxpt9u4m",
  "key17": "odD15W56paDuaKj7Sp3TJLZVg77HkZsPq5TsSjaSrBHYYAhshyugTUXt5iA4ZDku6AEVNjQMqTXQqZCLJAp9n2v",
  "key18": "Gg6vMewXwQaoFBZP7Qn2XCFXNhEWvZuVc7TVr5CMBTNpkn3TksadJCeGwthv5dJGe9yjwucKxtMUQYTCQjJwVMz",
  "key19": "4Yd1a5Zwe4EMySd1Q5dytzL9zHhYLTLcfMRvZCSAsD6UgXza7d7URUaKiGQh7LdxbtFfvCRLYopv2vRquuz2h9U1",
  "key20": "4R9C9zB3UyVtYs1c2zjZe7HjQQzgJBNfFCdzYXUMmjHdDStMKi2zjxcoANsSQ2ahDk6zSdwu3YudCHWhzAUj8wAP",
  "key21": "3yMZTUmCU9UgummexCRvZEsjVMQFNpzHenLbqKpaUFYTUmVx9pxzbzfdtCWdrvkZAoksJmvbhPPuiUTVstAGsDDC",
  "key22": "5aEJQBfQDQaJJ7t4Q7UTYYR2X2K2BzRMWrmhjs9DhaZbZysGWcEmvV22ZudsMKPz4uJeWrh6Y4PvmUjKCrtjMcuo",
  "key23": "4FZayDV7USuSPN7WsKsBti2JkSrHRZu1Tpp3TQeaoXGmdzkQJnR7y45WDjSQ2tM2QbV9UgRNVm9PuV3s7jnmWTSJ",
  "key24": "KTuaJziLytRhXrEWStAkt35tAnW5ZchAL9SKCZQSiM3FM8S7b9nTd394fHH8B8nr9Ng29dCogrM4poV7CUPRK5h",
  "key25": "376AESJYQHJ9Pt1V8AeMCDD2PitMUGwv44ShMWiPKLtpbMWKAcfuVHvgSx3QfiuLfSVA2YELmJs1Ms5HqfhRpNkH",
  "key26": "4cg3cHXqT7B2jzNRmBtMJsJUFwsGSWyyUo7uuKkvVetyLqFkSwBTbgpsXExc61MjwBhY4sZjr56B2ksJCKj21C7t",
  "key27": "2bkb1wfo6qbLiM13Ex6WUBbeaZwPdpSGhRbiDV54RDun4ihveUVrrGdwwKPgQ4PDde1825qHhe5YHr5xiQPeK2A",
  "key28": "2BG6BrrM8277td99EkXNatihwTCE7uYYrwtSebzesCcJYKT3AXMp1gHgApX7tFDNzLiLFL6KSU9rkqzdoc6AgnM",
  "key29": "JELiuUvbtKPYTmQoj7oM4xKk52iLrkCKTh84WMN9j3QCBQCpQHHo8kVTaQwn7gjXCBV2hrsxxWYojwJcSGNzBmZ",
  "key30": "L5D2USDxNVQG2mbJHBW7N1bFExPaug6yNWbZACvXbBPzb7eBVdrRcoCamcy7BjGQVK9CQv6svLm26FBUrd9mRq6",
  "key31": "QRB7tUmVn9V8af5KC41moQf5Z1JEqN5CME1LsMQNpf1ADnEZBW6E85ycujwUrnR66TzFYc4rz4wjhStA6Rz2d1K"
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
