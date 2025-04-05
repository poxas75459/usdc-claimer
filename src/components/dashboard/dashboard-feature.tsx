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
    "3c1ivT5wAm7WQd1YacPWpLntC6BWFqKDctK4UVrxYu276j6awqV8xWy66CbaR4fUp42h9YDf5K93DV32DpqDpKbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJTKkddQuSBhjXj4s1UgiKs45Wq7pAnBrFXA7fWKg42xccigTutZY5XYuq6queAGJUfG4mK29svPEomE4Qfas6b",
  "key1": "3Rb4FQx7DG1hY4Ee7j5JFjxCcciindohGiq7ijYY4yBYCj1ty81wKJapdA3PfQGj4yEHzut8o3XEZTbTned1dPME",
  "key2": "FbrDYDCAbNZbk7H2yFFv69uUoD9pEXQNdnT82HpFFJswQRGP8kAJ7j96YhW99jQhEqjTnhXuPFisfRDvcLoYZhr",
  "key3": "6zv7w8aTL3mCwtuRdq2KkYAFivxRfZ7GuKCqRB89Ny311Sj6PLhzXXB9QfkdeM5Jm6FWx4fdMfjTaBNo4KYriwS",
  "key4": "4EdhKgUEdVssXEmUMFmMcKxrT4ehC7WNSf8mnsJWgyh58KEWKqNxTkea14pjYer3pJuyM91kfX4PRXeXoMSbR5NW",
  "key5": "2iSeTUroE17wLRG5J8vLDBY918HS8UYc6eHHJNoC1MCLnaakQ2K9NmpCW6Ci1pYMAtZq5AD9WEDG68oHZHAiEn46",
  "key6": "63fXNupT2RrnMLoMbeu2cnf1BPpWvmFGsqw27rrEqsyhTRAnQkxbLPcDCehGqcZZB6kfEuqz92vgukcESPASKE1Q",
  "key7": "39SjcLNJj1ydJe58sBZQu4eVMb1MovHXfnUuEmudHUH95opwvhQaej3catrMyN5qH5yiFr6wiGvDZyTo677rUTxq",
  "key8": "wme5UysDhgGpU9GtW5NmvDpPvcuC9WWDssLMEDaPEwBqgjCCihZRc4bxvB9MWFxoCP6uwwgdLyLtfgmYqejcRBh",
  "key9": "34sKkMKnJjh3izDt2jScgo6FxpD17mdgbsGzctFHCiYqgTY8FxokNCi5wypcVCJXgJLLvZVi5JFxhvoBUB7f34L3",
  "key10": "3qk1vosowUTH7dPyAiRjpfUuQgifgfsvgeNCRbfG982avZmNJS9X5z9igxD6sKBcRTB4yx6JBRZnDcYPznNswYzY",
  "key11": "5VnnQyrXV13TgBpZ5wmSorkrr7MBLqL4HQ2bV1LP7NaqmmWfn6nAqdAmb39dAPDSv8ts9THiSA1fWsWBCSLTd1gv",
  "key12": "5APTR5Bu6MSPXDPBXd9Lmwa5j6eLH8e8pKBwFcNorTVWKXd3b6gF1S85HXXLPM9yMYXYEZGgD1kfF2EBcDwZgmkY",
  "key13": "33pidQoDXyusQXqsKapChRDG7DDhDoJhwfBCqAZU46gxXKK4r6Px2FHEzp6RdWAt24CHAAab7hvdjR7nGmaLnbeh",
  "key14": "5Wk9Tod5nZ4m9jsNThiHkY9NzvCktGFtmGLWGwWCX9vV2qaDemsUUpKoe18apESiF1gvw5B2eiW5cyJ4vnRvpi2s",
  "key15": "3ZH97dEig8raMeLqQoj92Em1s5UoyK3trPDAToUT7WB7M1cyG81Evn3DRQ6Kraxi97FjC4WQDefogFMPHHKfMbdL",
  "key16": "2REkn38ELwVhvydYPwaZjpYJGAt7x9naLRNMEsVmiJBZsKjDusf2RZmdoFXq3yQ8sfqa7R8PNdxvuqAfi86AEEuB",
  "key17": "4YoJtZZWVzMLFGTxGanWDxgmVffMuqCMyG3NhKCR8C5WndxEDBuqFFtztXGQX6JKzC2hKGfJTFxPBVAp1ccLWx2z",
  "key18": "UrcYuc9pyfDAckiGMhABGLmh4NuAPqoexGpNXcFKET1z72g3oEmvHHt6gommutRsz1Q8R1z59aNhBnGwTbxDz6A",
  "key19": "3ksAqLmtuzzZxRfAX6FXhHjPG1ZATV5aE65whZ4K15SuqVH1nGJmK9AFoBVbNBsUjmNXkyDVoupLmAVPTSQJr17i",
  "key20": "4nHkLggMMBdgNG2mM6uVpqAAAYjEjv2FbvTYVWWd2xxAMs1QoKgfDomR9mUjohcJpvhYpDhTGcWtpm9YesRW3PKA",
  "key21": "yZJavXFW53Fd1qWwqqpgn7asmRqPzJ7RbRiqARZzbfQX8bukr64nwFjfKqqAMAEwx4MDE1PRamAuPvcpntoRuma",
  "key22": "5gCEtNCEk2i6ji8YJmW9wLrTXLFt347fhgdkrkGQthg2SKdazVEFjKAwaEmJUePpaULx9NN3Y1gkfaov7LkQ4Qpq",
  "key23": "5FU83GtMSkyR79HiBVqs2vzNvokGdy2gBfQKovGUdkbRprAsog6kjwewaY1jyk4o4CTPkrRPAc2YTFErgAb6Vi8p",
  "key24": "2ECn5jPvUUfo4GdNm5Qbv1K5uq6LWs33GL62siCJYWTZcmkbqbs6unVBAQjcU5ftofzGPqyrKE21bsLqry28Tey3",
  "key25": "36zbZBjhemQoK5odND3K4VETA8MP4hzinGaCmct6guAWpF5wVBsaMvbaHpvPuJoEzwQmVdzTc1RacKu7E2nVuhaG",
  "key26": "296p1q6njHYCJzpcXZSwT4AMNYrot58f3acZx3Nj1tPfsYaMFoGoEPdmzJw6mwkkHzyzCvPLD5JSjd7vgPyEXsks",
  "key27": "HzkuabtSeJspZHNX1rQMdbModWoJAfZ96NjhyCc518ZZwCm348uRs7c8ekRKJthHBanMVynSa4N7yTPH37S4kXV",
  "key28": "3Nf63TfUVqhvUdrTAuHBp5W368rq6BKzfXqZaMNazynBuK8QTVDhjHsq4X6wdSBn2diu4Qj4uFZG9397XSaPgpHZ",
  "key29": "3EhE6hnaAitWMBEXZ4beP7BTx22RvQeSN1G5nxNLJZo86kzyREhYT6WtF3iKc1u92GhvuqVp8ooMtghs7KkAQQk",
  "key30": "2aYwSBe8XSW9XsWz5isyFug7GmEnxpS48ru5mKRC6Zm3HswPvibtHXzzLauJUSowrJEKmLxeJR7iSvJqBeWgFMcu",
  "key31": "3CnnacG4WtvgZRVBwhSpBhPLRjN3MiqcXmShVrBnfmCJi18DKSzAzp6ZtyF1EnAoppBgbNerr7J4g2ybBP4YGyue",
  "key32": "3FH3EdhEXUMjbd56GrFwYjGAc6YpxRUXw9AU1psARLqaMXaBmww7hee1chaCF7QujGhj9afKTZD8JxdbX9kyhV1M"
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
