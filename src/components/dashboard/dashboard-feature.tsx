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
    "3cynRcgcbBV9et5whS7Wtj8pEuLSmeD7nMLmXtopRGPQFt5PHwbXrrx9FU6ijxBAeErn6Bj4ZktLFovsDDDJ2Tn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eMBFczttJBbJidsgzyJzsLphDrLtAGEmoeuqs2benKX8K7Ybd3dqsqoQ1TULSnTXZX35Xqm97KR4eeMX7PpXxa",
  "key1": "3QfKgiBdVSBTL1dMgYdGkjY75oQgxFSFNeZURPDYSbjGbKe5TUJ24GJdnQZPMbnZstECJviFoFQNGjYzm79BTV9m",
  "key2": "4CGagPLaZMKYCwWcdbcsnjiSUHMNZ6XNKpKS8h7smW6CVEQj8Z7CjuNhToT9Ko7WgdRstGmRXp5xnt76g97RFF5A",
  "key3": "wLzntUdYhy8bQBWbYTTj85yxTmrB7c5xVJtDb6wMeKZiCA5A2LDXcwAfJri3se14iAG8t4zdnVLey8jzU1MDLoZ",
  "key4": "5mvAHM7JW6REv6W7m8pt45XFcwARtGPBNy4anURfsRtKCCuGio9PykGE3jWoXhpn1S2pAbyBkUJpdnCEqLpTeGhu",
  "key5": "NGczEh9i1j8PDZZ1ffKAB2i9DwyPrsQpdn5RLHdKMavs6LqCiDXvzGbQWpbzUvHsgAoaAULN7qoatduQGv9d9mA",
  "key6": "4Um4ALC53z8VX9cSmmdphzPdDpdkVq8BcsruB5ZuCuCrNkhrRm2MTcwTrvcpGM5o83TiKXaXUdwAoDaxB3kvJXMK",
  "key7": "y3JLizS23U5aJXiScykYMvMcoBYYBoDjNFcwENBA6dGoNNf5KgKXcuPStfSGjaeZTGVhXKxMKbF5kLtRF8YoMBo",
  "key8": "kXrJJMov8DtE9ejFehLk3nvThUNvmsmp8msGiLNUmZbQyrZRkAfXHW1FDRtfUXiqRw2Mh7mXyeEKZ9BCTERSYtu",
  "key9": "3z7R96rV54FFBXDknKY6HXmuqVHv4NbZvLner9KfZc8srx7cGdhtfMw4bufjggMnZnkeZCUGsP9n6DHphgmCcVAU",
  "key10": "342wbkiGivQG5C2NHrbUfEFq3FWpgaKUH7HpDKvbDu4P37dEkDfQ9HrXjPGQBLF5CAgM3urqtZ48XQuiuK5WCuyf",
  "key11": "4KP9Z2wopd8orad7EHFLLYf3BC5nDFF5LR58MguK5fCt5siJ3yYBhqxGi7V52ouNuohgGU4FqfQkM22SEbmqxKqk",
  "key12": "zDBhZXQ5EUFcqsUztKoKXhoRT1yeCSHoVMbegGzZy8ZaSgCmF1uNNNzhdxZxzHbJQZi3YimiWGfmduTNBnRDv8c",
  "key13": "255UQgpTN1wDMj5ZsJP42MRGjtrQjaZ6fEJ5UtXaLrXAwehx6LSzKp7vVn6dEZ7ewMieuvmkB2m1K4DXCrzFjmuk",
  "key14": "2dX9h4CZ6u2HDb5NzF5CaAaKDNtt5VfQjFXDyx1Z7CHdw2AzrhuE9A8KXMPH2SEKya4kksqbeskyuk14qkg1yKVX",
  "key15": "39U9xiPDydCtQ5VKXnBm6gJdJmDee4GvQGfWAeFfTkoXkeiLzXgVNtme4HuZqpCt7e8SPZhR9eu9cs12EyCKmKEo",
  "key16": "3nF3JTcFRfSkGKrDM95kPkojSYdCZ86zSwjgr2o7pACVDAs2VfM2hekdLsGxTekJnqWkRVsiSjofex1pnhRBibHu",
  "key17": "2niB6kKdv7uhXSBD5SHLnZfSnhWDQ7SEcWUhcgzRrMP7qPLktoidfs2GWG1vDPWMH888JcKKzJ55rDou6cN3xiQ",
  "key18": "4WgX78hGWjxwAQ8XQMz9Grwaccn21kgFWNDcLg7zS7ntV4CZwHExz9PPJ7UXeGLxwgoZucjL8PrP5e7aHKFZjP8f",
  "key19": "5tPLUzWZuKzBkVni25AeohhS2UXLJ7U5Ddm5XqEULwoSS66cKxjadz9pkcUx8rrUaRneSsGNRiU16xo7kuq2fhBt",
  "key20": "4T8f2zBnWNTySCLw6dtyftBMJbieraofoBq5LmK4bjbYs5icwmY92wzAD1NfapRJ64UWKGhwCCzU5yoh4Ri3qJ6v",
  "key21": "265au6U4YMAMwjEZ58BrYZ2hZgF7rLufPYH8mLX6pQFs7Lc63SoGpo1Wz33svatnyMfM3i8CHxDs6rHbWvSprcyU",
  "key22": "44jx3DCbcy9QYeoVatKbFnvGhue37UfnMPfoNzepTrjsz6GHtra76t1LLDKUSt84gZu75sveAftdZqTLq5oykdok",
  "key23": "5mTRUMkGM7pcmaNYjxE8ipAWKVXJtbEhkMWNf3QZmhEbxXAuYy4y6iKv6eEdDq8mefNiFomBHtFXhQvK1Ub1HGRH",
  "key24": "2xBLQYTmsTzUwxzaSfaRpozvUEgVkjDMFvWyPLRRwxhJ7bvWL4GnSuj2Pkvoo2Qzm9CG4HUaNUJCyExEuoChu9Vn",
  "key25": "59sZpSAaThXCCFaXvSji9MW5YykddWaBg6c2xRQmG6trLTkhisVwt2bJUXawtApXzseKyMaY65oLbRn7BbT3nwk4",
  "key26": "3bDDjk76F5mj32J8dREeK2wBRzemWR5b83xCWYf38QoJgoz8ZnnGfRAWwaq27E8RZu3jQg2JFzqjqnzwepx8LRuc",
  "key27": "53VTLwzDqGKgd4ioydEAKGqynppz81PQH1JHELpSjcLpGiHtPeSgrM17qEyenyKqTQtMo82BJFH11hAxELbuPR4",
  "key28": "495UzTANm52QtaQ3anbJQmSisSVUcqQDpK21CPDB552JNmbUDPzQPrrYxwau5NZiid3hxCdocqETBPtcLQ2gMvMT",
  "key29": "32GkYKgf89BJZjZuL1H9GESgWpP7jrYPU2gtS5VyM9Wkn2YYy4wmP7KB4aDgbLtZmYGRNRVguJfwfcVo8PhyGw8J",
  "key30": "3zKHqhaSTTrmQjEnwxKyEVEz8HZi9W1PFLqdnSzD2LGoysP8Wrcm9QHFn2mdb7njabUoyzpsbBeJGqwiKB8WcWJb",
  "key31": "5LHDFuWmJVYRjhYwPZKwbAaWKNV61Jp7HUEmr9fYrsqG2STovjYbwvax1z6wGoW9hSf1awKBBy3vjLHJKHnoABxf",
  "key32": "3nLNzbbRKvePUSsUYt1uVg9TArFEGankvWMaerFbD7Qn4SZckoHQCEKkTATxUMcNgDceWTX9z5GpjmiNckcAs6VR",
  "key33": "FGL876e3Sg82xNXBMKLxAh6cC191Y8mAC4xoeJarJBAFB4FQGznW7SZSBV4imdwA3vovftRNdeNCdn1srB5M7Ac",
  "key34": "4yEDRnq5jgTcNBxaeAEv5mrRnUsUVaj2YRypb72tLCWchme835zpYiUqvcDD7NcEaHv8pjKY5vHnp5ZEZz3itdrb",
  "key35": "5fnXwvn8jAF1DE7A9iJnTQEkqwmFBVaFdNSedUJnyYkzfZTxuXGHYXvud56A4Hf158xNXgiG981KV5gsHw3nr4Yq",
  "key36": "CiLrBHy1cmYPx6KLXeu8EH1F56j6hLSEs47AUQBAd4oQBZLTuPo6Winf1uTzf2kCmDHgHKy59vnXCgGfFaEWk5K",
  "key37": "252RgM7iZPwnyaRPtaQE1J94sH1oe85vdCi8dQyhcFXfsET5gLEGEyPMPnmHAf75pGKQQTBPGwRCU4HHoco4sRFc",
  "key38": "3Wv34kiN4RNqeZiVLyyrJ1nRbpE3T96i6Rde3UbMT3J3m6kACkNp3Y96wzJNdxLadK72eboSHK1WkMRHieDGCESc",
  "key39": "Dn8XBj23HKrqD7PF5phbWYwfwNEup4uQLFygdVvfgQ7dv77Mk6tv6ib35qTsFxteREDKVsSipQVhgW1UTn7fWzQ",
  "key40": "66GFK8EtPnqieZ6574w7HGQi5kWXq9CEMesUQH5mmTECAofiYKS2vbjLSnabzKG8zwob6dJsgrueJVjNhRbUomNU",
  "key41": "4tVE32DNgVgRY6ix3QD2o24JY5PydVzy6aCyaKs74ZEoXesrKLk1eczkdVzk1ab996VrxWhE9fdN5RdQWWeZxhFZ",
  "key42": "4m8QdU9vXbd4a9VzaiBRXxSveLZir7W6k5qmCpMKky3zQvMbMJfsrLdCvKxusQf35CCPeLvGyUwG91i1e4ywdUcE",
  "key43": "mkJu7W6WC7BxKrrDyoGaMCcJQPVJJ9NyEMvBA97JxDRNuMUXMN18qWeAVZULkJMM8hPxML4dbFTvs5kjTjSEU9S",
  "key44": "brmP6Ef4BxWHM2zo1fSVbCQa4ddrJGEEnmP75mvhMkZFyXK5LHV4Lx6t5zTQEnJ6HtdLzBWuBn7JrFem7Gqmovr",
  "key45": "5fNMkN2qsCUJbMoPnyTRuxxFMPrLcCd1TZCZt8Hn4gHsEA8pZuTfXmoEaQ1hJrHRBWB7nXpWmcrkHMyZuTRqBSaC",
  "key46": "4sVZSJoKAanSo69uzPjoRtpK2ukkAqHoFBrpzWp6myfpjpwnPkSg5RMBojcXBh6tWQSbDSaiGQyuY9JMKBVa6Y2i",
  "key47": "3HVn1KWvYrSwygrQi5ShebwwniictxuFAs4hcPqXhvH8uK3CBKnn7ha26q5qeLUHDmRq9otx7UUTeDrQfYZiPyAC"
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
