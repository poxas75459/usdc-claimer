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
    "5ow25BUYid9o2uvoohDLr7b9LJY52uKQ26Qyzg2JHFA9L7LoXMBMMsipahi99yJz1FFHY7rZj6wxBTbRiPPCap9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aDBQtiwVZhLxTUXLTq3n3bk8Z8bdHFZAZz16QEtiuM6GTxJkNaGNV85AHHwMzQ7JR3vbcHA5VJP5WPUoXFQrB26",
  "key1": "HwzMWUxxBs74syV6JMYd268Z32aWasTS5Q5d47ikM7k2ftcXe6kTwqpWKCs4eCBMraST8aRydNTp2zj6m9yUX9D",
  "key2": "44ZNPC8SjTFvwYWaEijffPRfJ1LvMRnLZ7VSrTytq1wfeWrPBDpcYQv5asRktdciNs2zpUSuRY6v4GNpvPB6R5aQ",
  "key3": "3uDEUub5euzFsPpyfqDhfPZAPVSYhHeXrobwjwPKyUSiMRbCBswQNQUAyWGYLwQnDMRdDW86LQht4Pyoy1EnSyPH",
  "key4": "28QjjtoTbmoBrH9Kve3uPjVSXFum4dhQzt9hXBZpmGPWXQC7WYrTmMsZXzezB9XLh24BP9xy62mfEBCggPJYp7Jx",
  "key5": "2D8nMj6xMoeVLdnyNndfcw81nNKGiZfxbEMZrh2rNaQVYES8RioKZczemqcfNyjshJHzijuYd7F6dKzHRAFQcLQf",
  "key6": "nNqh1DHfSzmLbXdeVHUPB597RpYLBJAW7ojTm9wMHB1J5k3LBrwzhikyka63bi25UKp5FQibCWuWD1RRpn58wQc",
  "key7": "23smsbgdurEqtAaJocszBEUW579E3nMavF4iv76rRKGfdVu2mnpf5VAmSYNJ4Jb4McU938RpvPxYVPPWfSnQ63Kt",
  "key8": "gwjoDxPwY33VVppxvWktqC3STn3UFKSgRYaHFfjmCNCrbN6ejY1TvRhzt6jiyJGhQcc34BzmL54MhfW3kq5SNJH",
  "key9": "MZ97e75f2RaDZpSKH2gkRYRqFYmGKnQjJf91z9uiAtmZgnkxEroLGeJgZ6rU1y1hvRvGp6Ubuor9pQmyyzyd4n5",
  "key10": "2KGeAxLAu9hQCEazyxddFgZTXXwJ5epJ1xx3auv6eAeq7hoopAMnBa4GDLf7WBAhwWLT72RApXZL6tDxnQ34Sm4C",
  "key11": "3yuvJRznkUMURXLd3eWhXs8nt58HiPBjzdgKLE1JEw9ZKrS5GuG4BT2EgWYqCWLVBaJYbEhJkJH9k1DLUFrBtPDF",
  "key12": "k6LoEh2TMjbBRSBWiCFG8zXSKvPoyV9aRhcnBaAc2vByLgRskq37rKCkAfyxb58ZYCMh8wH9WeU2GSi3PtmUsdn",
  "key13": "2N9wTszwQpboJHh3a9QwwLtAyEUd1EGvE9cx5PjpS1nupoNnu9pKG8NhNDKqUMwdaoDMDJn4hNj4pJfbgzw2Mc8n",
  "key14": "4aj1cZJLVrukQY3svEvMM7z2cRUHQWzLP41jnaKXNNaSGnYrBoY8odxDmXtCYc5g48WQ7aKFKjfwwVBTbVHj5ja8",
  "key15": "4a3E3vyptYv83DgNPoRM9eF2yjbT2EMn9DVHa8DV6otxWqMNheR5MwgtTPUMtV9hR6vz4sxYBL8xbJMp8DJE5PSZ",
  "key16": "4ge51DxEd5V5PFVMyHv1qeWhVCEugiDWbezQx5rKutoG3J3rYB1KmyYXnurv2PE1Eg6mWFdo9pTMHvtnephQpGWF",
  "key17": "2ot14QXz1UHSe4XmBoibQsRRtLpq3UgyP8FAFBvHnBebkDMppiz1e4sdf9y3rqm3GJGTYPcNX8w95Bk8nBaDeATG",
  "key18": "5XC7KKxSXcawMwi9YJ81EUQ92z3urBqJX7JHhBJUoM1LSG9fvvv2FKaFZk9ci69x2q54mBQDaYDN63dLThtxYCq4",
  "key19": "3zpbabqFdBGp254kDTmbS6MmhKHNv4eRvNPYGfj4auw9iG7JMAMZmoUYGZX4Cm6f7E8EtPVziDyv8D372QtQ7rR3",
  "key20": "2G14VTApdheMzAjrG5S7g2P9ckPcKvjFQH6vyg3GA1QX6SvCsnHir7Yzy6diuibnE5JjYq8uDjD7LSrWEccJtQZc",
  "key21": "2JCEeGSjGwLPu8gtqkPt7UtAtcV5W5fTiJePgAR8opbawFAmcpDTcZeRNu2uoZRXFe2mauanPbAAknha15LH9X6S",
  "key22": "oKrabWZcSsYEcQKkQqYMrXq9657Qt4KEma4hbjGSaF6rNS6vroHMPzGJ6BtXcZ3HPEuvrQg1YKSdbTq8bZptMWf",
  "key23": "WdZ18F2xgck1ps5LFerGjijotRvmQ6H6otKchUhtx3EpBgUVv1EcFmDAsvaPbySEWSkrk5Sk87cqk7vVMh1Ztjk",
  "key24": "63YeemsPLu2gfMJPcEHdCx5H4FHShGx2dSxNJHYd3vA39FjxHKAJhjCjHmNSHtBq8r6XUda5CAgXr5R1WsjbBrUc",
  "key25": "3LFhSHUTzeiKuK5yVkkuuRHXCdZ5Uqg9f8CgKuN1dcH5joDk7Y2NXsKxrg3qv6XZUZF8mt1g8B6BSgA6BXk8kfnC",
  "key26": "3x7dYk1BdjWU2wdWAZqFuuTqi1JoymRFS19yZ58Ln2KaJnApfdDdXE7V4kgj6xuCFMP6uUR3bJsxxVrsfecYAHuY",
  "key27": "3VAVVDAhpTm3gmkVUtQs3YbzePLY7LYAV6E1NG6BbWmQTmSb7EjhkzJTE5eXC8uK7prQyrULMpz1hCf1bL73LqYa",
  "key28": "Zu5GTU2ePTnFukynAALiMRSYsW9VzuX9uiyhHRQxbddwtgLyJ2enu4dGLnBu3ay4oVjzoQd4HVsm2kajGs2WppC",
  "key29": "2A7BdpUocaLPkkk93Wgv42cKYt3s1GgRxzxDY8ksqEjL8Qk1oJgq5q6anabtxqQnEjq9RproLP2Ws2WCFhuzUd46"
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
