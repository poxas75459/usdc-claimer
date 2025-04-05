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
    "2uEpqYPJUa6WLWGcUKz5AuNveZUKeTB3MtaoTeGQzavLQz6K4hLuWa7RyWs16yBrMiHMgnhVedTnKG1LUB5TZq9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64nqAZipfa9qnp1gwQ6vaqVPaiWX8QpjSxbrjTqVM3bqDU3ujw1gtGGepBR1jcB2Sq4vDZwZJKmo7Wamqg4yVve6",
  "key1": "4E1xuM2aQMYDbq4M4EitTV8uq34y8rbkJHV9ymJwxAJzH5AnmDmk1xMun2KbmK1teqaEq4qqPeZMfgyvPAbVAxsh",
  "key2": "GcqgAEgDqx9ZmrpNTGBVtMVFrdFTHG7LGXC5CtYYeCJqZtSLfjkF2RPckzc8TU7AuUZWsYszLi2PquPpxZB11q5",
  "key3": "3PRGC7VJxjgjfAh18GXpjsAwUqMjdzfdXKsjCWW62XfWjYTQeUnFAgmVRVv2aPpAZi4Bx5rCZb72oRLa1nm8wFtT",
  "key4": "3QGzQpJwr6BRUywdHEiDGqai7zf5GFRgFCJSQ3yzYorAd9Tjui6S9UQAoaCztfFfHJ6agQVR44QoxWyTLKwHhRnq",
  "key5": "5n6eLC2ecGcfee2hvFvQarEAyw1d2cR8PpztFsqLXhKY6bvXRe4tRokX6tyFwGqSFbDsda3Y2e6LVsbpE7p9nBxg",
  "key6": "2S2YddpDFFJdGJJVWqJgcMCXrBWotYFsCwhuhY8qMnYx1XmGc2o2daFz5Qo8ggZoJJMt2NWSbRCc3Uoa35MrQMyg",
  "key7": "5CqFC5T77TKj1W6zQ7m6w3dJbH35WFyKW5sCKM3R4fCGJgKbzWQtjPgBiqyYscB1yM4pTCz17bChNf7Sorf2tFXE",
  "key8": "4YbX8fUq4YBHDoiFCVeu23mumYkELfC8JGJncyYwrh53CB9d4jfigdkJLBVG6ztwX7mmoztnQjhrq1oqpsbCHWUd",
  "key9": "3Gjkhhg5PWZYuw7Ye5LCFyXKRPBTd6pffd1g8jRAGEYpZXyua83kHbFbPxBUSyjW17JKRDiSsKaHQYkDFxUm3pLd",
  "key10": "2YLnpL9kNx6GTqNeTTLQ6u3bSZ1ouERvByRGjFDuRMzYtrDmCpNLBSRSVid3TKAgYSuoU4YrDGcnVHtUT8paq9D4",
  "key11": "5LkbtHA1y8uPHVYdb74658tu5zyVVGi3gQRy6hajSUFHKQyfquCY4oxVtMLYqXjco2SNqETUGrbCQTEaL1cTEwow",
  "key12": "2K9XQNoMUtga2eyXmnZAR6dzu2HcRn19Ej5MX9tEGN5Xf1p4aoMBGbUJQa1Dx3GjCL6fyFGrX7wiK5NxaNoz8cGe",
  "key13": "4YdSUPprVxqqRRX6c6wkv9M5QjEaFHCQ2rXE4VovjJGwn4QcdDh6xw9oGGSdjDQmEaipLCmkk6b6zSAomF1jPxfE",
  "key14": "2orPkL2tnjpsZByWyH58fSNnH3AasemHbCCNkVq33z4aBRDpQ7163aHRWUwqv6wVovMSpr7ctHVnD2Vg29owMM3W",
  "key15": "wvNe1khqTeciSpdzfPAhF62s9pCXDkYdfFmePaQi6abd3D1qpmJyj2tE3iYfBy2UXzwLThVeMteuSgiKs5popaE",
  "key16": "2LCJT7BFunCTmj8x52bpvazfL5Wa6Nk8YeTW9TXY7gHDF8LodmGiNFLWYdwL3PzWnkHoavwjAfzMFCfBsrKw8Jf7",
  "key17": "2fjFTffF9vecUERCzHWctiaKXG784jCkBsW84e7efPD1fS93tHncupBXGfHUAExJ6sY9U3ciwxJzeHvVJfRsJwAm",
  "key18": "4obALVsm6jU4iWw2zd9DRu57xaAYUbynG8KXKm7UscHsm1zqRGrUdacBrKmMBWEqKcsbeXDMwxbAFfDR8XNgviPW",
  "key19": "v7GZccHH5aPNr7xUd4Y3kQWc25T5QGbuWHjQASJPgYsWVD6wvhgZhJTpVt9FRwhJ6KmKq5F17JbsibkJrfBvNxj",
  "key20": "3F4ztySCkVoaEQfVsM9eqWE9XRkz4wj3q5b64ueMQy46NdwfNEZCzGaedTXAdHZqcHvPJ7jhFnG22LuRbXRrpvro",
  "key21": "2dYAvHDV1BQFmzHJaFfahTpAMTP3PLRsVze1k4uk3WHUxuwgCCn7V8cvZY2vY71cjX8tY7BwfP4yCyNDGtccwQrN",
  "key22": "3V91ieaScBJGg8JJiPj6tBf4FhJZEmiMT5dhu7BqcUUwQsdRUenmWU4TZZF4CwvSpD4RU1EvwKvJCddfbDzPB65m",
  "key23": "47ThEVuiapeUsp2hKstbNvQhzToY8oSiHYPGDmp1iwXcF618aL9eR1H5sGwhgLfXm4GgJxKnPbjPSU8xRKrdrwv1",
  "key24": "PPSyh6yd9HYLNkVNsekJaxqPkTzzXzLvRuP9yirGvsTQNs3zTQzfEjscU1dTBpYGXCVmEJ6dH7imzEVgubLD8Yh",
  "key25": "3SqdMCNnep7YdN8ge98xRVWLvPooY4gxTFUFKEzNYT9sMo5KC95PBJNu44WEgt7XQnQWdREEs8HtvDkFM4SMxb41",
  "key26": "5VndsnWZq5EtMsLAPbhtUCjq2B7B17YqHmjw8yh4ZUkWSvSeHn5KWyrW1yxgxFF2Sc5MNStZHuATD5evbjAjAWgc",
  "key27": "uoYibeM9GqLkW55RVCpLm1pLDvmUVV2cyySEr9N4p9hXcM1qhWgmDXfpcYeP6qzaVWNXBNdf2aGhbd9F7guj4CZ",
  "key28": "65UDCPqXQFizt1evQgFFXdFw1DMSefnGsCJUMbK9Rp2uZPqL3JyX8GyGRFWmZy5LSUToqsSLei8uSzdM8qH3Zqei",
  "key29": "3H17aQLtksKpKC8KKeHhFnkSMMRL7kahPdtgS3UNxmrB8iGTzaz335oqw4FQvKpfLDjmGcUJ61fjVRWb9HftPhFr",
  "key30": "2GfCTo4SkSH2Hq3HjMh1Td6JdZfBp6jYjnZfakz5MTdggYCRqUM84biBZ2KSwCJa1MLBETgaWV5WTC8K6sgPD5qi",
  "key31": "53CJXvKXCJdLoXFHRn55BXTNqK3nxzRas9tHoeWmdtNJGvjVdq9jm24muhGsKeLzD3PZSC6GsorqJpv4ydgCyoP3",
  "key32": "2ixjGGSu7uvzRSYsLvbthQEcD4d4joXqkdkpKQAaYR8LktFngDoNo6HGi6Q5gnMMi4E2QU6nZE29P3eh6kSS3yix",
  "key33": "2EfbzjLkxQ4D2TmQGMHc4evTzAg4pJDxwdFYmMsgSKYC8PWkitwjQQsUHeGq7LYbTMhkrZ6sUUt9iVwK4pVu1rjL",
  "key34": "64muvELpb7mQ2Jxd2nZEz8RXW1x6fY9dh9WHfdSVvJBmJgKBAp6RVrrV7PXAu783sAeaRzRGVsWkYxLkXXdomEQg",
  "key35": "33QMm49KVhKYcLh7Q84Ar9tw2gXx6DxGkdQaGpYGdzhoeyQhH19ZRVubWkvHT7fz2zuNZe3kjXW9DdThz1SdBJGB"
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
