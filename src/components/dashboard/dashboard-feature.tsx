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
    "npKFZAke11AHPHoFH2qF1YxLDHDfWiaAAv87FXSyxTwYozQNYt4qmG6i6EA2SBBusHrkr8kNpxLqrmHscwTvKiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uryhnZXZf9sGCbXQ77r5TQQTinVxZSbkjmKNCWH9GGhGB47RicFP4pHX62Zkrdf5rETxQ3RE7eoaGRTH1gN2K1x",
  "key1": "2noxxFNQnzjjtBhyebZ6xdAmTFxvpgh5pnYgnc5mG8i38pv1GwwRLH66qbXHXmfGza9VK82UxthRfHZ2NgVLDLYV",
  "key2": "GowdRfHpPBS9ZQvkRAcLGk8C3YDqobvGearY5boL5yUkExx8MNcPJop6ETEvKcwrfkuxkrfFLJ3hQgvHKpE3wBF",
  "key3": "3ntVGnk3iBJtDemXMwGoqH4kGLCf3n5B1K46ZTUei7aouN8br5UhsrxLS1MmWGPyZChzCVKxNcSdkg12Xi38Q84s",
  "key4": "2jbgztacnSDfMuE8S5zRsSg9vEjfHSrdNEJK7xAveWUDCoHSbRrBnsyT1jQevbrXwh7jXNjjcZ5eYNzAz5LhtBBb",
  "key5": "YJ9Tgp56diamqMpm6MMym1VsSVNaGcx6LcowVsaWD48WEmCNFg3tLPQSQVwUKyAY9yg9aqnZfbDvRd64ERzBBMh",
  "key6": "5NHy8AeUvqsLYv83QNzPMcr2vKjnr7R46egzn3SNpnkQ8VzVekQ7LuduR4ACtrzvc3i76vPLoWj2MhbfUy8mNiFE",
  "key7": "3m6ApwstXucrD91d578s2zoJubCG4DHoqwm9kQoB5Uqhv5kyL7rEUWBzjnzstVyhc4kdBL4MrSZo86mrP4n7sqk9",
  "key8": "5zJTnq8S1ouqkw6SYc8wELAAyH4n1kQ7GXzqZCeRNK5ujjc2zCWsgvWdAE8aEdZtM46xmeCAENP6BJa8eGBgbB4h",
  "key9": "5Lx871L9PEobNmwyqfwo6xMVkKUj6afCj5CZxg1esdtDkDzMDiLAr8iqpBS7nekx8wXWpVhJisQktf88yzmuVZqu",
  "key10": "3EuG9uVWMjp94N2nyyBWscrXRu2dEH6UFWTUrLLuvGj9zAnodCR4HhH2iFk4ziodXUvA2PrJwTD68ydcufu34dms",
  "key11": "2MApmbAVHF7Afc4oVzNCRLvUTJJymFDHABa5pKiWbTMgapzzUau4TmvNASEEG2dJ8qvMo8MwHVRGFqz3Ee3u2zVz",
  "key12": "2znTPU7ma79Q2UpBB5LrGu4vmZaAHR7go9Cqkefpiqz98f219H4cw9ep3oopggqhXbwFcFqnGCQ5bmVTyobpewB3",
  "key13": "55feWMiVDLUiNL3ERpuKn2jHXFqtVZj4V51nVX5vp3pvqVij6k8UcPY3RE5S63FkE6j71N6sXsBQ9Exe6hFJbJeq",
  "key14": "yNscwLSLu32fU3KqiveGsXoBxwy9DWrmxXkRXmpaKsViXczxQ6pbh6YvmFTcvoRw9TVwr7uRiRBU6ZwPzvf91fg",
  "key15": "nCztm9hqMCpkC6aUkv1eAeJjQTXvEcMzgUe3QRdop69pSU1nBqVxPxLsqGhfikSnmoz5DoKfF8r6MN1vrnPxiv3",
  "key16": "3bQBmRf2bDCKJVhFLVo4UduAnrZxTQWPqQp8HJFNtq5upVrNun8wAfivko9mUgRDfLtpmjDet17FuJK9At4RcxAi",
  "key17": "3Xx3PQBQWADdyjtTWTbz67Ss3Ycbh3JGc1UC28jYEGGyQ1pemQJFoqqUokhLvajggN2hqFSaj5QFSVnH8Zo3vk5K",
  "key18": "2b6az1AmMH7iD3eRsQvsFBJDjn5RhDsZPaYWyC6EnrFxydCTLZgxjmy1R4oDKhk8WKKmoPAVg3bsSCPgqNZDcM8S",
  "key19": "2V72cLeA62uitSPcPi2SGji6SaBvFYaz9edyvSZq2jsXAwN2MuwTfmdjsAVmkKGnsicnXdcp2P4SCbBH6cWEV3Fb",
  "key20": "scTBhCUfP7d9838aosyTXECLK1GUx4oCLCzTU57XJn3K2PWdxQ675WzBvPcAps8gZU9PCB3AsxxHUhmNDpXGyxN",
  "key21": "4fQTayaNfJdrctBrrVghNJ9SUiKpCazTWf2MLKTUW7LqBSzMTwK1jKuHVjzzzzjjJYhrLFWQgdvGVNSYeQrm2D2x",
  "key22": "4Z72m5FvjUZ5aAxmMcvBK5NuPBTpG9At8NNzLjVTJV64K6Bh3RU4gNTuCbPosuc8isTz3jFoXgrjEkRSjBiodY8e",
  "key23": "4nqhzTsevBbt8smskmX9J8EEASokncVrH1a7cC2jNP1gMyJD2RtNb5Evsm6VmYNVZVw3C59nexdreE7eCtEhSYz2",
  "key24": "5apRzmFvKvVK7uZy7PwCD4Duy8vqjwcBGrRPBsrkNmd3ZvignfH7waM6ZK5zTvZ381Qau6ZCWs9tiPQrejySSmY5",
  "key25": "3R1DRSahwvxHjtfP9SN2hnM5Y6KR2aDNJ2gSDShmwRvHEe8mgW6mQUWPLiN9DBFN9k2hzKvKQFBzZ1uDMY5D6124",
  "key26": "22WWZk8BfCtKVfJw8kXhdgP1MsEANo2L5YxGVfamSL2xGXqaCVnro9H8YPGYeiKcoCqZqHbtApddk4Bev6EkZDTo",
  "key27": "Uv7gKfem1FViJuWFv1SbRpCC5SpdBPBFgfUuRF9WqB1pKHPxfsGKU9LGm9Ay8Njru4porryEkk6GV3M9oQCycSP",
  "key28": "PtBbgfYfy5rZ6mvX4uc5Rn1vitzN1mUE5fXCwEr1uT1rcBf95Kd9mVvRE2r21uTZzjKYvq2UcuoKp5tGkYMXmuQ",
  "key29": "3M1RgXXLzxP1r1nokgKdvtuYt5oLDBS4v1PPMuWZaTUZpDFWPQCmzXUxUyqwTxwqhb8EcnSvuuKXQNbn7sAepPhh",
  "key30": "5dPjwPdBT1oi9Buxj3VTjKgwYgsMrCuhLacnpj3rd1BZowTYrVNwGo8jqPQWnAaBn6Xk297sLWzNhygRif4gvThA",
  "key31": "QKgPhr1TM73FToxtqodcuFdTSYWVp3pZEA6JiiHQXqH7AUhURe2btnyyR2JQnERkRw5wZmuaZR8mxgnswgYLSF9",
  "key32": "2hNMk1cd9rQ5mDVUWZBukAZmcUutJGvNe9ThGr5mAW2jLUFD7pUK8r4pxN7FGg7ugmDSCuiAP8pnPM2FmfzgNxdx",
  "key33": "zFV4nbBHxd9EAxPmaUGwyT63bfDQcq3jrYLTg72Zxy2UhaC4doXdK5wBQyJdxkLT1rmYuYCEqtWM8jSLEWhs81R",
  "key34": "2XxdesGMwKx99gRhfHMxU1ocC4B1ewaFPrfXpEtiP7Uz3ix8oaM5ikKuoSW3fnwSFiMeNa8FQFfnudErjTNSNtKm",
  "key35": "4rfgZ2VuLvoabbTL4w1Lhu5aWoMKY7Ar9C9GVwf4sGdDsojNTytceWwZy8r9wNdpqN5UN86TvvtCvtrswMJygnff",
  "key36": "VFWQbagm2obnRp9CMiPD1yUuiReycZocm1XUnhxDpoiMzge8VJvgiFw6X4JkSDy2Am5PZ6rCcvh4HiW74opLGvP",
  "key37": "2TUA94brCNw7EbvgfA75ZAY1qvZq4sUo5vjVv8GFmJrcsyX1BRwezKL883kxCc771Kg6DTzqaQpQ3iTfc5fmPVCv",
  "key38": "1typqjrQKSkjJz9nJ4TKg26UWdHRKLqcByp5f1r7wZ7LxbyASweUJoS2SMAH9YvUSuC1qHMAvZ6xHZ2a4naUBZt"
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
