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
    "2waopKWxL48fEYjufvzLt8KLg4KgBbdKc1CMVGJdpJCVbTLpKnS6LkuNXUT7LppK3VdfvnU2vjJq19EpfWYjf6c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEdDfjq17Fg83szCUNcrQ51AadScUngStEgD4sEJXn1RYgs5e9qrwNCSFuHJMzVE1SnATyywmsE5c7XmFXAdo8J",
  "key1": "5Ne9sjJ97vZvZ1UA24dTz1AedVNQpkFBa3gyJQRSzYdGucKUiDiB7xBxpTLRNZgmzCTbyNT5Ee9rDSNvanWQyjqQ",
  "key2": "678iEPQEQrXnYneLurPdqrgtFZWdNNRhyD3kJ4hp9j4mZB4Z1zDG9vUyUqzHzC8PnNobXE8tHVUULb4d5dVKqR6j",
  "key3": "4vMMYnPxgKbF9cnH5f1LymYVUpAqSKC1fL7UHaLhvnTeiCBkKy53osQKQd94ZkHtmseScrk5NFfTWdbAuKPWZa3A",
  "key4": "5eHN8kuubDbJuK4kK7779FimM7CaBqkBFJTCUM6oxWJdKBasCujeY4YSerGWayKfCFAB9gAkddNo95PStCMHUypi",
  "key5": "63z4TfJp5JLa5LfbniE8qK5gcsScrbNtyDo9VckvdXanTYE3jnyngwExfo4MTbWhtrrRFj1Mfv7vVfngRZVctRhv",
  "key6": "46r3VyCDBEpq32HtduC5MhHZGVsM1H6LPto6b3TesLo7nS4Ei5jT8c5QvtHk1LTQYYoHrPZCbH9Me2Y1nRB4CQaC",
  "key7": "Z9XpEnc8DKmUvBmkmW6mQwu5vHs9qw7XiRrw92KKfuD3z6c6qTAfnftmyeNsriuE3chq4aSNwj8bddiKeFCXrFR",
  "key8": "DQpEwgxkE3kVj8Tf6W4soQCskZdgEsYBLJxQGu1ZWBo6Afjxj7Yj22UVCPitg2yvncZVYvgk7YFaJnxMJxgpggj",
  "key9": "nJDocA3gfYDXqh2csB8g6tHDas3JmmiM3wCbjmT96svnQL5LCtx7E63sWJu28RcsPDqiaDbXsK4xuwamC6YjASr",
  "key10": "Wm2aC5CbeNha4NU1S62dgsQ8LDEu7EpMf2otFk9CTUha2Fk7oSgfDkZNubnX9upodPZrsuFX6AqYTbYkjxhhkzN",
  "key11": "mN1gavZFy4xp4nJ9tETwvqv3JSurjTDHc8MRzPEXD1CeTaT4WsUQf1FpmecXBzouSnQRSYiSjhWsv9wtmgxwexe",
  "key12": "3epqNmjWrkmNDFc1Pq1bFtYYdScLPsi5bXgx1WDThGgNQZnh4ncJnRqu1VynkvSFnyczg6XeLPPjMBroBtXys45v",
  "key13": "348U7tDdJfMdvFHdjcsJU9t9Lx1QMY5fCVtwRRHmD8y2JLCjw3JbEPXz4wk1svUvkh4ywo3pCGe1BS7mPxigjWNa",
  "key14": "3bTRaWWPDzSuqobiQVWQ4gPdAzKkVZiG8zx5XZBUNaF7QTCBLj37Xc4cPMoRo2YpM4gCtJuER3pmAAac8FT3z9cg",
  "key15": "3Q6dr6kiLfdcproG5EqPR6efkpaWuUk1Juj2zWrc9CWEEtZ5u6zRFfUSxRHVTfaVTvLPJCQk4MydYfif6RCdyabh",
  "key16": "3NYw6roJWav6zyg4naSnQ5atBvhcRCif7dqhEUWWS7dEBV52WR9Uvq9uwpumzS7B5qesk4iYxSfvotYrWaH5YSBW",
  "key17": "628zxc3PKRyGexe2V2hUfdxdn7ts3j1ZCWAX3bSpS5Dr5onZJpyFTBPMX49p2aSXqBToFVUL9RnkY6tmcXJY3CbH",
  "key18": "4QvASJ2ZQxwAt4sKQ8Vo2kq1fv8KkGoiYmdUYjY73JjW4HqoRM6cKfWPHFQEtAG57htFZ9efbyZHhh87ev39kWmb",
  "key19": "5XTxHxvFHmSFbGemwzCodUiEsevcsN8ZhUtPV9jaGLDDQkGfvkVD7Xh4NGDuWPov33aWuDEUSYVzPNtA2aD62KaD",
  "key20": "3kFMaQrvkJdUYDLVm46A5GzStgboHTS9hVrBzhTctu3aqNFpZuS6NW1iJdYxL5go6fbLQGhWAnenm2oA5sRwxDsm",
  "key21": "5p2gnxUMC3aXZr83iS8f5GcYWbkbYYYdkUySYmD5TmF95zqhYvNjGdCvXV8yD9LVJXxLKng97GqYh8FSu3q48wyq",
  "key22": "39PJhMDomY4JbRxhNsYtJNWjGmXB7ur2prZFnntqZfeiUJexnJ4AXfXaqLACHdsxVBRhdNaTmxeRpEYg3tZKuRSa",
  "key23": "24SfWfZfzTpvbsLq3ARR3YsrqDR3b5vmooYsASoDMR9cWbH8zgmTGDihMgaMS229wx2G7XQB34r1m5b3coKCYBAf",
  "key24": "3amNnvZX64AWEg6KyU4Dga3fSciexqigihyy7cBECxr2pGEXykJPUmbuTyMRFN5aedCtWJcE1CQki6xo6bKXL2P8",
  "key25": "2bDjZ6Kx6b4qPRdfr11AvyrVYqG4qrkuZ6jjkW6TYeFPbNHs2k6V7AVbEjeXh3UX7GbwbHnLKCHWyqYwd1gQKswP",
  "key26": "5KydE7wm5hAb8XXxoH92EvKNGmx7etNe5qW4kUb56kKV1vLHtnEL3i2ct3Jp41FEzRZVNrAJxCW86AMMA5eKoG2U",
  "key27": "5Vz5YkEMxbvwD33mLmg4Figp4fmXatyafh98uG5KU6qkGnMwPoVjhVQB818ouUtNyJufsbMKzfTaxUofpkrrguWd",
  "key28": "U93SzFx967G9bQUyZQvBKGJysXLMuEp1YSRcCdgpnk3mXSM3eXY6cJ2g3c2aRwugjtRvQEC117VNgu2mksswoav",
  "key29": "2SmZqGmmDJXnRcJrvtruNN5i7ATvAtRwVHEBgzuf1QKdm5wopUKbfe1mAuwms8oCTcYqsaTAsigThfzUCDPVMXyF",
  "key30": "4jGY2LnuHPY2FLUZ7rfEdxZBuaqYasQ9jHofGdfs7Zg5ucvpvZkgGVnAow3fK3tJwwTqApGvQduH5cG23b8kt6Un",
  "key31": "ZYGwFRsiwA6qGMuLHpn94h3jL3o6ZNquQyUta9x2BcezrB24ABf4QFJ52VdwghSSRVtDBwDY33fwxByPT1x5aU2",
  "key32": "3Gnt2fip4n22hNBCZTjYi1Eo55tTborHgTq13JAjBoYjGKwnvsUPWA46CZU3kdhW9ShLDxXWXe2XD72bYSZQ9i9c",
  "key33": "mv5vnQYcTSd7yQNinJPUPH1bVzFCnoEmqqzDJvDCpbSeA1dDFkD9L7hkf9Dre3ZQFTrSTtYfKur8HN9zhLhLD5F",
  "key34": "64VRnWWgD4Kw1fbz2dVXhcFZwMBFtpwjejHbkbzpZdGyy5MTwo9Wgf48Yuj7D7q4WzU7LXCbyyuuxLDTPeHpBMh7",
  "key35": "2hNdMXTpVPPAPHmf1givyxYe3mgbwuDypjyzZ6vyR9CuNBCdL3h63KSXr7GH9JmPgrGU5frctLVivUQ2uiZx3hkg",
  "key36": "347FwbVHxjjN7JCwSRs6kdVcPzLw4vd3evxjM5jY35Pt3tLcpWvNH1VAT2M4K6FCwJbG9XAVBvV6PMtePiFY9nJP",
  "key37": "KFLCAgAM5MqqPDWCj2DgAPTdQBwx3kCECz2ApUWj8seT4M4uG4foivEE5koa99Puu51yeXBvHFctxgeELs93aJk",
  "key38": "4JjHdEcyyZeZ6fxcHFd1gKuXGPtjdAA6UaJbUxPtrovZPgUKkgL2pLv9tpSj1awcziPiF3RDULts1QQRRFgP6CQ2",
  "key39": "QxLbVKr8z2YQRjGfYh2cSHe1DFCs9Cs9zKGQuwYH3Kcf4qjDe1vXZ9xB68yP32fNkCUMmjyN3Wy6tEXzLHdDv7g",
  "key40": "5umWrvVx3E8onWGzzRRrbbP4ZUGYjkherfdZDroEwnPH94QaFY3FJhrPxq6Mtyhc9Box7pYJQN4UxY9tqtM5jeKe",
  "key41": "3cJp51tiQi4hEosbdJLLXmK5LzKaToYC7coWKtZKfPTmFGn7P9xYyWEnnpWx3LcCjQuYyiubj3pfMWa7wNgdcmB8",
  "key42": "4AaR6Gf4iLCZ5dEciejKbCroeMbjjKTyC5jaYXuVZM1L6apCfaUVHg5m7pgE8C5b3SJuzTBRfKmxxidKHutXWnR6",
  "key43": "21BLSXVgHYD3dsorPDqH2B44F3m7NC9L8yMTgVVp5Sy1L2XWG9Lsb1nKFr8miYxs7YvWFagujV5rppeE2JyvLXjH"
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
