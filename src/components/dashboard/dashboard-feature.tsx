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
    "4wrQ9ueuiuG4WSjRyNrmk1muUjjMx9VnFPsjKRoNjhc26f9yJhVj8ADjmu9eZDkbwfDBCGkhFUkhW2LWRZTkmEur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zd6WijRdDKzRJ8hXhBbHJGSYb6Nhto8soSvbmvC6nZidwxEsyoLHZCHnBiavSabF2cFHAth5FyxBMcTv7YbtLCm",
  "key1": "3ST425zm2ZrE25kCaubM37SgWdcENphPunnsmaXERFrpcEKcPM18HXnGDgJYN5mFEAiRQR2EG6gdvqTyDxh9sP1N",
  "key2": "2DckV4CErHzUnGeamJbRbrBh9x1ue3nBGNXbEF95K57byfSS1YRdCma5pwioHMef9B47W6cCkH7nZ87BteMZwsma",
  "key3": "vR2CAKqaENeg3f8HSdjB6sFESGwfJPVGNV3VHeKLmwWRRuc5qbjF6hcvS1knqeia5VCs2rJrjjYQK2o1GirfekP",
  "key4": "2N7L45Zh1ro1fVw21Pnie9orKu56JVK2K9VhkQhF5Di56RtUx9Uck8FkuRq57oPSvfPoZLfs9Mt6D8HrUUfkG8cM",
  "key5": "2GYkcQXZguRRaUFzdDzhGPKuyNHf8FTAj1nsBFB5MQsqksPpSRyndHGgE4BxNB5xVAEzXJHxCspTsJVA24JSsd9A",
  "key6": "3Jp6DDy1bT327jTUTLDXxRxgWrJpwzcULVpTpueSn8hsBaDKnKkYyJT9HKrfxKU4LUVRwGx8wB1MyoRsxygN1ur8",
  "key7": "2SzwKwVkefhm5jutCAEDAwqNGygCHYgXDJnrgju3ok6Bac69nqzgVDPvZYLTiZRFhrvFndxpgoLv71hiWUP5W8Xe",
  "key8": "5T95eRS3Es35ERP8JcqVFdDbrWFuMiYTQBbu5drUUMTb833qoo69hbNoMhxY61XQgSVckdC3YomRvuJqtAkt7sAT",
  "key9": "4WYwq8VetpzmeJdsfUQGD7rGpx4SXpnVDSDbuJK9Ft5BaZtVXpjigYfgPE2ddxqWyar7uJZPKbatnUFVZK6ek3gJ",
  "key10": "21evRG1PVJjASkhRun8zHx1f8GMCUTXo3KdcwbeGdu6PwmyeMHpvsnkBzBhvmbsAeCgnBY7mKzsq1SVt35mnmyoN",
  "key11": "5NTWkVwHy1TdufdBfDoj5B5Pg9VRWSPVdr5KS1Ue6mgTD2bXacqFWs4YcNByy5uPXueaqPC7sRhHMw6xS4PRZstw",
  "key12": "2dJaxWWvjoH5xqLUzUpFr6RGw94USd9JLRbsWzoFnpWRjZDn9Ft5cg5o7QsCM5Ez8X18mtVayXn89xiJdraQHKV1",
  "key13": "5VNXZuAhSKnof4u7SfE9kbFLjBAg8kCCZRnhUNbDZVfM7gynEPepcAMxdAt8e4fNiKZLhSZJ2d2deie2CnqFce9f",
  "key14": "2zKGiUpibWpmogbqmZm3dV7Z45FScuqXcT9V7U9YkUxoqDkyvQeLHiBv8oiH7JJAboBazcwF4eRB3ofip3bDuGAh",
  "key15": "3N12kMpwxAsEeNyYd7daUbpSFuE7a9cyPQki9KZ27BjENNspeTpesVDyLvet2MBk7PtE58QaepbCakAejDUZZwtR",
  "key16": "Ws7homsviWV1ZyUHaKSbKuC4JPmjnShQxLUoG49MvupsGpTBnLV2wVRjRvKW111uLtberaUVTUP7FcDwsS4dAtF",
  "key17": "5tTbJFXNLueh4gq4p3oZDHtoQagK33Pu4nEfnr4jyw9VSVf5yTDr5dywioeDscvcXP5XD8tANQTLVC7UNaLH538G",
  "key18": "4yPrhPQikQVYtU6LfgjHexNKAvprhBBGMGW8vcioPomn7SBW2LXvZEqcErphi2T3MRrCjPRF1XHr3kdwqucqbuQe",
  "key19": "42vfdQ61kAGJBqVpHTdMkYdXtVmcEG4MQzGvvU2NsBHvAWBBJSYtJ6jDF7xHfyHk13i68FSq1csCgxj8DaJjSF8P",
  "key20": "4DvsYZJUtix6eMNgwUud5ttTkhDTdGfEm9dchvGRxhGRh9QtueE6LTTpN41BQtBHVwPvKjD2bwuXBpGDUo8QUTn2",
  "key21": "4aDyomoMqg8PthX33YRZ6uEqu47Yh2AT3peNbWumKZ2GCLA2cMBHRFGVj1Myc8arup3AutijcoLnW9oBNynLPrHB",
  "key22": "4NgpJU2sAiY6BjGm7dUem55Ta2w36N95FoSnc6pb7uzAA1g8XbcV6n7q2d1fASGStPr3VAdVw3Tx44BiCCmRPf6m",
  "key23": "eyorjDidNTNqzA8B8xWMnVwA1LF7kj1b2GtXotaqwQ514nV475iQRaSXnsP6rhKNjnCMH52qBtQuAowwuoqdrXJ",
  "key24": "orJXpCboz88ZQkpf9VbYvTRQkKjVio62y3oMCZKNhSuq9vBhao78eaFARkR7GR3bQ9v9dK2UTV7FLL714mhPe5R",
  "key25": "MHdLQLwRUnH9dvoDAMrMaQnrtR94bGiEH1JkwXJkQ3afne1wn2fVgeEifPVsqqHMmf1Ez6BDHESzfYbRjhfJ9gM",
  "key26": "56KwVNMFmSApCcLDSopK6xjqVbbva3PmvXvhjJ8h6vyDJTBwcydRFuKywYxiB9ew9TmHb3rYVz15tnLD9KWEi33R",
  "key27": "5Lk6RcReTm7vEBHcP16LzqUYGsMDetQdfQ4HWb5bVHKpYkbFQPaDnJ3LPjMbGTERKDTCMz9N8d4xWeFuA3SR1kbj"
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
