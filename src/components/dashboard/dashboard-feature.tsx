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
    "7DinCkMzPvtMNasdZagTA6Ym1WFgrUFbrKbYgUgwJbeitK6cwsoSpYC3Rsx2aUfxTGphiVsXsydHeTzJnsezBCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVum4pcwgcZ9dkTJtvS49ojrH6vVYKCvymH2FDsKMQtMewsM3Vn3TKus2p7FbLoDeDmx9a6aZnu36DyeLV7tgii",
  "key1": "2znBgFqMERYs6WUhYtQNXHF3GYcxva71ry8pQgWzCjgXV1Ddom9y5U5fBHzLw9JuWw9d3JpWhQUapL7oDc9BDoSJ",
  "key2": "gWKDDz2dwyombQUSURoqfRRaFHVCco91ra3D8HkWhLn2uMmQpJn2zfhCC62oezWRKfTuDdN6yQt8Urb2E7E8Nvo",
  "key3": "3S8af6m4B4nFVNafUSWVKx1j1137VPbYAL8GX5gzZPC5N4nqTTV8R3wmDxcPpJnmcPNJTtqhSsMTQ5oTSh5ftNXX",
  "key4": "5Lyrqn68R5sE13zo4ZoSXz1kd4PSyYnA6rJYoLGPmufpZXT7vYDF5TcLCPzvRPSijMoJ5JWuEhHxH41ceyDg9ezq",
  "key5": "48E44P19UYbnXQeBTqcmNELLG5CG2qkEFk79NJoY2wyamXD1Ews6zT3BnfMxUCs7e7gbYvt8av2NbJDdsajT7LDs",
  "key6": "123vFJDgQGdVFThNMXy85vQgpTUViD8w1sakD6kjjNqtQR1KvkD4r8jf89DYVJJVpobD9zdUR7E5M1AZbfBSQhXa",
  "key7": "2qbxfQjbhVqkiBH2kAdVLfGMPn518yyzSXNp5NqsGQEgfJzyQfz9RcMukYw24rJwtz2kvj25jPqEmAbMWBCgHJeo",
  "key8": "35V92gaKy4vqDdLbpdYtNei4fTYVJdkBuHYudXica8m2ttDE9prkCjEMu2sUPt2HTsTniEcVyh2QjrLrd8sr1G9t",
  "key9": "cMdc3K5ak5j2ymXG9kvATEseUWFvtSn4FiMS3SWnrenuKygcmC1SAm1EK1Lf9NU6HG4RRVDy6Ar329zAjtdCRZS",
  "key10": "3w7nGS5ZDtSZZWTTxscYhdryPHwJW79d1VQLyuyCHdpCUaH4JHJtyVkckRaoyAo3LLiJAchSoDRPEGbY4x5axoVY",
  "key11": "sqxRwTAittipXMvaiaf3hKC8KUnwHg43FFoGVbj1GEXMu9YTupH2nr18NQQsGwRbJHCve7y6mgH4k9kRnASA4JB",
  "key12": "2K6q2L6bb6JsnDz71pomBDn8uYpKJqwFeGwxnqUsdfaGx5FXpfEeE4AZyiBYcBCf4qJ9k96hqYnNjUqwRJLxxrmg",
  "key13": "vos9VUz6qw7XorFsJ7nXnjCi4syvx4bJu5FCQ1bW6oG8eYaB5nYqXyTsujNWoMcR4ZkZNRx5MkWjbdykSayueXW",
  "key14": "Zz8czqqGbG5JgXHza31Nj2tLFKFLcdV2J8csJRJoogMeYdMMGN5mm2DkuHQJwj6qDdHZf82579PeZ7YmKgFCVVu",
  "key15": "rvNm5Q7axJGW21dsRwLXvqM62disxBbPrN41RLwWC6H5ygRCQtC8pDpJ31VRaX3Jfxha1zV2WjXWVMMmiqVviJ7",
  "key16": "3oRS9dzq1u9MYDtDWvgpfjAuK5FgwvtW97nUiDaFbwVbh9HDnQbTPuC22bHV1rfgC7EnxP8x5nk9ChEAsCJdQqpt",
  "key17": "2xuUGbsg8Nbvn4LVta8xqX7XerqeniKDJu5L5KDMYxC9iY58ptbRXnjWRCoroeqsutTNtKHsgnQHG65VTihxRwk2",
  "key18": "2PKbL1bPNTdFC3buE4ddCVD45oMH3WZaDMrFQv7shZLpvAmaKmgXLMCPCBUs9e3drPBXSTgCXXWkH77FVsPn8EZc",
  "key19": "3iZyRDLQDgz7cNQkpeRETHh44ErGUhJwWrLGNVddegkdCzJMY1RWpfaj3VdaMioN6LSoPVuitx4PkSd1qarKM2Nf",
  "key20": "ahdMey1Gqed97o8RVLMRcFF4RTpZnPjmw7Mts7EW8tvYMbBAUxjXE86Ci7T2Swbkw29FgkoakE85Wxki6EJA5U7",
  "key21": "3hCroeG53LZxTSwhDESUqnGXmAWZYYaj7hQSQufsSp9evZ5L3rF23RFfSb3xdmRV9iFm5evm5qYFdgdXQjAW4s8H",
  "key22": "27tGwhMgishRZwHAoAZtddUy8L8bmBXkBfZjmJPMPRfARm5W8rG26A6CKAV6q3f3WN6kR2niNsSucwxyxiRW2fMM",
  "key23": "2dM7VEMfJJnX4zTSjy6AJR51LbycWZJDtsLwVTJxuVwiYChT5rJbLAs6JoKbugpobGUugnyWRhywiswvKNFZUxcU",
  "key24": "4htvUYrTbd6FGZh5U9sa8VvJSU6sTDEr7XteLHgBRu3YacANEHTbpf1w2sDNE5whXBHQXUEiX5YpKVu9dDS9uFE3",
  "key25": "ZseqN6RZ4sHuRDTr852K2t1jRWUQryy6e8CVzJ3mDs4EicRkSjSAoMcmtQhkyBn3opDySm2jNT2iEj3mgtUa8NB",
  "key26": "2uxx3ZYBusPKxeJFXuf3tZAGHzW6yuGM8W5YGrBZ9MoFHFNFxu45VLWLp63njzBw6NmU9WHpKu1CbGrK6G5oqWPf",
  "key27": "53vCp7pLXhwPw52PpAm6g3haNSuv8hFV4dRLMRbmUpx2VDaNtKmqKL53sqkpH5NeQgJ5hNuTHArFsUcrerSwE19J",
  "key28": "3K5d3pM6rsj6y6i8CSGFo1Dc6tZ5EZqwvamhqNMkrzp7JtMgrCUdK9jszVQJwxKwy1Kv3RE7WY6EHJ2AiJa6BTav",
  "key29": "46CUX9oUbut3yj1ESP2zzvB2mhLmpiY2zKjbtjSPGY3vKyEEjwDxp6dpEcUdCeSeBFqPv6vjmjPdpP5RgXuRJSBP",
  "key30": "cGNDXYUfprdCXWWDLFzpSpR6icdoPFi84cLyEJaAicLtXgvMYMYy2npL8HHDEkYYaFx88VXPCv33tibWTWHTkTm",
  "key31": "2S3ftrQ6Shjk4oZFF68PsTCHZcL3hHnmbSHnSrVdKskgeBLnBMeGcwWJV8mMwYjinmXEUgz1mR6r6goBcGnPo3xf",
  "key32": "55iWPa3f4tU7EW1LDwxrVma2s9UMocrrRgTBw6Pv9NSSGefYPTYDsvVSSgHWXEH9k75j9PL9EDNekHEARzeTqsqD",
  "key33": "y6CDr3DTGRmtePjnXKF3Erz8iEmiYF8pqvEiHjAqvBANnZDCZT9WJQViz9octDfCbryRrNCsXuHEY3g3E3GWRJT",
  "key34": "qHUZPh5uuzQ85aboZhXyKrTaRR1CEYpnMwMkKs4LHVcWczADRic3f9GPNjB49zuBRuX3PLsk4GP2pXtgurxnx2H",
  "key35": "4vXYumXGCMhQsLLfFdoH5uGtxbg5sLWfxHaZgfoRmktSjMusgFmRo4syo1HuoYKYCz44jtSmNo7rqjLzP6SjRmY7",
  "key36": "5WaoZDu7QKeZTXKgoDmyDFihvRmQyw3MLyabr9mn7UtcmfFGn2paeJNHuBkByhsrozKbe68eAi2qFDt3EBvBM3rm",
  "key37": "4sfexTvJokVS6qn9HGH3TyPi7nQZ8JmFDL8kNtVuvHEVjVYtUBGQWKSfxaghVtisjMwKNALRajU1Pycyn4k1qCCd"
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
