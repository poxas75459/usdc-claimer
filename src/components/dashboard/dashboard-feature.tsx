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
    "JCQ6s242w2ZS1G7SHnab8vxnyRJHh2KoFUoiw9h7NeVWe5kszBoL1mZvXttrqCibuKsn3nswbV5uRghKhW9LT4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55bnBEdt8YAKpX1umg9kABuR7S7ZDu8VXSoujE6pMdd2TPL6Mnm44UKaaSgZbPt1pcaQDnThTC5X5W65tMRKJwry",
  "key1": "QqZhNqbNKG7gJw1wp6mK7M312MEEgVtnnrzbpmZ9bEyVnCFh9L7sQz7Nk2mHvLWyJPjE3Aw39Fe1A1BjCtJLzmd",
  "key2": "4qYoC8VjKmpViLEsRAB5iwcUq6FWGmeWkDRAwmC5uUxpfnoyjb3iEqmXRv3kDzAg7X5q9bYejJymoJXL8Gr8v5fz",
  "key3": "3ZZvwViywt6gpubmfPJX8pbEyyHieotfiyEa4U2JwhvEumPg3kGtT8oEPh7TZcmnLndNX2t2KMsRNMTstd28eiDG",
  "key4": "pvFvthuq6quDHCtX73f1YYcCD5PpgodDkXgDpu2K5zYmdvBXRftPNJ7Qi18HrGEDYVvc8bZiowrQt8N3YoTrVLn",
  "key5": "3WfeCBuqmzA7iLN5Q6oyPdLe531RuS4jsYHxiuyEx2aNCih9HJzvsY4nhNTvoop5nRiczSPkSoESS3ZReVzCGgN4",
  "key6": "4uLED82vaR5fA1zDgorB9aJgg5411T932Y9fWvD9VSkuvQxabECCDKwzrvwYMvQ5uoVafteQHP3meKDEmpNQiBZf",
  "key7": "78iHZDm5MdHGWY2zRnjmcrQ61NoLhRSgsQ7okHfS8kwEYiqLsnd5oLLSvKVnxaWAY9JjRY7cyBXqh7R4H14Dcou",
  "key8": "2TNDFUp6hnMfrjtBnLNf1PAUgUiZvkXEqEc6ziq81eJZRkLxoLQzEnDYQEbpCWvJQd3ph2w18K1DqAG7b5hAGMes",
  "key9": "YaopKHjq2RnJs19xAqwdiSD6WuEmeGoR4Uxa5iao2hjjE8KsVQ2Zj5ufVKVBF83XtNGzfCwG5wtCSqbFNDBr8wW",
  "key10": "5g7cr4v7hMqLxeumpM9mbbCgwQbrN5rmeY1dnZ9RuJaD4BL3LFSfg4k4CcDKJ5PEPf78TzFk7SuSbSNnQgTb4iTc",
  "key11": "4637Ay9RQkofC3BhXm3FraddSPUi2CwbF18bwNQPVaLB2NKYmMbL12uYbeQXaTyW5kPm6CxWpvMCzdSdA48oFn3o",
  "key12": "7Q8eHa83HtpLrDSgcCo5XDVeg585anhrZJCM6ooGh1RDDYQj1AixSUJWG2UDhfsW5BBajPXpNHGbNfvRdksEX4n",
  "key13": "4WQGAvbT9h9XtA1d9W86dTnixVrFFaJKY1jGLmyKnqjcLCVwWXq47SusbFpTq8MYDyw6s5tKuC4HgNTj4BuKQTpK",
  "key14": "54chPcyuPqhs3eJdffQUCS9pV2KNMyP1KWHdRXyyv571vDXTegJpBH6jH3YwzyGdqkd67jN9shWvpn7de6RTjCoh",
  "key15": "6CQCXTRk491d9md51GwsUaztYS3Aj2byTtM1RKdGrLzLCGYXp8JLB4b3r8ti25ZEoh7HbkydPZST15uheuqwGPy",
  "key16": "4dR1vUa2YCWThY2XCHGZ2PNy5hMFAkPy7C8djTNc2zENcbK4AjfLatbKgrtJUeNbvRP6WV8NSLe9sqWEm8Kw8cPB",
  "key17": "tMjCE3388FrN9XuBeE8DSX4J4sFBa6vUg8PjS9smbDEHk3PdmxNik53aVuP3aZCDfXxrgiPk1fQBFKT8M5xtXWz",
  "key18": "4KUtDBXNrcSGF1A6ACFs4uwA491a4W3kR8hT5zXUqPXwge3C9wxhnWDQ1yAmeMwSKrBgCHkL8XWfEseNhK6ZXL7J",
  "key19": "kVKjzqQUBUrWiKMf5giaoKD94iep9KsFukMxJUZ2hMrH2QYzvCVT4Zk5ueNfzk3op7AsCwcYWXLzBLWprMscLju",
  "key20": "4awzQzpZ9BJCDW634ucJ66usJSDNtkH4PN1Nbt74YUtiPRaqkPw2Jn6hAL2juNqGtSq4WRocY91YvzzYLP8urFAV",
  "key21": "5JSk9Fr8QJ6krCDgmYQ9gzVXbuwLpCTm399rHTTZUSjcedSS1mEgc7QejUvbE7ABiPigANU4BaaVBbuhLN4XLY67",
  "key22": "3prQgiyVt9tAmbUcRwXJuPaN7morWSnUv1PYozvDzB1MXL5KfWK8qbMaHt1V4qbmQtwDwasUYdLHnjom5AyXQyTc",
  "key23": "42FXsAAH5HmvUCj2ZAUHH9cKgjHFV9LzoGNJFMERPbg68xokhpq2USngqXkZZzihW5fP3ZNGYwXeMtmbEkKQUcum",
  "key24": "2HuEtBroq3JzvdzEZNGUQgP9emqTRKkS7S59TCxxJMQqcrYnLdMrXdAyJjnpSCLvaGrURwAAGSd5DXLSQsnxXFoT",
  "key25": "4ird8MesqhWiKNSE3NSVR6k4eWM59CWbxaonfJsVKVT6ANLNet2w8uBt3NJygMvLYFtiC69kHw2qkqdAkhd3NQFG",
  "key26": "63BRm2EsKhx7UULByvjeGLiCskMFiceUvhREVmYCe1APrWaD9raLp8Ecvn5UfwhCnrv69LvsfJqu86Xoq2znp3H2",
  "key27": "uGXn45dkwz5RED2UhYB1Kd5yzkSzckNqovBEAdoiHJawGJPVa6dYX7AR8FgfwRoHKbtEWAM9Er5QpTvCAdZ3AWE",
  "key28": "3amNoFFxK2R32c6NZRsJkzjuPNu22wXSaTm9btGyp8pmN8WVK1aEY7K5zZSGyzsjaoDfDyvGV6mv9iHRk3BYwER1"
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
