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
    "2E4zN7bRU4Uwhxn3MZcZFTTgTbg2Upm5tJ7BSp8gn5X5gzoreHP5vLY8nWwQSVw7rrNFw5GoKX1QEWFCor9z37Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FC4FEPBCKbgw42HGEr4P3WdZxB4FfLZPnx4Yxtp2X5mQfwN9VFqKhoUU8x2BakxueEkRvoGuXVAjBprJ1QEM9Uw",
  "key1": "3Zw1aduyYiHHyQwkxLhj1Mb8mrandHmcD2bpUV1Du2gY64VCkJoPv9n9kwUKG21ENpDMML24CR94tvJXqP4fvruC",
  "key2": "32PdodFCdKg4oMW82hegeexLa1wAzZjaCWJJZNjDfsnSp58F77qFj8cjTNSat4H9rskxaxYmYrx8mEu46Y5sAPGq",
  "key3": "4L33UvEnAWV4DQVEf78SDBcnsebnwZbo68b8LhXoYjjwiH6XKdWFtqPCQho6QBC2wXAvC5EmNPckh7L9LWg2rvXS",
  "key4": "3aahM8fmboCzs5v4GzFFbB6ahQUeL4sbh47L1dZSZGNowVseiyJFK9D1NFSZdgoHPRWjscKx5LxVHTctumJutj6s",
  "key5": "nJvSN117Nik7z32EAfxhiQgXH92x2p5TPjPnCcadh6BbWLJz3ySkw7bcdeuWLMKuNpq1JrwEWvWExQvCVSBLSFB",
  "key6": "4GmnFFka5Aurwzzg7PppvWNNyttc4x5FDv735Ed4wSJvWV7ngUbCzkmEWrCRTgTEHUCeRn6Lorb47KW9FksZJyhk",
  "key7": "5Cw3HXbgg6xRxbYnxKkkFayfzzN7Ws3gH5s5U3xesGqi5vFNsJcAc3cjvCYhGzKdsBaTxVVEDiWSK3o9hhD1mVtW",
  "key8": "3hskiE2SDeEvbdo4Qyfs7JbRZpETNSf1yPp9jrTwieGURBEAsoRmiJVqjq7Q2VBMUzjwwKDuPJspwy8jcro5cSB5",
  "key9": "4m9dMMcW7QU5EWuQoPjZEGjhuCQd9spgCZ42bYaNJQCJhsNCBwh5oxtXotPQERuJu93gNecL4i8EFwkyfSaDDJJG",
  "key10": "2LKZytaYyxzTAZ4N5aEZvYqABFQeYHn26UZDVVUfzZUNxPMREpQnjYTqDHvkFFVNhueqvWDSCmvgoCPx3K9A81Lq",
  "key11": "5WhH7qecUX1GXw9f3cDHM9WBsn4CsqeTGdUVPce64DEdS1ZdeJQvPWsKYWF3GFKmq9gUfLRSZFY3sSSDbbA8nedQ",
  "key12": "2LwmDQFKeJJeMfw2M2QoobqG7ohfqczQ8Sj3126KKTtn9dbmaumiBv9fr6ymy89Ck8HhVJto3ZB2qDbsMQxQZXj2",
  "key13": "b3ysBDBXxDSpoNdCCBNyBGDDPsqPR2iR7biQ6giYAMfuRVLAYCpxo5yfzAqbP58CEFQFJuby77XwRiDFdMVSNJq",
  "key14": "4cojZ2P3ZoQLmoa8SKUJSpKWbbtN9d88KNrP5AXUBqoc3uW7cLadzmiHggdswasVc7vghHMaxNmsbbqFAwMNZ55B",
  "key15": "3cRZuzLLMkzJLnLjTsoX4qD9m7FmxbGHHBjrU2QggH1DGjuR3woioz2oh2RUUT3Jpi9hABdyBbRFp2sR3ujYSyyq",
  "key16": "2v9Fb3ftHUsb16XFwVyWEnamPJyZUSse5WLhssyrc548TmSyg3MrMtY8XBMrmPzTneDjune5xdUaZMqXceMF2bTE",
  "key17": "4Ef92NJzG1PFWkr8hHFJthZJaBEfEHopCLfNpyWtae7NceZngpq22NtwujJbXDnuSP1G9KbVv8KEdP1speiJEgnd",
  "key18": "4iUAo8FwpMp99SsCQ5F7uinRUENu7fEXyfkYuxPXMd8YMBzWXuaYbNt9rPbvh7aXHWXpWEU9b97qWx565YGjm7qy",
  "key19": "3qTyo9zrctE45pTzyQoT8yRhbwCiioM2xKssivCeeYjVXSrb8BErdpsTc9ChVu9J4unKXHW7ZaaTwK62yZQSybty",
  "key20": "3ErxiEVehzoJdziPG1LLPN89ajaTfxuHdcgtXJAWTN49c6JQRtdpuEmsjKPvBmUXLkjYhxzFovU2eHkbq8VRgcGt",
  "key21": "2FPzqrhg6T7mgbVu9Jp59XxRYHY9N84n4wXk4qXuFz6zxQdD7D4iMb8ouRowNLcMdvCeAv8qy7gqgfhtqaDaHCmq",
  "key22": "5jN8pnkRyXUYPZbJgMSD5i59GhG4FgGSdRhfzo6Py8DACinBdmVwXXMCBsQKzRLtaYgANejH9ZJACbAtuBSJnzjd",
  "key23": "YYGtbRHXouoqPWZxTtHsRqf2uehbYxBSYEzyY7nCm1h8yEiCc91SX9mQoyNytT7TcCrktaRfCYcbW5Wm86exsJc",
  "key24": "2aQdZWDrWZR4pvSViTzT3vDpPCeVnv1ibBoX7AzYeo8w8cn5bfcxPpBiuGSrCGRrHwybepEdsVnhmjmGF8QaxRsm"
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
