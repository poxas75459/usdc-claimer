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
    "4jVYAGUsWmWFwSopDWoegQvGwEP6PgcQ32ALToo9SzGEmZtHDgDLJKkpPTjKbvXovuFefU2B8KByCbrkeCKEUuCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AEVktvAwF4Pz8zaybRi6Gby57fPMSMRwoRxWfNuX9DH1JuysjvqDmJDwsCYxgnJHFdjjZaXG9EfryCvbiBa1kRK",
  "key1": "8RMq6ynALzWf8h2iKDMjKgEguXTMxePfLk2uYDUwvM3PF8f43GZhJhVAfqvioGwLwMGTc9aFJuBeReBNmdv6UJg",
  "key2": "pnsUhwpLCMjgs4oUvNFKjCwb6hkLzh1uvFCF12Y4bL56hKF8xMYNx3nLMhc7ty2Wno3Cue8juqpV7pmQzybYEHK",
  "key3": "4u4MhucDsG7RSUQE6tfmXzkJ3NLNhiApDW4vMzy9BN4hys7jrpAhfTw9o1nFov4AEWCic8bEzL8zT8PYz63ZjZrz",
  "key4": "5bRDon6cAiExPSPoHeQJaKaFg7ZC8VZbqdXpJWP8AtbqhTKzgHKiavNFzmJB53ZAJ9JV4qiAXXZny78UrcHwnc52",
  "key5": "5EueTFWes3zaBqSBvxd6MMybZSAG5Hd6T3SpMYVc9wMCt4cuTSB5qZcgVcru25KTT1dxfUHWrnSo9KyNSfugtpt2",
  "key6": "24SreD392Df89PodfJR19oh4SqnQnKwt82f5cVCwvaGy9VNa89N2LHZaqvU4DjPwkbV5f6SkxP4M2ZBWysQ4kH9f",
  "key7": "5GEjUP2f2cpr2ctHCAYDFtceczXRKNoFi9Qtm2WwfNPLw8QpS3vcDasvQpFpjQhvycvBknNxHyXtmJonqYJSSegz",
  "key8": "35qTrSkAHGLMKQbpMnePKVJvRsPPLY2UDz1wHscqoMDV4SHZP6KJ2SsLjsfJEVDnsYva3uKQ1tBAFStVfaVj9jb3",
  "key9": "5EvybDcYRdGPkhnqfbDqM8DFeSEh2wPWwGZYyDDsCo6A5RzXpzHEfnxSSc5KKJqoAZS7jdxvujwUfhjSXPWrp59i",
  "key10": "5VLWQYboAPRhR6TVtxocJix9N3Ay4gTKer8sqbMXRwfit1vX9SsAuck1PZtrs2zGhUYuwgPuhdG3oVsGto24e5no",
  "key11": "2JMwnoeWMVFy4V3Gru7b7ukEmc5c3tz2bG4sFsssbFqcoFPrfoqv3baemoFYdNsaZh7kQUyMDaACkBTAZ7sxT4kk",
  "key12": "2adjn8kDJLKFFYP21mTavKJFVfHrw4mkknj5dwPCwusCZwsMLCwM8YTbXutZCB3BLdfVhESxaXiqTp9tZWmQwaSj",
  "key13": "Vmq4RDZ8o6oHuppdCWxDhHsp4Utc8UQkqDjMTyKv5hUZZ3vgj4rMJPYkYW4vugu66UpQbRVmZaTYS1TjskTpg4u",
  "key14": "4Pf7R4eQ9DQByCVs8DVwwe629TXXNuPvLdVsy35KQ89K17Zjvr2rJsU9qpnFL4GjLMcozgNyqbfFsbPvMoEyTQpd",
  "key15": "48XinS8fhAm165d9yW7MnZywjCsFa4ZNaeADzHhGf9GNz8xCgzd23WsH2VT8jWzZKudipKHqMSqn1fSgXL4JX96G",
  "key16": "2b1wQNfbwJ96GXPz5FuFxWtJvKbaRLNJqJPrsDSztZs9HBgmsMgs7jdua4dVekA9z4knaa61BdDL1Rr1GbqE4hjm",
  "key17": "23GBhJJHpua1TX9EXvLMtHKycuBo1K2fMGTvJtBCrxZ43X748Ake731hzvspWY7Tdcc6ij93kVvRtu3PKjyr7YcX",
  "key18": "2duFubxM2bsnEyHVoUmsUYtqFU4Bct6vh7HUqu4d9J8mNnMjeyqUUvWhR5yj3BJvfFTTqNEsrHfFCbLSuLgvYEdR",
  "key19": "4mmnrcaMgRTkJBh7WQnL9417x9Qe6nVvbGhKoLEXNTrRGrrnEm1RrzupjtJ8XuDn43SHkjpm9CAjyMWa9QcGSEWn",
  "key20": "QwRPXEjsMNh8b3J51CjRRhnbVCYDpSDBNvEGR1VyGQhm9qXLqrd9S17A8hC67aKNFneNa5frcqKopi8HWCLWgDf",
  "key21": "etgR1Bn1JEf3CJNmDq7u6RNTpBV3M9dfTSrRU5VqKShpZ3emNmfEPNA2gXpxMUHicPBcAALhpVJp8SUdXfKfbYd",
  "key22": "UN7NRHaKZTLPEDET4fzetxB5zi64toDacw6r1xjnRn81Wh4mXBiPyyvZ36ueGrbWipWy1CiBaw27rzKWHgeqG9X",
  "key23": "2Apj6kHJrQ3ZwaBqHSCzpacBu7VRYUunc62ErWfDRq777qv39CNA9wxtAQhJZkYCxgbuJMrnNRYD2DXRMp9QdwVD",
  "key24": "54Wf1L4KmSM2WBS54P9qmnU2L41wGnpZjA36K1RVY8XbbKRZmUcYDHVW33FYuTbq2rsjWKSWGhfnZhTU8cvf5FbJ",
  "key25": "3oXH4BTZHi6aQ1w3pFAYYN5w1BuYCHB7hAia1PnMgVe6c673ZDjJJNxmvvbJu8NXyf1CwCmefjDTz1v5iV4bUscn",
  "key26": "5DcXHyrHjboSL22QdUdasBLHGd3ijypaUmDrPq3zXynZcfdCSF9g7kTLNXLqBJ4xvGYkhenqNbcRHMZE5sBd9YMK",
  "key27": "24TnSsNopHqaoUHDtNYb1cxod3zA8uP3bEi4v8VRWxDmB9Fni2wwtAvirmcucr97b8jAJgTpNaVGMuGWayWqUTSU",
  "key28": "2GPrWzaM7MEemy2qLRDdvbRz985CE3zRy3PZDqhZJEj1gQtH9hAbN7XahdxQeA5Pan8F6irDrQNs1RTSnRCSuxFY",
  "key29": "3Y5Cigt3TC1JGhrn4Tk79vo6gF8BZ4WC4qGqSVruPrWNXF4EW1hoL4TY53Ruw9jHJaqkErc3NHAPrByHsdYTjh9E",
  "key30": "2HVs9mf5v4qPWB1m4VZCY5sVGRphdJ1DVjRsLHGEr5MimBW3u8VYZ98oFGVEseTMDZjRGsrpRdptce2HyPRPPHvm",
  "key31": "4KAcj2Tjb3TMR7bvEYz3wEcCZknKNsfYr2KcYV9YL2Cd1QdHSZFjwCwfXzUw7b2yxb32iWVgnMsZrjc2MUeCtRHj"
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
