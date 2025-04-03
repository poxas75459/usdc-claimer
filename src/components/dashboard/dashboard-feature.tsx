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
    "38v6CmTsu8fwZhQr5kAzoF7Co7aRd1ZFvtV9gvq7HnCMwYvRzG1ksCdVh1USwy7R1ShoLqsSeVbzGVdNcU6uY4ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZjBqHNz18hsmWr71zn2TDR3s2HfhNiAJFt4Be9o7tkaTiTosQERTDknbhFVyPQZdd12Y8u4Vj61TK96o8Y6z91",
  "key1": "5TJeZJm3bXxHsmJq4f8JmRy71nRTQ5RUWGVud55zLNcNFqu7Jz67qwXA9v2VxBMTETMugxFEysi1PaYjG3VtBN9K",
  "key2": "2QpqhZkd5BoZGrJ2DMVi26Yq4LJ5EPc8NEENbC3RypbWqJEsKbDqKbJgXT3bAt5rXVEu85VSoY2btRvm3h55Rdca",
  "key3": "4qyv3BPvLgLjoG4jfvJXxVA6QhVKmLmbJCQHCDuu8Gs1B8px1p7PXbLqv1VvgDvzLiCBRoRsDm56aVgJTMKNZNem",
  "key4": "6iCtgi8bJCWRsXePUAk3C9gUEqPfgshduBsY2gFeA5f5d2iTh42e9xqPpA52WiCpAJYSwe4SRnh5SLWtzzfgbFw",
  "key5": "2dju5buAZBxUsPdLoguk7rTuT1nyfX2ZJhRL3JwUmHEwkpwh8nxLUX4Y6YFF3qxBnR3LsktDuNXzZoUAh9HPhbsz",
  "key6": "2gm4FdwgHojg8V7TYi13SeFYkzKYLyHnbGLfeLRZ4skHuG8ThaTonJYvgfnzRGfPVNN7e2ZbRcH7pNKZhikoGK8q",
  "key7": "2uhPPrAtsgNiBBcxPL35xZCxQFm47u7tUzeyF1qcWmhpShj8aK9Stso8qh6oK6887sucKPgKEipvZ8WhVsZCA81A",
  "key8": "2Tzscn3p32MSHLHdhxF2PUnUNk1qiM9dNyFNfUes439xh5TXVF488sZTki9uA1NMU8ko17QmCCP3RHmkjss7nSm3",
  "key9": "3XrjfiyPRgS9UT4zFjfTYV2rAh1dpzdex1EwwQhwTGYdoF2yERCdyaW47v51uqgtCfaw4cX8Tqk9D1BUu6wo42Pn",
  "key10": "2SwtvYGvSSGNeaGvXZVQentTcrU4DQ1Ur5DM9GRGANBYjwXCW5nsDTkYLyRUMmZYRTXWmp1DVwxK4QVybCcDuNSF",
  "key11": "3LN1oTie6ELf46r1GYrnuEBhVVSNEwi5fToiuNibsUQkCjGTE6HqURPckBYk1FCbM5qT6hGdLxHApffJiumqux6V",
  "key12": "3XEuqHJiYozV9L4yUPUtsts3G9wK4cDjKeyJ7kB9QvVRe2eQwnsUr84vJ6pJjosPMxsAYuz2Z4iLiPfPdpcgRgiA",
  "key13": "5KBoHaoi64jWnRFACGxDTvWLhwjpctsj2MW1RVyBVNaSGQiemzj35ym52kFcAyvHZjgfYU9HCuoYhGrdC1LsBnrY",
  "key14": "3FCVZ2QLZDYtYZhWeBhrMjeSmwhvkuwaYPXSbXueuk6dLSGVX4Snmv9KWT9EFDWu1Psvd2NYXPTd4YBBe3SbMjT7",
  "key15": "285LRphcGd9NXDsdv89g8CyFrh4rdFchQ4DYCYMUaBhBLT2hMzLZTbrVcNCxvru8c8QCWQnE5qv7eivSRQan88rj",
  "key16": "5hcj8vWamv5fNJ33BqT1P8FvVq3mstecUT2u3JDekTFrz7SFuVZTss8xqmoESsi2CbazHE6dEwFKJhs52jAFu6s8",
  "key17": "2DJwdU4UfEVERq1xjNwPU7XNLRh55ZHgQKowMed6jS8MmQhsnayT1o2UCRRvA6MZ8necHtwqX8NRD1B3wSyQZwvq",
  "key18": "3z8wak7AQ2mbMcT9X356s5maNtKK3vped8pU5rq4LNCSJa8bDjehKk9BFTNDDt3t7KEGSMZAZPoEy56yZ5ESjjGH",
  "key19": "3oj5vqYtLr5ZJDdBJizvCHnruP7mn8wxBm8ZkCdT2guJP81BSJTNwAzs8JyjrMrr6gMbUnhbqPPFab1aSD4rTen1",
  "key20": "4A1NC9EmyF216huTGVVdMFXUfTxF9cTfsGC6N4gbik8KxWeY9awmzJsy347L37Lnhi95aVzaSVLcRTEUWefamV1Y",
  "key21": "Wgk8zQb48ftXdc16v9oBzBcRPiLMpmXjxRHiZB9ruB2U569DkJPXHqR3wPiuiLE7jbd89hpjt3eaazAH3ddmSGN",
  "key22": "2fkM9FwtdiqoZhVZL4ekmmHw1a2frhFJTB8Va1WMLE94Ng8cPRTZX1zTxPY2MYB6R3LmKKgkKgyjDSna5Du2ZBx9",
  "key23": "2eSREPMbMNcntMZciSHeMtaCJPqmDAjvMqXGq8FtyNYKgz64Q1YULDBPT2noJRh2uMX5P1641kJNCaTVVZdxT5Zv",
  "key24": "9716d8ZTrPi91nfaXTu8SoYi4FaUzGSHoAVCmV4LypW9L2sSRFYaLa8FqzZuN9YHx9twUgX3cGQVxncoT15nzfT",
  "key25": "4Ha3QuUJPDBfLNBerxQkDP8pnJioBi5W3aQ3fRCfrPfFcHcymK11hNC3xpbpeyuveDJNPPSgg1HACSBgGR2pECSa",
  "key26": "5arHn7Tf8ibCNCUqez2be3e3uz5gHsNy4nrdKaaxotnQ4bHXmAxELrn9s9Z7uMuNBAqsB5bNfQhEZXVwBy7iLUZ1",
  "key27": "3Pv6SZLzEPBuS5c9KCaX6HXmcaszeRk77vQAunRodirQMavxvkbj5fjDPkXZrTVK81bpR32WkVnnvSY1Csor62gt",
  "key28": "5o815TWkbJ8dJD7DgoFupe741EqKYdPRNHHLYaKHzctppvGSEHVzcDrXh98Zj4kTEG1KuoaJLcQLLa83RrtiTqpV",
  "key29": "2bEWawizWaz9vWLTZH6RYTS6XNa3N7tUVTyvNaBAWQJ9LDHt2LQUAzDtjRLZZwoGyt4rRVhMajrqiwbyfgdmG9fp",
  "key30": "3qGSEiv6CbqDrqfMHHseKb4mAcZUZhFPki2R7HNW29jACvUH4suQeXP9ienE13wfrY3u3c5LBo5FQgdgX57ZF96D",
  "key31": "3JmHxzP12UX31djNifLJH7BBnY8MmEb5a7RCDLpWi5EE34Z4oLRzrfUGbe41BqhfNHbzEcEpdpq3nJ597tpgrmvt",
  "key32": "4unih454eL5y6Mb13EP7FgcJMZCAN1kA4xFiSdnLzpwgRMVxZjem28FukKPjmwmcuQmYuePnxDXbY9hqYjUEzxqE",
  "key33": "5o8iaw9EVswa24FyZ3AEjwS6wirgxgbmi37zWpfJGNkXrmFiRZmhG3LbCwKa5KCtBnLnRoGdqg8th6tKsBeGk8aM",
  "key34": "5vspMzeQ9RyiYun17ktKWRivTVgpNnntP84pCcK6ZxN2qWMfGRByubasfRvTsmDWV6PyyxpfEp9Fec34qGF5z4XT",
  "key35": "eNWyo1Xj9TdyJD5gqmFH451tXVYSjvv6dHwV4HWPSJrMCtvuaPEoiCZHm9EJW9ZwvEKF5bYZruZoaC7x4MFnoGR",
  "key36": "3R9VottEzF24P4xpqrDLJVmnicrKGPp7ptFDCyzoKhpHZPhDfmozeTWk4wP4jd4rYf9GpzFj5mXvXvD7Fw1Mp6aK",
  "key37": "5QmZaqdJzmXcmjYEAGySmfbKuDta6fXqErBWrtemqh6cak1dNfnX6ZRE2L9JQxDxcrQrh5YcnR2J1GsEEFHkksvf",
  "key38": "5i4xkS6M2Taw1WNQ1uFM3UdmjH996GwiLWo9sKjzEZRno94HgmJr48iYVZFT1tGZmwN6ViqG6ZEXBvscFjJwKdZA",
  "key39": "66DzhxSgL2wJbqxNWwwB1FipXHHQNwx1g9JWWZKxvTgbxMM3sqyq9YYCLqNYy8Pzmrn6cWsbZQntq5PAnzkidHNX"
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
