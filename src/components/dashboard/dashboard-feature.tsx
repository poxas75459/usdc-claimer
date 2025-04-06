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
    "3iEsCsx16SCR8xEN9f5RKoyZxAo5BVqReR7CcPW7iWCymnFSMmMe3dqC3KsJB2XYGdnBTZhLHhDpeWDK5J8MbSW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tNGeaQEqEG7GxYTpDAKKWZnTT3FYKnCs2hjPV99P9151iVuZCniqYq4JzVGuc1Y9JmDb79qZQRFdfPXkQESuhox",
  "key1": "2ZqVQ2qvKLGmgZTAqdyh9qqNFhLVPCtpCDyACvZskSgspyqxN99KWNny2YPoUReT3RndHdxpCLUbvunfA7wdxKn1",
  "key2": "3Z43mn2FXtiXgyJauTYxLjZL8gHaCfVG33egXs772eg57SjdZk46Qg9riuJucg7Yj32TfctxUeUmyECoj6egoYfN",
  "key3": "4LC77y6sskJHQyiZTQWKa2AuHC2anqe1AHRxd8PN4T2Nx4X1QC97oZxrFc7apqNFzRiQbhk9ABjbCMX7WqUiYLs5",
  "key4": "R7N5RZqB2ZAvL5MCF5w2qpFMNM14LKHdP3sQ6uGfA3Y46zvawXeL6dZPZumx5GmFriCyvtPb9Z9TvdxwwMNfCNx",
  "key5": "2ugQH9kAPg9GpzT9ZK3azSHKRbHdg7355RmSBnSjxRvi6QPE9LDjTCUMz67NxT8XE7Ff8dFjt5qAzCuzuas1dvHM",
  "key6": "58sS2KfiBhc8jCMAjfdzxJnqKD5q1Ts3KdBnWJqhTBvQtixGzQRaF4rg7vsGiBcYxwg3hezycqvK35ATh1er5eUr",
  "key7": "3JME4GnYHLXCGuWR2d1eFgncVqhR3eEngPTN24yY6mjoBQD9xTkjutTbY6ECENLsHe6EcbjHV8aiUQRaHoP1tgNE",
  "key8": "5FwBfK6MHoSwJqh21qRNL73MZkV4KpUWhpnSwXWm41zb9npRDmtUZyRg2tGeNG5g1dbWAZZ6WNZQy8CoNt8TZVxd",
  "key9": "5zGBYUqKe8kmyxKUcv59gTvjxc7zP7aW5sRiCjgykB9PWwZhpPpht3XcQCkyMRHq46unH8M8fZtmJ7ufLo5HjULM",
  "key10": "28euzdW3mriA2NEvyrTCe1kjfPB6ATPrWKfzLix31y8WFzgyfojuNC2cwY9jDuzqL7epxAcdqvrcL9wGStsJhhE5",
  "key11": "3Nhti4GRRPFhp1Z1QTZ1A7xiQy71KCyFaKCUC6fGuwdaqY9MpHk7UMe22voxARWdJEAgyUmgJpUXHrgoUH6pjjpP",
  "key12": "2JdmcSuXouvqS3KW3g1WqJHbnzY1V2AjVxPkRd8Zt3AVeV2DpSpbxr7nquYMWARKpXYjAUNz9qySneNRmz1HksAE",
  "key13": "SNKhRMKzPQVu5wQQeTdQMrPwu6j7vvoudCRxVKM99MiRnBNbxxkUisPHhBxV7w7N7Dmtr4kngcmcCnQ1gCB1QpS",
  "key14": "2V3Q4e3er6QKL2V8xfcY6MawuUCLMpPZSQTAMS1MptfGCF2t4jdeuvF3UW8g8E9619nd9qGKkieX37xMnDHT88RD",
  "key15": "EouiAbWGSxajvBiD6yw4pSSMfE9XLhCmLKnoTa2RrCT6aaRvU8qYFipmvHq2VJhaHD7G1ed38URgtjD6aeyVUow",
  "key16": "7KR82j1hRtyp2UMv8FM1p46bojqtbgbMZXJUpKu8MdMGf5w6WWawg1GtsKbKqtZywn9veaG4d1joWGkrUomttAq",
  "key17": "4p4ed67t38oVmg4PSWAD1V8D3vrKW5yqNh3V2oDJpj8r2SA9jEWadqsWd7KRSBshmvdfFQFti8ekJpgmaHRfQfKh",
  "key18": "5ZPyNRicSGRQfB7AvM16R7rFXiP9M2kJeHg4rJPW6GyrrzWnnHgSaWkoqAwYgZR5YgpeZY2hwg8X1qRk7pRSHyHq",
  "key19": "4HyMHcRidphrh3pa4YEy418Knw28925K4sx1mUMpUpJH4zGrGapnZXHRdwRMRd7bQaGtwNwsXjV79HFK8kynFyZT",
  "key20": "7npmGCa6Ff1qSu6Nw2cU7jfm7vf8G9DKHPToAqQxSZUyDXFNbuaM2yYBLEq3uGJzsKPCgNc3PVNc3fYUcyoVp6j",
  "key21": "5yF9cN4rt5GVFQeBp6GJeMb9ARyw8nugDTjHY6FnkMEyE7sXsyE7FJuQq7yGNcngwcySTYrPnvDWJnD4KVr7iZYe",
  "key22": "4bkHBNeFAb4YD25mBB1Xbk9J5bZzCc67EahYVnim6xaywBTZg6YZGKJgEnuqkD2iS1rwkxQpvs6tvHNRnCh1VDky",
  "key23": "3YPY7CFrQZWi3LWEgq9tza9shxky5PfA3Bg53h1FA1bwiaKJkUH9XX9PZhzLKD1EJivRH2fuVTU9qe7Q27oCpseV",
  "key24": "4THFWphuDNQzFP3LoJUhisXpKoDBEduVu61rtndx6VhzB4fZ55udh1fh4MNHKRsh3PLeUUJLV25K78S3fQakZhs4",
  "key25": "4CWCtXP7AmzyV9QiyaZ9mdCDmHwuoC4VEvNf44E9YQoZpDCYQpTTgLnMGMqzujxqR9kky87NaqcHNaihsebtwFcc",
  "key26": "4qX15PEtTQz6jot7ZSnYzRs4RASz2TGo9XtpXguAC5P63mKkcaMZmJKUqgSt7SyRdANhjTCDHNk5tgd3izSmA6kc",
  "key27": "5czYpj895PTpfqzu9MKohzrf1vmTb5dY6G3Brzv6SXsTTviXi9wvjACVz8aa96u6z2GQyPRaLQYxnbUEPjAKNZTD",
  "key28": "4Jq4mBhp4RiZyy261DUwpVbmBrpsWKYp7Mc5mkp34X3AFiwWb4TDrw7oUbZMcMHcer6DQER6yQ3nuMSYrzLPEgFu",
  "key29": "4PDcVavLZC9JXdgociZwYp71HqbxwRPufMBrk5hjsNmMdLV3dafTGDUPwtanUrkZbsrnhqh8uzLCUEvaE1dyjbnE",
  "key30": "QE2mstoXQFJtrVo4jVbCjrj19H6qvif9yxfWWB6J4yRvgt3EuqzdREJSyLWFXsZEhvoVKWmMHgFeqXu7deUuGF4",
  "key31": "FPVkYkW3zYd4QwEYUWcKwdyXVEpcY8gd1xPtPNuoWhEm2V1kuYJ7nzx1SGevnMCNsQq1Ehqm2ri7NbL7m8nYfFr",
  "key32": "2s4gKUA11yqtz7tEAxLXkFf7jq4ATHzm52pHjxcPDNjUopZedywT5wyaqiAzpo2uED1pMW4eJ17vwakyF9r1rk1a",
  "key33": "2imB3pDaZhFvA8XzQthAa2DfGiS5eWwzvcP9629pwqDPW6tviZWL5VQkUa28gV1EFdC4rmqiudwrk8oMmZm4j4oE",
  "key34": "GTYDBjyh2wp7a8WCdAd4GzVu582NkixoMmq9dfde1JZq2hJNdNam7qPLd29tbWfaXgVY3UJxfe8zXfNPJEey7Q5",
  "key35": "5tMXxJu4pZewaWvSKBEEcs2HLpPXV7FzMbS8qaU84p83xAQYH3H1NovifV4dP5i5ETZWdt6xwCvCKZAx7HhoZX3v",
  "key36": "21X1nmTc6KaT7gPZp1hq6T1rYYNBqQYkQd2rDhpP6cEdZhGSjUv4dYBzMakY3npkS8z1kPCT5hNqmmabof9mzEy7",
  "key37": "PtqXXwEGR4f3VuLKeB8voQNDk5jnCaBPuSxQbLoNmV6Sd7URqiE1gUtBTw8ESYk7ChtmvmqEiCgoWEGvWH8DT1s",
  "key38": "46VYkGC6DnEAJBHwNg3J2fCkpHetHfDQ65tCSD62hnC1NG4UZi8tyk9ztG4pu61cGLhCMei6gNQn7dzuR5ycYr3X",
  "key39": "vCaSmuaqWtV6f6vQdHkXtQwiP4cMp4uWFerMqgXRrUZ9SiYqcvneQ8C6bytgvXYTjP32g2XH59DMS4hMUmEoNEE",
  "key40": "2Y5MmeuLY6LKCubiukTDt7Avu5jd8GETBu1gVcfQNy41pVJ1hS995GytY3XyGPVf64x7rLUkGaCc4PdWWUtrqn8r"
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
