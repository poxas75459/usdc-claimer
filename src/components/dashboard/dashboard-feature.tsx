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
    "2gpzAqwEkZmqS6tLK11qemS8GYzUnNqU4reNQHWUu29kUYw8J1DNFbnxiBCoycme4bagmLyWAvEKxYLBxv9uhQbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFGzt8ZkSwzxPtkF3yVkJS7jsRrWh18pYK6jqoLbucAPHaSvLCJ6vKr1kGiamvdmWPyUKdEAG4iA5BcageF2sxB",
  "key1": "8yAquzgXPxL7GE92dDjaUBG6BB8RFqxiMGSi8asgp18WDgcmhzdXQqcXQhxoHHHSF3ic61MCJ6DQwtM2B26eX4b",
  "key2": "4vHM8YvBQQd1XkQUvzDsxYh1D6w2t2vnXxLFKRaexL35AU5LKxVYQnFZrmSC3iJDe5B1Q7S12A2aW3m8RiZJj2Ys",
  "key3": "8zKFRtXn3TQqM3vsAi9C95de2HkVeh6vG7S1A7ZsguGnFgZeGHLDVVjbB3CFT1tKujX45xauUXU49MpnkyyQmTr",
  "key4": "3wGD7EAiGRZ881bLeJuKPywERe7s2XPWTqm4wVQxx8YbFXi4t1pJhaSzEJibMSzBLH5BKXjvNTjrsPRYehuwoxnD",
  "key5": "4z5KsxLcaVJqAFxeqx8oocTxTQT13EGfhZxf8tExT29pdmsR7DLNmKe5WaAkYKbg6SyiPzQS6whbh8MsA48AyB9J",
  "key6": "TyKArhjJRuMPJYbTYiAyGX69s7XjKPCbg8veJ5or3yEMPeypWEtvsztNZPkpRcy5sKAp6osvZGuEeWovzgtbJVB",
  "key7": "2c99qfoeaJv5EwHjbApyw2aHAbbawPtpzZ5QSn8JonQAdiaZa6FAHkYVcmH2P3ZwbNabeBmGMvVju6kaEd2ML49",
  "key8": "3s2mPiMM8iUeogRcgj4j39PcPNAf7eDCQYpdnVqFxHsamEMsFgAT3TkUUexzjcHRoKQm6Fscjv7M3SAdeXzLQLD5",
  "key9": "55qZT8vrmaQUZuDyre2NMQtCHUxSmLxHacDBkddwZ5NDjn3pPscWZPvL4JjQezKPfzMmCbGFhFT4ztFaLfmT4at3",
  "key10": "4hQefyM57mdjPePvpSU4PEbtPuJPPCRfMeMZrWAgtFawhykFJayz8i7H2gN6XjnGSNs3FTsw7djU1naejMq8mjQg",
  "key11": "2MZ3ZPZT5mEasuJFgtW7p7Ytxqemc33CaZvK3hnQqF97HE2zKFxu7RoamKDpyHEbywFPJYbKtYG93ejAo7ASnaQb",
  "key12": "424f9ceJmPYixbTLZSQ56JS4Up3shrbRQYBzDYSWZhchHe1Lmr81bf4ntZSvYacDmUbmFgQPzdyfomMMge9BQZJr",
  "key13": "53eyKA99pFUiX3uJgJsSHHN5CCcAuLCaoTrHaVKeJ3s8RhieFR6reH6xFfcozqiBZqwTBKHztbgws4CPHAJuSXRw",
  "key14": "4er7Usa5bD25JSXQCg1JJa6bv8FTrE2GaRzZP2U4yzmxyzkV9NTUprsxpS1u57C1ifxR7XTtF1YCZ4An4Zhi51oJ",
  "key15": "56RZeGvVvVJmn7dhWuhkXkMp9EdeSQVU6matYu9denjLB6UpRgegidFTRQH1cPReTe5pcoN8QQNQSTEtF9DPgXuk",
  "key16": "5nwaTA4gpofEuD921xoFWUi31nfo9r96e8kbmc2huxchNc1URNGiM7n6H6SaxAXjpzsfPCnkC49NTUBkSxX1WmG3",
  "key17": "RDmpTSKte3xN2d6zvLFnPGtc9uKyunFgGehvr4qDMNsP1DTuGKeQhGtSm7VfVHY2BV73XF9YbPSZ9HKRQDHJjNZ",
  "key18": "53uxPVCEKdNKDL2H31e8aCD6b3aUWE1Eki7CJjBJKCDaEVDaE7h4mNP1SJ6amaR62YEjX17JdDw7J2BdSS6MfWuH",
  "key19": "5oTkAoawUobozYbvYEwKmWr4urZLcWTaMsiBpbvMVSsRCpY6yzghLypuSKFEamN1vtysScfwuezrEqVusQt7jFzm",
  "key20": "2nqLKSJiP1DGQwjBezXvgPJdZMoRVQBAYLgfTRV1fhhZdah4VaWx9c3sia651ZSpdSTf55JYahRK6VaEzSb5q6ck",
  "key21": "5wwFrwqpiSgtZcRU22aaACmnBCjE9GkFGaXQdUTnjJ9Jr7gVNnNMmkYo6VUAUBwYNsSmqYXrDpFi8wugZkfwEs8b",
  "key22": "5YdCA4xBoLySw6CJcaN3VgmTjwmScJbMn3NsEQFa9AhaJgWBhSSJAnBuem9tUNjsBpdXW3wXUCyxrVa5eroXzSfZ",
  "key23": "4ysKSkJYQCs6W2HjMqM1DNuy7DNhNqVcfPZCsqAvyQgJaruLLDKATiV528JD8tUjZvGsyggfndnULBwXtBFNbed9",
  "key24": "3VinkyLxYUwiCg3RBUWCGWSo1M1jfGpPo67HkLn1khn2jEQnGLhbngPsMjk2U5Ggjpw3RNzkvWMRUAZSbE5qxfRq",
  "key25": "3yq1TEKa65xvtidu7DKj36p3aSPQnX27scwYq3wEHLKzMyn9b1EYxPSjnubVBymbibr45SZmMBURLE8yGY8TGz26",
  "key26": "LdgxUShBz61CMRmU3RNFMERVszuLWKXveqc1vct5MgbEaLEzuyFi4Vu2Cz9rQhc5XCun6u6qPNgEE2m6t7bk8mM",
  "key27": "36Xs1KWKp8SQ6KZMjprB4JqoA6FL4KdQEYxcw5ANYsheTjQS8sfjyD348ndZvgq3RbJgMkbwcseefsj9toogv3s8",
  "key28": "2tM2e9M2zBFHSAMrCuv2KNhFghr9tq9Bce9AQeGv4UXGZZCADQA875bT8pH4VUCV4zzDkvDVY1AtLCZVMtHvnpyN",
  "key29": "2sY6HBCd3M8uCmG9CBJzQy9xxR1ECXRb6FiE5YC89nNT2XT4EQWswGwSTuHwfjeW1NvoUgnUCSNXrVLZx6T9nW1W",
  "key30": "5bdidPs9YkebxZ58FbK9b1EQUDsa2ejcdmARn96jBKqvcWf385fuavo1LSa2PePTcYn5dPQ4J5JJrbmgfJ8vPHKV"
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
