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
    "yXGzo1xy9vHuta3tz2KBHLi12j9MZKTGfZEGht6yLPAKQS7P7vUNQHfa1rq2n3bSvDTpVoECkuQ2pR8UpSr5EyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ens2uhVKFVL1nYsUPet3cBehZLYbeowC3Xn96o9CEX8NvSwtgd4XoWZhXqoF2b8PWEDLhKkjPvLgoxpnyacsmr5",
  "key1": "2CHmz4HjcngzwBnRHJMoQraTnb3beSvuZmsCnXUZJMVa7dUju5Ge5ona1Az4n5NDKoZ4V67qEvUnFfzRUVijJNQx",
  "key2": "2v7PveAWbPbNWrA4gYs8V8DqB3ppfv7YSaq8FeM4va1ijUmfjjtk8XRqsfVH5vY8zKQ3TpdwE9dAjJPR1D9MgmWo",
  "key3": "3Yq4XCTAPfUhXnPouwfnQi2aQ46DQeDppfGf2DDmFRwJ8Audw8EoSg8V5TVw5u3fnnPqTUQjWMgsQ4HMU4uy7YPm",
  "key4": "2KAKf67LeMQRzUTxWMff6MGbEwGx26KnwgDKDpAkVGaZDUpYkB48UrjB13Fzr8rT2ZK1YHFwRD2kgKZ4iRvcLtvH",
  "key5": "2QsTKs8E5srraK8d2dSY23n3s5F9rGiNWabPuQBAKF3edXSEHNwBsr8efdWBgrCEHviqs5ZSsdyMuLhK2PCKcMfU",
  "key6": "xb1cA7jxS9sH7a2CD1vCsjyfU3cknKMqKYDdLjBAMgavxiZzTnpyR3xzHKMsVpDW9Jb4JNXabWh8UaQP9Q94Xt1",
  "key7": "3Gn62ADquZ8jtoKKHAz7hfdZpEESgkq1KEvrzVoZXedFZackiRZUnoT7jey825imWqs5jofsp5bDqjeKwFWiFRE",
  "key8": "64SyobS8Y4H49xMQaMcZe8DkuQwYYZJrDd8LQWhLY6GtwdHqpb838ahkWdPZReSKisQKrgjD76H9givovs2w5MK4",
  "key9": "3tjWruUwhjea5wzGhsZyD1ZEbRYdeU41NKBEiJ6sMc8Uaea43s2hGtn7ckY8GUkKjb4ukrt9CJSjvBj8mP1baDHH",
  "key10": "4R7hPerd8fdXQTvaG4Yq3tes9BpsqxcgMenSAPmnEQF6RwC6vchArp4dK17aSKV7arc7WEy3ypLZ31EweyET4Zff",
  "key11": "4sgYEw2Fdeue1suAj4LHxPxrWsffBAeAMHK4i4hd25aCscS63YfomYdYKEpuxGS2eUKGnGmFp6Z2B3mkspzro96j",
  "key12": "54bMVo1sY5Fbaw9jawKVVTi6H92r5WkoRCe6PvTEdiohWwTF6VW72UaPXxBfabcT7MqC749PzZ8czE35aagLgquy",
  "key13": "C9d4vnHyFKgoUoyoFKRiqskre1LznvMmWuczZyiegx9rHhWHZpSPN9kqY6PsrbEHwUgNQJP319Kp5g5rYqXXxfQ",
  "key14": "2Knw4r1N6RAc4GphhnuCJWwFJ5gt7bGcvEHDUY2bkpxeCxw3cjeAtBi7DdyUsRk7P4j3ukDW8AtxMqkSPVLX7Xkx",
  "key15": "2wGFHMzR37YusYJQNhu1hd6pTY9zHVtB6k8oJB2YsU4Dh7KHnX3t7GZdzCbTpSqdZJm5b5cgFM2ySZxh4s3EGsZk",
  "key16": "3GqBgkrFhyiGrFfEX5HvW375Wizn3HwgFXb35QTwUm9YG4Vd33bY2WYh5ttRXPGnHtBhCmGwcsgqgoHz2keB97Py",
  "key17": "2gswMVhtQxLT8hSceNLJt4NtsjUeP1tmDWA9YrLMNuRsfK7uSPwk3XRkwY3n8TFPTNLRwmamdRZrjfSYM39pA1VC",
  "key18": "3hxVsCzhJyUCQ9q5JYjAv8sW1BZTaxfXZ1JdHQDeShVGEzZPDWdDabTPAt8uHkiN7u5jNFUnCdDKJrctXcsVMaap",
  "key19": "5oVCcjkJYm4oKcGqtSnxXAP7n2ZWonedrPPPJPBCFMRVbsmnXVyvwXLn21woG7CBABbYU7WRiqFQpRp1HQn9RCsn",
  "key20": "2X2nrw2dSCoTfaQsaiiRtSm56wi7zAqqdWBLL4yzjaZzGe9feh1yyY6gW5Aedkyh2jX5VGe3L8LQ1q8eBjG1UvPS",
  "key21": "2eaozHFufczprrVcNmnpHmfv8xmJf8VoDHSWcm6xCXF4y3QT8CjD4SKQQ9UjG5bp7taBQVavQazPG6cmFphuF9nx",
  "key22": "5bwJKAaN1mxyfsvWqbHLyf7yXLoJ1zzWi1R4Dp82p2h4EJ7uuycNthtCiQcH3XagjFGV3LDTJbDagSNQ7cKu4xAg",
  "key23": "2okdeqyNHMBem2wxotZ6Smar9DeAcfFMJxWjWfbKPhkunsq9MXaRUMLQ8GureCdJuzfmbqoYZQHZFoFT9RnTTf3",
  "key24": "36KaHdQU4Uc2yzDAKxJaW2zqG68xqvKSffExrJntrgUYoCAQ8eFXHMQPi6F9N5TMpL1uAN7uuzhKkT9wpeFesCdh",
  "key25": "4KGDad5fM351smaPFkhZ1SNkdvJkXu1eM8GRdCUrsmz5Yzeu5Pj7XK7RZLhQzsw8r3zK4uGKpDNWQRyMhyeXYBZF",
  "key26": "3xd2nwvfYp3Bg7o1zUAQCrqg2TimXqmVFy5RigmZFtUFTktCRj393HC3vLxvmkF2Pa1RaFPzKHBNyTdfhkrRWfPZ",
  "key27": "38U47vk8rRUUpHdtgtkLpKNUnVoY4AsQ5pAEKweFTEsenLjG6uRLBxYYM4JuaaH7ozc7HfQjtiaRq5XSUXwPhJ4W",
  "key28": "46vQX2Y8aUiHX3hR3DwZTg33MmGygJGHo8LcUrnui3zUyxgHHvNoZRX8wELicmAAstqqUoE4W8fuNBdvCqT5K7w6",
  "key29": "b49in7xPUCeuNVibz4VWj3qMKxjmpyuTSnxtRLU9w3R6szaw145CUJPwkki1C4cqiMYx3oBpHmnucaPujKod6P1",
  "key30": "48FfFHjMqwXKsycbyviUzPoaqfXsLp3AbpuR8zK8kFgsXzffLvM5uKstoBHe2hyrpUH9EKhVbA4hE9XfSvqQY7Cv",
  "key31": "4ig8TX9Me6w9Z3gSrD86tjw9bSjPVkJdGHsygYEQfhxBGASVraeQG3WsNwWBkvdgtbHVHnA7ccHxJFHtKboqLXm7",
  "key32": "2BH274jxUKSL3PxRkew1CEqNLXpAL3EtPiMsuxhq6nC2xQyLAyMGbfdnCX2c7kVfQwTU3uaNyqQT3yZ33wXbgotk",
  "key33": "51TPX91nd8aCuxcjMonuC69ZHpzG4j1yFkkR4egBRvyL1xNytjKUYXqW24Q67zAiotMJjidMEqf6v3GgNywAcr4n",
  "key34": "58VGTj5cpx5qWKhJVvyRytFgnfD749GzJnNdGrkMnYxdYdp3QNMDqLNhh5MCk2xifLutr5hkdZosXwpHKMFVQyPQ",
  "key35": "3XjfJifdNkqeuhp3PjUnr5HaW7zGWLrWCvuo9J8z8T6D8YRGdDbsxvk3fTqDe3U9gGLuGbz2LzjBK8HCrVZX5nGv",
  "key36": "2bfh2Mx51PV9msJwB4BotejdwQMGjH324cWHTSSjPb8S3ntaJ9kbQvLcTKBtXq3ZQ27DLz4YoTXrNXrNwVuBV7es"
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
