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
    "5r54FYZFSFbU2FhXTF6rk1MdDqJpJvLcXzdVRnDEMeRpPKxggyMXFMxXww3GHVFLfGn5Pj8C74BemQAm7WwWQPd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bip5sMQjzRDKb9Vtqnmv3h4E4ksnij6gwGcM5tZX3kkZPqoe7xnX6uw78e8ARi8rTMCU72TrsKRb3aV1XbZeF9g",
  "key1": "4yYz2Dd5EinRoAqSNpnprZhUCshkNmvvKkTKkMeQWUzQ2op6rdJCBQMbCGyJ24nVWmWYcLcnHfjiDku4XHUxDps1",
  "key2": "c21uFKbzcAfwkWMtcDh6JTYkCKVAgaiKm61se3woobzbZUN1TTRTkgZ3QucXuRuhRY4EWZxhe9Kwwm1Mwg8FtLu",
  "key3": "5GxMaNRZGz7KHJdfUckXCuTFh5wcciUftzfqtHM6eGtZmkZQLf63B9Wq5xax5imcYYNFoJwktVxYSMp9kodDevu9",
  "key4": "2Hj4oRuWnwZNiH4GkozHM2jkeeb7u868ygTPRzAyfdnGvkFwEpoSM6kiWdqvFhUEzbKBzFbRwszg4tfS7LWYfCNv",
  "key5": "tfo2n4GJqEzJhtejG6Zm8gfzcjU4SFmohiXRAqiUr9zJ9jrJTNdCMPAGoioo5Fyt5g11oq74U965vXFJEbxvK8Z",
  "key6": "4e64yZ2vTWXixhyGtxfC4n6mKzKVS9EZhRGxLkhcfw3gtBLH8554bXh6Nerr99323efYQdDGKKaPr2fdjaciJcfc",
  "key7": "4FMsGZ9WdJF9wSPVaxdtW5skWA1TaPM7L3expYjR9MRh55cchQtsa2SxZDXPqTtBiPd6YPAwVz5f6Fqr4vf3wszK",
  "key8": "26K88MXZfaqbciGnvqeotgMYJewmpLj7GQ4nrc9kxqmVqVnumJsYwfQpQsViCjqLrXQrGdwnU8qd4WQ1mrQY34Ds",
  "key9": "4bav5ieRSVmND1hRZvYS7eh86QrbVUXoiJmg2xmm3QR7w724a9PV2FjB5MgLV4P54RkUJ5hEJEKvikajXmBjr3SM",
  "key10": "4P9MM7Rh2Qn8VKgn3meRGonXetV3VG9yWEAxicEvVGkXsjrRnk4NSxtoCJr8mrxUat99asQbGvTazyEWfvqVSwSn",
  "key11": "2y4BN3uieRqryrpQ8aM42gsLXKVZnVK17txky5ovkpt9kbSq6j5mv8veRnGzwcMsXN4rFbyfmtMdL64882uz6mer",
  "key12": "47HJRfufFHkYYtZK2dyz96vHnf5MeBVRoasLkxPSrRA5xCyGDSPG7bBE6ohQNHpY1kaG3xM2edTSTqpEP1VZ3oxi",
  "key13": "uFtceNxdtLixHoMuhnTm4pwxujGWK5TBne6ELvsHvVuGjuS9Hc53MpMM6P7ktZXp6AZjkkyV2J4JsTCiTJvPcrv",
  "key14": "2fmFBMhcwifvPUZJ2b2okhNrd8x5RRHBYXdqTYuN7cJLG4RRnzxhtnW7sgHar81d4RqokZPf8pHQ2pU4RgLFvp2X",
  "key15": "5XupLJZWQ9yGNrHDfp3pFfB4hUTgD9sdrMeMCJXiqBz6qmTFunjNtdqZeFDysxqLnXV55okj2doJrRaSZg3Fwzqj",
  "key16": "635sHvFiZCc5immz3NZgGAzMxGJ34FGiExND5UGwr5vfcFqip2YjmpeLd3uQvHTkkZQgeVvFqRknXbN9Fdd26tB3",
  "key17": "3kb63WfF4wD72qiZT3rrjwT3Y61BsX3AXbApR21LDHfWAyLUWwnnQMWJSvV2UnSLrwLwhba9YrocMoYwD3TNBruB",
  "key18": "5gPaiJoP7SDoGKn6PvAnxC31GxbBjYrPabzprpXpcKDij16digZTH4j4ffvxHsnkAQ7y2s3TAit6eVTrtDwNo96d",
  "key19": "3a4MtLuoXroFnkeZueybY4AJeyBZUPkLoDtDPrQ8ai7HkGWepbXR24UUSs8UpzoRFQpM6Pj6dJHxNNcmh6g8zVNG",
  "key20": "47Sz9XQdEET5e599ANqB3XqctnY6oZTANyuttm9DRq9jBv7qDBJamHcaSP2DBCK1KWfA2d8H2jyB9kX8ks5WAAYQ",
  "key21": "SeUY7xwJmWfq2huuMpaV5PdKyn6KsaUvvkXe4BefcYRDn2MRV8Va9YH3EMy8dE5Dc6WbzuFzMbXvsDgP4fstJUR",
  "key22": "2k9ST6M3Cu1fM3Nbn6mtnbThY7ryjfAvJn1EkuQBP9JVxAriAThL6pimoiEvsHT7NqxAmmAskAEaAQwcMEk2q4Gb",
  "key23": "4T1fJWd9gPP1TsHy8LsGMHGZJQaesW1ozUrA2Fn954Eyrt6ZqHT1Rze68CN4jMTuMrz4SnoqKSE6bPuzCnEu1fCp",
  "key24": "z9ujV1H5UPd2JamUGUCMfuWAb5Cgtqytn9C9XvEK1qQgB2Gs3tJ8RY5d27kueYjTb2HMc8q2rfdnqjAC2krd1dv",
  "key25": "4XtKp8ZR4U8Di2ExmEuUpq4jt5SpaPmL5C8JapXP7ERtbmL5VcD79kRbPt4Eeb4TLZa7j4zc8TZUhazQ5puwfcMn",
  "key26": "58SeXxsEnZQVSDZwK2EHZatWAPQMioN9sbTPzHEkYva7Z51RTrmHSwCRKSb3KYxfoBYrxgCvNXMHzCDCBj85Warv",
  "key27": "5ZMkMoaQz1x3WK6i3VW3KU5R1bjZgQJ4huTHYmcqg6zh3kuN8HYbbLxBJF3SH1pfQ6AvnbrsT1NZtvHb1T4HWQ5u",
  "key28": "AQmsGWDd5yvjrmmgMejCvFScdkMXsP2sQtzo33YQLbkYVBcD61AjQzGAzit43VJWsAjYpGbE4XMatBbVQHCftox",
  "key29": "4BRabQK2SpcP8im8c6ZV7kJH2vh5qdMqaHMj7XJBmCr96CQT4b7xDfT9WsBkAVbn6NVFLpxavmVsbzaj4yHc5PQH",
  "key30": "wgSNnxw34y8GN6YcFGRQ63y14eB4TfQW5v5W5RYjaREWWYJSgFBJX4KBXqsGQpXbB3gB57Rnp5HA7DgouRG9iJm",
  "key31": "2u5zFg4NAXyXSJc7SazPducUuQ6bFrhwozLZxBwSoVxGRgLCmVQFTzgpRhX6EXNTaTVYwDrg49RgkHXihRsyttdG",
  "key32": "62TZBHPYFUv1dLfq5fbkXxiPc8srHyh49NDaxKLhdsFFejwwpW9r7ZQytBy8sVDWopWb7VoE9Stuwr2QgJR2fmTr",
  "key33": "5cbuLJ3obr7Sgm7ri4s3wh7hNWCnLg8q8VDT9Dg92j77ohQ7EBfhqhkHRaq9zVRa6Stupw3x8H3qJcrD49ff7JNm",
  "key34": "3BG7dPLLT1SiqF1gmWwmY2CP9io1m6t5NFvSubzLnNoUxr7S7riHt34BzGqfva84PFH1mjtXokF9U9d4L7NuQCb5",
  "key35": "3rWZevDCtwgnTzHe1GmRbxR7mVNJMkwAaGEKa4VEZA1znWLP2bDv16grz15JWztxn22qPThfdCBPCBibdDh49NwG",
  "key36": "4N2jwvAbnijR6V5x3EMEd3e6mXqiTuKoYXwA8Q2yokHVhPwVwc6He53v8wxTrPzZmMV5z4b2HMLYpdhTTuHiheua",
  "key37": "5dfFsBvenU1ZJ3HBRKkUeU16n2yvYvw3F4si1jrpZLCzCeGdeKjFe85iCNVKD5gRxpeLiu1XZFgfheXznt7kRQ6L"
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
