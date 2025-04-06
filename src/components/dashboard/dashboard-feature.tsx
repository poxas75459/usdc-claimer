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
    "2wijdnL7RN1PDYjdmL82tA7RqsbJGPcPsqDWVeVLEuU6FUxN2pMSvtJP4ziBEfJw4wdMELiVR2ekAj7c2xaFLWQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmVM6jgrpDpxntv6YTVMqywCGaPYDQBwQXCfD2jjoff3D6QcFxtJkGa33wDbRteAfjE9ZaY6vYmWenENnFBDh9g",
  "key1": "34sQUX1rHr51Dbhg9eqDbtkAEug1zgkEn3iZGFuVho9LWxRdfjGyo16qgxEB1EoF7WqzGEDBd75vkWM831DGnsSE",
  "key2": "3eyhgrG3xFXriRxvH27QzJtjsNzWCqsRUMxjaNN8yD8mPPv33xZfaPH9qrqYSa3X2nLzJDv77wnpu6DrAyKKXV7X",
  "key3": "vuyQEqmHesnfVXk5a9G1LmNb1WoxbPhvnDvLMekpjpYJFFARf1wFaagk3EpWt4235DTzJc4Yso5RTc6K1UTechN",
  "key4": "d4NrCrWkCfELXYvmAXsrGDa1dsFwXiY3hCi1UZpYnS9EAxt8Cmvwh8EmFx4FFVxa89Ay2DWd3eGLUVfHPDa8kzo",
  "key5": "3qv4PuVVRoDDJhkPqqjKoxUJcDFYEejdgPHVtSF9WRAJPPXw6KpozGd2aNNBtrpxu4jzPgajtddu7esha6YmLFnN",
  "key6": "5px6uHEstr1cy2HS5uKGSHi5rXp98xjWrLtqKLWKnLekgXXZDqtPKKNVNsg9GP4TEyMFqXxCVpR8nZhoaUE6JJXw",
  "key7": "4LLSJ1hors4HGe3gQBj2ZqmRmfHBRbH3u3eJAoKqXHPGqiDtgN28vivmUpHAJt2wgwUbaVMd3PMzMzb2CLKqfZ43",
  "key8": "aRNTVR9Jk4XnFUpG6w93hKP1Ps3cLw6MFvE5HuauqnvhSJKD9icivoXjcTKCuCuom5fE2TSFnJkfEv5Qqf1YnVt",
  "key9": "5RAJ4a1DHaxb7sbNTMu1ms8KwuRYKFmFE56q5d3H8ELFVadH3CKY3ATxm1eKgyem4L4xnwh1xW1HL4AmhEeMwpk7",
  "key10": "3idjCWjzaWeeSK9RW9dvS7AociPpuqtP8vToN1j89FNTDh4jHmjKd36ikWaWf7Nz6yaWQmWAEnVwqp9nzrY15woV",
  "key11": "3v4G7cycVRWrPh3Ra3mot6o41Aha57zaWdtbAtmHTGe1G1A3MotdHfu3f1n9WZdtbpVzY5yPS319S6brmUP4ypdY",
  "key12": "427N8zbCdPf8xm71MMD4GGkqR4KTQmpUJPfe499H349G3PrQCKQkm8w2SfnQFGFRonSU9yYySj9wFqAK9NoWWhYJ",
  "key13": "EnvbM1tPKsXaY5RzPodwnARnY9z5MuHzNULsz12j1M2An1W7BHm8sDuLpmgm8HZYy36uPqMDfwckaUtfGp2rkKf",
  "key14": "5TKLp8nyQ9WmEsuBomxqu1Kf5GE9h2ko1q2QYK6i8gkGC1KnNrdhrkTA6iyeijPxF5CV93TrCWZD7SpsdtqcK9Vp",
  "key15": "JUA3BFPxazB2SagRrSCoEdx4mZP64fXLo2Q2gBbdME1nMfy92321i1V9V8tSjyavhd2jKejhLnnBkgBewsDvnUD",
  "key16": "2TiABDbqj1WwFv9Pv1NqL1bvksW43ofn5sm74NVkAAWjuiQcXAZv2F8frWDKp7WXbtEune4hbS26eB42P5reNwBn",
  "key17": "61tfvZycdc2mbnv8raK56FLJN4dMr3ZtYqwrAaQqU2MVLiXikiiR5Pfom3z8QftLgKosG5RKQUDRnuCJtrJjPUGK",
  "key18": "RW1AdnCDxKvekenJmy29n89nkNac71ytet3pKBUtptgiiyJth8iwH6GxeoAL5azuyLA1boTx8SEcTMZrF7FahAZ",
  "key19": "kAnsPGBWF9Mq7A4GxQeugctPF5wgz3gkFNTePr5gXw1FCpGZGzyph7Ue5y2GjZGC5vs8sZj3PddgoRG4uXUcU9v",
  "key20": "3nAED5X9wUGqomva3dHAqaQ45y3RXjYLja6cQWLzkHbGvRWZfQyu2x7ifTiZzdDaNw2pdipd5jnJQWp7ADDXi5Q1",
  "key21": "5QfWxVTe82ScPJdhChdDPKTYyqoiU1bFL1fhWN4zE23aB8mRPwE5TfV1Pn9Eyi4hafBKHunMaWqE962sWqdhSgLw",
  "key22": "3h5vLhS5fyzquZBB9iqhGGxmuZHhaes2npYrzbQAVoZX7NCDM4roShFbxxG1a42znhya6ZwNG94JdT8kc3UXACG7",
  "key23": "5d1v4pKLB8APjXLPHHkqqhHhbZ5jcDy8hV5szmvqkVwRN6tszaHMNWwtZYWiiWKm4t4cNyLJvyua9VJgNKLZV6Dt",
  "key24": "4Bn2frDYjTsmbvv8Sxopj6PHBGfJ3xyaqYxKzKN2XFp2HpuZLKkN43oHWx5vMGndTGP6AympSpS9nWAqeAtX8zYc",
  "key25": "ivuq2q8VgHtKM4fd9Prc2RNoueNZ28dEdMYxMj2KHqUNhKun2ceNTaAGPRPmbbT1urWFn5WY2t6rhqyqE15TaiV",
  "key26": "T9dvKHacuBhn2xZubRixwwiLu72u4QcSXx6sTHS8idnP6i5U5SGURagLff4SX4yrgfBamUa5Y1i17abuBYWfxHm",
  "key27": "3Cx8pnBJK5BXViKATpW8CxD3XBo6UKTaKv4jCrkbdwQkjnoMad8fNZXA7SSZCY6LmSaiyAePetN9SFbECZJxy88h",
  "key28": "4pg3gW2X7VqPRVEfdmazGREmgmBL1mASvhGgH5cs7cKXeYJnTFZBmzNwV8Z9P72VjVimVMehQzP2AAY59pCyWXvR",
  "key29": "2S8dChYAi4artxqtD91tTCMkQdS29ewiy6di8wJpvgacmg2Qu34u5wRbMA92UKt6cagmtK5jZf68h62GBoazukcY",
  "key30": "2mzfKT9YspzjuH6nF71W6aFqZJDVuh5xg1VGQTb31ACpjkDSDxgo1StvQEzs1tdSg3mqNZ9gen5udshtkSZRNEBT",
  "key31": "4GJYgi3iqCmJue5Uwm3hLuAMnVcBGD4CLUnsjCobEojep6Km8RHsYo794MsPE13q94rv2j3TghTEmMGsSb2xVHbo",
  "key32": "2RCcEHgVyPBBNYbZbT9cZLaXRCb9hhYbWf6imd2xtXBFsjqhdvaxrWzPjv45EW4o3G1yS2wHRGkJYGxvo5H3Rkng",
  "key33": "vjsRXHvW9icNLYSjxfhuiXfMJbrKCPNMYBbfWZrXaJFdibsFywCEmgvmgf1PXUwXQ1BJenBT2qMwRrMQ53pxvEY"
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
