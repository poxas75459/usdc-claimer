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
    "3otXLXb7kyQGiQEWD4cFgeZjtNawpjEMdshWf3yH83trNWqSpR1VtBNEmNHFkKXyLGzrVJ7B9HcgpRuS9qUNipxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QM5Xb7CDyCyUyc9St3zx7gpd6GvrD8sLYs6Upxpu8SrcNZecZpy9q27XVGmBBSR33qkrZQzaagjgbrwGihZRjAe",
  "key1": "42wBer3FD9UCsasm4fsjWb5QeiPT6NUHb8RytNRE7GqDw9Dj4ZjktFRR3ZUidzGGs3SoSrfJqUPcN5MoYzuvPdnN",
  "key2": "2191Ru48Zcx68dgDWKhRd3cGfeHQC5h7jZxS4xNgNqopKJKPPmUonfNpa8T9g2nnDe83ojm9dwfc3XrCBEMHdTAw",
  "key3": "5wSgnsSLCoBsRHx3yT4ykRYHSUv7SVnfSnrP7Zg3Ggsy1YLHjSebZ2X8K8BYHwGtSmXDL5gjLeTTV8jujcTTqGae",
  "key4": "2EExAaXsupz8kQGzYoYs5ZUWDd9oY7y5sGRgyD1wLVb1L1FMADXg7xtBnbmaiygCckLbsWq4A3KyRdch6nJYdVkx",
  "key5": "3DZEfV6rEdzB8LxfFVfhs4t4shGhN2xThtn2PHnCNZbfDQ3c9tuxjDAs4MbjFyPtEVuWR9vypCkhpZiBMBxnQh4f",
  "key6": "5qV8hFCtc5K43LWCnRdMiKMvyaefK6jJUhZwiABEd85tCEDF9PfxJPoQtYW9vQUPfQeBXKoK4z4rkPtvaxGdkLcm",
  "key7": "2aLBcqFHzRXGYbEDGiQVUNYED8rri2xHoNNTSv1MtJFV4ZqzSsmgL9gKcrxgP8Qgj441SDJQdXkzszXb3vCLanjK",
  "key8": "E9S66dLT11UeKX8o5XtNW2tZ9BgqTZuG8FnTGU3wQAsbvAL9b1S1EJ8BzXhhrWrnncuC9F1katMjcjp4oLYK2f2",
  "key9": "3M5RugiLHhvpAo5SedRSVAoLxm6YYjoAm5VSUKc81aux5HqQRvSDc6JFvvynKRyktKDSLNncm1QzNJDGLvSNfo8v",
  "key10": "3h7TUV2YbzFXUakFcWYpdTWTwXL5ThJbTdf9AkmuwMypXntMvm6dfjpygNnhZYmkuDR73vPkvwSdPECt69ZME3tX",
  "key11": "5RyAq9ZBeNb2B9iCfa7ycd8z1yD8qjN9Jiy3e6WC2P1ynnoUvCK8CySnuZhZkMtHCuhJuKqzKZRqftZJW2nYYKQd",
  "key12": "2zb8L9rYJeuxj5UDobJaxDCnBaUQ1LtsQ34gXjcvxv2pugcUXimSvr3m3qdmaqnJXyb8WoYaNrszpDwX4tqdCbdj",
  "key13": "5m8HXtEmpq6DHRW4pXoiTw5DpxM3FC8n3Ab1x9qTBH6p6fE5GDHYEzY4Hp2QrPxKj5Jv5fUXepBTuEN7Cmujb2Ut",
  "key14": "seXdYXswfoaXaR2wMtzSP1TCz1cdXPExL7Phz6XGtetzrfhz7XRch9gkEwtHfLhw7m9iL6PnX18PpBJ2nfxusRh",
  "key15": "38bm2dRoFSB1UQGqGpXDWdKBV7o1kapJhekZpMnaLokUCH5FPXJsLGZZ1nJuDnSaV8UWUWUfBzqxyqMvwDgAqC49",
  "key16": "22K6ARK65Lc7PDDZFvE6xBkt3MBA6MkDVqgvKRDDrULcrYWcn7saU9RxKAvJUu6APxK8KxoAr75vhoFpXSsHz7D7",
  "key17": "3ak72a7nyqxHq4LE9He9VcysWr6beYpKTLcKK72gkoTfrHME6rRpbaBdSZ29wRYLMQePdohCutK4TpE629F9AaaD",
  "key18": "33ddSPHPoQGCfTazR1EaHTwd83dKipiCMnkUNiuN6Xegn26YQvxrG9U3BwLvk6PtbgZcs1qmvQCWR7C95gHCQHvG",
  "key19": "5fgr1KhvRiJ1DLiLeGT8Yqo4HpHLCou1xUc2pzYqMaqHEwGbrFMMcnnAqmYv1PS8tE6wvbcUAsN5DD4TrACeCbmM",
  "key20": "4H7qV1pDwuQXeNrATw6R7zXCJpubHFYsVyFnRj3mWLGrWVbuGF1XGv7yM67u556wuj7pPVugvXGiU95R1yj2AgLs",
  "key21": "4DhY7a1gK89YpY1nmMwBscNqZPMsQU4WBzdD4Ee6dNreBPYbLdfnw2c6ztbeYKPVW5wBDmYzRM1DkDEGn3LtVoKH",
  "key22": "4noMGL5VGhbnbEu699PdrGB9PaS9H3iAeqZfBvaw6f9WpNdN3nA378w9kqnF5thybtxP9VSgXjjKSWcPMRoTkrYm",
  "key23": "53M2aS9cQvqMXsJnWEGk6HM8EJaFZ1n77t3U7fV29VHPKaefBYFtaw9Wx5ZWv8mgXBQug1AuUoGyF1YxDSjMKmD5",
  "key24": "3s5xNv5ua7eTt1RXBnLd9jkL1HkNskdjnmh4BU56zHYXWtKkHxHkDbSz1CRwHVRhbxoX5FvaNNAw8JQn2URgTw3H",
  "key25": "5XeG29U3mat6tF3JqrcH2LSxnNpdCV7qmL7i2Zg6aeqTVseY58o88sT6XA5KvnbJLWANBGaMDt2wvCr1rUcZXqiD",
  "key26": "4y8Cy48wwJyMLSE1ahqV2hQnq5jNhKBmD94EehztB43wvCAwf6bexW9FrmNKLBZcD9zYyzcAVkVj31gn8QV3MAfS",
  "key27": "5y9Gzc33stDdS8ov16VsN2cT51GHkhi6ows5gaGMBZLm5VvAxfQcbB7Kduer3HfwrEy7pCejqn7hu7dmKF8GvwYK",
  "key28": "3iXTnEGzukH1T9Sdfs2CMYw8kLdRU7pdGort3MbJXgKGmAhy42jmvtfLFYRYaHgVSU1GqhMk6XPvjmDhVpN6hJpr",
  "key29": "mFrgjjappm5RPLJ5H7geCYTexwvw8j4aEh87j75qoGoHTowfFwS6cSP86UcsGEoUfVxXNwzLreiqFJMiMBPx8U3",
  "key30": "24XE3yysmSko2cEUt7GeegDxddTm293EffjMD7SR6L9WZJmuBF12Gez8M3RvZfjn9H48koj751L6VxB8KdemAqSN"
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
