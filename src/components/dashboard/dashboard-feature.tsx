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
    "241tsT5Vp8wuNdGkGToYWTNRbZwG8oRWkNwEpZFc3J4T4Ys6jDJD86NALJoov8ANa4rH7hbwFgT76FqW6k3i2Eiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzxEUQgX6cSXTpMmV2pDx4FD4Ro6Tpky19zvbMNtGQmRaG53GtCe6ktJpKRMwpUr5ZECrUoPLs7EGmQ1qyCgtNv",
  "key1": "2uj7KxmAbKSjFFMvdMZxpqXmzaVjrW6bqFquTBCiLjV3dswQR4maSQjXWX3ZrVN7DoRwbm5YPNqKvUVNHaWn9V4J",
  "key2": "2zKXrrVcQBsCKKSYeQh64VCW9RgEqVZq9jL4Ycj2pKTBJBAmvzDDubicXCq6zTNcpe73eQqcYNmhayDsghdHUJJq",
  "key3": "3beiTkXm5V3MQ5BcRajpXodyCt4FjVZyvruZuW3iHztNnybW5iZVqqaq2SgyoruvbcD95y4Uq8W1hVV9B655hUZw",
  "key4": "5vY7VyF5RxPGWTjbDAB8qwAgZNfJtzPX3cqYE4kPAabBxxYkP7Ub7aCT5LCjHVPVV1zqJTe5eZsqTXTKT89BtyLM",
  "key5": "36fdUkSGGhJG5Lttou57H6kpU6VUAFP36VH839TaiZiBAU2b4Q9BsixUZDRxZKXkyLFuw5m5NKvGu8L3UhBNKPyr",
  "key6": "54e5NhQa9vMpURg3QYH6eTJHYxvKtV22sZqf2TpN35h4kTjZrZhaeQ6fw5tbLmpcpCZCMEL3zWMzQ8sQZjV5JYJZ",
  "key7": "6213jTN4mjoucXiFDU3RMc94bC9t555QKpZVhRZmAJvsZX8R2vNgR7b3P8zGVJrwTsEjYdx3rCABYrBTpAF8QSmt",
  "key8": "3iDZ25ucv4hZDi45ZRY4cyn6JaKLxDNesPTNqoCjWCizBGRj8pBsfi7PESemgibdWcSgRsTeQcJzeYNqzzGh8Xyd",
  "key9": "2qw3JkzyJxMqDB3RKcvWditHNitg4wEp6fnXieWzYjtBf91MrhhLUg96tzFwugTR3DuKxcDkdhJxoSUr9UPrPYkx",
  "key10": "2Jt799U5xgxPWUF4tanffvYTDQaPE3STjXUvtnNqoeq6BxmiETcLcSkjQY9S2FGXxGCeUoQLzhyk7Hz9g3hUSeYx",
  "key11": "4ybUnggMEEHNQUM8GpNttbhTZpz4jthbWxrqg1RjBLRzF4pJz9fc7AeiLq1Lcmgxp1TCw1QKU7gaEWRJQmGFwFC9",
  "key12": "2uG85TojXoo1wReRSwnR88F7rw7YBTdnNehb3xq6UefcpHt1rTq2XYPF9AJzCTiY74XRrXsxH1EL1yF8GPHLjFy7",
  "key13": "5Mwp3rdbsUGRJvtqGd3dNVssAens6camzSEUQXjyKsiMivwcMK5LzuHtEKsrtaDkWniBnbTdCNnoRNZ1ZNi4DBxc",
  "key14": "da9b47Meg86rz8hUCcg4ZgEtV9EuTCYWv4GyN4t6wJ5J8vRNkKnEVG2LNjB4rRJ5jFpU5b9gfAQZUzuXXiuBv4p",
  "key15": "61TD32ALsx2TysksPNcdTV5iX8J4yM7FYWCA4bDAMsDYSrqXB37V5aCma2xX3exUvnQP3GTTvseGJ5SSTA6AWXz1",
  "key16": "25ABe5bsLnZqfDdX7wqQQfoBrSXjgxSerS3wxwrubppKiJi2wpuraciVHV2XUMg8oR2kQVJWaz3uVzeUYXB6uREN",
  "key17": "35Niv6rNTWDHsVf78wiWRvdQs9mzaqdatDgEHCPQRDUUUPQH5znMmvMX8ZC6voahFkCZPMHdZdBKP51AjV2ok8ud",
  "key18": "3CCMDF2poPhU7Ct12P6WMvqtmZ4nKiAKiVyxbTWb2JUQWoGaoymfa3koFRrcGS7BH4tqL27aNCSBrmBL2TenF1mj",
  "key19": "48WLknnLm1DWuQHPCpfVYsSWmqeBn1eXvKWVq1vcjcBvA2VetQSx5DqXFM7TQmJ78M36PcJr8RdZzQnXVLZCPWV",
  "key20": "5YTXqVz92bwttVbUpCPhAZ76MWiRFiSmcfhTeWo89apfCnL22fU2XUrUcX7yBrfYfTYJif1srSpxxmiSVEmqTJx7",
  "key21": "4mXvPvcALzMGmvqsaUoWWSRhZxF6HKMbLPrXe26wud7mnNsfThYV7rbxGpPfh3mbeghP8f1NQbGM9Dy4N8HSEZ62",
  "key22": "5RtCbp28cUBZBbNqVWNMLDP9qJbt5kxSeBaHLArUU14z3VfBW75PwBRYnfohnNn5PDDA2FJQ3mNNwebzutJ1pEEy",
  "key23": "5zUsBBQix5q4hvHyujXUXu4JFerXg82Q3pLJSbEtwUZYpTwBoodp8NF33jtJg6B6BnHW1VtvqmQd7Wcy33wMshb5",
  "key24": "3FHiHpprRUbVaPZueDQkPzvdSEyHwtDkgu3SBzWWdPkdPy47FPCNCFMZmgJvGXEgz7vd5m6TcQiUYUTTSY6HnPRc",
  "key25": "2bGZxoxUDUFDs3KiWqx16MA5gX7omALu8PpXRjHEh4um5jHmWWkh4tjQKLM5eFDFAgse8s9MdEu4uEcPFMEMjZJ5",
  "key26": "4JvqkSLeSU1Haot3SsWgLmw4Hp7M7Js1yfhtMR6FoTQJFxs1tCPUvV6Ykbachoh6k3UoJVqvjF1xYChtXbjyjmZy",
  "key27": "5zwbEMZRLpixPgNEb2w14jbZjJsywC8jVpf3odPNm5rcbxHYVLZsV5R6NA6Tp2hq7B4h8gtGUTnCkD4PbrMZZSwr",
  "key28": "4djx4E96sh7XaUQji793Wj7CGyDRRYTMq1Y1ULgwxYsnkQxqhx14jJW1F4m8VEHMjXiJQoDawCS6oe5oPy5Cwboe",
  "key29": "4Lnz8HgMFqXEguDKA8LuNzfRq7p31dwd7vvixvHhku7eVzaA7QgNLSL9H7Nc7vVnXMFHMuobdfoquy4CLnGQRLuE",
  "key30": "3FJM5svpavyoMWDwNZJFFdroY8EsBxUhp1SjiUqbV5GUTjxebLjMZtb13wTxshpNu4XakkwmzkK9UFkYvoC8hR4A",
  "key31": "3589PECtB2Td1m73vxF2UyrzjSWparaiRDDdeUDgJ5xLLy3RTt4izw6uTdUcJ2m8mZ3A85QejpXrfF7uq7S1AdGo",
  "key32": "3xqhuWCbr5cYGHJ8NBTuyvwptiPrE59apwKGgsn9xe9PK9wkW1ABauDe5hTKwJEWRtZGmXkA5NaEjbCbQjTe8Qwq",
  "key33": "2n8JZF2HNgxGaGbxbTBBfxBr3cQzP1UKEDZCXzohvgCVPFDfiffz6SArkHC5CUwgbk4SLHFd6c27nPdYUCcRmtmw",
  "key34": "DaqUhN9g9aj7179mUh6toZJxwUbnfUNWvv8jWPdUudG8t4djYEwNDyhSLPDodUpYpH4ekXzPXkhe6kX2iL6ykyq",
  "key35": "5BGAa8ToS6EcRkTdWQs6Vm9xTuYZXbNA78Re9hC6GiBAHBsNBVBeNqQ6eKRi9H6GwVGRVF4W4M5mVMLgxg56Z42b",
  "key36": "vnZAXq6UDezxbvfUiZojP4m9yEK94Ug9YvUJPSZ2XkBzvmVWprbpR6rzCvBPPFq8MBnv2Q236D4qjARpucFNfub",
  "key37": "2S7vWfN4FVKbvjsgeE1BKE3fKbUzTmWzzJ5Q5KSMvG3wpCUGMvS3Nukf8scMpEFvz3mXJfA5rctxLQKjrGbMDq6z"
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
