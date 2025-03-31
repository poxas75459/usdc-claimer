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
    "546bB6rK9TK9hdsKKFCMQJqRUHkYJypC9h71D7FCUUEjU36pWqePwnWMfvXYvCb1HRypkcbA8cCp3JuKYe8rFZeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8j6vaU4nU8vZHUQUn1Mb7XdFfcPK4wD2X5Yce4MZzQw4AHpZcyemSDM3DiweZPMV3phrtDLQvd1gHmehZpfuXd",
  "key1": "22HN8pkQASAhFkcevVb6dsodZ4pZLbo2cVGX34Jf8iNVfbReP6KffWWzbFj89qmYs7TdCsqQyJShSJiLMec5fTBD",
  "key2": "563aqZXgTNJg3riMrnKw9fXbK6xerXipybZ3VuaMHyf2MvzbF2KvBKcDE48p9VMwV79iBgFjVE478wnb2frzU58g",
  "key3": "2G7rQLRSqsKy7GrZTrYqSxxfpcFxu7Jnu64qRXq39tMXEghPKnL1LbKKBbSBrKx8u54jMBq6Qq3nJeaRN5aQHTyX",
  "key4": "bPAuP2wrA7wdEQmc9Nn1xbPodaR6FdJNYKo7cHRAdoGV8b5bHsHurRrT5TV4cYbgHihcRe2ALt9PiAkYfNGhpBd",
  "key5": "5AZEjpgNP1kjFddUSQL54qgetcZexp3wGyKeZxzFSDnErrJF6cnzGan8chAT6fp1iGzqudCcjg6WMV63gVdMzgw8",
  "key6": "rivXRMUXFHYkoYE5AdDcCUjEeW6Q22m5swGuA1r6gLFWHVYDhvkycLiF1QoHUYWgHfU9XLnFQUKeifAfEfb8cBU",
  "key7": "476rKvGvX4TgUp7bjLzttizjYkJA72RMvuuzb6yzMEkgWXczxDTT6bRWaEosJd7hsHqJs1pPcrejgQAZ3riv94hJ",
  "key8": "cXs1xsjDGSKBthGcKeoh5aae7SCGGJjeRubanVEjqZ69kTGp2kGUicZkMVdLu44iqTqN6PVczyYX5Q6CCQokdug",
  "key9": "2z41s24HWPGjSP4Yh8r6EzgzKcKXKQ6ePkmuNEAkfwtW1PuNgy6xgZVWtxwxnFFD7wj4LBzZZ5KZ54xwTyq2KYXD",
  "key10": "42FJmsuMwPisucTTBxR6frdsd5ZDBqz1YJa5P1jz9aEniccmPiKEWrY8MDN8oAkhuuiRUXEjnkiTK3zoqQD7VEfy",
  "key11": "2gcLGrpCSvrpBx6dkRBNKMkfdp7884MaM1vbACKCPRBryynN9nSHs6NFS2CKT8NE3qJmnadM6hhUoqQCFUtuWuWH",
  "key12": "wmDTcKaTJhX3gGuLrBdQQZqG6fTz9EScHrfYEeiq7nNbXtB9kvWNn1p3Tf5ctpyW1Be3tJXL6xPnErXeyBZAHbo",
  "key13": "ukwWJtTyLNmRJ3pptAhic9nUfWbinXMbh5pNYsjUGufPMLkngd9wyPjqeAHgQRRqLmLs6aPbeH9Pi3qmGnjwzv4",
  "key14": "5D8zYAWZXdsR677SxwEVrrmfDWRk5J76kVjjVxJAA5ftmDwLpuBMeSTnwdMFUHMgwuBpnoPRYTqXqZkh8n32ER7s",
  "key15": "4MiQbvjBNL8tx5ppYVoySSsXk25noi4LCQMyvHimqAFKtrNRuALPiyKTFdj48FVgBSqVS8RaTwcLBhoAk82dtnhN",
  "key16": "45s6MP9mBxPRcbDuogjjkUVaZN9m27AEN3XFmy4GCEqmSzPoVTvXGxyNUGm2J3oLzsbZZCaKfBWr5x4NnQ57Chc4",
  "key17": "3eWR5TycSUDvstBWsbZ6Gnn57s9MKKxhvVy8wbkBk3yz8t2KEC4XVk22Yoojiq9beFRSBUHJwqqFnTdEfvF6yx2q",
  "key18": "5xuEMgroFbBrs1qZscQu2RbfVpD8v8mDi7Lvpm9SmUfGFVwvhPStbsLHFm5Hw28Nqjq3ztjVXaq8UGTpMUZtan1L",
  "key19": "2Pj1bCLrFBgvVGE822a3k5ppxcswN5p6DLFtuRfpVex2ff3UKrGiAeW2Aj6bye8jv4K3rQWExJjPvD1SYj5wJTnP",
  "key20": "5vXnao76TABxnbaZ75bLN7JbrGCveEeLvKMzDC6vB1yNaHcCZqw1HcqqZkS3fmCTkCjqjpSyi2EAE6sGKjKdRn1c",
  "key21": "2jSGj41tjQozgwRrb659a751XNJfx9nPNS2gUac5innxdKMhTLWDBSn8pcPXKpRBLembc123vSMVqwBDvpR9pdWw",
  "key22": "4t31auz3QxG3RLtopzeigow3wdULtozRpATTCRzWa8853tJSfaNHTSRRZCzzbhMLvC4GL3fKSazjiQKY8bJBYiwR",
  "key23": "2Bu6jGmpLeY29yTiWJMqpb8ai3UCztZKtxYHM76zqirkb72LdRDYoKCbS6xWG5jngGVaFQPsrdr9d1xU53qZVdPk",
  "key24": "c8Zz4JNbi23v47dPvbsp81ApdyQNJGkA77FwPDtAZSMX5dN7WeuWCZGYLiEg6oY3ehCphGk3cDLooyxQxNqUTC7",
  "key25": "627d1bbfHGJgh83RiFA2mdSrLC4t5rFD2LGWkeN3goThjUHscTQ7sXHV8Mn2WcoFrWHfyHYa1a55QuUSJZzD7NiS",
  "key26": "5eGzPqQB4VXLRA1f7jqkZjQ7xU8CNHwAMcnUmpQUB6gx5gC3E77FnRKfgJ8gWdiLg9kHtSvoy4sJkkc3yPG5DmAs",
  "key27": "3zD5smeFoyatL7kNTzAZyUNJGSaM6nFMFDtvypWwQ7996qGtJDshpVuKsTGy46wMQTCTf5cobmDWWYbn2WRHg6eA",
  "key28": "5gqq1tUzcwad9pbNaUq4kPzp3YbAJuuA9EiQPufHcJPFSz8rsggzFBCoGMvdQT3cXVycCR26Q9AFQiwXessLR1uC",
  "key29": "d2P75KBhJZbk5UpDDkYexYTs7DkVWqp3TUQbLMtr9zaQ2UL7C8JCxAGmpcSxUATW3CuD7TE3MseNwge699QL321",
  "key30": "5eJzwRuSecERhbQAbkfKDdawgPoBJHAb5HnCWuijoJhUsTGKoZbxUWPFaDjV46rNLjDx32xbg9wf8SMpSAEtHMCM",
  "key31": "2LYdeUrpTVtMfqhhwj453QU6KCVijXkPxt5q7xZMDKUAsvxfk31upKybhbnq1g8swfQKqjwR3SsmqtYkM9XC3urE",
  "key32": "4izQMsD9ybTAbwJMj5wMKgBC4e21dxxKZithQZwNAFZnyXUFTR2f51b14fzzkfKpiJdpVy9SFf9mUk7doZnt9xnZ",
  "key33": "2qKohZFAcCVu5MNYm6YortTUa2KZwPLLXLhwFPLTUFege1zi1dZneJVXbobxNnJy85WS1SzbSS95E9gLdZENFPDT",
  "key34": "4BVoLCCXVTM7oGRczzhHMegH5BqdF27SQyXGWywHJ5QSdtN1CSAZHEgyhkHT14bQRKxHzLhyDsiJxQFEw8hAciRo",
  "key35": "5vvihn1KieRndP7hs98gX3qQZgn1dM4pWL7H8MnorGzncDdTe7FErgrpFifoevbgkqifQcJbBprm6tpNja25toJP",
  "key36": "2R1YYvQSYakDN35Yh1u9cxuce7T2Tyt5gfnMRD7LAfd91wgaGHHiDLWJ4y6xH9siQtAGQavMDftsFJ9HMeYRtqd4",
  "key37": "2XfiYFjBhtrjdtm5ujVxuRV2xNzzaD8XrXpWERaGGz2kizAb9AecnZ47Ban4YtavSBKP1ax6iGCnGjtnZ3P6A7W1",
  "key38": "5ckP6ahexLxE81crvn7hKSbDVABbJnuxaE8DfPNtLdfv2XucQPB3EwUR6Dm18kaHnPvqziWscemHLmTcDngyW8Yh",
  "key39": "3mb8zSYNtHPWozGeJGsYZ1PLAMFTj2g7otYVjyMtDThoN9d9aU2VmqJUeP5KHKYC8fpQvDEhfR4VhPgsdVzTgava",
  "key40": "24jCsdWPbHLs3znLCcMVoBgikqFDk3QL7im2XY6N7imZ2nj2B5himw3oGnFT9ax6qS1mCAf8qZJihVhz5hiE29Me",
  "key41": "4EQW2tsKiP427p4ofGwPinnvJKYmLAdTEE2BbDZAYXHH4FsQRpCtMt6qGmBRrh316EMygNwVEm9zT1smksLt6vSr",
  "key42": "2gSxyHNMT1VoNhxmBVcwzJDmwsLrRTwEzZ4ThGs1NWmd6iA9PinqRKLYRcvZkVDjY1qKatfXDx45ZcRJdMm6io59",
  "key43": "4ydvApFUrR1KySd7MXZVq4uy9rNhaHyYHhyJG4dqFcu17XW5DQw5qHM3ZfgD8EGd6kDhFJvHgYGYE4bGcPvkeALN",
  "key44": "2beTh3NCgjyvXY64MRVEQW3Fwv1soq5BpTrwhQptoa3YvoDnQDaAyeDwaJRnfAsB2BnwSXaKs95BU4kJtCyUB7x",
  "key45": "5sAuYtcssg3GCxZGkKJrZGx7AUD6RVhuJgEheF9aJkT4eAhw465EvXFowHiFnwKbZMXgcxPN9kYi1V6dwBku9XP7",
  "key46": "2CZcUH2Untp2Kpt65bCsdWyYDmRqGzb8yUvHwKPiVyWVeDfmRrUuify6jdUx7zEvqVg7b5fC9s5ksC7JaNJ77M2X"
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
