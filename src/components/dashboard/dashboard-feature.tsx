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
    "5euAMu5cGzCDH2SPKkp3d14sA66CBvbfy9R8sesw9BKuPHiC2xWhMqjgeKfUFKx2GbeWxQpcsRwS8n5dE8Mt56Bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LodVrXRS1cDkTq2LgCwtEF6TSfsgFgJC79edYdnWm7ccdvFuFNQktuRPPfW5PvGZjV493WoodH2iCtjJGJhP7iv",
  "key1": "5Rspq4nD2LyzLsB6xthmd7VUPUuNvPHqXGer8yVRZoMshWiDiPpZt7jxV8zbtaQdXcFrrxZojbNigthKDWd5CMjK",
  "key2": "5sGgQ7oyigWHB9U6vJyWQfP8KrbxpK3Y2qrh4ocwUiroRr6iFgqAkeTACE1xs12SP6UFBa8Ki9x3hhkPrcVi71ye",
  "key3": "4dxgKAjBFygFd61mKY4x85fce5cEayfhF8XrYJ69umX2uJTXpo4TDA69zr54NyEkZY3xC95W7GoyT2a1FXzgTGpx",
  "key4": "4bGXrb9rGDaGNn5RmpJtDa5pY3XD7t4fWiHQiRoXmLBwRSRmmP8kqysSM2X3uFfJ7HRJE8LYL4qYGq2vkH4Yt4rj",
  "key5": "qtmxa7iPReu7ApcaJk9AMc5E2EkbYQzyVKDnfDtQ1WfPu2YszGeo7RbjaWzYAvcazoSTY3KWGab9pkR1i5a5Tgj",
  "key6": "29ewPcVNooyLhejAuVLsBGmNWqTJ1DzsrbNMch4sMPAghgxnFBnVxvSkpYZrWYK3PPtAxND8hdZLDXa5dyys2kQA",
  "key7": "3HgnX7Wtd2BUUuUbU5vpVy33CK2TiRwZRBZrhpZEnAQGcsenJcEQrwqvT4PUQnPNdCj81AJerpQXBgFzGHne2jGU",
  "key8": "5kRxtMtwMmkjHMuSeqQtuiYfbr5fkMmVAMVTPw3YzRahLNpvNxvTVfVPiFPENByyPZa6VtaZEEpsDvZbAp5CLrfw",
  "key9": "36jNRnNQDZWboXNZ1TBs3W68tbLvMtuoF8yM2tGg6aNgp2cdDDL76NmuDgrkrv6aotk9mW1e1RR4qnwuk5J8oVCx",
  "key10": "3j1BGAakJqPYYDrHjGAk9Uo4XgAdF52qrX4MSFAMc2KpYZxHX55BbLVkmMxcychszmCs7xS1ezmVkVTfusWL4rpw",
  "key11": "4FTZgzEy1VHgoh4vRmv2khYT7p9bWChYtnYsryQjLoCEgz89QRgxAJmpvVjZVkc7tPUN9kREetvLJrQhrGGmbpo6",
  "key12": "26XWrrGn8Uo1fhmbDcQyexgDXpybd3T9HWwD8meUUTuYJXTsh7mW2xx5VqbdBPki5doPxBSTaZbDCJZqbKQXrcxb",
  "key13": "3Pj7ENjQHNT2D4v9DgYNny6V674dye6dHq13mvuyy4MJJ7o4ukF6focUJXQtrizCA8JnQwru9DoyZybpoxzAwWNf",
  "key14": "41f3wczXrtYHTsw9J4vVbFoTboPDCvVr6GfFeG6bQng21tzxYpSAodxShHennhLsBcVtXk4vvJW4Cx5MrJzMGYxA",
  "key15": "GQojHz1WM6oJ1RDqSzHT5dAkJ5QCWSkWoWaHd6FRhJyoDZcunCpUsFLTwTXVYTZTBU4LAGeqmUBAVUfGZ66xSFs",
  "key16": "3QGySJdEQNvri9o4HAtvLWhaJ9xtg3XAHjC2qhUekBAgG6EXJj2o5dvhuXuVNVjbgmse29qWgPSqUSNVkxgXAtMP",
  "key17": "2WY7C7A3MwaPB52hRHZEzjsu3FNoTBAHCgJKJNmewctPQGecLNqqtfhmMg4n3YfvWjFCJfDBUspfxxACQ1mdTePp",
  "key18": "3qZTxrdCWgdWFMDmr4brvHvYYopYErSrYxSAVDREUEN7AHJ6bBTqb19PvqTsCtjq8Y18jU2nRBg1WkqiQmfoqaAu",
  "key19": "24mudywCh17tJbnUzeq3toKroHLqhovVSoyZjyJm2Hrou6ff3cdf6v2UobSSuem3z5PRbXb4VKucSJVTU6TrBM2W",
  "key20": "3sBv4KNWTWtMt2bzVtUiP8UKngzmrqdSMyzX8gEXNeoboC7XnHdBSCupfMniVffzGtyxmcjwuxFK3VFm8y6CSYR8",
  "key21": "SbYTeWxE6KgyKLaGWbsisjy6RXXaMrkPm2shrAtXQ4B1QuyKjUyustXjzkHUFKNPaa2BoKod9mrDiQM7w9YvWuN",
  "key22": "5tk93Nripdmbbc8B17L9Dd5kFNtRuQ4evEAfFis6j3xbiHTSWnRskfF3KvTp1ScynZ3fLCxuUkyPKMPYVi7qFTo5",
  "key23": "3VuvmP4EkoYhqBN8kECWRwBQtw6tNanoD2zV78QKZhdM1XRguHh5LgcPizo3mriaWHX3wnNWx22gRfQYdo8RprWy",
  "key24": "2vP3zWkuR4Dr9Ri8s8GRCC5UNcM7ucMSyB8u7o2xLK2tL9f1N3d1P9Tr5kUiX19CZBDBU9JYMCv4G1WzcjgmQimx",
  "key25": "3Yyw9wNQxbSZamzRGwVNQ51ouG9xBym2bL6AC315TKkdeA69duSPgt1tiRvrm6qAsKHkg1G96pWKMYkrkS9ojSqY",
  "key26": "5J7iiRh1X654Fcmy98jUEwtbECQziSMugc4MXKT6pDZXkqgkSZVjBXJoeN5HJHo2DKNp9Y7tc6NbfSXVeky6hMVn",
  "key27": "2LLiJgMD21SUqyqPCwu76498QtqSL9EdNEKJCDfksyudP5pgjN4mAxNYithgBoysSKsUCEaK5DXo86AKTPkWdMRD",
  "key28": "5fuhxvaKojnKtWsjJHyqX2rA3jLxJf3dnhyvt5hGmSQeiCezxL619MX5TzK8yYwEATNnDdFtK4sGrP2dPgSCYvQs",
  "key29": "Ws6P6DacZEtB2gJ3kKAYiZ4x6YvVvsAMBp3VLxJUbrHVeFnHDiHu8Dku8NVpTbVcHxFHjNv81UUTSDVxohDmd8p"
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
