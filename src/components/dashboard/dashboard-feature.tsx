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
    "4sHRZYLx9XbAQYy8tM7FSPxgAg4F85BTE64aFdFKL9ZnGUprwkduJ1C8ioThjqvHrrHAPEVtMw5JSDPEDxjsDAo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AfWNC3K4MfZPvWagos4fcDGBMLmbLrC1x6Ghb2Mp9T6EKyPzwyiWKAXHwyz8EWw37VVKLG2ETerp1kC4ZU6UJ7J",
  "key1": "3LSjnUk97juiuprURPRUDKE5NmBHajheREzmyZM7uSvMHuCW9yohvCfPJyDgkNzy7nRgm5Y9kCiaV8fiLQC2NKyQ",
  "key2": "65ws91J8pNZC7dpXXE6xACLWHiyRGUCifvjXGJ783vp4Zm3izAK6bFF9cmGdHqAH6gVggH8V9w12843o93pttCQi",
  "key3": "55mrrrjc68BGGjxG9yXpRNCx6pWzgv91vhaibqnozxE7rnBkKeU7YnENNukwsiLANWrdqMMPVFEX9e5a1zGLiTnW",
  "key4": "3b4b6GoF74JUoCy2j7AjBzgJBJAQs4AVrmUHbK7LrnY5PNSspQQEfNjGbsDg8aYh6yijuSxHYfPAtdGER8c7bL5T",
  "key5": "3ndXfFyvWgjTVCXATfj1qBv876vy33U3wJgByNE3emsDXTPfxWjvGEZYFiticdcTbyb49DBkPTwzK7mpfg2uAyti",
  "key6": "YVyN9kn1TjgdjJ2XdqRxGRWVLwALL4C1V5AtY19bjsJvLufbQC9Up96KYb1DLuKAenhzF4G4pKTktDXuecUx5KH",
  "key7": "4LFBuvFwWJGJyMty4R73C5VBMSfAyi5UATxfFhgCkLz47U45A1zrcfu1V4ZcAZ1rFFYKVCDDndrBkdsbR7yGM916",
  "key8": "5icdowiQRjfJskoEfVajAiBHvLgdJoyx5Y3gG4RbMrLma7wNNzh5F1SEVqMPo1KAVnUoUbzt5qNKjkTVfC5GBjQh",
  "key9": "5eoLfhDUf5zCms6PuT4ZH3HRS7AsJpaMwsyhuBqiim4PyoB7r7LRab8hfyMrEzYWZfcNRS2Ntf3k89PA1NRiNPKw",
  "key10": "2G96gkjpSmUascVKJcoxa2RYao3rqj1LQttAZCuRkXdfafNGmhx87xC3mTtgKZC6CMS5qrxvkkpsRRrf844FHaim",
  "key11": "2tupVwxY5Qsk4jUMLkMv67bgFM1dhXEPAMR1b5sM1HfdjJTZobqmdNVEeMTu53iGknGCPpQeXW669699UPzgVm2P",
  "key12": "J2V98mfvNodXP51aaaFykifHQzmjyMhbZixiBhzkaos1aauxSFDw2TqLB1g1gJm4tWqLnG86KN3CAgjyb52VE7o",
  "key13": "2JSFKtrddjYYwT3kNKyFHZTp6iGVSaydxBfyvVEdBbnTxak5koLrMFBgzSNcNnjTfr11RQRaaKcRtMJohcdFDHgj",
  "key14": "4jrgmRAH34T2Ai6dGt61iP7zjRy9auhCkDybbZaFhu3BV3BkBwqsGKYwrDEVoRj8SMfLQ9BZb47ihjs8eXFLr2aB",
  "key15": "3dmrcC1FF9C3evHGBNzWmUZg4gb6vD8wBWsXrWxMyivCvMH5z7Zs9nk6YzkeSUtrKVAn6xWF6QMnEaE5hx3xxqes",
  "key16": "3uUvLFQtH2qrGHbBvVFVjzGRw5LCZtKUGmWExk6YSAHiM4LLLyfHkbuXDRMzKrgVYV1LUVT3DKGM7gLAiNxVKuyU",
  "key17": "5Ppr3J1jnBDsNvZnUpsfMexnW7PREQorgFawK5ikV1tNmyqzuj5oLJph2MDj3pF96FDCELr2WmzhqkYoBosoAEWE",
  "key18": "2NFLk5hRACxvRWZZeQg2emxR8SZA3srBtYxX8f1wLGKUY2pm6rJbjJc6Jb89NXzFhhSUiGua61x9caA7wVoGy6Bo",
  "key19": "zc6316akJeNzzaPQkyunb9nSYJANdemfRtCk52MmKf8cok71rxcjqGeirfBtUhx1LSwTPqo5GGcXaodojgrCRoU",
  "key20": "BEJnqiYBmJ78c3XQZDA7fXFVQYwu3XnX2mLihWWY8WPqY2UWQ2SfpEfU6muDDDp5sJbGJC1z38YdADS563CHUkT",
  "key21": "5rf6fnEZUMrDjxBWpfW2NcF8ga6LPRLW3jwTP8HPxCBBaqcL5qywCWuprWvWJ8Jtb7PGn9hPmBib6DS2JoBnC9Zi",
  "key22": "hekSF8JRsGoE3TRHZGt4JzuZfmsA5Q2coNh6MCFnHxAJdM9yHUBaQjN47SqN6MNARdFaYYxzxe2SCEaS5nkbRVo",
  "key23": "2aSj6DY8vctYeu2t7DELTH5vphRXRk4xcm3LjyHMCv9RUzozZ6sDpnBZ2bLUgF7JCUPfdzdG8HYunzMCYXj9vqbB",
  "key24": "bpakJi1m7sLxZhSTA78qSNGpvG23pddRaShsUTT3GAngvhjtPCKT7Qjs8xxWVMnA1mGUBp5sjtDpLsX7HQcXsxw",
  "key25": "2ZiXLm7g14U86X8ShQnaZrAyAscYWmhtKrNs5VfxYLAkEMNj7bNVxfiHv8mW4HipktkNFdjYRAbMJXZX9Q9nXFnQ",
  "key26": "26PDKX7VQUZQcC4gUU31nhy2VSr2D1wgFYb9TfFTvUo2k7EfQSTZ3LXzxEvjZZGPAsnUJhvi6mZh3mZ4CwSBKQbm",
  "key27": "5MV9zhQWPDWqkb7ewwkQJRAdfgSsLrjYMj6MeJg6rvrwAF9WkSSayYbDn7JqSBu4cUFjp8ait51U3khiUmZPvMdr",
  "key28": "2Se1WJAvsdL4koNPYd2eAfyQmBx6EJL3LDxnPQNag8QN8HQKngmnAPG7wCNhs3p8JqpjPZweELEwDrc8ys7GJwHw",
  "key29": "5P1MW5FmUP7SQUuHo5L1LP9HUKDpc1Fn6B5xFMcnqt2EBNMTzgpyyF58mModtB6uGWVEwfzH67qa4yafpsULeLo4",
  "key30": "42cNHrf5xSvWBuZAmzRz941jLNYWBVsEqSjJL9EuZs1hjco9E2idnRuo5mPRXFGy7Kg9kfGEKGTNsYCyF729wRYu",
  "key31": "2syvNdwQYAbeJgB2FJC8obsr71PgvehPsgjdppz5MkZUDhqThUNTz8VunhsSbg3BmmpHA4qJaQVJW7zCNpx2rrrQ",
  "key32": "3HHT1w39GDfPHCbJR54K6hAXzSytLPrtApdQ7XmoowmgB53fQXPFqabkDPXYsnQyD84AzaaZpsdkh2B1yEnfMmTk",
  "key33": "vHrcGpb6ZqTXJidgDoc8AyFYQZ29mFJ4g6oCGL9X76GGkF7vrgXABVeNty923dsrSZ2mCvPqo7jSySymTbew4wS",
  "key34": "2obCu59WkS3WPFJByw6xoEYS1jxCjN7YeNi7Zr8KcKNPcCRDbWLaVQk9xZdN3ZcWhfHdva3mftrvKWkfuCKL18LS",
  "key35": "674sYHVSjSKMZf1tZQpULU2rfJDsVw7AWgpSndsV4Kh1ErFG9umMXyfEihbwQyqkHXG6dUs6D2GaVaNc34gADCYV",
  "key36": "BNNow1dejmEmqq7d81SW2E2ag6UvD7GXNxJEVZjPjTLssAN3uZA4xucmy7VZ8474gev54Tjy6Jd7BZ3j49kytwH",
  "key37": "2oNcnurkKWZzop5xBqy46iQuxZwu8BRFAUHPcmdnsukAvpZGsnusXKPJnUuivoxN1YDAV4YSPoxYdnxVXRPpAym9",
  "key38": "5s9PgciPnnS5jZRW31dVt6Ve7PEivnuNicfj24GDDbWuGAwdMpmatGMGcbvj8mvJ1LDUPH9zH9JyW7PA87obqzPu",
  "key39": "41kJnsm2WkDdRWcVfFZvsRJJD65WGVCQWh8kgj79opYPc4NSz41gJYgj7Mu8rFM2RWCQ9yc3Voza9FvMKLv3SoTc",
  "key40": "2Y2Bfftct8AE8yocfqLjFK2xsUdDNXDG9X1ertBh2ueywXexWyJB8vBuG5C2sipJfraXMJroHhcE26cvB4V7Zpm7",
  "key41": "BdE8bcxSGtkU8Z1GoCH6Yc6nsmrdYHdnhEbPV9MFyLoTELVoKqzsNzUaMztZq5zzccYNXrRdrohrWcVpNsi7Gqg",
  "key42": "58HVpYTo93jigBBFrCND7QrFVMRuaFuM1ctEEUVgmLZiyGXBieeS2kDG5hkjvPQcCPgRPfmLFQf6sdbLhrMj1vBB",
  "key43": "yA7Lb1EtQntQhdtYD8A4r1NKxcPRxoZbVxkriUFKTpfuyXfGFs39Gg4FmRVBQ5SnLyc4DHB72MLffxhQg7FcWus",
  "key44": "4YNCCGoCteeF9dBCC4RgiBh8Z4nfodj82svL3R2snz3d8WL77Z9Qj8A1yrwDWr8xtKgm2Q8rWsHxNJM7ci8r41de",
  "key45": "kqv2wASRsLc8qGZe5ZbcKF1BkJ47njBYQifLgwV6osjFdQwQnA8ktKAoLfC34L3GpTtjF2u6P7Ri5ZDuvAorKX9",
  "key46": "d8FmSKAJ3ZVhSEamSN9sDQSKpsjEN5Z7w3MiZxzaSYBoS5ESxSNGfjtFoWzooq1QfEDJkZrH6hgRVSVfmk1nQHa",
  "key47": "3JLS7J7ssY5QGJh2HRphbuiQFx5tpm2sDEf9cv45H41AFfcgdHA6QFEAhEDUxqGA7cBg8BLa6Bi6C2qQP9n8NqTh",
  "key48": "4HRGSB7SofjrEU9AnSu2T2987VnaYjGvXHiX9o3iNehnfiELxcBZSeiLxBpEJzozCYiVrcyPt8mfXUbXExviNM1Y"
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
