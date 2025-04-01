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
    "2afsGzUe6SWJCs5MZNKL39DDwigZJTEMigMFsndZGd3QnbopzFdQGL8Cd78eBxzcTYzn9wCttPsEwjTxEY5N8YgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PkjQcFAYkADhtxAudY5eTevwZwYj9xpgiZepPKUEy9KjkQPszu5Vq3AtaaVeqbaD9U8PwoKQXswzeTN62McppDn",
  "key1": "4NKruomf3gxfp1RWbo1rERsvyHpAGP6uh9xcHEmnbvYcrPAvWfSs6G33evHv4UedPwnCsFsj2s5nRrYZxBBEeVov",
  "key2": "3RAv7q6aoaKaxg44Wii5ESrK5F9KnpLSwXGPWYtPv4obRWBmE7HLDhTcMso6hrjqpJjbrEbQ8h9U3RUm2BUtxENk",
  "key3": "2FSwynCuqDjx2pGUFAhvFfY7ebQjVC2r7o7qNgCTHQL6Ez8RGqiSaQbNCqzNc2WSUmHKpbwXqhuhLJMiSPci7BBm",
  "key4": "2ekJZpFB18GsymNJxCYNUJ7g3Q5dJ1fPxBwFoUkiUNa7pUcKwipsAiLZii4Sy4qorn7ZG8GVQbNmFhUBbpqyY8zy",
  "key5": "2TLgGzKabPEeCbrq16rB9xvhAvWK4GzND6s6YhWa8wrgrw1N9uZbwPMdmYHuR3jbS4uRDZhCT4oorV69LR1KndZ6",
  "key6": "4zu5SHVAEatRCw4PyRosrkd4q5jEVzRXJUuhhNwc6XBJ6gV2s8C6BCTRpcjxaBsTJieKfdMw32J9syQ1d6c86RGp",
  "key7": "4g8egmsC48wY3T6qPLu3KFFNDHRmFtLkN98QFLGhbPDWZnc48TNkZ8BRSfRsMVmiPmtDsEPeNJmjiPJ4XyKsytWo",
  "key8": "4V3yv4eV8Cffd8HYGuxJdNGPeyfrZ6mfLwVBEfgig96ZmQVtB675Et5ULusNod7RXNjppX4pM4oU1Yab34jC4X6c",
  "key9": "485BA8pwiRmNNVZvhwfg3Pgchb5FULY8XwcS4tCDZzof8fw8bkESKbYoBnWB4iNGWXdf93tcWuuKuth1YcyG4QbY",
  "key10": "57HsmGUw3CucLXMTUp7ua8Rhk86DKQYEZg7yR49qZbCiYAWkiA1PH5rwg2UTuUoehQJjQUgN5uxssmz14XLbNT9h",
  "key11": "LFKgW6Ka3kZgFUu6L2467pLDVxezbBnxuoA3KpajWv426om6f9NKSd8SeY3rZWmnWjYtaVVWDHoYnbH1cpC4ogh",
  "key12": "X1F46FeHZxqgRrbP46UnjUptj38AXHoXJE9fxfmze6qgSLs3pRhFKkKAeNvaxUxsXqf3S2sHUeDrcvUffkKde7B",
  "key13": "VVmSCAQMsdtr889TuB6f9ppABayZLeyMZ8iEtne5on7h7eMR6vey5KsQv6mshiYuemDTGDDLi1Sx6jd36WpVCYH",
  "key14": "3JFXzwhwvLVF5fUNAZ89hQZNDzHZxbQf1VVevopnda15b1qwEtBqA4Miuzsaky3iHyMgFgfSKYXzvHR1CJkJmJTp",
  "key15": "5zUtBNFdQtbnndju25d1UYCdVX3RyJfbb3MdNP3HTHdMDtvQcm3DLJNoDN4v2U6sbD4RNanHGpXNcdJqWUdD8kmz",
  "key16": "4MdsgHTZEDkSVdcxD9CD8CLUuSJ3ujiqKpyqhemx6bDarC6RH2h976zPCzNLt3RVaEqGCCqEwWZvYGYAq942M6w5",
  "key17": "4FLsPwqhf7yFvVAH6Up8NoQkLTHbzvuNqZnXVvsASTfYsaYLEZukZqPMvhi4UEytm7Dps55UiswM7Y7e47kYLsJW",
  "key18": "67KVf351Zro9MD9uY3E3qk9tJSib75ajZToF3FoWYtVumNw3562HWhiB1o17DFE3Tq17EDMzVX3AqyVw8JeXc6S",
  "key19": "iayg96RmqzynGthALUhcirXoX4yi8HQ6Zfa95A45rXMwk2yHjfsaAiJqmmTe4cZYEojnL7euVwYicyqMzowN6Mx",
  "key20": "jDxnWrxnsu3khdrTZZ28gsozjsJoNshRWSTd7q6fmiQYk2C98PNtwaykq1GtQVNwnkqRDzoxA1aG1AsjhW4yS8e",
  "key21": "63ENyeC8c2bEbANrQ26gNN9ootnyLvfYXbYtVh22qTky8o5jWWffNXKoT2WDes2KYbqyUZff5sAFHi3D15YHWe96",
  "key22": "27JN1TfvbHK3Zv6yGfNLuQxp9352bmwXLtju7AaVY2dArYWc144XCPfCgNALcwi7MJynzS8sDx8ZKoTPfwg9txb8",
  "key23": "4ZKSPVTgPP1cneFZ8UDKz5stEN3WGkyzbRZCPjSrJo1LykYxptBSYo97qYL4jcvZWKuFe8X46wYF1Tz44xtpm8oR",
  "key24": "2R8exXnuVd87X9z4g7p3sJMCRWLxnLb5Cki3CCpYJLJDkK9SnNs4gxaDU9ePSa7jQvLHKX9tRTJis3RNS6xVoyp",
  "key25": "5sZQitYnPTVmLPoC8SfegBhUsx7CgkcRXKEmdg5VeSRnTeriQYrbHATZtYev9oXTQMA6GCvjyUfjHQWhg2ewMi1s",
  "key26": "YFQVfvPWPPnHSAS4cUCmfz2CH6ym2iaVbj7iBXwKUU1gJAqo85WxuWpu2dgs3XfFrCJnvUJgXDF3CRQnb2r5V9H",
  "key27": "di8XHcDnRBHeGfK9yuLu13bpuZTmmwA8tKfnnGgo18Q3yF55qGAY9dDt42dChQPTSdR9EtmcC8qNX3tZsRB4ZDr",
  "key28": "5HJxNrX74b3gRDZovuqciGiodCjHDaNAbL3AnZ2D7EpyUGSZk7898GbR3VH6dTYZ2AjJ82CVgTfVZhdAcHk6EPTN",
  "key29": "5uuXR2FjgZHzTCEtWdHgGDMf2WQJ11UEoEHQju2YNtaGVGTAsQwKFcBmNEADaWmg9CYyvnPpc4hCQjARuw5nTrsv",
  "key30": "3NqYZZHq8HmgdcrxQ6FcGahjSL1nxpsTe8Qsk61gWKLjv677soRHksTdEBdbhZnsQNh5pTqgdmvtRsPXgNDKNFXE",
  "key31": "3PGAmBMLh5QCqCrT4eVRqTm3k4iJuRdcSQZusjFpqiRd1WkiRXyVRjEGvskYHnRNMYR3ZwxntwYsGDxBa29A2jqq",
  "key32": "3CDf5a3ctg9cBdprCX1xw4SMQmNgzJwGkJxHjgBZuiPjVpShvDH1wqJS24SCY458fHhPsue14pdx3dCq3kSs4Yij",
  "key33": "3RzXcs6WHCiSQKy1Rh5HJCFQJXDDS3efnHrjd1WtGFjZY3Y3MRNz58PRpYvgx6hKtNLwyUpfNdPQz7nt3bcKvyAr",
  "key34": "EXuSdJkxBzC5gkw7pqV9v4FYYUPzCpg3Ly47fJMa1zGmQQJxheykLcDXyxAMgux1fLVTEDGmaVUkdhkeoKh6cy5",
  "key35": "5Zpfrexz46dcW1aNmZn1FCUMhEqQsRNC8nPoEcLAKL2EDuPZTWyThKyfaZBNK9qci3BUxeS3GqPhTDyRqxan8JnG",
  "key36": "3q88ZPz2P7dboWZnZzN5bhgtiGzWUr3iKeb2V9DCPGKqjvz96hpEdWgf8UUphRKDbMFs1PtxvLjKx2MC2uHaKvte",
  "key37": "5YUhEF9zUE3bEG22Y8fazaRu1H2keNQBVhuqK1VZnf4VDxktx4NCRkeLFXjhYkJXJahQmAB4v1N2ZFnxDERhU8CB",
  "key38": "5typAsZM8TqzvhRPkq5fpqmV6b8uH4eVtSyuQ7M9EKS4AKVzH7sedvuUtBkpzPb6fhq6YBiXJy584NVWF5VkyGyy",
  "key39": "3hXDfTweTfp6xBd8SqrkQELb3EvoZcuBSRLN25kgMTW6vQti1atE6GCWE7Fc1zPhQMEkk82rud9eaZESfVcUhLkM",
  "key40": "44fWrPG3H8EwA6K68dRy88Fov1iepX2nxihW4JQt6cjzSEBa8EitnNcAaM2ozZ8uX2VpZcgG9i2FST464fPoXPat",
  "key41": "pp3kSEVRpF5nqbf6yviVsXatKJGRV1JPk862gwxN6uiZFeR6J6r3FYKSh7kkvHCNGUoP4owpXjohJjWhkCndEsV"
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
