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
    "52itSYVBthA3KT2wgoLjznZQJwGTsC5DqVUAznCaTKn2CtL6Go5Whd1feuaN4fhvB1VGiwcGA6FdFsGSZAK7kcoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBNeTWQY6cmiMEx2Q9mvkNbHB2FirT8RfJSUigekuomokVomaF4v9dntnk6eWycfrHSJAHL6SG5GqQLXhfoSZq4",
  "key1": "3FZHjZQhxvtPubkvMHD7nxcCuAWxaPQ7NUkRhmfeJZm6V5Uuj69Ly8HzTsCzZRHumebzRzwcttAxKbAnAwbw2bag",
  "key2": "YuZRe1GJczqgn8mz3Gvk7YMTBvA7tKe62ycCocVudjXuQFixGyJ45qbgFkAJjaSeJbw4W95eUWdKxEfTXFjeT2C",
  "key3": "cezQt4HcYqzMrLwCrD3V9jcQn1dNce9sTZ5ygJLNAPuSZH6SEcegy9qtTQENCkapG1vLeXxUmX4d6R2DKjDgyUT",
  "key4": "4gVcfJRT375GaDaLoYntWvuWqAtWbkS5Xo4uMohShFaTmT7uuqBYQ6cXmFHjGMWapbFBG1vtJRLAYGVT6vxz55op",
  "key5": "3FEAkKFPpR5hFvzaNN6XiCHSnr9iUHNwmBzEoswFBjAMCjsVwznMWYZNMxaDv9yDqxVkmzeDA7nC2kaftxKWLPT9",
  "key6": "33G5ozYmrtJPHwbrU3WYZHQ32BG4hRzsXorXGiMsCKnVxabSQTs5cfNdWs9GuKVjhhFayREsRSJzuXueEJxhSKR9",
  "key7": "X24dbZ1j7jtW1pWZhHcZqQRsvRepYQozbYFSesLbypZ7tHJjWG9p3GXXoK74W53jbjXrJvXQLfeyffF4mH7bsUe",
  "key8": "2h2vFMWCo5KUX4UWh2FFAmorNQFtyBHz3YaH7gUK6zj7RDmRRJrD3kJVgZg33H8z9PvnsUxm8JMh6ri5SRUw1MSg",
  "key9": "2GEsw5de1ehT1UM8CPuzW1ToXaQLY9cC7P8jRctXoc4hYxMKa359ehEEPcDLqwC69SDHneYkmXfAQCPiU157os88",
  "key10": "1ahF8R9MpyrAvzUzEAZwzM8wYmyshXYdjAdUe2vTFwryw2nTmbW7w9BxhZxqE1YW1mUmQENUnHrsHQcFzrwnx1Y",
  "key11": "3nFDGz1EzEc56TqcJ2djD7sQ224HJ8p7r4saKyLLkyCsnYHdnUfj6BxqyM33pag51pZcWotvNpfXujSQgBSQ1Uct",
  "key12": "2ApkTgmyvsSNE2Q9Cc1JvoyY62SBg8YkEXgH1zNAti4Tjp9UXLXeRgoPLof2kCEz4ukcpA8RTQJr4zrpwDTG1ncX",
  "key13": "2mFAxtHuUjMUeYaj6h7JiomLXnAMovWb8nEXBfVc64mjfjJtfxXzPT2PFwF4rQx9eqxAUsDvF9szTTD6JqeVwo6h",
  "key14": "4huxWoJDPf8vuuAJES6QbSGNZqmH2Xcu5crHQx3ctCd9NncuggbCpMMpVPpK6SZwKfdK7ECYkMg9uZyUiiidNHWG",
  "key15": "rKQqykBNtTsfeM3NKyLVwhN2US1yrgmj9U3P9yyUBpjGYEm41MK5HLSAEpAagjWFCYiW7hkEpfRuCa5nawc9EWC",
  "key16": "3KRoaPoPLTpVwgb81P3VdkJyBmiVw53Sm1csAN4hrNk8C2xz9SG7udGRvYpSHMSAJYpjDoKGdzEFAD5JWhenXp7y",
  "key17": "4UxTRqLtWARvEqds4CxYzT3hkBxeyp71RbbYu45pCE9Us665iqFcnLJzX92bD41PwgE47AcDkxhBr8DvkA1xXycK",
  "key18": "3XQMCbRAv2mMzjz3NCeHpac5KYeAnRHG3Xs3MMCorsvyLyfTgR4UAjRmrNdGc6K3CSPhueVkmjujV4E7gCjuppJ4",
  "key19": "2U8wiDjq8KQfnR3WL1ksoYK5dkCzLHPtRmu2xs1wMzR7Du7PpmSAzLTwSjh7hNQtRXizCWeugWdeZVB7x92sPiVs",
  "key20": "61MyJsESxe9tpQqQ636GdauWgoei2bTu72cSMEdUvhDozXVJi4mi7GGdLqH7rPBr55YPA4DLvrxDwCQe6QLpQPJi",
  "key21": "1i7WaSh9D6FrRYCSTGniVquB53aHzPKzeoZKmKZgRvvZhxMAeBztfTmy5Zat8yt2YseGbXVTcZzvafgvecw3AHJ",
  "key22": "2UK6Wy6QUdHW9L2cvj8iHbXmBd5ucVryz6K2UzR6WtA61qZobyP6bGec8hN78EtEcKYmMzKFNKPJDxUVbxD526ku",
  "key23": "5oDuhVqEXb8f7YFiCXQoi8RPZpWs9wXRuQW9KqjBQGQe8UqixHCHeJmxjVtnxcpp9TBS4JkMiiLnd6fvbTMnqt8t",
  "key24": "46ZSpMriLRDb3UKjDmG3cKZoX9bt47PfFC26xAnrVnuKComSELwEeWNGmGhn7MuXj28VYmEWakNA3QHeU2Gq9omp",
  "key25": "3jRgiaG6SjJcES8Qu3jYTFQHSTBhnS1f9BXKMTqtnArbKvWmvH1kJUsbwAYb7EGZx8u4XrZtmn8xNHfvxiU4FkPV",
  "key26": "7w2VqyGQSwkauwWTGA2uSvN7NBM7LiXag4WtF8dQVdJ95VtCErW6Q3f8X9GnKCGSPDY8fs8rXfvcyQVBejTBmV2",
  "key27": "dozLtvqgNT2BuevuH5pgu8n1fZqWzDM9rmtfgQeijf88eX7gUXE83SE5yyN9yk9VatKTntT2Sz5XLGMT7CEYNBo",
  "key28": "2cFvotNSW6f1ywCDeLRHwmz9RdQLZKk3MFcK84CQwromBRoEPZUPG6qs5sDzTfyBsLxudH8mnASyjzsiXm5LrqNk",
  "key29": "dxTtrRLXz3V86GTSaEWQyC6Q4pW1SQZvz2EJdktEMegUuohF7TGpFS7p8KzQMhJoFzEwMCMwY1dkmbGAJUfqXY7",
  "key30": "5FQrjDspY2XMTCFtM29cuEv5t9XfqAXAHHtsVDtjL6THenbcurcfD6wh6CphNwVLqjQmNS9jcaxRKSncg2xdFMe9",
  "key31": "5579qopW2daRh73MiD3qePM7PTYUxACx5hJRRmjLJQ534ei5hHVRUgKRq1zxFnVgPgMBxVV7sHj27VCxGAdhcGSm",
  "key32": "4qss8ZLVzcVBJnwt9QZE6vX7Z5y1QAAHdjgumHjcm2FHvPy8jqqesUY5nfGTKjq9um8RTHWARGPoBWpFZa27VH7T",
  "key33": "2QeN3DPNnE7fuq3VzweeX7FT1x5T2aP87CwHgDPmBUGzZ2Rj7cSCHborcYFttKLj2dJKxsXZQx11Fe3reDFXTMCv"
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
