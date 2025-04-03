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
    "49oUGfxKQuZZ8PkeqMvy6RDtwKWCUS4SNQbExP11WLAChAkHM9G8n3nMwQCRwJ2br26M9VB6RaWacC5a9q6aYQe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nhWMQeiRPYg9xA8mfCvh3CtJwN9ZbeuykZDVeGe9tGicMbnrDbKXjitM1cEwXTo6GdXbVg1ZJgT3P34cPRj85UW",
  "key1": "5HVKEQgmQbps18pTQUEjm2RPLkZuYhA1Ko1eCoMsH8Ts8USwi19kT86CeVQvrSSu4TFsEALCvLsmdsW7mh68A4dj",
  "key2": "4sSW8P3MZzusJBiqERFCqH4SphJoQR75PnXirmpE1oMtHYog196mN1g8F1B5HFqHRxAEyYPQf6SpSAYDBGi82z5H",
  "key3": "D3aYTkfA11CertRVRdkXsRXDdKik6jyX9r3x1HMjWVtg1wsVvP66bz58XsbbMfPefXpTAwJUkQBYE4jwFV7o1Au",
  "key4": "2VhpTKf3gu1SpRNPPy1PH9XdctegA3qGSc64AwD63UxtuuWXeqzBJ9p5qwRokTmBLhzVpt9o7tarKCDAabRKfBWV",
  "key5": "3MFEitQjCuEqjbpyTWpe6EmmPpmcbHsknFfaXzYERafuvUrXD7xKH7hnbeeQxxywxpjVE3AJTp3aE5RpGKHSNC2Z",
  "key6": "3ZvQwnHH8ihVoPagUkLrAfxudXcn1aa3rKAWaQ3HG7zyTf692AtimW45zpZTw9m2pnEkauGcqhHwAFTjxTT4dTYt",
  "key7": "3XaEzNrn6dDc8UMmE2SxxaHPt7Hw46XBRa5yc7aCAMSDYc1CX3VGU3kgBP2UQbSXaje9HKwMVtjxnmykKvPbf4ZJ",
  "key8": "5CaqQpYofHEf99toYA482WseP85iWkLg1PztxxJiD4TeDaA6Y3PAwTbdBwjG3Vr3W9jPck6YaQiYrnrqUFY525Kb",
  "key9": "5pqEmUFeJ2KG18fpHuxwzd1dfJamAVvK7mqejCQ29BpC3pavi5zrEjjp3jrDMnieGiwyeshKCHDPvScrQ3pCUFwZ",
  "key10": "55y1iAirmg8WfcHdVfBhctkxSbTmV5FeHjN5Qio22EKHGoFhXEq123trvhJvPxes3mfgLoGvfu7FdvmcDXSYyxXr",
  "key11": "5z3oE2xvCuYWuAQwbwJgGHriVZJKmC11eJTT3UAXaeyyKE9sAEFWhMCVToC7K8XUQxi6QZ54cqGpeErLYm9gs1yN",
  "key12": "51GiZszvc6e1zBNAun14GPsgW6oei4oMBz8KiGYiGspF6HcfhyjK5LVzPMV9PCRTRokenS8RiigoyVxCrZVD97VR",
  "key13": "342RmzVUvLcAWFRu3rxbq4EwV9uiXaCzXEeNAjLrbHuEuGwhoRnMNGxhsEPCSmw4NFxmy5aWg1cRNGhEy5pQAcgY",
  "key14": "5Fs7Md4J36nupfjQ51TFV2K3z9hVdWdRMCa3Xyd4Rm6t67GeQVZWKraUnND3k8yA2Vd29MFUyoApv3tqaFJnnRq5",
  "key15": "3J33m8EGoFhTB39kEqRsCCEFWga9RKcSYurKghTGg8VdjRCug7PdWgnHApGT5vdEQa57UnTTGkECAKbzKAf4nGqZ",
  "key16": "2dHWiDRiZxkdPhrQQZdywLQiviJN7uuaarET1PLScCdXmArYDtP8pAV8xLQ6iBEMhfutNVWVkDY2NpMS6pA1RgoE",
  "key17": "JPuTr5uSoFjq5g6Be79jjo9wUNfWe18RxHCzV83ZA1Dhkm5QkfFRqatroSKkyjQezBLYbQSs1Bjokfo55x4aFWF",
  "key18": "2M8epPZnHkVBt6FMwekWiwW3euKvBbNFmixdSHYzuT6NGgNbMYV57ysZkB9NQeCq8ZqDtdxF7icvMzHGVgQ2zCcy",
  "key19": "4dDpwNnjrb5oHQSqz6ZUwR9Gyz1ALrPht4utaA95BfRxfwPgfiGKTM8biohtJ3dfHbdBnCRFV6dBxprMAJmZ73ZJ",
  "key20": "SUX1HLphvKvMCNAmTbh3NXCMDLTR1evAL1jCj83qPF69X9Tj1WGic9h5PhXEwofCozosA4NbWtLFBgB1Kfu3RH5",
  "key21": "2hxD63qidCAMSMMiy8r66P7j1tm3nAoCpdmrPAtkbvJQBpE1Mn5GKRcWEW1eKzGqTg9383g1A34yWnD3qHcJUoru",
  "key22": "2tsXE8GTLuytWRfZmDhNWYvCJzv42cvLBPPdZVTjyrPah2QxWsWER156Qt1ztach7Fv8VnAPZr2EoJ4Jowh6yDT3",
  "key23": "5Rp5xHgzurKTy5cLG3tzbftMPHS7S8rrLjQkbDRpMBTZJYD3E3pPw2s2cgcYxsSSsoc7j4FydraPb49i5ASwcEWF",
  "key24": "3vzRuXoq8GjpCypceDEdKJuNAmpqk6XoV8nsghDGGe88ZG7Hw7aKniRWctomgbqAbNZZnbT5TTxfe6x6pbxhPMiU",
  "key25": "rTCVgVvqKKoi7mbru8SaHYtHt9Y1p61zZjpDsZJNvFybqNDAvaLuNdZqk5n7NcmCYhZZZJTREaFSueyvebWikhB"
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
