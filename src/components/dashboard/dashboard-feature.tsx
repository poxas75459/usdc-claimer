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
    "4wdi5v7xJbisexhwSaaDkm1sXDXRmaicx5MsrZXCDgTTSoVjWm29uq8sKCSqPTVj6ZzHboJu8Pa6R8jghjnKUxcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u49LWPY8iTRNPgMS56ujSPpLCsK4dea1q314sNx3a5jMu6PD9QtA3nVvMuzDmoagdzYj8FGrc8z4t2nCFzJ7EFe",
  "key1": "2VzsYUFcwS6Tn8PVB1WP8WbWaaTvjLXq8pojyaKFWT2PBge6EnvH7Txer1mHiCowynChp9ETibUekMhQjcQTCUtr",
  "key2": "3HdGuHYbMXnpo5bF79gSBzNEFRr2sJcceE7x583fBiw4gL4ZZZecY8dCtiqXY3RJcCPWDo693SCQLcWtsBx9tK3h",
  "key3": "5ACaff5Sa2kX3gDEXYBfEmCjP7s3JR64PtDrTqML6bhm4fkbJ9Rk6UNxnNxcSwmqneJs1QypEe2UfRdcGWn62cgT",
  "key4": "sqYzBFQHJH8PZB22Dke1RjZbcoxaZcZTTpLW61f37dhb9khbCUXBUJCQCSLXmkANeoLk2DFdY4r44YuSCPbQczM",
  "key5": "4pBDpbJfGKpwt7bCCqVz5PPUpm2oV8pMqJJRXQ3MpDP1fvaPBghUsDX52X7xo67stzFGnw4h56vfdQJ9UdVcgBM6",
  "key6": "3uuyAFpLUN1Mgjer7FZVsW4NEuZUVzB3k9ZcLZZNBUrWP2bNMEgq3WTpswY2Cu1EWHy2T2CaCjZ2kf29NcwwduZs",
  "key7": "2WmnHMjpKeShQBaNFU1MJqsrWwmrsiRKCAcxMRYfhRUHQkYaA9RUTYGFw6t94NuMXZLRLNZ1uoxe3kyQZv2EY4Qy",
  "key8": "43wGKxi6EvZpRNwycTpx2NqZz1to7KexaH1J6DmPo6zz7j5U5baSFmjK64Ab2teL1xW1G8UbvjLQZdz5d4hUygRn",
  "key9": "5UDjMTxRrxhETRmYUkpVaSFer7ssvNQ6tAWhkXkhfe9Ut6RSXJ6fdydqyHVJK2SfFx19DP1hRVXgkuU3xYQWkZZo",
  "key10": "5BrB339aGr6PyKQ3KhnEKdHBEX2XksTTU9VtJzhCqFLxH7S9mscMAWEP43sfyFjmuJcsXSYJFsdo2hjzM2qhAAqt",
  "key11": "54Fpnz3HW98oh5ZRKhSqpk3CumaL2MofFtT3kxtWmBS7v7x2ZNuDedoYedizmYdRTofSYFh4Ho8C3WfxXhFZwsBr",
  "key12": "4YuV1zMgeUJFLmTJVvqqmHXpe5KiXPU1w6GJ4h7Qgaf5SpP1KWVYeTPFKo1JxszxEd8UsPy7DQAj2hqRo6f2suZ8",
  "key13": "62ZECD5JpPpUTQkXps3zmBXyuVjRanBqBFLGc9occMM7ER2d1gZQ9MYEkgkbP6TXbGoiCnioaJoUTokLJV1NuH3g",
  "key14": "FA4Tj1JwG4twAZRkmifrWoWbfDsapa8KkejjQtKPdCNpxUF2pkcSMPcYEzJSramWKYiRhJ1Qa1eiKqqYLoCnhkr",
  "key15": "4WjZjTSvKrBzD4gR2VzTASKWwV6ZkK7nJutuWKF5LCNgEzM4CdLeDFfn44N6YRGkLp64xbueqYPYokgCcD4bDVMs",
  "key16": "4Q9Tppg5utvh5NnBsDCbzMsYgtKGvzvsSMdXUBN6XvKupsfdLX5qer3WSW4NXR7Jk4mFgMHeUBfaDs9p8jQeXCPf",
  "key17": "2dDykQ5of99Y9NBxmxJy4qhrf1Cm1sL1Nk5gQfndG2PrY7YUH2hB3ZfExxAbr7CjitLkCkY9SXhFAwoL9t5RaG38",
  "key18": "4hxRkq4g2JXuVS1Uf7UaayxtV7zTSEDgBpQidqK3ffeA29dMPm49QoJ5K2UiGHW7PdxBzMQnAAdAj9eg5DAA9cFv",
  "key19": "QHmtQK4dRgNmipAUBDPEfMbCiLNpeaCCQgitkY8tJzGvojSs13TkWosV2niQymHquytGWYbqev1kqMDNwMLUrPo",
  "key20": "46NnDooEefWUyYmJSmWrxZ75b9nS2u3YVBuS1dyooaLWxLPvCNUoE2eg6ZNdujUXXtURe2b3SebipbdgufsVe2KR",
  "key21": "3mFGRgp4x2JYFhaEdbwXDTNmu7vtjidbm1B1s2TAo765ARntiD5w91N7nTR8NaBQgWPcWweeyb61tnasTTQfhv7n",
  "key22": "52s4xT11ezdGVVCtFAo8Y4MdKYd7obQt4Rc7HgU83PoEB1KBNotTsZUuhZ55jfn7CeC6SnfU5c5kfm5wY9zf2vj7",
  "key23": "2nEwp31V6XQF3EFdLwTZJiSrBg2J9jnCPK3wL2XbhwUaybgBum4kb1Z53Zs7pqP9ttJ3aTE3aGd4FMQ3BFjjYnP3",
  "key24": "4fhtAjb92f49vzjrVJpMHDpHnJ2h3Ch8L7iUKqu2bFFMRJT5G2E9hgJQFht32vXE6Ft49FScW3DUy24oxV37W3t5",
  "key25": "2TiKbVXaJp1oqmH8HCAvAPsvmNQDYVHaDfBG6PoSfHuWtWpPQwxmy98VSrwxSAMseASamvXoXpg9Nrgo4vdNNNDv",
  "key26": "f4h4mgDeT5ka3REiYy7PNjRYt8ydDA35dgALnCd2NZzErwqykucZtmywTS3v2s1ESTvTSjjPbeiDBseuRkGnDL8",
  "key27": "xervQuSdX1VVheaAczsLvxVVi3Fe2NgPEjTATnXpgrLWf7ih3FveywbLvbmWmrebCNM6MuFYwJESsYZgkFpvUAy",
  "key28": "4s2TV1C32ziJA9VG7EEKtQjKduoVU6zfApQ4gLxFjCQ2iMtSj47YmkFKwe7ji33uvELTo7HJLS4LGRHg4Vknb7Uc",
  "key29": "3qmJFr87LNe8LJ8y5WFXAeXjNwawc2md1NqXxqJ48Jiicyz15WA64MJu8RvL3jDG3t4NaJR375NfgUBXRRBxgq1h",
  "key30": "2fafjBSJz9N9aeYhbM2NPt9rBfB2hGpnM5s6iqjJNxGsmZat8NdEqHFqLtNn3cmCQmoEw9BSSG53PH4Vqb3USgYh",
  "key31": "SgKAPcLEAfHWCUTynffweXoXBM65Ub99ezAfaoQcE8dDC9iWGSSci8c3w3Pe6gkEXpqpimupwC17pPzCaH14pNP",
  "key32": "2UUCD5kEnpp2dRtHeBn3PwdxRAXsQhL7kupLgivnMjLm5ZxMQwgZ3nA12Tb4TNS7jfxJMYaE3mLgLFL3UB2dijDB",
  "key33": "452wXjW7kEwZ3gQmnaMay2aZGWQu1Cu6oVWbzJUsbeDdtVt9WqSuWMApxhmmAMZstQNiuuE9FiNkkoM5iG476P9F",
  "key34": "53p6i1ikL4gKRrtcUJJifHJVL4U1v7naEmA1GveLduafhxWhiZ2uAXQLbxse1nN65NrZ4nFkqGqro2N87MdauHW4"
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
