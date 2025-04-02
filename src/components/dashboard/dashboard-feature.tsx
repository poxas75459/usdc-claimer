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
    "63TthPRSQVrntFgsDw8EgaddfMJJp7og6p4fWYfcKN1L3GAjnQHp8hPzxhsvLvumBbPfntAj3B7ut1mijNajZfwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523kF74bsoBZgga8vRmjb356yUh8iXczAdnJJAiMsLB9e5H99xBkdoHZUNE4vjNT7BuFxCoGBoCBSbqW5KS6M7q1",
  "key1": "3wHCvfYUNqd3hrSFX8XNdyYsDT4T21HCboTJcTDGMFQ8j8NbXRqiYoPdA5rfXKRaompJDETpoJvgMp5fxBGTSg3z",
  "key2": "488bybAuifhso6V5ZnZjf2x9PLG7PzocMNw3E9727tv3YQ5Mw7Q3XWaCWyqhe4ite95YQNkncDUX9VxSQWA8zzyV",
  "key3": "4zcg3WQeDkLdLVSBgv48kgEQZCtee3zmcogiw5bjr4h3XCCnvSVP11oaKDWSHRJCXJFSMptMPyuyoenvQCXS4P5J",
  "key4": "2rhRJCybiJkrmfigyi9s4Lz7MjBxPBRUn5X74FK2gzaeGU3NUGgoeZjm3tmyK6uHKtuDR2M5rKhAx8QWkcezrMmY",
  "key5": "2ayVnqBjSMZZPLUNUsSwfQtrcoeaJo99xrPgNkqDNEZ6MAyYeqje56VtodkUatqd6tBqoTh9XHicDn7CeSNvPzNa",
  "key6": "5hxo93AWQFi75ZPm89wyojNqGVTR1TNdGhPFrvfxWLPhxAdTWL5s6eFbUawvjL751PJRL78qRmgFVVJbMjQPRDLS",
  "key7": "5U13Kw7zrft2Na6EjMR6kQ3q6rfK3gXqsYUtWY4tMa1fbgMbBgTe1aGRqWn2zfU7kfpS2KnizRyAZ3aNAidA14Ay",
  "key8": "3brvRL92MFAhTYQdK1pNSxtTarUP5QoU9kZYPGuspLrUdyVGidthZTgowyixNqVqFdaT42pXuyFGE12ySd1G32Ah",
  "key9": "4DhGQmC1z5EHpyY8avQK83FnxWpWSWMZYG5CrxerR1Wt5Z9kSsUwDwhhRfvEtLk5HQK399macFEdxsHByi5kXDSt",
  "key10": "1ijJAmw3kf1GHvtxYoPox18mSGy6cjVAbQ2zQZYMQWbcv3Q28VzpbPN4hr2NcJsL7Kmu122irumzLdpEyHGfVoa",
  "key11": "HqFwWN9LDoV7QG3FMNh91Y3x9zCeYypMU91wd43StjLQWkNUHt2FhYxkeZqeFxLJEYi94a8k44neTa3C7UiZoML",
  "key12": "2VF9DUtVoFDP8JpC5myffZqWZo33FHq3mQo4n2faLBku4umbb9VCpwTdDcsx3tt1FzqbpZmVZ1hmFJwke3CScaZL",
  "key13": "3RX2CweBdXMxq3Ctsys5x4QvvpKiFtXSTQB6CtQKPEVUPuBAFmdMouGLpSpdPZpuZMGdfaxnFLQDT3SJBpLkmrwq",
  "key14": "3vSqnEH2RJ8ai1frMSi5i21q71adoL2ZSMTepunCnH1mQ3akMFo6Uq1rWZoenLs9rvoZoZuW2YabZ8rBJtyCJfpK",
  "key15": "FgeQmvLGNDS8AWUcbdtSfX6qPZYJjJefFRFErjhMG7o5E6ZMhHaoVoSDMwgT21zz9MAyroY7nZBrDH2ov6cqvxB",
  "key16": "54PH8pGebNyKmU6Buc8xg9Fwu2QUPmckpvS1Xk18KEvVpFNwaNhGfNnP5hnEXqrM7gjfYKGAmpiE3o8z3zJQLJyQ",
  "key17": "yneE5HHsLeXPkdGEj4czAUfJ76vL3Nf1DPn5Sb2ibNq9iBmaBFB4cZyKi4DuGa21J2htcmXYmgcyDkFMwzGYL2s",
  "key18": "4wodvPR1sVAZ8yhNcqCKEuDVZ5o8JW69kmz6FyfVMt3jc76E2tJyxdyUZzzzTTzWrPsGkTszzz4JHxF9r9W4kmod",
  "key19": "7nmf14sQcoGxBz2b4ajDiyvtBn9RJAGrxotXhHLJUqdFHzvZ55vj6fj9se4gWU6DTfToSXepCZ88Ja87tLH3959",
  "key20": "2JXCXSs4RdHtVbyWMCDYw1f6Prgy4o8vGnimNu7HXc6FVJmsKzx9ZxfyyympXiM1NntygHUUdrc7PKwdFpr6tQ1P",
  "key21": "2fuBy7kbiU4UyRYZERxnASKbSRNSpEbEqvNkQH49jv9E3v8yeVLMwNHU3MZYnsQcwPWoauVLqAzEfazDoj3zHkR8",
  "key22": "LgA4M3zExqP8zkwBS88D6SkYGzh7Ysuhf6iTEvuNF16xrAhSQKXpnxHwSefYXL6zLmjwg8wcYBX5eo7Wv1B41md",
  "key23": "4uP7sA5y9S9bwQUVHLDa4wgGfMDv8Asd8sJ66npoMy3DPX1dFGCF3cDR53VGbGLy78ZnBK5Hip46V5KUPS6H3Bw5",
  "key24": "4areHiVNnd45BzPqU63XiEycf3woFPBYsvsmKaEBC1cmxAN6huMJuVmAz2xjSDmWtUWez1PVB9GA5WV15UfLvDqM",
  "key25": "3n1oUeemwcoKSvr5K9hG4u5jopcojcq9SzGdB7MupRm1wBUBMUApB3PLkovL9wegynu9NWRiB9Cn48pSpYhLajtG",
  "key26": "3XAovdtX9eRCd8ZDXLfJuz2pevBrUYE1hV3DzbcU5Zc8asJ2YeeAUsv4fcYoAReqzSeeY5qzSbBDd4HEBqs4oynD",
  "key27": "3x9WidwtMh8FmP2adXc73i3Em6WCrX3XZXrd9dsj9iJ3WcDZigJCAZivhZ29UfUu2BBEPxruHPtC2zuRNfnPWuYs",
  "key28": "5dBPJdCbmKsVA5iML4CX8ML6arvcgwDKMfYBnhM3GVf1XanQ58SHVH4xjScgwtJofoGHm3uiGLupZQtJ5rCgCrWY",
  "key29": "4Ubq6p9w18s3nTtHeBBgPTo3HLfYKnzRSBeLyNsMPmyBiyRsHytzWnUeQN5Y5ETVgYZowRqfRwprTZbGsi9nSjhS",
  "key30": "4itLFvehTiqWutd6tX1NvNrQM5AkmMJ8qTBFwfR4oAhedBKGmBKG4eGdmRRLNLk5CqjC16qh5BUEVj2h43BWoomD"
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
