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
    "QviHL3pb8wjN1Hum6yk48ksbk5cVqkBhjQr1goRtHCPjtRqRcyKpnWe28wPCEuUVfE8Bb8Mf2X1CrMHbtoYFUR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zLeswfUnSzyNuYoNkuzsNyUGhKcUL2oYdM6YF9jnXFtofSY4692ARVp2bcmNGuNJweMuwVxZtUsoTx4xpXRDpkz",
  "key1": "3TzHRq3MfYZi9cSJ68noZiHDwBH42KGABpv6U1ZTVK8WrpKWeF6LofePpqymMJ8TSunxUt1wTv3ji7ZzG6QPsqMB",
  "key2": "2kxDUjUDrwnWHXWkNtGrexkPAvzEKSNedGCB8nnhBWoWN27L574d1hEewhCQfavB17wSjSuRFVXLSPFRoLYrMTcz",
  "key3": "3eeBTrLafEi3ds4hjit2zufYcWrpVJNqgFWVEi2G1qXkULnMNoZJwHBuM5oyXfdFutCEstHY5FJnvXx7UtKTzmbS",
  "key4": "3qS1mb39tgzNoRUcnXsrxACMq5c8VGezRP2MKHs7hr5odDnpwWF8ujpVQ9E9Wsqw8XRzWpNmVB6WWkR4fbYU7qRm",
  "key5": "3mpGe6FWFFsJA8nHvgqDG9bDpQjktZezkA4WiTorTCKnn2cjyPSxAu8qxckuw8gSALrueJcB5YMqwXuTgL8ou1pk",
  "key6": "5M1kN67M8xNKE7ft2ifsYsmNFCtqRur82pwQxP43ydCKufsTS1Xe1hHvvjcgNqrp7jxXZrSCXG9LccgNtp7evuws",
  "key7": "5Nph5PA9iLwgKyeZouL8TYSA9fuyauMSLfYoK9bHEm8BHtfnAhweNv4Qi8PFiEHyKb5SjLGW6DvBnKEGkcw76rnD",
  "key8": "oDmUEQaunfbYSLDgdY6FVyJoUxvUASfzn9fwYMvfQRiTwRi43kzxdS1rrrTwS5TgTGG2fd3vCAbh52Yws4cxHFe",
  "key9": "4HDQ3ZUyR7kKHWzEQnYVRfbknjJXGA5dUYBFTPztQNSmPzWuLnyAdebscqDFN7L5JF6GxPq867V2ahj4ACpWhTGq",
  "key10": "LnDjYzrtgvLAaqM8xkNFLHkX2XyHNoHGFfHZyZVYRN951ZmuJDXrFNHTAvYB5TDKvir4QnNPp4PEidD62o9Kwe3",
  "key11": "33SqtaS9oXHrvv4892eLD64FQVRVYz7H4zUo8AFPEPZzvX1n6sUnR42SHYJBSoTiNHb3kFYia1eLGRKJzWeh3fRy",
  "key12": "3ADQ4Z9BqvLJbY4sYkpeK58SCUJ14bDjULfa32HgBxajgvtyFJYNAA4T11L3YrsFAmLvj63YtU6TwFSRoNhLXegm",
  "key13": "5oWvByaDgfiNrLo2Ke8hGkduidWz4nCquVtARrLJvXkKQqeysV7pkqoru9cThEPAhtUe3UHmwJMQrDWxJu2GmopP",
  "key14": "4rgyTFQu6XkFduy1Cmuu2PMVvSsE4s5qZsPhf7bSgBF3UCD47QXXppPRhsX9sWr5yJ6oAwATCmwGkbD2mAvK9SKe",
  "key15": "2eEEkXir9AWm4QgVe6XPX5CG4soxCYc54HCWhvE7CjEb4vW1X19PeQEMGdwz8yF6yysHNDu8SFhjetuXC1bqRuvP",
  "key16": "47wJyCqH7BFXCkDkLXC7KTMeADHb4kGzZpuzt7Stmjqx884UGnMcm8uZ8PPJaVHiGZSAg3QK6Ab48BF5T7qJEbvK",
  "key17": "5raTsnUVZSNy8bGyfGtHfuFc3rcQzZsUyLHhLyhnhHT4TpL5ERc6mB9mJvYLdQs2nDdf7vPKXjQPHPWSskwd9aue",
  "key18": "4UQ5zAWFmZqndd6tM9mehADYnUt7o3jeSEtJvLzkFjCMqtSz8VBzAAc1CuLfMiWz1c3HXXc8fc5KVtY18YRaPjze",
  "key19": "5TjZRcSYUkTRvWciZGUFdsUjbvyBwcUv3PJFeFeEtPdLdWngwtSrBfvjovaWz7vPUFnVKCoYfVrsu2k7nEhvWRak",
  "key20": "226TEhsJTbM4wfDRsPSBEGRYRWypVRAU5B138jmQkqqQdVomuvT7Ck7x8SfNigcDpZXu3LRNkBvbx1j8jLq4tASx",
  "key21": "21JPkM1KRVL8rVJC5Ckq8Q8sVvdewMsHteEHp6hWCqCNDjkhv96JXayy8LzDbq92Piwr8FxDmxCL7MPx6d9sVqh4",
  "key22": "3yEtAwvMSprKWgurhy3J5oxypQDurkHuNYfrHi31ysZdRcPEgErnpjpuM6huNzaqr39dZ1vQE7oZJBCdwKpdEAoV",
  "key23": "4R4S2wzzLHZ463UuABRzg8Chm4kT2W3sbEvf6vC3xs2toutAyr8mb7AT3aLox7nbyGLX6MjNH486T9zvfeoLWpwc",
  "key24": "2bf3UoowWoPkcU1UztrHpufZ36AbhrPY7Z178DmZCLuoSkVpw7Ymvo7jVeA1HW97j4DegspseBqYZfVizkuDLq4n",
  "key25": "3azvZ3SLQDV8abspkUigp57sqAie69XjsugF12kWRnL1gRKEFoEFTK1v6fKfSgYr5EoH7R7hgwFtAAZgFeVs3W4J",
  "key26": "BwyE3PCcg7VuL9hmvqCMe5nHqZvQ4VvdrVotehj8hxtXHA1sYGNyWsqTh7HbWKpKJjQpAzE9xH4U7xkm2XS4nPP",
  "key27": "2kDJEPZnhysQCqzfYiesyfPZhdSdVjzB1u1R2oaGgFt5aVa5NecwCiPcNVYU9DdutK4E52PvP7D1Uq52vxvbwt7g",
  "key28": "2mKNH1J3rzZvTCuhaYeUdZn77Bir91HKQ8tC6kkJBbNWDqZf1dvfx8bAeoEbRnTrQt2keTRMrfvr8ZyxFBK4JKWT",
  "key29": "2QhxU5VAWZkJBayyte6CY9BeoMtqMNQouiFhN64sKPQuyUZ98MDkVfRvJtCu1jBsWErFQEkURKMQZNepbtzFBdLf",
  "key30": "3YW2vZjj1EZrxuEJnZky36vvKys7HTJo4EnFzuCmVLkwHxF4LrP2ZZj4NfsykV21CPwQiLPk1JCjXGWvm7q2aLz4",
  "key31": "53F65HDj1QqjJKn4CpZnJ1S3hZLvN6fDXyL8xkKFNsZCJpdfZN5JAEba3VM2ce6JFvxvaJsW7KnC7gK2ALavNSpb",
  "key32": "4UaMfWJsPRUw4rY8k1ciLvT6vEvcMurL15ZnoSN18EYMay5nJ91Dyo2KnuCnBmkzXydffdhNvk6PMKb8tyb9gH5a",
  "key33": "4JgxqCdGoZGKu7kYLGUPfP9akHFpTfD7BKVQpNhcHCtjH59k3VZAt3SVJoJpm2PjcVBpsJmBxSC1us2n34ZUNbcc",
  "key34": "2o8WM7piTL7kGgzddFMro5DMH3xsXu29YyGrCAtPKKhTGNhDWAF969qcbN11A1jtrGxoDeZmp2WiKQ3sTRMYLjhc",
  "key35": "45LfcjYfyoSaCvRMbvv75JgtzVyQbd1ds6yPG26srktnxtPMeXUfSAx58fZu37KoCJdiQzo79z7ptRZgxDR8ojKM",
  "key36": "3gzqHD84JmRyLYZggRHEEkZV6yGhJBs6iYg3GhSym3TnHovWVrN4B5P9eCu6V3GWkBUDL3QXZSSNYBp1bs4uVfD",
  "key37": "3mtwN564ywaohHdjPmxKairmGcGSJ9zMciLikYzG2YSzTJEK5cu4jpFQfaKkwESFvhhaKwjmBk1VMcgLqZNGWArE",
  "key38": "2ZQWoqd4rrM7cwLve8F2bAXikRB7QL9faaxizPqFdf8p5QDStBmwXwgQwGgCFVHHkban4cnpYJqsnGEZuF8dVENY",
  "key39": "53TJvCQVwKUrsYNJK3dkqXLLDSTTxY3wwSA3umM6u5DDU8Sm6HLiz3jZ1Qzr9ao4hHS9bt3tfZkWWbV2FSmhiLCt",
  "key40": "3F7kpwKBCTXHX1R8wY3enShgLpsfWBHTYwH4pLv5PLxx9K44zneT19qju7QMnLgwJ9Tx5sRRGd49JnYw5ZqCUVjX",
  "key41": "5kt7RLNw24dfSVvNhtqBYbxpGfVarNACVmFTucRgFqdGbc1H5g1vhpdTgR5LMff14HXYPgrcUAuoWEsVc3Uvhuuy",
  "key42": "5JA8RfX59JQERbW2VXzguUBTCcRSfLR9npWGVh3DyYVQ2muAcFnfvNNR7dDPrLM7izvTJeMHHrUs5giW229YAqFP",
  "key43": "2x5xbmnNcFb6VX6sJKEis3iCpXXhJaFuEyhmtSJWFxdsWbjSzm5PghDm1ZuoesFqFVf42M8zP816f5ptZHpfaCwB",
  "key44": "4C1SBngo6dzTbG1ca1XgADUWNkG6aAcC5asiDqhmbWKgoszEw3hkKDGymnzkGq6AfKwiwkAoMxrbW7HcyG6F53RP"
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
