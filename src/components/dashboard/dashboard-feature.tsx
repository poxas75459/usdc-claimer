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
    "53rJJvKwWkVqnC2gPRJHCAJnbcUW2xHMfR5jDB6kgdWgxrSbywfk48qbNrAwQoc1cX4gcUvbBWBBp3vXu7yN92xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPSFzYHfwFBX8pAMGZQmf3Rm1ZSjMwwbD6aJ9uHvoHpQEoe218sutFdsu72CPid5pD35AC9Yj7RRB2xYGq1Z5Tt",
  "key1": "5PALCnHkFX2cnRCjQXDtJ8VQij3mhNNqzsKyqA9UovqcKfFLrrKtuckDCvGdgakH2UGDTQxdf9C6CCAXctTgit8C",
  "key2": "2GPfGwqJRdQ3ZM18qWbDVcb2QWS74Jqx8Z3SxHmqsvRX5ypbHp6sPdJQZmYYqvZnWC1xY3pj3nUnCHPMFKj2daS6",
  "key3": "61gM4phPQi6QGo8WUV8Y5fmGuu8CY3ywhN7HtVmSu1Xcj4ETXbQRVJFTj1KnKCAWz1mMSVx7FBXn2YEYZfQ32VFS",
  "key4": "5shtvF4nnYyU5M5VAohe45hLwg3B5VevrG63YF7GVRApXFiFDuUrJvRMfmuiNkFbQQ5pqSK54B7sxKDRPREuoDGD",
  "key5": "2v5wg5LLVStidXrMhErVULg89DZtRVQkwyfoApDwXmm6ucQmT125ugSmf7CFeTrbuoYvpqjgbJuFWStUAGGTYv4a",
  "key6": "gssN8Rtn6ULmZpXWViWgt6VWkKEe9UKTwC3B7KBVRXg8RY71FRPZJG8pr2P9WD6CBC3HdZc1tHHJ5kzx6LMvo8s",
  "key7": "YByLoA7am6fEsfiCr8Y5gtJjjTAT2Uh6EvoDj6HPhEc8qNLHVGhh4NufLe174SBVZeCKfYhbL6jQUqd2G4C7XHV",
  "key8": "2F4jdcoJAeNnCmLWsHUpetfdKbmyjMkgVnbXjmERfqfkqJzfpCh66YgmLAGtrjBsHCGAnw3wW3E1K8FUrjK6RPxx",
  "key9": "4BJc9xeqrBmwnQttVfM9PcraAviiqFb15r5beQinp7CxN23hSgmsKh5jD2kemrUkM4yKcneq3dxN7fUzNr9JAgds",
  "key10": "vjm4qhirMRXP6P9QVnjx6xgBSM9rSBM4njQHVR3YJHN88SK3PU6wfCmb71t3h6ACNszdes9YxW7vhBdSUJt3BJc",
  "key11": "2JzEa24UP2HwC12M73UB4mcrd8xpgDFh4peWbJHzrMDSJktZmyGr1wmxvfihawPVxWF4E2pstgJCycCgm2jet1Re",
  "key12": "iryYt2YhjkaD8Zm3SMrE9xmURTF3PvCDRV6MUxYiagXRjdLMcbNSVP6yubu53XKDLrtm2z1LvYQCesU4uWQYeso",
  "key13": "5XmbrT1AyuLtgY4bJfjmCgK3KyC1jPSubwtD9s9Bfn7QMSSVhpFGJin7MKExh8Ue6EDyL1RwgZRi349YARcnTqSr",
  "key14": "2WfC8EQwTp2WYVFfuWPG6gu1hnZomgJAq8KnbnnZm6tdhiTXQgYTjbbt2Eoikw1goEH8cUTnkyrGszMqndom4e7X",
  "key15": "22vaN4aAbYkpvdsi3hgRLi72MBSkJSTg42YD4kjTrccRQ6PuRUGtmXhcjV83uXDH1nWQadStzGokveisXcaKGJ9F",
  "key16": "FwUTyAJbV3xpssN6Y4sgWmKvMum7kojpcZtVkZyCFAvYiM7ueXq8CiVQf7yCn6J29UDxA5nP48eYjrJBq4fBgGz",
  "key17": "2W2W8JpN7dG5yMbb9Lf2zNtTBHutGeFa8gBQt7oe1RVFhMsPUzZtaffVUBuksD1YgT53JczgLXSSAXukqA2xTJRP",
  "key18": "9hdKg3qjDHPa32ukxWq3bpZViTcZAgCLXJonTidTCWuFGDBezdZxeK2GogiqH6fg2KHG6G1PmL9SjK1odeEJkzT",
  "key19": "HhaooPiRKrvqtdHenGvXQV3GZ5gtUF6CJS43RLwBSdStFcyzoYXDi8LWoEWPdJk7oWSSazwkLf8RMGyPBgvmcP7",
  "key20": "36Tai2saBSLuX41Pu2qhUugyMWYaYAv9LjxgBsTfCK68g7SLECUGya24mhDd5z6RJpn4asVkPW6vXxyBiMUQwEAf",
  "key21": "5SomPcgPw3M9M5ycXbKRZm3zg6sGyM6UZcgSJQCKCqdugmPzgYnZhntDDQwsjU4C7DpBNS55vGJgcMaLuGLJ9WU5",
  "key22": "nG1McNsNCGTyVTJh35kASS5nHkJ7YwMZymcYpnGmrz43DiwbDEfF47731Wdr91eWohbdgr3Wm2gjxNEdjvFF8Lq",
  "key23": "Dv3aYCeX7UFXSEn5KjCPu4Fiqz3VQpFNh4QCyBAqTn8Qouq4ugqHkNYXYqbWP2av9jeZDyN2fDC2uT64Pb4SDoE",
  "key24": "ZD6u6MdvkkFUiQxRzTWH6GEGidvdZUtg1pkjEpk3bu2wPWiE9TLjbMzLLN7BRtubw9UprykaNAXnjJsUDudFsN9",
  "key25": "5eKUBSEucDHcVcjqJ2DJJDBDDhHPpA311dV2MTeNxZJR9HeoEGXZqqQWYohPtiWSmifFxqiJxf8uU9agdXBmnzzn",
  "key26": "2DKPeH9mip5gvhquYfdBKrq2Hf3ZUg9nbRh4uLwwdn1yvnKsRiN1bFb9Z54ZGTBY54yXXt7UghxQkb1CQ8mWkfMX",
  "key27": "4KUQMFQ7MtUEeUC7QmsJTSxq2RCFsiBMdy2LP4KJ8jevWTdmYWz3phEk6r7ir1koXBxcyCvAAuuH99G7rksC7rNH",
  "key28": "4sUwRUTCcMNF3RrAx73zBrGUi45UzeYFMvwQG19WxjNwz9kbAwM8NjPeaFeVQbzAtSxANXhvve5zZzsYZCNLn8gU",
  "key29": "41jqQmVJSqvWsR1oxTMTMZUukgC3nBje3rxfkRmQCYWuuHJh2VhohBuB2QBRZXztTZQrgGnqhYroj6XwhEUqR4Ys",
  "key30": "7dbLm8EiE6n8phtmF4bszvJD4SsDMsJrXyjQspbwbc3Gg8VnvekNZhzgjbaw6CbTBNe4txXEL3PX38Fz27ej72r",
  "key31": "2C9TeExZ1oSUqLcwbKTGorCnSVxaAe6FFGd3iqTA8TcvR4EnKZ7mU3bPQR9a4ayRJzACttaqtf5WCTptHHZLAw98",
  "key32": "4Q5hrZJvRLBJHMVj2DM4ccpE7bsSVX55sCKqxb4efLMk5ANNoip7KxozVavXpPTR7LyXb1AKWRxkkddksrWzek5r",
  "key33": "28UKjAhctkzYKaHvojtTe4AgovZXNWipqEEyP39taZotzJ4LEHaosftPgjBJ295Zdxfe7tKk3gr89NNsTEzj66cf",
  "key34": "2PompfLgDDDs8NETcHzk5n9XKoJz6xwaSTfgSY3TChik4QXJroGWUDZHTDhDLniv34ZvVDRNTrCdfeAAePUaffzD",
  "key35": "4Tjo1sbfFsD6Fv7VoB2CxZvyPzDCuwkC278qWTA7TWPXuYsR3igiHwwd39WdcdFyWkULrHbTgvS8ACU1GcZtB7kB",
  "key36": "WGNW5wAynNdjjJVV1ykAqZH46UjgJPg8zhRwR5jxqUabfsfDRCu6EQPWBTaig3kXNQMF5vyVEQmz3a1i2L9ANKC",
  "key37": "zUvHDvE24DiYp3NsxV2xNZYSGYwRFBZeqzQjYDbhSX2nQyce1KPu6RbZ2wCkSPgt193WKogpKUR3CjqP52Gtcu9",
  "key38": "4jS2MrdA57NfqnDo6NN6gmmF4JEsggoCctVRfTXJxmYU1B4z1hgwKdmev67gdcxhAeWHntrTPXc5n8bGh3kgris6",
  "key39": "4w6nCBE1hc8tFf5b1QpuJrxpQcLagMHHjLtv5u4zLCAQfsyzAmv4X6wWD6ZbZZ6eGrmEddSCPTmkH1YCE6dYqzBu",
  "key40": "5wM66h1CBfxNPxVma41jVk3yTymYwevrCRA1dqivRWjqxzwJnsTgnYRAEKM8QXdPCZDMiLYR3mrkJe4mjYrjcfC6",
  "key41": "1qg5zYnTaZ8g7gzh35zhCxVzrEY8i3SN3kcBfDqu2nVnzqvH3FN2gwXCpN2waa78xdcaVmY3LsmXZsEKTzSDFzt",
  "key42": "23RCyCjB275oEZQGnPBoZAbYodmeRmGhLYVZvGDpK63rQmMxmFRNMt75RNo9cbJ3XUf4h6ftvCAgS9vrz9s1kYDo",
  "key43": "4E3wd22wdTTzXSgrby7usoHBHsLtxQYPbXteqxqXZJZC9zSfEYmR4cXW45VsfYtE4uKNzFpbiaAtNMhchdjYwfyZ",
  "key44": "31FZP4v63iP1ctZmPVp8MrxbeVLGreVikYUNnfqm3VcUpAqsw3JNNx9PAbsZRzPbAyCzuQF5bcSuSESGS5e1Fuhw",
  "key45": "5n2bNfMmPyriCMRV3jjYc1imMys8zrM4tBs95GsYGyTz5HsF2b7WDSALhh8VT7T4YLaZU6XJQediAdkcTTDuQHov",
  "key46": "65HNp7FrvFVrKMKfv5irfePNXrrPFUTfL2Ju6MaK3uyi1svLGEKfuG6WjhMNkA64cGVAY2jBWcK6JUndGTw5D28H"
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
