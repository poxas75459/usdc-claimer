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
    "3hWEd2ujyiMNPonpZK39TLfbhEFeFBvQ3L6sM3Ps6bSsmKijA5uVKf4XJjME5kb9MgJfSTBmfiPwWzCjRqk6QVv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ztchiyx6158UxvttugwkqpKfxFQAGh49UrNeT9zZFbLh1ozHZrGgyzJiXaiVqmLdtY3FMwEF2EG1eu75uM2tB4M",
  "key1": "5bE2g3qNZVa5uhmnBuGqGD4PKkhC2msPoxg4KNye1NBPwbQxDx35WYWmGVSnz8w8Q7U9MtCcX9rcduheojjxwS6Z",
  "key2": "4NfVBtguqR4rpFQSfDAriApFy1QSvSYbp8rB2NPQfhrEbWkKbwrhP1vv9owVbqLtnw9ez2gfYi2ZNERoQd3ovWHq",
  "key3": "2V9nxnNTQh4M3f4KA4iUwmxx4kE1dzaco2U5RSitsJiam46SNtuzFickR9xKbXWKqJQdzbsTi7LS9fJiY9s48uj3",
  "key4": "2JyJUSey9QXbd31xLvqbiUWyFnsuJXjrFJcCHTXedG5ozYtFXCunN3QQGXRnf3W5nrxxvSpFDURjd6NFGzZWsENq",
  "key5": "56FaVEkHvu7hpLzBy4LMtBM86s4Sttr2o7pEH1QWbrBkeijpiDhbNiGxTinwRAswHCzKPf1o3jvmFo5Ns4cV3MzC",
  "key6": "3QiWZWjhBoo9bKpP1eQQeb17CrmgEVPUqtPZQ9RLnfowEWGfLgdYhbR2CnedhntFs6fZwepKi3g5TTa7dn9tBfcw",
  "key7": "5fxac1Ap4A4kp1DR4MnWqwEhAwsdj3rwRcmJwZVRNVRZQ6CpPhoy1NJwJtZaLbrNxNihMCjq4UEAwgPWSwcfMrjH",
  "key8": "2bYRdQBkMquqmujc8Bucuo6uB91Sd8fKyXYaL9fusSwbM5sThnD3daZ6KGiXzvLpEmxivhmKeshxUgNTCw77VRLS",
  "key9": "59FYXqrxWpqAwVRaQZWr9D3Ko9cC7FxmyD9VxJNPCuqkUTZiU2x3Y3CNxXYNUB5VQpt8NQTZSSHDoh2R3iDxrCqv",
  "key10": "TqCD7nUgXWTzs7z99YsJXGxcReURxfBeFcvimRjnkmoP5WdYj7STGywEbq4udXxG4Tx91mneH3QvuEAYrEhqiwH",
  "key11": "2WfaZAb1rfrw96RN78V1DQ1Rgr8SCwkGhi3HC7kEhhavkFJfifBaxdYi9WdXJFpdK6TmyaTs17o6LB3roN9Mxg3",
  "key12": "4tET14TFEZC5HgyLxrUHoB7LYwEDwUoykqUJWKTByY45uuP9JsFkg2qk46ddK2t2xppKMRb6QAEzD3NmtMPxHf5X",
  "key13": "5W85s2MwQgYwm1dJgMPVdvrTU9sJydCxCoFVhnHCXwpCAekNeHfLREP1v2tEcafLPZP4HMmH8vyrCS3BqUSdq64Z",
  "key14": "b4djHxNipB5je8suKkRtrdE1R7jM2xAJ6mUoAoBiUzPePSknR2FhEd6jWe4ZwmZ34m5bqVPfSSGdzeGXTTjHNNW",
  "key15": "5Kmt6PYa5pPRfwKFVQMwrQsGBMAh2Vmf989e2cEsfPwC14GhiHifmT53ppdoHQQtNLGEaEMP4bYj8EkMnRvc44T6",
  "key16": "5nWU5dsGo4zkt8bf6eyseZUHQL9eSKdXB7U63EdFEUANotNsqDarhohdMorHdRC1pBtEa81MVK7SFXTnyub2KVyY",
  "key17": "5XnYecCCpdLxZCehtHmkfLHmxP2bDiNPKo8Whd1eVCRbFfsx254nuGNUxWSZgmvuZZzeHt3HEWthbz9USqapX6jv",
  "key18": "bQhfANDGer4ujpKq6PTwshbzo727CHyTwsp7q3FvnRYFEtonyboZNXXCG745aEHSZvx2PbNT4vnYuFNiBgc8LUx",
  "key19": "YV3LvtATUsQr9e4UbTBNm735WeRK8pvP9sBpv4RmvJW8msMfrEJudELVKLebenrLpLCBf8rcDrYQAc1gC6pnEYJ",
  "key20": "5ctJwp44FwJ2rgrVH6p6Nst5APJdtETKKzJjAKu75jHhFBKVn2BiAU93xQWpuRg7Y1v8t2gdHTncAmtd1ugV1hBN",
  "key21": "nNS3MHAoJReSK22sQ4TMcybkYmPJz3ee5mLK9eKYfXcbyp9DjABr6ikdZzPk2MnDtnog7K8iBkYPaubdNyYC1cT",
  "key22": "2NMEfoqS58sRCg92SukvMmPd7QsGmhHM36zAwFaj4HByVov76SzWUZMdXYxuzWEsSFBwVaQ3ENAKqQhwCeAadadh",
  "key23": "3UrKCkVE4kNL1Vw931tgoRssPBYQTD8s8sLMZkfEsHkm7LK9Ey3mK42DMdyRTeW18eSLek5S7ttUt82QHpfyiHV7",
  "key24": "3K4FFaX4LTQycdR1asA4fHZiuQi6N47Z2h8RSC8rMzbMi8HFfhqE6j5MD3bH8jU1TCSQzggKRYNU7ZbcnovkqM61",
  "key25": "i6VZivR4XspPVdbqzPiiYKkDYpjeWEVoH3SDJhUXdcnnXQVbL5fyx8Xm2V8gaNuonCDXvDCZvr6keMEx8vcY6CY",
  "key26": "4bQC8dWMHpzLQEok1PDA2kveTwf9X9NtkPdxJoZphMGvCBZCvQMziPs82bZtXtTcnqVpDSBn5VzunZcMt9NpSYqC",
  "key27": "3omyASFpwCPUCJKGGuhuDgJh3zb3Di26Hq1a8ypPz7TW922kibamrwjo5yevzKjBSgPZTuboZ3LaniKCAgUNpbjV",
  "key28": "5UeQ64VjwdLuHdGuKyqh1GuXp9rJbFcgXQJzT988rJEZgSDU9YAXfamozoAknQ1NcrhzyvQ44iG3zqC5xDJtFZdB",
  "key29": "4WrvUZTgdLMwsGVDywuZT2HzKYw221Jk4NY9aqrrdpC9Yu62FaLX9VAiMTXSrpgFXP7T6teGVsTCyjvRMQG66YHw",
  "key30": "2dxU3CiS4TJ5pTbdeL4vE9cphGZuu82SjbeoekuF7s412yNn2v6L64SHrR4dtoGCBhf4MGaDJoWmGx4uh6gQVJJG",
  "key31": "2c2yLfKBqp7Dgjtvj6jpqBNZahuYgfRthKytr6cyaaV5QaSx3pzBCEdKUWR9JMkg4g2qKDL3Ec1ZkBKzm4RPhbXS",
  "key32": "24oue4kfM41eY7AKvcxhBGNaLnuH67CJz45iWffvZ8JQfaDxV2qXj8Z3Xza7RuDV6zGtYG267dX5aLfP7QeooJss",
  "key33": "2rQBRiQzrcCsSvZEJipfBUY1NSsKTRbLBmZDxmoBZDS7NzTzDhDJP4LCyamedHjEPBMJVnHoozJf3n64DsQQD8M9",
  "key34": "642vAMoniv23xsCBNTSak8tk39C3t8AnJtKMeQbXKo6E4Eh8s7AJ19BVqvQCvcyzEEZpUDciY3uSPU6Hnyk1cADb"
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
