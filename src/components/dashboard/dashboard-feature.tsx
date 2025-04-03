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
    "4gKqt5MQnmZPBMKDU69BASE4oVZztrrAj9MjbMUCb8gSU7kWXCQxr1jkrWTgwH6nuELnVqmXmygKWs6xC24nJH5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hUAXYVwWM9BCb1f2aTFbEtRsFs29hVLghoTJ2BZa8F2zYxJmVhbbUK4xH5CMAHc6cKPLhp8Y5Zvn99xuxFfVDmk",
  "key1": "2vcSvKguPpckRyZKpDnjghn2W59FUVAhKcZPJTAZHbXcV9W2zQL6s3WYs1cX1jGvhBiw6Jk1Yry9XcFs2Ag6KMne",
  "key2": "3Js2383SWcP8MbMJYmUZ6QgUayfhP3TtEzJmGAKzezyZBsvYBxu8Wndi5z6EPsQ4rTiWT2DxEb8J7HbH2xz1GB89",
  "key3": "5MxjKFwB8MhDKEY71arEuMigo4uPkE2PWTNULB7SifmNTNzwDTjuEhiH2UMjHr1zKiYcxa3H6GxyKQAGA8sexR4g",
  "key4": "38KJaUawZ8iDfSNGqD2D8hmdo6tT5rCAdcn3RrjEoZkL1kfHCW5XbYQuJ4evZ8B3qpMgAHApVafHdo2nzmd5qdgx",
  "key5": "3hZnAUXFivwgx9cDpxws9eUZzucFBrN2zKWAS2iXn1AyhAq6c3Kfx45KHkSxJ4tQHZbwNriysfAsnH22n8xoePvb",
  "key6": "GVHnAuhtLr1niZXXg1acWoeerTgXamtHTMZEnM9Bcyt6BEJrGhia56VmcooRG7FEXRAcqxfYxbVbu8EEXshCsBg",
  "key7": "T3JJSVfFVP7DG3zsnrmRkF9MpehVrNvBkUTjkzQVCrDSraGwmWPU2VyjBKUmJiTiB4i9QqG5GSudTdxzELvgRP3",
  "key8": "37RGbmgTnZzjoo6zaeMUmFnNfMXEJVeNmpWhVoFFjLQ5zhijqMKV8bVM4HtExVp2BCh657TcD4TXP1fpVvKQWPSf",
  "key9": "32o1cKxDqmPCsip5F9pr4WVCKHiWQ9TA41DM8AfW5HLUCL2TGCt8HRSAcZjCVpRLa1re1JbSzSH7wt3sjztX6Hhg",
  "key10": "xwDRZe71UKQNtSJbFjgd39327ERvgxq9nfum6qkbhiP8oNM9P8tSS8d35LbPmx6YppEKGofRNUjXLuN5UGnC1XX",
  "key11": "FE65mCx5zLKN8qgzX9o6Whxjpn5K7tC1VHmrczvuG7NHL9No1LLnaJnFouDtYEJJBmDhyCkb7ufv24Vzh3zGE5c",
  "key12": "p6d4XzEGy7Dudv9az3t9wiKGgUUh4qeaB5oGHAQ1TJrCze9Uo3mEbLXWhyygXjEWH3ZiYF6LFKzWFopLFXoe1iC",
  "key13": "34CTCa8KdnYwJurZ4YHgdBqcathkZXmeJBgCYF6VsVoYjN3YQuUG1vBGGhSrvwGpS4NrbbU83sDEfNN2j6ey38fp",
  "key14": "UqUhEuUShC52rEgByj9at3N12QtJVWuH1KS72kf4vaL5NMEVocar1yXs3eVZR6Hqef7HLYPWupNR3Rh5uBb6mo3",
  "key15": "AVMi4fpUxdRASTNydx7vMehrnCEPbxQgX2c3GiePhBxxa6knZRMyLv5BizapnjYcw9bKmuWtPq1YTkc1AktePaQ",
  "key16": "4L8tu8nkguykAt45c2KrypyHx4ryx8q8iBybFYM3sAEEJEh41VTiFZhtMrgc3ftkHBSNGckooJEP7K56fzSPX3zF",
  "key17": "325hH2RYfRVQG9GCCQywyCXxBadQP4Fu6W5GA2PpWDUG22JuB5rQ8pMcjcEGz21E2cPNWhaPkp7nNsEC3BrguaH1",
  "key18": "2SDddGudTqw14BfYCGg6CnTcRJoVvtGVotredm92MhABxmiiUwSYQDeKuxdgA8gPBjBxS8FGj86cF2sejveJTPhE",
  "key19": "32DKhGFZPqEYVexWKFQGqdZ6CwsLhSaSTtvKmrUSAmHSxLAdhW4Q8hKZuqKjmryManGHEWGQciRyTwjEDHdnQLkT",
  "key20": "37yVbFSFh7GqnEyHbyyXN1wocKkEjmVfHjDp4oh3WUy8CH7gDZPU912NgkbwMszmYyX2kuSY3qsha8WTrv6fffTm",
  "key21": "5uRYRSHNn5HZp39Q6bfEK4M7cMNP7UmpTx89LJJLKMsRY3AQagmuh5mWgboov54VaL4d5vQ3PaZBKyx8bM8hTGyv",
  "key22": "52AHjGcpMa75FR4rry3sugNiNMgCRADkjJNgRzLBSkqfyuB6fFntViNyfws9pPvpRVNzT29MLgUPPbt8sKJRjQFz",
  "key23": "4MpYVoJ6hmv7Zn5UoCHGYsqrFwRxTCwHzU7M9aSSoqjt8HjD2cBbAzYcr45mp2fa5CbL2bk528VR8gxneDDXAjPP",
  "key24": "4TkWueTqKJoY6qGfdaLtbGmdpxSJaBr2SPwN5hHRiPN2ggYPLb6omnajKESRDkLqdL9wx1p5gA1KhE8o6r9H5QLv",
  "key25": "2ixvoVzCgbqutZ8e5BrsCnY3LzuxoLgdDvZVcUDZaUp2WYxPYUnobHz9dpSY93GCS8Lh9SX65StxccecR56Jcm5b",
  "key26": "4ZSDzaQna6L98a9UCRypujJSMDyZsGufUKNTbatfNytqNEgY7Pwk43etpQUAShJFfFS6CFYxeoz3evFp4uEpT72N",
  "key27": "3JCuMxRFr3rQHRqGop9hYR1a5sLTm1k62o75PmwJuuU7PLTMgmF8nZLvA9bCw6bz2mGomevSXvUgQTHpnHBPNRiB",
  "key28": "3rrzGqNLBfWgkW77PPF1vynpH4vz1oxRjddYEeMY8mA1Yc6SQ1cu5aPHA3ZuWa3VLffcmxGkZQFWqbexefD646PB",
  "key29": "3b5zQBJTHBVyBR88FgZX6FtcT3EgYA4caWj7D6WAfTCrD3ywMFUhwCUoNtbqqjDLEzJYLxhCweGyGamNkgLXsMYf",
  "key30": "2SenADPgpgxKeGZL5E2UbdV3xqcEqGv5MkP2mc466wJhACfaEU3wmwmMRhyFef7HTWKbpm3xqYYKMTNw8QoGtaHE",
  "key31": "2yPwnNqGwmCmkrzWPtgCoE5UD5zRquZEV58KoED9orY1gk46GDcomPcBSFY3fCrbjvHJCqiDbCpifDuFrTPT2MWP",
  "key32": "5yGqGXupPcmHRuySuKV8e2Y2hxbfpfqNJzYhKKMv2bxHZHaKvGLLLVYAQEFpnQDczMSfBENcGkWj7kbjC8TkGpnX",
  "key33": "3pX14KpR72qXzZiqA1khR35fqvLb82usSHWe28P3Xpn6xMCGjjLSvtwcWZzh2eCV1AhV3BvJ428zoiFX5FC7t5RM",
  "key34": "zbUm5wkLMZNcdCSwLPnkY9PiNLq4KJwfDJwfxWx2LyAbKgVtrvJhTCoS3kd6dhgYK3diNTUWKFgsJm6zHzx32Hf",
  "key35": "TyZjQQYTL5KKCRH1FWJCR1sJxApEisvh5y83oSEqk5aaP6zCEnnTMwgBTPQC9XPPwmmoqUVjV3Vo8PNhk8fMDxW",
  "key36": "4VChK6PqLzbJHXc3kxnpRZVwPKoAvsddP4teTdKpXAmAHtePEWqkDzA4oko26MBDrvWbQrUipKEZPcuwF7eNA8yu",
  "key37": "3JyfH7eJuUoFLUWCjnhZr2RmfdFcXC4C8cv7v9sRX1iA93DWALHpokFH16qvH6JBGNktjFDnLzrgoh6jM2i8ikx4",
  "key38": "2iwQidFmpHaoN1gbGqD7dGXXVsniwSdPagxecR8mNgBfpAaNcQnEaRSmf9nknUvF7WhYh1KvfWpk9p3pWKovz6Rd",
  "key39": "5PwTGdh9mZHqQrudPTDEUosxntxVVvQvJos8MxgDvddeoBHRKdCw7SmNdFccjKqEJoWe5cjTFrbGPfWG8ooHSqge",
  "key40": "5iZh2sgEZ3XXsKTKWHFwC617gWp7okLFv4QsUEXS5hxHhPdReP8V3Pz7rXJmLP8ZR8KTdBiXDtCi4ZdLgxg9AWH7",
  "key41": "4AsyZJ2XMvK717m79pMKFQsTW1CdCeTxyCWu5haYgLkc5UL9QKEWKPVmcs8UdtQxRwHMQj2bb4bRmmTWXXuzttPw",
  "key42": "5dK465oyWxKbXENChsaweXMhX7kqcVVN5ch5SC67hz7bF1m5MFqxcyp1zVsiPXEgfSMk1ea2hG3yACi5DtBEgcAh",
  "key43": "2VFo3i8Zvj4DsXCn8UCY51gm8CpkGLnTEiBoF6kUAuY5gt35mrvoMoAb3R8H2TG192KchsAxELjZzSapCnoPA7Bx",
  "key44": "268kK6zsW7NNBUxjnfLPRNe1x1ZXFtzJxWpN6RcWrmoEpZbKa6XPmKGRZK8Qe8EF7Heij5snsGxp7KvwV6iVqdvU",
  "key45": "xmYAMyj9A9AnvUJM4fmrQmkzgaNbWHoRJA5TKmHsDaZ38Q6edsrScF2xAUBqAJKsGPmpofaTeqcDQgDstcEXU4Z"
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
