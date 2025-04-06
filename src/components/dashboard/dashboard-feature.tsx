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
    "2k3MchUmkQcc5DUMLjDRdY1SgZYv5EUUqtYeKHaScA1wqZkYnDRWpzQ3RDGYzd1prV2vhtvcMh1Q94WJpTNmSsuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MZLTMETt3ECyUoNpkaiGgZeGgZFRxxqLduRG6byBfs9FF1xZszevyTdpHd5H8PWXuXLZ8Wrv71Qbi3T8jNUgXvc",
  "key1": "4DXYu3coop9jhNGYPBEtkqnzougpHpnotbZEiriv3A61sxWQi17zDBKai4x7gpFChuGNMpF66vXxo1oU2h6awJEi",
  "key2": "65bXB5rESZCiRsJwiFjJtvzks2grNKhmnCoWFghFfx8UkXJyce7Spj1tn1pYSrAwDCRfgZxMbdaNyh4ftF7tYyfL",
  "key3": "4thGVW2jhXAmPtvRHhkd1vSpCzzb6th6pCu99ywaf2TtuwU5dbV4FxmGs2Rq4Bvj6NHingEvQnqC6ycegKfYbF1V",
  "key4": "4Hc7DoV7ZQtk2od5KoYxD5e8ZdLvV7FrwcXzZ2FoCkgEa6LtNwbXndt2BomkrqjVGZYruUa62CUn4VEJyDmPm8FY",
  "key5": "3cXfsDbkhKbXBdvNJA2cKP6qtZt9ypsGwJW9ygLMuCmZVenwFwPgCS99o28HL55FHBctomAy3zwpTJAx7vL3cbzg",
  "key6": "41WAUf9PwpfzRRA9GSBzb9m13kMTkC7bj2xgb55q1uxb4dSKVGGdq5zGJUzF8EFBt2rMZoDnL21stAWw3SWyffdE",
  "key7": "5YCWPjsXVczeiZEX8rJEENg1WLgGjDZTTacKcRbiXpdTTPW3n1NGJqhGraKKWW1AqEM8D9cepas7wHyT2L8EA6Um",
  "key8": "5wPpGPZSfWXAGh3P5RFUrPekC1Gzvy3YRkHbWmR3KGTF97WXiAvhSxkx3oXFTYbMU73DvjRA33st3khkjU8KZBjF",
  "key9": "3xTZA2yE3cMjzpcbmhjLbnY7TBG5TNzdk1vEPaff3U1W5pP399QuN6a81pZxN4NhkZ8TpTUJWgXm4FLfNEpXcMGT",
  "key10": "5kp6ux1LYh7WYPChDHTcKsQiKZBZQheF89Kez2Q9wKuLSD3UHGh4JmdTU2qVKvxRcXQ7Z5h6LzrUSsBMUsPiE6MA",
  "key11": "Tmko42Xjuw7mhL1HuJUpLtBFtrGbbjbzc7nrzZDsmfK8eh4ZR8N3nuaN7mjQ1jQ5kuviy3AJRxqqWq84HNdZwQk",
  "key12": "58xek5Py5UWy8baP1B1CHXibKMG3iveaEVB686P5iQpVWvE7T6L8cdV5KFf8WUHcc8wrjgU5yS5zJMJqemCpYYs",
  "key13": "dJwajWb5hUQ1uNNPpTiAw9xVM5DzjTj3Fi5CBfQwwciUv6AfXPyGHKwxousoP4gF2K7przQdaCfnji256xw2Jfi",
  "key14": "TeFZgZo5FYUw18u42Q6xUJ4VJX7s3YzbtqSwS3p3ymEaZ8hhoK2WH6KH1i1WEpKG5HgZSxpSw2k3rEyjfzfPayL",
  "key15": "3RY3ZEJotnCUyZhNNGSLUTpmgsaRb7hKecc93aAT1e627GXckDLFd6ohPKEWdY5QFKpgNmr4EwfHiUdAfpu6SAN2",
  "key16": "2vM9Lkq7euDV1cBotgJNU9GmkhPY7LTP4cLR4jaMUMZbkPZGFSHntvFefML7KWNBiAGGMrBJF3ZTzzupYzjkduv1",
  "key17": "2T5MPK8um3gp8yDokC9LSNT1nYDV5HT3y4tNkmuTcLv9c4W7o3gag6MeSGnUdQF7V9M8yJTzuhGoHYA8MWwjeSuc",
  "key18": "3MKnr1PAM7uSJBWs9DDyPbGWWi57BnaH5WEwaUH3uFZqpX5BCwHUYjsJHXESQ3LDxmrRi1ZwD9ZUFUk85K2re53m",
  "key19": "32VWyrMh9uZhg4MYnrT4CLZ7iuuaz2hMMiymCUXP22fLdJj7ARaKZ5dkdVXysgZ8vZCsKV5MsBjGHf1tDpanYZk3",
  "key20": "5pdu4GpKNp24D54qR1L2oa3DVcqE4VAophtDPL6k3UGAC96Q6sdKiepgULfCrooaSBX3BGwmgHZejqBqhNPcjiGe",
  "key21": "4oW1ZADwtvmVVtRLrDAe8z3xGi5XgWCWsNLrCKdGAMz17rcbzVK8j51JBvZi6jvx4GqTtXASPQp1fsy5Wp7dU5Xu",
  "key22": "3P3KSpRx4TBmDJPV8xaUa7oahzPHs1MhwY4xvd4m7F2EdDGZdHypDHsXw2W4DVDmgE1ysCNwC8i4VX9Hm5YC1k1D",
  "key23": "b2AzHaddcz18BEZS3VdUp49DatTZZhM1K7nerNMsYWeaNmSzcBMHGum2wGNBNDzs2dtSLPcvtAvRynPXch4UU8U",
  "key24": "27L5Zvd9dkeE49UfZpzr6B5QAJZAJKrzRrwNQvR4yWAaWMVieHVHyjC7XRDrbz7oKz4dn9cVeVMy3vKiBAwrmTs3",
  "key25": "28aPod51TCuztsnKmGXtHjgWPkL2dTabFeok4vZLPPpXNUyKJHCp511N7AnUQJgLHreWNgrcW3nFgo5Wafuijb9H",
  "key26": "39y53AEr6FYCC6XgmHDkTViWNcEjBP6zBULmPzogEE8T2iV8uRaDyGKbdX44LPzdaCYNPvykovS2rqXdGxC9GC5j",
  "key27": "2Vxt2WynZGXAKF4WBMffSnWkW3sjP3TyuEN4LF52aPkcKkjnJtuJgLZd89dYAnkuTCXBJZfoC2aSMhSJe1JWdZ3s",
  "key28": "TfHGt6ZowmtKTxbK6JpdYioZsns5afHN6iwXnm1nXT5Rth4ZrCY6dc6dGidHC5A3YFJujtuPfH8bxooCu1wsM7H",
  "key29": "58R8SDjjYtgGcavroVLCzrNXVB5raRNkotkaQwk97eQVuNgFdATEV6WY9SeukDv36bZtQ1ad3Bunic9aPpeU5YP2",
  "key30": "5MhUfNWz5StUrVTkPvgtAdhob5grk5t4nPkDXiLwCq3BY5FD5UK9BxAsj1vGX34ipa1ReuxZbwX4UfSTbp9PdYoy",
  "key31": "5FEwtD9zQ9BcnHyg4YbLPJfiR7DQ7odFvn14G3EHS4tnMz69qJFM7t9d8PSfC9JFtDTSBE1Q2FWqtGWZpMjxPASb",
  "key32": "4VDSNyyT8em8UtzoocAaGhkos3yWg9YRLXi3ESnUMsbF1bf8ba5otk1UUGxe9mT94A9qtqcURnZUzNQezEFK5Uc2",
  "key33": "3t57hKt5A1JuiJyNbgRKawhTKdo1w4y6F6YuqLyDhRgE8Nqid9zuky8eXXDNtgeeQVY2MGzfSCq6v8ohttGax3xe",
  "key34": "9zLZ9VDTrtUzyWc6JqLEUWwSkpfCvvtNV8KUzJKnk59qdLvWz4JXBBL5QFf1LCVBTgZkrvK8BLfzuhFJrJvfyD1",
  "key35": "NKr51WMbVsyWjezZUBLkH9C16fxSpPCGBM3MArFW1y81MeQpVpXz7GoHUwsy42Gd5SnC4Ftzig3hJsNDu47JR1t",
  "key36": "e35gLdHpU1BfJnTfAyLK1rgzewB5Y7o3tJpjJYSj4BtPfy5jBbc663EfN9DX9Uv2PzqxxQ7mKiBzbynXGZmeD5X",
  "key37": "2JpLiYCmQUyBhS13dpjre4yfZBnm8Fo7WnooNCNu5mNT7KguDCUP91nih6UTeqBkCYEuLKguN2xSAhG8sJXo234L",
  "key38": "3f2zJBcUMeVRSnd2zWcry2ZDNpL8cZXWntyNKePaLkc31ayxZXczFgaejLQHTiWytRFD97j8FwozN5LGCTgXbumX",
  "key39": "3UXuH3fNjqSLKyCofD141FzGvHs3hKEKJWvwygvdu8bNzbySFUtL5tM6HwZyKArCon32idFyot284CSxCCpBZs1u",
  "key40": "5WbHAmhmDUmCMMHP2jAvzdYZwstucUc7LzGkzP72PotxGpmwGUDRkTHKgZskAdvFJqBUGbsHWyv3hxCaxwKAduLq"
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
