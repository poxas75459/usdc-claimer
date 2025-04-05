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
    "2AAjEbVpBUuTQE5XBiVe9Fv7qtkZd1ov2kVRJx2zzVbapWS9tzGySBL7ETfLNZNqizhGGSsBNt2LZk7iFoMezMu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jfhz9LmpWCitoskedPtdaRL9pfLrRPFHTvJ4qfT1us17UEE6Nie3WkSx44HHZD1rDphE8mY9pmH4Q7o2cMD59UA",
  "key1": "mdp3hHUB4MVDqELBcUoG25qsEzwyWWdvX8h5tTE5EfmfhzGKdBpkDPhfHiya4rLr3pfZG7cw8yqdkN5HkgbUdtY",
  "key2": "mRkvzMvJNvsGCDNSPsNEK5fN3hLBdYRCX7zcjBJ8BR91fiemjSV9jvp6PNT72vNC3d5za4qjEgFeZHrkXBcL9Qa",
  "key3": "4cypmfX8HHSxAfLgSooGJ9CqeefDCNYuWfRBEq2zAiQyZCPAvFMqAUXDf4BoTfHB8goMpEvtbaKvtqZwdXRAxavH",
  "key4": "2jNzhxx2CJ2AVRXLu7N5XpuXH46x2orKtfzg3EE2zzTiLsbWEWrQkzi13suejW7ymzWyuhzftb3qvvaBsuHPbeBX",
  "key5": "4vBkJaNTp1QkVNMkbPq97Mpt7w9P5aGMyi2Xe7zPYPqCoMNhX2KRQUk37e9Waa5ec7gL57iY4qmqBhxj6wVQ4KKi",
  "key6": "4j7JxanGG9sLmocrxg5zge7621mQE6wvPvUgUSX3a3Xi3YJLkR3u8MaKLZ1M1W6fVr9SdsESqv1Et2WUcur9pDar",
  "key7": "2QuqNKma23GjiuHwSaAL3YtZ1H82gTaTiHyAQq3kDKyeyAYzLNTkxzMhVNe2UmipH3wzC9auyN1qmmGxsrVKqc9Y",
  "key8": "4vqGm4nuv2YsuH5kaDEL81eoDewDfSsHdUXgYGZJdshPfkurxjDpYatqfFGvnNsAqDs6zrQdHm9UdcAD2pdSDnay",
  "key9": "3SXeQwX3MfCKXhHrDgBecX6MnhapvD2gYoL4t9RSbeExJ38FQd4K46AwtM1dG56rZLbQqFFAXoB2cqi8Ref9p6TZ",
  "key10": "66pcknmdysFquJK9z71UuLBA44mukCRraKJZq1GFaG7x2EVNkiqSj9e6KhMvND8SzjaegcTmiYfVkdY2hvtrhP83",
  "key11": "opkm4Ds6NLhjqRRG69PEWPae7oK91pvFZSXsPRD4P6CnAkV8ksak79SWj3RkCZLNgeVGrZD2esvtF3hbp7tYmgH",
  "key12": "2YLk5Cwo1E5qBeY6rQCKt5ZYzqttArGch81mmQpAeYx7F4H61Z9ssyJqRLDS1uGEFYkKkghWvCa6sb9zzixwv7un",
  "key13": "2zowu5CvYs23A8KJFJbeeQz76PBiEVh9ZpJhsn9FYRYqNJipsJJ4ZZKUteMoFxuTLyUSaY44QeUgkLw9ERw18CSH",
  "key14": "3ASbft6seGnywxp5P8FqNbj3A6cZ9wRgcyCfnm86UBZzQXBSLhTyWtGnRt2Cndwig383G132RHf14fFE4vA2yMdT",
  "key15": "KUaqoMk899gnX7mQdnZzrM9RAgKCLk8vvadR7aJKHWbeonh94HYCaBaw4p85ecZnuZbGt36J2KSbjHKam7WDQ8p",
  "key16": "j39YwPHnHzZGx28U7CBkreNs83kzCcaB4gJcgfnpopFCKqRZis8HZYuuU4YEKnb3yZhfH1sWB6iepoVVrnNbvCc",
  "key17": "5ymNGDDwjWkhvMqVNQRP6HrNh6xULyoSmEsdQGdaMuL7rpDjJYNszSetaerYAA2SpYqE9GtxVW3NYjeCyxsoi6Bf",
  "key18": "5ScryKJW5cpTwpn9CpcUpXkoexbQmgPiSy74Jw5DPr961a1gwynk9FE46UdcDYVaGbhNUXjCJuHuanSp697TYXQw",
  "key19": "3pyg6hhEWf25RcRcAK3fkSfQVcU4dxbYP1Hsve9E4VJmComsqCYERsP36Emmube2m7QVPhG6S7J1kicPxCCZQBAK",
  "key20": "4VxY7T8p7VGg5htJvYZUsmWhy6qWWgfPsafnQPhCt9XritGwDc3fTyTgrYTPbbGMBLygKvpyFbsytPS9bZBSKe1n",
  "key21": "3NdKciG1zr86AMmRMoJi9dyAJEDtGgYf1ynkBMJw2oMsaFg1YgMedAhi43nj6ipkektXtPaXXVm476oAW3Atbypc",
  "key22": "3rautjMrB435DjjZ45rGktfeJ4MZih8kCqPgPBKQ8y5XmUzZV1HQsxnA3KRuaG7CCQVEMVRkB64bptdWjB7wnFks",
  "key23": "7KTGFHfGWxtyuEX6KCGYWsUbJmhDLbYWrLWf8uVrrfxzQRaXwCii159Lay2YRQjQ9nmEgyY94BS95yTMWhdySfu",
  "key24": "s9sqpk5mdA9JcC8Kp4SCxdsMo9YHkix4RdsMkTTe2gQ7zrGn4P4zPHSaA4e5Xe3kD5dU16FFr9ChPqfJDN3f97x",
  "key25": "MrV7fffKw4thUUNuMJwir9mj8vKeS9zP3ryytLJvAtB3uDn7jgeGWSzQ5Li2DMZdqsRqk79AQoPUCcZhGYny4F2",
  "key26": "3jXnLXWqYdnwAMMmb19fYFo1LBfnqXhB9nCaBfvVJW6fo8F14BuEYG1wSZexrzD7Kw96BGWsipjyy1EvHERAJBVC"
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
