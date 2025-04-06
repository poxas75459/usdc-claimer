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
    "5jnfJaxzyQpFKsRh6oyxMMfNzg2iMWPN1XBhestG3BiKWwQja1d5vFq8QgX5dn2Ei6ZMM6jK8yhXVkQuoWwBYKNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bGzwJ53UCtQBmAngJfdzWxTS8M4xDftA5f8KpP5bW5MNNM88SoRPVvLthhFFTAokRy8NbBbC9cjyYjmZJq1aPm5",
  "key1": "AnxuZ19Us6jZwDtx1NonuqcAhEdKJtaNUPutNXPr8LYhev8T68ZiZDiaebxXJAdw41uoyjckw9ohHoEBpk9t7WA",
  "key2": "4AgkQxFftuNWREAnvsmPP96UaSNuHmaAzZoAqV1iQ2D26SKC7ho6sjjKnJXkUy81frzPqojMqPiNxN3WVuRprAYq",
  "key3": "5PWkWsgCFW1F7XfBDVtr8MoacKJAeNhhiiRVKmSJumvU8n44CsUzktQaDNKDMEekvKc9Ta1uQLfoDD9x7gQ3Wwm7",
  "key4": "5BTXuci6Xu6oYxcN3JfyVoDupqv4c7rki9LgjZ44EqJtrQCm9JoVNLgpfgPjcb5Y3rJAA5uTP6aZBhEfcLbFZDEH",
  "key5": "55uYmfeEBWPm3kjXdv2xbSTUZf4My2vjPzz2V9edyVEAaDyVpTBLz8rZUpgRiMKgBkqLSbEnekyzgyqM9GrRcJBB",
  "key6": "3sN4nQS9TkyC3UCSzevmf4A7dZNF3GkQDWBRUsBR1gY4M3Q6aY8Hko6zCC7Z1gtGar9zWqWj9Y1st8EtbJujqaEx",
  "key7": "3BbLcCHqaGJ36NjXFrVPd2AT9sYsp1gcaFEgHC58VAPHkSen9B3sSfyCZPW5mHkuHeMid7KX1bxW11mq5YbAoNzR",
  "key8": "22QZSvoHKRGy9gHUQ9AbUEU4zoqme9YzEmYh89QjDtFjS14viU6Sz7Ks5X7NxzJYibdeYefkDE1sNh36xR5jJzVo",
  "key9": "3xY8xCoAnG3xDu6itjqQHfKTHA6oM5hQP3zRzdtpCL6XvJCcy8Gjqg5xbUPjofqJuy4WoPoHQZV2qymCiqXRMGvY",
  "key10": "4ruwWf5ib3ptJk12dHjCRvhENDXFGxnjrGfdKqZyTmSgLWp3LxQcHwTLHZyxhgcpb7wd2Bgw4FKSaqZiY7K6bfte",
  "key11": "61Lz9sw3wjCdi26Z1VhWteWUtxyF9x1YrD2HeYKNHkvPCq7XJL8CakY9fYPKt8mPDqPAyScQhfpvw6f3iv47tEDk",
  "key12": "AP9a3dDXHTg6TDb2Z3sMoepybN95CXtiPi8tEhFczHokASrFT5iQHWGqS9zQMwztohVnbtof8REo4tk1RMWKrgF",
  "key13": "5tqitSQDHq2JAxrUXCxybAnhiFgXUrNrj6kQSRaieKFygXnk9ureSQxkAbtExSqosizJC3JCvqdtk8Ei6dfc12hK",
  "key14": "5Yu6jx2geMX5stpzeUc8XHpGzbeao3or4DikRRy32fhk1QQ2wZjap6pekiLZdEtP59Ji29qkEi4NLaQcqUiM56SC",
  "key15": "2ixeeAkoqdvYKsKQz4k1PeV3ssAkdY8gBDp7yzFA7PkFhw7Bfqi6GhZtrCVgeT1nJK98sjp4dnDx3DzWQSnouqzV",
  "key16": "2Pi3pPtmNMvgyRPmnMJaGcGj6J8fJxXrBQznbRB4foPGP5qF4mJpQeeqDKuGHgvSPf1XPJLUc4tffHGXc19BwZLH",
  "key17": "3vvGD9b9CCWudoCxuk15VAGjrzySoLEwfu4jwHdoxWbSzt4JgjFukNhNxBBt96Qdwb8YDkeFaD3mmTKJejJRDz1r",
  "key18": "3eb3Nrg2TxJoXWaQWVWYV7aQeBF1LgW7BgwcSTciUUirxGFioo8Pe4s3gEocdvtE3LTAXoqPN7gQhgvTjfJWN5e2",
  "key19": "3NfL2Wewv2A9cwLRtDpTi41J6kSis3AfBUtbPaXC9m9FysZy9vprn3G4M5jNkc2MXt6Xi9RrrAsqyNJVTp3MH4uc",
  "key20": "xpaCmF52avmrZX74f6AF1qr4xExH5ctxUWongniPSZZ6KAH87c3c3kevYBnAu5hXmAmtEVDENWGnR6ZgmVLezR2",
  "key21": "2UAKqZYsSH1eaFLBJtEvBZUCDCEq5c9VoMLKRncQXCage3rZUjmPGps9nj4wrRgasZKgLXxw1nxJfoKZy6uejrex",
  "key22": "5pefu3uyLCLNLf2VHYGa4T8Wsd4grHqM45wc7xKhjyUBLGAxJFvK8bcbQwibtqmBqALKjzMihUcwoQKUptENkUYC",
  "key23": "4FoEWNy5RGURRXBWRWk3YMNi2w1pQHSMXBtT2KJRSuAwiTfzWs4bmT5wyrS8dNFqWpEbonSU3erEuRnXzeJWw9PF",
  "key24": "3Xgzem67TUBwhhEkz8mDBCbRF3HwZgJRfpHv9wuqCmbfY8LEvfSrkrHbv8uAos3ENGjHnMC6rUYMvqWQTXDSCjfW",
  "key25": "3iqsaudadk5ukiDqY5u3myYcHfsskp5DF3Uok4TC18mHMYyPiVqZzJXaNXtDYDtvJmLkqXQsiiUXdwtJWHhP5NjX",
  "key26": "5D5dFTpjZdQFpPpML1foxhjajebrrWKPbcMUA23KeSvUyoMXeizT9PHGoZGJRS59oZKRy9K3B6frKh55jQQNbFhi",
  "key27": "5qztiG8QqFB5J4PnnvwSV4vEkhoh8pvJN5fBtnj26KpLaTmLVeBCuY3uHrmZGsU8KTHi2qSNz1LasvaDJteqD3zx",
  "key28": "5QgiqaH7grcjFrAq5AvCrVGJD8EgaaXfmw2XS6USER8Nja5aJ8qLNN8Uxoz4gtaTeXCD5o1NDeXdoc1hgcoyrnGv",
  "key29": "46akmC46WrK7oVHh2EjXD67QsgAHW3T9dSwex17N2z9XRJoh39VzgvzFyQspwb3VyjqEQg6mgNfeNo4vd6wBfmaU",
  "key30": "5Yq6ULLsr7HRuxmXAJbg6GTxxFSDELNNGGPeQawyUVzSV7w4R8jDekGtUJ88QoCFCAAmM9JoN7SKxaUXsE2wZ5wG",
  "key31": "2QVneyH7JvRSM3fHM8uXhva5L8cGyXbpsNRpuaW5E3w55HKDcACpRkxxmBodFjCvFemAqCqd7yg41Bvcne2VQGZ7",
  "key32": "3cYmq5ZRiHGZAjTkVcVYh8KQuHFDL7YNsGWKcc34pLky6MHij5zskzjYb2o2MzhsSXY7KCgpXKDh6t7CE56cKcP2",
  "key33": "6wCXvt15C7xMDoZvrL1Eh2qH7HZjJuq7aB5wf4T8jJThSR6LC6j4MH3J9XdK7HD3X3yv2acWVpsJkmJkcpepArq",
  "key34": "5Zdkbhz26Nz2Nh3nLoBtbLGiKsvkC3YHyiG2P1YGCDVqPCpvQZnB7DcXbbumucndD9Mx37ZysQsXMhDoVKVmgjVx",
  "key35": "5mseYCDTyRVAFV1Y3EGPDYBSEEsGmhW757SFryaYqfQE5kZPXVEWc5dchdScQbpueGa42qYo5XHssnww9nBL4Ckg",
  "key36": "5qoneEURzXdSLitrBP1Ck48KbaqTwzZetpvb68hdj1pSW2rNNBXZV8qBxDb5ZASkMdTSatmLHud41XR2DSJMbgrm",
  "key37": "3WB5RjR6fVxZzYW59RKehzRh3yYHaXjnZ2HEc7rhuufi7sTXGMuTYPn6CjiXrMSXYFWi2q2EQGuX2qKtwRbqa8ew",
  "key38": "3RqNiRQqc6uuu9Teod2b7QAR6G4AKPqZ7PUU7jvJnbuDbufRBbxBV2QgizugYAfw6etc5qfQEyC3GDpcLMgpKHf5",
  "key39": "orbK4wUgqxCcke9p5D4vA8e2UufGiLNbzf6YtQ46qRJDKsxaBckVjL5jjh9jxgs1jKg52M58Z8m6RiPA6LizWUF",
  "key40": "3ZfASucQhY9G2iVeYsN2htFBuDSyVexSqPEnXBAD6Fcd2TfxGdxvpnwZ2PgVQM1esm7HJVtrvceonqwbZgpRacd4",
  "key41": "5YSzbMLyrrK33TzPswXXtYAbsV7bLrr7MX9PFzrc1du1gpB4fLKHo5VKqp4tZayiP4YJQ5WGt88bwoJMC5qocH8k"
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
