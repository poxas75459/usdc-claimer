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
    "2B5C3cNopkw6LGExF6sueWpyjTJHcPF81hNsv2fmWqQiGvzo1YB7bWAirizNXyyUcM8LPcHBibp6NgJF5xNkGpah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxEgVonAgYwipa4nsAUtyBcnNcmeMt6zMwjT2C8j44qFT4Jm1zosEWRAgEATJtysj5dr2GWb2FtXJhKoTnCp1vY",
  "key1": "4Eq6JAcm2MR5uGY3SuurJkBjSrUTwHaT25Ku6PH4UvyzDZzcRDAEAyYf6CKn6Y9F6rYZouGzaaUVfN6FEw1fyubm",
  "key2": "3KsaTHGeftHe5HCr2sWEpxm6HMUKvbn4zTEzBHZEPzs5ZontMNKPpKQQPfm6PboRg4a3g4r9UoNonZJiDirwkAo2",
  "key3": "4PrxakYJfn4raAYqnrGbJWViydB1PbUJVt1nZNDcaqowh33G7Hi1BLA6GC3s9ShxYvgEiRzm4XWcmYEUgBqpVvw3",
  "key4": "2Lyz6FWF6TkeeD9N2fsuqUnGLHmqwcSkRHJZAmpqwcZ4WUxRzEektkAYHiKRFvPfofte5rswiJFH4P1CA3ZwCBNt",
  "key5": "4KTKEpZ4DcnnKZ6fis5H4HdWSSBqqRSQR966SHsRNBQ9VcDCtcHHe1qGTvLPS7CZarhGgVGoG2qwziXXwph722rf",
  "key6": "2SNbfWW6GEGRG6sQFSPmaCU1irdbKg9MvcBHSEZVsEbrDUrKJyFPzopnYXaY9y3fMD9E7ey8gk6KoZgnggMRVcg6",
  "key7": "3aFoo39TuaE4CtYnjCULkPCeTnrpaBT9ctC3dVUQ8XTkoBw8gfLCxjpYpgguMSWT2tig5e2hQgXyoSMHKKTHWcxE",
  "key8": "4ayyujNLmhrpGQ971jNb1zEAHmpBZiLqpn11J4cqpFBbfupAGKqKwAoPk6YKwQW86NJcQ6hAWxpVGydDTgK5apJV",
  "key9": "DjQafZ2cBJWv9yjKg8KkW7qSCkDmwzNSEPsNHZC9sjgJ59cBDZMi5ZYLGhGL9BL4Cgr1cmuEbSVSUff35PapkC8",
  "key10": "nZmJYXkdvW3gQ9YT6YpaK5kwc67A9zYn9oZccbHG6CE1Kd5mE4mbF51oNs1ZbJ4f4BSBq4aezQr7foBF9kMbWkr",
  "key11": "4BYEkN6QRHdsoZ5etBxit8LHBsDVtBMPSQWPi3xknbQXmfJAnaxayDZNwXcXhYP4j7dgKPE5iE7zjjLanmiuPDTj",
  "key12": "2bjNsA88hGuxHaKcYjJ1Zq2JF5uMZrqYdSnPUd7dkTtVQfm8ecXDNXUGjWqpcAxvoCaJWXfw6mbaTm5Kix1RDwmF",
  "key13": "rxgyC7HujZ8c96zUMirnYu7mqhWeGnU1kb9en4xp9Qw3BSHwokGCd1nVkanghAhGrr8BZ1aXEd8Whe2nriX4iL8",
  "key14": "5e7dAaWbsysFKEJC4qMhqtjqcVQY184uMh6DJRxSXmEpR23sZ7vHUFMTWqMJEC3q1F7xT9hYLWHSfoYyZeWrSn2u",
  "key15": "4AT9rqBCqP2RLrKgdBHsB1wHrGD5WhkVVTu9tfa8ye7qU6mSxqBXWzqYBtKqk7NZTXH7LPFTdrjgYts3p3PvKXKb",
  "key16": "4mFNZLsfPhu4wGa6jH5CDN2MBmED577FgDMA3s16qfeKjptSaPSjhe9WJvtU1v74B6JNfNPd6NTzAp1nEjLeGMum",
  "key17": "3vXfZ1qn48pUjecUeyhgv6KikzkrHy1qJZdCAmC3BuLX6CwxTManz93yFXnrwxoGavFgygtJ7krDUPeCYi6hJRhs",
  "key18": "42qn3owi7TQpRL54NavbXhyCyHhXHMg1CekGWb9Z4vgDBwwbythLaFDUiVPWJ9AaAyyJfL29919Q49WhDWhDUpxi",
  "key19": "3Wyoa7TSinspAL1C7McALQ3GGAJF2RhNp6cMVWafgTwT5Mgjr6HRK3fc2SRZfSSRiTYuT5kHpwEnPFKdy5uQPDNB",
  "key20": "5Vhid9WHdeGKqxRe52VThvPqeFjxNpzu8NkAiaEEkvCerFrXKURy7zKdaigT7zUtY2qrXKWjbmjDXDxFyfWy55No",
  "key21": "27xzWZoGWm3E8DX1rg4bvC4XreBjFxkq7jMoNcSLC7a6HxTj1nohMZzfxZTF3a4DVFLF1HrwoMig7XH7YZQcq3LA",
  "key22": "JLh93sWCd6k7rREgpVEbQ8BCVhWBhdARtP9WJV41uaAP2DShLpw8mtkmqLWR1fQv9UKkLwn1ZqVkU7ZtJCfjZ27",
  "key23": "4vD94VKE2jpZYxA5SDSjcpTNPYzJWoAT3DoQgXkd3ykVFuJjNquAvYKcdVSc7Xs26LbEAb6MgEjVoNm3nAKHv4UA",
  "key24": "4YvJqwKr54P2nv6WxY7BvdXDAadNr7tz5cKvVSCGasJaow8myoeCzjekquRTH3aEQ5euynLKQgCqS5GJSmSCAAUX",
  "key25": "f5SrnDkDMW6kxG3oYomNdKHAsVgXxmE35TDAniG3hRaJ8q93skDVeoYNpaKFopN65W9khvXDhu44hFByCorR52K"
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
