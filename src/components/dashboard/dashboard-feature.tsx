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
    "3x4hbwz5Ar22ri5LBpw4ucHzFHrCQsNB5PRt49eUYRG5ieHPBYx7s1yvMjFiEy4wro7gbMuBsauYSvNkuyFsytNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyC7h5W8iYEmbr4WrhDMyJwe5j4QtqJXJ2u1yVXAyzdxSewnoz4gwCmGSxewZ4EghGV8XRKjMaPhxAUQfFkrRcr",
  "key1": "2GAQz5xe3kuoPR9RGpnFVxnHRyM6Fgt6WvBRmaR3FnJXSyxzdaVgV2BzgWapVxJL9wkfb67QEXJhF8uh963HgGx5",
  "key2": "BwiFrvNM7VxqVsGivQZ3Xgw8xJ6Zrwi2ccYtt87uYtYJdyTs1WyNNw852fPdAiDSRE8U3JSvRP9nxU5NinoYPYj",
  "key3": "4mFaxjRvZRfph3UFSGcUYDaoD9jGCNzQC4HEuqXsGc2t1CqEBEN6HYXgCLRNZidxRPEZE7AgqwL1aE2tWWMA21F8",
  "key4": "3i2rewL37hN8YZJqd8WB6vn4GpUCTh2ZAXXezS77fTh83Zazq6RYjzQM7AotWmQtL9CEsarvppHGonCoFFzY8GV4",
  "key5": "5EFvVbQ5QFCfEeVavPz2nECfkdVM6FyQzN3SCWuvyRqHm9YaWP8CdZcy6bZWXCQuuGKFjBcdMcFvKY4kWzYBoiQb",
  "key6": "nmZ64vd3eA1AUGXr41q8yo77F5b4RGeSAreA1CtRDTSXhtmC7vc1EfF5kQTBcxK226AfAgUGMMZ5wRTuxmHktEe",
  "key7": "TaprBo4EmRQYvV2XSrmyeMKW7imz5gd3YjRA4E6WNcoAZYRzLheRoeWzLtjJq5vbAxm2eMS6uUF5Uq4Rj96Ks9u",
  "key8": "53gUTxUR6pkATT5uuqGaHEHWtct1D4txgzHKC8b2zF11sYgffPRTLTZyjgGgVJCb89YvnBRGfvegSwRVx4hYFJmk",
  "key9": "59btMkJ19SZbiYZ5o2DhdVx6LWw8Xbnw78rMmtDNZsW6XE4vnLeEPpbepkx5sSMcuNwZsQJM64t8jQvzHXU94vwX",
  "key10": "5b5Fn71xfYeESEjQqumgZeeMJ7uuMoM6Hudvv7kCr4ssEz9vYu4tEWzoNNA4v4YNq41iuZ6gusu4UcU5vWNTAS1t",
  "key11": "4DVm7yWJo6zeXGxfYZpgF3rzeWbMDtsZvudQxuT5rC3raQDQvvJEEnjZcDdbQeBjtbuQX6SWvsUagZ49fXfT7nNc",
  "key12": "31ZuDojyTY57KK7iLxpas95zJgyJG6UwtDn4qGuW48122fEdsHircFeCC4V85F2pWw6J8rKoNvAb4Q5VbVP6FuTu",
  "key13": "4FaPrxWvjFPhpN2Dar4ET2Bx3rTTL8H453BcBzyf6QwmewSWouvqrq5Vi6rxEBfiHUC5We9TMmMeqHnjVphQNBeX",
  "key14": "4N1sPhZk99BdfpCAunW5P3KbkTvw7BnRv3iKCHrDkoKiTm3f6PTkw1HhefpVLCqKCBVGkRCTKXxoof2pCv2Y8uTf",
  "key15": "377FWJvscyvauwq1z3oR4EKLFBh2aD37bhRbRsXq6zTmzs6qKYFr4Es1SekwwT76moH7ozmVPREZFtRWq4Ybunq2",
  "key16": "3pFhLhsi1ZGxCV6g7QZ3ZqNFvar2nHo5BCziVfHFkUGZLxLQdGvyCpkVmgGs1hRiiQgoyVEEyS4yyJY1adQEkEsV",
  "key17": "3H3sgAnqZYFDjveQnjWEyiXUj8aWCaEmqkCqvw4y3bDZqk6u33LrvD87zNJRWw27ZYtrjTJY4FBb4diiLPKh5uok",
  "key18": "5sRAJaQSE1puSQSnpQgoEES5aEATVJXGeuKRKAYxV8CTc7L2WfK1MLnCVGqRgWU44Pc6U93hKTB6Uo7hyJXJTCyd",
  "key19": "4eR183Ue1F8mpagq4CqmEVyvm8ToFdc1XEX9FSHepVdSeVhWQKXL7e6NfPj231qYenbYNmDit7QkagPifVhWN8Ng",
  "key20": "36VKkhtRtxLGyEm8zLZ428s7Sq5b1qTSDbXMkZLrSfB3ac2piWM9fiqdfQWS4khK1jwkUVLwaw6UXRyA2be1rJvx",
  "key21": "dMa3GojmzuwX2Z8U7U5P6N1w4ttnJMuUk2NZVVba9E2KmHZoQVDLXeXLXvyPdn62MkZxJmrQV1cyKEHg21VTVid",
  "key22": "2n7DrD6zwt29JDFfhSq38N7zxPXhunLujMu6F9wbXA6Y6jA8w1pJkCDuSV3VFiB87eZEcaAaY2wxpSkQQLHFCpwb",
  "key23": "4ns2tHhCVLpGofP3n44fGXiyM5ut4FhFDE8kwSpp7Km7qCPKkDXkPkHLxPzLgheJnEZrd3VRRmsqXYheN6p2mj7r",
  "key24": "3McXQa8GTmuqtD35UNnSMxbWtTydZTVTUHVq8DzBZQBDpMZRqfCbUeMpfa1Kk2Cau1uoeY9YXsU62rGTMnTfx9mb",
  "key25": "3naiyJQ261VvvGhpLuooL2BWezyohgWbWssQNdZ7XSH5yujSWeer2uAdfN9kTNT1wewSjd2rJuvxVmSVKYjCeQff",
  "key26": "5dDBNG8jw959XTyZNDRAqHGRzTmFBEpNYHG3CsM2AswnRsPucB6V83WXURe4mvN4Y1pnCX5iya9XuyWdExQBh6eU",
  "key27": "5fxry2aJSiL8tS31JRipzrDHXe6Njic7V7ZqTYuL1N5q2qJfAtTms3PZZdSna7X9k1es3kJRFeNqRz4KjCqtSLMi",
  "key28": "3BDU3inhAz3pEQsMG1thaBY3gTvt5TU66zbx5jDFRezYJKVp2gHGQtumxcUfPhJsQLXugCNTKX144m4eCJmdGRH8",
  "key29": "3nH6yfRUPo1Ty3aAL7C7N2gfcY1MddbUaXjEfgj8QuL7dnnhk3UFFNGs3n5MzbtBBi4Rsk3V5aAHs9fS6MrqQxE6",
  "key30": "3NR5B32zEZGEjzsmZdLdUPE5a7tV4ByohxNNfcvHtiEaxh9NrztvSNAYanhwe1LtGeUYCppb7mN6Y7mRh32u6nKr",
  "key31": "4D3U32AMyxKWGgUZoTMMgCqW9BcMVncNj8VcuVH28hCjoCFyA3b4s12UFDydVuz4cMFPsVd1YCs39fDaxUfNNMAK",
  "key32": "3n8BgdsAwfTYG6yfe3ucrVY2vwBmBUBHjmvA6QcLzAcsQQq695uPeJZiEwPhVJLzFXzNFR9VkkS7WvLVrd42gL16",
  "key33": "2W4jpNo4b71AkVuH5GkL6DHeCnSseXTX3i4qK8enpR21R1cKK6drSFV8yfsYbnFZFejos7vYcCwWCNKJJZsPbzzX",
  "key34": "2KRpqERLpRUXUxg7ErFYLMxFbrJahn4tuacbXLvwVPJFyCsbDe2wSdmSGKpuAhTMwLseQaukupdFGbVdWL6UoH31",
  "key35": "ombph2qx24htygvTqN4yfjJk7VEdch1g9TWhC7T6Fo9caf4jtWq5iX2pqVp1SbAL6diKqUF7EFRGZPbyxbJxMka",
  "key36": "4Rw6BUD8bW6q7yK9QCXYTawo21hQxE8pvWVdgUkpfmVwB9oJey5SpjncPL54PtRHoHGELpNLHcnq8bDUgE4ksArQ",
  "key37": "3FkmCCFWVZ1pQHUhLY2cxFqsm1cj3838bc24Drk7dqPhvc8YSBzHUc3vgVAJetnjaHz9WM2RYmcca7zAfA2NR8vf",
  "key38": "4qH4Cp6KW9mKKokYqeP1sknUZGKorJ89cGirXtarZ1SBSwuPaYGG5gQuW4R2vrvMCXDBScWBhzukPxJyWTMX5UKw",
  "key39": "2ZGoNZtgzd1vm32hrQzfzyVxzEARN9AzK4XRNSFhrq395w1TyEoKBS7LAARS4PFiKLLM7wECagBoLXAgfkVMQv9",
  "key40": "4MQtxThJqT4VyH3EQPaQc62nRbv4h7X61vCzeN3gWqa9XpZkaskJGT4em2n5wybtjrz1mNsgARbWvRccPb2sWnVq",
  "key41": "641UpSNuwMRJRusg36ED96NjjJXdvWvyK9fzkVuUdb5hWPWYvRJ8baRv7XZzyWDKduUQmFqoEeTYuTpDPUZVoREJ",
  "key42": "1sSiiAyr9WDvMXqt3aAUgLsYNAqoJDRJNS2w74dvts2r12XTVRP13ynJ3UgquCfPU5zWbdRadyZSKz2HZnuPD5q"
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
