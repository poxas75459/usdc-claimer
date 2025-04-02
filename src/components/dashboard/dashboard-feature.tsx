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
    "396CgBJrp3vM4pKiFo3RySmQ4QrbJ6v19X1YdmoTLwXLtzqgkRVu1DMEV6fjGsNWusNtycD21w5wCzxSsJYffyi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XzALEMK6iZBg2EFhppzt85fBtxWFriiyCoJTRSEsSqEPnehqHreDKHVcgjL2uaQHECDxS7mAvaEiieX24LD5VsK",
  "key1": "5LHDeCXRazAkFmSvgi2hNT64UqcxBYHegETM7zJjPY7abCDsuytPvUcZPZn8ad46PbEhCyfC1ghJadQUmB5D5sdp",
  "key2": "54ULhV4hmixEftk7kwoDrrdLAGtR5S3eRsxSAL9onp2fixVy8yJiGQcjKx1F2ZJuNus973R8tYjUCiSkFRzvSAtN",
  "key3": "3kfbvnbMMbngfkHekg9c9M32R9uhWe5ZKR4q3AD9At9fvWhc86CWRQiT1BDfGaHXEAQtdJhKXERzKdBRmQNrndRt",
  "key4": "2HmYexYaH4mbwTEzgUbfrJTkFGFjGsegyZ6Th29ettQ5CM1ySLo56kbXRCcv1sw3fGEmZo76X8kYgypY46eNBLLH",
  "key5": "3kYZ66GcSvT1LoSRSzayLLPyq3upVp6cBp2YUKSeRxTa5mGT7siEJU5fiSv2AscDxj1t4XmhLPq75EeqWEwxNyAe",
  "key6": "FuQYRhyUntjMHrXR4sz5k1dhcdK2xisH2nMVEvqu624Q98jTzdkmBY5ecgMR3RMBxXnFJgQr9AK5dsC3WKiRNPc",
  "key7": "32UpCKKAVMidY6ySn8S2QVFxy4byNM24hzYatdegx441apRi8NqJLVVcmcJ8NCKkXAkFA6pyU8oWV3XRSmem74CQ",
  "key8": "456bjvruMSNqxKXYvuSMceDoBmzWPaRPq4bcSTQfZAKLjaDbGR48W4iTvBopKsFqgd8q4wgjWQnBuSnWtqArCwS6",
  "key9": "3sRDmibDm45scoCXBKTubYCnC6JqJSrRMHbi4TtEQiNBU9Dgcd6DJhq87bqGZ3PYwJjj6rPaBsVcayy8o9zENrnh",
  "key10": "4tR9EjTaCHRjWyLEVhPoTyZdQdRxxSHmWxiLRLrUiPEAHqgkckdDMCifrfuBoNgTLRhPZqmUJH5NA7kfqM1jpHSo",
  "key11": "5yV1B8wTzRKddKJtrWMmtpaT4ApJuCdfN4WZsDkmjscRqxk8FgZjSwWGFJru3YriuasV8pdTZkAHYPCntsvNY5Pz",
  "key12": "5uUnng6611GGsfP4H5v5SET6N7kQuMUf5b7PHMe4DZM6jiuNDskfroqKvkyv9eYosuhY3HuhuWFLkqebZZCFLoeb",
  "key13": "24ZVhF4VSvPPj6G3nfdqNzoorr46sEpMJESPja9MneX9R87JjQE13vEg3bpxtiY1a78ZsCsfpxjbBaDJhHLcbs99",
  "key14": "2PWaeSRLjv2N49ZhtpbFGeUAmEKhLkSJU9eybSwXKwUzb18qcW6mKfyTCizEnZdYcdJxGYVzUBspkFeisiStJCrm",
  "key15": "3GyYiaeYBroAwao5f3gn7yaCGeBQv7uPRxz84obr2QyaDgNaZ6TaT8NvgYak6r3PLAd5saMpPfvERTht2XcaHCcw",
  "key16": "AejkxjmQ5Mb5ygBHWDVfELv7HFbMUC1Dp8KUzZvyB5NakjFpWNYjC1aCYpkfjRJ7jAPX9Xpkd556er7FogeZF4t",
  "key17": "3t7dxnx4EZc9z7vz4pQ9CfvbcTJJKYNfE9mJX9yMi4KTk54KKMKjKCZUUbKv5oqwcikuFU7x4pRb1MsygKAupEqh",
  "key18": "53o7gux2dtf4LE9eR9gjb3BbNSCRGau1wAcUzAfys76c7A457LkZdHZmm48sT8ukbXE5R9DXq93sfhSC7Jnh77hm",
  "key19": "pzGFDki33pEQjj76ppfdThz541LiGxM91o1fNf9893dLvQVE9QZjgdBbe1uRFMgM26qkuBgPSGeyazbEnYWs2Qt",
  "key20": "4CcUmsmoBnjxyk7eFwkVZjF683Ekh6XwTm3xQCkAUbHw6Pppmjq2ZtiEurEiZUJyptMF2C9cz22hBUbcck63MTja",
  "key21": "5msBWyTcws8DTi5Ngc9TUGxLZ7weKLeL7hWJGQETAuZEPGVTfH94XUw8Q98iEp7WGSVUPmKsgbbfy6LFB319Hxze",
  "key22": "2d7NwgwuaBdc3XRWBmBr5qv51cuy3M4nLEgFC7mM4vxNJXkLijMpfAZZu5NP7LuBSqNJrooZZuTe6F3rQxUoJia7",
  "key23": "4giTQBjbzNUhMoUqBiGhpq5hUGoyqTmsDeiNNQ8RdegCsvLSKHeCMGJnAg4gnYVe51K34bNyNpFTUDypthLYPMuN",
  "key24": "37pqz8Tm6PUEdT7xvHnXTj78M6Bboc5PV9jrbSC3QBsNpqfKiVzc1oRte1FBJPNDFC1tyckv8ZyuuqJfbzH4J52H",
  "key25": "4TQ4sgUPhuNCAATV9bx67KM9S9CCU69yBeZyfVFykyFY3LQQSp3F2VdMQdm3aYVYQKdeBN1T694N6xgH6kgd2Yvm",
  "key26": "46SbcDeibC8vREkPqyXG6K8amqF1rMCTYWktXHwWY3tAs2kGhKKWbF33KdUfttnetjaqqgLFSBYhmCKeySB16ThN",
  "key27": "2pqzXrgUM6X8QtCEAbcq3ipsRpnPmnnimmcqoEaEeQAzRUBTJ8nruC76E5Nwyn17PBgxV2fFAsouG9M7wPyaZ1eH",
  "key28": "4ZhS9KCAehfZpv2b8xr5kT8pQnt7TQ23Sopi4K6WGe6m5CEGtddkDLLteY4aUuW5U7gc8P6rERPgoeos7AVaeDL9",
  "key29": "5EAGVfZJmKBQSNqGKUsyrQBiGgrRCE8oFDVGAVYSYGLvLF6KbdAvCraDDxv88RHJ1MumgHzr2k7yZBPpGDQVgWHK",
  "key30": "gT1ne18sQm2EAwpNp4bH6kEaJWyHJLRT8UuA1mrmPucGpu3DGMz5myDC6kzFRDHq9e2uyjMjGAzZr32ELoWdQcy",
  "key31": "RSEpXWorPdcYLHychHNP7kPnqM9DvFY87wfaUa1HMAZ6HN68KzdAVGvVCVmzeKQpwvQD9Z72Cigosa3V6yNdFAZ",
  "key32": "4xA9U6Sk6rHkCiVK9u57dfX1D7B8WCcpQt1gHggowd7oN8j7Y4XouoAwPYL3ZYcUR1AZnpaaxJws2nvEwDmy5pRu",
  "key33": "2miXqpk6U1gkiVG6wV1xFwTDrTmBhaDdSa4zTnygFwk3NTNxcG8J4nSWp2moYVJcTbzLF9Ue5ezj6vqQdWeMogBG",
  "key34": "JNAjqcAJvGKrpcrGw1GUUgk6toipBXf22KTKuqPB8geqbv8fSoJHHMGjvtFN7aKY3TPEF5P93nQTLrwGdWvKi6f"
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
