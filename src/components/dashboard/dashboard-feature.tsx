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
    "2J4g8iB4oEnwwhiUHjFztUm56VJjzAndnGE19fYtwuEWxdUJskAkqMkRR5DobM3Dh5bxAS3JELRmUBfbwESRx6Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vEw9oy6Hdkc8A4Hsu1mmv7V423nefigwbYiDEu16oHy8Z2LrnTdEkVnLC1iob4LJuQDbeZ1nh9x4DoEDJmdoU1",
  "key1": "ZbB1FHSEzmmGibKGKxceUKVi9qS3y5cTM3VosdGEcun4e78HvGWAngRdnKnb92esTvmHow1XzB3WFMAmDynCUPF",
  "key2": "5sSbu2VfKXppSD4fZSjL4MaeJ7wZFWzHGE2Dudx2zx5iB32qhwypsYwGZA1owbEEYnW6vbYRxFyAAL9aWPyqQE4Q",
  "key3": "SWSmaHj98P97nfQjAD9eT3GVyjyTV5pGvoRZPfKV1GPbxSsTz6L1Yq9aNseSbmKS1T1rc4LPkezptZfMstq1Ny2",
  "key4": "65arePo3jddpQEov1zB2vvV2ZGecnLj3oPkNTtAyAQx95VnprmLoG5dwyoYijw3gMcBr1irv54yQKGa44zkLN3vc",
  "key5": "4BYmykYc1dYb8gnFJPUWYHQ6WTDdLQYUrGkjfWeLVrTtD3cQKzQXsn8xSuj27SympjPuhiCaeKFxezSiPUh8z5fr",
  "key6": "4gomHhmWvCFuCyJqzoX2QQM5CX1yHC56vp6NTG45eHS4f26KxqEKpiYZ4phLFCxqLhPH2UqQa86NCocFgH2uEKmV",
  "key7": "5S1sqa84mb8pUmTK7CKt6P7CkCzpCA3ktEkrLeeE3EdUXL3CAmnDP8Ln689L5vDAPVfjD7TjBrP4iFkr2hSMfFuv",
  "key8": "2Mw1dZ7Ch9FY4C3qvryjMqGU4CiK8ogRLgp9o9NbmiLtaFrumigk7sxLPBY87drLzEGxy2v8gSZUA3N7aXFUT3YM",
  "key9": "61fBdKdZqiryjKQj2dbdMsJgXKfvbJU8zvthUXzBg5rUTJgcSfNbGkRbtdVEjaAmjwkxPw3j6FnuLM4q2YfLkfgN",
  "key10": "3D8W3Md7FUVfUQbBVyzeXxtkGjKkNSC3X3MMW74CEKTomD49LoDT2G3FiahbmvxXLcxw35XyAi1q77KNk2ubfzfG",
  "key11": "5jtRjEbaN12QEn3zooXwCGSWausPxLnUy24Z3pMGkYfiR2FbGY9zuCucnzhyzNBxU7BzaSMRHd1JRQS3WkJUjZGc",
  "key12": "57EFDoFNXiCphdXpQBVU99t3CgUvgmg4d5RVZ42SrjmeEYpnuyBXrWi5zZ8JXBYa1HCnS64xowkKDYhxkkCibivh",
  "key13": "5pChx2TsxWNaWEtjuBKrJGLb3pw7MpME2Tfb1DjVo2MSQveigb6wwvnBNMLz9g3V4GQMEADFsJaVhDzYztds7NKA",
  "key14": "3g2nxj1Q8M6dMntG6fdrRNAqDmsZvPHCd3DLUpwXWBjfLbGSkXUq1P2r74PAmjVRiWyFY2FnFt5uT4xeR9UpTKqK",
  "key15": "3PMsryUVkdaTRcHXVXzi8pbfJnUm1SHzeyBkopboa5KvpQkaDE8sMZkg3NaByMUTEdX6qcdctmfuwm6JRvFAqHXw",
  "key16": "TQvCqVJmnqDFdjMYnnsq7ohSejLswhWg5hYGvCp3y55gk6ovcViXP1b51jp251WS2zWnYL9ToeEKdPjHrHrLAB4",
  "key17": "3dM8srRx4ucPTuBTbhvxMYuBSsS1oVGu5MyviuSxT56mfDz5YnmG9eMLYch8fnEz4PSLQ7zCGwnUZRT5y3exKqCL",
  "key18": "tuQXkfZ5N8d1geQDRDPVEKAhzCQDitW5f6GacYZoX7i4wzGEAKdtu1N8g9ARhvzSofU92smG1aqWDBNETYjYE5Z",
  "key19": "4VgNE7woYT4hmQWp151SLoyMWa2CcsdrkLwLFWYZJScX4VDQf96pz6KrK3sSvyk7NbH1KEYkKV1E6yRYm2DX4xC5",
  "key20": "4re4q6evGYhNJNbr3TzszhqmRwUnaPwEXxeJ7era6gCcaBok3uxhZgcc5tjdPMKb9pc4YkZ16J9h79G7QqZEMxFr",
  "key21": "5E6gmrRVUSxi4VyhN9opiGFaGgsqGMdGiiTPsNERhxnJbXxpWm6vCWKrGNVZMrWqvtrAWqGY5LQ5DfXR4ZC5SuKM",
  "key22": "35zdhfCFhsWKGPYai24A3MXXHWqpEF4tc9ypnpCUJW1whkPN4XduMTNkC63kRf6zgGNL7txkvZgkQiQZ1eZBcMf5",
  "key23": "3Rp37gtnXSSy6iUrWCtjPVbV3bT29ZzT7iHTeGaEtnkiY9M14NPCWEq7B6ULLCxd3DnW9nFhXc4E7De6Sb1Kv4Br",
  "key24": "S5x9gCVRvGt7KJjG6ByMo9FLeVPyT9V5eSGDAkU5CFBKinyt7UoAiDmvA1Bak5zsvcBi319Hmq5C1qvAPMefnXf",
  "key25": "2QoAeZHpHHrqQUFJkAuZkMfxXVxbsk2BBowGwEqxGtxDDZ9dJZvV1w3mmc2fENJBP1e2sDCbUSmQdMLrixF88EfC",
  "key26": "3TzAJeQp7c8gdJGoXAJ9dd3idfeaoB7feKSanoFg5c5ccb5kvdt6fHww8j3sZcS7YBjudGad8b4qA7i2hrtnY2Tq",
  "key27": "4xiT1UagAQcH5FUtKuVkHLh71uns8e36fkEhLCV9RtjMzGaqRmKCkVqhzzh64H2nGyivnwRbwd2s9Q56A6Xfx7tM",
  "key28": "2MNom425J8aGzRBRjLjXXxyCEooiMwn61LrZw1JwgAwVrkuk454VeghH4CXRSJbdYtWALCn1HTF1tDYfviU1QDQj",
  "key29": "3EyVsED7GK4CxeWqpdT1appTVenKurwoaWZbnmHjDJL2vqnWJFaCz1fitybURvgeZwd4f2yAfeUxRnUTNtaHEceH",
  "key30": "3qghs6kTx8ALaqZtm21u2gBLVyCagmPSbvtVcMeE2yjT9RPF6EPiBbLDwpKhoKrKHiekJ6wS7wWFwRpMzuH8GabC",
  "key31": "4mpPMyxbyQuroffmVq1RDYQkcRcLvtvXaHASVeSHUmxHg4PkecBJKTWSwKENbKkfJqaxHVUjBgUPNYx4jgBuisBT",
  "key32": "4jx8kAMu4bLwxxaYrbdHHY4vhNP9fPYSs3B7sXqoeFDJ8jgqnbWNnXoauQwnbRg3XrMta2S58k5gQfrBqongGjQp",
  "key33": "4KZRMFQeYExqEt38zKJ4Msqehv69gG6XSTKro1w6jVqzsJFCAcrcA9HPH6s4MxHsH7gJGix4WANLnXrEy2PehNP8",
  "key34": "2rF5VRDQD2w48H9X3zmbCWit9qGMpjhtyeALfhXzvWQRxvy9v5bUWj5VC8icD8VPVamBzya34caSeV77RMijbAJ1",
  "key35": "2JB84hw8uEPVWLPsNoo1brAHAX5ZJNNKYzRuoKKYQNy4uNUf5U22S8wZZSi2QuhQuANinyUdSDd1JcVjssfkt3ym",
  "key36": "3FTYjjDCSKWASf71cBRgeC15HwyHsmkcyoQEfWZv6K2XG3w9Zuthtq1Z9mymdxF2nKKmYzJCmZW5m5CxhsaLWM4b",
  "key37": "3VZvxbRpL9VrGh8HAvFHi7EHDjvDvxUDdoQ56BYX6HzCjA6Y1Zg8tXsmXzK1bUKNLGByamvk29BTNkRTEPyvFbqH",
  "key38": "2QUsfev3ZhGvA2EJchmiAGTJegCPZjmtpwJUCkhwMYyTXSCrtLdzTE38MQqXkpQgysGDJu3ZKEzgQULf4PjcHvu7",
  "key39": "5jhCAVEcHShyQGFKvDAPezFQy4aLkuu2akVF3fRoATvAJDPaoxj7HLGHV6TBJb9fhqxyDD7vNFFtcg2xL7whiD7N",
  "key40": "4EPQjPtQUp51zFuiLpHmqLsT2WMaDh9FfX6kaSUeLs7Apb34MDsR8pwjyidL1UG92UFi16sYvx49FiTV4aRyPHXN",
  "key41": "2zTUVPT9CqaizwZczf2Xw9L56WvFVBk36U7YkxF2WTqMyaXV7GUfefHzuhZm5uChAwbgDmPvHdeM7nPeCUYYBddv"
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
