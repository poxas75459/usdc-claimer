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
    "4G6PsroZd13bj4Qjm4JwWn57DJRN9iDA1zTzewAUbrmFz5wUDsT7BzNcue2DW5uZL5iZK6fm6zCBb26TfXqVdwys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r2hK6RPR6M32zNeh5qpeYwmkimzixg2ttidRTmt8xDKEVYua9fknqDEePT4jr5h2j28fMxCSxURGP2MoMHpHPRU",
  "key1": "3YrokAaqCRm6fmjoWroRbY5KxpQum3FzimddNG5acFAzNE4wSU1MCqNYuayjJ2FzXCzXoFYWGR2ZvZwv4kiMSP8P",
  "key2": "5nvDGATsvc4Q7SnmfmajmzGjYz6923BHkJ96pv3cPGVBvJuVfqKQwEiateCE7qRcG2z6PJkEkhzTuii4z6XFcdeD",
  "key3": "HLNhWKDSNXBzVtWoXWT2HCCCDfkbKdsLPzapC7J8Edanhax2ZbLXLxcxH9YeMo1u2K4FBakcboiH6dgQsR6VVyS",
  "key4": "iJCB1WH39x4NQkfU4R9WK1mAqUd83oyUCGdPS6zUyadxsHDGKyJbD1FpMDWk87gsGbjS9fZRn9AibHx8ZUV2GER",
  "key5": "nneLEA1vm3tkqikxigtmnvb8wd9guFEVViC6r3nPtJVkLoCJ9ZnghbwynbL7h3EAYLtjfugNV4wV6Un7mGvS5Cq",
  "key6": "39Lxw9fYcEsCWngbdJ5EZvQWjVuTSyEiB1Wm4nfZf3BY7Cz3pZ71tF9D8LeuQQRK6PoKFphe25VJzbc3NEjUMfgh",
  "key7": "3tdUbY1JrPBnJB5SbbusLfyysutGaFGkEWBnexvhxqGswXK4coW8NduuDPwDMPYpbm2YJjWrhARpWHX1Nzh6VhAh",
  "key8": "4GTLqKyc7HNdHt7ZUr7xzhfgqJ792ajWwoRytTbWS6xDv77zshRnFY1x7RYuXLnxcKaEPiC8ZmfcugEb1pAkVXys",
  "key9": "2pgmdqSeYS1KWiSEseUPKx9n8NrgkQ15wxHHfMXtWTwZE19S1bSDruRZ18EKK5eEUx5o6N3tAUx4aSN64FED3GBE",
  "key10": "5wUVaA1hE21yjZrvg8dAvPxEd6JtqGN7rtHS9iNMRctbisJcfiKFoTauoS9h9qEdhy5QBNtHYwz2NLokS9brfXkU",
  "key11": "h2SKdejVTXTsgr1TcxwyM2UVs4sqMUKCG345Y3qXsrGbXrEwKnFQNPwGdxvnQsU3xDSNFuFfD6BMPCfujh81fzT",
  "key12": "5xVnft7o7SFpADiPDVo7YH4H7AcLPhXLhTA4pVrC3C4WANfCg298QKeRmoJGdAsK68B5fZyDWxoW7ikypGmNfHDx",
  "key13": "3fpcBuVchv7K3qBKmEBdCFM3AQrWUjshU3eMRfdtdsnzYLoUBsKSnFEyQ7GxutzxYQyJXpphqm2LdgAQZ2JCGNo5",
  "key14": "4yKHAFULfKvgzuFV8sbBPnziU6E1YEqBAxS97WSxLWy7KGYhpV5ZpXVfxr48mYU9k6uezTAkA6ppWGLLExvdy63k",
  "key15": "4CYwQssGwbrtuCbav4wGhnyjQyPPQAyjBrB8sWEed3gUvgZsjSS3GC21bv7H6A8ftaH2USP1fwgn4eZa3YrYcFWr",
  "key16": "62X9AcJUEEy3uPDKqWz2BnHQJrC9DRc1JZmwFcsc6adJHxoviRTpwdAoRfmicDDk6foTcFECRsNmYoU4L8XUPhzk",
  "key17": "3paZB17Vong3n2G7fPby4xBc3hn1gqBgyJFuGgXKzTxbSi5CYwv73FoJtQMa6NCZkbtf9Ny5XLJBNaWzPKZTg3Ry",
  "key18": "5LUB38SZaYKzMpBUNCZejPGBBi1sd4ngKGnQHat5g65HfNzXU6dm3jN6tK2XamNnHaUCJUqjszdAduBwC3JAwzN6",
  "key19": "KGkFFf4smJmMDNrebjvV9gwxJN4D2MTFJhvKXgStwW1xhbAm5jU2oUB2gVVyh4wjXxegoC4UQMVStNGSS6JJHzQ",
  "key20": "4PcsYSSvCrZUrNKYbpNGvrzv6Lx3cJ2aynUSzdK6ix2EcNXSkeaLDGXTpV4PZexVq3TJUAET3za7qPTQHLBXRy8i",
  "key21": "65GKvHfccEekQmqYBKnTz1i2NyV8KQz5rm4kW5fBBtHe6W53EZNoKamDzcRd5CokiZaAUAymAPhd7Uz8kQwmKjtE",
  "key22": "48qL42rA9KgYXFaNkqPxM4nsEwvXKqtx2u2fwLovG9tTw2pVgYe7qbytd9148UC59735h8NL2Vs8keKtrVj7qBgh",
  "key23": "dCWVqcvNjrdKszeoYoGjASfAgdYm2a8c3krseNLbyLKAgTcprn3wwBkgNKMk6BiMrNBeMroawBwuMGJEBYNJC8U",
  "key24": "32AZbw4EbtniF9BdhcyabFNNsHjgC89g6nHJ8bVFMZr2pKCv8P5HEdGNmZa4qW1NWg4WSwQBo6ng7MpQJrufZYC6",
  "key25": "3oEzp8f3sVgJGXYd2aJjSWa3UwUiRX3G3aysmeFr2juMrR23hoeRc7fSSUWne5zfbpAepi1ojFRQ2gBShHtiQq9v",
  "key26": "5xP27ZVys2fN9zrQjJaXXqsCVwBFqobwrxJzQDhjXetPPMHASECWMgoqdTPzMxhf84ucRRT7JHBmaiXkQsa46soG",
  "key27": "4QwjiM2utXYpQqBWt5pqVFDCxGr7nWJ6mELwE7cyL8FtL1Dh27T6vp4d425kkTpYx71TP1qjTpe1gzKPDptczV2s",
  "key28": "3Yy6iTwd4jPyB7RsrTGYYEd1yshVGGCViKHmmiEb4Kmg3iDwjn7YbFrXbWWR9GYcBf4VXczdkYUrbvV41mtb2DMM",
  "key29": "3RhSYWaQfuJcXJDYJwVY37Y4cFwo2d2EKQpGCn8teuxScttF4qLP3MPSPLJAKCjSbmuW1wEdtQT1ztXiJirquRrC",
  "key30": "DyWYEbPk2H3Dp28Y2wRERHnamen7ji11jvnN7WdVqABBNzDRHZqN76fGqAxhWEwT3P1f9xYw72dXMF8nvNH8zaC",
  "key31": "C813fXcXhfAgtZkczfogWuK8p8xbyfL4T3XWbsjX5mfPz6V46DBsVBA36ddXGF2Mv2LrvdXrYqRJFHK4Q3pAvML",
  "key32": "2x78DVXMTaSTtvPsLN3XmJRxsHk4W7sVH9kKd6VUYCPxR6pmKn4GSBFwRXi7W99A51XDc4sAhPsuRWqZ9jHhTobh"
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
