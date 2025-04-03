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
    "3Ev2ertfjQhV88FsWguN6tgSLkeZVXCfTWidmiRhKDoeLhaXNiQcSohtP9Jb3qMt1TLGbpiKgiPmuUXRjXv4i7wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Vgtm2B4dYMpxD4PDoduzeG5A5DkQTEzQLcVYkHF6EUfNFf1yq3asbhesRA4qkP7QXPzx6tLGdWMWzFNExhDGRk",
  "key1": "3Wf9foA6jY6XjdMJm7PqW6oaLgVWUfuXV6zBQLgnQB8EW6bJvqMBqLd6aVBLbPiAwjgXqYt7vRnQan4cdJ3uVgsg",
  "key2": "Wcc3tLLiGtShofJS96cVEdg9U4hPjcmfeE66B4VbntfddWcmAba5BvFCHvzWkCtrdfNqJa3A7JuFYPMtomYCuf3",
  "key3": "4aS3P6acRaerB1xtB7wAysW55y3JvR16HwRhu1WRRYCWgLZ8VKTmbwX29d7PhaBU3H2kWq2e4chR2MharHbTQqVw",
  "key4": "4HYVh8TJ7MkcpsSspBoEmpmEc3C6NmwDZzP5puH3J7firRk7oNMiVq4bxkSCvMz5iRe3pJiNBP4rPxZdgYaiYqSa",
  "key5": "4tXY3RUdDJDDkHRPjXCJBCHQEodQjYeiHtXFuBzCvipz7KSw5sJYGspjJd72iBQsmLc3EeffajYx2bn5aUzSNNoM",
  "key6": "4oQeKaENaNcR32mpioZz6Pm51GvaBMJH8BULcjRnvA8zBC5BsoK1YaGJnBRPRZ4zch9PjjDvjU8tk2Tjj6im28LW",
  "key7": "5yCddCCu5cYjH2bN8bH9nHUoMudt3RxgXCZtimGgao7NvXq2MauLJY3UTsFebCPsF3BwAcY4i75u9cXZ2Y6ibEZj",
  "key8": "zETMEVxDDe7rUBAstDTU5SDLGetuceDWx65vMfADa1dDJrJvm8izjYAFHGsRSiKyJ31kptrQhZUZPiuZZ7svRA4",
  "key9": "L5EtRB5h2YXcs5M1E66m4ieyN65dKhNV8CxfPUY3k6WDHGAeVtGQfJbLcnmLv23nrxBfnLxX6738ShwUTsb2uHt",
  "key10": "2h2x8zPA5Ef6BatNLx6s2CFjvXWQ8UXAq9Z54EyxfCm8sEoDAqNUdft6M5Ro3h2v2ZQarGkXKZpyKDCwobTnswCB",
  "key11": "65cAM3ijkkb9PBPXDx83TcTrinfs7A3SRSYMFpaLj1f1eBkjuYEbfqLYQVsKrHVvdB6SP9ZbbC6pUm1UmqdYkou5",
  "key12": "2VWMH4jdUVqUpbuE4GsmpQRZbUBkKspiDdLw6Y5gaQ77C2UwUdFAy7hnBURaNCMmhviwBWQYLbgvKrebhc2BzVrU",
  "key13": "2x3e9vj1NSzanScxKXJcfT7P14ypBtGWYZX1xREApdZtxj1CGFRfbdgRXPxUVAuscmkhpy1LpwkF4KNfkDww95tn",
  "key14": "44WvTsHkqJ9Ypz6QozCnGAZxqXRiGS8nL4cdJaAQ2VkATYNZZoChPDbQEBqwAZMryaut1GWUXXCqkRugoLifvwy8",
  "key15": "53JUs22PB4XVuwu11CuHeF19iCmSd9S8PGDmfxDRaeMUfk5QNN2nmzBT5VfhG7NfHYwaQyBnWfUHNUgXHthJxe2W",
  "key16": "3VFqeFjQjKQYZhW466vYuchcK7kx9sx2ANugAETFyfkHopzYQfUJkipyDawje6DTkGNn63GBb96yxZvuXbGKpDZ7",
  "key17": "61vFX9ki4qkFEmK9s6c2gYgvoS8fx4QQnkk7RH9FajR3nN6WReSLC2DbEC8javnqjQ2NmPx7aqPPHmTmvfTGhr6y",
  "key18": "3cMVv9uV6gY9EYh7fKwsjXbMTFpcXM21yv9tVEVGHU1dW7Nnijd7tLid9pYR3mBG3DJV3eDPo9ghDEtHwKEjNGSZ",
  "key19": "5uD6viiMXsnZvU1aPUrTRhZaALgC69HvMjfZLXDZqt7WSndE1R7Pg8xEVu6FZE9dnPb6oG15q8Csjaru1h2rd3nn",
  "key20": "g6arwkGakpAxd416TFYvdorhpzrwvgfoBpa6TBEetVCTwPkDXgfFwALkVcN2hfgebUtSGDBFtTR3XekAFcWFFrR",
  "key21": "23or6RaWDfu3WcvxQxTBh4oanT5usEiQfx2BZwPyH4KrzBSs4hbbYcAgv8djBcuBnsdigbWJ7etZ2VNU6wALSSwf",
  "key22": "4XJjYNeRvsd7YJQRF6koCkypoKPobVHyTxaHoRM3ytceuH2imp356WmERJAAUqMZ3jLpMMGGo42YmgogSmeznbVP",
  "key23": "3Yku2Gu6sotMfNjzntRZFPBKi9Ly9EmLwL3uJD3tkwjZxYL61rMVHDJpge1xYFoHGJv5PN3Y8E9tuKsqtfZ1pvZ4",
  "key24": "ojqbj5ttdPAZ2gDCuv5Etm3FtjGWbRn7QsTBQQoKzGNU3mYSBaGvaL3ayrjSURQLGXW34QA6DNRpDNHA17ZyECg",
  "key25": "2gx17tmGDy2ucMXmB1ajv912QZq1ymzzrVW59gitEimUvNsBfi7ZuJbJXF2auxDor1J4gVgMKpw3Y6adwq2zS6Fw",
  "key26": "4gvPGfptyWU7FZnFTonDrQJaDhD2sXvoAy7WUsnHdhtVoAgLEAbwu3itGvjZ8ushQu32DVrk7AMdkNNyp9oWF7LL",
  "key27": "5wARiV1madyY6kmydhwkogzVbY1jndAKKL9uBp4X2LMArcfPCVZp7vcgqVo6PJmXJQA9XFV9hAdSi8CPeWcQACyb",
  "key28": "2u9rakovpotx8wLt2Er7Kcxfen38Jp8CvXSWUcyvsab8P6DqgMJ78i8VRbd1N6hudT6rUqxgKow1eEf51sq7XNmT",
  "key29": "5jYpDuPWdtCNPQvmyMg1U7sY7ENHP14zsTZutLpZ6KotMn7VDBCqFxm6H3kGRkPNZnPSu9wH38FNi4DR813z3zty",
  "key30": "3qhwHPeKxdFtT6u3KE6gbFHBMJSqkG97MSTj1XCJSKi4w1bWaXNgdzWk7VfEUphc4qutt9YtwhMr32prcF4Lxh15",
  "key31": "5pHNcdRyP1tVQrBHC77XRysX7H1uHuRgPJEVAvu8spP33phT1B9jDNVj6vaiq9a6VcVMGsoJXAu15Bj2Q5fVPrrP",
  "key32": "3Lq5kBTF3chJFnUkn4yrSzGDEtmd5eijbRZNJ3C4hV9ix9DuGY8ChB1vnCQWHpjH3aazv1DsyawsvHp5X5Npearp"
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
