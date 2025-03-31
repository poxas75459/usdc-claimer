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
    "43m1MFr8d7UpNp4PHDdizKiHWZuTQoqCsz8FqUjPntQVVHaHd6mgWi2VTojM3kE3LDR4dL5zpUmoRtzYXreM3vNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KUTFgNnBLzfKmvoL8eE4jnKgfJ6JoUxj5bK9J2ruCJLDkrkzJfgSSrg5Uup9QkzqzUfb8F79FMNvp1n9ZJtDaXH",
  "key1": "4JDStmRFuNatAC9WuirxL1mVFHPqRWi82MjRrmw6cK7wLoPRmYe9BLCyNFkC68roaufoVxziiWgSd7Fi3MNUtt8R",
  "key2": "2nxM87tiJoRZBMcSNZU94szbsuG1BHNk6MUvKFRcDToPnfKJBnxsXXYDguXE32gGiWNphUkBeLHNwwhJmNNCAuqS",
  "key3": "2Hi9zKQsBpAaMgEnVxsLNmqLyy6MVAyUTN24CsTrVVK3qc3upxcAAq8VEYyQvzu6QFTzqtZZkQV7m2Bn6KX6phrQ",
  "key4": "2NR5k9K5XKELQ9YSDsB2WpQtFA5en2jwsU2A8XHr8fbbt6FNQsSRuxyg47APZYPddWxKmKQpwVkyMwBKaH2HpKXq",
  "key5": "5gZnTa5PjZCJdvmtSRs4poGsu34Dnf2nYACNEhWpTTa4WfoTNUCTVokx1bdDsLs8u6L6N1Ve4jvfDjJQRtLhixwf",
  "key6": "3jhr9zydLHrN6tKLTUeAFKfyqtdn7N2zwgt4CzdqX9TPxi7x453h31seGphqApy1EXPezRZ15H9vMMEm8exZfwnv",
  "key7": "3kp4MBUkwPnq3uPk5kMpr7KcVaTpMXiogxqDasLVQ8exSuk6mWqpzXU4kmqabNtBeZ2WMtBGU2T7guJZ9iL6vhxV",
  "key8": "5qQF2JYqSNmEvLnfQTzdqTzind5t4qRDU8tSq3Ue7WrWj7P7GNQgN1stq5mmbwab5naBKbvkLKMBdyZD7AcyebNe",
  "key9": "2CteTigBGPTUn5EoprSuTXBXmZmBeKrF1g7fsygp2HLWQHdVB1eVNeFZR9pJFWviA8H5TJHCq4tnQU2PbeGKv1Xd",
  "key10": "2WGPVdgRecsSYQMTpVoB5bf4moceEtH7d1sSi4Fp6exyBGW7KWaHwHEsvTp8bRdfwDdtJgftjszkqP6NzoH3GPyh",
  "key11": "4ST8JmDHm4itNn3rL9SkTRMCwdiBWwQxsDp4FFfb9f7pqu8yAT8K2GAFn4SxoRhe2xEn3taCgmzNNEN3SAKcyXSs",
  "key12": "3x1SQPKcbwt3RJcmr5dyG3DwGWeczoMuQxat7NNgi67VXEATkZirMR2UqzbCLNaSmTwMhCVRaFwpRkWQcAeuUeHQ",
  "key13": "2PHVEePAeTZB4MZL2gPqm8Vr6d8Ent5APDjoBZk7xLGGjWUqdhhYCHnyPkd8RqDBy32SfDNv2Mp1Sg2T9BRggPki",
  "key14": "259v3wJtiWYcp37VPEZ2H4Ztt6N5SQPA7EJE2B8BeiLWWp4iG6Y5zqy3azXjFZ6xqXQVsZg9bWC1YWecAu8gVyb9",
  "key15": "3NXGK6HPvfQKnRQhKH5eR8CH8iSjHZE2vNuvEQcW3ZEBLjgeLWNUuzniV51p91LjAvf7yGNMysd2HSMb6m6NwdbK",
  "key16": "5kd2LVzNyY7WJpbMVc19VZ9MrZjcVTVbcWULCyCqeziqGLxgTo3ajpCQJ6ksfQ974ZaWhvvZN3XfBpKrWVwVUktp",
  "key17": "39hvGrVsXq2CyMgRNG6h6EAqXXPwgPa8XKCoGiwdq5B2iRS2dbrpaiFvqq2PrKvRqkgx7fTJJ7kDmQrCXrH6Cass",
  "key18": "2ge5PrPJ7NDjrtVsnafpqRNkAp2kekNEdTnyXyoYbkVhvx3TagbgAGU59sWLw4KioUZgD3U1JC28MtGR3Ky8HZio",
  "key19": "4DBGtJ3yVhiTeUmN7a53Dur6XiGrBgVX28RHh3pAh5pyhSHTt34sogc9QXJCKdWbkdXmR3FAiiM7mjnZkVHLEpVo",
  "key20": "57gtZsrPuBbLU5oajBmYY4q8g1yoAWoSoBLoeK8gTccDQod8r97XoNtAf7VyjCm5RpcULSs68rBozBoGQZCejfT2",
  "key21": "59eVhCj3W6rNuLcR4xeVnBtDMrUf22a2b24fqxuiWNjnGD5xiXH8oGvCUPt2cX8qjU4tnbFxeQm1odQgTtCcMUqL",
  "key22": "3Bg9Z1Nq8UkZGQHKbm9PeKhmBCm6JxBWv2Pv2LXjhxHYSf4wVux1dtMERWerNFE2ra7h9GsVeoi6m9y2YQ91DFP5",
  "key23": "3vshWBt2wH3MnvyhoNEpgr7WqWekZ5qzLZySS7GTAwYKnWeGdsTfBbvmDj48h6Wz7mnXnmT2S17XSASghGx9KXnG",
  "key24": "Fm8K2boyLGdZNpHjH3LpGh2XfG2atViCPg569joeg6ovdWrmRH4iBEY1TQzMiCk6kX9YpytTDzpxWCJrxnCmbm4",
  "key25": "vwwUrvsssQQf4FeVamFGGjKfKN2k9awJzdSoTHCHR3gxP2EARUGH8PXu4LaF2XnqDrDxr3ftdHmfqhAAvJewdpk",
  "key26": "4yvDB3w4a3reHQ14Kh2Rag6EAMRB4775nvnBoGWQDUVdeyaR6WgVNYkKWYVmYGzV13s8de2p2SssBwNZniMvJZGM",
  "key27": "4JZSCdt5Vjpwfn67EMjmPMiuvtqqHMpFsq7ju1G1kAV1EVNWAxVjoPnCaYQh6MeMDms9TKHBL3ERAELN9u13xKZk"
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
