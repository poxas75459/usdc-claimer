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
    "4K3Ez3eNMqMiT53N9goD479tVV77sK1zBrxQuDNQrfyhUpUrRkgdqwXpuwwjM2YvFz4YD4RVz1kvBJGzSC61rCKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ufLtbBVTj9k4v5kcFb5ZQzWJKtxT2ts3cpbokMvCGSmC2PvMCjUCrSFhnKdsZ8DGq96puV36iTvjSFEq7d3kqAW",
  "key1": "3pw5r4gwneiogFbgWZJwZTvmtrRWMezRGbWYcWkhLqq5KspgyPKAyxxGrtdXRf1zJGtqb2nphQJaYA5dFfQkzPXP",
  "key2": "J3GNoCWTf47mi6vg4guZcSeQgtpDn6s9pBr9ngaccG51mHxVMVzF47qMt99QoXVskcTSr7JixQ12ioji1MxPbod",
  "key3": "6RtvWGHJKLNLNZEzDUZbcGQX47DG5URpTsVxFmhnUKa9AFVQ3ZUNnk7X8veBErXFzUpeMPXGAwxFpHUgWZpc6qw",
  "key4": "3uyUFtVWdZaMJgW6qT82ugEPtZ1o2WMXQ3UCKJHgH3W8w7taBShJQMqPo4qAoka7cjbdhXGCPK7XNMRLqGLFxjGG",
  "key5": "2hAKK3h5y2qusAQfBUyDrsYSihpfmXAVnJVcYABtkWU9VFZQrkpAwV4Jy27qvC9C3f5m1vXosxATcdz7iiwkna9p",
  "key6": "4nkmL7rP6bBLzJvp96wY1pqCU7WJCZLkt2v4jy7hfkE1aRDzHHKiWAjfttWn8KFAriNRMg3R6RWFB21JaBCeRJDD",
  "key7": "565pGmYpgGusq3iJMNmuRvS1JpdDWtDxTWYyF2vpSmJu6EgTWwexr4pVixWpN3SJgq5zYNeo7XKePDAkcCBw4Vxj",
  "key8": "23U1bAVdkUeCGSgvLxwe3YwBMLEmAiawFsdoZh867LfwpJkh2uWnsJe6tNMi9X92vm5kmprvqaQr2we9GANQthbV",
  "key9": "4wBj1hWYCqCCtEkAZtamxnnJ9reSa989CHLDR7RyjS39xF2iqQFGgW6tZqnegtZ67G3qS1L33GN2SeE1TRnZ6d2R",
  "key10": "2FuNWwZquabgkkfHBQRBgJZMJXGdYhYxSPPKcYwg57SjviMhZ1o6EivmTfcTKynSjWjFVCZj1NiVg5CuVHBBxwRU",
  "key11": "5B7XFLBEaepwgzE7ncrMjNC4snrH397pkB1pcKjspZA7Hpgew1cqStLuU1hazgN3a48SZYbmt9eSyJRbqmTtQQH8",
  "key12": "TgR9stcQ5FGvsKEix9nw1HG8JRAqax2ZK3Vo6uiGxYDXZ1XbbfAM7MAiPRne4uUSUYV9znQbhz1go7PTt11dLDN",
  "key13": "5JHZ657s7efc9MK15ynWidNcNcJkrK5yztzGJszoGVN3tQU3UttLZQSM6njx3452kemL8LjxUpnoyNiw8xgAHdLA",
  "key14": "2XnMpS2kJcBw4e83pQ44HpU3s726tZMbN483rgTEDTzXDuvwgaGCsoedRnKoXDSow9SXyBESHoDTDEk9etQcbpwt",
  "key15": "64CyR2o6E2sv6CbBufcUddN7MvidZasL9W2R1UzLYZ93eWN7vbYkPeCcar2QxxqPAQcW8B7nsuf8SvqCfDmzqpEt",
  "key16": "21viRPdz9F89H9zjAZxg9fcLqrtxiNsoDii7YkimNtGgVusp2dJ4S5aiFceZ2SmwHmz7EwR2Ft4jWsJ9qdRwGRCN",
  "key17": "5SsGSsMuLZjFL2UeKG555zfrfZLmfhKyyF8eyFoLRnewMyMokcPUGNVTAeNo2pRfz94BmSR7mVsY17JtgoFNxeMm",
  "key18": "2kfhUqFYaCu7zUtNCHLHU4MNu93UjFfa7qTgA1MzBQUdY7U4HBqRMHQp3r5NwReMYF5fmQG4Fo88WXKNdkxjdarf",
  "key19": "2Gh2d4R8i9z2vHXDwNpfssp6JQbby7WPkCHuyfNmVVvUHNAVewCP2mvUYgBdEHF5NkMbzXM58A6X1putfvxhgAQe",
  "key20": "3ciNCvvqSPb9QwgcpmEVMmJM6aC99XertwrX86cYiXpzDm2e1cjY1xDNdGE75WaYq4Pg2ndyVBcRPKo38Q38vsuW",
  "key21": "2e1jyu6yyXG4i1q7HrcfpqnGNUhjKjZD7Go9ey1pVrYjKA2tvfxnYJih1dMi4N2FHjCR43rtbotcbmpU9ctMsnPG",
  "key22": "2tkU6ijPn4JuPNzveow4JyS8NdpNvxGtpBzycVPDBs2zBCbNtpESm3v8YL292mHyLHEBP8pNEqjZSPgA4WeP4HjY",
  "key23": "4ojS6hcfhe8SfzZ6t4QnvoWXj3RzkPvzDQ6rYFaVuD7tZhuB6vkXAXd9GH3QpttEw63Mn13Ta15Nbbh4EcCqrxAw",
  "key24": "3VqtfoUHKqAzCoT5YSRPCFi3WMhFF5TCxJkvDzpwH3fyoEiroJx9AszKbbRJT5UcKhZyDCMxhuetxzTMwrqjiQe2",
  "key25": "5sbyGaXiT5XHoTBahBQ8645JPeQLTytjqrPy4yTgDpRLyBnSLRtHcWhp5jsYR5wojBXZQCpgKqH1NC6dnzebdnRk"
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
