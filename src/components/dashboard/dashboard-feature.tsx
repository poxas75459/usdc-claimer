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
    "wJKPPG4bsLfagR7aUaLXCjaYhwNGAdW21khNHkUcuVifKbbmaTjmZMj6PD2XDVNaxx9C4HNYwxJ6TTkKvH6TLeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oNDc5wmLVzwpa9J8k55BqNkwUTpd2JBGzPUhuR7QXgUnVfeGazqS29TKWhPXKHLFwtUEzjvi8shb7heZozKRNru",
  "key1": "3K8ooRifkKWAF6cF1YhPkJ8AuqtgoiXwfChgxri5u6RtJPMnMAKgzqEdWEDtiw6bkZbaNDbxU88fYhQFYBy9PsxS",
  "key2": "2NEALFD2o88DSNTqoPegDdjpY9gAB3294iSLddgLjkZzSSRdpGuCPZaeKwRipmvqFCisAxcv7zch1FtCVp8unerj",
  "key3": "3pD1vZ4rgTnXMN4mWagpujbnNTWrQ9tJ1kfSJoch3mzzDp3jcBEQT4jwH1sMX9c1MzqBNbTEHPy5HHkewE7sLvvt",
  "key4": "5XnKBp7mLmsbfRi4oeE41m6skuUccuLd8kZQBgfs8mntFmy32J1jBenQSHycoy6WFHtrmMoj9EScXHoyMXNY25AR",
  "key5": "57346BePiiNx1gSJisQK1A3zmdEkLHzPNzKyx79XXvezxqsgZGJYPXuNxkhQeriv9hsjdK72JmJsXhGt1dwqK82S",
  "key6": "34WEANsDpEoCaa7F44F3wnujCbZm2k6tPVwogJPh3RVYu7HppupZipCLKwufAzEZWqZxVUgrNzaqR6awe2oXHwyQ",
  "key7": "3qsw9vHdhs3hfbroiayzG9YBst5SibQM5NXCAf7ccAKWeJo6mvMHmVsnK6ZSeyUgMj4L41kFMubJFWLEK1M3Adqr",
  "key8": "61bTdXYpsP14TJeEeGTLLS5Ek9j6ff8fD8G32FBZVcpZmMhVfxkS5XbxJcAc25AZG4b4eLcbaf9hrDEzbiPc7tbK",
  "key9": "2k83iRFWLa7dvt9go6N5PfE5dkrPbf1ZfoSbzxqkgCH2xfgAYNU7ZJ2bRwwv4AToMLwRELrLjqUXXoWAFdxoUe2S",
  "key10": "2HfJgY3NL5hbjP8MqZuyLL5ypPPPq32waCqxGmgqY9TCpyspYsHvagxR61t6yiooeYPGMZW5JabY7aRFzT48mf7L",
  "key11": "25dKzLfaFLz5gT5fGPQt4ofk2ytULD1uYRWpSA9ZeTmW6ZWY9zw5tygKU5CMQVRKBuT4aAf8gWD11TffECtHL5zd",
  "key12": "3wLD99Bk4XiNhXm3nkHDqkKrC1h4oxuTrsGQoZH59XDTJVLinD7PrjChKakvJJ9tCTgFbLGoF5FcCC214zNkhpyX",
  "key13": "4EZhmvhH3riZpmLwk7hsGPi6uuXSsbDf775sgXGTEyJeU7gZbbQBYJVYwtmAhetpzYiAX2372VAwY7v1GNZfokYz",
  "key14": "28XbEGLBnUBqapx3jwr2nQUeGsVWj5R9Xp9xDBZh6sGcgLXuLMWwcYah5PVGU4ZP3jZ1HNNqLe9snygcYbeyko7j",
  "key15": "22dJgF6N3Vgn3tUPok1FyC8qJc9RVRhu7aCoc3n3TBAbY7foRXVTkF65sX34Lq6itPbFYpyRRmkiKALWAUse6CoL",
  "key16": "TPzPNjZRfznRKjnRgRVfaa2xsyuhfRnnMndd6E7bYBUrwkk6jRSFJ4NYEWJW5qhVUn1oUwGVZpFoGuKNEgKNQVZ",
  "key17": "46StxAzZyNh5qg359NibJxJ6i8XgwdfnEMNaBZrkKNqd8t7szjQcCmwqm2Yr2aHTEU36knyheV8MvgRrQt5JWBGc",
  "key18": "2eSWUdHpvAPwQD2J3BwGgmjBMSMCHpMtW5wBUwyaapuAyj8DcZGcq5rtAasxvd28FcF1HKxudyae1sk3wskEoeN4",
  "key19": "4uPvevL45VY4UbUzCmdFvyjZV3uG6YnUL3DKyaogJ8je3xMcDPk4TnMh2mK7EQNreg6ziPoXncPgsqhsRDshBxnH",
  "key20": "3PaAVXGGVxDyg3V5Pj3buEBAtHwifVp4CMvVDLgqzmWg3ps27md7hR3jn3shCCiWKWdJQcRcNrbDig6fTqyqmNoF",
  "key21": "291XsMfcn8YiNSM9iNr2zXzgdx8Y4SnsAvo2DeMexwsoMbdbfgUz66mkTkCkzEeop8F1zUppqDEy8FjMJigJgNmb",
  "key22": "UP3RawtFhqY619nGJyF5py65SYr2nBT9U3Zx1KwxF2z8SotiFP3HRHKYxxybgYjRrGM1w7L4MMmSLg66GUaJEpa",
  "key23": "4zZJ1CioZz93Q8CthVv7ucfLNNJyKeWRTQmjjpCj7sseGLkDH2k99z5s9qU9LHWg1vU9BE1cfJzpGdWTHZXUpxM3",
  "key24": "2773iX2DzrLatS1UNfCyJvQNxGn7ax2fYPcLBo932gCSWnkayuCefqvACECq8qcmog6hMb8NoTnX289RcQqHW5Nq",
  "key25": "LPbD1kgP1j4SLnXAaHDaT76SnzQwmRB3QUemkNT5xtLneMJD18BQTx24qSxpzi55sk8Zn1t3GUa28uoRX2AvEAf",
  "key26": "3Ua2pYcErTbd3gDfVaQn5y9GPB6ZLhmK3ETs4tq2DVwgSw7y4EtMmDiMPW1urRRLjJAtZtXSc9XWNxvd89PRrUXm",
  "key27": "4NFtAdF3Zv1fW82zKsLPppssdGT9Fq3Fab8WFfeMNV4D3WYcHK1cVAvV7Jqsz22gKedejM6hRaHKbFf392SDAk9X",
  "key28": "5W8PrNJxjeSTSQjVEpvpZXt9zS7uB5bGg6B4YjgC31q978WM5uEvFq1yMG8myRXrPHRsQgQ5kyS1jrQ6tyLBYgGr",
  "key29": "opzCz4GD6EEWiQAEwvRr8HbsAGGeabePpvmwmH1MkogXTyZGYaV3VTCRSHNcbjLt1XTimFnGQbZwFFfQeZqJ2oL"
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
