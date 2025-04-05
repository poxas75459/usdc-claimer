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
    "2yFZiipr2ZPFK1aHSEtUszoYahMULbXWaArUqKjdLgu2S37p1MBrE47Dr3JQ4eqhzERs2wD9wyZXkf4wDGUQGWmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d7TLvLCS3nx4osCDZqarhfEzBn1gusuoQ4hZrHYbbJsqxdSby8adgqJ1YQHog6dV7JgL4d7cRN5gFzEbwuk3zhk",
  "key1": "2iaqFJW1CcEDGCouqG7VACU92CEt3Rs3d9zkMT9a1XSe8kh2RZgfeNrWqRWyhpsc4SC5kkFz1MmvwAvr53avmgiY",
  "key2": "KEcpRmCgyu59HRpSWRGFKPMu27EVfZa4cXxp8KZSH973necCt6d17T62bP3AHjhaDxA7b1EJtze34JNY7gktHyj",
  "key3": "3AjQKyYwBv9Nj7TYfxa9UYiHLv9xSLo4Mh74n8pn6ZjMYYCJJMZnqR3cqTD2iwbW6bLLMZbEbS7t9yfYcDM4QpDw",
  "key4": "2547sP6LDoMnZMtvvUFRUnWx8dYwaHExBDMNseq5dwY14uvHU9e7jjx5kDyZneG956ed4snanmbUt91TWDQRahys",
  "key5": "2JEUHYN47VUhashWEN2bKmJkxHGoCvwnraZoeNhoENDT7iarY91LPnvZpFZNzJ7jdpEf1rmVvStW5Vje5nbyNed3",
  "key6": "5rW4GJ7wJuMrKas4zdaNVcQPsj9UTw5tkiWYDHAz7GzEFWxcWkWwBGP39VjLeyhNbNC3BUYCZoPpfb6H6fVNhzQd",
  "key7": "3iAfrdKX3XVEUEVHVeRsHZ5CzxMVed6XGPy1rAxjNeSfvZeBHGJVjgC7SZWEM2o1etdNS8qjXrPT3fpS9TbqRQZR",
  "key8": "4cEvyj9YkpZKqHuvvzk1G93J8aG6xeqNgiF1MmCgTQ1afCpGRWHbB54wSk8N74vYqWZ75pbWopLhTBCtNzZGwKDp",
  "key9": "BzsKgqYE8T3ya2gRZHKy29jaG8SEzcCRGeTMb8S8ZsA3swduYvKKuyyWLKjnoKuPcpaMnx3MACaTRDUihb6a6aS",
  "key10": "3fKdAr2XDfYCPuE3tmWsS49bzxHnRRcL7KcnsVkYUkHsCxxwVthSzs3BaGejJLoLBwpPpe1UADQkrLsr7y1NAgRj",
  "key11": "tXJMZMoTwRHpUkyoWNbvgUw5Yt5ZM3KU17tXTVAqbaQ3jDxKXBN3RhS5EopzhkqS13Hi6Vh5zmkRNCFGM25Q9tc",
  "key12": "5mjsU9G4URJNTsuMuvecnJHAbVucRJ3dhf82xaeqqpfGfoJPPgdrB5kSu2TFSNK1PKzCkCAkuFBpEDPVC5jnniZB",
  "key13": "3dfL1oZ2Bq6DVwWJmsRuK4AkC5BmhrCDQA8BCExyaFvzNGrZy512CcqLXqavgLtxpgyF8pcEUeVCxu2JbBeh241D",
  "key14": "4ErfXwWvMAjzbUwxy8WtzibHHENtxhYiPMU2mYoFEKdJhCoEE7nbLQfr66gVJnnhmywYNE4KwrgQv8Jk6uhbj8BU",
  "key15": "5MTHZsGCfNEBFrdLtDqsexeT9iioiyXeCnrXoDJD4AH5L8CegQhxEgBFmHhkyP5gY8qj1nBdujQLpePe4ZAdEwe3",
  "key16": "61YMyXyhRNAN5qnMeUXsRXToRRgZvkFZdRBJs9RLemkc4Dj2YBXzHMt8G5XVPnFybSBzzXY8TABDKuNAZQ6ZDHmJ",
  "key17": "3FBgD1xfeJRkH6E4UXygTEGVYgRKsuXfLXf73WUMC4rbfaqNixJQ6qCfmSccH6LcW5pVKszzvzA45re7ukPJQL13",
  "key18": "5yhMwCzieRh6qbPga6fodMQ62KmzRdeRYy19WvEYWb31diyPswpKvTrbEpbQohvxoaWUmugPmaNNcjWxde6YQg7W",
  "key19": "2bzBosq1JnBWWY8Ne6dKuPX5KfGeQ21mm4wYqdesCp43Ghug4de8eqaSxaMdue3qwNDLpDzcQRyE5GoSbq4SbHQ2",
  "key20": "259mpaErzYDBHPyzk7VXCdFRMaRS9zzu3GT1KGzfov4JrxB8Zn5h2nyY8FYV446Js1efCmKW5V6TXx2NEdnQ8YCN",
  "key21": "5AkdB6bDdYG1CagaNhEqJbaDRALR4uYcS3upwbZMq4RjBRKQtfPkxYwQKCknHpNSc2guL1mC5bb4HahcRQdq7Je4",
  "key22": "54kug3vQNyzfKRLJMs8N64okGMeDMEgwiVTkWVx6D3qe2JhMEQ7FiFYH49X9RBfHhpDHD2UtJAqEY38vafjxyKt9",
  "key23": "k8bAAPemATfAtT3nh95ZgTDz9rLfSDsX8ezfCM9MgQaYHHDszMC8sMr5sSyJwjjBLsi8QksBTdghtnDjmZFxNhE",
  "key24": "3vk3Ebm7JsxU6LRbiBg7zchNmfwhPPhBR8dZYurkXqfyYbzAUSqZS2k1rimAkQz85Pku2ko6BWQuW1uqfUu87cRR",
  "key25": "5XLiRSkDMh4Q7zv36jPH4NWKv3xuHyAPdtWPaQ2EfEQNyN8GxGAmC8UkgoEJJuqXfyDpLr7orJtnNYdtuXHyTBYx",
  "key26": "4DVNF25Hh1Bq6GL2D1YwewRorZkPxRBXwXHt59Mqv6mm7tKePaW17csnxG4FaitaRjWeZGoRKZvfXUAUakDHU4cM",
  "key27": "41jyLyaguWK5dQRPNAspiQGEf5SpbozjDoVyyGKk52LBSzwuZrEjy9yxT7fGndoErkLZ4ySKz1fePuJqZbUZkNKp",
  "key28": "4MwcDwCUnefifhRux8d1yV2thphbUB32MeZoAPndjd2As1h7uctdCcS62FAvcmYaZkVk6ArRmHVQxWgg59zQ3qMt",
  "key29": "4D3guSuNGqqoRriAvShxfAACSxkuGzgBj8BWk3AFs1X6zJivKm3BRQG8Lafs7dhbZz35FsT6oSaSr12uq683iSet",
  "key30": "2GRy8DBjruq2fTJAEmXmWk7L8Uzot9Fob3fkseEu7tgukpbZCPstwe3SjnMsyaCVifbeuGMRJE61NKVFK8Juqb5y",
  "key31": "39KAPf3aZ65S3XqLuMcJCF5mzQPVowS1BJutKwNJBaM4rFQrybDk977PfMYmqdFuSJmeoMqeUyphRqYhrwP5PVQz",
  "key32": "4fZHCUdbFyUkGHKZzDSJTkR8JeVaY84jab5ESBXVvEvYBFkJa9H4kN3ENDKuTWGwrUv4T2zBiG6tCkmp6vFwaeqK"
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
