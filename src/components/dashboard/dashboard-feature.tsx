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
    "48gxyk3KQaKTXTKAU7ZuF5FKqBuyu5zJzdRUtqsbPKS1iQxYkBaHCrKRjXqGBc88Ebvq4zaerE3cdM5vas1aCjLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWFgJ4xv5vrPRZK1ji15CP1o1tBcaniTMJSCzkycWYnC9gQtKkc76jWQTPJWFW9ZaMEXVWCbiVynoghA9vmGzkG",
  "key1": "43psQLS6THBmXzA51VWoFgGWz9tSh9uJMcALFJV8UUjRBnw3ourXyVdeL8wzzH5BH5UmmDTseTk2ys9wrJALC4VV",
  "key2": "416qCpv89RsDhPFmNQ8iHWNnvMMi9YryNLVZZgsBPnZaKu6C9EUWnxzDc7T1KnVRnvjwjMxEEpDM32ousyfNSKCR",
  "key3": "5tpwrpjEfnRLkRcgLSMcp7jJvBuHcuXcnQDv6AoozFv3SgVDbMLGzhVShfsz267SphgfB8F6zWP9ZEQJu8n8AD9",
  "key4": "trnBmPhFyx7qWmPUev2WPpR5ZLmwfr1XxPnq96335sa88LspEQB3DjSaBBt5BN42d1Pnf4iDFbeA8hWCJSoP82u",
  "key5": "39m7p5xwSF7DLifVx9h3HFKjXJ5Cvd4U1FJVzdu3PrnxT4iDFv18WvAGACq6k6d3q8FpD4xjVxx4eVtMvW4MW9YF",
  "key6": "L5yWxSY6yUJHRvCJ7wcU5ADiwtHGMnNohePYCtHxYTycW3uhEVadG8dL7nkXTuiFJSW65i9Cp9wQjk8UDYLVgqT",
  "key7": "5P8rCPnzeCtHS8j4zG9FqoQuK6iWhkikZ9RE4JbK9MQAXvfJLr811iCvk1T6bzXfGUpbp5mUZFozQ1GPh2YMcM6N",
  "key8": "5SorSETSYdv8ZWKgnuHKRwVSkpBPT24abZwnSAqsSud5f3eU4HqqMc6ddTFxrx77wNLRMU4gg4yw78Pk7Pvm6eBq",
  "key9": "52Kq5Sdiz9AQBiC7x5tgRZ1t2myqfurbadoqd8dyeTfhcYGXXebaxCdx1gLM5Q3ZujQC3TQupr5GFhssKyAfcx4p",
  "key10": "3vEkAnWMYpedwFGxHBdywbePgi6ZQhGCYJ1fCzFXcWuPr5kjGm7ePu5fMWDKsU2LjjH1choDmdTwcUW5MvvddGDY",
  "key11": "mbnNFGpF8e1KTbwDfB4njiK1e7e7F5K61vDg3Kvyh33iQURAn3tdVhE4YP68yt3jt9AgAVsyULV82i3Ey1ysLTi",
  "key12": "3XXCUx3m8dGqk5ycC7uQqfVxjFJegWvzCvzjDBNSHJK7xB4D95MttcMbZLzcVBvqkatgjYHUbYHgCdhTktt1G8mo",
  "key13": "4x32TTozmopHe2KgX4pCiG8ZjVCE8Zwbo8LnvuDyRSzrNkbnCfoueAd2GvQrDxrY3qPqJ6xSrthCutUZfATgedFC",
  "key14": "5tstddYjzCndnPt6AatjfH4EchfHKLca1wzKkTYRndUkiu7LMMtXfKmyeKbRWtrts9ZoRmuRqprgLPpSDzEktbUe",
  "key15": "39mQMpFwA34acowsL8eYWd6fDUtF442s2Ny5nc48scd62u1AD31xk7FfntvE1vWCpmkUxYqnb2HzdajSqmYWMT3N",
  "key16": "41hc12LapLaZToo3VCcmAjRuNEPLpnyygZ8F7N8z7RkbNDXpJULqUY4rWBi6d8syDEuFAp1ksKrbK8vqap2LtUSQ",
  "key17": "5j6mFRXYPnD3x4LRsBi6Tu2gY3RNrCRWd9UTzFrUptotmkPQCBZSjD5Kccg5oBnSWJUidC616jXpePZoGzTvk16x",
  "key18": "rz1ufHDfbXopXjE1YFm3h8cq7PFzsMea1suSRurfZ3WJJbgr62AzPBwsfyVwAfmACVzbo7dbndQmYwLkjbv3rDu",
  "key19": "3aKNRVARCXSAZK6qYzm9BPohaPHxdLD6y7X9BgQdnA6j5x71aUm1g95NEnp6Et6PJ6Mcd8uS1heHuUEc4Avjsbo2",
  "key20": "2mByn5CpugiXzLzNP6cg23iVxHr1pjyoCK6M4VajyvLo7NFqzdZ8siBDHHudnXBH6zYpKuTo6PYG1J4Qgso2RWp6",
  "key21": "3MeBcFPrMs41Li5vhHQdyAyVuHmQCKCRRfMcy38oeW7uKS5FLKQ9RrBEfzFPqvWNE7aHarCnsbCyfPthi7TLwHih",
  "key22": "2BUiifE2h4eUrCodWCEhLWbrgy9mUuJS2H5CTjQfcbb8DPXfVhDTHSRyDmVDWTMDHhCu8fuXD9g5KM829NGoeMJF",
  "key23": "QNhwb8onRpHPuXWXhU4xpM43fshRUtsdfJmjS56uZ36aA22cwg4RqRiyYmJpupALRzrvCr6sir86VHVfK4DB6y1",
  "key24": "HXwczFRvs7mZDaWQH3bj96p9cpdNERHGWE3mwLuS3HZ8NGUqQgLc4KruSnmigdT1AWe9t1g6QwXfwJVpMpYcGSe",
  "key25": "2Zzj6fJyEpsZ8DGg6FgXHtc4AmVczmuRi3TbSKNDsRZcSB4HeRUpxutNtVEYLHXF8AoNypHBgx7JK1ysR7YqDiig",
  "key26": "33fs5fRr1DjYi6RGLKt3tzH3AtLkTEcZnbJ7VqcbBSK9dX3ACRVfnfcVXQvWtuoHz9rPm8GcDyj3i69L3RDSNmdt",
  "key27": "LUPa1a5EjEX6BBDBJpdFmb8JVBCjU8fqDXo4sNXUV2wmvoSrgooq4FnSuz4ZpqsssUB1N73yrA9EQPWYXBMGGm8",
  "key28": "sBKmfVdZFketqqz6cQDeqekuJuaYWgCTFNEqUYgNN6Wefnt8zn2wpWKNsVFNj5roMuG4oPgmr1sYK4TPN8AkGjh",
  "key29": "4fhyDo2ojEpTvQUKq8C6g5yejMgTiG6VxJTjDJNiptmcER393kpcGSkWXzLZ8VN49Zv4BY3T37rTRhLKsov4G4QK",
  "key30": "35zSfkx436BJsFLEyjEgxgjUBc4JyLYH5Aq2Gs5eftjJ6xHfqAMwB5MhkLxLM2v3BYfW6kLqC3mi4jVbCE1wnNyG",
  "key31": "wK6wy8H1M6Zo4PygoMFYsyLq1N66kHY8LGiBgZcMt5QNQKBmDrbdUveU4CaGjrfMEbKT8SXST2GzuCwkcZhjy7M",
  "key32": "2P39uznZfwubakdTU38naakoNHoCM9qccFJJ9Rgn1xZrhd9dnEaNwPdSzZKWRrTyAQNeWh3FTEpBRojCxQkmkKh3",
  "key33": "3oC8gZGzF2gmaCaCCwMSX6BYuoqvXpDjTKMf7XCFwAdP1soG3uZKMqhqiFfQwB4nHz7UeNdqVVrKM1meSUm2zdU9",
  "key34": "nmVNcZW3Fb64Rvcjb8nZEojwXjvJsv9SEo5o6LA5ofUaWBZqmX867x8hKhD7AoXqcffHPD2QLHcQ33ujLATDhYg",
  "key35": "2HTYKC5Th9pryL9QYsdDGShWakzzmUwTWDE4SkEsmhL4K7j7x21imSn7wGBzn2ntqaz7o5NJpdt2sRhsgxyQjmse",
  "key36": "5GX747is9QsQkNfc1LmyDjr3KTqRUSb85kyUs9d3DySFtb6y9Pm8fdfoeYAgbwLyQChANL613AxtkqvHpCumFvCH",
  "key37": "52azktDw474LS3QPhPuTjUjhKDjKdNjGwCeo4UkPygfNsVr4ACMBMzSpsw2aLyytAjrdd5je6nYR3sbqygtcoKpd"
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
