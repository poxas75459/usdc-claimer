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
    "46jXK3b7q479WX2w4wmnJE3NXSRSZX5AfJNbc7rVj5yhH3FLEJXbnUUEmTeAYwGYce3QehY8ARriYGzDQ377e35L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RGDhC9nMPHLEKQ7irTgrwR9VDv36qbhQ1Yui3SPytE28cyy1Cbc67uxPGbrXDW3Z3uRRiigu7PaJu4XkWGDfVtf",
  "key1": "4imdJ7F2crYJ3ra5PavhubxL6ykJRc4b4ksBZKrbdfScH2knfw5FZCfeY5KpTha8E59YnRK9HamJccnjotbtQngu",
  "key2": "32hoj9ox7hFjMB714L7gVPTh2VXS8pQeWxTdxHdwJY8id6i7YspMfa71wAUezKY9Nrwuuor6Yr9dAiieUrUtPjKG",
  "key3": "MwatdicPh36Jw8zEvoHRfRnLyPxaszgsS2ARzvA8L83uRbbZS8aXJSNEP69HcxTg5J7G1UP8P2yQ3xLWjv8TyMG",
  "key4": "6ufRtzVQKb26jPobStew9yagMdjRe6hEHgpwiiqcB3NSKwATnZGMJxwuibLHLfXpnxhdMt2hskEVQUpX6aR6mc1",
  "key5": "2XUZPwzCGZK9NWxe9LWY5CphbkJFrWz5R1FWxcm2cS5ES674CpGf5GN4F9rC71PNjjXbh1xD3MHT7DTwmGu9Kat2",
  "key6": "5xdEzJJ42UXg9HXYqVSujWhmRqNErrxZs6KhYGVhH3sKHkiEVNwM4tzyzCnk4Df4A9PXH8hPMezy33ZWy2YxXd8m",
  "key7": "4qk3cM4ZVXXrJLynpNDc8tByhD4V6aNLtutWK86QRwtzK88cWX6YbNLLmBjZzGn2LmpL3izNAVMBstRNmL57ywR3",
  "key8": "dZjzTznGuXR7DxK6F7f5Va4NQscNPLxWrM3DNkYjTHsrsK7mLn8BJAM9HfPPqzHXSJJ1AsQCBr2iRs7m8CyjheN",
  "key9": "5FjryaUSg8ayLp4rSZUpieVDu9UFC9i6ieNdXAMU6qPjpADzxGFp3ESFK5qHs92JFjaDRZGwwuJZEwqZJBrmA4KN",
  "key10": "4sVhFHs6D2cWFtmhEqviBGinE9V2hvLaDNg3q68wiAUe5u1ukAn8si4gkAuBWutgjRveuZxp4e8Ga99GaDQSp5vD",
  "key11": "4WgJNYrVN67XU39yQAdxEttUFNxJ7DR1ytmrDcY4tvFJFNBTc9z1WaTfm87N6k7fUD1eYzWQDWz9d48MfxeDniHX",
  "key12": "65h5tNY7Fh4gzJobUtizTcUzos9QjKSnKtBCri6L5eJw2vp8ZPosUPoo7i3kz3B3tEcEqMobbqN1r3vLGyzo8YBU",
  "key13": "5WWxhwyvjJDP8TNCtHT7oUw5uLAWHJc4pa5SW8cKfQrRUN7wxzXUjQQ2ubPxVmuH5R2D5VLFcoGoxa67TzBpdNCG",
  "key14": "3Hiwhyp5wXYwTycpWC3w2KNw1z1ywNuxXpPLe1TqmyTqvykne3ugjcBYU2gQ1PfYaFa4cDqACtZ8jDBb8ew2JHCW",
  "key15": "24xDpRRbJsj4MusUcMUPtkjUNKJxbfMPH2csThXMnonU99Aio4SQsV1WMy1f72fvTSrtuRb8kSnBkpuTGHsRFi6P",
  "key16": "TpDnY4V94yTxhBvXx3DFknDE1Ndye5AYND6io81KJVMCcb6ok4TTaqGsbAGkDkjrczXyCabUhmfckpJ72hdbn6h",
  "key17": "5g188BEpATvFRxcG7tzZgBrnv3Y8CbfHEM5Az1CGvKB95SKuGESLEjLpX61sr9kXG1D1ajHjTq9Rx7s1p4FfSq9j",
  "key18": "nKhYMpjUvDoh6PcDGQ9kiQztex7nQgdEHDYaftdnhdbdNKYRwD3NX34sbjnmycgWLeirxi1xPujW6LrbNQT7BWY",
  "key19": "4AAvruNiVNzNiHWsgFMZmtdoqup2CPdEiswTHs6m86rgkTbqy9vJfAUr8urAgEZ8p2KVL6VxvNuSqsfUrMsarjws",
  "key20": "5sLjjijyyTjm11XfwZHwTRFF6AZdu5ErM2mZGBtryqVEW5MG4docP2UjpDhniHNzbWpuB4udCC1w8mZ9q4aTn1bh",
  "key21": "2oVN5ABy2jBwCgLTTjDqvY45HyEqUcszLSPKDchbPFhg1oEgwzJCFKEfGLQNpENreoPtgsvJe41KCb3CEp8cnnrA",
  "key22": "4NvHeDpqfgs4jgcnqR35JMEzhhL93AMQmZBz7szFX4JwsmJUosFtEBMxaXzoeFLUtdRXY1TRaLkENYGoLix894vv",
  "key23": "3qUPTVfWitYqAG6vMu2o6zFXBQ4XBqaPjG2mFpMvD951vJ67sArcEm5k2Zbj9thU6CEfvpu5GnoK6TDUL5iYdcx8",
  "key24": "kY7KLoAWuGEpYczbBDZUobgKmtJ6QdXQFUcowDbkUwASTy5qtSr6zZrtWEiZ4yQRM5oTgwyHFXYadQ1uBTSUB14",
  "key25": "4Mxx1QaZnm3xCoh5Yyht9Pf7MwZ16NbEtZQbCbJAtLQaofguNMaqkZuAzLKSa5P4sxwH7GMJDm8PDKcBZE1jrSjM",
  "key26": "5k5TPwFgrjRiUE72SMuiuYW26M4SEcyvx8k8YUsjSaJZBPDtdwzxgTsth75j6vz1xCFFMVZQRJ3b593XcQAwaDLU",
  "key27": "5wTNbAbMg6Ku9kyde25zNpQUJbfr52LdSAYRdsTsD5BDiYdu1XjCDCnzGbF2ouyGYUM7A4Dp7Hta5ZCd9y1sxySF",
  "key28": "2T3AhrAi3cDnfPrMFChFbVVEAzmxfaPLtAbMm5q2jT9SUxhjj7DUYnZVp9Rb4MmZD8zknAUGoUCwwFnULJsVJKzj",
  "key29": "3P7Ccjfqd5sbtPPSFDpJk2zsQ3K9TakoBVSjhoZNP7ocpqy3hPDoKokriL6TTBTmBMF6evzDJSDthkRivGei9MGj",
  "key30": "kTdLjhZYh71aEGB4Rof1uLwxbV7nMuVWmtsWLVx6D1CStka6kUX15S1uZbFjYKRrWUdamBgBEyFwrHmsxRd3p6A",
  "key31": "4kcvJisMTBP4hiD5Ziq4zXWsjkEhvBq2mdyRxARF4XG9r6gYLFZoAWPB5FjiKt4YSh9zeGCozjRSG3AkP8LiDBao",
  "key32": "2yoYYjC5a5b2fCwBdTxyHGkFqqjTCweySgcK2R3LJaEctu1pWCGiLXW3A2LZhHzwue3krK9ZxTTs4MXtAqzCwLMG",
  "key33": "4vrxKVKjQMkay2LbY42K1b9qhGZkeF3LmsvktTDedZN3aQT5iiHfXKErgtWnUBcXPaz7qXjgJCZW8wKj9nzijgm",
  "key34": "4XwMR9HxG7y3HexGNTHPuH72qrn9SaJcTcYs1voLLDQyJee2MLenKYCyMKBrtK41JiqMsiowaZKMaGdtUvRnTMfz",
  "key35": "3WfDppn7eh97AxSKFKvn3KQ4UULtD6Qd5UGyooaczLAqiwE1zVHERuZA7oxie6Ee72fbHZi4wAsBwgvu37AupbLY",
  "key36": "3wmfp4b8nHUegdT8Phw37JeJfuCB3aBVDmsVXRq61iNd8YSdGfdiz2PkXDphGiQxxxB6pYVddtdY4AL5TjramDxi",
  "key37": "45o95PRbG4JAVwLTVWnm9YDiqEP4QYvKrFSQuy5cvxAaiBTWeo3LNuCL5Gb5X4PJ28XbFq3SD4Wk1KDSa7PvJMXJ",
  "key38": "2H6uEuS5n8MbAaYwsN15agPVVfTq6wsV8RZne3Jdg4Hs5gL866pGprvcF2PCZaAKZbijR75iZA1pTnsdotXDndHo",
  "key39": "3UGQm55hotT2MaXzVjZ7VXavXL8Q9d9fTtBxPr1ss1xe8WBcd4nStw4sZJGcqunfQ5EsWyJo9R6w6ZwoNPcUrEy7",
  "key40": "4GAQN4BK18uhhpFZM7TzjgwkX5SfhARDHGGg33FMuepzJ6Swfmk63Fxxran8Pcv9gDqvVh5cpdkF6g5xQczS2rxR",
  "key41": "5DzUxub6ykNWvDs239KQRKn5BoDrtzx4Yg6ceqUdDzSSozymT9dHkPYpgY8GK2nWkza42dnJR7JU4JKmFup4Vptq",
  "key42": "4tW79wUEQ67L71x7Vb8veb715KecgsN9yzNqrNRVr4SPw8ZWqShKzwtEmJtpFBn2wBDZhhMaJNyCdyhjVvHwA3Mv",
  "key43": "2kFFwQDh6K5DiRfD8rUK8zhAZ8uNKD1Lftvmxt5NicTDCY45RydKgAvk2p3WACGXkukT7N9bvSRvyrdjjzDoRvpa",
  "key44": "3rUqWQJPmWBgoEArNVrs1T6NYQy4dregcSznEJmye4hzHdMjhCYtaNmuETz7sVGHraYiEf2USo14sBvbLecJg3R4"
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
