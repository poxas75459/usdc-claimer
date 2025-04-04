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
    "5uLjMrxUuhTMfGeRmG9k3GD83rbXpyMRuMgSnzcEbtbodqHLdeXKbF99CYyKvsmB7FbTzy295xZP7t8GBYDS4ozq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t8GTgGmRYZ6nXkGcHQiBrRWXZpR9zprPJb9z4rfbwAX48Gp8rQpioCGUXtE6t6s3gJxWtkjcbpXJb4XHQzKbccb",
  "key1": "gAHe9rUjbuvnv8nRAnyw2n88jvNNGr4rkKcMQv11KSaBYt926qhJpcNUBBcR5Pvj4tiwcbuXaxfEiDuCaJz1cwg",
  "key2": "58eDSwPRxcwGkKJtwSVBESL2hg3UqkmE9MwjXycuiq2AYRLxKqXQNoqSPowHwDwHtpwheKRjfmBtpP9wFtxEiq3",
  "key3": "4tWW3NNfPkX9nQjGrUp7qenAVCKtyzjrRkvr6SEsButYxEMx979sceQh6p58QfXaaW3KGWc7ZZSxz82c35iVgstF",
  "key4": "5JHtjSwoPCYySd2U5ueQns9zJLTd6wuZeDuJgV5rb7idQ8CY65MxF4WTcivPd2ZkE5D42i9rxwKaZ6zu64AWfbqv",
  "key5": "2FreoEvcYi5y3z5dQd9WFrnDVpwgK1ck4x9nm3Kb1DUxMDPZkCZtF6XzvePGeUW69a5D7vn6M1yJWgmSM5wmvPux",
  "key6": "46fg3tD3yiA3fAk1wiNU6LKJhUFonhCXaefjkA6HicPqtLwrCyxp6zi6zDnHLYC99memvqMSKLTaHtTV5PNsKZ8d",
  "key7": "3FkozY2AWXBgzhKHSUXSGqZDMsSqv9878be2wd643xM33K63FhmR3FUwwSeHfbH55wL99BrTvCuQaSSBGDbMtUP",
  "key8": "5KEvj85PRvjkVTphZmaaELwYcofPqtvR2udAqpQwjyiH7VBfGdCe8ai9EWEKrJNwGtzMBER6xuK8zVrPhTdFxVvw",
  "key9": "3PJy82yndWseph4Rfi7PP4R7fzW9iWs4uJqgQxUd2twf6bnHgtuMW9bGEixq4cotaPmsHDK6vJTbFpz8aa4D794f",
  "key10": "5RC2wEU1e8jBePcSiJmFzPoeeybUPkHdZpTRtPxkGfvap4bo8x1gBjRxBBYYxgBxmbGkkeMQrZv2rsMorTaJjvPE",
  "key11": "26JY63RfdDS7A5zNkFB7mRHY3jg7sY4mKjGr5q83BZvkqWVDCijfytYf8ULogDfNhSLpMZB2wWavZC8xZoEwq3cp",
  "key12": "124fK1MxFbMEXWcc6nWyabAZmVpFNF4AUfHKiBvrYdq9hPoW3LvMXhjtSMpNmvVS1tcVxiVe6CVsA8YGL8iqp3CD",
  "key13": "5yjndFqqK3vEHXUGBK4AQUUc8KaYwKseWZWFh7bXN28TfU3o4BN2vwouAf4u6N4zADbQhBam1odGsGcszApEobxN",
  "key14": "SD2nEKzwYkGsGC9fHK9HgBcFMEXJkpXgEXNknPxTaWzjaMX1T73V6M6kbWEooGi5cRCfECwiAJuNFmgL29mXR6n",
  "key15": "4FprMAadNgpy4QsbfUPoUxsAtFzTQJqfE3EbuGGP3K8bttwojktg8QsYWW6sopX6FugdVjWgN8RHF4FSvK2jVx2x",
  "key16": "48839y1cc2AUNnZddMeJpNH3K375YHgv6KJLP49D7urTSCyDTvB8KUX3KTSjkismaFAYBUmfopQUCN49ZBbyMpn8",
  "key17": "kxtZhLx2vReZEs1J238QQ4NZZtGPkLSCYpiSM5vHsnDocxkSrVvH3cx6ZtjLBfn7GNVL9jMbX2Ar6QpNY1f8UxQ",
  "key18": "fvc9ybicZoRvibNCedGSzgpk1mLxtdKi7RPCg7fhgUNazw1W4hVZsQxYRaCfrxxGThLA3dyiT91bD23jDynNctV",
  "key19": "254cPm6i1guTeL9krPKvg9qo6qo6z23B3NZQfHt8vewXK5J9Mfsh5vRXejsD6SmqoLU7SByraL5XGHRnfGhQH2v7",
  "key20": "5pX7tHRH4EFpciCakb6b1BzTHJKRf1bGyMuT5yNQq7JqUQeGmskrHiPPEb8YmpZkhZQ6NzxMvxiV8cFX3Q7v6wiq",
  "key21": "2pLLUDg1GfiVs9T762biVd8YZExrcCSE2ZzX4TABJWMgRtJXP9rsUAedqdXJhFBX8vdWnuXbepH6SqiE7mUqMBz7",
  "key22": "4sX1pLA31fZUsGsnfjxSa3wc7qaVSyZ2gjqvYYwqiuoUz7cXhoMcg6Si5fZKWeQsRY7p3cN3bFgArXv68HnA272b",
  "key23": "dz2Hog1BymJecjdn1CdcMRcFKrRBMZqdNPS8sf8Cnh8Yiv7uyf9wRLV4bEsSb9uLqUPFu3vsKpo1dmpFNrDRsic",
  "key24": "5ztps4Eomw9RR3ouHGdGegEhvDpwPbkqSQEnfz8RPxgVX164dThex4ZZiNZMaj6pq2Z2kro3Hdjz9dF2Zt95C7dm",
  "key25": "HS13YcRq7pnQQchm6zANw7QsmeVern62eU7dPdoW7uwwNiTL54seT71mk7r2tP5Hox2WXGDcsug4DAzrJeWWvmv",
  "key26": "5B6jaHE1N7rE8mFMGRVF747aL1cfruC1AW2dn7N5aWf95eYbq4uGifjDdfBQMB5DhFXpFFxMWeHRwmYQn2NmBSNK",
  "key27": "5YmLBHbn7zHz1eLdJRRya3HKCxfYTTsejRGsUS99wYuDRQc7M99WnmzCGFPHqqHGNX8fTGUp25X5wWswm2mQ344j",
  "key28": "HSNw44shw5AhMpYQ9gxmEzMoVjZxtZqwJncx2yFDSJYWDj518hcvVG1zgQ4nQcZQFeZxB8u6Vp7ppu3ARR7tPbL",
  "key29": "3HX2gxZiQdf3Mw7RBr25wwvBt9dPRqqddg94fv3AgrJSxXPGnHbYco4jsTAS6w9k488hVMoAAogV3J6zLDpwak5j",
  "key30": "wgoBRmbfK4KpzRDNmoPYtiqvQFYnj32XZMp4FLaRha4JTcZMpFWUMd2P3A5M9xhdZmkYKMvCr4cM3ReSrjcd9Bo",
  "key31": "wHMUUUN2t6fpG4PNwRt6pKtu3wUCHPTqJAzsTiwaMQaytsRCrFzz2K53CfmLmnkPZzQPR9sxbUpaMuy3XHoUD9W",
  "key32": "3KmZgjCEkUULyvnsttiFZwz69aV8E7uffYQikKxxQGxymJrV4UUzo24E42VMnksg1Qv6p4Ng7cpnH3uPPZxTKFWD",
  "key33": "5Yjo6FovjV5iVtdKKkS1P9vFYopPRCEaga7eL3ZwxDdxsqCAVVfCPUtBUBYeascH8r1DiAvtPCeD4z5fZJcpkisJ",
  "key34": "3iQWFULyXxcTw1EFimfD1v47kgQHfZUKLpsFmMLQmDMtcdDSLMhzgFSKJ1ehzhpqgQskfXhaNks8qX4S6U8A5bt2",
  "key35": "2zk4LgzpKYcnzbkx4bPwF8GvnY5NReeuaPotnygLts6coUKb4o4GQx68GamxPf1dKGJwBWxzTQmoECYcSChJTFt8",
  "key36": "2ZYCsbSGFjXJN17xKp81aJimW234ZzSmwKjMeqweVANCxRUnxk61ngHY7k3D8WNcuYnqqK26DukX85862LHVRnNf",
  "key37": "3phoUHA9k9Ju2EMGUpBxdyi5W6MvfADn1nbHp2SRPSiyKko2qdCXQuu27YjnuZJUV3NAKUurH3hxDt3twGoSHPwS",
  "key38": "449dnJpGWL2gxEJSepRNovNHB8qEuJNcUDevQVTEw5um1SQstDd2PhVHb48wVL2TJ8NMZ3jtJAfPBet2WZX9CQ3R",
  "key39": "3C4xQr6XbEoNHawLmMLDg882qhW53RbtBbJYERy8JUWpuKAxr5quzQTirQudqEFVTA9T3UJKKpL6qNuZHFMf7Lb",
  "key40": "D88kfhZYjUggkTnY39pFPUbZ4kne2ysDKBWW5c3xFiuuRBrc2VZsUDFyA3EV3HbXVzrLJJ4nGT4GQTnd3Nypbkb",
  "key41": "2ZYUs2n8DwtgDzSF9WuGMJbLY5eMKViGivmehfAzgz2zeVUpbuLN8duwBhMmW8QtEJPGk7TEvM8hPXojPWFb7TYg",
  "key42": "2Gp5dpKFzLraa2Za2ba5zpnwYLnaUEyi9ZwyjP3drKWtJARRXf74TwN41yRUEB4SccPsAZUauSNwdEX1MUtkBSnm",
  "key43": "2Kswsdsb9YqsmE9QUEod8UsLomA8RG3iL1n76o5b3b2Zirh9EheKhRLWxRM4kX5KdLsvrqSASnK3r9uAb88oL71y",
  "key44": "5bXDrY2R8PeHy2Mw1VFNGw2C8cFBCfHUwvUaHJ4e4C31rxjEBGAEeK4Zay63SwTt5WBMwsfG8Gs7MHECrCZPzBQY",
  "key45": "5oasN4fk8qZGYXFdPBVUZUdEotRD11veoRRseD6vjfSakcj6KARvgNGbPyv64nXN4XxNvV1mh92wv4toJMUGk6WM",
  "key46": "3sDjBpZ9QTLFTABmWRBRxizjpriMnbhmhmpDbjiseLJMSqZfkX96yefxbiTvR8RtQr5nGTdfh4KNwYUyj6yEjpiq"
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
