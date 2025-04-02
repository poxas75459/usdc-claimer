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
    "4A4qSZroTvsWqhx1PnobdUCKd2CiPPAm384VEps9rV29qxpzMmNEai8pFtjKjnAxa2qYZsZb1jqsCN5hcxYgEQ6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PRVVBpwRfzPAZpCJqRHb37DBySHyQti6RagvGWBDnNYSumi36UNKzdhdJAoWjHEuWsVcNNm3RfjKSNsJqvBZB5A",
  "key1": "2BsedoRWjByMF5Eq16C5ThhN3CZkTLhDLP2imBBPuS3TVhRv5zJFszdQPbbEKXdHcNfjdKZzEiUunQz3tk8sx9kg",
  "key2": "2WjnQCg3FYXAcAgofBYh5eJJmtoYu7ZKonmwWeRT1pNzM2Z9Pf146bZjUrSpAhw5jTkRjVErEdWEVPw3X74DhP9o",
  "key3": "ZhfrdJNmsh7mPLjyWTzgJKazZbCyKdSpqTo9H4fGPHJy3cRSTR7FNyVLhpLMHrcReu8VfAPpiCAKmhySSXkx8Bx",
  "key4": "2M55Q5ngnNhnjTezqZJkYoUj8UbdQDBRJ5ECpLnghkrZmv28DkRUQEJJB4JzUpwhGHnMBiVUmGq2SUYadu2T2fzm",
  "key5": "2MjkAceoQ7Dmb5hs2VtwBdvBpq8pFAAZ3ohQkwMBvmM1ApbaLhbCrtDEWKapC72tCT4z9Pskgg8oDBsG91ojNC1a",
  "key6": "5w2N27jQoUrPEce4fecUbHKyEyDsno48bGavikgjmCVsybcKJYEketyp6WFbGo9eG88s6MhhVmjYJdLm9Kba3uV7",
  "key7": "4a8SD9ZNRgMMp1gj7dEA2bvS7i9vuLzHQxMwh4VfGGrpmSZEL1na3CroMNnuzdedknBHsBJykkJDFURyQALox5Q3",
  "key8": "3RWBhra1uNtdCKeCxzeBJbv6xLox5quHxrPpkbsYrBjAwV8MGWCYE6Qg53WY1dpnyzfRAiDWTyirh5CDPLaLSWYY",
  "key9": "54SLex7VjDGS3SZNxCyi7iMDxZZsF34ekffwYfrKC8wzRywTYid6YxqGTxgvytgGMtw7vocrVC9Gi3989LBUMVc3",
  "key10": "43DUSZpzvjEBTyu6dgiY8fB4CSrfJ4tdA3GAptFeoRfzFgv2o3nwUNZPLyeYtD7XCtFVmi9WTbBVjuKEZqynwuUW",
  "key11": "5P5mYS1JppZW4TKmSN866cRQYGMcGMZbFSRMge4gdwXdQQPAaZ5Vk3YeR4y1TcRmS5zsLfra8fjM54kYmxdsk388",
  "key12": "MJRcqyaFhKi8V9oueQXD29u88kccM1aEZaFqUoUSP8kNvFpm9HhbtSeh5BhSWhGtVf6o52ASYcUiyoUdCo3NuG7",
  "key13": "4xCNHRn5dNHw8ctNkLVSk1rBcvEK19G9CYsh4Z3aWyVvBKK6C6hhWrjKxSXjDAV3cvXo3iW1bmyUWHLramKPNDZP",
  "key14": "4RVte5UqL9AzHL2agCP2peaMNJ7oUjxhH8zUv58WzahRGjsNLh2vAvU1nPjcCZjRwKDgCzy1wpwwGwsDMrxr14yq",
  "key15": "pkBSZ1pBewW6ftWNRdfzvzy7fsymnGuV5ArawjKTfUJwcD3tKk6AEDGwhjK1rDWtKKJhtH5qfRGkCPvEDHsTcet",
  "key16": "66879MaQLW79AmjjewASHwYcysQwYuc6YyPSfdHx3hrkmAVFvVpxPni3pcfMagdo4PsRxDofJoEVDG36zP27XNVn",
  "key17": "3BPai1bHYKsRTEL1qfGWdsLVsuTz5a2AMjhPJAwVD9en7sgfsZ71csLwwgvgrRrLGJFUwEdc9SJDQ6gJKQAzRqHG",
  "key18": "39cnuxEA3de8ySpVVbhFWqssHmnQUHtd5Mdkuktn869KAmJchdWnptH829Nz91zAvmkupuifzsSfTaqp265Mxdd1",
  "key19": "4rtuZ4GaunqZ52TewBiQu8yw8o5Yn8ptT6vY4aBz7XhnffFQ2zhtf8KkZaQBrUA9QRSEkB7M1MHBF3WHwdQBapc8",
  "key20": "23W6CiKJcTfoHrzkXVzbEX5N4eycJQmwfTrfTDAJK7F9CKMNar3rXxT6UvR3fD9uEB8oF4v8pH1UnGNCiMN7aZe6",
  "key21": "5hTX9bzuEXxyBU8QumoKKLrrJjD1jxGFGW3eaSMEaLJPRg7msmJqgUT5K1w188Qz9rtfEQwZJNkNLqQXNZN2tYDz",
  "key22": "5HvavosHenoyLnQiSZrYk9ZouyPQVF1mpibwqPLgBWXCJQadNDZRh9N6oaWfALUPqx3s6Lv2PaaskT9enG7DiB88",
  "key23": "52XpSitHav4rn5fD2ADrx37cV7GWLZy5wShAMUVaxbitApVDS42WGXq6pcKgQTv2ugUTRtaqcnbie91nVR9txJL1",
  "key24": "3zmVdFmq9zaBUnNNncTFcdkuPL8VHQ4LNKeMtdNuwhzngQQtSfwbruDPnM5dUcHVE1UZ9ZLz4W4vmF6uNTwTi2Fz",
  "key25": "4xW1Qr8WNSEAHwPUrszJqD3bE3Wcnhj1dCyXU19hhoYPK2bFFKo1c9qeELZzBSJJyap268PfisgGC1LitWiF9dKF",
  "key26": "5ZLUosmP9uCQKsWyU3v2r5rpAZBfM9CUdiGK1TYMuX6eDYf5HJWsoBMKdzLa51s4vQYAj4Yk4Ecq7uQhVztjCvKA",
  "key27": "4RdSAfsNMfS2WCFqEX4sKwGJhC37VuShb3skgtcxzwHmMFQLa5oxysCGPWJpZzTwqHPC9Nd9APst3FxuMDmGE8By",
  "key28": "j29mSm8X2H9gWoUTLwmGUoc6EPuLcsKUwWsMfMKK3PeutjN9FeXi2WysghdhGYiFpuNJ9ayZcus9EEJmPbEfxgZ",
  "key29": "vAnjrDs5byfBFsumeDzaeuQVGb4LY7vSscDdVKBYioj2s7TivPDrKLNNU3cMUbHKBZoEdoRZ2befnjpAg8c2GVr",
  "key30": "2R466DBdQvxnr41Xsk8SDwowhfKvXYZfkvjEhzhL5dauezUtJJTitsdvL2nzMRgfy1QaQFfT5GdDQnDGQBF181gx",
  "key31": "M9pvTbAijW5d366QwGWDSRokMQUj8Dh2vfepmV9SdddMZn1dd8co6cKwXU4WsUr9tWsNoCzL9cKTyhu9ihYdZuj",
  "key32": "gi8hHBytSz7E8mYD32DeJtVPr8ErfEEEJCsRiw8hgJZeBiSe6vmY4zrLGLbgiuv6DaDBR5sUKk9PeeVKxRf855f",
  "key33": "3sPyWirG4YGuPyByMrpefvzrrYkMYZTgpEqMmDvZLNsDgdz7rc6Ssww2ji3pXd9TU8bLwNn2Mj4hbmAMVymtsVr7"
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
