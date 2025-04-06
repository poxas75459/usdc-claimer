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
    "5roe6k4T8HnQQoZk1C2eDf4CRk7ArZdbyvYCodwDqBysv3eT1t6Mc8FLSN5nG5oQzmvc8JnzZipV1tHNkQQZ8xPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8MBKrLpVm56Y58q4Nob9Cc6Qc67BSFcj3vYhzKpaEY2hxjNqVhsAHZJnzU4Nj3kWf1Wx8vm9bDWKufTZipBCip",
  "key1": "5QLU396e8h72tyt4o7DrguYWiuXLp5R7keabpk4LGPcriuFDXLeYqW1UESispy3rUTtQTHqwC9AV5t1mRWyEheAi",
  "key2": "3xFUCRNGyZjR8aBtDk7PG4h6qnXpN7LeUGjbBVNnN4JKrAbsGoqRWp1goQnr2pszeZ2LjX8QVTPQBkuGyBTRXLNE",
  "key3": "4hGFGPiuGjXhEEX9CxmJ7RNkDBWrhJn5rwPj7SKsNv22NwLkGH4sMb1g3yP8fvDGXoYUdhYhzp8s1yDREsYpg4Rn",
  "key4": "2BspbSCLQAjJukWv4BPZFKZHFFbNiHxTxNYnzgucA6k5TfGJHAynoLhjvFjnvtQq6zPbQNL1iFQz9yTQeUz6wUUh",
  "key5": "5m41XP4J4jDPmfKMV8tpHmWos9riejJKpLQtUn1wawonn8odkXJsPkxWPFV8KDWvRks7qYyTRqMu1YbA9x1U4LPG",
  "key6": "5YRHbEAJVeSnBbXRW3PUjH1wQvscDgkDohB9SVrdZJzETr7cfKYAgMww62P9B7rRrGW7DQhY6uB2tu4mW7r4DLC1",
  "key7": "2MX3pZKW4s61LHgGuNAAHgJH9u1VZdjWSvTLmVhiP61Yxynno2XNSNA1rHoqDJNAUQNVn4itnKXGYSS5TYkvMSqW",
  "key8": "t27BvxgxDgHaqN2ucJCh6baZyM2i5nDFo1ZAyiWM4tAjgdm16qJHNFSzip1NHQ1xJkrqXffBLWcWzKbckzv2iP1",
  "key9": "3uYvHw2SRhE11HzeAJ66p2sbbexZT49pdLSRfdUBnkg1XNo3PNJatZP5ipHR7CgjPTTjWitqxF9iYL5gNX5248pL",
  "key10": "2XwqnHQygVPzcYhs8BZHx9B9YjXwLGypsKJVdYWQTEcatztGPsnMLYTZ3t4YnnP7XWo9Ku4Hga9AJHKCYYFXnijk",
  "key11": "2X5z8cKyZ5qto9PxK4nTUCH8WLXEhU5DhDckrNTXk3DwM9chyBAKUd9otudnwMXA6c7RhADooDLxJ1eFyyu353WR",
  "key12": "1EWTRGjzLRhiqxKVnWmmkYJB6s3mbDgtt5qgTEHWqFafaSS5v6q48VGoB2owyhxv4XqhP7HG6M36pUF2nnSgiyd",
  "key13": "58fnW1zJJdUAkbbaiASQyFEZwE54K3MQ8u8e8GDTytmjRYgLXFQE5BQvzDctTbGtaSCezGx5XpiKKpvpjLsXHDs7",
  "key14": "4f4KNdMJsAPpgWMLR86wxEqs4UeYakbttKcLpJc5CFDs5dJdzCDfNVFXQTcicWCGhNpRoj1kCyQmShn7EnmciWeB",
  "key15": "3tviDRdBBvCdnMHsY6SWi6dkboYwBiFr8t5NYj7HPzGmQ6JFF71TMd4i6q9rykHFxqXK4tdBedykZXgdTW4iEbgq",
  "key16": "2MFToDTDwZDwXkGJeYmCEgYMX6sNZeJjM4vwKqeR9AC7Lr4vhPnq8cvKYQAxSudnK55ncigqqXxEug3A1tnnh7tW",
  "key17": "26sjXSmHSQw7o7kavvRTkmpKdjPNhUuCT2t73kyAb62GCJDCfF8JywPdJh8pPWktkv8Nra4KE2kcg1LkBUaRTq4g",
  "key18": "5dNgGGfmFKhtoJztabC74LdHSdQFWT6WwPqWFxRWRWhiYim7eBVamK728GRpDGpKeTZDPxVnviPNRXZBKp1AGJD1",
  "key19": "2dGJmxfmoqwtu9kKPYzUtcDPNRJfgfPrrfZEg6kYffaMpapJLazwPZMq2ULfB6kENkkqHQHysiYYpWfyfaorQK8i",
  "key20": "2MVX9ZN7VfzwBrFYDQY6y8gS7KCKg4f5JhMhqXDgZWxWu2c42oSGhkhvSBMuFZvkb8PkFE4DzDa6NoK2psLPUwdo",
  "key21": "4RNf6YLn3gk7f1o6tgfxAdB1pDsco5D6d1H24QpxMpwujWQk7D525aTfN9bpdFaJT4NdKcCVUQBxFoKpxLq96PJv",
  "key22": "3WbHmPA38iDewPhgf3iPjPJGyCwscRKthpr34GTQubKmidQWibYqmdU3JGvzRqU39JgV9tAtAaaXFBzcYUXV1YJj",
  "key23": "4HkhtV8XvC3fNyvPXed2c1mp9Rr3BmbjErZRahJ9dkyMpo5Phy9iNQcqnBh6G27LUAG5h9Xxf22ASX5XcSpKaqib",
  "key24": "5WrcwN8PMMLeTViRsPVoF9rmmXHJZt5q2Lg4AZsqSaZnEx6BpGKGsP3LRS5GQzWkFVf5oE7NhENZ8h3Fo9NXPsDA",
  "key25": "TMCGvNixX2sGn5YwNLxwUcpLgGeKDRHp1APnvogEg8V45R1NXhREMHccCjnCWxJKLMBV2R269usTud4wDoqH3rR",
  "key26": "egoKUpbeSoBbPKjFK9ygwJsNEkRdwQv6K9tNPYcDHxCyn5YDfrbZNcHubVMdiZSS9bizhiBWyfGhc4fzPbek6GJ",
  "key27": "wQrvC2jBpXvvzvawxuzNB6o1sTujniUT1yLuj4t1xH8Yyn7oVs2o5VWKw5jGz2r1GfsRNFDX5b9JAkGF3QU9fD1"
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
