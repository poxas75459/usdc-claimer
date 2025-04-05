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
    "3EkZTxfMX3MSCNvJexJJh5nAHfLgXdYrP8zm5qf39Xr4M2WCpRbJrJ2fyN714yyAHzgKrjnQzED7rgRMqQHH2U6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQzhybDDqBVefFTcNBCi3SBA7xC7MZ2aTGLmDXyJ7hH3hDHT4WJnod7bKM23bUiftwm8mHyVY1QbnHn3m5B9wf2",
  "key1": "3yEqnheRQNHMtBgBnqgzqCocHiyirfAkGJRWoX58m6jbjugaVbQyAgcSbDHTHEQzhFepYMtTrTnTLzTmacrj8V9t",
  "key2": "2TWRjRMN7WthMnop1AocmcRuivKCz2Qbq3vMgE2NCbQyA4GaYgtPhFaKba4CLFiAuUoHTB4UJR9UwGQMo3aCmsBr",
  "key3": "4x6HpL2EjwNYpL32rPa1hhWbERWp3Sq1Fy8e8v27Zo6HawEq6eVDBAZdBfUToTyrLDJUhHeEFEpjjqFKvxTL3zKB",
  "key4": "Dr5S6hSkS4ZqM76CXsE5T5crmHmpwKPZZNLEqsen73ZjfZZeaXKcjhDK3ai3SCPwyZqV64mC2sbJxNt79E6ECdi",
  "key5": "4eeTPh6punbuWx2huyzK5CvSiE5vmpwofK2VAmQpG2afWTQHRhyF5aBjxkqVr8qB2uxwrQYeJr924J1VVh4xNVHC",
  "key6": "5MXWZKsbFpsx2awbSvnhehJwoqzKwxpVE8w4YJaZd8imdEc53vTEQKVmpzvDVKsnSfTHpVasdM1ybpmrVugf5zPR",
  "key7": "435gCA9XzwoUquwhZLNxNTs3BVxNssTzeuW7wfQx6jjUAVixF3FMJHdMpJZhEojw2iqf3JznRsih3q8vZq97LqG2",
  "key8": "qtk75n2NDHWVEtpvTymWkDaXVkkRuEgB9eGtETn76teQh1rywhq8x1Et4uwQLWyQpp8ZsHaEvpoFeasQdwP3kpb",
  "key9": "2Kqjax8A6ayvT9FU6eh9vDby7YZ11BCimaMu7Zt53DGzLB6t9MUcPBvYgVJ5wG6iYJLHBPnErSH1DFz3Mv5NMbHD",
  "key10": "3Lz9mYH5tBrrrYNKoL3HZaBrs9GBEmDcKfRMqKpCV7D4y5TZa2EtEMEdJxxkbVFhs4XBeXGL3DfAvyEBabXeUnRu",
  "key11": "22ebqVViG3xiVhsSB4UNXHbYkAhucBAaZmmREZWSDM3kbZFwHQHPL4YuVTqsEw6GTvp7UygsHCqNDFLzYGTfHMHT",
  "key12": "5uYKXN7nxGo3FR7YvCrW84EuwSZCjDuVFUwp9uNNK4X3D8A3GfDCU2mxPJw1HCcjpbVJdZejtKUSBCHhiQW5ZLvq",
  "key13": "5DNF5K29mVCCQE7hmS18CECDLCHke1xEFj4NhKvcdn5FJXDzYaMmdwmNkQBtEWYY6YsVqpVetCas7xK5VFsk7NBW",
  "key14": "2c3b3J8PYyGYdY4DH3xxYNqCfANWEpKR7cvYEDXb4XrXW8haqxbny5tVKkdbQ8u3hkuECa7E943oBa2YekJXhACT",
  "key15": "2vovvaw8Sj6ERsxtpCGiLaSTuxwRDE2xhxSE6AtmwCn19d4CGbeADbgxJG1GrNoGTbQnaxeVXJax4LiVFotZBXp6",
  "key16": "41EGDSJwxHyqHYzFRyxHvbcvDaRGR2dGVsD6S1V9Gmm97cyKrgs2QnFYNc7UFUCYwsLoQiBYffqMJMXhc3Z7iWoA",
  "key17": "9WN1VK2jAGh3pbhwvnwC1p7xK8jWegctYnroYXUKJ9ZyjmQ1GujQSSbDhAqwNQpAjdmfhA64SaWSYFLCqqUZdfj",
  "key18": "3uusupjpsEPFemNSNkmVr4Yb9pWK3EFk7RgfeAstRdMMJWJE8AYtf6NgUNBLwFbDkXYaFTnJ6yskqK2Nafu73MDi",
  "key19": "3LLBwGktHfn88jpiz7BXAPjhxiDwg3eqz5eSxEQG4YFzBrDPsuxe4RydgpgE1D7oNTMYZQ7u9ACTkx9HgrYfvj8R",
  "key20": "2BL2iT7Wa8sYaCFscKJQqhyfvveJkkZGp63Ao2k2y98RtDAU1aggskZfnhnCdfqZ3ZFDGezNv22y2wFmL3doH1iR",
  "key21": "4Ba9FfhkTkv9rtEDaCCA9ARdo1fWg7kB2bVUQHgxHvtPiXzJkyGAThTYMsqon7NXc7UHEva9GPgyuoeW91eEwF1A",
  "key22": "5nwzXs4ERgBNrWY6CTkqUxY1FM5hUuTf77gQUZL6BCtAXijeaSxvTgYoHLW728AyqZ5vC3srE94PjSPj3Bb7StC",
  "key23": "4ZgyDMEmfPsmTRcbnQd7uH9azxp5LEvxxRmcotKSE1ivDuZtVcGm16e5MpoeqDS6jKWPXWVRs2Vxdk9eRRgraAvH",
  "key24": "4Z74Y8fgHwGrmn41UjUXVVUkfQCK1WwRXFHG5AMvHEkUXxUsWw436Cd6SZ2s7PudkHDvaCAqbmQEPjYh7GKRo57S",
  "key25": "4nAiiht2nzRgAvGGCAkjuth4SgVwNAknKnAeFeAR3DxxuL9xfw6QkJKxG1gGGUc5wHmPtK3jnEB1GdWLatL2nujR",
  "key26": "2TYwa8r4rZLFTTWMv6uPaXavBVurWeyLwvLafpJ4G7ait6qAakdGMrXEoRK7ogKGLP4gtpvS362c6Ge4euovyTSo",
  "key27": "2qoFuWNiKz35gi4KCjJKv1mR3zKgzNqwdfeX2qZhTLZmDXWksmCXabQMny3xu3dgYgsjq8LPD4mjD7wGWvh3hke3",
  "key28": "2drCgXBqCrSfEiq8np1esbxonorir3RmttMLThhHN4qQuCMHVSYYy6VpuziQqYK7p89kNNREJ1F2oPsBJpNhVKfG",
  "key29": "5jFQGKr1xaNQWy6tcWKMeFZgVFMuEucH4gUnsZkbUnWKvk5qcHyNC7KHcU9iSQ4f6eESVoqKYrsBv62btQXDZDiw",
  "key30": "CMfmVX4fiLBEdmtzm6cKYCmMDeVv73yH8QZGVBnzRKuN2BTKqFXjcmmkzmEEqKc2veC2MpgKn4zrimd9rbxkwSu",
  "key31": "4ZRiFEdoaEHcBiiaMCZAV1Rp9ZtuYrTdz58j35VBmdGJp38DXcPPZ7pmFau9Q2HSSVFhEk7CYt1ug1CNmHeUqeCo",
  "key32": "5yQZCNhgAXiU4aBAhS3ib5vFzPYk88wygB4zZFxGi2677xVVGttkMYCMD4QXDzd2zF1nPUz1tj1j4LqtKFP9nbVq",
  "key33": "3w7kATBAN7dkmFYy9MuFBZyj4LiNuB2iFJKgBmLYQPamgq8nBtuDqrWW6h419vn4k9QPqxESH5aQmY2GMBLmri9D",
  "key34": "5UKWTWf9HhW44UELBT4CXysqLMhrYheYSfi9YBg3LVk5gHKJyZpaRVxkWBVgszFh1mZbYVZmPBXRCrTZfqvRekU2",
  "key35": "5KWxM4jo8tbLkJT9SkoAG5TyUPZjoxNX1j4DFDhyJCPuNE9MRe6EzYvryLrowEhkHq1uVAZkekVfEwZQawDvGAZJ",
  "key36": "3K2DHpEMp7WRi6G3orswtGqCHSCYVfsPWJnJGSqp34CSJEYczVT3W6XHxrBpkbRbqQXyEFxm56bPxs9Yut1gVvwG",
  "key37": "3yKwQgBiyHLQvXWMrMrAKuZUADs8KXxZDHgt3VTxwNVYHeSCpQsFW3GZyLBquapyUH2YVKiGnJ4ZbMSzb86B5AQd"
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
