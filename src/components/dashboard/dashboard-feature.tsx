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
    "2SPNrJAi7L57kpUUzYywKRy3E5wq4t4tmcyrwiGHgJWY9xhYHRw4jGvX9VfhSu5AvbRNoWWtaFDAM9C2YSqXpkqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9JKSLh9rpcNfDHBATYZY7F3kiajGVXyibcdZpKbgaRXxsTzkYXmt1Nc3DcEj5iK1envijk5GTnUY1YrsRBrxjx",
  "key1": "544S6ayzj2DaN3mRUrmsyKJtMMZFSSJrPhspR6MJ4CnParJzswwwMCQXcps8ed46G1thuUFAh9aPDyzDsXjLKnRn",
  "key2": "5tSpLwRVBEVBPGUm8bk2M8yvk8kTL7zYxm3tLb58chUEvm2ikeAAFZCSeLjyqpXVp6i9gkuzie1dnJkpYjPUE3c1",
  "key3": "ELpwr6CH4brPLmmvZR59RMR4DnKBgR1zff1L2NVc2LbrmFvVbHLB5U9o2UqHkCbS1SwPPQNP5Gj3YZWJPU6DfGf",
  "key4": "2GGqjX6qJhypoLsAKx7oYeUsssiv9ibP8HBRqZAEuSuJc2iHT3gh2GSEAm2EYFTLYvk93297QQcRmo14BF4iqw1Z",
  "key5": "5VsaNz2bW2L9rj9tVQNNPkDVdHzNT7VThA3G1PcU1uCTjYwCWXbWqxsmAr28xhHWCp7UJdN38AAUG2RVR1YW4BEJ",
  "key6": "438hQDiD9Ahk6azWrRTkA3SiFt9TJrcFU5Em9NPzmySzDby391oGkqRw8k7Jm2ca317Tm3T21aoXcTBsYaNXNGQR",
  "key7": "4xVKLsEPLZt7YBQ67v6kGSE1L5bV6XMKBWD4REkkWAHvgMB51M4UEBHcYSuvGePs8bigKG1f49x3U4tJ117GmY6a",
  "key8": "4s6azAsjfMsWcAirRWs8ngsw2sqGBZdw9L9HqYHy4tFny7tsZ39EVjXCaBDUTzsn5bm8pRPcmzizzP7HWRP81dBo",
  "key9": "5pRBn5ppSvBA3eBUYjZyhkYMwXZi9X8kQsXkcrFb18UUw65DMPzah52irXjXmyHEtid7DRVPcWmpr7MJ3cx3pMfS",
  "key10": "3KMHkoX6cP6u1JRDxJFHiP4qF9GNMBT4arA3oWiF6ZJPgiJeWTN2Kwvrr6K1LYdZkczwpViS2rwtGsHrvUvo7tQf",
  "key11": "37nyfoxTr1oPWe3gKbxRc9f1j9KD7rJRz7QgSJZMrTeirhwtFVE4qtfTY1QdvJgC9jEUoM1LZY8wMZe7W9XoBzEf",
  "key12": "2qqCGTSw7NrrFBbS6GubAnEwCswryVZd6ycLZk3YoaLCnjXkRY8zQi5Ezh6HDErJNBPJz2oE86AnW6UnXZXYUJ66",
  "key13": "uMKLUfEKRVcT9rrRk1NHFHXS4DySNr4j9UyyDut7Y9HVAQBPCc2rwDjTMsy1AsySLKDBZe8TJirSk1gBxn3wc9J",
  "key14": "JPUAh1iRLM3ggg4uqbHjU9R4onWQRcQSupQL9WLJ4kjmxNvi1T7xXTxgxBFhyxesVmqXwYJ3waEcZmpT7MjT4Ve",
  "key15": "P51opvDiHLRSGNS3GL9d1TJAAaX6SUqAfCUpBwiKXUiRgmu293koiak8hykE7sHQsuhiBi9SbVTL6sQ5s4M9zmC",
  "key16": "25mTJSqLGux2zYi9eA3gVTynNPczjZGAsjPnfGHKAbq7hTxuZZD7e7zevVbtnUQaEBMwDYo8AqnJ5RkNbsfQiMkt",
  "key17": "2tohnnX9xwZAK3cNJ8hHSDqfns6aKC5tDWLFbDnWLqk3bCXYnNZ5BjUSPyG4PXYf25s16nJxkxPJhtwf4kYozhzm",
  "key18": "9BwLfZShB8n8G8e3VT7U4d2idRFatSQ3xhu7utPGUzMnnyiYntuy1Hbebdqfh5JDscDHRrXjikGwQRmd3RfZgSk",
  "key19": "4vhEC74GMS4viD4MyzXnNp6X5oF2yHZRbmuDnAZDokeJ9cqKAByVRqNNRU5q1Fr9J6j4s2DnQMA99UrZAHvLy3nU",
  "key20": "2uY6iEXKmJbjehjF1isrhji7tXc7qHYLFnBhVdm3AoXKYvWYgK7kAUvY2UoUEfnuMvq4qNj6Mok4dHiJzesaBjWK",
  "key21": "3wYbrx9SGykMyrUWscuvdKtDqAx3KtdmCEKCwruZbTFRLRo3MPnX9R6pHnCJeYDJExQcVBVkDFRaCw6rzyrHg7Lp",
  "key22": "5dV291ij1XiTWVE22XupEW8vd4a2tx3yfSqSiBbtHeoMvcTpBQ6PCZcMrZQfwg5fgEao7pwo8wPLNDQX44BrHein",
  "key23": "kL3Ss1T4cwPz9k1BdxA5mxJxFDuEi8PBuSZUHgRusGVPK13xiTp5etcEHQ15jCQUcdgmLWavdPQ3cZrPvh9ZEqw",
  "key24": "5WVq2TKruqBHdUM4SaGG9L4qq4txjtAJtSMS49kqUASfEnX2VqV9RYpWeCenkuefgeFNDsjQc32wP3i5K96Ua6g5"
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
