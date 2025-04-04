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
    "3wUN2YWL6VqQMhiNqR14oC8g4vbysrZbFb2PJg5JJEGSMZnShzo3EGiDnMGZmuB72yGTacvELfz1oG5SLe2vDvzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yX98Sfy7oD2r7cqoagncCJaHZCcJyL6eWLUPDRR1TjrNiL4btHbi9QoVVgue7DEgrLbjsr3oZC8oXmnAwD6ow8P",
  "key1": "21G8Q1kEJdtymk6HAFkuDLecmSxWrNvsEcNqyhk4a3y9vNVEgBUFrpNQhYRHbpEVwvNFWChyNuwLDqoK5ySS8zzT",
  "key2": "LSsmRrXr7th9xJ7BA8hCLyUXNP4C7eLUW4UsA4WJDpWek3AkB9Tb7Dj1aBETH2SoDZSC1WDYruM4bT11iaBXJfM",
  "key3": "3hrpcqSWZFHNcKTqAkduTP2ZGyk7fGrzLkMPvWgAaTc3wpFb1yLVqRwxhKi9bjBA8QzJ583Y4ewaEec52Y2mpb8D",
  "key4": "3prMFMKjAqN9eEkFjrHnQN81KHkYnUFVVbJ9297bdwAQcTjMP2dMLNcC3AopGib1ECQDPyda2ygh7BixEXKYzDk",
  "key5": "56p479dZuc4ns9LqfZ8jYTcXUdFaznVXWhbYXC4rpq145YVnn4bqTza2adzRkQ59Z7Zpag2EaLW4PYZGpkt2QkR6",
  "key6": "EqL4swmtwLgyFCvSnLey3utpTW3HSSootgKpyhXmw1cPjsMG8v7KrGE5a8teD4NaXWdSFUAgTcyoGxGZik1L72h",
  "key7": "4TSDzmBngDfyumZYUV8VhY1fFBp1ZNtoPKjhqNkhihRp8a9CjxtwycMUi7c1WvHwBvcpF5kN9aRjPpRreWj35W2g",
  "key8": "2a1U3ABxgrh5RT81w2jyEsF3At7RUm2Aq7bvNgaDRubxkeeiQqSrXcAdbLmjqxJJu9e65zVpB9DfzRBCWhNz75cu",
  "key9": "xdJZfCRXpFqw4Tc2d3Xpe4THWRoZRGm3FLHeoMQuqjP9N6FyxXEtsc4N7k3MfUjjuUV3TcgWN1q7xSTptmdmtC6",
  "key10": "4c7oESbeU5wTdjmhkMhhS9GxVwZHwfwe7FW9KVVgUjKsiJP27LpNu13w5i2Qu5wqnBUpqHkGQDg5o3mwYxzr17gg",
  "key11": "5qbvxZKZAYVxvUa41AFSpovUVnSkN7qH4s7s1i8HmtSKa9Qje932T4rztotNKpMcd7RgPi2NHTecaJpyS8NeW6nW",
  "key12": "oHMEdT9Q5rTMhmp3ERhJLToxYnNq8HJ6BWadcUzrLi8WHJhTcw67qJP9tpXNVJbuLNajcjmidD3bPpnLmm21BrQ",
  "key13": "5NEV1L8u72CEkGyDNEqFUNjm1Z5QZyaS4RJEcVYd9SbFpYD2CAyHALkQqhdu7AQWLxnUsVQ451P99wfHjAW1i2L4",
  "key14": "2jiFoKpPVhsqhxSEt6BFqXcDAovE9a2CNV7sKP2xdY4Tb77eLTdagDfEqTJAXWj4RwAXQJS2Pezckv1rGJYjkWEE",
  "key15": "3StiB4FAa12ydgqtrkB19EUg1Tt5KRyV8ccC4YroXarz5z91VxjTTqHc1wxmS7PDycMLaUdNoVP6ZLKxqkZN339v",
  "key16": "TpH2Pp8Eb21r8joasqUE8nMK1veTd4GE2ZwLAPZnniUCSf8GtUeXMzJQUFPt74CQHKMmkTz5RzmDGAR7Ux5Tfcw",
  "key17": "x9myPCEcLwEwWjhh7cQt8U7aKBw2fhWL2YHsibAyM2bquRAh4mjofxgjqdWrD22mdh2akmJJn3DYNamGGjQNTVg",
  "key18": "3pQfuTVGavybmxx2NBEuG3tcZj67CouVS42X4WxtcBU825wKM7M3pypdVzrYXzi83SwHAVftLvUXPNJPhX3pSM2p",
  "key19": "4mrw9jxNgSN8QqfyGmnFttDDrYxSiz6wvrRs6qMpjRq4RtMMqoU73FY4uDN2eKkLnkdUGiPYiLbNK5QYDUfLGL44",
  "key20": "4qy7rysVzagiKRQjAEvZ61RDYznA75rsjkdK5Ay4C3gsZEU3Le1cBknYDsd6UYSwXAFEi9FYCL19nL8vG85CUuGQ",
  "key21": "36VF8BkTPuPgDsimJGRS8gm6peteCApH2Pe3HT56SLNLpXrC22JvM9UQtanor3SMtsYPKRwir3WePSVBLVK8nrnv",
  "key22": "5zryF4g5LTvTmKnmGkb1RHtJYHxSsZj8znVizeKipC8drFZubjhMdtPDRsBzG1AJ7iu2Zz21zcCbhkH28BFcRZ6d",
  "key23": "3Jnku9tu3MiA3di9ynykSvWJfSn8q8zaZWbuyD14Fe4j13dWbdM9WRfiNGzTx38daGcbpG4EruBStKpRCnTzwB6D",
  "key24": "Ynkx488D8cVF3rFsBEjotF7T9avbUADCwqVEogTz7CimPs8z9SNNsKwuVtdKr7NLREJBHsMvpb9VaGoXTG6G4WG",
  "key25": "wgu7tp4rWAjrngKa653F2nyu5kxpjA61RK5B8BA5a34GEwenqQASFiCKMNLzrN2BajozKFJDVZwdwCZ4YkBXQSq",
  "key26": "3hR1kQ2UGgtWD8GrLiWUwgmZ3aDVWebZd7MVZsLyvRcsxoD1SFTgadjccorqYXGMLTABPjmPqFCSk2TwyahT2cr1",
  "key27": "63WoNhgmMkX8BhAeVccRx7FxU3YMDKk6feUPBX7TADQknewSHemFmxzUxJUAnxJMRh4zxES69hgJ8Bf6ZUYixTUh",
  "key28": "2YQ5wGg9iYuE6R5Qf7GRZcyNM4hfo3ZHacYpBxtYBBQcUdJa2gv3a771Hbic2c4nrgfh34hcgpokJtBUzJx71F2J",
  "key29": "XEkRYkKz4hdzjcsuq9NcX2ZUN8y4mA3dywx5YhfQk7X1abkG921TkvBRx9V34Jsut7Zvj3gVwAfAq5SGLRmiecR",
  "key30": "4C5A5uY2SmL769XsmCVDDjje73LSuhBwG4ExHqLUTFFdy7VzXvrnrJWZYenXb9LSGmT6pALQtgkTZr7mH4ysGueS",
  "key31": "5cBV2RNtHcTcvcn1K6yYQX7r2RgFDfL3yPFd9ujz8VTzQTreSR4dTr4CdBDFsj5zc1CRAQUfisMatYxG3bjnF9At",
  "key32": "2zCrg4oE7YCGuUHQg3mUgQjVtNEdsjvaeV27xjgLVnnFyKWzw96zcM3qcjb8M8YA1wRJ8N8TBpoZRDRYkVGAd6KZ",
  "key33": "5TCCTiFXV9gdRDSkYiZzFmj17EKhqKGomPtKkCCLdwco88BNK6q2LuGqWPTLb9SZ6iXRdsZaT1TkvFuRRTyAc7Nb",
  "key34": "5VmMuCoMaW9jMdNFaiXPc9esLrgm3abNkRJidWo1CwrjprZ2VphkBq5Sq7C75hmqfLZMYZQHMG7pBs9bTETbBe51",
  "key35": "5GkWYhoX71vXdnzk1nLn6HCXUZJPN8PeFpFnG8tMBHia6Jbg6ajk9gpETLNv7MxC33oe1pCd1XaJxiHEf9u1rx4v",
  "key36": "2nGtksoEAmrpyVjM9reU5ya2WYUJ35RDw9z4Z9zve9pZ1RwnkPacbhmAX68VQVCzgrZ1zVjvoGrsSnfghSLs3WjT",
  "key37": "5NxyUPRqsAJhQxzaBHuw75LrXADwKosAAcd4FFHq7i8g3cHjaTuAynyh9fK4U9wDgebUV5D7QuniJyV3MhUoLJHV",
  "key38": "ctpx3zZuBM8viGVLqJs6hj7RdpdFshJYJCchZpbRMy2NCLyBL2qTmRWVbN3kqWGafrmvm7wJHfUxD7N3DQHwrod",
  "key39": "47A1EtnyHQNKTEkES9giU4D2DmTciQqhNVasQaSdybsLkG812va2WhgcN7wGhWNTeNh2beZ42inbfY1H73pf2Rm7",
  "key40": "5nvXXmnqYq89sadX2qYsZeUpWKvPu1nRwFFxGrR6DS7zJ1ZNMHtNNQ74YhNmUeAsEky4B9PvBRwS4cPU48f9icGU",
  "key41": "4d4hpMPtww2zQMUCkk2rsdXeauvXNsm1ojWqeVHBx2kTQ9TAWW6JZ6FShE4y1hga6VK7m43pB6MzfBnkLZMsLhD1"
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
