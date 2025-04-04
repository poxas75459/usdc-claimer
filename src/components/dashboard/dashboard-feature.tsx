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
    "4t6iVfR3UrN67jQaZWqkFQ1LrBaDdSpF5GbLRnsdzr3Rb7Fz2AkiWLWjijbBVu8RJ21JABvZo9FuHqu3jRNgLjgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67m7Y1i7xgoCKmo6kHqGwvmtfYn7r8KW3ZwzAzd9UPv5nNYmdCg7mnAgZaYJAntZgpf1q6vnfK5cFZ7mQMCttrMC",
  "key1": "5y8dSCgqEPGb5TB8HdzZQwXPXR3Bum8WQrSndcggyCNpvR4AW9iRW2hXGYhRUpLcU2xiY4or1xVGUqLCExk8xS83",
  "key2": "3iQeb87bhdsCyG4S7NAiWHTnxJHnGEHcZ5bpetNG217pCqjPP2Kzaph8GzSB7TrhDDJP3aBz6XsiyfY6QqAoH55M",
  "key3": "2PhNziReTAV9f5P6Bom7pn5v7Nh13FstfgFgRb4PiEYEgxjVWwHqNCTRTosczbVrkJ7B3X8tAwqE64dsAEPTNZBz",
  "key4": "66aG1e6yQmRohw6RiUsZuWfxteVseC6MKLC12Gw44u5hDveBUFQUqdwm4ZhJ1rNjs7ZGdba8zNxQqKNeqP38aN7E",
  "key5": "4yf7LSyyhBhRMTHGHc2CJu97N2Hm6WkM5VyJSRvpSgedHbggcpYsDVJNWBGTwGqQHyichZ5KHJP8LWN4osq2p8wd",
  "key6": "vEgyNkBNaTAxVF3Yf1BjFDdw86TpzCTwqM4J3oEFokJVrqP2U256Vsajo5b2PRfKG4xJn14sVzXCw1Dxqvnmc6r",
  "key7": "5rzkiq8GsTbZnRctWTYr6ZBosoaKL3ABtqdk2qB7fhRJAdAnXwTD61df7WPHUpNcHnCm43UGPW5zvzsBstGS4heK",
  "key8": "4RfkwR4NANwZYGib9Jiqf3fdZhQPK4os8YNMrDt3kgWWkbyirWtHh1SjH458GYUY1Nj9RdNS5ApXKBomNR979o6C",
  "key9": "gSsXy1TH6oZDq5SstE6uFwX7Zd5Vi2LLfagGVGozPk44DFu5xLSuonuKfLgjKztWdmB9uLx6LSVtE1eR56nPuvz",
  "key10": "5HYuMsauYA8Q37h4b1obdwQrAGLE87qPiVwVf4yftARQawLwTkvuU9jgCmnAJT4Bn97tdDjBMhMYUCc44HPEKq4s",
  "key11": "54ZVNZJo36EpekTY2Gyt4exG1tWGpoHYaKrcMmRjNNUYVRLwdMBYUMq2YBY9BABVUeX1ry1oTBC4zRTmDCHubTvf",
  "key12": "32cBoEnPfLULTHYP9ErpHNgMxdkAAHNjtTcdwgwW5iBNu5RYmChuLAKXW82KUVDMnXchGsokS7aDhm4YGzoZSsDU",
  "key13": "TRQoH37TT3cvmKg174zgP4FFunT3EAvCPwgr6q8eWnHxi4iDqgfhUijkXwb3f2sFTqLKycJJzKzEA1exV8xCNfR",
  "key14": "4nPbU4x8SYQedN3nQ1XUzjH3jMxX4htmQx888EAiD9Lgvcbwgn73sUtPUQHx85jygXb4i4xMDCQjbCD8hLBLJcv4",
  "key15": "2MgvKHsxGiytxY9aaEW8b8A8tVoR39WNKrBFHsj2uuTjoyyM55StWjshagQZDkw4CYymxKxvDtKR1eSansHrQkvW",
  "key16": "35QTNDmMbhpYwLRH7SX8Zc8T7uLVTJ2AjPyUrGioMcbSiqQ15y8LAuGs3MwLvLdZxREq2N9A3Fj2pfgt7U64GeTP",
  "key17": "63pGNhivaKvzNE24noUo2zZAQiQ4nbGXw922zmHUCVMxhh5YjV8ZkXrXp96KJvDqm3ugTC8YCHN4CAEG8GRYZ72V",
  "key18": "4yUMZ2KFxHAyWhPpX91P2x16DQWNPcLLe87iHKMWD54VZ7VLLBWPVEm53Dqy5wjnnGdPeXG5J5kpU387GABqCMsW",
  "key19": "42wFy4157nCwAD4XpuXiMrvfGgo2mGPi2XXvkRjdE2GkKYqRNJaLpGCduthGYRqDHqESMvwgAy2RouvakHfaTPiG",
  "key20": "2gPM6Q3ztJyh6vA9wXW7A9T94ojSHXiD51nCLaV2T4B9D8hwva2sfzQ6YUGjzpNZsRWcntMhe319x16e2yuYYGG",
  "key21": "5grufc1FxNHHMB6TXusnRN9wwJUoxsMSKyCbX7UhPSgDCS2w9ccdyEHodadTRixoDDa4A1DD1KfgZbp6sxVSCudw",
  "key22": "5mW8iJbH4Q3o4EwVrFwnfJi4HZPkbQSDdridP6cxH7j2k6pHFF5xN5t4SgpqcWL2sF8iwLfqm6V5YmdB8SRNh4te",
  "key23": "4F6Fv6qRdhnLzQduBVmYWrrU7aLwRxyCA9F5TUiqVgXm7YgUSU27LyFBbK3Vxp5hkebgT7oeaCxxHiLt5kndber5",
  "key24": "5ZqzdpEH6aZV8ehQ1qhTWHu1tEjokqe72pNeb5bMPjWCz76dxqwdeg68BZKaDCf9HVR4JUBY4xCDGVmcNYjaz8Tr"
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
