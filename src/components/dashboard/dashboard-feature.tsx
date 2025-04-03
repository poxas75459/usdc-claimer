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
    "462JtB6UKMrPeDfAkyXN1vvdmj73XsAvm4Ps9RvEER9i2eMz4R4PmjkV4iJUS98rEA3kWRs5SX4uUAM9m9YghSnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRXNfkPvJUqtwa8yTWifwy7dmeaymy7ahqcanWhMYB25XojVae6aJjen99TGFpbxW2BSkJtVABHpriyfHaYr659",
  "key1": "2hB9ui4QXpW9AWR12dbZ3RsFnWQjkXCXBbhVEzaeC5HDTJqiaZXTrFVdEx9XXWKBMXajWK6gpfVhDHmDHTGmFAPb",
  "key2": "Yu5nMw2zz2DUfAPQh5LrrMQigrZg7xuQwF4EU8CeaWhr6kmjVzUKrhwfsj1tQbKn3tsCGkVU7AMTJMgeztSRe4y",
  "key3": "3vrS4B5bNkqQ27UpePuKjkCYtm5gbRdpEXXShiyvwwvksGgwuWmrv4ByGUwX8NsPjcUSS4q9RizeYnuH152ixgAP",
  "key4": "2qCr41n3JKoLn1Y7Sv6JvDU3vgsRqFDtV59dTss7arM6erpjB78CHTNiWWPZ55AWEJ9gRcscUVbheTLeuS6fapKQ",
  "key5": "BGf9SqTpQrMPngrVJ9JDaKoZ9foVh1grrLuq4JM7jtvEA1LnVf61Dp8aPb8y35SAbPBPrR3c1RQVBkDHXeCLDTf",
  "key6": "2HozzdJLTy9r7JMmX6n3M8xjgcThYeWL5ghGfiE57Tv4MZcoEZEVvU77A4tiZaUXM7X7Lu19Lei1BVoSbKJAsExg",
  "key7": "346SgseV98QG8SozLVrsKagky41wgcssynZnQsun92WRE2zA7jTEjrUdS2nqsj1vgKg2f8AvwFXFDhNjzCXt2dAy",
  "key8": "4vXZo37hTLSEgWXcDQQBkxTGiWjQA1XvZXWiBq6Nq4nnhRLtwEsfUX1xsSexAP2Mis5ArdqdBGDNgyJkEwvsXvXv",
  "key9": "63GcdXL9D8s1VZV4SsYhoqNdgbdzcQbA2CYV8Q8Xm4vJJvGVMnSXU66Rce87oc5sUqLfnAKREEH2in66tZQD8w14",
  "key10": "37zu2ykt2viH4MVPtxwHkNw5FB22jdPeQzWKKwhH3f447ke5eyJ9P5zqAtYDugR8JYCZ3yZDhyiAXBv8uX4o8hra",
  "key11": "dqhtjCd9ugtTGxTkQG4YXD7qieHnqJsMkdwQhuBz8BiyHxUysFm1ABRGXoLRkNuuXTjzeFdsWouCPMB45qsrVFu",
  "key12": "VJeBQqLhzZs8fsoczEu1qJcYjrPzGWRNfuTM9pMdadJv6ARBf7wmBue2USym4ZhiTBsbhKiMHMg5WpG5z8xoms8",
  "key13": "DJZGgtorYsETLftbA1nYi3EuxodPo9we8PSBWfYgk3TQnVUQ8D2kLPsHX1FYMcgmKEcGVcqUfnC1SWNgTDN2Kik",
  "key14": "2i5sQmGX5RZ1f2sVRRBdJLkSXBFWY9MuDQ5Poga3aWieRKnf6F5yf2qwKn4S2TRa8bJQHJWY9VJdEjTCWinQA7Xo",
  "key15": "4NZxy5txgKEY7uvTj4hXQPwBMVnNcypawc9fBbzj8TjxG38wPErsebYwwFdZZWGWqbtvnzoS3ZdQDqePwRAPFCPm",
  "key16": "4x6KG26sV7tqsXUh1GTeC37eKtPSWManbWSpzJDErFXWNm1qyGr5cVVGnxs5pkwfzfqDGEjA8RodM1RUtjsLB2uC",
  "key17": "52BMr4bSRty81F3v832oAAtDSAZ6VLi3g8krvixtmAATRAu8QD2EWfxw1Am8Hf54QgB4f91RH4phAEofT4DYcw7J",
  "key18": "YoUx3cVnweWm572J4n3fz1ZZcdauyywMyNPxoWf7ppAdHNDMLxNTMfkSceNyg7sdZkigvz7rpkGkbrntftsgkdz",
  "key19": "3KtZvDj2TnGk7VLajc5Ekzr2QZREv1LVWmoVqadj7LABF5WVWFowA577UKjteJ6KzdMtdvd4PWCgZXceaWFYYcPe",
  "key20": "5BRJRibrhubTcpRqLfEpBxZu3wWN7aqPiYTYh9mbhnfWrDDE8o6MyNEzNuSebre1yeJPSDE2tuXKVQjEDC65Cqp6",
  "key21": "3MCUqM6URxdxQ2ejm1zULi2kRKguDtgLk6fDtbbdNxh2M3o5eWYABng4zVFQMSeb7BFZqbT1dx43ynVc96xqNTCp",
  "key22": "5ex9pF668SN5mbxAH9irfFXfJzCsyfquD6sEcCq4eweJePYHPaXnvYemfnPj3aHucWBGURYiyDF8t5d1WU6WmUPe",
  "key23": "4gNr3PeUh8SBeCzK5tbi7gfECq7Fi5CZ3Ae5qE5DPuhH2XfNRSaCZJX4sBpwWedeuUXo22yHRJqgkDLDccUSjgs1",
  "key24": "5cpidHAiTA72cGCLqQdPaFieC2bj6vmWLyRybLPmQ1U6dtLRPGAoYcp3Z5FjPasC4hdxUna1KUbpiizrHyXAbHPQ",
  "key25": "21SLiKPaq8veqDhb5W56LN8duJnVATsUnb3VsdCVvD44nDzS3zzdQuPf4mE3T86uizRnS9PV73MPzsh9zpMwpETt",
  "key26": "3ejJ5wrw3xgAbhzHQCK9cTcCQFFsRS5GVmzu7cqYhAxk2zpKWe7cqQutA56uvcVt5RqJCgHaBmPb8zmMxqjxEpJ7"
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
