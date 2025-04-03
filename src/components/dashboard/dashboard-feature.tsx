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
    "5s4qjDMPLwyxU1dbL3C6eMCk5FMh5Xm2iXUg7NkPH3rVGJhyfHppjHdxqV3LLFVhpzZmvucDPQGkoazrpk7SZgtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqkmqjYhd44PmEPuajREArX4schFEBuB88sMH2q3ujLnUVeyzUTexSBx2mKV2CPJDHEaSpWiQkYsx9m7PYnxYru",
  "key1": "3W1UbUNQck4LEF8A6r81bFQkGF8jfCYT4kaunHmMiSPkrMS3ksviz4imC5Z3ykQwBvQjDLMQbCn3GCh5Mcg2z68W",
  "key2": "2oJv24qsVpBnKr57FBUCuDssgYnD2qs98GgEYAHAgjmZjEkwKVv2mQrG91M7jp6UBvv4rKqS5soKf778Vx58XHZX",
  "key3": "EvC7MaUBkW7WdkkijUU3Sso8DDmWUwkNp6r9czuiAPS5M9ZaX67WTnQJPvTAvF6oz4H9NRVrBWsqKufs5YT878m",
  "key4": "2qLwJdayETFCXNGRoE1XS1eWP1eGHP1AvXsJ6TSmQX1Li5zC6maoqo5uEXHyCAA3U1yyoVCLihw7M5wFs1grukde",
  "key5": "4aECBzqBtstU99JxgA9zcDLtH4wH6eb4ZN8p2HpXgCgPpddJZC2VCci3rUZ2z111LDjg9APMxBv5qF2UTbg9ePqR",
  "key6": "FgBh2pgWo7181agoFKAqYmvpAe2FqfVEgM1j6yLL7iHL4rSTdzDVozgYNyor1CYgYUk8tFApXbY7R2BAD3uvNss",
  "key7": "5ADMXHvCxzNfANDFgSZ8LJmmEuAgxfQc3eBMcfd7RMKeJYSjJ7Nq7FPCfgW5mpD5kUQDsoMceyBkgonzmP9pDLzR",
  "key8": "LxzGS7aknMJevQ7kV1o7rQ87b7TxYnsbPjDHFtjWkJrKeprZCv5VpnUov8fhs8FNpPSEHSAKVHhWhFge4JDcPBm",
  "key9": "5twUPfoXJ4VzgKutD3pi69y9My6K6LVnZy3nKbMmA8Z3cZZvwJB1z3dhzXfuVAegt4Gf7fQyUZnVGN9GYJXqJztq",
  "key10": "ZwmdNG94bRsdPWpf884N7TCXjmXe6zMenmTsooGqJMjRwmavzaNEDdnVA7sKrsnC239ChubcCtLSeK4S8jR1Ssv",
  "key11": "2Pah11C48ozRkgwKwfV533aVcsnMbcBDx9acrp3QNkDrpJuLvsRVWiMdS3UD7vt6outwm2UEHjA1Lejo95UGqWUv",
  "key12": "4guWaXZegHvcPKJJk3BQezM7c8TMrQSRjNpnYnEBMrT9coefNYwqJB9GDRwwq2ZPr31E7mxu5np6qGS2TxZNUJTe",
  "key13": "XSUTWgP7gSzfuXnWfEH7X2P2gNagBxns6idxS8jCqrbfU8cUeUupQrPaRWyAHLgVRqP3PsVcVEtNGgCneF6Dsry",
  "key14": "3mejB4rRff5nGNEjv6tu9jcHKfcFPfzYQCJuoTqAAqhKtS7Jvdo9kHr6R36jeAPS7djDcvJxVSTWPzmeFWWaN155",
  "key15": "3HLUKcLVdhXo8JTdBjz4rTEmDetJ5zNQa3kKcZ9Qnqpy1rXHDojHabESJcLfNg1ChnK5jJHXw5LTDb9S1SXxiQip",
  "key16": "4e7cTm33DHixSSsqo78kLNZAoLMsisNRe1Ydx9eAD2Lx9aTQvud3kht3aVY1rosVBDa8NmEhAtaHcTCs3BVqhsdQ",
  "key17": "NvW4DLfN1hKZQM86nTYRiEZydNMDoxD9yc88duzaNq5xdbT51GNrnzzExnLdq9ZQyL8De3YLJrSb2c3edeHvsfc",
  "key18": "AqdDTqXQWnswf8HVD4FHEes3y1KiVXFQRp4vMPgrpa7MyZqp3vcanjwLWWt1odCUnXgwRwjR5ebjyLX5fCT7tSn",
  "key19": "3txUfEBfeafw1VD6KgYfnYwtP8Ho7QLbyCBL3gdphn7mFHvYhTeZAeGsRZ4XD4xZ5d4YvBu4cTSr3PpVXq7St1hp",
  "key20": "2MSQXy1pead9Kn5BcGGoNqJytPf6d8XFNZ2VwEJ9BZQj8bcnpbe7wMuTCBcsLFz5CnYSVU4EJxSczCS5FGCuPdud",
  "key21": "2sayKpviDsMwE3xgdx6eSPn4MVNzTgWQmwJXEmbu1W6t6VD9roCwxEW5zBP4L9E9mu2yEWMY8Mpr3SXP29v1ubV9",
  "key22": "3YTrFVcqEVy4pS5HHfPHL9rvFWYW3WG7ZRfSZDHMMQxkAAztiuLY3Cm63gQuKmVW8L9DTwtvVjfrSPeuK6NivwBz",
  "key23": "52k8wxJGgFM3XrbPru4nCF97YrdTgAyxvNHuS7ifGPsqxxBNcU9H6i4FhsuocUy64Wqizjf3srFwS4bxJQbqb3p",
  "key24": "279ihYAs4mHFKnxWLff1YhjeLd7UT7cANhuGX4tBGAsjBMx4rtrbbv1Gwet1ttxR9x3DAftN69QbumoPQZiS5vnx",
  "key25": "2raVwbvHrPJ2D2hK7Z1BLYS1ipmD8KZXHnhg8BVBGnsZGqqMy1zM6SzuJsT3oXSN7goqnUmhaUwPEJHZ1SzV9pZ8",
  "key26": "2DwCE1dzoSMshwcXrTwBpnk82XbhDVxTFyYSsP33kwJAWGprMjqGfm2BMgfRNXzGkUiyeY37xQVBgyH61W1v1FZv",
  "key27": "2kYd5Bim4yB4gVcTYLsRaHvyfCMogQqw9J5yNYomgG7axfexnWzsctUdhH3EqbN6thBaHpDuvwqvqr9SzPpGApVk",
  "key28": "4xddURT8Rqfg4QR72SRgd6umjq8L23Wzy2kXCqAwHTV2rsP71xVUPiPpbbuKcqpFbkYFf8pXKnNYWNmLoovwBBX4",
  "key29": "3G5Jh8rCMMuEinJVAgw9jcLif5aMfjZ7WkEfveYCB9vPMwFM9DyUNsCzeNKty6xYaL6iAD19hZJf6wMxuLdWZoxu"
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
