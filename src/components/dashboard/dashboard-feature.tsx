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
    "2gy1EumkfQd2SAmRg37wmyGLEPageE2JLbYUMNs951kmEvaWGKTv5UdMEvueMYgUWinpWvCwK4AqGpbrsdwpT6XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qseG4abdUATtTTQBy6xK528iu6P5ZCM1wozhCrFwopMWQfYQvdwSQbqEkKEWB1nKqzpryPZiTBqXBpL5CiPrWTN",
  "key1": "5XjqPWT7UAYYFcH6c8MB8v8bKkBvNfv9uH6dyrfC5qdMMNVB5VQ8tEsMDjCWwuAfmW2QUr7Ko3k34cXXrmLxPfqb",
  "key2": "2EUvmm8BLyoi6B9c84SrG79AfcLFjrAjJkCbwxwxNpjVa6VJj5gaynLLt86Kv6hugoDPXENM7vDwC8rwkH25GZfk",
  "key3": "SBvKsxf7PZiaZCW4fF77sT6CqmNFM5639ELGeQFU51YRyrDruM9e6wsKFKywp2vhC7E1Ko8ejQuhNkTawtqhATN",
  "key4": "5VA2P1CG6ff7GKzMBKwaz3KAWHTAgMxkW22owk6vRprdRqadJMCtzoPa2iTeuytewT8NSHkzWmezueo6BPGJq6Be",
  "key5": "2LkFw7qdvJ9eL7BT7PfM1hSuWkSYVFVBqcgL75cVjB6PL7Z47co9zsTTASTn9QwUU33o6Gp8RgsT735589Zxsq98",
  "key6": "2GPGvwajmhPf9VS1kvLcMkCTPv9vJoVV1mQvnQAQwqPT8Arfz4C6rzAP4PFdiVSzHonB27Xsf5gYzTdKmm6h7RKT",
  "key7": "5EmVG3w2MLxzNUDcXhwWJriBTjLoDueGa9X8x2Zyi8th5g2jebipcnzaXR2AaPMmuZfEm6tehQxysKDZ6uBDtEY6",
  "key8": "5jdhRYBDJRAQX9FEG9a8qeRCtgNQXcjV6vEkWAJM12xK91MiaVU7Zao8H4eRSMhAvuLaoSLjBTHfYXBVD3Xdk62w",
  "key9": "5jXAN5tCWQy25qMMjffXA5J7T5LRYeV41c7UHzvb6cBEKZ5bDzaZjqiH9CgMPvzt5oKP7JzsNAD6A6MV2w9fA5xb",
  "key10": "NascxPaoySud6uYhyVoJNqYBAX8Lp3v7sJsCbctNnM2w5tbhbKB6jZaVzi5mPdyZi2tqrZsyJpcZBPGftoELatw",
  "key11": "4BtX8oiNNwG7SJiMqanrteoTFdzh69xubJP1PvC1fdmf3DqwEtrJShaqbTszstnANaZgzkYnTJ7UyCjvc1sTECBQ",
  "key12": "3w8n374WzSDwzpZDC8PN5J7jnemW5PYMgEVScuQVATuN5nW9NpBfpSE8c51XUFU68KveYC2HinVPXNf8o4QfneGs",
  "key13": "AFthrkiNpxjDTQpAurzPtCv86Rjwnoj8u34LeuJnfmEeZ9QQDgEQnZKdgfhjNxs2nMf9bcyoRhc2F7pG6jQgyWy",
  "key14": "WBQy2M69V2Sa4eN6Wdf1ejaFcw7yKSBvx2PLXCPH3Wd6fYQXHtkQcWAoULQgchNb4HHDAdeU2iZHY1B8M2si1tS",
  "key15": "4z6dAjjpjZkW5jqYwkRLDkEt2sCJ9PGQTFjJrh228YvUJAB9mPtH3bh4CNAMamcEnHUfVVRT7de639ad2H443Jcs",
  "key16": "neFWAZKedocWcFjgjpwnSW5dM8Pr5GUukd3EV1drkP2mRC7UVuTVi4nHCwLN3qzyQmwG6rrfdubjnKsNkGgBU5K",
  "key17": "2CbkzwJH2UvVAV3UsDecyFQD61aNYBfMNyVnGABpEgozctrQQgPzZ7yHKXTo2veRyHweHKVr3jxBzwweUUvDaNmK",
  "key18": "ZJFYHGzZxbydBRMjWFWxKne4CgQbTTbf4XGycos1hktUo77cbS3wUzVaUkwN6Tk1Mdy2BuQSxmfha38PJAYe9LM",
  "key19": "5GYnwehMS29WyRhKiauoP3ccqC2J5TKXLmDZKR4U9EiFZXpzgo9op9gWVkYYc5v9d4yVr3afG1y9xAhJDL5Hvcts",
  "key20": "5jzKADDTfysqfFRXrFBszcvgoSk4ML6sCNBRgNTzADw51siwjg5iQWLcy4CPmPZS5DrpATU8w8VkX1SAJaF6h5Qd",
  "key21": "4GwbGzbb5LLLsK3hSeVUFsJRh61LHKpK2NzPu3gQGAtV4Hs2961LuFWtETNvBnQ1ZmrV1FoEtb6PhYmdkBuXiji4",
  "key22": "3B1TL7tiocicJFZTdUgfeJCrshcmFziudgcKcbT5mrtdTK1GJGxPSzFkNZVCsaWfMRkzmM2jsX2m21DVD9jQJsY3",
  "key23": "3iphzEThqCnH4pVAa44j3Fdxoj5wMWfFyteeNwEaN8wuQTUuiLJfhiaz4KC4ytaeR3YrFmRrHALGhfn29kxHqpaF",
  "key24": "4zL9dkdnEq3aSPmMYSoashyDkDw9jRaxtXQqfZTyvKtLFCPTB7Cm456s1GFEAbTGxon9SxBjMecr6Vd7uJ58RMiC",
  "key25": "2BaowFzRkNbjViXE6UV4c3ZyMakHCwK8JttAazfh6bJQfQtAfeetBCvLhHGK9taPDLdHN4vFK6YLg15nj9PoAVpT",
  "key26": "3dNPx9nmYVCoFZV3DYFgSebnt1PMvV5n7JanJkcJYiQ3pkZjDqbfVjtfpHu2y3bY2hgbACHZuJLXntApko3UksnY",
  "key27": "3uYpTcHwUTTDjzhLEFPAiMdkSxyyiMNbvpYj22SZ2gCEPhj88nF76YR8rVgUo3F1P1xpo8ZRDiHu1xmZqSq3qNkj",
  "key28": "3EqPuxsY3KvKyc1qTw85bC7JUSDjSum835vdy2ss6NKoBCSN58i2ZTym19SZQvfdf87k3ot6BbU7Y2FHEPicUFGd",
  "key29": "fhiVy8tNZCMYwhBsqtihK9wmginGB3Wm4hjn8QgF2wQSP1Aag7BgriC4hnH17KEQYEDCaHVMezCSYYhxcP8dE57",
  "key30": "2wNwYBdM1PFZF9suzA3gSDN43gaGhz7wvcKtWQGgMbLdAxjBFJKD3aA8C4sVhKezXHz1uzYU1XusTZ15AeQFXsb8",
  "key31": "36Zf75pbKG9K9tddVws8RjoEVbLg1qXp4BaZLZ8P6tKjhoWDXmnNcGgFAosspr3nLaETDxVxMUmw7oE441DsPNGz",
  "key32": "53ph3LrwKvY9Ej2YgLvmw8SXWUn5qJog3n4VSojwyAyAQVJCbDauACzgHdP74QWEywuXCo1gwQodwKiZ2s6U2gLY",
  "key33": "39FLMhU4TxSaVpjMZTUKfwQepYk9viY5xDEtnYcnveCUtzkiWXx97M45zFHR4Lg7APsweCZv9kkzA7Jkg7Jsy6Sa",
  "key34": "m6EZWxi8SExgDUZJ9UZJHyHVQKTKFpDvRTt6pGv1YGNfAByYFv35io5DMvEzDGN8AcaMZppuNshHriChj1obojE",
  "key35": "4mzCofgDABZ55QqR24GYEyBDoxTLVQ5M1TTosYZy2T2LKhskBExhWCmVo5NPhTf7gLex8EeRSpKYazSHyTQN6Wcz",
  "key36": "bCx3wXfh2izc4JQNCepcLq5YdTmCegtFQThBRj2YwkbEeuYbdmb4edP2733shRYG1RcPWd4mM2Exr98SKbLt2S1"
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
