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
    "3MQJxm6bjMzxmmfRWvUGBcFH2XR2dYKkoPqbrh2hSVAGtURd4HmRRYiFYbjRAUH3yWv4cAQBBhbwdPqjjMyXQ2ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKDczCs98fqe6MTcKctU69sxjPhLayms1aXUANTFwZM43rAEET2rvMLforCYXPHQAkXnQTihnjeEEMZ66WsBSw4",
  "key1": "4UgKxWNG3Sk2ZWhbvkFa92MTgEjQb2drHGTeTfb6ioSizC6VQHZKvQcuy8aJ7aVBbgjuNcEUVNGZnJ1aodfPzQBH",
  "key2": "25rx5w7kLk7bBC3HfJgiB8tew6jSgxL2rNV7nafhm6rmBDWQM85pCj1c8CjhYszFVAZnk3i2VXzLRXq7zkLt6R2Q",
  "key3": "5yDgeAiVkMDVZQ8iZbwjU6GHNx5hyoC2f5MqJeLQUXEP6ydRpGPHDrZnHa1wVDucLE4Shotu11QzKcqeAf7r6vYa",
  "key4": "4mWYhMKd7VMDqHjVEssQy7EbX62JrFanaz3vdXx81AP616aJYKDsoH81scGCh2fZH5T5GqQ3ka7c9BzPAkgiPmDb",
  "key5": "ptWb1LKpFBjQHkdDvK6BZ3Bujq3NCvUWHiMbbRNNhe5rVMH8UtJyp2tDqzTTXqohUkkXPuUSiqs39MT4zFaiErN",
  "key6": "5KPydBRPK5LNodQhx6d6Jzx1BjQnjoeRvzE5QME5JK9nPzH1PN2LVqMoH9qJd1pWNpP6tURCTDt9EMoFMp3hcMzG",
  "key7": "64wPAfhqm1S67KktPMFduV54RZyigqpekDXjZftxVXKG9MHrEfEQf2g22v8BxnXc8hXMReaqVz8k7U5geQNgTBgT",
  "key8": "58hkfQPBfmjbSb7XeGju26PDWKNPRG2E2SvWN24fV2SP33Vwzs7Z5BzkZY3gzeYf23kpKAAcVr69suW4g1ewTaE2",
  "key9": "2iDsEVJAowU7Td2z5YzRBUZwXAFoQLxmxm13orH67SACjoUsWTwCEkg7QFpjQX2mggpWQgW2BKKpWuxeTuYSrnHe",
  "key10": "3ZemNnD34NbYgGgmDjuWdRQvsSi4uLvQJcaZ2azKvfFHMWyxerKjrmpP8upGK1nep2qUwD4uXoGvZLhko6oQQTqB",
  "key11": "3X3UWuZsRdGD5UQJPYk3jiA98Y6tPxBUmyc36xj38yzNzJ6DEycFMAZmq9BVMFtceaGZ71GTMgJmAqAYwbQJm5in",
  "key12": "3tmXRpETMwuoDzAJovAVQQrQVc94h1YRmPCkqRjoBmWufin8jnsnLWL96dRJPxL5iV6HttQT1fvDPkZePQfFrRPr",
  "key13": "4qqVekn1zdRpUwqrKdx5oNXaKBiSueZKKdsnqx3FMVtju2sY3LsGMmtkx8GM6zs9yA6rz5eyVRwRYLaHegzsuUXv",
  "key14": "pddYsU12SLRnpy5tCg19mNpPASTL5QzM31kzW4MMrqu18BvP7wkLLAV9jHxmAHAKGtxHQcVn9c6GWqvYRPUJhSU",
  "key15": "5XezDXLcHzqLawHbak5TLHf8z6wbbFxQr6dRHMiGzbsBFEcLh9FUyYPyatK6MUNRfXXSVX4WMFRaP1PtpsqAQQiW",
  "key16": "41FwpRWXbjMgAG5ivnAa5eNXzpMeFJFamgjZfRDMh1LWxQPSJSqkyVcZqdEzqYhYZMAMCWNaayFYqcxZ1pxCVYCg",
  "key17": "45AENTGyzqmjQ2Zknf2BDmMwQqhru7WZstfGmdEuLrVhwGRJh93aaZZ7cdUU4JgLwJqZFXUgdXL6UtXx8FUi6Qcq",
  "key18": "EvJ7NEKvWSnHnyw4TY6Jd5CWanu1josnXGak9HEtuZvkKsWVXZ9c49mGz14a3Wiw2BXN4RRir3ShmxF7Qte9mxx",
  "key19": "51eHFTgGnkM1NbM2xTuKpcTU6NhpuVfXQEEKGpQfMYU5aJoiRsEPqxMPGi5Lverm5gGLU7rdNANh28rQW7dLH9zJ",
  "key20": "47WPmgufbit3sRZRyk6ajnQZkE7DF2ywF9LJPVvmnbMPmK333Pvz4wFfTbLb2xPsuuF4ncN5kyVX7JxmEwetoY96",
  "key21": "5StrP2LckTZRBfKooYLLwa65B1qJij4HtEUqj26y4rDWMoFeaQk9qzgmyMxo2KGs5vKF931LGKQVA7oWjgjugLgk",
  "key22": "ufAMeEXnLvpJTDh32mmwN6rYs6Ca5WuFSGZKXJwZoBANp2FfY7KcJMGz94Zta1cACU97qcN7VC8LVHJpCRrMunE",
  "key23": "4DNih7DDYHtSaZRiPQFKMdCoVCn282XbEMQPfXKhGnyXSP3WacLcQDtqPmDaowLDjPF9Q6SfgKJVUeWZpLyg4DoY",
  "key24": "62oFngn3mLmAHQeJvgLLEsDNZDkz3EfmFqiWYRkwtn1XiVE2zTLJiLWydY9FGqmke7myS2JanKKw3uHe5WA1ddEV",
  "key25": "2p55Urptavd1ADGSxFhCWEeX6mZ4tUhTQuTKU2nX9o6NUywsvxd5L4hJmF8LzNbBruheJLdnv7FpCJ7iSerd2cW3",
  "key26": "5cRQNcjpP7pVDV26uFTpWRm6Cw78GGKEfBPZs2Ru88keg1ZCb6tCgtPukq82rbG8KwgkDRXxBEok363Gpbp9C8aq",
  "key27": "4B6tB8EQMc8omwbRAh72ag5ixYRd2k5nDENPBydFhmhMcdnv2GGBGGDbQdfY4vYjZhsc4onJAufqR9cLQ7WQv9sd",
  "key28": "8aG7CkPwVZ7CG4JyQJQK53A55CdnQ92K5EohVrozPyXMFbzJkjDye9DWVKJQP9LZPPsFYy3Y6KFBzqNRvay1Yek",
  "key29": "3Y3h1sUJNewe3CTNGgWuyzmRcuTfUy2XaWfnGnRrxW8ikcJyxdoghXHhCTpRuiNmwfauyrwDJNovZErDuLfUAPVp",
  "key30": "bh9DTR2CHEWgdQJSekpNTxbY6dpFsx7vEGXBb4w27YiLztcJTBfAaGzGYtDNeLvMfN9oxKTBZ1PV32qWtjfuxsi"
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
