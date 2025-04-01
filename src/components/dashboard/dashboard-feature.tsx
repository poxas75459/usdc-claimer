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
    "5XeHYUqawUxHAzKjUfckzKMzzRrm81K8a2RKd5uUKWuaYz9ZagFVoHyJfrUJPvLv6S6kbFDsjByofgtWcqyWu86c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rq36dkf2RVYeRsTxxvB63WEqN2yWPndyNbdvoBJxM5r5zLnzZU5aJDQBzmnj21XdK6Fvh5Vmgz7VSvzGXLqDkbj",
  "key1": "38E75AhAdmFRFAS1TfjVjBCrWcgvCND8MzgQpvCR7dVJw6RBn7Egj4AsU5LY6txVdE1RYCJ3EPXZCKRNWtnYChXK",
  "key2": "JgkjQpWBS3ANbSZ1y8NVuLMFhKLfWYojd9MHsJtjptvCtRpSs9rZL83UdTJppxCz5ftdK5d2A92pVUmvuC8FTrN",
  "key3": "Mc4ZVDSkLLxj9mQxL4L2jafWgi7h7wXuaEFq8FJncz546cwtaVvwEwUXAKLCR6wbZr7rXtCSjKFzoVjZs6tx5i4",
  "key4": "4QcpACmW859fitKJYtKW1kGFMgCqEwqu61sPaadWtE1aNWvZCnztUW7jae53bwfzMh7dgsGQ17nNWmcFgWebe2xE",
  "key5": "5YNrs8zHiogTMk3H2bQJygnAe9CsXZynmWmXxz61XQW9JFzGvpLgdcdbVjxQA1FXoXfPyJxPfKzBUXGYH1R23Q1w",
  "key6": "55bdMriWLEs8ykFfwo9GDLqjR82yVZMF1edZc6pAeGFoteaYLwgEFgG4mpsj94wWeNngHTMyo8vBGXin7pkUQChM",
  "key7": "2xaMKGPDvKEULSP7fyy7GGkGrV85HguAkFA5vbeJQ2fGW1SSrXLKrHccjJzteV7C2gz2RPH1A9YLtt7pe2C2voPG",
  "key8": "45qb8Ypjoqs5fkj3NuiP1ZK1zMjcxAoEWxFpEBuWu7w2jn7gVs3SpNNkHP5RtY8ojz6neVJLoprJhUQ4eAFd6dhp",
  "key9": "fXYkCSqenTNfbiy87hjJ46bD4yXyqqTVrob7K2wspxAEC6ZiaqXkwxfo1rCtuJ5HWdxoVRaTgLGfJuSwnHPVLSN",
  "key10": "KWyDxERbK8QvCPLvwPisUie2fGgATQSATLnQwXseAVrmjxzcoXzXM1xyGe6praq9sQWaitkrr15CTUUc5veK5kn",
  "key11": "oiLNTRAVufnUcwWE1si7PKWtNC2pxq5a62qNiY4a5S2E4SUwHBraBTfPHfdD1uZ5b3qi7FAii7sqFp1975qJUpg",
  "key12": "uXXTb7sMaLqaq8eo1swYj6nAt8K2QQdcerUsRFJCeGWekVLv266aEWYjjpmQ8Kkg6okvXAFvxDu5hGuhwgYjJq4",
  "key13": "5ZS3aLaqCyYHur5cYZa9ymT8PZ6R1BS5h6AradkgvDJRFB4vouNK6KgWCqfcthq4HL49SQbgpwxuZYG3oRBew5jn",
  "key14": "4ZMH8f2hAx6SYWKPDtXdgVUSphBz2gcjvBQN4NYv5ieQ8pbv7oR62rZSgXXNiJ6rZzf2GvbsPDyQdt219PGwqjAd",
  "key15": "3is83vg7LsfYs9kccyj3fujuC9TeLi2CejjKQvwaJcggBBta66etDoWdYyznJDsH46n8txJ9EMAV1csTMH1J3fhY",
  "key16": "yyDVrjYEMJbUFEJRBdfVHSCNumoYKaiZ91QhANse8e11dEr2V7B6MbPgo3YkYRK2Fbept3weddTU3WFLBDF3PQu",
  "key17": "56JamoU3TZ2UWurEGuyeuC3DAEhbDe8g9D8irYahFHqWuow3jdvsSHEce7RLhAEwHkH6vLkThvxkQ3zKfbSCdBpk",
  "key18": "5hy12qCzGxwmyA4FnL2CzGc3tUANYghHeyji4KapQhvVXfv9t5NgnNDGn6jiEd6vGhLzJLtMUEkNhdqQy4fXMRaG",
  "key19": "27ExXvSiqSW91NfPNgajxSMsdPAqgqyeGoYpwL9sJdppqnzQoaLZ6ZxsiKC3JumHZqcitLk34e6tTmpEHyny6Pww",
  "key20": "5sz2mxCagvA4KZFLqxsKQP6Xyn7wQHSGZGQvh4n7xtbwFE1fYCbavDdUumXjLyyu2CCGbrskSQ69h1NXWH66M6AY",
  "key21": "3g8M9fNpacninU675KKAfa9EzULNaZASjvBcrCnMn1mS1o8V69hpXQwyn2sLz3Xr5bkSLnh9jJUQQRx5xPu9pQ3s",
  "key22": "5iB7uFiduDfAqKug7r3Ddf6LPMtSk3bEtadCo92ifce2MopRweULL3pQ63wFKUVmUzrHo9Lniqoxn9S5L8un7KYt",
  "key23": "j2wvWqvz7Kd3kjRPc7TdQTqCv6TjhTP2pr2kvLkqQNr4PU6UM86iDttMSZ63ksD2WFBSMZtLd8x2E9TvxL5N6FC",
  "key24": "4GsNj6Ut2gAj5qTbCRYLJuiBFLAycRP61EECber7w2VTsHv9rBQGzKyxnR9zHx4GZxuGghrzXoKTQT9iHwreTWKa",
  "key25": "NYbiZx89svBPbyt4YM7KN3ddY12kMxn7fDKCZvqi7tRt93nau2Wz47ZQ29xVtzuCtas68XqgRNtekkrDoRWeBot",
  "key26": "4mE9TzeMTommwpYrES1HcNg9MNJTSx8HY5mV2kfaGTtfHrSx5o6yD6dqjGZDuDtM7jQYzmXnX2i83nReeswA3sNh",
  "key27": "59bk7LKs87aWekWpfwzK4nHxXLB5nfqAPpW5Up3aTkm7o7LFYdowC3FypBufyJ7KpGNkyAhVvsukd4f2mrP3oNqP",
  "key28": "fDyaFAkFKcHZgRfu8jN3BWi97X4kdzvfNS418AYjhdXbaYRnSq73daaLSYnw3La6uNkZamVUFMja8Bm1VKLo3dn",
  "key29": "2fSyVXA4NmXs3iheBaagragrk3fXnUNJUcxbvJwQ33EdWk1dvA97QftBfAPxcXN8dTGzCC9sBAmXTX6H9x9HEiaR"
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
