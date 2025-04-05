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
    "5kuPDvGFGqxXEfmmMCV7RaNCJLNzgYA5eWJchrhMgkPx6RTNMdH5xZ9DNQHvAggdVh3zvURXhJJGW85cUezoNXWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22KyDfKEcNXrCAbKfbBxtEVxWgtHdavfPquc9MMGZB6f6m7iDBZeRLoFfeEzCuyH2DDYcHV7GnM74DaTibD6nLtC",
  "key1": "3RZjDQa7K2JdYwxV3pTHY3WWcd7oFYsqwFnCuSBMTS3RNUVzEqdGaLpRLTKrJ9XmiF2PjWDeK7EcryEScaRcfgTr",
  "key2": "YZVjjMPYzY7y4U5iQEdeiZKDW6njE7jJtGReMTmrVhzCLSuP6ZZfuGCw4M61dT3Cy3ps4EeLb4kAKB6jpMKxuVg",
  "key3": "3NADMpbUdeTyrS6gvQoHX5XeMscthMdHU1b2VjoPPmBKWHKipQCAMbgnEhgbVAa3yvAQ4chBggiUvkFzTkoPCxD",
  "key4": "4ErrjwVTjvuMKDasjHgafYAtHVx3amUK7FYiLKE4sqaZN7TM6kt1R7Ae4pFpDFr6SvfDctSX2SZ8DSbnbovYLsxq",
  "key5": "Kt53ZBd7MMkU55tNVyNXZdTGXYWqMoYqEGkbV5A3cZnwqsBwgRW9yw1vZDpXVB8LpqdgDemziymS91X6PZWuJES",
  "key6": "57cPbTYysW6ERd5td8RkpHw2fecFogAQhd9r5zvmLehJgVtS6FrQtFcEAMmN4QP5Lw3S1zCF7WDRBDUfxzvfF8Cq",
  "key7": "5TXxzHtyQAUwUspFTYbCvRCqaK8PwmReLjVQc9gaXxtBk8dGZFnyn8RiuEoMCRZ9xdQpuiy8kmk7d1JNX1hVyhQv",
  "key8": "4ETP4TNXWx43TMxy3B5RMQLMt1qcWr8fd39qhzNPgvbuKEs7qZ5pdoRuNbLJGn8sqHchE4eahj8Jv5QWJHrfAmEA",
  "key9": "3KJ591DD33uq4KpVQ6RLHgFC3wVK1LmvVL8bdsq9a13EE1TUs2mnkYD9CRApLkFxjsu5YzwkQ3cjhqXF6iTSpTxg",
  "key10": "5Yq5cEsUrkk9yL1UWGKVuGvJ6SkbH9qYmFLRYH2M89fRtuSypouakbJF1Zp2Zqydbch2qunysTWEGTpbSDcY5dEt",
  "key11": "4DJVSe6o8sHnn4ma9Ny393bU1MVSHzda7HUhYLuqH53X1uo7pKcbXqiRYD7Pmo6VLtGwM6qMWgpdouR9kh1QBfFQ",
  "key12": "63ojvRxpHMpnoJUGRVAf8N42bxqvFW2bUv6q1BGYxUcm4EuMPLTM2FGbs94mUt9kGKqVbXRBDRz1TYmWCbPoSDop",
  "key13": "22LpPuZQzZnu7aZcbBuauf61KKTzRc5oVDSTwpi78W4D83Qv5qERmuSeWhwtVqQnVbWuE4iyNZUhW53r8fcYm88e",
  "key14": "BdHim8fu8FwCZJRJNUkhgxwZmnSwjgWrDFAghp189pFAvrs7ngFGeEDPikBZXonm2nPBvEpD3x4U376ebTKBrKb",
  "key15": "HnSwzSDGEuRjx6HRP37ZMk4rRimUgGZRVJutNoF6d8vu8FokXjErUULhmnWyAHtYJpqozFViQPHJMJsZ1yEiBa6",
  "key16": "3tdp1t6gNWhaUua8H4fgV6DUjnp1TtdyMfs774HR6MHBb88B3Xzdwb9u2MDs8RWfjNcEwCXE5fbXaftkcXp6Bzko",
  "key17": "2AekvsJAbHRx2rTfXeFtmEHQQpHdV3XGSj8tivCq6QSTGvFgNokE3ozi8V29jhL6kYTxHQjsHGn6enwPZP4w3ePx",
  "key18": "5Kid1tWdE15dxHhNvWrgx5zn961yinNiHRWTrCA1khdTUjEBRjEi3cuB1S9aoj4uhNw52kH5daw6UCkmo8K9CvWt",
  "key19": "2epJmmFm3fxmYsQ3dtRwzCAq231ZKzfUN4vDdM95jrUfPJMqF5q88W3qXhtTGwP8Y5ccoZEjMzohUTh7fbYkpgn9",
  "key20": "4ELJpC9VgYCtqJDDD9Qpj16f8ES7XfBeN7QEH3TrWrb5FHrhgHjzWLmhF3iWF9nfbCycoTZH38f5YTBkhNiC8Ani",
  "key21": "N6CRGkCXbUxTU2KbXG8FEZG86EAisD9J5N6B5Mm6VrvsmV5HGw7qUZX6VqicrcP6FgaHMW94RwQYAcSRF2Wcpya",
  "key22": "5uXUh51t7p7cHKhrXYkFepNE9ivvr6sVessaHy2wzA8Zf95ztPS9LStWeiH5fVTh2r46WFA2oL4EcTSR6gur6xcA",
  "key23": "4zKF1NyHG94ztrj6HaJvWexyf1Lh3CD15oCeBoMgwjK7MfWZQRDZ1p6oEq1nJ8x9BGcrKNXihcTwT4sqoVacMuEk",
  "key24": "4rAZtypjYFeEKGgasRC2gP6dchLCFxE4RYh3Tg8wH3KEp7HVp94NxuDR54BF5XPRYz71DvocLbp5vqxLcMmjMac2",
  "key25": "LxB9s9ZDmivUwmPcfidTESrtpnoQjjX82pERZgpZM7XzhxGHmsiW6vJTPmGWdSfuEbnE9MRem4ELei5zBudBiGm",
  "key26": "4iCEqHeVawaimiyyUq2hfBPpycv5PMxKcYPVTuf8emPaC71cKPTjvubpf48ZpgANh4jGJTEZUBhCjyU1iMaroPWq",
  "key27": "4yashNpb9CqaVTjyB6YogxfehL8QZXrEVDN1BjF7z9MKbdsfqCaxboHtNDben8AxBqR2iFR4Jra1daSeWvVkH753",
  "key28": "43mA7GUQhwFsB3tU7rfF9b5iGHTByvzHkmCat5gL9Lm9tybjHY7788wjkbaCJz1EMyrQR2xdtHmaF4xjTPrVFxCV",
  "key29": "4nJSdY8N4pKFKN4vqrDx1fu1qRfsBS6wSTaTcg5sAPJsDt1aTFD3fEtTe939PwM7kmjWpPwMTjCWgCbp6jgVXp4U",
  "key30": "5CB4F1hZbVFeh9MXJ9orjQ77sUtKmUbYgVb9iPFuZsDYy6HPWNR7A2mZe8F8BHwnHtGUhtDuE7a1BwXXt5qezE5Y",
  "key31": "3vzSzp21zagKsyPZvcgCJMnwQ5rdnGAfPsxzGjiknDhnauvfCbzyvGKEfzq2MxhNYCPBCj9nU9Dcct4FWLdBgeoB",
  "key32": "5Yedpex68m9b518w6fgK4pgb5iUdZTKexnHpmLCzNuWjse1fPs4nbwok7Hi9Wqw3evCKFgdr65gKeKv2fg92BxDb",
  "key33": "4N8ARf2hUojSWudRFrQoUGPEosNEFe1PnxW1Mxibn4an2RuvQydwhiVKE2PrLgrsGXqAj6T3GwqvqJZAPVjaztwi",
  "key34": "3CWvoAckWtmWwCHqKhA68pTva4qEoGNLiv8J6TkNxwY8KgNiAySVKAkUPT3zjqWxpa5hbBqsqFizptQxYuWCTHvg",
  "key35": "5CNsEpV17cWMZ8dE5wYAqEzr16psmYsq3guyEksNp1ynwjEssxeKnyq6an534nNdgXjtySXBWMDWhud2Ue3kPSPb",
  "key36": "2U4u1tJt6D78EqufsDSx3zG7CycKZzRmNRU13w9Z1P8iDuHnzrn1PsCj2ZnNhoE6dxzWocKkYEwhjnyozgXs2Prw",
  "key37": "2QT4xHaSgAH7S52iXroQLgWTRvY1mPFCi5Cdk5XQ8uwWkTWFsw1Tw8GGGmZY7CfQFXyVvZbogvvDCP5yt1BoeWjc",
  "key38": "2UrvX8jHencEtdCMXuGUiLtE8prMSjrSN9fh1JEeDYzhDSGvLHSRMHMeWXTyj8q3RaCSmcr38vsGsRhX5uJEx1D7"
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
