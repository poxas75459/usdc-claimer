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
    "3wn8FAtLccygoduyFXaahLYEuuAnTEcUp4qsK6SnNgiGAcqmi6G61U6JW2RarJxGpEJBaKXddsJ7EQ7XRuPLXKJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QuaXZ3e6a3giuyv8TzzMUNdeUzjFRS5ey7FsdWag5RqtWCCxnPzqMbQE8WS8xRoPDXbVttAHpT8NnMbytpH9TTE",
  "key1": "213SuVS4Req2SZUKpvi54C4mejZuugC3UauXB9cYcUmZX6b4sxmviVbSHPr4ouiDi2cvz7AG3CbT6pCKmwo81FCQ",
  "key2": "4voW7S6xHZdiGxhDkdzqJt577jyoYrKMTcFK9vfAzgFMSqZd51DFsA8uzkW5ureZcCQuHYFD7JghVRiuf2WQSqYZ",
  "key3": "4d9h9c8exvj88DuW4AdpvBwdSCmv54gCzWNeszqGX61eMjBPtYNDMjtbxtKTzbAJJDyhwnQwpamQGxhyzA52JCnG",
  "key4": "2n3J7C1SoKrBeoPakdu4ys1YsjQQrWKogAgyM9hghovgGdirQC6RifNDUjPtwxz3Z6Nb3n8qhg9YexZ4yK4A86uw",
  "key5": "55DfLYEmFcaXrjAobx2tpyMY335oCBuxcGyrHgu35RQ8rouqrCboAL1n4os8hrzALtLpMHrrdk1WZaSdnN91Adjx",
  "key6": "3ZKwvAvrKU958xeUjFmbmyGanGK5aew2mEHGvbztj6kz9tiaE1HBuWM17WSYct5i1tccZu9jEoAKR387iYAaLf4r",
  "key7": "25J2Qrp7hebT5Kiy3zh3C875L7oZNaGuZ1sFkVVSR1zYtNdhgZSLuPVSPnXn3Zq3erGTmnj8odYozLsiduRSPQst",
  "key8": "4nDBUJVs4u7ffLeKTBqmUc2bdqpk1GSDhPbZkWNi5b1q5wcBrRzak9eagEH1GmwvYKdEwnWKuhqTrdcXSnR5zUMM",
  "key9": "CeKGUgNLGQutgy9v5bEiVtACL8hhG6S6ZKwFvS43KruMoWu8waXzkpWcCEQdYKuMA2NuzHeg81dCCiYBvDh7sfv",
  "key10": "3ezpdjkcx1GRQG9DDaTQLpei9T4kdQMjSnbc9PHThuZXQxP42BsFtvSbtTsU8712oPJqa4Wuix6VWTRzVyXRrqED",
  "key11": "4LkUqyKG191GSj314f1pnjCmiWHxbeZUbiVboeA2APQnxKe73WX6b2LZzWjfU8ejhi6PtLKmStvV74rN5aeogcyi",
  "key12": "MqsBfTpv8TrZwYWTWKEWGutETy7yVLveP2rzkET4EpMPiLXBV8i9SZTekakLHDBLLpeEeFfiEgRxqETpuY9tURD",
  "key13": "3VHNJRZVBocmfG5yVomh6zzoJQw6Nk5QN3H8XQdJ2yeeEcEeZeNtFU9V1z8idHffTsospTYaBXeaL5CTBY25FZGn",
  "key14": "5ZuVmEGRvxyhxMB9uCYvUWvWNS1t5x5XmsN5KaPF2EvajCNmq4uNzSRFmeK8Go6ebwp9wV6y17xgcSrUZ6uy7qv8",
  "key15": "3SRodaU1C2JmAGTjM95kG7tZwvWLgnTGv4riGHVZJadcLWZhiRGiXJYvn11d9TJTRUQdTDGG4czVsnJQzivwu2ig",
  "key16": "crmhcnPpN5vK1ympA7zyao5yfc39jkK8wDTU7LMr9jntwViWnMV15yn4Zf81EsZuUrR77Rc8XN9PikCspRwYWKF",
  "key17": "3cziJiHwV94rwRL4HRBdunGCYvXWChq8FcckE3h7v4CPFRxW65foBNJq4UG7pgBNFrkU6UDoH1FjbnnmcXQ2gaaB",
  "key18": "2p6R8mAgeZZsnXwySCuV7gMUedbQCuY2tpYRokofAcrq3TcbSY8iTMdzxeH56yh9dzGYR67bjMcwsJCYF3KhtbHd",
  "key19": "5sPA8gcWg9VALdCWfttFvnTBWGgdKAwmwP72p7aSqzbombcBYFQT1Yb6TCX5DNmfx5wU6fRwtrUAdHepgEh3cyih",
  "key20": "5dMCFwt4NnMrHtdmhCTJ7MRSy3tM76Kby6sm11gZMHNH1CSGVNtwwb1nUrBVMnBUqVch43Cqdg6jEfSQ914NNZHt",
  "key21": "42KrAUSJgJNphvSbEP2a51boK7eomNpb95MtMc3ienQFBnXnNXyx92WEtqNpyVR2T3BHw1Xnyd7fdjXTovcrXHMw",
  "key22": "4xXJXbD2krSb7roD9PQgEYgfDzXWhrKPhSCNqknEpzwVp5oLWKb1n3yxDjmckq59d841DwfepWx6MHbdaXQryfes",
  "key23": "2QpEtD89R34ubmAQZeTsUsh1YcXdVk9myQfy58EGS9Gc1bsHuFncH7mqsE1RkP5eTvKFBe6eySPRpCc2ErERTaMf",
  "key24": "hXGvTH9pYXz62jPuHQWS3DC9jAFsk8pdLy5zPyQi5yyam5mQ5nZyDfNCL5vNNeLA8VPN6dsijfqNgHYhapjYye8",
  "key25": "4wMx5cBp5mTHe4MegWHMqTJGcXkQvV5hHBFjNig6pUeJ2EgjmJ2HMq8nLUdCYPCdLQvKUeMqmneHYnq2PnCSPuU",
  "key26": "4zdLJWbu13xFicHwq21K7MSF5GrcKkVkxrxa4MYjvJzMWJ7Z1F59yk63xSjenmWdxvZkgnC6QSzBXB4C5dLALzLQ",
  "key27": "5gRCTnbHRerTXpbR36h8opX14M84cnK1zwZ4XYHqGTFTUc1xvyjBVCLeqoUbEKnh7MBNMi6siBivSATaQ2vM3cYw",
  "key28": "57tyC6X8StAs52C9hYuYkVEcR1SLuVA4pZkjzKTqAWWDAKK2bik5YkZB6eBjeTKPESYqKpcaSqrWJMnWTdWnRPae",
  "key29": "3U729mtn4wWQ4pDxkTcPiZeV3XC7MRwHXk7mJijrJyzq8axQsDSTgq21JUQHAxwD61BAZSV2zLyYcXVtTPuqWdsY",
  "key30": "JX6rzUHmLuTg2h17skPgJCgGt5n8pR9GjnbwHBpZkTm9sARmJQt6XHDDYwVSqSgwJBgpemHfGrYj37FQCenz4Gk",
  "key31": "5q6RouVPoEjZxAnUTjqC3qdkm2xR3aFwZJKhzndPg9nkZvh9BZmKoFUYyM4LYacpqUatwSogQQUC4f2eQue4Q1Dk",
  "key32": "5mjNqgCfGSaa68UtEccdT7ZHCVibPPzVKSQox3zpXTjSRG7jGwLygFVrjzZjB9PF4sTJrGssfhU3MP8aERwjQchy",
  "key33": "2Z3BzwygWzXXQunaXS4qEUwfPBii4QDc7ZhoD4XWZoZyzR7G54J5LsP9P3z2j7Z5gtdsnnu64Ei5y1aqzAmqmYGa",
  "key34": "5p8Pd8XYemLQ4Pb7sHVZkkFVYwoyFwKnQuvjbN16sWhsayBUbSUmy1Ju8ijYM4uNDoKx8hLk1uy58Hyykr5gSqtr",
  "key35": "5Bz7WLWTUUtsE9curRu9mUMUW4NJbfSAXJgELU9RJN3bL17K27KKh8xqJXP9MXSaYgp2vScPNJurwfX1Vj4nh566",
  "key36": "4Hk3M7dTdy2ZjMQsj9UBCn6sq9W5k2Fq3gQBQpfQveq1qmZvpcHcmMFdUK9ZJpgDQut4WmJmfKUpLvmej8H6xZ4z",
  "key37": "cuty1mtZEuDWCLwesi27E2Bvak8ySyVSgEtSk5JKhsT2cMipZchRTQkkycQXYiJtbUtUjneBhR6pbvLWSkJXqck",
  "key38": "ZRuMCYb5WQc47HuUAXuzbbQT32ushJgDfs5YCfDSMPVtFEF4P5KwrGpRc5WSrSqaWRRAEULqbo562S8CpVAFc1M",
  "key39": "3sQYACr56u6fdEQGuwx9V63UVyiDUamxZeYqeDoSNeMpkBjQ3TmSvrDi1c8Ee4GwEWzsoYhngsxLx9veJWbxyZo4",
  "key40": "5B1oLxunqAnVqdL45YA1HLAvfNSjuYeEgmmEsYzTpVnck6478tqR7TFtzCRZTvfUFyTN8SnyX1PRA1guGnL5Qid7",
  "key41": "4VJ71srzP7msLdsJmUsfHXp7hM7yfRNUWM18YwTQ1JB3VRN535qgXVEnwCietiY2mfpk4h717jvdYhv8Len3p6KH",
  "key42": "2t3rocWf8QQTFpcXqWtBPE1siXgeQT8MBBqjmUDJBj4NM6MbNnDHBTVKp8wzusmJyNE3iQr56bx8dFctZQoH35L3",
  "key43": "2pux3v8zLNZCbkeFsSjBbiDU72rUfJ1w4zLeymqUbw4LN424LqgaLtvEU5e9SkSWtEG4PQKSYcPGc7QosH8h89fv",
  "key44": "p2smEm3QK9B1jFEVcA8RJrzJnRaYRe44Q4B9ss17qvaG9CTU3VFRMFNeVzafgzSeWvK66Vq8fP8CpjmFq9YRRTj",
  "key45": "2YqkEfxWL7tioDMY55Jo7bW5Naudx795puQV5Ui3CjBBEF26pnZ4Y9zk7EA7rwgYi77zTevTzwL2cjgzgHjwtUoS"
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
