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
    "27M8uhJbSjTwxvqjGgxq4YTka4UQAm1M8ryLM9vXb5fknkdepK3JB2417UmaUfA54JQPHLE7wh1XBwZEut28hxTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kebbY7oBH2rstAWQbmRYEDeawHFA5nN89CtzsQ5tDpGJ2gEqCzJ4fhUGmhEYTMMWUtnwjirFthsRxKZ2Ba3r72Z",
  "key1": "3YvTKvUeieUWoMXhujb1eGDudcWUCVrREkK55jxW2jQgPoysAz6nxRG2cfN9KESxGmjTg7DLZXfBVaufirbL8Fsr",
  "key2": "2eVv8mit9n4zn3vFR58GJcViGA1PqkcJ8maq4y5s65HrJjhr9mvc7Yzjtsx6gqZ7FMsy39sywFFhGqotFGHjm5Mz",
  "key3": "6thduDTwHg5e5GmusKknQnsfakvchKZDjmnHSjrxngwBJPzM17ccUB4ifgsvk2xLh651YGxY35TaFTNrxwsLdfB",
  "key4": "2DECt8NCKnqwRa5LjHdFWcKRusZpejEKQBzkrgdkpFMi7zX3GadVgysBfSJhXohzmr7cZsDS287AwGiMEqxLfjDE",
  "key5": "2WiSvUJYcRs8j5zsm17QZbvEvNWubcfDwF9MPrEucK5EwFTaSj7gdL4RBUFvNZFyudYbrFQiNU7Zf9pZP1MdS3YP",
  "key6": "4U3bLqxjqjE5cq4FxrNJvMpvf5wHBMTFeiE74pVaRH4nnSb3UC4wBcfBKZjPM4ixJZ2ZJRd8HP9W1ynZxUWAb5Zf",
  "key7": "3rwUSmFBtVzXNqHrFxRSwEW5QbkKwQDfDwaxjAiWjpeWQ8tPtXmCj3wUBFYRm2Q4JBNEGgSo1r61iBUdm6c3c3Ww",
  "key8": "2YLTq69no94mJKXGXP5K8LhHfAUn97oGsncmBu14KEsV1DQFHXMrD1BVccso2Q7tdDDwi7HXwD1fGwiH8p5VVN72",
  "key9": "8NaiNJsneacNY5n6piSf3nTnzk6z1c5Jew765emUMu8swWQai4ZDHVVbnbA87vmajSVGvaXecao3pzeTna1TUwG",
  "key10": "2VgDzujpjdDS4mKKSxZmQXibxuDcWFmEfsWghF4Be1n3sbqQpmxYgyiQs1zCwM4QBTL6ceXxTrf4d6TEdrNMkm9U",
  "key11": "3n7UaMHy4Wo7h6xWPPSoRXRMKXYCY8F6xm9U5EYAFNUxvrcxciHWn8FCB15niTxsZ1HtQiwJ5bTnZG5xbbpGdFfB",
  "key12": "3QTRxp536yWypHyvCcLFAT8E1rs2J1d8NwDhJCKFjbVHqrv4dVLg2GQfDNkUU7Mf6SYTYLmU8kQFtNqNgD2eGVwB",
  "key13": "37twDdzPMf3sbafP1ijq2RhMa8pBchjtmGvFpAZSnUvcFJjJS59hdq95qp6thD6wsqNUjtPT8p8JkjUVe9HMcp3",
  "key14": "5LCq6VnLbp4Q4Kr3cdHZThdRUEpd2mXXFA3a6LeU6dNqT7sHeYMmXvre28zZ7t8DmrDjqeSmLcMLC3hSNyKUi6dE",
  "key15": "2CALp32EoJ3h47bYg8Eky6YdpCUxBpcbCdH7QpWtHM61VnrtWmzPxTtUvJHQ3uexdncPQ9j1tEpc6XChWpXSExRo",
  "key16": "4ujCmwYh5wVRePBKWpd78TNN4jfn8T4RavZLmG45NbTBw5NKtubnpvBvr2nSkqAHFm3rbphxjYsy6e2whBt7vkbE",
  "key17": "5nsG3R1Ri63P6nAGUxmTCLTfQiPXnGX1mwdFg2UMmYmvTcKkw5EiiefMmV9CSXYxBM19Qa5GwCUWjdUfeURGH5jY",
  "key18": "4ubVaHyBcFnUC1zZTq9KTLY4eYJAxr6A1WoZzLegLsfQtp5W1JB5ry2shJtdGJ96dTdJMpm36zWcVB91Rjs7cXSC",
  "key19": "461B1vqRF5mUtWxk3gSD9DzE9VgsEtP3EtRgJnzKdjH3Nw5cCe6kfK7C6JFmuK3vx7Ld7EUCCDQfDtxbC6SLMc3W",
  "key20": "2zn8thAviEHEZZJmwRCEh9rSk2TNbY8M2mwKvPvyYFENZRwC9t7GyAJENPTT6kne8Cgvi7NDVg25NTjfoQXDCJt1",
  "key21": "5HMJBdpyp4jACV2imCzyiSK2L6VvDwRFDQDEzKvgN5euCWS2ycTEB4g7U3Bvw8VMKysbF7eRmgCTC6aQfbcy3TMp",
  "key22": "wqmgXAVngKMH6KJDnuPu93P8RSQAQAMM5XNfQTwkRrWmNc5ucVEG9FRvYBjAV16JrmVZAFNwCXY6RJE4A4vUXZw",
  "key23": "7QTwrBaEprraenu8doFnvpdNWf87nhHrn1GNLExMsV6UifvaW2aDjxFrZRHxkAT3cpYeNMsddQWP3wRZXxPpa6P",
  "key24": "4LXfGbp4SonMKm8U3Fqu6VFQsfSY7NWe7N4komTerxFeLNjDm6YDTfLpEe2wwdT2EsNQUwjGw5hY2kaxfHWBFmwC",
  "key25": "v14E1gBVPU3hNfDkUPHdwJXfkFSnE5eqN8TTME98qe26UCRkxw6LPUqp5VRW7MF6EujDYLyWx5NGUbYCNyLB65o",
  "key26": "2gR8SVSw3Py2A9WvK8rfCFwdd9woFJy5Mi2LUxwRi1MDztcYyq5x7XPtLS1cNAoq7tBSCSe4NHdASLvuWXDj6Dew",
  "key27": "3zMJmTs3rtrsjsgFLGiPhpWL3MyvaKJ5uJh4DidJ9dwuJ9XFRE5QgXf2PQWGTkpydme9uwrQkCBFaj1USY5hc8K3",
  "key28": "5jdtenTv7pmkUB8MVpaWHhgMY2pY4fdmHrSxxJM5LKj2KthPx3J1WVUE6FX2PnXzWtzeeGktvaTWLuGv1SusujNg",
  "key29": "j9idJQEpyN31Dx2kHsxiPbL8CX8XHnEHkp3HyXGAXfgdxRc7PUrxQtxj11gDSvp4UUZSkXXr6vrFRdKpRHET65e",
  "key30": "48NmvtFvtziSUdYx4pSohXhK9Ukb8jNm6QpEZmWJxxgVFUERHMTT3hUxPAnZcKvTgUQAjEoRbjfxe7NvB3EYLsmx",
  "key31": "5SQaGetMu4crxHGpe5mJaS96pMvXLWik2dSVcL9CFpkax41WP12aKVZUwpgZ3CATibAhasYhnSXwMDZjrPzFJfL7",
  "key32": "5eF5VgHvibjo6GfKKSn7tNyVPPrMadBmg6aRfEew6MDnBY1MLUg62FEjocu82pp9xBPtrQCEvBNgvriqRCEQ41XH",
  "key33": "2b6Z3K4hs21BtoBQxntnKnh81AtyjXhH3vysbC9nxALzQnunijmRyMNyFmbq7FjYrDMSg285ZLKh29TyJoKGwt94",
  "key34": "4KLbCGm64t3RUwuyzcvZQfYdR7FdxZQtD4wmn2jLmNeNqMfvKucd5RtFntM7nmUy1BJHvWdsmPkM2LdegPQTvvG9",
  "key35": "c2r8v2kH6PjeRswRkrzgDhtcJ5ub3ofBwhj7BR9DvGt3M4B3r6v1iht19kpFk52djnJGGE3EPJi4gZEE4iP1EMC",
  "key36": "5ooboua3SxoETJmA79PT7fiVo3rKtJJ5arHgB47oY7QCVeH1UmLMfbdN4hrBWVVH8qV6JYryr7CsVMmaG9E4cAN5",
  "key37": "9TYBNQGsU51URk35qSZytU711v7uRCcbdBwE4aNwPuWiFCPFy18QRNgAqMzvF715T5yfpbSiehoVQ5wvQFng4sq",
  "key38": "3eYoix2ovNQYK7Gx9XFwhjD8xBoiopstdBjRMhJigMHhUPi4kz17gCRp3KqxLTZXxJj2a8tpLCTqSMz1AAgCjQdw",
  "key39": "61H3Drg2MsVcfs557L56137jqvMBfi4VgkhiURM7iupFe2WP7pLTR6E1HodyA9x5XdgrSvUxGb47XxsGbR4GdzCc",
  "key40": "GpbkyJQsebtfYtq8k3xLqBExdqF9cdhdDwCdtWyCBG3z3SUodaEQprjzGnCKwc2x9Zu6xhY4woddZf9Q6eaAUu1",
  "key41": "3GGNt2JNdJFE3j6BN1h65dBAPTuSfVQs1vhA1xGoyGqFaYrToW3S8b9AmLwRbAbJrNSk6Ww1MA8wEiDqtVSzhhrK",
  "key42": "3awfkq8LTpV5NSSw6ytnHUtJhNxaRQYsdPuu4fxEoX64q8Cn1BQhh7czgtKzKTUNgouAC2Cwb917ggg4jQqXQtTQ",
  "key43": "zDpwGdwDMPdkwSKuKy6AvEXZxqBYB5PWsUm5mKpAm77kQ8LxdGw1mpd9FgXppWYV8Y5cCPKB7pKGHUvvdwJnivx",
  "key44": "5fNj6GCE7bcCGyzyR4qxrMz5xHvEZ3Lk6HqhXd8gLDG7r8f1qnTYdxeWba26HHbSYhDNeQ1spPSJkMEhcrghhnqn",
  "key45": "4Wdi8riAS9VuvgmXE52dJTV6p91q1sqw7iEZSE6rfF4LMio1QKFQhPjLz7rUYZ5PtBAC8Lx9zK443uikYhCQxwbQ",
  "key46": "58SpHBXDsv73ncxjNtaEt4c2A3bC3aqkwzboEEXrMeAw6712Xed4hbttpi1sctr6KFMTQiTcBfNBWd2qZ4n8JPCp"
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
