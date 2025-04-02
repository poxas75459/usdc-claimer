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
    "3zSKDF9XTFRhF61o55wWWTRWzwzffhyRbj27jLLnQYRDxuXYne8X39tPkzBQ3UZsce4W67A7gBH7NTJgyPBsjjK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3xMCAD9vVTVUpWc1Hu31emiaGiaB6GRtWk9PxbT27bUf1YXdBTSBFRYL3nhXa5WGNBcGavjWb8ZqysopTwGmgo",
  "key1": "4VUCfnHRYyhroknEY5RcSmBNrGKehCMvmjhMu3C3Qp6nBNXyXxdayyZnzbNd2KFPcZ8Euvejdy8kJtBjGQkNaUYP",
  "key2": "4cX2zz8X8KFR2yeaCctz4L4Ydv1tmbQsZSH8JUUvfckTaUeCCt7C7jUeeKG1vTwUutecFdXfwdUqdriGSTLTD6ZJ",
  "key3": "3bWEzQdidkWeLFmyJEzKZ1e3MiEe5gpH1ka9gY5RdscMSGedJwoxeqmNpmE5fym2C5XU9duwMho2abmfi8YAWtBg",
  "key4": "nHwhEyo33YbWeJpfPM8fHABWed7jh4KEy2ooQ2aycLzkNK6UdKdKSTnHM1uqg8ZpxxSRm7ZsECn6PVWYZiirAsG",
  "key5": "3562rRDYdEEctRLQKttBwHL5hrd3Manp9dxqrqBQvDU6Jje9PKZjqf8jvCcBNbHdk1BKeg7pB66Vm9q4zT4Udf6J",
  "key6": "SaTFseJto9hhGc9SkEyUt3varkUC4Fmaki8E8mwAkdmaLWSXkGArZN5Nn9UbtxmXEza8iPMNwydTpSHpLusyGDq",
  "key7": "3oK9kvA9p7fcC79BGsRQaFFuZh1u1jYovQurSmHj1uAhNC9zHbaFHTSWJkUYP8Vzviujg5mJDSgMyg6a1JzpgKsa",
  "key8": "2VzDNacz5L7xEu5Hzy84ZDHRDknG7ps6HdV59YudfupVfbSFW7b3BK2cPcmkuH6oZ64GbgWdC5ceTrLqme3YsAbv",
  "key9": "2GWKxhK4soWXipAUGTVrxMyTDi11y8ELFsiyrQZFwg82xNLoKQe6h7Vd6mNAut179JXpyRzyYVmNBn8pnjWTipVJ",
  "key10": "gV3Q8eHQNeHJvfGbPPczvfQUuyLjVwcHGPRAwto9rmremUkEPRRvkCbhrcitVvJbGXo4r1QocZuRzTuog6u3BfA",
  "key11": "3XKEZXJi51fXtYaJreoxDyFQ88kebNFf3SpB8adkWPLCYgqpDXmntihVyzSaP8gyjF1Z6iYrTTrYeGxig4PCzenx",
  "key12": "5aLV4sZMbRuTayUkdoqe3Xb3fbgFRKjamkoV7zTr4hehNw2qoRM85M9cUngCa3G9AMbDXiBgsrW1A8uJ6xpXiJQ3",
  "key13": "4TiDtQHQKBmCUUs4hCmWKP44JZ1LCvnav1A3svA87xAkd5Zi7FvNwDpLewkY416586iibYeJaMH4k3jkDmjayAZy",
  "key14": "5NUEtHbBfdhs9fMFfyAHDHDYYsjPHVNb5qJNWeZAmu3AMi4qRoA3iKcd34watpSxCwwAM8CeU4L2upodjCo9DPNw",
  "key15": "2ekxJFZ7Y8SRi1xQbKyZTQ6fUi3iGD1iDRsNSWgrJA7C8cL5ea3Y8zQ8BEXanG7ieUFvQufuVnh75mUjKWMKUXav",
  "key16": "66uAKFrGW8bXmZxMWJkFiy58HzD13M7CbjJbHr7VLrxWvhFnAdLNq6t1oyCMRfgF2y9pQmb5KYHFFg6mXjyYyQ7a",
  "key17": "3CGd43E5k3E8tMB3V8rwDfhhtJuJ7LeYPJJdxzgvWdAw4Kx6Jgyw6f9WHD9dXSKhN1pXm3tBNJBCJEqgXgXTBRUq",
  "key18": "5u3X9n95dSzXF2ag8VPR63DQh5FkvSjpwcF5xwtZpoPSS4nVxhQAZ1AvR9dgeAbKd5VHuzhq5YLAsDy4Eo2VrTAN",
  "key19": "38sniTvGryQuuFTn3KxJ2fhX4CijXo64dgmoDMFJ6YSiZeUgFHY9kiVWfhz5oqrN3YQm4zj2s3Ur4SLm722jKZU5",
  "key20": "QZTTsnDtxDTZLffsTNeAtGAD58P8s9oB9ijh9oKTzKV23j31THE2hjRstdkfjDVchSikZ6aPTS43Ta5FrKmomLN",
  "key21": "52ef3DGHzaqgh8BDEGFa9KDmZPSdqifXLMAVw3LUwFXEAuBuGNoRZZ1RR5HFYNs8i6SsKYG2yiQ9xu5QEKNEXAGs",
  "key22": "mwEimjvowFhDwWzWySnxguNgk5Y7Zvq7P5Eo4rzJxha6DGMKFr55n3Ws1sefPo9kQVW3KKG5n8P4xFZrmbT4WMx",
  "key23": "36tBAM8uLXKfFUHzTBzaBV7Ud8tDBSxZquR3KqXFpBKVStPwavgCQY1ziSvDyWQ86exGz2MKrnfditAacAaYCLhp",
  "key24": "JXvhrAi2uZRXKLKJpH2XSRmg8pj2GamUKZppauRw1HskLjTeb8uhdRnJZDP2hPPJmsSnpBW28qPi3CNaSKBTWfN",
  "key25": "2DkjkuRW78Awd6RtH4KzEia2YZ2KXie229UJJ7PNz323W6SRarzDoTq5NSeCvG1kAFQdptjfurMCao8jpwAwSv4t",
  "key26": "5UmynT9eAhqMTqPwfeqBoMxQuK6usxxqCnuN1qtyzokdKoX7QqzcVaEVLhcYzHrNgqCmq8774RYhjZZzHeDB3UCM",
  "key27": "2xKsgip21TUbgXJyUfUMvGjAmGrBGbaXZvdyXwbLjps7SqJBq2uDMSc4TFpc7Z5cBF1ny7ddpZbyedaAcZtaKNwU",
  "key28": "2QdDDjZx5QoiFuadDxo9NfQtL151aH98Q2otHpFEReC6HC1D7wNTb7BEbUwYpdQMBPxJyAMMETjDTh52PY66QYk8",
  "key29": "2KYfPmratbQUWLJF7xC6xGcyaFZe8D7pG8dBb52eXK2xjSdPTxPSJzhfUbrP6g2eQHRNVKxH7Hft8mkpX157pxrj",
  "key30": "3c3tpg7nTtiZk7GXvtr5qSrJxTSnUokKfkwGR1Qkw7YqFEYtEfw2LXmBJFE2adMKfjKjSTKz222vqdUQ7f56Jp7f",
  "key31": "3E3pXhokiQySVoZgSgRsXeJy5vexmexjoxwtiPa3jBYvh3CKxCEnYza74myCo2m9FPDDSBUYfsTGdurQfrkgab9P",
  "key32": "5U7YmF8mBpp86gMku75dYVznDiEqaushW6bUJ7HWBnckFZU5fTjBKfTK1ddP4EgcMwo5F7yUaKHD3SE6kVBuEpHi",
  "key33": "5uiAeVr3EG3jzQ3PtBWET1xG6XTgQPQy9CeK19ce3Un5KvGqbdcRkpi75wFgxMhzYWTH5wKMipZQ6waWZHDA3PbW"
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
