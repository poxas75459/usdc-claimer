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
    "53VamjpsV2xGMmUjsjCzpxSnJBCjmY9MeiKBTbKbZ235vzoLmNjD5c8Zqr6QRb2oKYsW8rfJosN6rd2vjQTdai47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cLe5yrNR9Mypegro9HWDcGBQAq8rYVaDMYkccTAAQ4UP5WacMvr2tM92YjJ7SXhT5GzRfy3RAe8eFxtjf2NmXdz",
  "key1": "2ZaXHVxKbkbCFEyfDUZ8R3KezjXqj6993hVGrPdT1Yrqy9HNvVE9pEL5BfG1ZVAuyH77vXHR4Q2syp2igdqA5sf2",
  "key2": "fBzrSkbcpFaePEhSxXaKw7PKirqBVhBRTojCbryCDzZcxq6YWqtbzFQ6PJwurSg2FhXegCgbMLG5LqHTGRyS1to",
  "key3": "5SJevun8euRox2kAMKhNu8kb4sNEjon538Pi6w8bCpKJV2ewX1sTAxrEzJUXYGV9EFwhA4D3FbCpuCJJyhBp3bBT",
  "key4": "5jcB8NNQy7z3W5gNCkrynhm1cuJQh1Y1C8s14vsPzKrjU1HZtQMzTchnGKtjDXp5FUT7Kj6oyBQWzByhcqy5kJax",
  "key5": "9ENpkEjYDc6Ey5dnG5KJSqbYnKEtrftKdyD4ZXsgko9v3oGeFhVeCUS8fGbPXM3untBD12nec9eeKCEMEKzWmZR",
  "key6": "7ZwFucErUQXKnsiPyQ1WfbsL9TZABQ2ZvVeAskUjcpYpXbFsM5vRK4fiXaBQgNgBqcZsRmBmGypK6WRUmvpDD1g",
  "key7": "59bP5BnSJxBfjKfuRsKikD1WAx7VtUQLVe28LTysfMZ1AfhkZsTpAWxMQxw9Gu9ubMtPcUq5jUJ3UrLfrR6SmrDk",
  "key8": "3Ndz8WWBNGiVvD2CyZXptWxcQs5bzTPjwcDg6c4Zwyjet5XXMzQQnTxMj4ZejSun9F4yBTBt35AsiRzMpkCDXhKo",
  "key9": "2NTMANvaqsTrggU1HVUDCZWoHy1opwQU5v6fNSqwwri1Yo52QsjbEjnpynV2jTPbe61pt9isv3WLwhhs6AbAvRSb",
  "key10": "b1WCVrdJ77CW47RV5RCqpzgmNTyx2H7Gtq7LXb5yETC9jKQBddCvEep6ytwEkhdJfGm3io3boFTqENcxPNPxSWN",
  "key11": "LfVdFckYntK2yMPd3yLsr416ymHfRPsi9SzjJzPw4CsJjtAy9b8safdwygmuy54VDiPLjRhaZdQyA1p6vQy1bao",
  "key12": "4BVYbq7x728twh43KHLpuCbXchNHNrZtGJJND1Yz91SbGCiGfxVmjQxXU6G4vQMVXgMEf4K1pAzpfJ93RSzK1EAn",
  "key13": "5NWPcuXQsFBxDuxrB2jk7b9Q35xsXS1WaUtcWznFZqGKkzDjZEnhZ1aFYZpVXUUGBkDq1PzaGhaaCbcPRrHgmjhr",
  "key14": "ymezZGD6waYjeHNk2FTaKVyF6n2mWEHWnLFXEc6mSZVpZKwVLMaq5pQ8MdadPfZtWHcWHsKcyiCVuN7pt8QFfQD",
  "key15": "4HLcdpu6DWtvbnV4H9wwPRSn5FwTkmbNx9rjJFcLtM7jkHQWZoZNqbqZSNhX6xEA5iVGgAJRepABQcsj1Vro7oT",
  "key16": "3pwQDVHckxA3fXkaBQjwddXqMPoBSatXMhgqFn9KxBSKsb5vh1cZX5z53Vaoma4b4V13fn51ArDGwbi6CJeuJTec",
  "key17": "4owQHN7H9Tm6dr8LE38KwJaRW9oMqE8UxTX72cqVY5RZaEDJ12cLFvbnrWRTo8NErmkXajJPteqWz2PxZktuCw8G",
  "key18": "4BrFQjcG47ufP7D89VgbNqBzioCNSiasBcSptgAeY1BmDRn7haYSEax1qgfRRbpKr3tTXMd3SEEp1ouvvJwPhnQ3",
  "key19": "5n3JSZCVU7wHb6WNwEzwDiqxsMKx2eeJR2p6Vdf2rtU2tA6XDn8rhQHY8jHt4nMPGCfuhwMU8KcXqDbi5CwUNZ16",
  "key20": "62ys2YmpiC3aATBdfQCQW1u4aCpMdjbbDuRWrLnX5Zwm5S8AePHuvueiUZR5MswAGM3AgQBTEsUPZbWNidRA2ZWe",
  "key21": "2Rfp62FXCMt3pnFrLWxk37AGpwxnhFjrmURrRkEtTf8qGnM3rm2AQWUrBzSpeWcYiVP1muPF4etDTbckJbcrpL9M",
  "key22": "4anwVh4Vhv1Sh5xWH3qcJCfbT414LPLiqCfwXuQBBj4H6cS929n17cyzoBkAJKMRVVCJqLcRiQR5pPcyiFBqdRJw",
  "key23": "2eafBbLVYf3cLMYjLiYfn88skZszJJK6aPMAhrpGqNwmLd73dGSdTBB9eGkfqumWokpyrfpcEd12aw8ugamDx7Yg",
  "key24": "2gDMFUCmJaRuyxYoJCqGffoszLfy4KPmAdFV2oiQA456fEGFPK34p1gkjLApTzT4ABM3Pz9FK17XnsEuGCjMESVX",
  "key25": "N47q93tHhRoLgio4B9EyrDz2o2E7SjUayoTHitLpmfK9M2nhhfDnhynQyDTVTcteiTtzetV4Gmk67CjxqvRZcKo",
  "key26": "5tX1pvLtW1dKRq5sfKHgNi9VZUz5S41y5j3zbimovpkveX1whmSzZ8BTTWQwgkTc72SQiAH9LwrvXt46pFymYWoE",
  "key27": "4h3AGUs3CqdLNS8VWVhbhSzVGfgZECrTK4JKUU8kDg54T1hMQpoUfWCyo119nQmTLZ2Zgz9vZj1ifJ4fxryqwDLH",
  "key28": "5K2HySt2vJV2QsdwKPothVutVtisnvQh213nSoMugYm2gs1BxhXhLesvXsd7feM6x55rhNBLJu9RRdkXP8TzShQY"
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
