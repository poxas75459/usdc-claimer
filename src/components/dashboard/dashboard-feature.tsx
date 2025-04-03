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
    "md1Bf49dyRmNke1GUSqgvK5PwJuWJNbDLpitUjyUvbw9vikb7Xwq8jsA7r8fWceg2BwJ85xB4hWsGbD6B8GwkXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57am2TLiZiwNM22pegP76mFrR5LWsJJXA7sR1WEXAzx2n7Ktm9YCp25iTrvMcgbDiLAP5GJph99ciZiRi7mnKwEd",
  "key1": "7eqEGtG9HrQUqR77WMDntNxA9daZFgHYuwNj6Q9APzPzVPYEXBKceHW3EVxuwhrgeyZ4ffRRQJ1TyShfXkq2uGB",
  "key2": "2btkzgxky1twLrXqhQyvgftn7Xr3ZXBrkXPcNt9uqtcyom7mvVcqmgXhhjLjE4QPT9p2A99b1uEamAECkoK5fCQP",
  "key3": "5pSp1g1hCjsGv8zWxrFa4tapZJSMPLnky2Tx1uxpFKxpbD4pf1meYWPFadchVHP7RsrB1Xofw2gqe6nvuskE1WHf",
  "key4": "2nR2XVy9RXoRf58zWG4m6qNYxVQdmqX3U3LFrTVXCYFJxyUkScKEYDcRbZUv8dKu7PA7wU2WV95ePMGTjwuKCupy",
  "key5": "3k79SUZTiTqphvqsPXDPBomUhKXSqAHXJw8vpnqiDZb22v1Q9ePGKEeMtkbukad2SKMDdHSdVEdi4BMh1QvSuhLR",
  "key6": "2BRcsr6Xt1NrD93SQPnB6c5iv1NcmmRJ485YTmbUZBF6qusmEQXcUzRMmb8WFTTw9ppmG586mJcwCkyWrCmXMKvA",
  "key7": "TvRgRq5pnTowVSJMBM7tsWz37QGwR39umTa2peVefF6id1gAEv9FCjj8ex6R2dYTi1ELhKF3EntwqEWeJTdZN6d",
  "key8": "peQhH11jCVmE15YfRvHkM1svWGoc1oisJ5FTfUctrH8UCZ8JvkhtJWqxzrKVs8WURRkbCG8MBxSv1n1QqvX7zdD",
  "key9": "3xojK3WwRnXWoTkT3kzSBdUQkKf5yz5riCNe1VcuPPC1cN5BYxrbDeyhRz3ML7vRim7pkhRnAdW3waE2RKddXnYa",
  "key10": "2VAKYH8nfunSd9RGocsxACBVwy3Uf8vNJJHWtY24CQMw7peFhGzhMvi9eCXF3tovfcDwcPTQpn6LvDdpD9hB5reF",
  "key11": "4T23nFwzSzdZCRbz9kxMFmeNPY6j3Me8L5JKXRzMCamrCDGtTk7ED3gxLRYrCPDyq2EAhtmTfsEQ5i9xyk7b1mDJ",
  "key12": "3JRfPDbgkVuSKBEPgz4ahSPPMBxYxQ9cG2pQvFtmTPZRpuFe36a5UFaDakpnjjeXZaQWUYrPJCR88rgAYgFYP5Te",
  "key13": "3gbNTkSfaEcz8JHy6V3nrmNGcsPbSrZaS9msa6rhrZ96GqTu16295uiNJr4ZwKDyqygb2cMDUo76EkfbLDp6tn5t",
  "key14": "UtdLnRyWjkLXN1L7szSHf3KKSmQaQBzBvdnBwNhwjgharSJsUt55PUyv3LsT8r9ZNkmAWGuMcdQbL8woguG6ooj",
  "key15": "28xiDSVpWz4PnmtrErG4xEGBq3iiW5gUtJT6Xu7KAYMMMC6dHfp5u1At5uK7UGSJSLGkEifTEQkpRbE7gTfUNE93",
  "key16": "3Ehja5iDxqp7sy85CTS3zHYbSsfqjiqdwu6X2TigZeV2LGXcwHYTvFnVYNQUefw6R1WwYcp1F4A4WMfasc1hVeqS",
  "key17": "Rv2XkgnfQrLY9d6uHkoHCGsbGW86FpSgiQFefkbF1Vi1BDAGdsHZej45UrzQ911aWRCyCE12xWTM4xBbjveC2jL",
  "key18": "52Aa2FQQiXjGVncrxMFXs2NFd8i1BZsHiwNAzi6NYyQzHkHxaSrNfYmFRqq4PWHxjSi1ujZqtTLzJdvZqN11Lbw5",
  "key19": "4LY6Hg4LYNpRQZDs23Y7vtXhnxpr8e6mUs9FcVN8spbppWg44NLBsbGtp4w9dVesDw9ChgJNk48X6Xh3Cemg9Qro",
  "key20": "2P7NdmE3JAP98u2MciS4CovFmuvMozLLwRyEhtpQ4LQhwuYpVGBtTx7NQQvkTktfoBQdnKMa86nfsVcK3JMWRWYY",
  "key21": "5GNMA76qsRmndTGxfbPRPepthPWF1fnNij5oRJzDVK7wEwoQBseXE29XSH46aduu5jYtpSa8m4BQasqgAdN6NJea",
  "key22": "PZCDdV1CGD7sV3tHTxHzmcEDvDEPKGo4NgEnGGPQ7bQF7VL4XDgoPHa6HEy5hZphtf2xS1NUWDN12j13jEhkueU",
  "key23": "4Jjr8niztv5GShAJPJHgexugZPvpDSUfPjwSWAqaCQfiWC5MnfJ4btssy2co2AjMF8BXCFovRpb84f54LF1o22fb",
  "key24": "5YhDBTzhHuE1VLFWCQNAcY8uzsaFUv8X4W94sMgvoTYcGtWKZjgZWyNMBZbZ6UJxLF1MRscMAbrijd9CUSXB72We",
  "key25": "5dzyKcozork31VHVdAnNDsrPrQaNnfsyvpzPAtzvyRWn3ERkXhm1Wxcw3myx4rZp7yFuXC11QVvXEBaxa6xsGe1M",
  "key26": "f5QVwqhaywTqq5BMYRd1zzuATGCmHNyK3rtGCuHHSqKMDcEYnGD3PL3LebcABhu45EQwC5meSV297wJKrDPAF3y",
  "key27": "4FiVD9Hi8HS4cWXvtpj7oaxiVLthqSTf5C3qf6jFTQrkc64DDCCixUCruHou6Uxtd7o9Ww3WYtGAC7ayRRf4Ytbh",
  "key28": "3tauRAJX4WeZaDo6Wd6Gi31ZXWjBpjS94T9oFV26XAZp1JubEaWdL7ReNWbTmGZuvantj8h5Naj1Xy5AUu2w3pF2",
  "key29": "5pergKqhhYTcicBt5BDVZC4pXTKf3ZWcpS9uKDTbAphCL8AAixniTpcsoNZs5yg7JZ1g8QmDFbD37po8CkFBxrcg",
  "key30": "xT9PsJEcUPsehokCxxz2mURsSFk9eVs2oT98UaXuSjkTV3c9qeisKBFfhQuKSw4GKX4httHDCQhKyixVK1J7UBX",
  "key31": "4BSC66zUStJg6yiKi8s1b3S5bUTa8LmiKfVmM4xQ9RiWX9EKrqbzkMejQQoGCfGzE6nVSWySieMYUzU3MsiULPjK",
  "key32": "ZpBhkedtJkQHNbtszC7qsTjk5hip31LWRwBxz9VpEptNR6QXLDp3dQDx4D6mm1r1jfqi2b1rgFSCsLoVewGvLDp",
  "key33": "5brzkcRovQUs8y8Y18bQ3ppTnuNNZ9czRxjVPs8ARvDsE2L1ZZ58816A27931edSs6d7avRdmP2hkL2GLdtU9rBt",
  "key34": "3zMQLtbFoB6B1C9viyJd524viLvdnxG7WHwefNn4WhDjDKf4RHGK5F3Dsqnn7Ce6SsWqthgyF5g2sFeNBvNuMp8U",
  "key35": "be2Ax3L77WgUjHYSXzEfZ2nqe62nYVJ9ZkmES792Q9E8LmhXr6Gau31CvTnXP7UDCcGo7mGna1b5qrfX7PMebqX",
  "key36": "4ae7Dh2ct89RWvh5qRTJBwgXVtzWHohXQCUNgVRH3oCRsxuMmoVUf2bRrboVP56c5jXxz7EPmHvShGVrxqgwXYVs",
  "key37": "5eBirikKwGasMNFevvtvvCFwMHf7rtj7K9tFnUxcgcvaBZARt57y74LkBktxfWaY95G3anWxSVyDwvL7UCRnbbyp",
  "key38": "5bEHAckh3DNVVT5oKxHgYcmsFbhHE5j3hYSVaUid4FJPUKB6wkxtcppvf9mjXzct9pVre4obYE8ktEVUCbvcpJM5",
  "key39": "5QUyNLB9dNw2DzGswciYUVNtbhky33yao8V8kAVenTBap8cMDRJ9CdEonJizJEZQEupkJpoehR8xR2yVrk2xGhU1",
  "key40": "5ABEkhXbMpNNZWrnunw9SUPHafmNUzno9KFaMfiEyj1fiCd3HXCgzcR8WJ1rjicCvAgjhteJt9C4iLZpHnU62do1",
  "key41": "5ngeCZWg43aVBurKE9gBMLjRuRhLeaB1UrdKMvrBoD4UzuioSTPDy7eoUbKv1ipSKuT2UCYuKKGQH7YfuBXtMt6P",
  "key42": "2YuUUK9iaMeaaaoR7gVcn4SF28F6VT97YQdNEWhmgjtxS4io6T4GQ7Lb4KkxXhrnLv65kjDnhX5vMKW7z7iJfuL3",
  "key43": "5tt1RzHgQ5f8PDfed3kzAFt9EeeXPUsMQBNPWp9xdDQTge5SNXk9Wp8UNLB2NeDEZ4jdRTQYxrLzKLLCPgR99krk",
  "key44": "5wDd5uzu31GA4WLnysWrrFwLcAqqyZanCo1WFCt5HEzv65fac5LGnfJaf6mRvoXQYhLu2UechwSPDViteTHxdjBF",
  "key45": "239bw5U1apd1JqJKnvz5PffWwFCnsy8ZSccbWRYArxPUkgoDLcjxtRg1FMYiYFDHHh2EE5EE4TDR2GqDzF2kdyQ1",
  "key46": "yv7pb2gY2Hw49N3SGj8tVg4ZoQ4NW9EnKPqqmQJvjbNQ81HcT4Mz4iv9qVXKPD2dgsZ1u8254ihVhMqQGPx5kro",
  "key47": "5CG9uDMhk9UoRsrBwspRXSMvTqHzVHLfSLiQbXnLZXvPr78KqzGhxuKgmE8wh3xLoUM5v6pdCEevMp6UfybAxasw"
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
