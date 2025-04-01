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
    "3b2rofMn32m5K3tcVSkpViZyCEWVTRSKrhhEe2wnuz9aSFUrRt5AYWHMWyMgjhsc7gLm9bZuhbc6BQA6rxrRsYdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kkx3ddWxiTzEK3SoZYeKj9rJEnCSe5SJ8R6fSaksSMH38vYBLA2AznZcTKQwSmWE9nDaUR3b9ugnjhcBKsrZpqd",
  "key1": "5sys3KfeEgFb7DRiw4TG3pEMaoNzhUFFNitvTTsJybEtFe5DteK6cemkY68PQ2gSJcPQJ4TYdtsKAZwFaKtVUi4t",
  "key2": "5kNts5aP7u79hTZUDNDtWhqwPEcBhj6XTXvhr3BMBHH52VW5V3vRkyAggeqRJeFaTufJoxaZjik6QsL9AdN4kGMH",
  "key3": "126P5tJGnsY89788WhviQgBYvjtFqDHLvf7P7o3XRtvHRAG4z3sLZGY5LkwTywpvRcCAbX9B3DuacFnx7u9mb9r4",
  "key4": "EePHD4DHiDYmTX8TMeefdcHKKBDr21fhmmP1VJqDWsnz8b3N7gXdT43VaKB3MoivBGjWkJ89MHr3JDQude1EseT",
  "key5": "3HPDuvwG9ivTpkpMhqADgh3mh732qHyuJTJYx1sW2JgTABCbgawz6mMiF57shGCdCcAgyDgh5kRpuy8jNBvq4cse",
  "key6": "43a1aQQCXziEconJxHD4GYT4vuYpSxj47GQ1siiSooh6yqzgxYoD3mNqjh1E2JgjhJRi2V5kF7THofwNjPHLhAXc",
  "key7": "5CUwwbstABYtToWn5VDCipL3V62Camuu3NPfYgMr63sp19GnkCkN5eRLFZSaLJBzwe5L5BYiY9Mrj3GLfJSQHeoG",
  "key8": "3BgfQycT4sQYHGsNvR8xzrogWBFxe1d9uUWYjvs4gbNgxQci36iNLmfdYA3qF6cuNgEJvcUA9u5i1AELkp7fekPc",
  "key9": "5WPaLebvGFqnzjZX2HwThAkJjg4y4VciSvxgXUFR84foRZcPuqEwi4Fzw184QpuuJeWbHtGKCDM5pzqMdwuAxkRd",
  "key10": "cqHcraZPuSWXWQy2C6ujShgWPJDCadtxyQnv8wu8z4Maa75dvq325m3S4uzE8Ypaf7g7MFMCu7wG5qd5jDd7k63",
  "key11": "sbqDMwu8DJgkyjPQFP5byCbkzFiDPFLLxNCS4qi6rvTLwtcxgbixT7PiVh7xx2JzaLEkveGxqyES4goMSrkRQsh",
  "key12": "675Hs9ZTq7d4ybTCaH5X3uJUf5y7pL6pZ3Q8Zz7swS68zP71Dux1tFVRPJ7fn3r8pLqovzew4R5sJHoC8rZK9gmt",
  "key13": "3AQsnKdrZSTQY1186J8rfmTK8tKXxzrkfdyDSfnL9EuQuC8B4Zsjuov8ZucGkT9uxBXiML1LVxXjfPs7Ff76DN5a",
  "key14": "5LYdQz82BBPQZ7EcWNPqas3hDEjARUGiQnvC1oQrN4CyYavsr9ZSZk3jxf7Yyeutz1XUqbei9G4avKDrQk7zcMB9",
  "key15": "T3DGbKUU5aBXKH2y9SujVXHEiZYe4JeWrujkETmgMrJayBWbG7rVinUAmX85NRD5xJHikv4Bh8oX4XWiFmtxbZi",
  "key16": "2i6tEtFv2MDX8Ko7Ahdjw9enXb1nu9cwaT6vdvh3X8rzDrTCS1j1WZZJdLYFSqie2Pcyg6vyWyiChbL8R1XYUyR9",
  "key17": "5fjsJ6gu5tYaFEsGEjFWKV5Bm3xjDkmXSgmWgGQTwesigMsQ6zXoibYgjLG6V5pdUHe4thkV9YKaB84CvgUdz7Bp",
  "key18": "4P2rhqGEMawGHnR9xgNHpZ1wa91AjwzcLPx6EgyeBuAJf3CjZb6rYvptmoDtSAkXzNmvsZkpsyp1G8f7ekeLuda",
  "key19": "39FXTL8fGYdQdmXP788dL1N4ARc5rsj5cAdchvWvMorQhmPBrjUZSXH5WHGpipR7VmstonwNndo2oeuAoCcRsdHi",
  "key20": "5VQcCAzVCBanotg4dxtZY7Se4hyS2nukfTeDie43wQhAngM1sTzHuTMBGum7ZbDuqs4rM9CWhmPt414mKqqWuaJd",
  "key21": "2xrFp9T6t8f8wZoVhecbgXGuNnZQRKxxyyZ2RTBs7seoYG9Yys8pUc1C84FoGHwjnP4Hg2YwXLj4GycKdZySBr65",
  "key22": "5S3LUmhPuWdz9vFGrhd9P2z4Ge4pbu4PM9yzBjU3EJD3iA9oCV3i4QQgfNpopTg27MyXSTcgu7755eQYHvxjNqFa",
  "key23": "2f6VcX1XzYhYK9co1VbEGBer1KNd9aYb2GS2dt8f3cG1tS7sgr3Ct2rQpvEZpdpHazpe6PirvjhgWQVfR1H1eeMG",
  "key24": "62eYoQxt85SLp5XDoAt9jMUXJFSdW6T4wGuYeZ65jNPu5KegDgGx4ZnTphH6Acqgtz33teykci6qNn1qnd3ACZ43",
  "key25": "5JLre1ijYaHSMHz7m1RvkJrS1caKWFM7ck4soazjKXGSWAwrmyrFTJSTkzsYdPvCVVf1uBP8Sdf7Kn2RUKc1GG9i",
  "key26": "3csZbKZMFj7TvfZXBiZ2h1TwcZa9RBKnt5vgzgrfFaPhWyq8mRKgLxnmjbNY4HCTjkaMseGCNgcN4yrGeY1rEKjo",
  "key27": "37rQG53SAcVBFSBQ7BWAiqygGo76smrfSZJoKfmfkbSSdzQXQrm4X66RcUHtBdnzvf1aW6FKTYqevzNG6CenvdwJ",
  "key28": "4jXKpESrTKFbCyJJfBoQQfxjPVgNE7oKUgGEEkFyHRHQDVPXsWMdYnS9eTJLEN7VwU6mAdE1h1nzrbZd8ET3RgQk",
  "key29": "2HAPe5gTWrT2okW9FrxNY8UPaMBjWzMajdNTw6WJpkmun8Xrch7otYA4FB958n27RLHBmaajX7fLDV2f31sCfiC",
  "key30": "2RaP7Vv2UcNGsft6xXGMqQNv6dA4QQsMFvPEA8uGGSW2KvuEDT5BXvmVFVBsx4jkBGXhtnYSPY9pdxQNYJaK35KJ",
  "key31": "4jg37uZzzA6uvFgZ1QjHvxc4RrjV6H7R35YFaZ8TrTohtZ4tktn8cF9cz5sjRkAvvmQ5vsyrpRaLF3UsJ2njCmpM",
  "key32": "4gcJ9s8xoNgS6b99TYsF1VLUWz62xrXg7Di33SjVKeAw5tbksY5AS2L2pffmyR6bm9dRoupuZADyRLeb5PEUrkV2",
  "key33": "wTk9wK9Jens7zPkjuh6jbiw9hQ5DF9ngJFdTgjGJXD6Nhc9ATH8s6H8zo4MUQUknMM3ZWTvbDCEHckv6uaSEc3x",
  "key34": "GJqTyk8dNBf4Yhnyy6c7tDN8g4NYcMBBJXQfT5MxMJCVYGEZCyeBkYt3YJgfBgBfJXRcxqRdh2is5fiWSRAT1NE",
  "key35": "E8gUS8EpVNP6CxHQNivrUVNsKWLacuLsgnfWQzDTgD9W2cATCSeZDNb18NLRZtXHW8UeyT5HA9rgfcJnEME1PB1",
  "key36": "3W3BekS4ntfQEmor3JQ3TcAL5X8CXtuiSntE3xEccbe9ZgfXwdxR31TPbrXXpx3sYjyr3TdRjCyqRnrFTTDwkZRF",
  "key37": "2gT7346aHWv8jUBV6xEs5uSi2uXcTRTkkpwVLiAmL1VcpDajgFcU7ehmUFETAFFsvNtuXggADbFfMmGfNDxuxMwE",
  "key38": "2qUyKdE9Lsk9FrghtPDpc9bPh7gc9ZHotYAQqRW84L6n6BGgw1n13bXUdAD7RKZTEMNiopbDoojD3KSiR3YVE3rM"
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
