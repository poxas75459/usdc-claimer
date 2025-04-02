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
    "48ngjKVjebK1R7SPQ3ZJmKxSq4bgXy1VTGV92apb5ZjNZrYuC9k6Zs2YK8J1YPNihjvLDBam5dZbGxgQV6Conj3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGibaKbQamjW2pFTw5EYkK7qv1qVJpb7jLdtU3hBTK6kcassfjXyoPNqLcD7Dte9twbmPmFM6Cr1X8raLdyEqJz",
  "key1": "5oC8iaVM1B74ePED913jrGvRnRiuA9oZtYU2gUWKemFYCMHpkNGshqWrEjPSDLYsqbHWgGj7ipUsWNFLjgxkSNUd",
  "key2": "3dYEMHxsPZpxDCNchmZnHUmk4FcSq729qno1c82HHYg4Kv2Ks9Er3dfB7dZouMbF6BSsyft5ZHhGZXVhDS7FzZde",
  "key3": "5uZGRrTV3BiroS1P28AkJuVCK2JS7cPv1qBL52eZiEMQAM1VFhhUXqatQzcDRTJWCVj5Se4bqiBc6sZbycGrP7qH",
  "key4": "3YgA1agmGPjGxqzNE7zgxrkSG6G3TTHv76vTZYxKkLzSHnaVVQ9vBzAJVQbuKkETKEcwN2p2z1KG2bY4zEWtWeqY",
  "key5": "61NQxNbpj8ufGSdg3vYTtdPgxuezAviTc9UhXFNcmHD1ZHHzAt3PhkTih5J83zkiUc91s7QdVQoemo5UzZgLzKtE",
  "key6": "3HaZW4tbkDRjRF2nS4VMsYgHsYAiYgjvDtDzzGvNv4opAd9sWp2aKQvxarHyrF8yzLGuFvqscDq6nghpfzVQShsM",
  "key7": "581en88nSatnyoX5uYxc21LstxaNvfs9MYepQGZMG1mAtsLiLyaiEsPV5qBKojNkQmwGppEhhwVgjfz3q3hJ1AGt",
  "key8": "3M46dcHR7AtPXHAdyeVejQ3DYGfEHDsXGJ1q695FLDiiFqxTRw8RoT6YAa8aN29g3woPP8PJvQmGDkQYHuQM7mAc",
  "key9": "GRHeEKE8jQbjpFFY5AgsRp5rabkzGG1CnHtUkQaUbHkvnJaP6e8DoZLeTRC6KD49MdFos1PELWpUymdGhDrPaYV",
  "key10": "5unsYUqS733Wf5hkdvkgUJ5oT7HsvjXbbZ4xsgFNL6e8XaBTDvNd7UviUF3xtUw6uHWfA2izv1NcKS3MNM4xFE7Q",
  "key11": "5tqaSgAMz2YbfbmQFttpwTuih2QoSfS1D7TuCHRcMq5Sq5V9eixNWnQNzXmhmmtyTDvpdGcg3MgULWzqLT9itvEL",
  "key12": "A17N3d2R42q7hN2oT5N5xgk1b7A6Nb35SPNCUKZiEnfNqMzxWWbRBtpeMPD7oTnrFmHxNx5iLNw6eV2GvXGHKMf",
  "key13": "352kDvBxyuavdCQ2txiUUwEshdfBSDD6KQr6UHWndidkmoNnAMG69zgYuZMHsBMmE55HwLr2KG3SqiHWSYUTG3rS",
  "key14": "4ngU9CsqDBvaxqPq3t29k3b69oHsmpRG5r12MUF76qq2vGfhrwZE1XyGCeasSsjKKrkRN4BHN2PSWfUz387hTEDP",
  "key15": "2f8NYmjQ7kYKeo8emmms4kJoXyAQbiLHgGHiiAAv3hsMEY6RkXdNvAwr9T2f5MeQtt12mGEPCt5Zx4EkTuKXLPpj",
  "key16": "4WKTjvXCp8Fwgku9ccvcjpQmpWGwhQBsZD2hhgVuJ4ovneSi4h3Se1AQPotU6ZBXoBzkZUBe1f3xiUoFg1G3pskC",
  "key17": "5TdWC7tb8ugx96gSLQftoW8Mb2NQCTAPvMoVjgXUs7sKtpB7QyCrL9kbRnyH6fjfrr3MXMQtchBe5QK8NSHfc1hv",
  "key18": "9cJVj4cZzpGA6peTBBtJDMFPKVm9U9NvUPV4qhYp1Tbu58UaiotPqYsKwPYK9JWWFeNv7UetNpRxGvQM9XyTwze",
  "key19": "vdR4Enjri1mHdNiB6uhVuEjj6uN7v2AHbrjJhjn7kh9s4mQxGEK1TMqwoaio9Xp2BcistBFktwZqDHuumwzU2g8",
  "key20": "gzCnN4G4dXGTdrCJ3onCGmQYkWUCJknVZw9poNx6G1AdgPUGBBTHMbWMLgqWJzyz89AUXVnvcvHveop4XidLA1r",
  "key21": "5hdfLMDu5BaswZEyTDBSHCEhh1Ya8W42CsAKLgbSGeTvHhTNYCHqmJD3tCB7uBGJu69aF2fUQNhCq8UBBQofzZcG",
  "key22": "2CBmW2tCAm2hdCUg71LbUtNKoLbM5rnWdp2w3yFK8D2Ghyb5cvmbSxFcNJ1upKeFHcbynC2Lu5paiR35xYPEugGm",
  "key23": "29riis2kqfnAR5dEqrDcCRCvHZwJK2pEUc7eAaKhuraGhjg5nSkS4BRNqyLANKRp1vkZWAGbraXPD4jxmAvq8Pgd",
  "key24": "25758GP8SnDjmZHxBgqyopRumwQHfTeeowZGPA56ZFYxZ8woYJ1cATFEJyLBnMyBx9SLkfKiTU9LoSv7pKrCHUVH",
  "key25": "5LhuYoj7RJvBxPJbYw4gAj1JXxbQvxjbL4rEq1Ypyc9Nw5LyEDYNBymrE2BjRS6sr3CCHnrQEJq2Jsm2YXknnCBW",
  "key26": "2uPHNAE5cmvcfdbZLea2kVwooTTHr7hDCEPcifKGCQah4xRJW1TFWuvSGffFhG8aaEAa6RNhifkV5mdXAoxrADQL",
  "key27": "iMSVsPf9eMnwfg7RoETPYKpyAFojtf3yFE71bHFaUSot65F5phKQazJgr9KgvqCMnyBBzw95MraTJWxvNEvB8aD",
  "key28": "2peHZJ3koZSJrPg4g7SfoqSMRMz5CC7bu6M2r2B1JLUvaXLvYdwmfKqKhw3bSAqCQ2FSSdjXjMGjPNb735CWFwRm",
  "key29": "MdBTaX9Hfc8wNufpvwkH4CKVwE827ojauvT4gwUaewSWtzrJ1bpDYy53ZDs1nNqx6o2wbbKcifEQjmBVREFw9Qy",
  "key30": "2pyAokQxbkkZNdaQ4pGKVU4s4VakmxRViJYPu7jq1BQZAUTP8rJgdydM5LP5yvMgaizCpR24QZ5YyRFSNKz3aMTH",
  "key31": "4Rkgz4hSqJUAHjuAYP7BjoLoLfj46oDrwXRSRHUMr1x4rbNx5B9S7kEKQv252oEgBcsV5tsopcWsh9U4naB7eLSh",
  "key32": "4Ak9U6873Uha6ZUHPep2pwnFrKzXgGgiJyE1f2vgCVjEfjdzV7wRwjAcF1pPmYBuLfL7xycu4S2yx5rQEJCTv3t",
  "key33": "391YgZiMGTsNBTeFcRNc25iQW6a12431uGvLYXAvfbNV2zVUoDFtQt58six2NCQGf3uVfEkf1274pnRZ7MKYzccL",
  "key34": "4VefoiaVCgRheKonTGctwNzf7VxCgAS6fBer5W8xBkKSewjrVF31xfSkeAexQ5tkmo4BhgzAsQpktPzPXP9soPo5",
  "key35": "3Lzhepdc3h1RpF6D22RhvFyU2GA4V6Vgre3j6cLaykTwfVo6mwCEMVcqtZdnEgUitzFqqn7LADuZCXoSKNvMXNVX",
  "key36": "2g3G5t5fkMuyxiZEZCa9yS9R1pEfPtSdfBaidJyMa3CGMXFb7CMVSG8VmmkxckdER3XtQLgM5JvwB8QmVmU51LGu",
  "key37": "3YX9G6iNEPa25uGy28LHkZ6zhhztosu9mezLz1e4VzFsymEU6jyBwSEpfNE75LDQt3qgdpqmvyuRB12kncU8Tr4X",
  "key38": "5P3owXhRYFNgWkXQ55Qe97ibc5gEGwiWSutWzVrXk3YXLysoG7MnfNFc4wbLeb4SpFLrFEG3U6YPFYtRP5a2Brep",
  "key39": "iZg3h7EHngsavB8iDBwxVRFPcrgGy8vmGAHEZ4mpf3ZpUENi6akYteMnftMRpRphGTBeck7c6s9VPZzi5DRr2yx",
  "key40": "2PD5Fi98x92hnMkzitX6Ba71ghJxettjD5oM8YJQ4KjNSfTr1VP5MybepMd1ZdH7FMxFCqxUF4GABCwu4hdwdqDz",
  "key41": "UASQ57x3nMRHSfx35vEMYXrZ8ZxnceaqaJh4jCg799QzLhv6gAeRYoRnhREGdX6Pqtb6oZq9Ybr2PwVsMZ4Z69S",
  "key42": "58XhdGC5bxwjpdi8xcqRUurzvBCeQ1z321MraHkvEZQFJBhhCaDUuwWdgaErfJBWsV4CnLD1uFDzQpJEney1DZYd",
  "key43": "2xUFFVJidhogchAm42V1qbaNszcHE9PesSTJKw2VGn4WGskzEMYb8GZ2rprfpMBfnKpotPeAksJWZHW9FL7FiAJ5",
  "key44": "25t3MV1d6iwQz964DEBovKNMpLuPQWxjedHY46B9jQExCUg6HRAWYhrwgPxqzGP8kNa11ufGS4b5LbKuFowq9ELz",
  "key45": "4qdHutHe4AUAttz7fT84dac4b4CCyvowyFwBCjJD3bVXkYqN8dv8Ts4ToUwfgjP34Dgcg5FLEPXC6rByHCeNGDyd"
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
