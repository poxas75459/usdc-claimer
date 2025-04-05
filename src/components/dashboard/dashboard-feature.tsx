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
    "2GsAZRTqgSi7x22JsbUcZe5NfKstmpa551FnqqnGZFQUuFgJFW4niAU2WpVHzt2V3A1cKvsQAzt2ZKqSMCg7zNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVU5huBhUYtz9nwdPrY2MuDGtX6saERCKoDycav6u1ucCuG4zFz3xpoTaeXqzmbsHqadEMvMhWbvTfPQ7aRJQ3A",
  "key1": "2CbrPu21ETevmyt3RLtYQ5aWKKNj9zPEa6Gj4Btq6XLoWxjvwbMk3NR6jg6zACAnXvp21DTu7THtGhUZo5pWfXCJ",
  "key2": "3mC6y2x9o87cy89Uo53zEx4t3kzbePCWUzmadbAwM4HYg9zt3At8pUuQScLLtMUezcAkHGojAnP8wvBMzrpEUSHz",
  "key3": "4HtzvJiV6fogD4tE8EtPB1AAejU4uuJYkkktMw58NQo2FW1UwVTednsRsQzHG1tNWrjEKE42KPbYZ59s2HfGtUHE",
  "key4": "2RXpKQ1UX2MZmzXvBVJQPZHGe6PH7PfB7FGzYnjf2P1c5Hafb8Z78EwngQ1vGKzNcijKwoGFxB1AEvisH178MYJ9",
  "key5": "3h8SvLJtmQTnSdMcitB8hEynRafkCmM5HzANJEkr2Ku3CQM24HfywwJScsXY7DpuUYJvjVy3LUeivZG6jcQ5iptd",
  "key6": "2g9QPM3DnPy7mQdV4SgaezwMNDpxQVUnTEgzNnuZQqCNVpEiKv2n7AXmZqjt7EydTpfkjKYBQQ5PwW5BJjyZm153",
  "key7": "27XRZohKqbsXyuF8nyPNkwEfaUPXKpNCAovgaVLmV1dBJre7XJZ1xVrmHXYEt1BqeEUEtcJ3WrgsFs8qRXfR7qYA",
  "key8": "qoniRosR99fixmZmQoPTg3DpDhL2txLpe7kQ9sH2x3FrqTjcAAbRNJckiKcYKWu4YGADbwC7S3J38qpsuFxMsa1",
  "key9": "2fsYt96Q4Lds2HYGJGcc7nv7fNc1pR198VMnkG956adci8rjXAitfHQn7TsgzudqxCX2Yo3zAsyJsXwobjRDypoD",
  "key10": "4S97rcKQnMSVuE9a5R8DdN38KqBL2vdGEBovD4ZTxSnPSSFLyLp4e8heZryT5iYwbhD8jFsMWeaKkurVN4euXkjy",
  "key11": "26mzK19zqccU8wSfxroEuvEv4B4F7ivngVrf44RcESubCmDSc14hXv3nr6D9zvS4eYEBA5f6w5dJHXo8M3nHv8fp",
  "key12": "zPqa9ora4h2iPQgKSYmHrJW3USnyPNbgG3GcKdy2Tcd3dwJtrzCG9sa4urbKoSyFqLAcgnj5HX3BpqK5tWvDxwF",
  "key13": "3yAysBN6t9sSxu4cb9nXcKCQzcK6fBzTenSMh3K7XpTzdrtXzbr8s23jMMCioZSs9RH3VbB1sicdHPZg4c1KMKs6",
  "key14": "2HJavw1BbA6EDzrejH3pExSSw1zb9hT7Qj6u1khFtEAAkE4PunoFFK5nzS6c3ySKSy8iwpQQSfP6yAhSTNr1FKUT",
  "key15": "5ArSRdKGAuTos9pArszj6aMH3U5JgAPFjTQFnJcAtdkS7C7KqMNtmGSV88JXxrerJznmBKT5VhGm5uPwjW3fbicB",
  "key16": "9NrZVatcHU7xHkJta7mhY1BqrCBvnrPFLxSWobxEfN1CN21qr5pFfdNS4W3s5Pa3TmTQjAM6hMU52gUqchmVEha",
  "key17": "EpXVaxcvRdnu8rNbNVnArtzPhZZcR2oTtgaJiU1EnEgZ52A71cqPMTdmbdD9QLBfKXaFB3dZed6cg1pUy2mgpvj",
  "key18": "2wt4NeXoNoDiEzRyg7btzvNdWHQJ9vU4gbwe6xrmctJSmd7yX2UunX3b5SvEyJskqWpsm62nKdDW4QjVVKnRdAoi",
  "key19": "5rg8g8Qdgu6odaT2NshiDACtRjdF736p8fy91U5HKT7zMsxPAHExi45zg5WehBj8Hmrz9M6D6rDZVFHLs56TrtHz",
  "key20": "46KGo5wgmWpWnkbcATqQY7SyDcYJQ8m3mrPmR114NhDmDbkJrqiUmTozp9oaYPLdDV9j7WH13pygsPH6ZKRL47av",
  "key21": "2RVWDb89M8b72KdTxCRtDNdurAx8frvSXtd4hurGATSy2pTmo4mrqW6HE8zJtfP1KUJrtrKtpNEsVdtgyYaqh49a",
  "key22": "368vQSyocvqeiGQxQH2DCBhciiuc2VbSRdX3kJvcQBy489TYXDKSxE1criXTxw89uM4eKmj62mFzetNvX6aThVmy",
  "key23": "i6a9vDYQ1BDzykKVSaySuGyjEq3acnXUacCaJSHmXCQJ53jtbEuwF4b81AerJF1f5FzphA6wCMP8WSJocS4TRJ9",
  "key24": "3AowhvSdBLr9JAoAsEESFBKBcxwc7TMXQDq1JWGevTkkvPx5x89B8Jvs3WB6wyJnQ18o3J6F38yR9Ch3QJPmYcHP",
  "key25": "32VCinnhF6pYfWZ6D78Mtjqc937uUodHzvCdB7YhV9zA8nHi5ZTnnEpr4KnjsQHywLnNVRnoWWSxPBCsXrz2JAKb",
  "key26": "3tVCKWoSHmXtA882aQ49UP7UJnPNBEiMM1FcVjMbJZNeMkrQhqgyVcAPew4yoM47NLYURXarGKpZJsfvkpYkWsGU",
  "key27": "33jVqAfetapYoSHd2ycRUSojR2VKJxhqHbHu4hCjVzSYL6X5YgxeGZcYxY7k8wg3THEZZLSgNv5QEg3q998vxuGW",
  "key28": "4MRbB3NfpvoxGbb71iDaR36mkkb2YpRK8uxoXBhckpeDZkQYU2rRQav4Ff4cX9awzFaPXkGnqk6zutKbTtzBVeAQ",
  "key29": "3m8o3uXAUcdp1iMv7f4Bnp2ZFr4WrgEYvHrZP1Zr1u2pifYhpVQKdj6QkFjvUdFsF18TLaBdcMapvUkm22DaLXM9",
  "key30": "LP8dadwzhiKSY5wYNdnpW1cpyZaiLD3xTso38xWGZwcQRaEADgfvUyPo32T2QQNhWunRUowZV5s7XKkekuHp2Lq",
  "key31": "4ns4ucqUpU4Xob1Sc2RY8f93DnPk8Q9PYGNBzkr1bS4acZw1CSUzcEXsJ6cCnbqHTRfhR61Br9QMKXXkun1WbRM4",
  "key32": "3QbESG3b5fNURtsSCtYZ9b9DtZzjxbkNCUXC4mSxWpDVLM2zi2CypFPx1yo9oMBT76LrmKHJJRNxrYV3td3bbzVj",
  "key33": "4MWgqLsQWXqaoW9SLeTSw9BBbATtqELJUQEtHDnwoZADXUhFQTjqJ3h7wRdj9URr9p1jHJUH3MzcngmCV83W6uou",
  "key34": "2ivHj4dyczH8WTbRqvPg7gydkj2zFqmNUBYKPxM4ey3RwKGb2vLr7ohKR7xAx6wZmfiV8LjpAAjoi1Xwv6At2EQ8",
  "key35": "4ZDZpbW3KXep5vkEeb9GxKmAe5FUvrhEbn8Qr8nZsDC54igb41hCRGyFFZc4TzyTxDw2VUAnXRg3erzYvFD1iuqd",
  "key36": "2AUN39THExeRSQRXH45KSUuZaB8nXx2d1azwKGKTumJ9ZipbdDn5CdUShu4Ff62TjPZ9NS6E4c2h8YSLc4WQJoAB"
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
