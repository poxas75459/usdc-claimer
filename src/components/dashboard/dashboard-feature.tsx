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
    "3cqfJS3j52AWCmbgZtQo6YUAzgfCwoDB1hJ5C8XbhK95Rxr4TDZQuXVimdudqePvkxnXjx8jKiJ6gj7e63yp7BzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4roZ8RuNySaEVLrxFqzVC2oG1kZEMYKXixKbuRVTkPKBzzyFyjXQfXZoRRawb8e115sdB6bwH1bpFXnc7isTYLD9",
  "key1": "6Q6SUNEs3hkvhoZJYM62LawVMUqhQMNS6y4aBkJj1HCD3R1ccd8riRtaN8VnpiuVC8ckoT27BzBHqocFn67v9wT",
  "key2": "2CDwWQyYe7BtPUJqod1t4iYrWBqVLMJszZBBZJAXqFVCGSsRAfguy7xrLDequUyKSFRyoPJUjTBYGBx3VLB2H7oP",
  "key3": "2RBJ9mhe7eNvmHeMpCmjdDAtY5aim83VVvirB2czxB1sXExVrVA9ciXW2zNP45bwfn1ETxx4iZsEGRFK2yZ7nHa1",
  "key4": "35qXj9DA5Enux8cr5ZtuxTPd4XswxKk9qRqAzz2ZQyjq3in855aiWZWcdQ1DjhAbiaCkw935yCvCjaja6epMzUFn",
  "key5": "4mF28hGUr8skjTFTwDqJFJV2HTYEJeVaDjLod2VuNu3WcycrbBfSfVBByy5hvP7U7o3c7YyUYYZkJz1m2hvErY2F",
  "key6": "34zmhpsuVF4jKqMHHvGTL8JwAHBuiuadHe4RPpXKFRHpBSz3nrzErUqaxduzeDvUyoNC73imQPAf6FJt3VFauJja",
  "key7": "2GCqvK4SgVFYDProJKVDqDPB6f8MsJXmSTBdtJx15Vfv5xbeETfXaMr7AaUbKApTn9VfTLzswNXAQE3gLgXebtjf",
  "key8": "63Un6KhwtWAy1dUHfnMxVRMCjPpgGviT2hsKtidNkevQaDTaSU5Zs5kdzED47MuYXuQkWoWAcYiSseQcB8uRUn5X",
  "key9": "5ZrRwxpfGUXN3w3pCF1rBA7U4KPtV3UWimEY2GUbVqPvsxG3VvFx5TeWEccV3atyPp9nCDtKCfz2zAbdzmwTjAXY",
  "key10": "53QTkv4Z9Q7bodHcmuiUPfxe4jDyBMD8QosZMGGRy9oitKLdJKCRevEbhWsAETSFRGYzfpD5ufnuRmKzenV915b5",
  "key11": "5JXs3XANaFzK5maLFn98SPqtjXkTwAgtwJRFeaH8eFW5H9rhNqoTw5aUSaGzfAMbb1MvBcChQPRSdKCdcL6xnXBL",
  "key12": "2SgfZUpky2dt5FhhQqaroAdkZ2senDZCHS5DwSnpnqN2ANSQubAAxUAcpkYxni8n6TePZPBEY152eyiamq3ZpvVD",
  "key13": "3yVc4nMH1e9nFuZkDDgZkk6Ma3pX48eA1WsDitL6qiywy6fQKNFTR6LBT11KLhgxAFdNx5ouemS1nA2MLYos3xhg",
  "key14": "2umPYtzoeWxo11ZgmW8LjGWReV1sY3adiEZL2mhaYjmgSCvtTd8n1wfpe8MVjYwUgjsAFNp3KncXpB2pe2sDD7xX",
  "key15": "2ayT3bTY4AzsWwbW8VG87o6Bseb9hAHqs2gcznAsSNYfSjbBQrzaRV1Y4yRLifwJqt1GRAWnR1Lrvoqde12m8Ch8",
  "key16": "4UmFsNeA8SSSsmLYneTzQEEdpdj6t2sKmMtuGqxdriMpyaNJydQ1xeP4L3GtpmHmDpXpvc1uttr9mbfEprVvj91w",
  "key17": "XsHdhG1oYVNneMsqVZLQRLP3MtgCjfu8wTeydKwzQoPChJzFjB9axS4TJpV8g7NauoLD17Ck1muAudDdc4Eq9dZ",
  "key18": "2jANRWFsPrdihEoG5WU3MCdmUdxbFnbQXhP7GLYfv8ay1RzUjXF2LMU5shqqWxM9LjQj4BkNDBPkiyaGvQBULPtm",
  "key19": "cN654SfYYjC994Vgvv9k2434puR8sUWQ5faxNk7R35nts6YR1esLsAfyWF8NP6vYPQMN2N5pDx6fjWWrjbPtdyW",
  "key20": "5xmTErwZS57FNQM2gxWx9d9aMDa435Rci5fosAfSBmhzedmhmBzBtQotTCd7tSwm97Ne1AZnwHG4Mhegr2tu2zU5",
  "key21": "55h4qFRhYEwGZwSvMYzmoTZt4sMP592cDCSfoen9oKjd8MKbRnuiiPgNnoC9fefwgr3M5Vs31CiPTArhvvAZnW2q",
  "key22": "45ETiojdXxDdWq51vQBgwaX1oy5gjuedJ9cHZvhcfE3KPASuGmVjy3p4B7K5Hy52z6wxNtJJ21V6AySQwGjC48CT",
  "key23": "2dm3cwxAqbpuQea2NmsAMxktskW7X7EZVsrpGRn52oNppABoW84MiDHvVELrf1PDKj9J3ViDuwrkufoek3nhgRUm",
  "key24": "5JbEjPGrGR1cVNAjXXUEgv1716Pet9m5akERYGBu9W3xKP4ZfXYXrrDVRfnbzvAxPyTMXqcKMGHyNAC4eg43xfb3",
  "key25": "41BZhkGQS2FzHUuvBvbQfvxnJajuJcC7Z6HKZFUn66zKDH3gZnjgi6NCuZ8Bbwz6x44MQtBdVgZYV6eCydDiq7Dp",
  "key26": "27qRFwmsqEGCH6Jgd1fSNXEjrhuYVcFk1SNigDWLQUA96Hpx3S8uD1Y5L7iuqygLCkpv28SEUVaf196WKLZQCq23",
  "key27": "2iy2FRUKhsmfqEXkvpSpGHG8o28wNHoFThYfo5HM3hv9h9HqMBbAUKrfmoG8d2ZKin1BcC2KmALGyvib126XuWhh",
  "key28": "2rDKFHUoBfbevnuixJidaehB9zJvF6VKTzW435P8KSKUbbnYABNg7DgSTZnRjQ55t5TfKPwXpiTkwqydzKManf39",
  "key29": "6cEtqMJDGBwhci8Yn4RPaZ17ewHS9EwHmkPXBqJSa81K2Y6uotkH9SZJcNJThgjH6vQinJLmmg4vsLHVpLTCPq1",
  "key30": "3TG3r8Jens7WeKh3qtnsedRo1FNEnezH842XFjVMTschThnwbziHrW5SKq2dJbpfJhKzhytD8GZftVapGvKM5PJq",
  "key31": "5EavzuLorrvEEqh2SZ46qQQsuSv4snHX4icviavEr9YvdkrmGqrJDvbCmvk9GLYSEx7DfC4VYWU45bBi6KWQwFEB",
  "key32": "4HaZ3rHHXWVAAXzQaLcXyDPYv4GvCbWnkeFmDsWXKuZTqT1mvwer4YT4h8Ec7BbjrvR4wGP9s9y2qWrwKREyRLtr",
  "key33": "4AvkPNXERK9siYdxWd4Saefi3NKcKAFLwNRDVdmJQqeempE2TiQY3ZWreh6ixud32rvUfx3nw5Xq7NrLgwW4Lvms",
  "key34": "2Yhfoa96VpRGBCkjMpsDpaj45DYczn8H4hEkyaBHWYoUMG5wjs8CU6YkMkaW7p9U9Y7aLENmggNfR3LoGCQfskrS"
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
