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
    "W2hUXdvExaAkLx9zByZC6TBNNWt9PpeKxhqiiW5z8s8JmY18EQybCaANZBhWNjoDPqEYGBKuDs3LZwysxRgFMk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZtRTxKwm4zFAYUEYsoHvgVxvTnMTQy5SkbSV1iofuEv5o4DbPr22p9msxE6TCL9YYwys6mk6TuZZSSGNfmKEJoC",
  "key1": "4xxRYWbwGmcXgsFwHwxwqgPAuG7Q7f31T383H8uyYJZDSANvyNLixM2UuQkFq3dpeTSFSCjkSyEgCHDWWikNW7gt",
  "key2": "5zTrrfoZZ55LhYY8HE2rwATVCwv64ua5o5NwXmoGYn7vQJ8X2XV9Mj3rdiAdt3y4nopssJQmMB8roD9QPgNdgi3X",
  "key3": "4PTPU1xNpCTwY8ZdNphaeCFqddxeaLsqNt1HqZ5BpGy4sDYoNKjBer219DCfrew1kAzCm7sbfc6DKmFx9VmHFaBY",
  "key4": "24A7jjemB97FeNowmxQEG1eks9wYz5WWC5HMwCkGFSWchGfHZztGTs2gQTQMDs7wPEesQ6SsnhSj9kRGxzn5ZXkc",
  "key5": "3CBvLFJiHurbvcK123orvArJtHRx3Fztq9VrjvVGnh4Y4a5uY2NhYTEq5u95aGPHukDpDFYTyZNbvueoSBk5pMTv",
  "key6": "2hG7U5Q4rfN7vj5HZF56QjD9yQqqucwDznjmnfAXnTAaurjhcSapXpasiiNF2bL24pK7TPutpBGQXM6GD3k1sTip",
  "key7": "4mN8iUKAiToFkohgmWhFABQZuVsBMF8GXyTv2BYWFFj99eqjW2cgcxqzqmqVDWneZbPUVGPNJBmDcXnA9VbDcKZN",
  "key8": "4Q4wWYss65Vx5DcrvrT6zmqHdvQaK7RnqBwwkfChjXGaL9aUjwHmVFxTEppwnZjME8PbgGSxC89T1jRAZXxqNEV7",
  "key9": "3TRNXotZ4h1HiGhqHgRq8nZ1bczMtxpJ6a1zf99ptwv9h8ZrvWMbYf6xzVNoXu6xpjrteYGdR9UcVjQPnh9TgDi",
  "key10": "4WPSpZd6PTX9HLyUm9uRsPmNygB6rqJMTvoYdpDLxRCPEqVfibDyrUUSvoKrfn2gEkM7YNAPdKH6Ngv7a4MkEv94",
  "key11": "2zjdvn12BvtYDHYuk6oaihAMUzKbALWPZd43zKWEDaZ4gh5vnPiWViC4ceNoYisaZQ9y8TfYNLv99dhBG1bgwwv",
  "key12": "3BfSE3ZyDUVZB7zPLat9ENb1Q4FrhYX2HJEimsBWnGt5s8efYg1ZS7mohdvaNnu25U6v7PZBXMyB9tD7XeGJv6is",
  "key13": "3GTVdCvDWVJgtjXuTxAf2ZSBNqZYqs9Fdc59g3cPSSRevUdQUKH5mJBfWFD4Ua3PXXHKN8rmU41fzudFEnXXatoF",
  "key14": "3hjJ5AR37EPuziVi1VX7pme97V8Tbqkwp5Uh4syAKKef8LFLB82Z9haXumP8eh8QcNJnrz8xYk9nmBNFPccfw2LP",
  "key15": "3YwXiJFdrevMb8NRjrxWcm4ELM5F73cVxUchoEaWX63pgQ58Zfy9C8Rn7WGfxKF3ptvnHfFxnD6ALQf832ytucPU",
  "key16": "3hNaD8QPfExmDfBGkA7jboCumGXgaKgVbg6CoCNTNFwYyhCDyX33cS4oTvv64kXtZKpTdjyCjhbGiV6WBcp5CbZ6",
  "key17": "VfrVvYhXgVjAFCevD4LP1i7kNcScTcWLCVuxj1ZKxKXdB3sFdgDhHw45m9GdxCmBXpQE5bjeK7jFeriSN8C7tii",
  "key18": "2T1Jf5EUi1m6jhCYqDGEmFBG9oCNA11rX9SrbPgwmVUVQwikEMWkN2PE2FNesYDYyMgbaBhUmiHw7ez8Rw6QoMRP",
  "key19": "2z26WAQhdYxqAt8PFMfHR63oqzd53ddPLUKwBrP68t7paxt7UTd5QCFjs43ByLyiGntwBhUjM2zKEVzpUbqEYr5s",
  "key20": "4RMALcF6JpKPPQgHJFkAp4ncKvCkqBQmvwbzsg8aMPJcguFB35E8wDs2aotZrGSftza9hYMDG6VaxjYpoCWrJ8N3",
  "key21": "4us6eSc15kDThpNX4QQqPB48bPn6dJGz9bsG4dStXB4657cD6r5hXyYk9Gbq53nckLfh2Zg1ckBif2UrbePUWaoz",
  "key22": "4zdCTBRy5JtywFk6dDTjn83aV8bAf7jRSAcXMLRhUMEgykyrytWWUBY9FAaXz54fwmAU4XFGHt5Zdwv5z7sXZ8CV",
  "key23": "5EQg2m6p7eDV2MtAbaLJqpNuGiZBog7kvvvhBe5AzNGkw6NPE2Pnbz6iGtwEETCV9TtwrJVqxKtktafZXeHxh72c",
  "key24": "4RzmXZv1R7LYKkpMisUwRjd8SMqK5nf9zPMUp18e63Rfjmn6TFyLB1WxFbBot34h1uhL7tDuidy3PLDT8ifha75e"
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
