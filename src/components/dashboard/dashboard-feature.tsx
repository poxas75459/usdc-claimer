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
    "5725MdaWa8GYT3Qc2JgdLMRBG81P4sNaaidyXN9eA8Q241rFLspdhbvixWMPdUKBmy1vrUJ1xgampH78Y6ypwsUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NS9VvwxjCqtmysZGfVPMoiJzrHx4H1HSjuNPEZvBJiBt3GRx1aZfQ8tDqE5gn9Rg7nYVbYHzamxY1n657zDFh3R",
  "key1": "4fMCE9FmHGXaFfqnyAwX2CEJDz4yrhRH1UzBVwcREo7Jxo7Rv36WKxfu4BkjDJBhjZf2i6n1HWUGBmA49rScHci",
  "key2": "McHaRS1wyqsNYMSv38UmtnUX5B5ynYqGLNNuoyGzjkiNumZMgs1P3uHpbMPA9YMnWy5nKVn4UrqQfPPUtssAbvr",
  "key3": "5pbvsvLBrRNEvWYzZzKNXMG9cJZZKPekEB6vUxNEmKe5cXcjkmMtSs5turTvjy9KXzAcEakDRrRrdyu62YvDraZm",
  "key4": "2qQj25iGW5pCq2tFx6x8AMYz1APgYE4gwwqM14bx1UoTYFdfJfoBHJrc3RwFYPKSZeXcofXnYmt7jJCN16oq3qxS",
  "key5": "9nzwNKf3bfwFDYgmq7bFfTCwxXSAEkHQhUYYRqc599RfAcqiiTG3gCbya76RkoiEVY3Zd3CFtEwktaCh33dbdbM",
  "key6": "5WvNKLMSG5axhjhaqGYbSo9G7euHjiULcciJPdSpHUzjXuZ1CX6MmSsGF32LTa5Fv8S3XbpESbToPwthJnk8Zq62",
  "key7": "3ngpuptZeWqjsu75N3DZEvu3B8RzBLWUaZmovGTwVDfY39jVkkptXteQJhX46F3fVf5XxsLMApMXDdjzxGEtihoQ",
  "key8": "5fGRYm4Z6h4zo47bjiVYM4FtBwK88JwQC5q1qnxG3d6cmhStwHpU3fgvNzkb6tScQaZvtyxGwTPHxgKK9adxGNvm",
  "key9": "4pcqZGU6pHp2oSJopPsostoc6MmtJCqyortdHb68ZZHGxbXpxoBR8xCj9LcpPnzy8sr7478FKYDcQESbT6VU8pnR",
  "key10": "4S4njxV9ctT68z3Vc8SL7UvMAUWQah7FdxJTNLAdZ7EZv7Ze65vpfN9DYRMcza36yjt6NnUmo7jWVNbVMFUVRNAV",
  "key11": "4RjVWPt1pm6kLCYJ7P3SzWq9eL2JFb5CPRrn7Wo34Tcrxr5f2Yfj45MhyNNWDHKpuev82ibFLF57SVJhMqzH9XTe",
  "key12": "3YvUprhw6wHtRHXDBPUywXT69bAcyjSBQehwzwZc6YbDG5Ncsx7b9TF8rcpVuaT5ayrferXDxiLEGs3UMWYBXpWg",
  "key13": "5wKDrajPsAKwHdMyhNcbcXRzEBCgfQjJX8xtGDNPyGBoCixSpMQNqHWu1Yzye5j4QUZhjsW1yvUsJ8D36bYKAHDD",
  "key14": "3B2Y3rwBnizp4eAzhwooYiUp7gSXBSv2wm4UZb3cVWLobdrzotCUyjLBLuQNxK2oRxmSMacDbPYTTtYveYU2Qopg",
  "key15": "2ozUhc6sNFTW7ATWjDwrsL6Fb9SPHKXJWLQX7HtyC4FTBLSdrB6u5mbSizFtnBZFeiHxwKAAzMaEF1Cdbz36DZ7i",
  "key16": "3oyo5kHZ1u1ya5yJVNRLWLZbiHNjhmC33R14QC7iRKbGSsKmBeLFuj9rDp3UTV9CdfFHjE5Hnvd81mbbfNfpGaKK",
  "key17": "4s51EZgoLMcvXiHouSqwRkQbd6zfj7jXr8rs3aZA17CAAx5BUPmm8YAzgtU3tJ4tURNMT9TWcWkNBU1QVyosxxKW",
  "key18": "TcFcHyLitDbHyUHr3Q3nLAGt7U6pmVszRfSNofzcvHSCxTdJYJJjdLmt2DZcGPt4KtRG49EmV26xMng9CqkbMBZ",
  "key19": "4B5ZsW3C5o7z12CnQZ1ty6wst9Kzbtt23zXkHxqsn5Tm7i559GiZdAxPPXRQYWnofUf1FGsYrM4wsZsrVbFXnyBQ",
  "key20": "3stPaP5uX17RhH9JPh3EkvJMMDuxGq4RL4joK74YTrVLt2JDDLyRqa2ZL4GGG2q8mU9s21D5ZXonS6dddQMHtLKS",
  "key21": "vkYns2t7cHewwuWzdp94Fuv3MQ6g4TEZyx2CkJ83wvzwKktJ6mQcq2wBNXY3NW5WKBRbgtCyZ2c4NB8qEEREGtA",
  "key22": "KH5nhd2DNeMZPYUBmXhaVmqbFJpFLUyXQuNSeDhpKzTyNcBksP9rDZq1Rx1w1DxhkKhRC7XJYivH9NGJ9CRpYpB",
  "key23": "29nKaiDvrmuQF1TPaQuyTwCrJsRqrTC2dk74kw95HuV6uGN76wSmgK1QDeyZr5yTquHGaZmeXft7R6eF6NnNZAXz",
  "key24": "26qbn655UevTmi9wka2EDc3QPJWrDSbPmSrNNQ994u86X6LVjBWKSy6sPxyZVajEjVCj9c33bqBoNkr9Uw6gXK1h",
  "key25": "3pkRLGJVL7UgY8d2AL47cSPgkLUnC9E7AAm6FmLnpyHTKFAdE4KS5YE4ykysudHCUnfk6h9bUZqDTPPH1P5ejjJa",
  "key26": "4Qkim8W2gAndCBV1BGBrDAHjSjiw4RDCJxv2MMm9USgV6b6t5LsRi2613VrdAma3S55S16TEHVbnqNZfhQ26qRHE",
  "key27": "3x83eesD3bAxehS6hoqfa6EpnfGkPJmRVUPQ6PjEXcZKv85rxXd88rXRLkmPNcKRTziZYAobcqUdsrTijRWe12Wp",
  "key28": "2tNwyEriPDtkNqX31TRCMJwUB3rqw1L6g8qcaVYVwtM3MAJbq2cy5RD9kAycQYGF13Ej115CbdbDj8xNmR4vtcg1",
  "key29": "3UqHtF9WrfCPzSGraQdH5oYnrWTB4M9jdp64Qpc42dPtSkJbRoCDN3DFMrCnPaS6Ag9H4eDnxVMc1t9HmEoMAhFf",
  "key30": "3yeuZX8fkEhHEDpYkjgSp7bd1TSXqQDmDmvPLhs1iwD1FVZ9do3ZZ24Pzx6QPpee46PBsT86ZZtN7FBgL5ChdZiM",
  "key31": "25t3qsEN7fQyEimtpBKRJ5mmNjr54AVusRqJgLCCpkB4dDmsA1tNnjpkX2hvbGGKVxACzA4c9Yhrzf1AkA5Yc1Tp",
  "key32": "3uvb6s5s8kJH51X73hpofeQYutSQELjzj4UfPJknDEtWfVDVvXAQZDWszWGxP2Bd8rNzH6K1i5h9wZTP7t6vBNGK",
  "key33": "2sMaxoWLrvYAG3XP4NtVfRxAq1kx7RNcj4WbEPSWNFSCvBaqJGHCZLSPKANV39bmCVW7PNLeQ928s3qUFWMCsWZo",
  "key34": "2R7mP18ydeADYUG2udqbySVEWasHiTTAkVnVfP5cJT3tiJtKxnBJRnFDjU9V78isJGbBHdfTW11sXZ4Wcsfsbf15",
  "key35": "5QZfGg9MPxwqursFPTXSMnRmXkenL88GPhQJBV5Rz5cuvEGM4eREnb1XrTfKNdzs1np49ap5H4AejTDgNnBUiNvN",
  "key36": "5F1DZFP8unVDZHLnaVFuTnskkrRBppFmTCof44tV1wVPNPvMS7CrKCMyvunSjCvS5ymBMZg2wE64D6P3KTfrFMMT",
  "key37": "2wAAo2C28ambAGZgx4HQ3Qt4x8moHUPhC6A8QSLytN5xeWFsf6dQ6ciTGLhWBWifgPKTt7dciaCRPnM72eMPG8kH",
  "key38": "3kCTtvo4AziztLn5VT5zoJ5UnMherZddwpsC5V8B8NDRbfNMzCuFtEKFrnXxGscFTHY7bwhNKBoWBvPS9MkbUnR8",
  "key39": "4Kiq5iejrR62eM6rouoydrKVuRvfFiwpHXoZXUsFpnXHbVD5yFUMeMqWg2vBZ7vuq93QUzwaEmk5cz6xSos2o5sN",
  "key40": "2VPF44fXgh57mni7q2gW4MJEGuC7VVvZTioqZrtBPKf1a9pXDwoVa82wAj3uLQjVHtvKrNLBNp8pmLUL6tcRUY65",
  "key41": "3XUFKjkK6pqo4djZWK3CsbwCcEzboz9MJvDtqrKLBNxMHG2S8upGEfFsDiWX5twXbG6qacfTDZLgP7QUzigf9g1d",
  "key42": "2oQyXdL5PdjyNuJALCxEDWhDDhYb1rL4cG5ZHRX7e8jnsfZDiWiMDAaBmpA3QFrbCV97hvvTuXs6USS9Js3GQnMK",
  "key43": "3gbKX2r9E9JYbqM3N3JHLGnLZn8vrmWRUsHWr3kc9JwUtnkxeis4KJEWRBfjxyUHjRYeWoZNbzdhmgevQveryzVR",
  "key44": "3e3FE36itnpLNBcHdG1DxcSkavpp2dLj5Hywq3AbU7vF3NnriZSTppEksTUmsKyMqqctnnFg82k2eRt8wj35XKw1",
  "key45": "HmSBb75LcZjqvuHkyydAY7ndkXvgr5mu9EXitTPTYg1Eo92nYLbWvX3H8sS6VpjGDBsUhcoRcMgx44aD57c6BvX",
  "key46": "Kq961n76RueRnjC1N1fSn6DnqRjt7K5nCyvutyGGCF3JohfszVRyEDtUx3FPQTQpm6r4eD6QYpZHJXqT4S1oLZk",
  "key47": "i5EneP8sCFhpu5M1mGu9TG7WJKMRDShS67qiBiurgQnpjHrb39Nr7rsvcW8qatnEy8ANA73wJq22BSaSUokJDsV",
  "key48": "4Va5u7rmLrou3X7ibpDumWzfdJUig5ksacv5kxUHVhSu2UuhphcmYeE7jXU7Rt5Traio5Jwm3xkbPd3zo3WHjBhh"
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
