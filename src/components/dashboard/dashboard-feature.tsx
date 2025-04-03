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
    "4KiujKgNkKajjKNvnet4egZvoigBxqxewVq2D4jR83Zo58RK6TK5eA6KXdsA3qdTMQyrXUA6NKnMZGz8r6U899TL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSdvFNAJbSCJMFsZvduuS3XjkcCjEofp7yMMV3gnPfynySJh16h3DFJ9Sh2LPvaShwLfKFa8cSL2CvnpjntvcAn",
  "key1": "RUwbX3EfBaCVk65w37Hd7Fi8XJJHMJDpRSMv6w46NbKWGGQ2SRZbh5eGgmNkswskpyG2eLPCWvbq6q926ERERWr",
  "key2": "35BHVE8taz9fy9GNZXHrZtxe4E8dvRQHHg6C4PiZWMFGiapcs8DQJWT23pGwZoAWBQU4DV3zNbNu5RZB5EGfGzmk",
  "key3": "42MKb7eXR6dTt7jmnyuYjwRdfP1DSNMftRBviDUY3evUntb4qenNwzB2J3CH13ZzhYVNdhM7mR4FV1SsmjQm72Zq",
  "key4": "2wx7fbL5nbsZJkVJBg9QCucmE9JnyWyDcBYDwx7LCQr72xGtFvDXANovLArMLTyuu85C4AM1H2Sjju5pb2uwEY8w",
  "key5": "23LnpVfCNVmGSD89SV41nUxfUS8K4CwkCRJ3t7Sy3mtvaD1iaue1NgnWYTb12NN8xxosFe8rv5B3jnoziBgkWRDU",
  "key6": "36H6fb1DSxnufkN61dg78cqqopQAU9LHUDmnJCwDfgQ418CFTUfEaMxd9bigXNupdp5sf33tEwZreDVxyCRbwMnH",
  "key7": "3JVFw5v818pQBNDiFVhPETfMe8nzXu1RR8N9urhg1rBRrmgV6rGaNAXi5ktwv55BzHa8RqoygevA2psTM9bpFDs3",
  "key8": "ZMpQrzytiV8JnGLasxzKwQJkEUP2nKzJ3AiEZGeu5P95biCQdx5U6H7KdKE6qpGY9c45z2ZtsEfo2Q7qZ27KoWw",
  "key9": "5zr6cB61DLwcp2vJGqwAk75zxEMv5njna4xHytKo3UST1Q4Sg4krHtnX9ZhnbVnLNihBvAWd78kiNf3rZCaDvzd5",
  "key10": "4UBfVNaJHseKwJWDTqS7dCEZTJRhPX3SGUVie625HSe3pts6GRMhxD1kW9EUWcyzHMhcaUSLwGgaKfRD31tj5CEt",
  "key11": "kynJ7Jv9oiLP9e8seJa4v4wtWUMU86Uw2cs6vaYAM5LrnFCmKSh6hZb4FVhFUfzii9vQiJYE1NHH1acMCRe4edx",
  "key12": "2QjurYQXa1nHiv9RRS6o73y66f9ZEryj48XDWACjzzynyphaSBJwUyLQGXCvJokediEaSzBFJswZxtNgfhHna95N",
  "key13": "58hgd7kZUR55BzM3DidLcvjUFq6rjR2jqz1fRGmvdeKDspWEGfrkfsdUGN85UCackU9tgks7mC6ejezAexwtZB4Z",
  "key14": "4kXgWtMmBhPSk5EhP8AFq8prbDaAxXN3Q4nT5745UrNU3XAoE1ZqQBF9uSNqieWsqBmW6DF4aMorHbiXTND6CCzK",
  "key15": "uEfgNdyFxZbpzaKBu8RdFnNnhGZ5xXP763sC6aNhDFJng7HiJFrAXKP8hRKAFeTRVMLCY1wgVMdT2YgsYupN2Q2",
  "key16": "gxV8cUynvqrL5zGaZqDMkatVmjfdmUiCw1RRwn1VWKsU8bkwNXRtLNE6LxFJFm84iJZQaobsBdX723tbE6JcuEL",
  "key17": "2j9ZGrfy7rCsHQrPZL2WCRfPxAT77thDoi84juHqYMK11MGA48tJS7Qj3cvvKwzk5fCxHtV4uaUV8LkQHx3Qa63i",
  "key18": "5ZTgJpuRjPnCqP8BdfYZKktaeTLZRQjMbU9BDh5baUa4NHscEMu8JtRYnqqDHMLu91NMdEyXYp8w7UTjiyqts7Hs",
  "key19": "gJxG9DgRsF7cBFTYYrFp2dmrdc9MnNyZpHZL1JfLprDWwNqWstxF1d98cfGvdKbTgGF3cCWuJ5CQTtd3hZAgAKT",
  "key20": "2S3Dfs94C6jk6DBV9ofpeNEZfFwt7cczSPYgp6uVEHKcjmoh23S3GrtNESSPEvhAy7S92b4Tz9GSyutwY2CaSZnE",
  "key21": "4XfZiw2kQNrV4RacUW1gjmfF7VBzyCbd2ap1VnERQ1jEchEwrFghy32MzKkZS1zwDHrVDCUYiixADQ8gi7AGV3v",
  "key22": "2AiuhJFM3NHCadKgviMefCF3tVGhCfLt2PXGDQSuS1Zzu4qvJFMabGkdRyuDNhdrQwpJGdUrrPKzFV3eJYn6VyRM",
  "key23": "567XUq9SuEEVF5CtrpmnGaLwy8N89MTBoDLBwoVsWhpQYQWF5u7MK1HtkikfJniRDZFfPe55nBtWR3ufrUPZohNH",
  "key24": "3r1RrNZVFw5XbqDnptsM31wKJvdsfHcWvyL3AnJEgegCRWdmqMxPGZhtLCRatkKdCm6PwH2VjXPKTqXZgaDqApye",
  "key25": "42Sb4eQR5b99HdMP5zGUvfEJKVYLEfXmekUV6SjRxFSaSpFh2Nq5khSiYKturnjydiFN4ZkyyMUG8YyjdgWjJ1V9",
  "key26": "1iRARaULS2ibSno7r9jJbEPTUpcBeruNpE3cCo45M4X5PJhsft4HK3JvCwmbs22wsbSeV2YBBhPcvvEJ6ZoqFc4",
  "key27": "5DC9gb3R7McvMAiZbWMDSCDzUQWASMs91bAmPD5zbcwp2dgk8fjBNswH42LufimXEc2QqzMmFafHqnpSmKhPAh3e",
  "key28": "34WuHb7xJLE6EgkjFodpoi22kLDJVsEj5uSLAQwHmZM6EbYUQnu4TzXBLoYsf6z713hVg5AdF2awXXpQCSLiE3LS",
  "key29": "3hq2sHyNDMxjwKTGy1ULGmpDEjDLJuKcSJ6YSJN1cwWqWbJh8MHCsA6oFrXaeTQzVAit8bDw5Qpr2cnNyg6RVttS",
  "key30": "5fL7xkRhGEDfGet1jvYjTTrLJGwPYZdT3fyfkV73VYP2JnHGbCtECdZaVD4jgbgUvnqX8PzRkbtN2oeNoG3Q6ode",
  "key31": "5KvECQYZnHijB9GB3hXJ5xSDZLn1tQWh3vsLpPdn31wPaPD1JppiTnTMLEk1EA7DowPyKWKBU5uzHmVfBLz1wD77",
  "key32": "2xV4iavPqm7HtYxrDmKUsg1VwwDpVMBrZfi7V5CbvhRbnR7HBptDiv3JC5GdwFAC81JjqC9acQiY1w6JpJFHdJ7c"
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
