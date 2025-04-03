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
    "31XK9LENmQ6hbFSbxzUGekW4gYW7GCRYBfgLyHRoscJ4DxUMkvAZ385gzteyFauqDq6kb5mAqhJRkBbZRnsfZmxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AA1GLDUdvzrocgCi9ZZKT5MECPYvexJJaMxTaJqwsbFMGeMqjm8s8RVRH4uhNNaqGC95waTkKLBTKmBcXvfpe49",
  "key1": "3efKKQb7TQqjA6ytvKDgHe8R2XNv8sMzGVtMaCwScLkZcvLb1rKswaqEhzV2nnsyjXsVF2EDeEcnZjaJWVofaAGw",
  "key2": "2AUXSfBXhN6SfpHMh5SoYJvY21ZDGTEjmPLgeMXdMvmxd8VZ3iGzxwoox7B3LvjJURawrTq7V6WzspWWGtgqPQih",
  "key3": "3tLvBAY8TR5WoBxBd4nrFTd1cuu8cxHbMSzDabYVRT8gqAtD76n9svUpcpNqybbQMrqVf2HY8y6KW5QepTqTYnPu",
  "key4": "5kgGXwzo9X9eSRNn8CdSDurWgoozkgxYm7tBRY6Uh9t9Fvg1kpQQtTAKV4phJwXW4c5DQ8cAfZPSjWUPsbcHJoUX",
  "key5": "3eEBdcp38bN5QM8N9tXzrGTsiizk35ikkh2zD9V7mVdtnvVtPM9ZED1P1VZsNbc54Rmek1nVM8BMHWsC8BXG51LB",
  "key6": "3kaw4pP8nMmR8cQhPvMdjvTf6Dj7UfBandiJYWVFqLM9tK6CHXRivsu8BMdWYmfDsND3e9roW6iZmhUQRQzrybcY",
  "key7": "2V8bKARd78TSJvb9WQXV9e4W5toFDJGYVQnvpVH1Zft8tTZkmQVbq6Yd3dmBjdxYq4pbcq3Zukmk8c9bZqs9y2Vv",
  "key8": "33nQfPYwoxQ26UDkwuvNjXjSe8QRDtZyCGoAtpszToRpS4Z979rewX7MS3rksamiXnd2GFvdpouSmLerZHxnUVxV",
  "key9": "5vpRsrHMZfL1GG5tQwF8QK6FtBGuqiN8xgGuXZPmYvNHMFaAdo6gQ6vuNzFtoy9wMyAMuaH8nd9QCddXzmmonuJ6",
  "key10": "3eh4g3cBjEvSxvE3q1xLord5v2cLYfJ6pE25UHutXqswn1d7igV8b1VJck5W2xAZkNRf6h4L8TReqX4oU8RGxQPo",
  "key11": "3k5xWVH7kL347txBFuF7MZCTweXzE1nzm9NicnodgEYPUHPTBHde2gt7KVqZyGxGP2mb1gvcHm17wJoWdyHrRDFa",
  "key12": "4dUTadKsbNxz6d1TUjnFVT8N2r52R3eyCmpKi4F4pZtJmbEzcHR27PyxuFsb6Lhno3RibN9gkamc9jbaMxJLu4eA",
  "key13": "4Se2WkNeNbUZVgg5rU4egdRfAXdHGGUTQuRkhsPiR7Prx5CjGRkqzSN6ahHoREx1wF1HziCJnuBAg5WeN72npP9d",
  "key14": "3YYVacPBXCNrMCP3VYnyWMMb8N7bma3xzeabUCoBtmpAaeRaeBRkbNWhDwsXFLi2nVhu2mGedNT4U4vMTuZdwa4A",
  "key15": "2varJmF8gH6fMQQHacLQw6ftP8i7cFuyxmFUvioL8ajouAY9P6j2ZThiGmmFdkBSPQWdrGf4Y8FQhsZ2GBWu9Pk6",
  "key16": "3wM65tz7PHAAaiXJ7tJW8dQ2Y4dF8wvExgCrCvkpTU9xT6G3A7sG7NcAXSQakjSVdzPYxJdRaeCtdcqJF7tSkv4R",
  "key17": "5W7M6ySvzjcGpCxyaCDjosFWAiQou4e5GfsPZDKBENScLFaZpPn3sHuRWwHE6DLfmDPNj82XXWduPWnK3oaKtQ1e",
  "key18": "3tQ3v28TAcL77uMLcKHrA4iSkYvWPjadDFo4mte67XbHZE8HD9jQmWXou9VTLN9GHZ8eSoCLfFCfB4KQbmWR4AdP",
  "key19": "5dSVN21yZEr5wwH5tQnyWU9v7TFefurFXKrp7ffWPNfAXea2HAZ7de22gXi6Dy63hSAEPKVwbr1Va9KTGgBYXS48",
  "key20": "8gH1c25kwugFgL4K43Mhp4Lcm817P8fbgfwSpe74Y8zd9AXH7MDMpsYKuBA9H7sEu8yzkyYwZxTRB5kjz7YbBNh",
  "key21": "5F2JSHQfdEXkbhZoJ17SK1XChFSGWRWee7iGryrZBYom9ihrWsQse3BMushz6AuF8TLVko9yAR1VTMxKLDY5G9ME",
  "key22": "3YVPUUALwciLCtJv71921DuuwmBpFzEoiJezemVuYdAQuaxkNAzj1ebPy9TeqfGRWBe2Vo6mqL8L6MqQLS9QrxwJ",
  "key23": "wLtfq5NssANfnWDf5NFvz1Sz8g6adGCJDQv6A3FgaBbeKN7QLK5E2bGwFaJjeq9bSJ8bBi5wVHCZ7E3Hzp5Skua",
  "key24": "5jiwGYgJx4nQLEYMWzZ2SuaXsMacaPbRJWFJv6NRQ2MySfQSACvukjUMmQG3vSXt1RRGqZT5M8PTEYoFnqouDzXS",
  "key25": "dTj2koDodzbUsXZARfGQvcx95mHEsovVVbkgDqsX7NvWdu3LQXXX2cp2Hi99hsU1CJuMLofA6puN3zMSqYYv9Jb",
  "key26": "3ULQM1rw5WQKCaF4Wx4ShC62MDVStPUbnoG43cNczkBNdGBNQsmFeCqgg39w8Vp47Ep8GZVrYeR9RwWkqHLfS7Et",
  "key27": "5RHCw3Gcx4AL4uqSXJY1vSZvC9vkmRtHuZc4wisapszXR8618fbfwYLFEVWkYtccki4tR91YmW7Sj8VhiPAdmCyX",
  "key28": "4nAvTbLRVviwVH7xgffA8iEpJ6QufFADZKeCvJU9Nc418Nzw9GjpMSWqgUHLMJjqqXb6YEuuzTwJriWzCtr91J7R"
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
