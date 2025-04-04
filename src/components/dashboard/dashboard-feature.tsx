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
    "3E2FeA7PpiJeEx6GbW1SezxqjsTv9HSJ38gF15LjK8p4hmGqmdjg8Zd9mHaUyRMHqHbU2m1gK6hrL65UEW9YZnXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TcauqTShGxbZr7rE5VyvcZhyeUtRRmhR7i6kzdMbZL4JKqfCATxjwdJZUhRzunxLFNamckb223fizB3uUxwrYDa",
  "key1": "5dzajWHyyDpEA7tUb6gYFZh6qYeD8PpNUT97BuCnRdNKihCFRnsinFLgGgeDPuv3xCSW4V552YdZMYfwgGpqbs3D",
  "key2": "5ut7dzaYzrtUe3PXBMqjFiZuBavarsNgBWHLRjwRD77g8DbfEjtaVF9xGMjGCm92NQevNPJgbBmj3dYoSXyrGuAU",
  "key3": "2FCUVxqaQSckDg7gesgvGCDm4okUynUCNQudaE8y9KaGqKVDHh8ZwQLg3MnS82vNB7o23U4j35x86efeVv3B34ig",
  "key4": "2d8wyCkmrYA1WkmfoRTrHYavqJEMcp2KYzmK2cuWBUAz2bHeXwuUZ8SkAY3fFRyPmksWjj7o6ZZgSzBZLgeyBENA",
  "key5": "54qerjNCoRbnTpUcNbzYrrdN96iSrTwBGSp8eu6FDKg5xT5YQ43CubfaetBj4TaP6gDUdWJgNn5pFsjFTm7PhxrG",
  "key6": "2LpLMp4Txsd7hQnjcPcjH3CiweYAVtoipb1mCVdba3FuHgZpU2opJTHLy5rB6x68DLveBfnnMQwvqNcmrN9AsTys",
  "key7": "4XTQ3vbkyTebjGy9W5KYydAxNtMJ2BNH66ipwANCyWFPjYEPQzujWqN88GcyCCukTJWHVCmnGEqBCs6uPfxkLhQA",
  "key8": "2Whar6VyMQZfMv7aADPVNHx3XViBFtHh3TBHVER3CDqTP3111uskP6y8aveDEPiPxuEAqnbZpdpWJXqzjPVttyZu",
  "key9": "5q4iYXwr6MUfmAtZPpCr1Cc8aLwYwJA7j8KNgnZF9UPFPBURfXuerK6m5P1x5wUYiRpnM1DaJ2eXNrJxXuN2scVd",
  "key10": "66KHfprjAF4nasW5UHZHFVgA8ytjDABDdKYeV9x4ETpgmY3g7XGowy2YUnSPCLg3xYwzJ9LxRZAx9vAGCiXXYaJE",
  "key11": "4w6r7wDME9nJnkPyXyTmDL5tGi1tUweW8LDb7KEx9qfFJkaJBkdQ37Pax3VoKaUQzZEy5yMZkNZa3iTRbnKHr1aC",
  "key12": "5HBmUkLJW2erRctMyR1nhTdqSc6Mwse77sNF8tRLoPWoUUqd9rH8DXMgwQTGYthSGjBhuNkyvAat6EHLEyK2J4yH",
  "key13": "2PNwBsA3Sc4fyBQtAF7riRKS2y6tYvaPcRNnWivqrWZvXMcDYLhTVu9v4gKqeyMBbSk1cVxZHJMDLWMRXPbEC9Rh",
  "key14": "5NTEiRJTV2DEg8ydF9UAsWJg21KvamNtvDAos6Yxo6aP2bTjLPEALshQpw4zEt7Jm9a2MzQSYs4fRTYoCxHCKmyK",
  "key15": "4pVixk1VVmuJJhQENHL77rmX2m3x83deL5h3VjqkkvzjHWp8n9d5ET6qh33yGZhBspEEV9o8od5q39SmZLH78Co3",
  "key16": "35F3vPMEXn9ktw7rri7Rts8uDK2mbu9FNrQAYWHKxZm6xYJRx4Wvy5eADVZeExkeqNNTy6TYkBBXi3oNBeEHJ4Jn",
  "key17": "2WefRHHUkmL2P4PvRhDKUxRxstX4qXRXwCprHu8mEtBe8GLY1khZbwDgyRQhofzR5221jVgKbJD4FHPpsKGLB3na",
  "key18": "5CW4xuikAJAXrNWK4mrMFEynBDsw7WFxY3Mqc8YxD4HjVYqmFFLv6wXquqvxw9pNBcedLav2X7iEEDw4yMyTYCyK",
  "key19": "4cGBMgDp5UCsnFGfN4vPb8iXm2yGoZc2hiw8m9YuUa2CnTr77hJZUpKVA7uRZXjKLhvPPBBpvkY2rAbxzj8PyREZ",
  "key20": "5Tu1qki6qL2yd5UKxF6JGJjDEPs2WsMyHCmfipSfiYKCEj4ot2ZpEmnWvoD8rDKaccGk6YChcXxT9DHJ9wqbv3jh",
  "key21": "2SSn3wXC587Dd3Xrd83o6axg3oBSSj8WWe9nq17PgDnwM6XDGCHdejLDEvHw6SwKKDuLkHqu25o9pJUrPgwvDZN3",
  "key22": "2QhULgnwTumAkvEFd89MLn8ZSjpDfMfs4WwMKeXnH5bn6BzWvxuKGBa2skXnVus8atDGa5Fo1BASPXKCLLgk79dm",
  "key23": "3HCTGcWcziRmZgjvCnM18a2VeBs4WfnCTe6NSFdRBjcLK5yoQunz9LWo8fkKAoKjJowm37euGokZmWyacbiGTYSy",
  "key24": "haV5vsWWZMxF2yqA4RehGKAGpBsA91PmgFFaTEJGjiH8xmGL27PQ9nDchUzEy8hnM71RCtcLS2bDeatKxxq5Ndw",
  "key25": "2GWTa6JZE9w6e1bJCDt1cVyjswe2BhAfifRt7bKwpPfbFvNY6N9RZ3EJA7EtpZ6FoDZWdNNxc3Fov4QE2Gpc8B6c"
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
