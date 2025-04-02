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
    "3sP5s998x3Xzq5vtZvGF2LTs3juGs1f92n6gyipDPfdFGzLaDcV4xsWb48BXVXeeoqGgQyRhQ1aHK56nq3thq3WR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PoKS7wSftdwrw5BHAKhYZ1HMnqU1o6sJiSEc7LVvNhEfPoLXgniNhorerbgqwbFqSLuGcAUs7mST6qWLYToeK4Z",
  "key1": "3mP49zNfBzEV5btrUUGvWXK1hNMnS1beRPd8rd2ubwvipjfSHpprcpa7rrBRLjEmvvmsQTGCrkP6ZXdokCbs5eXn",
  "key2": "5cFx6pxo7JPpRc1u4SkaqtyfMtvZSYmjfzS8FzbjYXQNNTNWpttRo7FWQE813en6BUUEmyY8GQAWHjoYQCCeVoww",
  "key3": "562LC4KB5VZrX3GhtSwAxnJ1HqKhK6nsz8adrX2EYKwyLBnxDZnqP59ZKdLsV4yUbrzD4fsmvKopiK5AMWF5T6X3",
  "key4": "2VXCdsHerbZDpR2LDt1qwmbnP7hiQ7u7XwJZyhZ8fnG6x6psRVo6AyVEt7EDpNb9rJCWsPpbSci1sAxW6qr8YDqN",
  "key5": "4t5BapqRwfiRdRsdzihQ6a5BBT7MAYdqWL6PopchRmYY9EMgffeeFdB8Fma3AHgNwLj3Ed9AQB9f6Zrwj15HvtCx",
  "key6": "3kpES1m2NHVGoJKXWLKdeA397rqkUUD4AobWHmtoPU7M3ysbq5baGXY6J2G25aNYgCGvoCkdGkuCWF3zMtB4QM83",
  "key7": "5Re8kbntePEqABS8SjsexuQYpb9uAXb1EWLG58aYkxmXvoZrNgsVZzWfND6zNe3pjUieZkaMZvqJS6rQCqv6Ltma",
  "key8": "5fadzce8i2Cy1ocNCTYPfkWPKZCCm3yFk36F49bvhcJSGUwFT3QsGEbZL7SXPYRWx26LwEtHufUgi4eU7MqFf98E",
  "key9": "55irsc1WcVW9v555Aa3CA8E5vJc9QVr2zmtTNbiYqAVmZx6145ifGX8QEsHYVE2rUpeyNeRMdRwwBXDY7fqknDv8",
  "key10": "3oiitEZ6cDqfpAvgoYCoX2K82RCCjnMZX41pC896x8WETPyChQkhiUkFm1Ui8d38Pj6BcBrugLej6F2yYu8Nu2sX",
  "key11": "57zEYjFeBSBGn5t6hRfyAbexZrgm3qTBCWYgh8FSZeo1cRABL23srjpanJp3rBndRa58d1AgJBvegh3azGCe5RoQ",
  "key12": "2mjnceQYitCVv81xKjGHA2zc8cvuxjtT513yvS1YKsFhnfrXPuX7ukUuGMMpnSomxKU5Y8ynEDQDPddVvrr6m1VM",
  "key13": "5m8MdVhD5mDLLE82pz99o4XaoLJbBZTVLWKrbQQr7ezXQVHppDdjefpfhCjjjR8RFVevamKL5NyGF9SnHnoDYNzp",
  "key14": "BLq2yejjNfE846uEdYHtfjj9Wk9dTNZhbEoNecuPJU4bMr7kYefFMbtDusbNaCiExGFkTbUHqCNyCyBgnHkemq2",
  "key15": "27HCbNSSB3MmeURY4Z3TaMHJgsjuoFEJdRELDz7xnCCBZavAPK8pfEVDCCc6qkbwTQEHYTGqe5chL1f1D8Xtivq4",
  "key16": "2fTgr1prfexM6aUfSW8bnkpHuG6snxL3B2MUB98pn19CfihBsgAxyXfCjwm3BJzhEGKqqEVEzKnp58ViPmqfp4SK",
  "key17": "3XNMn2UmKGCZTZgfidFtS8orwXEsHxcw2rafCNbKzLNcYDKKXqpPQHzKbNpNyVRDrfdryn5ZUqVHSZZNtCFPqiWW",
  "key18": "3G6RKj7zqRWCPRM21bJqiAhJN5U3RkfGjpCaivu6WG5ndLd5sLjjDP1u9im9jHiQkGuPnn5dFnHv6Y2PRuLB2zfe",
  "key19": "5CP3fFMgjEYUzvMU2Hmqcju7kfN4FHL5sxdQTV8EyCmiuMT4Popj4NfWVmcCPJwEu3qWHwLaCqLcMBbJmawNMnR2",
  "key20": "3HyEUmLP4XVnQ4qedFRJixvZsoGapaWcHH5M96zeZTfSroheR9D21MvC1BQNvtZzsnafLdGqV5Fo51SCoG9pGLeZ",
  "key21": "2TQDNxrScLEk7A4gg3G8m1FycYmVRUoRCyR9Ey8CWy4u9Hd4rjf1AeBEJA71NifRoEL65VeqN6QZxLTdEYr8xCRL",
  "key22": "4mJZSsWm157rdYaXPoB21FwBd4cbxgsu5gQoV1myt9aRx1BwM19daxy6ieyRBbM5HXtk5x2yYF9KNYjAGxUUmiCy",
  "key23": "4MeYSmNv9AxQmGDaThu7hCbMBTEjmR3wpDUvwvcYwaKNRfywnfpLJGf6FqK7PauPCqNWsF76tpAyqRDWsGgrG2S2",
  "key24": "3uaVRuvm19zcPg2eor8aAHSM62vLx9n7nfPxEvGJ8A2WHe7TeWv9Wke7kXm318d4VRExxrr8Agr844kybA5u1i9J",
  "key25": "3ze9WvUzv3pqJQ8MSZ9yVxCyyb993Zdqk8x1LkPCZJmjNHAJhncL4Z6ze6hE9m4Xpgv24nneVCBPgKk33cbYpuvY",
  "key26": "5DGXHToFacX4s2G6hf1rtazYAHWjH5jqMjA7hMKJn1asdQdC8DVsWotY3grcChf13ZCjRjwaUmowV8K1KowAVqyK",
  "key27": "4LC4Y2XKA5nmUTpEwCW9CGGCe3WXwCzho4Yj2v9cN3MQvTq6JxBVvGQtBBd6gXQQcDxpRMGLwbcxjsCfRcjPUkaw",
  "key28": "2bfDNCuXHrCC54XKg3JMode7p7SYpFm8EE1Jog3gkvgMtv64TEyrzqfesvWUbe4jkGEwrQ2aqeYf1bfWQa3nmbj6",
  "key29": "4oHokNkKBuLfZTfnK4tuLJZNSm8acuSFLp1hwWJChMHRj8z58bDgw3QTjX8YUgBBX33Qqwq8HeCajmbyzjeivdfe",
  "key30": "5sRtrAb3WezRPoft7Vh2PGX5w5HZR2LuKyaAh2Mu5Vd6wK7CvkwEC4uoejRipJtfjdsmnKxNUnsVEMbopzuJwk8f",
  "key31": "2dUain5fZTKgheTSf3ejTzedB3u2gTTUWD3FeWq94zGNYrv86rDcMxaqoDdJ6QR3nE3aA4MS2ejLyfa2Cssz3r8U",
  "key32": "2v7pMHYFPmYNjT3SEAqXoJHbibbsDAZmcavH7ASJmqnP2LzJFnSYyDpwSWoKEhofjacshxdaAcVGYbXzthCU2DSo",
  "key33": "3F9zNLiki8v3gbzTX6WeWWJ57ZxK6pSh9tYB1wBAmhab3GDCPT3TPEVE1MQE1uCaT4MXSoh68xJydUcd1PYJ2y22",
  "key34": "k1htzDfpyruRMApGYUQfVsPbjX7cdGS3ztvNjiDWHyDef4HEbMeNswecyhhT6ZSsPtTn82fEHNj5M1mTo7WcV1y"
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
