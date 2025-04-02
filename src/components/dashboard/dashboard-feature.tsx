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
    "rYcyQdJT7Hbnz8XMEsiEoiRQ3UWFaTxm3EZC5PX9YGYxChtv8mKM2kKjhjprrC8wKE4nb4yKYn8mV3V8ibv14GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXvadCTRD6wmxXfLNeFb3vdqS9Azma39yWXx2RUHTN6mAzTBMc8wuEkTe9LnbWCvjMCi5sfD5BdXooa8v2u2BcA",
  "key1": "3EYheA8wi26LfenLXxMHchrnbPVwq7xfZQ2LHtyok9Eev9pVvNyxgYsg6p6Fdv8uWsaYwaKuWjUvXTu53mnPbDSP",
  "key2": "2gr9MQd1MGKSpZ9sZj2y8BNZ3NhhHb1DL71LwyugBc1qp6F3S37SxLfY3KhvrQzxLkst3btnsMSkhyGevx8WWr8g",
  "key3": "2e5hGjsehzAC7ELnZaZxcApWkYiKBmCE1DfWNzxn4bqKSnwog64iBiUUJB6ekfoBhvisV22dYSZDv2ZeKPEseDvV",
  "key4": "5YxNBhtGmevCbTpsNzGHecbLmBV7V8NkxLXHwJz5uc5zKbGLPAyZ46ASxwBLBVafPtMn46kn2rY66Z3vaDtHZKVv",
  "key5": "443YprVCpmrYE2zhzX33mjB77jmxwwQxoVy3WwWcGyRJj8hJ4NdjcDs22CgUmr8iYig3iQfBtEJmMP1iHMdayo6Y",
  "key6": "4SxUNLzjevSpmieJ96dRCiMZDs46FBkn9sbM35oyLyVN6YnnPx8Wsn2Mcbi2HXPAkmqZnMx1FXK18NMWkwQwawUj",
  "key7": "5Aq7jBxccbDxTeUgQtXpDpkDskGDxAZrG9pLjLEUjZL1dkoT7eVYMJ6UsTvGTkotXHS6dFVLrP17dxdQ9GhkRvht",
  "key8": "2aLaeJBAWNV4BCKxr5NNsiNDGDtHhkTXqD81MB87GTr7bozDAXEC4Qvj1xKyZegnMbkKSE6PpLLVzVALfQxvS3Qa",
  "key9": "3ZsYfZDt2DY4cAsNpaCXjpu5nzgG4G1viF2LJfxzYB2zHSJPPXFAPofQ7C5wpFwoGGKoeN7uuz7qF5X5Qg6RT9dH",
  "key10": "ujEgTDHYem3ouc1kjp6zajCEWSmT1rWW5r7PP2c2RoMXEqnDMzp4WMRuFfajGpwLtuKAvZr8zyLWMvUpzcC7ZcG",
  "key11": "23FeL4RBwRLky11T8e2acM7zECqEkZ2E6BubBVMgnxFrSuXiWtUmh1gKAnaDp62uTvudkRQA9Sa73PEztiLDy857",
  "key12": "5EFCqeNbE6o1QUfBhprk8VP6LHHwya86AiWJo9MdFHEUEsnFf4hZKnXKkJu2YQp6buzw8ZETSuXYszq9rCPPgHv2",
  "key13": "4Xnou9ksr5SzK15SfxhvMxtaikWJ1dJF6Wv3uYSkkwrsvDUskvzjGt2gVmCnUt6k4qDcEd2ayJYHFynGpRtRdiwN",
  "key14": "WByoeQ2TMMX5Fey9d9mU1tJAkeHh8LJ6qJhbo7ijKXgWVHsUXeqFGcHf2wjjwuymgZjnvU2jdvqNbXTehVDVJgT",
  "key15": "3SAZvA3LDTYVpbAXngkALWAhZe3QyPVsWw9UXpwEoBUpMzvy8t6dPdkYtaCkg2YX9CieLM8J24RWX2p9NnJKot6J",
  "key16": "4tpxV4Z1rrAmLWTSavS46rEPozxqjX9GrnYXvFm7tVfNSfT3RnyucJnBzQGaHQHERdvpU6cTfHxpi4phWkoJLCQ1",
  "key17": "5LZfddkij5pM6upALpSk9C5xgBu5zDNFQA9tQubdUZ9GuRtYeFPhx521EnS7CbiQENwupkDL7nrqiHzoJptm74WR",
  "key18": "3VPoYY7tyn2uPCR1vJNFDg158tvJqkYqxSB8vT475jGMLZR1ZeGHGXKk9mU4M8gVRFUQoyiCYZYAgbQZPNLMVGMb",
  "key19": "49fGiY9chiGmcqKJSxe4WaVwiuRxqpEvSKWkeGVXqWNkk4eGaRTRFN3UcfHvsE9fRH9TtvfyZQdgCRaC4P4ZWzbY",
  "key20": "2XdcaPkt7Po4CCNJe5dYsERi45RD5FZmtEKYYVsABBqT8syC8C213Ew54LcAM8pEsJVUvixDDgJkPooWn1ACxN6R",
  "key21": "65at29ys7Cbyu556moBhkCPjSts2BBHKuR6Ymrgb1duwTEESqun3g1hKVKwXfkNYzC1XCjZ4HpyZM2BcvvMMW3aV",
  "key22": "4i1mq6wStvUnpbYoE51mweo2n3pYcfjHXaT62sGR38Mu3umFU48kWRFGqr2fpXib7JpacPXg4A2MPuM2QoaXhtc3",
  "key23": "2jLs6EEFnxrbiWfeuLtKfcC3fDvGqYUtZkmE3pyr4MxAni1fSE9zRDt7vv6bkcKvcXYAq385ivUWSTCmMQTLuEmK",
  "key24": "2pCJEGm952DztZKMKphEHhPS2AEUqW8mq4fEGmeLsM8x1SFiTwzM35zk51HUs22JcC28Tmhma47BJoZ2Vg5NT5Q1",
  "key25": "3WfJhoutjM2d7NH5YhjRvVopfJDRAroW7UentBC3ABjyEdgB8MhnRyqdueZioVRWMNPmXLe2V4KxpxPVMdfo2PT6",
  "key26": "2zqD5NwX81NwYhU4jVKi4D9xL7iFkvC1DfioNQbPWShV6TDxLmohn5fgeCzyAMewyZ6hBwEq2GjyHVHyZhxULTjX",
  "key27": "5NPykkiCUWSXmbaBtTBrRNEcHQAqAXZPAJCEsA8WTi9rvDgv8FV28fPtbvDa6SkCJZ71LXrjqCPZCoj7tut2sx5u"
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
