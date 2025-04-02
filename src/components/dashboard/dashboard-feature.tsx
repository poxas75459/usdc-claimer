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
    "5zKGkv4XD3yUzzw6c5SeUpTonLAKAbKNbxTEQDojtVbH2LGjM7YVrJVz9HqyZgrYHtF5wvgyryHnPHQgxoYwZtnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MCZkhfinb5XqN92Ak7Dms1G1JkfBS68RiJvK8jUhkJ9Viq67P8uGvVcwYe49TJQMLcwSbaJSssFXELk5WotGX5M",
  "key1": "3FK8aySQ1ZvoRQ5fAdsRbzRkHr1oGLusGtYAhPWgaPVEDgDQ7pRJsNHT8hE2nchpNWmEvsQu4JeG7rneHhUBypdp",
  "key2": "3Eb6Xosn8oTzujrQjN2GePkcZaxh4Gt3e4M7Yjj6L3UrYsYXwffMCbHqDjAnQDdqAHxyQW1vSAgejWi8DVsXRRGu",
  "key3": "3n5HhjQhwgHdQxpXT5hEHcGQFZXDriT933cL8YQKfoWCvX8xp13ywsYX7bpiSWcrTdz8sRnca79m1e1oL7kkmKJt",
  "key4": "4U5qqYoRutpn5Y3owkzJk1DU6PnDFvyUPmFDHykV6PuWoe97rJcRhh9ZeEmefmQwRHxjVHuweTDLW58HiM1YenQB",
  "key5": "2tdKordPKABTtrZgLb3FEGM2ERU23iUN9yzLze5szzrTfLZHJn8ZS1bDu65Dzoi4yRs9dbK9Qw1fvm1NnXF8YfkK",
  "key6": "2owpMyfRZBmQGB3rAWatKi1hw2ffCKMEz3d7Hf6h2WNxuxUzmQ8nhCTvnGERRc6eMb8map9ojkj1HRwTrmVjAYnW",
  "key7": "4xzr4YQxTpYPeyCobJsJ2vKv6u2FS3qY49sdYnVtqFaXEKWwawSFLmczfqWtpR4weL8brGmkaBY47BNNBB4NGev1",
  "key8": "3SRfx66UYoi41JjGps3UeLfpMD7QzjziQyU57NARcEHhLf6ivZVZsfiXDLESFFWa6fUS4cGSFSRic8JYBRaurcv6",
  "key9": "4iGa7rEwYMXiqwbRBqzUjrhUiuudK174W6iMKXNx7ppTQ72B6NNoTqejRSeWgC7k6WBGAZjgRUCcKzJpRsvu5onj",
  "key10": "23mZq1UfVTktfMuAukVpGrZeuzWKripuKUee6p1b6CcRx2aXKCJy17VWLaa7uvnbHwy13yRsBhGYofXkadz7opKh",
  "key11": "59Kj4v41BauDnsPZxVJwb4LT81UaGZSQDZgt9bgFKPsWQdDtXf5vvFPJzoUNpfNYZBXsDeGYwrXvEXdp39c7uqSf",
  "key12": "2TQ6ZkNDyzoo3bHowAUQv2KL18VkKTEiPMr7hqmDfsD8gRGnyDkoCgQn8zH9kFRZv8FgnLi4bBEU5iqBDYDr6rCm",
  "key13": "k6Ag1DKipxCj9oN5BVYHFrw7F6ETKNg8BSKUXUuNNqgY8UxM2JLtjAbze4xPyTEusoaoXkX72gPqpEdFyu4idgR",
  "key14": "3XCZNoZvibhdmbYKHQiGwNvhkhv4YMUQkxSh3j3TLh9ALE6CmQbFuPuYXM1wtYnHyGHKkCJzZnJKU8tYev433YXW",
  "key15": "4S1Vgd6WLmWDCzamz4dhPSNLPYebcpiWUVNeT2nC51jfXBNpvVQB4mqhyruabGjdi9K9kiSaerD5pdzX4oHtCYei",
  "key16": "61gbfPYdfP25ugrae6RJjddLgmnrJDUAqFoxAjBPRwYVWkzaBc7uy52QBFpJ7ZwSU4u8XePwfg8yZ6LvqiLqzjhp",
  "key17": "2eFqGKFndQdMyua2crwwz4tztWf4PDutzqKoBv2epafKpBmkbH398q7Ls2s4U954uvP1QEJz3bgth6AyBYube188",
  "key18": "4f428ydUt1DA9xDbRXvMwM2Tpves6CW44GoGsEKErsdW2CDs5HVhGFXRcdMdC1yBgBQq8reFgQdieDttJDznWLqs",
  "key19": "3dspwNqkZHoXA7MojMUzVjcGFrz74jQNtpK8DyuSFDvwKKXCBkg6SugtYs3U7dN8JKcSDSZJ1wkV3jLCeeujH6M",
  "key20": "42a1a1RTetjAHbkRqoXivckoyTRmBxJQH7fprT22ZYUpqYJ911gvGyE5XyYkHEiQeXa8tC9XbXYawaTGoff4q7jE",
  "key21": "3rhZH5jE6fRixSZkCcRrk92HW7z2b846n7hyCwbyv1i3FyZsffrW9j7CAGvFJtL7wCntfwkYhYBa6kfvR5E3f1cq",
  "key22": "59os25EXbDi8H5bqiVm9ZiJHtB7Yz9jo3qyFu4dAt8Qv8zCsvixHP5jvaB7PBWodVK3WuJvPyRNEWJH1tKCcPgQp",
  "key23": "4qb2xk5kiZhH7gRQLdJaty76Q9PmznMbUtzFxSGf5HWVHQyzjpFp4py7tDwpX4A5iQAA5t5dUzUZyqcNcxCHVYeS",
  "key24": "4H7okvDzwZidykySwRq7bG5TT4nRF91ZktcA9vuDDfhGPdPx7gpdox3NFnxPTHQJcmJCB4p9zt4J7UY7Yi5wGwKP",
  "key25": "2ppkiLNp2JQv18KwenwmSQW3k7HVjysB4FBo1tsShfN4N2JZnvHjARXsCnyKcuTuFScJBz8ED4d4SqwWNTUjo3tU",
  "key26": "k9cvjMQ3qXf9jWPhUToexbwUL6KFZvyf8mDhaWiaKCWmtPnhKVLxXkbiN5WdJsMZ5EuWQqZH4tG2x6Crh6NgMBN",
  "key27": "2Mi7Xy2j5eS5iCRpfTPLY5ficGgBchhJgRqYYPSfohCsr6TJZ3EqyEdNy7RKVuWkTcvf1akC1Pzhume9172EtN6f",
  "key28": "3QSYuJuA98vJWBsFzHgHLbL1QMgCAjaSXwvhHyqL9witH4qkxNVg9mg3Wc8Yh89EBSTiN6C53kTsvV1zdhBQ5D6n",
  "key29": "3anEUMCxoqo19e4WWQ1EHotrr9LEySgvDJASKxnDosxqkmCTYuN7p8UnJtKNpgWZb3YszbMQDUDCohbYEYwzJntg",
  "key30": "4GXtoT8Erxt38wXXqAhFAi7c2ihCLbHqPuziCvyQJm3YAmgRZ8yGJn5KSUSY7LUKwsvyGzdQLLL2rCywdnLjByUE",
  "key31": "Cvx6XHWYxL5mu1NGbADfjKem5K41necUN8T8YivF1n89LJFqTyzpXaWKETLzoywcex9msTxKZp8jF4gdg7ukZcH",
  "key32": "34rL6aWprEoMgjtxWyZ2aBxNsi3D6ho3RvmmuaDwSw88HWX11Mf7Pm2NJuuBLdAMwQ1DajpB9LJVk4DvAQZjBXuL",
  "key33": "646FhYmJHxHHyi2m3xo3sk1os2b4BqKSNVshpS89YqK7YYnxkJ3iCmfte3b8KkFJY1oBsZFAU8h5wkRLPGvsuxYS",
  "key34": "2tLjHR6gi69dweqZBpzUQV3KNjq7Pw6dawKcj4pcXB3Xi1pfNqHMRGpDr56EJBquEFdsExeLASAKiJhNt8wN1q99",
  "key35": "x9MWEUzhCooSD6Tue7su85Gmknym2xrd1cCy1N4u3BK27CYpAq9n2chyBE8F6wdfNAy4pWw4LFWx2n4QKWCJWTC",
  "key36": "5eamqDAAc3x82Zt4M6vRBqtuWLDZRZ49wJabtbsm54DTUJ7LiSbPzFpnW54xPr5DGbj3gyLhibxngyj93VQRiRdy",
  "key37": "3d5kZJT9AEcUbnbHCvtgnxBzU3DWnaGgNHSomJG6oG1D2vSxdCnyt1xcyo5MM13VZWkEvSukcxqQyXeBuzxm1LtZ",
  "key38": "3TpeyUN9A23TRm9PxBB1xiHoFaXeL84EmyFib1VYsuJSC3qu4Fk91fNBKANYW37WasMcRniQcttphofw62iB4B34",
  "key39": "382t1XocYGagcWiKZ5JYHmHqukbUHeF9im41LexMxf7h6MYuQWW37HbUJxmRgKjx8uuE7z5TNm8VqJ9gK6sPsFfW",
  "key40": "5eZzmVzYEnVzuuAvjhUtW4QanrV3HnTuQLMxk9VBkkpnDTf8MEnWUKwojLSPmVosyJFHXAHNHKiq2abR8o9bXfoK"
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
