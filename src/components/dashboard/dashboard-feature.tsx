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
    "3C2t3tnLDMQXmQgZ5yyYjXSfYZ5Zk6g76vAG68R8kGA8vScBVdLsKovCmaLKtWpuEhQuSnCBxdAN1pHG9otVQkNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWhzmYZARuy2sjXUEdt4FaQcTvoHCk1cNFahuJPWuSsmCwkZeGRA2xhme32ifkTbFFrVqUepy8gKA6FDJ5EDHBq",
  "key1": "2vmcqVTmbfvBiLipsfStAaW7BKt6h6cqL7QzN2uRVjQr8T3p84YEhzNMZeSdF1R1z5Ym6wPcBoDC5bgwF5Pn5isM",
  "key2": "5uDbGjQ7mDA2XVCHtLr2wCLZueSuKg2GWcCbPGaByzYNvQZcehWqartZMrY6mmTpjA1qakPqR9S5gNZf4om1HcGH",
  "key3": "26Y6ZALeDUU6o78Mjj8D1aqUv9zpfRfnGiLkof95eSKVfYdAdrJigK3NBQ7cz9uWdCTSq3JuchxBpvQ4JX6aqKrW",
  "key4": "5p7AB3ByRnEZHciLQw1jy6bq5PhcEtmyqVBHubxVkwaAP4gT9V5G8JXh4kXKcauyQA3yv2YKnswZ8KVH6AaNHkpX",
  "key5": "3v3V2ouh9HYC7tcf52xg3cfxpymEa3nr3A7stDZcbs9ec4t5bDcpFQKg8e58tF1EHWTeFtXicao3stdLFJ8Lp1qv",
  "key6": "2oYmSNZPKsptfgtfRXrWmXyGRmt3UkK5WvFfBuTLSJip88hVpmdDsiAEGuUd1HV4KUfYUUhgNHttnA8GpJGfcQM5",
  "key7": "4n1Z7u8dzwzq2iGZupGrzioESUHSNFm7gpsvK5kpoKKZLPMXDCvS165oK11oAsBUmJkqTNARZQh5yFWvzfwEYjTw",
  "key8": "ezKWKKphLJCHVwEKN1iBhGi44YBLjsWvWeZbN551A6JJQVHX3jRTbLMtXn662jHPsFhrHwrpFDGiQ2pUs6UMxPE",
  "key9": "2AygkEigxbhT6xRSBwTFB9PH99QctxZf43ghNaQh4e1nGhzvQaJNMGXBEpSrpquLxbg4zZm42UaiGGX7LQh2sL8x",
  "key10": "34mfT9DEYszAyrxNW4rJWQxhZ43vMwLCP2TBqvw5nrmQFEKGdAPNqTznQcbS5VrR1qNYD7WP6zqKs8UH2bH1GDVr",
  "key11": "4KfK2um42TbLPGUc9WG8GARsLtqNNmke5j4ZpgPumcL9HdVq96wFFQZE9uJyaFik14ugQfnnZcJtp4AUa3CoNhXU",
  "key12": "24wJtdSJeuDy4jX8GFgSF3tArnhxLhGPAqFQWN7XDMuK66WRET3faAsmrD56U2xeP2osAAszQTddoLt6RUBwe8VR",
  "key13": "56CdjLjjtbDjBWjtp8uGhuuNMzdmCVV545Msh3qXTShaTxTyomPgFNnFjKnzdj826VaT4ywZmxrbq6rzmnZ7FSD",
  "key14": "5hj4SccDuGRAjP4NfRJMvxmwRCKY8eQt17ZRVjy5xEZcLofp7p2knnrpFVzvBe7M5pdnENR6VEXjKGJm96zjnajd",
  "key15": "4mwMF64rGzyxhbGkquWzRWg7JTpfVH4RouoY9gLZ8cvCj5bshDFYJc6ovXTsqHTRfXYx8zF5xsBZCmg8Zayi1EMh",
  "key16": "2jLobcd7ZRinPi61UcF7p3bdje8YjrtgkxyATucpgfte83kbtDQdz7BYbNciBpLCTG2gFDcZnHYKiexzmPLrN9fm",
  "key17": "2MGFdwNGCQb1jbMTN7vrappmqCdKAx5GzVY6jb54b8v8gAj1KmZVFUYvcBWaPbNeWarV9NqbK1tHiad6AkJNHDU3",
  "key18": "5uz5BByBjXSidUaukWot3NhsxmkJgrhGdAoRhMN6mekdCySjoxkAz7UbdEfnQawqXRiQ3voB29efMq4iB4QgotLp",
  "key19": "KGTtzMJ4kuQi2R5qHPyPJBpKTwpnNZjJgYGkPv8BvdFxx3BzZDXAihtojEU8vB5BizZGRufQ2HebBhLoUia86iW",
  "key20": "wndS2ZBHFa9bajL45mtQifEuKNoxTF5H1pUiSAZqiux5AWKtgfLBfDMgvF7DMYU6XZJELtxLY6fDzUfNkE7HtQN",
  "key21": "4FdVmreeTHZtxPq2ydUFu8SQy9mnULr5J8ERL43b68xLKXWjig1asBdhjzu1nFAmwcY8Yjy1DmV3RdyY94JQfW27",
  "key22": "63Kwjrd2zkbCSQqmEaHHmh8H45NePYZkwAm2Jw68UjjBNN2tr1dUiadap6Qp2rgFV1BTLUtxmkb93YMH7vD8bRqT",
  "key23": "5x1ym5Zg8SYYsSChoZVTJnuZdaessBiw1vj9hDuaW7CjHUHfD96ik3W9jVHttUtxg24t86HukvjQpApgosTNoCh3",
  "key24": "5kqptnHri3THWMGpWXp1iGMktP17RE4ySNiYWPpvw5EJFpMdHhBcjHtRmQ1tcrAsfhHo1UzC1pDRNDJvQt8bQNnB",
  "key25": "32xC8EHufjydsmFvwi7P6BMbfva9bXQ51tMfVQJbM4ebR7GN6tSzQTatFAinK2LTizjd7xuL2fnW2d9NKCjfN454",
  "key26": "4qJWzJB5MyPyrXHNZSiFj5a1CzahTeiqKmGQ1CvFoeSEcwyi836PntynwfA2Urr2fi9vi3mG3tGfsEmvxMLVED3e",
  "key27": "2aLrKmSkpVDwf2pjuDw6pUaT4ofC8fVpeg9sLrYU56UWe1iLyoffN62BFV53BWVyDUu72N8RLbFj49X4RV27WDrb",
  "key28": "3Uk2nvWctfwGPfgeBmfDwN8puKJhTJkBaaabu1LL4FTa8jux8j3EwxVqDg9QvoKY5hepKBCUiN24TpBmnZzUnfFL",
  "key29": "3SXTsRyTHQccTd6kqLi92RvESivTbv4DFFgui9TPgMGG8VG3L7kgH48Szd2GbmawvyBorTw69TL7rkA5Sapy2oWv",
  "key30": "5Jv3FHDhZauQmmHAMPLnxXZWFTG2R4VsDHJZWsQWhDQrK4Vcog9EDWiWSmWbxoJYATVTUuL67VR1QtksSwRr1ExZ",
  "key31": "2MbFBUq1Q5TkxpP47Tf3udEtaN8nCtFooMn59crrAUHZxM2PyPYAnwGS1eh2vTpQmvRPC79vXw9FbQgz44uNtcgU",
  "key32": "xvv3wFMSNhMgCpxvvnXpM7SygAru1MqfA2h6sQU4eQZJ6SqfxfRDqQayTMwWZU9wLV5gUM4Mn2QvWdN8CLnN3o8",
  "key33": "2QFmFvAVvX6HVN5ygYZPdryCnvrc9TYGUS8ch1GdmSoTKfxkPSU5Sw2qmumDeyT5LJpHiWrSApp2y6dsA7qUP5p3",
  "key34": "3wJwE1GVbpG6YE3vP7fNA8q7woiMC58FGgDXB2BVi2942twDnz5h9LHg7GcKJEukyrrCUJ3mQXg1FJihYnean9V8",
  "key35": "2Rgjq8v3JeTL4KjPYyMzdEcJ6rmeoh9tmhn2HrTC5i8ZdYcQNrRYS2cedaFG2RDxRFtv3s9LBQK9iQnE8PeKRE4",
  "key36": "4vrB9rBLLvoTk8t8ZjdAkBmQYCK73qjajh2tG9SNKHRziGJuQiSKcNP6soiyCbpGkzv7udYJSncEZyxHN5w5jSKW",
  "key37": "3i5b7dGi3GNExf6XCy5XJnFVnJsb7cVYPY2SyesAkmgDwF2uu4uxwTNC8xTFVC3ScQorDFGmrXAm9iHZ6XxXTYmD",
  "key38": "3dNGYNyT4zxLRMxVakGNYCuAUiRqK9z37wYXDUfULDBQJmupjhbmjvua3pZW5mtRigAWfizR4ramtYh1LAsBkNo9",
  "key39": "3qJAtC5LgSfKdspdqMfE28o5md5PerttGjv2Nce9TcKULu7Ek9P7tiP7vFa6MvJeE6gaw8jpVPVQHSMWLmWyiTNB",
  "key40": "4P2LSv9ADmFsybYGd7zvMXg2m2e9PTvYB9rDUXyTHT3zUQSiMPH3cSjAAaV6SrHDEThKvCbpBRnoTGk7mhjXdxRe",
  "key41": "4VAkd2Mvrt6QexUdu9YETN67uboJrbYoxvKPJeXgQGCZ21T9g9uyR1BmdN56bjmuLkZi71j3ZBm7iRosAZyBAws6",
  "key42": "48iCm8SVdBLDiD3K59peVhpV4Wr3dCV2FrMughYSEVUp3VNX5ZhMqHdmJFYt4DPtQaUp4UZGdJ6fdLWKSn2zhhyU",
  "key43": "55sEzHSxwb8Rvzs4iTkw5K6PvF65Jto3kgDYPrmkaWDXJKJdeyQ6i71M6X9N5Frt5rZUsdstjQ6JTGcCHQFvZGQr",
  "key44": "iuq4h9frwf9QoeoZseAS1PDg5vmWktqiEL3QhhcAThMe1AcX7PCSrKTrBRPZhzoSdLTKj8c7veQNgZe2TTNudeJ",
  "key45": "JmjvDBVNkp6NsWtHTdowXzXrbwvMBvdQZEXqZv9N64inssSFZcEXbRto2Ga7QZyjC5U7yDvbkQMhiQj2vpXpLtY"
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
