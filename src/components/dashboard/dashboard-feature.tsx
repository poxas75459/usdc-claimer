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
    "4d7bTX6QPbEp76kd9D9PkxkKEfom3XSpjvaRban6fec2HQAcJ53QHtKaDcDetho8UiDatz58UuvTJggoTzzSwc6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nDU3u7gURzQMTAWZN4S2KPvwvyioezkpdhpTTqRdN6W2srvbCo8bF4yDCBXWqZtAWcGrxbvk3G8SwDxWUmR6Hrn",
  "key1": "42uCCn3WGTNe8shcNcDPYmSteqbtuEgKdAXTdaaad3RoBTfrF5aB6fLMgf64YatroMDJYjVd3USUxbPfZToic91f",
  "key2": "3mDvM2Y5Gfkkcj5ALe8iJsEQDzkJWAh16zCRNhixa4VJTjQNXCuiapy7Be5PhZ8GtzNHam4AuXsYuwfkHCw1GRvK",
  "key3": "67TtLcqWCiKsVCrotQtBpGLCQCsE9WB2eVTNySrHUJRA2csDRpfQrXuZNrxwzHcN9KCQxA1fVM5uLBH25yg3ABjb",
  "key4": "h76Jwtvtx5pXBNWQyJxRPayRoGtWQBLXEN8xmwByZvLcBCnb6TDqeCZua6uagAiSQcyTC2JTKnujy1PQrQ3NueT",
  "key5": "2eaJqmJfZK1nvxk23M92s5uqxr28Gbti6tt632vKET8LQapJ42RkN7Eu5xKetBEW1UzuepsZp19juikT2qNyWxNy",
  "key6": "5X8abuaEaWgYSa8Vv3jyJbvZ6BqysmTWqmKUzXJz9xrYU2AhdsVegbeJCM1kAsJ9KWbKA56NDBrnM5YShvWots2d",
  "key7": "3xKLkcFNwt2iHdMfXDQxmu9nLYsvqnK2Qa2VFFtLhcyDk7PjPKsMhJuKBPuuNuw8dLdB4SkVToj3M6nsgPiQ7SG2",
  "key8": "4FEUGmRX7ytCGE68SdRLGTbAn3NbfeTiR7MdyfesnhzmCh1C5nt26rJ1oFhkinXvB7gGQNwuVmTFVxjThHtfoAFU",
  "key9": "4BqjJ4HmByc6iE6SLxyAtzww94Y1W1b8cX5yPm2EN9j82CSdeVn1Uw8Y5Bh8BiMrFUyy6XHMPmKVHVwvLjWT13Rx",
  "key10": "4j3UWzsq7hNVmtRumgehhhDgVdJ5QD8VXxMGs9RJq87zYW44iDn43TKN7wsKsAw151iJ2Y1cUhUQc8GapdLqEdiM",
  "key11": "LTfvHVa1TWz86jNHJYFgNGE8pEq5EJ6mu9uyGpUDwoo6mzmMFR7n4MgNynNTYEMn1NvyT9kFEafpSdjRkbNEkZi",
  "key12": "4Tv46JqXzfawemef86wi7et6JKXmyv7g286NE1KdtbLzrYPewYa3Ugfp5CCDiSC62n4xL84kpHFPDoFA9Zm3GkUd",
  "key13": "5iYPcxWvgY3CgTnwEbSFBRe21LJrrpf7RWuGBLbg953UhmiHYfjHb6uRVhQy7TcNYb1LD8696PUkLCKX5zfLr73j",
  "key14": "3uCXzrXjdXm9gfbBPc2qXLfNer2QeXTNiUDwPBvatEi4N7QwiC7UEjpQt7wJ3Q4Be9V9WB2LHxscjPfDFj49P3fK",
  "key15": "2sJBGSiZbdMJHQ7FonPgUnDFjV8BjDKJSQHZhEwQP4VtKGCck7o9Xw3r14Tm3VW4a6P92z6hR3ozgbi76hPuSpwP",
  "key16": "2TYNFKwedw2H9gyJ8GZtLftLJ6QL55PcnpMDprX434UREmrm3HePMnR5EteEpddiCS4HcoiauDH3u3qxWS6WPRKh",
  "key17": "4MoFZFuceJCUCdqbEXnC7PDAg5xTDGSWmGhptbnteM82iYCrUWBdiB6cgGVw6fMdqGur9bPvkJJEQSVjXUArFkvR",
  "key18": "26rN6A5Gx8YccwtsNaGCtMo7NmrNMDpsntBYtUSkJbeW7jfUxdtPJHssr1WN1nXQNz2wqQ5H2iazCzBtosJ7zwDB",
  "key19": "5Wt2tAdkcGnFePoCak5YJPaWA7TPxAJdiAyifVQgceGw15vy5FUaFMcWpBVLpWtSmdZMJFvM167nTG1kzpRNr9Zc",
  "key20": "5BjbJzb6HR8k5tVc6uy443fU8CFVdm8MnfkcJnsXfkMnohaBBhNprrzZQZ8bQ74ftus4dSBtdndTtaxNy3R7fSgU",
  "key21": "2b9HCY8KTKASf5kc3RdHpVcRtjgPLvTAASLMNsXzw6cWSNEaKWTJMNUeaTcyyqze4vosaHpHuUPHh298DayVecfM",
  "key22": "5Upmau3iBDqeao9UPmUt47FtF6VVweNLpPw11rGuxoWzGdK7n65VyjwtndTEbdb43ia19BoSJkLeT164cLrwy2XZ",
  "key23": "37iwCaQrCdJbWTU9NjmPHHKKWJ4sdGs7PLcC9QimqWYqGgVb8Q27Xbw7uW64gZtEtQDz1m8CcE69piY2iehFHeLm",
  "key24": "WiUCPRNaLqDgo9bBcs38sEPbqS4s1AX3xX3gtLfyFHgNeJXgXozsNA4kb4iJZMqvyUC3EuFdPMawQjquL5iviiN",
  "key25": "5PbKjjdhzEJEjDSr9h18ZBTSdDnchxj6H43Wf6XQ3rLEuAzcDVM8PJA6qevqL1XYvVEtfrg6sMMiAYBzJbVm9CYz",
  "key26": "4TYLmxyUDUby42CCyR2xKfey1LqGLvnc2bszQQH1z3tE3B75SgauGT5srNxrtTmmFGyJX5RtvXW5yYjYH8TyR6eg",
  "key27": "2Mft3SB6us2hB9exRunPRQgVsuowYVffpcKZGRkmeWZ4JqtHg3rvH4YJyzfavF3oFBcBGiF3fG1CzVKDSmTghDyv",
  "key28": "4YH2YEoY22jpo22zqmpvSuvBFSyhZi6r7B4BBfYoQePuJE89Q5b2aW7Vd2io3jKMZZd49chjRp2VekWjYVYm9RQr",
  "key29": "ZgfDxHVFdGYkY6sgPkv2cC4M7JZ7UH9N3ixRP5cAdEXCNAzk4mZh8PBMz57HMFvFJPi2qzATeSk1rrzVE8LXpZZ",
  "key30": "5xxtuCv72xCjhiQhyEdsFsBtXXPM4bENMGbFoA8xEZwMpTFNPnXDWsKQPf8w4rFSppqUyPcUGighmWtNA4ox8ERB",
  "key31": "38WCZFQpWzY7eLarTRRKVZfdnpKNoihVWMtzTr9coBH2msyL1AzvFN9WsLQLEkXbK33LRPKQVV5EyGEYR8qayMS7",
  "key32": "5QE4WGFenQeK45b5yLD5YQwZymjgHaSQevpoMHjkoxq8hqtaScB4y6jxuEAcrCRdhy2P4JW1vCU6r71QPRcDLBc1",
  "key33": "3nDy3ckRZ1NfQa5u5fp7Hj1WUsRf1TPoDNt9bSdYwXjHaSUE9y5afiBSJg7KD5uEHogXGcjrvBR8BrpWzpGtLDte",
  "key34": "5bskXgr8rHkY99o1oYC3hP95GdhrA1uKKJn9hgZPZJhk6RdKko7QrTdKMyASSbZaDWP693kJsWpTemM3NiLYh8iA"
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
