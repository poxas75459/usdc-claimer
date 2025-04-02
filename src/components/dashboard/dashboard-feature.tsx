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
    "4DqfW6aQAaYtnDY5Z3UbTsNhTbuHNNBuuu3T63XP2NYt3LEoXqstEJkVf5psQdnTsesThzFN6o84qxF6XETkAb1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpGefyZSHz4R7wvaMkEmspJGjdfSkQoXartDoatdY5okbWHzrJsV71i1meXVbVkzvYBNgW3Wm5st68p2VE89dTG",
  "key1": "4GiB4r4eVQ8HpBqNmCEq2dA6RJmDw2xgAS7UyR9S8s2fdkpjUE95J31CjdtwDqmuhq3Be74Wz3UD8zXBLn2R1FbG",
  "key2": "2nFFjugD7Laus6ETAAXUst4S2hZGVCpSdTorotxR1Wx9FdRZ38dnQTbeyyMd4fyzExsbx43spyK8aEHTMisB9PHj",
  "key3": "327q1Yt8x2eC75zzBu1qmBRi4GRZsiRbQtbMynNAAhx2zz4C3GwsGfenaQqrzzjg2zPSSu3ZNPxk7MP1XoRmxyS1",
  "key4": "3RxHPbZBTbTmspEj9YipmMrdGTc1SyTzk7JpK1PSvRMycKfN3DU1n1UkQ7Li2wR1V1o8fBF5RAi463m5rfdcJ37s",
  "key5": "55a2ke7GJL7Pxw5o1FiJ5tT7hjPBteeqfZPQRNLbStTEAoHnrzfohHfGa89DgmgjtzYMuzSpeiDcBXf3wuEuUPRJ",
  "key6": "5GkVVmbMS3s5gJjJSkHg81oaPporB6i3cMr8der6CAn2eD2cwBeJVK9djSCg8a7ik8J48zn4hjnMLKRMdiz8x5ci",
  "key7": "5ZjPyHWsKi98t3SLeJwY9VfRx3R3hgcdvEQCYcvvoP1g3DFkYmprNM6BHKCpGMU8Y1iYier48eqkcAj9YHBajVU7",
  "key8": "2u5UGaKr4eZj3nNcz18XkKS9RBkSZXeVw21eKpHHtvWXRZSocPNcx2QdZ7YZDVxfLS9bNd582EuUZbitADzg2MKa",
  "key9": "4TqebbVmjnu9crauRQMdTAv5SkKb3wCb4Fzu48JvqDTFpGp3uNTB4zg6ErnVEhWreDyDS4J3T5U4ot3QGXfAfiKP",
  "key10": "44PVmSNiWR318WvgUzUMNeufEnp3LFVzFuHiVnxsv9vZQyGg9TQZqJGhoyq3vHhTPsjFoF6Vfyq7MYGK99AH3xjs",
  "key11": "5GPPEmuavFWB6N6tDMt8ofi8hZ4uNrVc8FdVzYhVb7SF99gyDrU9GK5aGC3DTJMwwgH2kovcmaVW1pdm5fUSauHS",
  "key12": "5o1o2j5MVQkHtXqee2cp522TeShUPY3ktqMp61zUPNkMx3Eq6jKbDABkwGnvstiDFqCp5x3Sn1cNSG8QmSVk2kcJ",
  "key13": "3XaTA1oP86F4Dq1mDBuozmvGgFQ4gcgSv4E35CvqT9USAeH54AKc7ffGCAKShC3h1vTdqfcjxCy2dcCsjZ6ztfvj",
  "key14": "4rNst8YovgoV9U8uKuqEe2vf5Q42L8aKgtSpprrdmTXYmoHpDRjBYjTC2UVfKuvyEqou2fa7jmsHm6qCBq9EzFCK",
  "key15": "22eKeJugjEAKah3Kq8EbEENgeV9gJFNsaGw7uRUoXa7vf24dQRKSveDm9RkmVmDdQDPMAJwDKpdPHrGAsqLfGVEk",
  "key16": "3nuAYrwMCTEJQiD8QsTTBdx9ocm876bhpSV3sCXNnVenTtZYT1Wkm71z2evJwfmXiGYLZhCVh2SmDjHJuX8398BB",
  "key17": "Ut55ixkWszG2iATYXkq2UtmipTjVHJsKmrbX3dAi3tesBxVKQL9S6So35irkyojefqt4vmF2ERyhch1Wz6CVSoB",
  "key18": "2Cr7Hj6kVBpWVF6cn4LTZejB1hEgFuRUcGQa5MmBPVrcKqJLvD2yW6Sa3FjVPDLLvfkERj4eef4QNfCH2NooT54p",
  "key19": "2AzVdmwKjbQAUmkcLGSWL1Sm2dbpMfaBafjz5EZV2JfJ1c4Die4DLRNvJQszYu7M721d5cRsimXZdEepaRhbVBtC",
  "key20": "swuNwCQgvxAenr45nQSLoFHxAaN9uic6VVQc2kKpJRgevtA9Fk3T7iBew1GiFbwpwegbeuBpZRh3RurStWK2dkr",
  "key21": "45kbh3ByhMTp8jB44fUXxHWhjvgxmaR5YamPk7Z6mb3PdtLWtxXXW3xcphXE22J4BKbbmHNbqJG8yYXG9xiSVdr1",
  "key22": "461md2mjpbYb8cF1KJrhTJF8Tkx1EU2qToBSemXuDnXgu1h6ZuCUXxpWfUPgBzcAuYkj63DCUnc1RZznfHifFYjm",
  "key23": "2nPkjXf9r285rCC6Rbbgck816EBWakbD7qPnbNWXcEQf4duwjYUqmMknjtkthpyioGQSiUstahh56dBPJ9CVQ5TS",
  "key24": "3VWSnE5HBj3VjWHT2JfGvnBYL5i2hkUT66MFf95fT5CQdksWAty7aXb6qMkmE2VLpB4NoG2W2ufdxL5WCWQeDTFt",
  "key25": "469fBiQvHC1uEZdguBfYtPDgPh8uJLCpZ4f6i96DLxCLXeua6c4nxbbJ2Y7HM91jcVXd153eQXrvhGVXE2fBozQn",
  "key26": "3sDh2eDf75psamVwUEKLD9YW8Q7Kb15f3BhzQDKLM6pBa9rf1wzauLg42q4YKBuzkqZe88Nvw9UTofbfRMYwyuTX",
  "key27": "53wpD8aHoAeXjGhpmqZQsypx72DSrdejvU4aB5oaLbbEw9vhbc4hsA3nrMSRHGLDrNF8hKLiwKfnnMhXdwJMuVyx",
  "key28": "nhQmhBY7ZAaA7DadVhVghoj4yMLBUMSMZGzo2txatLVZJMkxAvQKPctFBXUhUr6sWzp2SCCdLLRtfvjHFYZVmLK",
  "key29": "4wFWPtmRzPd3HEsK7pNWKYCCXgo91rR5kCe6uHyYWqT2baWu7jwbaagSXBHiWMUdBH4oVDaDJ66gsVMwyPvBEmr7",
  "key30": "51ifGwAVkB8UDpBXQX1nKhXo7w7XkMhDFwDngk7qS4nB5iMvR19c6YGApugsprXLnaJMoYMJNS7MrvBbGaHGcRed",
  "key31": "42HMr1cJUt9mfCoAbaX3RJ5mv4oVg6WuevsryA74bhHoxxkK1N7nANzYHyXvQEp8d7Vv5WjJrYEqMKbFFHQ3cn2V",
  "key32": "4QquDgkAtpJWtVvyhYKTqcjRRvuQwrwFDGiuYaRN6KhuUDXkkkvWnZQXW62y6e3C6kuo3NSMESKBbkbDvCzjNPRJ",
  "key33": "4EppV4NrFV4T8qfF8PkiM4XTdXpWETiX1nV9zhHwgyF22sf212KY89gvZAMHfvwPbGAm5FjhXNKDRE9GqxDGWmxu",
  "key34": "oU1KuJGrotULF6rCbSaFEuD6HpsJCK6rrnsyGg64JaTiGwiryLiFQjouabrYjt9cJyZNsBZ2k6nttZjHZbiynT7",
  "key35": "4JfUdxZVSjTK5QE2oMYW1YhEq6WK1SmgTpTQm6DrzZHJ9VSixcdRQwWAfzV5s4Pv967Co1trhXBbbGUzVQARNRZr",
  "key36": "3f1Rg4VaFyZ7Wptnve8ZydhrB2akztqgNByuJG6ambfMUZSoXaovkMknfsP3EpVABf1Fqt6nfiGWKTbsePmma1mj",
  "key37": "55M1kYbzzbXu5nqNCtbHKwE88dvkAVVGV2yB3KoD2RuoY9Zd88jE3fNK5mEH6y9o7xqBCwyQgtxtu2Xh2afGMQZa",
  "key38": "SZUqAV5gRp66BLpEoBQZc9QoCXy2gkgSft1Ku2b2Dv3iRSvdX5tHMcYg38qkWxWG2P2LrzNa1NUKbV7FZd27axe"
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
