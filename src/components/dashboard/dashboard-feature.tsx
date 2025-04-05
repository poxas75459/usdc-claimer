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
    "2ZiLGFTJmSP7YYFUsR533aucnJrxNRfQQjp9RfMWo6ZFYsezCy5BSp5kDXhGUbHVzuED8B7uaHa5NbPnpETosNWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKvFYo3hBcz2t75pooF6S6fNNWcgX6HsWRN6Ro9roLx4KgtFgLbDYDnYzkLxLfGSBzEaGnTxkht7soxa1gzbCEM",
  "key1": "5RvSFtcinDUfbiy8agvshUxxAm2T8SvC4KZXL5YL6ug5hqpmcnQPxQVQVAfBzxStTQ9kVjNoq2GJKsicNgYqS63K",
  "key2": "3xxgw3EkksLbGNDanB2ZoqfsuvkHG8xXJ77iyaof8R1rEcKRa9RKCE8gvBaxBFvWpDd1xpxwbKDjwbAc6FMeumqX",
  "key3": "3sQ3RNWsnx6pQShB6t37QXT7DPd438trQEbShzpRUze85RLVqiwBZQNhSDapxefd3vJ1LHKLmUegNBoGX3JdrMfh",
  "key4": "5MLwRgQYVpV8tyXMq744NP7ZqFjzKxQPzQTPedujfvKXeaqNDBR32VTFPm7xdH3GEvqX5LYHnZ3jNqAu9dYEJK4",
  "key5": "5BcYkrBWziQSmEyHJkMtr9RUnmVEb8xrzzwH9Smi7trUvFa96ezEGL8d4M7P9bTwrKKP9PvzLSB1g8oRWw9eefoo",
  "key6": "65BbshFcTxd4XDgDz2Qc1o8tNxEyC1mKKdbfsKs6sFgsGKKdLUbE2Fjgriqqxoo4S5WtnpJoaNK5Czgu7VbugLs2",
  "key7": "KBNmLYNG68Cx9LNc9ZoK962YGfcq6y3jYGJpRcuPJrEMm2jsXyRKbvDu6ugmvqFy7DezD7v7mPh95MK7MvSoBpF",
  "key8": "4Um4EXcxrzfGee7Zv4Av17L1o4WbfrBmiYN1xqpbiswxyquD1LfPPzWZedt6ZTVCPfEFr4XcBTGCnABucGRn7bXN",
  "key9": "3wq7RBq2pUwBd1NP565gVwSRGjNY8mqdLE4kSLC3MXtEXqZk4McThM19ic4eaaL2fk4YthLyokgX6U5ShuiBf8tW",
  "key10": "4dBQwQe28ddwicN6ZmaAGLBgscSEmMibDCZZ7PzVMUNoA3H9LWhdtkZt3Q4sYjhYYpsSr8VED26s1NzXR1TioJkR",
  "key11": "LoV99FDYP65gob6u9EQgRXq36tnbAVTgP3wWTxF6sPQ9m52dKaoTnnTjwhsnQ9Rgfq4jUiNhp81x75vp3T14MKP",
  "key12": "2zcBRxuKHPmqMdk1L5nwvvPaMycPaCQc8apAPxWf3yKR3Mj8PgMmAkJ8kgEbzinV8vYuyrRi5LwuToG1D9cjSCqi",
  "key13": "5Xctftm3YQrDVRwV9rm8tU6yyeyCHC6GBkSX5TpLmTu8tHJgJPne55j8v1MDGYYZkcsGtWaAnt1rJ8Fwj4cY64w",
  "key14": "4LsMYsAFpuVW4hTbaYu1Q9x3DBXoW3ELD79yw9DaXmmcjpzwAGS4wa7UGqSieqqdd6opL9PBVJ4F1pTi9ex9r9BG",
  "key15": "3eL32DHwaApg4mJmypxxT378VTCkPikCLwjbDYSBvLdUSq2xbupx48NRnAp4DRa8yKb6tvbr64jPw74HDadk3ViH",
  "key16": "5isGYdPVrEqwZVSvGydKzdZXHgoqaWYb2w1f29Jdmpp19zJHG2Uxpkq9yqd8kztL89Y8hnvFJjxaiBERUCgJ56G6",
  "key17": "654iRfoXgKdmKTBRZVLF75mEhV4rAqDUWVhZE1cUsQfxpfyn4s4nVSub8k1KGWixGXBPGGZNQ6osMmeav8qWGmon",
  "key18": "4AawTLswwt6qJiKJJspQCXSeSb6Du6tURnghymsSZ6kLFM1sjBCmjrU5pEhNkVxY8KrkHpoYB3VRiLSn3ZXe3ruu",
  "key19": "4aS4h2whUDDhobT327QZ8CvQbJ4b8XH7VSaPZZej8kaz6L29BV6j49frBD2iqpqYxtH7EoD9pGwcB3qUnV51Q3dn",
  "key20": "3KXfNpV9H1f6fhQW7xJbsus79qRSg4r2T8kcrbmSMdu51NZSLpX8HJ5vvnV4146PVJ8FMcpNdS2ja2AvPbj7fTkb",
  "key21": "2g7SV4K8iLGGFfTf2ArM2rtRJRtax4TFytj7VxM1q8KkRRKbGn56s5tsmaT6xRTpzz7HL3EGMNUXFbSdzXbjfABL",
  "key22": "3qkcGiQzmrb9oSqpQtwCFZ9q8hbjGqmtG7TVMDEkVW8wV6DPQ3jEaBYAUhVpgdT7GDswWEEL2RpjbzPS1EdFn93K",
  "key23": "31S6KLAV5uY5FExacDq1huTbFQcRBwX3pgmeD2rfyFh2LZCCpq3LwHqF6aASFypRqWc6mxHeDok38436whHfLkS5",
  "key24": "2jJPb4aqyrFMR7DB2tk1qvw2AChXmDiCEnsqob52ngYkktaLZ9euoavAnpd9u4Fzq64jXAtSVt4fKhefAnDsT7gc",
  "key25": "4EtoxXH8cqcraeDSS8JYFzGZu6qYMAJ7NJRJoXPJrmX4GmeZRB51nkxpPxWbgriMdJq5KvEdp54P593jdxZtb5sK",
  "key26": "592xAKJro1usUYQWBpgZr81vfi9DZEf5fDeCoV8fQQR25csj7oEbyzv1ce3iQS7RNh2Zn2P2W6PiFaaTew2RCCZP",
  "key27": "3vtTEbYEjts5MEdsZQQqtBb79iWEPcFLeJj4rGj44pd4SLfCWyB1yXBNYbZjNw4APYJm5TMaHcz97hmBRkFEbH18",
  "key28": "433wBdmsAqU4p5dbRt2Qn7KBpu8oeykANL7XW4QhXzRyK6YwAKBGaQPqMds2izcADcJ5e13YHJ5JgQ53uxBMjPVm",
  "key29": "x9HBEGfn4pc1MVJ45MbgEjooToPrPLkFaHhatQCrRK8BAd7PD5DXdZ91azAcT3sKWofCJo65mDXn6csvD6WrAdv",
  "key30": "24HRFkC2MBRasC5uwnkuvtHV9AcrHVYypNH61uKHedSH1gN2KTDHmou1WHc7mG33epjgCrbgNYqZzuXw1fBbj6bf"
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
