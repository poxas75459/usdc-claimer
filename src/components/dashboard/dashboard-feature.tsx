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
    "286NFiodkL8xzWTDrjaLhvhANMMja4s7QoFqa96YQCijt62NLVaqUC3WZ2dkbRVhtruP7d5vFDixC8eUdCanHe93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yAAD771pbC4xj6XLKYx8zL8kp2XPXhAditsVZjtYhKSwq7rHXdpTJxaxMaQDeEKZCp9JFx78W292HnJCXz5kB7Q",
  "key1": "4uFxpS4QwVdX5spDyyaxmqGSJpBgTexVNkpBt7xd9ixn66UppSjrRcK4bDNNcPqaAEzvJkGUyaxKHdj8myfQP6Sw",
  "key2": "5xgwmQoiJPfysZKkzMqYqAmKC8zbUnew5UvifqojgKjKhZSt1fSxhcvXoUshPtKTqQVeJryVseqLAqPL7n7CFWu4",
  "key3": "4NA4qeQQYM5WNG5AJAsgzN78T65ZJpn45XEUApbvdBDpf7y7fesUsUdNSDFupYpxMdFMtboaoi4tMxRAAEieFbLJ",
  "key4": "4ZRVzft4G4Hn7UqanuZDjRqo2iML51zPtrDQKC7zpKb4U1nzamcpr5h3ksCDf4NFZkoC8vvrX9S4LCAyyDJu2CiQ",
  "key5": "3KzYdVHkp22TqRbnziPg41dXb1BTKNm3YqtvPtVJLwkwJwsAtyTjpBZwmcX1dCh7YRu1E7Yh9Xn8eeTDz1N7X7Fj",
  "key6": "4N16De852z3pMTRjWT4XJ5R6Yk45KNXPDSPAtMPHfKycC3a4Rawt7FuUrXNvQcd2AQ4w6jkk7RWd39ySWZ1t1qQj",
  "key7": "3LaHcL9vo4cpEJfgox7Cr3XJbyAuyquhdjpHZFX15sNgieRdmR8Ey86HgynCmtZBHeLVR3GJuiQJJ7zkxQkbYEsf",
  "key8": "5sXxx48goQ9Ya35Y4AhSVc8r7jVXDtfk13cXVY1gC4mnkgjN4xEWR77SPZv7AqNisDrU1oWjqy5iohK2PXNTA35w",
  "key9": "4FnnbxMSa7Cp1L1YqdF9TXTL2tD4efbH9a3hmysQjkMgSJHDgpDTJp5aQmwzFHZXJEaTDzReqQF8oojMTEJQYWYv",
  "key10": "4mpSMQ6gFJqKZWfecqHnyEkRapMGqRs9xtr9NZXuY2WkdoQLZnvMXad1shPpiq4MgAedMxkjcxAhKH7PuoGiUHCg",
  "key11": "33iCsd1pho2CpkZk6xaBSR5PVJFjbDkAtozN9KHxkwLmUVkFeGa9su7T1PdixNnCn1Xn8ucaTHAGo2QzuN3M2UWP",
  "key12": "2NiSeq8Ge81xXVWrGd4qfEcdCFediyDGM2qicS3F2F1E8LMaK78s7ZcW5mtHFFu1awk7TUk4ERng4uGaYUho3C5v",
  "key13": "pTJreALPD5zxdBDqW1ZSPXqBdNdraAxFdQoLdNBM7MBB51SzQygCnr7LoPnv4ii7YuyZT9FT2H6J9EJfpDGxNi9",
  "key14": "5tfxUcwmFPmFMVt8SEjSLk9FpPGLA5BXC6f6Y8hzWh9pmi4ZkdSJxxxTRZCwCLqBR41sUVc7V9HUmfZTECnAxaDE",
  "key15": "kugxutvSbShcDiTBx4Y4Ex3Lf865Yh8tVGzQWh41NPsLZWmMo6JE7227U2gE3N789mxETJ4q4RASfSa3rTcrvGJ",
  "key16": "rcR1iiMgAV7stgmJjof2h8NKMGuYAcumjpAo8svzkYAQwiGXX9jibUrhMz3U9Ptnc17BTtbMoTuv5AGVVey3LED",
  "key17": "48sc9Dj9QPpMWH41Kwvw8tpsv5JvyUx1BKUYbjMXoAwPqMhEGnjBATyUwKdiXyvdu42xyiYUEAeGjFs8WPoxX2LU",
  "key18": "4odchq4NLgswitJF2eKwZ8mUgBe6ExiDYDvDxFxDE4Q4KZ2TNhyvgeDM1PcntiioDKf4VaUdiBLvUdfnW1QMDMiK",
  "key19": "eVwVqrfonBy7DqfDK85dEbKY11TzYqM2Fcfo5rreq1PJnLm93kwVZk2Ak5fk42JE68jpEAFMAQraYGYgdRibu8x",
  "key20": "3S7947f68rCpgPEi5L9KWDZjBZ9RqcuNaHxqF8jWdNqCSrn9L1eiP34Lwme6yb4B9CSimRnVNDSAWfQS6hegqpea",
  "key21": "56CMsDKh7mmFfQQ38bmZvPuFE3VpwjUYAFoTZDFZQ5uXzRKh2nSWQY8j5FttuDJh4ifW2vMYBRsSaSvTiesEa4tv",
  "key22": "5GF2AbKVvdpPLheGvGgkFFxM18ZF3bF2u7fC2CdVaS3gPH8na7oHv9Wc7nZroEvQcZG5ZsZ6i7YF5umvvBRzXx9w",
  "key23": "5T5ZSA58HrezBRp7gb4EPHZQt9vapEfB1RLCVer3iP9B9Hzc3ZRNB7haNbCct4VuBvLg2bpHfx79EAUy4KrinfGd",
  "key24": "67TCDueQCuv2USNXsrqv13mN74R57y9iPPd4Lo5HfBnuk24Xk63FwihyicfdDQL6bZaNoFoCWJVfHmtUhCh6uznE",
  "key25": "4hjqxGJDgWp9ERMmGL2a3LugxWy2uyS6sXuT8hJ1RhexWcYc3JLHCqiutBsR5uvnB1jB8zd2wZ9A4RL29FeAxxxQ",
  "key26": "FBojDttjMQMPzrRPBaaG5iZWXwKS6AU8kNcPPVaRDAM3GgBE4CU5EVJiQG9imHp3F9EQCt9okPEPBjWnW5FB3tc",
  "key27": "3mhRLKTMXfAU3pHCGPUUkK7RyZT91B42k9ztap1PSzYAwt8aM9xESnJi8ZBmpYVmnTH1te7CjDpt6GBNfC9VZrWZ",
  "key28": "1KDtDFYwcV3VES2cwiE9YDcT3ZgjD4EHaMan7weUXssxiRkK8C9XQhpoxLVhXxXnDghaZbBuzCxZp8ppz2nuEwg",
  "key29": "ezbeawuYVcHqDc4HciBwoW8YALKDXcPHpcwmWT5xb8FiN7UXkzpLTxBKDanCTjs4gdjzjNft6HCWQCe6PLunM2U"
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
