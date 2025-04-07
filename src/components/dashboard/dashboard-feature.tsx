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
    "41G5XEjws8XAD2kwmWxVX1iKWci14nqbxFZyhCm8tvTur61oK9fQHTkmW8qicdAVqfi8W3wZmnQkPFFvdkkkG6U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yUY7KYDNiDzuDpefTPcwVrNfkUrW2ELFhzEBhAaA2amj6dHvbiYLcWMRZKHZmFwsJ2MFnkPdw6XhXAUfSYz8p8P",
  "key1": "4uaxMSGmwYhhZG8HF7jNzLQkLgHfmgkGanDqW12dxwYaqPmkXG7UXcnAJmm4dGqXjVNiHBVMY4FcJ2UR175mdKfG",
  "key2": "52juqAyB5YRheaepPi1fEymQobwnQBusdGNeuF52H7LfzqbuKegecRyhQJaK7oPHhZCu3G3QFLQYLDkNovxY6yQc",
  "key3": "4z5ow7fuyzT1gzNjwJzVfD3yYkRzTv8JEWjgo8NWPqbyYvZqAMzyddtE3JqJRzrmNNinvNoYpmAwGnXoMdFyY4cK",
  "key4": "3PAcCSWg7wgRzMTunPCHGwYAsfqyC4yo4hcU2nBbC6sKiKW3Jd1qZgkPwVzaMieM2cECofPuzP3hBfoz47FZNw2A",
  "key5": "4QXRQQQ4n2bCne5tM7iLesjEvWWJy3YoUJmxTgeu6AdoQS1XFkTdkZUX39pZZtQS3BjARMBjHiEmEyjxzsfqGnM6",
  "key6": "5EwEcfGkcAnEwNE8YAz5o6KiBaovx98zscRF2tET8fZHYrHYKSzkCveJm9azrfj9GKktrJ4bvBc2yBLaRPAMxUY2",
  "key7": "3fU2R5FF4EqAsvBFWcjd3sg2shHVhQ8XFGPZ8g9bhhxnKtzEcYHVEcUy74TjqDSRNnDDHH6org5AdAatudUY3DwX",
  "key8": "KnGZQjCf3i1HuvQUeFcsTJG9uRSycGsT6RsbV7NjMSugEAiAhff5r72Ut1p66RKKCZje2K1p3JeqqwD2oJARgVJ",
  "key9": "2dEoSe8Ma14YTpsqUFqGiCib92LUuT6zfDcSUXEZL5FNs4tJDexrHNJxjZUqz57BcJJkSn97FSToKwE3RTrz5sxq",
  "key10": "45p96yGNBiiJ1ymAn9EVcsKK5StbV4un6sMdh3JgHQz7nh7AccUXuB3MGWLnLDzsPfmQyPEKW1aUJxQpVzAnanTA",
  "key11": "CXR51XJLTrCeJSnUCafKV9XCBV3DA647hGgdP3pFZXMS7d9YHDLtEo8ZNHN5u9kbE3XqP4NqaGi1psJtLpDfoRj",
  "key12": "2DBW5cqKFGAv43fztGw6gKm1CCTMg5crRGajZ881awQGBorKYRVRv2Deguadkw5zAPrY1rggQPNVVgxZfgwzFN8k",
  "key13": "5DC7wdKCq7KozhDVU8UhMicgHyMq4cM62SW2VKCy7GX6Jp1LRE2qfkwZRipWu1dCb3ES21zwP3QwG1F4R7JAPXup",
  "key14": "27BmKUxMLqBCzKZHrNMKEF3Z1WP2A6L8kKTiQky4rgjQByoN4Cy4rWi1nR2gkfS5ttQgeWuGtQkivggPrtUZLacQ",
  "key15": "3uC9dV5LoG5c2gf32eXRnHpVEb6BBCEnNRbMCTNkKFHpyCxkFyQWu3tXcML5qGkWTKtWVEhb63mBrqChmemAQYP",
  "key16": "5eVW4Paspz3yJHorHBZKyi2fS54o4ZtwiJhBrxiAWtBLoXZWjgFWxUsT3C91DW8ihQHDxWpUzJVsKmSfeLdVxiNZ",
  "key17": "TVzdxzgSJMrwfc6U2b5196aSArqPgcWVjnSbXDaXzbRu3CSCyToFFLdAaUAHNcE6EUfH9Jvt8EDNSrRJGcKxQEr",
  "key18": "5Y9uHPZW3ebNNxa9Y6JncxuH9Bdg2i5jcC3DD8Qxe82AiHZ8TicbkXuvZTbbj4iNWsDxyz6CXRfX2fkL68NPNGX5",
  "key19": "2QZKupYTHd5Fonc2J5xFwXWqrQtfGzjGjEPSuaiz5CpptC9D1Cy4EeT9Jjxvd2bdjnFaWzFScGni5hwcLGXhqb6q",
  "key20": "3fK2nGjixCz75UrxFoYj7nGZShjEaj2AuXvgQmwrhWhqCEmhgyCeKvH41XqiXYUCJECaATLaV9qda5w5paLH58x7",
  "key21": "3qgkcmsGQSGoasK5ro37UbEDyW2qUHZs3pQUF2fzfSLmLnCvYpmk5Zz3kUYFWh8V4EPXdZNz1scRzqGdSn8CyVBE",
  "key22": "33vTN3Ftjc6BwtS6zn3Vmx34BSSGwX8mQyHRBq1DCHJ9DDLL8VaKZa86mQDWzGb5nCBBymeYxmS2FuQuRZRxmUrq",
  "key23": "MD87d81xn9MVo9zvz8MhDbogfsFP8iwSRYi6DFvWGJeqaFebLDG7verA2Vjy4YCRw1yMTv6eHxC1JCFYChVBikN",
  "key24": "3cJHvPPc51yjrvk1AuWFjFC36FE1aN9NynPX4jKNqQNhzP5yzDZTDMSP64tYSKC1xVSeiYn5tadn734o6NyLvkop",
  "key25": "4oz5Zw1VGGct1PusY12cwZsPM7zNJkYHqqqZAf3dM2bGFqgQfF7CTRn8XiSpeGKSvbs7GrZPjxE5n5zvUfg7vyqm"
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
