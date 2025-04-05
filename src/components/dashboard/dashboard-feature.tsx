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
    "3nop5jfkAUgm8M8cpkPMdonypEPPMUrqMarETPSuSWZcMiDJeF8MgvYBPbsCNRbKrfsvB7841TeN1aKqaRnAFL7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258p45niKsatQcZYUuMrnHpWDYR2CSj8dvBwp7RQU4eQRmr23GQmqZnkoP2D6Sj8UXb5FgPG4tPQdvoxyc55i4yx",
  "key1": "5JFHZXfBizYGE4Ua1FfHKcy8EyWQkoUSyuWEQDsbTRWZurZKfun3UJyTKtTMqCoiazyF8pyEB2ybLTvAvQ4ex8fp",
  "key2": "KT9vtK17PYKYTV6fw96oH1eFZharK3gus4en7VfveJAhTAUPqAZdU5McqT6Qe2yoUQkEewayzThsufXKtjz3op5",
  "key3": "2JgwoVMz5F56EL8WoFQidDDqDrZB5i5GziqTb31sXCXCaXt7jZY9CH9jydoSvS4txujmqjThE4bNWpiAwp4zhYpu",
  "key4": "3beXDzqyaaCKezXU5xTngyU2k12PRPTmZCZ9NDJxJYmycNXZoZjV5mRsoD9hvhnnDJAFa6YtUWnZt6UbqnCXNEo1",
  "key5": "3MUPLF8LCJLYEkpF2kAGUkUczNqJi62ZwioH1nPJHseWdGS3Bvhvoy1st82on69ARxueSxU9gjahE6BTbDRAKPfc",
  "key6": "AXZGqqcebKX9Z7GYAkZj9b6qhGqzxJQS5UWXNXvNHvGCbB8sxNAtt93hHg5L6AMwcTSU18BmZgvMhRon4X6Tvge",
  "key7": "2pJWvt3K14omfkEfdzmMh17KW4kD1TWeTVBHoRZBweBkZByUf9dEg1n8D1ZgXEv5JQiviuuea4TSKhrwfWACjmew",
  "key8": "2XJbsmrZoFfaZDZiG47MKketN4vbZMwbDxyD9135aSgqijM1sBPAhZqKgehKcztkxQxA6W8zjyQFPvDS6HSrmRoR",
  "key9": "PcvgsG3ZArqUn3uQGofbuHkWNCsMPqRdecuhPx5v2qSzVwoR4reZmk9MuPfsbmacmExTWRC6uMtHtvcvZFTa6cm",
  "key10": "bNCT4cDsQDVUv8p1umC52hx5fLFcCp5bs5XaCGfdtGFpDVAegJdEeskkkBUF7x7zAKskawrPWGMqyG6eQM1NUK4",
  "key11": "gtSiqmFbqeXBXi2i5NPEaHqV9unCNG8gWHXaPSqvT77yrgKcQpTyeLEEmwBWiDuojc5kZ7xXAZQ2AYYNCrQESSA",
  "key12": "4eS7LJ5TjSwMz1FLhbQMi658rPUmCvETZqoF1iyZjWTv3HSmr1PxuKCpcDZWm2gZpyKwHAfWfyWfa4Kkuzgf2ye8",
  "key13": "5u1K7WaQJa7iwaAmY5UFjaKBzQJ4X18d2ZjFdV2FYjthfNEKkcMRu9fmFDLfvx3dJzC5guKsYhkVLnEjEgCjCoXh",
  "key14": "4u1BTEpKp3gJ1AE4A1BXS7MzfMJcdYHUSXcEX4jsdvWGK79mUeDZNstciXPxRuaaPKnPpe77cKYsVARxBsFP5ttA",
  "key15": "3DEizbb3kSeXf7JLuSV1UU1WL97mc8otHpPVrEYHYk7Q2oi8v7JF5WVAQK1YKTJJ1gZLLcgnDnKa3hXoXwdirTra",
  "key16": "2gnWTeBxdEcApzbMEKzgJug2FjVfGKJCNECCHxm29D5cSaNaCtic1gqBd3UHRdg1bnAKq87go1dEPtt15g6pK66K",
  "key17": "5UYmg2rf2iaT8FWwdeNXnWEAjqUE5mSeNeHxgExCRUZxPc4fpq3mgfbo4TasPtKMBuSivSpemMRfzsBf4CYdCttH",
  "key18": "4LxoXBAtrT3UczrYjDB9sHPtJrHdUVX4xoEFtk1ZbqhZnqNkCyNuvzggr1XUkzxRgRAuiRDJakbDdrHu9UqYgrVa",
  "key19": "Ap9mCd93hLXMbrqCNH86kLKY9iSD3cWjFdhykNGKNNDjkAAe8agrP3JeoZm7PtzQSRpFrZ5D8f5Qu8E1HDxVp3H",
  "key20": "63ZLYtx8118RB5rhXrjHC5QYXqgYg8Q9kUXi9sCiDBFjvE9mTTeuCazji9g2kkU6dqP4GfXn8eY3tz3aFQL3q8ez",
  "key21": "3R8Yk18wTnAwgU69B34irLJHrqw4xn5DqBrPreaKkhqUsufvwdeT8owE91tZ34od4jutHeSYHEQUKHKq8MKFyd4e",
  "key22": "3UATjNppC1GWvf9xkt78XcDyWFFwQTJyySVvCxXanxNogaTgn82tULEs1gY9a589VnLH79FqocACEBJe5ADZbURg",
  "key23": "4Uv9b9bAV67L1iDhqXPXTpmnfkNGbxw4uBG42YDvZfaQ9NXNfXXTNuqWY2mFPKdqrZNEYHu8fCRa1CrodXKkaXj7",
  "key24": "2qGJXVKVYNWVRNuEbhdzemnmGySAbMDPjgUSza9AvNLbxgNiQ4eb1Y348zfWKP3vMwmHtGDojgEHxTG6dtRoik7j",
  "key25": "3KKvAzWyTiV8H7RJHM3KWyE8Xa8F1e4XiX5TUx6tMDa14fW4jn2iVKvtdvCfz97rG9a58DcJqLCPD2eSXZtyHckV",
  "key26": "QVC7TjC7UPCW9fJYj716CRjwhEmHDcTcCWtoBwrhfHvbCkDkauorgbLyScoDojuUyqYh3DsAjKrTFCQcJDGa1fp",
  "key27": "2xLynfhXiHhoNy5fSmteLAEFLmQomynFyMFFYN17JTkzusUPmvCQKcc5PvVwrrykLAhqkC6LNZeWmuwJnDtW7pFH",
  "key28": "35eTjkRPZq2jpqkKij78oZSvPkXufKPqm47u9W3XNbrvjnvF3z9dZXnxqrkqD2fNdyXTGNsyKi5sDQFqZRJGq2ZR",
  "key29": "3DfaRF8GFJE9uxDHLeJVv3L7b9GkcJsmi96VDa3teDs8zPtY5ZuSdQmo3hZ9CaeXh7vchKgiFb4xStj84MNirNPE",
  "key30": "4K2B823eHDY3YzmpzH5ipQX2HaiLK7Ly1Y9QnMKz1iJbgDcFj21n1WRdbqL3QFJoFd6GoSRYt2tbe52UqjN47Cbb",
  "key31": "2ZrSEFjPmM9nYHa7pQ9LMWFmFArke4aZYGjpr9t8iPhFyC3vpqwZTj2rYunWQ8bqCNxyhxDQVwHmyZMLq9nfhtFJ",
  "key32": "UvZjGLfBSSvxXaVinAYAaSEGiXVYSPuyzkCJwBenL5JWZwGBfm8uo7Yg7JZFXccN6RMWKVRjAZq6SbREUipXAp1",
  "key33": "3tHevgkg2sWu6vzhB7v7ADjnUAhy1spRLFsA845SGsFdf2kfj9kjy1sXtqGjUYziCXFiY9t2VvMorniQSpzJwBsb",
  "key34": "2Yn46basfhw2ju1HxsbXYttu6z8cM4FqcX8vjQ8immV6mKz93wNDV5vWVhVQpbHpGZtyVsVQYD5qiqTsATUj1wfH",
  "key35": "48vjVLzYfef5iHyAvHErGEognPkT1DZvebJYKbJF312bnywDDk256xAVa9mEtSBxue2ses961YBuNyvGFfGwg72Z"
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
