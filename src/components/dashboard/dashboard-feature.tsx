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
    "3FTTuQGKqpv3Nz942ZyaTVvVxisAds6VZ4dSAf8o5MJ9yqdnrYH6SJx3fapB3ho2b42wMN7B9zMUQQWjEacBywzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gi7pbvW4R2XL7Q2bZnAnQpJkxueGSvMGKMC3v1cFeTj3jziqGWayHmExpbXGqFPEBUDKgFDtQufnntKMS5pAJhg",
  "key1": "56rK8DUqJjgG6VmEwNWm6Cz3JnofVWiPxxYLA5ywJfmoDiYeF789EUQq1y3aTwHywqY7CaVZxZbBJroHJ83iaMC5",
  "key2": "FUy7ey5dnTPTR3zdnpSWnxu1n3MbhR4QuR8gTCnzW9c64SvvZ9WgRSyfNWQRgL3R4ZFQDjEi23cnXj9Xq726Ct6",
  "key3": "e76GY5aaEe1feg5sq8rTxSg9C5TKXejFC2ECGnCu87cWtA5LNbGbrUEvspQoKBZ6vLPiMjqLbVeaZZzLXzyiwKh",
  "key4": "4LSrtJFP7zFSdTLvNoEkVqhYSBR6AGMKugtNJ5mHjst2vT3iHcJrbVBVs81AsfxKBT9rivLyVeZGi3XhdeMAPS9c",
  "key5": "3EeqGLHvxjts5VfCAKL3Kbt9eJnV4FDWP8RXX7BQPiQqQ9ghzsL5rZyX2GvC9C7UVJ7knX1UHoxRQDWmBKTb2B6M",
  "key6": "5C9eQXjDbA1wcpVWNPxSowdso19oETzGJvgKVkRi7Q9uUtnskbCwvRm5mD67L7o2zByUsr1GMcSuMgzEsvCHzqpQ",
  "key7": "fR4uT5xHqzQZ4cQAcPQJd9tL9u5cYLdifUHStUT7ACWiB2sQR7S6R5SvsjEMo2p2Sp4EhdHkCj8Vw37fjrY4GkA",
  "key8": "HQUu67D3u5vZA36CePv3FobNUZbwaVaGe4BxsR14xFQQwCxBbMGQDZWAogVKWqkpVP7XM6BdtBiQNaboKWoQnJV",
  "key9": "63PiYQ5hAoZnjFDigp2qzAFtuUSK8bghkhZHgyUjiczYVjqCXMnuNxdDm6PdQL3PLoynyA9za7TdhtwUfdGJnxJn",
  "key10": "2uiPxkbgyZc3jLeCcnQ9vQXjBqEbADxJ4KLxodx6dFzjDQobazF9fGJ13LkMnFkorYk7A9YMgDQodFCQ9ay8sUin",
  "key11": "2Ay9fNNeEeARDVfepDN6B4h8kXcCE8kyHPUywpeRuR9ohLTnke9enZX2C3tZqjDtchhu9v2V9ZirgqCq64496onU",
  "key12": "3NCSSnspyPHCF6EuuvNEgUsUwd3m1oLMr7s4HEnRUSo2uEGsHnUsRwtV29AoGacXSvRcRfaugUf6ptWQeAWTvJTr",
  "key13": "Hv8tEuNkhQJTuUPwuoBJubyShHNoSTpF6jXZGgiXvUyoP7TZmQjTXS9DKR4EvoNooA2PVDU1ZmBB5wapGyzWmPM",
  "key14": "2qqRpEAnpazn6dM3Mu56WuXLyMx494r8XU3v9Kn767sQcBoRkTYfZdhHCXme1H5cByUDGCpBqEjpmfq2P5e7AFvq",
  "key15": "qR97SSCozU43mT5Ep8gFRtmTCNMr9ov1YvkXgSBJSbfn47GB6dM16hAzi45A1K6ThCvz1M8nuNbJoDCLA4HKuZS",
  "key16": "5U32xVQdZRRzeck9vTCoS9UGJC1caeCiFacufEuanPmpL1z41obHi9F7BPTXZ2VpMx9HhRyo1zAEoMZFmxwBiK19",
  "key17": "6XaYUoDyx6aHBf1FGuJAPMySnsMyNPb31rRNbBeNfy4aDopTjXTgjeze462k68JS4FXEbTcYSYiLkrckReFMcM2",
  "key18": "4583bAGQPwP4mM3p7YGhcmvxMbsCGUrzVekcLQ9su9cY6hGzdndBGYbQX9VE73gdLssvMGEXPCPBhMvgGgwejAHt",
  "key19": "3uzu8HgRgydpSPUPAaJi4JhwArnGfo9WnUgTbnWbYCZPGkLuwVWGouHnySoj1qCUZPxsDX7fQZPcMdggkVzoGcVB",
  "key20": "2Bp7xM8yqhTt7r1bJwTqCND3QTi36K9NKHNkyNpbUnBMAfnQuE5fwggtvEM6DQQKJGMoZw6gr9zsRHtV7qmcce3M",
  "key21": "4U4MHKogZmKQzRfZ21YxGZEb1K9LfXvuMmX2aW9oMhtWeHCVNF4qkYv4AATqLziL7iuxoHoPJA5jvb36fwzL9imn",
  "key22": "4WKEKfzVeh6w39jsMrsYdLjMpFFMLefZjustfnfrgPSfGG7ZkMmNW4q5uqrapj1PMoCHRptc2qkLpg4dyRADCsTC",
  "key23": "2EzxaCevRtd9L6ec65RFZc1w6QeouRLKso3cSvLib8PqD8FMaE2Z387YzGjuTMkQWk3wAtxA3bBwPFa5FiTvXxt",
  "key24": "2wF9ahRTCWWSETaqYQhdMsXpCdnr5Ham4ryChYARajgNUh1Kug7efw8Lwr4ou7BjKrNqhX1becNyjCuh3deVPsxz",
  "key25": "2FkMpYqKYZkNXY3RmLpZ4aKhrkPYoifs8A9rxB5gsCauSJhmV1Sx4dYovTjutfziFdL3eUE9J2ZjA7npzg5vhCGD",
  "key26": "4eP9esozg2tmy6XsJ4R6ACAJvxTfNKqGH1Srdrk7u7m47dG5xYmHosoGqR6WcesSJKxAigbkSBmVoPZ4U3bthrXY",
  "key27": "57zRzCPXFG2acMUJ9oeG157jydPoErxQZsCXHr9zwUkYVEXn5ZRuTD7ub5ThG1S5w8enx5VRjoJiTM6vDqjkZpsE",
  "key28": "4ZasaMC79GVrcTTCrs6CfbS6UYQXY3uYpjuP9MhG6cFqtbL4BA4PaeYJAAPWRucooqy9gis6NFADhiCXcUSNKvNK",
  "key29": "4d7wV18v4bn1gqZ7eUPDhf5UN6pE3gXWk9g2UkfmCFYsCYy3foeUL353STXvU2c4Bm5hrB9UnVy2k4THBXinTSwV",
  "key30": "5r8NDjWcH4eN8VxBzjPq3Pa2at56frjPBD1nCK2QtpR7NjWMawgtb61NghK266uJvBz2NUgZ2EGC8QyQxQuLU7RV",
  "key31": "3BAkuE94xrRNgEbgmUdS5tk9NnMNHMzN3CJEFvFP3cQFAKfugr2MD5QcGyEtNT55D1VvJgVxQYpGNi9pf9V2y3Yi",
  "key32": "kLHeFLpn5Nck5g34soeNqLebc2TvspLfEfque7dgEoxU671iwbP1siAaMbYzW3686hSRWwYLr9H6BeJLaNUkyde",
  "key33": "38dsHmbHnBCyWqU78AvaznBaVi8FtGX8fGARJg5UP9q4Z34zKtm6PYfEPsKE4kqTfJzgk3SYWFr38KsVXAzWw9XA",
  "key34": "uLkFs2rGh81MNiGNkQsRRXZevmQX4qf6RTfxuT9HamszdLeWK2BER3pZEcDcWmpqk4wLsLKXT7hm3yKQdTxDwR6"
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
