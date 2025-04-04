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
    "2XBWJMbrKsTgfMBbPveEh98GwiJSqAipm1rRE6B27K7ZLrbT2datajQWxE5EJK5HjkYARptXzBcoYzrmQtagDLhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQpRvPSTPRwd4apyNefdzAawUhXdEQ6qQ4qYatrY1Pw9xdyb2z9sAbux36oPZDNSHoLrpxRcAwZJ5N8iyjKZ2Xr",
  "key1": "3sYcDpzNo9wNWpPSZxrREeBJZCdTHJBJqXMqHNJGPLd8yRSgjzqyYkfMN1PZpXcx72rx3Dyvs486thtCVxyL8FeA",
  "key2": "A9SH3CghmgEw5NQpJ6tqyMSvgX9VwodvdiL7eycstjmEXGyTmfFSCAuLkqGCRvbepfjqamsidN1HQMhS14t2cVQ",
  "key3": "65kbimNQkTizYGbq5VbpSmuzsWRzK4nyzsThHXnvH8sTu3ZUCS634XJmbuNBBQEJ9efev79p3KwTm3EmbHzchtGV",
  "key4": "3xjocEsuVHVFdmqLkCyGECmsTyktSUPb8uQHNQX4gTyh3sugc2DGPgEzpdeBHRabny75owmhfZU7rFJ3GK9s552g",
  "key5": "3qQ41ba15wcxKrvCH4K3objDnmRxmQbc3RRpFqeLdmKUWccbsEqV4Q14BkoWm2fBjmG2H6Uw7m9xP9HkP4fDyjJG",
  "key6": "3pnxdF7mBtPZzgavyxdnVUu5tiRNgVYBfCStERviQ951iJTKYCpmTysSMiHWFCnSNrWUU58uZ3RyGRrkjphUa94",
  "key7": "5mBVBKtNsyQ6HHG6rV4BeMS8p5vxoQZto47EP6KVnSi1BK51ZY8QJc9FwkfbUCoNNecV1ehxa3SDfVtsXw9EoFaS",
  "key8": "4S3SQGdW1daSQ34kEpiMjDGtifX84x73vxwnwHLAE34zd3HGvW7U6qVvq66dkGRnoQX9jUbBpz3NGHaMB1sZRUu9",
  "key9": "4hDeKtAYeyBCP6XpmEqkv2gBRxqTr5S9swmHj5KBv7m53bBfnuaQJQQkj91uf8S2EJNZzAQxTCQfGkyt8bzoiKer",
  "key10": "3Uc8my2jFJYCNNVeyp21G1LsjWkWnd5XDmTo9xrYwhZ8jD5GHJg4vsuuWfzwSjBVGkcirynJBsXVerpk9F8SEY5u",
  "key11": "65jJiNhGSmJbuTSSwNDhdJZ4LBVWx1Z3Tz11UqpJEFYxpRD9AUwrsKyEHM8Wo2JGS8Wwuv7AQC6DUGLfWJqb5DyF",
  "key12": "K9uKpNbrac4j3qnbtdJLu1rNPA7X2PfLv8u7v4f1DCzY6AMD8NFzdw5nTYkYQ3kjCV2GPzx8WA3ajuRnt8RjYpc",
  "key13": "2KwGs3rXCYDqy2rmrGVXnsqst5G1v8Ak12YY631W13yhiTyVszL9nXP8AUcyEJfM91SGbC1RUD465j7UXQ8QNZAR",
  "key14": "516hRHPPgJ2zxs6Rpz6fBAMUVPXmsZgmdZ3rStgQmeJKBM1oZRoE15tB7i4aFHGvmxbKy5w7RM7BzuUpSDqKurMK",
  "key15": "5ZzVx6BZ3bbQyMgEYoUkTE8M785MPwmwscrSVmRBiTP9sXKyHZKpepQ3xoJM2fKkeiBAJsvt4KUckbuyaVvMtqoA",
  "key16": "2rjpyXnrz5WAcEHGjDdYiRxHi1P1rQMvhmCCfxqMDfoJzSfG79WRAuriVJs8QdVzkcm3VSvrjNts5JcuzKR3Cyx8",
  "key17": "51A2rWrN2gdPfc41WbTonU7WHATVdSo6CHRzHpKX6Mi9mCwoCyfiUb5PRJpS2cXP46mgyvoBC7Dvnq63t57Ddme2",
  "key18": "5FQwzxM9Meok7awaBZMiWejs475KvJ8GxqZpRLPmBunZrsXn6kA59cWN7kxVZW3Dncxh8RRHbsZdsd5HhbLDUKP5",
  "key19": "2nSN2f4wwUD7ow2WERHKw5QC5KGi7dWrA2rVd61fvHJ4LUEMvRDPoPZtkQ7xJ4tTCuq9WiXF26coZQPemRdNg4Rx",
  "key20": "25H7GKVZagxgC4udQEoSKmQd1EwJRWujv9pZ2THWmejhGRwY9qM4BxbHsd4weD8r9HKNMSXtxtvehBw1U12JhMcw",
  "key21": "31jc2sAwukRknLc1hgPYNhopu5znGjvQPCXk1FcMfL8GJjD2MQsJed4eCM3xCAiHnpt942yj5GkQUnWnxqnnV2xx",
  "key22": "5jKgReMDrMMMkfHUDXDEn52PkizraBeLCKkfZYKKm1pQ4tsHcBuavp1Ctk48Yk6d4FMvKvAX4KgpK2tSRPZMeeP4",
  "key23": "4T7ZUR266re64hPSQz7fYf1ycJnDYJGGNrv45p4UexbGtUCYQGLNfw9WLNTq5EbDwDNFFg7u2qHF833DnUtM9WnD",
  "key24": "KcNXeWtxopaznAP7pkMG7GdFocYRs1Zrmm3Rspysq8w9P4GxBTBTJe1YH5x6Y1K1mzrNFX6Guu8feDsaaxMQaFT",
  "key25": "24UGGHmwtwc7XwqSYGqx1yRFM4REnAcZt11UmoazUUYaWNQsButxxU8TUbJTTrrxfEABxoS4K5xJMR2ApvWPjC7e",
  "key26": "3H2LaTR3bzYaFGHTZcMnpGDP76WcEK8wR2v7jSTNaRA6iyYuJYFcCwQ6nLX3DNwdVuUGFpz5jm5mGsFKPfMN7Z1r",
  "key27": "3DEmNooatjB8HxgAjSL637ueSzeqiVxCwfZvjGtoorjZnVRDZMgH4BPFj7vRcNaxYun6EsZNtvQHj7KMU4od7LWL",
  "key28": "4zArquARrsGZZDW7imhMv1GtexaMfDWna9dFmqXWadigf5FNihZv8j94BKaEFxqHnKMNMPNGLnxZsCRtJqdC8e3S",
  "key29": "39Ssr5p1vw4pKn1aqJHdiUPS9Ro54oytkfhyqMLVQTM4yz2Hbgfg8nQxssaiYJMMt4f8r2KzCRiLjhZnCM3axgg8",
  "key30": "4xAQTwkqTrNcWN6gChds5FYmXeEb54CQnihCmc8y8fxkmitbh3BtaLNquLBtbjGQcGVkzk4ePUj5viE46u5iy8TD",
  "key31": "4XT9aWdQ68sfhJnqcrPSs9U7dNezwg9ErucAuP3Vm2kiuqXq8DwvAgZRwgimGbWcnsyGGhfYFo2FBGoyvabjpKxr",
  "key32": "5nFNpsi6ZcRXNSptFoKaQQTtAQBvvCKuPhAD64jMTB1Bv27mDmofanfJewePLci24ravnQwV6LLcMivwTttS1cwu",
  "key33": "5xxKkg5jqkWnpku519vykL5UbWDB2YNtBRXswDcNbggcEm1HfWTwVLYFzvuNpQFgL4Kt8fRz6e2VPiaZut4vj3E4",
  "key34": "28wmUSuQYTTL4y8JuzLTV7WbA75SndZFA9pigFJ4euYSuogBQb9wsQSALqbhGP3VWqMHzF4f3P2dhafE4msvjBvZ",
  "key35": "5AokDtAEcU3Y7TuHXiy5YJbpomDPkzGPgVsk3uJvefSZDK4Dw9bkmXxBi7MAdARLQXTKKhrN1aLiLAUCdoP1gqfC",
  "key36": "5SveDxaXrmzcx79HyPPYWH1szcgUSGxUqdDj4FEmwGwSrkkTYFZwv3E9xXvdxTafLmLVTrAYR21jmqz8uUTNsT7t"
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
