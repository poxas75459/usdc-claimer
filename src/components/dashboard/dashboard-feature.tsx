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
    "5x8owPxdkut1rsV9y5HsPsLuSTsH3pS4YNPCy1o2t86i2yVGgZ8hpzQusYZQX9aYkNWqACcYywx1UF18fgpHA1pU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v84hGdm1QD342pdSD1YZN5mX8ZUJZeYKFeHqi3tdS4x2p6viGBLo58nrNXq7mahYtpkjTFRCPzdzJNsAeC3UT6c",
  "key1": "3LeLYyTgUnpGAjdsJuP9DJWhT1vgdiDZdh3cQWHR1uByCqonF2JK99enFFw3TRf8SfV9qk2dJApaFUisYesj9usy",
  "key2": "2oTdXwwHSdfRsBSCvFXPbugmwNADRrZquS4KCu4QHysteKt9MeGXpG4fjDFuC9U5oeaGMjHWsu24rzVN1kU8FzJ7",
  "key3": "5HF7bXuoxnDtnVX1oqg2buYTsoh2yMVcaSGQyScDyC95U1EhmCybdHzoMNTLHGy1U5qbGaesJJu2rkWR4N8Vk5f5",
  "key4": "37XSHUHiCQC4Kk1rpdmCLwZQ637NW5hTzzi7i4AcKJyKGCm7SNUx7vWPPxHGPYEQ9Sytjf5JNi6QHAznaDbSWGHb",
  "key5": "9G7TcXdpsmzrRJ5eLgJyzGZg2pWEiyjmodCgt29Awu654eiJcgQffjWiKA4Vc7Mt75FFB7epcYwoQAPxXKA66E6",
  "key6": "fAwqk18e8ujFwegCtvUHaZAF4VSSb2tYgEaaSuDK2AQNdFYP7Ps5i2WcbVsgkpJW4PLvq7og3ebJu4K3dN5Hjru",
  "key7": "3f2vfGFzM2HLz2zzFNGKPLLt5zuPZF7WV5tUHHx4UqejE6GgRco9UC2C7hj8g26LAWvUQ8m2Ezid2x12NkRc6Ycj",
  "key8": "5EKeBYbM88LGqPHMLBDTTDbi6ciqt2FnQpxMiCY9oDbyGACGk34ovoGGzfpoef6oXd2Fh1UG6e9bBxnFtJtaufXH",
  "key9": "3xaRwegXZDkFVAv64jTgcXYFLkXKMfVorwjZ2WL3QhUFSBdj6T78sKEgAnSGhNranXotPirxDGFAYGwDfN68GKZT",
  "key10": "f5C2pPJk5UDYfxneyFCmFUNfSKPEHeZujXAUMSWw3aRD2GRQi387W9qrKhb3wznHTstp7gTsp5GjfnwUvrN6Rqu",
  "key11": "5X39kRgskFomKjbnfhqnMgQ9tFwbnCLRRGu1RDWi6ySJED83Zm7ewfGLj7Ype1br5GGUWv9YBgRMgFLZR5UuB6Si",
  "key12": "Lb7MynvcHJSSpBmHCCLsS9YWQmzUtgkanUmmCuYJh1aoQLc13cUoph7vjsimtt1Mtzsi9ZVCtGMsLU51bkpPQsw",
  "key13": "38z5U1SyfVSPbVLeVknRcrFiUhNNM5KLXipiEDJ92v7vptcj1qiPJ1hGvSuVEUTHUvrdDHZ4u28cvZmRe5pkEAqN",
  "key14": "3F8EBXGmpBtPdJ9YDCAPyqBHPWJttDciLcSfD9mexsguomM47Xy2qUkxqJAYB3CvHoTjU6iSePwYAkaPYUs8Lb12",
  "key15": "3CVA4jAfvgexGHKDYXXyeAcySkrhcEB8zTasGaRC9K2azzoVQ3zv2U4bDn338WZyRgGTmPSodtQX2rYjZXAvZoTV",
  "key16": "67bpWk85mjRP1PoiskEuddLwmqqYfZSxFHwQyvuxhhYToz5WkesqF9Zyn1oYZ6d1cJBWtSMe5WiBD5USDiMcrNvh",
  "key17": "3WtEskULZ3AHfKCeruoefE4M1i6YG6zYnyhSafjCU9tecQPbLkgbLChbPv1HwMR4oxrEoDq6TUbpT8xLTFsvmELv",
  "key18": "63Q3Wd6rkeNrWjnHkeWRgt1TEQdVtC9xhAzgey8qPMP47zR3YJqeNL58gNFYrieyAHAmaqciVrR88bXdPKeXv5oy",
  "key19": "5CtgYLnptGhmZosubK6ooxLV8FVNnLqfUij1AHfKHioqsLX8ChoZ6Z88h6UK5VKHouYUeSs1aeD5c6Uc5twLZZhQ",
  "key20": "2et8amtcUbHHSQoF7UtRMZdm2gViiiBb1fTAcvpjFfYAWmoawpYfD1Xz9PfBr4kyYkpRPhzzVE3rYBy7p5JyoFdf",
  "key21": "5RYYhS26gcNoPeagwjCpu3qZCRUYBgKWBvPE7QYj3ZfyhoC4AFktETFRniWULnCQSCwE14C6hWXjsrvgZZwyuJPz",
  "key22": "4oTCNmh37Lz8Mzju1X2joQQ3Q9tHbDGfHPhmNDGK8sGgUqEVWX9LdPypcdsyS7HsGreqQgf7EgDjL9cihJP6caKJ",
  "key23": "62sFBTdS6ngJY4N4kcEvnpbHvsT4SDhoeCnv7nyZ6M5t747mwsKSGFUCQroRVFjCNKER8q2Af4qoF8JpybWnk9iD",
  "key24": "2PYBpDEFyYNyb8fiZnqJLSjoL3LSu5XDmZj3GzWS4Pxi1NE3tA8Lxcvzv54sJSHNYAJMreggh6ZzXyMEYXKAfQZc",
  "key25": "4gqXBLowu6gPQqqXjWvmquCAV8jhrmBpjptq2gXDJKUDqVimJVNgjyd5hy511YGXdovnVeoj2XofghX81EZbBbcm",
  "key26": "5V5iKTvXmRUnWFYVF188USuG9xFvZuDxpHVRB18DXBh1N8ZC5t4kj14y1LjXxFP9BNts7arfdS6hyMxHD98AHwnS",
  "key27": "4CwV4Mm26yPpN5Pz5h4VB2BNKH7ELGn9naj8euymVxyERp2i11QMJpMoadwjpNdxQjW42VgpzMmSzqgKVHxpJEza",
  "key28": "2B97SLeDr7MtKeT1pMMYHbtnEEbkiWLg1jkafA2LYeSyrHXzBfhzNyUEzDtu9w7HgzDZ7ianSGGxp7TV1fbcoRzm",
  "key29": "3rMfmZZdugdWzf2jXXzqDLwkE39fLkkteDcLQv1NCYyYJy9EnkRK6m3j8rjRFCpEcHAPM5mwkPyd2weDbYrTGeBH",
  "key30": "5NWckLx23imxCFMubQ49jwtEdJwNPufTCWMUWbTg6JSg73QPh5zsu5wkA1QgXxv9PKTPo3ps2insrxGFHxGerv4Y",
  "key31": "2Rgz83JCgeTMT1RmTLsQyZ7Q9z6vdR7EL1SCsATc79hmpqEsVapavAxRvhe6Wb4ciB12PSaqYyqgx14yigksd3BZ",
  "key32": "3NP2phepgEmSJCw1qdCwJ7te1bFQhDkkRJ3zTnacrGQKFkBLfYKVTLSXqgTvWDXeFSm2XotEtJbtVgr8U2hZfQiW",
  "key33": "3gKcqho2EAZc6dHB5QqdqjyzubV2n6XmpTKcRnvWRcGJQMVvCSAN9G4ZsjkHLtnpyXp5rQqGjSFEvxPfoF9VVdga"
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
