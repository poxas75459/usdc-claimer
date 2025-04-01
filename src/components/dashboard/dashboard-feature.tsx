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
    "4Wu81bb9qL3NbdPY5utRx74CeG4xQHyjt9Fbr2L1nZHNPR193s53inRqSd2UbZ6vGPbwRzJcKio4uPVFQPyPhZ2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zAu3dq8BeHfcZBzuMNiK9twFdDJK3UQVpH7vWAEp4KcYo6jJTFACFhwBcfbUhYTVJMWebAcScTidjBgASALUYGN",
  "key1": "2h6p9dnQ94RDDER4nnTnd6zc9H2Zzx5aphAZQuXRsgFexJQBSJCtmbobCzv67mNbheDm3TqhxbuNJ4RQwWYhy8tf",
  "key2": "3QeVQj9G5vpDT8V6SzDGcoEZCYPbSxKei2d8xKQaZVQLBkg9FWkSiDm5Sqh7tMca7v32oAtvG7oVGunDC2AACCLm",
  "key3": "31y3MiEQoUgvHThgLaUWhhoEx92X1qAFqB7C2SEwdfBVtF8Lsm6zDyPV6UnEieoiAWHdu7FuqZ2TaGPsiyyNgiqy",
  "key4": "34ysxZpbGU2ZgM9coLp99Fr6f3kn6iHSLoAwcLvccgheSosWnaKXyCMFhX9cpoKgQ2TCRnFp5WHv4QAvrHyEppC7",
  "key5": "5dELrauwZq3aMcAWiKEgBDWbLZ29MWRwb5mFzxLmz49VpG5S6KAyTEVua8dz4x7GfrcpmrpnLh1fFiqqSpJxVQvj",
  "key6": "3geuYowCg1PTgnV2mMH8z8vcQhKvAtJdRbBZyvR4mnYbR4Qfvsbu1fKbLVDup14h7NUXvwwnKnGBSoEyi8vBRjE4",
  "key7": "2C168rJrKM9ksxHnuknLEDLDJM4m72ju9d6RgtC7hNXgyVWLPNjRrRThKiq3X8gQwXT5z7L3XzuDP8PLTgLff78W",
  "key8": "23Gs4HmG3zwYMspza4QdydSMYkXxQRgyeywmiuZrjzhx67o198vR61EbRxr3nvUAUZSohzycSzNAiFYUheprXYvz",
  "key9": "dRUArxiBv4P5qqGCLMv8jZGw9TY4i2vBHRfiV8nWYX2qdwydvHmnVhsWyiVu3Kk5dVDhFyNPP93Nz93J6pD1fvf",
  "key10": "2VyEvyA1aaSFq7Q5zFuaPk3QCi9fUaYZzrDjC7rjZH2QoczGpeTdbpGjPeu6QnzEuBYqoHB3Y1FCqRP2VBGCEVSP",
  "key11": "46noytNZLbM1qiHYnZ76ytLekx1F5phFAdGzveWwgpvmrp92Ga4Ax25MjxFL4b5csDavCseHkBpUe3bfF2RaT7a3",
  "key12": "4aZrLNfd5DJEa8dXJJVu7kWJs5FMQcGzeMW4zQZYsNm3ibbnGEZMyGuNw2soB5L3z1re6rZyyqjRxHG9YAYPFsMg",
  "key13": "3cELHGjqGh39F9189zk59SJKBgGhkjmc73StWsUN5GgYtwFyHhLboUrbv5zT8yuBybHrmHKa7hAcE2GJTuJCCtHJ",
  "key14": "3DWbL8wdP3AWXFeJWjzGwVvxVgSiy5WAFsENvsCqyfqFYmjWzT94nQgoV5DSofncC8fpM4E8tQTnKkjLZKJK5EFL",
  "key15": "4QGaDEHVUzjDxTbUMoX1yLAsQy8VhhjB7wm7xje5CWGiR46G15FhSTeFGVrfQJAPJUovmv2QcBQzp3aHhL5LHnaG",
  "key16": "2iVu9tjmZueUjKfqfKcJ3YdaAA3rc6LURpYmykyhMNJWAam8n5XRHKaPgEAeN13MsJPXxLfFnjEFAn2E2UQQDLib",
  "key17": "2jKUTshRVjToLSPSzbcgepPoLXRZ44yVooicUVjA3rFiXDUioFgyLCR44kdZQB1BDCbWXwXhd2hNB8mGZLbF5WPC",
  "key18": "4RKKwk6jgPYcbF4bwyZPiS6ftXub7QrCcLm22TSfjQ7kPkZ1cKRngKKoaVNmrdNtBTQMBTQf1RSvkZGLkZWTq4nm",
  "key19": "4ZMpPG5UKkGxQRs6CBsepGzPuXQTVtxXLY34Xqf7RitdF5TGKVQunqcuRCcMdtFmvzFXQt16Mjq8LV77PF7Bj6W6",
  "key20": "5wnhrk8fx4mFYDoF1iszddpbkqW7unrfJzU7Rt4RUj8TRX8WYRa8vQ1kJ6b2WVQ1QQuW5cvoZAyoGmepGosmxC7s",
  "key21": "44UoHTB3bTraEyGoVrXsSbgStXmFmbVchnCLZUfHcq4QQ7ydJmdHdMHJvPG9HMWZrhiHS6av2HLGfon7d6EZcexD",
  "key22": "26vKx13uqzfaxhcGyNtd5eENxxJNjmzH2zDTU5rfpKBPNKvgowHTg1iNFYcGJPz2hSGGH16vbBEw8dbbLVKAVHxy",
  "key23": "34Ta5Mc8gFD6wFZeEtBb3iTwByw2bSjz1DCuuiCPqhVKRtde6AfXFQUGDUnWarYgVAzn29wQSSyq2kG5b7xAwxBA",
  "key24": "42KYuJ7pTKdy9i6hCYCM8auZV3nX3uRwtaKbzGE7bDyZZuSXawrXqbcBuvgdnA72SvuXyK7EA2qUpbjPt7wXM1S9",
  "key25": "2QP5x4KVBf1mXPLiSEMowEyNeCYaT56A9ZqcvEDWJVHP1MGkMTzwyfQqf1Kc3SnegoRmoUyRpqnKBQRu1yksi6aX",
  "key26": "34fXkXQjdEsiFCWJFFQKrk8mxKFRJxafhcYRPPtoNhtiAR9R1QBc7R11Z9KX1zrGdgJ7p3WkuWVxEqc1cmiN1HHq",
  "key27": "2Swcwhj72fnHw3tZFopQUofrQuLamFWTkfFSrfamStQ2N6Wy3SAjBR5VrjMv2wAVXLdDjnLywooky7yL41cQ66QF",
  "key28": "4GcguZKwgEofvDnh6h2pSssow1k4AQ3zkS1fQEdRKnkcPiuqAq6MUCDsGMKjohG2wEyuxzG1UVKT8qsckobzfFoW",
  "key29": "2UXv5Jk4a2hANTknXwxF6yLP3VTRWHorTTMJUAftdNCsSkzNFHdVVwKCjxymCGJcC1vpQNDJnf41hWW9jiW5AGQR",
  "key30": "BXwNRLDwviZyMGax73m6sqrvkpjJ9jYJBQFdqAb1JnzH24b71h8aKNwYFqfWSCKnnKNWXCQz2Aoc63NJ1WPbVTv",
  "key31": "5QZ1hxpeYJL8ujyXrKAM1GevhAAqMGrursQPK5rrHe4Am4Fib1MmvF5tYAKgdiCvaa9TkbrGB4PyU7tAtbCFFz7f"
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
