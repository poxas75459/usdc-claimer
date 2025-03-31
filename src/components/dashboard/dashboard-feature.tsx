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
    "4q2B5Y7eAZMi1xSzSTMHJvJW4mePAKMnt8vuNCMvzRcDnUE23P13mdagHtaJhhqAH6VftjyAHrYKZ5YM58wbE4yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CNbx28UnokGiQs8wLUQyZPVV9zrqfaqNoNYkbC9HRigpGPNYJHPQFTGVAbCiT8NmWaeRZ8rPQFUEbVve6vi5Pmp",
  "key1": "4Fp1Qb4LD3gSmVC6ZfLUQep4wfpKT6hLUaV5BBoGEoovE6QJ35yiHGXBmERkd9grtdQhGn2AYxCYcArWFT78ZSDg",
  "key2": "5VPcypHUuPBh41WH6h6YaVTTMfBGzZhKscgRYBQJ1iBRjbofmTooQef6uuq5g8FnFT2DCkqxgkn2agmtNczDrhZe",
  "key3": "426dJJgWUHWThe71rPmtsaXfUpfoBYpLmweimtXYA9U5EkdRjyzhc61N3JYuwGzv5gtzG2WVCQFJhZDy9zeCbJtY",
  "key4": "3QSngY9cxVA4Dq32T8y269jjmKphojfLmtgEoSVN4tHqBZABEBg6bjJN9xSZMB6x5b8MbQe9t2JHpCvSdDU4LSWy",
  "key5": "2Zzvb5d4JWSnp2VzffeGhWCz9RYfhaXpgCERi4LSjMqkbCLWY27z7tAUCSCb4YiRMtNTJHZiPYdMscaWaBZZXGU8",
  "key6": "5Cwo8njtRhEGMBYwjExLDSqjtCL43vKovbqcz7ZZYu31jsH9FKpD6kgKSwb4LXK8HwKkJNFGgprV5jS7UNiSJB2e",
  "key7": "4kGiJJ1DiQNGu6yBx7TVp5MJsZ5FHt7rDdMNWVTQMURp7D6SSQSEbbcFTgt732zMupGNVfUoB7oyqa6vKP6DB9nZ",
  "key8": "UjertHZ1oZBJQLyzJAncihSmMCbDZcwSxePtgdECg2BcdPTMqpnihbV11SPmbVbvpbhQz4xZ4AmCuMuLEg2jGwA",
  "key9": "3Fu12peQpY6TPdpkXQZFCTYVM3jR5EV2a3E3RyEtNdSKgYtshdXzWWrfBR4ezodsRUUzUUJTco9BDi4sQ6dwnKhy",
  "key10": "2UKHqeAkqFsyv2xKAVBY4WnYW6Mb8Tn77w99sHX846fJWqMJ1QZ3kfWFLeyiw7fJwUsF67Wb9esdmXPk2EgT1gxH",
  "key11": "4LwFvyS4uq6M2ptDHVRVmryCovEMfv3enYad4Wf9F1eduQhRZWhaRdM6kddSKQYvwbqEy4xKesEneo1MAiF4HAc6",
  "key12": "2nFZecKXhaYxNcLunQyc1HSw8XpPLA1ppmMs1wB5NFitELPS4c3vEEEgJSaPhy4f2Usi2riwQ2fAmRj5hoNRbvmB",
  "key13": "4E1Fw4BT6m4w2XKWJWNiQPeH1DD4k3NKtKvz4bD772m9sqSVRCYw4YzxTn8j2dRDDhndQe8uvyDQQy9Gjpq4DWW5",
  "key14": "5ww3yPDSRkvMAnwkJ748dqRqMP2AqJmAHrqaxUT1hQ8yyW1QowdxKvNsxb4UBN5wLBtp67xDWdify6GZXDtfdSt9",
  "key15": "47nebwxFEUU3S4BYgVdZuVN1aXAKjWg1D2vzWhckB3j9w5JQTPo9vMpzG61puAJNPKZ8nHY9ektLsgx6HvHnCWDG",
  "key16": "4YgWAV43TeJ9aercpYUXC78dvPewrwVBXg9ydmsu8KHq1pwLEXPdvNvnboNUk3BVrRPumNPhguQhFsPFguaU2Uod",
  "key17": "wuhiM3hNKUxWEbhtVPAuYeREBy3yZnvQa7JUzTZxTYdwzC3gm1m3JDaHDwrfFUe388rjmmLcPZruygvQzkNp6om",
  "key18": "3f9FrXnJnVPK4ZBfcsevCV6vtncqySa5pwEPRZf8NoQ6QJW5kA4yHZ2gjxhSr18u1QdczCef5x2Ri7xYPKPUsvVk",
  "key19": "4LGdbP42pDv8s5UfvFwMMTcPibjtxYWgh9bBJxfkawmGNNkSEPCgnUEst8E3fMZDYhMuysHnPXvztoW7NvwSdzCD",
  "key20": "7D6qZYW9HRCiuJK5Fojz9o7JjHrxzWqVj68ruZn5nN5iUBJTpK532M3HT6htFkSd7CqALAQofBfPjY8PzeeghMD",
  "key21": "3mtKCWsUo359qCkDFv4JDysPotyj6iof9sn4VP8oc8bvRX7oRn7MA8vt9Xn7p9ZhuEGx8M1zA5Ho1VeyS2GXcwjF",
  "key22": "5E5gRfghPAdughyy32WGrFZJSiregfothezabKRySYewgZiqZtXT4e28DtA1q5P41BYW6CLk6zSgN1VMTt9hCBvC",
  "key23": "4DQUGgu9iqvHjj7S54b1F1pQurm5A8uAr2D22epzS3Uuhq2UTd6oPZLooE3bKtDVWary6uoHUgJvvq9y9TtHCFmJ",
  "key24": "4z8ZeTKWqx8uLfzoar1KfYQvQ9rYoAtnyht18Mv8dne4wyUrSoqqy6VwNiMsELBjQTFtsJFrX5tdZzkkN8Fhw6JL",
  "key25": "5uyRG5AcmjMjJGyDiNaMFYakHW3xqN4869UmMGSZzno3MCJ5DYPy1z6PZbfbmnxm1kEauvAY4AtSJVuJQ1bzJMrk",
  "key26": "4GyATjJ7mDvUhVmd5tchwiSm7r2jk6HbHjxkF5qV8fXJL1xJauVRoFHWFvjLRFwLGDAkgypBDnHvQh6GT4q7pHsq",
  "key27": "5aLQfSiMSWSXweWsqoL8zHHRsCjyki6tcv9rZv8V39riKNyJpcL87kXcZyfPiqg8E2UcUXFRrKZyjuGVxofWksio",
  "key28": "5sRuL4URMGKqgjNswtxxJGHdof9UQ4WbEotnxTMdspXsvPd9HFaHG6rWaJxEJo1W9LeQwRLnabNnZh13Z7E6iPLB",
  "key29": "3cY7maRmf6CRJyZ69KLWJ6T8ZMp5egyJ4E6i2Nw3aiLZvMqtXMY33yafrEK695Q27RgFGvnY6ddTdYgVQAcHx7zQ",
  "key30": "3Dn1RppuzGGxJLK8uPLn9fThmMUz4gi9onJczdE1yNq96TYpjmVMby9Tg7pKUcLnRotgubddmjr74Kr9vQKX1RhY",
  "key31": "24LFxFFqt8XpMyuGNJ6pzht7E4taQB3wVYgJ3djJ6K39D9yreUMzR3MbFLgBmP8VBNCeQcZdFs5g3y6RisMg2ZcX",
  "key32": "3i5r1dSwBTcG2Geni1wf1MSfDeU6SyTFqgdkRF84iMNMGZfPCpu8AAFo6Fg7pJSEN4WS37tv2peD8JT8jXjGuapY",
  "key33": "4EDXes4p2rDKFj3XERmdz9kb3nSyNdBgMDRDhbwMkXjGfcrEbtjPnHYCV78rw2nxu8boXzF8nmzRp1Nu1mvj7CMi",
  "key34": "5YNoVywXY7wPUJrYPbENhpGvTgpxzZq1HiJRcZSGVgcpwcEkAhN6D8yAo9pphQWh5FHq12f2A1WFGm3UCmtR8fgm",
  "key35": "4S5yauXFsGzfHVgT4CcXjvgv8jEVj1Hs3JdxppT9WxRzm4RiHJfgNfuNsX6A1n6Hzx5892qtGyAK9c5kc9aBptqt",
  "key36": "WMpKVzitUJJATBFFwTQRAgd6nL7izPTSPjgLAsKSbS7k1CTm6Bbi4cPP8zUhHN7Nbz5qQF1PjC6NspJjfZGhBMY",
  "key37": "XbDVWBrWEvXDQoY5UVHA2Abe1ncZL3q5Hr93f5Diam1rHbdUnzC98RUkYLit6yKPBrhJYWeismqwT7KyMw5ToHu",
  "key38": "2riGgRmrcR18UDAj4cumuJZzptRRpft4EGECdcR9ERvSkrUTCRoHgw8NSkDFx56QwafJFUkppihWYae5Lou6pjUC",
  "key39": "23EmAYzH59Wse7L2MHjJU5TSsMAzFdHdTq2nYuve9H52NuseyYMvVGGg6ZfzHat9YvmQhgeNrBcdYnERCYH6y2G6",
  "key40": "5GZCdo5ng4fNiTVYQphuHRytqw7r4TboGsPYpA42yJ1Z5cUxAaCyjVFdTK76aRTdvatcfrZdSYT41Px8jff141fL",
  "key41": "56nmY2GFmGFuXJ5zDv3jfbckAt9zcM6m2Qaj25GeMDLaECGrUZAZXf1NZvuLrE3ecJJntM1uerUcF9bf9kGSbnsi",
  "key42": "58di4L1jqL695n8Efqa5YwFJiq1wTFRbxNC2MkAo3ka2Kc24VxL8p9HbXUqtMLnx7BM49JLoX2AM3pAr4SAYcYMm",
  "key43": "4UQp9SWcuoiBtKtRBEcVFKd5Q7d56uHWz2HLc3jessRWyE168jkyjR9SHo9RyWpjQK1UjzFMAKTmMtZNz6JwWQeK",
  "key44": "5NxTneP9ERBHWAYwF1tQApSuExXNFdeB4AxMaaUkhXEN11qCv6UAN15S35cHbJ52gJbSPFuR3pv2CtRrcKFtCcBA",
  "key45": "2oa27iVHCP1dVsvypuzWpgfoe2Poup4vVPVbDWwP1nm4XyxisqqoHqCqrGUemqVQd2HjB7528rpPkcL8cNPpKd4d",
  "key46": "nSjqVR1x5pTqCR8hdg8S4NfWnsHxZPJBq2A1NyfFbGvwFdqnvVn6ojkAvf4nVEURYhSAQW2S7BeW6ifT5UuLRzr"
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
