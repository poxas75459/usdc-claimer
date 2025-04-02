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
    "2y8jNzaGAzFGFC8Mqr9nrrkJp2E5Ps9roLogiqT5Ma3QHfgVcSFz2DCNt3tMMHVLpXptvXZUcYUPUd5dromCS5uP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YmweAXHBvXk84SV2T5TYz1X9xJiFSFGK7gKDSQWEfuwn4SiSXdPSSwrCLRKU6ypjvWT3PwUbC5oafAP9sMwWSp",
  "key1": "2YwitSSF4C9Ei3wx5CV3nerqUjjSmn34bcqVaGrtdAzKudirA2CaN378HC4V6VJroQLyohGR6byF5CgW6sm7L5Wj",
  "key2": "4pUHKiK51zvqNox5o6gewQVLgMHzykhdoi7ANUnhhzsKa7j8XMoazJEEmveG4RLKn3bWpt12j3jJaj4xLjqMFHUp",
  "key3": "5PjuMLAu6S2nr3wFXLcz9Jn3sZBCmqnVhP39FjDDJDRXiP2R99hGQDgbCZ1bQGNnMdK7wRWRgDjEZMvnvTDrec1U",
  "key4": "5auHYfE3trm6VkoeWQZy5kBjhLox3VUHfMfK3QApKB2XQ7ZVVCQBRJT87CYgiFL3hEAb35rVeCBG5gig83vHijW5",
  "key5": "5mmJwcpbCKBJ3Fm7Yja9rcRvBCxogYzcromi2uRyFAg2kunGoftvpKaUhiFhSsB9TaZXur1S8HHnfBcLRewu7N2F",
  "key6": "4K7pcY8VWigbPKPGFdKQkPKoir4QC9mTcqh8oXcmF1ShFT86hVeFb5Xe8eCr9T5cGXuDmfK9vDXHc9JA9MdRa6bN",
  "key7": "4RciEUpazMb8bLJWtU5jcGFxLut6mTpoHThh8gev6tjEXey4fq31pvPCbfei4tMDA9zQnbd7XvpRfAY9YpTfmcC3",
  "key8": "3UyXfMWbDNUo5CYXNfQWpr6akjZ84hp3u6EozXXjtmaZVcvLaGZzUXrqiJs4MKNhRgEDKi8p4TV7tegrQXMthESE",
  "key9": "2zXH4ieogN25Ph2rMkhp5zLLLh29VtfDNGgwqhnVyu1NZDQ5JPo8Aga4ZHJy87oP3mizC28CMkT6tSkg2iUQoyNs",
  "key10": "38hU3vc2u2yfZ69y8CXhmyYt4KdrawiWTCRMhT5EzGssNwDwL2CH3K7jnXw9nSM4PzsAMKWDAGCnxGnCEapsrVeR",
  "key11": "2hGUMH4vtfdUEeC3nrveXNzi71nrL4igZV8K5jnG3osGEt5fUDnFn5nLrAe4TTPi3Cj1TGNTfE1KUKxzbqEeTVYA",
  "key12": "3EiDWxRZQaBS3WfwLJqVEjqg3mjqW3EyWexJEknpQ8CyvwCg4HvzssVDi1rRaEoUNb8tBoe1styVSHMZYPrC6SYx",
  "key13": "4r7kCJtTYknC4jrUosoB3M5gBCwTyBZvKN9DC8yYVxxjcXPP4SXLrtq51c9sb2Y2nwawZB2EEzGXmB2rVptwm2Pr",
  "key14": "6bk2UmWtgJRvYUbzwd5A9QTcXZTYnebzD7hxYL4zd3pckmF5Myeg3owYkStc9tn2PRMYyBF8mHGkWAwFt1RNVE1",
  "key15": "3a8XoKDvJiAx61F9zKwEGUTtnjVgfQRGvsiM2vuwDMXtdam6YxhwhrqSN7TVhqsaNEWGTGioiRFTqyW36FSmWXAM",
  "key16": "3nTnxnJjEm72wSVoWMPjrFvbXoiQ4Azvai9NdJmhVVpAudK1Lywbcye3t6wHu2azHA8qinstPhbZmjZnEbBs1W4b",
  "key17": "4dAio3o9fN8jJ1cC72SXzTR621TDvWNMDixAgaYbmxEMtxfMSYe1NWacvvhz7apNn7gW7Wj8zqt4k5c1qmemru3",
  "key18": "2nrUeG7ybAiPsFZ6kWUXZbjqchxcdpLfgXgxw8JsuGgLTH1MsKX7uUfvjqGwC9xAfSEijBRAuRwbjJNXJxft2bGg",
  "key19": "4yBKhZW76Pb781kX8Nde6KnBzALMj5PegZDGjZXBtpFCJjaqT2UrSLtKbgLoYN9CYqEC57ngh3PAqPt5qj9vd1Ya",
  "key20": "3oWX4HXKhQeaxTJjoMAkubJZLmkr7S8xCuPKEXyZhc5rMDkPXFWJSi8VebEduxfHhEf4ip8LfgrMETmD7wDcePV6",
  "key21": "2G7JWmtLCSNKfjoSDyM9tKHEZ5dNYd1EkSmsnTYKFMaH4UmkNnhP7NVqLcW5sERKtLzxxeegnQ6LxmrAQcjgCEei",
  "key22": "GMWNKgigcWoxnSPHtk43ytgUU9JPbVzzNH3cNzP6bB9Le8V6jEHAqKmNsEX12QFuc5rnsB8zrxMCNb6m13rWZpS",
  "key23": "62NWTq2hgEednn4VxfYdJSoitURoXxmAjJ34NVA15iiXhd8yrgkY8kCA9xLbNCrrkEELdRzcb1LbHte3f18zd4UY",
  "key24": "4FpPX5t2HU5kYBNyW8rExP9anpwXx4Hj8PLMheE8mDyvYKCXj4Py8vozKuA3YPXvynG2Nj95TUN3Hr5qvxgCnQFT",
  "key25": "5DHG4QHEoTAu6QcdBLdgvArmyEgCXv93yLy2JTGaKHyX6gykeEgSv7VCzU3NvwuPicBffWB7weZ6oQenjLsycFMU",
  "key26": "2sYGpxb3vy9JVWiMEZmxWRc5pitzFJ6enqubvPkxTCgBmyJWeQ75mJvJLRs9LY3DYFPGtAXf9DLy2fBMWQeAC635",
  "key27": "4MXYU5Pd5CVSkdFjPLuQLWk93KVUTGZX2WCz7CE9XsxPB78KxT6k6Sghzu7b3TQAXaFD83btYnjmg4wa5QNafeqj",
  "key28": "3Q9zab1fVuMVg6JRtQVrjmxPTKo2PQWVJSajsZVpYY1FU9vGh5YTaCxK5dU2YtJhCDnMZqvHUPMzjXT9b6ieTWLt",
  "key29": "2jgbJ3rYj9ouJADuyqXCnMWxiysKegt6f2thnPyKet16Lff9LM5MtphUYvt9sZuopZHrb3WU2aPTqsiPLyJEMvjG",
  "key30": "2cgvcvB98GMmGq5d1mb6BkXj31P9r9rxiMBCH9tp2jXqR2VtkKRfgUufKQQLAiFuuafokKuK8nUZ3z3V238GGm4S",
  "key31": "qEcg1NCCtFDLsysy5LjCkp5fECjBSCUy9h7hpdcQ731ekJJn35zJckv3ZJR1kx6YtR5SuDQPxvCng8z6x2ezW9h",
  "key32": "3QZ6UXYPPGMWzxWQXmMkuTPfxhvozFcVuqAVsmeEuaSb8McabrCDM4UQ7udMB8VzciyqSGFUxpSGqwYqziMCMMQv",
  "key33": "4wF7EgGkSGSKWDY9oMjw6ARDSYn1CLeP5kRgGFj4gN6AEETGmzP3VBiRW3GQSrw5GSyPcTc9mtb91Eutcj12MNGs",
  "key34": "3VGvymzsNe6BTnJwoGa7jxvg15z1eHh48k6obiw492UGpmWuKmdViBJxLXewQR8YYnmqqfKeRnQzYboDrSMRyidv",
  "key35": "2549zXQ5d1b1JHRFqyBGderDEkXA6pqzRLHDrJnheZaqu7D5BokYcvQKvi6iC2Qn5Etj1fbf1LZ59UyQiauwGTxW",
  "key36": "4QTGkHLTunLsgWZJxbEd7DxycxEvD4ScmmTGKK6Ps2YGQQnYjihxmN6zS27h6C18KdkVvyhe3g4rtA8LmJWiP8sN",
  "key37": "2oSdVoBMPhph99nd5y77ZDmwwgqJwQNE1NPfQSNk6k7Ma7T2YaCYdsQKxcjwA3XoTe5SkUD8xRHEHCJtiZy35Pky",
  "key38": "3xJH26DBTHPv1NPhEA8DK7699YafLSjHUdRx7e6sFm5uM117Ld84tg75p6ggauyAdbzdB47NWB25X8iSThhjv8uu",
  "key39": "864izKQTdviWZ9w3f71vM2WVJ4roeGNkgaSkiqWo8xpxfDNsEXJLcjtRFL3an2aUuFX1WGqmpdR1xvANXA7RtHA",
  "key40": "5Xi6TGRPrPtXJV9RCtauUgQ1vXWAbJmdedtc7krC9Smt5ChtukthRQmcmvuHYEpzXwfniz9ATCvxPgTVNqZ5teSw"
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
