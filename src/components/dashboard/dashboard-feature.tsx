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
    "5biKwRKk41qgJfcXE6PzYNRBXQ4bCEoPUkHF6K47rvPLrCfBzxUdmvrp9U1JtXhweAoPxHFP55gVr1LnCAmW4CaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Js48puufLixa51UAYMvzwqCuXvnBJNv1dz1LjhkX7RYoQDvuGAbdLLwaCKqrzm91jqatuVDkjwvEXyo2mz7hAbU",
  "key1": "3Joca1u5HxRLCckLPeoJsDQQqhMHTtaWjL4A19KwgV3GLbtCPX4SEAtYXjNRnCNxzCpQZsvLHZpArvkNJSnnzyWY",
  "key2": "5JSCdd3rFucy4xrtUBXWrw7ccAvajyZXkhwHoe5kKoK5ze2mPaSRacbt79edHhJGtyZjEhCsknzSHTvPTu9zKfKk",
  "key3": "21keVyx4dkn51hdQ5J3mojE7mCzbnp6NS1JsKHBNNWP7HpcEFhnnom7RVpBGq8mhz8L7dKBubn8TYoPRKnnVWZxP",
  "key4": "JzAqYh8Q5m9yfwQ6ibfsZMQe4kyGuLvFEfrz9fKhw1o3nHbaoSAu6k37c1hsH4AC4dzVqrhAdQPkAVJrxbjoxfM",
  "key5": "3woMuY9JWVPTEaAtFbYkSYrBeFULtnDcm5dcEJXLxSyE1YwgLjLZh3jMXyMK4o7zJwQgq7kquw6V5n6Heug6nrVA",
  "key6": "2ES3VPpCsnyMuUTEmQM14VTZLTWAvemar6GqjZkEv99mEWzyF3m8x7F7y9KjwuD3agEn679Mcks2Fcn4co46LrtU",
  "key7": "5AzoYxC2WecwyL5B1yU4qC86jQdDZAByebdtyXhjUtnbQ438ShpTHfdBKqE2AbXQV7cy5drXEr5rDxEZuKzJxZRf",
  "key8": "uxniQ33g27n1y9pSqiD3wo5yqYFSbpWGN4FR21h7J9sD5X7JY77z9GtLx4oNmJrSUS5faVFdPECT9JWKpfb51F5",
  "key9": "5xNR7pdyHvLcViK42uWtECrNLhzWzVCbTJaioRySLBE8JbXXt5Bkge77jQjnHzuFJgsKK1NjNFhz1pF9w6RQeNRC",
  "key10": "2HRG9vrboxKg9eWb1cgtREHnQs2ZaDio7dqDxBkZNmkPZoo6TY6SBeeJoesJ8Lz3SxPvtwuUnA4Nk2LWTEbc8Qq",
  "key11": "2bsQWh4n4dc7KLA4sEcTZJiU4sMNeFCdrJHJgAQpY6HVNaWJQ7BsMa8vdh9Uu2AseDw17HPVg8xRRmnMq3C2h5Fv",
  "key12": "5e7URDFQtH16fskffvqKbbS8BFVq4mFCmdWLbWqUgZvB23xy8M8vEyRuqMUMho6i2o2NjLEVUm9uHXj2SHjQZ1Wi",
  "key13": "2bTnXbeYjB5uYeTx1TJNZJzRvF31NYkyNes96WwCyo2xBf62vksJ8LffSQG8qjLXi2Z5B9qgin96XavPc4XZhtJV",
  "key14": "pD6vZQnZcveh5SmAQvdqEGkd5b8jgMnXHjdjr7tgDewA6k97QvVo3WzuZNeMXL2qZmLXBXmRaBuVJnHofyGid3N",
  "key15": "5VJG2ExtG7JTUWLDR3pMdBExmJrD3k4zVPWeBmABop3j2T6gY2W2RLqr9aCva61JrfqfmLHkbNdMnfjRyW6Y8pcJ",
  "key16": "3U7yxRqsy11uCQY2wFM18DXV1pxZNUSbCyKE2LcamB9Nv3yz2yCi1oYjH8nvGZqGy5eJ4pHX4ZxqRdZRLveRFApp",
  "key17": "3mpoLD6wi2B332SMUgWv4uBQN8KuUnJGF8mRkThQqyq9vr5mtyQz5Jx9YKXFeQr17H7SFuGTMVLwAqWTLrFFqPKu",
  "key18": "32o5xPUFzmXLf3LPsyqgFZZzroeY5X9sQUr9cAehDGE9xoBSbr7RRg5cTQ1vCbkYVr4EZdCETNR6tLtDiRxKoVzh",
  "key19": "5p6d3DA63hAKpgwwhbZp7HDihRx2kPajP1J6Ypm3GMjDqdscFZ46D9uPPUR3z8kxrQhN2WgHMry46sbWoJxvASFA",
  "key20": "43nU4mjgj2ndWSpbcTdXvoXBhrHbDGr1UtBTK5DtUdqrqaTF7Vs8uRTdZTAKUkfmssp617Csjh1fUF6dQ4tyg2Nr",
  "key21": "5whPCEBcGKueLSkUBrakqShKVF2t5BGDBB6NYii91poLCuXQY6mLL8g8oWzQESeoss3dp8xdzEedukAn1oeNZ5Jc",
  "key22": "2n9vibPHhdshv7vqMxoaxQDQXxE5MsgGCcrjPiSBCJMezkyAvF5AmbMCFR8jiAPjdvuafaAvoWvV4H2gaFCWjS27",
  "key23": "49kBtLFYjG71cX3D8XnD8mPKWGHvqrSg3RjQciktb68LmMKjAiwUag6ns9pxnUtS58JwfBJ2urbnjPUJ1dXU5BzK",
  "key24": "4VKCALar9BxxxFeHGqRCpKkMZroAMyo4Yf9Kc33XiVHckQpYFJcAY5EMsw1cHijt7cHEjQjJb5DZv4scoLqM64A7",
  "key25": "5VJzsjo9U37YnEEc3AknVHN8yu9xcjJwyVhBET6PsZUZgTfBnv18BofgRjzL4gDyU2oxbWwwPNb4fJBsXxKTVFho",
  "key26": "4kB7T2Tk4daLcKJuheENnWCaJw4rbq6Mz6Su6pJXr25878X2vDmMemYk84jtNvsBANAhN9oFnFXViDxDqtRjbcA3",
  "key27": "5Pk33KaMw86NR8B84KNTCgqyX6WhawU38YDTpp8N1AdgzK7dJbMhsTYpkDJuGVnoRCjEVv7GhgCaABmF3BKTYpts",
  "key28": "4DL2YScasmgrgrcyiz3Xdxu29Fnng4UtaynrzApZeHgtBoySaEiGgjLgveiRTsJKhuvUieAJqGc9URAs7PgssEZV",
  "key29": "3zyDHdWrWxoN8bcGqMEfnVYDkwzAHCdeMataocTeG8ADLP6DkNXwyQA1UHTLmi9Jh3fFUCyH7cPpUJ3XdZMWrJ4r",
  "key30": "47swj5igCodzYTVNE51rnpow7BQHKJYiLypmHmLMZm6BAaBhEiAchFZjxuyS881EMbuikptFuDRJsmUfs7s4GNG",
  "key31": "3P6zMU5UzBjZnLo66tRDfBHGiSgR7VFjvtn1qijDQNCgFDDsgtepRvWdxZspudFQoYEDpA797NehnRuujNiv8gEq",
  "key32": "3sMSmKxQYC5LxBwoNtiCMeJYmhUUWGkxg35emW7LtGiPXwf5LYQmbPVQ3Phnd3eMeBJ1QopD9LYrMRWc9AM2gxkW",
  "key33": "37AxjVRjpHRru42Nun8afUpYBqdj9riAwSMyarNtJNvE1Ab3t4d6HkZfbBY81YXRNDoeAFGFxLDCcaMp6Wfhh1w3",
  "key34": "hTybKsHYFq3vqQLPdziQHQ6oG5W9KPy5cp71bwND1Pqv2TcWKL5u4T4KF2mHYppozCBGH9aWBFJJS85b1daiNwJ",
  "key35": "5kW1uEEkvZ4pas8ifeRz2akxvuLX7VNjfZGr37eZusNhvivwcMi6HERjfgLDdtJyDmtA6RqqWn8zgu8hEgEX8jSf",
  "key36": "4Nrt5QwFf88fCyvhm5EdcEUXJpEorMzM4xifFBYkFo5BZ9MSasaLdNXRQCHMdoNPb8hWfAAiXDcoD7ZsZ24rfdiN",
  "key37": "3gyNFbv6Ro96uFy5zX5iimpatvdSmFJ7QppZSgsQqPSjHGq3cvy7QyLv4ahqxnpTUmT28mfKBrp1XJDMGYn8g9V2",
  "key38": "3dQRPRhUNF6a5Rp45uwUEAnknnrmdGTdy6DTzDLHvhG5MrFV1YLrudRZvd9rc6FissJcZ8m1AdZ68CVTcRPG65kf",
  "key39": "5QUTPgboMowyUPrhixK19AKP73WLwKmtBcEmPvfZEGGRG7EDav8oCXv4Zw64pRxxGSLqQPWGRVjD9p6Eo8V9xUhQ",
  "key40": "666Twb4wLzTVPWVkQaNy3uyf1PQXsdmedWEtyksUxVMkHV1y14coL8iLDBPNvk5tRjJtfcT5tkk2ikzd8EqNTFHe",
  "key41": "fLr2AKBaLv5qDaX5i3tG2W1uW2FMcuaAj5W5h1JZzsQnnQZrDQDzAZptr5iSWeYdsDQptSEHUEG6UYLoV9waFk8",
  "key42": "2z9Nu2ZDxC63uVH9bdoNr7bvEYp3rM14wUgVy4s6EvtUwrwkH5EswwLniywdy74GGoFC789KoJyKpGyLRTvvrUfz",
  "key43": "3gn5kMw5WmYubzQsDSxDGYB5BqMtmBu8M91qjVVv7jr2vrusJSNS1gsMUYgrrVwjyVZ4HjvWePki7GUNKFhHszK3",
  "key44": "jZtjibFEnEuzuTEnX7t3cVc6MNei2pLJUrrCoyxVtrqthmoZEnfipPbHpEfX9dtb5hYKzoqSNEWc78fznUo6khm"
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
