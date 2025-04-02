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
    "4D8fVRokxa8jBWqHEDnuVoj3mDAqdwGtvGiXFvKyVH2mfc1ajRHe9uqKWBxp19LLCFUT5edhECBRcZXhmuRrgyRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bqm9dPXGSUtXW5weQEd55M2P5LiHkpMBEZT6bpqQ1fchuUY1tdZBT8Sjfsm8c4odcQPo2MEutrqEFXGmvx1rxjM",
  "key1": "VNpaaxgAimmjxM1FCjtQYWCEbxXVd75XcLSC3FgQcjXUySRyAaNYgZmhf3prTv78FyCvF2jymiJa5Kgv7JStgbg",
  "key2": "gGA5Q45fZDqBmRaGzFByvgFFbg7BjW76hjrMCqN6KG85ZUVS2pCxiqnCAfJqGSWvBhV5otVMUpcPLmGyBxjdjxz",
  "key3": "2FpTSrXYwSgpN6jKP54mhS9fv7sENEZUGKxqMaauUm4Y2wJxPgkrG2SCuUkNq8HCPjwpMnA29pab8SY4pYDhVnnf",
  "key4": "2KZrJqrMAHyXKyJmSWRDgEWrbrDqERxNJ8AkHgMCJoRuk4m8THYYXfCJ639accRSSqj2oQVJS2D5e3A7VVEmpSDn",
  "key5": "nN2MtHKBf9FmGqLskddRMnrENdfy7Rz5ziA1DGx8bHS8dpaQpSRFzUAkwkdXGdWKxX42SFxpJfPDj11jSs2P4Bj",
  "key6": "63XLswf9bEANdzgULJ3ruXdgt1XJhhrJL55xSGkueypyjQDNFxxYNNFGqV4SVdGWcZ277dRvdB7j7Gv85Q44BFC",
  "key7": "vEUqM7v5EbemGorWhVjjgnC6jRVRnVMFF8zQu2TaoS6UD7P54qj8jsm3gYNPC6CSFYu7fttavfVUjdc2ic9fFo3",
  "key8": "5udB3Pr7Bno78otoBpEvkWPc3napCHHTg4ENVvo98A1VHzLENYsRCyoxEjUAq1mv7n6t7LLYA2yTTrFnRtyYcA2y",
  "key9": "4J75uXnSoscN2qmF7upNEyhHCtKRKYWF7XtouFqVcmeFteTCMxwZtkFegERyJCXE8pkLFC1t97Z6LcZ9yePGJc1",
  "key10": "NurQHa2eNx5ehz1kxwt6vdvXeAcQAcGJFHAKjfrF7pPEJmoA12fsuGnHme79rz361CdY4MQxqdwp27Us9VrfRw4",
  "key11": "4UtNMXiNNn6X2dU3FUvGwmN1ovUpMKhLXrNyoe9ZaGqSRYvExsrqtPvnJ2h4iNUYjyhaPyCbkbcZhjmVMcJRm3WU",
  "key12": "67cXt8B3p1ZTBgZSVxFmcLdgrHURNtT1jFo2RkaX97biTh9dYPSQrEzraVUa9ePcMAqPJcBLCEiXZ9VyKML8eWRm",
  "key13": "XLf1Rg8qjbuGYzzjxnPQUTmRUvBZYXwWsirfVYFJ82wCi5WJ5kTb9q6dUA2NHSEQE9cQiDsyR3WsQqLk3GhEVr7",
  "key14": "2ppxNL2WnxjYabkrsrcJ6B2NDKJtFreUZkSCP4Tkuqixn7F8R8XBQ2EFod5f3t9Us1N4hK942osFWPUuMA4L3EuV",
  "key15": "sL7Qhy6wfZoFX2mpLvvN3oHauNnGV5bXTtpqN7BXPgmXCX2jgRGMAg96YfrkWvuceSGoMtG4bPETM5edoD6i53K",
  "key16": "5fmXMhi1ZuP6Pv1QjTB1xwP6DDLBFeo7iNB5GcfdeLQdksLW7G4euibpVNEkx6EsqPtHc4xcuiL8Wo3rFD7unJv5",
  "key17": "5Pyugs7gDUozdX8bFtoMGR9shrdYBRxLPovq9yFoUcSzjTGLe1LeVbAyFvbp2DmDV2vrhdZWYoMnfrdFbs5fDjeu",
  "key18": "5da6YmieHrbrZEbp8cULS33FuDzyfSQbw5jXqRh1mdfs2hGHbQSzQje2KoNBTnjxsGCPaMtnMD4CnDxJ5s2gXrtr",
  "key19": "PKGxJia6pJa7EQEjZz28H4gv8jLxAvMhiex6rWnh4xWjcs1dvPpzuz56MLBKWmWw516x8HrXc949w3XK5baFizX",
  "key20": "48LmY8BEcnCr8xDR1ykS8yiPVqQkR6FgVRRU6Fex5NTCpLcnmVrLcksn2MhtZnTe2wCBmduaGp8F2D1ZcneAE1Ji",
  "key21": "3VsfyYHh3CFwux5Df1jeVj3JHg7XmMghkJsAYBF8obSLt4B1q88YQGHm42S8b7ZqegPQDyBr9ZAmVWAURzwoL8qs",
  "key22": "41Sf647oaeL91ucJNJJGJbCyQCHpJLzB5VohHsS7AaYvfWuWZDyVjFxHaGrVjcsECSHTwd6qXGWgvCgPjLR9Pv86",
  "key23": "3TonpENyZDZhDF5q7W4rrZ8NXbZrNMRMh9nk3JLiRdugHyBk4NRNzBmha8Mcugj4DgLA52citHmPB6rG6QDypxE4",
  "key24": "21RN19S3RjsGi5JiR6h9NDz2vTfdjR448Xn6HBG7zAArqxWDjeqndfk7R91KDwX1yzFvW3RFFsRCejDWvBMwt46q",
  "key25": "AuLWZoBgiAqpYYHeZZNtpjmSnztZExZqviR7We8Sj96hgXKfMn3uwWXK3u8QBFusdSkC7Qz2yju6LsKqjuZfDuR",
  "key26": "5PFfYoh91oHzzaiu8m7VuZJASr1MpjBuiodS8p1QPdasprk9Yezptibf4vtPbgQ1JARFAZMETjddToP8hTxSwB3o",
  "key27": "5FZgyb8rnhHSdD2kajQBDBGbwVgCZoARnjY2Wd1u17cockYs1DrTi8rkyHfwKhtTFfhKoUAZbSyshP6Wu3MboaBP",
  "key28": "3aBuh7WwDjjnwgaqCeY9supF9EwAAT7Zweo5MrC2QeJE8ZjGzxytfcH4M6bqFfkcY4AreN6uXdeYgjfowFAin77b",
  "key29": "QKD45MPZXcUQqHuuCSG5hRNSouK545RhVZXrvBBXgahfaHRXj8YCfes3Bdzangxsk95HBNuYhU7WvAWgEGvu1fa",
  "key30": "5dUmEBJi1MvDFRQuZKEMfLD6PvQXvGbwzgJP2iFvDJmzyx1eMBukXLSz5MzAoQjrpvUMNu7WbQBYjZtxAPxmhkmX",
  "key31": "2TTStTb3M5qdrNNpbrmuGG5S9kKcdC5T1KPW7qtVHYdKSoV345yogrU7mWSu3hndcarS2NTNCGYbkS7XFHyKFMwm",
  "key32": "5qgXztFTZD2haVdmaoJhQhZQLBSQN9HCbfa6b87ZTQUb6e3Lg2E6BSRMXwogwfzb7qz6XcPA9Wjip2k7cAhssDQz",
  "key33": "4wpinLNUptc3JE1xMs8R5UkUpgmLXfq3H4eUTYEaox4q4UZshWvab6xtTrPzV34wu3xmChG9Hj2oWacbVrcwCN5h",
  "key34": "3S3Zceqqfz9i2Mg6RXZFu9XSb65JasUGXqUrQTAS6oZxGdPHzmhNJDftPPNRFw36YWphCekMXBcQi4LkL4r8vUuX",
  "key35": "3eBuXbCC9e2goWp5pmEgRHapKxHrMvobzsV1o9UDD8pzofdUM2F8XYumuguLE6aCUz3RmgXHBPTRpEVvNe6MVpvX",
  "key36": "35ZYf1CsL1R2kWCbKZTPj2EpsvzifBP4deLvyCA4MZrunuKP5jup6LzXdwMNR3yL3aidgyYtZr9Zrj3CNLpKzM8",
  "key37": "3T9ddT2fCd88CEG8DaW6mXVHjoozmtCAoEHRDN1WdAMGztN5RivD2uFgqLrrNTEpcPDEbRFpjAd9FAeT22pAskAz",
  "key38": "65UBhF4tvMe2oFa5vhtUxG33KaQEQQttG3Mys3g6wyekyiwF6p4buuSz1RhMXKGToBmFBmqDj5GTWMrfWbGmwpiy"
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
