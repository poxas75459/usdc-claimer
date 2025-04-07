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
    "GJ6s9YA37UCp5V9suBNT6yWxMpYzPRPzG1g135tNGTsNxxHR3JDzGBCTGCrd21DYq2FXfEWiADqyksPpveKxc1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4etxXb1D37K6L9mTxmZUR9v5cX69CBD3pCPosLLyeGGR4AixW27AoBqmcX6YY25hcf8pkRFBGYiXo3GG6JAWdz2P",
  "key1": "33wDjATAz3aDpunyUfPuqrQaKCcGHRy21pRJL1dUf1dfXSZi8aoZzX2KqX85NAgTpnXaHhCwyc3D6jafU98CJSad",
  "key2": "2PEYMdNA6rYHhjcdLsqY3cHJnua5SBqkFFVC6WXJaq2Y3SNKpXe7wSaZcYuho1mYkR7EoSgM4JzQzwn9FTs58MLk",
  "key3": "5srZXmiePpAPjxxVp5DqpVpziXJaS1C3Q8DDpSkcnvaVuNwGneJJXaj1rsxcfxeMZHTBrYqifwarDNobZtCgJWB4",
  "key4": "5s9HifbY4TFKDavQqJrZmtYtofDHKQTqTvDcfGQwvYHEZu3yifmZ91Rhrf9p8uQbGp1yLwWwKs3KP7J8uQr4mYwX",
  "key5": "dV96PB5ASqXpFmJ5kfMDumvv1LgB8VGU1g64sQXqSrsrTkfb4XF9DPw9eSxPwr7NZ8HgLbr2ArZDLPVgudjWuUV",
  "key6": "N6ABpyF5BhSoTLtfGyMXPg2HTC5cACo62sdMkuq4jXEEeToTjVh27pZMMV9PtojUynqVbrTpjcB61D9oF23ULjn",
  "key7": "2esf5iDWEVt4dWefgJwxEgmhgVXpUzyswseLjMz6X2AEPX7QCqWndy2V2ZyUrnzVVD4tWxFhxNqd7ZVbuAJzZiN3",
  "key8": "2NAwTNHFrpbLiJuoFX1WYvYMwaSCFNjhAn7qTmCSwHnuG4zPGT6fHmec4G8BjHFmYrWwJYx3oxffhHgv1nA7ucXr",
  "key9": "3RPJpdaqJBXj5j2c8DivhdBr1ozXHZzWXqpvruwwpBFoXcLEkxkhcq9qu2xMoQMsDXePEtn1foQJpQ3HkuJoLDJo",
  "key10": "3rkniThtrhDYKw1cdka9mMiAm81V5ZRf3vGsJovTxnAHseH9CNsRkUw1J2qSqVezASuFUapP7mQChw5zLutEBouo",
  "key11": "38MZWf1WerCY4RKmtd6WVrwj5tiZBrNbZ8BHYLTssJhuFhPJ5nTfTi5XkweGRJF9oA1vKXay6y3s5ixfPm4g6iGw",
  "key12": "2zA1RKkEmmH6m9dS2vrHh7wMRz2bFX7qXT5px91pVv8EfEFiDqNcVtTEJUs6rs4FHkoidiVStX3Mh1idFwn6X4Uf",
  "key13": "3DseehMQ1AZcgTDetnyqUYq5G56Vjhvc8qhoc12LNLXYRAK96LBEx43nZoBaqXvoY3rxUoBu5oCawmEVnaXwcqeF",
  "key14": "z3oghRdqbkL9aiu32MBYKTPvwqEhWs3Xi7joQ92yYoeaMAZrfgqAXcsEfRPvTR5ZoYEWtM1bzML4pXF8N26wGuK",
  "key15": "5u3hz5VYXR8sWAzd7ubN6kTJe2QUtDpXhUDkqufwjbLediNhkrL32ifMmn7jjns4YDTJndZQoB3jRb8q8q1LNzMN",
  "key16": "5ngqSXmREcwJUZz9171swscXU3PhNcERLFiX3EMMNQZUwjSh6CSJmowXGbNBbN2c5z3sW3kdTnTbCoKZkuCtNWQR",
  "key17": "2u7zKD3tL7648tV94rKSizqYkyS1rcG4dETtB3ZNABjDPMpNw2uW4zAf3DBxYqLCUnsjp3WT3z6QQbvkX34Dbtoi",
  "key18": "9aCaW1gB89cHUC1dALXPQPrnjS1MHBfTCKPVSXC6iVqYGvH8bivgppvzB9ccmfcorghrRsKAHJ6bpkFCwZmCJrt",
  "key19": "3yEo3SLBLJNp6PcWfofcY1bQSPdoDaeQot5JuTmVrkAWCgfHhCv5gPXSW7DyPagDfdRtoq1pNMHLTm2715XLYnjn",
  "key20": "55pdueBUNax5hs7w6re8NqAAg4keS1JoZhUVo7yqM12cHu7w3ZbNLfVYEDq65EUTByEyW682X5bYgLXPg4HwLTJD",
  "key21": "jJoocwVMVQTTR78ofkAuTQ4WyZtYF92xS1ewtigi5HxeVua2q9gTg131k4UAwkyWqchRu9fVjD7VuszQEj1W7mn",
  "key22": "3q1QAGuRGpBYdYTDyXH99cpQPCsf7Afz78tkAEgzV5crSM5STqsunv4mWVipz3FdDWAYZ8EFVkuzDHAWvPBck2Dd",
  "key23": "2gCAJiQmX5TRMybykZV8MHHLNy5LKbU3dJ1h3nK6hc3tYUaw9javfka71jLV3yvQajRqzma51Mny8XedgFqw3Jnm",
  "key24": "2omrnnnE5MpW3fiW7P7teYKYndvJgei3ZKkjn5XDJtgsYADsVyb4voqngYk1mXQ2macEJHS13KBiU4U9twR1GZZA",
  "key25": "2hn88JcY6zKZQZMxnE61NvMsFmgnhs4hCJ2tk1H5SGHxY3qUpdV7xvf1Qx1bScKvE9BjEbGYC4CBJ8mi7PgV3ocS",
  "key26": "4dUGiLwNq5sAeN9EipupR2tiDFRpavx1z4jq3g3WpGMoHd6ZMMFCDQFivoA2cLwUTNxzFTSXo68eRH69xkj7FGYq",
  "key27": "3wDEZn2AS6xEzUYoL5y4CRHEjryGE8R2C1VpbBbjratasCwm315j2RWp3T9Lm6ZjNgikMi4uoLtp3CEuZkGZPyeP",
  "key28": "3idv4kAuxZxrzz5ZUytr4M5yYHJ8Qp7AtgeWj3XYqXE467p2eRzsADqRALjSkLqD55RjSYwys9FZZ3Db2crteLA5",
  "key29": "3E9mQ1RqcMD611TvWjvu1rNyoefp8qXt9yEEQviM6RuahDGjiqweHEy5HbQbcHsFZFqqmt8zyzzRFNS5YQaXYkfx",
  "key30": "ZMGPn89PnqUM8Mc8z6PavA6qbfY9DJ8st5Y1Zpjnnamz2TQR2wDcnCDx1v6txDEbCD576ZVNPCyjZX98kmSFWTH",
  "key31": "5Xx7w3V1u2nSR23KRhUGBKCFsAniEsKGA6S37msu3VffbvkkarPBM8SCgxqyJCwU3DDVNZ3WgJAeg2wLCA2F7b56",
  "key32": "468epckQoRgi4aryvFJX7gnVprDFfGEFcEQPcwqv5ZEg1c1cY8aXd7M1V3H7tpGNsLjxMMcjQ5U6hEsMoTMPXxhi",
  "key33": "2k2hap6zd7VQsPXWnRdH74gCEov33rX7XW6GXYzCBj1F3nJj8E9QcmC1CuknMgDVBF4zSL9PmzBVk8WXv61RovSy",
  "key34": "CNouNS6E6QoyFRsrJWCa42x5Z3Msh3bTzTajhgUJsWuiqoAfBAX1r9bhrsyAovZnqp4QhnSe18t7X5PBaVRU2C9",
  "key35": "Cy65GTZ2dZ1cwNnxxadVpanT6UEN26xsXp3MC8qvTz7MuTqrmP4W36PH2GG4qSiAGtSGtZPKoJ4sgp9uQ7WiJm8",
  "key36": "3YEDN8CoT7jh3m94KmLAEuWsAJT2MSCRt14rcJTjG95ueGiTzouzLM6LJNgtXcw7t8EKcsAhaNvvU99hQd3QwJCn",
  "key37": "iM3nyyJ2gnEaAKeKkfE4NAzEpJEpWK7nAbcMUXH1qj3yRNjwrg46RMkcQeSKzsyMwwtkxmDZCNQaRst9Dht2v1F",
  "key38": "HoNLGLTiteCmnhF6i5BCuL1PTgNRhdZbegNH3UUSEzLmcEvvPoeHEaqRFEtSv2b75hcxbGcNXKt3RSFhcn2iwbv",
  "key39": "26kXjifmW6fv1tqyXYSWPqeryZJ89dCnJX3WNTkxtMt4vegoSSqib1mUQmm5SP7PaqdkEQGebgZDprhLs5FXBqCt",
  "key40": "4GFKLzVkTRbZMruszB59viqFZ6rEgqtz37go7tvcJmLaD359vAkAXNxzEVKgAqriQzBv8nZH8BtgbMqRGUMduc1M",
  "key41": "Siby5EEo8K5Ewj4gtSnfio3z9x189Cnt3pz25YL6cXf5LZy6kVFVMV6yucJ83E27CLfH9BvUFaV5ANXDs8mn7Qr",
  "key42": "AtwdR5zeGpZNZA2tueT58sNAVr57RapGB7pfTPqeNmujCR3wKKNPphPKVoeEi3m7cK9e9DJt8BMEvJ6b2NGURvS",
  "key43": "3nQQhX3Y94DZ7R82LHYXUc79wrhCHbCuckAvTGwuAegUaj3uDuakFW6xrW2VnkFjvJb5sZyzVXbUyWtQSzU6oQCr",
  "key44": "4RrqPhrdsGidAHi63spq8LouikGUH7256pMjuY2KCSV9tnDSSrceeUXnjuB1HC3mxGsx288BhBMmVLYp8xggLfmj",
  "key45": "5vfAQ7BVnB3NLrajHGn1esvUPwUF9juSvSAZTvPhmtqEx2fqqc1pwQKXos8YSjYanbU9bwdbM7EzVyT5kp7xgxSU",
  "key46": "2k83FjxHngzf4Ge1JoARZyGgWposZ1KSmoZJF7gcGKGQofV4UTn6futEsB2m43j9mvCMKDX1CGSLp4HuvTL81QmM"
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
