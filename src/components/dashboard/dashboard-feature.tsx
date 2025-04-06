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
    "3wXCMgoUwWRhiMZwXdZsp347aJ1g6ZwDCQEmFyHcnXLzGWwnn8TaMGDGo61WFY3sGGEBMiCYjsCZcs7EwSXU9TpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mbfTewDNiYf9wKjkgvY8spuQrw5secyXVmHov4LhSTTScBuNy6AGT4dja6sCeZgPei24WnfQ8gCb63NLeGAg8KT",
  "key1": "2PJVJL33gcV39izPy18UqrUbKhEF7jxG8Jt8AXHAvHNTtf91PfmZtWAxAQnU9NZuZNXxiDabS95wPmatSxGNgKhf",
  "key2": "im7EyyPYZYJMcZS3xqw9a8dHXkt2Rmhvt7ETKYabfDDpfNJPdTAxYsCk6WGXRYpHpTH3tyaerfZ7gVEJCcmbbtv",
  "key3": "4S48bugmhLbon7n3dTaiJpN3mSQVRTzktvpTGY29sxcGKPzxzscrnGkmex3tg565KWLhLH158jsRBaRMa4xP91Au",
  "key4": "4YB8B3sAcSbsfmWneaddbqzdzSimEkyTof1eJoQrUWAHdKyqkSKuuXABLSn6PJDStPKTKjp6Bmv4gCq1c1c4fr6G",
  "key5": "3FRrPuQpKHW5HnC7ghdb4C45w8Unq7XJstdL6V5DbajEvUa9RZyqmHMmnGbdgGFRjVUG1NTG2JwRuubaxD91Vqsn",
  "key6": "5NvkbVKA6cMr4jJQRv9Gocq77MhMDeSCvXMWXKi4rbE3oQnzZcjLf858dYMMwqnVvitMqCr26sA4xyE14aa9LQXS",
  "key7": "LdcZC12M2uxyrNVfLt2trbz9Hyq4D3NR3nSwjRsHtjAn6QaPHJvACUHW8Hig4m25tNA5wyzSqHTwxFotrSUHPs6",
  "key8": "2B8tLb9Eaefhz2VVQyHFZL9nQctNzTgcoNhDKEbxHAV4bbwhrAQLMT27hW1okhnnZrb46A8Fine8ACGe8TAHoKgo",
  "key9": "5qSnWFVp7z6uQD3WQ1oRaNvqqgE9rtGiVKUBC1H9wPi4LF3xVaiHKv7CdEGe1nGvKcnXGDQtmSVUGEESepHjgUaF",
  "key10": "58weVdfKYoxfvjpiggGJgNLS2jwa5KHSS5uqrosEPMsZSYaLiFLyhZzWZCwC4J8RjeJtjJS8eaAVD9CPVqYHtbiT",
  "key11": "33dT5qh6u1nmr2DF3bz1rjsezbrU1DFTnkjGcRfNHbbwkw58LdrwfkYhtsFnWrKVVFLizvy4ZdZpR2xYNmDQNayr",
  "key12": "4EhGijEdh3h4EbYimhEebdPLuD5eg9xaEBg1vHcxtBkgGuYRoFzxnRXGeTsN7e1794di7nB2RADqAqcBgr3ALnLs",
  "key13": "5s8E7w1YiS8tiUz4kRgWTdmxgKkrn4ehNhCgNpq91bLwLhUqno8EJGSmTwvsSTvysQ3rzkS3wavZfiztggdL4vGU",
  "key14": "2uL9pnmeJkUqUaKHjHCUevPjoepJtejxiTuqcdSxarkMzgoK5V9NCLAKt69G52tqHGtsfqHNowuif8vF8zhQmf9s",
  "key15": "2nroh3huHWfe7wYg9vPtou6Y8Fou2CTKUS8KKRpToLxSDHgfbGjyiDdC5jSXg95UmfKxeKpgJ3v7x4feYdTfMBoF",
  "key16": "wdHFWN61XAbE53XRqp4r5C9cpysUwojQuUo6fp6JvqWe8BJTiJLFu1DQepXn2nBpRTdo7BiYmWuYC74fUg88LLy",
  "key17": "34zr9NrAimAATVNRQ5VGMP4Vnw23v4XJzofKBEZKyos2HJW8BCqNm7une6HQFfS5c8XGs11JoWVPu2zXGeHmJfJp",
  "key18": "5ZrzSWAGmZmGp8p5qg6tMMRmmgBxh66Qw4YiyAyCF7yTHom9pyok8atrEtZ9aL6fmaz3yYgRcRVBXDUWnASaCn7u",
  "key19": "39PyEzNFbezycCf52gh3ZUcE9RZe3mJ3aNqbcaxqHyR9ihQuiNQ4TosUZcjC38r3nH4Vde4DUapMALYtAQ2R6YZD",
  "key20": "2kAj3VL7EYnwLJF9Yws1CkR62YVBwex9DXVeQqSskvjGjDD6Yh4YDDSdguqEV76KLcY345ibqh9T6qFEndQ5VCKp",
  "key21": "5firM7FLjgSDERWXE3CJM3TG7tN4QBM2UbNQzH41enBSxW8jf2NfuAg7K5xJ33BR2yFfAoWgvU8VDHF8JWEsfL6Y",
  "key22": "4bnsgcE5yz2PqZ9iVUH3jzT8LWydhRtQLhafVA6eAVYxxEzwGC4UpxB6CK2XFA9hSVCNfKQPuscQSTfwZZ9TRVCn",
  "key23": "44aUGKhUvUorTh7nnMCJj65AXZiVLHt8LZYamfHNgxxDGDZwZDZUnkVuFmp1ZaxayB8J4z7jSHretSGR2WdnQRZ1",
  "key24": "2h7KgFr2oxuc2hQGnat4hZFhAfCHtncTPZ32YS1bh3Sp1U5DVDCWVrqp42nRaePf4Gg8oqoem7GsWuqqHKC49gB5",
  "key25": "4o8XcZs71FD69H7tFpDdQY13QyqjmwDtGeiYY93yaSbapShTRrUQ8NxwDfTvePt4F2VXDrJaWhimGyMSekWdLhUt",
  "key26": "4vXpxSag8sKJFAQBRsoST8cF1wrr26HqhLcia6pWW5GcmAAkNQTxFXM6oW569ZsuLN6QQcBAMMRec2ugauDzWf66",
  "key27": "3f2qXa9nUgbawjoiFFjVm17NrwbR7u3EEfxLsZucAb7noRqRJKxUzy9UkSB7qa13dqpSevrrT5MFc2YTdCGi4A1z",
  "key28": "4iLUyEMN4WqQkcuh4d1hiYB6P6gcqpzjDRdDNzMnXGWQUET1iwv36gMg6JggKRJ5gV135F8mYUQsQJr1tAJ3Q9DV",
  "key29": "23ijP9TCgbjVE43vx4imHbiWNQTF4HoVomHhSjREXGNSkL47t6XaPBYmvZet1iHf9x31FrjiEWmHjir7rDTyze8U",
  "key30": "4vZ8NJNhjiaK34twyfQ7sLHhFBtYYBB9BPpjCFoteKv1AVZPUbcrAs48CMNJRNK9q5s16b2xcNkMU9TaNZHujcQx",
  "key31": "3V5BKhNT6fAgUfJpwbLVvu6f3LnRkg1f1Yq3W6R2ZmFaLYXxHPKjP1QJh2X72RdKR4kJ787op1igjqQpzY6jmUb3",
  "key32": "2qQtTGEAbh3K1F8ytVQmHjYveJXhfn7eDQ1EBE4huq2goVbAmscELC7zHGqvCPcRUgHu5bJnMWX5f93PHAqSbCKR",
  "key33": "E9wCgBQExVYfEDfFNrG6uStCVnRiaTUwhMuQFYeqWZpqejkH7DJDboybDg4Xr3JpYnd7ibYvLsVDuriqAE5eimo",
  "key34": "5uYPWxtPC487WcWXEa1sv2GufGsZrSnUVZUzyBqmi2K8TUnP39hU4oKEnN4gFCkKKQnkA7ih9Sit8PAc3DKyNpxP",
  "key35": "3Qm1zhsbmysA4kd7i515F3vSG87j1TX9vMwftJFHp6oEg5ZZ2XfLzZqGV7ZA3LhNEnKNPimd5oD9wJ96Hhj5eE5j",
  "key36": "kpC8dP9HG9x8ko6489fCTo7oaRR67VaX15A2FVcmzUC6ZfAhrf79XAxfKBe5zTgVCnehQaVFs3PzhcFE6YU8fTo",
  "key37": "4TJf1E1AhZMTnpwqRDYzoyST7DZCdVVibEs9ynSXBNbuy4fag4SbZgLVjeg6yTCnXFsD9e1vfKmZfj8cVLnwhwpG",
  "key38": "3S9SH3Afoe4aEP7PCiwppQYvbyD9sq8F2jg5nxChX3NQyHRAPh1BPcWkncw8pTdF9yDQqdPWuXaPvXeEsQN5EygV",
  "key39": "4VAbRJoCV2ZfgydDzTvrHqyUYnYsxw8D2RCd43E5odAu5ifvxPn9Lt4Asd36GZsjKCjp9mua4byk3kZj8dtKJHLV",
  "key40": "38QMdfpi5PDhFB9SPL9SAzi9djE2RgHzgGLKPwPVS5jjQK6VuhwQQMkPULGsRRixsmgvrCReeVwB3CF6QipyjeAk",
  "key41": "5ToTAjqhMcQXmsYVDekiVuYH1ta7595Lv2kcYRBs42k6eJMp7Qc3Gj1hS8Ze4uAdoigkw1xaEnqb4EyWZ5JQhGLq",
  "key42": "5uavKw6K83fcmpJTPM35PsJfRKgAKXjxuWyy2S62pTBiVtDSFNMUVXg1v4ej5j5R5hecrALazxUVdUpmRmYmpVoZ",
  "key43": "f2sEtnfGPCwX5Bu9GbxQpaij3ygga9wSFVm96bnQCzru6xJdDHggNo521Egir8xLCi8reXb5hGBQyGCHjHdJ55Y",
  "key44": "4vuZ3AtbAZbyvyEmQ3GdgHqQmVdBpsGYnMUe8axCX5xmwcZ5VE1gt65daLxpkAr4xYzWdxpbrY53Ah3FWJWuFQM3",
  "key45": "mk9nGns2gdR7jm9V1haM3ToNDyberXLd1jaUnGdGbzZCn1cmwMEV5i3nV2ZPLRH6RaTVvk41h5aQDY2FttFwYmK",
  "key46": "3yDCMibsbfNb9TbCzoXTh2M7XVz2373AMnLTvsrxpZDMyjqVMzSfwmCjDHGoJrYz6sjggvZxamim1TaiGG15RRqP",
  "key47": "3QZLPurpUMq6CssRHbMn3NyH9UopzFXMAdjKEtuH3vUBWWvyxEc4SmZ7SafDA6MzvSV8RPY7QdRdwy1xEWp8Hqwp",
  "key48": "hcYpVmcnH7D8gLm4U1K7yfFk5XQZKZa3DiSFiSWmcGPikVN2tg92U5nJNGpoYkB44KkQrxTX6oVTVWMnbB2Gat8"
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
