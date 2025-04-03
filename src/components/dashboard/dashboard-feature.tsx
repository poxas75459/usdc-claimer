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
    "4Es3C2hy3kzA8mYgfaWKTMjsbVcQgFAguy9dRXSUNLoykryLu4jeDTWwGek8Ts4SrCu23pU3Sc2HTZ6Gk1uz61u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dAKq173YkHmBkcSuzSX3wxowXeu3pKj1gFTPpyoVGEV779ULUhHqWgi4Xa3e8u4H7nnsjbyupnqzAwheUS5Z3Ej",
  "key1": "FuYvE22je6oVqEcLkHhZ1md7FTU1yGBoYKMQNpSFwNsFP3gjn7ib4Zy2kB6G4DkWis4NEkjCJDsHJgoYAWk5Sfx",
  "key2": "4Ekig9XX21cNsNjqQhizZqpmHCUUfxmMhQbNrTMrNzphtWGB8KFWdiBBbzSDFs7Vm88nHrwpizdBQVdQaWE9bEo4",
  "key3": "yMzGNcArospKTeRyQLTwJMADQErYp5nq5rYDvY672kgSF9rL4MUGbdr7RBxtfrN6fJ2jVG159G1ggSHQihQeLms",
  "key4": "52evCJq8ZBwvSvK3M2jp6dnMfeQXM2X5rLEJ4tMvsi11tK5cb4UyWV7G3XrMUzoCGLwygA7DKE9ARsFstoGPefxP",
  "key5": "4L6nkFX6pCe6swhJa9LUsY9Li5ZioCgunadErwkYqUx6zdqxhjLUWZbMkBTTPXKFbj4S6JRFCMLMgtBautn7BeAH",
  "key6": "3TMbKBPRr3P5PReGbGwTvnxW7nYtLkLpz2ezgagavn8BdphRSj5SokAphhHvQEjJV4zX7TCHhLu4nbcEPALrHYdT",
  "key7": "23Zv45pQbM8sypkmhsRswcsGMcrgxr773WG53pskVRxtx8WQrEUFmABmB64Rz2knA6QLCMheCi6xuijE4h6Qa63z",
  "key8": "3Ddzu93DeV7Bq7XL9FZisCrjud4MzknUtpTBnz1EzFVyKWwY2bjS5VcLxk9eY2QRxZukJYnmLKFSxRvcXWW1R6d5",
  "key9": "3NkfyZhfdjY2VVQWv9eKxzExkWxLDr14hpX12QPtaqteX8MRhD2ZBDgXyvhZUSDwfvhYvSVsXm3vy4SSBPZLhEj5",
  "key10": "4Vn1ZexYds33ouDceyM8PVny4m4f8wkrdkkWr3Ya5Lf9VV77YoupCezuFmF4eRtPeunVz59FNChNfttu5cw8dbnk",
  "key11": "3exUEVBpqKnnnC37eyAaeeaGeS2FGkifo4mwecoRYZCZhBwg4zPzHsiF1L7uGG9o9rFB7UJDDZJCH9uoD8HWm7Y3",
  "key12": "3ukKnarhknb2r5RdVGLaf5yGLWk5wjncjA7cJyLyL1jwuULxokxE3wikYRC3HAeCqvCrVBFNQrA1BaDF9aNF6pva",
  "key13": "21KkCgGtpFhu9Ybiy4k1aUmCHBY7uxiCwSczNDrUvw4sQJHPzTtw12JHWntRCVuWNuqhwrNd6tUJFJSWiYpv4XA2",
  "key14": "63wvohtDtEdfYpNa7MyFuNmKSneprK8CfwyS8UmfnPkZ8Auo7cgzXeCD9XDxfAZ9u8weVdXij9WRht9utpXrrS51",
  "key15": "4Hg1tNRC1f7Ti21HwxgdNdcLJu4bwdmC7MKPZsx9jawDx1qxRKtjBqkqcDzHkn9d9YepvB1EJdq7aUw7bxwEGeVc",
  "key16": "3M9wkyiCj7uiKie73z7yvcGCL69ELTL2iJNCLppbzxgh6cvJtgmgZgZSnuGuCDMnLa7yQS2XKbc1afCpShejFP5M",
  "key17": "5j22XKyQ33iuHL4NmfgPrcZFtjYe59m8Aws8Bt7rRUn49HrVEKjcECEVU9WzKG3N4xdqNwGbBkGLwmzthDgHFyaV",
  "key18": "G6ziN1tN1mhZsZ9ceR5TKYTYgqHqG2G3kx91LE5vgT7gGmU8RiK2p7yuJ7tPdpUSzkgRiGx1sQEnTe1sCjKCvJt",
  "key19": "4tVjEiZWfeF3UfSxNJ3xUw5ipARcmD1eHhSRoTHXdzXoEeX1EPtUjGqyKa9MZ7CF2PWDX9fLHcv2ne9PRhGapd9U",
  "key20": "3pqD5Rro4WS9Kxh5eb2j34qjSP67kKPswjLvh6eUUQ4XBZmuLUwZPyj3j39KD7Th8BZ2Rn38wS7xg1LRG6VGHeqf",
  "key21": "3xR7u9vvStsTyvGxR9k4gdoBDFg9787AVK7h8C2YfnPuNBumKDWbmLmRbsEztbzQVvngDxPUau94JK3cpUbenfp1",
  "key22": "65ToMb3eo16xiHLgB9AofVFYxNWGgJpvRpgGmLekksTZqRKsUV2GgXrsJffvMwiPH8pqDiLUR5Grp5tbXXChfooj",
  "key23": "54tMYAFs3ZoQF1y5qZLDUM3tCoR757Zf2xKUg9UKxJpBwGAf3FpGJhbrEQr9s79GCkrgxwZEmgALBoGcUj3NzbAo",
  "key24": "48Yt9TpbRFLsGmFkHYRfeS73k7vJDgUrKxDmAFHjnYuitmY5XAmFoFGEmBKqTMZE4b4WErNe5Nt87cn6RSXWVzAr",
  "key25": "xU7Cvq4qWCYMN1gU98PEEVQyPi8khkXPZpUG8Vsa3buAsh2qDJVoyofZi349AVNVSCGAcGQopLduAaonGQaocMr",
  "key26": "4oNEneWLYEezWV7HccTZ3pRBzY5v1V3UuH1bqQ1bwmxMjoY4LYqY8w8sGMCTmhHkgMddJnzQRVxhArHQT9NYE9vD",
  "key27": "4YfmBxXELPZvU2Cz7eU5k8wU2UddnK7njUNM8bsCakavSkZg1muFPP64bV5KTBPUBK3Ph1p2KNim9useGykSpwNK",
  "key28": "3ED2LeEyXUN5AzB9caeruomd4wLU89EF14xJBZ8HrHK2e4bvotrnUHCtaRievGaEUxWYf4i9KL4vNM3S2zBgp2Sx",
  "key29": "59JFH95EtbHfe1fYcL8swDKFts3LDz9CRu8TQEJH2eg4W4WUgFPA7m8GaKDfmo5XPD66wJ2ZkKqWfYgy5Qq4MNuU",
  "key30": "mqQdyvux8UvuK4uB799YdaqCYLHHv5HeavxjaCbQ5Qhb7oJxiUS3v9Z5BqyPHPMWPKHCpEqMPjEAeiVKiZ6hMGq",
  "key31": "35wPg17AwP9HVchnE3xaCar9e8uozQyiWLrYfqZJYaEjr21A6URikujQH3zqXLuDggqDPyDLLGAMwKESYBtgWwP4",
  "key32": "4Le96q35GrpN6fgUA8h93QWC23p93umTfueaci7nVuyazy3UH3w4VyETe5PcFoJSoYRvucuThZbXVwZ3NdRxhj2j",
  "key33": "4CPmLVzp4HJ91go9c1H687j5vwyHBVZG4D5Ts24sXmE5Lby71KBSsp7ufureaSiALHJoVCHbDq2xNXpuXSUaSvAb",
  "key34": "4WHzx5QD6haLeR1ALPZxZUVf7hcBFy6hhPjUSrH6EXcv7tRkm58c5sM9cwLT1yMbPNVS5rmucaVpwy31Kh8KUrvb",
  "key35": "Hn1FgNAGDZWXp8zPkgkstw4AfrS86pBupJqSoFGFJXK6nJoYDEMyrb2EhVALJ43oxuthZvPQdAbnvWQAZvChKh4",
  "key36": "4Vji8qdx4XmE3HMBs1Fi62Nv2ywKQf3XVCNjxKeGXKJaLppRwohBzNM7xpfCdMSWvSkicCbwrdqvTNThhbucQg8Z",
  "key37": "R6LAN2AJk9DWbqB1VbkDHhQwsAipPv544FkxQV7qNWqCoC3i5dTHsLa6tYG9r8dhenvoNV49yb8gua9XGxcDRN3",
  "key38": "35pakLaB5tTAAeaYjzm6wNMSBW9LwdjDMPNdLhFKWhyHLw8VKnV5hQabL38MZiWLXJnKLVcA4qAKcWE46pF8rzsS",
  "key39": "3D6a3c3GoFJ2bgT7iF41ua2hRNQtsZW2x43aHkpz3zp7uNq26nKLTEjkiW25QZEHtdHHgnG7Bmi6PPdL3nGAWmVK",
  "key40": "46QzD3WqMixxquPc5TVXiPf6RDq1X1ZydcWGeggggdBiGXo3Vabs9ujQUxyBvuK7DMBJGp58BGLhhVwF1C7nRATZ",
  "key41": "314b44LJBiN7NGyGCx8AwUmPicngYqbcALbWwX9yk2bYaja8UavqEMDE6BuXq48rhXsq9GebY6nFVX3mveisJbMY",
  "key42": "3RpHqBFRHj2WWhoJ11sxWTdipzYrrQkLKqWr6XFRVLUdeLGNbnS9BhGqFh2mkuzD8noSVTxKvZL6YVjk4ZTbtZ39",
  "key43": "3E1S28S29rC8qXXKqRyMB8SAPsnot4L61PV3begK1HYtx7DJ8KcJQ4ys2nopTqcCbWRBMyUeEMmnJMx57mC5Kqvc",
  "key44": "65v7jk1MCmD4P96BBxT62Yf5vy6iSvSZeykEwjKrideuruPVEhXHPXepbYW425Z5oqc7CnsdiEBSNypBf2Lz6eud",
  "key45": "4pWBHU1p1UPMKbwvwh13wKgMAjMqVLGy6voacnaY1h2ond4YnJeZoaKZaraFftxxVfVcaGcHb1YW3EdAe2sNQQ7V",
  "key46": "5EgJE3fXGWGLvEof3kBXixQvEFi3TvhoShoiPFsoEByYvtpJv1XAFveBTW2MAh4U6AAABmG1WTc7rYrq9rrnDu1T",
  "key47": "4MYpnLebUc1d685yerBcixMRfXcUJmAoMdWcV7GYbLaQDmf5mRhdfVSuSCM1HD6ge8NBvduj1VMBwvUnDGmGJKEh",
  "key48": "4eU1baaV1FQCWcT8KzsZEWambkcTyQNp3YxnBr1GvKqHdLNT19nxumcna7LFbGvtKfWdy45gPsZvihiaUpXzzugS"
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
