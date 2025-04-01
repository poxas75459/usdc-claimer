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
    "3Wgy5GQ7Rbgx5ciBvUmeFxvFPZhscaSi4SCb6xQVkP16MV45cy4MvB9vX9SjFTE4ZSrvanBku6qmm7mLaefREM7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5himmD4pSinXdEoRNizx2tuRZaoo18hTMgGMgyQJ2kdV8AVC5CabQEHDb6JQyRd1aEM4ASRw4YsWNxL5UrXcGGW8",
  "key1": "4Yx5JCDFZngCrQhgAdX8B59FZSDMuN8JD2dB718ywchbWDgGi4JhtggdVTKnNJg2T62v5Rt8aSsfcTK316wv3Saa",
  "key2": "5v1MW4q3jHzXWmdW4j2GSzCuaKSKyM2a42qDhik8Depj8v22XYUKTmgwfYaLNCkmH8WLFgL3GpqBaBMr6DFKRsdm",
  "key3": "qbGccnuQN86gHHaKcCZ9FRop5aWVa2cKBhfqznLEtQgyTnfEG9Evk1VrfxtB5ejSwAUqbDMWGHaojZUGH151txf",
  "key4": "27GofWhvzcnfMJLVEpjx6zj5XzB6xkF9PQLUaNkBfcEjfpqg3kVGXDR1UeYKV2yqiDwt1PE5fh61boLjic3cxJmB",
  "key5": "rHD34XyMH4yFupK455jyHyL74QxNoz2WYGanRjdWT5fjnxX9J2W58vHaNTFc64F7UwcMygCFj3PqriZacTVRTNb",
  "key6": "45CYSM1TmBYjg8RNfJEjgmU4ReUUu3U7WGBrxhuiqyxLRMZPdqTqK5PocCGbBDkNH78uuMQ1UpvxVJozbVRh2E4F",
  "key7": "3L7gGEmQ1icNutmVCzbT9X1Z7bDCYarVrDCMajmmJkd6uHJPFgArfDsYoctZjEezd83ScfrFy24MD5X2NEBf1Zx4",
  "key8": "2fB8rYUypb64bJ4TCg4vWd7X85bLvw7orSQEgn6oRd5UbW3anGLKP6Ut8tbgdbmgJf9PAggAziMPvAHZnUptueV4",
  "key9": "5E9Nakj9YBzuA9avFjiekK81e9xmuSSj8hMFXvtKnanQUBG7CtvrLNW2dGVcdDEa9zUL6CF5Xan1CDCkPQipWZzn",
  "key10": "2okH7NiPs1QwXUwwzXs5NjrFskpCmvNKnWeHnjy23XZiSSC933PPzF5MGmYN5G7ovphMjwaTxkEgpuZMJFdVJF1",
  "key11": "mHewYsEurpQcx1EdPZsn5ZFDnZpGJ4tvLS3Ra1U5CQYGcSSrWdCTJMJzto3P8MLb1weuf9L68CQDQ4pUH3TPGtH",
  "key12": "63UWiXafmZ7Zi5zi78e5Bu123exZ3wgh2sVNJMrAMKiDY2iKbadhoQMxqUizVo5fC8VmWhA427Aw86sLJvePLEGb",
  "key13": "2PAwwbzeDxE6kJ8444YDRKfxAsx1dabh1h72npfrZTt6bEAsQs9mHqebARgCRanPRJMLTrbM8uH8uKTLSrkrh3AR",
  "key14": "i9usLs1vhDj4RXWiKfUzufrQSL4QpZC4pkWhVmyiMgHZdzj135fN6uZ1EUdtp4AgKSTcf6qvC7KucotvcxrDpG2",
  "key15": "2bNkn37yC5HQnY96wfqXSxSg7oDBpY4JKZkKmguZwM1jCFUW4HQtYUeHDUwFAotHYXZnPSrCDgBz78oYnKAjFSyk",
  "key16": "4uXdN8NbbbcdAZCoDP6qAWHuUWPZMq6QzSYjgghUBevuLx3udsCfH8M9Qu4ib5gizZZWNM4RdgULKbRZoyJ3738G",
  "key17": "KNiH2P3Rnoo1fjrsnpMvsArMCT4i4QvAuN8JmZ82aCHV8WLp5zSCJRjcxsrwEHfXa4qbhiXaRXBzyJhGKeTqYrM",
  "key18": "2YD46neccoken9T6v9bdCLJHpow7bWjyXJMHEBkNUAEQTWhVV8UbYpwKcNHksWNLQw5nAQywktoWqP5nLtdw6h2L",
  "key19": "TKNABE1WgmyV2McDN8Fb3X3gX45Tgq7JsN5ub3fAzrNKN6Wbc5hkG45xh2YjGAmun6XYrBrSUxGfdbGFAHdcdtU",
  "key20": "LWbmq5K4iMGhjqJYcCNH5expDMgMxQ12wLjjbFckQ6AA1gWUFa3pkcAV6QKpjKKtMwuMj54tqkW1iCc8yWwsmDt",
  "key21": "3JfwJvfAcmvzFVDmBttvoAQZAmdkucQU8WRuUkn6hvLNWmwcLmVGzEeiq2UVRGsbQRmtaDz5EvL8Eg8nfcwJza6J",
  "key22": "Nt3KYyBHu8rJyyHQgVnQ7t3QKKVLDuf2bLLkSvReV4Nv5D1ucrkxMRes831XxJTHeDWwbrzjLXsYkk8xC7bHWi1",
  "key23": "5cfz66emFJXktWSWoubQuY3yupos3vBYtaEfwAyKUfiTgJnim9vjyQCd5XdXSD5DxUGocJpXPinMV6YYSHnh8ZjU",
  "key24": "5z7DVNcXQJjDnPd4kYcC3FsZSvt1PFjb35Rpis98k25mARGQuSCQFxyqs5ayjTXdZwUSj7zyRREcFUuyUQ5KFxwr",
  "key25": "4NWLrbmrMWwx157UG7N49yiL12Nc3gPWjwrzUJ7G6mup4KmcMneUVxJHQrHhJYSzf1HPjtN6jivwc7fiaiZP7Cez",
  "key26": "2r6nahZJiW4Xnvj9arrQg1hk3uAGYekxniHte2D9U6W6W9baXhbJEd8TwgyuMu6Zp9oSzBJnALAZrbNV1Qy7835H",
  "key27": "2MqCnLiabxSEAmRxPtZBJ8gJy6T5DMt42PLrhbF9ka9eGpcNmTqznST9o9GD2jzsQbAzQqkTAyZzscDwPWP53pB8",
  "key28": "iXbC8Fb73ufniUkVXckGoxUkE76bJi11CB8jZRzBBexKXMZyCyFVKiZFJXthL2csntYvEJptxK4Q3YT5C5W2k8N",
  "key29": "5WkKzZyFwXnwzL6EqHdoqD1dM2MyPj1SgwtbkZ2v6He7YciQhqDybwHWauneUqPrYjjg7VDee8DM56VA8YreMQVr",
  "key30": "3RtyZY7idiD7edVVRgXWo2onYxH6ashsipcXy76R7b5hWZ9i9p2xgQ3bBUi2aN8oeDFg1gKZhFKAcwUvL8YhNULz",
  "key31": "5DDPsBHT6Hw2p2twHiTfu9MDoMdVBZUgWAhTHzHtgY3xuowGkb5ZjASrtMcB5y7fEnY32gUt1WmoMRDuP989Cx6c",
  "key32": "5533KTRsB6o6zUn6hbWhdMxfyeADtk7WdvfXrVfQmZxQ55fzyTveacdN6WZM19akBBH7m6zYwANtPy2Bu5kj3zZt",
  "key33": "MCiX9YogYfXrdXvkKMDLVJBwXV2tzuNZWGYuqEKTnAmZRDuxnwQDPiwZouB5HWx8CMjaBkGNatYpwQHaQ9JDxS6"
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
