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
    "2bAj5ksfUdAB3D8bbUsuSVvyoY7CvdWiwb6zAJkXpndpWRWNY91LLrZEiwZasNzMFqb1bX9er8tnn2suyUtxffwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KzZbax6U5mkY6r9QSqeKPuHkfYYh42YHZxoDLw66QzS8Ah95MwgVpHQ7VV3LaxMQHUMawFFVE8fe9KDGYwr7N87",
  "key1": "4iJYzhn75JjhQKkS4SthKTUczn9WEbu42p33eLg3vnd6me7P5hdmJXMcUH8trGbiWwpm5RHRY3qiM2agjgQfkqHm",
  "key2": "7cneFnKhdAhcPYdrX8LXX2vBj18VyaScnMkjcFrTqsviBbZU34hwMqhEUeY5t1tS8kht6TC9Bapsgk3dCn1Ucda",
  "key3": "58MsxCtks6Qhcq5rr3g8ebGY3sPNMUqVpZmikbfT748zJTPYwrC5XovDak5w7GgWA3XxtRSAsF61vsYQwn5j3FP9",
  "key4": "Qfg52sGVhexdFsN4eMg8YXzNeq9FkfG8HA6XVStkiodyVwVaFRb7EuHLZzQNLePwavtKSdEB5RfzKXUCZqeaKbc",
  "key5": "4J3QvYDcQhHbne5QBR5xJqfeWyNHQNJ8ri3HBWHXXTcuXSumtaNcUGd35iNQfFDEZS7yhwVxrMoMA37auEBBX4vo",
  "key6": "2c5KryT3DW61TWL2PUzMLhYNpMyEQxr2xN5jWBoXFqJjDBVj4SqR5BrwDgjnPyPkmdmLNu3SdUVBpZWheosi8gS5",
  "key7": "5cG8Y7FPq1t4csdV5b4MzgRSeUVG1uqmfe2w3cUZrmuFH8SGEahmqWMFHjoaoSvxUYkDtAHfXYwTqp9qx6xsCNS5",
  "key8": "2oYWztuPoriZaFcBsa1wtAPCE2RZ6dzgWZBQ41fYRxgekePM8GgpSgGRKiniU3jfoXKRLDKS97SAtFDBRukrk569",
  "key9": "3doKk8jNW4iDPCNwSYjz5ZufRc6qxUNB5SyC9XEvjNYfWp4kubBbrTDDNRpT5FNFNdSbVzCfX5p8GfRnYm19kpUM",
  "key10": "39Wmqo3FWfdyMENKWVMgg3yu5wcYJAkQyCRteeJZzjvMnRMTsKYsBN8mrofy36FoAn17esNG3tfUFMEdnCtcBJuq",
  "key11": "4KpGa1mX4mBP6GXz48AqZ6M4LcqMUmMGpfhXBr5SV998xZiTZT4SJduPabu3SUyL2bbnJEMYmpdVRWor9ztNdujx",
  "key12": "4yNZ2xbjVsGXnGsM2Xr4RiNkisrR371kw2pBLsdvXn9KwfjMAp6UiDr8JqgnT79WZ3JiVr7CU5JpWJBbH2bpJeu3",
  "key13": "GcpGQzP1oKmhncAMQYeob2j9DvUmCYG6KFc3gfvFXat8oNkFJC4PDfsgurDK6NCCrgRcJ5ML1eSJuDtGofXv4E4",
  "key14": "KfLMYGqXvd86XkRSFooXs5P5ZECZQoUPWZsiHp73LJicsHyzrwNgs2urGqnJooV1iKdgRpXyrU6scyMNzgwhnHo",
  "key15": "2zygSnNwCohEksGAjnCC3GcppwD1H4SqkMGD3rwfyG6xBg65rysYFFMkeWrLLNqq5NvpthQxnikcuPtNKAngMNA6",
  "key16": "2VqbtVNzRm2WnccZcafhxicZfs4VTgLqNfbLAugsXEJD9NhzRCAtxY3nhrG2HR9VeR2Cj6yTWy4agPq1Lg24e1N3",
  "key17": "2MBTWUSvVA12dMVqcALScPAFJrqUkFswwXvTiP9L3FQJBAK6EDKFBvjVvF8i4twwRwsz9mtqoE83nFrJpekxrz47",
  "key18": "MXNfUeaf1pTkDK1hB2AWuL62BQ8MaRzVin4E2A1b7b8jVj1KV7LBWe5WFFjjCqX8Byv8Hd9jheRxrnJLNttxecv",
  "key19": "DQvmttR5HBwnhoGq4fEiC8KDBzAhKSRW8Xn1XX41te44Z3UaHX3ZtvZmbzhyNAhcyN8d82BcThFbuSbYQZog3fX",
  "key20": "5vrm8PDHiZtwk3AncyTD4JoKkQPfw7tUmFzseWQ5C8goonwDm2yKCrnV7iRaKuWYZgsNQ3mfCJLtLTpWX153AGZm",
  "key21": "2qiP2YthRb4XzVt9htcW12b8ZnjETFuq8sEeoUVrMmKGsK5W6hVaQNh46tXrY3U3RmqAAC2jAhJk4cKPABiTjKXN",
  "key22": "4Cq9TKx2yU1ApxF3WkrpBjQx8t16yz6HWqk3J8p1mrKtujwCbARMbaEa4jnV9AexC43JMSUvF7dwNSWxnR45NNZM",
  "key23": "35ctUpG728qUbL99Rgq8yepBhCNbEqt4GaPGCm8cbZbKcfrTG713edg7ztBeJS3YnreWptQirfsbiR6ghfDfpvNQ",
  "key24": "5dJDHQ1EbH76TAAtJXbrhMHiD7vVSiaj1peoikgni8BVQLaZzLuHpEyLS9uTfMvQKtzLUeRd5vVezGTtPnENvFDZ",
  "key25": "2hQqs53FaCJgByVqthEhadBxvL1ZDXaf8HqGeSbPhtYy2LdTJ6h3odjPsRfGDxFZj6ozgFqSg2bjz8XDuHaRYWsk",
  "key26": "29mADxZ3e7GrTmVV6Y99Wg8mZpgPDFeKtpScRD3i8Q6vvh714vKaCdVh8tfAef4Le7VVxWUqqmssktpkVfqJ79jo",
  "key27": "61EPCqAJdVUey5LW1HBdiEykWLSvDhSPQfLwbDGTuooek5xhW5yQzjcHcoCQvPx956nvtXyLz1Yr5uVbuBPtbYAG",
  "key28": "Zb1mot9zHuSFMCdLD4JdKNLwo24b6ZE4XFH5rDUsXWGR8n1C7jACtKJEJEFzXBY9eTi4A7PNeh2cZwQ1Frpn8ut",
  "key29": "2jicmR3VGpr9zBNKqretJV8887CfEojnQoVoXbUYMZtFuDmjTT8SXH79dd33FFhtm98WYaAvFWHUpFapJnoA2F21",
  "key30": "5DMF6SUAAJEv8o12ghhxNK1KDN892tTeTU7FPiswR7Cyv7J4zgcuBLUuCDyQBECwtpXdZ7nkEonQkja2PpjmxeLC",
  "key31": "4cnqzSY8KAPqA5QtphowsXXhoaagoLiuMDQi71HRzSyEc2BadmJZuSujPxKvCnG4roQynQa28xLHwDChCbSNwaMN",
  "key32": "3e8TGM7LU4qKKPBaeRSUx1y8RivMUSJ6fJcVQQRDZ3SwWEVEFs4txCSPQ3cvogeyexjDsPr6duUrLCW9yypgyJhQ",
  "key33": "5nyhVPb183fxrk6gumhe7LFBdteNnxXVGix4PcxNb7QxdyT54fiQK3iNfhhU9ovtxhEH4qXYkuVKqYXAdXsnYZfh",
  "key34": "3NLjBaADo5wcws8dJcRsUuj8Z2NTTiiHXadf1qdKgxTHvgtbktbxriLPKcR4qgpQZtgMtRjXymR2RScaont27jmP",
  "key35": "5NWTdKFh9rgAqixuiUpraQQiGLzBsVdETpdz8n5spGu3gssa2deAYaUJG3wdftSFLrEyfAfnEYQoWTdLHyidXc8d"
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
