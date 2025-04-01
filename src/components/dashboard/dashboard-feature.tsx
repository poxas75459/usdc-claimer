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
    "3nKBq7yrkLRAKxtdDTvdqD3at9uZGP8qaD3yhg34utkfoYWt5o8SpaEZvtL3RSpFG8PndcaSjnk7KBHNPotrpA3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FodgivwYJn6iobyTU7P2AAd9QB8ndVTthmouXXr2xPPwtwDZ3VpFcJKCyvPkUBhCpsQmbaPrFGXe3g7cWgbuapM",
  "key1": "SfZ9EDKvbvRbzQnU17RkwYaDcBrUHaA92WmJDbRtP5MZTCp5qAPkbaCEpUJhk7G4jfq3p8Q5zYXFc3rhHXcG3pg",
  "key2": "X1Qz2dd9q7Vx5rDjHiYGv3JXQYtU7eLfNkqY9SxtLWoETWmQ5k7oWrBbhaPkmmUDJcYVK1WFEdduWizqsTi6gN2",
  "key3": "63TW8cThrx43pcd6LBxwdDrFmmsySDU1xSUQE439GLTBZba5BbnAZQPcgxbxcC1vhDerQdhDno65cq2spqVSKL74",
  "key4": "4Ja1Yah9YAvVSLc1rKi5aPpex27cWzzi8ePiUC3BMACEE9gmHbRwWkcqUqu382aRicEYRaTBc9G9Ro96WLc6DPYi",
  "key5": "39cAt1ERX1ev1NtbyWWiHryzEZJo8Ly784WdUbHKPvCRXdpeUEZrXMHHERYVmXA6HyQMXRercHZMVoLkVLwYNApg",
  "key6": "3rs2cE3iQXJcg3hopzcuJNkn8M2ffQErPo1TtZCtrhjZi23gezRrQKCirLzNWzBeQ7mJLWWr8132NVVdM2jya4yE",
  "key7": "8Aws4osRgMcANeVMzAEzUYTpaZiQQ8TNqj2PkqpUrv8GWMJsuPRH79FeTmNzQsEbWQEXZS6jbqRzMFchRPZj7WC",
  "key8": "4uxYKBB7UDGTCjPotsaE7A1i4kAdukoBioHR2qo1nN9nT8q3xtu1br7xn43163khVKSGasqsunNa2oNtBLUbDRMB",
  "key9": "5bmrsouziuCUnhq8BRBTnaoBAA5iiPZHVpF2RdehhwGqzLCrovhaGExuZvr8wDb7EhWtuxVzTsyZ7YEmadvoE13r",
  "key10": "iQijZfr7MYEfa3FP6vLKk6zu4qNzGwGEnHCzhE3f5h7qLdcKxZCFqkHGYsx6T5arXRop5cUHkiw2b9BWea2FuT5",
  "key11": "5n4bj73FpBbbpnFsrnhefBwT1eymhvQ8yd91aC2pgJHnAU6pGc3xS4WinqPewj99hU9xn223LMY2R4ZaP2kn9NjJ",
  "key12": "3j1JfrLVjeqGkRniQtCbyuK37Fo9Xhnf8u5gQoobWZBruTFzqHLdx17krUyuSaTFpC1F9cWrQyStqhqJqP9XBCeT",
  "key13": "4gyTNUdQ3W1C5nSEZRuF7EvszX6bN5H1UZ4q9LuAYz57nM5uEBiESqh7H1fZydmNUZiM1XXJbWTPXnT2XBgjV3M9",
  "key14": "3U5Q8XhgNrszNKQ2BcoHjoFf6j4P3DRG6YT8CVwpvFTVCckiG4BBH4KsQL94dJSZ6zfiVxWhHg2EareRbwcLTS51",
  "key15": "pCkca1HX2kzu5KKj5pg4C5844UzDtYQxvz5dJVNEJjRiPPSD8SJGzpgpT84TiUezSpni374seTsxRwxXxHPHBRF",
  "key16": "Bk8EaPbBeV6omggfYHAdfL76q1f421wtuKJ7KYVCpCBkRZU8WgjCNLy8pkaSipYwnf9vRPqhAoZaoqdk5Eft3JR",
  "key17": "4ZHRhCyNXms2nCxputyyVjsV6eP14BcaQ6t1ZvN18sfKQFNCuL2G2m5b4bQXVoVmAXFYqQmNWJwKXoKkA1Q1ZkTq",
  "key18": "2c5VTpPQwvhxbNC8bjuZAmLw8rLfWpVSkTqLj9bukP2uQ6apXvb821in3jRyHQs2X8DyKTndWLzfXbob2wyhWBQv",
  "key19": "3vCFdjPSYzJy4qFDdgXYu2BSqzM9tokmHCSviyfrUn4kbELBdfTqreMRGNovLBsSZYrd1jZgqR4gbQkKpqoU1r54",
  "key20": "m1eJg3vFrZHTcyENgi3FaPraGinYoDfCCXcJsmVePmiKeSAg7EBZnc9aZLcyxfrVriQAbidGVmoP6uKB2sAkRYo",
  "key21": "4oULQtN8RQUfMHPKJzUkGcPk8n3R4LSqKQtLuqCRfGcbLCVNAssXdTeji1WyR9HDTiCbF5GZC8XxTKybNGLKZ7Cx",
  "key22": "5bvpnNb8WGZUH3R2qjanHE15SXvHgrXBtCLboszkpw1T5F2SvfmMVDKyeMLPKwnCt9QRaKAAeR9WTcdfPsQmW9s4",
  "key23": "pq4uQRnMHx38ngwpT9KkJxyXcYAFiLfdExtgkrw4U4DMpbNWwoAMQ6rytbDJXsUc3tNNfeWVCmcYqF8JNoG7wdQ",
  "key24": "Z7f5NS1Yyjq1vPfAZPeQm4YGdRhycm7oQ95DxA1e1Dc5nwjEK9XJzAm6BYD4wxMm4GuS4JJzhVQfkmqTS8BuKo2",
  "key25": "t5TYSEPg3F3NHXxLPBCaR3xK2fFgum5UDuep7viJWeb9bsYqBrBYQUgq8g6Np9RsMcYrwbCJUmM9TnfzixJuDZW",
  "key26": "2xa39KxfAXUx2fT1ohy8VNUxkfV2e7AsLdMgmHH5op9rfLEtAREFJmtpnesPCoGbXBzagqbs1awYsarDPQd9PkKu",
  "key27": "5M2uRhjAjNspsRXS7uGj2QY1tMY4j987kpvQn4fXydvKQrxXPgb3R3WYX4JrSrKTC5cW72QSe8sVeTQgZJ8yjUe3",
  "key28": "2q3TKC9MorNEznMfkXZqewZwixYWDozykRsRAyzW9MJGo8z71mFSP622awr9rQmo843F71453HAUTZZTFSm6HANE",
  "key29": "3BCGZaXWFgBW6rSLscG5paGeP7UErjwq8EsbCZMRQ6aCvFHXvpSzvWvX3s2QcfNDsjr6kNUFkcVuzyH2szUtoFFc",
  "key30": "LqzS5fEbJzTHULCAAAqFSkjPG9aM4EGkSjirJr7xQ994fMF4FdCNqhA6j9sXS74BwqZchY1Am6ACbiUANW4tzrg",
  "key31": "4mioRdubm6s7zDeQETWLCfKHxbktnyebqj7mVeZXxA4nzVh2qLMSjUz1CfXjpC7arQPQwPQ3UgcMnzogvu3QpuqB",
  "key32": "ZaK59pUeR2CnVHPFoc8WoJsA9QhJGy26V2aZFtBE9NbSoAo9Toey6CQxdCkycmjuktbvhLDjMBRwARMdyNzaaHT",
  "key33": "2HquNu8dqay2Rn9AQy1eAN3SxrwMupaDU1ds4VF9aU4sqDb8uPg6LsZsv3XLZhxxZnvm4a4axTNaPx6EVEduWt6X"
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
