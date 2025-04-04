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
    "41kQYJSDv9Briv8yDs9f14f3kHKksXvRr41E5ZJhejx4zsGbnUuuZgpJ5owFMB6W6nJtzqAP65ixKyMQFwQ8N9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nDQggH65KszKNJkqEF95uYRLesLu35a9vw2RMYatw2F44jaoaNFZx4uWgHQ79WU1YsbGhbqS1yRChsxfGC4XLzA",
  "key1": "5E4mjFfjamjzsSUM3PFNbMSZkBtX9hHfErodoSFvV5FyVBnmsuP18iVNvcVeYDmFhC5nM1nUdDuSsefMeUpBFLAm",
  "key2": "3WwKh5r4PWcmY6Bx3SBgFrvkefr4aSC7xuWJNuHEeedgfKVxyDMAPrhQPEhooqNqCjoPb3xPj9SzFNW2uKGbPyPH",
  "key3": "V9oXhvDrpzUm2NcRRfybWbUg72yrGqxUpgkNDr5PYws7jEfRCbPBJvT8q7nVBLPwrNp738ia3KCh6dGcuu6d7EU",
  "key4": "2h948X6tXwFydkqmgT1aiVWdKtxCSYkZgxwSzEVsDoMQynJqLt2g4kPQ31mao1LnDM2L86yqsYvnDMUoKup3Gwh3",
  "key5": "3o16EYeidfKTehr4t9bjYDig3wCGp2oeJLPpM6t6w3Zzw7bYSTufkFg9gwj1xaksN1dYnz2u6LUshaTfRPymVqS6",
  "key6": "5WmYp34MJFpDCCvosmjEXcL6BZrs14j6vdAudSrtiHZC36UaYdcJFTTAc9L2dQoL2Ck2SBrfWUc9h87TBz9bJmYW",
  "key7": "7XMfau2UeCZ5UUZMWLvZDAy4h5Bv7S7gZHbGUsdZoLavehMTXB8f9r4aH3AFjmcCyQWFUzoaC5umgzH3FxomAu5",
  "key8": "3sK5NRxw23PJHtrSdDnytQkhwiUVzCTsfqkAaVbLZ6nkjEJZiEKvcsGpbMkHmiE6XUitWPJf9DiivCJbbCoYfYE3",
  "key9": "5yfawbQZpf95tzYtqXJfV8ziwtiJ8Li4wJXtmsCHHBQoEyeFfUXyWfPxk55a2tpxxAZh3gW5LnUWtGwD7Vfhdh4i",
  "key10": "3szShUyu26s5zSszVajnaPqoxGds9heATTK2zXNA8fb9AvX6ngZRTTdB5d8sNknzKmVuUUjPpc4hG8b5ZKXY5W6U",
  "key11": "5dW8S6VwsYhyt8XXyDNuKNsugZiptfYgBEhFGZGE8tzMBbARxQWmHMVwhmc6z6J5mBzvxyNHWcgafkUWbyixYeAR",
  "key12": "5LX9eQcjmaLgrZaLwizqKEwLhRcTt7DSBXmTMfrbDuUfasTVAiWdqV46LMsHd6uBCaA8eRFrvFCULXwB4dQKes1y",
  "key13": "5WDftcGeVdJZwVoJ1vBudSPjcQcY6EFubdUbJDHsUXhAoqFadCoTbse8XeQadHBiZbgXSpHLD3aw5drnjnPDWMce",
  "key14": "54gZCo1bmPx81QGAQBB2W7zUuVAXi28DPqY63HTLQFePk6wNHbfLDJGTxtgJuckvv6uS7jGfGbT5gbd2JHVqGmy",
  "key15": "3afyYVELf1YBmamGYmzrNYHyuqpgDwguqGBTLViewbiA45oGE2VyfsNBed3mRivGz6M8wvS6vh6oBwDrpMuFgeVi",
  "key16": "3XvNUwZCUVwKu62bveBUEUp6X1npFExEoRFu8QSe74EkMLnyCUsKPx5oaPobziuhyqaZStx4XjVVgUdcjeEwVT4y",
  "key17": "4o8mM9gpvrhGZq4RoJchF6HSA6GDQjimQWbiZ1xUwQUJQjuQY7kciYSwEq2ruXLatSi1gaTPaMM5auWu1t18rxAV",
  "key18": "5YbNwXZcvJtwXZrWT5Z6jNEz3b8dhwjspVQTzHu8A6yojPWAxTkEYYEsX3xW6GH1JRTmRJ7y9xgVpeTs69cFhjJi",
  "key19": "imqZASwVQRpx1pZ1paCbG2txqU5nKAaWyxVwBqXKaWorZvZEWf3j8wLzE4WuyFKYUHKqrnCipHFSVBR6L9KjmhX",
  "key20": "5igrDAAVNqxxWMREnyMhmRmGZ7FHVA1pGWPBzGcD3LrMxbAg7UH7trBxHytTpaRxYE3NGqkL4tWpVSC78doT8Vmn",
  "key21": "4hoN2yb2Bvyqa7G6FQHXjWsAiFE4gzVNHnNNPPDH9Nouq4ZyDijGFQMkB8vAukevD3cZy2MxTpzDqdu641pTeAm2",
  "key22": "3GvrtpG4MngaJW8rLSBtFid8e4K1utvuXmyixE6n6z8wcoFRiUZrYTrzfXQTqgRqybnfduBjBsA2NJCcsshfzV3d",
  "key23": "3UgAwEbRE9hY5f7uUph7kLVavxuqPPjJTqEFCytC2mwdHAAwGh32Tu82V1xnyW4VVmpdNeznDzH5mnDp2h7KH4Xp",
  "key24": "PsJPzhPPr9U8yB5fqoVSNEwovGgzdkxBxaa7frqcebwwB5jnAaJgJvwDryhdoc4Zsyb8gjR66tRpTx7kuYmfy8F",
  "key25": "573KqxGKdKnzDKQZUeZd9ZNb8YhqwMoj2G71LpEPC8GsHjjwYZUaWaaotCgqxuJRqyKar4JtUrMJSzxfCG4UvBan",
  "key26": "3VyPHJTMw77Q4kjtRJSyrTSh57XhJt6dpq15XV5DC4iFnL9cQax2DTFkT3rzvnFXb2RXvrZUCyzg4oSwjHvh4ZyF",
  "key27": "4M2AUeJbNxLcrhxwSR5jKAXxVtRwM6vsW9azjf93mFEzTwXZMkwc14dc6QVpNNZTpcamatBzrsHiTFNw1DV8xfAb",
  "key28": "63m3uVjcwhnXqCsZxCW2jV9Fba3LfCF8y21Dai2ppSES8kaZpv5Pc9BH2z3x7vnhtZMyJ95DonqjhC5gFEGThRJb",
  "key29": "3yBvcJRH5b2jSuQVrpTLh3fp35wbLgYEohcserNiYmejXuvd5uoi59dx9iHy41K3oKLPo6zzqTi64naAzFqvTYYP",
  "key30": "3WLQZY41b5jRbvMqhfmUEH9dFi8SrjUuSyoypZ4UrnEqVr6yBsT8mNAg8MSWfkvCkrKbpur6UBMapQiQhFBFUwZM",
  "key31": "4yjZAoPnVJMDLLwAeLBY8UGbNct8hMKuEmJ3rkFV7k1J74aKN7viEEXnGeApcCpzGdHVaK25eAVaSbnAu7vSYTXZ",
  "key32": "5NZkntCtVq6S8VDLUNFNwMW235iEMtxrmFk5GjAxTe1BDmygtNtzJ2tebyxyXAVfbVbr2Wgy2DXaGqoAqBGkC1p6",
  "key33": "2hJT7c3PwghdefboXxKgoZNNseqjKKG2ADdawbC53CNMggHizGYM4EsbpziTjgSmg6aoG8P2fE9QhPwvvVDR4xMK",
  "key34": "fK7pXAeaA99xfoQ2nqcXCvqdGgEBSW2jrwFBbVqvoVB4jXVLEzG26tSkHM2NFxBhNmk9iaoTMcTPZdD6tFWDZzr",
  "key35": "3TFss7v1Fz8UfLxkWHTfHiw85AKQ2LkqudK6gB7T3XuAX9E1QB3Wmood5vQWEchtPJLzNhZsTe269NdNVgzstStN",
  "key36": "56G6ozG3bDDanWBh8NRQg9Y8hWeG6EWrFzPMycBakDZ7v1fieo6eqkWH8QB1E7Ge86K6UZFLXzhqDmVcdvdpSjdT",
  "key37": "3xh6TaDRMonxY9d4YdGgnQuWLEJMDTHyoRzHLkkKd3N4Y8sNp5D3C7KyNb9gh1D3pywP1jQrjk8gRY1ZQCK5q63E",
  "key38": "5gosUFsMpNvoi56Uz7W394YLUnigA2bbpLyHKDr6HUzdBiunwz397GxFVtkY88YTKx4ujnpRNJ5b75UfDdaxid1d",
  "key39": "2S4UzMExYG1tZJ1srSeFSuB2siQpDkaW7izqaSUqxcWNfCXknSajxgHC3jWssxbnP1pngc9UX5fY9aQMGGRP5DG9",
  "key40": "5jazuJinkREj6Va146XXqob2ZiKA46tWgJknHxH9gfGVXrvLBTy54tCLWHMurBGS5oQV7kU6ZCgJYC971TxodXMH",
  "key41": "3ByuHZFmngmWMTDK7wj7g5FJR16vj3ugNEvGVpzJnhgRqAC8CU4xRSnQBw2Ga485MP55JGBzTY2DVr7MtzhoUXbQ",
  "key42": "gDvXn99mmUQUvCbySLFUXCTRcDPLGsbJoGgfM57u5pwK4RQrdoddVj3VgvtU6m25KBFS7duLiFrXTZPxsrCDZ6X",
  "key43": "4TXVGbKQ7AMARnsfbcPFsasyFjsi4yZx2HU1TtQv6nwfvjFbX1BryNEmBg9ZbeU1xzJuFTgKP1N83iqv12ZEty23",
  "key44": "2ruWdjvh61rD4h3v6frPQNLcj1GNtxay8bjenXq3sLMMbpucDr28KB1FPNiLcJm1HP8SPamfdZJnMXLtqczQzCp",
  "key45": "4BAXMvG6TrGEJkMenuJgh1UW84hwcxeWFCkzk87tHUmiQV7EB3eS6wPZDNzwdhYJur2Z1C8YxyoemWPSHyWmknkM",
  "key46": "28tci9wwsvpFg65U4gvrn6rTpt6Q2kBxSXd4FXEwEvihgcJBCsmr2EeUGfAkMvHAHaatQRheRzj4Z3aJZHy3rdHY",
  "key47": "2wfhVCSnTg7trEL6QF6Hj3gNLVWBStYDUgCnomx8XJmacdVTFu3yqu9Y3kmCrYDWuMDRg6HzuqbLNCE1BCG3iAGH"
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
