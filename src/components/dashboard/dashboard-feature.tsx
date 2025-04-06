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
    "3GjQ17jNkR54FYd8Z5GqXmRLuLEQCPeFE117oTxKiGb5EEG2EXwCfwHNdW9Ht998WjC6CPVAQ4SuXNfG4FXBbyVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HN5WCsH1W2mK3cef6WZQtr4iU9FCDDjuGxBPaEDD7KKJmaYXJYszBX7a88YFU9u8jkxeDy55EXGvU5mmNXSyEYJ",
  "key1": "oaYD9u59J9RVHPRHkkYjEHzfnqm8m8V6ZuTycTBg3gZrbaJEBpMsz5ntLTFkxTVb1Hj1Wsf9gQHtDQcCJegXK4o",
  "key2": "2eBAgiVWvf8rfnJ5KFcSmntxMndbBKChvrzo482xk4q62mT4YK5bbt7VWi27jxtgdv2tbxJKkoF6Wg9pRYfAv411",
  "key3": "54jqzNq4qciezDUx1pBe3F2SsZvagWEtuuzRUyY1B6GRvWkNQBhvafWj4sGF7oR8VPF9AnjEB6WojmN75iQCcE8D",
  "key4": "3EhKS8sRcyhNbfZGfkFLtTV2X8fcGWdFJhEK9xTVcpELCPgrseEphUSHJdv6mJzew75onZ7nDCD67ZiVFGG4P3q1",
  "key5": "QqoPg9PnMqqBdtr65DZX4vCjpac1ejreRTUELkqqV4XJEo9dbrp3rFPPQnbdmBsd1TF4jE3dtx2pWG3YDU5pyS1",
  "key6": "2R9E14SwTZvtjEQcUfuzX3Uztjs6C1ugSnDtrPyYZsh8YTQZmNASxjMwgnfmebmBST2FDsQAgNbuA4iW3ntiko2s",
  "key7": "3jjjj6Cs43Z7hgHQtdURqFSFHKydUbLRMPRJ4Vrru8JZNWS3p3AvjTwj8GYta6thUS5ZQdjKkPfgobjtJYUrteMn",
  "key8": "5f3yFVkZ1xQptmACbRT8TTqznJSqamvMPtgCJS2UKJmCbtQLrmbkg2sd8WkAYRWGRNniBtrjoHZuDYuY6wcp3wir",
  "key9": "2vDfNS2tTb7dSCmXRwGbaTUtw6ETRGJZcWdBit2ZkpjFZEb5P4tAWf1WDvfx98bgTzK8xMLfnbuFL4XyGqZJXYe1",
  "key10": "4Yyf8Sa4y6M5kc1g4Fd5HqENkm3aZTEpKmMLELoHZcg9S8UJwYjxkQakGzvebZbdCZt1QaL1m7XxCxdP6HUyeofg",
  "key11": "3SvzUAFbktvhg4xBNLkuEyACs9gjbnatJW8roR6YY3MKAknqN4nSTas3gU9AR9J7wUeHnaoVK32pU6MW2uV8jj8j",
  "key12": "9WkCRDFxT3t2joQicqwrGPavNZBop1uUehsLJ5nu1MnNNZHAqySWuTfwjqm6EL133vNUmY3phDX4nCukV6aixvZ",
  "key13": "4fT9A1Ke3Smf5Swosfyrh4zcS8v3EDZAo2KHhGoxbv65X1bmxTTKHofrWKS1PWf31jpy5AAnrd9f2b7ezubxHyvV",
  "key14": "2ZqZtRdYgRPUh2K518dEBf6W44c68d6J52Uk5ar9xwFReVMLu6J5y5vz12uERDLrUwsHiim6ptCYpCoZBM9HtJex",
  "key15": "u7md1R7s6iWUtnEL5cKM6s2za2mVmLQyi5P2gTwZeJYwvkdcWwXdBAbx7ZM2EScRqLh8JPNnRWvA8RYzbtRSExK",
  "key16": "3WwSEB4ZgtCogh8MADNdAuWKoEHLJNgxJsPxKE8j5ddfyCP9SYREwEVCe7JvowLRsu8sDS3SmKQaWkcvaiQNf658",
  "key17": "3cFyycV6yMwYLDYvUo5LTTEWaTsb4UpZCWhXebPGLZ8mqWAJTf96MZuyQVGDhrPdMx2nres3Wq6oBtS87DnU27hF",
  "key18": "b5hQ3pYEsGHp3RsAyKKQ1UHP4X6ks1pWggTfECajZqu6xpfAF2D5A1o8RJxVecJrZLTa4xp3uokjNyQS5Aiuojg",
  "key19": "2RzNgMqCuREUVvnC5AohzheLRfvRR1SYUpP1AiUTdr9bPfJhizHXYkmsXLMtKK9eywyDdkCdKMYgCpqDQAZF372P",
  "key20": "63ZZJF6ZtAUMH6LQeD2SFK4YUkGRnz9vbBJcnPq7W8HGtWXjxXdnDMDx2o5856yadMF6geoqfzGjbh5iYeZXxnok",
  "key21": "4ctQBz17ybdfdBo8UbG57AfJ2br6SvndYAr2dvMRjwJbB28nRTM7LfwAEdJxPcWSD7EEuhn4H6jomcURa3WEGPAy",
  "key22": "3PE9GH2brV4WLd6nAoGZnTzF6fhhRuYtbbE9Qcb64zNszoFD2ezV9wTkhE2DQiX4jdoPUo6DTqdrPqBndkZtX9qd",
  "key23": "fCmLfHGkNzGeF9iG92TLU6xSaPdvQNCaN31Ltf6fDjmfK877XaizSM41smWde6we9xWCS4wxcg5VfezWkcYMT54",
  "key24": "3Dj1nMH2PR8GfEKWQRmHwcrmVXRA47fs6qyKFxZTVmhSEpDEWHYoRuvn9r1473UPxDxNWE78dkLZS9VvnafuGwx1",
  "key25": "2me2NhCtJEfHtHFMrLzL1sjfpqPY1W5f4cWM3mkzBrF7AGi4QSGWRmQJrQeTnCgefymjdtFtRkRnwnM6RCtoPLQE",
  "key26": "3a5rbujY2jA73vcTKbik9t2o9ReuruYmgTmDDX2LG2egM47YHotZXonT8Dwf8oDKyzmqseTHUbu42oEUtmc2MKaE",
  "key27": "4gVnRSMoX2m3Py36Hjb25DpzqYCDMCexESeN9mbTFEMzLcYDJRvY79JjbFecwQnGrG6JQkEVCy3DPCS3tbUqqrcr",
  "key28": "5BaLUyY8MpbPjmHhEfQFpk8RrsZPT4KSF6mrAF4g6Mh9xNcLUE1aeAG7rerVrVGzVay2UZDwqZhTxLbdUx9JXr2W",
  "key29": "5CQQBXzmXXwVChsmZHGfLpGfPBMLRcjHxAkhcQysbnY4DWCthHLryFG83gLir2kjabb7KEiCLRQfT4QLshcJdhkb",
  "key30": "JVVkLJai4yhjim856otj6g1yXQgCLP2FtYkJjtWpTQfr7SWoCSN93gWSKPdw7Z69wtTpgdtK1MKM1FZiJHah8rg",
  "key31": "fPexz97C6M9PqbaM65GpiZMeWNmWEwRb5btpyehd62WVzgFGwium59FT5a4Aq1wJSMFJ86m5k4TTATK7fgMYHFD",
  "key32": "5N8LHoVxWD6d6TCgp46W4zB8QkxWt8qnC4QcaTisNugoG1UbvYXSdRUAQ4J2KGLaTHH2wxGK7CM8j83RLMBqi4Pu",
  "key33": "3XqdZyEjawrE68mbLjG5MKqkc49iUaaGxmV5xuyF5UbuFReyAaBv3sE5yCUjnPWPaCrwtyAr3cynC5yzkxN9FhPh",
  "key34": "4sguqCGhhb73dEPGENERenyqkB6GS5nLSn6AHbUrywHHP1a1KY4RXJdCbFW17RQ8F65P3TNJW1oQLjMz4XwkUkKb",
  "key35": "65oWeeXKdnM5KuMJW86DYg45s2CkqTMizZenhSn5TnNur79seByq1HckEXViTo2Vq9UostyFJV6HafLhiTfJ5pqn",
  "key36": "5MWLVqUTfSd63Nup5jypfzbicy8RV1PaYtAEyCsGNHrhk5xaPkswbLoiGKr7qJDJjwRstHmL8FzVqEt25uTi7EG7",
  "key37": "65Ck3xDHwyPDLpTpZgd9EbBChYcZKrSpnEAbomwxG6bDW39NUKdxqo32TxkwkBK4pSaEEVdAaRx8Re5x5UDzfK8M"
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
