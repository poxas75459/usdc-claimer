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
    "3ARMaC4akrYKFxzLgFyMc6Q35ijs8BVX62juu3hguTKnj9jLsC6n9ezfeeMBdUd1QvcWdX1yrE1MGis4k79p59u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TqYR2L8PSordxCL9Cw775dYK8rpacXU6q3bv5ZWwHQrHZRpQMnT99kTj9TdvBwbXaAvkcoWUqauCRfht1hr8iC",
  "key1": "2if57bBny3ZhjHdSrpecr9ckXLjh7RSCNJcPLrw4sJdfny3RoVoe2k6coXR61LNv9cJsqRKK9bab2doioKWvrL3c",
  "key2": "eJYMUY3jU2n63Bge5x3vGoar6NZL8MZSzGazAFfYc4P1poNzW4eYmhvhwEhLoigokWLxhFJMKgzYm1juQpyo8c4",
  "key3": "5wLxqWrchqre5Yc3RnVHVWge4qSe87fYKDCe5r49b3tykES9CQwAv6nHSNA3S5DXAex7RMAanN6zA3ND4Yrn8BhX",
  "key4": "24sam3TrdKjy1ayyXvtbRafP27X6PcTPwpCioe123yBunaGHdN17jmK1XQH4A8XLyh5zrX4Z54P8VYCH3p9yuY2n",
  "key5": "4MD4U5jyPT49RBBPPDfU9FoLENHC711cJVbsPcDLQnSkJjEs3Wi593dV7yFKU4UbfdKQqFL215hjASuvm3V2iMD1",
  "key6": "2MSV3oGMXzBJcJTTsGpYYfEpks99An6f2fofD7zS2nhJLahDW13BWeDjXQqCD41nvEESzPVWuB6VV48cXKZHGPBT",
  "key7": "5ZaDd4AHNKswt6z662RVEi7PwFhf5yQLqFHCKSok1Kcsat94VsVQbTVaSJBwb3sqdNkhQU9y6EVnMajV4DxoUWoQ",
  "key8": "4UGbGa5xW1QJ9UkVhPg4gUBzJux8KJDt1hsKKjow8yPqPebp3YU3giYSGcqTV7K9nBr2HK2R5X6y6eNoa9dN5Hx4",
  "key9": "2NED3CNFkYLPkJzHFv6LpXGPCtzrYWu6c4PaLb4Wz7kKJv6XNMUfis1Qo62J1kWw8B71P4NTV9rHGAAj6WRGzEse",
  "key10": "3k1MxCSnHMSv8giMGTe2WSgW4NpRmavihZo5597vRa5gAWUq5CzgZdc5vTStRpL9gUnimsB2tZpj9JUw5WhPerBh",
  "key11": "3K1XjqRTnSqRhqkzsGUuYaXjCdegqHr6W3YLqhcBFdip3qGSQSZVQJvfd8Ddvpq8Qwv9UvMHZMEVLo95hNhrvFtm",
  "key12": "3foZgKu6dyQwBek9gnTDZ5GkSy8fNerkJ2VyiXDuukeQp5StjqYgRrV4svUWikusve5p8cWrpvweBwFrrS9wgmVn",
  "key13": "2bFVzsyQP4tC19bjUUsADGqsrkcrURucWyHSr5R8pjBH7P2JXj1jMih5aDuGetLv76fSySkY1ESqLMeL5ddTsYe",
  "key14": "5cMD3scBLs1xZvDuCuEu17uru4z9sCXYnhLBpfxenLZQXgAVhiapeVXbNQ5i1vv1U8cCFAQd9kPeHB5FDuRz9PJs",
  "key15": "5z83zjA1RkuaTodUHVErPnUauSYsCa35sn1ovCFprtXK9XMPyKMnVfSDmSuXYbcouaGqYD3r53YWU9ebmKnmZs53",
  "key16": "4zmWp59hUzQvvDJqRdX7PBaQJTaK1JaMVWmTrQpnHhtPPhAPERtfrSNh77RXG46TDBD2qNK5ucMf7XKSgFtY8Y1b",
  "key17": "HBd2S63n6m1XLpPps27QcbqvRoTfhebGxTycAssqmUbXHZoykeCRJo1P2TpBcNAhtwmcsaL5cuScN3zZQMBt4jp",
  "key18": "2yxG786L77MjBw5dbufMzbwakKdVceaR1qGdc6CwMM3eJUgWcGiU7V8ADtt5xQaxsay1RDfAfs6MN3qCJxLMCfjf",
  "key19": "3E6SCk8tGUP9xWfRS9DqC3NqFfLFVKWVitzAHJwRTSWSriZrt413859mCj49uTU7GfL5ECiBb67Ge2WJqZV9WxRY",
  "key20": "hpr9WwhDUoLRVhnNGLNgpVCDo9PZdDbPbMRSKnYpen3QP9wgKmTDtu16xLQ2or4zwFQznpHfyzGrtoSxnqXrEGP",
  "key21": "iaFX917a25LZsgePfA4Njvj1Ls91C3eb1rwEkChBhGWNpNzs9NEMdby8wTREbWcpb6kNBVH88Q2e3kVYmAZHnTM",
  "key22": "3KGPLBNBF2qDa2otEfKJqgVpMf2WEhZSRoZUytubXuxwdRkjbwPZ7t6hubRW1GYbLKwBfeTQ1p9e8F9NKkKa5MpW",
  "key23": "3kHX7FL9x6f18DJfFDxo8ZczxRFWXK9JPwJde546hH4tDf7CHrEFsfamisg5jwTJAnPSCXQgaJk28QnhViUBaCYT",
  "key24": "4usYPmqhtBAHLCosAKvCdiMwhTU44JV4eXFdyAsWLVqwTcHMHqzuiuBo3yTMpvLrDPn5hyZxgZosnJf66yMBdyES",
  "key25": "4LRUJTRULQU9SC1Vd5NuPLFwujfmbEepHFviLrVvjXHSpJR42mciAoSTxmL7on3vUs4ub2kD3p1eb1XiRoDwxC1j",
  "key26": "2cXQWHZgMP8RDedVMVrPMpd6oHwqWNfnUy9jKfqMfNTqsntddibeXo5pFo5mCkQ7RwyfY4zkgEpVZusHVg1cA5mF",
  "key27": "5ccRjT9LsnJGVAqhKousbSpg456hVLEFna6yAK9xwVC9kMNpHpG2c3Rwa9AJvLR3Y2Q7Cqr22MZ1HASLmA817bFu",
  "key28": "5xSUBw2fiCuDitRyqqWXYmxfDKqDf5ygHXJvEXf9n6dxjCgfwSsnX6bKoXQjLcbz4NzqAbWf3oBPwb3PqFrfK9uP",
  "key29": "4HYZpXirR8QizCc7harb2JRGoM5fTXsybzYD4SbYVPgJ55Cc8PFqhz5fmwYTrkutgLXTmK8wGhJedw483rPxZizj",
  "key30": "4B6rR27FCUNXCxjBwUXsuB5vbcd36eSEbJW5EUKUwRozuTJHMufbrEUjuBdEtcLXmaEaNUGfrxwpAHjWp6KBQV9c",
  "key31": "3mjaX27sDTRFiVhe6xYA5ULaztdYxTtMkMxnaesCy5eS1aYPR2teKt7GgaA5EYD2E3b6Hc1PQUZF2bu5uLWSfh72",
  "key32": "2GKtddLbXbz3Ux3i6AkswKqBQigxvJViUsT5CxFb7mmsQHnbUB8MiSoGmxnMZWa8yL9hQNrYzQZ8WLCXTLxetKha",
  "key33": "3C59t3bxVed1uq3Z4oksRL5ruHJuR2NmY1zkX12ntSrJNz7mf3Xy3mc15TQBJKkP4G3nZszbbiCqmpRbQV1jmgpJ",
  "key34": "ks2dU61PVr873KtEeu6VMpjWB6aaqWbHXKqdV5N4btxviaBs3qDsRtdwaPQFKSv3tXbVd25pAn5jP2EV3hboFE3",
  "key35": "RDuEVBRtReURcZYeQUHoxmwwo6ekQAR4EWfVDnh3prbGQwU2fUE6H5DJnapkw6zNvG7EnT8B32WtbmYTRE18JTN",
  "key36": "2evRPsSQCMPnjndnfsLF2owNJNtEYizgq7RJxrt9vtcbZ9Ch5T3SUhV93QBw6x5VWrBRfcWFF9nAJbtDLBoJLSaB",
  "key37": "cYsRAvZaFqD2VT6Nq6CdQmdtqjBfSi9aM7U5jfTBsFxQLBBThJ2QpSKSMdXt9BTmhC2R2qizYSxsgqwm9x6XxZx",
  "key38": "5T5vU2x4PHzqPDdmWxSwwcnKH5VSn8MVg7rvGGp5vtGWqUmUn5RqnXEKPhFC7mCe3LgC6rTtvuJ6gvJFUnNB4hv4"
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
