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
    "2hPmpeNV3jUZiAaMtRG4cNTTeyUoHKk3oBVGt2sADLyXxHDBf1X1qeYdtv6BHwLau3sHzvpzr2wRETkJpfhDfHuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yo2TegMXCZmaRpLxr4PHCn2DkPwEjhv9M45s5r7RjE5o6JKU3wbVu78thmqQa2xTyhKWX23Biv56fMkKcT8m7y",
  "key1": "2v99KvzGt4yC8hpQ66dwuyA9tWQSFsefQ6UYNdVy9qH7ttcuaCY2BmotMPg15f5oEXmXD639PDYx8U91P3hXkR5u",
  "key2": "3CJn94pNH4pDfej9obNk1ZH9B9X47wCjfL3bjuKLVkXMrUeCDa2WKniUxhD8uSm2rfrd2mnSSbfw3wjAkoEYPYas",
  "key3": "gfcFYiByT96n41GdVuP2St5UxWqyUbuo4tRvKYKkRNiwLWq8f8bXeSqPNjXyQ87BS5WgYYYcGyWN46ksb52NjKm",
  "key4": "5LLXJun9wPTQsard9LduVo2pPvdxjbx5Q2pj5JphF91QAFztBN1vuAQFiZtAgQjnDibipp3FDEd6uaAqzZHnTyha",
  "key5": "3TWGQhAiycoFVuoCMhwehosJVzoqRjBitvXg6yZNon1fmhqsFrNpfc22kpZreHVWpiJAEwa4ftYA7ZWsWFW9ko89",
  "key6": "3xJUD7XQRjLaHsD6fNKhpZTL5n1cyJPmgXeAhRKbAyYE5NXHmBAs9x3hfQRLA7kPWBCXbL3QxFPM2oNnZTu6aQZw",
  "key7": "4ydbt7oeY3d7gJf3tjdh3XcZm3yLvCU7G3dhj9T4B1gjNRycxFPKqhqiwhchmXx4BYQgzFhukDFDqaTBMaBhWqgj",
  "key8": "2Y25vvt2NKsLqKLixA4KiHuyK854dvUi3ghnDCt3EkxzpHkgubv8FWq8cmZc7aqqZueukA8BBh1DXHtHzXvTcvW4",
  "key9": "2SqnkNiCHmgtLq9u3nNJJK8SSL5nP3DPFEhaEWyYfeoDz8a5aPUMMhRfQX5PtN6eSDE3Kjn4aBU8BiD8NViRNjwo",
  "key10": "3zTKHNFzA8A5U6c71Fo8aoz3TyodSR3rmp4qwUWAasztiDDStbN2q1YksckSRFvs46SgfDM5gPr4i79n3RyDC3jz",
  "key11": "vTjXWajWiE8iC52SboepSnwrQKPCVdSnujWZ1WqnyMQLypPwtXxWuhmN1x1ReQ5tvV5NyvPqK9MNdB1vi8GHVYK",
  "key12": "5yFXaFmJoW9f2JgwWWKczALs1FUd4PCznV2GuhRbXdEefen5fz3TmWqYX7Uoexcck8PnAHR1XCiLf2nDPzp3Z8de",
  "key13": "3UgUgyoWWjAHyspPzGreofEi5qUhQ6KRtN6tQgjGGTbd5Lsu6ZDgm9BrmUsSFN2PSy7A3n9B5ETJp4GjjmTJ82QG",
  "key14": "5hxdvTwzoRq8E1tGF9n6wQFLQ7mvzWtzvqTou8qb8PFL9JzDUmWV7pDXMDZzTaVDma9ZQLvJ71oYWecmADCY451R",
  "key15": "41semr1rZmMQWi2ibj3tmudqrrphSqv5v5shXKQ58htEdR4JaBWSyGed8aNVHaNHjzv2NH7bAGxVrgRxMKHeazsw",
  "key16": "2QpU9nCLJwBXH6i2m81RPycDs1jo5yfJ7hwXw7k3cVAhK3j7erg3SGTjb6wnHeXhXuWsk7Vx89noEuydtUE1b42z",
  "key17": "jouaRnYEUr9n6HSsWCy118zxhUdvFKQjAQGpr5TAicPjKzSVqmnJytHwmzZkEFtxzvN1QVbfHgYKYJbArQdUiot",
  "key18": "226sSmQaiq5TYDD3cB5CBmUXGbxu1MiS58NgzewtBiLDkfabpZqf4LE6f9sn25cW9gqxK97nWRMwajuN6U1spndY",
  "key19": "41wfm88L6F9ntMBp3iesvbia1fFeUofDUuhcT6RRi2MfutDmQ6SVmsJqJoQHQqS5uupAeAxc35rm6iiTFGZjunsJ",
  "key20": "4qSU5jwZLHJas7JhkXHuUPz8Dq9mVZWGj4qbQkDGhpvAxzyzkTq2HL9ba86tYUtMEgTYmmGRPz6mpZiDnAo754xY",
  "key21": "cXAanwMuQtHUNtuySkk2hvNFeKbJFYGA171671UvzsNqWibnQfwbN9wDUsKGhujojF8dfrBddaVDS57XZdmQL4o",
  "key22": "3jkLSzpBSvGY1e9qpayypCfNDpbUw3GTSHyAYm9RUadHuk4e2SwxmWNs43G3gMfVaFcWHfAf44eNGvzpZ8bFGwrq",
  "key23": "5y9jQxYwG4WxJQ6nPkj73mwUQRuUcrxse3jAMvaQ3W1heyDgqejLfaLbMgzZkmwPhAkyCowvG7HxNPEg4gVJUHGi",
  "key24": "34oHS7QN3Q7vAJoCfg4U11m65Z3X9V84LRQrbsYGWcYCPYBVbtCFQ7EP6GY4Qq5v5JptYfsJeE7Uudcvc6me1z5W",
  "key25": "3m9MCKb4FoRG4p1RfdS67WDa1KpkTARG5FaHg3Q4iZUdMzRw4H1q4uKSsfjJzoeuUyj2XyqoR2iCTsqB63pFhgwo",
  "key26": "XVuiVHukB72zNRwQttofKgioYuiHHV88TgU56B98EoHxHD9oY4jHxakggXGuW3RL4ZbEFr6D2VJFWX6d9debCcF",
  "key27": "4UAD1VNRwqHr1PraTjPfLFwcx87JwhJxz9eqV5KvDjBzGWyLTYgpvgJVkU3UAUDxQPmX2ZqdZtX76FvfaQAS1QLM",
  "key28": "67RpMhnu7VBVpuagqn74FALQq2jygBDhFKbXbCoTbUY6q8uMNvnSPWquRzwhNocG6f2jG9YqAdzoSGtrYiDkrpdB"
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
