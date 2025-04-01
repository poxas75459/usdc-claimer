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
    "57eTJr6KoaDRE1PTtG7719KcsvTn8u23DBWEWFd2FFgyGw6doXZsjcSGooiWia2T75z6ki3zWEB2YUgdQ8wJmtAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KdZ1e1BAhLyap8dHBRXu9Yv2BfnrrqFGevdz71zZDNrBCzsum1mVGswLv2APZBRfFoK5MUDkMuZxo5RcokCFKtU",
  "key1": "5FJ8joVvTgV1LmLpRqtdQjCts8WMWjqhTaxQrykDiT8YSHARgxfNbZ9ZijNesL68qnjapXc1BqgvawF5BtkhwoLQ",
  "key2": "4PpGmx1L6R91WyHrx29hA2UJEZty5nQ7MJ6xKzj3adN5ARQ99A4iwg9KqYThhGSChTHZ8336G182MxEq7Rf3LNcb",
  "key3": "65Y8mR8mpoPfpoGaX9ojC1Cj1QEUJnsRWAnHiK9np21mPajPgUYXY4MP4JtZXTjwTQQUVtUJghtFVjqffgw6rw9d",
  "key4": "34CBL74uAgdR8NK2hNRVEZcdJgdpHkygE1EaAQmXVAzew9jKfu5qqxk7UZoW4MuD6dnc9bt9TpojmfvApUNjJtTt",
  "key5": "d9HEhYEJwb6quXqWCbfHHmKz1MoZ8PF7jJMxRF6YjGih3YMG1cqRarRQ2NKuizndKWx1KdW5FS1BpauSf4Q2nGY",
  "key6": "3DuFAJFyDE9nHx7WfSmyRYGUyz8F1bujdSgabmEzcEEoFungafCEy6STqopHpUUmqNSVod7BYMbZix3xYPk7UXyh",
  "key7": "1oEsKxMVL6EhZDHv71xdG8t85xfnMEw4YLbC9zYSjGbr3YxhR1fpReBLmdcPYcLAvcbPdXSU6PGVK1ceeoPCuJc",
  "key8": "5Ppm9b2iQs4FoDXRnytt6C5YxZ6HRLNPMFSpzNedDHHRPbPYFfQTKbFuk8AFB9bgMc55VRDTnTD6w2XQdQSJt2ce",
  "key9": "4GTvcz3bnM3AiBmuP6arp7qS51TvY5tuo7HVCLFcAwEPJKdUBPuTjhmrwwUEEN93i9rKcWZRjCbTzgq58Q8sZxE8",
  "key10": "4xf3TFgxDNhhXZc52yCtsSYuVBYqrru792SpdGqzhV1xB5RMt31g7FeGYGVjmW1fsFdXdf31E2DZCBhiFBtSrZkn",
  "key11": "kzyEa5E1PxNFtixVdksiaJ9X4BMbCgmfG4yv7UsqLcF4NYEwCjSSCRQrFe5guG3Jki3S5qzFf8Q9NLVhF46FSLv",
  "key12": "5bdRpMTP1u6BegpzJJ7zHWW4KFbB96TngBRgZaJ9m7fo6ESB5xSrRmFvpBKyiik1Rp5PY3XcLuGtxnNen4cyDwC3",
  "key13": "4zXSJuraUBywMD2Kr6pUUv2sKNU9dZ4vMngeyDjyNkghvZrJL9jtpmbh5nY76vMJQfMAh1R9SV2KadZFf65TmUoz",
  "key14": "52zGgsy9KcitNJkQ32EbP2gwZmry5ugULZXV31hh5wf38FYKG1qeagDYoN2D6evPwVjnyCbPAWpFAScnm1BB4uCg",
  "key15": "3P56TYhii58RiMbMtiJhjoUmXxsaq3n4Hq8JqY7n9AVnv1KJse26sazLx32axfUxKtjSaL2swtaRR66ts6x9WTjU",
  "key16": "JjcXqejQ1y8VDXYamkEVhGtHHimekRsT2KerAT9eYnHizZTfsDNWMTNAKhiK1o9jtVKoaFPRVwQAdtWNX8Kk1pt",
  "key17": "3BmEKnR6vLy8tY9wmsqQzuMDZ7DNkD39JDsy1qb8iFZHEVd1MffcY91WrhGt5wgQkdQnEujdGJVG3Yzf4UMAwHua",
  "key18": "52MfibEgMnUxSBjDX43924dhwKeGTvJwxbagXeFnZB3G9zpVR7ToosADaNba1i6FWPMDi1k7Me8xdfxTwoVKJE62",
  "key19": "3TzcmD3orpEU9ujCXsveLh9ZK7UrYHm9XgKQsX8xmQmsGTTA92fHXtUvmZp7F5dY7urhVXdMcERCiBgkFMk1sVPt",
  "key20": "Gqotp16Pg4sat9B5DUt8ufjXd6hHyW92kXT3MFTwQQgqcNrtSdrek1pEnM8yzpdUbhE3e1npu3PGQmd7xbCcLVL",
  "key21": "31jjDrB3o9fu9wVRnjFEcX5RjKvYq4oWQfHWu2rxP131aX3Bp82edDeiHncqi7KcSK3SSiRWLE6nqc4SLg6XXGhQ",
  "key22": "7pxnEdGvMdmqXioogVtwPBqhGtKhep2ba5RWw3yXHRAJyRB13CCB5aewm8enLLmMB3WRL6dCWew5oFXZgaFu9qd",
  "key23": "424TJLdnHZPyogVZ37MwTQQLTkB5Ji2srsvXZYPpTJ3YYzcCXVEqHrTv8KHGZQxmpFUbYgue4kktgyvWWdDKSe8E",
  "key24": "4jnNnDJ4N2qdwwrKtVGmCzsBHmdfZRapahkdk78CBkKcxYJ3suJyBLKLA1qvLWAZX3WBRDCLu7WZ9pS9MXK2iAh",
  "key25": "5g4YBQ9RMN5v4QjtdJjz8dHDbADpsUqzF9rfd8Zq348yFamaGxqQ9cBuK3tPKstbV67EKRFpg6NF5RevHpAy1fYA",
  "key26": "23QejLDR8pbLPRjsQXmbbyXsZVTH6mmGSie37fbvXfbrRtLDn6LfxVdfPPUhmoDU2TPV3YuPp76srvShNLB8oREm",
  "key27": "kJGgmkFWjc4dvVAueYGJPTTQX8wwXZENa9V6mAFvQqR4SowMwUExX419buScekLH65yAKBULG68r6GnffsXwb9R",
  "key28": "tQwDztTL6QV8bcWewvMxRJQxJHvTWePbsMj1tR7SL6W29NHuK1HjBnWbA2XL7uN3mvkHo1xVLhodpt4knNFX4HL",
  "key29": "2adFmjZuoV3oqcNgmNThESdViZTTbNHct2pXhioV7iKLdaF3zfEy7scpd9etECs8Rxv8FV6mgJxfHuWoUjqkhYfy",
  "key30": "5rAWeVXMprD9kHWy2KoJU75AzevdxwFa9bsyLXMJP6W4vr71ugz9s65DbMKnM69Eu4LHw7iVczzjk5JW6LCW8aU3",
  "key31": "sJFKyg9mytpE8oP9f8n76CunyCih3thZB36DivHayc8jJTvD5Gn3vPYXHt9utUikWkp1VH44DH2fJykGez7u7GH",
  "key32": "9Dxpx5CDrrxLWG18UbLejQxuiya4i8CqHqMso6CHMgZVGuxTX4VGukpDFmKJkPH6ocdSLWREVGqovKhv8p5sGL7",
  "key33": "51yKxB2ew3RDD7J9k1iUNmxoLNi3AT7Vqek3SanMhv4k6USx81Chyq6Gjpyagyu2FtqqpifVq39FAKaXadBXzEPd",
  "key34": "tDXTXYmXF3rxtfb1pL6ZMMPwmqcW6UDuXGGwB1UeEWb1dorqR8DSTmp4EBYZnpND4bioeytgBqjKp6HZD6KGGDc",
  "key35": "2QQkiCaWe3TsV9ME7oZ3MBPh4uBqx1ypDx2w8YD6YFm5V7aALvd1HzEDPcVKGZFjiKvbWKvRT7gadxb3UgB25KuM",
  "key36": "F8s3sSQRGjhm6XCb2RyDfrAjS7XJUJnZLqV1pjpGwHbnoz8DnFCCgAdr97prCh4Vv9djHLuA1ycrUGw4UcwbHXH",
  "key37": "BWDpMNYtC9QSqkQ7AKRGMrXYW5CWsH2wx1JWiwY31jW7WQfmbMX4kHo2DM18acLKi3jrUYMg7Y6k6P1A2ARn9gw",
  "key38": "2UgBFHuWS72QQ7ppquPnBuBHRoyK5srj3wW7ZmRQHa19m5QhSQFNym77eBki16tqHYUVP1YcVZhFu8iibS3BTUw",
  "key39": "5bKjrzUdevszd72JhyeEoiMpYCDNU9TbADzXmgFCYFMexkXRe8DWw8fR4v98BEPedQoUDiamfGZPJrA8sFqtTyCB",
  "key40": "vWqfmFRumusAJzVZvzDpYg7SwUH3CFENaSQeDwVQnUW8S7WxjTga1YpnsbX6TWfQQxe7syZBKcmJeMDxM89x29S",
  "key41": "5TopbTbUCR9z1hDoWKCL4iUTujEMFgfNAXZYuTPUq2v6eEtaNYZTqdbmcJdhqhxRqhMmZNserxtNFSpRphnvNR2u",
  "key42": "DgWmR8krDLBr9D3W4SttuGz6CCKzLkNiUtA3orGwnZC8PmbjJDee2dCnAvALFxGf1axskxvu2rEWRBaAkrGuc46",
  "key43": "2q8iMb9ZPajQLD47CYZ9HR6ieqR1QytNXT55iMCwLePtbhQ34aAKTpQxQXMDS6tbQMoiFc3Tuye6o5DgVgMW7Pwi",
  "key44": "3zhk9J7ewHGuPDwCLq48RC542G6d3XrbQR9VHtwnYH9jAVVCw9nTtoBdiW7nxfxwZHA5xdWxEqPjgtYWEP2fGca5"
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
