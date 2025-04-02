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
    "5vputFwNDBZAkKFbbVAapagsiqmURq7v9iFJC6natdZC9nsQWt2VZFfQaEkTCH6879BPMEQwMa4UaczEi6DZj89M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zv6gbxYpbpf2M6dBvgWg6aDx9DehwDdCwqCWR8XvvE4KE9Zuy5ZSxAQ4m83xx5z83EZSY9ET4dwh9iF16zFvgwW",
  "key1": "3FRahBvhbyFmKpK9Rhv15veysE6Q8SsCqVdcLdvRZRwiq2EVsWhTiTWqve1NajLhT3ADteDrFSnJyR2MufJ2gmYU",
  "key2": "5yfdKiynBTUcBDqJPvY4sQdXLe9ekHH1DQqWMr93qufRUcJrmwCABw8kwWATPXcHiaCKzNEFk1ytaA1xzDWCGsTp",
  "key3": "2XianjX8kBYf2LuKgsApBxss4ksJJeyWRXTQVY9tV1Kw3SZWu967iWxiSdtsogUdxyUbQmomTXoNaXJzbr7LczAP",
  "key4": "2wCYfyNyBvkdyAXCR3RNrb6gpkoqP68fwFy1iD9Fdp4wWT1uZhAQqhyqc8NmgEeh51regW9GyJFq2RtuxL4vthMq",
  "key5": "3koKqNMPic8DQVApxEciVAEqG1THTMYh7PfvfXZmLw9FhtEcaPNkSsr6G49Me3ApSxdom61HcKJV3S5jLpE9M9qo",
  "key6": "2gSzt6n8eRasVnGWwWpr3M2s6nzJSJzJZFECJUz1xehhvKZ4XD8T39xGoM1wxnUoMmeKpaS68GCVRiqiuSxnHZWg",
  "key7": "2uyoKGvWyKAr2xW3CMcLwRVw9WC6WpBybxBZqnu3PWsYNwPHrAXP1gKvoWU4JW3teBfpb6WgnA1hCZbjqrLGpqiQ",
  "key8": "hJJdKTnbjG6CoCtYchBnHBmWsgRWv4nVEjxz5VLCK6MnVtmnQX7Eyo4jpr7v7RUKeokJvBVgeRAXGPLKzgNbj4B",
  "key9": "36hvKw4MGM4bKCRbXbQzbJvkve3E4Bw2Ftoh7o8PQj8j7MCmSjVDMdi8eWf9VQDJEhoRLMeJuRwZU8eUANLquEA7",
  "key10": "5ga8XtFLK8DvZ58rHyXe23ZcG16ETuPpn5nCCMqCAdYUPXzmN33xi1UjM9tiDqbvqekyuLPVRcSJ95JQ6xpcFvHb",
  "key11": "39z8r8Wrr5BKTP468fkLAkUeXcfJks4Uc1YCnjRAMToSAdoRHQDvctCqDPYKv5MNAKNbD4Eo6MTcBB4dnQ4YDErE",
  "key12": "273t669rkTDZNUw8i6spLE1ddvPxYnSu9aX3G9ocPNd8rAu8JUPjDP9udoH3sKfsWydR5qv6LKbXn5vtCqeu3WdZ",
  "key13": "5WDnCXpHPL8H7amFCrsFEvBGVW93n5ZpWKbu1yCPjXL7E7iYK5XZepVX2nhoaZMX6H5HiCTgsbtxjpkobSb5DsUr",
  "key14": "2vAPfhBsevyhfRbrE2J6YahLX66oc5MRKvGQy81SefabAVFBkTna4fEydn77C85nMjgkxDqTZR7ddqd7ge7qVRB5",
  "key15": "2aug9L4U4XxEeuYY5DN2w4rqsjMq6xKLFw5cwQ8GGrxd3ztNjm7DNWVz6HGDYmzuo21xR7NjDLViLzSmKaDYXv7a",
  "key16": "44dSkdckXS5pvMVtSX9spUQNpAm9zjqCKYgtwWZFEDoifShNLSH8oAJ4RXoynx7PxWxu6ZJ9L7qSKNEkVNh2ySGK",
  "key17": "4zB1HN6jFK8uWCWPZviNaBuYu6DQt7E9WZphQUpZFkkVjKkx9BF23tGCGt3D9VSSCDWfz5bFncQQv5mqA841vegD",
  "key18": "37aduADpuhMvo4GLsfu7R437khcgABM1SMv2nyACyw8cosjCgS9uLSaYQGTjdKFudkCosZUzQcLED2gWabZBKyuM",
  "key19": "5uimAR8KDxF4YqzhRE5TS128CxsNs8gJRxEoS8X7WJZjURwFNQW1JRyJtyETtEvYYU5GcXnqFaJsiHbxMm3SCZw1",
  "key20": "z97nfpmzRD1pKfgEVavPofNc98zy3hKwuEZC7SiXyqBC1vXJgpXFj2t9uKCCaTd2ube1Jenk4HPZDnXZYL6vQ8h",
  "key21": "2ZnvRRbJTN4yLKFzd9Z9qzPrPMstJYbmeSi4iEgo7FcgNXvxYxHd7NdZMs9akXozsYzoTPxDL7xtqCpWYDRPPBP8",
  "key22": "36fUCXaUgVYEhqdBHuoVky8RzYXz7y4AueWGpxfd7hja6QY7V5mfcpoCdf3aPAXf1DLhk4XTipQyTPWvDB4qbvkq",
  "key23": "5X8eCZV7ZeHvh87NrPo8xDv6dYHgqcqVybGRcXd1GB3FtmmASMzxnYBGCRkQmRMeUZaDy9whU7RLmUT7qkcVKu4N",
  "key24": "3tG4DfK4rAe7huDZ2AyKYhmW3K832fz2KAJQ6fsxcd61hcr6mnkHDJAtpy4Qurscp8eErKSPQPAiCrcqZPVp1eBZ",
  "key25": "2Ao2F1Zg9vM19b6Pe5kTB8S2Fn51PpR1W75J6quAuRMBZsG4GUNGy87ywknSTwvieSerYnuh2xtPHZTSQo6rVXpJ",
  "key26": "54MdMTQMoMjvsAQtY9zRBtvfvXTke6PhCXze5eo1TSXDaawPj9UzwgpiPgWtDw6cYSsGGkzNQoF961suomHwPhyM",
  "key27": "sibdiRqx1ZvxnnUGKY81pV28N7WGGV2YJ3qY3oDW9EWLUdpAWVNPsx8DMnGRrBSbh3BsZ5fx93ukTVSsV6sB79S",
  "key28": "5kh9C3qVbjipidprQYjTjCMQPtuXLjgD8uBXbTnmwibzrUxaihhVWyv45D15g7jkH53uoLU2CLp6AiMuRKKUojjw",
  "key29": "5wbvsDURHeKQ2L7DumTKcs9UBxVRtViaR2ekkHKc4e3Dsg6ogjcaKaonqhbVxc5VdHcCAZZtNj9MLaRsJDLYY9Vd",
  "key30": "3Fvu3cjp1sxPfphfeNcCszWWNHMgifoqHmPi97M6ER5upNTd9nDpNXdnXL8qYRzWHK2kNNopLm4i7bGqdqcymtnn",
  "key31": "2oJVdMHgGzHAtP9J1kWtKQcgiqxh5zofJrzQ8TQSQfPymUkgY3mEoKpoWgF6A8poeESvnXVM4HXEM164R5dLTPZf",
  "key32": "5FveDLhXPUbn6u6W5jQpn1Ss27qkqWLtbWGw7tHGCaR16RCedmAVYNhobhMJgJV8XXnH6FArmkqX5PM4yA75qSwE",
  "key33": "5G5JdjLiPJuv7yagyNiinL9E4QRmPKEeE5kDcKVSk6kPQ2mtuagcGZbpwnTNqB3mTPk8zAKevHnZ3ZbUQ2PmBXwe",
  "key34": "2ZMQniBxoeZbCAYgHv2GNhuJDk8jAMsBAyb6BxjvJefuGsDV2RybLLMxWeGdqCnG1eD3cKVqF26UzacspNHBqcvs",
  "key35": "d6mxESD7Ajg1fY7M1rWFRR4Ty7SgzUZdovX33dqHqdD6hMLKSR1uk5wPZGrXaz2evxYZhycTfKDCxhVxmZ3NxDS",
  "key36": "55H7RyiqhPayuYJMR1tKx9Fzwjco866zfhjL1RM2ERw5Gb1rUrpMKvaLY9uDLdkfTZznvMacwoM57LEjYiaGPBvf",
  "key37": "3akvcJVyvTqpHeJfMpCcZHV5KSbmjaFKXieWyRQV9TA9yfBf4e53FNvrpo9RjcYnQyaux8NKJ47vQWEN15qtF2fo",
  "key38": "4CrL7tpP14JGf7GvDFkvvwQBNpPMCsxGFcAk329YqhxshvJ1BHXyAvFv549hFcQbvG3As5MH7YVab5FBGZBNXnEk",
  "key39": "4aYWEHFA1SqfATzsHGN8Ncr4pv8VBt9RBDpUyxBpXYp6zvejppVE2EREQLwZTVpPN3RHwRVJU5BWsymcZXZjvSxm",
  "key40": "3mNCF7yk21XdB7XnZ81X1U9iYotZ5odQAfDge7WmSwWu1nrW4z2jbVwjCEXhCwrAgjT2Us9qLx1inAA98h8yk4E9",
  "key41": "63SM6MGKoHTZDqYkMtui6QZyQ238X1i9FA8uScZ3GS64b2sb2AhLE1UDNZEYGqAXojHo1xo2BgrA4yvwwpwQhg1u",
  "key42": "deMFusH7W2A63dmPiywoaEVqgJkm2BM6ZAHCiWAVL7912yKvfkVC9LyahHwNZ33HKK9tYm8mMUzFmPCdsHi7e9B"
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
