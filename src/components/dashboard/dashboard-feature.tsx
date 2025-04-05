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
    "SP4iCfDPeNaBxFQJEVpqffcyi9WoG1EKkdJgCXeRbCcmXyXHo3XKCTdL8qGFC761tftanqgP67poKnppof969Dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HUfoJJMP6ewZ2Ej2dY7hDQfe5qGdvxd5uTd3KPVfNgiXqNeLweoZwk2q1FgGDquy7DJNpwaoEtzFKeqmcDmoWgc",
  "key1": "2JMaPHW1Dm7G8yyMkc8BZkGQj2SNfJw43GTJcjWtw4XMgm5EPRZHTnLY58G74BNJbLfP7WH6PmTPncQNeFiKfuA2",
  "key2": "3oRRJ9pH5AekTzkXxTcuFvqCU8xffEPibH4erBCsWZtr5z3uAzCf5xjwpTQ9TEvpeiptwE5ghFSxAdq8tZVNh6bf",
  "key3": "29ht6tfEKPkuxxj8ubANpHNL3dxURichXuA55dimTuroAWmSNVQs7bU9tYSRXJTnYqEftWT4FJ8zMLYxV5WakGcb",
  "key4": "2pgmPeMbLfGyWzYU6ohi1qwUekZ9MBcpo5nxhKuScT6HXiAhd1SdXWefrQhzS1TxQv5DuK93SHVRNJ82FVXEM5Cs",
  "key5": "2JHb6T1y1HDpHaWAoGFdSavSJBVyGNePiEkNRB7jwnz6ebXjx8iw8FMhUZQSEjCkc6xKG54qxJfHr9ctUCjstWEP",
  "key6": "4Nz8dQqTR1txGxczQyEmEucNteCuzsDq2m3BFY6jxQ9nbNp3S46P9dBY9MnumXq77aXmrqvi5YG8tDqDSwiUKNfY",
  "key7": "4bZiJaxywE6gqkmh9JKyhhSpfbzcCfmqVRjvtSbJNo76mbWxgGp5to6sMVwg9yoNE2rS9aEDTMQBSEMtxNMSHxpg",
  "key8": "4CeYE9bTwnbqLBj3czPY8foWVaUK6kKZkSquanodr7Vn6CYmwSpFUCGWXi5YCDjb1LLG1WVAkMaP9CoXLJYhKCHQ",
  "key9": "ZoKZ1y5y5AZBMmLf52mvQYthuaTbCL6t2RyUewQGAp5XFVSsstGbDmQgVWTUbQFr7h5AczKYAbYYdyrSd3nB8fZ",
  "key10": "5W1gM6X9HwWSm3nqHSEvMiXu47EcmbhKC7vaQDndbdpxiVy6qXmLXDap6JJCWrtAD74BMSdXR4pwW5mQMFJZ6kSC",
  "key11": "3ygqEdYSXQ2fegDmFUXQQprzesnRGHQSx7i1EpqFXpQ29WyGYKiaiSJgqtDi6BVpUpaonGXpDFWkczbJuKigmUMA",
  "key12": "5Wydbmdr69LKM3K42uHAueGRha96erTceoiTKX3fXWSEtewufVGCAzJRJACCauVLM1mXqeYVbmSuvhp7jMGSB7UU",
  "key13": "AWYHnYraLYWMRco9VRUNN3MKk8oYv3PqqZC2tnBgJ3Hwv2JXKSqjcbjWQzEsmTPYhMsgkyvtxpCuV11MgcKFwjt",
  "key14": "5fpqqwdZNtvnrnpziaqMN5rs9GHRRcLi1SWAL5x9ojdsBsUWDnUjVLk2gxHdx3DUaVBsuaSfHweEXhpbEr2wE5ik",
  "key15": "25LwnRK5SZJbgMyShPfxyHL1QGsvVWrpx47rppgCTXJELNuhiy3wi5yZ17sUJTwfpn9twbdWcsXFymdSsBHfBkRb",
  "key16": "2UxzT8b9Y21f2BmnE9wberQGA3swz1cuR2CM7dTprQVpEnoVJEjR2GUHUUeSErqYKNQ6LgADBUeLJ94WPBoxfJzD",
  "key17": "4qfYK77PG4ax8MHyh6ofeoowN8SGWgQnzpBg1Hnem3K4qtFdrQhzcijn3eR1u2KnaZP119xAn96bvRg7VzikRw5g",
  "key18": "suAp9kNHrNExZFttpT5Fx2nYTPU8ToXbbtHbgJfrs76QKYFmDs52fy5GFCDjSPWEq5JnUZwHAgkiiELG3t7YRnr",
  "key19": "3tyC8ujzz8Lng1LaiTkC8EcnYeiD8TCrfTPXPbBFiaGK1wjbnxuSBvCzM7neAnycN1a3897XVAtHcnSRnBxSwwRd",
  "key20": "34aHFdNcY782xeVydkri6hFDUb69p6jxgmgdsPNNWCwfYxHAGgPkzseR5G7HMVWa9X9rR6ZCXKg8k3MQe8TY7oo5",
  "key21": "3RWcKJL3HjH3B36CrMksgyyoJkC8dR472wNQFVE2BoegykAxvUV41BjCHFBhD3APeKgiLBS9FE27x7rTKAWVc3WF",
  "key22": "622LFuZqo5bTq11LmRqJKEcR9FqscaNKNWBpnZkM3sAvTUWK7aWqzyufYuhgZ1i2vUmAwrHuq7ajDCANnETRup1q",
  "key23": "2uzY7CDDycehewRQtEFGG93bxfivNXxXxwTy8qK8WxiPRGgaj4sefo2jHyumbhgwdBS15d1u5fPRL9DZiwrANhLf",
  "key24": "3wcAg92X1Kuxtvw6dqZLnCSzsrzcquXrs77ghfSBn67iCS4hkdCFx4CzBmSnqS3AgY4CtLPspGRHnjxUvftfF9sv",
  "key25": "41ad93Er94vkgAbEYGh7CdJ73Wr9zT7vH9bWJymbWeFBZ683EHkcYw59Qu4EFA4rPEi7RPfgBs7qrQ48APY5e38L",
  "key26": "4KxdBzhbwL9FfBkoGpJ4q1qrUMPj9bnH4SzVtLZBWXUJU5wJwdZEHtBTFpfgoap6FQ8mkacPjAAXfnst52A9EX9V",
  "key27": "5bEQKTyxbqD7hCP5XqEFRhssfbKSd9zPYyFGpqAdVUVraXmwpsWAKEmCFoMcSBBCE516tMzxmgotp7viUeSycgnk",
  "key28": "2bKZWoq6VKGfHkamaebfyjuPCe1MujZqufDrLYMt8Dn66ekJqeEQcHh1gvmrnADtGQ11Zbi2sCqyeJb7sECpw5Ym",
  "key29": "t1goZwpXTmGnsMkvxYg65v72q2A2QCNtF8CZ8zjcEDWKuM3a2NuCjAya4HoipkQp1aJDXR3E8UDPqwQVt7MYH6F",
  "key30": "5pUMZTuFGfbAsj8oL9kRDvXBHpZBj2sdVpcQMqK57xf2NtUP9kSz94mJriEeKW3xxH8suQTUGgMqPHS21uz3YZ9A",
  "key31": "5TcHsS1cAxhpodj2DZjJH4W8JDqyjJcE6qQc3R6f3gg8EbrAx4m9RkcYPy23SqxjxB9JuJH1EKC5fKb7cSFdNUuQ",
  "key32": "ZJjSPSjxxhdSaQEhoqbComp1MAVma12qkPn4MBScqs1Ky7p8cWNzLfJ4z4zUdkK1bxbmf4iiFBstD3N7TGgKCgC",
  "key33": "5SoRPyJaqHZmYhC2DXiEiZMeX2mvAGFFn6NybmforVFYpfq16qttNrhJtAMRuHFeXW9UmxyPmc4FaL8qdBPQYNmW",
  "key34": "N4z3EzVNfDepv3vNAX3a4QCsMpT4dpPnuRYYvr4Z39SDSVogVFaseMJfjNZALyRG4w6eHzTFdko8N9ozD6Mi56Y",
  "key35": "4p44RxgVH8UUU6wzWCuNd5MCR6CNi5Pu86vS92woG3d6ebJWYki9CjfG8ah7Ngz1Uqc9p77426ZegcDdnA4Dzg8q",
  "key36": "3rBogygiTp6G2Gh28wpZNetgcSHiEaxKj8859Hj8JSPeH9p9BfD9iXspzbH2wHPs86Lvmn4CWvnuQM4vvXMwABpW",
  "key37": "57nikHSd1tsMLqPYNSw2dun9mAjKNEbbgoPUUPA7NaWQdxbr6Dxy5zTxg4x3pYpxX27mECGzkkLS44q1dzjg43hv"
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
