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
    "2rJGm1ubfSyM5SZ8yB1KGGNFTmnrZrvMkd6oBpjeASfVFHq2XrQA55cv66MDDo7GQ3d8m3sqWN6Ydid2NuPRVmcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bcLYgQJf3vzDijuzuciw6m62TATmuojwJ2XKnX96t5ZQKhkeryjqvNPLQ3v73z6oK9dwtbgGy1DYY5fN33jUL5A",
  "key1": "2zm6zUCNMfqeQNMGQBFpMDhZJV5iHqY3RJwByFZKnh55oA8YSTrw42AybHbVgGaYKvJvLaoa2vyu8ijA6TauMNa",
  "key2": "1qkYjaUsy5nu5WCGtdDjMhKbsytE9tRUNkU9kbPziLQrJmmpMz89F1RNRrFK1vPd2V2qy4wHfvxw7XjqwH7gyeT",
  "key3": "JTHfrukKkZeThNZwPcpwzED3Ayjwu1kgZ4nAjZhF1KAPKaUnQrWK3yNGKWsYWVYtvgFw3BBugwpPCLzyjycchxt",
  "key4": "4YE95fVK9neGrqs2BP3Uw6kKYrY4wtdKxm6wx6T6FPePCJhWp9HMRLfBYXDyyprymTzsLykmwRDwoAKpuSEk3T34",
  "key5": "2Zde32wPgEBnsd4eZYXYRmVop6N6XMP376vW3baqyFZaoQNasBTLYCQhAtZhzBoB7vuZaUwverJBJAo7JbHSZwV2",
  "key6": "5cukBp1KspkCdkbymMeZWkghDAd4GF6zUVeSWteuLCusMb1V8mkrGsEtSwyci8jgUgSgi9nYUjZPyaxHhUSrRX3F",
  "key7": "5tFMSdrzDqqQ8nWSr4ZBv2qCZnga7nVbx53kQ11pFrWN8idNQk6wq8YJJtXVnc7RZr4E8u4GuyodmsDymM7JQ6Ha",
  "key8": "4mpEkWSdwZsDNt8ogKD8fqvP142MjQrxXr1aSuFmBevXhhvy6bAmsiMqZuizTNHq7AkayfVp57UiJ7trsbBSVZV2",
  "key9": "5qmKvsXYhfbNnrR6ENmknjqshAK7wYgd4VgvVamwFdAsiPK2aJy7kjBGEe1HRZveYagCZu9zjCCvDPKZK2prgToG",
  "key10": "WQZYXeGAhpdyNVpi2kbUHJECdLxs9ck8nUXLNDLVTL2sfkwA2X7B3buZ81X96xsDeKQc74PXTWCXkLJQQimCWJc",
  "key11": "UgbxyPkDgsbXUM1VPZVzzJNgZeTzsceSR1sHK2py2ektscWmtvMeV3Nxxd4p5subLGucYaF3Z9TT9J5S92VzFmN",
  "key12": "1FLmbWQdhWtwEbUETHGHwcFUM4zt5VjhEQ3jkLmUAiTUEv7jCed8QAbjQ3E4xKjZdUEztaxbPYQ5DRWUJaZW697",
  "key13": "qkRQfsUAFcNp8rkaXnCM7MX75kkj9aEPLuj9fiLyhozMMC7wbW95epRcbZCSmky1JnxNKSzYLbT821EL8AwjTSJ",
  "key14": "3F4YkqZq2sRfZZSmawopWiSTar7xc8iT67yCZMT6AzmHzQibeGSfVJRjig8b4eRAbBJYitcwxFCoHuyqoVbNHiFZ",
  "key15": "4hL2CxHvtzMBrdWCV4ijMPf6vDwL6nGxtdo2AgGd4kxFLGrrFaL2SqQt1TQxiQZPdZtQfKBJFoJxYxJ8bkbVVQhU",
  "key16": "51cC3GDY1hU94mjNUDBQqCB8uU28bypaNT1dwuubDuMQgjArdriSS86YcbLA3mgL2EmTHVE9rFdZhGe2dKcAoNz4",
  "key17": "2jcXBkmatfZLP2T31YUnpCicwBJiLDhxsRjocPQaQk38TnQkH59a1Q8Av2wXED7pyjr1n6Wvj2hn1jDLVRvo1kvK",
  "key18": "D5i54XTaKX9RZtMmhHNbqdymgN8jstq3RUh2aAmWhr9gGVDAeQDdbmSUVRZCxq8LwaLGtUfw6noBqgFzx8yHcoQ",
  "key19": "3f6eoKBynVuz6QKdFjtSz9jmWUjdcL1cfSxkhooJ4LhP1bnuttrd9A6M1BVXrMuEeaPzjGH9NrYxM6eciq2VdJ2A",
  "key20": "52mYi42uMjns5y7wiXZeRBj9VLsPJqjq8VBziZtVGE5nGMJ2XB78BBVyp5UE4nSjtcJguZSVui18SfvQ11cX6BB2",
  "key21": "2A7MJp45QYZzVmz7Ds9vkTVCSBCSmXjaE7G8z4fqS7kuGuU6uz755TDEWWhu6ULVtY3heyG4h8GNW9kokPnw2ZAN",
  "key22": "3Y3LAYLDUJkKwwRpV7HScyDy36FsY7L6PXfcF4vM86xrJmn36W6AUeqGcenK395suE11BFQFSc2EMSrfYinnXXmN",
  "key23": "5jmuVkBGuihdUPGU7ef4yMcHNag25SG6tG8RaZkNjhLN3ZagiTVZoQHicbSWtECa6Fy6ZxwBW7EQLFyTdfh8K7dY",
  "key24": "367i8s7xf4uZpQEw4veQXofx4DDgKrNjN7dnBo5ZbQ3XNWFVMc5AYgYx4rBWSZmDwhVsk3mu1boMbyFDzNp1WmeW",
  "key25": "3CSbvxvLcwGBgv9WDS5mDCnceSYSPv49Ky9YPQe58JptaoSoiAR3B4RgLR62LR1zyMhRus4LB1cfznZUYfe5ZbmG",
  "key26": "K7fXdaBfqYRuCJFokjXwtJKsqJFtziX5gXpkKVi3x6KExQteJjR5R2uDSBuJiDWToVgJv3pFucLdzTQwYjRR1Rz",
  "key27": "2HS3PZoATpT92eQR292g3au9qYJNAP4UWryUSLjtDZqEUYgwQj6TdCVL4G53YfTBMneL5PGSA4dM4AxkiXzHSy8N",
  "key28": "4qypMjS6bMMRVuak4g2YA8uro1Lus1ZoWvYPeeW8o6MGZUQ5BQRTkXcJ2B3t2k7DsPQUD7Li1fUbjkfv26miWpW1",
  "key29": "3NxMcJhcAubevSNw25zG1iYNFhikh2utoqXn2nt7R78P5Nkm3as4WQkcCY13E6Nw9Xsuj18648sdemv6SavtFKJC",
  "key30": "5RZfryyg5AZttrjmSjhJXKec7w45uYR39oVWozbQCqafngwzJebVE85Y4jMH46CTEBziKbkntpzmt2gNk9a7E8Si",
  "key31": "MfUzbJVqhyeWp9BDWCiqxNPtgKhkpN5MezbrcR8RW5kzQzFkkYDU2NnTHHKvKNdVauXhXqx6aCXMdEr5y8bsbFg",
  "key32": "A7dSbMdY3kZBXXZUhSkgT3MwqU1QrN9CG9tmzZLN5uFhZxoDk7Gih8gBBzg8ajChrMyUnoxttVckpz3Tqqx2Lg5",
  "key33": "2AGB2LrXaSPhqqmSVDeJVWy67VA1ajSxNDAMf1d22UCsedg4sBWWbz39Aq7ddKaZdojZDPTPqFyffGKM5SjMUgXR",
  "key34": "2qDQBbojGCT7Yg91oGZKZ3yb5L2A2jwsnVhM36yK9FQDgLhW5m8meFwPikXSWcGDKySAiT4gbKV7ggzh8ycqANSi",
  "key35": "2DAqbGLTtjNmoyvK2DmWjs9Nxshmo7D4iy1W87oBs7RLwFBMf3e1Bq9W76XNc3bkjdbhKjfwCuEXBFo5AVZtxx2H",
  "key36": "2U4PobowBSESrVoKaEAwnu4rgoUdUuYucepgfpXD718zd9bSfwCA7YsHfjc6ZobLx543CnvRSDqpmJQTfjqHj9iJ",
  "key37": "2BTTJ2axrtCvrfhZBqoUVcw1tRrh2bW4WNGoWnYHuVmUK2BD86qi8Y39BZ7M1s3FxWXwmUXZQ6Qefn6Sgzv4ouRa",
  "key38": "4Q1DpCHUyqECFT5FVpDUQmmSuhNUrNhUPTqhNzqyktXgBiJeSDxTRSDEDjsDFh3NXwQ5xzq2MFUMDKpDoobJ8iL",
  "key39": "4e3oqejbzDwUXPS4gbhhPo65TXqsvZUVCe2zLUpYGu3BctGiEi5cwma2PBWW6AFffS7TmBS9BitcjSpveAnj65ab",
  "key40": "uWBEaMa6W9czt2kdheoJx4kRGq8uCKbarray4heAVw7Pg9TkDomXdP24FAVhmtyYzJxNJXhYEQiy8Vs5kyxLKiA",
  "key41": "3yUDwyaXFyU4XyxhXcdNRDWUs2FeziQGnhiiSHoiEvmBkSdfLgvdgYdsEBnRB58rCHQoDFwk1GMQNeuHMwigScng"
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
