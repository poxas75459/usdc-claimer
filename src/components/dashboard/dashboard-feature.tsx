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
    "2VhcQdpf18iZHDkG8gHmDPpgE3hgZKdqQEqvHuUeyeXyXMtVNwxbruepH4JkNWXXsqQWCUUuYcw7EH23mMeHQrSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppiRJNvL1j4VEU2kVraPpizAkF7TP2MgGMuTPyXHBM2Cz9yQqhKdCaY9QBdcJKT8oQnRA6EjszEz3FJhxQWpMAA",
  "key1": "3k9FxHb6o5TCCHRLt4MEWaDxWnvHsCXH5rAdTixLPrnKbVwqHsHUYN8kd1Xx7bxdxFC1mgVsRyk979sfvuGkC7Ub",
  "key2": "21pj6LZFakyyx4yq9ufhfJ79Kv1LVMqkFJhBiYJNz8o4M3Gx1pJ9tpdnekJ2parrdghV9o62t1JCmnxxwgS5ngua",
  "key3": "5KvtdFu4F81wYrHE5Ad8u4VGYxafjENeLbteAgMSrdR1Ygxf6HaAP1EBELQpQwo8bjxhdNDS8EZiHTJnzsQP5uaR",
  "key4": "4cYPRnejb334Xyjux9amMbqFbDVj4aWSriz8PbAS5uFYG3cxJDMNvgFmDSJmqNcugbBxdcuzYPXPGrwPE4L19APy",
  "key5": "oNvYK71iCva4mS1bhWVMiGxVcwnW1Uf5HqxZ3YveTC5GcdxzTwHZs6VdoeE3wgudq7zq8j7YbmhjHKtpGCuJ6UR",
  "key6": "4TsxLV76GoPhdyypZeyoFTTdc5Ea3wZC9Ak8gTN6QstJpiMuaiw5FDv5AeiK8EtEN9VVzYGzXj3ZCknKFf43ZPDe",
  "key7": "2GXMMVU8Nc6uXFZHhLykN3Y63NMGvyvYXiG76KeTqi1drjAHaF96qhuySnKhhe1sGE77s6Yvtk8t2mNSBxkQK6Qm",
  "key8": "2aGcAJzB1y6XoZ7xnHtbnXV1CFa3ogRL26JMZ2sfjJ2PbAVVTHEh6TtPUKMCmaKqBZAM2pLvQ1iFVVmxwqRyA8Xb",
  "key9": "2pVvPVMUbxe9CxfBHPiBr3rT5hdc8Hf5oAz1xcLVCpvTke2FURiGUvtD6BPr6p4teNdVGT5sRxrEeGAzGvEygycR",
  "key10": "okndTtDTAzmMTdWQzaFjXqS1J6FAbg8smuyDRyCuyUEaqrYW3FzJc1NfXzknXx8yMVuvE4wg3e1vsSWzLEH33hv",
  "key11": "4HaxF6ZXxwPxPArHQH1AvbgV4jexscAt5dAqXxYcZFG3ToFQwwDQgJP2SqKGy6XeEVg1jyFMdqJ6z3URrqV9c2M9",
  "key12": "4N8BH9X3HDJszqrSzbhWMfYPhJhjZxCNQxN8uGP5b7kSMzg2VnRHGVP8XS8BKG7jC1rJ9H1X8hpEvbroP5xdqTRa",
  "key13": "8jgW5cTGPZNSoFCZ9npGT5EvDmwZnjXpxw6SwE8kpmaviqGhimFwUmjDZvWBobyRKgvacJr9QnRrRTMVJApiSEJ",
  "key14": "3JdCSyBfmQ2kh3gwKQWZK9qgo1TY7jwUmT7PcMJH1rAWa9b3uTAHuc4hqy8oULTiEsvVNCp58oZCYiyukQp3uEd",
  "key15": "5tYvTnUVUh5bnMPD9fWqScvKjcNwDvnRpaZZrMiTsVwQQP3ywSYNBujwLfgnEY5A2SegQAwi7zUbnTQViTGMYPgJ",
  "key16": "Ze5Ufiut2bjBWxgRfheLLawWP3qvDMjQL9ZM4nA3H7MdHgXstiYG7Hv87Uz6XW2xSs5Jnpte249uqA51NEYLDps",
  "key17": "3kXs43MakdNLwD2kumLpwwXxVmoDfjjYxTG89YWomiYrH2jozUMTJ6qg8gcgWEnxXotxJeK45MgmEfyvw6ACB9Mq",
  "key18": "2DFCn3XLF951E3TnfwEaVEYeeYNPhq6C79mQ9wpcoyK5bQvwufNw4VY5ir72bY4aE8vxnJ9pJxbPkz7miv6mXSkK",
  "key19": "3Khj9B9q9L8Wi95F55s8NN9ph1fMYgbyrdUaQeTDdNMHKDeSeVNn2dzasmXjZg9A6KayqQhbuQienPnmHSeLiK1V",
  "key20": "jFSSt3R9iEd794yhoFTcm7mm4PYNJ834PZFrftWkeR3m6D2QL4gdXbFnyew1ngMGJYVNvw48KiWjndr4MaABKXW",
  "key21": "2vjkEuBPXCDFYXMpK8cMggtmVcezqmue5p4r2jsfjsj2kyFVdZNB5ozwDqr3q8y2tYGehuMuMt3JXnfQE6T4c4d6",
  "key22": "s7hzreLRVnQgJ5qBhsqY5oqP985DKhz9gG2uaAXqfrqJKYxB5aX3dqe4uo84guytFAmVB1aPvJoZG9WAjK3WiA2",
  "key23": "FD5PkyaifDk2eSQfYSgXdpFq4Q8XM6c34T1omKA5DkvRUFn4X1ampdKdRFHkSMin42sWrSrgwcDq66EtjjmwP8Q",
  "key24": "ukqn3iHV5gkJYaVydJiLQVF2AFVT5dpzVQnmKSSXFW6Yfft9kJG1Ph3fnUsw55nkbu42eKpeZBffgMPBt9jvGEW",
  "key25": "2xphyTzgKZc5PffLYjcpLJaLJvSdXfDG1tsCYwKCUcyBudQCnmwf6YsSJpvkcxjzH8bjdwuRXbQJ6qmBcLN4RLKX",
  "key26": "DYkSdCiMe9FpGzHhzsrKsueiUqRR4XkTEnmebYNqHL1KbEKnwQFPXC8cRex8pss8dx2e3ZfhWcZWTzqR5aSNchx",
  "key27": "4kfMXqhDMdWhwMX11UYxfi8Dt8djMtxJtDLPxRwdRmf5xEesuFMtTHyoJMNdR9Qf73YBfNwDuwKFhVdFThLJvcA9",
  "key28": "5sF64VuVhDdfL2V5TZ4GLrJ2vJ7Lek3xn8bzr6AAG7mXoARZPpRkyYAhBBFS6QUP8NiJcDXRzviUrSJyHNQMkMKn",
  "key29": "5CoRnXnWafHrYi95Js2pavcBRzvQFMrfwcVbXRWeC5zawBpTwp5RcsTpGK6oi1aGGeG9RTuGX7UUb9oJjUjwv85B",
  "key30": "3vjjBozYbemyvtNQp25bUL1kfQVQRLtWe8jLren8dgFYYWg1EkBA1MARAmHxUZfmAVJELe8NyNjCiAft5ecDZeEQ",
  "key31": "2AsnxuDyTeSs5hgV649MYoFGrKtFSz2tFPMXh8NbmyM3UXoKi73eZNGdx6FbdQeA2M5H1zus76L4KaM1poDrxdZf",
  "key32": "5gM6QkHrJ6h3m2s3RWgh41ubhDBq14FbunTAHWLjURFeR5Aitwy6xySXdsu6krgeLHABKs2fQBu3YWDoHXAuAWPh",
  "key33": "4t9ZF1QQDCZM6jYF9hbxkFtgMnjndh1LqZCYyNTYFv52RNJ7fSZ3QxGXi7cCLxNSE51S5p2GoUjkFAThx8Mps38v",
  "key34": "4apB75jXYaFrmNJYyuGuBAuiux1rrt1HyX2JUGzMMVhnQowCqX9v8sNb3SH9ekh1Y7RbiiFqahgEdME1BEtTdSzJ",
  "key35": "4nuPeP5xa9Udsyu6G857xT7trqCwADehFyTh4tCvxk1doSXjGSgFXf8C4pQj9cyrhyDBXn8xJfrPHK3NtTa75j4j",
  "key36": "5BpJ5ADXFCrMC6cLtoW8NXXRbkLZSfXiAhiwnstBu34i5dcmcDcR8M7ERYoxvDebbtwsi6PM4nZY6hUbxjdtSt19",
  "key37": "2oVKYmQMrJwhTYU16yMVxgp6BomP6Z4Yh2X8hxaoxrHzKzuaXpPJ5L7RfqpBHYtqDENVgJqhbFfQkn4scTgsZuQV",
  "key38": "413TMDFTieaNNzzyRQ9TxvTJMJYfZHfeAGQtpgdSkzhuZgXqqvMPC6AiBCvnhVdLPryvbAUG3VVVni37v56EueT1",
  "key39": "5gFznx7cGKiz9CigRi5AFZ8fyPnTmm2pMHJT3DTNxonVrQPwpA9tJKzkSnmdfXnWPcTk56TghXCjmSQZ1rpJDw2P",
  "key40": "8wBT2PdRbSfcd1uNbXx1T8Jdk8gDUPDCFo2fy9wt6Q2JezG4RA3pPJk4Gy5gTf14YWpQsTTBZDMqHXzjgmRHmgf",
  "key41": "x8Kq8UPHEZj5kuuvHweLgrpNk7MN7tEuxRDWc8tLcS8PiHiJiJRRFgHMcEAKE4jnvd1zFgUPwBeV6gtVwV5BzqY",
  "key42": "3sbB48FsKpUve7jL9F98bECm9TSZ9PLFVMXsKXkJKzFrEkuw6btHwDK1NoP5C3ohzBdkqL9ti3hdgKws2vXmafsg",
  "key43": "AFxPXRo6J7kxZPTd5hxo2TW7ADDBeWTMSYK7wE34QFgYPrGcq1V974qvBuADcCx8z2DRq87KvNTnJ7uKKUyuUXD",
  "key44": "j8XZmUjMJWXGo1DmVPxh1xmNCVXUaP6inXr3zjVokLSfCXmHAQjJvJFZ6PAVPNAvsKghNY3dvzJuNC4rvyaxj1c",
  "key45": "3fqDTFSgrYmWXMTZ88ktMQkybJTuvU1C4E7HsAWspqEUA4tEgYxiDsR1bEq1dsyH4g5xSMr6V3AmSHuNcVudUTPm",
  "key46": "JkLK64TLgiCEfhou7CytKBBHPMwrjCv2CWYrEq7jnbu9tPYcox8QNZ2GaGDP52E27DaFrCGpMECs6ovVMmefV2U"
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
