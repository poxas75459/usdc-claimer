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
    "5t2JuiBUMSeMHif6dCQfNHrrryFPtqX7WzHzAnHkvMqaM4ikwxDcuCNKNYxbEETvPk8btLRfCdmkx6o7wwc7aGW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RC84Awr2Ar5AhpqzakFu4YJrvvm4Wprd8dgXzfTDfx2PJWKyNHg62cj4bkQKvDVseNcwATknZRJC8LKMMNGxaBj",
  "key1": "4wya3YWE8mTFTVAPNyLWKkn9z7S8WXA8CG3vZg8bQmF7U5N6yRS3dtNjowPH9mpqAbYVHoE4whCNDq2vbW3ov83K",
  "key2": "2Eq1i93GJR9MUBM2oeMWJcBn43pPBBou2SH57fmxF4MW8YXTCmE4yGxVQZg24Zs18PPvLTxJKvzV4Ewa4Dh4pUoE",
  "key3": "63CUt8CJ4WHF3QYJ3Qu3N2GDje22tApMRLN5qAwbpphZjuyfTXax4v2sqRr1dmbhLkFrSjEfyYFF1mADvQjXdGH1",
  "key4": "5moasyJMHYEoHUoKFYmFGWSm55mPcCCC8nf8At45Md5v3TDenNG1qdM1ABjHK4hL3c41Yiq6o7WdhnsviySd1tof",
  "key5": "4Qqvg5LuzDvWHzKbX82CKNpiAV9a2kYmngXfbHMHunGNFRT4SZjcE6T4WZzzgLa6Qk3tfysKPeC9JSWR6fvsQyHS",
  "key6": "i3FeASAdcWby9quE6Doh5xmmxLxydeEaa3qGjsMNRuoV5ENq5J7w2xdWPweYaeoxfQGqipedVDgai1BWnCZ1E9D",
  "key7": "483YwUVE88UHZ82TWyZ363Hbe38LL1WZKKNPrcp3vX32Z7e4NKV3wM9eq2G4nmCeJ97vM8ZMvEbFpuMAW6NQpwHz",
  "key8": "5j1YRSYbGbzFMFcntWxpc9Bwsjyd1i1RKTvCfEEZvzpJjqxRTmLCUbrAK1ErKs4aiqakniBsg6QvHBiDzgFi9LV7",
  "key9": "2KuERNhTyDgcpAobbUvspfmWeq7acWevSMsjjDPx7kpwKT7UQKspDirg22q7pF1teDLG9YJ5ZHZayb3Hr7mimtry",
  "key10": "Avf3cQarPTPCKxyznYe8TCMZiJ8LEpqXoLEqVyf9JsH7UHkYYqkUHhuXJbcmBD7LUUjs79rLHyesMMyRv5A7BZr",
  "key11": "25Gx8V9DVQAwGX6UqsgBL6vkE83py7Udj78Cjux5M11hVE64f5uS1ksvxDtr2SP3ia5a1zVCQUz8pq5Ra3yJEmzh",
  "key12": "2x1k6LVqa9jQrHZFczahzSixCnisViZeZ8QwzMjJSFgBVVeoygeUMRWv26JwAND2V3bWzsA4RQdim2rYdwYkLp4w",
  "key13": "5Lp3dJApzrkNAZaYYjp3uzfesGHKbQpGzkob5vwt7tG3qVJ3FqmTZNExdHBeVCK8rBSnJDBsMNyuGE8Agkv8mRr2",
  "key14": "5y68GUJQ6Mc6hKjY8AcKxRhJ85CAHC1eeu2FUBBqHeWYWyBYammbrzh5MTp1EdpZ9pVWfna1MjJmYavvcL2B7cTX",
  "key15": "XM5SPS1oGtnkbm1uuKRqSmF5cQ2ycoabmgR9q47QhN5Mi1ciDSkiYPA4FiyQpxivHPNz8GZgnh8bpVAHEyVrBiK",
  "key16": "5CC7yvYwz2zKNiDhYCumTJXeARgbtxn1WTDDHaEg7nTttqSKYyXZA3sX4H4TojVYN4B35Q4gyVKiDexUijuiL9Uo",
  "key17": "WWtCYJp5ioaj2uSu8qT6DF5PNV33Cdet3nGJrvdifYyXouj4u6yt4nsBTuEKTyD459B62Hdxwf2m2FbXC1sb8HE",
  "key18": "4u4uAH41KRHvtubKZR3MWiT1WrQith2TKGFi4q6NsHQHQr4izHNh2bK24pysyXhhFdzVvQDaBAHbyN9aNxfKQz8t",
  "key19": "5ZX4anyiBHeQNs7WitGEvtPr3qjjVEcas5QqsZyKGqk3gPHqK7ZwqAQsqGXbESvsU2Kh1qRR5dAAzht5jwvKCEvd",
  "key20": "2qQ3JNTSCGPs88d3j3Kr86Qo9MFpdNjpbGSLoQEfgPUM3wnhj4PchGYWVTPiWVDibs7TDYSHcj7vR6VFtK1roAuA",
  "key21": "2GqvaGsScaMg76WEKYw2yZJZro2KbLkKp2bGXGNg99xMJZhCgZ8duEPcrqo58Erq2rV6X6JkxJah8uBHc1A7SRYV",
  "key22": "494JLPS6ZTrY4R69oH2o4krYBakR4FF68yqpzqYkqwCUviMMKvYgmgPomcKQfwd24kLwnEABvCtQe98sENinjK9o",
  "key23": "483bwDnyt4mEp8ApP1PBZFYz5Du5mjTmrwP1p6SqobRs6JNiU8Bxhh9wRKN8ZMxEtPCVFxASYXpK4sBahy9E9WSP",
  "key24": "31Th6cc2edfdhaccYkdJqd7Xpuoso2X5oR22vrVaF1xREa57Bv9LekCx1e7axprNwpzH9MwCR3udrK1ZwM2KERHs",
  "key25": "3He3MvLePYDYAoXyfypct9oHgvttxYbsGaQxppAcGE6SQ5dYLie4pHpyk4yUYC9RHvrYMpjakPJS3xJZknp7LWnG",
  "key26": "3or2F4psZ3ePVA4cJeuq3e9cwJQwFoTphNAVG76AMUdgXK1wvmKYeWDb5KjqzTpRZUbpFbnd6meYt2pCzGXLgnyo",
  "key27": "24xCE8DKGpsayBZpTHM6HcLa5YznrteCfgA5L7TGaQbFTLnGbSTYXDaDiTBjCNQWTWBG4GTLUBRH3tmWyUGpDuX7",
  "key28": "uY9BzURxSG3ZkvWPCNascTd1hmYv9MC9MFzDnbeQgR71UEXZ24qYg4dmyHd9ZDtfdVMk2mtxgPhtymaJAANqVGd",
  "key29": "mabKkUe8k7abwYT7pwdp8H2iXMB2FhUM43kbPjpVjNkFJ6w5MuJ33UnW2WzUymEwvwdUUWHuqEosPaXkVhXqe3a",
  "key30": "2UdNoPCNCjaKzLWsN94oxXb2VVK5ymnLvLZZ9eQw9EUs6Av9Dr4RuzwKS6kc7R4fDi2aM4GDx3kwkbesrS6h2WuL",
  "key31": "58y1qfBofEDE9KsRsS3aYGfR8HLL4Qi1k4bQLHXEeG42znuByJ4vmmQeZUvezZdGcAXQ5vJJFpEta2kWoRHs54Zk",
  "key32": "5rJssyiqLv5ardmVmMjyN1fz1MPbmCfJCSkcgTXAEqAJyfZBNtq6TDCA67qPS6cu7wE1r6tjNNUaDgX9fM5Lk8za",
  "key33": "85NW6Drb1kf6wDB6Z1HwmR9uRk2VuSgkDLfGAoi2soRg3mmdWrZZXaxBAVLNcpt9U4k18tei4mFJD1w9SSfhCtu",
  "key34": "48whbvhuEsqMX6gv4jZnqu9ZDRNyLMhuEfmV8wYcUjm2NC98M9Fyw3Ssd7Bp8pGvKQD4TRAEg9gcmCStHZiHKjDo"
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
