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
    "5oTcWjaVBvLD2QYeVFKCTjz1RExQC18ijXZM3oZpisxWjAwFKNLQjVk8wfZBHExd1d9mQcMeVnWojdFbZ11vaJeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pmKp2hKT3RpgQK77Ch6nm5r11dyZHp8C5sBomcPZc7JYdzPCumMsRy7bZ4RndCiAR7dcxCQyvVamvhLQLgbJSY",
  "key1": "3jA46mxZijpwQVG3xcpXoFr8eSE4UbX7dKC3KSTiZt6u8g73E1Z1ZnaHQDbGG1WHZfBdyokuJZG6BUCAQSMnY446",
  "key2": "5w5xPyD4x3azyi7H8WrPZo5JxoEeo9gPsUNGmE58UupXRMvXpdAZQbTmWBEzB31didkPvoFSMdXLGkskk5tmYTkM",
  "key3": "2H1jk3cLc4SEXCkAwVcNK7uwcAQf69f7YFwFjBGfCiqTfqn5oK2SaXG3Y115WNHNsASU4n3pwvJS82YyXVcB9FTh",
  "key4": "rAtGeamrG8uYYaeLQEeYe3wHp4QkJ766qBLoEBFKeLU7F1G5ZMVqGS1dxjjx8JF4teeYVYG6pxCV96MDxYeqLNj",
  "key5": "2NKMaTjc1rfcouwEZWiKcFEJVARiqVVGZCDLXB3EGKmAoYE7UmT8Ng9s9UQpyfpJJnoFXVxf3TqPKMQZtGkTJx1n",
  "key6": "4gknSuGQBMSPLKQfouLyLRrpPoawZ7Qw6Hk8xzDTPCuTtecveUy7XGxgDBJxR2HRce299PrerDChWSQrtA63nUNN",
  "key7": "eMvB1jBsjsKFjXZxaTvAkqBTe9XNX39rxNHX3nx8Lnv9yXWS2MhFUFxJbF2Wadunc45hMwAFVtY7s79NbcMrWQA",
  "key8": "2JbgtUBr61KzrDD6tMReiS7rYZL33mDpCpBG69gC7N36dr8C2E2SBXp85qakT64Ae5D3jPzLXj14ymcgnQEx1ZNW",
  "key9": "3KMhwHu14AUnvjhCwWRdg5FfKiseer6kbYiFEGne3yfFc5bNvQP1szBL579ZugbshBA8H6Q1uR8HjPbeWuVf6hAp",
  "key10": "5dA7RZkDXBUmnCvpuvaqLDonNUffAMftKXnb8uuyRoGJhRB3CjozBtwSgjxpwkNC7FDJRTuHFdyb28wL4aNhz7j9",
  "key11": "39WdUZ5L3mdQcLbGeLe2VKXYGDBmDVdrQYb9KtFZ4hQR6wfEcLv51H9pXEp23mfdYNpEkfM4g1CjTXvPKyKPFhLH",
  "key12": "4f4V3NkmVoDWqqx3EAdCHzHRAU3NBHpJvizRpy1BSmL51MCyoo1ZzoXnKCLVXt8k5T1xzJXCBJCFXukXMnUNJRV2",
  "key13": "2nuymeivKrCrz1Ub7uQG8aVZumKUfMmp8uhqB6kvtixW8EsERYMCdQcfv2oAjV17Xegns3Tu2BfbobrWvsJzTq1T",
  "key14": "5Ff5DtNwmtbXBMVCTuqf8ErWcfSoCMF5dWjyZ4nHovwYt2WBWZYLuuojaSPTgAvYyVdyzbkiDRJnafvXjChTwwSg",
  "key15": "2ZxmrzsnLq6LWB12ZeFPdpzJoZ4Y7UeNrzJrm2mnm1z5gx998ZnvYx1MqybjcJUgXbxeBBWLPnjCDFYvaSdKdpPA",
  "key16": "4P6jvfT7oGm8DT1xxk5myAtMY7e5Zk6wemVAgu1YXhkGDsunCrox9BbkTiuTPLjp8bS6BknsNdJM2tXGBgikh1HA",
  "key17": "wMWfigJ5mgatDLzKvJvgstKzoRazZh3YQVki5gUtBegFAK1TVWJKX9wUtH376X9BQSNyMLgnTVP5pRhzqasjWms",
  "key18": "3J2JozTXfPvnugWbSsrQMkFEwfGEMXkMrpqpjjgLStKvLcS5VbHJLPK7EXxF3Ti7Y3sfFeSMYhyg9F9PvaCjVJLP",
  "key19": "5EZsbdb66a9wnJnh5rQQy7rD672fgVKatbubmYfsC5a5yvd9Ybsn9wcLg7bqFLC2oBxSWJ1HRLmG5P5YKK66P5Pn",
  "key20": "21Zmt3pP3Xs8XhVPkHbS8KW1BM3Zpq7fN7reXEbQZEhy9hNJ6eXT3rdTt53JZWFQgJLGJWK9YnwW1UFRAkzghHHu",
  "key21": "3NXXpJfHRDqEBNkvxC4zGDPc7ChtvRT3wBrEZ8bwNJS8jzWbvmPM69Gx9Ub57iNBzAtyFd1mM7FZjME1Y2jiy8Bp",
  "key22": "KX6eb9aW4We3o8UwfYrbLG3FFR6dg25TmaYKqSRkKU4inKHVpKWaNrmT9kE6Rz81Gv2hxB6dkEtQhPdcKM7N8Qx",
  "key23": "27hKdKq3neu3hpUfuJ1j3r2V56U18fzGyfzcbqppE3itJFcyMb7Rrp3dQFy936kc2BWwxnt6UsnVy3kL3FF2cqys",
  "key24": "vt4792Rk17Pj9kgu9Esue4HXdWSh4JuEc7osb1wpDQpsfYbygH9GoDtxJFAY7goYidmzBpTKGq4eshCqxy6Uz1K",
  "key25": "5whTSpCbNFpUXgHYAWFQ6AATasKUrZQNW5qptYeec1F5iXb2Y5p4Ame8fdYBLGY51PcwXS5kBxAaDJ6tYAWfXbNw",
  "key26": "3GWx5yDoDqUTW2yonvT31E3jK6EfVLJtUsfYyjc7NmN6B46UQLRCVRDUQ7fbMvhH3Y479Vxe1Sftk4UQFDqEcMo8",
  "key27": "3gL2f254VokQRTYzuChJQgT5d6P1dJQZwYQPb9U78cDCMpMg6sDiWPxHgSH9PrQtaWsa1E6uKKR1MEcszFhNHHAh",
  "key28": "53guHYNVvpKxFF6wdyaKdaJ5bHJX1WcdcgJ4v2xnErRfQAVn5WNN1r2xWcYoLcAY7qMWBnQfbpndxp6dKCCBSBzb"
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
