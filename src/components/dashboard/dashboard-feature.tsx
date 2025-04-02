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
    "5y6UPbjDK31U41iiisdPiu2cCf9zmBVYmMiwFr4KAVrwipz1yW26g5ckmAPY4Zca9CK7jAGzECrG1Xdw36Mni594"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5is7KBhhR1ph5a95jZPYQSybxYQ7exdwvaTbzvRdm8rKCYuHGTMGYDVqZ2VfpBqWETL1jSynAFFGy2rgcd9aKKCw",
  "key1": "G1JPtVdEgcyx5wMaBLjNvDFyGwrEgFwKJstwK4Py7fJbmMmMN5jKKvz7H5tsz8PVsfYaRf1J1NR9tHBGT4s68Vm",
  "key2": "47o95YmxabepwfPf2N9XHPkt2E9iYEPgD3PD6Ej7HB4jcC3qDvuffWHH3oXL94VMhRaTL3qev7janBijDRpytwVd",
  "key3": "3Y1wwrZ2R5t4McYVchX3nMXGvg5KaraMiwWYe8xionQASRW2AS5DZmwPZwNpqo8ir7YURt2xBGaCLzT9BvNP9FBs",
  "key4": "3PMHtdPCCihyE6HuN1Gk1ByGEQyUsN8NBo4wYVCQ1gaebDeY63qpZFg61cxMaTgkyAZ2GvzpNT4sFTiFWvr5Mumi",
  "key5": "5YWCHRV18nmRyALrxTeG6TbopGz7LeSnxvfHAivREN5hoRShpfBGneaNHipxGJR4P5zchmNWuvHorVCUiZ1vBrTL",
  "key6": "5LHxUR3bf1vNnkd3nzJ3w7WU4vPzF4zqGoX5Qub7NuXc8g1yVUXbJtnudCMgz72fDKeva2JViEFiyaQnj3JCzR7r",
  "key7": "63MwfQ3oFT42uBN6fr5RSeqrwQi5WowmzGAE9JyWaKeVHY7u4xVEfEfjRWNz35ASbBUVFq9Bs1RG4uwr9zYpw6Bz",
  "key8": "3PG4jh3zFEAqAK3kBHddkimNUuDwygEK5SYTfr1PL16w5xxjg8EaWvxSaYLHGPR6DC2en128khCbFZmZHxTTSuJW",
  "key9": "5CJPUXDxXQuJVdUhLNAfvLtYyC7v4QeFRD1qGhf5xjX6kwyDgzyaTD9SSRnXKENQWDFVgtmP1cQ8ZZVjznQ7JDq4",
  "key10": "3ujCxntCTGZ9BotZjcugczLjV7CLjUTGwPxzXwKCqF3pPj7fSbL7sZeyKDDoL74RemSPQxierRmfHway2j4Y5HkY",
  "key11": "4Nwtbp4rGepgA5hVDLzs9EUS8Nj9Am3dvnjV5xyvuwB9BzQDNz7yHmp7vkqMs3JvgdHENCpEcbmUJryZe5VgkYW3",
  "key12": "5iNdm6ZnNNuxy5ViLfQz8THHBPgufiaLVow2DQCM3UTdbxs7DhK8cZ2SpERvTStr6yrxGLUzQfDfQpeHf9ZgS4ic",
  "key13": "44njgsmx5t4wFn18An1AUoyuBwKY14x8foK6XyKCCJQk3CETbc5UdpHJgwThAckfQiLzmujKSt4XrNoPmtDQbaDD",
  "key14": "gKptsrV6sYHczucwKNCz37yRBn7K5yjDrGBrpiehGoHBBMzpQGsAgnz1LK2mKCVkpxmmEuaesaV65Ue5AziuCVg",
  "key15": "NFWyg2ptsYTqkUsXvYgmwQJ9YCAeDKgLP4EJ85qAJzLDg8YyFzUSWs48oRkTEKxBbe1KPZnU4TdKM1ekKRffzXy",
  "key16": "53MazTmcwkaowvVL3d1YuS7NGvvXunwWDLXPSwPam31sgJP5Ff1J1twzvKdZuoN2RLEPChoeyj5mwGqdzeM6aw6X",
  "key17": "4b1a1Tepi3GGu43ukJWqmGaNbhRsQbbrCHGZd3MKQA97kfW4wWEV3PsEj971gXrpDpafKkCVDXWM4AWd51sdLahf",
  "key18": "5Zp9icCouhYbzyZxSkmP9aXh8hdqh3A76iu7TkqTePi7pJB7ULa2i52MHBngKEb2g8GCuRS7Ao2xZ98SB6ZdsQmn",
  "key19": "5k7pF2pj4wgQN6XDafQWLfy1TymRfvozJjYKQqUBi6C6iGYMEkgYSCb9m9mTZ9vtsStDgip74Xk5mvbXkS4vw6N3",
  "key20": "41RwuovwSNRE4LMTnQH72ym84Zh9NMrbyGBqZiUitybMTqMCxVnasiRicX2EEQrvJiXDzdYtRoEb9LnY2gz4omaC",
  "key21": "5Jw8e6nAYpBUNYBzsgTWgw4SodXdhwrgUGxcPnW2psXXSFFxPcinjyPkGxXDC1CCFVYaZmnG3GsPc7YEi9eMvdNv",
  "key22": "3qvvpVFTCk7rqd4rnTdvnkDZUgmC23vtqqSWhHcF6LhSytwzL26SNiKmdGf9wba6Vtu1SuUFiYeLZc13ceZKjF7o",
  "key23": "3FkeVXEatLX2GgxbmoyLVMwLVEzeYtXYUAUAUkm8WNbAU8KMTJvhFB6ggr5ELQajocDmUMCZREHumMvbY7AXgn3z",
  "key24": "5STA9m9a2wZjMT1raZmVmZq1qb1KjPWu2vYMG7Hk5vXjh48rQgdxaKxCmhSCnCBEwe18BfBXRAnGB486bkSrzQxo",
  "key25": "48FsmreSiX6yYtpDhzJAaRggq29dv6vvrh2FQm9DJzoxXuCApDLYVMcPQgZiquVY9e2A92fTkPkkzHroGyhy7dxD",
  "key26": "44t1i4p3yKKiT2xht7DsGiShTcrTiztte3pbk2XJxzWr8cYeh6tUmU94yU1q4Z1jcxbwHwnPRVp4FUV24Ys2SvqJ",
  "key27": "54EPPNg6YqYtwnkZ5SZLEXiMPNPk8VwKrXJ6RWnvxkAQERXAK9WTMzvHDkbXnEoEC8oEh2KCYmTYcuZMkZqpkA7H",
  "key28": "6AzfyudyRRnk3FvdvZf5XCAsiHasEHvsNG49VGNRcGhmrZgqzpJZniP13kuonwGWkLoReHLwNkktHqcW9VK3AEf",
  "key29": "2avBSv7SSknvbunN69QPxAw9G4YUvbDxLFr4wMnUmpyLUimhKEgpPe5bLZKV8YMFFcg5pgsrRhsixvM5Dpx31XqX",
  "key30": "42NmxQhVDvJ4fUxBiD3a4oiYf17KUBPnwdEBy8dbMMep427cGsiA3gecoHFhyrYGx2Qp7UtVS8ceUYhoYET11KZu",
  "key31": "5vAjDnd2tm74zsqoTSgCAc6G7ozxJUJatP3nP7EM1wmr7H7jfgzRNZFP8apN8JFzhcnuVv7X45x1zJrmuLP8XbkY",
  "key32": "tpFS6hcmFK9FGuLnHPCFDA2R2YRAHQ6oCmnDTGi77tKagxaGNnJpeCbNkZ34mYeU3PjqAj75weSTHw2yhtQwtMU",
  "key33": "4yda58UTaQYRxJmkZd7Nt5PKSaJuUV3fQ8N8qbWy22a3dB8Zb72svMr8XwFePLgEpCcYNSdbkdWbkqziag13iQxB",
  "key34": "3w4QjJcPgtt93XB3BEJ5rGiZPGnTeRJfKc5nuth56dCJtxXcCBs53iQHFim85ooMWKxrzogUXwJWh1ExVy3LnKUF"
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
