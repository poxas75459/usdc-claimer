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
    "3Hh8MdGQvgcUqV22xXPjgM3fahsPrXRJJn5mXBdXTRvGUcQGMxKZRGzBdAQzy5at7BdFTPxD1c9G4uDeoB2NMn3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s5TkFgLTZqQqrPf4atxL2kE185J81U5UTFgZKySwceFxVLtcuNrbmCza4GhYngRSyuN9MhVYoUCgfXRSMdt7hwQ",
  "key1": "3HjuNCCXFTG9HAz1D3j2cNNMMr27k9EVPzErQP4jgYqiKjVfNuaaB6YWhgD6CfDhcSZpzPqCpAByWtkRFuQ796B6",
  "key2": "3a8MtXwXPxRrLyB6pdw3CJsL6Y61qbByU6dv4PR9H99iU4Brvrn6sLmyoJjWygYbkJqyiVW7DZpiyHm3aDAVfcad",
  "key3": "4JjK1RVSe7UEnT9s4i6Yi5A6xHCHQE641dq53bvB361o13JjzrLVBh34QFqdYN4VTCB4jjNof8tkmEb75eqBUqHT",
  "key4": "3ERPcCYiF5kthF9UKiR36kxNsYcAG6MXQCoVLcz76TUUorwH299NvPtWuCKVfJo7s9GL26Nn6PHKQ7EkpTTwcGo7",
  "key5": "4Z4YnzXQYJoPTbQedxZRGJxEoSxDEXnZZs8i4bEqkViW5wCHa2Hdg2Um84svjEHNrtxjGtoHUyckDJbM8EeBtsZo",
  "key6": "47qSoiEChkSGVTZXUWW4bd1zSWHbRpbo4LtRt98MJi9W5i88VQJuSp6NUD1BANqpWGuB3dPaHQtxTfA2QgoMgaAY",
  "key7": "vTbnTqTAv5tXS1smDoYXLdZAFZHtDk9LXrUicP8tBkKagVd8T556sfsWP6SuqCeSyazYuYwCayaEDaHW645jTfy",
  "key8": "4dCoyYRjyvogDwW54hEd9EDxf1vriESarey2Ba387n62Cc2J7yBVVFZCGEYVp19TjRGFYz1AahMypxXDdFikwqG5",
  "key9": "3Kp3PDjNyikdY7nmfLHfH2eWDa3qj321oc9pwjfEnusTHE3SZmW8Tq44QkYHdpD8F1Jx2wfQBZMi7yGcnFs4C43b",
  "key10": "4JgriTmjKjFWApWPdWAut89J9k1ELMe8PsiYra5ZT7Ye4FDGqg4RhMG3AbLw9eUKrLpr75vVreeh8B3qMvhBDQyo",
  "key11": "3mqVSTU6RdTxuqbadFVtTJJ6NZFNzY6Yj7SbzBjfMXTKPSU3tzHBTSX1gDMvxgvUJEL6yRRm2yeUg7pTyBUpWH1f",
  "key12": "2Y4wm119JpJnwsW6qiAcD8SufSb9MMZayFGzy4dvPGdeDS2hoX5aQ2kMNeTCGwRbVGoaYdpVZFye31HtvnM5YvD7",
  "key13": "38XWyPM4gN3SsoccdnhpxgQeeLiiJgbR5gxoEPrdP4QgCyV68fpiWutG4bd4dvvHmxj8KqRpJAkThPjBTQnmQXax",
  "key14": "3KFr4bR7Lzh82vvCJ1w3eW8meCJgMCeUtaLttSRTu5BwbuZCUMWZTB8L9oiToG3fjcHYGYgG7Ytto5KtWNVnxjwY",
  "key15": "5thu3MRDJdm15g4VF9yqvcxSP93j2XDrQ7s2GLfQFcYMRK6wF7J84jLMzUYGUZuqTS2bK2nRHZ3yp6rNGLMtAgHF",
  "key16": "2sALv2Cvaemve2o5fpqfPZgsyPGuYpwtvRM6r3sQJwgcsJzBV1bEgMCQDkJKuup34w6PdeAjgLmekqGAQsN4QQSz",
  "key17": "c62ZJmyDXsCikbVa9LAhEpfGntTkTZmdqJ7PoE1HEfm4kbozt6DnPCBp7Nr3EeMunAqPajcDpekuh4ssQnRsty9",
  "key18": "5aiVWyLnAd5ngXmrRKTGcUttkMe6Eo5Ke8QVfp59MxTpS4nKJzJtGeqFrnBA67VrdqoRqapA3Vafeg9ci4WR1zfY",
  "key19": "JgsnGMrcdNXaYPDYDnqfYX9RqFtUb3PDfsr5ZFJvfEsEUB6B6MxPLg1qMKL5MeQPWsVY9tNPLTohnduVDhySjEs",
  "key20": "3ULJgkRPz9JXYADEYFraexASwKfH2A9uT8d2Gr7TfoBqZTAHbEHta7RgdTXmrr3metXYhHwvNHmCR2LqwntLSzKH",
  "key21": "4YE1cpaezevhGVUSdTkFeM7XMuiwpA3oSZ6iijwkH4UTpKmY5Xio8RU4Kwn2F18TrBa4ecCNn1guLSkTiHJq3Uc",
  "key22": "5ZBgRjz442ytpZidjdGEy4V1rpfQKHdkSMFWxbHHLdUTy5swD4GLMF5dd3sGuQxSxamhUmD6KaKtWKJJnUjEZmXz",
  "key23": "4Law4EfYnvv5pYdLzfUj89sCVx421N76uvvQDk1ShvsXDoa4QKTMcpmtABdyBG4PACJ8UU4apgsjtpuNDvCMhZUK",
  "key24": "2NrCpJJTqdAWJ3j88kKeDJtcd7kUTMZfMCfie5XNn7DM1ZGA8gTCExmcb2fkunXU7m4YYwY98vkH9mW4jLCcBgf7",
  "key25": "4YvNRD5KascJEuZMkJc6vyToVRXaKY1x6b1NBkvwtzoahm8xK9DherJ2ADD2qoujpQii3H4e4jrmkfGASdHrvCZk",
  "key26": "573UX1FbaKyBvtZjgBGDCjBeYVNbHi1SYUh5isZ4mdXg5aqAQpDDZEnEea5qzU2MaGcs99tCTh3hgBWGWxRgADUt",
  "key27": "4LGhpTiuN2mDt6nk3Qyr3c6p27FPSSJ9xgcs7zwn3A7AwpD7UKTjbE5Z4e13WMaZFqCnHGxM3TwqjbSF7YiEvtb9",
  "key28": "TituQsSpZvKyzNzp8o5GMDdNKU16QNbSczkBdLfGPhWpp53fVkUsELw8Jww2Ydu8QCusAbUCaZyUsMvxu2nsZyR",
  "key29": "2xuZMW7bLFuumWYUqTGWMk9gqLxJeruDABEpzNkqRztcsD14o5u64uDbajMo9M3QXVsWjKTaDmpAjJX5AXNxwGG5",
  "key30": "3j1XN8tb5X9TVYWX23Muz35pqcPJseTcsU8w8WSwCNUScR16xTtaEXqDeep5dDgJdn9FpRkgvqugNQ8TU7EgPYQR",
  "key31": "32UHcuCb3rpJ8SDiD88HdtSbbGrgxBmvdLHrk79HfiahY59dtSJ1EkwUxNCURSQxaDqA65wCBJDPyjS8y3LSKhJs",
  "key32": "r2SJkh956fURN3HTc94cy9NzjQAHV1mZZUNukuN3WnwKoeALd2jbfuWDeH8zzGzMkQgWxjqu5x2YrG6hoNXSH4L",
  "key33": "s5tWvmJvPwn7WC84UvmsAtm1CR3VghTdqiCT4XsQHPnABSLz5xm7wW3MpTPm1uUDMb3BogDEEeBQ6eMKx1ainDj",
  "key34": "43VJEddrspYMS6bfLvQmX1KJC6eG657r243GWAk1ohsbKCu8sYEWZMXi1REnHTCxR6d67dnPbwgkcaioSZNSj6yE",
  "key35": "2rzKT3vfUSEMKGkpHSrzU92TmkKYs4RnAjnYHo7YNAf93jdPc188HygJtBbJUQVyxRfjSWef5vJEBcSEGYRDYfuQ",
  "key36": "48K49R98bRBYoHEJgDnPGktp8gMxd8BhXS6foSFnsL7s7cdSGXwCWg45xQv824nFtbtNcJyMsCUfYYbPQKoTPDtS",
  "key37": "4pm6yBmyc9kC8BPrGc88au7VqFpYTJHuR4VMauSES5JNC8cVNWoHSdMzGjhipxfCNQHwd53SxqfEEP6PCs7FpQnz",
  "key38": "Psy8ottucKgqby7HEmmf1nArevDyFkpB8itCk1ZHAJQHb5BaLgfPU8W4Ft55fVeeBRg5aEQoJzdgXnQdqvF8Bxk",
  "key39": "3KfisX5eMrEqd8EWmS3XXHwcpFeC8r2fVUbMK3RmNRhVwx16zyww9CGrb4YoT83RrcvBjppTtsepoUTRMvyECj53",
  "key40": "56nSU6wqqxLR1MrHg3CgB5LwTJdoLSXLkDeUTi2mYD8QtoK13UcNT4XqvNHzjD8pLzveAdLWAifx7nfZu3pBTsbR",
  "key41": "3knH4Hv1tZvdoUM21HkFvFYYS74rA58rSVSa5opEUg31bjQb3GDN9DLJz2Gzkviqbf6cX1Gk8ji5GgF5hn3AwPCp"
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
