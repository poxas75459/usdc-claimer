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
    "3dsmcgAjtTdfGis7EjkgJYh668H6JE3Di45FQmemuGXdd1Psc78FkQbJVjAdsXcqN5vCuHfowkiXGB48EbKdQ8hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAnwSrnQ3bKZjvnxoX9XpBBmvtdW8CHSYRqXKnJwLaYMeMThjkDMiE3dpKeWQV4ANG2avAkxdcEQrjsc7jQW5Gb",
  "key1": "55R8XQ8pSQt3fhCvWgsVC95LHhshpKqCF8RjqDsARD7Z9s4TeCsX3hQcj4BQwjV5vcxuZQKfi4TmE8SAKrS42Erp",
  "key2": "3ueEv6XvWGfZyfsj4Vh7cMKYXxcyGfP3ubUMWhifn979wD3UJwhXR7wGzu49cshcojmrFFXXr6S3PrdBLejKcC5q",
  "key3": "3We335Eu3BJk6Zsjs57YmeNjM7M4sajLcdXRPJ7RAdZDwoNCZTVe93vQDD4ettxMDhP3zBjL34ZX7JgjFL8FEowk",
  "key4": "5wksY8LqhUGaubRMMFR98rQhnkQVQUFwjEKbG4gJaYtKKCUhhwwe7Un1EjPwaxq9NxsMfQYh5dQdFnMhS2xD73mK",
  "key5": "5ehn9Dk2hXzVVEXmNVbGQp4NXZtQiro2iXrHg3kghdG3ePza97hK4UDfV1jnz9gdane4nG1ct5wAuqX735nzRpUD",
  "key6": "NhjVcTxAChgdcgg3WRJ58CPk45SnYheW6KYrKDVS824SucpXNK63bRU5s9eFnq93Sqa9g1Lnr71M62tF7ocwHhk",
  "key7": "4b5PoHVpJmufF3apYjVe5CJiBWHfGxipQzdnDSVoTD6x9eaWA6q2v5S4Sd5iP7vvCmzEQrA1hNDoRjUZqaLckdoL",
  "key8": "5Sm5sqFjzKiL8UJp6SS19rRvXNS6p57E896TdMHoyJKtHhSKb2gJszzGvEw8PEvk9YGoDx5SVuk8TVQfgjARMRKq",
  "key9": "3SqxajrMeyZNLweAifscZiHare2mHjZ54hCNkoaYpK1CpUa9hTARxHW45gPuF1Ns4XBkXBqqQ3WzC8bF7gmmweBE",
  "key10": "4JwcbAroA6smfHQ6N9u2S6rekUkpCBNQsbtPgDcT8iyjt6FWrfZ7vyNUGFHxKm5b2vurZ2BtJtjopwToNam6gBFU",
  "key11": "5DgWDKYt8YuMqsNBmcFBCfjyX4anq2ZSpz3ZsSuwuuNBUWJpZd6ijCMaMCozWGZQPFXgJMbP7dyBvCg48fG2nZ5i",
  "key12": "5U2B55DmTchSMgZXDDGws4t9EScnxmMFmwjsp1b1MMHrTrud7XF1enbzzJVF4kNSRwjDfDD41EuaRv9o8TA2MRk2",
  "key13": "JK5avUVGQX6uaoWDzzZQCWJcZbxJphvNEkR6qurac5ACWyfZ32sU2sbDDR496nSSNrs7ssWTGW834VcJbMKhx5f",
  "key14": "VdSSfrwCdxcEbzvXjhwj1m8AiReYsaUeCfyvQDCLq6ejw3kJrYWZJqzweamsgM4ztFBNRaJwii1okG6eQNHCTzN",
  "key15": "2S6SCBv914BpY56256upzyyubouYNFnNcYuvFDhNSz4jKxvAiPgfsaR6BhCNNkwLPhGEbjGLisndJUg765sNc2k5",
  "key16": "2nxPGf4pPPq74CCprpFXYk4jH2Gv4jjLCecoZHRvAwaWUeB12TxLXj9MnGurNjn2Su2kvktY9qJbkWcsB8tavDHa",
  "key17": "5icAwQitYJVprvjnbT99jfJQdX4QZrSS8b4Us7kGoVhunkR4EGMtuUwjJk9fS4t9SBkn6ghSqhzJTsDUAwGQVBTT",
  "key18": "3CHcTAHRBz41eREsqvw2uxzy4bHNStXKMdYEL2ai7L1jDi8VVjrBh2xqaHrSkGS73zfz3zDQav67U1KqRYZdtM8K",
  "key19": "Mx8DTUqGsqWH6ehrwhL5Gcp6SR7FtuLe7kVNhi7w6R1EoG4abdAf6n979fjGdDsSVfnpKrN3fLBmoZsquyLd9z4",
  "key20": "Rtdrs98Y2gaM24bi1mCGCkgMsgu5NyDTNZ1V8Qcfyo6hER8buiczNFDroYqSPHV6cRuro8rxmijmspxRQ5ZrX4j",
  "key21": "2Yte9u1ZjF1PDbVaYyVvkDYrBPiw48jUQsEacpD7YMx71PjAs32Vu1bDpAcbS9ZmqWHxAwnT2RhXPVnZksC9oA1X",
  "key22": "ga7AK5aeZSyvXnHHQc9M9s6fRzMaB8rdTHGhQXiaugwdneVz6zt1tjZdQVscECyYeCfjKjqMCuZk18HT8FUT41t",
  "key23": "4BTETAJUEwKm9FamidH7wTg38XeyyfFiGi6H7GJHgTmYR7CmRtpc55i3kvKSZjN21Cv4i3dnr3RVazNWEr4uEUbc",
  "key24": "2Te6Qbs8mL7tey4FK8pEBySZwWy1fndbK8dfS9ae4QTqAkqvJVbAzD1d6h3sHRkSZpurF5TCX8RgcuRYb2V4VN6v",
  "key25": "PWUdW4bmMBpiRsFcaVhS9tr8uxddqQAAC6BoSkuqnG7HVGtT7XNN3XxzmBbTby88NbLXPHaTg7QbyJ9G6QADAeC",
  "key26": "5Rxwz3U82cRHbw3VioAAt6tCjkzjqaNEXPJKqn74YAv5XZDmG698wvLFr5pEbScoDYUMPdjxsYUMq5su4nYxoM6Q",
  "key27": "5j1nAXSivPyf1BW6SkGsv9WmVZgBoXT39Vx7mjSdVuutK4JY6PQD6am1wWFfA1KR1aNGJ89RbaSgpnrZoPcURxxK",
  "key28": "5uf2B4kJZQEVa4WzupLD25hxr7zGrnmfVbzSdiABWUMtLocxPR1mgQwgGbtSipfhSxTy9Cqbkcsw2X8ywEPLxByg",
  "key29": "4EYHV21yBWyMwzShiZzYszMMcA8dYgE72oafY6g8zq6bsXa22kxq1h6F74svbVegtiNZGCwYsFr2DQ2fA9dyqADP",
  "key30": "4VroyoPtFzL2vpkCNBSaVrucWq8h6Tb6owMBQqT2SiqY4TtuceYtimdSMfxMbuRj4YXBWWjGTfZ9uTYR4a7AdgGH",
  "key31": "3Dh36waX8VU4ZcssrcdnQn8SUBDDQ1KwSqfB9CxFXvJ7Eos5pJaJm7G5uoJKB98EBZF9wrJh4ruLe6t21E4b941c",
  "key32": "46ecwfbHthztQ4tQcuJ6brHhks2gYpqz4uwUdJiBixcj18oZM9ssov6T8as5KL6t7Nu3e7Hpi9a4C25g2QVXzZSU",
  "key33": "4XmGZZXtMbL13wA3QgzSh6fJNK8cbdLxSTCf8H42kFJNxr49LAGNuV7KLwHwNh74ULJMb8w66qDVLX13mgyDaUyx",
  "key34": "59GgjeVBQkzMgb4F48RYMotx5yYBqTiXcwz1nDM75VE3yjPs43QS8XgbuVzjavQmLFCL67jLYovpEq9LdquJYzr3",
  "key35": "5RLjCMSnx4YViKJbaX4BFQWTPKdVCV8vpySffxdkfUXtHeEjE5ZtxRTmYgasmtsf7CCKKJWofCGDSKNRhpSVXPcz",
  "key36": "5ueR38nuJgPmU4EChu9UXGiGsgwQmxWoy5vb4fEV8ha6b7zRSPVZipBWf7Tro1BHv6EoEY2ojDuCrWJ73H4YaAUX",
  "key37": "AMLfRqcszbBUGc27vq7oqfbQB8zdQ71DHjimp1z7F99AK3VoA98ezQBaj6TCFmu4nvzZNYigf6MpDm1bKFhznFg",
  "key38": "3quKqNTVwEfeGUCjjgYaWU5m6Jwncwo4F6UfCFqVJthagaUhfqQ8o84BEbR4yJL1A2aHtwnVoqe18Jv5Mr6VYTnF",
  "key39": "4vWGwYGmJh3D19Y5EYDE8EHj9pVFVHsJ9HSqDuXX1H8R2Sjgwd3xcrzJY9t4nTipFDpf8A213xwKaCNdT76RE6G1",
  "key40": "2qTdaP13rq1CqibhkzubGaid1ipmWmZb2kiFQJGwgB2LsEVrFD5DAAEokdUrRHyFxtofiLHx3YzfykRNKzLv8zM9",
  "key41": "67dLfbuFYSphQf1NTbXcAXcU9dU8XFgUFeggpdhC3inDULaGYgetogiujNjXpm1EgbLSbjKgwPLxGsNUdfPcAwA",
  "key42": "uH7WUPEJqrZJWPm1q1xnW25gXXJ8cwJBC8w99bRbZ6Xeg56TBEQ9hfqTMrAXfDNCEGoD82rwmRgxFPqbDz893YC",
  "key43": "2Sx3SQ8bKa1oPDytD3UodmjvEeShCpRh9yeX1ygoJ9Ghuw4KJUDB3WGosnsRfsmKgsjtXmPbPAs8eHfexvmStMzQ"
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
