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
    "562SQVXxGPsLNXmDxWVQT55UsKZLimaaQ7j1pzN6cPLXahxvuX6UqgRxHrucK2XY5W8xmnmkbpr5UH1C187pgPEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HSnvkQ6iVbebqt7rVKEdLefkiNDHZUuavsru3iLzN4rta7b9skSw2ggjg92GKtdrrcXUxwhdKgNB9ZBBmRscETe",
  "key1": "2cVGhpPb5AdkjVRXKHyGo1bqjPGvoC8q3AmypT1RxLJmmPS8u25epXRbmeof9ByzmvmRvTJbKbzzPdoz4wXzw1G",
  "key2": "xUYXtn41SDW44mweRPMadpjockDCuabD1p7AboNC9SmYcs7akWXt1ceWFwy11wBtmLeYYRm8GPRL9oZi1EbNG2f",
  "key3": "4YhSH3fZHmygkftazvqizuvxARPkwFRQiZi4w5EiVM2gJEVxccTkc32unsS8dLLm21Atj3pFVMJfiYhL4WYZkA2J",
  "key4": "Q7hgHnLNfzEagRUvXmuCEgeNYVCrp5XqLpByT4VEqiQjanowPZJShYRQVTpYYaPXnSracCwDjwaL3kp8TFpx45z",
  "key5": "5qyBGvFQj3sNBzkL7BeQVjwfGNszYp9pnbpErMiaqmfABqBHQmCLM868A9zgZJDrCTLjQ1QsA4jwb8eMyZmEQMMZ",
  "key6": "5ACdGWbuue2oGTPum9WUuvcDgFcCgiVrgPcc3Tg4jdd18Dx2HYRa7QN8fgcCA5K53mxFgfPNvceMknWvdVaxCnzL",
  "key7": "eV8nerT4YsRms44AM6QwEJPZWcncyAy99DCfTU9A4LrzFPoucUxmjfFVwzWeS4NCeqYJkb2SZPYzZaWp9p61CoA",
  "key8": "3eNjY36JNrMKumJtN4hqcFVEGpJdfC1knZwYheGginUBEYd6zXyPhYJthvCn3RygkAPCf6zZ74Pgq2xrgzvLAtD9",
  "key9": "4kSqWKdvSZuLvE8CFN7KwqcfFVH3WQPMu3xDbkgkYt56AZkGwtg5NMQFf1uCWPY9HDsSbSDJH9pTZpafedY1eHnp",
  "key10": "2sZReeQPnZkXFNaCW3JadkzBEB5MGQCtixUS955Ssid2AcCJEuuV7gGM6KnqWG2ft8PviuWs4jsgo6FocxtURVJq",
  "key11": "5mDKpad46HYm3jPGjX3TR2UryFN88Nh2iDYABaWzZnXXhZ37C6yi9dydRJ5uNa3xW8wfMS71enjB2mtowPZ3PiCP",
  "key12": "2oq9f9aeuWdNSTB2FGFvTYWasjaKagwCzd5PNxYTKkHgCXnxeNav9862L8g8FTgZ7muFNJpmUtoj377ZySWhGCid",
  "key13": "2vHioorjDK1yu3gkU38NHPUNpoVRHj19gvBmiHjumtnJKoDn35RA4mvjMWGyAN5DBvyq9i4gLN2wvRDzrx3XipDQ",
  "key14": "3EBps9gbRhofZAnr5Zeq1r93AyyiZRvnWdpVTwPm7z3AUeTa3d7E1U5CSpo355nZpvqEyLZFrCoVtuAVcG9DwGpS",
  "key15": "2yCcghWxvonuwWhjbMfvQcuNP8doqK1EUpSyZyaCySaVR7nGDzJ1xqDkMriJhkwwmk8xD4CYMnWRdMFbEM4WytYT",
  "key16": "2tDJDHGK6aVoXTZ698ynYCcfymRARzM2Ns8Xd6y8ZByG8qMqSiQi4WeU1L6MoTRJ4pVmBVZVVhcukeJMH7kkRNjb",
  "key17": "jWBkiLLm1aV5FnycVpcM3PecVq5m99jcEiAhVwX631uV7hE9jZssVCG6TAVBY8h8TyLWvJN5HJ4RRn8WB4n5FAy",
  "key18": "nw8QfxvU2zNhGeZpau1fPrGsBvmdEHjBELVKpXSPyhherAnKDA2nR74E1pb16LRcsoTJL3fZjdGxjF3iEwz3Jng",
  "key19": "2gWv1H4swm66P54PVoDMgnEowNkELRzoAtLinHqGAYirwDYAVBGq5RseQhyHJTq388M9FfgWoXavtaeEfKApn5Z3",
  "key20": "4SmpBpQnTPsPT7dRDFqGBSTQjBYGrWyauQogidE9bmQPhZCQSFGcsXQ6H4bNUX8YP5UjPEkKMa3PeL1MPtPu746j",
  "key21": "FTZbLJhiNSd4GRAkkevDCRHmAH6vjGBc3vDLkMN9c6saxpUm8aUrLhzQrt3m9ToyJQkjn35wVRzrzgFbRhoPiHT",
  "key22": "kaXHoWak7shgiyC9jBMMvGeBMWm7vtx5CN4y1fMzANqf3reUCZzxbCnAcnQZDtERSDEbNPRUqyZE4Kv3YKj2ifh",
  "key23": "4LbSU5ciemD4dTfghYu76oXbc5hUVXhxoyVLs9YrJB1peFQF97MEoVjFD59uQXLK4NDU7XKcYvy8rTAvGFgXW6m",
  "key24": "3nkGh3uSQ66EeUWpW8RVCWJuwUkRcHQ8KyR3GhyJtks9aagQRnVgskifxzuxLPTXaL19G5KxEN6HHJCVUqiNxjJV",
  "key25": "2RGktN5QXcJNFovNVtDtuxRnvr5dKh4HkV4KQ73eDp4pJatY1fxPenPifk6Dwrp7bU5Lw5TvjRza5abzfLP5Bk2c",
  "key26": "9GcpN84LNQopmFv7vcZF8Wt23A7afwrjChTCSKQ95e849MwU54XQEUkK3Dd9N6gr1yykBGytHwL7z51QH9Q4zWo",
  "key27": "5SLnE1x6cabqpB9Apk42wPSDHTTaLrzkW8SjKBDYkaR19qSEadw1Y9V8RssXSHqcYoC4iyR73KtLrtrtZR6ZS3kY",
  "key28": "3GYx5dnMJkoJb5WcRh8QV1pxDJ47aTmvENjhzdw4NYxHsvivukjtrdiZ8kH29Lx3mNwNHPFTRdC3hgeRLpqUFdAA",
  "key29": "5CEtjBvzcyonvReCUZxL1BDf65BZaYQAA4VERFBRq2pya3NLxuomzSFEE4oEEQcSAg6qcE578ePYQKuy8egjdZn4",
  "key30": "4aSN9uwHVGAJVigsYHdsG7yN48u3nYnPTLhNw8qDziLA54wKTmppphoooUazkKWkwBVkAr4T8bc5dnSghu8e5Dfc",
  "key31": "5REm33y2nNhy6RquMAjZV8SVCwxAVpm4tJRNnSi3u3tj8FB3Dm5a9g4DQLLn17buP8iAmWuCMTysrxkTHWuP412V",
  "key32": "2tp1SBgHgXU35a6hcyDLBgh3siSFUPXDXsFKjwAUyjYN6MyMyWZ2BBPiwj8aMTnwiqW9qGW6DvTSQCm1Hie7RiVc",
  "key33": "mc6ba1EA8W1WaHhitPy4cT6cRCMVkBppLdkwCSVDNbHeRcqfsUyYB1oJ7udPNuDuCT5Q6A5xv4QPezZG5tYWzW4",
  "key34": "4rmqUPF5rp46iPPNq7pzHCKkymydTBE5gaus3mN8BZqvKA6t3XhZ1fP1gkSQhoRv23Rgxcrxeg4xDLkDYtxrpass",
  "key35": "qkqJsnobx3VxWQvUonF6RA7JyxGJB4TzE4n3QsyQUitQPJpzZxc7rDEWASC8EY9zS5XDhBf8DUpJNbxAaikQQav",
  "key36": "cQCTWJqCGS6v8S5TQqGQkUk4S7sfQTVouL7oKVes5HzxA14RhnZyrMuCBbE8HEvoCWie6RuKQ4ndPzQdkrtKp6a"
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
