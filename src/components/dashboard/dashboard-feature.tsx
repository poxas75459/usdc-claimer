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
    "3T1frswCWuwGMYXiYsbfXuv91kbAEBQrdkvddKVn7X9jmbKMiwxs91GQTPoSdPRjynDNpYZq2N8VQwno82dRR3Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CRoTqRzvcrC5VZpqivF9YQx5FJ9MaUwgB8PqKm97SeEpiy9BvzrkuMD2fDRuuzeLW8TLu4qg2ukjYLBK16YBveu",
  "key1": "4F92ewUud1mhsTYQsKWQHivZ32hm4ktdyjvCDZk35USJ6ey4uEzE3FGFB7rP19DXgCdshynrsFQj3ymQHfr3KFMx",
  "key2": "3xqtVhjF72456fRkfgFDXs8jh4qojabggDB9uU4DZ3csvtccjFnz1cPBzbQg9PWXBhhvir3kqpwp3xzmhQ9yoW9S",
  "key3": "65vkVARtpPHY3U2WNaiBmujzHA2pcRB4JkJWHjRdXRJ4u6PHaVTFdnM6tEFGUGdwXHrZWKPWHutPf1VeMWdi1PpL",
  "key4": "3yyyHMwg7nNeyDs9iTtrFvauoqixg7WyZ1uUWzNVMhSn4ZMJGJTeEDHwNS8DRUojB2nLKmA1LcVY5gkC7QcKLcdn",
  "key5": "4XM6WU4gyFwG89LbY39cCFwtSbhr1rvJV6Y5JeQbANva8SHyv8x1YkwDLfwxeu8NzcGQ9eV8ydxF4RWrdAKXeAzk",
  "key6": "MB4B2g3uMSreVSSkhY1tAs7AFiCB9rbd1b3ALD3SqVjK4RD2ZsuNgfTudj2s9VUPXAh92m7VYRgBdKHzCkKHQq6",
  "key7": "jc7bVvicavr1Z5sexi3vVF9dPFo3BXNWpfREvPTChpe4eAsb4P5oHyTt1nLECFuLgrki39rdCuMGdtgKx63GLdg",
  "key8": "5XZ8WKyQc7Ug7BnuuX5QxirargUTRgoQ5f7V2VxH91ky4joZaqhpPLB7jpaJGHSRbWs1mANkkGuCKu98bLd5zULT",
  "key9": "VTwmm3cGMW2Yq5trNt95StdzLqLmpmigbbxjEAgiVFHj97VdZw7mxGDXXGgkjzPqdmCTQukt89LrBBqe3JfespH",
  "key10": "4tGt1CBjyaFMnSpna6hg9ZCr7jJ2DqA1PNtpmYzi7BEVimTgbsVpdsDwqYhpbX28DHyxYuPba9dkX49nyMUz7zRT",
  "key11": "2SbXfooAaB8EjManbsAXCtGGPrbsU43y3K76JJSEaSYyYUPhwZu2qsYCatj3UFVFq3yEh3F4XhjqFUT3YAKAeE7P",
  "key12": "43AkTSgEVUP3X6aDs21MtXbFkFbdEGTpFDWrKMaTRmMgaEm5Yssb97nMeF3cXav1wP5vYMeLZ4HaHoPSovTezbkF",
  "key13": "xveQh3RGudFtRV18Bx9X4QS7DNuwaG6agN4RU7oDFPQuVLkwdqiwCy4nUegiU16JKwDhzmMFnAZDuawq4GztsqL",
  "key14": "3ui3HLbxAasTBWZ1mGvXyWeaXUcby3fBQHdVPDfpr6nEcaGkhWBhGCT8GHFQs4E4kZNacZYQGhX11z2YhNzASW8q",
  "key15": "9Q4aZn4mXf9hPVf67CWBAATK5AUJ9P1rGmPtBs82dfaCHcrDuW5soPzFQKX1JtX8ckY5iG9Jb9QAvzP5gr7L8Wz",
  "key16": "63PatpVrkBEe1tzmmhccc3dNvcQZ2C7dALmhezPVBRQEUeTzSsLJoxLQcuZKwZoWiQVxzhwwvgjYcQ1dgMWMr8j6",
  "key17": "4rTY1xEmFTKqKjeXiAF4hv41rG42fU32eCFj9qW1N3mXjHY3CScGeek3w1NYGpfeyBCnYnckZi8NiMLcKJkZfXmi",
  "key18": "49iScAPQpf3nd6M4ATiEvorJsx7w8LoVvCu6eg49mJgnRcjKdpEBHxtAx9JS3MhyX23QdxF4FKQNBEwum5ki42VA",
  "key19": "3vUqQeSAWtLe5cf93k8RbuGQGX3gmzZ6tvykm6RUE5Ksb3S5cHWjwUSfKsZfAQYKkTveL9ZyfXUtvpiPNZTxP3Cy",
  "key20": "59msuGwkUHfYVREe5zYEmqZDiUopPLxafkww1DTKKY9ZPTeWiyt5F7Wf5VepCRbDA6aZQAaa2fvPDD4749fxiSW5",
  "key21": "5AViXMK6PSgwwFqTcEgEDo1tY7ATTr235jJ9RCXQMHeMwezUguDEYUMkpJPrm8xbYiRxobppaHB3ZjZfPnxEELK9",
  "key22": "38CdZ1tCzc2fD7UPM1EjU8r5u7Vv9JpNBJYwTwgzbzCNAxkaStocvjskH4JXKTHshMY9vP5RTiVUJphkRiZaV1Up",
  "key23": "3tkbMjQ1xHEmoJkzY3tf4YFTCuijFCZD3aVKnnphMxZV3rbZ7LDseTTuztF3LPui4rvZGWMqx7gHzQAwfWHjgts8",
  "key24": "4rPz4udZk7byGnT444HHJU5KjDBdvZdEcCanmVUytxDq6Sv3ZnvBEv8AFYFju5PsfWyo2oq1JdJrX2eiexc7fBWx",
  "key25": "4mkLF417aSBxt5zZVXLEpHYuE59yVUNzjJEurnfDRprUhPbK25rpwTbx7psaSf2PubKdRbST2zi7NrFN9ABY2VEh",
  "key26": "5hPqeNYRv9EN4KQ7QeZU9a6KY8qD5cVFzZECs9AFYdAAUKPR3Vs57wtSZSnrABa65ta7djrxu3QZ1RDmtz5it8Bc",
  "key27": "3bTHyRBGaGQZrjwCpzRACkrMrFBVCo6Lh37RL6QBc1HmnEtKxgFERkCzP4Ku5aBasGDMSizrQtruAda6uA9GBDbB",
  "key28": "4rCK69hchMKWnaEZZXkdDjKXzqGvH8PEqvZsmVc3DmHARewnELN4LizFUh2LrxU94Aj1ieL9kCbjwoYYZUvRpJLH",
  "key29": "9tN76ntsgLDhmFEpg6ECAU66k4xnAFHxaWa4AyCrhD6v34P7C9oc8nmXCLTXaxHEUquREApnRMUWcZppPAyJxvE",
  "key30": "gHf5Xu94eE9mU354riXSET1UQfHi6e3wndKmux86orQmsw4E6evz8TXpjWTduEuzsKgd1hHUgXLg6jRgBuXkKSZ",
  "key31": "57hviyqhw2RBLJaQ455sa266iCWgo78W26g4UKSmhnVJTfK1Jbpoo8w65JSTEwtQHkPe4nsGE9SYDLjfo6ihUawH"
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
