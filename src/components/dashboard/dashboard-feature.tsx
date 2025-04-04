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
    "wAnXYzhLfuyBwADHVGrECRKAPz9Hbb5eQ84d27NY41jcYDz5q8kDctUyqVTmWN7ufnaV7qSPpSeiZTYLr8sAk61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RsJ76yANuAaXE1VxdHPzWRAqUb7YmN8GkrPEs34tCYeaUAzUPjpucfTcCwyb7ioqUDpAkheCJVjwecPyYnvyjsa",
  "key1": "5pkjgxxCXxu9PKcbmKhS5WJH3dcX4Mxh8XRTU4TkHfFpBpxp2SGWFRZNgmCVHmmqJHRh84M5f2DoQUyQmea8bUTv",
  "key2": "5oyfcFKFAyd2KHhDRczeYDobNos1kExYrhZhR4NKbm4i6SbkQaad5kX52uk653u5sVg4UNreBfbrnhALdTtRN5PP",
  "key3": "45dyqN7x35BUTdXUERfv3EyRnMTDS18STyW2HaqQDpqXFF9kGy9Ym3dQRRKrXKGj4Yc5ccyRdW6FK6DyRRGdsrPg",
  "key4": "2Lj2akmuFX9DFqFnMzGFjRxwSSUtjXzBTVnUz5bvNVh3Mt8MPz98E9MdhcUCuoHoUysF9TdmHcR1SN7L2gLRkHHN",
  "key5": "5E6JTNZ53SbCpjjH35muNAcxJXzjgwhqQt9iuNVZHKCShKoirDtbQmi4jH51PzmTqskJJ7wvAXVs9J87g9jhgo4R",
  "key6": "5msgFikm88GNSuNT589FFuA75AZ39iZctpSHWp53upuMAPkf9B2QVknSu1tDzEt5my2cNGnZyaxDCr1YRAxB8B38",
  "key7": "5GN4DxSAJcGC9g8sWSMxaqPo65B94kzJeQzapj5gabsFjv26WqosqBs2FsUx7bARyiPqNDWDtkA3ZvSvCNTE5ZUb",
  "key8": "2TkJJALZj4fGSmU18PXQ6cnMs9opSFqffG9SmbkNaWYNBMS49xq2kmZ19pP1gNCxbUwULkYPAfeCpUTx5comSUCB",
  "key9": "5M4APdQcMJT7Kgdd4PXYg39F3tMChJRCs7TnahPBsd9yAbgsaAjLX7eezmxkgKQbN9Jxsd6Qn88nhvcBP7xGj7w9",
  "key10": "2Lt25r3HqLhLTT4CtmA1eG7vT8A1ZJXVXxr2ruriXowgs764Hr31BAbHhrGwZUcqt4obHCpEam8K913u5yQJLpB2",
  "key11": "BZB5bPpw1J4YoHvjaEtaosS7oe3VNf4jq1VUoWdCa8aeKNkAqgiLcnhioX6H7PCLp2QMSkLyArtNRfjWGTxxjEs",
  "key12": "2aWp2GoVWmTuVSRHrwnZkS2gTf3hydrdYzhiwGcE8fya6wtyuVziHF5LkeoCnGcxaNgvguMLqYzLEbaHdBnaN1s9",
  "key13": "3qqSwM7pwnbGuAHFC6XdSGkFVahg2wBHwgLyPfNkUcqRpEdyZfFyKiPy2XKF2HNCE7fyhZgpQHg4LT4RB1u5xjJ7",
  "key14": "bxG3kt4KERaJpoiVJx3iE1jfsuDdt6UL2MxV9VRx4n3SGa8ygG2rBid8nU2sEsCDzbFNYpTCyAf3fU1qDCSQ6SR",
  "key15": "2S5mShD4PBfwisEZdjEoth6AUV7PA98NfTFc9z9U4kij723gfSEUv9FTkKERaRmMSwXeSe8t6vwvnj8DXQHpDkEL",
  "key16": "emduangQsj183Caf2J2iE8874V8S4T3v35h5NJf7gGV1cE6irie9NnFhCbz6jKDBVtYLPTgpKyaWoXjr1kkT3EF",
  "key17": "2zRZgc5U9tTmYpK5oWAuNVpQ6Wn127DvojD6ctng91H1aJowf17Yaih6qY5QpLbpjiHQDtV59f1PPeNV6PWV2CHg",
  "key18": "21NEvmd2VBENamFAuq2iK23YDPc2kwjvE1KFBkKiySujpP5cA5exGJPWwyw89yjpMowmovZ9crWEZZhmSV4MJCCL",
  "key19": "5x2ok2dhc7Dk4hdvh2XrEBbuvYcVpvVAQ3mqLemRxdEwqeSELSEVBgCpDsCHSY7VTncaGuno5kyccE5futbERfoD",
  "key20": "4LqZsyJsMU6n3iK8VQhX229oNHXw9LQiFJreHX9Fvs8CE7Pv17fjJKqjyETeX6TWS4qzWP6F9nPmQ1PoV5sFoiGt",
  "key21": "2ugGPURSBsvh7oG949grzuz4Zsim9wD9QW99CfY2CRJrNddJa5aHXhRLAkssUhtorNY8mcZicVrvsCBgUxJGHPCu",
  "key22": "414pg2QYrm4D5NMkKfrFFmU1ujcKx5Pr5oGFE1TE7vQ26wqUZmMRQbEMwZpgu6SYZyCssByBdgrD3rNa2SoFUfbG",
  "key23": "23xkvEw9KRXjuN3CQqB19UUy2jhRbp1z23ZjFP5XNb8WEmAyrQ4F59A1A9DrSoTSxa6bHyjPwsFsnFfJErBUQFwZ",
  "key24": "62dF3PGJ6N4nrYKdb5CfWKRt32oowxgtKLEDeDegV6rxUfMKX3xw4BVwAAdLwchXRV47o7gCAXcnjvEExyNXY5AY",
  "key25": "5hJLcHoEmTs37mjkkSWXna7Bxrj8rXF1LP4u2RkG6AwsZqw33y1meVLtbAccJyDtScrPf19XPszQy9mXp9KRrjgQ",
  "key26": "5b6ZMbAnd3GpvPYgqCa5MqvkkDeqSnjJbvJsGhtEd5Tx959t6y88hJAD68iqnx9scqfTf5S6uhAn7rmRtVPW1Vef",
  "key27": "pFCgTAXaAUt4kPgCedByXDzGwhcsaxNDe1BKKSUP3EMkxDwKquVz88crrDX4GnuW3QDJE9q2axLa6i3uBfsudQR",
  "key28": "3kBPASxR64dtbNVFEgucY9Ux4iReBan8kkcRivpKRemXfb8qFMqt6DH6RFfb7s8bAF8PDou3qUo2CxmraREhbpzT",
  "key29": "2VwfJ6qgPbPBJFA37qkVnhZLzTRkReSXj82TXQCUyct3TLonZpw6h5ypN6Vb3TiFcyWqtCCzB9EC3fekS9pxo3YJ",
  "key30": "2AVgop18XYSdW4sKadoVwMxqc2QreztmJKGMtVqnMcFZdpGrMsRKEwmvL22Lh92oAdXpyfu9uBYg1vDxVFxovLxw",
  "key31": "5Krjq2xV73wRaoBgyQWeCRb12JVvxgg2UVNY2ZMgW6eKyxLspBVYPBjR1UNyHehGAwkjbFtQmPtJUfeLMKa39DTh",
  "key32": "5SRQmkVCkEvGSfKvRESgB2k71bCXnqjsSsZHnqdbrqH9t1pEaFHXB85Ab35HXdYkTY5ivVhd23HXCGHMHbLe3zNr",
  "key33": "3LsCdg8QDGEBeACKcRcsnwP2rYy1xt9tnVP3BFqvMasTjj5MdX5VawuHbjweXLB5etjEVKMtfoJSRHZbDny4RoaT",
  "key34": "2G1XoNkWSe3p29QZrF1M8CDiAtJMAv4EEoPvD23wPkmjHntekPv6UKYGZHhKFh1o3gVvJUCXTr62RfZ7poGF8kS8",
  "key35": "zuoXarMA9MSecUtYFWDyPm6urZzwLjdnvapycwoo8EKD1ZingbihXKt7ufvxDruLKMYJhhqHmyFHhRXWdM8tUPV",
  "key36": "5LJZ32ftxKTGE98rMCHRLeV2hYFsr9s98c8A8CA8QqVuVv1MbZN5AkZtubMuZgaxorWU3rB5n13PkTskCvttpQry"
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
