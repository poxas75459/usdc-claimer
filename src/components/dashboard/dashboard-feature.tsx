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
    "3x4qJGN1mL46qu8DiW84Ka2w9UJvihrt8zLMDcZDS7Hjgn3oi6uQ3dVVKoVgUZFsJCXctrai7vPPFs7UMXWzHuuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yVuxAR7HFKaSBdCFR3WAPZLX3gtaSgcA3gPEWSncS8oAbLH5RZaTgG6jL64LZZsyPc2sAYFMp8N5Y5bkqnjYwH",
  "key1": "25F3N8pEVGhfca4no4KhHgusSW3YB7r4cMLZNuvxD5foaFSacjGxFrL9HKFe9wjQW7vBXdfxjnHtpJYoorqd6Gc2",
  "key2": "5dvVXzERbUamxH8AYuVy18H2sA5tm4kvTTt8syX6HvgjNCGSp6CKU4TUSPHjMadM8E2oCRLH34rqqu8S6TYH2GcL",
  "key3": "2pu371rNFCM8S1jJESVUspg1g2hbo6zV9qZtmMEagcAu894uR378Dy8twnE1F4qhCe4VFKZFXNfKbCmZif5C1MCb",
  "key4": "W8pGHg44KvTX4nDaiHvHoPWa1gBjFzB2zaBKqPrre9wFZfwRazYNxhaTVXQY5p7fT3CXBhv2syiXmjTBciMg2gG",
  "key5": "4k6Ntep4MS3TWvEHCLbxVYP2DcXmrxA5smazuyvY73YR2FjuLLSYpfwUW8yEBcAWd3qGm7vSYUz11XWdPm836Y3V",
  "key6": "5iX7LtXcBhksS58Lrt1B3ct1MnEb6VHAMQaqQoMAcod22G5eQiH3yhZnaUo9sMpwEqZokK3qaEgcHjbKkavmBU5M",
  "key7": "3q82gZGiuszF9qdNy48JHWJZmgymc9rbJcUponJvmE6DsBUGupby2orodWgWKAuFDf4hfoxa9JKP7iV54B4XyLsT",
  "key8": "2W3LmbC83Ro4w8PbtnXEDLV9NFCCvrcnQ1cBZPV8efLTcmvGJkM1TZ8uLpnodepjeAWWuLDduthSCFdzqXkoNCBo",
  "key9": "3vcz2nNzwb6DjeCziaBQKZYLa6UcdcvjLNoqYTjWYeudvPx8o2ogRupnw1uX9JzS19n2g8zg1pAiCfdsZ6VCTrwt",
  "key10": "4QTRGMYj4J7vQbdtjNZs5SnaHaq97gV49mM1YwpJ4EBvUbSxg5LBJian1VCFPCZJqohBu8bex5BDR2fHuVic6HCR",
  "key11": "2yqTvdvywnZyNjSVMpEEgEHtWfAfmmAi7zkAcK4C2ke8F3n4yLkHfX3Uw5CWoVZ2TApTbkY4nxqB6ZiCi4kF2ccy",
  "key12": "4oRetKMYgeqHzKAx6jXDQmyrsYiAEQHuXkzAevQRVcvNiMHsq2uu4WLw6Q56WxCqi9Yzv2a3vvunQMwKBiPLbDjt",
  "key13": "4o34BYAvU5cDuLtHDW8iGVCjYFKHJkQVozc4EufkwZFVL7gRe29zZNb2yngUkyjbAgeM5zuEhbYK1ZG3MhjuUYFr",
  "key14": "55AQFcxCKqVVwJdvtS4ynPx6sxbK81PHt8ASa5TC4AEbsbpyU6Eu4CZDtSC8NzKhf1fJ3nz9CiUa3HDyUXzazeVd",
  "key15": "xf2YySm63SUJMWP3N3qAqgXCnzdzutqN4qSFmD5bpRYqdVeAoCjxq32KcedU7fJ5kPar22dhsAS1317CkvgvwCL",
  "key16": "LYxcKyh4vrPRvRLGAAmri8f5ouKiX79GRScMfgPcNV4TkusscDeWztJ9ZHHsZfAL9nG4Sp9yc7JCv68b8SojsCN",
  "key17": "5iAtvsWjJG8xZsgNwn2iCHqXWNhw8wGtgBQ6vwZt173ZfM2o75qpr5VYngj2r5ZB5ttA5LwXKVVzm33Pur6eZrc5",
  "key18": "28zFcscEQuwdWLndriZuNj4JutWXGbT1nZaZk1BiNLEUrt2VVFveqo26yKsBGSRtKdDLrX2KzcifmgkQu7wHXXgX",
  "key19": "4r6MXU1tTCiANRPYarR5Uvcg7gmGkkz8YBhJn8Q7WvsTPxxqLxZn7uBLCpJVUKx5TB7TqJegbdHnXz26wQQGrusF",
  "key20": "2aCx72R4CPCY1Vb8K4CdCqDSRGZukGw3evP8dPFC9bEFgJzft2KTjkdCmtWvVpce5WRZUSGvbJJcoDS8inWafHx8",
  "key21": "3wSGU1s2ZZCjY1VmuEKZmnUQyGtqv5KAQLPqYAz6U3MP5MoNR1ZgTz5u85wGZ8o7ykEAm7LVyDweFaFd3R2YwFef",
  "key22": "3t9411Xq4FKV8TrxJuMQiCH91RVyBKkPGcxHP9ofeQ2wYDTmMyWHDjMhkUwjxWN6iVGZTxcbBPwNBxwVnnmXUi1z",
  "key23": "47AbYUCZQE1saCw4X7v5cbZjm1nUPtZ43aQ6iG91gnbho4RdDXLLWqM81dHpXEQSL5vbtDQ8GYNVdQZ3z7ga1xgR",
  "key24": "4jzhfgL5AuSXP1hxaLGtwXXGQc1GSLdfupkihntF6qNJiWuY6dJMBTdAu29WpYHtnfcJtwxuTSH2iHXBJfQAj4T6",
  "key25": "3yoMijiu6JoTKFE6YQTqVpJ5jLt9SDHkC65c9YPQjjafNeRQ5WovGyKyJ63EMTKWcSKumorpzvtB37GvPwjo8WkX",
  "key26": "4ANmnxUyQwcE5qSEpuvkYtvRpW2wkjoXTPTNM4y9zU4hYYvMo3WyQB2iC8Z3haGZ8dJZEuMtCLQz8hsRHMzNe2oP",
  "key27": "2fw3AEAKDLLqsJHqEp8whCWyP9xHuPsUTXauWAk5tbY6pKcRQjgx82ZPcz7nK5sFjragriKPKUb7DkGWnMcTrsr2",
  "key28": "25woSbBnz9BYA5Qv9XrGfvV3BaQJALnLqE6ffGkF4n16RcfmGd7xpQqeL67DgyCn8k8m6cHyvhMdRv58YLSeboFf"
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
