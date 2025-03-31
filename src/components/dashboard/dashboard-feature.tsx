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
    "2xc9RuheGhzmXC1WPFG7PjM34VYi1PQumQTDxR1HwL3BmL2oTQmPx8bzxEtYkR9dtnXL3qFBDMC1u4sdy8fh89U3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfH66gKGcueDkynXhuXTTVz4MMGyuRnr6xDNbbpzXmBwUPFXKzv8bReuxuDJDwnzBD91sQ3kYMw6KTVLq2RP2Fj",
  "key1": "4PqtQqq7XzJ27nXxbaGbpSP6TNLZJZjbxAFfVm1xhQuwKuKWXuexpnvMaYeufdWotfBXhzZkGs4xZTCJggKiavbn",
  "key2": "58qM91qfRh5sUkCvojJ6ycGmVS7hC6gbVMqXx77yzPaiKMRzQsscmwKDyHw948hjfx1f8VABEqxww1t6LdtEMwuu",
  "key3": "2Tx4zgT7KHgcDcFAeiSZzAR6ShXQnxgrvfGor9jt3VoxF5ZeseN1PYn5shjCb5f49ukGwgkZvqBQYbnFp4Gu5ptf",
  "key4": "4pRQJzvTJ3X9wSLJMx62BbSAfHxbXiF7ma1VkuiA3MDrJ9e1ozL8z5Dx5h9GJAYyU8u82ohLk5c2PTTJ3azkPzgd",
  "key5": "4zEd7rvj8DwqinKkEQqypEA6NA1CbYJUeaUsv9fYXNii1bCAaEaLsrNgk2cKkYQKpcu5CCg4bJpxmCpVuAqnW252",
  "key6": "3Wa1oKTz8wAN7CvpUgX53YoKbZLXkB52zJ8zoRTwe5vKWoTQnT9EavdiujgTsbCoe63sS1bhaBF9NiXu3jTwJMi4",
  "key7": "3Ws2cQbPScysiZVmfEV72SNUcB13tis4Co1bbkyo8MAHzZfkiY37io1mhAxWnRKig6WhxKHTTJf85z638Cef9zww",
  "key8": "3F8HnwWiu6dCckvAjauWiqfcmJXJiGZDRU9NreZQwLjp17fEAjVqhB6tpqAsxb3Pnw3xAuq5vU5ZBgNGRXGyJdqu",
  "key9": "2hXcNo6ZrCZeNGjYx6HCd83N2NbkoNgJrwZGa9K9BWKJZPLyacZHkyK64nxip4uVJW3joHMztVnxxiidTETegXHw",
  "key10": "63LYtEvRrsLFcisnmP7RT19nM11YdEZWrQZXPu8AzQK9VhYooowD5Ykt5GGPgvJoFF1PsaR3QsqJPAKcqBsBigj6",
  "key11": "5KuFa1rZCSHHpgFWtfCPBmHQSHeXwriixFb5fSbWQCBv3uNg4qXfxxVghVGMuHnEHk7uxJhPGSX7xWxhDztEtBEg",
  "key12": "4rnpQ6RQTpNS2vozDNJ4X36HkYNHDx6kVG8BWCsbq9aLapXjB5shxSGZs1qwpShYJm41n6EyZMMian9R2N34bw23",
  "key13": "RsPFwDtezkPypexVUPZnLmZfgkN3YEMWT3AqqtCaCtWGdwrbvKB5hLrdFRfUyRm3d4GsYqik57WKKB4gj7wEoZC",
  "key14": "2zVGzkbSEvUDgA3juH1WozbhxvUtm2rGAWKJRJqfNmxhNz43qpDF8WzgvRhwY9VdxzncrKvQzXFceJqQhhBxpmhu",
  "key15": "2hJvrSGkvEcK66aTQpxWLFV5S6DAv7D9gCYXo7xBozXeALUV9kafMfD1RCtcZn7QGeXqG23gnfCU1W4AfWcBdT5x",
  "key16": "35GCeKrfATGbr6fqxpMY7xsg8a6w1fojd3qA2PneXfyq2BWqmjNSdk5rAGdd7HzShMtWS8reV7qZChSbfV7MWZpH",
  "key17": "4isiixnUGweGgUhxfSX7hmAfjae5xTuZKm3xZqyFr2Auc8znsgTMcpaXQsTnsAfpaBBvdZS3ExCaQFHYnCJz3X3W",
  "key18": "4z6MeoL2qGcoyirn8vbabyuAxX67mcQMNhhsySTmCm9cxiC2s3MaWuCFLGoKVWaMbSoKvr48UTGMAYDy87RkAj8e",
  "key19": "2DwnFTq4mMWqSBTbBZFjqRS51xtchfTCkHr4af96qFzp8EFZW9uBihzN5LzGrQ9Mn3hQS4tAxe58GDyeCfTfKx3r",
  "key20": "3j8v1dNVG7XyPjZQ8o1hPrbhRvuWXtFvYY22Wnpj5s6njGkKj4e2Qum2QAQqC9fHMArCUU9uPm4zbXrQkjDMPDbG",
  "key21": "3rrcPXrXzaWL3n3faMnmyL19qASGn7NHqjF8xPWwX54UFUqAmUCjucuYfTSMx9Avjznv4tPWYM4phxWrD2v2Y6go",
  "key22": "4hfjgzxj8HKwCnJBRzZdpEDvEFNbnC4sukdCJwnX4t1FykMfkVrPjzZKKTsRBeg3XjgfWqT54kP9MuAeFv3s5dr7",
  "key23": "2PxcJndJwSnYFnsvqvn1Hvv3hWwyJoSMeuCRFzNaC1ZkuMMqyitEhjAtdxYprc1dM2RXZyDzCuivZQqudZoKHkfT",
  "key24": "UAX9MquJ8Ktc1tzQBCoXnjiE8eXdUrKcb1Cw6dTEppuiLtmSf58KvX96bzjTJeC8gEJdzk9nUSQRZ1B9qxvqcKM",
  "key25": "3BqZ4rLtx5mbdauwDSdHFEF3GvLPcR2pQiaCMQCUk3XE8f4g8hmAs77aFFtpuUE7jNgRMHWnjXYKNUpxMfG7nbuM",
  "key26": "5Bi75nPVcUcb63UGFuF3eNSUXaXED7uysi4kZ5jpnPzXGaHiiTKEGuzCL9ySaNyLSsHnMwZ1s2wmWHU6LUxkxekM",
  "key27": "2yuDpYqFU3i7RLcAPfFx1XCRWLPQNSrbjvq7sTT3cjRhkSHQaR9AVarNQbJovyMrB9roeGSYCkkmzcscCK3hiNuh",
  "key28": "57QiEAXZtCc5KaXGPdMUMaVJPrPRghPfBGUiQuSUnB5cei2Jbd3MFCyo5t9qqLJvvwQY7Ccu6jr6gdH7j4y2whuw",
  "key29": "3G6ejuzf6Tvtfhy9oNywV4yvEe5sLtAZFdQfwW7tHm1UNqZjWvUX4fpKZjSdfZrjm7Mt8dnVPkhFHvK3hq8sgBTe",
  "key30": "2pCcV8non95o63Qco6awB9mA4DAsfMogavQFPjii6f6HENjFtWVdGGbSHKfdmNDydjBJZtyAHmR3n79S5is6yC7z",
  "key31": "2RXxiFLBLsVJHRbrjQCVZ39vbs8wcstarPuLHoXsgEEaBkRVoiK4ttPd55LNkNDbfk5eH8aKDRNdxnFTYXXJeB49",
  "key32": "5zG3mEqyGDf415AyxJkgaMHiuR7PsPKpkFEeNCdqHwaHS6qRA5vYmdYEtGrpLEbrcw2vdv4ujV9RTauZakmZd9he",
  "key33": "2hr3rXW7hGh2kQfyqW1utzyKeLZ3tjkgrmxnkCZyk2YU5EU2vMgRpPqJuEyron8p5Ueu5TEoXVfun48MkyNpJfsc",
  "key34": "4m9VrAah8XDoSjqepwEabgwn6M9UzrGDuDxrwtvqJuJNgurh5dv6XiwX3dcgxos4AzpUVYRWu1jRfkJ47ajxxRgL",
  "key35": "5t4LuszoEcyVT17JA7uVagr7MdQ578ErAa5vXK7A9WpRrvkGprVifA2ZYv5BMmsyNfNzmjsyMstuMRSrBrJPGRfF",
  "key36": "5svENh3o1WeFwWT5AUaajojhAafRBupRhYnQtcseWfUt3UzZLpJKGAWGFEQnXEkHnmQs8DFdKGukRwgupneUxKai",
  "key37": "59PCHUxNDqdLBWavRbXJRHz7fu83ysYkgoL4zfsPoQG7oG6k9NhRj2tKPerHb6YBKCG35Uz38NRa18hBj9Y4w1h",
  "key38": "mMnTYnTKGD2BwDzNeJeChkfa8eBcFhaXYSsrjNsbJiFoePfaAtsZLfSVnvJ1uEx93ZyobdYAJ5vkh51sBiKebDB",
  "key39": "5wNioDHmSenaAgpimwHmHm7TjDxSv5v7WJdukmB1MUFLtFN3LWe6rAnu8ZYYhxzZsU7xrn3XC6zMCG4WwmMgP1YY",
  "key40": "4rnLR5ZjSB6ZWoxpf3y21PxH53mJnQXjZrBFd4ZVDR5TKbWFo1uxeNrqbU42q5ZXzMVgLcJdNEwiK6Em7phGh8fu",
  "key41": "4nriX8iUcN3KDpnKZupYRVxDZJydyfGhXhZwUBQu8HD2qLCfrbUn7hNKTM45H5k6rDqU9mEozJGo8H6Pe193ejUF",
  "key42": "3fngoxhWyumHfXkQbXd5zfTHnQECUW8gN7qF9g2Sj1EbSM7673cnSxCJrBzcEqbFUuB8V9xiPtrXGRtHVLX6rpop",
  "key43": "35KThVN5teEKVRAPLiSSVwLQDRfE7EbPtukjScd7ikiBa3hs8avC7WQhk36q1XgKVwazR6qwG3wBcp6GrnMAFPGS",
  "key44": "4c4tVZgFyx96S846TWynYeHhsnPuu6YJ7o9fgeGYiS6u1ckegnKxsJryH2tFRtB11v1jYZQHkhA34ZdjDAxM24Ew",
  "key45": "YWD1LvHzwHk2o3eL8TDFSBJ2U8EkAwGxjbadscCVPUhhpSqoSuecUdsCjweiYRGJZ64AVEQ7GtcbKBdBc5Jt995",
  "key46": "2XGAD5kCY6fkmkd2bmFY3EaQuHbCGTKFiLhNR9WtniYBrwhDdUewikpHmnrEG4KJJjXeQniaJWXRyscXtCCqZfzN",
  "key47": "67j3GrW4UqP9XdE2uExu5AzJHMikyJBDdDwha9xGL9PTnxA4nvs2FiurtenNY7AXh6c5Ubz97tVNi8hoCC2W5YWc",
  "key48": "5TGTyRF8GavqGNAL1XQMrJd2svyJyyNHNMtDzGA8oRc9Cy8BpyA3D844MUdoqsQMVfsx24KuAwTwDNvVQHKfoFhF"
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
