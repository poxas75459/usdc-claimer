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
    "49BJRUz3e2cKoExCpB18zuW6AA6ofqrMDJSuLmharyq5kfjRsGDWXcZf8GbyWQF5CaPpaZERR5GvLoZs7asXe8dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q7Eo9PCSFJFyUW5Vd1Ng2m7XLWNFK7hLoNnXEsT1dVFEzBLcV8a6BdaanH5umN1cQfNX7GpoFCZ1CtJV53hVn9P",
  "key1": "47oKRKqSdV8iMu4eDDFFiGNu5ucQqxN3tFUjqxWgFt2dQmXyoYUy2NB15PjbkkWTaps4ZqgfieWJCUwGpNduQQ8a",
  "key2": "2fTXTDxdvJ71V7sFdiDU4yE4aHGx61CzehnaPpsdpGGBf3wzFFYiRYBJnNPgrv8Re72KqwUneXLgpe9Vu3ST5Bxx",
  "key3": "3QV4KuFsKjcm9kqVV7brVbAh8pWafC4BZ8GjzcbAWKtFbFbFv41zyBLC9V2MSdurede2gfqhRZeiJr4ic46B3RTV",
  "key4": "4zhXUwaPJ9CDzwbXPGcAboiG3Jtg9Zigfn5myhHzPCBTLrugzKTGPXCQ1jMPgo3vavSF2a6BRrDVtGTv51F2r77R",
  "key5": "iyqFVK3hExKxK16jVWTGAhaKZZ2wqH1yTPxsiqzFFKL4EYovygYfQRbDDSbEwNJgFTavmKgycKFwg7qMuWnXu4T",
  "key6": "284Qw36VTzXvgJ4ptnMTMCR8Di29WEWsEUkpDjU1X3HebfNYQVNfuat8Dkc6prNRvvbM3UuYUVZxU8Rf5mxoX1nX",
  "key7": "xd51ADWmcE1Yfxpq1bNudfhjzF538BAodShhDeR7wZqJbtr1v6X7LqMLnQdpziYmrX4TEAe16VToqc6UMx2r5DH",
  "key8": "4CRrPQvfBKMnm4koYouFF14aJ25STwnVix5wfZf62nyzAEP4Psctc1yr5JVsKijiDn1opiAYs12MgfV4Mfh2itXb",
  "key9": "4f6tT6kLdjeCqspfjB4UJuLGf1C1o9U6L16RkYc1jvyHxFrxiEaoSWfsni4JwmG7JfHRaJvxuDA2y4ZTH1EKSN4P",
  "key10": "2u2ARPShm3FsXjtXELGsxu67drkNmRZwVtpVUy6hSwSUFSinEwmgvXGKNPNXC4AEeeNA7Q8NBQRhihAWjExBwH2v",
  "key11": "5vFQeqikNDwJVZdXkydJ7QbgoikNtwrPHaQwegEBXsVvaFgbS7AMgjVGGRwjc5bqUhsBrpsqdKpd1i77PdNv5LZ8",
  "key12": "bn2j8pHUmWuD3WtCGD1Jj7qbkUWjtRrAmWJ5Ty3xPgh49rNikYJvGrg1vtS9XFwn8Mv3NMvGMzhGnHaha6hLXAm",
  "key13": "2LQhPQfPjuzVqkckdPncDgWvsCCSUGqc9KbPxJqxxt5RSzX6kqLCAdtKknu9mv4DJ5qvBkvLm6PhvrPRDcUTxU27",
  "key14": "2S78JWCYVc83Gz4gQBiyncXZ3SKHy8JRMpZarExaiDaSAewWELye4GKHPVhCw3BpUPhZhN8sAxzHtFeng2mKTsi3",
  "key15": "5VHxjKM51YGDE7fNxo84gVh4iS1SmzbJdLc8yxhTxMmJ6vUD6p3VpQCdjEoQsHjJ3Yom1fdW5Bm6cSmwYwxBCwLe",
  "key16": "26b5o3JkTQUyYRbRM77VndfByMcV1DzmMecGdMV35i5SWat3cusbjJPGhdkTNoSWBkiw7U5j753DsdPH6XYcLFL9",
  "key17": "66eat2V5qvYFHSAU5ZQXwGJTV668qnHc7PvKsfRVJvqwAWuaxg5sW9Gbg2pABy7UXa8LxX9M5PWrdPuJWwNnraPj",
  "key18": "48DDXguVDkXiqWTeg3fpdMTReExdSgJixaiZXfJ1yA1nfJGDrGANHdALHUdoxrNLFa9LgPk4eJFi81FbHwchRPCz",
  "key19": "4mGHePj87QsUXpsMMxVjaW74jFbTBoZFAtBWBV1tasSTSit7eQjdnDJuqJzyS2dvWFYRhraWEr1sXxW5m5QARRWf",
  "key20": "2m578ouZVSXtuqUAcABkmtDtJpchiqrnjNLBETNtMXnHHmqqnwj2H2uVUW3bc1CsZizWF25pPGLx4Mh1h9e4FhHr",
  "key21": "4FeXvWdQyo2He9GeTDZyKtqU1CswJ7HE93NKLCidABtLwGKcbn1aarBPQf3tG7BHQCTPRP5qbUYxXzXrZbKGBpYa",
  "key22": "5eiqtZ8j5x52utENv7FcQAgMBED5Tz9mSxrSXwGQqbvUHhL4TNM4iySe61Yzrz6xY7m26uQmcACc9xY1YUbTLWbe",
  "key23": "4JbCsCEpheHpasmicMBsYQrbZALC7TkBseWfUPuCabBugt82LFGzxDWuoZj2WrAiAfPsV4bAjw8gts5RvD34Jb9D",
  "key24": "3mkhMosJjz5iyEHkrzEwtwaAnh5wYw1KoaYBLphgQxPwsi2RdG4J87Nc2tGaqnh1S4uWfwFPgxnBJeX2hcCrHENJ",
  "key25": "4x6xrgGWmhzUhAjocWYX6p3TPEpyw458pTaresYhaHWagSit9pzJF6QyrvpsEbPGXpzRGD4q7V2QwuY5Te8ZVeHr",
  "key26": "4zaLX1WqHfScG1SCt9uPpBgfSUhaudpgbxNqW7MMcKJn7WgRxjLuXermtu24iuhiKA67Kw3qEq9Jvmb9Rym64S82",
  "key27": "5eiQJN1riMcwSkjiStQyQfbtCcNozfggvr9LvH9ewEGkGmrjKgACox5gfXwbZ6m9QtqdRuRxiBLHx6q7pFAggnMX",
  "key28": "bZdevjigqR24Evn4cSdoscLzD3vrbY2xJKxb8mnDBvMAe32HQDqFSdoKy6PNZg68CBwPMznFemfZGQD7aMZuUoc",
  "key29": "hTJqhBZbbwoXwxoCtWNZH3KoZQQiwt6cYYqEJHCQcqU86oUe5dnCnNCBLmU6xB4jyiP6YFDuRqFfDWxg43Tduic",
  "key30": "5vT3o1ZS3jb1hLtMpgqRjkXd9hrCRLVtF9aud9LGys48GEHcxAd2pG1p9k92iY2oVZLAhTomnsr7bLswCXSCfPVg",
  "key31": "49jgaJrFwp1R61GWjwcGDx5tN3kCjkY3RPVADTq3as57saSLEGZgTn9KV6c6NFdTxkZFpLquRW5iQcBeY8cyusYo",
  "key32": "5K1H4xRVhsKACEqkULEZdTyXqgz69hzhiXePSAmWL6wp4oAnzPy3PMeoMwMjApisswzXL97A6kjztcbkPDFm2axb",
  "key33": "t7A6e2xDvFp6cocHvPJ9iy8w8WSwBfGuza8u7kbRXn7NKEC7B2vkR1yj6rHSCWVuqwM6e8NDcqd9mck15YGR13D",
  "key34": "31osmft6YeaeXdakUcaRMRDJwWhNfVUzPREJaEujbCAuFCseS7Rw8ZN7wmHSZPPx2jmfs7ctDuYtroAxHsh5brLH"
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
