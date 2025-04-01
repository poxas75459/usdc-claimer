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
    "5m614qEhEXHZnTxemMqiv7MDmfAQPnq4t1mjFiF3KkDYgaVNaXaRrqRHF9dGnyHZYbKisfJvtTYBTXwpcgJjcxfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VcMke8GSDtqFgf9jWRyuhXwLQ36KFus8Rf5UHaoCVMYp35dUe7VtMCztyJ2UUT71re85hyQPiPMsL1YoPcwzUja",
  "key1": "eov2GK7AsjVbzRS5o8dsjRfrvkgegT5CNk3TgRs8DGynPt1cAsRMR5ft13zguBAtRJwxfv2oKq9r1to1c5D4dPF",
  "key2": "2zVj6FJRHvkJ2ji3mFY1FTdFaVKUtAe89UaiRg5iasBbJ4kNWr2n5zp8ySWbxGTaLFFSUbzPRn9PheVncGUbKGcz",
  "key3": "617QAVfAW9ZsMDFfnjrB5vNZm8H8MuEHXS6NEUenvKztHdtRFPEiVgWNLHWWDvBtp28dgdBxPDBsd4scsXDjPiqj",
  "key4": "3Nw1cbcTqCBQVrjdtLurKCLtm2roEarvc9TpmZXWjNrDHqwpGn7rZoNANmttYt42ETMFe3ET3VeBMJotu5KSjWTP",
  "key5": "2ZSruVj5pdwR5uzFg6PqHAwEVpNbGyKBif5e1BeyVHgomToPyyUpgg8Uzae2VuuGPUrWaMC1buUCoHktKbP4bDbd",
  "key6": "SXXjWU7U5Vgh6ibnt9TeN2hppon72iww3Bc2LrASkJxxMR6i7mVdwxZabApKyx6S7fgGZgosP1XGsaqUBkmVfxA",
  "key7": "2f3jHxBSkxBPjWFPY9e858C4GHdeLjTV8vBymbYinX2xY9LDfWz7v5xaYVRq3TGDWXXXvhq3v6S2ikc8zGnNAFdP",
  "key8": "UDe68AvCceiVXvHuZFMTdZRsYXuMbQBDZttbBn6qkG6CuotZiqWKkGeDBtQ3STT9CagPgsaUDdu5bY8Ss5JgmPm",
  "key9": "RGxxNX7qrQr9zJkLtF2Q14NTun8hNGv8VaHacohGepSpx2YqPxNjDmRxrshBcAsQiMaUHmks9Tm5NXobeb8WQko",
  "key10": "3z2XdmBuaUjZtoNFTV9xMVfPeCwy3Gvv7ViDPdfdgmwMe7bcttUmcbeD2bDZmcBjhmcTBX3GpaaPzvUZqtivDsRg",
  "key11": "Y92HqvybqRSdbh7ZuHAgGCGZABdqN8kybj9Cnf7v6d17NCFMoToPbsDKQHChFR1EtA3BnRL8WJZemQKw49y88WZ",
  "key12": "3nXYTumf6pz7MVHh9aNvLyTmAYQ6271AHB4RvYsNwswaSKxVZzuGaKj3sCEz1XVUCvSgazxSHpxJgBDdKxbUVea5",
  "key13": "58Bq2hj6JtRKJGJ3CaRmx99acWHa7f9yzZJsBxZoyChXJFxxCJGiqhL4DDBm7pZC1KSUtPJm5aPVUx4bzs6wqvAE",
  "key14": "45QPm2roYFa9NLVhMnaB5zX4hiL1QZw7ti4QMJMKwDZYUz19E39zDkE8H7NsLNERz2ehnG37uJbqvGt1aT5ZZ3v1",
  "key15": "9cerFTLH4pe8wtZgMYFszabAcpWzHDoumKhYVqmSZ7SbUCpE3y9Bk8mvzK4NeSFxmzZag8UefBYLWHjF8vPVMR5",
  "key16": "3S9QMinjwZP2bQaJTjPSvJFAJqyQFi6WdqmAVnz1jTNXmAi4kJTCsSEHUpLtiwN9EnEjPCKvEWYYf9UqwkHKGudv",
  "key17": "3rKS3zgx4i3qt7L8T7HJWbbVNgBFxTPfPf2xwfYMR6fN1QPy61PS59bCDSLivJVJExWGAPCmA47EWP3u89fTB5zX",
  "key18": "2E1kTbAHC6mg6khFZGG9NWoGDJ7bunKs1CFY547jYWEydc4SudsWHYvpekycJHJnzH8UEH6u5VcdWiGFetM5gyMA",
  "key19": "5TwwT3y6jxQJWFMffEKAyixySF9RjsPZW5Q29ozQ2YiVGxNL3HHwHkuyxyQwfqzavckFp8Gdqaoowzj7hVhgLoSD",
  "key20": "4QNq76NgknxpsCgx9FnzYsGW8ZwcSMcUTgNN62kxVE7fcsUex16X9z9zdvfXn2EGGoivhmo1ERwoTPbUut1Zf9D8",
  "key21": "3phQH8fisZKJqE7JkL7x5ybgfeSht7JZpRugWJed5Nx9cED5cN3y6RU2NegZGxEzDR6N7BY45RVgJRHsv4rmWcbd",
  "key22": "BTjDsXZSWwvkXe7wAyY6p3a7jgNNrixyKnN9H4jvNJsgfqW7kqYsprPambig4hUd5EiPJeP1ZcM1fr9ivu1Urxr",
  "key23": "2eb1c26mW1XbRmmWyh6hB2Wn7jssDbzsuXKQPR3FyXUzBsFAgeq1zkK7XN1ijaX7qb1BzX3Hmj2dyYBAonyb9fEy",
  "key24": "55cZ4d2oe8xCndNfojkqxtZGWkPowEqhNsxcVSkeSeZtrB6UGWt6NbfRmguRTFDaRAXzYXqw44GUeRLYEATJH1cX",
  "key25": "5gsZLX8WhsBQFaJHrKGcpcSJ78b86cHigDXRVadwNobbjz2TmJgs47T4zNakGWgJD47cjL14ctr8vtS8JRmuUvJ6",
  "key26": "4mGpFPb15PLJVDV5WcFEnVX3T4r9i1NvQZwwhwdm4Y4gtv1uRaYxCYJPg7tENQdevJU1jwBVwLupgZoWM2fu14Pe",
  "key27": "fzxypKDrE1k6vsuZKtMfZfgcERhtMpuV1hfmiXURahVXTqkWf9GRfZe4qQXUZmUSBf1zjwo1vg45PTFMFrctbFk",
  "key28": "2KsMMTSGQpLWGYmrPZbufuK3MvM3diHZDVjJVJswD6TLyWavcdEBX21YBQzCTEXx3vDMc38GqPJZGs37UQSimtP"
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
