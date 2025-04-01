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
    "4g1egDiDiv5oTJfL3NtSks5nMbQfCr5h9GwcMwWj7LjtJMQfXRZnwr9Cx45Loc8smpQ9eQ7Drb9DHXZTeAyw92NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPZCJmor3f6fAJWvZU8a6YSsHBQkESScuhVP6oMFmBDPd7kk5Tt6LY4EzFJFh7X4cGeMmHJToNEYwbzQzyXH6Af",
  "key1": "262HfDaqMVpYiHcRuQ1DFJaafd6Uiu6J7Er1vfQGe6oPoivHcSz23GM28aeMfNzDRRtsoUWHSQzAdJtN3NKj2TvT",
  "key2": "5JA2iybSTirZEr2uq5WKgy3SAj1A8B8P5rLhdbauUVp4KCr9qp4sn5R8LSv6Um1BuTnrv9EqW9f9iBEvirxqUQu8",
  "key3": "3NgapdgLWm2D4jXau36ySnVnhK2dvusssZBkB2UoudBmMXq3wKXWoCdySgJh8B5owb4kRPAQgtfKvMW4NJ2UCYEw",
  "key4": "3AbPs4DiMgawo1nEcLGGHU4LqWjvJC3nQ48hGsUmgMh4a6uT7RrKsA5jjwYW7K9yui84D9DMeduob8VEzaKnAYL9",
  "key5": "dXkdrMyDAmKvYCjGQk3idRuMfNGWvmrPy4S9NdTECfF6qSgdRYHpEMJcyoJquQMAvHYfTgxqanKRK7iNAMgvizR",
  "key6": "5qS16ANG7pshk37shME7qgiv6kjeRwSMPc8otyT5UnP39oKgLi2RmuoDQPpxm7p38uYSSjTrBwQzZoA5fmB5eMpX",
  "key7": "2vibRoBPqe2PbRhYp1GvbXyZx1pfFXpGGWyXDpfcgR9urQUYMN1drtbDnQAEbcvXHfJnBtF2P83KfKkGoF8gbogv",
  "key8": "hhjCiH7XThxSseEjozagPVcDV2C2EodJRW6m6yE56kfkaZXH4tzi1bjhcJXxjYkQ6xcwg2SUFtycYaDXBgJXxwj",
  "key9": "3XkbfKHxGw9eQ8szdHTfBbPi9SwWon6ZAUrqBAsvwN7Vz5dhMakFMN7BGKdfKHuHBmFroQ6dZ5WZjAufZHjy1gnK",
  "key10": "5T2Ug8Wie3pznefCpEaz4Prj8bXKfUHpqdW8jekMSDzB3B5uZBJTfvLor7sYGDD7qhpj4npEq5ch9HzShiThHugF",
  "key11": "66cAnhk1QRUg1XwCc82YFf85Bg4MQkzYBD4frD5axmB58yiSHoGKdjJPDz8scRFWPKT2VHTieAx9X1zMMUbyPCuj",
  "key12": "2G41gCtpGMovePukNuzy96kofSAWZCDdGHnDfTH2nAvgZU2xqaHWH1S9WUbs4btUxkmsq6qtxGv7e3vbj8J5NNYw",
  "key13": "5Z4ZmSaZdwQHy6yRnZZq77dDqQ3rA9udeuPSZaN5kCJ5fCG7jNuJM5GBRuw8n9MsLGHzdLCUDns6JVmMsPj7W4Cu",
  "key14": "4janHhMULZbcb9svZgRfJfdAuRqHWSSTHzkmBim9qAbiSA8DttYGrECHc1E7jHZBLFwFsswJ3MvXbUunyR7f4s6f",
  "key15": "3uoLff3S5xtn81LL9oC2qJQtP3BAGK1Cvdj9kVeDWiXyTDkf2j8MRrjTw4GHhixGFzzkfdfRgZFsB4aCnU3CDHSe",
  "key16": "4tAE999R4gLJTuSKfHkhhGhdnHK6NM6NU53LcTNGe2BBzxQ7zRCWnwxoi44BGH5vGmNvebwCLyTNWKjmQiKzy7M5",
  "key17": "3eKHqBuDErtbzLDsXLtEpsMaGANenWZ4E2zGpwHHHTijFuM8mg2QL4oYTuW3TTxXBQpgrRn1aRHUTWwyHGQigKvZ",
  "key18": "NacFSATHnnC566wHLghUyDzrVnT9upfrDbHQLXvRnvTQBULtthkgbmu1CVtzhPBV9MQCVLm6WJYL2bx7GiGwD6j",
  "key19": "3rmaw99qE5VGSFuoMXhmAPNcfxSP7Cq5aq77f1XKMtjUzzFCAknN3MUbom9drEVaQWpC1EXieebyZS7XTDqkUCK6",
  "key20": "59sg3ihyEAYLgTd7qvpntBHaEmH9JdLrcqG1WqrSJghtVP5WHXx7g8gpDuaoBkV7r5afdFGkDuXAsDyFfpfyd2UM",
  "key21": "35YKwt1JnHegYSYsBtkp5uE2Tq9x9gbVJkx3Ze6tGdiLvyBBf7gZCVgu6DRj6ths2R14fu1Q8Y3EJF2Bot5iwF7t",
  "key22": "oqCCe2jDK8GxUuZAVH8getrUGN6D3z8E7GpaiYr1sGgiZBGgMg8PSuGAw4b1C1YvGMs4gMgojN95gwHGAaazTig",
  "key23": "4d41rozdMMLWRgpURrBQJYrXTK3QVY5LG8BYdwMczhURbviV9xbhGprQVPjNZpYNwJtUwRCANdEXDsyRvQroTBKz",
  "key24": "2P6mioP2kuxCrNN8WojVWExjox9sgUwLx8TFddN8mKMVwpRpLUeFMYKRQPEEbeYPpPFLdd2YhYqCcPBZRXnBUEWn",
  "key25": "4H5HDYwLQJV1rQNQCTFmZ5dGQpjnGP2DRfwevgEEgXsSwkViTNUudB3QGgGqc548EtA5bNuXTpbC7jwgeccsGEpy",
  "key26": "3MjzSBxTQwkVu9KdVMqSD1ymYH8A11YCdhoAMU3h77bzyCTUKRSXoZHsjgakM1tRDmQD7SDiR22mdDxjPdJvBswX"
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
