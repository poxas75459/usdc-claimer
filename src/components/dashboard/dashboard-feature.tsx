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
    "tqp4dZTP7hNsNaKWcYAwYUKnf8uxj3ab6fg9G1b8qihDNzpnXrStFBu4G4zzKD9oza5PS47rBNS3pksShevj7hW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riU67BnKgAdced4Tq41p4odyW5nm6hybSxQRoqXJzxfFFi4Gr9SxFDRTYqZ66RE9rUb9Je5PipQaq8KX93tS3n9",
  "key1": "2wNGfBCPJqvzgdixF89UmF3DkaRyfkUTpea7rAc6soh7YEACMfD31FNyfqXLxtw8KjM8qqLtT7Ay7HL9vUU1jDud",
  "key2": "yqGENK3uBogE43ZdodDbsnv9bjkYddBR5emid47CfAdiYHdj6FaEzaoH9vQn8KxWa8cfe5x2khdgW21fyTTZkdb",
  "key3": "3ZZb7vsNxRBL4miQxKKYUWUKPta53Ua2pqpf1hY1JKVHDSBXuJgf4iNRDykwZKaBmpBg4LVonNx4qaqrvWsCFupz",
  "key4": "3pUGmQqbvBHhZeeYEk567nKEjkRSVCb5SYQ9iXDz1NoxsFuqXoxGKWy1GSotbh3UbsFYKKvVXRzEg9ooE7XgoEDv",
  "key5": "3gzsXJDasophyquXChvyWVWJv58m4FUhrVDXkyxdaVucg4soiTEjFZWwW5H7PwrUkf2AT2iV1aTPynqbnmh7LrBh",
  "key6": "mJpjB9uAShtDEwKgY745FxZbxKKCawVFstPxLUTVXRo2KDguvXuG6tSLTWvkyNG6DmnrDWcB3BMbtW34rvbUW6u",
  "key7": "4rCBywpAcbZRbmSxbtd3MyCa3fEn6pr4UZbb4HLARKLe3tsZ2X6sCbqvj5Q14NJfH1Z332gSfDXbwxNyEwGUC793",
  "key8": "RzfGwNPjpaPokTZfQNM4ovLVVV6aweFSsBeqPRw9sVN6vNT1PZ3QLkh2VgH3Bao2MtVTgFfD7yuKGDyLbzEEBsq",
  "key9": "3RWzng41QkUr25PnNr8rM4pHvXWtgCoeQoDBD8S8w1Yiix28PAavrzB1K8atxeX3f9jUgcyPxhkcX69HY3ctHi8Y",
  "key10": "36kkEt2r7yigdfs89Xzuot4yvgsNdn58ZZ8i7UvmmTuyVN9jVmFpUVHhxCLXEY4HfJENebDwLKYfgecrA5TJ5GyP",
  "key11": "4sK97KVFw569u629h4ko1ECyrF6osxYV8NZomUVpPxPMoGfMDhoQgapRsWw59JDbXk8UBecNQmZWYDi31bdFTF4R",
  "key12": "29ohUN2zmF6SmdcWtTvfFu6BX4ZUS38LPRkStXucBTMAr9Z5BJPGVGYF3LYef3q6g9CNdth5AFn2hRkw4nXZixMd",
  "key13": "2GmxKFEQQYN8Gey1F8bgNN5SmjwKrPa8NPXunLPhoBDppZwMiharbwiKdvP7DStvyQmDuKVnu7ZJWSnbmvG34WT6",
  "key14": "2iZ6BnApXp4SbNpMymenCzAqkn4arxrYQs6KRaKVMZSWwSdvboj6UBiCdqU2U91YN7HWKCQK1T1VHe9XR1eAaffQ",
  "key15": "4Wou8eVp5KhCcFNvxZN7rjCjmDwe32vEPkMJM6MCw9TKhNkMBZecTbSfYtDgK6QE4nyd1rWA3LQv9Qz5dCq2jVaf",
  "key16": "JqVot7LzYhrmbFrhjTWpoiARRjaPskmmr6sF3GCNEMPAggXA28KjjhC3ooF6oGqaraZM9qCc26xEwZbQE5UkgYc",
  "key17": "4pf3t9TNDqfcbNYpR1P9mgKhmaSmyxjt4Z247XzHHgJxqczSaMLSkwnqJEXs9X74YPKxLKsqtL7ba2mL9iSQJw9P",
  "key18": "37uMEtEgbe746yDrbubir9Fc6UUPgdYi8Yk3z2R9YmYemmcZf7TfFLd7UYHAyGc2m9LmaJwS4jqTbMYZQg3tmKje",
  "key19": "38uzuvPv3tRx2Byzy2TC1MrSUN2BfyGDrszXgZZPch5rUmyeSEcJ9jAN8n6WXRJ35diNdmTdBotGKJtvjKiVZgRb",
  "key20": "4dD3GdZc4ZupfKVmmfQhWkkputmz9QfbxBNNw3jGy4Kv34cDGtaJj7xmoJhEj4tpoGqGWU1iiRu5izquyAG4aPmP",
  "key21": "2izPDWKm65cnKTgDks49hjmZ3KyLn93Y4249tkm8zMor6Dqydzgnu9r75qNSPSPSD65ReqEdACwVTmpJRowZFD12",
  "key22": "3syBwLbLDqqJPyTu9oHDRxRM6ED5QcC3c3Zib9nHNnyFFAbB5W1Y26TSXu8yVUnYrYuR8acLpi3rt91TFcGC4xyp",
  "key23": "3RVqTF6R3ERU6oENxj6GDjRNBH2e8SRhnPSH9RvjS5vpppe5ysG55exLnCDiTqHduYYordzuRj3TKACbyVU52jJ",
  "key24": "2WhkQc4Ttjrs5fTEa8UfsifbiDpBegadCqmJPE991ZwDr1yRhaVqc5DCkysoyKM4n5QaDkYA3AJwyEw6NrvqE3Vi",
  "key25": "4LucgWV2py8wRXWyQWEuiyMvvt16fPhhonrYPSnnpcXViAwLMkJEtY5yCLntPopWu8DakCMcrsxgEAmu7h5Cj1Lk",
  "key26": "2agg4UZG2VT7hwbpxzTMwUYaCyyUA923ahbLpbfHoRJidx241idhWzaBKkFAWtM5k3c6RJxjjJ2UPqfrGfqXBrCk",
  "key27": "3seRpAgBHokaaR7eecjTkgUen34xTKspGxLrFNtxR5mhAeTPd45DTCbZQiFAXBi4gtyFFfFNgDzsdGTFEeDCNTPg",
  "key28": "3gAeeMbQj8EJXTyXr1nxtWyw1DZjzbcFvo252JB4oByjvJDiXpV3iAtdarqKQKBvnAN9xFLnFi26poYAv1uGETK6",
  "key29": "4WesqvtHG3tiNrz1yF5ZQGZRzHEK22pdts61s49y7MdJoxhuJJiwpGrSidaQuitrFmTwokv63i4mdrV8kekXhY9A",
  "key30": "3BtDpPg1XGCUM1bhMqKkp5cPa7A6cAixQfPqAccmbS1LqUmK5hUc7Ckb8BdPxKaHw3R61vFWpu1HKfG5PjFXEUe6",
  "key31": "5wLVMrsq1p3JhpaCApSsgHQm5739TFhpvMWWZSKvewPhK1P6ENz2J7LfFVo6vSqYBzXgkuxhg8dgfjptKY7xZT51",
  "key32": "Qmxtvy1ecFFWp8E3uUmchjT9rTPjzaNzCxVmvr2CU6ZJ6UBLBAsEJvp5gqXhz7rtsnaTP5nJUSRvRr4YvwExNpQ",
  "key33": "4Pg2X6UKPmh4KhXtRBmptJZmMXE56cq4B5A3SUppv5D9Jt79eZQtbLbGkvgBb83hXvFMrqnXLUEwGBzdESanUqrz",
  "key34": "5P1DEopxDbiXsBk6HYnFrZvZZ3oiMmWh6thnZGSKN5QkJskEpLQ62ri73usJ5ewAm9eZ89qoEZfkc6uR3mAMJfLB",
  "key35": "3w8ao1EfRc4zAkVSnLdnPmxhnosq4WiBZyxn9qz8n4AmsVZsXWK8PUSZsUB19xx1x32viAGeMMCgZTrGJ5NFVWPc",
  "key36": "FEusqAevVtnx4i1rjLyQnFVUMYce9yEkhvM1DDuCCa4gjoFjVV8ofNDgMDjWxhPfo2Kd8gPf4797NGNZRXpCWcr",
  "key37": "2PoF9r3FWaxq4GFCigpLbniDS24qo6CYUgLJCrapTHsJJMzXsLzNjh1z2zVQ6zTCmocCGyxDMmCXVLepTQNcNrxy",
  "key38": "2BBnNrk1oFXUDYv7JZJAJij2KAfQ3TYTg2PU8p3FQhwgNPNSMTMJXPn4UxAia1VB1SDTLd1WffjWaDW2bybEURpw",
  "key39": "3ibgKu3veG9PxJPGMbU3omsaWhUreuZ9EaKrxyug7NX17Uo2KLf3uKkXb6LSkaYsBVz9fqaG8xr3QxcxfiC458Rc",
  "key40": "3X5GGyfodnG1mXZiZozh9W1rMhCb25RBKRdpVNF1Y75kZRBeoAe4dYQnRA36kz9zrCGzq2KDzQTCvw52tDWeYvBd",
  "key41": "3CGTPsSWX1zxZ2DxeabYGk7qJCaK5pr1EtWqjQP4tmQwYkAGKb3fAx6tLEZAMHVMCb8V3DqYvT9JBq2Wqm4rg1Gk"
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
