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
    "53cMQg9z5CX93pbUaMhNNZe2DCrLnPrbU2KgWw7pGfk9wWSGQrKqQKGcEY6TrDsvxa9AaVhAjuu3jtDSa1cNctNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x23hrhEsWArQhM7QDxWHbDNVXY3esFFaCvBmEnh5BbyxjowWbF5CFhnV6G6tCj19KHemqNxwQDpCPuDeomRHMuB",
  "key1": "53NdZcirbQG8gHEMqDERuQ4k9hDAaPsPRXS4LQLanTjSLcBajFCnMpawgtHssVoYfoX2ExZ6Q67oyfXgutePoWPE",
  "key2": "BvETcAWcBquGDGprRrjMhZHeBWSbbkwQwLJmRmCZt5Dzi2cMPS8GTvQDnE9ptzUxCqv2Kmhx8QaEdGZcqn5gdXR",
  "key3": "3KwRH585kvMQmyLXM4yiucxbhggn72KLwEF1jDSmeGS87b8WBDcMgp9kCVyL44vQjnpUZzD6GGSA9w8HV1GiAHDA",
  "key4": "NCWs6NuovWoqo6VY2ASDEkew93XYwuR6fz9Fc9AkLPVSzUfEQsS45GyWRW733eUj3nH7zH4Krzy56dGxyo4GknD",
  "key5": "46omQvDEfQCmzjjF15CohwhJPYLjFmVrJGn8mJKkYMb8ZQhwmsjbHdt3es5e6Cu5KPiLjAwLo13sEVDW6GJoNRNU",
  "key6": "4APuAFocY7MUnX7NZExVyMpibtd2xJHVrEJ6Hv4qYNVMHS8bdZHcgbboT5p6Fgjp7WanUdtCR5RH4gGDS72mguS8",
  "key7": "tcDtzMpZjtYGNWsENgyKKqvkh4XiDDSyZngd3pYmpEQRouTS2yiHQqyRm9yzAEEgGBA6KqCYptHtA83dDpxBbJa",
  "key8": "4ktW19eA9esZyFqk2b35GkWuLrrqbkSftwEboswA6huWKVe7zN1TeMSyCS4Zf1Ghb2Ruyhy4Uj48o4LnntSpyGAd",
  "key9": "3rqmqg5c8fq3TmmZPTHM5mCBaAeWQxfYQxEiRghY5tU96pcgiPFarW84yWDp9GiW44N6ich38KV159Y3Pf4YcaEe",
  "key10": "4nR4tvpWcPUipvHbnjFdYxXiUEg5UC8PsA4B4X2bxxdpCzixXTFJeRyvuGTpEHjZ4bZdmfV1aRnMg6YjXRuMG7nv",
  "key11": "2EvdhycbCzm87ZGVMgcn2wjwdg67QZHmt4vHm6H13C2umvNjosg9C8yemZb5wFJwEJofHtpCfhkdrwXSRGmQVbbd",
  "key12": "48SZ9haSULx1cmYsy6s6AhvHssBNtcn8j4NAUaZZxLygnNviZZmHZ5GyVS4D41Sqx3YhCHfAPzgAXXz93sMjwA5v",
  "key13": "5RbxVpGhJ51eB2qviJwrgoM2vKE6dGwZRH9hKfyHbET1FXVXTWWt3YZmx8Hkgrgps1Md5vPj8Qt3EmxPx1ao9FrY",
  "key14": "gee5z1MJpVnii8icdicRZvr77nW6qkvFQ3Nh3uP557TsQoLuRnzeRKSU3SvHLv9LFCrurq59pkv8q5fTwq2qW3z",
  "key15": "3JaRMz2TzfX5X5dBHrizyEhA5NRQbPchKCFLXzdg8u1NSEZVym6NxXPhEnrEdzFG5WtzuA7SEptSewWeNZrDXjof",
  "key16": "4jVpNMzQedAUfb7wsXJLDQ5LF6RzTjfYo75F3tWYCaS4moSFJuXMHGyKxWygBQNceDK2RB9YzGE1HuVYThDHy4p3",
  "key17": "5A56ejGbP362L4qEM3VsJEDbmRLJLXbZBvbPZ2Fc9DeXaigNpk4VCa2dVkaA6hkYMib7L85JH2Df9vus7eYqtsEx",
  "key18": "3Dhssi5PRVgbCvfHbxWy9Rghy8GAVNCzN2k4tmy1HzL9ZZjkc2QvvHVq5un7gAnFM7fjuewBx55Q6jcCapFgcLx2",
  "key19": "53kSmWkKSSqcw93MWENW3gFoBEdawgNqDw6NfNzEpUie5itfwpQatKjfSqgQmY3oyoeaDW8cLCVEk8HEHwZnPDRK",
  "key20": "5vukB6hLh6eykmTX9cFfLL6tQdmsTVCPCTXi1b8ywWckEHPiKpJ4LcGvXRyRHQ9qU73gjjCimuuJg4YoZooPD24A",
  "key21": "63CgX5BR2RFwmW3iUE8cMcgkp8Woij8zkgjbyruiUdsbQ4ydHx2b1HPEzhxHKvfGTJH7CaeGTmYJAZCzPVaDfspJ",
  "key22": "inNq7G7LhPzd6UhmCronXggGBNiZkLUNt1Ttjsfmq9Yt4iRqt4doHHDsoAmYvYhq32Tfomrop8fyCpDu8bUudZJ",
  "key23": "5UvsAEs3AwLfsHFdfKnXKZXxSAqrk4SEWQpAerZShsqox7QnofCesSamAYHDoWikkuPjwBYPzDEu3gBmhKiM8PU9",
  "key24": "uByb9azjXxG75a4ECaeZNTNBsMUWs3LE34R8qdMcUqUcVYfmsEjRqecGoR8tzuNasnUyf9nEXSkm8K8pTdT26tz",
  "key25": "5Np1NwfF6eS17AwAitaRZXij7coovMfgKNzkpVKvzAcKnF7tEjGhku8S1iPf3KRBbAF8ocGh2YvKs4SVuxpCzWey",
  "key26": "2iL17B8YmC9a8AigKqDdtmfwNGL76cLDBUgE7bx7LSBxij3uc5J5gvNtgC2q7p5fiCP5AoTNeMscYk41zh7NAxDB",
  "key27": "2aqPKW4JppAocdV3u73vjPV75hsN5HuPmWvh2zdHHuPAZt9jxu3cVB1VDYTezUxLfLGfumpVX3Tng79o1QpGPt9t",
  "key28": "3eHgJhEhoFCcqALS69Zpr91PTWevDP7vNq1hZBrnNy5Noxwivv1MgLdwMaxyh686wTFsQDKxMNA1i99Qk98b3Vgu",
  "key29": "4kPc5PR35z45kJJGKYFtKGrBZXFKY1xhnEsHi9xcpZoinqZgwi3L4p9DgRj1GMYeV5AmqxqGqAwmwKpcBPL2dmzE",
  "key30": "JNRL3SpcwRLuW8d4dwgSuVFeBgUxqmzQFLNwa7e2Hd65Nx4bNepygmJ7nv3geHW9dHLpWsWDpK5McStWYqaW2d4",
  "key31": "387ochsrH9hpgojNPmiKWKvNmEEeevsqoZ9PEtgu9befjABpFMF7LidH56mevWwGpkfNWe3jDSTGwG3sH5bMLgL1",
  "key32": "38gACyjtEE8ySKYDtJbHnB3nL5bBkUBAkt2MVnrN6iAZ8Mz2RcUgV8oZhLezvtuqQ8oMegDLUCgCcQykdEDLbR3S",
  "key33": "JTJNQLkk9q43bVDDoSXnCG6oR81TRKWhV186exWHLRKsfCGJ61DfKEg3XAnYzkVixYDQj9t7ap95aZQpk6v4jDb",
  "key34": "5UEFNFpnZqfvqUYi5e5obkoY5QMy9aJiQhr27fXEZh6D6gNaUZiKx5C2C8W41D73eLt2AQMPAF8rtwv98pxEvYoG"
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
