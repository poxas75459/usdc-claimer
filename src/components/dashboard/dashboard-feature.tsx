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
    "4h3FCvA5vo1FZ7dmVi1T5GNqhiRSt5xeKE31YT9nmej9oYCQ7btTaSUGsC2jddrsWxHxC87etrjDTf5PshgxfU1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UMHFiRNadfMsSNY7Z59oqa4zsvHBKFyxH1ibWed8aJimVEchBHHn1rSP9p7FF86UjgkAvSUPQvaV9MdSc5vHvH4",
  "key1": "3mSS97PsaiAeC74Srjg7HhPQkpeGK68cEXfZkDeVZqLvU5qEx9iqojQvSjkNgFG8jhNMrfZ1trz1frLxG3pMYwvm",
  "key2": "4bUUWmPvUmu6D7ZcC6gVoPcMNH3m3kKV9v8QobiY2ony8sFQLByygtsHzZ3ubvdtWtYsf3VZrSSd5j436cgE6PAt",
  "key3": "3QUsRw1kPUuCWLfJQQ1Vou6oZo7sAYHdruGURN7eiMxqvXuzn2fHEmZ81EcaM9kRMih9HyX6xBAwKRDRepG9pLF5",
  "key4": "NFarH1e4FkNW9EUZR4rPMxTmgxia47L8qpfzzG6ihwuqkSNa62799vAdhCaeg3SNk3w6Z6Vob5irrRzT8j34UHX",
  "key5": "32nDhi2QEum5s5xT55vprBsE4ft29H8rhMhm23ycujAQWxKQpwJ7Xgz9bqepZXeAQERPJe5pDVNQsnSmxE9yZJg6",
  "key6": "3uhGsxJwiYkFEHBVobLJFTkpvivmsx5uf8sZbcerSEKCPZN68ueGTrvsZsTno48zbMjfXxWqB8XwD6XfJBXM1CyE",
  "key7": "451jydtniEGF4zUBX43zCPaZyd2WRC9VgqZxx9qi6v5K7iJVxDdJ5ny9JWYutosQBezYyg2M76KdFwgmBJ1yPkpC",
  "key8": "3oYYLB1UAY7kdMAVUUouLvELu3CzwShz3Mgnn4nVrbpBDP2Xn66YxCWdHQwEMUJXA9T4jU6QU2hPN3E4JuYGYee3",
  "key9": "pgDnLAzmPM4nxEvkoVcXu1gGikCWxvHwSYB98wEhWZJWTgoK7jLZpPipK3KmsFCYaRiZeouWDaT2kPrxAVNDvPi",
  "key10": "5FbEiR87zdN8DeyAZjApJmqw7CdkzcicMubLBRaNVcKSRtQvVS1kBWfAm8QRZgKwBwPythWpdFHJkXnqe2qzBoRd",
  "key11": "X9G3WFzMoe2p3ucmTyKqSzSdrW43msT8u6z4xTiJGX1EFwbPdH8UzA32mDTvr74TLhb1ASN8Su5HnB7zHvkcRVP",
  "key12": "G2jDgVehBMkCXuKehrpKoHuwMKmjG8SRHP6pHcYRiHNefeRMrhsy1MWuvRZeHaDMMv7uwAwKzxCx8fyjLDrFSN8",
  "key13": "3HQwULycEokAfwK9JQnpB2BfibqrAoQLaj1oF6tDb1bj5en6RLvG1QHHuDe8HSBAadyVNdKfZUhBgpGa1CmW328d",
  "key14": "3hyfkDaSatXvd7v4MuHkaBSUf6hGwKLVFQcCkqr5yF8uyVd4SLqY8r7VyHqUX7ZuMpK88gFynJqyewCTVns9g8Le",
  "key15": "5GqZfeR6cmUk4vpHCcvNYe4BHz3bR2nSViWwmgnZ9LJMgvXd5yHkRZUb2eahBfCqQrb68AZWopHaYqkD9wshR6AK",
  "key16": "4ieSWP1ZGvyFGc3icnaBEjhQmRdQN4b4NvHdGZCxPmdTR8fBJ9hAhMjGuJ1QuQdUVfrDUkb6cFPEVtQFUphQh2vV",
  "key17": "YHqJC3tTS3ANVvxBfQE1YySMDaSCfph96sq2AUFKG7vBVwQR5ixxjEyXpg2NaApHTQPiurokWMNSf8u4i25GpEg",
  "key18": "627Rh5zksBxdnj3Z9wuuLi43qAZ3q2sVTRErhKZJ8ujghcJRPbgkYT1Z4LEokzjvHRr9qgvhzJyByE5kDNGbskSB",
  "key19": "3wiZ2YpBCWP5pY9WmrovAzD2vXQH7wvPo8JQLf1MTYUVyik7i2sfWc5uFyaspfE6uqR3cVwFkEeYFgrTMcqXXUZh",
  "key20": "3oVA9pe8SDQrqRM2TQyUTV1rYYj44jwEJWo8NSzZNxZHihDkia3rd7KwznVhMCf4HcXBZWDeDs8jZRwpt33D47yn",
  "key21": "3RzCmcY165TSYupY432Zeia3WiN68bpyuoLKoyW1MWnm13sen4XhYUHpk1MmoP55C38YSXk4Zri4MAoypP7PBNGN",
  "key22": "4nLuXiAzFtwNh3tqqa43WkCwaJ8GjugwZCuHSnwKNJj1yD5eUUYk237evQcZjYPDu7Kv3HFcYzUsbiXgpgugCc3B",
  "key23": "4vqD8vXnTmmmKxYx3HuT4ChuAW1AMkmGKTR6exR2rHog65AbYa5K67vq96czR73KJVuWrfrLbxaFAezUZV5Hq3QZ",
  "key24": "2Ac4jLRdwrwaijSLqeZEcfHrBim72PRgcj35VKr7xuDuTKXtM1QEFnHoTFGtu1ECzht4LNUv2WuGoiMWy1VswjA7",
  "key25": "4nJGbPv34VnCS6TVRLdvaNfVivPQ5BUPLHV1cgr5zy9gPLcmcGGnqXpn5uhhF4unzECcGqwSJpHrTnzEBYKjCUFc",
  "key26": "5TwA65DiijqpJKTh9g3ndwq5xYvf6Hd8CFJMkLsetxMWPJoF89cD76J7KS6qsy5aaSSPZquSZxye6zJTBCf2UZRY",
  "key27": "3s1BSBi5wVnhhyt2avckDcbR46qNG1cRVEjaRPL42DU3VUKwJRkPDJRkbqZmrGx4XWjZrQwULTcAYXmtJ4QR1Wuc",
  "key28": "WygUBBCHvf3kK389YFTqGAToxqMX4cXfMWcEfC9Vc7rLjoTFdEmYuuBqhNuuhEEo112t1QzGhi1cm734WUcdUGz"
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
