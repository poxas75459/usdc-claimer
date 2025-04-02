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
    "Sq49BJ7K35rDGBcYekao7aLfZTf6WAbaWMoD6csYpHW5J7cJpZVwYxDhKGYt8wvSEQwdHMbLvLcADEWhLvPDokT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZAxL7NdJ6kHwAv7UQ8DwAn5F4ztrk6zpSoCwAAbwMVWmmdnWrpCaLq2fnoqKfw5skvdMJJLDjqLsuBoE7qPJ5T",
  "key1": "22p2QCrUaDiWPNBPKe7V4QoQknwJvQVHAeFxk3Bn4ACoAcQFSbEzcQee8SRiWEkdQu7nijnrE5rwHjvNRGtribK1",
  "key2": "36sWQchkLVpW8LhAk55tsoTLihLQ9zhkRfLxtjUUsxWcpd6McBSb3Dc2VeDQJFjRVdHKFd9kRuoka27NuuHPLFq1",
  "key3": "5EZ8Syg3cw13gpggPHH6DubjBmyCQSw7A2vrJvK44YHgGTbWNKUFAfzYhfnbmSV3aFc5AEUA3mtcvft2AA7x4DGN",
  "key4": "51C9Zauan65h94NcBjfQo5D2U8Jy7Vrq88FTvcefNQErqL1i1TA8AW5r1A3Pc3uWthqBDjbZ3wz4uRg9Ymj1nb3k",
  "key5": "4XjdNKCaQkG57z5BEgy53nybHMsfYgQ52esyHKUFdtymWGPWzKgcUTxaBjSkCYbgh8Jb6QBLPqpZjAT6LJFXibdg",
  "key6": "2x9MdyJABEiDzJJstg4nvS7EYDN7BP4bSNfX5Yin84c2MQ4ppY5Be6MgJXvHuduQK4cZF2TB5ARq6RvewehqDkDF",
  "key7": "5Eq6zVduqMQG7Kx8n7rbbxfjdonLazPZ2z6cyzTNC9EgP5hHY5gcs3CZfDWMtg4Z8SdG8C8wGDPg16rYeN3PmwWA",
  "key8": "22sGQo59k99EpSmNx7RkQTQZpHq43JikrvSKsEv2CuQtPFLbBnKA33EgftG912mMFRpHnL289hRg79qsb33uazSi",
  "key9": "1ryxmwwkDtQe5Wgcz4izSTgsjtyrCMWSiPgJEsqcdbvbUERdyo1DNco4VHpj5hLQDqx4dyh8q64mbaLzEXmmE5Y",
  "key10": "5YRSfGL8YQaujJpPQsBdGFeTSgDpGFz8BZys6pBQPZERRZb2pWm1VRPPZrAuYpGCcqPjxrZevgquRuK5cyrUsfC",
  "key11": "4ofG4pDmUENuXANMUpik5neHAejpXPWxQ45vS3bkXRnj9PG6RXGvguMD1MYMkdp44RELAnAitpiUqmR7Gqcxhoky",
  "key12": "5FqEsW4qFH4EGRfz8XpnxeKpnjGSv8nbE47Jpv5B3ZVBzBDuvG29EhgA4iaTRkAzjinTV5mdxHbCPFzMsWukqUN7",
  "key13": "5uQQy5vwsmgPeHYm8beFqY6F7TWHYZ56Y8pVsqpDwEfRqcoGKR82Z5iGWvVuV9kZfYVfzBeweugyKRcZBDHAdgGX",
  "key14": "4yJ38jdFL1EEp8czGfNBh8uKTrQ5wGv2EsxaLspmntK8m5BGSDjQrsR1RFdPy46qvkFaro2ofsnF2UT9j3qVW7Tk",
  "key15": "2eHdHQJPYc7gUE4a1Ak5W87xziPxwSzzJzctetuNbM3ca5pq1NUVxvrGv97aFMrejNGkSfHAeD539xyLEBhCcpKC",
  "key16": "63y1sf7pNLKCSrNPiJKZvju7bqPDhecNaqnNGeKMwrdBKJHzYb3ErDwyo2CEjgvEtVzXohkSh4UJC6KA8hbTXEVf",
  "key17": "62LxjRyjJJ6k8R5WM4F4YeoWdjzJTRNpKe532Cf7UTbMdjvu428FdQTMUqf8yUJEvM75S5cmTsJtt8NoUbMU2iHB",
  "key18": "4wpSJzpVbfGWbzXPR7yKY6PdHxWPGngKBrnvN8mz4nZMLavM1Seuya4Kt3MLbGd199ocZND7YJ2837hFZwTKxsFb",
  "key19": "e6DyUJuXnmoDJeVvjk2qVVBoYNts4D7yEBA14aAqvCwzcRBuksffqxPr7AGUMj81RKfXcV5CLX4NRfA7eKEFCdF",
  "key20": "eocvdE1DvAZ6fmWZtayCMtwkFuVXmMPw6RS4JvQLpZmqEgr2fuAsJxJUVRPXEowQnAd83Wdi5sxLzRQrZVRdc9F",
  "key21": "2WLM7SkPws3Nxfh8X2DduxjR1QrANP4uEVp67vjbtxtPB52pR4xLFezkcNqhakQf9ZPByvdt8swwVbs5rsv1P5xU",
  "key22": "3sPW75JHSDtsthfxJ8aVTRRbuomWEuxaf7Syp2T5JHPgMNNp8dm1QJYDQemBB923FFJREcCMmRmyzzPhjrufiHQ4",
  "key23": "3XzrhYYnhm7DUfLvHvUUPUXCtAFSBhfhTUaaENDtkEmyQUgbxVMJ8zypg4keap4zRgZPBGo54MNnCeESfqjSeCm3",
  "key24": "3qJTrSFgqjMc4nLtiN8WaA6Wst35nyNpEXSE4yr9zb9guwpvYsuGmawGvucw5PgfmeLCV3v7PYyEpfMM6GQhWJbX",
  "key25": "3scLwBAWmNXYi1uEoJpVV8nDQJ8MWYGXXwFmm8PAuEBH3DcVLA8epqdhgFH3dCnN8EH5yHmT6DFUBz2sBqE6HjaH"
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
