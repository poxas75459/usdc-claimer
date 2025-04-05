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
    "66u9yqcqgGzvT7R73z3iWrTxRETiXKcbMaGm7cNzxnZ9fD3jtVKSDxMwnqNRW5cNyBQtgcZWfWErZCb8FfQmAsxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHoHn6F3shLLc6yL1ZsxTT7AMkEkMayxJ3Vam3u3rCKPwzzYJsgMa3xmkcQ2rEBgHmXviobFuBT5w7pmar6cEMd",
  "key1": "NwtZA572tCP6VPTNZkNevH3nchg3U2NjYwVzu6knp44bi3cs9DrDMxQ1UbBJuqVfxRv9Y2rUQmQSjpHKDL6Uzy9",
  "key2": "ZpvXvCWPuKAwzWPD5mrY992kEzgeWuHTwPje3T98Dk8u6bZ6zh5c63x5Hvmv5Jmt1qeiU6V52MtqsBvDm8Cnbd6",
  "key3": "4bMCE8bRpTbxHDKotdEu7xznYAj3TxV8yoWNGayqH6E89BTGnTiZUEAdWBHpcr9LpYjbJHVgfovS7xSrN8skvtgf",
  "key4": "xzXWm26n4zLYzJcTsqxq7KAZQeNZsEph6pgQWkC2cVXyFu4KSBpjKrw9wEZwJ1HvCXfMfiGWByp4iLcY3rRnyCC",
  "key5": "4wkNSDSASRNwpLmBDeopvtGBX1dn3G3NMwFVnp1YWNcZq7xpdLbKEjCPGXLkbMyRHSucPoovavMuu7kMb8bPhG1Y",
  "key6": "5SjjDhZQS7b4sKygifiSrMVfvnGu9YaNDTUYWnDv8AWAm7Drwd91aGFpWdCQWXKUYHnuMNSVW1Uah5hDJqbaXmRA",
  "key7": "4adijBQn3mwC3uYczZki5jumXyZqYZMtACXRe1arWbD1NU2DPRBEUiqUVSfRhFoRZQxGmQUNX48s9QCe7bKaqm7D",
  "key8": "5i65qVvZvdbdwrLr2a5TYb9WEw6UQSzcqEjZLckR1BDJEte1G47H2nM3hwGiq7ttGUAPUX55weH7rnQV6puLrD74",
  "key9": "gSn5d7gsJuamZEDsQ5yhH4Q42dPZqcv2cSBTM5G2wEV1EJKy5o5GomNiLEoTNdKJDjeynpNS8aXJGoPEFsyh15z",
  "key10": "ULnnBPr7zz9ZFu64JeRiJu2NqCZM8nVfkVepJKrpzPYehVzZgus2F3wnLiWc7ofZLDimTprYRvFSvdMKzEscW23",
  "key11": "J5urcCREeLCWNmHpUi8x7koXWoFdAnSyTofyuPrEz3GFRicJVwnQoj6hYgftMVRz3HtY47rA5JbpqUq5RKGkqPh",
  "key12": "47LEu9WzmApaFHNgE73u4gb2LKQuTcD32CKuJGGjDV7vaf8q14aXLDL9fEk8oZeW5LZqmFB3qwJ2QR2cBtWCNazw",
  "key13": "2XnFTPQE64RsEfRNB7HWsfZCY2MpNfLoFHa66fzS2M7x66tJfgasE4ygmre4p3aJKkeXtuvmot1sXVSniJt71qKT",
  "key14": "67eaFa5NZrR5qUmgvScqCWr9Vg2X7PWMCf4qqheVfoP1owfwrtz6NV3Q6T9rszJDGH8DGK19d5vS1XHeUD5EwMVV",
  "key15": "5fatFE6wVaXjsYeMMrLxXXMP2XFgpi9cobG2bNncp2hk9FV5hLvbECNAXKdSZFdzS1aDBiCF4ktSUfMt5JjwR8oC",
  "key16": "5mGzULYhC3RCmgcYsphQXKMjMNQRmbMqS19JAE1Z8XGwZ2MqdBGbmWL1iVit5nWgWsc92Lx6jSPkFLMyK3GgoqN5",
  "key17": "2Zf5ogArV4u4sbCgSTUASU5j5C72eY4xg1eeipWBuALfxY1DRunQQiVTxL7NePonTMxAvixaKCCYqf42dKMd9Z4X",
  "key18": "62jwpj43x1axQzHoGSD2CEDKTyaVsbfq5R1jP8yVHrzo1xVCf1ZvawBgyafeBZ7qYb7WHEzhxdfVSQwAT6rwXPJY",
  "key19": "Tp55zuYJCga6a89eQfrvmLWeUXfEB2Tio1F2MikGFyTzPchMbpPopV3LgZpRry8tBUq4DxcaG39imXeJYBXxTNK",
  "key20": "2nVGKVna2JzxQS2HfG56tkuAd1LVYm1WiqZaYJmVxRABGGYSsSAchR3SzdGoaQVB8hwqtZR87okVuDwk5ZrNQqhy",
  "key21": "2gH21mfELAuTHSy2o8iRYtEsYQX3YmsZTzpMYuG1t3YxCLiaY3DNzvfDcfu6igwXZvVYHpkhKQLPDys7FZDL88SY",
  "key22": "4oTugrP7mJsPF2auHkNV7NdYAf7GSheqHkkacrd4gi56VQWyxRu5NmHLQEUdF3gUefL9xvqMfsFcjA8aY1Lo3BFb",
  "key23": "4ohb81eoEHAENWjaPLHkunkeNWSbBYMmVtAZMuhqYDLQ24JkuM9mevPrp7ZNu7RUVMXiz6YB5zAWyPJS6nZ6x38F",
  "key24": "41doBPw7NeyBHwhgCh2dA4wwhVx5zERH7NiKGXU8feUyj9GxVXGBnd1qiJbdw2DGTAGMV7Nifx7QuBVHXFpat2wm",
  "key25": "4a2RY75pkW4qz32AYqbZqCMrj2oMym5anG1M8mrf7QXHGBKiW2mnx5Vx8cz8e4EDJHMWza6thahV6rh8ENa5EiQs",
  "key26": "FMRyFmVP2BZvhZ6MeaUvewJ9JdKk2uMsrjXREcc3NgXbDkZ9UMDJH5TS6D3EN9ZwD4gbrnB7LRZX8PmXeD3Y6ye",
  "key27": "G6X3ey2cSBqSnqtb7UMYgtiE366k7fy53C3YXV7zcqNYZuvtcHYnAs4aPgbHvoD7QocqYUZt7upxXnVAVA8G6Dv",
  "key28": "33EcWgKWKEDd7Aq33xxDj9MvEFTfRMxGnnn5GpNR1yAGcbHBC4H5bD3iRaGBcybt5oQ7AFEi8JNbHKbLs4cpCZWR",
  "key29": "66DUBayvVQECWoirUG6JUm7QtzmUa94hY6qiDWamTSQPH3d2w6QtVuuXTge26dSTmHVRoD78QaEtKGakUKWXNevz",
  "key30": "52orSZE3MyyEPr9vxzysfombVKGkd4V4TWLHWFQxE97bPHcYShShAZmwxavRjKx2iFUr3MFPJsj6NZqQEGmckqSJ",
  "key31": "K8tvCKCnEYVYChD3Jgfcm9jPfrp2HzwjLxPVdD3yxQ2zy7qCE5cTrWU5qFte5nhh5gyeLG1oTjCKJtr4eDfhQ5c",
  "key32": "5kvXtLJkDCU7mF5LLg2LkzD8DYe3xYrLystcLfBG4PoMSHP7uRcA1YTAuMMfZG3cW24PbvPkaNq12U5gNHYaiPJL",
  "key33": "4fid1NDvaXQdN9txj5qcPrGX7U4QcXCCjvSSQuQjvFG2CcvLY4uJK27w96J4cKkV9XZfeaaUBD5KswLNCX5Yddhn",
  "key34": "2enzKp8KC1rZkuq48Ko5LqiFfb7kgQ9HEAj8bhBJsLDdxd8Gh63EJqFhwhhrQFhjb4dFUpDABemJu3vgmB6pzuLV",
  "key35": "4Wb7jsJBCyPhYJbaZQePwcie6RJNbotYmC32jcaWcviMs3JY2tLXuo5HAC7TJHjwWkor3enmrLvm4tZXEENwLtaW",
  "key36": "3FQe6ykeybaF7qCoe6PG95kj4SJmmiqTq7rBwFvcELt3hPx9FfcaDoyH1mEHB6TW7tYisnfHKkkcZeegK7RdzaXj",
  "key37": "2tvnna8VjJzja9WHLMWcTM5ucGCQ9RHrvFy4po2JeeiN3pYnyAZGfzeZkgfeAbH8TKbKo118UqJCXwNphzD45Jc"
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
