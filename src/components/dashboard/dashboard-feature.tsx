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
    "4trcjT9gtKqNfATmpDyBRt5jYczWBp3QqTJxJPX94sN93EEkN3k67VrkrJSv26cNzAPn71Cy5THW3hZ3M63JxCg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZY8RTkrGvoAnQH9VZgvBsESk4MSfxuaKo731W69WjVJDts5rhZSJm3HcawnWzYf5N9diNUN8ectzapxRmXGoBY",
  "key1": "3Z9qZDRAXU6nw1AQZ2KQEW1iHYCCYPBo2HB92cR6avagZAJZ3iPPm7Q1y3aXctDcCt8ReyyUmmVZAFrD3ENagmYN",
  "key2": "49XzZY7TjNXKM9qovfg6cGAzZywPA2yV6pNzTiebdRjnkLEowP6oATRDtHgKTyxWcVQX5EsUC3ZecTLdgdBmDvD3",
  "key3": "3x1VTkusKoWBosjrhjkRgA5YN5yFBcwBPBC71tM1FPQaLt3jt9nXgrgLRgRdyYTtvDc72hASBZpUc3UAQLPc9wMr",
  "key4": "3tj2gUW7bfKjXDvkpo2EU9SiNZk6fGTRohp2fgnkgFzey25384NafEHXaZojLuMHCc6vygCCgr4qWP6P9zAYtvi9",
  "key5": "4V9WvHUgZc6Dxcugc9GyJxMtNrqGzt3NJdNhLjJopd2M8t2XMUMSNh4YvLSJ8ycUrC74szN7ah2juMGqr1jPMBKS",
  "key6": "5drKeRPTQRmUBwnjHtTTFL49Bp5ztk4c8xi2V1CW3nZmcrBJB1uEuLiFdhG56TcuS4ajDR8GY6zJ3ahTniEZHiaj",
  "key7": "5GQDFew6hRmiYwTJdn286pAiWss66XwX4MzHtvNViFco9dnPixBzmp4h2FtxAxKEt4xycCU5U6xufnPvaJZMKYQq",
  "key8": "2qfHZjB1oTC77ZgEsZjvu9ezfT5Ukxxd3yyWEYXhxKUeZYHyw2tHzamdsCAYKzMnUBoXCiWNj6ysNi3vz18zH27P",
  "key9": "2SVGeYXHEw3XYi9xXtiQbc2ZZT5rgrN9UQ7Xn6DqARszQEXYtWujxHohqHxWnHbv9CcEsLuywt1yRsVtU8PJBKqH",
  "key10": "3oKqeX2zp7ebZRoqyqsCqbMraLTt8yRYZwyBdNvM4CCwR8G42E1ZJXCpjD7CUaEzTSDzGR2vBCs7GBpCAZUDcSSs",
  "key11": "znFtrEoJg3jTQrtQF19vvfkKWgwyqAo9mdY3f65Lm24Yn5kYJ12BeFdGHZUCPjWgnpb128TCAViHHw2yJbZo8Au",
  "key12": "2dtuBNY3e18HnxLekLHekp5HzTCv5Ddv3vNPHfWa39gieTMWZzAn9bijJ69Wtj4Ui1frbNeZwCHiWG8y4Fyk6Aod",
  "key13": "3F82p3ZUovqDoMzJtjJD2mdvuaSmTNgFvbhNgWmD4jNZVvjAJMzkJomGEZUvLt3JfmPzJvvKuuHSVoZvZPEHCJqK",
  "key14": "2mDgRpfKbcd2C7oQCnA4uBD1z6zRcS8DRre8EkoVdfmycTtjXSAGm1PGGtvaEMtSuqouaPJWfBK4f4kfMEDgs9Pq",
  "key15": "4WpvEVvxcnZc9SSjp5TYXAKxCy8TH7V7TmF1tWpoDJmdZWMLjQ8hKdVTJKq2zbXsj8Ni3W7uG8NEbN3W7J9XF9Xo",
  "key16": "4YmpNn21M6nAvd8sXroAA3V8Mx1VNMS8scbufGK28hyCKnz9CEdFm6A1LqGsPcmkF7ex73UfeALg2sVWs7CjHJEf",
  "key17": "281eK5Vty6ABNC1xzQKYVyn2cwNPJtsxsQ6ANibaxvWeWowuzfneHTJSQeKxkDLCmysrfQgpuS2zMWsoPFEjekPN",
  "key18": "37veMbL6q73ytYwTo6beyiPGZRyNsTrcXdfbHNKxpfUu6k7JNADRNEkiTuSkWfFoQXZdW6JfhkGengNhsEUPbAeZ",
  "key19": "5ShUAvhnmazcoYFU8wNg2EBak1Msde9AiXkPtCUfJCvoMHFQ21GPVM46fRaKzjxsN7yuvtFQHvSj47PxDEU1zFye",
  "key20": "vNsuhkwxtPCFRvmXvvVomdmkCQjqW94PaRGB7TuuSwouuae9EE9og3LfhznugYfCgXGBeBi6DoTUCFpgdmJBrpH",
  "key21": "4q4my13VE89Lets4mYiSpJ4H5sCCWhNQ7CfW6KLE7nekp2LfjM7fBKNUeDCtL5MCsBnNBAbPaJvQt5dP5QcFfZfa",
  "key22": "2TCpCmzzMfGvFJnxVTpidhVRKCLVq9wFvwK8cGeQ3zz24qKYK5TBgEvrEqiGb4xMktCMMf7x4TZyK3BsAwFBoLen",
  "key23": "2YxirqBFjabssuwNqqb2yFWRtyU57WcXNKz5iBzNw5b3SKW4QvoErirxwHkHUKDzj1kufibpG71SZp6mutrwjve7",
  "key24": "4LpvKu7xATnqrEfFkMLkRUZi69AGTGpoZ9NHetQWhnucB39yXNiHz1sWertPnGUunyKY2VANF6quxsRa2L8uvXHC",
  "key25": "5SpBQBBdBsW3nxgttwCbUXQGz64B94nyqSpmbFPb45wmqFRCuVeJ2ypd48vTSN7fFqrXPLqCujY9D8ijeTBndCad",
  "key26": "3fmoUDXCBq1YKJQQRyo3Y9JuSoFRRgqiQ18HeTKxEpdCE84NtiCp5M2pgjzNrrhXPgftPnUN5XacGKu2jw49iTK",
  "key27": "3hMxFo2QuxSQhBdUx5U8qNw6SB85ZK4GpUBGyMTGx2CNtHYD2suKkt35ScgFkCsynHEkd7SrhTEBVEue33p62jov",
  "key28": "3Kqh8wjQtzh4LXe6VoNUhG3XoZzNauxDBC6mGwyYpRLDmukivP8164WG5dzMYKEPV9SLdpAVxK7R4tdNEEEXbSwZ",
  "key29": "5g6a7dzjvChXEHKKmxZia8yAvcEg8m8ftS3rREbMYG1LCLpmSRPg19c7po7gxxg4ZBYWAWo21854praq7JXn9owL"
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
