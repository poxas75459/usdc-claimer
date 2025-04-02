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
    "4bXiryMvbQq44ru9nW6m2MTCWv4XgZdis9jECx78TdyCpSnWGmUYUPCXakhEGGvM7Q75soADJtCHRHnk3QZ27JgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xrDMWF9LthSuU1ZyhqZLygBStb3SZFEdZCns8UnrCbbHdiVG4iCh6k5MhbzjbrnaJtKDJztB1wpyR69aLJHUfuQ",
  "key1": "5FyGxUSfs988vWJ2fgLkypYam3B6EDwe7cNC7mgjfD96oPXX8ECjK9mY8VU2VBm9k3SxXBQaPoXEVwZrc8pM6qom",
  "key2": "4S8TeAEnrSZSzx2w6ARKzKx1eYCwWipzA6uZ8JgqguXDEPgs9MScmBnTkqTDZVMYCfKGPjwLHX9nrfTYRFwv9Yab",
  "key3": "2kjuxiek4HLawapsP46HRGzHpqtTuf3FLmH3yQZ1gGwtGfNRbQado93RtGPM6SoTQ1nfyB3WscQi4J7B5S6YwRHd",
  "key4": "M6hxuqTMuYSUuLwZgZY7ceQWHAYd5h9GuZtRsdc3jh4croNAxRjqTSXWNYPDY1VCeTGUAHf6ih4M8R8vkwH4YtH",
  "key5": "358xWYAMVwexsjEzKmRBRwVzdvbH6f13SczaXnUqEHd7ivtnGpxUo81APvnHtm7mfrnXvUeXo326i4SPrZhAPeCo",
  "key6": "4Dm6gUwQJu522fq2x9zGNHaa3RzmEPuMCohPKYx1Jvo9uGxn8d1aDcScUbzZFc8FrhyXebFZr7hbpEXFzDmDtfZ6",
  "key7": "5decWHfSxUKJN3j2TWWagnwBrR6f1u2y6SNEx2BcwZ2AA9VqDfFXzEkdJD5idseyozSZ3DVJw5z5CrQnvLMyLYmd",
  "key8": "7CAkoKaCRTGVLxjnbDyHYfiHJtKX4aCRdqXj8EoL8PeUDjbbcxd16yhsHxBvoPWYnYRV5qT8TKFnZoUzN6TRXVT",
  "key9": "67bVMYwgLdGBV6uiTKfR7cFhri659GoqAwcEZAXYK6ngsFUgW18ghKkq1G2cZhE8fVZNVsefShSeS6u3JcTsUwxp",
  "key10": "4g6SCY7cL9BfZCLXw1P9kwAakPXRyas9yQYpAPEZq9jYhjBsGP7LsvgUJDtEkbVSWVaQqePwW7fP5QBJbYXcbPCV",
  "key11": "2nCZM6nNuTnum2PVpC3xXsnRrVgZX5VYkZJWPNqzuAZ3L2ikH2BzeSzSWLEbYVMHew4jwvDYduAUU5cZLrgdaBte",
  "key12": "4JUSeN7GoeFJ6mVDvYWiaaU5apUjHRPdmiZu2gZabDvSUU2LXK3LdZhC9x81fpFwnEHNxNP8nK3YoK9GXkXa3umz",
  "key13": "z5H1AzrRyjhrDr9rHbBEjw1uqJrRQv2CEvKEuMM4VM2oZPyiGWiJzVg3sx67WRytx1vySpvJjgDcXdpc65TUHie",
  "key14": "38wYq1Vbq9fM58PK1mWLJWj8TfXBimHYAa6xLM1oL7zSSsBk6wvDwvbAv4Nn3GuaNrJSdPhzAUG3DV74E52NkXLy",
  "key15": "3fJffNK9vpd3ZnrkLAyvQQ7j6s9hQaNaMmKQhgjGRcdh6T7bW6jdxJCLp19QZBxb6RZh5bPY38uHCCNBG8axv3cV",
  "key16": "5WdsQPAgLXJruHFGvMD4bm41Sns5Fh8gNDuoc5dLdHUVhoi1WHr6MMQ53HJvpCkDSkiRmpz9CJXCtFXW3q3i9b8E",
  "key17": "EtZ8UU6zbgXGVwXr8AZkGhyZx78ezdr1DrvBeWMsxNgnjc9U1Jraqyjbvm933hvZaSucsQPGi7yycfqg2uUUu58",
  "key18": "2TZd8jbyTR1T6XpPhLnVLdCE6sMFhyJqKhbLStQ4F4aMzgg413eb6ZcTHzwu1WYLZmiL3xrJbUcTwyzacaWdh4ZM",
  "key19": "3SiT53VxdLx88JA5njGJSZRtNiLN9tZeRXaJeuFW25Y2ie3XNaDtShpYWc55S3Pr2LNpc6Dd58wuAtNLthDizJgz",
  "key20": "37sMdbyyJhe48CpcFVu3tLgcjiRyiSH48Zpw2hJwpsDzhbgZKszxz2px1AdUuuLjKq4WghgvKDiAYSJfa8V73TLx",
  "key21": "3GEPPQ7cNpfejaaTv6Ds5nCBgaTkf2KbqAaaFqJLpuDj9HFqoYAtQyDiZUjLymLmXzXkoKivmrNob4chDqcVRsUu",
  "key22": "5R91LqtAt3qtJYUG2ccXtGg851uEF3L5E285fB6jZPmtq8L7R4rZtAcE9xVawBFGchHVqstddM8bFK8Eg8nsHzPZ",
  "key23": "42iNpksnxpjd4gbTHstpgyUqBUDcvW9tKjVwAq8qdx2RRrwC3Dbtz4WzuCGrQNwavu3XbVgW7645Uy1QYqapxCWH",
  "key24": "4hG3DahJyfkmhUgnzNwSKEqNFfAEvsAtVpJS754BwyS8qdPMZeA95YcffBc6nLHRxJPDHXExoVCweFirZds1pXAX",
  "key25": "3NJpqN2MzV4ReLMT3oZoKNYwUtKbsW3KkTodTCSiEtiE6u4yPXAvKEy5TRCvarUiYJDeaQBFG3dggMEHfseXSp4Y",
  "key26": "29gQG38aWZ5Sa3XbxcEfXyNLW1z7Na9DMbZ9mwwKoKxUUfvqFKoctpmf9QEpipDRjVpu35GaL3LYTEjwNNjSHyUk",
  "key27": "2ZqxV7o4yFGuMapM6pfWc8KvNugnYukhvtMYfnqUMMkgK5ezkVbXkQinp96NrW1UGxvuauK7eqXtzhdecvzVRbgR",
  "key28": "bF69aGfaX1Xf215FHBwQbNGJLEgaP7yZY79M4bXrgie7Z2Lj8YVScPP87XJMqsSHyweA2jj8kjWXkimVqUtiHFM",
  "key29": "5VpeLPrWfADHDWrTEBkdYQcNjU2gNqckk52fQmd1YWemFe7ARgRJj3zwZ9mNM8T5G5rV3B1wgZveiNTVqCqtmD4c",
  "key30": "4QbVoJNYrDYG4rZ13PCnB6n5urfLhXN7EBXgsQvkLdYATE7Zj83K2wFWKrT3BfvgVUhn9k9SweG6vN8GWpKHHKiy",
  "key31": "58uMC14AW2LZUJ6P1vyv6mCwwn9TJTn7uoxrLGvNPHoDUNhxYrYUPBU3vffafL5iQCJiRpyNHxf4hSQKKqVL6Xfo",
  "key32": "2apawEP858Kbzu465tmyKMZjDZvhpkdJxMnfCxDE25w9pwnvwUkviXonCGe3NCpfC5LjTcNPob7zZU755QD1MEUz",
  "key33": "kkMkTMoKMfTxozS36c87soJhHq2EYizHcmJiF2bWzH2k6wHLNZB4Sa6KPNa7mmEGKnDYXVXvDVhcNSte6Nf6cux",
  "key34": "5RL59hQSmpsxySygeyZPDfXeZmVvH59nW3yGPo4pZ5mC8xKJdFcW2pnXcDocfX5wpuTHCPh3T5Qp6AZNG2m8gCfE",
  "key35": "4JBPyANkv9Duk2mZjRxfuBDKHQJUXs49U6AGgyxuBPSXLHdvhCXsVXrmynd1s5iGj8sfdLRZK4CAkezH4dz2PGbD",
  "key36": "21DoR5zKpcuUKjZ6rqpat6xREFU5jSZqmKb1tu7cVFr9dPCxS5bcYdP7J79yxvBc3oV6TTxTYNBGZQTrq33PnVmE",
  "key37": "5i7Pyh5dcHTEb9knkgyAfDx94F8CVnbP4DQKhP5BogcLCLFdF1YrVyFrzjL8s8UnRSHKghhHFuBxpNbep6X6ufkN",
  "key38": "2wHMZ57LmMjYNnS29eywwpC9vJ8vYQLDMK5zwJWD7zssMLmsTgbCCqJ4Gc4xqPCc7pFiS4xSitC8xHZGGWpRrDow",
  "key39": "4naN2ZNTxvTnw8PN2PpSji8P84XZEDUBSgTZTwZDknD3neNE1anrfMZ7dF1PzMYVywXjypJxn4XoisqVSCxozpCY",
  "key40": "4JL3Zuw67ASmYEd2kLAcAA2vcykMdHJXnMGXmHUwEivB4efVvmWRkssr1fWqyGXAGW5MiBBjAyCGVGW2nYM9FaBW",
  "key41": "3MN5HCbYQcJCBLdQGzJoCrc367WVQRwXfhinwaURmHyGS8ixyGz8i3CWtTsLtG56ZqBdKEkKgjtj37AUYD8Bzv3X",
  "key42": "iYx66JkGNBHPG3S4dvj9GzFn8MHaAxYy68xq92FioHm6QnXuQ6wMAqNFhPFe1poc8QWKMwk1hoDtPmgn4BsUe2q",
  "key43": "eWfyGarMhxhGcYQW8q4iUfWPLF1VJf3bzweiDekgnJtXCR78uhbDa3H9eB776vCoKtojMNSNttePsLYvPW4isLA",
  "key44": "41Sf6VawHvVhGh9kfxrxXo3TCj5ut7hUt7QD2pxsD7GuES2puXutSsFTgUuD6ZPbZ7zHmaVNkCpatypSqnswB3j2",
  "key45": "2Mw4AyLfFqjeqXntNHN8e7ayWKAnyvtVvFzFNaPBcW4js31iFYUiWiRZvEajygRP9EK3gmsJyDHZdMxQp4TedcmU"
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
