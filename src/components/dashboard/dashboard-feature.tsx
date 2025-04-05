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
    "4haepqbBQ8ShfjvzZ8UnPfDLaeLQJGb6hjwRq4KGruUB5k4XDAHFEYrj21AbjiYUwA29T8WKKZDit3mCf4nfWGgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GqyXMGCLzb1JRtS81czYcD7R46wKRNaqjDRmvCV6KqsaKhdj542VakGTzYEH6REV1HSUVJE87AUGtZeRWNyXQ5Y",
  "key1": "3oXkEgwzRiEGQZ5zxsd2rBUupgfcbH2vTwH2vgp2XTYVZAepGcu2XefhGVDpGAzisfbkCQw68VSr9kfa3Zupyg7w",
  "key2": "5qkmvg1wZrGrf33BmR9t1G75Bc8ffYaJtyGbKcDYzR8J1oXZHQM8jMwUwz29qfpKASrFsET31BnAsF1Tb8jdo7pv",
  "key3": "4Hp81QfWjcMEcdwa7PiKqyHKt2q9jPcr9N3ssy8vbTn2ZCaq4UoZQ6CAe2cW3oFpdwumgMJPKUn1VeSj5qxXhNx",
  "key4": "2NvVd3Q7y4cocy7cWq1Fu9pvx3fAzHgoqjvTxajoNG8kTqG21EtLxLaqzpvayzMeGAHdJqWw5CZTtyFEuggpqSoZ",
  "key5": "55GTzLYA789EzHFsGXJ4cwkQ2d1B7ztiRvqUR28h6qVYoyKSvRcxvvgx8NhFN1bQ7dfohuh8zdZt8Um7TxzqyvSd",
  "key6": "2ywN7vLmjfE4FGV5ZMCrGwTsfDhE8PCEZScnpKwXA8YqbBYdEXEPrTYECN2EG4kxzrhXpsuchPvnNEUKMJVmmshj",
  "key7": "3KqVAdVC3W1wNig9y84XsF6i622gbembb7JwFHqeEMMTacQbVA2ydbXPX6xg18ZYkqsTkdABKbf5rSPv7KFPQMSz",
  "key8": "5azZerUbdraMuf8epLjnWnmAgMTNu5gMwNvM6YQCgZiX99ohBNeKZ4z5Uc3zQhRm97jU8V1Y8gJWvgfHNJNakUh3",
  "key9": "LXF2NbcgRLu3YQ298vi5e47nS2NumX4kuk8Pskwata5cNqoyHCEUznbELh67AmAa9i96LKNvRuuqRZtPTfLiTEj",
  "key10": "2qtFgZQm9wUTXE2aeT8mswXqhuHTjbDTMu4K1Lpk2kXtnaDKdHCRDdsA2qJLt2imSETdAPbgYTnWYUz7ghDAGr8D",
  "key11": "3zCWJcbgHgNCwE9DDpbw1BvzUQF3vsg7xBg4Cn658JaPMrmuPrgz4RbGyFXPQVwXheHx6Eg2BQz89MiXsmHH9CMz",
  "key12": "4X1hyxYZhK4oqe2FHzVU9M8n3otRyRzwGmc7NExCC4D1kiD5CJjLb2Uu88eWosUht1H44Pg6k9FwXUxqmvWT4NTr",
  "key13": "4NunvnCQsscBTkXKWzp9HpgczkBfY79tJQmz8wehuB9LY68imZUkkxubmHDAUZLxoNbyybcrmmgBCP3hLGdHTigE",
  "key14": "4yYqYwRv2YjReruffAUwZqt2amSQQEAfCDoCkWDkJF3LSpLXG1jnQPye74cmgs8GDWir8gZBBL8AyEAdsU6BCgjd",
  "key15": "55qksahyr23NmdUU973Wt4bWTYLMeRN1cYbciCKv5jZS9vgmwDLq8br9QgzogAzWj2rJnK2fouEf3SwaWky81xLA",
  "key16": "43QYRCmxyQoug92pXqkKhBHCHSFBLZyTw3veKNrUPo31hpf7CCryqsZoz3wo8ic7wgfY3PodoWZpXE1ba1RFuX2v",
  "key17": "3Luvjgsy19myoZqaahJfx8UCdBAq7WMx3N86Y6FzFZ3DiuSK6kjF7Wajck4aoATtwSvLa1o7ejCHBUrmnnD55wdY",
  "key18": "CVPeH8dUfwFx9PDRe2T62WZb3RdmpB7QHKexNxXT9a2hqySjc9oSLpEBAZxAuAGz19xprT8trrtgPCCAV32ZAXe",
  "key19": "4PwNCiaBqxc47v3ywmDq52VW7La8tqxKpmeM8yPFdhQRNMUxyWn8eTFPmAhZzwRxcUA39iPN4mRjqhCLXDj8CCT9",
  "key20": "quhtRn76XT7S3cDYPsFZXwQ6Gn86jJVJBLsQAm38J3PW4XFmZKZQ2vfWy8jQALRw94vLVaLXXMoD3Hq7BNjBv1n",
  "key21": "8sBX2wZf2NDJCA9wD8FK5UAC3vNaJtwxrEiW6cXx51BMFMTorN8kCEfSLNRgQtnQJEA18q6XfSSDKRvNsgmTtB9",
  "key22": "2cq56Ers66qEyheKXijZSgZHVpWiKVvyRSnxWiGXLt3wtsBPziNfUQQNLq4PeJN6WxD8aFGk6bH8dJ8LJgMt36g1",
  "key23": "3KRcWNqNPNFU6oo7EFb11dRUfxHFWF2fFZmHpubE9twuoPB6ffzcniYneiSXH6xtQoKXPtBNGFfFuS6A7JKD6bWM",
  "key24": "5XugBRpcRD4QDYPD6wCeR3r4Le3MkHK59ud4TTM2wy9wqPu3LYrwBQTFNcq4eY4CrW1GM9XxJAe6fiQT9G7agv7X"
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
