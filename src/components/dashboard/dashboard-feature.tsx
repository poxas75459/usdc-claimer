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
    "YccBEZApCGjecXMFSETYLPwr9TXgWw8U6aSGC47fZ7mteCLfxJ6bb5MtFYjLqpCNdNgnGkpjMuoB6YS72SQWEMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DMRavLg9zHqGDaNRYBAyaPQK4kwyjeDdMWQkxbtYRhRY6t6sDr1Xmfcug844SYpgRouHv4Y3LfNrksm1Kyz58sH",
  "key1": "WZQSrPVfmPFR9L77iAVxMLMiPZsfYV228Z6Q2Gui7Q8kXJZ3YAbjQpXYco5urvcKYZTbeaWbCHK86yL9GRqecnS",
  "key2": "5594Tw2ZQNaQ2RsSzUW61DZc4d4r3m11jhQdQXBTtEsSxStY8izwQ2u2q9yuc7Vy4X9muwcydBsdrwEpFYPeWo9N",
  "key3": "49Cj5QYJf5sLQPEzKVtSULZsPzkcZyTLDfgKrhumRv8XFznrP34wbR49LMco9G7eNCRSxN9Jcy1kbaoS6pASUKKy",
  "key4": "2mNqkGuUcQVNdmpX7uvHY4GTaupBxC1B96DarXVYWDFszx7cVVzFBhjJu8yw8ehWBQpMFdPgZR5LHDLUwdgDPxBZ",
  "key5": "4u5aKWrMqWsm8oUjthcHcGR5yuW1jEnDxaEG6JWVk9Lf5My3R1X2BFFjfGmbCc5GNNKy7qndmLS5ggXnXdFSjiFS",
  "key6": "5F1qYzCsRkZjaRAeCRz3sRMFsHbjYW9TKJzMv5NzTm7j27oivmYHNzdEME521JiFDnzG5sSUTEkp8j1BHk6RLuLS",
  "key7": "63vCtLNFnAvrvncVRWf6v1oTf1K7rm1RemCzmUoQPtzJijrD5stSaJa6Mg75396W3NABDiwfHjiqGnf7iX2sgxGg",
  "key8": "yMaLNT6xKFdazN8mVQ7ThMRk34VXPncQLR6iq45TYnamEGpn7FTVzDnGbPrJeax2WSkwEkF2L7vnKLbAN1CiEg9",
  "key9": "Xnj6rfX6qifCExxoDokMojcwnaegchQyFZMnZ9sfUs2Cu7SCQQHdzPvTKL6mSwPmdP6ygUAVRZCky1Wury8fTHx",
  "key10": "3R1fxwKKWb5AXkX54L3L6pqXnM77Kvqd5PNq4ANMZYvr3bZXu1EsbJRabuy1XjK462tHzDMxBLgTB6nFGVeg9eDQ",
  "key11": "4mRJ3CkmqV2s5nu52WuASx9atxZbMnUC6YUGBhEiREtnhr8AskvWuGPZqJA189URxMFiQDitmHRJTkhYAUfn9yfg",
  "key12": "2861bKHMxnSAQcuXdbZjDNNqyjSbLyUZvLkAAVanbBYCqYNDhpx6MH1YwvXwuT8LDGuLdz7LXAxWjEvq5poG4JUn",
  "key13": "22osBKpeGNk9RZA5ow6ePtx5ZBb9RsWPzHdEY1h4FgkiViJ1rMjBrgddA5tN7Xcxh2nxqanKea5LXBkhGXtASpsY",
  "key14": "3MyMqUCjrfaEBv2WVdoUV6CwbbtQMWEpD6oxW5kUYKJX5UXKkaWW3jUG2ruV55yo3tiaH9zUgVknka9jvW8UHDgW",
  "key15": "3EeTdVXamPrYVNWsnFFjWxqUfAARv2LwCuziSQLcASTfZrBAhsjzqNbazjaoe2B8AKXE61dWjKVSv2ui4ENnq2sP",
  "key16": "sukQwboNRhSWj8yAbYeyZab2piMrSb8AUowt4jfeEwrCxtHV1yWUzXF1x27D2p7a5fhrqX2jD7bCbRrPTwpppGn",
  "key17": "cNCvMS1xVMx8ZP15KPbm2R3ZVGPseGnCwCQHehXUQ6KsziNmVn5KhWGqSYooMahd1W1mFAZFQzudqLRuj6i5CSj",
  "key18": "4u4MUVBmgpJmzR1A5JT98e4xujqHhaej9XkPV1KZARVjUoTiUsYUMEnPGj4ePx329Nk1KQshCVUqXKY7WCYQbEDc",
  "key19": "5LWrgsT6g7G3YEztz2bntTdjRx2heS8MkXKdfj2PaHqCVMsxuGNJQogXD4U7Y3eHGTF9pHo4EboFvy1kNUUAbqv8",
  "key20": "46euR4QPrHqPMMmrBRBGpqWjuX7KpqKk73aSCDJ6WwPSvMDuKrbAdPzLfNyBuLAH6EjyHajyxRDK8MN2gDgPoMFq",
  "key21": "2KMwUyX1nJcL3wYYvPsaNBnZQdrF2tA4C3TsAJMoiiE7AtdKtQjo66LCoJ1xydeGVqz31VKj3VPuJUQf6swhBSrr",
  "key22": "rbPGJkxPw8yEhbmzC5rhW2wmmbyFR6sTjngHWgj9mT4FkQnkGFyiBnmhQQJ5gULjBv6cTN1suKcKZf7nWCQ1Zd5",
  "key23": "5LPg5cjaBFoKJsRxTHGCtuSXYephfpuMN3EqyYY4zcDG49hfzUHy4jgwf1v7s4Q54esHk2q8Fk7R7bDjLAxXx18Q",
  "key24": "3XS6xDJByiRGWENRPfYdLdAT9FRLhYM6UtXKLwsKWK7UzkvYn9EsYin4C1t5bjxyhXbJfMaPk13cKoBj1HptsrZt",
  "key25": "5mo66AnpCZS2su4WQ5mUnJHi9pPnLV1jNRV6Jhu7jdSbjqC8KejyKGjQHJKnxQpJyyPTT6HzuE73ni6ycxAkNFm5",
  "key26": "4oE519A5scCKji8mo9G2EJZtQyr1WWXzFx4MSn4cqLfX2TVA6LX5wGYiuu58R8nW2cYz14YxrdbxV6c4VPEZBC8A",
  "key27": "9mJFJVtoLpVA7eATWxTjCVTUYL2QFidaDrAtoUs1miLXjYJfHCrSJrXLaVbX6jzV9RkemQ5ojiBxaa4kZkdLPTW"
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
