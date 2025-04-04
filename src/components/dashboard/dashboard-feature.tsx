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
    "3DLdhw7X89bgK6XkZ8SatkpAS7Vm8MRyDZjD4yyKRn2pfoJDpTYBAHM2Vp2bs5ppPVkkH9NDx6ezpgtjboMxypJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bCBeDLV5Ua4G3wBitWegKr3jkDTzmNChp2rgnyzTMaGkEKyPPzXG6CydedGcw6cMmXEBE2Yshie4UBrVxPSfopJ",
  "key1": "5eJjGeW72yLdqek8RshFjiHvVbhSw29aDZxKY9BxCNZeW73euvM9T3r5w5wwx89HbvTdJxQMeTidzutaaEX8UNfe",
  "key2": "4fdmvieh9qHgpA2QviouXBZdmMCYpNV3U2t1T5XoezEeeEoaYhx5YUmy2CLnaxHyccKUgbhu1k9FtZALN7UvtdZA",
  "key3": "5bXhMPvFh9QbA2JTkeea9ZNQPVv2Wf1N1gsH1ej6fP7UvqxF9qxwSn7v5oQhndL6yMJzc6BfEidMX1YVKcdBWLTd",
  "key4": "5KCV6xjzFjy3bWsiJhVjaGdzCKsyMEQfu3cNBQs2QKhnzLcM6YaQ9noTTQ2TSpCCsYhAQupnQxXgizXJySrk3p9u",
  "key5": "4MVHaz7G1kM8AGwae4eMqaJXM8PAuGq1c9pFjfU11hRS4ZhgaVg9UP5jVU5JHXi1HaBACh5gUPSbQiSeBVWf6QH1",
  "key6": "2tK89bj7VeiPbgTRY2qMRMQZmdhxoqPtpYKjX3V4biErnFFgJodbpbtUFUx51TrnmP6FpJQ65V4GMx5oMdsBcejP",
  "key7": "3ZGPPq8KpseodM6F2DpTnQqWpxXzewB8iNJpR79YQ1jgHEsDD8yxSvA2wLAxmKMmrQYRMXuZ3RmdF4viNAqvV6Zi",
  "key8": "45hJaEBZ5Gb1ynN5LADnWxqNrkqd4D3rUKVRfN6q7S4Qgk9FYNmLR5VH7siy8xZv5p2R1NYECQxkK4NirsdUzk3x",
  "key9": "3pfcu6vFgJcrLKn45mUZPxQVm32DhQChTvpLMhrBmKrgQnFH4f4XMzJMZK1CHyn2rfAWCZd75DMqM9fykg7TRaMY",
  "key10": "3xTnp3szFehPVMmQrJzMqjSEpYjLdE13gM5PX6s1iQDFFJHXEdt2sAk34vmYW1dzXnm7JA4qrAW142huYP1VoumX",
  "key11": "5QdX9a9LstdDEVh9iVCL3QiK9PSFdRSEVU8TN5QYhsZdwnrajd7UcC6GGiT9AeNW6n8KXeQWJX116RdqNbE2Ldfn",
  "key12": "TSX2mm4kxTDFmV83qwHuN2QF7ckLMEc4mDSyXpZfLcFxt4vDPYs3S7C4mffmyStoa6zRr5sMQbuRpGJ81QqNuca",
  "key13": "4qZEAaR4ab2SQuDaBwVvmrgpeLS5WNpFKsPxaMCKRjHHPqjor4xmJPnDLZP7ZjfU7CQvz1uvEKCZt8bkXedUmXUj",
  "key14": "3T5aeeshShJhfX7Py6BnMjpgfV5KEPc3Fy5hCaJnBXeQwaWU8GBKA6Wh6CKdC8LUTHtDNWG5ufH1CThS5u6ZJVPW",
  "key15": "3HMN8LZQps3kmhX6chpWrUwoKWVvEx4ujpv4Apox1XRpBVXbz5a1gDxMNmGwj8s3yByUeyMjNKYq8ffp1ionmDzm",
  "key16": "4BzALtzHERtyJraiABxb7UXFUpSTCu5Zvn6YxiWcd1f5MnfKKtxDxecARoDoRixMpiP6vJumTPS5nEFXj81iWvko",
  "key17": "4of65wC7Tg1J5ETrwdGCgqt4dXrcJ1qHfrzsYDqrL7dQTUQsTNKEoFcYFujuVbs67DVkuo3GFsbr79gzY8K2dxYe",
  "key18": "5ntpPYnozxJXh7Q3QxA7DPFDBbTvFBpzdAmZJfFbLzufysgkFxz6j3BJbLpJERoxK5CJdgKnjYmr7Jp3uqgYySdn",
  "key19": "4xvf6dQ5zu7259vcKaeC8PaEZdZncQPufvv7VHR2iKxyt8EdmAfi5Ednca2UUFNA38hBFhahguhzkRQXhfGB58cJ",
  "key20": "2hzaozzERN8y1DmN7APmraU61kCRXgpemVNxPVAy3Dfd4H4wZgqGgcgJ9CqNfie9Ayy1p3AnhwXZJbvCXPDc2Taw",
  "key21": "XyTTpouBrbBcfqXNHMAG6HsiWjjajVjSC7GwQgpZWVGyr8d1mL3WR9291efbKQWgLj3fAXTqstzMzemzJx9AX34",
  "key22": "5tDcccbG5uw72oWjxNdzTxSB7j8a2aXvVPtw6RDyHuqHyDadg53E6iAhMddBoK9BAGSTccUAaj4W58KknZymay4Z",
  "key23": "1UxCujzCWV99wWX2cmov8SkQq17oSFXMbTGPBU2LK1wfTf7rVCiYhnVCSqGsdgPvFUCNdGXsayzX461Wptvyci7",
  "key24": "3u5zhCHG5ekECemBHA14juX5xWaFbm4ynfXmCHkaRpX8qKDxWGtVWPbs8RoTBENLanKRPz9VZD7kH8posunGtQSR",
  "key25": "CqmEqxZQ5vNeEsH3TtsCnjscQUgsihCHptU6DtEaJtYThqnK8UdHAMHKh3os5HbSzQMxP3S2rHzyqoVNwWaEECJ",
  "key26": "3fx2iSwG1dTPQHqDhtAP2QSYJhKHZFrRdcbqGZ3sZqAKePLfZ784aeA3WFVWaJfH95vm1rHPS2XpWDqHmMMJoxTr",
  "key27": "5sZNYTtUConzKTYVzogXKMmiEKPYgA2jrdy5JeUWLud1dajN2pcRZ2Rp71oWZCANxi7QGQh1obgGAoZNMYRVMVdQ",
  "key28": "3aQeFxZmRNx9jcJ4dJzGzh4iwEeMKfBnnYZvWvHgDmmvL6h83UA7B4dtKJfYeuTg6QTycrh7gEWWvEtUQ2D9sbZg",
  "key29": "2MMKeCWSLCcPysZTCwRFTypdghSKj5uZkf2p5x5mfhk9FV1QohPwS3i9Kc9TGhEj1yHmXTMKPnUrvQkMGcstWsuU",
  "key30": "F5FnhrA4r7gzwcG7h91pC2ujrZJVzT8haeY1XaNniAidpnJntrWGcVHjdGN55gYujWrN67cyAjYZ6TsjdjiYLiL",
  "key31": "3stSyxRX1vPrCkdopQBgiSyM2ah1gfkuR9d3aEB7YMB49VTWZ4npbbr183kA6cGhGkdgRk5y1gb31qAx3a3QGfCU",
  "key32": "4U3GW7YGPJ1vKrX232kswLtLiZjAPGKUm6A5QR4n1KAacHuMwj5GKPRdcDaSfSAyiQJa4pYUM8JwLgiLMYhr8GLC",
  "key33": "3bsqekkRct8qity5pip5gpY26Nx3mP6xPchebYdct92mxMaDFrtMNmiSMhWgeef843rr6ffCGQbmkkmXwQa4Sqdy",
  "key34": "4mfGXUQjAxGXajwsyATUmPP28KbBZzkF5hHLU5g1Vyhu9HJeYAzeAm1mFzrGc241FPTTyTHTxwAfQZiiEcZhkTTc",
  "key35": "538FzfV5ndzPqJuoCVkPn8DgQw3yCTscmagXb9fLgtaKFc48aggsWcRxgbuDMVLHAEwjaPp2ByKmgkQLAHwPgtFF",
  "key36": "2CaQ4uEb6bNYDFMBX49Nz87gvQBiKooVNZimUyEWd6WRaemtrnhQriZWEwdWVz7BXYgxbnPxXfxXJLs277Y7X21T",
  "key37": "46QKbWAtb32kbjLKWT5UvhYR2bgjyKKx3YZVxywa3dukKoLEeGaoex41VV2xkAfChaTPLTmX8kUVUrP4oGGrZ3YZ"
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
