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
    "5utc8hJZLxiFoZzFF4eDHck8PowZ5XC9ZqcUL1DxnCRXMFU8cwjiYHwTsh4JQLeV7ZKz67TRbQuRr2w7kAm8AgE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BnxwwDSoX2ZgG75yr2s1CtuZqnZ7mQVwdxniVoXNMQVvtr6LdDWZD1JiZvQL1ZyCrpXEd2TqD7PEu65e1ZxCna2",
  "key1": "41ieJbPrcrzJRQpHWWUfdLHPVEVbThscxahvC88Tut6NQVKnxejMrhueABAV7AZwztsqWLK3MPAehNDdV1iL7hHD",
  "key2": "4aDDUrwMTPCDLnaWFg8NHXWi4ogbtxKwLkqEBBQuaAdCskZa7tKgX8kmEuX2t5XLmsAFbnjoWVCuVqUSecoCHpiM",
  "key3": "3fjaZfZ5UFnziqgBLhJSNsds8UaAGhHCiJyFznXaK4BisCWSQMd9P8wLyk2HJAeRmx22foyetqARh4P4qFBur64F",
  "key4": "nAvcDb4NGjsF1MT8Q6GeeRS44PcZpEE5jtMxJi5DmMaw7XavSCMjnxrwukMnLWXdT8KZ9UPcnRVWgyqoNcJfuxL",
  "key5": "24JAWmgJsnmWFejzVzVuHqtgGJPvY8h8u3siJvEBrevtahD8i2ckeuMLmKUQqirFpeSadn5mbY13atGSmzkMWK8X",
  "key6": "4tp6p6obEY6WW6wRsw9vS2vdCc8tJA9bTxtdBh6JJvg5a9BfSiUFLYGoBMaGQkTdUZHgmdeLbcAbt2xedFYDMYh7",
  "key7": "4rP5uZuXenN4fRZPjMH7z4J92DrBRxyycJosgEZ8gUftfhiAitiWobMzBr32vLQ2qdkHuSRaVq4219DtPTeXqxsA",
  "key8": "4SzERznvSSfuQ2tNYnoD8ybzivt38ddNVfGNFMrsBWyzgJ4FBXEC8JDeXnUWQp7kTAKrNdwsKWjxUyWmyJ2mbLd2",
  "key9": "3oH73Xv1y439r6iwSUiq3CkTPNTpYrcPYcrgYVLLRkgotnUTSL9XcDYBHy6y2WRzJQ9fqQ5pYVUzrse735GPJbC8",
  "key10": "4jVFnxbuku6WzY7HsJwJ782r2yNS3qYZtfcMnpMXDDzYqmWmsos9z4dgJoPmeqNm1AtVkWaBnZotomRz3d7qnVZg",
  "key11": "5zJdP67HcUf9HBJG7HcW1FJy73rF8S5XBZYHdvZqGhKtvd7ZVhPjXMv6M41YbNNLxqkKyaZNcPyKH7ML2CPNuJer",
  "key12": "htnyz46zViyLXuY3ffJ8Po32CWVMUUQ8y4gCsikz4nD9ym1UMurrh7f7KkYj3wHZmuKbV3vBxgyAmCFXEGodnfn",
  "key13": "3fjWq7XshoLKH1V8KYPHoNHSc8F8nGg55A2g8yEQvCALWaCNai7Eg5x35xPtTfPCGmwVFw4yCCGtR8RZPrmhHGr6",
  "key14": "4F8Yao6CQA1DwhBari9vipvA5u7yFmPXkHEce4rKTdfKeYTayD8ycaVgNJFJtasYDoJ85fRp9jy5FhxcbjuMNU5r",
  "key15": "R2hkWdk3vNg7VQXUUFCSuCFSCQFpjx7Hq4p4AnXozFfKis6rkUXhiah4xWAEbDqYri1T3EShh61gY6i9ZCbTGYg",
  "key16": "xSZUUaHvBCTRCDyBYZqMCHNLe85GFooXDbXhRK2kwes3mDtWCKTrrKyidvrhn5xkpUVw9hdArkCAaUxmcRqDxQM",
  "key17": "5TJCNzAqA9NV4Ad95u2xC7M5jFJcEVoCHE3iD33v87dKyusuthHGgJafL7rJPHwyAGgCm9FHZZY8y6wbKnoLVXqU",
  "key18": "592uKFNmD4ebEUufZRPc84yuMwUEcjhq19GzWqhFTSorcWbnHMqcND6oqM9DTW4aERjkAcfi4RhV4k2iW4BsHwbV",
  "key19": "2GvFgBgsrDoYe6df3YfUzTKJoYv6G4ndqFSyPFZrrcCrAYRcPT1Kfd6gkoHxSkGz8zQibjGgTU8JPdfghEHcssqz",
  "key20": "2tzzNNQrPVtZthFNsjYUkjwRmZYmWnDkzL6dG8zfv243pQnWwyPyC8P6bLKg7SCTWwWdqmkwSRtkB5e718ssXUuy",
  "key21": "3KePvqGp3LB8SZfGxW7kcSt9nLycZ5RLYemoSSjSDGCyRZjaZ5ufpJLTiWR9keHn52UDSp22FJqtZmL5A4WoVmTG",
  "key22": "5useCcZPWE4NdrSRY8QJhyPyChLCyayENPJfuwat3HPr5tjBTZUp74pmthr463qkA3tiqV9wBgvweAfkAsHizG4G",
  "key23": "2cUZF46iAgVUUxhQt3sxoZbyRuBAcWUjyBFH648ycifmpeh2QrmTRAmHkv915y2gyNyDaQFmxm2CMW3FMwzmn3v8",
  "key24": "5VeyKE9qHuACx1gSSET6x5SHoZa4de3G6AdfAN22F77zZdUdd4W59rSQ1mtEPZ3pQP56RyjBkYyb6Do2EZJh8aTB",
  "key25": "3XSQq7Kx2E8WR5ajALkh98FK7Kq9JSrHTXEBQ3X22Eeic1BQNwv7ne787nYHc8f4MyLMuBSzBGRNXBjJzkjxUStH",
  "key26": "34QFHDGb9D5ug28RzNqfv58AhYedrcVWQMwskwA1zu4BuyRJMuj7iUD2rfEFpDXNUwdScckTcm7k9JT7qwwGWBnT",
  "key27": "2bCYuMckuob76CnMfRbosdkZkMWN7EvH7ki1AzJzsfcrnJJZddt4geTiixDVZz8BXEBXazEDgsKWUcaNEobZQS8",
  "key28": "5ozDXXvGTZbTBoSQzPd4dafSJUPZfMemKkow7NjsRNXamNXhrtDyUeACFTJhHnfKsxiKMoob4QRDcmfFbFRS86EW",
  "key29": "3TeoKBzm9ZsCrHHd2e84bBVW2sjt37sNwke6pkQHeFtByfBujDHXbjTv95A5Grgqn8caRfWBU4CaXZjmFGABfLNN",
  "key30": "xwRHpopvAfYhvG6EyYh9gUGuxJ5YWqRjkXeb2diZdwz3943vKPGi87z7YvhxqBqeQkeZVLAZMVPSDk9VPotb8Xw",
  "key31": "FX1Pv1CzbSi2vhH888vriWQaDKJgEnLLggsY8U1D5GJKvMQF6JDTGkW4vf16Ea7cVM3Jf1Cv8FmLisAMEyexMwy",
  "key32": "cEco7vhMs4NEtykgzzg24Rr6wMqF8rErCZw2tefLSbYYNY3MJTFXRdKwNe7EHVEcp8R44ZnuHZaoh1k97GxnQh8",
  "key33": "5vNGa2D3huDRiXLfbntbVvxEmNDfZKTTRwMgKY2ewEGZy47F11qaX2RuxfwZW1f1Hmc4ovCTPSeSnhRJxgENmcLg",
  "key34": "2NFgSrVaMdf8Fg1NZDMPtJ4Jc5wesZGoUp4XSJMqoMRsKV2E3F7voq8VBVmXPEFsooeRVLNDTSKt5RWvPCP2SzWL",
  "key35": "5V4JjypVBcowXnUD1nDibZd28g5Zr4KYZby2UeAgx1JHFEQzMZeW8f49YApG1QrmmAKoTn2Pd7K6JwQFzPaYwSHo",
  "key36": "5ZcfbFvHkiLvVJCjiHgiSBMst5GKMzfVSSZz44kCHDpzgbCABV1nunLbS6u4bu2CWBykRfNeybk3DZLXhnJafzxs",
  "key37": "5vB32h7iF5QwhVcUDEnFQ1ATuS5JZL7Ad4RZJckK8qL8SyMyUMPErpmWqs8YMfT9Ny82oZNvFA8Uh1KhjjUgpRmZ",
  "key38": "4kwY2SGyov3MrHZ1EksbgsYQsA6599EoiEApiQJA98XuZ8MT9a9vSNJ42F3fvQShFsjU4cqMqj7pH6ojMuabCiiX",
  "key39": "2YfTVuz7ciWP45R8e5CA6wrei3u3a2AoeECgVPN3Pj5DMujpHSh9YK2nfMqqbTCEXiHqmHQnRBR1R1h3VXX2u1qD"
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
