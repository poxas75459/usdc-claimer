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
    "5qw2Pq5GkSbBswjBHgGihdRVYHcQd6NzTPCgZjbfqeeMCMu76WzsaYwZeA4kG6cPyyWGuxmYhWwg7RToXZqxvuey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "275X2vws2w4yfY3dUwjnfTE3m2xF1DvDFXHJd2fDSL87z4aLcJtMoyexrnS5wgzrMm36BaxJqx8azvZrXGk9nhAL",
  "key1": "aZwpRzdF6e89V8eJmAoKmULPXTUwy3JfbHHWoy7UUmxmEXHosBRHnHMYYJz4ppjoYkiRYvfg8RoXBo89hLCeEB7",
  "key2": "62dWE29RVRK8fhxxk9WjD6ExWFgEcYUagReB17YY2L4fpijHAnkp5RW3SsMLFnDWV6mgFq3JqbFmR6Ho6XZM6pR3",
  "key3": "2RcZ2ww4rWZeQmrhPCf8igDDamdB3zeL9CA7p43BgVaeLgoFSfUEUs4mMRpaaeJqS6KW21Ro4cn8w6HyVKeNbmHE",
  "key4": "4CjBEB1jpyhKM1kgBrCW24SivUEx22fTcFH3zJSYqpbEFPuviqsJorQMRjxtFkTQyjLNzb2JuZuqmew2oD12rfBG",
  "key5": "aNzaffyxAKyp9K5sgwrcwLFTPBz7kq8iKkgkXnxihLMbG9wBZxt5nyaWz6TW3eKqfPVj74Hfz5NyenzgAR2d9fP",
  "key6": "3GCWhrwhEzYgAefiBBZiR7tAsF2bMiSiB2AubGSAavK3tbyLDxnkPSPrtsEFCkybDs4Uhfd9rpbwezsqwEvYf3Ze",
  "key7": "3NBRXd4pSNpqUjjVoFwcF1Gqhsyp6eX43znAEcu9RxkFZG36iZW6T2A3WpohU3PXtX8cns2cvoig5cQwAiKzduHo",
  "key8": "PgxjiW9Auuwhqs6e6Sf4qwyAcQmoo94ipu1Nfa6ypfpVEHTG7yETNvVxosQn7SDDpc4EiRxZbf32EUaF3Jafc4N",
  "key9": "3AHyNrh4Rx4gHFvPsdQdUUhNsyFNjeXNLL1xsq1yvnczCCV48RykDcP34MnE969DqpbcZdtfibiJYDbsVLndoMr2",
  "key10": "4CZe1B85bf4XEZS28jVoZZTLPM1UC4No7kVd7VQM8KD8mwmxiZ9j7EcCiq21NynkAKWpqxoSU7C2i1HWpg3FNA76",
  "key11": "2fZf8qSyYxDrtxzXd1PUfhGkojtW8HRnxo8JdQmvvSV5MRKxE6CumUuBfson2R7srWtTp7Nb4q4HJTCi3LAqVJ9h",
  "key12": "3tuHz4eTmZ7uDSijF3E7Mqd8wRjHwCVu3rcT3ipxhVJLnR5KZ3syDxU5ndMWDq84Jc52gziRm5U1gTSfm99V9XpS",
  "key13": "2QJYjQ7vgqiQBic2CjuM9pC5VmuDaQ8fiwKAwFj6DpCizkgYETZdAC7jTNVmqmcB4fBXDTr44jHEL2AawQbMdmDY",
  "key14": "26P2mvHgeue8CLUVAE8fi39LvL3kc55vFDMEXWYhtxqJAzQhKD1Zw9GEpqoUwEGRGehPDR3scCK1Qdkx1hdjwgGg",
  "key15": "eCzDCqPRXQ7VmNMtTdFhkVqGQBUdfnUDUCgcLfvL6yry2iZseF3a58gQVTh8fr9JDgu3afGcNV3V27VeCBCjXUq",
  "key16": "24sLDEv62J94Xm7N3tSZ6fszJMszScsodDMyHJSxACsUG8xPuNUCzwcBuiPK8q9szmJRLqjzdEpYXLzzKzd7hjXz",
  "key17": "2hWaUnBLg7JfqhUTphP3NJkWiLBhF1igfvPsup94b5DWikK6iVEQg3F1RQmgLZXfiMadbdvYfsNFaauMrXYNze41",
  "key18": "4AqE1gf6R34yYqMqoXhtmCcr5LdUDPuzbQi1gEAs8BeNdiQ6mL5NWqLXEQv3b9HTaN6C1PQU4ha1H1hbe28bqYYY",
  "key19": "4FauY867UnLmYfmJNRLEUv8m5gQTWsfpU3PHvjQczUayCyXFmVdHJFEa8kP7rjq5VHZSZfNjgC83DwF8ENc5bEpz",
  "key20": "2bGRiVsHNsKPjU4fdKnUM9mtUWhVe7y893KsTwMr3pHR1yMAcpEgvvnkcChaSrpS4QCCFqAyQDwSecTWzkNptkAc",
  "key21": "67JPhRu2E5V5zBFc7jx2hqVE9M4zesP4zY2ResoVGLxq2qKvBkZq6Pd7dmSLDFcGbVQLzyrMbXRzbREzHMtGzMYb",
  "key22": "4nXEhRUhkVsozNANBbCZebGmjPNwv5fJFwH8iKCETKH4vwzrZzHyhhk93XWXvb3UTsLRq9PJhuXJF7yAxECWYHLq",
  "key23": "4uvMWXghGPdxGYnKmFwK8d3VVBYUxWW4oFyUASGiPBTN1cAsPAPriopFPmNm2CJrxCpWm4ZqDN7iN3QwT9nvtCmQ",
  "key24": "2DTdDhJnCm8Jd72gEQTvCZuj22c88oq37mTxhcKK3NgNdx3xvHNU8NRjsEVs128R5mRXUDYqk2urM15rueLa7vEA",
  "key25": "5nhy8WcnUSEe7E53oNrcbSbSiKEftp7DysKBS1565NSYxQRWCsfBWyJmtWnZDvtMy8kXu9t1vaUMmmiy8nKZK5en",
  "key26": "4CXG7dJ5frbGv4oa62n6S3GP5o7qjXUvrobDRUQzv9nYt69gkY7dTfsHGfsT5xax9s6Lj78E8FoG91mp7kRaNQAQ",
  "key27": "2xZbhBPJKgnLWnPwb3s9qApb49F795mAGs6cohqbUoM8ELwd1ecZhGPgc11DowUMuD2EcFCjeuAkE5LWN3WggBiN",
  "key28": "2q5fPf5C8TnT8BeZht9b96JgnzRaLKLh1ysw1zwDSprqKdjzDT4Av5xccux7oHYbPEKFCRMNeVAUbsGTuGaYNsHk"
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
