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
    "3NxokstzgnNGWFKk8e9DAdr2KL9nakzSyagHyavJ7F8RonohQc4XvpbwgdiYDx4hbFVNw1sFXCzHDXGKUHKeUfdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ns617iPGwHg3Bin43SsY4TKEmU1dahQLLvxhP5psYZTdZHrSYdEUTQ9XQN7KQwn6R3iqDw1qLhJ1xJ1SKjuzLS6",
  "key1": "3McxjWyFuU7VW18Z8DfJ1q2eBLF7ZQvo2Yq3iFamDHXPVMQFnf1tYK8Wf2zw1pd4puieuNp8jgbcF11PBGhpVrmz",
  "key2": "hyZx7MJsMAhtn63KtwvqcWgm2LWxNgThEvrKGhf4H16xiCsF7ug5HxrLdh7pgsq5F6FEDaQrcYP7BpkkrFKSf11",
  "key3": "2chucdUwssxermh662fQEK6eLSKihQ3DKLsFsyEoDewfELHymNmE3wuDg2F6ruGkSNiFDk9FgNpqmG2iZLY9UQwA",
  "key4": "3XNtSkNsAER4xbM1twjXDJewjsyoAiypxPKYj2ukLA9GG7wX4W5vhJzgLd376GnBj6G28c9mGQrMSiqGA3gawpcX",
  "key5": "3waog3AVxie1hWKcYaDA3TxQBXqqZacGhecaznbYGN2Fa7UCb8SmBACXJChBLZUR9b8boXaUQySn5JPkDk7Ck7K8",
  "key6": "3tJyZjhszmKCqsAGQQuKysTuNMb9XPAfjRufpUywYP5x9M95dZmU2QWV3mFJd3a7EpTwKYrpGWtjCuxSUf71MZNb",
  "key7": "3sRbTvZj2DbzD7c9q8dFvV1qMBrGpGypZLAaq8PaGv97TzQmiZjNcE3sHf49A7LHECBZpuXAk3huhqwKdbXWPBvC",
  "key8": "2546qSJjEzDGiaz6rcGHprPExfySgiNu31Ca2XnkwGfdefrDqpdz3a2k2CjcJPheVv6MqxjVnJ3TC5vatT2cCW32",
  "key9": "3WzRMJembhA2TheeNZRqZmfAM6P2xzuV5N2751DQUBmeh9PvHE3NVbFbECceRF2xnkDzF1eHe5XnDca3KSSYUF2A",
  "key10": "2cmynJt6cAcyh4GkLVWBL7Lqvw8hBcfavLVPGyUxZe89MmF5PStypdyRbKdHSeEgMFTAP4siurFbNvgF9zDtETCx",
  "key11": "5am2SGKBGVwS7b5Z38nhsuJuHHNQkgyuhaEPned57Fc1iZFC3Zi4TVwouNvaYETcAF8Qr3jUcR1fVNxbznbDFGCy",
  "key12": "DLg4oMF3beCtNZe7jVugq5m4MVhzuTJxMMACVPdFtgHVhq1gL8TZEdn13D4SfcTregyXTnuxYiLDMpftGrUVsYo",
  "key13": "5RVwkxRAf8xgNN2sEnMPnWo6eVkteYTCJqHe641E9x6zf9MJGP5TBHpHkjzG9Dqt6yVhJfCoZY1pmkdukbGjhJdb",
  "key14": "46Zi6TtUavzGEZLT37iifVeCzRJx922wa57XTqvq6F58T6MNLUWixAtL214Vc1JRdhQd25bPSaCQD4Gr5ZEjB9Jd",
  "key15": "58bSLP4MrrjZQMiK1qM9TLJBL9yaox19Z3aRPNp3FNFeuz2bUTu7WSPdp1fA84sshjYmWRk8ucAVCNujMbjjmxp",
  "key16": "2J9bHDcfk91wMpAT3Pe8VnzLo4JJK1LN1WDEXKqJoTMvaeJYiD6aJWDZHb4kGbEqv3Vv9i1q4g1GW9DRiuzRHHfk",
  "key17": "4Ss9mwMYAMkFiWJSAtQ2gfWDBTrbMqzoMJ9RfY5VPjsJ8fUHRQWoKjZixDJD7BHRkDu9UW81A1sypMzvsH1dPHxB",
  "key18": "5Ydnf31LV5EeJQjiBQV8ZTvpqegBkYKtwjTyuHzZ71k1ETcjwe1dzhGdgwLbiv4vCx8UeLvsyNbXiqnXPGzaBVye",
  "key19": "3xhJt6EGRibey7oH2SKEkmERaZPXtXLZZRDD9rN1b8szERXghuCEbRqJGKCS57n6p6ZkboFMdFuWaXxKwtJnGiTT",
  "key20": "iHZcux26h8rgDJ6qrikLxWkBhLHmS6v39rDf8V5XXqdDqzjnhmChCGutwjjuRESv2RZV7zMkermUrQYM9EABwAq",
  "key21": "4MSMZaHBgqNkVimJAtuF6T6cweZErgCiNqkmfLz6GQjomXqABHNY895jMTWuoCmSyjbFGZguM6KSyBMtthi1NHYt",
  "key22": "3BpBoLmiqdKQjSAiNa8WfqZXtM9WVUAoBZJB4vAc1nhpjXrZDHL3hFCXsrXsfQw1bA5T48PJZDHHN67GrrsnfPuD",
  "key23": "TfgT6pgctaTeYd52jB2VWYma7nhXbG5rzDWJbxiGLpE5pjHbVMXTJe5RAshwCsZs4cyxtFbo91yhQYvgYkQQSea",
  "key24": "3MUT4n4oeun9VGxvVgHG36HTsuKmGT7RD29F1QTEsjcCRVEJ4tsmgf5fZ7PzVLmB6MLwwjXxLCEeqVUFZ3WcnDE1",
  "key25": "5FB7HYEj56MiQuZ3dV98rYCeKdXpEUoG3Kxwuw7qvCMJyTm3PgjFm5PBCBnky5GVzBhqdPYvBrba9dopTkxnzX6w",
  "key26": "3HKw6LyyssczvLCU3ajmMnbbcRprn7zC2fjVa1VoNbgXKX52e5mgM9huagEvLLRRW1pPRS4PNefVEHVDqcjt29NZ",
  "key27": "J3EU5vG4n2dhkiuHtpbxarKJHsGEPQyyxe11XwJKAa56ScEECPsz35FCQXGtXUTcu7tkoH7ze1iwScFT7avc3ki",
  "key28": "4VnaUzLy2RbN7We6ZdkSAN7zoZMdDnejj1sV1yLU2YeZzDLAudGC8Fkr8KEoCABGZHmorSaVi4xcEBL6dhfN1w9D",
  "key29": "oWnoFmQhwCkxodADjiCZ2a6qeUKxZndsjNkcNthP61oWFjLyGzZe4Uz1wqxpPAvWESexf4VeUUPS3otpaoPtn17",
  "key30": "594MJqpchbQRmeYzqoepvu6VgDi5imu4DzPK3jVQZi7wefZyXQFjEzkgG3ahhjFR7rSjS8sbR3yQSzQnJoxpZbqZ",
  "key31": "42oD4otu3Ba5YaRk9yrrfM9KBDLGovFbcBkL2mt3paXfGPSXWXveDp8oA4tRrnwUW4Q9ceSgQ8truQ6MSWm6HvUe",
  "key32": "32e2jokhiQFHyG7nWKBniNNECidPfKekvGyjYWVsyzsccnmnRYbTEpwxnqsSFXeCzbumVwvRNrJogooL5tG4Jnf6",
  "key33": "iaFff2orZsipG9r93PoDHwtdmkG6MJFSqn2rBUYVFsWhLqwwtXJiM3xHgWHzXAf833fHuEJPaSHjavdMH3NJW3u",
  "key34": "52oCMyN4DfcxVmUgzHkk94ZpqSVnYVJZ9tveHByeHkVNcT9i6CN8Y9XCDLPTPTjV5S5kJn6GBvmED8CkBnuvxnj4",
  "key35": "HhhiHJxQmQgEkYXonNMuzKNTY9zEgyo4c8amP1uAr4dRvZEpbDWCuT2winmKSagLSs9jbERtEf6RDCaaWh874WQ",
  "key36": "2LYEsQgcUP1g3vcwrf7LpPeG958vkyWesPV5sJ6tTvS4ZyNaR1Xh1EE4YZUzZvQRJUEjyC3odY8UGYtANZNPB8pT",
  "key37": "4DWZbe3ZyyWp3wVoMQhHB3gRUrzC1wYA6Cmyjp9ZZhRTxGR9aoFv5qhKf48AZCJDQD7KfbDfM3DaATEJFiPbtHdH",
  "key38": "S6gk6ss7a5GxK8DTDd2YKJHtXSijwAzzACQp68EfMMgb1hYwpzpqpwvraiQGTtSGmDKxyF4C79CbLDxaRuRWSmg",
  "key39": "2WS1MPWizbqJmZGA46ZYKxsV5gp3XpBYTh8eAE3MYPK7aeorwLdiHw2PwAjEkfVeKXMRkjtJBAgxKFrakCf11Xr4",
  "key40": "5PJRrqfj8vxr6UgUx2A99WdmrTVkUiP3H9Ka6F5hMfhJ9zW8YsN3g2bpbuS6MxdUMeLHtDG9S4224WzJM5fhyToR",
  "key41": "SocLuUKqK7ZnkWzt3TrD5jBs6PKonQ7gPwqfX45e6ZoabHuQbaDnWiLhhEc8BidznHGMqYbjH1PLyG2uLaDJLUw",
  "key42": "4ygXwpN651BsEduAGCZcmB6dCtykTDPh7MdkJsmNbtXC9nPwcDFn9WD1LVdxSDMcGVUXgAyyxmfJkcj2z2TjW42V",
  "key43": "3c4NMCvTtfoFD425Rz2pqwYMiyfmQZtMf3xEb3iBj7LQ4qZeHwU2x6eqDbHu4KVPuNHAspPoyFp9JZ8gdwNSLHYo"
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
