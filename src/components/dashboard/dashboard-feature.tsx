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
    "5URSR9yUfJcoa2dvJijtftChqkV9XvNpfatyASMBrYmsPbfH3wwYR5EeLrJpHcHXhcSKppKAMmXRK5tixciXCTUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNgG3mqga8AKFZSofViGmPrn7Y3tozvRau9dAKb2D5TUje7fUPfipbQFqTFcpDRWAG5GjHTKzjrdHwkP712o7va",
  "key1": "5PqrDQSzAUP73B31kd39UF3SBUHBM1g7yfTUZYS59pfsVjCQMjtWX4yoFtR9szFFKF7xsWzguYce8eijQMctAvpR",
  "key2": "4ov9UXW4nddSYYusLYdzTz84nerQmsgKk21vhvs7Rrhnf12x4uCf2sZKwXMN223jXWSxs74sjRPFSnZU37NSHtS3",
  "key3": "2qcvVWWUVCgU8JpGbhL1kXnMypJx8ohceTJaycS7niZegRuANH416jk7RmZZ96iqtz4cWxYwYvdPmGEPW64YU9F1",
  "key4": "4eDeU9cj7BT1kGrL8godURSuGAUtTYpiZp6wjLEST4dv51FAbywDcyh1q8cdhYYULkP7LYec1ifrUr3hNxKMb9mK",
  "key5": "2usZcdo6rNyMMdHveR7fsMWhssHVSGRQDsPj65e6iyyDkLDo7bUfaXwDhkhNqodRJbLkJMEEEcBVb95wh7kyfKZ8",
  "key6": "2c5G1WWtUX4qM6kq3UdBEndtm4n3vk4cFd6cxopeJZwg66UT3KFPWKATbEZCi23h3n8cg6u6y5PG69QDnbXpGJM1",
  "key7": "48xD9PNGGfTrAu2k3DPxaW2FLSt1JVGYkc8n5sQRQj7oMMDRraQCho7zk6Hy6eaVCvY73s7bzqtgPsg445nbb17c",
  "key8": "iUAcit5aAqgkyJULjfPa27YQXTXicnn12dnB8k5QXjFGsomSku24bWe5AG6tmGvhdoLNmWfH22j1ovw7852NHCr",
  "key9": "3qy3Fbisqr3hF48vRd4GQ5fHqEbzDwJKHsxZEhFCukrvjartJgYisXdNNZ89iorknxEiAx2FZKvXvvDLGoJP6Uq",
  "key10": "5gmicMpBP2RHyQTaRaajQ3E5dEoFQAfrG7V5GPyctmLgUEoH7cX2MCZL1iTsr5hszevz9KQP7m4dWSD74cPxaZ2P",
  "key11": "2RGZNVmrZ5qFyTv5Qi8JBesQT7rjsw5hn1KE54D7sdVmLa7jJfhF9fBB2Acf5oErAAwGMidDzBys51iFZqBBwdCu",
  "key12": "3Eno81zPVeNgmcsQMWS9TQHZyKfhDhZnQmWaBXqiVUUBkUvLVEFuugc7Dd1FbLMD83njnM9JnkP1fyR6S4EtBML9",
  "key13": "2YF1zgdg57ZRvsAHwX56ELCbghSd1KF73uh8kskc4yv4mvPBQLw1fXWHzjxpwCsHUuYVPB3zxZjgKioM32tKZsnx",
  "key14": "5gigyhfRThK7SefMm2c5v8K88SNsNEAvT69MSoskUqJk7hT9X9C55VwyvehxsvpHKEKEtrirJLsm3pLZrTHy2qDM",
  "key15": "3EPJM2PJsuhUgsdd9tdrEfGcYoFEqJbdBoSrqBn5nQPj6vnTtDydfwEpZVV69GMdhr9Em597sqPbGJKUKzN4JTeX",
  "key16": "wKKpnHiRARxN6jZLB4oQzRvQCFutFLQ6BWzQhSZZwoCNR9Meky6DHNsTQ8UwgihDb8qYtHY5ywq12QxnsNJASX4",
  "key17": "5XTB3Wjo5unmaCaFvEieVJ72d7MSZ4RnFe9UtwoxiLGPVMuWzdkVdSvYnsNtCYfkaaSQTRErBSfannF5RAz8mqis",
  "key18": "gSVJ8kYp3Xtkurgn6BkZKB5Q4uLofLu42bjyLqV2AYoT77uU8Gj8q1D2KpFkGuJTqSMMwxu8TUMR1SMZ3CPRp7G",
  "key19": "oJLwgGpe4rXoAqbWrshc32ff4eN2aHg8fENGCCLf5sJM7tM2jV29zcKirULcHzfX9avwgBXjjNaDNdz7BJ6Psrj",
  "key20": "3egHS9TJdEXLMVt5FWWGveC4HvrvBpoU7F5mztKKA273xrRjVcjzRXnYZRo6rV4rYuhmwijiL4q3Yy5EtYBdg6e7",
  "key21": "zRCWWrkJs9higajS3UF7K23B3fvwXov1g5ahCCw9E5W14mwrP9esJsW3ZeXg9gybTVDB31f6LHWYaJ6gxtQxsoh",
  "key22": "2iNGzHRynyvk9vLJSHVz3bAs9PUCUPHBmuEtBin5rFW8RXdi8hzJh5jpiTzDriZje66uA7UNnX2yhxSLDQ7KsAj2",
  "key23": "41qcPqPKzWKkjD69uQquxinS9XdzrHymZqMK4tpnN8pebowTUnzDGSAZLspJtdB2da4oGp6ABtcabYSJ6THKCNYZ",
  "key24": "xoFg2cNjmnNFj7ZxBRCKVdF6WVyM6YpRY6YiAvN5BTGpGiGcY1hi5DGj14vrRnQCKuNsyYWUStikMuhyBvMrNjm",
  "key25": "2bUZw9de7no1g2evAypnLvd9WBG4oZZeafCBXbKh3B19HASGpTQif1M4yfLRUQWa4vrmHHkewjGTZopDGoqeeG7F",
  "key26": "37RYkg36erBQGJMzmes6FD2MV7itvbRnFMmEkRARWi8ZFqjLadAZJZGDVkApDs8TKMN4qWKw48ubi2ZChVhhPq8p",
  "key27": "5Gxfmx1HVDWpdhPAvAdpPGdXqLvyK12rvcgsGiY9ChFipHGbcDXrKRofZfEASeHd74EA5rj9A73XtP3dktg1HQcA",
  "key28": "2i4RGg8sh5C9JTtfDhB7p4UNLt2Hm6dgRynxL1GB6QN6HyyxzchJLag5FkBtAxqD6hdUW5fmzxF1i4RXoZWij3JB",
  "key29": "k6GfAzJn6qzzcFjmf6B1DV5zNGtNucsCp5PVZd166Ma358EfxxLkE8zDfBFaX8EGYVaDfvVFmnoB5j29J2WiJJV",
  "key30": "3xnTyzaiuQu4PjSMPibzuPtciyqYp2444WqHfKaCJdxXx6sT4o7FjJMFoZjucD1btyBTfr2XotGFobDiK44CrWVP",
  "key31": "3LXC8qTzBdQLh2Dh8tvLvhf5BNWWwUAMETa8NoEfHkKbsERpZ6bBRdaSDrJKXib4XbrVpK7T8uUoBSpmm8qQZZJK",
  "key32": "39b9RNuQajtQ7ZM5SJaVWhv9HXCB8VccGNCA37A9FdsdHrTmCYnBLWBp3g8MV4m8p2MCnwZmEhGjWm5wxMzsHJnc",
  "key33": "36Sv2en2e8YDokTDxZPd9QzQTNNuRwZCAKSUuxaxZ8uTada2CeugQWDpQ42haLm2HraP4D4FFh894ZyTRivLFjnB",
  "key34": "5iQVbbNUTE1XVqGcwDY1wDYTyah5nbzHhVG18RBK7nsUkVinoSBU98GTta9Q3HkN2nvEmdaGVshgPHPQJCFYioSn"
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
