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
    "5FNMzCy6iZKXyHfo6Po8MpCgYdWuVYAqGJEEiv7xioJvytj8YfCvkvmTpfKLmCePUQbcVfr1XYH1hZqrm5PyNWg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LJwcrmH9fo9eSvBpZYzBTZ1QoRkk1V1KvSQ7CRZ1qCWaprHKjdjDP9wawKvU5JXqxcscv3ykkS52RUbrQT3FtF8",
  "key1": "52FjWLFe4YH3CGXa6aABv1wVxtRmXbFFyUPwea8yfpMSLmnSpjfmGC4MrhbqT3YFx6Fj3bm7n8DpaTpUzi3kmkx9",
  "key2": "JJS4cvSqGSQARM5h4A6v91YDmWqWpnHV4pJwrFU3x5H6f68eeLeLuMzudTMkpKfqHG47C2LqBJ775pp7mLQFeH4",
  "key3": "5thvuvbmKLkUTLop7jZVqGbGY6wyv862KZzxE3ap2tysQ7fFQjd17j8YYyjm8hVyVhkp6GDCwAtRyMXLuYJcRPV4",
  "key4": "3Pc64XttytYsCD6WzqSpmt7YgtgvLRG5jmcLdhTsoC1gD1WVVZDxQ5Nq36cnpkkqhkEZNrfcEnk1SCjxuRyenDog",
  "key5": "38SCuRbZw6mbiJCiX9KqQp53ZkWCoSZczhfXo2DtEjW3xu4ZwBxWkJxzYLqZp3M3u86DbBh8KMQ5VZEKzbJmXFum",
  "key6": "4DRuvuDJ9Tks6b2DsTt7ccD2J3L7tNitUZtjj3xGohuNevpYTq9cfKnrid7Ktv5AfgPGRpicW56Hdph1LMUTD5xx",
  "key7": "3XDKVqBmCKgMpPgPnjLDESDmmr65xvV7B2ZBW1j1Ce6zMHpYEqfJ57b2hH6rdfoxdH2cf5EKbgW4gSYbaizMmEce",
  "key8": "4EEStygYJWhbu6seDYjh1RqEuguUsfHxgVSfjyvqAXaegDSQfZyWzzvofrgC5KiXte74CiiZ1LQQkxsrqVvegDHP",
  "key9": "3XpQwfpgaM13Z2rL37aCqNBy2RQCaPoB2wusvd4ztqcgbNy8BNf2Yi3ArAhjB8xuvFzNyohLoU4T9DFbLrnbKHbb",
  "key10": "QajZScdH2ZfTZUDi7tWd4xuRARXrV2zWmyVJCQzzbiUjscYdeaDxxDTCyriv4RXD9Nbhr3NzxCyBVkzWM1Mtbsu",
  "key11": "58TMSvQ7A8SHAauM4FoeHzA84BXDtpjyQhrUv8nvuDMnuxuiJxwcvTv46rBGBwfydxhEsAri5V7Q2yEHaURJMnSC",
  "key12": "3JP8WpZJ66Aq5Giz3nu2sUuA9n1FztQdKnnptFyvSoLh6QmYpqg2hiF4TQtaCW1QUJ7SfwzDVcYonc1LeWjb5hAL",
  "key13": "48dADmecbZvX9Jx3fxkEjJ2r4XA9xX8hxzus9FBMjoXdfomBDWzGE2FKcT1jKX98anuyQgxydgpG8kfAuLDNrMNS",
  "key14": "5NFmuVLBWrNiLSvpUzDTZCHVX9eKX82nWXpkHfjnxVxt4GwCpf5yRT8PN9fsMY1PqkZiHHM4M9Jq75ieDA7p8z95",
  "key15": "gdBTJ3dGwmgLUQeM4Ye5i2cTBMQhwDp7iAUJQFq4JU1JS8gHQQjqozUpaZBJYziFh9Lu3S5aV75ZjucUCz2YPek",
  "key16": "4LdBEd2XDm4AUhem4jGoQ1PueycfKJqpAz2df7YQQi3goj3UrsqepdAJPzwwuVYZJenF53TLtMo7Q2Z8NoAohuYh",
  "key17": "4eFkuWoBYgKjKGd8GJu59XHW11jYV1Z63e5ccBSn7LiQFNct4Ed5nt6gNsJEjdBe3s7gnyFRBa1BgBiCBF2yKBA6",
  "key18": "59kdpMepK3dQ9jibwfaR3ZJDiHNjuJsNFBe6vQHuKM9nAd7F7gtqfGr5D8NBHVPqnXLgMqKFwniBnrK5yFmXLr8V",
  "key19": "3YJ64oiX1YAwN5nWuGJpm5pZiDYLR5qPHwRPJgc7yincUaKJYi1wH6JJ1CZFoeCrppKxJc6mUrANsRdgDSRh5nEs",
  "key20": "2jhtiUu4smkSRMJYA6TtqD8eMsjobhjgkfwcZ6Uzy5iFzBHtWBgp74jhvGYnW8XcywgJecuuYsqpUFSbeWhQSeGU",
  "key21": "P48QSjzqcXQgfx7Ae4cA6XF2DRuX7q9N47jFbexRpdudzryLVUkQz3XBv5Z7twpF3Ngv2X2buA9L2BLfajtUsHK",
  "key22": "HyLk2UtgZnYp5s6Nmgkom6us9DPX6gKqB8EnFR9gUksL4j1mzq3XXzXQCoNQb3XJfJ5mkCfL1FZB1X6Uf3oDFV6",
  "key23": "3h3qhpmhtRgJnFj8scsWUUamemXpd8QrH5NfC37gr9oUL4VuEtdu3H9zuzk8wHWgfpyDEaBHRWFFoHt7bnvkwfKT",
  "key24": "3UxYvLvD7T7XYC8esVezYwtMVavQZT9eFFHCACA3UGvbh3KaqoJnwdeyAND6zm5iCTzVCw4hpD2LbZsNrDN8dVkY",
  "key25": "xq1zCkJ9xmQPdfrKEz7LDxhmAwuJCNhQjFahVJmJvn4acbkL8gkrDCjXYbQpMM1UK7pE9y67amUHipzyHoNahyX",
  "key26": "57DD2qXeDjHyJMbHYjAJDWUUaZqHmTTN97nbFKvrtY4iU3W1EHPwnuu2Z2bhnR3wPBAM7W1yAAW5vb4q2iZNY6wM",
  "key27": "4HhomDVw12QxJ5WPWnGBmJUtu2FPeU6RyAsjgXLhJfXRRYGivTwxaDYhiHsW5bP2M8MCCNeNuFmRoDkfFu9DvemT",
  "key28": "2yFyHEgf1zfiMXYGcuL4MP4RNX2gKMcGzY1X5BzLfMGDTxLDZPJsKfdGBZgadBk8aJrGSGzisu3pXjxbxVvmaAkS",
  "key29": "2jdg5ETHfbj2fhvR6g4cWA4R2W1awTtwzxK9HTtwRjNUgtiZ7HdVpmgEHNcegXgGQnNyZQQfpJz4Q9w5Sw3dmPbo",
  "key30": "5x5hy2KBQEo3h6aiqGb6ZAR7asQ2wKXp8N68Qc3rPGwnARpdTX8rrPLV7nVYgyf31pex1EDe1Ke2Dvd9tre57ks3",
  "key31": "3ABFovnMiMpv4JHZzRtUVQtdfPggymohG82wzbSKrde4WvpArFLYGCcU8iGVzmg9vGdMmsARs1BFHqmT9NNemNWo",
  "key32": "42ggRnFZ8i4gpU7y8rVGovqsz3Pn9hbPd61WX67RnfYNt4pPnLUivcopkZN5Wj9M94EvhPteLYAV7yJtoF8fFQYC",
  "key33": "f2UEuYgawqHoWdyMbGPs4bojg9sRpFAdK4PDfh5jh4tSpkrD4CX8ZncAvCzjCviEVQqQ2mvzUUzkmaiRoUUjHE4",
  "key34": "2nz7NVu3xyWznP8jNzay9iWMvukmL3MWQdDwbJZ6o6XHci7bAkvztccVtu97QAjEmupNA7ZUnqu6anWW4EnJ1jbA",
  "key35": "3HVwPz9UowJyQZKiTH1V3jwLGTH8qjxPEJmWNzWwHHmG6tMb4xVa7vhcNZeTgqG5uZFyG678vYkzVdsYuv1X76x3",
  "key36": "BMk5hfiwzG9QE3HqnxM2jrA2yWnDoSfR5KwTHMjcfvxRhpzNELEXXke4dpGgv5hJT7cmzFWCpFKB8pk415x1iFF"
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
