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
    "3A6cxL9w6FqKTCLipRLZWaCt5ZYrDtFrfmgq3KhVvbuSCbbYKxBwi1juKTzRAUj5VpfLZzytVByd4CBtbdaYAQk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKrmxrf4ZrA6qU9LFSi5c3geBet8pnYWb67XLU2L6cVmYhRR19Ac4W8pmchzDZrDLWVHu7Dwka8ZuTEhzU4tKJT",
  "key1": "2XeG2fC2dpmwJc9S3m2dHADJ4shfEPziMGXW249LxUj92nRjx2fLVtdPk4A2CkxcBc5CGPHgBMambvDzUQSZe7vZ",
  "key2": "3AVdyjfRy4496AcbMwgXeCoVuszMzLZY4LGHvG2PRFvHUmy3p9UU54bnYYyPmLgtV4nCunhLLEGJj23tkfYPvf7v",
  "key3": "2Y3JtH1Wyr8Y4RjZcsdyoY3S8fjg4NGGRbH2XyzdRvrkJC8RGeGNf15GcmByWCBL1zzruGjFqBoJMc7oLHsjE6Tp",
  "key4": "3yG5n5Bmo5dT42tjjN1982y6yX4HT7CZJ6Vam9ivXyTXekbVPbQQosDNnKdrhaoijrakNGqt1Aud1rKfzE7LtXyq",
  "key5": "3HGn3TWrjuZDuTJAAFHqXzZnuuPK7E9xiVCJEK9xztHWHeAGQ7V5jAPcVDaKbuSBQ4d4ABXooSVBUPAzNo84vBMi",
  "key6": "4fUtaYVupPhT7s4ryC4Z1CXxwwXBgSiojV5Rpwyxv5ReBHWos4WerRk7mwBM4vzpXdvvP2u4N4UzrXT3oxxHaUox",
  "key7": "5zk6fcnUKmbmoA9bzBUEhGGb6JezAyibc9BNmj72sy3oHPydj1bnuPv7yoDfrzcRC2AS47yPFdZvP8nmzxkshEFo",
  "key8": "qjmqPHaJemF1PmhvecHBqjmEfASzxUWygxgHhkPTPDnddxCRGit4uexL665xcFvxcfvSaK9dwoXSJ9CFrgf6S2z",
  "key9": "5v4H4KufSLMKp4Wx6teEFujF2aXZN58mD6YVZzUkAByFHKNRTqRL8u16MznHsZcMmdaRcWmavLPDv1Rw74PiB8AD",
  "key10": "5bm6ELECtK2wxzMHTmFDjbRYPUa9seYHMnp66Y4AvSMEkMqS3pxhBM8DthjRYUy1JNxK4uYueegQC6DDYSCRy6rk",
  "key11": "5G4Sk8MpgvuvrsMMAWBb4nNXvwgW9JwcbgJkRrd7kX5W7FuKFQhU5dcaQpRpfEBU1vMCSaYy7Qo7x7NawNZL3n9E",
  "key12": "45eufKywcFoffGWwc6e3w4cVAVMAFgf39vLkPe88rBwpTxGrm7wk7r6xtwFeM3BR8tsvb6PMZdkSH672xJGoCbSH",
  "key13": "bKvq8SjF3JNN21UA8qZs9GKNxjJUQMDdi2iFTzPvw1Hj3Lvc4pu1JaXpPTyYnVkKmtMvEnvbTqTpZ1qWg4YdTsq",
  "key14": "4FwyGHH8Wmns5CKapQ8ARKiKMPqJikepPTPRiUHemmXXPSFkdLQGeRLawpK88by1qESLXVFfRaXvoXU2ERCC62dZ",
  "key15": "3SfnzYgWNZtyMkgo9cMsZGdSrqySdB7ZH7Bo7psud3i7T26PQ8Ht9mRnFGhTAXYcnwDDGrarFBvATJqLgBLZpgsU",
  "key16": "5zzfwkNT9TBYxWPYf4Aca2ZUHtzbowwRHCRCzDSqXagPeS6T9Nu4UNF58yB2TfW7QxMr4ZecNkoDjAPB6kZ9YYhQ",
  "key17": "5EmrQAacLkLRqXrXr1Pn4ykQLwTJug7UgXv9ko71vCgwhzaAgFtGFXJzVCiw9dxDGmSF2QjerbAx54PLGmoNtdN3",
  "key18": "4xQCHd1dN8BpPKMVJL2sYG3A2vWdvhi3hwB43isKuh7vqTtcvD7nNBF9pCkCcKN5PLw6Xg7kAWkMU2y5tGcpS4eJ",
  "key19": "3b5c6TRYJnv47Z8ZRCBPGgUXvEfEhhzaSTn5kidnSpkw2vGoMN9jFBftEb3Pzbm3TczqrNKit8NshMXjyQBdwP4w",
  "key20": "26vb3hCpHTaucG3ym4Zrh927962zkaGENrJBeLxkzBvfWA4b1CPTNj4SZVQ59EEK3SnK4pvFo5kJkF72YfrgmAc7",
  "key21": "3U8PR2ZTbWivs8umMQSDqqDjLCW6EYfiDxiY1QTrP63dFjLEhhZqAksKCFWdm8TCU65auV7NjBt36uydGxqxkmhr",
  "key22": "5eMhN5QE9tBQxBbsTEDz2AdNW2CVSTCwEa3kWWJAKLmyXmFTKiGLkN3PLseKxssD46Q8amrskKzJx6V6sZCtbe3h",
  "key23": "D3pQUqz9cqPooJTMNkqp1mxLXtXzvHWpzXYGugTyeg1vEJZidCSfA78WTeo7Q522ZrE9h6qksbVwtxdyivnRcAk",
  "key24": "2nsTsPkwMBBodhYXGbuP83mZCRrCUiL33XHgrC3VGPDK3F1yQu1WbCkJ2mhpEaGLqKpkT9VBWescNQkL1qdeQC3W",
  "key25": "38a2keEsrbci1WjgZrv9iMWmk5fm8QL2K71srY1qVsqw5PgcRMbDBRVXWvU7aBdXB2K14nvjJMEEJUWiDx8Lsu92",
  "key26": "4xVJGncACZpBsd7Yn53CPR8MkCueTK3xxq41vyCFv6fQU3sLQ3zksdx8PpguXEW1L4mzJUXjVCW7j7VPW92XLvmJ",
  "key27": "39qyAhJRtnmR2Bis2fL5ieA773TgATC7bYXLXTAmeA2Ew8VFwVZyKGvQG6maTG9rEThYwDKVuAmTHGYutxURZsT5",
  "key28": "S2bD2oWAGjuPaYvPpstJf2o3REwC4VNXkALuuK6Uoicvw5QGjZhiMqZfUEtBFrfCvwnaTF9QESNygSNf7BDnJSi",
  "key29": "3fKQgn3i2K9Gvu6P2h1EKc8FzxEx6tR7KEJdSSuuR7mnXoyAt4LEHrfr7RDoemFMFXFJCxpLVRzVv9f7vJRxe84H",
  "key30": "QS4K77VwHme3JZhxd8kQLLTZwLcEv7gqQgKpSXspq9VGViSdEMiE6WrYC53sUPLgLGx2GoXRx18tiwvyHe9vEtq",
  "key31": "21sEZEE6pgNGsKUqKpgEe9BeHiTUs2Bj2turmt34DbPsZ281k6PmG1EwSawwtrj1qWyyn9wbgfVrUiZBrG2HhzZg",
  "key32": "3fcCXkuX8DPFjZwWvqwbd6bLKvj9zjnr151gY7fRsUBJc9Aa699dGByFfRxiz2RfH81wCCQubdVsWEMLU2hSm4Lo",
  "key33": "3QVnwXikNvXwU3etF2DsdacSED49BPFTSPaJ93ymacsg8eMKCdFXQrTwGsxihZy1BDiuD6VnKDU9RZZ7fykZSxYW",
  "key34": "2NYVJSHcbnQcG4hatfg2Li2rUyq5nCiiY5FW9Jwce4BMH6LGAYrFzm4t5gDrWKsbnngCJ7zyGZyzGWFHPH6JrYRi",
  "key35": "QRJfoUPr8xzK9dbvuEWeDw2Mr3rV9Js2JCsyvnpjiZSKPEYWaWXXmK9Ajva9QvihcwAZyGk4psAmBojJ3qP73KR",
  "key36": "31d7VQZ1a33rQ4x4uy2HdJT38d2Qf7Q3X2VtYJqoWiXpTNcfJQckRcQrZpxhbMXwo5E8szgNk5eMuZurv6VncehA",
  "key37": "5kZ5NCTDaEVQDBv5jer9YDnv2mo2EX4dJcV2RjA6CmHXa54PHtoYcayZRjoicn82HygfKqegtE8b6izs6NCY2UCN",
  "key38": "HYKeFbCJTjaB3i3GwsTmqUCoZxUsgfmMHnpYV8LP5ig6G9UmhPsRAb4ab1d5fLoQKDSEaFS8VhzQabLrSX3b8zd",
  "key39": "3NggzyyF34cax6ff8Gm2uTpWhAioBtF6kn8Ho5JFeDWk9XYEVcLvhYVHxfPUfzoQ6GB4eGjVePLgJRFsMHwX69ov"
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
