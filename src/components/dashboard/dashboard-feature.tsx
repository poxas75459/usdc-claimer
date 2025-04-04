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
    "2vjAw8oZaaShWVSfYVA9XAW6Em9kmdV5BiKd8oY3ZKS97FGrHTukopv72q9PkspQYTrwM7pkbD9KBVD7JLcc4xsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWdv4idB9zEShChLB2Np9fBwesb7Bz9Cu96Npk4nuNmmyfizEX7cKr8TMoZawML3wUhWWMyFrairu4SmLxSo9wi",
  "key1": "nZjc1buLAZtbxMXaPYvKt8Se52yTCS8LToUmBcvQViJddoAN3JE5dUcfhZTgSe1R2Y3UrQs9DL8kxXrmkSHJANp",
  "key2": "2r4a2cApru4UyyHCgB6QLTYZrnTF5uYBSoVQm9Ec31WtxfBFXAfSAsTPn3TLtFv99ssmc1oSK3Wiaf7LubPRoiK8",
  "key3": "4TdrjAAg1yegYyVucYV5NULnzv7dHgwe9qiU3891EG2stqDZsdhHmeYpC2E8fjX4GQTtziZMEdyRzaTe9mP4DLfL",
  "key4": "5UuFnnweq3d96QQ9q59dDmUHs5WjASxixqyEUhSWm7NRA1GxwJh7i1LxZFQ97HP63fpPdrfPGrt6cR6B5X1Q6GTx",
  "key5": "3eESeTtfmNProfUY5WZTXk9UrAUUoQX7WQT7r3J1ZRxgRJgzWkUneYeWsGXgH3qACSxt3tJ3wBdErYKVRY7XmiLa",
  "key6": "2fds8t23bNBGaUPo56wDrarJV2DnkkhMDxUGxb1wNrpWi2CHSYBgj7VGxjhfLEmUnx1pTCghMu3pSXzUFxy5nTjk",
  "key7": "5yxR8pstvnikhifVwREYknQxiaNovp4qrrvv2cvApmxkdjnyHd5m2F3WSJdpvHAjngzmZm9xQfJT3BhJK8pfDov1",
  "key8": "3wdJCW7Gx9RecdFTp7zxtWu1ya6ead1hFfhiA7EbzD6SturdxMxEvJNV4Pqf3C61HuRy9Zn4gLXey6woF7UAFw56",
  "key9": "o5dFXrFBQ3uBaqhxAX9qiQXCLSn7QnsRqJBBBU2EXdp7CWyEjC441Eyhr2n7EhyiPsAzH4BphuPfLBSMmNeYCKx",
  "key10": "3aWefJcnsMqNEoN8hyUg1BrryHnuvcDi9wUj31hwwcTFedqyHdPSRyZtbaU6Vs7m9HgHM5NAiXUjqXmLFwVHm5oN",
  "key11": "229XJwAiXfrHrzobKAQsZEst9N8kudhdSQhkNFVjN2X1zQmAf2dnfTawbHxfqikjJUdLMy5FkZhSKmYtYf4rw8ds",
  "key12": "dSDZjCLErerJmGcFDWLFbRod5vXmRzhtM2kAToihT4YdQuwokZyMuy8qSSx96jrm2fNkDdqCNK1iuv6aGFQbFDH",
  "key13": "5qgXNu4qizdVqLczFqfa4evG24moMVjcoDgAyN35ZaV1ELBFxcNnfRFkZpQn2d5qFy9gw1qF5NGYUeJCfpTKVVJM",
  "key14": "un7ziCJfzGNb5En7tAARhV6SqKpr8kwAWNWACyodMQFyV348RDfnrBD8gCpB2RRErmTuERAf2G4A2uLuzn7DPqp",
  "key15": "5KD6kJuH35ibyQuASM6pymnizzXMseWh5KunFtjrovvnsmFLgrz6214JLYo9GiuL6qk5rf6HJeKWvwk1TJgo3aHJ",
  "key16": "BxwwuSNUzG9xtZ2ZzWCF1a8YhfsU6g1ETJ35Gw9m9XkpXz8eU99wKzyDwoMWo7Q1h5KHnkHSy6suZhZDW4niYCy",
  "key17": "38xdwGSM9QajTQjcALgeEURvvji2wqTLSnp8qugo5yoofjuwC4csC9WXnvFdUFgSsRQAUuX9VGTeD8VHUjgzWCzg",
  "key18": "e8J9HZ94SBJX5RCDb3mjRRmu5QWKEVy2kVh8Ke1j5d4agtooC57SEUEvYcDVPC79ohbT4dMWSdgZpWDoCWCypy8",
  "key19": "QEsP25xuDhEpgqEKurvfdVQagF7hP35fNEv3Ub2iBobNpCKnsWC9p7r9pAkwJ28hqis1Gcuts3YX78NzEK1QYXR",
  "key20": "2LtTFTX4MMVW1rMSpt3Wch2yxwKtLSLcVyG1ob8YRf6abXTQA6jNoKQMHR7dsMFcPRNkVGWxQRMqvucM74tfMEx8",
  "key21": "3QuhppsWu3E8U7zBf5oRmrAy3yVmZny9Pj6mKsXRbH9BRwf8d3e3vP49ixnD83m7oqhZNAA8DQ715iBFddoa8pVu",
  "key22": "b3yw3P1BeNskfEwbPjWVSqRqPZBeK9bXrEB5kvVKcK8dsqkc8hg9YZLB9T1ha1qRjW5RZLc6ZCAAKxAQPwbcMXP",
  "key23": "gT5n4w4Z5kRR1gKZRGZ7PjQSvWyLFitGL6K7QqNE2gwrwEzpNDF2Zp1bus4aUJri8KWnLPZG7zowTSCLYA1mN98",
  "key24": "3adHsW5ycGsKoYc16jMZEFTmV41duWpZnmUMuiLvSq8TbyBRk6GweKofhiAa2gxqDTqi7juVG3azxHLJain7zPoP",
  "key25": "CCsBQZsr3mmJwAGYdnrDCGmvRQeVnLMkYUxEnLPJDvie1TWTx9oH8mZLfMoeRgkVC1hfKHZivhdeBRwiRspWjkd",
  "key26": "21sBiBSw5TC7D1jT6snQ245jjqcGrHQq9yAB4LcQxCLS29yFmYCA9QBGvoSgNqQSNZUkAZagEX9kkn9WMStDid38",
  "key27": "2zzmS9Qipb2hE9R8ZR9vEdFTUkMzoGDrWNkmVbnoUgWBSuRr7jsgATRrnBsBmvfUCYyjeGewgcDGdTtDGAG3yohd",
  "key28": "5VQ45GWAjddoTPtigttP1JyJvGt7aW1GY8KXsy2JwcjinEURvbRD2ECFtqWyBrQC6jwq9CGU1SVZdPbyEg4f1fBg",
  "key29": "5jUj9AzH5Rf7EhJoE6G9JsbibzW2qAJbnQ6mb4qDzxqpDZ49XhQgvzVbHG9QC3xvU8HBrw9DPiSxC8T8jxfkPera",
  "key30": "RTPeLJTsZbddwrMg9UYqW7PxYq9L1MB69X5b1h1GtUyK3hroUyAMRg8rce73KxjyrBrdzoTHKzDPANmFqRYEdBq",
  "key31": "3ML71xy2kEjnF6v3tc2rKW3BWiFjCEZHnyRa9bXxy23V6eMTLVVnjscwZYkG93fFKP7JteS7eYPwjkpXDw4D1W8f",
  "key32": "5q8FJUb7dXbsATRG4jRur2KLk8PFLsoicMPRe6TWkKfs9GhRdLU1WZjPGz1ujzAE3KqfD3ihysprMu9qhEDQSDY4",
  "key33": "59VSaM3cqWYT3Yi71iQpHzJ2SdvbGDVd4ARKiLaboPD55jgPmGYedHfkkuYUmJ475NeB1k1sFXgtQ9EPps9SkosT",
  "key34": "5Uf1WigutUazbSAqwaeXMS2VxjXZAqo3DZuvfe2QBD3a4bkqiBQvcwkD5hmvQNeGHtpBUaMKYF5gpkxPivFTBELN",
  "key35": "2baFojHp6wXVoTeQWosDA5sShorJtCkXUzxYMRajXquR9y9TdVh7SoHyAjSUs3QWZpG9ABf96mkktQZTtLLP16iJ",
  "key36": "4Aj3cwF55aAJDnJ2kvaZarJ91DXLxD3ULYWsMUF6bEK1XJoMtV6Prj3mG4URVZBbeAh4rtDpCZ5SEJ3D7gJBuA6Y",
  "key37": "55LvGfKWi6RxsoxF3NcbsjxrLNwLGviycUsGZcSGNQqQPt5PqZYyHty1Z9w7L6vhLR5PY4XzbNKAKQ3cA4PB8Q2N",
  "key38": "5qV2KSjxzgJyxq5RGgJR23JJjvcHWUMDrSgDRVtc4M7YepDzdHC8LovMxKrncAfUDtPpNM5fMPki4der3icnAH39",
  "key39": "36uUwf8dyLCkG28RBkpLgWaQJZU5nMeW7uwbhuYv2FAr6zv3bStnNH4QmerE124rjK45pBWw84yVSGRH2KxatVAx",
  "key40": "4fuTURZsHmASHnu8BHCUhBBvNfUoP7dxUS8WXXE8whxz6YewAHL7AjEk4HHKLKH7mxd7dyYCtbwxVfnfDRUHygdV",
  "key41": "4QYCMtCLUF3TTuh89nVgUxPAtTg1GekRtvoj6ts3XWKSTqkrYLG2wESYfWmeckgX9VuXvMZkPjAzTEVh9gh5QYAh",
  "key42": "32tTHi6CZmFxykSX4f5xruirJXAXkXBUfB8pkN6xoHB7mWkM7D5ibiiYyJB1xMbAg9GJNHgifCoCfbGJNvYtSwwu",
  "key43": "EkNTGMMdsvp5Enpa4Re23ELK5yoRN31YxgLEkHS8ev4t4nvHh984RjRJ26XfS4jwJAcdLvQaQmMAuGMQaYFm61q",
  "key44": "2xPUsXJURWwaFKyZTx5UKc3Ao65nxrUhfZAxyPZhuaW9b7TTDQsViPSCwqzVHUF6rmkH5MF3W5V9i2JkKgpvBQFM",
  "key45": "5MEDtYZKQWiTP3wAekGPxUZYMAQLWFeiPiph6QRNjrE8ecX7qYk3vLtoGzEfwkqcjXofh5mKHy9fWNDZvmauAEuS",
  "key46": "3cdipp13vKhaEC2Z2ztNBJaVUn7FLEbXTVJDrHgBnYgjNSzUxuuUpSsy7hVzFnBg6VwHoU8imvCW3bdMVyEovwQ3",
  "key47": "pUi3cc61ay37HfK69HUTWgpBbVyYr6rZexWZk2LwsMDVTm48BzfTvXmopqbazZ1R7777k9TyKZ2Ar7KWoQRsjG2"
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
