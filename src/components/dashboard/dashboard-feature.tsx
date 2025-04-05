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
    "5CMW8B97qiLihFxJimc4uyLvDtuej7H1LQdz2hwhuSymFogse6RExuvdvhttCWjiwdKeJHMsLqDvhLL6y5a8GgjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yaxktwcV1Sj5bbExtBoHzpMGRD8teV8zsiXDkfLUnsPmP7iuz18WYR9FbeuZjTJLdoz927MwxGdcEhrSY7MBUTz",
  "key1": "2NKWmyDG4TDLvbgp9Zm92gBiSf1EpvyG642GwBecsRgsjxF34q4rVJpyaoAdUXqWT5UsNBCup6DjMAd3JAfT2CMg",
  "key2": "62pEBoLZ3yX6bbW34XVUxjbXEHimFDNomK2pjqwDjf5kiMifqY16q5XsxNYH2XCxyudKvSKkDeEhRCrvVcVpJurh",
  "key3": "3Gy7SZMzn7584TVBLwBgy7RL8NpRize5pxvs9GCp2eV9DhwUQw3iYbd4fj2vcKPnJ6UNBHMvW6ZePGV1MVmZjbob",
  "key4": "ptNvM9Ahtt6r8Jn95s6Vzg8N6KTPHsMfEhDZLet2iGTH5aZY1zKmkMc9s87brddvUYsFGrMU19kdy1TLWfdEYj9",
  "key5": "4WKwumnFqU3shXdYGgQkJPTXKo1d8cvGpAJjdpqJXyik2q3D6mhNZNkgT9ijFv3FXwcYyXATh9NXZp7Ewp25dnq4",
  "key6": "3T5q6wqgNvMrJUomMvHzfC6bMJyAxqHUXB5bdMAuU5MAmkEdoZzro63BukE2mhdf9KjtwkTSPiDkN5rCBjUsuQYm",
  "key7": "4SSEQgNJsERaTxe9x5oedxD57RrWnRvQANqgNp7F7ocxYgEhGUg2k2m6CERyi6bdMUbzaNwYLtwDhCCsWMriSLRq",
  "key8": "26iRD4iYD4GpNQ2VhWygsLedyPr9xJ1sDEiNauTSK5HSe8nJVZ4rR8twaQtXW2ZwhJ3giqWuxhdwjMgFofk1qFuZ",
  "key9": "3PmehT4aL3LZUpLupMPYpcnkW1DMAAQdp6snBfPeHh7c8D8KU2AHmZQBFBNQH7a5Z1tenwfmGUmAHK5ZD11QF6ZB",
  "key10": "4tX9aPcN8i7HREA5c5uk2sMsunAwqM6q3YMA1zkNpkRYnCsykRf1PMPiK8rXh6bLeNsAWCLxUrx7iHjqAq4xEPM3",
  "key11": "4tgb5HR9qxsZh6fFc3FzPgfUqgQFqwVcEzLvQ5UfM9f2KcEyrzhtgzHLkNiu1KNSW4QNZ3Aq3t23Yi5AN8qzY891",
  "key12": "4AaDmVQdZVenCPogrytA29DJCYrCsbarCFqRd5JwEopTXYDnZ36jEF9H2R6u6NyhPPp2gcm7FD6LYhvQ7FwDiG3t",
  "key13": "2doE947aHa1rBWZHZyTyiMQkB3KAGyY1egGKpxY3FAMhs5WTdDcdcQyGsWCiNvY7Lyp2YXT3dJzwqbF4bbsGTJiK",
  "key14": "3PwKk72ksWy9SiJMQoqbXzXijHPev2uZ9Rb5sgpKAiNJxEo3nNFW31avrwHCttTnzoSV6JXqxnoxEw1JBP4Bb7S8",
  "key15": "3cdyz5sHdxp5V2ExyvbXa2gpjEi8e1gdj8z31vg7gnGmM1TB4CgHXbo7m3wkiAkaGjhZERi5mEK5JtnNe2iZ71b6",
  "key16": "4fDxf9RS1JqjP7AX6K8FwL7u5HFZRHXU1kYcs2WRDsaJznQ3ydKcFrmi59b7VXLjsQN8CQpPs8huVZrp64DbtTQU",
  "key17": "3mQH1T4ipWWTRugAhE5QkRHGwHBaN6qxaMFZ3WwrhvuFs1hGQpdkg3HKkJtYDGVLQy6xCVvsQjNEJrJDgCGWwhAY",
  "key18": "2c9uPK5jBfV8PjH482kLkZSQ5gkRjgpKGjUanQYXVm1B9Mqo3YGpC13Y72urkKm4vT4RCMoyfb63MUPRK3tfnp55",
  "key19": "5qR8p6Vc52ZJmWw8L9bH3jqFUGtDqZpV2ki1whKNTUr7YGFUhUko65WVx5KcqG5RVbAA9tfniD2HtCRXkC1Xf1Ji",
  "key20": "2smpnxdYi7ZDFww3KVpM8DXHqseP1vHgbGnLUP5ojSUaJoBTkM4hhSHQEmJb3VAUrsECUr5QYBFXk2kfB4MchhbW",
  "key21": "2FJRxtM5JQb7ya5hxEYyZqjniJ9NPWrDZCNaGMpQvQ15kTcV8Z3V5wYKwucMUcuNYYfouv6QZp7xwjHt96nofuLZ",
  "key22": "29mvm6wQHyCwNnjqPrrznz1WSVRG2ZJGdkYWBbC7Me93JsF7dfP9rTvLbJhxMRKkn1xvWDPzhbdoyoekG5bN7Rz6",
  "key23": "3juAB82iQFD5H9V1uttWH2DeQnVCNvRmkBsrgGf4PpUnCA4XTo2kDkDQu8kXTs1mn5AUReu3BEE9qfdHPaHwCjq2",
  "key24": "3Qo8r5fSeuRURDjtzBCxUiKz3nzHrUrS3JAKhV37sp7U4tu44EQvk1xNqfeEQBUgLucHsUzeKFT6rmuvWKyUJpjb",
  "key25": "4CBvMpgsQ6FW2zPYDAZp6NLPf2Vm6qNKpnF2xZtMxTz69SKfzbzxvh9rh28VxFxvUdt58DwX4ovPPtRNs1anAPB4",
  "key26": "4zkQ1isVwkA3YvpMuoFNbPixkX5d9aKmMPUmMzGuFkdU99CAcR8qNxuDYz34U9kB1uXDrv7qEroKkDiknr8SUiLh",
  "key27": "3X9QsFW62UUxtXxpESgCoxqAh8CyqpUuueN6SA5u4cn8qkLBXi8kaM9fBqueoaY25UKQkLMuRtjCdea89yAQ3dcb",
  "key28": "3M4W461G6kW1ZrrFKxmGCkCxR9T4z9cR3Apbbtz8NJ4oYUrcFUAh3zoSufU2WDTKh97Aguk73yfQCu9ecSjvtkTh",
  "key29": "5MEzN1jaLjvwQfpVvJjvss6DkKJpzB4PBH4vZvvkEhBX2if8ofSwS75m25xts92kDkKzsBRhuVaRp1s4VF1ZHV8g",
  "key30": "3Gtp4hTHyo2ssBDLLesmbu1ag3LEkufJbu7sEtrN7ZT8mmumjFKfuajybwWUxPRXtLqjVbsLReKmNDkcqycDjhBL",
  "key31": "3PeeZPKsvLjD5Ns4AcQdRBP5fuSUckfwQdttYHkBjDZVCvQEmrP1VAm5fP5QBLPLYs1eroDARZk9DeX5itedj97N",
  "key32": "4ie38BXSWpncGrejALsfn44q2nKDgrgU9uyH3bfNCSLEaSdH5vM5zrE8iL58ujSUrMnZnvfcCXsFSMJP3eaFbf5M",
  "key33": "3aVCGTUB668KvpvtshGZSfDGgwmscLkMwp91DpqDFcj6VpKTgT3aUGUVFYg2S438sNQXBLauSaGEG3ypTuqjgzA6",
  "key34": "4t4FTDq6VBySbzJR9SnsSoVBM1f6VdX1QQqeHbrYgzjGVoX1syDopCpTYjnrHDqkYvgMiEWwPt1Yf9DkL8RZVu12",
  "key35": "2QqV8JYEZxrpsjsfQM3hepCKJfEMj5FapmaKWX5azgG13PYR7xCL5pJ5VC5QYkqDyYRhMPRGxpyWc6iaxX7bRX8y",
  "key36": "3chjF6P3DAq9gBs7et2JQ4K4Kbg6pWST31J4yMxhFVCpnnYY8ZL9z4mr4E1fFcTCQTsiqroNEqoUYpnt4cKRB9HM",
  "key37": "4EWszfFet1bcYzcESHCN97evPzEMWGoNZ7HLeRKhZZxdGv5RWfEB4b5rwWaf6bAqXDe81jSmEvJym8hNvvhC26Zx",
  "key38": "5KWMTsGn2ZTVyRS1SD3WaJwGeBhBxo2jsGW5depCs4Tk3gpW9bfg8ZZsNy7ULraqU6YHVJuTPj1AYiWJfXJjdF89",
  "key39": "WCdSWHf2FBMiVUkqKjFCS5baRnnGayZ9kupDoqnBB1vNEJApaoXpoyuUxBZHUL3K2Yt5o2CxEjYDD2jwTwJ794B",
  "key40": "4ummW7AX9q4hDbM5MSnstHaexm4Y4EmUbwxDbhuZnR8U2r1n6SY63PLKL2iNsFzoQNB2TZrtxkx5tf4bsGjgQFuH",
  "key41": "42cNd7p3uuMa2JebvhBakbh8nRapWk7jyX7ZAX9fb3VqzbRmMTjHXkbqZhoWbS5oua2y4NKYUS7wo2zVbrkff86u",
  "key42": "4w1KFpssWBuAnxP8N4BqgMRJtyv7myPsiU8SFw2sNCxjVD2Dwnqd4LLPm5EAp8nRqzQyCajnG52egMF5yDqyECQj",
  "key43": "5Asr5U2GpT6vQ3G3Xot4XzPdQXmksSj2oVmvXbeXVmahimZFzhQDgjXg25yCna8L7ysh8u3sYjUh5P5GfyRup21N"
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
