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
    "3GUjNk3ktFewHELiiWuki8XDTqFTQfCpyoCpoxa4bqjJMES5QbjCBik6zN3PqT4okJekdXii4ZDWHVja4YrSZxiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UYPEzcoCwtV8umSMPkZZ1SvVcAPdvuNfrKincamTZp6Mi5hWaC1eUcezw1TmGuZgrhaPsVthjAqtXzYeNYWZkY",
  "key1": "4nsLnTtcEEjiVFXn3LWKoV53gpdjHoM1evuknjwiv2CxnYdA9edkqAf1RRg2SaaURb2FvBAMt8jyfoiP3Sx6yDdE",
  "key2": "SPyA2nwqP751bdJNpkobTFv9JMdBaJ1hKyQEK1zkcogXczUETGQiFBRmFH3FFJ6h32GfYVEDbjMhzrGxDDu9JJ3",
  "key3": "2Ax8ByKDyCWHwZLEFZJ1DE3BoQ6qbQmvr8Mjy8wPNcmUBnShYczrVVQAG2j5tYJ7ko8RgCxxWSJuToF5ZGbuTfWJ",
  "key4": "2sfZFkWmU7VBL23jvWmoCi3JJRS7gka6UTsWPnaQWojMHseuZ9rL3x3cNUeKBoYtSGJSAaVC5Uk98hc4yiNUSTiM",
  "key5": "2LRjMr8MDURZf6VQmBEAivEHebMUPt6EHtVi1tpmb94BcC5ZcW2hPvmzc1XtyL2yrKzr4XYMzjuZTyz314rJuUaa",
  "key6": "3fvcjDDgUH96ddZY8NwXSjkSpF7dgxRv8ZPMyvq88xpMEBrwV5T97RnkUbvT14cLHECH8BVNgoQ2Na27YJkrqyRJ",
  "key7": "34nUQ2pV194hUPhey3zgqabbKwKB6cpcnkrTEFiMMba8q2MSascUnwwqdyDiDRjfd3KqbjjBKM4tqxiyVMr3qvuj",
  "key8": "4fht4fQmX8RQ3bkDECYg6QLo9KmFRvWDMn8jtdUfvrY3XgwnYjgPCL5RcxKwKnuzxvueTU8SpoSomFGeeyuYQ88F",
  "key9": "tX3iVmsUByoZBmmgSRHNybcBBb4vhk91XLK7dxJbNBiGn99vn5FShRshHwCuSwBjvRRBgfVvsCYdjWbN2Ki9dQG",
  "key10": "kUnZfZGAjX6puAPti3payBCCU4XgsBLcaCsxd1Gn8Gdw2vkXFGGf5X3EgjtSwnvjC1wGTJwghuVNUZPUriQak7S",
  "key11": "56epErDJ5PMFJDgmP2Vf61mi34BQgSEhatMNJ3RGzxcYDeadeY39u4pnuRwdAniPLgQu4FCRrZ6StoK3PNkQL3Uk",
  "key12": "2GmdA59ySia4j1wUwQpKHsXegW79nryPxC3PRc1kjPNghFDmfUdFKnErxXGYiydt3BR3PU9u8aXWEo2Vcy1Usvfp",
  "key13": "KiCyMuy44D8Ci89f6MNnLRnwFtnefzNQ4TKxL3VYzgXBupRP9z2KBy1s9mAfkUkZaVyesfYirC3dYZavbyg9BmR",
  "key14": "3Cnc4JVfSeCCG2LdKsJzbXPP3bdZDz7RiYdbPaMccrz5zBKHVbPvSKqMxASJguCEoKj91qTJn3rLNEKpdyJjrUpt",
  "key15": "Ah2DF7oJztpYf5RNd9HwHxvZ8B11s88XK9iJ1EK5MvFn96aZCqGWoAxM5fzcsGxajBMsMVZDC2rXYsCHsTiDbS9",
  "key16": "34LUx7WeZdQU458ux8h6X1hLBJCU8t5CvfdL9rXw1Lt69s6KsxHvi6TX8kCGxonjMLajVb8ZsYdamRovjzYsLsWa",
  "key17": "5SGbXANyuy1V9dBfEz3qnUMGN4oVqDVHYyoeSoHbeG7zZg1hvUzfccsThedRAhoZEnbaJ4eFTHGNYXtbruAs2GcW",
  "key18": "3khyZQWeXiErU2KMEVhrsscKh2JAXkAcMHYuU8xSXEK1BMXQMrQ1ADeXSHvq6R68F1GSWeNEgfftV19jwoq5m9Nj",
  "key19": "n1JZivxJegqHdfViaaEWcMgpPo3Ww5khU25BXVdekqkcfSkSNaqzZARVD8f9aZAinwSMxsesTPq4zppA7sFWv5s",
  "key20": "4zmdbxYyRPyzqnHa12xjrzCcAm7X73Uaa996wBuiLcWs5GeJT7PcM6Y4RmaL9bZZUFzBrrDRo7MchJprXshX6qCj",
  "key21": "UKAQRqjXs6kDD1Kh6CtNZ5sx126ABsoNnQkdvMDsZMxMiEFQNxAv87FC2wRPrHfcHyz7NUknTox8QSkounipsmN",
  "key22": "2REBSxKMrKVe9fV64y7phLR2x8Kr1h7xMpJBV5p3zN8dXva5HLNbFrSvmqVh1sEKHrp8RmksXLKdwzPPHk9TK96s",
  "key23": "5TvwPeamtdPhQpRNrr1r8oZKnbX1FGvVDBczC89fXoZ3T2J8JZsdpSKjvBAwUApptkQhXMkPMdHWeTsYzMBHf54k",
  "key24": "4u9gNtAwF3YdkUDUxrw9CmddgAVLadbGPenZXar5KUKxoes1pui6zcA7ckjG2yS8gm2zcCaZTowhCxZpQ1EsFhPq",
  "key25": "3sirBB5bpEWbYcLnXLmGxk5Br2yUnJKDREqdaaXgvM5buWWRAFTjKNQmw5PJKfexdmvxGm45UCFJUCtSMTrrqQvr",
  "key26": "3SH9x1EBTiVWhLVSE2cxhVw2RjCwz6nwy6YcVvKP6GKuNjJ75skpDSa4Jw3GNDc8zJC75qUMsHbXePt5A99ioSFJ",
  "key27": "eLK21B6b5wuhv9be8fAD5NAxdBuEVs8eFofei3hT16Yw3xUtV38GVP32iod1zhLoe7ky7r21SDxAYm8gCb3cNpE",
  "key28": "4UxE8ifxrTEU7E7ExtdBCBLeyPtihyRceXpTNafceQbzRFMciiGV85SMVT7wdJREv5fnB3u7Mvmu8o5bENVinAKf",
  "key29": "46Aauc3wvNtztFx4LR53qzCB6TfSmJCrVUDcCScpQHKntdVxnXu3dx6KPqpySW3xDHzZpsqjc4z5D99bdUTs8W1w",
  "key30": "59eRWtMyYjxkmFXxMtC4ULsEhnVx3AarXof25L17eBrrhdqJqNszsUzmjUGppbgRkpRCEDuXarzRkHVnDP3yHeEP",
  "key31": "5DhgfB9J8ZK5GZxzHeFJrnhEAMafGRCkaSfCtfUcBBNiGrEGJeVftUFbYoGPBsTqBtJtWWBGqZnuD4JtyAaoCHiv",
  "key32": "3NUPxLDfABpS85BSaqGQnm9qmb1ETg8eMhVEz7R6CPG4hQiwdhqGyDP4VYbG4ySr3Ludqqu6t6JzhrjXjew983za",
  "key33": "4pHJ9cHLjz6RNtG6C2PUBH9uMRsuGiqHTav1FiEP2chftTKGWTbzLJmURVKNs1U8YN4DkfjW2RbjYw3ZfMYZxxzv",
  "key34": "66f2BcwgyjxMyrgEcbNhuN3WpLNjJEg9nSob2eb26rFB3x41wxeUUisD9BGSR2PrfDokJKfcLuXHpmrg5JC6JzAo",
  "key35": "2ndg2KqxUt6bYtdnyBYTcc2rWaHCqhDPwnn7Zqug6FF4eXccr4rcvo2b1rLWCkq7EbDdZQzCqeTG2JkzhfFafeNU",
  "key36": "UihVkgRZBsdRbrJaiiMCqERYQiGeFptLdJzCmJFV8GGAahnhoDi6QpMpvBgkSXRrmT9epEV2NY6oGRr54SFfjEX",
  "key37": "2vMRUjAbcujy33pKARqKnCNZfyGVqGq2oRMt12HEMzM4KygqnSRtiLoGbuSxkxzxPMagMrQBk1sPfNFosGT89jhZ",
  "key38": "LDCxJxsWL8JoNDtut5mvPyXZoHwiv3Akk8ucqWi9fUrVUcAohvYZSu1an2vWj8gA2sJimwT3eYDDL5kSXzB95Lp",
  "key39": "RG3xWdGzjXuHVxb4Nunb4kU2hquw56UWgvoCkKEw7HhRcP6HaxxDbQa9qEx9AbQAMLGy6efAE75cTUgSBAreR7J",
  "key40": "Gi16EAaZ5WboSixgHEUNJt7gEyY73F19uBosofiNejZMLeUBug3Pfv6LCDHaVRatqXrxmCrTXZkUECHdQEgTdjc",
  "key41": "HNCQLpEUPqnU82RsYYTYYZDDraPYxHWwpLAsVVtZoE3ZpaktKm9jeWHLfzYYivXg892uCrPjAH6pV2YxmnYc5mb",
  "key42": "4G4EtLKrSsfceMfCZg2idmD8q6FBAmTBS8ePsj4LD9qj8zQ7pWAtyVBkFXaSS5Z7D5SHRaftvX6n7udNg76c8GKf"
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
