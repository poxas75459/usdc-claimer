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
    "2GGhCss1wmVEmEyiXAm6E1hRgKrXnUPmmVBZJP3NHsWM9gKqVaWTj9M9s8DDaukEjeM1aRVX56X2JW8v15DtW5Y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KKzYcvwjHU5LqNc9TU9hhoLuDSBJKnnAT5WhR8YH73ZnonXRNNNrnY5c86JAdyx9M2ZAfDPUWMsvdD4qNhPF74s",
  "key1": "61uVDp3SegtJLNawytXDUcXCwWXoGYovYEWuYEcftg2QUbQtHfPPNJ9sw2LJtAPA4b7CwwLPkMDDbXjrZLxaCCHx",
  "key2": "5R8uAnk4LLiCBDZ3Zu5kDwDdUbRytysuFB83tjpzwNwwYet6eC6ZJUPzmwtUdEtaRvbnEPfqYYTKjjGPJR6BCxzh",
  "key3": "5ijbC26TsUa6gggn44wsgTYjiHWwHc5AXXAdD6CfGqsk8a6GCXupNa4unpVViqWEJPwWeAbdjMnrh9dHtpfCLjmC",
  "key4": "oG5vWxGwjRKVAuBwPiTAXp7iYLGLTBSaLvocftB2JD5oMKGrNWy8BUpW2ZVtRzRoztP8xmyiLzsV5jcyKwyDuvS",
  "key5": "EqFCEkwpUrLRW8hToxZKX88NaRQdHTEH2HPUDkp71qUeZ8XEbcL9v4ukQMjCmVCEY5BTNueYseuyE3jJ6apiVzc",
  "key6": "w2S3ALQaf8HcSAv3WF3e9mYWRtgH4GxYmexQNTT8QJFN3GYqaKwYadZzCBwG8tnCaZMx8UdNU7deNtgF1deGE7i",
  "key7": "5BP5ytFaK92auk5AZxcervMcZa26xBkgkPCrmWDj3uTJKwqtku1J4KEdJ42Cwk62FcbG7pvvBGbkojjE6hmXknqb",
  "key8": "4bGQp9eEkz8WBakv4ZtQF9zAMeSHpJu863ATXny9XbyMSnwPYLQ4VnSecjcKqsUhrFY5Yr5qTmnBVvbS9Z3f21sF",
  "key9": "2y8mQDrNfbmpjLQcRhqpPdbmhrqyxKgg4ptDWUKXMqPYDgmYBF4DH6PZ5i9G5iTGQFkrCUFL7xBreqgU8GSh9njK",
  "key10": "1PkBotpzo25E52w41VCaKJKMrsANqXAdCuwypjhZMqnhytWjsvqN3ELtCYDTDU1Ksa3TaxGnU13rvDEGoCtiQaC",
  "key11": "2K3sqGyV5wCjjSdVe4stmuwrhDkZ6hxcb17B6Gz6xnRXm2nPZQMqBMWptUNpapTFT3cwEEsyZMKUehYWBo8rYFqd",
  "key12": "4s2KWEneFXAk7Jzkiskir9Xe4ypFyKz2qvP6sZNfHZpJhPZx9Pt2xeseSSYoHQjF9t44ZzfedCQ5pKKbL4jXD8Vr",
  "key13": "229SV3ZjkPGB1GF2nPNehijTYPXdxYpfJmvj1eVYnQWUkjB57dErbd3nameKvc1KcxmX7DkkjSuKjXiYqvf2KzAZ",
  "key14": "3tXYzSqxvsgVsHFTJ8JSyBLFJJXz4PUR6Y4h2VtJCGSxdAdbQjomz5JztFR6WSiEDSFeFMEDGKbtcdn93jd94MXo",
  "key15": "2EsRYsJwa6dcXKDg53B4TP7z89RsmzBifiPFoxsCrGtfDSejBMqDj8mwbxfYiwUrAfHUzAHE1pR51kmniMSQMRTe",
  "key16": "5sLzHa3ogaoge1LL78t1VdaxxwJrLjiMPwQbTqrmcX2QRas6qPyyeZvF2qWcEPGgtVG7tcDK3JkGK4rKjam1ycmy",
  "key17": "4pxxag1qD9YZeosSVe1NofD9cjmcvmh37n2BvFbmW7mxphBfLfjXfjuUpLMRYbdXszYj3Bo3BNJRhZd2ffYHEbgY",
  "key18": "453HmDhhEgXUkC8uV2PsmFjtrNJUNYQYT2f7K54yTBE7JGp71ewn48yd2Qb2bL2NkaDPTwassvK8maz3c34utjis",
  "key19": "5UVDSVfUCZ28svHN674fC2dSjXp3Dt4TDzmK14STLchJXzhoDBvqcd9AHZsNDapyk49HGpForLHkhmcE1oMYThjQ",
  "key20": "y39q5xdGfdjCYDip3wvZf1HyX45uD7xCsiwGpK6haFwt32sqswzjVZzw7T49fCKMeQtjb2oMAFF6GCQMauqFBoX",
  "key21": "2f6RE7ZFKnTVtq1FwjZadPpLD4QWDBjYAriGUbD25ioe1GbK6EpETp2ZRs2cw2PFea41F3YhFYyJPHVwDToLnmEY",
  "key22": "Z9Ds9vB5DLiRyXD4nyMusHD92J9QnhQfr7NkzSqnWyduYnGXfmU1VCFqsisB2riNSPrkm3CWqQmQP9xitYHb4Di",
  "key23": "2kFNXw3sEXE1eaTZQfQAgsCgRBtAhLgJgDoXFYKfAGxSXu1Bu7NU5ctmjtUn6D1p2h8eMekwf7twayE1n1wEBeK5",
  "key24": "5MiW1FC1F5mNyVLmNbm6JgFR9rqnqB9YmidGz2BJumBjFjPCQTqDfH7adQDeSYf12h9fVyRLdS5jbx5cqkdEGyms",
  "key25": "4V4UhP2VbqxK1vThUcUpGWZ3j3QDVyxEPAWMQ76r4a8tFFi6m3wWWzz7uSsthLt7tsD4br2rpeuibRS965MgWTVZ",
  "key26": "4G31DfdpN1HqecAYEMe5DDi9fCmJr7MAEm4Ady2gM45ohvny64CYm9MRPPY9YWQo8mtnou7Nk6Ft5jsCe93rGPsB",
  "key27": "27X2EnAUicw6rrANHjJVuM5dyhWFkBWUPpnWSpGkkqRYoYXFx6US7ZjyT9NJT9ZoLmr6cyjxM8ZWBup3BcNjYHfY",
  "key28": "3PffETKZQruC3HrLGdLhVXFwoSHJ5nYJooTcFYMSp6kFocBr3PbWF7sFfMw9XSLEAgFz7T55NsLYAZ3ZXWfa7M3F",
  "key29": "2hgFKNoXF49V2K8nfbZcVuHsXCWbK4DqzEyaoi6FdoroMSbkymyeFmkA1S4zCt8VBpEGkXorXiD1shszDM8jYBpn",
  "key30": "2w4H1XyXVecVF1Cp9inhgPZVeVK3bJw5KJECXCPJYDLw2DePSxauXDE7uVkBTLd4vRfEL1rrizLXqvd6EqB2J55",
  "key31": "64S3DFYrM2QbjVAW3HLRkVcRCsQgUB6Ts1cw84YNwbggnhgzpKr9DLvWsAgUzCPmTnCxdMTc3zSKbKvc25bUdwX2",
  "key32": "3aHvYuEpPHVjKPYgCmBeYL7h93ateQmeaJ8k2LZPvKH8yWbxaNnG5RxQjQ8zn4yMQCy5WXRcvFCaBqRX7KMcv2st",
  "key33": "Jg84XHye3CtiiUMa5KrV6dSizTc1TenoKEd9RRwbiMpG81fFx5gK177FDSwBfQaHK2Z6YUjx7udQP9uiPC2QYAH",
  "key34": "3EY1qCLh1dt2esq8YXZfM3HiTQdu4goyw1BVWWJwEs1QaPpLoyM9HBEK5EQBVFuteikT5zfhdiQ4J2W6meqwkgFp",
  "key35": "5dsazpxwQjVUMfNscHSEDNo1FgjCc6a4NAeFMTDxopgwvh5TmZpNoGaRGcGmv7XimNDB9SrwsBVZw2fnriYqfzeB",
  "key36": "2NgJonALQR4eGdJUXD9pdhiKRUWj9yvcQRZDf9DTvQTzrahfE1atQEPrBfNv7JG3BQ488QeuASFKUjXEajoQKVbD",
  "key37": "QGRi9oaU7WCo8bTyDbbvgWYtaHxq3mVECFtjsSMYqTht1vyaPQTLx3qAN2Uuj4gfqjyKnPGkmEpBDsqrm63UYdg",
  "key38": "4brrZ5uecGtGLaycZdHXo7dT6R6ad4MTZq5dAatN9dmZDwi1GA9LQLa8Td32uxkcX4vKLwUkzLxsqFT2kQbMDqzG"
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
