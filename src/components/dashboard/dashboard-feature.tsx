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
    "2RNMGynv3QQZ52xDjemiCLmmLUytog2KcYNTybqmREdByXGspMgzkqnFqywMXXUVKFXQQR1hy1L3gFdZxPcS3FZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hjc8AkHMDCGjUkgjNsaDKBS7Xm6FraMiJWS56Vtc4tLtnwEdkTMy2X3jLBXzC3S6zoPCRBQo2jBgakeApMyWP3G",
  "key1": "592upxAgkHHezFUa5kNDXAwaKtPiMxc6ZdyZLUqYqWx8FqvXGFvzdWD3qNe8UVYwnsiaEKSD19nd8hMTWyySEF6f",
  "key2": "5ncZzn7iSwqWmgkD6cy782Comt2fkgE6e4LaqboXgihgQ4qYHKVjS8JxAmhktQxbmDjuUJ8aAnV7wnoxpzGkQrGS",
  "key3": "2E67iSf9D7xFFCsvb6y4ypDpvUKmgm11NaeqvhBM5fL8cLKgCnEguVf5hiCjW5ZBzzuVw9CEuMAiaLMnEEhkbLjr",
  "key4": "xBLqTPp7HCNEyryWnfxHSR4cPStdAYPHL6a5y9MK9vxcEtYQnSmumx5MjzZx2JGKaJ5TWHRw4T2Yyh8DEn9Kacq",
  "key5": "3EjtmjV3wD3JGk5jxrcFW4RMcJbKUo1jK18RoCwfh3YaBYoP2Vo792nKWRCRG6UwW85e7SaQp54JuQLv9H5BCHpA",
  "key6": "Vh6mfRNn2VWoxUWtncWBp2bmz4aGRvXLFDqFrsRUTcMTCDJKLGQDEnC4eZMjHgJF1rsrE9MQZp14pUeGa7xHqXG",
  "key7": "64fvSyMH1J2Jrqkc2QFeVY3eXXkp9JCFAp2dwUu6EBaqig1YnHeDTbM8SEqBj6NFbZ9oBQGERJqsvY6ue5MZ61iN",
  "key8": "4WfVTh8neppdWFmHyrFAoovhhPy9VgFyQu3J1EDeemk6UASCwArPenVPoDfFcdDgz9caEKqoMWsQb7FMcWCtvipF",
  "key9": "4AvoWoAkvAR4CrKE6TXDH6a24q1CW4ATCsa5BLGH7YR6nvS5DexQwckBggjFsAnTLNxbJ34fKN7iQYKPQ5RVWJHd",
  "key10": "64iLAPBnJ6Hg7CD4hTk7NXXVj72oLYTPGG8VDpnsN3wjJvEeatwaPVYxHsHAap5tES4gM4azVKfpr2Rj6FmhwALT",
  "key11": "4xSXjNvwWuxoyVUEQ8mdd7rrSeCKiuVR9EhaQV4AUHxHqjnCJAcoyXYb1aUjxV4A4aco3DwnNiqfkSHADLzB5R7Z",
  "key12": "4wUY8p5oMmUoepaHMVQ5Je8Cm2iwJvamtpmzRcsMTHN4CQp2cqSNogkAjFqHGeXndsoVf15Wf8MJDKVDRogRmJbD",
  "key13": "hbK87CNcRevXzxxsyAnw47DtBnsvoh9aVam1UC8x8pmkquh5rF8sKfofX6W8QXiF6Eb3CENRd66bSBjq8mEzY2D",
  "key14": "22oznA19mNFVKahimsWWf6DptuMr2LEWyJd4SAGmFHtLYzDoKS97EJCj6UvRe7nEXr5fjfJfybUE2sMR626TxJAk",
  "key15": "8QrJwCiivwzByBhc6gNA6zZCwrRRjzNxbTXJpZX9rSepkCaWPBaenvHnpGQGaCHUYRUMjqsS11CN9g8N3xD72St",
  "key16": "8E2Z7am1VWd9N8S1ZdKksP39eYXUoG47KLdpoVnaEcBgUMH6u4KVMzNu4LciVs53FRmKUJXH7qXvbN4JRtWvisR",
  "key17": "5gh9mk5YeDrUwZrDPP2YTLpFtsfjQcGEQJuGG4utvETfWEw9BsusDGvY2w7QtH2mbGjYpQgBbE5Wyq8JrRrjCnN3",
  "key18": "4MQeR2NUtC3Y1yuSmrsVGASdpiGmEmVLKrH5vrJzEwumuSDerxDNgQg2TTZqeyNQKKozsxAeYhwrntLx32nhQjYS",
  "key19": "CkZj9YDcvCfddcibhdpSWeUmPrCaU4HGTnPSfbVoMYkdUtRTCR8jGd1BJPbmBWyLCiwzaxVkMAEaE4KDWAynNqt",
  "key20": "2nfUoghaxiL9dSJW3DhpcogrdfuGTNUzzLhBBC9Z7gnx6MVzkKe2b4HTRTpr1sR6HDb5WpFdNzqHj2nZURfWhNmX",
  "key21": "gCTEbVVkQFzKEDgiVbgV2WQuRj7fkQHj85vyiT9oSchyYzpiTtR4cnUy2UkSp8iUyntgm2nf15a8vr59gRFwrfF",
  "key22": "2N1ikrYgLerhNQ1CbNr3YWjyLEHPwxz5WBvTu7WBvUPovjy6sUNkYQipUubgjzyc11A3VyFj9jvM3Taf8C2s7jPq",
  "key23": "3ZuXCvg3MEdRHbTYt2PSdCPrxWa54BvjfWkuxnUsg5BfpKTdUWzVgkydrJX1janhqfHauCH2sBrhZNzCxiNtkjJV",
  "key24": "5cQAKFgNuhJr4yEgGFBjiWmmFFsAKwpniwxkuuD1DZW8ata9v9KNpTCCKNz7jNi4RL3zBjBVHyr6HhfQquUNK4ia",
  "key25": "3iDrRC4N9wUDHUpe3o5pAhbgzX81MtJfHQGjDQLeuh1RuKHr8Qr9BhQKQ12sizWeY8i8VACVsASzhWhqgQ3a7wc7",
  "key26": "25pXQTCorFerQXxxShomrxGReNs79ddcoy6iU8koMkshB8xet5FNLhQcGR4EoMA8RiiuBG7fXLtpg9yY9kHSrVDu",
  "key27": "46cgNG3Uq4LpbYpCbHzfYeUWfD1VjFq3P2DHvBYGpP7bRMh76MVwmiDfdcqwSawgvAet7Q77VkqGojBHhuvjWft5",
  "key28": "YubqepUv1Qx4bF6wHP6NYgmGNHQKYSCKrDCgxs3KnBAS2Kg3w8xR9bMshQQffdgYmwSxmd6c5VDgM1BNynmDeK3",
  "key29": "3DSXjT4sLFmgoPN9wgSciCVjLHMsQMJZ6tjcXzUp1cS2rdmxKUki9prCXbvQGVrhfNWVpviLn7pCo5sDQSkyFkco",
  "key30": "3VA6Es7updAj4m9YJJ5pn9bmSyKiQBTrVsKAnspS4qnjfNm2roMGbrSxG5BdWcD45EpY5m6apYjqj3ymfaVmNveH",
  "key31": "27Mnrx9qMrz8LVfjUAdtKNbjw3RaeeBrcEvaNXFjJnc1zfvKxjncxoeKsjrjVcbgoEURrkWuQi8R8gAzuCgC2nax",
  "key32": "41QhEX3Uhg1UpY1eBvmCFqPf4xbRhA77573dMbJBAiDJxg4Vwt5A8nz4QrZEJKBCVD18irEFAyNB6XP8JXMnfy3T",
  "key33": "5WsX12WTaYn1Pqae8tg8hSRDnPLeJczccUwPGkTeKRrAUchVajzWnGxfFGChxW4aQWuxktpTkKJ9mYaFNimgGzjU"
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
