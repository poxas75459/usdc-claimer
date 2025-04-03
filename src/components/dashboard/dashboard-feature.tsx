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
    "5H2KArd7VGwuujBbXzmsPDKq2kbPsm4gfmrpizAyEn4dm2TyFKoKbkkfpN5N3jpFyrRxo4Q8re81L3vtuudytqej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2wxt5ykb8dMmvRuhznLs8UcRnLpsWkbW7yGbMkG5vvcQ6fT9u7HVjACbbg8x7t2L9HNG6dXpC13LN4kgZ76svU",
  "key1": "66w2PNz2BYnSZe2FTocq2A8a9vmfgJyRqHCB3ubsHHyHRoXZpxHKNsvegpUgPnF7PWM7adXfXAMFwwvV2JBNsY3M",
  "key2": "5FoTmTFTPmaGSF9Va1WpCyMnQLyeXpe2iMZyues2UoxMTFAaggJGwtctS6hSmcYpi2T5nmcyDsTW8ctSXCyzEEeV",
  "key3": "2hvYAMybcU2jFC9hFxmzy6axGKXQAzBWrWaz2N9cBftFrCveTHXpGoLckEqFv8dt83X8me7fLEASxqDpM2CZXELC",
  "key4": "2GgV8mx8KNnG94LxSat5JqRQFd3zzpi71wotvxETfXKpcQLfaufcAiS1GBhrX1Xt8ViKnKiD8MS8fMVnd1by89W1",
  "key5": "2D21iZ6nyASuom2NzXSRraoJS2CUCd4aKLXSg8W2haq9EhH2K3DUWaxLeGshtsjK33RWg9oX25dMrgfEBMHBQSc3",
  "key6": "5zV8xBEo6MM4Xc7tcha326XEc7nXnjgEBv7uQC7jn7k23jJ3qfhKFUojUhxrrd9mCkPGHPkaKrqgyEXFhhxsZ21Q",
  "key7": "2kBS4iiTbHVoWmoN7wMEdktTPUUQLf8pDzsgW1sGC1nUJY3EPJE9bTZ9VkLu4GBe4JEGSUcVbsJmKJMp4aYwZsV2",
  "key8": "jNPqjnukE839STYcuYQFp5vuTBgtXmpRvLr4Ca4VYjSXkqAZy3ffEztyPK23UktWbRZpEYUtCXgqV66NbiZG3UY",
  "key9": "maHPG63zbkE1cua9QwH8ngUKBHqEJaYj54EhFzhP99oAz77fSLsjiyCoPc3o9SaNc2F3pUpwEo2vt5eKNUeKyWm",
  "key10": "4sYnY95LRnspEA4PPvjSjrmLf7xrvL3eEGmx68Ttf3KT6i6ryQc7Ao32MN97WdAAjTnhpvFtV5B7h7g7GSSk6fBd",
  "key11": "22VVytY4rQXAPfUVjZ1c7n73Un3Mf5jq5dektKVTFZCQN6t6gzFcS92iTQD9CwEkzEdmhaTiZoR5HQuik1KJTgn9",
  "key12": "4CCZ2mbYrYxEk9FmPp5Tm6qbLdrdJBSd8FvYMLDLp2ebP2UXhWYUR4q62G3w6gyCQKKkD6PMYSKH1jriVcWwqaLk",
  "key13": "2r1HNNLNwoAjVp3aTuXnfBdfNR5vvks2MbxFT7wJsV3NxDFf2iDKkyKWh7jcjaPFEUxPkD5n8w7MRxoQcJn55bg7",
  "key14": "5yhzRxSG7hLp2ZAJ1BY6MkJsQ6UimwDCSuVHbXutUg68ynBjxMwbrQWRvysLbmLwiRmNjXXkGJV9wodXMnxScFmG",
  "key15": "4bGWjPH2rek8hxZNzctrsNmtsufpJ4uVmUxrhJVBBQAZCQKGMxW9M1sER4WWmzYMtvhG9HAUEzy1W6N5ANNqhXEm",
  "key16": "4vN5N2THpe9SyZWDGUZq7AYDzqyCwgjdqG89CWxJ8D6vN4RKTkCKskiKK46tVGGfDf9EPYwS5qTvm6pcKqSNC7Eh",
  "key17": "576WucgqCALRMxZADAUnBdEP4VEz7kfKfp32LjwQWwsGhXJcmUdUaJU28LbTMrbZvx4BAB1HrgDSBnTg4kQqiYKd",
  "key18": "436e35CFmVe2yo6tHCYX8BKH5AfhzEoCKrrMen357MyNdNa8a8VheB9rW6XiGygsGtiL7df7ETxy6LPLGXjVgVez",
  "key19": "EuoT5cgFYSccQF4tZQBLnqqpFTGnwLbSaEqjVEVGreSVVNBcLwXSe7pcyUXctY73UCmMYUdKhXiNhTFPtSXaocw",
  "key20": "2DBc4j9jcy1asUoKZDkwHyWFeesDCTpZrwEAWh3xYvQPf5TZvQx6qx6tSXXpRw6y4sWTKerVuZc9BwXE8ayFtqjk",
  "key21": "3KnEin5dzENYriJ7LTjJmksR9FhC2PgRNhD5uGfi7vMQV1fPBLfW6TS7u9XrHzVKtmUNdjE4EyWBzNLrERmBn2KX",
  "key22": "2xQXPvi9bv6gkd6RKTtciT2NTy3a3hBv7Ms8xieYPb21jnn4ozPyVFJj7MejFDEP3TZNvYREDokWfA7GEp8zchNT",
  "key23": "4DhnHfX3QiQvvQKwTHWdbanXgKaDA61Hj1ZaFYvJ1WJLhxdPFeVv5QFoR3NH53amW8tmsvBY89YST2otezWMm4cw",
  "key24": "dQoGnTDEZhaFaukLdhX5SufuokDFMybfyZevteu2DxiFD2hGDGwMbMnNvHkkzd8YNLvHrq8iEsk4ewbv3hPeRqU",
  "key25": "548JZroqcfofGmFgsH4aUbiJ2utidVHtX9Eu8xf5CHhxRebMHu8SgNf8KAw6iQARdQ26acSzihCw9SLrrqN7ovNS",
  "key26": "2Afnniabq2zc7ePuNeZrvLs9bdYLw3mfyCArPg4odWwEKHE29Kt4E46ZTXB3QbxwQkSY6T6xebdGf81uBfRmtFiY",
  "key27": "5NF1Bp4uW9LVwqQyyzZ4MBM4moXnBuxKJGAVsQmQN1vWxy29n8H1sAtSoMyLHHEWDVGJwHRh1PFv6KB6WyfkbLVp",
  "key28": "5k2k2pGgpVJ6Nje414tYJbLMJDozmFB3N7cbRo4wYMsY2jGE6gn3bRjnkAEcEnM4msHMBWtfpoaVZdk5mKXtN9G8",
  "key29": "4fje8iSgPmzEJEhZRnZQBhC2FXg9A6jsAf9qVAgrmYSWEfsr4kbAPq9x8z9fcGwfkCLpmpU7HzbdiaEm1MwwJobm",
  "key30": "2WW1asrQeBgZ4Z4a3bGqscgWhbCpduSfMdiBzSzC64jh58kM1eHxCZ4Wwwk4QErcy74FFRMyWJ3RQRtHknHyx8hz",
  "key31": "rT9E6abD5R9FxcVY32DEJnVhDmAbGbu4scq5dcG98r15as7xiMuiZBxw2hNjsfUhJTiyrjySe7Ao6Z6saDxXYFB",
  "key32": "4n37AeLPkjo4ZzcQo1xPYxWeZ2v6zPWh7BnW8rWeyckdGPiN6w2keu4pPSWnQ5un1fyioxpkpvYcVUkoL4oZsmXr"
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
