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
    "3vaivYf5qbEwho6qVX7JqfE4qdoGu4VZsErsD3fMsk4Tr6EqV3fxqHRSXcCeubLdwBXcCVVFoAmNcM2QVNz19C6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63oPte74CsjWuzWuD6XXLSoDVe1KBPJv7qHyjTo96PzgaT37oRDptYNQBEoY4NQsvhsZ5xpGQpeCSQqUJiya5718",
  "key1": "3Gu8WYkPxm4p4TcYrahByAQPUoK7ogqdW72rUeyePUPYoa384tC4YAkz58WSMVKLyDtDcBwMKqK53Lk29gHTQS4Y",
  "key2": "2jj9XjpoebsNKV7dTxF9vDMyiDyP4HTXCbqWKyapk9g5tXPumVgDJYp9iY7JvFk5SUJMGZwZjPZiWXktf6uKXKLi",
  "key3": "3vtjxNEtR9Czq5r4HQ6QFJPjntituuAhwH9A7HTtQC69CABbes4FELcARgsLwEXk4oeEiaEQ12WRRnc5jjJAo5xN",
  "key4": "4w3dBrLZfCe75QCGbMBo4uvKHEDniyxbcr7cDsmDVhNifXEZf8azVc81z4gB1qL3h4wkiV76VK6HKJZkJuDejfj4",
  "key5": "2UXUZXC5Pcz35ryWgiYHFxWbUKYhqWyUbgYDVXyq1jotJQCP2DmFoXAWmHzaFgs16P7AXm1jcz71Nvze29g1RnAc",
  "key6": "4uvCWF8x94W3GXH7eNnTNRWdh7B37pDdznkyUfAYzBSqnx4ruxVFcGLQfhSypxsAc5TTTWRc1G9Qa86LjFE1nj8w",
  "key7": "2Stejd7Sdq7b2jNxsNAxc7FtJip6RgeWrqLVta7jfTadf97ogbqKnMtYMbbM6MkBjsSYT95CLZpUzHW9LTfYofos",
  "key8": "2LtHrLTWUc9JG997ELRQVT5z5CLCqq1Tmid28NnP8Ra7igNdSMvJTC2SzqyBvtVwBJK7EtLMxASEZcsBfLy9epcQ",
  "key9": "3ZsRsxxgfXi7s6m16PaCrW7gUnVbWdhXgNrx1gWMgcfcED6WaBwMRNP3n64BQtqk6Y493DkQAQ6CMY5SiavBnomh",
  "key10": "629cDohLh9DxREWzNFYviPupwy4qQFrCNYc1YRVXdjJEqcNhAuDHNcWhUgiADDEfCXwD6B3uzYLXYqEEq233NSyv",
  "key11": "5iqV6PxtHWPCH4Wgp334eHSbnGWzcP83GatZi3CgzrA5jHHiXwPJ3JxKbMa8WhijRMMMuShRXdhp2XcHXUuLDwaa",
  "key12": "2scciu24GZv2APv3wno23Lxqif3wyzTb5qpGoJG1UWBdMLvCFymPn7MXrEWF3ZefaaRC4Y8qH66dbZbmHQhmMiAg",
  "key13": "4pz6YCJ1w4wnEsX8ErivhpxKfdtuQQhsbaLxSLUHNvsTRctEkoF8Z5WEWY5yZqeu6pnc2xPxhKXbN1xBF5QAJLFD",
  "key14": "4Hk3wa8f7F1V7u85SjfM8VpjUiNZsAE7qw724uJ7Vp5rMrXHGPinrMPp2EESC8qRfdaskDNT2nP3Nc3kZAYLP4ny",
  "key15": "3vHusaT9PUeusZpYPCmerbsb4UN2Qz9vTniwQkq1D9DMQTfhzGYAD94U1Zio1qcCzbc8K2wk1JZDg5u3h4Fzhorr",
  "key16": "rABmVg63ejWarzRL1pLU5HahMeoaZKacgmawzs2qbjr7TSP3kxTtpAW1Wo81n84MphnCWSzvqxhXjPFiZMeW32T",
  "key17": "25Gtp7tFsovVePsUgk9oUTYWkEfEfckKD7L2neBsBQzLGYrE8jBSUBAW4FA6rA56wtnFHZx4NY5Gn1bcuuJS7K8v",
  "key18": "wmSXvWxGBtnDepHxRC4CD7vkph6RwLcgTBM5jhghs7Wc2rLx5kBAQGtAUEw3tKjB5tn9J7fx4vx83Ug8EbXMr1s",
  "key19": "3PxXLk3syNQH9QKQvgQTYMScPTpxN1pffd1ymR1QBXLbaBMofSUAg6YuHyxcZjR8AsiQTmP6HBLugTmZxNrvdbaz",
  "key20": "5cU1NfRbCWPbKKtwt23deaZHAznizdnEbmN8MEjBfVQ7NYMSRjZvEusgssc9XrqzBcN2zNXWUMo7WQUsEQpzQdwp",
  "key21": "61evEUdbUKnR7kMUjHNvh719j1ChqaW6WskPztZcsqLFBLVkA5mpg99dKV6TpuBXGj2emsKnTqDJXirxMRCm1tL",
  "key22": "5qxY4TbjPSipFKUCj4psDZezbBJeUarCbQmgkyWeu7HpEZYVyt5c2jYLyZEPSiKDNzd2Bkgy9ZCVfenGHoaQycA8",
  "key23": "2Sg5qYmeQScepDRpxGcW5hBr7v23pcMZNxNUtxHb1BuzaYhaFqPocJe4UpRTK5No3gfEBzxxdGju3uSZ2HisEsyG",
  "key24": "633f6hH1qaALyTZ6ikt8YLEWk2o1nsm7CLanAVDVvWDVg9jhoLezrucFfcYV8ErvAfdkzdwJX3T8u8G6ftoWJQYB",
  "key25": "3U8xciWxefMKmDW7Dh1chdc1scXLZonYLyMByp7kYRanDEQvK8Ddpz7HrrGXx7WMb7MVFdDpbnwxcXwuzECprVxE",
  "key26": "2HtpHfEm3cof3x52HBtUF9bSh7PUcJ1ZXM2XMQJnjvru3krFPT7yLM9thmwZwJ4tkvMRZiXNnNpP9rsLmTkC3aVR",
  "key27": "2ekEdwo1rgGfUT6ePaqaG7BSbhfm7ntXrBL6MZfdSh4CZAM5T9JfQQBJ8gNT1jsAvw1G28S3LWGP9N9LH4bmbb8m",
  "key28": "5HDeqPQjU1FP6Z3b9DmXFxFsWTcAggAFKTut6qUm8kHMNFRds4syMV8gryQfU3gzk1XSySmwPDtufJS7zphMXH4j",
  "key29": "sM7qZeSKPerhPnVDRVJ5ZszLkx3nTXQhF8GJE7VKx5DdbYFLhe9jD5j5rhAXHDzZbTCq1mDg5VxXCdR3u9YUxQ5",
  "key30": "USADR1d7rK9booV8pe7szstmfkF4fWkDvwqaQQfQWWNArkYgxWQhsaj6GNnzFETryjxo3WNf2H7RSkoxsQM1iVn",
  "key31": "2Wry3dRJ8xH7GU7U5KyBVYAf8t6aMjgame6YURa4ubcPzrzU5zHpKuMkooVfVxJvhvt8u48w1ECBTtwnYcdjefPn",
  "key32": "66tY4T3WHqiYbjvkNCtGSeExUiz4VPGiZbaUkaJz6e8uTWHaLgCq7AiaauDdwzHorpPBrUJg6MiwmVAy95r66gEe",
  "key33": "3o67EcH66reNBGc2oWBZw133L4zu33mpMGnCbynNFJjUyAnDNG6GEApVFmdcKC3jvYyHfGidG5PXMyppcnHYFpST",
  "key34": "3L3hoKHxvrx4gTR77Kx7WQwxifbLyhVXQRE8781uSouXkTN4LcKsTTinyfBSHUjv3zNpoKsriW26X5enwPF7G5Y",
  "key35": "4Euv2XQxhHWYLXZ1TRQ5HULA2oYiKvMx1X8Mkj7NgmPPnmdKbcE7SAfQFmRwyP3kTgo7ML8yviZCgPEDRUq6hYay",
  "key36": "2kweBW19eGQ6cHNxLRdC1gMxZxcXcyjfozauo21JYsNh3zkPDM9yV3vDZwSWhxu1xSjsSgkZ98rGLv1dK28RwX2Z"
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
