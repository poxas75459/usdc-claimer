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
    "54geLFtqJhvYWNNT9EdaoLspQutaCnSYgFgds92jRAC1AhmuoNkwrfkK6o8XJ3JSvm48sjrB78f2XEqRtXaZC4Wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TvFm7AXJoNq1SduFaQGDRDuMUKoJKGLZpf4LtoaM9wUJRdnE5YtQ3EyrHfK4tqssBSzZGVAz86e93XZJPzAYaj",
  "key1": "4gksFPcLM3L441zqNLhu2FRXS9ZumD63DEbRbEj7Rn28z1CvUkwNx4AbpLhFaBG982VmKfcqHGwpBxCxp9E6fXo8",
  "key2": "4JPHyW41Jr9Hm4BGFmDtdsprtNRjM2KdVGx1mNfuGrH3XAmLhZnQB8tFzjWkoLDfDCrxJP9shaM2r5TDqcoksEpy",
  "key3": "4RL7muBVaVi6Xa5txLi6ddqLiuNxwQhKqukijQ5HjBzw9ZPBsyqa8NZmrSpjGwRVdpWMtcBZNxi7WN2gGpLh1p6V",
  "key4": "5iXFcGchsmVNbcNJJuCtUQqDskxtbJfy8JiJrQyUpWxda6q9SeDq5TMUxJcBs9CxQhnB73HavLtBSrbFAmELrAUx",
  "key5": "35RinR2wUM8tySeugLx5o2cDFoyHQnyjBjYHP1161jujYMpRyZ83yBgtLVeE75csRDeocLQCTTyNaZjErTL5SUvD",
  "key6": "4hH6nuwunwpBrmHx9ecaFopBJozn7f2k1oDqBZdb2ro7GbQtLXbADpEK94iSS41p9JgCiVFQAkbAnCb3N2PVNG6h",
  "key7": "3BbUxkZN98mLb3Fte33Cw8PDEyCw5Xm1ryDUCpYH1JeSTqWkUzFLrASeTrE2Ap74xs1zezT528sup5cQ2TC5SR3T",
  "key8": "3zrYrGdqKtZZSjewBmVgR7jjMfEPWPjp3Y1hPwzHDFt45KvPyenGj2QS4feBRmHvVGHwJjtk1XD1HfVC9yhqXAeM",
  "key9": "3mtTiz1Nfv6EfPnfE1Q5cexf6PJbFvAD1gmrTfEnQhSRCqAFGthFuKNP2xBxB1hyt9BBMUMQ7vdCjijWrRwcFAA3",
  "key10": "2akQbJFjsY9CgyYUCHTT3KEbtA23R5bzDUkbZ3Dc25aVgEUFHxLvC7KeGg9MdTakzuxT2zDKxSSSsdtzW5qpwnNh",
  "key11": "3VAwGEhK6h8rcJ3uPFjRHTjrNJXhRMAusKH6PSQsaCkcHhhd5yrGY4dCraQrfXxELqkjbh9EJgj5aUysF5X9kdXz",
  "key12": "2WZmks5KuoQYz3DrEByEHU5jRb6kfMHbk4uNAzahUS3X6j1iWrV97A6GHojbAtzntR2kCzuk5eiPQUGp28hd5fHs",
  "key13": "2GYByyifh4or31tUoZHSBqf3phYPA5rAdpjWa8MFaXce2FTCUjndETTgebtoqz7RpeDY2njFPU6hdcXEBKHuCCQc",
  "key14": "58NksHkPeJ97cfXR61TLEVWGBQjNTHkDcdT83SMie5CzSWMwCDCFL5F17vDMk6Eidu4hYXZdtT7wxmFggtqmtV4g",
  "key15": "2dbKS4Rf9Qm4tGGpECfPUy1DLX7wLVta5s6u7R1UfKxACxFcnMdqef9spdVDphVCjuVoKBYi7hi7bUnAr25Zc3PV",
  "key16": "3GbL2FnmFYJSk9bCvSdBUvgvVq922Qyu54oyfhs4Yki3x7n6mF3n4wTPTBo2xgWBLML72LpLde8AKnQarfgp6m39",
  "key17": "LBzGXXgpdbZtugVfQQEF8x5AAAjEg2vLLqLvsEpBR2RBHs691eoAzwo5j9sYTzeqH1Pgp58nFAG3keck7cRXBcM",
  "key18": "63YFrKLxWfExbCfksBBHhvs9YJrGudAedan36JiH7NRpcRwqGoHfzy3FnS4oDB1wsN8oCEfYC618UZb4wFDheA5p",
  "key19": "2HtpriezpjhGvg57sDnFxdpKpvvwTcPF4myJxnrv1xodirrNNDhgBkt9yohqpt41Lapfujdx4ZzRJ1AEqVTvbr52",
  "key20": "5N5a3mr56vg2TvZpKEft1Tr6hGuipqXxbRXuS5FSpwUiZvihfc37WzR1Paee46BFXfSoj1vtbgRX9adE1pMjn1du",
  "key21": "5hGXCS6VLuQA3JA7icQgnaZRqczZeFwtBEZ342CV7iHFM7wH6GYBGLE7SXMjAVgTiTMDP81gbMUcqn45Xj5baghF",
  "key22": "2sVaACKk7qhpvAWbZ5zGXFHFwu4vnXoA6aBcDqTBabyVKs7Siha1mM5bkHt3e4PuW9RBKMBqdmo3bTBiSw31HcE5",
  "key23": "44fWakHU4rWDjZ2GAQSs5tX4ArqXzbaGWYfp67ijuqWK7fenK4mjyZ1MQWxTCDGVFwePq7WfjzV93RJyx2xrhyLe",
  "key24": "Ny2iHazvNZf4UC1GQDuHDWyDUF3HuTLw4oCYJ6W419V1kTqzceRtAfgwbez8h92f7a43S4vgaXayKfU5CDmJdju",
  "key25": "54NM6XgmpTynzjD44ChmEGRoc1DqPZBRcsds8yihqMK6dXe4g4EsqzZeVqtYaFuseTvGknTZp2Ykj3F7s7JwAAiB",
  "key26": "huTWWMvKXGtYjZGvsERkbSjgqgpNzpwMwaPdhF8w5AN1U4noDz5o85EAP9YyVozBdXqRG9TT5w1s7y7BdozEBzE",
  "key27": "2mvyToTF2rw7CZCQK6h2HfcS137cb1Y62NcPdBHqDa1GRSj2HqrX75pB1yQ6sdHFuvQHSDCP8djhwAq3BTDDAMd4",
  "key28": "fKd1RLLq6EALQi7puZdGkEPsWndqi3u5BaatoZ7sBdH7s3mwzY78ZRvJGx2KXjWSjftbEVkVV2srVrKaGobBU2w",
  "key29": "64aSCuV1edaccs8DVFXDSJgve6E4ZJVYSh2U9wTzG3ZTVMRyJtJptNbjhLatqeW9MMcn9t1noue2x59p6uyPyF8M",
  "key30": "SEzSrX8PBteYiQsy1aWqZhedtujJ3ektm5C23QsyvgPdwDudhUMigE5TC42VaY77KL24wg75JUSkeWzZrtn1ygV",
  "key31": "2RXyPjdqUjNMCFzfgBAAjD3JaKMYrukoQ7iLGPhL9FK97L48GPgcEYCCrXH2EYNRZ4R9uPdZjpV7siqwG4AYHojy",
  "key32": "3thcaSr16JZRgFyQQLennPr8jniJ2uwQpVr7K9haDBKQGPxbrMqmF8sutAY7UPnb3j3kXLDoF6XLuWYKtcwuTPGb",
  "key33": "3Lhj2aVQca8cygUve5PwGLzYufRqU7urGSHq7B7LFg1CMW4yp64XfnWpdp3tbYZWe5EqETEBpJeGFdy8qVfvn9MM",
  "key34": "4kWSTbh8Bqc2Rebu8sM8H23BesBdPrE8m2Deyo3FfwBYMeiYQ89xnpmGzkDN3eg4mXmUudDrjbkoC2UurTB9MKFx"
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
