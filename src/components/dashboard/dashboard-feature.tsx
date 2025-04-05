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
    "4EYfuEHgyfZWmRCNeeN14xs3FoiapEz9WzinPkSQXeD8JXFnxXKp46QwB1yQzUbzghSUmXh8rj1uDqhpSqSjquxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PAUPqUmxjW4A4Luv9zPPu52jvUvUqQ5e3h6XtQni927b4A79dxF1E7wfUjx22VddibUvAmEs8duD3YwqvzWBNJH",
  "key1": "2os4MQvwW2LfCzMQkUi9A1U25rqATXja2BWTg21DhSvxe3Jwnj7eMXDNmxp3VddvTGiLgZnWSiXd8kh59MVKDtqX",
  "key2": "5utocjpnKGMrZPs8UuaoKjcjZb7PFGAwscDdKistQ5K8fLoszEmRG35ayHkW71AyDsXF6cXXoZyu1XwgQCRqFWKB",
  "key3": "Hekg5dWjJUFZKDBCMuW2m1Zg98d1Kaw1vfxXy5NN197Z9WeZCkLAWa3UCVsCvqxKV5BT7R5WfDowf49nX2HYiUP",
  "key4": "2M1KpMBmHyLkez1icqZnKTnaCNRivjMGWT6bBQRc9epKXb6oBnKBUMrYZCNGqAjVm1VrDLMFxMuyajUrYosuS5no",
  "key5": "4Cyf2A3PndvzJT61SY2dCEAxHqLCixYDnEb5Esbsikf2oDTFgtX5wLy76RpwzCiNdjS4NRUeFmu7P9JBaXkvnURd",
  "key6": "35oBtehKUaPparEQq7PTHqVcpA23JTsLgyHmZS2sp2muvBstkb8ND89vXuLmpZaq7JREnWCBLz1WyWGnHxUfeiJi",
  "key7": "45426YUaxTcLKKwowshLHLTZnJC65enCdWJktbLi456zVh2csgycvh3rc9XsEFtNv5FvcBmSHWWkdg6x1z5PYHyF",
  "key8": "3TUzqunqNxrvNm6Y1NVwpnFrBAEj1W1jBAj41sdW1feoh3Hj3RLZd9uhC9fJowsp73KKs2qAtW6Vc8h1Cn4QC7Re",
  "key9": "4KsxdzPAg8mwA86TSvYnFanKD38JB5zYuwMCsg9efvn6dev7MQMgS27wswqk9FriF5QTw3dx3taZPHM6GbiVEDc5",
  "key10": "3vxqoRR6uTYnveyoFMCGvsnAqipp9rKbkePpf5w4FsR5FjYkJxHu9LapQuzYtaB5J4pnzRZSDRFEcEweQ4cUspcK",
  "key11": "4euHaxdN8vBrt1fgoZs8B2pxSNcoDsmTdTuKQsAigiwwbXjhmmHhbn3Zzx3Hffj7rMFk2knLzYsGFKC6czi5Zqcp",
  "key12": "nNqgyhPYdzUm5Ajr6c6dEzbCf5kwHq5TGjfzL3n2HMLtNrEHpbBVWxjMonL8mGVAsxLuV4N8r1ud1qjKBjBtPXL",
  "key13": "2pAVDQNiS68zj1xRBLAS1Hcd8Ur8mtKG3KB2vBitDfDi59bxj9aM5zajL5ngtSSeo2USoWj8H5cPg3h5pU1hYNKv",
  "key14": "2EaXxv7y95AjXEW2X1EMuPPZJuUFwzD5pM4HEFwT5RxHi57o5irEavQs97FK3R5ERJRWgppqag59zkg4vFyPDtst",
  "key15": "4JCNG8g3JZjwfvys2qtvoPLA3bUP3Rpgzr2fN1HEyceYLS9YfZW4eKvG5kD6mFKAh8DCsfZzfLRtXi8mZeKQjPdX",
  "key16": "5hUYBfecWnYSRSPaLB5jsCqt8MYSpNXs1VswaS8aDXvzs2Zjoh9gjGAc7fAACdYQHSad4JXdUmygH33eqa5L7fpF",
  "key17": "27Qb8bfEb1XSaJYGTBnYF9o426aHMNLDaow4VQikzTpHLsx7uNneHmQxu6oTDbAixwC8caMgxPqpsNRGowaei69j",
  "key18": "3oqsyuNvyQUesV1kuv3VxhJv1dpbYuEDUMN3HPJep6k1GyLcusnWv2DSpjZCPhppmiHULRNvgvZzqj8DgpvCF1FR",
  "key19": "3HjhVACrydbBBeq4afYgjESwwMWQJdp7UNvPMskVFsWcPbkf94s7eg3rwq8DcTVyKbSNd7hAdvKmrRFvrHMCazHj",
  "key20": "3y4PjLDq7AiutofGi9ZMGPW2qe52eu83im7g97fJfJ3LGKA56x93httjcXngkrWKevqGXQY2qBP1nxjsomSAmjYi",
  "key21": "26pmZaV5FSTLkxj3dT3Kffm7jKeym9uSomBxhotovgGFcZ3UqCPYJp5Wq4zWhyd1XywZEUPxm8tKsVDjutisZNHo",
  "key22": "29BTdzHsVFAVGbya1JzvZHU97eUsZR8yudjBRjdmvt7o2YU5ie39Fh6BsbqgbgyucJjvku3c1er4oKACaR9NhmC7",
  "key23": "3qENR4pwHr7uMDXvAFGWbpJr9DvgHxKEVRwQisWasu5oZoaFZ6qZUFxYmn12HtMeK61cxECYX1zDC7Se9ECZYohS",
  "key24": "2Lr6eUqD6pnrMD6FSHnR8ikXfFbSFEpyCJAGNUxWWygUYnWzkJqfTU7niK767WuV4LYBDWd8zHUCfH2ighzLnkQR",
  "key25": "k75B4X4H7CCtZZxMEy6QrBPZTT6mXuVe6tjKVbeWGt1tZWtiJkzSsYBoe6Zt3jqjUhk1cTbATXTepCToRnn7J9D",
  "key26": "4RRRbaM5BRTgEvYQTE8Rj19CNjmS9HvEaVvzkDSCG2gjVJV7eHQXhYfMZxpbk5A8SBQYgWcW1CNgcUD6a7PG7FEW",
  "key27": "Au7FvWEw9MZQVNrydgFpzJ2KcacQbXCAaveJPcxhozazXeENNH1izb7pq4gUtaqXCi5zvjZQx4xyavTELYpxWDh",
  "key28": "21puJk1b4yVY1y37kLv6sADgsmhEPkXkUkbfkj3axUEwZsTYmT8L4Dsuy1mDajZux3ZQqk4gSp67rj7Fs5vaifeU",
  "key29": "WQgQs4jaWFcnxSa1Lr13zkqnvCPsK8ghqWVbuEwQjND3QEfa8oinZf9zQ7zHHm6YULwEWyNwNh7u5fzguKgBd8A",
  "key30": "ni2x8qEX61LpmfBRrDN15N51HdLRcj7GramZ5upmbUzWPagHoJfPNkZ6QCQeWEoHmhVYPtwpygxhcZvMgFU4KaK",
  "key31": "5r8gF2gx3LEixwreStY8mjTMr6yAxkhvinxkJzUjxWgxcRRksGYuxPGRaaCSAD5AimEWoPEoe4ycBr3QsPTdYBuY",
  "key32": "5JAZAyHv4XBMsFbavv31oZSy8RhmaQHLmrbG6ChppgKDtSEQbLHAZeBnruqRnRCFYkDnvuUGUoG9uz21NArqwW7v",
  "key33": "5nYnqV6ShVNCzDDuufNYETVHCra8SMQi8Nr4Chzn2Lhv8w7L9a3Qb5UT1gHXqeSfGJJ4FheSfrF9VN7aTWjDnKRX",
  "key34": "NRKk8kAYnX3WLimR6uvvPsemG7Qnoigw7UyVwcYhNYsd8ngVjzxHGNH37FaVQCXYx5i12UEXLsXMQC7fpRrcvsW",
  "key35": "ucMKba9iC58geLwxEyii1F5aFNnYj976aRmvTyUg3pHTKvg1u4fFrseJPrRRru3LQHexYbbG6hf3eZuVYv7MQnC",
  "key36": "4pW8FdzAyxwddB99mX11i3LRfnHbExTuQiydd7DTnC1G7pSmsrqcJ88aFKGnG8ekf7ZHY7qtJkxMyyCqEeczem5f",
  "key37": "RzQ8LEEyDux2X3sHofMDn2PkAHRqG1dY3DZXV5otg3SpW813b4tLrmNPJycWFX2rhduYvoYtjy3wA1ZjVxvMQTh",
  "key38": "55Yv4JDDYukLxKZwDn5xQ98swEzvXnBHv27rXSiTHUKbgMVaoV1sxeJT6fengac1aLSov2bKYzCzTii2GmFCU7aN",
  "key39": "5gRErdgvNc4YPAMdUw4EF4sBLsxUbG6vjNxDfz77c4TjdXp547s2wxS7WZe2mo2BVoic511p5NDRPLG4zhKeEL5e",
  "key40": "2zMkZKA2njgdC6bkv3Kym2Tu6EQLsiuMao45U84JntwJ5MWhuEVvL7jjXSkWWu9nkN2qxRVwzwHfGySc4cw9wrEX",
  "key41": "2S9CQLdjTT4Hd56qZhZoNKBAMXFG4P9E4L24y9x4Qp3sHkMy9FvL313STNLQYxhC9Fh2L1wvia31nEUWX8Mq8ik4",
  "key42": "4DtBxcqLkaQpMD28P4KRW8R6FtBNKUsscYSaNNAH332rFmQQZDHfyrepYnBjSaUyNxPEchEviA2vfWF9tJU7q6va",
  "key43": "ar7gMBmmd9sR46dz9k2g5yZrf17dmLt1FRNRePwVmWy1T4JSytqstgnQsTma5PKYrvzHbudR71KdPNePqiuHK1Q"
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
