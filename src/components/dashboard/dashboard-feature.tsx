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
    "5hspQUAFxUWgFLP1quujyRHLJZogrkfN13hxD1zztJ4XLG38TGDZAKUBgc3xijQK8RrSLLHtmuZ75X4KPcDJCiXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XkprPGYcwM5decxzfsdjKtWu1sutpiAapKnTHt4dy6Mx2cXaGEY5jjPVdvfkikdx6JMnoQ4mFf6sdY8jaBeqA61",
  "key1": "3t9SGzdQg7BeT4fzcduVFaQ8p93fzuTdKj8gpZHyCciGyvGuAB82VuhNVoS9SDCwozG4CKGbsBzc7dgdahN8HUsj",
  "key2": "2H1hcSkaq2zxvJY8FDkQBHG8x5V7vnTxfZ89Q1U6U79ytKokH2YasMgZ7ajXZ2dRTgPMehxVZ2z3M6bi5vjCK3wX",
  "key3": "qVJNgr4nuqnksXT9NZWb5mdAE1bLwX6ZM1ATRuBY9Wj8veaJ2UR4Anzh8eAxbdqn7XAzuswMtibJieL34ywoSij",
  "key4": "5FwC4PxV2o7khk6PnfhZPdVtEEBDVU8VxzAs2CVWE9nqSm1ojP3oGDbo3aU1AC5dHHp2QurN6LH3EFcyyDaTTYGD",
  "key5": "3xwXGs7DWoUSqR5ByQUgVgnkihhe1hnU5kUDKspAJRQBE6qacFxryHC9wEyrbLuWaZQErgUG2nsQBvt4o4YHzLs1",
  "key6": "65qMhrW4AFkSkBPD2ipbSccyvvhTdiyxjxwaMJoJhEkUxJ2AwqUb4GQZUEZnynTF78wTgZxZVZRpgWfMSTxXWZ3K",
  "key7": "4XYctyYdsAAShHuZwuToFRA8dn9adubABcuCGci1WCwZKhSBNVW4cD3THQm9qaTEVj5h8UAL3UPEPDNh86pBvnm9",
  "key8": "HnVYbwGWYfwJ9QW2QQpCab9z8vwhvSrMBy9x7Q9amRG9fvbohwV4xPrLUrhJYp5E9yWHj4fSpZkzWNdqtzKcV6g",
  "key9": "3M8k8kbjGhtvK54hG2NT1rsSc2edqzpyWs8smgLv2fU8eZ3K3KP1EnhVn9dE8EkqyaNxLzUkZUgQT49zH9mfUPpz",
  "key10": "5qebyBYeaah7Fr5LbwB5bfX6fJMoK1nKRKrRVzQTGmrt3ozBbckGRFcyJKY61XBDLXr49Do5c8fyEceWJxZTVarv",
  "key11": "z2Jp8v5KRcAmBiefbgVEwoQ55atFrYkPLnZAaHcKy5pPqqUmSh59GWbMh3BokbDTP7Nh4QTw1PGdRDdSMCdQmtD",
  "key12": "5RYjw39nqo5719zHGEZ5hZg2hjcRX8CDP7vxr6vgy3HGmbgRTeZhiiZpWkwYvWbsRt1vnYjZRfh7hFXShR5pMQ6U",
  "key13": "5mMQyvcU1VUBx6kJbcWp2pqzxAVjahUcbznKbaQtjJPawHiKnULgrYtW9H2fVFGC5FJz79GQUrWcAvSHMzitbNrF",
  "key14": "4p9rkCYfa1GRKXUxLyhrPfRaUBGULXSFhqEN6V6q6cpzCjJcNnDb2TU7Wsj9zrLqrMP1spk6eqgxwAb8whPchiiu",
  "key15": "35rtwURByELcPDkZNvzDrfr2Wx2Nvb8xwhmw7Cg3TbTB1iL23tkBpQ98doCe124Lduoof4BDQirfmWnxNsCcSZLG",
  "key16": "5atLh3bC3vZPCv3i7mJ6pJC1ja3QzF6NgWk6Gi7bVRHqsKVzV183KbmUirZPfvfBQgMzYoN6zSCodHLSkay9xogK",
  "key17": "23Wgn3y5FfyrtNj7VKQoZzWXmW3AfVh4VsgCeRyd6P7f5yMzLUmFc8YeNJYFnaLQ4YEUN3iY3erQdNB26TXjwEqg",
  "key18": "3pVrhgmUhi3QcGZtXb3Sckvyq5GkXmqRnVzTvS4KKtgq1SsJ1YvJNbJ9Tgmb1xe4eeSVvTk6eb6agHtFfYQy1LYc",
  "key19": "ky9wbqfh9ZRuRHpPSEEqPG9e9NWAsqWcvZH6xH72WS1oNc5NKKoat2qjvUpaXub263sWPasNgEN8EuPz7GppZV5",
  "key20": "5xYebYxK2j52Fqk5uq9QyLs6UbxWM15FhiXoRDpx5BjPj7U2iWUCovio4Wqth9EzS98g1anV3MVsXzxWEcj9yj5Y",
  "key21": "yzgjEFVQ8H9Kk8BaZJeRV1qCYYFqquKwg6ux9n3XYDBRmPi6x8mZox7dkaf5ECbze6RQeaeeMkPvMjTL2N8LVxr",
  "key22": "3NtcJ3aAorVKhgdHxiRUjSW4QDRnraUT5j4gGueBS5dryMgrvjpMdwD6BsPFemssFTEg6aGjB3QdYUXJtwfAAXf8",
  "key23": "41s3TExEHBqEE11HhUm12hJnRkm2gXsznf6kmiNEkR2PAib4TMsPbztsJxPqnG5tZRM4qRWZesq2eSFNGfFXS7Bn",
  "key24": "3CFW1tNKT2WLcUXXNMY6avtdGdW7MGjEpFzkY6Mv6c1GaviH1gXfCGKUssuSrrpFWCxfDoDtbghF67wPyw4yV7vf",
  "key25": "2KWfbd4b5RB3KxvtX1dGGFUCAx8fBuUx8qkwdycg9JGLfwdiN6V5B93ayLPyCNRZyV9aEog6keC9oxBiQE1rcE2P",
  "key26": "5wbDxwwuZWNfuXyxH6N7G8kSZg2UrXjPSfQW9DKDMn52hPoKzGdE5DcNqV48tLhVhW3dWf2y9616pGP5sH9yaCL3",
  "key27": "hwdxSFt6LwZpwk6oQh2nqc9AWyt9eL4DtmicnfsMMPU1hKq9ifiwCLSM7KfUHNCA1xfkX3GrXX6REhafpDnx6is",
  "key28": "4MqhRZHhJbj55wN9dVBQDBJRrv33Fb3YnvxRzCRCN6b9yLJkD4YDBWGzhWHVosmcgCYVcYgX4WpL4eqa8zKEWbho",
  "key29": "2f1CqBMEMFSffUzXz9rBFZjBvzmpWsre1ApfR4SdN2cNqhxqjJnLSAoKDvK1BVz4n4Mmg9RPAdB4geBQm3kyXgMS",
  "key30": "2QXDGvAXcbn4aqWKNC8J9d3cUL6GDBUvnjrra2zp2Rf1L1bDEkGUGyHsihgjG7n58g7rqqnNKLaDEDgqVW6KfxDu",
  "key31": "4FRU1yrcM99Svq93aByHptZqqjZBY6CSWdu6B88XMPvfxiwCJ5H9BjSvAEsGYyySXsL1fZ8q4fpimikish2eVB6Y",
  "key32": "3KyWhj2m3u2X1rgF1DoSzc3X3GwjBWNNZnBitXrTkDRehYMETJXn6Tv2vjxaw4sJ7t92RPv1iR5QqNY8bt1HWqqA",
  "key33": "JWPcK6iskzYnzAZv9tGG818Y4dJwZhaNxKDhCvgCVyJWz78pdPZU2B9eQC3MByTiK5VzSREs61Foy7LxwHQT5Ym",
  "key34": "3aEB8bLUS4DGk7hoGTEwxk9u9t19YiVRCj2eZnT7EREb2amickFudF3BLfZS3kAwPihMMU3VtW7e6pinStijm7ez",
  "key35": "35e1kw5gQwyHMbirSHcy4XhkFYBmcF8SEuE2xbGtZyDhj5VdZVumsW4ga4WUDYaYSBBxnhhfLnBRmwfbLTiZZ5EA",
  "key36": "5wgB1FW8JGTeGSG97U56KrXVKWGz1WLDga2c9QcCvFrBujCDWfrwPaQVAz1NmBdW9WPcZMqxJMZPj9TcW5sctEMZ",
  "key37": "irhLH37xgoJsMw9cSfYwi7QML5JBY3Kk5dXfw55F46GzKjFk8MsNWEtYoznNL4hfTiePrspb4EQpUrb22wzoiHg",
  "key38": "2wDxCXPS48EW7cSfkw3D5VcAznCDpzpfU8py3fXFEuCQt5rmTgx44uuWdoaN97Uy7iKDHNtdC5jv9BX2HMyeScCG",
  "key39": "HTiojbzKySyqMSJpNJypzfNw7QDnNiy5XH1SBecfmThVAHLJhNdpfiTmDq6xuj9PAQZ7o7n6KHfAZSoaXuMbcqt",
  "key40": "3UHL71hVdE1oCPnLr7stWXoQp3FJ1cPRtdiKzcvYMsNpNWuq2ksaPx8xCPjvX9byCreneFaAtZ13LagoPXj11QzL",
  "key41": "2VhMhqiXLvYdc6gkAvAUfkvu5oBrvKWVXBNWFPVVfG2K6R1H2ppkgmMiyjoHkKYNH9CBYM3haEoKkETw2PAZmckP",
  "key42": "4YEDbaNwpinnf7qWYtg6oNft4sVDxxssoPuTzyzTbedDUeD2Nj2WCCoELS96SePudSsyrtJ449FQn9VB1zgfgBVY",
  "key43": "8SL8kY9dEoAnjMxCFMdTVPbbMb8ub3hNYX1KmHSKHtucLV2Vaqv1abkN5zQiZpcuaCyHjEjL4Y2yV4RjVSEDDm4",
  "key44": "9Ei5H9mACCrHKimwLQ4ABjwhCAYVWVerq9gG9abytoQDLpDrvHZ99om3LUW6upBbQ9f8tHTc4QHmWwd9Xn2PqBe",
  "key45": "9JFJM7KQkD7icL4tkHj21Q3pnwQGbcXyoNkViMXX7z8TtYZng2fwFfiLcJsnymCRkRMrhL3NUejQ7ppwEAgScrE",
  "key46": "5ZmJL34Z2KK17q5oxCrBsCPY92dYt3ckvF5zt2nKi7eRHkJvPWxW8jxihVVnydFTECAKR6Tkij7YbWjPCqyJpSRG",
  "key47": "5pAxSHTmKuPbEgHyZhvA7UuAYP1rQH6Nk3a3WHvyhTgG4PazK2X2AEGpYde5rTTFHyng9SvwRurMXJh36J1cQvmh"
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
