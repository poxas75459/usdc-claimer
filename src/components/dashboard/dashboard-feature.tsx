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
    "2v5dc5AJ7XJxidxqaEsA6JyxJtKx45EShz2doG2MuTPNmUEYazoqrHGHwkvSga553kWeSjaXpgkG5bT2kS8vwJKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2caos1ddqEgUMKfoNipkJthiFBn2B3gG6RrPUqvFTLQERAceH1FZkvS9vyc71bp9a7yZA4u3T2Sato8QmZNhHBo5",
  "key1": "hZy9hYDGdwt7713AfDEZRjBdHtxHKy7T3o1dvmN9zAhQVo6Qeocr53RYfHCM1B1EtSmb3Mmd99bKrx68rS8WS8n",
  "key2": "5JUG3a9gfLjs5nJASKV1saYeMCVVoa6nYoeJQ7YnnrHm5xxrjEruGTjuPnX5vEeWVXondXEC5cHDWfzqPMh4bg5q",
  "key3": "3WqKkfHte8RKyk5FuwTXM2J1VdmAbenRiPHGPJkhepqTRx8prcdJXtngPPQvsEy35biYmbFvkB2UJTpMXMkfa3Zq",
  "key4": "2fHivkS38M2NDaewQy56FmEszdeUJs1quvsXLo7Trthy7DBAdzbnbNihnNVSZxHRrUVmdHvA2jfcUTECC7jeFx6b",
  "key5": "668cEAR7q6H2YqAvn89bP9viM8Qb8b6eCTewGFirnNbU8xjEMxMoqJ7fwxBsURMfKSgw2NWvv37oNZwVEUyefscJ",
  "key6": "4jiRBeFHuAvQ6sFkRzJa51ehX3X9ZS8maMTTGhPPWFzXWoyMe8Fcfc3bcu1rJiXsmhTQ6naNGVALvRbkwwWyA42f",
  "key7": "2vp3ge7oWMu9qo59AZrQvDcpwUjTuJSwG2QZsKQDbnM6gAHbvfMDabGhJF4MyCDdHm3KDP77fez9yCkfRaaYVD68",
  "key8": "3pTPmKRjwzYN9TV528DJ72zqihWx3RqkzCuMbAULe2vybXewcje1Dgy4JAzimU8bkxkDfqFgs5RR65n2LRjsrAjs",
  "key9": "64ESRxNCRN61ykqdgPv1YU1oo74n7ZSLvbeu766yVbb8V3oyiU5TUB8kKjho3NDcUtWXu7eboXg7YJN192LH7Po2",
  "key10": "5h66yALDhrsgWr8bcrcMjrZYJMHjkJvBaFnwv67sAHfxfDZ6ghRqWZYPR3E3tm6tHfFQ3k1JPp1EE6uBVkreg7Uu",
  "key11": "3y1o6vacAetYkonw2VHB32StsRNASpYTMmKipSLWgPW5SdNNYPoFsPF22iBfT3zaybvNpWVFybS2Fyn36GGjuv6g",
  "key12": "v6H5bVVNTpR2nzUBCESrx18oShVCSFT2uKUyKLmXTPQneVyGVSoDHWeBxW75jj1ost5pNze7qe2mgSb97LRfV7r",
  "key13": "5ZYiP9ugvKaBGcs37rXuXeNREAw4G1Eo3NQcM3s7k636otdWYAVdLeyDdQDDsZDAbbfznSiGVaETcHt9H4H5JpVM",
  "key14": "2zRkA6myzxoVYxouikWAKrZ7mvH9djE9DXGXVGCaqxYvwUAajvQatXSf4oNZmU5UyqyrKsgVbn7Mu5HWhscgCr9a",
  "key15": "48ybC4FH85aKNwJqBvDte7KGMSqWB7b7DVFe5MXv8MaUFiJTcHyBPDihVJuKGhdTujnBdM7WK2LJAQJ3wK5LB9mT",
  "key16": "2XrHaoZfPMgjzqWwLhSAVu2Sxwi2j2S6hzNqW9DKzYMdMJFbR3TCveLjVh8goaE7MCj259pHHn94nATjbJhikgoT",
  "key17": "MkomtSGd3S6UG1fcs9GyVVJUMQskZqmiDcrLFaK9wnNJY9NRAgXGJ8h4xfvMC61Q4w6FBPb8MwK1prSgsQ44ron",
  "key18": "2eAuydz6tk5pZZnMEPgMKZrwZy8XPSGTAvXvcdmMKYpcKS1p6giMstm77zRWsAsnR9sErDSkgwHbHAXUoPsuYB68",
  "key19": "2VEqJGVn6k7r8bVYB5Uz1MzG3bxCUQQZKBNFWsYRjkzsQ9guVYCikJEToXnBdQWmejeGPhLzqXDLgY84n9sb8jcV",
  "key20": "37SKX7fxdLEJZzfWxLa3g7f2RByAxF75pghLDEdfuRT4BiVjdP4eno9sHdjXWiptQiUsASo6XMHVvyyhJ5FmGMLC",
  "key21": "27iwajtxqi76ew2AJtzRgE8SKrBW4buudhWhXf8goAanCnDN9mTHZSPqLtWaL7Ktq2u4sP38MM1E5bWjCgpAN9ap",
  "key22": "4KD7pNEEnt1Jmd9r4W95kMZcTz47uZermLKFsk3rC8nq3P599c2eLnGAXRdfG2UGwMkjyjkN3a6W6HqGnYyJncfQ",
  "key23": "2z9dAkcxPNnc23ouCDGCJKYzBtCFyYDe1LvSCRCYDjLoUhz2BYGxfbgPevzrJq2JzegZ58FJv1bft55WQ4fA8ots",
  "key24": "5fU7bve8EpU95rsXw6cfGvqRtFJwmqGtqWMwmWyCMsnrqVdWqEaizwu6Bf9YD3SeJJgtaCKQ4z2btG3c3fsXFNi4",
  "key25": "41vtdsnJJDLDffqDsRUxmoHePUgf1jbdkFnp3TcX9t5zwpBQEcH6EWoeUCVSDVVagWcNHmSbSC8ty9mCKnnZMm1Q",
  "key26": "3ncupkmuudUyaP7iazqYGE9WtikfayjK3YYTExM1mtCqhC7hfaXGqbr3E6TyQRz7RsfrTixbpzkeF54K4J4Dxko3",
  "key27": "2GP8PndYCv5Datp7aHv4DjUqcn9Q6EYtgkMoWwqS7ymgaBZFKXCEwuYXgM2ndB71NG3pwGounoiGWLDU6j356yki",
  "key28": "VFbq6di5MNTJQwUCRYnnzhsGrZ4qXti443Tt1GhMrHGoZQMGraFBdzhmf3twGLgrSdSkbsFbWQPGbvcxPoNBxfp",
  "key29": "5LAMU2EUWpNwC2JeUgLkwwzcjc44pk7DdC7GbEvHvjbfdyR8Udi4D9TTtzM2akGBw3F66mYYwNFP9gbRNre5hp2d",
  "key30": "5FMwB27qhfGwHdsh1s1xrEeRVZ2JNdS7hRKBsVL7yYd5FB3jyumf2FH5nXUSB4EnESEUZdTqQvPQePCTTNuequLj",
  "key31": "ytuy9fRpL5V2xPWihPLyBrdkwNEygwuLvBPNi9CnBNkUvKtECAzPYKxDswRjLezVyqc3QjzwqWUn2tLFuKozbTv",
  "key32": "4DFhwU456p4hz1dQezfXp1Pd7gHhAiwCsa8xqSUVYt8ncU2mL4e8S5tPsYMMWRKCczcBwM7uGPuxz3oGHT1wnQyx",
  "key33": "1NyDDrkiZJv7BCwfNMfMcXPjQMyXyRdg5qdkRZCmx8daT7RSj4vkZMEdxBPnLFUMXV8QxGZgeg4nARsQhHmbNwv",
  "key34": "2mkQE7ERz1EPceeM45XnAvqUg6iaMRkxadQ8QLxBj7XaNbyL1Q9Yfw3BmhFZ3a28zq23J1pVVRmWxbHdEf2fec1w",
  "key35": "4iRzxSW4Zrcj3yRGZ5MEAeVHMoE86DeDgB3QPH4bpUk82rkhaaJZuyPr4XzVRoi1y9PWmyNM5ZsnGEdSQ6t4gYJm",
  "key36": "4tw25qivsPoJPQKN2f7u81rou5rFtUKzdGkvqgfmDSM4URhw34d7UQdLTb5aWyAoSFoCQ8uYzeGhTfb3Sf9zQHyg",
  "key37": "5S6fz2GP3Ut3azc7nfrmS2iayWSgHXpBcaV6B7yc1Ztms8qUZFH9kyqnLKtQ4ZhWhVCJvKgJKRLdbcSRLD4U6a2e",
  "key38": "4TWBZMPmVSYHzjLewK47cy2h8y9ZbP5TDoGGcNdaa75CTr5tYnoxENxMHvWUrWv3GKbXz7wAMAT84us27wAcbuzq",
  "key39": "57AsoGcTRvfpuM9RZFvhEymJ9CcgDuTYxB6ubuNDS8vyhUDA5X6BCj7pPYhZLmw3Eair311ThjjuA8mb3QECscxa",
  "key40": "5rANnARpttrcGsPgzTZRn3HLaNvP3q1o7jna5vaw4dLV1286qgrEZxzphzWJHEQqfYsApwHn7r9RuTecFcNpPCpK",
  "key41": "2k51KJD9jzBSdKoKETSvsNfpD9hqD9Wm1dVKzaPRwYKPSj3Amyj369czVixYTXsKZaTzXEK2P6sLRHg5QvCWYtag",
  "key42": "5mqFYzPLNMr8LoM3saBdYzWY9N38GQt7mvc2DPUPdwL9zByXgXgcqt1HpXj6YAB9sxowKR4P3WqDbGHLAGTDQRrN",
  "key43": "s5rfkm3imm9L3n5UxtZEoKQbFPFB4h4Kr3u2hWLNJceEK2MSB8uAPiQfDWbS2q1aVnaXroAj6U7BC2tUdR1T8fE",
  "key44": "2iMKi9e2MC8pxqYz9e4kuWnhuFJNucSzE1cnnTh5e1ofNaLXBYqKAbUzs2CmzehhdNNQc6pTQX6bBo2j9C5PsAZf",
  "key45": "4pXk8VyPEBignu2tn8M4jd142zxHWCoFbf72zM9e8rXJyWQvAH46Mf7B3C5vZRPRndiookGdF4Jz4CAQ9mBitcx1",
  "key46": "N4beS8hUis2dPnU5MeHbQBA359Lv4wC45Y1p7kFoFvEnhjthmiRLFGDWv65v8YeomprDvhYk5ovbyt5uk38BQQR",
  "key47": "2Hy6hqPRppGhobCEsrm1uuipkPT5V1ue6cJx2trbag7o7d4dAEM8wvrHuhKZ1JotH5cUb4c4dkmZNKBdMdNpsGkX",
  "key48": "miCWYUqRuBbb6uDjGNJmVoig9upUkNFRtYhr1Xmq3kcqaQ57pF3fqrgHW2NjiNzxZfwDLnWog6ULXdGSpYk983Q"
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
