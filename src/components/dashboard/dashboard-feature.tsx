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
    "2kmCRWDknbQb9ntcvM3EyUV6SGGPuZw7ztZ5HnHtYvZFV6gXFGcTUTbQMMpC2phBnbBteojVzoKY24y9Zkf2PRyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i6XPHXzG8wkvUet5XknD37TCydtmnDdJNTEwaiuU83VMgX8yKnwY3bZNAGovsErFWnEzganNvgvXqq6xf4zLCZZ",
  "key1": "4MXYersLPK7Xnc7rxbtfnjXvDcMLvS1X78RvG9a7whaVa8G2LX4sYjgXsrCtwaJjJnbnLwQVMMYfubhESfkunBja",
  "key2": "4qCz4142znnP3tVk5a8XABxCvxrLuJ3sK7MiSsMaNozT4HqfCDgbLLdduX5mHnWSodmUDxMek2yoX7DHSpiGtVEA",
  "key3": "3XvZS8WqyQLpMNPBN9FGryoeBn4MhQHE9cpYfGMhwMpXvkwGrMxoV4ABZ61sz6YiQfdCYcBKkY8KACsQLtAvqTqS",
  "key4": "P8N1sVpH8CqmKYF9iDLgvoNyr2xD21sA8Q7wWFL3XUTFLYpRF47TzRwioqnjrz5zfTXhYgoLJQBAkfbH1Q6skeH",
  "key5": "55VScEFUPMj75kT3idNYLwej1vpAca4P6uU6JfF7bXuURYf51c6jTuwHKtkfnfV64gjhCP568dtviPhaKVrwUCzK",
  "key6": "4YL1xzhFtLZTm7datKNwB1jdT7S377zivtuSqXfLCS4vY6BQWsJZLocLraqvsKCvkP5wadwY3hXHxmN1VA1ePiEz",
  "key7": "4qByJ5pvvUjZKHUF7tbLqm3NjgcQsYik17q2Z1ZqCMZvCtcNa2kMjFqreNnkmAkY332FmjvegNF4LsG4Xsssofau",
  "key8": "5AoxqWE5dPmsyg1YUXEHLHTfY164RR72ckkMffqN6JaJXXLEWN6YvVRD31G99pQnXn62N9ybzxTSkhAvGcDz5TSD",
  "key9": "5LnXYtx255dEujeLFwnj5LiQZZVW3GpmyZEfLjJhrdq4UnbH9aGMq9E4GfqqqMkjGLQFLoimLWDf2TCZKjdYeQNj",
  "key10": "24GKMiUngksv98Dr4AQnEwPxUCz5EkoLNMos2xb1LFZmGXid8TUH9C77nrEkpxLBjkhaTVpqth8VpPrvENbiTAti",
  "key11": "4H9SdvhVZWcjnp4Y4sg5M18CJUiLu8ifRwQ8De8pbY3ZQ1hGhkpL8r8E91vxgp1D6CbyhH6vSF8rJ8jj5WDtY3RT",
  "key12": "KGeCFyQdzWAxY8rKVuSSLDv5RhnuWmCpqdJdhEAjJihcWFQVr6txTMhC7viRqCzfeFZ9u4vNpu92uqp1LgDye21",
  "key13": "2bkMLMuC1G192TuwpLuiUGcKBhHt9dutPKNjDaztztLUmaUuTgWi7kcLEEZtmPZGHVZVUfeiKod6JkR8jvf8opfZ",
  "key14": "4QbB4nMrP864xJV7jEeof7rFcDL88trJNr64kT5jSLyNttuFupAkYTGK6ovn6dNNcjcvrPVhwtN3pd5YMCkQkVUd",
  "key15": "3Rsfc6H4tp2XFPx1QeYDviTZAmuvjuQmJZf64xDHKaSy9ifwrVphRKnxRSFfF7xhYshVwgLku9WgoXu5TvVGLxyW",
  "key16": "5yvU3uvkNiF7n7tKxDGQbj851sD5SawMvVbxFHbcc4ZTzoNrNbYayrQBvymUgkJnPfrJfiXH7hDKYF13Rj9FD96A",
  "key17": "4auJzQdxFDUgJj1d7kV41T57TbW3nMgHHvpzBVmkgF7WzwmiHkEEjohbHDbD6bbH5qur1USA6TShyrDeb6DGS2MK",
  "key18": "4yEN41bH1ZWX8nFeWiZNisYjGDXXpyZJvSpZaunG9Yfy4tyMSpd4dqUkQXqr8P9t6uoMcU6AwxzeNJ26EcwCjmV6",
  "key19": "3KSP1rLU3BuiyUZHPV336VhEfGFHFuqPwZAjfGaBkzHycPyQkgrHtaPC25Njyi9hUmjjVM6i2nWMkYH9zNm3PZKX",
  "key20": "3E5YhXVhGnF9sv5ApiUhFjg7YHe53nHYV7w8pYREQKWA9TiQ94DVGnZH3iTSe6epFYsdkxjbY9kDKi7EbbkbkmBW",
  "key21": "3tLqoQeQG4L3HLq17oL3bQiKQPyzPRgoLsbjcnYuFPPHGm9G6BeBoqdYYq8MgsM6oiRJrNQ3HXRWxyWFjgaTeELB",
  "key22": "23CdFDFn6XBE1mhuUMaNZyer1T5jXVocUnojdiauf8jsGy9t5XtF98hKPMkvi2Gssxw3s1TVgwEVxaquoLwde5az",
  "key23": "5Af59JLxcSSCiN3PWSXdsgMZewmdevZ4DZ38cCmLECyhf4yLeRcpG3vmYmzZxDeKoePaU3tiBcHKrCCnmWTDVjGr",
  "key24": "odDWya7a1wYeoNQug7Jx1YxtBjJExCDTiPFPct9fC66i8Qv7e1itoPG1T8CSAUjYMKapfvtXuokwZNL8gzHBUit",
  "key25": "4GXnKoXJ9p8aUdu8B2nEWQgapSCdqZyZnMTXpsm8GFbpFGkEGUsZaLzUQAmR6YFQhoE8VufGMZMBeZzYDiSujcYw",
  "key26": "31iw5aMuVcZWtpQ6Avewp3zYXGB95ScNamBtaVnz3P6RrjkcnbLnHgVuD2FjVUeZ9g72M6ZPLPTDjxMqA6cdzRQF",
  "key27": "675W1jgERNQ75ywyoxWypKsKkb3NeRk27DLCUq4UitvUKF6qmYN3dCBJiBvExZWH5fTMpXLoyJwsnER97XitsXWk",
  "key28": "5rN4iPFNxewP6AAWX6vygqSDot2VtpqFh6rQKv9mhivGSeHF67nakT9fJmuyxdqVzPHjqA8uHFETrj7RgQLTBa9C",
  "key29": "2zopmGzt3wavy7kjRf6r8csjWCUpaasbh2sNVmA6H4c42G9twwn5D3TT99XhVCjZRhVwPrNx7WGUtDQEkg5oBhpb",
  "key30": "4YcbEUBc3NYPFVH7W7SajEVH8Q8DMS2b2xkG6hhq4iZN5Xnhijr1TKr4Zokm8j5VKvuQVP23Bce2TJAx4MHvLRpo",
  "key31": "2xjS4gCufGqBZSDYCnMXH3cErwgJkg3v9RbyXRmwEBpAGTQKZpS1FWnJq8Pp8EpyBA72QNsWgdRCR8GmirehG2y5",
  "key32": "2bSz14Rm4z4uBuf4rfGf196sQpKkQjoCmQMuocTS4fGeqGGk6Yu2a3q7YkniZ9HKJmfxfvLhyQDqTkqg4DprWAh8",
  "key33": "2ZS4t6VViozymv1aMVV8ZFVZnV2E7jmnWqRqxV1zdDqj6o6FZXgw9MGpMZXhbJxHqkYc6kNeSL9gtfdGFHx2UKPH",
  "key34": "dn8fpFuzheK1mBBXJsLTGq11onqQbRkDnmLFr5unktRkzkTT5uv1qTp7PHzujts1qjzQdtGJUZeLFQiNc12qD5f"
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
