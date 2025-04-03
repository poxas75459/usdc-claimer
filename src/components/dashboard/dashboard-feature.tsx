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
    "26uSAQRPVn3Zzosahx1UvxxyhNEMRTrGGUAT3nFDJhboGSqtGQkxhuMsYjRqWZDisJegHbQUEm2xBuLsnBXJZUif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RkuMjptqEKXgb8mJvhMTv3CLdzYyiQe3bTgG468Xc7WPU62d96Ru2FjgGeaNL3gZEPfKvBzUUERyy3UcX1rU7pv",
  "key1": "5sBZx9eTNu3ibKdcLyhpNvunN2XbGi79AfpBFp8fVPs5GachYkpCDSYm3tNKTDJrHcmoDKUJL8GHW185A9Zag7xt",
  "key2": "Cs3TdDAnP17gNJqxNWMxnA3JqqCQJzE68aYd7hEsihKnauQkpLwsKaytAfUJwcPvLpiuHUvygyBiZtqUWsD4EqC",
  "key3": "66y5HaPgMb74wN5fSGWXCm2BeUovoXyM55oVt2ut5j5kRpnVA71pStgFNCZ5nPD2kbyZAVZxm56DovdK1u4ybxd",
  "key4": "3KMHZzqZQmY9pwymnVWPFaBHy1zPPJ2M39Lu9pPgRSNp7UmTxNNYSoouokXoWfAcFUKkSUafWWorFCFLfZWhUD67",
  "key5": "5JKzCR6dWHiCXVTgF21LSHZory8p4Yu5eUY2h8nVqNL3E3CyuVSAswzFbSnKVGhidhMzXJ2x3UR2qCRqq9K7yZxF",
  "key6": "4gFUYumWuvTaGiatRZPAtBkBpey4o39UspymSZgBYfWYTV9oFpcwChaUt2Mi3yxxaiC3PeG5yn9QjE15etHtfMML",
  "key7": "5aQNCh7j6bfzyQ5Dvt5yefxZJ4VDXFJZMs8Ggvt3PPkxkKnp6uDLXL58K357ny1vQ912fa4yEapsS58udM38FrnP",
  "key8": "5uGBDSnz18KeeXJ4i2caHvpqt357uK1CMPDNhu2FmtMkqPoP5611SgRf9vCgDHzhJhTaByPtG3NDtur724ykWXqs",
  "key9": "3V8QXm3pwpwqTAh77xS2ZUweLBRxnMUSZ4ZmfQuJA9AUu5fWA4LEvnu5SpVrsN1TAwaJjDpdwZaEN1wf3xH27JzC",
  "key10": "53RbxhgeNAiK1gPEy89b28bT1J5BbXrHCdwNkSHRKzoabvtDrEwJXrUdMJXMuQK5xjcHgUfPk4uBkkKyqvuQuVU6",
  "key11": "4groNR7vveQ2Gfrn7LdR4Kc17V7yCwSE7qVXfjKg8GLGzodSEyZ6Q3z1bG8geuGqt44Ni6cq5a3ZG4KVgJExKM9t",
  "key12": "5KE8rRR83hYUaWu7udUKMfaDt623acaWURKsjJQreKJnFBfLHUyUfbvUCgUecupu96aSRn2yqHx3yUVnNKgt2AVy",
  "key13": "qZcRP7Tksv2CmGRQAhV5bUZAiM9uHw5o6jBSvyvrZ6tNYArXgtHx7uMdNeS3aAqke2DT7zj95qDKm62Jt19LhYs",
  "key14": "MmcX2Hmov9j1gLGQzViarqNR97Zo6dtyAV895BZrMcCKqTVpZZ3zr1885FNgBhQtgt6mmygeZz6oq74ApZXbRJs",
  "key15": "wdangdgHbmKmbcWkJgJgKLdLJzinrpcqpdL2sB3cWQkxkjNcwarEBF17vzMc9jH36AFzhmaKVdg42oEAzRcTGR8",
  "key16": "2PrRZNsK7BxUGfm9F8hCUG7ug8NwXKK3kpRFekjsroxJQFaGgJcknQgotH213JPY4UXAAAQkKDdWvW58J4jdVsD3",
  "key17": "4mdiAQv3Q7oGMfeXwz6bZaxDAP7JTpmE36L665gB1ESma5GULif5r8z9KgLqbhC5V4numZp4RqxPyX69iP5vESB1",
  "key18": "49wfNAf57DJxxyPEpYSZkx99SRALdMbXnt5tQAGsVTpZHMzccAPzfVmVbHyRoBeUkHM33kipzkMixnTsTx6KyH1X",
  "key19": "3egST6JDR7jVEZL4N2NtEzm3DTtVk1qpuaco5xXwG9b1ZykbB1uWJX4hhx64mR8jprJb2VhmFdpP2MFN7rKkVGrx",
  "key20": "4MyAJzw8bySkadgWHA4Nm2dptEL8XzYxzkudb4iQeUScvLXK23gNaeGZ496y3zi5Dd8n4Uu9jL19mDG4iVhyXjZ2",
  "key21": "39rndf4XAzuLmV22zQS9nQfbNBgjazXB1sRPbhHtm4dDq3Qt2jXvtMApGjBRAyvLQBCBFgqTcaAF2zSv9F7KnxwT",
  "key22": "2uHNAuE24RXcDnYfXj9DapgFo1fKXJ42qf1rGoZthqwReZafnbMd4R9btnu99no5vMgXQ85yFJuqrkJxycK5gn1b",
  "key23": "2LPJQ3Pr9TEQhGNoqAX6HM9657iMhhAmTPuHjKwwL7e9a6NeExakGRtVvavfGx1Dy6iXdnf2BfkcWEaphRd3XvoV",
  "key24": "2XWKWC4r1ktdQRkYaRNiGpdRzWetQZMMUtcCNgHDjYU5BRcKsRFRsjuPtpYBEtHSBL9zz8hpPvhvUsFqd7ZveoNP",
  "key25": "kHtCXi9KZJZcc16MU26UHWXtXLg7FkCMktUqZ5Y2owGfsgEVRjzZeekjdGv6kdrf1aJBLyNzbyR6CLuHkck19ir",
  "key26": "4ddz6c6pqVeeaVY6puMCN1kbeqqaAPsLZNb1oBBXKVMUDtVP4tiFe2CDw2w5UJFfzRFgGuowyAajjs3DcdY639FJ",
  "key27": "2GCMYsu3mWK9w8MtreFqGnFYp8iHkfq2PAHDKCWEigdCyPqPaLGwEX6tY8R1abaFisY88zBCPR5X48FvWoMSB5EE"
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
