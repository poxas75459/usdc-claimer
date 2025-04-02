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
    "4C1ER7kk5NP2dGMYPBP9Ss4K8fXKHJ5jXDkV7A29HkibFtAR7DA67j4qYmAeCX1d9dTcrkAAU9a4iTdz5UeXCKkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gj9scDBJEQxn93bP7D7k8bP7kDzBNU7nt2QeNkZ8VybYdg9F5WNv1shLm1mMxzZK4V4crz4s3a8yYV9fzd4sdH4",
  "key1": "3sh2pEK6rSK2LNVUVt6THrm3Qj53tMhew3PadQx1C6fZc7mBvkWkdFxFA5RsJ7cdjLTJB55EmsVA7U2zphAKqBTg",
  "key2": "4m6XD5ihHTfZEx7YVQSjX9j5nVVhCbnBWEjWRogvaNRRZ52txHEvQYjUAHSP2wgn5Rran5Ewchw413xNc5FkSYrm",
  "key3": "4zgmhZSRP6ir85oX2dpE98xa6XB8HTRNPa9xsM9gvhRAywfNwLGzgq4dX1AjgqykUHXkhnDT3EPtjpBKHDQG7wyo",
  "key4": "5SxX7tk1SQqD3i3S53nw12sQhe4RjxDBL4qHUX13q19LKRY3kiXvT4RYN3BZL3y7thYTEVhwjNC6bf9qYDY4cW38",
  "key5": "4DhSAJdDeTVyxddpkpK1RWesLZQBT96aDQETjdSnzMZnnSi9pNmzZN8qm2fSkq19wNcTLubfN8Bs74uVPrUvsz8k",
  "key6": "3GvhLUkSuBxGJ6o5CGN4FuKvJx5kVYTw5y2cSfZuYcGjeAvPecGCegMZF9A1wfxtdcLK3V5V5U1ofqeoMp7z7EAv",
  "key7": "3wuJJiorDeH9uEg835sY6gqcBp37uHAemDx5iBbpcALj7oP2WTL6oVftPoyiBvBxaU2MsAzSbkbm665ELvLhSikE",
  "key8": "5xttZrTz4RMQk23huc1n212qULK39dzGE4zaf8vFuBAJZbQz2NpPytZRn5VeaujE4moA6Qxn2FQE6mke9QCW6n4R",
  "key9": "3E5byVBj2A9vS7WFGKdWp7g7dJ6SSknvGzkUAeFpT4VDWmqG7kA456SyqRPzAMi16H66SNV41bP1Yw1N8YbJzin5",
  "key10": "2Y1HmTAop7y4mEvX7hdBjbB1jrpYnQ6B2gjrDrhn3Kvak7cjXqiTtJoEamu2dRV2LDahYqdEqumJTeRfkoHksZ1H",
  "key11": "4PCTZ9T4xeaJrARQuBjZBY86uZw413Jr3sUNRq1SkrN6TAuXyRxmqaCJVxGGk8tPmvWeEUtY7533fbeyS4TvLfYQ",
  "key12": "38ZjiJuZBcjqCjDLTyo7k9zMsHzpvAYQsimJLyEET7kLonxau3EsoBWjgt5oUkNLyiWyz4xBYYadNYDvWeQtbMFo",
  "key13": "5bUbfLXsyuEKAf7ycU8CvcnhjbF2GPH7j9K37wEwMUV7vYjaBZzMcUEURqB5ujAxQYeYaWUXRy3CtEFgf3LHBt5h",
  "key14": "3zXj1DuzqkUuyuJdRjB5c7soLhaQw1t733VfX6eRGbsBr4M76Ws5QHdrA2vxoreN1gYk3Wdq3onWvfK7yzrLg2Uh",
  "key15": "3hTfsG7sMmvHooQyfDGWqqaa7ajYzGTfKk5KxjeqCpkFcWNcWwuytGALoLgidrr8d7uvRJTmaZnhYSRVPAXbADY2",
  "key16": "5SnisoFJ2JnusAmkFupsisrsivvpAyecspudBvcrmweeHmY7KbFF93TeHXZT5PdgMupRq2a6Si1deGyp8yqFfApQ",
  "key17": "2B7dH41s4tfXDxtYb6Sdf5CP8NsB766x2KhEprT9n7mjx4Nh7tZC1JmTx5582PbS89GdeFHgKJGZFrxLMuD4oVcn",
  "key18": "2J5nuAVVuWEjhUgg7EbETCQt3xRCku48SUfdGfsZ2eM3CPhdu7HkkhVXTsfuT2Rge3STh1aDk35eEhaTo9839SSg",
  "key19": "3KzoHG1rpHrXkeYWh1knezUVeDGoJbja9BdLM9ehWbReadSbXM2gqKbx8mQUHkZMJDodTipYRozrZ4T1Z6iUh7yr",
  "key20": "3FwSNUXUj65mJaLMJgAjjPmGnWzSBPEBdGBZLT7KrzF5jq7TT1FarXhCiwHHdKXYp6Jh5yFXWyT41L8cYQM9BPWQ",
  "key21": "4tctU8GpMQ2SnvVxSzhsQs1ckSu3jPk7TP2ARg2WAtbjqYvoobQhT7ddmCGvRcmxDMz4cvZfguz1g8bRLVafzkdn",
  "key22": "6VAzpU9XXUcjpcfdsa1MhnF3oJq36KBEA48tieZMjZeY8ZNTAyzSirDjUtZJiLVqV8qLJCm23WwW1sjzcyL8ujb",
  "key23": "633r55MtEYZcHoZPnGbMs766bT18aZMSCk9Gpd6LUQY6zABDwFzFfdMWHFRAgsiKBDqY1qy5ESgaewfuf8iP9aDd",
  "key24": "3SXxyBU1ktZNNjeFARLneQEWaGG7CC9WxufJN3do2LvAuwhmKm99DA73CTLsKby7nYxwBgvNpi61NYPpqZC6Ztv4",
  "key25": "BRvHjvyAEJS8LQ8e9q1rEiTLbR2vusi9oKejabtWZjV2D3CnfdHRPHGGYsc2e1tXtFAxedysvVCaJgFLUcqLVEj",
  "key26": "5P7HgXrWkpFFNTFywwaAE1tEprBZZbqgBRUnoB6JFajBXK8qJb3vrUweuVL7NoMjS8VBErFFhAk6bkgxwjqw9PRQ",
  "key27": "2djMN47EptdaLHFSrhDSNDPHexpdzUJdjLn7WDTMhzd9cL3niwgyHkAYMLeEdcwU1V7PHhWEAePMrsexhT5voVDq",
  "key28": "5NieZG1KN7ND6otjD88jxMfARTH3pKyn1fLK32V7rXmAtvxk7qQFvqc2oKKqZ38WQCqyYqZiAZVozUgCRRRB2oLQ",
  "key29": "TZPCBCtazoc6SLJVpAqa2X1woTHVsh2Yv46aztFBMYpgDFvsCsTPiHdNbBttkv2SqPidnoPnfcnGDBAwo4T2UvH",
  "key30": "2gB9QLBdioAqHrHitutitrXgr98PpLethpcuLbJfPyXQpaH8F3hLLCpiSSydhmez9p4B5hmgK83gGSMsZ88sMB6e",
  "key31": "55zL4Fzd2sUS3RMR5jRNNHjFhV5zMkSpYb3WuoDqPUW6xHAXERCVw3sFUMJx7GqayfLDZFJojYYo4n2hQwZion3r",
  "key32": "5eJWRbxUV97BcV5mFobUwD1AwkymWaG2DB1tnNTkjnEgxG4NXPnhFKcqarqcgYzdTorZQkVcbfPVAPh7gVpyv446",
  "key33": "L56t2dqiKi4CSUi69KVqhbYVR7D6MMcSm8TacLjjzdM8orVehL4r1pAygiQSw5Z4jjDAG2dM4W6tbEiSjJXic6e"
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
