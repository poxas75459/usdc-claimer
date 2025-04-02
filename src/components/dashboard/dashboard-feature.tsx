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
    "DfVnZTXzGyco5Ks6XDn7WGUVSJsfk2Dn3GAZbb6y3473qDQKyi6y72ZQrUk2Gqvi1ELFpVaN3LgD17vwv376k63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qu4v49si8Hyw24LVazZhgtpNzo97bdBQFLFgqLyTEQxf5q2skc6arccCvXw5mQbBixoWgNXZRCf1PvYbz1awYHL",
  "key1": "5SMRUw5sA2XDQef4JKZxBGDhrsgCjUg2HNepWYE5o954kdpREfJXhE976mEAL8ZhAU1gkfEoduhTZKqzQ2QEg1QT",
  "key2": "3XqhE348QSVMwLsdv6zr3NDKn5Bp2aVRr64coehD16rp8Lyhe3yhMEYfrJgAfC1zMRpW6QydJoneuDr6JkVkcNhq",
  "key3": "3PTPtkvmmQ27juoqhLwTvzNzQkjYsmTZxS49hnG7tYhCh3FheWrkJs7VdccGsshtCeRR7BnqXM5Txj3Uiw73nbjk",
  "key4": "2MVmojFchY5Acca1TdcwahKJfUJgEoLMsUojWsh9NjWmWjVqtTbQkL4hY3KZLpiYC6CxxihkjeYsoQC555VM7H66",
  "key5": "5aDJFSopDxS1YfJrRNDfcL5pW89LXiW1D8wmcVrMAS8H5E2MikWYcUXRWxFj85iKaSXSUinx3mFLpWwrkASAnzgX",
  "key6": "LqnSGdGn8uz6Z2MYtFXReEAwra9PkygxAEyQWfypSWAjLXaPwXXdvc8uek55PRKhJvvNh9nVV5UqFEFgWtg2sZX",
  "key7": "vKCHwmyL4Wn9RJZf8axxD42tBY4gNs2TAh2Gj1SCbaZRzV99K93vaZ3AFB4tkRfL9PTdNcMvNTuQpnUpy65rzPX",
  "key8": "32QtkGUy5SPQfsdbp11WWiiJiVaLKDR42wqBo9G2y41Thah2tt6uJwvjdtb7aHBdZAx7EshNFcVB9ef1F8mRxjuH",
  "key9": "2uHR8DpEBjMffqR6Y5nhJrMN2PTKTbA7GQooxkHAW2W7C3Q27sTPj2YycjySrwA1fuSvb4A2G1yE1dwTBmNLCJsn",
  "key10": "45a4iovg8ss4jM5SKNQujrFsLZ7gTzAJeGNQYjbPaPjDT5wcbN65TaJhBNtj1qupeS5JXBmi6bLvszC7qGJTn2kr",
  "key11": "2gMTLwa9ZzVN9P4cu72VoeqRQqZT4jn3b8qsLV5e8Cs2fqu4Jgp6wvtreX5pDQvTgcfia4v9AQVauJd5X2THq4Mk",
  "key12": "3s9bQeVeCeaJ2WQHF9i8RduoBMmR8eh47Vb5NheiM6en62kvuLcTGequyufP4bVnV2xS83gUSB6BNnUY6wQwFmot",
  "key13": "35eDqC2uckaNqUkcGWuUY2YSLAd7wCDBqv357njPoVjnMjPCKt1D2eVEMBBQr3LpKN1rngPaqPsivUxkKfsLrDvN",
  "key14": "GEKGTUACnjq27hZ5zx6C4qAHchze7oP9N6bgn5JxUBUxa2ZmJzd4wNpBti4h2FnLksJtZ6oJ1kZrSNcPKLSDrrP",
  "key15": "3qtryDPjuBqMyYTkhUkfKXS2NHjSxUXSJvHcFb7pdwDJ8Zt9pqXGmoVqdbBM8FeojQda82W3YmNmi7VeRC25ZdSA",
  "key16": "Kep6op3qZdb8u7pH519rTkXjeiyVoEUvtCsg15fcRULfojmHXX5RQf2Kz6JKB9b7DiKhVzUF2CDc5ro6PtPvkP5",
  "key17": "2gsZHAMpfMc5idUSAPWvbYhcAJbfZdHiZAvnUvLCXN6vBiw5N2GmdfzDNzvZ1vuGgxX7giskqQungRMhNhN1Sj8n",
  "key18": "bPHFcdyNApZqYZf76TFPMAyzNettZzJvdo9Dp2kqubjpvYxHrTiptpFw5JeRNW7H2Z49V6P1MXqi6rtHuTeQX4d",
  "key19": "K69Gqcji5LEA2pgkHdRp7X4HJXf7R61AE7fYr34EvcF2rYUkinhVUZ4KqZsjSTTiXk9WJ9fF66ET48FmNdafZaR",
  "key20": "Nw4a4UGdxLTypoWgJd7BWV7vRyvwQGAKHR92LD2bDbVWpPtwPyDC8gtcb9HYTfPrrazRi9CUr7Jw1i8SX8TdQq9",
  "key21": "PSibmkaiAw6qnABh6uM52bQjeYkkZEekBbdibnLqrg4qLys6jpxZaYRCfm4n2TwHtCA4ZySVospr7AuVByfR9Vg",
  "key22": "5cswRQnnnrmfHgS2J1928bHo5j3HQSN6R3dCaeapFfLsaxsoqCqPd3FjPVQebUheSsBsj4i7nKvMvpj11pGiAvw3",
  "key23": "SBJVDFvCJzFfJZEY8CCWUmQmuYurtoEDSgKDwkqJ3u51vAhKyV7FewE2vA22Zb8hpGdjr2As5Vuvw8u6Pw5sc4Z",
  "key24": "2LT1huCLAWhoem1EZtq65cgNRFXxv1zMAbEkXVswT4Uf2b8nhmxjMosVqf2sS7vE5AtZQs7UB1Ty4YBaA9f4DzLv",
  "key25": "25uBGRP4LmNwbZMrQEaG28ZVN4vRBZNijMA1Y3GWHCwuxNDZgzpW3zL1gpRGxEzJm2XgjdAGMavKaQY4Ch1HmF1u",
  "key26": "3feB43YkrPC3xn8HtLXCFxpLvQTvp5n9CyzCZJD4W8NLXSncvnGyiPKd2DPo7JeoZ3aq2E8zdPHASdteAHz43w64",
  "key27": "534F3egEquwwUV4SkfmdT3NUNKF1dGno9mqb2Jx771cc6ZJ51nXH5d1iKBJ5oBDkD1SvmD8UnNdpKm7Co7aUfrpW",
  "key28": "4sQdoTf8jvnHG4yaKTjK5AqB38s3RTVZWXPEugWeA3zDd22ujgbQ7P159wc84d9QEtuXucDyVbhEd4aFLcqkC5QL",
  "key29": "2hRpGsmDAvQHWy5Sev2JDt8obNeiZypZTxiFTmKReCzjGRZow7dgFnsDDzexqLeUQQdivy1UjYwbUB86bwqk9coK",
  "key30": "27kk8vTXEZZUoSZ6xrFbm9eera6JfbAdvBW2Z2oJ1RThyivEvcm3bPUZA2yvCXbHPvnSioixsQVf34DCAyPm9szh"
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
