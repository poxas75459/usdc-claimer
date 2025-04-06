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
    "58mHuELuzDVWP1hKSt1i8uXaFaLKkrxKKG4sg7AfJS6m1HxKSQ8ZFtBfeRPqiKuY12CLc6FdL8h1EePVFNLB9e9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNk8vkDmxMjUZDDE18feHFKZ5is2HJPpcaTUfU6zHhHf8QMwBFXKFFWnTAeySbmMM6bpFCAmryJ2Nw6hH9GJ4Sz",
  "key1": "3Np8643R5qwDgpmJFHaRFgLHd1QuqqH8eC32D8MWoTYCAwgcFp9v2u7z7kB3xVUpmprdgSQkvmFBE6XoCXEiXKxQ",
  "key2": "5GNy2ZFDvSCqHicQx2dVKTipZWTXqWYngTGbeFB8S3m3nTDZh4M4tgsHHvPpdm3hRRwofxaiAyYPDKLKtTEMjraR",
  "key3": "4hGgQf5jUZj2WiDbTS6PvCPDCykuz4mtsY4i3BoFFfS2wHEx6XBQfRtMtiYr1fKhcAjJ6QPTxm4QEwGLRRfTih2U",
  "key4": "3NjCdAHoonKqixYYHAqg5Xcc9Gap7yU1muqZvup3GgLEUbr8cLvUjLWj7JhSkkJu6JGM37znFm9tvofEHz3XNvZ9",
  "key5": "4qnu8D6fLcWGMMN617z2jpjQx1TpZkZ9fTXdSDYotSRq13t9Gdi2EPYrCA3EJn5nDYFR5L4gLrocRaRWwKoDSrqr",
  "key6": "3bid4kv9kxQwPeGDvK8tnQy7Aedn9KeGHCd3ZvxhyaZgGMJACDKPomxUit87RWCw3PnwDA51Nq2EYPKBrQ7h2cqu",
  "key7": "3NGgd6BfVBhBR9yLFs2ttjANkrPiJVEo3ymxrmVrLogdzQdVTAbdzBG8hXFAMQkqojJiBYDwuHAQSLnR5TAyu9wc",
  "key8": "2AnUZgMLqQ2EgbKMhZogu1aTddv8Hh18rFeZDbZRNjm2RtFZLXCXQCQST2qPwL3Mg9aTX5myCmwdzsAje6DVjaWx",
  "key9": "2FciLBvhZzB15JRd5hCSU64A524knspRzQ8UwgCydd19RvvwpMuhdbSR3SKfycAZsAnoxhFSLpLnMj579QtQnGRF",
  "key10": "3zzhk59hRLTYuvJVtbbSsu5NLrcBh5ahJ98pwcR9EwbunSk3cRHLPLNK7PTvtiaH1spHHyWTo14AxrtyPKxAsT8Q",
  "key11": "3ib4SHfdjDoLyZGj3Wi2YtNiPUwGBG2VPUY6w65AYLRPM9ZmZ95Nv6GsYAcLMBtS5A3c7SE24hNxRkmjC492uGFk",
  "key12": "fimTeKiN7tt9f6qz3LVeH6sWjpvJiyJEbmtXudopBVAGzWN2y2XiumhN2tNePykWWkDtjtYE1CnahhYv4bHHPkm",
  "key13": "oNHzs6hHzbbYHxc4ZFHLE21fJyiRKGb5KVdT7emf8ihSjZEGzTii7mvfy2JGM9iJ5jGHXWjDqM2ajYKEUfY1d46",
  "key14": "3KH8wzrUF4xaWamt5iRwmm6k2Sw6VeSqc7C7g4hJSQ2WJ5FeNxFWHoC8cYw3o9zn67DzxwP8DykBceo7VDgpSdUw",
  "key15": "4PvdBhRSuZLPiUsf7dg4uFMLY46BNmGuyh6ErDCQL7WafiLSHfhrQg7fPjQPge8G1VrAjemBRUYgALpjcwNBZDvH",
  "key16": "5HFYaN43C8bagQC4bvjEUSgsyY2m4y3GCBi1BNw9uvjRj4yTu2cfERSaBFi5LbXqd8b6reWXsSxqXpmm1rgK3ZFJ",
  "key17": "3a3AcGAYDSSZ3HtzSftq6fhMwpPJfyfZuGCVwf23d4aQyVvK81GqJZAL3dKmtksftv7Sat7C5MNjhefu44AjneV6",
  "key18": "4TmzdtrjMgzsNhHeGKmYmU5vZEBRgGf6nTY3Gh7f3oFDCJEwNTwJApiGxxiK9xfdFoSjXhu7WErmjsudN2z7gChX",
  "key19": "3qR6YHu9rXyWrJ5v31ZNC6oyA9fcvSg7XFUnCykHPzzXXiS6W9RLMiG7oAJNUuK2dVAwq28zchp3voGL1DPniKLZ",
  "key20": "nQizdRArdmQsvDXGdnPUU9oR5aEVNP7yeh5Qq6JtMwtgs65qg36gB52mA2r9Bg8gjWUGWKKE3dy1wY5YNcVcYhK",
  "key21": "5LGbZpSrUWcppGtxU43wSD7NMq5Dxc4EbK3ThRodVboZoCV2F15CDGXfTnm1HP6pJy7uoBwsxaHGdLRSCcnjvfj",
  "key22": "6g6jFZ3bDAcQFMPhyBB1hTPUE8D63YamJ6No3EXR7YpKfsXrGJfcvHhndXKkFBRdPsW9uAozjkRPNhNRyWtcpWT",
  "key23": "2DwQ3Amc1ppVpCMQeBwVoJMHJSRCfmdCnaLhvAaNC8Dt2j62ybbwmdWiMf4LJnd9QHJ3ogRckczDy4kER361pPDR",
  "key24": "2AUtskne8dmqYTvGJXdhB5NbHJKmRR2SU9VczCcyxnD6MZj2G2ND9Sn14JY8XgJGsgSGbxDZNq2EzqXtHZChhv3i",
  "key25": "4Jp1yZMpg889VjFNyNQNziCm6jYWFGWRVrzwsNtBuVgHgHjsgY5rTJAH7A5YviQZc3RFyZieYQ59j1K37JBwJFKS",
  "key26": "21BAJpqGmHu6UGGSBc8NXbtdbpw5zAmKP5kiVDcdciWiXRFHxa5DW8JY7BXuoZogrCnApABA3eJ11PoYZaa4fiRg",
  "key27": "3RZL2pQJGyCttZFZf71ch96Nh6M59AJJcqEFck1Py4PkqmkfZhj4bwcWcqL3PntepyyS5SyYjiiwjZtzmV8VcfGi",
  "key28": "4RjN5Z1ZCkipUmeL1xQ6keWUeKudFzYqpjzuzoxehU6je4Nq9EvdnSEZkZJcNhr5nGLNcQa5VXCPmaopjtwTmj4B",
  "key29": "59mkWzb7XyQKGfmHg4YQ1UwHcTyPywufvM63neViJP2C2NTQydU78nT7cBYBcBQL3kuEER2JuUHz32xBieBHPJsB",
  "key30": "q5rWHUWjAUYuoht8rU3dRwxM9Ax5qJEFB8wn4WTd4QHNL7t3K2YGwPLCFDCGRge9wWfSmaukXx2sShokCnTm8ff",
  "key31": "KqaWMHex5iKJxKRv6KzeuPL6tbQQkGyUVfcYHb4Xixv6DjLKbFdJGJLp5pBttAv1jRA2Pp66GkcTSnfEfjKutyG"
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
