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
    "5TEQwCncmfRz7BFL2NzLkRYM14JX2ztoeLiUAvPqtKwygSHUdTkMtJPAYvYdi7fcdc9is9TKTDAt77fMVRSME1BW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBp5hGcJCEda96tJ7V1NirkbfLY6GnK6fAZZ3GEgefatsvHyYztstiaRmccSuCoibbzy6GmrHKqr38MauwJhHyj",
  "key1": "3EtSrrgYHsCrQBQTMgeJSTSein4LdCf2g7t92zGFEZStvipGczxbWVcqQPoDdZDiiXxr1BeYgU677k4t5jF8r6Pe",
  "key2": "3zymG3e9U3TSMhz3R6BwwCvphpBVA8JkWGhoqYqKZjrBXm39BjTMZ9DzYtZJCAPwrFxPpWfxLMTSuEQzWSgWfqeC",
  "key3": "C6JupfefgernHo8Ro9G884yvq2VNmseckkHXxnnsMJEowtCPZxTt1bez1VjYRb6WDQVHiYM1sTX7mx2vtDM8D7m",
  "key4": "5LMQTSZ3aXztNNuN6MWtfNCVHAj7Ey2Fmgpg92LVqHbCFusC3r6NdU5f7TJDxBK52xdP8oitFi8rY4xvDrSi98Gd",
  "key5": "3aMrniHuaB6rEn3eFyRVFWhKyUe8oJHqmXjbibEdTaiwiNmrKdjoxrXoeV3LheaByCrDEVc4NmdcY63hhxvDBsig",
  "key6": "62wv439kEWUsUehSYLagh5WBxmAemDXbubMTSoLMZ2jUkhvHjrFFvBmULArVMnk9ZzDtdnzNABLRSJzSLWSs2zVu",
  "key7": "4DGqzXZDJoMWP85HSYUABzGrVSCweFCxiWggpEAyMMY4DD9GWpXxRVitcJNcSpBA88dAAxyf3q5YsdTEjsUPVLCR",
  "key8": "wie5aehA7c1qVg8rG47Ry7b2skL9fhna9Kmb8RLHtjtFff3RmH9TH5B7qtXsLJSdQ9QAuyfkfPaSkmeLtDpsHRK",
  "key9": "2EhyGxXbmG7tBWiqrmL6F7ggsEQ1hrBPYKf9iCXABd65K53hgaijt77HqNdasjbXhjRPHuGsssNwWFuHLorRTcoa",
  "key10": "5hjWyezvRgJL9DAUyKaFwe2jjj3a9CAtERZ2AkP85wY6km3QXnN7kv5kcX7Q7bi3jA3WpkvLzyabeEfgjjdTMHkq",
  "key11": "gMV6QddpFeNwaPnFUbncDRQcjWSPYhuw2vWE6ozrYTYoDetEerm7cp9LHTYBKvrC5FxvVPpiHPEyVFpk25rZhNp",
  "key12": "4Yfxyf31nYmaE5AbYukqWuRVcjYmsFGgZS9C51JFFqLwCrdL1nYfGMffKNtj9x1U2T6NcqZsP8dtwbZHUmbRtATS",
  "key13": "4opYXdARtzgpC3CfK3Raxm5cZwXK6iDzgu6L6g24dhWRia2QXRTkL3vvmg3QocjXh2eJWdM9BHAiMZqDG9SebRLr",
  "key14": "5CBfCuDcBBzHindwz4sRu55UL4z7CojooKtyhYu13PNgUQfnb82KRF1H7ShQQg3UwJPfQpEAmk5d1CqE1c6dQBih",
  "key15": "2CjypzMwq81gYqTRuJtjn9ppMwJ5yq7ydcoq2Yo8yGdBVXxK6fMyXA57eXBPtruApCZApGvG9FGVDkeBsua3Smn2",
  "key16": "4ZxLMjUEGjmULenV4pqLuxKehe7LfJceSVvZfY72FXH2Q61N27g7jCqHoZyiW7cupeXoC71RVF9CeEbEgwn2F2Du",
  "key17": "4S92fsFTdK861CTERQ5cPrU8wm7VZ41Sa82hMTJMgsHXucDE1NfnDj4R2tMXKi3cvfzHJn21TMjaSULzyn3fmhBr",
  "key18": "39Jxj18aMNZbGGiU42EzUTP3tC2tPg7bVT8xbT3pR3W2vNZ8So8WiVP7sfW9nGRGWHKK5fMrby3Kjmrav4Caqb6o",
  "key19": "2H3ZLNGRsi3abQKRjzptndkgThngKRYQDcyyJ5ABTrUJdRP9bvuvGYqbzgXsE6ABsVXHjdiTZipVsGsPWNj2qwgE",
  "key20": "kmc7MADRf4dCCp5hpob3hdtAiwBqVQhwS1Z34ABa94AapgFXMFzn3VaRjvPftwADRSUEQbij7H5hDnz381TsPbW",
  "key21": "566kk6Fxo8kgsEFFvnzYU111b1v12iAvA4VA7e52bHuhN6vPeSWMZ7vJx8oXDBRXERPosk9UK3FUfuAYGUsXyccW",
  "key22": "51mwbK22QhULj1GwobznGmZn2KUGXhKmE9R9iDP5esTsuymfatGG3z9CQdE5B9VqCvLVgkR7ocFPf49twvVZTTRs",
  "key23": "5jc9e3DGrMQotn6etcTc3gKHX4j9VJYq5aG5CGqR5ZKCQ5cmmB951GwHxFsrbACYWWBTBGv3caYHxB4Rb3XCuTPd",
  "key24": "5DqBpUJh1TADZtgiY3jYMo1hE4ntXjKM42xqTkM7DXc4rX8P3MCRWdbTra5Bz2xgDDTyHWRDvh5jrBwyAU5ZeCwL",
  "key25": "4jdg6puV8ve5teHeD4L2uusSUWVw2c2SRaprARW8vab7MLpXM61cA335vwLnxzjmSvmqszMJH1jGAn7YWD5Uc4fu",
  "key26": "gJJRPHmp5Tfo4JhkijM8cu75g57vxaB82ogbZ5vjJC4C8vx7332hsqeJavgrvKYPeCTcdjC1CMgEz7n4yY96HnE",
  "key27": "4ewFGUjiELV7jQmXwUz4bq7w8PVDsbpLzpUUN5UJqxp8BJqv4o2yzLt9pbzC7AnkMXpSTBfKyZi9hwM6AHpaCcaK",
  "key28": "51U4BUaS5e91wLyid1aT9xEAYu3sFs3dQ8WA3BBzmCoWX6u8ewVo82n3VWUH8mZpwCBPSA4mqjYWMHeCEqUWDDwu",
  "key29": "nsutAwTE8aNcx2JrAxZ6HbA2Fv9mrNSchXSyvHESJP8WAxkkDizfW7q153UyaG2LJtoXoSzg7bXqUF3FDaghbaS",
  "key30": "QsHitS9ydMZ7LNfiNmJHpd678To5MhgMGbFSxjVmecbjou1XmpWSsL4yN2d5tyBE5pzMKcXTzemGMXgPPhVntZR",
  "key31": "4VcSb4WqCM2ZWjDMS75pfNH4aCNxyiRCG7CQcmSxDoUvkUShBn1hfwnSPYTMea42cpLcaqFbyQ1PkqyptAtivuk",
  "key32": "4D6WQfQqSbGf5oB4rctt78eAUV4jGkjiz2pk6esWnRDqqqHqZBBUYQYfuf6LX1L7c7jbLNBGMBcSbKjiZodJVe9y",
  "key33": "RToL5dRogCUAYWEWdCboX9MUNnM5JHjDjpPSzrP1JcqEt3iXx1pY51caLxiQxJJhDYGxmApB55cjubcjmpd3MEX",
  "key34": "4usK8skb21hmttsH5PzedvqzEFoZ5ihMPhmHjTGTN9krewRKe1eqj3RjDVVkNRUpYNrotHgK9u2f8eKsKreLTNsP",
  "key35": "25RXHgLavo8iKUyzSfqLtwzu72zNY4BhQpMLhRuXS5moq9VT7hR8Y7M57a9x7t3w6ZGYaJTScro1kiEPMQZsi24C",
  "key36": "4cLDkcgf9JC7yX7cqbe6iTs48E2NY99eFkJWbXdLm7yCxEefiVD7v68jLNZdM1fYN3wCiZhA6Qnc4d1M27bA7CBv",
  "key37": "2cWMQStzpQRkRF9ULh4LbUjqdqg89uQiDmugG7tG9FsYo8xTR3TpgNSY4j9s3Avu1SingCrUPNBFv7dwb6Qwo942",
  "key38": "aUZ8zUy6AskEc5Kqfg4aSsrnvcVjuMuszY46euPVUVKUUF45vjk7gyksZzrZvD43v9j87WWaP8Pj18Vmi2Fb5Wo",
  "key39": "2rkJhnYyNrzaRcpuUdSD1t5TYMiHTrz1P3aa5HJUZcgAugGazqJHtfJfmTUsnKdokSwqeAx28q4FctsgTx6Kqsha",
  "key40": "5SrDXZTJ5rywhuGnfmaBa6jZUdWEqwZAwvaNqCB2Eq7MHfrkcmfsnfpqPRxYRuMK7L5mg5Jv1uHdvpBdG9qQPoMS"
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
