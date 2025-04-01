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
    "pzFSpBveEuAf7JuXYNaYJc2j2RNmMZGi6wGFuSX2uvnPxbzXpd6cG4HANhwLrEHfgg7CUFQitkcL5YUx1KPTNAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjrsDoSqU89QQQn6uPptuDaroT5pYvwcC2ZuDB7Zcm5xRH91D8ixJZFUhVCdGPSxCNdY7863c1Cy3EZQ33s4fJZ",
  "key1": "3yvQaPUyRxwsQX1N8MsGiemxA5JR7MG2HDdQFqBf6y74WEx59q61qBiCU1FWECGWbvEjXkqz9VWfxVvdvExxqLVV",
  "key2": "5TRA9jMULjuCNd58xfBcaH2QYfY2pwNjYgZPwMdLYHatHq1WzgMZgxvY9DXb8ucvWshM4YpoFBw4jXxp22L1BdEg",
  "key3": "56zq6FpVENS5HCzTGzfhD8ixARPCvJFfiogDmt3FLDqgixKtLYEinWqLFMz9sHX295CJTZgr3wCjEkttyWpUVP4W",
  "key4": "4VtVqXwCtdGpDxixUSsisi83EMg9AiygQq7SyLVQF9T6LzGLu4E7f7Jkg6VLWX4QMyCVjNhq9zeY6jFd9kN1Q3Av",
  "key5": "45qh1CmDyuuHmGTzoyg5ZS4NQdWMRgP71vsYz9LBbw32DwD98r3BSu7We2zryZrRNmoTc6JeUd8fbhazUeaEE7hh",
  "key6": "zJiYa8kU6G6LFjHgbg6yJXKMFof8FP1D8je3aiJEs4iXDhqsfdaN2e3tx9bxCPetYgtVuMFwRtENoYLhRgwvVfQ",
  "key7": "w88UMLQinBeSRgrDqg3xDp4W81WU7ziRTkgZz6BANhxx6eoFcbzusoG7vbokkDAyK3huk6vrtApVik6Y3izmC5d",
  "key8": "231a5jAMAYekwu82ZVmrmfcDbSgYBkAbbF8LAWwgruiQxV8yBL81GKyaUboh31LDbdBJiPr71EtytubbETNHPZiG",
  "key9": "AS9821z2RbtKeEuYCQcgGDTPct15LXUVMASrT4dANPRC7xfAWt6AGedDrEbHPqkNJNdEqinhzFr7LxkRR3T9ayW",
  "key10": "36r4rtT9SjxfC9g5Eu9tfsjCyQeYTRYwXY2RNZpxPPaQKpZCm5RFcKbYkkThpLZ2fv9uAmDftQ1YPZSgovDkHYmx",
  "key11": "pEDbq9pZaA1uxPZwChjskw4vEAmvMEx9eNMRZUzJEWtzusRZk1jVdvkFt8XFS8R6jsswV1RRqWXTb17uSCFHJSj",
  "key12": "34v3jsksZ1FecPNbFAMDGquEWRmQfD6kedcp2CiDYReHMLJZC8ueRe9xGojZSxbZhstCqLFNWUcrYsm9R6X7AqKt",
  "key13": "3H7WPj4MJvD91Akqxe42VqPMK3DMWufjx27bNytTwDwzR9TgwoonUsXmaW7vZ3zLfMUWEkYVSuzYqqqETiPSozFG",
  "key14": "47Q2syzNjLvxwsxfDPTESmTynLHWeSkjVL6kmS6xR2zgbM8jeqTjUA1wJFRXEjh47gHq7MJuawjJxF2FfCoDGXgE",
  "key15": "3oZWrUZmWZaE5B3vPAUP5fG51nGW1619258K621bDn6uJ2tCFn3Ry2FK4Sc85hgFd9UigL5Mx7DZWYg34XdKvVLQ",
  "key16": "4VCgZ4k79XvihRhXSVXdWWv431tK3ewMFaRf4TBV1vG7kYq9HbNQwL5Veia89W1dUa8A1vRcTrJXuRf4dX7MbBxu",
  "key17": "2hitTygMXKR1cfk3iDvrozxFLxGobycvFSa8WvayZ4hYptfUoJJ6BiMAaT4dn7fyr6yNnBN2k93nxkL2nF69bRqR",
  "key18": "wZEzY8pWfuiZbCX5Wz9Y9QdtYvx6MNDjW4Nd1iM8RLAqUFCTLSA5fq7SDWoLvQXbKjiSctXBkAyARu4gf48ASD2",
  "key19": "gb5NuXMdhvqeaztgpdzePrQXXN39GtHrqthDdrfBAxBc1XkCJ3f8zTaCrzvC2uH792f2kkNb5zdWQ7SxMKhHVop",
  "key20": "2CDWfzzp62E8uZ35capneLdG3TXEfYP8dfCha9iNbyrNSoJmrphzCznmu3ykiV5qowVBDmgi8hx4bMBxYTjtrJBQ",
  "key21": "4wqxCseXZLH8MW3RDqbvjmwPiN2S1tvriVWuXvXrpzQT1HufxNKcRwu38CjWw3tup6E957B1VsYr3QPm8QzTYpmf",
  "key22": "3wfBWbU8j2zuvrtLPnviu8QigiWpbih9pBKxNAnvhkifCoYAChJWgnFFywTkMrp8Xq7iFaVu2fA1988ZxRKQb5b9",
  "key23": "2Co9WUYQJX4ATxyzqvecYhinofyCMA8FqtCgfFEV3TJ37ekq5FF2S1mrnHmYV7Pdt5wFrSDUmEphkJPwtkT26TWC",
  "key24": "1ACPz2nZi1Lj8twpmzQahhJ8xKaySj5xLRcHhnUwLNfWLLTT7e6PYMSHWDFgkFUSH7DFZhuNSuMZ1QDU8q656dx",
  "key25": "4wBELkhyy4F7dvLLdjfHEaRAaPqLKUjjFbkWpkZjTnXGREntRh4gwsn8QMxrFNf9ewAb56UYVUccQTwzptq9mGzG",
  "key26": "sCxQAybbGVacpjKp3run6ntSAQHxkoBUXZThXt1HQ1aM82pWYS5GwaXPanaDhLDEc2BXBzAwZRwQhMaU4g11vK4",
  "key27": "2E5Nffiqa3fwFnivAg8HZM37YvMgVenRQY4kKY2Ez5P7mgxY4hBpwb9rHrf3VbDXqkYwcxN3sCaE8E7gY9wsR47B",
  "key28": "52VT1coEj1X1jbTrpyL19TM8xUavtqX6Q5bj3VtBTxbqoqfCw5hxGrtDGBznna3dwZqks2gPp11C2uoUM7Co9s3j",
  "key29": "2PSgnf68GXcPGhjBLaijAdM9H1PziymtDYU783VS9oyd53Up4p2Ue2Tnoka5nksuCq6cqskJmP4vBaheQKcP6n2Z",
  "key30": "4Q39cpPTBV5gEQvAKhhLcM8DEYxEbTdPGpFN2NDSf6j1HDf22dxP9zkthgNhwdS2MXr3JMyfbcLEwxZdmJ2BjuAD",
  "key31": "4By6LPDdgysdmMDBXTKbMZJQE5yR8CLddX43sQpV3ACL7DxJA3DQupQ9H3AkwRiLMQGpx9oEWMNNxEt82L3N438V",
  "key32": "3U8d3J4rsG5xe3MASp2Xkxz8dUQNqFftZPhPUSNrvjd3Cq47u35VwsrpkGoNjHBChDF6ZoXVTpzzAXUqbzPpfdAA",
  "key33": "3m8N4RXF4ySederdW356ewhmCXSNDtvXNfVNi4eGqQVfZMUdksKCawr2muonbiDCMXkL5DuX8FAs9b2otqYXdAe5",
  "key34": "9oUh2iqn6GGeWvstFEE7iYuyokX1RYzYGeN6bycNXTXwVvrxtD7Qx3Li4kmhKxj5QRRNictKoYbFEUaCte3BCQP",
  "key35": "2pgJzszCFoj1jNCSzd1vX4NcM2ChHv1Gm3wCXTpQ8tpyNJif1MhjAF62VJm8fjq2nN3Yu19zLKQPCi4Jcggkj6a8"
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
