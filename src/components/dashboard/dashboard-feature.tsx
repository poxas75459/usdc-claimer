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
    "sWjD2tcNiSg3SLxsYJhqwGJDBiNSfQBPEnMdZi2cyfU13Fj2FWJausiKVx2C1wb8rNagj2pMYB17qN2hjcqSrHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32bHSd8pHNc3vdYSRR2ungYoCq4wZuFTP8Gfdpsmje38dopPSBQw9MroqUuDxw135H3FA11aVpqtguukGot7cWz2",
  "key1": "3u1AJiz4axNR7XG1HArmphfLBoGTFWge39UnMtBchrwPBsD7GRAK7oJXquxN7WLpfCmT8fQiH7U6BSp9UyKgpihS",
  "key2": "4vqrwHoknLjWCNPUZEMzZUKGkUkNT5PgDBFSbTAhbfkZKxqzSde5BCt2k5Y5pPG6frVxQZndyPyRLRm8GPNorv2G",
  "key3": "6cP5bb9bKvLiZqXTsgr8ADxToBpGWRPpvumf4YALaCTjF1R5o8pHdYccmvphX57Y3VEwHBxYses4JF4mLVXZTon",
  "key4": "64h7HKLNm4swjRc3yodtWwAPaAc6CwZJw61jNo9dEFUrjmfRbxDLckPnCjyZ6iCFxVszahrEsttuLJkjVwRscfmY",
  "key5": "2Hd1ojaEi2bKtXB6NSRrrttn9JBUhR83sf4uB2JhMtv6RhuDr5hjNn52Eiy81v9VscjR5eG5fy8K8HsAwNYkjtNC",
  "key6": "3W5mzZF2oBS3xBYVrEH3SCs8pEb8z8exaMyjbXCLNjf1wkviQ6bKcKZxAvt83GmRwJBEKJA9zqveEP2wdBPhpRff",
  "key7": "67ERUMQQd78y7WALizNsXmXHZaGDhryEHVcW6jMWFCrmEfxiSspmXPcHigmjbThmKNonXASe8npCNGFEukXUqedU",
  "key8": "4mczhtfGLwoEqhmPsHs1dCJDATYkNKx7XHGkw1Rv2dQgyTJhmxJ8u9Zk6mHq8ZNuD1i4kxCz9mia1Y3RnavMm6ed",
  "key9": "3M6pwhCsSnT46oqnoE42ahJU731nREWKTqDyAxZctTvHRHpsKXUMYsHQwYcxPiEMTZLmL6WApBNMw83bDx4wCSas",
  "key10": "t2jrEwk8kuH3wyEGoX1Rvm2teQMspc59d8RjfnaiFCuAqsQrpLyeCU8SVedHztjjUxjJxY4DLZ7aegNfgj1SiVt",
  "key11": "2LtrHUdorShFKeE8t3bYGJTd9T1ZRYq3ZkvQjmN4bMYhBb3hGhF2EZmZm1NQxJxzDcxzU3BhuHDDA9fZF5DtrdFC",
  "key12": "RRSQKZG5rDYcq7mzmKxSTQTAFAErMZkVyxLezTtQeX3mATiEQmqWk81HcnVh2oDeG4rpGi2xndbKNNeV58Vaph4",
  "key13": "56gExCafQVhrDUqtBxbXqh2phmVWqzL5ENvboXCyeGiXNxxuFpcfcWxXExXUokNQQRuP8S6UUGZDKB2oMU77Aric",
  "key14": "5yL6ofwxhcJXkWZMqKRNPxNefgF2wBqHgx8wGXR3jBFJf2tHTVuB7WnkWQhHEsZfcwywXcsDivUe76NvBL65ZY9R",
  "key15": "3mxtQ2nCDC31H8K31bi3ZAPgXdADaJVE7piXxxQKuTm271g2wbSuR4wiViGjQTNQa84uSZnVswb4VF6Rtjxh53nt",
  "key16": "3a1FJCZraP2zSXE4asHAEAp9N9PuqecqHyjfJ5ZQkgMMtKLBq2RcxjKuGYdJ2hv8fyUia8A64ufXqppDoxAfpFzH",
  "key17": "4SwMqPRRRZTgmfvu6ABfGm9cnG4qGueqqFrpXARBPeKNUYXna3B1ahSdSrXY5MJ321wrmUxyDoT3Hv4M1fCNm46p",
  "key18": "8GKU3emzny5roub9MRgZntCiEHuRos4cGj4HuEcp8n1b9JmdoWpQadXnH4TxrTjbshLSt8q6m4gzifBZHWiT4kW",
  "key19": "3VXLHEJcxphTELVxSzYM2r2zBbxHCBKaZFoW2pNS92uoJg9W7jA51wPt6XnKwmzgwJyo9K8dS7vE7GrGZopr5w54",
  "key20": "rA52hPopzDvAXVH9kNxhCXAPJeCaRyAtkvvwRwWeyKGvKBYooKP9KAbQrUPbJ99aFbaY5deorW8wgnY4A5eUmJW",
  "key21": "8PHbRreBr8R9SRtmN9ionCzfSdhTDKwCboJe96pTLLJL8xwDtrmr2SACBkbcVs3gj3JNL2YboY71YH4EH1MHLED",
  "key22": "2RMyYF4LpDjjUGPfjpjSuTiSkRhC5Som1Bm7FHMVkmSauWU2RkzhtmAKEK9x1HXmSqL8bhAANqCxrtQVLrgTxaX3",
  "key23": "26H3Vf3NBr86yFamYKe2QabU4GHVAygLRxE6q3AKRtn9MbuXntQUySiTUQC1zSYC7hU4iJHCNShPVqpFc16ZWN6r",
  "key24": "2i4NYvYTYeFpM1dMP67TvNAbeBUBHtHBvUyDfeq5yMvAnj5wyQ2q28GT6CGFTE1GMX9FRSBkXu3ZKEFnSY5YeLUw",
  "key25": "5eh8BZHegbm62huZcVdMiVmRmwPvHwhEMdCp7m9hb1ypMJrLBfbKSLRxycuS2vPFAVrUzbb2URSnijJt78arLTth",
  "key26": "4AAfpRXcPTVNowsTttw5EvkZhy27tyoFZut33vs6YZEjPheZjz9RRaEe3baJLvd6eoX63eMWBGsM4quba8ApPyTb",
  "key27": "3cLfanA5YhoezBqDTqD1HPs5jgS5ev7WEPZyMz9Sj4MFUAhGZVGnqq6yKUBkV5SD19ny82X2zrUyrwbWs7RACnyX",
  "key28": "62SE2SSEEfEqzQMJnYvR8ZS1tSY9Sy1paxvno6WRih9fEcs7AysKKJWBdS7ZZtX8sx52S5Rs7HWcTcrfrFHjWNjU",
  "key29": "5HxCZssg1UYmzGeEqyvNXeQS48APmd2t5dTMNzQjEDLcMB3bzn8itZTsMqSHEyJKBGV9HGqdGwgF2giLxErSzzkD",
  "key30": "3pv6YRYudhL9PX5v9SYtJBBdEesfr8o3JRsnf3bKcsHC4goHVUKLwgPrJgn7rstM8XQSaoS8W2Z7dfvivermtXD9"
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
