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
    "25S5EU2tv1qXSNyGqmNprMNKJGCS8hpGdSwaRm7rWRFbbeue5XGkC7GKpmDSWMDYFDzoJjiCdHspGRDv7eaYj8fK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxmG3wr2snzxt5KbXGMFonvps5x9bNBVTB6ra6533r7Yrr74J3WASR1PNnaF8CkanTXmdKBHVsj8m3tQzW6PTv",
  "key1": "uYYi6EWeb5hds44N11BAkVU2sUeXPi3Kv8rpYDYgwdq2aaXHYExwWoSt8oaMPovBrfxXutyNSvGHmR2ravKEBJg",
  "key2": "5eqyX5eEGZoRoC4vG8RNNxbbF8j7xNERuy2HVnGmQUgjLEW5Kyc5Sk4MGeWRpubNL32HRePmrgPMiiHthn5U9JkD",
  "key3": "2qnvz6Z3zFwK6EV4yexsA4McYWmZankcxsD1CeKdbbWKqNRt4Frgd6HSVtLAh9sTXZWMKfNEN6vnDSXSbWPaepeb",
  "key4": "64UskGxH99HMqWtBB78B35rRdgGyhwCEbFGWgKrUSRpG2LCSxLaF3agsfU6bFiuL2SeFJsFkNmizv9A2HQAz8pRP",
  "key5": "4818ZDoa6avK3t47z3MmqbsTbC1ZLUahZLqStp1H4HBNkU2HiL36nkL7yK2hYNoJiPLtzAvR7QoHSNuVsELJj1FV",
  "key6": "3VVaHmpTZtjaSk9vwmt9n5ignFz7Df8WRV8tvdjK4JuZXA6Ri9yv32pVpCTz6uZRnfKDjc9ZP67Et39n8gwgU7n2",
  "key7": "3eW4MxGsRpT3f7Twx18UabbiGdVrXtXGanUfG3ALuLbbBkxr2spvgxRLfGByoMTtiEStEurGcE57fSvF1iW4kNH1",
  "key8": "2q4HAF7dqeMjVwvrL9d7v4nEdnnwChYDjFdpB9qpRpcbUC6nWohpWDxBPt1KSRZ378UBdo3MtAtFMEAfcsDRRTkA",
  "key9": "4FCjB8wdcBABHEWCQQnoecszQcsPvzTqcVJaXZFFsyNjjkZfkGfUgras2b3XM8QWn28hbYYGi3fEnLNWZ8DCggw1",
  "key10": "5XX7LgXenRGYbwRovZA3N5NoHFJKDU2d9wtvADRqmkeUHv6ps8Nj8hXWPazfCut29e9dXd5x28VfAdwfH16edfNj",
  "key11": "2uZpT9eKRY5YYTkmVmbi8F7nFdpg5G7Ca1hL52QgYkJ6XeqwHHjDcrLvGvqpruzJLbPdYagBthQ9kEWYgPwvXuLx",
  "key12": "5A5pWV4ADybZ4DhwJyFzAqStgRYMppecHRnzkvVaqpRqeQ6aCtN8G3TorUSsqJAC2UxiEAWfgur4TozXJJToaay9",
  "key13": "5wvX34KzDd4hxX7GVdAuDnbt9nSzyfDQqHVUzVNgKNn71YYXqnP9Jnqrw8MTDJJQ3bgVorAHEZv8a7jzjSLdRV46",
  "key14": "4jUNTKLe95o42cbows2h6DLPSofyq4KBkz4v5475eU5KKKMpuGPeVN64Vj3enDcaeMPN8A3ez21f1LqLEmtXYTdP",
  "key15": "5jcDYYmiEqhKTjLoTNR9USdUPauvZSGRax6j6oKhYZQPsi2313e98gmzYTftBq9NxxjGqED7uJW2M2XdUM8bEwBK",
  "key16": "4madqukQUqPyvCj1KvU22y91T9qdJKQP7gNJsXV3fFHXK49ZkGWLiYfBP4CQ3FHmDZeSyeRLSvavaecasHhnNzpZ",
  "key17": "677nPio3EsnyD9255YvGEFHL5RXsnD7b45kwUF8JTRmLk3ne4xzRythsgM4GTmoAq6317EzxdKDfjhNr81vDp3aV",
  "key18": "5et8FQXF5dTMD4ADyJCxE33vazvqRcxf4WC26uMX53M2vWdJQe3JTd9yugd2vJ6oVbjyDn9HXWWSBp13BcYXFNnr",
  "key19": "657RtpftCkJ6EB7CTdDtQGiePa16vTA2iCn2RBfUFhaT7ZsPuQ75yFQWvoH62eyMAixyc8XWLaATGELBqD18UdTd",
  "key20": "5Tjx76AdpBgzHfw3PkNawvbSsBCJBkorKQot5xPg7kroNGsEE6KM9vx6ctc92WxWCsN2NcX72PkXHujnDLsWEq9h",
  "key21": "fTFwcar23fcWEYC4h5xHMBrkVQBoS6W7e9Qx9i1QZcSun7GXdBBGnQGF7uUu9YUFugycZamm9LqEJGVwT51i1ya",
  "key22": "3TvRYcH7mE5iN7bRuxKhQdUnAsQKC8AxkzvKU736h3rouxyweufkeScPeYEr2yDvaQf9FPqaxcN5DJRV4ipJ5zoe",
  "key23": "43XHKuTeBB3wAgH5wk3FcueyyDfaSFY7rAjNx3bGJWgYBa3LL7qKSduLpBtpnd8iaKLtoorzGYjTdaPXwrZmXxgz",
  "key24": "67kpaAPfzSeu6iMc2qwL7mqPaQHNxjJAHGY2KQHSuvmTmZZmDbKEJi3TvTYPsRHNhYDXyW88s65MgiB7bQ8Pfhrn",
  "key25": "5Zru6JXZvkNbonKPffKLTjBZmXkqcjkwA1pRrEJiQ2Cy5wMHDissgGcWjxBJ7eX6zY1cX7PSjqU5VWezgCMxPkYD",
  "key26": "vnS4TwMtgTaWDB32s49Zwjcq1jf4ZGUTENSqqBA7mY4LntwGDRQEDwDnBDmtJpBgFxWP274nrETUYdDZ7YBD5Y8",
  "key27": "5CCtgxArkjyfepbfVYPra9a5ChCsFVybX3vQm6h6jFxTfV4Rm15ZnXYVkgsERzf4QMarUarRPHFRz51Rq2rxdx5H",
  "key28": "67VHMHHYBbWiWrT7z16hbsjYJHUDHiMH3CK7r5G4ChKq8jfBzyKaPQUrZTrCGPXRZ296rpbYW7U9qWEXLBz1xQSd",
  "key29": "L623ycY9EwisKcDLzpDbepA2SzPrDNTpBE1GJUvNwwuoMDC5cdJweKrNnUWppSu9FvgbnRPFdACmhaHyzsB4w2Q",
  "key30": "4WgiKxf5mRQNbUxpYPdxkGZh8kHmZBdiN7vf7Z39iAgevLVEWijSLtMMfUgU1aAMnXUJAU3wTtCVrzH9npJiLQB5",
  "key31": "5ohaUrFDvYoxZw5N42xaDtKVpQy6PfZ35DZNUrU9fzPGCMat7znZ3JycMfq3AjaHtCJsG3d996qpha5LbPiNCgr6",
  "key32": "66vQHT7ar6T3JcM2ovWQmLL1EFevvRqTKugDJTGBF3sdG84kfdvfP6bboMN5JjYViAjKHYXvJ559SoQfoqd8Fq7h"
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
