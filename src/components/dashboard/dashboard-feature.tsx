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
    "4jMgWnZBeycdaHBxHAujQ62Y3uo8uiWPa1tG316YLmGbr1V9BYMCMyLXc1vBybri4CwqWDSGU1c2wmvdpNqR6JM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQEMxdTKu5NP3KEsDxqbu2KTqVmP8M5db9WHrmKogU3CXJqSuo1gLWN9xdwZbjdLfvzdh2XtaL9bmcUdLquHK8q",
  "key1": "dD4QpdPbnsaSujwgTt78jTPV1V4BaBi5gNJVtEhSBbsiWs1mEobKvsm7HkZXMP6wYiJDiyMZAKLSDZdekShwr3H",
  "key2": "2peunUttMSfFoC2Ud1gmRFjWzJBfBVcJw2s4ek71AysfQxofNY3voKeBC1HBxF31x5wLZw9UXpAdnzFVAbvEkLtA",
  "key3": "5Y8sauEGP8DwAt9JBucceZuWok57n7xu2cuLc9yivzbSJma2Bo7obVAaJ2okNSiYFkPL8MSDeoxyDCW95MZfPrzg",
  "key4": "3GTo5fLCiRoaZ9jtPMv5ESt9Hga1F77DL4Xff526B67rzqc9qo7tQDY2RP5C8LrkAkgmigAzd4kqSwJfV3nZyWbv",
  "key5": "5GsrQubUB9ksBGHkEAsL94kD9zAUhzHbh2E5YERGD8up9RQmX5Mgqvp11dygCHWnB5zge2mQyeoVwRYvcUQzoVFt",
  "key6": "2j3wZFAHsUAR3ayUiw3rjyMouU2zdWCi3wGBpk9jiVGvb2NiYY31HVCM4H1p1SnA6cU1nxyHPe2SBTT2P3GHRC48",
  "key7": "NJm9NEYRLQgj5CP4Z4BndaMgM1Ncv3kCGf2VrLYy6UGZWQhEuCiML7yLJGaqfd1THgFPCrEb8apE3QgrmjcpopX",
  "key8": "3mnJgD7gvf5xEXzrEF9HasJRpbU57YsWovWGGjig9Fe8CAjtFqttt33qLuFcykPMkUmyQnCRsxe4cimMb1gRUUeZ",
  "key9": "3HXCQgaJX5sSyua9ed8D59WsnqmQLUJLrCnZecXM9Z24UQ4mj8SbRibvdZ1JBQCU796bXrW9Fhx2cTAmw8Yo2BcJ",
  "key10": "3bsUpNfzgZ3Ds3TaNt2uvBaCSWuSdHnyGLZtV4c3zBhoYRWTLqJZWAnL9fNkBQ3TQemkjJAXbFobXURznoiJ6iXq",
  "key11": "4oGBRFYD4rENnrfD19DXMCAHx3uAYjzd1RNzcBhThUrBXjn37TZbHTUXgL8mgKxU9C4pVzYVq3ZPhi7v3DrghhQf",
  "key12": "5BrWf95WxTRkCAnAEnjHvZ4stRRFNSLsiVjZRRiQXrHy2KUzxWyCfq3yRgspGSjggEYuLU7iw6t73RnUwzWMaMUU",
  "key13": "4p1jQnn6ycRYqifmaBJBkG1tG7urddLHwFducbfLAN3Ce5pv78uqDcULjquhttDNEnMy2WJg8EttNnLnoKDguMs9",
  "key14": "4yHnR5pejpstPoGgdHx4cqpzboxuaoe7dTnWZ2RB5HENZqfZqshmDr6HmhhYujXgQ8avwZu9kXoWmJ7VoHZqyiCu",
  "key15": "44STpjdDZdzMmaiSG8raomY215BDmahoz73AMpjeUhtXYtmoeJsUQU3sqFuTa4T9XpY7C3P5KmHzUhvinUnzcseY",
  "key16": "2wE3q51NhPXCQaj4nHSsRaJMHXJdAM46SxzrZuabu7UU8z9FjNBj5YqTBZ8yJvuJ55WVskia5fzDueemgHHEXMi5",
  "key17": "62GpRhznTE6XDmaj8ZAguha7jy5HaF7da6i6hvrk3ToPP9L3g5fWSZkGBjrxSxx85rdQNRgDdG4AZzBAg3BwwEfn",
  "key18": "4GgCwkxMkYu5LkVjxRDTpbMrSYb7YarjtUy3uJcy6BRTsSAPyYWmBZWTSSKReaHwDcrVE9z4gj9qXa87vrZqBWg2",
  "key19": "62PqYqZ3QX5BNzTLq53QUSf4hvWc9ELaw1MFUfUbeuRmZtjywa6U6CCe93an7Lsgs1qy3rciKfqmwLcHwybp61vE",
  "key20": "jyLjyGSXLMfGZDWPT1ogPHLBgpayZqBant4kDrppGCVzZ1z6afVbMkdze6AnxeGwW5mnzUDrcZTLaUx9basXUPt",
  "key21": "4pWRixCD6wvEAhNZsuUkc6mg4daUPedWxwDCWZABUDd1tfKVpnocmcLPT2EwqTxN71qAZrYJadSWnN1sgHw8raVu",
  "key22": "2tmNfmK2QkQDGXYRtEvWLE3HKxT2vqN9pR2XUL9fjpssmUDufG8URrK61HuYbR4vgpek2uKfMYt4yaQXAYSoG99X",
  "key23": "4hJCUafXMaAugLG9nVybUbLdrU6TJ4y4s8GvmbmbFfzHCmhAepCVFNdmzn7ytz3YufomjCANP2FojXRV7gHARzqp",
  "key24": "SHiLJYXkBXP28mJq85TDFeA4B6A5wzy7J1mjkz2oYaxomLz7oZw4YvCWnLnLEmH3ux7Mk3KkSDWFyEjGuooFTVd",
  "key25": "4GBdQXZbGheCWYdJJccPCmd2WgE78zU2Zo7RW2aSeNmYcpiAJ5otdm68BZGUd3yvVn5gWRFzBHuajBYQFpyB2sdh",
  "key26": "bp26JFmL5Kmhy7uWcq7pk9eqLuQhaotNaMBKcJGCfegRr3YP9RfVV1W8HBmiewyfxYx7ZGR28A3tnywvdxAWNbi",
  "key27": "54cZozEShzjPXyTSAq8bcK5FGBUau3TpH3D6SuJZFcikhS2N38Nqjpz9gVEW8Lw1EjvNyJGT6Hhkn8DaVU5UXBe6",
  "key28": "2mq3z2fDyB33YTX8d3z6LMdgDyzWDqGbBUZK9yaE7r2XxrXp6EgQJ7mveF9wT6VK7znu2oFpLYZWG2nxYH3PZYvA",
  "key29": "4HsqZ5MHSSNEEENwUYnB4kQdAWJ8aX3qCEkpJnjCBU8V3LB6oZChbtxKXto2jm26nDJ4AqUx2gGiDZsVtAUKvLMB",
  "key30": "5dVyNKR3TeqdY318VjsRPMs7KAfETEgjhXD6T19m9c13mWAg7D8VRE6gGECLJbDev4aKqE2w2nTFguUtyDV8BMah",
  "key31": "4anaojoVSw1T7NR7g7mgJCp12eGTptG8z2fdLCzwK8v6ajqeRhL79znCcisUuNhmTVLAZ7fwbto46T8QAnchbUVm",
  "key32": "3eHbEdCXiLyJuoj7Z2LhBmyZFCpEzMkNc7CdaAeJNNvEXYRwuEncztCTtUvbADMZiJqf1cDNYuccEkdyvLAiu25y",
  "key33": "4hRYJgatgD2NbwoTjUXExc7hNHBAMVt88v6i1WPC2Spj2RDVBLk4v5xU5qALXwZH17aVZFMbJiPd5NWDWLQJdopp",
  "key34": "4UFQ6QkU998GvEpQvwFt7GwGzDNEZTZa7XLEaXJ5WMjoGVsKnEJuysQFwqvEDS3JS8C8HB1KYXY6pPZCbvrDBQBd",
  "key35": "39eBr5XbZeXt3AXgV1ic32EDUng5wqnM9tyATwnmyZGNmWW9UdkWec882umHXEonxPEJxikr1V1PMpnsQTH6qE16"
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
