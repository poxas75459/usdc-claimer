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
    "66G9NZad7RRPzXeAVjsp4iMqZVW72gUYCRJa6jyk6GwhxMACvVn7zqwFHCXgMtRPZoq8pYLPz9kq4tnSePiQD3Bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CvswgQMCSC2eHtBZqKyVEe5999Zx7oPZkfTnrBLDHokxVrq8uXQDHmyaDxWromCrUKnLUVkRPRMgHDgpVDBQ2FL",
  "key1": "2DfvbW9t2jkGYRZ9QyPC9QoqzZb8QeVvNpqtuovseU17MxaX1ep4Qw3rmwaa186TrSNbN76jTrPPABu7E47G8xSw",
  "key2": "xa2UyjnbCJArFXQMisTv4zNqzi7je53o9DMUhsyDA725K7JKmrj3EFcq4Wocb6eUtGTrGoycqSPPPpnfztnjNug",
  "key3": "Le5GwBtCBrVgPtTa4JVtWgPbPzBCjB4xj2wy8eg4XJHS7k7SGZ13Jt6yQXXxVFDY8T226zbwB44TXS52GZcVTCG",
  "key4": "2FssKCfHi3d7FdaZEvWRPKjdawsKDXFktE2zz8BnHEUNsgio8mCWaTJQM89wvRFDYe8g3n449YzVt9K585ZUYZ4A",
  "key5": "2J4q7iV3Hd3Bfmn462yF5dMUAKMcEZd5xNSaq145hQkxQ8AE9XMdGWS2A3RSbY1KgVyk6DHjdGqYCwL4t6GyyWaZ",
  "key6": "56MVxr4Sfn8zA7inzQCniBQno6ANXKJnE1FYgoeUG3Z7RsvVJv4A3pYErTxVBdFtVj9mpUDaz1cSKgy8dsbBH4qo",
  "key7": "4qfi5wU8cL6VbE2MjkCaEwSWLzWmiaWGFznFWcNYvZHhon8uJzcrAmkLXVoVq3Sx4b3YeH1nbbygNhMcZqwXz4E4",
  "key8": "5JER6YRxzriTgC29bgEbnhRGepy7eCphS79DFMSnGyfmqnfi4xHv1CvMMkADYp87By8Y3X2NyLe9efK8P8Y2xWZL",
  "key9": "2SDuL6Qht78yUjfNstS7EctnYq2kHkgWxWRsaj9uckhkP4Zo3QVSpimLefTeUPDbd1Bkmx55xHHJjpEJrvn3Y7BY",
  "key10": "9szRmbFRg6cgSEwMqEHWymU8TJ3Kwg3HBrQwg345o9fTGkt1iNQDqNdAwGCGPMaA5nFisq55cwAgfUzXtWfnSUu",
  "key11": "38ZxnE5BvZYFDeDyDNN95L9LMboWXkG2DqzdB79JdWYQWmzJVnBQpjfc5MWz9WycegrGiSyXMvNQuaxMRh2dyDh8",
  "key12": "2CY6ArQnUMSj9SNukeXWFxMd3gFBjYP6K7h496x5fjRpKPAGWUxouEzdBAcfHJAnRW6UX3Tj1TS3ZwUvNYUKipVH",
  "key13": "5Qbgr9CtpQRn3vz5t3UiYb8YDvyq7HgDXkCxyjkxwA8i38uR8KPFmXvZ1RXQ8TyiPD8MFJJeaZHat551NEJhrVLF",
  "key14": "3H2DmK5GZJPnkpYdQfanMt2NAJvezgUYRB3a6oma7fPMhb4qVZ1UQs7b1kwUj5E7zvA4QC3wgtzzD7VNngc44hbb",
  "key15": "29KcAUAfoTapDQtjxDz9tBSRhidQRYD7pcxS472gZfcFYDc5MQvq2wxwvZ5FBVcWqHNKGvZ98d4NrXowQf4qtj4G",
  "key16": "2wTGGCUBYL9Aj9S4n8XgTgTqT4xMpcsoH2ofLAfgi5B5nifPz1i4Gf1anw9Dk7i5xod3eiVnsxkTf33fXxmx3NB4",
  "key17": "62zWSHQiP5CP5XckJxdWR5HShAAasYzn99z9TREvmmDZjUbTnk8Z1uuqaPeMHC99s4AhZt7v5dpxB1mGytZQu4w",
  "key18": "pCkfa2bKf6oxXdfUJa2B1VouT4KcwTLTtaNjYFTAN1Ug5E1tyLHf3yKKhHLiLGMyUUTwxHiDDNjgYxDuh6N8ivL",
  "key19": "3KL2F736F4XtDRSzXACaPgXzS8272Bd1WjzmiMurmnja2e337a49rjWRfqe1qV3BcdDss63MhjrXoFDnDwZVqqL3",
  "key20": "3yXCWdd7rBHV6HaKWaivPCedyfjuR5CdFJYXzS9qy7GX7qu1fmriTQwSq4urAFsWV6VJGhWvdCzAKQVrffaPra6W",
  "key21": "2XUsdPmFXX9zeD74VmT8b1i7vgNSnUjCtuaoa9yVb71iq6huCfcPcYxRKYoMC1bdxnxg29wqSxHEz4jhe54v72DU",
  "key22": "5MjNzV82qUtxrSMuBE9aYuNYbxvpoGSUq7vg6ExaYc6Ycsh7mAUqPzk2RGDw3mc7688kBCbHgtYYw6niedd6b38i",
  "key23": "58uiuUpRxKWDHoeMi9wvXCMcswJLFfZn5CUNp1GBDmtVihvZBWEcYbk9wUXhj2iCdTnwBUayZGguU2VXQwZfZ9Za",
  "key24": "mzSSaGVcjJSPvWnNQsG7HnCA4kRwy5fWCGM7PF7nRgDqEn84hfsZNPmYBRd4sJCgCbf7kch6pLJPrhs4q9DwZKf",
  "key25": "qEteXfjSbofQuqp534FBuVazJKU3MuuxVrZ6unXLuhQD2DWquChnhQ1MBD1AioTX9f9xfRvi46SJQvvU3iFQPgU",
  "key26": "21BuVhHYnKC5MSBQxZ8KVSi8Wn7XY9tiEc48MTCaZFXKoPq4Kwu15BfNoBAD3sLztBJ2F4xEZV8UcRq6ei2xDVzq",
  "key27": "2rA8vC3Yb63mYrVyXr1JLxJmMY1uLj4vPKSdRZ6xRmjh3K4d1J9ezyn8kgBQcjayHeG5MUc6efXRdrUrRbCnf8AE"
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
