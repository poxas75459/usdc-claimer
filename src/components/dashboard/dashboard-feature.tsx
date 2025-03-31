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
    "7WvRUDHDSeNDYj1xt5TvZSR7vjWmQZJACcZeWuJJzTnqxRVp5ZT7hrixDWVETV9LNrVSaidsjvKawygV7BQoAuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyKtS6A2tXRPvHjWWyidZTj3pfVnhGTh8wfoL1pZtHjGsNqz4hSBcC4tTMR1KXJaaJctLHMTfEXFQjKDohhjhkd",
  "key1": "vriLj2g8hEc33JVVoH4FCfQRCZmKADoX7NNZpop8YVCPYmdbfJjzTthPymnW88KCEBLV2ykpWjkxhsPshCmh2mb",
  "key2": "4u5zus6fXeJYhdDY3hGVEDya2Mft5uWHy5qRvN32UVP7UbKUkXenaKMjntVf6oLhdtQG7CLJBVvuvfa1uU179kak",
  "key3": "L9sd5QBtRwimvZg4WU1927VhxQpema5nrTujVoAVxPcDwDecEfWAw9bEsymsKbCb9Q72L7kJB2h6PJmkUS985Qj",
  "key4": "3uqjM8eCZMwJxBJXcWHCkVmQhVjM8mc2JFyzEmc28rmwEMez1JGLWfar5wvZfESK8Ps8ajc6L4UbLxo8nbmywLWo",
  "key5": "wcmT5AvE14ETfwijnNLAVyUocyPyCtTmtLAksZNgYm9eGFCj3RnHTT4bVQoevjsAG5XaNxAd9mLdbEzS9dxUnFM",
  "key6": "2G1GdSGFfgCN2vF8B9LKgP7C5BzQ32ZP58b6BwqoCPyUUSB65pGismVYYEY2j32cEsNNYV1n5xXUbwSPx9q9tPUS",
  "key7": "32E75yCYbyfyo45wdsvmBCb9ThsFjgDoWq9iymuiMd1ySPfGSiRUTjrg2F6GvST5TEaR4XqEG6m5yu3hxNoeJGcn",
  "key8": "51USXuEWNecVHQfPWWrWRwPJcd3ndy3RBb6epGhc9AAsRv3wXg4f9bDmr1PR7Aw4nSNCkYbh47KmtjSFD2FBmJ3b",
  "key9": "5eNcb1xunj5UKCr2Petqi5cwu9YosADEut6WYRyRqDQuZNHnzNRckLCEd31NHt8SGdFCyKjpo82uboS7sZZYyHf9",
  "key10": "3ER6cN8VUiGdZBLNLou7BCpEBcB4Y6PbJYm2mEE4W8MGxiBfyGSJJEcJqeDVHvW6qL17aa2DJ5DcqW7C8rYXCxWK",
  "key11": "5h76jz7TnbfUU4opLFSQ55wCuzJXyCGcHyReN68JUgDbwjR27UmNeqfdSA4vUSAh3Du4HsKLWxSxqyvfhTktNm4V",
  "key12": "4W8owW5XnxYcaVKCxZg9wrw6xf8ncPqY2Vup5q7mzuteYJoARvckxCfrUbQ7tzL6nWemptMRkqsVPj6QGYDsBs5i",
  "key13": "2PFgF2HDEDrMArtMTRGHcaobrdm9Ma7JEANRKbwomPxnkdmFnuT5xhM57uNMbgEt9CivZndRLDwsuHmv8nUEqfvq",
  "key14": "26B5htQKQ3yRzDNXDZ3SvFkNyphhJvZAENgL43ko9Z3AUNVwR5xnoFuhgBqHzRhg3BTtUtjhALNpsuRnCvG6GT4s",
  "key15": "5jMgyiZZgmWxtXjYxU6H7vkxdeMfNaE9k2XdahCFW14CnRMC6TfaRjTE7fX7qCdyUC7PCqnWKP8WDNkCk9F5SC8t",
  "key16": "2P4ocTRDFMr4hsXL2KAQjqXgvsrsRBr9rTx2EthpGfpRufcLs8kR4gm7RXhbDxx63d7QoEwhjqBC6ZEVfcGEd74K",
  "key17": "RPa5zePTwYxHsNAB5CmgnDX4JMxDWF735iU8QS5XVFMDd4picw5cUtFt2kcErAWVEAvkWfRBJrwY3BHXAqP2Ugt",
  "key18": "5TygCpKgjotUZBZqw7gETJTubKc67L5uEp2Y3gWsfnoyoC7QLjtjYtcNGwdu3bnHFau2bHsWGowxUhkLnrbdynwa",
  "key19": "4puTZRLpXqa2yqbbbymRpGHr27271Gp1afCCmpr1diivR5XxPTcJVFqSzzND5Fxo4hUu1MtxnheMNDqS3p5vP51i",
  "key20": "gGCeHEHcctpmgzQLDK3wvTZKvWQ5CkUrGu66WjWhv5c4LPuy7VHm7dy46PSYUPYsuMoCS5HhFjkRH8SEAzMmbKE",
  "key21": "64fRLGjLRQrF6ZR78HLqyao6i9Uqg7hvXLpbVFYVBdupAv3ZMBRcUvVL91C4EZjdvQQaVpnZ3YL4WWR241EtntzR",
  "key22": "5766BRtZM9eRHQrmXgewDK2U2F5eAPZgypTaaqQmGgWtyaP98GTKuQHiJS87voEH7UGFwSRcWGa8GWtjGW2Xch8X",
  "key23": "4L315tfkQ4uBSk1po7kK5ijEGkauqwGLAs5JPRaBwmUkMR474BUdHfMmVYThyWhDU47vF1DZH4j9aQ1h8wXxLJ1Q",
  "key24": "5aX17SuwTFjvLZDwKnhZufio9CBRzzbo14B2hWEED6zvQ7t2HPksFJTtHfX3vSQL4CnTRF7u4CCaGXLXGFqWoGUq",
  "key25": "5iSK4pvdUu1zduYmpVeQrMuBXYvwvqqfuKjWqmk9N9T59gKXSXC24PocqHm9QbRUQHsZtVYAznz3EqCRRFzawBPi",
  "key26": "oSkoNyhXKo4C3C2mgGD9KVZPFf9RTb1QhaGoYMj2f79y9WdBg4wcHFuCXygCJYaW8pDusFsKNdqKXVGyKNWeXUp",
  "key27": "HFi8HAgCpiCdeP3tDqytTahSTypHpHQXZHSNbtK82gtZsDft5Kcw4oLu8eJpGEz7QioXBFGDXUwLa6iithdKA6z",
  "key28": "4cbzWMccjXw5dK6hGpxNF7s1Mph7Eq5Au9bkpC6Vi5exoED1qovTrrXRLVjRNuEQ16CyRuKk7UaDmekQ6gwYcNK3",
  "key29": "4mDYKQW86pi7z2r6suHVcGmZxJtYn6EZGbX5pgukSi5nRSShy8mjuVHQcxbpNxSQ3vDHZP7nLxdPyr4AvaYnoca2",
  "key30": "3T2A89RgCqq6kUqRpGhBk4bcvWAav79vdmXbeNto32KD9QkjEMU3pyr34rXrMp3ae8g5Jchb6kbCqe2gi2WTKJjc",
  "key31": "nEnpEXgGtyrHPgbZCfbU6vG5dZfdy6H4zymnJ4rev7w6dMZDZA8sL3wQXF3wh1gL85PXxrRgsCpxnwXLrReKina",
  "key32": "2WgJqnAT3AQ29G79Bm41913CVn7bHi7WegYAZGWcLD5oyuWnvmv81QruNrcBQ6oL67E3ueQfQui55swZeg3g2Y2E",
  "key33": "5Dsx1bfqskMtDs3ezXf3VSBHciCiEkwRkUa1XJL12vyvW5aGDYpx95AZ8fAaKF5rZfcgkYyjRpxRbwbVbNptw8B2",
  "key34": "55gaWkNfxcsKogDTCGUMcqmEEMWKmjfUkosjGiayWdTr33UXQi8ocvo3NJxnzMk4QQQyYNVMxKTdB3MMn1LiGmvD",
  "key35": "2V8QonCXbH7sYWMqk2qTJHgZFEhpe89D41VpHpbgxCqGDrfuBGiYHsm61yh7NJrTkkLix8qp2Lg9zcRuaBf2hcUZ",
  "key36": "3KxJ8a38r5H22Y1DZQuUoUBbuGYioKtp1AJHXkSS1BoXYKfYFJR5gBqYQsE3c9aQwRH7eCBWVoNdoMvBdWJY47Xy",
  "key37": "4e1u1HFbsmWD9wcj1PFsV6A7Zheoij8AEZsMBTZqBkxAYQYx7B1qHJrHt4omKE1XcT9gcLVErUbN36e9FTRhjWGa",
  "key38": "cNwowwL21ggDpkkJWzi5YK9Y21qgw9BH4CXYKC8Rvex2tsXpkUX7hegGFYz7KH4G67p1GHBvjnam8GZhiW335TC",
  "key39": "5pEDm3ca1dW7x6uZif1PUVXpaXH6huoAZywAG7T88SfboE298djPMEbG54iCeSWeJu1v8P7xC1rG4oz8PBWgxwJT",
  "key40": "5eaDEy1bBh3vhcinafX7ieWEuVpAeif3s5n1A6QAikWphAwTtqRuhuw5oqGboF156hqkAYoLWqWCdhWqcwZUM6io",
  "key41": "NhPHvFDXXCuLdBynXBRcsp76tk61dUvLMi3eLtLoJmRFaMHCZoSqQGLU7o6VB5zU4ELwwxiVXzMdoj4QZihqGDX",
  "key42": "3mhAsjXfw5g1SrZymnyZYYawHK6vQWLjzVgoTtnsnZMpdm8Dzjdf3JAFizWpSq5hHXnX85LT1ZBR7Dagdd1poHGZ",
  "key43": "5Asx5zZbLYaJ7qbRbsSTuhQCsmS9Tf3QptvdSQZh51nmVbsaHx5y4LVwNpLSS5vCtzJjJjegMrnv8LpkQdtJguQV",
  "key44": "3XmeRSn2kWCAjHedRQhEKFzJYcuPnGgg7wKHCRRNgyDWCPqcqVwocP8LtsmV6d66AJu5AXbcZ1waw6jRwzfwGjPV",
  "key45": "4uPVYmmj4E5jn6XyVSv43n4sNNz7XjrU65BsoxHhj2ktUbpnTYJpKkgPRvkvnX54bmR8k8ZQdbprXMaQnU8tkc8i",
  "key46": "5tQuffaSkRjEMrWFHjtdyMiBrCqnx3DpHhBgjv1KTU3YFbuLn4VzKgh5oZc1Q9Z3uQrxB2C2FUshhD5vU5nt5ra",
  "key47": "24qStP586Koryfde5F9uZr6R4TUtBbiKUe2MzX1wqqxH6vDGfHtwyYv242fkPSFXiiKjscwvfuDsVgYiB4MBUP29",
  "key48": "LSbrPoHcMBAaie3rYxuVLDF2KyhgbG3CGB1qens7D5T1nuaQn2GAMTNcwsxXHNn8iH5Wgh1Wgg8M5RCfSx2qMHS"
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
