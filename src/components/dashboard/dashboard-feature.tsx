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
    "PTD3pFHHrukvQJwfdRFAGe9R1hfqny49z5LurmJH6CjeD5D6gG5hCKoJ5ZxZKZRWdhtCkgvHuMEuqhXq9aDKYNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cyABFA1sFkNbM2UUgQMQpVPTD2Ew6D9X6ZxEPzjUT4hSyvVxVhZizhqoFHF4887BC1B9fVj4NU1g4s125oDxkjg",
  "key1": "2wXysE2iwb6t31eGu64Wy4A7neNr8evjdMQYVk5RcmohXCFsVSs46jwSdAsFp4wEyyfMagvrwMNeCvrRN5HT7dHA",
  "key2": "2ZyfP8diGobnhU5o6syyKbsa6Gqsr3K7XjKrG5TjmhuKURQMJet8fH1MuMURL8MxziUXJREjoMH6MXf9B4boAjGJ",
  "key3": "vZiMJLDtpPLQ1XtakqgBXEAnJLQE4w1APHtsEqa6U3ssrnmU2CRr3ibbiy97ny3Q2YvNbmpmEw7zZ9jQUHy4ZpL",
  "key4": "2JnNeQ4ShxVqPAZfXVUBbXgHFLBvxSwTU5D4RCYXLq3s6FWVFm7DwjX9YJoHWTDKheoH8kxH5Mh1VFceKJpqUWi3",
  "key5": "2mdDf8mD934v142jC6vU6SVv9a1PRfQ8bQkUDa7c74vU61FTKaMLQpxbQKR1weFSbHK35N8P7xtTmjij3GDTFxUC",
  "key6": "4sHDq8542Ztdpd5gLQEF8eQtSRPuiv9aHHpRV5NPgNcBXZuWaunave51cCvaYNUpSU523JzXq5Bax5gUrCBfZY3R",
  "key7": "43cLuDU9VdQkNoyyAQTZ4rhScD22ngoRLrvTJvUhR7bSEwjQR2mGXTyfJKwDSSNa2Ewu5DEnkctdE6YktDWctkQS",
  "key8": "RfyKtxSihUBuzr1ieypFT8VZQNndLPHrxj1bCp4RxJVjhsymFsmZtWaW2nFkWNARKbfk48gLQMBAhYyQ7vCcrM3",
  "key9": "3A2wdq75eu8JmShQhPBwNDxP4s4zxQ7sYjLycD7H4RBs1kK5jwprsjHjpymKscRUKBbcFsSjq7vJQMM7hsRxe7bS",
  "key10": "3nubHkVBhdd5pmgmwec94PQ3XStwLr7y3s2enAGk343CdGEqkVdgBpsGotkiSosi9s24ArrDakQZBHNtMmb2BqWw",
  "key11": "5ksWmQDxLBfcQ2EZKBCZLvmu7bfyf15bFrmGbAJXQ1xVr3j3fPRspLv8uP9tzrraXGkq9obFVPkvgwXn8FTDPEVy",
  "key12": "3THaWcNXhCBDVkXqjhXisRj4fH7djYjEnWhayx7NTfbVopG1oWu4sGZD8SGHGnv2PVC4rvPw6uyBeyV3TEXwoBCL",
  "key13": "2hJ4Pms4tppG5tZGGtgF1LchytdJuLnCDUV4dL3S42hvDqR6PFsihaFJecTd6X2WvSzSF8Fc4bXRdLNyXn1gzYo4",
  "key14": "4keBkmvduUi9YLy8QknNo1Ad1cUWK2haAiPt36HZFBP9X1zkHFX8F5qdriN5iWnyFqMmUTLsNuxuWWzruLc88Sxu",
  "key15": "SLz29cKJYtHBLiBwuXMCtGQMEuhBoDRBb4xTmBTKCo2oycB3Q8FzZvKhDKZFji8TKsBVw6qJSSXtPQfhgmd6cdY",
  "key16": "3yKjiGLhiTRsiywLV8fSuzEcDBLznQ5EJbBXiSh5J1MkhGgkMcqgwWbfqecMs3xE481Q41ppMacZjoAzdA6yY11r",
  "key17": "4zD9sEKngSvNS4MZ8NYQJtgVLcgzd7BMBEpQ3HML3gaioVPZpMYZpkJUiQFAsx16on67gYkeauFr7dNFT9yWNiaq",
  "key18": "5Ex3MtwzFs4DeX9nTGxSiK6zYupQ96yPL8KytQ5B9JQfefjZrq67EccKPsRMpsJEw2LbZEAce3kDfez9RLRmiZ6",
  "key19": "zuo7KnGawYSjRRv5GK6ANyyXut47nynsDvMEiFJdhDtukTx4Bxx4JyzQX371TEAYSvCFjKTAAv3hq3GJMFWjRds",
  "key20": "2zvdC34NYyZhWFFzpumvaVyRiYBo2FDZZCzftE6vXsxF1t6hFidXzcAHgGEyFoEczXZJNiMxp6mb4vvLHHKz6Pek",
  "key21": "2RYQC2DgP4DoQgNW3tD17J9xCYQ3iL1bsYH5Rp7LPHKHoyp86EbntDh9xEoaVsb3Z2UGJth5NKVyfy4eKBPho2o2",
  "key22": "5LtHgjzcJRneRjVRQBGLtYvRaAtjzrLDc36Rd4CTpjF51FQiBzc7k9T4G9ffrS3X881Q438Mwj9QMGYj28Wi2rxW",
  "key23": "2QkvtSjqCG1eDhSceAyK8G7wsgTY5Pdxn6wHbJsxYJMCZJZef4MWJzHFbyc7rTriu8FccckwnXfAfmFdEMtHL5hB",
  "key24": "5WVefswZ14UhWxNkNGdr1VHuzzZxraorT1imvpCa5MLdpiMFW2xQPnww9HGzY8MFFq6X3ao2xazBf35BMm9F8anV",
  "key25": "34woqKiv8JyzkErdr55C47UzBcJ72wkKrd9q9DwQXKJiWRfDSX5bRnFziz8ZQPpPvwseou33GCi7jVXaeTL8ka5Y",
  "key26": "4PcoUhMHLJa8Cjs119z9ddGWzWTHqJnA4gtkfp1d1sVrPSAuUxJMq93k3DyuGKvrkTRtgHX1sCswTDJxyPZFJwoC",
  "key27": "3XugZtkBWLcvZbyRo7d9fEMEfwHi8XAdN8UBssaNckU42PcgtfNemjTtAn4dP6QZ3UEYHmm58oiGMuPsgD5e8nfs",
  "key28": "4jKJYvZB4qYTRMaioSLFi1711TUWgcX9Bi6RN5WMqn2FwaWd4Xp2HfZoQZkUaZYRR8CfAdLdk69LbU6qpLmX1pV4",
  "key29": "3wjUgxJ9VzuNrVvmMDgesaSRjm6HFGbTztrjXYEMmPEJccmor1njGbpdSq5Pw1rkckGjSdhA9Ja9XYmuXvB57fHQ",
  "key30": "9HziAujqpnyykEUBGrngET8PLx9oWdv2GwWqW5johrSYcbKdnsQtZg9C1mN96egH7iejeyvttmeyHsA6KoJp4QF",
  "key31": "4SgxjQULeRJ7a72MCtL7rAeNnsu18ppqtaat7q8vxa5fypJ1MZyxsUzJbotz4sZjhKH47i7PxEnBctVUxwd9QFKQ",
  "key32": "63xgDGNffCZ8niHJpJtnez54zqS47AEdoYnV6WF9P1bnXyCqpzyLVAEaA4Arahtq4jS9JQQdbqNFhdE7ripZtWSQ"
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
