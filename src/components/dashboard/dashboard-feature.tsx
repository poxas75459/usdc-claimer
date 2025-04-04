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
    "6PQdyUz6ZGjLZfk7ZtnQhzcgZZmBZKYNskRobTjUpH2ncxd7BMGp5W6vt37bGhsv9nXEccehfzNQ2f7giEoNB8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "otEHYcnaAWUssFAU1RnzRkSA3oDVts9AATcQ6RiCmBxUA9QcxaGF4tDvP9G3C1UpptJMG9KP3LUMH7touacvGp7",
  "key1": "GYDxEUnQJzfwn6PZ8khpoWrJF7uXyGSW2u2gycLutPWWG1xbEGCmnVP4Dm1YPt4GEoTnZgQQnQgSjMCmRt3fdPs",
  "key2": "3utTyCX9wAndmmQMArFCvk4VVdj2kfnBHCSZdYNX8TM8zaMfBWCrvMXL4iojtnJW2GgygjMXegmBgM8B1eQuww4X",
  "key3": "jrF9mBXGbXtVA9QisugTDypT2wkXtHC1FnAS6CRKDZpi9oGEXW1BY1mMPkDFQp2xqd6KLiPhYceckh3ZgPQk4x9",
  "key4": "21eeNmviUdRqPGj5jCfnU7MPLrCBXPeX646TAFST9W4jzu4r2cnDLpnnTFh5axLcG7bc9LN41vrTsXZij7C2Lwd5",
  "key5": "TQwYx2GssKpKg4ntZrqZDzq1zH1jnwcMvCGw4CHQ6SrS2HC5kamE5wJVFnzoPXLCsWzBbaLuqLcgR4jzY22jWtP",
  "key6": "GvitzTQf1VQ95pZg7dGXPmSnUAbhTR89xtoyQQhunEVB8x2PaHvpfZ5ChQE43rZWZDhnrSLHUJVvkcoqTH9g68Z",
  "key7": "2ky8y5ejUwf9LwsRfXqgdi6KnCqHrMhrMnuC3MZc4JtZVqAVKbc7fCcNBPhW51JVVsi4XADzc365DoEs39D2KpWn",
  "key8": "2DT4f3EGUkYtTvVRXaLQQYJ6LypXeKxzpBx9zHUpB58HTpkMSuZaYFqf8MCZoqFp1fSAWRKDvKCBKPFh9JFBC9Nj",
  "key9": "EgoLqtMPMaV7qzzFv3zMEtSPHGQBkQT1tM9nqQnkjbVMPzNfbLEDV39B9NZFMHithMQqdxUDqoLfW88czvwqRh1",
  "key10": "51FHZkSvy92yh7YwV6yKF4SKRZLALyEJBCWQZN1wENjDKE3qhs4SkDVJ9rksaVZoDfqqYXMDUx3oJJ6gnM2hgh5A",
  "key11": "2pXfrAKCckKFcp3Xp6iLBCYe6GdT6CEj5s32119KcYWiXL9agpqRxPCEkbKd9RpRjcfnxk14ZwwKPgSYvgWmLH5n",
  "key12": "TVTdXbP7mAx8TmVEfmQdEDueegmsyC8R6eYhPXYaNUtMYZVW5ep81fpbk6wKW3L12V3nCnSrwLH4nnDo2g5kok9",
  "key13": "2mRnddtP3rVA6KJ6roJQqPf9ezys4jad86qjsqK3mJ8vcWAJ7G7TopT3jRDViEpbQNVHp6532HHxXQa16ejp1ktb",
  "key14": "5DPCiQCpaWNjxGTD1P5UvtuoZkG6vnd4f11V7S66hNboRhpAWbRMFYLDcJaJL8Cp9DRwcsTS3S75qVFVj6ciUWEM",
  "key15": "4r1ew2swLrrPsMdRfgWbVDej6nqwXV2f8opSyKrdjqi1UuTQwpVeo4pzrCvdjHboAoh3pwd4PHJznuwLjGnt3aSw",
  "key16": "4bbpuvd7D45wUwTQPx65yahAKKDNLqC1EePBWBv7ELqtXVKNaFNvcmKAQVKE3tGTxjE6srmnAv1sPPkgdG85RFac",
  "key17": "4oGA2VpRJA8ZiTq5KEfnU4fbTXBB3QEAv2fusFti9gnwywgbVNACBunPYAVVmypMeBZVAtJd3qUVqvv3qKrZN1Lu",
  "key18": "2X2KWH8k8ftowvvMwWuwec423HLq8aFnLjYTf7Ja58vaoaZVXSFC9iEo6C3wioeMwV8cAmxF4XCXkA1YmzgrSbQz",
  "key19": "48vJwWij17SyfX7UsYif7Rg5uBm3Cgxr8XAhWNuJahWiJopLhEUHzthZxP9RRSYza7EeGGqiWoMcz64pt5vLfKiy",
  "key20": "5J5oertscNP5vXbiww2kDAMFYDWegcU4WRCoVgwTN96dZNYaBSwxGZ2PgiJJ1pxr8Pv83JBtWYths89iMEMadN2j",
  "key21": "4iChZ6eZaJLwZRwaWoxUdYoQgRfH7qF83pBEZGKNzvvLss1B7NzFw2gytsDhmnRwWKUG9SDsCRSYXG333ZJqATbh",
  "key22": "fVgQq2C6tu6Y9GFjHANVMR3DinuS9EgjMm8EAj8khMdsCd1sMhim7JmTwuV8yM7Lhornu84sPmgRjzfbvqjTNq6",
  "key23": "rVDQUapYQTAduk5EwFs2MLxWjVjM1g9H7hw8Q2hKc5MiMqLQbRxBYHUdfbFFFmJnDDDzU4CL2ST6JFSRaKrbpSA",
  "key24": "RXCrJGpdhQkC9pCf3VUaC1eqwnuKTWo718LoAySV4dJsVNgvApqk6BRgj2CZcRkVVNvvDz4HSr1QtizAi23AJog",
  "key25": "Y32QfwDir8RkhaGYREwxFDJhHF4SCk5LA48UzhibdqtMuEXaWeB86u41QUYcQyM8noZCD5U2YxzmraFGKND2mND",
  "key26": "3y3tgRrPqMCMSECfDSpxmvWeVFLBWogTCV1VcTd216A2EkvsJizKB17a1CmrirfHcVWRMPEaJHeDR9x7jqjwsaPG",
  "key27": "5oYkzqQy19qsgJQ53Rr6NzYgBuwu3SSmx8hevZbcwq8uGZcDBG9Nu7ZuBuXxybJ7pzPqx5B6G7xncLBQMPEjc252",
  "key28": "xn8CnrFWBGQ5wGyvuppcs7H7wWsfmdUHndUJYvRho1STrWjuNgJR8MqcYVfB14XTeqaybuye6fAvAZLHrQHz6Zo",
  "key29": "GtRQo7D3tAnqsXqnPvP9G7Cg5PwJHNQ6w4mBZ1iFCp49sjw26GZwsQP2f8Z3N925Ydg33p8TVZJ1ireAqbwGfP6",
  "key30": "434LGLKvD7vcJj3MqNpexhGyh5SuoR1F44H4KxQZDWtpvWxDpzP2iP2AjuQB4cMsdMU1sv1C16FbJhsJNm5CfxbC",
  "key31": "47yW9NdhafhwbD6K3mSh9gwE8okThHcvPjBvfiKrV5Kp5aGsqGM5ahR8hU2sZyhgbofDKttU7GwUaXPdgKH8eswg",
  "key32": "5PZopKg6b6gYvcyjrk6Ud2oMRx2kvSxHGnTxLE57L9UDWnkmvQHBYHWBFZDSPsvgcHvXbAe2zbnW5YF3FmvXoiTF",
  "key33": "4CmkXJjQNmvhXnR9ZstdinWgUupvfk5anE6ryPm3dxbKwps5rvaL6YtxguDmWYVNborZC9N5DcTSibMaWkLagYob",
  "key34": "5zNS3kt1mASv52c97tiEA12Eix7mwfD99iu5GxQJdYjJjB7oEvBdfq9tDSEmoBGm7acFm8eWzJPCKy5GEi5tdjc9"
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
