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
    "WoGaxy4BxoVwKeUdEPx7q6KmXrg7QyJhVrydM1BY4kKhzTRH7rooMHsYn2qqFbiYMiRHEmXg8t2jvkzSVtm9JDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wRZLkxkzUAJY56X7TQY4U5ZaDxPFHSZvHnHKPSMAQCUcBd3Xp8He2adcJVaMLFJ5xxQYKd5nUQGesk49BqrmKi",
  "key1": "VohDhCMLEnJdxFBWTonSgVWnemFxUsgNDd9hANLhULJABZBfEQ514m38VFBacB9uBU6hPdsdnvpAzwoV9E6qsGk",
  "key2": "2euq42Q1cBf7n8moiW6PqUhdbzYFH4cDMhy1uBJZAfmMDFXUAj8rphD2pfU74NBwWtGJrWEFfXRLqhkHqVP2PgfZ",
  "key3": "2SEwWoFxf1N5kj4PD8Dq5gjkKSCak6eFzbrA9dZLivZmNhx66Xsnjrpx91RQvQ9FYFK7mNvJVgvT8X51KwGQNZiN",
  "key4": "2iHSxypLdbrun2YDiLwYQ4CiNRzXrh6CD4RWwvBA31kRBhBKpKoQ7PG2tdVLEwKUENSKii12dMJxTe1eqqnjB3sh",
  "key5": "3gQZrbbGKGgmgHmBxxjVTkFD6hvMHqQ3dU393nWtDkQqbnc8LeMQ2MFXygo3LmL37sjWo8TSPQKh9V7SP8ZdyB1F",
  "key6": "2WcLjddv8PvAZ67uj7bLWo9zveJnmmY2JcW8RaZjECj9qTx4Nb6rvEb4T9SfZYeofiVvj9e7SCpAK6Bysu35vvke",
  "key7": "5P3tfSauXE6HUjoGs8orcaLZXyomU1LsRHkP9aYguzbF7vNJ5tEik28sYrCJZJcWK4WobWBsBkiLE1BStXN6jgAR",
  "key8": "2f42futuyk3k7FsT87YMG1KH7qw3wBGBoj2KvRpaSDJEw49u4kmvYAWVcvi2iQBkA5XWJBCSD4kv75tLBpUjMUJF",
  "key9": "3LyMLttxiRJKqPQ5LUq9PEFCtXGqqBsQ9zrYvh4QeXGwnQQmiDHAbSbYBNh8oXXNGnbGPpKiLfnDP1bRd24YksQA",
  "key10": "5D5kUgMqsvbBfUSwRzCUyVAgo2feN188iSL1RCC9sg8SSX8vC5kfKwbWu2BsPNVt5snSw9n4zyyBeVNx6QPyAuVY",
  "key11": "C93BfgRAoWaRUmsWMYgAgmhT5AgBU3ib7SpHpcVbeFUCBe9fDpFL3pJgXtr6UfjfEiZPpEzVpLpCvJZfLR8h3jb",
  "key12": "5GjhbJJ1trBsXBz6GNet3wzFCf3pDH6kmaausG9t8hzze17JjaPCq3FgE8axFsmDZSeyc7faY6CDzwsiRPfYrZ1L",
  "key13": "4hsztvsJKeJ263npjxrKX1bzT9q1KaCGQxobh7sEmDnofpLHx2Cpn6p2hZypTykXV96XACpXDBodGJbPoLoCHoF9",
  "key14": "4cVMJA6R9faabxbmuvJRXRtSeS2Sx5DbDen1yw3wXwk6eNAKDMuupQEYWGcGYDTSmFdHxeqeezmxcYc167zkB9b4",
  "key15": "EkhDDsUytik8n7aonRjfYwUmAM4MYwD1CA19Jbc9y8dDjFFR8PDEHfuw7hLGdxpmePTML731bMbsDAwVaWuJ2JE",
  "key16": "GUAxTthQLPrEj7p2DAnkVd6BGnq7yjpYgns42c8JcGc8dqEUHTuNSGtyVRHND13rFAnCYuhbjqN7MV7B2vWhc7d",
  "key17": "dNA8pUYdD6D2snHWXT2BxG2yAvXaUsARFS1PhGP73SSQP8752b2LEFewX2Bc3WR9EE2nUUMHa5Gn2st7m3qiF9X",
  "key18": "67D8u5y7DwgeFYRvm8Nb8G9Yqf5KNzeYybkjwLRFz6nU4SmnMJdYvE1kepXzUpJ9aB8saSFCZzh3F5N9NRmTb4rT",
  "key19": "3ju2tSCYmr1dhj7uX9Y57S6zrWJrQmxjcwQq3TNQtdK45PuYRjsLLLDWsfqtiVdvBhjktnBz7TUBxNgpLP2NnvuA",
  "key20": "HG3NAQVUB9c7vVJCc9Qh6AKTLDLoLsPgBbkQn1wp9HF37wQeu7iaCkt9JvrV9FZKpdcieiHBaCPGKd9bdAjPAjZ",
  "key21": "DsYmFYqSWRrdWH2xAGQCADX8Ue6PnKPpYtxTiSgn74EZTz9aBeRDNDiKPrfwy13oCDrG8YaKWt9odMdjzqQps2t",
  "key22": "3k8rfhV3YJfHLES3yzZyhJBjwWTFxEEfGGTfBdue91oxYAFis53agfLgGXcuUBvf7m9gi37f87fUS2d7eGA7q7Ja",
  "key23": "epZ4T4z516SPzuUAwhzNC2RvpWYMqL5DZaXmKxXPEgL9GnR9VpiyqkY3pNbBPvULsDaNQR43Y4tVtJJXH5te1N6",
  "key24": "5XEDQXQHzrrJmKsZ3qBT8XMxxLGhzJ2zrfUn52RcHNKWTKzGqpnDrbmgSpaisVQXLN63TLwmV6pUdkWGZmJa91bM",
  "key25": "2HpaHZE1N3k935ymroiXnt7khfepmxWoWxFe6yp7pQtLMoy1x9T55tVxj3vws1iMN2gNutT38njkEQwyuP2VRFsN",
  "key26": "61GE8bLJV18zy5i1EPsdaadTaHMruFMoEYd8xhw5LhQGJn2gqVHhxYPmWV4NjAKyFmzUNbhmLPSrxxNC4iaQpU81",
  "key27": "4U9wZmdzyszHQeAdu27du46LChchZBbDrcwBmeaYY68mivrGQWh321djERLTT1XM6hUdwH42nQxqX1hNJVT7V6yS",
  "key28": "3V6MwD9fpPtkq2XihWxJAEasUqtrZsf4Cy4i5aDTe169trpXE1EFryVxwQoHeurvr2VdF7EpxVmtvReLGmWd1bHH",
  "key29": "2mzzvx4Tb8dgLjzTpCPFRaRh2faZBstHcextfz5ZigEfFfjaXXPao8EQnWEeegQvADKF6fEkuGDi7fF7EqPhzCmJ",
  "key30": "31jsXSsPNZJ2rjjHgBXRf3dY5M9E6r244HjDzh9SaKKVkuBBAF94qLZnPQfCV5LEnNdFZDpCFXbLDgQ1AfMnfCHv",
  "key31": "5ECsivqMSUdq4RzExK2zJLPAXVmFvmCUb1MhkqKqosXzzHb7jVbywfrfkb6YHRTRXMpwPGZUiv9wVcZS4iXfVFra",
  "key32": "29H6JxrhCravzCsDaFx5BcuuwavTbxQ3WDgufKcV4hK7e48niBKN3xQGW4ya1s2s17juH9FWhES1gaazJ2r4DqyM",
  "key33": "63EG5hn2481KsAgktnZHHWUFYxWEYWXm3w3ZKpofA8hwHzHLfJoGbTDw1xZD6nv76DqNxQdWxRrKWsZFwXugLSet",
  "key34": "46ikjqP2EhxxB6C7nHCKkz26u6FhQRFJmwRxFXE9TmLQusmLWhVjwYpadC9jZ9TKgn7APcJ27fbbvxmUWQ245rhr",
  "key35": "2Sb55kKvYwuuXzxBUj47HoHdruvK3pkZbjeD4aPX6rbCGvAmCBXGpS9Z2uo7zhmETVXRG8xPUNtkNBLMsLwC1fGM",
  "key36": "3dKyoo4J1PCM2bs1do8G26yvAAhRwNJd9uWDhRhEDWw87sHY3euhghw5oe6y4R6M2R8scVd9eoDsZCQGFBVNLDt2"
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
