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
    "2D7LGNBKmyHA21BMwqMyA25YCr7xNM93Css1yh9iju8v1DiRGEMsdWfQPCSv8dEJUuVQrmLv2LFQCuTsL3AbEwch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J9MGpyyMzmkdw81zEVZQAPJZ3gDKssaeirnBcoyLvJyxcyqW4R6yNZymY2Wby5TvYSi897NEBPXCT6Y3GoYotCg",
  "key1": "5qtV5b2MzdpxbWvGhSv3pE5bqqTWVpGUfcgmboUZE3iPkysHdBUySDXi7sfKh4cZ3DAwCzf84YE2jZqdTCJKMF3S",
  "key2": "4i5VmMhckGZF8dP2QnkjcXnPCKeggMepfdAjnizpjCYXrvfzECuhiS77wthScDc1Phso2EGE87mfRE5o4mrYT4U5",
  "key3": "4z2HSCronGcVQLCT9pT1UQ4N86F8ns38S5HRrtNEecY2NsQqRCqhDbD9X6XFBTEW5Z16M7QEqWNe6mQikVNNt4Rh",
  "key4": "21ze8JfDLVP5cHsqXGSxDvTmcyBKmMGLoQYviWT2TYKLkFcmStCSkHf2zN5tdK7z6Ad9TeyexvHkxGuRrTAohZ3z",
  "key5": "4R1FjBfE9rkpTZEXuUj3MvcaT6wPqueMfHwug4gSnUArzrLu3GxcNB5UbRKFBTHfLgZehSSAJBPMKhMk5MywxG5F",
  "key6": "v2ViN9zeR3GXrsfSLRDpK8DtBxUycBAjZMbQUrzxWqyhADza4qayG5KRKJyAgeYi2RhcbXbotGm56AkH4Z7MLQm",
  "key7": "2qBaZYuZqpQfxTwWhyLoWVTdRqBoZ8vFeuWgkqwqJTwdGp34fJtDLRUMav4tXVuDG9KJi5AmhNyGdT13TzTsXuLe",
  "key8": "4sanFDhV9sanTL4736PY8KdjV1MUSnaTX9EXi7bRv7kmEnh5s48dcg6JuvFCTjTcPoWPDGQXwCKFg6ojXvCXmWYM",
  "key9": "EWZ8oYnWvy3NWjVEmYtSV9xjv2rBKu5H2Y41hRGAmtpyoPGEwkDK4nWvLCZikoThKUjfX5TuS9ivGwtYxzJpb8L",
  "key10": "2a4vpL8JsvhpHugQUSLFJT6z9FhYpJqWxsRTrDznEi9wF5uXAa5sZfumqq1oH39eFNUvTKMJgqNoWagSR9G6C9Yi",
  "key11": "3FmgM84afFkQT9WUunTv2gWiqZQdoodFVUYycz3BeboJCNQhCAznBGA4UwcEbuQZLpYAebTgmCAzrMWbFR3pt4f4",
  "key12": "Grk4FqgfhV2g54vgfmzspq3ddSPRQiwgrfJ6NahkGvtBwrRUK6rCQbn8tgApY3dPRTHiXwUquXgfRRgHMj78t39",
  "key13": "5zHJRDfe3gwTkyvDvDRAKY13vBafaXT5uzpKoZ9BVuTYA5rWvfLeHqwn8Mt4R3ZA67BZCu7cdB741ExU6BifdkBY",
  "key14": "59GWwJvi8W4ntBGCQadfUNbo6bwdTQL8iPQqKhevAM8kHHPgBSTSVUjXATArrA19XEhUFx6FpXTVFytYgjiBeob9",
  "key15": "45diypqR9QACFdA5tUsDMSftbPF4q4RdW1A15pfu2zExud3qu9J1DhYNFCcUxFGWJnJaH73xBWmeHnYb3BXX3DbX",
  "key16": "2iLkQF7uuTbAEG9qohXYVVR7EFVBfaMc6eyyqTdeBiue14yXtf2XZJEQ7dvXaLyhxrQBHJxooMMvyyWAnB6bYn7s",
  "key17": "RzbeesGAqBXYpjSbAskd6rBZsRUqGjfZfd69eZydpUuQKSfWwZa8FbewbziFoZ1DBXfD1QkF9zdkHPnxSGviwjY",
  "key18": "4pWoqSmsL2uwBmYdzkReyuECcZ8YPGZynvo2Yikg5PJAot2iXdGJQcrGS7WKZroFepC9ncanv89Nk4Fq8teq1Ja5",
  "key19": "4p4v684gEqfQEV1oS29C7iYCB6cHv4pHNqvmPYwUJjmZ8GDX5NHnNF6GfMx4hoLbQ1ecy6j4PdLzjMFVczTP4xQk",
  "key20": "2xAfsqqfDEg2jpYymdxd18shQsRtQBaQ3g2eqMZmULb6VoG1DTJdgLPJVNRhkSN6tAHFEz44s9uAUdgb1YNxxx7U",
  "key21": "4kpPwXsCSn1jjc6gGUm69dRfQymK91kp6Z1G4wHRi5pQvrNuTMELUfkbJd3Gz3YvT4HEG3o1YcWpSrjTYToNrjtW",
  "key22": "2CJ2BYFtS6Jydk9XfN2SZWXwyA6wEkaVc5Q183tJdGv9W33jbUtSKtRYdxsiCBLQtnZsEvdzt8V82KS7fXp1eBHN",
  "key23": "4ostoZcD97qrVDPP8j96XbRWggkr4ns2YMg8kWdh4EvihbmhL1vzx4yFsKFpmRz29DLVqPPfudySQjUFajDDvXeu",
  "key24": "5Enn11F54uwaqGhdUZTnDxyEFaxXNeqbk39GQh6jHrg3geF5Has2UydbcwDiJCjz5sXuiEZbXR59yACMhBUcLqko",
  "key25": "5KvyaPk1G7c97dmBdVVvwCcUYNsHFPxENq8J8BbSTcFZCYBnZPd48n3ZPJQ4uVStFh3ZVQ4wFw24RrTGU2sx16Tp",
  "key26": "36HVCUN8Vn8vb8xo5XQXJhXT4faC64YwbYYpEJWhv4kvdeLiU4wMZFV4cuK4vNLfBVg5VCssy6AbpaVVnFyAPrfT",
  "key27": "5JXJMp1HEhGmjfM5sbzYiPULqzAfSqCa7gMoJyAwkzKjEoL1yyg6LSkWGSJeFaT5xLbCUDBivY9dngWJ8h5ryq4E",
  "key28": "5PN9RWY3f582jG5f7q5nedm8LH2PEHSzt37YMFTYoYj4VWcwurQkueRAAZdUq7BCUp3gApTit7Gu4BWLJshTHSsn",
  "key29": "6147E8tvXg23BJUfhPyHEQoRHNpz1m8jLEcHLzeJAXeXBFNAtTVq5sTYyZbaeEFYd8e44bwHpZu8iJwmaG4rN4VG",
  "key30": "4nh3HrPmGCZDJ6uXT9qg8jjLtL7xZScqAf9bgxDbzTppAndk7cifcbWy49UMmVWgkTx8QnHEFVcBd1nbPiFicziF",
  "key31": "5z5munB5xFDcdVWEnRMzevDmEioBW6BEE6z7eDkWTLm8sjqxWRQzaEbtCvVgQLune1VryX7837zawQtMyNC9UJHW",
  "key32": "sFpzHTnbhDCheJLVAnRHFP2wSc6J96n6Y48ZexeEKLhbRLfJxqhaGaSozn6xTUez4EsY6XYtkc2YAYZ9PrQa3Xd",
  "key33": "2W6PoXp5QTJx2Md77Yp8vAoNySTFxhckdohya2TR9tBJyaHDWjE8qUUSqiCTAS7nF1EKJhZcT9rPT8mjbwo4mGJr"
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
