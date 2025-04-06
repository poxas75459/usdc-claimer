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
    "3in7yBahDWTrdumkh67YDA81eoxKc4ZW1GN8gQ4duWo5ECKSDDRkDTwheND7dGhTq3Y5Uhct1h5o1FcvLsDqBpWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxyktSzuPXrdpRvSqRB1MUUmFxC4n1kWHKknEMkvQWiFaP6cGq1CUgGBXS34huBUuggmuWF3eGYLAiND2w5QzdZ",
  "key1": "LdpLnHW31MWbXtg3etcoqQiqE9FHJiKvyqPn697gxNdJk16eA7JfjsPhNk1NHwfERM6aoQJnsJjBKCoKJU4JjAW",
  "key2": "3ugQEr1TDQezAZ3vaMqYEZQnKGXdzagyCVszzCKYJYRDzWBJjNn3hszKWFpkGym3jn5yswanc2pa7NU5wQwBVXSX",
  "key3": "42TDcameUm41q4zUnLtzggAvMqWH4TovydHbtYR1ZhASJFJ6Dxsn4tCVU1WVe3CKD6giLuFsNkUFwHA93sUtCUCC",
  "key4": "4GQYJkgoZNtvmsxwcCx7UKQtCzY53PARC8rumcoSjPhMnPKetWJLfhLuTtb9ZXD3F1sJ58kT28q9tgBbMhAhgMiD",
  "key5": "3bUKtsbuZo1GbgEtCVoYuYP1D966CHit2VjFNqddX3x2RFahL5aVScxtH33FodxxCFnqiKUAwcK1CRWERYZ6LxQD",
  "key6": "2MLHiC575WoS6km4zSPFJCoYHy2cVs2xaP6TukTdAw4AWZVarSNTUSFj7JDVCCuc18yBEu7eJYPnVsftSugFnBwJ",
  "key7": "53STtTP9FcXhopYezVtQCKCxbAYQ18yZj2xHAbkwPyu5H4yWfBRN1CYv6E4RiJYbencyi6q88awU7ykdwPAencDq",
  "key8": "4tWt9h112yPtgjBuyu98bj8aUBwB2oWsK3Mp83QRVuxgDdVqUdYSX9HKV2wGwH62wN4P8rRLZHQJCX869YH82dhp",
  "key9": "3WMUR1ahGcS8UdrGcXMaAMoPazCvx41ZksYcb6KcrWfX2gDnVMSG7g4fm4J7WZGXBWrKUBNRNxWTGdKHknwGVp7F",
  "key10": "5sF7SMEq3zwYsmCXnKN2YmUghmCDmaEwLcY4PWAKNfZ5g23juixZPTH7qHc6LjTGykRG3KL6zarviG8YHXF58mtF",
  "key11": "4jfA8ERSpcbyb5hCmSwkYpQxwipN8rUdx3iogVGhDEu7PydpYnBKQYMvQAgigLvxxBALp5mVczwg9ScZEeGz5a89",
  "key12": "2peFRAVwPJSBwtdzkoGbjKjwdQDUhEx78d3v649YNhA81HUuCF3zUPb1wPhVqMXaT6vjrQJkZoiuDa39bpr9ktHM",
  "key13": "4kXQuq4jN92Y3Re7mzcgp93A2Ly7Myun2b5WhnoWTy2zYPqedyfoCCr3s24jmuc6z5eB58q4aNNY4xMiWjvC355P",
  "key14": "2RhgUBa8cqH1PTgHLViqfSqaypPAYmoTcuhWJmbVegX9u144N5q5BFNuuryjsBU9wRGVCGcgdWrXGwACkjzXBqoD",
  "key15": "3dRu7pHAft3uYqJnkW2wZCbqESJsR7Jsafxm3xcCUAMqUKV4wdg5HU1pztRRCr5PhXS1E9cRPvZAaAZRdJb5K397",
  "key16": "5o5mRNLSn16k4D5EKf6zUKatfeNqLzLDEVsBhGNt77tunk28R6ysocgvLQjtTkTSkFZEr1AccKb5UkHMU4hrcerA",
  "key17": "2pc1voxyGiPQtPvqMYAUnbdpfQEeA3o1apvKNGZTqeYjBapNjtxjdKN6CHFAsmZG1qZBwwGiwpbor4HXw5JsnT5A",
  "key18": "3pLiT6zy4jVmhLfCYKk8oJaSS9A7rM4WK2nrqYMtfPtC12sv65GgWRDdiacXDq3tGTS5CuftDBNawJGqUhBnPZvs",
  "key19": "5m79Js9Wfg2WMn8wtH4C6x9PKGg1wifEsq6gL2kAvuK9bRbRRVvKQfBHnsfuKDXZyWCkHwgWED4LsKHvwDVPBLgu",
  "key20": "2hezcyAbY6EtDKkNJtmGfDnLqAvuqtx3AU2LJQnkcBkuoep3CM7ZdifEnHzn3AUyedWdBm9juPPM9qYhaiwvgcLK",
  "key21": "3qpitH4TbtnqvzGV1Bf7aasrszww1LJCwsN7JqdH1vm22rjCKhYQGVCWoP4gdAob5XAiqfprtYcnBbvKVaNQFa25",
  "key22": "y7vgPqVrUt57g9gbnYR8T3ABKG4Gws1bvNkYmESettCqUCpuiCq1pBrnWuJM5sRRksSPcie7qvhofPHEgAtPfm5",
  "key23": "S3bdxDhPtBDjVFnK4ShBGffG46SxpJdj6swQQmk3MFSGNcsvaw85nJDVBicBq9498MQcX4Ut6FAiF4L8Xqtw5B5",
  "key24": "5qFiZV1pJ8E4v3a5gTncxFB3Nx7Y3G6hC5tPDsw6MtUXDX6xgVNW4h8Xnx2JJyAis3UD8M4frLYWPGPhF2MkJdLW",
  "key25": "7GsHtqxE9EPR8zM7Mz1JYL1FEiSHDtXDo7LqzXqSbEzcpHTPfsjG8PdqyvtN2T5kHLfEKfqXixzDN94faiPVS8A",
  "key26": "3m7dV9yfTmTAimq4xoHyxwGskXTf2J8Wq682yWEMJJHfzpH2Pphzcwy4AtTQEQ7Ygptaoi1BWQz5j7N8fphbrdts",
  "key27": "AF1io3aj2YDEo1vWQUWaBYxiL7iaPjT2T3z7v71b15DmAzdw7Tuf6h4jf9g2GAvF1t1rSG1KsP6sxXc5n4fdPCS",
  "key28": "4G1mjuE5FeHPu1NULMLXSYq6E7RgC4Z3R2CgKt5wEDFhG96Q2vLTLHpbEWyCPx5pBJ4gVriwZpxVVD7aQhmutQHA",
  "key29": "3FUXix4ceqc5EKu4vA94tWbayVKAoVtqg9F4T9GzkpYsVztRxvQ3tLXbokbpN5XXjweMTLys84HBLinoc9x1CiNZ"
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
