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
    "35gS4JJBzJd6rx831k2T7QNFkUDc5ZtRcWawYcHsLjqGJWoipp2trxX4sdv5RiKyEagTCarSAZs48756J48Ff8Wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xkBq2ZW3D3URMZpkdMY8rM8phWDnug3hakm9aw7t2tX84a5pfCYawmjL5X6HZ86BefugoKyFa82HDvwYinDhBFj",
  "key1": "4NeKWk3QrLgftHbVwzkm6DRcPcgcsdUtaAMMhK25Rcm48eUfDH2ANm2QkGrKjqhTyqpKbsxmewtUmdCLKSXZYqVF",
  "key2": "2bazHt7WaJmZHatSFENWEQhQQiseZAHMF9kgUYwEVCqhXFLYzEMZxR5gKyHArufhovmFcWroNDeUB8ow1EDqHa4b",
  "key3": "62Wiz12L3AAbshwgkxYoDNeCWuYXxoyg92kdtbaSNrSqn4siyNXDqj1dtLJou9yzaY3BNHZutiHc4BhCW2C85tvu",
  "key4": "3RtPZfVjeCYS74fJZ48kr2qqxgKyF26gw2nKZu6C66duTo3DKtbeUmTqtWxjTG6TbBzFPhm3uPf7k9rUFY7JdjiF",
  "key5": "5kCjpdPUmHPLGteNrRri2rdNDmy7URpDTSS7wsZbR51tpCRApoqgXfvXQR5fBCWLcvCJ1ZM2qinB1sxPyLeDJXmT",
  "key6": "Ke78i4BNTp3hC6NRebPhexqWnDPSo7iVXCmNor1QVpohaN2jNNwREWHiQs3Gpf92ipkFu6USvVsTHMg31fubSRd",
  "key7": "2yUnEYWoAYkVju38EqCAyw4akH5kXMfrw1kaePSpggeU9empJPxxLDrhTU1YqDdLDUjv9a6tKhC4vw3ZW7qNB2rH",
  "key8": "eLG6JHiCgYWvcndcXzkX8tEjwsvxBpS15z2fQLNjRwkqWXFQHtzBPUdbkoFupkZ21qS9m5Qp2EmD7HiYTqgpEYM",
  "key9": "3GHYaVFPzEp5Xh41WKoKTvJooSrnTDabjEof9bBaN1gm6Wfy3gxz6iUFGnk1ETkm3CSWk4npSKYgeke2eK7JgV5U",
  "key10": "41R7F6VJZDP7SqwUr51BoWZLaVBj6Pjudt5hYDx8aqEiWckUM8dgjP9b85PreRnigT5cFcvrNNAntrAWu8d98ru3",
  "key11": "3LpNqRp57FF9CEoTsKXfNoyusvub6eKevWHszDjvZnZHSe9ZUcd8e9ADCHtosogHigExXkPM2HAhQ1SEcKVyQKhs",
  "key12": "5jYfwKB4d9mymncxmin4FskDnnCEKGowgEHGLno8qj8PoTk8J8ZUogssxTY519jZyvDW8EKVx3TQqKJ1SnBobSAA",
  "key13": "vmNu1puaVW52ZB71ekQ6J2Hzj4uobspkyi8JmbPUUJYzqdPFpuyKv2uWshBvqPXSqxYhXz8JZe6jYddBuawfdgd",
  "key14": "4c4Ke4DzeuH44PmEmipZL3rcE9sLszyFrTpz29QYhCDUXcC6tNrSqAVxBcQJ6LuKF82chwU3cWGVHzESxSzGQEj2",
  "key15": "gfPnZYznrTyqyWjHDf8wit9XcoGbfKAdE5MNwZmJXqVdr7KaH93pGKEECxfRaV74mi3FpSQE47mYaPS8ouSf8ji",
  "key16": "2BVurXYsQNwduDvhpETUvGqp6hrSr6Eeux3fvAo54xm4W9XsoKXQXDtTMhmpTyrxP7BXCcEP2GnobXSJKm8AoKjp",
  "key17": "3wEvQKVDdYNBWTRCmTA6PHq2uvv8eCiAbSVLys3Qd9PmPkWW58ydeasoetddqgoh62fMEJHMN7GTQmyAhWSB9goh",
  "key18": "636nf8ms349uyHpo3cYofAMYGzg6MrrQCMwDRwFkXMPncQ8yQXiGDHvdEbWjn914CfDNsSmUB1xZ86JQXBVybfWL",
  "key19": "4KWuSFX3wT1YMHUSoUM2x74A8dyiztoFSUrkr3A6L38R3MnYkcpzf7PUfBqch6g2hYMZEaak1vQ6PmBmLQQXsY52",
  "key20": "5baguuA4r4ndHnF2yuNk818TUXxiHbcGgeq1R2aZc8PAKWhnGAKXFdhdSzj2xTGbH5U8pBg2HEw5Vj4yZkDZxwa1",
  "key21": "37art1pjFCzxVNAaNsfEsTiQ21nqGku5JLoPBDBnZ6XhNVQUAGAeAf8QFRLhNceDdMGUtDsvkCNSQULoFEYWhhU4",
  "key22": "53G3d2Siou5Twsas1qtqjyd8hjjJ8Jj2jnWFf3zkDHxbbXAdNKPnLt7TRbUpisWK8SDPDRTKZATzhnV3bpvckThx",
  "key23": "61QDy6He7EeWVCTCB28stfT59vubnUPDLf8cudcBfQ98LpiXedrs8mkBEfGuPnienr6m7XoFC2StXDuGmkNaz7WW",
  "key24": "617Jno7166yDVYqE33DqnajkyEnD5tYUeb7P3FawVLMfmRfjEsATV8iG1tNP3fuqrjGGnToyZDXpYtqscMi6p7UG",
  "key25": "4xw2VNf3o4rSvNS2N72KoA2ZQD6vsV7KDGKFZDUu6jv28KtYXe2nQ9ZN2iAiEwThnA158WLcacpZ6oErmcwAHgqK",
  "key26": "2Xg3szozC5tq17Fuz1G43eNcyAJLmZ9XCSY8n92fLvEsQtH4rzMwGPGxGwqXXxbd3mvgeBtfAQpVjPx2NEtVP5Ao"
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
