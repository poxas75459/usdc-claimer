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
    "4EfTGmWtXCjaKqbNDxU9Zq2QV9nqVSNwy45Ufs3zoLfhfhmVnHqdoEYhCcYQEug1nbb6qyKQGXun21xV8bMdG7WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZ99nacLEPfNt43bYKiJmSK2br8dqqcHyQoChmW6kmbAYHwBBoGwZBp5F6tg1vi7kg2cAs9TKzZt54LUWPpstDC",
  "key1": "3VpTk3Eit85usYNoG8bRtxqQKKWrFcvb1pYb7nGHZfR1EzNgmuZnAeDGk95uj2uB54FJuL44hyYWwgWqYsSsK3jL",
  "key2": "7yjT1oYgK9DUk1mo3yMMLyyhbxQVwxYXFQMfzyh53UqCSrUYs6YNMjc9L11c83tDHPFRRQdZWKB1tsnCBPiiNUv",
  "key3": "43v2TDgw1GaAMPf1sHVnTaGCQ84QpwT7PdSsXPQoA2AJ5cy8gbzF11af5CK6ZSf8LgZUTxkMEYindDmh7dtEnFU9",
  "key4": "4JB8dY3MN72a3JL9tL4f5DadXnMrnEfpcbNACfb49PEhicW2Ycp3jxML6eg4826mqJ3kSLKj6tmScCLCU5ZZctMM",
  "key5": "4KYwxNJwZrSCgcmxjfdaDSuuj56xKDCa7WcwwrMr1uxLNUv7rde5AQcPZFcXf9LHzZfLExubPak7amKxB3mgoEBo",
  "key6": "2TubirF6PYiJ8pE25dxwmyjGLDcnbwBb2Cfrm2A6JwA23PukeJ3g3hCkUnPawyNnjtSpCq1LJj8A8yyrBYgC7ujF",
  "key7": "2L6KuwM79aH56ZBCvgcTzZM2vRhtc7BejyztrjopA6VP7pJAH23MDgsfgSC5fS77Yah48azVLX8t2P8QabPKembE",
  "key8": "5s5CyjswFcUbctirxmRv62yP2B4BCvfmT6FPbLrAGP1wL28BMPgPJeHnW3iHkgKvse19zLwM4dwuwZAkRNxjNdS3",
  "key9": "3Dn2DiBt3jE9qwoaeHNhZVAuPUjtMqbJQR6HL1AvhZYJGLyRJzVTgqT2QetdSmUqBCw6VE95L1wBENTD5zEu6yX8",
  "key10": "2k5xuLVnDoCfJuWrPvtGAAMSP5UxTcxjNawHRr15tjBA18JuJQCNicahBWgiqLvjqfEfQaZeZp2bMGJUwn1JwBqF",
  "key11": "KiY1Pm7wYSFpQ77T5TR5MsrLKT1HvxZTcxbTPSnaMkHPgCVprMVMbtD5bLVH2aEoQ5LZqJhvqM9zdNSPDszb87U",
  "key12": "3kWs8tDoqqMsD5eRPLBa7dumFyDiVXxum5J3qBgk5w3XRjhuQfodQM7XWjhe7xrqPo8aBdnwoydyC4UZBAMvFsYz",
  "key13": "3wYEnUEFiAj4XW2GicQhdL2CheWtgUEUXEq6QKyyM1ZHDVikKkjDEMEtAUzjDbT3N8MqgNKz9XKBAS75DwKtMHWW",
  "key14": "2YATqzyG44C7tv8TXimornNgJrrknDxJT2RSJxEfML9dDZ17CxK23419KsmEV4qqzphvdQfeK4KMpvHPj12qVgGr",
  "key15": "pvc9pgig3hDr5CcoTE5tQZjGQUZ39E13BHYEzgvijbJP5BVY6cRxQx7X6KGWic63aXWjG7n7fJ5AQnAieMnjcYq",
  "key16": "57zeb4Y7zoCRjgHNLHf9TKPxntTZYV2wKkpxvihkMxim992QoDA5wLgfuTTwFyaGYiJaj88XDj8QuogEWJh1k4v5",
  "key17": "292WZYRmTqEj4YAWE3X1u5BmT8LHhfskjNbZehx2N5rQQLU3pe9q5gkh4yufngSrmwywwptwLoJmhPcCixgxRT5A",
  "key18": "4F8SZXxUAwERSMe6RRxLUQxT4xWiyrwPdyPvufFWfAMru6duomoz2xiNbfdTHrRCH5R5tiBiPC3jHirXLSBJQrDQ",
  "key19": "5Zzta35RRFD5oBBrVSWATqrP2jDB7UfDufu57tmJK2jU5YtjrDbHzGwpu7fRc7BbHxC6hfuqbthFSrhh1BXHwKpN",
  "key20": "33DjQF2qGPyrg5bGbKo3toY3j2H7rpqda7Gq4D8AHanXtJ2x6RoRb6pBi8pjoLXcvmN6MRKH4cB9vCkhfG3v5Pbv",
  "key21": "2YbZp3jQNdDe7nLUdAoDk9zKcTgWS8XkFkfEzVqYGg5kimRLE8iUcPfMBALeWT3mGCRsve7Z1LYEfZ4YaGkvNkti",
  "key22": "21BYxe1TGs5riNrZgy2CoaXj3bfRQh2ixXmHpmfiV37SNBUF8zXXBW47FuqPhSa8V7pEEzSEvcUjSmpvSAmYzkRm",
  "key23": "2wiv8BUDQbdYSiMcWVMkJxu2cXSLC6RvvnJy6Ec43XfreZCMWWSw2cGebnhfxfTYmpi9XKQwaXJ5Q8MfroiFjJ3v",
  "key24": "3K1NzQRb3qzY4o79NTSS8xRE44kzNPnSsdD1KU9eEyRe9cLrcduaVXPN2c9u7ZhtnwCidGq3yLWbF11254zxWhVL",
  "key25": "4ZcWnunDKg82PJaNyog9ik2jvrAivSTBwzEFak33HY5zwDdWdhULKr4kv4aYHzR4kHXw2PQToM5jiSrSqysAjgxR",
  "key26": "5KMSJkagajUUPu8h3J926Z4U2yLgLNEG3HLVZkD5DEUQEohFqEvjpL4LAT53uttPE4pwAXrmgmeHv8ikvhVe4WUp",
  "key27": "37ibHRgkiXPbQQd44CSyToDZpFsUUSNA5LognGmyFD23LSVXuJLcG2HptA2Ge56z9pUSW6YnJCTsthWcx3i1Ka4E",
  "key28": "5h9HbEfHbtsWbtcaaSxuUfdWXRCdy3RkqF6urRg11hpTECFdm7Ss4VD1bvHZxgQjSG2jiA1cfwDHnbaEs2mezrUP",
  "key29": "5d5bLDNzDCtxkGYQ7XMsgjzYaRFHTDzQBhiWRpZMW3qScRMxHnz5dXUGxD87iYHHLWen9kDBJL1rZGmy69jtyiTe",
  "key30": "3zuWPLRHoCnjv6HMRvZ9ZTBozUDyokJmsxtTjnXzKv9ZgLpJE6Hmz3uiHjSMhV9oq7fb7sGvgWAz2hqpLidyWEmz",
  "key31": "oi5CWQYWvpNjzY2npo2oTWzkvsJYQUcq6Xgjyg8z7D9kf1cAGLj4dhjTyiyXvpfTwvFPMWME3ZXS3JdQE65dNyB",
  "key32": "3yE1m3JRh8yp7XBiL7zqS5hD68r5vwer5GmEzkSWYjbf5MqXviQMGrn7MvUHE7T6FN3D6a9CwbWWM5osLSUxW7af",
  "key33": "5y5ET7AsePJTfbxxZxUiSdY7RyXF8abZxVK1UBg8vzLmTRg4kmiMicUd1oS8KDLXtkDuQq5zx3kaoooTqHzws4oY",
  "key34": "4Ebpk61tMJg9XLrF48Fu8B3sk3zrGQD6cF5F1R7Gksy3B9Dq6DtQktS2264HkFwBmqXNjPfYZ1kemEG4oCJJNTd1",
  "key35": "4wSTv91HprvRAbti9YdTwLAocpxFECoKc26YzqGAaMvVXdQnwMFH5DZHVF78oAThzj2uyXYDnK2TSHZGYbT3tq6T",
  "key36": "3CddarukzwR7u7V9Bz7yDns5sR7V4Sok9LecBro3wGSr5Ppa6Q5aEGrrK1ucJoX63xMzpuj73G8JiK6r18TBUr8K",
  "key37": "3Az6Ep1umSPjdqWBidWgY73iXG8mtuSbqzehLWjRaky8KVReJLijtf45rFwJyp94iPVo4QoY4YqZpvz2QMoGhr6m",
  "key38": "3s3DpyTZDxPdu7VWQJgZSv5LJY2FPj1qeGqwwKpyzfGapT8g3SrDSrnaS1MJA1zKSKmKdSwV4LUDHH43dUvHTVTA",
  "key39": "5bKS6EGxRyjNgE84JpVSMCGeGR8EUuSbwLxvZ69sYe4pDQn4VdZsSD8LEbpzXixzwQQCJDGg9cgWYAmc3LAWuigu",
  "key40": "qdAzdatniavuLbZaZDWEnJWMjPEnSfXZfZXfcfAo5uRQ8VjLXYq3vcrixTrqMUH61tdBDQekMonfqQaiQSrv6L8",
  "key41": "3Tbso6PRM91AbfuJbQxsAaLpxbGjPeEPAbZoQcRUD3XkcYFJK8XspamJjEKFL2gKyDQgzjTEa7oygsAfPyrb7Dxk"
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
