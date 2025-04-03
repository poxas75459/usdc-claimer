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
    "2Ek227TxxLcFMUM4JNU2YVjKsuM19zjjVpvccvcRDRuRAfsBEcNFy3SCdewQ4xemE7pPApuzq9QmdntiTS1iRKq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pvHekDq2SJWHnUFcWKRXnpQZawKJcZmk1iX2tTZM4LhNuQRjBDta2BAj2sLh8EurT4TqASB9SgW8wA8CeqpmpxC",
  "key1": "28ZyQreynuogCGQ2TmndsFeZvQTEvirVhzU3GDoBTmsA15wfujapPGYXw51vPkZz1dpqq6YXkYWXQnXSJhAA4thU",
  "key2": "677jLdqJdDtPU5iUWyoN9XRMHTAEgZxEAUrbngo4PqraZbVwKGoU5kh1ZEZiWAZFtVLcr5K5yRcKTVEA1aDPZGB",
  "key3": "5azxq5zTsnESBrYtfybeGfcFzEtkNBVmmKnd7YroGb2N39pT9jnuSFEkYkwUgEwq995WdTXYh7g9w3URjqiVDKwo",
  "key4": "5DPQfGVgrAszx6bRfRZq9pdsz8Cwk9r4NEVJLxnf9NZXot9S1HKZSjS6eYQbB6cWgsjasabq3XbbYLo696L8BofX",
  "key5": "2SLnCHPXVgwyL5JBvxW4UngKNuTnzBm42cUX9ekATkbYHWcJ75rtCMt7tH7K3ghTCmnqQbzhLDUPB2V4kCk391Qx",
  "key6": "2RwT71iwQQZ36iks5KQYnsHKgUrsmnY7G1oog6WxAYTAxTZoncgXFCLak7jU24kFhFgjkrpYHRCyZH6CpmWeGyJd",
  "key7": "27Q3HCuiUvZXorANauJfqu8vuDqymNgjnTyAQS9DgSHjFUkqb8CzZcTauKMRh4K2BLQ6Ry2FtNK4aWn3sM2VA75t",
  "key8": "4y7dvC5fSmcAjBTh8xe2tJ7hv7vpFBZCGqsBSZTfjtSQEYBXH4GER7RphS8zBfWws7QyA6VibGiFb4A7ezk33FRw",
  "key9": "2vD1DjiNUhdJMiqhD5rB3fcBoxbw6RPhaucwNFeUQheNduq6PuRkQgsoacogwNvg4nHys9v2YtxgcwF7Y7RaCZdw",
  "key10": "4114dLTtEfw9fof3kWwJnodfriuGk8aXan8NZB1GEKUetFVxbSPgvztvQ4QWos2E4m2V8X81rXKPTGeeaxJQnxLb",
  "key11": "4J9iTmpV9XuxjFeqiD1DoiZZaGGigHLJAFkzPuGY2Xna5rSWG66crDQR3AX7W6b3SuHdQUSjauPWQM8tfqb9mS2",
  "key12": "65Ltifu3t2nRrCGm91YBeQMLFz9TyNz1dpMgNQdztnKJTeckKgLhSqJz7uCDkuKW4bnuxUNT51gvMaF6faRW7MKB",
  "key13": "4McRpi9dCSXzJKuKu19U9rLmjg4C7dWtVxJr3f4ftapZYCpFKHRxd5AxGGX9d79mmDzGMH62JXTa5Ts397X9fA4",
  "key14": "64MxAFf6rcTRiAmZZDe997Y3q5vr6yfa2eAmp5HtJPdN7kP9NDPjuDHnbHfh1V1KTuVxjyrf8kVdVpD7JjU58JE8",
  "key15": "ueng5jyqFvWxbYZp5cvPY6BoJjuaMPKX4zobysRvcaceEPWKBJgpcQ1zrUxg7QAbtw4HiWWNr9YMUJATEm7cRBb",
  "key16": "TEdP9hS3cCXXsGoh2mnnMd1PyheC7XbdoFekaAigFadSkRF7rWH49NNss3RFrgztdVfBoMXZMrBrYcpTqvPBiRS",
  "key17": "3dU2opLw6sGrJufEJJsAiJ72JHcZuv1VGxUtUPECg4Sk7aWcifcHCuohkoFxQLDmbnrxVTzwCLSErjDCVojTnYFL",
  "key18": "4w5XtGwNhzHuvsXMJJ4BKgshKNjVn97XbypkdCDV6NorpCo1KrvZpiH524eruHKMja5NCyopFQMjudhyiFDnrmdk",
  "key19": "4fWT4qg8WahQdvnGhEx8DzDYcTwTUU5RR1f29hDdZrU32gAnzAgy3WtQV7WMjTdv8LCABjzP26RekurXbhJcBbch",
  "key20": "3rerPBaAWh3bHxrJAkz11bpsAEwViQHcJbsTpTrE5hApcevMyupKnUWRryNDqTt5uKrdQtpFL8HZMjFdhXGWoiKZ",
  "key21": "2naRuXTZxz8W9hVVAYiPxkfmg6RyUKbZHymBbdWc4s6qSeKmd4KrrGyb22gdtp4tSHR1osMR5kw34EuSFiwfSruK",
  "key22": "5yV5bm9bpQMy8rdXr1DA3m1qMsgUbcMLudi3BeFXkKeMgQ4w87yHYQzvBfedRjnV87CJNHq3GTpef3cn34GJUpXS",
  "key23": "2weaxA9agsRLa3gz2pbxb4ZurnHvFTmexkU1YZNEYjouk3csGV21x5FVMVz9P33zXiwSEPhHVSHarf6kBPDqWTT",
  "key24": "21pu1unXHrQWj3czyU5oZNLmo2DjYuMEnR82hHQSq3RJzS9wddjkzH4bRem6JCH3kiLftwWNapKKcP9rUEQFW1qG",
  "key25": "5WUhb3a7yadUF13xm3jkuqhby8qtaSbFiKZ9HvYVMLBn235S74aRfggDLYeGNaRD3VnS6wgK6Uqy75wDB7u5nXAp",
  "key26": "cz6nXzE8K2ZHVLp9hBMjiWMQYXkiqUsxGwqSVHYxwRQiso4ZbrhgJ9RTtPKZ7nZdxZS3z9kMY3wHnoFDxVMd6TU",
  "key27": "S1sULnTcgACLRAxSMnz1NYZdgeKDKsGAhrFyMV6MHrFuB38U5HqGD8dTifCZc54s6ma7jWZo1Hn2fMoJEPGsEw2",
  "key28": "3FBbWK8jPhFHtrHgz9gCQx4shdNr6LDR4hHXSriZ2JiJ6WZyjkp4krLgRRi1TWrsKcvuswm3VGdTPNNRu1LADT7X",
  "key29": "2sDUb3u2ViieqR3EXYXy82FwPi3ZEcXthLUFwE3CHmssQDQnWhL3BgwTNih1AoUuCwyxArTqT1LBejCFQN6uH31e",
  "key30": "2xrJ7c2DiZ1UteuWQnjcZzy7QhGBff3jucr435RTXE4HyVzTDr521bLVAnUTFVFF5BXuNBmRkgDBrbLzHKJZGESu",
  "key31": "MVXBfPDjcVV1X7DHhJdXRFbL9dyyB2p1fC6KWDMV75RiBSKNuft2rqSDmdtAzWK62d1o2eWyohtST2iXMMV5bVc",
  "key32": "jnJigzpUbmUM6G2y9HPzJyuy2Cpy4acU1r2EQ494JAWQ7oPvgbTU9oPpHfUH2TBpeCaJtBzyVrvo3p933kY7ojf",
  "key33": "ex1DxqABgQCYpTBgxf7mDUftJ9xPMkCZiDEfGFiC5ty5oW23naj4rxRhBWrbSxMAu1TmjSrNWqi31VNjuFTpjmU",
  "key34": "VmDYq29Jk5Xxgkco2BKPc9dXV3DYCsN4zq5ETqAeCbvrCBqZXKMV9j52aSJAyzopwaWbr5orc2eLSge3XG4KASg",
  "key35": "4d8ZbfjkpSyA4YvARmkUueXFHj5MQmDqST1rmnHt5kptei3wQ2VWDiEwhTU5HfvMVitoFKoG6MEZeuigW7vKNhnB",
  "key36": "AqEyUw9AZtK53MDUw824MHH8raBSdA9mwZ8JPwAy8Pcfvcp7V1vo35fQ1iJp9HxH9gzjA4BMuGDc8UZSP2q5vYN",
  "key37": "Qm2qdrm2TtNaemqRjasAYQEhSQRwg3eN4E6dWj1M4AiQ1xfPfrxupxEbDAHaDMDTWjvn7cbXk3YnJ265FDoYKvM",
  "key38": "KqMHv5KU8neJaEjFu8yRj6z1RMLxruk2bAY5C8NEvDTGDgotGQAUB9vY73WCoZCJS2g27bxbPGo48a9bsaZFwbF",
  "key39": "3tcLfFDCgP3W753u22YZeLfgBA6WJVXnF15TTu8Nm2hzMuZQLhRvYyG2ffrFPHvTJybWX9dkF2Jr5GHCQ5E9413L",
  "key40": "4opALJzNTfVw5HyAn5kZHYwXxzC6M8SAn1Nk7A1FCsmkMLUU8gzZtKCpFQ7L93J3YDNpCka3ww97AqpjXuwwVnFA",
  "key41": "5oUdoX8E7uwdDFakrrm4mCWv5XSodRHegReXvw4ybwRRP6eLuzgcB2kaaLPz3ixmSGV5tyw6VqgaQR7rtsC4JHy3",
  "key42": "4jqEzjA779bYDSKSi8ZNbFb2Muun6KQjrjCfUFJRmCynzk9nmSXTrAiB1SadEWfcr7F3bhhi2VfYtV8xB8YBqFVc",
  "key43": "5Gd4veGMhmg92u89Ri3aYcninZt3AK6Hqoxa8B4JTpEhTz8emSzWhNaGELpxMJp6GtQdFD524zeyTh1NnPU4YCC2",
  "key44": "3yH4fK9BFHbmDVjyer63GJyNzL9L8i9ECJ7pt9EVzBj1oJu66YGqJKc2xWR5C9JNToxXDDugimA4zENgRmhdCNTh",
  "key45": "TiUog2bHXXus74fVq5krd68yyKeV78gbvVwRxHB21xqtpBocWSE5BD2bqxRazNr7qp5JfnqpzgrCRYdRBrGVUBJ"
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
