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
    "2wm3UXDjNQBLZEjRMRaKs6c4KVngWoESZnq7ms9x2xnBoELQH4mMHamj2jQhrFmLWe7YiEzT2xavc52bzcRh2xQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMxMW4JAaRbD8DzL8WK8xQVGdtuGTgCyyguWs6F35HFTfqRFC7A4zxxocCpsi9pnFSomuBMQHAgHvx5puFpG6Xt",
  "key1": "5rjHpE9q3srfBEzZYxPXzKdRqbQzfyG8beY2X1rn7pNWKkvs6sjuEnFou9qE9LcnnM95AXi5RbVGZJCTeq4VRDkG",
  "key2": "4en58xYq8mNH9GpzdFwGPxYw1kLY6zsqK5kFF848o1PsNdDRrUhrkAZuSCvPLX3qw5p4yKMaBwKNws55V958HJek",
  "key3": "3g7hnJNgbiih4ZD3uaX5Y6fknZ9kQsG1pVPenEnXrukrGzt9GhQwjC2GFDAQq8TijWQ57yRqv5fqQJ9V3vhVL9zj",
  "key4": "2UX32teJYDAMQMDnDVay2mTf3TBBVXNFaiPEnHaqCwUcCZZsqwjPujZpm36TcaWnCpG5bn9gngmye7G4NVQXWGx1",
  "key5": "4sGJsJtyCbmWuFjexiGA8AibcjWEPfeqp5bV2Vr5o3o3rZEKZrxdJMMFhLn5AwwDPkBjvxHFrt8Vx1sQ72TQFe7c",
  "key6": "57guRFsuwX3hgfCvbGZmoTEdL4eZQzwaZvNwYkKrHq6gQw9Td2Vs5Hc3naXSX29wx3vcTXAsZbV3U3qqTKV6eWDM",
  "key7": "5V8Cmo9YJ182qEmG77tMr3GPVffU536RZUu73KQidUPujii9fx78yxk3V6ggGFPm2qC9vnER15pMCKJT6TdTLRxb",
  "key8": "2cV2ZFZ1DkZhSqHBfcMSu66TMUKNSjcYcXWUm9m3nvNvAKXEcUjtLJFw5NTVYFP2uYFbp4rLJZ4fCceiDNTb1QfP",
  "key9": "46XrwMaRy2iFuUPsgRuSDUJ72zYujhsmxWyAJgE25HNmDWsdLWxByk3tTie83EK4Cafd7AMNCd37mjVZNDCGmVDw",
  "key10": "VtuV7GScjazZsGuktJtjKNxnoEix9y9ZL2vwHH1kJhFq8vdenkCr3xAHctYYU1soHuXTm5N1ANLdoEtnSXs5y9L",
  "key11": "29rJmmHsHgFqVaSbERWhBxgGEoyvmpbekzpddL1ataxvuw5UbctvLKXmE83f4wYBkqRcFtHW5MdkwNUAbY3yNc2W",
  "key12": "gEEsMwffmV4Gikud336yyGdWVFpxV88UdE6VLnf1eWu537qBM6VEpY1VJJcZaXZRVKnWKHtStHqiWkHvKzp7Xf3",
  "key13": "3Rr3TazFEs24KCm1eLtoTS56jtBsCpEJsZb7Y9DdV9zQ5JXKdAV4f3uJCZTfrF6hkqXr5DgsebJYpaBzi1FMV9qg",
  "key14": "5N8EeQh3jZ9Lpw6DHfBsDWeNFrxGPCGJKoUYwPsRXWpxNdZarxY5qdLxqd7RtNUMy363meCHYMLMaZRKMcjYMt7G",
  "key15": "BNtaPzdgQCWHiKTgZYuKpzBJ9WD1sxnRC7V5E4Dpk7LgBHpDNYLi9EeGYmGpmWwV8xMJA9yJjiHaLYVLR7BRiK9",
  "key16": "5b3DxgDFQ8v8vFxew6jCN3ezPhY47Tsdw2pPhrUTtNrfnTSKCJbRDbnZfo9BGkKCuGWmRMnMz7vc6pL6CpyLMEw3",
  "key17": "4EGVZydeU11k3Q3LEKUAGaFTDcYNNjFmNUoh2tHaKZpg1wJxQ6ych9cmKMWBDoxS8BJHXMoNyNRGSJppnwGxe4d4",
  "key18": "3y54biuL6XPuX8WSfsgdai7ZT8xQGooS2tJ3gGALxB5go1Bh68F3FoWmm2CgkyWTZ9kH52zL3TzBeXT5c5hAq4dR",
  "key19": "3YhL1Fx8BSEYR4LzKQE4Hs2qU5jHCWHHHWLjAgKXNBWx93TxKe7FDUiKotfKo4VZM92aVerb8txwFNDW988orJPN",
  "key20": "4HCfkGVMcdAvu9oNZHdbqJEB3JtMn1DgZwo9gBen9fhQiSp9XNo1om5q95Dci8S2Tgj6yxhEttwDjkskBHgEFL9D",
  "key21": "Chr8KKWbNY1RquyKhidaiPuimt5HNRdVStJMnmTC9XckENgiUSESs4huQKZRXezR9jhCzX4c7p3r4Lud9aAPbFN",
  "key22": "37vTrCNvFB3wfBQsgCuFfaZoPGhSUoNfdvUoDvaAm6ggqAUANmeJinuWZYf7QJRmc7cG58Ts4sibYFh97mCh8AzF",
  "key23": "5NMgrh7puK7o4oD6DFzt4xNWagFCYXyrwd14QqNfTE1HU4sZhx4FtvKLKjPujLuNb6NkVthc6XLKxaxuC18G4dNp",
  "key24": "3HdwjH2btyMXc6yi2YeeqimCfGKVYHyGuwnTPR79NL3HgWxCzsXYp8nSd7pAbRFKLMz3AS7RNVA8QmmkAiG1VFgt",
  "key25": "5r1QiNwCvmLSxD8atqcqaVkULjzwq5vHG28EZ6aUWTMFdSP6HeybyPQ48NBm2G7gyLZADtWeRFpn3wiq56bEfJm4",
  "key26": "23ciPfPmzbQoxowiXjh6HjNdUK6wix3ehdf69LEGNTG4zifQLgPbRgjvP4hXhyzyVuk41BzQXPfv7u1GP25QvBWc",
  "key27": "5H714uRmEVB2sLHc2Q25iHrxYh69LVYy2Xmb8nAux6nTDux5FZMR7BqKGaAnMWVRnVEC6seacGxzDx1zXPcMDJim",
  "key28": "4Ax9BqCvmL6hKSsqEnnSzKkD81YMAekcfQK6KLNn2WiLdjgbLuDWjnETpeB2otaYVn4SqEY8yBk8vYYZCaCkhBaN",
  "key29": "57ifXgXXhgcqqSiXV3YPLDdf8QfnurSsVBZ9pwoRks3k6EvQnnQYvTwvLwbjFe3oAKLhaDiyL5MpcvfhxF5Y1Bmb",
  "key30": "2sdpVyTpFbrj53sLnMvwVqzqXsVEDhzXMgtoBvgcGcfqKLxCqkKP9VzHgvvEVizWh9JN6eKZW4mTVvkBraLXZnD1",
  "key31": "3M1mm4GSLTK7eera6dAvxhsTcQbGAS89nH7h9qnUQKLgq4azSkZyQZ7UmFPCyAyhNnVDvLCtE7d97ZJf4pQ73SPu",
  "key32": "4EzB7PUZam8BpQoPgLnhvLNC2uYFPhj4ArRBdzCoi4pcCveABDxeJWFMEMuxGhyw1zEbt5BxbVouKixZwGXKBKNP",
  "key33": "5pM9adv4YwNAxKefpUWc1dXDeinbxN4D1QTZyq9pCobqqW59uSQJjzkbngzwbYkQuTaqGAZDhW3iyRDaH5KKZEZH",
  "key34": "2j8Q1NRhcKrPKWoqAMCWJEcM3YDK2zxw73dw8Mqa4JWbogbrWTtyLcvJefGaXQzWowp7KBeKvHkdtxRApvrDwzqt",
  "key35": "2wCCiuDRcZZgX7Eo1hpJz26Vfem3xhLSuDXZnvfeuMFjZycX5wPHJUpzcbmHMXpdUazrX8uVBz3J8LQnRdcr8uwB",
  "key36": "3dASLQ7xRQjPtjRJvUU4BvszrcKKiExmJWQeq6PpuLdQdkkEwajQkrfGzQF6bokaZwTcViz7AA1gBQwyxm6b9qJb",
  "key37": "4rfQkMqHmvfHKq8p42doT3ztv1ZutGPrCZFFSHTfiiA2wrmUKyXEyG83ZM8c1k8RXZE4pfEuRDWNmZgVMpMpfWpW"
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
