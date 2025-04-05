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
    "5xtoVM4PwLQrYoqxkka5xDBK2Y2z3NkYuZ8WgMH9UiW4FRFUtpBrR9PdZnyvnNErXK21djs9Pi5tiGbFjBsWkVou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2LveYdD9StxvBVXQTFQRc8y6X7unUgukAVkrnp35HieFgoYt1eqvd3WuErcef5UybgKn5jpU4GjBfcUYA8LSjt",
  "key1": "36AoxLGgjd9u5vgz1kCWcCe3F7gQZhudsKChbno3CVg6hKbsQ1Lm4b7tYVLmpeQTMJLaxRUjKh3ePNA3WdXmGPun",
  "key2": "3xZx4f2d1UohJjnK4yj5Z9bLVedWQvEp4LYnMULuDmQYAQG37vReuQHHEynJgjyzCJ7y4Luzxjf6XgLGXVeyytdY",
  "key3": "3s7HYSvVwRRHpo4f26UNzqDHVBFwjtSBXSYm5mZ44NUqsmcduLWeCY1qwP8FZhtDeaTHcHkuH8AvKpe1pj6sfQsk",
  "key4": "74tYmBLrZmNodW25vKcNioscYSarnHFMEP3YcZjRRE5mYWmmMDEJGhzEedPxyW3dyNT7dc82h43QPCNBW29WuQ2",
  "key5": "4pMFWV3VRp1MRYwSg1nuYYK9dZKiAYMPu9ZYu8RQQa58NxjgbyP7Nt57JRLhVK6juFjNLBcabni69SKZj3z7yfjL",
  "key6": "2YH6VPUYuaurZT2snvaqkD4ou66bWyNwPhAsfF6MaVP5qvH6pYdH8A1En1EH916GTjXch3ranDXJJz9x7L5iTcit",
  "key7": "5UhK9vkM5nMHTR5TQCGh42HwwWnEH5fYCr9sghr3rKWw7L4sueDLSA5ojVdU8xgMGkfpe2WoAGcs5ZHgAvkhqgU1",
  "key8": "2U8mQNTVsC1tqBXaJ6Bv55bvdCaCgyYkvJ5qPpRe39xTP4FH9Fm8DwBwQb1zWPoKNE7iaAm8GzicxAGE7oTvWo6c",
  "key9": "5QUD3zxHXDseCBiF2aQsFFEAW6BjmL5ygtxrhgjzVzWpZid899AyUXx1Rncjas1HmLcw51jhZp73WvuivXZ5Zufa",
  "key10": "5BzwhCrgCrLH76WqSMF3dM6Cab9oeuH3nY7xECTPYiDKSA5CWYQ6fB5wbhkaRiM8rvaNuMUXjjLmTnJE2bmdmpbv",
  "key11": "3X9nFptny84FpHthWLGYVLnvR8aaLNiH3Fq9mt3JfDp7jkhvhJuW4ji3fcGqAG8fcb5VLWuoEYX4o8UAc1uAov2d",
  "key12": "5XUdKMgiqDXT6z1cf1XPXC8Xr9gTdeDM7ajftin5uvMPbHTcZirpBj1AKu35ddF8q4i6ZgrafD59jf11o7pRrRyX",
  "key13": "3c7uGoD5agXQ2r3jpZytYUWaK9oyix4jkZQUDkWNpsvuty5fSKutmWLQMimWEoBQwgSDBjAV1eN521e9uFmMeV9J",
  "key14": "3qskHqoqBEA7YM3pN5j7eitcaWq5jyWe7hczFrQoSAFJhhyS7j5X9A2no4LqCb9eWbTF9cWo6zN1bx4DNtYvuB4E",
  "key15": "2EsEh1PjGedx3NfxnWJ5MrEvbgogBLv7Ab3BF4Y8XAJirGJG13C5G4fUq4T9emxPcrjGDu6TuAGxx6WVMyju8c99",
  "key16": "xZ4LEVUFirYtvMNA8V7BXixBayx5K6DEBNgQ6TUjVZPuGqsfW4VArWQGzrLgjjqg9PLYAntU5D7Aqk6HieSa5tp",
  "key17": "HRUTLgMdbXnmbQZKmbfsHQxtjjqzRnu3Rbvz3NCLXnqt3PZBFctArLzzE9xrLgndqmHcvRqrifEfRoJ118Um6Q9",
  "key18": "41bp8JbySMVVhPoZ3CEg9LfYnB99TyQRmDHfucXWn5XAYTxe21BfZMcQzFVS34CvPTNqk4BJ5csZ6nSfdLAkMTL5",
  "key19": "58u7Hqtrgj8gW6vyzwWde9KrmkBHT4kEZVPKQRXPCt71jQzpz3Xs94pyBYzzqEeVjXyLLjm7y2Vo653SSbytBgM3",
  "key20": "2LB2XQTALDWEoXDZkmpnn8pT2kt3TsK1vADd9hcJ58Hcu1yXMzm722BArcaKuNfMx5nfUaVNKZXtWC74eHVJ1QLj",
  "key21": "2uNEYbu8nz2ayd1gYPKmBMpH89qQ6BdJXeR9LrfgX26sS1aSUGc8rtWWbozWJ2o9vHvBQ7v9FUoJp2PKLK8UPPa5",
  "key22": "cPRcpkmgPeKBT3d6jKa77b5YrFuv7ckgJHyhoMJwTVKj4d7bnnzuksFrdT4UAhWqA5UuXdQ9tukSkCWw4HyP17M",
  "key23": "5zDx378m4CWaLScrPADoQ5hpXqL2Wh8CoFeaX5rRkqqnbp4JcWLvwdzKzcLUzm3FJPD3S5m84dyrYbtEd1Zo1jHW",
  "key24": "3SGVstgzTmnXFxeJtpwfnsDda9SkfSUYdzyFeZQ1QCiaSbm9VzHVF9Ath97io75WGtbJR1bFK2m9MuD8jzz4fFCp",
  "key25": "32ShzBMr2YuChPLAMnH5x4tzpLbxqavCHF7c5o7voXBMcDirAWshxXGfkd14P9VcuEcAH4Qbm9bHsLufxjmaQqEK",
  "key26": "4Cb8JJxkuvyDRW7PgwRq4xqSXRTUfXvC2gQTDjdbT2RuHgHbxzCQ1hsAUnrJ5unsWBhEyU5xx6EPbMmm1ragpvDt",
  "key27": "UKWkb9U2z7JLMEqvftGDdjhy8HeBHboXahfwn21Dew3q3hN5PxCLddEThPsJ5xpwiR55LsNLz4GebjznTckYcQA",
  "key28": "57ZQAHHHasx5aEmywAAgTVVvxdXpeMJ5AL3f1QYaT1Rg1ZStWyJBPpuiHq3TsYLTN1bnTqxeGt41ajQC5gf7WrzD",
  "key29": "2HRNGXE6eySyfuWeLQtXKLH2G5117TwKUAyvLjcu7pQUQufoZk5xqVEhnHoNPAxLzGkrTV9F8bL1gmUNJkP6nQUa",
  "key30": "SHuN3LPxvDwFSF8nMa8gaF1K5zFUdbskT53ejLfixQa6MJV559zP6QQN34SvtRNSU1WdALQvFNnDzGB6geaazSJ",
  "key31": "36UJ2KHFYk2MpwNLokyuoHGur2vmjKtCmVRa189uti9afhpunTPAYj1W6YhxWWyixFgcG67fXS1kde7twhcMNkcP",
  "key32": "2KUtALMZWDGy3btYUaJXwHKpKdLcV8Kgbs7GkZUsLREfHxmJZc6ji72rTM5A8gBbRJTVLrAn545WfUF3MExmJp2K"
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
