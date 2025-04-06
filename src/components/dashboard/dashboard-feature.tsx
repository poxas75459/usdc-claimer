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
    "24f47MAZc1TUt7LJvUUSyrTsDxRMuUQLU8twsBx6SWP3rKcmVgJuiFieYJvz3DXtF9goU7H9qg3GuibSU9wZepVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPhT3FYSPyz1VMKso9dybg5nyyka4yVuCAPjLGo9ToKHbeUXDU3zTNzhUaJrgpx83MQtg75beCU15b863VczJsG",
  "key1": "3iQ7aZxe3Z7jY1i4HhsQTQxweSNstn6EXJJMRYtfTYp4RiwEWdtDD8VtZRbHbS2huLuZETKkczRYCdzFLKLxXtAu",
  "key2": "5tyAS1qZYPWmnPdvbMH9ywXnyyX7w9y4gQGJdKFnJ4Jt68E8isfxr1ZyRshbFYdg7TecHfF6ZYq4nhqsWBcucHDF",
  "key3": "XKhcg8jNNstbquCcJoHnC4CH4CJ2d8mxtbinhsDfscdXC1rKn6dJ91LHZ9QugMM3r89i27Gj6rYPTUpXi8twTNx",
  "key4": "25Wy2RyKeE7AFNpYphgoiEWAjsQBZ3dxJ5rbcjjvukD1asHvM3tZezjLShdXPZHwA9TQvjTcrkNAUiLgreeUoLcU",
  "key5": "2YLkptpN7ZVWpp6e1nrmf1z6Le3NTxedhB2UVTgmD1iZHgNRZ5wYSuX4TAfmxsyhw3iZ9JsNLyXtBd1SQpWu4QUj",
  "key6": "53dSwrJR1RQsTg3DGyfkaKJjz3NVdkhsSKEG6u73D1y5eeupEoGKcUCYSBzQwnfGQzwiufpyjnYAhhDtv6mPUDbA",
  "key7": "3Dq4ZBZEF3WMiW2P3YugRYtAk3VuosSv9T4w5WFbKxWpBjw28xvBiEW1Tc4z8NUNBjz9FxX28xAsoPb4e7sGc2F7",
  "key8": "GLrnRi3Bk2UCrJZsXc1bMBgEyxX1NFQWLWNsmkmq88JWiVGS85pNvDScetEeabaFAM6re5ZC2Sp6s6hdYFSnexG",
  "key9": "4EXdbCQcmHMBaEsuHkNzzYAGC9stAGVe3JNWkHm17N4E52N9LiZjj2aDgNw5NbJBrU9j2MM2EckXgcRsKDdTooAY",
  "key10": "2MYriAEdijr6VtDyyJ6jZas9KpuGGspLStNdvb1dx86B9aFuiUrKR1Xf5rUZpBetyb431oAC8FBMzQ3eJcpB1Xxc",
  "key11": "3sZ7P5QPqYSyzH6VMgp8cqaxb46eeVqdd55bqPr4WjRRkQQSCpa6MkUvH85F49FKWRM4CWdCr2osFXPizz1u1m5W",
  "key12": "vf7xfTxxwrwzLT1G3pVPYGN6y1XfEaLqfsnrrHbDyUd3vm3nUHvNCxX84SBF6hE9XJmfGKepE3qc5TwgPzeeV8n",
  "key13": "TPmNShGa1KAdUSM5gzVZbc1GZpL4WunPkJDYVPXTSBqyhiCfYrX7Za43aKWVQCwCaRsbmNSFaNoQtBg7Yxs84h3",
  "key14": "4EKzm7FZ5gNZhFLDH6Evea9SUBFak52nCah88h7WgpyZvCEeHnuqKPepBpZu5oXqxUx7MC2eKwH1hADmD8wc87ZC",
  "key15": "4kGcSRKLiie7bZiPWSdon19MGf6JiVRXoZTJwHg1rU7myisH5pGPikD5DEuxCcPMCe6WbHTDogXyfvTL5yiiMK9B",
  "key16": "2WGNLfNxeeVbJ97FckPPfMbRYENR7EgPivLvN8aATLu3RHvqXCExYy36i7UT9niTuVWWdWJVJpamTNJosKThtSbk",
  "key17": "3XrdXDT84huwTWByebttbB8MeRckZNZ6b1621eZCf1Y9BLiefQt6FvNKj4epA8FMQAvjpDkhNd2Nu9zRfrUpRwmw",
  "key18": "4pkFpNv9mruMhNjwJ8yLRaRsgcZG6Mu6gmivGTXnnf7rFeexDK1Q3SvgbzXRiovNjLviEMewNGSakB7PWVchGDbz",
  "key19": "5BGKKrCJe4mvGtqWEQYcKo3jbm8Zp3iBAm8ofZyxTAKp9wYEdGGgRpQcZ4BY9b3dhZkzhfWH8cng5QG3B92Yz8sk",
  "key20": "3dMBZxsHquuYsm7FqBLJwnw31bS9wr53Ed8e8tmr8QEypt31RrpN8k1AJqrbJ3Fpc4ba9Dm5oZbdPQWyc4sUoQbj",
  "key21": "2Qzw1A3oDaE147uKKDZTRSFLFaNSJ7nHAHt3bxUiytVaTeBXRSVaZ31QLpV13434g2D3f3veXhgXciKxeGhnaxMg",
  "key22": "VFpz46ijhg5xjVviN2g2JVBhyWWFGjciE2DAFBKC4Ad5YovsQH58rywfYZ8dShAvRJNbMicpGAeqEtaQxPuBTW2",
  "key23": "2ZK1QD2z2dZ6GTDqhdrzhhLAtDwqA9BkoNcu1yVTHdnMBYYddhEy2sDzhajVoVyeds8bVKLc642fUUKTJNMCnzEj",
  "key24": "ocFajqQwsppMYDhWnhmis9c4DPCj1yqkds8SxSfFYuMegPYKhevFpS6Mqh4PgehTmj84Q4m5P2ti91Sz5MeDa6g",
  "key25": "44nx3BxTzphecuTK4UNZT9fEC3nJRH92JjaSZy2byN5uGbyQBrcemvLFfbQgeceKTpz8cCXQRj737V6n3yuvXpa4",
  "key26": "4pyYniXEqKrK1bwwmuWrLmCUpzEGGiWiSf3kxWj8WYDoGvkUq9z4guE28K7cr5eaZ7DHb7XAFVE8kcqd7WB4CGj7",
  "key27": "5DgtP69xJcgNFouUcU3apmTAdFBMWUegP3N1nuvnU3Bs2m6iN6LMxZvVCMk7ubAJaWs849x1M7VcAqnzNhVKEoMk",
  "key28": "SNFSuhpWyYZrxDczqcQLzxBNDj7SrmEFG2hjfxVkeX4dckdajcfD1kFqhREb5dLgvZVWgLJvgBiWsgdFRHFoGqc",
  "key29": "64Kn56VHiXn6wj37oBWUdgJGGqYJeJfNsQ2n8w8YjxMVSDyv1Pzv76yGzVooVEMQVFJYPsaEHmBJ3vWuZFvJLeCF",
  "key30": "4Fpow2u8g92Hf9G9LsD9K5Kozv4pjXNJtSVJJQfGyDmC2gVtTMv3bcRWZhT1q6gjfcTCJHUNGYvt5adnwvJD3jdY",
  "key31": "c1n3bdkYcY6jjiYXsbMu4KMKTGXUEUECWMUAeQsSKqvA9eCsuJniopyFWkjMYNHXQ7fuj986rQFt91q3tDRSWqU",
  "key32": "2Jnf2YwA9nxYVUYnGEy1D7azUwZLALFRtMVqtumytzxBbwxaxnL63GTuFvQHMUaL4eMMTWq6yCSkHHrXnTeUTnmq",
  "key33": "34utRM4P3T6GKLrLbv2jAhbL3t2xuJbb8DSD8cxk8qf7RQxHvJEFFCwtDBsiEHjzmGE9ynwF1xJGXL8b2hcYy83a",
  "key34": "2MBxRmvmChXfZj49PuCzC46ENxkPueXkw21nZGBaTNRXz89DHpQigwaxxLcco1hJG85LJA3xoR2efCSdcxgazs1K",
  "key35": "44hdmYFk9Anh8jdcfgBYByRCqNLKe3tmwnFX9Lzr4DSyrLk5YdsGqtfAGv6J5mJPqBb4GQJhxthHnTGKMzeaozkw",
  "key36": "3wBfv4dTfVGLfYo7DeVS7niAyG1jSeMUbBCiejADySt99QF8syPokzFa9TF7Cqe5Zcv1qUpVGyNpUYhgh8f4D2Bs",
  "key37": "iDWFzoUWJcD7D4W7gX1AcqtuLLeBEHn4qcVo33xmKH6i9dqD6bAENhuL4BQvvkDeb4ttx59GA7sifWTEmejGeoK",
  "key38": "L8D2JkYmm8fDZBnX9Fddrasc33gWCDnGUB6VPzMVCHmwz3JwucMqC7JTtAPatJZUFPpjE7YmtucuLTQ4uuqaUtv",
  "key39": "2JQVH6n6PEa2vR9Z8Yuvt2saoGRXr9dQn7r6JgVbb5qgCnfYvecqesBhwxqf2kfsMaLZhp1SYo5XyRpXqxSvfSgV",
  "key40": "3NYb4s8WuQZK8X9THqbzJEKf9YWLoTCuG5hjhWRKoz81sH2AQySWAUL8fMrysuv9ShWskKzBQf4XFCvYBZTBLMAE",
  "key41": "4yzZVdW14AYoz9Kyrmr2tUK7UHU6pYNTRhUJHiF8t4VPV5s66h6F3U3B7Ui9cvMrH5vBGpNSrFcXckRFodPCwhAp"
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
