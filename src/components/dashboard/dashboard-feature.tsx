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
    "3VQrr8v2m4r2rmV1MDvEWi3r2bEyGAigxBq9Ryf6N93CWov44VUJyLJnoovHG67rFEZsh2QsMaeSwwMizjESKv51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtEqekW74iSxsDeKNQVX7ZRFqofQAbpD5umEbuwBg5SWgNka4gD1oAHde5wDzRWWFiYE7Po9fTL1yC1VziAir7H",
  "key1": "5E17iT2HmejsJGb92N1snwQHXwB12xkis1ZahLaYxWt1k6UiSJ827jk58oW7SJ8Hc9wuk1BXAyeay5nriKaCgDWe",
  "key2": "4PDf2SoaVS6i683iKV1zbAMt5fFGEKdy5omBJKzmV1acGbtGiKXELU7KqyE5k7Ctvd6BDEpKRciCNDomT1yQegA2",
  "key3": "5UnV7hVV1YnPoebKaPVgBN5F4iF1TVF9JKFmp2bgjy3mWCgtboUZu2a6EfFk23cQkBKMW8yayDT966yi4qCTLp8G",
  "key4": "4i2294tJqdXbmGJW82Pz7WHmnQRma6aREKEARhroMNtKewbptT4twZX69G4kCxopscHCimMGgJeH4uSErCUh22mr",
  "key5": "5PqqyBk1AmL8vNMTQ9ykjL6WjD9kkmXZvn2pBJpreb3HjhNSCHxVUo4HohL7bq9GPReDVPifjhZxSpoRMisPQJDj",
  "key6": "2DMdpzihe7QrnwQHwUgXr3pfM312LRnvfmAdQvLP34S2oDi1YEd9nt4YkLDqjnigKpVtfAGamcuuw5neQU8QjZTQ",
  "key7": "4XYqPNuYXFBo7sYY3GDWffomWnyufnJoQ2c2hi1dMBJnMgdyw79agKVEtU6DJzB8ETjSKLcis9VDGg9cs8BkVw8x",
  "key8": "53BhC2aSXFhUhNC9dtvQNH62prnYggAxKiskitguKyzT2SaHFH6Fry5wMiPWRHVVbmAWnEXV3sow4PSPYDqijfD1",
  "key9": "NUHrevpbz6HB2vuvTFM27rZmbgGKN4dRJwqCWE9se6HGRJ3ft5SrBbhburiAvBr4m5TW9usHfCJXuZ9DS1kogUC",
  "key10": "8PWKK5WJ8JJYEdiGde1VWkbU4bs68WEUFxV3eLvoSrCmgN5E948t5zZ9qbFHk7sUvYcKHaJqgEKUN2LDdXHKMVQ",
  "key11": "2LEeRHyVKVNrtnDnQyxTGJJ2UopfB5Ru1HB3yZgqsQZEkWTmKKC558KS41fssEQTEvkR7Mi1sJUg2z3vBHZoupUM",
  "key12": "2kuBQJzULJQgKDWPDSrtQzGAxyVcTpkgQg8inUKxJKaVrjrZZpEaTrYqY7kxbfWHtoWqZKdT7AccwRLeLPxUyYnh",
  "key13": "5aRLMyWyGfYv77eVcXj6hvLuYi8LZmwsPjmQTHDLa2tMD6eePw9fspxnviKSVCaU5t1htmuvNgMduunJiefYcnG4",
  "key14": "mRfNMwtdbE1dMsKp9NFyEsH4hcrrnv19XL9A7jF97ZD3GUcCwosjcnZtb1UCEaRUY9oooAHcQU38ftUgUnziVp2",
  "key15": "3HVJz8HBJsEVFW5TzGE3DSzcJayasdcEA49bPf7MauwmGfVcHNcun31RNa6iAPPzZognyjks9kmJnKPw3swLQoGS",
  "key16": "P78b3o7s9XWuDyDGMk2Y1ZxpD6CnfpiKz6S3DSK7JgQRvjDKuXtwptVCSzBx6UyyTLx8maboRvJnWEFnGJ2GKMw",
  "key17": "4C7zJSyvqV1URqsy9EANvyJb8fMTg5Jkb8gdQ22mezMhTdQzzmRUUXkGDU2BtUXiwJR7vSMTd6H6qNKsGbnWyG96",
  "key18": "49PiBEMLVjWo3qvVr2n2mAyNUHrmEoG8WcD7FjRmjCVkG3AB6VA7qAFWDkfNQesM2tDNLzU9T1AuidqnGwvs3zXG",
  "key19": "5Ko1fqvH49rw29nqMsycPEwxKTxpcKQGqAvvWtWch3Y3dkJPchZpscQug9Qeu36X2u9dGdcV3TmKT2sbSkyFbwpg",
  "key20": "4Xq6H7FLb5bdpoPQDbyd95jmPTGcbpVi5KDoiGDrmzVeoCQ2gPf6D693Y8Qt1F3X47eBHjjoaGHtAF7jhd1Qezb",
  "key21": "VsG3QV7gw1tYaaq3FGssHszDZ8xX5DMAV2uzC4MKSitkLjyPbQHiRPnzSGVDgHMAWkM8wf7XXhR8NyTnY7xpc73",
  "key22": "4k9rsGykXoXrAnxA3o43ZHT9pBytmojSY5mwpiBgNJp6SneXpTxLFXuC5W6P7YXJNRMrBU6EQM3wub47tVqnkkPZ",
  "key23": "3RYzZ57NHVQmAVLBvDRLn9ze9kwd8y7GdvfTxZ2FoJ3SzCL3jGZBgxL1ei2goJCGJNLo9fqyjRgubPAgQKvj8ttG",
  "key24": "52NnjtHw4TcJHmUiM4KJwZwsvsQtUfFi1MCxbaTAFN1uFBP9GP6Vf2qcgG2gMsykrkkvLuGJ3ru3HrcWaNmhGUQA",
  "key25": "262iLxpS2JxpHGSPNf5ay5wNfvvEsfTaoGnbQvtv4BGkeu3AaQHHxvLCte9awjvmrrnLaYQZLacCpCiEfFBSXX6x",
  "key26": "3o5rxZVUHbDavgQgfwAubV6Mh9t7SZsJDUte2xbQMBWv8LFrVUyTzpUD6ZWCoiQUDspjpXuWnr998otRD7GmNbbb",
  "key27": "5kA2nKCWzv7XugdRepyuzEMjwg8SXjEfXRGWUKbFCepgebhNGrJFv32ejRgJFYCrpA4zegAq9PPZKb5WnMC68mLC",
  "key28": "4mNwwgiJtAwPRj2jMNfWQGGzGrK2Eksh1cBveD1qTbhUZjyzdUvSNCHGUU9zX8K4hrcoPD2f65hebQMDVAAA7m4d",
  "key29": "2RLocAGnor2mf6p1N576KnTvMkSFowUHXp57LJbjvwnSa8m3QA1W1L9boKecQ7Rw58FKcFEdy6WS3S88mHWraLP",
  "key30": "En64bVxhbVEXbq6ongCoNU9ysM1pwFDGxtPnzpHJrYJDrnvjHytM47TppfsSVh4JrTjPc3cr8QsRu4zFNpUF3tH",
  "key31": "2dAA62QdifV5CMrxgwJSAa6PA8mfoBvPXBkFe5wPLRRfum3f2Rf2zZr6DLTUJ7KqHT8AegqrUNdGsCpoXqrwbP6B",
  "key32": "qBeDfz6m14Jj3FakWkrYXmzhrAGc4dPxs1tCew5XS229AzGTK9uRX9RyhTRDVGLNxvkiwNcUhskzCtftArjGgmK",
  "key33": "5Vy4k6fj5QdiDtbxyvbLE8rCtDzzm2rvtmyd9kqpKYw97YfKH9zUXnieQSWzMGX739LbLD7xic1NrDammbyMdJqm",
  "key34": "3YEHPJPeF6CrTxBQoGEMR3g2Qmr3QHSysGNpGRLhTiQWqP6RASb4J3Vbyzqkgsk884AH1EAv5ASpM92nFcgSBc1H",
  "key35": "2xatTSh4gsYQFypHoa2L44yxoEWgJ3Cmut1FLMFcVmWGQStWMEavEAE5r11AA39j8fwqxbnXC2GgaeeubbEL8KkX",
  "key36": "LYEur4kuE9ySVJPB5kDcB8nbPwpk615F9Ng1KYiBd424cNWq5UfZPuhLFQitCVQyw6Wx38ZriTgHRGYuWqKPSfv"
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
