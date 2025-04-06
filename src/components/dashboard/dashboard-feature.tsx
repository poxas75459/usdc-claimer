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
    "2phSfyTSrTx5kmJCo2VARwsQvneTvGnUHF5xPvqWNFzfGvnPsstei489oGgt3HSDvGiJfbyzC25zXi4euqR53qgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UDt1KNuvRF6dnjk3PBwdUL7GryFfsrHkMxoe4w7jVpeQxnxGoLojdP7h6HFkJrD2LwMM5yrTNy83PhAAss14riY",
  "key1": "4TS73B27U9fKreLSZaGF5ti2ak3LxyyyUXNSQACXzUPNud45mLGMqLZmsDrwLYE3ZmiUutgeniPDfC3GFBHok4Eb",
  "key2": "3dv9CsSS7KNZ6jS2ZoU1oV8RbnrfQwKjSoWRzitrP899Gv75CbakF5go9JxXXjg6u3XGcvB3d6y63PEjN2Sib6rx",
  "key3": "2LaTPnrfQXj7p6YiTou45fkuS6mEVSuSSxtaKD4UnhvM9Ven5jPBsGYnHpVUhGfXveTCkVSekLZfYq2tL52u2pkj",
  "key4": "tDSXEqSSaywqTQkTKRbzMvrqdMYW2q6ocxUeryRnXBGejvSHrH1wJkRQ2Xu3mC2EN1A5uWh3dHzLqP9QHccsbNU",
  "key5": "GoVRkZsC6CwPHQgF87YvUqebm5t5p1LnnfNH339uN4aK6kidC2hKXASUcPmN3mUG1NyUS4bZxRnLQc9EM41AfCo",
  "key6": "2w8bB9KsAy4JKnfFGtUZcN1DsRCyk8BFpZTmX7qKbnZhSj3o9RHkm87JDEPspaWAT7CJnhTz71wadfNQm5xs7Hzq",
  "key7": "5nK12se8vzMv3Waj2yQskaACEDFJFcH14xHWi3L61JnHoov83CJ3sThhRzyvAwDscADaRgeB1SoyT2dcpt5HoSYm",
  "key8": "wiiFq58zNmqPLQ1qo47ayzRtusWg89LT55fi2ZyAjhqgyr6UMzezm4zZVtrLdN8y5vPn9LqYdTfSX6FoJzt6j5k",
  "key9": "SPjh1CSXu93TLUZzETpzBfBpQM8dJZLAp9K4xvHWdg7F1j4U5444EJ8rM4TYhiumQQrPYyCBYC55SvtLzH6Heqd",
  "key10": "2n2FbVb7FGbn2NKKz6YqezXAoC8z2jLnFfduLK7Q8knS5KCnQgDuQWTxLxxQgMnZDDPTnWkSX8FRGTYaxtdLiMz1",
  "key11": "4maXC573aSreexxCmEb4MPp8TVfjxPkLqcEJ6yDQ9QZmZN5fESC2T7MoUFUCtUQNoaucYyCqumcXWJFMVDLJexNe",
  "key12": "4bkkYrNwrg7hYrDpcZcWEQaTHZJtXNt3KCVGnV7vmXTyB4qAgSNEqVJFSoto3wVSS24NLg6jECov4sepJuukPrdD",
  "key13": "21AWxoxFBTsr5iyuhRR2i6U2HdH8bP7SNJBN5gXKiAZ8RyWd7Cdvu62einuqh3zwaUgxHkMEpzdDT98qu5TNe2RJ",
  "key14": "54tDw6Sri5hqmXYxWxKJnAWsAqDAUkJsoE8A6LLaLUpCcHoiwTGZviJjH1uqH3cCd8SU565E4pZvYvqg9GNfmK4Z",
  "key15": "2ymy3hJZZZJ9bFi44Wc6PDVxwZNdUMCmMvvFEiSbLcNByszc99tY2HQVPrUbUGJS9Xk1sgnCPbuRPGqsc9iRyGJT",
  "key16": "Nbakv5HZzhaRkSJqs4qKnK2gSFu5WrcnFSEWpGWs6NkdS2rue27V6hoEMZS1ZTJi9wPgjWiyKGwrU9G56LBtHKX",
  "key17": "4TzG9MBwSGiahNYJqS8kRcvjFyqf5jmdTb3wGP9fJdUoQ6XaX68VnQevxsoggEkg1BQZDBfGfWp1mDTDm3dozdBL",
  "key18": "cQp2PoNxZxxqrY25gq11rZ4TAkYMsgZfbjz5jx3hdqZpWAVcWy78k8s6kq5iJC6sYzwbzebuShiL9HEhmX76Vpu",
  "key19": "5uN3RLYDehUkHgSq2kkcxRx82Pzq17SiidELnDqfZYoxtq9nGpVoKZBaz7QHepfP3hXrbG1J6nLLkHyVegYwMPL3",
  "key20": "4irYNzdcG9erPDLthLjiV7ZzJPTSvZKpNVYXZWCWpQvcK8L1vm95QbvoVBM8wFtn5m3ycqXuS1r8kfYQJSSGvG5W",
  "key21": "yWKLoAo72bzt7NfuQ7v1KjgeDa9q1LnrHc1sGaHjbUWFyRTsH12MY5fXneY3jEF9UX6RWdVpA7JZuejeGfBJGpb",
  "key22": "1CbyHvmQs8KHZESCsWtFbdW4S9SvJwixaw7axMmCvdrfAYkT7GFjwJzGmBZTLbbjkRDeHKjjuduFR4n9noSWtwa",
  "key23": "3UkirvoiAadcosV9GbkYn4bnbGTFc2MBpzUeKJWRKDxDRum35TMXsFVQJCa3i5emLm453g8V6s1f7d5wWi4PBc5W",
  "key24": "5XD6XaQkP5Y9dA8kXpWkGyi7LJy2MmpnjzGEnsoB5qcmoiruSsPWMHb21cqRVNA4QDMPeq33XnhuhEt3YDo4qZGr",
  "key25": "47FuXVLNrWMSQVx3X5fniy782t2tvy7aWLbYYQeTCV5918JZkpNax6vCdC9yY4QLS1BAQtmW5pkwZkfkn9bhJajr",
  "key26": "9nZtpoEwPUyF16iw2jxmnAGJVUGn4PNqjVt268jMgGsfy8KmX9yeAsBKRrxM7ZNPXRvUp13YijRJkp3sa8uMNCR",
  "key27": "6FZetksMY7XnmfKo3XT2FWtnB3h1RU1ffwqQmw1rSeQpYTqgfs2bJsJWrFURmcg72tgRFNWoq817Yk6jddTedA5",
  "key28": "y717GZR7FG1wKexCVn2NR1qP17WgKCk3wvUCo1maiF8ShdpkTfzhyMGvEjMYMS42GnDZhxo9ZhSh2DHjMYrtYnC",
  "key29": "3q6dQqWXr8VG64omVCUFTFaXbPXjQmd2aNfQxe9idAGcw8EjAThGUm2PFsZHfKxyVZN6My1q49hNLwHgaBeq5Jir",
  "key30": "3PxiRFTvyyM7jFiTuMAnpno7mXHcBMZc2dSH94wW4rytHz39bsz8pDvzLS3MLpnNPFrJ6fBBX5SQWGVFxCreFGsA",
  "key31": "2TVCGTZTdfWjCGRYKtZhkS95kxCpuUw73xvS2zx388N2Q8F6uTzSEcauy1FMW59wZsPb9mNDDUbpfbc5JBdtJkFb",
  "key32": "tX6hYrgF6DMRzCpRrcHk6QtRuyMeAn1Ukbbhjne3foYv4Ue84LD8EsjuxoxTMbSCdftcS6oB4G27s8RYYNwVsxi",
  "key33": "3csWT7LGS9uJmFYkrPYvzoRuijTRvHR9ujNzNVxPu95YA1ZhYo2xpWtFFLgurZyfTW4VdaH32fmATKZzs4x6nhM1"
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
