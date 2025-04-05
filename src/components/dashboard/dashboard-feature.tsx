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
    "FvKvo3dW2yvfLfFo2vjZH4CR9rsXk17iBc6g9EBPsgRpEVX17Abuq48gFPEcmBwBysf5iETeAdH47b5XPfquh9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWSj8fhiRinA7vbJgVwzwmB4PDtpyjXerasJVnbPL3JXbT4EvtFx7uXCAkFve1u9JTdbe1ebYn1GLK7vPhh9wXv",
  "key1": "4y1FpiqQS4rL5TxWTwjrVru4gxHXtc425PjbYHxDzqCRtvTFpuk3PyWZvqH4VAKNs9RBpfKVHTaKhsa7XTknh3RT",
  "key2": "64AtTXpVd7D1RqUWXNVwbMAYmRHxZ2YVMqnStD6cDp5B8fU5WfxuyCAbL2XMFy3wadoJgNzFbJ39JGWX5v4PPp4q",
  "key3": "87HeGD1PCSMERX7ixKhr56QXDxWmDQT7Wj7uBMsHTGFxKVYSxvpJEEu8N2L9tTTMnsVWKx6CrwLqMnFUyx7doQx",
  "key4": "46rErD1AansdjciVesHHcn9oviEJ87WQX7vwrQHGfXBNUWk39RM1QaxpYNXRNp8TZG5aRFVNSGecS4FuKPhBPw7P",
  "key5": "vvPvE5kfWToAxeEaRcS2mGoWLBbA4WudZYtwwsijkxdLsSnk6JEqGUChEFwYjenZwkijG3H3oSHHCL4eqjF2D2M",
  "key6": "3BACrGnNC8fB1DG6QNvSm7vXHSGqZRZ1gJ1DUcNpBxm2nAooiUigoUU7y7GiGNKqJkntUtmWZYAGdv5JfMyQ2kmA",
  "key7": "3J3WCN7t1PEWKVffcx4cbxPhpqoVwfc6ypPyxG3fdHHwb3ouBLHrkEkzSTcpJuVt6Kw3XaTeXFCEjmnfw8zm9ScM",
  "key8": "5nBr5dip1Gn6PH1z66Uf7sQxinSQE5gsjxfn7Z6F7JpbYtuUWCYtA4VwprDN7aRWqayoR1dGFSBptZR8HG3VyRdF",
  "key9": "5rj4rWNN3oC915b8trGVsnMp6zzcbzHxCWWXS8N1rXZXq1r3wNm8ywxUqjr95BT4oiQUSVu93jt9s6eYR4kLXQb6",
  "key10": "LPQRjThVtiEQsNXghjHB5xoLdxwmoeNktnvWesdLXoLao4S6uNJnPLm1PbzvM7wWsUi27Eh8Z55EG5SL1SkNrKy",
  "key11": "5EthavNqr8GjR7uywxUt87WUx9XVVzseVyvUQiitU1gemawzQaB9kFtrkNzHX5BfdpEJTDBwLR7bZnSCbA6r9aLw",
  "key12": "4F3dxSR2CtpNGpbFP1P47JPE9R1sNSeArkiXD3aRT6a5F7SWuoj7Puh8cHcvRRUmHxSRx3BeHtoBLN5aoq4qMJzo",
  "key13": "63whrjGTW7YdXMQj6cda4YPk8Hz9DTpTt6u9JRFqSGQx5iHkHesK2iaPDBNpr1VoXbe5dYwHCJzTNV9X9mFEjxK3",
  "key14": "37jhgjsoqsd9jxdnBDV7XLgJxAqTDu1jZfGpxF5JRBFT4U1xtqZgHGq8VSypH9iGycirfMbipLLKJxbqE7PjNxNv",
  "key15": "46ZhrPhuHdLajJrJpuj26ByyRFd3sLQiAUGw6DTnb6p2PbtASxDmomkbiFCC1oPy5ZLJZ846dNrueFZCv4vaegdK",
  "key16": "4n1GPaonfCxkptx5nDM1F6M8gNS1chWECXhF7AM3bDb21wVHTzH78ivnaY2LyjVch3s7xQWdVMYrV2AftaJbxPhd",
  "key17": "4RVBBZmxphvqkseDYzQehwUv4M9D66YKyDJ6AadSY8YjfShTEe2waYCUDyVRymUzUed7ncGoWVFHGF5dbv8cMcKT",
  "key18": "32HSStHy3LqeVspd4RqMpWtgiTQ4eCAjmE2syhgvhTx3ddhEqdAYZHNBg9Z2xeNVhDZzDZpfkJWqgRjgsFe6h8Xj",
  "key19": "3KiCpVJBAXfmr8i4dEUktgXZjS2FGkTPjrntfoBR7HginEvBbuKd6cjeeKrJVG9giVQk7MoQ69onPPDPiJJdJGWW",
  "key20": "4VGGTKTY4znL1GEF4rUjMJBFJeD5tjYEgtcWgxfHJ8ciSD9KdATSkrBg498HJ8eRQq1Mz6E3JCFsXkj765rqmev4",
  "key21": "3U7t921uELV9S4CoQMrhZEGDSofHGfd2UCh2yHwXKMZDtyBLAfvuN8NRJErfvKsba1nQEpEAEaySoKVhRwDhVGjH",
  "key22": "3UZVBucLmd8rh1rEk7ame9fD35DmxE131u8CQ49zZw4Ck9ydzn4ADsn55XMqvhZCsgDwBmLkhbdHqrQV2DRhn2i4",
  "key23": "3y1nVVVvU2qS7iVGyA3Z83QM1S4DyNQfcMBo3tGKjzA2qHnZRDCxhrThAd2DRFd1w6AZR3CSK5tT8tqUfJ9SCdLu",
  "key24": "XKWfmsVgVXNrnoZ8mf73Tf9m1TiqwwKk7HzMvsaC1gUsRFkZRBYn6u2xq98Cg3r8h15kHj317vx2zf2HiCARZmt",
  "key25": "4NScuk63gwYxoXqm9M5JwA5XFxjxKgZVztXEouNzqALaWQgAokJY2GtEJPpw1Fuo3w8UF8gZYmHQP2B6t6mvyVVE",
  "key26": "3CiZrjAjhrZfxxZwgqkFwERijdhjqDw3tcEcterp7BN1Ab35Jn23WkNwwnyhs9J3fz1efgiLPtZQ93UTBwHVAFm4",
  "key27": "58bNFsTDvbKrkdUnzsW19e7R2zC6rfvdk3FC25DHE7q5CJTTk2Eshsf9EhoemHni8eaC5FYgCgPrvfoeAWjsvnNn",
  "key28": "TRCuJKwd9tRPAnTvjzoLaQtkuTpJMWvURDTfE2NCZky5zuuvtyuyUDZnDsLTF8kCN4JcJ3E5VkFFqZfXkv8DZyc",
  "key29": "3kAABBQTkKaaCKKSwNk85E1ZfusZKkE3sohTotc1GU38BPNbbdyxkEfac3UdW3P4sBrFukLQRmPSBo2jdSzPivUH",
  "key30": "mJvLPB7WCoXXuPXFcSiu1S4HE529T8iBEjdJaaCD8B7RRBtZde9hgJVvSvmCDEtNsR5souqSF9MgwUgmEynUsxq",
  "key31": "4KuxC68zCPLcFLzvfh2zQYtoVpfVGgE9EuWRc8U1wcxQ99CNXjr1C6xLeF42wvE2xJ7vuEymrBnwZ5XJJAyYjGow",
  "key32": "ePw5eG4vkLCUDD1jzU62wjCRwHLk9AuCG1Nj5xYn3YxG4d3uN1R4T4Uc2egKH2GRQ3d9EUE6yqp9sVLsV7RSRx2",
  "key33": "Enu1QKhkEWM7BbKxqiKHq7Zk7af9ZusPLnHCHafRSosBZxnbNix46r4rTTZJGZv7hKCiQjtbPj2nuAgL5AUhVhi",
  "key34": "3d7kf9o4egY3JGLMx5i2mVPZXvtPt3bHdgq164UvFQmQhXnPDyWdMehXeVsKyPHZ9aFjUrQUoUEu8QYtmuwi31mF",
  "key35": "4TheJR2vNRc3JTCJPZfRfPk3gZjyu2Z1D2zzG4mrpb57aR8oVWHzT1GQYEYNbEdo4V9An9fGTiKENEdLm54hy6Ye",
  "key36": "3ZKLsLWKwxg9FWZqYzqcfz2Bo5jL36Vq192zyjZDNydv2bEiLtL7MHaPmgW6mVvDDXruNgrqMJweepFdUsmbPjP5",
  "key37": "4GRhBLJUvGJpfpjCAMSyWRJvSa3zMRZSr7w6hEiibqm3p8eBmrRqFuoSefBZAzB6uDKHuhBRtHSKv5L1qrZppAif",
  "key38": "5GRcKHrmTFQL6qErShUVbm8RYQPaLzcFxBmNKdWePqHLtyGgYP27KUnobnHKVZW7E1fFM9p1PskSegEJNsecsoCG"
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
