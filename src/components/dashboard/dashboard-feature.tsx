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
    "2Dj14r8fF4rEw823qsQeosPki3XTpmSjEvTaLfetPQfggFNKztYyzD1AZbnh8Nfn7rUt8ixzeSv7fbUQbVfXd4TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dxF4wpxnksyA8vRfojPW2TAVM8FQiE7YvGR5MdM3Asm61FWZN8c7gWJDebiTzCg9mpKwGrRW1FQUo2StoN5X9kL",
  "key1": "QuBtD3LMee9xa1RYxTQNcKX98A1tvTKk1vtwBdZgcg8xo3p7cX2oQQPQLrsMtTnChwRwEAS3tcYGihfCeWyLUsr",
  "key2": "4KAYGxPdNn4RnZPfCdXffBoWDo4QmWY1Ws69CwzgYGvFD3nvNcVrgcm2TJFMq7xiu2ywyCn4PLAfEsdWfVGNKJSJ",
  "key3": "5M1GqRgsWhc1AqPHnp67Vpr8kBhfMabdJ8MWMFbu7CGHKNouWrHwHviyJ4bt9zEN2B7cvLMtinQAiCro9sgWiD4b",
  "key4": "4qHJ7Z7GHpWL9MHjoAomZbEsKv6bRxKNwzuGsvc4LXHXavdZMXzep3NHJytKwTVEmxgxhHTgLxCRj7uJewfKh6NX",
  "key5": "z88cauh6W4JCfqEQAihJ2DXGJRxVHrc3p5kVDJcUh94oNuXHoKoNJgvtYwfoa2GJHLawdzyviMtRRsHDJJvP786",
  "key6": "3otx427QAiTZQ5bm7EmV6TdGLDdstrVoEheBZSwLTj6N8GsA8QZGPefYDDRMhoA7YXxVM84r1VDQU8SgrpE68baZ",
  "key7": "5qPq1yuCSAjS7MdGg1yu4GRNw9zi7a3D39ZWKM3bw3S6pmsHFi5eVYyjEmVpLFqZpsAMnWbMAeL93so5oXhyUdTr",
  "key8": "2fC73go9aK855NKGgLNAx5YCTrx1EexB6AegxAsapofN8SXpGyhLUW6WSa9ozteW91fHCaEKJ3BdFPvHzg5sh6gx",
  "key9": "2HgvocNE9BJR7jT4n3PC6BpuCZWLpumvnfAadG71TRwD3f2asYftRneJtvw71Bqo3Nggasu4zsZQTX2btdhrE23U",
  "key10": "4YQ45PgRAFrFBL4Uy7yxJKBWVxgVQtgLXbwH3S2gNrfFZ58UtKF7ZgCYQN8p2Qp9czK58u2aV1rW8Db8KLGMZdft",
  "key11": "3Ai7mSz5dVD2YSL5H6hwbcb6jmEndDuF4MnwuHnc8c2Cp3b4UKZhHQP9j7UqzpGiq3HNPgmXSeEpRMDNa6taR4vT",
  "key12": "5GtPtknw8dRxFY54srtZ4QLukAkaX6KZbANWJkRK3XrfJFQud196ik3q5Ug7nDqhEqs1i3iBmm656LDuGsgL3dS1",
  "key13": "3t7KZSjKGJGfy9TsNdSZvWvdEcVBJmkKWwEJRg2sNRYGhdxWUnDW1YcpNKoqtNTB7HbSknej5i55gacNrfWFLMUX",
  "key14": "4JhQjGVtQRsbNCHGczN7saoeTHnEySRUNBCpXd2tSZkrkwA54dvc845nkDebgwwpMeF9Yz2btkJbcp81t7fpqav1",
  "key15": "5kxDG1Hh7qQmDHiTqoP3WmVpzmnnXgc7p8f6BDc7FmRPc4uP72YtiRDS9CNDiUYWexdXBP47eJU4odK7jEPrSueT",
  "key16": "37FdvdZfWbsZqoVXzye9NyZZkU3KjL9BLhXWktLeyAB3BMMYkrBuBCaCBrqV84syXUNEWPJqoz1kwdxPitJn514m",
  "key17": "5zcoXWuhbh2UzCzrG4tW3zXbZXo3otWXmutzXvzwWFb2ZNZh8UvLSNjSZv6RNK9RWsyTSJRCQh3FzCrr4rWKeLme",
  "key18": "3ETE6ZMVbsV6dPV7p6Dbf1tNy78birrviUbsVxHRsthXNS6zKUQQDAq7zXBS9HvcwPHWQctf27bfwoFrpQZwFxHE",
  "key19": "4vuT4L7gRJEUeQ3uLvjZDpsXh251ewguW8phYLbipf1NXcWbiVdtN8GNwGG9ZpacRJCtKUX9ipY9Fy4kJTcWKMAw",
  "key20": "2WYNkrpjt3EyQuC1F6iSggcHzdhKD8881m38o4b2fZ9wrdFmcyA9UQYFYKDTTWd56GAz2FzmRNLKBsf4fgmU4syR",
  "key21": "5fgBjpzHsSvXebq2Z3FAYTfsgk1W7UxT8Jw5HdW2aoP7psteWpGZtP6VUUuEwjYNN3azfZMDwsQrprngACA6sXCr",
  "key22": "3i3bs683oPCEKVshcNcPyNhwopLPEeJrSrjb3UVmjtj9pcRjyYkb7DJ86FFL9SiSg7DDsSj1tNQZzizzqJJW6ZfJ",
  "key23": "24JckSngVB5jZ6iiEnyg9Su2se6nnWrCVVehZdRtExppoEH83g9F8fcHncxKLvLMZQmwg4MxJJMbedTe5c4Y5JGW",
  "key24": "4MzgvfqdHU3BQUqRvgHEHSNV75sNxLHyv9o56cQi5iuaeZFaVqjuHZNUWnX9QDuAwhef6oa3qYAKFHZnMiBDpMq7",
  "key25": "7qypeAJkeYow87MNheT7QNm9fsQJJXqFeFcXXixArJMgr8zKT5vvE3Dy7jpEMKfrFakQVUrwjyQVBn4SyMw9sWr",
  "key26": "5Mxz8CNCK7R8puqGkUmSE9KGCLzpXTsycX6vVE66WcrdBVmryTa3jzzDSCNvcTKBC4nu1MLQZoLeEkUwPcsKwsAT",
  "key27": "5Yy8YH4m8UUgG4zYqUGxLAMan9UD7ZkLLHCopfwrHzQNXU8uVKqHKiZFvhtZn3Lb1JUZ43w8gLGGqJoviSBuK1N6",
  "key28": "2Hf1DRT8naHjK1CwxkkswbnKPXQTj6oqYZ6tAbsvjiyj9wK8tfoksuv88GBuCpzAJajuKo1L7eZoMDUcBnfMQjCL",
  "key29": "49TSsyKPSzZ953NuGwRudXryKJahsR88rvr7Q3CsayahcrS2BJZ1iQD1B3kmpGQWG2HntGmKS9denF4n93ZPEWgr",
  "key30": "5dVZQAQ9Qgww1VUg9xS7ZY3SHtL8fpWwk5ycFLX65Yo48DkbHVHq6TkAFmahiQYpTELs6d7dCwcP8cFpRnMujbJG",
  "key31": "5VpfxEVsDfWSjorGsNNZfEkEz1nxaLZcbkjZU6tYRhZ6Rqu64nHN7HAa9apHfCToW8d2DC9fMUeWHj28KQZvzsPP",
  "key32": "rb1gHnx7zPRJ97bjEDVsQmfxvfx6qJq1ns4NjiLrKvuhRsLzpqjGRB3pkfEEiLcT1PVP7BJjNx6LMPLWD5HJ764",
  "key33": "5xRc3MnfnRf1FugPFc7525n1QHHmaZmQoPmdpUi2g4NZKGJr8DzbJLopirGkRn6gT2B5c9iJcheweQEnLN1hmHsR",
  "key34": "2Mj4wXUaQMXB6zrU58x9YXsHBHs89b3quyW9qBVibqwURrS3H2HesYofQCW4RRB3b6DugXVFGgU2vP6vQGyT5b1z",
  "key35": "5Kh3DvFFpty13x7pioB2SXAD2QQnFuARmkDK5sQFK67bZ12ZxkWmoGvqLvckUGAa82EvYgQbYp5JaWu22HSqhK5m",
  "key36": "n5ZrfqPb3witpADDYahnm1TfiJTbW8EjcKVCPyTX3KDukXNJDzn42dMN7i6226734Se8JneSERpv5Y59unDSJFa",
  "key37": "2MWR7GWcARyy8qHSq5TwwGEAaC3AgNaVND51QqhsbWn8HPcasHdzG3wpATXTsukznv4LZMufu3UCQebnZioSud38"
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
