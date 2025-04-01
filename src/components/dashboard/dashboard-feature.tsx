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
    "4W2PHLEf1zbmEqegM1Qs98Z3t2sJ6vrkBparDYp4xEWGb9HCsWXwTHui2AaFg3qkqaR9as4v8QCn3CjpjCn5oAVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DAfuvUDduUnVasepwZgyacHpPbSfCx6YuKKhJaCUSgTqq7kodzQM6fWnyDA4h4dpCiDXR314mseNSfFrhoUQhgb",
  "key1": "w8HA8ea3ujxyc63bwdBGjp8Fv5iVhjSssqDXAu8QFcaGtYwaCSrWnYyKPHP4m5vfwivcFGNo1TMePAbcL23fpDk",
  "key2": "61AdqzpS4ngRY9tpyendk5QaxSUDmjYu8cjERXtWvTfsA51mHH58ACFQzHyWVe65Dz9GT7zE5gAcuCcUGgvWuu8Q",
  "key3": "UtFKEGnEKePF3gmcrAK4pzVftbzrv9PATESnrCRRCPp8y49RyNyFRLMMW3FBJSEQ4pNQKa3wP7PbiN3AsHvB2pX",
  "key4": "ofn6qBpQ8TqQdB9m8GCbDHALjt1hWJEFXYDQAGhgiCNsDexHAMtptt7vsxRSNSTabDxPEYwKwcvK9Bq6HZKP18j",
  "key5": "23FZsrPaXYTc2bsLxQQF8bREanQ73NXw5GuFxT1yzQj3URjYEDNQSUZZQoWgpXFHkvwJZs6dxdbg8HNbPFstAhJF",
  "key6": "5PcrffDQKvVTdUZL42H8k32cTysCucnzF8rtgbFP73vjduatMePVu5DtNNgWgsbBqkwJbAx5tZ5f8tGa1xVCKNJS",
  "key7": "2kqB283SFVxyPHonZLRUkbNNd54P2WBytGjPooHTuncQfHcer7inBjHjsnNTmhpWnVfhLMKsuT9VNnm2mayTXPVv",
  "key8": "4642XZDqEqMEgxrtgXgzUK5sXiC6ggJtsYhmGvf35frTxArH4rBFoLXJwiwC4vHEdHZELfxnx4jg7AzyYM9Whuez",
  "key9": "2ourv4o8GRpxbLsgu4ewB81ogVNY5hK6XJdTps6dUq972bJ6v1hH3hi6aFXV3EnezGkvvxTwGH3z9GQT5GQoR4mD",
  "key10": "FcF1ijt1fMwem1FcUK9Nt8XffNgngXgNCSqknDYGaH4jYi2V8e3hM9nBNBdwJ6G7KC3G8vEgAQXebHP38wDgZ1d",
  "key11": "4bfDgBJoKvjoe485oWpzAi5SZJxRRyWYCwvps28zvnkHc8roc2gR4voMscUGJN5qFokGyoZBadEcYTV2y28xhmSV",
  "key12": "s7oJ9gCUYeuUcK8Ni47YAHffrXNvGGFwU5PKMBDnbpa6tJNQ3eH5oY2LDjyBv1AqmRbYEMYp9oqg23GWBoPvN7e",
  "key13": "5deXQkbbxiCpaPACZAzpcVYey9iA1UJjcPGE5EG6SiBirTp4E249QhPQbAappAaSirSruuG3zibQ5VVSdgKkzPsP",
  "key14": "3NhLfGRnsMk4LLYG2QsgJwWadV62ztkFmsudjTysqkyCLq7aBG8DSfd9yERKV5FHBCTGcib6QR7amVMQQ4Yn3wHh",
  "key15": "2Z2p46yDW6WApsL6kaBFU4ZqVQrBWmMx5HYSJPjwJRPV4sStTB7xmt97FvBWwvsRS7tLALDJuZcpAdgScCtZ8kTU",
  "key16": "44MpttTefVwQqUeut12DGqAdAgaxuqHZ4dRW74rHUAm8TR6Hs2Jf5nEiRZVh2UATmN4wVe3wy2EfKUvUxnNp5auA",
  "key17": "2JUJgnEqb5ZRSNpE2bQncHjtmtF5HA1zwHtSnTuZ9MKSZyVHSVTnprprc3dfHSJoQHatzjtH572LW1bY644zCwAy",
  "key18": "3Ny6LtpG1cMR8frJrQW9iugWvosZAfWXyzUK4hAujyXcyZpWLFHN4XzaE9trsMU8pFWehKnDRiRt2Eo4ftPWzxFX",
  "key19": "5Dvvz8NVESU8a6fWxQ2KxBkA7PZzHBw4h6JBoTmxFQLdV9k3ke2inUf6aoyjot4a5zLkTgdK6U7FubkpiQJE5bD",
  "key20": "3s3gWokhPR1jKWo87JDJZP5AChVYYpuQhTtcuAHQwmCtowHursoCSwSGmrvz2HGuRie33EoJd7uSV2ZS9LhsT7aW",
  "key21": "vdaRRoKQryeb2zimN74ZNS5iG9xg8xPMcfzWLkkJgAk3k6wXMrKBcuoVSgLimfXYeeLWxbyv89pexEj7Mi61vAS",
  "key22": "3zYca9kdBt6puHSGZSjcDayRUtSQu72x3qGaVfgLQBqcRX5RURcindK4fLBh5efqbKaRbw9bXE829zG3Sef9DkA7",
  "key23": "mfptJsaoDU18roAKUCgtBHYCqpgexdKgJx7CmHe7467r7RbostG8cek9ZAQAWAZrECYGuwPcLm6Efo2CCryHLQJ",
  "key24": "3qciZ9UNmu421pV6hZwEpVGwSBruHu7RbMYxSoJoeCsTAEgKdbptE6bfkiuwhLGkEFUsNScc1upMqYwt5wht8Z4N",
  "key25": "4eqdToDDzNzYef3JWBy1b45pjwDbsaDZj9RdYnXwAVVbQ7CoGWtmfeK8pxdW9pVLKGMX4MfPNgB1DiK8vcXDVDKo",
  "key26": "2CdARX6GfwPqHyausyJ6KG3vyuya5NHJbZBszsiqjdAy75Ug7AGWzW2gsmGxpR4Kzrb9ReE4bkRsmzRNLZtmjx1z",
  "key27": "4BBHf9VrmqjpETnCsK8daiZTxMHewHW9VpPR6PmVjGWeBLBmxm5K5ydtJB7uQkdX8WDLfy2Am3PVWGHrDkrCbcdp",
  "key28": "2yJy6v8ftia9kKRTaumjs8tDc51s2QLc5gMFqeUTgPCHFA14erMcnj3T55kf3z5tQG9J59aZ85GRgzGAgTFBGm2Y",
  "key29": "5VsjmHQbePfetZAJFcwymVNDYgBZD9RtJmui3rxjWELRLyBcBPNAy3fKMyrucxWmd62aP4p28pPH3CsPsU4gz8Nr",
  "key30": "3vmxYCrnJcvqdiTwPT2ETAoSKLLDkz8UgNJk7B3ffQ7qMmcUKmcbhi7mySFi7rr29D3Ny4Hray1Gf989gJHwYxBr",
  "key31": "5n12tvveAuHJgEfQ7d8XUheEdSPZsXr9fpfrG2X9ATMjU2Ra78e3gKPR3a1uNK2vtiRsLRU8XG1zz71XJkVgMEeB",
  "key32": "2csuHGorsHK2X1qUvNWN3BPQBFuwUGydu4U5uQcSnb9Bf6mn8nTuuDGZoP5VQvYRBRTG869czM144793K9Bh7AFo",
  "key33": "4QbSHJirrCjgEYeZeniQc9xAsfbqdWnjk3jpNoJGogcQ39wi3x9Aye2pF2Pati1mhUi9fj2XZE9SxU8PATcvLqFP",
  "key34": "66yy6m7kCsaFr6DcJLMh2ktGF6vnQicFeSWWJ5f8ZMkHu2qSbuPAYpBcMGFrfeXdxMUVWuRVAvNDPwdVrt9qG6iv",
  "key35": "3wzYWeWNzLRZdLotCQuEisqmfrpNyWwwNH9rsXGRNwXseypbCAr6ydMt6BrynTGKVuxhF2WjCUAuY2t9FF6waZ36"
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
