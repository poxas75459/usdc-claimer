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
    "3kR2denDMhCCW5H53bzEFAqoimKSeKnZT9jWfvmkSRsttf8zvTQy7XZznckK5erJLA4ySB7Ay8tWXkDUqZRSMaMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tx67VjrhZPBGuaUDbk6nbiDtTiFPtyvDR58WuQy8WuBuM7245ExUoi21isLsAGfvXyin4VxyDqH78oxuaADb3f9",
  "key1": "2NSmPuTB3b3maYG5Jb9t1gsjakQwuUkQ1N41E3XTkVeK6ffb8E5WCdHovhXovj54SFBCPzTHmXK22C4uw48yVUmF",
  "key2": "3ozgafAgcogeBDsayXUj8WY97ndjxrumCVdrqWMsHTwcL3vUYLtTPLwJ7Hu8ouT9QVPidcuhLkMSUzn3M7PA2owj",
  "key3": "3nKZMhetR5e1v5mP9NMHt3H33QhvseQ2dWK93THJ2tokymNJ8CynCk5Qz9H6mtvBg8ei7KLdQGAVdKgmQUjJxGpD",
  "key4": "K45UDzDwoXc6DmXdrx8sv41t5FfwTJcFHXktfN3qUP59bWTmJKB8XTgaZjXcnDZYNTYiS16ZQM37DJrnrHZBLZw",
  "key5": "3KZfvjpWR3d5cXrPxW19Pp4sB7K1iNqzVA15PxN1RyFscANv5YcVDrvXZvyVPNKcnZyKrVkKbpkpwxtEn5m8m9zM",
  "key6": "57iqfVZM8X7FTo9qpBFzbtaoDPfYZ6zuaoYL4PQPjR7Y6MpqraTozbwNCbyxyvwZ5cstdbgPiZ69xnyUWgVQ57Un",
  "key7": "2GdR8R1wrGSZrYFKUGibriGeAwNghTZHiKDNFzMAtZDCfGrCttnmgN5R2C6QQekdrBVKKNAdsZTXDb5wtMALw7Qd",
  "key8": "4PhTxXCsJj9Uv9FXfmXxxEjFiozsPMHz7fTSEDqf5ZSCE545cZoVk2YPQirdsgzEHoPmCttvj6Wwrat8zDGokRMz",
  "key9": "JMqDU6od9rty25f498m34F1ovaXcVy1AUhfUDqnnGXgdUWodqRF81N4zSpMTyZtBvJis4fmwN7EzbSYnm5AS8po",
  "key10": "irLzDguhUDutav78oFdxK96AVnA9EM9jW2U6DuHo2CYqgRNW5U2ESCR3m5d6Smcs55xgtQ8nnqAuq2SD7gXCz46",
  "key11": "4gx8CmG5jbWfUuxK2idp9w9XaXD1x4WfmniSJ4XLEZkRiihKdxCmDH714L4WQwNDCph9Vdb4ibv7LM3iEg12XgT7",
  "key12": "5ocQngZucmPD2kCu85H6G7irmbygpdRgEqMuG7PDtQ5c25VYirBRbXH7URgBSmH1Dejg6yJ3JSUXCXELeqmXXnY6",
  "key13": "3qRgmb2h9q4xbxfmYK7UGSbhDyJWPMJBReN5ByuvYSgwKEFfVjrrT2HvLgQ3K15xYDr6t6cAUwwGohF6sHwGjG7D",
  "key14": "255uikM44kvg69yvkkUdQCfHnzvcKLxJc34CBMYvcAD4WCUov7cGUgHYkEsmcEAE31HrsoE6yZMEabrWE5J3A2G7",
  "key15": "xBpK6xCtg32ie2aNsr9VgTUkWcyiWGd2FeQCkqiCzTreyEF6AEKfuCDx6hwyXkY2CgkCx99BHGd4AECRAuRBEdi",
  "key16": "myz1fnwbBCeTnpYq5N2FkmbAQLBZF5xGDT2nV53nyv1CZ3C5X9G8JfJeSgRJYiT4Wf3TNokMEjBmLMQKUTsg598",
  "key17": "4CsGWHxK2kuKRE9kXgNcEbj5oD7PFAsoqhVk8ZXcWHjXXGV5Mok1CJJzQGZDLp1PpW9TvKQxUkbEvuYvchh4qRfc",
  "key18": "5HFcVfWBX5eE4VRB31JTPtdRX3V6hK7iFCuptSy3cmi876td13MpKVEoYTLknFUa7ebenQdpUHi9C9BXpt3gzxqC",
  "key19": "6qMA7bTtJzywZ6HuSvztAgwKeqA48K1mExjtQ2rgebD3tX8kJ7EvjZVuu6TQkBzMxcL4dzM41b7tNGDLtdMpc3n",
  "key20": "4CyfLJPYxiUPgNzXQxxQXEGN3bwW6cmLhDp6K7FrmMdCQjUSZptC5mzVpjcYrCZ11nSd9rMH5uhQ5USuVVL2nH1B",
  "key21": "EL9SsAsWD5fixAR91nZHfgmDT59h2RZWuREbuX8c4hrmmLQfmaKfmdSsHrUaSMt2hPqhLAzSoUjsxFtUSF7HpvR",
  "key22": "56o7NEbQGgV2KKjLxiCGHX7ytRnfC24cD9nPoSj5mf4fHKTFNaD4tmS62BHPsVLSXyCb3uG1yK39WCcxP55WeURz",
  "key23": "2Xo1vNZXWRFSXzyQ83FfYF872gMjQLte6BWCWrL4UyP6MuX4194Paye6Kr7qNmGqfhhKJwUfuQuSNai9BZdA21PK",
  "key24": "2u5jpTHSBWFNMfaTZJsCCf9uJE3GdiHaotL4Nz62vv3Q6eUnRRL8brqQ6A4NVZHC4X35jYPgS8PWf9bGrLNkJuzk",
  "key25": "2Vx4cE5WEMvPz1KSzc3ffSUeQQuvtwGgGCtVisCzVw3iQd6uu3NnXAMRvJkjrZXxejwJeNNYvim2wxJCPnPYVQtX",
  "key26": "Rs92EAzFu8pHgdiYvkypWMu5hMBpeKuXbTLRbSy7kLPigFUdojhgG9JfcX1HoxCa4ov1wkkGYAZo9EDyw5TY8vr",
  "key27": "2jzE6J5yK27PkJ2gnwXZKJ5H1n9kqXSkZZ4t8A1KN7ad5bbNqQnqsUKCGTbWmku7PYcMUzh7u1Vux2ayfpiyhR8r",
  "key28": "48YvqEAhKW4HC2UvHnd9wYP6tAhMDDbcs4PSbbGG76rQsk6ruGgJa7rRX1ZiPyG9YXNta7UsVgaHPLknWMkZPU8h",
  "key29": "4xYXoBHHrnHdQMQNs5eL39X9yV9L3fk7mB252kuzmuN3cK3Nrcu7YT9dXhtNuRHVaRH3XogTv2oTQQqNS65XiYSa",
  "key30": "2X3QwhNCCYqmypZJWw5ZHCDQykFFACcb9kjgGKqUGDKpGUWtKhe12PrJCYgGjLmVidp8x56Zhd6C82hWBY3AmbcB",
  "key31": "2rQyFo9fCgYBZn57qk6Zf5yr1HSb3VLsYJWWFx1gQPzmvoZrBceGeFToeyAPYqjbMFKrtcuem29ujTegPBqPJQbF",
  "key32": "3YAdJWatAdAgoh96Q8EZ4CbUjvc7Jd2zorejqKFscGQHZXuMrGhHSphBVgXwE74XCcgGuB7GEcFsb8qhoNGe8Wca",
  "key33": "5cxLbTogsWCjf8evGQK9dzwp8CJNfmTwNwH8CuT2fDLRr2L3RCdCoPxE5PqXZBPCoLtdjbPGdL7gUvws44NxX1RK",
  "key34": "5EQX84eRVUMn6ntdeKat8T3vmkJTg6qVPbRyJ877kFgm6xeYyjhN1tiCcgc6rUuhmxJYUxD43bjh51SeHim8SoRK",
  "key35": "3uqTfabDTUhmmTPrZqJhAENuHL2aaHvRJDPnXyqJDMdMfUeb2ac7i3bDszRhhBLYoR6G9UihQxh22hA3NRezWBKm",
  "key36": "3Vb3RqegRArHMts2wVNugJB44qgBHpmHBrPkd1NSTryTU8AZKVLdNeLCYU8hCAa5dBpTHxpsLfeLgzMfCKYoY1Xg",
  "key37": "4sTdxKDzD15MyVKLgA2fABcvc5dW7DeZD6DuCz6qas1ADYresUwcrRDRbKk7wL6C33abP4FeR7oQbmzeG3wPWYqS",
  "key38": "42EZWXa4rLRXfz68kKDCift62gp6Uwb8wrrN9oyFML2qZCjv2XK9vZuqMAQYgu8ABYEmWcsVsZvh4KDwWYqpuei1",
  "key39": "RJ976NT4Ckkcbg5Jm1Bq1X7vTTqNj24TfP24pNmwc3j79ebitC8jcBsucEXcL3rKZgVXP5bbeusPFBHDYxp5Pzn",
  "key40": "4ygRzr6yxoBmHgxmMVyssmToM6XrTUS9Rz3D5cUShQyF9uZanbhzUy1zGEyxc4xWDGPV62PkeJuX8T7XXQeQCuHe",
  "key41": "4s5cN2MFMvzkPqYPuMGaV6nSrhEvUWXuYfGtFPAZTtUd3A9mXWN49yRjx468wtCAQmuQwvYaE6aoQCkyfpaPb6nn",
  "key42": "BicFjKbuX2EQ2mtL2dcqoxXarCc2sYAHqAGsS7Wh6kmb3UZtPe9LJrVaW1z2Enrwuzy4rPPvKEn5iTgRi1Qqpo2",
  "key43": "cCGtQqTntHZUyyWP1P9ma9CEx6ig9b5C2K8nz6X11JtRMkhx1YakH94oKHQ6owKRYAw7XsMQuY4e96bLNHjPUNE",
  "key44": "5XDJXxHHtfpB2nvHkrm7Yj15JBFz8PxBEEVWq9PqQFUyLGYaBtQJUKoBVrUinKrfpPvNukXcXdxtG8Eg79K77pPk",
  "key45": "2f7NFuKpkznh4q4jqv6PujAy21v2qrrg6tCebU8mJqwVgoeSHMGhuLSezoEnrh3ET7mJFkVJcnY6iL3qWs4NpW8U",
  "key46": "43tHZzr24hfUNmufGiDbPD3rmD1h1XsexAeygdYtF4FvcFFof2EiLN9RkjZsfYtj3QjDaYmyXkUXD7ob629ytwYA"
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
