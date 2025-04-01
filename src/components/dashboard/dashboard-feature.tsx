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
    "9oUgzwQkLgg56m8L48W6c5o82XfyiWWgZ3ouFEXbUoqtijMpyLrELz8KsM1p6KKKZtirj6ym5nHYACtNucV691s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WFKvVxrsc2sHuZLAHr2h42LwVDELdW63V42psEiNDd8TPTEyuzE8GtEQ8RbbxjCvrjU58b9rqaQmEFVpW9hphef",
  "key1": "qELcYF8CAQZ2FmcqJCtvGExvVQBBsTNHZz5YXHoCKeRyESi8ESpcJQQQwTZqzFWjYtWd3LgoXXrouqhrLtXoCe7",
  "key2": "67iYbQ1ZFGB94SzjwnoWydaCERhqnBHPEpYz5nsCAVmt1TP5omp15N8B6swT5tX3aLJWSkWf7uhNnaKaTUeN973Q",
  "key3": "4ySf87Hhzed1uPeEpiDHTFBcKdwh2GXYoxBVm9bGbfkk6tFDP7QEmomstwvYPorAhdejmS9zfK9CwVUXaoaa4ULA",
  "key4": "5TEhoHYdqd9SJJMSXyimFumTJNsCvjDamkg8frJM6RphAvVhVWdHzKRXdashB9XN5KDpWvfstLnDzxofU9sU2B7J",
  "key5": "2hdaVrrZS7a5s7AwX7bhYXxtKBUnVJKghB1J6tDqoVds6ZXj9tarUPxwabPC1TYBYg7spCgjbBMAuHDfge7jso64",
  "key6": "21Q5tbBacT1E6mfkPMZtc2ieTQTzug45a7XWGSxwURXhcQqMPx6TuXf1aMg74EqciXDAHuQrKkD4TdnS2rouwPa3",
  "key7": "38zxjpwtKLaHu6dpsv6VTrT9VZYyTuunEBNunuqjmiTTj1rjKDCyNKJX3BYKTpbpXn1q1navBo9iNhDLZLiywqbA",
  "key8": "65jXbF4RyAQKuaB1Kd3dSrzynCTkBhXF89WbxDq84BWQQMVK3QVSXfiEAQfjNCxpztJRczZU91dWmEBZ94vvTNHr",
  "key9": "3EBf48C1D1Pu8q7Bo3pRBpjbQSNJJjjeAhfYF7mBdES3DN2ZGUS56b1zSZfjLm8MDTuMCXSryHQTv7YuX2jPbTNG",
  "key10": "5addGa62BMvnKP9gtBbWwBRTmK153WzFR5yXE42QXqeVSKSqUcrw89zHdZrd9VjmqNZRkfTTgdyV3PhAGSbrVEir",
  "key11": "51AFDv8D1ZRZ43KFf3bgcRoaDMCA5MX75jg5ib5Ex5oFARSFVbf6mjTYtms3ycfYgcszQaaCS6jQ3QJvjmsLDPuN",
  "key12": "5CC2nLBwcaRchpqVF3z33SLihZZKuBPLQtfS7D3jFVVtJnKpE81ZrJcSsW4eieBk87i4h7FfZbNDxVieW4wBVBup",
  "key13": "5yWpiJEFyG91yGsEnacYszazLCDXTK7wXHpmgza6GrR5hYBuEgH8vybSMvYbAPynPnZyQgkfdGTi8AyYU3P914u2",
  "key14": "BFzdrCiQRafXPKntaXxZT1qqwLin1868PRpd1YVQfQ6gN6zAuFtbuPRiUT8kJ141GivGpFRiVeQKXtk2TWojjr3",
  "key15": "66fY4i8U8wkSDNmoqanP6KuPF8uTCsBe2Yiocsyf1A8dcGgnpA416NpTmb6hBq76MJ89CVCTpvHbCQYrLTeGGwtq",
  "key16": "2YGayr79oHpeXyUHSHhKgKJos7cVfHF8RXsD58m79xBcA1JRosMJVuWhi15N32Y1NGCbW34CfF6mFHaXrZM21j3k",
  "key17": "4TRhu4BgTunbTAyZ9Jjn1j6g6BR5BQMfB6QfJ23jby3JyNvrgAmRtytQhkxzaP6DDQGTJrN29M8d6DdyYMS86iiL",
  "key18": "t2Tvuy6qKYpU9nmPHw3QgKW7SnQRa4J2bZZ1RbLrr2FGdXLQLSAd5BX3F3vfb5anSnipMRdUM4L9YSR17QK1yV5",
  "key19": "3WWpmxbC7pQr6vY8mFrJc7iQh7Rv1gSjjPmPj1oqNHd1iP7dYPtS4EWjgZ7KVDC3NPE7Q3McEnAekMvUuFswgahg",
  "key20": "4AbMRow6SfQEuEDg1pjSoirZzRtTBqNhSvhRi2FYX9WJ57erkaWroRWpPsKCdgbSjcBQ2pkgJost9kuMp49RHGaB",
  "key21": "5U33VV5YX25KYQnwcS3qA2FyQKo9onsvZtbnUSqFv8ERyw1xB6NHTwk5J1YgyMvEkLBsUiWpK4vV4LuQr1qKwg8r",
  "key22": "2n1Wr8ycvC8Utyk66dUCjTK6oUoppSdxzNDaQoGQNX8aHU3GEKMpwqVtJ9Jggvx4ge3PLQ4FDZdSUEV6wkHoh9yv",
  "key23": "8MgqVhmvQWbJg8oArzC6AadmmZkXfM7Duur9eghtAsVywvERnweGAf2K14syfWtZUj7jS83t63jSBu5wv9j7Ktg",
  "key24": "4NbxY6Ug6D8NDzZyxRJzLeukjgN3ECnXWkGBRQcztWg1oZF88F5CLCaSZRXsJabN61UqXSBwzShsNzGdjS8zB69E",
  "key25": "5ErgaWE2mwQXfxc9K83ZnZJFY8WS3vHbtFMQ7MxTUqXv9XRU6AckdfrwKrXZtupaTHUcrzpeVSHpmeez2gyWB5GP",
  "key26": "5kphaoUhf19XYhNgQzb3m7Yy6DeZkjWmPf9hrfQ8MXQwkgFbXSUxx467fSaAGezefexLm1NGLgcLRhGpNR45Squ1",
  "key27": "32YG1gub8smAjkyKUkbHWP8q9YayJrP1Vsceh8wS2eN9b3XmqnZpG7kThwt7bSaXybYqkyHFLjmkxTCSbDpB67C",
  "key28": "4kMXfrngkSX1XDb5ucKPNF3xXRZkuRxPZHwaK4wzSHUkX9tWYDn31pwfJ639NJ2PhgQheoNhmrKvPUPhkZxvgCn3",
  "key29": "5X3RhjroznC5DuT8rk6YDzes1ADcvQYvgJQY6QFSBTP5xkwKsuhSfbj9owQboJJpxFr6wbfyet9fCmJ1nzJW1QUP"
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
