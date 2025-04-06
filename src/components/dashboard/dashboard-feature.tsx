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
    "2R2rZbeEfEAqM2K3xozPJ7QYyGQ9zLVp4m2ifBZnrcvwWxxXiU6Q5eZ25r543BTC3xdvrvoEUEKNMQHeJ5BJ6dXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35v6M6JgicbeA4F5UUrnyQScMuny6Ccxayvb1PvBCPVFD6BMd9AGfVFtm3QQVpvXx68ub4izMYQafpbE9djzRAHj",
  "key1": "3KwTg3atgVxP2qHUR6jthiuCmMp1Ns1SRWmwFn6QsDyDv6ZNbQNLFLEWmSw6sqEZG2Q6YCDshx3xtSVap2tZUkde",
  "key2": "5dswXbGD4uJgrS6KWSZTXbLyB53nWDRm38b2TiGK3qKEYjRaQYcZb2dxWgUeFpD5uoEFzmhcNAoa557shRBe1wFY",
  "key3": "5EYkkTFYHs25vBJvjBUrwFNfMHrE36vyXtUVWD66respq571xrGqZ4hCRBqc8pKsLTdLbN22cLvRoDAB54PmveYs",
  "key4": "3b3vo3uX6MaAYW1PvmtDfLZePYvLidDfW2Jq4hGh1Jrm3F9Z173H8VtzEeuMFkKLVZCxApThjCz5Xn8pkFPzV9Wp",
  "key5": "2uXnjuPTb5Bs7bcBPKSsZ7hZYghfcCyN7a4eUbQ3hLJaMrVYH9xtopsvgGCa5DG9QMUXjQB7ifFAU5oeM7JpRHmW",
  "key6": "5pZSM11DBhsT15GyZZWz2SCSKCqckSu1zMEz7NHQvUCgFupc8k5DYmfxfir6zhUqArGoicgww1ab9epWty6xzLJS",
  "key7": "HYzuqcxHTegmcuxpH8LPzUZvzAjHmh7TU65vCsW8aQguM1eoBBoWdN6a5CtksH5YFcM4eDhaA4GDBL7THBjn6wb",
  "key8": "4cgjB7jgFKPP8i5mZ2vfVEvHULcD8spVdTZVL5KSotyi4U2bPQ3HtQL3vbnsqF3UNisgyED4zZ5QZpcbkdBW1ei5",
  "key9": "wNiDoypQAAA7Z1z3Wvfdui6Wdv8BaQKfvUQ7rV5mWMdvxpXfeaSNGGCMwesmEJeELQHFCN8sXc3fEdcQWCjL4rd",
  "key10": "5nqmUKi2jDqFYDuKEjdHQXcf8Ezyr6JfEaMYGWZM6oNjUpsYvtkfwhaEpugbrB1hn2fNcTGkMGhSB7MM5rd2hmzA",
  "key11": "5V9WSQ8giDMRZ33zB5sM9kYx1UcXeA9WZiyPoYsdHnQdL8nPGgahGq7zzeriBzqMqz5AZd8kBqqsHiHsFpF68iLT",
  "key12": "4ekQ7aaTGDXhEiJjvpothraGv129XQtDMzWR6wSX967fPBE2uk3pC19wfjcBjbtibj1fPAphtqWn4hujn3DpdKsS",
  "key13": "LMvkxeSHhvL9ffYn1SL9TZv7zW5JtUKp3Nr9ogANMyXy2evR3ZqLQ3wwLyq9UVYFeU8fL8HHrfKuWQEziWyQv6z",
  "key14": "2pfN3xMBH9csUgDaDsrMiwGvYWrapD9hTKAWrCAF4rCdU42BD1c7xgUwtibZs7TpxsQ5gP3yqMB7SkFC6Df14iB",
  "key15": "56kgJyTiVrejWSwLF7hXvuuvhi3E6S3iXRYdkzBesCSvxdv6gFgAxLbvtMeXa4A8igHcZAa3qkstEGj2qKQcMC5u",
  "key16": "4xceXuQJVT7quPqfVUFSCE6SHuJwKctLsZ4BzEDYQLqSwse9u9hJUREyrr38irQuTRJ9vZVuTSF7Qu9zJGUahwBB",
  "key17": "2DQwXRtw48nytwFkLwABK3KQQJA5ZqypJZyGxk4kwUpw28aoZgAEC6Q4DCoPFUg5pyZSinYJPNhvnrPGey2kqzzz",
  "key18": "j4W2TEE8yw83cR2oaBtuQYh7Ah8sm2du7VJJzph8UrKbSCk8vLcPVGfdYRqPLmjAnu8oWpzQzgG9cZQMBg2if7i",
  "key19": "N1Uqv9ofxSXtR2LwHVdFWKRDM8Baeaznpr2hivkeSoxjsetVAYznYKr8X9kXfVnjwfxkQwro6Zbqz1Y1PVzs7KW",
  "key20": "5khD3P4hrfcwhxR3Tsqx6qtRdYohbyiHSGNDd1ELsADz65RRR7Vi4njStxpCyN2hWZ7YmHAHmX9jVPuyPueWkxQY",
  "key21": "5XaJbX9EBSDNMVNW4ySGcm1fGE6ThWTire1fyec1DxqHx2VECWQZ5VEMUT12HEDKyVPQTrCMAJTEZHTiKZiCWzkZ",
  "key22": "2gxd76Leo8jhUajJbTaPDYsHKYPRqC641d6aiEAe4h5D41kU9mDooFvz8rXN8dYXDbs8u3CAbxn23G96pzAMtoc",
  "key23": "APnz9NZRPT3cnsZTyQoTSXX5zfoaAEYJcBCJP9tAbaQMXRSRFCi6DgNEVVsRsYYp3CqzgCYuKZv5uwm4enUYkvd",
  "key24": "2SK6wrrjoAnGbkWKLAu8WCmxkUtWJrtLU1Pt4mHgWAW6Gkhr71dtR2p5ji3LspatSqmGzwcTBRS8PVUaZSTp1GFV",
  "key25": "4JuCMLWpRhqEduHyG5KWgZs3hAQ7TZtAZMJ3HJWq7HTAfktzKcCUv25JT8TuBqA1F6VdB15LxHovPYemhYCLyAHV",
  "key26": "26y3bRRvypPdXhZAAsJXbQUjM5J9jx1aEgPyZJAcW2ghPf3WU1E8hTe6xEKVmidKmdiykrYtFdFZtL1VrfXAbo18",
  "key27": "3pRAqNnACX9kWLAWN4HcYijv8YYNGxVPhUL464YNaXaBZ9iHPVrLKxzvEnG4xkKNxcDCMM8ejP1QhaGEVFZWjDCz",
  "key28": "5Jp3tXhz5fxaSwMai9s84f423PGgeuo7yzKQbYoLHEkoLtPvYVssQbYF6M9jA2NG1rcnNcgsUTh57gWXBqpCyaQQ",
  "key29": "4EeSeGJPmasCQ6TdnwrivTaDhbybg81A1FfKeiL5bSYKgGuGhFGcWE3ZBWUFUd3RfqXhvJGCAeLVjPUvZxAMs7XR",
  "key30": "iWqnX4MhoRp7NkBoDmRaU8D53rY8Y1Y8tVAekL8t1YR81Z9EmoFrrCeGkDwuKpxVLmM4EcoPmnPofZjpWRedT96",
  "key31": "2NkwVzwaHeqSSPfnmLzFdbEqi31AQ8zahaziC8h9ELy5czjGqyHemeXRiWjsmA77hy55rEwdoJ1g3WqPAu48TCPh",
  "key32": "4iyn2JdvU39BTtb71F1jmYt4UJADj2et8Ce7gbpqo5HJ4HQUrYcgore8BKxHsLhgGDGU4VG8WmfKudaRgZq5TJam",
  "key33": "5ZSBd7ZySjkGJt8BBgxiBqHYRWFSFc3S3DuZMqZKcbbeM2VLkdMRE384eMWyKgKgmJuJmm2jKRHgjSP35vEuKT3B",
  "key34": "3iQQp775SMSWCY1Bwr6TWfV35CmqGvsnhg4jeqS1d6VHCMiUcq7a1zVrUEoPzmWuooFMKWovQC1BTb8JkFpNVFtc",
  "key35": "3afgNzJTXFcUwcCW2uzx8crn9yqKqspZbpeABUf93jGXScs1ZuHf7qtaQuSPqpRpRjWRnkd62MzX6AaQTurx6ts2",
  "key36": "5bTLzP5mNC1opWno1teUEMt2NywB5ioawxnC1ch5DkDDPPTLAZEmVhZkhve17KcDQ6hGwsEBvnUXwdjStXWyv16K",
  "key37": "FSkmNXRiLxu4uNzDRUC6Fc3P7WpLQRyPrUrnCbpfpwkChPvm31j9tMptwX7KCMGx3tuUivLV7TGkcQhdD11cC6p",
  "key38": "3KzyNopp7EnLyrYTZBqyGRSKnCnHaZHbwfDEvweN2CUP1ZhGjQjaYr6QXbaAXrfsEsb63jFxGELGBn2yXZR123gb",
  "key39": "36Kn6egpEobC8U8HLgeCqXkZQ1NyL2ScKxcicDP814Vtx4yakUKxGQ66DXtJNfgdYuMMXigjpTKzvEpVr5FEd1eL",
  "key40": "262qgaTYcKMJ3mCW8JYETm6i1pZvJrrxTiKXzkuhhoqZceyDTqQDEC8uTaQZhYghkWR7BRQWztKTuWrgo9gUSQ2h",
  "key41": "5CzabZ9oUhPG1KzYD1wNr97ZKaaqXBnsQ4RJztvPUcvvRNJ3KcRRj9pwwunytiSqtuwLwAjYd8chyK7JPYaRF1GN"
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
