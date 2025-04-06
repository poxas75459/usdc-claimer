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
    "obNF6x4XdihpNF9EHZmE8WBujjW18ioPYGj3i5X9sCiTrKgYKJTBvGnNutoLSKUJR23gkq8dm8dMQaYucJDN4iV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gZyx7uBRxXG516kYvDkCNzfmCNiL2UqtvE9LvPiqNUoCYmGaENhUZAmJMVNHQSx378VpWZtNH6TKVsn2aEvUz12",
  "key1": "4aYEJJMVvezob7N7eD9r82ufTxaYhkx63mjARiGNnaThDmz7tYgi3ZUsVSuBXY9kpvF7yaNCBCNcE9Rxsnnrg8d3",
  "key2": "G2qTMwXWsgMwdoBhqmvczhtvvuoKP9My11CuKNWShCHfxmaY4E5aky4PVcZ7ndLp6juf5TtrH1rYrNzrJ8dZHy3",
  "key3": "KfGnwMwpS8BQeRNkTW9ipxm9iNvfxipuybTAeGU7iSJSf8YvK4661RTwLkg5DMYQXArue8uF6mqrReLJMDWvJE7",
  "key4": "24E3EsA5pP5WjNESdDGKJbMDkU8N4of8NEhkjBsPdZgRxPgUw7R24zh9xSxbaqVF8KhuWsbGwpF8KSQ8oySnhME8",
  "key5": "2Nvm67XFwnDQQfDFJMrQjFoAnW2oRU6sWtavkTt8h2xyPL7P9Jg8EJqh1uP52WWoqYGmkeiRVvWhWLgkCdxcKWbF",
  "key6": "dReJzadbkLWD5jsUPtzvZodex1MikdswE9cUGXJiuLZTStZ5iBiw8DA9PUnQ3zDWz848WQqQnGRFTPrHKJdYDfa",
  "key7": "3oG6JXPEHRfWptuMRirAtPNvtmvsPG18daMcvUHMpKW6DGZqw5WsUXfXUjdtRCmxn4JtkCV5TmzpeaZRNtKyQiHo",
  "key8": "3jJR991yZPf2YtoHVYMmjAczVY12oiXv2KTA6KgGcT5LHajHqSgwwGudSMB7kwg9x6VcsmXJoTZo7epbboGq4Q9e",
  "key9": "3eYn22UE4hy1oGwg17NXwZfvmQo56Muqerhouc1Pue9Hb89gfcMB4Cjop51RSXnsCJeu9PfXLi1PtDdKorPNQfQY",
  "key10": "3hVm2gUUsPFYawSFJfJGHuK5X6dPJiDVch9QxkBn8gzEaf7quP4acq5G4JtzNP4G1f1xnQ4r7EZcuuq7LXgq5e68",
  "key11": "kqyTJtw6rFcDjegw6pnuYqmr3LBLmhUosT5PjZcBo1AKaAFhwcjG5ByFqFKwW3LYeCAN8SeuZPZxBNevikPZ6L7",
  "key12": "28bJdu6Jn2Ye4JykVA4cAtNne8MY9kSLFin8LdKTSQWp13Tks911tw3bqo5dsTZqa2BwSgNrB3pprstNgB9HRXr4",
  "key13": "um1DnGqWg638miDVaDEtkDra9gxk5TNAhq2BuPPw6PEU4cHszesQvrgA1BBMq6zNcECoFrdkAwia12h2aaZzgpp",
  "key14": "2jaCKyvRQbizM5QWCtgs8ErY3RisjfCLAU42HEbdPAchg5KhBJ26xJr5PPcssameBoTtnMEsGBhZJrfqPwGkGYd",
  "key15": "3uknRa3zoLkETAmZvnrzt9PvLxMGnUQ1FELeu3zpnRMLQ5R8sCmyf5c7aJ65wYQuR1bjnSakniny9ykMSsEzgecp",
  "key16": "2czaZd7afny2JhJ6LaJbtAJCJ6xbx4Gs855AqExWcYeWXu71XszePmjXc3UhL4QMj41BQZPxLnkrCC4EEDFv5sj8",
  "key17": "CxCZiGvZrLkNDXddGcUS8ynWzqpTZ2AE6Jr9DPMgEw9e2mhJMefMKh6hCVWjecgtQ9JFNmtBUntt8PN2XqrfzwU",
  "key18": "4NTXZDVLPCmJxuMaxz31EanWbAPT8k27vjdaKV9atja9zX4Uo9HrBdvANMxRCTyzpqvpT5ao4ScMcnrHfMn8UgDi",
  "key19": "Me3vDee9PaTaXffXMRWtz3YKFPAEWnKg4cg1aRg41N9KviZRC43JVEKqNCY5unYe9teijxfMxHgzRuVp55Yk1L7",
  "key20": "NQNAUBHsfC8nT5yy32fFRYtwQuLA4rQK6HP8XagDrAftCPueYmkGUBpRCHLVfTKcAB7Z5QLYa1SUEcHztGYMNVy",
  "key21": "57HH1EcBrp3pDU5P3mTK5AaHtyXa4X1nWngURHQXGK6DsdMqheNFdytwa4E8x7nxvEz985ArA9gWBzSmgBpWzNAK",
  "key22": "bjCPY3MRRdQztktXzMGHtRrJCTy5xb4imsbAbAmeLGUU7BVSyn7CU4s3mkWvhyWkaVSGNTuSu21eLNyNVwGRATu",
  "key23": "36mrX8F6a9aWPz3AoCkMctnx9GAtc79kWzcr9VHx6TYsJcus1KWkn8jRiHsbXynieTWQxY6oagCEpyUbQFuKcmmy",
  "key24": "2XSQq7E9W3cR6v6sy27u2wxT3qFpCx2bthbuSKz4YnzguPLmEY7oefX7gdvJsKWgdajUXctQJKq6EykR6JV5L7Lp",
  "key25": "58kK6zFqrxxQrJqJA6hwsd4mdMQVtD3bXyimc63bgtJuevpcp1MQjjBUUZAEhmC1Bpv86u2AMriBQPPLo2QySwHn",
  "key26": "MJq3TwrJg4YRCD3Z1dPGfCs3sJsHAbJAosC9zRusNkaKE1omJUrCv1Uyqvd9V5pQ8WcnpHaAoYyHnxYtH4qax7y",
  "key27": "2Fgfix56xKbQoBd7voxWRsMeubvHEp9URkXEVGw4vPZz9zVNt8kUDJBjfr8bZceiPcf5JYiGiLt45TUKpuUzP4PQ",
  "key28": "38iNjcWcZRoMx9aqTNJsZKQKaP4QRiKtLZ1XRX2LZWADDJwQjJJRx39YkP41Pp25HoNXUkQxKo7UaA2zNZfWbFN",
  "key29": "2ZnHsEXVjAmchYCykBEWUrQPhMKefS44cRfmohTJ2JebaFkSqUFgvuUqzL3Mt1VpbznQrV963VFHaiTBW46dcMYs",
  "key30": "d1YyVJydEsBUEw1Q5JmGNwhcjgTECUBdEwoS5MHExwAYzcMztYaT268E2NrRhmi6b431TijKH6dz78h4NexqTtt",
  "key31": "3Sc6P5RYVSUN76SbDZEDfidpTGByGKyKfwHy4ZAbt1yavYTe8XmoAtYsTXE8XbNHodnHEMHHyq9cr32PBbaiim5y",
  "key32": "47X5vdMMmrgEURJDGLb91UYkNjNsTijj9Dh15zhnd9Qn1gSxyDyMQgdVkoe4V4NfT93BojK9ARwVqz9GjeS8dTw",
  "key33": "5a2gNhDUQGSt2oDoMThNFB3HmWq1vBqpo1LNMitx5FgLmhtWNRT1WBWJDpWc7J93Lrwzke5RcfQe8wMKfxwC4rJx",
  "key34": "2AMw99m6qikRSL5TUDpMCkL9gLBWWpiRQJ17dg2QExA3miTfC6S798bUtng483Hkvs2QmzwtE2kT5AVGazvjH8q9",
  "key35": "8Z94zAVCZRvtGYMg9ksPBwpBAR7BGPTnq9ffcR5SneWwC7JZ2M5Pk7bRgZs8zVX7HD4Vc1whY8bcyLrbVWzkMdG",
  "key36": "4rTFgPzWXDMefxSHfKouuTHK5fGekkfrQcQa2PCDKU7rN8AzU6Rox4CARk1R7j9CAijo4Bvz55awfeN78f3hdbcm",
  "key37": "4g2B52Lbz3TKbZwhDa2gXJeGwcJE1QyovSdqM4bypPNbFkN1bf8eDrABKrfAQjZUPkKqzVyyUY4nyX2BzAsRqNZb"
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
