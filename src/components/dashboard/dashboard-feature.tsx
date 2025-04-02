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
    "4ihVSRsiPzYrvqg6D8k4VKt93NCE9kV2DrBLTisiKAR3wbLHZdHMSEkWFBBKciC52tpC7uHvGvCMfzCrXMyz1R9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDyeKw2sZbvjokXkCEXfCacExvw4x4qvr4udzRP3EE1sirmK14EoNJmUr3ghZ1Kv9Xw13MsS2geiDRWpcNZHMxh",
  "key1": "3tcC6hkeTGGC4J4ZxcCdLDemkGvaqSwL9V7ATAnHdGLiiSN8YZu1FNnSQ3jSKWmR2b27XBjs85iPjjGMEozpJqQQ",
  "key2": "5Weh7xsAPpCQS8T824bAqQLDA7aWfZGysSJvmS9v11PhoSxkXKpm9VggQVM3oUwUwNEX3JyEETjQ5jAXofRsed3R",
  "key3": "4FhY1rpUWeLcQAjY7VQeUjqSe9s4AH9Gqdy6gH3ghirDjQiJsZKP8TLGTNHo8TNmqLMhdUcadxcZPkvvigwgcF74",
  "key4": "2QSSycqvgEMEtx2qNpZ3t9ws8i7ESBNAbeEKK3SER6jUkZY21WcT7yth6dJZJXrcukoXTNMLAtzbGEvb2TDeNFB1",
  "key5": "2dZv9fH6o4xWtL4BQHrAKy65F8ornpemSUJwPuX8Y36jbwMQbh75HaKoUBm8CMuGxMkVfS5pFRVbbiTeiXfCtH4",
  "key6": "4QRmGLrGCsN6U63eQpGd7oQ85qKdhnuXW37veUTWBH9pCeD7odJe8rWR1ZYSzTUQegzQafEXpjWiAQVS4xxuSFsi",
  "key7": "yPXRNwVrXoWgCLazFzqFTSYN4MtsrU8rH9FLiECYgWM98u8bo2MvWdrzw7FDehfBQnbt6yLoT9Wjmu7syWkZ5vm",
  "key8": "2vEG5Esp5QSdCCvRKK3u7zj52Rf6GTT4BTnjugFJYhreVcg89TeiZJTWBL9cU7o9J2KePQa8pEJmRvWJT5tzJoSu",
  "key9": "65yZQ67zsGxAzQyafF11PhH6TsG2XTXG6RTesUa5tdZi14hcP5SsjfToWaa8UAqGFf5Nids8V1c2hx2q1P3xs7yb",
  "key10": "PDxD6Dhmna6idNgtkZoFZkegaHH5XZpif7j1FHoYLBqM7T5wdS9rUTATVvxVPdQgntcf9KVx16dStbpd3m42fJz",
  "key11": "u3h55w421j2r8p5k8J6Ly3odH8yi8tw1UH46zHLx4PKYexp8VX2KyevJjbw6v5ggD82SGKRtvdeYcxK1s8FnoCi",
  "key12": "5eH9tzsEuDFrsYrWNbQ9JtnG2XJvP8Ex9SA4mb2QDCX6reH6d5W7Mk6xxreqMuqDXRhKk74EREBou6TvarQGTysj",
  "key13": "cMbfajawZKTjL5UUXtZR8BgudzXqDK8k2R8QwJqojU1XJ1pKuMEp1Gf3Nxc7GttZanRCNWeRGc64YLRpPR7pD6Z",
  "key14": "2ZGi8LoN1REjH3UDkshYRRkxqCKEoPiA9LxX4DUq8pyqkwykic9peJbvBnzswS8cV11QAprEhxGcpuemfe4begyv",
  "key15": "4nFjW6UQT8k6xAW166TzVD95vrcaAC8hXoUPE4ZBicaJePriRNcWFtjrENn3mBtR8LbkbqRTp3VsuHiyaoSUEgkf",
  "key16": "3ZzJbvHDpjuBoJaiiipXCHoqtdZko7rNnapFjuC91aPMDF9x1x1Z4jDdT8p3Ej7ZHhZyjdVgangaJQhniphskUWt",
  "key17": "2MfRue4QSCa1Gv3YwwZ5Kzd2c4HX9Uc4eSLpMYpKr4KeB9pHhide6P1qwLKGMhhs7AkeyYjCK5D7aLF37jFgff7r",
  "key18": "44BPfogkAiJ3LSsidaCHhijzHa4aQPbz3GLN57aPh9AFmxoepofZxCMFNfwN8WBkAafPejxyVWq1WLvrqTLUD4hc",
  "key19": "2gkqmPVWkg6psWvBnGdmwQ2nGMjUvkXfrKim79EurSwcnuz1CkAeJVQNmauUzc9bmiqhy3GGWt78ruWnNzeSD6Ni",
  "key20": "4TLRguTwEdTptVZMrziCVbi7Jn56iHTMXHkbxQk3ibCeYFzyca48HSKincja3f4bEb9DMMQwwjG4rGryRJKJp8mz",
  "key21": "2RKAXMQvdtZ8zg2gA96kQXorn2XLinQPwhvB7EjAMHiPG3zBj6By8o9V6ETENYTSu6NRSBmEYxTBaEq1Hy8m8jij",
  "key22": "5xFn8rBfWvnMPP3PtL7iXCTiog1gW9j3eeY8XWfnfs558F2K3oAHrtKHtpSFGEYy3K99kE9FvsBiYxsjFVREEmui",
  "key23": "3NnCm9RMdg2LLjmHgsx72WiJNWYdFrbWLGwLW2LdZssWAR1SiQTZrGWWAR59jfQaR561sNPvLcpS8ByJmsy5bRzG",
  "key24": "3hVw1LmfG9LKRyprMmvX9tUxawkS2knqTVLPo9E3hU3488RZ7F7rr3hqRLxrjtERyXhRpDtJavQ75oaegVWib1ic",
  "key25": "2tnU2oTd5JScCFEPPS8CVzZ1p94qvNueaJZ24XmVzLy8uPsS3grNgoib2tgrJq7iFUfJ79NtsEyn7H4SXM81APV6",
  "key26": "2fgHme9AzmE4yntbF6XPCokfXmG26TDWYYEXibxSxKGZo1xGb21ZX1dEt8ATzcoMKZaFgsJUCg5YtviaVoQNfroQ",
  "key27": "3DeoZMAZx3ogawd92Qmb892DpbDC9RJEJ4NfKA3UXzD519SakwrUy8jhviDc1FCWcemeasiGDt2wcdiSxw8jvEYZ",
  "key28": "4kotrs9aYGuoRcDenjWRKFoiBhtfJfWdYMMeK3NQVieNH8eewD7EDqQ6qSsWparXDKd4kBYqQfCa1fVhJq4hAvVa",
  "key29": "3eDTiGubFvqDv6yV2cgUWbjmsaHZqqYe3ZtuoDDieUnf6R1QxnXqcq9pWcQt7jZSqPDVvp2a1VU5WJUWQqAM2azp",
  "key30": "2woUDKCMgetoCmnRo3aCPMwQD45nK3LE51sW5wMHHTTe4Sc1PMjqDPtYvWdMek1YnWAGiN67PUjuTEDbbewSQN8C",
  "key31": "4C21oyBp5eNCU9crC2pcapsMq7DJkp3Ci9HJaoZ7WdbY9cFKCD2tkEtPxB5sJEnBS2xCLQwZpfogJFk3jD2vRfqg",
  "key32": "3oYaifcJdwvCPRWhmj4mYyVkLA2eMm772QW8ngQe2RxY6yPyLXJY8JvWdseipFzwSDVv4dsimjRUkBf5UtfCUN8f",
  "key33": "5nfcC7dn59dPRcX8VA6YiNnANqdes7eSTUFDKmTozB3V3BE6g8MZCJ4dKX2j1nyJhp65fqkeaBvjF9NGUsaMuymc",
  "key34": "4JcPXVRUcfEMvJoqwMaN7kupuKhMwkxR9HdAsNzkhrn2cStPffPJMn9snQEv5ajkKz2fo3s2a8huoDGbnx6s9naw",
  "key35": "3fi2h16X5bGmr7GevAXU6LM1mXYXeBo4F8NSSEmsMavZBeG1obaxE7jtU1uRRK9KZpicy63Cw9Y3BHUbGdRtHT1J",
  "key36": "2671aELcpeCpLy6KPs91KqNZbaa4FcZ7W1bSfBhp2SuThyKQAbuFPTtLvV8TTCteMXy24rvh454ynzvVEonp9kXY"
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
