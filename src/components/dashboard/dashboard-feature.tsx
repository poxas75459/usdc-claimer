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
    "3uytydcCLRMLSJTnWu9uKp9N4LEDQziGiXZQCNyfFZg2QnJyFSvnu6zvBcQ4xn61H1CV3sbjTniof7BA9QNLbEdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ENAZYYzuZQ6i4KHxdZwu13G8trTcNJWQxvKbi3SRsgMjSFQbQJTJv36aGmQaxZbkniKrXDofjGsTGch4jNsThjB",
  "key1": "MPAQGG1A99nKtV5ch7NRnL296pwpYFirxySNWpb6USzKwQb83MuXJMU2C7JwGXMTJJAYjERogV3g9fR91HBs8sv",
  "key2": "3apsAsbo5xjCrpMuFE3ovAtxFeDg7rVyQxzP7Ry4ayVN1ddHzhnTNQ8sMF4tpL8oG5qhg25XFFmp15q1va17mJTD",
  "key3": "k6AjiMMJnvKw4wDETRTAY7v8MPnb9GrCdX6MzceRakFFgvJhTR3qSAiBZEBnRLiErzj3WqHZDwaFyCZ3DnwQDw8",
  "key4": "4EMvY3kUF5oveVKjy8VW3bde5b9FuP5QG6aAay5h4wEctsNTmCeaDoQ8yVNDdQesDBKpn7bRpqAGedtcuseKt62V",
  "key5": "3GmwXRLLD5tPJDJyz1YnYsij8KrN9eZXD4c4TRXKYV1pr35awvfKPiH5JKVPmy8gb6DcVpyEjVfkXTcuyZQuXuer",
  "key6": "3K6XtbY2bA6eJ1VXwTXiRKVFmgz5tjoRLhWstqgyVi24RWV8GP9d3U9CfVHJj1KxXr7aUNX9mX9BusZrzZpfSDvd",
  "key7": "5X2cwzXQoGCmo2ciGfJ95vouVBqVN2KKoQfkwwwdo1pxUt2es9YNAdkh8n3vmGiit8YMNXqNhqpjSSNYnByCePg7",
  "key8": "2E6w269wiEcFxseEVderUVuico4x6K4T9gqcZxTUcrKKWaNZYjzU89sVnFiX1G2kEnsdvKJwziJy4jEPy7KTNjCz",
  "key9": "43NU8rHf4wKP4p2x7uCS8z4XE3L3xS8AzNwRZpMUb3stctLKUP5gZuqDeua1tdaMUfa8Zc5LHLoD8NbJnikzUo2V",
  "key10": "4wi3wPX7LXQWhDsUrHspUBKTyvNp8vNsdk79AVngA5Ck2EVwc9wQpXKLTynwLQ7zrgmhBjazqTK3KXWCcohMH4pQ",
  "key11": "2QBX5fcqP2EiLLgY8VcVEMNYk6ugo55UYiQV7DGAqNEx4xbfFjUQWy3HgTxEfTdoj5cS8DayHAUptrRLPtfZrJtd",
  "key12": "VhXjeAGqvz7GWMLMZb2iGmnfiY6ygdiwqMehyoCYXMWJhJghX3rhpQNWiiiT1Qf5qsUDSyJ4y99HMDaybQduiFP",
  "key13": "3WPCqxEJwALV9rGRqTi43fjQm9cFBEu8RHAhAAueFY6vZuuDqK95GV9N88uTNX61J8ku2mvaFqXvUkzDy9mQb8x1",
  "key14": "2sbjRTMAfXJtbenNKxdCtPc71f3V1SuysAPaxKYANAeaLfUE35mszmxsrghW2Nm6iBhkgmB4hYiJuhqtQpeciNtT",
  "key15": "2wVfqxdSkRUFfAGagSgBmvGQRS3DbGQ1hW9MGiLNaaGFE6d8wb2sAY67DHMwu7xFU18Tj7kisruMcWAhyeEVtKbR",
  "key16": "43WoLS7sTpkzoHwh8Z9Uv8BtzSnbW5k28wv5RN59EjUJRFbZYkoGU2Q7b584dp33WQ5mQCcmhSgzaiwRvo2CnDUU",
  "key17": "zJcvaq14QreUT1RfRbWWVnG5Q9UtWcmRk1XH4aPs2vj9476SFyES1W2ei2UeJfkZEDgeRsPuaA7Wp8PnzBTNkEe",
  "key18": "Dq9a1RYN48Xw9bHd7vPgQdudJNd8kyeBstW6HKMdNGUhz3bZZiEbrhdamNvAxzqTTBEPbWoUTcoraTw5nv5LzfQ",
  "key19": "5t9911QDZfRHUKAxUmpXyeoFWw3KiKqywrrjRc1uG3GW148ESGsTBKCUTESiDxJ2VhrHk7PBPwm3QNzBrrY5ziZV",
  "key20": "64bWHXX8i9fpo5rNqxscDqa5PxgDKo2gBta3YcdMw7EET4Qgwj6GyAdcjYMQxQyQ3HCGAqLcqA7H7BctMiDgnC7y",
  "key21": "5wrEk4RNu2tQsUqP7bURM2B5zyARERDaMiS4bAZTDYBib3azebHBJF7AY99ckT4D8umR8zu4D21Yy92erafeC5Bt",
  "key22": "G9fqB1mXJQ5QAQxu61NQzGwfrYEbUKifmsiBSQ6mZtyWCNXkQq3VxdpQQjsGrgVRBGK4ifVbQo2gWPjfPDDvLGF",
  "key23": "86HV5qsP7CDDW6GkinRvjzr1WVPFzA8QyATLTGTxnmCkTrxb9ZAziiEeBUGUQNaoHS6FbSDSVLvinNSDrAR9H4u",
  "key24": "3S1G5MjW93ama6CatW5BkQamPVxXY5oZzxePS7fGAVbsLK6vWNx1HHEdMJMc2G6gdb6KSjMdMpvS9kUDfp258M8b",
  "key25": "235pRJbCukLUVPJhHvHKD894ZLKPfiV7Fyh2xW37uUitSKZbPJNySYDtQcaB3iX4sbKxA4d26KjNwm3brtRPPH8w",
  "key26": "BnXEyEHaTd8BybTEyiihhaFcRduhRrNxRjywx9L1syKPZJvR1JqReAf4oAF3orhFxXoj8P3Pc6amM1YrPqoadKG"
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
