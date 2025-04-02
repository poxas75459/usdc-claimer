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
    "ZwtNa7ozx7aBntBw1kbnpG2uyG9qt29s3aTbQczM5kfMzMNuzr46fTdho91wvuLFLsRACpuA5cC8vgFnVtuLxxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43CWYvwLCWsPEdTSkgB72rFGMNuBFeHKVKBsbpMjY1XwXgjMBEpuSKyAhLne9sTUygdJHgywkcCp1v7YQSZ7eA2h",
  "key1": "3Hh3xiTbn4GRxSrHKPZDCBEismSSy8s1m9Wkbj1nXFiTHsSqvTBgoj9qr2xeaSKoP5MGYKYq9swLUq2bjvSbXcCT",
  "key2": "2iveHP6SGj571dc8HyzfLtXWe9vQMuKmJtJeY8E9TEt1tuB3a9nz5VAPfG46mScMwzSK1rxqZrSAHkA1Lqqa87x5",
  "key3": "3qf1Zib9A9wk8Kwef1zMNvLuSSgsfcAJUjz7UB3sTJ7SejNoj9C41BJteBh6sGMRezuLJ4eaiW6FLuSv2n6XysEW",
  "key4": "nQaZBPePCu1SGpPT656Ug9QkXAeE14L6iicZxipwv4kKaAWntYk91VZccPAUu7ubxxgeHhxMwTcsLQRaLPiDm7E",
  "key5": "5kfPCSUzANXT87kd6A3QM6KfNaPtbXbdJCjHDXToGPnTZ6h9HJoKrDRT75DNbjpNHMCqmwxwu8SbDBH6UgTanLzr",
  "key6": "63nYZkxD8mJ6q4qx59Q8vhhvRaK3bZvXikEJBjAj9qzH2NNUn5pwnR8RovW8ioLbqdTYMos7uer8613jM4dBgooL",
  "key7": "2jjcwrVbaVtSKKnixRC8yHmAecoHagaGRERn3iwq21fnWQ5S2rdv2ZSdrZHDJi9JMEKfRRwn3Q1YLcMDGKujVX93",
  "key8": "4KpzXqFPvxgmLALME185ZNquNSWee6m9assrZMJ8H93a4JtZ2cVBy3SofvLZfnnr5cC5wJBtGCzJjVETXW3xyHMt",
  "key9": "49TWGWfNU4uzjds1NxQ43d4FDStvRycWzCadZ52iRHdScf54d5gHWjkRJSTb1QDnUpMDP5cA3kjvNaBbN3LuafDy",
  "key10": "5H4EnHPgnd64dfy1ECe2NaJqcWJWo5NsgcCfPkBWjFNaGz2GG3R1AuF8tVjAM4uqhHXUtWEjoyoFXHA2VEqV3GsX",
  "key11": "4tobjNdL4CWkh9DXgryyJ128pFf6XP4PXCkKMcJxk4fDGWkZAYuM8HEyP8ybL4dsMdhjjH4p9VwTEVkuczdeFwUf",
  "key12": "5njsCaQwDDZtyv7hWX1VUrKcE1ohvMabfH1zWu6VRQY12VGK47u8urrimeqVgYMQMsyijEwPoH2ej2w949zDHeQN",
  "key13": "3cwyttttWfs7Q35pSNqDjBnPLRoNpyvKJQki3ZhcqyBsst4eQxo6rYxM3jBKNYLzRzvqMFKA9QbAELaa36L5xLgG",
  "key14": "24yWJ6hQLNsvb2fEVEXymURf4jJVxqcXGT6pBeUt2z2i7LkK6YXj79z26CERRWNpxuKyZHKUsDMVkh3rUPJs7Zgi",
  "key15": "2z33wbZz29wJjEv2o6FXd1DD9hBhh3ru2A1o6ZF6RpKfFn6i3wPpFqChb5nKVkpETKSfMGRSkJiNVa3S7o7UsffL",
  "key16": "4EXxoW5mYJYW9EBCvxQ7LAGW2aefgVZ3wLUAW3PH7eh1CC6dexjj45kPLMboU1aTLZAtGd9xfnwUuYNUNdFNSAWV",
  "key17": "2yafGL4SkQMekjbkW3XSUWWrq3LLK1bieqLgwk9Q7zYKBz6N7e6PR3bBWxT585xxwymAFhTQzr5yzZkn9NDEkPUE",
  "key18": "2EoxULjLSAVqRnQwXk3VeAqDXtd8PSUSq5E4aehaS73F3wp5brdY3kpsW532A272HRSh7x528ro9AoFmjJ3un4Ld",
  "key19": "4skmR7uvvR73oK4LF16XZd1RYTvxAhzLLWFFXVA5xapAWANkBD7irFvCVAj7rkPNpJEydZ42DAW1U9Jm5LxvMmk6",
  "key20": "2v6vkEx1hgvAaKSbNxpMYoRFRXvC1uj77hQMsUzxohNtqwrwo1ZxjNFoA7nUZ2BrKwyBLUFJz1gou68VXfaJTSvC",
  "key21": "3rZnDRSkgDDJtbtRqw2Wh9SUjEHp7Z4J3D7RvVmMZBXRCvtw1SVeR3weYknG6QKqYB5ypdCbyBgwtfCRauN2zLWJ",
  "key22": "3HA83vzUAWg8erpZCechCAk2E96XYWi347wP5QcHQM2EnKELtSGUJT8pHDEHJjmo5bcMPKjoztkcn5Kd51KhaWBn",
  "key23": "3BgiiVehnhnYuib3sCPBwxTASuez35eH5bXhtZLe9kaHSV5UXy7iRAzJT1o7CKNkqgZqcXxsauGZTYSossBWypCW",
  "key24": "tpMJiWEsC1FQGYw8v5qmPvav4nuZTNPQudcz8ZhRz7vqujTjhC2PksK72nfu7EnYdGdhkRcChm7y8QkGHDzjxoj",
  "key25": "3TM9GDmT2bfyGYpqLk6AZK9rZKqHg6ucGy6DuL1i7uRGv1myyLeYzsovWFRyJN3KwmBCsn9rQiEXxkmDWhc3tJcK",
  "key26": "3o9X3ems2SAXDcxfvaERccdakHS1dmZ8enANmoRtWqMFPKmAF5rR5GP41PXRLsNiwrWJ5jUA2TWfwpibCNB5Tz3R",
  "key27": "3HbRXLNEMCuTz6PaXoDon8ZZzE55pMQyhkz6aZcgVcFVvuwyoaQBwrWRRGx3bgqWgDnisPhusXfeFPCgyNkAYCDB",
  "key28": "4wyouLNHJWmqYTaB99Lnx37nu9K5h8NcmcbEnL1CqvxdU5qSiFPGWmFqDCJNu5R4WWkk8Y37YNM7zGtXWDTUL5Lf",
  "key29": "24TEtNdt8TLJZR9P9muDnUeGLqVe82e6mg1cEqkvSUVXC6RA5oXGWJtcD2PAj7vSmnq9P8oZzhdT1cMkWbzrsxgV",
  "key30": "5F7TJn4jwXCky5G9tbu1VAjH2FBDW5CT8SSawt4kCsrWQCEE2bRbxzMazvUPNHMoFHprwvt5TZsjiYKr2m6R65HS",
  "key31": "2wvxMPH4cVFn7SzuWLTZ5hPtWxdbbdvf4M3LhfDfLbBfbhRkpQg7zXw2g3VfEMChB6x29zSgpeS2fFq41DYAFJTg",
  "key32": "3VeV69EBK6QgfW5L1C8kfQ6Q7xNvTaFDnCD1DtirrYtdu1UbSLu2zPw7vk4qb4o7GvYH67oai3JxLCJx5PUY7bwN",
  "key33": "4RxSktGGqzoTZrGbBKzH6yoXLXNMZ4JbkyDpQLRJAXp2jgxjk5GVc1LUtBZ2sEHuWf94AQ8nHaMJeYZVpXSuM2E2",
  "key34": "3QGBAEdX7QETUqeXMSiTf6bUeEPEVmHyHRSd4vVAcknE65irt5G7Qo6M7U1GUV9chxvMj83jJjJZczeNzwdT8f2Q",
  "key35": "pCoj6PWzP9fRx9394ja6YhW3UsqdkeVZCtFjaqqE7P31BKh3rxwNsHK3d6NN4wLQHR2cAqkjzvwe3hSbRR3wqr8",
  "key36": "FCLAc86Z9p4xwW9aNkDTTEg6uNsXHs2UPRt5MihUAz699SxFNK3LTAVjNKHez9qLmw4yo7DsAzAR6Fr9thyPBif",
  "key37": "2RBPh7tjKGJjZLsRmec9trJRoNvMMnX5xv3T2XjQvE7naTkfWCiMeoJryYwgjAdbihzpKP8i1jzNZZWYA1dWCP14",
  "key38": "PEjwV1VsoEJXFciZ9FbGW4d7jczHBr9TAKuCD5brJzaCBZaDUaoh5F1DXbPfh5N3Msf7xMz7wZKo2mApNQVLxvu",
  "key39": "DgJNDyWwDiA4A7PjRhwjAVzEzn6Y6NHJvgUexi5RSmFEc4sh1SheDve1SduuHJ8v3JMueHNKrAcSKbF2946SJqQ",
  "key40": "35fXDTEz3cppwkmFt6bC7MsmUrUtFCs9dQRBB5KCtgPth3YwgrBRuv3kM3Y2ySnrj9URpGnb76toxEt6cETf3VUu",
  "key41": "3RdZQdeTq9Hk6Jw6keKfsufkiDTjvxEyw1Di6tXcqWvMNqfmKkdPhfWpM7eTZJYkw9vBHtQda3JsqXVbcDx8vrTo",
  "key42": "36rG7mnrRZMEGBmFxvpkWT29Q2Xb6Y6w3oJ5dzx2fJYuHnWPrWfb6WRA8Bh9u4XmdEg9H5nYqdi5nhYsupUEGpHy"
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
