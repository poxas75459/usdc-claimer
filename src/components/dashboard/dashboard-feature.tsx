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
    "U7oCiM9QhdmKQRQXrRy152zd5QW25cmgzJK1bMWYPNqLoDDjYDCthvvqhkT7D38JBvoRdPM1RjMHcKzNTfBpp3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQBLQJ6ibP2a1oFbesXDheDasP4eZRK5TnczCEvqZ34z7BE4LfviZogEFYijw8mUbH44epqZebJAL5x7ZWGUvFb",
  "key1": "386hpazaUNbxzRLSz6D4uCsLS74mnUPtpWiXQdiEsYB8pdBLBqfeCXgaVy5L7YX3WCQGtD3shGF6qvkDb6tyRMyg",
  "key2": "21c8uteb3FSNoNR712rdx5pAcL8D8PhENiNSp1Kpj7zgWKBifdXf4Sx9RCuBPHtqbT55Tv33PUcAvGoSoSdaTuMC",
  "key3": "5BWPHrm5o5gPVY6ij3onKA6sv8EJwLNKsNqkD93vxE7dr98FCXXcxMxDJdBQu28DkHU1CgjTd8s8xLczLk5iz5Ng",
  "key4": "34JtVcioeG7rZjNwBf1ERr6RefuWc2eoW73H7S7b2QgoLAaCFNLaSdY1WYpR6ETsortg7GnjLBqEuUk2fAwScWyu",
  "key5": "5uDHaRLsDQC6iJ3MVL7WQNdW6xUrxBzv6H3Th23M9gcAgKh5kDVn8tUx172DEKHEJd6JB82zuh3kkvHgEBusviCp",
  "key6": "5nfWrZeaG7P9h79fKjUx83NgiyNw1EzPMv2WqzfyrjeoaTqnE9gE9oSjvmh4xfLJaRPoRGFQQj96kZy72JykKZjd",
  "key7": "GnrGd2VzNUHynmab13Do5oqXYjBeTpNAAyQ6bGmn7SNG7mjxmKxhySiJWxJxfm2zT41FiQD6AockVWhkrc6Yn6X",
  "key8": "tLRKp1aXtG2VcDkwYyMaRdsyeMhc1VXAXNUuZqW4Jo1MCH9NwkZNTtqF2BRkTCx6StYhQKd8Y9JhmJJ2yTAwHgm",
  "key9": "4w6AwaZTnNZzGK73s6FKwUcbbQwdaovgW6rLSPXeK7pSheFpwx2vhGpsVznJxrBTvBGc5opGxubrRG5yzVT8RtqH",
  "key10": "3Quf34zHj1tCyMF97pi3SVuH4CXkiGK7Z6MLuMVbSo4MEfT9UWSbkzzHpLGvErQ3AyL4HsH3CFyhQH1WW9GJc4cd",
  "key11": "5ejMkzonieHXayRcXm7NrsVf1WAp2jLGUz9vKYwFe2BYmUSDQtLqJmsxSCY6RQtGeSrN2AWpLWY5pFRHQJ9LyEG2",
  "key12": "259jR5H6yoJko283ukzs7BytNCSjitwTDu7sismL4vBfFtFuTeKkL8shsXrhvitrmMDRdLMeXECWYm38XCudQfLF",
  "key13": "3mrh1HBvPQFKArbfj4CKk55NDaTe4SjR344GvfYuxDhGDU3mgFvdJm2D8HDyPrdztMTNwoHp6L5S2wuVBPkrr6jD",
  "key14": "5qhhnFueW1ZfgxN7vAV3L8dHiD6uE7JqGnVJ9btDJXY5cDWEAW6y9EpZEdrExEc16TYeAQYPjEvNTWepaE6cFQT5",
  "key15": "2mGZQ3igCSTE56HZCkC8ZokFGJpyNWRBF8iAnWgvHmwzZsNJFmUNu1743cBVCRPtTqAMsrgh8NYoaf9YNrv3wcfn",
  "key16": "31HBnDEozdjYXTePbegYHisYasvJwKdPJh93nHaWQCcF1bjDJqBS5Wvm4w7gufLBSTLBpeK714eiZcM7zwcznhDE",
  "key17": "2UXVoifj6yFRDyRNAD3ZAnm5D9VpnCGPbyUXg9CJe1BaK8XnGcYFDZVKWtEwtL9pMg5oUw9tT1kEyhvPngThexvG",
  "key18": "5rVhHrW3R4F3wG2xmXV1yy4bCe3fdYBX8tWQD4wZefiMCHDy2QCBVkg4Mj5mdmkSnGku87jv45d5ZJ6bxp2mPzmV",
  "key19": "2zGo85sF8CFdngweKpHZLzm2pR7eb2QNDdNNnupu6fcMGaT5Bzc4zUYdKPeuXmJr3RNbPzTwop4G9gqLogwkXaXu",
  "key20": "2Xmwj3Dn5gCrBUiG5t49FUQQci4wxgw7kJNDmxGwPN4XPz5wY5D71mqKsNWPf2JXy7hMthZAFnEvvw9oLYPWNXSe",
  "key21": "2qVNtNsKLDYhBV51rnL4qcHM4JS799j7LnB6jHRAVXStTADuJno5Gw3dxHdmtEe7nAAjT6LwwyrLihdJEssUDJbK",
  "key22": "24xhTqnf25SfJfPfqCVYdNXcdWJWFwFyuA1q3fNbwwGSRKXZAP7nSEmwwC8fsUWVZr4JarcA2myxNGjB3hqCdRT8",
  "key23": "2Dn5qtaZMhTrmXSRBbRwoHaXuwtAaFXHh3LwTuootKgMn1PjqmRXa3ZzNdKrimr1arVW3XKhrTfi2ww8Czh1B7aN",
  "key24": "4Z72kSxGCsXENea6vJXaA4hEkQPgNrnHqLfSMddo9o8eNdk9AspF3aMSGERHMVLi3vcYFUaqwjgUudyFmv6S2DxP",
  "key25": "o3HWjJLzLQAMvEbzQ7PBErchcWTUXyFUrc9b6X5dMWPRRMo9oKSVFsFYsdhyDu5UuN4CuGEEQHyQ6vHggKuUy2Y",
  "key26": "2862MXC5L64WPUoHguoi6EsL3jFafxZE6enuWX2pUqnWP7n5VEAW2Z5hdwK676gUmuPbc3N5shJrA7rnJM45yu8P",
  "key27": "Fxt3ivnCp61LSeZWG2XAMKXSD8ciWaF7U3nMc844kHnp6AMCEtkXAie4K2hf2Ws3XsamMeMuRDkLAoQKaC6mBav",
  "key28": "wNWnmEeezrzM4e5eQ24HjUEKfLMfGMqqb95H9obgME2TkVXLJrE22pZuw4H16A1to2F5JQt5mGMJtrZBygRuLQQ",
  "key29": "DHFwNoqTHZFTivvrtgkxMgnFJt3WmT6J2rbZEfcB1j25TGuQ8rprZEQKbKq3nVQbko8tbDvzCkGmzAafs8jPiLs",
  "key30": "4WxaQVCmmptuSNutFTeEqCgwhvxB8gKr3vHWFjuzmEFicuQcu2YEGmG941t5Ntr3MAR3CuQuaYvk8vigGieZ8dsy",
  "key31": "4WedDf18nkNaYbn67pT2gp4s1q3gyD8dYv1VPTrRHmHE3zxF1SqPH6XFUnMBttQrYS2jXVtpuptKnLFC1VyLT5gw",
  "key32": "51oFCTk7UYqxJUXKhj85SraAEUkxGhZBUn6CY4QmJRy6dSFNPxgkzu5mdKBYDQWQ6aq7ktywCFFSpRP6NEAmC4Rv",
  "key33": "4UexfWmQRWKZQKSQWbeY1vcZozWf4Yuf1tiWcpNvAs8NGoEZqhNFtinqZ8Na5m2QuJTXC2dcSyuF9QD3dauMEL5C",
  "key34": "4gHPiS5MYk3GLJ2VJhxC8i2vc9xVwjcKs8YskYK8Amd8CQD5mGTAAsKEc5KDn5SBtJVTtB9jMS342wVxkoFpcAp2"
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
