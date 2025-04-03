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
    "2r9JY842CzRvPSLaF39TeSQ8N9AqNLvyHPsR7WBThANE2z9t5SGQdChJRnNtjR8sPLPRzEGryayUZGHm2FyLmzSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Qy13SEvWjZtYNbAdNDemNcBZV6zKbnc3XoDcM8eMddgK7jfaW4F87ASxpSwc6Zq5MGSG2942iMJmkLr68FGoFC",
  "key1": "5SsHn7jE9cTMDPtxrvvRav57TovAvhJnt2PmtwbNae5Etq7vgJxixLt4jnKQjcwqCWwChLMCWZhRR73V9AfEwaYN",
  "key2": "4jTiVJ9Xu1aSTwog7NaK1612UQdtCR6AswHXvWwki6FvkcWBp1knvU93rEXsGCzMGjrttRmGFkJFSFq3m22UFUyh",
  "key3": "317zCfaxnzNjE1P7m3USvvicgtcZduDgg8Yyn8ysiiB4tfRAgxXturBDVbpaFMRYEJfqbShpHZstWkwhyixA2CDq",
  "key4": "5ojBGSBGeYr9QsoJW8HnUc53rb6K31WvHFwmvdX2dXQJhdsHLMx4DDmhkEzRdywwxurTjnUcvXKFP8AoeDtpDEdP",
  "key5": "288Gqrma4bTJ4brYKciZJ1FAaX9tYeJdjUm8hDZSSDztsN7yVqTCUMzH784D9qYTUHHVNDrpPLR7nhCfzK3qszGv",
  "key6": "5Wa1XnSD5mmQ4UZaJRtgwvDYNNbzMB3iWMtAhccoYaG5nPu3GdxpTxQuoqAfCnQBqjMTQ5r5ytNQe4B4MMaG7osw",
  "key7": "268AhjPLTBVQxpBhy6oDMebeA2gD3BNNucfqSmEt6DZM5SfHrDYak5Uw2QWPV2NwoG277S17PA78qyJt2pnNVaXU",
  "key8": "5gPaTQu7LrXZxnpH7w9NpGAGEP9DeZSRycwKRR5wVSbqTWnpsE2ivnqyuasDQ96SFrEiAcBYBzkvY4QsMqQf4LqJ",
  "key9": "4xRQr4xyqnQG57kd9iSLim5VTckvtoCM8PfPxqMc3MD3qvmcdbzPfd8WSHUpnD9oNTpnt5MEyMDqVFqY9YjrTSbg",
  "key10": "2nyFUcuRkNT5BLiQXyQqEoxH2N1F61146upJpZwiAcqQiigm1wV6CSf5ETAX3Yx2wRAUFKcG1YQfjkGjGmzr3vyL",
  "key11": "4mLiaVbDCnGTgKXJtBN5wEzS5YoM2ZjcG4tZRX6MHoY1AaYvwR8vMPaQpLUFCT7mbXR8SNf6GYQcfLrJGUWzMPjA",
  "key12": "2JUeyssQwZkm4wephAJK3AmTNxG7irfZnjTrYrqnKDaFZdzgACYMkgJZJ3NXYGqyZgeektyKh5vUfwBcPgBtSZaS",
  "key13": "5NnuqXpWHB3kbKB4BMyPSYnEfPKksW9STCduYMiYwZLCJqzp3famnLZ25uMHXKe7E63H5AsPtXMphXmhLmbP4no8",
  "key14": "2nAXEVsAZ9hcinZwQtUZy11sCRr14nzyQ4L9UesXvyfBJSBKqe4dCSptw3ZvGnPTa2FMXMyDXAy2hie639SL4EMq",
  "key15": "2i6ruKycGLNPd6zVjo161gqC6ev8VG3L2sEQw6Amt4U1EoURNsgd7mfMKMbr1JaH6pG1cLr4rFWJKAyBPKuY25Xf",
  "key16": "3T6orUUo2m5zPo2a2vY1oCrR6Ru4XAbrnabuXAyTPDpcWY7iKp256nx6rvieuEKN8uTfNqJnNwJCezY9Skf4QZa2",
  "key17": "mV3KyQbWSicanf6SHoFzyt6oLDw4jvcFcLyhJRN49PivnJj5Ku9wi4wbTkJxQprjUoUxWrdiUfBxnymPbVqT4Lg",
  "key18": "47yjhPzGzubxchiHVMLoFYKNUEye5QyYqUdzwYgsAsSE3tERZXSTZ5h8x8ZpexBCs5YFiednT2EkvrKVbHf73sGu",
  "key19": "5CB9BTJs28ZrVaUZRtJwAPt5zTdhhWf4VrXvWuALXMzHDbkhmFJB16Yc74ZYYcixHf4LVkZT4615YDCjU5pMrDC6",
  "key20": "3ssPFKFtuBHsAUYSxMW3vxFLPHq9iXxDwNhnG6kE8cARN3ATVVk2RuJrb1ZP8QCnFotswSf1Mry12zsVRZJoovPN",
  "key21": "3rLMyLw2gEBcWPoqow1oVjuT5w5pCWDSUuigRQw6itEFGxRHBj6sEWrfp9Knt5dii8guC4xwAJxKoM5kN3UKiAis",
  "key22": "2GGy6B8uqAo9NifQVmZzMepWLnJpdowsmERi3cAWpn9oChdkodtcHq3vMmakP1WmZ5wYcehNcMgW52gzzFjPzej3",
  "key23": "53W1QjhzwyweqR8QSohvu1T9V9Uii16G8sii9ysvWubReuqyH9t2ETQT3w4cE8Y1mVh2TGEHDHjFcA2VrCC5FPDF",
  "key24": "5AJYiP2SstjcWSNLVphBuVQ262XET4JA6yJRahUUARvrPVeHZ3Skxmf9FcnzLty9rAkFpFi25zLmRFbMiPPonTZD",
  "key25": "aLvtX2xggdkCQ8az3N8NLgGw4ocAFiCerQCuFyVrQzMDKfaTGhtESggoSicbqDsaeihHTTPT1WJFTrGMzZSoTCY",
  "key26": "553SUCKb6ngMtNx3c8Z27J1EGCuRD2HcZmAWa8Bq5afQQggSof4SwnaiqJwBqJ7hKTi2FV43w7UKwEtLrKnkhE9Y",
  "key27": "4ENz26g2uJXB3hsJNn6NpX4ZjHvJJr7P8PCF7dgwycxeBZne7t9K59xmn5VYZgbcTJg2nYpZ5b5PMPLucRKuNfTt",
  "key28": "Zwxyrvt6ZvYhR9427727Z3jYVu8fCvAWaoySeJBpNBaM4n1CcKEfLMeULMae3PT6ARUQqYwhrU9Etf8hGYPHTJh",
  "key29": "2prPXxue6xuujgCAfexyEzVb9znMSe52FMAACi6AkNAEcWWjPmM1cktFZf3hWHLTNmT4PqGZY1nq9iRMNtCGajMf"
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
