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
    "3vzYHysfxfu9fyF6KGQYCsaBAgEQWP1YVDbVQ6m27QDcv7jWQrDX2KL1sMCALKSMs2HNpbKtH71vJrk8U5ZPwiXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2215goLfPyceKGUq5PL7jtWnwA8R41xPLH5LRNKZDc4uNvDrbtj5SWK4Ys3ZdYtKTnf4cc7ij1tjkrpXARg8fGZ8",
  "key1": "3GbGokkDVAHgF3zn425dpDxNkUTzPkNNGAma3A7UBTStULxK526pR5SHRVjgagLCC3WPREKGvTZLQbb1KwBieDo4",
  "key2": "26himZ1Z5jwp8B6xaUbrBL8W5B1FTiqARFTpxvSDApTQvcectiKMiJ48wKip1PHZDSKjUCm6TLyH9j8PjvhPWy44",
  "key3": "5ThzKcBHgtCnDhDS5MoMMVnPLRyvFgRYxYEUpYhu5rr1u3D1GPuahacdyEg35PWKoJ6NiM45ZPGYpfQReDC8AHbi",
  "key4": "66W6ewu6SBYUNjKdUxN1zahqkKEovHw3T9SDVxi9jcjgaVqjc2aKb3QyRXNzXUopcqDkoCrLFqCyaZLEA8UZRWUG",
  "key5": "37omJqPAvyXEYQL9wvoBPDPZkpzTowRu8RkTJUQm7MtErYEsgAZ1s2qqED6JeVHd23JV7kF2NDYQTHgcVhVi25d1",
  "key6": "23KZNx6wuSAZMTEW3KvNTv477Jw6tfuFZcdCt54JYBAaFrmNjkQUD1TNZ6bLge2p5KBeFNpQ64P51azPeVSW32YU",
  "key7": "42aMEcdofjSpkqe6PTeRhv7AMJDJEMT1CQ9C2fgopMWj3NBDj9EcsjbaqT7qsyFuKTof4ZboNEz3rYwES65YMKvR",
  "key8": "H6ANQqAu7XYVEPZDwcr59q9bLP3BS4xJsFPDmyha2JbNsBYLdqyhTHZap2TH9D9VW4bagqxENYzq9k77tun8yaK",
  "key9": "KPr7hvKxx131YKXeqhe51rBt7TP8APGEUhXxUDWNX23cFkYxWxcQaC2R5HzjrXuFJpH3KM7vQ85LNXLr7sD2tmv",
  "key10": "3Wno5LK1xKTkcB9t4TMDKeDMqYKvDxBxa9H7JwnPyeYTnLCryyJgxyozzYm1BWWLJjd7KFhbCZZLBHNK53uq6YPu",
  "key11": "62CauXFwMP8dwW7n1wge9WXNQUVwxrP1pVrz6D9Sr3dySj9129SfmMo4z4g9R98ALqK1fQYWuT8QUW4AADFBkNLB",
  "key12": "4nqfsCJLdLC5ev22J4BEqayuNfSrGfTae3GP4uW81ps2KoEATy9VmjiXVhDpAdNu54mYyWFUBWyjt8SKe4SUaJDG",
  "key13": "pdBm1yaB1FkpEtaXGdJj7aNsbjsX5e5aSABEdUHSE5FMtkcJ3M5EmXzWrj3AhsTkZo7Wpqt6poTwuZXXukpFqTU",
  "key14": "2En8xNsSXqLiFhRL1K2V5jHukcf8X1W8QJHsTXnzrEFLCDkfi7oarKdJFtff5pchkfcDKj4bZGC6iT1Fezthy6Y8",
  "key15": "4m18FwiHpiD85ZzUDK24ucKbdzXerfvrGaYrDpzmuVfqm2AGdEdgFfWPFMETDeP9YxNTYnXqbL11ADp1JfTNbJ68",
  "key16": "g5YyRKv3tBdVrvyvcBx3Mh2SqaBvThTp9vhuRu23NGGzExpgBEsiJ8fXTSLkPTUzXd8nmBSQshLjs8UZE9LoeX8",
  "key17": "313pNq4dy2gUrHTvAP9ibFwkPe1EUshQM4EpyWZB9Xmd7WPpXNufZF7NFqQgwNn8jKc84yQoREg6o3Dxzj9evfxA",
  "key18": "5iWUmuXe1Exj5ZyyoSk2h8oAxUtMUfoXy5AaGXMPy86CLjptfRWW8WQqu8xrVXqQ8p4ZkR7c4F9WtMeoGiYJQ7Sd",
  "key19": "3EDJ2U7gsBDVNEXW336jaQjvjN7TnjvZEBZn3USJ6rgZpid7REVxfTeumJUaqnbqFCDLcRWyQr58T2A2q5rLAR86",
  "key20": "fSB6rs7rNyzrGQuN54g85g4Yhz7Qd1woRwvH5ZDxb7G9t4K4Q71vxQysCK4GnJeQ4uSsTgXhMthQJd8EoE3zcJn",
  "key21": "yKJAJiauw8dAhNim6Q2QAF5pNq1Fi8v2jxJhqS7zrxoVmRkbsoLTsBiTVShuEUC2QsTUXdNNjQ6yEGtcpTdDmbX",
  "key22": "3kDNWJRjKLmenzgX8hLFSkEUEgrxQUE2yu1kqPkEKLH2ne8utHC65fBR37tu7gXRY5ZYHe21bFjATKf5dJSHFauf",
  "key23": "ektqQYa8CHwmrXfmqjTa7J59QfgrQyiRXiMvvXtBbwG75RdEn8kAhQMQwWM7HybD53hyCESDFFgUiNHymwbFZLp",
  "key24": "DX5g3yZLjF53qcrJa56i9gxoLwSEEdHPqWFe5MxRE7tys9CxnJhXibV2dbhZTFWBHoP8A5htywVnsb3zDwxUeRD",
  "key25": "4E8b1E2V24c7vqrkD8BSW6YQZsANyJkZxoKN74t8aYXgTBHKBpQ4gqPEB869J9RVLW7kU4gjYTKkK7vATqdv8Gvd",
  "key26": "5YqSoFF6ELB9DBnPGRwoS3799LixeYf9Ci4hLsyWcd7QFGYHHZLLECyBM923ufbssXD63aVY2HjKgvXDogVVWU3a",
  "key27": "2Nnb3t1EwWjUYupsDZW36LQgtShz1HsjJnRm74cvHtMV1L6ifMVMdbJy6LkmEExhyXBSkUiG7sDyFmp8MrqZqAFu",
  "key28": "47ZC82Ni1UB2s5rBZHBVTMBfJzWJVNUWW63xrpfng3uUo41KwZe2PYdoKK56D4Dn5LWwivAwRM8yzbFs3usdxF1H",
  "key29": "5KSPxCPD2Q3EB2q4Y6SGojm8j3XKbGZV8v9xFFUaYkYdF6royPLGVWJHehi4ybNQkzNixnafnsutiy8MXyBVAfyr",
  "key30": "4JSHoNPHB2oUYSononmbD75XWojGsnhLtpdtkwmufLZqZHYLoJp1bUNysoXPs2qT4SoB3bzgD71R2DodapuV8wsy",
  "key31": "2zWnjoah1qTn31DczyFvDvF2556q8f8LRh4DZr2pkEFoEY66koFT5iYws5STTokKkPnJk7GG3GgZXimShkbY64y3",
  "key32": "2viXUmmFv1mMfmpDyGaA3GrmS6nd3DZR11eU9AJXdQpahCvNzYNFRdG3fYk155ssgACfKjEL5iYLgktcAXDGa8W8",
  "key33": "3tZ1XJJmihUQxCqm5NjnYQmfoVgkqHfcLTaCrYMDAUeQAmwkYLWpN7ku7SwGzt8sw53Sy8GNHqr845VFWZNzbxsi",
  "key34": "yt4PAZfn4YaMNyn9RaixMrhZoGZLkRdRdsHYXfBZPQcQSBH4uScxsAcN2MVK2X4hkz8JvGcvHJsExZgmLoqoMZt",
  "key35": "6qaw6bQG9fEtdHAx3JqqiQweUuP6AgsJVZEvKPfJvZy1d5Zv6sXzMwuA9TQ44rkbzLyLoqo3rvTJLozFhwF1ERW"
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
