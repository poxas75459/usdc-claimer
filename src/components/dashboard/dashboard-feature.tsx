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
    "58Tt3aQ27S5N7qjrSsMNLyz7VKXxo1Jr3qLZQmrMvmNePgjFpLvYgwR3hnmsGfQZUNRUREYkTh714hJTc7h2ZUu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bb7RAZewXeRRPM2rgiLc4Pc3p9PYjxAmm9TNhDhkjkeRSDPvDkRoSyudSXfuRRDLkTt4D4TeCC2FPdBkqVgNbiu",
  "key1": "iztDzWQJbZNfet8kGR6X4fHgT8afs35LS2XXC2kUuAXHvsPefefz1SLg1NsosG75Pnfy1wu9k681i9DadnoTr6Q",
  "key2": "5dNjivJqzu8K3gvcw5hcTFZbaquALpuuuZ6w9PAyXkuEiVJWxgsojA7wPxKhWg8VjYAWuRt4e2FpYLiyjLDr7UD7",
  "key3": "4WzXjpSwPrwUEGxXNFvfuDxqsnwRMmfvEfko8hjT7i3tREtkTCgpauYZHsYKWnWAMbevSK2hV1MeynoJhmxM7J7a",
  "key4": "35e8XQHosN5eVt7wKdXFP2yRsGcBDodNeR71sTkQ8PhXUECgjSRY3dGAqJDHtGDGxsicbcgUuSUL7XobAc46sN6V",
  "key5": "5f5b98NKob2Tt6TRWnPP8H6Zf18mzi1SK4cUJCDBZX9jYZ6NhDwi5pMQspw7egfu2tRRhRqVmfCZ3Z8hwE4iEuJL",
  "key6": "QKjMJSE9p3ySPUwCQmLxYh3JDR149JS2nYB4THUsGRg4Lc7MU2sdQoGVJWVHSDHvsGzpaac3HLMR5AZY944vHwS",
  "key7": "XZBJNbSpZhVVM3bJu1wHBXA9ijFvhKMFQ7JdVdu28htcA4Nj8kBjeqeXkGMGt7nrtvbVfjB2Udqnd54RQU7uCZu",
  "key8": "36jVPJxrrEsDvNhhKBsffh8ceuGs8YkFnHU5K1qx9wde2zts5oe15efvKXSQj3dwiexpqYi6AzwyU7U8DGccu7M5",
  "key9": "3vBRkbqe8nEnrSHBvLNHGpfLaQhfM78omg3JRrq8VUNifucgut6s6pfQkfsVPNgYaXEd6XKdcachaj7ytYmbJcox",
  "key10": "PmNdKf2a5GoBQchPCPGr6uEHrH56QjUXtWMF5d4DwCvYFcV7K2o55r4KAE428kDaGeZVY51vyHozzDWBc8RuK24",
  "key11": "42dWWRJbefqAjsqusUtSbCD3UwjRxsxNtxUn6CqMGgoXhNBKUJuS58rEswJYbb9YCPzHARbrAQWpqjdMh4RJdcvz",
  "key12": "vWNxNTyfAqxmD1fFz3T5aVseFjJtmWSrrH8j9M4tJRgVPfjM7iqE34b5WF98VkPrJr2EWZawexAkntYkX84BFou",
  "key13": "33R5G61zdJEPVFGRA67EG2EZd1aV6YoTu3YU2tdMzG6WtQHG1k3HZXWLj7Q6eUK9hDLnGntPrEdGT8mH77YHKvdd",
  "key14": "3KMQpgEACFYMeaSNEycqwaV72BaJPjQUnQpttjaAokDXnyVSrPUwtz4wX7vdN5vkw5ayFBySrjvfrJuiL3ryrvDg",
  "key15": "7Nh777dFprNcF72xMYnZt3RticzdaXAYYN1f6Rkp7pxrrhvAwh9V91zyUdKSRfDzDRcF8wGLJQfWVzS7tdd8oCs",
  "key16": "pDBkW6GGgRgMnDKbDyZzguvThhBdFKzMarknsV6HTpbMJ4u2648562eqeKN2pwV6rzsCiziBsy6rX6X2NaZJeXH",
  "key17": "2Z6a3KG9bkh1gjPkd7accvi1apjMfJ2bsFr9JCQRtFCwwMMLgxn5kn634TnPaZp1vgfGwpnx6csndrSkKZGPN1pY",
  "key18": "54KeiYafch8aCbZPPz1J4H2yg9UpLsYhv9EWtrmioGZaFmDhPQmdD9cb8tzaCxsGoZtEHbTzc6zrvHfKWKGynJdL",
  "key19": "48f7rfJJA42abmCJW1XPcfpNQAcjK43q65xLkifLdXAdAHSAVLpTiY56FQAgFkA3kuL3is7ZoVWUouYokS8RCuvn",
  "key20": "5sUT4mSNQQ5x8hExaazQUm2aMBxgfVmpGdvqajBSdLsizGUcRDeR2nyAkYQFfFA6CEhDfqwABYuyxFrRwMJxRe8M",
  "key21": "44HejVmNC7QKQpbRwVAhLzrk8QHyQZ2kgExv74CjZzxYyvkAeqC3za32dq8J14agxKG5ZjsZt2R6CL8TjPfoHceX",
  "key22": "ChD15icEJG9gZZwdGVvaxettWzqWcDkJxY4g8iE3iXuW31QV7aszQYS68vdhsFeRsPSjyT2qXi6cLK6A1U3oZnr",
  "key23": "RciD2kmAkbvC7uxbLqGegqskHHbv4MXnnfNvDj9t3g28u2nkXvJsThptHWVQt7bhxtGz4fsssgFqKzVU4bRrowg",
  "key24": "4F4g5KrbbfLefvbiPFNqVWnEMK5HuVqJLDLhgU7wPi7FWFhEPYvQCw1JyqVGRJ47fbMCiF7crKRgFXQrzuyMWk7F",
  "key25": "5MMTUUwFGW7tRnZsp11BErkdPeu7rVDL2vp6z3QDdREytziAhogkHs2E3of4nDTKV5itF7a6p9R7ApCVdyjjEndy",
  "key26": "5qxnNFEGhT7Pv5oaLbRkiV7TbyuGMPoo5zhJrxdWkmqR1CGLUQMD8oMpHiYzDBcsyXsQ5TtVt5HWDAua8SPwDjoE",
  "key27": "c7ZrtShSGJnw7n1qr19tJ7D3fcsXFptp7wQDdQqyvUcDrKrmFm4wfuTLQ5hhGGSNWvbyuypzhsiBGiRPwJX4C4W"
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
