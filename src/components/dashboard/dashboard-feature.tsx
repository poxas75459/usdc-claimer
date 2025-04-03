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
    "35Cgs5vYJ5TvFHXpze9idKHv8pENG7trsfepHdheB3fLiMBPPdJUCSU29es2ZyAM3Y9CAxMimt311LkHQwz5SkX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37scjt8r9MScyQ4NA5KgxXbWurSQWMxQ2S1GhvGsPPkxyjHfbwf9fzbNe6S4UdqMsMYTS6kpSpqfJayzofa5wuub",
  "key1": "21KyDqADXW56bVjWvY1rXxGyvsDnvr3sDAEiF8nEy4kzntUnFMaqNkQc178UMUXLAoWubUrhjDZPUkS3V2hW1ujD",
  "key2": "4Gguc2ASfxrwfmeNDVdpQwVzaFAGeygzq4uatK2AdmBuiC8oWhTkUcMFBPq3ms2bNZy4fkkiSEJPxEFSPtYsWcgb",
  "key3": "o1EWtFSXXVkAhvtUuWCEMghyZohAD8zydMYJ69X2Erovc51DUT4ZtumzYmvWnhcMSTK1Xtmp2b8rqiageRNSwcz",
  "key4": "5oHTgixULA7LEXJeL5mUB69rL6bU3VyYjv56zJibnXu4Fkxr8bfLxz9eq8wbWGEzFopTPky1oxeR9kP7cc9d4mfV",
  "key5": "3pj7HNMHbNuoB3jYsv711SfjKVEe7wf8xs1zp7BMBQtQqZ1BXLv5TkoGMZE6L6k8BJoLyNZeZxj2tScpDw3aQ6K",
  "key6": "3k6qV25THvtMArVgLDgUmHqX2kwHeuoS1XNQmFfs1ccSQYnVdC9hRRzkhVvCVduChLu6guzcyKQ2YL86pPjkiDnE",
  "key7": "4M6t4bZX42WUM5AS4CzbpyY3C1wpGSz4ZLth2XALAA94iW84gTd26LxJrdqhPDjTKD2cNeHSfXk9ScuWfUzQxswF",
  "key8": "4nYc4BBRA2Nz24dNJbThe48RpVK6R7qXZEoBGCXH28rLGCj6LtBzxLJCRucK3xNJngbF7dooFngj2oFUSqq8DcWe",
  "key9": "wnzs49pNuGzCtv8CEs3jDte3zCP5F2Jyv1B8EhFBDd75AKV7hKNQWQqFihsmQrjrjSwjGLVKiUSzGSqVaZFq1UW",
  "key10": "3o5jQQ8X9yiMMXJpNd47xQiHSxKRcdPf2voqKWZQyTA5eyv53BmF376tuqXWX5PHL4gDb3v423ETo6AayXr5NVky",
  "key11": "tSi5fVJD9AMWRrbVSNvankFdzWXrcrq1BDxAAvAQjcZ1uNHAV8nHf1QN7c4qKA4CiDqN7eJ8J4Rhbiv5Y3QjAhc",
  "key12": "3S5YgqssP1AuMngJnWkqVedVpohc71yTzZ15v3546wGGe5C6KuPedisUgDwfLw9TNNY8Ej6L1Sac72K84aywmsQo",
  "key13": "3n35aRMxeCRQehzxNVu7SMzfdiERFBuBPnpZnWqP9Y5KhaU7pnvAnBvrC61Q5vBxkNgnDpcp9HDpAGUmxJ2LFPAV",
  "key14": "4vteSyc2tw3WLWeQPy4mwfzLfAkV4v4oQBx3zqyeKrbYbRLnSZvsrNkcwuAzDFx2AXkk41Tzr7qHUHW2maA5CSC",
  "key15": "5KQ1QLjDc1bjxN2nPERV2PhwzscghofU6TL3JorLLVuTKLCaJE6xrMV4JyJyatYySn4727V5EAbLSNXcbM6uAyJX",
  "key16": "4BVz6p8m96z6SzsvVYwxwaBXZuyRq3y44FwJk46k7wKsrGJCSW7Hxc2B2gyAgoVc97ppMcSxwjcN2WCY4zj5VLJS",
  "key17": "4WPqaoTSEu87oxy1nM48hPYCZuyvVuZfAUdcBxS7c82tPW6JSirSi2zCQtpWmsivkjpoRUauFFnTRCSDGTJm2t6K",
  "key18": "24k766aJwBEuhvAsZvmhx8feKmQgqVX1QrHQnTZGG59qNiXUdLmbwLt5RRsJRk2iaeGjztgeZXSHkJP5NRcsyeQu",
  "key19": "3PyoK6E9VAVQL1T3x1gzXFgykqZmaB2WPnf9MGMCHsupLWfRPX1scNzaiMguABbfQXJ1gLEh7V7dTkePa7EYDc9Z",
  "key20": "2GSr7uADytJqqVM2ao7HSyixxEGN7tFTVQ3zaU2KUCSC7xafiMwmcQgAfCim7GUXeqhmERoMz1aDKoca7LvFEH4D",
  "key21": "4gxhVbdQ6LorN7KRVTUUMqJs2VyNs9eBT9WNEWj3d9NUtT9SGYGfvkzhHg1fWehZEb4Uk1pyD5KDsWax2hoLwB1A",
  "key22": "uo5ynTefFNuzy3Ft8vzY5ZVi5N7vT3pzcX5chSAVXvA6XNkHYRDfzdkM2TJb158sgWKZtjToMwdAsS5VBCTpTNj",
  "key23": "23N4BiBKs67WaThRd2tsWreyDw3ytut5VgpawqR3ojuQ6Sq7wBygwbGKaHhSrc3qp6adbwXqEBYn3Fo7EPeSk8Jp",
  "key24": "4EPqLp5Jez78e3MQpAtwMsEts8nmr9zqyffRQz4n5QEWL3G5HtmzYwpLKqVkFarR9BpeSmBvp2Tgcs5gshYqRWZZ",
  "key25": "3mYTAHYngaLzZYqM2Wyw45zbuEDNGa3BSYvgUwLRJcubPFiMpe3FFVHUpE6CfcMBWmMgGe71KVyownbTefnUvVVz"
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
