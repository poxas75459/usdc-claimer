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
    "4pW9Vb6rQbEr9ipjec7Q67NSaaJ5oTF2ksxjS9Swmi9JWHGzCxHA57VaqKcayMUCW4LmyN4T9brPdk6Fgx4VYfM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56yBKMaqgsN1vKMon9hmQp76HL4UG9P8rsrajokwo4jASQzzQr8YF8K6hQuSBZrW1xVZXiDqBxzASTCiBy4VNUqJ",
  "key1": "5WfzRzeC9TwHJTYdX1rnybugkfXahCXd4TJxp5Stnn4ETn2d1jN1uJmj3xV54BynFW1ShcSPB8mUSyk5GLa2Aoa8",
  "key2": "3A5LbvJpJBQfx4vJFBLt22r6oXv8kRNju5S2hLfUmERuMmjhguqBZa3sSdgwgkNM2Uem1gfrWWUSSzN7pxFGx1Q5",
  "key3": "26iBSnyVsBkHUuPFNWoozHfgg2oKCpNhbVX1raPUHmoaV2tWjFQeJzX3brNDSA1HeAqDknTSFoRmZ9qvHxfytXSS",
  "key4": "2Pso1LJTegwzvpqouBiTF3wbqm1WGzG5y6MkqJd6tkyQM4Es6YB9Ju4Fb48CM3ogedCq4Bu32g8XnqmTaG1Y1sTS",
  "key5": "2pYitAvP6dWtRgiNfDVTAF99uVF76hhuq4bJyonk3RCypVheX2zep3wUzWgfMriFumQBvLmUiVevbcUzaQikEC46",
  "key6": "o5jrJ6z79ytM2U9jHqnshfFBNqD3ivTuGVTBmLqgfxx8mmRaHQZzHBnaWjqHTdYiDnMfszLKyqX5jNVKFXHZukY",
  "key7": "65Q49T2fxhTQeKyb3dXcbYwkbdAS38wvetowCMNB7eX7XviRR7aEJSfBLbdwEi5JJ82ptwhp81QCnRCJnrdJvuP7",
  "key8": "3T31nYDorAxxwj3mbWickHfJgcmSc1tnmUBapp3DmpcuFz2sfeDefgAVuN1o7MK7VxaqnmJPvn8vT5bsjCEMNSRY",
  "key9": "392ViWMPq1TVcfJHnzBUFGZEiYe6H73EXNR6YA1iZewn3XgkTxi2vBnz1fsT7EsBas8Z7t9iRj5s4NWPEc7BLcor",
  "key10": "FMrKEvDyhvWSdaLEkZj5t1ziUxAkPmFxTUpAoM8YxZrVS9oWChF75FAzdNHJAMQ3UKsk9TsniMiSFP9ZGTBS9as",
  "key11": "3zx3RNuaUqrF3zsg7Msr8HzouYuxXD2dzF9R3dMVXnF9ahhYS4jYNcRPrny98X7zz5EF4nMFpV1uH1LUtEfWJf5f",
  "key12": "5GZS9gRxnSJqSjwg2bXoKCVYdkccV3efgfTtzebuzJDHFgv81BYQAvaaYCCvY4eFGNh7njWAa5XZvrBJzYLJYNNB",
  "key13": "44go5dnzmfAMn1ibgdK2X8qsNTXskveS6Ajh3BERrf1HqZA7VDfixYstrnn6AEvoS7UVKNGRu5am5bsVuvaoY671",
  "key14": "NUyKvxyMqWvE3yQcGFYTxJpemkd9PWVTsDGmCpXBYnFCQUkeVWECpP1S5mjsSZH6dyrNpMamn6JQXbYNmQR6u69",
  "key15": "5ZHyi3otyjVrXcP5gA1kyqvNgK7bivn2YM6ihFm9TaerNzULpKJ7aLLQcTxAKqw49UEoKQxdKMeskr5QGUH52sCj",
  "key16": "3xdepmL6YtE5BHaAJFb19utwYCJ4zzmWeGJfSeqMAJ5iyto94ymF5397unx4o4G2RP5LjNfmqgHZCMsqjRniuaq6",
  "key17": "3hYNqdrs3nfLnSUiydNaRJfnsDgNEQfjruF9hJoHfaUUwGcoHeWUEP7TN8UrDoDXtCfcGTGBXKAFJgtydtgN5oun",
  "key18": "Ty2jDyDwt9TrdmyhdxH8hKS9DDoCKE6RJwRUtzNsWtC26JudVfH66d2vMXhfZ5dasrDBhEJU7eD4SnNVbZVkUUH",
  "key19": "jFaWk1fy9DhnsHpiJhy4nD5rcbkqDGWCoBhV2YXAyZJy2zr15EjhPxH2UTPGN4zprEGHTKGmJs83WPAkHbeKbVZ",
  "key20": "3RbY5w2hWCvT78U35XSFrR6f6vLYtJbeDBaVEqfTiVRW9FBb5uN4rkAZ3gr11auXaetA7nKbZwf7zV5nPXZDYRaj",
  "key21": "65DL6ssZXpgfzW8iqZvQBUXn5vLKbXVWK6JCnuXz9A1WTnVZ1yMQfr3Y7qmdY9jk1PsRJrBqKafTQrsSeSt2rtmL",
  "key22": "28sWLJ3W2eKNaTxqLUzosyKYJE9i9JCMxwwG9uL52qQprvNXWUz7opqU8DJr67jQV9YLSU1vTVJQ6e8FkS4GEB3C",
  "key23": "592hs26G5XEzw7SNpovyZuaRowJWHTvB3g3hi8oC8Dm13K94r51VdfgrEP5FofpzXeuEUzqzb2QvozZQSVBEFbL2",
  "key24": "5jymBQynZLDhhC6DA5vYH22gQxDEiUhjQmcxvNd9KYYPDrqverfgpgxso1fxiCqVuTaHE5yjg3p9xqJ9y5fCMnQr",
  "key25": "65NLi7oTBDLJWPHRt1YSKiTBXpDgtmfd2weVBpD7DosSCNbgFWq3TK9K94kix8q6EtyMsrjrTgQxBCZKExDnxwsV",
  "key26": "5FoMfVWe31b1XNKgNTfajaDPFDpjLaK1ba4p2xBEbbkAkjP54B9KeSX8SjTHQWyzjGdU1EMsgMdiVtpeHCFkmRcf",
  "key27": "2VVge3um61Xv9jR1jPCojGvj9B9bzLfRCg7h9TN8tnVGKY3Gywd1UsxM3W3g2NiA986pLJvRSuMnFNF8i2yZrRcz",
  "key28": "SGSwQxY5P1VyYRDiXZR56HZoq5XYF1vm9Was1ZDkosSa8J3Vb1R9KHCRscSXefzDWRG8QHG4eHHFV4QZJgcfT2P",
  "key29": "yFqgadFkEsbY1axHLfLLYvN1Jbr54uJPHs7upeNUspLZvW7CVPWMJWBMvRtZboLvE35QSf8hwudCzKE9WUhoxWR",
  "key30": "cZu4d1oecdrr6HDMyv3ecM6hMnwPr5ptvAd1T1HpgnFUBR14DQwRp8LmftmLP1xsj9uxF8GqJNm4Q1AFkLpxUUD",
  "key31": "Ns6oNoseQBXq8WYmj6rJ7cfMHw8dtpyLTopKfu4yz96TjvAADyWLQcMGefxjmJSXStZznQY8Mv1MjEDLbCuwHy5",
  "key32": "2vzjYnSbkG1BtFMC71wC295WP3ojKVwNTV6BrUdmo7EmvQnqPWPRcF5EttGHTpsYfKZf42Zerb5sByM1mY3T6aF5",
  "key33": "NcDDXZGzajBanSHK9gQuj8sUNZZfg3cHQwNVFcYzT6KkmaqsUfSYtdisWf1Qca61ZpDZaG4vyBPYGto8BV5ruai",
  "key34": "2uXaQphVcWxcJjuuS7FEmETqDXdot3gs93mAKMHBSwRkc5tdkoFFcrd2hzDbCWtmkwxMu7GrhUNKJGiimFDSmLf1",
  "key35": "3cX3KLKFHEmrgmp8SzCHQqdWZn2LkvnFBHYFdEhRwxWkZhcSD8VsQEFgpmKkMgWWNgx2AkmW2QqYP3kewJaqahoG",
  "key36": "cc4MBKN8knQ5XgNbSbqAo43uyCzYcjDApoSsPv2BNYPwkKsZJKu3BSF9mRoQfGfQSAaWq5sHPDcqXzmiTQnPDhV",
  "key37": "3D3oZh5QbAL2FqYgHtCycLjDUiB5YmHoda5EyMc8DhPjMBxfkpi52s6CatZGf4o9JW4W6eGk5EH9gm6vcWsnJGKx",
  "key38": "639MU999PTrR1mxpBZimB3p9J9jgaoo6iAFq23NHExchSKTDK3TbfQuHV4L4GBQE5R4zrZyRTmnTWvwk3yexsV2p",
  "key39": "3LEao26kQhtL8RCpFn44Lj6Lj6o8fYsPeGz241osGoSX54GzRTYkuJM9t1tcGi5wrMyGgxpEYGZrknnZoEDKgjot",
  "key40": "2tBgguMKAZxzZReT75dhAYGjSNXT2g6squfcrSrjDDPv24uLmeg6QEb5V5hHELY9R8WVx2YygJ3WQkqZLh31JdNx",
  "key41": "5PmJHy8CUqJp1eHN3DVLNSL1Aj5urFPeWcFwJQx7k8sF28XFEX3uDKikhPees3KEaE7K3AoG78PMFzoDsf6yrcCc"
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
