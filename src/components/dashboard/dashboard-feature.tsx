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
    "2gAbtzrb2MKe8oDiesc4dv1QBQahR5Tn6ZH9RCJ2TvVmZLeVXso9WafV31NNdtu1E291YXT2fuLRbKxAzTdRLpi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abYd2H5PCVg7PJ8tTzduNoFJFNUf6nMYC1NGroqn82Tm8xbehapNBH16QniKyw7mKAoYKeTGjhu4Th896a4Bezb",
  "key1": "3coUS16Jas1KBGExgsBj6H3vv5xp3VdWTebQLdyp7rZaGzRBLRfeRd8sqGaVAt2EddCrHcpKPMRDsqx6Fu2dYJYq",
  "key2": "2sejyXGiGp1typwfbWPUjWBSmGNsop17kKWkcgCvdLu3REbGyMpvEWRB6AP6RUmVP3fiRLR8HTe6zea772na8uHQ",
  "key3": "9R5LZSHd7sHzkpykYH5qYZrn83KnJFtb7uB9RyFjYyK1kGfAgJbrwuYPjWMVUZz2vUdTdw2ZSEVahC2dGrjw1mt",
  "key4": "2Wziqwa4eBuuKVw2vpM8PM4AjdQb72wbUhDWwc1TEryURfY7fcM5VScGSSvL66bTp8LoMKQBTJ1PTaAcY7wULNiG",
  "key5": "44yHoNQAEcDjVxG9ibxe5hVLwkSqpEjXfC77Your6dXB8dT7xUH5e9axtKLo3m5Dw9AMRAFdu2XVLrxtSAVcr8Gz",
  "key6": "3j8mbmj22j5nbeSKFeRTxqgFWpvjkmDm1a1qKAVsXzzpE82YTWxdQixpFdCT32MNLdZ3xuJFwmZfTRhhojX6wozB",
  "key7": "sTvoUeePDqgsU7TbBdE2fNuZXzGDyUQrepHmFUaGBZHx7PzE3Kag7HGcDVbHxLgGpJG2rnKY2fBVSLN5TNpFvZn",
  "key8": "2y3ZcnHHwrdy6GjpX1djjXwMH3mR9tgHThMB6vYPEbHC8E69kvLjeJZT6EFjm5SMmhoHkXMxEbY6yWbXeU3NkpqA",
  "key9": "g61efB1W1MC6cXfw6o1VFUZ9bDwpUR3Tv59sZ2RgKMTiEPnnN53DxE8JkB8z4Ur4LsFASesRRD6FvS55G3LRya8",
  "key10": "5xpsnackeATZDZtKYZumz2SHuWjV3FVcvDH59FJrL18dAbDNMrQnNFghqaFqMgRkduG6pFjrh1JZfAFxoahhHF2i",
  "key11": "WnYtmN41EYEXZ7atotZgiDWzMSiWrhuMVNUchorufrg8bnHc95kGfr9ZJghMJZgdtMTdouqZrpH1dHUZCkFZ9nk",
  "key12": "4JYf1LDDNbQUX7XcPrBoKrZ2WGTuLjEfAyR9SESxZW5PpT9BwPAbTTruEoHZAhAvjunQk7g8NwxcoZe4FkGnLbZe",
  "key13": "2AY5zdtQzFiw1qyBy1XDnuoJSQbkNQ4PSSiyFzGjcXiF8i286tGqhCZEiGv9CDP3ptqwH4k6qte6ZGWeRRJyGr2p",
  "key14": "3FQMmg4Xpe2oTdL8eGMTVpjyjpwhEwaLDZ1hhR6nKWe8ipXMniBySZGpTT3rRPev5L4qp4CMvoH3G2J7dsHDmSUA",
  "key15": "47pBdFqE6MR618E5JzKQ4aW9z8NfxiUxuCXyuXwthXMh61ZDxNrTVnkUyos72En3Uu6XbYoq7J36GZ7fc2QjfMBT",
  "key16": "c57PEnQCJBGcjo6uXQUbP8SZwtx7yZL21mr5Qj5JGUXSzbpeDVCsbphwvswVhQuV8JduU4P9qJi8JUijjzEycLf",
  "key17": "3WsQ1KJzEX9G8F8kcXN13H8YkpCAbVskzDCYDNxbtT82M77L25NVMZvkybKwJiiyUvrP7fbzrcKQ3MrUyZJ3QjRy",
  "key18": "YbLYQXu2wHk9KRgTXKPhX9MUVtriaEBK2mnAkzKcUFcfXHKk91rcLmdfW8PBWtP3bfSBBuPWNJamwa6eX7dfHtb",
  "key19": "43Vx5Lyk9NjPAECrmSbd15nZmnXUGG7NHD2hB2btEw7noZWA6PzsP9pb5BneEsasjumE96JqQXMLGgy3ev6soMox",
  "key20": "334PTWMRG1YcvVFwjVh19PRNUC6jtm2c8pBWHZiJYRdbcqWkwcbAPQvSyXEigNBqsw6HjkECd9ZgKa4T8y5i5ePD",
  "key21": "2gz8ZLbfL5EgH41Fs3vLYwEPZ9XE5FU1xzuS344fVKvp99ApujGyfCkjiXaq6mkgBFdk3QbJj9pmnPAi4G2UJ36y",
  "key22": "5a9v62iHaMQWgrDX78uedD5NeiuQMwYBa2iah1NhkZFfyoum7A55w3Dxh1SNaZvCoETMFqYDfgYJmPQ9RW7DY5Uv",
  "key23": "jjTgzNoDmz5pQKdnjAH5E3xdyRSicrbxusehPknpL3beS6TVTyVp2RoQYdHK4AK1jeGfky4vk6UxysDvDjBqWkK",
  "key24": "3tjHNZLnHDNUbL7r6bk5FiaR9Uhh51pG1XhDUkNB6RFAGu93PkvSkjMqMwUfFu5obbpAfacBXAZGxbAxptfyriYY",
  "key25": "5VtYiraRziLTqqQ4PrEb5rPjXJ6qJaXTmBQY5AZjxVEkjVytwgbQtjKpMnyRU2aqNfDzYEvKGwKK7avmDNN9XFFg"
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
